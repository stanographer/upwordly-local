webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firebase/firebase */ "./src/firebase/firebase.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/routes */ "./src/constants/routes.js");






var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/helpers/withAuth.js";





var NavLogo = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Logos/NavLogo */ "./src/components/Logos/NavLogo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/Logos/NavLogo */ "./src/components/Logos/NavLogo.jsx")];
    },
    modules: ['../components/Logos/NavLogo']
  }
});

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

          _firebase_firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].onAuthStateChanged(function (authUser) {
            if (authUser) {
              _this2.setState({
                status: 'SIGNED_IN'
              });
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(_constants_routes__WEBPACK_IMPORTED_MODULE_10__["SIGN_IN"]);
            }
          });
        }
      }, {
        key: "renderContent",
        value: function renderContent() {
          var status = this.state.status;

          if (status === 'LOADING') {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              className: "container mx-auto h-full flex justify-center items-center",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
              className: "w-full max-w-sm mt-20",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLogo, {
              center: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
              className: "text-center mt-2",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, "Loading...")));
          } else if (status === 'SIGNED_IN') {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }));
          }
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
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
//# sourceMappingURL=dashboard.js.1238389dba6e71eda862.hot-update.js.map