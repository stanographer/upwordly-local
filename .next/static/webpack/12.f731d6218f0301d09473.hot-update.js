webpackHotUpdate(12,{

/***/ "./src/firebase/db.js":
/*!****************************!*\
  !*** ./src/firebase/db.js ***!
  \****************************/
/*! exports provided: doCreateUser, checkDupeEmail, checkDupeUsername, getUser, onceGetUsers, checkDupeJob, createJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeEmail", function() { return checkDupeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeUsername", function() { return checkDupeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeJob", function() { return checkDupeJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJob", function() { return createJob; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
 // User methods.

var doCreateUser = function doCreateUser(email, fullName, location, id, payment, token, username) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(id)).set({
    email: email,
    fullName: fullName,
    location: location,
    payment: payment,
    token: token,
    username: username
  });
};
var checkDupeEmail = function checkDupeEmail(email, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').orderByChild('email').equalTo(email).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var checkDupeUsername = function checkDupeUsername(username, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').orderByChild('username').equalTo(username).on('value', function (snapshot) {
    cb(!!snapshot.val());
  });
};
var getUser = function getUser(uid, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(uid)).once('value', function (snapshot) {
    cb(snapshot.val());
  })["catch"](function (err) {
    cb(err);
  });
};
var onceGetUsers = function onceGetUsers() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').once('value');
}; // Job methods.

var checkDupeJob = function checkDupeJob(shortName, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('jobs').orderByChild('shortName').equalTo(shortName).once('value', function (snapshot) {
    cb(snapshot.val());
  });
};
var createJob = function createJob() {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('jobs');
};

/***/ }),

/***/ "./src/firebase/index.js":
/*!*******************************!*\
  !*** ./src/firebase/index.js ***!
  \*******************************/
/*! exports provided: auth, db, Firebase, FirebaseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/firebase/auth.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./src/firebase/db.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "db", function() { return _db__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Firebase", function() { return _firebase__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/firebase/context.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "FirebaseContext", function() { return _context__WEBPACK_IMPORTED_MODULE_3__; });






/***/ })

})
//# sourceMappingURL=12.f731d6218f0301d09473.hot-update.js.map