exports.ids = [29];
exports.modules = {

/***/ "bWNw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/context/widget-context.js
var widget_context = __webpack_require__("BOKN");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons/index"
var index_ = __webpack_require__("epl9");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome/index"
var react_fontawesome_index_ = __webpack_require__("nybN");

// CONCATENATED MODULE: ./utils/fetchTranscript.js
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


// CONCATENATED MODULE: ./src/components/Modal/Share.jsx






var Share_Share = function Share(_ref) {
  var job = _ref.job,
      user = _ref.user;
  return external_react_default.a.createElement(widget_context["a" /* default */].Consumer, null, function (context) {
    return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("form", {
      className: "w-full max-w-sm"
    }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
      className: "border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu",
      type: "button",
      onClick: function onClick() {
        return fetchTranscript(job, user);
      }
    }, external_react_default.a.createElement(react_fontawesome_index_["FontAwesomeIcon"], {
      icon: index_["faFileDownload"],
      className: "pr-2"
    }), "Save Transcription as .txt")), external_react_default.a.createElement("div", {
      className: "mt-4"
    }, external_react_default.a.createElement("button", {
      className: "border rounded text-teal-200 bg-bg2 border-bg2 hover:border-transparent hover:text-bg hover:bg-teal-200 hover:border-teal-200 text-lg mt-2 mx-0 px-3 py-2 font-apercu",
      type: "button"
    }, external_react_default.a.createElement(react_fontawesome_index_["FontAwesomeIcon"], {
      icon: index_["faRetweet"],
      className: "pr-2"
    }), "Tweet Link"))));
  });
};

/* harmony default export */ var Modal_Share = __webpack_exports__["default"] = (Share_Share);

/***/ })

};;