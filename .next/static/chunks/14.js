(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./components/Modal/Text.jsx":
/*!***********************************!*\
  !*** ./components/Modal/Text.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Modal/Text.jsx";



var ModalCloseButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../Controls */ "./components/Controls/index.js")).then(function (el) {
    return el.ModalCloseButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Controls */ "./components/Controls/index.js")];
    },
    modules: ['../Controls']
  }
});
var ModalSaveButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../Controls */ "./components/Controls/index.js")).then(function (el) {
    return el.ModalSaveButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Controls */ "./components/Controls/index.js")];
    },
    modules: ['../Controls']
  }
});

var Text = function Text() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "w-full max-w-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Line Height"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0",
      id: "grid-last-name",
      type: "text",
      name: "lineHeight",
      value: context.settings.lineHeight || '',
      onChange: function onChange(e) {
        e.preventDefault();
        context.onChangeSettings('lineHeight', e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Horizontal Padding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0",
      id: "grid-last-name",
      type: "text",
      name: "lineHeight",
      value: context.settings.paddingX || '',
      onChange: function onChange(e) {
        e.preventDefault();
        context.onChangeSettings('paddingX', e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Vertical Padding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0",
      id: "grid-last-name",
      type: "text",
      name: "lineHeight",
      value: context.settings.paddingY || '',
      onChange: function onChange(e) {
        e.preventDefault();
        context.onChangeSettings('paddingY', e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalSaveButton, {
      context: context,
      label: "Save Text Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalCloseButton, {
      context: context,
      label: "Close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

}]);
//# sourceMappingURL=14.js.map