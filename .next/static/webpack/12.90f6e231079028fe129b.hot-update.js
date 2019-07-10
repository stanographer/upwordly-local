webpackHotUpdate(12,{

/***/ "./src/components/Widgets/JobCreator.jsx":
/*!***********************************************!*\
  !*** ./src/components/Widgets/JobCreator.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/db */ "./src/firebase/db.js");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobCreator.jsx";






var JobCreator = function JobCreator(_ref) {
  var authUser = _ref.authUser,
      errors = _ref.errors,
      job = _ref.job,
      setShortName = _ref.setShortName,
      setTitleAndSpeakers = _ref.setTitleAndSpeakers,
      uid = _ref.uid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var copiedLink = function copiedLink() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 1500);
  };

  var errorMessages = errors.map(function (e, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "text-sm text-red-400 mb-4",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "w-full lg:w-1/2 px-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      Object(_firebase_db__WEBPACK_IMPORTED_MODULE_5__["createJob"])(job, authUser.username, uid);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-bg2 border-t border-b sm:rounded sm:border shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "text-green-200 py-4 font-normal text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Start a Job"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "List"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Chart")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8 pt-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "shortname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Shortname (required)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoFocus: true,
    autoComplete: "off",
    spellCheck: false,
    className: !!errors && errors.length > 0 ? 'border-red-500 bg-red-100 shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-red-2100 text-bg font-mono text-md' : 'shadow-lg bg-orange-200 appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"',
    id: "shortname",
    name: "shortname",
    type: "shortname",
    placeholder: "(i.e. coachella2019)",
    value: job.shortName || '',
    onChange: function onChange(e) {
      return setShortName(e.target.value);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Title (optional)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "title",
    name: "title",
    type: "title",
    placeholder: "(i.e. Spreadsheets IRL: The How and Why)",
    value: job.title || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 px-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Speakers (optional)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "speakers",
    name: "speakers",
    type: "speakers",
    placeholder: "(i.e. Christopher Hagan, Stanley Sakai)",
    value: job.speakers || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), !errors.length && job.shortName && job.shortName.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
    text: "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName),
    onCopy: function onCopy() {
      return copiedLink();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: copied ? 'underline border py-4 px-4 mt-6 bg-green-200 text-bg2 font-mono break-words cursor-pointer' : 'underline border py-4 px-4 mt-6 text-teal-200 font-mono break-words cursor-pointer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "mx-4",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName))) : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-center px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, !!errors ? errorMessages : '', copied ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-lg text-green-400 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Link copied to clipboard!") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Create Job")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (JobCreator);

/***/ }),

/***/ "./src/components/Widgets/JobList.jsx":
/*!********************************************!*\
  !*** ./src/components/Widgets/JobList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _JobItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobItem */ "./src/components/Widgets/JobItem.jsx");
/* harmony import */ var _JobsNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobsNull */ "./src/components/Widgets/JobsNull.jsx");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobList.jsx";




var JobList = function JobList(_ref) {
  var jobList = _ref.jobList;
  console.log('jobList', jobList);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "text-red-200 py-4 font-normal text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Your Jobs"))), jobList ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(jobList).map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      job: jobList[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobsNull__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (JobList);

/***/ })

})
//# sourceMappingURL=12.90f6e231079028fe129b.hot-update.js.map