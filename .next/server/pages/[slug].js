"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./lib/mdx.js":
/*!********************!*\
  !*** ./lib/mdx.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllFilesMetadata\": () => (/* binding */ getAllFilesMetadata),\n/* harmony export */   \"getFileBySlug\": () => (/* binding */ getFileBySlug),\n/* harmony export */   \"getFiles\": () => (/* binding */ getFiles)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);\nnext_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst root = process.cwd();\nconst getFiles = ()=>fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, \"data\"));\nconst getFileBySlug = async (slug)=>{\n    const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, \"data\", `${slug}.mdx`), \"utf-8\");\n    const { data , content  } = await gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);\n    const source = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(content, {}); // plugins\n    return {\n        source,\n        frontMatter: {\n            slug,\n            ...data\n        }\n    };\n};\nconst getAllFilesMetadata = ()=>{\n    const files = getFiles();\n    return files.reduce((allPost, postSlug)=>{\n        const mdxSource = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(root, \"data\", postSlug), \"utf-8\");\n        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdxSource);\n        return [\n            {\n                ...data,\n                slug: postSlug.replace(\".mdx\", \"\")\n            },\n            ...allPost\n        ];\n    }, []);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbWR4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUNTO0FBQ3FCO0FBRXJELE1BQU1JLE9BQU9DLFFBQVFDLEdBQUc7QUFFakIsTUFBTUMsV0FBVyxJQUFNUCxxREFBYyxDQUFDQyxnREFBUyxDQUFDRyxNQUFNLFNBQVM7QUFFL0QsTUFBTU0sZ0JBQWdCLE9BQU9DLE9BQVM7SUFDM0MsTUFBTUMsWUFBWVosc0RBQWUsQ0FBQ0MsZ0RBQVMsQ0FBQ0csTUFBTSxRQUFRLENBQUMsRUFBRU8sS0FBSyxJQUFJLENBQUMsR0FBRztJQUMxRSxNQUFNLEVBQUNHLEtBQUksRUFBRUMsUUFBTyxFQUFDLEdBQUcsTUFBTWIsa0RBQU1BLENBQUNVO0lBQ3JDLE1BQU1JLFNBQVMsTUFBTWIsb0VBQVNBLENBQUNZLFNBQVMsQ0FBQyxJQUFJLFVBQVU7SUFFdkQsT0FBTztRQUNMQztRQUNBQyxhQUFhO1lBQ1hOO1lBQ0EsR0FBR0csSUFBSTtRQUNUO0lBQ0Y7QUFDRixFQUFDO0FBRU0sTUFBTUksc0JBQXNCLElBQU07SUFDdkMsTUFBTUMsUUFBUVo7SUFFZCxPQUFPWSxNQUFNQyxNQUFNLENBQUMsQ0FBQ0MsU0FBU0MsV0FBYTtRQUN6QyxNQUFNVixZQUFZWixzREFBZSxDQUFDQyxnREFBUyxDQUFDRyxNQUFNLFFBQVFrQixXQUFXO1FBQ3JFLE1BQU0sRUFBRVIsS0FBSSxFQUFFLEdBQUdaLGtEQUFNQSxDQUFDVTtRQUV4QixPQUFPO1lBQUM7Z0JBQUMsR0FBR0UsSUFBSTtnQkFBRUgsTUFBTVcsU0FBU0MsT0FBTyxDQUFDLFFBQVE7WUFBRztlQUFNRjtTQUFRO0lBQ3BFLEdBQUcsRUFBRTtBQUNQLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRpb3BlcnNvbmFsLy4vbGliL21keC5qcz80Yzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZSdcclxuXHJcbmNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbGVzID0gKCkgPT4gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHJvb3QsICdkYXRhJykpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbGVCeVNsdWcgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG4gIGNvbnN0IG1keFNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCBgJHtzbHVnfS5tZHhgKSwgJ3V0Zi04Jyk7XHJcbiAgY29uc3Qge2RhdGEsIGNvbnRlbnR9ID0gYXdhaXQgbWF0dGVyKG1keFNvdXJjZSk7XHJcbiAgY29uc3Qgc291cmNlID0gYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQsIHt9KTsgLy8gcGx1Z2luc1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc291cmNlLFxyXG4gICAgZnJvbnRNYXR0ZXI6IHtcclxuICAgICAgc2x1ZyxcclxuICAgICAgLi4uZGF0YSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxGaWxlc01ldGFkYXRhID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIGZpbGVzLnJlZHVjZSgoYWxsUG9zdCwgcG9zdFNsdWcpID0+IHtcclxuICAgIGNvbnN0IG1keFNvdXJjZSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocm9vdCwgJ2RhdGEnLCBwb3N0U2x1ZyksICd1dGYtOCcpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIobWR4U291cmNlKTtcclxuXHJcbiAgICByZXR1cm4gW3suLi5kYXRhLCBzbHVnOiBwb3N0U2x1Zy5yZXBsYWNlKCcubWR4JywgJycpfSwgLi4uYWxsUG9zdF1cclxuICB9LCBbXSlcclxufSJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJtYXR0ZXIiLCJzZXJpYWxpemUiLCJyb290IiwicHJvY2VzcyIsImN3ZCIsImdldEZpbGVzIiwicmVhZGRpclN5bmMiLCJqb2luIiwiZ2V0RmlsZUJ5U2x1ZyIsInNsdWciLCJtZHhTb3VyY2UiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsInNvdXJjZSIsImZyb250TWF0dGVyIiwiZ2V0QWxsRmlsZXNNZXRhZGF0YSIsImZpbGVzIiwicmVkdWNlIiwiYWxsUG9zdCIsInBvc3RTbHVnIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mdx.js\n");

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/mdx */ \"./lib/mdx.js\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__]);\n([_lib_mdx__WEBPACK_IMPORTED_MODULE_1__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction Post({ source , frontMatter  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {\n        ...source\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jodia\\\\Documents\\\\Dev\\\\portfolio-joel\\\\pages\\\\[slug].js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    const { source , frontmatter  } = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__.getFileBySlug)(\"posts\", params.slug);\n    return {\n        props: {\n            source,\n            frontmatter: {\n                slug: params.slug,\n                ...frontmatter\n            }\n        }\n    };\n}\nasync function getStaticPaths() {\n    const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__.getFiles)(\"posts\");\n    const paths = posts.map((post)=>({\n            params: {\n                slug: post.replace(/\\.mdx/, \"\")\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ1Q7QUFFN0IsU0FBU0csS0FBTSxFQUFFQyxPQUFNLEVBQUVDLFlBQVcsRUFBRSxFQUFFO0lBQ3JELHFCQUFPLDhEQUFDSCxzREFBU0E7UUFBRSxHQUFHRSxNQUFNOzs7Ozs7QUFDOUIsQ0FBQztBQUVNLGVBQWVFLGVBQWUsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxFQUFFSCxPQUFNLEVBQUVJLFlBQVcsRUFBRSxHQUFHLE1BQU1SLHVEQUFhQSxDQUFDLFNBQVNPLE9BQU9FLElBQUk7SUFFeEUsT0FBTztRQUNMQyxPQUFPO1lBQ0xOO1lBQ0FJLGFBQWE7Z0JBQ1hDLE1BQU1GLE9BQU9FLElBQUk7Z0JBQ2pCLEdBQUdELFdBQVc7WUFDaEI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLGVBQWVHLGlCQUFpQjtJQUNyQyxNQUFNQyxRQUFRLE1BQU1YLGtEQUFRQSxDQUFDO0lBQzdCLE1BQU1ZLFFBQVFELE1BQU1FLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ2pDUixRQUFRO2dCQUNORSxNQUFNTSxLQUFLQyxPQUFPLENBQUMsU0FBUztZQUM5QjtRQUNGO0lBRUEsT0FBTztRQUNMSDtRQUNBSSxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0aW9wZXJzb25hbC8uL3BhZ2VzL1tzbHVnXS5qcz82YzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZpbGVCeVNsdWcsIGdldEZpbGVzIH0gZnJvbSBcIi4uL2xpYi9tZHhcIjtcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCAoeyBzb3VyY2UsIGZyb250TWF0dGVyIH0pIHtcclxuICByZXR1cm4gPE1EWFJlbW90ZSB7Li4uc291cmNlfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB7IHNvdXJjZSwgZnJvbnRtYXR0ZXIgfSA9IGF3YWl0IGdldEZpbGVCeVNsdWcoXCJwb3N0c1wiLCBwYXJhbXMuc2x1Zyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzb3VyY2UsXHJcbiAgICAgIGZyb250bWF0dGVyOiB7XHJcbiAgICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXHJcbiAgICAgICAgLi4uZnJvbnRtYXR0ZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEZpbGVzKFwicG9zdHNcIik7XHJcbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogcG9zdC5yZXBsYWNlKC9cXC5tZHgvLCBcIlwiKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0RmlsZUJ5U2x1ZyIsImdldEZpbGVzIiwiTURYUmVtb3RlIiwiUG9zdCIsInNvdXJjZSIsImZyb250TWF0dGVyIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJmcm9udG1hdHRlciIsInNsdWciLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicG9zdHMiLCJwYXRocyIsIm1hcCIsInBvc3QiLCJyZXBsYWNlIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].js"));
module.exports = __webpack_exports__;

})();