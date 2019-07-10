exports.ids = [21];
exports.modules = {

/***/ "jWbh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);




var GeoSuggest = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "Eje5", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("Eje5")];
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
  var errorMessages = errors.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-sm text-red-400 mb-2",
      key: i
    }, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "bg-bg2 shadow-md rounded px-8 pt-6 pb-8 mb-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      nextStep(e);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm mb-4"
  }, "Please enter the name by which you'd like to be called. First and last is great; just first is fine, too!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "fullName"
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
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-grey-darker text-md mb-2",
    htmlFor: "location"
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GeoSuggest, {
    className: "shadow bg-white appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg text-md font-mono tracking-wide",
    id: "location",
    name: "location",
    placeholder: "Location",
    autoComplete: "off",
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
    onSuggestSelect: function onSuggestSelect(val) {
      return handleInput({
        target: {
          name: 'location',
          value: val,
          type: 'input'
        }
      });
    },
    highlightMatch: true,
    type: "text",
    required: true
  })), !!errors ? errorMessages : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-blue w-full hover:bg-blue-dark text-teal-200 font-bold py-2 px-4 rounded border-white hover:border-transparent hover:text-bg hover:bg-teal-200",
    type: "submit"
  }, "Continue", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowRight"],
    className: "mx-2"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NameAndLocation);

/***/ })

};;