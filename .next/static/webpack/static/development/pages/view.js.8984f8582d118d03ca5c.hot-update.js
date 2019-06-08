webpackHotUpdate("static/development/pages/view.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intersection_visible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intersection-visible */ "./node_modules/react-intersection-visible/lib/index.js");
/* harmony import */ var react_intersection_visible__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intersection_visible__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_LiveTranscript_TextArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LiveTranscript/TextArea */ "./components/LiveTranscript/TextArea.jsx");
/* harmony import */ var _components_LiveTranscript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/LiveTranscript */ "./components/LiveTranscript/index.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");








var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/view/index.jsx";



 // Components.





var View =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(View, _React$Component);

  function View(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, View);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(View).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setScrolling", function () {
      // Set the scrolling state to scrolling.
      _this.setState({
        scrolling: true
      }); // Begin auto-scrolling.


      _this.interval = setInterval(function () {
        react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToBottom({
          delay: 0,
          duration: 100,
          offset: 30,
          isDynamic: true,
          smooth: true
        });
      }, 500);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stopScrolling", function () {
      if (_this.interval > 0 && typeof _this.interval === 'undefined') {
        _this.setState({
          scrolling: false
        });

        clearInterval(_this.interval);
      }
    });

    _this.state = {
      scrolling: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // On component load, begin auto-scrolling.
      this.setScrolling();
      var router = this.props.router;
      console.log(router.query);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scrolling = this.state.scrolling;
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-8 py-8 text-5xl",
        onTouchStart: this.stopScrolling(),
        onClick: this.stopScrolling(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LiveTranscript__WEBPACK_IMPORTED_MODULE_13__["default"], {
        user: router.query.user,
        job: router.query.job,
        render: function render(state) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LiveTranscript_TextArea__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), !scrolling ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ScrollArrow, {
        "aria-label": "Scroll to Bottom",
        click: function click() {
          _this2.setScrolling();
        },
        filter: "scroll-top-a",
        href: "scroll-top-b",
        id: "scroll-top-b",
        path: "M18 22l8 8 8-8",
        title: "Scroll to Bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }) : null));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(View));

/***/ })

})
//# sourceMappingURL=view.js.8984f8582d118d03ca5c.hot-update.js.map