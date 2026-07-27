# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

基于 Vue Flow 的可视化 AI 创作画布，通过节点式编排实现文生图、图生视频、分镜生成等工作流。支持手动拖拽连线，也支持「自动执行」模式（AI 分析用户意图后自动搭建工作流）。

## 技术栈

- **框架**: Vue 3 + Vite
- **画布**: Vue Flow (@vue-flow/core)
- **UI 组件**: Naive UI
- **样式**: Tailwind CSS
- **图标**: @vicons/ionicons5
- **状态管理**: 模块级 `ref` + Pinia（混用，见下方约定）
- **包管理**: pnpm

## 常用命令

```bash
pnpm install       # 安装依赖
pnpm dev           # 启动开发服务器（代理 /v1 -> 火山引擎 API）
pnpm build         # 生产构建（base 路径 /huobao-canvas）
pnpm preview       # 预览构建产物
```

无 lint / test 脚本。

## 项目结构

```
src/
├── api/           # streamChatCompletions 等 API 请求封装
├── components/
│   ├── nodes/     # TextNode / ImageNode / VideoNode / *ConfigNode / NodeHandleMenu
│   └── edges/     # ImageRoleEdge / PromptOrderEdge / ImageOrderEdge
├── config/        # models.js / providers.js / workflows.js
├── hooks/         # useApi / useProvider / useModelConfig / useNodeRef / useWorkflowOrchestrator
├── stores/        # canvas.js / projects.js / api.js / models.js / theme.js
├── utils/         # request.js 等工具
└── views/         # Home.vue / Canvas.vue
```

路径别名 `@` → `src/`（见 `vite.config.js`）。

## 核心架构

### 画布数据流

`views/Canvas.vue` 承载画布，直接从 `stores/canvas.js` 导入 `nodes` / `edges`（模块级 `ref`，**非 Pinia**），通过命令式函数 `addNode` / `addEdge` / `updateNode` 修改。`watch` 自动同步到 `stores/projects.js` 完成 localStorage 持久化。撤销/重做由 `canvas.js` 内部 `history` 数组管理（`MAX_HISTORY=50`，`POSITION_THRESHOLD=10` 过滤微小位移，支持 batch operation 分组）。

### 节点/边注册

新增节点/边类型必须：
1. 在 `Canvas.vue` 中注册到 Vue Flow 的 `nodeTypes` / `edgeTypes` 映射
2. 在 `stores/canvas.js` 的工厂函数中处理默认 data 结构

**节点分类**：
- 配置类（`ImageConfigNode` / `VideoConfigNode` / `LLMConfigNode`）：持有参数、触发 API、产生输出节点
- 展示类（`ImageNode` / `VideoNode`）：由配置节点执行完成后动态创建
- `TextNode`：提示词输入

**边的语义**：不仅是连接，还传达关系
| 边类型 | 用途 |
|--------|------|
| ImageRoleEdge | 连接参考图到配置节点（保持角色一致性） |
| PromptOrderEdge | 控制提示词执行顺序 |
| ImageOrderEdge | 控制图片生成顺序 |

### 工作流编排（`useWorkflowOrchestrator.js`）

「自动执行」中枢，流程：

1. 通过 `streamChatCompletions` 调用 LLM，使用 `INTENT_ANALYSIS_PROMPT` 分析输入，返回严格 JSON
2. 根据 `workflow_type` 分发到不同搭建策略：

| 类型 | 触发关键词 | 说明 |
|------|-----------|------|
| `text_to_image` | 默认 | 文生图 |
| `text_to_image_to_video` | 视频/动画/动起来 | 文生图生视频 |
| `storyboard` | 分镜/场景/镜头 | 先生成角色参考图，再串行生成各分镜 |
| `multi_angle_storyboard` | 多角度/正视/侧视/俯视/四宫格/景别 | 见 `MULTI_ANGLE_PROMPTS` |
| `picture_book` | 绘本/故事书/童话 | 儿童绘本 |

3. 串行调度：`waitForConfigComplete` / `waitForOutputReady` 通过 `watch` 节点状态，实现「等上一步产出后再触发下一步」

**新增工作流类型**：扩展 `WORKFLOW_TYPES` 常量 + `INTENT_ANALYSIS_PROMPT` 的 JSON schema + 编排分支函数。修改提示词时务必保留 JSON 输出契约。

### API 与模型配置

- `src/config/providers.js` — 支持的 API provider（火山引擎，OpenAI 兼容）
- `src/config/models.js` — `IMAGE_MODELS` / `VIDEO_MODELS` / `CHAT_MODELS` 及默认值
- `src/config/workflows.js` — 工作流预设
- `stores/api.js` + `useApi` / `useProvider` — 运行时 Base URL + Key 配置
- `utils/request.js` — axios 实例
- Dev 代理：`/v1` → 火山引擎 API（`vite.config.js`）

### 状态管理约定（混用两种模式）

- **模块级 `ref` + 导出函数**（非 Pinia）: `canvas.js`、`projects.js`
- **Pinia store**: `api.js`、`models.js`、`theme.js`

修改状态前先确认目标 store 属于哪种模式。

## 开发约定

- 中文优先注释，既有代码使用 `// 中文 | English` 双语风格
- 样式：Tailwind 类名为主，全局样式写在 `src/style.css`，组件内可用 scoped
- UI：Naive UI 的 `useMessage` / `useDialog` 等 provider 已在根组件挂载
- 保持与现有代码风格一致

## 部署

`Dockerfile` + `nginx.conf` 支持容器化部署，详见 `README.docker.md`。构建 base 路径为 `/huobao-canvas`。
