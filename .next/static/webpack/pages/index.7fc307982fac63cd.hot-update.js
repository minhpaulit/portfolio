"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": function() { return /* binding */ Contact; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined;\n\n\n\n\n\nvar Contact = function(param) {\n    var title = param.title, description = param.description, buttons = param.buttons, image = param.image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"contact\",\n        className: \"bg-white py-5 px-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-primary fw-bold\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-sm-5 row fs-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-100\",\n                            src: image,\n                            alt: \"profile of Minh\"\n                        }, void 0, false, {\n                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                            lineNumber: 14,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-4 text-center\",\n                            children: description.map(function(value, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: value\n                                }, index, false, {\n                                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 10\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                            lineNumber: 16,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-center\",\n                            children: buttons.map(function(value, index) {\n                                return !value.isPrimary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: value.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                            className: \"mx-3 my-3 display-5\",\n                                            icon: value.icon\n                                        }, void 0, false, {\n                                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 13\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 12\n                                    }, _this)\n                                }, index, false, {\n                                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                            lineNumber: 23,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-center\",\n                            children: buttons.map(function(value, index) {\n                                return value.isPrimary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"d-flex mx-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mx-2\",\n                                            children: [\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                    icon: value.icon\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 34\n                                                }, _this),\n                                                \" :\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\",\n                                            children: value.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 10\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, _this);\n};\n_c = Contact;\nvar Footer = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"bg-secondary text-center py-2 px-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container text-muted\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                children: [\n                    \"\\xa9 2024 \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"https://github.com/minhpaulit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"minhpaulit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                            lineNumber: 57,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n            lineNumber: 54,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/minhpaul/Downloads/workspace/projects/portfolio/components/Footer.js\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"Contact\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztpQ0FBSTs7Ozs7NkJBQ1g7Ozs7OztxQkFDQTs7Ozs7aUJBQ0g7Ozs7O2FBQ0UsQ0FDUjtBQUNILENBQUM7QUFaWUksTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9lMWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFFbnZlbG9wZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zLCBpbWFnZSB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS01IHB4LTVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctYm9sZFwiPnt0aXRsZX08L2gxPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtc20tNSByb3cgZnMtNFwiPlxuXG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cInctMTAwXCIgc3JjPXtpbWFnZX0gYWx0PVwicHJvZmlsZSBvZiBNaW5oXCIvPlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbXktNCB0ZXh0LWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbi5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHAga2V5PXtpbmRleH0+e3ZhbHVlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR7LyogSWNvbnMgKi99XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdHtidXR0b25zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQoIXZhbHVlLmlzUHJpbWFyeSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBrZXk9e2luZGV4fSBocmVmPXt2YWx1ZS5saW5rfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cIm14LTMgbXktMyBkaXNwbGF5LTVcIiBpY29uPXt2YWx1ZS5pY29ufS8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR7LyogQ29udGFjdCB0ZXh0ICovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0e2J1dHRvbnMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQodmFsdWUuaXNQcmltYXJ5KSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkLWZsZXggbXgtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm14LTJcIj4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXt2YWx1ZS5pY29ufS8+IDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj57dmFsdWUudGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdCkpKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgcHktMiBweC01XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LW11dGVkXCI+XG5cdFx0XHRcdDxzbWFsbD4mY29weTsgMjAyNCB7XCIgXCJ9XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9taW5ocGF1bGl0XCI+XG5cdFx0XHRcdFx0XHQ8YT5taW5ocGF1bGl0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9zbWFsbD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJGb250QXdlc29tZUljb24iLCJmYUVudmVsb3BlIiwiQ29udGFjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwiaW1hZ2UiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImgxIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIiwidmFsdWUiLCJpbmRleCIsInAiLCJpc1ByaW1hcnkiLCJocmVmIiwibGluayIsImEiLCJ0YXJnZXQiLCJyZWwiLCJpY29uIiwiRm9vdGVyIiwiZm9vdGVyIiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n"));

/***/ })

});