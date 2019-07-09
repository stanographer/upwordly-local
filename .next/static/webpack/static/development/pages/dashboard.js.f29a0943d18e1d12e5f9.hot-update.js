webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/components/Controls/NavDashboard.jsx":
/*!**************************************************!*\
  !*** ./src/components/Controls/NavDashboard.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/components/Controls/index.js");
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome/index */ "./node_modules/@fortawesome/react-fontawesome/index.js");
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/index */ "./node_modules/@fortawesome/free-solid-svg-icons/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/widget-context */ "./src/context/widget-context.js");
/* harmony import */ var _Logos_NavLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logos/NavLogo */ "./src/components/Logos/NavLogo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/auth */ "./src/firebase/auth.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/Controls/NavDashboard.jsx";










var NavDashboard = function NavDashboard(_ref) {
  var setActive = _ref.setActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logos_NavLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex-grow my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faTasks"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    title: "Dashboard",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faUser"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }),
    title: "Account",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faCog"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }),
    title: "Settings",
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }),
    title: "Sign out",
    onClick: function onClick(e) {
      e.preventDefault();
      Object(_firebase_auth__WEBPACK_IMPORTED_MODULE_7__["doSignOut"])().then(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(_constants_routes__WEBPACK_IMPORTED_MODULE_8__["SIGN_IN"]);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavDashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.f29a0943d18e1d12e5f9.hot-update.js.map