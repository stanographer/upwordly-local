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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
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
  var errors = _ref.errors,
      fullNameValue = _ref.fullNameValue,
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
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Please enter the name by which you'd like to be called. First and last is great; just first is fine, too!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "fullName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GeoSuggest, {
    className: "shadow bg-white appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide",
    id: "location",
    name: "location",
    placeholder: "Location",
    autoComplete: "off",
    onBlur: function onBlur(val) {
      return console.log(val);
    },
    value: locationValue,
    style: {
      'input': {
        backgroundColor: '#fff',
        width: '100%'
      },
      'suggests': {
        color: '#718096',
        backgroundColor: '#fff'
      },
      'suggestItem': {
        backgroundColor: '#fff'
      }
    },
    update: function update(val) {
      return handleInput({
        target: {
          name: 'location',
          value: val
        }
      });
    },
    onSuggestSelect: function onSuggestSelect(val) {
      return handleInput({
        target: {
          name: 'location',
          value: val
        }
      });
    },
    highlightMatch: true,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), !!errors ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm text-red-400 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, errors) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Continue", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"],
    className: "mx-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NameAndLocation);

/***/ })

})
//# sourceMappingURL=4.6656731fde15f9332f7a.hot-update.js.map