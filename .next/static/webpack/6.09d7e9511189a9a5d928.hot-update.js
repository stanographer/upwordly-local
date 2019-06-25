webpackHotUpdate(6,{

/***/ "./components/Modal/Color.jsx":
/*!************************************!*\
  !*** ./components/Modal/Color.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Modal/Color.jsx";


 // Dynamically-loaded components.

var SketchPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! react-color */ "./node_modules/react-color/lib/index.js", 7)).then(function (el) {
    return el.SketchPicker;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-color */ "./node_modules/react-color/lib/index.js")];
    },
    modules: ['react-color']
  }
});

var Color = function Color() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('fg'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      bgFg = _useState2[0],
      setBgFg = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "w-full max-w-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "flex list-style-none mp-start-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "flex-1 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: bgFg === 'fg' ? 'text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg' : 'text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4',
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        setBgFg('fg');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Foreground")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "flex-1 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: bgFg === 'bg' ? 'text-center block border border-brightGreen rounded py-2 px-4 bg-teal-200 text-bg' : 'text-center block border border-white rounded text-teal-200 hover:border-transparent hover:text-bg hover:bg-teal-200 py-2 px-4',
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        setBgFg('bg');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Background"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: bgFg === 'fg' ? 'px-3 pt-4' : 'visually-hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Foreground"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SketchPicker, {
      color: context.settings.color,
      onChangeComplete: function onChangeComplete(color) {
        return context.onChangeSettings('color', color.hex);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: bgFg === 'bg' ? 'px-3 pt-4' : 'visually-hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Background Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SketchPicker, {
      color: context.settings.backgroundColor,
      onChangeComplete: function onChangeComplete(color) {
        return context.onChangeSettings('backgroundColor', color.hex);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ })

})
//# sourceMappingURL=6.09d7e9511189a9a5d928.hot-update.js.map