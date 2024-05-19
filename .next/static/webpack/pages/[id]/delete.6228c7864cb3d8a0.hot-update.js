"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]/delete",{

/***/ "./pages/[id]/delete.js":
/*!******************************!*\
  !*** ./pages/[id]/delete.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_styles_delete_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/styles/delete.css */ \"./app/styles/delete.css\");\n/* harmony import */ var _app_styles_delete_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_styles_delete_css__WEBPACK_IMPORTED_MODULE_5__);\n// pages/[id]/delete.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Delete = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id } = router.query;\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        title: \"\",\n        description: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchTask = async ()=>{\n            const response = await fetch(\"/api/tasks/\".concat(id));\n            const data = await response.json();\n            setTask(data);\n        };\n        if (id) {\n            fetchTask();\n        }\n    }, [\n        id\n    ]);\n    const handleUpdate = async ()=>{\n        const response = await fetch(\"/api/tasks/\".concat(id), {\n            method: \"DELETE\"\n        });\n        if (response.ok) {\n            // Task deleted successfully\n            router.push(\"/tasks\");\n        } else {\n            // Handle error\n            alert(\"Failed to delete task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"container-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"title-delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"do-you-want-to-delete\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"title-h1\",\n                                            children: \"Delete Task\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        \"Are you sure to delete \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: task === null || task === void 0 ? void 0 : task.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 36\n                                        }, undefined),\n                                        \"?\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"controls\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/tasks\",\n                                            className: \"cancel\",\n                                            children: \"Cancel\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"delete\",\n                                            type: \"button\",\n                                            onClick: handleUpdate,\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Delete Task\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                        lineNumber: 75,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\delete.js\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Delete, \"8IB0oiyhUqn4CIpX+0lfd3dY6u4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Delete;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Delete);\nvar _c;\n$RefreshReg$(_c, \"Delete\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2RlbGV0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7OztBQUVNO0FBQ0E7QUFDVztBQUNJO0FBQ0k7QUFFaEQsTUFBTU0sU0FBUzs7SUFDYixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBRUFWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWTtZQUNoQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sY0FBaUIsT0FBSFI7WUFDM0MsTUFBTVMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDUCxRQUFRTTtRQUNWO1FBRUEsSUFBSVQsSUFBSTtZQUNOTTtRQUNGO0lBQ0YsR0FBRztRQUFDTjtLQUFHO0lBRVAsTUFBTVcsZUFBZTtRQUNuQixNQUFNSixXQUFXLE1BQU1DLE1BQU0sY0FBaUIsT0FBSFIsS0FBTTtZQUMvQ1ksUUFBUTtRQUNWO1FBRUEsSUFBSUwsU0FBU00sRUFBRSxFQUFFO1lBQ2YsNEJBQTRCO1lBQzVCZCxPQUFPZSxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0wsZUFBZTtZQUNmQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFJaEIsSUFBRztzQkFFTiw0RUFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRWYsNEVBQUNDOzs4Q0FDQyw4REFBQ0Y7b0NBQUlDLFdBQVU7O3NEQUNmLDhEQUFDRTs0Q0FBR0YsV0FBVTtzREFBVzs7Ozs7O3dDQUFnQjtzREFDaEIsOERBQUNHO3NEQUFRbEIsaUJBQUFBLDJCQUFBQSxLQUFNRSxLQUFLOzs7Ozs7d0NBQVU7Ozs7Ozs7OENBRXZELDhEQUFDWTtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUN4QixrREFBSUE7NENBQ0g0QixNQUFLOzRDQUNMSixXQUFVO3NEQUNUOzs7Ozs7c0RBR0gsOERBQUNLOzRDQUNDTCxXQUFVOzRDQUNWTSxNQUFLOzRDQUNMQyxTQUFTYjtzREFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVQsOERBQUNuQixrREFBSUE7a0NBQ0gsNEVBQUNZO3NDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBekVNTjs7UUFDV0osa0RBQVNBOzs7S0FEcEJJO0FBMkVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0vZGVsZXRlLmpzP2U1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvW2lkXS9kZWxldGUuanNcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hcHAvc3R5bGVzL2RlbGV0ZS5jc3NcIlxyXG5cclxuY29uc3QgRGVsZXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVGFzayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90YXNrcy8ke2lkfWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRUYXNrKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZmV0Y2hUYXNrKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza3MvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIC8vIFRhc2sgZGVsZXRlZCBzdWNjZXNzZnVsbHlcclxuICAgICAgcm91dGVyLnB1c2goXCIvdGFza3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gZGVsZXRlIHRhc2tcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLWNlbnRlclwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtZGVsZXRlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvLXlvdS13YW50LXRvLWRlbGV0ZVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLWgxXCI+RGVsZXRlIFRhc2s8L2gxPlxyXG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgdG8gZGVsZXRlIDxzdHJvbmc+e3Rhc2s/LnRpdGxlfTwvc3Ryb25nPj9cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvdGFza3NcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRlbGV0ZSBUYXNrPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlOyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRGVsZXRlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInRhc2siLCJzZXRUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZldGNoVGFzayIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImhhbmRsZVVwZGF0ZSIsIm1ldGhvZCIsIm9rIiwicHVzaCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImgxIiwic3Ryb25nIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id]/delete.js\n"));

/***/ })

});