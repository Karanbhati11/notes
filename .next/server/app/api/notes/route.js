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
exports.id = "app/api/notes/route";
exports.ids = ["app/api/notes/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Live_Projects_notes_app_api_notes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/notes/route.js */ \"(rsc)/./app/api/notes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/notes/route\",\n        pathname: \"/api/notes\",\n        filename: \"route\",\n        bundlePath: \"app/api/notes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Live Projects\\\\notes\\\\app\\\\api\\\\notes\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Live_Projects_notes_app_api_notes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/notes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZub3RlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbm90ZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZub3RlcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTGl2ZSUyMFByb2plY3RzJTVDbm90ZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNMaXZlJTIwUHJvamVjdHMlNUNub3RlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDRztBQUNoRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvPzIzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXG5vdGVzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ub3Rlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL25vdGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ub3Rlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXExpdmUgUHJvamVjdHNcXFxcbm90ZXNcXFxcYXBwXFxcXGFwaVxcXFxub3Rlc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbm90ZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/notes/route.js":
/*!********************************!*\
  !*** ./app/api/notes/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\");\n/* harmony import */ var _lib_models_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/Note */ \"(rsc)/./lib/models/Note.js\");\n\n\n\n\nasync function getUserId() {\n    const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    if (!session) return null;\n    return session.userId;\n}\n// GET — fetch all notes for the logged-in user\nasync function GET() {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const notes = await _lib_models_Note__WEBPACK_IMPORTED_MODULE_3__.Note.find({\n        userId\n    }).lean();\n    // Strip MongoDB fields, return clean client shape\n    const clean = notes.map(({ _id, userId: _u, __v, ...rest })=>({\n            _id: _id.toString(),\n            ...rest\n        }));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        notes: clean\n    });\n}\n// POST — replace all notes for the logged-in user (full sync)\nasync function POST(req) {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { notes } = await req.json();\n    if (!Array.isArray(notes)) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Invalid payload\"\n    }, {\n        status: 400\n    });\n    // Delete existing and re-insert — simple full-replace sync\n    await _lib_models_Note__WEBPACK_IMPORTED_MODULE_3__.Note.deleteMany({\n        userId\n    });\n    if (notes.length > 0) {\n        await _lib_models_Note__WEBPACK_IMPORTED_MODULE_3__.Note.insertMany(notes.map((n)=>({\n                ...n,\n                userId\n            })));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL25vdGVzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNIO0FBQ0c7QUFDRjtBQUV6QyxlQUFlSTtJQUNiLE1BQU1DLFVBQVUsTUFBTUoscURBQVVBO0lBQ2hDLElBQUksQ0FBQ0ksU0FBUyxPQUFPO0lBQ3JCLE9BQU9BLFFBQVFDLE1BQU07QUFDdkI7QUFFQSwrQ0FBK0M7QUFDeEMsZUFBZUM7SUFDcEIsTUFBTUQsU0FBUyxNQUFNRjtJQUNyQixJQUFJLENBQUNFLFFBQVEsT0FBT04scURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFL0UsTUFBTUMsUUFBUSxNQUFNUixrREFBSUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVOO0lBQU8sR0FBR08sSUFBSTtJQUM5QyxrREFBa0Q7SUFDbEQsTUFBTUMsUUFBUUgsTUFBTUksR0FBRyxDQUFDLENBQUMsRUFBRUMsR0FBRyxFQUFFVixRQUFRVyxFQUFFLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxNQUFNLEdBQU07WUFDOURILEtBQUtBLElBQUlJLFFBQVE7WUFDakIsR0FBR0QsSUFBSTtRQUNUO0lBQ0EsT0FBT25CLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUcsT0FBT0c7SUFBTTtBQUMxQztBQUVBLDhEQUE4RDtBQUN2RCxlQUFlTyxLQUFLQyxHQUFHO0lBQzVCLE1BQU1oQixTQUFTLE1BQU1GO0lBQ3JCLElBQUksQ0FBQ0UsUUFBUSxPQUFPTixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUUvRSxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1XLElBQUlkLElBQUk7SUFDaEMsSUFBSSxDQUFDZSxNQUFNQyxPQUFPLENBQUNiLFFBQVEsT0FBT1gscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWtCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRWhHLDJEQUEyRDtJQUMzRCxNQUFNUCxrREFBSUEsQ0FBQ3NCLFVBQVUsQ0FBQztRQUFFbkI7SUFBTztJQUMvQixJQUFJSyxNQUFNZSxNQUFNLEdBQUcsR0FBRztRQUNwQixNQUFNdkIsa0RBQUlBLENBQUN3QixVQUFVLENBQUNoQixNQUFNSSxHQUFHLENBQUMsQ0FBQ2EsSUFBTztnQkFBRSxHQUFHQSxDQUFDO2dCQUFFdEI7WUFBTztJQUN6RDtJQUVBLE9BQU9OLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRXFCLElBQUk7SUFBSztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9hcHAvYXBpL25vdGVzL3JvdXRlLmpzPzQ4YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgTm90ZSB9IGZyb20gXCJAL2xpYi9tb2RlbHMvTm90ZVwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gc2Vzc2lvbi51c2VySWQ7XHJcbn1cclxuXHJcbi8vIEdFVCDigJQgZmV0Y2ggYWxsIG5vdGVzIGZvciB0aGUgbG9nZ2VkLWluIHVzZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcclxuICBpZiAoIXVzZXJJZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgY29uc3Qgbm90ZXMgPSBhd2FpdCBOb3RlLmZpbmQoeyB1c2VySWQgfSkubGVhbigpO1xyXG4gIC8vIFN0cmlwIE1vbmdvREIgZmllbGRzLCByZXR1cm4gY2xlYW4gY2xpZW50IHNoYXBlXHJcbiAgY29uc3QgY2xlYW4gPSBub3Rlcy5tYXAoKHsgX2lkLCB1c2VySWQ6IF91LCBfX3YsIC4uLnJlc3QgfSkgPT4gKHtcclxuICAgIF9pZDogX2lkLnRvU3RyaW5nKCksXHJcbiAgICAuLi5yZXN0LFxyXG4gIH0pKTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBub3RlczogY2xlYW4gfSk7XHJcbn1cclxuXHJcbi8vIFBPU1Qg4oCUIHJlcGxhY2UgYWxsIG5vdGVzIGZvciB0aGUgbG9nZ2VkLWluIHVzZXIgKGZ1bGwgc3luYylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XHJcbiAgaWYgKCF1c2VySWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGNvbnN0IHsgbm90ZXMgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KG5vdGVzKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBwYXlsb2FkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuXHJcbiAgLy8gRGVsZXRlIGV4aXN0aW5nIGFuZCByZS1pbnNlcnQg4oCUIHNpbXBsZSBmdWxsLXJlcGxhY2Ugc3luY1xyXG4gIGF3YWl0IE5vdGUuZGVsZXRlTWFueSh7IHVzZXJJZCB9KTtcclxuICBpZiAobm90ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgYXdhaXQgTm90ZS5pbnNlcnRNYW55KG5vdGVzLm1hcCgobikgPT4gKHsgLi4ubiwgdXNlcklkIH0pKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2Vzc2lvbiIsImNvbm5lY3REQiIsIk5vdGUiLCJnZXRVc2VySWQiLCJzZXNzaW9uIiwidXNlcklkIiwiR0VUIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibm90ZXMiLCJmaW5kIiwibGVhbiIsImNsZWFuIiwibWFwIiwiX2lkIiwiX3UiLCJfX3YiLCJyZXN0IiwidG9TdHJpbmciLCJQT1NUIiwicmVxIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVsZXRlTWFueSIsImxlbmd0aCIsImluc2VydE1hbnkiLCJuIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/notes/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst COOKIE = \"mn_token\";\nconst MAX_AGE = 60 * 60 * 24 * 7; // 7 days\nfunction getSecret() {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET is not defined\");\n    return secret;\n}\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, getSecret(), {\n        expiresIn: MAX_AGE\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, getSecret());\n    } catch  {\n        return null;\n    }\n}\nfunction setAuthCookie(res, token) {\n    res.cookies.set(COOKIE, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        maxAge: MAX_AGE,\n        path: \"/\"\n    });\n}\nfunction clearAuthCookie(res) {\n    res.cookies.set(COOKIE, \"\", {\n        maxAge: 0,\n        path: \"/\"\n    });\n}\n/** Call from a Route Handler — returns the decoded JWT payload or null */ async function getSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const token = cookieStore.get(COOKIE)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBRXZDLE1BQU1FLFNBQVM7QUFDZixNQUFNQyxVQUFVLEtBQUssS0FBSyxLQUFLLEdBQUcsU0FBUztBQUUzQyxTQUFTQztJQUNQLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNyQyxJQUFJLENBQUNILFFBQVEsTUFBTSxJQUFJSSxNQUFNO0lBQzdCLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTSyxVQUFVQyxPQUFPO0lBQy9CLE9BQU9YLHdEQUFRLENBQUNXLFNBQVNQLGFBQWE7UUFBRVMsV0FBV1Y7SUFBUTtBQUM3RDtBQUVPLFNBQVNXLFlBQVlDLEtBQUs7SUFDL0IsSUFBSTtRQUNGLE9BQU9mLDBEQUFVLENBQUNlLE9BQU9YO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sU0FBU2EsY0FBY0MsR0FBRyxFQUFFSCxLQUFLO0lBQ3RDRyxJQUFJakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDakIsUUFBUWEsT0FBTztRQUM3QkssVUFBVTtRQUNWQyxRQUFRZixrQkFBeUI7UUFDakNnQixVQUFVO1FBQ1ZDLFFBQVFwQjtRQUNScUIsTUFBTTtJQUNSO0FBQ0Y7QUFFTyxTQUFTQyxnQkFBZ0JQLEdBQUc7SUFDakNBLElBQUlqQixPQUFPLENBQUNrQixHQUFHLENBQUNqQixRQUFRLElBQUk7UUFBRXFCLFFBQVE7UUFBR0MsTUFBTTtJQUFJO0FBQ3JEO0FBRUEsd0VBQXdFLEdBQ2pFLGVBQWVFO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTTFCLHFEQUFPQTtJQUNqQyxNQUFNYyxRQUFRWSxZQUFZQyxHQUFHLENBQUMxQixTQUFTMkI7SUFDdkMsSUFBSSxDQUFDZCxPQUFPLE9BQU87SUFDbkIsT0FBT0QsWUFBWUM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja3ktbm90ZXMtb25saW5lLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IENPT0tJRSA9IFwibW5fdG9rZW5cIjtcclxuY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiAyNCAqIDc7IC8vIDcgZGF5c1xyXG5cclxuZnVuY3Rpb24gZ2V0U2VjcmV0KCkge1xyXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcbiAgaWYgKCFzZWNyZXQpIHRocm93IG5ldyBFcnJvcihcIkpXVF9TRUNSRVQgaXMgbm90IGRlZmluZWRcIik7XHJcbiAgcmV0dXJuIHNlY3JldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIGdldFNlY3JldCgpLCB7IGV4cGlyZXNJbjogTUFYX0FHRSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBnZXRTZWNyZXQoKSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdXRoQ29va2llKHJlcywgdG9rZW4pIHtcclxuICByZXMuY29va2llcy5zZXQoQ09PS0lFLCB0b2tlbiwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgbWF4QWdlOiBNQVhfQUdFLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckF1dGhDb29raWUocmVzKSB7XHJcbiAgcmVzLmNvb2tpZXMuc2V0KENPT0tJRSwgXCJcIiwgeyBtYXhBZ2U6IDAsIHBhdGg6IFwiL1wiIH0pO1xyXG59XHJcblxyXG4vKiogQ2FsbCBmcm9tIGEgUm91dGUgSGFuZGxlciDigJQgcmV0dXJucyB0aGUgZGVjb2RlZCBKV1QgcGF5bG9hZCBvciBudWxsICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KENPT0tJRSk/LnZhbHVlO1xyXG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xyXG4gIHJldHVybiB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dCIsImNvb2tpZXMiLCJDT09LSUUiLCJNQVhfQUdFIiwiZ2V0U2VjcmV0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsInNldEF1dGhDb29raWUiLCJyZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwibWF4QWdlIiwicGF0aCIsImNsZWFyQXV0aENvb2tpZSIsImdldFNlc3Npb24iLCJjb29raWVTdG9yZSIsImdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/Note.js":
/*!****************************!*\
  !*** ./lib/models/Note.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Note: () => (/* binding */ Note)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NoteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: true,\n        index: true\n    },\n    title: {\n        type: String,\n        default: \"\"\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    isEncrypted: {\n        type: Boolean,\n        default: false\n    },\n    color: {\n        type: String,\n        default: \"purple\"\n    },\n    categoryId: {\n        type: String,\n        default: null\n    },\n    createdAt: {\n        type: String\n    }\n}, {\n    timestamps: false\n});\nconst Note = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Note ?? mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Note\", NoteSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL05vdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsUUFBUTtRQUFFQyxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFRQyxVQUFVO1FBQU1DLE9BQU87SUFBSztJQUN6RkMsT0FBTztRQUFFTixNQUFNTztRQUFRQyxTQUFTO0lBQUc7SUFDbkNDLFNBQVM7UUFBRVQsTUFBTU87UUFBUUgsVUFBVTtJQUFLO0lBQ3hDTSxhQUFhO1FBQUVWLE1BQU1XO1FBQVNILFNBQVM7SUFBTTtJQUM3Q0ksT0FBTztRQUFFWixNQUFNTztRQUFRQyxTQUFTO0lBQVM7SUFDekNLLFlBQVk7UUFBRWIsTUFBTU87UUFBUUMsU0FBUztJQUFLO0lBQzFDTSxXQUFXO1FBQUVkLE1BQU1PO0lBQU87QUFDNUIsR0FDQTtJQUFFUSxZQUFZO0FBQU07QUFHZixNQUFNQyxPQUFPcEIsd0RBQWUsQ0FBQ29CLElBQUksSUFBSXBCLHFEQUFjLENBQUMsUUFBUUMsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9saWIvbW9kZWxzL05vdGUuanM/NDZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBOb3RlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB1c2VySWQ6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiLCByZXF1aXJlZDogdHJ1ZSwgaW5kZXg6IHRydWUgfSxcclxuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiB9LFxyXG4gICAgY29udGVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc0VuY3J5cHRlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgY29sb3I6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcInB1cnBsZVwiIH0sXHJcbiAgICBjYXRlZ29yeUlkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxyXG4gICAgY3JlYXRlZEF0OiB7IHR5cGU6IFN0cmluZyB9LCAvLyBrZWVwIGFzIElTTyBzdHJpbmcgdG8gbWF0Y2ggbG9jYWxTdG9yYWdlIHNoYXBlXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IGZhbHNlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RlID0gbW9uZ29vc2UubW9kZWxzLk5vdGUgPz8gbW9uZ29vc2UubW9kZWwoXCJOb3RlXCIsIE5vdGVTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJOb3RlU2NoZW1hIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImluZGV4IiwidGl0bGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiY29udGVudCIsImlzRW5jcnlwdGVkIiwiQm9vbGVhbiIsImNvbG9yIiwiY2F0ZWdvcnlJZCIsImNyZWF0ZWRBdCIsInRpbWVzdGFtcHMiLCJOb3RlIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Note.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Cache connection across hot-reloads in dev\nlet cached = global._mongoose ?? {\n    conn: null,\n    promise: null\n};\nglobal._mongoose = cached;\nasync function connectDB() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) throw new Error(\"MONGODB_URI is not defined\");\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLDZDQUE2QztBQUM3QyxJQUFJQyxTQUFTQyxPQUFPQyxTQUFTLElBQUk7SUFBRUMsTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFDN0RILE9BQU9DLFNBQVMsR0FBR0Y7QUFFWixlQUFlSztJQUNwQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7SUFDM0MsSUFBSSxDQUFDQSxhQUFhLE1BQU0sSUFBSUcsTUFBTTtJQUNsQyxJQUFJVCxPQUFPRyxJQUFJLEVBQUUsT0FBT0gsT0FBT0csSUFBSTtJQUNuQyxJQUFJLENBQUNILE9BQU9JLE9BQU8sRUFBRTtRQUNuQkosT0FBT0ksT0FBTyxHQUFHTCx1REFBZ0IsQ0FBQ08sYUFBYTtZQUFFSyxnQkFBZ0I7UUFBTTtJQUN6RTtJQUNBWCxPQUFPRyxJQUFJLEdBQUcsTUFBTUgsT0FBT0ksT0FBTztJQUNsQyxPQUFPSixPQUFPRyxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGVzLW9ubGluZS8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbi8vIENhY2hlIGNvbm5lY3Rpb24gYWNyb3NzIGhvdC1yZWxvYWRzIGluIGRldlxyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLl9tb25nb29zZSA/PyB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuZ2xvYmFsLl9tb25nb29zZSA9IGNhY2hlZDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICBpZiAoIU1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZFwiKTtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHsgYnVmZmVyQ29tbWFuZHM6IGZhbHNlIH0pO1xyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJnbG9iYWwiLCJfbW9uZ29vc2UiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY29ubmVjdCIsImJ1ZmZlckNvbW1hbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();