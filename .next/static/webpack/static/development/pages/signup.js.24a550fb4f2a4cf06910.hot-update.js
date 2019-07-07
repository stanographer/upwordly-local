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
      if (e.target.name === 'token') {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value.trim().toLowerCase()));
      } else if (e.target.name === 'email') {
        _this.setState({
          email: e.target.value.trim().toLowerCase()
        });
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateStepZero", function (token) {
      if (token === "pusheen123".trim().toLowerCase()) {
        _this.setState({
          errors: '',
          step: _this.state.step += 1
        });
      } else {
        _this.setState({
          errors: 'Invalid token.'
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateStepOne", function () {
      var _this$state = _this.state,
          fullName = _this$state.fullName,
          location = _this$state.location;

      if (fullName !== '' && location.description !== undefined) {
        _this.setState({
          errors: '',
          step: _this.state.step += 1
        });
      } else {
        _this.setState({
          errors: 'Your name must only contain alphanumeric characters and you indicate your location.'
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateStepTwo", function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(email).trim().toLowerCase())) {
        _this.setState({
          emailValid: true,
          step: _this.state.step += 1
        });
      }
    });

    _this.state = {
      email: '',
      emailValid: false,
      errors: '',
      formValid: false,
      fullName: '',
      location: {},
      password: '',
      step: 0,
      token: '',
      username: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          email = _this$state2.email,
          errors = _this$state2.errors,
          fullName = _this$state2.fullName,
          location = _this$state2.location,
          password = _this$state2.password,
          step = _this$state2.step,
          token = _this$state2.token,
          username = _this$state2.username;

      var stage = function stage() {
        switch (step) {
          case 0:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TokenComponent, {
              errors: errors,
              tokenValue: token,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateStepZero,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            });

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NameAndLocation, {
              errors: errors,
              fullNameValue: fullName,
              handleInput: _this2.handleInput,
              locationValue: location,
              nextStep: _this2.validateStepOne,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(EmailComponent, {
              emailValue: email,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateStepTwo,
              tokenValid: tokenValid,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            }));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ValidFieldComponent, {
              message: "".concat(email, " is a valid and available email address."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(UserInfoComponent, {
              handleInput: _this2.handleInput,
              passwordValue: password,
              usernameValue: username,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
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
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Create an Upword.ly account"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        defer: true,
        type: "text/javascript",
        src: "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDZ2XhfLVedwwG3NjMr2YCxZGVKypGjqXE", "&libraries=places"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container mx-auto h-full flex flex-1 justify-center items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "w-full max-w-sm mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavLogo, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "font-sans mb-10 mt-2 text-center justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Typed, {
        className: "marquee",
        strings: ['Welcome to Upword.ly.', 'Let\'s create you an account.'],
        typeSpeed: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      })), stage(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text-center text-grey text-xs mt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
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
//# sourceMappingURL=signup.js.24a550fb4f2a4cf06910.hot-update.js.map