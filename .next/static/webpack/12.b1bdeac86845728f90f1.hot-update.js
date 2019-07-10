webpackHotUpdate(12,{

/***/ "./src/firebase/db.js":
/*!****************************!*\
  !*** ./src/firebase/db.js ***!
  \****************************/
/*! exports provided: doCreateUser, checkDupeEmail, checkDupeUsername, getUser, findUser, onceGetUsers, createJob, checkDupeJob, getAllJobsByUser */
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
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase */ "./src/firebase/firebase.js");
 // User methods ===========================================================

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
var findUser = function findUser(username) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').orderByChild('username').equalTo(username);
};
var onceGetUsers = function onceGetUsers() {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('users').once('value');
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
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('jobs').push(newJob).then(function (job) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(uid, "/jobs")).push({
      key: job.key,
      shortName: newJob.shortName
    });
  });
};
var checkDupeJob = function checkDupeJob(shortName, user, cb) {
  _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref('jobs').orderByChild('shortName').equalTo(shortName).once('value', function (snapshot) {
    if (!snapshot.val()) {
      cb();
    } else if (snapshot.val().username === user) {
      return new Error('That job by that user already exists.');
    }
  })["catch"](function (err) {
    return err;
  });
};
var getAllJobsByUser = function getAllJobsByUser(uid, cb) {
  return _firebase__WEBPACK_IMPORTED_MODULE_0__["db"].ref("users/".concat(uid)).orderByChild('jobs').on('value', function (snapshot) {
    return cb(snapshot.val());
  });
};

/***/ })

})
//# sourceMappingURL=12.b1bdeac86845728f90f1.hot-update.js.map