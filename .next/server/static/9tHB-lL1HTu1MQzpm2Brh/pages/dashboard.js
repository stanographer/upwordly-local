module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0,
/******/ 		0: 0,
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"17":"6071ae3c61646e91fcd0","25":"060a2bc2a1ef0511711d","26":"7a2582fe54fe563ba52f","27":"ac071140ca4f6ec663c0","28":"c4fd7e5425cd867374a3","29":"812c4e6a15d0052059d8","30":"450a92872ad50de8661a"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/KRb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NavLogo = function NavLogo(_ref) {
  var center = _ref.center;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: center ? 'flex items-center flex-shrink-0 text-white mr-6 justify-center' : 'flex items-center flex-shrink-0 text-white mr-6'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '2rem',
      margin: '0 1rem'
    },
    src: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMissile%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M11.1 47.3C5.4 50 1.7 54.9 2 62c7.1.4 12-3.4 14.7-9.1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Cpath data-name='layer1' d='M62 2s-13.4-.7-22.6 8.5S8.3 44.4 8.3 44.4l11.3 11.4s24.7-22 33.9-31.2S62 2 62 2z' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Ccircle data-name='layer2' cx='44' cy='20' r='4' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.6 38.5l12 11.9M24.8 26H12.5l-7.7 7.7 11 2.3M37 40.2v12.3l-7.7 7.6L27 49.2'%3E%3C/path%3E%3C/svg%3E",
    alt: "Missile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-semibold text-xl tracking-tight md:content-center"
  }, "Upword.ly"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLogo);

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u2Tt");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BOKN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  currentWidget: '',
  onChangeSettings: function onChangeSettings() {},
  settings: {},
  widgetOpen: false,
  openWidget: function openWidget(widget) {},
  closeWidget: function closeWidget(widget) {}
}));

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "IgzX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUserWithEmailAndPassword", function() { return doCreateUserWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignInWithEmailAndPassword", function() { return doSignInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordReset", function() { return doPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordUpdate", function() { return doPasswordUpdate; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("USR9");
 // Create new user.

var doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "a"].createUserWithEmailAndPassword(email, password);
}; // Sign-in.

var doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "a"].signInWithEmailAndPassword(email, password);
}; // Sign-out.

var doSignOut = function doSignOut() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "a"].signOut();
}; // Password reset.

var doPasswordReset = function doPasswordReset(email) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "a"].sendPasswordResetEmail(email);
}; // Password update.

var doPasswordUpdate = function doPasswordUpdate(password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* auth */ "a"].currentUser.updatePassword(password);
};

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "Mn+7":
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "USR9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Mn+7");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



var config = {
  apiKey: "AIzaSyDcouASUpWKrP-JWEtWqi3o6uxOW_oOEe4",
  authDomain: "upwordly-82f48.firebaseapp.com",
  databaseURL: "https://upwordly-82f48.firebaseio.com",
  projectId: "upwordly-82f48",
  storageBucket: "upwordly-82f48.appspot.com",
  messagingSenderId: "1:991179327612:web:7184ef5b310282ce"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VLay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "WxHd":
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "epl9":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons/index");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nybN":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome/index");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oG96":
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "oGAK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DASHBOARD; });
/* unused harmony export EDITOR */
/* unused harmony export LANDING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIGN_IN; });
/* unused harmony export SIGN_UP */
/* unused harmony export VIEW */
var DASHBOARD = '/dashboard';
var EDITOR = '/editor';
var LANDING = '/';
var SIGN_IN = '/signin';
var SIGN_UP = '/signup';
var VIEW = '/view';

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rSNO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Controls/ButtonGroup.jsx


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.3rem;\n  padding: 1.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = external_styled_components_default.a.button(_templateObject());

var ButtonGroup_ButtonGroup = function ButtonGroup() {
  return external_react_default.a.createElement("div", {
    className: "fixed-center"
  }, external_react_default.a.createElement(Button, {
    className: " lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
  }, external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: " fill-current w-4 h-4 mr-2"
  }, external_react_default.a.createElement("path", {
    d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
  })), external_react_default.a.createElement("span", null, "Text Size")), external_react_default.a.createElement(Button, {
    className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
  }, "Next"));
};

/* harmony default export */ var Controls_ButtonGroup = (ButtonGroup_ButtonGroup);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./src/components/Controls/Modal.jsx


function Modal_templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 0.5rem;\n  padding-bottom: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n"]);

  Modal_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Dynamically loaded components.

var FontComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, "PO9b"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("PO9b")];
    },
    modules: ['../Modal/Font']
  }
});
var TextComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "xF/O"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("xF/O")];
    },
    modules: ['../Modal/Text']
  }
});
var ColorComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "ZTiS"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("ZTiS")];
    },
    modules: ['../Modal/Color']
  }
});
var ShareComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, "bWNw"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("bWNw")];
    },
    modules: ['../Modal/Share']
  }
});
var Title = external_styled_components_default.a.div(Modal_templateObject());

var Modal_Modal = function Modal(_ref) {
  var title = _ref.title,
      user = _ref.user,
      job = _ref.job;
  var modals = {
    color: {
      header: 'Color',
      component: external_react_default.a.createElement(ColorComponent, null)
    },
    font: {
      header: 'Font',
      component: external_react_default.a.createElement(FontComponent, null)
    },
    share: {
      header: 'Share',
      component: external_react_default.a.createElement(ShareComponent, {
        user: user,
        job: job
      })
    },
    text: {
      header: 'Text',
      component: external_react_default.a.createElement(TextComponent, null)
    }
  };
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Title, null, modals[title]['header']), external_react_default.a.createElement("div", {
    className: "flex flex-grow-1 my-8"
  }, modals[title]['component']));
};

/* harmony default export */ var Controls_Modal = (Modal_Modal);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome/index"
var index_ = __webpack_require__("nybN");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/index"
var free_solid_svg_icons_index_ = __webpack_require__("epl9");

// CONCATENATED MODULE: ./src/components/Controls/ModalCloseButton.jsx




var ModalCloseButton_ModalCloseButton = function ModalCloseButton(_ref) {
  var context = _ref.context,
      label = _ref.label;
  return external_react_default.a.createElement("button", {
    className: "block border rounded text-pink-200 border-pink-200 bg-bg2 hover:border-transparent hover:text-bg2 hover:bg-pink-200 hover:border-pink-200 text-lg mt-4 mx-2 px-3 py-2 font-apercu",
    type: "button",
    onClick: function onClick() {
      return context.closeWidget();
    }
  }, external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faTimesCircle"],
    className: "pr-2"
  }), label);
};

/* harmony default export */ var Controls_ModalCloseButton = (ModalCloseButton_ModalCloseButton);
// CONCATENATED MODULE: ./src/components/Controls/ModalSaveButton.jsx




var ModalSaveButton_ModalSaveButton = function ModalSaveButton(_ref) {
  var context = _ref.context,
      label = _ref.label;
  return external_react_default.a.createElement("button", {
    className: "block border rounded text-teal-200 border-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-8 mx-2 px-3 py-2 font-apercu",
    type: "button",
    onClick: function onClick() {
      return context.setSettings();
    }
  }, external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faSave"],
    className: "pr-2"
  }), label);
};

/* harmony default export */ var Controls_ModalSaveButton = (ModalSaveButton_ModalSaveButton);
// EXTERNAL MODULE: ./src/context/widget-context.js
var widget_context = __webpack_require__("BOKN");

// EXTERNAL MODULE: ./src/components/Logos/NavLogo.jsx
var NavLogo = __webpack_require__("/KRb");

// CONCATENATED MODULE: ./src/components/Controls/Nav.jsx






var icons = {
  colors: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faFillDrip"]
  }),
  lightDarkMode: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faAdjust"]
  }),
  font: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faFont"]
  }),
  fontSize: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faTextHeight"]
  }),
  share: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faShareAlt"]
  }),
  text: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faAlignJustify"]
  })
};

var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(widget_context["a" /* default */].Consumer, null, function (context) {
    return external_react_default.a.createElement("nav", {
      className: "flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky"
    }, external_react_default.a.createElement(NavLogo["default"], null), external_react_default.a.createElement("div", {
      className: " flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab"
    }, external_react_default.a.createElement("div", {
      className: "lg:flex-grow my-2"
    }, external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.font,
      title: "Font",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('font');
      }
    }), external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.text,
      title: "Text",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('text');
      }
    }), external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.colors,
      title: "Colors",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('color');
      }
    })), external_react_default.a.createElement("div", {
      className: "my-2"
    }, external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.share,
      title: "Share",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('share');
      }
    }))));
  });
};

/* harmony default export */ var Controls_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./src/components/Controls/NavButton.jsx


var NavButton_NavButton = function NavButton(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      onClick = _ref.onClick;
  return external_react_default.a.createElement("a", {
    href: "#",
    onClick: onClick,
    className: " inline-block text-md mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border-none rounded text-teal-200 border-white hover:border-transparent hover:text-bg hover:bg-teal-200 "
  }, icon, title ? external_react_default.a.createElement("span", {
    className: "ml-2"
  }, title) : '');
};

/* harmony default export */ var Controls_NavButton = (NavButton_NavButton);
// CONCATENATED MODULE: ./src/components/Controls/ScrollButton.jsx


var ScrollButton_ScrollButton = function ScrollButton(_ref) {
  var click = _ref.click,
      filter = _ref.filter,
      href = _ref.href,
      id = _ref.id,
      path = _ref.path,
      scrolling = _ref.scrolling,
      title = _ref.title;
  return external_react_default.a.createElement("span", {
    className: !scrolling ? 'visible' : 'invisible',
    style: {
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    },
    onClick: click
  }, external_react_default.a.createElement("i", {
    className: "icon"
  }, external_react_default.a.createElement("svg", {
    viewBox: "0 0 52 52",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24"
  }), external_react_default.a.createElement("filter", {
    id: filter,
    width: "114.6%",
    height: "114.6%",
    x: "-7.3%",
    y: "-5.2%",
    filterUnits: "objectBoundingBox"
  }, external_react_default.a.createElement("feOffset", {
    dy: "1",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), external_react_default.a.createElement("feGaussianBlur", {
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "1"
  }), external_react_default.a.createElement("feColorMatrix", {
    "in": "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0"
  }))), external_react_default.a.createElement("g", {
    fill: "none",
    fillRule: "nonzero"
  }, external_react_default.a.createElement("g", {
    transform: "translate(2 1)"
  }, external_react_default.a.createElement("use", {
    fill: "#000",
    filter: "url(#".concat(filter, ")"),
    href: "#".concat(href)
  }, external_react_default.a.createElement("circle", {
    id: "scroll-top-b",
    cx: "24",
    cy: "24",
    r: "24"
  })), external_react_default.a.createElement("use", {
    fill: "#fff",
    href: "#".concat(href)
  }, external_react_default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24",
    fill: "#fff"
  }))), external_react_default.a.createElement("path", {
    d: path,
    className: "stroke"
  })))), external_react_default.a.createElement("span", {
    className: "visually-hidden"
  }, title));
};

/* harmony default export */ var Controls_ScrollButton = (ScrollButton_ScrollButton);
// CONCATENATED MODULE: ./src/components/Controls/index.js
/* concated harmony reexport ButtonGroup */__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return Controls_ButtonGroup; });
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "Modal", function() { return Controls_Modal; });
/* concated harmony reexport ModalCloseButton */__webpack_require__.d(__webpack_exports__, "ModalCloseButton", function() { return Controls_ModalCloseButton; });
/* concated harmony reexport ModalSaveButton */__webpack_require__.d(__webpack_exports__, "ModalSaveButton", function() { return Controls_ModalSaveButton; });
/* concated harmony reexport Nav */__webpack_require__.d(__webpack_exports__, "Nav", function() { return Controls_Nav; });
/* concated harmony reexport NavButton */__webpack_require__.d(__webpack_exports__, "NavButton", function() { return Controls_NavButton; });
/* concated harmony reexport ScrollButton */__webpack_require__.d(__webpack_exports__, "ScrollButton", function() { return Controls_ScrollButton; });








/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "u2Tt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/firebase/firebase.js
var firebase = __webpack_require__("USR9");

// EXTERNAL MODULE: ./src/constants/routes.js
var routes = __webpack_require__("oGAK");

// CONCATENATED MODULE: ./src/helpers/withAuth.js











var NavLogo = dynamic_default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "/KRb"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("/KRb")];
    },
    modules: ['../components/Logos/NavLogo']
  }
});

var withAuth_withAuth = function withAuth(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(inherits["default"])(_class, _React$Component);

      function _class(props) {
        var _this;

        Object(classCallCheck["default"])(this, _class);

        _this = Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(_class).call(this, props));
        _this.state = {
          status: 'LOADING',
          user: {}
        };
        return _this;
      }

      Object(createClass["default"])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          firebase["a" /* auth */].onAuthStateChanged(function (authUser) {
            if (authUser) {
              _this2.setState({
                status: 'SIGNED_IN',
                user: firebase["a" /* auth */].currentUser
              });
            } else {
              router_default.a.push(routes["b" /* SIGN_IN */]);
            }
          });
        }
      }, {
        key: "renderContent",
        value: function renderContent() {
          var _this$state = this.state,
              status = _this$state.status,
              user = _this$state.user;

          if (status === 'LOADING') {
            return external_react_default.a.createElement("div", {
              className: "container mx-auto h-full flex justify-center items-center"
            }, external_react_default.a.createElement("div", {
              className: "w-full max-w-sm mt-20"
            }, external_react_default.a.createElement(NavLogo, {
              center: true
            }), external_react_default.a.createElement("p", {
              className: "text-center mt-2"
            }, "Loading...")));
          } else if (status === 'SIGNED_IN') {
            return external_react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, this.props, {
              user: user
            }));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(external_react_["Fragment"], null, this.renderContent());
        }
      }]);

      return _class;
    }(external_react_default.a.Component)
  );
};

/* harmony default export */ var helpers_withAuth = (withAuth_withAuth);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/Controls/index.js + 8 modules
var Controls = __webpack_require__("rSNO");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome/index"
var index_ = __webpack_require__("nybN");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/index"
var free_solid_svg_icons_index_ = __webpack_require__("epl9");

// EXTERNAL MODULE: ./src/components/Logos/NavLogo.jsx
var Logos_NavLogo = __webpack_require__("/KRb");

// EXTERNAL MODULE: ./src/firebase/auth.js
var auth = __webpack_require__("IgzX");

// CONCATENATED MODULE: ./src/components/Controls/NavDashboard.jsx









var NavDashboard_NavDashboard = function NavDashboard(_ref) {
  var setActive = _ref.setActive;
  return external_react_default.a.createElement("nav", {
    className: "flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky"
  }, external_react_default.a.createElement(Logos_NavLogo["default"], null), external_react_default.a.createElement("div", {
    className: "flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab"
  }, external_react_default.a.createElement("div", {
    className: "lg:flex-grow my-2"
  }, external_react_default.a.createElement(Controls["NavButton"], {
    icon: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_index_["faTasks"]
    }),
    title: "Dashboard",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(0);
    }
  }), external_react_default.a.createElement(Controls["NavButton"], {
    icon: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_index_["faUser"]
    }),
    title: "My Account",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(1);
    }
  }), external_react_default.a.createElement(Controls["NavButton"], {
    icon: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_index_["faCog"]
    }),
    title: "Settings",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(2);
    }
  })), external_react_default.a.createElement("div", {
    className: "my-2"
  }, external_react_default.a.createElement(Controls["NavButton"], {
    icon: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_index_["faSignOutAlt"]
    }),
    title: "Sign out",
    onClick: function onClick(e) {
      e.preventDefault();
      Object(auth["doSignOut"])().then(function () {
        return router_default.a.push(routes["b" /* SIGN_IN */]);
      });
    }
  }))));
};

/* harmony default export */ var Controls_NavDashboard = (NavDashboard_NavDashboard);
// CONCATENATED MODULE: ./pages/dashboard/index.jsx






var AccountComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "TPJ6"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("TPJ6")];
    },
    modules: ['../../src/components/DashboardPages/AccountComponent']
  }
});
var DashboardComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "/9KB"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("/9KB")];
    },
    modules: ['../../src/components/DashboardPages/DashboardComponent']
  }
});
var SettingsComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "qb4Z"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("qb4Z")];
    },
    modules: ['../../src/components/DashboardPages/SettingsComponent']
  }
});

var dashboard_Dashboard = function Dashboard(props) {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  console.log(props); // Switches the active component based on the number.

  var ActiveComponent = function ActiveComponent(number) {
    switch (number) {
      case 0:
        return external_react_default.a.createElement(DashboardComponent, props);

      case 1:
        return external_react_default.a.createElement(AccountComponent, null);

      case 2:
        return external_react_default.a.createElement(SettingsComponent, null);
    }
  };

  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Upword.ly Dashboard")), external_react_default.a.createElement(Controls_NavDashboard, {
    active: active,
    setActive: setActive
  }), external_react_default.a.createElement("section", {
    className: "container mx-auto px-16 py-32 sm:py-24"
  }, ActiveComponent(active)));
};

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (helpers_withAuth(dashboard_Dashboard));

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });