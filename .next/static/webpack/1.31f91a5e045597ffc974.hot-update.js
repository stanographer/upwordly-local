webpackHotUpdate(1,{

/***/ "./components/Controls/ModalCloseButton.jsx":
/*!**************************************************!*\
  !*** ./components/Controls/ModalCloseButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/ModalCloseButton.jsx";




var ModalCloseButton = function ModalCloseButton(_ref) {
  var context = _ref.context,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "border rounded text-pink-200 border-pink-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg2 hover:bg-pink-200 hover:border-pink-200 text-lg mt-6 mx-2 px-3 py-2 font-apercu",
    type: "button",
    onClick: function onClick() {
      return context.closeWidget();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"],
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), label);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalCloseButton);

/***/ }),

/***/ "./components/Controls/index.js":
/*!**************************************!*\
  !*** ./components/Controls/index.js ***!
  \**************************************/
/*! exports provided: ButtonGroup, Modal, ModalCloseButton, Nav, NavButton, ScrollButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup */ "./components/Controls/ButtonGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./components/Controls/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ModalCloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalCloseButton */ "./components/Controls/ModalCloseButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalCloseButton", function() { return _ModalCloseButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Controls/Nav.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavButton */ "./components/Controls/NavButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavButton", function() { return _NavButton__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollButton */ "./components/Controls/ScrollButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollButton", function() { return _ScrollButton__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ })

})
//# sourceMappingURL=1.31f91a5e045597ffc974.hot-update.js.map