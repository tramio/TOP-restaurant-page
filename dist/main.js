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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.js\");\n\n\nconst Header = (() => {\n    const createTitle = () => {\n        const title = document.createElement(\"h1\");\n        title.classList.add(\"title\");\n        title.textContent = \"Café Castelli e Comete\";\n        return title;\n    }\n    const createNavbar = () => {\n        const navbar = document.createElement(\"nav\");\n        navbar.classList.add(\"navbar\");\n        navbar.appendChild(createNavbarTabs());\n        return navbar;\n    }\n    const createNavbarTabs = () => {\n        const ul = document.createElement(\"ul\");\n        const tabs = [\"Startseite\", \"Speisekarte\", \"Shop\", \"Über uns\", \"Blog\", \"Kontakt\"];\n        tabs.forEach(tab => {\n            const li = document.createElement(\"li\");\n            const link = document.createElement(\"a\");\n            link.textContent = tab;\n            link.setAttribute(\"href\", \"#\");\n            li.appendChild(link);\n            ul.appendChild(li);\n        });\n        return ul;\n    }\n    const load = () => {\n        const header = document.createElement(\"header\");\n        header.appendChild(createTitle());\n        header.appendChild(createNavbar());\n        return header;\n    }\n    return {\n        load,\n    }\n})();\n    \nconst Main = (() => {\n    const load = () => {\n        const main = document.createElement(\"main\");\n        return main;\n    }\n    return {\n        load,\n    }\n})();\n\nconst Footer = (() => {\n    const footer = document.createElement(\"footer\");\n    const Div = (() => {\n        const createDiv = (title) => {\n            const div = document.createElement(\"div\");\n            return div;\n        }\n        const createH2 = (title) => {\n            const h2 = document.createElement(\"h2\");\n            h2.textContent = title;\n            return h2;\n        }\n        const createParagraph = (innerHTML) => {\n            const paragraph = document.createElement(\"p\");\n            paragraph.innerHTML = innerHTML;\n            return paragraph;\n        }\n        const load = (title, innerHTML) => {\n            const div = createDiv();\n            div.appendChild(createH2(title));\n            div.appendChild(createParagraph(innerHTML));\n            return div;\n        }\n        return {\n            load,\n        };\n    })();\n    const _loadDivs = () => {\n        const divs = [[\"Öffnungszeiten\", \"Mo bis Fr 07:30 - 18:30 Uhr<br>Sa 09:00 - 18:30 Uhr\"],[\"Adresse\", \"<em>Café Castelli e Comete</em><br>Guter-Kaffee Allee 136<br>20099 Hamburg\"], [\"Kontakt\", \"Telefon: +49 (xxx) xxxx-xxx<br>E-Mail: hallo@castelliecomete.de\"]]\n        for (let i = 0; i < divs.length; i++) {\n            footer.appendChild(Div.load(divs[i][0], divs[i][1]));\n        }\n    }\n    const load = () => {\n        _loadDivs();\n        return footer;\n    }\n    return {\n        load,\n    }\n})();\n\nconst Canvas = (() => {\n    const content = document.getElementById(\"content\");\n    const _loadHeader = () => content.appendChild(Header.load());\n    const _loadMain = () => content.appendChild(Main.load());\n    const _loadFooter = () => content.appendChild(Footer.load());\n    const load = () => {\n        _loadHeader();\n        _loadMain();\n        _loadFooter();\n        _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/canvas.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Homepage = (()=> {\n    const createBanner = () => {\n        const banner = document.createElement(\"img\");\n        banner.setAttribute(\"src\", \"../images/banner-by-charisse-kenion.jpg\");\n        banner.classList.add(\"banner\");\n        return banner;\n    };\n    const createMainTitle = () => {\n        const h2 = document.createElement(\"h2\");\n        h2.textContent = \"Wir haben wieder geöffnet!\";\n        return h2;\n    };\n    const createMainText = () => {\n        const paragraph = document.createElement(\"p\");\n        paragraph.innerHTML = \"☑ Kaffeespezialitäten aus der ganzen Welt <br>☑ Frische hausgemachte Kuchen (täglich!) <br>☑ Tolle Baristas... und einen Hund! 🐶\";\n        return paragraph;\n    };\n    const load = () => {\n        const main = document.querySelector(\"main\");\n        main.textContent = \"\";\n        main.appendChild(createBanner());\n        main.appendChild(createMainTitle());\n        main.appendChild(createMainText());\n    }\n    return {\n        load,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/homepage.js?");

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