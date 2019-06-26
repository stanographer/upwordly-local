webpackHotUpdate(7,{

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
  var fileName = "".concat(job, " (").concat(user, ").txt");
  var node = document.querySelector('.transcript');
  var transcript = unescape(encodeURIComponent(node.textContent));
  var transcriptBlob = new Blob([transcript], {
    type: 'application/json;charset=utf-8',
    encoding: 'UTF-8'
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

})
//# sourceMappingURL=7.535d5e286a82c2ec9fc9.hot-update.js.map