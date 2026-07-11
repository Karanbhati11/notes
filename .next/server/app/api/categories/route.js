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
exports.id = "app/api/categories/route";
exports.ids = ["app/api/categories/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Live_Projects_notes_app_api_categories_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/categories/route.js */ \"(rsc)/./app/api/categories/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/categories/route\",\n        pathname: \"/api/categories\",\n        filename: \"route\",\n        bundlePath: \"app/api/categories/route\"\n    },\n    resolvedPagePath: \"C:\\\\Live Projects\\\\notes\\\\app\\\\api\\\\categories\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Live_Projects_notes_app_api_categories_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/categories/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2F0ZWdvcmllcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTGl2ZSUyMFByb2plY3RzJTVDbm90ZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNMaXZlJTIwUHJvamVjdHMlNUNub3RlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDUTtBQUNyRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvP2M5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGNhdGVnb3JpZXNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NhdGVnb3JpZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jYXRlZ29yaWVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGNhdGVnb3JpZXNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NhdGVnb3JpZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/categories/route.js":
/*!*************************************!*\
  !*** ./app/api/categories/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\");\n/* harmony import */ var _lib_models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/Category */ \"(rsc)/./lib/models/Category.js\");\n\n\n\n\nasync function getUserId() {\n    const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    if (!session) return null;\n    return session.userId;\n}\n// GET — fetch all categories\nasync function GET() {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const cats = await _lib_models_Category__WEBPACK_IMPORTED_MODULE_3__.Category.find({\n        userId\n    }).lean();\n    const clean = cats.map(({ _id, userId: _u, __v, ...rest })=>({\n            id: _id.toString(),\n            ...rest\n        }));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        categories: clean\n    });\n}\n// POST — full replace sync\nasync function POST(req) {\n    const userId = await getUserId();\n    if (!userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { categories } = await req.json();\n    if (!Array.isArray(categories)) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Invalid payload\"\n    }, {\n        status: 400\n    });\n    await _lib_models_Category__WEBPACK_IMPORTED_MODULE_3__.Category.deleteMany({\n        userId\n    });\n    if (categories.length > 0) {\n        await _lib_models_Category__WEBPACK_IMPORTED_MODULE_3__.Category.insertMany(categories.map((c)=>({\n                ...c,\n                userId\n            })));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDRztBQUNNO0FBRWpELGVBQWVJO0lBQ2IsTUFBTUMsVUFBVSxNQUFNSixxREFBVUE7SUFDaEMsSUFBSSxDQUFDSSxTQUFTLE9BQU87SUFDckIsT0FBT0EsUUFBUUMsTUFBTTtBQUN2QjtBQUVBLDZCQUE2QjtBQUN0QixlQUFlQztJQUNwQixNQUFNRCxTQUFTLE1BQU1GO0lBQ3JCLElBQUksQ0FBQ0UsUUFBUSxPQUFPTixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVDLE9BQU87SUFBZSxHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUUvRSxNQUFNQyxPQUFPLE1BQU1SLDBEQUFRQSxDQUFDUyxJQUFJLENBQUM7UUFBRU47SUFBTyxHQUFHTyxJQUFJO0lBQ2pELE1BQU1DLFFBQVFILEtBQUtJLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsRUFBRVYsUUFBUVcsRUFBRSxFQUFFQyxHQUFHLEVBQUUsR0FBR0MsTUFBTSxHQUFNO1lBQzdEQyxJQUFJSixJQUFJSyxRQUFRO1lBQ2hCLEdBQUdGLElBQUk7UUFDVDtJQUNBLE9BQU9uQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVjLFlBQVlSO0lBQU07QUFDL0M7QUFFQSwyQkFBMkI7QUFDcEIsZUFBZVMsS0FBS0MsR0FBRztJQUM1QixNQUFNbEIsU0FBUyxNQUFNRjtJQUNyQixJQUFJLENBQUNFLFFBQVEsT0FBT04scURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFFL0UsTUFBTSxFQUFFWSxVQUFVLEVBQUUsR0FBRyxNQUFNRSxJQUFJaEIsSUFBSTtJQUNyQyxJQUFJLENBQUNpQixNQUFNQyxPQUFPLENBQUNKLGFBQWEsT0FBT3RCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFrQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUVyRyxNQUFNUCwwREFBUUEsQ0FBQ3dCLFVBQVUsQ0FBQztRQUFFckI7SUFBTztJQUNuQyxJQUFJZ0IsV0FBV00sTUFBTSxHQUFHLEdBQUc7UUFDekIsTUFBTXpCLDBEQUFRQSxDQUFDMEIsVUFBVSxDQUFDUCxXQUFXUCxHQUFHLENBQUMsQ0FBQ2UsSUFBTztnQkFBRSxHQUFHQSxDQUFDO2dCQUFFeEI7WUFBTztJQUNsRTtJQUVBLE9BQU9OLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRXVCLElBQUk7SUFBSztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUuanM/ZDQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCJAL2xpYi9tb2RlbHMvQ2F0ZWdvcnlcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZCgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpO1xyXG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIHNlc3Npb24udXNlcklkO1xyXG59XHJcblxyXG4vLyBHRVQg4oCUIGZldGNoIGFsbCBjYXRlZ29yaWVzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XHJcbiAgaWYgKCF1c2VySWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGNvbnN0IGNhdHMgPSBhd2FpdCBDYXRlZ29yeS5maW5kKHsgdXNlcklkIH0pLmxlYW4oKTtcclxuICBjb25zdCBjbGVhbiA9IGNhdHMubWFwKCh7IF9pZCwgdXNlcklkOiBfdSwgX192LCAuLi5yZXN0IH0pID0+ICh7XHJcbiAgICBpZDogX2lkLnRvU3RyaW5nKCksXHJcbiAgICAuLi5yZXN0LFxyXG4gIH0pKTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBjYXRlZ29yaWVzOiBjbGVhbiB9KTtcclxufVxyXG5cclxuLy8gUE9TVCDigJQgZnVsbCByZXBsYWNlIHN5bmNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XHJcbiAgaWYgKCF1c2VySWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgcGF5bG9hZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcblxyXG4gIGF3YWl0IENhdGVnb3J5LmRlbGV0ZU1hbnkoeyB1c2VySWQgfSk7XHJcbiAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgYXdhaXQgQ2F0ZWdvcnkuaW5zZXJ0TWFueShjYXRlZ29yaWVzLm1hcCgoYykgPT4gKHsgLi4uYywgdXNlcklkIH0pKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvazogdHJ1ZSB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2Vzc2lvbiIsImNvbm5lY3REQiIsIkNhdGVnb3J5IiwiZ2V0VXNlcklkIiwic2Vzc2lvbiIsInVzZXJJZCIsIkdFVCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImNhdHMiLCJmaW5kIiwibGVhbiIsImNsZWFuIiwibWFwIiwiX2lkIiwiX3UiLCJfX3YiLCJyZXN0IiwiaWQiLCJ0b1N0cmluZyIsImNhdGVnb3JpZXMiLCJQT1NUIiwicmVxIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVsZXRlTWFueSIsImxlbmd0aCIsImluc2VydE1hbnkiLCJjIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/categories/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst COOKIE = \"mn_token\";\nconst MAX_AGE = 60 * 60 * 24 * 7; // 7 days\nfunction getSecret() {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET is not defined\");\n    return secret;\n}\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, getSecret(), {\n        expiresIn: MAX_AGE\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, getSecret());\n    } catch  {\n        return null;\n    }\n}\nfunction setAuthCookie(res, token) {\n    res.cookies.set(COOKIE, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        maxAge: MAX_AGE,\n        path: \"/\"\n    });\n}\nfunction clearAuthCookie(res) {\n    res.cookies.set(COOKIE, \"\", {\n        maxAge: 0,\n        path: \"/\"\n    });\n}\n/** Call from a Route Handler — returns the decoded JWT payload or null */ async function getSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const token = cookieStore.get(COOKIE)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBRXZDLE1BQU1FLFNBQVM7QUFDZixNQUFNQyxVQUFVLEtBQUssS0FBSyxLQUFLLEdBQUcsU0FBUztBQUUzQyxTQUFTQztJQUNQLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNyQyxJQUFJLENBQUNILFFBQVEsTUFBTSxJQUFJSSxNQUFNO0lBQzdCLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTSyxVQUFVQyxPQUFPO0lBQy9CLE9BQU9YLHdEQUFRLENBQUNXLFNBQVNQLGFBQWE7UUFBRVMsV0FBV1Y7SUFBUTtBQUM3RDtBQUVPLFNBQVNXLFlBQVlDLEtBQUs7SUFDL0IsSUFBSTtRQUNGLE9BQU9mLDBEQUFVLENBQUNlLE9BQU9YO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sU0FBU2EsY0FBY0MsR0FBRyxFQUFFSCxLQUFLO0lBQ3RDRyxJQUFJakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDakIsUUFBUWEsT0FBTztRQUM3QkssVUFBVTtRQUNWQyxRQUFRZixrQkFBeUI7UUFDakNnQixVQUFVO1FBQ1ZDLFFBQVFwQjtRQUNScUIsTUFBTTtJQUNSO0FBQ0Y7QUFFTyxTQUFTQyxnQkFBZ0JQLEdBQUc7SUFDakNBLElBQUlqQixPQUFPLENBQUNrQixHQUFHLENBQUNqQixRQUFRLElBQUk7UUFBRXFCLFFBQVE7UUFBR0MsTUFBTTtJQUFJO0FBQ3JEO0FBRUEsd0VBQXdFLEdBQ2pFLGVBQWVFO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTTFCLHFEQUFPQTtJQUNqQyxNQUFNYyxRQUFRWSxZQUFZQyxHQUFHLENBQUMxQixTQUFTMkI7SUFDdkMsSUFBSSxDQUFDZCxPQUFPLE9BQU87SUFDbkIsT0FBT0QsWUFBWUM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja3ktbm90ZXMtb25saW5lLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IENPT0tJRSA9IFwibW5fdG9rZW5cIjtcclxuY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiAyNCAqIDc7IC8vIDcgZGF5c1xyXG5cclxuZnVuY3Rpb24gZ2V0U2VjcmV0KCkge1xyXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcbiAgaWYgKCFzZWNyZXQpIHRocm93IG5ldyBFcnJvcihcIkpXVF9TRUNSRVQgaXMgbm90IGRlZmluZWRcIik7XHJcbiAgcmV0dXJuIHNlY3JldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIGdldFNlY3JldCgpLCB7IGV4cGlyZXNJbjogTUFYX0FHRSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBnZXRTZWNyZXQoKSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdXRoQ29va2llKHJlcywgdG9rZW4pIHtcclxuICByZXMuY29va2llcy5zZXQoQ09PS0lFLCB0b2tlbiwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgbWF4QWdlOiBNQVhfQUdFLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckF1dGhDb29raWUocmVzKSB7XHJcbiAgcmVzLmNvb2tpZXMuc2V0KENPT0tJRSwgXCJcIiwgeyBtYXhBZ2U6IDAsIHBhdGg6IFwiL1wiIH0pO1xyXG59XHJcblxyXG4vKiogQ2FsbCBmcm9tIGEgUm91dGUgSGFuZGxlciDigJQgcmV0dXJucyB0aGUgZGVjb2RlZCBKV1QgcGF5bG9hZCBvciBudWxsICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KENPT0tJRSk/LnZhbHVlO1xyXG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xyXG4gIHJldHVybiB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dCIsImNvb2tpZXMiLCJDT09LSUUiLCJNQVhfQUdFIiwiZ2V0U2VjcmV0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsInNldEF1dGhDb29raWUiLCJyZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwibWF4QWdlIiwicGF0aCIsImNsZWFyQXV0aENvb2tpZSIsImdldFNlc3Npb24iLCJjb29raWVTdG9yZSIsImdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/Category.js":
/*!********************************!*\
  !*** ./lib/models/Category.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Category: () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: true,\n        index: true\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    clientId: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Category ?? mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0NhdGVnb3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxpQkFBaUIsSUFBSUQsd0RBQWUsQ0FDeEM7SUFDRUcsUUFBUTtRQUFFQyxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFRQyxVQUFVO1FBQU1DLE9BQU87SUFBSztJQUN6RkMsTUFBTTtRQUFFTixNQUFNTztRQUFRSCxVQUFVO1FBQU1JLE1BQU07SUFBSztJQUNqREMsVUFBVTtRQUFFVCxNQUFNTztJQUFPO0FBQzNCLEdBQ0E7SUFBRUcsWUFBWTtBQUFLO0FBR2QsTUFBTUMsV0FDWGYsd0RBQWUsQ0FBQ2UsUUFBUSxJQUFJZixxREFBYyxDQUFDLFlBQVlDLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9saWIvbW9kZWxzL0NhdGVnb3J5LmpzP2Q1YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXJJZDogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIsIHJlcXVpcmVkOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcbiAgICBjbGllbnRJZDogeyB0eXBlOiBTdHJpbmcgfSwgLy8gcHJlc2VydmUgdGhlIGNsaWVudC1zaWRlIGlkIGZvciBjYXRlZ29yeSByZWZlcmVuY2VzIGluIG5vdGVzXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5ID1cclxuICBtb25nb29zZS5tb2RlbHMuQ2F0ZWdvcnkgPz8gbW9uZ29vc2UubW9kZWwoXCJDYXRlZ29yeVwiLCBDYXRlZ29yeVNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNhdGVnb3J5U2NoZW1hIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImluZGV4IiwibmFtZSIsIlN0cmluZyIsInRyaW0iLCJjbGllbnRJZCIsInRpbWVzdGFtcHMiLCJDYXRlZ29yeSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Category.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();