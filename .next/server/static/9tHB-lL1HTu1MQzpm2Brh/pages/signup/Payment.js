module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2mzF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);




var Payment = function Payment(_ref) {
  var errors = _ref.errors,
      finish = _ref.finish,
      paymentValue = _ref.paymentValue,
      handleInput = _ref.handleInput;
  var errorMessages = errors.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-sm text-red-400 mb-4",
      key: i
    }, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      finish(e);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md font-hairline mb-6",
    htmlFor: "username"
  }, "Please select a payment plan."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block relative w-64"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: paymentValue,
    onChange: function onChange(e) {
      return handleInput(e);
    },
    name: "payment",
    id: "payment",
    className: "block appearance-none text-bg w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "32"
  }, "Single user: $32 per month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "59"
  }, "Agency option: $59 per month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "Admin or Evaluator")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-end"
  }, !!errors ? errorMessages : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit"
  }, "Create Account", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"],
    className: "mx-2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2mzF");


/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ })

/******/ });