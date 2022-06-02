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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawlIco\": () => (/* binding */ drawlIco),\n/* harmony export */   \"jsonClima\": () => (/* binding */ jsonClima),\n/* harmony export */   \"mayus\": () => (/* binding */ mayus),\n/* harmony export */   \"setClima\": () => (/* binding */ setClima),\n/* harmony export */   \"unixTime\": () => (/* binding */ unixTime),\n/* harmony export */   \"worldClock\": () => (/* binding */ worldClock)\n/* harmony export */ });\n/* harmony import */ var _ico_01d_2x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ico/01d@2x.png */ \"./src/ico/01d@2x.png\");\n/* harmony import */ var _ico_02d_2x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ico/02d@2x.png */ \"./src/ico/02d@2x.png\");\n/* harmony import */ var _ico_03d_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ico/03d@2x.png */ \"./src/ico/03d@2x.png\");\n/* harmony import */ var _ico_04d_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ico/04d@2x.png */ \"./src/ico/04d@2x.png\");\n/* harmony import */ var _ico_09d_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ico/09d@2x.png */ \"./src/ico/09d@2x.png\");\n/* harmony import */ var _ico_10d_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ico/10d@2x.png */ \"./src/ico/10d@2x.png\");\n/* harmony import */ var _ico_11d_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ico/11d@2x.png */ \"./src/ico/11d@2x.png\");\n/* harmony import */ var _ico_13d_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ico/13d@2x.png */ \"./src/ico/13d@2x.png\");\n/* harmony import */ var _ico_50d_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ico/50d@2x.png */ \"./src/ico/50d@2x.png\");\n/* harmony import */ var _ico_01n_2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ico/01n@2x.png */ \"./src/ico/01n@2x.png\");\n/* harmony import */ var _ico_02n_2x_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ico/02n@2x.png */ \"./src/ico/02n@2x.png\");\n/* harmony import */ var _ico_04n_2x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ico/04n@2x.png */ \"./src/ico/04n@2x.png\");\n/* harmony import */ var _ico_10n_2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ico/10n@2x.png */ \"./src/ico/10n@2x.png\");\n/* eslint-disable default-case */\n/* eslint-disable no-console */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction worldClock(x) {\n    const clock = new Date((new Date().getTime()) + (x) * 1000).toISOString();\n    return clock.slice(clock.search('T') + 1, clock.search('T') + 6);\n}\n\n\n\nfunction unixTime(unix) {\n    const fecha = new Date(unix * 1000);\n    const hora = fecha.getHours();\n    const minutes = fecha.getMinutes();\n    return (`${hora}:${minutes}`);\n}\n\n\n\nfunction mayus(text) {\n    return (\n        text[0].toUpperCase() + text.slice(1)\n    );\n}\n\n\n\nfunction drawlIco(info) {\n    const imgIco = document.querySelector('img');\n    switch (info.weather[0].icon) {\n    case '01d':\n        imgIco.src = _ico_01d_2x_png__WEBPACK_IMPORTED_MODULE_0__;\n        break;\n    case '02d':\n        imgIco.src = _ico_02d_2x_png__WEBPACK_IMPORTED_MODULE_1__;\n        break;\n    case '03d':\n        imgIco.src = _ico_03d_2x_png__WEBPACK_IMPORTED_MODULE_2__;\n        break;\n    case '04d':\n        imgIco.src = _ico_04d_2x_png__WEBPACK_IMPORTED_MODULE_3__;\n        break;\n    case '09d':\n        imgIco.src = _ico_09d_2x_png__WEBPACK_IMPORTED_MODULE_4__;\n        break;\n    case '10d':\n        imgIco.src = _ico_10d_2x_png__WEBPACK_IMPORTED_MODULE_5__;\n        break;\n    case '11d':\n        imgIco.src = _ico_11d_2x_png__WEBPACK_IMPORTED_MODULE_6__;\n        break;\n    case '13d':\n        imgIco.src = _ico_13d_2x_png__WEBPACK_IMPORTED_MODULE_7__;\n        break;\n    case '50d':\n        imgIco.src = _ico_50d_2x_png__WEBPACK_IMPORTED_MODULE_8__;\n        break;\n    case '01n':\n        imgIco.src = _ico_01n_2x_png__WEBPACK_IMPORTED_MODULE_9__;\n        break;\n    case '02n':\n        imgIco.src = _ico_02n_2x_png__WEBPACK_IMPORTED_MODULE_10__;\n        break;\n    case '03n':\n        imgIco.src = _ico_03d_2x_png__WEBPACK_IMPORTED_MODULE_2__;\n        break;\n    case '04n':\n        imgIco.src = _ico_04n_2x_png__WEBPACK_IMPORTED_MODULE_11__;\n        break;\n    case '09n':\n        imgIco.src = _ico_09d_2x_png__WEBPACK_IMPORTED_MODULE_4__;\n        break;\n    case '10n':\n        imgIco.src = _ico_10n_2x_png__WEBPACK_IMPORTED_MODULE_12__;\n        break;\n    case '11n':\n        imgIco.src = _ico_11d_2x_png__WEBPACK_IMPORTED_MODULE_6__;\n        break;\n    case '13n':\n        imgIco.src = _ico_13d_2x_png__WEBPACK_IMPORTED_MODULE_7__;\n        break;\n    case '50n':\n        imgIco.src = _ico_50d_2x_png__WEBPACK_IMPORTED_MODULE_8__;\n        break;\n    }\n}\n\n\n\nfunction setClima(info) {\n    const date = new Date();\n    const l1 = document.getElementById('l1');\n    const l2 = document.getElementById('l2');\n    const l3 = document.getElementById('l3');\n    const r1 = document.getElementById('r1');\n    const r2 = document.getElementById('r2');\n    const r3 = document.getElementById('r3');\n    const r4 = document.getElementById('r4');\n    const r5 = document.getElementById('r5');\n\n    l1.innerHTML = mayus(info.weather[0].description);\n    l2.innerHTML = `${mayus(date.toLocaleString('en', { weekday: 'long' }))}, ${date.toLocaleString('es', { day: 'numeric' })}nd ${date.toLocaleString('en', { month: 'short' })} '${date.toLocaleString('en', { year: '2-digit' })}`;\n    l3.innerHTML = worldClock(info.timezone);\n\n    r1.innerHTML = info.name;\n    r2.innerHTML = `${info.main.temp} °C`;\n    r3.innerHTML = `Temperatura min: ${info.main.temp_min} °C`;\n    r4.innerHTML = `Humedad: ${info.main.humidity}%`;\n    r5.innerHTML = `Viento: ${info.wind.speed}km/h`;\n\n    drawlIco(info);\n}\n\n\n\nasync function jsonClima(region, unit = 'metric') {\n    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&units=${unit}&appid=bf3845e91d594d20dd852be6dd9e6a9b&lang=es`, { mode: 'cors' });\n    const urlText = await url.json();\n    setClima(urlText);\n}\n\n\n\nconst mejor = 'hacemos bine haci es el amor';\nmejor.plit();\n\n\n//# sourceURL=webpack://appclimaapi/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* eslint-disable no-alert */\n/* eslint-disable no-console */\n\n\nconst form = document.querySelector('form');\n\nfunction eListener(event) {\n    event.preventDefault();\n    const barInput = document.getElementById('text').value;\n    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.jsonClima)(barInput);\n    form.reset();\n}\n\nform.addEventListener('submit', eListener);\n\n(0,_functions__WEBPACK_IMPORTED_MODULE_0__.jsonClima)('tokyo');\n\n\n//# sourceURL=webpack://appclimaapi/./src/index.js?");

/***/ }),

/***/ "./src/ico/01d@2x.png":
/*!****************************!*\
  !*** ./src/ico/01d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21d0166d556b45f9d0fb.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/01d@2x.png?");

/***/ }),

/***/ "./src/ico/01n@2x.png":
/*!****************************!*\
  !*** ./src/ico/01n@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2dea4f0c50e2c8b7319a.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/01n@2x.png?");

/***/ }),

/***/ "./src/ico/02d@2x.png":
/*!****************************!*\
  !*** ./src/ico/02d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eb74c4e0a99eebd4f9f.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/02d@2x.png?");

/***/ }),

/***/ "./src/ico/02n@2x.png":
/*!****************************!*\
  !*** ./src/ico/02n@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b2e3426e30cdc516b3d.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/02n@2x.png?");

/***/ }),

/***/ "./src/ico/03d@2x.png":
/*!****************************!*\
  !*** ./src/ico/03d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"826d0111ad3d4fb9d6ef.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/03d@2x.png?");

/***/ }),

/***/ "./src/ico/04d@2x.png":
/*!****************************!*\
  !*** ./src/ico/04d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6663ab6322a5eaec1d6.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/04d@2x.png?");

/***/ }),

/***/ "./src/ico/04n@2x.png":
/*!****************************!*\
  !*** ./src/ico/04n@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6663ab6322a5eaec1d6.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/04n@2x.png?");

/***/ }),

/***/ "./src/ico/09d@2x.png":
/*!****************************!*\
  !*** ./src/ico/09d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e78c8c56627e697f1174.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/09d@2x.png?");

/***/ }),

/***/ "./src/ico/10d@2x.png":
/*!****************************!*\
  !*** ./src/ico/10d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eaa6309e7e00f8a46060.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/10d@2x.png?");

/***/ }),

/***/ "./src/ico/10n@2x.png":
/*!****************************!*\
  !*** ./src/ico/10n@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce578ca0edbed3e8867.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/10n@2x.png?");

/***/ }),

/***/ "./src/ico/11d@2x.png":
/*!****************************!*\
  !*** ./src/ico/11d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb274bd2c737e393f248.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/11d@2x.png?");

/***/ }),

/***/ "./src/ico/13d@2x.png":
/*!****************************!*\
  !*** ./src/ico/13d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3004cf8bc60dbb89df3.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/13d@2x.png?");

/***/ }),

/***/ "./src/ico/50d@2x.png":
/*!****************************!*\
  !*** ./src/ico/50d@2x.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85ba87958a828a21ba4b.png\";\n\n//# sourceURL=webpack://appclimaapi/./src/ico/50d@2x.png?");

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