module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		16: 0,
/******/ 		19: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"98758eddda0ac0cdd192","27":"ac071140ca4f6ec663c0","28":"c4fd7e5425cd867374a3","29":"812c4e6a15d0052059d8","30":"450a92872ad50de8661a"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("l7Zm");


/***/ }),

/***/ "20IO":
/***/ (function(module, exports) {

module.exports = require("isomorphic-ws");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jX/":
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6QOK":
/***/ (function(module, exports) {

module.exports = require("ot-text");

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "87UO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@teamwork/sharedb/lib/client"
var client_ = __webpack_require__("ziNL");
var client_default = /*#__PURE__*/__webpack_require__.n(client_);

// CONCATENATED MODULE: ./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs
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

/* harmony default export */ var reconnecting_websocket = (ReconnectingWebSocket);

// EXTERNAL MODULE: external "isomorphic-ws"
var external_isomorphic_ws_ = __webpack_require__("20IO");
var external_isomorphic_ws_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_ws_);

// EXTERNAL MODULE: external "ot-text"
var external_ot_text_ = __webpack_require__("6QOK");
var external_ot_text_default = /*#__PURE__*/__webpack_require__.n(external_ot_text_);

// EXTERNAL MODULE: external "react-toastify/index"
var index_ = __webpack_require__("qXlt");

// EXTERNAL MODULE: ./src/components/Toasts/index.js
var Toasts = __webpack_require__("yhlM");

// CONCATENATED MODULE: ./src/components/LiveTranscript/index.jsx















var LiveTranscript_LiveTranscript =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(LiveTranscript, _Component);

  function LiveTranscript(props, context) {
    var _this;

    Object(classCallCheck["default"])(this, LiveTranscript);

    _this = Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(LiveTranscript).call(this, props, context));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchDoc", function (host) {
      var server = {
        host: process.env.REACT_APP_ENV === 'production' ? 'upword.ly/ws' : host,
        port: process.env.REACT_APP_ENV === 'production' ? '' : ':9090',
        protocol: process.env.REACT_APP_ENV === 'production' ? 'wss://' : 'ws://',
        getAddress: function getAddress() {
          return this.protocol + this.host + this.port;
        }
      };
      _this.socket = new reconnecting_websocket(server.getAddress(), [], {
        WebSocket: external_isomorphic_ws_default.a,
        automaticOpen: true,
        maxReconnectionDelay: 1000,
        reconnectInterval: 1000,
        maxReconnectInterval: 2000,
        timeoutInterval: 2000,
        maxRetries: Infinity
      });
      client_default.a.types.register(external_ot_text_default.a.type);
      var connection = new client_default.a.Connection(_this.socket);

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

  Object(createClass["default"])(LiveTranscript, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // HasConnected makes sure that the disconnection message isn't
      // shown to the user at start-up.
      Object(Toasts["b" /* FetchingToast */])();
      this.fetchDoc(window.location.hostname); // Will display a message to the user that the connection was lost.

      this.socket.onclose = function () {
        if (!_this2.hasDisconnected) {
          Object(Toasts["a" /* DisconnectedToast */])();
          _this2.hasDisconnected = true;
        }
      }; // Will display a message to the user that the connection is rectified.


      this.socket.onopen = function () {
        if (_this2.hasDisconnected) {
          Object(Toasts["d" /* ReconnectedToast */])();
          _this2.hasDisconnected = false;
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(index_["ToastContainer"], {
        draggable: true,
        autoClose: 5000
      }), !loading ? this.props.render(this.state) : '');
    }
  }]);

  return LiveTranscript;
}(external_react_["Component"]);

/* harmony default export */ var components_LiveTranscript = __webpack_exports__["default"] = (LiveTranscript_LiveTranscript);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BOKN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  currentWidget: '',
  onChangeSettings: function onChangeSettings() {},
  settings: {},
  widgetOpen: false,
  openWidget: function openWidget(widget) {},
  closeWidget: function closeWidget(widget) {}
}));

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "IgdK":
/***/ (function(module, exports) {



/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VLay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "epl9":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons/index");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "l7Zm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// CONCATENATED MODULE: ./src/components/LiveTranscript/react-binding.js



// Class takes in a snapshot as a string and transforms the text
// before sending changes back up.
var react_binding_Binding =
/*#__PURE__*/
function () {
  function Binding(snapshot, flag) {
    Object(classCallCheck["default"])(this, Binding);

    this.snapshot = snapshot;
    this.flag = flag;
  } // Methods to update state text whenever ops are received
  // through WebSockets.


  Object(createClass["default"])(Binding, [{
    key: "applyOp",
    value: function applyOp(op) {
      // When an op is received, transform it, and
      // set it equal to the component snapshot.
      this.snapshot = Binding.transformSnapshot(op, this.snapshot);
      return this.snapshot;
    }
  }], [{
    key: "transformSnapshot",
    value: function transformSnapshot(op, snap) {
      // Create a new temp variable to hold changes.
      var newDoc = []; // Loop through the ops object.

      for (var i = 0; i < op.length; i++) {
        var component = op[i]; // Classifies the different components of the op.

        switch (typeof component) {
          // If it is a number, make it the index.
          case 'number':
            newDoc.push(snap.slice(0, component));
            snap = snap.slice(component);
            break;
          // If it is a string, we know to insert it into the temp variable.

          case 'string':
            newDoc.push(component);
            break;
          // If it is an object, we know it's a delete command.

          case 'object':
            snap = snap.slice(component.d);
            break;
        }
      } // Once that is done, join the changes stored in the temp variable
      // to the snapshot and send it back to applyOp().


      return newDoc.join('') + snap;
    }
  }]);

  return Binding;
}();

/* harmony default export */ var react_binding = (react_binding_Binding);
// EXTERNAL MODULE: ./src/components/Toasts/index.js
var Toasts = __webpack_require__("yhlM");

// CONCATENATED MODULE: ./src/components/LiveTranscript/TextArea.jsx





function TextArea(_ref) {
  var doc = _ref.doc,
      flag = _ref.flag;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var binding;
  Object(external_react_["useEffect"])(function () {
    doc.subscribe(function (err) {
      if (err) {
        setText('There was a connection error: ' + err);
      }
    }, []); // Load document and bind it to local snapshot.

    doc.on('load', function () {
      binding = new react_binding(doc.data, flag);
      setTimeout(function () {
        setText(binding.snapshot || 'Connection successful.');
        Object(Toasts["c" /* LoadedToast */])();
      }, 0);
    }); // Apply remote ops to local snapshot.

    doc.on('op', function (op) {
      setTimeout(function () {
        setText(binding.applyOp(op));
      }, 0);
    }); // Destroy listeners.

    return function () {
      doc.unsubscribe();
      doc.destroy();
      binding = null;
    };
  }, []);
  return external_react_default.a.createElement("div", {
    className: "transcript"
  }, text || '');
}

/* harmony default export */ var LiveTranscript_TextArea = (TextArea);
// EXTERNAL MODULE: ./src/components/LiveTranscript/index.jsx + 1 modules
var LiveTranscript = __webpack_require__("87UO");

// EXTERNAL MODULE: ./src/components/Session/Provider.js
var Provider = __webpack_require__("x2Hz");

// EXTERNAL MODULE: ./src/context/widget-context.js
var widget_context = __webpack_require__("BOKN");

// CONCATENATED MODULE: ./pages/view/index.jsx












 // Components.




 // Dynamic imports.

var ScrollButton = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "rSNO")).then(function (el) {
    return el.ScrollButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("rSNO")];
    },
    modules: ['../../src/components/Controls']
  }
});
var Nav = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "rSNO")).then(function (el) {
    return el.Nav;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("rSNO")];
    },
    modules: ['../../src/components/Controls']
  }
});
var Modal = dynamic_default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7koQ", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("7koQ")];
    },
    modules: ['react-modal']
  }
});
var ModalComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "rSNO")).then(function (el) {
    return el.Modal;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("rSNO")];
    },
    modules: ['../../src/components/Controls']
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

var view_View =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(View, _React$Component);

  function View(props) {
    var _this;

    Object(classCallCheck["default"])(this, View);

    _this = Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(View).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "interval", 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "startScrolling", function () {
      // Set the scrolling state to scrolling.
      _this.setState({
        scrolling: true
      }); // Begin auto-scrolling.


      _this.interval = setInterval(function () {
        external_react_scroll_["animateScroll"].scrollToBottom({
          delay: 0,
          duration: 100,
          offset: 30,
          isDynamic: true,
          smooth: true
        });
      }, 500);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "stopScrolling", function () {
      // Stop auto-scrolling.
      _this.setState({
        scrolling: false
      });

      clearInterval(_this.interval);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "openModal", function () {
      _this.setState({
        modalOpen: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "closeModal", function () {
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

  Object(createClass["default"])(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // On component load, begin auto-scrolling.
      this.startScrolling();
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
      return external_react_default.a.createElement(Provider["a" /* default */], null, external_react_default.a.createElement(widget_context["a" /* default */].Consumer, null, function (context) {
        return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Modal, {
          isOpen: context.widgetOpen,
          onRequestClose: context.closeWidget,
          contentLabel: "Widget Modal",
          style: modalStyles,
          ariaHideApp: false
        }, external_react_default.a.createElement(ModalComponent, {
          user: router.query.user,
          job: router.query.job,
          title: context.currentWidget
        })), external_react_default.a.createElement("div", {
          className: !scrolling ? 'visible sticky' : 'invisible sticky'
        }, external_react_default.a.createElement(Nav, {
          openModal: _this2.openModal,
          closeModal: _this2.closeModal
        })), external_react_default.a.createElement("div", {
          style: Object(objectSpread["a" /* default */])({}, context.settings, {
            fontSize: context.settings.fontSize / 10 + 'rem',
            padding: context.settings.paddingY + 'rem' + ' ' + context.settings.paddingX + 'rem'
          }),
          onTouchStart: function onTouchStart() {
            return _this2.stopScrolling();
          },
          onClick: function onClick() {
            return _this2.stopScrolling();
          }
        }, external_react_default.a.createElement(LiveTranscript["default"], {
          user: router.query.user,
          job: router.query.job,
          render: function render(state) {
            return external_react_default.a.createElement(LiveTranscript_TextArea, Object(esm_extends["a" /* default */])({
              editable: false
            }, state));
          }
        })), external_react_default.a.createElement(ScrollButton, {
          "aria-label": "Scroll to Bottom",
          click: function click() {
            _this2.startScrolling();
          },
          filter: "scroll-top-a",
          href: "scroll-top-b",
          id: "scroll-top-b",
          path: "M18 22l8 8 8-8",
          scrolling: scrolling,
          title: "Scroll to Bottom"
        }));
      }));
    }
  }]);

  return View;
}(external_react_default.a.Component);

/* harmony default export */ var view = __webpack_exports__["default"] = (Object(router_["withRouter"])(view_View));

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nybN":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome/index");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qXlt":
/***/ (function(module, exports) {

module.exports = require("react-toastify/index");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "x2Hz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("BOKN");












var AppProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AppProvider, _React$Component);

  function AppProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AppProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AppProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "state", {
      currentWidget: '',
      settings: {},
      widgetOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "INITIAL_SETTINGS", {
      backgroundColor: 'rgb(30,34,39)',
      color: '#fffce1',
      fontFamily: 'Apercu',
      fontSize: '30',
      lineHeight: '1.3',
      paddingX: '2',
      paddingY: '2'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "openWidget", function (widget) {
      _this.setState({
        currentWidget: widget,
        widgetOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "closeWidget", function () {
      _this.setState({
        widgetOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "getSettings", function () {
      // Get settings from localstorage.
      var settings;

      try {
        settings = window.localStorage.getItem('upwordly-settings') || _this.INITIAL_SETTINGS;

        _this.setState({
          settings: JSON.parse(settings)
        }, function () {
          return console.log('settings state ', _this.state.settings);
        });
      } catch (_unused) {
        // If settings cannot be loaded, load initial state.
        _this.setState({
          settings: _this.INITIAL_SETTINGS
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "onChangeSettings", function (key, value) {
      var settings = _this.state.settings;

      _this.setState({
        settings: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, settings, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])({}, key, value))
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "setSettings", function () {
      // Save settings to localstorage.
      try {
        window.localStorage.setItem('upwordly-settings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.settings));
      } catch (_unused2) {
        console.log('Error retrieving from localstorage.');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AppProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSettings();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentWidget = _this$state.currentWidget,
          settings = _this$state.settings,
          widgetOpen = _this$state.widgetOpen;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].Provider, {
        value: {
          currentWidget: currentWidget,
          settings: settings,
          widgetOpen: widgetOpen,
          onChangeSettings: this.onChangeSettings,
          openWidget: this.openWidget,
          closeWidget: this.closeWidget,
          getSettings: this.getSettings,
          setSettings: this.setSettings
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AppProvider);

/***/ }),

/***/ "yhlM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CopiedToast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisconnectedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchingToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReconnectedToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qXlt");
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IgdK");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);




 // Toast content components.

var Copied = function Copied() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCopy"],
    size: "lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold ml-4 inline"
  }, "Link has been copied to your clipboard!"));
};

var Fetching = function Fetching() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRunning"],
    size: "lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "font-bold ml-4 inline"
  }, "Fetching job!"));
};

var Loaded = function Loaded() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Live transcription is now active!"));
};

var Disconnected = function Disconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamation"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Attempting to reconnect..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You can also try refreshing the page.");
};

var Reconnected = function Reconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg font-apercu p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWifi"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Connection Restored."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Whew! \uD83E\uDD84"));
}; // Toasts.


var toastId = null;

var CopiedToast = function CopiedToast() {
  if (react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].isActive(toastId)) {
    react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copied, null), {
      autoClose: 1500,
      position: 'top-center',
      type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
      closeOnClick: true,
      draggable: true
    });
  }
};

var FetchingToast = function FetchingToast() {
  return toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fetching, null), {
    autoClose: false,
    position: 'bottom-right',
    type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.WARNING,
    closeOnClick: true,
    draggable: true
  });
};

var LoadedToast = function LoadedToast() {
  react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
  Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loaded, null), {
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
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disconnected, null), {
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
    toastId = Object(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Reconnected, null), {
      autoClose: 1500,
      position: 'top-center',
      type: react_toastify_index__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
      closeOnClick: true,
      draggable: true
    });
  }
};



/***/ }),

/***/ "ziNL":
/***/ (function(module, exports) {

module.exports = require("@teamwork/sharedb/lib/client");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });