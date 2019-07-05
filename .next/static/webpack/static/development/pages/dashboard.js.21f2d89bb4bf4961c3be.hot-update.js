webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/NeedsAuth/index.jsx":
/*!****************************************!*\
  !*** ./components/NeedsAuth/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Logos_NavLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/NeedsAuth/index.jsx";






var NeedsAuth = function NeedsAuth() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Sign-in required to view page.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container mx-auto h-full flex flex-1 justify-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full max-w-xs mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Logos_NavLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    center: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "font-sans font-hairline mb-10 mt-2 text-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Sorry. You must be signed in to view this page."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Click here"), " to sign in.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-center text-grey text-xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\xA92019 Upword.ly. All rights reserved."))));
};

/* harmony default export */ __webpack_exports__["default"] = (NeedsAuth);

/***/ }),

/***/ "./src/helpers/withAuth.js":
/*!*********************************!*\
  !*** ./src/helpers/withAuth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./src/firebase/index.js");
/* harmony import */ var _components_NeedsAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NeedsAuth */ "./components/NeedsAuth/index.jsx");






var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/helpers/withAuth.js";





var withAuth = function withAuth(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, _React$Component);

      function _class(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _class);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_class).call(this, props));
        _this.state = {
          status: 'LOADING'
        };
        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].onAuthStateChanged(function (authUser) {
            console.log(authUser);

            if (authUser) {
              _this2.setState({
                status: 'SIGNED_IN'
              });
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
            }
          });
        }
      }, {
        key: "renderContent",
        value: function renderContent() {
          var status = this.state.status;

          if (status === 'LOADING') {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NeedsAuth__WEBPACK_IMPORTED_MODULE_9__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            });
          } else if (status === 'SIGNED_IN') {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, this.renderContent());
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ })

})
//# sourceMappingURL=dashboard.js.21f2d89bb4bf4961c3be.hot-update.js.map