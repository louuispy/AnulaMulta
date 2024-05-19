"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/long-break",{

/***/ "./pages/long-break.js":
/*!*****************************!*\
  !*** ./pages/long-break.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./pages/login.js\");\n/* harmony import */ var _app_styles_short_break_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/styles/short-break.css */ \"./app/styles/short-break.css\");\n/* harmony import */ var _app_styles_short_break_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_styles_short_break_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst linkStyle = {\n    marginRight: 15\n};\nconst Menu = ()=>{\n    _s();\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"work\");\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5 * 60);\n    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval = null;\n        if (isActive && time > 0) {\n            interval = setInterval(()=>{\n                setTime((prevTime)=>prevTime - 1);\n            }, 1000);\n        } else if (!isActive && time !== 0) {\n            clearInterval(interval);\n        } else if (isActive && time === 0) {\n            if (mode === \"work\") {\n                setMode(\"rest\");\n                setTime(5 * 60);\n            } else {\n                setMode(\"work\");\n                setTime(0 * 60);\n            }\n        }\n        return ()=>clearInterval(interval);\n    }, [\n        isActive,\n        time,\n        mode\n    ]);\n    const toggleTimer = ()=>{\n        setIsActive(!isActive);\n    };\n    const resetTimer = ()=>{\n        if (mode === \"work\") {\n            setTime(15 * 60);\n        } else {\n            setTime(0 * 60);\n        }\n        setIsActive(false);\n    };\n    const addTime = (additionalTime)=>{\n        setTime((prevTime)=>prevTime + additionalTime);\n    };\n    const formatTime = (time)=>{\n        const minutes = Math.floor(time / 60);\n        const seconds = time % 60;\n        return (minutes < 10 ? \"0\" : \"\") + minutes + \":\" + (seconds < 10 ? \"0\" : \"\") + seconds;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"navbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-width\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                children: \"POMOFOCUS\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"menu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/tasks\",\n                                        className: \"menu-btn\",\n                                        children: \"Tasks\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/login\",\n                                        className: \"menu-btn\",\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-btn\",\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pomodoro-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"POMODORO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"timer\",\n                        children: formatTime(time)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"controls\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"button-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn \" + (isActive ? \"pause-btn\" : \"start-btn\"),\n                                        onClick: toggleTimer,\n                                        id: \"button\",\n                                        children: isActive ? \"Pause\" : \"Start\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"voltar-pomodoro \",\n                                        id: \"link-voltar-pomodoro\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            id: \"voltar-pomodoro\",\n                                            children: \"Tela Inicial\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\long-break.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Menu, \"HBtz8wvqSaQaPXTnAc/cLRTMcJw=\");\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFRekQ7R0FwRk05QjtLQUFBQTtBQXNGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb25nLWJyZWFrLmpzP2QyNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBsb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2FwcC9zdHlsZXMvc2hvcnQtYnJlYWsuY3NzXCJcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICAgIG1hcmdpblJpZ2h0OiAxNVxyXG59XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ3dvcmsnKTsgXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSg1ICogNjApO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNBY3RpdmUgJiYgdGltZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICd3b3JrJykge1xyXG4gICAgICAgICAgICAgICAgc2V0TW9kZSgncmVzdCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSg1ICogNjApOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE1vZGUoJ3dvcmsnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWUoMCogNjApOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbaXNBY3RpdmUsIHRpbWUsIG1vZGVdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUaW1lciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldFRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnd29yaycpIHtcclxuICAgICAgICAgICAgc2V0VGltZSgxNSAqIDYwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lKDAgKiA2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkVGltZSA9IChhZGRpdGlvbmFsVGltZSkgPT4ge1xyXG4gICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgKyBhZGRpdGlvbmFsVGltZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICBjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XHJcbiAgICAgICAgcmV0dXJuIChtaW51dGVzIDwgMTAgPyAnMCcgOiAnJykgKyBtaW51dGVzICsgJzonICsgKHNlY29uZHMgPCAxMCA/ICcwJyA6ICcnKSArIHNlY29uZHM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+UE9NT0ZPQ1VTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL3Rhc2tzXCIgY2xhc3NOYW1lPVwibWVudS1idG5cIj5UYXNrczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cIm1lbnUtYnRuXCI+U2lnbiBJbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9tb2Rvcm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+UE9NT0RPUk88L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lclwiPntmb3JtYXRUaW1lKHRpbWUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyAoaXNBY3RpdmUgPyAncGF1c2UtYnRuJyA6ICdzdGFydC1idG4nKX0gb25DbGljaz17dG9nZ2xlVGltZXJ9IGlkPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBY3RpdmUgPyAnUGF1c2UnIDogJ1N0YXJ0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidm9sdGFyLXBvbW9kb3JvIFwiaWQ9XCJsaW5rLXZvbHRhci1wb21vZG9yb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInZvbHRhci1wb21vZG9yb1wiPlRlbGEgSW5pY2lhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImxvZ2luIiwic3R5bGVzIiwibGlua1N0eWxlIiwibWFyZ2luUmlnaHQiLCJNZW51IiwibW9kZSIsInNldE1vZGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwidG9nZ2xlVGltZXIiLCJyZXNldFRpbWVyIiwiYWRkVGltZSIsImFkZGl0aW9uYWxUaW1lIiwiZm9ybWF0VGltZSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ1bCIsImxpIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/long-break.js\n"));

/***/ })

});