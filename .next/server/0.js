exports.ids = [0];
exports.modules = {

/***/ "./components/Controls/ButtonGroup.jsx":
/*!*********************************************!*\
  !*** ./components/Controls/ButtonGroup.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/ButtonGroup.jsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.3rem;\n  padding: 1.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject());

var ButtonGroup = function ButtonGroup() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "fixed-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    className: " lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: " fill-current w-4 h-4 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Text Size")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./components/Controls/Modal.jsx":
/*!***************************************!*\
  !*** ./components/Controls/Modal.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/Modal.jsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top: 0.5rem;\n  padding-bottom: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Dynamically loaded components.

var FontComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../Modal/Font */ "./components/Modal/Font.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Modal/Font */ "./components/Modal/Font.jsx")];
    },
    modules: ['../Modal/Font']
  }
});
var TextComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Modal/Text */ "./components/Modal/Text.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Modal/Text */ "./components/Modal/Text.jsx")];
    },
    modules: ['../Modal/Text']
  }
});
var ColorComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../Modal/Color */ "./components/Modal/Color.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Modal/Color */ "./components/Modal/Color.jsx")];
    },
    modules: ['../Modal/Color']
  }
});
var ShareComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../Modal/Share */ "./components/Modal/Share.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Modal/Share */ "./components/Modal/Share.jsx")];
    },
    modules: ['../Modal/Share']
  }
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var Modal = function Modal(_ref) {
  var title = _ref.title,
      user = _ref.user,
      job = _ref.job;
  var modals = {
    color: {
      header: 'Color',
      component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })
    },
    font: {
      header: 'Font',
      component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FontComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })
    },
    share: {
      header: 'Share',
      component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShareComponent, {
        user: user,
        job: job,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })
    },
    text: {
      header: 'Text',
      component: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, modals[title]['header']), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-grow-1 my-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, modals[title]['component']));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/Controls/Nav.jsx":
/*!*************************************!*\
  !*** ./components/Controls/Nav.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Controls */ "./components/Controls/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/widget-context */ "./context/widget-context.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/Nav.jsx";





var icons = {
  colors: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFillDrip"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }),
  lightDarkMode: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAdjust"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  font: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFont"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  fontSize: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTextHeight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  share: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShareAlt"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }),
  text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAlignJustify"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })
};

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex items-center flex-shrink-0 text-white mr-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        width: '2rem',
        margin: '0 1rem'
      },
      src: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMissile%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M11.1 47.3C5.4 50 1.7 54.9 2 62c7.1.4 12-3.4 14.7-9.1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Cpath data-name='layer1' d='M62 2s-13.4-.7-22.6 8.5S8.3 44.4 8.3 44.4l11.3 11.4s24.7-22 33.9-31.2S62 2 62 2z' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Ccircle data-name='layer2' cx='44' cy='20' r='4' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.6 38.5l12 11.9M24.8 26H12.5l-7.7 7.7 11 2.3M37 40.2v12.3l-7.7 7.6L27 49.2'%3E%3C/path%3E%3C/svg%3E",
      alt: "Missile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " font-semibold text-xl tracking-tight md:content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Upword.ly")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "lg:flex-grow my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
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
        lineNumber: 49
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
        lineNumber: 57
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
        lineNumber: 65
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
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
        lineNumber: 75
      },
      __self: this
    }))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Controls/NavButton.jsx":
/*!*******************************************!*\
  !*** ./components/Controls/NavButton.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/NavButton.jsx";



var NavButton = function NavButton(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: onClick,
    className: " inline-block text-md mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border rounded text-teal-200 border-white hover:border-transparent hover:text-bg hover:bg-teal-200 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, icon, title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title) : '');
};

NavButton.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ }),

/***/ "./components/Controls/ScrollButton.jsx":
/*!**********************************************!*\
  !*** ./components/Controls/ScrollButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Controls/ScrollButton.jsx";



var ScrollButton = function ScrollButton(_ref) {
  var click = _ref.click,
      filter = _ref.filter,
      href = _ref.href,
      id = _ref.id,
      path = _ref.path,
      scrolling = _ref.scrolling,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: !scrolling ? 'visible' : 'invisible',
    style: {
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    },
    onClick: click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 52 52",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
    id: filter,
    width: "114.6%",
    height: "114.6%",
    x: "-7.3%",
    y: "-5.2%",
    filterUnits: "objectBoundingBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
    dy: "1",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    in: "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(2 1)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#000",
    filter: "url(#".concat(filter, ")"),
    href: "#".concat(href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "scroll-top-b",
    cx: "24",
    cy: "24",
    r: "24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    href: "#".concat(href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: path,
    className: "stroke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "visually-hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title));
};

ScrollButton.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollButton);

/***/ }),

/***/ "./components/Controls/index.js":
/*!**************************************!*\
  !*** ./components/Controls/index.js ***!
  \**************************************/
/*! exports provided: ButtonGroup, Modal, Nav, NavButton, ScrollButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup */ "./components/Controls/ButtonGroup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./components/Controls/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Controls/Nav.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ "./components/Controls/NavButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavButton", function() { return _NavButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollButton */ "./components/Controls/ScrollButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollButton", function() { return _ScrollButton__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ })

};;
//# sourceMappingURL=0.js.map