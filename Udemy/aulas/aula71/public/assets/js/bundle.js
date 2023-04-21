/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "exportAge": () => (/* binding */ age),
/* harmony export */   "middleName": () => (/* binding */ middleName),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "pi": () => (/* binding */ pi),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var name = 'diogo';
var middleName = 'antonny';
var age = 18;
function sum(x, y) {
  return x + y;
}

// Ways to export data.


// To change the names of the variable being imported we can do: variableNameHere as newNameHere

// We can declare a variable and export it
var pi = 3.14;
function sayHi() {
  console.log('hi');
}
var Person = /*#__PURE__*/_createClass(function Person(name, lastName) {
  _classCallCheck(this, Person);
  this.name = name;
  this.lastName = lastName;
});

/*
- We can export a default data. There is only one default for each module, this default can be imported with any name.

- To export constants as default or export data along with default, do:
export { name as default, lastName, age, sum}

- We can export anonymous functions as default: import default (x, y) => x * y;
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (x, y) {
  return x * y;
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.js");
 // 'filePathHere'
// To change the names of the variable being imported we can do: variableNameHere as newNameHere
// To call the default value, we have to export without the key brackets. it’s like: import something from ‘./module1’;

console.log(_module__WEBPACK_IMPORTED_MODULE_0__.name, _module__WEBPACK_IMPORTED_MODULE_0__.middleName, _module__WEBPACK_IMPORTED_MODULE_0__.exportAge, (0,_module__WEBPACK_IMPORTED_MODULE_0__.sum)(4, 6)); //’Diogo’, ‘Antonny’, 18, 10

var p1 = new _module__WEBPACK_IMPORTED_MODULE_0__.Person('Manuel', 'Gomes');
console.log(p1);
console.log(_module__WEBPACK_IMPORTED_MODULE_0__["default"]);

/*
Getting the default arrow function and other exports:
import multiply, {name, middleName, exportAge, sum, Person, sayHi};
console.log(multiply(3, 5)
// 15
*/
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map