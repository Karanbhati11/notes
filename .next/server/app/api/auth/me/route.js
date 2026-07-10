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
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Live_Projects_notes_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/me/route.js */ \"(rsc)/./app/api/auth/me/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"C:\\\\Live Projects\\\\notes\\\\app\\\\api\\\\auth\\\\me\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Live_Projects_notes_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/me/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTGl2ZSUyMFByb2plY3RzJTVDbm90ZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNMaXZlJTIwUHJvamVjdHMlNUNub3RlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvPzRiZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbWVcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbWVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbWUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/me/route.js":
/*!**********************************!*\
  !*** ./app/api/auth/me/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\nconst dynamic = \"force-dynamic\";\n\n\nasync function GET() {\n    try {\n        // Read cookie directly — no DB touch if no token present\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get(\"mn_token\")?.value;\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            });\n        }\n        // Only import heavy deps when we actually have a token\n        const jwt = (await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/jsonwebtoken\"), __webpack_require__.e(\"vendor-chunks/lodash.includes\"), __webpack_require__.e(\"vendor-chunks/jws\"), __webpack_require__.e(\"vendor-chunks/lodash.once\"), __webpack_require__.e(\"vendor-chunks/jwa\"), __webpack_require__.e(\"vendor-chunks/lodash.isinteger\"), __webpack_require__.e(\"vendor-chunks/ecdsa-sig-formatter\"), __webpack_require__.e(\"vendor-chunks/lodash.isplainobject\"), __webpack_require__.e(\"vendor-chunks/ms\"), __webpack_require__.e(\"vendor-chunks/lodash.isstring\"), __webpack_require__.e(\"vendor-chunks/lodash.isnumber\"), __webpack_require__.e(\"vendor-chunks/lodash.isboolean\"), __webpack_require__.e(\"vendor-chunks/safe-buffer\"), __webpack_require__.e(\"vendor-chunks/buffer-equal-constant-time\")]).then(__webpack_require__.t.bind(__webpack_require__, /*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\", 23))).default;\n        const secret = process.env.JWT_SECRET;\n        let session;\n        try {\n            session = jwt.verify(token, secret);\n        } catch  {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            });\n        }\n        const { connectDB } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_mongoose_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\"));\n        const { User } = await __webpack_require__.e(/*! import() */ \"_rsc_lib_models_User_js\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/models/User */ \"(rsc)/./lib/models/User.js\"));\n        await connectDB();\n        const user = await User.findById(session.userId).select(\"email\").lean();\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: null\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                email: user.email\n            }\n        });\n    } catch (err) {\n        console.error(\"[/api/auth/me]\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: null\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbWUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFVBQVUsZ0JBQWdCO0FBRUk7QUFDSjtBQUVoQyxlQUFlRztJQUNwQixJQUFJO1FBQ0YseURBQXlEO1FBQ3pELE1BQU1DLGNBQWMsTUFBTUYscURBQU9BO1FBQ2pDLE1BQU1HLFFBQVFELFlBQVlFLEdBQUcsQ0FBQyxhQUFhQztRQUUzQyxJQUFJLENBQUNGLE9BQU87WUFDVixPQUFPSixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUs7UUFDeEM7UUFFQSx1REFBdUQ7UUFDdkQsTUFBTUMsTUFBTSxDQUFDLE1BQU0sODRCQUFxQixFQUFHQyxPQUFPO1FBQ2xELE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUVyQyxJQUFJQztRQUNKLElBQUk7WUFDRkEsVUFBVU4sSUFBSU8sTUFBTSxDQUFDWixPQUFPTztRQUM5QixFQUFFLE9BQU07WUFDTixPQUFPWCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUs7UUFDeEM7UUFFQSxNQUFNLEVBQUVTLFNBQVMsRUFBRSxHQUFHLE1BQU0sa0tBQXdCO1FBQ3BELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTSwyS0FBMkI7UUFFbEQsTUFBTUQ7UUFDTixNQUFNVCxPQUFPLE1BQU1VLEtBQUtDLFFBQVEsQ0FBQ0osUUFBUUssTUFBTSxFQUFFQyxNQUFNLENBQUMsU0FBU0MsSUFBSTtRQUVyRSxJQUFJLENBQUNkLE1BQU0sT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQUs7UUFFakQsT0FBT1IscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUN2QkMsTUFBTTtnQkFBRWUsT0FBT2YsS0FBS2UsS0FBSztZQUFDO1FBQzVCO0lBQ0YsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQyxrQkFBa0JGO1FBQ2hDLE9BQU94QixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBSztJQUN4QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGVzLW9ubGluZS8uL2FwcC9hcGkvYXV0aC9tZS9yb3V0ZS5qcz83ZTY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCI7XHJcblxyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFJlYWQgY29va2llIGRpcmVjdGx5IOKAlCBubyBEQiB0b3VjaCBpZiBubyB0b2tlbiBwcmVzZW50XHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KFwibW5fdG9rZW5cIik/LnZhbHVlO1xyXG5cclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogbnVsbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGltcG9ydCBoZWF2eSBkZXBzIHdoZW4gd2UgYWN0dWFsbHkgaGF2ZSBhIHRva2VuXHJcbiAgICBjb25zdCBqd3QgPSAoYXdhaXQgaW1wb3J0KFwianNvbndlYnRva2VuXCIpKS5kZWZhdWx0O1xyXG4gICAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcclxuXHJcbiAgICBsZXQgc2Vzc2lvbjtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNlc3Npb24gPSBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVzZXI6IG51bGwgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjb25uZWN0REIgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL21vbmdvb3NlXCIpO1xyXG4gICAgY29uc3QgeyBVc2VyIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9tb2RlbHMvVXNlclwiKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHNlc3Npb24udXNlcklkKS5zZWxlY3QoXCJlbWFpbFwiKS5sZWFuKCk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBudWxsIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHVzZXI6IHsgZW1haWw6IHVzZXIuZW1haWwgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlsvYXBpL2F1dGgvbWVdXCIsIGVycik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBudWxsIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIk5leHRSZXNwb25zZSIsImNvb2tpZXMiLCJHRVQiLCJjb29raWVTdG9yZSIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJqc29uIiwidXNlciIsImp3dCIsImRlZmF1bHQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInNlc3Npb24iLCJ2ZXJpZnkiLCJjb25uZWN0REIiLCJVc2VyIiwiZmluZEJ5SWQiLCJ1c2VySWQiLCJzZWxlY3QiLCJsZWFuIiwiZW1haWwiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/me/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();