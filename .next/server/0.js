exports.ids = [0];
exports.modules = {

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./src/components/DashboardPages/DashboardComponent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/DashboardPages/DashboardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Widgets/JobCreator */ "./src/components/Widgets/JobCreator.jsx");
/* harmony import */ var _components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Widgets/JobList */ "./src/components/Widgets/JobList.jsx");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typed */ "react-typed");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");



var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/DashboardPages/DashboardComponent.jsx";






var DashboardComponent = function DashboardComponent(_ref) {
  var user = _ref.user;
  console.log('dashboard props', user.uid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      authUser = _useState2[0],
      setAuthUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      job = _useState4[0],
      setJob = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var loadUser = function loadUser(user) {
    setAuthUser(user);
    console.log(user);
  };

  var setShortName = function setShortName(val) {
    var re = /^[a-z0-9_\-]+$/i;
    val = val.trim().toLowerCase();

    if (!val.match(re) && val !== '') {
      setJob({
        shortName: val.trim().toLowerCase()
      });
      setErrors(['Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores.']);
    } else if (val.length > 100) {
      setErrors(['Your job shortname may not exceed 100 characters in length.']);
    } else {
      setJob({
        shortName: val.trim().toLowerCase()
      });
      setErrors([]);
    }
  };

  var setTitleAndSpeakers = function setTitleAndSpeakers(key, val) {
    // Replaces backticks with single quotes.
    if (val.includes('`')) {
      val = val.replace('`', '\'');
    } // Escapes curly braces.


    if (val.includes('{')) {
      val = val.replace('{', '\{');
    }

    if (val.includes('}')) {
      val = val.replace('{', '\}');
    }

    setJob(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, job, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, val)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    try {
      _firebase__WEBPACK_IMPORTED_MODULE_7__["db"].getUser(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "font-apercu text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "marquee text-teal-200",
    strings: ["Welcome to your control center."],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), authUser ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "pt-4 pb-2 text-green-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Logged in as ", authUser.fullName) : '', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex flex-wrap -mx-4 my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    authUser: authUser,
    errors: errors,
    job: job,
    setShortName: setShortName,
    setTitleAndSpeakers: setTitleAndSpeakers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardComponent);

/***/ }),

/***/ "./src/components/Widgets/JobCreator.jsx":
/*!***********************************************!*\
  !*** ./src/components/Widgets/JobCreator.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/firebase */ "./src/firebase/firebase.js");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobCreator.jsx";






var JobCreator = function JobCreator(_ref) {
  var authUser = _ref.authUser,
      errors = _ref.errors,
      job = _ref.job,
      setShortName = _ref.setShortName,
      setTitleAndSpeakers = _ref.setTitleAndSpeakers;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var copiedLink = function copiedLink() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 1500);
  };

  var createJob = function createJob() {};

  var errorMessages = errors.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-sm text-red-400 mb-4",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "w-full lg:w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-bg2 border-t border-b sm:rounded sm:border shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "text-green-200 py-4 font-normal text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Start a Job"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8 pt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "shortname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Shortname (required)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoFocus: true,
    autoComplete: "off",
    spellCheck: false,
    className: !!errors && errors.length > 0 ? 'border-red-500 bg-red-100 shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-red-2100 text-bg font-mono text-md' : 'shadow-lg bg-orange-200 appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"',
    id: "shortname",
    name: "shortname",
    type: "shortname",
    placeholder: "(i.e. coachella2019)",
    value: job.shortName || '',
    onChange: function onChange(e) {
      return setShortName(e.target.value);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Title (optional)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "title",
    name: "title",
    type: "title",
    placeholder: "(i.e. Spreadsheets IRL: The How and Why)",
    value: job.title || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Speakers (optional)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "speakers",
    name: "speakers",
    type: "speakers",
    placeholder: "(i.e. Christopher Hagan, Stanley Sakai)",
    value: job.speakers || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), !errors.length && job.shortName && job.shortName.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
    text: "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName),
    onCopy: function onCopy() {
      return copiedLink();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: copied ? 'underline border py-4 px-4 mt-6 bg-green-200 text-bg2 font-mono break-words cursor-pointer' : 'underline border py-4 px-4 mt-6 text-teal-200 font-mono break-words cursor-pointer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "mx-4",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName))) : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, !!errors ? errorMessages : '', copied ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-sm text-green-400 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Link copied to clipboard!") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Create Job")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (JobCreator);

/***/ }),

/***/ "./src/components/Widgets/JobList.jsx":
/*!********************************************!*\
  !*** ./src/components/Widgets/JobList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobList.jsx";


var JobList = function JobList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-red-200 py-4 font-normal text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Your Jobs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Chart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/5 xl:w-1/4 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full bg-orange inline-flex mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current text-white h-8 w-8 block",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Bitcoin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-orange h-2 rounded-full flex-grow mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), "100%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-3/5 md:w/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "0.0010 BTC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "CA$21.28")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/5 xl:w-1/4 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full bg-grey inline-flex mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current text-white h-8 w-8 block",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 38 38",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Litecoin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-grey h-2 w-2 rounded-full mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), "0%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-3/5 md:w/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "0.0000 LTC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "CA$0.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/5 xl:w-1/4 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full bg-indigo inline-flex mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current text-white h-8 w-8 block",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2 25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5 2.78a.73.73 0 0 1-.6 0l-5.5-2.76z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Ethereum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-indigo h-2 w-2 rounded-full mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "0%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-3/5 md:w/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "0.0000 ETH")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "CA$0.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Total Balance \u2248 CA$21.28"))));
};

/* harmony default export */ __webpack_exports__["default"] = (JobList);

/***/ }),

/***/ "./src/firebase/context.js":
/*!*********************************!*\
  !*** ./src/firebase/context.js ***!
  \*********************************/
/*! exports provided: default, withFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFirebase", function() { return withFirebase; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/firebase/context.js";

var FirebaseContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);

var withFirebase = function withFirebase(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirebaseContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, function (firebase) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        firebase: firebase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (FirebaseContext);


/***/ }),

/***/ "./src/firebase/db.js":
/*!****************************!*\
  !*** ./src/firebase/db.js ***!
  \****************************/
/*! exports provided: doCreateUser, checkDupeEmail, checkDupeUsername, getUser, onceGetUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeEmail", function() { return checkDupeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeUsername", function() { return checkDupeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");

var doCreateUser = function doCreateUser(email, fullName, location, id, payment, token, username) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(id)).set({
    email: email,
    fullName: fullName,
    location: location,
    payment: payment,
    token: token,
    username: username
  });
};
var checkDupeEmail = function checkDupeEmail(email, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').orderByChild('email').equalTo(email).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var checkDupeUsername = function checkDupeUsername(username, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').orderByChild('username').equalTo(username).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var getUser = function getUser(uid, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(uid)).once('value', function (snapshot) {
    cb(snapshot.val());
  })["catch"](function (err) {
    cb(err);
  });
};
var onceGetUsers = function onceGetUsers() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').once('value');
};

/***/ }),

/***/ "./src/firebase/index.js":
/*!*******************************!*\
  !*** ./src/firebase/index.js ***!
  \*******************************/
/*! exports provided: auth, db, Firebase, FirebaseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/firebase/auth.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/firebase/db.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "db", function() { return _db__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Firebase", function() { return _firebase__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/firebase/context.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FirebaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_3__; });






/***/ })

};;
//# sourceMappingURL=0.js.map