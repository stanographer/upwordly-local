webpackHotUpdate("static/development/pages/view.js",{

/***/ "./components/Provider.js":
/*!********************************!*\
  !*** ./components/Provider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts.css */ "./fonts.css");
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fonts_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/widget-context */ "./context/widget-context.js");








var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Provider.js";





var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#575b70'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '40px',
    width: '40px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#1a1b21',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#1a1b21'
  },
  bmItemList: {
    color: '#b8b7ad',
    overflow: 'hidden',
    height: 'unset',
    padding: '0.8em',
    width: '100%'
  },
  bmItem: {
    display: 'inline-block',
    fontSize: '2.5rem',
    padding: '1rem 0'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

var AppProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppProvider, _React$Component);

  function AppProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AppProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      currentWidget: '',
      settings: {},
      widgetOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "INITIAL_SETTINGS", {
      bgColor: 'rgb(30,34,39)',
      fgColor: '#fffce1',
      fontFamily: 'Apercu',
      fontSize: '3rem',
      lineHeight: '1.2rem',
      padding: '2rem 2rem 2rem 2rem'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "openWidget", function (widget) {
      _this.setState({
        currentWidget: widget,
        widgetOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeWidget", function () {
      _this.setState({
        widgetOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getSettings", function () {
      var settings = window.localStorage.getItem('upwordly') || _this.INITIAL_SETTINGS;

      _this.setState({
        settings: JSON.parse(settings)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setSettings", function () {
      try {
        window.localStorage.setItem('upwordly', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.settings));
      } catch (_unused) {
        console.log('Error retrieving from localstorage.');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AppProvider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentWidget = _this$state.currentWidget,
          widgetOpen = _this$state.widgetOpen;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
        value: {
          currentWidget: currentWidget,
          widgetOpen: widgetOpen,
          openWidget: this.openWidget,
          closeWidget: this.closeWidget,
          getSettings: this.getSettings,
          setSettings: this.setSettings
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

/***/ }),

/***/ "./pages/view/index.jsx":
/*!******************************!*\
  !*** ./pages/view/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_LiveTranscript_TextArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LiveTranscript/TextArea */ "./components/LiveTranscript/TextArea.jsx");
/* harmony import */ var _components_LiveTranscript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/LiveTranscript */ "./components/LiveTranscript/index.jsx");
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Provider */ "./components/Provider.js");
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");








var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/view/index.jsx";



 // Components.




 // Dynamic imports.

var ScrollButton = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Controls */ "./components/Controls/index.js")).then(function (el) {
    return el.ScrollButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Controls */ "./components/Controls/index.js")];
    },
    modules: ['../../components/Controls']
  }
});
var Nav = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Controls */ "./components/Controls/index.js")).then(function (el) {
    return el.Nav;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Controls */ "./components/Controls/index.js")];
    },
    modules: ['../../components/Controls']
  }
});
var Modal = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-modal */ "./node_modules/react-modal/lib/index.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-modal */ "./node_modules/react-modal/lib/index.js")];
    },
    modules: ['react-modal']
  }
});
var ModalComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Controls */ "./components/Controls/index.js")).then(function (el) {
    return el.Modal;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/Controls */ "./components/Controls/index.js")];
    },
    modules: ['../../components/Controls']
  }
});
var modalStyles = {
  content: {
    backgroundColor: '#282c34',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)'
  },
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 0.3)'
  }
};

var View =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(View, _React$Component);

  function View(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, View);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(View).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "interval", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "startScrolling", function () {
      // Set the scrolling state to scrolling.
      _this.setState({
        scrolling: true
      }); // Begin auto-scrolling.


      _this.interval = setInterval(function () {
        react_scroll__WEBPACK_IMPORTED_MODULE_11__["animateScroll"].scrollToBottom({
          delay: 0,
          duration: 100,
          offset: 30,
          isDynamic: true,
          smooth: true
        });
      }, 500);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stopScrolling", function () {
      // Stop auto-scrolling.
      _this.setState({
        scrolling: false
      });

      clearInterval(_this.interval);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeModal", function () {
      _this.setState({
        modalOpen: false
      });
    });

    _this.state = {
      scrolling: true,
      modalOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // On component load, begin auto-scrolling.
      var router = this.props.router;
      this.startScrolling();
      console.log('props', this.props.context);
      console.log(router.query);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopScrolling();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scrolling = this.state.scrolling;
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Provider__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Modal, {
          isOpen: context.widgetOpen,
          onRequestClose: context.closeWidget,
          contentLabel: "Example Modal",
          style: modalStyles,
          ariaHideApp: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalComponent, {
          title: context.currentWidget,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: !scrolling ? 'visible sticky' : 'invisible sticky',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Nav, {
          openModal: _this2.openModal,
          closeModal: _this2.closeModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          onTouchStart: function onTouchStart() {
            return _this2.stopScrolling();
          },
          onClick: function onClick() {
            return _this2.stopScrolling();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LiveTranscript__WEBPACK_IMPORTED_MODULE_13__["default"], {
          user: router.query.user,
          job: router.query.job,
          render: function render(state) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LiveTranscript_TextArea__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            }));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ScrollButton, {
          "aria-label": "Scroll to Bottom",
          click: function click() {
            _this2.startScrolling();
          },
          filter: "scroll-top-a",
          href: "scroll-top-b",
          id: "scroll-top-b",
          path: "M18 22l8 8 8-8",
          scrolling: scrolling,
          title: "Scroll to Bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }));
      }));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(View));

/***/ })

})
//# sourceMappingURL=view.js.6b959787969c62c84222.hot-update.js.map