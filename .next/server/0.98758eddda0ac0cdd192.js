exports.ids = [0,1];
exports.modules = {

/***/ "/KRb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NavLogo = function NavLogo(_ref) {
  var center = _ref.center;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: center ? 'flex items-center flex-shrink-0 text-white mr-6 justify-center' : 'flex items-center flex-shrink-0 text-white mr-6'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: '2rem',
      margin: '0 1rem'
    },
    src: "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EMissile%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M11.1 47.3C5.4 50 1.7 54.9 2 62c7.1.4 12-3.4 14.7-9.1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Cpath data-name='layer1' d='M62 2s-13.4-.7-22.6 8.5S8.3 44.4 8.3 44.4l11.3 11.4s24.7-22 33.9-31.2S62 2 62 2z' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/path%3E%3Ccircle data-name='layer2' cx='44' cy='20' r='4' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23dfff5e' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.6 38.5l12 11.9M24.8 26H12.5l-7.7 7.7 11 2.3M37 40.2v12.3l-7.7 7.6L27 49.2'%3E%3C/path%3E%3C/svg%3E",
    alt: "Missile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-semibold text-xl tracking-tight md:content-center"
  }, "Upword.ly"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLogo);

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "rSNO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Controls/ButtonGroup.jsx


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.3rem;\n  padding: 1.2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Button = external_styled_components_default.a.button(_templateObject());

var ButtonGroup_ButtonGroup = function ButtonGroup() {
  return external_react_default.a.createElement("div", {
    className: "fixed-center"
  }, external_react_default.a.createElement(Button, {
    className: " lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
  }, external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    className: " fill-current w-4 h-4 mr-2"
  }, external_react_default.a.createElement("path", {
    d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
  })), external_react_default.a.createElement("span", null, "Text Size")), external_react_default.a.createElement(Button, {
    className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
  }, "Next"));
};

/* harmony default export */ var Controls_ButtonGroup = (ButtonGroup_ButtonGroup);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./src/components/Controls/Modal.jsx


function Modal_templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 0.5rem;\n  padding-bottom: 2rem;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n"]);

  Modal_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // Dynamically loaded components.

var FontComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, "PO9b"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("PO9b")];
    },
    modules: ['../Modal/Font']
  }
});
var TextComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "xF/O"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("xF/O")];
    },
    modules: ['../Modal/Text']
  }
});
var ColorComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "ZTiS"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("ZTiS")];
    },
    modules: ['../Modal/Color']
  }
});
var ShareComponent = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, "bWNw"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/("bWNw")];
    },
    modules: ['../Modal/Share']
  }
});
var Title = external_styled_components_default.a.div(Modal_templateObject());

var Modal_Modal = function Modal(_ref) {
  var title = _ref.title,
      user = _ref.user,
      job = _ref.job;
  var modals = {
    color: {
      header: 'Color',
      component: external_react_default.a.createElement(ColorComponent, null)
    },
    font: {
      header: 'Font',
      component: external_react_default.a.createElement(FontComponent, null)
    },
    share: {
      header: 'Share',
      component: external_react_default.a.createElement(ShareComponent, {
        user: user,
        job: job
      })
    },
    text: {
      header: 'Text',
      component: external_react_default.a.createElement(TextComponent, null)
    }
  };
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Title, null, modals[title]['header']), external_react_default.a.createElement("div", {
    className: "flex flex-grow-1 my-8"
  }, modals[title]['component']));
};

/* harmony default export */ var Controls_Modal = (Modal_Modal);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome/index"
var index_ = __webpack_require__("nybN");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/index"
var free_solid_svg_icons_index_ = __webpack_require__("epl9");

// CONCATENATED MODULE: ./src/components/Controls/ModalCloseButton.jsx




var ModalCloseButton_ModalCloseButton = function ModalCloseButton(_ref) {
  var context = _ref.context,
      label = _ref.label;
  return external_react_default.a.createElement("button", {
    className: "block border rounded text-pink-200 border-pink-200 bg-bg2 hover:border-transparent hover:text-bg2 hover:bg-pink-200 hover:border-pink-200 text-lg mt-4 mx-2 px-3 py-2 font-apercu",
    type: "button",
    onClick: function onClick() {
      return context.closeWidget();
    }
  }, external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faTimesCircle"],
    className: "pr-2"
  }), label);
};

/* harmony default export */ var Controls_ModalCloseButton = (ModalCloseButton_ModalCloseButton);
// CONCATENATED MODULE: ./src/components/Controls/ModalSaveButton.jsx




var ModalSaveButton_ModalSaveButton = function ModalSaveButton(_ref) {
  var context = _ref.context,
      label = _ref.label;
  return external_react_default.a.createElement("button", {
    className: "block border rounded text-teal-200 border-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-8 mx-2 px-3 py-2 font-apercu",
    type: "button",
    onClick: function onClick() {
      return context.setSettings();
    }
  }, external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faSave"],
    className: "pr-2"
  }), label);
};

/* harmony default export */ var Controls_ModalSaveButton = (ModalSaveButton_ModalSaveButton);
// EXTERNAL MODULE: ./src/context/widget-context.js
var widget_context = __webpack_require__("BOKN");

// EXTERNAL MODULE: ./src/components/Logos/NavLogo.jsx
var NavLogo = __webpack_require__("/KRb");

// CONCATENATED MODULE: ./src/components/Controls/Nav.jsx






var icons = {
  colors: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faFillDrip"]
  }),
  lightDarkMode: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faAdjust"]
  }),
  font: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faFont"]
  }),
  fontSize: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faTextHeight"]
  }),
  share: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faShareAlt"]
  }),
  text: external_react_default.a.createElement(index_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_index_["faAlignJustify"]
  })
};

var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(widget_context["a" /* default */].Consumer, null, function (context) {
    return external_react_default.a.createElement("nav", {
      className: "flex items-center justify-center md:justify-between flex-wrap bg-bg px-1 py-4 md:py-6 sticky"
    }, external_react_default.a.createElement(NavLogo["default"], null), external_react_default.a.createElement("div", {
      className: " flex w-full flex-grow content-center justify-center md:w-1/2 md:content-left md:justify-start tab"
    }, external_react_default.a.createElement("div", {
      className: "lg:flex-grow my-2"
    }, external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.font,
      title: "Font",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('font');
      }
    }), external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.text,
      title: "Text",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('text');
      }
    }), external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.colors,
      title: "Colors",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('color');
      }
    })), external_react_default.a.createElement("div", {
      className: "my-2"
    }, external_react_default.a.createElement(Controls_NavButton, {
      icon: icons.share,
      title: "Share",
      onClick: function onClick(e) {
        e.preventDefault();
        context.openWidget('share');
      }
    }))));
  });
};

/* harmony default export */ var Controls_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./src/components/Controls/NavButton.jsx


var NavButton_NavButton = function NavButton(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      onClick = _ref.onClick;
  return external_react_default.a.createElement("a", {
    href: "#",
    onClick: onClick,
    className: " inline-block text-md mt-2 mx-0 px-3 py-2 sm:px-4 sm:py-2 md:mx-3 md:mt-1 lg:mt-0 leading-none border-none rounded text-teal-200 border-white hover:border-transparent hover:text-bg hover:bg-teal-200 "
  }, icon, title ? external_react_default.a.createElement("span", {
    className: "ml-2"
  }, title) : '');
};

/* harmony default export */ var Controls_NavButton = (NavButton_NavButton);
// CONCATENATED MODULE: ./src/components/Controls/ScrollButton.jsx


var ScrollButton_ScrollButton = function ScrollButton(_ref) {
  var click = _ref.click,
      filter = _ref.filter,
      href = _ref.href,
      id = _ref.id,
      path = _ref.path,
      scrolling = _ref.scrolling,
      title = _ref.title;
  return external_react_default.a.createElement("span", {
    className: !scrolling ? 'visible' : 'invisible',
    style: {
      transform: 'matrix(1, 0, 0, 1, 0, 0)'
    },
    onClick: click
  }, external_react_default.a.createElement("i", {
    className: "icon"
  }, external_react_default.a.createElement("svg", {
    viewBox: "0 0 52 52",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, external_react_default.a.createElement("defs", null, external_react_default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24"
  }), external_react_default.a.createElement("filter", {
    id: filter,
    width: "114.6%",
    height: "114.6%",
    x: "-7.3%",
    y: "-5.2%",
    filterUnits: "objectBoundingBox"
  }, external_react_default.a.createElement("feOffset", {
    dy: "1",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), external_react_default.a.createElement("feGaussianBlur", {
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "1"
  }), external_react_default.a.createElement("feColorMatrix", {
    "in": "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.137256567 0"
  }))), external_react_default.a.createElement("g", {
    fill: "none",
    fillRule: "nonzero"
  }, external_react_default.a.createElement("g", {
    transform: "translate(2 1)"
  }, external_react_default.a.createElement("use", {
    fill: "#000",
    filter: "url(#".concat(filter, ")"),
    href: "#".concat(href)
  }, external_react_default.a.createElement("circle", {
    id: "scroll-top-b",
    cx: "24",
    cy: "24",
    r: "24"
  })), external_react_default.a.createElement("use", {
    fill: "#fff",
    href: "#".concat(href)
  }, external_react_default.a.createElement("circle", {
    id: id,
    cx: "24",
    cy: "24",
    r: "24",
    fill: "#fff"
  }))), external_react_default.a.createElement("path", {
    d: path,
    className: "stroke"
  })))), external_react_default.a.createElement("span", {
    className: "visually-hidden"
  }, title));
};

/* harmony default export */ var Controls_ScrollButton = (ScrollButton_ScrollButton);
// CONCATENATED MODULE: ./src/components/Controls/index.js
/* concated harmony reexport ButtonGroup */__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return Controls_ButtonGroup; });
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "Modal", function() { return Controls_Modal; });
/* concated harmony reexport ModalCloseButton */__webpack_require__.d(__webpack_exports__, "ModalCloseButton", function() { return Controls_ModalCloseButton; });
/* concated harmony reexport ModalSaveButton */__webpack_require__.d(__webpack_exports__, "ModalSaveButton", function() { return Controls_ModalSaveButton; });
/* concated harmony reexport Nav */__webpack_require__.d(__webpack_exports__, "Nav", function() { return Controls_Nav; });
/* concated harmony reexport NavButton */__webpack_require__.d(__webpack_exports__, "NavButton", function() { return Controls_NavButton; });
/* concated harmony reexport ScrollButton */__webpack_require__.d(__webpack_exports__, "ScrollButton", function() { return Controls_ScrollButton; });








/***/ })

};;