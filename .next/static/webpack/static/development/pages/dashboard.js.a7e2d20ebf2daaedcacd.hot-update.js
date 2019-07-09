webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/index.jsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_helpers_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/helpers/withAuth */ "./src/helpers/withAuth.js");
/* harmony import */ var _src_components_Controls_NavDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Controls/NavDashboard */ "./src/components/Controls/NavDashboard.jsx");

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/dashboard/index.jsx";




var AccountComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/AccountComponent */ "./src/components/DashboardPages/AccountComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/AccountComponent */ "./src/components/DashboardPages/AccountComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/AccountComponent']
  }
});
var DashboardComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/DashboardComponent */ "./src/components/DashboardPages/DashboardComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/DashboardComponent */ "./src/components/DashboardPages/DashboardComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/DashboardComponent']
  }
});
var SettingsComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/SettingsComponent */ "./src/components/DashboardPages/SettingsComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/SettingsComponent */ "./src/components/DashboardPages/SettingsComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/SettingsComponent']
  }
});

var Dashboard = function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var ActiveComponent = function ActiveComponent(number) {
    switch (number) {
      case 0:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashboardComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AccountComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });

      case 2:
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SettingsComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Controls_NavDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setActive: setActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "container mx-auto px-16 py-32 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, ActiveComponent(active)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_helpers_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard));

/***/ }),

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "flex items-center justify-center mb-10 md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logos_NavLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:flex-grow my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faTasks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }),
      title: "Dashboard",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('dashboard');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faUser"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }),
      title: "Account",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('user');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faCog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }),
      title: "Settings",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('settings');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
        lineNumber: 50
      },
      __self: this
    }))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavDashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.a7e2d20ebf2daaedcacd.hot-update.js.map