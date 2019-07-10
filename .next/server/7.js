exports.ids = [7];
exports.modules = {

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w === 'function' && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = undefined;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = undefined;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = undefined;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = undefined;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                // @ts-ignore
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            return this._ws ? this._ws.readyState : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            this._debug('enqueue', data);
            this._messageQueue.push(data);
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, ['RWS>'].concat(args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = minReconnectionDelay;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                _this._connectLock = false;
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ __webpack_exports__["default"] = (ReconnectingWebSocket);


/***/ }),

/***/ "./src/components/LiveTranscript/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/LiveTranscript/index.jsx ***!
  \*************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @teamwork/sharedb/lib/client */ "@teamwork/sharedb/lib/client");
/* harmony import */ var _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reconnecting_websocket_dist_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reconnecting-websocket/dist/reconnecting-websocket */ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-ws */ "isomorphic-ws");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_ws__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ot_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ot-text */ "ot-text");
/* harmony import */ var ot_text__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ot_text__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify/index */ "react-toastify/index");
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify_index__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Toasts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Toasts */ "./src/components/Toasts/index.js");







var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/LiveTranscript/index.jsx";








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
          return this.protocol + this.host + this.port;
        }
      };
      _this.socket = new reconnecting_websocket_dist_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_9__["default"](server.getAddress(), [], {
        WebSocket: isomorphic_ws__WEBPACK_IMPORTED_MODULE_10___default.a,
        automaticOpen: true,
        maxReconnectionDelay: 1000,
        reconnectInterval: 1000,
        maxReconnectInterval: 2000,
        timeoutInterval: 2000,
        maxRetries: Infinity
      });
      _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default.a.types.register(ot_text__WEBPACK_IMPORTED_MODULE_11___default.a.type);
      var connection = new _teamwork_sharedb_lib_client__WEBPACK_IMPORTED_MODULE_8___default.a.Connection(_this.socket);

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
    _this.hasDisconnected = false;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LiveTranscript, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // HasConnected makes sure that the disconnection message isn't
      // shown to the user at start-up.
      Object(_Toasts__WEBPACK_IMPORTED_MODULE_13__["FetchingToast"])();
      this.fetchDoc(window.location.hostname); // Will display a message to the user that the connection was lost.

      this.socket.onclose = function () {
        if (!_this2.hasDisconnected) {
          Object(_Toasts__WEBPACK_IMPORTED_MODULE_13__["DisconnectedToast"])();
          _this2.hasDisconnected = true;
        }
      }; // Will display a message to the user that the connection is rectified.


      this.socket.onopen = function () {
        if (_this2.hasDisconnected) {
          Object(_Toasts__WEBPACK_IMPORTED_MODULE_13__["ReconnectedToast"])();
          _this2.hasDisconnected = false;
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_toastify_index__WEBPACK_IMPORTED_MODULE_12__["ToastContainer"], {
        draggable: true,
        autoClose: 5000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), !loading ? this.props.render(this.state) : '');
    }
  }]);

  return LiveTranscript;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LiveTranscript);

/***/ }),

/***/ "./src/components/Toasts/index.js":
/*!****************************************!*\
  !*** ./src/components/Toasts/index.js ***!
  \****************************************/
/*! exports provided: CopiedToast, DisconnectedToast, FetchingToast, LoadedToast, ReconnectedToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopiedToast", function() { return CopiedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedToast", function() { return DisconnectedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchingToast", function() { return FetchingToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedToast", function() { return LoadedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReconnectedToast", function() { return ReconnectedToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/index */ "react-toastify/index");
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Toasts/index.js";




 // Toast content components.

var Copied = function Copied() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCopy"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold ml-4 inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Link has been copied to your clipboard!"));
};

var Fetching = function Fetching() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRunning"],
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold ml-4 inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Fetching job!"));
};

var Loaded = function Loaded() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Live transcription is now active!"));
};

var Disconnected = function Disconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamation"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Attempting to reconnect..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "You can also try refreshing the page.");
};

var Reconnected = function Reconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWifi"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Connection Restored."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Whew! \uD83E\uDD84"));
}; // Toasts.


var toastId = null;

var CopiedToast = function CopiedToast() {
  if (react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].isActive(toastId)) {
    react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copied, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), {
      autoClose: 1500,
      position: 'top-center',
      type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
      closeOnClick: true,
      draggable: true
    });
  }
};

var FetchingToast = function FetchingToast() {
  return toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fetching, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), {
    autoClose: false,
    position: 'bottom-right',
    type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.WARNING,
    closeOnClick: true,
    draggable: true
  });
};

var LoadedToast = function LoadedToast() {
  react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
  Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loaded, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), {
    autoClose: 3000,
    type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
    pauseOnFocusLoss: false,
    position: 'bottom-right',
    closeOnClick: true,
    draggable: false,
    className: 'rotateY animated'
  });
};

var DisconnectedToast = function DisconnectedToast() {
  if (!react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].isActive(toastId)) {
    react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disconnected, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), {
      autoClose: false,
      position: 'top-center',
      type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.ERROR,
      closeOnClick: true,
      draggable: true,
      toastId: toastId
    });
  }
};

var ReconnectedToast = function ReconnectedToast() {
  if (react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].isActive(toastId)) {
    react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Reconnected, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), {
      autoClose: 1500,
      position: 'top-center',
      type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
      closeOnClick: true,
      draggable: true
    });
  }
};



/***/ })

};;
//# sourceMappingURL=7.js.map