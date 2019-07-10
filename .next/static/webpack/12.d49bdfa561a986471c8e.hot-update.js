webpackHotUpdate(12,{

/***/ "./src/components/DashboardPages/DashboardComponent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/DashboardPages/DashboardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Widgets/JobCreator */ "./src/components/Widgets/JobCreator.jsx");
/* harmony import */ var _components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Widgets/JobList */ "./src/components/Widgets/JobList.jsx");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase/db */ "./src/firebase/db.js");





var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/DashboardPages/DashboardComponent.jsx";






var DashboardComponent = function DashboardComponent(_ref) {
  var user = _ref.user;
  console.log('dashboard props', user.uid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      authUser = _useState2[0],
      setAuthUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      jobList = _useState4[0],
      setJobList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      job = _useState6[0],
      setJob = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var loadUser = function loadUser(user) {
    setAuthUser(user);
    console.log('username', user.username);
    Object(_firebase_db__WEBPACK_IMPORTED_MODULE_9__["getAllJobsByUser"])(user.username, function (jobs) {
      return setJobList(jobs);
    });
  };

  var setShortName = function setShortName(val) {
    var re = /^[a-z0-9_\-]+$/i;
    val = val.trim().toLowerCase();

    if (!val.match(re) && val !== '') {
      setJob({
        shortName: val.trim().toLowerCase()
      });
      setErrors(['Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores.']);
    } else if (val.length > 100) {
      setErrors(['Your job shortname may not exceed 100 characters in length.']);
    } else {
      setJob({
        shortName: val.trim().toLowerCase()
      });
      setErrors([]);
    }
  };

  var setTitleAndSpeakers = function setTitleAndSpeakers(key, val) {
    // Replaces backticks with single quotes.
    if (val.includes('`')) {
      val = val.replace('`', '\'');
    } // Escapes curly braces.


    if (val.includes('{')) {
      val = val.replace('{', '\{');
    }

    if (val.includes('}')) {
      val = val.replace('{', '\}');
    }

    setJob(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, job, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, val)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(
  /*#__PURE__*/
  Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Object(_firebase_db__WEBPACK_IMPORTED_MODULE_9__["getUser"])(user.uid, loadUser);

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.error('error', _context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  })), []);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "font-apercu text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: "marquee text-teal-200",
    strings: ["Welcome to your control center."],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), authUser ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "pt-4 pb-2 text-green-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Logged in as ", authUser.fullName) : '', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "flex flex-wrap -mx-4 my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    authUser: authUser,
    errors: errors,
    job: job,
    setShortName: setShortName,
    setTitleAndSpeakers: setTitleAndSpeakers,
    uid: user.uid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    jobList: jobList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardComponent);

/***/ }),

/***/ "./src/components/Widgets/JobList.jsx":
/*!********************************************!*\
  !*** ./src/components/Widgets/JobList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JobItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobItem */ "./src/components/Widgets/JobItem.jsx");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Widgets/JobList.jsx";



var JobList = function JobList(_ref) {
  var jobList = _ref.jobList;
  console.log('jobList', jobList);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-red-200 py-4 font-normal text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Your Jobs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Chart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-6 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Total Balance \u2248 CA$21.28"))));
};

/* harmony default export */ __webpack_exports__["default"] = (JobList);

/***/ })

})
//# sourceMappingURL=12.d49bdfa561a986471c8e.hot-update.js.map