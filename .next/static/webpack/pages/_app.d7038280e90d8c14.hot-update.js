"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/styles.css":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/styles.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(//fonts.googleapis.com/css?family=Lato:300:400);\\r\\n\\r\\n.scrollable-div {\\r\\n  overflow-x: auto; /* Enable horizontal scrolling */\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  white-space: nowrap; /* Prevent text from wrapping */\\r\\n  overflow: hidden; /* Hide any overflowing text */\\r\\n  text-overflow: ellipsis; /* Add ellipsis (...) for truncated text */\\r\\n}\\r\\n\\r\\n.header-gradient {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  position: relative;\\r\\n  background: linear-gradient(60deg,\\r\\n      rgba(84, 58, 183, 1) 0%,\\r\\n      rgba(84, 58, 183, 1) 8.33%,\\r\\n      rgba(70, 85, 184, 1) 16.66%,\\r\\n      rgba(70, 85, 184, 1) 8.33%,\\r\\n      rgba(56, 112, 185, 1) 16.66%,\\r\\n      rgba(56, 112, 185, 1) 25%,\\r\\n      rgba(42, 139, 186, 1) 25%,\\r\\n      rgba(42, 139, 186, 1) 33.33%,\\r\\n      rgba(28, 166, 187, 1) 33.33%,\\r\\n      rgba(28, 166, 187, 1) 41.66%,\\r\\n      rgba(14, 193, 188, 1) 41.66%,\\r\\n      rgba(14, 193, 188, 1) 50%,\\r\\n      rgba(0, 220, 189, 1) 50%,\\r\\n      rgba(0, 220, 189, 1) 58.33%,\\r\\n      rgba(0, 196, 191, 1) 58.33%,\\r\\n      rgba(0, 196, 191, 1) 66.66%,\\r\\n      rgba(0, 172, 193, 1) 66.66%,\\r\\n      rgba(0, 172, 193, 1) 75%,\\r\\n      rgba(0, 148, 195, 1) 75%,\\r\\n      rgba(0, 148, 195, 1) 83.33%,\\r\\n      rgba(0, 124, 197, 1) 83.33%,\\r\\n      rgba(0, 124, 197, 1) 91.66%,\\r\\n      rgba(0, 100, 199, 1) 91.66%,\\r\\n      rgba(0, 100, 199, 1) 100%);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.waves {\\r\\n  position: absolute;\\r\\n  top: 80%;\\r\\n  width: 100%;\\r\\n  height: 20vh;\\r\\n  margin-bottom: -7px;\\r\\n  /*Fix for safari gap*/\\r\\n  min-height: 100px;\\r\\n  max-height: 150px;\\r\\n}\\r\\n\\r\\n/* Animation */\\r\\n\\r\\n.parallax>use {\\r\\n  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(1) {\\r\\n  animation-delay: -2s;\\r\\n  animation-duration: 7s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(2) {\\r\\n  animation-delay: -3s;\\r\\n  animation-duration: 10s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(3) {\\r\\n  animation-delay: -4s;\\r\\n  animation-duration: 13s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(4) {\\r\\n  animation-delay: -5s;\\r\\n  animation-duration: 20s;\\r\\n}\\r\\n\\r\\n@keyframes move-forever {\\r\\n  0% {\\r\\n    transform: translate3d(-90px, 0, 0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translate3d(85px, 0, 0);\\r\\n  }\\r\\n}\\r\\n\\r\\n/*Shrinking for mobile*/\\r\\n@media (max-width: 768px) {\\r\\n  .waves {\\r\\n    height: 40px;\\r\\n    min-height: 40px;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    height: 30vh;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,2DAA2D;;AAE3D;EACE,gBAAgB,EAAE,gCAAgC;EAClD,gBAAgB;AAClB;;AAEA;EACE,mBAAmB,EAAE,+BAA+B;EACpD,gBAAgB,EAAE,8BAA8B;EAChD,uBAAuB,EAAE,0CAA0C;AACrE;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB;;;;;;;;;;;;;;;;;;;;;;;;gCAwB8B;EAC9B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,cAAc;;AAEd;EACE,mEAAmE;AACrE;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE;IACE,mCAAmC;EACrC;;EAEA;IACE,kCAAkC;EACpC;AACF;;AAEA,uBAAuB;AACvB;EACE;IACE,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;AACF\",\"sourcesContent\":[\"@import url(//fonts.googleapis.com/css?family=Lato:300:400);\\r\\n\\r\\n.scrollable-div {\\r\\n  overflow-x: auto; /* Enable horizontal scrolling */\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n  white-space: nowrap; /* Prevent text from wrapping */\\r\\n  overflow: hidden; /* Hide any overflowing text */\\r\\n  text-overflow: ellipsis; /* Add ellipsis (...) for truncated text */\\r\\n}\\r\\n\\r\\n.header-gradient {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n  position: relative;\\r\\n  background: linear-gradient(60deg,\\r\\n      rgba(84, 58, 183, 1) 0%,\\r\\n      rgba(84, 58, 183, 1) 8.33%,\\r\\n      rgba(70, 85, 184, 1) 16.66%,\\r\\n      rgba(70, 85, 184, 1) 8.33%,\\r\\n      rgba(56, 112, 185, 1) 16.66%,\\r\\n      rgba(56, 112, 185, 1) 25%,\\r\\n      rgba(42, 139, 186, 1) 25%,\\r\\n      rgba(42, 139, 186, 1) 33.33%,\\r\\n      rgba(28, 166, 187, 1) 33.33%,\\r\\n      rgba(28, 166, 187, 1) 41.66%,\\r\\n      rgba(14, 193, 188, 1) 41.66%,\\r\\n      rgba(14, 193, 188, 1) 50%,\\r\\n      rgba(0, 220, 189, 1) 50%,\\r\\n      rgba(0, 220, 189, 1) 58.33%,\\r\\n      rgba(0, 196, 191, 1) 58.33%,\\r\\n      rgba(0, 196, 191, 1) 66.66%,\\r\\n      rgba(0, 172, 193, 1) 66.66%,\\r\\n      rgba(0, 172, 193, 1) 75%,\\r\\n      rgba(0, 148, 195, 1) 75%,\\r\\n      rgba(0, 148, 195, 1) 83.33%,\\r\\n      rgba(0, 124, 197, 1) 83.33%,\\r\\n      rgba(0, 124, 197, 1) 91.66%,\\r\\n      rgba(0, 100, 199, 1) 91.66%,\\r\\n      rgba(0, 100, 199, 1) 100%);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.waves {\\r\\n  position: absolute;\\r\\n  top: 80%;\\r\\n  width: 100%;\\r\\n  height: 20vh;\\r\\n  margin-bottom: -7px;\\r\\n  /*Fix for safari gap*/\\r\\n  min-height: 100px;\\r\\n  max-height: 150px;\\r\\n}\\r\\n\\r\\n/* Animation */\\r\\n\\r\\n.parallax>use {\\r\\n  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(1) {\\r\\n  animation-delay: -2s;\\r\\n  animation-duration: 7s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(2) {\\r\\n  animation-delay: -3s;\\r\\n  animation-duration: 10s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(3) {\\r\\n  animation-delay: -4s;\\r\\n  animation-duration: 13s;\\r\\n}\\r\\n\\r\\n.parallax>use:nth-child(4) {\\r\\n  animation-delay: -5s;\\r\\n  animation-duration: 20s;\\r\\n}\\r\\n\\r\\n@keyframes move-forever {\\r\\n  0% {\\r\\n    transform: translate3d(-90px, 0, 0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translate3d(85px, 0, 0);\\r\\n  }\\r\\n}\\r\\n\\r\\n/*Shrinking for mobile*/\\r\\n@media (max-width: 768px) {\\r\\n  .waves {\\r\\n    height: 40px;\\r\\n    min-height: 40px;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    height: 30vh;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHNHQUFzRyx5QkFBeUIsd0JBQXdCLHdEQUF3RCxLQUFLLG9CQUFvQiwyQkFBMkIsd0RBQXdELDhEQUE4RCxnREFBZ0QsMEJBQTBCLHNDQUFzQyx5QkFBeUIsdTZCQUF1NkIsbUJBQW1CLEtBQUssZ0JBQWdCLHlCQUF5QixlQUFlLGtCQUFrQixtQkFBbUIsMEJBQTBCLG9EQUFvRCx3QkFBd0IsS0FBSyw4Q0FBOEMsMEVBQTBFLEtBQUssb0NBQW9DLDJCQUEyQiw2QkFBNkIsS0FBSyxvQ0FBb0MsMkJBQTJCLDhCQUE4QixLQUFLLG9DQUFvQywyQkFBMkIsOEJBQThCLEtBQUssb0NBQW9DLDJCQUEyQiw4QkFBOEIsS0FBSyxpQ0FBaUMsVUFBVSw0Q0FBNEMsT0FBTyxnQkFBZ0IsMkNBQTJDLE9BQU8sS0FBSywrREFBK0QsY0FBYyxxQkFBcUIseUJBQXlCLE9BQU8sb0JBQW9CLHFCQUFxQixPQUFPLGNBQWMsd0JBQXdCLE9BQU8sS0FBSyxPQUFPLDBGQUEwRixNQUFNLHdCQUF3QixhQUFhLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssWUFBWSxhQUFhLDZCQUE2QixRQUFRLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0scUZBQXFGLHlCQUF5Qix3QkFBd0Isd0RBQXdELEtBQUssb0JBQW9CLDJCQUEyQix3REFBd0QsOERBQThELGdEQUFnRCwwQkFBMEIsc0NBQXNDLHlCQUF5Qix1NkJBQXU2QixtQkFBbUIsS0FBSyxnQkFBZ0IseUJBQXlCLGVBQWUsa0JBQWtCLG1CQUFtQiwwQkFBMEIsb0RBQW9ELHdCQUF3QixLQUFLLDhDQUE4QywwRUFBMEUsS0FBSyxvQ0FBb0MsMkJBQTJCLDZCQUE2QixLQUFLLG9DQUFvQywyQkFBMkIsOEJBQThCLEtBQUssb0NBQW9DLDJCQUEyQiw4QkFBOEIsS0FBSyxvQ0FBb0MsMkJBQTJCLDhCQUE4QixLQUFLLGlDQUFpQyxVQUFVLDRDQUE0QyxPQUFPLGdCQUFnQiwyQ0FBMkMsT0FBTyxLQUFLLCtEQUErRCxjQUFjLHFCQUFxQix5QkFBeUIsT0FBTyxvQkFBb0IscUJBQXFCLE9BQU8sY0FBYyx3QkFBd0IsT0FBTyxLQUFLLG1CQUFtQjtBQUNweUw7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGVzLmNzcz85NDBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzozMDA6NDAwKTtcXHJcXG5cXHJcXG4uc2Nyb2xsYWJsZS1kaXYge1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogRW5hYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nICovXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10ZXh0IHtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGV4dCBmcm9tIHdyYXBwaW5nICovXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIGFueSBvdmVyZmxvd2luZyB0ZXh0ICovXFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogQWRkIGVsbGlwc2lzICguLi4pIGZvciB0cnVuY2F0ZWQgdGV4dCAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWdyYWRpZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsXFxyXFxuICAgICAgcmdiYSg4NCwgNTgsIDE4MywgMSkgMCUsXFxyXFxuICAgICAgcmdiYSg4NCwgNTgsIDE4MywgMSkgOC4zMyUsXFxyXFxuICAgICAgcmdiYSg3MCwgODUsIDE4NCwgMSkgMTYuNjYlLFxcclxcbiAgICAgIHJnYmEoNzAsIDg1LCAxODQsIDEpIDguMzMlLFxcclxcbiAgICAgIHJnYmEoNTYsIDExMiwgMTg1LCAxKSAxNi42NiUsXFxyXFxuICAgICAgcmdiYSg1NiwgMTEyLCAxODUsIDEpIDI1JSxcXHJcXG4gICAgICByZ2JhKDQyLCAxMzksIDE4NiwgMSkgMjUlLFxcclxcbiAgICAgIHJnYmEoNDIsIDEzOSwgMTg2LCAxKSAzMy4zMyUsXFxyXFxuICAgICAgcmdiYSgyOCwgMTY2LCAxODcsIDEpIDMzLjMzJSxcXHJcXG4gICAgICByZ2JhKDI4LCAxNjYsIDE4NywgMSkgNDEuNjYlLFxcclxcbiAgICAgIHJnYmEoMTQsIDE5MywgMTg4LCAxKSA0MS42NiUsXFxyXFxuICAgICAgcmdiYSgxNCwgMTkzLCAxODgsIDEpIDUwJSxcXHJcXG4gICAgICByZ2JhKDAsIDIyMCwgMTg5LCAxKSA1MCUsXFxyXFxuICAgICAgcmdiYSgwLCAyMjAsIDE4OSwgMSkgNTguMzMlLFxcclxcbiAgICAgIHJnYmEoMCwgMTk2LCAxOTEsIDEpIDU4LjMzJSxcXHJcXG4gICAgICByZ2JhKDAsIDE5NiwgMTkxLCAxKSA2Ni42NiUsXFxyXFxuICAgICAgcmdiYSgwLCAxNzIsIDE5MywgMSkgNjYuNjYlLFxcclxcbiAgICAgIHJnYmEoMCwgMTcyLCAxOTMsIDEpIDc1JSxcXHJcXG4gICAgICByZ2JhKDAsIDE0OCwgMTk1LCAxKSA3NSUsXFxyXFxuICAgICAgcmdiYSgwLCAxNDgsIDE5NSwgMSkgODMuMzMlLFxcclxcbiAgICAgIHJnYmEoMCwgMTI0LCAxOTcsIDEpIDgzLjMzJSxcXHJcXG4gICAgICByZ2JhKDAsIDEyNCwgMTk3LCAxKSA5MS42NiUsXFxyXFxuICAgICAgcmdiYSgwLCAxMDAsIDE5OSwgMSkgOTEuNjYlLFxcclxcbiAgICAgIHJnYmEoMCwgMTAwLCAxOTksIDEpIDEwMCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2F2ZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA4MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IC03cHg7XFxyXFxuICAvKkZpeCBmb3Igc2FmYXJpIGdhcCovXFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG4ucGFyYWxsYXg+dXNlIHtcXHJcXG4gIGFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDI1cyBjdWJpYy1iZXppZXIoLjU1LCAuNSwgLjQ1LCAuNSkgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5wYXJhbGxheD51c2U6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoMikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoMykge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNHM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDEzcztcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoNCkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDg1cHgsIDAsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC53YXZlcyB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyREFBMkQ7O0FBRTNEO0VBQ0UsZ0JBQWdCLEVBQUUsZ0NBQWdDO0VBQ2xELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLCtCQUErQjtFQUNwRCxnQkFBZ0IsRUFBRSw4QkFBOEI7RUFDaEQsdUJBQXVCLEVBQUUsMENBQTBDO0FBQ3JFOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXdCOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjMwMDo0MDApO1xcclxcblxcclxcbi5zY3JvbGxhYmxlLWRpdiB7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvOyAvKiBFbmFibGUgaG9yaXpvbnRhbCBzY3JvbGxpbmcgKi9cXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRleHQge1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEhpZGUgYW55IG92ZXJmbG93aW5nIHRleHQgKi9cXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBBZGQgZWxsaXBzaXMgKC4uLikgZm9yIHRydW5jYXRlZCB0ZXh0ICovXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItZ3JhZGllbnQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZyxcXHJcXG4gICAgICByZ2JhKDg0LCA1OCwgMTgzLCAxKSAwJSxcXHJcXG4gICAgICByZ2JhKDg0LCA1OCwgMTgzLCAxKSA4LjMzJSxcXHJcXG4gICAgICByZ2JhKDcwLCA4NSwgMTg0LCAxKSAxNi42NiUsXFxyXFxuICAgICAgcmdiYSg3MCwgODUsIDE4NCwgMSkgOC4zMyUsXFxyXFxuICAgICAgcmdiYSg1NiwgMTEyLCAxODUsIDEpIDE2LjY2JSxcXHJcXG4gICAgICByZ2JhKDU2LCAxMTIsIDE4NSwgMSkgMjUlLFxcclxcbiAgICAgIHJnYmEoNDIsIDEzOSwgMTg2LCAxKSAyNSUsXFxyXFxuICAgICAgcmdiYSg0MiwgMTM5LCAxODYsIDEpIDMzLjMzJSxcXHJcXG4gICAgICByZ2JhKDI4LCAxNjYsIDE4NywgMSkgMzMuMzMlLFxcclxcbiAgICAgIHJnYmEoMjgsIDE2NiwgMTg3LCAxKSA0MS42NiUsXFxyXFxuICAgICAgcmdiYSgxNCwgMTkzLCAxODgsIDEpIDQxLjY2JSxcXHJcXG4gICAgICByZ2JhKDE0LCAxOTMsIDE4OCwgMSkgNTAlLFxcclxcbiAgICAgIHJnYmEoMCwgMjIwLCAxODksIDEpIDUwJSxcXHJcXG4gICAgICByZ2JhKDAsIDIyMCwgMTg5LCAxKSA1OC4zMyUsXFxyXFxuICAgICAgcmdiYSgwLCAxOTYsIDE5MSwgMSkgNTguMzMlLFxcclxcbiAgICAgIHJnYmEoMCwgMTk2LCAxOTEsIDEpIDY2LjY2JSxcXHJcXG4gICAgICByZ2JhKDAsIDE3MiwgMTkzLCAxKSA2Ni42NiUsXFxyXFxuICAgICAgcmdiYSgwLCAxNzIsIDE5MywgMSkgNzUlLFxcclxcbiAgICAgIHJnYmEoMCwgMTQ4LCAxOTUsIDEpIDc1JSxcXHJcXG4gICAgICByZ2JhKDAsIDE0OCwgMTk1LCAxKSA4My4zMyUsXFxyXFxuICAgICAgcmdiYSgwLCAxMjQsIDE5NywgMSkgODMuMzMlLFxcclxcbiAgICAgIHJnYmEoMCwgMTI0LCAxOTcsIDEpIDkxLjY2JSxcXHJcXG4gICAgICByZ2JhKDAsIDEwMCwgMTk5LCAxKSA5MS42NiUsXFxyXFxuICAgICAgcmdiYSgwLCAxMDAsIDE5OSwgMSkgMTAwJSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53YXZlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDgwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcXHJcXG4gIC8qRml4IGZvciBzYWZhcmkgZ2FwKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbi5wYXJhbGxheD51c2Uge1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlLWZvcmV2ZXIgMjVzIGN1YmljLWJlemllciguNTUsIC41LCAuNDUsIC41KSBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4PnVzZTpudGgtY2hpbGQoMSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDdzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXg+dXNlOm50aC1jaGlsZCgyKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC0zcztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXg+dXNlOm50aC1jaGlsZCgzKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC00cztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXg+dXNlOm50aC1jaGlsZCg0KSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC01cztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjBzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmUtZm9yZXZlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsIDAsIDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLndhdmVzIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/styles.css\n"));

/***/ })

});