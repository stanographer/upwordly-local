webpackHotUpdate(12,{

/***/ "./src/components/DashboardPages/DashboardComponent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/DashboardPages/DashboardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Widgets/JobCreator */ "./src/components/Widgets/JobCreator.jsx");
/* harmony import */ var _components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Widgets/JobList */ "./src/components/Widgets/JobList.jsx");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/db */ "./src/firebase/db.js");



var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/DashboardPages/DashboardComponent.jsx";






var DashboardComponent = function DashboardComponent(_ref) {
  var user = _ref.user;
  console.log('dashboard props', user.uid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      authUser = _useState2[0],
      setAuthUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      jobsList = _useState4[0],
      setJobsList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      job = _useState6[0],
      setJob = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var loadUser = function loadUser(user) {
    setAuthUser(user);
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

    setJob(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, job, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, val)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    try {
      Object(_firebase_db__WEBPACK_IMPORTED_MODULE_7__["getUser"])(user.uid, loadUser);
      Object(_firebase_db__WEBPACK_IMPORTED_MODULE_7__["getAllJobsByUser"])(authUser.username, function (jobs) {
        return setJobsList(jobs);
      });
    } catch (err) {
      console.error('error', err);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "font-apercu text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "marquee text-teal-200",
    strings: ["Welcome to your control center."],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), authUser ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "pt-4 pb-2 text-green-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Logged in as ", authUser.fullName) : '', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex flex-wrap -mx-4 my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    jobs: authUser.jobs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardComponent);

/***/ })

})
//# sourceMappingURL=12.3e0f0ee9fee13b112ae6.hot-update.js.map