webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup/index.jsx":
/*!********************************!*\
  !*** ./pages/signup/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/index.jsx";





var NavLogo = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx")];
    },
    modules: ['../../components/Logos/NavLogo']
  }
});
var Typed = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-typed */ "./node_modules/react-typed/dist/react-typed.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js")];
    },
    modules: ['react-typed']
  }
});

var Login = function Login() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Sign up for Upword.ly")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container mx-auto h-full flex flex-1 justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "w-full max-w-xs mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavLogo, {
    center: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "font-sans font-hairline mb-10 mt-2 text-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Typed, {
    className: "marquee",
    strings: ['Welcome to Upword.ly.', 'Let\'s create you an account.'],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-hairline mb-2",
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
    id: "username",
    type: "text",
    placeholder: "Username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "block text-grey-darker text-sm font-hairline mb-2",
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
    id: "password",
    type: "password",
    placeholder: "******************",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "text-center text-grey text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\xA92019 Upword.ly. All rights reserved."))));
};

Login.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var pathname, req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = _ref.pathname, req = _ref.req;
            console.log('initial: ', pathname, req);
            return _context.abrupt("return", {
              pathname: req.pathname || pathname
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=signup.js.22647d53f69268bfcb0a.hot-update.js.map