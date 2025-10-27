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

/***/ "./assets/images/About.jpg":
/*!*********************************!*\
  !*** ./assets/images/About.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d94b11cc2a25522c5e94.jpg\";\n\n//# sourceURL=webpack://webpack-project/./assets/images/About.jpg?\n}");

/***/ }),

/***/ "./assets/images/Home.png":
/*!********************************!*\
  !*** ./assets/images/Home.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b00944abf858f9e5e540.png\";\n\n//# sourceURL=webpack://webpack-project/./assets/images/Home.png?\n}");

/***/ }),

/***/ "./assets/images/Menu.png":
/*!********************************!*\
  !*** ./assets/images/Menu.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ec71681701a7598a55aa.png\";\n\n//# sourceURL=webpack://webpack-project/./assets/images/Menu.png?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _assets_images_About_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/About.jpg */ \"./assets/images/About.jpg\");\n\nvar content = document.querySelector(\"#content\");\nvar about = function about() {\n  var aboutPage = document.createElement(\"div\");\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"About MeLed Restaurant\";\n  var paragraph = document.createElement(\"p\");\n  paragraph.textContent = \"At MeLed Restaurant, we are passionate about delivering an exceptional dining experience that combines exquisite flavors, impeccable service, and a warm ambiance. Our culinary team is dedicated to crafting innovative dishes using the freshest ingredients sourced from local farms and artisans. Whether you're joining us for a special occasion or a casual meal, we strive to create memorable moments for every guest. Come and discover the art of fine dining at MeLed Restaurant, where every detail is thoughtfully curated to delight your senses.\";\n  var image = document.createElement(\"img\");\n  image.src = _assets_images_About_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"interior view of MeLed Restaurant\";\n  aboutPage.append(image, heading, paragraph);\n  content.appendChild(aboutPage);\n};\n\n//# sourceURL=webpack://webpack-project/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Home.png */ \"./assets/images/Home.png\");\n\nvar content = document.querySelector(\"#content\");\nvar home = function home() {\n  var homePage = document.createElement(\"div\");\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"MeLed Restaurant\";\n  var paragraph = document.createElement(\"p\");\n  paragraph.textContent = \"Our restaurant celebrates seasonal, farm-fresh ingredients with bold,\\nthoughtfully composed dishes that highlight local producers. The warm,\\nmodern dining room and attentive service create an inviting atmosphere\\nideal for date nights, family gatherings, or a relaxed meal at the bar.\\nPair our creative cocktails and curated wine list with any entr\\xE9e for a\\nmemorable, flavorful experience.\";\n  var image = document.createElement(\"img\");\n  image.src = _assets_images_Home_png__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"a chef plating a dish\";\n  homePage.append(image, heading, paragraph);\n  content.appendChild(homePage);\n};\n\n//# sourceURL=webpack://webpack-project/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n//initial population of the webpage\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n//query selection\nvar nav = document.querySelector(\".nav\");\n//event delegation for the navbar\nnav.addEventListener(\"click\", function (event) {\n  if (event.target.tagName === \"BUTTON\") {\n    var pages = {\n      Home: _home__WEBPACK_IMPORTED_MODULE_1__.home,\n      Menu: _menu__WEBPACK_IMPORTED_MODULE_2__.menu,\n      About: _about__WEBPACK_IMPORTED_MODULE_0__.about\n    };\n    var selected = event.target.textContent;\n    if (pages[selected]) {\n      content.textContent = \"\";\n      pages[selected]();\n    }\n  }\n});\n\n//# sourceURL=webpack://webpack-project/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_images_Menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Menu.png */ \"./assets/images/Menu.png\");\n\nvar content = document.querySelector(\"#content\");\nvar menu = function menu() {\n  var menuPage = document.createElement(\"div\");\n  var heading = document.createElement(\"h1\");\n  heading.textContent = \"Our Menu\";\n  var paragraph = document.createElement(\"p\");\n  paragraph.textContent = \"Explore our diverse menu featuring a variety of dishes crafted with fresh, local ingredients. From appetizers to desserts, each item is designed to delight your taste buds and provide a memorable dining experience. Whether you're in the mood for a hearty entr\\xE9e or a light snack, our menu has something for everyone.\";\n  var image = document.createElement(\"img\");\n  image.src = _assets_images_Menu_png__WEBPACK_IMPORTED_MODULE_0__;\n  image.alt = \"a selection of dishes from MeLed Restaurant\";\n  menuPage.append(image, heading, paragraph);\n  content.appendChild(menuPage);\n};\n\n//# sourceURL=webpack://webpack-project/./src/menu.js?\n}");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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