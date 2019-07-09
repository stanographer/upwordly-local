webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/index.jsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_helpers_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/helpers/withAuth */ "./src/helpers/withAuth.js");
/* harmony import */ var _src_components_Controls_NavDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/Controls/NavDashboard */ "./src/components/Controls/NavDashboard.jsx");


var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/pages/dashboard/index.jsx";




var AccountComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/AccountComponent */ "./src/components/DashboardPages/AccountComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/AccountComponent */ "./src/components/DashboardPages/AccountComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/AccountComponent']
  }
});
var DashboardComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/DashboardComponent */ "./src/components/DashboardPages/DashboardComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/DashboardComponent */ "./src/components/DashboardPages/DashboardComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/DashboardComponent']
  }
});
var SettingsComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../src/components/DashboardPages/SettingsComponent */ "./src/components/DashboardPages/SettingsComponent.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../src/components/DashboardPages/SettingsComponent */ "./src/components/DashboardPages/SettingsComponent.jsx")];
    },
    modules: ['../../src/components/DashboardPages/SettingsComponent']
  }
});

var Dashboard = function Dashboard(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  console.log(props); // Switches the active component based on the number.

  var ActiveComponent = function ActiveComponent(number) {
    switch (number) {
      case 0:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DashboardComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AccountComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });

      case 2:
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SettingsComponent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components_Controls_NavDashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    active: active,
    setActive: setActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "container mx-auto px-16 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, ActiveComponent(active)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_helpers_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard));

/***/ })

})
//# sourceMappingURL=dashboard.js.5c1caaba0893e591b588.hot-update.js.map