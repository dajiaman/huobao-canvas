import { t as throwError, i as inject, d as dialogApiInjectionKey, a as defineComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, e as onMounted, f as createVNode, w as withCtx, g as withDirectives, v as vModelText, h as withKeys, j as withModifiers, u as unref, F as Fragment, r as renderList, k as createTextVNode, N as NModal, l as ref, m as computed, n as useRouter, p as normalizeClass, q as toDisplayString, B as Button, s as h } from "./index-QNl-QN-z.js";
import { u as useModelStore, i as initProjectsStore, _ as _sfc_main$1, N as NIcon, p as projects, A as ApiSettings, c as createProject, S as SettingsOutline, a as SendOutline, R as RefreshOutline, b as AddOutline, d as NDropdown, e as NInput, r as renameProject, f as deleteProject, g as duplicateProject, C as CopyOutline, T as TrashOutline } from "./AppHeader-G8U-5zEE.js";
function useDialog() {
  const dialog = inject(dialogApiInjectionKey, null);
  if (dialog === null) {
    throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  return dialog;
}
const _imports_0 = "" + new URL("logo-DQm_MB9r.png", import.meta.url).href;
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CreateOutline = defineComponent({
  name: "CreateOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$4,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const DocumentOutline = defineComponent({
  name: "DocumentOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$3,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M256 56v120a32 32 0 0 0 32 32h120",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const EllipsisHorizontalOutline = defineComponent({
  name: "EllipsisHorizontalOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$2,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "circle",
          {
            cx: "256",
            cy: "256",
            r: "32",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "circle",
          {
            cx: "416",
            cy: "256",
            r: "32",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "circle",
          {
            cx: "96",
            cy: "256",
            r: "32",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const FolderOutline = defineComponent({
  name: "FolderOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$1,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M32 192h448"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1 = { class: "min-h-screen h-screen overflow-y-auto bg-[var(--bg-primary)]" };
const _hoisted_2 = { class: "max-w-5xl mx-auto px-4 py-8 md:py-16" };
const _hoisted_3 = { class: "text-center mb-12" };
const _hoisted_4 = { class: "max-w-2xl mx-auto" };
const _hoisted_5 = { class: "bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] p-4 shadow-sm" };
const _hoisted_6 = ["onKeydown"];
const _hoisted_7 = { class: "flex items-center justify-between mt-2" };
const _hoisted_8 = { class: "flex items-center gap-3" };
const _hoisted_9 = { class: "flex flex-wrap items-center justify-center gap-2 mt-4" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "p-1.5 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors" };
const _hoisted_12 = { class: "flex items-center justify-between mb-4" };
const _hoisted_13 = {
  key: 0,
  class: "text-center py-12 bg-[var(--bg-secondary)] rounded-xl border border-dashed border-[var(--border-color)]"
};
const _hoisted_14 = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-4 gap-4"
};
const _hoisted_15 = ["onClick"];
const _hoisted_16 = ["onMouseenter", "onMouseleave"];
const _hoisted_17 = ["src"];
const _hoisted_18 = ["src", "alt"];
const _hoisted_19 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
};
const _hoisted_20 = { class: "text-sm text-[var(--text-primary)] truncate" };
const _hoisted_21 = { class: "text-xs text-[var(--text-secondary)]" };
const _hoisted_22 = { class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10" };
const _hoisted_23 = { class: "fixed left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2 p-2 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] shadow-sm" };
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    const router = useRouter();
    const dialog = useDialog();
    const modelStore = useModelStore();
    const showApiSettings = ref(false);
    const isApiConfigured = computed(() => !!modelStore.currentApiKey);
    const refreshApiConfig = () => {
    };
    const videoRefs = /* @__PURE__ */ new Map();
    const setVideoRef = (projectId, el) => {
      if (el) {
        videoRefs.set(projectId, el);
      } else {
        videoRefs.delete(projectId);
      }
    };
    const handleThumbnailHover = (project, isHovering) => {
      if (!isVideoUrl(project.thumbnail)) return;
      const video = videoRefs.get(project.id);
      if (!video) return;
      if (isHovering) {
        video.play().catch(() => {
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };
    const inputText = ref("");
    const showRenameModal = ref(false);
    const renameValue = ref("");
    const renameTargetId = ref(null);
    const suggestions = [
      "雨中魔法森林",
      "日式街面美食摄影",
      "瀑布水流飞溅",
      "雨天富声旁边花语"
    ];
    const formatDate = (date) => {
      if (!date) return "";
      const d = new Date(date);
      const now = /* @__PURE__ */ new Date();
      const diff = now - d;
      if (diff < 6e4) return "刚刚";
      if (diff < 36e5) return `${Math.floor(diff / 6e4)}分钟前`;
      if (diff < 864e5) return `${Math.floor(diff / 36e5)}小时前`;
      if (diff < 6048e5) return `${Math.floor(diff / 864e5)}天前`;
      return `${d.getMonth() + 1}/${d.getDate()}`;
    };
    const getProjectActions = (project) => [
      { label: "重命名", key: "rename", icon: () => h(NIcon, null, { default: () => h(CreateOutline) }) },
      { label: "复制", key: "duplicate", icon: () => h(NIcon, null, { default: () => h(CopyOutline) }) },
      { type: "divider" },
      { label: "删除", key: "delete", icon: () => h(NIcon, null, { default: () => h(TrashOutline) }) }
    ];
    const handleProjectAction = (key, project) => {
      switch (key) {
        case "rename":
          renameTargetId.value = project.id;
          renameValue.value = project.name;
          showRenameModal.value = true;
          break;
        case "duplicate":
          const newId = duplicateProject(project.id);
          if (newId) {
            window.$message?.success("项目已复制");
          }
          break;
        case "delete":
          dialog.warning({
            title: "删除项目",
            content: `确定要删除项目「${project.name}」吗？此操作不可恢复。`,
            positiveText: "删除",
            negativeText: "取消",
            onPositiveClick: () => {
              deleteProject(project.id);
              window.$message?.success("项目已删除");
            }
          });
          break;
      }
    };
    const confirmRename = () => {
      if (renameTargetId.value && renameValue.value.trim()) {
        renameProject(renameTargetId.value, renameValue.value.trim());
        window.$message?.success("已重命名");
      }
      showRenameModal.value = false;
      renameTargetId.value = null;
      renameValue.value = "";
    };
    const checkApiKeyAndNavigate = (callback) => {
      if (!isApiConfigured.value) {
        dialog.warning({
          title: "未配置 API Key",
          content: "请先在设置中配置 API Key 才能使用画布功能。",
          positiveText: "知道了"
        });
        return false;
      }
      callback();
      return true;
    };
    const createNewProject = () => {
      checkApiKeyAndNavigate(() => {
        const id = createProject("未命名项目");
        router.push(`/canvas/${id}`);
      });
    };
    const handleCreateWithInput = () => {
      checkApiKeyAndNavigate(() => {
        const name = inputText.value.trim() || "未命名项目";
        const id = createProject(name);
        sessionStorage.setItem("ai-canvas-initial-prompt", inputText.value.trim());
        inputText.value = "";
        router.push(`/canvas/${id}`);
      });
    };
    const openProject = (project) => {
      checkApiKeyAndNavigate(() => {
        router.push(`/canvas/${project.id}`);
      });
    };
    const isVideoUrl = (url) => {
      if (!url || typeof url !== "string") return false;
      const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".mkv"];
      return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
    };
    const projectsSection = ref(null);
    const scrollToProjects = () => {
      if (projectsSection.value) {
        projectsSection.value.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    onMounted(() => {
      initProjectsStore();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, null, {
          right: withCtx(() => [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => showApiSettings.value = true),
              class: normalizeClass(["p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors", { "text-[var(--accent-color)]": isApiConfigured.value }]),
              title: "API 设置"
            }, [
              createVNode(unref(NIcon), { size: 20 }, {
                default: withCtx(() => [
                  createVNode(unref(SettingsOutline))
                ]),
                _: 1
              })
            ], 2)
          ]),
          _: 1
        }),
        createBaseVNode("main", _hoisted_2, [
          createBaseVNode("section", _hoisted_3, [
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "flex items-center justify-center gap-4 mb-8" }, [
              createBaseVNode("img", {
                src: _imports_0,
                alt: "Logo",
                class: "w-12 h-12 md:w-16 md:h-16"
              }),
              createBaseVNode("h1", { class: "text-2xl md:text-4xl font-bold text-[var(--text-primary)]" }, "欢迎来到火宝无限画布")
            ], -1)),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
                  placeholder: "输入你的创意，开始新项目",
                  class: "w-full bg-transparent resize-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] min-h-[80px]",
                  onKeydown: withKeys(withModifiers(handleCreateWithInput, ["ctrl"]), ["enter"])
                }, null, 40, _hoisted_6), [
                  [vModelText, inputText.value]
                ]),
                createBaseVNode("div", _hoisted_7, [
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "flex items-center gap-2" }, null, -1)),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("button", {
                      onClick: handleCreateWithInput,
                      class: "w-8 h-8 rounded-xl bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] flex items-center justify-center transition-colors"
                    }, [
                      createVNode(unref(NIcon), {
                        size: 20,
                        color: "white"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(SendOutline))
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-sm text-[var(--text-secondary)]" }, "推荐：", -1)),
                (openBlock(), createElementBlock(Fragment, null, renderList(suggestions, (tag) => {
                  return createBaseVNode("button", {
                    key: tag,
                    onClick: ($event) => inputText.value = tag,
                    class: "px-3 py-1.5 text-sm rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors"
                  }, toDisplayString(tag), 9, _hoisted_10);
                }), 64)),
                createBaseVNode("button", _hoisted_11, [
                  createVNode(unref(NIcon), { size: 16 }, {
                    default: withCtx(() => [
                      createVNode(unref(RefreshOutline))
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          createBaseVNode("section", {
            ref_key: "projectsSection",
            ref: projectsSection
          }, [
            createBaseVNode("div", _hoisted_12, [
              _cache[11] || (_cache[11] = createBaseVNode("h2", { class: "text-lg font-semibold text-[var(--text-primary)]" }, "我的项目", -1)),
              createBaseVNode("button", {
                onClick: createNewProject,
                class: "flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              }, [
                createVNode(unref(NIcon), { size: 16 }, {
                  default: withCtx(() => [
                    createVNode(unref(AddOutline))
                  ]),
                  _: 1
                }),
                _cache[10] || (_cache[10] = createTextVNode(" 新建项目 ", -1))
              ])
            ]),
            unref(projects).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createVNode(unref(NIcon), {
                size: 48,
                class: "text-[var(--text-secondary)] mb-4"
              }, {
                default: withCtx(() => [
                  createVNode(unref(FolderOutline))
                ]),
                _: 1
              }),
              _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-[var(--text-secondary)] mb-4" }, "还没有项目，创建一个开始吧", -1)),
              createBaseVNode("button", {
                onClick: createNewProject,
                class: "px-4 py-2 text-sm rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white transition-colors"
              }, " 创建第一个项目 ")
            ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(projects), (project) => {
                return openBlock(), createElementBlock("div", {
                  key: project.id,
                  class: "group relative"
                }, [
                  createBaseVNode("div", {
                    onClick: ($event) => openProject(project),
                    class: "cursor-pointer"
                  }, [
                    createBaseVNode("div", {
                      class: "aspect-video rounded-xl overflow-hidden bg-[var(--bg-tertiary)] mb-2 border border-[var(--border-color)] relative",
                      onMouseenter: ($event) => handleThumbnailHover(project, true),
                      onMouseleave: ($event) => handleThumbnailHover(project, false)
                    }, [
                      project.thumbnail ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        isVideoUrl(project.thumbnail) ? (openBlock(), createElementBlock("video", {
                          key: 0,
                          ref_for: true,
                          ref: (el) => setVideoRef(project.id, el),
                          src: project.thumbnail,
                          class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                          muted: "",
                          loop: "",
                          playsinline: ""
                        }, null, 8, _hoisted_17)) : (openBlock(), createElementBlock("img", {
                          key: 1,
                          src: project.thumbnail,
                          alt: project.name,
                          class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        }, null, 8, _hoisted_18))
                      ], 64)) : (openBlock(), createElementBlock("div", _hoisted_19, [
                        createVNode(unref(NIcon), {
                          size: 32,
                          class: "text-[var(--text-secondary)]"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DocumentOutline))
                          ]),
                          _: 1
                        })
                      ])),
                      _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" }, [
                        createBaseVNode("span", { class: "text-white text-sm" }, "打开项目")
                      ], -1))
                    ], 40, _hoisted_16),
                    createBaseVNode("p", _hoisted_20, toDisplayString(project.name), 1),
                    createBaseVNode("p", _hoisted_21, toDisplayString(formatDate(project.updatedAt)), 1)
                  ], 8, _hoisted_15),
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(unref(NDropdown), {
                      options: getProjectActions(),
                      onSelect: (key) => handleProjectAction(key, project),
                      placement: "bottom-end"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("button", {
                          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                          }, ["stop"])),
                          class: "p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow hover:bg-white dark:hover:bg-gray-800 transition-colors !leading-none"
                        }, [
                          createVNode(unref(NIcon), { size: 16 }, {
                            default: withCtx(() => [
                              createVNode(unref(EllipsisHorizontalOutline))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["options", "onSelect"])
                  ])
                ]);
              }), 128))
            ]))
          ], 512)
        ]),
        createBaseVNode("aside", _hoisted_23, [
          createBaseVNode("button", {
            onClick: createNewProject,
            class: "p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors",
            title: "新建项目"
          }, [
            createVNode(unref(NIcon), { size: 20 }, {
              default: withCtx(() => [
                createVNode(unref(DocumentOutline))
              ]),
              _: 1
            })
          ]),
          createBaseVNode("button", {
            onClick: scrollToProjects,
            class: "p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors",
            title: "我的项目"
          }, [
            createVNode(unref(NIcon), { size: 20 }, {
              default: withCtx(() => [
                createVNode(unref(FolderOutline))
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(ApiSettings, {
          show: showApiSettings.value,
          "onUpdate:show": _cache[3] || (_cache[3] = ($event) => showApiSettings.value = $event),
          onSaved: refreshApiConfig
        }, null, 8, ["show"]),
        createVNode(unref(NModal), {
          show: showRenameModal.value,
          "onUpdate:show": _cache[6] || (_cache[6] = ($event) => showRenameModal.value = $event),
          preset: "dialog",
          title: "重命名项目"
        }, {
          action: withCtx(() => [
            createVNode(unref(Button), {
              onClick: _cache[5] || (_cache[5] = ($event) => showRenameModal.value = false)
            }, {
              default: withCtx(() => [..._cache[14] || (_cache[14] = [
                createTextVNode("取消", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              onClick: confirmRename
            }, {
              default: withCtx(() => [..._cache[15] || (_cache[15] = [
                createTextVNode("确定", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(NInput), {
              value: renameValue.value,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => renameValue.value = $event),
              placeholder: "请输入项目名称"
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
