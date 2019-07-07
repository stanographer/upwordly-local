webpackHotUpdate(5,{

/***/ "./pages/signup/Token.jsx":
/*!********************************!*\
  !*** ./pages/signup/Token.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/Token.jsx";





var Token = function Token(_ref) {
  var handleInput = _ref.handleInput,
      nextStep = _ref.nextStep,
      tokenValue = _ref.tokenValue,
      tokenValid = _ref.tokenValid;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      nextStep(tokenValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md font-hairline mb-6",
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Please enter your ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Registration Token"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 text-bg font-mono focus:bg-blue-100 text-md tracking-wide",
    id: "token",
    name: "token",
    type: "text",
    placeholder: "Registration Token",
    value: tokenValue,
    onChange: function onChange(e) {
      return handleInput(e);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, !!errors ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm text-red-400 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, errors) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-green-200 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Request a token")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Continue", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowRight"],
    className: "mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Token);

/***/ })

})
//# sourceMappingURL=5.2d62ecae4c3cfecb134d.hot-update.js.map