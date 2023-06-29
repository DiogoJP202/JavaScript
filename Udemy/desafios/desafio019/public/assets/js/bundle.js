/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/passwordClass.js":
/*!**************************************!*\
  !*** ./src/modules/passwordClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Password)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Password = /*#__PURE__*/function () {
  function Password() {
    var _this = this;
    _classCallCheck(this, Password);
    _defineProperty(this, "geraNumeros", function () {
      return _this.senha += String.fromCharCode(_this.random(48, 57));
    });
    _defineProperty(this, "geraLetrasMai\xFAsculas", function () {
      return _this.senha += String.fromCharCode(_this.random(65, 90));
    });
    _defineProperty(this, "geraLetrasMin\xFAsculas", function () {
      return _this.senha += String.fromCharCode(_this.random(97, 122));
    });
    this.resp = document.querySelector('.resposta');
    this.random = function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };
    this.cAlert = 0;
    this.senha = '';
  }
  _createClass(Password, [{
    key: "createAlert",
    value: function createAlert(text) {
      var main = document.querySelector('main');
      var p = document.createElement('p');
      p.classList.add('alert');
      p.innerHTML = "<strong>".concat(text, "</strong>");
      main.appendChild(p);
    }
  }, {
    key: "createPassword",
    value: function createPassword(character, number, upperCase, lowerCase, symbol) {
      this.senha = '';
      for (this.senha.length; this.senha.length <= character;) {
        number === true && this.geraNumeros();
        upperCase === true && this.geraLetrasMaiúsculas();
        lowerCase === true && this.geraLetrasMinúsculas();
        symbol === true && this.geraSimbulos();
      }
      document.querySelector('.password').innerHTML = "".concat(this.senha);
      this.resp.style.display = "block";
    }
  }, {
    key: "geraSimbulos",
    value: function geraSimbulos() {
      var simbulos = [' ', '!', '"', '#', '$', '%', '&', '`', '(', ')', '*', '+', '\'', '\'', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
      return this.senha += simbulos[this.random(0, simbulos.length)];
    }
  }, {
    key: "cleanAll",
    value: function cleanAll() {
      this.senha = '';
      this.resp.style.display = "none";
      if (pass.cAlert === 1) {
        document.querySelector('.alert').remove();
        pass.cAlert = 0;
      }
      document.querySelector('#ICaracteres').value = 0;
      document.querySelector('#IaddNumber').checked = false;
      document.querySelector('#IUpperCase').checked = false;
      document.querySelector('#ILowerCase').checked = false;
      document.querySelector('#ISymbol').checked = false;
    }
  }]);
  return Password;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";

*{
    padding: 0;
    margin: 0;
}

body{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.1em;

    background-color: #C3D2F4;
}

h1{
    padding: 10px;
    
    font-weight: bolder;
    font-size: 2em;
    text-align: center;
    text-shadow: 2px 2px 2px #fff;

    border-radius: 9px 9px 0 0;
    background-color: #e0e0e0;
}

h2{
    padding: 10px;

    font-size: 1.3em;
    color: #5286ff;
    text-align: left;
}

main{
    max-width: 800px;
    width: 80%;
    height: auto;
    
    margin: auto;
    margin-top: 30px;
    padding-bottom: 30px;

    box-shadow: 4px 4px 2px #b3b3b3;
    border-radius: 10px;
    background-color: #fff;
}

main > p {
    padding: 10px;

    text-align: justify;
    text-indent: 10px;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-size: 1em;
    font-weight: bold;
}

#ICaracteres{
    width: 100px;
}

.label{
    display: block;
    width: auto;

    margin-left: 10px;
    padding: 5px;

    color: #fff;
    text-shadow: 1px 1px 1px #000;

    border-radius: 10px;
    background-color: #C3D2F4;
}

input[type=checkbox]{
    cursor: pointer;
}

.btns{
    display: flex;    
    justify-content: space-evenly;
    width: 100%;
}

.btns > input{
    width: 100px;
    height: 30px;

    color: #fff;
    font-size: 0.8em;
    font-weight: bold;

    box-shadow: 1px 1px 2px #000;
    background-color: #C3D2F4;

    transition: 0.5s;
}

.btns > input:hover{
    color: #5286ff;

    background-color: #ececec;

    transform: scale(1.1);
}

.resposta{
    display: none;
    margin: 20px auto;
}

.password{
    display: block;
    width: 90%;

    margin: 20px auto;
    border: 2px solid #C3D2F4;
}

.resposta > h3{
    font-size: 1.5em;
    color: #5286ff;
    text-align: center;
}

.resposta > p{
    word-wrap: break-word;
    font-weight: 600;
    text-align: left;
    font-size: .9em;
}

.copy{
    display: flex;
    width: 200px;
    height: 30px;

    margin: auto;

    color: #fff;
    font-size: 0.8em;
    font-weight: bold;

    box-shadow: 1px 1px 2px #000;
    background-color: #C3D2F4;
    
    justify-content: space-around;
    align-items: center;

    transition: 0.5s;
}

.copy:hover{
    color: #5286ff;

    background-color: #ececec;

    transform: scale(1.1);
}

.alert{
    display: block;

    text-shadow: -1px 2px 2px #000;
    text-align: center;
    font-size: 1.4em;
    color: #f00;
    
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA,gBAAgB;;AAEhB;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,8CAA8C;IAC9C,gBAAgB;;IAEhB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;;IAEb,mBAAmB;IACnB,cAAc;IACd,kBAAkB;IAClB,6BAA6B;;IAE7B,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;;IAEb,gBAAgB;IAChB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,YAAY;;IAEZ,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;;IAEpB,+BAA+B;IAC/B,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;;IAEb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;IAEvB,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;;IAEX,iBAAiB;IACjB,YAAY;;IAEZ,WAAW;IACX,6BAA6B;;IAE7B,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;;IAEZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;;IAEjB,4BAA4B;IAC5B,yBAAyB;;IAEzB,gBAAgB;AACpB;;AAEA;IACI,cAAc;;IAEd,yBAAyB;;IAEzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,UAAU;;IAEV,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;;IAEZ,YAAY;;IAEZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;;IAEjB,4BAA4B;IAC5B,yBAAyB;;IAEzB,6BAA6B;IAC7B,mBAAmB;;IAEnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;;IAEd,yBAAyB;;IAEzB,qBAAqB;AACzB;;AAEA;IACI,cAAc;;IAEd,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;;AAEf","sourcesContent":["@charset \"UTF-8\";\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 1.1em;\r\n\r\n    background-color: #C3D2F4;\r\n}\r\n\r\nh1{\r\n    padding: 10px;\r\n    \r\n    font-weight: bolder;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    text-shadow: 2px 2px 2px #fff;\r\n\r\n    border-radius: 9px 9px 0 0;\r\n    background-color: #e0e0e0;\r\n}\r\n\r\nh2{\r\n    padding: 10px;\r\n\r\n    font-size: 1.3em;\r\n    color: #5286ff;\r\n    text-align: left;\r\n}\r\n\r\nmain{\r\n    max-width: 800px;\r\n    width: 80%;\r\n    height: auto;\r\n    \r\n    margin: auto;\r\n    margin-top: 30px;\r\n    padding-bottom: 30px;\r\n\r\n    box-shadow: 4px 4px 2px #b3b3b3;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n}\r\n\r\nmain > p {\r\n    padding: 10px;\r\n\r\n    text-align: justify;\r\n    text-indent: 10px;\r\n}\r\n\r\n.form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n}\r\n\r\n#ICaracteres{\r\n    width: 100px;\r\n}\r\n\r\n.label{\r\n    display: block;\r\n    width: auto;\r\n\r\n    margin-left: 10px;\r\n    padding: 5px;\r\n\r\n    color: #fff;\r\n    text-shadow: 1px 1px 1px #000;\r\n\r\n    border-radius: 10px;\r\n    background-color: #C3D2F4;\r\n}\r\n\r\ninput[type=checkbox]{\r\n    cursor: pointer;\r\n}\r\n\r\n.btns{\r\n    display: flex;    \r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n}\r\n\r\n.btns > input{\r\n    width: 100px;\r\n    height: 30px;\r\n\r\n    color: #fff;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n\r\n    box-shadow: 1px 1px 2px #000;\r\n    background-color: #C3D2F4;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n.btns > input:hover{\r\n    color: #5286ff;\r\n\r\n    background-color: #ececec;\r\n\r\n    transform: scale(1.1);\r\n}\r\n\r\n.resposta{\r\n    display: none;\r\n    margin: 20px auto;\r\n}\r\n\r\n.password{\r\n    display: block;\r\n    width: 90%;\r\n\r\n    margin: 20px auto;\r\n    border: 2px solid #C3D2F4;\r\n}\r\n\r\n.resposta > h3{\r\n    font-size: 1.5em;\r\n    color: #5286ff;\r\n    text-align: center;\r\n}\r\n\r\n.resposta > p{\r\n    word-wrap: break-word;\r\n    font-weight: 600;\r\n    text-align: left;\r\n    font-size: .9em;\r\n}\r\n\r\n.copy{\r\n    display: flex;\r\n    width: 200px;\r\n    height: 30px;\r\n\r\n    margin: auto;\r\n\r\n    color: #fff;\r\n    font-size: 0.8em;\r\n    font-weight: bold;\r\n\r\n    box-shadow: 1px 1px 2px #000;\r\n    background-color: #C3D2F4;\r\n    \r\n    justify-content: space-around;\r\n    align-items: center;\r\n\r\n    transition: 0.5s;\r\n}\r\n\r\n.copy:hover{\r\n    color: #5286ff;\r\n\r\n    background-color: #ececec;\r\n\r\n    transform: scale(1.1);\r\n}\r\n\r\n.alert{\r\n    display: block;\r\n\r\n    text-shadow: -1px 2px 2px #000;\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    color: #f00;\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_passwordClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/passwordClass.js */ "./src/modules/passwordClass.js");


var pass = new _modules_passwordClass_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
document.addEventListener('click', function (event) {
  var element = event.target;
  if (element.classList.contains('enviar')) {
    var maxCharacter = Number(document.querySelector('#ICaracteres').value);
    var inputNumber = document.querySelector('#IaddNumber');
    var inputUpperCase = document.querySelector('#IUpperCase');
    var inputLowerCase = document.querySelector('#ILowerCase');
    var inputSymbol = document.querySelector('#ISymbol');
    if (pass.cAlert === 1) {
      document.querySelector('.alert').remove();
      pass.cAlert = 0;
    }
    if (maxCharacter <= 0 || maxCharacter > 1000) {
      pass.resp.style.display = "none";
      pass.createAlert('Pelo menos 1 caractere e no máximo 1000.');
      pass.cAlert++;
      return;
    }
    if (inputNumber.checked === false && inputLowerCase.checked === false && inputUpperCase.checked === false && inputSymbol.checked === false) {
      pass.resp.style.display = "none";
      pass.createAlert('Marque pelo menos uma caixa!');
      pass.cAlert++;
      return;
    }
    pass.createPassword(maxCharacter, inputNumber.checked, inputUpperCase.checked, inputLowerCase.checked, inputSymbol.checked);
  }
  element.classList.contains('limpar') && pass.cleanAll();

  // if(element.classList.contains('copy')){
  //     pass.senha.select();
  //     pass.senha.setSelectionRange(0, 99999)
  //     document.execCommand("copy");
  // }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map