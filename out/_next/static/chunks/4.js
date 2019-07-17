(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Modal/Share.jsx":
/*!****************************************!*\
  !*** ./src/components/ModalComponent/Share.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/ConnectionProvider.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_widget_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/widget-providers */ "./src/providers/widget-providers.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/index */ "./node_modules/@fortawesome/free-solid-svg-icons/ConnectionProvider.jsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome/index */ "./node_modules/@fortawesome/react-fontawesome/ConnectionProvider.jsx");
/* harmony import */ var _fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_fetchTranscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/fetchTranscript */ "./utils/fetchTranscript.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/src/components/ModalComponent/Share.jsx";






var Share = function Share(_ref) {
  var job = _ref.job,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_widget_context__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "w-full max-w-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu",
      type: "button",
      onClick: function onClick() {
        return Object(_utils_fetchTranscript__WEBPACK_IMPORTED_MODULE_4__["fetchTranscript"])(job, user);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_2__["faFileDownload"],
      className: "pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), "Save Transcription as .txt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome_index__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons_index__WEBPACK_IMPORTED_MODULE_2__["faRetweet"],
      className: "pr-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), "Tweet Link"))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ }),

/***/ "./utils/fetchTranscript.js":
/*!**********************************!*\
  !*** ./utils/fetchTranscript.js ***!
  \**********************************/
/*! exports provided: fetchTranscript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTranscript", function() { return fetchTranscript; });
// Downloads transcripts to txt.
function fetchTranscript(job, user) {
  // Added BOM so that it opens in UTF-8 encoding.
  var BOM = "\uFEFF";
  var fileName = "".concat(job, " (").concat(user, ").txt");
  var node = document.querySelector('.transcript');
  var transcript = BOM + node.textContent;
  var transcriptBlob = new Blob([transcript], {
    type: 'text/plain; charset=utf-8'
  }); // Create a hidden link.

  var downloadLink = document.createElement('a'); // Set the download file name.

  downloadLink.download = fileName; // Text can be anything because it's not shown to the user.

  downloadLink.innerHTML = 'My Hidden Download Link'; // We want to remove the download link once we're done.

  downloadLink.onclick = function (e) {
    return document.body.removeChild(e.target);
  }; // Set the URL to the transcript blob.


  downloadLink.href = window.URL.createObjectURL(transcriptBlob); // Make sure download link is never shown to user.

  downloadLink.style.display = 'none'; // Append it to the document.

  document.body.appendChild(downloadLink); // "Click" on the download link.

  downloadLink.click();
  return transcript;
}



/***/ })

}]);
//# sourceMappingURL=4.js.map