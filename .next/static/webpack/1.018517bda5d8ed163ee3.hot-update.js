webpackHotUpdate(1,{

/***/ "./components/Controls/Modal.jsx":
/*!***************************************!*\
  !*** ./components/Controls/Modal.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/Modal.jsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top: 0.5rem;\n  padding-bottom: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Dynamically loaded components.

var FontComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../Modal/Font */ "./components/Modal/Font.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Modal/Font */ "./components/Modal/Font.jsx")];
    },
    modules: ['../Modal/Font']
  }
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var modals = {
  font: {
    header: 'Font',
    component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FontComponent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    })
  }
};

var Modal = function Modal(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, modals[title]['header']), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-grow-1 my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, modals[title][component], react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "payment__button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "payment__button-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Next Step"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "payment__button-icon",
    src: "https://www.dropbox.com/s/rfqpcnoh6svp1p0/arrow.svg?raw=1",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=1.018517bda5d8ed163ee3.hot-update.js.map