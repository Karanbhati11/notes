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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Live_Projects_notes_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.js */ \"(rsc)/./app/api/auth/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Live Projects\\\\notes\\\\app\\\\api\\\\auth\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Live_Projects_notes_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTGl2ZSUyMFByb2plY3RzJTVDbm90ZXMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNMaXZlJTIwUHJvamVjdHMlNUNub3RlcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDUztBQUN0RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvP2ZhNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcTGl2ZSBQcm9qZWN0c1xcXFxub3Rlc1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/login/route.js":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongoose */ \"(rsc)/./lib/mongoose.js\");\n/* harmony import */ var _lib_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/User */ \"(rsc)/./lib/models/User.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        if (!email || !password) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Email and password are required.\"\n        }, {\n            status: 400\n        });\n        await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        const user = await _lib_models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n            email: email.toLowerCase()\n        });\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid email or password.\"\n        }, {\n            status: 401\n        });\n        const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.passwordHash);\n        if (!valid) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid email or password.\"\n        }, {\n            status: 401\n        });\n        const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_4__.signToken)({\n            userId: user._id.toString(),\n            email: user.email\n        });\n        const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                email: user.email\n            }\n        });\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_4__.setAuthCookie)(res, token);\n        return res;\n    } catch (err) {\n        console.error(\"Login error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Something went wrong. Please try again.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNiO0FBQ2E7QUFDRjtBQUNhO0FBRS9DLGVBQWVNLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixJQUFJRyxJQUFJO1FBRTFDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUNiLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFtQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUV4RixNQUFNVix3REFBU0E7UUFFZixNQUFNVyxPQUFPLE1BQU1WLGtEQUFJQSxDQUFDVyxPQUFPLENBQUM7WUFBRU4sT0FBT0EsTUFBTU8sV0FBVztRQUFHO1FBQzdELElBQUksQ0FBQ0YsTUFDSCxPQUFPYixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNkIsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFFbEYsTUFBTUksUUFBUSxNQUFNZix1REFBYyxDQUFDUSxVQUFVSSxLQUFLSyxZQUFZO1FBQzlELElBQUksQ0FBQ0YsT0FDSCxPQUFPaEIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTZCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBRWxGLE1BQU1PLFFBQVFmLG9EQUFTQSxDQUFDO1lBQ3RCZ0IsUUFBUVAsS0FBS1EsR0FBRyxDQUFDQyxRQUFRO1lBQ3pCZCxPQUFPSyxLQUFLTCxLQUFLO1FBQ25CO1FBRUEsTUFBTWUsTUFBTXZCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDNUJHLE1BQU07Z0JBQ0pMLE9BQU9LLEtBQUtMLEtBQUs7WUFDbkI7UUFDRjtRQUVBSCx3REFBYUEsQ0FBQ2tCLEtBQUtKO1FBQ25CLE9BQU9JO0lBQ1QsRUFBRSxPQUFPQyxLQUFLO1FBQ1pDLFFBQVFkLEtBQUssQ0FBQyxnQkFBZ0JhO1FBQzlCLE9BQU94QixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBMEMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUuanM/OGYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9saWIvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgc2lnblRva2VuLCBzZXRBdXRoQ29va2llIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZClcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC5cIiB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9KTtcclxuICAgIGlmICghdXNlcilcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcclxuICAgIGlmICghdmFsaWQpXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHNpZ25Ub2tlbih7XHJcbiAgICAgIHVzZXJJZDogdXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEF1dGhDb29raWUocmVzLCB0b2tlbik7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGVycm9yOlwiLCBlcnIpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImJjcnlwdCIsImNvbm5lY3REQiIsIlVzZXIiLCJzaWduVG9rZW4iLCJzZXRBdXRoQ29va2llIiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c2VyIiwiZmluZE9uZSIsInRvTG93ZXJDYXNlIiwidmFsaWQiLCJjb21wYXJlIiwicGFzc3dvcmRIYXNoIiwidG9rZW4iLCJ1c2VySWQiLCJfaWQiLCJ0b1N0cmluZyIsInJlcyIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst COOKIE = \"mn_token\";\nconst MAX_AGE = 60 * 60 * 24 * 7; // 7 days\nfunction getSecret() {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET is not defined\");\n    return secret;\n}\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, getSecret(), {\n        expiresIn: MAX_AGE\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, getSecret());\n    } catch  {\n        return null;\n    }\n}\nfunction setAuthCookie(res, token) {\n    res.cookies.set(COOKIE, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        maxAge: MAX_AGE,\n        path: \"/\"\n    });\n}\nfunction clearAuthCookie(res) {\n    res.cookies.set(COOKIE, \"\", {\n        maxAge: 0,\n        path: \"/\"\n    });\n}\n/** Call from a Route Handler — returns the decoded JWT payload or null */ async function getSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const token = cookieStore.get(COOKIE)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBRXZDLE1BQU1FLFNBQVM7QUFDZixNQUFNQyxVQUFVLEtBQUssS0FBSyxLQUFLLEdBQUcsU0FBUztBQUUzQyxTQUFTQztJQUNQLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNyQyxJQUFJLENBQUNILFFBQVEsTUFBTSxJQUFJSSxNQUFNO0lBQzdCLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTSyxVQUFVQyxPQUFPO0lBQy9CLE9BQU9YLHdEQUFRLENBQUNXLFNBQVNQLGFBQWE7UUFBRVMsV0FBV1Y7SUFBUTtBQUM3RDtBQUVPLFNBQVNXLFlBQVlDLEtBQUs7SUFDL0IsSUFBSTtRQUNGLE9BQU9mLDBEQUFVLENBQUNlLE9BQU9YO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sU0FBU2EsY0FBY0MsR0FBRyxFQUFFSCxLQUFLO0lBQ3RDRyxJQUFJakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDakIsUUFBUWEsT0FBTztRQUM3QkssVUFBVTtRQUNWQyxRQUFRZixrQkFBeUI7UUFDakNnQixVQUFVO1FBQ1ZDLFFBQVFwQjtRQUNScUIsTUFBTTtJQUNSO0FBQ0Y7QUFFTyxTQUFTQyxnQkFBZ0JQLEdBQUc7SUFDakNBLElBQUlqQixPQUFPLENBQUNrQixHQUFHLENBQUNqQixRQUFRLElBQUk7UUFBRXFCLFFBQVE7UUFBR0MsTUFBTTtJQUFJO0FBQ3JEO0FBRUEsd0VBQXdFLEdBQ2pFLGVBQWVFO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTTFCLHFEQUFPQTtJQUNqQyxNQUFNYyxRQUFRWSxZQUFZQyxHQUFHLENBQUMxQixTQUFTMkI7SUFDdkMsSUFBSSxDQUFDZCxPQUFPLE9BQU87SUFDbkIsT0FBT0QsWUFBWUM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGlja3ktbm90ZXMtb25saW5lLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuXHJcbmNvbnN0IENPT0tJRSA9IFwibW5fdG9rZW5cIjtcclxuY29uc3QgTUFYX0FHRSA9IDYwICogNjAgKiAyNCAqIDc7IC8vIDcgZGF5c1xyXG5cclxuZnVuY3Rpb24gZ2V0U2VjcmV0KCkge1xyXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcbiAgaWYgKCFzZWNyZXQpIHRocm93IG5ldyBFcnJvcihcIkpXVF9TRUNSRVQgaXMgbm90IGRlZmluZWRcIik7XHJcbiAgcmV0dXJuIHNlY3JldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Ub2tlbihwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIGdldFNlY3JldCgpLCB7IGV4cGlyZXNJbjogTUFYX0FHRSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBnZXRTZWNyZXQoKSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBdXRoQ29va2llKHJlcywgdG9rZW4pIHtcclxuICByZXMuY29va2llcy5zZXQoQ09PS0lFLCB0b2tlbiwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxyXG4gICAgbWF4QWdlOiBNQVhfQUdFLFxyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckF1dGhDb29raWUocmVzKSB7XHJcbiAgcmVzLmNvb2tpZXMuc2V0KENPT0tJRSwgXCJcIiwgeyBtYXhBZ2U6IDAsIHBhdGg6IFwiL1wiIH0pO1xyXG59XHJcblxyXG4vKiogQ2FsbCBmcm9tIGEgUm91dGUgSGFuZGxlciDigJQgcmV0dXJucyB0aGUgZGVjb2RlZCBKV1QgcGF5bG9hZCBvciBudWxsICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KENPT0tJRSk/LnZhbHVlO1xyXG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xyXG4gIHJldHVybiB2ZXJpZnlUb2tlbih0b2tlbik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dCIsImNvb2tpZXMiLCJDT09LSUUiLCJNQVhfQUdFIiwiZ2V0U2VjcmV0Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJFcnJvciIsInNpZ25Ub2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsInZlcmlmeSIsInNldEF1dGhDb29raWUiLCJyZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwibWF4QWdlIiwicGF0aCIsImNsZWFyQXV0aENvb2tpZSIsImdldFNlc3Npb24iLCJjb29raWVTdG9yZSIsImdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/User.js":
/*!****************************!*\
  !*** ./lib/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User ?? mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsV0FBVztRQUNYQyxNQUFNO0lBQ1I7SUFDQUMsY0FBYztRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDL0MsR0FDQTtJQUFFSyxZQUFZO0FBQUs7QUFHZCxNQUFNQyxPQUFPWix3REFBZSxDQUFDWSxJQUFJLElBQUlaLHFEQUFjLENBQUMsUUFBUUMsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0aWNreS1ub3Rlcy1vbmxpbmUvLi9saWIvbW9kZWxzL1VzZXIuanM/M2M3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcclxuICAgICAgdHJpbTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZEhhc2g6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgPz8gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJ0cmltIiwicGFzc3dvcmRIYXNoIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/User.js\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CLive%20Projects%5Cnotes%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CLive%20Projects%5Cnotes&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();