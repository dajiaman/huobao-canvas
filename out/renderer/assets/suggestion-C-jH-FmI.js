import { e as onMounted, Y as onBeforeUnmount, aL as isBrowser, X as watch, m as computed, aH as readonly, aA as reactive, a1 as on, aM as hasInstance, aw as onBeforeMount, Z as off, K as createInjectionKey, i as inject, aN as useMemo, r as ref, aO as modalBodyInjectionKey, aP as drawerBodyInjectionKey, aQ as popoverBodyInjectionKey, an as getCurrentInstance, a as defineComponent, aR as getSlot, aE as provide, g as withDirectives, aS as getFirstVNode, aT as CssRender, s as h, S as LazyTeleport, T as zindexable, $ as isMounted, aU as useSsrAdapter, ax as nextTick, a3 as toRef, aV as VResizeObserver, as as mergeProps, aW as onActivated, aX as onDeactivated, ah as depx, a9 as pxfy, am as renderSlot, aY as resizeObserverManager, aZ as isSymbol, a_ as isObject, a$ as getNative, b0 as root, b1 as overArg, b2 as isPrototype, b3 as isArrayLike, b4 as arrayLikeKeys, b5 as isArray, b6 as MapCache, x as toString, b7 as baseGetTag, b8 as toSource, b9 as Map$1, ba as Symbol$1, bb as eq, bc as Uint8Array, bd as isBuffer, be as Stack, bf as isTypedArray, bg as isObjectLike, bh as isLength, bi as isIndex, bj as isArguments, bk as identity, bl as baseFor, bm as arrayMap, bn as configProviderInjectionKey, y as replaceable, M as cB, L as c$1, ab as cE, ac as iconSwitchTransition, ag as NIconSwitchTransition, bo as resolveSlot, bp as useStyle, R as NBaseIcon, G as useConfig, H as useTheme, _ as useThemeClass, bq as emptyLight, aa as createKey, br as render, U as Transition, a4 as cM, Q as cNotM, P as fadeInScaleUpTransition, ae as resolveWrappedSlot, a5 as NBaseLoading, bs as Scrollbar, bt as useRtl, bu as internalSelectMenuLight, bv as getMargin, bw as cCB, a6 as watchEffect, ad as isSlotEmpty, bx as FocusTrap, F as Fragment, by as XScrollbar, A as popoverLight, bz as clickoutside, V as vShow, bA as getPreciseEventTarget, bB as getFirstSlotVNode, bC as cloneVNode, bD as Text, bE as keep, a0 as call, C as derived, bF as commonVariables, J as changeColor, bG as NBaseClose, bH as color2Class, bI as Wrapper, bJ as internalSelectionLight, bK as commonVars, E as composite, bL as fadeInHeightExpandTransition, bM as NFadeInExpandTransition, bN as ErrorIcon, bO as WarningIcon, bP as InfoIcon, bQ as SuccessIcon, z as createTheme, bR as scrollbarLight, bS as commonVariables$1, bT as resolveSlotWithTypedProps, bU as isSafari, af as useFormItem, bV as markEventEffectPerformed, bW as selectLight, bX as warn, bY as iconLight, bZ as dropdownLight, b_ as dividerLight, b$ as keysOf, c0 as formLight, c1 as commonVariables$2, c2 as createId, c3 as formItemInjectionKey, t as throwError, c4 as omit, c5 as flatten$1, c6 as TransitionGroup, c7 as tabsLight, o as openBlock, c as createElementBlock, b as createBaseVNode, ai as createStaticVNode, c8 as defineStore, au as createBlock, w as withCtx, f as createVNode, u as unref, l as createTextVNode, q as toDisplayString, h as withKeys, B as Button, k as renderList, N as NModal, c9 as toggleTheme, ca as isDark } from "./index-C6XixcTv.js";
let onceCbs = [];
const paramsMap = /* @__PURE__ */ new WeakMap();
function flushOnceCallbacks() {
  onceCbs.forEach((cb) => cb(...paramsMap.get(cb)));
  onceCbs = [];
}
function beforeNextFrameOnce(cb, ...params) {
  paramsMap.set(cb, params);
  if (onceCbs.includes(cb))
    return;
  onceCbs.push(cb) === 1 && requestAnimationFrame(flushOnceCallbacks);
}
function happensIn(e, dataSetPropName) {
  let { target } = e;
  while (target) {
    if (target.dataset) {
      if (target.dataset[dataSetPropName] !== void 0)
        return true;
    }
    target = target.parentElement;
  }
  return false;
}
let fontsReady;
let isFontReady;
const init = () => {
  var _a, _b;
  fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : void 0;
  isFontReady = false;
  if (fontsReady !== void 0) {
    void fontsReady.then(() => {
      isFontReady = true;
    });
  } else {
    isFontReady = true;
  }
};
init();
function onFontsReady(cb) {
  if (isFontReady)
    return;
  let deactivated = false;
  onMounted(() => {
    if (!isFontReady) {
      fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
        if (deactivated)
          return;
        cb();
      });
    }
  });
  onBeforeUnmount(() => {
    deactivated = true;
  });
}
function useMergedState(controlledStateRef, uncontrolledStateRef) {
  watch(controlledStateRef, (value) => {
    if (value !== void 0) {
      uncontrolledStateRef.value = value;
    }
  });
  return computed(() => {
    if (controlledStateRef.value === void 0) {
      return uncontrolledStateRef.value;
    }
    return controlledStateRef.value;
  });
}
function useCompitable(reactive2, keys2) {
  return computed(() => {
    for (const key of keys2) {
      if (reactive2[key] !== void 0)
        return reactive2[key];
    }
    return reactive2[keys2[keys2.length - 1]];
  });
}
function useKeyboard(options = {}, enabledRef) {
  const state = reactive({
    ctrl: false,
    command: false,
    win: false,
    shift: false,
    tab: false
  });
  const { keydown, keyup } = options;
  const keydownHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = true;
        break;
      case "Meta":
        state.command = true;
        state.win = true;
        break;
      case "Shift":
        state.shift = true;
        break;
      case "Tab":
        state.tab = true;
        break;
    }
    if (keydown !== void 0) {
      Object.keys(keydown).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keydown[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const keyupHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = false;
        break;
      case "Meta":
        state.command = false;
        state.win = false;
        break;
      case "Shift":
        state.shift = false;
        break;
      case "Tab":
        state.tab = false;
        break;
    }
    if (keyup !== void 0) {
      Object.keys(keyup).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keyup[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const setup = () => {
    if (enabledRef === void 0 || enabledRef.value) {
      on("keydown", document, keydownHandler);
      on("keyup", document, keyupHandler);
    }
    if (enabledRef !== void 0) {
      watch(enabledRef, (value) => {
        if (value) {
          on("keydown", document, keydownHandler);
          on("keyup", document, keyupHandler);
        } else {
          off("keydown", document, keydownHandler);
          off("keyup", document, keyupHandler);
        }
      });
    }
  };
  if (hasInstance()) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      if (enabledRef === void 0 || enabledRef.value) {
        off("keydown", document, keydownHandler);
        off("keyup", document, keyupHandler);
      }
    });
  } else {
    setup();
  }
  return readonly(state);
}
const internalSelectionMenuInjectionKey = createInjectionKey("n-internal-select-menu");
const internalSelectionMenuBodyInjectionKey = createInjectionKey("n-internal-select-menu-body");
const teleportDisabled = "__disabled__";
function useAdjustedTo(props) {
  const modal = inject(modalBodyInjectionKey, null);
  const drawer = inject(drawerBodyInjectionKey, null);
  const popover = inject(popoverBodyInjectionKey, null);
  const selectMenu = inject(internalSelectionMenuBodyInjectionKey, null);
  const fullscreenElementRef = ref();
  if (typeof document !== "undefined") {
    fullscreenElementRef.value = document.fullscreenElement;
    const handleFullscreenChange = () => {
      fullscreenElementRef.value = document.fullscreenElement;
    };
    onMounted(() => {
      on("fullscreenchange", document, handleFullscreenChange);
    });
    onBeforeUnmount(() => {
      off("fullscreenchange", document, handleFullscreenChange);
    });
  }
  return useMemo(() => {
    var _a;
    const {
      to
    } = props;
    if (to !== void 0) {
      if (to === false) return teleportDisabled;
      if (to === true) return fullscreenElementRef.value || "body";
      return to;
    }
    if (modal === null || modal === void 0 ? void 0 : modal.value) {
      return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
    }
    if (drawer === null || drawer === void 0 ? void 0 : drawer.value) return drawer.value;
    if (popover === null || popover === void 0 ? void 0 : popover.value) return popover.value;
    if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value) return selectMenu.value;
    return to !== null && to !== void 0 ? to : fullscreenElementRef.value || "body";
  });
}
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function useInjectionInstanceCollection(injectionName, collectionKey, registerKeyRef) {
  var _a;
  const injection = inject(injectionName, null);
  if (injection === null) return;
  const vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  watch(registerKeyRef, registerInstance);
  registerInstance(registerKeyRef.value);
  onBeforeUnmount(() => {
    registerInstance(void 0, registerKeyRef.value);
  });
  function registerInstance(key, oldKey) {
    if (!injection) return;
    const collection = injection[collectionKey];
    if (oldKey !== void 0) removeInstance(collection, oldKey);
    if (key !== void 0) addInstance(collection, key);
  }
  function removeInstance(collection, key) {
    if (!collection[key]) collection[key] = [];
    collection[key].splice(collection[key].findIndex((instance) => instance === vm), 1);
  }
  function addInstance(collection, key) {
    if (!collection[key]) collection[key] = [];
    if (!~collection[key].findIndex((instance) => instance === vm)) {
      collection[key].push(vm);
    }
  }
}
function useDeferredTrue(valueRef, delay, shouldDelayRef) {
  const delayedRef = ref(valueRef.value);
  let timerId = null;
  watch(valueRef, (value) => {
    if (timerId !== null) window.clearTimeout(timerId);
    if (value === true) {
      if (shouldDelayRef && !shouldDelayRef.value) {
        delayedRef.value = true;
      } else {
        timerId = window.setTimeout(() => {
          delayedRef.value = true;
        }, delay);
      }
    } else {
      delayedRef.value = false;
    }
  });
  return delayedRef;
}
let viewMeasurer = null;
function ensureViewBoundingRect() {
  if (viewMeasurer === null) {
    viewMeasurer = document.getElementById("v-binder-view-measurer");
    if (viewMeasurer === null) {
      viewMeasurer = document.createElement("div");
      viewMeasurer.id = "v-binder-view-measurer";
      const { style: style2 } = viewMeasurer;
      style2.position = "fixed";
      style2.left = "0";
      style2.right = "0";
      style2.top = "0";
      style2.bottom = "0";
      style2.pointerEvents = "none";
      style2.visibility = "hidden";
      document.body.appendChild(viewMeasurer);
    }
  }
  return viewMeasurer.getBoundingClientRect();
}
function getPointRect(x, y) {
  const viewRect = ensureViewBoundingRect();
  return {
    top: y,
    left: x,
    height: 0,
    width: 0,
    right: viewRect.width - x,
    bottom: viewRect.height - y
  };
}
function getRect(el) {
  const elRect = el.getBoundingClientRect();
  const viewRect = ensureViewBoundingRect();
  return {
    left: elRect.left - viewRect.left,
    top: elRect.top - viewRect.top,
    bottom: viewRect.height + viewRect.top - elRect.bottom,
    right: viewRect.width + viewRect.left - elRect.right,
    width: elRect.width,
    height: elRect.height
  };
}
function getParentNode(node) {
  if (node.nodeType === 9) {
    return null;
  }
  return node.parentNode;
}
function getScrollParent(node) {
  if (node === null)
    return null;
  const parentNode = getParentNode(node);
  if (parentNode === null) {
    return null;
  }
  if (parentNode.nodeType === 9) {
    return document;
  }
  if (parentNode.nodeType === 1) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return parentNode;
    }
  }
  return getScrollParent(parentNode);
}
const Binder = defineComponent({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    var _a;
    provide("VBinder", (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    const VBinder = inject("VBinder", null);
    const targetRef = ref(null);
    const setTargetRef = (el) => {
      targetRef.value = el;
      if (VBinder && props.syncTargetWithParent) {
        VBinder.setTargetRef(el);
      }
    };
    let scrollableNodes = [];
    const ensureScrollListener = () => {
      let cursor = targetRef.value;
      while (true) {
        cursor = getScrollParent(cursor);
        if (cursor === null)
          break;
        scrollableNodes.push(cursor);
      }
      for (const el of scrollableNodes) {
        on("scroll", el, onScroll, true);
      }
    };
    const removeScrollListeners = () => {
      for (const el of scrollableNodes) {
        off("scroll", el, onScroll, true);
      }
      scrollableNodes = [];
    };
    const followerScrollListeners = /* @__PURE__ */ new Set();
    const addScrollListener = (listener) => {
      if (followerScrollListeners.size === 0) {
        ensureScrollListener();
      }
      if (!followerScrollListeners.has(listener)) {
        followerScrollListeners.add(listener);
      }
    };
    const removeScrollListener = (listener) => {
      if (followerScrollListeners.has(listener)) {
        followerScrollListeners.delete(listener);
      }
      if (followerScrollListeners.size === 0) {
        removeScrollListeners();
      }
    };
    const onScroll = () => {
      beforeNextFrameOnce(onScrollRaf);
    };
    const onScrollRaf = () => {
      followerScrollListeners.forEach((listener) => listener());
    };
    const followerResizeListeners = /* @__PURE__ */ new Set();
    const addResizeListener = (listener) => {
      if (followerResizeListeners.size === 0) {
        on("resize", window, onResize);
      }
      if (!followerResizeListeners.has(listener)) {
        followerResizeListeners.add(listener);
      }
    };
    const removeResizeListener = (listener) => {
      if (followerResizeListeners.has(listener)) {
        followerResizeListeners.delete(listener);
      }
      if (followerResizeListeners.size === 0) {
        off("resize", window, onResize);
      }
    };
    const onResize = () => {
      followerResizeListeners.forEach((listener) => listener());
    };
    onBeforeUnmount(() => {
      off("resize", window, onResize);
      removeScrollListeners();
    });
    return {
      targetRef,
      setTargetRef,
      addScrollListener,
      removeScrollListener,
      addResizeListener,
      removeResizeListener
    };
  },
  render() {
    return getSlot("binder", this.$slots);
  }
});
const VTarget = defineComponent({
  name: "Target",
  setup() {
    const { setTargetRef, syncTarget } = inject("VBinder");
    const setTargetDirective = {
      mounted: setTargetRef,
      updated: setTargetRef
    };
    return {
      syncTarget,
      setTargetDirective
    };
  },
  render() {
    const { syncTarget, setTargetDirective } = this;
    if (syncTarget) {
      return withDirectives(getFirstVNode("follower", this.$slots), [
        [setTargetDirective]
      ]);
    }
    return getFirstVNode("follower", this.$slots);
  }
});
const ctxKey = "@@mmoContext";
const mousemoveoutside = {
  mounted(el, { value }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("mousemoveoutside", el, value);
    }
  },
  updated(el, { value }) {
    const ctx = el[ctxKey];
    if (typeof value === "function") {
      if (ctx.handler) {
        if (ctx.handler !== value) {
          off("mousemoveoutside", el, ctx.handler);
          ctx.handler = value;
          on("mousemoveoutside", el, value);
        }
      } else {
        el[ctxKey].handler = value;
        on("mousemoveoutside", el, value);
      }
    } else {
      if (ctx.handler) {
        off("mousemoveoutside", el, ctx.handler);
        ctx.handler = void 0;
      }
    }
  },
  unmounted(el) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("mousemoveoutside", el, handler);
    }
    el[ctxKey].handler = void 0;
  }
};
const { c } = CssRender();
const cssrAnchorMetaName = "vueuc-style";
function lowBit(n) {
  return n & -n;
}
class FinweckTree {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(l, min) {
    this.l = l;
    this.min = min;
    const ft = new Array(l + 1);
    for (let i = 0; i < l + 1; ++i) {
      ft[i] = 0;
    }
    this.ft = ft;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(i, n) {
    if (n === 0)
      return;
    const { l, ft } = this;
    i += 1;
    while (i <= l) {
      ft[i] += n;
      i += lowBit(i);
    }
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(i) {
    return this.sum(i + 1) - this.sum(i);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(i) {
    if (i === void 0)
      i = this.l;
    if (i <= 0)
      return 0;
    const { ft, min, l } = this;
    if (i > l)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let ret = i * min;
    while (i > 0) {
      ret += ft[i];
      i -= lowBit(i);
    }
    return ret;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(threshold) {
    let l = 0;
    let r = this.l;
    while (r > l) {
      const m = Math.floor((l + r) / 2);
      const sumM = this.sum(m);
      if (sumM > threshold) {
        r = m;
        continue;
      } else if (sumM < threshold) {
        if (l === m) {
          if (this.sum(l + 1) <= threshold)
            return l + 1;
          return m;
        }
        l = m;
      } else {
        return m;
      }
    }
    return l;
  }
}
const oppositionPositions = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const oppositeAligns = {
  start: "end",
  center: "center",
  end: "start"
};
const propToCompare = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
};
const transformOrigins = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
};
const overlapTransformOrigin = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
};
const oppositeAlignCssPositionProps = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
};
const keepOffsetDirection = {
  top: true,
  // top++
  bottom: false,
  // top--
  left: true,
  // left++
  right: false
  // left--
};
const cssPositionToOppositeAlign = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, shift, flip, overlap) {
  if (!flip || overlap) {
    return { placement, top: 0, left: 0 };
  }
  const [position, align] = placement.split("-");
  let properAlign = align !== null && align !== void 0 ? align : "center";
  let properOffset = {
    top: 0,
    left: 0
  };
  const deriveOffset = (oppositeAlignCssSizeProp, alignCssPositionProp, offsetVertically2) => {
    let left = 0;
    let top = 0;
    const diff = followerRect[oppositeAlignCssSizeProp] - targetRect[alignCssPositionProp] - targetRect[oppositeAlignCssSizeProp];
    if (diff > 0 && shift) {
      if (offsetVertically2) {
        top = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      } else {
        left = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      }
    }
    return {
      left,
      top
    };
  };
  const offsetVertically = position === "left" || position === "right";
  if (properAlign !== "center") {
    const oppositeAlignCssPositionProp = oppositeAlignCssPositionProps[placement];
    const currentAlignCssPositionProp = oppositionPositions[oppositeAlignCssPositionProp];
    const oppositeAlignCssSizeProp = propToCompare[oppositeAlignCssPositionProp];
    if (followerRect[oppositeAlignCssSizeProp] > targetRect[oppositeAlignCssSizeProp]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        targetRect[oppositeAlignCssPositionProp] + targetRect[oppositeAlignCssSizeProp] < followerRect[oppositeAlignCssSizeProp]
      ) {
        const followerOverTargetSize = (followerRect[oppositeAlignCssSizeProp] - targetRect[oppositeAlignCssSizeProp]) / 2;
        if (targetRect[oppositeAlignCssPositionProp] < followerOverTargetSize || targetRect[currentAlignCssPositionProp] < followerOverTargetSize) {
          if (targetRect[oppositeAlignCssPositionProp] < targetRect[currentAlignCssPositionProp]) {
            properAlign = oppositeAligns[align];
            properOffset = deriveOffset(oppositeAlignCssSizeProp, currentAlignCssPositionProp, offsetVertically);
          } else {
            properOffset = deriveOffset(oppositeAlignCssSizeProp, oppositeAlignCssPositionProp, offsetVertically);
          }
        } else {
          properAlign = "center";
        }
      }
    } else if (followerRect[oppositeAlignCssSizeProp] < targetRect[oppositeAlignCssSizeProp]) {
      if (targetRect[currentAlignCssPositionProp] < 0 && // opposite align has larger space
      // ------------[   target   ]
      // ----------------[follower]
      targetRect[oppositeAlignCssPositionProp] > targetRect[currentAlignCssPositionProp]) {
        properAlign = oppositeAligns[align];
      }
    }
  } else {
    const possibleAlternativeAlignCssPositionProp1 = position === "bottom" || position === "top" ? "left" : "top";
    const possibleAlternativeAlignCssPositionProp2 = oppositionPositions[possibleAlternativeAlignCssPositionProp1];
    const alternativeAlignCssSizeProp = propToCompare[possibleAlternativeAlignCssPositionProp1];
    const followerOverTargetSize = (followerRect[alternativeAlignCssSizeProp] - targetRect[alternativeAlignCssSizeProp]) / 2;
    if (
      // center is not enough
      // ----------- [ target ]--|
      // -------[     follower     ]
      targetRect[possibleAlternativeAlignCssPositionProp1] < followerOverTargetSize || targetRect[possibleAlternativeAlignCssPositionProp2] < followerOverTargetSize
    ) {
      if (targetRect[possibleAlternativeAlignCssPositionProp1] > targetRect[possibleAlternativeAlignCssPositionProp2]) {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp1];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp1, offsetVertically);
      } else {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp2];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp2, offsetVertically);
      }
    }
  }
  let properPosition = position;
  if (
    // space is not enough
    targetRect[position] < followerRect[propToCompare[position]] && // opposite position's space is larger
    targetRect[position] < targetRect[oppositionPositions[position]]
  ) {
    properPosition = oppositionPositions[position];
  }
  return {
    placement: properAlign !== "center" ? `${properPosition}-${properAlign}` : properPosition,
    left: properOffset.left,
    top: properOffset.top
  };
}
function getProperTransformOrigin(placement, overlap) {
  if (overlap)
    return overlapTransformOrigin[placement];
  return transformOrigins[placement];
}
function getOffset(placement, offsetRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap) {
  if (overlap) {
    switch (placement) {
      case "bottom-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  }
  switch (placement) {
    case "bottom-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const style$g = c([
  c(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  c(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    c("> *", {
      pointerEvents: "all"
    })
  ])
]);
const VFollower = defineComponent({
  name: "Follower",
  inheritAttrs: false,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: true
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(props) {
    const VBinder = inject("VBinder");
    const mergedEnabledRef = useMemo(() => {
      return props.enabled !== void 0 ? props.enabled : props.show;
    });
    const followerRef = ref(null);
    const offsetContainerRef = ref(null);
    const ensureListeners = () => {
      const { syncTrigger } = props;
      if (syncTrigger.includes("scroll")) {
        VBinder.addScrollListener(syncPosition);
      }
      if (syncTrigger.includes("resize")) {
        VBinder.addResizeListener(syncPosition);
      }
    };
    const removeListeners = () => {
      VBinder.removeScrollListener(syncPosition);
      VBinder.removeResizeListener(syncPosition);
    };
    onMounted(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
        ensureListeners();
      }
    });
    const ssrAdapter = useSsrAdapter();
    style$g.mount({
      id: "vueuc/binder",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onBeforeUnmount(() => {
      removeListeners();
    });
    onFontsReady(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
      }
    });
    const syncPosition = () => {
      if (!mergedEnabledRef.value) {
        return;
      }
      const follower = followerRef.value;
      if (follower === null)
        return;
      const target = VBinder.targetRef;
      const { x, y, overlap } = props;
      const targetRect = x !== void 0 && y !== void 0 ? getPointRect(x, y) : getRect(target);
      follower.style.setProperty("--v-target-width", `${Math.round(targetRect.width)}px`);
      follower.style.setProperty("--v-target-height", `${Math.round(targetRect.height)}px`);
      const { width, minWidth, placement, internalShift, flip } = props;
      follower.setAttribute("v-placement", placement);
      if (overlap) {
        follower.setAttribute("v-overlap", "");
      } else {
        follower.removeAttribute("v-overlap");
      }
      const { style: style2 } = follower;
      if (width === "target") {
        style2.width = `${targetRect.width}px`;
      } else if (width !== void 0) {
        style2.width = width;
      } else {
        style2.width = "";
      }
      if (minWidth === "target") {
        style2.minWidth = `${targetRect.width}px`;
      } else if (minWidth !== void 0) {
        style2.minWidth = minWidth;
      } else {
        style2.minWidth = "";
      }
      const followerRect = getRect(follower);
      const offsetContainerRect = getRect(offsetContainerRef.value);
      const { left: offsetLeftToStandardPlacement, top: offsetTopToStandardPlacement, placement: properPlacement } = getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, internalShift, flip, overlap);
      const properTransformOrigin = getProperTransformOrigin(properPlacement, overlap);
      const { left, top, transform } = getOffset(properPlacement, offsetContainerRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap);
      follower.setAttribute("v-placement", properPlacement);
      follower.style.setProperty("--v-offset-left", `${Math.round(offsetLeftToStandardPlacement)}px`);
      follower.style.setProperty("--v-offset-top", `${Math.round(offsetTopToStandardPlacement)}px`);
      follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`;
      follower.style.setProperty("--v-transform-origin", properTransformOrigin);
      follower.style.transformOrigin = properTransformOrigin;
    };
    watch(mergedEnabledRef, (value) => {
      if (value) {
        ensureListeners();
        syncOnNextTick();
      } else {
        removeListeners();
      }
    });
    const syncOnNextTick = () => {
      nextTick().then(syncPosition).catch((e) => console.error(e));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((prop) => {
      watch(toRef(props, prop), syncPosition);
    });
    ["teleportDisabled"].forEach((prop) => {
      watch(toRef(props, prop), syncOnNextTick);
    });
    watch(toRef(props, "syncTrigger"), (value) => {
      if (!value.includes("resize")) {
        VBinder.removeResizeListener(syncPosition);
      } else {
        VBinder.addResizeListener(syncPosition);
      }
      if (!value.includes("scroll")) {
        VBinder.removeScrollListener(syncPosition);
      } else {
        VBinder.addScrollListener(syncPosition);
      }
    });
    const isMountedRef = isMounted();
    const mergedToRef = useMemo(() => {
      const { to } = props;
      if (to !== void 0)
        return to;
      if (isMountedRef.value) {
        return void 0;
      }
      return void 0;
    });
    return {
      VBinder,
      mergedEnabled: mergedEnabledRef,
      offsetContainerRef,
      followerRef,
      mergedTo: mergedToRef,
      syncPosition
    };
  },
  render() {
    return h(LazyTeleport, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var _a, _b;
        const vNode = h("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          h("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a))
        ]);
        if (this.zindexable) {
          return withDirectives(vNode, [
            [
              zindexable,
              {
                enabled: this.mergedEnabled,
                zIndex: this.zIndex
              }
            ]
          ]);
        }
        return vNode;
      }
    });
  }
});
let maybeTouch;
function ensureMaybeTouch() {
  if (typeof document === "undefined")
    return false;
  if (maybeTouch === void 0) {
    if ("matchMedia" in window) {
      maybeTouch = window.matchMedia("(pointer:coarse)").matches;
    } else {
      maybeTouch = false;
    }
  }
  return maybeTouch;
}
let wheelScale;
function ensureWheelScale() {
  if (typeof document === "undefined")
    return 1;
  if (wheelScale === void 0) {
    wheelScale = "chrome" in window ? window.devicePixelRatio : 1;
  }
  return wheelScale;
}
const xScrollInjextionKey = "VVirtualListXScroll";
function setupXScroll({ columnsRef, renderColRef, renderItemWithColsRef }) {
  const listWidthRef = ref(0);
  const scrollLeftRef = ref(0);
  const xFinweckTreeRef = computed(() => {
    const columns = columnsRef.value;
    if (columns.length === 0) {
      return null;
    }
    const ft = new FinweckTree(columns.length, 0);
    columns.forEach((column, index) => {
      ft.add(index, column.width);
    });
    return ft;
  });
  const startIndexRef = useMemo(() => {
    const xFinweckTree = xFinweckTreeRef.value;
    if (xFinweckTree !== null) {
      return Math.max(xFinweckTree.getBound(scrollLeftRef.value) - 1, 0);
    } else {
      return 0;
    }
  });
  const getLeft = (index) => {
    const xFinweckTree = xFinweckTreeRef.value;
    if (xFinweckTree !== null) {
      return xFinweckTree.sum(index);
    } else {
      return 0;
    }
  };
  const endIndexRef = useMemo(() => {
    const xFinweckTree = xFinweckTreeRef.value;
    if (xFinweckTree !== null) {
      return Math.min(xFinweckTree.getBound(scrollLeftRef.value + listWidthRef.value) + 1, columnsRef.value.length - 1);
    } else {
      return 0;
    }
  });
  provide(xScrollInjextionKey, {
    startIndexRef,
    endIndexRef,
    columnsRef,
    renderColRef,
    renderItemWithColsRef,
    getLeft
  });
  return {
    listWidthRef,
    scrollLeftRef
  };
}
const VirtualListRow = defineComponent({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: true },
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { startIndexRef, endIndexRef, columnsRef, getLeft, renderColRef, renderItemWithColsRef } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(xScrollInjextionKey)
    );
    return {
      startIndex: startIndexRef,
      endIndex: endIndexRef,
      columns: columnsRef,
      renderCol: renderColRef,
      renderItemWithCols: renderItemWithColsRef,
      getLeft
    };
  },
  render() {
    const { startIndex, endIndex, columns, renderCol, renderItemWithCols, getLeft, item } = this;
    if (renderItemWithCols != null) {
      return renderItemWithCols({
        itemIndex: this.index,
        startColIndex: startIndex,
        endColIndex: endIndex,
        allColumns: columns,
        item,
        getLeft
      });
    }
    if (renderCol != null) {
      const items = [];
      for (let i = startIndex; i <= endIndex; ++i) {
        const column = columns[i];
        items.push(renderCol({ column, left: getLeft(i), item }));
      }
      return items;
    }
    return null;
  }
});
const styles$1 = c(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  c("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]);
const VVirtualList = defineComponent({
  name: "VirtualList",
  inheritAttrs: false,
  props: {
    showScrollbar: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    renderCol: Function,
    renderItemWithCols: Function,
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: true
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const ssrAdapter = useSsrAdapter();
    styles$1.mount({
      id: "vueuc/virtual-list",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(() => {
      const { defaultScrollIndex, defaultScrollKey } = props;
      if (defaultScrollIndex !== void 0 && defaultScrollIndex !== null) {
        scrollTo({ index: defaultScrollIndex });
      } else if (defaultScrollKey !== void 0 && defaultScrollKey !== null) {
        scrollTo({ key: defaultScrollKey });
      }
    });
    let isDeactivated = false;
    let activateStateInitialized = false;
    onActivated(() => {
      isDeactivated = false;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
        return;
      }
      scrollTo({ top: scrollTopRef.value, left: scrollLeftRef.value });
    });
    onDeactivated(() => {
      isDeactivated = true;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
      }
    });
    const totalWidthRef = useMemo(() => {
      if (props.renderCol == null && props.renderItemWithCols == null) {
        return void 0;
      }
      if (props.columns.length === 0)
        return void 0;
      let width = 0;
      props.columns.forEach((column) => {
        width += column.width;
      });
      return width;
    });
    const keyIndexMapRef = computed(() => {
      const map2 = /* @__PURE__ */ new Map();
      const { keyField } = props;
      props.items.forEach((item, index) => {
        map2.set(item[keyField], index);
      });
      return map2;
    });
    const { scrollLeftRef, listWidthRef } = setupXScroll({
      columnsRef: toRef(props, "columns"),
      renderColRef: toRef(props, "renderCol"),
      renderItemWithColsRef: toRef(props, "renderItemWithCols")
    });
    const listElRef = ref(null);
    const listHeightRef = ref(void 0);
    const keyToHeightOffset = /* @__PURE__ */ new Map();
    const finweckTreeRef = computed(() => {
      const { items, itemSize, keyField } = props;
      const ft = new FinweckTree(items.length, itemSize);
      items.forEach((item, index) => {
        const key = item[keyField];
        const heightOffset = keyToHeightOffset.get(key);
        if (heightOffset !== void 0) {
          ft.add(index, heightOffset);
        }
      });
      return ft;
    });
    const finweckTreeUpdateTrigger = ref(0);
    const scrollTopRef = ref(0);
    const startIndexRef = useMemo(() => {
      return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - depx(props.paddingTop)) - 1, 0);
    });
    const viewportItemsRef = computed(() => {
      const { value: listHeight } = listHeightRef;
      if (listHeight === void 0)
        return [];
      const { items, itemSize } = props;
      const startIndex = startIndexRef.value;
      const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
      const viewportItems = [];
      for (let i = startIndex; i <= endIndex; ++i) {
        viewportItems.push(items[i]);
      }
      return viewportItems;
    });
    const scrollTo = (options, y) => {
      if (typeof options === "number") {
        scrollToPosition(options, y, "auto");
        return;
      }
      const { left, top, index, key, position, behavior, debounce: debounce2 = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left, top, behavior);
      } else if (index !== void 0) {
        scrollToIndex(index, behavior, debounce2);
      } else if (key !== void 0) {
        const toIndex = keyIndexMapRef.value.get(key);
        if (toIndex !== void 0)
          scrollToIndex(toIndex, behavior, debounce2);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, behavior);
      }
    };
    let anchorIndex;
    let anchorTimerId = null;
    function scrollToIndex(index, behavior, debounce2) {
      const { value: ft } = finweckTreeRef;
      const targetTop = ft.sum(index) + depx(props.paddingTop);
      if (!debounce2) {
        listElRef.value.scrollTo({
          left: 0,
          top: targetTop,
          behavior
        });
      } else {
        anchorIndex = index;
        if (anchorTimerId !== null) {
          window.clearTimeout(anchorTimerId);
        }
        anchorTimerId = window.setTimeout(() => {
          anchorIndex = void 0;
          anchorTimerId = null;
        }, 16);
        const { scrollTop, offsetHeight } = listElRef.value;
        if (targetTop > scrollTop) {
          const itemSize = ft.get(index);
          if (targetTop + itemSize <= scrollTop + offsetHeight) ;
          else {
            listElRef.value.scrollTo({
              left: 0,
              top: targetTop + itemSize - offsetHeight,
              behavior
            });
          }
        } else {
          listElRef.value.scrollTo({
            left: 0,
            top: targetTop,
            behavior
          });
        }
      }
    }
    function scrollToPosition(left, top, behavior) {
      listElRef.value.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleItemResize(key, entry) {
      var _a, _b, _c;
      if (isDeactivated)
        return;
      if (props.ignoreItemResize)
        return;
      if (isHideByVShow(entry.target))
        return;
      const { value: ft } = finweckTreeRef;
      const index = keyIndexMapRef.value.get(key);
      const previousHeight = ft.get(index);
      const height = (_c = (_b = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.blockSize) !== null && _c !== void 0 ? _c : entry.contentRect.height;
      if (height === previousHeight)
        return;
      const offset = height - props.itemSize;
      if (offset === 0) {
        keyToHeightOffset.delete(key);
      } else {
        keyToHeightOffset.set(key, height - props.itemSize);
      }
      const delta = height - previousHeight;
      if (delta === 0)
        return;
      ft.add(index, delta);
      const listEl = listElRef.value;
      if (listEl != null) {
        if (anchorIndex === void 0) {
          const previousHeightSum = ft.sum(index);
          if (listEl.scrollTop > previousHeightSum) {
            listEl.scrollBy(0, delta);
          }
        } else {
          if (index < anchorIndex) {
            listEl.scrollBy(0, delta);
          } else if (index === anchorIndex) {
            const previousHeightSum = ft.sum(index);
            if (height + previousHeightSum > // Note, listEl shouldn't have border, nor offsetHeight won't be
            // correct
            listEl.scrollTop + listEl.offsetHeight) {
              listEl.scrollBy(0, delta);
            }
          }
        }
        syncViewport();
      }
      finweckTreeUpdateTrigger.value++;
    }
    const mayUseWheel = !ensureMaybeTouch();
    let wheelCatched = false;
    function handleListScroll(e) {
      var _a;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (!mayUseWheel || !wheelCatched) {
        syncViewport();
      }
    }
    function handleListWheel(e) {
      var _a;
      (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (mayUseWheel) {
        const listEl = listElRef.value;
        if (listEl != null) {
          if (e.deltaX === 0) {
            if (listEl.scrollTop === 0 && e.deltaY <= 0) {
              return;
            }
            if (listEl.scrollTop + listEl.offsetHeight >= listEl.scrollHeight && e.deltaY >= 0) {
              return;
            }
          }
          e.preventDefault();
          listEl.scrollTop += e.deltaY / ensureWheelScale();
          listEl.scrollLeft += e.deltaX / ensureWheelScale();
          syncViewport();
          wheelCatched = true;
          beforeNextFrameOnce(() => {
            wheelCatched = false;
          });
        }
      }
    }
    function handleListResize(entry) {
      if (isDeactivated)
        return;
      if (isHideByVShow(entry.target))
        return;
      if (props.renderCol == null && props.renderItemWithCols == null) {
        if (entry.contentRect.height === listHeightRef.value)
          return;
      } else {
        if (entry.contentRect.height === listHeightRef.value && entry.contentRect.width === listWidthRef.value) {
          return;
        }
      }
      listHeightRef.value = entry.contentRect.height;
      listWidthRef.value = entry.contentRect.width;
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    function syncViewport() {
      const { value: listEl } = listElRef;
      if (listEl == null)
        return;
      scrollTopRef.value = listEl.scrollTop;
      scrollLeftRef.value = listEl.scrollLeft;
    }
    function isHideByVShow(el) {
      let cursor = el;
      while (cursor !== null) {
        if (cursor.style.display === "none")
          return true;
        cursor = cursor.parentElement;
      }
      return false;
    }
    return {
      listHeight: listHeightRef,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: keyIndexMapRef,
      itemsStyle: computed(() => {
        const { itemResizable } = props;
        const height = pxfy(finweckTreeRef.value.sum());
        finweckTreeUpdateTrigger.value;
        return [
          props.itemsStyle,
          {
            boxSizing: "content-box",
            width: pxfy(totalWidthRef.value),
            height: itemResizable ? "" : height,
            minHeight: itemResizable ? height : "",
            paddingTop: pxfy(props.paddingTop),
            paddingBottom: pxfy(props.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: computed(() => {
        finweckTreeUpdateTrigger.value;
        return {
          transform: `translateY(${pxfy(finweckTreeRef.value.sum(startIndexRef.value))})`
        };
      }),
      viewportItems: viewportItemsRef,
      listElRef,
      itemsElRef: ref(null),
      scrollTo,
      handleListResize,
      handleListScroll,
      handleListWheel,
      handleItemResize
    };
  },
  render() {
    const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
    return h(VResizeObserver, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var _a, _b;
        return h("div", mergeProps(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? h("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            h(visibleItemsTag, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol, renderItemWithCols } = this;
                return this.viewportItems.map((item) => {
                  const key = item[keyField];
                  const index = keyToIndex.get(key);
                  const renderedCols = renderCol != null ? h(VirtualListRow, {
                    index,
                    item
                  }) : void 0;
                  const renderedItemWithCols = renderItemWithCols != null ? h(VirtualListRow, {
                    index,
                    item
                  }) : void 0;
                  const itemVNode = this.$slots.default({
                    item,
                    renderedCols,
                    renderedItemWithCols,
                    index
                  })[0];
                  if (itemResizable) {
                    return h(VResizeObserver, {
                      key,
                      onResize: (entry) => this.handleItemResize(key, entry)
                    }, {
                      default: () => itemVNode
                    });
                  }
                  itemVNode.key = key;
                  return itemVNode;
                });
              }
            })
          ]) : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
        ]);
      }
    });
  }
});
const styles = c(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  c("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]);
const VXScroll = defineComponent({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const selfRef = ref(null);
    function handleWheel(e) {
      const preventYWheel = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
      if (!preventYWheel || e.deltaY === 0)
        return;
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/x-scroll",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const exposedMethods = {
      scrollTo(...args) {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
      }
    };
    return Object.assign({
      selfRef,
      handleWheel
    }, exposedMethods);
  },
  render() {
    return h("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
});
const hiddenAttr = "v-hidden";
const style$f = c("[v-hidden]", {
  display: "none!important"
});
const VOverflow = defineComponent({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(props, { slots }) {
    const selfRef = ref(null);
    const counterRef = ref(null);
    function deriveCounter(options) {
      const { value: self2 } = selfRef;
      const { getCounter, getTail } = props;
      let counter;
      if (getCounter !== void 0)
        counter = getCounter();
      else {
        counter = counterRef.value;
      }
      if (!self2 || !counter)
        return;
      if (counter.hasAttribute(hiddenAttr)) {
        counter.removeAttribute(hiddenAttr);
      }
      const { children } = self2;
      if (options.showAllItemsBeforeCalculate) {
        for (const child of children) {
          if (child.hasAttribute(hiddenAttr)) {
            child.removeAttribute(hiddenAttr);
          }
        }
      }
      const containerWidth = self2.offsetWidth;
      const childWidths = [];
      const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
      let childWidthSum = tail ? tail.offsetWidth : 0;
      let overflow = false;
      const len2 = self2.children.length - (slots.tail ? 1 : 0);
      for (let i = 0; i < len2 - 1; ++i) {
        if (i < 0)
          continue;
        const child = children[i];
        if (overflow) {
          if (!child.hasAttribute(hiddenAttr)) {
            child.setAttribute(hiddenAttr, "");
          }
          continue;
        } else if (child.hasAttribute(hiddenAttr)) {
          child.removeAttribute(hiddenAttr);
        }
        const childWidth = child.offsetWidth;
        childWidthSum += childWidth;
        childWidths[i] = childWidth;
        if (childWidthSum > containerWidth) {
          const { updateCounter } = props;
          for (let j = i; j >= 0; --j) {
            const restCount = len2 - 1 - j;
            if (updateCounter !== void 0) {
              updateCounter(restCount);
            } else {
              counter.textContent = `${restCount}`;
            }
            const counterWidth = counter.offsetWidth;
            childWidthSum -= childWidths[j];
            if (childWidthSum + counterWidth <= containerWidth || j === 0) {
              overflow = true;
              i = j - 1;
              if (tail) {
                if (i === -1) {
                  tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                  tail.style.boxSizing = "border-box";
                } else {
                  tail.style.maxWidth = "";
                }
              }
              const { onUpdateCount } = props;
              if (onUpdateCount)
                onUpdateCount(restCount);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow } = props;
      if (!overflow) {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(false);
        }
        counter.setAttribute(hiddenAttr, "");
      } else {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(true);
        }
      }
    }
    const ssrAdapter = useSsrAdapter();
    style$f.mount({
      id: "vueuc/overflow",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(() => deriveCounter({
      showAllItemsBeforeCalculate: false
    }));
    return {
      selfRef,
      counterRef,
      sync: deriveCounter
    };
  },
  render() {
    const { $slots } = this;
    nextTick(() => this.sync({
      showAllItemsBeforeCalculate: false
    }));
    return h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      renderSlot($slots, "default"),
      // $slots.counter should only has 1 element
      $slots.counter ? $slots.counter() : h("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      $slots.tail ? $slots.tail() : null
    ]);
  }
});
function useOnResize(elRef, onResize) {
  if (onResize) {
    onMounted(() => {
      const {
        value: el
      } = elRef;
      if (el) {
        resizeObserverManager.registerHandler(el, onResize);
      }
    });
    watch(elRef, (_, oldEl) => {
      if (oldEl) {
        resizeObserverManager.unregisterHandler(oldEl);
      }
    }, {
      deep: false
    });
    onBeforeUnmount(() => {
      const {
        value: el
      } = elRef;
      if (el) {
        resizeObserverManager.unregisterHandler(el);
      }
    });
  }
}
const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
function formatLength(length, {
  c: c2 = 1,
  offset = 0,
  attachPx = true
} = {}) {
  if (typeof length === "number") {
    const result = (length + offset) * c2;
    if (result === 0) return "0";
    return `${result}px`;
  } else if (typeof length === "string") {
    if (pureNumberRegex.test(length)) {
      const result = (Number(length) + offset) * c2;
      if (attachPx) {
        if (result === 0) return "0";
        return `${result}px`;
      } else {
        return `${result}`;
      }
    } else {
      const result = numberRegex.exec(length);
      if (!result) return length;
      return length.replace(numberRegex, String((Number(result[0]) + offset) * c2));
    }
  }
  return length;
}
let _isJsdom;
function isJsdom() {
  if (_isJsdom === void 0) {
    _isJsdom = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  return _isJsdom;
}
function getTitleAttribute(value) {
  switch (typeof value) {
    case "string":
      return value || void 0;
    case "number":
      return String(value);
    default:
      return void 0;
  }
}
function createRefSetter(ref2) {
  return (inst) => {
    if (inst) {
      ref2.value = inst.$el;
    } else {
      ref2.value = null;
    }
  };
}
function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter((handler) => handler !== void 0);
  if (filteredHandlers.length === 0) return void 0;
  if (filteredHandlers.length === 1) return filteredHandlers[0];
  return (e) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(e);
      }
    });
  };
}
const enUS$1 = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (label) => `Please load all ${label}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (num) => `Total ${num} items`,
    selected: (num) => `${num} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  },
  Heatmap: {
    less: "less",
    more: "more",
    monthFormat: "MMM",
    weekdayFormat: "eee"
  }
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
function buildMatchFn(args) {
  return (string3, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string3.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern4) => pattern4.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern4) => pattern4.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string3.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object4, predicate) {
  for (const key in object4) {
    if (Object.prototype.hasOwnProperty.call(object4, key) && predicate(object4[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array4, predicate) {
  for (let key = 0; key < array4.length; key++) {
    if (predicate(array4[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string3, options = {}) => {
    const matchResult = string3.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string3.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string3.slice(matchedString.length);
    return { value, rest };
  };
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number4 = Number(dirtyNumber);
  const rem100 = number4 % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number4 + "st";
      case 2:
        return number4 + "nd";
      case 3:
        return number4 + "rd";
    }
  }
  return number4 + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const dateEnUs = {
  name: "en-US",
  locale: enUS
};
var reWhitespace = /\s/;
function trimmedEndIndex(string3) {
  var index = string3.length;
  while (index-- && reWhitespace.test(string3.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var WeakMap$1 = getNative(root, "WeakMap");
var nativeKeys = overArg(Object.keys, Object);
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys(object4);
  }
  var result = [];
  for (var key in Object(object4)) {
    if (hasOwnProperty$2.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object4) {
  if (isArray(value)) {
    return false;
  }
  var type4 = typeof value;
  if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string3) {
  var result = [];
  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }
  string3.replace(rePropName, function(match2, number4, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match2);
  });
  return result;
});
function castPath(value, object4) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object4) ? [value] : stringToPath(toString(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object4, path) {
  path = castPath(path, object4);
  var index = 0, length = path.length;
  while (object4 != null && index < length) {
    object4 = object4[toKey(path[index++])];
  }
  return index && index == length ? object4 : void 0;
}
function get(object4, path, defaultValue) {
  var result = object4 == null ? void 0 : baseGet(object4, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array4, values) {
  var index = -1, length = values.length, offset = array4.length;
  while (++index < length) {
    array4[offset + index] = values[index];
  }
  return array4;
}
function arrayFilter(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array4[index];
    if (predicate(value, index, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object4) {
  if (object4 == null) {
    return [];
  }
  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols(object4), function(symbol) {
    return propertyIsEnumerable.call(object4, symbol);
  });
};
function baseGetAllKeys(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray(object4) ? result : arrayPush(result, symbolsFunc(object4));
}
function getAllKeys(object4) {
  return baseGetAllKeys(object4, keys, getSymbols);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length;
  while (++index < length) {
    if (predicate(array4[index], index, array4)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array4.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array4);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array4, other);
  stack.set(other, array4);
  while (++index < arrLength) {
    var arrValue = array4[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array4, stack) : customizer(arrValue, othValue, index, array4, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array4);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object4, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
        return false;
      }
      object4 = object4.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array(object4), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object4, +other);
    case errorTag:
      return object4.name == other.name && object4.message == other.message;
    case regexpTag:
    case stringTag:
      return object4 == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object4.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object4);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object4, other);
      var result = equalArrays(convert(object4), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object4);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object4) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object4, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object4), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object4);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object4;
  }
  var result = true;
  stack.set(object4, other);
  stack.set(other, object4);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object4[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack) : customizer(objValue, othValue, key, object4, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object4.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object4);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object4, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object4), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object4), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object4)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object4, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object4, source, matchData, customizer) {
  var index = matchData.length, length = index;
  if (object4 == null) {
    return !length;
  }
  object4 = Object(object4);
  while (index--) {
    var data = matchData[index];
    if (data[2] ? data[1] !== object4[data[0]] : !(data[0] in object4)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object4[key], srcValue = data[1];
    if (data[2]) {
      if (objValue === void 0 && !(key in object4)) {
        return false;
      }
    } else {
      var stack = new Stack();
      var result;
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object4) {
  var result = keys(object4), length = result.length;
  while (length--) {
    var key = result[length], value = object4[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object4) {
    if (object4 == null) {
      return false;
    }
    return object4[key] === srcValue && (srcValue !== void 0 || key in Object(object4));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object4) {
    return object4 === source || baseIsMatch(object4, source, matchData);
  };
}
function baseHasIn(object4, key) {
  return object4 != null && key in Object(object4);
}
function hasPath(object4, path, hasFunc) {
  path = castPath(path, object4);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object4 != null && hasFunc(object4, key))) {
      break;
    }
    object4 = object4[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object4 == null ? 0 : object4.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object4) || isArguments(object4));
}
function hasIn(object4, path) {
  return object4 != null && hasPath(object4, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object4) {
    var objValue = get(object4, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object4, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object4) {
    return object4 == null ? void 0 : object4[key];
  };
}
function basePropertyDeep(path) {
  return function(object4) {
    return baseGet(object4, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseForOwn(object4, iteratee) {
  return object4 && baseFor(object4, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = -1, iterable = Object(collection);
    while (++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle$1(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function useLocale(ns) {
  const {
    mergedLocaleRef,
    mergedDateLocaleRef
  } = inject(configProviderInjectionKey, null) || {};
  const localeRef = computed(() => {
    var _a, _b;
    return (_b = (_a = mergedLocaleRef === null || mergedLocaleRef === void 0 ? void 0 : mergedLocaleRef.value) === null || _a === void 0 ? void 0 : _a[ns]) !== null && _b !== void 0 ? _b : enUS$1[ns];
  });
  const dateLocaleRef = computed(() => {
    var _a;
    return (_a = mergedDateLocaleRef === null || mergedDateLocaleRef === void 0 ? void 0 : mergedDateLocaleRef.value) !== null && _a !== void 0 ? _a : dateEnUs;
  });
  return {
    dateLocaleRef,
    localeRef
  };
}
const AddIcon = defineComponent({
  name: "Add",
  render() {
    return h("svg", {
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M256 112V400M400 256H112",
      stroke: "currentColor",
      "stroke-width": "32",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }));
  }
});
const FinishedIcon = defineComponent({
  name: "Checkmark",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, h("g", {
      fill: "none"
    }, h("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
});
const ChevronDownIcon = defineComponent({
  name: "ChevronDown",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
});
const ChevronRightIcon = defineComponent({
  name: "ChevronRight",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const ClearIcon = replaceable("clear", () => h("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
})))));
const EmptyIcon = defineComponent({
  name: "Empty",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), h("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
});
const EyeIcon = defineComponent({
  name: "Eye",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), h("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
});
const EyeOffIcon = defineComponent({
  name: "EyeOff",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), h("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), h("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), h("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), h("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
});
const style$e = cB("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [c$1(">", [cE("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [c$1("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), c$1("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), cE("placeholder", `
 display: flex;
 `), cE("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]);
const NBaseClear = defineComponent({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    useStyle("-base-clear", style$e, toRef(props, "clsPrefix"));
    return {
      handleMouseDown(e) {
        e.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-base-clear`
    }, h(NIconSwitchTransition, null, {
      default: () => {
        var _a, _b;
        return this.show ? h("div", {
          key: "dismiss",
          class: `${clsPrefix}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": true
        }, resolveSlot(this.$slots.icon, () => [h(NBaseIcon, {
          clsPrefix
        }, {
          default: () => h(ClearIcon, null)
        })])) : h("div", {
          key: "icon",
          class: `${clsPrefix}-base-clear__placeholder`
        }, (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
      }
    }));
  }
});
const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    });
  }
});
function toArray(arg) {
  if (Array.isArray(arg))
    return arg;
  return [arg];
}
const TRAVERSE_COMMAND = {
  STOP: "STOP"
};
function traverseWithCb(treeNode, callback) {
  const command = callback(treeNode);
  if (treeNode.children !== void 0 && command !== TRAVERSE_COMMAND.STOP) {
    treeNode.children.forEach((childNode) => traverseWithCb(childNode, callback));
  }
}
function getNonLeafKeys(treeNodes, options = {}) {
  const { preserveGroup = false } = options;
  const keys2 = [];
  const cb = preserveGroup ? (node) => {
    if (!node.isLeaf) {
      keys2.push(node.key);
      traverse(node.children);
    }
  } : (node) => {
    if (!node.isLeaf) {
      if (!node.isGroup)
        keys2.push(node.key);
      traverse(node.children);
    }
  };
  function traverse(nodes) {
    nodes.forEach(cb);
  }
  traverse(treeNodes);
  return keys2;
}
function isLeaf(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 !== void 0)
    return isLeaf2;
  else if (!getChildren(rawNode))
    return true;
  return false;
}
function defaultGetChildren(node) {
  return node.children;
}
function defaultGetKey(node) {
  return node.key;
}
function isIgnored() {
  return false;
}
function isShallowLoaded(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 === false && !Array.isArray(getChildren(rawNode)))
    return false;
  return true;
}
function isDisabled(rawNode) {
  return rawNode.disabled === true;
}
function isExpilicitlyNotLoaded(rawNode, getChildren) {
  return rawNode.isLeaf === false && !Array.isArray(getChildren(rawNode));
}
function unwrapCheckedKeys(result) {
  var _a;
  if (result === void 0 || result === null)
    return [];
  if (Array.isArray(result))
    return result;
  return (_a = result.checkedKeys) !== null && _a !== void 0 ? _a : [];
}
function unwrapIndeterminateKeys(result) {
  var _a;
  if (result === void 0 || result === null || Array.isArray(result)) {
    return [];
  }
  return (_a = result.indeterminateKeys) !== null && _a !== void 0 ? _a : [];
}
function merge(originalKeys, keysToAdd) {
  const set = new Set(originalKeys);
  keysToAdd.forEach((key) => {
    if (!set.has(key)) {
      set.add(key);
    }
  });
  return Array.from(set);
}
function minus(originalKeys, keysToRemove) {
  const set = new Set(originalKeys);
  keysToRemove.forEach((key) => {
    if (set.has(key)) {
      set.delete(key);
    }
  });
  return Array.from(set);
}
function isGroup(rawNode) {
  return (rawNode === null || rawNode === void 0 ? void 0 : rawNode.type) === "group";
}
function createIndexGetter(treeNodes) {
  const map2 = /* @__PURE__ */ new Map();
  treeNodes.forEach((treeNode, i) => {
    map2.set(treeNode.key, i);
  });
  return (key) => {
    var _a;
    return (_a = map2.get(key)) !== null && _a !== void 0 ? _a : null;
  };
}
class SubtreeNotLoadedError extends Error {
  constructor() {
    super();
    this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function getExtendedCheckedKeySetAfterCheck(checkKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  return getExtendedCheckedKeySet(currentCheckedKeys.concat(checkKeys), treeMate, allowNotLoaded, false);
}
function getAvailableAscendantNodeSet(uncheckedKeys, treeMate) {
  const visitedKeys = /* @__PURE__ */ new Set();
  uncheckedKeys.forEach((uncheckedKey) => {
    const uncheckedTreeNode = treeMate.treeNodeMap.get(uncheckedKey);
    if (uncheckedTreeNode !== void 0) {
      let nodeCursor = uncheckedTreeNode.parent;
      while (nodeCursor !== null) {
        if (nodeCursor.disabled)
          break;
        if (visitedKeys.has(nodeCursor.key))
          break;
        else {
          visitedKeys.add(nodeCursor.key);
        }
        nodeCursor = nodeCursor.parent;
      }
    }
  });
  return visitedKeys;
}
function getExtendedCheckedKeySetAfterUncheck(uncheckedKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  const extendedCheckedKeySet = getExtendedCheckedKeySet(currentCheckedKeys, treeMate, allowNotLoaded, false);
  const extendedKeySetToUncheck = getExtendedCheckedKeySet(uncheckedKeys, treeMate, allowNotLoaded, true);
  const ascendantKeySet = getAvailableAscendantNodeSet(uncheckedKeys, treeMate);
  const keysToRemove = [];
  extendedCheckedKeySet.forEach((key) => {
    if (extendedKeySetToUncheck.has(key) || ascendantKeySet.has(key)) {
      keysToRemove.push(key);
    }
  });
  keysToRemove.forEach((key) => extendedCheckedKeySet.delete(key));
  return extendedCheckedKeySet;
}
function getCheckedKeys(options, treeMate) {
  const { checkedKeys, keysToCheck, keysToUncheck, indeterminateKeys, cascade, leafOnly, checkStrategy, allowNotLoaded } = options;
  if (!cascade) {
    if (keysToCheck !== void 0) {
      return {
        checkedKeys: merge(checkedKeys, keysToCheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else if (keysToUncheck !== void 0) {
      return {
        checkedKeys: minus(checkedKeys, keysToUncheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else {
      return {
        checkedKeys: Array.from(checkedKeys),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    }
  }
  const { levelTreeNodeMap } = treeMate;
  let extendedCheckedKeySet;
  if (keysToUncheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterUncheck(keysToUncheck, checkedKeys, treeMate, allowNotLoaded);
  } else if (keysToCheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterCheck(keysToCheck, checkedKeys, treeMate, allowNotLoaded);
  } else {
    extendedCheckedKeySet = getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, false);
  }
  const checkStrategyIsParent = checkStrategy === "parent";
  const checkStrategyIsChild = checkStrategy === "child" || leafOnly;
  const syntheticCheckedKeySet = extendedCheckedKeySet;
  const syntheticIndeterminateKeySet = /* @__PURE__ */ new Set();
  const maxLevel = Math.max.apply(null, Array.from(levelTreeNodeMap.keys()));
  for (let level = maxLevel; level >= 0; level -= 1) {
    const levelIsZero = level === 0;
    const levelTreeNodes = levelTreeNodeMap.get(level);
    for (const levelTreeNode of levelTreeNodes) {
      if (levelTreeNode.isLeaf)
        continue;
      const { key: levelTreeNodeKey, shallowLoaded } = levelTreeNode;
      if (checkStrategyIsChild && shallowLoaded) {
        levelTreeNode.children.forEach((v) => {
          if (!v.disabled && !v.isLeaf && v.shallowLoaded && syntheticCheckedKeySet.has(v.key)) {
            syntheticCheckedKeySet.delete(v.key);
          }
        });
      }
      if (levelTreeNode.disabled || !shallowLoaded) {
        continue;
      }
      let fullyChecked = true;
      let partialChecked = false;
      let allDisabled = true;
      for (const childNode of levelTreeNode.children) {
        const childKey = childNode.key;
        if (childNode.disabled)
          continue;
        if (allDisabled)
          allDisabled = false;
        if (syntheticCheckedKeySet.has(childKey)) {
          partialChecked = true;
        } else if (syntheticIndeterminateKeySet.has(childKey)) {
          partialChecked = true;
          fullyChecked = false;
          break;
        } else {
          fullyChecked = false;
          if (partialChecked) {
            break;
          }
        }
      }
      if (fullyChecked && !allDisabled) {
        if (checkStrategyIsParent) {
          levelTreeNode.children.forEach((v) => {
            if (!v.disabled && syntheticCheckedKeySet.has(v.key)) {
              syntheticCheckedKeySet.delete(v.key);
            }
          });
        }
        syntheticCheckedKeySet.add(levelTreeNodeKey);
      } else if (partialChecked) {
        syntheticIndeterminateKeySet.add(levelTreeNodeKey);
      }
      if (levelIsZero && checkStrategyIsChild && syntheticCheckedKeySet.has(levelTreeNodeKey)) {
        syntheticCheckedKeySet.delete(levelTreeNodeKey);
      }
    }
  }
  return {
    checkedKeys: Array.from(syntheticCheckedKeySet),
    indeterminateKeys: Array.from(syntheticIndeterminateKeySet)
  };
}
function getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, isUnchecking) {
  const { treeNodeMap, getChildren } = treeMate;
  const visitedKeySet = /* @__PURE__ */ new Set();
  const extendedKeySet = new Set(checkedKeys);
  checkedKeys.forEach((checkedKey) => {
    const checkedTreeNode = treeNodeMap.get(checkedKey);
    if (checkedTreeNode !== void 0) {
      traverseWithCb(checkedTreeNode, (treeNode) => {
        if (treeNode.disabled) {
          return TRAVERSE_COMMAND.STOP;
        }
        const { key } = treeNode;
        if (visitedKeySet.has(key))
          return;
        visitedKeySet.add(key);
        extendedKeySet.add(key);
        if (isExpilicitlyNotLoaded(treeNode.rawNode, getChildren)) {
          if (isUnchecking) {
            return TRAVERSE_COMMAND.STOP;
          } else if (!allowNotLoaded) {
            throw new SubtreeNotLoadedError();
          }
        }
      });
    }
  });
  return extendedKeySet;
}
function getPath(key, { includeGroup = false, includeSelf = true }, treeMate) {
  var _a;
  const treeNodeMap = treeMate.treeNodeMap;
  let treeNode = key === null || key === void 0 ? null : (_a = treeNodeMap.get(key)) !== null && _a !== void 0 ? _a : null;
  const mergedPath = {
    keyPath: [],
    treeNodePath: [],
    treeNode
  };
  if (treeNode === null || treeNode === void 0 ? void 0 : treeNode.ignored) {
    mergedPath.treeNode = null;
    return mergedPath;
  }
  while (treeNode) {
    if (!treeNode.ignored && (includeGroup || !treeNode.isGroup)) {
      mergedPath.treeNodePath.push(treeNode);
    }
    treeNode = treeNode.parent;
  }
  mergedPath.treeNodePath.reverse();
  if (!includeSelf)
    mergedPath.treeNodePath.pop();
  mergedPath.keyPath = mergedPath.treeNodePath.map((treeNode2) => treeNode2.key);
  return mergedPath;
}
function getFirstAvailableNode(nodes) {
  if (nodes.length === 0)
    return null;
  const node = nodes[0];
  if (node.isGroup || node.ignored || node.disabled) {
    return node.getNext();
  }
  return node;
}
function rawGetNext(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index + 1) % l];
  } else {
    if (index === sibs.length - 1)
      return null;
    return sibs[index + 1];
  }
}
function move(fromNode, dir, { loop = false, includeDisabled = false } = {}) {
  const iterate = dir === "prev" ? rawGetPrev : rawGetNext;
  const getChildOptions = {
    reverse: dir === "prev"
  };
  let meet = false;
  let endNode = null;
  function traverse(node) {
    if (node === null)
      return;
    if (node === fromNode) {
      if (!meet) {
        meet = true;
      } else if (!fromNode.disabled && !fromNode.isGroup) {
        endNode = fromNode;
        return;
      }
    } else {
      if ((!node.disabled || includeDisabled) && !node.ignored && !node.isGroup) {
        endNode = node;
        return;
      }
    }
    if (node.isGroup) {
      const child = getChild(node, getChildOptions);
      if (child !== null) {
        endNode = child;
      } else {
        traverse(iterate(node, loop));
      }
    } else {
      const nextNode = iterate(node, false);
      if (nextNode !== null) {
        traverse(nextNode);
      } else {
        const parent = rawGetParent(node);
        if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
          traverse(iterate(parent, loop));
        } else if (loop) {
          traverse(iterate(node, true));
        }
      }
    }
  }
  traverse(fromNode);
  return endNode;
}
function rawGetPrev(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index - 1 + l) % l];
  } else {
    if (index === 0)
      return null;
    return sibs[index - 1];
  }
}
function rawGetParent(node) {
  return node.parent;
}
function getChild(node, options = {}) {
  const { reverse = false } = options;
  const { children } = node;
  if (children) {
    const { length } = children;
    const start = reverse ? length - 1 : 0;
    const end = reverse ? -1 : length;
    const delta = reverse ? -1 : 1;
    for (let i = start; i !== end; i += delta) {
      const child = children[i];
      if (!child.disabled && !child.ignored) {
        if (child.isGroup) {
          const childInGroup = getChild(child, options);
          if (childInGroup !== null)
            return childInGroup;
        } else {
          return child;
        }
      }
    }
  }
  return null;
}
const moveMethods = {
  getChild() {
    if (this.ignored)
      return null;
    return getChild(this);
  },
  getParent() {
    const { parent } = this;
    if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
      return parent.getParent();
    }
    return parent;
  },
  getNext(options = {}) {
    return move(this, "next", options);
  },
  getPrev(options = {}) {
    return move(this, "prev", options);
  }
};
function flatten(treeNodes, expandedKeys) {
  const expandedKeySet = expandedKeys ? new Set(expandedKeys) : void 0;
  const flattenedNodes = [];
  function traverse(treeNodes2) {
    treeNodes2.forEach((treeNode) => {
      flattenedNodes.push(treeNode);
      if (treeNode.isLeaf || !treeNode.children || treeNode.ignored)
        return;
      if (treeNode.isGroup) {
        traverse(treeNode.children);
      } else if (
        // normal non-leaf node
        expandedKeySet === void 0 || expandedKeySet.has(treeNode.key)
      ) {
        traverse(treeNode.children);
      }
    });
  }
  traverse(treeNodes);
  return flattenedNodes;
}
function contains(parent, child) {
  const parentKey = parent.key;
  while (child) {
    if (child.key === parentKey)
      return true;
    child = child.parent;
  }
  return false;
}
function createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, parent = null, level = 0) {
  const treeNodes = [];
  rawNodes.forEach((rawNode, index) => {
    var _a;
    const treeNode = Object.create(nodeProto);
    treeNode.rawNode = rawNode;
    treeNode.siblings = treeNodes;
    treeNode.level = level;
    treeNode.index = index;
    treeNode.isFirstChild = index === 0;
    treeNode.isLastChild = index + 1 === rawNodes.length;
    treeNode.parent = parent;
    if (!treeNode.ignored) {
      const rawChildren = getChildren(rawNode);
      if (Array.isArray(rawChildren)) {
        treeNode.children = createTreeNodes(rawChildren, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, treeNode, level + 1);
      }
    }
    treeNodes.push(treeNode);
    treeNodeMap.set(treeNode.key, treeNode);
    if (!levelTreeNodeMap.has(level))
      levelTreeNodeMap.set(level, []);
    (_a = levelTreeNodeMap.get(level)) === null || _a === void 0 ? void 0 : _a.push(treeNode);
  });
  return treeNodes;
}
function createTreeMate(rawNodes, options = {}) {
  var _a;
  const treeNodeMap = /* @__PURE__ */ new Map();
  const levelTreeNodeMap = /* @__PURE__ */ new Map();
  const { getDisabled = isDisabled, getIgnored: getIgnored2 = isIgnored, getIsGroup: getIsGroup2 = isGroup, getKey = defaultGetKey } = options;
  const _getChildren = (_a = options.getChildren) !== null && _a !== void 0 ? _a : defaultGetChildren;
  const getChildren = options.ignoreEmptyChildren ? (node) => {
    const children = _getChildren(node);
    if (Array.isArray(children)) {
      if (!children.length)
        return null;
      return children;
    }
    return children;
  } : _getChildren;
  const nodeProto = Object.assign({
    get key() {
      return getKey(this.rawNode);
    },
    get disabled() {
      return getDisabled(this.rawNode);
    },
    get isGroup() {
      return getIsGroup2(this.rawNode);
    },
    get isLeaf() {
      return isLeaf(this.rawNode, getChildren);
    },
    get shallowLoaded() {
      return isShallowLoaded(this.rawNode, getChildren);
    },
    get ignored() {
      return getIgnored2(this.rawNode);
    },
    contains(node) {
      return contains(this, node);
    }
  }, moveMethods);
  const treeNodes = createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren);
  function getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.isGroup && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function _getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function getPrev(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getPrev(options2);
  }
  function getNext(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getNext(options2);
  }
  function getParent(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getParent();
  }
  function getChild2(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getChild();
  }
  const treemate = {
    treeNodes,
    treeNodeMap,
    levelTreeNodeMap,
    maxLevel: Math.max(...levelTreeNodeMap.keys()),
    getChildren,
    getFlattenedNodes(expandedKeys) {
      return flatten(treeNodes, expandedKeys);
    },
    getNode,
    getPrev,
    getNext,
    getParent,
    getChild: getChild2,
    getFirstAvailableNode() {
      return getFirstAvailableNode(treeNodes);
    },
    getPath(key, options2 = {}) {
      return getPath(key, options2, treemate);
    },
    getCheckedKeys(checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    check(keysToCheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToCheck: keysToCheck === void 0 || keysToCheck === null ? [] : toArray(keysToCheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    uncheck(keysToUncheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToUncheck: keysToUncheck === null || keysToUncheck === void 0 ? [] : toArray(keysToUncheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    getNonLeafKeys(options2 = {}) {
      return getNonLeafKeys(treeNodes, options2);
    }
  };
  return treemate;
}
const style$d = cB("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c$1("+", [cE("description", `
 margin-top: 8px;
 `)])]), cE("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);
const emptyProps = Object.assign(Object.assign({}, useTheme.props), {
  description: String,
  showDescription: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "medium"
  },
  renderIcon: Function
});
const NEmpty = defineComponent({
  name: "Empty",
  props: emptyProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme("Empty", "-empty", style$d, emptyLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale("Empty");
    const mergedDescriptionRef = computed(() => {
      var _a, _b, _c;
      return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
    });
    const mergedRenderIconRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h(EmptyIcon, null));
    });
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          [createKey("iconSize", size)]: iconSize,
          [createKey("fontSize", size)]: fontSize,
          textColor,
          iconColor,
          extraTextColor
        }
      } = themeRef.value;
      return {
        "--n-icon-size": iconSize,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor,
        "--n-extra-text-color": extraTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("empty", computed(() => {
      let hash = "";
      const {
        size
      } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description;
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? h("div", {
      class: `${mergedClsPrefix}-empty__icon`
    }, $slots.icon ? $slots.icon() : h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? h("div", {
      class: `${mergedClsPrefix}-empty__description`
    }, $slots.default ? $slots.default() : this.localizedDescription) : null, $slots.extra ? h("div", {
      class: `${mergedClsPrefix}-empty__extra`
    }, $slots.extra()) : null);
  }
});
const NSelectGroupHeader = defineComponent({
  name: "NBaseSelectGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      nodePropsRef
    } = inject(internalSelectionMenuInjectionKey);
    return {
      labelField: labelFieldRef,
      nodeProps: nodePropsRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    const {
      clsPrefix,
      renderLabel,
      renderOption,
      nodeProps,
      tmNode: {
        rawNode
      }
    } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
    const node = h("div", Object.assign({}, attrs, {
      class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class]
    }), children);
    return rawNode.render ? rawNode.render({
      node,
      option: rawNode
    }) : renderOption ? renderOption({
      node,
      option: rawNode,
      selected: false
    }) : node;
  }
});
function renderCheckMark(show, clsPrefix) {
  return h(Transition, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => show ? h(NBaseIcon, {
      clsPrefix,
      class: `${clsPrefix}-base-select-option__check`
    }, {
      default: () => h(FinishedIcon)
    }) : null
  });
}
const NSelectOption = defineComponent({
  name: "NBaseSelectOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      valueRef,
      pendingTmNodeRef,
      multipleRef,
      valueSetRef,
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      valueFieldRef,
      showCheckmarkRef,
      nodePropsRef,
      handleOptionClick,
      handleOptionMouseEnter
    } = inject(internalSelectionMenuInjectionKey);
    const isPendingRef = useMemo(() => {
      const {
        value: pendingTmNode
      } = pendingTmNodeRef;
      if (!pendingTmNode) return false;
      return props.tmNode.key === pendingTmNode.key;
    });
    function handleClick(e) {
      const {
        tmNode
      } = props;
      if (tmNode.disabled) return;
      handleOptionClick(e, tmNode);
    }
    function handleMouseEnter(e) {
      const {
        tmNode
      } = props;
      if (tmNode.disabled) return;
      handleOptionMouseEnter(e, tmNode);
    }
    function handleMouseMove(e) {
      const {
        tmNode
      } = props;
      const {
        value: isPending
      } = isPendingRef;
      if (tmNode.disabled || isPending) return;
      handleOptionMouseEnter(e, tmNode);
    }
    return {
      multiple: multipleRef,
      isGrouped: useMemo(() => {
        const {
          tmNode
        } = props;
        const {
          parent
        } = tmNode;
        return parent && parent.rawNode.type === "group";
      }),
      showCheckmark: showCheckmarkRef,
      nodeProps: nodePropsRef,
      isPending: isPendingRef,
      isSelected: useMemo(() => {
        const {
          value
        } = valueRef;
        const {
          value: multiple
        } = multipleRef;
        if (value === null) return false;
        const optionValue = props.tmNode.rawNode[valueFieldRef.value];
        if (multiple) {
          const {
            value: valueSet
          } = valueSetRef;
          return valueSet.has(optionValue);
        } else {
          return value === optionValue;
        }
      }),
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef,
      handleMouseMove,
      handleMouseEnter,
      handleClick
    };
  },
  render() {
    const {
      clsPrefix,
      tmNode: {
        rawNode
      },
      isSelected,
      isPending,
      isGrouped,
      showCheckmark,
      nodeProps,
      renderOption,
      renderLabel,
      handleClick,
      handleMouseEnter,
      handleMouseMove
    } = this;
    const checkmark = renderCheckMark(isSelected, clsPrefix);
    const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [render(rawNode[this.labelField], rawNode, isSelected), showCheckmark && checkmark];
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h("div", Object.assign({}, attrs, {
      class: [`${clsPrefix}-base-select-option`, rawNode.class, attrs === null || attrs === void 0 ? void 0 : attrs.class, {
        [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
        [`${clsPrefix}-base-select-option--selected`]: isSelected,
        [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
        [`${clsPrefix}-base-select-option--pending`]: isPending,
        [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
      }],
      style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", rawNode.style || ""],
      onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]),
      onMouseenter: mergeEventHandlers([handleMouseEnter, attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter]),
      onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove])
    }), h("div", {
      class: `${clsPrefix}-base-select-option__content`
    }, children));
    return rawNode.render ? rawNode.render({
      node,
      option: rawNode,
      selected: isSelected
    }) : renderOption ? renderOption({
      node,
      option: rawNode,
      selected: isSelected
    }) : node;
  }
});
const style$c = cB("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB("scrollbar", `
 max-height: var(--n-height);
 `), cB("virtual-list", `
 max-height: var(--n-height);
 `), cB("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), cE("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cE("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1("&:active", `
 color: var(--n-option-text-color-pressed);
 `), cM("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), cM("selected", `
 color: var(--n-option-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-option-color-active);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cNotM("selected", `
 color: var(--n-option-text-color-disabled);
 `), cM("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
  enterScale: "0.5"
})])])]);
const NInternalSelectMenu = defineComponent({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: {
      type: Boolean,
      default: true
    },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true
    },
    inlineThemeDisabled: Boolean,
    scrollbarProps: Object,
    // deprecated
    onToggle: Function
  }),
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef,
      mergedComponentPropsRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("InternalSelectMenu", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("InternalSelectMenu", "-internal-select-menu", style$c, internalSelectMenuLight, props, toRef(props, "clsPrefix"));
    const selfRef = ref(null);
    const virtualListRef = ref(null);
    const scrollbarRef = ref(null);
    const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes());
    const fIndexGetterRef = computed(() => createIndexGetter(flattenedNodesRef.value));
    const pendingNodeRef = ref(null);
    function initPendingNode() {
      const {
        treeMate
      } = props;
      let defaultPendingNode = null;
      const {
        value
      } = props;
      if (value === null) {
        defaultPendingNode = treeMate.getFirstAvailableNode();
      } else {
        if (props.multiple) {
          defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
        } else {
          defaultPendingNode = treeMate.getNode(value);
        }
        if (!defaultPendingNode || defaultPendingNode.disabled) {
          defaultPendingNode = treeMate.getFirstAvailableNode();
        }
      }
      if (defaultPendingNode) {
        setPendingTmNode(defaultPendingNode);
      } else {
        setPendingTmNode(null);
      }
    }
    function clearPendingNodeIfInvalid() {
      const {
        value: pendingNode
      } = pendingNodeRef;
      if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
        pendingNodeRef.value = null;
      }
    }
    let initPendingNodeWatchStopHandle;
    watch(() => props.show, (show) => {
      if (show) {
        initPendingNodeWatchStopHandle = watch(() => props.treeMate, () => {
          if (props.resetMenuOnOptionsChange) {
            if (props.autoPending) {
              initPendingNode();
            } else {
              clearPendingNodeIfInvalid();
            }
            void nextTick(scrollToPendingNode);
          } else {
            clearPendingNodeIfInvalid();
          }
        }, {
          immediate: true
        });
      } else {
        initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
    });
    const itemSizeRef = computed(() => {
      return depx(themeRef.value.self[createKey("optionHeight", props.size)]);
    });
    const paddingRef = computed(() => {
      return getMargin(themeRef.value.self[createKey("padding", props.size)]);
    });
    const valueSetRef = computed(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value);
      }
      return /* @__PURE__ */ new Set();
    });
    const emptyRef = computed(() => {
      const tmNodes = flattenedNodesRef.value;
      return tmNodes && tmNodes.length === 0;
    });
    const mergedRenderEmptyRef = computed(() => {
      var _a, _b;
      return (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Select) === null || _b === void 0 ? void 0 : _b.renderEmpty;
    });
    function doToggle(tmNode) {
      const {
        onToggle
      } = props;
      if (onToggle) onToggle(tmNode);
    }
    function doScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) onScroll(e);
    }
    function handleVirtualListScroll(e) {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      doScroll(e);
    }
    function handleVirtualListResize() {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function getPendingTmNode() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) return pendingTmNode;
      return null;
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled) return;
      setPendingTmNode(tmNode, false);
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled) return;
      doToggle(tmNode);
    }
    function handleKeyUp(e) {
      var _a;
      if (happensIn(e, "action")) return;
      (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleKeyDown(e) {
      var _a;
      if (happensIn(e, "action")) return;
      (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleMouseDown(e) {
      var _a;
      (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.focusable) return;
      e.preventDefault();
    }
    function next() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({
          loop: true
        }), true);
      }
    }
    function prev() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({
          loop: true
        }), true);
      }
    }
    function setPendingTmNode(tmNode, doScroll2 = false) {
      pendingNodeRef.value = tmNode;
      if (doScroll2) scrollToPendingNode();
    }
    function scrollToPendingNode() {
      var _a, _b;
      const tmNode = pendingNodeRef.value;
      if (!tmNode) return;
      const fIndex = fIndexGetterRef.value(tmNode.key);
      if (fIndex === null) return;
      if (props.virtualScroll) {
        (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({
          index: fIndex
        });
      } else {
        (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
          index: fIndex,
          elSize: itemSizeRef.value
        });
      }
    }
    function handleFocusin(e) {
      var _a, _b;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    function handleFocusout(e) {
      var _a, _b;
      if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      pendingTmNodeRef: pendingNodeRef,
      nodePropsRef: toRef(props, "nodeProps"),
      showCheckmarkRef: toRef(props, "showCheckmark"),
      multipleRef: toRef(props, "multiple"),
      valueRef: toRef(props, "value"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderOptionRef: toRef(props, "renderOption"),
      labelFieldRef: toRef(props, "labelField"),
      valueFieldRef: toRef(props, "valueField")
    });
    provide(internalSelectionMenuBodyInjectionKey, selfRef);
    onMounted(() => {
      const {
        value
      } = scrollbarRef;
      if (value) value.sync();
    });
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          height,
          borderRadius,
          color,
          groupHeaderTextColor,
          actionDividerColor,
          optionTextColorPressed,
          optionTextColor,
          optionTextColorDisabled,
          optionTextColorActive,
          optionOpacityDisabled,
          optionCheckColor,
          actionTextColor,
          optionColorPending,
          optionColorActive,
          loadingColor,
          loadingSize,
          optionColorActivePending,
          [createKey("optionFontSize", size)]: fontSize,
          [createKey("optionHeight", size)]: optionHeight,
          [createKey("optionPadding", size)]: optionPadding
        }
      } = themeRef.value;
      return {
        "--n-height": height,
        "--n-action-divider-color": actionDividerColor,
        "--n-action-text-color": actionTextColor,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-option-font-size": fontSize,
        "--n-group-header-text-color": groupHeaderTextColor,
        "--n-option-check-color": optionCheckColor,
        "--n-option-color-pending": optionColorPending,
        "--n-option-color-active": optionColorActive,
        "--n-option-color-active-pending": optionColorActivePending,
        "--n-option-height": optionHeight,
        "--n-option-opacity-disabled": optionOpacityDisabled,
        "--n-option-text-color": optionTextColor,
        "--n-option-text-color-active": optionTextColorActive,
        "--n-option-text-color-disabled": optionTextColorDisabled,
        "--n-option-text-color-pressed": optionTextColorPressed,
        "--n-option-padding": optionPadding,
        "--n-option-padding-left": getMargin(optionPadding, "left"),
        "--n-option-padding-right": getMargin(optionPadding, "right"),
        "--n-loading-color": loadingColor,
        "--n-loading-size": loadingSize
      };
    });
    const {
      inlineThemeDisabled
    } = props;
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-select-menu", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    };
    useOnResize(selfRef, props.onResize);
    return Object.assign({
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      virtualListRef,
      scrollbarRef,
      itemSize: itemSizeRef,
      padding: paddingRef,
      flattenedNodes: flattenedNodesRef,
      empty: emptyRef,
      mergedRenderEmpty: mergedRenderEmptyRef,
      virtualListContainer() {
        const {
          value
        } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
      },
      virtualListContent() {
        const {
          value
        } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
      },
      doScroll,
      handleFocusin,
      handleFocusout,
      handleKeyUp,
      handleKeyDown,
      handleMouseDown,
      handleVirtualListResize,
      handleVirtualListScroll,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedProps);
  },
  render() {
    const {
      $slots,
      virtualScroll,
      clsPrefix,
      mergedTheme,
      themeClass,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: this.focusable ? 0 : -1,
      class: [`${clsPrefix}-base-select-menu`, `${clsPrefix}-base-select-menu--${this.size}-size`, this.rtlEnabled && `${clsPrefix}-base-select-menu--rtl`, themeClass, this.multiple && `${clsPrefix}-base-select-menu--multiple`],
      style: this.cssVars,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onKeyup: this.handleKeyUp,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, resolveWrappedSlot($slots.header, (children) => children && h("div", {
      class: `${clsPrefix}-base-select-menu__header`,
      "data-header": true,
      key: "header"
    }, children)), this.loading ? h("div", {
      class: `${clsPrefix}-base-select-menu__loading`
    }, h(NBaseLoading, {
      clsPrefix,
      strokeWidth: 20
    })) : !this.empty ? h(Scrollbar, Object.assign({
      ref: "scrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: virtualScroll ? this.virtualListContainer : void 0,
      content: virtualScroll ? this.virtualListContent : void 0,
      onScroll: virtualScroll ? void 0 : this.doScroll
    }, this.scrollbarProps), {
      default: () => {
        return virtualScroll ? h(VVirtualList, {
          ref: "virtualListRef",
          class: `${clsPrefix}-virtual-list`,
          items: this.flattenedNodes,
          itemSize: this.itemSize,
          showScrollbar: false,
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemResizable: true
        }, {
          default: ({
            item: tmNode
          }) => {
            return tmNode.isGroup ? h(NSelectGroupHeader, {
              key: tmNode.key,
              clsPrefix,
              tmNode
            }) : tmNode.ignored ? null : h(NSelectOption, {
              clsPrefix,
              key: tmNode.key,
              tmNode
            });
          }
        }) : h("div", {
          class: `${clsPrefix}-base-select-menu-option-wrapper`,
          style: {
            paddingTop: this.padding.top,
            paddingBottom: this.padding.bottom
          }
        }, this.flattenedNodes.map((tmNode) => tmNode.isGroup ? h(NSelectGroupHeader, {
          key: tmNode.key,
          clsPrefix,
          tmNode
        }) : h(NSelectOption, {
          clsPrefix,
          key: tmNode.key,
          tmNode
        })));
      }
    }) : h("div", {
      class: `${clsPrefix}-base-select-menu__empty`,
      "data-empty": true
    }, resolveSlot($slots.empty, () => {
      var _a;
      return [((_a = this.mergedRenderEmpty) === null || _a === void 0 ? void 0 : _a.call(this)) || h(NEmpty, {
        theme: mergedTheme.peers.Empty,
        themeOverrides: mergedTheme.peerOverrides.Empty,
        size: this.size
      })];
    })), resolveWrappedSlot($slots.action, (children) => children && [h("div", {
      class: `${clsPrefix}-base-select-menu__action`,
      "data-action": true,
      key: "action"
    }, children), h(FocusDetector, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
});
const oppositePlacement = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const arrowSize = "var(--n-arrow-height) * 1.414";
const style$b = c$1([cB("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM("scrollable", [cNotM("show-header-or-footer", "padding: var(--n-padding);")])]), cE("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cE("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cM("scrollable, show-header-or-footer", [cE("content", `
 padding: var(--n-padding);
 `)])]), cB("popover-shared", `
 transform-origin: inherit;
 `, [
  cB("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  c$1("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  c$1("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  c$1("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  c$1("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), placementStyle("top-start", `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `), placementStyle("top", `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("top-end", `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `), placementStyle("bottom-start", `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `), placementStyle("bottom", `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("bottom-end", `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `), placementStyle("left-start", `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `), placementStyle("left", `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("left-end", `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `), placementStyle("right-start", `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `), placementStyle("right", `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("right-end", `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `), ...map({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (placements, direction) => {
  const isVertical = ["right", "left"].includes(direction);
  const sizeType = isVertical ? "width" : "height";
  return placements.map((placement) => {
    const isReverse = placement.split("-")[1] === "end";
    const targetSize = `var(--v-target-${sizeType}, 0px)`;
    const centerOffset = `calc((${targetSize} - ${arrowSize}) / 2)`;
    const offset = getArrowOffset(placement);
    return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", [cM("center-arrow", [cB("popover-arrow", `${direction}: calc(max(${centerOffset}, ${offset}) ${isReverse ? "+" : "-"} var(--v-offset-${isVertical ? "left" : "top"}));`)])])]);
  });
})]);
function getArrowOffset(placement) {
  return ["top", "bottom"].includes(placement.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function placementStyle(placement, arrowStyleLiteral) {
  const position = placement.split("-")[0];
  const sizeStyle = ["top", "bottom"].includes(position) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", `
 margin-${oppositePlacement[position]}: var(--n-space);
 `, [cM("show-arrow", `
 margin-${oppositePlacement[position]}: var(--n-space-arrow);
 `), cM("overlap", `
 margin: 0;
 `), cCB("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [cB("popover-arrow", arrowStyleLiteral)])])]);
}
const popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // private
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  // deprecated
  minWidth: Number,
  maxWidth: Number
});
function renderArrow({
  arrowClass,
  arrowStyle,
  arrowWrapperClass,
  arrowWrapperStyle,
  clsPrefix
}) {
  return h("div", {
    key: "__popover-arrow__",
    style: arrowWrapperStyle,
    class: [`${clsPrefix}-popover-arrow-wrapper`, arrowWrapperClass]
  }, h("div", {
    class: [`${clsPrefix}-popover-arrow`, arrowClass],
    style: arrowStyle
  }));
}
const NPopoverBody = defineComponent({
  name: "PopoverBody",
  inheritAttrs: false,
  props: popoverBodyProps,
  setup(props, {
    slots,
    attrs
  }) {
    const {
      namespaceRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Popover", "-popover", style$b, popoverLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Popover", mergedRtlRef, mergedClsPrefixRef);
    const followerRef = ref(null);
    const NPopover2 = inject("NPopover");
    const bodyRef = ref(null);
    const followerEnabledRef = ref(props.show);
    const displayedRef = ref(false);
    watchEffect(() => {
      const {
        show
      } = props;
      if (show && !isJsdom() && !props.internalDeactivateImmediately) {
        displayedRef.value = true;
      }
    });
    const directivesRef = computed(() => {
      const {
        trigger,
        onClickoutside
      } = props;
      const directives = [];
      const {
        positionManuallyRef: {
          value: positionManually
        }
      } = NPopover2;
      if (!positionManually) {
        if (trigger === "click" && !onClickoutside) {
          directives.push([clickoutside, handleClickOutside, void 0, {
            capture: true
          }]);
        }
        if (trigger === "hover") {
          directives.push([mousemoveoutside, handleMouseMoveOutside]);
        }
      }
      if (onClickoutside) {
        directives.push([clickoutside, handleClickOutside, void 0, {
          capture: true
        }]);
      }
      if (props.displayDirective === "show" || props.animated && displayedRef.value) {
        directives.push([vShow, props.show]);
      }
      return directives;
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2,
          cubicBezierEaseIn,
          cubicBezierEaseOut
        },
        self: {
          space,
          spaceArrow,
          padding,
          fontSize,
          textColor,
          dividerColor,
          color,
          boxShadow,
          borderRadius,
          arrowHeight,
          arrowOffset,
          arrowOffsetVertical
        }
      } = themeRef.value;
      return {
        "--n-box-shadow": boxShadow,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-bezier-ease-in": cubicBezierEaseIn,
        "--n-bezier-ease-out": cubicBezierEaseOut,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-divider-color": dividerColor,
        "--n-border-radius": borderRadius,
        "--n-arrow-height": arrowHeight,
        "--n-arrow-offset": arrowOffset,
        "--n-arrow-offset-vertical": arrowOffsetVertical,
        "--n-padding": padding,
        "--n-space": space,
        "--n-space-arrow": spaceArrow
      };
    });
    const styleRef = computed(() => {
      const width = props.width === "trigger" ? void 0 : formatLength(props.width);
      const style2 = [];
      if (width) {
        style2.push({
          width
        });
      }
      const {
        maxWidth,
        minWidth
      } = props;
      if (maxWidth) {
        style2.push({
          maxWidth: formatLength(maxWidth)
        });
      }
      if (minWidth) {
        style2.push({
          maxWidth: formatLength(minWidth)
        });
      }
      if (!inlineThemeDisabled) {
        style2.push(cssVarsRef.value);
      }
      return style2;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("popover", void 0, cssVarsRef, props) : void 0;
    NPopover2.setBodyInstance({
      syncPosition
    });
    onBeforeUnmount(() => {
      NPopover2.setBodyInstance(null);
    });
    watch(toRef(props, "show"), (value) => {
      if (props.animated) return;
      if (value) {
        followerEnabledRef.value = true;
      } else {
        followerEnabledRef.value = false;
      }
    });
    function syncPosition() {
      var _a;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleMouseEnter(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover && props.show) {
        NPopover2.handleMouseEnter(e);
      }
    }
    function handleMouseLeave(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover) {
        NPopover2.handleMouseLeave(e);
      }
    }
    function handleMouseMoveOutside(e) {
      if (props.trigger === "hover" && !getTriggerElement().contains(getPreciseEventTarget(e))) {
        NPopover2.handleMouseMoveOutside(e);
      }
    }
    function handleClickOutside(e) {
      if (props.trigger === "click" && !getTriggerElement().contains(getPreciseEventTarget(e)) || props.onClickoutside) {
        NPopover2.handleClickOutside(e);
      }
    }
    function getTriggerElement() {
      return NPopover2.getTriggerElement();
    }
    provide(popoverBodyInjectionKey, bodyRef);
    provide(drawerBodyInjectionKey, null);
    provide(modalBodyInjectionKey, null);
    function renderContentNode() {
      themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
      const shouldRenderDom = props.displayDirective === "show" || props.show || props.animated && displayedRef.value;
      if (!shouldRenderDom) {
        return null;
      }
      let contentNode;
      const renderBody = NPopover2.internalRenderBodyRef.value;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      if (!renderBody) {
        const {
          value: extraClass
        } = NPopover2.extraClassRef;
        const {
          internalTrapFocus
        } = props;
        const hasHeaderOrFooter = !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
        const renderContentInnerNode = () => {
          var _a, _b;
          const body = hasHeaderOrFooter ? h(Fragment, null, resolveWrappedSlot(slots.header, (children) => {
            return children ? h("div", {
              class: [`${mergedClsPrefix}-popover__header`, props.headerClass],
              style: props.headerStyle
            }, children) : null;
          }), resolveWrappedSlot(slots.default, (children) => {
            return children ? h("div", {
              class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
              style: props.contentStyle
            }, slots) : null;
          }), resolveWrappedSlot(slots.footer, (children) => {
            return children ? h("div", {
              class: [`${mergedClsPrefix}-popover__footer`, props.footerClass],
              style: props.footerStyle
            }, children) : null;
          })) : props.scrollable ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : h("div", {
            class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
            style: props.contentStyle
          }, slots);
          const maybeScrollableBody = props.scrollable ? h(XScrollbar, {
            themeOverrides: themeRef.value.peerOverrides.Scrollbar,
            theme: themeRef.value.peers.Scrollbar,
            contentClass: hasHeaderOrFooter ? void 0 : `${mergedClsPrefix}-popover__content ${(_b = props.contentClass) !== null && _b !== void 0 ? _b : ""}`,
            contentStyle: hasHeaderOrFooter ? void 0 : props.contentStyle
          }, {
            default: () => body
          }) : body;
          const arrow = props.showArrow ? renderArrow({
            arrowClass: props.arrowClass,
            arrowStyle: props.arrowStyle,
            arrowWrapperClass: props.arrowWrapperClass,
            arrowWrapperStyle: props.arrowWrapperStyle,
            clsPrefix: mergedClsPrefix
          }) : null;
          return [maybeScrollableBody, arrow];
        };
        contentNode = h("div", mergeProps({
          class: [`${mergedClsPrefix}-popover`, `${mergedClsPrefix}-popover-shared`, (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value, extraClass.map((v) => `${mergedClsPrefix}-${v}`), {
            [`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
            [`${mergedClsPrefix}-popover--show-header-or-footer`]: hasHeaderOrFooter,
            [`${mergedClsPrefix}-popover--raw`]: props.raw,
            [`${mergedClsPrefix}-popover-shared--overlap`]: props.overlap,
            [`${mergedClsPrefix}-popover-shared--show-arrow`]: props.showArrow,
            [`${mergedClsPrefix}-popover-shared--center-arrow`]: props.arrowPointToCenter
          }],
          ref: bodyRef,
          style: styleRef.value,
          onKeydown: NPopover2.handleKeydown,
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }, attrs), internalTrapFocus ? h(FocusTrap, {
          active: props.show,
          autoFocus: true
        }, {
          default: renderContentInnerNode
        }) : renderContentInnerNode());
      } else {
        contentNode = renderBody(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${mergedClsPrefix}-popover-shared`, (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value, props.overlap && `${mergedClsPrefix}-popover-shared--overlap`, props.showArrow && `${mergedClsPrefix}-popover-shared--show-arrow`, props.arrowPointToCenter && `${mergedClsPrefix}-popover-shared--center-arrow`],
          bodyRef,
          styleRef.value,
          handleMouseEnter,
          handleMouseLeave
        );
      }
      return withDirectives(contentNode, directivesRef.value);
    }
    return {
      displayed: displayedRef,
      namespace: namespaceRef,
      isMounted: NPopover2.isMountedRef,
      zIndex: NPopover2.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    };
  },
  render() {
    return h(VFollower, {
      ref: "followerRef",
      zIndex: this.zIndex,
      show: this.show,
      enabled: this.followerEnabled,
      to: this.adjustedTo,
      x: this.x,
      y: this.y,
      flip: this.flip,
      placement: this.placement,
      containerClass: this.namespace,
      overlap: this.overlap,
      width: this.width === "trigger" ? "target" : void 0,
      teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
    }, {
      default: () => {
        return this.animated ? h(Transition, {
          name: "popover-transition",
          appear: this.isMounted,
          // Don't use watch to enable follower, since the transition may
          // make position sync timing very subtle and buggy.
          onEnter: () => {
            this.followerEnabled = true;
          },
          onAfterLeave: () => {
            var _a;
            (_a = this.internalOnAfterLeave) === null || _a === void 0 ? void 0 : _a.call(this);
            this.followerEnabled = false;
            this.displayed = false;
          }
        }, {
          default: this.renderContentNode
        }) : this.renderContentNode();
      }
    });
  }
});
const bodyPropKeys = Object.keys(popoverBodyProps);
const triggerEventMap = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function appendEvents(vNode, trigger, events) {
  triggerEventMap[trigger].forEach((eventName) => {
    if (!vNode.props) {
      vNode.props = {};
    } else {
      vNode.props = Object.assign({}, vNode.props);
    }
    const originalHandler = vNode.props[eventName];
    const handler = events[eventName];
    if (!originalHandler) {
      vNode.props[eventName] = handler;
    } else {
      vNode.props[eventName] = (...args) => {
        originalHandler(...args);
        handler(...args);
      };
    }
  });
}
const popoverBaseProps = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  flip: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  to: useAdjustedTo.propTo,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // events
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  // internal
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  // deprecated
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
};
const popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
});
const NPopover = defineComponent({
  name: "Popover",
  inheritAttrs: false,
  props: popoverProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const isMountedRef = isMounted();
    const binderInstRef = ref(null);
    const controlledShowRef = computed(() => props.show);
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowWithoutDisabledRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const mergedShowConsideringDisabledPropRef = useMemo(() => {
      if (props.disabled) return false;
      return mergedShowWithoutDisabledRef.value;
    });
    const getMergedDisabled = () => {
      if (props.disabled) return true;
      const {
        getDisabled
      } = props;
      if (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled()) return true;
      return false;
    };
    const getMergedShow = () => {
      if (getMergedDisabled()) return false;
      return mergedShowWithoutDisabledRef.value;
    };
    const compatibleShowArrowRef = useCompitable(props, ["arrow", "showArrow"]);
    const mergedShowArrowRef = computed(() => {
      if (props.overlap) return false;
      return compatibleShowArrowRef.value;
    });
    let bodyInstance = null;
    const showTimerIdRef = ref(null);
    const hideTimerIdRef = ref(null);
    const positionManuallyRef = useMemo(() => {
      return props.x !== void 0 && props.y !== void 0;
    });
    function doUpdateShow(value) {
      const {
        "onUpdate:show": _onUpdateShow,
        onUpdateShow,
        onShow,
        onHide
      } = props;
      uncontrolledShowRef.value = value;
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (value && onShow) {
        call(onShow, true);
      }
      if (value && onHide) {
        call(onHide, false);
      }
    }
    function syncPosition() {
      if (bodyInstance) {
        bodyInstance.syncPosition();
      }
    }
    function clearShowTimer() {
      const {
        value: showTimerId
      } = showTimerIdRef;
      if (showTimerId) {
        window.clearTimeout(showTimerId);
        showTimerIdRef.value = null;
      }
    }
    function clearHideTimer() {
      const {
        value: hideTimerId
      } = hideTimerIdRef;
      if (hideTimerId) {
        window.clearTimeout(hideTimerId);
        hideTimerIdRef.value = null;
      }
    }
    function handleFocus() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (getMergedShow()) return;
        doUpdateShow(true);
      }
    }
    function handleBlur() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (!getMergedShow()) return;
        doUpdateShow(false);
      }
    }
    function handleMouseEnter() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearHideTimer();
        if (showTimerIdRef.value !== null) return;
        if (getMergedShow()) return;
        const delayCallback = () => {
          doUpdateShow(true);
          showTimerIdRef.value = null;
        };
        const {
          delay
        } = props;
        if (delay === 0) {
          delayCallback();
        } else {
          showTimerIdRef.value = window.setTimeout(delayCallback, delay);
        }
      }
    }
    function handleMouseLeave() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearShowTimer();
        if (hideTimerIdRef.value !== null) return;
        if (!getMergedShow()) return;
        const delayedCallback = () => {
          doUpdateShow(false);
          hideTimerIdRef.value = null;
        };
        const {
          duration
        } = props;
        if (duration === 0) {
          delayedCallback();
        } else {
          hideTimerIdRef.value = window.setTimeout(delayedCallback, duration);
        }
      }
    }
    function handleMouseMoveOutside() {
      handleMouseLeave();
    }
    function handleClickOutside(e) {
      var _a;
      if (!getMergedShow()) return;
      if (props.trigger === "click") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
      (_a = props.onClickoutside) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleClick() {
      if (props.trigger === "click" && !getMergedDisabled()) {
        clearShowTimer();
        clearHideTimer();
        const nextShow = !getMergedShow();
        doUpdateShow(nextShow);
      }
    }
    function handleKeydown(e) {
      if (!props.internalTrapFocus) return;
      if (e.key === "Escape") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
    }
    function setShow(value) {
      uncontrolledShowRef.value = value;
    }
    function getTriggerElement() {
      var _a;
      return (_a = binderInstRef.value) === null || _a === void 0 ? void 0 : _a.targetRef;
    }
    function setBodyInstance(value) {
      bodyInstance = value;
    }
    provide("NPopover", {
      getTriggerElement,
      handleKeydown,
      handleMouseEnter,
      handleMouseLeave,
      handleClickOutside,
      handleMouseMoveOutside,
      setBodyInstance,
      positionManuallyRef,
      isMountedRef,
      zIndexRef: toRef(props, "zIndex"),
      extraClassRef: toRef(props, "internalExtraClass"),
      internalRenderBodyRef: toRef(props, "internalRenderBody")
    });
    watchEffect(() => {
      if (mergedShowWithoutDisabledRef.value && getMergedDisabled()) {
        doUpdateShow(false);
      }
    });
    const returned = {
      binderInstRef,
      positionManually: positionManuallyRef,
      mergedShowConsideringDisabledProp: mergedShowConsideringDisabledPropRef,
      // if to show popover body
      uncontrolledShow: uncontrolledShowRef,
      mergedShowArrow: mergedShowArrowRef,
      getMergedShow,
      setShow,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleFocus,
      handleBlur,
      syncPosition
    };
    return returned;
  },
  render() {
    var _a;
    const {
      positionManually,
      $slots: slots
    } = this;
    let triggerVNode;
    let popoverInside = false;
    if (!positionManually) {
      triggerVNode = getFirstSlotVNode(slots, "trigger");
      if (triggerVNode) {
        triggerVNode = cloneVNode(triggerVNode);
        triggerVNode = triggerVNode.type === Text ? h("span", [triggerVNode]) : triggerVNode;
        const handlers = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        };
        if ((_a = triggerVNode.type) === null || _a === void 0 ? void 0 : _a.__popover__) {
          popoverInside = true;
          if (!triggerVNode.props) {
            triggerVNode.props = {
              internalSyncTargetWithParent: true,
              internalInheritedEventHandlers: []
            };
          }
          triggerVNode.props.internalSyncTargetWithParent = true;
          if (!triggerVNode.props.internalInheritedEventHandlers) {
            triggerVNode.props.internalInheritedEventHandlers = [handlers];
          } else {
            triggerVNode.props.internalInheritedEventHandlers = [handlers, ...triggerVNode.props.internalInheritedEventHandlers];
          }
        } else {
          const {
            internalInheritedEventHandlers
          } = this;
          const ascendantAndCurrentHandlers = [handlers, ...internalInheritedEventHandlers];
          const mergedHandlers = {
            onBlur: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onBlur(e);
              });
            },
            onFocus: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onFocus(e);
              });
            },
            onClick: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onClick(e);
              });
            },
            onMouseenter: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseenter(e);
              });
            },
            onMouseleave: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseleave(e);
              });
            }
          };
          appendEvents(triggerVNode, internalInheritedEventHandlers ? "nested" : positionManually ? "manual" : this.trigger, mergedHandlers);
        }
      }
    }
    return h(Binder, {
      ref: "binderInstRef",
      syncTarget: !popoverInside,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        void this.mergedShowConsideringDisabledProp;
        const mergedShow = this.getMergedShow();
        return [this.internalTrapFocus && mergedShow ? withDirectives(h("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[zindexable, {
          enabled: mergedShow,
          zIndex: this.zIndex
        }]]) : null, positionManually ? null : h(VTarget, null, {
          default: () => triggerVNode
        }), h(NPopoverBody, keep(this.$props, bodyPropKeys, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: mergedShow
        })), {
          default: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a2);
          },
          header: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2);
          },
          footer: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).footer) === null || _b === void 0 ? void 0 : _b.call(_a2);
          }
        })];
      }
    });
  }
});
function self$2(vars) {
  const {
    textColor2,
    primaryColorHover,
    primaryColorPressed,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    baseColor,
    borderColor,
    opacityDisabled,
    tagColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderRadiusSmall: borderRadius,
    fontSizeMini,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    heightMini,
    heightTiny,
    heightSmall,
    heightMedium,
    closeColorHover,
    closeColorPressed,
    buttonColor2Hover,
    buttonColor2Pressed,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    closeBorderRadius: borderRadius,
    heightTiny: heightMini,
    heightSmall: heightTiny,
    heightMedium: heightSmall,
    heightLarge: heightMedium,
    borderRadius,
    opacityDisabled,
    fontSizeTiny: fontSizeMini,
    fontSizeSmall: fontSizeTiny,
    fontSizeMedium: fontSizeSmall,
    fontSizeLarge: fontSizeMedium,
    fontWeightStrong,
    // checked
    textColorCheckable: textColor2,
    textColorHoverCheckable: textColor2,
    textColorPressedCheckable: textColor2,
    textColorChecked: baseColor,
    colorCheckable: "#0000",
    colorHoverCheckable: buttonColor2Hover,
    colorPressedCheckable: buttonColor2Pressed,
    colorChecked: primaryColor,
    colorCheckedHover: primaryColorHover,
    colorCheckedPressed: primaryColorPressed,
    // default
    border: `1px solid ${borderColor}`,
    textColor: textColor2,
    color: tagColor,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    borderPrimary: `1px solid ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    textColorPrimary: primaryColor,
    colorPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    colorBorderedPrimary: changeColor(primaryColor, {
      alpha: 0.1
    }),
    closeIconColorPrimary: primaryColor,
    closeIconColorHoverPrimary: primaryColor,
    closeIconColorPressedPrimary: primaryColor,
    closeColorHoverPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: changeColor(primaryColor, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${changeColor(infoColor, {
      alpha: 0.3
    })}`,
    textColorInfo: infoColor,
    colorInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    colorBorderedInfo: changeColor(infoColor, {
      alpha: 0.1
    }),
    closeIconColorInfo: infoColor,
    closeIconColorHoverInfo: infoColor,
    closeIconColorPressedInfo: infoColor,
    closeColorHoverInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    closeColorPressedInfo: changeColor(infoColor, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${changeColor(successColor, {
      alpha: 0.3
    })}`,
    textColorSuccess: successColor,
    colorSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    colorBorderedSuccess: changeColor(successColor, {
      alpha: 0.1
    }),
    closeIconColorSuccess: successColor,
    closeIconColorHoverSuccess: successColor,
    closeIconColorPressedSuccess: successColor,
    closeColorHoverSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: changeColor(successColor, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${changeColor(warningColor, {
      alpha: 0.35
    })}`,
    textColorWarning: warningColor,
    colorWarning: changeColor(warningColor, {
      alpha: 0.15
    }),
    colorBorderedWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeIconColorWarning: warningColor,
    closeIconColorHoverWarning: warningColor,
    closeIconColorPressedWarning: warningColor,
    closeColorHoverWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeColorPressedWarning: changeColor(warningColor, {
      alpha: 0.18
    }),
    borderError: `1px solid ${changeColor(errorColor, {
      alpha: 0.23
    })}`,
    textColorError: errorColor,
    colorError: changeColor(errorColor, {
      alpha: 0.1
    }),
    colorBorderedError: changeColor(errorColor, {
      alpha: 0.08
    }),
    closeIconColorError: errorColor,
    closeIconColorHoverError: errorColor,
    closeIconColorPressedError: errorColor,
    closeColorHoverError: changeColor(errorColor, {
      alpha: 0.12
    }),
    closeColorPressedError: changeColor(errorColor, {
      alpha: 0.18
    })
  });
}
const tagLight = {
  common: derived,
  self: self$2
};
const commonProps = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: String,
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
};
const style$a = cB("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cE("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), cE("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), cE("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cM("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [cE("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), cE("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), cM("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), cM("icon, avatar", [cM("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), cM("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), cM("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-hover-checkable);", [cNotM("checked", "color: var(--n-text-color-hover-checkable);")]), c$1("&:active", "background-color: var(--n-color-pressed-checkable);", [cNotM("checked", "color: var(--n-text-color-pressed-checkable);")])]), cM("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-checked-hover);"), c$1("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
const tagProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: true
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: true
  },
  // deprecated
  onCheckedChange: Function
});
const tagInjectionKey = createInjectionKey("n-tag");
const NTag = defineComponent({
  name: "Tag",
  props: tagProps,
  slots: Object,
  setup(props) {
    const contentRef = ref(null);
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef,
      mergedComponentPropsRef
    } = useConfig(props);
    const mergedSizeRef = computed(() => {
      var _a, _b;
      return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Tag) === null || _b === void 0 ? void 0 : _b.size) || "medium";
    });
    const themeRef = useTheme("Tag", "-tag", style$a, tagLight, props, mergedClsPrefixRef);
    provide(tagInjectionKey, {
      roundRef: toRef(props, "round")
    });
    function handleClick() {
      if (!props.disabled) {
        if (props.checkable) {
          const {
            checked,
            onCheckedChange,
            onUpdateChecked,
            "onUpdate:checked": _onUpdateChecked
          } = props;
          if (onUpdateChecked) onUpdateChecked(!checked);
          if (_onUpdateChecked) _onUpdateChecked(!checked);
          if (onCheckedChange) onCheckedChange(!checked);
        }
      }
    }
    function handleCloseClick(e) {
      if (!props.triggerClickOnClose) {
        e.stopPropagation();
      }
      if (!props.disabled) {
        const {
          onClose
        } = props;
        if (onClose) call(onClose, e);
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const {
          value
        } = contentRef;
        if (value) value.textContent = textContent;
      }
    };
    const rtlEnabledRef = useRtl("Tag", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type: type4,
        color: {
          color,
          textColor
        } = {}
      } = props;
      const size = mergedSizeRef.value;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          padding,
          closeMargin,
          borderRadius,
          opacityDisabled,
          textColorCheckable,
          textColorHoverCheckable,
          textColorPressedCheckable,
          textColorChecked,
          colorCheckable,
          colorHoverCheckable,
          colorPressedCheckable,
          colorChecked,
          colorCheckedHover,
          colorCheckedPressed,
          closeBorderRadius,
          fontWeightStrong,
          [createKey("colorBordered", type4)]: colorBordered,
          [createKey("closeSize", size)]: closeSize,
          [createKey("closeIconSize", size)]: closeIconSize,
          [createKey("fontSize", size)]: fontSize,
          [createKey("height", size)]: height,
          [createKey("color", type4)]: typedColor,
          [createKey("textColor", type4)]: typeTextColor,
          [createKey("border", type4)]: border,
          [createKey("closeIconColor", type4)]: closeIconColor,
          [createKey("closeIconColorHover", type4)]: closeIconColorHover,
          [createKey("closeIconColorPressed", type4)]: closeIconColorPressed,
          [createKey("closeColorHover", type4)]: closeColorHover,
          [createKey("closeColorPressed", type4)]: closeColorPressed
        }
      } = themeRef.value;
      const closeMarginDiscrete = getMargin(closeMargin);
      return {
        "--n-font-weight-strong": fontWeightStrong,
        "--n-avatar-size-override": `calc(${height} - 8px)`,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-icon-color-disabled": closeIconColor,
        "--n-close-margin-top": closeMarginDiscrete.top,
        "--n-close-margin-right": closeMarginDiscrete.right,
        "--n-close-margin-bottom": closeMarginDiscrete.bottom,
        "--n-close-margin-left": closeMarginDiscrete.left,
        "--n-close-size": closeSize,
        "--n-color": color || (mergedBorderedRef.value ? colorBordered : typedColor),
        "--n-color-checkable": colorCheckable,
        "--n-color-checked": colorChecked,
        "--n-color-checked-hover": colorCheckedHover,
        "--n-color-checked-pressed": colorCheckedPressed,
        "--n-color-hover-checkable": colorHoverCheckable,
        "--n-color-pressed-checkable": colorPressedCheckable,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-opacity-disabled": opacityDisabled,
        "--n-padding": padding,
        "--n-text-color": textColor || typeTextColor,
        "--n-text-color-checkable": textColorCheckable,
        "--n-text-color-checked": textColorChecked,
        "--n-text-color-hover-checkable": textColorHoverCheckable,
        "--n-text-color-pressed-checkable": textColorPressedCheckable
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tag", computed(() => {
      let hash = "";
      const {
        type: type4,
        color: {
          color,
          textColor
        } = {}
      } = props;
      hash += type4[0];
      hash += mergedSizeRef.value[0];
      if (color) {
        hash += `a${color2Class(color)}`;
      }
      if (textColor) {
        hash += `b${color2Class(textColor)}`;
      }
      if (mergedBorderedRef.value) {
        hash += "c";
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      rtlEnabled,
      closable,
      color: {
        borderColor
      } = {},
      round,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const avatarNode = resolveWrappedSlot($slots.avatar, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tag__avatar`
    }, children));
    const iconNode = resolveWrappedSlot($slots.icon, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tag__icon`
    }, children));
    return h("div", {
      class: [`${mergedClsPrefix}-tag`, this.themeClass, {
        [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
        [`${mergedClsPrefix}-tag--strong`]: this.strong,
        [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
        [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
        [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
        [`${mergedClsPrefix}-tag--round`]: round,
        [`${mergedClsPrefix}-tag--avatar`]: avatarNode,
        [`${mergedClsPrefix}-tag--icon`]: iconNode,
        [`${mergedClsPrefix}-tag--closable`]: closable
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, iconNode || avatarNode, h("span", {
      class: `${mergedClsPrefix}-tag__content`,
      ref: "contentRef"
    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)), !this.checkable && closable ? h(NBaseClose, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: true
    }) : null, !this.checkable && this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-tag__border`,
      style: {
        borderColor
      }
    }) : null);
  }
});
const NBaseSuffix = defineComponent({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        clsPrefix
      } = props;
      return h(NBaseLoading, {
        clsPrefix,
        class: `${clsPrefix}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: props.loading
      }, {
        default: () => props.showArrow ? h(NBaseClear, {
          clsPrefix,
          show: props.showClear,
          onClear: props.onClear
        }, {
          placeholder: () => h(NBaseIcon, {
            clsPrefix,
            class: `${clsPrefix}-base-suffix__arrow`
          }, {
            default: () => resolveSlot(slots.default, () => [h(ChevronDownIcon, null)])
          })
        }) : null
      });
    };
  }
});
const style$9 = c$1([cB("base-selection", `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB("base-loading", `
 color: var(--n-loading-color);
 `), cB("base-selection-tags", "min-height: var(--n-height);"), cE("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE("state-border", `
 z-index: 1;
 border-color: #0000;
 `), cB("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [cE("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), cB("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE("render-label", `
 color: var(--n-text-color);
 `)]), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB("base-selection-label", "background-color: var(--n-color-active);"), cB("base-selection-tags", "background-color: var(--n-color-active);")])]), cM("disabled", "cursor: not-allowed;", [cE("arrow", `
 color: var(--n-arrow-color-disabled);
 `), cB("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE("render-label", `
 color: var(--n-text-color-disabled);
 `)]), cB("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((status) => cM(`${status}-status`, [cE("state-border", `border: var(--n-border-${status});`), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), cB("base-selection-label", `background-color: var(--n-color-active-${status});`), cB("base-selection-tags", `background-color: var(--n-color-active-${status});`)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), cB("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1("&:last-child", "padding-right: 0;"), cB("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [cE("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);
const NInternalSelection = defineComponent({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    active: Boolean,
    pattern: {
      type: String,
      default: ""
    },
    placeholder: String,
    selectedOption: {
      type: Object,
      default: null
    },
    selectedOptions: {
      type: Array,
      default: null
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    multiple: Boolean,
    filterable: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    loading: Boolean,
    autofocus: Boolean,
    showArrow: {
      type: Boolean,
      default: true
    },
    inputProps: Object,
    focused: Boolean,
    renderTag: Function,
    onKeydown: Function,
    onClick: Function,
    onBlur: Function,
    onFocus: Function,
    onDeleteOption: Function,
    maxTagCount: [String, Number],
    ellipsisTagPopoverProps: Object,
    onClear: Function,
    onPatternInput: Function,
    onPatternFocus: Function,
    onPatternBlur: Function,
    renderLabel: Function,
    status: String,
    inlineThemeDisabled: Boolean,
    ignoreComposition: {
      type: Boolean,
      default: true
    },
    onResize: Function
  }),
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl("InternalSelection", mergedRtlRef, mergedClsPrefixRef);
    const patternInputMirrorRef = ref(null);
    const patternInputRef = ref(null);
    const selfRef = ref(null);
    const multipleElRef = ref(null);
    const singleElRef = ref(null);
    const patternInputWrapperRef = ref(null);
    const counterRef = ref(null);
    const counterWrapperRef = ref(null);
    const overflowRef = ref(null);
    const inputTagElRef = ref(null);
    const showTagsPopoverRef = ref(false);
    const patternInputFocusedRef = ref(false);
    const hoverRef = ref(false);
    const themeRef = useTheme("InternalSelection", "-internal-selection", style$9, internalSelectionLight, props, toRef(props, "clsPrefix"));
    const mergedClearableRef = computed(() => {
      return props.clearable && !props.disabled && (hoverRef.value || props.active);
    });
    const filterablePlaceholderRef = computed(() => {
      return props.selectedOption ? props.renderTag ? props.renderTag({
        option: props.selectedOption,
        handleClose: () => {
        }
      }) : props.renderLabel ? props.renderLabel(props.selectedOption, true) : render(props.selectedOption[props.labelField], props.selectedOption, true) : props.placeholder;
    });
    const labelRef = computed(() => {
      const option = props.selectedOption;
      if (!option) return void 0;
      return option[props.labelField];
    });
    const selectedRef = computed(() => {
      if (props.multiple) {
        return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
      } else {
        return props.selectedOption !== null;
      }
    });
    function syncMirrorWidth() {
      var _a;
      const {
        value: patternInputMirrorEl
      } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const {
          value: patternInputEl
        } = patternInputRef;
        if (patternInputEl) {
          patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
          if (props.maxTagCount !== "responsive") {
            (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync({
              showAllItemsBeforeCalculate: false
            });
          }
        }
      }
    }
    function hideInputTag() {
      const {
        value: inputTagEl
      } = inputTagElRef;
      if (inputTagEl) inputTagEl.style.display = "none";
    }
    function showInputTag() {
      const {
        value: inputTagEl
      } = inputTagElRef;
      if (inputTagEl) inputTagEl.style.display = "inline-block";
    }
    watch(toRef(props, "active"), (value) => {
      if (!value) hideInputTag();
    });
    watch(toRef(props, "pattern"), () => {
      if (props.multiple) {
        void nextTick(syncMirrorWidth);
      }
    });
    function doFocus(e) {
      const {
        onFocus
      } = props;
      if (onFocus) onFocus(e);
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      if (onBlur) onBlur(e);
    }
    function doDeleteOption(value) {
      const {
        onDeleteOption
      } = props;
      if (onDeleteOption) onDeleteOption(value);
    }
    function doClear(e) {
      const {
        onClear
      } = props;
      if (onClear) onClear(e);
    }
    function doPatternInput(value) {
      const {
        onPatternInput
      } = props;
      if (onPatternInput) onPatternInput(value);
    }
    function handleFocusin(e) {
      var _a;
      if (!e.relatedTarget || !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        doFocus(e);
      }
    }
    function handleFocusout(e) {
      var _a;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) return;
      doBlur(e);
    }
    function handleClear(e) {
      doClear(e);
    }
    function handleMouseEnter() {
      hoverRef.value = true;
    }
    function handleMouseLeave() {
      hoverRef.value = false;
    }
    function handleMouseDown(e) {
      if (!props.active || !props.filterable) return;
      if (e.target === patternInputRef.value) return;
      e.preventDefault();
    }
    function handleDeleteOption(option) {
      doDeleteOption(option);
    }
    const isComposingRef = ref(false);
    function handlePatternKeyDown(e) {
      if (e.key === "Backspace" && !isComposingRef.value) {
        if (!props.pattern.length) {
          const {
            selectedOptions
          } = props;
          if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
            handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
          }
        }
      }
    }
    let cachedInputEvent = null;
    function handlePatternInputInput(e) {
      const {
        value: patternInputMirrorEl
      } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const inputText = e.target.value;
        patternInputMirrorEl.textContent = inputText;
        syncMirrorWidth();
      }
      if (props.ignoreComposition) {
        if (!isComposingRef.value) {
          doPatternInput(e);
        } else {
          cachedInputEvent = e;
        }
      } else {
        doPatternInput(e);
      }
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd() {
      isComposingRef.value = false;
      if (props.ignoreComposition) {
        doPatternInput(cachedInputEvent);
      }
      cachedInputEvent = null;
    }
    function handlePatternInputFocus(e) {
      var _a;
      patternInputFocusedRef.value = true;
      (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handlePatternInputBlur(e) {
      var _a;
      patternInputFocusedRef.value = false;
      (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function blur() {
      var _a, _b;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
      } else if (props.multiple) {
        const {
          value: multipleEl
        } = multipleElRef;
        multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
      } else {
        const {
          value: singleEl
        } = singleElRef;
        singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
      }
    }
    function focus() {
      var _a, _b, _c;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else if (props.multiple) {
        (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
      } else {
        (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function focusInput() {
      const {
        value: patternInputEl
      } = patternInputRef;
      if (patternInputEl) {
        showInputTag();
        patternInputEl.focus();
      }
    }
    function blurInput() {
      const {
        value: patternInputEl
      } = patternInputRef;
      if (patternInputEl) {
        patternInputEl.blur();
      }
    }
    function updateCounter(count) {
      const {
        value
      } = counterRef;
      if (value) {
        value.setTextContent(`+${count}`);
      }
    }
    function getCounter() {
      const {
        value
      } = counterWrapperRef;
      return value;
    }
    function getTail() {
      return patternInputRef.value;
    }
    let enterTimerId = null;
    function clearEnterTimer() {
      if (enterTimerId !== null) window.clearTimeout(enterTimerId);
    }
    function handleMouseEnterCounter() {
      if (props.active) return;
      clearEnterTimer();
      enterTimerId = window.setTimeout(() => {
        if (selectedRef.value) {
          showTagsPopoverRef.value = true;
        }
      }, 100);
    }
    function handleMouseLeaveCounter() {
      clearEnterTimer();
    }
    function onPopoverUpdateShow(show) {
      if (!show) {
        clearEnterTimer();
        showTagsPopoverRef.value = false;
      }
    }
    watch(selectedRef, (value) => {
      if (!value) {
        showTagsPopoverRef.value = false;
      }
    });
    onMounted(() => {
      watchEffect(() => {
        const patternInputWrapperEl = patternInputWrapperRef.value;
        if (!patternInputWrapperEl) return;
        if (props.disabled) {
          patternInputWrapperEl.removeAttribute("tabindex");
        } else {
          patternInputWrapperEl.tabIndex = patternInputFocusedRef.value ? -1 : 0;
        }
      });
    });
    useOnResize(selfRef, props.onResize);
    const {
      inlineThemeDisabled
    } = props;
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          fontWeight,
          borderRadius,
          color,
          placeholderColor,
          textColor,
          paddingSingle,
          paddingMultiple,
          caretColor,
          colorDisabled,
          textColorDisabled,
          placeholderColorDisabled,
          colorActive,
          boxShadowFocus,
          boxShadowActive,
          boxShadowHover,
          border,
          borderFocus,
          borderHover,
          borderActive,
          arrowColor,
          arrowColorDisabled,
          loadingColor,
          // form warning
          colorActiveWarning,
          boxShadowFocusWarning,
          boxShadowActiveWarning,
          boxShadowHoverWarning,
          borderWarning,
          borderFocusWarning,
          borderHoverWarning,
          borderActiveWarning,
          // form error
          colorActiveError,
          boxShadowFocusError,
          boxShadowActiveError,
          boxShadowHoverError,
          borderError,
          borderFocusError,
          borderHoverError,
          borderActiveError,
          // clear
          clearColor,
          clearColorHover,
          clearColorPressed,
          clearSize,
          // arrow
          arrowSize: arrowSize2,
          [createKey("height", size)]: height,
          [createKey("fontSize", size)]: fontSize
        }
      } = themeRef.value;
      const paddingSingleDiscrete = getMargin(paddingSingle);
      const paddingMultipleDiscrete = getMargin(paddingMultiple);
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-border": border,
        "--n-border-active": borderActive,
        "--n-border-focus": borderFocus,
        "--n-border-hover": borderHover,
        "--n-border-radius": borderRadius,
        "--n-box-shadow-active": boxShadowActive,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-box-shadow-hover": boxShadowHover,
        "--n-caret-color": caretColor,
        "--n-color": color,
        "--n-color-active": colorActive,
        "--n-color-disabled": colorDisabled,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-padding-single-top": paddingSingleDiscrete.top,
        "--n-padding-multiple-top": paddingMultipleDiscrete.top,
        "--n-padding-single-right": paddingSingleDiscrete.right,
        "--n-padding-multiple-right": paddingMultipleDiscrete.right,
        "--n-padding-single-left": paddingSingleDiscrete.left,
        "--n-padding-multiple-left": paddingMultipleDiscrete.left,
        "--n-padding-single-bottom": paddingSingleDiscrete.bottom,
        "--n-padding-multiple-bottom": paddingMultipleDiscrete.bottom,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-text-color": textColor,
        "--n-text-color-disabled": textColorDisabled,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-color-active-warning": colorActiveWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-box-shadow-active-warning": boxShadowActiveWarning,
        "--n-box-shadow-hover-warning": boxShadowHoverWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-border-active-warning": borderActiveWarning,
        // form error
        "--n-color-active-error": colorActiveError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-box-shadow-active-error": boxShadowActiveError,
        "--n-box-shadow-hover-error": boxShadowHoverError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-border-active-error": borderActiveError,
        // clear
        "--n-clear-size": clearSize,
        "--n-clear-color": clearColor,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        // arrow-size
        "--n-arrow-size": arrowSize2,
        // font-weight
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-selection", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      mergedTheme: themeRef,
      mergedClearable: mergedClearableRef,
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      patternInputFocused: patternInputFocusedRef,
      filterablePlaceholder: filterablePlaceholderRef,
      label: labelRef,
      selected: selectedRef,
      showTagsPanel: showTagsPopoverRef,
      isComposing: isComposingRef,
      // dom ref
      counterRef,
      counterWrapperRef,
      patternInputMirrorRef,
      patternInputRef,
      selfRef,
      multipleElRef,
      singleElRef,
      patternInputWrapperRef,
      overflowRef,
      inputTagElRef,
      handleMouseDown,
      handleFocusin,
      handleClear,
      handleMouseEnter,
      handleMouseLeave,
      handleDeleteOption,
      handlePatternKeyDown,
      handlePatternInputInput,
      handlePatternInputBlur,
      handlePatternInputFocus,
      handleMouseEnterCounter,
      handleMouseLeaveCounter,
      handleFocusout,
      handleCompositionEnd,
      handleCompositionStart,
      onPopoverUpdateShow,
      focus,
      focusInput,
      blur,
      blurInput,
      updateCounter,
      getCounter,
      getTail,
      renderLabel: props.renderLabel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      status,
      multiple,
      size,
      disabled,
      filterable,
      maxTagCount,
      bordered,
      clsPrefix,
      ellipsisTagPopoverProps,
      onRender,
      renderTag,
      renderLabel
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const maxTagCountResponsive = maxTagCount === "responsive";
    const maxTagCountNumeric = typeof maxTagCount === "number";
    const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
    const suffix = h(Wrapper, null, {
      default: () => h(NBaseSuffix, {
        clsPrefix,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var _a, _b;
          return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      })
    });
    let body;
    if (multiple) {
      const {
        labelField
      } = this;
      const createTag = (option) => h("div", {
        class: `${clsPrefix}-base-selection-tag-wrapper`,
        key: option.value
      }, renderTag ? renderTag({
        option,
        handleClose: () => {
          this.handleDeleteOption(option);
        }
      }) : h(NTag, {
        size,
        closable: !option.disabled,
        disabled,
        onClose: () => {
          this.handleDeleteOption(option);
        },
        internalCloseIsButtonTag: false,
        internalCloseFocusable: false
      }, {
        default: () => renderLabel ? renderLabel(option, true) : render(option[labelField], option, true)
      }));
      const createOriginalTagNodes = () => (maxTagCountNumeric ? this.selectedOptions.slice(0, maxTagCount) : this.selectedOptions).map(createTag);
      const input = filterable ? h("div", {
        class: `${clsPrefix}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, h("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${clsPrefix}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), h("span", {
        ref: "patternInputMirrorRef",
        class: `${clsPrefix}-base-selection-input-tag__mirror`
      }, this.pattern)) : null;
      const renderCounter = maxTagCountResponsive ? () => h("div", {
        class: `${clsPrefix}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, h(NTag, {
        size,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled
      })) : void 0;
      let counter;
      if (maxTagCountNumeric) {
        const rest = this.selectedOptions.length - maxTagCount;
        if (rest > 0) {
          counter = h("div", {
            class: `${clsPrefix}-base-selection-tag-wrapper`,
            key: "__counter__"
          }, h(NTag, {
            size,
            ref: "counterRef",
            onMouseenter: this.handleMouseEnterCounter,
            disabled
          }, {
            default: () => `+${rest}`
          }));
        }
      }
      const tags = maxTagCountResponsive ? filterable ? h(VOverflow, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        getTail: this.getTail,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: createOriginalTagNodes,
        counter: renderCounter,
        tail: () => input
      }) : h(VOverflow, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: createOriginalTagNodes,
        counter: renderCounter
      }) : maxTagCountNumeric && counter ? createOriginalTagNodes().concat(counter) : createOriginalTagNodes();
      const renderPopover = useMaxTagCount ? () => h("div", {
        class: `${clsPrefix}-base-selection-popover`
      }, maxTagCountResponsive ? createOriginalTagNodes() : this.selectedOptions.map(createTag)) : void 0;
      const popoverProps2 = useMaxTagCount ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: true,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, ellipsisTagPopoverProps) : null;
      const showPlaceholder = this.selected ? false : this.active ? !this.pattern && !this.isComposing : true;
      const placeholder = showPlaceholder ? h("div", {
        class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`
      }, h("div", {
        class: `${clsPrefix}-base-selection-placeholder__inner`
      }, this.placeholder)) : null;
      const popoverTrigger = filterable ? h("div", {
        ref: "patternInputWrapperRef",
        class: `${clsPrefix}-base-selection-tags`
      }, tags, maxTagCountResponsive ? null : input, suffix) : h("div", {
        ref: "multipleElRef",
        class: `${clsPrefix}-base-selection-tags`,
        tabindex: disabled ? void 0 : 0
      }, tags, suffix);
      body = h(Fragment, null, useMaxTagCount ? h(NPopover, Object.assign({}, popoverProps2, {
        scrollable: true,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => popoverTrigger,
        default: renderPopover
      }) : popoverTrigger, placeholder);
    } else {
      if (filterable) {
        const hasInput = this.pattern || this.isComposing;
        const showPlaceholder = this.active ? !hasInput : !this.selected;
        const showSelectedLabel = this.active ? false : this.selected;
        body = h("div", {
          ref: "patternInputWrapperRef",
          class: `${clsPrefix}-base-selection-label`,
          title: this.patternInputFocused ? void 0 : getTitleAttribute(this.label)
        }, h("input", Object.assign({}, this.inputProps, {
          ref: "patternInputRef",
          class: `${clsPrefix}-base-selection-input`,
          value: this.active ? this.pattern : "",
          placeholder: "",
          readonly: disabled,
          disabled,
          tabindex: -1,
          autofocus: this.autofocus,
          onFocus: this.handlePatternInputFocus,
          onBlur: this.handlePatternInputBlur,
          onInput: this.handlePatternInputInput,
          onCompositionstart: this.handleCompositionStart,
          onCompositionend: this.handleCompositionEnd
        })), showSelectedLabel ? h("div", {
          class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`,
          key: "input"
        }, h("div", {
          class: `${clsPrefix}-base-selection-overlay__wrapper`
        }, renderTag ? renderTag({
          option: this.selectedOption,
          handleClose: () => {
          }
        }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : null, showPlaceholder ? h("div", {
          class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
          key: "placeholder"
        }, h("div", {
          class: `${clsPrefix}-base-selection-overlay__wrapper`
        }, this.filterablePlaceholder)) : null, suffix);
      } else {
        body = h("div", {
          ref: "singleElRef",
          class: `${clsPrefix}-base-selection-label`,
          tabindex: this.disabled ? void 0 : 0
        }, this.label !== void 0 ? h("div", {
          class: `${clsPrefix}-base-selection-input`,
          title: getTitleAttribute(this.label),
          key: "input"
        }, h("div", {
          class: `${clsPrefix}-base-selection-input__content`
        }, renderTag ? renderTag({
          option: this.selectedOption,
          handleClose: () => {
          }
        }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : h("div", {
          class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
          key: "placeholder"
        }, h("div", {
          class: `${clsPrefix}-base-selection-placeholder__inner`
        }, this.placeholder)), suffix);
      }
    }
    return h("div", {
      ref: "selfRef",
      class: [`${clsPrefix}-base-selection`, this.rtlEnabled && `${clsPrefix}-base-selection--rtl`, this.themeClass, status && `${clsPrefix}-base-selection--${status}-status`, {
        [`${clsPrefix}-base-selection--active`]: this.active,
        [`${clsPrefix}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${clsPrefix}-base-selection--disabled`]: this.disabled,
        [`${clsPrefix}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${clsPrefix}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, body, bordered ? h("div", {
      class: `${clsPrefix}-base-selection__border`
    }) : null, bordered ? h("div", {
      class: `${clsPrefix}-base-selection__state-border`
    }) : null);
  }
});
function self$1(vars) {
  const {
    lineHeight,
    borderRadius,
    fontWeightStrong,
    baseColor,
    dividerColor,
    actionColor,
    textColor1,
    textColor2,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    fontSize,
    lineHeight,
    titleFontWeight: fontWeightStrong,
    borderRadius,
    border: `1px solid ${dividerColor}`,
    color: actionColor,
    titleTextColor: textColor1,
    iconColor: textColor2,
    contentTextColor: textColor2,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderInfo: `1px solid ${composite(baseColor, changeColor(infoColor, {
      alpha: 0.25
    }))}`,
    colorInfo: composite(baseColor, changeColor(infoColor, {
      alpha: 0.08
    })),
    titleTextColorInfo: textColor1,
    iconColorInfo: infoColor,
    contentTextColorInfo: textColor2,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    borderSuccess: `1px solid ${composite(baseColor, changeColor(successColor, {
      alpha: 0.25
    }))}`,
    colorSuccess: composite(baseColor, changeColor(successColor, {
      alpha: 0.08
    })),
    titleTextColorSuccess: textColor1,
    iconColorSuccess: successColor,
    contentTextColorSuccess: textColor2,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    borderWarning: `1px solid ${composite(baseColor, changeColor(warningColor, {
      alpha: 0.33
    }))}`,
    colorWarning: composite(baseColor, changeColor(warningColor, {
      alpha: 0.08
    })),
    titleTextColorWarning: textColor1,
    iconColorWarning: warningColor,
    contentTextColorWarning: textColor2,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    borderError: `1px solid ${composite(baseColor, changeColor(errorColor, {
      alpha: 0.25
    }))}`,
    colorError: composite(baseColor, changeColor(errorColor, {
      alpha: 0.08
    })),
    titleTextColorError: textColor1,
    iconColorError: errorColor,
    contentTextColorError: textColor2,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed
  });
}
const alertLight = {
  common: derived,
  self: self$1
};
const style$8 = cB("alert", `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [
  cE("border", `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),
  cM("closable", [cB("alert-body", [cE("title", `
 padding-right: 24px;
 `)])]),
  cE("icon", {
    color: "var(--n-icon-color)"
  }),
  cB("alert-body", {
    padding: "var(--n-padding)"
  }, [cE("title", {
    color: "var(--n-title-text-color)"
  }), cE("content", {
    color: "var(--n-content-text-color)"
  })]),
  fadeInHeightExpandTransition({
    originalTransition: "transform .3s var(--n-bezier)",
    enterToProps: {
      transform: "scale(1)"
    },
    leaveToProps: {
      transform: "scale(0.9)"
    }
  }),
  cE("icon", `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),
  cE("close", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),
  cM("show-icon", [cB("alert-body", {
    paddingLeft: "calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"
  })]),
  // fix: https://github.com/tusen-ai/naive-ui/issues/4588
  cM("right-adjust", [cB("alert-body", {
    paddingRight: "calc(var(--n-close-size) + var(--n-padding) + 2px)"
  })]),
  cB("alert-body", `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE("title", `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c$1("& +", [cE("content", {
    marginTop: "9px"
  })])]), cE("content", {
    transition: "color .3s var(--n-bezier)",
    fontSize: "var(--n-font-size)"
  })]),
  cE("icon", {
    transition: "color .3s var(--n-bezier)"
  })
]);
const alertProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "default"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  onClose: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onAfterHide: Function
});
const NAlert = defineComponent({
  name: "Alert",
  inheritAttrs: false,
  props: alertProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Alert", "-alert", style$8, alertLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Alert", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      const {
        fontSize,
        borderRadius,
        titleFontWeight,
        lineHeight,
        iconSize,
        iconMargin,
        iconMarginRtl,
        closeIconSize,
        closeBorderRadius,
        closeSize,
        closeMargin,
        closeMarginRtl,
        padding
      } = self2;
      const {
        type: type4
      } = props;
      const {
        left,
        right
      } = getMargin(iconMargin);
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color": self2[createKey("color", type4)],
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": self2[createKey("closeColorHover", type4)],
        "--n-close-color-pressed": self2[createKey("closeColorPressed", type4)],
        "--n-close-icon-color": self2[createKey("closeIconColor", type4)],
        "--n-close-icon-color-hover": self2[createKey("closeIconColorHover", type4)],
        "--n-close-icon-color-pressed": self2[createKey("closeIconColorPressed", type4)],
        "--n-icon-color": self2[createKey("iconColor", type4)],
        "--n-border": self2[createKey("border", type4)],
        "--n-title-text-color": self2[createKey("titleTextColor", type4)],
        "--n-content-text-color": self2[createKey("contentTextColor", type4)],
        "--n-line-height": lineHeight,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-icon-size": iconSize,
        "--n-icon-margin": iconMargin,
        "--n-icon-margin-rtl": iconMarginRtl,
        "--n-close-size": closeSize,
        "--n-close-margin": closeMargin,
        "--n-close-margin-rtl": closeMarginRtl,
        "--n-padding": padding,
        "--n-icon-margin-left": left,
        "--n-icon-margin-right": right
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("alert", computed(() => {
      return props.type[0];
    }), cssVarsRef, props) : void 0;
    const visibleRef = ref(true);
    const doAfterLeave = () => {
      const {
        onAfterLeave,
        onAfterHide
        // deprecated
      } = props;
      if (onAfterLeave) onAfterLeave();
      if (onAfterHide) onAfterHide();
    };
    const handleCloseClick = () => {
      var _a;
      void Promise.resolve((_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)).then((result) => {
        if (result === false) return;
        visibleRef.value = false;
      });
    };
    const handleAfterLeave = () => {
      doAfterLeave();
    };
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      visible: visibleRef,
      handleCloseClick,
      handleAfterLeave,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NFadeInExpandTransition, {
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => {
        const {
          mergedClsPrefix,
          $slots
        } = this;
        const attrs = {
          class: [
            `${mergedClsPrefix}-alert`,
            this.themeClass,
            this.closable && `${mergedClsPrefix}-alert--closable`,
            this.showIcon && `${mergedClsPrefix}-alert--show-icon`,
            // fix: https://github.com/tusen-ai/naive-ui/issues/4588
            !this.title && this.closable && `${mergedClsPrefix}-alert--right-adjust`,
            this.rtlEnabled && `${mergedClsPrefix}-alert--rtl`
          ],
          style: this.cssVars,
          role: "alert"
        };
        return this.visible ? h("div", Object.assign({}, mergeProps(this.$attrs, attrs)), this.closable && h(NBaseClose, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-alert__close`,
          onClick: this.handleCloseClick
        }), this.bordered && h("div", {
          class: `${mergedClsPrefix}-alert__border`
        }), this.showIcon && h("div", {
          class: `${mergedClsPrefix}-alert__icon`,
          "aria-hidden": "true"
        }, resolveSlot($slots.icon, () => [h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => {
            switch (this.type) {
              case "success":
                return h(SuccessIcon, null);
              case "info":
                return h(InfoIcon, null);
              case "warning":
                return h(WarningIcon, null);
              case "error":
                return h(ErrorIcon, null);
              default:
                return null;
            }
          }
        })])), h("div", {
          class: [`${mergedClsPrefix}-alert-body`, this.mergedBordered && `${mergedClsPrefix}-alert-body--bordered`]
        }, resolveWrappedSlot($slots.header, (children) => {
          const mergedChildren = children || this.title;
          return mergedChildren ? h("div", {
            class: `${mergedClsPrefix}-alert-body__title`
          }, mergedChildren) : null;
        }), $slots.default && h("div", {
          class: `${mergedClsPrefix}-alert-body__content`
        }, $slots))) : null;
      }
    });
  }
});
function self(vars) {
  const {
    textColor2,
    textColor3,
    textColorDisabled,
    primaryColor,
    primaryColorHover,
    inputColor,
    inputColorDisabled,
    borderColor,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderRadius,
    lineHeight,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    actionColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    fontWeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), {
    fontWeight,
    countTextColorDisabled: textColorDisabled,
    countTextColor: textColor3,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight,
    lineHeightTextarea: lineHeight,
    borderRadius,
    iconSize: "16px",
    groupLabelColor: actionColor,
    groupLabelTextColor: textColor2,
    textColor: textColor2,
    textColorDisabled,
    textDecorationColor: textColor2,
    caretColor: primaryColor,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorFocus: inputColor,
    groupLabelBorder: `1px solid ${borderColor}`,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    loadingColor: primaryColor,
    // warning
    loadingColorWarning: warningColor,
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    colorFocusWarning: inputColor,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    caretColorWarning: warningColor,
    // error
    loadingColorError: errorColor,
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    colorFocusError: inputColor,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    suffixTextColor: textColor2
  });
}
const inputLight = createTheme({
  name: "Input",
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self
});
const inputInjectionKey = createInjectionKey("n-input");
const style$7 = cB("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  cE("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  cE("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  cE("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c$1("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), c$1("&:-webkit-autofill ~", [cE("placeholder", "display: none;")])]),
  cM("round", [cNotM("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  cE("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [c$1("span", `
 width: 100%;
 display: inline-block;
 `)]),
  cM("textarea", [cE("placeholder", "overflow: visible;")]),
  cNotM("autosize", "width: 100%;"),
  cM("autosize", [cE("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  cB("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  cE("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  cE("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [c$1("&[type=password]::-ms-reveal", "display: none;"), c$1("+", [cE("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  cNotM("textarea", [cE("placeholder", "white-space: nowrap;")]),
  cE("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  cM("textarea", "width: 100%;", [cB("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), cM("resizable", [cB("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), cE("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), cE("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  cM("pair", [cE("input-el, placeholder", "text-align: center;"), cE("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  cM("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cE("border", "border: var(--n-border-disabled);"), cE("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), cE("placeholder", "color: var(--n-placeholder-color-disabled);"), cE("separator", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), cB("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), cE("suffix, prefix", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  cNotM("disabled", [cE("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [c$1("&:hover", `
 color: var(--n-icon-color-hover);
 `), c$1("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), c$1("&:hover", [cE("state-border", "border: var(--n-border-hover);")]), cM("focus", "background-color: var(--n-color-focus);", [cE("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  cE("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  cE("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  cE("prefix", "margin-right: 4px;"),
  cE("suffix", `
 margin-left: 4px;
 `),
  cE("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [cB("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), cB("base-clear", `
 font-size: var(--n-icon-size);
 `, [cE("placeholder", [cB("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), c$1(">", [cB("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  cB("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((status) => cM(`${status}-status`, [cNotM("disabled", [cB("base-loading", `
 color: var(--n-loading-color-${status})
 `), cE("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${status});
 `), cE("state-border", `
 border: var(--n-border-${status});
 `), c$1("&:hover", [cE("state-border", `
 border: var(--n-border-hover-${status});
 `)]), c$1("&:focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)]), cM("focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))
]);
const safariStyle = cB("input", [cM("disabled", [cE("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function len(s) {
  let count = 0;
  for (const _ of s) {
    count++;
  }
  return count;
}
function isEmptyInputValue(value) {
  return value === "" || value == null;
}
function useCursor(inputElRef) {
  const selectionRef = ref(null);
  function recordCursor() {
    const {
      value: input
    } = inputElRef;
    if (!(input === null || input === void 0 ? void 0 : input.focus)) {
      reset();
      return;
    }
    const {
      selectionStart,
      selectionEnd,
      value
    } = input;
    if (selectionStart == null || selectionEnd == null) {
      reset();
      return;
    }
    selectionRef.value = {
      start: selectionStart,
      end: selectionEnd,
      beforeText: value.slice(0, selectionStart),
      afterText: value.slice(selectionEnd)
    };
  }
  function restoreCursor() {
    var _a;
    const {
      value: selection
    } = selectionRef;
    const {
      value: inputEl
    } = inputElRef;
    if (!selection || !inputEl) {
      return;
    }
    const {
      value
    } = inputEl;
    const {
      start,
      beforeText,
      afterText
    } = selection;
    let startPos = value.length;
    if (value.endsWith(afterText)) {
      startPos = value.length - afterText.length;
    } else if (value.startsWith(beforeText)) {
      startPos = beforeText.length;
    } else {
      const beforeLastChar = beforeText[start - 1];
      const newIndex = value.indexOf(beforeLastChar, start - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    (_a = inputEl.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(inputEl, startPos, startPos);
  }
  function reset() {
    selectionRef.value = null;
  }
  watch(inputElRef, reset);
  return {
    recordCursor,
    restoreCursor
  };
}
const WordCount = defineComponent({
  name: "InputWordCount",
  setup(_, {
    slots
  }) {
    const {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef
    } = inject(inputInjectionKey);
    const wordCountRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null || Array.isArray(mergedValue)) return 0;
      return (countGraphemesRef.value || len)(mergedValue);
    });
    return () => {
      const {
        value: maxlength
      } = maxlengthRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      return h("span", {
        class: `${mergedClsPrefixRef.value}-input-word-count`
      }, resolveSlotWithTypedProps(slots.default, {
        value: mergedValue === null || Array.isArray(mergedValue) ? "" : mergedValue
      }, () => [maxlength === void 0 ? wordCountRef.value : `${wordCountRef.value} / ${maxlength}`]));
    };
  }
});
const inputProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: false
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: true
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: true
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  showPasswordToggle: Boolean
});
const NInput = defineComponent({
  name: "Input",
  props: inputProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme("Input", "-input", style$7, inputLight, props, mergedClsPrefixRef);
    if (isSafari) {
      useStyle("-input-safari", safariStyle, mergedClsPrefixRef);
    }
    const wrapperElRef = ref(null);
    const textareaElRef = ref(null);
    const textareaMirrorElRef = ref(null);
    const inputMirrorElRef = ref(null);
    const inputElRef = ref(null);
    const inputEl2Ref = ref(null);
    const currentFocusedInputRef = ref(null);
    const focusedInputCursorControl = useCursor(currentFocusedInputRef);
    const textareaScrollbarInstRef = ref(null);
    const {
      localeRef
    } = useLocale("Input");
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const formItem = useFormItem(props, {
      mergedSize: (NFormItem2) => {
        var _a, _b;
        const {
          size
        } = props;
        if (size) return size;
        const {
          mergedSize: formItemSize2
        } = NFormItem2 || {};
        if (formItemSize2 === null || formItemSize2 === void 0 ? void 0 : formItemSize2.value) return formItemSize2.value;
        const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Input) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const focusedRef = ref(false);
    const hoverRef = ref(false);
    const isComposingRef = ref(false);
    const activatedRef = ref(false);
    let syncSource = null;
    const mergedPlaceholderRef = computed(() => {
      const {
        placeholder,
        pair
      } = props;
      if (pair) {
        if (Array.isArray(placeholder)) {
          return placeholder;
        } else if (placeholder === void 0) {
          return ["", ""];
        }
        return [placeholder, placeholder];
      } else if (placeholder === void 0) {
        return [localeRef.value.placeholder];
      } else {
        return [placeholder];
      }
    });
    const showPlaceholder1Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[0])) && mergedPlaceholder[0];
    });
    const showPlaceholder2Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && mergedPlaceholder[1] && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[1]));
    });
    const mergedFocusRef = useMemo(() => {
      return props.internalForceFocus || focusedRef.value;
    });
    const showClearButton = useMemo(() => {
      if (mergedDisabledRef.value || props.readonly || !props.clearable || !mergedFocusRef.value && !hoverRef.value) {
        return false;
      }
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedFocus
      } = mergedFocusRef;
      if (props.pair) {
        return !!(Array.isArray(mergedValue) && (mergedValue[0] || mergedValue[1])) && (hoverRef.value || mergedFocus);
      } else {
        return !!mergedValue && (hoverRef.value || mergedFocus);
      }
    });
    const mergedShowPasswordOnRef = computed(() => {
      const {
        showPasswordOn
      } = props;
      if (showPasswordOn) {
        return showPasswordOn;
      }
      if (props.showPasswordToggle) return "click";
      return void 0;
    });
    const passwordVisibleRef = ref(false);
    const textDecorationStyleRef = computed(() => {
      const {
        textDecoration
      } = props;
      if (!textDecoration) return ["", ""];
      if (Array.isArray(textDecoration)) {
        return textDecoration.map((v) => ({
          textDecoration: v
        }));
      }
      return [{
        textDecoration
      }];
    });
    const textAreaScrollContainerWidthRef = ref(void 0);
    const updateTextAreaStyle = () => {
      var _a, _b;
      if (props.type === "textarea") {
        const {
          autosize
        } = props;
        if (autosize) {
          textAreaScrollContainerWidthRef.value = (_b = (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.offsetWidth;
        }
        if (!textareaElRef.value) return;
        if (typeof autosize === "boolean") return;
        const {
          paddingTop: stylePaddingTop,
          paddingBottom: stylePaddingBottom,
          lineHeight: styleLineHeight
        } = window.getComputedStyle(textareaElRef.value);
        const paddingTop = Number(stylePaddingTop.slice(0, -2));
        const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
        const lineHeight = Number(styleLineHeight.slice(0, -2));
        const {
          value: textareaMirrorEl
        } = textareaMirrorElRef;
        if (!textareaMirrorEl) return;
        if (autosize.minRows) {
          const minRows = Math.max(autosize.minRows, 1);
          const styleMinHeight = `${paddingTop + paddingBottom + lineHeight * minRows}px`;
          textareaMirrorEl.style.minHeight = styleMinHeight;
        }
        if (autosize.maxRows) {
          const styleMaxHeight = `${paddingTop + paddingBottom + lineHeight * autosize.maxRows}px`;
          textareaMirrorEl.style.maxHeight = styleMaxHeight;
        }
      }
    };
    const maxlengthRef = computed(() => {
      const {
        maxlength
      } = props;
      return maxlength === void 0 ? void 0 : Number(maxlength);
    });
    onMounted(() => {
      const {
        value
      } = mergedValueRef;
      if (!Array.isArray(value)) {
        syncMirror(value);
      }
    });
    const vm = getCurrentInstance().proxy;
    function doUpdateValue(value, meta) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onInput
      } = props;
      const {
        nTriggerFormInput
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value, meta);
      if (_onUpdateValue) call(_onUpdateValue, value, meta);
      if (onInput) call(onInput, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
    }
    function doChange(value, meta) {
      const {
        onChange
      } = props;
      const {
        nTriggerFormChange
      } = formItem;
      if (onChange) call(onChange, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function doClear(e) {
      const {
        onClear
      } = props;
      if (onClear) call(onClear, e);
    }
    function doUpdateValueBlur(e) {
      const {
        onInputBlur
      } = props;
      if (onInputBlur) call(onInputBlur, e);
    }
    function doUpdateValueFocus(e) {
      const {
        onInputFocus
      } = props;
      if (onInputFocus) call(onInputFocus, e);
    }
    function doDeactivate() {
      const {
        onDeactivate
      } = props;
      if (onDeactivate) call(onDeactivate);
    }
    function doActivate() {
      const {
        onActivate
      } = props;
      if (onActivate) call(onActivate);
    }
    function doClick(e) {
      const {
        onClick
      } = props;
      if (onClick) call(onClick, e);
    }
    function doWrapperFocus(e) {
      const {
        onWrapperFocus
      } = props;
      if (onWrapperFocus) call(onWrapperFocus, e);
    }
    function doWrapperBlur(e) {
      const {
        onWrapperBlur
      } = props;
      if (onWrapperBlur) call(onWrapperBlur, e);
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd(e) {
      isComposingRef.value = false;
      if (e.target === inputEl2Ref.value) {
        handleInput(e, 1);
      } else {
        handleInput(e, 0);
      }
    }
    function handleInput(e, index = 0, event = "input") {
      const targetValue = e.target.value;
      syncMirror(targetValue);
      if (e instanceof InputEvent && !e.isComposing) {
        isComposingRef.value = false;
      }
      if (props.type === "textarea") {
        const {
          value: textareaScrollbarInst
        } = textareaScrollbarInstRef;
        if (textareaScrollbarInst) {
          textareaScrollbarInst.syncUnifiedContainer();
        }
      }
      syncSource = targetValue;
      if (isComposingRef.value) return;
      focusedInputCursorControl.recordCursor();
      const isIncomingValueValid = allowInput(targetValue);
      if (isIncomingValueValid) {
        if (!props.pair) {
          if (event === "input") {
            doUpdateValue(targetValue, {
              source: index
            });
          } else {
            doChange(targetValue, {
              source: index
            });
          }
        } else {
          let {
            value
          } = mergedValueRef;
          if (!Array.isArray(value)) {
            value = ["", ""];
          } else {
            value = [value[0], value[1]];
          }
          value[index] = targetValue;
          if (event === "input") {
            doUpdateValue(value, {
              source: index
            });
          } else {
            doChange(value, {
              source: index
            });
          }
        }
      }
      vm.$forceUpdate();
      if (!isIncomingValueValid) {
        void nextTick(focusedInputCursorControl.restoreCursor);
      }
    }
    function allowInput(value) {
      const {
        countGraphemes,
        maxlength,
        minlength
      } = props;
      if (countGraphemes) {
        let graphemesCount;
        if (maxlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount > Number(maxlength)) return false;
        }
        if (minlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount < Number(maxlength)) return false;
        }
      }
      const {
        allowInput: allowInput2
      } = props;
      if (typeof allowInput2 === "function") {
        return allowInput2(value);
      }
      return true;
    }
    function handleInputBlur(e) {
      doUpdateValueBlur(e);
      if (e.relatedTarget === wrapperElRef.value) {
        doDeactivate();
      }
      if (!(e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value))) {
        activatedRef.value = false;
      }
      dealWithEvent(e, "blur");
      currentFocusedInputRef.value = null;
    }
    function handleInputFocus(e, index) {
      doUpdateValueFocus(e);
      focusedRef.value = true;
      activatedRef.value = true;
      doActivate();
      dealWithEvent(e, "focus");
      if (index === 0) {
        currentFocusedInputRef.value = inputElRef.value;
      } else if (index === 1) {
        currentFocusedInputRef.value = inputEl2Ref.value;
      } else if (index === 2) {
        currentFocusedInputRef.value = textareaElRef.value;
      }
    }
    function handleWrapperBlur(e) {
      if (props.passivelyActivated) {
        doWrapperBlur(e);
        dealWithEvent(e, "blur");
      }
    }
    function handleWrapperFocus(e) {
      if (props.passivelyActivated) {
        focusedRef.value = true;
        doWrapperFocus(e);
        dealWithEvent(e, "focus");
      }
    }
    function dealWithEvent(e, type4) {
      if (e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value || e.relatedTarget === wrapperElRef.value)) ;
      else {
        if (type4 === "focus") {
          doFocus(e);
          focusedRef.value = true;
        } else if (type4 === "blur") {
          doBlur(e);
          focusedRef.value = false;
        }
      }
    }
    function handleChange(e, index) {
      handleInput(e, index, "change");
    }
    function handleClick(e) {
      doClick(e);
    }
    function handleClear(e) {
      doClear(e);
      clearValue();
    }
    function clearValue() {
      if (props.pair) {
        doUpdateValue(["", ""], {
          source: "clear"
        });
        doChange(["", ""], {
          source: "clear"
        });
      } else {
        doUpdateValue("", {
          source: "clear"
        });
        doChange("", {
          source: "clear"
        });
      }
    }
    function handleMouseDown(e) {
      const {
        onMousedown
      } = props;
      if (onMousedown) onMousedown(e);
      const {
        tagName
      } = e.target;
      if (tagName !== "INPUT" && tagName !== "TEXTAREA") {
        if (props.resizable) {
          const {
            value: wrapperEl
          } = wrapperElRef;
          if (wrapperEl) {
            const {
              left,
              top,
              width,
              height
            } = wrapperEl.getBoundingClientRect();
            const resizeHandleSize = 14;
            if (left + width - resizeHandleSize < e.clientX && e.clientX < left + width && top + height - resizeHandleSize < e.clientY && e.clientY < top + height) {
              return;
            }
          }
        }
        e.preventDefault();
        if (!focusedRef.value) {
          focus();
        }
      }
    }
    function handleMouseEnter() {
      var _a;
      hoverRef.value = true;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseEnterWrapper();
      }
    }
    function handleMouseLeave() {
      var _a;
      hoverRef.value = false;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseLeaveWrapper();
      }
    }
    function handlePasswordToggleClick() {
      if (mergedDisabledRef.value) return;
      if (mergedShowPasswordOnRef.value !== "click") return;
      passwordVisibleRef.value = !passwordVisibleRef.value;
    }
    function handlePasswordToggleMousedown(e) {
      if (mergedDisabledRef.value) return;
      e.preventDefault();
      const preventDefaultOnce = (e2) => {
        e2.preventDefault();
        off("mouseup", document, preventDefaultOnce);
      };
      on("mouseup", document, preventDefaultOnce);
      if (mergedShowPasswordOnRef.value !== "mousedown") return;
      passwordVisibleRef.value = true;
      const hidePassword = () => {
        passwordVisibleRef.value = false;
        off("mouseup", document, hidePassword);
      };
      on("mouseup", document, hidePassword);
    }
    function handleWrapperKeyup(e) {
      if (props.onKeyup) call(props.onKeyup, e);
    }
    function handleWrapperKeydown(e) {
      if (props.onKeydown) call(props.onKeydown, e);
      switch (e.key) {
        case "Escape":
          handleWrapperKeydownEsc();
          break;
        case "Enter":
          handleWrapperKeydownEnter(e);
          break;
      }
    }
    function handleWrapperKeydownEnter(e) {
      var _a, _b;
      if (props.passivelyActivated) {
        const {
          value: focused
        } = activatedRef;
        if (focused) {
          if (props.internalDeactivateOnEnter) {
            handleWrapperKeydownEsc();
          }
          return;
        }
        e.preventDefault();
        if (props.type === "textarea") {
          (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        } else {
          (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
    }
    function handleWrapperKeydownEsc() {
      if (props.passivelyActivated) {
        activatedRef.value = false;
        void nextTick(() => {
          var _a;
          (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
    }
    function focus() {
      var _a, _b, _c;
      if (mergedDisabledRef.value) return;
      if (props.passivelyActivated) {
        (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        (_b = textareaElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        (_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function blur() {
      var _a;
      if ((_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
    function select() {
      var _a, _b;
      (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.select();
      (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select();
    }
    function activate() {
      if (mergedDisabledRef.value) return;
      if (textareaElRef.value) textareaElRef.value.focus();
      else if (inputElRef.value) inputElRef.value.focus();
    }
    function deactivate() {
      const {
        value: wrapperEl
      } = wrapperElRef;
      if ((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.contains(document.activeElement)) && wrapperEl !== document.activeElement) {
        handleWrapperKeydownEsc();
      }
    }
    function scrollTo(options) {
      if (props.type === "textarea") {
        const {
          value: textareaEl
        } = textareaElRef;
        textareaEl === null || textareaEl === void 0 ? void 0 : textareaEl.scrollTo(options);
      } else {
        const {
          value: inputEl
        } = inputElRef;
        inputEl === null || inputEl === void 0 ? void 0 : inputEl.scrollTo(options);
      }
    }
    function syncMirror(value) {
      const {
        type: type4,
        pair,
        autosize
      } = props;
      if (!pair && autosize) {
        if (type4 === "textarea") {
          const {
            value: textareaMirrorEl
          } = textareaMirrorElRef;
          if (textareaMirrorEl) {
            textareaMirrorEl.textContent = `${value !== null && value !== void 0 ? value : ""}\r
`;
          }
        } else {
          const {
            value: inputMirrorEl
          } = inputMirrorElRef;
          if (inputMirrorEl) {
            if (value) {
              inputMirrorEl.textContent = value;
            } else {
              inputMirrorEl.innerHTML = "&nbsp;";
            }
          }
        }
      }
    }
    function handleTextAreaMirrorResize() {
      updateTextAreaStyle();
    }
    const placeholderStyleRef = ref({
      top: "0"
    });
    function handleTextAreaScroll(e) {
      var _a;
      const {
        scrollTop
      } = e.target;
      placeholderStyleRef.value.top = `${-scrollTop}px`;
      (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
    }
    let stopWatchMergedValue1 = null;
    watchEffect(() => {
      const {
        autosize,
        type: type4
      } = props;
      if (autosize && type4 === "textarea") {
        stopWatchMergedValue1 = watch(mergedValueRef, (value) => {
          if (!Array.isArray(value) && value !== syncSource) {
            syncMirror(value);
          }
        });
      } else {
        stopWatchMergedValue1 === null || stopWatchMergedValue1 === void 0 ? void 0 : stopWatchMergedValue1();
      }
    });
    let stopWatchMergedValue2 = null;
    watchEffect(() => {
      if (props.type === "textarea") {
        stopWatchMergedValue2 = watch(mergedValueRef, (value) => {
          var _a;
          if (!Array.isArray(value) && value !== syncSource) {
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
          }
        });
      } else {
        stopWatchMergedValue2 === null || stopWatchMergedValue2 === void 0 ? void 0 : stopWatchMergedValue2();
      }
    });
    provide(inputInjectionKey, {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef: toRef(props, "countGraphemes")
    });
    const exposedProps = {
      wrapperElRef,
      inputElRef,
      textareaElRef,
      isCompositing: isComposingRef,
      clear: clearValue,
      focus,
      blur,
      select,
      deactivate,
      activate,
      scrollTo
    };
    const rtlEnabledRef = useRtl("Input", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          color,
          borderRadius,
          textColor,
          caretColor,
          caretColorError,
          caretColorWarning,
          textDecorationColor,
          border,
          borderDisabled,
          borderHover,
          borderFocus,
          placeholderColor,
          placeholderColorDisabled,
          lineHeightTextarea,
          colorDisabled,
          colorFocus,
          textColorDisabled,
          boxShadowFocus,
          iconSize,
          colorFocusWarning,
          boxShadowFocusWarning,
          borderWarning,
          borderFocusWarning,
          borderHoverWarning,
          colorFocusError,
          boxShadowFocusError,
          borderError,
          borderFocusError,
          borderHoverError,
          clearSize,
          clearColor,
          clearColorHover,
          clearColorPressed,
          iconColor,
          iconColorDisabled,
          suffixTextColor,
          countTextColor,
          countTextColorDisabled,
          iconColorHover,
          iconColorPressed,
          loadingColor,
          loadingColorError,
          loadingColorWarning,
          fontWeight,
          [createKey("padding", size)]: padding,
          [createKey("fontSize", size)]: fontSize,
          [createKey("height", size)]: height
        }
      } = themeRef.value;
      const {
        left: paddingLeft,
        right: paddingRight
      } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-count-text-color": countTextColor,
        "--n-count-text-color-disabled": countTextColorDisabled,
        "--n-color": color,
        "--n-font-size": fontSize,
        "--n-font-weight": fontWeight,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-padding-left": paddingLeft,
        "--n-padding-right": paddingRight,
        "--n-text-color": textColor,
        "--n-caret-color": caretColor,
        "--n-text-decoration-color": textDecorationColor,
        "--n-border": border,
        "--n-border-disabled": borderDisabled,
        "--n-border-hover": borderHover,
        "--n-border-focus": borderFocus,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-icon-size": iconSize,
        "--n-line-height-textarea": lineHeightTextarea,
        "--n-color-disabled": colorDisabled,
        "--n-color-focus": colorFocus,
        "--n-text-color-disabled": textColorDisabled,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-caret-color-warning": caretColorWarning,
        "--n-color-focus-warning": colorFocusWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-loading-color-warning": loadingColorWarning,
        // form error
        "--n-caret-color-error": caretColorError,
        "--n-color-focus-error": colorFocusError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-loading-color-error": loadingColorError,
        // clear-button
        "--n-clear-color": clearColor,
        "--n-clear-size": clearSize,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        "--n-icon-color": iconColor,
        "--n-icon-color-hover": iconColorHover,
        "--n-icon-color-pressed": iconColorPressed,
        "--n-icon-color-disabled": iconColorDisabled,
        "--n-suffix-text-color": suffixTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("input", computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      return size[0];
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedProps), {
      // DOM ref
      wrapperElRef,
      inputElRef,
      inputMirrorElRef,
      inputEl2Ref,
      textareaElRef,
      textareaMirrorElRef,
      textareaScrollbarInstRef,
      // value
      rtlEnabled: rtlEnabledRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      passwordVisible: passwordVisibleRef,
      mergedPlaceholder: mergedPlaceholderRef,
      showPlaceholder1: showPlaceholder1Ref,
      showPlaceholder2: showPlaceholder2Ref,
      mergedFocus: mergedFocusRef,
      isComposing: isComposingRef,
      activated: activatedRef,
      showClearButton,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      textDecorationStyle: textDecorationStyleRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedShowPasswordOn: mergedShowPasswordOnRef,
      placeholderStyle: placeholderStyleRef,
      mergedStatus: mergedStatusRef,
      textAreaScrollContainerWidth: textAreaScrollContainerWidthRef,
      // methods
      handleTextAreaScroll,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      handleInputBlur,
      handleInputFocus,
      handleWrapperBlur,
      handleWrapperFocus,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseDown,
      handleChange,
      handleClick,
      handleClear,
      handlePasswordToggleClick,
      handlePasswordToggleMousedown,
      handleWrapperKeydown,
      handleWrapperKeyup,
      handleTextAreaMirrorResize,
      getTextareaScrollContainer: () => {
        return textareaElRef.value;
      },
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const {
      mergedClsPrefix,
      mergedStatus,
      themeClass,
      type: type4,
      countGraphemes,
      onRender
    } = this;
    const $slots = this.$slots;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "wrapperElRef",
      class: [`${mergedClsPrefix}-input`, `${mergedClsPrefix}-input--${this.mergedSize}-size`, themeClass, mergedStatus && `${mergedClsPrefix}-input--${mergedStatus}-status`, {
        [`${mergedClsPrefix}-input--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-input--textarea`]: type4 === "textarea",
        [`${mergedClsPrefix}-input--resizable`]: this.resizable && !this.autosize,
        [`${mergedClsPrefix}-input--autosize`]: this.autosize,
        [`${mergedClsPrefix}-input--round`]: this.round && !(type4 === "textarea"),
        [`${mergedClsPrefix}-input--pair`]: this.pair,
        [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
        [`${mergedClsPrefix}-input--stateful`]: this.stateful
      }],
      style: this.cssVars,
      tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
      onFocus: this.handleWrapperFocus,
      onBlur: this.handleWrapperBlur,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd,
      onKeyup: this.handleWrapperKeyup,
      onKeydown: this.handleWrapperKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, resolveWrappedSlot($slots.prefix, (children) => children && h("div", {
      class: `${mergedClsPrefix}-input__prefix`
    }, children)), type4 === "textarea" ? h(Scrollbar, {
      ref: "textareaScrollbarInstRef",
      class: `${mergedClsPrefix}-input__textarea`,
      container: this.getTextareaScrollContainer,
      theme: (_b = (_a = this.theme) === null || _a === void 0 ? void 0 : _a.peers) === null || _b === void 0 ? void 0 : _b.Scrollbar,
      themeOverrides: (_d = (_c = this.themeOverrides) === null || _c === void 0 ? void 0 : _c.peers) === null || _d === void 0 ? void 0 : _d.Scrollbar,
      triggerDisplayManually: true,
      useUnifiedContainer: true,
      internalHoistYRail: true
    }, {
      default: () => {
        var _a2, _b2;
        const {
          textAreaScrollContainerWidth
        } = this;
        const scrollContainerWidthStyle = {
          width: this.autosize && textAreaScrollContainerWidth && `${textAreaScrollContainerWidth}px`
        };
        return h(Fragment, null, h("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${mergedClsPrefix}-input__textarea-el`, (_a2 = this.inputProps) === null || _a2 === void 0 ? void 0 : _a2.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: countGraphemes ? void 0 : this.maxlength,
          minlength: countGraphemes ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (_b2 = this.inputProps) === null || _b2 === void 0 ? void 0 : _b2.style, scrollContainerWidthStyle],
          onBlur: this.handleInputBlur,
          onFocus: (e) => {
            this.handleInputFocus(e, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? h("div", {
          class: `${mergedClsPrefix}-input__placeholder`,
          style: [this.placeholderStyle, scrollContainerWidthStyle],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(VResizeObserver, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => h("div", {
            ref: "textareaMirrorElRef",
            class: `${mergedClsPrefix}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", Object.assign({
      type: type4 === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : type4
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${mergedClsPrefix}-input__input-el`, (_e = this.inputProps) === null || _e === void 0 ? void 0 : _e.class],
      style: [this.textDecorationStyle[0], (_f = this.inputProps) === null || _f === void 0 ? void 0 : _f.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : (_g = this.inputProps) === null || _g === void 0 ? void 0 : _g.tabindex,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? void 0 : this.maxlength,
      minlength: countGraphemes ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: (e) => {
        this.handleInputFocus(e, 0);
      },
      onInput: (e) => {
        this.handleInput(e, 0);
      },
      onChange: (e) => {
        this.handleChange(e, 0);
      }
    })), this.showPlaceholder1 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? h("div", {
      class: `${mergedClsPrefix}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && resolveWrappedSlot($slots.suffix, (children) => {
      return children || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [resolveWrappedSlot($slots["clear-icon-placeholder"], (children2) => {
        return (this.clearable || children2) && h(NBaseClear, {
          clsPrefix: mergedClsPrefix,
          show: this.showClearButton,
          onClear: this.handleClear
        }, {
          placeholder: () => children2,
          icon: () => {
            var _a2, _b2;
            return (_b2 = (_a2 = this.$slots)["clear-icon"]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          }
        });
      }), !this.internalLoadingBeforeSuffix ? children : null, this.loading !== void 0 ? h(NBaseSuffix, {
        clsPrefix: mergedClsPrefix,
        loading: this.loading,
        showArrow: false,
        showClear: false,
        style: this.cssVars
      }) : null, this.internalLoadingBeforeSuffix ? children : null, this.showCount && this.type !== "textarea" ? h(WordCount, null, {
        default: (props) => {
          var _a2;
          const {
            renderCount
          } = this;
          if (renderCount) {
            return renderCount(props);
          }
          return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
        }
      }) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
        class: `${mergedClsPrefix}-input__eye`,
        onMousedown: this.handlePasswordToggleMousedown,
        onClick: this.handlePasswordToggleClick
      }, this.passwordVisible ? resolveSlot($slots["password-visible-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeIcon, null)
      })]) : resolveSlot($slots["password-invisible-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeOffIcon, null)
      })])) : null]) : null;
    })), this.pair ? h("span", {
      class: `${mergedClsPrefix}-input__separator`
    }, resolveSlot($slots.separator, () => [this.separator])) : null, this.pair ? h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${mergedClsPrefix}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? void 0 : this.maxlength,
      minlength: countGraphemes ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (e) => {
        this.handleInputFocus(e, 1);
      },
      onInput: (e) => {
        this.handleInput(e, 1);
      },
      onChange: (e) => {
        this.handleChange(e, 1);
      }
    }), this.showPlaceholder2 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[1])) : null), resolveWrappedSlot($slots.suffix, (children) => {
      return (this.clearable || children) && h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [this.clearable && h(NBaseClear, {
        clsPrefix: mergedClsPrefix,
        show: this.showClearButton,
        onClear: this.handleClear
      }, {
        icon: () => {
          var _a2;
          return (_a2 = $slots["clear-icon"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
        },
        placeholder: () => {
          var _a2;
          return (_a2 = $slots["clear-icon-placeholder"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
        }
      }), children]);
    })) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__border`
    }) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__state-border`
    }) : null, this.showCount && type4 === "textarea" ? h(WordCount, null, {
      default: (props) => {
        var _a2;
        const {
          renderCount
        } = this;
        if (renderCount) {
          return renderCount(props);
        }
        return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
      }
    }) : null);
  }
});
function getIsGroup(option) {
  return option.type === "group";
}
function getIgnored(option) {
  return option.type === "ignored";
}
function patternMatched(pattern4, value) {
  try {
    return !!(1 + value.toString().toLowerCase().indexOf(pattern4.trim().toLowerCase()));
  } catch (_a) {
    return false;
  }
}
function createTmOptions(valueField, childrenField) {
  const options = {
    getIsGroup,
    getIgnored,
    getKey(option) {
      if (getIsGroup(option)) {
        return option.name || option.key || "key-required";
      }
      return option[valueField];
    },
    getChildren(option) {
      return option[childrenField];
    }
  };
  return options;
}
function filterOptions(originalOpts, filter, pattern4, childrenField) {
  if (!filter) return originalOpts;
  function traverse(options) {
    if (!Array.isArray(options)) return [];
    const filteredOptions = [];
    for (const option of options) {
      if (getIsGroup(option)) {
        const children = traverse(option[childrenField]);
        if (children.length) {
          filteredOptions.push(Object.assign({}, option, {
            [childrenField]: children
          }));
        }
      } else if (getIgnored(option)) {
        continue;
      } else if (filter(pattern4, option)) {
        filteredOptions.push(option);
      }
    }
    return filteredOptions;
  }
  return traverse(originalOpts);
}
function createValOptMap(options, valueField, childrenField) {
  const valOptMap = /* @__PURE__ */ new Map();
  options.forEach((option) => {
    if (getIsGroup(option)) {
      option[childrenField].forEach((selectGroupOption) => {
        valOptMap.set(selectGroupOption[valueField], selectGroupOption);
      });
    } else {
      valOptMap.set(option[valueField], option);
    }
  });
  return valOptMap;
}
const style$6 = c$1([cB("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), cB("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
const selectProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearCreatedOptionsOnClear: {
    type: Boolean,
    default: true
  },
  clearFilterAfterSelect: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  menuSize: {
    type: String
  },
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  maxTagCount: [Number, String],
  ellipsisTagPopoverProps: Object,
  consistentMenuWidth: {
    type: Boolean,
    default: true
  },
  virtualScroll: {
    type: Boolean,
    default: true
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: {
    type: Boolean,
    default: true
  },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: true
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  /** deprecated */
  onChange: [Function, Array],
  items: Array
});
const NSelect = defineComponent({
  name: "Select",
  props: selectProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme("Select", "-select", style$6, selectLight, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const focusedRef = ref(false);
    const patternRef = ref("");
    const compitableOptionsRef = useCompitable(props, ["items", "options"]);
    const createdOptionsRef = ref([]);
    const beingCreatedOptionsRef = ref([]);
    const localOptionsRef = computed(() => {
      return beingCreatedOptionsRef.value.concat(createdOptionsRef.value).concat(compitableOptionsRef.value);
    });
    const resolvedFilterRef = computed(() => {
      const {
        filter
      } = props;
      if (filter) return filter;
      const {
        labelField,
        valueField
      } = props;
      return (pattern4, option) => {
        if (!option) return false;
        const label = option[labelField];
        if (typeof label === "string") {
          return patternMatched(pattern4, label);
        }
        const value = option[valueField];
        if (typeof value === "string") {
          return patternMatched(pattern4, value);
        }
        if (typeof value === "number") {
          return patternMatched(pattern4, String(value));
        }
        return false;
      };
    });
    const filteredOptionsRef = computed(() => {
      if (props.remote) {
        return compitableOptionsRef.value;
      } else {
        const {
          value: localOptions
        } = localOptionsRef;
        const {
          value: pattern4
        } = patternRef;
        if (!pattern4.length || !props.filterable) {
          return localOptions;
        } else {
          return filterOptions(localOptions, resolvedFilterRef.value, pattern4, props.childrenField);
        }
      }
    });
    const treeMateRef = computed(() => {
      const {
        valueField,
        childrenField
      } = props;
      const options = createTmOptions(valueField, childrenField);
      return createTreeMate(filteredOptionsRef.value, options);
    });
    const valOptMapRef = computed(() => createValOptMap(localOptionsRef.value, props.valueField, props.childrenField));
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const triggerRef = ref(null);
    const followerRef = ref(null);
    const menuRef = ref(null);
    const {
      localeRef
    } = useLocale("Select");
    const localizedPlaceholderRef = computed(() => {
      var _a;
      return (_a = props.placeholder) !== null && _a !== void 0 ? _a : localeRef.value.placeholder;
    });
    const emptyArray = [];
    const memoValOptMapRef = ref(/* @__PURE__ */ new Map());
    const wrappedFallbackOptionRef = computed(() => {
      const {
        fallbackOption
      } = props;
      if (fallbackOption === void 0) {
        const {
          labelField,
          valueField
        } = props;
        return (value) => ({
          [labelField]: String(value),
          [valueField]: value
        });
      }
      if (fallbackOption === false) return false;
      return (value) => {
        return Object.assign(fallbackOption(value), {
          value
        });
      };
    });
    function getMergedOptions(values) {
      const remote = props.remote;
      const {
        value: memoValOptMap
      } = memoValOptMapRef;
      const {
        value: valOptMap
      } = valOptMapRef;
      const {
        value: wrappedFallbackOption
      } = wrappedFallbackOptionRef;
      const options = [];
      values.forEach((value) => {
        if (valOptMap.has(value)) {
          options.push(valOptMap.get(value));
        } else if (remote && memoValOptMap.has(value)) {
          options.push(memoValOptMap.get(value));
        } else if (wrappedFallbackOption) {
          const option = wrappedFallbackOption(value);
          if (option) {
            options.push(option);
          }
        }
      });
      return options;
    }
    const selectedOptionsRef = computed(() => {
      if (props.multiple) {
        const {
          value: values
        } = mergedValueRef;
        if (!Array.isArray(values)) return [];
        return getMergedOptions(values);
      }
      return null;
    });
    const selectedOptionRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!props.multiple && !Array.isArray(mergedValue)) {
        if (mergedValue === null) return null;
        return getMergedOptions([mergedValue])[0] || null;
      }
      return null;
    });
    const formItem = useFormItem(props, {
      mergedSize: (NFormItem2) => {
        var _a, _b;
        const {
          size
        } = props;
        if (size) return size;
        const {
          mergedSize: formItemSize2
        } = NFormItem2 || {};
        if (formItemSize2 === null || formItemSize2 === void 0 ? void 0 : formItemSize2.value) return formItemSize2.value;
        const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Select) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    function doUpdateValue(value, option) {
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      if (onChange) call(onChange, value, option);
      if (onUpdateValue) call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doClear() {
      const {
        onClear
      } = props;
      if (onClear) call(onClear);
    }
    function doFocus(e) {
      const {
        onFocus,
        showOnFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
      if (showOnFocus) {
        openMenu();
      }
    }
    function doSearch(value) {
      const {
        onSearch
      } = props;
      if (onSearch) call(onSearch, value);
    }
    function doScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) call(onScroll, e);
    }
    function updateMemorizedOptions() {
      var _a;
      const {
        remote,
        multiple
      } = props;
      if (remote) {
        const {
          value: memoValOptMap
        } = memoValOptMapRef;
        if (multiple) {
          const {
            valueField
          } = props;
          (_a = selectedOptionsRef.value) === null || _a === void 0 ? void 0 : _a.forEach((option) => {
            memoValOptMap.set(option[valueField], option);
          });
        } else {
          const option = selectedOptionRef.value;
          if (option) {
            memoValOptMap.set(option[props.valueField], option);
          }
        }
      }
    }
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        doUpdateShow(true);
        uncontrolledShowRef.value = true;
        if (props.filterable) {
          focusSelectionInput();
        }
      }
    }
    function closeMenu() {
      doUpdateShow(false);
    }
    function handleMenuAfterLeave() {
      patternRef.value = "";
      beingCreatedOptionsRef.value = emptyArray;
    }
    const activeWithoutMenuOpenRef = ref(false);
    function onTriggerInputFocus() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = true;
      }
    }
    function onTriggerInputBlur() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = false;
        if (!mergedShowRef.value) {
          handleMenuAfterLeave();
        }
      }
    }
    function handleTriggerClick() {
      if (mergedDisabledRef.value) return;
      if (!mergedShowRef.value) {
        openMenu();
      } else {
        if (!props.filterable) {
          closeMenu();
        } else {
          focusSelectionInput();
        }
      }
    }
    function handleTriggerBlur(e) {
      var _a, _b;
      if ((_b = (_a = menuRef.value) === null || _a === void 0 ? void 0 : _a.selfRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) {
        return;
      }
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleTriggerFocus(e) {
      doFocus(e);
      focusedRef.value = true;
    }
    function handleMenuFocus() {
      focusedRef.value = true;
    }
    function handleMenuBlur(e) {
      var _a;
      if ((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget)) return;
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleMenuTabOut() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      closeMenu();
    }
    function handleMenuClickOutside(e) {
      var _a;
      if (mergedShowRef.value) {
        if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
          closeMenu();
        }
      }
    }
    function createClearedMultipleSelectValue(value) {
      if (!Array.isArray(value)) return [];
      if (wrappedFallbackOptionRef.value) {
        return Array.from(value);
      } else {
        const {
          remote
        } = props;
        const {
          value: valOptMap
        } = valOptMapRef;
        if (remote) {
          const {
            value: memoValOptMap
          } = memoValOptMapRef;
          return value.filter((v) => valOptMap.has(v) || memoValOptMap.has(v));
        } else {
          return value.filter((v) => valOptMap.has(v));
        }
      }
    }
    function handleToggleByTmNode(tmNode) {
      handleToggleByOption(tmNode.rawNode);
    }
    function handleToggleByOption(option) {
      if (mergedDisabledRef.value) return;
      const {
        tag,
        remote,
        clearFilterAfterSelect,
        valueField
      } = props;
      if (tag && !remote) {
        const {
          value: beingCreatedOptions
        } = beingCreatedOptionsRef;
        const beingCreatedOption = beingCreatedOptions[0] || null;
        if (beingCreatedOption) {
          const createdOptions = createdOptionsRef.value;
          if (!createdOptions.length) {
            createdOptionsRef.value = [beingCreatedOption];
          } else {
            createdOptions.push(beingCreatedOption);
          }
          beingCreatedOptionsRef.value = emptyArray;
        }
      }
      if (remote) {
        memoValOptMapRef.value.set(option[valueField], option);
      }
      if (props.multiple) {
        const changedValue = createClearedMultipleSelectValue(mergedValueRef.value);
        const index = changedValue.findIndex((value) => value === option[valueField]);
        if (~index) {
          changedValue.splice(index, 1);
          if (tag && !remote) {
            const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
            if (~createdOptionIndex) {
              createdOptionsRef.value.splice(createdOptionIndex, 1);
              if (clearFilterAfterSelect) patternRef.value = "";
            }
          }
        } else {
          changedValue.push(option[valueField]);
          if (clearFilterAfterSelect) patternRef.value = "";
        }
        doUpdateValue(changedValue, getMergedOptions(changedValue));
      } else {
        if (tag && !remote) {
          const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
          if (~createdOptionIndex) {
            createdOptionsRef.value = [createdOptionsRef.value[createdOptionIndex]];
          } else {
            createdOptionsRef.value = emptyArray;
          }
        }
        focusSelection();
        closeMenu();
        doUpdateValue(option[valueField], option);
      }
    }
    function getCreatedOptionIndex(optionValue) {
      const createdOptions = createdOptionsRef.value;
      return createdOptions.findIndex((createdOption) => createdOption[props.valueField] === optionValue);
    }
    function handlePatternInput(e) {
      if (!mergedShowRef.value) {
        openMenu();
      }
      const {
        value
      } = e.target;
      patternRef.value = value;
      const {
        tag,
        remote
      } = props;
      doSearch(value);
      if (tag && !remote) {
        if (!value) {
          beingCreatedOptionsRef.value = emptyArray;
          return;
        }
        const {
          onCreate
        } = props;
        const optionBeingCreated = onCreate ? onCreate(value) : {
          [props.labelField]: value,
          [props.valueField]: value
        };
        const {
          valueField,
          labelField
        } = props;
        if (compitableOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        }) || createdOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        })) {
          beingCreatedOptionsRef.value = emptyArray;
        } else {
          beingCreatedOptionsRef.value = [optionBeingCreated];
        }
      }
    }
    function handleClear(e) {
      e.stopPropagation();
      const {
        multiple,
        tag,
        remote,
        clearCreatedOptionsOnClear
      } = props;
      if (!multiple && props.filterable) {
        closeMenu();
      }
      if (tag && !remote && clearCreatedOptionsOnClear) {
        createdOptionsRef.value = emptyArray;
      }
      doClear();
      if (multiple) {
        doUpdateValue([], []);
      } else {
        doUpdateValue(null, null);
      }
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty") && !happensIn(e, "header")) {
        e.preventDefault();
      }
    }
    function handleMenuScroll(e) {
      doScroll(e);
    }
    function handleKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (!props.keyboard) {
        e.preventDefault();
        return;
      }
      switch (e.key) {
        case " ":
          if (props.filterable) {
            break;
          } else {
            e.preventDefault();
          }
        // eslint-disable-next-line no-fallthrough
        case "Enter":
          if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.isComposing)) {
            if (mergedShowRef.value) {
              const pendingTmNode = (_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.getPendingTmNode();
              if (pendingTmNode) {
                handleToggleByTmNode(pendingTmNode);
              } else if (!props.filterable) {
                closeMenu();
                focusSelection();
              }
            } else {
              openMenu();
              if (props.tag && activeWithoutMenuOpenRef.value) {
                const beingCreatedOption = beingCreatedOptionsRef.value[0];
                if (beingCreatedOption) {
                  const optionValue = beingCreatedOption[props.valueField];
                  const {
                    value: mergedValue
                  } = mergedValueRef;
                  if (props.multiple) {
                    if (Array.isArray(mergedValue) && mergedValue.includes(optionValue)) ;
                    else {
                      handleToggleByOption(beingCreatedOption);
                    }
                  } else {
                    handleToggleByOption(beingCreatedOption);
                  }
                }
              }
            }
          }
          e.preventDefault();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (props.loading) return;
          if (mergedShowRef.value) {
            (_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.prev();
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (props.loading) return;
          if (mergedShowRef.value) {
            (_d = menuRef.value) === null || _d === void 0 ? void 0 : _d.next();
          } else {
            openMenu();
          }
          break;
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closeMenu();
          }
          (_e = triggerRef.value) === null || _e === void 0 ? void 0 : _e.focus();
          break;
      }
    }
    function focusSelection() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function focusSelectionInput() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
    }
    function handleTriggerOrMenuResize() {
      var _a;
      if (!mergedShowRef.value) return;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    updateMemorizedOptions();
    watch(toRef(props, "options"), updateMemorizedOptions);
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      focusInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
      },
      blur: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      blurInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blurInput();
      }
    };
    const cssVarsRef = computed(() => {
      const {
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      treeMate: treeMateRef,
      isMounted: isMounted(),
      triggerRef,
      menuRef,
      pattern: patternRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      followerRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      focused: focusedRef,
      activeWithoutMenuOpen: activeWithoutMenuOpenRef,
      inlineThemeDisabled,
      onTriggerInputFocus,
      onTriggerInputBlur,
      handleTriggerOrMenuResize,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuTabOut,
      handleTriggerClick,
      handleToggle: handleToggleByTmNode,
      handleDeleteOption: handleToggleByOption,
      handlePatternInput,
      handleClear,
      handleTriggerBlur,
      handleTriggerFocus,
      handleKeydown,
      handleMenuAfterLeave,
      handleMenuClickOutside,
      handleMenuScroll,
      handleMenuKeydown: handleKeydown,
      handleMenuMousedown,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(NInternalSelection, {
          ref: "triggerRef",
          inlineThemeDisabled: this.inlineThemeDisabled,
          status: this.mergedStatus,
          inputProps: this.inputProps,
          clsPrefix: this.mergedClsPrefix,
          showArrow: this.showArrow,
          maxTagCount: this.maxTagCount,
          ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
          bordered: this.mergedBordered,
          active: this.activeWithoutMenuOpen || this.mergedShow,
          pattern: this.pattern,
          placeholder: this.localizedPlaceholder,
          selectedOption: this.selectedOption,
          selectedOptions: this.selectedOptions,
          multiple: this.multiple,
          renderTag: this.renderTag,
          renderLabel: this.renderLabel,
          filterable: this.filterable,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          size: this.mergedSize,
          theme: this.mergedTheme.peers.InternalSelection,
          labelField: this.labelField,
          valueField: this.valueField,
          themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
          loading: this.loading,
          focused: this.focused,
          onClick: this.handleTriggerClick,
          onDeleteOption: this.handleDeleteOption,
          onPatternInput: this.handlePatternInput,
          onClear: this.handleClear,
          onBlur: this.handleTriggerBlur,
          onFocus: this.handleTriggerFocus,
          onKeydown: this.handleKeydown,
          onPatternBlur: this.onTriggerInputBlur,
          onPatternFocus: this.onTriggerInputFocus,
          onResize: this.handleTriggerOrMenuResize,
          ignoreComposition: this.ignoreComposition
        }, {
          arrow: () => {
            var _a, _b;
            return [(_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a)];
          }
        })
      }), h(VFollower, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var _a, _b, _c;
            if (!(this.mergedShow || this.displayDirective === "show")) {
              return null;
            }
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return withDirectives(h(NInternalSelectMenu, Object.assign({}, this.menuProps, {
              ref: "menuRef",
              onResize: this.handleTriggerOrMenuResize,
              inlineThemeDisabled: this.inlineThemeDisabled,
              virtualScroll: this.consistentMenuWidth && this.virtualScroll,
              class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (_b = this.menuProps) === null || _b === void 0 ? void 0 : _b.class],
              clsPrefix: this.mergedClsPrefix,
              focusable: true,
              labelField: this.labelField,
              valueField: this.valueField,
              autoPending: true,
              nodeProps: this.nodeProps,
              theme: this.mergedTheme.peers.InternalSelectMenu,
              themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
              treeMate: this.treeMate,
              multiple: this.multiple,
              size: this.menuSize,
              renderOption: this.renderOption,
              renderLabel: this.renderLabel,
              value: this.mergedValue,
              style: [(_c = this.menuProps) === null || _c === void 0 ? void 0 : _c.style, this.cssVars],
              onToggle: this.handleToggle,
              onScroll: this.handleMenuScroll,
              onFocus: this.handleMenuFocus,
              onBlur: this.handleMenuBlur,
              onKeydown: this.handleMenuKeydown,
              onTabOut: this.handleMenuTabOut,
              onMousedown: this.handleMenuMousedown,
              show: this.mergedShow,
              showCheckmark: this.showCheckmark,
              resetMenuOnOptionsChange: this.resetMenuOnOptionsChange,
              scrollbarProps: this.scrollbarProps
            }), {
              empty: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).empty) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              },
              header: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).header) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              },
              action: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).action) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              }
            }), this.displayDirective === "show" ? [[vShow, this.mergedShow], [clickoutside, this.handleMenuClickOutside, void 0, {
              capture: true
            }]] : [[clickoutside, this.handleMenuClickOutside, void 0, {
              capture: true
            }]]);
          }
        })
      })]
    }));
  }
});
const dropdownMenuInjectionKey = createInjectionKey("n-dropdown-menu");
const dropdownInjectionKey = createInjectionKey("n-dropdown");
const dropdownOptionInjectionKey = createInjectionKey("n-dropdown-option");
const NDropdownDivider = defineComponent({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  render() {
    return h("div", {
      class: `${this.clsPrefix}-dropdown-divider`
    });
  }
});
const NDropdownGroupHeader = defineComponent({
  name: "DropdownGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      showIconRef,
      hasSubmenuRef
    } = inject(dropdownMenuInjectionKey);
    const {
      renderLabelRef,
      labelFieldRef,
      nodePropsRef,
      renderOptionRef
    } = inject(dropdownInjectionKey);
    return {
      labelField: labelFieldRef,
      showIcon: showIconRef,
      hasSubmenu: hasSubmenuRef,
      renderLabel: renderLabelRef,
      nodeProps: nodePropsRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    var _a;
    const {
      clsPrefix,
      hasSubmenu,
      showIcon,
      nodeProps,
      renderLabel,
      renderOption
    } = this;
    const {
      rawNode
    } = this.tmNode;
    const node = h("div", Object.assign({
      class: `${clsPrefix}-dropdown-option`
    }, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode)), h("div", {
      class: `${clsPrefix}-dropdown-option-body ${clsPrefix}-dropdown-option-body--group`
    }, h("div", {
      "data-dropdown-option": true,
      class: [`${clsPrefix}-dropdown-option-body__prefix`, showIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`]
    }, render(rawNode.icon)), h("div", {
      class: `${clsPrefix}-dropdown-option-body__label`,
      "data-dropdown-option": true
    }, renderLabel ? renderLabel(rawNode) : render((_a = rawNode.title) !== null && _a !== void 0 ? _a : rawNode[this.labelField])), h("div", {
      class: [`${clsPrefix}-dropdown-option-body__suffix`, hasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": true
    })));
    if (renderOption) {
      return renderOption({
        node,
        option: rawNode
      });
    }
    return node;
  }
});
const style$5 = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [cM("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), cM("depth", {
  color: "var(--n-color)"
}, [c$1("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), c$1("svg", {
  height: "1em",
  width: "1em"
})]);
const iconProps = Object.assign(Object.assign({}, useTheme.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
});
const NIcon = defineComponent({
  _n_icon__: true,
  name: "Icon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Icon", "-icon", style$5, iconLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth
      } = props;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      if (depth !== void 0) {
        const {
          color,
          [`opacity${depth}Depth`]: opacity
        } = self2;
        return {
          "--n-bezier": cubicBezierEaseInOut2,
          "--n-color": color,
          "--n-opacity": opacity
        };
      }
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color": "",
        "--n-opacity": ""
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("icon", computed(() => `${props.depth || "d"}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const {
          size,
          color
        } = props;
        return {
          fontSize: formatLength(size),
          color
        };
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $parent,
      depth,
      mergedClsPrefix,
      component,
      onRender,
      themeClass
    } = this;
    if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
      warn("icon", "don't wrap `n-icon` inside `n-icon`");
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("i", mergeProps(this.$attrs, {
      role: "img",
      class: [`${mergedClsPrefix}-icon`, themeClass, {
        [`${mergedClsPrefix}-icon--depth`]: depth,
        [`${mergedClsPrefix}-icon--color-transition`]: depth !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), component ? h(component) : this.$slots);
  }
});
function isSubmenuNode(rawNode, childrenField) {
  return rawNode.type === "submenu" || rawNode.type === void 0 && rawNode[childrenField] !== void 0;
}
function isGroupNode(rawNode) {
  return rawNode.type === "group";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function isRenderNode(rawNode) {
  return rawNode.type === "render";
}
const NDropdownOption = defineComponent({
  name: "DropdownOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    },
    placement: {
      type: String,
      default: "right-start"
    },
    props: Object,
    scrollable: Boolean
  },
  setup(props) {
    const NDropdown2 = inject(dropdownInjectionKey);
    const {
      hoverKeyRef,
      keyboardKeyRef,
      lastToggledSubmenuKeyRef,
      pendingKeyPathRef,
      activeKeyPathRef,
      animatedRef,
      mergedShowRef,
      renderLabelRef,
      renderIconRef,
      labelFieldRef,
      childrenFieldRef,
      renderOptionRef,
      nodePropsRef,
      menuPropsRef
    } = NDropdown2;
    const NDropdownOption2 = inject(dropdownOptionInjectionKey, null);
    const NDropdownMenu2 = inject(dropdownMenuInjectionKey);
    const NPopoverBody2 = inject(popoverBodyInjectionKey);
    const rawNodeRef = computed(() => props.tmNode.rawNode);
    const hasSubmenuRef = computed(() => {
      const {
        value: childrenField
      } = childrenFieldRef;
      return isSubmenuNode(props.tmNode.rawNode, childrenField);
    });
    const mergedDisabledRef = computed(() => {
      const {
        disabled
      } = props.tmNode;
      return disabled;
    });
    const showSubmenuRef = computed(() => {
      if (!hasSubmenuRef.value) return false;
      const {
        key,
        disabled
      } = props.tmNode;
      if (disabled) return false;
      const {
        value: hoverKey
      } = hoverKeyRef;
      const {
        value: keyboardKey
      } = keyboardKeyRef;
      const {
        value: lastToggledSubmenuKey
      } = lastToggledSubmenuKeyRef;
      const {
        value: pendingKeyPath
      } = pendingKeyPathRef;
      if (hoverKey !== null) return pendingKeyPath.includes(key);
      if (keyboardKey !== null) {
        return pendingKeyPath.includes(key) && pendingKeyPath[pendingKeyPath.length - 1] !== key;
      }
      if (lastToggledSubmenuKey !== null) return pendingKeyPath.includes(key);
      return false;
    });
    const shouldDelayRef = computed(() => {
      return keyboardKeyRef.value === null && !animatedRef.value;
    });
    const deferredShowSubmenuRef = useDeferredTrue(showSubmenuRef, 300, shouldDelayRef);
    const parentEnteringSubmenuRef = computed(() => {
      return !!(NDropdownOption2 === null || NDropdownOption2 === void 0 ? void 0 : NDropdownOption2.enteringSubmenuRef.value);
    });
    const enteringSubmenuRef = ref(false);
    provide(dropdownOptionInjectionKey, {
      enteringSubmenuRef
    });
    function handleSubmenuBeforeEnter() {
      enteringSubmenuRef.value = true;
    }
    function handleSubmenuAfterEnter() {
      enteringSubmenuRef.value = false;
    }
    function handleMouseEnter() {
      const {
        parentKey,
        tmNode
      } = props;
      if (tmNode.disabled) return;
      if (!mergedShowRef.value) return;
      lastToggledSubmenuKeyRef.value = parentKey;
      keyboardKeyRef.value = null;
      hoverKeyRef.value = tmNode.key;
    }
    function handleMouseMove() {
      const {
        tmNode
      } = props;
      if (tmNode.disabled) return;
      if (!mergedShowRef.value) return;
      if (hoverKeyRef.value === tmNode.key) return;
      handleMouseEnter();
    }
    function handleMouseLeave(e) {
      if (props.tmNode.disabled) return;
      if (!mergedShowRef.value) return;
      const {
        relatedTarget
      } = e;
      if (relatedTarget && !happensIn({
        target: relatedTarget
      }, "dropdownOption") && !happensIn({
        target: relatedTarget
      }, "scrollbarRail")) {
        hoverKeyRef.value = null;
      }
    }
    function handleClick() {
      const {
        value: hasSubmenu
      } = hasSubmenuRef;
      const {
        tmNode
      } = props;
      if (!mergedShowRef.value) return;
      if (!hasSubmenu && !tmNode.disabled) {
        NDropdown2.doSelect(tmNode.key, tmNode.rawNode);
        NDropdown2.doUpdateShow(false);
      }
    }
    return {
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderIcon: renderIconRef,
      siblingHasIcon: NDropdownMenu2.showIconRef,
      siblingHasSubmenu: NDropdownMenu2.hasSubmenuRef,
      menuProps: menuPropsRef,
      popoverBody: NPopoverBody2,
      animated: animatedRef,
      mergedShowSubmenu: computed(() => {
        return deferredShowSubmenuRef.value && !parentEnteringSubmenuRef.value;
      }),
      rawNode: rawNodeRef,
      hasSubmenu: hasSubmenuRef,
      pending: useMemo(() => {
        const {
          value: pendingKeyPath
        } = pendingKeyPathRef;
        const {
          key
        } = props.tmNode;
        return pendingKeyPath.includes(key);
      }),
      childActive: useMemo(() => {
        const {
          value: activeKeyPath
        } = activeKeyPathRef;
        const {
          key
        } = props.tmNode;
        const index = activeKeyPath.findIndex((k) => key === k);
        if (index === -1) return false;
        return index < activeKeyPath.length - 1;
      }),
      active: useMemo(() => {
        const {
          value: activeKeyPath
        } = activeKeyPathRef;
        const {
          key
        } = props.tmNode;
        const index = activeKeyPath.findIndex((k) => key === k);
        if (index === -1) return false;
        return index === activeKeyPath.length - 1;
      }),
      mergedDisabled: mergedDisabledRef,
      renderOption: renderOptionRef,
      nodeProps: nodePropsRef,
      handleClick,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave,
      handleSubmenuBeforeEnter,
      handleSubmenuAfterEnter
    };
  },
  render() {
    var _a, _b;
    const {
      animated,
      rawNode,
      mergedShowSubmenu,
      clsPrefix,
      siblingHasIcon,
      siblingHasSubmenu,
      renderLabel,
      renderIcon,
      renderOption,
      nodeProps,
      props,
      scrollable
    } = this;
    let submenuVNode = null;
    if (mergedShowSubmenu) {
      const submenuNodeProps = (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.call(this, rawNode, rawNode.children);
      submenuVNode = h(NDropdownMenu, Object.assign({}, submenuNodeProps, {
        clsPrefix,
        scrollable: this.scrollable,
        tmNodes: this.tmNode.children,
        parentKey: this.tmNode.key
      }));
    }
    const builtinProps = {
      class: [`${clsPrefix}-dropdown-option-body`, this.pending && `${clsPrefix}-dropdown-option-body--pending`, this.active && `${clsPrefix}-dropdown-option-body--active`, this.childActive && `${clsPrefix}-dropdown-option-body--child-active`, this.mergedDisabled && `${clsPrefix}-dropdown-option-body--disabled`],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    };
    const optionNodeProps = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h("div", Object.assign({
      class: [`${clsPrefix}-dropdown-option`, optionNodeProps === null || optionNodeProps === void 0 ? void 0 : optionNodeProps.class],
      "data-dropdown-option": true
    }, optionNodeProps), h("div", mergeProps(builtinProps, props), [h("div", {
      class: [`${clsPrefix}-dropdown-option-body__prefix`, siblingHasIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`]
    }, [renderIcon ? renderIcon(rawNode) : render(rawNode.icon)]), h("div", {
      "data-dropdown-option": true,
      class: `${clsPrefix}-dropdown-option-body__label`
    }, renderLabel ? renderLabel(rawNode) : render((_b = rawNode[this.labelField]) !== null && _b !== void 0 ? _b : rawNode.title)), h("div", {
      "data-dropdown-option": true,
      class: [`${clsPrefix}-dropdown-option-body__suffix`, siblingHasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? h(NIcon, null, {
      default: () => h(ChevronRightIcon, null)
    }) : null)]), this.hasSubmenu ? h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h("div", {
          class: `${clsPrefix}-dropdown-offset-container`
        }, h(VFollower, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: scrollable ? this.popoverBody || void 0 : void 0,
          teleportDisabled: !scrollable
        }, {
          default: () => {
            return h("div", {
              class: `${clsPrefix}-dropdown-menu-wrapper`
            }, animated ? h(Transition, {
              onBeforeEnter: this.handleSubmenuBeforeEnter,
              onAfterEnter: this.handleSubmenuAfterEnter,
              name: "fade-in-scale-up-transition",
              appear: true
            }, {
              default: () => submenuVNode
            }) : submenuVNode);
          }
        }))
      })]
    }) : null);
    if (renderOption) {
      return renderOption({
        node,
        option: rawNode
      });
    }
    return node;
  }
});
const NDropdownGroup = defineComponent({
  name: "NDropdownGroup",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  render() {
    const {
      tmNode,
      parentKey,
      clsPrefix
    } = this;
    const {
      children
    } = tmNode;
    return h(Fragment, null, h(NDropdownGroupHeader, {
      clsPrefix,
      tmNode,
      key: tmNode.key
    }), children === null || children === void 0 ? void 0 : children.map((child) => {
      const {
        rawNode
      } = child;
      if (rawNode.show === false) return null;
      if (isDividerNode(rawNode)) {
        return h(NDropdownDivider, {
          clsPrefix,
          key: child.key
        });
      }
      if (child.isGroup) {
        warn("dropdown", "`group` node is not allowed to be put in `group` node.");
        return null;
      }
      return h(NDropdownOption, {
        clsPrefix,
        tmNode: child,
        parentKey,
        key: child.key
      });
    }));
  }
});
const NDropdownRenderOption = defineComponent({
  name: "DropdownRenderOption",
  props: {
    tmNode: {
      type: Object,
      required: true
    }
  },
  render() {
    const {
      rawNode: {
        render: render10,
        props
      }
    } = this.tmNode;
    return h("div", props, [render10 === null || render10 === void 0 ? void 0 : render10()]);
  }
});
const NDropdownMenu = defineComponent({
  name: "DropdownMenu",
  props: {
    scrollable: Boolean,
    showArrow: Boolean,
    arrowStyle: [String, Object],
    clsPrefix: {
      type: String,
      required: true
    },
    tmNodes: {
      type: Array,
      default: () => []
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  setup(props) {
    const {
      renderIconRef,
      childrenFieldRef
    } = inject(dropdownInjectionKey);
    provide(dropdownMenuInjectionKey, {
      showIconRef: computed(() => {
        const renderIcon = renderIconRef.value;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({
              rawNode: rawChild
            }) => renderIcon ? renderIcon(rawChild) : rawChild.icon);
          }
          const {
            rawNode
          } = tmNode;
          return renderIcon ? renderIcon(rawNode) : rawNode.icon;
        });
      }),
      hasSubmenuRef: computed(() => {
        const {
          value: childrenField
        } = childrenFieldRef;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({
              rawNode: rawChild
            }) => isSubmenuNode(rawChild, childrenField));
          }
          const {
            rawNode
          } = tmNode;
          return isSubmenuNode(rawNode, childrenField);
        });
      })
    });
    const bodyRef = ref(null);
    provide(modalBodyInjectionKey, null);
    provide(drawerBodyInjectionKey, null);
    provide(popoverBodyInjectionKey, bodyRef);
    return {
      bodyRef
    };
  },
  render() {
    const {
      parentKey,
      clsPrefix,
      scrollable
    } = this;
    const menuOptionsNode = this.tmNodes.map((tmNode) => {
      const {
        rawNode
      } = tmNode;
      if (rawNode.show === false) return null;
      if (isRenderNode(rawNode)) {
        return h(NDropdownRenderOption, {
          tmNode,
          key: tmNode.key
        });
      }
      if (isDividerNode(rawNode)) {
        return h(NDropdownDivider, {
          clsPrefix,
          key: tmNode.key
        });
      }
      if (isGroupNode(rawNode)) {
        return h(NDropdownGroup, {
          clsPrefix,
          tmNode,
          parentKey,
          key: tmNode.key
        });
      }
      return h(NDropdownOption, {
        clsPrefix,
        tmNode,
        parentKey,
        key: tmNode.key,
        props: rawNode.props,
        scrollable
      });
    });
    return h("div", {
      class: [`${clsPrefix}-dropdown-menu`, scrollable && `${clsPrefix}-dropdown-menu--scrollable`],
      ref: "bodyRef"
    }, scrollable ? h(XScrollbar, {
      contentClass: `${clsPrefix}-dropdown-menu__content`
    }, {
      default: () => menuOptionsNode
    }) : menuOptionsNode, this.showArrow ? renderArrow({
      clsPrefix,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
});
const style$4 = cB("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [fadeInScaleUpTransition(), cB("dropdown-option", `
 position: relative;
 `, [c$1("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), cNotM("disabled", [cM("pending", `
 color: var(--n-option-text-color-hover);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), c$1("&::before", "background-color: var(--n-option-color-hover);")]), cM("active", `
 color: var(--n-option-text-color-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), c$1("&::before", "background-color: var(--n-option-color-active);")]), cM("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), cM("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [cE("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [cM("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), cE("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [cM("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cE("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), cE("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [cM("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cB("dropdown-menu", "pointer-events: all;")]), cB("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), cB("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), cB("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("scrollable", `
 padding: var(--n-padding);
 `), cM("scrollable", [cE("content", `
 padding: var(--n-padding);
 `)])]);
const dropdownBaseProps = {
  animated: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  size: String,
  inverted: Boolean,
  placement: {
    type: String,
    default: "bottom"
  },
  onSelect: [Function, Array],
  options: {
    type: Array,
    default: () => []
  },
  menuProps: Function,
  showArrow: Boolean,
  renderLabel: Function,
  renderIcon: Function,
  renderOption: Function,
  nodeProps: Function,
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  // for menu, not documented
  value: [String, Number]
};
const popoverPropKeys = Object.keys(popoverBaseProps);
const dropdownProps = Object.assign(Object.assign(Object.assign({}, popoverBaseProps), dropdownBaseProps), useTheme.props);
const NDropdown = defineComponent({
  name: "Dropdown",
  inheritAttrs: false,
  props: dropdownProps,
  setup(props) {
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const treemateRef = computed(() => {
      const {
        keyField,
        childrenField
      } = props;
      return createTreeMate(props.options, {
        getKey(node) {
          return node[keyField];
        },
        getDisabled(node) {
          return node.disabled === true;
        },
        getIgnored(node) {
          return node.type === "divider" || node.type === "render";
        },
        getChildren(node) {
          return node[childrenField];
        }
      });
    });
    const tmNodesRef = computed(() => {
      return treemateRef.value.treeNodes;
    });
    const hoverKeyRef = ref(null);
    const keyboardKeyRef = ref(null);
    const lastToggledSubmenuKeyRef = ref(null);
    const pendingKeyRef = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = hoverKeyRef.value) !== null && _a !== void 0 ? _a : keyboardKeyRef.value) !== null && _b !== void 0 ? _b : lastToggledSubmenuKeyRef.value) !== null && _c !== void 0 ? _c : null;
    });
    const pendingKeyPathRef = computed(() => treemateRef.value.getPath(pendingKeyRef.value).keyPath);
    const activeKeyPathRef = computed(() => treemateRef.value.getPath(props.value).keyPath);
    const keyboardEnabledRef = useMemo(() => {
      return props.keyboard && mergedShowRef.value;
    });
    useKeyboard({
      keydown: {
        ArrowUp: {
          prevent: true,
          handler: handleKeydownUp
        },
        ArrowRight: {
          prevent: true,
          handler: handleKeydownRight
        },
        ArrowDown: {
          prevent: true,
          handler: handleKeydownDown
        },
        ArrowLeft: {
          prevent: true,
          handler: handleKeydownLeft
        },
        Enter: {
          prevent: true,
          handler: handleKeydownEnter
        },
        Escape: handleKeydownEsc
      }
    }, keyboardEnabledRef);
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const mergedSizeRef = computed(() => {
      var _a, _b;
      return props.size || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Dropdown) === null || _b === void 0 ? void 0 : _b.size) || "medium";
    });
    const themeRef = useTheme("Dropdown", "-dropdown", style$4, dropdownLight, props, mergedClsPrefixRef);
    provide(dropdownInjectionKey, {
      labelFieldRef: toRef(props, "labelField"),
      childrenFieldRef: toRef(props, "childrenField"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderIconRef: toRef(props, "renderIcon"),
      hoverKeyRef,
      keyboardKeyRef,
      lastToggledSubmenuKeyRef,
      pendingKeyPathRef,
      activeKeyPathRef,
      animatedRef: toRef(props, "animated"),
      mergedShowRef,
      nodePropsRef: toRef(props, "nodeProps"),
      renderOptionRef: toRef(props, "renderOption"),
      menuPropsRef: toRef(props, "menuProps"),
      doSelect,
      doUpdateShow
    });
    watch(mergedShowRef, (value) => {
      if (!props.animated && !value) {
        clearPendingState();
      }
    });
    function doSelect(key, node) {
      const {
        onSelect
      } = props;
      if (onSelect) call(onSelect, key, node);
    }
    function doUpdateShow(value) {
      const {
        "onUpdate:show": _onUpdateShow,
        onUpdateShow
      } = props;
      if (_onUpdateShow) call(_onUpdateShow, value);
      if (onUpdateShow) call(onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function clearPendingState() {
      hoverKeyRef.value = null;
      keyboardKeyRef.value = null;
      lastToggledSubmenuKeyRef.value = null;
    }
    function handleKeydownEsc() {
      doUpdateShow(false);
    }
    function handleKeydownLeft() {
      handleKeydown("left");
    }
    function handleKeydownRight() {
      handleKeydown("right");
    }
    function handleKeydownUp() {
      handleKeydown("up");
    }
    function handleKeydownDown() {
      handleKeydown("down");
    }
    function handleKeydownEnter() {
      const pendingNode = getPendingNode();
      if ((pendingNode === null || pendingNode === void 0 ? void 0 : pendingNode.isLeaf) && mergedShowRef.value) {
        doSelect(pendingNode.key, pendingNode.rawNode);
        doUpdateShow(false);
      }
    }
    function getPendingNode() {
      var _a;
      const {
        value: treeMate
      } = treemateRef;
      const {
        value: pendingKey
      } = pendingKeyRef;
      if (!treeMate || pendingKey === null) return null;
      return (_a = treeMate.getNode(pendingKey)) !== null && _a !== void 0 ? _a : null;
    }
    function handleKeydown(direction) {
      const {
        value: pendingKey
      } = pendingKeyRef;
      const {
        value: {
          getFirstAvailableNode: getFirstAvailableNode2
        }
      } = treemateRef;
      let nextKeyboardKey = null;
      if (pendingKey === null) {
        const firstNode = getFirstAvailableNode2();
        if (firstNode !== null) {
          nextKeyboardKey = firstNode.key;
        }
      } else {
        const currentNode = getPendingNode();
        if (currentNode) {
          let nextNode;
          switch (direction) {
            case "down":
              nextNode = currentNode.getNext();
              break;
            case "up":
              nextNode = currentNode.getPrev();
              break;
            case "right":
              nextNode = currentNode.getChild();
              break;
            case "left":
              nextNode = currentNode.getParent();
              break;
          }
          if (nextNode) nextKeyboardKey = nextNode.key;
        }
      }
      if (nextKeyboardKey !== null) {
        hoverKeyRef.value = null;
        keyboardKeyRef.value = nextKeyboardKey;
      }
    }
    const cssVarsRef = computed(() => {
      const {
        inverted
      } = props;
      const size = mergedSizeRef.value;
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: self2
      } = themeRef.value;
      const {
        padding,
        dividerColor,
        borderRadius,
        optionOpacityDisabled,
        [createKey("optionIconSuffixWidth", size)]: optionIconSuffixWidth,
        [createKey("optionSuffixWidth", size)]: optionSuffixWidth,
        [createKey("optionIconPrefixWidth", size)]: optionIconPrefixWidth,
        [createKey("optionPrefixWidth", size)]: optionPrefixWidth,
        [createKey("fontSize", size)]: fontSize,
        [createKey("optionHeight", size)]: optionHeight,
        [createKey("optionIconSize", size)]: optionIconSize
      } = self2;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-font-size": fontSize,
        "--n-padding": padding,
        "--n-border-radius": borderRadius,
        "--n-option-height": optionHeight,
        "--n-option-prefix-width": optionPrefixWidth,
        "--n-option-icon-prefix-width": optionIconPrefixWidth,
        "--n-option-suffix-width": optionSuffixWidth,
        "--n-option-icon-suffix-width": optionIconSuffixWidth,
        "--n-option-icon-size": optionIconSize,
        "--n-divider-color": dividerColor,
        "--n-option-opacity-disabled": optionOpacityDisabled
      };
      if (inverted) {
        vars["--n-color"] = self2.colorInverted;
        vars["--n-option-color-hover"] = self2.optionColorHoverInverted;
        vars["--n-option-color-active"] = self2.optionColorActiveInverted;
        vars["--n-option-text-color"] = self2.optionTextColorInverted;
        vars["--n-option-text-color-hover"] = self2.optionTextColorHoverInverted;
        vars["--n-option-text-color-active"] = self2.optionTextColorActiveInverted;
        vars["--n-option-text-color-child-active"] = self2.optionTextColorChildActiveInverted;
        vars["--n-prefix-color"] = self2.prefixColorInverted;
        vars["--n-suffix-color"] = self2.suffixColorInverted;
        vars["--n-group-header-text-color"] = self2.groupHeaderTextColorInverted;
      } else {
        vars["--n-color"] = self2.color;
        vars["--n-option-color-hover"] = self2.optionColorHover;
        vars["--n-option-color-active"] = self2.optionColorActive;
        vars["--n-option-text-color"] = self2.optionTextColor;
        vars["--n-option-text-color-hover"] = self2.optionTextColorHover;
        vars["--n-option-text-color-active"] = self2.optionTextColorActive;
        vars["--n-option-text-color-child-active"] = self2.optionTextColorChildActive;
        vars["--n-prefix-color"] = self2.prefixColor;
        vars["--n-suffix-color"] = self2.suffixColor;
        vars["--n-group-header-text-color"] = self2.groupHeaderTextColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dropdown", computed(() => `${mergedSizeRef.value[0]}${props.inverted ? "i" : ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      mergedSize: mergedSizeRef,
      // data
      tmNodes: tmNodesRef,
      // show
      mergedShow: mergedShowRef,
      // methods
      handleAfterLeave: () => {
        if (!props.animated) return;
        clearPendingState();
      },
      doUpdateShow,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const renderPopoverBody = (className, ref2, style2, onMouseenter, onMouseleave) => {
      var _a;
      const {
        mergedClsPrefix,
        menuProps
      } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const menuNodeProps = (menuProps === null || menuProps === void 0 ? void 0 : menuProps(void 0, this.tmNodes.map((v) => v.rawNode))) || {};
      const dropdownProps2 = {
        ref: createRefSetter(ref2),
        class: [className, `${mergedClsPrefix}-dropdown`, `${mergedClsPrefix}-dropdown--${this.mergedSize}-size`, this.themeClass],
        clsPrefix: mergedClsPrefix,
        tmNodes: this.tmNodes,
        style: [...style2, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter,
        onMouseleave
      };
      return h(NDropdownMenu, mergeProps(this.$attrs, dropdownProps2, menuNodeProps));
    };
    const {
      mergedTheme
    } = this;
    const popoverProps2 = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return h(NPopover, Object.assign({}, keep(this.$props, popoverPropKeys), popoverProps2), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
const style$3 = cB("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [cNotM("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM("no-title", `
 display: flex;
 align-items: center;
 `)]), cE("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), cM("title-position-left", [cE("line", [cM("left", {
  width: "28px"
})])]), cM("title-position-right", [cE("line", [cM("right", {
  width: "28px"
})])]), cM("dashed", [cE("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), cM("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), cE("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), cNotM("dashed", [cE("line", {
  backgroundColor: "var(--n-color)"
})]), cM("dashed", [cE("line", {
  borderColor: "var(--n-color)"
})]), cM("vertical", {
  backgroundColor: "var(--n-color)"
})]);
const dividerProps = Object.assign(Object.assign({}, useTheme.props), {
  titlePlacement: {
    type: String,
    default: "center"
  },
  dashed: Boolean,
  vertical: Boolean
});
const NDivider = defineComponent({
  name: "Divider",
  props: dividerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Divider", "-divider", style$3, dividerLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          color,
          textColor,
          fontWeight
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("divider", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      role: "separator",
      class: [`${mergedClsPrefix}-divider`, this.themeClass, {
        [`${mergedClsPrefix}-divider--vertical`]: vertical,
        [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
        [`${mergedClsPrefix}-divider--dashed`]: dashed,
        [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
      }],
      style: cssVars
    }, !vertical ? h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
    }) : null, !vertical && $slots.default ? h(Fragment, null, h("div", {
      class: `${mergedClsPrefix}-divider__title`
    }, this.$slots), h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
    })) : null);
  }
});
const formInjectionKey = createInjectionKey("n-form");
const formItemInstsInjectionKey = createInjectionKey("n-form-item-insts");
const style$2 = cB("form", [cM("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [cB("form-item", {
  width: "auto",
  marginRight: "18px"
}, [c$1("&:last-child", {
  marginRight: 0
})])])]);
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const formProps = Object.assign(Object.assign({}, useTheme.props), {
  inline: Boolean,
  labelWidth: [Number, String],
  labelAlign: String,
  labelPlacement: {
    type: String,
    default: "top"
  },
  model: {
    type: Object,
    default: () => {
    }
  },
  rules: Object,
  disabled: Boolean,
  size: String,
  showRequireMark: {
    type: Boolean,
    default: void 0
  },
  requireMarkPlacement: String,
  showFeedback: {
    type: Boolean,
    default: true
  },
  onSubmit: {
    type: Function,
    default: (e) => {
      e.preventDefault();
    }
  },
  showLabel: {
    type: Boolean,
    default: void 0
  },
  validateMessages: Object
});
const NForm = defineComponent({
  name: "Form",
  props: formProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useTheme("Form", "-form", style$2, formLight, props, mergedClsPrefixRef);
    const formItems = {};
    const maxChildLabelWidthRef = ref(void 0);
    const deriveMaxChildLabelWidth = (currentWidth) => {
      const currentMaxChildLabelWidth = maxChildLabelWidthRef.value;
      if (currentMaxChildLabelWidth === void 0 || currentWidth >= currentMaxChildLabelWidth) {
        maxChildLabelWidthRef.value = currentWidth;
      }
    };
    function invalidateLabelWidth() {
      var _a;
      for (const key of keysOf(formItems)) {
        const formItemInstances = formItems[key];
        for (const formItemInstance of formItemInstances) {
          (_a = formItemInstance.invalidateLabelWidth) === null || _a === void 0 ? void 0 : _a.call(formItemInstance);
        }
      }
    }
    function validate(validateCallback_1) {
      return __awaiter$1(this, arguments, void 0, function* (validateCallback, shouldRuleBeApplied = () => true) {
        return yield new Promise((resolve, reject) => {
          const formItemValidationPromises = [];
          for (const key of keysOf(formItems)) {
            const formItemInstances = formItems[key];
            for (const formItemInstance of formItemInstances) {
              if (formItemInstance.path) {
                formItemValidationPromises.push(formItemInstance.internalValidate(null, shouldRuleBeApplied));
              }
            }
          }
          void Promise.all(formItemValidationPromises).then((results) => {
            const formInvalid = results.some((result) => !result.valid);
            const errors = [];
            const warnings = [];
            results.forEach((result) => {
              var _a, _b;
              if ((_a = result.errors) === null || _a === void 0 ? void 0 : _a.length) {
                errors.push(result.errors);
              }
              if ((_b = result.warnings) === null || _b === void 0 ? void 0 : _b.length) {
                warnings.push(result.warnings);
              }
            });
            if (validateCallback) {
              validateCallback(errors.length ? errors : void 0, {
                warnings: warnings.length ? warnings : void 0
              });
            }
            if (formInvalid) {
              reject(errors.length ? errors : void 0);
            } else {
              resolve({
                warnings: warnings.length ? warnings : void 0
              });
            }
          });
        });
      });
    }
    function restoreValidation() {
      for (const key of keysOf(formItems)) {
        const formItemInstances = formItems[key];
        for (const formItemInstance of formItemInstances) {
          formItemInstance.restoreValidation();
        }
      }
    }
    provide(formInjectionKey, {
      props,
      maxChildLabelWidthRef,
      deriveMaxChildLabelWidth
    });
    provide(formItemInstsInjectionKey, {
      formItems
    });
    const formExposedMethod = {
      validate,
      restoreValidation,
      invalidateLabelWidth
    };
    return Object.assign(formExposedMethod, {
      mergedClsPrefix: mergedClsPrefixRef
    });
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("form", {
      class: [`${mergedClsPrefix}-form`, this.inline && `${mergedClsPrefix}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper2);
    }
    function Wrapper2() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper2.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper2,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper2, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len2 = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len2) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ (function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
})(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = (function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
});
var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len2 = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len2) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ (function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
})();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;
const {
  cubicBezierEaseInOut
} = commonVariables$2;
function fadeDownTransition({
  name = "fade-down",
  fromOffset = "-4px",
  enterDuration = ".3s",
  leaveDuration = ".3s",
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
} = {}) {
  return [c$1(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${fromOffset})`
  }), c$1(`&.${name}-transition-enter-to, &.${name}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), c$1(`&.${name}-transition-leave-active`, {
    transition: `opacity ${leaveDuration} ${leaveCubicBezier}, transform ${leaveDuration} ${leaveCubicBezier}`
  }), c$1(`&.${name}-transition-enter-active`, {
    transition: `opacity ${enterDuration} ${enterCubicBezier}, transform ${enterDuration} ${enterCubicBezier}`
  })];
}
const style$1 = cB("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [cB("form-item-label", `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [cE("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), cE("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), cB("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), cM("auto-label-width", [cB("form-item-label", "white-space: nowrap;")]), cM("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [cB("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [cM("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), cM("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), cM("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cM("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cE("text", `
 grid-area: text; 
 `), cE("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), cM("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [cM("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), cB("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), cB("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), cB("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [c$1("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), cB("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [cM("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), cM("error", {
  color: "var(--n-feedback-text-color-error)"
}), fadeDownTransition({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function formItemSize(props) {
  const NForm2 = inject(formInjectionKey, null);
  const {
    mergedComponentPropsRef
  } = useConfig(props);
  return {
    mergedSize: computed(() => {
      var _a, _b;
      if (props.size !== void 0) return props.size;
      if ((NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.size) !== void 0) return NForm2.props.size;
      const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Form) === null || _b === void 0 ? void 0 : _b.size;
      if (configSize) return configSize;
      return "medium";
    })
  };
}
function formItemMisc(props) {
  const NForm2 = inject(formInjectionKey, null);
  const mergedLabelPlacementRef = computed(() => {
    const {
      labelPlacement
    } = props;
    if (labelPlacement !== void 0) return labelPlacement;
    if (NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.labelPlacement) return NForm2.props.labelPlacement;
    return "top";
  });
  const isAutoLabelWidthRef = computed(() => {
    return mergedLabelPlacementRef.value === "left" && (props.labelWidth === "auto" || (NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.labelWidth) === "auto");
  });
  const mergedLabelWidthRef = computed(() => {
    if (mergedLabelPlacementRef.value === "top") return;
    const {
      labelWidth
    } = props;
    if (labelWidth !== void 0 && labelWidth !== "auto") {
      return formatLength(labelWidth);
    }
    if (isAutoLabelWidthRef.value) {
      const autoComputedWidth = NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.maxChildLabelWidthRef.value;
      if (autoComputedWidth !== void 0) {
        return formatLength(autoComputedWidth);
      } else {
        return void 0;
      }
    }
    if ((NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.labelWidth) !== void 0) {
      return formatLength(NForm2.props.labelWidth);
    }
    return void 0;
  });
  const mergedLabelAlignRef = computed(() => {
    const {
      labelAlign
    } = props;
    if (labelAlign) return labelAlign;
    if (NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.labelAlign) return NForm2.props.labelAlign;
    return void 0;
  });
  const mergedLabelStyleRef = computed(() => {
    var _a;
    return [(_a = props.labelProps) === null || _a === void 0 ? void 0 : _a.style, props.labelStyle, {
      width: mergedLabelWidthRef.value
    }];
  });
  const mergedShowRequireMarkRef = computed(() => {
    const {
      showRequireMark
    } = props;
    if (showRequireMark !== void 0) return showRequireMark;
    return NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.showRequireMark;
  });
  const mergedRequireMarkPlacementRef = computed(() => {
    const {
      requireMarkPlacement
    } = props;
    if (requireMarkPlacement !== void 0) return requireMarkPlacement;
    return (NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.requireMarkPlacement) || "right";
  });
  const validationErroredRef = ref(false);
  const validationWarnedRef = ref(false);
  const mergedValidationStatusRef = computed(() => {
    const {
      validationStatus
    } = props;
    if (validationStatus !== void 0) return validationStatus;
    if (validationErroredRef.value) return "error";
    if (validationWarnedRef.value) return "warning";
    return void 0;
  });
  const mergedShowFeedbackRef = computed(() => {
    const {
      showFeedback
    } = props;
    if (showFeedback !== void 0) return showFeedback;
    if ((NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.showFeedback) !== void 0) return NForm2.props.showFeedback;
    return true;
  });
  const mergedShowLabelRef = computed(() => {
    const {
      showLabel
    } = props;
    if (showLabel !== void 0) return showLabel;
    if ((NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props.showLabel) !== void 0) return NForm2.props.showLabel;
    return true;
  });
  return {
    validationErrored: validationErroredRef,
    validationWarned: validationWarnedRef,
    mergedLabelStyle: mergedLabelStyleRef,
    mergedLabelPlacement: mergedLabelPlacementRef,
    mergedLabelAlign: mergedLabelAlignRef,
    mergedShowRequireMark: mergedShowRequireMarkRef,
    mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
    mergedValidationStatus: mergedValidationStatusRef,
    mergedShowFeedback: mergedShowFeedbackRef,
    mergedShowLabel: mergedShowLabelRef,
    isAutoLabelWidth: isAutoLabelWidthRef
  };
}
function formItemRule(props) {
  const NForm2 = inject(formInjectionKey, null);
  const compatibleRulePathRef = computed(() => {
    const {
      rulePath
    } = props;
    if (rulePath !== void 0) return rulePath;
    const {
      path
    } = props;
    if (path !== void 0) return path;
    return void 0;
  });
  const mergedRulesRef = computed(() => {
    const rules2 = [];
    const {
      rule
    } = props;
    if (rule !== void 0) {
      if (Array.isArray(rule)) rules2.push(...rule);
      else rules2.push(rule);
    }
    if (NForm2) {
      const {
        rules: formRules
      } = NForm2.props;
      const {
        value: rulePath
      } = compatibleRulePathRef;
      if (formRules !== void 0 && rulePath !== void 0) {
        const formRule = get(formRules, rulePath);
        if (formRule !== void 0) {
          if (Array.isArray(formRule)) {
            rules2.push(...formRule);
          } else {
            rules2.push(formRule);
          }
        }
      }
    }
    return rules2;
  });
  const hasRequiredRuleRef = computed(() => {
    return mergedRulesRef.value.some((rule) => rule.required);
  });
  const mergedRequiredRef = computed(() => {
    return hasRequiredRuleRef.value || props.required;
  });
  return {
    mergedRules: mergedRulesRef,
    mergedRequired: mergedRequiredRef
  };
}
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const formItemProps = Object.assign(Object.assign({}, useTheme.props), {
  label: String,
  labelWidth: [Number, String],
  labelStyle: [String, Object],
  labelAlign: String,
  labelPlacement: String,
  path: String,
  first: Boolean,
  rulePath: String,
  required: Boolean,
  showRequireMark: {
    type: Boolean,
    default: void 0
  },
  requireMarkPlacement: String,
  showFeedback: {
    type: Boolean,
    default: void 0
  },
  rule: [Object, Array],
  size: String,
  ignorePathChange: Boolean,
  validationStatus: String,
  feedback: String,
  feedbackClass: String,
  feedbackStyle: [String, Object],
  showLabel: {
    type: Boolean,
    default: void 0
  },
  labelProps: Object,
  contentClass: String,
  contentStyle: [String, Object]
});
function wrapValidator(validator, async) {
  return (...args) => {
    try {
      const validateResult = validator(...args);
      if (!async && (typeof validateResult === "boolean" || validateResult instanceof Error || Array.isArray(validateResult)) || (validateResult === null || validateResult === void 0 ? void 0 : validateResult.then)) {
        return validateResult;
      } else if (validateResult === void 0) {
        return true;
      } else {
        warn("form-item/validate", `You return a ${typeof validateResult} typed value in the validator method, which is not recommended. Please use ${async ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`);
        return true;
      }
    } catch (err) {
      warn("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation.");
      console.error(err);
      return void 0;
    }
  };
}
const NFormItem = defineComponent({
  name: "FormItem",
  props: formItemProps,
  slots: Object,
  setup(props) {
    useInjectionInstanceCollection(formItemInstsInjectionKey, "formItems", toRef(props, "path"));
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const NForm2 = inject(formInjectionKey, null);
    const formItemSizeRefs = formItemSize(props);
    const formItemMiscRefs = formItemMisc(props);
    const {
      validationErrored: validationErroredRef,
      validationWarned: validationWarnedRef
    } = formItemMiscRefs;
    const {
      mergedRequired: mergedRequiredRef,
      mergedRules: mergedRulesRef
    } = formItemRule(props);
    const {
      mergedSize: mergedSizeRef
    } = formItemSizeRefs;
    const {
      mergedLabelPlacement: labelPlacementRef,
      mergedLabelAlign: labelTextAlignRef,
      mergedRequireMarkPlacement: mergedRequireMarkPlacementRef
    } = formItemMiscRefs;
    const renderExplainsRef = ref([]);
    const feedbackIdRef = ref(createId());
    const labelElementRef = ref(null);
    const mergedDisabledRef = NForm2 ? toRef(NForm2.props, "disabled") : ref(false);
    const themeRef = useTheme("Form", "-form-item", style$1, formLight, props, mergedClsPrefixRef);
    watch(toRef(props, "path"), () => {
      if (props.ignorePathChange) return;
      restoreValidation();
    });
    function invalidateLabelWidth() {
      if (!formItemMiscRefs.isAutoLabelWidth.value) return;
      const labelElement = labelElementRef.value;
      if (labelElement !== null) {
        const memoizedWhitespace = labelElement.style.whiteSpace;
        labelElement.style.whiteSpace = "nowrap";
        labelElement.style.width = "";
        NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.deriveMaxChildLabelWidth(Number(getComputedStyle(labelElement).width.slice(0, -2)));
        labelElement.style.whiteSpace = memoizedWhitespace;
      }
    }
    function restoreValidation() {
      renderExplainsRef.value = [];
      validationErroredRef.value = false;
      validationWarnedRef.value = false;
      if (props.feedback) {
        feedbackIdRef.value = createId();
      }
    }
    const internalValidate = (...args_1) => __awaiter(this, [...args_1], void 0, function* (trigger = null, shouldRuleBeApplied = () => true, options = {
      suppressWarning: true
    }) {
      const {
        path
      } = props;
      if (!options) {
        options = {};
      } else {
        if (!options.first) options.first = props.first;
      }
      const {
        value: rules2
      } = mergedRulesRef;
      const value = NForm2 ? get(NForm2.props.model, path || "") : void 0;
      const messageRenderers = {};
      const originalMessageRendersMessage = {};
      const activeRules = (!trigger ? rules2 : rules2.filter((rule) => {
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      })).filter(shouldRuleBeApplied).map((rule, i) => {
        const shallowClonedRule = Object.assign({}, rule);
        if (shallowClonedRule.validator) {
          shallowClonedRule.validator = wrapValidator(shallowClonedRule.validator, false);
        }
        if (shallowClonedRule.asyncValidator) {
          shallowClonedRule.asyncValidator = wrapValidator(shallowClonedRule.asyncValidator, true);
        }
        if (shallowClonedRule.renderMessage) {
          const rendererKey = `__renderMessage__${i}`;
          originalMessageRendersMessage[rendererKey] = shallowClonedRule.message;
          shallowClonedRule.message = rendererKey;
          messageRenderers[rendererKey] = shallowClonedRule.renderMessage;
        }
        return shallowClonedRule;
      });
      const activeErrorRules = activeRules.filter((r) => r.level !== "warning");
      const activeWarningRules = activeRules.filter((r) => r.level === "warning");
      const validationResult = {
        valid: true,
        errors: void 0,
        warnings: void 0
      };
      if (!activeRules.length) return validationResult;
      const mergedPath = path !== null && path !== void 0 ? path : "__n_no_path__";
      const validator = new Schema({
        [mergedPath]: activeErrorRules
      });
      const warningValidator = new Schema({
        [mergedPath]: activeWarningRules
      });
      const {
        validateMessages
      } = (NForm2 === null || NForm2 === void 0 ? void 0 : NForm2.props) || {};
      if (validateMessages) {
        validator.messages(validateMessages);
        warningValidator.messages(validateMessages);
      }
      const renderMessages = (errors) => {
        renderExplainsRef.value = errors.map((error) => {
          const transformedMessage = (error === null || error === void 0 ? void 0 : error.message) || "";
          return {
            key: transformedMessage,
            render: () => {
              if (transformedMessage.startsWith("__renderMessage__")) {
                return messageRenderers[transformedMessage]();
              }
              return transformedMessage;
            }
          };
        });
        errors.forEach((error) => {
          var _a;
          if ((_a = error.message) === null || _a === void 0 ? void 0 : _a.startsWith("__renderMessage__")) {
            error.message = originalMessageRendersMessage[error.message];
          }
        });
      };
      if (activeErrorRules.length) {
        const errors = yield new Promise((resolve) => {
          void validator.validate({
            [mergedPath]: value
          }, options, resolve);
        });
        if (errors === null || errors === void 0 ? void 0 : errors.length) {
          validationResult.valid = false;
          validationResult.errors = errors;
          renderMessages(errors);
        }
      }
      if (activeWarningRules.length && !validationResult.errors) {
        const warnings = yield new Promise((resolve) => {
          void warningValidator.validate({
            [mergedPath]: value
          }, options, resolve);
        });
        if (warnings === null || warnings === void 0 ? void 0 : warnings.length) {
          renderMessages(warnings);
          validationResult.warnings = warnings;
        }
      }
      if (!validationResult.errors && !validationResult.warnings) {
        restoreValidation();
      } else {
        validationErroredRef.value = !!validationResult.errors;
        validationWarnedRef.value = !!validationResult.warnings;
      }
      return validationResult;
    });
    function handleContentBlur() {
      void internalValidate("blur");
    }
    function handleContentChange() {
      void internalValidate("change");
    }
    function handleContentFocus() {
      void internalValidate("focus");
    }
    function handleContentInput() {
      void internalValidate("input");
    }
    function validate(options, callback) {
      return __awaiter(this, void 0, void 0, function* () {
        let trigger;
        let validateCallback;
        let shouldRuleBeApplied;
        let asyncValidatorOptions;
        if (typeof options === "string") {
          trigger = options;
          validateCallback = callback;
        } else if (options !== null && typeof options === "object") {
          trigger = options.trigger;
          validateCallback = options.callback;
          shouldRuleBeApplied = options.shouldRuleBeApplied;
          asyncValidatorOptions = options.options;
        }
        return yield new Promise((resolve, reject) => {
          void internalValidate(trigger, shouldRuleBeApplied, asyncValidatorOptions).then(({
            valid,
            errors,
            warnings
          }) => {
            if (valid) {
              if (validateCallback) {
                validateCallback(void 0, {
                  warnings
                });
              }
              resolve({
                warnings
              });
            } else {
              if (validateCallback) {
                validateCallback(errors, {
                  warnings
                });
              }
              reject(errors);
            }
          });
        });
      });
    }
    provide(formItemInjectionKey, {
      path: toRef(props, "path"),
      disabled: mergedDisabledRef,
      mergedSize: formItemSizeRefs.mergedSize,
      mergedValidationStatus: formItemMiscRefs.mergedValidationStatus,
      restoreValidation,
      handleContentBlur,
      handleContentChange,
      handleContentFocus,
      handleContentInput
    });
    const exposedRef = {
      validate,
      restoreValidation,
      internalValidate,
      invalidateLabelWidth
    };
    onMounted(invalidateLabelWidth);
    const cssVarsRef = computed(() => {
      var _a;
      const {
        value: size
      } = mergedSizeRef;
      const {
        value: labelPlacement
      } = labelPlacementRef;
      const direction = labelPlacement === "top" ? "vertical" : "horizontal";
      const {
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        },
        self: {
          labelTextColor,
          asteriskColor,
          lineHeight,
          feedbackTextColor,
          feedbackTextColorWarning,
          feedbackTextColorError,
          feedbackPadding,
          labelFontWeight,
          [createKey("labelHeight", size)]: labelHeight,
          [createKey("blankHeight", size)]: blankHeight,
          [createKey("feedbackFontSize", size)]: feedbackFontSize,
          [createKey("feedbackHeight", size)]: feedbackHeight,
          [createKey("labelPadding", direction)]: labelPadding,
          [createKey("labelTextAlign", direction)]: labelTextAlign,
          [createKey(createKey("labelFontSize", labelPlacement), size)]: labelFontSize
        }
      } = themeRef.value;
      let mergedLabelTextAlign = (_a = labelTextAlignRef.value) !== null && _a !== void 0 ? _a : labelTextAlign;
      if (labelPlacement === "top") {
        mergedLabelTextAlign = mergedLabelTextAlign === "right" ? "flex-end" : "flex-start";
      }
      const cssVars = {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-line-height": lineHeight,
        "--n-blank-height": blankHeight,
        "--n-label-font-size": labelFontSize,
        "--n-label-text-align": mergedLabelTextAlign,
        "--n-label-height": labelHeight,
        "--n-label-padding": labelPadding,
        "--n-label-font-weight": labelFontWeight,
        "--n-asterisk-color": asteriskColor,
        "--n-label-text-color": labelTextColor,
        "--n-feedback-padding": feedbackPadding,
        "--n-feedback-font-size": feedbackFontSize,
        "--n-feedback-height": feedbackHeight,
        "--n-feedback-text-color": feedbackTextColor,
        "--n-feedback-text-color-warning": feedbackTextColorWarning,
        "--n-feedback-text-color-error": feedbackTextColorError
      };
      return cssVars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("form-item", computed(() => {
      var _a;
      return `${mergedSizeRef.value[0]}${labelPlacementRef.value[0]}${((_a = labelTextAlignRef.value) === null || _a === void 0 ? void 0 : _a[0]) || ""}`;
    }), cssVarsRef, props) : void 0;
    const reverseColSpaceRef = computed(() => {
      return labelPlacementRef.value === "left" && mergedRequireMarkPlacementRef.value === "left" && labelTextAlignRef.value === "left";
    });
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRequired: mergedRequiredRef,
      feedbackId: feedbackIdRef,
      renderExplains: renderExplainsRef,
      reverseColSpace: reverseColSpaceRef
    }, formItemMiscRefs), formItemSizeRefs), exposedRef), {
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      mergedShowLabel,
      mergedShowRequireMark,
      mergedRequireMarkPlacement,
      onRender
    } = this;
    const renderedShowRequireMark = mergedShowRequireMark !== void 0 ? mergedShowRequireMark : this.mergedRequired;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const renderLabel = () => {
      const labelText = this.$slots.label ? this.$slots.label() : this.label;
      if (!labelText) return null;
      const textNode = h("span", {
        class: `${mergedClsPrefix}-form-item-label__text`
      }, labelText);
      const markNode = renderedShowRequireMark ? h("span", {
        class: `${mergedClsPrefix}-form-item-label__asterisk`
      }, mergedRequireMarkPlacement !== "left" ? " *" : "* ") : mergedRequireMarkPlacement === "right-hanging" && h("span", {
        class: `${mergedClsPrefix}-form-item-label__asterisk-placeholder`
      }, " *");
      const {
        labelProps
      } = this;
      return h("label", Object.assign({}, labelProps, {
        class: [labelProps === null || labelProps === void 0 ? void 0 : labelProps.class, `${mergedClsPrefix}-form-item-label`, `${mergedClsPrefix}-form-item-label--${mergedRequireMarkPlacement}-mark`, this.reverseColSpace && `${mergedClsPrefix}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), mergedRequireMarkPlacement === "left" ? [markNode, textNode] : [textNode, markNode]);
    };
    return h("div", {
      class: [`${mergedClsPrefix}-form-item`, this.themeClass, `${mergedClsPrefix}-form-item--${this.mergedSize}-size`, `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${mergedClsPrefix}-form-item--auto-label-width`, !mergedShowLabel && `${mergedClsPrefix}-form-item--no-label`],
      style: this.cssVars
    }, mergedShowLabel && renderLabel(), h("div", {
      class: [`${mergedClsPrefix}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`],
      style: this.contentStyle
    }, $slots), this.mergedShowFeedback ? h("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${mergedClsPrefix}-form-item-feedback-wrapper`, this.feedbackClass]
    }, h(Transition, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus
        } = this;
        return resolveWrappedSlot($slots.feedback, (children) => {
          var _a;
          const {
            feedback
          } = this;
          const feedbackNodes = children || feedback ? h("div", {
            key: "__feedback__",
            class: `${mergedClsPrefix}-form-item-feedback__line`
          }, children || feedback) : this.renderExplains.length ? (_a = this.renderExplains) === null || _a === void 0 ? void 0 : _a.map(({
            key,
            render: render10
          }) => h("div", {
            key,
            class: `${mergedClsPrefix}-form-item-feedback__line`
          }, render10())) : null;
          return feedbackNodes ? mergedValidationStatus === "warning" ? h("div", {
            key: "controlled-warning",
            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning`
          }, feedbackNodes) : mergedValidationStatus === "error" ? h("div", {
            key: "controlled-error",
            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error`
          }, feedbackNodes) : mergedValidationStatus === "success" ? h("div", {
            key: "controlled-success",
            class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success`
          }, feedbackNodes) : h("div", {
            key: "controlled-default",
            class: `${mergedClsPrefix}-form-item-feedback`
          }, feedbackNodes) : null;
        });
      }
    })) : null);
  }
});
const tabsInjectionKey = createInjectionKey("n-tabs");
const tabPaneProps = {
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: "if"
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  tabProps: Object,
  /** @deprecated */
  label: [String, Number, Object, Function]
};
const NTabPane = defineComponent({
  __TAB_PANE__: true,
  name: "TabPane",
  alias: ["TabPanel"],
  props: tabPaneProps,
  slots: Object,
  setup(props) {
    const NTab = inject(tabsInjectionKey, null);
    if (!NTab) {
      throwError("tab-pane", "`n-tab-pane` must be placed inside `n-tabs`.");
    }
    return {
      style: NTab.paneStyleRef,
      class: NTab.paneClassRef,
      mergedClsPrefix: NTab.mergedClsPrefixRef
    };
  },
  render() {
    return h("div", {
      class: [`${this.mergedClsPrefix}-tab-pane`, this.class],
      style: this.style
    }, this.$slots);
  }
});
const tabProps = Object.assign({
  internalLeftPadded: Boolean,
  internalAddable: Boolean,
  internalCreatedByPane: Boolean
}, omit(tabPaneProps, ["displayDirective"]));
const Tab = defineComponent({
  __TAB__: true,
  inheritAttrs: false,
  name: "Tab",
  props: tabProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      addTabStyleRef,
      tabClassRef,
      addTabClassRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      triggerRef,
      handleAdd,
      activateTab,
      handleClose
    } = inject(tabsInjectionKey);
    return {
      trigger: triggerRef,
      mergedClosable: computed(() => {
        if (props.internalAddable) return false;
        const {
          closable
        } = props;
        if (closable === void 0) return closableRef.value;
        return closable;
      }),
      style: tabStyleRef,
      addStyle: addTabStyleRef,
      tabClass: tabClassRef,
      addTabClass: addTabClassRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation();
        if (props.disabled) return;
        handleClose(props.name);
      },
      activateTab() {
        if (props.disabled) return;
        if (props.internalAddable) {
          handleAdd();
          return;
        }
        const {
          name: nameProp
        } = props;
        const id = ++tabChangeIdRef.id;
        if (nameProp !== valueRef.value) {
          const {
            value: onBeforeLeave
          } = onBeforeLeaveRef;
          if (!onBeforeLeave) {
            activateTab(nameProp);
          } else {
            void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                activateTab(nameProp);
              }
            });
          }
        }
      }
    };
  },
  render() {
    const {
      internalAddable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      trigger,
      $slots: {
        default: defaultSlot
      }
    } = this;
    const mergedTab = label !== null && label !== void 0 ? label : tab;
    return h("div", {
      class: `${clsPrefix}-tabs-tab-wrapper`
    }, this.internalLeftPadded ? h("div", {
      class: `${clsPrefix}-tabs-tab-pad`
    }) : null, h("div", Object.assign({
      key: name,
      "data-name": name,
      "data-disabled": disabled ? true : void 0
    }, mergeProps({
      class: [`${clsPrefix}-tabs-tab`, value === name && `${clsPrefix}-tabs-tab--active`, disabled && `${clsPrefix}-tabs-tab--disabled`, mergedClosable && `${clsPrefix}-tabs-tab--closable`, internalAddable && `${clsPrefix}-tabs-tab--addable`, internalAddable ? this.addTabClass : this.tabClass],
      onClick: trigger === "click" ? this.activateTab : void 0,
      onMouseenter: trigger === "hover" ? this.activateTab : void 0,
      style: internalAddable ? this.addStyle : this.style
    }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), h("span", {
      class: `${clsPrefix}-tabs-tab__label`
    }, internalAddable ? h(Fragment, null, h("div", {
      class: `${clsPrefix}-tabs-tab__height-placeholder`
    }, " "), h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(AddIcon, null)
    })) : defaultSlot ? defaultSlot() : typeof mergedTab === "object" ? mergedTab : render(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name)), mergedClosable && this.type === "card" ? h(NBaseClose, {
      clsPrefix,
      class: `${clsPrefix}-tabs-tab__close`,
      onClick: this.handleClose,
      disabled
    }) : null));
  }
});
const style = cB("tabs", `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [cM("segment-type", [cB("tabs-rail", [c$1("&.transition-disabled", [cB("tabs-capsule", `
 transition: none;
 `)])])]), cM("top", [cB("tab-pane", `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), cM("left", [cB("tab-pane", `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), cM("left, right", `
 flex-direction: row;
 `, [cB("tabs-bar", `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 padding: var(--n-tab-padding-vertical); 
 `)]), cM("right", `
 flex-direction: row-reverse;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), cB("tabs-bar", `
 left: 0;
 `)]), cM("bottom", `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [cB("tab-pane", `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), cB("tabs-bar", `
 top: 0;
 `)]), cB("tabs-rail", `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("tabs-capsule", `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), cB("tabs-tab-wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("tabs-tab", `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cM("active", `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `), c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])])]), cM("flex", [cB("tabs-nav", `
 width: 100%;
 position: relative;
 `, [cB("tabs-wrapper", `
 width: 100%;
 `, [cB("tabs-tab", `
 margin-right: 0;
 `)])])]), cB("tabs-nav", `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [cE("prefix, suffix", `
 display: flex;
 align-items: center;
 `), cE("prefix", "padding-right: 16px;"), cE("suffix", "padding-left: 16px;")]), cM("top, bottom", [c$1(">", [cB("tabs-nav", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), c$1("&::after", `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), cM("left, right", [cB("tabs-nav-scroll-content", `
 flex-direction: column;
 `), c$1(">", [cB("tabs-nav", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), c$1("&::after", `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), cM("shadow-start", [c$1("&::before", `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), cM("shadow-end", [c$1("&::after", `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), cB("tabs-nav-scroll-wrapper", `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [cB("tabs-nav-y-scroll", `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `)]), c$1("&::before, &::after", `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), cB("tabs-nav-scroll-content", `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), cB("tabs-wrapper", `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), cB("tabs-tab-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), cB("tabs-tab", `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("disabled", {
  cursor: "not-allowed"
}), cE("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cE("label", `
 display: flex;
 align-items: center;
 z-index: 1;
 `)]), cB("tabs-bar", `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&.transition-disabled", `
 transition: none;
 `), cM("disabled", `
 background-color: var(--n-tab-text-color-disabled)
 `)]), cB("tabs-pane-wrapper", `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), cB("tab-pane", `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [c$1("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), c$1("&.next-transition-leave-active, &.prev-transition-leave-active", `
 position: absolute;
 `), c$1("&.next-transition-enter-from, &.prev-transition-leave-to", `
 transform: translateX(32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-to, &.prev-transition-enter-from", `
 transform: translateX(-32px);
 opacity: 0;
 `), c$1("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", `
 transform: translateX(0);
 opacity: 1;
 `)]), cB("tabs-tab-pad", `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), cM("line-type, bar-type", [cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [c$1("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), cM("active", `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), cM("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), cB("tabs-nav", [cM("line-type", [cM("top", [cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 bottom: -1px;
 `)]), cM("left", [cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 right: -1px;
 `)]), cM("right", [cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 left: -1px;
 `)]), cM("bottom", [cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-nav-scroll-content", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-bar", `
 top: -1px;
 `)]), cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-nav-scroll-content", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-bar", `
 border-radius: 0;
 `)]), cM("card-type", [cE("prefix, suffix", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-pad", `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab-pad", `
 transition: border-color .3s var(--n-bezier);
 `), cB("tabs-tab", `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [cM("addable", `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `, [cE("height-placeholder", `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-tab-text-color-hover);
 `)])]), cM("closable", "padding-right: 8px;"), cM("active", `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), cM("disabled", "color: var(--n-tab-text-color-disabled);")])]), cM("left, right", `
 flex-direction: column; 
 `, [cE("prefix, suffix", `
 padding: var(--n-tab-padding-vertical);
 `), cB("tabs-wrapper", `
 flex-direction: column;
 `), cB("tabs-tab-wrapper", `
 flex-direction: column;
 `, [cB("tabs-tab-pad", `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]), cM("top", [cM("card-type", [cB("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-bottom: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), cM("left", [cM("card-type", [cB("tabs-scroll-padding", "border-right: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-right: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), cM("right", [cM("card-type", [cB("tabs-scroll-padding", "border-left: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-left: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), cM("bottom", [cM("card-type", [cB("tabs-scroll-padding", "border-top: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-tab", `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [cM("active", `
 border-top: 1px solid #0000;
 `)]), cB("tabs-tab-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `), cB("tabs-pad", `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]);
const throttle = throttle$1;
const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  trigger: {
    type: String,
    default: "click"
  },
  type: {
    type: String,
    default: "bar"
  },
  closable: Boolean,
  justifyContent: String,
  size: String,
  placement: {
    type: String,
    default: "top"
  },
  tabStyle: [String, Object],
  tabClass: String,
  addTabStyle: [String, Object],
  addTabClass: String,
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object],
  paneWrapperClass: String,
  paneWrapperStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  animated: Boolean,
  onBeforeLeave: Function,
  onAdd: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
});
const NTabs = defineComponent({
  name: "Tabs",
  props: tabsProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme("Tabs", "-tabs", style, tabsLight, props, mergedClsPrefixRef);
    const tabsElRef = ref(null);
    const barElRef = ref(null);
    const scrollWrapperElRef = ref(null);
    const addTabInstRef = ref(null);
    const xScrollInstRef = ref(null);
    const yScrollElRef = ref(null);
    const startReachedRef = ref(true);
    const endReachedRef = ref(true);
    const compitableSizeRef = useCompitable(props, ["labelSize", "size"]);
    const mergedSizeRef = computed(() => {
      var _a2, _b2;
      if (compitableSizeRef.value) return compitableSizeRef.value;
      const configSize = (_b2 = (_a2 = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a2 === void 0 ? void 0 : _a2.Tabs) === null || _b2 === void 0 ? void 0 : _b2.size;
      if (configSize) return configSize;
      return "medium";
    });
    const compitableValueRef = useCompitable(props, ["activeName", "value"]);
    const uncontrolledValueRef = ref((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : slots.default ? (_d = (_c = flatten$1(slots.default())[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.name : null);
    const mergedValueRef = useMergedState(compitableValueRef, uncontrolledValueRef);
    const tabChangeIdRef = {
      id: 0
    };
    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === "card") return void 0;
      return {
        display: "flex",
        justifyContent: props.justifyContent
      };
    });
    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    function getCurrentEl() {
      var _a2;
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      const tabEl = (_a2 = tabsElRef.value) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`[data-name="${value}"]`);
      return tabEl;
    }
    function updateBarStyle(tabEl) {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const barIsHide = barEl.style.opacity === "0";
      if (tabEl) {
        const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
        const {
          barWidth,
          placement
        } = props;
        if (tabEl.dataset.disabled === "true") {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (["top", "bottom"].includes(placement)) {
          clearBarStyle(["top", "maxHeight", "height"]);
          if (typeof barWidth === "number" && tabEl.offsetWidth >= barWidth) {
            const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
            barEl.style.left = `${offsetDiffLeft}px`;
            barEl.style.maxWidth = `${barWidth}px`;
          } else {
            barEl.style.left = `${tabEl.offsetLeft}px`;
            barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
          }
          barEl.style.width = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetWidth;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        } else {
          clearBarStyle(["left", "maxWidth", "width"]);
          if (typeof barWidth === "number" && tabEl.offsetHeight >= barWidth) {
            const offsetDiffTop = Math.floor((tabEl.offsetHeight - barWidth) / 2) + tabEl.offsetTop;
            barEl.style.top = `${offsetDiffTop}px`;
            barEl.style.maxHeight = `${barWidth}px`;
          } else {
            barEl.style.top = `${tabEl.offsetTop}px`;
            barEl.style.maxHeight = `${tabEl.offsetHeight}px`;
          }
          barEl.style.height = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetHeight;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        }
      }
    }
    function hideBarStyle() {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      barEl.style.opacity = "0";
    }
    function clearBarStyle(styleProps) {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      for (const prop of styleProps) {
        barEl.style[prop] = "";
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === "card") return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      } else {
        hideBarStyle();
      }
    }
    function updateCurrentScrollPosition() {
      var _a2;
      const scrollWrapperEl = (_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el;
      if (!scrollWrapperEl) return;
      const tabEl = getCurrentEl();
      if (!tabEl) return;
      const {
        scrollLeft: scrollWrapperElScrollLeft,
        offsetWidth: scrollWrapperElOffsetWidth
      } = scrollWrapperEl;
      const {
        offsetLeft: tabElOffsetLeft,
        offsetWidth: tabElOffsetWidth
      } = tabEl;
      if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft,
          behavior: "smooth"
        });
      } else if (tabElOffsetLeft + tabElOffsetWidth > scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft + tabElOffsetWidth - scrollWrapperElOffsetWidth,
          behavior: "smooth"
        });
      }
    }
    const tabsPaneWrapperRef = ref(null);
    let fromHeight = 0;
    let hangingTransition = null;
    function onAnimationBeforeLeave(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        fromHeight = el.getBoundingClientRect().height;
        const fromHeightPx = `${fromHeight}px`;
        const applyFromStyle = () => {
          tabsPaneWrapperEl.style.height = fromHeightPx;
          tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
        };
        if (!hangingTransition) {
          hangingTransition = applyFromStyle;
        } else {
          applyFromStyle();
          hangingTransition();
          hangingTransition = null;
        }
      }
    }
    function onAnimationEnter(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        const targetHeight = el.getBoundingClientRect().height;
        const applyTargetStyle = () => {
          void document.body.offsetHeight;
          tabsPaneWrapperEl.style.maxHeight = `${targetHeight}px`;
          tabsPaneWrapperEl.style.height = `${Math.max(fromHeight, targetHeight)}px`;
        };
        if (!hangingTransition) {
          hangingTransition = applyTargetStyle;
        } else {
          hangingTransition();
          hangingTransition = null;
          applyTargetStyle();
        }
      }
    }
    function onAnimationAfterEnter() {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        tabsPaneWrapperEl.style.maxHeight = "";
        tabsPaneWrapperEl.style.height = "";
        const {
          paneWrapperStyle
        } = props;
        if (typeof paneWrapperStyle === "string") {
          tabsPaneWrapperEl.style.cssText = paneWrapperStyle;
        } else if (paneWrapperStyle) {
          const {
            maxHeight,
            height
          } = paneWrapperStyle;
          if (maxHeight !== void 0) {
            tabsPaneWrapperEl.style.maxHeight = maxHeight;
          }
          if (height !== void 0) {
            tabsPaneWrapperEl.style.height = height;
          }
        }
      }
    }
    const renderNameListRef = {
      value: []
    };
    const animationDirectionRef = ref("next");
    function activateTab(panelName) {
      const currentValue = mergedValueRef.value;
      let dir = "next";
      for (const name of renderNameListRef.value) {
        if (name === currentValue) {
          break;
        }
        if (name === panelName) {
          dir = "prev";
          break;
        }
      }
      animationDirectionRef.value = dir;
      doUpdateValue(panelName);
    }
    function doUpdateValue(panelName) {
      const {
        onActiveNameChange,
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange, panelName);
      }
      if (onUpdateValue) call(onUpdateValue, panelName);
      if (_onUpdateValue) call(_onUpdateValue, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose(panelName) {
      const {
        onClose
      } = props;
      if (onClose) call(onClose, panelName);
    }
    function updateBarPositionInstantly() {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const disableTransitionClassName = "transition-disabled";
      barEl.classList.add(disableTransitionClassName);
      updateCurrentBarStyle();
      barEl.classList.remove(disableTransitionClassName);
    }
    const segmentCapsuleElRef = ref(null);
    function updateSegmentPosition({
      transitionDisabled
    }) {
      const tabsEl = tabsElRef.value;
      if (!tabsEl) return;
      if (transitionDisabled) tabsEl.classList.add("transition-disabled");
      const activeTabEl = getCurrentEl();
      if (activeTabEl && segmentCapsuleElRef.value) {
        segmentCapsuleElRef.value.style.width = `${activeTabEl.offsetWidth}px`;
        segmentCapsuleElRef.value.style.height = `${activeTabEl.offsetHeight}px`;
        segmentCapsuleElRef.value.style.transform = `translateX(${activeTabEl.offsetLeft - depx(getComputedStyle(tabsEl).paddingLeft)}px)`;
        if (transitionDisabled) {
          void segmentCapsuleElRef.value.offsetWidth;
        }
      }
      if (transitionDisabled) {
        tabsEl.classList.remove("transition-disabled");
      }
    }
    watch([mergedValueRef], () => {
      if (props.type === "segment") {
        void nextTick(() => {
          updateSegmentPosition({
            transitionDisabled: false
          });
        });
      }
    });
    onMounted(() => {
      if (props.type === "segment") {
        updateSegmentPosition({
          transitionDisabled: true
        });
      }
    });
    let memorizedWidth = 0;
    function _handleNavResize(entry) {
      var _b2;
      if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
        return;
      }
      if (memorizedWidth === entry.contentRect.width) {
        return;
      }
      memorizedWidth = entry.contentRect.width;
      const {
        type: type4
      } = props;
      if (type4 === "line" || type4 === "bar") {
        {
          updateBarPositionInstantly();
        }
      }
      if (type4 !== "segment") {
        const {
          placement
        } = props;
        deriveScrollShadow((placement === "top" || placement === "bottom" ? (_b2 = xScrollInstRef.value) === null || _b2 === void 0 ? void 0 : _b2.$el : yScrollElRef.value) || null);
      }
    }
    const handleNavResize = throttle(_handleNavResize, 64);
    watch([() => props.justifyContent, () => props.size], () => {
      void nextTick(() => {
        const {
          type: type4
        } = props;
        if (type4 === "line" || type4 === "bar") {
          updateBarPositionInstantly();
        }
      });
    });
    const addTabFixedRef = ref(false);
    function _handleTabsResize(entry) {
      var _a2;
      const {
        target,
        contentRect: {
          width,
          height
        }
      } = entry;
      const containerWidth = target.parentElement.parentElement.offsetWidth;
      const containerHeight = target.parentElement.parentElement.offsetHeight;
      const {
        placement
      } = props;
      if (!addTabFixedRef.value) {
        if (placement === "top" || placement === "bottom") {
          if (containerWidth < width) {
            addTabFixedRef.value = true;
          }
        } else {
          if (containerHeight < height) {
            addTabFixedRef.value = true;
          }
        }
      } else {
        const {
          value: addTabInst
        } = addTabInstRef;
        if (!addTabInst) return;
        if (placement === "top" || placement === "bottom") {
          if (containerWidth - width > addTabInst.$el.offsetWidth) {
            addTabFixedRef.value = false;
          }
        } else {
          if (containerHeight - height > addTabInst.$el.offsetHeight) {
            addTabFixedRef.value = false;
          }
        }
      }
      deriveScrollShadow(((_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el) || null);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);
    function handleAdd() {
      const {
        onAdd
      } = props;
      if (onAdd) onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const {
          value: xScrollInst
        } = xScrollInstRef;
        if (!currentEl || !xScrollInst) return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: "smooth"
        });
      });
    }
    function deriveScrollShadow(el) {
      if (!el) return;
      const {
        placement
      } = props;
      if (placement === "top" || placement === "bottom") {
        const {
          scrollLeft,
          scrollWidth,
          offsetWidth
        } = el;
        startReachedRef.value = scrollLeft <= 0;
        endReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
      } else {
        const {
          scrollTop,
          scrollHeight,
          offsetHeight
        } = el;
        startReachedRef.value = scrollTop <= 0;
        endReachedRef.value = scrollTop + offsetHeight >= scrollHeight;
      }
    }
    const handleScroll = throttle((e) => {
      deriveScrollShadow(e.target);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, "trigger"),
      tabStyleRef: toRef(props, "tabStyle"),
      tabClassRef: toRef(props, "tabClass"),
      addTabStyleRef: toRef(props, "addTabStyle"),
      addTabClassRef: toRef(props, "addTabClass"),
      paneClassRef: toRef(props, "paneClass"),
      paneStyleRef: toRef(props, "paneStyle"),
      mergedClsPrefixRef,
      typeRef: toRef(props, "type"),
      closableRef: toRef(props, "closable"),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, "onBeforeLeave"),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    watchEffect(() => {
      const {
        value: el
      } = scrollWrapperElRef;
      if (!el) return;
      const {
        value: clsPrefix
      } = mergedClsPrefixRef;
      const shadowStartClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-start`;
      const shadowEndClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-end`;
      if (startReachedRef.value) {
        el.classList.remove(shadowStartClass);
      } else {
        el.classList.add(shadowStartClass);
      }
      if (endReachedRef.value) {
        el.classList.remove(shadowEndClass);
      } else {
        el.classList.add(shadowEndClass);
      }
    });
    const exposedMethods = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };
    const handleSegmentResize = () => {
      updateSegmentPosition({
        transitionDisabled: true
      });
    };
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        type: type4
      } = props;
      const typeSuffix = {
        card: "Card",
        bar: "Bar",
        line: "Line",
        segment: "Segment"
      }[type4];
      const sizeType = `${size}${typeSuffix}`;
      const {
        self: {
          barColor,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          tabColor,
          tabBorderColor,
          paneTextColor,
          tabFontWeight,
          tabBorderRadius,
          tabFontWeightActive,
          colorSegment,
          fontWeightStrong,
          tabColorSegment,
          closeSize,
          closeIconSize,
          closeColorHover,
          closeColorPressed,
          closeBorderRadius,
          [createKey("panePadding", size)]: panePadding,
          [createKey("tabPadding", sizeType)]: tabPadding,
          [createKey("tabPaddingVertical", sizeType)]: tabPaddingVertical,
          [createKey("tabGap", sizeType)]: tabGap,
          [createKey("tabGap", `${sizeType}Vertical`)]: tabGapVertical,
          [createKey("tabTextColor", type4)]: tabTextColor,
          [createKey("tabTextColorActive", type4)]: tabTextColorActive,
          [createKey("tabTextColorHover", type4)]: tabTextColorHover,
          [createKey("tabTextColorDisabled", type4)]: tabTextColorDisabled,
          [createKey("tabFontSize", size)]: tabFontSize
        },
        common: {
          cubicBezierEaseInOut: cubicBezierEaseInOut2
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color-segment": colorSegment,
        "--n-bar-color": barColor,
        "--n-tab-font-size": tabFontSize,
        "--n-tab-text-color": tabTextColor,
        "--n-tab-text-color-active": tabTextColorActive,
        "--n-tab-text-color-disabled": tabTextColorDisabled,
        "--n-tab-text-color-hover": tabTextColorHover,
        "--n-pane-text-color": paneTextColor,
        "--n-tab-border-color": tabBorderColor,
        "--n-tab-border-radius": tabBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-tab-color": tabColor,
        "--n-tab-font-weight": tabFontWeight,
        "--n-tab-font-weight-active": tabFontWeightActive,
        "--n-tab-padding": tabPadding,
        "--n-tab-padding-vertical": tabPaddingVertical,
        "--n-tab-gap": tabGap,
        "--n-tab-gap-vertical": tabGapVertical,
        "--n-pane-padding-left": getMargin(panePadding, "left"),
        "--n-pane-padding-right": getMargin(panePadding, "right"),
        "--n-pane-padding-top": getMargin(panePadding, "top"),
        "--n-pane-padding-bottom": getMargin(panePadding, "bottom"),
        "--n-font-weight-strong": fontWeightStrong,
        "--n-tab-color-segment": tabColorSegment
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tabs", computed(() => {
      return `${mergedSizeRef.value[0]}${props.type[0]}`;
    }), cssVarsRef, props) : void 0;
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: /* @__PURE__ */ new Set(),
      segmentCapsuleElRef,
      tabsPaneWrapperRef,
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: mergedSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      animationDirection: animationDirectionRef,
      renderNameListRef,
      yScrollElRef,
      handleSegmentResize,
      onAnimationBeforeLeave,
      onAnimationEnter,
      onAnimationAfterEnter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      type: type4,
      placement,
      addTabFixed,
      addable,
      mergedSize,
      renderNameListRef,
      onRender,
      paneWrapperClass,
      paneWrapperStyle,
      $slots: {
        default: defaultSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const tabPaneChildren = defaultSlot ? flatten$1(defaultSlot()).filter((v) => {
      return v.type.__TAB_PANE__ === true;
    }) : [];
    const tabChildren = defaultSlot ? flatten$1(defaultSlot()).filter((v) => {
      return v.type.__TAB__ === true;
    }) : [];
    const showPane = !tabChildren.length;
    const isCard = type4 === "card";
    const isSegment = type4 === "segment";
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    renderNameListRef.value = [];
    const scrollContent = () => {
      const tabs = h("div", {
        style: this.tabWrapperStyle,
        class: `${mergedClsPrefix}-tabs-wrapper`
      }, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: placement === "top" || placement === "bottom" ? {
          width: `${this.tabsPadding}px`
        } : {
          height: `${this.tabsPadding}px`
        }
      }), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return justifyTabDynamicProps(h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0 && (!mergedJustifyContent || mergedJustifyContent === "center" || mergedJustifyContent === "start" || mergedJustifyContent === "end")
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0));
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index !== 0 && !mergedJustifyContent) {
          return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
        } else {
          return justifyTabDynamicProps(tabVNode);
        }
      }), !addTabFixed && addable && isCard ? createAddTag(addable, (showPane ? tabPaneChildren.length : tabChildren.length) !== 0) : null, mergedJustifyContent ? null : h("div", {
        class: `${mergedClsPrefix}-tabs-scroll-padding`,
        style: {
          width: `${this.tabsPadding}px`
        }
      }));
      return h("div", {
        ref: "tabsElRef",
        class: `${mergedClsPrefix}-tabs-nav-scroll-content`
      }, isCard && addable ? h(VResizeObserver, {
        onResize: this.handleTabsResize
      }, {
        default: () => tabs
      }) : tabs, isCard ? h("div", {
        class: `${mergedClsPrefix}-tabs-pad`
      }) : null, isCard ? null : h("div", {
        ref: "barElRef",
        class: `${mergedClsPrefix}-tabs-bar`
      }));
    };
    const resolvedPlacement = isSegment ? "top" : placement;
    return h("div", {
      class: [`${mergedClsPrefix}-tabs`, this.themeClass, `${mergedClsPrefix}-tabs--${type4}-type`, `${mergedClsPrefix}-tabs--${mergedSize}-size`, mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`, `${mergedClsPrefix}-tabs--${resolvedPlacement}`],
      style: this.cssVars
    }, h("div", {
      class: [
        // the class should be applied here since it's possible
        // to make tabs nested in tabs, style may influence each
        // other. adding a class will make it easy to write the
        // style.
        `${mergedClsPrefix}-tabs-nav--${type4}-type`,
        `${mergedClsPrefix}-tabs-nav--${resolvedPlacement}`,
        `${mergedClsPrefix}-tabs-nav`
      ]
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__prefix`
    }, children)), isSegment ? h(VResizeObserver, {
      onResize: this.handleSegmentResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-rail`,
        ref: "tabsElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-capsule`,
        ref: "segmentCapsuleElRef"
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-tabs-tab`
      }))), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return h(Tab, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0);
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index === 0) {
          return tabVNode;
        } else {
          return createLeftPaddedTabVNode(tabVNode);
        }
      }))
    }) : h(VResizeObserver, {
      onResize: this.handleNavResize
    }, {
      default: () => h("div", {
        class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`,
        ref: "scrollWrapperElRef"
      }, ["top", "bottom"].includes(resolvedPlacement) ? h(VXScroll, {
        ref: "xScrollInstRef",
        onScroll: this.handleScroll
      }, {
        default: scrollContent
      }) : h("div", {
        class: `${mergedClsPrefix}-tabs-nav-y-scroll`,
        onScroll: this.handleScroll,
        ref: "yScrollElRef"
      }, scrollContent()))
    }), addTabFixed && addable && isCard ? createAddTag(addable, true) : null, resolveWrappedSlot(suffixSlot, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tabs-nav__suffix`
    }, children))), showPane && (this.animated && (resolvedPlacement === "top" || resolvedPlacement === "bottom") ? h("div", {
      ref: "tabsPaneWrapperRef",
      style: paneWrapperStyle,
      class: [`${mergedClsPrefix}-tabs-pane-wrapper`, paneWrapperClass]
    }, filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)));
  }
});
function filterMapTabPanes(tabPaneVNodes, value, renderedNames, onBeforeLeave, onEnter, onAfterEnter, animationDirection) {
  const children = [];
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      "display-directive": _displayDirective
    } = vNode.props;
    const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== void 0) {
      vNode.key = name;
    }
    if (show || matchDisplayDirective("show") || matchDisplayDirective("show:lazy") && renderedNames.has(name)) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective("if");
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  if (!animationDirection) {
    return children;
  }
  return h(TransitionGroup, {
    name: `${animationDirection}-transition`,
    onBeforeLeave,
    onEnter,
    onAfterEnter
  }, {
    default: () => children
  });
}
function createAddTag(addable, internalLeftPadded) {
  return h(Tab, {
    ref: "addTabInstRef",
    key: "__addable",
    name: "__addable",
    internalCreatedByPane: true,
    internalAddable: true,
    internalLeftPadded,
    disabled: typeof addable === "object" && addable.disabled
  });
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes("internalLeftPadded")) {
      tabVNode.dynamicProps.push("internalLeftPadded");
    }
  } else {
    tabVNode.dynamicProps = ["internalLeftPadded"];
  }
  return tabVNode;
}
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const AddOutline = defineComponent({
  name: "AddOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$9,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M256 112v288"
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
            d: "M400 256H112"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$8 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CopyOutline = defineComponent({
  name: "CopyOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$8,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "rect",
          {
            x: "128",
            y: "128",
            width: "336",
            height: "336",
            rx: "57",
            ry: "57",
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
            d: "M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",
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
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const MoonOutline = defineComponent({
  name: "MoonOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$7,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",
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
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const RefreshOutline = defineComponent({
  name: "RefreshOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$6,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M320 146s24.36-12-64-12a160 160 0 1 0 160 160",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-miterlimit": "10",
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
            d: "M256 58l80 80l-80 80"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SendOutline = defineComponent({
  name: "SendOutline",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$5,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39z",
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
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SettingsOutline = defineComponent({
  name: "SettingsOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$4,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",
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
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SunnyOutline = defineComponent({
  name: "SunnyOutline",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>', 9)]));
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const TrashOutline = defineComponent({
  name: "TrashOutline",
  render: function render9(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [createStaticVNode('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>', 6)]));
  }
});
const STORAGE_KEY = "ai-canvas-projects";
const generateId = () => `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
const projects = ref([]);
const loadProjects = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      projects.value = parsed.map((p) => ({
        ...p,
        createdAt: new Date(p.createdAt),
        updatedAt: new Date(p.updatedAt)
      }));
    }
  } catch (err) {
    console.error("Failed to load projects:", err);
    projects.value = [];
  }
};
const cleanNodeForStorage = (node) => {
  if (!node.data) return node;
  const cleanedData = { ...node.data };
  if (cleanedData.base64) {
    delete cleanedData.base64;
  }
  if (cleanedData.url?.startsWith?.("data:")) {
    delete cleanedData.url;
  }
  if (cleanedData.maskData) {
    delete cleanedData.maskData;
  }
  return { ...node, data: cleanedData };
};
const cleanProjectForStorage = (project) => {
  return {
    ...project,
    canvasData: project.canvasData ? {
      ...project.canvasData,
      nodes: project.canvasData.nodes?.map(cleanNodeForStorage) || []
    } : project.canvasData,
    // Remove base64 thumbnails | 移除 base64 缩略图
    thumbnail: project.thumbnail?.startsWith?.("data:") ? "" : project.thumbnail
  };
};
const saveProjects = () => {
  const cleanedProjects = projects.value.map(cleanProjectForStorage);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanedProjects));
  } catch (err) {
    if (err.name === "QuotaExceededError") {
      console.warn("localStorage quota exceeded, attempting aggressive cleanup...");
      const minimalProjects = cleanedProjects.map((project, index) => ({
        ...project,
        thumbnail: "",
        // Remove all thumbnails | 移除所有缩略图
        // Keep only essential canvas data for older projects | 旧项目只保留基本画布数据
        canvasData: index > 10 ? { nodes: [], edges: [], viewport: project.canvasData?.viewport } : project.canvasData
      }));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(minimalProjects));
        console.log("Saved with aggressive cleanup");
        window.$message?.warning("存储空间不足，已自动清理部分数据");
      } catch (retryErr) {
        console.error("Still failed after aggressive cleanup:", retryErr);
        try {
          const essentialProjects = minimalProjects.slice(0, 5);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(essentialProjects));
          projects.value = projects.value.slice(0, 5);
          window.$message?.warning("存储空间严重不足，已保留最近 5 个项目");
        } catch (finalErr) {
          console.error("Cannot save even minimal data:", finalErr);
          window.$message?.error("存储失败，请清理浏览器存储空间");
        }
      }
    } else {
      console.error("Failed to save projects:", err);
    }
  }
};
const createProject = (name = "未命名项目") => {
  const id = generateId();
  const now2 = /* @__PURE__ */ new Date();
  const newProject = {
    id,
    name,
    thumbnail: "",
    createdAt: now2,
    updatedAt: now2,
    // Canvas data | 画布数据
    canvasData: {
      nodes: [],
      edges: [],
      viewport: { x: 100, y: 50, zoom: 0.8 }
    }
  };
  projects.value = [newProject, ...projects.value];
  saveProjects();
  return id;
};
const updateProject = (id, data) => {
  const index = projects.value.findIndex((p) => p.id === id);
  if (index === -1) return false;
  projects.value[index] = {
    ...projects.value[index],
    ...data,
    updatedAt: /* @__PURE__ */ new Date()
  };
  const [updated] = projects.value.splice(index, 1);
  projects.value = [updated, ...projects.value];
  saveProjects();
  return true;
};
const updateProjectCanvas = (id, canvasData) => {
  const project = projects.value.find((p) => p.id === id);
  if (!project) return false;
  project.canvasData = {
    ...project.canvasData,
    ...canvasData
  };
  project.updatedAt = /* @__PURE__ */ new Date();
  if (canvasData.nodes) {
    const mediaNodes = canvasData.nodes.filter((node) => (node.type === "image" || node.type === "video") && node.data?.url).sort((a, b) => {
      const aTime = a.data?.updatedAt || a.data?.createdAt || 0;
      const bTime = b.data?.updatedAt || b.data?.createdAt || 0;
      return bTime - aTime;
    });
    if (mediaNodes.length > 0) {
      const latestNode = mediaNodes[0];
      if (latestNode.type === "video") {
        project.thumbnail = latestNode.data.thumbnail || latestNode.data.url;
      } else {
        project.thumbnail = latestNode.data.url;
      }
    }
  }
  saveProjects();
  return true;
};
const getProjectCanvas = (id) => {
  const project = projects.value.find((p) => p.id === id);
  return project?.canvasData || null;
};
const deleteProject = (id) => {
  projects.value = projects.value.filter((p) => p.id !== id);
  saveProjects();
};
const duplicateProject = (id) => {
  const source = projects.value.find((p) => p.id === id);
  if (!source) return null;
  const newId = generateId();
  const now2 = /* @__PURE__ */ new Date();
  const newProject = {
    ...JSON.parse(JSON.stringify(source)),
    // Deep clone | 深拷贝
    id: newId,
    name: `${source.name} (副本)`,
    createdAt: now2,
    updatedAt: now2
  };
  projects.value = [newProject, ...projects.value];
  saveProjects();
  return newId;
};
const renameProject = (id, name) => {
  return updateProject(id, { name });
};
const initProjectsStore = () => {
  loadProjects();
  if (projects.value.length === 0) {
    const id = createProject("示例项目");
    const project = projects.value.find((p) => p.id === id);
    if (project) {
      project.canvasData = {
        nodes: [
          {
            id: "node_0",
            type: "text",
            position: { x: 150, y: 150 },
            data: {
              content: "一只金毛寻回犬在草地上奔跑，摇着尾巴，脸上带着快乐的表情。它的毛发在阳光下闪耀，眼神充满了对自由的渴望，全身散发着阳光、友善的气息。",
              label: "文本输入"
            }
          },
          {
            id: "node_1",
            type: "imageConfig",
            position: { x: 500, y: 150 },
            data: {
              prompt: "",
              model: "doubao-seedream-4-5-251128",
              size: "512x512",
              label: "文生图"
            }
          }
        ],
        edges: [
          {
            id: "edge_node_0_node_1",
            source: "node_0",
            target: "node_1",
            sourceHandle: "right",
            targetHandle: "left"
          }
        ],
        viewport: { x: 100, y: 50, zoom: 0.8 }
      };
      saveProjects();
    }
  }
};
if (typeof window !== "undefined") {
  window.__aiCanvasProjects = {
    projects,
    loadProjects,
    saveProjects,
    createProject,
    deleteProject
  };
}
const SEEDREAM_SIZE_OPTIONS = [
  { label: "21:9", key: "3024x1296" },
  { label: "16:9", key: "2560x1440" },
  { label: "4:3", key: "2304x1728" },
  { label: "3:2", key: "2496x1664" },
  { label: "1:1", key: "2048x2048" },
  { label: "2:3", key: "1664x2496" },
  { label: "3:4", key: "1728x2304" },
  { label: "9:16", key: "1440x2560" },
  { label: "9:21", key: "1296x3024" }
];
const SEEDREAM_4K_SIZE_OPTIONS = [
  { label: "21:9", key: "6198x2656" },
  { label: "16:9", key: "5404x3040" },
  { label: "4:3", key: "4694x3520" },
  { label: "3:2", key: "4992x3328" },
  { label: "1:1", key: "4096x4096" },
  { label: "2:3", key: "3328x4992" },
  { label: "3:4", key: "3520x4694" },
  { label: "9:16", key: "3040x5404" },
  { label: "9:21", key: "2656x6198" }
];
const SEEDREAM_QUALITY_OPTIONS = [
  { label: "标准画质", key: "standard" },
  { label: "4K 高清", key: "4k" }
];
const BANANA_SIZE_OPTIONS = [
  { label: "16:9", key: "16x9" },
  { label: "4:3", key: "4x3" },
  { label: "3:2", key: "3x2" },
  { label: "1:1", key: "1x1" },
  { label: "2:3", key: "2x3" },
  { label: "3:4", key: "3x4" },
  { label: "9:16", key: "9x16" }
];
const IMAGE_MODELS = [
  {
    label: "豆包 Seedream 4.5",
    key: "doubao-seedream-4-5-251128",
    provider: ["volcengine"],
    // 火山引擎
    sizes: SEEDREAM_SIZE_OPTIONS.map((s) => s.key),
    qualities: SEEDREAM_QUALITY_OPTIONS,
    getSizesByQuality: (quality) => quality === "4k" ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS,
    defaultParams: {
      size: "2048x2048",
      quality: "standard",
      style: "vivid"
    }
  },
  {
    label: "豆包 Seedream 5.0 Lite",
    key: "doubao-seedream-5-0-260128",
    provider: ["volcengine"],
    // 火山引擎
    sizes: SEEDREAM_SIZE_OPTIONS.map((s) => s.key),
    qualities: SEEDREAM_QUALITY_OPTIONS,
    getSizesByQuality: (quality) => quality === "4k" ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS,
    defaultParams: {
      size: "2048x2048",
      quality: "standard",
      style: "vivid"
    }
  },
  {
    label: "豆包 Seedream 5.0 Pro",
    key: "doubao-seedream-5-0-pro-260628",
    provider: ["volcengine"],
    // 火山引擎
    sizes: SEEDREAM_SIZE_OPTIONS.map((s) => s.key),
    qualities: SEEDREAM_QUALITY_OPTIONS,
    getSizesByQuality: (quality) => quality === "4k" ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS,
    defaultParams: {
      size: "2048x2048",
      quality: "standard",
      style: "vivid"
    }
  },
  {
    label: "Nano Banana",
    key: "nano-banana",
    provider: ["volcengine"],
    // 火宝渠道
    tips: "尺寸写在提示词中: 尺寸 9:16",
    sizes: [],
    defaultParams: {
      quality: "standard",
      style: "vivid"
    }
  },
  {
    label: "Nano Banana 2",
    key: "nano-banana-2",
    provider: ["volcengine"],
    // 火宝渠道
    sizes: BANANA_SIZE_OPTIONS.map((s) => s.key),
    // qualities: SEEDREAM_QUALITY_OPTIONS,
    // getSizesByQuality: (quality) => quality === '4k' ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS,
    defaultParams: {
      size: "1x1",
      quality: "standard",
      style: "vivid"
    }
  },
  {
    label: "Nano Banana Pro",
    key: "nano-banana-pro",
    provider: ["volcengine"],
    // 火宝渠道
    sizes: BANANA_SIZE_OPTIONS.map((s) => s.key),
    // qualities: SEEDREAM_QUALITY_OPTIONS,
    // getSizesByQuality: (quality) => quality === '4k' ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS,
    defaultParams: {
      size: "1x1",
      quality: "standard",
      style: "vivid"
    }
  }
];
const VIDEO_RATIO_LIST = [
  { label: "16:9 (横版)", key: "16x9" },
  { label: "4:3", key: "4x3" },
  { label: "1:1 (方形)", key: "1x1" },
  { label: "3:4", key: "3x4" },
  { label: "9:16 (竖版)", key: "9x16" }
];
const VIDEO_MODELS = [
  // Seedance 模型 - 1.5 Pro
  {
    label: "Seedance 1.5 Pro (图文视频)",
    key: "doubao-seedance-1-5-pro-251215",
    provider: ["volcengine"],
    type: "t2v+i2v",
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p"],
    defaultResolution: "1080p",
    defaultParams: { ratio: "16:9", duration: 10, resolution: "1080p" }
  },
  // Seedance 模型 - 文生视频
  {
    label: "Seedance 1.0 Lite (文生视频)",
    key: "doubao-seedance-1-0-lite-t2v-250428",
    provider: ["volcengine"],
    type: "t2v",
    // 文生视频
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p"],
    defaultResolution: "720p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "720p" }
  },
  // Seedance 模型 - 图生视频
  {
    label: "Seedance 1.0 Lite (图生视频)",
    key: "doubao-seedance-1-0-lite-i2v-250428",
    provider: ["volcengine"],
    type: "i2v",
    // 图生视频
    ratios: ["16:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p"],
    defaultResolution: "720p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "720p" }
  },
  // Seedance 模型 - 图文视频 Pro
  {
    label: "Seedance 1.0 Pro (图文视频)",
    key: "doubao-seedance-1-0-pro-250528",
    provider: ["volcengine"],
    type: "t2v+i2v",
    // 图文视频
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9", "16:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p"],
    defaultResolution: "1080p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "1080p" }
  },
  // Seedance 模型 - 1.0 Pro Fast
  {
    label: "Seedance 1.0 Pro Fast (图文视频)",
    key: "doubao-seedance-1-0-pro-fast-251015",
    provider: ["volcengine"],
    type: "t2v+i2v",
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p"],
    defaultResolution: "1080p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "1080p" }
  },
  {
    label: "豆包 Seedance 2.0 (图文视频)",
    key: "doubao-seedance-2-0-260128",
    provider: ["volcengine"],
    type: "t2v+i2v",
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p", "1080p", "4k"],
    defaultResolution: "1080p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "1080p" }
  },
  {
    label: "豆包 Seedance 2.0 Fast (图文视频)",
    key: "doubao-seedance-2-0-fast-260128",
    provider: ["volcengine"],
    type: "t2v+i2v",
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p"],
    defaultResolution: "720p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "720p" }
  },
  {
    label: "豆包 Seedance 2.0 Mini (图文视频)",
    key: "doubao-seedance-2-0-mini-260615",
    provider: ["volcengine"],
    type: "t2v+i2v",
    ratios: ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"],
    durs: [
      { label: "5 秒", key: 5 },
      { label: "10 秒", key: 10 }
    ],
    resolutions: ["480p", "720p"],
    defaultResolution: "720p",
    defaultParams: { ratio: "16:9", duration: 5, resolution: "720p" }
  }
  // 可灵 Kling
  // {
  //     label: '可灵 Kling v2.5-turbo',
  //     key: 'kling-v2-1',
  //     provider: ['volcengine'], // 仅火宝渠道
  //     ratios: VIDEO_RATIO_LIST.map(s => s.key),
  //     durs: [{ label: '5 秒', key: 5 }, { label: '10 秒', key: 10 }],
  //     defaultParams: { ratio: '9:16', duration: 10 }
  // },
  // {
  //     label: 'runway/gen4-turbo',
  //     key: 'runway/gen4-turbo',
  //     ratios: VIDEO_RATIO_LIST.map(s => s.key),
  //     durs: [{ label: '5 秒', key: 5 }, { label: '10 秒', key: 10 }],
  //     defaultParams: { ratio: '16:9', duration: 5 }
  // },
  // {
  //     label: '可灵视频 O1',
  //     key: 'kling-video-o1',
  //     ratios: VIDEO_RATIO_LIST.map(s => s.key),
  //     durs: [{ label: '5 秒', key: 5 }, { label: '10 秒', key: 10 }],
  //     defaultParams: { ratio: '16:9', duration: 5 }
  // },
  // {
  //     label: 'viduq2-pro_720p', key: 'viduq2-pro_720p',
  //     ratios: VIDEO_RATIO_LIST.map(s => s.key),
  //     durs: [{ label: '5 秒', key: 5 }, { label: '10 秒', key: 10 }],
  //     defaultParams: { ratio: '16:9', duration: 5 }
  // },
  // {
  //     label: 'Sora 2', key: 'sora-2',
  //     ratios: VIDEO_RATIO_LIST.map(s => s.key),
  //     durs: [{ label: '5 秒', key: 5 }, { label: '10 秒', key: 10 }],
  //     defaultParams: { ratio: '16:9', duration: 5 }
  // }
];
const CHAT_MODELS = [
  {
    label: "豆包 Seed 2.1 Pro",
    key: "doubao-seed-2-1-pro-260628",
    provider: ["volcengine"]
  },
  {
    label: "GLM 5.2 ",
    key: "glm-5-2-260617",
    provider: ["volcengine"]
  },
  {
    label: "豆包 Seed 2.0 Lite",
    key: "doubao-seed-2-0-lite-260428",
    provider: ["volcengine"]
  },
  {
    label: "豆包 Seed Flash",
    key: "doubao-seed-1-6-flash-250615",
    provider: ["volcengine"]
  },
  { label: "GPT-4o Mini", key: "gpt-4o-mini", provider: ["openai"] },
  { label: "GPT-4o", key: "gpt-4o", provider: ["openai"] },
  { label: "GPT-5.2", key: "gpt-5.2", provider: ["openai"] },
  {
    label: "DeepSeek Chat",
    key: "deepseek-chat",
    provider: ["openai", "volcengine"]
  },
  { label: "Gemini 3 Pro", key: "gemini-3-pro", provider: ["openai"] }
];
const VIDEO_RATIO_OPTIONS = VIDEO_RATIO_LIST;
const VIDEO_DURATION_OPTIONS = [
  { label: "5 秒", key: 5 },
  { label: "10 秒", key: 10 }
];
const DEFAULT_IMAGE_MODEL = "doubao-seedream-4-5-251128";
const DEFAULT_VIDEO_MODEL = "doubao-seedance-1-5-pro-251215";
const DEFAULT_CHAT_MODEL = "doubao-seed-2-0-lite-260428";
const getModelByName = (key) => {
  const allModels = [...IMAGE_MODELS, ...VIDEO_MODELS, ...CHAT_MODELS];
  return allModels.find((m) => m.key === key);
};
const PROVIDERS = {
  // 火山引擎
  volcengine: {
    label: "火山引擎 (Volcengine Ark)",
    defaultBaseUrl: "https://ark.cn-beijing.volces.com",
    // 端点路径
    endpoints: {
      chat: "/api/v3/chat/completions",
      image: "/api/v3/images/generations",
      video: "/api/v3/contents/generations/tasks",
      videoQuery: "/api/v3/contents/generations/tasks/{taskId}"
    },
    // 火山引擎渠道请求适配
    requestAdapter: {
      chat: (params) => {
        const adapted = {
          model: params.model,
          messages: params.messages
        };
        if (params.temperature !== void 0) adapted.temperature = params.temperature;
        if (params.max_tokens !== void 0) adapted.max_tokens = params.max_tokens;
        if (params.stream !== void 0) adapted.stream = params.stream;
        return adapted;
      },
      image: (params) => {
        const adapted = {
          model: params.model,
          prompt: params.prompt
        };
        if (params.size) adapted.size = params.size;
        if (params.n) adapted.n = params.n;
        if (params.quality) adapted.quality = params.quality;
        if (params.style) adapted.style = params.style;
        if (params.image) adapted.image = params.image;
        if (params.watermark !== void 0) adapted.watermark = params.watermark;
        return adapted;
      },
      video: (params) => {
        const model = params.model || "";
        if (model.includes("seedance")) {
          const content = [];
          let textPrompt = params.prompt || "";
          if (params.resolution) {
            textPrompt += ` --resolution ${params.resolution}`;
          }
          if (params.size) {
            textPrompt += ` --ratio ${params.size}`;
          }
          if (params.seconds) {
            textPrompt += ` --dur ${params.seconds}`;
          }
          textPrompt += ` --fps 24`;
          textPrompt += ` --wm ${params.wm !== false ? "true" : "false"}`;
          if (params.seed !== void 0) {
            textPrompt += ` --seed ${params.seed}`;
          }
          textPrompt += ` --cf ${params.cf === true ? "true" : "false"}`;
          content.push({
            type: "text",
            text: textPrompt
          });
          if (params.first_frame_image) {
            content.push({
              type: "image_url",
              image_url: {
                url: params.first_frame_image
              }
            });
          }
          const adapted2 = {
            model,
            content,
            generate_audio: params.generateAudio !== false
          };
          return adapted2;
        }
        if (model.includes("kling")) {
          const ratioMap = {
            "16:9": "16:9",
            "9:16": "9:16",
            "1:1": "1:1",
            "4:3": "4:3",
            "3:4": "3:4"
          };
          const adapted2 = {
            model_name: model,
            mode: "std",
            prompt: params.prompt || "",
            aspect_ratio: ratioMap[params.size] || "16:9",
            duration: params.seconds || 5,
            negative_prompt: "",
            cfg_scale: 0.5
          };
          if (params.first_frame_image) {
            adapted2.image = params.first_frame_image;
          }
          return adapted2;
        }
        const adapted = {
          model: params.model,
          prompt: params.prompt || ""
        };
        if (params.first_frame_image) adapted.first_frame_image = params.first_frame_image;
        if (params.last_frame_image) adapted.last_frame_image = params.last_frame_image;
        if (params.size) adapted.size = params.size;
        if (params.seconds) adapted.seconds = params.seconds;
        return adapted;
      }
    },
    // 火山引擎渠道响应格式
    responseAdapter: {
      chat: (response) => {
        if (response.choices && response.choices.length > 0) {
          return response.choices[0].message?.content || "";
        }
        return "";
      },
      image: (response) => {
        const data = response?.data || response?.images || response?.output || response;
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data && typeof data === "object") {
          if (Array.isArray(data.images)) items = data.images;
          else if (Array.isArray(data.results)) items = data.results;
          else if (Array.isArray(data.items)) items = data.items;
          else if (data.url || data.b64_json || data.image_url) items = [data];
          else items = [data];
        }
        return items.map((item) => ({
          url: item.url || item.b64_json || item.image_url || item.image || "",
          revisedPrompt: item.revised_prompt || item.revisedPrompt || ""
        })).filter((item) => item.url);
      },
      video: (response) => {
        return {
          url: response.data?.url || response.url || response.data?.[0]?.url || "",
          ...response
        };
      }
    }
  },
  openai: {
    label: "OpenAI",
    defaultBaseUrl: "https://api.openai.com",
    // 端点路径
    endpoints: {
      chat: "/v1/chat/completions",
      image: "/v1/images/generations",
      video: "/v1/videos",
      videoQuery: "/v1/videos/{taskId}"
    },
    // 请求参数适配
    requestAdapter: {
      chat: (params) => {
        const adapted = {
          model: params.model,
          messages: params.messages
        };
        if (params.temperature !== void 0) adapted.temperature = params.temperature;
        if (params.max_tokens !== void 0) adapted.max_tokens = params.max_tokens;
        if (params.stream !== void 0) adapted.stream = params.stream;
        return adapted;
      },
      image: (params) => {
        const adapted = {
          model: params.model,
          prompt: params.prompt
        };
        if (params.size) adapted.size = params.size;
        if (params.n) adapted.n = params.n;
        if (params.quality) adapted.quality = params.quality;
        if (params.style) adapted.style = params.style;
        if (params.image) adapted.image = params.image;
        return adapted;
      },
      video: (params) => {
        const adapted = {
          model: params.model,
          prompt: params.prompt || ""
        };
        if (params.first_frame_image) adapted.first_frame_image = params.first_frame_image;
        if (params.last_frame_image) adapted.last_frame_image = params.last_frame_image;
        if (params.size) adapted.size = params.size;
        if (params.seconds) adapted.seconds = params.seconds;
        return adapted;
      }
    },
    // 响应数据适配
    responseAdapter: {
      chat: (response) => {
        if (response.choices && response.choices.length > 0) {
          return response.choices[0].message?.content || "";
        }
        return "";
      },
      image: (response) => {
        const data = response?.data || response?.images || response?.output || response;
        let items = [];
        if (Array.isArray(data)) {
          items = data;
        } else if (data && typeof data === "object") {
          if (Array.isArray(data.images)) items = data.images;
          else if (Array.isArray(data.results)) items = data.results;
          else if (Array.isArray(data.items)) items = data.items;
          else if (data.url || data.b64_json || data.image_url) items = [data];
          else items = [data];
        }
        return items.map((item) => ({
          url: item.url || item.b64_json || item.image_url || item.image || "",
          revisedPrompt: item.revised_prompt || item.revisedPrompt || ""
        })).filter((item) => item.url);
      },
      video: (response) => {
        return {
          url: response.data?.url || response.url || response.data?.[0]?.url || "",
          ...response
        };
      }
    }
  },
  // 默认使用火山引擎
  default: "volcengine"
};
const getProviderList = () => {
  return Object.entries(PROVIDERS).filter(([key]) => key !== "default").map(([key, value]) => ({
    key,
    label: value.label
  }));
};
const getDefaultProvider = () => {
  return PROVIDERS.default;
};
const getDefaultBaseUrl = (providerKey) => {
  const config = getProviderConfig(providerKey);
  return config.defaultBaseUrl || "";
};
const getProviderConfig = (providerKey) => {
  return PROVIDERS[providerKey] || PROVIDERS[PROVIDERS.default];
};
const STORAGE_KEYS = {
  PROVIDER: "api-provider",
  CUSTOM_CHAT_MODELS: "custom-chat-models",
  CUSTOM_IMAGE_MODELS: "custom-image-models",
  CUSTOM_VIDEO_MODELS: "custom-video-models",
  SELECTED_CHAT_MODEL: "selected-chat-model",
  SELECTED_IMAGE_MODEL: "selected-image-model",
  SELECTED_VIDEO_MODEL: "selected-video-model",
  CUSTOM_CHAT_MODELS_BY_PROVIDER: "custom-chat-models-by-provider",
  CUSTOM_IMAGE_MODELS_BY_PROVIDER: "custom-image-models-by-provider",
  CUSTOM_VIDEO_MODELS_BY_PROVIDER: "custom-video-models-by-provider",
  API_KEYS_BY_PROVIDER: "api-keys-by-provider",
  BASE_URLS_BY_PROVIDER: "base-urls-by-provider"
};
const getStored = (key, defaultValue = "") => {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch {
    return defaultValue;
  }
};
const setStored = (key, value) => {
  try {
    if (value) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  } catch {
  }
};
const getStoredJson = (key, defaultValue = []) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};
const setStoredJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
  }
};
const isModelSupported = (model, provider) => {
  if (!model.provider) {
    return true;
  }
  return model.provider.includes(provider);
};
const useModelStore = defineStore("model", () => {
  const currentProvider = ref(getStored(STORAGE_KEYS.PROVIDER) || getDefaultProvider());
  const providerList = computed(() => getProviderList());
  const providerConfig = computed(() => getProviderConfig(currentProvider.value));
  const providerLabel = computed(() => providerConfig.value.label || currentProvider.value);
  const setProvider = (provider) => {
    if (PROVIDERS[provider]) {
      currentProvider.value = provider;
      setStored(STORAGE_KEYS.PROVIDER, provider);
    }
  };
  const clearProvider = () => {
    currentProvider.value = getDefaultProvider();
    removeStored(STORAGE_KEYS.PROVIDER);
  };
  const adaptRequest = (type4, params) => {
    const config = providerConfig.value;
    if (config.requestAdapter && config.requestAdapter[type4]) {
      return config.requestAdapter[type4](params);
    }
    return params;
  };
  const adaptResponse = (type4, response) => {
    const config = providerConfig.value;
    if (config.responseAdapter && config.responseAdapter[type4]) {
      return config.responseAdapter[type4](response);
    }
    return response;
  };
  const customChatModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS, []));
  const customImageModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS, []));
  const customVideoModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS, []));
  const customChatModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS_BY_PROVIDER, {}));
  const customImageModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS_BY_PROVIDER, {}));
  const customVideoModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS_BY_PROVIDER, {}));
  const selectedChatModel = ref(getStored(STORAGE_KEYS.SELECTED_CHAT_MODEL, DEFAULT_CHAT_MODEL));
  const selectedImageModel = ref(getStored(STORAGE_KEYS.SELECTED_IMAGE_MODEL, DEFAULT_IMAGE_MODEL));
  const selectedVideoModel = ref(getStored(STORAGE_KEYS.SELECTED_VIDEO_MODEL, DEFAULT_VIDEO_MODEL));
  const apiKeysByProvider = ref(getStoredJson(STORAGE_KEYS.API_KEYS_BY_PROVIDER, {}));
  const baseUrlsByProvider = ref(getStoredJson(STORAGE_KEYS.BASE_URLS_BY_PROVIDER, {}));
  const currentApiKey = computed(() => apiKeysByProvider.value[currentProvider.value] || "");
  const currentBaseUrl = computed(() => baseUrlsByProvider.value[currentProvider.value] || getDefaultBaseUrl(currentProvider.value));
  const setApiKeyByProvider = (provider, apiKey) => {
    apiKeysByProvider.value[provider] = apiKey;
  };
  const setBaseUrlByProvider = (provider, baseUrl) => {
    baseUrlsByProvider.value[provider] = baseUrl;
  };
  const clearApiConfigByProvider = (provider) => {
    delete apiKeysByProvider.value[provider];
    delete baseUrlsByProvider.value[provider];
  };
  const allChatModels = computed(() => [
    ...CHAT_MODELS.map((m) => ({ ...m, isCustom: false })),
    ...customChatModels.value.map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true
    })),
    // 添加当前渠道的自定义模型
    ...(customChatModelsByProvider.value[currentProvider.value] || []).map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true,
      provider: [currentProvider.value]
    }))
  ]);
  const allImageModels = computed(() => [
    ...IMAGE_MODELS.map((m) => ({ ...m, isCustom: false })),
    ...customImageModels.value.map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true,
      sizes: [],
      defaultParams: { quality: "standard", style: "vivid" }
    })),
    // 添加当前渠道的自定义模型
    ...(customImageModelsByProvider.value[currentProvider.value] || []).map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true,
      sizes: [],
      defaultParams: { quality: "standard", style: "vivid" },
      provider: [currentProvider.value]
    }))
  ]);
  const allVideoModels = computed(() => [
    ...VIDEO_MODELS.map((m) => ({ ...m, isCustom: false })),
    ...customVideoModels.value.map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true,
      ratios: ["16x9", "9:16", "1:1"],
      durs: [{ label: "5 秒", key: 5 }, { label: "10 秒", key: 10 }],
      defaultParams: { ratio: "16:9", duration: 5 }
    })),
    // 添加当前渠道的自定义模型
    ...(customVideoModelsByProvider.value[currentProvider.value] || []).map((m) => ({
      label: m.label || m.key,
      key: m.key,
      isCustom: true,
      ratios: ["16x9", "9:16", "1:1"],
      durs: [{ label: "5 秒", key: 5 }, { label: "10 秒", key: 10 }],
      defaultParams: { ratio: "16:9", duration: 5 },
      provider: [currentProvider.value]
    }))
  ]);
  const availableChatModels = computed(
    () => allChatModels.value.filter((m) => isModelSupported(m, currentProvider.value))
  );
  const availableImageModels = computed(
    () => allImageModels.value.filter((m) => isModelSupported(m, currentProvider.value))
  );
  const availableVideoModels = computed(
    () => allVideoModels.value.filter((m) => isModelSupported(m, currentProvider.value))
  );
  const allImageModelOptions = computed(
    () => allImageModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const allVideoModelOptions = computed(
    () => allVideoModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const allChatModelOptions = computed(
    () => allChatModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const imageModelOptions = computed(
    () => availableImageModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const videoModelOptions = computed(
    () => availableVideoModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const chatModelOptions = computed(
    () => availableChatModels.value.map((m) => ({
      label: m.label,
      key: m.key
    }))
  );
  const addCustomChatModel = (modelKey, label = "") => {
    if (!modelKey || customChatModels.value.some((m) => m.key === modelKey)) return false;
    customChatModels.value.push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const addCustomImageModel = (modelKey, label = "") => {
    if (!modelKey || customImageModels.value.some((m) => m.key === modelKey)) return false;
    customImageModels.value.push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const addCustomVideoModel = (modelKey, label = "") => {
    if (!modelKey || customVideoModels.value.some((m) => m.key === modelKey)) return false;
    customVideoModels.value.push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const removeCustomChatModel = (modelKey) => {
    const idx = customChatModels.value.findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customChatModels.value.splice(idx, 1);
      if (selectedChatModel.value === modelKey) {
        selectedChatModel.value = DEFAULT_CHAT_MODEL;
      }
      return true;
    }
    return false;
  };
  const removeCustomImageModel = (modelKey) => {
    const idx = customImageModels.value.findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customImageModels.value.splice(idx, 1);
      if (selectedImageModel.value === modelKey) {
        selectedImageModel.value = DEFAULT_IMAGE_MODEL;
      }
      return true;
    }
    return false;
  };
  const removeCustomVideoModel = (modelKey) => {
    const idx = customVideoModels.value.findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customVideoModels.value.splice(idx, 1);
      if (selectedVideoModel.value === modelKey) {
        selectedVideoModel.value = DEFAULT_VIDEO_MODEL;
      }
      return true;
    }
    return false;
  };
  const getChatModel = (key) => allChatModels.value.find((m) => m.key === key);
  const getImageModel = (key) => allImageModels.value.find((m) => m.key === key);
  const getVideoModel = (key) => allVideoModels.value.find((m) => m.key === key);
  const getImageEndpoint = () => {
    const endpoint = providerConfig.value.endpoints?.image || "/images/generations";
    return `${currentBaseUrl.value}${endpoint}`;
  };
  const getVideoEndpoint = () => {
    const endpoint = providerConfig.value.endpoints?.video || "/videos";
    return `${currentBaseUrl.value}${endpoint}`;
  };
  const getVideoTaskEndpoint = () => {
    const config = providerConfig.value;
    let endpoint = config.endpoints?.videoQuery || config.endpoints?.video || "/videos";
    return `${currentBaseUrl.value}${endpoint}`;
  };
  const getChatEndpoint = () => {
    const endpoint = providerConfig.value?.endpoints?.chat || "/chat/completions";
    return `${currentBaseUrl.value}${endpoint}`;
  };
  const getModelsByProvider = (provider) => {
    const chat = [
      ...CHAT_MODELS.filter((m) => isModelSupported(m, provider)).map((m) => ({ ...m, isCustom: false })),
      ...(customChatModelsByProvider.value[provider] || []).map((m) => ({
        label: m.label || m.key,
        key: m.key,
        isCustom: true,
        provider: [provider]
      }))
    ];
    const image = [
      ...IMAGE_MODELS.filter((m) => isModelSupported(m, provider)).map((m) => ({ ...m, isCustom: false })),
      ...(customImageModelsByProvider.value[provider] || []).map((m) => ({
        label: m.label || m.key,
        key: m.key,
        isCustom: true,
        sizes: [],
        defaultParams: { quality: "standard", style: "vivid" },
        provider: [provider]
      }))
    ];
    const video = [
      ...VIDEO_MODELS.filter((m) => isModelSupported(m, provider)).map((m) => ({ ...m, isCustom: false })),
      ...(customVideoModelsByProvider.value[provider] || []).map((m) => ({
        label: m.label || m.key,
        key: m.key,
        isCustom: true,
        ratios: ["16x9", "9:16", "1:1"],
        durs: [{ label: "5 秒", key: 5 }, { label: "10 秒", key: 10 }],
        defaultParams: { ratio: "16:9", duration: 5 },
        provider: [provider]
      }))
    ];
    return { chat, image, video };
  };
  const addCustomChatModelByProvider = (modelKey, provider, label = "") => {
    if (!modelKey) return false;
    if (!customChatModelsByProvider.value[provider]) {
      customChatModelsByProvider.value[provider] = [];
    }
    if (customChatModelsByProvider.value[provider].some((m) => m.key === modelKey)) return false;
    customChatModelsByProvider.value[provider].push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const addCustomImageModelByProvider = (modelKey, provider, label = "") => {
    if (!modelKey) return false;
    if (!customImageModelsByProvider.value[provider]) {
      customImageModelsByProvider.value[provider] = [];
    }
    if (customImageModelsByProvider.value[provider].some((m) => m.key === modelKey)) return false;
    customImageModelsByProvider.value[provider].push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const addCustomVideoModelByProvider = (modelKey, provider, label = "") => {
    if (!modelKey) return false;
    if (!customVideoModelsByProvider.value[provider]) {
      customVideoModelsByProvider.value[provider] = [];
    }
    if (customVideoModelsByProvider.value[provider].some((m) => m.key === modelKey)) return false;
    customVideoModelsByProvider.value[provider].push({ key: modelKey, label: label || modelKey });
    return true;
  };
  const removeCustomChatModelByProvider = (modelKey, provider) => {
    if (!customChatModelsByProvider.value[provider]) return false;
    const idx = customChatModelsByProvider.value[provider].findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customChatModelsByProvider.value[provider].splice(idx, 1);
      return true;
    }
    return false;
  };
  const removeCustomImageModelByProvider = (modelKey, provider) => {
    if (!customImageModelsByProvider.value[provider]) return false;
    const idx = customImageModelsByProvider.value[provider].findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customImageModelsByProvider.value[provider].splice(idx, 1);
      return true;
    }
    return false;
  };
  const removeCustomVideoModelByProvider = (modelKey, provider) => {
    if (!customVideoModelsByProvider.value[provider]) return false;
    const idx = customVideoModelsByProvider.value[provider].findIndex((m) => m.key === modelKey);
    if (idx > -1) {
      customVideoModelsByProvider.value[provider].splice(idx, 1);
      return true;
    }
    return false;
  };
  const clearCustomModels = () => {
    customChatModels.value = [];
    customImageModels.value = [];
    customVideoModels.value = [];
    selectedChatModel.value = DEFAULT_CHAT_MODEL;
    selectedImageModel.value = DEFAULT_IMAGE_MODEL;
    selectedVideoModel.value = DEFAULT_VIDEO_MODEL;
  };
  watch(customChatModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS, val), { deep: true });
  watch(customImageModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS, val), { deep: true });
  watch(customVideoModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS, val), { deep: true });
  watch(customChatModelsByProvider, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS_BY_PROVIDER, val), { deep: true });
  watch(customImageModelsByProvider, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS_BY_PROVIDER, val), { deep: true });
  watch(customVideoModelsByProvider, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS_BY_PROVIDER, val), { deep: true });
  watch(selectedChatModel, (val) => setStored(STORAGE_KEYS.SELECTED_CHAT_MODEL, val));
  watch(selectedImageModel, (val) => setStored(STORAGE_KEYS.SELECTED_IMAGE_MODEL, val));
  watch(selectedVideoModel, (val) => setStored(STORAGE_KEYS.SELECTED_VIDEO_MODEL, val));
  watch(apiKeysByProvider, (val) => setStoredJson(STORAGE_KEYS.API_KEYS_BY_PROVIDER, val), { deep: true });
  watch(baseUrlsByProvider, (val) => setStoredJson(STORAGE_KEYS.BASE_URLS_BY_PROVIDER, val), { deep: true });
  return {
    // Provider
    currentProvider,
    providerList,
    providerConfig,
    providerLabel,
    setProvider,
    clearProvider,
    adaptRequest,
    adaptResponse,
    // All models (built-in + custom)
    allChatModels,
    allImageModels,
    allVideoModels,
    // Available models filtered by provider
    availableChatModels,
    availableImageModels,
    availableVideoModels,
    // Model options for UI (dropdown format)
    imageModelOptions,
    videoModelOptions,
    chatModelOptions,
    // All model options (not filtered by provider)
    allImageModelOptions,
    allVideoModelOptions,
    allChatModelOptions,
    // Selected models
    selectedChatModel,
    selectedImageModel,
    selectedVideoModel,
    // Custom models
    customChatModels,
    customImageModels,
    customVideoModels,
    // Custom models by provider
    customChatModelsByProvider,
    customImageModelsByProvider,
    customVideoModelsByProvider,
    // Add/Remove methods
    addCustomChatModel,
    addCustomImageModel,
    addCustomVideoModel,
    removeCustomChatModel,
    removeCustomImageModel,
    removeCustomVideoModel,
    // Add/Remove by provider methods
    addCustomChatModelByProvider,
    addCustomImageModelByProvider,
    addCustomVideoModelByProvider,
    removeCustomChatModelByProvider,
    removeCustomImageModelByProvider,
    removeCustomVideoModelByProvider,
    // Get model
    getChatModel,
    getImageModel,
    getVideoModel,
    // Get API endpoints
    getImageEndpoint,
    getVideoEndpoint,
    getVideoTaskEndpoint,
    getChatEndpoint,
    // Get models by provider (for ApiSettings)
    getModelsByProvider,
    // Clear all custom models
    clearCustomModels,
    // API Config by provider
    currentApiKey,
    currentBaseUrl,
    apiKeysByProvider,
    baseUrlsByProvider,
    setApiKeyByProvider,
    setBaseUrlByProvider,
    clearApiConfigByProvider
  };
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "endpoint-list" };
const _hoisted_2$1 = { class: "endpoint-item" };
const _hoisted_3$1 = { class: "endpoint-item" };
const _hoisted_4 = { class: "endpoint-item" };
const _hoisted_5 = { class: "endpoint-item" };
const _hoisted_6 = { class: "model-config-section" };
const _hoisted_7 = { class: "model-group" };
const _hoisted_8 = { class: "model-group-header" };
const _hoisted_9 = { class: "model-input-row" };
const _hoisted_10 = { class: "model-tags" };
const _hoisted_11 = { class: "model-group" };
const _hoisted_12 = { class: "model-group-header" };
const _hoisted_13 = { class: "model-input-row" };
const _hoisted_14 = { class: "model-tags" };
const _hoisted_15 = { class: "model-group" };
const _hoisted_16 = { class: "model-group-header" };
const _hoisted_17 = { class: "model-input-row" };
const _hoisted_18 = { class: "model-tags" };
const _hoisted_19 = { class: "flex justify-between items-center" };
const _hoisted_20 = { class: "flex gap-2" };
const _sfc_main$1 = {
  __name: "ApiSettings",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:show", "saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isConfigured = computed(() => !!modelStore.currentApiKey);
    const modelStore = useModelStore();
    const providerOptions = modelStore.providerList.map((p) => ({
      label: p.label,
      value: p.key
    }));
    const currentEndpoints = computed(() => {
      const config = getProviderConfig(formData.provider);
      return config.endpoints || {
        chat: "/chat/completions",
        image: "/v1/images/generations",
        video: "/v1/videos",
        videoQuery: "/v1/videos/{taskId}"
      };
    });
    const allChatModels = computed(() => modelStore.allChatModels);
    const allImageModels = computed(() => modelStore.allImageModels);
    const allVideoModels = computed(() => modelStore.allVideoModels);
    const showModal = ref(props.show);
    const formData = reactive({
      provider: modelStore.currentProvider,
      apiKey: "",
      baseUrl: ""
    });
    const newChatModel = ref("");
    const newImageModel = ref("");
    const newVideoModel = ref("");
    const updateFormApiConfig = () => {
      const provider = formData.provider;
      const config = getProviderConfig(provider);
      formData.apiKey = modelStore.apiKeysByProvider[provider] || "";
      formData.baseUrl = modelStore.baseUrlsByProvider[provider] || config.defaultBaseUrl || "";
    };
    watch(() => props.show, (val) => {
      showModal.value = val;
      if (val) {
        formData.provider = modelStore.currentProvider;
        updateFormApiConfig();
      }
    });
    watch(() => formData.provider, () => {
      updateFormApiConfig();
    });
    watch(showModal, (val) => {
      emit("update:show", val);
    });
    const handleAddChatModel = () => {
      if (newChatModel.value.trim()) {
        modelStore.addCustomChatModel(newChatModel.value.trim());
        newChatModel.value = "";
      }
    };
    const handleAddImageModel = () => {
      if (newImageModel.value.trim()) {
        modelStore.addCustomImageModel(newImageModel.value.trim());
        newImageModel.value = "";
      }
    };
    const handleAddVideoModel = () => {
      if (newVideoModel.value.trim()) {
        modelStore.addCustomVideoModel(newVideoModel.value.trim());
        newVideoModel.value = "";
      }
    };
    const handleRemoveChatModel = (modelKey) => {
      modelStore.removeCustomChatModel(modelKey);
    };
    const handleRemoveImageModel = (modelKey) => {
      modelStore.removeCustomImageModel(modelKey);
    };
    const handleRemoveVideoModel = (modelKey) => {
      modelStore.removeCustomVideoModel(modelKey);
    };
    const handleSave = () => {
      if (formData.provider) {
        modelStore.setProvider(formData.provider);
      }
      if (formData.apiKey) {
        modelStore.setApiKeyByProvider(formData.provider, formData.apiKey);
      }
      if (formData.baseUrl) {
        modelStore.setBaseUrlByProvider(formData.provider, formData.baseUrl);
      }
      showModal.value = false;
      emit("saved");
    };
    const handleClear = () => {
      modelStore.clearApiConfigByProvider(formData.provider);
      modelStore.clearCustomModels();
      formData.apiKey = "";
      formData.baseUrl = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NModal), {
        show: showModal.value,
        "onUpdate:show": _cache[7] || (_cache[7] = ($event) => showModal.value = $event),
        preset: "card",
        title: "API 设置",
        style: { "width": "560px" }
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_19, [
            _cache[24] || (_cache[24] = createBaseVNode("a", {
              href: "https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey",
              target: "_blank",
              class: "text-xs text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors"
            }, " 没有 API Key？点击注册 ", -1)),
            createBaseVNode("div", _hoisted_20, [
              createVNode(unref(Button), {
                onClick: handleClear,
                tertiary: ""
              }, {
                default: withCtx(() => [..._cache[21] || (_cache[21] = [
                  createTextVNode("清除配置", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(Button), {
                onClick: _cache[6] || (_cache[6] = ($event) => showModal.value = false)
              }, {
                default: withCtx(() => [..._cache[22] || (_cache[22] = [
                  createTextVNode("取消", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(Button), {
                type: "primary",
                onClick: handleSave
              }, {
                default: withCtx(() => [..._cache[23] || (_cache[23] = [
                  createTextVNode("保存", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        default: withCtx(() => [
          createVNode(unref(NTabs), {
            type: "line",
            animated: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(NTabPane), {
                name: "api",
                tab: "API 配置"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NForm), {
                    ref: "formRef",
                    model: formData,
                    "label-placement": "left",
                    "label-width": "80"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NFormItem), {
                        label: "渠道",
                        path: "provider"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NSelect), {
                            value: formData.provider,
                            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formData.provider = $event),
                            options: unref(providerOptions),
                            placeholder: "选择 API 渠道"
                          }, null, 8, ["value", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "Base URL",
                        path: "baseUrl"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formData.baseUrl,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formData.baseUrl = $event),
                            placeholder: "输入端点"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NFormItem), {
                        label: "API Key",
                        path: "apiKey"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NInput), {
                            value: formData.apiKey,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => formData.apiKey = $event),
                            type: "password",
                            "show-password-on": "click",
                            placeholder: "请输入 API Key"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NDivider), {
                        "title-placement": "left",
                        class: "!my-3"
                      }, {
                        default: withCtx(() => [..._cache[8] || (_cache[8] = [
                          createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "端点路径", -1)
                        ])]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_1$1, [
                        createBaseVNode("div", _hoisted_2$1, [
                          _cache[9] || (_cache[9] = createBaseVNode("span", { class: "endpoint-label" }, "问答", -1)),
                          createVNode(unref(NTag), {
                            size: "small",
                            type: "info",
                            class: "endpoint-tag"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(currentEndpoints.value.chat), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_3$1, [
                          _cache[10] || (_cache[10] = createBaseVNode("span", { class: "endpoint-label" }, "生图", -1)),
                          createVNode(unref(NTag), {
                            size: "small",
                            type: "success",
                            class: "endpoint-tag"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(currentEndpoints.value.image), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_4, [
                          _cache[11] || (_cache[11] = createBaseVNode("span", { class: "endpoint-label" }, "视频生成", -1)),
                          createVNode(unref(NTag), {
                            size: "small",
                            type: "warning",
                            class: "endpoint-tag"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(currentEndpoints.value.video), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          _cache[12] || (_cache[12] = createBaseVNode("span", { class: "endpoint-label" }, "视频查询", -1)),
                          createVNode(unref(NTag), {
                            size: "small",
                            type: "warning",
                            class: "endpoint-tag"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(currentEndpoints.value.videoQuery), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      !isConfigured.value ? (openBlock(), createBlock(unref(NAlert), {
                        key: 0,
                        type: "warning",
                        title: "未配置",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [..._cache[13] || (_cache[13] = [
                          createBaseVNode("div", { class: "flex flex-col gap-2" }, [
                            createBaseVNode("p", null, "请配置 API Key 以使用 AI 功能"),
                            createBaseVNode("a", {
                              href: "https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey",
                              target: "_blank",
                              class: "text-[var(--accent-color)] hover:underline text-sm flex items-center gap-1"
                            }, [
                              createTextVNode(" 🔗 点击获取 API Key "),
                              createBaseVNode("span", { class: "text-xs" }, "（火山引擎方舟）")
                            ])
                          ], -1)
                        ])]),
                        _: 1
                      })) : (openBlock(), createBlock(unref(NAlert), {
                        key: 1,
                        type: "success",
                        title: "已配置",
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [..._cache[14] || (_cache[14] = [
                          createTextVNode(" API 已就绪，可以使用 AI 功能 ", -1)
                        ])]),
                        _: 1
                      }))
                    ]),
                    _: 1
                  }, 8, ["model"])
                ]),
                _: 1
              }),
              createVNode(unref(NTabPane), {
                name: "models",
                tab: "模型配置"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        _cache[15] || (_cache[15] = createBaseVNode("span", { class: "model-group-title" }, "问答模型", -1)),
                        createVNode(unref(NTag), {
                          size: "tiny",
                          type: "info"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(allChatModels.value.length) + " 个", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(unref(NInput), {
                          value: newChatModel.value,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => newChatModel.value = $event),
                          placeholder: "输入模型名称，如 gpt-4o",
                          size: "small",
                          onKeyup: withKeys(handleAddChatModel, ["enter"])
                        }, null, 8, ["value"]),
                        createVNode(unref(Button), {
                          size: "small",
                          type: "primary",
                          onClick: handleAddChatModel,
                          disabled: !newChatModel.value
                        }, {
                          default: withCtx(() => [..._cache[16] || (_cache[16] = [
                            createTextVNode(" 添加 ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createBaseVNode("div", _hoisted_10, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(allChatModels.value, (model) => {
                          return openBlock(), createBlock(unref(NTag), {
                            key: model.key,
                            size: "small",
                            closable: model.isCustom,
                            type: model.isCustom ? "info" : "default",
                            onClose: ($event) => handleRemoveChatModel(model.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(model.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["closable", "type", "onClose"]);
                        }), 128))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        _cache[17] || (_cache[17] = createBaseVNode("span", { class: "model-group-title" }, "图片模型", -1)),
                        createVNode(unref(NTag), {
                          size: "tiny",
                          type: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(allImageModels.value.length) + " 个", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_13, [
                        createVNode(unref(NInput), {
                          value: newImageModel.value,
                          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => newImageModel.value = $event),
                          placeholder: "输入模型名称，如 dall-e-3",
                          size: "small",
                          onKeyup: withKeys(handleAddImageModel, ["enter"])
                        }, null, 8, ["value"]),
                        createVNode(unref(Button), {
                          size: "small",
                          type: "primary",
                          onClick: handleAddImageModel,
                          disabled: !newImageModel.value
                        }, {
                          default: withCtx(() => [..._cache[18] || (_cache[18] = [
                            createTextVNode(" 添加 ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(allImageModels.value, (model) => {
                          return openBlock(), createBlock(unref(NTag), {
                            key: model.key,
                            size: "small",
                            closable: model.isCustom,
                            type: model.isCustom ? "success" : "default",
                            onClose: ($event) => handleRemoveImageModel(model.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(model.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["closable", "type", "onClose"]);
                        }), 128))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        _cache[19] || (_cache[19] = createBaseVNode("span", { class: "model-group-title" }, "视频模型", -1)),
                        createVNode(unref(NTag), {
                          size: "tiny",
                          type: "warning"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(allVideoModels.value.length) + " 个", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(unref(NInput), {
                          value: newVideoModel.value,
                          "onUpdate:value": _cache[5] || (_cache[5] = ($event) => newVideoModel.value = $event),
                          placeholder: "输入模型名称，如 sora-2",
                          size: "small",
                          onKeyup: withKeys(handleAddVideoModel, ["enter"])
                        }, null, 8, ["value"]),
                        createVNode(unref(Button), {
                          size: "small",
                          type: "primary",
                          onClick: handleAddVideoModel,
                          disabled: !newVideoModel.value
                        }, {
                          default: withCtx(() => [..._cache[20] || (_cache[20] = [
                            createTextVNode(" 添加 ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(allVideoModels.value, (model) => {
                          return openBlock(), createBlock(unref(NTag), {
                            key: model.key,
                            size: "small",
                            closable: model.isCustom,
                            type: model.isCustom ? "warning" : "default",
                            onClose: ($event) => handleRemoveVideoModel(model.key)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(model.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["closable", "type", "onClose"]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
};
const ApiSettings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-402f2d5d"]]);
const _hoisted_1 = { class: "flex items-center justify-between px-4 md:px-8 py-4 border-b border-[var(--border-color)]" };
const _hoisted_2 = { class: "flex items-center gap-2" };
const _hoisted_3 = { class: "flex items-center gap-4" };
const _sfc_main = {
  __name: "AppHeader",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "left")
        ]),
        createBaseVNode("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "center"),
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => unref(toggleTheme) && unref(toggleTheme)(...args)),
            class: "p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors outline-none"
          }, [
            createVNode(unref(NIcon), { size: 20 }, {
              default: withCtx(() => [
                unref(isDark) ? (openBlock(), createBlock(unref(SunnyOutline), { key: 0 })) : (openBlock(), createBlock(unref(MoonOutline), { key: 1 }))
              ]),
              _: 1
            })
          ]),
          renderSlot(_ctx.$slots, "right")
        ])
      ]);
    };
  }
};
const promptList = [
  "林间白衣少女",
  "云海执剑侠客",
  "银发蓝瞳少年",
  "弄堂旗袍女子",
  "雨夜机甲少女",
  "草原骑马少年",
  "黑袍女巫水晶球",
  "秋日校服少女",
  "雨中樱花浪人",
  "云端白翼天使",
  "晚霞海盗船长",
  "晨雾瑜伽少女",
  "雨巷油纸书生",
  "实验室机械人偶",
  "篝火游牧公主",
  "蓝光电竞少女",
  "森林尖耳精灵",
  "深海潜水少女",
  "舞台摇滚歌手",
  "雪山登山旅人",
  "古堡洛丽塔少女",
  "古寺静坐僧侣",
  "太空宇航员",
  "窗边芭蕾舞者",
  "月夜黑衣刺客",
  "码头渔村少女",
  "高塔炼金术士",
  "夜景都市白领",
  "雨林部落少女",
  "公路机车骑士",
  "烟雨古风仙子",
  "麦田放风筝孩童",
  "宫殿银发女王",
  "海岸冲浪少年",
  "窗下伏案才女",
  "废墟末日猎人",
  "月光深海人鱼",
  "球场棒球少年",
  "庄园下午茶贵妇",
  "云海御剑道长",
  "雾绕喀斯特峰林",
  "冰川极光洞穴",
  "春雨江南水乡",
  "沙漠银河星空",
  "雨林丁达尔光",
  "樱花富士山湖",
  "悬崖惊涛海岸",
  "漫山秋日枫林",
  "雪原漫天飞雪",
  "深海发光水母",
  "浮空岛屿瀑布",
  "古镇黄昏灯笼",
  "草原花海牛羊",
  "荒芜火山地貌",
  "薄雾竹林小径",
  "水城彩色贡多拉",
  "戈壁落日雅丹",
  "雪山高山草甸",
  "雾凇冰晶森林",
  "椰林白沙滩海岛",
  "藤蔓废弃乐园",
  "日出云海梯田",
  "碧水峡谷河流",
  "萤火暗夜森林",
  "悬崖欧式古堡",
  "黄昏渔港归船",
  "双星外星地貌",
  "古道金黄银杏",
  "镜面盐湖大地",
  "黄山松涛云海",
  "芦苇晨雾湿地",
  "朝霞都市天际线",
  "溶洞彩色钟乳石",
  "紫色薰衣草庄园",
  "裂纹冰封湖面",
  "雨林彩虹瀑布",
  "云层浮空港口",
  "炊烟山间梯田",
  "礁石海鸟海滩",
  "丛林上古石像",
  "月夜九尾白狐",
  "鎏金巨龙腾云",
  "林间花角白鹿",
  "深海巨大蓝鲸",
  "沼泽展翅仙鹤",
  "森林纯白独角兽",
  "雨林黑豹巡行",
  "浴火涅槃凤凰",
  "池塘五彩锦鲤",
  "雪原银灰巨狼",
  "花海漫天彩蝶",
  "海面浮游玄龟",
  "古枝暗夜猫头鹰",
  "珊瑚成群海马",
  "祥云山间麒麟",
  "草原落日雄狮",
  "雷云电光雷鸟",
  "窗台慵懒猫咪",
  "云海巨鲲遨游",
  "林间秋日麋鹿",
  "悬崖小型翼龙",
  "竹林大熊猫",
  "溪流戏水水獭",
  "海面精卫神鸟",
  "雪山白虎迎风",
  "长空信天翁",
  "雨林七彩鹦鹉",
  "远古山林食铁兽",
  "花丛萤火虫群",
  "夕阳礁石海狮",
  "窗下古风书桌",
  "黄铜齿轮钟表",
  "庭院假山鱼池",
  "落地窗巨型图书馆",
  "樱花落武士刀",
  "祭坛发光圣杯",
  "复古胶片相机",
  "森林茅草小屋",
  "雨夜赛博街巷",
  "瓷瓶寒梅插花",
  "远洋木质帆船",
  "宝石魔法法杖",
  "极简日式茶室",
  "暖光黑胶唱机",
  "石柱悬空神殿",
  "古巷竹编灯笼",
  "太空流线飞船",
  "陶罐鲜果静物",
  "石窟天光佛像",
  "云海热气球群",
  "电影级景深光影",
  "宫崎骏手绘风",
  "厚涂油画笔触",
  "干净二次元画风",
  "胶片写实摄影",
  "留白水墨国风",
  "霓虹赛博朋克",
  "复古蒸汽朋克",
  "日式浮世绘",
  "马卡龙治愈插画",
  "超现实奇幻构图",
  "新海诚通透光影",
  "哥特暗调美学",
  "莫兰迪低饱和",
  "敦煌复古壁画",
  "逆光金色轮廓光",
  "朦胧漫射柔光",
  "水面波光碎影",
  "粒子星尘特效",
  "生锈废墟质感",
  "少女乘蒲公英浮空",
  "楼顶机甲眺望晚霞",
  "扁舟穿行桃花江",
  "外星荧光水晶森林",
  "孩童与白鹿林间",
  "鱼群环绕海底古城",
  "浮空岛空中市集",
  "雨夜撑伞东京街巷",
  "仙门云海仙鹤飞",
  "女巫飞越满月森林",
  "湖泊倒映雪山星空",
  "火车穿行花海隧道",
  "灵狐栖于桃花枝头",
  "舷窗遥望银河星云",
  "庭院落雪红梅开",
  "巨树内部村落城邦",
  "粉橙日落沙滩海岸",
  "机甲对峙古风城楼",
  "夏夜孩童追萤火",
  "冰原极光上古神殿",
  "雨后鲜花玻璃橱窗",
  "浮空岛垂落大瀑布",
  "断桥夜雨抚琴人",
  "深海珊瑚人鱼城堡",
  "梧桐道少女等列车",
  "火山脚下古老石阵",
  "云朵幻化成绵羊",
  "荷塘烟雨执伞女子",
  "列车穿行雾中都市",
  "荒原锈蚀巨型机器人",
  "牡丹花海仕女抚琴",
  "雪原木屋窗边暖灯",
  "树屋精灵发光菌类",
  "夜市渔船海面灯火",
  "石桥流水春日桃花",
  "迷雾海上孤帆远航",
  "藤蔓缠绕巨型雕像",
  "露台远眺满城灯火",
  "风沙淹没古城遗迹",
  "月下花丛翩跹蝶舞",
  "冰雪山间隐秘木屋",
  "流云缠绕高山神殿",
  "浅滩湖面白鹭低飞",
  "长廊晚风摇曳花灯",
  "荒漠孤树漫天晚霞",
  "云间飞鸟穿越霞光",
  "青石古道漫山野花",
  "浪涛拍打黑色礁石",
  "烛光照亮古老卷轴",
  "晚风拂动芦苇花海"
];
function getRandomSuggestion(count = 5) {
  const list = [...promptList];
  const result = [];
  const max = Math.min(count, list.length);
  for (let i = 0; i < max; i++) {
    const randomIndex = Math.floor(Math.random() * list.length);
    result.push(list[randomIndex]);
    list.splice(randomIndex, 1);
  }
  return result;
}
export {
  ApiSettings as A,
  SEEDREAM_SIZE_OPTIONS as B,
  CopyOutline as C,
  DEFAULT_CHAT_MODEL as D,
  SEEDREAM_4K_SIZE_OPTIONS as E,
  VIDEO_RATIO_OPTIONS as F,
  VIDEO_RATIO_LIST as G,
  VIDEO_DURATION_OPTIONS as H,
  IMAGE_MODELS as I,
  getModelByName as J,
  _export_sfc as K,
  NSelect as L,
  NIcon as N,
  PROVIDERS as P,
  RefreshOutline as R,
  SettingsOutline as S,
  TrashOutline as T,
  VIDEO_MODELS as V,
  _sfc_main as _,
  SendOutline as a,
  AddOutline as b,
  createProject as c,
  NDropdown as d,
  NInput as e,
  deleteProject as f,
  getRandomSuggestion as g,
  duplicateProject as h,
  initProjectsStore as i,
  NPopover as j,
  popoverBaseProps as k,
  useLocale as l,
  useMergedState as m,
  beforeNextFrameOnce as n,
  useCompitable as o,
  projects as p,
  updateProjectCanvas as q,
  renameProject as r,
  getProjectCanvas as s,
  DEFAULT_VIDEO_MODEL as t,
  useModelStore as u,
  DEFAULT_IMAGE_MODEL as v,
  getDefaultProvider as w,
  getProviderList as x,
  getProviderConfig as y,
  CHAT_MODELS as z
};
