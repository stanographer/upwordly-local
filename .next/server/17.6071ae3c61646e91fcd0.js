exports.ids = [17];
exports.modules = {

/***/ "/9KB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__("WxHd");

// EXTERNAL MODULE: ./src/firebase/db.js
var db = __webpack_require__("9v0S");

// CONCATENATED MODULE: ./src/components/Widgets/JobCreator.jsx







var JobCreator_JobCreator = function JobCreator(_ref) {
  var authUser = _ref.authUser,
      errors = _ref.errors,
      job = _ref.job,
      setShortName = _ref.setShortName,
      setTitleAndSpeakers = _ref.setTitleAndSpeakers,
      uid = _ref.uid;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var copiedLink = function copiedLink() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 1500);
  };

  var errorMessages = errors.map(function (e, i) {
    return external_react_default.a.createElement("p", {
      className: "text-sm text-red-400 mb-4",
      key: i
    }, e);
  });
  return external_react_default.a.createElement("form", {
    className: "w-full lg:w-1/2 px-4",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      Object(db["createJob"])(job, authUser.username, uid);
    }
  }, external_react_default.a.createElement("div", {
    className: "bg-bg2 border-t border-b sm:rounded sm:border shadow"
  }, external_react_default.a.createElement("div", {
    className: "border-b"
  }, external_react_default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px"
  }, external_react_default.a.createElement("h3", {
    className: "text-green-200 py-4 font-normal text-lg"
  }, "Start a Job"), external_react_default.a.createElement("div", {
    className: "flex"
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-blue-dark border-b border-blue-dark mr-3"
  }, "List"), external_react_default.a.createElement("button", {
    type: "button",
    className: "appearance-none py-4 text-grey-dark border-b border-transparent hover:border-grey-dark"
  }, "Chart")))), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "mb-4 px-8 pt-8"
  }, external_react_default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "shortname"
  }, "Shortname (required)"), external_react_default.a.createElement("input", {
    autoFocus: true,
    autoComplete: "off",
    spellCheck: false,
    className: !!errors && errors.length > 0 ? 'border-red-500 bg-red-100 shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-red-2100 text-bg font-mono text-md' : 'shadow-lg bg-orange-200 appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md"',
    id: "shortname",
    name: "shortname",
    type: "shortname",
    placeholder: "(i.e. coachella2019)",
    value: job.shortName || '',
    onChange: function onChange(e) {
      return setShortName(e.target.value);
    },
    required: true
  })), external_react_default.a.createElement("div", {
    className: "mb-4 px-8"
  }, external_react_default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "title"
  }, "Title (optional)"), external_react_default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "title",
    name: "title",
    type: "title",
    placeholder: "(i.e. Spreadsheets IRL: The How and Why)",
    value: job.title || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    }
  })), external_react_default.a.createElement("div", {
    className: "mb-4 px-8"
  }, external_react_default.a.createElement("label", {
    className: "block text-grey-darker text-md text-bold mb-2",
    htmlFor: "speakers"
  }, "Speakers (optional)"), external_react_default.a.createElement("input", {
    autoComplete: "off",
    spellCheck: false,
    className: "shadow-lg appearance-none border rounded w-full py-2 px-3 focus:bg-blue-100 text-bg font-mono text-md",
    id: "speakers",
    name: "speakers",
    type: "speakers",
    placeholder: "(i.e. Christopher Hagan, Stanley Sakai)",
    value: job.speakers || '',
    onChange: function onChange(e) {
      return setTitleAndSpeakers(e.target.name, e.target.value);
    }
  }), !errors.length && job.shortName && job.shortName.length > 0 ? external_react_default.a.createElement(external_react_copy_to_clipboard_["CopyToClipboard"], {
    text: "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName),
    onCopy: function onCopy() {
      return copiedLink();
    }
  }, external_react_default.a.createElement("p", {
    className: copied ? 'underline border py-4 px-4 mt-6 bg-green-200 text-bg2 font-mono break-words cursor-pointer' : 'underline border py-4 px-4 mt-6 text-teal-200 font-mono break-words cursor-pointer'
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "mx-4",
    icon: free_solid_svg_icons_["faClipboard"]
  }), "".concat(document.location.protocol, "//").concat(document.location.host, "/").concat(authUser.username, "/").concat(job.shortName))) : ''), external_react_default.a.createElement("div", {
    className: "text-center px-6 py-4"
  }, !!errors ? errorMessages : '', copied ? external_react_default.a.createElement("p", {
    className: "text-lg text-green-400 mb-4"
  }, "Link copied to clipboard!") : '', external_react_default.a.createElement("div", {
    className: "py-8"
  }, external_react_default.a.createElement("div", {
    className: "mb-4"
  }, external_react_default.a.createElement("button", {
    type: "submit",
    className: "bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-6 py-4"
  }, "Create Job")))))));
};

/* harmony default export */ var Widgets_JobCreator = (JobCreator_JobCreator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/Widgets/JobItem.jsx





var JobItem_JobItem = function JobItem(_ref) {
  var job = _ref.job;

  var location = function location() {
    return "".concat(document.location.protocol, "//").concat(document.location.host, "/editor?user=").concat(job.username, "&job=").concat(job.shortName);
  };

  return external_react_default.a.createElement("div", {
    className: "flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4"
  }, external_react_default.a.createElement("div", {
    className: "w-2/5 xl:w-1/4 px-4 flex items-center"
  }, external_react_default.a.createElement("span", {
    className: "text-md font-mono text-green-200"
  }, job.shortName)), external_react_default.a.createElement("div", {
    className: "hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center"
  }, external_react_default.a.createElement("div", {
    className: "bg-orange h-2 rounded-full flex-grow mr-2"
  }), job.title), external_react_default.a.createElement("div", {
    className: "flex w-3/5 md:w/12"
  }, external_react_default.a.createElement("div", {
    className: "w-1/2 px-4"
  }, external_react_default.a.createElement("div", {
    className: "text-right"
  }, "0.0010 BTC")), external_react_default.a.createElement("div", {
    className: "w-1/2 px-4"
  }, external_react_default.a.createElement(link_default.a, {
    href: location(),
    prefetch: true
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: "bg-blue hover:bg-blue-dark text-white border border-blue-dark rounded px-4 py-2"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faPlay"]
  }))))));
};

/* harmony default export */ var Widgets_JobItem = (JobItem_JobItem);
// CONCATENATED MODULE: ./src/components/Widgets/JobsNull.jsx


var JobsNull_JobsNull = function JobsNull() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "text-center px-6 py-20"
  }, external_react_default.a.createElement("div", {
    className: "py-8"
  }, external_react_default.a.createElement("div", {
    className: "mb-4"
  }, external_react_default.a.createElement("svg", {
    className: "inline-block fill-current text-grey h-16 w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, external_react_default.a.createElement("path", {
    d: "M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"
  }))), external_react_default.a.createElement("p", {
    className: "text-2xl text-grey-darker font-medium mb-4"
  }, "You don't have any jobs yet!"), external_react_default.a.createElement("p", {
    className: "text-grey max-w-xs mx-auto mb-6"
  }, "When you start creating jobs, they will show up here."))));
};

/* harmony default export */ var Widgets_JobsNull = (JobsNull_JobsNull);
// CONCATENATED MODULE: ./src/components/Widgets/JobList.jsx





var JobList_JobList = function JobList(_ref) {
  var jobList = _ref.jobList;
  console.log('jobList', jobList);
  return external_react_default.a.createElement("div", {
    className: "w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col"
  }, external_react_default.a.createElement("div", {
    className: "flex-grow flex flex-col bg-bg2 border-t border-b sm:rounded sm:border shadow overflow-hidden"
  }, external_react_default.a.createElement("div", {
    className: "border-b"
  }, external_react_default.a.createElement("div", {
    className: "flex justify-between px-6 -mb-px"
  }, external_react_default.a.createElement("h3", {
    className: "text-red-200 py-4 font-normal text-lg"
  }, "Your Jobs"))), jobList ? keys_default()(jobList).map(function (key) {
    return external_react_default.a.createElement(Widgets_JobItem, {
      key: key,
      job: jobList[key]
    });
  }) : external_react_default.a.createElement(Widgets_JobsNull, null)));
};

/* harmony default export */ var Widgets_JobList = (JobList_JobList);
// EXTERNAL MODULE: external "react-typed"
var external_react_typed_ = __webpack_require__("oG96");
var external_react_typed_default = /*#__PURE__*/__webpack_require__.n(external_react_typed_);

// CONCATENATED MODULE: ./src/components/DashboardPages/DashboardComponent.jsx









var DashboardComponent_DashboardComponent = function DashboardComponent(_ref) {
  var user = _ref.user;
  console.log('dashboard props', user.uid);

  var _useState = Object(external_react_["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      authUser = _useState2[0],
      setAuthUser = _useState2[1];

  var _useState3 = Object(external_react_["useState"])({}),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      jobList = _useState4[0],
      setJobList = _useState4[1];

  var _useState5 = Object(external_react_["useState"])({}),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      job = _useState6[0],
      setJob = _useState6[1];

  var _useState7 = Object(external_react_["useState"])([]),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      errors = _useState8[0],
      setErrors = _useState8[1];

  var loadUser = function loadUser(user) {
    setAuthUser(user);
    console.log('username', user.username);
    Object(db["getAllJobsByUser"])(user.username, function (jobs) {
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

    setJob(Object(objectSpread["a" /* default */])({}, job, Object(defineProperty["a" /* default */])({}, key, val)));
  };

  Object(external_react_["useEffect"])(function () {
    try {
      Object(db["getUser"])(user.uid, loadUser);
    } catch (err) {
      console.error('error', err);
    }
  }, []);
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("p", {
    className: "font-apercu text-5xl"
  }, "Dashboard"), external_react_default.a.createElement(external_react_typed_default.a, {
    className: "marquee text-teal-200",
    strings: ["Welcome to your control center."],
    typeSpeed: 40
  }), authUser ? external_react_default.a.createElement("p", {
    className: "pt-4 pb-2 text-green-200"
  }, "Logged in as ", authUser.fullName) : '', external_react_default.a.createElement("div", {
    className: "flex flex-wrap -mx-4 my-10"
  }, external_react_default.a.createElement(Widgets_JobCreator, {
    authUser: authUser,
    errors: errors,
    job: job,
    setShortName: setShortName,
    setTitleAndSpeakers: setTitleAndSpeakers,
    uid: user.uid
  }), external_react_default.a.createElement(Widgets_JobList, {
    jobList: jobList
  })));
};

/* harmony default export */ var DashboardPages_DashboardComponent = __webpack_exports__["default"] = (DashboardComponent_DashboardComponent);

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("Tit0"));

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "9v0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeEmail", function() { return checkDupeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeUsername", function() { return checkDupeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUser", function() { return findUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJob", function() { return createJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeJob", function() { return checkDupeJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllJobsByUser", function() { return getAllJobsByUser; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("USR9");
 // User methods ===========================================================

var doCreateUser = function doCreateUser(email, fullName, location, id, payment, token, username) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref("users/".concat(id)).set({
    email: email,
    fullName: fullName,
    location: location,
    payment: payment,
    token: token,
    username: username
  });
};
var checkDupeEmail = function checkDupeEmail(email, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('users').orderByChild('email').equalTo(email).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var checkDupeUsername = function checkDupeUsername(username, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('users').orderByChild('username').equalTo(username).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var getUser = function getUser(uid, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref("users/".concat(uid)).once('value', function (snapshot) {
    cb(snapshot.val());
  })["catch"](function (err) {
    cb(err);
  });
};
var findUser = function findUser(username) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('users').orderByChild('username').equalTo(username);
};
var onceGetUsers = function onceGetUsers() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('users').once('value');
}; // Job methods ===========================================================

var createJob = function createJob(job, user, uid) {
  var newJob = {
    createdTime: new Date().toUTCString(),
    completedTime: '',
    locked: false,
    shortName: job.shortName.trim().toLowerCase(),
    speakers: !!job.speakers && job.speakers.trim(),
    started: null,
    title: !!job.title && job.title.trim(),
    username: user
  };
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('jobs').push(newJob).then(function (job) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref("users/".concat(uid, "/jobs")).push({
      key: job.key,
      shortName: newJob.shortName
    });
  });
};
var checkDupeJob = function checkDupeJob(shortName, user, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('jobs').orderByChild('shortName').equalTo(shortName).once('value', function (snapshot) {
    if (!snapshot.val()) {
      cb();
    } else if (snapshot.val().username === user) {
      return new Error('That job by that user already exists.');
    }
  })["catch"](function (err) {
    return err;
  });
};
var getAllJobsByUser = function getAllJobsByUser(user, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__[/* db */ "b"].ref('jobs').orderByChild('username').equalTo(user).once('value', function (snapshot) {
    cb(snapshot.val());
  })["catch"](function (err) {
    return err;
  });
};

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("Tit0"));

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "mgRA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _construct2 = _interopRequireDefault2(__webpack_require__("mgRA"));

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireDefault(__webpack_require__("qxCs"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

};;