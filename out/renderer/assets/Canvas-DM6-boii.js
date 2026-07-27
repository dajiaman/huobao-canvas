import { x as toString$1, y as replaceable, s as h, a as defineComponent, z as createTheme, A as popoverLight, C as derived, D as commonVars, E as composite, G as useConfig, H as useTheme, m as computed, r as ref, I as commonVars$1, J as changeColor, K as createInjectionKey, L as c, M as cB, O as fadeInTransition, P as fadeInScaleUpTransition, Q as cNotM, R as NBaseIcon, S as LazyTeleport, g as withDirectives, T as zindexable, U as Transition$2, F as Fragment, V as vShow, W as toRefs$1, X as watch, Y as onBeforeUnmount, Z as off, _ as useThemeClass, $ as isMounted, a0 as call, i as inject, a1 as on, a2 as normalizeStyle, a3 as toRef, a4 as cM, a5 as NBaseLoading, a6 as watchEffect, a7 as exposedLoadingProps, a8 as spinLight, a9 as pxfy, aa as createKey, ab as cE, ac as iconSwitchTransition, ad as isSlotEmpty, ae as resolveWrappedSlot, af as useFormItem, ag as NIconSwitchTransition, ah as depx, o as openBlock, c as createElementBlock, ai as createStaticVNode, b as createBaseVNode, aj as effectScope, ak as useSlots, al as onUnmounted, f as createVNode, w as withCtx, am as renderSlot, u as unref, an as getCurrentInstance, ao as getCurrentScope, ap as onScopeDispose, e as onMounted, p as normalizeClass, aq as createPropsRestProxy, ar as useAttrs, as as mergeProps, at as createCommentVNode, au as createBlock, av as Teleport, aw as onBeforeMount, k as renderList, ax as nextTick, ay as isMemoSame, az as shallowRef, q as toDisplayString, aA as reactive, aB as isRef, aC as customRef, aD as resolveDynamicComponent, l as createTextVNode, aE as provide, aF as toValue$1, aG as markRaw, aH as readonly, aI as resolveComponent, aJ as normalizeProps, B as Button, N as NModal, j as withModifiers, v as vModelText, h as withKeys, aK as useRoute, n as useRouter } from "./index-C6XixcTv.js";
import { j as NPopover, k as popoverBaseProps, l as useLocale, m as useMergedState, n as beforeNextFrameOnce, o as useCompitable, q as updateProjectCanvas, s as getProjectCanvas, D as DEFAULT_CHAT_MODEL, V as VIDEO_MODELS, t as DEFAULT_VIDEO_MODEL, I as IMAGE_MODELS, v as DEFAULT_IMAGE_MODEL, w as getDefaultProvider, x as getProviderList, P as PROVIDERS, y as getProviderConfig, z as CHAT_MODELS, B as SEEDREAM_SIZE_OPTIONS, E as SEEDREAM_4K_SIZE_OPTIONS, F as VIDEO_RATIO_OPTIONS, G as VIDEO_RATIO_LIST, H as VIDEO_DURATION_OPTIONS, u as useModelStore, J as getModelByName, N as NIcon, K as _export_sfc, b as AddOutline, e as NInput, C as CopyOutline, T as TrashOutline, d as NDropdown, R as RefreshOutline, L as NSelect, g as getRandomSuggestion, i as initProjectsStore, _ as _sfc_main$h, A as ApiSettings, S as SettingsOutline, a as SendOutline, r as renameProject, p as projects } from "./suggestion-C-jH-FmI.js";
function download(url, name) {
  if (!url) return;
  const a = document.createElement("a");
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function arrayReduce(array2, iteratee, accumulator, initAccum) {
  var index = -1, length = array2 == null ? 0 : array2.length;
  while (++index < length) {
    accumulator = iteratee(accumulator, array2[index], index, array2);
  }
  return accumulator;
}
function basePropertyOf(object2) {
  return function(key) {
    return object2 == null ? void 0 : object2[key];
  };
}
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf(deburredLetters);
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsCombo$1 = "[" + rsComboRange$1 + "]";
var reComboMark = RegExp(rsCombo$1, "g");
function deburr(string) {
  string = toString$1(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
function words(string, pattern, guard) {
  string = toString$1(string);
  pattern = pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var rsApos = "['’]";
var reApos = RegExp(rsApos, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? "-" : "") + word.toLowerCase();
});
const DownloadIcon = replaceable("download", () => h("svg", {
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
  d: "M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"
})))));
const ResizeSmallIcon = defineComponent({
  name: "ResizeSmall",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, h("g", {
      fill: "none"
    }, h("path", {
      d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",
      fill: "currentColor"
    })));
  }
});
const RotateClockwiseIcon = replaceable("rotateClockwise", () => h("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h("path", {
  d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",
  fill: "currentColor"
}), h("path", {
  d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",
  fill: "currentColor"
})));
const RotateCounterclockwiseIcon = replaceable("rotateClockwise", () => h("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h("path", {
  d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",
  fill: "currentColor"
}), h("path", {
  d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",
  fill: "currentColor"
})));
const ZoomInIcon = replaceable("zoomIn", () => h("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h("path", {
  d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",
  fill: "currentColor"
}), h("path", {
  d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",
  fill: "currentColor"
})));
const ZoomOutIcon = replaceable("zoomOut", () => h("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h("path", {
  d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",
  fill: "currentColor"
}), h("path", {
  d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",
  fill: "currentColor"
})));
function self$2(vars) {
  const {
    borderRadius,
    boxShadow2,
    baseColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    borderRadius,
    boxShadow: boxShadow2,
    color: composite(baseColor, "rgba(0, 0, 0, .85)"),
    textColor: baseColor
  });
}
const tooltipLight = createTheme({
  name: "Tooltip",
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self: self$2
});
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const NTooltip = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), {
      popoverRef,
      mergedTheme: themeRef,
      popoverThemeOverrides: computed(() => {
        return themeRef.value.self;
      })
    });
  },
  render() {
    const {
      mergedTheme,
      internalExtraClass
    } = this;
    return h(NPopover, Object.assign(Object.assign({}, this.$props), {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: internalExtraClass.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
});
function self$1(vars) {
  const {
    primaryColor,
    opacityDisabled,
    borderRadius,
    textColor3
  } = vars;
  const railOverlayColor = "rgba(0, 0, 0, .14)";
  return Object.assign(Object.assign({}, commonVars$1), {
    iconColor: textColor3,
    textColor: "white",
    loadingColor: primaryColor,
    opacityDisabled,
    railColor: railOverlayColor,
    railColorActive: primaryColor,
    buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    buttonColor: "#FFF",
    railBorderRadiusSmall: borderRadius,
    railBorderRadiusMedium: borderRadius,
    railBorderRadiusLarge: borderRadius,
    buttonBorderRadiusSmall: borderRadius,
    buttonBorderRadiusMedium: borderRadius,
    buttonBorderRadiusLarge: borderRadius,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`
  });
}
const switchLight = {
  common: derived,
  self: self$1
};
function self() {
  return {
    toolbarIconColor: "rgba(255, 255, 255, .9)",
    toolbarColor: "rgba(0, 0, 0, .35)",
    toolbarBoxShadow: "none",
    toolbarBorderRadius: "24px"
  };
}
const imageLight = createTheme({
  name: "Image",
  common: derived,
  peers: {
    Tooltip: tooltipLight
  },
  self
});
function renderPrevIcon() {
  return h("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",
    fill: "currentColor"
  }));
}
function renderNextIcon() {
  return h("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",
    fill: "currentColor"
  }));
}
function renderCloseIcon() {
  return h("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",
    fill: "currentColor"
  }));
}
const imagePreviewSharedProps = Object.assign(Object.assign({}, useTheme.props), {
  onPreviewPrev: Function,
  onPreviewNext: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  showToolbarTooltip: Boolean,
  renderToolbar: Function
});
const imageContextKey = createInjectionKey("n-image");
const style$2 = c([c("body >", [cB("image-container", "position: fixed;")]), cB("image-preview-container", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), cB("image-preview-overlay", `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [fadeInTransition()]), cB("image-preview-toolbar", `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("base-icon", `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), fadeInTransition()]), cB("image-preview-wrapper", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [fadeInScaleUpTransition()]), cB("image-preview", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), cB("image", `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [cNotM("preview-disabled", `
 cursor: pointer;
 `), c("img", `
 border-radius: inherit;
 `)])]);
const BLEEDING = 32;
const imagePreviewProps = Object.assign(Object.assign({}, imagePreviewSharedProps), {
  src: String,
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onNext: Function,
  onPrev: Function,
  onClose: [Function, Array]
});
const NImagePreview = defineComponent({
  name: "ImagePreview",
  props: imagePreviewProps,
  setup(props) {
    const {
      src
    } = toRefs$1(props);
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme("Image", "-image", style$2, imageLight, props, mergedClsPrefixRef);
    let thumbnailEl = null;
    const previewRef = ref(null);
    const previewWrapperRef = ref(null);
    const displayedRef = ref(false);
    const {
      localeRef
    } = useLocale("Image");
    const uncontrolledShowRef = ref(props.defaultShow);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    function syncTransformOrigin() {
      const {
        value: previewWrapper
      } = previewWrapperRef;
      if (!thumbnailEl || !previewWrapper) return;
      const {
        style: style2
      } = previewWrapper;
      const tbox = thumbnailEl.getBoundingClientRect();
      const tx = tbox.left + tbox.width / 2;
      const ty = tbox.top + tbox.height / 2;
      style2.transformOrigin = `${tx}px ${ty}px`;
    }
    function handleKeydown(e) {
      var _a, _b;
      switch (e.key) {
        case " ":
          e.preventDefault();
          break;
        case "ArrowLeft":
          (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
          break;
        case "ArrowRight":
          (_b = props.onNext) === null || _b === void 0 ? void 0 : _b.call(props);
          break;
        case "ArrowUp":
          e.preventDefault();
          zoomIn();
          break;
        case "ArrowDown":
          e.preventDefault();
          zoomOut();
          break;
        case "Escape":
          close();
          break;
      }
    }
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      uncontrolledShowRef.value = value;
      displayedRef.value = true;
    }
    watch(mergedShowRef, (value) => {
      if (value) {
        on("keydown", document, handleKeydown);
      } else {
        off("keydown", document, handleKeydown);
      }
    });
    onBeforeUnmount(() => {
      off("keydown", document, handleKeydown);
    });
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let startOffsetX = 0;
    let startOffsetY = 0;
    let mouseDownClientX = 0;
    let mouseDownClientY = 0;
    let dragging = false;
    function handleMouseMove(e) {
      const {
        clientX,
        clientY
      } = e;
      offsetX = clientX - startX;
      offsetY = clientY - startY;
      beforeNextFrameOnce(derivePreviewStyle);
    }
    function getMoveStrategy(opts) {
      const {
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX: mouseDownClientX2,
        mouseDownClientY: mouseDownClientY2
      } = opts;
      const deltaHorizontal = mouseDownClientX2 - mouseUpClientX;
      const deltaVertical = mouseDownClientY2 - mouseUpClientY;
      const moveVerticalDirection = `vertical${deltaVertical > 0 ? "Top" : "Bottom"}`;
      const moveHorizontalDirection = `horizontal${deltaHorizontal > 0 ? "Left" : "Right"}`;
      return {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      };
    }
    function getDerivedOffset(moveStrategy) {
      const {
        value: preview
      } = previewRef;
      if (!preview) return {
        offsetX: 0,
        offsetY: 0
      };
      const pbox = preview.getBoundingClientRect();
      const {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      } = moveStrategy || {};
      let nextOffsetX = 0;
      let nextOffsetY = 0;
      if (pbox.width <= window.innerWidth) {
        nextOffsetX = 0;
      } else if (pbox.left > 0) {
        nextOffsetX = (pbox.width - window.innerWidth) / 2;
      } else if (pbox.right < window.innerWidth) {
        nextOffsetX = -(pbox.width - window.innerWidth) / 2;
      } else if (moveHorizontalDirection === "horizontalRight") {
        nextOffsetX = Math.min((pbox.width - window.innerWidth) / 2, startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      } else {
        nextOffsetX = Math.max(-((pbox.width - window.innerWidth) / 2), startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      }
      if (pbox.height <= window.innerHeight) {
        nextOffsetY = 0;
      } else if (pbox.top > 0) {
        nextOffsetY = (pbox.height - window.innerHeight) / 2;
      } else if (pbox.bottom < window.innerHeight) {
        nextOffsetY = -(pbox.height - window.innerHeight) / 2;
      } else if (moveVerticalDirection === "verticalBottom") {
        nextOffsetY = Math.min((pbox.height - window.innerHeight) / 2, startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      } else {
        nextOffsetY = Math.max(-((pbox.height - window.innerHeight) / 2), startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      }
      return {
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      };
    }
    function handleMouseUp(e) {
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      const {
        clientX: mouseUpClientX,
        clientY: mouseUpClientY
      } = e;
      dragging = false;
      const moveStrategy = getMoveStrategy({
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      });
      const offset = getDerivedOffset(moveStrategy);
      offsetX = offset.offsetX;
      offsetY = offset.offsetY;
      derivePreviewStyle();
    }
    const imageContext = inject(imageContextKey, null);
    function handlePreviewMousedown(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onMousedown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      if (e.button !== 0) return;
      const {
        clientX,
        clientY
      } = e;
      dragging = true;
      startX = clientX - offsetX;
      startY = clientY - offsetY;
      startOffsetX = offsetX;
      startOffsetY = offsetY;
      mouseDownClientX = clientX;
      mouseDownClientY = clientY;
      derivePreviewStyle();
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
    }
    const scaleRadix = 1.5;
    let scaleExp = 0;
    let scale = 1;
    let rotate = 0;
    function handlePreviewDblclick(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDblclick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      const originalImageSizeScale = getOrignalImageSizeScale();
      scale = scale === originalImageSizeScale ? 1 : originalImageSizeScale;
      derivePreviewStyle();
    }
    function resetScale() {
      scale = 1;
      scaleExp = 0;
    }
    function handleSwitchPrev() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleSwitchNext() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onNext) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function rotateCounterclockwise() {
      rotate -= 90;
      derivePreviewStyle();
    }
    function rotateClockwise() {
      rotate += 90;
      derivePreviewStyle();
    }
    function getMaxScale() {
      const {
        value: preview
      } = previewRef;
      if (!preview) return 1;
      const {
        innerWidth,
        innerHeight
      } = window;
      const heightMaxScale = Math.max(1, preview.naturalHeight / (innerHeight - BLEEDING));
      const widthMaxScale = Math.max(1, preview.naturalWidth / (innerWidth - BLEEDING));
      return Math.max(3, heightMaxScale * 2, widthMaxScale * 2);
    }
    function getOrignalImageSizeScale() {
      const {
        value: preview
      } = previewRef;
      if (!preview) return 1;
      const {
        innerWidth,
        innerHeight
      } = window;
      const heightScale = preview.naturalHeight / (innerHeight - BLEEDING);
      const widthScale = preview.naturalWidth / (innerWidth - BLEEDING);
      if (heightScale < 1 && widthScale < 1) {
        return 1;
      }
      return Math.max(heightScale, widthScale);
    }
    function zoomIn() {
      const maxScale = getMaxScale();
      if (scale < maxScale) {
        scaleExp += 1;
        scale = Math.min(maxScale, Math.pow(scaleRadix, scaleExp));
        derivePreviewStyle();
      }
    }
    function zoomOut() {
      if (scale > 0.5) {
        const originalScale = scale;
        scaleExp -= 1;
        scale = Math.max(0.5, Math.pow(scaleRadix, scaleExp));
        const diff = originalScale - scale;
        derivePreviewStyle(false);
        const offset = getDerivedOffset();
        scale += diff;
        derivePreviewStyle(false);
        scale -= diff;
        offsetX = offset.offsetX;
        offsetY = offset.offsetY;
        derivePreviewStyle();
      }
    }
    function handleDownloadClick() {
      const imgSrc = src.value;
      if (imgSrc) {
        download(imgSrc);
      }
    }
    function derivePreviewStyle(transition = true) {
      var _a;
      const {
        value: preview
      } = previewRef;
      if (!preview) return;
      const {
        style: style2
      } = preview;
      const controlledStyle = normalizeStyle((_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.style);
      let controlledStyleString = "";
      if (typeof controlledStyle === "string") {
        controlledStyleString = `${controlledStyle};`;
      } else {
        for (const key in controlledStyle) {
          controlledStyleString += `${kebabCase(key)}: ${controlledStyle[key]};`;
        }
      }
      const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
      if (dragging) {
        style2.cssText = `${controlledStyleString}cursor: grabbing; transition: none;${transformStyle}`;
      } else {
        style2.cssText = `${controlledStyleString}cursor: grab;${transformStyle}${transition ? "" : "transition: none;"}`;
      }
      if (!transition) {
        void preview.offsetHeight;
      }
    }
    function close() {
      if (mergedShowRef.value) {
        const {
          onClose
        } = props;
        if (onClose) call(onClose);
        doUpdateShow(false);
        uncontrolledShowRef.value = false;
      }
    }
    function resizeToOrignalImageSize() {
      scale = getOrignalImageSizeScale();
      scaleExp = Math.ceil(Math.log(scale) / Math.log(scaleRadix));
      offsetX = 0;
      offsetY = 0;
      derivePreviewStyle();
    }
    const exposedMethods = {
      setThumbnailEl: (el) => {
        thumbnailEl = el;
      }
    };
    function withTooltip(node, tooltipKey) {
      if (props.showToolbarTooltip) {
        const {
          value: theme
        } = themeRef;
        return h(NTooltip, {
          to: false,
          theme: theme.peers.Tooltip,
          themeOverrides: theme.peerOverrides.Tooltip,
          keepAliveOnHover: false
        }, {
          default: () => {
            return localeRef.value[tooltipKey];
          },
          trigger: () => node
        });
      } else {
        return node;
      }
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          toolbarIconColor,
          toolbarBorderRadius,
          toolbarBoxShadow,
          toolbarColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-toolbar-icon-color": toolbarIconColor,
        "--n-toolbar-color": toolbarColor,
        "--n-toolbar-border-radius": toolbarBorderRadius,
        "--n-toolbar-box-shadow": toolbarBoxShadow
      };
    });
    const {
      inlineThemeDisabled
    } = useConfig();
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("image-preview", void 0, cssVarsRef, props) : void 0;
    function handleWheel(event) {
      event.preventDefault();
    }
    return Object.assign({
      clsPrefix: mergedClsPrefixRef,
      previewRef,
      previewWrapperRef,
      previewSrc: src,
      mergedShow: mergedShowRef,
      appear: isMounted(),
      displayed: displayedRef,
      previewedImgProps: imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef,
      handleWheel,
      handlePreviewMousedown,
      handlePreviewDblclick,
      syncTransformOrigin,
      handleAfterLeave: () => {
        resetScale();
        rotate = 0;
        displayedRef.value = false;
      },
      handleDragStart: (e) => {
        var _a, _b;
        (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDragstart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        e.preventDefault();
      },
      zoomIn,
      zoomOut,
      handleDownloadClick,
      rotateCounterclockwise,
      rotateClockwise,
      handleSwitchPrev,
      handleSwitchNext,
      withTooltip,
      resizeToOrignalImageSize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      doUpdateShow,
      close
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const {
      clsPrefix,
      renderToolbar,
      withTooltip
    } = this;
    const prevNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.handleSwitchPrev
    }, {
      default: renderPrevIcon
    }), "tipPrevious");
    const nextNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.handleSwitchNext
    }, {
      default: renderNextIcon
    }), "tipNext");
    const rotateCounterclockwiseNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.rotateCounterclockwise
    }, {
      default: () => h(RotateCounterclockwiseIcon, null)
    }), "tipCounterclockwise");
    const rotateClockwiseNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.rotateClockwise
    }, {
      default: () => h(RotateClockwiseIcon, null)
    }), "tipClockwise");
    const originalSizeNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.resizeToOrignalImageSize
    }, {
      default: () => {
        return h(ResizeSmallIcon, null);
      }
    }), "tipOriginalSize");
    const zoomOutNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.zoomOut
    }, {
      default: () => h(ZoomOutIcon, null)
    }), "tipZoomOut");
    const downloadNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.handleDownloadClick
    }, {
      default: () => h(DownloadIcon, null)
    }), "tipDownload");
    const closeNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: () => this.close()
    }, {
      default: renderCloseIcon
    }), "tipClose");
    const zoomInNode = withTooltip(h(NBaseIcon, {
      clsPrefix,
      onClick: this.zoomIn
    }, {
      default: () => h(ZoomInIcon, null)
    }), "tipZoomIn");
    return h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), h(LazyTeleport, {
      show: this.mergedShow
    }, {
      default: () => {
        var _a2;
        if (!(this.mergedShow || this.displayed)) {
          return null;
        }
        (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
        return withDirectives(h("div", {
          ref: "containerRef",
          class: [`${clsPrefix}-image-preview-container`, this.themeClass],
          style: this.cssVars,
          onWheel: this.handleWheel
        }, h(Transition$2, {
          name: "fade-in-transition",
          appear: this.appear
        }, {
          default: () => this.mergedShow ? h("div", {
            class: `${clsPrefix}-image-preview-overlay`,
            onClick: () => this.close()
          }) : null
        }), this.showToolbar ? h(Transition$2, {
          name: "fade-in-transition",
          appear: this.appear
        }, {
          default: () => {
            if (!this.mergedShow) return null;
            return h("div", {
              class: `${clsPrefix}-image-preview-toolbar`
            }, renderToolbar ? renderToolbar({
              nodes: {
                prev: prevNode,
                next: nextNode,
                rotateCounterclockwise: rotateCounterclockwiseNode,
                rotateClockwise: rotateClockwiseNode,
                resizeToOriginalSize: originalSizeNode,
                zoomOut: zoomOutNode,
                zoomIn: zoomInNode,
                download: downloadNode,
                close: closeNode
              }
            }) : h(Fragment, null, this.onPrev ? h(Fragment, null, prevNode, nextNode) : null, rotateCounterclockwiseNode, rotateClockwiseNode, originalSizeNode, zoomOutNode, zoomInNode, downloadNode, closeNode));
          }
        }) : null, h(Transition$2, {
          name: "fade-in-scale-up-transition",
          onAfterLeave: this.handleAfterLeave,
          appear: this.appear,
          // BUG:
          // onEnter will be called twice, I don't know why
          // Maybe it is a bug of vue
          onEnter: this.syncTransformOrigin,
          onBeforeLeave: this.syncTransformOrigin
        }, {
          default: () => {
            const {
              previewedImgProps = {}
            } = this;
            return withDirectives(h("div", {
              class: `${clsPrefix}-image-preview-wrapper`,
              ref: "previewWrapperRef"
            }, h("img", Object.assign({}, previewedImgProps, {
              draggable: false,
              onMousedown: this.handlePreviewMousedown,
              onDblclick: this.handlePreviewDblclick,
              class: [`${clsPrefix}-image-preview`, previewedImgProps.class],
              key: this.previewSrc,
              src: this.previewSrc,
              ref: "previewRef",
              onDragstart: this.handleDragStart
            }))), [[vShow, this.mergedShow]]);
          }
        })), [[zindexable, {
          enabled: this.mergedShow
        }]]);
      }
    }));
  }
});
const style$1 = c([c("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
};
const spinProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: true
  },
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true;
    },
    default: void 0
  },
  delay: Number
}), exposedLoadingProps);
const NSpin = defineComponent({
  name: "Spin",
  props: spinProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Spin", "-spin", style$1, spinLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        size: spinSize
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: self2
      } = themeRef.value;
      const {
        opacitySpinning,
        color: color2,
        textColor
      } = self2;
      const size = typeof spinSize === "number" ? pxfy(spinSize) : self2[createKey("size", spinSize)];
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-opacity-spinning": opacitySpinning,
        "--n-size": size,
        "--n-color": color2,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed(() => {
      const {
        size
      } = props;
      return typeof size === "number" ? String(size) : size[0];
    }), cssVarsRef, props) : void 0;
    const compitableShow = useCompitable(props, ["spinning", "show"]);
    const activeRef = ref(false);
    watchEffect((onCleanup) => {
      let timerId;
      if (compitableShow.value) {
        const {
          delay
        } = props;
        if (delay) {
          timerId = window.setTimeout(() => {
            activeRef.value = true;
          }, delay);
          onCleanup(() => {
            clearTimeout(timerId);
          });
          return;
        }
      }
      activeRef.value = compitableShow.value;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedStrokeWidth: computed(() => {
        const {
          strokeWidth
        } = props;
        if (strokeWidth !== void 0) return strokeWidth;
        const {
          size
        } = props;
        return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      mergedClsPrefix,
      description
    } = this;
    const rotate = $slots.icon && this.rotate;
    const descriptionNode = (description || $slots.description) && h("div", {
      class: `${mergedClsPrefix}-spin-description`
    }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
    const icon = $slots.icon ? h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h("div", {
      class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
      style: $slots.default ? "" : this.cssVars
    }, $slots.icon()), descriptionNode) : h("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      style: $slots.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      radius: this.radius,
      scale: this.scale,
      class: `${mergedClsPrefix}-spin`
    }), descriptionNode);
    (_b = this.onRender) === null || _b === void 0 ? void 0 : _b.call(this);
    return $slots.default ? h("div", {
      class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${mergedClsPrefix}-spin-content`, this.active && `${mergedClsPrefix}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, $slots), h(Transition$2, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? icon : null
    })) : icon;
  }
});
const style = cB("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [cE("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), cE("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), cE("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), cB("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), cE("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), cE("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), cE("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), c("&:focus", [cE("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), cM("round", [cE("rail", "border-radius: calc(var(--n-rail-height) / 2);", [cE("button", "border-radius: calc(var(--n-button-height) / 2);")])]), cNotM("disabled", [cNotM("icon", [cM("rubber-band", [cM("pressed", [cE("rail", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cE("rail", [c("&:active", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cM("active", [cM("pressed", [cE("rail", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), cE("rail", [c("&:active", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), cM("active", [cE("rail", [cE("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), cE("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [iconSwitchTransition()]), cE("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), cM("active", [cE("rail", "background-color: var(--n-rail-color-active);")]), cM("loading", [cE("rail", `
 cursor: wait;
 `)]), cM("disabled", [cE("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
const switchProps = Object.assign(Object.assign({}, useTheme.props), {
  size: String,
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  round: {
    type: Boolean,
    default: true
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  railStyle: Function,
  rubberBand: {
    type: Boolean,
    default: true
  },
  spinProps: Object,
  /** @deprecated */
  onChange: [Function, Array]
});
let supportCssMax;
const NSwitch = defineComponent({
  name: "Switch",
  props: switchProps,
  slots: Object,
  setup(props) {
    if (supportCssMax === void 0) {
      if (typeof CSS !== "undefined") {
        if (typeof CSS.supports !== "undefined") {
          supportCssMax = CSS.supports("width", "max(1px)");
        } else {
          supportCssMax = false;
        }
      } else {
        supportCssMax = true;
      }
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme("Switch", "-switch", style, switchLight, props, mergedClsPrefixRef);
    const formItem = useFormItem(props, {
      mergedSize(NFormItem) {
        var _a, _b;
        if (props.size !== void 0) return props.size;
        if (NFormItem) {
          return NFormItem.mergedSize.value;
        }
        const configSize = (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Switch) === null || _b === void 0 ? void 0 : _b.size;
        if (configSize) return configSize;
        return "medium";
      }
    });
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedRef = computed(() => {
      return mergedValueRef.value === props.checkedValue;
    });
    const pressedRef = ref(false);
    const focusedRef = ref(false);
    const mergedRailStyleRef = computed(() => {
      const {
        railStyle
      } = props;
      if (!railStyle) return void 0;
      return railStyle({
        focused: focusedRef.value,
        checked: checkedRef.value
      });
    });
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onChange,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (_onUpdateValue) call(_onUpdateValue, value);
      if (onUpdateValue) call(onUpdateValue, value);
      if (onChange) call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doFocus() {
      const {
        nTriggerFormFocus
      } = formItem;
      nTriggerFormFocus();
    }
    function doBlur() {
      const {
        nTriggerFormBlur
      } = formItem;
      nTriggerFormBlur();
    }
    function handleClick() {
      if (props.loading || mergedDisabledRef.value) return;
      if (mergedValueRef.value !== props.checkedValue) {
        doUpdateValue(props.checkedValue);
      } else {
        doUpdateValue(props.uncheckedValue);
      }
    }
    function handleFocus() {
      focusedRef.value = true;
      doFocus();
    }
    function handleBlur() {
      focusedRef.value = false;
      doBlur();
      pressedRef.value = false;
    }
    function handleKeyup(e) {
      if (props.loading || mergedDisabledRef.value) return;
      if (e.key === " ") {
        if (mergedValueRef.value !== props.checkedValue) {
          doUpdateValue(props.checkedValue);
        } else {
          doUpdateValue(props.uncheckedValue);
        }
        pressedRef.value = false;
      }
    }
    function handleKeydown(e) {
      if (props.loading || mergedDisabledRef.value) return;
      if (e.key === " ") {
        e.preventDefault();
        pressedRef.value = true;
      }
    }
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        self: {
          opacityDisabled,
          railColor,
          railColorActive,
          buttonBoxShadow,
          buttonColor,
          boxShadowFocus,
          loadingColor,
          textColor,
          iconColor,
          [createKey("buttonHeight", size)]: buttonHeight,
          [createKey("buttonWidth", size)]: buttonWidth,
          [createKey("buttonWidthPressed", size)]: buttonWidthPressed,
          [createKey("railHeight", size)]: railHeight,
          [createKey("railWidth", size)]: railWidth,
          [createKey("railBorderRadius", size)]: railBorderRadius,
          [createKey("buttonBorderRadius", size)]: buttonBorderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      let offset;
      let height;
      let width;
      if (supportCssMax) {
        offset = `calc((${railHeight} - ${buttonHeight}) / 2)`;
        height = `max(${railHeight}, ${buttonHeight})`;
        width = `max(${railWidth}, calc(${railWidth} + ${buttonHeight} - ${railHeight}))`;
      } else {
        offset = pxfy((depx(railHeight) - depx(buttonHeight)) / 2);
        height = pxfy(Math.max(depx(railHeight), depx(buttonHeight)));
        width = depx(railHeight) > depx(buttonHeight) ? railWidth : pxfy(depx(railWidth) + depx(buttonHeight) - depx(railHeight));
      }
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-button-border-radius": buttonBorderRadius,
        "--n-button-box-shadow": buttonBoxShadow,
        "--n-button-color": buttonColor,
        "--n-button-width": buttonWidth,
        "--n-button-width-pressed": buttonWidthPressed,
        "--n-button-height": buttonHeight,
        "--n-height": height,
        "--n-offset": offset,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-border-radius": railBorderRadius,
        "--n-rail-color": railColor,
        "--n-rail-color-active": railColorActive,
        "--n-rail-height": railHeight,
        "--n-rail-width": railWidth,
        "--n-width": width,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("switch", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    return {
      handleClick,
      handleBlur,
      handleFocus,
      handleKeyup,
      handleKeydown,
      mergedRailStyle: mergedRailStyleRef,
      pressed: pressedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      checked: checkedRef,
      mergedDisabled: mergedDisabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mergedDisabled,
      checked,
      mergedRailStyle,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const {
      checked: checkedSlot,
      unchecked: uncheckedSlot,
      icon: iconSlot,
      "checked-icon": checkedIconSlot,
      "unchecked-icon": uncheckedIconSlot
    } = $slots;
    const hasIcon = !(isSlotEmpty(iconSlot) && isSlotEmpty(checkedIconSlot) && isSlotEmpty(uncheckedIconSlot));
    return h("div", {
      role: "switch",
      "aria-checked": checked,
      class: [`${mergedClsPrefix}-switch`, this.themeClass, hasIcon && `${mergedClsPrefix}-switch--icon`, checked && `${mergedClsPrefix}-switch--active`, mergedDisabled && `${mergedClsPrefix}-switch--disabled`, this.round && `${mergedClsPrefix}-switch--round`, this.loading && `${mergedClsPrefix}-switch--loading`, this.pressed && `${mergedClsPrefix}-switch--pressed`, this.rubberBand && `${mergedClsPrefix}-switch--rubber-band`],
      tabindex: !this.mergedDisabled ? 0 : void 0,
      style: this.cssVars,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-switch__rail`,
      "aria-hidden": "true",
      style: mergedRailStyle
    }, resolveWrappedSlot(checkedSlot, (checkedSlotChildren) => resolveWrappedSlot(uncheckedSlot, (uncheckedSlotChildren) => {
      if (checkedSlotChildren || uncheckedSlotChildren) {
        return h("div", {
          "aria-hidden": true,
          class: `${mergedClsPrefix}-switch__children-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), checkedSlotChildren), h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), uncheckedSlotChildren));
      }
      return null;
    })), h("div", {
      class: `${mergedClsPrefix}-switch__button`
    }, resolveWrappedSlot(iconSlot, (icon) => resolveWrappedSlot(checkedIconSlot, (checkedIcon) => resolveWrappedSlot(uncheckedIconSlot, (uncheckedIcon) => {
      return h(NIconSwitchTransition, null, {
        default: () => this.loading ? h(NBaseLoading, Object.assign({
          key: "loading",
          clsPrefix: mergedClsPrefix,
          strokeWidth: 20
        }, this.spinProps)) : this.checked && (checkedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: checkedIcon ? "checked-icon" : "icon"
        }, checkedIcon || icon) : !this.checked && (uncheckedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: uncheckedIcon ? "unchecked-icon" : "icon"
        }, uncheckedIcon || icon) : null
      });
    }))), resolveWrappedSlot(checkedSlot, (children2) => children2 && h("div", {
      key: "checked",
      class: `${mergedClsPrefix}-switch__checked`
    }, children2)), resolveWrappedSlot(uncheckedSlot, (children2) => children2 && h("div", {
      key: "unchecked",
      class: `${mergedClsPrefix}-switch__unchecked`
    }, children2)))));
  }
});
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const AppsOutline = defineComponent({
  name: "AppsOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$H, _cache[0] || (_cache[0] = [createStaticVNode('<rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>', 9)]));
  }
});
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ArrowRedoOutline = defineComponent({
  name: "ArrowRedoOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$G,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z",
            fill: "none",
            stroke: "currentColor",
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
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ArrowUndoOutline = defineComponent({
  name: "ArrowUndoOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$F,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256z",
            fill: "none",
            stroke: "currentColor",
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
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const BookOutline = defineComponent({
  name: "BookOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$E,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",
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
            d: "M256 160v288"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const BrushOutline = defineComponent({
  name: "BrushOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$D,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M452.37 59.63h0a40.49 40.49 0 0 0-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 0 0 0-57.26z",
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
            d: "M138 336c-29.88 0-54 24.5-54 54.86c0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14c0-30.36-24.12-54.86-54-54.86z",
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
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CartOutline = defineComponent({
  name: "CartOutline",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$C,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "circle",
          {
            cx: "176",
            cy: "416",
            r: "16",
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
          "circle",
          {
            cx: "400",
            cy: "416",
            r: "16",
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
            d: "M48 80h64l48 272h256"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128",
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
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ChatbubbleOutline = defineComponent({
  name: "ChatbubbleOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$B,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 0 0-2.54-3.8a199.81 199.81 0 0 1-33-110C47.65 139.09 140.73 48 255.83 48C356.21 48 440 117.54 459.58 209.85a199 199 0 0 1 4.42 41.64c0 112.41-89.49 204.93-204.59 204.93c-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 0 0-11.12-2.07a30.71 30.71 0 0 0-12.09 2.43l-67.83 24.48a16 16 0 0 1-4.67 1.22a9.6 9.6 0 0 1-9.57-9.74a15.85 15.85 0 0 1 .6-3.29z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
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
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ChevronBackOutline = defineComponent({
  name: "ChevronBackOutline",
  render: function render8(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$A,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "48",
            d: "M328 112L184 256l144 144"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ChevronDownOutline = defineComponent({
  name: "ChevronDownOutline",
  render: function render9(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$z,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "48",
            d: "M112 184l144 144l144-144"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ChevronForwardOutline = defineComponent({
  name: "ChevronForwardOutline",
  render: function render10(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$y,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "48",
            d: "M184 112l144 144l-144 144"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$x = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CloseCircleOutline = defineComponent({
  name: "CloseCircleOutline",
  render: function render11(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$x,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",
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
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M320 320L192 192"
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
            d: "M192 320l128-128"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const CloseOutline = defineComponent({
  name: "CloseOutline",
  render: function render12(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$w,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M368 368L144 144"
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
            d: "M368 144L144 368"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ColorPaletteOutline = defineComponent({
  name: "ColorPaletteOutline",
  render: function render13(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$v, _cache[0] || (_cache[0] = [createStaticVNode('<path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9c-11.5-1.9-15.9-4-22.6-10c-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2c-34.2-30.1-80.1-45-127.8-45c-55.7 0-113.9 20.3-158.8 60.1c-83.5 73.8-83.5 194.7 0 268.5c41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4c14.4-12.7 11.99-36.6.1-47.7z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><circle cx="144" cy="208" r="32" fill="currentColor"></circle><circle cx="152" cy="311" r="32" fill="currentColor"></circle><circle cx="224" cy="144" r="32" fill="currentColor"></circle><circle cx="256" cy="367" r="48" fill="currentColor"></circle><circle cx="328" cy="144" r="32" fill="currentColor"></circle>', 6)]));
  }
});
const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const DocumentTextOutline = defineComponent({
  name: "DocumentTextOutline",
  render: function render14(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$u,
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
        ),
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M176 288h160"
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
            d: "M176 368h160"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const DownloadOutline = defineComponent({
  name: "DownloadOutline",
  render: function render15(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$t,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40",
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
            d: "M176 272l80 80l80-80"
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
            d: "M256 48v288"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$s = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const EyeOutline = defineComponent({
  name: "EyeOutline",
  render: function render16(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$s,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
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
          "circle",
          {
            cx: "256",
            cy: "256",
            r: "80",
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
const _hoisted_1$r = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const FolderOpenOutline = defineComponent({
  name: "FolderOpenOutline",
  render: function render17(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$r,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40",
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
            d: "M479.9 226.55L463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55z",
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
const _hoisted_1$q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const GridOutline = defineComponent({
  name: "GridOutline",
  render: function render18(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$q,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "rect",
          {
            x: "48",
            y: "48",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
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
          "rect",
          {
            x: "288",
            y: "48",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
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
          "rect",
          {
            x: "48",
            y: "288",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
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
          "rect",
          {
            x: "288",
            y: "288",
            width: "176",
            height: "176",
            rx: "20",
            ry: "20",
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
const _hoisted_1$p = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ImageOutline = defineComponent({
  name: "ImageOutline",
  render: function render19(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$p,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "rect",
          {
            x: "48",
            y: "80",
            width: "416",
            height: "352",
            rx: "48",
            ry: "48",
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
          "circle",
          {
            cx: "336",
            cy: "176",
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
          "path",
          {
            d: "M304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352",
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
            d: "M224 432l123.34-123.34a32 32 0 0 1 43.11-2L464 368",
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
const _hoisted_1$o = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const ListOutline = defineComponent({
  name: "ListOutline",
  render: function render20(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$o, _cache[0] || (_cache[0] = [createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368h288"></path><circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>', 6)]));
  }
});
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const LocateOutline = defineComponent({
  name: "LocateOutline",
  render: function render21(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$n, _cache[0] || (_cache[0] = [createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 456v-40"></path><path d="M256 112a144 144 0 1 0 144 144a144 144 0 0 0-144-144z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M416 256h40"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M56 256h40"></path>', 5)]));
  }
});
const _hoisted_1$m = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const PersonOutline = defineComponent({
  name: "PersonOutline",
  render: function render22(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$m,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z",
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
            d: "M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z",
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
const _hoisted_1$l = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const RemoveOutline = defineComponent({
  name: "RemoveOutline",
  render: function render23(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$l,
      _cache[0] || (_cache[0] = [
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
const _hoisted_1$k = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SparklesOutline = defineComponent({
  name: "SparklesOutline",
  render: function render24(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$k,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M259.92 262.91L216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17z",
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
            d: "M108 68L88 16L68 68L16 88l52 20l20 52l20-52l52-20l-52-20z"
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
            d: "M426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$j = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const SwapHorizontalOutline = defineComponent({
  name: "SwapHorizontalOutline",
  render: function render25(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$j,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M304 48l112 112l-112 112"
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
            d: "M398.87 160H96"
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
            d: "M208 464L96 352l112-112"
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
            d: "M114 352h302"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
const _hoisted_1$i = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const TextOutline = defineComponent({
  name: "TextOutline",
  render: function render26(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$i,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
            d: "M32 415.5l120-320l120 320"
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
            d: "M230 303.5H74"
          },
          null,
          -1
          /* HOISTED */
        ),
        createBaseVNode(
          "path",
          {
            d: "M326 239.5c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144",
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
            d: "M320 358.5c0 36 26.86 58 60 58c54 0 100-27 100-106v-15c-20 0-58 1-92 5c-32.77 3.86-68 19-68 58z",
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
const _hoisted_1$h = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const VideocamOutline = defineComponent({
  name: "VideocamOutline",
  render: function render27(_ctx, _cache) {
    return openBlock(), createElementBlock(
      "svg",
      _hoisted_1$h,
      _cache[0] || (_cache[0] = [
        createBaseVNode(
          "path",
          {
            d: "M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08z",
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
            d: "M268 384H84a52.15 52.15 0 0 1-52-52V180a52.15 52.15 0 0 1 52-52h184.48A51.68 51.68 0 0 1 320 179.52V332a52.15 52.15 0 0 1-52 52z",
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
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
const isDef$1 = (val) => typeof val !== "undefined";
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop$3 = () => {
};
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter2,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter2);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function toRefs(objectRef, options = {}) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}
function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            stop == null ? void 0 : stop();
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout2 != null) {
      promises.push(
        promiseTimeout(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            stop == null ? void 0 : stop();
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout2 != null) {
      promises.push(
        promiseTimeout(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array2 = Array.from(v);
      return array2.includes(value) || array2.includes(toValue(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop$3;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function createKeyPredicate$1(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate$1(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue = () => isDef$1(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
var noop$2 = { value: () => {
} };
function dispatch$1() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch$1(_);
}
function Dispatch$1(_) {
  this._ = _;
}
function parseTypenames$1$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch$1.prototype = dispatch$1.prototype = {
  constructor: Dispatch$1,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get$1$1(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set$1$1(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set$1$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _)
      copy[t] = _[t].slice();
    return new Dispatch$1(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get$1$1(type, name) {
  for (var i = 0, n = type.length, c2; i < n; ++i) {
    if ((c2 = type[i]).name === name) {
      return c2.value;
    }
  }
}
function set$1$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$2, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var xhtml$1 = "http://www.w3.org/1999/xhtml";
const namespaces$1 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml$1,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace$1(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces$1.hasOwnProperty(prefix) ? { space: namespaces$1[prefix], local: name } : name;
}
function creatorInherit$1(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml$1 && document2.documentElement.namespaceURI === xhtml$1 ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed$1(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator$1(name) {
  var fullname = namespace$1(name);
  return (fullname.local ? creatorFixed$1 : creatorInherit$1)(fullname);
}
function none$1() {
}
function selector$1(selector2) {
  return selector2 == null ? none$1 : function() {
    return this.querySelector(selector2);
  };
}
function selection_select$1(select2) {
  if (typeof select2 !== "function")
    select2 = selector$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1$1(subgroups, this._parents);
}
function array$1(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty$1() {
  return [];
}
function selectorAll$1(selector2) {
  return selector2 == null ? empty$1 : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll$1(select2) {
  return function() {
    return array$1(select2.apply(this, arguments));
  };
}
function selection_selectAll$1(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll$1(select2);
  else
    select2 = selectorAll$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1$1(subgroups, parents);
}
function matcher$1(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher$1(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find$1 = Array.prototype.find;
function childFind$1(match) {
  return function() {
    return find$1.call(this.children, match);
  };
}
function childFirst$1() {
  return this.firstElementChild;
}
function selection_selectChild$1(match) {
  return this.select(match == null ? childFirst$1 : childFind$1(typeof match === "function" ? match : childMatcher$1(match)));
}
var filter$1 = Array.prototype.filter;
function children$1() {
  return Array.from(this.children);
}
function childrenFilter$1(match) {
  return function() {
    return filter$1.call(this.children, match);
  };
}
function selection_selectChildren$1(match) {
  return this.selectAll(match == null ? children$1 : childrenFilter$1(typeof match === "function" ? match : childMatcher$1(match)));
}
function selection_filter$1(match) {
  if (typeof match !== "function")
    match = matcher$1(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1$1(subgroups, this._parents);
}
function sparse$1(update) {
  return new Array(update.length);
}
function selection_enter$1() {
  return new Selection$1$1(this._enter || this._groups.map(sparse$1), this._parents);
}
function EnterNode$1(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode$1.prototype = {
  constructor: EnterNode$1,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$3(x) {
  return function() {
    return x;
  };
}
function bindIndex$1(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode$1(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey$1(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode$1(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum$1(node) {
  return node.__data__;
}
function selection_data$1(value, key) {
  if (!arguments.length)
    return Array.from(this, datum$1);
  var bind = key ? bindKey$1 : bindIndex$1, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant$3(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike$1(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike$1(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit$1() {
  return new Selection$1$1(this._exit || this._groups.map(sparse$1), this._parents);
}
function selection_join$1(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge$1(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1$1(merges, this._parents);
}
function selection_order$1() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort$1(compare) {
  if (!compare)
    compare = ascending$1;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1$1(sortgroups, this._parents).order();
}
function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call$1() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes$1() {
  return Array.from(this);
}
function selection_node$1() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size$1() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}
function selection_empty$1() {
  return !this.node();
}
function selection_each$1(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS$1$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr$1(name, value) {
  var fullname = namespace$1(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1$1 : attrRemove$1$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1$1 : attrFunction$1$1 : fullname.local ? attrConstantNS$1$1 : attrConstant$1$1)(fullname, value));
}
function defaultView$1(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style$1(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1$1 : typeof value === "function" ? styleFunction$1$1 : styleConstant$1$1)(name, value, priority == null ? "" : priority)) : styleValue$1(this.node(), name);
}
function styleValue$1(node, name) {
  return node.style.getPropertyValue(name) || defaultView$1(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove$1(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant$1(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property$1(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove$1 : typeof value === "function" ? propertyFunction$1 : propertyConstant$1)(name, value)) : this.node()[name];
}
function classArray$1(string) {
  return string.trim().split(/^|\s+/);
}
function classList$1(node) {
  return node.classList || new ClassList$1(node);
}
function ClassList$1(node) {
  this._node = node;
  this._names = classArray$1(node.getAttribute("class") || "");
}
ClassList$1.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd$1(node, names) {
  var list = classList$1(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove$1(node, names) {
  var list = classList$1(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue$1(names) {
  return function() {
    classedAdd$1(this, names);
  };
}
function classedFalse$1(names) {
  return function() {
    classedRemove$1(this, names);
  };
}
function classedFunction$1(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd$1 : classedRemove$1)(this, names);
  };
}
function selection_classed$1(name, value) {
  var names = classArray$1(name + "");
  if (arguments.length < 2) {
    var list = classList$1(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction$1 : value ? classedTrue$1 : classedFalse$1)(names, value));
}
function textRemove$1() {
  this.textContent = "";
}
function textConstant$1$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text$1(value) {
  return arguments.length ? this.each(value == null ? textRemove$1 : (typeof value === "function" ? textFunction$1$1 : textConstant$1$1)(value)) : this.node().textContent;
}
function htmlRemove$1() {
  this.innerHTML = "";
}
function htmlConstant$1(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html$1(value) {
  return arguments.length ? this.each(value == null ? htmlRemove$1 : (typeof value === "function" ? htmlFunction$1 : htmlConstant$1)(value)) : this.node().innerHTML;
}
function raise$1() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise$1() {
  return this.each(raise$1);
}
function lower$1() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower$1() {
  return this.each(lower$1);
}
function selection_append$1(name) {
  var create2 = typeof name === "function" ? name : creator$1(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull$1() {
  return null;
}
function selection_insert$1(name, before) {
  var create2 = typeof name === "function" ? name : creator$1(name), select2 = before == null ? constantNull$1 : typeof before === "function" ? before : selector$1(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove$1() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove$1() {
  return this.each(remove$1);
}
function selection_cloneShallow$1() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep$1() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone$1(deep) {
  return this.select(deep ? selection_cloneDeep$1 : selection_cloneShallow$1);
}
function selection_datum$1(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener$1(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames$2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove$1(typename) {
  return function() {
    var on2 = this.__on;
    if (!on2)
      return;
    for (var j = 0, i = -1, m = on2.length, o; j < m; ++j) {
      if (o = on2[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on2[++i] = o;
      }
    }
    if (++i)
      on2.length = i;
    else
      delete this.__on;
  };
}
function onAdd$1(typename, value, options) {
  return function() {
    var on2 = this.__on, o, listener = contextListener$1(value);
    if (on2)
      for (var j = 0, m = on2.length; j < m; ++j) {
        if ((o = on2[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on2)
      this.__on = [o];
    else
      on2.push(o);
  };
}
function selection_on$1(typename, value, options) {
  var typenames = parseTypenames$2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on2 = this.node().__on;
    if (on2)
      for (var j = 0, m = on2.length, o; j < m; ++j) {
        for (i = 0, o = on2[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on2 = value ? onAdd$1 : onRemove$1;
  for (i = 0; i < n; ++i)
    this.each(on2(typenames[i], value, options));
  return this;
}
function dispatchEvent$1(node, type, params) {
  var window2 = defaultView$1(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant$1(type, params) {
  return function() {
    return dispatchEvent$1(this, type, params);
  };
}
function dispatchFunction$1(type, params) {
  return function() {
    return dispatchEvent$1(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch$1(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction$1 : dispatchConstant$1)(type, params));
}
function* selection_iterator$1() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}
var root$1 = [null];
function Selection$1$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection$1() {
  return new Selection$1$1([[document.documentElement]], root$1);
}
function selection_selection$1() {
  return this;
}
Selection$1$1.prototype = selection$1.prototype = {
  constructor: Selection$1$1,
  select: selection_select$1,
  selectAll: selection_selectAll$1,
  selectChild: selection_selectChild$1,
  selectChildren: selection_selectChildren$1,
  filter: selection_filter$1,
  data: selection_data$1,
  enter: selection_enter$1,
  exit: selection_exit$1,
  join: selection_join$1,
  merge: selection_merge$1,
  selection: selection_selection$1,
  order: selection_order$1,
  sort: selection_sort$1,
  call: selection_call$1,
  nodes: selection_nodes$1,
  node: selection_node$1,
  size: selection_size$1,
  empty: selection_empty$1,
  each: selection_each$1,
  attr: selection_attr$1,
  style: selection_style$1,
  property: selection_property$1,
  classed: selection_classed$1,
  text: selection_text$1,
  html: selection_html$1,
  raise: selection_raise$1,
  lower: selection_lower$1,
  append: selection_append$1,
  insert: selection_insert$1,
  remove: selection_remove$1,
  clone: selection_clone$1,
  datum: selection_datum$1,
  on: selection_on$1,
  dispatch: selection_dispatch$1,
  [Symbol.iterator]: selection_iterator$1
};
function select$1(selector2) {
  return typeof selector2 === "string" ? new Selection$1$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1$1([[selector2]], root$1);
}
function sourceEvent$1(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent)
    event = sourceEvent2;
  return event;
}
function pointer$1(event, node) {
  event = sourceEvent$1(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
const nonpassive = { passive: false };
const nonpassivecapture$1 = { capture: true, passive: false };
function nopropagation$1(event) {
  event.stopImmediatePropagation();
}
function noevent$1$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable$1(view) {
  var root2 = view.document.documentElement, selection2 = select$1(view).on("dragstart.drag", noevent$1$1, nonpassivecapture$1);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent$1$1, nonpassivecapture$1);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag$1(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select$1(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent$1$1, nonpassivecapture$1);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
const constant$2$1 = (x) => () => x;
function DragEvent(type, {
  sourceEvent: sourceEvent2,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter$1(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable$1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag() {
  var filter2 = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch$1("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select$1(event.view).on("mousemove.drag", mousemoved, nonpassivecapture$1).on("mouseup.drag", mouseupped, nonpassivecapture$1);
    dragDisable$1(event.view);
    nopropagation$1(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent$1$1(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select$1(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag$1(event.view, mousemoving);
    noevent$1$1(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c2 = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c2, event, d, touches[i].identifier, touches[i])) {
        nopropagation$1(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent$1$1(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation$1(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer$1(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer$1(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag2,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$2$1(!!_), drag2) : filter2;
  };
  drag2.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2$1(_), drag2) : container;
  };
  drag2.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2$1(_), drag2) : subject;
  };
  drag2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2$1(!!_), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
function define$1(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color$1() {
}
var darker$1 = 0.7;
var brighter$1 = 1 / darker$1;
var reI$1 = "\\s*([+-]?\\d+)\\s*", reN$1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP$1 = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex$1 = /^#([0-9a-f]{3,8})$/, reRgbInteger$1 = new RegExp(`^rgb\\(${reI$1},${reI$1},${reI$1}\\)$`), reRgbPercent$1 = new RegExp(`^rgb\\(${reP$1},${reP$1},${reP$1}\\)$`), reRgbaInteger$1 = new RegExp(`^rgba\\(${reI$1},${reI$1},${reI$1},${reN$1}\\)$`), reRgbaPercent$1 = new RegExp(`^rgba\\(${reP$1},${reP$1},${reP$1},${reN$1}\\)$`), reHslPercent$1 = new RegExp(`^hsl\\(${reN$1},${reP$1},${reP$1}\\)$`), reHslaPercent$1 = new RegExp(`^hsla\\(${reN$1},${reP$1},${reP$1},${reN$1}\\)$`);
var named$1 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define$1(Color$1, color$1, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex$1,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex$1,
  formatHex8: color_formatHex8$1,
  formatHsl: color_formatHsl$1,
  formatRgb: color_formatRgb$1,
  toString: color_formatRgb$1
});
function color_formatHex$1() {
  return this.rgb().formatHex();
}
function color_formatHex8$1() {
  return this.rgb().formatHex8();
}
function color_formatHsl$1() {
  return hslConvert$1(this).formatHsl();
}
function color_formatRgb$1() {
  return this.rgb().formatRgb();
}
function color$1(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex$1.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn$1(m) : l === 3 ? new Rgb$1(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba$1(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba$1(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger$1.exec(format)) ? new Rgb$1(m[1], m[2], m[3], 1) : (m = reRgbPercent$1.exec(format)) ? new Rgb$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger$1.exec(format)) ? rgba$1(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent$1.exec(format)) ? rgba$1(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent$1.exec(format)) ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) : named$1.hasOwnProperty(format) ? rgbn$1(named$1[format]) : format === "transparent" ? new Rgb$1(NaN, NaN, NaN, 0) : null;
}
function rgbn$1(n) {
  return new Rgb$1(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba$1(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb$1(r, g, b, a);
}
function rgbConvert$1(o) {
  if (!(o instanceof Color$1))
    o = color$1(o);
  if (!o)
    return new Rgb$1();
  o = o.rgb();
  return new Rgb$1(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert$1(r) : new Rgb$1(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb$1(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define$1(Rgb$1, rgb$1, extend$1(Color$1, {
  brighter(k) {
    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker$1 : Math.pow(darker$1, k);
    return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb$1(clampi$1(this.r), clampi$1(this.g), clampi$1(this.b), clampa$1(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex$1,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex$1,
  formatHex8: rgb_formatHex8$1,
  formatRgb: rgb_formatRgb$1,
  toString: rgb_formatRgb$1
}));
function rgb_formatHex$1() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}`;
}
function rgb_formatHex8$1() {
  return `#${hex$1(this.r)}${hex$1(this.g)}${hex$1(this.b)}${hex$1((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb$1() {
  const a = clampa$1(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi$1(this.r)}, ${clampi$1(this.g)}, ${clampi$1(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa$1(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi$1(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex$1(value) {
  value = clampi$1(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla$1(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl$1(h2, s, l, a);
}
function hslConvert$1(o) {
  if (o instanceof Hsl$1)
    return new Hsl$1(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color$1))
    o = color$1(o);
  if (!o)
    return new Hsl$1();
  if (o instanceof Hsl$1)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl$1(h2, s, l, o.opacity);
}
function hsl$1(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert$1(h2) : new Hsl$1(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl$1(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define$1(Hsl$1, hsl$1, extend$1(Color$1, {
  brighter(k) {
    k = k == null ? brighter$1 : Math.pow(brighter$1, k);
    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker$1 : Math.pow(darker$1, k);
    return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb$1(
      hsl2rgb$1(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb$1(h2, m1, m2),
      hsl2rgb$1(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl$1(clamph$1(this.h), clampt$1(this.s), clampt$1(this.l), clampa$1(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa$1(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph$1(this.h)}, ${clampt$1(this.s) * 100}%, ${clampt$1(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph$1(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt$1(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb$1(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1$1 = (x) => () => x;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential$1(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma$1(y) {
  return (y = +y) === 1 ? nogamma$1 : function(a, b) {
    return b - a ? exponential$1(a, b, y) : constant$1$1(isNaN(a) ? b : a);
  };
}
function nogamma$1(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant$1$1(isNaN(a) ? b : a);
}
const interpolateRgb$1 = (function rgbGamma(y) {
  var color2 = gamma$1(y);
  function rgb$1$1(start2, end) {
    var r = color2((start2 = rgb$1(start2)).r, (end = rgb$1(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma$1(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$1$1.gamma = rgbGamma;
  return rgb$1$1;
})(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c2[i] = a[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i)
    c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c2[i] = x[i](t);
    return c2;
  };
}
function date(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber$1(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c2 = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c2[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c2[k] = i[k](t);
    return c2;
  };
}
var reA$1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB$1 = new RegExp(reA$1.source, "g");
function zero$1(b) {
  return function() {
    return b;
  };
}
function one$1(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString$1(a, b) {
  var bi = reA$1.lastIndex = reB$1.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA$1.exec(a)) && (bm = reB$1.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber$1(am, bm) });
    }
    bi = reB$1.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one$1(q[0].x) : zero$1(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate$1(a, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant$1$1(b) : (t === "number" ? interpolateNumber$1 : t === "string" ? (c2 = color$1(b)) ? (b = c2, interpolateRgb$1) : interpolateString$1 : b instanceof color$1 ? interpolateRgb$1 : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber$1)(a, b);
}
var degrees$1 = 180 / Math.PI;
var identity$1$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose$1(a, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c2 + b * d)
    c2 -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d))
    c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c2)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees$1,
    skewX: Math.atan(skewX) * degrees$1,
    scaleX,
    scaleY
  };
}
var svgNode$1;
function parseCss$1(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1$1 : decompose$1(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg$1(value) {
  if (value == null)
    return identity$1$1;
  if (!svgNode$1)
    svgNode$1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode$1.setAttribute("transform", value);
  if (!(value = svgNode$1.transform.baseVal.consolidate()))
    return identity$1$1;
  value = value.matrix;
  return decompose$1(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform$1(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber$1(xa, xb) }, { i: i - 2, x: interpolateNumber$1(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber$1(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber$1(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber$1(xa, xb) }, { i: i - 2, x: interpolateNumber$1(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss$1 = interpolateTransform$1(parseCss$1, "px, ", "px)", "deg)");
var interpolateTransformSvg$1 = interpolateTransform$1(parseSvg$1, ", ", ")", ")");
var epsilon2$1 = 1e-12;
function cosh$1(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh$1(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh$1(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const interpolateZoom$1 = (function zoomRho(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2$1) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh$1(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh$1(rho * s + r0) - sinh$1(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh$1(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom2;
})(Math.SQRT2, 2, 4);
var frame$1 = 0, timeout$1$1 = 0, interval$1 = 0, pokeDelay$1 = 1e3, taskHead$1, taskTail$1, clockLast$1 = 0, clockNow$1 = 0, clockSkew$1 = 0, clock$1 = typeof performance === "object" && performance.now ? performance : Date, setFrame$1 = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now$1() {
  return clockNow$1 || (setFrame$1(clearNow$1), clockNow$1 = clock$1.now() + clockSkew$1);
}
function clearNow$1() {
  clockNow$1 = 0;
}
function Timer$1() {
  this._call = this._time = this._next = null;
}
Timer$1.prototype = timer$1.prototype = {
  constructor: Timer$1,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail$1 !== this) {
      if (taskTail$1)
        taskTail$1._next = this;
      else
        taskHead$1 = this;
      taskTail$1 = this;
    }
    this._call = callback;
    this._time = time;
    sleep$1();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep$1();
    }
  }
};
function timer$1(callback, delay, time) {
  var t = new Timer$1();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush$1() {
  now$1();
  ++frame$1;
  var t = taskHead$1, e;
  while (t) {
    if ((e = clockNow$1 - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame$1;
}
function wake$1() {
  clockNow$1 = (clockLast$1 = clock$1.now()) + clockSkew$1;
  frame$1 = timeout$1$1 = 0;
  try {
    timerFlush$1();
  } finally {
    frame$1 = 0;
    nap$1();
    clockNow$1 = 0;
  }
}
function poke$1() {
  var now2 = clock$1.now(), delay = now2 - clockLast$1;
  if (delay > pokeDelay$1)
    clockSkew$1 -= delay, clockLast$1 = now2;
}
function nap$1() {
  var t0, t1 = taskHead$1, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead$1 = t2;
    }
  }
  taskTail$1 = t0;
  sleep$1(time);
}
function sleep$1(time) {
  if (frame$1)
    return;
  if (timeout$1$1)
    timeout$1$1 = clearTimeout(timeout$1$1);
  var delay = time - clockNow$1;
  if (delay > 24) {
    if (time < Infinity)
      timeout$1$1 = setTimeout(wake$1, time - clock$1.now() - clockSkew$1);
    if (interval$1)
      interval$1 = clearInterval(interval$1);
  } else {
    if (!interval$1)
      clockLast$1 = clock$1.now(), interval$1 = setInterval(poke$1, pokeDelay$1);
    frame$1 = 1, setFrame$1(wake$1);
  }
}
function timeout$2(callback, delay, time) {
  var t = new Timer$1();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn$1 = dispatch$1("start", "end", "cancel", "interrupt");
var emptyTween$1 = [];
var CREATED$1 = 0;
var SCHEDULED$1 = 1;
var STARTING$1 = 2;
var STARTED$1 = 3;
var RUNNING$1 = 4;
var ENDING$1 = 5;
var ENDED$1 = 6;
function schedule$1(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create$1(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn$1,
    tween: emptyTween$1,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED$1
  });
}
function init$1(node, id2) {
  var schedule2 = get$2(node, id2);
  if (schedule2.state > CREATED$1)
    throw new Error("too late; already scheduled");
  return schedule2;
}
function set$2(node, id2) {
  var schedule2 = get$2(node, id2);
  if (schedule2.state > STARTED$1)
    throw new Error("too late; already running");
  return schedule2;
}
function get$2(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2]))
    throw new Error("transition not found");
  return schedule2;
}
function create$1(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer$1(schedule2, 0, self2.time);
  function schedule2(elapsed) {
    self2.state = SCHEDULED$1;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed)
      start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED$1)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name)
        continue;
      if (o.state === STARTED$1)
        return timeout$2(start2);
      if (o.state === RUNNING$1) {
        o.state = ENDED$1;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED$1;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout$2(function() {
      if (self2.state === STARTED$1) {
        self2.state = RUNNING$1;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING$1;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING$1)
      return;
    self2.state = STARTED$1;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING$1, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self2.state === ENDING$1) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED$1;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}
function interrupt$1(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING$1 && schedule2.state < ENDING$1;
    schedule2.state = ENDED$1;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}
function selection_interrupt$1(name) {
  return this.each(function() {
    interrupt$1(this, name);
  });
}
function tweenRemove$1(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set$2(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction$1(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule2 = set$2(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween$1(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get$2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove$1 : tweenFunction$1)(id2, name, value));
}
function tweenValue$1(transition, name, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set$2(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get$2(node, id2).value[name];
  };
}
function interpolate$2(a, b) {
  var c2;
  return (typeof b === "number" ? interpolateNumber$1 : b instanceof color$1 ? interpolateRgb$1 : (c2 = color$1(b)) ? (b = c2, interpolateRgb$1) : interpolateString$1)(a, b);
}
function attrRemove$2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$2(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS$2(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction$2(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS$2(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr$1(name, value) {
  var fullname = namespace$1(name), i = fullname === "transform" ? interpolateTransformSvg$1 : interpolate$2;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS$2 : attrFunction$2)(fullname, i, tweenValue$1(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS$2 : attrRemove$2)(fullname) : (fullname.local ? attrConstantNS$2 : attrConstant$2)(fullname, i, value));
}
function attrInterpolate$1(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS$1(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS$1(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS$1(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween$1(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate$1(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween$1(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace$1(name);
  return this.tween(key, (fullname.local ? attrTweenNS$1 : attrTween$1)(fullname, value));
}
function delayFunction$1(id2, value) {
  return function() {
    init$1(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant$1(id2, value) {
  return value = +value, function() {
    init$1(this, id2).delay = value;
  };
}
function transition_delay$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction$1 : delayConstant$1)(id2, value)) : get$2(this.node(), id2).delay;
}
function durationFunction$1(id2, value) {
  return function() {
    set$2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant$1(id2, value) {
  return value = +value, function() {
    set$2(this, id2).duration = value;
  };
}
function transition_duration$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction$1 : durationConstant$1)(id2, value)) : get$2(this.node(), id2).duration;
}
function easeConstant$1(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set$2(this, id2).ease = value;
  };
}
function transition_ease$1(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant$1(id2, value)) : get$2(this.node(), id2).ease;
}
function easeVarying$1(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set$2(this, id2).ease = v;
  };
}
function transition_easeVarying$1(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying$1(this._id, value));
}
function transition_filter$1(match) {
  if (typeof match !== "function")
    match = matcher$1(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition$1(subgroups, this._parents, this._name, this._id);
}
function transition_merge$1(transition) {
  if (transition._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition$1(merges, this._parents, this._name, this._id);
}
function start$1(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction$1(id2, name, listener) {
  var on0, on1, sit = start$1(name) ? init$1 : set$2;
  return function() {
    var schedule2 = sit(this, id2), on2 = schedule2.on;
    if (on2 !== on0)
      (on1 = (on0 = on2).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on$1(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get$2(this.node(), id2).on.on(name) : this.each(onFunction$1(id2, name, listener));
}
function removeFunction$1(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function transition_remove$1() {
  return this.on("end.remove", removeFunction$1(this._id));
}
function transition_select$1(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selector$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule$1(subgroup[i], name, id2, i, subgroup, get$2(node, id2));
      }
    }
  }
  return new Transition$1(subgroups, this._parents, name, id2);
}
function transition_selectAll$1(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function")
    select2 = selectorAll$1(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get$2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule$1(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition$1(subgroups, parents, name, id2);
}
var Selection$2 = selection$1.prototype.constructor;
function transition_selection$1() {
  return new Selection$2(this._groups, this._parents);
}
function styleNull$1(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$1(this, name), string1 = (this.style.removeProperty(name), styleValue$1(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove$2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$2(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue$1(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction$2(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue$1(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue$1(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove$1(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set$2(this, id2), on2 = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove$2(name)) : void 0;
    if (on2 !== on0 || listener0 !== listener)
      (on1 = (on0 = on2).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style$1(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss$1 : interpolate$2;
  return value == null ? this.styleTween(name, styleNull$1(name, i)).on("end.style." + name, styleRemove$2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction$2(name, i, tweenValue$1(this, "style." + name, value))).each(styleMaybeRemove$1(this._id, name)) : this.styleTween(name, styleConstant$2(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate$1(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween$1(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate$1(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween$1(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween$1(name, value, priority == null ? "" : priority));
}
function textConstant$2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text$1(value) {
  return this.tween("text", typeof value === "function" ? textFunction$2(tweenValue$1(this, "text", value)) : textConstant$2(value == null ? "" : value + ""));
}
function textInterpolate$1(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween$1(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate$1(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween$1(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween$1(value));
}
function transition_transition$1() {
  var name = this._name, id0 = this._id, id1 = newId$1();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get$2(node, id0);
        schedule$1(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition$1(groups, this._parents, name, id1);
}
function transition_end$1() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule2 = set$2(this, id2), on2 = schedule2.on;
      if (on2 !== on0) {
        on1 = (on0 = on2).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0)
      resolve();
  });
}
var id$1 = 0;
function Transition$1(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId$1() {
  return ++id$1;
}
var selection_prototype$1 = selection$1.prototype;
Transition$1.prototype = {
  constructor: Transition$1,
  select: transition_select$1,
  selectAll: transition_selectAll$1,
  selectChild: selection_prototype$1.selectChild,
  selectChildren: selection_prototype$1.selectChildren,
  filter: transition_filter$1,
  merge: transition_merge$1,
  selection: transition_selection$1,
  transition: transition_transition$1,
  call: selection_prototype$1.call,
  nodes: selection_prototype$1.nodes,
  node: selection_prototype$1.node,
  size: selection_prototype$1.size,
  empty: selection_prototype$1.empty,
  each: selection_prototype$1.each,
  on: transition_on$1,
  attr: transition_attr$1,
  attrTween: transition_attrTween$1,
  style: transition_style$1,
  styleTween: transition_styleTween$1,
  text: transition_text$1,
  textTween: transition_textTween$1,
  remove: transition_remove$1,
  tween: transition_tween$1,
  delay: transition_delay$1,
  duration: transition_duration$1,
  ease: transition_ease$1,
  easeVarying: transition_easeVarying$1,
  end: transition_end$1,
  [Symbol.iterator]: selection_prototype$1[Symbol.iterator]
};
function cubicInOut$1(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming$1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut$1
};
function inherit$1(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition$1(name) {
  var id2, timing;
  if (name instanceof Transition$1) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId$1(), (timing = defaultTiming$1).time = now$1(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule$1(node, name, id2, i, group, timing || inherit$1(node, id2));
      }
    }
  }
  return new Transition$1(groups, this._parents, name, id2);
}
selection$1.prototype.interrupt = selection_interrupt$1;
selection$1.prototype.transition = selection_transition$1;
const constant$4 = (x) => () => x;
function ZoomEvent$1(type, {
  sourceEvent: sourceEvent2,
  target,
  transform,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function Transform$1(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform$1.prototype = {
  constructor: Transform$1,
  scale: function(k) {
    return k === 1 ? this : new Transform$1(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform$1(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity$2 = new Transform$1(1, 0, 0);
Transform$1.prototype;
function nopropagation$2(event) {
  event.stopImmediatePropagation();
}
function noevent$2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function defaultFilter$2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent$1() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform$1() {
  return this.__zoom || identity$2;
}
function defaultWheelDelta$1(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable$2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain$1(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom$1() {
  var filter2 = defaultFilter$2, extent = defaultExtent$1, constrain = defaultConstrain$1, wheelDelta2 = defaultWheelDelta$1, touchable = defaultTouchable$2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom$1, listeners = dispatch$1("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform$1).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform$1);
    if (collection !== selection2) {
      schedule2(collection, transform, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k, p, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom2.scaleTo = function(selection2, k, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom2.translateBy = function(selection2, x, y, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x, y, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity$2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform$1(k, transform.x, transform.y);
  }
  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform$1(transform.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule2(transition, transform, point, event) {
    transition.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate2(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform$1(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select$1(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent$1(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer$1(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k)
      return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt$1(this);
      g.start();
    }
    noevent$2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments))
      return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select$1(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer$1(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    dragDisable$1(event.view);
    nopropagation$2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt$1(this);
    g.start();
    function mousemoved(event2) {
      noevent$2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer$1(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag$1(event2.view, g.moved);
      noevent$2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var t0 = this.__zoom, p0 = pointer$1(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent$2(event);
    if (duration > 0)
      select$1(this).transition().duration(duration).call(schedule2, t1, p0, event);
    else
      select$1(this).call(zoom2.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation$2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$1(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2])
        g.touch1 = p, g.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2)
        touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt$1(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent$2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer$1(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier)
        g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0)
      p = g.touch0[0], l = g.touch0[1];
    else
      return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation$2(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier)
        delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        delete g.touch1;
    }
    if (g.touch1 && !g.touch0)
      g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0)
      g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer$1(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select$1(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant$4(+_), zoom2) : wheelDelta2;
  };
  zoom2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$4(!!_), zoom2) : filter2;
  };
  zoom2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$4(!!_), zoom2) : touchable;
  };
  zoom2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom2) : constrain;
  };
  zoom2.duration = function(_) {
    return arguments.length ? (duration = +_, zoom2) : duration;
  };
  zoom2.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
  };
  return zoom2;
}
var Position = /* @__PURE__ */ ((Position2) => {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
  return Position2;
})(Position || {});
var SelectionMode = /* @__PURE__ */ ((SelectionMode2) => {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
  return SelectionMode2;
})(SelectionMode || {});
var ConnectionLineType = /* @__PURE__ */ ((ConnectionLineType2) => {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["SimpleBezier"] = "simple-bezier";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  return ConnectionLineType2;
})(ConnectionLineType || {});
var ConnectionMode = /* @__PURE__ */ ((ConnectionMode2) => {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
  return ConnectionMode2;
})(ConnectionMode || {});
var MarkerType = /* @__PURE__ */ ((MarkerType2) => {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
  return MarkerType2;
})(MarkerType || {});
var PanOnScrollMode = /* @__PURE__ */ ((PanOnScrollMode2) => {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
  return PanOnScrollMode2;
})(PanOnScrollMode || {});
const inputTags = ["INPUT", "SELECT", "TEXTAREA"];
const defaultDoc = typeof document !== "undefined" ? document : null;
function isInputDOMNode(event) {
  var _a, _b;
  const target = ((_b = (_a = event.composedPath) == null ? void 0 : _a.call(event)) == null ? void 0 : _b[0]) || event.target;
  const hasAttribute = typeof (target == null ? void 0 : target.hasAttribute) === "function" ? target.hasAttribute("contenteditable") : false;
  const closest = typeof (target == null ? void 0 : target.closest) === "function" ? target.closest(".nokey") : null;
  return inputTags.includes(target == null ? void 0 : target.nodeName) || hasAttribute || !!closest;
}
function wasModifierPressed(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
}
function isKeyMatch(pressedKey, keyToMatch, pressedKeys, isKeyUp) {
  const keyCombination = keyToMatch.replace("+", "\n").replace("\n\n", "\n+").split("\n").map((k) => k.trim().toLowerCase());
  if (keyCombination.length === 1) {
    return pressedKey.toLowerCase() === keyToMatch.toLowerCase();
  }
  if (!isKeyUp) {
    pressedKeys.add(pressedKey.toLowerCase());
  }
  const isMatch = keyCombination.every(
    (key, index) => pressedKeys.has(key) && Array.from(pressedKeys.values())[index] === keyCombination[index]
  );
  if (isKeyUp) {
    pressedKeys.delete(pressedKey.toLowerCase());
  }
  return isMatch;
}
function createKeyPredicate(keyFilter, pressedKeys) {
  return (event) => {
    if (!event.code && !event.key) {
      return false;
    }
    const keyOrCode = useKeyOrCode(event.code, keyFilter);
    if (Array.isArray(keyFilter)) {
      return keyFilter.some((key) => isKeyMatch(event[keyOrCode], key, pressedKeys, event.type === "keyup"));
    }
    return isKeyMatch(event[keyOrCode], keyFilter, pressedKeys, event.type === "keyup");
  };
}
function useKeyOrCode(code, keysToWatch) {
  return keysToWatch.includes(code) ? "code" : "key";
}
function useKeyPress(keyFilter, options) {
  const target = computed(() => toValue$1(options == null ? void 0 : options.target) ?? defaultDoc);
  const isPressed = shallowRef(toValue$1(keyFilter) === true);
  let modifierPressed = false;
  const pressedKeys = /* @__PURE__ */ new Set();
  let currentFilter = createKeyFilterFn(toValue$1(keyFilter));
  watch(
    () => toValue$1(keyFilter),
    (nextKeyFilter, previousKeyFilter) => {
      if (typeof previousKeyFilter === "boolean" && typeof nextKeyFilter !== "boolean") {
        reset();
      }
      currentFilter = createKeyFilterFn(nextKeyFilter);
    },
    {
      immediate: true
    }
  );
  useEventListener(["blur", "contextmenu"], reset);
  onKeyStroke(
    (...args) => currentFilter(...args),
    (e) => {
      var _a, _b;
      const actInsideInputWithModifier = toValue$1(options == null ? void 0 : options.actInsideInputWithModifier) ?? true;
      const preventDefault = toValue$1(options == null ? void 0 : options.preventDefault) ?? false;
      modifierPressed = wasModifierPressed(e);
      const preventAction = (!modifierPressed || modifierPressed && !actInsideInputWithModifier) && isInputDOMNode(e);
      if (preventAction) {
        return;
      }
      const target2 = ((_b = (_a = e.composedPath) == null ? void 0 : _a.call(e)) == null ? void 0 : _b[0]) || e.target;
      const isInteractiveElement = (target2 == null ? void 0 : target2.nodeName) === "BUTTON" || (target2 == null ? void 0 : target2.nodeName) === "A";
      if (!preventDefault && (modifierPressed || !isInteractiveElement)) {
        e.preventDefault();
      }
      isPressed.value = true;
    },
    { eventName: "keydown", target }
  );
  onKeyStroke(
    (...args) => currentFilter(...args),
    (e) => {
      const actInsideInputWithModifier = toValue$1(options == null ? void 0 : options.actInsideInputWithModifier) ?? true;
      if (isPressed.value) {
        const preventAction = (!modifierPressed || modifierPressed && !actInsideInputWithModifier) && isInputDOMNode(e);
        if (preventAction) {
          return;
        }
        modifierPressed = false;
        isPressed.value = false;
      }
    },
    { eventName: "keyup", target }
  );
  function reset() {
    modifierPressed = false;
    pressedKeys.clear();
    isPressed.value = toValue$1(keyFilter) === true;
  }
  function createKeyFilterFn(keyFilter2) {
    if (keyFilter2 === null) {
      reset();
      return () => false;
    }
    if (typeof keyFilter2 === "boolean") {
      reset();
      isPressed.value = keyFilter2;
      return () => false;
    }
    if (Array.isArray(keyFilter2) || typeof keyFilter2 === "string") {
      return createKeyPredicate(keyFilter2, pressedKeys);
    }
    return keyFilter2;
  }
  return isPressed;
}
const ARIA_NODE_DESC_KEY = "vue-flow__node-desc";
const ARIA_EDGE_DESC_KEY = "vue-flow__edge-desc";
const ARIA_LIVE_MESSAGE = "vue-flow__aria-live";
const elementSelectionKeys = ["Enter", " ", "Escape"];
const arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function nodeToRect(node) {
  return {
    ...node.computedPosition || { x: 0, y: 0 },
    width: node.dimensions.width || 0,
    height: node.dimensions.height || 0
  };
}
function getOverlappingArea(rectA, rectB) {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
}
function getDimensions(node) {
  return {
    width: node.offsetWidth,
    height: node.offsetHeight
  };
}
function clamp(val, min = 0, max = 1) {
  return Math.min(Math.max(val, min), max);
}
function clampPosition(position, extent) {
  return {
    x: clamp(position.x, extent[0][0], extent[1][0]),
    y: clamp(position.y, extent[0][1], extent[1][1])
  };
}
function getHostForElement(element) {
  const doc = element.getRootNode();
  if ("elementFromPoint" in doc) {
    return doc;
  }
  return window.document;
}
function isEdge(element) {
  return element && typeof element === "object" && "id" in element && "source" in element && "target" in element;
}
function isNode(element) {
  return element && typeof element === "object" && "id" in element && "position" in element && !isEdge(element);
}
function isGraphNode(element) {
  return isNode(element) && "computedPosition" in element;
}
function isNumeric(n) {
  return !Number.isNaN(n) && Number.isFinite(n);
}
function isRect(obj) {
  return isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
}
function parseNode(node, existingNode, parentNode) {
  const initialState = {
    id: node.id.toString(),
    type: node.type ?? "default",
    dimensions: markRaw({
      width: 0,
      height: 0
    }),
    computedPosition: markRaw({
      z: 0,
      ...node.position
    }),
    // todo: shouldn't be defined initially, as we want to use handleBounds to check if a node was actually initialized or not
    handleBounds: {
      source: [],
      target: []
    },
    draggable: void 0,
    selectable: void 0,
    connectable: void 0,
    focusable: void 0,
    selected: false,
    dragging: false,
    resizing: false,
    initialized: false,
    isParent: false,
    position: {
      x: 0,
      y: 0
    },
    data: isDef(node.data) ? node.data : {},
    events: markRaw(isDef(node.events) ? node.events : {})
  };
  return Object.assign(existingNode ?? initialState, node, { id: node.id.toString(), parentNode });
}
function parseEdge(edge, existingEdge, defaultEdgeOptions) {
  var _a, _b;
  const initialState = {
    id: edge.id.toString(),
    type: edge.type ?? (existingEdge == null ? void 0 : existingEdge.type) ?? "default",
    source: edge.source.toString(),
    target: edge.target.toString(),
    sourceHandle: (_a = edge.sourceHandle) == null ? void 0 : _a.toString(),
    targetHandle: (_b = edge.targetHandle) == null ? void 0 : _b.toString(),
    updatable: edge.updatable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.updatable),
    selectable: edge.selectable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.selectable),
    focusable: edge.focusable ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.focusable),
    data: isDef(edge.data) ? edge.data : {},
    events: markRaw(isDef(edge.events) ? edge.events : {}),
    label: edge.label ?? "",
    interactionWidth: edge.interactionWidth ?? (defaultEdgeOptions == null ? void 0 : defaultEdgeOptions.interactionWidth),
    ...defaultEdgeOptions ?? {}
  };
  return Object.assign(existingEdge ?? initialState, edge, { id: edge.id.toString() });
}
function getConnectedElements(nodeOrId, nodes2, edges2, dir) {
  const id2 = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const connectedIds = /* @__PURE__ */ new Set();
  const origin = dir === "source" ? "target" : "source";
  for (const edge of edges2) {
    if (edge[origin] === id2) {
      connectedIds.add(edge[dir]);
    }
  }
  return nodes2.filter((n) => connectedIds.has(n.id));
}
function getOutgoers(...args) {
  if (args.length === 3) {
    const [nodeOrId2, nodes2, edges2] = args;
    return getConnectedElements(nodeOrId2, nodes2, edges2, "target");
  }
  const [nodeOrId, elements] = args;
  const nodeId2 = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const outgoers = elements.filter((el) => isEdge(el) && el.source === nodeId2);
  return outgoers.map((edge) => elements.find((el) => isNode(el) && el.id === edge.target));
}
function getIncomers(...args) {
  if (args.length === 3) {
    const [nodeOrId2, nodes2, edges2] = args;
    return getConnectedElements(nodeOrId2, nodes2, edges2, "source");
  }
  const [nodeOrId, elements] = args;
  const nodeId2 = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
  const incomers = elements.filter((el) => isEdge(el) && el.target === nodeId2);
  return incomers.map((edge) => elements.find((el) => isNode(el) && el.id === edge.source));
}
function getEdgeId({ source, sourceHandle, target, targetHandle }) {
  return `vueflow__edge-${source}${sourceHandle ?? ""}-${target}${targetHandle ?? ""}`;
}
function connectionExists(edge, elements) {
  return elements.some(
    (el) => isEdge(el) && el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle)
  );
}
function rendererPointToPoint({ x, y }, { x: tx, y: ty, zoom: tScale }) {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
}
function pointToRendererPoint({ x, y }, { x: tx, y: ty, zoom: tScale }, snapToGrid = false, snapGrid = [1, 1]) {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  return snapToGrid ? snapPosition(position, snapGrid) : position;
}
function getBoundsOfBoxes(box1, box2) {
  return {
    x: Math.min(box1.x, box2.x),
    y: Math.min(box1.y, box2.y),
    x2: Math.max(box1.x2, box2.x2),
    y2: Math.max(box1.y2, box2.y2)
  };
}
function rectToBox({ x, y, width, height }) {
  return {
    x,
    y,
    x2: x + width,
    y2: y + height
  };
}
function boxToRect({ x, y, x2, y2 }) {
  return {
    x,
    y,
    width: x2 - x,
    height: y2 - y
  };
}
function getBoundsofRects(rect1, rect2) {
  return boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
}
function getRectOfNodes(nodes2) {
  let box = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let i = 0; i < nodes2.length; i++) {
    const node = nodes2[i];
    box = getBoundsOfBoxes(
      box,
      rectToBox({
        ...node.computedPosition,
        ...node.dimensions
      })
    );
  }
  return boxToRect(box);
}
function getNodesInside(nodes2, rect, viewport = { x: 0, y: 0, zoom: 1 }, partially = false, excludeNonSelectableNodes = false) {
  const paneRect = {
    ...pointToRendererPoint(rect, viewport),
    width: rect.width / viewport.zoom,
    height: rect.height / viewport.zoom
  };
  const visibleNodes = [];
  for (const node of nodes2) {
    const { dimensions, selectable = true, hidden = false } = node;
    const width = dimensions.width ?? node.width ?? null;
    const height = dimensions.height ?? node.height ?? null;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      continue;
    }
    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node));
    const notInitialized = width === null || height === null;
    const partiallyVisible = partially && overlappingArea > 0;
    const area = (width ?? 0) * (height ?? 0);
    const isVisible = notInitialized || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  }
  return visibleNodes;
}
function getConnectedEdges(nodesOrId, edges2) {
  const nodeIds = /* @__PURE__ */ new Set();
  if (typeof nodesOrId === "string") {
    nodeIds.add(nodesOrId);
  } else if (nodesOrId.length >= 1) {
    for (const n of nodesOrId) {
      nodeIds.add(n.id);
    }
  }
  return edges2.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
}
function parsePadding(padding, viewport) {
  if (typeof padding === "number") {
    return Math.floor((viewport - viewport / (1 + padding)) * 0.5);
  }
  if (typeof padding === "string" && padding.endsWith("px")) {
    const paddingValue = Number.parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(paddingValue);
    }
  }
  if (typeof padding === "string" && padding.endsWith("%")) {
    const paddingValue = Number.parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(viewport * paddingValue * 0.01);
    }
  }
  warn(`The padding value "${padding}" is invalid. Please provide a number or a string with a valid unit (px or %).`);
  return 0;
}
function parsePaddings(padding, width, height) {
  if (typeof padding === "string" || typeof padding === "number") {
    const paddingY = parsePadding(padding, height);
    const paddingX = parsePadding(padding, width);
    return {
      top: paddingY,
      right: paddingX,
      bottom: paddingY,
      left: paddingX,
      x: paddingX * 2,
      y: paddingY * 2
    };
  }
  if (typeof padding === "object") {
    const top = parsePadding(padding.top ?? padding.y ?? 0, height);
    const bottom = parsePadding(padding.bottom ?? padding.y ?? 0, height);
    const left = parsePadding(padding.left ?? padding.x ?? 0, width);
    const right = parsePadding(padding.right ?? padding.x ?? 0, width);
    return { top, right, bottom, left, x: left + right, y: top + bottom };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function calculateAppliedPaddings(bounds, x, y, zoom2, width, height) {
  const { x: left, y: top } = rendererPointToPoint(bounds, { x, y, zoom: zoom2 });
  const { x: boundRight, y: boundBottom } = rendererPointToPoint(
    { x: bounds.x + bounds.width, y: bounds.y + bounds.height },
    {
      x,
      y,
      zoom: zoom2
    }
  );
  const right = width - boundRight;
  const bottom = height - boundBottom;
  return {
    left: Math.floor(left),
    top: Math.floor(top),
    right: Math.floor(right),
    bottom: Math.floor(bottom)
  };
}
function getTransformForBounds(bounds, width, height, minZoom, maxZoom, padding = 0.1) {
  const p = parsePaddings(padding, width, height);
  const xZoom = (width - p.x) / bounds.width;
  const yZoom = (height - p.y) / bounds.height;
  const zoom2 = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom2, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  const newPadding = calculateAppliedPaddings(bounds, x, y, clampedZoom, width, height);
  const offset = {
    left: Math.min(newPadding.left - p.left, 0),
    top: Math.min(newPadding.top - p.top, 0),
    right: Math.min(newPadding.right - p.right, 0),
    bottom: Math.min(newPadding.bottom - p.bottom, 0)
  };
  return {
    x: x - offset.left + offset.right,
    y: y - offset.top + offset.bottom,
    zoom: clampedZoom
  };
}
function getXYZPos(parentPos, computedPosition) {
  return {
    x: computedPosition.x + parentPos.x,
    y: computedPosition.y + parentPos.y,
    z: (parentPos.z > computedPosition.z ? parentPos.z : computedPosition.z) + 1
  };
}
function isParentSelected(node, nodeLookup) {
  if (!node.parentNode) {
    return false;
  }
  const parent = nodeLookup.get(node.parentNode);
  if (!parent) {
    return false;
  }
  if (parent.selected) {
    return true;
  }
  return isParentSelected(parent, nodeLookup);
}
function getMarkerId(marker, vueFlowId) {
  if (typeof marker === "undefined") {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = vueFlowId ? `${vueFlowId}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
}
function wheelDelta(event) {
  const factor = event.ctrlKey && isMacOs() ? 10 : 1;
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
}
function calcAutoPanVelocity(value, min, max) {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, min) / min;
  }
  if (value > max) {
    return -clamp(Math.abs(value - max), 1, min) / min;
  }
  return 0;
}
function calcAutoPan(pos, bounds, speed = 15, distance2 = 40) {
  const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
  const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
  return [xMovement, yMovement];
}
function handleParentExpand(updateItem, parent) {
  if (parent) {
    const extendWidth = updateItem.position.x + updateItem.dimensions.width - parent.dimensions.width;
    const extendHeight = updateItem.position.y + updateItem.dimensions.height - parent.dimensions.height;
    if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
      let parentStyles = {};
      if (typeof parent.style === "function") {
        parentStyles = { ...parent.style(parent) };
      } else if (parent.style) {
        parentStyles = { ...parent.style };
      }
      parentStyles.width = parentStyles.width ?? `${parent.dimensions.width}px`;
      parentStyles.height = parentStyles.height ?? `${parent.dimensions.height}px`;
      if (extendWidth > 0) {
        if (typeof parentStyles.width === "string") {
          const currWidth = Number(parentStyles.width.replace("px", ""));
          parentStyles.width = `${currWidth + extendWidth}px`;
        } else {
          parentStyles.width += extendWidth;
        }
      }
      if (extendHeight > 0) {
        if (typeof parentStyles.height === "string") {
          const currWidth = Number(parentStyles.height.replace("px", ""));
          parentStyles.height = `${currWidth + extendHeight}px`;
        } else {
          parentStyles.height += extendHeight;
        }
      }
      if (updateItem.position.x < 0) {
        const xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        if (typeof parentStyles.width === "string") {
          const currWidth = Number(parentStyles.width.replace("px", ""));
          parentStyles.width = `${currWidth + xDiff}px`;
        } else {
          parentStyles.width += xDiff;
        }
        updateItem.position.x = 0;
      }
      if (updateItem.position.y < 0) {
        const yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        if (typeof parentStyles.height === "string") {
          const currWidth = Number(parentStyles.height.replace("px", ""));
          parentStyles.height = `${currWidth + yDiff}px`;
        } else {
          parentStyles.height += yDiff;
        }
        updateItem.position.y = 0;
      }
      parent.dimensions.width = Number(parentStyles.width.toString().replace("px", ""));
      parent.dimensions.height = Number(parentStyles.height.toString().replace("px", ""));
      if (typeof parent.style === "function") {
        parent.style = (p) => {
          const styleFunc = parent.style;
          return {
            ...styleFunc(p),
            ...parentStyles
          };
        };
      } else {
        parent.style = {
          ...parent.style,
          ...parentStyles
        };
      }
    }
  }
}
function applyChanges(changes, elements) {
  var _a, _b;
  const addRemoveChanges = changes.filter((c2) => c2.type === "add" || c2.type === "remove");
  for (const change of addRemoveChanges) {
    if (change.type === "add") {
      const index = elements.findIndex((el) => el.id === change.item.id);
      if (index === -1) {
        elements.push(change.item);
      }
    } else if (change.type === "remove") {
      const index = elements.findIndex((el) => el.id === change.id);
      if (index !== -1) {
        elements.splice(index, 1);
      }
    }
  }
  const elementIds = elements.map((el) => el.id);
  for (const element of elements) {
    for (const currentChange of changes) {
      if (currentChange.id !== element.id) {
        continue;
      }
      switch (currentChange.type) {
        case "select":
          element.selected = currentChange.selected;
          break;
        case "position":
          if (isGraphNode(element)) {
            if (typeof currentChange.position !== "undefined") {
              element.position = currentChange.position;
            }
            if (typeof currentChange.dragging !== "undefined") {
              element.dragging = currentChange.dragging;
            }
            if (element.expandParent && element.parentNode) {
              const parent = elements[elementIds.indexOf(element.parentNode)];
              if (parent && isGraphNode(parent)) {
                handleParentExpand(element, parent);
              }
            }
          }
          break;
        case "dimensions":
          if (isGraphNode(element)) {
            if (typeof currentChange.dimensions !== "undefined") {
              element.dimensions = currentChange.dimensions;
            }
            if (typeof currentChange.updateStyle !== "undefined" && currentChange.updateStyle) {
              element.style = {
                ...element.style || {},
                width: `${(_a = currentChange.dimensions) == null ? void 0 : _a.width}px`,
                height: `${(_b = currentChange.dimensions) == null ? void 0 : _b.height}px`
              };
            }
            if (typeof currentChange.resizing !== "undefined") {
              element.resizing = currentChange.resizing;
            }
            if (element.expandParent && element.parentNode) {
              const parent = elements[elementIds.indexOf(element.parentNode)];
              if (parent && isGraphNode(parent)) {
                const parentInit = !!parent.dimensions.width && !!parent.dimensions.height;
                if (!parentInit) {
                  nextTick(() => {
                    handleParentExpand(element, parent);
                  });
                } else {
                  handleParentExpand(element, parent);
                }
              }
            }
          }
          break;
      }
    }
  }
  return elements;
}
function createSelectionChange(id2, selected) {
  return {
    id: id2,
    type: "select",
    selected
  };
}
function createAdditionChange(item) {
  return {
    item,
    type: "add"
  };
}
function createNodeRemoveChange(id2) {
  return {
    id: id2,
    type: "remove"
  };
}
function createEdgeRemoveChange(id2, source, target, sourceHandle, targetHandle) {
  return {
    id: id2,
    source,
    target,
    sourceHandle: sourceHandle || null,
    targetHandle: targetHandle || null,
    type: "remove"
  };
}
function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
  const changes = [];
  for (const [id2, item] of items) {
    const willBeSelected = selectedIds.has(id2);
    if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
      if (mutateItem) {
        item.selected = willBeSelected;
      }
      changes.push(createSelectionChange(item.id, willBeSelected));
    }
  }
  return changes;
}
const noop$1 = () => {
};
function createExtendedEventHook(defaultHandler) {
  const listeners = /* @__PURE__ */ new Set();
  let emitter = noop$1;
  let hasEmitListeners = () => false;
  const hasListeners = () => listeners.size > 0 || hasEmitListeners();
  const setEmitter = (fn) => {
    emitter = fn;
  };
  const removeEmitter = () => {
    emitter = noop$1;
  };
  const setHasEmitListeners = (fn) => {
    hasEmitListeners = fn;
  };
  const removeHasEmitListeners = () => {
    hasEmitListeners = () => false;
  };
  const off2 = (fn) => {
    listeners.delete(fn);
  };
  const on2 = (fn) => {
    listeners.add(fn);
    const offFn = () => off2(fn);
    tryOnScopeDispose(offFn);
    return { off: offFn };
  };
  const trigger = (param) => {
    const queue = [emitter];
    if (hasListeners()) {
      queue.push(...listeners);
    } else if (defaultHandler) {
      queue.push(defaultHandler);
    }
    return Promise.allSettled(queue.map((fn) => fn(param)));
  };
  return {
    on: on2,
    off: off2,
    trigger,
    hasListeners,
    listeners,
    setEmitter,
    removeEmitter,
    setHasEmitListeners,
    removeHasEmitListeners
  };
}
function hasSelector(target, selector2, node) {
  let current = target;
  do {
    if (current && current.matches(selector2)) {
      return true;
    } else if (current === node) {
      return false;
    }
    current = current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodeLookup, nodesDraggable, mousePos, nodeId2) {
  var _a, _b;
  const dragItems = /* @__PURE__ */ new Map();
  for (const [id2, node] of nodeLookup) {
    if ((node.selected || node.id === nodeId2) && (!node.parentNode || !isParentSelected(node, nodeLookup)) && (node.draggable || nodesDraggable && typeof node.draggable === "undefined")) {
      const internalNode = nodeLookup.get(id2);
      if (internalNode) {
        dragItems.set(id2, {
          id: node.id,
          position: node.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - ((_a = node.computedPosition) == null ? void 0 : _a.x) || 0,
            y: mousePos.y - ((_b = node.computedPosition) == null ? void 0 : _b.y) || 0
          },
          from: { x: node.computedPosition.x, y: node.computedPosition.y },
          extent: node.extent,
          parentNode: node.parentNode,
          dimensions: { ...node.dimensions },
          expandParent: node.expandParent
        });
      }
    }
  }
  return Array.from(dragItems.values());
}
function getEventHandlerParams({
  id: id2,
  dragItems,
  findNode
}) {
  const extendedDragItems = [];
  for (const dragItem of dragItems) {
    const node = findNode(dragItem.id);
    if (node) {
      extendedDragItems.push(node);
    }
  }
  return [id2 ? extendedDragItems.find((n) => n.id === id2) : extendedDragItems[0], extendedDragItems];
}
function getExtentPadding(padding) {
  if (Array.isArray(padding)) {
    switch (padding.length) {
      case 1:
        return [padding[0], padding[0], padding[0], padding[0]];
      case 2:
        return [padding[0], padding[1], padding[0], padding[1]];
      case 3:
        return [padding[0], padding[1], padding[2], padding[1]];
      case 4:
        return padding;
      default:
        return [0, 0, 0, 0];
    }
  }
  return [padding, padding, padding, padding];
}
function getParentExtent(currentExtent, node, parent) {
  const [top, right, bottom, left] = typeof currentExtent !== "string" ? getExtentPadding(currentExtent.padding) : [0, 0, 0, 0];
  if (parent && typeof parent.computedPosition.x !== "undefined" && typeof parent.computedPosition.y !== "undefined" && typeof parent.dimensions.width !== "undefined" && typeof parent.dimensions.height !== "undefined") {
    return [
      [parent.computedPosition.x + left, parent.computedPosition.y + top],
      [
        parent.computedPosition.x + parent.dimensions.width - right,
        parent.computedPosition.y + parent.dimensions.height - bottom
      ]
    ];
  }
  return false;
}
function getExtent(item, triggerError, extent, parent) {
  let currentExtent = item.extent || extent;
  if ((currentExtent === "parent" || !Array.isArray(currentExtent) && (currentExtent == null ? void 0 : currentExtent.range) === "parent") && !item.expandParent) {
    if (item.parentNode && parent && item.dimensions.width && item.dimensions.height) {
      const parentExtent = getParentExtent(currentExtent, item, parent);
      if (parentExtent) {
        currentExtent = parentExtent;
      }
    } else {
      triggerError(new VueFlowError(ErrorCode.NODE_EXTENT_INVALID, item.id));
      currentExtent = extent;
    }
  } else if (Array.isArray(currentExtent)) {
    const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
    const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
    currentExtent = [
      [currentExtent[0][0] + parentX, currentExtent[0][1] + parentY],
      [currentExtent[1][0] + parentX, currentExtent[1][1] + parentY]
    ];
  } else if (currentExtent !== "parent" && (currentExtent == null ? void 0 : currentExtent.range) && Array.isArray(currentExtent.range)) {
    const [top, right, bottom, left] = getExtentPadding(currentExtent.padding);
    const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
    const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
    currentExtent = [
      [currentExtent.range[0][0] + parentX + left, currentExtent.range[0][1] + parentY + top],
      [currentExtent.range[1][0] + parentX - right, currentExtent.range[1][1] + parentY - bottom]
    ];
  }
  return currentExtent === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : currentExtent;
}
function clampNodeExtent({ width, height }, extent) {
  return [extent[0], [extent[1][0] - (width || 0), extent[1][1] - (height || 0)]];
}
function calcNextPosition(node, nextPosition, triggerError, nodeExtent, parentNode) {
  const extent = clampNodeExtent(node.dimensions, getExtent(node, triggerError, nodeExtent, parentNode));
  const clampedPos = clampPosition(nextPosition, extent);
  return {
    position: {
      x: clampedPos.x - ((parentNode == null ? void 0 : parentNode.computedPosition.x) || 0),
      y: clampedPos.y - ((parentNode == null ? void 0 : parentNode.computedPosition.y) || 0)
    },
    computedPosition: clampedPos
  };
}
function getHandlePosition(node, handle, fallbackPosition = Position.Left, center = false) {
  const x = ((handle == null ? void 0 : handle.x) ?? 0) + node.computedPosition.x;
  const y = ((handle == null ? void 0 : handle.y) ?? 0) + node.computedPosition.y;
  const { width, height } = handle ?? getNodeDimensions(node);
  if (center) {
    return { x: x + width / 2, y: y + height / 2 };
  }
  const position = (handle == null ? void 0 : handle.position) ?? fallbackPosition;
  switch (position) {
    case Position.Top:
      return { x: x + width / 2, y };
    case Position.Right:
      return { x: x + width, y: y + height / 2 };
    case Position.Bottom:
      return { x: x + width / 2, y: y + height };
    case Position.Left:
      return { x, y: y + height / 2 };
  }
}
function getEdgeHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
}
function isEdgeVisible({
  sourcePos,
  targetPos,
  sourceWidth,
  sourceHeight,
  targetWidth,
  targetHeight,
  width,
  height,
  viewport
}) {
  const edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewBox = rectToBox({
    x: (0 - viewport.x) / viewport.zoom,
    y: (0 - viewport.y) / viewport.zoom,
    width: width / viewport.zoom,
    height: height / viewport.zoom
  });
  const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  const overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getEdgeZIndex(edge, findNode, elevateEdgesOnSelect = false) {
  const hasZIndex = typeof edge.zIndex === "number";
  let z = hasZIndex ? edge.zIndex : 0;
  const source = findNode(edge.source);
  const target = findNode(edge.target);
  if (!source || !target) {
    return 0;
  }
  if (elevateEdgesOnSelect) {
    z = hasZIndex ? edge.zIndex : Math.max(source.computedPosition.z || 0, target.computedPosition.z || 0);
  }
  return z;
}
var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
  ErrorCode2["MISSING_STYLES"] = "MISSING_STYLES";
  ErrorCode2["MISSING_VIEWPORT_DIMENSIONS"] = "MISSING_VIEWPORT_DIMENSIONS";
  ErrorCode2["NODE_INVALID"] = "NODE_INVALID";
  ErrorCode2["NODE_NOT_FOUND"] = "NODE_NOT_FOUND";
  ErrorCode2["NODE_MISSING_PARENT"] = "NODE_MISSING_PARENT";
  ErrorCode2["NODE_TYPE_MISSING"] = "NODE_TYPE_MISSING";
  ErrorCode2["NODE_EXTENT_INVALID"] = "NODE_EXTENT_INVALID";
  ErrorCode2["EDGE_INVALID"] = "EDGE_INVALID";
  ErrorCode2["EDGE_NOT_FOUND"] = "EDGE_NOT_FOUND";
  ErrorCode2["EDGE_SOURCE_MISSING"] = "EDGE_SOURCE_MISSING";
  ErrorCode2["EDGE_TARGET_MISSING"] = "EDGE_TARGET_MISSING";
  ErrorCode2["EDGE_TYPE_MISSING"] = "EDGE_TYPE_MISSING";
  ErrorCode2["EDGE_SOURCE_TARGET_SAME"] = "EDGE_SOURCE_TARGET_SAME";
  ErrorCode2["EDGE_SOURCE_TARGET_MISSING"] = "EDGE_SOURCE_TARGET_MISSING";
  ErrorCode2["EDGE_ORPHANED"] = "EDGE_ORPHANED";
  ErrorCode2["USEVUEFLOW_OPTIONS"] = "USEVUEFLOW_OPTIONS";
  return ErrorCode2;
})(ErrorCode || {});
const messages = {
  [
    "MISSING_STYLES"
    /* MISSING_STYLES */
  ]: () => `It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly`,
  [
    "MISSING_VIEWPORT_DIMENSIONS"
    /* MISSING_VIEWPORT_DIMENSIONS */
  ]: () => "The Vue Flow parent container needs a width and a height to render the graph",
  [
    "NODE_INVALID"
    /* NODE_INVALID */
  ]: (id2) => `Node is invalid
Node: ${id2}`,
  [
    "NODE_NOT_FOUND"
    /* NODE_NOT_FOUND */
  ]: (id2) => `Node not found
Node: ${id2}`,
  [
    "NODE_MISSING_PARENT"
    /* NODE_MISSING_PARENT */
  ]: (id2, parentId) => `Node is missing a parent
Node: ${id2}
Parent: ${parentId}`,
  [
    "NODE_TYPE_MISSING"
    /* NODE_TYPE_MISSING */
  ]: (type) => `Node type is missing
Type: ${type}`,
  [
    "NODE_EXTENT_INVALID"
    /* NODE_EXTENT_INVALID */
  ]: (id2) => `Only child nodes can use a parent extent
Node: ${id2}`,
  [
    "EDGE_INVALID"
    /* EDGE_INVALID */
  ]: (id2) => `An edge needs a source and a target
Edge: ${id2}`,
  [
    "EDGE_SOURCE_MISSING"
    /* EDGE_SOURCE_MISSING */
  ]: (id2, source) => `Edge source is missing
Edge: ${id2} 
Source: ${source}`,
  [
    "EDGE_TARGET_MISSING"
    /* EDGE_TARGET_MISSING */
  ]: (id2, target) => `Edge target is missing
Edge: ${id2} 
Target: ${target}`,
  [
    "EDGE_TYPE_MISSING"
    /* EDGE_TYPE_MISSING */
  ]: (type) => `Edge type is missing
Type: ${type}`,
  [
    "EDGE_SOURCE_TARGET_SAME"
    /* EDGE_SOURCE_TARGET_SAME */
  ]: (id2, source, target) => `Edge source and target are the same
Edge: ${id2} 
Source: ${source} 
Target: ${target}`,
  [
    "EDGE_SOURCE_TARGET_MISSING"
    /* EDGE_SOURCE_TARGET_MISSING */
  ]: (id2, source, target) => `Edge source or target is missing
Edge: ${id2} 
Source: ${source} 
Target: ${target}`,
  [
    "EDGE_ORPHANED"
    /* EDGE_ORPHANED */
  ]: (id2) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${id2}`,
  [
    "EDGE_NOT_FOUND"
    /* EDGE_NOT_FOUND */
  ]: (id2) => `Edge not found
Edge: ${id2}`,
  // deprecation errors
  [
    "USEVUEFLOW_OPTIONS"
    /* USEVUEFLOW_OPTIONS */
  ]: () => `The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead`
};
class VueFlowError extends Error {
  constructor(code, ...args) {
    var _a;
    super((_a = messages[code]) == null ? void 0 : _a.call(messages, ...args));
    this.name = "VueFlowError";
    this.code = code;
    this.args = args;
  }
}
function isMouseEvent(event) {
  return "clientX" in event;
}
function isUseDragEvent(event) {
  return "sourceEvent" in event;
}
function getEventPosition(event, bounds) {
  const isMouse = isMouseEvent(event);
  let evtX;
  let evtY;
  if (isMouse) {
    evtX = event.clientX;
    evtY = event.clientY;
  } else if ("touches" in event && event.touches.length > 0) {
    evtX = event.touches[0].clientX;
    evtY = event.touches[0].clientY;
  } else if ("changedTouches" in event && event.changedTouches.length > 0) {
    evtX = event.changedTouches[0].clientX;
    evtY = event.changedTouches[0].clientY;
  } else {
    evtX = 0;
    evtY = 0;
  }
  return {
    x: evtX - ((bounds == null ? void 0 : bounds.left) ?? 0),
    y: evtY - ((bounds == null ? void 0 : bounds.top) ?? 0)
  };
}
const isMacOs = () => {
  var _a;
  return typeof navigator !== "undefined" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
};
function getNodeDimensions(node) {
  var _a, _b;
  return {
    width: ((_a = node.dimensions) == null ? void 0 : _a.width) ?? node.width ?? 0,
    height: ((_b = node.dimensions) == null ? void 0 : _b.height) ?? node.height ?? 0
  };
}
function snapPosition(position, snapGrid = [1, 1]) {
  return {
    x: snapGrid[0] * Math.round(position.x / snapGrid[0]),
    y: snapGrid[1] * Math.round(position.y / snapGrid[1])
  };
}
const alwaysValid$1 = () => true;
function resetRecentHandle(handleDomNode) {
  handleDomNode == null ? void 0 : handleDomNode.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function getNodesWithinDistance(position, nodeLookup, distance2) {
  const nodes2 = [];
  const rect = {
    x: position.x - distance2,
    y: position.y - distance2,
    width: distance2 * 2,
    height: distance2 * 2
  };
  for (const node of nodeLookup.values()) {
    if (getOverlappingArea(rect, nodeToRect(node)) > 0) {
      nodes2.push(node);
    }
  }
  return nodes2;
}
const ADDITIONAL_DISTANCE = 250;
function getClosestHandle(position, connectionRadius, nodeLookup, fromHandle) {
  var _a, _b;
  let closestHandles = [];
  let minDistance = Number.POSITIVE_INFINITY;
  const closeNodes = getNodesWithinDistance(position, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
  for (const node of closeNodes) {
    const allHandles = [...((_a = node.handleBounds) == null ? void 0 : _a.source) ?? [], ...((_b = node.handleBounds) == null ? void 0 : _b.target) ?? []];
    for (const handle of allHandles) {
      if (fromHandle.nodeId === handle.nodeId && fromHandle.type === handle.type && fromHandle.id === handle.id) {
        continue;
      }
      const { x, y } = getHandlePosition(node, handle, handle.position, true);
      const distance2 = Math.sqrt((x - position.x) ** 2 + (y - position.y) ** 2);
      if (distance2 > connectionRadius) {
        continue;
      }
      if (distance2 < minDistance) {
        closestHandles = [{ ...handle, x, y }];
        minDistance = distance2;
      } else if (distance2 === minDistance) {
        closestHandles.push({ ...handle, x, y });
      }
    }
  }
  if (!closestHandles.length) {
    return null;
  }
  if (closestHandles.length > 1) {
    const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
    return closestHandles.find((handle) => handle.type === oppositeHandleType) ?? closestHandles[0];
  }
  return closestHandles[0];
}
function isValidHandle(event, {
  handle,
  connectionMode,
  fromNodeId,
  fromHandleId,
  fromType,
  doc,
  lib,
  flowId,
  isValidConnection = alwaysValid$1
}, edges2, nodes2, findNode, nodeLookup) {
  const isTarget = fromType === "target";
  const handleDomNode = handle ? doc.querySelector(`.${lib}-flow__handle[data-id="${flowId}-${handle == null ? void 0 : handle.nodeId}-${handle == null ? void 0 : handle.id}-${handle == null ? void 0 : handle.type}"]`) : null;
  const { x, y } = getEventPosition(event);
  const handleBelow = doc.elementFromPoint(x, y);
  const handleToCheck = (handleBelow == null ? void 0 : handleBelow.classList.contains(`${lib}-flow__handle`)) ? handleBelow : handleDomNode;
  const result = {
    handleDomNode: handleToCheck,
    isValid: false,
    connection: null,
    toHandle: null
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    if (!handleNodeId || !handleType) {
      return result;
    }
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    result.isValid = isValid && isValidConnection(connection, {
      nodes: nodes2,
      edges: edges2,
      sourceNode: findNode(connection.source),
      targetNode: findNode(connection.target)
    });
    result.toHandle = getHandle(handleNodeId, handleType, handleId, nodeLookup, connectionMode, true);
  }
  return result;
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("target")) {
    return "target";
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("source")) {
    return "source";
  }
  return null;
}
function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
  let connectionStatus = null;
  if (isHandleValid) {
    connectionStatus = "valid";
  } else if (isInsideConnectionRadius && !isHandleValid) {
    connectionStatus = "invalid";
  }
  return connectionStatus;
}
function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
  let isValid = null;
  if (isHandleValid) {
    isValid = true;
  } else if (isInsideConnectionRadius && !isHandleValid) {
    isValid = false;
  }
  return isValid;
}
function getHandle(nodeId2, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
  var _a, _b, _c;
  const node = nodeLookup.get(nodeId2);
  if (!node) {
    return null;
  }
  const handles = connectionMode === ConnectionMode.Strict ? (_a = node.handleBounds) == null ? void 0 : _a[handleType] : [...((_b = node.handleBounds) == null ? void 0 : _b.source) ?? [], ...((_c = node.handleBounds) == null ? void 0 : _c.target) ?? []];
  const handle = (handleId ? handles == null ? void 0 : handles.find((h2) => h2.id === handleId) : handles == null ? void 0 : handles[0]) ?? null;
  return handle && withAbsolutePosition ? { ...handle, ...getHandlePosition(node, handle, handle.position, true) } : handle;
}
const oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
const productionEnvs = ["production", "prod"];
function warn(message, ...args) {
  if (isDev()) {
    console.warn(`[Vue Flow]: ${message}`, ...args);
  }
}
function isDev() {
  return !productionEnvs.includes("production");
}
function getHandleBounds(type, nodeElement, nodeBounds, zoom2, nodeId2) {
  const handles = nodeElement.querySelectorAll(`.vue-flow__handle.${type}`);
  if (!(handles == null ? void 0 : handles.length)) {
    return null;
  }
  return Array.from(handles).map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      type,
      nodeId: nodeId2,
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left) / zoom2,
      y: (handleBounds.top - nodeBounds.top) / zoom2,
      ...getDimensions(handle)
    };
  });
}
function handleNodeClick(node, multiSelectionActive, addSelectedNodes, removeSelectedNodes, nodesSelectionActive, unselect = false, nodeEl) {
  nodesSelectionActive.value = false;
  if (!node.selected) {
    addSelectedNodes([node]);
  } else if (unselect || node.selected && multiSelectionActive) {
    removeSelectedNodes([node]);
    nextTick(() => {
      nodeEl.blur();
    });
  }
}
function isDef(val) {
  const unrefVal = unref(val);
  return typeof unrefVal !== "undefined";
}
function addEdgeToStore(edgeParams, edges2, triggerError, defaultEdgeOptions) {
  if (!edgeParams || !edgeParams.source || !edgeParams.target) {
    triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, (edgeParams == null ? void 0 : edgeParams.id) ?? `[ID UNKNOWN]`));
    return false;
  }
  let edge;
  if (isEdge(edgeParams)) {
    edge = edgeParams;
  } else {
    edge = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  edge = parseEdge(edge, void 0, defaultEdgeOptions);
  if (connectionExists(edge, edges2)) {
    return false;
  }
  return edge;
}
function updateEdgeAction(edge, newConnection, prevEdge, shouldReplaceId, triggerError) {
  if (!newConnection.source || !newConnection.target) {
    triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, edge.id));
    return false;
  }
  if (!prevEdge) {
    triggerError(new VueFlowError(ErrorCode.EDGE_NOT_FOUND, edge.id));
    return false;
  }
  const { id: id2, ...rest } = edge;
  return {
    ...rest,
    id: shouldReplaceId ? getEdgeId(newConnection) : id2,
    source: newConnection.source,
    target: newConnection.target,
    sourceHandle: newConnection.sourceHandle,
    targetHandle: newConnection.targetHandle
  };
}
function createGraphNodes(nodes2, findNode, triggerError) {
  const parentNodes = {};
  const nextNodes = [];
  for (let i = 0; i < nodes2.length; ++i) {
    const node = nodes2[i];
    if (!isNode(node)) {
      triggerError(
        new VueFlowError(ErrorCode.NODE_INVALID, node == null ? void 0 : node.id) || `[ID UNKNOWN|INDEX ${i}]`
      );
      continue;
    }
    const parsed = parseNode(node, findNode(node.id), node.parentNode);
    if (node.parentNode) {
      parentNodes[node.parentNode] = true;
    }
    nextNodes[i] = parsed;
  }
  for (const node of nextNodes) {
    const parentNode = findNode(node.parentNode) || nextNodes.find((n) => n.id === node.parentNode);
    if (node.parentNode && !parentNode) {
      triggerError(new VueFlowError(ErrorCode.NODE_MISSING_PARENT, node.id, node.parentNode));
    }
    if (node.parentNode || parentNodes[node.id]) {
      if (parentNodes[node.id]) {
        node.isParent = true;
      }
      if (parentNode) {
        parentNode.isParent = true;
      }
    }
  }
  return nextNodes;
}
function addConnectionToLookup(type, connection, connectionKey, connectionLookup, nodeId2, handleId) {
  let key = nodeId2;
  const nodeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, nodeMap.set(connectionKey, connection));
  key = `${nodeId2}-${type}`;
  const typeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
  connectionLookup.set(key, typeMap.set(connectionKey, connection));
  if (handleId) {
    key = `${nodeId2}-${type}-${handleId}`;
    const handleMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
    connectionLookup.set(key, handleMap.set(connectionKey, connection));
  }
}
function updateConnectionLookup(connectionLookup, edgeLookup, edges2) {
  connectionLookup.clear();
  for (const edge of edges2) {
    const { source: sourceNode, target: targetNode, sourceHandle = null, targetHandle = null } = edge;
    const connection = { edgeId: edge.id, source: sourceNode, target: targetNode, sourceHandle, targetHandle };
    const sourceKey = `${sourceNode}-${sourceHandle}--${targetNode}-${targetHandle}`;
    const targetKey = `${targetNode}-${targetHandle}--${sourceNode}-${sourceHandle}`;
    addConnectionToLookup("source", connection, targetKey, connectionLookup, sourceNode, sourceHandle);
    addConnectionToLookup("target", connection, sourceKey, connectionLookup, targetNode, targetHandle);
  }
}
function areSetsEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
function createGraphEdges(nextEdges, isValidConnection, findNode, findEdge, onError, defaultEdgeOptions, nodes2, edges2) {
  const validEdges = [];
  for (const edgeOrConnection of nextEdges) {
    const edge = isEdge(edgeOrConnection) ? edgeOrConnection : addEdgeToStore(edgeOrConnection, edges2, onError, defaultEdgeOptions);
    if (!edge) {
      continue;
    }
    const sourceNode = findNode(edge.source);
    const targetNode = findNode(edge.target);
    if (!sourceNode || !targetNode) {
      onError(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge.id, edge.source, edge.target));
      continue;
    }
    if (!sourceNode) {
      onError(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge.id, edge.source));
      continue;
    }
    if (!targetNode) {
      onError(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge.id, edge.target));
      continue;
    }
    if (isValidConnection) {
      const isValid = isValidConnection(edge, {
        edges: edges2,
        nodes: nodes2,
        sourceNode,
        targetNode
      });
      if (!isValid) {
        onError(new VueFlowError(ErrorCode.EDGE_INVALID, edge.id));
        continue;
      }
    }
    const existingEdge = findEdge(edge.id);
    validEdges.push({
      ...parseEdge(edge, existingEdge, defaultEdgeOptions),
      sourceNode,
      targetNode
    });
  }
  return validEdges;
}
const VueFlow = /* @__PURE__ */ Symbol("vueFlow");
const NodeId = /* @__PURE__ */ Symbol("nodeId");
const NodeRef = /* @__PURE__ */ Symbol("nodeRef");
const EdgeId = /* @__PURE__ */ Symbol("edgeId");
const EdgeRef = /* @__PURE__ */ Symbol("edgeRef");
const Slots$1 = /* @__PURE__ */ Symbol("slots");
function useDrag(params) {
  const {
    vueFlowRef,
    snapToGrid,
    snapGrid,
    noDragClassName,
    nodeLookup,
    nodeExtent,
    nodeDragThreshold,
    viewport,
    autoPanOnNodeDrag,
    autoPanSpeed,
    nodesDraggable,
    panBy,
    findNode,
    multiSelectionActive,
    nodesSelectionActive,
    selectNodesOnDrag,
    removeSelectedElements,
    addSelectedNodes,
    updateNodePositions,
    emits
  } = useVueFlow();
  const { onStart, onDrag, onStop, onClick, el, disabled, id: id2, selectable, dragHandle } = params;
  const dragging = shallowRef(false);
  let dragItems = [];
  let dragHandler;
  let containerBounds = null;
  let lastPos = { x: void 0, y: void 0 };
  let mousePosition = { x: 0, y: 0 };
  let dragEvent = null;
  let dragStarted = false;
  let nodePositionsChanged = false;
  let autoPanId = 0;
  let autoPanStarted = false;
  const getPointerPosition = useGetPointerPosition();
  const updateNodes = ({ x, y }) => {
    lastPos = { x, y };
    let hasChange = false;
    dragItems = dragItems.map((n) => {
      const nextPosition = { x: x - n.distance.x, y: y - n.distance.y };
      const { computedPosition } = calcNextPosition(
        n,
        snapToGrid.value ? snapPosition(nextPosition, snapGrid.value) : nextPosition,
        emits.error,
        nodeExtent.value,
        n.parentNode ? findNode(n.parentNode) : void 0
      );
      hasChange = hasChange || n.position.x !== computedPosition.x || n.position.y !== computedPosition.y;
      n.position = computedPosition;
      return n;
    });
    nodePositionsChanged = nodePositionsChanged || hasChange;
    if (!hasChange) {
      return;
    }
    updateNodePositions(dragItems, true, true);
    dragging.value = true;
    if (dragEvent) {
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onDrag({ event: dragEvent, node: currentNode, nodes: nodes2 });
    }
  };
  const autoPan = () => {
    if (!containerBounds) {
      return;
    }
    const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed.value);
    if (xMovement !== 0 || yMovement !== 0) {
      const nextPos = {
        x: (lastPos.x ?? 0) - xMovement / viewport.value.zoom,
        y: (lastPos.y ?? 0) - yMovement / viewport.value.zoom
      };
      if (panBy({ x: xMovement, y: yMovement })) {
        updateNodes(nextPos);
      }
    }
    autoPanId = requestAnimationFrame(autoPan);
  };
  const startDrag = (event, nodeEl) => {
    dragStarted = true;
    const node = findNode(id2);
    if (!selectNodesOnDrag.value && !multiSelectionActive.value && node) {
      if (!node.selected) {
        removeSelectedElements();
      }
    }
    if (node && toValue$1(selectable) && selectNodesOnDrag.value) {
      handleNodeClick(
        node,
        multiSelectionActive.value,
        addSelectedNodes,
        removeSelectedElements,
        nodesSelectionActive,
        false,
        nodeEl
      );
    }
    const pointerPos = getPointerPosition(event.sourceEvent);
    lastPos = pointerPos;
    dragItems = getDragItems(nodeLookup.value, nodesDraggable.value, pointerPos, id2);
    if (dragItems.length) {
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onStart({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
    }
  };
  const eventStart = (event, nodeEl) => {
    var _a;
    if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1) {
      return;
    }
    nodePositionsChanged = false;
    if (nodeDragThreshold.value === 0) {
      startDrag(event, nodeEl);
    }
    lastPos = getPointerPosition(event.sourceEvent);
    containerBounds = ((_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect()) || null;
    mousePosition = getEventPosition(event.sourceEvent, containerBounds);
  };
  const eventDrag = (event, nodeEl) => {
    const pointerPos = getPointerPosition(event.sourceEvent);
    if (!autoPanStarted && dragStarted && autoPanOnNodeDrag.value) {
      autoPanStarted = true;
      autoPan();
    }
    if (!dragStarted) {
      const x = pointerPos.xSnapped - (lastPos.x ?? 0);
      const y = pointerPos.ySnapped - (lastPos.y ?? 0);
      const distance2 = Math.sqrt(x * x + y * y);
      if (distance2 > nodeDragThreshold.value) {
        startDrag(event, nodeEl);
      }
    }
    if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems.length && dragStarted) {
      dragEvent = event.sourceEvent;
      mousePosition = getEventPosition(event.sourceEvent, containerBounds);
      updateNodes(pointerPos);
    }
  };
  const eventEnd = (event) => {
    let isClick = false;
    if (!dragStarted && !dragging.value && !multiSelectionActive.value) {
      const evt = event.sourceEvent;
      const pointerPos = getPointerPosition(evt);
      const x = pointerPos.xSnapped - (lastPos.x ?? 0);
      const y = pointerPos.ySnapped - (lastPos.y ?? 0);
      const distance2 = Math.sqrt(x * x + y * y);
      if (distance2 !== 0 && distance2 <= nodeDragThreshold.value) {
        onClick == null ? void 0 : onClick(evt);
        isClick = true;
      }
    }
    if (dragItems.length && !isClick) {
      if (nodePositionsChanged) {
        updateNodePositions(dragItems, false, false);
        nodePositionsChanged = false;
      }
      const [currentNode, nodes2] = getEventHandlerParams({
        id: id2,
        dragItems,
        findNode
      });
      onStop({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
    }
    dragItems = [];
    dragging.value = false;
    autoPanStarted = false;
    dragStarted = false;
    lastPos = { x: void 0, y: void 0 };
    cancelAnimationFrame(autoPanId);
  };
  watch([() => toValue$1(disabled), el], ([isDisabled, nodeEl], _, onCleanup) => {
    if (nodeEl) {
      const selection2 = select$1(nodeEl);
      if (!isDisabled) {
        dragHandler = drag().on("start", (event) => eventStart(event, nodeEl)).on("drag", (event) => eventDrag(event, nodeEl)).on("end", (event) => eventEnd(event)).filter((event) => {
          const target = event.target;
          const unrefDragHandle = toValue$1(dragHandle);
          return !event.button && (!noDragClassName.value || !hasSelector(target, `.${noDragClassName.value}`, nodeEl) && (!unrefDragHandle || hasSelector(target, unrefDragHandle, nodeEl)));
        });
        selection2.call(dragHandler);
      }
      onCleanup(() => {
        selection2.on(".drag", null);
        if (dragHandler) {
          dragHandler.on("start", null);
          dragHandler.on("drag", null);
          dragHandler.on("end", null);
        }
      });
    }
  });
  return dragging;
}
function createEdgeHooks() {
  return {
    doubleClick: createExtendedEventHook(),
    click: createExtendedEventHook(),
    mouseEnter: createExtendedEventHook(),
    mouseMove: createExtendedEventHook(),
    mouseLeave: createExtendedEventHook(),
    contextMenu: createExtendedEventHook(),
    updateStart: createExtendedEventHook(),
    update: createExtendedEventHook(),
    updateEnd: createExtendedEventHook()
  };
}
function useEdgeHooks(edge, emits) {
  const edgeHooks = createEdgeHooks();
  edgeHooks.doubleClick.on((event) => {
    var _a, _b;
    emits.edgeDoubleClick(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.doubleClick) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.click.on((event) => {
    var _a, _b;
    emits.edgeClick(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseEnter.on((event) => {
    var _a, _b;
    emits.edgeMouseEnter(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.mouseEnter) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseMove.on((event) => {
    var _a, _b;
    emits.edgeMouseMove(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.mouseMove) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.mouseLeave.on((event) => {
    var _a, _b;
    emits.edgeMouseLeave(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.mouseLeave) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.contextMenu.on((event) => {
    var _a, _b;
    emits.edgeContextMenu(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.contextMenu) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.updateStart.on((event) => {
    var _a, _b;
    emits.edgeUpdateStart(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.updateStart) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.update.on((event) => {
    var _a, _b;
    emits.edgeUpdate(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, event);
  });
  edgeHooks.updateEnd.on((event) => {
    var _a, _b;
    emits.edgeUpdateEnd(event);
    (_b = (_a = edge.events) == null ? void 0 : _a.updateEnd) == null ? void 0 : _b.call(_a, event);
  });
  return Object.entries(edgeHooks).reduce(
    (hooks, [key, value]) => {
      hooks.emit[key] = value.trigger;
      hooks.on[key] = value.on;
      return hooks;
    },
    { emit: {}, on: {} }
  );
}
function useGetPointerPosition() {
  const { viewport, snapGrid, snapToGrid, vueFlowRef } = useVueFlow();
  return (event) => {
    var _a;
    const containerBounds = ((_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect()) ?? { left: 0, top: 0 };
    const evt = isUseDragEvent(event) ? event.sourceEvent : event;
    const { x, y } = getEventPosition(evt, containerBounds);
    const pointerPos = pointToRendererPoint({ x, y }, viewport.value);
    const { x: xSnapped, y: ySnapped } = snapToGrid.value ? snapPosition(pointerPos, snapGrid.value) : pointerPos;
    return {
      xSnapped,
      ySnapped,
      ...pointerPos
    };
  };
}
function alwaysValid() {
  return true;
}
function useHandle({
  handleId,
  nodeId: nodeId2,
  type,
  isValidConnection,
  edgeUpdaterType,
  onEdgeUpdate,
  onEdgeUpdateEnd
}) {
  const {
    id: flowId,
    vueFlowRef,
    connectionMode,
    connectionRadius,
    connectOnClick,
    connectionClickStartHandle,
    nodesConnectable,
    autoPanOnConnect,
    autoPanSpeed,
    findNode,
    panBy,
    startConnection,
    updateConnection,
    endConnection,
    emits,
    viewport,
    edges: edges2,
    nodes: nodes2,
    isValidConnection: isValidConnectionProp,
    nodeLookup
  } = useVueFlow();
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  function handlePointerDown(event) {
    var _a;
    const isTarget = toValue$1(type) === "target";
    const isMouseTriggered = isMouseEvent(event);
    const doc = getHostForElement(event.target);
    const clickedHandle = event.currentTarget;
    if (clickedHandle && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
      let onPointerMove = function(event2) {
        connectionPosition = getEventPosition(event2, containerBounds);
        closestHandle = getClosestHandle(
          pointToRendererPoint(connectionPosition, viewport.value, false, [1, 1]),
          connectionRadius.value,
          nodeLookup.value,
          fromHandle
        );
        if (!autoPanStarted) {
          autoPan();
          autoPanStarted = true;
        }
        const result = isValidHandle(
          event2,
          {
            handle: closestHandle,
            connectionMode: connectionMode.value,
            fromNodeId: toValue$1(nodeId2),
            fromHandleId: toValue$1(handleId),
            fromType: isTarget ? "target" : "source",
            isValidConnection: isValidConnectionHandler,
            doc,
            lib: "vue",
            flowId,
            nodeLookup: nodeLookup.value
          },
          edges2.value,
          nodes2.value,
          findNode,
          nodeLookup.value
        );
        handleDomNode = result.handleDomNode;
        connection = result.connection;
        isValid = isConnectionValid(!!closestHandle, result.isValid);
        const newConnection2 = {
          // from stays the same
          ...previousConnection,
          isValid,
          to: result.toHandle && isValid ? rendererPointToPoint({ x: result.toHandle.x, y: result.toHandle.y }, viewport.value) : connectionPosition,
          toHandle: result.toHandle,
          toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
          toNode: result.toHandle ? nodeLookup.value.get(result.toHandle.nodeId) : null
        };
        if (isValid && closestHandle && (previousConnection == null ? void 0 : previousConnection.toHandle) && newConnection2.toHandle && previousConnection.toHandle.type === newConnection2.toHandle.type && previousConnection.toHandle.nodeId === newConnection2.toHandle.nodeId && previousConnection.toHandle.id === newConnection2.toHandle.id && previousConnection.to.x === newConnection2.to.x && previousConnection.to.y === newConnection2.to.y) {
          return;
        }
        const connectingHandle = closestHandle ?? result.toHandle;
        updateConnection(
          connectingHandle && isValid ? rendererPointToPoint(
            {
              x: connectingHandle.x,
              y: connectingHandle.y
            },
            viewport.value
          ) : connectionPosition,
          connectingHandle,
          getConnectionStatus(!!connectingHandle, isValid)
        );
        previousConnection = newConnection2;
        if (!closestHandle && !isValid && !handleDomNode) {
          return resetRecentHandle(prevActiveHandle);
        }
        if (connection && connection.source !== connection.target && handleDomNode) {
          resetRecentHandle(prevActiveHandle);
          prevActiveHandle = handleDomNode;
          handleDomNode.classList.add("connecting", "vue-flow__handle-connecting");
          handleDomNode.classList.toggle("valid", !!isValid);
          handleDomNode.classList.toggle("vue-flow__handle-valid", !!isValid);
        }
      }, onPointerUp = function(event2) {
        if ("touches" in event2 && event2.touches.length > 0) {
          return;
        }
        if ((closestHandle || handleDomNode) && connection && isValid) {
          if (!onEdgeUpdate) {
            emits.connect(connection);
          } else {
            onEdgeUpdate(event2, connection);
          }
        }
        emits.connectEnd(event2);
        if (edgeUpdaterType) {
          onEdgeUpdateEnd == null ? void 0 : onEdgeUpdateEnd(event2);
        }
        resetRecentHandle(prevActiveHandle);
        cancelAnimationFrame(autoPanId);
        endConnection(event2);
        autoPanStarted = false;
        isValid = false;
        connection = null;
        handleDomNode = null;
        doc.removeEventListener("mousemove", onPointerMove);
        doc.removeEventListener("mouseup", onPointerUp);
        doc.removeEventListener("touchmove", onPointerMove);
        doc.removeEventListener("touchend", onPointerUp);
      };
      const node = findNode(toValue$1(nodeId2));
      let isValidConnectionHandler = toValue$1(isValidConnection) || isValidConnectionProp.value || alwaysValid;
      if (!isValidConnectionHandler && node) {
        isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid;
      }
      let closestHandle;
      let autoPanId = 0;
      const { x, y } = getEventPosition(event);
      const handleType = getHandleType(toValue$1(edgeUpdaterType), clickedHandle);
      const containerBounds = (_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect();
      if (!containerBounds || !handleType) {
        return;
      }
      const fromHandleInternal = getHandle(toValue$1(nodeId2), handleType, toValue$1(handleId), nodeLookup.value, connectionMode.value);
      if (!fromHandleInternal) {
        return;
      }
      let prevActiveHandle;
      let connectionPosition = getEventPosition(event, containerBounds);
      let autoPanStarted = false;
      const autoPan = () => {
        if (!autoPanOnConnect.value) {
          return;
        }
        const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds, autoPanSpeed.value);
        panBy({ x: xMovement, y: yMovement });
        autoPanId = requestAnimationFrame(autoPan);
      };
      const fromHandle = {
        ...fromHandleInternal,
        nodeId: toValue$1(nodeId2),
        type: handleType,
        position: fromHandleInternal.position
      };
      const fromNodeInternal = nodeLookup.value.get(toValue$1(nodeId2));
      const from = getHandlePosition(fromNodeInternal, fromHandle, Position.Left, true);
      const newConnection = {
        inProgress: true,
        isValid: null,
        from,
        fromHandle,
        fromPosition: fromHandle.position,
        fromNode: fromNodeInternal,
        to: connectionPosition,
        toHandle: null,
        toPosition: oppositePosition[fromHandle.position],
        toNode: null
      };
      startConnection(
        {
          nodeId: toValue$1(nodeId2),
          id: toValue$1(handleId),
          type: handleType,
          position: (clickedHandle == null ? void 0 : clickedHandle.getAttribute("data-handlepos")) || Position.Top,
          ...connectionPosition
        },
        {
          x: x - containerBounds.left,
          y: y - containerBounds.top
        }
      );
      emits.connectStart({ event, nodeId: toValue$1(nodeId2), handleId: toValue$1(handleId), handleType });
      let previousConnection = newConnection;
      doc.addEventListener("mousemove", onPointerMove);
      doc.addEventListener("mouseup", onPointerUp);
      doc.addEventListener("touchmove", onPointerMove);
      doc.addEventListener("touchend", onPointerUp);
    }
  }
  function handleClick(event) {
    var _a, _b;
    if (!connectOnClick.value) {
      return;
    }
    const isTarget = toValue$1(type) === "target";
    if (!connectionClickStartHandle.value) {
      emits.clickConnectStart({ event, nodeId: toValue$1(nodeId2), handleId: toValue$1(handleId) });
      startConnection(
        {
          nodeId: toValue$1(nodeId2),
          type: toValue$1(type),
          id: toValue$1(handleId),
          position: Position.Top,
          ...getEventPosition(event)
        },
        void 0,
        true
      );
      return;
    }
    let isValidConnectionHandler = toValue$1(isValidConnection) || isValidConnectionProp.value || alwaysValid;
    const node = findNode(toValue$1(nodeId2));
    if (!isValidConnectionHandler && node) {
      isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid;
    }
    if (node && (typeof node.connectable === "undefined" ? nodesConnectable.value : node.connectable) === false) {
      return;
    }
    const doc = getHostForElement(event.target);
    const result = isValidHandle(
      event,
      {
        handle: {
          nodeId: toValue$1(nodeId2),
          id: toValue$1(handleId),
          type: toValue$1(type),
          position: Position.Top,
          ...getEventPosition(event)
        },
        connectionMode: connectionMode.value,
        fromNodeId: connectionClickStartHandle.value.nodeId,
        fromHandleId: connectionClickStartHandle.value.id ?? null,
        fromType: connectionClickStartHandle.value.type,
        isValidConnection: isValidConnectionHandler,
        doc,
        lib: "vue",
        flowId,
        nodeLookup: nodeLookup.value
      },
      edges2.value,
      nodes2.value,
      findNode,
      nodeLookup.value
    );
    const isOwnHandle = ((_a = result.connection) == null ? void 0 : _a.source) === ((_b = result.connection) == null ? void 0 : _b.target);
    if (result.isValid && result.connection && !isOwnHandle) {
      emits.connect(result.connection);
    }
    emits.clickConnectEnd(event);
    endConnection(event, true);
  }
  return {
    handlePointerDown,
    handleClick
  };
}
function useNodeId() {
  return inject(NodeId, "");
}
function useNode(id2) {
  const nodeId2 = id2 ?? useNodeId() ?? "";
  const nodeEl = inject(NodeRef, ref(null));
  const { findNode, edges: edges2, emits } = useVueFlow();
  const node = findNode(nodeId2);
  if (!node) {
    emits.error(new VueFlowError(ErrorCode.NODE_NOT_FOUND, nodeId2));
  }
  return {
    id: nodeId2,
    nodeEl,
    node,
    parentNode: computed(() => findNode(node.parentNode)),
    connectedEdges: computed(() => getConnectedEdges([node], edges2.value))
  };
}
function createNodeHooks() {
  return {
    doubleClick: createExtendedEventHook(),
    click: createExtendedEventHook(),
    mouseEnter: createExtendedEventHook(),
    mouseMove: createExtendedEventHook(),
    mouseLeave: createExtendedEventHook(),
    contextMenu: createExtendedEventHook(),
    dragStart: createExtendedEventHook(),
    drag: createExtendedEventHook(),
    dragStop: createExtendedEventHook()
  };
}
function useNodeHooks(node, emits) {
  const nodeHooks = createNodeHooks();
  nodeHooks.doubleClick.on((event) => {
    var _a, _b;
    emits.nodeDoubleClick(event);
    (_b = (_a = node.events) == null ? void 0 : _a.doubleClick) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.click.on((event) => {
    var _a, _b;
    emits.nodeClick(event);
    (_b = (_a = node.events) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseEnter.on((event) => {
    var _a, _b;
    emits.nodeMouseEnter(event);
    (_b = (_a = node.events) == null ? void 0 : _a.mouseEnter) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseMove.on((event) => {
    var _a, _b;
    emits.nodeMouseMove(event);
    (_b = (_a = node.events) == null ? void 0 : _a.mouseMove) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.mouseLeave.on((event) => {
    var _a, _b;
    emits.nodeMouseLeave(event);
    (_b = (_a = node.events) == null ? void 0 : _a.mouseLeave) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.contextMenu.on((event) => {
    var _a, _b;
    emits.nodeContextMenu(event);
    (_b = (_a = node.events) == null ? void 0 : _a.contextMenu) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.dragStart.on((event) => {
    var _a, _b;
    emits.nodeDragStart(event);
    (_b = (_a = node.events) == null ? void 0 : _a.dragStart) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.drag.on((event) => {
    var _a, _b;
    emits.nodeDrag(event);
    (_b = (_a = node.events) == null ? void 0 : _a.drag) == null ? void 0 : _b.call(_a, event);
  });
  nodeHooks.dragStop.on((event) => {
    var _a, _b;
    emits.nodeDragStop(event);
    (_b = (_a = node.events) == null ? void 0 : _a.dragStop) == null ? void 0 : _b.call(_a, event);
  });
  return Object.entries(nodeHooks).reduce(
    (hooks, [key, value]) => {
      hooks.emit[key] = value.trigger;
      hooks.on[key] = value.on;
      return hooks;
    },
    { emit: {}, on: {} }
  );
}
function useUpdateNodePositions() {
  const { getSelectedNodes, nodeExtent, updateNodePositions, findNode, snapGrid, snapToGrid, nodesDraggable, emits } = useVueFlow();
  return (positionDiff, isShiftPressed = false) => {
    const xVelo = snapToGrid.value ? snapGrid.value[0] : 5;
    const yVelo = snapToGrid.value ? snapGrid.value[1] : 5;
    const factor = isShiftPressed ? 4 : 1;
    const positionDiffX = positionDiff.x * xVelo * factor;
    const positionDiffY = positionDiff.y * yVelo * factor;
    const nodeUpdates = [];
    for (const node of getSelectedNodes.value) {
      if (node.draggable || nodesDraggable && typeof node.draggable === "undefined") {
        const nextPosition = { x: node.computedPosition.x + positionDiffX, y: node.computedPosition.y + positionDiffY };
        const { position } = calcNextPosition(
          node,
          nextPosition,
          emits.error,
          nodeExtent.value,
          node.parentNode ? findNode(node.parentNode) : void 0
        );
        nodeUpdates.push({
          id: node.id,
          position,
          from: node.position,
          distance: { x: positionDiff.x, y: positionDiff.y },
          dimensions: node.dimensions
        });
      }
    }
    updateNodePositions(nodeUpdates, true, false);
  };
}
const DEFAULT_PADDING = 0.1;
const defaultEase = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
function noop$4() {
  warn("Viewport not initialized yet.");
  return Promise.resolve(false);
}
const initialViewportHelper = {
  zoomIn: noop$4,
  zoomOut: noop$4,
  zoomTo: noop$4,
  fitView: noop$4,
  setCenter: noop$4,
  fitBounds: noop$4,
  project: (position) => position,
  screenToFlowCoordinate: (position) => position,
  flowToScreenCoordinate: (position) => position,
  setViewport: noop$4,
  setTransform: noop$4,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: false
};
function useViewportHelper(state) {
  function zoom2(scale, transitionOptions) {
    return new Promise((resolve) => {
      if (state.d3Selection && state.d3Zoom) {
        state.d3Zoom.interpolate((transitionOptions == null ? void 0 : transitionOptions.interpolate) === "linear" ? interpolate$1 : interpolateZoom$1).scaleBy(
          getD3Transition(state.d3Selection, transitionOptions == null ? void 0 : transitionOptions.duration, transitionOptions == null ? void 0 : transitionOptions.ease, () => {
            resolve(true);
          }),
          scale
        );
      } else {
        resolve(false);
      }
    });
  }
  function transformViewport(x, y, zoom22, transitionOptions) {
    return new Promise((resolve) => {
      var _a;
      const { x: clampedX, y: clampedY } = clampPosition({ x: -x, y: -y }, state.translateExtent);
      const nextTransform = identity$2.translate(-clampedX, -clampedY).scale(zoom22);
      if (state.d3Selection && state.d3Zoom) {
        (_a = state.d3Zoom) == null ? void 0 : _a.interpolate((transitionOptions == null ? void 0 : transitionOptions.interpolate) === "linear" ? interpolate$1 : interpolateZoom$1).transform(
          getD3Transition(state.d3Selection, transitionOptions == null ? void 0 : transitionOptions.duration, transitionOptions == null ? void 0 : transitionOptions.ease, () => {
            resolve(true);
          }),
          nextTransform
        );
      } else {
        resolve(false);
      }
    });
  }
  return computed(() => {
    const isInitialized = state.d3Zoom && state.d3Selection && state.dimensions.width && state.dimensions.height;
    if (!isInitialized) {
      return initialViewportHelper;
    }
    return {
      viewportInitialized: true,
      // todo: allow passing scale as option
      zoomIn: (options) => {
        return zoom2(1.2, options);
      },
      zoomOut: (options) => {
        return zoom2(1 / 1.2, options);
      },
      zoomTo: (zoomLevel, options) => {
        return new Promise((resolve) => {
          if (state.d3Selection && state.d3Zoom) {
            state.d3Zoom.interpolate((options == null ? void 0 : options.interpolate) === "linear" ? interpolate$1 : interpolateZoom$1).scaleTo(
              getD3Transition(state.d3Selection, options == null ? void 0 : options.duration, options == null ? void 0 : options.ease, () => {
                resolve(true);
              }),
              zoomLevel
            );
          } else {
            resolve(false);
          }
        });
      },
      setViewport: (transform, options) => {
        return transformViewport(transform.x, transform.y, transform.zoom, options);
      },
      setTransform: (transform, options) => {
        return transformViewport(transform.x, transform.y, transform.zoom, options);
      },
      getViewport: () => ({
        x: state.viewport.x,
        y: state.viewport.y,
        zoom: state.viewport.zoom
      }),
      getTransform: () => {
        return {
          x: state.viewport.x,
          y: state.viewport.y,
          zoom: state.viewport.zoom
        };
      },
      fitView: (options = {
        padding: DEFAULT_PADDING,
        includeHiddenNodes: false,
        duration: 0
      }) => {
        var _a, _b;
        const nodesToFit = [];
        for (const node of state.nodes) {
          const isVisible = node.dimensions.width && node.dimensions.height && ((options == null ? void 0 : options.includeHiddenNodes) || !node.hidden);
          if (isVisible) {
            if (!((_a = options.nodes) == null ? void 0 : _a.length) || ((_b = options.nodes) == null ? void 0 : _b.length) && options.nodes.includes(node.id)) {
              nodesToFit.push(node);
            }
          }
        }
        if (!nodesToFit.length) {
          return Promise.resolve(false);
        }
        const bounds = getRectOfNodes(nodesToFit);
        const { x, y, zoom: zoom22 } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          options.minZoom ?? state.minZoom,
          options.maxZoom ?? state.maxZoom,
          options.padding ?? DEFAULT_PADDING
        );
        return transformViewport(x, y, zoom22, options);
      },
      setCenter: (x, y, options) => {
        const nextZoom = typeof (options == null ? void 0 : options.zoom) !== "undefined" ? options.zoom : state.maxZoom;
        const centerX = state.dimensions.width / 2 - x * nextZoom;
        const centerY = state.dimensions.height / 2 - y * nextZoom;
        return transformViewport(centerX, centerY, nextZoom, options);
      },
      fitBounds: (bounds, options = { padding: DEFAULT_PADDING }) => {
        const { x, y, zoom: zoom22 } = getTransformForBounds(
          bounds,
          state.dimensions.width,
          state.dimensions.height,
          state.minZoom,
          state.maxZoom,
          options.padding ?? DEFAULT_PADDING
        );
        return transformViewport(x, y, zoom22, options);
      },
      project: (position) => pointToRendererPoint(position, state.viewport, state.snapToGrid, state.snapGrid),
      screenToFlowCoordinate: (position) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect();
          const correctedPosition = {
            x: position.x - domX,
            y: position.y - domY
          };
          return pointToRendererPoint(correctedPosition, state.viewport, state.snapToGrid, state.snapGrid);
        }
        return { x: 0, y: 0 };
      },
      flowToScreenCoordinate: (position) => {
        if (state.vueFlowRef) {
          const { x: domX, y: domY } = state.vueFlowRef.getBoundingClientRect();
          const correctedPosition = {
            x: position.x + domX,
            y: position.y + domY
          };
          return rendererPointToPoint(correctedPosition, state.viewport);
        }
        return { x: 0, y: 0 };
      }
    };
  });
}
function getD3Transition(selection2, duration = 0, ease = defaultEase, onEnd = () => {
}) {
  const hasDuration = typeof duration === "number" && duration > 0;
  if (!hasDuration) {
    onEnd();
  }
  return hasDuration ? selection2.transition().duration(duration).ease(ease).on("end", onEnd) : selection2;
}
function useWatchProps(models, props, store) {
  const scope = effectScope(true);
  scope.run(() => {
    const watchModelValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!(store.nodes.value.length || store.edges.value.length);
        pauseModel = watchPausable([models.modelValue, () => {
          var _a, _b;
          return (_b = (_a = models.modelValue) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([elements]) => {
          if (elements && Array.isArray(elements)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setElements(elements);
            if (!pauseStore && !immediateStore && elements.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.nodes, store.edges, () => store.edges.value.length, () => store.nodes.value.length],
          ([nodes2, edges2]) => {
            var _a;
            if (((_a = models.modelValue) == null ? void 0 : _a.value) && Array.isArray(models.modelValue.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.modelValue.value = [...nodes2, ...edges2];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchNodesValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!store.nodes.value.length;
        pauseModel = watchPausable([models.nodes, () => {
          var _a, _b;
          return (_b = (_a = models.nodes) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([nodes2]) => {
          if (nodes2 && Array.isArray(nodes2)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setNodes(nodes2);
            if (!pauseStore && !immediateStore && nodes2.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.nodes, () => store.nodes.value.length],
          ([nodes2]) => {
            var _a;
            if (((_a = models.nodes) == null ? void 0 : _a.value) && Array.isArray(models.nodes.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.nodes.value = [...nodes2];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchEdgesValue = () => {
      scope.run(() => {
        let pauseModel;
        let pauseStore;
        let immediateStore = !!store.edges.value.length;
        pauseModel = watchPausable([models.edges, () => {
          var _a, _b;
          return (_b = (_a = models.edges) == null ? void 0 : _a.value) == null ? void 0 : _b.length;
        }], ([edges2]) => {
          if (edges2 && Array.isArray(edges2)) {
            pauseStore == null ? void 0 : pauseStore.pause();
            store.setEdges(edges2);
            if (!pauseStore && !immediateStore && edges2.length) {
              immediateStore = true;
            } else {
              pauseStore == null ? void 0 : pauseStore.resume();
            }
          }
        });
        pauseStore = watchPausable(
          [store.edges, () => store.edges.value.length],
          ([edges2]) => {
            var _a;
            if (((_a = models.edges) == null ? void 0 : _a.value) && Array.isArray(models.edges.value)) {
              pauseModel == null ? void 0 : pauseModel.pause();
              models.edges.value = [...edges2];
              nextTick(() => {
                pauseModel == null ? void 0 : pauseModel.resume();
              });
            }
          },
          { immediate: immediateStore }
        );
        onScopeDispose(() => {
          pauseModel == null ? void 0 : pauseModel.stop();
          pauseStore == null ? void 0 : pauseStore.stop();
        });
      });
    };
    const watchMaxZoom = () => {
      scope.run(() => {
        watch(
          () => props.maxZoom,
          () => {
            if (props.maxZoom && isDef(props.maxZoom)) {
              store.setMaxZoom(props.maxZoom);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchMinZoom = () => {
      scope.run(() => {
        watch(
          () => props.minZoom,
          () => {
            if (props.minZoom && isDef(props.minZoom)) {
              store.setMinZoom(props.minZoom);
            }
          },
          { immediate: true }
        );
      });
    };
    const watchTranslateExtent = () => {
      scope.run(() => {
        watch(
          () => props.translateExtent,
          () => {
            if (props.translateExtent && isDef(props.translateExtent)) {
              store.setTranslateExtent(props.translateExtent);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchNodeExtent = () => {
      scope.run(() => {
        watch(
          () => props.nodeExtent,
          () => {
            if (props.nodeExtent && isDef(props.nodeExtent)) {
              store.setNodeExtent(props.nodeExtent);
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchApplyDefault = () => {
      scope.run(() => {
        watch(
          () => props.applyDefault,
          () => {
            if (isDef(props.applyDefault)) {
              store.applyDefault.value = props.applyDefault;
            }
          },
          {
            immediate: true
          }
        );
      });
    };
    const watchAutoConnect = () => {
      scope.run(() => {
        const autoConnector = async (params) => {
          let connection = params;
          if (typeof props.autoConnect === "function") {
            connection = await props.autoConnect(params);
          }
          if (connection !== false) {
            store.addEdges([connection]);
          }
        };
        watch(
          () => props.autoConnect,
          () => {
            if (isDef(props.autoConnect)) {
              store.autoConnect.value = props.autoConnect;
            }
          },
          { immediate: true }
        );
        watch(
          store.autoConnect,
          (autoConnectEnabled, _, onCleanup) => {
            if (autoConnectEnabled) {
              store.onConnect(autoConnector);
            } else {
              store.hooks.value.connect.off(autoConnector);
            }
            onCleanup(() => {
              store.hooks.value.connect.off(autoConnector);
            });
          },
          { immediate: true }
        );
      });
    };
    const watchRest = () => {
      const skip = [
        "id",
        "modelValue",
        "translateExtent",
        "nodeExtent",
        "edges",
        "nodes",
        "maxZoom",
        "minZoom",
        "applyDefault",
        "autoConnect"
      ];
      for (const key of Object.keys(props)) {
        const propKey = key;
        if (!skip.includes(propKey)) {
          const propValue = toRef(() => props[propKey]);
          const storeRef = store[propKey];
          if (isRef(storeRef)) {
            scope.run(() => {
              watch(
                propValue,
                (nextValue) => {
                  if (isDef(nextValue)) {
                    storeRef.value = nextValue;
                  }
                },
                { immediate: true }
              );
            });
          }
        }
      }
    };
    const runAll = () => {
      watchModelValue();
      watchNodesValue();
      watchEdgesValue();
      watchMinZoom();
      watchMaxZoom();
      watchTranslateExtent();
      watchNodeExtent();
      watchApplyDefault();
      watchAutoConnect();
      watchRest();
    };
    runAll();
  });
  return () => scope.stop();
}
function createHooks() {
  return {
    edgesChange: createExtendedEventHook(),
    nodesChange: createExtendedEventHook(),
    nodeDoubleClick: createExtendedEventHook(),
    nodeClick: createExtendedEventHook(),
    nodeMouseEnter: createExtendedEventHook(),
    nodeMouseMove: createExtendedEventHook(),
    nodeMouseLeave: createExtendedEventHook(),
    nodeContextMenu: createExtendedEventHook(),
    nodeDragStart: createExtendedEventHook(),
    nodeDrag: createExtendedEventHook(),
    nodeDragStop: createExtendedEventHook(),
    nodesInitialized: createExtendedEventHook(),
    miniMapNodeClick: createExtendedEventHook(),
    miniMapNodeDoubleClick: createExtendedEventHook(),
    miniMapNodeMouseEnter: createExtendedEventHook(),
    miniMapNodeMouseMove: createExtendedEventHook(),
    miniMapNodeMouseLeave: createExtendedEventHook(),
    connect: createExtendedEventHook(),
    connectStart: createExtendedEventHook(),
    connectEnd: createExtendedEventHook(),
    clickConnectStart: createExtendedEventHook(),
    clickConnectEnd: createExtendedEventHook(),
    paneReady: createExtendedEventHook(),
    init: createExtendedEventHook(),
    move: createExtendedEventHook(),
    moveStart: createExtendedEventHook(),
    moveEnd: createExtendedEventHook(),
    selectionDragStart: createExtendedEventHook(),
    selectionDrag: createExtendedEventHook(),
    selectionDragStop: createExtendedEventHook(),
    selectionContextMenu: createExtendedEventHook(),
    selectionStart: createExtendedEventHook(),
    selectionEnd: createExtendedEventHook(),
    viewportChangeStart: createExtendedEventHook(),
    viewportChange: createExtendedEventHook(),
    viewportChangeEnd: createExtendedEventHook(),
    paneScroll: createExtendedEventHook(),
    paneClick: createExtendedEventHook(),
    paneContextMenu: createExtendedEventHook(),
    paneMouseEnter: createExtendedEventHook(),
    paneMouseMove: createExtendedEventHook(),
    paneMouseLeave: createExtendedEventHook(),
    edgeContextMenu: createExtendedEventHook(),
    edgeMouseEnter: createExtendedEventHook(),
    edgeMouseMove: createExtendedEventHook(),
    edgeMouseLeave: createExtendedEventHook(),
    edgeDoubleClick: createExtendedEventHook(),
    edgeClick: createExtendedEventHook(),
    edgeUpdateStart: createExtendedEventHook(),
    edgeUpdate: createExtendedEventHook(),
    edgeUpdateEnd: createExtendedEventHook(),
    updateNodeInternals: createExtendedEventHook(),
    error: createExtendedEventHook((err) => warn(err.message))
  };
}
function useHooks(emit, hooks) {
  const inst = getCurrentInstance();
  onBeforeMount(() => {
    for (const [key, value] of Object.entries(hooks.value)) {
      const listener = (data) => {
        emit(key, data);
      };
      value.setEmitter(listener);
      tryOnScopeDispose(value.removeEmitter);
      value.setHasEmitListeners(() => hasVNodeListener(key));
      tryOnScopeDispose(value.removeHasEmitListeners);
    }
  });
  function hasVNodeListener(event) {
    var _a;
    const key = toHandlerKey(event);
    const h2 = (_a = inst == null ? void 0 : inst.vnode.props) == null ? void 0 : _a[key];
    return !!h2;
  }
}
function toHandlerKey(event) {
  const [head, ...rest] = event.split(":");
  const camel = head.replace(/(?:^|-)(\w)/g, (_, c2) => c2.toUpperCase());
  return `on${camel}${rest.length ? `:${rest.join(":")}` : ""}`;
}
function useState() {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    connectionLookup: /* @__PURE__ */ new Map(),
    nodeTypes: {},
    edgeTypes: {},
    initialized: false,
    dimensions: {
      width: 0,
      height: 0
    },
    viewport: { x: 0, y: 0, zoom: 1 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    selectionMode: SelectionMode.Full,
    paneDragging: false,
    preventScrolling: true,
    zoomOnScroll: true,
    zoomOnPinch: true,
    zoomOnDoubleClick: true,
    panOnScroll: false,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: PanOnScrollMode.Free,
    paneClickDistance: 0,
    panOnDrag: true,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: false,
    defaultViewport: { x: 0, y: 0, zoom: 1 },
    nodesSelectionActive: false,
    userSelectionActive: false,
    userSelectionRect: null,
    defaultMarkerColor: "#b1b1b7",
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: ConnectionLineType.Bezier,
      style: {}
    },
    connectionMode: ConnectionMode.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: Number.NaN, y: Number.NaN },
    connectionRadius: 20,
    connectOnClick: true,
    connectionStatus: null,
    isValidConnection: null,
    snapGrid: [15, 15],
    snapToGrid: false,
    edgesUpdatable: false,
    edgesFocusable: true,
    nodesFocusable: true,
    nodesConnectable: true,
    nodesDraggable: true,
    nodeDragThreshold: 1,
    elementsSelectable: true,
    selectNodesOnDrag: true,
    multiSelectionActive: false,
    selectionKeyCode: "Shift",
    multiSelectionKeyCode: isMacOs() ? "Meta" : "Control",
    zoomActivationKeyCode: isMacOs() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: createHooks(),
    applyDefault: true,
    autoConnect: false,
    fitViewOnInit: false,
    fitViewOnInitDone: false,
    noDragClassName: "nodrag",
    noWheelClassName: "nowheel",
    noPanClassName: "nopan",
    defaultEdgeOptions: void 0,
    elevateEdgesOnSelect: false,
    elevateNodesOnSelect: true,
    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,
    autoPanSpeed: 15,
    disableKeyboardA11y: false,
    ariaLiveMessage: ""
  };
}
const storeOptionsToSkip = [
  "id",
  "vueFlowRef",
  "viewportRef",
  "initialized",
  "modelValue",
  "nodes",
  "edges",
  "maxZoom",
  "minZoom",
  "translateExtent",
  "hooks",
  "defaultEdgeOptions"
];
function useActions(state, nodeLookup, edgeLookup) {
  const viewportHelper = useViewportHelper(state);
  const updateNodeInternals = (ids) => {
    const updateIds = ids ?? [];
    state.hooks.updateNodeInternals.trigger(updateIds);
  };
  const getIncomers$1 = (nodeOrId) => {
    return getIncomers(nodeOrId, state.nodes, state.edges);
  };
  const getOutgoers$1 = (nodeOrId) => {
    return getOutgoers(nodeOrId, state.nodes, state.edges);
  };
  const getConnectedEdges$1 = (nodesOrId) => {
    return getConnectedEdges(nodesOrId, state.edges);
  };
  const getHandleConnections = ({ id: id2, type, nodeId: nodeId2 }) => {
    var _a;
    const handleSuffix = id2 ? `-${type}-${id2}` : `-${type}`;
    return Array.from(((_a = state.connectionLookup.get(`${nodeId2}${handleSuffix}`)) == null ? void 0 : _a.values()) ?? []);
  };
  const findNode = (id2) => {
    if (!id2) {
      return;
    }
    return nodeLookup.value.get(id2);
  };
  const findEdge = (id2) => {
    if (!id2) {
      return;
    }
    return edgeLookup.value.get(id2);
  };
  const updateNodePositions = (dragItems, changed, dragging) => {
    var _a, _b;
    const changes = [];
    for (const node of dragItems) {
      const change = {
        id: node.id,
        type: "position",
        dragging,
        from: node.from
      };
      if (changed) {
        change.position = node.position;
        if (node.parentNode) {
          const parentNode = findNode(node.parentNode);
          change.position = {
            x: change.position.x - (((_a = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _a.x) ?? 0),
            y: change.position.y - (((_b = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _b.y) ?? 0)
          };
        }
      }
      changes.push(change);
    }
    if (changes == null ? void 0 : changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const updateNodeDimensions = (updates) => {
    if (!state.vueFlowRef) {
      return;
    }
    const viewportNode = state.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!viewportNode) {
      return;
    }
    const style2 = window.getComputedStyle(viewportNode);
    const { m22: zoom2 } = new window.DOMMatrixReadOnly(style2.transform);
    const changes = [];
    for (const element of updates) {
      const update = element;
      const node = findNode(update.id);
      if (node) {
        const dimensions = getDimensions(update.nodeElement);
        const doUpdate = !!(dimensions.width && dimensions.height && (node.dimensions.width !== dimensions.width || node.dimensions.height !== dimensions.height || update.forceUpdate));
        if (doUpdate) {
          const nodeBounds = update.nodeElement.getBoundingClientRect();
          node.dimensions = dimensions;
          node.handleBounds.source = getHandleBounds("source", update.nodeElement, nodeBounds, zoom2, node.id);
          node.handleBounds.target = getHandleBounds("target", update.nodeElement, nodeBounds, zoom2, node.id);
          changes.push({
            id: node.id,
            type: "dimensions",
            dimensions
          });
        }
      }
    }
    if (!state.fitViewOnInitDone && state.fitViewOnInit) {
      viewportHelper.value.fitView().then(() => {
        state.fitViewOnInitDone = true;
      });
    }
    if (changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const elementSelectionHandler = (elements, selected) => {
    const nodeIds = /* @__PURE__ */ new Set();
    const edgeIds = /* @__PURE__ */ new Set();
    for (const element of elements) {
      if (isNode(element)) {
        nodeIds.add(element.id);
      } else if (isEdge(element)) {
        edgeIds.add(element.id);
      }
    }
    const changedNodes = getSelectionChanges(nodeLookup.value, nodeIds, true);
    const changedEdges = getSelectionChanges(edgeLookup.value, edgeIds);
    if (state.multiSelectionActive) {
      for (const nodeId2 of nodeIds) {
        changedNodes.push(createSelectionChange(nodeId2, selected));
      }
      for (const edgeId of edgeIds) {
        changedEdges.push(createSelectionChange(edgeId, selected));
      }
    }
    if (changedNodes.length) {
      state.hooks.nodesChange.trigger(changedNodes);
    }
    if (changedEdges.length) {
      state.hooks.edgesChange.trigger(changedEdges);
    }
  };
  const addSelectedNodes = (nodes2) => {
    if (state.multiSelectionActive) {
      const nodeChanges = nodes2.map((node) => createSelectionChange(node.id, true));
      state.hooks.nodesChange.trigger(nodeChanges);
      return;
    }
    state.hooks.nodesChange.trigger(getSelectionChanges(nodeLookup.value, new Set(nodes2.map((n) => n.id)), true));
    state.hooks.edgesChange.trigger(getSelectionChanges(edgeLookup.value));
  };
  const addSelectedEdges = (edges2) => {
    if (state.multiSelectionActive) {
      const changedEdges = edges2.map((edge) => createSelectionChange(edge.id, true));
      state.hooks.edgesChange.trigger(changedEdges);
      return;
    }
    state.hooks.edgesChange.trigger(getSelectionChanges(edgeLookup.value, new Set(edges2.map((e) => e.id))));
    state.hooks.nodesChange.trigger(getSelectionChanges(nodeLookup.value, /* @__PURE__ */ new Set(), true));
  };
  const addSelectedElements = (elements) => {
    elementSelectionHandler(elements, true);
  };
  const removeSelectedNodes = (nodes2) => {
    const nodesToUnselect = nodes2 || state.nodes;
    const nodeChanges = nodesToUnselect.map((n) => {
      n.selected = false;
      return createSelectionChange(n.id, false);
    });
    state.hooks.nodesChange.trigger(nodeChanges);
  };
  const removeSelectedEdges = (edges2) => {
    const edgesToUnselect = edges2 || state.edges;
    const edgeChanges = edgesToUnselect.map((e) => {
      e.selected = false;
      return createSelectionChange(e.id, false);
    });
    state.hooks.edgesChange.trigger(edgeChanges);
  };
  const removeSelectedElements = (elements) => {
    if (!elements || !elements.length) {
      return elementSelectionHandler([], false);
    }
    const changes = elements.reduce(
      (changes2, curr) => {
        const selectionChange = createSelectionChange(curr.id, false);
        if (isNode(curr)) {
          changes2.nodes.push(selectionChange);
        } else {
          changes2.edges.push(selectionChange);
        }
        return changes2;
      },
      { nodes: [], edges: [] }
    );
    if (changes.nodes.length) {
      state.hooks.nodesChange.trigger(changes.nodes);
    }
    if (changes.edges.length) {
      state.hooks.edgesChange.trigger(changes.edges);
    }
  };
  const setMinZoom = (minZoom) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.scaleExtent([minZoom, state.maxZoom]);
    state.minZoom = minZoom;
  };
  const setMaxZoom = (maxZoom) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.scaleExtent([state.minZoom, maxZoom]);
    state.maxZoom = maxZoom;
  };
  const setTranslateExtent = (translateExtent) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.translateExtent(translateExtent);
    state.translateExtent = translateExtent;
  };
  const setNodeExtent = (nodeExtent) => {
    state.nodeExtent = nodeExtent;
    updateNodeInternals();
  };
  const setPaneClickDistance = (clickDistance) => {
    var _a;
    (_a = state.d3Zoom) == null ? void 0 : _a.clickDistance(clickDistance);
  };
  const setInteractive = (isInteractive) => {
    state.nodesDraggable = isInteractive;
    state.nodesConnectable = isInteractive;
    state.elementsSelectable = isInteractive;
  };
  const setNodes = (nodes2) => {
    const nextNodes = nodes2 instanceof Function ? nodes2(state.nodes) : nodes2;
    if (!state.initialized && !nextNodes.length) {
      return;
    }
    state.nodes = createGraphNodes(nextNodes, findNode, state.hooks.error.trigger);
  };
  const setEdges = (edges2) => {
    const nextEdges = edges2 instanceof Function ? edges2(state.edges) : edges2;
    if (!state.initialized && !nextEdges.length) {
      return;
    }
    const validEdges = createGraphEdges(
      nextEdges,
      state.isValidConnection,
      findNode,
      findEdge,
      state.hooks.error.trigger,
      state.defaultEdgeOptions,
      state.nodes,
      state.edges
    );
    updateConnectionLookup(state.connectionLookup, edgeLookup.value, validEdges);
    state.edges = validEdges;
  };
  const setElements = (elements) => {
    const nextElements = elements instanceof Function ? elements([...state.nodes, ...state.edges]) : elements;
    if (!state.initialized && !nextElements.length) {
      return;
    }
    setNodes(nextElements.filter(isNode));
    setEdges(nextElements.filter(isEdge));
  };
  const addNodes2 = (nodes2) => {
    let nextNodes = nodes2 instanceof Function ? nodes2(state.nodes) : nodes2;
    nextNodes = Array.isArray(nextNodes) ? nextNodes : [nextNodes];
    const graphNodes = createGraphNodes(nextNodes, findNode, state.hooks.error.trigger);
    const changes = [];
    for (const node of graphNodes) {
      changes.push(createAdditionChange(node));
    }
    if (changes.length) {
      state.hooks.nodesChange.trigger(changes);
    }
  };
  const addEdges2 = (params) => {
    let nextEdges = params instanceof Function ? params(state.edges) : params;
    nextEdges = Array.isArray(nextEdges) ? nextEdges : [nextEdges];
    const validEdges = createGraphEdges(
      nextEdges,
      state.isValidConnection,
      findNode,
      findEdge,
      state.hooks.error.trigger,
      state.defaultEdgeOptions,
      state.nodes,
      state.edges
    );
    const changes = [];
    for (const edge of validEdges) {
      changes.push(createAdditionChange(edge));
    }
    if (changes.length) {
      state.hooks.edgesChange.trigger(changes);
    }
  };
  const removeNodes = (nodes2, removeConnectedEdges = true, removeChildren = false) => {
    const nextNodes = nodes2 instanceof Function ? nodes2(state.nodes) : nodes2;
    const nodesToRemove = Array.isArray(nextNodes) ? nextNodes : [nextNodes];
    const nodeChanges = [];
    const edgeChanges = [];
    function createEdgeRemovalChanges(nodes22) {
      const connectedEdges = getConnectedEdges$1(nodes22);
      for (const edge of connectedEdges) {
        if (isDef(edge.deletable) ? edge.deletable : true) {
          edgeChanges.push(createEdgeRemoveChange(edge.id, edge.source, edge.target, edge.sourceHandle, edge.targetHandle));
        }
      }
    }
    function createChildrenRemovalChanges(id2) {
      const children2 = [];
      for (const node of state.nodes) {
        if (node.parentNode === id2) {
          children2.push(node);
        }
      }
      if (children2.length) {
        for (const child of children2) {
          nodeChanges.push(createNodeRemoveChange(child.id));
        }
        if (removeConnectedEdges) {
          createEdgeRemovalChanges(children2);
        }
        for (const child of children2) {
          createChildrenRemovalChanges(child.id);
        }
      }
    }
    for (const item of nodesToRemove) {
      const currNode = typeof item === "string" ? findNode(item) : item;
      if (!currNode) {
        continue;
      }
      if (isDef(currNode.deletable) && !currNode.deletable) {
        continue;
      }
      nodeChanges.push(createNodeRemoveChange(currNode.id));
      if (removeConnectedEdges) {
        createEdgeRemovalChanges([currNode]);
      }
      if (removeChildren) {
        createChildrenRemovalChanges(currNode.id);
      }
    }
    if (edgeChanges.length) {
      state.hooks.edgesChange.trigger(edgeChanges);
    }
    if (nodeChanges.length) {
      state.hooks.nodesChange.trigger(nodeChanges);
    }
  };
  const removeEdges = (edges2) => {
    const nextEdges = edges2 instanceof Function ? edges2(state.edges) : edges2;
    const edgesToRemove = Array.isArray(nextEdges) ? nextEdges : [nextEdges];
    const changes = [];
    for (const item of edgesToRemove) {
      const currEdge = typeof item === "string" ? findEdge(item) : item;
      if (!currEdge) {
        continue;
      }
      if (isDef(currEdge.deletable) && !currEdge.deletable) {
        continue;
      }
      changes.push(
        createEdgeRemoveChange(
          typeof item === "string" ? item : item.id,
          currEdge.source,
          currEdge.target,
          currEdge.sourceHandle,
          currEdge.targetHandle
        )
      );
    }
    state.hooks.edgesChange.trigger(changes);
  };
  const updateEdge2 = (oldEdge, newConnection, shouldReplaceId = true) => {
    const prevEdge = findEdge(oldEdge.id);
    if (!prevEdge) {
      return false;
    }
    const prevEdgeIndex = state.edges.indexOf(prevEdge);
    const newEdge = updateEdgeAction(oldEdge, newConnection, prevEdge, shouldReplaceId, state.hooks.error.trigger);
    if (newEdge) {
      const [validEdge] = createGraphEdges(
        [newEdge],
        state.isValidConnection,
        findNode,
        findEdge,
        state.hooks.error.trigger,
        state.defaultEdgeOptions,
        state.nodes,
        state.edges
      );
      state.edges = state.edges.map((edge, index) => index === prevEdgeIndex ? validEdge : edge);
      updateConnectionLookup(state.connectionLookup, edgeLookup.value, [validEdge]);
      return validEdge;
    }
    return false;
  };
  const updateEdgeData = (id2, dataUpdate, options = { replace: false }) => {
    const edge = findEdge(id2);
    if (!edge) {
      return;
    }
    const nextData = typeof dataUpdate === "function" ? dataUpdate(edge) : dataUpdate;
    edge.data = options.replace ? nextData : { ...edge.data, ...nextData };
  };
  const applyNodeChanges2 = (changes) => {
    return applyChanges(changes, state.nodes);
  };
  const applyEdgeChanges2 = (changes) => {
    const changedEdges = applyChanges(changes, state.edges);
    updateConnectionLookup(state.connectionLookup, edgeLookup.value, changedEdges);
    return changedEdges;
  };
  const updateNode2 = (id2, nodeUpdate, options = { replace: false }) => {
    const node = findNode(id2);
    if (!node) {
      return;
    }
    const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
    if (options.replace) {
      state.nodes.splice(state.nodes.indexOf(node), 1, nextNode);
    } else {
      Object.assign(node, nextNode);
    }
  };
  const updateNodeData = (id2, dataUpdate, options = { replace: false }) => {
    const node = findNode(id2);
    if (!node) {
      return;
    }
    const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
    node.data = options.replace ? nextData : { ...node.data, ...nextData };
  };
  const startConnection = (startHandle, position, isClick = false) => {
    if (isClick) {
      state.connectionClickStartHandle = startHandle;
    } else {
      state.connectionStartHandle = startHandle;
    }
    state.connectionEndHandle = null;
    state.connectionStatus = null;
    if (position) {
      state.connectionPosition = position;
    }
  };
  const updateConnection = (position, result = null, status = null) => {
    if (state.connectionStartHandle) {
      state.connectionPosition = position;
      state.connectionEndHandle = result;
      state.connectionStatus = status;
    }
  };
  const endConnection = (event, isClick) => {
    state.connectionPosition = { x: Number.NaN, y: Number.NaN };
    state.connectionEndHandle = null;
    state.connectionStatus = null;
    if (isClick) {
      state.connectionClickStartHandle = null;
    } else {
      state.connectionStartHandle = null;
    }
  };
  const getNodeRect = (nodeOrRect) => {
    const isRectObj = isRect(nodeOrRect);
    const node = isRectObj ? null : isGraphNode(nodeOrRect) ? nodeOrRect : findNode(nodeOrRect.id);
    if (!isRectObj && !node) {
      return [null, null, isRectObj];
    }
    const nodeRect = isRectObj ? nodeOrRect : nodeToRect(node);
    return [nodeRect, node, isRectObj];
  };
  const getIntersectingNodes = (nodeOrRect, partially = true, nodes2 = state.nodes) => {
    const [nodeRect, node, isRect2] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return [];
    }
    const intersections = [];
    for (const n of nodes2 || state.nodes) {
      if (!isRect2 && (n.id === node.id || !n.computedPosition)) {
        continue;
      }
      const currNodeRect = nodeToRect(n);
      const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
      const partiallyVisible = partially && overlappingArea > 0;
      if (partiallyVisible || overlappingArea >= currNodeRect.width * currNodeRect.height || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height)) {
        intersections.push(n);
      }
    }
    return intersections;
  };
  const isNodeIntersecting = (nodeOrRect, area, partially = true) => {
    const [nodeRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return false;
    }
    const overlappingArea = getOverlappingArea(nodeRect, area);
    const partiallyVisible = partially && overlappingArea > 0;
    return partiallyVisible || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height);
  };
  const panBy = (delta) => {
    const { viewport, dimensions, d3Zoom, d3Selection, translateExtent } = state;
    if (!d3Zoom || !d3Selection || !delta.x && !delta.y) {
      return false;
    }
    const nextTransform = identity$2.translate(viewport.x + delta.x, viewport.y + delta.y).scale(viewport.zoom);
    const extent = [
      [0, 0],
      [dimensions.width, dimensions.height]
    ];
    const constrainedTransform = d3Zoom.constrain()(nextTransform, extent, translateExtent);
    const transformChanged = state.viewport.x !== constrainedTransform.x || state.viewport.y !== constrainedTransform.y || state.viewport.zoom !== constrainedTransform.k;
    d3Zoom.transform(d3Selection, constrainedTransform);
    return transformChanged;
  };
  const setState = (options) => {
    const opts = options instanceof Function ? options(state) : options;
    const exclude = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    if (isDef(opts.defaultEdgeOptions)) {
      state.defaultEdgeOptions = opts.defaultEdgeOptions;
    }
    const elements = opts.modelValue || opts.nodes || opts.edges ? [] : void 0;
    if (elements) {
      if (opts.modelValue) {
        elements.push(...opts.modelValue);
      }
      if (opts.nodes) {
        elements.push(...opts.nodes);
      }
      if (opts.edges) {
        elements.push(...opts.edges);
      }
      setElements(elements);
    }
    const setSkippedOptions = () => {
      if (isDef(opts.maxZoom)) {
        setMaxZoom(opts.maxZoom);
      }
      if (isDef(opts.minZoom)) {
        setMinZoom(opts.minZoom);
      }
      if (isDef(opts.translateExtent)) {
        setTranslateExtent(opts.translateExtent);
      }
    };
    for (const o of Object.keys(opts)) {
      const key = o;
      const option = opts[key];
      if (![...storeOptionsToSkip, ...exclude].includes(key) && isDef(option)) {
        state[key] = option;
      }
    }
    until(() => state.d3Zoom).not.toBeNull().then(setSkippedOptions);
    if (!state.initialized) {
      state.initialized = true;
    }
  };
  const toObject = () => {
    const nodes2 = [];
    const edges2 = [];
    for (const node of state.nodes) {
      const {
        computedPosition: _,
        handleBounds: __,
        selected: ___,
        dimensions: ____,
        isParent: _____,
        resizing: ______,
        dragging: _______,
        events: _________,
        ...rest
      } = node;
      nodes2.push(rest);
    }
    for (const edge of state.edges) {
      const { selected: _, sourceNode: __, targetNode: ___, events: ____, ...rest } = edge;
      edges2.push(rest);
    }
    return JSON.parse(
      JSON.stringify({
        nodes: nodes2,
        edges: edges2,
        position: [state.viewport.x, state.viewport.y],
        zoom: state.viewport.zoom,
        viewport: state.viewport
      })
    );
  };
  const fromObject = (obj) => {
    return new Promise((resolve) => {
      const { nodes: nodes2, edges: edges2, position, zoom: zoom2, viewport } = obj;
      if (nodes2) {
        setNodes(nodes2);
      }
      if (edges2) {
        setEdges(edges2);
      }
      const [xPos, yPos] = (viewport == null ? void 0 : viewport.x) && (viewport == null ? void 0 : viewport.y) ? [viewport.x, viewport.y] : position ?? [null, null];
      if (xPos && yPos) {
        const nextZoom = (viewport == null ? void 0 : viewport.zoom) || zoom2 || state.viewport.zoom;
        return until(() => viewportHelper.value.viewportInitialized).toBe(true).then(() => {
          viewportHelper.value.setViewport({
            x: xPos,
            y: yPos,
            zoom: nextZoom
          }).then(() => {
            resolve(true);
          });
        });
      } else {
        resolve(true);
      }
    });
  };
  const $reset = () => {
    const resetState = useState();
    state.edges = [];
    state.nodes = [];
    if (state.d3Zoom && state.d3Selection) {
      const updatedTransform = identity$2.translate(resetState.defaultViewport.x ?? 0, resetState.defaultViewport.y ?? 0).scale(clamp(resetState.defaultViewport.zoom ?? 1, resetState.minZoom, resetState.maxZoom));
      const bbox = state.viewportRef.getBoundingClientRect();
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = state.d3Zoom.constrain()(updatedTransform, extent, resetState.translateExtent);
      state.d3Zoom.transform(state.d3Selection, constrainedTransform);
    }
    setState(resetState);
  };
  return {
    updateNodePositions,
    updateNodeDimensions,
    setElements,
    setNodes,
    setEdges,
    addNodes: addNodes2,
    addEdges: addEdges2,
    removeNodes,
    removeEdges,
    findNode,
    findEdge,
    updateEdge: updateEdge2,
    updateEdgeData,
    updateNode: updateNode2,
    updateNodeData,
    applyEdgeChanges: applyEdgeChanges2,
    applyNodeChanges: applyNodeChanges2,
    addSelectedElements,
    addSelectedNodes,
    addSelectedEdges,
    setMinZoom,
    setMaxZoom,
    setTranslateExtent,
    setNodeExtent,
    setPaneClickDistance,
    removeSelectedElements,
    removeSelectedNodes,
    removeSelectedEdges,
    startConnection,
    updateConnection,
    endConnection,
    setInteractive,
    setState,
    getIntersectingNodes,
    getIncomers: getIncomers$1,
    getOutgoers: getOutgoers$1,
    getConnectedEdges: getConnectedEdges$1,
    getHandleConnections,
    isNodeIntersecting,
    panBy,
    fitView: (params) => viewportHelper.value.fitView(params),
    zoomIn: (transitionOpts) => viewportHelper.value.zoomIn(transitionOpts),
    zoomOut: (transitionOpts) => viewportHelper.value.zoomOut(transitionOpts),
    zoomTo: (zoomLevel, transitionOpts) => viewportHelper.value.zoomTo(zoomLevel, transitionOpts),
    setViewport: (params, transitionOpts) => viewportHelper.value.setViewport(params, transitionOpts),
    setTransform: (params, transitionOpts) => viewportHelper.value.setTransform(params, transitionOpts),
    getViewport: () => viewportHelper.value.getViewport(),
    getTransform: () => viewportHelper.value.getTransform(),
    setCenter: (x, y, opts) => viewportHelper.value.setCenter(x, y, opts),
    fitBounds: (params, opts) => viewportHelper.value.fitBounds(params, opts),
    project: (params) => viewportHelper.value.project(params),
    screenToFlowCoordinate: (params) => viewportHelper.value.screenToFlowCoordinate(params),
    flowToScreenCoordinate: (params) => viewportHelper.value.flowToScreenCoordinate(params),
    toObject,
    fromObject,
    updateNodeInternals,
    viewportHelper,
    $reset,
    $destroy: () => {
    }
  };
}
const _hoisted_1$9$1 = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"];
const __default__$f = {
  name: "Handle",
  compatConfig: { MODE: 3 }
};
const _sfc_main$f$1 = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => Position.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: true },
    connectableEnd: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = createPropsRestProxy(__props, ["position", "connectable", "connectableStart", "connectableEnd", "id"]);
    const type = toRef(() => props.type ?? "source");
    const isValidConnection = toRef(() => props.isValidConnection ?? null);
    const {
      id: flowId,
      connectionStartHandle,
      connectionClickStartHandle,
      connectionEndHandle,
      vueFlowRef,
      nodesConnectable,
      noDragClassName,
      noPanClassName
    } = useVueFlow();
    const { id: nodeId2, node, nodeEl, connectedEdges } = useNode();
    const handle = ref();
    const isConnectableStart = toRef(() => typeof __props.connectableStart !== "undefined" ? __props.connectableStart : true);
    const isConnectableEnd = toRef(() => typeof __props.connectableEnd !== "undefined" ? __props.connectableEnd : true);
    const isConnecting = toRef(
      () => {
        var _a, _b, _c, _d, _e, _f;
        return ((_a = connectionStartHandle.value) == null ? void 0 : _a.nodeId) === nodeId2 && ((_b = connectionStartHandle.value) == null ? void 0 : _b.id) === __props.id && ((_c = connectionStartHandle.value) == null ? void 0 : _c.type) === type.value || ((_d = connectionEndHandle.value) == null ? void 0 : _d.nodeId) === nodeId2 && ((_e = connectionEndHandle.value) == null ? void 0 : _e.id) === __props.id && ((_f = connectionEndHandle.value) == null ? void 0 : _f.type) === type.value;
      }
    );
    const isClickConnecting = toRef(
      () => {
        var _a, _b, _c;
        return ((_a = connectionClickStartHandle.value) == null ? void 0 : _a.nodeId) === nodeId2 && ((_b = connectionClickStartHandle.value) == null ? void 0 : _b.id) === __props.id && ((_c = connectionClickStartHandle.value) == null ? void 0 : _c.type) === type.value;
      }
    );
    const { handlePointerDown, handleClick } = useHandle({
      nodeId: nodeId2,
      handleId: __props.id,
      isValidConnection,
      type
    });
    const isConnectable = computed(() => {
      if (typeof __props.connectable === "string" && __props.connectable === "single") {
        return !connectedEdges.value.some((edge) => {
          const id2 = edge[`${type.value}Handle`];
          if (edge[type.value] !== nodeId2) {
            return false;
          }
          return id2 ? id2 === __props.id : true;
        });
      }
      if (typeof __props.connectable === "number") {
        return connectedEdges.value.filter((edge) => {
          const id2 = edge[`${type.value}Handle`];
          if (edge[type.value] !== nodeId2) {
            return false;
          }
          return id2 ? id2 === __props.id : true;
        }).length < __props.connectable;
      }
      if (typeof __props.connectable === "function") {
        return __props.connectable(node, connectedEdges.value);
      }
      return isDef(__props.connectable) ? __props.connectable : nodesConnectable.value;
    });
    onMounted(() => {
      var _a;
      if (!node.dimensions.width || !node.dimensions.height) {
        return;
      }
      const existingBounds = (_a = node.handleBounds[type.value]) == null ? void 0 : _a.find((b) => b.id === __props.id);
      if (!vueFlowRef.value || existingBounds) {
        return;
      }
      const viewportNode = vueFlowRef.value.querySelector(".vue-flow__transformationpane");
      if (!nodeEl.value || !handle.value || !viewportNode || !__props.id) {
        return;
      }
      const nodeBounds = nodeEl.value.getBoundingClientRect();
      const handleBounds = handle.value.getBoundingClientRect();
      const style2 = window.getComputedStyle(viewportNode);
      const { m22: zoom2 } = new window.DOMMatrixReadOnly(style2.transform);
      const nextBounds = {
        id: __props.id,
        position: __props.position,
        x: (handleBounds.left - nodeBounds.left) / zoom2,
        y: (handleBounds.top - nodeBounds.top) / zoom2,
        type: type.value,
        nodeId: nodeId2,
        ...getDimensions(handle.value)
      };
      node.handleBounds[type.value] = [...node.handleBounds[type.value] ?? [], nextBounds];
    });
    function onPointerDown(event) {
      const isMouseTriggered = isMouseEvent(event);
      if (isConnectable.value && isConnectableStart.value && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
        handlePointerDown(event);
      }
    }
    function onClick(event) {
      if (!nodeId2 || !connectionClickStartHandle.value && !isConnectableStart.value) {
        return;
      }
      if (isConnectable.value) {
        handleClick(event);
      }
    }
    __expose({
      handleClick,
      handlePointerDown,
      onClick,
      onPointerDown
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "handle",
        ref: handle,
        "data-id": `${unref(flowId)}-${unref(nodeId2)}-${__props.id}-${type.value}`,
        "data-handleid": __props.id,
        "data-nodeid": unref(nodeId2),
        "data-handlepos": _ctx.position,
        class: normalizeClass(["vue-flow__handle", [
          `vue-flow__handle-${_ctx.position}`,
          `vue-flow__handle-${__props.id}`,
          unref(noDragClassName),
          unref(noPanClassName),
          type.value,
          {
            connectable: isConnectable.value,
            connecting: isClickConnecting.value,
            connectablestart: isConnectableStart.value,
            connectableend: isConnectableEnd.value,
            connectionindicator: isConnectable.value && (isConnectableStart.value && !isConnecting.value || isConnectableEnd.value && isConnecting.value)
          }
        ]]),
        onMousedown: onPointerDown,
        onTouchstartPassive: onPointerDown,
        onClick
      }, [
        renderSlot(_ctx.$slots, "default", { id: _ctx.id })
      ], 42, _hoisted_1$9$1);
    };
  }
});
const DefaultNode = function({
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
  label: _label,
  connectable = true,
  isValidTargetPos,
  isValidSourcePos,
  data
}) {
  const label = data.label ?? _label;
  return [
    h(_sfc_main$f$1, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
    typeof label !== "string" && label ? h(label) : h(Fragment, [label]),
    h(_sfc_main$f$1, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
  ];
};
DefaultNode.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
DefaultNode.inheritAttrs = false;
DefaultNode.compatConfig = { MODE: 3 };
const DefaultNode$1 = DefaultNode;
const OutputNode = function({
  targetPosition = Position.Top,
  label: _label,
  connectable = true,
  isValidTargetPos,
  data
}) {
  const label = data.label ?? _label;
  return [
    h(_sfc_main$f$1, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
    typeof label !== "string" && label ? h(label) : h(Fragment, [label])
  ];
};
OutputNode.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
OutputNode.inheritAttrs = false;
OutputNode.compatConfig = { MODE: 3 };
const OutputNode$1 = OutputNode;
const InputNode = function({
  sourcePosition = Position.Bottom,
  label: _label,
  connectable = true,
  isValidSourcePos,
  data
}) {
  const label = data.label ?? _label;
  return [
    typeof label !== "string" && label ? h(label) : h(Fragment, [label]),
    h(_sfc_main$f$1, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
  ];
};
InputNode.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
InputNode.inheritAttrs = false;
InputNode.compatConfig = { MODE: 3 };
const InputNode$1 = InputNode;
const _hoisted_1$8$1 = ["transform"];
const _hoisted_2$2$1 = ["width", "height", "x", "y", "rx", "ry"];
const _hoisted_3$1$1 = ["y"];
const __default__$e = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
};
const _sfc_main$e$1 = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: {
    x: {},
    y: {},
    label: {},
    labelStyle: { default: () => ({}) },
    labelShowBg: { type: Boolean, default: true },
    labelBgStyle: { default: () => ({}) },
    labelBgPadding: { default: () => [2, 4] },
    labelBgBorderRadius: { default: 2 }
  },
  setup(__props) {
    const box = ref({ x: 0, y: 0, width: 0, height: 0 });
    const el = ref(null);
    const transform = computed(() => `translate(${__props.x - box.value.width / 2} ${__props.y - box.value.height / 2})`);
    onMounted(getBox);
    watch([() => __props.x, () => __props.y, el, () => __props.label], getBox);
    function getBox() {
      if (!el.value) {
        return;
      }
      const nextBox = el.value.getBBox();
      if (nextBox.width !== box.value.width || nextBox.height !== box.value.height) {
        box.value = nextBox;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("g", {
        transform: transform.value,
        class: "vue-flow__edge-textwrapper"
      }, [
        _ctx.labelShowBg ? (openBlock(), createElementBlock("rect", {
          key: 0,
          class: "vue-flow__edge-textbg",
          width: `${box.value.width + 2 * _ctx.labelBgPadding[0]}px`,
          height: `${box.value.height + 2 * _ctx.labelBgPadding[1]}px`,
          x: -_ctx.labelBgPadding[0],
          y: -_ctx.labelBgPadding[1],
          style: normalizeStyle(_ctx.labelBgStyle),
          rx: _ctx.labelBgBorderRadius,
          ry: _ctx.labelBgBorderRadius
        }, null, 12, _hoisted_2$2$1)) : createCommentVNode("", true),
        createBaseVNode("text", mergeProps(_ctx.$attrs, {
          ref_key: "el",
          ref: el,
          class: "vue-flow__edge-text",
          y: box.value.height / 2,
          dy: "0.3em",
          style: _ctx.labelStyle
        }), [
          renderSlot(_ctx.$slots, "default", {}, () => [
            typeof _ctx.label !== "string" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.label), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ], 64))
          ])
        ], 16, _hoisted_3$1$1)
      ], 8, _hoisted_1$8$1);
    };
  }
});
const _hoisted_1$7$1 = ["id", "d", "marker-end", "marker-start"];
const _hoisted_2$1$1 = ["d", "stroke-width"];
const __default__$d = {
  name: "BaseEdge",
  inheritAttrs: false,
  compatConfig: { MODE: 3 }
};
const _sfc_main$d$1 = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: {
    id: {},
    labelX: {},
    labelY: {},
    path: {},
    label: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: { default: 20 },
    labelStyle: {},
    labelShowBg: { type: Boolean },
    labelBgStyle: {},
    labelBgPadding: {},
    labelBgBorderRadius: {}
  },
  setup(__props, { expose: __expose }) {
    const pathEl = ref(null);
    const interactionEl = ref(null);
    const labelEl = ref(null);
    const attrs = useAttrs();
    __expose({
      pathEl,
      interactionEl,
      labelEl
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("path", mergeProps(unref(attrs), {
          id: _ctx.id,
          ref_key: "pathEl",
          ref: pathEl,
          d: _ctx.path,
          class: "vue-flow__edge-path",
          "marker-end": _ctx.markerEnd,
          "marker-start": _ctx.markerStart
        }), null, 16, _hoisted_1$7$1),
        _ctx.interactionWidth ? (openBlock(), createElementBlock("path", {
          key: 0,
          ref_key: "interactionEl",
          ref: interactionEl,
          fill: "none",
          d: _ctx.path,
          "stroke-width": _ctx.interactionWidth,
          "stroke-opacity": 0,
          class: "vue-flow__edge-interaction"
        }, null, 8, _hoisted_2$1$1)) : createCommentVNode("", true),
        _ctx.label && _ctx.labelX && _ctx.labelY ? (openBlock(), createBlock(_sfc_main$e$1, {
          key: 1,
          ref_key: "labelEl",
          ref: labelEl,
          x: _ctx.labelX,
          y: _ctx.labelY,
          label: _ctx.label,
          "label-show-bg": _ctx.labelShowBg,
          "label-bg-style": _ctx.labelBgStyle,
          "label-bg-padding": _ctx.labelBgPadding,
          "label-bg-border-radius": _ctx.labelBgBorderRadius,
          "label-style": _ctx.labelStyle
        }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
function getSimpleEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY
}) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getBezierEdgeCenter({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourceControlX,
  sourceControlY,
  targetControlX,
  targetControlY
}) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  } else {
    return curvature * 25 * Math.sqrt(-distance2);
  }
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c: c2 }) {
  let ctX, ctY;
  switch (pos) {
    case Position.Left:
      ctX = x1 - calculateControlOffset(x1 - x2, c2);
      ctY = y1;
      break;
    case Position.Right:
      ctX = x1 + calculateControlOffset(x2 - x1, c2);
      ctY = y1;
      break;
    case Position.Top:
      ctX = x1;
      ctY = y1 - calculateControlOffset(y1 - y2, c2);
      break;
    case Position.Bottom:
      ctX = x1;
      ctY = y1 + calculateControlOffset(y2 - y1, c2);
      break;
  }
  return [ctX, ctY];
}
function getBezierPath(bezierPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    curvature = 0.25
  } = bezierPathParams;
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
function getControl({ pos, x1, y1, x2, y2 }) {
  let ctX, ctY;
  switch (pos) {
    case Position.Left:
    case Position.Right:
      ctX = 0.5 * (x1 + x2);
      ctY = y1;
      break;
    case Position.Top:
    case Position.Bottom:
      ctX = x1;
      ctY = 0.5 * (y1 + y2);
      break;
  }
  return [ctX, ctY];
}
function getSimpleBezierPath(simpleBezierPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top
  } = simpleBezierPathParams;
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [centerX, centerY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    centerX,
    centerY,
    offsetX,
    offsetY
  ];
}
const handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
function getDirection({
  source,
  sourcePosition = Position.Bottom,
  target
}) {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function distance(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
function getPoints({
  source,
  sourcePosition = Position.Bottom,
  target,
  targetPosition = Position.Top,
  center,
  offset
}) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points;
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getSimpleEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = center.x ?? defaultCenterX;
    centerY = center.y ?? defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c2, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c2) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c2.x || a.y === y && y === c2.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c2.x ? -1 : 1;
    const yDir2 = a.y < c2.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c2.x ? 1 : -1;
  const yDir = a.y < c2.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath(smoothStepPathParams) {
  const {
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    borderRadius = 5,
    centerX,
    centerY,
    offset = 20
  } = smoothStepPathParams;
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset
  });
  const path = points.reduce((res, p, i) => {
    let segment;
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
function getStraightPath(straightEdgeParams) {
  const { sourceX, sourceY, targetX, targetY } = straightEdgeParams;
  const [centerX, centerY, offsetX, offsetY] = getSimpleEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, centerX, centerY, offsetX, offsetY];
}
const StraightEdge = defineComponent({
  name: "StraightEdge",
  props: [
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getStraightPath(props);
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const StraightEdge$1 = StraightEdge;
const SmoothStepEdge = defineComponent({
  name: "SmoothStepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "borderRadius",
    "markerEnd",
    "markerStart",
    "interactionWidth",
    "offset"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getSmoothStepPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const SmoothStepEdge$1 = SmoothStepEdge;
const StepEdge = defineComponent({
  name: "StepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  setup(props, { attrs }) {
    return () => h(SmoothStepEdge$1, { ...props, ...attrs, borderRadius: 0 });
  }
});
const StepEdge$1 = StepEdge;
const BezierEdge = defineComponent({
  name: "BezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "curvature",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getBezierPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const BezierEdge$1 = BezierEdge;
const SimpleBezierEdge = defineComponent({
  name: "SimpleBezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(props, { attrs }) {
    return () => {
      const [path, labelX, labelY] = getSimpleBezierPath({
        ...props,
        sourcePosition: props.sourcePosition ?? Position.Bottom,
        targetPosition: props.targetPosition ?? Position.Top
      });
      return h(_sfc_main$d$1, {
        path,
        labelX,
        labelY,
        ...attrs,
        ...props
      });
    };
  }
});
const SimpleBezierEdge$1 = SimpleBezierEdge;
const defaultNodeTypes = {
  input: InputNode$1,
  default: DefaultNode$1,
  output: OutputNode$1
};
const defaultEdgeTypes = {
  default: BezierEdge$1,
  straight: StraightEdge$1,
  step: StepEdge$1,
  smoothstep: SmoothStepEdge$1,
  simplebezier: SimpleBezierEdge$1
};
function useGetters(state, nodeLookup, edgeLookup) {
  const getNode = computed(() => (id2) => nodeLookup.value.get(id2));
  const getEdge = computed(() => (id2) => edgeLookup.value.get(id2));
  const getEdgeTypes = computed(() => {
    const edgeTypes = {
      ...defaultEdgeTypes,
      ...state.edgeTypes
    };
    const keys = Object.keys(edgeTypes);
    for (const e of state.edges) {
      e.type && !keys.includes(e.type) && (edgeTypes[e.type] = e.type);
    }
    return edgeTypes;
  });
  const getNodeTypes = computed(() => {
    const nodeTypes = {
      ...defaultNodeTypes,
      ...state.nodeTypes
    };
    const keys = Object.keys(nodeTypes);
    for (const n of state.nodes) {
      n.type && !keys.includes(n.type) && (nodeTypes[n.type] = n.type);
    }
    return nodeTypes;
  });
  const getNodes = computed(() => {
    if (state.onlyRenderVisibleElements) {
      return getNodesInside(
        state.nodes,
        {
          x: 0,
          y: 0,
          width: state.dimensions.width,
          height: state.dimensions.height
        },
        state.viewport,
        true
      );
    }
    return state.nodes;
  });
  const getEdges = computed(() => {
    if (state.onlyRenderVisibleElements) {
      const visibleEdges = [];
      for (const edge of state.edges) {
        const source = nodeLookup.value.get(edge.source);
        const target = nodeLookup.value.get(edge.target);
        if (isEdgeVisible({
          sourcePos: source.computedPosition || { x: 0, y: 0 },
          targetPos: target.computedPosition || { x: 0, y: 0 },
          sourceWidth: source.dimensions.width,
          sourceHeight: source.dimensions.height,
          targetWidth: target.dimensions.width,
          targetHeight: target.dimensions.height,
          width: state.dimensions.width,
          height: state.dimensions.height,
          viewport: state.viewport
        })) {
          visibleEdges.push(edge);
        }
      }
      return visibleEdges;
    }
    return state.edges;
  });
  const getElements = computed(() => [...getNodes.value, ...getEdges.value]);
  const getSelectedNodes = computed(() => {
    const selectedNodes = [];
    for (const node of state.nodes) {
      if (node.selected) {
        selectedNodes.push(node);
      }
    }
    return selectedNodes;
  });
  const getSelectedEdges = computed(() => {
    const selectedEdges = [];
    for (const edge of state.edges) {
      if (edge.selected) {
        selectedEdges.push(edge);
      }
    }
    return selectedEdges;
  });
  const getSelectedElements = computed(() => [
    ...getSelectedNodes.value,
    ...getSelectedEdges.value
  ]);
  const getNodesInitialized = computed(() => {
    const initializedNodes = [];
    for (const node of state.nodes) {
      if (!!node.dimensions.width && !!node.dimensions.height && node.handleBounds !== void 0) {
        initializedNodes.push(node);
      }
    }
    return initializedNodes;
  });
  const areNodesInitialized = computed(
    () => getNodes.value.length > 0 && getNodesInitialized.value.length === getNodes.value.length
  );
  return {
    getNode,
    getEdge,
    getElements,
    getEdgeTypes,
    getNodeTypes,
    getEdges,
    getNodes,
    getSelectedElements,
    getSelectedNodes,
    getSelectedEdges,
    getNodesInitialized,
    areNodesInitialized
  };
}
class Storage {
  constructor() {
    this.currentId = 0;
    this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var _a;
    const vueApp = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app;
    const existingInstance = (vueApp == null ? void 0 : vueApp.config.globalProperties.$vueFlowStorage) ?? Storage.instance;
    Storage.instance = existingInstance ?? new Storage();
    if (vueApp) {
      vueApp.config.globalProperties.$vueFlowStorage = Storage.instance;
    }
    return Storage.instance;
  }
  set(id2, flow) {
    return this.flows.set(id2, flow);
  }
  get(id2) {
    return this.flows.get(id2);
  }
  remove(id2) {
    return this.flows.delete(id2);
  }
  create(id2, preloadedState) {
    const state = useState();
    const reactiveState = reactive(state);
    const hooksOn = {};
    for (const [n, h2] of Object.entries(reactiveState.hooks)) {
      const name = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
      hooksOn[name] = h2.on;
    }
    const emits = {};
    for (const [n, h2] of Object.entries(reactiveState.hooks)) {
      emits[n] = h2.trigger;
    }
    const nodeLookup = computed(() => {
      const nodesMap = /* @__PURE__ */ new Map();
      for (const node of reactiveState.nodes) {
        nodesMap.set(node.id, node);
      }
      return nodesMap;
    });
    const edgeLookup = computed(() => {
      const edgesMap = /* @__PURE__ */ new Map();
      for (const edge of reactiveState.edges) {
        edgesMap.set(edge.id, edge);
      }
      return edgesMap;
    });
    const getters = useGetters(reactiveState, nodeLookup, edgeLookup);
    const actions = useActions(reactiveState, nodeLookup, edgeLookup);
    actions.setState({ ...reactiveState, ...preloadedState });
    const flow = {
      ...hooksOn,
      ...getters,
      ...actions,
      ...toRefs(reactiveState),
      nodeLookup,
      edgeLookup,
      emits,
      id: id2,
      vueFlowVersion: "1.48.2",
      $destroy: () => {
        this.remove(id2);
      }
    };
    this.set(id2, flow);
    return flow;
  }
  getId() {
    return `vue-flow-${this.currentId++}`;
  }
}
function useVueFlow(idOrOpts) {
  const storage = Storage.getInstance();
  const scope = getCurrentScope();
  const isOptsObj = typeof idOrOpts === "object";
  const options = isOptsObj ? idOrOpts : { id: idOrOpts };
  const id2 = options.id;
  const vueFlowId = id2 ?? (scope == null ? void 0 : scope.vueFlowId);
  let vueFlow;
  if (scope) {
    const injectedState = inject(VueFlow, null);
    if (typeof injectedState !== "undefined" && injectedState !== null && (!vueFlowId || injectedState.id === vueFlowId)) {
      vueFlow = injectedState;
    }
  }
  if (!vueFlow) {
    if (vueFlowId) {
      vueFlow = storage.get(vueFlowId);
    }
  }
  if (!vueFlow || vueFlowId && vueFlow.id !== vueFlowId) {
    const name = id2 ?? storage.getId();
    const state = storage.create(name, options);
    vueFlow = state;
    const vfScope = scope ?? effectScope(true);
    vfScope.run(() => {
      watch(
        state.applyDefault,
        (shouldApplyDefault, __, onCleanup) => {
          const nodesChangeHandler = (changes) => {
            state.applyNodeChanges(changes);
          };
          const edgesChangeHandler = (changes) => {
            state.applyEdgeChanges(changes);
          };
          if (shouldApplyDefault) {
            state.onNodesChange(nodesChangeHandler);
            state.onEdgesChange(edgesChangeHandler);
          } else {
            state.hooks.value.nodesChange.off(nodesChangeHandler);
            state.hooks.value.edgesChange.off(edgesChangeHandler);
          }
          onCleanup(() => {
            state.hooks.value.nodesChange.off(nodesChangeHandler);
            state.hooks.value.edgesChange.off(edgesChangeHandler);
          });
        },
        { immediate: true }
      );
      tryOnScopeDispose(() => {
        if (vueFlow) {
          const storedInstance = storage.get(vueFlow.id);
          if (storedInstance) {
            storedInstance.$destroy();
          } else {
            warn(`No store instance found for id ${vueFlow.id} in storage.`);
          }
        }
      });
    });
  } else {
    if (isOptsObj) {
      vueFlow.setState(options);
    }
  }
  if (scope) {
    provide(VueFlow, vueFlow);
    scope.vueFlowId = vueFlow.id;
  }
  if (isOptsObj) {
    const instance = getCurrentInstance();
    if ((instance == null ? void 0 : instance.type.name) !== "VueFlow") {
      vueFlow.emits.error(new VueFlowError(ErrorCode.USEVUEFLOW_OPTIONS));
    }
  }
  return vueFlow;
}
function useResizeHandler(viewportEl) {
  const { emits, dimensions } = useVueFlow();
  let resizeObserver;
  onMounted(() => {
    const updateDimensions = () => {
      var _a, _b;
      if (!viewportEl.value || !(((_b = (_a = viewportEl.value).checkVisibility) == null ? void 0 : _b.call(_a)) ?? true)) {
        return;
      }
      const size = getDimensions(viewportEl.value);
      if (size.width === 0 || size.height === 0) {
        emits.error(new VueFlowError(ErrorCode.MISSING_VIEWPORT_DIMENSIONS));
      }
      dimensions.value = { width: size.width || 500, height: size.height || 500 };
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (viewportEl.value) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(viewportEl.value);
    }
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateDimensions);
      if (resizeObserver && viewportEl.value) {
        resizeObserver.unobserve(viewportEl.value);
      }
    });
  });
}
const __default__$c = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
};
const _sfc_main$c$1 = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: {
    userSelectionRect: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vue-flow__selection vue-flow__container",
        style: normalizeStyle({
          width: `${_ctx.userSelectionRect.width}px`,
          height: `${_ctx.userSelectionRect.height}px`,
          transform: `translate(${_ctx.userSelectionRect.x}px, ${_ctx.userSelectionRect.y}px)`
        })
      }, null, 4);
    };
  }
});
const _hoisted_1$6$1 = ["tabIndex"];
const __default__$b = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
};
const _sfc_main$b$1 = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  setup(__props) {
    const { emits, viewport, getSelectedNodes, noPanClassName, disableKeyboardA11y, userSelectionActive } = useVueFlow();
    const updatePositions = useUpdateNodePositions();
    const el = ref(null);
    const dragging = useDrag({
      el,
      onStart(args) {
        emits.selectionDragStart(args);
        emits.nodeDragStart(args);
      },
      onDrag(args) {
        emits.selectionDrag(args);
        emits.nodeDrag(args);
      },
      onStop(args) {
        emits.selectionDragStop(args);
        emits.nodeDragStop(args);
      }
    });
    onMounted(() => {
      var _a;
      if (!disableKeyboardA11y.value) {
        (_a = el.value) == null ? void 0 : _a.focus({ preventScroll: true });
      }
    });
    const selectedNodesBBox = computed(() => getRectOfNodes(getSelectedNodes.value));
    const innerStyle = computed(() => ({
      width: `${selectedNodesBBox.value.width}px`,
      height: `${selectedNodesBBox.value.height}px`,
      top: `${selectedNodesBBox.value.y}px`,
      left: `${selectedNodesBBox.value.x}px`
    }));
    function onContextMenu(event) {
      emits.selectionContextMenu({ event, nodes: getSelectedNodes.value });
    }
    function onKeyDown(event) {
      if (disableKeyboardA11y.value) {
        return;
      }
      if (arrowKeyDiffs[event.key]) {
        event.preventDefault();
        updatePositions(
          {
            x: arrowKeyDiffs[event.key].x,
            y: arrowKeyDiffs[event.key].y
          },
          event.shiftKey
        );
      }
    }
    return (_ctx, _cache) => {
      return !unref(userSelectionActive) && selectedNodesBBox.value.width && selectedNodesBBox.value.height ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vue-flow__nodesselection vue-flow__container", unref(noPanClassName)]),
        style: normalizeStyle({ transform: `translate(${unref(viewport).x}px,${unref(viewport).y}px) scale(${unref(viewport).zoom})` })
      }, [
        createBaseVNode("div", {
          ref_key: "el",
          ref: el,
          class: normalizeClass([{ dragging: unref(dragging) }, "vue-flow__nodesselection-rect"]),
          style: normalizeStyle(innerStyle.value),
          tabIndex: unref(disableKeyboardA11y) ? void 0 : -1,
          onContextmenu: onContextMenu,
          onKeydown: onKeyDown
        }, null, 46, _hoisted_1$6$1)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
function getMousePosition(event, containerBounds) {
  return {
    x: event.clientX - containerBounds.left,
    y: event.clientY - containerBounds.top
  };
}
const __default__$a = {
  name: "Pane",
  compatConfig: { MODE: 3 }
};
const _sfc_main$a$1 = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
    isSelecting: { type: Boolean },
    selectionKeyPressed: { type: Boolean }
  },
  setup(__props) {
    const {
      vueFlowRef,
      nodes: nodes2,
      viewport,
      emits,
      userSelectionActive,
      removeSelectedElements,
      userSelectionRect,
      elementsSelectable,
      nodesSelectionActive,
      getSelectedEdges,
      getSelectedNodes,
      removeNodes,
      removeEdges,
      selectionMode,
      deleteKeyCode,
      multiSelectionKeyCode,
      multiSelectionActive,
      edgeLookup,
      nodeLookup,
      connectionLookup,
      defaultEdgeOptions,
      connectionStartHandle,
      panOnDrag
    } = useVueFlow();
    const container = shallowRef(null);
    const selectedNodeIds = shallowRef(/* @__PURE__ */ new Set());
    const selectedEdgeIds = shallowRef(/* @__PURE__ */ new Set());
    const containerBounds = shallowRef(null);
    const hasActiveSelection = toRef(() => elementsSelectable.value && (__props.isSelecting || userSelectionActive.value));
    const connectionInProgress = toRef(() => connectionStartHandle.value !== null);
    let selectionInProgress = false;
    let selectionStarted = false;
    const deleteKeyPressed = useKeyPress(deleteKeyCode, { actInsideInputWithModifier: false });
    const multiSelectKeyPressed = useKeyPress(multiSelectionKeyCode);
    watch(deleteKeyPressed, (isKeyPressed) => {
      if (!isKeyPressed) {
        return;
      }
      removeNodes(getSelectedNodes.value);
      removeEdges(getSelectedEdges.value);
      nodesSelectionActive.value = false;
    });
    watch(multiSelectKeyPressed, (isKeyPressed) => {
      multiSelectionActive.value = isKeyPressed;
    });
    function wrapHandler(handler, containerRef) {
      return (event) => {
        if (event.target !== containerRef) {
          return;
        }
        handler == null ? void 0 : handler(event);
      };
    }
    function onClick(event) {
      if (selectionInProgress || connectionInProgress.value) {
        selectionInProgress = false;
        return;
      }
      emits.paneClick(event);
      removeSelectedElements();
      nodesSelectionActive.value = false;
    }
    function onContextMenu(event) {
      var _a;
      if (Array.isArray(panOnDrag.value) && ((_a = panOnDrag.value) == null ? void 0 : _a.includes(2))) {
        event.preventDefault();
        return;
      }
      emits.paneContextMenu(event);
    }
    function onWheel(event) {
      emits.paneScroll(event);
    }
    function onPointerDown(event) {
      var _a, _b, _c;
      containerBounds.value = ((_a = vueFlowRef.value) == null ? void 0 : _a.getBoundingClientRect()) ?? null;
      if (!elementsSelectable.value || !__props.isSelecting || event.button !== 0 || event.target !== container.value || !containerBounds.value) {
        return;
      }
      (_c = (_b = event.target) == null ? void 0 : _b.setPointerCapture) == null ? void 0 : _c.call(_b, event.pointerId);
      const { x, y } = getMousePosition(event, containerBounds.value);
      selectionStarted = true;
      selectionInProgress = false;
      removeSelectedElements();
      userSelectionRect.value = {
        width: 0,
        height: 0,
        startX: x,
        startY: y,
        x,
        y
      };
      emits.selectionStart(event);
    }
    function onPointerMove(event) {
      var _a;
      if (!containerBounds.value || !userSelectionRect.value) {
        return;
      }
      selectionInProgress = true;
      const { x: mouseX, y: mouseY } = getEventPosition(event, containerBounds.value);
      const { startX = 0, startY = 0 } = userSelectionRect.value;
      const nextUserSelectRect = {
        startX,
        startY,
        x: mouseX < startX ? mouseX : startX,
        y: mouseY < startY ? mouseY : startY,
        width: Math.abs(mouseX - startX),
        height: Math.abs(mouseY - startY)
      };
      const prevSelectedNodeIds = selectedNodeIds.value;
      const prevSelectedEdgeIds = selectedEdgeIds.value;
      selectedNodeIds.value = new Set(
        getNodesInside(nodes2.value, nextUserSelectRect, viewport.value, selectionMode.value === SelectionMode.Partial, true).map(
          (node) => node.id
        )
      );
      selectedEdgeIds.value = /* @__PURE__ */ new Set();
      const edgesSelectable = ((_a = defaultEdgeOptions.value) == null ? void 0 : _a.selectable) ?? true;
      for (const nodeId2 of selectedNodeIds.value) {
        const connections = connectionLookup.value.get(nodeId2);
        if (!connections) {
          continue;
        }
        for (const { edgeId } of connections.values()) {
          const edge = edgeLookup.value.get(edgeId);
          if (edge && (edge.selectable ?? edgesSelectable)) {
            selectedEdgeIds.value.add(edgeId);
          }
        }
      }
      if (!areSetsEqual(prevSelectedNodeIds, selectedNodeIds.value)) {
        const changes = getSelectionChanges(nodeLookup.value, selectedNodeIds.value, true);
        emits.nodesChange(changes);
      }
      if (!areSetsEqual(prevSelectedEdgeIds, selectedEdgeIds.value)) {
        const changes = getSelectionChanges(edgeLookup.value, selectedEdgeIds.value);
        emits.edgesChange(changes);
      }
      userSelectionRect.value = nextUserSelectRect;
      userSelectionActive.value = true;
      nodesSelectionActive.value = false;
    }
    function onPointerUp(event) {
      var _a;
      if (event.button !== 0 || !selectionStarted) {
        return;
      }
      (_a = event.target) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
      if (!userSelectionActive.value && userSelectionRect.value && event.target === container.value) {
        onClick(event);
      }
      userSelectionActive.value = false;
      userSelectionRect.value = null;
      nodesSelectionActive.value = selectedNodeIds.value.size > 0;
      emits.selectionEnd(event);
      if (__props.selectionKeyPressed) {
        selectionInProgress = false;
      }
      selectionStarted = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: normalizeClass(["vue-flow__pane vue-flow__container", { selection: _ctx.isSelecting }]),
        onClick: _cache[0] || (_cache[0] = (event) => hasActiveSelection.value ? void 0 : wrapHandler(onClick, container.value)(event)),
        onContextmenu: _cache[1] || (_cache[1] = ($event) => wrapHandler(onContextMenu, container.value)($event)),
        onWheelPassive: _cache[2] || (_cache[2] = ($event) => wrapHandler(onWheel, container.value)($event)),
        onPointerenter: _cache[3] || (_cache[3] = (event) => hasActiveSelection.value ? void 0 : unref(emits).paneMouseEnter(event)),
        onPointerdown: _cache[4] || (_cache[4] = (event) => hasActiveSelection.value ? onPointerDown(event) : unref(emits).paneMouseMove(event)),
        onPointermove: _cache[5] || (_cache[5] = (event) => hasActiveSelection.value ? onPointerMove(event) : unref(emits).paneMouseMove(event)),
        onPointerup: _cache[6] || (_cache[6] = (event) => hasActiveSelection.value ? onPointerUp(event) : void 0),
        onPointerleave: _cache[7] || (_cache[7] = ($event) => unref(emits).paneMouseLeave($event))
      }, [
        renderSlot(_ctx.$slots, "default"),
        unref(userSelectionActive) && unref(userSelectionRect) ? (openBlock(), createBlock(_sfc_main$c$1, {
          key: 0,
          "user-selection-rect": unref(userSelectionRect)
        }, null, 8, ["user-selection-rect"])) : createCommentVNode("", true),
        unref(nodesSelectionActive) && unref(getSelectedNodes).length ? (openBlock(), createBlock(_sfc_main$b$1, { key: 1 })) : createCommentVNode("", true)
      ], 34);
    };
  }
});
const __default__$9 = {
  name: "Transform",
  compatConfig: { MODE: 3 }
};
const _sfc_main$9$1 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  setup(__props) {
    const { viewport, fitViewOnInit, fitViewOnInitDone } = useVueFlow();
    const isHidden = computed(() => {
      if (fitViewOnInit.value) {
        return !fitViewOnInitDone.value;
      }
      return false;
    });
    const transform = computed(() => `translate(${viewport.value.x}px,${viewport.value.y}px) scale(${viewport.value.zoom})`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vue-flow__transformationpane vue-flow__container",
        style: normalizeStyle({ transform: transform.value, opacity: isHidden.value ? 0 : void 0 })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
const __default__$8 = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
};
const _sfc_main$8$1 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const {
      minZoom,
      maxZoom,
      defaultViewport,
      translateExtent,
      zoomActivationKeyCode,
      selectionKeyCode,
      panActivationKeyCode,
      panOnScroll,
      panOnScrollMode,
      panOnScrollSpeed,
      panOnDrag,
      zoomOnDoubleClick,
      zoomOnPinch,
      zoomOnScroll,
      preventScrolling,
      noWheelClassName,
      noPanClassName,
      emits,
      connectionStartHandle,
      userSelectionActive,
      paneDragging,
      d3Zoom: storeD3Zoom,
      d3Selection: storeD3Selection,
      d3ZoomHandler: storeD3ZoomHandler,
      viewport,
      viewportRef,
      paneClickDistance
    } = useVueFlow();
    useResizeHandler(viewportRef);
    const isZoomingOrPanning = shallowRef(false);
    const isPanScrolling = shallowRef(false);
    let panScrollTimeout = null;
    let zoomedWithRightMouseButton = false;
    let mouseButton = 0;
    let prevTransform = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const panKeyPressed = useKeyPress(panActivationKeyCode);
    const selectionKeyPressed = useKeyPress(selectionKeyCode);
    const zoomKeyPressed = useKeyPress(zoomActivationKeyCode);
    const shouldPanOnDrag = toRef(
      () => (!selectionKeyPressed.value || selectionKeyPressed.value && selectionKeyCode.value === true) && (panKeyPressed.value || panOnDrag.value)
    );
    const shouldPanOnScroll = toRef(() => panKeyPressed.value || panOnScroll.value);
    const shouldSelectOnDrag = toRef(() => selectionKeyCode.value === true && shouldPanOnDrag.value !== true);
    const isSelecting = toRef(
      () => selectionKeyPressed.value && selectionKeyCode.value !== true || userSelectionActive.value || shouldSelectOnDrag.value
    );
    const connectionInProgress = toRef(() => connectionStartHandle.value !== null);
    onMounted(() => {
      if (!viewportRef.value) {
        warn("Viewport element is missing");
        return;
      }
      const viewportElement = viewportRef.value;
      const bbox = viewportElement.getBoundingClientRect();
      const d3Zoom = zoom$1().clickDistance(paneClickDistance.value).scaleExtent([minZoom.value, maxZoom.value]).translateExtent(translateExtent.value);
      const d3Selection = select$1(viewportElement).call(d3Zoom);
      const d3ZoomHandler = d3Selection.on("wheel.zoom");
      const updatedTransform = identity$2.translate(defaultViewport.value.x ?? 0, defaultViewport.value.y ?? 0).scale(clamp(defaultViewport.value.zoom ?? 1, minZoom.value, maxZoom.value));
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = d3Zoom.constrain()(updatedTransform, extent, translateExtent.value);
      d3Zoom.transform(d3Selection, constrainedTransform);
      d3Zoom.wheelDelta(wheelDelta);
      storeD3Zoom.value = d3Zoom;
      storeD3Selection.value = d3Selection;
      storeD3ZoomHandler.value = d3ZoomHandler;
      viewport.value = { x: constrainedTransform.x, y: constrainedTransform.y, zoom: constrainedTransform.k };
      d3Zoom.on("start", (event) => {
        var _a;
        if (!event.sourceEvent) {
          return null;
        }
        mouseButton = event.sourceEvent.button;
        isZoomingOrPanning.value = true;
        const flowTransform = eventToFlowTransform(event.transform);
        if (((_a = event.sourceEvent) == null ? void 0 : _a.type) === "mousedown") {
          paneDragging.value = true;
        }
        prevTransform = flowTransform;
        emits.viewportChangeStart(flowTransform);
        emits.moveStart({ event, flowTransform });
      });
      d3Zoom.on("end", (event) => {
        if (!event.sourceEvent) {
          return null;
        }
        isZoomingOrPanning.value = false;
        paneDragging.value = false;
        if (isRightClickPan(shouldPanOnDrag.value, mouseButton ?? 0) && !zoomedWithRightMouseButton) {
          emits.paneContextMenu(event.sourceEvent);
        }
        zoomedWithRightMouseButton = false;
        if (viewChanged(prevTransform, event.transform)) {
          const flowTransform = eventToFlowTransform(event.transform);
          prevTransform = flowTransform;
          emits.viewportChangeEnd(flowTransform);
          emits.moveEnd({ event, flowTransform });
        }
      });
      d3Zoom.filter((event) => {
        var _a;
        const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
        const pinchZoom = zoomOnPinch.value && event.ctrlKey;
        const eventButton = event.button;
        const isWheelEvent = event.type === "wheel";
        if (eventButton === 1 && event.type === "mousedown" && (isWrappedWithClass(event, "vue-flow__node") || isWrappedWithClass(event, "vue-flow__edge"))) {
          return true;
        }
        if (!shouldPanOnDrag.value && !zoomScroll && !shouldPanOnScroll.value && !zoomOnDoubleClick.value && !zoomOnPinch.value) {
          return false;
        }
        if (userSelectionActive.value) {
          return false;
        }
        if (connectionInProgress.value && !isWheelEvent) {
          return false;
        }
        if (!zoomOnDoubleClick.value && event.type === "dblclick") {
          return false;
        }
        if (isWrappedWithClass(event, noWheelClassName.value) && isWheelEvent) {
          return false;
        }
        if (isWrappedWithClass(event, noPanClassName.value) && (!isWheelEvent || shouldPanOnScroll.value && isWheelEvent && !zoomKeyPressed.value)) {
          return false;
        }
        if (!zoomOnPinch.value && event.ctrlKey && isWheelEvent) {
          return false;
        }
        if (!zoomScroll && !shouldPanOnScroll.value && !pinchZoom && isWheelEvent) {
          return false;
        }
        if (!zoomOnPinch && event.type === "touchstart" && ((_a = event.touches) == null ? void 0 : _a.length) > 1) {
          event.preventDefault();
          return false;
        }
        if (!shouldPanOnDrag.value && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        if (shouldSelectOnDrag.value && Array.isArray(panOnDrag.value) && panOnDrag.value.includes(0) && eventButton === 0) {
          return false;
        }
        if (Array.isArray(panOnDrag.value) && !panOnDrag.value.includes(eventButton) && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        const buttonAllowed = Array.isArray(panOnDrag.value) && panOnDrag.value.includes(eventButton) || selectionKeyCode.value === true && Array.isArray(panOnDrag.value) && !panOnDrag.value.includes(0) || !eventButton || eventButton <= 1;
        return (!event.ctrlKey || panKeyPressed.value || isWheelEvent) && buttonAllowed;
      });
      watch(
        [userSelectionActive, shouldPanOnDrag],
        () => {
          if (userSelectionActive.value && !isZoomingOrPanning.value) {
            d3Zoom.on("zoom", null);
          } else if (!userSelectionActive.value) {
            d3Zoom.on("zoom", (event) => {
              viewport.value = { x: event.transform.x, y: event.transform.y, zoom: event.transform.k };
              const flowTransform = eventToFlowTransform(event.transform);
              zoomedWithRightMouseButton = isRightClickPan(shouldPanOnDrag.value, mouseButton ?? 0);
              emits.viewportChange(flowTransform);
              emits.move({ event, flowTransform });
            });
          }
        },
        { immediate: true }
      );
      watch(
        [userSelectionActive, shouldPanOnScroll, panOnScrollMode, zoomKeyPressed, zoomOnPinch, preventScrolling, noWheelClassName],
        () => {
          if (shouldPanOnScroll.value && !zoomKeyPressed.value && !userSelectionActive.value) {
            d3Selection.on(
              "wheel.zoom",
              (event) => {
                if (isWrappedWithClass(event, noWheelClassName.value)) {
                  return false;
                }
                const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
                const pinchZoom = zoomOnPinch.value && event.ctrlKey;
                const scrollEventEnabled = !preventScrolling.value || shouldPanOnScroll.value || zoomScroll || pinchZoom;
                if (!scrollEventEnabled) {
                  return false;
                }
                event.preventDefault();
                event.stopImmediatePropagation();
                const currentZoom = d3Selection.property("__zoom").k || 1;
                const _isMacOs = isMacOs();
                if (!panKeyPressed.value && event.ctrlKey && zoomOnPinch.value && _isMacOs) {
                  const point = pointer$1(event);
                  const pinchDelta = wheelDelta(event);
                  const zoom2 = currentZoom * 2 ** pinchDelta;
                  d3Zoom.scaleTo(d3Selection, zoom2, point, event);
                  return;
                }
                const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
                let deltaX = panOnScrollMode.value === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
                let deltaY = panOnScrollMode.value === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
                if (!_isMacOs && event.shiftKey && panOnScrollMode.value !== PanOnScrollMode.Vertical && !deltaX && deltaY) {
                  deltaX = deltaY;
                  deltaY = 0;
                }
                d3Zoom.translateBy(
                  d3Selection,
                  -(deltaX / currentZoom) * panOnScrollSpeed.value,
                  -(deltaY / currentZoom) * panOnScrollSpeed.value
                );
                const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
                if (panScrollTimeout) {
                  clearTimeout(panScrollTimeout);
                }
                if (!isPanScrolling.value) {
                  isPanScrolling.value = true;
                  emits.moveStart({ event, flowTransform: nextViewport });
                  emits.viewportChangeStart(nextViewport);
                } else {
                  emits.move({ event, flowTransform: nextViewport });
                  emits.viewportChange(nextViewport);
                  panScrollTimeout = setTimeout(() => {
                    emits.moveEnd({ event, flowTransform: nextViewport });
                    emits.viewportChangeEnd(nextViewport);
                    isPanScrolling.value = false;
                  }, 150);
                }
              },
              { passive: false }
            );
          } else if (typeof d3ZoomHandler !== "undefined") {
            d3Selection.on(
              "wheel.zoom",
              function(event, d) {
                const invalidEvent = !preventScrolling.value && event.type === "wheel" && !event.ctrlKey;
                const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
                const pinchZoom = zoomOnPinch.value && event.ctrlKey;
                const scrollEventsDisabled = !zoomScroll && !panOnScroll.value && !pinchZoom && event.type === "wheel";
                if (scrollEventsDisabled || invalidEvent || isWrappedWithClass(event, noWheelClassName.value)) {
                  return null;
                }
                event.preventDefault();
                d3ZoomHandler.call(this, event, d);
              },
              { passive: false }
            );
          }
        },
        { immediate: true }
      );
    });
    function isRightClickPan(pan, usedButton) {
      return usedButton === 2 && Array.isArray(pan) && pan.includes(2);
    }
    function viewChanged(prevViewport, eventTransform) {
      return prevViewport.x !== eventTransform.x && !Number.isNaN(eventTransform.x) || prevViewport.y !== eventTransform.y && !Number.isNaN(eventTransform.y) || prevViewport.zoom !== eventTransform.k && !Number.isNaN(eventTransform.k);
    }
    function eventToFlowTransform(eventTransform) {
      return {
        x: eventTransform.x,
        y: eventTransform.y,
        zoom: eventTransform.k
      };
    }
    function isWrappedWithClass(event, className) {
      return event.target.closest(`.${className}`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "viewportRef",
        ref: viewportRef,
        class: "vue-flow__viewport vue-flow__container"
      }, [
        createVNode(_sfc_main$a$1, {
          "is-selecting": isSelecting.value,
          "selection-key-pressed": unref(selectionKeyPressed),
          class: normalizeClass({
            connecting: connectionInProgress.value,
            dragging: unref(paneDragging),
            draggable: unref(panOnDrag) === true || Array.isArray(unref(panOnDrag)) && unref(panOnDrag).includes(0)
          })
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9$1, null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["is-selecting", "selection-key-pressed", "class"])
      ], 512);
    };
  }
});
const _hoisted_1$5$1 = ["id"];
const _hoisted_2$d = ["id"];
const _hoisted_3$d = ["id"];
const __default__$7 = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
};
const _sfc_main$7$1 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const { id: id2, disableKeyboardA11y, ariaLiveMessage } = useVueFlow();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          id: `${unref(ARIA_NODE_DESC_KEY)}-${unref(id2)}`,
          style: { "display": "none" }
        }, " Press enter or space to select a node. " + toDisplayString(!unref(disableKeyboardA11y) ? "You can then use the arrow keys to move the node around." : "") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, _hoisted_1$5$1),
        createBaseVNode("div", {
          id: `${unref(ARIA_EDGE_DESC_KEY)}-${unref(id2)}`,
          style: { "display": "none" }
        }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, _hoisted_2$d),
        !unref(disableKeyboardA11y) ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: `${unref(ARIA_LIVE_MESSAGE)}-${unref(id2)}`,
          "aria-live": "assertive",
          "aria-atomic": "true",
          style: { "position": "absolute", "width": "1px", "height": "1px", "margin": "-1px", "border": "0", "padding": "0", "overflow": "hidden", "clip": "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
        }, toDisplayString(unref(ariaLiveMessage)), 9, _hoisted_3$d)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
function useOnInitHandler() {
  const vfInstance = useVueFlow();
  watch(
    () => vfInstance.viewportHelper.value.viewportInitialized,
    (isInitialized) => {
      if (isInitialized) {
        setTimeout(() => {
          vfInstance.emits.init(vfInstance);
          vfInstance.emits.paneReady(vfInstance);
        }, 1);
      }
    }
  );
}
function shiftX(x, shift, position) {
  if (position === Position.Left) {
    return x - shift;
  }
  if (position === Position.Right) {
    return x + shift;
  }
  return x;
}
function shiftY(y, shift, position) {
  if (position === Position.Top) {
    return y - shift;
  }
  if (position === Position.Bottom) {
    return y + shift;
  }
  return y;
}
const EdgeAnchor = function({
  radius = 10,
  centerX = 0,
  centerY = 0,
  position = Position.Top,
  type
}) {
  return h("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${type}`,
    cx: shiftX(centerX, radius, position),
    cy: shiftY(centerY, radius, position),
    r: radius,
    stroke: "transparent",
    fill: "transparent"
  });
};
EdgeAnchor.props = ["radius", "centerX", "centerY", "position", "type"];
EdgeAnchor.compatConfig = { MODE: 3 };
const EdgeAnchor$1 = EdgeAnchor;
const EdgeWrapper = defineComponent({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["id"],
  setup(props) {
    const {
      id: vueFlowId,
      addSelectedEdges,
      connectionMode,
      edgeUpdaterRadius,
      emits,
      nodesSelectionActive,
      noPanClassName,
      getEdgeTypes,
      removeSelectedEdges,
      findEdge,
      findNode,
      isValidConnection,
      multiSelectionActive,
      disableKeyboardA11y,
      elementsSelectable,
      edgesUpdatable,
      edgesFocusable,
      hooks
    } = useVueFlow();
    const edge = computed(() => findEdge(props.id));
    const { emit, on: on2 } = useEdgeHooks(edge.value, emits);
    const slots = inject(Slots$1);
    const instance = getCurrentInstance();
    const mouseOver = ref(false);
    const updating = ref(false);
    const nodeId2 = ref("");
    const handleId = ref(null);
    const edgeUpdaterType = ref("source");
    const edgeEl = ref(null);
    const isSelectable = toRef(
      () => typeof edge.value.selectable === "undefined" ? elementsSelectable.value : edge.value.selectable
    );
    const isUpdatable = toRef(() => typeof edge.value.updatable === "undefined" ? edgesUpdatable.value : edge.value.updatable);
    const isFocusable = toRef(() => typeof edge.value.focusable === "undefined" ? edgesFocusable.value : edge.value.focusable);
    provide(EdgeId, props.id);
    provide(EdgeRef, edgeEl);
    const edgeClass = computed(() => edge.value.class instanceof Function ? edge.value.class(edge.value) : edge.value.class);
    const edgeStyle = computed(() => edge.value.style instanceof Function ? edge.value.style(edge.value) : edge.value.style);
    const edgeCmp = computed(() => {
      const name = edge.value.type || "default";
      const slot = slots == null ? void 0 : slots[`edge-${name}`];
      if (slot) {
        return slot;
      }
      let edgeType = edge.value.template ?? getEdgeTypes.value[name];
      if (typeof edgeType === "string") {
        if (instance) {
          const components = Object.keys(instance.appContext.components);
          if (components && components.includes(name)) {
            edgeType = resolveComponent(name, false);
          }
        }
      }
      if (edgeType && typeof edgeType !== "string") {
        return edgeType;
      }
      emits.error(new VueFlowError(ErrorCode.EDGE_TYPE_MISSING, edgeType));
      return false;
    });
    const { handlePointerDown } = useHandle({
      nodeId: nodeId2,
      handleId,
      type: edgeUpdaterType,
      isValidConnection,
      edgeUpdaterType,
      onEdgeUpdate,
      onEdgeUpdateEnd
    });
    return () => {
      const sourceNode = findNode(edge.value.source);
      const targetNode = findNode(edge.value.target);
      const pathOptions = "pathOptions" in edge.value ? edge.value.pathOptions : {};
      if (!sourceNode && !targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge.value.id, edge.value.source, edge.value.target));
        return null;
      }
      if (!sourceNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge.value.id, edge.value.source));
        return null;
      }
      if (!targetNode) {
        emits.error(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge.value.id, edge.value.target));
        return null;
      }
      if (!edge.value || edge.value.hidden || sourceNode.hidden || targetNode.hidden) {
        return null;
      }
      let sourceNodeHandles;
      if (connectionMode.value === ConnectionMode.Strict) {
        sourceNodeHandles = sourceNode.handleBounds.source;
      } else {
        sourceNodeHandles = [...sourceNode.handleBounds.source || [], ...sourceNode.handleBounds.target || []];
      }
      const sourceHandle = getEdgeHandle(sourceNodeHandles, edge.value.sourceHandle);
      let targetNodeHandles;
      if (connectionMode.value === ConnectionMode.Strict) {
        targetNodeHandles = targetNode.handleBounds.target;
      } else {
        targetNodeHandles = [...targetNode.handleBounds.target || [], ...targetNode.handleBounds.source || []];
      }
      const targetHandle = getEdgeHandle(targetNodeHandles, edge.value.targetHandle);
      const sourcePosition = (sourceHandle == null ? void 0 : sourceHandle.position) || Position.Bottom;
      const targetPosition = (targetHandle == null ? void 0 : targetHandle.position) || Position.Top;
      const { x: sourceX, y: sourceY } = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
      const { x: targetX, y: targetY } = getHandlePosition(targetNode, targetHandle, targetPosition);
      edge.value.sourceX = sourceX;
      edge.value.sourceY = sourceY;
      edge.value.targetX = targetX;
      edge.value.targetY = targetY;
      return h(
        "g",
        {
          "ref": edgeEl,
          "key": props.id,
          "data-id": props.id,
          "class": [
            "vue-flow__edge",
            `vue-flow__edge-${edgeCmp.value === false ? "default" : edge.value.type || "default"}`,
            noPanClassName.value,
            edgeClass.value,
            {
              updating: mouseOver.value,
              selected: edge.value.selected,
              animated: edge.value.animated,
              inactive: !isSelectable.value && !hooks.value.edgeClick.hasListeners()
            }
          ],
          "tabIndex": isFocusable.value ? 0 : void 0,
          "aria-label": edge.value.ariaLabel === null ? void 0 : edge.value.ariaLabel ?? `Edge from ${edge.value.source} to ${edge.value.target}`,
          "aria-describedby": isFocusable.value ? `${ARIA_EDGE_DESC_KEY}-${vueFlowId}` : void 0,
          "aria-roledescription": "edge",
          "role": isFocusable.value ? "group" : "img",
          ...edge.value.domAttributes,
          "onClick": onEdgeClick,
          "onContextmenu": onEdgeContextMenu,
          "onDblclick": onDoubleClick,
          "onMouseenter": onEdgeMouseEnter,
          "onMousemove": onEdgeMouseMove,
          "onMouseleave": onEdgeMouseLeave,
          "onKeyDown": isFocusable.value ? onKeyDown : void 0
        },
        [
          updating.value ? null : h(edgeCmp.value === false ? getEdgeTypes.value.default : edgeCmp.value, {
            id: props.id,
            sourceNode,
            targetNode,
            source: edge.value.source,
            target: edge.value.target,
            type: edge.value.type,
            updatable: isUpdatable.value,
            selected: edge.value.selected,
            animated: edge.value.animated,
            label: edge.value.label,
            labelStyle: edge.value.labelStyle,
            labelShowBg: edge.value.labelShowBg,
            labelBgStyle: edge.value.labelBgStyle,
            labelBgPadding: edge.value.labelBgPadding,
            labelBgBorderRadius: edge.value.labelBgBorderRadius,
            data: edge.value.data,
            events: { ...edge.value.events, ...on2 },
            style: edgeStyle.value,
            markerStart: `url('#${getMarkerId(edge.value.markerStart, vueFlowId)}')`,
            markerEnd: `url('#${getMarkerId(edge.value.markerEnd, vueFlowId)}')`,
            sourcePosition,
            targetPosition,
            sourceX,
            sourceY,
            targetX,
            targetY,
            sourceHandleId: edge.value.sourceHandle,
            targetHandleId: edge.value.targetHandle,
            interactionWidth: edge.value.interactionWidth,
            ...pathOptions
          }),
          [
            isUpdatable.value === "source" || isUpdatable.value === true ? [
              h(
                "g",
                {
                  onMousedown: onEdgeUpdaterSourceMouseDown,
                  onMouseenter: onEdgeUpdaterMouseEnter,
                  onMouseout: onEdgeUpdaterMouseOut
                },
                h(EdgeAnchor$1, {
                  "position": sourcePosition,
                  "centerX": sourceX,
                  "centerY": sourceY,
                  "radius": edgeUpdaterRadius.value,
                  "type": "source",
                  "data-type": "source"
                })
              )
            ] : null,
            isUpdatable.value === "target" || isUpdatable.value === true ? [
              h(
                "g",
                {
                  onMousedown: onEdgeUpdaterTargetMouseDown,
                  onMouseenter: onEdgeUpdaterMouseEnter,
                  onMouseout: onEdgeUpdaterMouseOut
                },
                h(EdgeAnchor$1, {
                  "position": targetPosition,
                  "centerX": targetX,
                  "centerY": targetY,
                  "radius": edgeUpdaterRadius.value,
                  "type": "target",
                  "data-type": "target"
                })
              )
            ] : null
          ]
        ]
      );
    };
    function onEdgeUpdaterMouseEnter() {
      mouseOver.value = true;
    }
    function onEdgeUpdaterMouseOut() {
      mouseOver.value = false;
    }
    function onEdgeUpdate(event, connection) {
      emit.update({ event, edge: edge.value, connection });
    }
    function onEdgeUpdateEnd(event) {
      emit.updateEnd({ event, edge: edge.value });
      updating.value = false;
    }
    function handleEdgeUpdater(event, isSourceHandle) {
      if (event.button !== 0) {
        return;
      }
      updating.value = true;
      nodeId2.value = isSourceHandle ? edge.value.target : edge.value.source;
      handleId.value = (isSourceHandle ? edge.value.targetHandle : edge.value.sourceHandle) ?? null;
      edgeUpdaterType.value = isSourceHandle ? "target" : "source";
      emit.updateStart({ event, edge: edge.value });
      handlePointerDown(event);
    }
    function onEdgeClick(event) {
      var _a;
      const data = { event, edge: edge.value };
      if (isSelectable.value) {
        nodesSelectionActive.value = false;
        if (edge.value.selected && multiSelectionActive.value) {
          removeSelectedEdges([edge.value]);
          (_a = edgeEl.value) == null ? void 0 : _a.blur();
        } else {
          addSelectedEdges([edge.value]);
        }
      }
      emit.click(data);
    }
    function onEdgeContextMenu(event) {
      emit.contextMenu({ event, edge: edge.value });
    }
    function onDoubleClick(event) {
      emit.doubleClick({ event, edge: edge.value });
    }
    function onEdgeMouseEnter(event) {
      emit.mouseEnter({ event, edge: edge.value });
    }
    function onEdgeMouseMove(event) {
      emit.mouseMove({ event, edge: edge.value });
    }
    function onEdgeMouseLeave(event) {
      emit.mouseLeave({ event, edge: edge.value });
    }
    function onEdgeUpdaterSourceMouseDown(event) {
      handleEdgeUpdater(event, true);
    }
    function onEdgeUpdaterTargetMouseDown(event) {
      handleEdgeUpdater(event, false);
    }
    function onKeyDown(event) {
      var _a;
      if (!disableKeyboardA11y.value && elementSelectionKeys.includes(event.key) && isSelectable.value) {
        const unselect = event.key === "Escape";
        if (unselect) {
          (_a = edgeEl.value) == null ? void 0 : _a.blur();
          removeSelectedEdges([findEdge(props.id)]);
        } else {
          addSelectedEdges([findEdge(props.id)]);
        }
      }
    }
  }
});
const EdgeWrapper$1 = EdgeWrapper;
const ConnectionLine = defineComponent({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var _a;
    const {
      id: id2,
      connectionMode,
      connectionStartHandle,
      connectionEndHandle,
      connectionPosition,
      connectionLineType,
      connectionLineStyle,
      connectionLineOptions,
      connectionStatus,
      viewport,
      findNode
    } = useVueFlow();
    const connectionLineComponent = (_a = inject(Slots$1)) == null ? void 0 : _a["connection-line"];
    const fromNode = computed(() => {
      var _a2;
      return findNode((_a2 = connectionStartHandle.value) == null ? void 0 : _a2.nodeId);
    });
    const toNode = computed(() => {
      var _a2;
      return findNode((_a2 = connectionEndHandle.value) == null ? void 0 : _a2.nodeId) ?? null;
    });
    const toXY = computed(() => {
      return {
        x: (connectionPosition.value.x - viewport.value.x) / viewport.value.zoom,
        y: (connectionPosition.value.y - viewport.value.y) / viewport.value.zoom
      };
    });
    const markerStart = computed(
      () => connectionLineOptions.value.markerStart ? `url(#${getMarkerId(connectionLineOptions.value.markerStart, id2)})` : ""
    );
    const markerEnd = computed(
      () => connectionLineOptions.value.markerEnd ? `url(#${getMarkerId(connectionLineOptions.value.markerEnd, id2)})` : ""
    );
    return () => {
      var _a2, _b, _c;
      if (!fromNode.value || !connectionStartHandle.value) {
        return null;
      }
      const startHandleId = connectionStartHandle.value.id;
      const handleType = connectionStartHandle.value.type;
      const fromHandleBounds = fromNode.value.handleBounds;
      let handleBounds = (fromHandleBounds == null ? void 0 : fromHandleBounds[handleType]) ?? [];
      if (connectionMode.value === ConnectionMode.Loose) {
        const oppositeBounds = (fromHandleBounds == null ? void 0 : fromHandleBounds[handleType === "source" ? "target" : "source"]) ?? [];
        handleBounds = [...handleBounds, ...oppositeBounds];
      }
      if (!handleBounds) {
        return null;
      }
      const fromHandle = (startHandleId ? handleBounds.find((d) => d.id === startHandleId) : handleBounds[0]) ?? null;
      const fromPosition = (fromHandle == null ? void 0 : fromHandle.position) ?? Position.Top;
      const { x: fromX, y: fromY } = getHandlePosition(fromNode.value, fromHandle, fromPosition);
      let toHandle = null;
      if (toNode.value) {
        if (connectionMode.value === ConnectionMode.Strict) {
          toHandle = ((_a2 = toNode.value.handleBounds[handleType === "source" ? "target" : "source"]) == null ? void 0 : _a2.find(
            (d) => {
              var _a3;
              return d.id === ((_a3 = connectionEndHandle.value) == null ? void 0 : _a3.id);
            }
          )) || null;
        } else {
          toHandle = ((_b = [...toNode.value.handleBounds.source ?? [], ...toNode.value.handleBounds.target ?? []]) == null ? void 0 : _b.find(
            (d) => {
              var _a3;
              return d.id === ((_a3 = connectionEndHandle.value) == null ? void 0 : _a3.id);
            }
          )) || null;
        }
      }
      const toPosition = ((_c = connectionEndHandle.value) == null ? void 0 : _c.position) ?? (fromPosition ? oppositePosition[fromPosition] : null);
      if (!fromPosition || !toPosition) {
        return null;
      }
      const type = connectionLineType.value ?? connectionLineOptions.value.type ?? ConnectionLineType.Bezier;
      let dAttr = "";
      const pathParams = {
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: fromPosition,
        targetX: toXY.value.x,
        targetY: toXY.value.y,
        targetPosition: toPosition
      };
      if (type === ConnectionLineType.Bezier) {
        [dAttr] = getBezierPath(pathParams);
      } else if (type === ConnectionLineType.Step) {
        [dAttr] = getSmoothStepPath({
          ...pathParams,
          borderRadius: 0
        });
      } else if (type === ConnectionLineType.SmoothStep) {
        [dAttr] = getSmoothStepPath(pathParams);
      } else if (type === ConnectionLineType.SimpleBezier) {
        [dAttr] = getSimpleBezierPath(pathParams);
      } else {
        dAttr = `M${fromX},${fromY} ${toXY.value.x},${toXY.value.y}`;
      }
      return h(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        h(
          "g",
          { class: "vue-flow__connection" },
          connectionLineComponent ? h(connectionLineComponent, {
            sourceX: fromX,
            sourceY: fromY,
            sourcePosition: fromPosition,
            targetX: toXY.value.x,
            targetY: toXY.value.y,
            targetPosition: toPosition,
            sourceNode: fromNode.value,
            sourceHandle: fromHandle,
            targetNode: toNode.value,
            targetHandle: toHandle,
            markerEnd: markerEnd.value,
            markerStart: markerStart.value,
            connectionStatus: connectionStatus.value
          }) : h("path", {
            "d": dAttr,
            "class": [connectionLineOptions.value.class, connectionStatus.value, "vue-flow__connection-path"],
            "style": {
              ...connectionLineStyle.value,
              ...connectionLineOptions.value.style
            },
            "marker-end": markerEnd.value,
            "marker-start": markerStart.value
          })
        )
      );
    };
  }
});
const ConnectionLine$1 = ConnectionLine;
const _hoisted_1$4$1 = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"];
const __default__$6 = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
};
const _sfc_main$6$1 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    id: {},
    type: {},
    color: { default: "none" },
    width: { default: 12.5 },
    height: { default: 12.5 },
    markerUnits: { default: "strokeWidth" },
    orient: { default: "auto-start-reverse" },
    strokeWidth: { default: 1 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("marker", {
        id: _ctx.id,
        class: "vue-flow__arrowhead",
        viewBox: "-10 -10 20 20",
        refX: "0",
        refY: "0",
        markerWidth: `${_ctx.width}`,
        markerHeight: `${_ctx.height}`,
        markerUnits: _ctx.markerUnits,
        orient: _ctx.orient
      }, [
        _ctx.type === unref(MarkerType).ArrowClosed ? (openBlock(), createElementBlock("polyline", {
          key: 0,
          style: normalizeStyle({
            stroke: _ctx.color,
            fill: _ctx.color,
            strokeWidth: _ctx.strokeWidth
          }),
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          points: "-5,-4 0,0 -5,4 -5,-4"
        }, null, 4)) : createCommentVNode("", true),
        _ctx.type === unref(MarkerType).Arrow ? (openBlock(), createElementBlock("polyline", {
          key: 1,
          style: normalizeStyle({
            stroke: _ctx.color,
            strokeWidth: _ctx.strokeWidth
          }),
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          fill: "none",
          points: "-5,-4 0,0 -5,4"
        }, null, 4)) : createCommentVNode("", true)
      ], 8, _hoisted_1$4$1);
    };
  }
});
const _hoisted_1$3$1 = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
};
const __default__$5 = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
};
const _sfc_main$5$1 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    const { id: vueFlowId, edges: edges2, connectionLineOptions, defaultMarkerColor: defaultColor } = useVueFlow();
    const markers = computed(() => {
      const ids = /* @__PURE__ */ new Set();
      const markers2 = [];
      const createMarkers = (marker) => {
        if (marker) {
          const markerId = getMarkerId(marker, vueFlowId);
          if (!ids.has(markerId)) {
            if (typeof marker === "object") {
              markers2.push({ ...marker, id: markerId, color: marker.color || defaultColor.value });
            } else {
              markers2.push({ id: markerId, color: defaultColor.value, type: marker });
            }
            ids.add(markerId);
          }
        }
      };
      for (const marker of [connectionLineOptions.value.markerEnd, connectionLineOptions.value.markerStart]) {
        createMarkers(marker);
      }
      for (const edge of edges2.value) {
        for (const marker of [edge.markerStart, edge.markerEnd]) {
          createMarkers(marker);
        }
      }
      return markers2.sort((a, b) => a.id.localeCompare(b.id));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$3$1, [
        createBaseVNode("defs", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(markers.value, (marker) => {
            return openBlock(), createBlock(_sfc_main$6$1, {
              id: marker.id,
              key: marker.id,
              type: marker.type,
              color: marker.color,
              width: marker.width,
              height: marker.height,
              markerUnits: marker.markerUnits,
              "stroke-width": marker.strokeWidth,
              orient: marker.orient
            }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]);
          }), 128))
        ])
      ]);
    };
  }
});
const __default__$4 = {
  name: "Edges",
  compatConfig: { MODE: 3 }
};
const _sfc_main$4$1 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    const { findNode, getEdges, elevateEdgesOnSelect } = useVueFlow();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$5$1),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getEdges), (edge) => {
          return openBlock(), createElementBlock("svg", {
            key: edge.id,
            class: "vue-flow__edges vue-flow__container",
            style: normalizeStyle({ zIndex: unref(getEdgeZIndex)(edge, unref(findNode), unref(elevateEdgesOnSelect)) })
          }, [
            createVNode(unref(EdgeWrapper$1), {
              id: edge.id
            }, null, 8, ["id"])
          ], 4);
        }), 128)),
        createVNode(unref(ConnectionLine$1))
      ], 64);
    };
  }
});
const NodeWrapper = defineComponent({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["id", "resizeObserver"],
  setup(props) {
    const {
      id: vueFlowId,
      noPanClassName,
      selectNodesOnDrag,
      nodesSelectionActive,
      multiSelectionActive,
      emits,
      removeSelectedNodes,
      addSelectedNodes,
      updateNodeDimensions,
      onUpdateNodeInternals,
      getNodeTypes,
      nodeExtent,
      elevateNodesOnSelect,
      disableKeyboardA11y,
      ariaLiveMessage,
      snapToGrid,
      snapGrid,
      nodeDragThreshold,
      nodesDraggable,
      elementsSelectable,
      nodesConnectable,
      nodesFocusable,
      hooks
    } = useVueFlow();
    const nodeElement = ref(null);
    provide(NodeRef, nodeElement);
    provide(NodeId, props.id);
    const slots = inject(Slots$1);
    const instance = getCurrentInstance();
    const updateNodePositions = useUpdateNodePositions();
    const { node, parentNode } = useNode(props.id);
    const { emit, on: on2 } = useNodeHooks(node, emits);
    const isDraggable = toRef(() => typeof node.draggable === "undefined" ? nodesDraggable.value : node.draggable);
    const isSelectable = toRef(() => typeof node.selectable === "undefined" ? elementsSelectable.value : node.selectable);
    const isConnectable = toRef(() => typeof node.connectable === "undefined" ? nodesConnectable.value : node.connectable);
    const isFocusable = toRef(() => typeof node.focusable === "undefined" ? nodesFocusable.value : node.focusable);
    const hasPointerEvents = computed(
      () => isSelectable.value || isDraggable.value || hooks.value.nodeClick.hasListeners() || hooks.value.nodeDoubleClick.hasListeners() || hooks.value.nodeMouseEnter.hasListeners() || hooks.value.nodeMouseMove.hasListeners() || hooks.value.nodeMouseLeave.hasListeners()
    );
    const isInit = toRef(() => !!node.dimensions.width && !!node.dimensions.height);
    const nodeCmp = computed(() => {
      const name = node.type || "default";
      const slot = slots == null ? void 0 : slots[`node-${name}`];
      if (slot) {
        return slot;
      }
      let nodeType = node.template || getNodeTypes.value[name];
      if (typeof nodeType === "string") {
        if (instance) {
          const components = Object.keys(instance.appContext.components);
          if (components && components.includes(name)) {
            nodeType = resolveComponent(name, false);
          }
        }
      }
      if (nodeType && typeof nodeType !== "string") {
        return nodeType;
      }
      emits.error(new VueFlowError(ErrorCode.NODE_TYPE_MISSING, nodeType));
      return false;
    });
    const dragging = useDrag({
      id: props.id,
      el: nodeElement,
      disabled: () => !isDraggable.value,
      selectable: isSelectable,
      dragHandle: () => node.dragHandle,
      onStart(event) {
        emit.dragStart(event);
      },
      onDrag(event) {
        emit.drag(event);
      },
      onStop(event) {
        emit.dragStop(event);
      },
      onClick(event) {
        onSelectNode(event);
      }
    });
    const getClass = computed(() => node.class instanceof Function ? node.class(node) : node.class);
    const getStyle = computed(() => {
      const styles = (node.style instanceof Function ? node.style(node) : node.style) || {};
      const width = node.width instanceof Function ? node.width(node) : node.width;
      const height = node.height instanceof Function ? node.height(node) : node.height;
      if (!styles.width && width) {
        styles.width = typeof width === "string" ? width : `${width}px`;
      }
      if (!styles.height && height) {
        styles.height = typeof height === "string" ? height : `${height}px`;
      }
      return styles;
    });
    const zIndex = toRef(() => Number(node.zIndex ?? getStyle.value.zIndex ?? 0));
    onUpdateNodeInternals((updateIds) => {
      if (updateIds.includes(props.id) || !updateIds.length) {
        updateInternals();
      }
    });
    onMounted(() => {
      watch(
        () => node.hidden,
        (isHidden = false, _, onCleanup) => {
          if (!isHidden && nodeElement.value) {
            props.resizeObserver.observe(nodeElement.value);
            onCleanup(() => {
              if (nodeElement.value) {
                props.resizeObserver.unobserve(nodeElement.value);
              }
            });
          }
        },
        { immediate: true, flush: "post" }
      );
    });
    watch([() => node.type, () => node.sourcePosition, () => node.targetPosition], () => {
      nextTick(() => {
        updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
      });
    });
    watch(
      [
        () => node.position.x,
        () => node.position.y,
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.x;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.y;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.computedPosition.z;
        },
        zIndex,
        () => node.selected,
        () => node.dimensions.height,
        () => node.dimensions.width,
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.dimensions.height;
        },
        () => {
          var _a;
          return (_a = parentNode.value) == null ? void 0 : _a.dimensions.width;
        }
      ],
      ([newX, newY, parentX, parentY, parentZ, nodeZIndex]) => {
        const xyzPos = {
          x: newX,
          y: newY,
          z: nodeZIndex + (elevateNodesOnSelect.value ? node.selected ? 1e3 : 0 : 0)
        };
        if (typeof parentX !== "undefined" && typeof parentY !== "undefined") {
          node.computedPosition = getXYZPos({ x: parentX, y: parentY, z: parentZ }, xyzPos);
        } else {
          node.computedPosition = xyzPos;
        }
      },
      { flush: "post", immediate: true }
    );
    watch([() => node.extent, nodeExtent], ([nodeExtent2, globalExtent], [oldNodeExtent, oldGlobalExtent]) => {
      if (nodeExtent2 !== oldNodeExtent || globalExtent !== oldGlobalExtent) {
        clampPosition2();
      }
    });
    if (node.extent === "parent" || typeof node.extent === "object" && "range" in node.extent && node.extent.range === "parent") {
      until(() => isInit).toBe(true).then(clampPosition2);
    } else {
      clampPosition2();
    }
    return () => {
      if (node.hidden) {
        return null;
      }
      return h(
        "div",
        {
          "ref": nodeElement,
          "data-id": node.id,
          "class": [
            "vue-flow__node",
            `vue-flow__node-${nodeCmp.value === false ? "default" : node.type || "default"}`,
            {
              [noPanClassName.value]: isDraggable.value,
              dragging: dragging == null ? void 0 : dragging.value,
              draggable: isDraggable.value,
              selected: node.selected,
              selectable: isSelectable.value,
              parent: node.isParent
            },
            getClass.value
          ],
          "style": {
            visibility: isInit.value ? "visible" : "hidden",
            zIndex: node.computedPosition.z ?? zIndex.value,
            transform: `translate(${node.computedPosition.x}px,${node.computedPosition.y}px)`,
            pointerEvents: hasPointerEvents.value ? "all" : "none",
            ...getStyle.value
          },
          "tabIndex": isFocusable.value ? 0 : void 0,
          "role": isFocusable.value ? "group" : void 0,
          "aria-describedby": disableKeyboardA11y.value ? void 0 : `${ARIA_NODE_DESC_KEY}-${vueFlowId}`,
          "aria-label": node.ariaLabel,
          "aria-roledescription": "node",
          ...node.domAttributes,
          "onMouseenter": onMouseEnter,
          "onMousemove": onMouseMove,
          "onMouseleave": onMouseLeave,
          "onContextmenu": onContextMenu,
          "onClick": onSelectNode,
          "onDblclick": onDoubleClick,
          "onKeydown": onKeyDown
        },
        [
          h(nodeCmp.value === false ? getNodeTypes.value.default : nodeCmp.value, {
            id: node.id,
            type: node.type,
            data: node.data,
            events: { ...node.events, ...on2 },
            selected: node.selected,
            resizing: node.resizing,
            dragging: dragging.value,
            connectable: isConnectable.value,
            position: node.computedPosition,
            dimensions: node.dimensions,
            isValidTargetPos: node.isValidTargetPos,
            isValidSourcePos: node.isValidSourcePos,
            parent: node.parentNode,
            parentNodeId: node.parentNode,
            zIndex: node.computedPosition.z ?? zIndex.value,
            targetPosition: node.targetPosition,
            sourcePosition: node.sourcePosition,
            label: node.label,
            dragHandle: node.dragHandle,
            onUpdateNodeInternals: updateInternals
          })
        ]
      );
    };
    function clampPosition2() {
      const nextPosition = node.computedPosition;
      const { computedPosition, position } = calcNextPosition(
        node,
        snapToGrid.value ? snapPosition(nextPosition, snapGrid.value) : nextPosition,
        emits.error,
        nodeExtent.value,
        parentNode.value
      );
      if (node.computedPosition.x !== computedPosition.x || node.computedPosition.y !== computedPosition.y) {
        node.computedPosition = { ...node.computedPosition, ...computedPosition };
      }
      if (node.position.x !== position.x || node.position.y !== position.y) {
        node.position = position;
      }
    }
    function updateInternals() {
      if (nodeElement.value) {
        updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
      }
    }
    function onMouseEnter(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseEnter({ event, node });
      }
    }
    function onMouseMove(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseMove({ event, node });
      }
    }
    function onMouseLeave(event) {
      if (!(dragging == null ? void 0 : dragging.value)) {
        emit.mouseLeave({ event, node });
      }
    }
    function onContextMenu(event) {
      return emit.contextMenu({ event, node });
    }
    function onDoubleClick(event) {
      return emit.doubleClick({ event, node });
    }
    function onSelectNode(event) {
      if (isSelectable.value && (!selectNodesOnDrag.value || !isDraggable.value || nodeDragThreshold.value > 0)) {
        handleNodeClick(
          node,
          multiSelectionActive.value,
          addSelectedNodes,
          removeSelectedNodes,
          nodesSelectionActive,
          false,
          nodeElement.value
        );
      }
      emit.click({ event, node });
    }
    function onKeyDown(event) {
      if (isInputDOMNode(event) || disableKeyboardA11y.value) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable.value) {
        const unselect = event.key === "Escape";
        handleNodeClick(
          node,
          multiSelectionActive.value,
          addSelectedNodes,
          removeSelectedNodes,
          nodesSelectionActive,
          unselect,
          nodeElement.value
        );
      } else if (isDraggable.value && node.selected && arrowKeyDiffs[event.key]) {
        event.preventDefault();
        ariaLiveMessage.value = `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~node.position.x}, y: ${~~node.position.y}`;
        updateNodePositions(
          {
            x: arrowKeyDiffs[event.key].x,
            y: arrowKeyDiffs[event.key].y
          },
          event.shiftKey
        );
      }
    }
  }
});
const NodeWrapper$1 = NodeWrapper;
const _hoisted_1$2$1 = {
  height: "0",
  width: "0"
};
const __default__$3 = {
  name: "EdgeLabelRenderer",
  compatConfig: { MODE: 3 }
};
const _sfc_main$3$1 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const { viewportRef } = useVueFlow();
    const teleportTarget = toRef(() => {
      var _a;
      return (_a = viewportRef.value) == null ? void 0 : _a.getElementsByClassName("vue-flow__edge-labels")[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", null, [
        (openBlock(), createElementBlock("foreignObject", _hoisted_1$2$1, [
          (openBlock(), createBlock(Teleport, {
            to: teleportTarget.value,
            disabled: !teleportTarget.value
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 8, ["to", "disabled"]))
        ]))
      ]);
    };
  }
});
function useNodesInitialized(options = { includeHiddenNodes: false }) {
  const { nodes: nodes2 } = useVueFlow();
  return computed(() => {
    if (nodes2.value.length === 0) {
      return false;
    }
    for (const node of nodes2.value) {
      if (options.includeHiddenNodes || !node.hidden) {
        if ((node == null ? void 0 : node.handleBounds) === void 0 || node.dimensions.width === 0 || node.dimensions.height === 0) {
          return false;
        }
      }
    }
    return true;
  });
}
const _hoisted_1$1$2 = { class: "vue-flow__nodes vue-flow__container" };
const __default__$2$1 = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
};
const _sfc_main$2$1 = /* @__PURE__ */ defineComponent({
  ...__default__$2$1,
  setup(__props) {
    const { getNodes, updateNodeDimensions, emits } = useVueFlow();
    const nodesInitialized = useNodesInitialized();
    const resizeObserver = ref();
    watch(
      nodesInitialized,
      (isInit) => {
        if (isInit) {
          nextTick(() => {
            emits.nodesInitialized(getNodes.value);
          });
        }
      },
      { immediate: true }
    );
    onMounted(() => {
      resizeObserver.value = new ResizeObserver((entries) => {
        const updates = entries.map((entry) => {
          const id2 = entry.target.getAttribute("data-id");
          return {
            id: id2,
            nodeElement: entry.target,
            forceUpdate: true
          };
        });
        nextTick(() => updateNodeDimensions(updates));
      });
    });
    onBeforeUnmount(() => {
      var _a;
      return (_a = resizeObserver.value) == null ? void 0 : _a.disconnect();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1$2, [
        resizeObserver.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(getNodes), (node, __, ___, _cached) => {
          const _memo = [node.id];
          if (_cached && _cached.key === node.id && isMemoSame(_cached, _memo))
            return _cached;
          const _item = (openBlock(), createBlock(unref(NodeWrapper$1), {
            id: node.id,
            key: node.id,
            "resize-observer": resizeObserver.value
          }, null, 8, ["id", "resize-observer"]));
          _item.memo = _memo;
          return _item;
        }, _cache, 0), 128)) : createCommentVNode("", true)
      ]);
    };
  }
});
function useStylesLoadedWarning() {
  const { emits } = useVueFlow();
  onMounted(() => {
    if (isDev()) {
      const pane = document.querySelector(".vue-flow__pane");
      if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
        emits.error(new VueFlowError(ErrorCode.MISSING_STYLES));
      }
    }
  });
}
const _hoisted_1$g = /* @__PURE__ */ createBaseVNode("div", { class: "vue-flow__edge-labels" }, null, -1);
const __default__$1$1 = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
};
const _sfc_main$1$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1$1,
  props: {
    id: {},
    modelValue: {},
    nodes: {},
    edges: {},
    edgeTypes: {},
    nodeTypes: {},
    connectionMode: {},
    connectionLineType: {},
    connectionLineStyle: { default: void 0 },
    connectionLineOptions: { default: void 0 },
    connectionRadius: {},
    isValidConnection: { type: [Function, null], default: void 0 },
    deleteKeyCode: { default: void 0 },
    selectionKeyCode: { type: [Boolean, null], default: void 0 },
    multiSelectionKeyCode: { default: void 0 },
    zoomActivationKeyCode: { default: void 0 },
    panActivationKeyCode: { default: void 0 },
    snapToGrid: { type: Boolean, default: void 0 },
    snapGrid: {},
    onlyRenderVisibleElements: { type: Boolean, default: void 0 },
    edgesUpdatable: { type: [Boolean, String], default: void 0 },
    nodesDraggable: { type: Boolean, default: void 0 },
    nodesConnectable: { type: Boolean, default: void 0 },
    nodeDragThreshold: {},
    elementsSelectable: { type: Boolean, default: void 0 },
    selectNodesOnDrag: { type: Boolean, default: void 0 },
    panOnDrag: { type: [Boolean, Array], default: void 0 },
    minZoom: {},
    maxZoom: {},
    defaultViewport: {},
    translateExtent: {},
    nodeExtent: {},
    defaultMarkerColor: {},
    zoomOnScroll: { type: Boolean, default: void 0 },
    zoomOnPinch: { type: Boolean, default: void 0 },
    panOnScroll: { type: Boolean, default: void 0 },
    panOnScrollSpeed: {},
    panOnScrollMode: {},
    paneClickDistance: {},
    zoomOnDoubleClick: { type: Boolean, default: void 0 },
    preventScrolling: { type: Boolean, default: void 0 },
    selectionMode: {},
    edgeUpdaterRadius: {},
    fitViewOnInit: { type: Boolean, default: void 0 },
    connectOnClick: { type: Boolean, default: void 0 },
    applyDefault: { type: Boolean, default: void 0 },
    autoConnect: { type: [Boolean, Function], default: void 0 },
    noDragClassName: {},
    noWheelClassName: {},
    noPanClassName: {},
    defaultEdgeOptions: {},
    elevateEdgesOnSelect: { type: Boolean, default: void 0 },
    elevateNodesOnSelect: { type: Boolean, default: void 0 },
    disableKeyboardA11y: { type: Boolean, default: void 0 },
    edgesFocusable: { type: Boolean, default: void 0 },
    nodesFocusable: { type: Boolean, default: void 0 },
    autoPanOnConnect: { type: Boolean, default: void 0 },
    autoPanOnNodeDrag: { type: Boolean, default: void 0 },
    autoPanSpeed: {}
  },
  emits: ["nodesChange", "edgesChange", "nodesInitialized", "paneReady", "init", "updateNodeInternals", "error", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeUpdate", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdateEnd", "nodeContextMenu", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeDoubleClick", "nodeClick", "nodeDragStart", "nodeDrag", "nodeDragStop", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "update:modelValue", "update:nodes", "update:edges"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const slots = useSlots();
    const modelValue = useVModel(props, "modelValue", emit);
    const modelNodes = useVModel(props, "nodes", emit);
    const modelEdges = useVModel(props, "edges", emit);
    const vfInstance = useVueFlow(props);
    const disposeWatchers = useWatchProps({ modelValue, nodes: modelNodes, edges: modelEdges }, props, vfInstance);
    useHooks(emit, vfInstance.hooks);
    useOnInitHandler();
    useStylesLoadedWarning();
    provide(Slots$1, slots);
    onUnmounted(disposeWatchers);
    __expose(vfInstance);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(vfInstance).vueFlowRef,
        class: "vue-flow"
      }, [
        createVNode(_sfc_main$8$1, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$4$1),
            _hoisted_1$g,
            createVNode(_sfc_main$2$1),
            renderSlot(_ctx.$slots, "zoom-pane")
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "default"),
        createVNode(_sfc_main$7$1)
      ], 512);
    };
  }
});
const __default__$g = {
  name: "Panel",
  compatConfig: { MODE: 3 }
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: {
    position: {}
  },
  setup(__props) {
    const props = __props;
    const { userSelectionActive } = useVueFlow();
    const positionClasses = computed(() => `${props.position}`.split("-"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vue-flow__panel", positionClasses.value]),
        style: normalizeStyle({ pointerEvents: unref(userSelectionActive) ? "none" : "all" })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
var BackgroundVariant = /* @__PURE__ */ ((BackgroundVariant2) => {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  return BackgroundVariant2;
})(BackgroundVariant || {});
const LinePattern = function({ dimensions, size, color: color2 }) {
  return h("path", {
    "stroke": color2,
    "stroke-width": size,
    "d": `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
  });
};
const DotPattern = function({ radius, color: color2 }) {
  return h("circle", { cx: radius, cy: radius, r: radius, fill: color2 });
};
({
  [BackgroundVariant.Lines]: LinePattern,
  [BackgroundVariant.Dots]: DotPattern
});
const DefaultBgColors = {
  [BackgroundVariant.Dots]: "#81818a",
  [BackgroundVariant.Lines]: "#eee"
};
const _hoisted_1$f = ["id", "x", "y", "width", "height", "patternTransform"];
const _hoisted_2$c = {
  key: 2,
  height: "100",
  width: "100"
};
const _hoisted_3$c = ["fill"];
const _hoisted_4$a = ["x", "y", "fill"];
const __default__$2 = {
  name: "Background",
  compatConfig: { MODE: 3 }
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    id: {},
    variant: { default: () => BackgroundVariant.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: {},
    color: {},
    bgColor: {},
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 0 }
  },
  setup(__props) {
    const { id: vueFlowId, viewport } = useVueFlow();
    const background = computed(() => {
      const zoom2 = viewport.value.zoom;
      const [gapX, gapY] = Array.isArray(__props.gap) ? __props.gap : [__props.gap, __props.gap];
      const scaledGap = [gapX * zoom2 || 1, gapY * zoom2 || 1];
      const scaledSize = __props.size * zoom2;
      const [offsetX, offsetY] = Array.isArray(__props.offset) ? __props.offset : [__props.offset, __props.offset];
      const scaledOffset = [offsetX * zoom2 || 1 + scaledGap[0] / 2, offsetY * zoom2 || 1 + scaledGap[1] / 2];
      return {
        scaledGap,
        offset: scaledOffset,
        size: scaledSize
      };
    });
    const patternId = toRef(() => `pattern-${vueFlowId}${__props.id ? `-${__props.id}` : ""}`);
    const patternColor = toRef(() => __props.color || __props.patternColor || DefaultBgColors[__props.variant || BackgroundVariant.Dots]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "vue-flow__background vue-flow__container",
        style: normalizeStyle({
          height: `${_ctx.height > 100 ? 100 : _ctx.height}%`,
          width: `${_ctx.width > 100 ? 100 : _ctx.width}%`
        })
      }, [
        renderSlot(_ctx.$slots, "pattern-container", { id: patternId.value }, () => [
          createBaseVNode("pattern", {
            id: patternId.value,
            x: unref(viewport).x % background.value.scaledGap[0],
            y: unref(viewport).y % background.value.scaledGap[1],
            width: background.value.scaledGap[0],
            height: background.value.scaledGap[1],
            patternTransform: `translate(-${background.value.offset[0]},-${background.value.offset[1]})`,
            patternUnits: "userSpaceOnUse"
          }, [
            renderSlot(_ctx.$slots, "pattern", {}, () => [
              _ctx.variant === unref(BackgroundVariant).Lines ? (openBlock(), createBlock(unref(LinePattern), {
                key: 0,
                size: _ctx.lineWidth,
                color: patternColor.value,
                dimensions: background.value.scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : _ctx.variant === unref(BackgroundVariant).Dots ? (openBlock(), createBlock(unref(DotPattern), {
                key: 1,
                color: patternColor.value,
                radius: background.value.size / 2
              }, null, 8, ["color", "radius"])) : createCommentVNode("", true),
              _ctx.bgColor ? (openBlock(), createElementBlock("svg", _hoisted_2$c, [
                createBaseVNode("rect", {
                  width: "100%",
                  height: "100%",
                  fill: _ctx.bgColor
                }, null, 8, _hoisted_3$c)
              ])) : createCommentVNode("", true)
            ])
          ], 8, _hoisted_1$f)
        ]),
        createBaseVNode("rect", {
          x: _ctx.x,
          y: _ctx.y,
          width: "100%",
          height: "100%",
          fill: `url(#${patternId.value})`
        }, null, 8, _hoisted_4$a),
        renderSlot(_ctx.$slots, "default", { id: patternId.value })
      ], 4);
    };
  }
});
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get$1(type, name) {
  for (var i = 0, n = type.length, c2; i < n; ++i) {
    if ((c2 = type[i]).name === name) {
      return c2.value;
    }
  }
}
function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function") select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function") select2 = arrayAll(select2);
  else select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select2.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection$1(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection$1(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$2(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant$2(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection$1(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}
function selection_size() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}
function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name, value) {
  var fullname = namespace(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function selection_style(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function selection_property(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
function textRemove() {
  this.textContent = "";
}
function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create2 = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on2 = this.__on;
    if (!on2) return;
    for (var j = 0, i = -1, m = on2.length, o; j < m; ++j) {
      if (o = on2[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on2[++i] = o;
      }
    }
    if (++i) on2.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on2 = this.__on, o, listener = contextListener(value);
    if (on2) for (var j = 0, m = on2.length; j < m; ++j) {
      if ((o = on2[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on2) this.__on = [o];
    else on2.push(o);
  };
}
function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on2 = this.node().__on;
    if (on2) for (var j = 0, m = on2.length, o; j < m; ++j) {
      for (i = 0, o = on2[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on2 = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on2(typenames[i], value, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}
var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
}
function sourceEvent(event) {
  let sourceEvent2;
  while (sourceEvent2 = event.sourceEvent) event = sourceEvent2;
  return event;
}
function pointer(event, node) {
  event = sourceEvent(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}
const nonpassivecapture = { capture: true, passive: false };
function noevent$1(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function dragDisable(view) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent$1, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent$1, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0) h2 = s = l = NaN;
  else if (l <= 0 || l >= 1) h2 = s = NaN;
  else if (s <= 0) h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h2 = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h2 = (g - b) / s + (g < b) * 6;
    else if (g === max) h2 = (b - r) / s + 2;
    else h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1 = (x) => () => x;
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}
const interpolateRgb = (function rgbGamma2(y) {
  var color2 = gamma(y);
  function rgb$12(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb$12.gamma = rgbGamma2;
  return rgb$12;
})(1);
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
var degrees = 180 / Math.PI;
var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose(a, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c2 + b * d) c2 -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d)) c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c2) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const interpolateZoom = (function zoomRho2(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom2.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho2(_1, _2, _4);
  };
  return zoom2;
})(Math.SQRT2, 2, 4);
var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
function timeout(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > CREATED) throw new Error("too late; already scheduled");
  return schedule2;
}
function set(node, id2) {
  var schedule2 = get(node, id2);
  if (schedule2.state > STARTED) throw new Error("too late; already running");
  return schedule2;
}
function get(node, id2) {
  var schedule2 = node.__transition;
  if (!schedule2 || !(schedule2 = schedule2[id2])) throw new Error("transition not found");
  return schedule2;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule2, 0, self2.time);
  function schedule2(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed) start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self2.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self2.name) continue;
      if (o.state === STARTED) return timeout(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING) return;
    self2.state = STARTED;
    tween = new Array(n = self2.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}
function interrupt(node, name) {
  var schedules = node.__transition, schedule2, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule2 = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule2.state > STARTING && schedule2.state < ENDING;
    schedule2.state = ENDED;
    schedule2.timer.stop();
    schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}
function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule2.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule2 = set(this, id2), tween = schedule2.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule2.tween = tween1;
  };
}
function transition_tween(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition, name, value) {
  var id2 = transition._id;
  transition.each(function() {
    var schedule2 = set(this, id2);
    (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}
function interpolate(a, b) {
  var c2;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c2 = color(b)) ? (b = c2, interpolateRgb) : interpolateString)(a, b);
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrConstantNS(fullname, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function attrFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function attrFunctionNS(fullname, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function transition_delay(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function transition_duration(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function transition_ease(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set(this, id2).ease = v;
  };
}
function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}
function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule2 = sit(this, id2), on2 = schedule2.on;
    if (on2 !== on0) (on1 = (on0 = on2).copy()).on(name, listener);
    schedule2.on = on1;
  };
}
function transition_on(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function") select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}
function transition_selectAll(select2) {
  var name = this._name, id2 = this._id;
  if (typeof select2 !== "function") select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}
var Selection = selection.prototype.constructor;
function transition_selection() {
  return new Selection(this._groups, this._parents);
}
function styleNull(name, interpolate2) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
  };
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, interpolate2, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
  };
}
function styleFunction(name, interpolate2, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule2 = set(this, id2), on2 = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
    if (on2 !== on0 || listener0 !== listener) (on1 = (on0 = on2).copy()).on(event, listener0 = listener);
    schedule2.on = on1;
  };
}
function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function transition_text(value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}
function transition_transition() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule2 = set(this, id2), on2 = schedule2.on;
      if (on2 !== on0) {
        on1 = (on0 = on2).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule2.on = on1;
    });
    if (size === 0) resolve();
  });
}
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function selection_transition(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
const constant = (x) => () => x;
function ZoomEvent(type, {
  sourceEvent: sourceEvent2,
  target,
  transform,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity = new Transform(1, 0, 0);
Transform.prototype;
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom() {
  var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule2(collection, transform, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k, p, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom2.scaleTo = function(selection2, k, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom2.translateBy = function(selection2, x, y, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x, y, p, event) {
    zoom2.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }
  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule2(transition, transform, point, event) {
    transition.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate2(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }
    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();
    function mousemoved(event2) {
      noevent(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule2, t1, p0, event);
    else select(this).call(zoom2.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant(+_), zoom2) : wheelDelta2;
  };
  zoom2.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant(!!_), zoom2) : filter2;
  };
  zoom2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom2) : touchable;
  };
  zoom2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom2) : constrain;
  };
  zoom2.duration = function(_) {
    return arguments.length ? (duration = +_, zoom2) : duration;
  };
  zoom2.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
  };
  return zoom2;
}
const Slots = /* @__PURE__ */ Symbol("MiniMapSlots");
const _hoisted_1$1$1 = ["id", "x", "y", "rx", "ry", "width", "height", "fill", "stroke", "stroke-width", "shape-rendering"];
const __default__$1 = {
  name: "MiniMapNode",
  compatConfig: { MODE: 3 },
  inheritAttrs: false
};
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    id: {},
    type: {},
    selected: { type: Boolean },
    dragging: { type: Boolean },
    position: {},
    dimensions: {},
    borderRadius: {},
    color: {},
    shapeRendering: {},
    strokeColor: {},
    strokeWidth: {},
    hidden: { type: Boolean }
  },
  emits: ["click", "dblclick", "mouseenter", "mousemove", "mouseleave"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const miniMapSlots = inject(Slots);
    const attrs = useAttrs();
    const style2 = toRef(() => attrs.style ?? {});
    function onClick(event) {
      emits("click", event);
    }
    function onDblclick(event) {
      emits("dblclick", event);
    }
    function onMouseEnter(event) {
      emits("mouseenter", event);
    }
    function onMouseMove(event) {
      emits("mousemove", event);
    }
    function onMouseLeave(event) {
      emits("mouseleave", event);
    }
    return (_ctx, _cache) => {
      return !_ctx.hidden && _ctx.dimensions.width !== 0 && _ctx.dimensions.height !== 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        unref(miniMapSlots)[`node-${props.type}`] ? (openBlock(), createBlock(resolveDynamicComponent(unref(miniMapSlots)[`node-${props.type}`]), normalizeProps(mergeProps({ key: 0 }, { ...props, ..._ctx.$attrs })), null, 16)) : (openBlock(), createElementBlock("rect", mergeProps({
          key: 1,
          id: _ctx.id
        }, _ctx.$attrs, {
          class: ["vue-flow__minimap-node", { selected: _ctx.selected, dragging: _ctx.dragging }],
          x: _ctx.position.x,
          y: _ctx.position.y,
          rx: _ctx.borderRadius,
          ry: _ctx.borderRadius,
          width: _ctx.dimensions.width,
          height: _ctx.dimensions.height,
          fill: _ctx.color || style2.value.background || style2.value.backgroundColor,
          stroke: _ctx.strokeColor,
          "stroke-width": _ctx.strokeWidth,
          "shape-rendering": _ctx.shapeRendering,
          onClick,
          onDblclick,
          onMouseenter: onMouseEnter,
          onMousemove: onMouseMove,
          onMouseleave: onMouseLeave
        }), null, 16, _hoisted_1$1$1))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$e = ["width", "height", "viewBox", "aria-labelledby"];
const _hoisted_2$b = ["id"];
const _hoisted_3$b = ["d", "fill", "stroke", "stroke-width"];
const __default__ = {
  name: "MiniMap",
  compatConfig: { MODE: 3 }
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    nodeColor: { type: [String, Function], default: "#e2e2e2" },
    nodeStrokeColor: { type: [String, Function], default: "transparent" },
    nodeClassName: { type: [String, Function] },
    nodeBorderRadius: { default: 5 },
    nodeStrokeWidth: { default: 2 },
    maskColor: { default: "rgb(240, 240, 240, 0.6)" },
    maskStrokeColor: { default: "none" },
    maskStrokeWidth: { default: 1 },
    position: { default: "bottom-right" },
    pannable: { type: Boolean, default: false },
    zoomable: { type: Boolean, default: false },
    width: {},
    height: {},
    ariaLabel: { default: "Vue Flow mini map" },
    inversePan: { type: Boolean, default: false },
    zoomStep: { default: 1 },
    offsetScale: { default: 5 },
    maskBorderRadius: { default: 0 }
  },
  emits: ["click", "nodeClick", "nodeDblclick", "nodeMouseenter", "nodeMousemove", "nodeMouseleave"],
  setup(__props, { emit }) {
    const slots = useSlots();
    const attrs = useAttrs();
    const defaultWidth = 200;
    const defaultHeight = 150;
    const { id: id2, edges: edges2, viewport, translateExtent, dimensions, emits, d3Selection, d3Zoom, getNodesInitialized } = useVueFlow();
    const el = ref();
    provide(Slots, slots);
    const elementWidth = toRef(() => {
      var _a;
      return __props.width ?? ((_a = attrs.style) == null ? void 0 : _a.width) ?? defaultWidth;
    });
    const elementHeight = toRef(() => {
      var _a;
      return __props.height ?? ((_a = attrs.style) == null ? void 0 : _a.height) ?? defaultHeight;
    });
    const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
    const nodeColorFunc = computed(() => typeof __props.nodeColor === "string" ? () => __props.nodeColor : __props.nodeColor);
    const nodeStrokeColorFunc = computed(
      () => typeof __props.nodeStrokeColor === "string" ? () => __props.nodeStrokeColor : __props.nodeStrokeColor
    );
    const nodeClassNameFunc = computed(
      () => typeof __props.nodeClassName === "string" ? () => __props.nodeClassName : typeof __props.nodeClassName === "function" ? __props.nodeClassName : () => ""
    );
    const bb = computed(() => getRectOfNodes(getNodesInitialized.value.filter((node) => !node.hidden)));
    const viewBB = computed(() => ({
      x: -viewport.value.x / viewport.value.zoom,
      y: -viewport.value.y / viewport.value.zoom,
      width: dimensions.value.width / viewport.value.zoom,
      height: dimensions.value.height / viewport.value.zoom
    }));
    const boundingRect = computed(
      () => getNodesInitialized.value && getNodesInitialized.value.length ? getBoundsofRects(bb.value, viewBB.value) : viewBB.value
    );
    const viewScale = computed(() => {
      const scaledWidth = boundingRect.value.width / elementWidth.value;
      const scaledHeight = boundingRect.value.height / elementHeight.value;
      return Math.max(scaledWidth, scaledHeight);
    });
    const viewBox = computed(() => {
      const viewWidth = viewScale.value * elementWidth.value;
      const viewHeight = viewScale.value * elementHeight.value;
      const offset = __props.offsetScale * viewScale.value;
      return {
        offset,
        x: boundingRect.value.x - (viewWidth - boundingRect.value.width) / 2 - offset,
        y: boundingRect.value.y - (viewHeight - boundingRect.value.height) / 2 - offset,
        width: viewWidth + offset * 2,
        height: viewHeight + offset * 2
      };
    });
    const d = computed(() => {
      if (!viewBox.value.x || !viewBox.value.y) {
        return "";
      }
      return `
    M${viewBox.value.x - viewBox.value.offset},${viewBox.value.y - viewBox.value.offset}
    h${viewBox.value.width + viewBox.value.offset * 2}
    v${viewBox.value.height + viewBox.value.offset * 2}
    h${-viewBox.value.width - viewBox.value.offset * 2}z
    M${viewBB.value.x + __props.maskBorderRadius},${viewBB.value.y}
    h${viewBB.value.width - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},${__props.maskBorderRadius}
    v${viewBB.value.height - 2 * __props.maskBorderRadius}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},${__props.maskBorderRadius}
    h${-(viewBB.value.width - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 -${__props.maskBorderRadius},-${__props.maskBorderRadius}
    v${-(viewBB.value.height - 2 * __props.maskBorderRadius)}
    a${__props.maskBorderRadius},${__props.maskBorderRadius} 0 0 1 ${__props.maskBorderRadius},-${__props.maskBorderRadius}z`;
    });
    watchEffect(
      (onCleanup) => {
        if (el.value) {
          const selection2 = select(el.value);
          const zoomHandler = (event) => {
            if (event.sourceEvent.type !== "wheel" || !d3Selection.value || !d3Zoom.value) {
              return;
            }
            const factor = event.sourceEvent.ctrlKey && isMacOs() ? 10 : 1;
            const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? 0.05 : event.sourceEvent.deltaMode ? 1 : 2e-3) * __props.zoomStep;
            const nextZoom = viewport.value.zoom * 2 ** (pinchDelta * factor);
            d3Zoom.value.scaleTo(d3Selection.value, nextZoom);
          };
          const panHandler = (event) => {
            if (event.sourceEvent.type !== "mousemove" || !d3Selection.value || !d3Zoom.value) {
              return;
            }
            const moveScale = viewScale.value * Math.max(1, viewport.value.zoom) * (__props.inversePan ? -1 : 1);
            const position = {
              x: viewport.value.x - event.sourceEvent.movementX * moveScale,
              y: viewport.value.y - event.sourceEvent.movementY * moveScale
            };
            const extent = [
              [0, 0],
              [dimensions.value.width, dimensions.value.height]
            ];
            const nextTransform = identity.translate(position.x, position.y).scale(viewport.value.zoom);
            const constrainedTransform = d3Zoom.value.constrain()(nextTransform, extent, translateExtent.value);
            d3Zoom.value.transform(d3Selection.value, constrainedTransform);
          };
          const zoomAndPanHandler = zoom().wheelDelta((event) => wheelDelta(event) * (__props.zoomStep / 10)).on("zoom", __props.pannable ? panHandler : () => {
          }).on("zoom.wheel", __props.zoomable ? zoomHandler : () => {
          });
          selection2.call(zoomAndPanHandler);
          onCleanup(() => {
            selection2.on("zoom", null);
          });
        }
      },
      { flush: "post" }
    );
    function onSvgClick(event) {
      const [x, y] = pointer(event);
      emit("click", { event, position: { x, y } });
    }
    function onNodeClick(event, node) {
      const param = { event, node, connectedEdges: getConnectedEdges([node], edges2.value) };
      emits.miniMapNodeClick(param);
      emit("nodeClick", param);
    }
    function onNodeDblClick(event, node) {
      const param = { event, node, connectedEdges: getConnectedEdges([node], edges2.value) };
      emits.miniMapNodeDoubleClick(param);
      emit("nodeDblclick", param);
    }
    function onNodeMouseEnter(event, node) {
      const param = { event, node, connectedEdges: getConnectedEdges([node], edges2.value) };
      emits.miniMapNodeMouseEnter(param);
      emit("nodeMouseenter", param);
    }
    function onNodeMouseMove(event, node) {
      const param = { event, node, connectedEdges: getConnectedEdges([node], edges2.value) };
      emits.miniMapNodeMouseMove(param);
      emit("nodeMousemove", param);
    }
    function onNodeMouseLeave(event, node) {
      const param = { event, node, connectedEdges: getConnectedEdges([node], edges2.value) };
      emits.miniMapNodeMouseLeave(param);
      emit("nodeMouseleave", param);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$g), {
        position: _ctx.position,
        class: normalizeClass(["vue-flow__minimap", { pannable: _ctx.pannable, zoomable: _ctx.zoomable }])
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", {
            ref_key: "el",
            ref: el,
            width: elementWidth.value,
            height: elementHeight.value,
            viewBox: [viewBox.value.x, viewBox.value.y, viewBox.value.width, viewBox.value.height].join(" "),
            role: "img",
            "aria-labelledby": `vue-flow__minimap-${unref(id2)}`,
            onClick: onSvgClick
          }, [
            _ctx.ariaLabel ? (openBlock(), createElementBlock("title", {
              key: 0,
              id: `vue-flow__minimap-${unref(id2)}`
            }, toDisplayString(_ctx.ariaLabel), 9, _hoisted_2$b)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(getNodesInitialized), (node) => {
              return openBlock(), createBlock(_sfc_main$1$1, {
                id: node.id,
                key: node.id,
                f: "",
                position: node.computedPosition,
                dimensions: node.dimensions,
                selected: node.selected,
                dragging: node.dragging,
                style: normalizeStyle(node.style),
                class: normalizeClass(nodeClassNameFunc.value(node)),
                color: nodeColorFunc.value(node),
                "border-radius": _ctx.nodeBorderRadius,
                "stroke-color": nodeStrokeColorFunc.value(node),
                "stroke-width": _ctx.nodeStrokeWidth,
                "shape-rendering": unref(shapeRendering),
                type: node.type,
                hidden: node.hidden,
                onClick: ($event) => onNodeClick($event, node),
                onDblclick: ($event) => onNodeDblClick($event, node),
                onMouseenter: ($event) => onNodeMouseEnter($event, node),
                onMousemove: ($event) => onNodeMouseMove($event, node),
                onMouseleave: ($event) => onNodeMouseLeave($event, node)
              }, null, 8, ["id", "position", "dimensions", "selected", "dragging", "style", "class", "color", "border-radius", "stroke-color", "stroke-width", "shape-rendering", "type", "hidden", "onClick", "onDblclick", "onMouseenter", "onMousemove", "onMouseleave"]);
            }), 128)),
            createBaseVNode("path", {
              class: "vue-flow__minimap-mask",
              d: d.value,
              fill: _ctx.maskColor,
              stroke: _ctx.maskStrokeColor,
              "stroke-width": _ctx.maskStrokeWidth,
              "fill-rule": "evenodd"
            }, null, 8, _hoisted_3$b)
          ], 8, _hoisted_1$e))
        ]),
        _: 1
      }, 8, ["position", "class"]);
    };
  }
});
let nodeId = 0;
const getNodeId = () => `node_${nodeId++}`;
const currentProjectId = ref(null);
const nodes = ref([]);
const edges = ref([]);
const canvasViewport = ref({ x: 100, y: 50, zoom: 0.8 });
let autoSaveEnabled = false;
let saveTimeout = null;
const history = ref([]);
const historyIndex = ref(-1);
const MAX_HISTORY = 50;
let isRestoring = false;
const POSITION_THRESHOLD = 10;
let isBatchOperation = false;
let batchStartState = null;
const saveToHistory = (force = false) => {
  if (isRestoring) return;
  if (isBatchOperation && !force) return;
  const state = {
    nodes: JSON.parse(JSON.stringify(nodes.value)),
    edges: JSON.parse(JSON.stringify(edges.value))
  };
  if (historyIndex.value < history.value.length - 1) {
    history.value = history.value.slice(0, historyIndex.value + 1);
  }
  history.value.push(state);
  if (history.value.length > MAX_HISTORY) {
    history.value.shift();
  } else {
    historyIndex.value++;
  }
};
const startBatchOperation = () => {
  isBatchOperation = true;
  batchStartState = {
    nodes: JSON.parse(JSON.stringify(nodes.value)),
    edges: JSON.parse(JSON.stringify(edges.value))
  };
};
const endBatchOperation = () => {
  if (!isBatchOperation || !batchStartState) {
    isBatchOperation = false;
    return;
  }
  const hasSignificantChanges = checkSignificantChanges(batchStartState, {
    nodes: nodes.value,
    edges: edges.value
  });
  if (hasSignificantChanges) {
    saveToHistory(true);
  }
  isBatchOperation = false;
  batchStartState = null;
};
const checkSignificantChanges = (oldState, newState) => {
  const oldNodes = oldState.nodes || [];
  const newNodes = newState.nodes || [];
  if (oldNodes.length !== newNodes.length) {
    return true;
  }
  const oldNodeIds = new Set(oldNodes.map((n) => n.id));
  const newNodeIds = new Set(newNodes.map((n) => n.id));
  for (const id2 of newNodeIds) {
    if (!oldNodeIds.has(id2)) {
      return true;
    }
  }
  for (const id2 of oldNodeIds) {
    if (!newNodeIds.has(id2)) {
      return true;
    }
  }
  for (const newNode of newNodes) {
    const oldNode = oldNodes.find((n) => n.id === newNode.id);
    if (oldNode) {
      const dx = Math.abs(newNode.position.x - oldNode.position.x);
      const dy = Math.abs(newNode.position.y - oldNode.position.y);
      if (dx > POSITION_THRESHOLD || dy > POSITION_THRESHOLD) {
        return true;
      }
    }
  }
  const oldEdges = oldState.edges || [];
  const newEdges = newState.edges || [];
  if (oldEdges.length !== newEdges.length) {
    return true;
  }
  return false;
};
const addNode = (type, position = { x: 100, y: 100 }, data = {}) => {
  const id2 = getNodeId();
  const now2 = Date.now();
  const newNode = {
    id: id2,
    type,
    position,
    data: {
      ...getDefaultNodeData(type),
      ...data,
      createdAt: data.createdAt || now2,
      updatedAt: data.updatedAt || now2
    }
  };
  nodes.value = [...nodes.value, newNode];
  saveToHistory();
  return id2;
};
const addNodes = (nodeSpecs, autoBatch = true) => {
  if (!nodeSpecs || nodeSpecs.length === 0) return [];
  if (autoBatch) {
    startBatchOperation();
  }
  const ids = [];
  const now2 = Date.now();
  nodeSpecs.forEach((spec) => {
    const { type, position = { x: 100, y: 100 }, data = {} } = spec;
    const id2 = getNodeId();
    const newNode = {
      id: id2,
      type,
      position,
      data: {
        ...getDefaultNodeData(type),
        ...data,
        createdAt: data.createdAt || now2,
        updatedAt: data.updatedAt || now2
      }
    };
    nodes.value = [...nodes.value, newNode];
    ids.push(id2);
  });
  if (autoBatch) {
    endBatchOperation();
  }
  return ids;
};
const getDefaultNodeData = (type) => {
  switch (type) {
    case "text":
      return {
        content: "",
        label: "文本输入",
        publicProps: {}
        // 公共属性（可被 @ 引用）
      };
    case "imageConfig": {
      const imageModel = IMAGE_MODELS.find((m) => m.key === DEFAULT_IMAGE_MODEL) || IMAGE_MODELS[0];
      return {
        prompt: "",
        model: DEFAULT_IMAGE_MODEL,
        size: imageModel?.defaultParams?.size || "1x1",
        quality: imageModel?.defaultParams?.quality || "standard",
        label: "文生图"
      };
    }
    case "videoConfig": {
      const videoModel = VIDEO_MODELS.find((m) => m.key === DEFAULT_VIDEO_MODEL) || VIDEO_MODELS[0];
      return {
        prompt: "",
        ratio: videoModel?.defaultParams?.ratio || "16:9",
        duration: videoModel?.defaultParams?.duration || 5,
        model: DEFAULT_VIDEO_MODEL,
        label: "图生视频"
      };
    }
    case "video":
      return {
        url: "",
        duration: 0,
        label: "视频节点"
      };
    case "image":
      return {
        url: "",
        label: "图片节点",
        publicProps: { name: "图片" }
        // 公共属性（可被 @ 引用）
      };
    case "llmConfig":
      return {
        systemPrompt: "",
        model: DEFAULT_CHAT_MODEL,
        outputFormat: "text",
        outputContent: "",
        label: "LLM文本生成",
        publicProps: {}
        // 公共属性（可被 @ 引用）
      };
    default:
      return {};
  }
};
const updateNode = (id2, data) => {
  nodes.value = nodes.value.map(
    (node) => node.id === id2 ? { ...node, data: { ...node.data, ...data } } : node
  );
};
const removeNode = (id2) => {
  nodes.value = nodes.value.filter((node) => node.id !== id2);
  edges.value = edges.value.filter((edge) => edge.source !== id2 && edge.target !== id2);
  saveToHistory();
};
const duplicateNode = (id2) => {
  const sourceNode = nodes.value.find((node) => node.id === id2);
  if (!sourceNode) return null;
  const newId2 = getNodeId();
  const maxZIndex = Math.max(0, ...nodes.value.map((n) => n.zIndex || 0));
  const newNode = {
    id: newId2,
    type: sourceNode.type,
    position: {
      x: sourceNode.position.x + 50,
      y: sourceNode.position.y + 50
    },
    data: { ...sourceNode.data },
    zIndex: maxZIndex + 1
  };
  nodes.value = [...nodes.value, newNode];
  saveToHistory();
  return newId2;
};
const addEdge = (params) => {
  const newEdge = {
    id: `edge_${params.source}_${params.target}`,
    ...params
  };
  edges.value = [...edges.value, newEdge];
  saveToHistory();
};
const addEdges = (edgeSpecs, autoBatch = true) => {
  if (!edgeSpecs || edgeSpecs.length === 0) return [];
  if (autoBatch) {
    startBatchOperation();
  }
  const ids = [];
  edgeSpecs.forEach((params) => {
    const newEdge = {
      id: `edge_${params.source}_${params.target}`,
      ...params
    };
    edges.value = [...edges.value, newEdge];
    ids.push(newEdge.id);
  });
  if (autoBatch) {
    endBatchOperation();
  }
  return ids;
};
const clearCanvas = () => {
  nodes.value = [];
  edges.value = [];
  nodeId = 0;
};
const loadProject = (projectId) => {
  autoSaveEnabled = false;
  isRestoring = true;
  currentProjectId.value = projectId;
  const canvasData = getProjectCanvas(projectId);
  if (canvasData) {
    nodes.value = canvasData.nodes || [];
    edges.value = canvasData.edges || [];
    canvasViewport.value = canvasData.viewport || { x: 100, y: 50, zoom: 0.8 };
    const maxId = nodes.value.reduce((max, node) => {
      const match = node.id.match(/node_(\d+)/);
      if (match) {
        return Math.max(max, parseInt(match[1], 10));
      }
      return max;
    }, -1);
    nodeId = maxId + 1;
  } else {
    clearCanvas();
  }
  history.value = [{
    nodes: JSON.parse(JSON.stringify(nodes.value)),
    edges: JSON.parse(JSON.stringify(edges.value))
  }];
  historyIndex.value = 0;
  setTimeout(() => {
    autoSaveEnabled = true;
    isRestoring = false;
  }, 100);
};
const saveProject = () => {
  if (!currentProjectId.value) return;
  updateProjectCanvas(currentProjectId.value, {
    nodes: nodes.value,
    edges: edges.value,
    viewport: canvasViewport.value
  });
};
const debouncedSave = () => {
  if (!autoSaveEnabled || !currentProjectId.value) return;
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }
  saveTimeout = setTimeout(() => {
    saveProject();
  }, 500);
};
const updateViewport = (viewport) => {
  canvasViewport.value = viewport;
  debouncedSave();
};
const undo = () => {
  if (historyIndex.value <= 0) {
    window.$message?.info("没有可撤销的操作");
    return false;
  }
  historyIndex.value--;
  restoreState(history.value[historyIndex.value]);
  return true;
};
const redo = () => {
  if (historyIndex.value >= history.value.length - 1) {
    window.$message?.info("没有可重做的操作");
    return false;
  }
  historyIndex.value++;
  restoreState(history.value[historyIndex.value]);
  return true;
};
const restoreState = (state) => {
  isRestoring = true;
  nodes.value = JSON.parse(JSON.stringify(state.nodes));
  edges.value = JSON.parse(JSON.stringify(state.edges));
  setTimeout(() => {
    isRestoring = false;
  }, 100);
};
const canUndo = () => historyIndex.value > 0;
const canRedo = () => historyIndex.value < history.value.length - 1;
const manualSaveHistory = () => {
  saveToHistory();
};
watch([nodes, edges], () => {
  debouncedSave();
}, { deep: true });
const STORAGE_KEYS = {
  CUSTOM_CHAT_MODELS: "customChatModels",
  CUSTOM_IMAGE_MODELS: "customImageModels",
  CUSTOM_VIDEO_MODELS: "customVideoModels",
  SELECTED_CHAT_MODEL: "selectedChatModel",
  SELECTED_IMAGE_MODEL: "selectedImageModel",
  SELECTED_VIDEO_MODEL: "selectedVideoModel"
};
const DEFAULT_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
let currentBaseUrl = DEFAULT_BASE_URL;
const NO_AUTH_ENDPOINTS = ["/model/page", "/model/fullName", "/model/types"];
const getApiKey$1 = () => {
  try {
    const provider = localStorage.getItem("api-provider") || "volcengine";
    const apiKeysJson = localStorage.getItem("api-keys-by-provider");
    const apiKeys = apiKeysJson ? JSON.parse(apiKeysJson) : {};
    return apiKeys[provider] || "";
  } catch {
    return "";
  }
};
const resolveUrl = (url = "") => {
  if (/^https?:\/\//i.test(url)) return url;
  return `${currentBaseUrl}${url}`;
};
const request = async (config = {}) => {
  const { url = "", method = "get", data, params, headers = {} } = config;
  if (!window.api?.httpRequest) {
    const msg = "网络请求错误";
    window.$message?.error(msg);
    return Promise.reject(new Error(msg));
  }
  const finalUrl = resolveUrl(url);
  const finalHeaders = { "Content-Type": "application/json", ...headers };
  const isNoAuth = NO_AUTH_ENDPOINTS.some((ep) => finalUrl.includes(ep));
  const apiKey = getApiKey$1();
  if (apiKey && !isNoAuth) {
    finalHeaders["Authorization"] = `Bearer ${apiKey}`;
  }
  console.log(
    `[request] request before: ${method.toUpperCase()} ${finalUrl} -> ${JSON.stringify(data)} -> ${JSON.stringify(params)}`
  );
  const res = await window.api.httpRequest({
    method,
    url: finalUrl,
    headers: finalHeaders,
    data,
    params
  });
  console.log(`[request] result: ${method.toUpperCase()} ${finalUrl} -> ${res.status}`, res.data);
  if (res.ok && res.status >= 200 && res.status < 300) {
    return res.data;
  }
  const body = res.data || {};
  const message = body?.error?.message || body?.message || "请求失败";
  if (res.status === 401) {
    window.$message?.error("API Key 无效或已过期");
  } else if (res.status === 429) {
    window.$message?.error("请求过于频繁，请稍后再试");
  } else {
    window.$message?.error(message);
  }
  return Promise.reject(body);
};
const getBaseUrl = () => currentBaseUrl;
const STORAGE_KEY = "api-provider";
const getStored$1 = (key, defaultValue = "") => {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch {
    return defaultValue;
  }
};
const setStored$1 = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
  }
};
const removeStored = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
  }
};
const getStoredProvider = () => {
  return getStored$1(STORAGE_KEY);
};
const useProvider = () => {
  const currentProvider = ref(getStoredProvider() || getDefaultProvider());
  const providerList = getProviderList();
  const providerConfig = computed(() => getProviderConfig(currentProvider.value));
  const providerLabel = computed(() => providerConfig.value.label || currentProvider.value);
  const setProvider = (provider) => {
    if (PROVIDERS[provider]) {
      currentProvider.value = provider;
      setStored$1(STORAGE_KEY, provider);
    }
  };
  const clearProvider = () => {
    currentProvider.value = getDefaultProvider();
    removeStored(STORAGE_KEY);
  };
  const adaptRequest = (type, params) => {
    const config = providerConfig.value;
    if (config.requestAdapter && config.requestAdapter[type]) {
      return config.requestAdapter[type](params);
    }
    return params;
  };
  const adaptResponse = (type, response) => {
    const config = providerConfig.value;
    if (config.responseAdapter && config.responseAdapter[type]) {
      return config.responseAdapter[type](response);
    }
    return response;
  };
  return {
    currentProvider,
    providerList,
    providerConfig,
    providerLabel,
    setProvider,
    clearProvider,
    adaptRequest,
    adaptResponse
  };
};
const isModelSupported = (model, provider) => {
  if (!model.provider) {
    return true;
  }
  return model.provider.includes(provider);
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
const customChatModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS, []));
const customImageModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS, []));
const customVideoModels = ref(getStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS, []));
const customChatModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS_BY_PROVIDER || "custom-chat-models-by-provider", {}));
const customImageModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS_BY_PROVIDER || "custom-image-models-by-provider", {}));
const customVideoModelsByProvider = ref(getStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS_BY_PROVIDER || "custom-video-models-by-provider", {}));
const selectedChatModel = ref(getStored(STORAGE_KEYS.SELECTED_CHAT_MODEL, DEFAULT_CHAT_MODEL));
const selectedImageModel = ref(getStored(STORAGE_KEYS.SELECTED_IMAGE_MODEL, DEFAULT_IMAGE_MODEL));
const selectedVideoModel = ref(getStored(STORAGE_KEYS.SELECTED_VIDEO_MODEL, DEFAULT_VIDEO_MODEL));
const useModelConfig = () => {
  const { currentProvider } = useProvider();
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
  const allAvailableChatModels = computed(() => allChatModels.value);
  const allAvailableImageModels = computed(() => allImageModels.value);
  const allAvailableVideoModels = computed(() => allVideoModels.value);
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
  watch(customChatModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_CHAT_MODELS, val), { deep: true });
  watch(customImageModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_IMAGE_MODELS, val), { deep: true });
  watch(customVideoModels, (val) => setStoredJson(STORAGE_KEYS.CUSTOM_VIDEO_MODELS, val), { deep: true });
  watch(customChatModelsByProvider, (val) => {
    const key = STORAGE_KEYS.CUSTOM_CHAT_MODELS_BY_PROVIDER || "custom-chat-models-by-provider";
    setStoredJson(key, val);
  }, { deep: true });
  watch(customImageModelsByProvider, (val) => {
    const key = STORAGE_KEYS.CUSTOM_IMAGE_MODELS_BY_PROVIDER || "custom-image-models-by-provider";
    setStoredJson(key, val);
  }, { deep: true });
  watch(customVideoModelsByProvider, (val) => {
    const key = STORAGE_KEYS.CUSTOM_VIDEO_MODELS_BY_PROVIDER || "custom-video-models-by-provider";
    setStoredJson(key, val);
  }, { deep: true });
  watch(selectedChatModel, (val) => setStored(STORAGE_KEYS.SELECTED_CHAT_MODEL, val));
  watch(selectedImageModel, (val) => setStored(STORAGE_KEYS.SELECTED_IMAGE_MODEL, val));
  watch(selectedVideoModel, (val) => setStored(STORAGE_KEYS.SELECTED_VIDEO_MODEL, val));
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
  const getChatModel = (key) => allChatModels.value.find((m) => m.key === key);
  const getImageModel = (key) => allImageModels.value.find((m) => m.key === key);
  const getVideoModel = (key) => allVideoModels.value.find((m) => m.key === key);
  const clearCustomModels = () => {
    customChatModels.value = [];
    customImageModels.value = [];
    customVideoModels.value = [];
    selectedChatModel.value = DEFAULT_CHAT_MODEL;
    selectedImageModel.value = DEFAULT_IMAGE_MODEL;
    selectedVideoModel.value = DEFAULT_VIDEO_MODEL;
  };
  return {
    // All models (built-in + custom)
    allChatModels,
    allImageModels,
    allVideoModels,
    // Available models filtered by provider | 根据渠道过滤的可用模型
    availableChatModels,
    availableImageModels,
    availableVideoModels,
    // All models (including models from all providers, not filtered) | 所有模型（不按渠道过滤）
    allAvailableChatModels,
    allAvailableImageModels,
    allAvailableVideoModels,
    // Custom models only
    customChatModels,
    customImageModels,
    customVideoModels,
    // Selected models
    selectedChatModel,
    selectedImageModel,
    selectedVideoModel,
    // Add methods
    addCustomChatModel,
    addCustomImageModel,
    addCustomVideoModel,
    // Remove methods
    removeCustomChatModel,
    removeCustomImageModel,
    removeCustomVideoModel,
    // Get model
    getChatModel,
    getImageModel,
    getVideoModel,
    // Get models by provider (for ApiSettings)
    getModelsByProvider,
    // Custom models by provider
    customChatModelsByProvider,
    customImageModelsByProvider,
    customVideoModelsByProvider,
    // Add/Remove by provider methods
    addCustomChatModelByProvider,
    addCustomImageModelByProvider,
    addCustomVideoModelByProvider,
    removeCustomChatModelByProvider,
    removeCustomImageModelByProvider,
    removeCustomVideoModelByProvider,
    // Clear
    clearCustomModels
  };
};
const getModelConfigHook = () => {
  try {
    return useModelConfig();
  } catch {
    return null;
  }
};
const loadAllModels = async () => {
  const modelConfig = getModelConfigHook();
  if (modelConfig) {
    return [...modelConfig.allImageModels.value, ...modelConfig.allVideoModels.value, ...modelConfig.allChatModels.value];
  }
  return [...IMAGE_MODELS, ...VIDEO_MODELS, ...CHAT_MODELS];
};
const getModelConfig = (modelKey) => {
  const modelConfig = getModelConfigHook();
  if (modelConfig) {
    return modelConfig.getImageModel(modelKey) || modelConfig.getVideoModel(modelKey) || modelConfig.getChatModel(modelKey);
  }
  const allModels = [...IMAGE_MODELS, ...VIDEO_MODELS, ...CHAT_MODELS];
  return allModels.find((m) => m.key === modelKey);
};
const getModelSizeOptions = (modelKey, quality = "standard") => {
  const model = getModelConfig(modelKey);
  if (!model) return SEEDREAM_SIZE_OPTIONS;
  if (typeof model.getSizesByQuality === "function") {
    return model.getSizesByQuality(quality);
  }
  if (!model.sizes || model.sizes.length === 0) return [];
  const knownSizeOptions = quality === "4k" ? SEEDREAM_4K_SIZE_OPTIONS : SEEDREAM_SIZE_OPTIONS;
  return model.sizes.map((size) => {
    const option = knownSizeOptions.find((o) => o.key === size);
    if (option) return option;
    if (/^\d+x\d+$/.test(size)) {
      return { label: size.replace("x", ":"), key: size };
    }
    return { label: size, key: size };
  });
};
const getModelQualityOptions = (modelKey) => {
  const model = getModelConfig(modelKey);
  return model?.qualities || [];
};
const getModelRatioOptions = (modelKey) => {
  const model = VIDEO_MODELS.find((m) => m.key === modelKey);
  if (!model?.ratios) return VIDEO_RATIO_OPTIONS;
  return model.ratios.map((ratio) => {
    const option = VIDEO_RATIO_LIST.find((o) => o.key === ratio);
    return option || { label: ratio, key: ratio };
  });
};
const getModelDurationOptions = (modelKey) => {
  const model = VIDEO_MODELS.find((m) => m.key === modelKey);
  if (!model?.durs) return VIDEO_DURATION_OPTIONS;
  return model.durs;
};
const generateImage = (data, options = {}) => {
  const { requestType = "json", endpoint = "/images/generations" } = options;
  return request({
    url: endpoint,
    method: "post",
    data,
    headers: requestType === "formdata" ? { "Content-Type": "multipart/form-data" } : {}
  });
};
const createVideoTask = (data, options = {}) => {
  const { endpoint = "/videos", requestType = "json" } = options;
  return request({
    url: endpoint,
    method: "post",
    data,
    headers: requestType === "formdata" ? { "Content-Type": "multipart/form-data" } : { "Content-Type": "application/json" }
  });
};
const getVideoTaskStatus = (taskId, options = {}) => {
  const { endpoint = "/videos" } = options;
  return request({
    url: `${endpoint}`,
    method: "get"
  });
};
const getApiKey = () => {
  try {
    const provider = localStorage.getItem("api-provider") || "volcengine";
    const apiKeysJson = localStorage.getItem("api-keys-by-provider");
    const apiKeys = apiKeysJson ? JSON.parse(apiKeysJson) : {};
    return apiKeys[provider] || localStorage.getItem("apiKey") || "";
  } catch {
    return localStorage.getItem("apiKey") || "";
  }
};
const streamChatCompletions = async function* (data, signal, options = {}) {
  if (!window.api?.httpStream) {
    throw new Error("当前环境不支持流式请求（需在 Electron 中运行）");
  }
  const apiKey = getApiKey();
  const baseUrl = options.baseUrl || getBaseUrl();
  const endpoint = options.endpoint || "/chat/completions";
  const url = /^https?:\/\//i.test(endpoint) ? endpoint : `${baseUrl}${endpoint}`;
  const queue = [];
  let resolveNext = null;
  let streamError = null;
  const push = (item) => {
    if (resolveNext) {
      resolveNext(item);
      resolveNext = null;
    } else {
      queue.push(item);
    }
  };
  const abort = window.api.httpStream(
    {
      url,
      headers: { Authorization: `Bearer ${apiKey}` },
      data
    },
    (payload) => {
      if (payload.error) {
        streamError = new Error(payload.error);
        push({ type: "error" });
      } else if (payload.done) {
        push({ type: "done" });
      } else if (payload.chunk) {
        push({ type: "chunk", value: payload.chunk });
      }
    }
  );
  if (signal) {
    signal.addEventListener("abort", () => abort(), { once: true });
  }
  try {
    while (true) {
      const item = queue.length ? queue.shift() : await new Promise((resolve) => {
        resolveNext = resolve;
      });
      if (item.type === "chunk") {
        yield item.value;
      } else if (item.type === "done") {
        return;
      } else if (item.type === "error") {
        throw streamError;
      }
    }
  } finally {
    abort();
  }
};
const useApiState = () => {
  const loading = ref(false);
  const error = ref(null);
  const status = ref("idle");
  const reset = () => {
    loading.value = false;
    error.value = null;
    status.value = "idle";
  };
  const setLoading = (isLoading) => {
    loading.value = isLoading;
    status.value = isLoading ? "running" : status.value;
  };
  const setError = (err) => {
    error.value = err;
    status.value = "error";
    loading.value = false;
  };
  const setSuccess = () => {
    status.value = "success";
    loading.value = false;
    error.value = null;
  };
  return { loading, error, status, reset, setLoading, setError, setSuccess };
};
const useChat = (options = {}) => {
  const { loading, error, status, reset, setLoading, setError, setSuccess } = useApiState();
  const { adaptRequest } = useProvider();
  const modelStore = useModelStore();
  const messages2 = ref([]);
  const currentResponse = ref("");
  let abortController = null;
  const send = async (content, stream = true, chatOptions = {}) => {
    console.log("Sending message:", content, "with options:", chatOptions);
    setLoading(true);
    currentResponse.value = "";
    try {
      let userContent;
      const images = chatOptions.images || options.images || [];
      if (images.length > 0) {
        userContent = [
          { type: "text", text: content },
          ...images.map((img) => ({
            type: "image_url",
            image_url: { url: img.url || img }
          }))
        ];
      } else {
        userContent = content;
      }
      const msgList = [
        ...options.systemPrompt ? [{ role: "system", content: options.systemPrompt }] : [],
        ...messages2.value,
        { role: "user", content: userContent }
      ];
      const adaptedParams = adaptRequest("chat", {
        model: chatOptions.model || options.model || "gpt-4o-mini",
        messages: msgList
      });
      if (stream) {
        status.value = "streaming";
        abortController = new AbortController();
        let fullResponse = "";
        const chatUrl = modelStore.getChatEndpoint();
        const endpoint = new URL(chatUrl).pathname;
        for await (const chunk of streamChatCompletions(
          adaptedParams,
          abortController.signal,
          { baseUrl: new URL(chatUrl).origin, endpoint }
        )) {
          fullResponse += chunk;
          currentResponse.value = fullResponse;
        }
        messages2.value.push({ role: "user", content });
        messages2.value.push({ role: "assistant", content: fullResponse });
        setSuccess();
        return fullResponse;
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err);
        throw err;
      }
    }
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const clear = () => {
    messages2.value = [];
    currentResponse.value = "";
    reset();
  };
  onUnmounted(() => stop());
  return { loading, error, status, messages: messages2, currentResponse, send, stop, clear, reset };
};
const useImageGeneration = () => {
  const { loading, error, status, reset, setLoading, setError, setSuccess } = useApiState();
  const { adaptRequest, adaptResponse } = useProvider();
  const modelStore = useModelStore();
  const images = ref([]);
  const currentImage = ref(null);
  const generate = async (params) => {
    setLoading(true);
    images.value = [];
    currentImage.value = null;
    try {
      const modelConfig = getModelByName(params.model);
      const requestData = {
        model: params.model,
        prompt: params.prompt,
        size: params.size || modelConfig?.defaultParams?.size || "2048x2048",
        watermark: false
        // n: params.n || 1
      };
      if (params.image) {
        requestData.image = params.image;
      }
      const adaptedParams = adaptRequest("image", requestData);
      const response = await generateImage(adaptedParams, {
        requestType: "json",
        endpoint: modelStore.getImageEndpoint()
      });
      const adaptedData = adaptResponse("image", response);
      const validImages = adaptedData.filter((img) => img && img.url);
      if (validImages.length === 0) {
        const err = new Error("生成结果中没有有效图片 URL");
        setError(err);
        throw err;
      }
      images.value = validImages;
      currentImage.value = validImages[0] || null;
      setSuccess();
      return validImages;
    } catch (err) {
      console.error("[useImageGeneration] 生成图片失败:", err);
      setError(err);
      throw err;
    }
  };
  return { loading, error, status, images, currentImage, generate, reset };
};
const useVideoGeneration = () => {
  const { loading, error, status, reset, setLoading, setError, setSuccess } = useApiState();
  const { adaptRequest, adaptResponse } = useProvider();
  const modelStore = useModelStore();
  const video = ref(null);
  const taskId = ref(null);
  const progress = reactive({
    attempt: 0,
    maxAttempts: 120,
    percentage: 0
  });
  const createVideoTaskOnly = async (params) => {
    const modelConfig = getModelByName(params.model);
    const requestData = {
      model: params.model,
      prompt: params.prompt || "",
      watermark: false
    };
    if (params.first_frame_image) requestData.first_frame_image = params.first_frame_image;
    if (params.last_frame_image) requestData.last_frame_image = params.last_frame_image;
    if (params.ratio) requestData.size = params.ratio;
    if (params.dur) requestData.seconds = params.dur;
    const adaptedParams = adaptRequest("video", requestData);
    const task = await createVideoTask(adaptedParams, {
      requestType: "json",
      endpoint: modelStore.getVideoEndpoint()
    });
    const isAsync = modelConfig?.async !== false;
    if (!isAsync || task.data?.url || task.url || task.content?.video_url) {
      return {
        taskId: null,
        url: task.data?.url || task.url || task.content?.video_url
      };
    }
    const newTaskId = task.id || task.task_id || task.taskId;
    if (!newTaskId) {
      throw new Error("未获取到任务 ID");
    }
    return { taskId: newTaskId };
  };
  const pollVideoTask = async (pollTaskId, onProgress = () => {
  }) => {
    const maxAttempts = 120;
    const interval2 = 5e3;
    for (let i = 0; i < maxAttempts; i++) {
      onProgress(i + 1, Math.min(Math.round(i / maxAttempts * 100), 99));
      let taskEndpoint = modelStore.getVideoTaskEndpoint();
      if (taskEndpoint.includes("{taskId}")) {
        taskEndpoint = taskEndpoint.replace("{taskId}", pollTaskId);
      }
      const result = await getVideoTaskStatus(pollTaskId, {
        endpoint: taskEndpoint
      });
      const adaptedResult = adaptResponse("video", result);
      if (result.status === "completed" || result.status === "succeeded" || result.data) {
        const videoUrl = adaptedResult.url || result.data?.url || result.data?.[0]?.url || result.url || result.content?.video_url || result.video_url;
        return { ...adaptedResult, url: videoUrl };
      }
      if (result.status === "failed" || result.status === "error") {
        throw new Error(result.error?.message || result.message || "视频生成失败");
      }
      await new Promise((resolve) => setTimeout(resolve, interval2));
    }
    throw new Error("视频生成超时");
  };
  const generate = async (params) => {
    setLoading(true);
    video.value = null;
    taskId.value = null;
    progress.attempt = 0;
    progress.percentage = 0;
    try {
      const { taskId: newTaskId, url } = await createVideoTaskOnly(params);
      if (url) {
        video.value = { url };
        setSuccess();
        return video.value;
      }
      taskId.value = newTaskId;
      status.value = "polling";
      const result = await pollVideoTask(newTaskId, (attempt, percentage) => {
        progress.attempt = attempt;
        progress.percentage = percentage;
      });
      video.value = result;
      setSuccess();
      return result;
    } catch (err) {
      setError(err);
      throw err;
    }
  };
  return { loading, error, status, video, taskId, progress, generate, reset, createVideoTaskOnly, pollVideoTask };
};
const WORKFLOW_TYPES = {
  TEXT_TO_IMAGE: "text_to_image",
  TEXT_TO_IMAGE_TO_VIDEO: "text_to_image_to_video",
  STORYBOARD: "storyboard",
  // 分镜工作流
  MULTI_ANGLE_STORYBOARD: "multi_angle_storyboard",
  // 多角度分镜工作流
  PICTURE_BOOK: "picture_book"
  // 儿童绘本工作流
};
const MULTI_ANGLE_PROMPTS$1 = {
  front: {
    label: "正视",
    english: "Front View",
    prompt: (character) => `使用提供的图片，生成四宫格分镜，每张四宫格包括人物正面对着镜头的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  side: {
    label: "侧视",
    english: "Side View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括人物侧面角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  back: {
    label: "后视",
    english: "Back View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括人物背影角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  top: {
    label: "俯视",
    english: "Top/Bird's Eye View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括俯视角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  }
};
const INTENT_ANALYSIS_PROMPT = `你是一个工作流分析助手。根据用户输入判断需要的工作流类型，并生成对应的提示词。

工作流类型：
1. text_to_image - 用户想要生成单张图片（默认）
2. text_to_image_to_video - 用户想要生成图片并转成视频（包含"视频"、"动画"、"动起来"等关键词）
3. storyboard - 用户想要生成分镜/多场景图片（包含"分镜"、"场景一"、"镜头"等关键词，或描述多个连续场景）
4. multi_angle_storyboard - 用户想要生成多角度分镜（包含"多角度"、"正视"、"侧视"、"后视"、"俯视"、"四宫格"、"景别"等关键词）
5. picture_book - 用户想要生成儿童绘本（包含"绘本"、"故事书"、"童话"、"儿童故事"、"picture book"等关键词）

返回 JSON：
{
  "workflow_type": "text_to_image | text_to_image_to_video | storyboard | multi_angle_storyboard | picture_book",
  "description": "简短描述",

  // text_to_image 和 text_to_image_to_video 使用:
  "image_prompt": "优化后的图片生成提示词",
  "video_prompt": "视频生成提示词（仅 text_to_image_to_video）",

  // storyboard 分镜工作流使用:
  "character": {
    "name": "角色名称",
    "description": "角色外观描述，用于生成参考图"
  },
  "shots": [
    {
      "title": "分镜标题",
      "prompt": "该分镜的详细画面描述，包含角色动作、场景、光影等"
    }
  ],

  // multi_angle_storyboard 多角度分镜工作流使用:
  "multi_angle": {
    "character_description": "角色的详细外观描述，包括服装、发型、体型、特征等"
  },

  // picture_book 儿童绘本工作流使用:
  "picture_book": {
    "title": "绘本标题",
    "style": "插画风格描述，如水彩、蜡笔、扁平插画等",
    "character": {
      "name": "主角名称",
      "description": "主角外观详细描述"
    },
    "pages": [
      {
        "page_number": 1,
        "story_text": "该页的故事文字（给孩子读的）",
        "illustration_prompt": "该页插画的详细描述，包含角色动作、场景、色彩、构图等，需保持风格一致"
      }
    ]
  }
}

提示词优化要求：
- image_prompt: 基于用户输入扩展，添加画面细节、艺术风格、光影效果等
- video_prompt: 描述画面如何动起来，如镜头移动、主体动作、氛围变化等
- character.description: 详细描述角色外观特征，便于后续分镜保持一致性
- shots[].prompt: 每个分镜的完整画面描述，需包含角色名以保持一致性
- multi_angle.character_description: 详细描述角色外观，用于生成多角度四宫格分镜
- picture_book.style: 明确的插画风格，如"温暖水彩风"、"彩色蜡笔风"、"扁平矢量插画"等
- picture_book.character.description: 详细描述主角外观特征，确保每页插画角色一致
- picture_book.pages[].story_text: 简洁温馨的儿童故事文字，适合3-8岁孩子阅读
- picture_book.pages[].illustration_prompt: 详细的插画描述，必须包含角色名和外观特征、场景、动作、色调，并注明插画风格以保持全书一致

示例1 - 分镜工作流:
输入: "蜡笔小新去上学。分镜一：清晨的战争；分镜二：出发的风姿"
输出:
{
  "workflow_type": "storyboard",
  "description": "蜡笔小新上学分镜",
  "character": {
    "name": "蜡笔小新",
    "description": "5岁男孩，黑色蘑菇头发型，粗眉毛，穿红色T恤和黄色短裤，卡通动漫风格"
  },
  "shots": [
    {"title": "清晨的战争", "prompt": "蜡笔小新在卧室赖床，妈妈美伢在旁边生气催促..."},
    {"title": "出发的风姿", "prompt": "蜡笔小新背着黄色书包，在阳光下昂首阔步走出家门..."}
  ]
}

示例2 - 多角度分镜工作流:
输入: "生成一个穿红裙子的女孩的多角度分镜"
输出:
{
  "workflow_type": "multi_angle_storyboard",
  "description": "红裙女孩多角度分镜",
  "multi_angle": {
    "character_description": "年轻女孩，长发飘逸，穿着优雅的红色连衣裙，白皙皮肤，精致五官，现代时尚风格"
  }
}

示例3 - 儿童绘本工作流:
输入: "小兔子找妈妈的绘本故事"
输出:
{
  "workflow_type": "picture_book",
  "description": "小兔子找妈妈绘本",
  "picture_book": {
    "title": "小兔子找妈妈",
    "style": "温暖水彩风，柔和色调，圆润线条，儿童绘本插画风格",
    "character": {
      "name": "小兔子",
      "description": "一只白色小兔子，圆圆的大眼睛，粉色的长耳朵，穿着蓝色小背带裤，毛茸茸的短尾巴"
    },
    "pages": [
      {"page_number": 1, "story_text": "清晨，小兔子醒来发现妈妈不在身边。", "illustration_prompt": "温暖水彩风，一只穿蓝色背带裤的白色小兔子坐在小床上揉眼睛，阳光从窗户洒进温馨的小房间，柔和的暖色调，儿童绘本插画风格"},
      {"page_number": 2, "story_text": "小兔子来到花园里，问蝴蝶姐姐：'你看到我妈妈了吗？'", "illustration_prompt": "温暖水彩风，穿蓝色背带裤的白色小兔子站在五彩缤纷的花园中，仰头看着一只彩色蝴蝶，绿草如茵，鲜花盛开，明亮温暖的色调，儿童绘本插画风格"},
      {"page_number": 3, "story_text": "小兔子终于在胡萝卜地里找到了妈妈，开心地扑进妈妈怀里。", "illustration_prompt": "温暖水彩风，穿蓝色背带裤的白色小兔子扑进兔妈妈怀里，兔妈妈穿着围裙温柔地抱着小兔子，周围是橙色的胡萝卜地，温馨幸福的画面，柔和暖色调，儿童绘本插画风格"}
    ]
  }
}

返回纯 JSON，不要其他内容。`;
const useWorkflowOrchestrator = () => {
  const isAnalyzing = ref(false);
  const isExecuting = ref(false);
  const currentStep = ref(0);
  const totalSteps = ref(0);
  const executionLog = ref([]);
  const activeWatchers = [];
  const addLog = (type, message) => {
    executionLog.value.push({ type, message, timestamp: Date.now() });
    console.log(`[Workflow ${type}] ${message}`);
  };
  const clearWatchers = () => {
    activeWatchers.forEach((stop) => stop());
    activeWatchers.length = 0;
  };
  const waitForConfigComplete = (configNodeId) => {
    return new Promise((resolve, reject) => {
      const timeout2 = setTimeout(() => {
        reject(new Error("执行超时"));
      }, 5 * 60 * 1e3);
      let stopWatcher = null;
      const checkNode = (node2) => {
        if (!node2) return false;
        if (node2.data?.error) {
          clearTimeout(timeout2);
          if (stopWatcher) stopWatcher();
          reject(new Error(node2.data.error));
          return true;
        }
        if (node2.data?.executed && node2.data?.outputNodeId) {
          clearTimeout(timeout2);
          if (stopWatcher) stopWatcher();
          addLog("success", `节点 ${configNodeId} 完成，输出节点: ${node2.data.outputNodeId}`);
          resolve(node2.data.outputNodeId);
          return true;
        }
        return false;
      };
      const node = nodes.value.find((n) => n.id === configNodeId);
      if (checkNode(node)) return;
      stopWatcher = watch(
        () => nodes.value.find((n) => n.id === configNodeId),
        (node2) => checkNode(node2),
        { deep: true }
      );
      activeWatchers.push(stopWatcher);
    });
  };
  const waitForOutputReady = (outputNodeId) => {
    return new Promise((resolve, reject) => {
      const timeout2 = setTimeout(() => {
        reject(new Error("输出节点超时"));
      }, 5 * 60 * 1e3);
      let stopWatcher = null;
      const checkNode = (node2) => {
        if (!node2) return false;
        if (node2.data?.error) {
          clearTimeout(timeout2);
          if (stopWatcher) stopWatcher();
          reject(new Error(node2.data.error));
          return true;
        }
        if (node2.data?.url && !node2.data?.loading) {
          clearTimeout(timeout2);
          if (stopWatcher) stopWatcher();
          addLog("success", `输出节点 ${outputNodeId} 已就绪`);
          resolve(node2);
          return true;
        }
        return false;
      };
      const node = nodes.value.find((n) => n.id === outputNodeId);
      if (checkNode(node)) return;
      stopWatcher = watch(
        () => nodes.value.find((n) => n.id === outputNodeId),
        (node2) => checkNode(node2),
        { deep: true }
      );
      activeWatchers.push(stopWatcher);
    });
  };
  const analyzeIntent = async (userInput) => {
    isAnalyzing.value = true;
    try {
      let response = "";
      for await (const chunk of streamChatCompletions({
        model: "gpt-4o",
        messages: [
          { role: "system", content: INTENT_ANALYSIS_PROMPT },
          { role: "user", content: userInput }
        ]
      })) {
        response += chunk;
      }
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return { workflow_type: WORKFLOW_TYPES.TEXT_TO_IMAGE };
      }
      return JSON.parse(jsonMatch[0]);
    } catch (err) {
      addLog("error", `分析失败: ${err.message}`);
      return { workflow_type: WORKFLOW_TYPES.TEXT_TO_IMAGE };
    } finally {
      isAnalyzing.value = false;
    }
  };
  const executeTextToImage = async (imagePrompt, position) => {
    const nodeSpacing = 400;
    let x = position.x;
    addLog("info", "开始执行文生图工作流");
    currentStep.value = 1;
    totalSteps.value = 2;
    const textNodeId = addNode("text", { x, y: position.y }, {
      content: imagePrompt,
      label: "图片提示词"
    });
    addLog("info", `创建图片提示词节点: ${textNodeId}`);
    x += nodeSpacing;
    currentStep.value = 2;
    const imageConfigId = addNode("imageConfig", { x, y: position.y }, {
      label: "文生图",
      autoExecute: true
    });
    addLog("info", `创建图片配置节点: ${imageConfigId}`);
    addEdge({
      source: textNodeId,
      target: imageConfigId,
      sourceHandle: "right",
      targetHandle: "left"
    });
    addLog("success", "文生图工作流已启动");
    return { textNodeId, imageConfigId };
  };
  const executeTextToImageToVideo = async (imagePrompt, videoPrompt, position) => {
    const nodeSpacing = 400;
    const rowSpacing = 200;
    let x = position.x;
    addLog("info", "开始执行文生图生视频工作流");
    currentStep.value = 1;
    totalSteps.value = 5;
    const imageTextNodeId = addNode("text", { x, y: position.y }, {
      content: imagePrompt,
      label: "图片提示词"
    });
    addLog("info", `创建图片提示词节点: ${imageTextNodeId}`);
    currentStep.value = 2;
    const videoTextNodeId = addNode("text", { x, y: position.y + rowSpacing }, {
      content: videoPrompt,
      label: "视频提示词"
    });
    addLog("info", `创建视频提示词节点: ${videoTextNodeId}`);
    x += nodeSpacing;
    currentStep.value = 3;
    const imageConfigId = addNode("imageConfig", { x, y: position.y }, {
      label: "文生图",
      autoExecute: true
    });
    addLog("info", `创建图片配置节点: ${imageConfigId}`);
    addEdge({
      source: imageTextNodeId,
      target: imageConfigId,
      sourceHandle: "right",
      targetHandle: "left"
    });
    currentStep.value = 3;
    addLog("info", "等待图片生成完成...");
    try {
      const imageNodeId = await waitForConfigComplete(imageConfigId);
      await waitForOutputReady(imageNodeId);
      const imageNode = nodes.value.find((n) => n.id === imageNodeId);
      x = (imageNode?.position?.x || x) + nodeSpacing;
      currentStep.value = 4;
      const videoConfigId = addNode("videoConfig", { x, y: position.y + rowSpacing }, {
        label: "图生视频",
        autoExecute: true
      });
      addLog("info", `创建视频配置节点: ${videoConfigId}`);
      addEdge({
        source: videoTextNodeId,
        target: videoConfigId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      addEdge({
        source: imageNodeId,
        target: videoConfigId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      addLog("success", "文生图生视频工作流已启动");
      return { imageTextNodeId, videoTextNodeId, imageConfigId, imageNodeId, videoConfigId };
    } catch (err) {
      addLog("error", `工作流执行失败: ${err.message}`);
      throw err;
    }
  };
  const executeStoryboard = async (character, shots, position) => {
    const nodeSpacing = 400;
    const rowSpacing = 250;
    let x = position.x;
    let y = position.y;
    const shotCount = shots?.length || 0;
    addLog("info", `开始执行分镜工作流: ${character?.name || "未知角色"}, ${shotCount} 个分镜`);
    currentStep.value = 1;
    totalSteps.value = 2 + shotCount * 2;
    const createdNodes = {
      characterTextId: null,
      characterConfigId: null,
      characterImageId: null,
      shots: []
    };
    try {
      const characterDesc = `${character?.name || "角色"}: ${character?.description || ""}`;
      createdNodes.characterTextId = addNode("text", { x, y }, {
        content: characterDesc,
        label: `角色: ${character?.name || "参考"}`
      });
      addLog("info", `创建角色描述节点: ${createdNodes.characterTextId}`);
      x += nodeSpacing;
      currentStep.value = 2;
      createdNodes.characterConfigId = addNode("imageConfig", { x, y }, {
        label: "角色参考图",
        autoExecute: true
      });
      addLog("info", `创建角色配置节点: ${createdNodes.characterConfigId}`);
      addEdge({
        source: createdNodes.characterTextId,
        target: createdNodes.characterConfigId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      addLog("info", "等待角色参考图生成...");
      createdNodes.characterImageId = await waitForConfigComplete(createdNodes.characterConfigId);
      await waitForOutputReady(createdNodes.characterImageId);
      addLog("success", "角色参考图已生成");
      const charImageNode = nodes.value.find((n) => n.id === createdNodes.characterImageId);
      x = (charImageNode?.position?.x || x) + nodeSpacing;
      for (let i = 0; i < shotCount; i++) {
        const shot = shots[i];
        const shotY = y + (i + 1) * rowSpacing;
        let shotX = position.x;
        currentStep.value = 3 + i * 2;
        const shotTextId = addNode("text", { x: shotX, y: shotY }, {
          content: shot.prompt,
          label: `分镜${i + 1}: ${shot.title}`
        });
        addLog("info", `创建分镜${i + 1}文本节点: ${shotTextId}`);
        shotX += nodeSpacing;
        currentStep.value = 4 + i * 2;
        const shotConfigId = addNode("imageConfig", { x: shotX, y: shotY }, {
          label: `分镜${i + 1}`,
          autoExecute: true
        });
        addLog("info", `创建分镜${i + 1}配置节点: ${shotConfigId}`);
        addEdge({
          source: shotTextId,
          target: shotConfigId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        addEdge({
          source: createdNodes.characterImageId,
          target: shotConfigId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        addLog("info", `等待分镜${i + 1}生成...`);
        const shotImageId = await waitForConfigComplete(shotConfigId);
        await waitForOutputReady(shotImageId);
        addLog("success", `分镜${i + 1}已生成`);
        createdNodes.shots.push({
          textId: shotTextId,
          configId: shotConfigId,
          imageId: shotImageId,
          title: shot.title
        });
      }
      addLog("success", `分镜工作流完成，共生成 ${shotCount} 个分镜`);
      return createdNodes;
    } catch (err) {
      addLog("error", `分镜工作流执行失败: ${err.message}`);
      throw err;
    }
  };
  const executeMultiAngleStoryboard = async (multiAngle, position) => {
    const nodeSpacing = 400;
    const rowSpacing = 300;
    let x = position.x;
    let y = position.y;
    const characterDesc = multiAngle?.character_description || "";
    const angles = ["front", "side", "back", "top"];
    addLog("info", `开始执行多角度分镜工作流: ${characterDesc.slice(0, 30)}...`);
    currentStep.value = 1;
    totalSteps.value = 2 + angles.length * 2;
    const createdNodes = {
      characterImageId: null,
      angles: []
    };
    try {
      const characterImageId = addNode("image", { x, y }, {
        url: "",
        label: "主角色图（请上传）",
        isCharacterRef: true
      });
      createdNodes.characterImageId = characterImageId;
      addLog("info", `创建主角色图节点: ${characterImageId}`);
      const angleX = x + nodeSpacing + 100;
      for (let i = 0; i < angles.length; i++) {
        const angleKey = angles[i];
        const angleConfig = MULTI_ANGLE_PROMPTS$1[angleKey];
        const angleY = y + i * rowSpacing;
        let currentX = angleX;
        currentStep.value = 2 + i * 2;
        const promptContent = angleConfig.prompt(characterDesc);
        const textNodeId = addNode("text", { x: currentX, y: angleY }, {
          content: promptContent,
          label: `${angleConfig.label}提示词`
        });
        addLog("info", `创建${angleConfig.label}提示词节点: ${textNodeId}`);
        currentX += nodeSpacing;
        currentStep.value = 3 + i * 2;
        const configNodeId = addNode("imageConfig", { x: currentX, y: angleY }, {
          label: `${angleConfig.label} (${angleConfig.english})`,
          autoExecute: false
          // 不自动执行，等待用户上传角色图
        });
        addLog("info", `创建${angleConfig.label}配置节点: ${configNodeId}`);
        addEdge({
          source: textNodeId,
          target: configNodeId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        addEdge({
          source: characterImageId,
          target: configNodeId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        createdNodes.angles.push({
          key: angleKey,
          label: angleConfig.label,
          english: angleConfig.english,
          textId: textNodeId,
          configId: configNodeId,
          imageId: null
        });
      }
      addLog("success", `多角度分镜工作流已创建，请上传主角色图后点击各节点的"立即生成"按钮`);
      window.$message?.info('请先上传主角色图，然后点击各角度节点的"立即生成"按钮');
      return createdNodes;
    } catch (err) {
      addLog("error", `多角度分镜工作流执行失败: ${err.message}`);
      throw err;
    }
  };
  const executePictureBook = async (pictureBook, position) => {
    const nodeSpacing = 420;
    const rowSpacing = 280;
    let x = position.x;
    let y = position.y;
    const { title, style: style2, character, pages } = pictureBook;
    const pageCount = pages?.length || 0;
    addLog("info", `开始执行儿童绘本工作流: ${title}, ${pageCount} 页`);
    currentStep.value = 1;
    totalSteps.value = 2 + pageCount * 2;
    const createdNodes = {
      characterLLMId: null,
      characterConfigId: null,
      characterImageId: null,
      pages: []
    };
    try {
      const characterPrompt = `${character?.name || "角色"}: ${character?.description || ""}

插画风格: ${style2 || "儿童绘本插画"}`;
      const characterTextId = addNode("text", { x, y }, {
        content: characterPrompt,
        label: `角色设定: ${character?.name || "主角"}`
      });
      addLog("info", `创建角色描述节点: ${characterTextId}`);
      x += nodeSpacing;
      currentStep.value = 2;
      createdNodes.characterConfigId = addNode("imageConfig", { x, y }, {
        label: `${character?.name || "角色"}参考图`,
        autoExecute: true
      });
      addLog("info", `创建角色参考图配置: ${createdNodes.characterConfigId}`);
      addEdge({
        source: characterTextId,
        target: createdNodes.characterConfigId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      addLog("info", "等待角色参考图生成...");
      createdNodes.characterImageId = await waitForConfigComplete(createdNodes.characterConfigId);
      await waitForOutputReady(createdNodes.characterImageId);
      addLog("success", "角色参考图已生成");
      for (let i = 0; i < pageCount; i++) {
        const page = pages[i];
        const pageY = y + (i + 1) * rowSpacing;
        let pageX = position.x;
        currentStep.value = 3 + i * 2;
        const storyTextId = addNode("text", { x: pageX, y: pageY - 80 }, {
          content: page.story_text,
          label: `第${page.page_number}页 故事文字`
        });
        addLog("info", `创建第${page.page_number}页故事文字: ${storyTextId}`);
        const illustrationPromptId = addNode("text", { x: pageX, y: pageY + 40 }, {
          content: page.illustration_prompt,
          label: `第${page.page_number}页 插画提示词`
        });
        addLog("info", `创建第${page.page_number}页插画提示词: ${illustrationPromptId}`);
        pageX += nodeSpacing;
        currentStep.value = 4 + i * 2;
        const pageConfigId = addNode("imageConfig", { x: pageX, y: pageY }, {
          label: `绘本第${page.page_number}页`,
          autoExecute: true
        });
        addLog("info", `创建第${page.page_number}页图片配置: ${pageConfigId}`);
        addEdge({
          source: illustrationPromptId,
          target: pageConfigId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        addEdge({
          source: createdNodes.characterImageId,
          target: pageConfigId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        addLog("info", `等待第${page.page_number}页插画生成...`);
        const pageImageId = await waitForConfigComplete(pageConfigId);
        await waitForOutputReady(pageImageId);
        addLog("success", `第${page.page_number}页插画已生成`);
        createdNodes.pages.push({
          storyTextId,
          illustrationPromptId,
          configId: pageConfigId,
          imageId: pageImageId,
          pageNumber: page.page_number
        });
      }
      addLog("success", `绘本工作流完成: ${title}，共 ${pageCount} 页`);
      return createdNodes;
    } catch (err) {
      addLog("error", `绘本工作流执行失败: ${err.message}`);
      throw err;
    }
  };
  const executeWorkflow = async (params, position) => {
    isExecuting.value = true;
    clearWatchers();
    executionLog.value = [];
    const { workflow_type, image_prompt, video_prompt, character, shots, multi_angle, picture_book } = params;
    try {
      switch (workflow_type) {
        case WORKFLOW_TYPES.PICTURE_BOOK:
          return await executePictureBook(picture_book, position);
        case WORKFLOW_TYPES.MULTI_ANGLE_STORYBOARD:
          return await executeMultiAngleStoryboard(multi_angle, position);
        case WORKFLOW_TYPES.STORYBOARD:
          return await executeStoryboard(character, shots, position);
        case WORKFLOW_TYPES.TEXT_TO_IMAGE_TO_VIDEO:
          return await executeTextToImageToVideo(image_prompt, video_prompt, position);
        case WORKFLOW_TYPES.TEXT_TO_IMAGE:
        default:
          return await executeTextToImage(image_prompt, position);
      }
    } finally {
      isExecuting.value = false;
      clearWatchers();
    }
  };
  const createTextToImageWorkflow = (imagePrompt, position) => {
    return executeWorkflow({
      workflow_type: WORKFLOW_TYPES.TEXT_TO_IMAGE,
      image_prompt: imagePrompt
    }, position);
  };
  const createMultiAngleStoryboard = (characterDescription, position) => {
    return executeWorkflow({
      workflow_type: WORKFLOW_TYPES.MULTI_ANGLE_STORYBOARD,
      multi_angle: { character_description: characterDescription }
    }, position);
  };
  const createPictureBook = (pictureBookParams, position) => {
    return executeWorkflow({
      workflow_type: WORKFLOW_TYPES.PICTURE_BOOK,
      picture_book: pictureBookParams
    }, position);
  };
  const reset = () => {
    isAnalyzing.value = false;
    isExecuting.value = false;
    currentStep.value = 0;
    totalSteps.value = 0;
    executionLog.value = [];
    clearWatchers();
  };
  return {
    // State
    isAnalyzing,
    isExecuting,
    currentStep,
    totalSteps,
    executionLog,
    // Methods
    analyzeIntent,
    executeWorkflow,
    createTextToImageWorkflow,
    createMultiAngleStoryboard,
    createPictureBook,
    reset,
    // Constants
    WORKFLOW_TYPES,
    MULTI_ANGLE_PROMPTS: MULTI_ANGLE_PROMPTS$1
  };
};
const _hoisted_1$d = { class: "space-y-4" };
const _hoisted_2$a = { class: "flex items-center gap-4 text-sm text-[var(--text-secondary)]" };
const _hoisted_3$a = { key: 0 };
const _hoisted_4$9 = { class: "grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto" };
const _hoisted_5$9 = ["onClick"];
const _hoisted_6$9 = ["src"];
const _hoisted_7$9 = { class: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" };
const _hoisted_8$8 = { key: 1 };
const _hoisted_9$8 = { class: "space-y-2 max-h-[200px] overflow-y-auto" };
const _hoisted_10$8 = ["onClick"];
const _hoisted_11$7 = { class: "w-16 h-10 rounded bg-[var(--bg-primary)] flex items-center justify-center" };
const _hoisted_12$7 = { class: "flex-1 min-w-0" };
const _hoisted_13$5 = { class: "text-sm truncate" };
const _hoisted_14$4 = { class: "text-xs text-[var(--text-secondary)]" };
const _hoisted_15$3 = {
  key: 2,
  class: "text-center py-8 text-[var(--text-secondary)]"
};
const _hoisted_16$3 = { class: "flex items-center justify-end" };
const _sfc_main$d = {
  __name: "DownloadModal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:show"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const visible = computed({
      get: () => props.show,
      set: (val) => emit("update:show", val)
    });
    const imageAssets = computed(() => {
      return nodes.value.filter((n) => n.type === "image" && n.data?.url).map((n) => ({
        url: n.data.url,
        label: n.data.label || "图片",
        nodeId: n.id
      }));
    });
    const videoAssets = computed(() => {
      return nodes.value.filter((n) => n.type === "video" && n.data?.url).map((n) => ({
        url: n.data.url,
        label: n.data.label || "视频",
        duration: n.data.duration,
        nodeId: n.id
      }));
    });
    const downloadAsset = (asset) => {
      window.open(asset.url, "_blank");
      window.$message?.success("已在新标签页打开");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NModal), {
        show: visible.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
        preset: "card",
        title: "素材下载",
        style: { "width": "600px", "max-width": "90vw" }
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_16$3, [
            createVNode(unref(Button), {
              onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
            }, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode("关闭", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$d, [
            createBaseVNode("div", _hoisted_2$a, [
              createBaseVNode("span", null, "图片: " + toDisplayString(imageAssets.value.length) + " 张", 1),
              createBaseVNode("span", null, "视频: " + toDisplayString(videoAssets.value.length) + " 个", 1)
            ]),
            imageAssets.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
              _cache[2] || (_cache[2] = createBaseVNode("h4", { class: "text-sm font-medium mb-2" }, "图片素材", -1)),
              createBaseVNode("div", _hoisted_4$9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(imageAssets.value, (asset, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: idx,
                    class: "relative aspect-square rounded-lg overflow-hidden bg-[var(--bg-tertiary)] cursor-pointer group",
                    onClick: ($event) => downloadAsset(asset)
                  }, [
                    createBaseVNode("img", {
                      src: asset.url,
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_6$9),
                    createBaseVNode("div", _hoisted_7$9, [
                      createVNode(unref(NIcon), {
                        size: 24,
                        color: "white"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DownloadOutline))
                        ]),
                        _: 1
                      })
                    ])
                  ], 8, _hoisted_5$9);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            videoAssets.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8$8, [
              _cache[3] || (_cache[3] = createBaseVNode("h4", { class: "text-sm font-medium mb-2" }, "视频素材", -1)),
              createBaseVNode("div", _hoisted_9$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(videoAssets.value, (asset, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: idx,
                    class: "flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] cursor-pointer transition-colors",
                    onClick: ($event) => downloadAsset(asset)
                  }, [
                    createBaseVNode("div", _hoisted_11$7, [
                      createVNode(unref(NIcon), { size: 20 }, {
                        default: withCtx(() => [
                          createVNode(unref(VideocamOutline))
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_12$7, [
                      createBaseVNode("div", _hoisted_13$5, toDisplayString(asset.label || "视频"), 1),
                      createBaseVNode("div", _hoisted_14$4, toDisplayString(asset.duration ? asset.duration + "s" : ""), 1)
                    ]),
                    createVNode(unref(NIcon), {
                      size: 20,
                      class: "text-[var(--text-secondary)]"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DownloadOutline))
                      ]),
                      _: 1
                    })
                  ], 8, _hoisted_10$8);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            imageAssets.value.length === 0 && videoAssets.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15$3, " 暂无可下载的素材 ")) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
};
const workflowCover1 = "" + new URL("workflow01-CDdiXUyB.jpeg", import.meta.url).href;
const workflowCover2 = "" + new URL("workflow02-QMxOHURi.jpeg", import.meta.url).href;
const workflowCover3 = "" + new URL("workflow03-BvhnKici.jpeg", import.meta.url).href;
const product01 = "data:image/jpeg;base64,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";
const scene01 = "" + new URL("scene01-BNbJb8yQ.jpeg", import.meta.url).href;
const shot01 = "" + new URL("shot01-ORCbyWdX.jpeg", import.meta.url).href;
const MULTI_ANGLE_PROMPTS = {
  front: {
    label: "正视",
    english: "Front View",
    prompt: (character) => `使用提供的图片，生成四宫格分镜，每张四宫格包括人物正面对着镜头的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  side: {
    label: "侧视",
    english: "Side View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括人物侧面角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  back: {
    label: "后视",
    english: "Back View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括人物背影角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  },
  top: {
    label: "俯视",
    english: "Top/Bird's Eye View",
    prompt: (character) => `使用提供的图片，分别生成四宫格分镜，每张四宫格包括俯视角度的4个景别（远景、中景、近景、和局部特写），保持场景、产品、人物特征的一致性，宫格里的每一张照片保持和提供图片相同的比例。并在图片下方用英文标注这个景别

角色参考: ${character}`
  }
};
const WORKFLOW_TEMPLATES = [
  {
    id: "multi-angle-storyboard",
    name: "多角度分镜",
    description: "生成角色的正视、侧视、后视、俯视四宫格分镜图",
    icon: "GridOutline",
    category: "storyboard",
    cover: workflowCover1,
    // 节点配置
    createNodes: (startPosition) => {
      const nodeSpacing = 400;
      const rowSpacing = 280;
      const angles = ["front", "side", "back", "top"];
      const nodes2 = [];
      const edges2 = [];
      let nodeIdCounter = 0;
      const getNodeId2 = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`;
      const characterTextId = getNodeId2();
      nodes2.push({
        id: characterTextId,
        type: "text",
        position: { x: startPosition.x, y: startPosition.y + rowSpacing * 1.5 },
        data: {
          content: "",
          label: "角色提示词"
        }
      });
      const characterConfigId = getNodeId2();
      nodes2.push({
        id: characterConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + nodeSpacing, y: startPosition.y + rowSpacing * 1.5 },
        data: {
          label: "主角色图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const characterImageId = getNodeId2();
      nodes2.push({
        id: characterImageId,
        type: "image",
        position: { x: startPosition.x + nodeSpacing * 2, y: startPosition.y + rowSpacing * 1.5 },
        data: {
          url: "",
          label: "角色图结果"
        }
      });
      edges2.push({
        id: `edge_${characterTextId}_${characterConfigId}`,
        source: characterTextId,
        target: characterConfigId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${characterConfigId}_${characterImageId}`,
        source: characterConfigId,
        target: characterImageId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      const angleX = startPosition.x + nodeSpacing * 3 + 100;
      angles.forEach((angleKey, index) => {
        const angleConfig = MULTI_ANGLE_PROMPTS[angleKey];
        const angleY = startPosition.y + index * rowSpacing;
        let currentX = angleX;
        const textNodeId = getNodeId2();
        nodes2.push({
          id: textNodeId,
          type: "text",
          position: { x: currentX, y: angleY },
          data: {
            content: angleConfig.prompt(""),
            label: `${angleConfig.label}提示词`
          }
        });
        currentX += nodeSpacing;
        const configNodeId = getNodeId2();
        nodes2.push({
          id: configNodeId,
          type: "imageConfig",
          position: { x: currentX, y: angleY },
          data: {
            label: `${angleConfig.label} (${angleConfig.english})`,
            model: "doubao-seedream-4-5-251128",
            size: "2048x2048"
          }
        });
        edges2.push({
          id: `edge_${textNodeId}_${configNodeId}`,
          source: textNodeId,
          target: configNodeId,
          type: "promptOrder",
          data: { promptOrder: 1 },
          sourceHandle: "right",
          targetHandle: "left"
        });
        edges2.push({
          id: `edge_${characterImageId}_${configNodeId}`,
          source: characterImageId,
          target: configNodeId,
          type: "imageOrder",
          data: { imageOrder: 1 },
          sourceHandle: "right",
          targetHandle: "left"
        });
      });
      return { nodes: nodes2, edges: edges2 };
    }
  },
  {
    id: "product-ecommerce-full-set",
    name: "通用产品全套电商图",
    description: "根据产品信息和图片，生成模特图、侧面展示图、俯瞰展示图",
    icon: "ShoppingOutline",
    category: "ecommerce",
    cover: workflowCover2,
    // 节点配置
    createNodes: (startPosition) => {
      const colSpacing = 500;
      const rowSpacing = 350;
      const nodes2 = [];
      const edges2 = [];
      let nodeIdCounter = 0;
      const getNodeId2 = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`;
      const nodeA_productInfoId = getNodeId2();
      nodes2.push({
        id: nodeA_productInfoId,
        type: "text",
        position: { x: startPosition.x, y: startPosition.y },
        data: {
          content: "Soundcore by Anker P20i真无线耳机，10mm驱动单元带来强劲低音，蓝牙5.3，30小时超长续航，防水，2个麦克风实现AI清晰通话，22种预设均衡器，可通过App定制 强劲低音：Soundcore P20i真无线耳机搭载超大10mm驱动单元，带来强劲音效和增强的低音，让您沉浸在喜爱的歌曲中。 个性化聆听体验：使用Soundcore App自定义控制选项，并从22种预设均衡器中进行选择。借助“Find My Earbuds”（查找我的耳机）功能，丢失的耳机可以发出声音，帮助您定位。 长续航，快速充电：单次充电可提供10小时电池续航，搭配充电盒则可延长至30小时。如果P20i真无线耳机电量不足，仅需10分钟快速充电即可提供2小时播放时间。 便携式设计：Soundcore P20i真无线耳机和充电盒小巧轻便，配有挂绳。其体积足够小，可轻松放入口袋，或挂在包或钥匙上，让您无需担心空间问题。 AI增强清晰通话：2个内置麦克风和AI算法协同工作，捕捉您的声音，让您无需在电话中大喊大叫。",
          label: "产品信息"
        }
      });
      const nodeB_productImageId = getNodeId2();
      nodes2.push({
        id: nodeB_productImageId,
        type: "image",
        position: { x: startPosition.x, y: startPosition.y + rowSpacing },
        data: {
          // url: 'https://ffile.chatfire.site/image/covers/product01.jpg',
          url: product01,
          label: "产品图片"
        }
      });
      const nodeC_modelPromptId = getNodeId2();
      nodes2.push({
        id: nodeC_modelPromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y },
        data: {
          content: "根据产品特性，生成一个适合展示该产品且时尚富有高级感的模特图，彩色人像，背景是白底，人物居中，欧美人优先",
          label: "模特图提示词"
        }
      });
      const nodeD_sidePromptId = getNodeId2();
      nodes2.push({
        id: nodeD_sidePromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y + rowSpacing },
        data: {
          content: "根据产品图和产品信息，生成左侧侧面45度的展示图，高清展示侧面的产品形状和细节，保持产品不变形",
          label: "侧面展示图提示词"
        }
      });
      const nodeE_topPromptId = getNodeId2();
      nodes2.push({
        id: nodeE_topPromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y + rowSpacing * 2 },
        data: {
          content: "根据产品图和产品信息，生成从上往下俯瞰的产品展示图，高清展示俯瞰角度的产品形状和细节，保持产品不变形",
          label: "俯瞰展示图提示词"
        }
      });
      const nodeF_explodedPromptId = getNodeId2();
      nodes2.push({
        id: nodeF_explodedPromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y + rowSpacing * 3 },
        data: {
          content: "根据产品材质功能，生成一张产品核心部件的结构示意图，要展现出产品核心部件的内部构造，画面清晰呈现产品关键部件，背景为简洁的浅色调，同时包含核心卖点文案",
          label: "拆解图提示词"
        }
      });
      const modelConfigId = getNodeId2();
      nodes2.push({
        id: modelConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y },
        data: {
          label: "生成模特图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const sideConfigId = getNodeId2();
      nodes2.push({
        id: sideConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y + rowSpacing },
        data: {
          label: "侧面展示图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const topConfigId = getNodeId2();
      nodes2.push({
        id: topConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y + rowSpacing * 2 },
        data: {
          label: "俯瞰展示图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const explodedConfigId = getNodeId2();
      nodes2.push({
        id: explodedConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y + rowSpacing * 3 },
        data: {
          label: "拆解图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      edges2.push({
        id: `edge_${nodeA_productInfoId}_${modelConfigId}`,
        source: nodeA_productInfoId,
        target: modelConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeB_productImageId}_${modelConfigId}`,
        source: nodeB_productImageId,
        target: modelConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeC_modelPromptId}_${modelConfigId}`,
        source: nodeC_modelPromptId,
        target: modelConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeA_productInfoId}_${sideConfigId}`,
        source: nodeA_productInfoId,
        target: sideConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeB_productImageId}_${sideConfigId}`,
        source: nodeB_productImageId,
        target: sideConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeD_sidePromptId}_${sideConfigId}`,
        source: nodeD_sidePromptId,
        target: sideConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeA_productInfoId}_${topConfigId}`,
        source: nodeA_productInfoId,
        target: topConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeB_productImageId}_${topConfigId}`,
        source: nodeB_productImageId,
        target: topConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeE_topPromptId}_${topConfigId}`,
        source: nodeE_topPromptId,
        target: topConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeA_productInfoId}_${explodedConfigId}`,
        source: nodeA_productInfoId,
        target: explodedConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeB_productImageId}_${explodedConfigId}`,
        source: nodeB_productImageId,
        target: explodedConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nodeF_explodedPromptId}_${explodedConfigId}`,
        source: nodeF_explodedPromptId,
        target: explodedConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      return { nodes: nodes2, edges: edges2 };
    }
  },
  // ========== 短剧生图工作流 ==========
  {
    id: "drama-character-design",
    name: "短剧角色设计",
    description: "根据角色描述生成一致性角色形象，后续多角度图依赖正面图保持一致性",
    icon: "PersonOutline",
    category: "drama",
    cover: shot01,
    createNodes: (startPosition) => {
      const colSpacing = 400;
      const rowSpacing = 280;
      const nodes2 = [];
      const edges2 = [];
      let nodeIdCounter = 0;
      const getNodeId2 = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`;
      const characterDescId = getNodeId2();
      nodes2.push({
        id: characterDescId,
        type: "text",
        position: { x: startPosition.x, y: startPosition.y },
        data: {
          content: "角色名称：林小雨\n性别：女\n年龄：22岁\n外貌特征：长发及腰，眼睛明亮有神，皮肤白皙，身材高挑\n服装风格：现代都市风，白色连衣裙\n性格特点：温柔善良，内心坚强",
          label: "角色描述"
        }
      });
      const styleRefId = getNodeId2();
      nodes2.push({
        id: styleRefId,
        type: "image",
        position: { x: startPosition.x, y: startPosition.y + rowSpacing },
        data: {
          url: "",
          label: "风格参考图（可选）"
        }
      });
      const frontPromptId = getNodeId2();
      nodes2.push({
        id: frontPromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y },
        data: {
          content: "根据角色描述，生成角色的正面全身照，人物居中，白色简洁背景，高清写实风格，电影级画质",
          label: "正面全身提示词"
        }
      });
      const frontConfigId = getNodeId2();
      nodes2.push({
        id: frontConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y },
        data: {
          label: "生成正面全身图",
          model: "doubao-seedream-4-5-251128",
          size: "1440x2560"
        }
      });
      const frontResultId = getNodeId2();
      nodes2.push({
        id: frontResultId,
        type: "image",
        position: { x: startPosition.x + colSpacing * 3, y: startPosition.y },
        data: {
          url: "",
          label: "正面角色图（参考基准）"
        }
      });
      const sidePromptId = getNodeId2();
      nodes2.push({
        id: sidePromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing * 3 + 100, y: startPosition.y + rowSpacing },
        data: {
          content: "参考提供的角色正面图，保持人物外貌、服装完全一致，生成角色的侧面半身照，45度角侧脸，展示五官轮廓，白色简洁背景，高清写实风格",
          label: "侧面半身提示词"
        }
      });
      const closeupPromptId = getNodeId2();
      nodes2.push({
        id: closeupPromptId,
        type: "text",
        position: {
          x: startPosition.x + colSpacing * 3 + 100,
          y: startPosition.y + rowSpacing * 2
        },
        data: {
          content: "参考提供的角色正面图，保持人物五官、发型完全一致，生成角色的面部特写，展示多种表情（微笑、严肃、惊讶、悲伤），四宫格布局，高清写实风格",
          label: "表情特写提示词"
        }
      });
      const backPromptId = getNodeId2();
      nodes2.push({
        id: backPromptId,
        type: "text",
        position: {
          x: startPosition.x + colSpacing * 3 + 100,
          y: startPosition.y + rowSpacing * 3
        },
        data: {
          content: "参考提供的角色正面图，保持人物发型、服装、身材完全一致，生成角色的背面全身照，展示背影，白色简洁背景，高清写实风格",
          label: "背面全身提示词"
        }
      });
      const sideConfigId = getNodeId2();
      nodes2.push({
        id: sideConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 4 + 100, y: startPosition.y + rowSpacing },
        data: {
          label: "侧面半身图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const closeupConfigId = getNodeId2();
      nodes2.push({
        id: closeupConfigId,
        type: "imageConfig",
        position: {
          x: startPosition.x + colSpacing * 4 + 100,
          y: startPosition.y + rowSpacing * 2
        },
        data: {
          label: "表情特写图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      const backConfigId = getNodeId2();
      nodes2.push({
        id: backConfigId,
        type: "imageConfig",
        position: {
          x: startPosition.x + colSpacing * 4 + 100,
          y: startPosition.y + rowSpacing * 3
        },
        data: {
          label: "背面全身图",
          model: "doubao-seedream-4-5-251128",
          size: "1440x2560"
        }
      });
      edges2.push({
        id: `edge_${characterDescId}_${frontConfigId}`,
        source: characterDescId,
        target: frontConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${styleRefId}_${frontConfigId}`,
        source: styleRefId,
        target: frontConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${frontPromptId}_${frontConfigId}`,
        source: frontPromptId,
        target: frontConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${frontConfigId}_${frontResultId}`,
        source: frontConfigId,
        target: frontResultId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${frontResultId}_${sideConfigId}`,
        source: frontResultId,
        target: sideConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${frontResultId}_${closeupConfigId}`,
        source: frontResultId,
        target: closeupConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${frontResultId}_${backConfigId}`,
        source: frontResultId,
        target: backConfigId,
        type: "imageOrder",
        data: { imageOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${sidePromptId}_${sideConfigId}`,
        source: sidePromptId,
        target: sideConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${closeupPromptId}_${closeupConfigId}`,
        source: closeupPromptId,
        target: closeupConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${backPromptId}_${backConfigId}`,
        source: backPromptId,
        target: backConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      return { nodes: nodes2, edges: edges2 };
    }
  },
  {
    id: "drama-scene-background",
    name: "多时段场景背景",
    description: "先生成基础场景，再基于基础场景生成多时段变体，保持场景一致性",
    icon: "ImageOutline",
    category: "drama",
    cover: scene01,
    createNodes: (startPosition) => {
      const colSpacing = 400;
      const rowSpacing = 260;
      const nodes2 = [];
      const edges2 = [];
      let nodeIdCounter = 0;
      const getNodeId2 = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`;
      const sceneDescId = getNodeId2();
      nodes2.push({
        id: sceneDescId,
        type: "text",
        position: { x: startPosition.x, y: startPosition.y },
        data: {
          content: "场景名称：现代都市街道\n位置：繁华商业区主街道\n环境特征：高楼大厦林立，霓虹灯招牌，车水马龙\n氛围：都市繁华、现代感强\n特殊元素：咖啡店、书店、商场入口",
          label: "场景描述"
        }
      });
      const basePromptId = getNodeId2();
      nodes2.push({
        id: basePromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing, y: startPosition.y },
        data: {
          content: "根据场景描述，生成白天正午时段的场景背景作为基准，阳光明媚，光线充足均匀，展示场景全貌和所有环境元素，纯背景无人物，电影级画质，宽屏构图",
          label: "基础场景提示词"
        }
      });
      const baseConfigId = getNodeId2();
      nodes2.push({
        id: baseConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y },
        data: {
          label: "生成基础场景",
          model: "doubao-seedream-4-5-251128",
          size: "2560x1440"
        }
      });
      const baseResultId = getNodeId2();
      nodes2.push({
        id: baseResultId,
        type: "image",
        position: { x: startPosition.x + colSpacing * 3, y: startPosition.y },
        data: {
          url: "",
          label: "基础场景图（参考基准）"
        }
      });
      const eveningPromptId = getNodeId2();
      nodes2.push({
        id: eveningPromptId,
        type: "text",
        position: { x: startPosition.x + colSpacing * 3 + 100, y: startPosition.y + rowSpacing },
        data: {
          content: "参考提供的基础场景图，保持场景构图、建筑、环境元素完全一致，仅改变光照为傍晚时段：夕阳西下，天空呈橙红色渐变，光线柔和温暖，建筑投射长影",
          label: "傍晚场景提示词"
        }
      });
      const nightPromptId = getNodeId2();
      nodes2.push({
        id: nightPromptId,
        type: "text",
        position: {
          x: startPosition.x + colSpacing * 3 + 100,
          y: startPosition.y + rowSpacing * 2
        },
        data: {
          content: "参考提供的基础场景图，保持场景构图、建筑、环境元素完全一致，仅改变光照为夜晚时段：霓虹灯亮起，城市灯光璀璨，天空深蓝或黑色，窗户透出暖光",
          label: "夜晚场景提示词"
        }
      });
      const rainPromptId = getNodeId2();
      nodes2.push({
        id: rainPromptId,
        type: "text",
        position: {
          x: startPosition.x + colSpacing * 3 + 100,
          y: startPosition.y + rowSpacing * 3
        },
        data: {
          content: "参考提供的基础场景图，保持场景构图、建筑、环境元素完全一致，仅改变天气为雨天：细雨绵绵，地面湿润有倒影，天空阴沉灰暗，氛围忧郁",
          label: "雨天场景提示词"
        }
      });
      const eveningConfigId = getNodeId2();
      nodes2.push({
        id: eveningConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 4 + 100, y: startPosition.y + rowSpacing },
        data: {
          label: "傍晚场景",
          model: "doubao-seedream-4-5-251128",
          size: "2560x1440"
        }
      });
      const nightConfigId = getNodeId2();
      nodes2.push({
        id: nightConfigId,
        type: "imageConfig",
        position: {
          x: startPosition.x + colSpacing * 4 + 100,
          y: startPosition.y + rowSpacing * 2
        },
        data: {
          label: "夜晚场景",
          model: "doubao-seedream-4-5-251128",
          size: "2560x1440"
        }
      });
      const rainConfigId = getNodeId2();
      nodes2.push({
        id: rainConfigId,
        type: "imageConfig",
        position: {
          x: startPosition.x + colSpacing * 4 + 100,
          y: startPosition.y + rowSpacing * 3
        },
        data: {
          label: "雨天场景",
          model: "doubao-seedream-4-5-251128",
          size: "2560x1440"
        }
      });
      edges2.push({
        id: `edge_${sceneDescId}_${baseConfigId}`,
        source: sceneDescId,
        target: baseConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${basePromptId}_${baseConfigId}`,
        source: basePromptId,
        target: baseConfigId,
        type: "promptOrder",
        data: { promptOrder: 2 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${baseConfigId}_${baseResultId}`,
        source: baseConfigId,
        target: baseResultId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      const variantConfigs = [eveningConfigId, nightConfigId, rainConfigId];
      variantConfigs.forEach((configId) => {
        edges2.push({
          id: `edge_${baseResultId}_${configId}`,
          source: baseResultId,
          target: configId,
          type: "imageOrder",
          data: { imageOrder: 1 },
          sourceHandle: "right",
          targetHandle: "left"
        });
      });
      edges2.push({
        id: `edge_${eveningPromptId}_${eveningConfigId}`,
        source: eveningPromptId,
        target: eveningConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${nightPromptId}_${nightConfigId}`,
        source: nightPromptId,
        target: nightConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      edges2.push({
        id: `edge_${rainPromptId}_${rainConfigId}`,
        source: rainPromptId,
        target: rainConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      return { nodes: nodes2, edges: edges2 };
    }
  },
  // {
  //   id: 'drama-storyboard-shot',
  //   name: '短剧分镜图',
  //   description: '根据角色、场景和剧情描述生成分镜画面',
  //   icon: 'FilmOutline',
  //   category: 'drama',
  //   cover: workflowCover1,
  //   createNodes: (startPosition) => {
  //     const colSpacing = 400
  //     const rowSpacing = 250
  //     const nodes = []
  //     const edges = []
  //     let nodeIdCounter = 0
  //     const getNodeId = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`
  //     // ========== 输入节点 ==========
  //     // 角色参考图
  //     const characterRefId = getNodeId()
  //     nodes.push({
  //       id: characterRefId,
  //       type: 'image',
  //       position: { x: startPosition.x, y: startPosition.y },
  //       data: {
  //         url: '',
  //         label: '角色参考图'
  //       }
  //     })
  //     // 场景背景图
  //     const sceneRefId = getNodeId()
  //     nodes.push({
  //       id: sceneRefId,
  //       type: 'image',
  //       position: { x: startPosition.x, y: startPosition.y + rowSpacing },
  //       data: {
  //         url: '',
  //         label: '场景背景图'
  //       }
  //     })
  //     // 分镜描述
  //     const shotDescId = getNodeId()
  //     nodes.push({
  //       id: shotDescId,
  //       type: 'text',
  //       position: { x: startPosition.x, y: startPosition.y + rowSpacing * 2 },
  //       data: {
  //         content: '分镜编号：001\n景别：中景\n镜头角度：平视\n画面描述：女主角站在咖啡店门口，手持一杯咖啡，微微低头看着手机，若有所思\n人物动作：站立，单手持咖啡，另一手拿手机\n表情：略带忧郁，眉头微蹙\n光线：自然光，侧逆光',
  //         label: '分镜描述'
  //       }
  //     })
  //     // ========== 生成提示词 ==========
  //     const shotPromptId = getNodeId()
  //     nodes.push({
  //       id: shotPromptId,
  //       type: 'text',
  //       position: { x: startPosition.x + colSpacing, y: startPosition.y + rowSpacing },
  //       data: {
  //         content: '根据角色参考图、场景背景和分镜描述，生成电影级分镜画面，保持角色外貌一致，场景融合自然，光影效果符合描述，16:9宽屏比例，电影调色',
  //         label: '分镜生成提示词'
  //       }
  //     })
  //     // ========== 生成节点 ==========
  //     const shotConfigId = getNodeId()
  //     nodes.push({
  //       id: shotConfigId,
  //       type: 'imageConfig',
  //       position: { x: startPosition.x + colSpacing * 2, y: startPosition.y + rowSpacing },
  //       data: {
  //         label: '分镜画面',
  //         model: 'doubao-seedream-4-5-251128',
  //         size: '2560x1440'
  //       }
  //     })
  //     // ========== 连线 ==========
  //     edges.push({
  //       id: `edge_${characterRefId}_${shotConfigId}`,
  //       source: characterRefId,
  //       target: shotConfigId,
  //       sourceHandle: 'right',
  //       targetHandle: 'left'
  //     })
  //     edges.push({
  //       id: `edge_${sceneRefId}_${shotConfigId}`,
  //       source: sceneRefId,
  //       target: shotConfigId,
  //       sourceHandle: 'right',
  //       targetHandle: 'left'
  //     })
  //     edges.push({
  //       id: `edge_${shotDescId}_${shotConfigId}`,
  //       source: shotDescId,
  //       target: shotConfigId,
  //       type: 'promptOrder',
  //       data: { promptOrder: 1 },
  //       sourceHandle: 'right',
  //       targetHandle: 'left'
  //     })
  //     edges.push({
  //       id: `edge_${shotPromptId}_${shotConfigId}`,
  //       source: shotPromptId,
  //       target: shotConfigId,
  //       type: 'promptOrder',
  //       data: { promptOrder: 2 },
  //       sourceHandle: 'right',
  //       targetHandle: 'left'
  //     })
  //     return { nodes, edges }
  //   }
  // },
  // ========== 儿童绘本工作流 ==========
  {
    id: "picture-book-generator",
    name: "儿童绘本生成",
    description: "角色生成 → 剧情文字 → 绘本插画，支持角色一致性",
    icon: "BookOutline",
    category: "creative",
    cover: workflowCover3,
    createNodes: (startPosition) => {
      const colSpacing = 420;
      const rowSpacing = 280;
      const nodes2 = [];
      const edges2 = [];
      let nodeIdCounter = 0;
      const getNodeId2 = () => `workflow_node_${Date.now()}_${nodeIdCounter++}`;
      const storyInputId = getNodeId2();
      nodes2.push({
        id: storyInputId,
        type: "text",
        position: { x: startPosition.x, y: startPosition.y },
        data: {
          content: `【绘本名称】小兔子的冒险之旅

【故事主题】勇气与友谊

【主要角色】
1. 小白兔米米 - 主角，白色毛发，粉红色耳朵内侧，穿蓝色背带裤，性格勇敢好奇
2. 小狐狸橙橙 - 伙伴，橙色毛发，白色尾巴尖，戴绿色围巾，聪明机智

【故事梗概】
小白兔米米住在森林边的小木屋里，有一天她发现了一张神秘的藏宝图。在好朋友小狐狸橙橙的陪伴下，她们踏上了寻宝之旅。途中遇到各种挑战，最后发现真正的宝藏是友谊和勇气。

【画风要求】
温馨治愈的水彩绘本风格，色彩明亮柔和，适合3-6岁儿童阅读`,
          label: "故事大纲"
        }
      });
      const characterLLMId = getNodeId2();
      nodes2.push({
        id: characterLLMId,
        type: "llmConfig",
        position: { x: startPosition.x + colSpacing, y: startPosition.y - rowSpacing },
        data: {
          label: "角色设计生成",
          systemPrompt: `你是专业的绘本角色设计师。根据故事大纲提取所有角色，为每个角色生成适合图像生成的详细提示词。

输出格式（用换行分隔每个角色）：
[角色名]
[角色图像生成提示词]
---

输出要求：
1. 识别故事中的所有角色（主角、配角等）
2. 提示词包含：外貌特征、服装、表情、姿态、场景
3. 使用绘本水彩风格描述
4. 末尾加上"白色简洁背景，儿童绘本水彩风格，温馨治愈，色彩明亮柔和"
5. 直接输出，不要编号、标题或其他格式标记`,
          model: "gpt-4o-mini",
          outputFormat: "text"
        }
      });
      edges2.push({
        id: `edge_${storyInputId}_${characterLLMId}`,
        source: storyInputId,
        target: characterLLMId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      const characterConfigId = getNodeId2();
      nodes2.push({
        id: characterConfigId,
        type: "imageConfig",
        position: { x: startPosition.x + colSpacing * 2, y: startPosition.y - rowSpacing },
        data: {
          label: "角色参考图",
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048"
        }
      });
      edges2.push({
        id: `edge_${characterLLMId}_${characterConfigId}`,
        source: characterLLMId,
        target: characterConfigId,
        type: "promptOrder",
        data: { promptOrder: 1 },
        sourceHandle: "right",
        targetHandle: "left"
      });
      const characterImageId = getNodeId2();
      nodes2.push({
        id: characterImageId,
        type: "image",
        position: { x: startPosition.x + colSpacing * 3, y: startPosition.y - rowSpacing },
        data: {
          url: "",
          label: "角色参考图结果"
        }
      });
      edges2.push({
        id: `edge_${characterConfigId}_${characterImageId}`,
        source: characterConfigId,
        target: characterImageId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      const storyLLMId = getNodeId2();
      nodes2.push({
        id: storyLLMId,
        type: "llmConfig",
        position: { x: startPosition.x + colSpacing, y: startPosition.y + rowSpacing * 0.5 },
        data: {
          label: "剧情拆分",
          systemPrompt: `你是专业的绘本编剧。将故事拆分成绘本页面内容。

输出格式（严格按此格式，换行分割每页）：
第1页：[故事配文] | [插画描述提示词]
第2页：[故事配文] | [插画描述提示词]
...

要求：
1. 根据故事复杂度拆分为4-8页
2. 故事配文简洁温馨，适合3-6岁儿童（每页不超过30字）
3. 插画描述要详细，包含角色外貌特征、动作、场景、色调
4. 每页插画描述末尾加上画风说明以保持一致
5. 故事节奏：开场→发展→高潮→温馨结局`,
          model: "gpt-4o",
          outputFormat: "text"
        }
      });
      edges2.push({
        id: `edge_${storyInputId}_${storyLLMId}`,
        source: storyInputId,
        target: storyLLMId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      const hintId = getNodeId2();
      nodes2.push({
        id: hintId,
        type: "text",
        position: { x: startPosition.x + colSpacing * 2.5, y: startPosition.y + rowSpacing * 0.5 },
        data: {
          content: `操作步骤：
1. 先点击「角色设计生成」的【执行生成】，等待生成所有角色参考图
2. 再点击「剧情拆分」的【执行生成】，等待 LLM 输出剧本
3. 在剧情拆分节点中点击【拆分为绘本页】按钮
4. 系统将自动创建每页的故事文字、插画描述和图片生成节点
5. 每页图片会自动关联角色参考图，保持角色一致性
6. 点击各页的【立即生成】按钮生成绘本插画`,
          label: "📖 操作指南"
        }
      });
      return { nodes: nodes2, edges: edges2 };
    }
  }
];
const _hoisted_1$c = {
  key: 0,
  class: "workflow-panel"
};
const _hoisted_2$9 = { class: "panel-header" };
const _hoisted_3$9 = { class: "panel-tabs" };
const _hoisted_4$8 = { class: "panel-content" };
const _hoisted_5$8 = {
  key: 0,
  class: "workflow-grid"
};
const _hoisted_6$8 = ["onClick"];
const _hoisted_7$8 = { class: "card-cover" };
const _hoisted_8$7 = ["src", "alt"];
const _hoisted_9$7 = { class: "card-title" };
const _hoisted_10$7 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main$c = {
  __name: "WorkflowPanel",
  props: {
    show: Boolean
  },
  emits: ["update:show", "add-workflow"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeTab = ref("public");
    const visible = computed({
      get: () => props.show,
      set: (val) => emit("update:show", val)
    });
    const publicWorkflows = computed(() => WORKFLOW_TEMPLATES);
    const iconMap = {
      GridOutline,
      ImageOutline,
      VideocamOutline,
      BookOutline,
      PersonOutline,
      ShoppingOutline: CartOutline,
      ChatbubbleOutline
    };
    const getIcon = (iconName) => {
      return iconMap[iconName] || GridOutline;
    };
    const handleAddWorkflow = (workflow) => {
      emit("add-workflow", { workflow, options: {} });
      visible.value = false;
    };
    const handleClickOutside = () => {
      visible.value = false;
    };
    const vClickOutside = {
      mounted(el, binding) {
        el._clickOutside = (e) => {
          if (!el.contains(e.target)) {
            binding.value();
          }
        };
        setTimeout(() => {
          document.addEventListener("click", el._clickOutside);
        }, 0);
      },
      unmounted(el) {
        document.removeEventListener("click", el._clickOutside);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition$2, { name: "panel-slide" }, {
        default: withCtx(() => [
          visible.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$c, [
            createBaseVNode("div", _hoisted_2$9, [
              createBaseVNode("div", _hoisted_3$9, [
                createBaseVNode("span", {
                  class: normalizeClass(["tab-item", { active: activeTab.value === "public" }]),
                  onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "public")
                }, "公共工作流", 2),
                createBaseVNode("span", {
                  class: normalizeClass(["tab-item", { active: activeTab.value === "my" }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "my")
                }, "我的工作流", 2)
              ]),
              createBaseVNode("button", {
                class: "expand-btn",
                onClick: _cache[2] || (_cache[2] = ($event) => visible.value = false)
              }, [
                createVNode(unref(NIcon), { size: 16 }, {
                  default: withCtx(() => [
                    createVNode(unref(CloseOutline))
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_4$8, [
              activeTab.value === "public" ? (openBlock(), createElementBlock("div", _hoisted_5$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(publicWorkflows.value, (workflow) => {
                  return openBlock(), createElementBlock("div", {
                    key: workflow.id,
                    class: "workflow-card",
                    onClick: ($event) => handleAddWorkflow(workflow)
                  }, [
                    createBaseVNode("div", _hoisted_7$8, [
                      workflow.cover ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: workflow.cover,
                        alt: workflow.name,
                        class: "cover-img"
                      }, null, 8, _hoisted_8$7)) : (openBlock(), createBlock(unref(NIcon), {
                        key: 1,
                        size: 36,
                        class: "cover-icon"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(getIcon(workflow.icon))))
                        ]),
                        _: 2
                      }, 1024))
                    ]),
                    createBaseVNode("div", _hoisted_9$7, toDisplayString(workflow.name), 1)
                  ], 8, _hoisted_6$8);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_10$7, [
                createVNode(unref(NIcon), {
                  size: 36,
                  class: "text-gray-500"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(FolderOpenOutline))
                  ]),
                  _: 1
                }),
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-500 text-sm mt-2" }, "暂无自定义工作流", -1))
              ]))
            ])
          ])), [
            [vClickOutside, handleClickOutside]
          ]) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const WorkflowPanel = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-e08e4ea1"]]);
const _hoisted_1$b = { class: "handle-menu-anchor" };
const _hoisted_2$8 = ["onClick"];
const _hoisted_3$8 = { class: "menu-label" };
const _sfc_main$b = {
  __name: "NodeHandleMenu",
  props: {
    nodeId: { type: String, required: true },
    nodeType: { type: String, required: true },
    visible: { type: Boolean },
    dotColor: { type: String, default: "var(--accent-color)" },
    operations: { type: Array, default: null }
    // 传空数组则不显示 handle-hover-zone
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showMenu = ref(false);
    let hideTimeout = null;
    const handleMouseEnter = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      showMenu.value = true;
    };
    const handleMouseLeave = () => {
      hideTimeout = setTimeout(() => {
        showMenu.value = false;
      }, 150);
    };
    const handleMenuMouseEnter = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      showMenu.value = true;
    };
    const handleMenuMouseLeave = () => {
      hideTimeout = setTimeout(() => {
        showMenu.value = false;
      }, 150);
    };
    const menuItems = computed(() => {
      return props.operations || [];
    });
    const showHandleHoverZone = computed(() => {
      return props.operations && props.operations.length > 0;
    });
    const handleCreate = (item) => {
      emit("select", item);
      showMenu.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        createVNode(unref(_sfc_main$f$1), {
          type: "source",
          position: unref(Position).Right,
          id: "right",
          style: { "width": "12px", "height": "12px" }
        }, null, 8, ["position"]),
        showHandleHoverZone.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "handle-hover-zone",
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }, [
          createVNode(unref(NIcon), {
            size: 14,
            class: "add-icon"
          }, {
            default: withCtx(() => [
              createVNode(unref(AddOutline))
            ]),
            _: 1
          }),
          createVNode(Transition$2, { name: "menu-fade" }, {
            default: withCtx(() => [
              showMenu.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "handle-menu",
                onMouseenter: handleMenuMouseEnter,
                onMouseleave: handleMenuMouseLeave,
                onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (item) => {
                  return openBlock(), createElementBlock("button", {
                    key: item.type,
                    onClick: withModifiers(($event) => handleCreate(item), ["stop"]),
                    class: "menu-item group"
                  }, [
                    createVNode(unref(NIcon), {
                      size: 14,
                      class: "text-gray-500 group-hover:text-white"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon)))
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("span", _hoisted_3$8, toDisplayString(item.label), 1)
                  ], 8, _hoisted_2$8);
                }), 128))
              ], 32)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 32)) : createCommentVNode("", true)
      ]);
    };
  }
};
const NodeHandleMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-7050f4d9"]]);
const _hoisted_1$a = { class: "mentions-picker" };
const _hoisted_2$7 = {
  key: 0,
  class: "mentions-search"
};
const _hoisted_3$7 = {
  key: 1,
  class: "mentions-list"
};
const _hoisted_4$7 = ["onClick", "onMouseenter"];
const _hoisted_5$7 = {
  key: 0,
  class: "mentions-item-image"
};
const _hoisted_6$7 = ["src", "alt"];
const _hoisted_7$7 = {
  key: 1,
  class: "mentions-item-image-placeholder"
};
const _hoisted_8$6 = {
  key: 1,
  class: "mentions-item-icon"
};
const _hoisted_9$6 = { class: "mentions-item-content" };
const _hoisted_10$6 = { class: "mentions-item-label" };
const _hoisted_11$6 = { class: "mentions-item-id" };
const _hoisted_12$6 = {
  key: 2,
  class: "mentions-empty"
};
const _sfc_main$a = {
  __name: "MentionsPicker",
  props: {
    // 可见性
    visible: {
      type: Boolean,
      default: false
    },
    // 位置
    position: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    },
    // 上下文类型：'text' | 'llmConfig'
    context: {
      type: String,
      default: "text"
    },
    // 是否显示搜索框
    showSearch: {
      type: Boolean,
      default: true
    },
    // 限制只显示已连接的节点 ID 列表（可选）
    connectedNodeIds: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:visible", "select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchQuery = ref("");
    const selectedIndex = ref(0);
    const isShow = ref(false);
    watch(() => props.visible, (newVal) => {
      isShow.value = newVal;
    }, { immediate: true });
    const handleShowChange = (val) => {
      isShow.value = val;
      if (!val) {
        emit("update:visible", false);
      }
    };
    const targetTypes = computed(() => {
      if (props.context === "llmConfig") {
        return ["text"];
      }
      return ["image"];
    });
    const isNodePublic = (node) => {
      if (node.type === "image") {
        return node.data?.publicProps?.name && node.data.publicProps.name !== "";
      }
      return true;
    };
    const availableNodes = computed(() => {
      return nodes.value.filter((node) => {
        if (!targetTypes.value.includes(node.type)) return false;
        if (!isNodePublic(node)) return false;
        if (props.connectedNodeIds.length > 0) {
          return props.connectedNodeIds.includes(node.id);
        }
        return true;
      });
    });
    const filteredNodes = computed(() => {
      if (!searchQuery.value) {
        return availableNodes.value;
      }
      const query = searchQuery.value.toLowerCase();
      return availableNodes.value.filter((node) => {
        const label = node.data?.label?.toLowerCase() || "";
        const name = node.data?.publicProps?.name?.toLowerCase() || "";
        const id2 = node.id.toLowerCase();
        return label.includes(query) || name.includes(query) || id2.includes(query);
      });
    });
    watch(searchQuery, () => {
      selectedIndex.value = 0;
    });
    watch(() => props.visible, (newVal) => {
      if (newVal) {
        searchQuery.value = "";
        selectedIndex.value = 0;
        document.addEventListener("keydown", handleGlobalKeydown);
      } else {
        document.removeEventListener("keydown", handleGlobalKeydown);
      }
    });
    function handleGlobalKeydown(event) {
      if (!isShow.value) return;
      if (event.key === "Enter") {
        event.preventDefault();
        if (filteredNodes.value[selectedIndex.value]) {
          selectNode(filteredNodes.value[selectedIndex.value]);
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        isShow.value = false;
        emit("update:visible", false);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        selectedIndex.value = Math.min(selectedIndex.value + 1, filteredNodes.value.length - 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
      }
    }
    function getNodeIcon(type) {
      const icons = {
        image: "📷",
        text: "📝",
        llmConfig: "🤖",
        imageConfig: "🎨",
        video: "🎬",
        videoConfig: "🎥"
      };
      return icons[type] || "📄";
    }
    function selectNode(node) {
      const displayName = node.type === "image" ? node.data?.publicProps?.name || node.data?.label || node.id : node.data?.label || node.id;
      emit("select", {
        nodeId: node.id,
        label: displayName,
        type: node.type
      });
      isShow.value = false;
      emit("update:visible", false);
    }
    function handleKeydown(event) {
      const { key } = event;
      if (key === "ArrowDown") {
        event.preventDefault();
        selectedIndex.value = Math.min(selectedIndex.value + 1, filteredNodes.value.length - 1);
      } else if (key === "ArrowUp") {
        event.preventDefault();
        selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
      } else if (key === "Enter") {
        event.preventDefault();
        if (filteredNodes.value[selectedIndex.value]) {
          selectNode(filteredNodes.value[selectedIndex.value]);
        }
      } else if (key === "Escape") {
        event.preventDefault();
        isShow.value = false;
        emit("update:visible", false);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NPopover), {
        show: isShow.value,
        trigger: "manual",
        placement: "bottom-start",
        x: __props.position.x,
        y: __props.position.y,
        style: { padding: 0 },
        raw: "",
        "show-arrow": false,
        "onUpdate:show": handleShowChange
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$a, [
            __props.showSearch ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
              createVNode(unref(NInput), {
                value: searchQuery.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "搜索节点...",
                size: "small",
                autofocus: true,
                onKeydown: handleKeydown
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            filteredNodes.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3$7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredNodes.value, (node, index) => {
                return openBlock(), createElementBlock("div", {
                  key: node.id,
                  class: normalizeClass(["mentions-item", { active: index === selectedIndex.value }]),
                  onClick: ($event) => selectNode(node),
                  onMouseenter: ($event) => selectedIndex.value = index
                }, [
                  node.type === "image" ? (openBlock(), createElementBlock("div", _hoisted_5$7, [
                    node.data?.url ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: node.data.url,
                      alt: node.data.publicProps?.name
                    }, null, 8, _hoisted_6$7)) : (openBlock(), createElementBlock("div", _hoisted_7$7, [
                      createVNode(unref(NIcon), { size: 20 }, {
                        default: withCtx(() => [
                          createVNode(unref(ImageOutline))
                        ]),
                        _: 1
                      })
                    ]))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_8$6, [
                    createVNode(unref(NIcon), {
                      component: getNodeIcon(node.type)
                    }, null, 8, ["component"])
                  ])),
                  createBaseVNode("div", _hoisted_9$6, [
                    createBaseVNode("div", _hoisted_10$6, toDisplayString(node.type === "image" ? node.data?.publicProps?.name || node.data?.label || "未命名" : node.data?.label || node.id), 1),
                    createBaseVNode("div", _hoisted_11$6, toDisplayString(node.id), 1)
                  ])
                ], 42, _hoisted_4$7);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_12$6, [..._cache[1] || (_cache[1] = [
              createBaseVNode("span", null, "没有可引用的节点", -1)
            ])]))
          ])
        ]),
        _: 1
      }, 8, ["show", "x", "y"]);
    };
  }
};
const MentionsPicker = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-566c52a3"]]);
function parseMentions(text) {
  if (!text) return [];
  const mentions = [];
  const regex = /@\[([^\]|]+)(?:\|([^\]]+))?\]/g;
  let match;
  let order = 0;
  while ((match = regex.exec(text)) !== null) {
    mentions.push({
      nodeId: match[1],
      name: match[2] || null,
      order: order++
    });
  }
  return mentions;
}
const _hoisted_1$9 = { class: "flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)]" };
const _hoisted_2$6 = { class: "flex items-center gap-1" };
const _hoisted_3$6 = { class: "p-3" };
const _hoisted_4$6 = { class: "flex items-center justify-between mt-2" };
const _hoisted_5$6 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_6$6 = ["disabled"];
const _hoisted_7$6 = { key: 1 };
const POLISH_SYSTEM_PROMPT = "你是一个专业的AI绘画提示词专家。将用户输入的内容美化成高质量的生图提示词，包含风格、光线、構图、细节等要素。直接返回提示词，不要其他解释。";
const placeholder$1 = "请输入文本内容，输入 @ 可引用图片节点...";
const _sfc_main$9 = {
  __name: "TextNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const modelStore = useModelStore();
    const isApiConfigured = computed(() => !!modelStore.currentApiKey);
    const localModel = ref(props.data?.model || modelStore.selectedChatModel || "gpt-4o-mini");
    const modelOptions = computed(() => modelStore.allChatModelOptions);
    const displayModelName = computed(() => {
      const model = modelOptions.value.find((m) => m.key === localModel.value);
      return model?.label || localModel.value || "选择模型";
    });
    const handleModelSelect = (key) => {
      localModel.value = key;
      updateNode(props.id, { model: key });
    };
    const { send: sendPolish, clear: clearPolish, currentResponse: polishResponse } = useChat({
      systemPrompt: POLISH_SYSTEM_PROMPT
    });
    watch(polishResponse, (text) => {
      if (!isPolishing.value) return;
      content.value = text;
      lastContent.value = text;
      setEditableContent(text);
    });
    const showHandleMenu = ref(false);
    const content = ref(props.data?.content || "");
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const isPolishing = ref(false);
    const showMentionsPicker = ref(false);
    const mentionsPosition = ref({ x: 0, y: 0 });
    const editorRef = ref(null);
    const textareaWrapper = ref(null);
    const mentionSearchStart = ref(-1);
    const lastContent = ref("");
    const getEditableText = () => {
      const el = editorRef.value;
      if (!el) return "";
      let text = "";
      const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList?.contains("mention-chip")) {
            text += `@[${node.dataset.nodeId}]`;
          } else if (node.tagName === "BR") {
            text += "\n";
          } else {
            node.childNodes.forEach(walk);
          }
        }
      };
      el.childNodes.forEach(walk);
      return text;
    };
    const getTextPositionBeforeCursor = (editor, range) => {
      const container = editor;
      let textLength = 0;
      let found = false;
      const walk = (node) => {
        if (found) return;
        if (node.nodeType === Node.TEXT_NODE) {
          const nodeLength = node.textContent.length;
          if (range.startContainer === node) {
            textLength += range.startOffset;
            found = true;
            return;
          }
          textLength += nodeLength;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList?.contains("mention-chip")) {
            const replacement = `@[${node.dataset.nodeId || ""}]`;
            if (range.startContainer === node || isNodeInside(node, range.startContainer)) {
              found = true;
              return;
            }
            textLength += replacement.length;
          } else if (node.tagName === "BR") {
            textLength += 1;
          } else {
            for (const child of node.childNodes) {
              walk(child);
              if (found) return;
            }
          }
        }
      };
      walk(container);
      return textLength;
    };
    const isNodeInside = (parent, child) => {
      let node = child;
      while (node) {
        if (node === parent) return true;
        node = node.parentNode;
      }
      return false;
    };
    const createMentionChip = (node) => {
      const chip = document.createElement("span");
      chip.className = "mention-chip";
      chip.contentEditable = "false";
      chip.dataset.nodeId = node.id;
      chip.dataset.label = node.data?.publicProps?.name || node.data?.label || "图片";
      if (node.data?.url) {
        const img = document.createElement("img");
        img.src = node.data.url;
        img.className = "mention-chip-thumb";
        chip.appendChild(img);
      } else {
        const iconWrap = document.createElement("span");
        iconWrap.className = "mention-chip-icon";
        iconWrap.textContent = "📷";
        chip.appendChild(iconWrap);
      }
      const label = document.createElement("span");
      label.className = "mention-chip-label";
      label.textContent = chip.dataset.label;
      chip.appendChild(label);
      return chip;
    };
    const insertMentionChipDOM = (node) => {
      const el = editorRef.value;
      if (!el) return;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let lastAtNode = null;
      let lastAtOffset = -1;
      while (walker.nextNode()) {
        const idx = walker.currentNode.textContent.lastIndexOf("@");
        if (idx !== -1) {
          lastAtNode = walker.currentNode;
          lastAtOffset = idx;
        }
      }
      if (!lastAtNode || lastAtOffset === -1) return;
      const chip = createMentionChip(node);
      const spaceNode = document.createTextNode(" ");
      const beforeText = lastAtNode.textContent.substring(0, lastAtOffset);
      if (beforeText) {
        lastAtNode.textContent = beforeText;
        lastAtNode.parentNode.insertBefore(chip, lastAtNode.nextSibling);
        lastAtNode.parentNode.insertBefore(spaceNode, chip.nextSibling);
      } else {
        const parent = lastAtNode.parentNode;
        parent.insertBefore(chip, lastAtNode);
        parent.insertBefore(spaceNode, chip.nextSibling);
        parent.removeChild(lastAtNode);
      }
      const range = document.createRange();
      range.setStartAfter(spaceNode);
      range.collapse(true);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      isInternalUpdate = true;
      content.value = getEditableText();
      lastContent.value = content.value;
      nextTick(() => {
        isInternalUpdate = false;
      });
    };
    const setEditableContent = (text) => {
      if (!editorRef.value) return;
      editorRef.value.innerHTML = "";
      if (text) {
        editorRef.value.textContent = text;
      }
    };
    const convertTextMentionsToChips = () => {
      const el = editorRef.value;
      if (!el) return;
      const imageNodes = nodes.value.filter((n) => n.type === "image" && n.data?.publicProps?.name);
      if (imageNodes.length === 0) return;
      if (!el.textContent.includes("@")) return;
      const nodeIdPattern = /@\[([^\]|]+)(?:\|([^\]]+))?\]/g;
      const targets = [];
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.parentElement?.closest(".mention-chip")) continue;
        nodeIdPattern.lastIndex = 0;
        if (nodeIdPattern.test(node.textContent)) {
          targets.push(node);
        }
      }
      if (targets.length === 0) return;
      targets.forEach((textNode) => {
        const text = textNode.textContent;
        nodeIdPattern.lastIndex = 0;
        const fragment = document.createDocumentFragment();
        let lastIdx = 0;
        let match;
        while ((match = nodeIdPattern.exec(text)) !== null) {
          if (match.index > lastIdx) {
            fragment.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
          }
          const nodeId2 = match[1];
          const node = imageNodes.find((n) => n.id === nodeId2);
          if (node) {
            fragment.appendChild(createMentionChip(node));
            fragment.appendChild(document.createTextNode(" "));
          } else {
            fragment.appendChild(document.createTextNode(match[0]));
          }
          lastIdx = nodeIdPattern.lastIndex;
        }
        if (lastIdx < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIdx)));
        }
        textNode.parentNode.replaceChild(fragment, textNode);
      });
    };
    let _convertTimer = null;
    const debouncedConvertMentions = () => {
      if (_convertTimer) clearTimeout(_convertTimer);
      _convertTimer = setTimeout(convertTextMentionsToChips, 300);
    };
    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData?.getData("text/plain") || "";
      document.execCommand("insertText", false, text);
    };
    let isInternalUpdate = false;
    const plainText = computed(() => {
      return content.value;
    });
    const editorHtml = computed(() => {
      let html = content.value;
      html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      html = html.replace(/@\[([^\]|]+)(?:\|([^\]]+))?\]/g, (match, nodeId2) => {
        const node = nodes.value.find((n) => n.id === nodeId2);
        if (node?.type === "image" && node.data?.url) {
          const displayName = node.data?.publicProps?.name || node.data?.label || "图片";
          return `<span class="mention-inline" data-node-id="${nodeId2}"><img src="${node.data.url}" alt="${displayName}" />${displayName}</span>`;
        }
        return match;
      });
      html = html.replace(/\n/g, "<br>");
      return html;
    });
    const operations = [
      { type: "imageConfig", label: "生图", icon: ImageOutline },
      { type: "videoConfig", label: "生视频", icon: VideocamOutline },
      { type: "llmConfig", label: "LLM", icon: ChatbubbleOutline }
    ];
    const handleSelect = (item) => {
      const currentNode = nodes.value.find((n) => n.id === props.id);
      const nodeX = currentNode?.position?.x || 0;
      const nodeY = currentNode?.position?.y || 0;
      const defaultData = {
        imageConfig: { model: "doubao-seedream-4-5-251128", size: "2048x2048", label: "文生图" },
        videoConfig: { label: "视频生成" },
        llmConfig: { label: "LLM文本生成" }
      };
      const newId2 = addNode(item.type, { x: nodeX + 400, y: nodeY }, defaultData[item.type] || {});
      addEdge({
        source: props.id,
        target: newId2,
        sourceHandle: "right",
        targetHandle: "left"
      });
      setTimeout(() => updateNodeInternals(newId2), 50);
      window.$message?.success(`已创建${item.label}节点`);
    };
    const handleInput = (e) => {
      const editor = e.target;
      isInternalUpdate = true;
      content.value = getEditableText();
      lastContent.value = content.value;
      nextTick(() => {
        isInternalUpdate = false;
      });
      debouncedConvertMentions();
      const selection2 = window.getSelection();
      if (!selection2.rangeCount) return;
      const range = selection2.getRangeAt(0);
      const cursorPos = getTextPositionBeforeCursor(editor, range);
      const fullText = getEditableText();
      const textBeforeCursor = fullText.slice(0, cursorPos);
      const lastAtIndex = textBeforeCursor.lastIndexOf("@");
      if (lastAtIndex !== -1) {
        const textAfterAt = textBeforeCursor.slice(lastAtIndex + 1);
        const bracketMatch = textAfterAt.match(/\[([^\]]*)\]/);
        const hasCompleteMention = bracketMatch !== null;
        if (!textAfterAt.includes(" ") && !hasCompleteMention) {
          showMentionsPicker.value = true;
          mentionSearchStart.value = lastAtIndex;
          const rect = editor.getBoundingClientRect();
          mentionsPosition.value = {
            x: rect.left + 10,
            y: rect.bottom + 5
          };
          return;
        }
      }
      showMentionsPicker.value = false;
    };
    const handleKeydown = (e) => {
      if (showMentionsPicker.value) {
        if (e.key === "Enter") {
          e.preventDefault();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          showMentionsPicker.value = false;
          const selection2 = window.getSelection();
          if (!selection2.rangeCount) return;
          const range = selection2.getRangeAt(0);
          const editor = editorRef.value;
          const cursorPos = range.startOffset;
          const textBeforeCursor = content.value.slice(0, cursorPos);
          const lastAtIndex = textBeforeCursor.lastIndexOf("@");
          if (lastAtIndex !== -1) {
            content.value = textBeforeCursor.slice(0, lastAtIndex) + content.value.slice(cursorPos);
            lastContent.value = content.value;
            nextTick(() => {
              editor.innerHTML = editorHtml.value;
              const newRange = document.createRange();
              newRange.setStart(editor.firstChild || editor, lastAtIndex);
              newRange.collapse(true);
              selection2.removeAllRanges();
              selection2.addRange(newRange);
            });
          }
        }
        return;
      }
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        document.execCommand("insertLineBreak");
      }
    };
    const handleMentionSelect = ({ nodeId: nodeId2 }) => {
      const node = nodes.value.find((n) => n.id === nodeId2);
      if (!node) {
        showMentionsPicker.value = false;
        return;
      }
      insertMentionChipDOM(node);
      updateContent();
      showMentionsPicker.value = false;
    };
    watch(() => props.data?.content, (newVal) => {
      if (newVal !== content.value) {
        content.value = newVal || "";
        lastContent.value = content.value;
        setEditableContent(content.value);
        nextTick(() => convertTextMentionsToChips());
      }
    });
    watch(() => props.data?.model, (newModel) => {
      if (newModel && newModel !== localModel.value) {
        localModel.value = newModel;
      }
    });
    watch(content, (newVal) => {
      if (isInternalUpdate) return;
      setEditableContent(newVal);
      nextTick(() => convertTextMentionsToChips());
      lastContent.value = newVal;
    });
    onMounted(() => {
      const isModelAvailable = modelOptions.value.some((m) => m.key === localModel.value);
      if (!localModel.value || !isModelAvailable) {
        localModel.value = modelStore.selectedChatModel || modelOptions.value[0]?.key || "gpt-4o-mini";
        updateNode(props.id, { model: localModel.value });
      }
      if (editorRef.value) {
        if (props.data?.content) {
          content.value = props.data.content;
        }
        lastContent.value = content.value;
        setEditableContent(content.value);
        nextTick(() => convertTextMentionsToChips());
      }
    });
    const updateContent = () => {
      updateNode(props.id, { content: content.value });
    };
    const handlePolish = async () => {
      const input = content.value.trim();
      if (!input) return;
      if (!isApiConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        return;
      }
      isPolishing.value = true;
      const originalContent = content.value;
      try {
        clearPolish();
        const result = await sendPolish(input, true, { model: localModel.value });
        if (result) {
          content.value = result;
          updateNode(props.id, { content: result });
          window.$message?.success("提示词已润色");
        }
      } catch (err) {
        content.value = originalContent;
        window.$message?.error(err.message || "润色失败");
      } finally {
        isPolishing.value = false;
      }
    };
    const startEditLabel = () => {
      editingLabelValue.value = props.data?.label || "";
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== props.data?.label) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
    };
    const handleDuplicate = () => {
      const newNodeId = duplicateNode(props.id);
      window.$message?.success("节点已复制");
      if (newNodeId) {
        setTimeout(() => {
          updateNodeInternals(newNodeId);
        }, 50);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "text-node-wrapper",
        onMouseenter: _cache[4] || (_cache[4] = ($event) => showHandleMenu.value = true),
        onMouseleave: _cache[5] || (_cache[5] = ($event) => showHandleMenu.value = false)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["text-node bg-[var(--bg-secondary)] rounded-xl border min-w-[280px] max-w-[350px] relative transition-all duration-200", __props.data.selected ? "border-1 border-blue-500 shadow-lg shadow-blue-500/20" : "border border-[var(--border-color)]"])
        }, [
          createBaseVNode("div", _hoisted_1$9, [
            !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
              key: 0,
              onDblclick: startEditLabel,
              class: "text-sm font-medium text-[var(--text-secondary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
              title: "双击编辑名称"
            }, toDisplayString(__props.data.label), 33)) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              ref_key: "labelInputRef",
              ref: labelInputRef,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
              onBlur: finishEditLabel,
              onKeydown: [
                withKeys(finishEditLabel, ["enter"]),
                withKeys(cancelEditLabel, ["escape"])
              ],
              class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-1 rounded outline-none border border-blue-500"
            }, null, 544)), [
              [vModelText, editingLabelValue.value]
            ]),
            createBaseVNode("div", _hoisted_2$6, [
              createBaseVNode("button", {
                onClick: handleDuplicate,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "复制节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(CopyOutline))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("button", {
                onClick: handleDelete,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "删除节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(TrashOutline))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("div", {
              class: "textarea-wrapper",
              ref_key: "textareaWrapper",
              ref: textareaWrapper
            }, [
              createBaseVNode("div", {
                ref_key: "editorRef",
                ref: editorRef,
                class: "editor-content",
                contenteditable: "true",
                onInput: handleInput,
                onKeydown: handleKeydown,
                onPaste: handlePaste,
                onBlur: updateContent,
                onWheel: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"])),
                onMousedown: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"])),
                "data-placeholder": placeholder$1
              }, null, 544)
            ], 512),
            createBaseVNode("div", _hoisted_4$6, [
              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "润色模型", -1)),
              createVNode(unref(NDropdown), {
                options: modelOptions.value,
                "key-field": "key",
                "label-field": "label",
                trigger: "click",
                onSelect: handleModelSelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_5$6, [
                    createTextVNode(toDisplayString(displayModelName.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronDownOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ]),
            createBaseVNode("button", {
              onClick: handlePolish,
              disabled: isPolishing.value || !plainText.value.trim(),
              class: "mt-2 px-3 py-1.5 text-xs rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-color)] hover:text-white border border-[var(--border-color)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
            }, [
              isPolishing.value ? (openBlock(), createBlock(unref(NSpin), {
                key: 0,
                size: 12
              })) : (openBlock(), createElementBlock("span", _hoisted_7$6, "✨")),
              _cache[7] || (_cache[7] = createTextVNode(" AI 润色 ", -1))
            ], 8, _hoisted_6$6)
          ]),
          createVNode(NodeHandleMenu, {
            nodeId: __props.id,
            nodeType: "text",
            visible: showHandleMenu.value,
            operations,
            onSelect: handleSelect
          }, null, 8, ["nodeId", "visible"]),
          createVNode(unref(_sfc_main$f$1), {
            type: "target",
            position: unref(Position).Left,
            id: "left",
            class: "!bg-[var(--accent-color)]"
          }, null, 8, ["position"])
        ], 2),
        createVNode(MentionsPicker, {
          visible: showMentionsPicker.value,
          "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => showMentionsPicker.value = $event),
          position: mentionsPosition.value,
          context: "text",
          onSelect: handleMentionSelect
        }, null, 8, ["visible", "position"])
      ], 32);
    };
  }
};
const TextNode = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-970a52a8"]]);
const _hoisted_1$8 = { class: "flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)]" };
const _hoisted_2$5 = { class: "flex items-center gap-1" };
const _hoisted_3$5 = { class: "p-3 space-y-3" };
const _hoisted_4$5 = { class: "flex items-center justify-between" };
const _hoisted_5$5 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_6$5 = {
  key: 0,
  class: "flex items-center justify-between"
};
const _hoisted_7$5 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_8$5 = {
  key: 1,
  class: "flex items-center justify-between"
};
const _hoisted_9$5 = { class: "flex items-center gap-2" };
const _hoisted_10$5 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_11$5 = {
  key: 2,
  class: "text-xs text-[var(--text-tertiary)] bg-[var(--bg-tertiary)] rounded px-2 py-1"
};
const _hoisted_12$5 = { class: "flex items-center gap-2 text-xs text-[var(--text-secondary)] py-1 border-t border-[var(--border-color)]" };
const _hoisted_13$4 = {
  key: 3,
  class: "flex gap-2"
};
const _hoisted_14$3 = ["disabled"];
const _hoisted_15$2 = ["disabled"];
const _hoisted_16$2 = ["disabled"];
const _hoisted_17$2 = {
  key: 5,
  class: "text-xs text-red-500 mt-2"
};
const _sfc_main$8 = {
  __name: "ImageConfigNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const modelStore = useModelStore();
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const isConfigured = computed(() => !!modelStore.currentApiKey);
    const { loading, error, generate } = useImageGeneration();
    const showHandleMenu = ref(false);
    const localModel = ref(props.data?.model || DEFAULT_IMAGE_MODEL);
    const localSize = ref(props.data?.size || "2048x2048");
    const localQuality = ref(props.data?.quality || "standard");
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const operations = [
      // { type: 'imageConfig', label: '图生图', icon: ImageOutline, action: 'imageConfig_imageConfig' }
    ];
    const handleSelect = (item) => {
      const action = item.action;
      if (action === "imageConfig_imageConfig") {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const nodeX = currentNode?.position?.x || 0;
        const nodeY = currentNode?.position?.y || 0;
        const imageNodeId = addNode("image", { x: nodeX + 400, y: nodeY }, {
          label: "图片编辑"
        });
        addEdge({
          source: props.id,
          target: imageNodeId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        setTimeout(() => updateNodeInternals(imageNodeId), 50);
        window.$message?.success("已创建图片编辑节点");
      }
    };
    const currentModelConfig = computed(() => getModelConfig(localModel.value));
    const modelOptions = computed(() => modelStore.allImageModelOptions);
    const displayModelName = computed(() => {
      const model = modelOptions.value.find((m) => m.key === localModel.value);
      if (!model) {
        const allModel = modelStore.allImageModels.find((m) => m.key === localModel.value);
        return allModel?.label || localModel.value || "选择模型";
      }
      return model?.label || localModel.value || "选择模型";
    });
    const qualityOptions = computed(() => {
      return getModelQualityOptions(localModel.value);
    });
    const hasQualityOptions = computed(() => {
      return qualityOptions.value && qualityOptions.value.length > 0;
    });
    const displayQuality = computed(() => {
      const option = qualityOptions.value.find((o) => o.key === localQuality.value);
      return option?.label || "标准画质";
    });
    const sizeOptions = computed(() => {
      return getModelSizeOptions(localModel.value, localQuality.value);
    });
    const hasSizeOptions = computed(() => {
      return sizeOptions.value && sizeOptions.value.length > 0;
    });
    const displaySize = computed(() => {
      const option = sizeOptions.value.find((o) => o.key === localSize.value);
      return option?.label || localSize.value;
    });
    onMounted(() => {
      const availableModels = modelStore.availableImageModels;
      const isModelAvailable = availableModels.some((m) => m.key === localModel.value);
      if (!localModel.value || !isModelAvailable) {
        const newModel = modelStore.selectedImageModel || availableModels[0]?.key || DEFAULT_IMAGE_MODEL;
        localModel.value = newModel;
      }
      const config = getModelConfig(localModel.value);
      const qualityOpts = getModelQualityOptions(localModel.value);
      if (qualityOpts.length > 0) {
        const currentQualityValid = qualityOpts.some((o) => o.key === localQuality.value);
        if (!currentQualityValid) {
          localQuality.value = config?.defaultParams?.quality || qualityOpts[0].key;
        }
      }
      const sizeOpts = getModelSizeOptions(localModel.value, localQuality.value);
      if (sizeOpts.length > 0) {
        const currentSizeValid = sizeOpts.some((o) => o.key === localSize.value);
        if (!currentSizeValid) {
          localSize.value = config?.defaultParams?.size || sizeOpts[0].key;
        }
      }
      updateNode(props.id, {
        model: localModel.value,
        quality: localQuality.value,
        size: localSize.value
      });
    });
    const resolveTextMentionsForImage = (textNode) => {
      const content = textNode.data?.content || "";
      const mentions = parseMentions(content);
      if (mentions.length === 0) {
        return { resolvedContent: content, refImages: [] };
      }
      const imageMentions = [];
      for (const mention of mentions) {
        const referencedNode = nodes.value.find((n) => n.id === mention.nodeId);
        if (referencedNode?.type === "image") {
          const imageData = referencedNode.data?.base64 || referencedNode.data?.url;
          if (imageData) {
            imageMentions.push({
              order: mention.order,
              nodeId: mention.nodeId,
              imageData
            });
          }
        }
      }
      if (imageMentions.length === 0) {
        return { resolvedContent: content, refImages: [] };
      }
      imageMentions.sort((a, b) => a.order - b.order);
      let resolvedContent = content;
      for (let i = 0; i < imageMentions.length; i++) {
        const mention = imageMentions[i];
        const placeholder2 = `@[${mention.nodeId}]`;
        resolvedContent = resolvedContent.replace(placeholder2, `图${i + 1}`);
      }
      const refImages = imageMentions.map((m) => m.imageData);
      return { resolvedContent, refImages };
    };
    const connectedPrompts = computed(() => {
      return getConnectedInputs().prompts;
    });
    const connectedRefImages = computed(() => {
      return getConnectedInputs().refImages;
    });
    const connectedTextNodeIds = computed(() => {
      const incomingEdges = edges.value.filter((e) => e.target === props.id);
      const connectedIds = [];
      for (const edge of incomingEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (sourceNode?.type === "text") {
          connectedIds.push(sourceNode.id);
        }
      }
      return connectedIds;
    });
    const getConnectedInputs = () => {
      const textNodes = nodes.value.filter((n) => n.type === "text" && connectedTextNodeIds.value.includes(n.id));
      const mentionsPrompts = [];
      const mentionsRefImages = [];
      for (const textNode of textNodes) {
        const { resolvedContent, refImages: nodeRefImages } = resolveTextMentionsForImage(textNode);
        if (nodeRefImages.length > 0) {
          mentionsPrompts.push({
            order: mentionsPrompts.length,
            content: resolvedContent,
            nodeId: textNode.id
          });
          for (const imageData of nodeRefImages) {
            mentionsRefImages.push({
              order: mentionsRefImages.length,
              imageData,
              nodeId: textNode.id
            });
          }
        }
      }
      const connectedEdges = edges.value.filter((e) => e.target === props.id);
      const edgeRefImages = [];
      for (const edge of connectedEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (!sourceNode) continue;
        if (sourceNode.type === "image") {
          const imageData = sourceNode.data?.base64 || sourceNode.data?.url;
          if (imageData) {
            const baseOrder = edge.data?.imageOrder || 1;
            const order = mentionsRefImages.length + baseOrder;
            edgeRefImages.push({ order, imageData, nodeId: sourceNode.id });
          }
        }
      }
      const allRefImages = [...mentionsRefImages, ...edgeRefImages];
      allRefImages.sort((a, b) => a.order - b.order);
      const sortedRefImages = allRefImages.map((r) => r.imageData);
      if (mentionsPrompts.length > 0) {
        mentionsPrompts.sort((a, b) => a.order - b.order);
        const combinedPrompt2 = mentionsPrompts.map((p) => p.content).join("\n\n");
        return {
          prompt: combinedPrompt2,
          prompts: mentionsPrompts,
          refImages: sortedRefImages,
          refImagesWithOrder: allRefImages,
          fromMentions: true
        };
      }
      const prompts = [];
      for (const edge of connectedEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (!sourceNode) continue;
        if (sourceNode.type === "text") {
          const content = sourceNode.data?.content || "";
          if (content) {
            const order = edge.data?.promptOrder || 1;
            prompts.push({ order, content, nodeId: sourceNode.id });
          }
        } else if (sourceNode.type === "llmConfig") {
          const content = sourceNode.data?.outputContent || "";
          if (content) {
            const order = edge.data?.promptOrder || 1;
            prompts.push({ order, content, nodeId: sourceNode.id });
          }
        }
      }
      prompts.sort((a, b) => a.order - b.order);
      const combinedPrompt = prompts.map((p) => p.content).join("\n\n");
      return { prompt: combinedPrompt, prompts, refImages: sortedRefImages, refImagesWithOrder: allRefImages, fromMentions: false };
    };
    const handleModelSelect = (key) => {
      localModel.value = key;
      const config = getModelConfig(key);
      const newQualityOptions = getModelQualityOptions(key);
      if (newQualityOptions.length > 0) {
        const defaultQuality = config?.defaultParams?.quality || newQualityOptions[0].key;
        const currentQualityValid = newQualityOptions.some((o) => o.key === localQuality.value);
        localQuality.value = currentQualityValid ? localQuality.value : defaultQuality;
      } else {
        localQuality.value = "standard";
      }
      const newSizeOptions = getModelSizeOptions(key, localQuality.value);
      let defaultSize = config?.defaultParams?.size;
      if (!defaultSize && newSizeOptions.length > 0) {
        defaultSize = newSizeOptions.find((o) => o.key === "2048x2048")?.key || newSizeOptions.find((o) => o.key === "1x1")?.key || newSizeOptions.find((o) => o.key.includes("1024"))?.key || newSizeOptions[0].key;
      }
      const currentSizeValid = newSizeOptions.some((o) => o.key === localSize.value);
      localSize.value = currentSizeValid ? localSize.value : defaultSize;
      updateNode(props.id, {
        model: key,
        quality: localQuality.value,
        size: localSize.value
      });
    };
    const handleQualitySelect = (quality) => {
      localQuality.value = quality;
      const newSizeOptions = getModelSizeOptions(localModel.value, quality);
      if (newSizeOptions.length > 0) {
        const currentSizeValid = newSizeOptions.some((o) => o.key === localSize.value);
        if (currentSizeValid) {
          updateNode(props.id, { quality });
        } else {
          const config = getModelConfig(localModel.value);
          let defaultSize = config?.defaultParams?.size;
          if (!defaultSize || !newSizeOptions.some((o) => o.key === defaultSize)) {
            defaultSize = quality === "4k" ? newSizeOptions.find((o) => o.key.includes("4096"))?.key || newSizeOptions[4]?.key : newSizeOptions[4]?.key;
          }
          localSize.value = defaultSize || newSizeOptions[0].key;
          updateNode(props.id, { quality, size: localSize.value });
        }
      } else {
        updateNode(props.id, { quality });
      }
    };
    const handleSizeSelect = (size) => {
      localSize.value = size;
      updateNode(props.id, { size });
    };
    const createdImageNodeId = ref(null);
    const findConnectedOutputImageNode = (onlyEmpty = true) => {
      const outputEdges = edges.value.filter((e) => e.source === props.id);
      for (const edge of outputEdges) {
        const targetNode = nodes.value.find((n) => n.id === edge.target);
        if (targetNode?.type === "image") {
          if (onlyEmpty) {
            if (!targetNode.data?.url || targetNode.data?.url === "") {
              return targetNode.id;
            }
          } else {
            return targetNode.id;
          }
        }
      }
      return null;
    };
    const hasConnectedImageWithContent = computed(() => {
      const outputEdges = edges.value.filter((e) => e.source === props.id);
      for (const edge of outputEdges) {
        const targetNode = nodes.value.find((n) => n.id === edge.target);
        if (targetNode?.type === "image" && targetNode.data?.url && targetNode.data.url !== "") {
          return true;
        }
      }
      return false;
    });
    const handleGenerate = async (mode = "auto") => {
      const { prompt, prompts, refImages, refImagesWithOrder } = getConnectedInputs();
      if (!prompt && refImages.length === 0) {
        window.$message?.warning("请连接文本节点（提示词）或图片节点（参考图）");
        return;
      }
      if (prompts.length > 1) {
        console.log("[ImageConfigNode] 拼接提示词顺序:", prompts.map((p) => `${p.order}: ${p.content.substring(0, 20)}...`));
      }
      if (refImagesWithOrder && refImagesWithOrder.length > 1) {
        console.log("[ImageConfigNode] 参考图顺序:", refImagesWithOrder.map((r) => `${r.order}: ${r.nodeId}`));
      }
      if (!isConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        return;
      }
      let imageNodeId = null;
      if (mode === "replace") {
        imageNodeId = findConnectedOutputImageNode(false);
        if (imageNodeId) {
          updateNode(imageNodeId, { loading: true, url: "" });
        }
      } else if (mode === "new") {
        imageNodeId = null;
      } else {
        imageNodeId = findConnectedOutputImageNode(true);
        if (imageNodeId) {
          updateNode(imageNodeId, { loading: true });
        }
      }
      if (!imageNodeId) {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const nodeX = currentNode?.position?.x || 0;
        const nodeY = currentNode?.position?.y || 0;
        let yOffset = 0;
        if (mode === "new") {
          const outputEdges = edges.value.filter((e) => e.source === props.id);
          yOffset = outputEdges.length * 280;
        }
        imageNodeId = addNode("image", { x: nodeX + 400, y: nodeY + yOffset }, {
          url: "",
          loading: true,
          label: "图像生成结果"
        });
        addEdge({
          source: props.id,
          target: imageNodeId,
          sourceHandle: "right",
          targetHandle: "left"
        });
      }
      createdImageNodeId.value = imageNodeId;
      setTimeout(() => {
        updateNodeInternals(imageNodeId);
      }, 50);
      try {
        const params = {
          model: localModel.value,
          prompt,
          size: localSize.value,
          quality: localQuality.value,
          n: 1,
          watermark: false
        };
        if (refImages.length > 0) {
          params.image = refImages;
        }
        const result = await generate(params);
        console.log("[ImageConfigNode] 生成结果:", result);
        if (result && result.length > 0 && result[0].url) {
          updateNode(imageNodeId, {
            url: result[0].url,
            loading: false,
            label: "文生图",
            model: localModel.value,
            updatedAt: Date.now()
          });
          updateNode(props.id, { executed: true, outputNodeId: imageNodeId });
          window.$message?.success("图片生成成功");
        } else {
          const errMsg = "生成结果中没有有效图片 URL";
          updateNode(imageNodeId, {
            loading: false,
            error: errMsg,
            updatedAt: Date.now()
          });
          window.$message?.error(errMsg);
        }
      } catch (err) {
        console.error("[ImageConfigNode] 生成图片失败:", err);
        updateNode(imageNodeId, {
          loading: false,
          error: err.message || "生成失败",
          updatedAt: Date.now()
        });
        window.$message?.error(err.message || "图片生成失败");
      }
    };
    const handleDuplicate = () => {
      const newNodeId = duplicateNode(props.id);
      window.$message?.success("节点已复制");
      if (newNodeId) {
        setTimeout(() => {
          updateNodeInternals(newNodeId);
        }, 50);
      }
    };
    const startEditLabel = () => {
      editingLabelValue.value = props.data?.label || "";
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== props.data?.label) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
      window.$message?.success("节点已删除");
    };
    watch(() => props.data?.model, (newModel) => {
      if (newModel && newModel !== localModel.value) {
        localModel.value = newModel;
        const config = getModelConfig(newModel);
        const newQualityOptions = getModelQualityOptions(newModel);
        if (newQualityOptions.length > 0) {
          const defaultQuality = config?.defaultParams?.quality || newQualityOptions[0].key;
          const currentQualityValid = newQualityOptions.some((o) => o.key === localQuality.value);
          localQuality.value = currentQualityValid ? localQuality.value : defaultQuality;
        } else {
          localQuality.value = "standard";
        }
        const newSizeOptions = getModelSizeOptions(newModel, localQuality.value);
        let defaultSize = config?.defaultParams?.size;
        if (!defaultSize && newSizeOptions.length > 0) {
          defaultSize = newSizeOptions.find((o) => o.key === "2048x2048")?.key || newSizeOptions.find((o) => o.key === "1x1")?.key || newSizeOptions.find((o) => o.key.includes("1024"))?.key || newSizeOptions[0].key;
        }
        const currentSizeValid = newSizeOptions.some((o) => o.key === localSize.value);
        localSize.value = currentSizeValid ? localSize.value : defaultSize;
      }
    });
    watch(() => props.data, () => {
      nextTick(() => {
        updateNodeInternals(props.id);
      });
    }, { deep: true });
    watch(
      () => props.data?.autoExecute,
      (shouldExecute) => {
        if (shouldExecute && !loading.value) {
          updateNode(props.id, { autoExecute: false });
          setTimeout(() => {
            handleGenerate();
          }, 100);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "image-config-node-wrapper",
        onMouseenter: _cache[4] || (_cache[4] = ($event) => showHandleMenu.value = true),
        onMouseleave: _cache[5] || (_cache[5] = ($event) => showHandleMenu.value = false)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["image-config-node bg-[var(--bg-secondary)] rounded-xl border min-w-[300px] transition-all duration-200", __props.data.selected ? "border-1 border-blue-500 shadow-lg shadow-blue-500/20" : "border border-[var(--border-color)]"])
        }, [
          createBaseVNode("div", _hoisted_1$8, [
            !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
              key: 0,
              onDblclick: startEditLabel,
              class: "text-sm font-medium text-[var(--text-secondary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
              title: "双击编辑名称"
            }, toDisplayString(__props.data.label), 33)) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              ref_key: "labelInputRef",
              ref: labelInputRef,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
              onBlur: finishEditLabel,
              onKeydown: [
                withKeys(finishEditLabel, ["enter"]),
                withKeys(cancelEditLabel, ["escape"])
              ],
              class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-1 rounded outline-none border border-blue-500"
            }, null, 544)), [
              [vModelText, editingLabelValue.value]
            ]),
            createBaseVNode("div", _hoisted_2$5, [
              createBaseVNode("button", {
                onClick: handleDuplicate,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "复制节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(CopyOutline))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("button", {
                onClick: handleDelete,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "删除节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(TrashOutline))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("div", _hoisted_4$5, [
              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "模型", -1)),
              createVNode(unref(NDropdown), {
                options: modelOptions.value,
                onSelect: handleModelSelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_5$5, [
                    createTextVNode(toDisplayString(displayModelName.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronDownOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ]),
            hasQualityOptions.value ? (openBlock(), createElementBlock("div", _hoisted_6$5, [
              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "画质", -1)),
              createVNode(unref(NDropdown), {
                options: qualityOptions.value,
                onSelect: handleQualitySelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_7$5, [
                    createTextVNode(toDisplayString(displayQuality.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronForwardOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ])) : createCommentVNode("", true),
            hasSizeOptions.value ? (openBlock(), createElementBlock("div", _hoisted_8$5, [
              _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "尺寸", -1)),
              createBaseVNode("div", _hoisted_9$5, [
                createVNode(unref(NDropdown), {
                  options: sizeOptions.value,
                  onSelect: handleSizeSelect
                }, {
                  default: withCtx(() => [
                    createBaseVNode("button", _hoisted_10$5, [
                      createTextVNode(toDisplayString(displaySize.value) + " ", 1),
                      createVNode(unref(NIcon), { size: 12 }, {
                        default: withCtx(() => [
                          createVNode(unref(ChevronForwardOutline))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["options"])
              ])
            ])) : createCommentVNode("", true),
            currentModelConfig.value?.tips ? (openBlock(), createElementBlock("div", _hoisted_11$5, " 💡 " + toDisplayString(currentModelConfig.value.tips), 1)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_12$5, [
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", connectedPrompts.value.length > 0 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 提示词 " + toDisplayString(connectedPrompts.value.length > 0 ? `${connectedPrompts.value.length}个` : "○"), 3),
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", connectedRefImages.value.length > 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 参考图 " + toDisplayString(connectedRefImages.value.length > 0 ? `${connectedRefImages.value.length}张` : "○"), 3)
            ]),
            hasConnectedImageWithContent.value ? (openBlock(), createElementBlock("div", _hoisted_13$4, [
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => handleGenerate("new")),
                disabled: unref(loading) || !isConfigured.value,
                class: "flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                unref(loading) ? (openBlock(), createBlock(unref(NSpin), {
                  key: 0,
                  size: 14
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(AddOutline))
                    ]),
                    _: 1
                  }),
                  _cache[9] || (_cache[9] = createTextVNode(" 新建生成 ", -1))
                ], 64))
              ], 8, _hoisted_14$3),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => handleGenerate("replace")),
                disabled: unref(loading) || !isConfigured.value,
                class: "flex-shrink-0 flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                unref(loading) ? (openBlock(), createBlock(unref(NSpin), {
                  key: 0,
                  size: 14
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(RefreshOutline))
                    ]),
                    _: 1
                  }),
                  _cache[10] || (_cache[10] = createTextVNode(" 替换 ", -1))
                ], 64))
              ], 8, _hoisted_15$2)
            ])) : (openBlock(), createElementBlock("button", {
              key: 4,
              onClick: _cache[3] || (_cache[3] = ($event) => handleGenerate("auto")),
              disabled: unref(loading) || !isConfigured.value,
              class: "w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            }, [
              unref(loading) ? (openBlock(), createBlock(unref(NSpin), {
                key: 0,
                size: 14
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-[var(--accent-color)] bg-white rounded-full w-4 h-4 flex items-center justify-center text-xs" }, "◆", -1)),
                _cache[12] || (_cache[12] = createTextVNode(" 立即生成 ", -1))
              ], 64))
            ], 8, _hoisted_16$2)),
            unref(error) ? (openBlock(), createElementBlock("div", _hoisted_17$2, toDisplayString(unref(error).message || "生成失败"), 1)) : createCommentVNode("", true)
          ]),
          createVNode(unref(_sfc_main$f$1), {
            type: "target",
            position: unref(Position).Left,
            id: "left",
            class: "!bg-[var(--accent-color)]"
          }, null, 8, ["position"]),
          createVNode(NodeHandleMenu, {
            nodeId: __props.id,
            nodeType: "imageConfig",
            visible: showHandleMenu.value,
            operations,
            onSelect: handleSelect
          }, null, 8, ["nodeId", "visible"])
        ], 2)
      ], 32);
    };
  }
};
const ImageConfigNode = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-ab42ca67"]]);
const _imports_0 = "" + new URL("loading-OwpA--1d.webp", import.meta.url).href;
const _hoisted_1$7 = { class: "px-3 py-2 border-b border-[var(--border-color)]" };
const _hoisted_2$4 = { class: "flex items-center justify-between" };
const _hoisted_3$4 = { class: "flex items-center gap-1" };
const _hoisted_4$4 = {
  key: 0,
  class: "mt-1 text-xs text-[var(--text-secondary)] truncate"
};
const _hoisted_5$4 = { class: "p-3" };
const _hoisted_6$4 = {
  key: 0,
  class: "aspect-video rounded-lg bg-gradient-to-br from-cyan-400 via-blue-300 to-amber-200 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
};
const _hoisted_7$4 = { class: "text-sm text-white font-medium relative z-10" };
const _hoisted_8$4 = {
  key: 1,
  class: "aspect-video rounded-lg bg-red-50 dark:bg-red-900/20 flex flex-col items-center justify-center gap-2 border border-red-200 dark:border-red-800"
};
const _hoisted_9$4 = { class: "text-sm text-red-500" };
const _hoisted_10$4 = {
  key: 2,
  class: "aspect-video rounded-lg overflow-hidden bg-black"
};
const _hoisted_11$4 = ["src"];
const _hoisted_12$4 = {
  key: 3,
  class: "aspect-video rounded-lg bg-[var(--bg-tertiary)] flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[var(--border-color)] relative"
};
const _hoisted_13$3 = {
  key: 4,
  class: "mt-2 text-xs text-[var(--text-secondary)]"
};
const _hoisted_14$2 = { class: "absolute right-10 top-20 -translate-y-1/2 translate-x-full flex flex-col gap-2 z-[1000]" };
const _sfc_main$7 = {
  __name: "VideoNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const { pollVideoTask } = useVideoGeneration();
    const showActions = ref(false);
    const showHandleMenu = ref(false);
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const operations = [
      { type: "videoConfig", label: "生视频", icon: VideocamOutline }
    ];
    const isPolling = ref(false);
    watch(() => props.data?.taskId, (taskId) => {
      if (taskId && !props.data?.url && !isPolling.value) {
        startPolling(taskId);
      }
    });
    onMounted(() => {
      const { taskId, url } = props.data || {};
      if (taskId && !url && !isPolling.value) {
        startPolling(taskId);
      }
    });
    const startPolling = async (taskId) => {
      if (isPolling.value) return;
      isPolling.value = true;
      try {
        const result = await pollVideoTask(taskId, (attempt, percentage) => {
          updateNode(props.id, {
            progress: percentage,
            attempt
          });
        });
        updateNode(props.id, {
          url: result.url,
          loading: false,
          progress: 100,
          label: "视频生成",
          taskId: null
          // 清除 taskId
        });
        window.$message?.success("视频生成成功");
      } catch (err) {
        updateNode(props.id, {
          loading: false,
          error: err.message || "生成失败",
          label: "生成失败",
          taskId: null
          // 清除 taskId
        });
        window.$message?.error(err.message || "视频生成失败");
      } finally {
        isPolling.value = false;
      }
    };
    const handleSelect = (item) => {
      const currentNode = nodes.value.find((n) => n.id === props.id);
      const nodeX = currentNode?.position?.x || 0;
      const nodeY = currentNode?.position?.y || 0;
      const newId2 = addNode("videoConfig", { x: nodeX + 400, y: nodeY }, { label: "视频生成" });
      addEdge({
        source: props.id,
        target: newId2,
        sourceHandle: "right",
        targetHandle: "left"
      });
      setTimeout(() => {
        updateNodeInternals(newId2);
      }, 50);
      window.$message?.success(`已创建视频生成节点`);
    };
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        updateNode(props.id, {
          url,
          updatedAt: Date.now()
        });
      }
    };
    const formatDuration = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    const startEditLabel = () => {
      editingLabelValue.value = props.data?.label || "";
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== props.data?.label) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
    };
    const handlePreview = () => {
      if (props.data.url) {
        window.open(props.data.url, "_blank");
      }
    };
    const handleDownload = () => {
      if (props.data.url) {
        const link = document.createElement("a");
        link.href = props.data.url;
        link.download = props.data.fileName || `video_${Date.now()}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.$message?.success("视频下载中...");
      }
    };
    const handleDuplicate = () => {
      const newId2 = duplicateNode(props.id);
      if (newId2) {
        updateNode(props.id, { selected: false });
        updateNode(newId2, { selected: true });
        window.$message?.success("节点已复制");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "video-node-wrapper relative",
        onMouseenter: _cache[1] || (_cache[1] = ($event) => {
          showActions.value = true;
          showHandleMenu.value = true;
        }),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => {
          showActions.value = false;
          showHandleMenu.value = false;
        })
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["video-node bg-[var(--bg-secondary)] rounded-xl border w-[400px] relative transition-all duration-200", __props.data.selected ? "border-1 border-blue-500 shadow-lg shadow-blue-500/20" : "border border-[var(--border-color)]"])
        }, [
          createBaseVNode("div", _hoisted_1$7, [
            createBaseVNode("div", _hoisted_2$4, [
              !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                onDblclick: startEditLabel,
                class: "text-sm font-medium text-[var(--text-secondary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
                title: "双击编辑名称"
              }, toDisplayString(__props.data.label), 33)) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                ref_key: "labelInputRef",
                ref: labelInputRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
                onBlur: finishEditLabel,
                onKeydown: [
                  withKeys(finishEditLabel, ["enter"]),
                  withKeys(cancelEditLabel, ["escape"])
                ],
                class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-1 rounded outline-none border border-blue-500"
              }, null, 544)), [
                [vModelText, editingLabelValue.value]
              ]),
              createBaseVNode("div", _hoisted_3$4, [
                createBaseVNode("button", {
                  onClick: handleDuplicate,
                  class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                  title: "复制节点"
                }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(CopyOutline))
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("button", {
                  onClick: handleDelete,
                  class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                  title: "删除节点"
                }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(TrashOutline))
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            __props.data.model ? (openBlock(), createElementBlock("div", _hoisted_4$4, toDisplayString(__props.data.model), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5$4, [
            __props.data.taskId && !__props.data.url || __props.data.loading && !__props.data.taskId ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-400/20 to-amber-300/20 animate-pulse" }, null, -1)),
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "relative z-10" }, [
                createBaseVNode("img", {
                  src: _imports_0,
                  alt: "Loading",
                  class: "w-14 h-12"
                })
              ], -1)),
              createBaseVNode("span", _hoisted_7$4, toDisplayString(__props.data.taskId ? "创作中，预计等待 1 分钟" : "任务创建中..."), 1)
            ])) : __props.data.error ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
              createVNode(unref(NIcon), {
                size: 32,
                class: "text-red-500"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CloseCircleOutline))
                ]),
                _: 1
              }),
              createBaseVNode("span", _hoisted_9$4, toDisplayString(__props.data.error), 1)
            ])) : __props.data.url ? (openBlock(), createElementBlock("div", _hoisted_10$4, [
              createBaseVNode("video", {
                src: __props.data.url,
                controls: "",
                class: "w-full h-full object-contain"
              }, null, 8, _hoisted_11$4)
            ])) : (openBlock(), createElementBlock("div", _hoisted_12$4, [
              createVNode(unref(NIcon), {
                size: 32,
                class: "text-[var(--text-secondary)]"
              }, {
                default: withCtx(() => [
                  createVNode(unref(VideocamOutline))
                ]),
                _: 1
              }),
              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-sm text-[var(--text-secondary)]" }, "拖放视频或点击上传", -1)),
              createBaseVNode("input", {
                type: "file",
                accept: "video/*",
                class: "absolute inset-0 opacity-0 cursor-pointer",
                onChange: handleFileUpload
              }, null, 32)
            ])),
            __props.data.duration ? (openBlock(), createElementBlock("div", _hoisted_13$3, " 时长: " + toDisplayString(formatDuration(__props.data.duration)), 1)) : createCommentVNode("", true)
          ]),
          createVNode(NodeHandleMenu, {
            nodeId: __props.id,
            nodeType: "video",
            visible: showHandleMenu.value,
            operations,
            onSelect: handleSelect
          }, null, 8, ["nodeId", "visible"]),
          createVNode(unref(_sfc_main$f$1), {
            type: "target",
            position: unref(Position).Left,
            id: "left",
            class: "!bg-[var(--accent-color)]"
          }, null, 8, ["position"])
        ], 2),
        withDirectives(createBaseVNode("div", _hoisted_14$2, [
          createBaseVNode("button", {
            onClick: handlePreview,
            class: "action-btn group p-2 bg-white rounded-lg transition-all border border-gray-200 flex items-center gap-0 hover:gap-1.5 w-max"
          }, [
            createVNode(unref(NIcon), {
              size: 16,
              class: "text-gray-600"
            }, {
              default: withCtx(() => [
                createVNode(unref(EyeOutline))
              ]),
              _: 1
            }),
            _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs text-gray-600 max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-200 whitespace-nowrap" }, "预览", -1))
          ]),
          createBaseVNode("button", {
            onClick: handleDownload,
            class: "action-btn group p-2 bg-white rounded-lg transition-all border border-gray-200 flex items-center gap-0 hover:gap-1.5 w-max"
          }, [
            createVNode(unref(NIcon), {
              size: 16,
              class: "text-gray-600"
            }, {
              default: withCtx(() => [
                createVNode(unref(DownloadOutline))
              ]),
              _: 1
            }),
            _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-xs text-gray-600 max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-200 whitespace-nowrap" }, "下载", -1))
          ])
        ], 512), [
          [vShow, showActions.value && __props.data.url]
        ])
      ], 32);
    };
  }
};
const VideoNode = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-281b4cf0"]]);
const _hoisted_1$6 = { class: "px-3 py-2 border-b border-[var(--border-color)]" };
const _hoisted_2$3 = { class: "flex items-center justify-between" };
const _hoisted_3$3 = { class: "flex items-center gap-2" };
const _hoisted_4$3 = {
  class: "flex items-center",
  title: "设置公开（可被 @ 引用）"
};
const _hoisted_5$3 = { class: "flex items-center gap-1" };
const _hoisted_6$3 = {
  key: 0,
  class: "mt-1 text-xs text-[var(--text-secondary)] truncate"
};
const _hoisted_7$3 = { class: "p-3" };
const _hoisted_8$3 = {
  key: 0,
  class: "aspect-square rounded-xl bg-gradient-to-br from-cyan-400 via-blue-300 to-amber-200 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
};
const _hoisted_9$3 = {
  key: 1,
  class: "aspect-square rounded-xl bg-red-50 dark:bg-red-900/20 flex flex-col items-center justify-center gap-2 border border-red-200 dark:border-red-800"
};
const _hoisted_10$3 = { class: "text-sm text-red-600 dark:text-red-400 text-center px-2" };
const _hoisted_11$3 = ["src", "alt"];
const _hoisted_12$3 = { class: "flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 pr-1.5 border-r border-gray-200 dark:border-gray-600" };
const _hoisted_13$2 = { class: "flex items-center gap-1 w-16" };
const _hoisted_14$1 = {
  key: 3,
  class: "aspect-square rounded-xl bg-gradient-to-br from-cyan-400 via-blue-300 to-amber-200 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
};
const _hoisted_15$1 = {
  key: 4,
  class: "rounded-xl bg-[var(--bg-tertiary)] border-2 border-dashed border-[var(--border-color)] p-3"
};
const _hoisted_16$1 = { class: "aspect-video flex flex-col items-center justify-center gap-2 relative cursor-pointer hover:bg-[var(--bg-secondary)] rounded-lg transition-colors" };
const _hoisted_17$1 = { class: "flex gap-2" };
const _hoisted_18$1 = ["disabled"];
const _hoisted_19$1 = { class: "space-y-4" };
const _hoisted_20$1 = { class: "flex flex-col items-center gap-2" };
const _hoisted_21$1 = { class: "flex gap-2" };
const _sfc_main$6 = {
  __name: "ImageNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const showActions = ref(true);
    const showHandleMenu = ref(false);
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const urlInput = ref("");
    const urlLoading = ref(false);
    const showReplaceModal = ref(false);
    const replaceUrlInput = ref("");
    const replaceFileInputRef = ref(null);
    const isInpaintMode = ref(false);
    const brushSize = ref(40);
    const isDrawing = ref(false);
    const canvasRef = ref(null);
    const imageContainerRef = ref(null);
    const brushCursor = ref({ x: 0, y: 0, visible: false });
    const maskData = ref(null);
    const isPublic = computed(() => {
      return props.data?.publicProps?.name != null && props.data?.publicProps?.name !== "";
    });
    const handleTogglePublic = (value) => {
      if (value) {
        const name = props.data?.label || "图片";
        updateNode(props.id, {
          publicProps: { name }
        });
      } else {
        updateNode(props.id, {
          publicProps: {}
        });
      }
    };
    const operations = [
      { type: "imageConfig", label: "图生图", icon: ImageOutline, action: "image_imageConfig" },
      { type: "videoConfig", label: "生视频", icon: VideocamOutline, action: "image_videoConfig" }
    ];
    const handleSelect = (item) => {
      const action = item.action;
      if (action === "image_imageConfig") {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const nodeX = currentNode?.position?.x || 0;
        const nodeY = currentNode?.position?.y || 0;
        const sourceUrl = currentNode?.data?.url;
        if (!sourceUrl) {
          window.$message?.warning("当前图片节点没有图片");
          return;
        }
        const textNodeId = addNode("text", { x: nodeX + 300, y: nodeY - 100 }, {
          content: "",
          label: "提示词"
        });
        const configNodeId = addNode("imageConfig", { x: nodeX + 900, y: nodeY }, {
          model: "doubao-seedream-4-5-251128",
          size: "2048x2048",
          label: "生图配置"
        });
        addEdge({ source: props.id, target: configNodeId, sourceHandle: "right", targetHandle: "left" });
        addEdge({ source: textNodeId, target: configNodeId, sourceHandle: "right", targetHandle: "left" });
        setTimeout(() => updateNodeInternals([textNodeId, configNodeId]), 50);
        window.$message?.success("已创建图生图工作流");
      } else if (action === "image_videoConfig") {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const nodeX = currentNode?.position?.x || 0;
        const nodeY = currentNode?.position?.y || 0;
        const textNodeId = addNode("text", { x: nodeX + 300, y: nodeY - 100 }, {
          content: "",
          label: "提示词"
        });
        const configNodeId = addNode("videoConfig", { x: nodeX + 600, y: nodeY }, {
          label: "视频生成"
        });
        addEdge({
          source: props.id,
          target: configNodeId,
          sourceHandle: "right",
          targetHandle: "left",
          type: "imageRole",
          data: { imageRole: "first_frame_image" }
        });
        addEdge({
          source: textNodeId,
          target: configNodeId,
          sourceHandle: "right",
          targetHandle: "left"
        });
        setTimeout(() => updateNodeInternals([textNodeId, configNodeId]), 50);
        window.$message?.success("已创建视频生成工作流");
      }
    };
    const syncCanvasSize = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };
    const onCanvasPaint = (e) => {
      syncCanvasSize();
      isDrawing.value = true;
      paintAt(e.offsetX, e.offsetY);
      brushCursor.value = { x: e.offsetX, y: e.offsetY, visible: true };
    };
    const onCanvasMove = (e) => {
      brushCursor.value = { x: e.offsetX, y: e.offsetY, visible: true };
      if (isDrawing.value) {
        paintAt(e.offsetX, e.offsetY);
      }
    };
    const onPaintEnd = () => {
      isDrawing.value = false;
      brushCursor.value.visible = false;
    };
    const paintAt = (x, y) => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(x, y, brushSize.value, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
      ctx.fill();
    };
    const clearMask = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      maskData.value = null;
    };
    const applyInpaint = () => {
      const canvas = canvasRef.value;
      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        window.$message?.error("画布未初始化");
        return;
      }
      const container = imageContainerRef.value;
      const img = container?.querySelector("img");
      if (!img) {
        window.$message?.error("未找到图片");
        return;
      }
      const maskCanvas = document.createElement("canvas");
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;
      maskCanvas.width = imgWidth;
      maskCanvas.height = imgHeight;
      const maskCtx = maskCanvas.getContext("2d");
      maskCtx.fillStyle = "#000000";
      maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
      const scaleX = imgWidth / canvas.width;
      const scaleY = imgHeight / canvas.height;
      const originalData = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
      maskCtx.fillStyle = "#FFFFFF";
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4;
          if (originalData.data[i + 3] > 0) {
            maskCtx.fillRect(
              Math.floor(x * scaleX),
              Math.floor(y * scaleY),
              Math.ceil(scaleX),
              Math.ceil(scaleY)
            );
          }
        }
      }
      const dataUrl = maskCanvas.toDataURL("image/png");
      const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, "");
      maskData.value = base64Data;
      createInpaintWorkflow();
    };
    const createInpaintWorkflow = () => {
      const currentNode = nodes.value.find((n) => n.id === props.id);
      const nodeX = currentNode?.position?.x || 0;
      const nodeY = currentNode?.position?.y || 0;
      const textNodeId = addNode("text", { x: nodeX + 300, y: nodeY - 100 }, {
        content: "请输入重绘提示词...",
        label: "重绘提示词"
      });
      const configNodeId = addNode("imageConfig", { x: nodeX + 600, y: nodeY }, {
        model: "doubao-seedream-4-5-251128",
        size: "2048x2048",
        label: "局部重绘",
        inpaintMode: true
      });
      updateNode(props.id, {
        maskData: maskData.value,
        hasInpaintMask: true
      });
      addEdge({
        source: props.id,
        target: configNodeId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      addEdge({
        source: textNodeId,
        target: configNodeId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      isInpaintMode.value = false;
      setTimeout(() => {
        updateNodeInternals([textNodeId, configNodeId]);
      }, 50);
      window.$message?.success("已创建局部重绘工作流");
    };
    const fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };
    const handleFileUpload = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const base64 = await fileToBase64(file);
          updateNode(props.id, {
            url: base64,
            // Use base64 as display URL | 使用 base64 作为显示 URL
            base64,
            // Store base64 for API calls | 存储 base64 用于 API 调用
            fileName: file.name,
            fileType: file.type,
            label: "参考图",
            updatedAt: Date.now()
          });
        } catch (err) {
          console.error("File upload error:", err);
          window.$message?.error("图片上传失败");
        }
      }
    };
    const handleUrlSubmit = () => {
      const url = urlInput.value.trim();
      if (!url) return;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        window.$message?.warning("请输入有效的图片地址 (http:// 或 https://)");
        return;
      }
      urlLoading.value = true;
      const img = new Image();
      img.onload = () => {
        updateNode(props.id, {
          url,
          label: "网络图片",
          updatedAt: Date.now()
        });
        urlInput.value = "";
        urlLoading.value = false;
      };
      img.onerror = () => {
        window.$message?.error("图片加载失败，请检查地址是否正确");
        urlLoading.value = false;
      };
      img.src = url;
    };
    const handleReplaceFileUpload = async (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          const base64 = await fileToBase64(file);
          updateNode(props.id, {
            url: base64,
            base64,
            fileName: file.name,
            fileType: file.type,
            label: "参考图",
            updatedAt: Date.now()
          });
          showReplaceModal.value = false;
          replaceUrlInput.value = "";
          window.$message?.success("图片已替换");
        } catch (err) {
          console.error("File upload error:", err);
          window.$message?.error("图片上传失败");
        }
      }
    };
    const handleReplaceUrlSubmit = () => {
      const url = replaceUrlInput.value.trim();
      if (!url) return;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        window.$message?.warning("请输入有效的图片地址 (http:// 或 https://)");
        return;
      }
      const img = new Image();
      img.onload = () => {
        updateNode(props.id, {
          url,
          label: "网络图片",
          updatedAt: Date.now()
        });
        showReplaceModal.value = false;
        replaceUrlInput.value = "";
        window.$message?.success("图片已替换");
      };
      img.onerror = () => {
        window.$message?.error("图片加载失败，请检查地址是否正确");
      };
      img.src = url;
    };
    const startEditLabel = () => {
      editingLabelValue.value = props.data?.label || "图像生成结果";
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== props.data?.label) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
    };
    const handleDuplicate = () => {
      const newId2 = duplicateNode(props.id);
      if (newId2) {
        updateNode(props.id, { selected: false });
        updateNode(newId2, { selected: true });
        window.$message?.success("节点已复制");
        setTimeout(() => {
          updateNodeInternals(newId2);
        }, 50);
      }
    };
    const showRef = ref(false);
    const handlePreview = () => {
      if (props.data.url) {
        showRef.value = true;
      }
    };
    const handleDownload = () => {
      if (props.data.url) {
        const link = document.createElement("a");
        link.href = props.data.url;
        link.download = props.data.fileName || `image_${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.$message?.success("图片下载中...");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "image-node-wrapper",
          onMouseenter: _cache[6] || (_cache[6] = ($event) => {
            showActions.value = true;
            showHandleMenu.value = true;
          }),
          onMouseleave: _cache[7] || (_cache[7] = ($event) => {
            showActions.value = false;
            showHandleMenu.value = false;
          })
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["image-node bg-[var(--bg-secondary)] rounded-xl border min-w-[200px] max-w-[280px] relative transition-all duration-200", __props.data.selected ? "border-1 border-blue-500 shadow-lg shadow-blue-500/20" : "border border-[var(--border-color)]"])
          }, [
            createBaseVNode("div", _hoisted_1$6, [
              createBaseVNode("div", _hoisted_2$3, [
                createBaseVNode("div", _hoisted_3$3, [
                  !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    onDblclick: startEditLabel,
                    class: "text-sm font-medium text-[var(--text-primary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
                    title: "双击编辑名称"
                  }, toDisplayString(__props.data.label || "图像生成结果"), 33)) : withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    ref_key: "labelInputRef",
                    ref: labelInputRef,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
                    onBlur: finishEditLabel,
                    onKeydown: [
                      withKeys(finishEditLabel, ["enter"]),
                      withKeys(cancelEditLabel, ["escape"])
                    ],
                    class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-primary)] px-1 rounded outline-none border border-blue-500"
                  }, null, 544)), [
                    [vModelText, editingLabelValue.value]
                  ]),
                  createVNode(unref(NTooltip), { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", _hoisted_4$3, [
                        createVNode(unref(NSwitch), {
                          value: isPublic.value,
                          "onUpdate:value": handleTogglePublic,
                          size: "small"
                        }, null, 8, ["value"])
                      ])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(isPublic.value ? "已公开: " + (__props.data.label || "图片") : "点击公开（可被 @ 引用）"), 1)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_5$3, [
                  createVNode(unref(NTooltip), { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", {
                        onClick: _cache[1] || (_cache[1] = ($event) => showReplaceModal.value = true),
                        class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                      }, [
                        createVNode(unref(NIcon), { size: 14 }, {
                          default: withCtx(() => [
                            createVNode(unref(SwapHorizontalOutline))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      _cache[12] || (_cache[12] = createTextVNode(" 替换图片 ", -1))
                    ]),
                    _: 1
                  }),
                  __props.data.url ? (openBlock(), createBlock(unref(NTooltip), {
                    key: 0,
                    trigger: "hover"
                  }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", {
                        onClick: handlePreview,
                        class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                      }, [
                        createVNode(unref(NIcon), { size: 14 }, {
                          default: withCtx(() => [
                            createVNode(unref(EyeOutline))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      _cache[13] || (_cache[13] = createTextVNode(" 预览 ", -1))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  __props.data.url ? (openBlock(), createBlock(unref(NTooltip), {
                    key: 1,
                    trigger: "hover"
                  }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", {
                        onClick: handleDownload,
                        class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                      }, [
                        createVNode(unref(NIcon), { size: 14 }, {
                          default: withCtx(() => [
                            createVNode(unref(DownloadOutline))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      _cache[14] || (_cache[14] = createTextVNode(" 下载 ", -1))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(unref(NTooltip), { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", {
                        onClick: handleDuplicate,
                        class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                      }, [
                        createVNode(unref(NIcon), { size: 14 }, {
                          default: withCtx(() => [
                            createVNode(unref(CopyOutline))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      _cache[15] || (_cache[15] = createTextVNode(" 复制节点 ", -1))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NTooltip), { trigger: "hover" }, {
                    trigger: withCtx(() => [
                      createBaseVNode("button", {
                        onClick: handleDelete,
                        class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
                      }, [
                        createVNode(unref(NIcon), { size: 14 }, {
                          default: withCtx(() => [
                            createVNode(unref(TrashOutline))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      _cache[16] || (_cache[16] = createTextVNode(" 删除节点 ", -1))
                    ]),
                    _: 1
                  })
                ])
              ]),
              __props.data.model ? (openBlock(), createElementBlock("div", _hoisted_6$3, toDisplayString(__props.data.model), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_7$3, [
              __props.data.loading ? (openBlock(), createElementBlock("div", _hoisted_8$3, [..._cache[17] || (_cache[17] = [
                createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-400/20 to-amber-300/20 animate-pulse" }, null, -1),
                createBaseVNode("div", { class: "relative z-10" }, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "Loading",
                    class: "w-14 h-12"
                  })
                ], -1),
                createBaseVNode("span", { class: "text-sm text-white font-medium relative z-10" }, "创作中", -1)
              ])])) : __props.data.error ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
                createVNode(unref(NIcon), {
                  size: 32,
                  class: "text-red-500"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(CloseCircleOutline))
                  ]),
                  _: 1
                }),
                createBaseVNode("span", _hoisted_10$3, toDisplayString(__props.data.error), 1)
              ])) : __props.data.url ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: "rounded-xl overflow-hidden relative",
                ref_key: "imageContainerRef",
                ref: imageContainerRef
              }, [
                createBaseVNode("img", {
                  src: __props.data.url,
                  alt: __props.data.label,
                  class: normalizeClass(["w-full h-auto object-cover", { "pointer-events-none": isInpaintMode.value }])
                }, null, 10, _hoisted_11$3),
                isInpaintMode.value ? (openBlock(), createElementBlock("canvas", {
                  key: 0,
                  ref_key: "canvasRef",
                  ref: canvasRef,
                  class: "absolute inset-0 w-full h-full cursor-none z-10",
                  onMousedown: withModifiers(onCanvasPaint, ["stop", "prevent"]),
                  onMousemove: withModifiers(onCanvasMove, ["stop"]),
                  onMouseup: withModifiers(onPaintEnd, ["stop"]),
                  onMouseleave: onPaintEnd
                }, null, 544)) : createCommentVNode("", true),
                withDirectives(createBaseVNode("div", {
                  class: "absolute pointer-events-none border-2 border-purple-500 rounded-full bg-purple-400/30 transition-none",
                  style: normalizeStyle({
                    width: brushSize.value * 2 + "px",
                    height: brushSize.value * 2 + "px",
                    left: brushCursor.value.x - brushSize.value + "px",
                    top: brushCursor.value.y - brushSize.value + "px"
                  })
                }, null, 4), [
                  [vShow, brushCursor.value.visible && isInpaintMode.value]
                ]),
                withDirectives(createBaseVNode("div", {
                  class: "absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full shadow-md border border-gray-200/80 dark:border-gray-700 z-[9999]",
                  onMousedown: _cache[3] || (_cache[3] = withModifiers(() => {
                  }, ["stop"])),
                  onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createBaseVNode("div", _hoisted_12$3, [
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(BrushOutline))
                      ]),
                      _: 1
                    }),
                    _cache[18] || (_cache[18] = createBaseVNode("span", null, "擦除", -1))
                  ]),
                  createBaseVNode("div", _hoisted_13$2, [
                    _cache[19] || (_cache[19] = createBaseVNode("div", { class: "w-1.5 h-1.5 rounded-full bg-purple-400" }, null, -1)),
                    withDirectives(createBaseVNode("input", {
                      type: "range",
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => brushSize.value = $event),
                      min: "10",
                      max: "80",
                      class: "w-full h-0.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
                    }, null, 512), [
                      [vModelText, brushSize.value]
                    ]),
                    _cache[20] || (_cache[20] = createBaseVNode("div", { class: "w-2.5 h-2.5 rounded-full bg-purple-400" }, null, -1))
                  ]),
                  createBaseVNode("button", {
                    onClick: clearMask,
                    class: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
                    title: "清除"
                  }, [
                    createVNode(unref(NIcon), {
                      size: 12,
                      class: "text-gray-400"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(RefreshOutline))
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("button", {
                    onClick: applyInpaint,
                    class: "px-2 py-0.5 bg-purple-500 hover:bg-purple-600 text-white text-xs rounded transition-colors"
                  }, " 应用 ")
                ], 544), [
                  [vShow, isInpaintMode.value]
                ])
              ], 512)) : urlLoading.value ? (openBlock(), createElementBlock("div", _hoisted_14$1, [..._cache[21] || (_cache[21] = [
                createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-400/20 to-amber-300/20 animate-pulse" }, null, -1),
                createBaseVNode("div", { class: "relative z-10" }, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "Loading",
                    class: "w-14 h-12"
                  })
                ], -1),
                createBaseVNode("span", { class: "text-sm text-white font-medium relative z-10" }, "加载中...", -1)
              ])])) : (openBlock(), createElementBlock("div", _hoisted_15$1, [
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(unref(NIcon), {
                    size: 32,
                    class: "text-[var(--text-secondary)]"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ImageOutline))
                    ]),
                    _: 1
                  }),
                  _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-sm text-[var(--text-secondary)] text-center" }, "拖放图片或点击上传", -1)),
                  createBaseVNode("input", {
                    type: "file",
                    accept: "image/*",
                    class: "absolute inset-0 opacity-0 cursor-pointer",
                    onChange: handleFileUpload
                  }, null, 32)
                ]),
                _cache[23] || (_cache[23] = createBaseVNode("div", { class: "flex items-center gap-2 my-3" }, [
                  createBaseVNode("div", { class: "flex-1 h-px bg-[var(--border-color)]" }),
                  createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "或"),
                  createBaseVNode("div", { class: "flex-1 h-px bg-[var(--border-color)]" })
                ], -1)),
                createBaseVNode("div", _hoisted_17$1, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => urlInput.value = $event),
                    type: "text",
                    placeholder: "输入图片地址...",
                    class: "flex-1 px-2 py-1 text-sm bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg outline-none focus:border-[var(--accent-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]",
                    onKeydown: withKeys(handleUrlSubmit, ["enter"])
                  }, null, 544), [
                    [vModelText, urlInput.value]
                  ]),
                  createBaseVNode("button", {
                    onClick: handleUrlSubmit,
                    disabled: !urlInput.value.trim(),
                    class: "px-3 py-2 text-xs bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  }, " 预览 ", 8, _hoisted_18$1)
                ])
              ]))
            ]),
            createVNode(NodeHandleMenu, {
              nodeId: __props.id,
              nodeType: "image",
              visible: showHandleMenu.value,
              operations,
              onSelect: handleSelect
            }, null, 8, ["nodeId", "visible"]),
            createVNode(unref(_sfc_main$f$1), {
              type: "target",
              position: unref(Position).Left,
              id: "left",
              class: "!bg-[var(--accent-color)]"
            }, null, 8, ["position"])
          ], 2)
        ], 32),
        createVNode(unref(NImagePreview), {
          show: showRef.value,
          "onUpdate:show": _cache[8] || (_cache[8] = ($event) => showRef.value = $event),
          src: props.data?.url
        }, null, 8, ["show", "src"]),
        createVNode(unref(NModal), {
          show: showReplaceModal.value,
          "onUpdate:show": _cache[11] || (_cache[11] = ($event) => showReplaceModal.value = $event),
          preset: "card",
          title: "替换图片",
          class: "w-[400px]",
          "mask-closable": true
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_19$1, [
              createBaseVNode("div", {
                class: "border-2 border-dashed border-[var(--border-color)] rounded-xl p-4 cursor-pointer hover:bg-[var(--bg-tertiary)] transition-colors",
                onClick: _cache[9] || (_cache[9] = ($event) => replaceFileInputRef.value?.click())
              }, [
                createBaseVNode("div", _hoisted_20$1, [
                  createVNode(unref(NIcon), {
                    size: 32,
                    class: "text-[var(--text-secondary)]"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ImageOutline))
                    ]),
                    _: 1
                  }),
                  _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-sm text-[var(--text-secondary)]" }, "点击上传图片", -1)),
                  createBaseVNode("input", {
                    ref_key: "replaceFileInputRef",
                    ref: replaceFileInputRef,
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: handleReplaceFileUpload
                  }, null, 544)
                ])
              ]),
              _cache[26] || (_cache[26] = createBaseVNode("div", { class: "flex items-center gap-2" }, [
                createBaseVNode("div", { class: "flex-1 h-px bg-[var(--border-color)]" }),
                createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "或"),
                createBaseVNode("div", { class: "flex-1 h-px bg-[var(--border-color)]" })
              ], -1)),
              createBaseVNode("div", _hoisted_21$1, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => replaceUrlInput.value = $event),
                  type: "text",
                  placeholder: "输入图片地址...",
                  class: "flex-1 px-3 py-2 text-sm bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg outline-none focus:border-[var(--accent-color)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]",
                  onKeydown: withKeys(handleReplaceUrlSubmit, ["enter"])
                }, null, 544), [
                  [vModelText, replaceUrlInput.value]
                ]),
                createVNode(unref(Button), {
                  type: "primary",
                  size: "small",
                  disabled: !replaceUrlInput.value.trim(),
                  onClick: handleReplaceUrlSubmit
                }, {
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
                    createTextVNode(" 确认 ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
};
const ImageNode = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-48762602"]]);
const _hoisted_1$5 = { class: "flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)]" };
const _hoisted_2$2 = { class: "flex items-center gap-1" };
const _hoisted_3$2 = { class: "p-3 space-y-3" };
const _hoisted_4$2 = { class: "flex items-center justify-between" };
const _hoisted_5$2 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_6$2 = { class: "flex items-center justify-between" };
const _hoisted_7$2 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_8$2 = { class: "flex items-center justify-between" };
const _hoisted_9$2 = { class: "flex items-center gap-1 text-sm text-[var(--text-primary)] hover:text-[var(--accent-color)]" };
const _hoisted_10$2 = { class: "flex items-center gap-2 text-xs text-[var(--text-secondary)] py-1 border-t border-[var(--border-color)]" };
const _hoisted_11$2 = ["disabled"];
const _hoisted_12$2 = {
  key: 0,
  class: "text-xs text-red-500 mt-2"
};
const _sfc_main$5 = {
  __name: "VideoConfigNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const modelStore = useModelStore();
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const isConfigured = computed(() => !!modelStore.currentApiKey);
    const { loading, error, createVideoTaskOnly } = useVideoGeneration();
    const showHandleMenu = ref(false);
    const isGenerating = ref(false);
    const localModel = ref(props.data?.model || DEFAULT_VIDEO_MODEL);
    const localRatio = ref(props.data?.ratio || "16:9");
    const localDuration = ref(props.data?.dur || 5);
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const connectedImages = computed(() => {
      const connectedEdges = edges.value.filter((e) => e.target === props.id);
      const images = [];
      for (const edge of connectedEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (sourceNode?.type === "image" && sourceNode.data?.url) {
          images.push({
            nodeId: sourceNode.id,
            edgeId: edge.id,
            url: sourceNode.data.url,
            base64: sourceNode.data.base64,
            role: edge.data?.imageRole || "first_frame_image"
            // Default to first frame | 默认首帧
          });
        }
      }
      return images;
    });
    const imagesByRole = computed(() => {
      const firstFrame = connectedImages.value.find((img) => img.role === "first_frame_image");
      const lastFrame = connectedImages.value.find((img) => img.role === "last_frame_image");
      const referenceImages = connectedImages.value.filter((img) => img.role === "input_reference");
      return {
        firstFrame,
        lastFrame,
        referenceImages
      };
    });
    const modelOptions = computed(() => modelStore.allVideoModelOptions);
    const displayModelName = computed(() => {
      const model = modelOptions.value.find((m) => m.key === localModel.value);
      if (!model) {
        const allModel = modelStore.allVideoModels.find((m) => m.key === localModel.value);
        return allModel?.label || localModel.value || "选择模型";
      }
      return model?.label || localModel.value || "选择模型";
    });
    const ratioOptions = computed(() => {
      return getModelRatioOptions(localModel.value);
    });
    const durationOptions = computed(() => {
      return getModelDurationOptions(localModel.value);
    });
    const handleModelSelect = (key) => {
      localModel.value = key;
      const config = getModelConfig(key);
      const updates = { model: key };
      if (config?.defaultParams?.ratio) {
        localRatio.value = config.defaultParams.ratio;
        updates.ratio = config.defaultParams.ratio;
      }
      if (config?.defaultParams?.duration) {
        localDuration.value = config.defaultParams.duration;
        updates.dur = config.defaultParams.duration;
      }
      updateNode(props.id, updates);
    };
    const handleDuplicate = () => {
      const newNodeId = duplicateNode(props.id);
      window.$message?.success("节点已复制");
      if (newNodeId) {
        setTimeout(() => {
          updateNodeInternals(newNodeId);
        }, 50);
      }
    };
    const handleRatioSelect = (key) => {
      localRatio.value = key;
      updateNode(props.id, { ratio: key });
    };
    const handleDurationSelect = (key) => {
      localDuration.value = key;
      updateNode(props.id, { dur: key });
    };
    const getConnectedInputs = () => {
      const connectedEdges = edges.value.filter((e) => e.target === props.id);
      let prompt = "";
      let first_frame_image = "";
      let last_frame_image = "";
      const images = [];
      for (const edge of connectedEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (!sourceNode) continue;
        if (sourceNode.type === "text") {
          prompt = sourceNode.data?.content || "";
        } else if (sourceNode.type === "llmConfig") {
          const content = sourceNode.data?.outputContent || "";
          if (content) prompt = content;
        } else if (sourceNode.type === "image" && sourceNode.data?.url) {
          const imageData = sourceNode.data.base64 || sourceNode.data.url;
          const role = edge.data?.imageRole || "first_frame_image";
          if (role === "first_frame_image") {
            first_frame_image = imageData;
          } else if (role === "last_frame_image") {
            last_frame_image = imageData;
          } else if (role === "input_reference") {
            images.push(imageData);
          }
        }
      }
      return { prompt, first_frame_image, last_frame_image, images };
    };
    const connectedPrompt = computed(() => {
      return getConnectedInputs().prompt;
    });
    const createdVideoNodeId = ref(null);
    const handleGenerate = async () => {
      isGenerating.value = true;
      const { prompt, first_frame_image, last_frame_image, images } = getConnectedInputs();
      const hasInput = prompt || first_frame_image || last_frame_image || images.length > 0;
      if (!hasInput) {
        window.$message?.warning("请先连接文本节点或图片节点");
        isGenerating.value = false;
        return;
      }
      if (!isConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        isGenerating.value = false;
        return;
      }
      const currentNode = nodes.value.find((n) => n.id === props.id);
      const nodeX = currentNode?.position?.x || 0;
      const nodeY = currentNode?.position?.y || 0;
      const videoNodeId = addNode("video", { x: nodeX + 350, y: nodeY }, {
        url: "",
        loading: true,
        label: "视频生成中..."
      });
      createdVideoNodeId.value = videoNodeId;
      addEdge({
        source: props.id,
        target: videoNodeId,
        sourceHandle: "right",
        targetHandle: "left"
      });
      setTimeout(() => {
        updateNodeInternals(videoNodeId);
      }, 50);
      try {
        const params = {
          model: localModel.value,
          watermark: false
        };
        if (prompt) {
          params.prompt = prompt;
        }
        if (first_frame_image) {
          params.first_frame_image = first_frame_image;
        }
        if (last_frame_image) {
          params.last_frame_image = last_frame_image;
        }
        if (images.length > 0) {
          params.images = images;
        }
        if (localRatio.value) {
          params.ratio = localRatio.value;
        }
        if (localDuration.value) {
          params.dur = localDuration.value;
        }
        const { taskId: newTaskId, url } = await createVideoTaskOnly(params);
        if (url) {
          updateNode(videoNodeId, {
            url,
            loading: false,
            label: "视频生成",
            model: localModel.value,
            updatedAt: Date.now()
          });
          window.$message?.success("视频生成成功");
          updateNode(props.id, { executed: true, outputNodeId: videoNodeId });
        } else if (newTaskId) {
          updateNode(videoNodeId, {
            taskId: newTaskId,
            loading: true,
            label: "视频生成中...",
            model: localModel.value,
            updatedAt: Date.now()
          });
          window.$message?.success("视频任务已创建");
          updateNode(props.id, { executed: true, outputNodeId: videoNodeId });
        }
      } catch (err) {
        updateNode(videoNodeId, {
          loading: false,
          error: err.message || "生成失败",
          label: "生成失败",
          updatedAt: Date.now()
        });
        window.$message?.error(err.message || "视频生成失败");
      } finally {
        isGenerating.value = false;
      }
    };
    const startEditLabel = () => {
      editingLabelValue.value = props.data?.label || "视频生成";
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== props.data?.label) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
    };
    onMounted(() => {
      const availableModels = modelStore.availableVideoModels;
      const isModelAvailable = availableModels.some((m) => m.key === localModel.value);
      if (!localModel.value || !isModelAvailable) {
        localModel.value = modelStore.selectedVideoModel || availableModels[0]?.key || DEFAULT_VIDEO_MODEL;
        updateNode(props.id, { model: localModel.value });
      }
    });
    watch(() => props.data?.model, (newModel) => {
      if (newModel && newModel !== localModel.value) {
        localModel.value = newModel;
      }
    });
    watch(() => props.data, () => {
      nextTick(() => {
        updateNodeInternals(props.id);
      });
    }, { deep: true });
    watch(
      () => props.data?.autoExecute,
      (shouldExecute) => {
        if (shouldExecute && !loading.value) {
          updateNode(props.id, { autoExecute: false });
          setTimeout(() => {
            handleGenerate();
          }, 100);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "video-config-node-wrapper relative",
        onMouseenter: _cache[1] || (_cache[1] = ($event) => showHandleMenu.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => showHandleMenu.value = false)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["video-config-node bg-[var(--bg-secondary)] rounded-xl border min-w-[300px] transition-all duration-200", __props.data.selected ? "border-1 border-blue-500 shadow-lg shadow-blue-500/20" : "border border-[var(--border-color)]"])
        }, [
          createBaseVNode("div", _hoisted_1$5, [
            !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
              key: 0,
              onDblclick: startEditLabel,
              class: "text-sm font-medium text-[var(--text-secondary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
              title: "双击编辑名称"
            }, toDisplayString(__props.data.label || "视频生成"), 33)) : withDirectives((openBlock(), createElementBlock("input", {
              key: 1,
              ref_key: "labelInputRef",
              ref: labelInputRef,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
              onBlur: finishEditLabel,
              onKeydown: [
                withKeys(finishEditLabel, ["enter"]),
                withKeys(cancelEditLabel, ["escape"])
              ],
              class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-1 rounded outline-none border border-blue-500"
            }, null, 544)), [
              [vModelText, editingLabelValue.value]
            ]),
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("button", {
                onClick: handleDuplicate,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "复制节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(CopyOutline))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("button", {
                onClick: handleDelete,
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                title: "删除节点"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(TrashOutline))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, [
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "模型", -1)),
              createVNode(unref(NDropdown), {
                options: modelOptions.value,
                onSelect: handleModelSelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_5$2, [
                    createTextVNode(toDisplayString(displayModelName.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronDownOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ]),
            createBaseVNode("div", _hoisted_6$2, [
              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "比例", -1)),
              createVNode(unref(NDropdown), {
                options: ratioOptions.value,
                onSelect: handleRatioSelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_7$2, [
                    createTextVNode(toDisplayString(localRatio.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronForwardOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ]),
            createBaseVNode("div", _hoisted_8$2, [
              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "时长", -1)),
              createVNode(unref(NDropdown), {
                options: durationOptions.value,
                onSelect: handleDurationSelect
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_9$2, [
                    createTextVNode(toDisplayString(localDuration.value) + "s ", 1),
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronForwardOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["options"])
            ]),
            createBaseVNode("div", _hoisted_10$2, [
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", connectedPrompt.value ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 提示词 " + toDisplayString(connectedPrompt.value ? "✓" : "○"), 3),
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", imagesByRole.value.firstFrame ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 首帧 " + toDisplayString(imagesByRole.value.firstFrame ? "✓" : "○"), 3),
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", imagesByRole.value.lastFrame ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 尾帧 " + toDisplayString(imagesByRole.value.lastFrame ? "✓" : "○"), 3),
              createBaseVNode("span", {
                class: normalizeClass(["px-2 py-0.5 rounded-full", imagesByRole.value.referenceImages.length > 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-gray-100 text-gray-500 dark:bg-gray-800"])
              }, " 参考图 " + toDisplayString(imagesByRole.value.referenceImages.length > 0 ? `✓ ${imagesByRole.value.referenceImages.length}` : "○"), 3)
            ]),
            createBaseVNode("button", {
              onClick: handleGenerate,
              disabled: isGenerating.value || !isConfigured.value,
              class: "w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            }, [
              isGenerating.value ? (openBlock(), createBlock(unref(NSpin), {
                key: 0,
                size: 14
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createVNode(unref(NIcon), { size: 16 }, {
                  default: withCtx(() => [
                    createVNode(unref(VideocamOutline))
                  ]),
                  _: 1
                }),
                _cache[6] || (_cache[6] = createTextVNode(" 生成视频 ", -1))
              ], 64))
            ], 8, _hoisted_11$2),
            unref(error) ? (openBlock(), createElementBlock("div", _hoisted_12$2, toDisplayString(unref(error).message || "生成失败"), 1)) : createCommentVNode("", true)
          ]),
          createVNode(unref(_sfc_main$f$1), {
            type: "target",
            position: unref(Position).Left,
            id: "left",
            class: "!bg-[var(--accent-color)]"
          }, null, 8, ["position"]),
          createVNode(NodeHandleMenu, {
            nodeId: __props.id,
            nodeType: "videoConfig",
            visible: showHandleMenu.value,
            operations: []
          }, null, 8, ["nodeId", "visible"])
        ], 2)
      ], 32);
    };
  }
};
const VideoConfigNode = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-34136d0a"]]);
const _hoisted_1$4 = { class: "flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)] bg-gradient-to-r from-purple-500/10 to-transparent" };
const _hoisted_2$1 = { class: "flex items-center gap-2" };
const _hoisted_3$1 = { class: "flex items-center gap-1" };
const _hoisted_4$1 = { class: "p-3 space-y-3" };
const _hoisted_5$1 = { class: "relative" };
const _hoisted_6$1 = ["disabled"];
const _hoisted_7$1 = {
  key: 0,
  class: "mt-2"
};
const _hoisted_8$1 = { class: "flex items-center justify-between mb-1" };
const _hoisted_9$1 = { class: "whitespace-pre-wrap" };
const _hoisted_10$1 = { class: "mt-2 flex gap-2" };
const _hoisted_11$1 = ["disabled"];
const _hoisted_12$1 = ["disabled"];
const _hoisted_13$1 = {
  key: 0,
  class: "mt-1 text-xs text-green-600 dark:text-green-400"
};
const placeholder = "设定 AI 的角色和行为规则，输入 @ 可引用文本节点...";
const _sfc_main$4 = {
  __name: "LLMConfigNode",
  props: {
    id: String,
    data: Object
  },
  setup(__props) {
    const props = __props;
    const { updateNodeInternals } = useVueFlow();
    const isApiConfigured = computed(() => !!modelStore.currentApiKey);
    const showHandleMenu = ref(false);
    const systemPrompt = ref(props.data?.systemPrompt || "");
    const systemPromptRef = ref(null);
    const textareaWrapper = ref(null);
    const lastContent = ref("");
    const isEditingLabel = ref(false);
    const editingLabelValue = ref("");
    const labelInputRef = ref(null);
    const nodeLabel = computed(() => props.data?.label || "LLM 文本生成");
    const showMentionsPicker = ref(false);
    const mentionsPosition = ref({ x: 0, y: 0 });
    const mentionSearchStart = ref(-1);
    let isInternalUpdate = false;
    const getEditableText = () => {
      const el = systemPromptRef.value;
      if (!el) return "";
      let text = "";
      const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList?.contains("mention-chip")) {
            text += `@[${node.dataset.nodeId}]`;
          } else if (node.tagName === "BR") {
            text += "\n";
          } else {
            node.childNodes.forEach(walk);
          }
        }
      };
      el.childNodes.forEach(walk);
      return text;
    };
    const createMentionChip = (node) => {
      const chip = document.createElement("span");
      chip.className = "mention-chip";
      chip.contentEditable = "false";
      chip.dataset.nodeId = node.id;
      chip.dataset.label = node.data?.label || node.data?.content?.slice(0, 20) || "文本";
      const iconWrap = document.createElement("span");
      iconWrap.className = "mention-chip-icon";
      iconWrap.textContent = "📝";
      chip.appendChild(iconWrap);
      const label = document.createElement("span");
      label.className = "mention-chip-label";
      label.textContent = chip.dataset.label;
      chip.appendChild(label);
      return chip;
    };
    const insertMentionChipDOM = (node) => {
      const el = systemPromptRef.value;
      if (!el) return;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let lastAtNode = null;
      let lastAtOffset = -1;
      while (walker.nextNode()) {
        const idx = walker.currentNode.textContent.lastIndexOf("@");
        if (idx !== -1) {
          lastAtNode = walker.currentNode;
          lastAtOffset = idx;
        }
      }
      if (!lastAtNode || lastAtOffset === -1) return;
      const chip = createMentionChip(node);
      const spaceNode = document.createTextNode(" ");
      const beforeText = lastAtNode.textContent.substring(0, lastAtOffset);
      if (beforeText) {
        lastAtNode.textContent = beforeText;
        lastAtNode.parentNode.insertBefore(chip, lastAtNode.nextSibling);
        lastAtNode.parentNode.insertBefore(spaceNode, chip.nextSibling);
      } else {
        const parent = lastAtNode.parentNode;
        parent.insertBefore(chip, lastAtNode);
        parent.insertBefore(spaceNode, chip.nextSibling);
        parent.removeChild(lastAtNode);
      }
      const range = document.createRange();
      range.setStartAfter(spaceNode);
      range.collapse(true);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      isInternalUpdate = true;
      systemPrompt.value = getEditableText();
      lastContent.value = systemPrompt.value;
      nextTick(() => {
        isInternalUpdate = false;
      });
    };
    const setEditableContent = (text) => {
      if (!systemPromptRef.value) return;
      systemPromptRef.value.innerHTML = "";
      if (text) {
        systemPromptRef.value.textContent = text;
      }
    };
    const convertTextMentionsToChips = () => {
      const el = systemPromptRef.value;
      if (!el) return;
      const textNodes = nodes.value.filter((n) => n.type === "text" && n.data?.content);
      if (textNodes.length === 0) return;
      if (!el.textContent.includes("@")) return;
      const pattern = /@\[([^\]|]+)(?:\|([^\]]+))?\]/g;
      const targets = [];
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.parentElement?.closest(".mention-chip")) continue;
        pattern.lastIndex = 0;
        if (pattern.test(node.textContent)) {
          targets.push(node);
        }
      }
      if (targets.length === 0) return;
      targets.forEach((textNode) => {
        const text = textNode.textContent;
        pattern.lastIndex = 0;
        const fragment = document.createDocumentFragment();
        let lastIdx = 0;
        let match;
        while ((match = pattern.exec(text)) !== null) {
          if (match.index > lastIdx) {
            fragment.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
          }
          const nodeId2 = match[1];
          const node = textNodes.find((n) => n.id === nodeId2);
          if (node) {
            fragment.appendChild(createMentionChip(node));
            fragment.appendChild(document.createTextNode(" "));
          } else {
            fragment.appendChild(document.createTextNode(match[0]));
          }
          lastIdx = pattern.lastIndex;
        }
        if (lastIdx < text.length) {
          fragment.appendChild(document.createTextNode(text.slice(lastIdx)));
        }
        textNode.parentNode.replaceChild(fragment, textNode);
      });
    };
    let _convertTimer = null;
    const debouncedConvertMentions = () => {
      if (_convertTimer) clearTimeout(_convertTimer);
      _convertTimer = setTimeout(convertTextMentionsToChips, 300);
    };
    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData?.getData("text/plain") || "";
      document.execCommand("insertText", false, text);
    };
    const connectedTextNodeIds = computed(() => {
      const incomingEdges = edges.value.filter((e) => e.target === props.id);
      const connectedIds = [];
      for (const edge of incomingEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (sourceNode?.type === "text") {
          connectedIds.push(sourceNode.id);
        }
      }
      return connectedIds;
    });
    const hasConnectedNodes = computed(() => {
      return connectedTextNodeIds.value.length > 0;
    });
    const operations = [
      { type: "imageConfig", label: "生图", icon: ImageOutline },
      { type: "videoConfig", label: "生视频", icon: VideocamOutline },
      { type: "text", label: "文本", icon: DocumentTextOutline }
    ];
    const handleSelect = (item) => {
      const currentNode = nodes.value.find((n) => n.id === props.id);
      const nodeX = currentNode?.position?.x || 0;
      const nodeY = currentNode?.position?.y || 0;
      const defaultData = {
        imageConfig: { model: "doubao-seedream-4-5-251128", size: "2048x2048", label: "文生图" },
        videoConfig: { label: "视频生成" },
        text: { content: "", label: "文本输入" }
      };
      const newId2 = addNode(item.type, { x: nodeX + 400, y: nodeY }, defaultData[item.type] || {});
      addEdge({
        source: props.id,
        target: newId2,
        sourceHandle: "right",
        targetHandle: "left"
      });
      setTimeout(() => updateNodeInternals(newId2), 50);
      window.$message?.success(`已创建${item.label}节点`);
    };
    const handleKeydown = (e) => {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        document.execCommand("insertLineBreak");
        return;
      }
      if (showMentionsPicker.value) {
        if (e.key === "Escape") {
          e.preventDefault();
          showMentionsPicker.value = false;
          const editor = systemPromptRef.value;
          if (!editor) return;
          const selection2 = window.getSelection();
          if (!selection2.rangeCount) return;
          const range = selection2.getRangeAt(0);
          const cursorPos = range.startOffset;
          const textBeforeCursor = systemPrompt.value.slice(0, cursorPos);
          const lastAtIndex = textBeforeCursor.lastIndexOf("@");
          if (lastAtIndex !== -1) {
            systemPrompt.value = textBeforeCursor.slice(0, lastAtIndex) + systemPrompt.value.slice(cursorPos);
            nextTick(() => {
              editor.innerHTML = systemPrompt.value.replace(/\n/g, "<br>");
              const newRange = document.createRange();
              newRange.setStart(editor.firstChild || editor, lastAtIndex);
              newRange.collapse(true);
              selection2.removeAllRanges();
              selection2.addRange(newRange);
            });
          }
        }
        return;
      }
    };
    const handleMentionSelect = ({ nodeId: nodeId2 }) => {
      const node = nodes.value.find((n) => n.id === nodeId2);
      if (!node) {
        showMentionsPicker.value = false;
        return;
      }
      insertMentionChipDOM(node);
      updateConfig();
      showMentionsPicker.value = false;
    };
    const getTextPositionBeforeCursor = (editor, range) => {
      const container = editor;
      let textLength = 0;
      let found = false;
      const walk = (node) => {
        if (found) return;
        if (node.nodeType === Node.TEXT_NODE) {
          const nodeLength = node.textContent.length;
          if (range.startContainer === node) {
            textLength += range.startOffset;
            found = true;
            return;
          }
          textLength += nodeLength;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList?.contains("mention-chip")) {
            const replacement = `@[${node.dataset.nodeId || ""}]`;
            if (range.startContainer === node || container.contains(range.startContainer) && isNodeInside(node, range.startContainer)) {
              found = true;
              return;
            }
            textLength += replacement.length;
          } else if (node.tagName === "BR") {
            textLength += 1;
          } else {
            for (const child of node.childNodes) {
              walk(child);
              if (found) return;
            }
          }
        }
      };
      walk(container);
      return textLength;
    };
    const isNodeInside = (parent, child) => {
      let node = child;
      while (node) {
        if (node === parent) return true;
        node = node.parentNode;
      }
      return false;
    };
    const handleInput = (e) => {
      const editor = e.target;
      isInternalUpdate = true;
      systemPrompt.value = getEditableText();
      lastContent.value = systemPrompt.value;
      nextTick(() => {
        isInternalUpdate = false;
      });
      debouncedConvertMentions();
      const selection2 = window.getSelection();
      if (!selection2.rangeCount) return;
      const range = selection2.getRangeAt(0);
      const cursorPos = getTextPositionBeforeCursor(editor, range);
      const fullText = getEditableText();
      const textBeforeCursor = fullText.slice(0, cursorPos);
      const lastAtIndex = textBeforeCursor.lastIndexOf("@");
      if (lastAtIndex !== -1) {
        const textAfterAt = textBeforeCursor.slice(lastAtIndex + 1);
        const bracketMatch = textAfterAt.match(/\[([^\]]*)\]/);
        const hasCompleteMention = bracketMatch !== null;
        if (!textAfterAt.includes(" ") && !hasCompleteMention && hasConnectedNodes.value) {
          showMentionsPicker.value = true;
          mentionSearchStart.value = lastAtIndex;
          const rect = editor.getBoundingClientRect();
          mentionsPosition.value = {
            x: rect.left + 10,
            y: rect.bottom + 5
          };
          return;
        }
      }
      showMentionsPicker.value = false;
    };
    const handleBlur = () => {
      setTimeout(() => {
        showMentionsPicker.value = false;
      }, 200);
      updateConfig();
    };
    watch(() => props.data, (newData) => {
      if (newData?.systemPrompt !== void 0 && newData.systemPrompt !== systemPrompt.value) {
        systemPrompt.value = newData.systemPrompt;
        lastContent.value = systemPrompt.value;
        setEditableContent(systemPrompt.value);
        nextTick(() => convertTextMentionsToChips());
      }
      if (newData?.model !== void 0) model.value = newData.model;
      if (newData?.outputFormat !== void 0) outputFormat.value = newData.outputFormat;
      if (newData?.outputContent !== void 0) outputContent.value = newData.outputContent;
      nextTick(() => {
        updateNodeInternals(props.id);
      });
    }, { deep: true });
    watch(systemPrompt, (newVal) => {
      if (isInternalUpdate) return;
      setEditableContent(newVal);
      nextTick(() => convertTextMentionsToChips());
      lastContent.value = newVal;
    });
    onMounted(() => {
      const availableModels = modelStore.availableChatModels;
      const isModelAvailable = availableModels.some((m) => m.key === model.value);
      if (!model.value || !isModelAvailable) {
        model.value = modelStore.selectedChatModel || availableModels[0]?.key || "gpt-4o-mini";
        updateConfig();
      }
      if (systemPromptRef.value) {
        if (props.data?.systemPrompt) {
          systemPrompt.value = props.data.systemPrompt;
        }
        lastContent.value = systemPrompt.value;
        setEditableContent(systemPrompt.value);
        nextTick(() => convertTextMentionsToChips());
      }
    });
    const outputFormat = ref(props.data?.outputFormat || "text");
    const outputContent = ref(props.data?.outputContent || "");
    const isGenerating = ref(false);
    const isSplitting = ref(false);
    const splitMessage = ref("");
    const modelStore = useModelStore();
    const modelOptions = computed(() => modelStore.allChatModelOptions);
    const model = ref(props.data?.model || modelStore.selectedChatModel || "gpt-4o-mini");
    const formatOptions = [
      { label: "纯文本", value: "text" },
      { label: "JSON 结构", value: "json" },
      { label: "Markdown", value: "markdown" }
    ];
    let updateConfigTimer = null;
    const updateConfig = () => {
      if (updateConfigTimer) clearTimeout(updateConfigTimer);
      updateConfigTimer = setTimeout(() => {
        updateNode(props.id, {
          systemPrompt: systemPrompt.value,
          model: model.value,
          outputFormat: outputFormat.value,
          outputContent: outputContent.value
        });
      }, 150);
    };
    const getInputFromConnections = () => {
      const textNodes = nodes.value.filter((n) => n.type === "text");
      const mentionsInputs = [];
      for (const textNode of textNodes) {
        const content = textNode.data?.content || "";
        const mentions = parseMentions(content);
        const refsToThis = mentions.filter((m) => m.nodeId === props.id);
        if (refsToThis.length > 0) {
          mentionsInputs.push({
            nodeId: textNode.id,
            content,
            order: refsToThis[0].order
          });
        }
      }
      if (mentionsInputs.length > 0) {
        mentionsInputs.sort((a, b) => a.order - b.order);
        return mentionsInputs.map((n) => n.content).join("\n\n");
      }
      const incomingEdges = edges.value.filter((e) => e.target === props.id);
      const inputs = [];
      for (const edge of incomingEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (sourceNode) {
          if (sourceNode.type === "text" && sourceNode.data?.content) {
            inputs.push(sourceNode.data.content);
          } else if (sourceNode.type === "llmConfig" && sourceNode.data?.outputContent) {
            inputs.push(sourceNode.data.outputContent);
          }
        }
      }
      return inputs.join("\n\n");
    };
    const handleGenerate = async () => {
      if (!isApiConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        return;
      }
      const input = getInputFromConnections();
      if (!input && !systemPrompt.value) {
        window.$message?.warning("请连接输入节点或设置系统提示词");
        return;
      }
      const resolveSystemPrompt = () => {
        const mentions = parseMentions(systemPrompt.value);
        let resolved = systemPrompt.value;
        for (const mention of mentions) {
          const node = nodes.value.find((n) => n.id === mention.nodeId);
          if (node?.type === "text" && node.data?.content) {
            const placeholder2 = `@[${mention.nodeId}]`;
            resolved = resolved.replace(placeholder2, node.data.content);
          }
        }
        return resolved;
      };
      const getReferencedContent = () => {
        const mentions = parseMentions(systemPrompt.value);
        const contents = [];
        for (const mention of mentions) {
          const node = nodes.value.find((n) => n.id === mention.nodeId);
          if (node?.type === "text" && node.data?.content) {
            contents.push(node.data.content);
          }
        }
        return contents;
      };
      const getUserMessage = (input2, referencedContents) => {
        if (!input2) return "";
        if (referencedContents.length === 0) {
          return input2;
        }
        let remainingInput = input2;
        for (const refContent of referencedContents) {
          remainingInput = remainingInput.replace(refContent, "");
        }
        remainingInput = remainingInput.trim();
        return remainingInput;
      };
      isGenerating.value = true;
      try {
        const resolvedSystemPrompt = resolveSystemPrompt();
        const referencedContent = getReferencedContent();
        const userMessage = getUserMessage(input, referencedContent);
        const { send } = useChat({
          systemPrompt: resolvedSystemPrompt,
          model: model.value
        });
        const result = await send(userMessage || "请根据以上信息生成内容", true);
        if (result) {
          outputContent.value = result;
          updateNode(props.id, { outputContent: result, executed: true });
          window.$message?.success("生成完成");
        }
      } catch (err) {
        updateNode(props.id, { error: err.message || "生成失败" });
        window.$message?.error(err.message || "生成失败");
      } finally {
        isGenerating.value = false;
      }
    };
    watch(
      () => props.data?.autoExecute,
      (shouldExecute) => {
        if (shouldExecute && !isGenerating.value) {
          updateNode(props.id, { autoExecute: false });
          setTimeout(() => handleGenerate(), 100);
        }
      }
    );
    const startEditLabel = () => {
      editingLabelValue.value = nodeLabel.value;
      isEditingLabel.value = true;
      nextTick(() => {
        labelInputRef.value?.focus();
        labelInputRef.value?.select();
      });
    };
    const finishEditLabel = () => {
      const newLabel = editingLabelValue.value.trim();
      if (newLabel && newLabel !== nodeLabel.value) {
        updateNode(props.id, { label: newLabel });
      }
      isEditingLabel.value = false;
    };
    const cancelEditLabel = () => {
      isEditingLabel.value = false;
    };
    const handleDelete = () => {
      removeNode(props.id);
    };
    const handleDuplicate = () => {
      const newNodeId = duplicateNode(props.id);
      window.$message?.success("节点已复制");
      if (newNodeId) {
        setTimeout(() => {
          updateNodeInternals(newNodeId);
        }, 50);
      }
    };
    const handleCopyOutput = async () => {
      if (!outputContent.value) return;
      try {
        await navigator.clipboard.writeText(outputContent.value);
        window.$message?.success("已复制到剪贴板");
      } catch (err) {
        window.$message?.error("复制失败");
      }
    };
    const parseParagraphs = (text) => {
      const lines = text.split("\n");
      const paragraphs = [];
      let current = "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed === "") {
          if (current.trim()) {
            paragraphs.push(current.trim());
            current = "";
          }
        } else {
          current += (current ? "\n" : "") + line;
        }
      }
      if (current.trim()) {
        paragraphs.push(current.trim());
      }
      return paragraphs;
    };
    const handleSplitToTextWithImage = () => {
      if (!outputContent.value) return;
      const segments = parseParagraphs(outputContent.value);
      if (segments.length === 0) {
        window.$message?.warning("内容为空，无法拆分");
        return;
      }
      isSplitting.value = true;
      splitMessage.value = "";
      try {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const baseX = (currentNode?.position?.x || 0) + 450;
        const baseY = currentNode?.position?.y || 0;
        const rowSpacing = 200;
        const colSpacing = 350;
        startBatchOperation();
        const nodeSpecs = [];
        const edgeSpecs = [];
        for (let i = 0; i < segments.length; i++) {
          const content = segments[i];
          const segY = baseY + i * rowSpacing;
          const textSpec = {
            type: "text",
            position: { x: baseX, y: segY },
            data: {
              content,
              label: `片段 ${i + 1}`
            }
          };
          nodeSpecs.push(textSpec);
          const imageConfigSpec = {
            type: "imageConfig",
            position: { x: baseX + colSpacing, y: segY },
            data: {
              label: `图片 ${i + 1}`,
              model: "doubao-seedream-4-5-251128",
              size: "2048x2048"
            }
          };
          nodeSpecs.push(imageConfigSpec);
        }
        const createdIds = addNodes(nodeSpecs, false);
        for (let i = 0; i < segments.length; i++) {
          const textId = createdIds[i * 2];
          const imageConfigId = createdIds[i * 2 + 1];
          edgeSpecs.push({
            source: props.id,
            target: textId,
            sourceHandle: "right",
            targetHandle: "left"
          });
          edgeSpecs.push({
            source: textId,
            target: imageConfigId,
            type: "promptOrder",
            data: { promptOrder: 1 },
            sourceHandle: "right",
            targetHandle: "left"
          });
        }
        addEdges(edgeSpecs, false);
        endBatchOperation();
        splitMessage.value = `已拆分 ${segments.length} 个图文节点`;
        window.$message?.success(`已拆分为 ${segments.length} 个图文节点`);
      } catch (err) {
        window.$message?.error(`拆分失败: ${err.message}`);
      } finally {
        isSplitting.value = false;
      }
    };
    const handleSplitToTextOnly = () => {
      if (!outputContent.value) return;
      const segments = parseParagraphs(outputContent.value);
      if (segments.length <= 1) {
        window.$message?.warning("内容无法拆分（只有一段或内容为空）");
        return;
      }
      doSplitToTextNodes(segments);
    };
    const doSplitToTextNodes = (segments) => {
      isSplitting.value = true;
      splitMessage.value = "";
      try {
        const currentNode = nodes.value.find((n) => n.id === props.id);
        const baseX = (currentNode?.position?.x || 0) + 450;
        const baseY = currentNode?.position?.y || 0;
        const rowSpacing = 180;
        startBatchOperation();
        const nodeSpecs = segments.map((content, index) => ({
          type: "text",
          position: { x: baseX, y: baseY + index * rowSpacing },
          data: {
            content,
            label: `拆分片段 ${index + 1}`
          }
        }));
        const createdIds = addNodes(nodeSpecs, false);
        const edgeSpecs = createdIds.map((nodeId2) => ({
          source: props.id,
          target: nodeId2,
          sourceHandle: "right",
          targetHandle: "left"
        }));
        addEdges(edgeSpecs, false);
        endBatchOperation();
        splitMessage.value = `已拆分为 ${segments.length} 个文本节点`;
        window.$message?.success(`已拆分为 ${segments.length} 个文本节点`);
      } catch (err) {
        window.$message?.error(`拆分失败: ${err.message}`);
      } finally {
        isSplitting.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "llm-node-wrapper",
          onMouseenter: _cache[7] || (_cache[7] = ($event) => showHandleMenu.value = true),
          onMouseleave: _cache[8] || (_cache[8] = ($event) => showHandleMenu.value = false)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["llm-node bg-[var(--bg-secondary)] rounded-xl border min-w-[320px] max-w-[400px] relative transition-all duration-200", __props.data.selected ? "border-1 border-purple-500 shadow-lg shadow-purple-500/20" : "border border-[var(--border-color)]"])
          }, [
            createBaseVNode("div", _hoisted_1$4, [
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(unref(NIcon), {
                  size: 16,
                  class: "text-purple-500"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ChatbubbleOutline))
                  ]),
                  _: 1
                }),
                !isEditingLabel.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  onDblclick: startEditLabel,
                  class: "text-sm font-medium text-[var(--text-secondary)] cursor-text hover:bg-[var(--bg-tertiary)] px-1 rounded transition-colors",
                  title: "双击编辑名称"
                }, toDisplayString(nodeLabel.value), 33)) : withDirectives((openBlock(), createElementBlock("input", {
                  key: 1,
                  ref_key: "labelInputRef",
                  ref: labelInputRef,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingLabelValue.value = $event),
                  onBlur: finishEditLabel,
                  onKeydown: [
                    withKeys(finishEditLabel, ["enter"]),
                    withKeys(cancelEditLabel, ["escape"])
                  ],
                  class: "text-sm font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-1 rounded outline-none border border-purple-500"
                }, null, 544)), [
                  [vModelText, editingLabelValue.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("button", {
                  onClick: handleDuplicate,
                  class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                  title: "复制节点"
                }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(CopyOutline))
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("button", {
                  onClick: handleDelete,
                  class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
                  title: "删除节点"
                }, [
                  createVNode(unref(NIcon), { size: 14 }, {
                    default: withCtx(() => [
                      createVNode(unref(TrashOutline))
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                _cache[10] || (_cache[10] = createBaseVNode("label", { class: "text-xs text-[var(--text-secondary)] mb-1 block" }, "系统提示词", -1)),
                createBaseVNode("div", {
                  class: "textarea-wrapper",
                  ref_key: "textareaWrapper",
                  ref: textareaWrapper
                }, [
                  createBaseVNode("div", {
                    ref_key: "systemPromptRef",
                    ref: systemPromptRef,
                    class: "editor-content",
                    contenteditable: "true",
                    onInput: handleInput,
                    onKeydown: handleKeydown,
                    onPaste: handlePaste,
                    onBlur: handleBlur,
                    onWheel: _cache[1] || (_cache[1] = withModifiers(() => {
                    }, ["stop"])),
                    onMousedown: _cache[2] || (_cache[2] = withModifiers(() => {
                    }, ["stop"])),
                    "data-placeholder": placeholder
                  }, null, 544)
                ], 512)
              ]),
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "text-xs text-[var(--text-secondary)] mb-1 block" }, "模型", -1)),
                createVNode(unref(NSelect), {
                  value: model.value,
                  "onUpdate:value": [
                    _cache[3] || (_cache[3] = ($event) => model.value = $event),
                    updateConfig
                  ],
                  options: modelOptions.value,
                  "label-field": "label",
                  "value-field": "key",
                  size: "small"
                }, null, 8, ["value", "options"])
              ]),
              createBaseVNode("div", null, [
                _cache[12] || (_cache[12] = createBaseVNode("label", { class: "text-xs text-[var(--text-secondary)] mb-1 block" }, "输出格式", -1)),
                createVNode(unref(NSelect), {
                  value: outputFormat.value,
                  "onUpdate:value": [
                    _cache[4] || (_cache[4] = ($event) => outputFormat.value = $event),
                    updateConfig
                  ],
                  options: formatOptions,
                  size: "small"
                }, null, 8, ["value"])
              ]),
              createBaseVNode("button", {
                onClick: handleGenerate,
                disabled: isGenerating.value,
                class: "w-full px-4 py-2 text-sm rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              }, [
                isGenerating.value ? (openBlock(), createBlock(unref(NSpin), {
                  key: 0,
                  size: 14
                })) : (openBlock(), createBlock(unref(NIcon), {
                  key: 1,
                  size: 14
                }, {
                  default: withCtx(() => [
                    createVNode(unref(SparklesOutline))
                  ]),
                  _: 1
                })),
                createTextVNode(" " + toDisplayString(isGenerating.value ? "生成中..." : "执行生成"), 1)
              ], 8, _hoisted_6$1),
              outputContent.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                createBaseVNode("div", _hoisted_8$1, [
                  _cache[14] || (_cache[14] = createBaseVNode("label", { class: "text-xs text-[var(--text-secondary)]" }, "生成结果", -1)),
                  createBaseVNode("button", {
                    onClick: handleCopyOutput,
                    class: "text-xs text-[var(--text-secondary)] hover:text-purple-500 flex items-center gap-1 transition-colors"
                  }, [
                    createVNode(unref(NIcon), { size: 12 }, {
                      default: withCtx(() => [
                        createVNode(unref(CopyOutline))
                      ]),
                      _: 1
                    }),
                    _cache[13] || (_cache[13] = createTextVNode(" 复制 ", -1))
                  ])
                ]),
                createBaseVNode("div", {
                  onWheel: _cache[5] || (_cache[5] = withModifiers(() => {
                  }, ["stop"])),
                  onMousedown: _cache[6] || (_cache[6] = withModifiers(() => {
                  }, ["stop"])),
                  class: "bg-[var(--bg-tertiary)] rounded-lg p-2 text-xs text-[var(--text-primary)] max-h-[150px] overflow-y-auto border border-[var(--border-color)]"
                }, [
                  createBaseVNode("pre", _hoisted_9$1, toDisplayString(outputContent.value), 1)
                ], 32),
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("button", {
                    onClick: handleSplitToTextWithImage,
                    disabled: isSplitting.value,
                    class: "flex-1 px-3 py-1.5 text-xs rounded-lg border border-purple-400 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors disabled:opacity-50 flex items-center justify-center gap-1"
                  }, [
                    isSplitting.value ? (openBlock(), createBlock(unref(NSpin), {
                      key: 0,
                      size: 12
                    })) : (openBlock(), createBlock(unref(NIcon), {
                      key: 1,
                      size: 12
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ImageOutline))
                      ]),
                      _: 1
                    })),
                    createTextVNode(" " + toDisplayString(isSplitting.value ? "拆分中..." : "拆分图文"), 1)
                  ], 8, _hoisted_11$1),
                  createBaseVNode("button", {
                    onClick: handleSplitToTextOnly,
                    disabled: isSplitting.value,
                    class: "flex-1 px-3 py-1.5 text-xs rounded-lg border border-purple-400 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors disabled:opacity-50 flex items-center justify-center gap-1"
                  }, [
                    isSplitting.value ? (openBlock(), createBlock(unref(NSpin), {
                      key: 0,
                      size: 12
                    })) : (openBlock(), createBlock(unref(NIcon), {
                      key: 1,
                      size: 12
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ListOutline))
                      ]),
                      _: 1
                    })),
                    createTextVNode(" " + toDisplayString(isSplitting.value ? "拆分中..." : "拆分文本"), 1)
                  ], 8, _hoisted_12$1)
                ]),
                splitMessage.value ? (openBlock(), createElementBlock("div", _hoisted_13$1, toDisplayString(splitMessage.value), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ]),
            createVNode(unref(_sfc_main$f$1), {
              type: "target",
              position: unref(Position).Left,
              id: "left",
              class: "!bg-purple-500"
            }, null, 8, ["position"]),
            createVNode(NodeHandleMenu, {
              nodeId: __props.id,
              nodeType: "llmConfig",
              dotColor: "#a855f7",
              visible: showHandleMenu.value,
              operations,
              onSelect: handleSelect
            }, null, 8, ["nodeId", "visible"])
          ], 2)
        ], 32),
        createVNode(MentionsPicker, {
          visible: showMentionsPicker.value,
          "onUpdate:visible": _cache[9] || (_cache[9] = ($event) => showMentionsPicker.value = $event),
          position: mentionsPosition.value,
          context: "llmConfig",
          showSearch: false,
          connectedNodeIds: hasConnectedNodes.value ? connectedTextNodeIds.value : [],
          onSelect: handleMentionSelect
        }, null, 8, ["visible", "position", "connectedNodeIds"])
      ], 64);
    };
  }
};
const LLMConfigNode = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-21c9451f"]]);
const _hoisted_1$3 = { class: "flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow transition-shadow" };
const _sfc_main$3 = {
  __name: "ImageRoleEdge",
  props: {
    id: String,
    source: String,
    target: String,
    sourceX: Number,
    sourceY: Number,
    targetX: Number,
    targetY: Number,
    sourcePosition: String,
    targetPosition: String,
    data: Object,
    markerEnd: String,
    style: Object
  },
  setup(__props) {
    const { updateEdgeData } = useVueFlow();
    const props = __props;
    const imageRoleOptions = [
      { label: "首帧", key: "first_frame_image" },
      { label: "尾帧", key: "last_frame_image" },
      { label: "参考图", key: "input_reference" }
    ];
    const currentRole = computed(() => props.data?.imageRole || "first_frame_image");
    const currentRoleLabel = computed(() => {
      const option = imageRoleOptions.find((o) => o.key === currentRole.value);
      return option?.label || "首帧";
    });
    const path = computed(() => {
      const [edgePath] = getBezierPath({
        sourceX: props.sourceX,
        sourceY: props.sourceY,
        targetX: props.targetX,
        targetY: props.targetY,
        sourcePosition: props.sourcePosition,
        targetPosition: props.targetPosition
      });
      return edgePath;
    });
    const labelX = computed(() => (props.sourceX + props.targetX) / 2);
    const labelY = computed(() => (props.sourceY + props.targetY) / 2);
    const edgeStyle = computed(() => ({
      stroke: "#6366f1",
      strokeWidth: 2,
      ...props.style
    }));
    const handleRoleSelect = (role) => {
      if (role === "first_frame_image" || role === "last_frame_image") {
        const sameTargetEdges = edges.value.filter(
          (edge) => edge.target === props.target && edge.id !== props.id && edge.data?.imageRole === role
        );
        sameTargetEdges.forEach((edge) => {
          const oppositeRole = role === "first_frame_image" ? "last_frame_image" : "first_frame_image";
          updateEdgeData(edge.id, { imageRole: oppositeRole });
        });
      }
      updateEdgeData(props.id, { imageRole: role });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$d$1), {
          path: path.value,
          style: normalizeStyle(edgeStyle.value)
        }, null, 8, ["path", "style"]),
        createVNode(unref(_sfc_main$3$1), null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              style: normalizeStyle({
                position: "absolute",
                transform: `translate(-50%, -50%) translate(${labelX.value}px, ${labelY.value}px)`,
                pointerEvents: "all"
              }),
              class: "nodrag nopan"
            }, [
              createVNode(unref(NDropdown), {
                options: imageRoleOptions,
                onSelect: handleRoleSelect,
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_1$3, [
                    createTextVNode(toDisplayString(currentRoleLabel.value) + " ", 1),
                    createVNode(unref(NIcon), { size: 10 }, {
                      default: withCtx(() => [
                        createVNode(unref(ChevronDownOutline))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ], 4)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const _hoisted_1$2 = { class: "flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-[var(--accent-color)] text-white border-2 border-white shadow-md hover:scale-110 transition-transform" };
const _sfc_main$2 = {
  __name: "PromptOrderEdge",
  props: {
    id: String,
    source: String,
    target: String,
    sourceX: Number,
    sourceY: Number,
    targetX: Number,
    targetY: Number,
    sourcePosition: String,
    targetPosition: String,
    data: Object,
    markerEnd: String,
    style: Object
  },
  setup(__props) {
    const { updateEdgeData } = useVueFlow();
    const props = __props;
    const orderLabels = [
      { label: "① 第一个", key: 1 },
      { label: "② 第二个", key: 2 },
      { label: "③ 第三个", key: 3 },
      { label: "④ 第四个", key: 4 },
      { label: "⑤ 第五个", key: 5 }
    ];
    const orderOptions = computed(() => {
      const sameTargetTextEdges = edges.value.filter(
        (edge) => edge.target === props.target && edge.type === "promptOrder"
      );
      const count = sameTargetTextEdges.length || 1;
      return orderLabels.slice(0, count);
    });
    const currentOrder = computed(() => props.data?.promptOrder || 1);
    const path = computed(() => {
      const [edgePath] = getBezierPath({
        sourceX: props.sourceX,
        sourceY: props.sourceY,
        targetX: props.targetX,
        targetY: props.targetY,
        sourcePosition: props.sourcePosition,
        targetPosition: props.targetPosition
      });
      return edgePath;
    });
    const labelX = computed(() => (props.sourceX + props.targetX) / 2);
    const labelY = computed(() => (props.sourceY + props.targetY) / 2);
    const edgeStyle = computed(() => ({
      stroke: "#10b981",
      strokeWidth: 2,
      ...props.style
    }));
    const handleOrderSelect = (newOrder) => {
      const sameTargetTextEdges = edges.value.filter(
        (edge) => edge.target === props.target && edge.type === "promptOrder"
      );
      const edgeWithSameOrder = sameTargetTextEdges.find(
        (edge) => edge.id !== props.id && edge.data?.promptOrder === newOrder
      );
      if (edgeWithSameOrder) {
        updateEdgeData(edgeWithSameOrder.id, { promptOrder: currentOrder.value });
      }
      updateEdgeData(props.id, { promptOrder: newOrder });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$d$1), {
          path: path.value,
          style: normalizeStyle(edgeStyle.value)
        }, null, 8, ["path", "style"]),
        createVNode(unref(_sfc_main$3$1), null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              style: normalizeStyle({
                position: "absolute",
                transform: `translate(-50%, -50%) translate(${labelX.value}px, ${labelY.value}px)`,
                pointerEvents: "all"
              }),
              class: "nodrag nopan"
            }, [
              createVNode(unref(NDropdown), {
                options: orderOptions.value,
                onSelect: handleOrderSelect,
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_1$2, toDisplayString(currentOrder.value), 1)
                ]),
                _: 1
              }, 8, ["options"])
            ], 4)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const _hoisted_1$1 = { class: "flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-blue-500 text-white border-2 border-white shadow-md hover:scale-110 transition-transform" };
const _sfc_main$1 = {
  __name: "ImageOrderEdge",
  props: {
    id: String,
    source: String,
    target: String,
    sourceX: Number,
    sourceY: Number,
    targetX: Number,
    targetY: Number,
    sourcePosition: String,
    targetPosition: String,
    data: Object,
    markerEnd: String,
    style: Object
  },
  setup(__props) {
    const { updateEdgeData } = useVueFlow();
    const props = __props;
    const orderLabels = [
      { label: "① 第一张", key: 1 },
      { label: "② 第二张", key: 2 },
      { label: "③ 第三张", key: 3 },
      { label: "④ 第四张", key: 4 },
      { label: "⑤ 第五张", key: 5 }
    ];
    const orderOptions = computed(() => {
      const sameTargetImageEdges = edges.value.filter(
        (edge) => edge.target === props.target && edge.type === "imageOrder"
      );
      const edgeCount = sameTargetImageEdges.length || 1;
      let mentionedImageCount = 0;
      const connectedTextEdges = edges.value.filter((e) => e.target === props.target);
      for (const edge of connectedTextEdges) {
        const sourceNode = nodes.value.find((n) => n.id === edge.source);
        if (sourceNode?.type === "text") {
          const content = sourceNode.data?.content || "";
          const mentionRegex = /@\[([^\]|]+)(?:\|([^\]]+))?\]/g;
          let match;
          while ((match = mentionRegex.exec(content)) !== null) {
            const mentionedNode = nodes.value.find((n) => n.id === match[1]);
            if (mentionedNode?.type === "image") {
              mentionedImageCount++;
            }
          }
        }
      }
      const minOrder = mentionedImageCount + 1;
      const totalCount = edgeCount + mentionedImageCount;
      const maxOrder = Math.min(totalCount, 5);
      return orderLabels.filter((label) => label.key >= minOrder && label.key <= maxOrder);
    });
    const currentOrder = computed(() => props.data?.imageOrder || 1);
    const path = computed(() => {
      const [edgePath] = getBezierPath({
        sourceX: props.sourceX,
        sourceY: props.sourceY,
        targetX: props.targetX,
        targetY: props.targetY,
        sourcePosition: props.sourcePosition,
        targetPosition: props.targetPosition
      });
      return edgePath;
    });
    const labelX = computed(() => (props.sourceX + props.targetX) / 2);
    const labelY = computed(() => (props.sourceY + props.targetY) / 2);
    const edgeStyle = computed(() => ({
      stroke: "#3b82f6",
      strokeWidth: 2,
      ...props.style
    }));
    const handleOrderSelect = (newOrder) => {
      const sameTargetImageEdges = edges.value.filter(
        (edge) => edge.target === props.target && edge.type === "imageOrder"
      );
      const edgeWithSameOrder = sameTargetImageEdges.find(
        (edge) => edge.id !== props.id && edge.data?.imageOrder === newOrder
      );
      if (edgeWithSameOrder) {
        updateEdgeData(edgeWithSameOrder.id, { imageOrder: currentOrder.value });
      }
      updateEdgeData(props.id, { imageOrder: newOrder });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$d$1), {
          path: path.value,
          style: normalizeStyle(edgeStyle.value)
        }, null, 8, ["path", "style"]),
        createVNode(unref(_sfc_main$3$1), null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              style: normalizeStyle({
                position: "absolute",
                transform: `translate(-50%, -50%) translate(${labelX.value}px, ${labelY.value}px)`,
                pointerEvents: "all"
              }),
              class: "nodrag nopan"
            }, [
              createVNode(unref(NDropdown), {
                options: orderOptions.value,
                onSelect: handleOrderSelect,
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("button", _hoisted_1$1, toDisplayString(currentOrder.value), 1)
                ]),
                _: 1
              }, 8, ["options"])
            ], 4)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "h-screen w-screen flex flex-col bg-[var(--bg-primary)]" };
const _hoisted_2 = { class: "flex items-center gap-1 hover:bg-[var(--bg-tertiary)] px-2 py-1 rounded-lg transition-colors" };
const _hoisted_3 = { class: "font-medium" };
const _hoisted_4 = { class: "flex-1 relative overflow-hidden" };
const _hoisted_5 = { class: "absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 p-2 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] shadow-lg z-10" };
const _hoisted_6 = ["onClick", "disabled", "title"];
const _hoisted_7 = {
  key: 0,
  class: "absolute left-20 top-1/2 -translate-y-1/2 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] shadow-lg p-2 z-20"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "text-sm" };
const _hoisted_10 = { class: "absolute bottom-4 left-4 flex items-center gap-2 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] p-1" };
const _hoisted_11 = { class: "flex items-center gap-1 px-2" };
const _hoisted_12 = { class: "text-xs min-w-[40px] text-center" };
const _hoisted_13 = { class: "absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-20" };
const _hoisted_14 = {
  key: 0,
  class: "mb-3 p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--accent-color)] animate-pulse"
};
const _hoisted_15 = { class: "flex items-center gap-2 text-sm text-[var(--accent-color)] mb-2" };
const _hoisted_16 = {
  key: 0,
  class: "text-sm text-[var(--text-primary)] whitespace-pre-wrap"
};
const _hoisted_17 = { class: "bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)] p-3" };
const _hoisted_18 = ["disabled", "onKeydown"];
const _hoisted_19 = { class: "flex items-center justify-between mt-2" };
const _hoisted_20 = { class: "flex items-center gap-2" };
const _hoisted_21 = ["disabled"];
const _hoisted_22 = { class: "flex items-center gap-3" };
const _hoisted_23 = { class: "flex items-center gap-2 text-sm text-[var(--text-secondary)]" };
const _hoisted_24 = ["disabled"];
const _hoisted_25 = { class: "flex flex-wrap items-center justify-center gap-2 mt-2" };
const _hoisted_26 = ["onClick"];
const inputPlaceholder = '你可以试着说"帮我生成一个二次元的卡通角色"';
const _sfc_main = {
  __name: "Canvas",
  setup(__props) {
    const modelStore = useModelStore();
    const isApiConfigured = computed(() => !!modelStore.currentApiKey);
    onMounted(() => {
      loadAllModels();
    });
    const CHAT_TEMPLATES = {
      imagePrompt: {
        systemPrompt: "你是一个专业的AI绘画提示词专家。将用户输入的内容美化成高质量的生图提示词，包含风格、光线、構图、细节等要素。直接返回提示词，不要其他解释。",
        model: "gpt-4o-mini"
      }
    };
    const {
      loading: chatLoading,
      status: chatStatus,
      currentResponse,
      send: sendChat
    } = useChat({
      systemPrompt: CHAT_TEMPLATES.imagePrompt.systemPrompt,
      model: CHAT_TEMPLATES.imagePrompt.model
    });
    const {
      analyzeIntent,
      executeWorkflow,
      createTextToImageWorkflow,
      WORKFLOW_TYPES: WORKFLOW_TYPES2
    } = useWorkflowOrchestrator();
    const router = useRouter();
    const route = useRoute();
    const { viewport, zoomIn, zoomOut, fitView, updateNodeInternals } = useVueFlow();
    const nodeTypes = {
      text: markRaw(TextNode),
      imageConfig: markRaw(ImageConfigNode),
      video: markRaw(VideoNode),
      image: markRaw(ImageNode),
      videoConfig: markRaw(VideoConfigNode),
      llmConfig: markRaw(LLMConfigNode)
    };
    const edgeTypes = {
      imageRole: markRaw(_sfc_main$3),
      promptOrder: markRaw(_sfc_main$2),
      imageOrder: markRaw(_sfc_main$1)
    };
    const showNodeMenu = ref(false);
    const chatInput = ref("");
    const autoExecute = ref(false);
    const isMobile = ref(false);
    const showGrid = ref(true);
    const showApiSettings = ref(false);
    const isProcessing = ref(false);
    const flowKey = ref(Date.now());
    const showRenameModal = ref(false);
    const showDeleteModal = ref(false);
    const showDownloadModal = ref(false);
    const showWorkflowPanel = ref(false);
    const renameValue = ref("");
    const hasDownloadableAssets = computed(() => {
      return nodes.value.some((n) => (n.type === "image" || n.type === "video") && n.data?.url);
    });
    const projectName = computed(() => {
      const project = projects.value.find((p) => p.id === route.params.id);
      return project?.name || "未命名项目";
    });
    const projectOptions = [
      { label: "重命名", key: "rename" },
      { label: "复制", key: "duplicate" },
      { label: "删除", key: "delete" }
    ];
    const tools = [
      { id: "text", name: "文本", icon: TextOutline, action: () => addNewNode("text") },
      { id: "image", name: "图片", icon: ImageOutline, action: () => addNewNode("image") },
      {
        id: "imageConfig",
        name: "文生图",
        icon: ColorPaletteOutline,
        action: () => addNewNode("imageConfig")
      },
      {
        id: "videoConfig",
        name: "视频生成",
        icon: VideocamOutline,
        action: () => addNewNode("videoConfig")
      },
      {
        id: "undo",
        name: "撤销",
        icon: ArrowUndoOutline,
        action: () => undo(),
        disabled: () => !canUndo()
      },
      {
        id: "redo",
        name: "重做",
        icon: ArrowRedoOutline,
        action: () => redo(),
        disabled: () => !canRedo()
      }
    ];
    const nodeTypeOptions = [
      { type: "text", name: "文本节点", icon: TextOutline, color: "#3b82f6" },
      { type: "llmConfig", name: "LLM文本生成", icon: ChatbubbleOutline, color: "#a855f7" },
      { type: "imageConfig", name: "文生图配置", icon: ColorPaletteOutline, color: "#22c55e" },
      { type: "videoConfig", name: "视频生成配置", icon: VideocamOutline, color: "#f59e0b" },
      { type: "image", name: "图片节点", icon: ImageOutline, color: "#8b5cf6" },
      { type: "video", name: "视频节点", icon: VideocamOutline, color: "#ef4444" }
    ];
    const suggestions = ref(getRandomSuggestion());
    const handleRefreshSuggestion = () => {
      suggestions.value = getRandomSuggestion();
    };
    const addNewNode = async (type) => {
      const viewportCenterX = -viewport.value.x / viewport.value.zoom + window.innerWidth / 2 / viewport.value.zoom;
      const viewportCenterY = -viewport.value.y / viewport.value.zoom + window.innerHeight / 2 / viewport.value.zoom;
      const nodeId2 = addNode(type, { x: viewportCenterX - 100, y: viewportCenterY - 100 });
      const maxZIndex = Math.max(0, ...nodes.value.map((n) => n.zIndex || 0));
      updateNode(nodeId2, { zIndex: maxZIndex + 1 });
      setTimeout(() => {
        updateNodeInternals(nodeId2);
      }, 50);
      showNodeMenu.value = false;
    };
    const handleAddWorkflow = ({ workflow, options }) => {
      const viewportCenterX = -viewport.value.x / viewport.value.zoom + window.innerWidth / 2 / viewport.value.zoom;
      const viewportCenterY = -viewport.value.y / viewport.value.zoom + window.innerHeight / 2 / viewport.value.zoom;
      const startPosition = { x: viewportCenterX - 300, y: viewportCenterY - 200 };
      const { nodes: newNodes, edges: newEdges } = workflow.createNodes(startPosition, options);
      startBatchOperation();
      const nodeSpecs = newNodes.map((node) => ({
        type: node.type,
        position: node.position,
        data: node.data
      }));
      const nodeIds = addNodes(nodeSpecs, false);
      const idMap = {};
      newNodes.forEach((node, index) => {
        idMap[node.id] = nodeIds[index];
      });
      const edgeSpecs = newEdges.map((edge) => ({
        source: idMap[edge.source] || edge.source,
        target: idMap[edge.target] || edge.target,
        sourceHandle: edge.sourceHandle || "right",
        targetHandle: edge.targetHandle || "left",
        type: edge.type,
        data: edge.data
      }));
      addEdges(edgeSpecs, false);
      endBatchOperation();
      setTimeout(() => {
        nodeIds.forEach((nodeId2) => {
          updateNodeInternals(nodeId2);
        });
      }, 100);
      window.$message?.success(`已添加工作流: ${workflow.name}`);
    };
    const onConnect = (params) => {
      const sourceNode = nodes.value.find((n) => n.id === params.source);
      const targetNode = nodes.value.find((n) => n.id === params.target);
      if (sourceNode?.type === "image" && targetNode?.type === "videoConfig") {
        addEdge({
          ...params,
          type: "imageRole",
          data: { imageRole: "first_frame_image" }
          // Default to first frame | 默认首帧
        });
      } else if (sourceNode?.type === "text" && targetNode?.type === "imageConfig") {
        const existingTextEdges = edges.value.filter(
          (e) => e.target === params.target && e.type === "promptOrder"
        );
        const nextOrder = existingTextEdges.length + 1;
        addEdge({
          ...params,
          type: "promptOrder",
          data: { promptOrder: nextOrder }
        });
      } else if (sourceNode?.type === "image" && targetNode?.type === "imageConfig") {
        const existingImageEdges = edges.value.filter(
          (e) => e.target === params.target && e.type === "imageOrder"
        );
        let mentionedImageCount = 0;
        const connectedTextEdges = edges.value.filter((e) => e.target === params.target);
        for (const edge of connectedTextEdges) {
          const sourceNode2 = nodes.value.find((n) => n.id === edge.source);
          if (sourceNode2?.type === "text") {
            const content = sourceNode2.data?.content || "";
            const mentionRegex = /@\[([^\]|]+)(?:\|([^\]]+))?\]/g;
            let match;
            while ((match = mentionRegex.exec(content)) !== null) {
              const mentionedNode = nodes.value.find((n) => n.id === match[1]);
              if (mentionedNode?.type === "image") {
                mentionedImageCount++;
              }
            }
          }
        }
        const nextOrder = existingImageEdges.length + mentionedImageCount + 1;
        addEdge({
          ...params,
          type: "imageOrder",
          data: { imageOrder: nextOrder }
        });
      } else if (sourceNode?.type === "llmConfig" && targetNode?.type === "imageConfig") {
        const existingTextEdges = edges.value.filter(
          (e) => e.target === params.target && e.type === "promptOrder"
        );
        const nextOrder = existingTextEdges.length + 1;
        addEdge({
          ...params,
          type: "promptOrder",
          data: { promptOrder: nextOrder }
        });
      } else if (sourceNode?.type === "llmConfig" && targetNode?.type === "videoConfig") {
        addEdge({
          ...params,
          type: "promptOrder",
          data: { promptOrder: 1 }
        });
      } else {
        addEdge(params);
      }
    };
    const onNodeClick = (event) => {
    };
    const handleViewportChange = (newViewport) => {
      updateViewport(newViewport);
    };
    const onEdgesChange = (changes) => {
      const hasRemoval = changes.some((change) => change.type === "remove");
      if (hasRemoval) {
        nextTick(() => {
          manualSaveHistory();
        });
      }
    };
    const onPaneClick = () => {
      showNodeMenu.value = false;
    };
    const handleProjectAction = (key) => {
      switch (key) {
        case "rename":
          renameValue.value = projectName.value;
          showRenameModal.value = true;
          break;
        case "duplicate":
          window.$message?.info("复制功能开发中");
          break;
        case "delete":
          showDeleteModal.value = true;
          break;
      }
    };
    const confirmRename = () => {
      const projectId = route.params.id;
      if (renameValue.value.trim()) {
        renameProject(projectId, renameValue.value.trim());
        window.$message?.success("已重命名");
      }
      showRenameModal.value = false;
    };
    const confirmDelete = () => {
      route.params.id;
      showDeleteModal.value = false;
      window.$message?.success("项目已删除");
      router.push("/");
    };
    const handleEnterKey = (e) => {
      e.preventDefault();
      sendMessage();
    };
    const handlePolish = async () => {
      const input = chatInput.value.trim();
      if (!input) return;
      if (!isApiConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        showApiSettings.value = true;
        return;
      }
      isProcessing.value = true;
      const originalInput = chatInput.value;
      try {
        const result = await sendChat(input, true);
        if (result) {
          chatInput.value = result;
          window.$message?.success("提示词已润色");
        }
      } catch (err) {
        chatInput.value = originalInput;
        window.$message?.error(err.message || "润色失败");
      } finally {
        isProcessing.value = false;
      }
    };
    const sendMessage = async () => {
      const input = chatInput.value.trim();
      if (!input) return;
      if (!isApiConfigured.value) {
        window.$message?.warning("请先配置 API Key");
        showApiSettings.value = true;
        return;
      }
      isProcessing.value = true;
      const content = chatInput.value;
      chatInput.value = "";
      try {
        let maxY = 0;
        if (nodes.value.length > 0) {
          maxY = Math.max(...nodes.value.map((n) => n.position.y));
        }
        const baseX = 100;
        const baseY = maxY + 200;
        if (autoExecute.value) {
          window.$message?.info("正在分析工作流...");
          try {
            const result = await analyzeIntent(content);
            const workflowParams = {
              workflow_type: result?.workflow_type || WORKFLOW_TYPES2.TEXT_TO_IMAGE,
              image_prompt: result?.image_prompt || content,
              video_prompt: result?.video_prompt || content,
              character: result?.character,
              shots: result?.shots
            };
            window.$message?.info(`执行工作流: ${result?.description || "文生图"}`);
            await executeWorkflow(workflowParams, { x: baseX, y: baseY });
            window.$message?.success("工作流已启动");
          } catch (err) {
            console.error("Workflow error:", err);
            window.$message?.warning("使用默认文生图工作流");
            await createTextToImageWorkflow(content, { x: baseX, y: baseY });
          }
        } else {
          const textNodeId = addNode(
            "text",
            { x: baseX, y: baseY },
            {
              content,
              label: "提示词"
            }
          );
          const imageConfigNodeId = addNode(
            "imageConfig",
            { x: baseX + 400, y: baseY },
            {
              label: "文生图"
            }
          );
          addEdge({
            source: textNodeId,
            target: imageConfigNodeId,
            sourceHandle: "right",
            targetHandle: "left"
          });
        }
      } catch (err) {
        window.$message?.error(err.message || "创建失败");
      } finally {
        isProcessing.value = false;
      }
    };
    const goBack = () => {
      router.push("/");
    };
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
    };
    const loadProjectById = (projectId) => {
      flowKey.value = Date.now();
      if (projectId && projectId !== "new") {
        loadProject(projectId);
      } else {
        clearCanvas();
      }
    };
    watch(
      () => route.params.id,
      (newId2, oldId) => {
        if (newId2 && newId2 !== oldId) {
          if (oldId) {
            saveProject();
          }
          loadProjectById(newId2);
        }
      }
    );
    onMounted(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      initProjectsStore();
      loadProjectById(route.params.id);
      const initialPrompt = sessionStorage.getItem("ai-canvas-initial-prompt");
      if (initialPrompt) {
        sessionStorage.removeItem("ai-canvas-initial-prompt");
        chatInput.value = initialPrompt;
        nextTick(() => {
          sendMessage();
        });
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkMobile);
      saveProject();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$h, { class: "bg-[var(--bg-secondary)]" }, {
          left: withCtx(() => [
            createBaseVNode("button", {
              onClick: goBack,
              class: "p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors"
            }, [
              createVNode(unref(NIcon), { size: 20 }, {
                default: withCtx(() => [
                  createVNode(unref(ChevronBackOutline))
                ]),
                _: 1
              })
            ]),
            createVNode(unref(NDropdown), {
              options: projectOptions,
              onSelect: handleProjectAction
            }, {
              default: withCtx(() => [
                createBaseVNode("button", _hoisted_2, [
                  createBaseVNode("span", _hoisted_3, toDisplayString(projectName.value), 1),
                  createVNode(unref(NIcon), { size: 16 }, {
                    default: withCtx(() => [
                      createVNode(unref(ChevronDownOutline))
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          right: withCtx(() => [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => showDownloadModal.value = true),
              class: normalizeClass(["p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors", { "text-[var(--accent-color)]": hasDownloadableAssets.value }]),
              title: "批量下载素材"
            }, [
              createVNode(unref(NIcon), { size: 20 }, {
                default: withCtx(() => [
                  createVNode(unref(DownloadOutline))
                ]),
                _: 1
              })
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => showApiSettings.value = true),
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
        createBaseVNode("div", _hoisted_4, [
          (openBlock(), createBlock(unref(_sfc_main$1$2), {
            key: flowKey.value,
            nodes: unref(nodes),
            "onUpdate:nodes": _cache[2] || (_cache[2] = ($event) => isRef(nodes) ? nodes.value = $event : null),
            edges: unref(edges),
            "onUpdate:edges": _cache[3] || (_cache[3] = ($event) => isRef(edges) ? edges.value = $event : null),
            viewport: unref(viewport),
            "onUpdate:viewport": _cache[4] || (_cache[4] = ($event) => isRef(viewport) ? viewport.value = $event : null),
            "node-types": nodeTypes,
            "edge-types": edgeTypes,
            "default-viewport": unref(canvasViewport),
            "min-zoom": 0.1,
            "max-zoom": 2,
            "snap-to-grid": true,
            "snap-grid": [20, 20],
            onConnect,
            onNodeClick,
            onPaneClick,
            onViewportChange: handleViewportChange,
            onEdgesChange,
            class: "canvas-flow"
          }, {
            default: withCtx(() => [
              showGrid.value ? (openBlock(), createBlock(unref(_sfc_main$f), {
                key: 0,
                gap: 20,
                size: 1
              })) : createCommentVNode("", true),
              !isMobile.value ? (openBlock(), createBlock(unref(_sfc_main$e), {
                key: 1,
                position: "bottom-right",
                pannable: true,
                zoomable: true
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["nodes", "edges", "viewport", "default-viewport"])),
          createBaseVNode("aside", _hoisted_5, [
            createBaseVNode("button", {
              onClick: _cache[5] || (_cache[5] = ($event) => showNodeMenu.value = !showNodeMenu.value),
              class: "w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--accent-color)] text-white hover:bg-[var(--accent-hover)] transition-colors",
              title: "添加节点"
            }, [
              createVNode(unref(NIcon), { size: 20 }, {
                default: withCtx(() => [
                  createVNode(unref(AddOutline))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("button", {
              onClick: _cache[6] || (_cache[6] = ($event) => showWorkflowPanel.value = true),
              class: "w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors",
              title: "工作流模板"
            }, [
              createVNode(unref(NIcon), { size: 20 }, {
                default: withCtx(() => [
                  createVNode(unref(AppsOutline))
                ]),
                _: 1
              })
            ]),
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "w-full h-px bg-[var(--border-color)] my-1" }, null, -1)),
            (openBlock(), createElementBlock(Fragment, null, renderList(tools, (tool) => {
              return createBaseVNode("button", {
                key: tool.id,
                onClick: tool.action,
                disabled: tool.disabled && tool.disabled(),
                class: "w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
                title: tool.name
              }, [
                createVNode(unref(NIcon), { size: 20 }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(tool.icon)))
                  ]),
                  _: 2
                }, 1024)
              ], 8, _hoisted_6);
            }), 64))
          ]),
          showNodeMenu.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
            (openBlock(), createElementBlock(Fragment, null, renderList(nodeTypeOptions, (nodeType) => {
              return createBaseVNode("button", {
                key: nodeType.type,
                onClick: ($event) => addNewNode(nodeType.type),
                class: "w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-left"
              }, [
                createVNode(unref(NIcon), {
                  size: 20,
                  color: nodeType.color
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(nodeType.icon)))
                  ]),
                  _: 2
                }, 1032, ["color"]),
                createBaseVNode("span", _hoisted_9, toDisplayString(nodeType.name), 1)
              ], 8, _hoisted_8);
            }), 64))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("button", {
              onClick: _cache[7] || (_cache[7] = ($event) => unref(fitView)({ padding: 0.2 })),
              class: "p-2 hover:bg-[var(--bg-tertiary)] rounded transition-colors",
              title: "适应视图"
            }, [
              createVNode(unref(NIcon), { size: 16 }, {
                default: withCtx(() => [
                  createVNode(unref(LocateOutline))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("button", {
                onClick: _cache[8] || (_cache[8] = (...args) => unref(zoomOut) && unref(zoomOut)(...args)),
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(RemoveOutline))
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("span", _hoisted_12, toDisplayString(Math.round(unref(viewport).zoom * 100)) + "%", 1),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = (...args) => unref(zoomIn) && unref(zoomIn)(...args)),
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded transition-colors"
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(AddOutline))
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            isProcessing.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createVNode(unref(NSpin), { size: 14 }),
                _cache[21] || (_cache[21] = createBaseVNode("span", null, "正在生成提示词...", -1))
              ]),
              unref(currentResponse) ? (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(unref(currentResponse)), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_17, [
              withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => chatInput.value = $event),
                placeholder: inputPlaceholder,
                disabled: isProcessing.value,
                class: "w-full bg-transparent resize-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] min-h-[40px] max-h-[120px] disabled:opacity-50",
                rows: "1",
                onKeydown: [
                  withKeys(withModifiers(handleEnterKey, ["exact"]), ["enter"]),
                  withKeys(withModifiers(sendMessage, ["ctrl"]), ["enter"])
                ]
              }, null, 40, _hoisted_18), [
                [vModelText, chatInput.value]
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("button", {
                    onClick: handlePolish,
                    disabled: isProcessing.value || !chatInput.value.trim(),
                    class: "px-3 py-1.5 text-xs rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    title: "AI 润色提示词"
                  }, " ✨ AI 润色 ", 8, _hoisted_21)
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("label", _hoisted_23, [
                    createVNode(unref(NSwitch), {
                      value: autoExecute.value,
                      "onUpdate:value": _cache[11] || (_cache[11] = ($event) => autoExecute.value = $event),
                      size: "small"
                    }, null, 8, ["value"]),
                    _cache[22] || (_cache[22] = createTextVNode(" 自动执行 ", -1))
                  ]),
                  createBaseVNode("button", {
                    onClick: sendMessage,
                    disabled: isProcessing.value,
                    class: "w-8 h-8 rounded-xl bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  }, [
                    isProcessing.value ? (openBlock(), createBlock(unref(NSpin), {
                      key: 0,
                      size: 16
                    })) : (openBlock(), createBlock(unref(NIcon), {
                      key: 1,
                      size: 20,
                      color: "white"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(SendOutline))
                      ]),
                      _: 1
                    }))
                  ], 8, _hoisted_24)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-xs text-[var(--text-secondary)]" }, "推荐：", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(suggestions.value, (tag) => {
                return openBlock(), createElementBlock("button", {
                  key: tag,
                  onClick: ($event) => chatInput.value = tag,
                  class: "px-2 py-0.5 text-xs rounded-full bg-[var(--bg-secondary)]/80 border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors"
                }, toDisplayString(tag), 9, _hoisted_26);
              }), 128)),
              createBaseVNode("button", {
                class: "p-1 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors",
                onClick: handleRefreshSuggestion
              }, [
                createVNode(unref(NIcon), { size: 14 }, {
                  default: withCtx(() => [
                    createVNode(unref(RefreshOutline))
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        createVNode(ApiSettings, {
          show: showApiSettings.value,
          "onUpdate:show": _cache[12] || (_cache[12] = ($event) => showApiSettings.value = $event)
        }, null, 8, ["show"]),
        createVNode(unref(NModal), {
          show: showRenameModal.value,
          "onUpdate:show": _cache[15] || (_cache[15] = ($event) => showRenameModal.value = $event),
          preset: "dialog",
          title: "重命名项目"
        }, {
          action: withCtx(() => [
            createVNode(unref(Button), {
              onClick: _cache[14] || (_cache[14] = ($event) => showRenameModal.value = false)
            }, {
              default: withCtx(() => [..._cache[24] || (_cache[24] = [
                createTextVNode("取消", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "primary",
              onClick: confirmRename
            }, {
              default: withCtx(() => [..._cache[25] || (_cache[25] = [
                createTextVNode("确定", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(unref(NInput), {
              value: renameValue.value,
              "onUpdate:value": _cache[13] || (_cache[13] = ($event) => renameValue.value = $event),
              placeholder: "请输入项目名称"
            }, null, 8, ["value"])
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(unref(NModal), {
          show: showDeleteModal.value,
          "onUpdate:show": _cache[17] || (_cache[17] = ($event) => showDeleteModal.value = $event),
          preset: "dialog",
          title: "删除项目",
          type: "warning"
        }, {
          action: withCtx(() => [
            createVNode(unref(Button), {
              onClick: _cache[16] || (_cache[16] = ($event) => showDeleteModal.value = false)
            }, {
              default: withCtx(() => [..._cache[26] || (_cache[26] = [
                createTextVNode("取消", -1)
              ])]),
              _: 1
            }),
            createVNode(unref(Button), {
              type: "error",
              onClick: confirmDelete
            }, {
              default: withCtx(() => [..._cache[27] || (_cache[27] = [
                createTextVNode("删除", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("p", null, "确定要删除项目「" + toDisplayString(projectName.value) + "」吗？此操作不可恢复。", 1)
          ]),
          _: 1
        }, 8, ["show"]),
        createVNode(_sfc_main$d, {
          show: showDownloadModal.value,
          "onUpdate:show": _cache[18] || (_cache[18] = ($event) => showDownloadModal.value = $event)
        }, null, 8, ["show"]),
        createVNode(WorkflowPanel, {
          show: showWorkflowPanel.value,
          "onUpdate:show": _cache[19] || (_cache[19] = ($event) => showWorkflowPanel.value = $event),
          onAddWorkflow: handleAddWorkflow
        }, null, 8, ["show"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
