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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ValidField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ValidField */ "./pages/signup/ValidField.jsx");







var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/index.jsx";





var NavLogo = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx")];
    },
    modules: ['../../components/Logos/NavLogo']
  }
});
var Typed = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-typed */ "./node_modules/react-typed/dist/react-typed.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js")];
    },
    modules: ['react-typed']
  }
}); // Sign-up components.

var EmailComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Email */ "./pages/signup/Email.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Email */ "./pages/signup/Email.jsx")];
    },
    modules: ['./Email']
  }
});
var NameAndLocation = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./NameAndLocation */ "./pages/signup/NameAndLocation.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./NameAndLocation */ "./pages/signup/NameAndLocation.jsx")];
    },
    modules: ['./NameAndLocation']
  }
});
var TokenComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Token */ "./pages/signup/Token.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Token */ "./pages/signup/Token.jsx")];
    },
    modules: ['./Token']
  }
});
var UserInfoComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./UserInfo */ "./pages/signup/UserInfo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./UserInfo */ "./pages/signup/UserInfo.jsx")];
    },
    modules: ['./UserInfo']
  }
});
var ValidFieldComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./ValidField */ "./pages/signup/ValidField.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./ValidField */ "./pages/signup/ValidField.jsx")];
    },
    modules: ['./ValidField']
  }
});

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleInput", function (e) {
      // Matches the token to the one in the environment variable.
      // Trims and lower-cases. If there's a match, the tokenValid
      // flag is switched to true.
      if (e.target.name === 'token' && e.target.value.trim().toLowerCase() === "pusheen123".trim().toLowerCase()) {
        var _this$setState;

        _this.setState((_this$setState = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState, e.target.name, e.target.value.trim().toLowerCase()), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState, "tokenValid", true), _this$setState));
      } else if (e.target.name === 'email') {
        _this.setState({
          email: e.target.value.trim().toLowerCase()
        });
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateEmail", function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(email).trim().toLowerCase())) {
        _this.setState({
          emailValid: true,
          step: _this.state.step += 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateAndContinue", function () {
      var tokenValid = _this.state.tokenValid;

      if (tokenValid) {
        _this.setState({
          step: _this.state.step += 1
        });
      }
    });

    _this.state = {
      email: '',
      emailValid: false,
      formValid: false,
      fullName: '',
      location: {},
      password: '',
      step: 0,
      token: '',
      tokenValid: false,
      username: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          fullName = _this$state.fullName,
          location = _this$state.location,
          password = _this$state.password,
          step = _this$state.step,
          token = _this$state.token,
          tokenValid = _this$state.tokenValid,
          username = _this$state.username;

      var stage = function stage() {
        switch (step) {
          case 0:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TokenComponent, {
              tokenValue: token,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateAndContinue,
              tokenValid: tokenValid,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            });

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NameAndLocation, {
              fullNameValue: fullName,
              handleInput: _this2.handleInput,
              locationValue: location,
              nextStep: _this2.validateAndContinue,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(EmailComponent, {
              emailValue: email,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateEmail,
              tokenValid: tokenValid,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              },
              __self: this
            }));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "".concat(email, " is a valid and available email address."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(UserInfoComponent, {
              handleInput: _this2.handleInput,
              passwordValue: password,
              usernameValue: username,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              },
              __self: this
            }));

          default:
            break;
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Create an Upword.ly account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        defer: true,
        type: "text/javascript",
        src: "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDZ2XhfLVedwwG3NjMr2YCxZGVKypGjqXE", "&libraries=places"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container mx-auto h-full flex flex-1 justify-center items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "w-full max-w-sm mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavLogo, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "font-sans mb-10 mt-2 text-center justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Typed, {
        className: "marquee",
        strings: ['Welcome to Upword.ly.', 'Let\'s create you an account.'],
        typeSpeed: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), stage(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text-center text-grey text-xs mt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "\xA92019 Upword.ly. All rights reserved."))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.664545dcdb560869ee4f.hot-update.js.map