(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./components/Modal/Font.jsx":
/*!***********************************!*\
  !*** ./components/Modal/Font.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Modal/Font.jsx";





var Font = function Font() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "w-full max-w-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0",
      id: "grid-last-name",
      type: "text",
      name: "fontSize",
      value: context.settings.fontSize || '',
      onChange: function onChange(e) {
        e.preventDefault();
        context.onChangeSettings('fontSize', e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-grow-1 my-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Style")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-6 mx-0 px-3 py-2 font-apercu",
      type: "button",
      onClick: function onClick() {
        return context.setSettings();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSave"],
      className: "pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), "Save Settings")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Font);

/***/ })

}]);
//# sourceMappingURL=3.js.map