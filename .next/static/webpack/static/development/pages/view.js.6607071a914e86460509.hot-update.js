webpackHotUpdate("static/development/pages/view.js",{

/***/ "./components/Controls/ButtonGroup.jsx":
false,

/***/ "./components/Controls/PillBar.jsx":
/*!*****************************************!*\
  !*** ./components/Controls/PillBar.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/PillBar.jsx";


var PillBar = function PillBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "flex-1 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Active Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "flex-1 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Nav Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-center flex-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block py-2 px-4 text-gray-400 cursor-not-allowed",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Disabled Item")));
};

/* harmony default export */ __webpack_exports__["default"] = (PillBar);

/***/ }),

/***/ "./components/LiveTranscript/index.jsx":
/*!*********************************************!*\
  !*** ./components/LiveTranscript/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teamwork/sharedb/lib/client */ "./node_modules/@teamwork/sharedb/lib/client/index.js");
/* harmony import */ var _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reconnecting-websocket */ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-ws */ "./node_modules/isomorphic-ws/browser.js");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_ws__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ot_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ot-text */ "./node_modules/ot-text/lib/index.js");
/* harmony import */ var ot_text__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ot_text__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Controls_PillBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Controls/PillBar */ "./components/Controls/PillBar.jsx");







var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/LiveTranscript/index.jsx";




 // Components.



var LiveTranscript =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LiveTranscript, _Component);

  function LiveTranscript(props, context) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LiveTranscript);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LiveTranscript).call(this, props, context));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchDoc", function (host) {
      var server = {
        host: process.env.REACT_APP_ENV === 'production' ? 'upword.ly/ws' : host,
        port: process.env.REACT_APP_ENV === 'production' ? '' : ':9090',
        protocol: process.env.REACT_APP_ENV === 'production' ? 'wss://' : 'ws://',
        getAddress: function getAddress() {
          console.log(this.protocol + this.host + this.port);
          return this.protocol + this.host + this.port;
        }
      };
      var socket = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_9__["default"](server.getAddress(), [], {
        WebSocket: isomorphic_ws__WEBPACK_IMPORTED_MODULE_10___default.a,
        automaticOpen: true,
        maxReconnectionDelay: 2000,
        reconnectInterval: 2000,
        maxReconnectInterval: 3000,
        timeoutInterval: 2000,
        maxRetries: Infinity
      });
      _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default.a.types.register(ot_text__WEBPACK_IMPORTED_MODULE_11___default.a.type);
      var connection = new _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default.a.Connection(socket);

      _this.setState({
        connection: connection,
        doc: connection.get(_this.props.user, _this.props.job),
        loading: false
      });
    });

    _this.state = {
      connection: {},
      doc: {},
      flag: '≈',
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LiveTranscript, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchDoc(window.location.hostname);
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ButtonGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), !loading ? this.props.render(this.state) : null);
    }
  }]);

  return LiveTranscript;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LiveTranscript);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false

})
//# sourceMappingURL=view.js.6607071a914e86460509.hot-update.js.map