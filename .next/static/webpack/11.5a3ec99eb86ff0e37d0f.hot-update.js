webpackHotUpdate(11,{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/index */ "./node_modules/react-toastify/index.js");
/* harmony import */ var react_toastify_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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
    size: "md",
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
    size: "md",
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

})
//# sourceMappingURL=11.5a3ec99eb86ff0e37d0f.hot-update.js.map