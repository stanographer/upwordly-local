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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "container mx-auto px-16 py-32 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, ActiveComponent(active)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_helpers_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard));

/***/ })

})
//# sourceMappingURL=dashboard.js.d2f8d2f758d68681c36e.hot-update.js.map