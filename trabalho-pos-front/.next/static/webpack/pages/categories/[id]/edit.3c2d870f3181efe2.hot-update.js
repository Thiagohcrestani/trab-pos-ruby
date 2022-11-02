"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories/[id]/edit",{

/***/ "./pages/categories/[id]/edit.js":
/*!***************************************!*\
  !*** ./pages/categories/[id]/edit.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _src_config_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/config/routes */ \"./src/config/routes.js\");\n/* harmony import */ var _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/services/CategoryService */ \"./src/services/CategoryService.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"./node_modules/@mui/icons-material/ArrowBack.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EditCategory() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), categorie = ref[0], setCategorie = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getById(id).then(function(data) {\n            setCategorie(data);\n        });\n    }, [\n        id\n    ]);\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var updateCategory = function(categorie) {\n        _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].update(id, categorie).then(function(data) {\n            router.push(_src_config_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].categories.list);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Category successfully updated!\");\n        }).catch(function(e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Erro when updating Category: \".concat(e.message));\n        });\n    };\n    if (categorie.length < 0) return \"Carregando...\";\n    console.log(categorie);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                xs: 6,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h4\",\n                    children: [\n                        \"P\\xe1gina de Edi\\xe7\\xe3o do artigo: \",\n                        id\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: {\n                        pathname: _src_config_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].categories.list\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        variant: \"contained\",\n                        size: \"small\",\n                        startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            fontSize: \"small\"\n                        }, void 0, false, void 0, void 0),\n                        children: \"Voltar ao Inicio\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(function(data) {\n                    return updateCategory(data);\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n                                label: \"Nome\",\n                                variant: \"standard\"\n                            }, register(\"name\", {\n                                required: true\n                            })), {\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                defaultValue: categorie.name\n                            }), void 0, false, {\n                                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Name is required.\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                                lineNumber: 62,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        variant: \"contained\",\n                        color: \"success\",\n                        type: \"submit\",\n                        children: \"Salvar\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EditCategory, \"yCWorYt6qgDcbWaVGTyr9gzTMjE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = EditCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditCategory);\nvar _c;\n$RefreshReg$(_c, \"EditCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lDQUFFO2dDQUFFQyxZQUFZLEVBQUV0QyxTQUFTLENBQUN1QyxJQUFJOzs7OztvQ0FBSTs0QkFDdEovQixNQUFNLENBQUNnQyxLQUFLLGtCQUFJLDhEQUFDaEIsR0FBQzswQ0FBQyxtQkFBaUI7Ozs7O29DQUFJOzs7Ozs7NEJBQ3JDO2tDQUVOLDhEQUFDbkMsaURBQU07d0JBQUNrQyxPQUFPLEVBQUMsV0FBVzt3QkFBQ2tCLEtBQUssRUFBQyxTQUFTO3dCQUFDQyxJQUFJLEVBQUMsUUFBUTtrQ0FBQyxRQUUxRDs7Ozs7NEJBQVM7Ozs7OztvQkFDSjs7b0JBQ04sQ0FDSDtBQUNKLENBQUM7R0EzRFE5QyxZQUFZOztRQUNKWixrREFBUztRQWNwQkcsb0RBQU87OztBQWZKUyxLQUFBQSxZQUFZO0FBNkRyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3JpZXMvW2lkXS9lZGl0LmpzP2YzNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBST1VURVMgZnJvbSBcIi4uLy4uLy4uL3NyYy9jb25maWcvcm91dGVzXCI7XG5pbXBvcnQgQ2F0ZWdvcnlTZXJ2aWNlIGZyb20gXCIuLi8uLi8uLi9zcmMvc2VydmljZXMvQ2F0ZWdvcnlTZXJ2aWNlXCI7XG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XG5cblxuZnVuY3Rpb24gRWRpdENhdGVnb3J5KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbY2F0ZWdvcmllLCBzZXRDYXRlZ29yaWVdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQ2F0ZWdvcnlTZXJ2aWNlLmdldEJ5SWQoaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldENhdGVnb3JpZShkYXRhKVxuICAgIH0pXG4gIH0sIFtpZF0pXG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKCk7XG5cbiAgY29uc3QgdXBkYXRlQ2F0ZWdvcnkgPSAoY2F0ZWdvcmllKSA9PiB7XG4gICAgQ2F0ZWdvcnlTZXJ2aWNlLnVwZGF0ZShpZCwgY2F0ZWdvcmllKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaChST1VURVMuY2F0ZWdvcmllcy5saXN0KVxuICAgICAgdG9hc3Quc3VjY2VzcyhgQ2F0ZWdvcnkgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhYClcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgdG9hc3QuZXJyb3IoYEVycm8gd2hlbiB1cGRhdGluZyBDYXRlZ29yeTogJHtlLm1lc3NhZ2V9YClcbiAgICB9KVxuICB9XG5cbiAgaWYgKGNhdGVnb3JpZS5sZW5ndGggPCAwKSByZXR1cm4gYENhcnJlZ2FuZG8uLi5gXG5cbiAgY29uc29sZS5sb2coY2F0ZWdvcmllKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHcmlkIHhzPXs2fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+UMOhZ2luYSBkZSBFZGnDp8OjbyBkbyBhcnRpZ286IHtpZH08L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8cD5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogUk9VVEVTLmNhdGVnb3JpZXMubGlzdCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cInNtYWxsXCIgc3RhcnRJY29uPXs8QXJyb3dCYWNrSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz59PlxuICAgICAgICAgICAgVm9sdGFyIGFvIEluaWNpb1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoKGRhdGEpID0+IHVwZGF0ZUNhdGVnb3J5KGRhdGEpKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTm9tZVwiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIHsuLi5yZWdpc3RlcihcIm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gSW5wdXRMYWJlbFByb3BzPXt7c2hyaW5rOiB0cnVlLH19IGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcmllLm5hbWV9IC8+XG4gICAgICAgICAge2Vycm9ycy50aXRsZSAmJiA8cD5OYW1lIGlzIHJlcXVpcmVkLjwvcD59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTYWx2YXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRDYXRlZ29yeTsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInRvYXN0IiwiQnV0dG9uIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJST1VURVMiLCJDYXRlZ29yeVNlcnZpY2UiLCJBcnJvd0JhY2tJY29uIiwiRWRpdENhdGVnb3J5Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNhdGVnb3JpZSIsInNldENhdGVnb3JpZSIsImdldEJ5SWQiLCJ0aGVuIiwiZGF0YSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXBkYXRlQ2F0ZWdvcnkiLCJ1cGRhdGUiLCJwdXNoIiwiY2F0ZWdvcmllcyIsImxpc3QiLCJzdWNjZXNzIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInhzIiwidmFyaWFudCIsInAiLCJocmVmIiwicGF0aG5hbWUiLCJzaXplIiwic3RhcnRJY29uIiwiZm9udFNpemUiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInJlcXVpcmVkIiwiSW5wdXRMYWJlbFByb3BzIiwic2hyaW5rIiwiZGVmYXVsdFZhbHVlIiwibmFtZSIsInRpdGxlIiwiY29sb3IiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/categories/[id]/edit.js\n"));

/***/ })

});