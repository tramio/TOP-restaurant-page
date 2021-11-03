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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/canvas */ \"./src/modules/canvas.js\");\n\n\n_modules_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/canvas.js":
/*!*******************************!*\
  !*** ./src/modules/canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.appendChild(createTitle());\n    header.appendChild(createNavbar());\n    return header;\n}\nfunction createTitle() {\n    const title = document.createElement(\"h1\");\n    title.classList.add(\"title\");\n    title.textContent = \"Café Castelli e Comete\";\n    return title;\n}\nfunction createNavbar() {\n    const navbar = document.createElement(\"nav\");\n    navbar.classList.add(\"navbar\");\n    navbar.appendChild(createNavbarTabs());\n    return navbar;\n}\nfunction createNavbarTabs() {\n    const ul = document.createElement(\"ul\");\n    const tabs = [\"Startseite\", \"Speisekarte\", \"Shop\", \"Über uns\", \"Blog\", \"Kontakt\"];\n    tabs.forEach(tab => {\n        const li = document.createElement(\"li\");\n        const link = document.createElement(\"a\");\n        link.textContent = tab;\n        link.setAttribute(\"href\", \"#\");\n        li.appendChild(link);\n        ul.appendChild(li);\n    });\n    return ul;\n}\n\nfunction create(element) {\n    return document.createElement(`${element}`);\n}\nfunction createFooter() {\n    const footer = create(\"footer\");\n    footer.appendChild(createOpeningHoursDiv());\n    footer.appendChild(createAddressDiv());\n    footer.appendChild(createContactDiv());\n    return footer;\n}\nfunction createOpeningHoursDiv() {\n    const h2 = create(\"h2\");\n    h2.textContent = \"Öffnungszeiten\";\n    const paragraph = create(\"p\");\n    paragraph.innerHTML = \"Mo bis Fr 07:30 - 18:30 Uhr<br>Sa 09:00 - 18:30 Uhr\";\n    const div = create(\"div\");\n    div.appendChild(h2);\n    div.appendChild(paragraph);\n    return div;\n}\nfunction createAddressDiv() {\n    const h2 = create(\"h2\");\n    h2.textContent = \"Adresse\";\n    const paragraph = create(\"p\");\n    paragraph.innerHTML = \"<em>Café Castelli e Comete</em><br>Guter-Kaffee Allee 136<br>20099 Hamburg\";\n    const div = create(\"div\");\n    div.appendChild(h2);\n    div.appendChild(paragraph);\n    return div;\n}\nfunction createContactDiv() {\n    const h2 = create(\"h2\");\n    h2.textContent = \"Kontakt\";\n    const paragraph = create(\"p\");\n    paragraph.textContent = \"Telefon: +49 (xxx) xxxx-xxx\";\n    const paragraph2 = create(\"p\");\n    paragraph2.textContent = \"E-Mail: hallo@castelliecomete.de\";\n    const div = create(\"div\");\n    div.appendChild(h2);\n    div.appendChild(paragraph);\n    div.appendChild(paragraph2);\n    return div;\n}\n\nconst canvas = (() => {\n    const content = document.getElementById(\"content\");\n    const _loadHeader = () => content.appendChild(createHeader());\n    const _loadFooter = () => content.appendChild(createFooter());\n    const load = () => {\n        _loadHeader();\n        _loadFooter();\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canvas);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/canvas.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;