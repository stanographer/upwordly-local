webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./src/firebase/db.js":
/*!****************************!*\
  !*** ./src/firebase/db.js ***!
  \****************************/
/*! exports provided: doCreateUser, checkDupeEmail, checkDupeUsername, onceGetUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeEmail", function() { return checkDupeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDupeUsername", function() { return checkDupeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");

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
var onceGetUsers = function onceGetUsers() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').once('value');
};

/***/ })

})
//# sourceMappingURL=signup.js.17ccf5ec9056dba0f8fc.hot-update.js.map