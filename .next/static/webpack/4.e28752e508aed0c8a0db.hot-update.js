webpackHotUpdate(4,{

/***/ "./pages/signup/NameAndLocation.jsx":
/*!******************************************!*\
  !*** ./pages/signup/NameAndLocation.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/signup/NameAndLocation.jsx";


var GeoSuggest = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! react-geosuggest */ "./node_modules/react-geosuggest/module/Geosuggest.esm.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-geosuggest */ "./node_modules/react-geosuggest/module/Geosuggest.esm.js")];
    },
    modules: ['react-geosuggest']
  }
});

var NameAndLocation = function NameAndLocation(_ref) {
  var fullNameValue = _ref.fullNameValue,
      handleInput = _ref.handleInput,
      locationValue = _ref.locationValue,
      nextStep = _ref.nextStep;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      nextStep(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Please enter the name by which you'd like to be called. First and last is great; just first is fine, too!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "fullName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Full Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    autoFocus: true,
    autoComplete: "off",
    spellCheck: false,
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-bg focus:bg-blue-100 text-md font-mono tracking-wide",
    id: "fullName",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
    value: fullNameValue,
    onChange: function onChange(e) {
      return handleInput(e);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Tell us where you're from. It could be just your city and state, province, or prefecture. Or you can include your country."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GeoSuggest, {
    className: "shadow appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide",
    id: "location",
    name: "location",
    placeholder: "Location",
    value: locationValue,
    style: {
      'input': {
        backgroundColor: '#fff'
      },
      'suggests': {
        backgroundColor: '#fff'
      },
      'suggestItem': {
        backgroundColor: '#fff'
      }
    },
    update: function update(e) {
      return handleInput(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Continue"));
};

/* harmony default export */ __webpack_exports__["default"] = (NameAndLocation);

/***/ })

})
//# sourceMappingURL=4.e28752e508aed0c8a0db.hot-update.js.map