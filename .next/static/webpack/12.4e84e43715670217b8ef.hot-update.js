webpackHotUpdate(12,{

/***/ "./src/components/Widgets/JobItem.jsx":
/*!********************************************!*\
  !*** ./src/components/Widgets/JobItem.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobItem.jsx";





var JobItem = function JobItem(_ref) {
  var job = _ref.job;

  var location = function location() {
    return "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(job.username, "/").concat(job.shortName);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-2/5 xl:w-1/4 px-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-md font-mono text-green-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, job.shortName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-orange h-2 rounded-full flex-grow mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), job.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-3/5 md:w/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "0.0010 BTC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: location,
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-4 py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (JobItem);

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
//# sourceMappingURL=12.4e84e43715670217b8ef.hot-update.js.map