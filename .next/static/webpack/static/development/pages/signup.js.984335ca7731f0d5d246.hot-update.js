webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./src/firebase/auth.js":
/*!******************************!*\
  !*** ./src/firebase/auth.js ***!
  \******************************/
/*! exports provided: doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut, doPasswordReset, doPasswordUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUserWithEmailAndPassword", function() { return doCreateUserWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignInWithEmailAndPassword", function() { return doSignInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordReset", function() { return doPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordUpdate", function() { return doPasswordUpdate; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");

var doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password);
};
var doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password);
};
var doSignOut = function doSignOut() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut();
};
var doPasswordReset = function doPasswordReset(email) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].sendPasswordResetEmail(email);
};
var doPasswordUpdate = function doPasswordUpdate(password) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.updatePassword(password);
};

/***/ })

})
//# sourceMappingURL=signup.js.984335ca7731f0d5d246.hot-update.js.map