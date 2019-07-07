webpackHotUpdate(6,{

/***/ "./pages/signup/UserInfo.jsx":
/*!***********************************!*\
  !*** ./pages/signup/UserInfo.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/UserInfo.jsx";




var UserInfo = function UserInfo(_ref) {
  var errors = _ref.errors,
      handleInput = _ref.handleInput,
      nextStep = _ref.nextStep,
      passwordValue = _ref.passwordValue,
      usernameValue = _ref.usernameValue;
  var errorMessages = errors.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-sm text-red-400 mb-4",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      nextStep(usernameValue, passwordValue);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Now create a username that is unique, all lowercase, and simple."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Live transcript links you share will contain your username so making it unnecessarily long or complex will make your URLs harder to remember and more prone to typos."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Links look like this. The portion of the url that contains your username is highlighted in red: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://upword.ly/stanley/coachella-2019",
    className: "text-green-200 underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "upword.ly/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-red-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, usernameValue || 'stanley'), "/coachella-2019")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-bg focus:bg-blue-100 text-md font-mono tracking-wide",
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Username",
    value: usernameValue,
    onChange: function onChange(e) {
      return handleInput(e);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide",
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    value: passwordValue,
    onChange: function onChange(e) {
      return handleInput(e);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), !!errors ? errorMessages : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Continue", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"],
    className: "mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ })

})
//# sourceMappingURL=6.eb0551d0cb2c2f0e61d5.hot-update.js.map