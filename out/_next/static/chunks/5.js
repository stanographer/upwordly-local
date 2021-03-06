(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/Modal/Color.jsx":
/*!****************************************!*\
  !*** ./src/components/ModalComponent/Color.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/ConnectionProvider.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/widget-providers */ "./src/providers/widget-providers.js");
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome/index */ "./node_modules/@fortawesome/react-fontawesome/ConnectionProvider.jsx");
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/index */ "./node_modules/@fortawesome/free-solid-svg-icons/ConnectionProvider.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/ModalComponent/Color.jsx";





var ModalCloseButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../General */ "./src/components/General/ConnectionProvider.jsx")).then(function (el) {
    return el.ModalCloseButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../General */ "./src/components/General/ConnectionProvider.jsx")];
    },
    modules: ['../General']
  }
});
var ModalSaveButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../General */ "./src/components/General/ConnectionProvider.jsx")).then(function (el) {
    return el.ModalSaveButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../General */ "./src/components/General/ConnectionProvider.jsx")];
    },
    modules: ['../General']
  }
}); // Dynamically-loaded components.

var SketchPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-color */ "./node_modules/react-color/lib/ConnectionProvider.jsx", 7)).then(function (el) {
    return el.SketchPicker;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-color */ "./node_modules/react-color/lib/ConnectionProvider.jsx")];
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
      lineNumber: 21
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "w-full max-w-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "flex list-style-none mp-start-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "flex-1 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
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
        lineNumber: 27
      },
      __self: this
    }, "Foreground")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "flex-1 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
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
        lineNumber: 37
      },
      __self: this
    }, "Background"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: bgFg === 'fg' ? 'px-3 pt-4' : 'visually-hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Foreground"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SketchPicker, {
      color: context.settings.color,
      onChangeComplete: function onChangeComplete(color) {
        return context.onChangeSettings('color', color.hex);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: bgFg === 'bg' ? 'px-3 pt-4' : 'visually-hidden',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Background Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SketchPicker, {
      color: context.settings.backgroundColor,
      onChangeComplete: function onChangeComplete(color) {
        return context.onChangeSettings('backgroundColor', color.hex);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalSaveButton, {
      context: context,
      label: "Save Font Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalCloseButton, {
      context: context,
      label: "Close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ })

}]);
//# sourceMappingURL=5.js.map