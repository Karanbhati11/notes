"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_lib_mongoose_js";
exports.ids = ["_rsc_lib_mongoose_js"];
exports.modules = {

/***/ "(rsc)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Cache connection across hot-reloads in dev\nlet cached = global._mongoose ?? {\n    conn: null,\n    promise: null\n};\nglobal._mongoose = cached;\nasync function connectDB() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) throw new Error(\"MONGODB_URI is not defined\");\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29vc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLDZDQUE2QztBQUM3QyxJQUFJQyxTQUFTQyxPQUFPQyxTQUFTLElBQUk7SUFBRUMsTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFDN0RILE9BQU9DLFNBQVMsR0FBR0Y7QUFFWixlQUFlSztJQUNwQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7SUFDM0MsSUFBSSxDQUFDQSxhQUFhLE1BQU0sSUFBSUcsTUFBTTtJQUNsQyxJQUFJVCxPQUFPRyxJQUFJLEVBQUUsT0FBT0gsT0FBT0csSUFBSTtJQUNuQyxJQUFJLENBQUNILE9BQU9JLE9BQU8sRUFBRTtRQUNuQkosT0FBT0ksT0FBTyxHQUFHTCx1REFBZ0IsQ0FBQ08sYUFBYTtZQUFFSyxnQkFBZ0I7UUFBTTtJQUN6RTtJQUNBWCxPQUFPRyxJQUFJLEdBQUcsTUFBTUgsT0FBT0ksT0FBTztJQUNsQyxPQUFPSixPQUFPRyxJQUFJO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGVzLW9ubGluZS8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbi8vIENhY2hlIGNvbm5lY3Rpb24gYWNyb3NzIGhvdC1yZWxvYWRzIGluIGRldlxyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLl9tb25nb29zZSA/PyB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxuZ2xvYmFsLl9tb25nb29zZSA9IGNhY2hlZDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XHJcbiAgY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICBpZiAoIU1PTkdPREJfVVJJKSB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT0RCX1VSSSBpcyBub3QgZGVmaW5lZFwiKTtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHJldHVybiBjYWNoZWQuY29ubjtcclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHsgYnVmZmVyQ29tbWFuZHM6IGZhbHNlIH0pO1xyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xyXG4gIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJnbG9iYWwiLCJfbW9uZ29vc2UiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY29ubmVjdCIsImJ1ZmZlckNvbW1hbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoose.js\n");

/***/ })

};
;