exports.ids = [28];
exports.modules = {

/***/ "PO9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BOKN");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);



var ModalCloseButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "rSNO")).then(function (el) {
    return el.ModalCloseButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("rSNO")];
    },
    modules: ['../Controls']
  }
});
var ModalSaveButton = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "rSNO")).then(function (el) {
    return el.ModalSaveButton;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("rSNO")];
    },
    modules: ['../Controls']
  }
});

var Font = function Font() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Consumer, null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "w-full max-w-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name"
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 min-w-0",
      id: "grid-last-name",
      type: "text",
      name: "fontSize",
      value: context.settings.fontSize || '',
      onChange: function onChange(e) {
        e.preventDefault();
        context.onChangeSettings('fontSize', e.target.value);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-grow-1 my-8"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "block uppercase tracking-wide text-brightGreen text-xs font-bold mb-2",
      htmlFor: "grid-last-name"
    }, "Style")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalSaveButton, {
      context: context,
      label: "Save Font Settings"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalCloseButton, {
      context: context,
      label: "Close"
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Font);

/***/ })

};;