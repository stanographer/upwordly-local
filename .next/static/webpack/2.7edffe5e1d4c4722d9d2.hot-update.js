webpackHotUpdate(2,{

/***/ "./src/components/DashboardPages/DashboardComponent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/DashboardPages/DashboardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Widgets/JobCreator */ "./src/components/Widgets/JobCreator.jsx");
/* harmony import */ var _components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Widgets/JobList */ "./src/components/Widgets/JobList.jsx");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ "./src/firebase/index.js");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/DashboardPages/DashboardComponent.jsx";






var DashboardComponent = function DashboardComponent(_ref) {
  var user = _ref.user;
  console.log('dashboard props', user.uid);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      authUser = _useState2[0],
      setAuthUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      job = _useState4[0],
      setJob = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var loadUser = function loadUser(user) {
    setAuthUser(user);
    console.log(user);
  };

  var setShortName = function setShortName(val) {
    var re = /[a-z0-9\-_]+/;
    val = val.trim().toLowerCase();

    if (!val.match(re)) {
      return alert('Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores');
    }

    setJob({
      shortName: val.trim().toLowerCase()
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    try {
      _firebase__WEBPACK_IMPORTED_MODULE_5__["db"].getUser(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "font-apercu text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "marquee text-teal-200",
    strings: ["Welcome to your control center."],
    typeSpeed: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), authUser ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "pt-4 pb-2 text-green-200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Logged in as ", authUser.fullName) : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-wrap -mx-4 my-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, job.shortName, " ", job.title, " ", job.speakers), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Widgets_JobCreator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    job: job,
    setShortName: setShortName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Widgets_JobList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardComponent);

/***/ })

})
//# sourceMappingURL=2.7edffe5e1d4c4722d9d2.hot-update.js.map