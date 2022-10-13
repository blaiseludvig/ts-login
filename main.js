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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ts-login/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst util_1 = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// import { animateCSS } from \"./animatecss\";\nlet input_username = document.querySelector(\"#input_username\");\ninput_username.addEventListener(\"change\", () => {\n    if ((0, util_1.isValidUsername)(input_username.value).isValid == false) {\n        alert((0, util_1.isValidUsername)(input_username.value).message);\n    }\n});\n\n\n//# sourceURL=webpack://ts-login/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isValidUsername = void 0;\nfunction isValidUsername(username) {\n    // reject if username is empty\n    if (username.length == 0)\n        return { isValid: false, message: \"Válassz egy felhasználnevet!\" };\n    // reject if username is short than 6 or longer than 30 characters\n    if (username.length < 6 || username.length > 30)\n        return { isValid: false, message: \"Válassz egy 6-30 karakter hosszú felhasználnevet!\" };\n    // reject if username is a reserved alias\n    if ((/abuse|postmaster/gi).test(username))\n        return { isValid: false, message: 'A felhasználónév nem lehet \"abuse\" vagy \"postmaster\"' };\n    // reject if username contains two consecutive dots\n    if ((/\\.\\./gi).test(username))\n        return { isValid: false, message: 'A felhasználónévben nem lehet két egymás melletti pont!' };\n    // reject if username contains non-alphanumeric characters\n    if ((/^(([a-z]|[0-9]|[\\.]))*$/gi).test(username) == false)\n        return { isValid: false, message: 'A felhasználónév csak latin betűket és számokat tartalmazhat!' };\n    // reject if username starts or ends with dot\n    if ((/(^\\.)|(\\.$)/gi).test(username))\n        return { isValid: false, message: 'A felhasználónév nem kezdődhet vagy végződhet ponttal!' };\n    return { isValid: true, message: null };\n}\nexports.isValidUsername = isValidUsername;\nconst validateEmail = (email) => {\n    let email_regex = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return email_regex.test(email);\n};\n\n\n//# sourceURL=webpack://ts-login/./src/util.js?");

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