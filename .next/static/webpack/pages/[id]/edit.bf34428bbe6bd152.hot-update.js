"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]/edit",{

/***/ "./pages/[id]/edit.js":
/*!****************************!*\
  !*** ./pages/[id]/edit.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_styles_edit_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/styles/edit.css */ \"./app/styles/edit.css\");\n/* harmony import */ var _app_styles_edit_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_styles_edit_css__WEBPACK_IMPORTED_MODULE_4__);\n// pages/[id]/edit.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Edit = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        title: \"\",\n        description: \"\"\n    });\n    const onChange = (e)=>{\n        setTask({\n            ...task,\n            [e.target.name]: e.target.value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchTask = async ()=>{\n            const response = await fetch(\"/api/tasks/\".concat(id));\n            const data = await response.json();\n            setTask(data);\n        };\n        if (id) {\n            fetchTask();\n        }\n    }, [\n        id\n    ]);\n    const handleUpdate = async ()=>{\n        const response = await fetch(\"/api/tasks/\".concat(id), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(task)\n        });\n        if (response.ok) {\n            // Task update successfully\n            router.push(\"/tasks\");\n        } else {\n            // Handle error\n            alert(\"Failed to edit task\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"container-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-semibold\",\n                                children: \"Edit Task\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"input-title\",\n                                            type: \"text\",\n                                            name: \"title\",\n                                            value: task === null || task === void 0 ? void 0 : task.title,\n                                            onChange: onChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"description-task\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Description\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"input-description\",\n                                            type: \"text\",\n                                            name: \"description\",\n                                            value: task === null || task === void 0 ? void 0 : task.description,\n                                            onChange: onChange\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"edit-task\",\n                                    type: \"button\",\n                                    onClick: handleUpdate,\n                                    children: \"Edit Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Edit Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Desafio-Anula-Multa-Pomofocus\\\\frontend\\\\pages\\\\[id]\\\\edit.js\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Edit, \"avS+b+APHzSK58O62Ao6RD0TNs4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdL2VkaXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQjs7O0FBRVE7QUFDVztBQUNJO0FBQ0U7QUFFOUMsTUFBTUssT0FBTzs7SUFDWCxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLE9BQU87UUFDUEMsYUFBYTtJQUNmO0lBRUEsTUFBTUMsV0FBVyxDQUFDQztRQUNoQkosUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRSxDQUFDSyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUNyRDtJQUVBZixnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxjQUFpQixPQUFIYjtZQUMzQyxNQUFNYyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENaLFFBQVFXO1FBQ1Y7UUFFQSxJQUFJZCxJQUFJO1lBQ05XO1FBQ0Y7SUFDRixHQUFHO1FBQUNYO0tBQUc7SUFFUCxNQUFNZ0IsZUFBZTtRQUNuQixNQUFNSixXQUFXLE1BQU1DLE1BQU0sY0FBaUIsT0FBSGIsS0FBTTtZQUMvQ2lCLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDbkI7UUFDdkI7UUFFQSxJQUFJVSxTQUFTVSxFQUFFLEVBQUU7WUFDZiwyQkFBMkI7WUFDM0J2QixPQUFPd0IsSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMLGVBQWU7WUFDZkMsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDQSw0RUFBQ0M7WUFBSXpCLElBQUc7OzhCQUVOLDhEQUFDeUI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUdELFdBQVU7MENBQXlCOzs7Ozs7Ozs7OztzQ0FFekMsOERBQUNFOzs4Q0FDQyw4REFBQ0g7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRztzREFBTTs7Ozs7O3NEQUNQLDhEQUFDQzs0Q0FDQ0osV0FBVTs0Q0FDVkssTUFBSzs0Q0FDTHRCLE1BQUs7NENBQ0xDLEtBQUssRUFBRVIsaUJBQUFBLDJCQUFBQSxLQUFNRSxLQUFLOzRDQUNsQkUsVUFBVUE7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ21CO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0c7c0RBQU07Ozs7OztzREFDUCw4REFBQ0M7NENBQ0NKLFdBQVU7NENBQ1ZLLE1BQUs7NENBQ0x0QixNQUFLOzRDQUNMQyxLQUFLLEVBQUVSLGlCQUFBQSwyQkFBQUEsS0FBTUcsV0FBVzs0Q0FDeEJDLFVBQVVBOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUMwQjtvQ0FDQ04sV0FBVTtvQ0FDVkssTUFBSztvQ0FDTEUsU0FBU2pCOzhDQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS1AsOERBQUN2QixrREFBSUE7OEJBQ0gsNEVBQUNXO2tDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQXZGTU47O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTtBQXlGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baWRdL2VkaXQuanM/YjVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9baWRdL2VkaXQuanNcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vYXBwL3N0eWxlcy9lZGl0LmNzc1wiXHJcblxyXG5jb25zdCBFZGl0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIiwgXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFRhc2soeyAuLi50YXNrLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRhc2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza3MvJHtpZH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0VGFzayhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIGZldGNoVGFzaygpO1xyXG4gICAgfVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Rhc2tzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGFzayksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgLy8gVGFzayB1cGRhdGUgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3Rhc2tzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGVkaXQgdGFza1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXItY2VudGVyXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHBiLTQgYm9yZGVyLWIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS05MDAgbWItNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5FZGl0IFRhc2s8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Rhc2s/LnRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRhc2tcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0YXNrPy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LXRhc2tcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXQgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkVkaXQgVGFzazwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdDsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRWRpdCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJ0YXNrIiwic2V0VGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmZXRjaFRhc2siLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJoYW5kbGVVcGRhdGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/edit.js\n"));

/***/ })

});