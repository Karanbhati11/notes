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
exports.id = "app/api/session-note/route";
exports.ids = ["app/api/session-note/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsession-note%2Froute&page=%2Fapi%2Fsession-note%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession-note%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsession-note%2Froute&page=%2Fapi%2Fsession-note%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession-note%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Live_Projects_notes_app_api_session_note_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/session-note/route.js */ \"(rsc)/./app/api/session-note/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/session-note/route\",\n        pathname: \"/api/session-note\",\n        filename: \"route\",\n        bundlePath: \"app/api/session-note/route\"\n    },\n    resolvedPagePath: \"C:\\\\Live Projects\\\\notes\\\\app\\\\api\\\\session-note\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Live_Projects_notes_app_api_session_note_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/session-note/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZXNzaW9uLW5vdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlc3Npb24tbm90ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlc3Npb24tbm90ZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTGl2ZSUyMFByb2plY3RzJTVDbm90ZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNMaXZlJTIwUHJvamVjdHMlNUNub3RlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDVTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvPzAyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXHNlc3Npb24tbm90ZVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2Vzc2lvbi1ub3RlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2Vzc2lvbi1ub3RlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZXNzaW9uLW5vdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxMaXZlIFByb2plY3RzXFxcXG5vdGVzXFxcXGFwcFxcXFxhcGlcXFxcc2Vzc2lvbi1ub3RlXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZXNzaW9uLW5vdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsession-note%2Froute&page=%2Fapi%2Fsession-note%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession-note%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/session-note/route.js":
/*!***************************************!*\
  !*** ./app/api/session-note/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nasync function getUserId() {\n    try {\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get(\"mn_token\")?.value;\n        if (!token) return null;\n        const jwt = (await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/jsonwebtoken\"), __webpack_require__.e(\"vendor-chunks/lodash.includes\"), __webpack_require__.e(\"vendor-chunks/jws\"), __webpack_require__.e(\"vendor-chunks/lodash.once\"), __webpack_require__.e(\"vendor-chunks/jwa\"), __webpack_require__.e(\"vendor-chunks/lodash.isinteger\"), __webpack_require__.e(\"vendor-chunks/ecdsa-sig-formatter\"), __webpack_require__.e(\"vendor-chunks/lodash.isplainobject\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/lodash.isstring\"), __webpack_require__.e(\"vendor-chunks/lodash.isnumber\"), __webpack_require__.e(\"vendor-chunks/lodash.isboolean\"), __webpack_require__.e(\"vendor-chunks/safe-buffer\"), __webpack_require__.e(\"vendor-chunks/buffer-equal-constant-time\")]).then(__webpack_require__.t.bind(__webpack_require__, /*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\", 23))).default;\n        const session = jwt.verify(token, process.env.JWT_SECRET);\n        return session.userId;\n    } catch  {\n        return null;\n    }\n}\n// GET — fetch saved session note\nasync function GET() {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        content: null\n    });\n    const { connectDB } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_mongoose_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\"));\n    const { SessionNoteModel } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_models_SessionNote_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/models/SessionNote */ \"(rsc)/./lib/models/SessionNote.js\"));\n    await connectDB();\n    const doc = await SessionNoteModel.findOne({\n        userId\n    }).lean();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        content: doc?.content ?? null,\n        updatedAt: doc?.updatedAt ?? null\n    });\n}\n// POST — save session note\nasync function POST(req) {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { content } = await req.json();\n    const { connectDB } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_mongoose_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\"));\n    const { SessionNoteModel } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_models_SessionNote_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/models/SessionNote */ \"(rsc)/./lib/models/SessionNote.js\"));\n    await connectDB();\n    await SessionNoteModel.findOneAndUpdate({\n        userId\n    }, {\n        content,\n        updatedAt: new Date()\n    }, {\n        upsert: true,\n        new: true\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n// DELETE — clear session note\nasync function DELETE() {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { connectDB } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_mongoose_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\"));\n    const { SessionNoteModel } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_models_SessionNote_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/models/SessionNote */ \"(rsc)/./lib/models/SessionNote.js\"));\n    await connectDB();\n    await SessionNoteModel.deleteOne({\n        userId\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Nlc3Npb24tbm90ZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNKO0FBRXZDLGVBQWVFO0lBQ2IsSUFBSTtRQUNGLE1BQU1DLGNBQWMsTUFBTUYscURBQU9BO1FBQ2pDLE1BQU1HLFFBQVFELFlBQVlFLEdBQUcsQ0FBQyxhQUFhQztRQUMzQyxJQUFJLENBQUNGLE9BQU8sT0FBTztRQUVuQixNQUFNRyxNQUFNLENBQUMsTUFBTSw4NEJBQXFCLEVBQUdDLE9BQU87UUFDbEQsTUFBTUMsVUFBVUYsSUFBSUcsTUFBTSxDQUFDTixPQUFPTyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDeEQsT0FBT0osUUFBUUssTUFBTTtJQUN2QixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRjtBQUVBLGlDQUFpQztBQUMxQixlQUFlQztJQUNwQixNQUFNRCxTQUFTLE1BQU1aO0lBQ3JCLElBQUksQ0FBQ1ksUUFBUSxPQUFPZCxxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztRQUFFQyxTQUFTO0lBQUs7SUFFdEQsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBRyxNQUFNLGtLQUF3QjtJQUNwRCxNQUFNLEVBQUVDLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxnTUFBa0M7SUFDckUsTUFBTUQ7SUFFTixNQUFNRSxNQUFNLE1BQU1ELGlCQUFpQkUsT0FBTyxDQUFDO1FBQUVQO0lBQU8sR0FBR1EsSUFBSTtJQUMzRCxPQUFPdEIscURBQVlBLENBQUNnQixJQUFJLENBQUM7UUFBRUMsU0FBU0csS0FBS0gsV0FBVztRQUFNTSxXQUFXSCxLQUFLRyxhQUFhO0lBQUs7QUFDOUY7QUFFQSwyQkFBMkI7QUFDcEIsZUFBZUMsS0FBS0MsR0FBRztJQUM1QixNQUFNWCxTQUFTLE1BQU1aO0lBQ3JCLElBQUksQ0FBQ1ksUUFBUSxPQUFPZCxxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQztRQUFFVSxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFL0UsTUFBTSxFQUFFVixPQUFPLEVBQUUsR0FBRyxNQUFNUSxJQUFJVCxJQUFJO0lBRWxDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxrS0FBd0I7SUFDcEQsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sZ01BQWtDO0lBQ3JFLE1BQU1EO0lBRU4sTUFBTUMsaUJBQWlCUyxnQkFBZ0IsQ0FDckM7UUFBRWQ7SUFBTyxHQUNUO1FBQUVHO1FBQVNNLFdBQVcsSUFBSU07SUFBTyxHQUNqQztRQUFFQyxRQUFRO1FBQU1DLEtBQUs7SUFBSztJQUc1QixPQUFPL0IscURBQVlBLENBQUNnQixJQUFJLENBQUM7UUFBRWdCLElBQUk7SUFBSztBQUN0QztBQUVBLDhCQUE4QjtBQUN2QixlQUFlQztJQUNwQixNQUFNbkIsU0FBUyxNQUFNWjtJQUNyQixJQUFJLENBQUNZLFFBQVEsT0FBT2QscURBQVlBLENBQUNnQixJQUFJLENBQUM7UUFBRVUsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRS9FLE1BQU0sRUFBRVQsU0FBUyxFQUFFLEdBQUcsTUFBTSxrS0FBd0I7SUFDcEQsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sZ01BQWtDO0lBQ3JFLE1BQU1EO0lBRU4sTUFBTUMsaUJBQWlCZSxTQUFTLENBQUM7UUFBRXBCO0lBQU87SUFDMUMsT0FBT2QscURBQVlBLENBQUNnQixJQUFJLENBQUM7UUFBRWdCLElBQUk7SUFBSztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9hcHAvYXBpL3Nlc3Npb24tbm90ZS9yb3V0ZS5qcz9hZTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KFwibW5fdG9rZW5cIik/LnZhbHVlO1xyXG4gICAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgand0ID0gKGF3YWl0IGltcG9ydChcImpzb253ZWJ0b2tlblwiKSkuZGVmYXVsdDtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgIHJldHVybiBzZXNzaW9uLnVzZXJJZDtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR0VUIOKAlCBmZXRjaCBzYXZlZCBzZXNzaW9uIG5vdGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcclxuICBpZiAoIXVzZXJJZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgY29udGVudDogbnVsbCB9KTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0REIgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL21vbmdvb3NlXCIpO1xyXG4gIGNvbnN0IHsgU2Vzc2lvbk5vdGVNb2RlbCB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvbW9kZWxzL1Nlc3Npb25Ob3RlXCIpO1xyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICBjb25zdCBkb2MgPSBhd2FpdCBTZXNzaW9uTm90ZU1vZGVsLmZpbmRPbmUoeyB1c2VySWQgfSkubGVhbigpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNvbnRlbnQ6IGRvYz8uY29udGVudCA/PyBudWxsLCB1cGRhdGVkQXQ6IGRvYz8udXBkYXRlZEF0ID8/IG51bGwgfSk7XHJcbn1cclxuXHJcbi8vIFBPU1Qg4oCUIHNhdmUgc2Vzc2lvbiBub3RlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xyXG4gIGlmICghdXNlcklkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG5cclxuICBjb25zdCB7IGNvbnRlbnQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdERCIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9tb25nb29zZVwiKTtcclxuICBjb25zdCB7IFNlc3Npb25Ob3RlTW9kZWwgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL21vZGVscy9TZXNzaW9uTm90ZVwiKTtcclxuICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgYXdhaXQgU2Vzc2lvbk5vdGVNb2RlbC5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgeyB1c2VySWQgfSxcclxuICAgIHsgY29udGVudCwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpIH0sXHJcbiAgICB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlIH1cclxuICApO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcclxufVxyXG5cclxuLy8gREVMRVRFIOKAlCBjbGVhciBzZXNzaW9uIG5vdGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURSgpIHtcclxuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcclxuICBpZiAoIXVzZXJJZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0REIgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL21vbmdvb3NlXCIpO1xyXG4gIGNvbnN0IHsgU2Vzc2lvbk5vdGVNb2RlbCB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvbW9kZWxzL1Nlc3Npb25Ob3RlXCIpO1xyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICBhd2FpdCBTZXNzaW9uTm90ZU1vZGVsLmRlbGV0ZU9uZSh7IHVzZXJJZCB9KTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29va2llcyIsImdldFVzZXJJZCIsImNvb2tpZVN0b3JlIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsImp3dCIsImRlZmF1bHQiLCJzZXNzaW9uIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ1c2VySWQiLCJHRVQiLCJqc29uIiwiY29udGVudCIsImNvbm5lY3REQiIsIlNlc3Npb25Ob3RlTW9kZWwiLCJkb2MiLCJmaW5kT25lIiwibGVhbiIsInVwZGF0ZWRBdCIsIlBPU1QiLCJyZXEiLCJlcnJvciIsInN0YXR1cyIsImZpbmRPbmVBbmRVcGRhdGUiLCJEYXRlIiwidXBzZXJ0IiwibmV3Iiwib2siLCJERUxFVEUiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/session-note/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsession-note%2Froute&page=%2Fapi%2Fsession-note%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsession-note%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();