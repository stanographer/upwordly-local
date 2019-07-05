webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./src/firebase/index.js":
/*!*******************************!*\
  !*** ./src/firebase/index.js ***!
  \*******************************/
/*! exports provided: firebase, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
// import firebase from 'firebase/index';
// import 'firebase/empty-import';
 // import auth from 'firebase/auth';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
var firebase = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var auth = firebase.auth();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=dashboard.js.274c78c5bd1bec88580b.hot-update.js.map