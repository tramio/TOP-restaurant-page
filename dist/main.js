/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    font-family: 'Raleway', sans-serif;\\n    line-height: 1.4em;\\n}\\n\\nheader {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: 3em;\\n    margin: 2em 0;\\n}\\n\\n.title {\\n    width: 100%;\\n}\\n\\n#content {\\n    margin-top: 10vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: space-around;\\n    width: 80vw;\\n}\\n\\nh1 {\\n    font-size: 2.25rem;\\n}\\n\\nh2 {\\n    font-size: 1.6rem;\\n    margin-bottom: 0.4rem;\\n}\\n\\n.navbar {\\n    width: 100%;\\n}\\n.navbar a {\\n    color: inherit;\\n    text-decoration: inherit;\\n}\\n.navbar > ul {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    width:100%;\\n}\\n.navbar li {\\n    padding: 1em 0;\\n    text-align: center;\\n    display: block;\\n    transition-duration: 0.5s;\\n}\\n.navbar li:hover {\\n    cursor: pointer;\\n    color: grey;\\n}\\n\\n.banner {\\n    width: 100%;\\n    height: 450px;\\n    margin-bottom: 2em;\\n    object-fit: cover;\\n}\\n\\nmain {\\n    margin: 50px 0;\\n}\\nmain h2 {\\n    text-align: center;\\n}\\nmain p {\\n    margin-left: auto;\\n    margin-right: auto;\\n    width: 30em;\\n}\\n\\nfooter {\\n    display: flex;\\n    height: 20vh;\\n    padding-top: 2em;\\n}\\nfooter div {\\n    margin: 0 5em 0 0;\\n}\\n\\n.page {\\n    animation: fadeIn 2s;\\n}\\n@keyframes fadeIn {\\n    0% {\\n      opacity: 0.4;\\n    }\\n    50% {\\n        opacity: 0.8;\\n    }\\n    100% {\\n      opacity: 1;\\n    }\\n}\\n\\n/* ABOUT PAGE */\\n    .about {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n    .about-barista {\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: space-between;\\n        align-items: center;\\n    }\\n    .about-div-1,\\n    .about-div-2 {\\n        width: 50%\\n    }\\n\\n    .about-picture {\\n        margin: 10px;\\n        width: 100%;\\n    }\\n    .about-barista-text {\\n        background-color: grey;\\n        opacity: 0.6;\\n        height: 100%;\\n    }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/canvas */ \"./src/modules/canvas.js\");\n\n\n\n_modules_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_team_by_pixdeluxe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/team-by-pixdeluxe.jpg */ \"./src/images/team-by-pixdeluxe.jpg\");\n/* harmony import */ var _images_barista_by_bradley_pisney_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/barista-by-bradley-pisney.jpg */ \"./src/images/barista-by-bradley-pisney.jpg\");\n\n\n\nconst About = (() => {\n    const _createPicture = (className) => {\n        const picture = document.createElement(\"img\");\n        picture.classList.add(\"about-picture\", `${className}`);\n        return picture;\n    }\n    const _createTeamPicture = () => {\n        const teamPicture = _createPicture(\"team-picture\");\n        teamPicture.src = _images_team_by_pixdeluxe_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        return teamPicture;\n    }\n    const _createBaristaPicture = () => {\n        const baristaPicture = _createPicture(\"barista-picture\");\n        baristaPicture.src = _images_barista_by_bradley_pisney_jpg__WEBPACK_IMPORTED_MODULE_1__;\n        return baristaPicture;\n    }\n    const _createContainer = (className) => {\n        const container = document.createElement(\"div\");\n        container.classList.add(`${className}`);\n        return container;\n    }\n    const _createTitle = () => {\n        const h1 = document.createElement(\"h1\");\n        h1.textContent = \"Über uns\";\n        return h1;\n    };\n    const _createText = () => {\n        const paragraph = document.createElement(\"p\");\n        paragraph.textContent = \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel praesentium inventore, dolorem ducimus facere error exercitationem! A explicabo tempore saepe iure, excepturi cupiditate quisquam atque reiciendis, sunt illo consequuntur impedit.\";\n        return paragraph;\n    }\n    const _buildBaristaDiv = () => {\n        const div = _createContainer(\"about-barista\");\n        div.appendChild(_createBaristaPictureDiv());\n        div.appendChild(_createBaristaTextDiv());\n        return div;\n    }\n    const _createBaristaPictureDiv = () => {\n        const div = _createContainer(\"about-barista-picture\");\n        div.appendChild(_createBaristaPicture());\n        return div;\n    }\n    const _createBaristaTextDiv = () => {\n        const div = _createContainer(\"about-barista-text\");\n        div.appendChild(_createTitle());\n        div.appendChild(_createText());\n        return div;\n    }    \n    const _buildTeamDiv = () => {\n        const div = _createContainer(\"about-team\")\n        div.appendChild(_createTeamPicture());\n        return div;\n    }\n    const _buildAbout = () => {\n        const about = _createContainer(\"about\");\n        about.classList.add(\"page\");\n        about.appendChild(_buildBaristaDiv());\n        about.appendChild(_buildTeamDiv());\n        return about;\n    };\n    const load = () => {\n        const main = document.querySelector(\"main\");\n        main.appendChild(_buildAbout());\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/canvas.js":
/*!*******************************!*\
  !*** ./src/modules/canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\nconst Header = (() => {\n    const createTitle = () => {\n        const title = document.createElement(\"h1\");\n        title.classList.add(\"title\");\n        title.textContent = \"Café Castelli e Comete\";\n        return title;\n    }\n    const createNavbar = () => {\n        const navbar = document.createElement(\"nav\");\n        navbar.classList.add(\"navbar\");\n        navbar.appendChild(createNavbarTabs());\n        return navbar;\n    }\n    const createNavbarTabs = () => {\n        const ul = document.createElement(\"ul\");\n        const tabs = [[\"Startseite\", _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load], [\"Speisekarte\"], [\"Shop\"], [\"Über uns\", _about__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load], [\"Blog\"], [\"Kontakt\"]];\n        for (let i = 0; i < tabs.length; i++) {\n            const li = document.createElement(\"li\");\n            li.textContent = tabs[i][0];\n            li.addEventListener(\"click\", () => {\n                const main = document.querySelector(\"main\");\n                main.textContent = \"\";\n                tabs[i][1]();\n            })\n            ul.appendChild(li);\n        }\n        return ul;\n    }\n    const load = () => {\n        const header = document.createElement(\"header\");\n        header.appendChild(createTitle());\n        header.appendChild(createNavbar());\n        return header;\n    }\n    return {\n        load,\n    }\n})();\n    \nconst Main = (() => {\n    const load = () => {\n        const main = document.createElement(\"main\");\n        return main;\n    }\n    return {\n        load,\n    }\n})();\n\nconst Footer = (() => {\n    const footer = document.createElement(\"footer\");\n    const Div = (() => {\n        const createDiv = (title) => {\n            const div = document.createElement(\"div\");\n            return div;\n        }\n        const createH2 = (title) => {\n            const h2 = document.createElement(\"h2\");\n            h2.textContent = title;\n            return h2;\n        }\n        const createParagraph = (innerHTML) => {\n            const paragraph = document.createElement(\"p\");\n            paragraph.innerHTML = innerHTML;\n            return paragraph;\n        }\n        const load = (title, innerHTML) => {\n            const div = createDiv();\n            div.appendChild(createH2(title));\n            div.appendChild(createParagraph(innerHTML));\n            return div;\n        }\n        return {\n            load,\n        };\n    })();\n    const _loadDivs = () => {\n        const divs = [[\"Öffnungszeiten\", \"Mo bis Fr 07:30 - 18:30 Uhr<br>Sa 09:00 - 18:30 Uhr\"],[\"Adresse\", \"<em>Café Castelli e Comete</em><br>Guter-Kaffee Allee 136<br>20099 Hamburg\"], [\"Kontakt\", \"Telefon: +49 (xxx) xxxx-xxx<br>E-Mail: hallo@castelliecomete.de\"]]\n        for (let i = 0; i < divs.length; i++) {\n            footer.appendChild(Div.load(divs[i][0], divs[i][1]));\n        }\n    }\n    const load = () => {\n        _loadDivs();\n        return footer;\n    }\n    return {\n        load,\n    }\n})();\n\nconst Canvas = (() => {\n    const content = document.getElementById(\"content\");\n    const _loadHeader = () => content.appendChild(Header.load());\n    const _loadMain = () => content.appendChild(Main.load());\n    const _loadFooter = () => content.appendChild(Footer.load());\n    const load = () => {\n        _loadHeader();\n        _loadMain();\n        _loadFooter();\n        _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/canvas.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_banner_by_charisse_kenion_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/banner-by-charisse-kenion.jpg */ \"./src/images/banner-by-charisse-kenion.jpg\");\n\n\nconst Homepage = (()=> {\n    const createBanner = () => {\n        const banner = document.createElement(\"img\");\n        banner.src = _images_banner_by_charisse_kenion_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        banner.classList.add(\"banner\");\n        return banner;\n    };\n    const createMainTitle = () => {\n        const mainTitle = document.createElement(\"h2\");\n        mainTitle.textContent = \"Wir haben wieder geöffnet!\";\n        return mainTitle;\n    };\n    const createMainText = () => {\n        const mainText = document.createElement(\"p\");\n        mainText.innerHTML = \"☑ Kaffeespezialitäten aus der ganzen Welt <br>☑ Frische hausgemachte Kuchen (täglich!) <br>☑ Tolle Baristas... und einen Hund! 🐶\";\n        return mainText;\n    };\n    const createContainer = (className) => {\n        const container = document.createElement(\"div\");\n        container.classList.add(`${className}`);\n        return container;\n    }\n    const buildHomepage = () => {\n        const homepage = createContainer(\"homepage\");\n        homepage.classList.add(\"page\");\n        homepage.appendChild(createBanner());\n        homepage.appendChild(createMainTitle());\n        homepage.appendChild(createMainText());\n        return homepage;\n    }\n    const load = () => {\n        const main = document.querySelector(\"main\");\n        main.appendChild(buildHomepage());\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/images/banner-by-charisse-kenion.jpg":
/*!**************************************************!*\
  !*** ./src/images/banner-by-charisse-kenion.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4f949c6a4c3a0186635.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/banner-by-charisse-kenion.jpg?");

/***/ }),

/***/ "./src/images/barista-by-bradley-pisney.jpg":
/*!**************************************************!*\
  !*** ./src/images/barista-by-bradley-pisney.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f718cb435e9a1566bf7.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/barista-by-bradley-pisney.jpg?");

/***/ }),

/***/ "./src/images/team-by-pixdeluxe.jpg":
/*!******************************************!*\
  !*** ./src/images/team-by-pixdeluxe.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cf95195f6a6f2280b63.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/team-by-pixdeluxe.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;