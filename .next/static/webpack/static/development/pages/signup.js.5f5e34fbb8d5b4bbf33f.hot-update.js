webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup/index.jsx":
/*!********************************!*\
  !*** ./pages/signup/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/index.jsx";





var NavLogo = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx")];
    },
    modules: ['../../components/Logos/NavLogo']
  }
});
var Typed = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-typed */ "./node_modules/react-typed/dist/react-typed.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js")];
    },
    modules: ['react-typed']
  }
}); // Sign-up components.

var TokenComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Token */ "./pages/signup/Token.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Token */ "./pages/signup/Token.jsx")];
    },
    modules: ['./Token']
  }
});

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp).call(this, props));
    _this.state = {
      step: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Sign up for Upword.ly")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container mx-auto h-full flex flex-1 justify-center items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "w-full max-w-xs mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NavLogo, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "font-sans font-hairline mb-10 mt-2 text-center justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Typed, {
        className: "marquee",
        strings: ['Welcome to Upword.ly.', 'Let\'s create you an account.'],
        typeSpeed: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "flex items-center justify-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-center text-grey text-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\xA92019 Upword.ly. All rights reserved."))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.5f5e34fbb8d5b4bbf33f.hot-update.js.map