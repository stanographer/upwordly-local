webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup/index.jsx":
/*!********************************!*\
  !*** ./pages/signup/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/firebase */ "./src/firebase/index.js");









var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/index.jsx";






var NavLogo = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Logos/NavLogo */ "./components/Logos/NavLogo.jsx")];
    },
    modules: ['../../components/Logos/NavLogo']
  }
});
var Typed = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-typed */ "./node_modules/react-typed/dist/react-typed.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js")];
    },
    modules: ['react-typed']
  }
}); // Sign-up components.

var EmailComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Email */ "./pages/signup/Email.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Email */ "./pages/signup/Email.jsx")];
    },
    modules: ['./Email']
  }
});
var NameAndLocation = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./NameAndLocation */ "./pages/signup/NameAndLocation.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./NameAndLocation */ "./pages/signup/NameAndLocation.jsx")];
    },
    modules: ['./NameAndLocation']
  }
});
var PaymentComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./Payment */ "./pages/signup/Payment.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Payment */ "./pages/signup/Payment.jsx")];
    },
    modules: ['./Payment']
  }
});
var TokenComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Token */ "./pages/signup/Token.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Token */ "./pages/signup/Token.jsx")];
    },
    modules: ['./Token']
  }
});
var UserInfoComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./UserInfo */ "./pages/signup/UserInfo.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./UserInfo */ "./pages/signup/UserInfo.jsx")];
    },
    modules: ['./UserInfo']
  }
});
var ValidFieldComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./ValidField */ "./pages/signup/ValidField.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./ValidField */ "./pages/signup/ValidField.jsx")];
    },
    modules: ['./ValidField']
  }
});
var INITIAL_STATE = {
  email: '',
  emailValid: false,
  errors: [],
  formValid: false,
  fullName: '',
  fullNameValid: false,
  location: {},
  locationValid: false,
  password: '',
  passwordValid: false,
  payment: '',
  step: 0,
  token: '',
  tokenValid: false,
  username: '',
  usernameValid: false
};

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleInput", function (e) {
      // Matches the token to the one in the environment variable.
      // Trims and lower-cases. If there's a match, the tokenValid
      // flag is switched to true.
      if (e.target.name === 'token') {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value.trim().toLowerCase()));
      } else if (e.target.name === 'email') {
        _this.setState({
          email: e.target.value.trim().toLowerCase()
        });
      } else if (e.target.name === 'username') {
        _this.setState({
          username: e.target.value.toLowerCase()
        });
      } else {
        _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubmit", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          emailValid = _this$state.emailValid,
          errors = _this$state.errors,
          fullName = _this$state.fullName,
          fullNameValid = _this$state.fullNameValid,
          location = _this$state.location,
          locationValid = _this$state.locationValid,
          password = _this$state.password,
          passwordValid = _this$state.passwordValid,
          payment = _this$state.payment,
          step = _this$state.step,
          token = _this$state.token,
          tokenValid = _this$state.tokenValid,
          username = _this$state.username,
          usernameValid = _this$state.usernameValid;

      if (emailValid && fullNameValid && locationValid && passwordValid && tokenValid && usernameValid) {
        _src_firebase__WEBPACK_IMPORTED_MODULE_14__["auth"].doCreateUserWithEmailAndPassword();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateStepZero", function (token) {
      if (token === "pusheen123".trim().toLowerCase()) {
        _this.setState({
          errors: [],
          step: _this.state.step += 1,
          tokenValid: true
        });
      } else {
        _this.setState({
          errors: ['Sorry. Your token is invalid.']
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateStepOne", function () {
      var _this$state2 = _this.state,
          fullName = _this$state2.fullName,
          location = _this$state2.location;
      var re = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

      if (!fullName.match(re)) {
        _this.setState({
          errors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.errors), ['Your name can only contain alphanumeric characters.'])
        });
      } else if (location.description === undefined) {
        _this.setState({
          errors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.errors), ['Select the closest matching location.'])
        });
      } else {
        _this.setState({
          errors: [],
          fullNameValid: true,
          locationValid: true,
          step: _this.state.step += 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateStepTwo", function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(email).trim().toLowerCase())) {
        _this.setState({
          emailValid: true,
          step: _this.state.step += 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateStepThree", function (username, password) {
      var usernameRe = /^[a-zA-Z0-9_-]+$/;
      var passwordRe = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

      if (!username.match(usernameRe)) {
        _this.setState({
          errors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.errors), ['Your username may only contain lowercase letters, numbers, hyphens, and underscores.'])
        });
      } else if (!password.match(passwordRe)) {
        _this.setState({
          errors: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.errors), ['Your password needs at minimum eight characters, at least one letter, one number, and one special character.'])
        });
      } else {
        _this.setState({
          errors: [],
          step: _this.state.step += 1,
          usernameValid: true,
          passwordValid: true
        });
      }
    });

    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, INITIAL_STATE);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          email = _this$state3.email,
          errors = _this$state3.errors,
          fullName = _this$state3.fullName,
          location = _this$state3.location,
          password = _this$state3.password,
          payment = _this$state3.payment,
          step = _this$state3.step,
          token = _this$state3.token,
          username = _this$state3.username;

      var stage = function stage() {
        switch (step) {
          case 0:
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TokenComponent, {
              errors: errors,
              tokenValue: token,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateStepZero,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              },
              __self: this
            });

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 208
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(NameAndLocation, {
              errors: errors,
              fullNameValue: fullName,
              handleInput: _this2.handleInput,
              locationValue: location,
              nextStep: _this2.validateStepOne,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 212
              },
              __self: this
            }));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 224
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 227
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(EmailComponent, {
              emailValue: email,
              handleInput: _this2.handleInput,
              nextStep: _this2.validateStepTwo,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 230
              },
              __self: this
            }));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 239
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "".concat(email, " is a valid and available email address."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 246
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(UserInfoComponent, {
              errors: errors,
              handleInput: _this2.handleInput,
              passwordValue: password,
              usernameValue: username,
              nextStep: _this2.validateStepThree,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249
              },
              __self: this
            }));

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Your registration token \"".concat(token, "\" is valid."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 261
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Nice to meet you, ".concat(fullName, "! I hear the weather is great in ").concat(location.description, "!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 264
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "".concat(email, " is a valid and available email address."),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "".concat(username, " is a valid and available username!"),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ValidFieldComponent, {
              message: "Nice and strong password!",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 273
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PaymentComponent, {
              errors: errors,
              handleInput: _this2.handleInput,
              paymentValue: payment,
              nextStep: _this2.validateStepThree,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 276
              },
              __self: this
            }));

          default:
            break;
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Create an Upword.ly account"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("script", {
        async: true,
        defer: true,
        type: "text/javascript",
        src: "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDZ2XhfLVedwwG3NjMr2YCxZGVKypGjqXE", "&libraries=places"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container mx-auto h-full flex flex-1 justify-center items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "w-full max-w-sm mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(NavLogo, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "font-sans mb-10 mt-2 text-center justify-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Typed, {
        className: "marquee",
        strings: ['Welcome to Upword.ly.', 'Let\'s create you an account.'],
        typeSpeed: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      })), stage(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "text-center text-grey text-xs mt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "\xA92019 Upword.ly. All rights reserved."))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.7d86cae3e08881377a8c.hot-update.js.map