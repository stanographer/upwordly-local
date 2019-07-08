webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Controls/NavDashboard.jsx":
/*!**********************************************!*\
  !*** ./components/Controls/NavDashboard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Controls */ "./components/Controls/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");
/* harmony import */ var _Logos_NavLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logos/NavLogo */ "./components/Logos/NavLogo.jsx");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/NavDashboard.jsx";






var icons = {
  colors: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFillDrip"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  lightDarkMode: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAdjust"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  font: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFont"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  fontSize: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTextHeight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }),
  share: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShareAlt"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }),
  text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAlignJustify"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })
};

var NavDashboard = function NavDashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logos_NavLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:flex-grow my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: icons.font,
      title: "Font",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('font');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: icons.text,
      title: "Text",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('text');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: icons.colors,
      title: "Colors",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('color');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Controls__WEBPACK_IMPORTED_MODULE_1__["NavButton"], {
      icon: icons.share,
      title: "Share",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('share');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavDashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.0ccf27564819508c3d28.hot-update.js.map