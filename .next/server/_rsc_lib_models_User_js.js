"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_lib_models_User_js";
exports.ids = ["_rsc_lib_models_User_js"];
exports.modules = {

/***/ "(rsc)/./lib/models/User.js":
/*!****************************!*\
  !*** ./lib/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    },\n    emailVerified: {\n        type: Boolean,\n        default: false\n    },\n    verifyToken: {\n        type: String,\n        default: null\n    },\n    verifyTokenExpiry: {\n        type: Date,\n        default: null\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User ?? mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsV0FBVztRQUNYQyxNQUFNO0lBQ1I7SUFDQUMsY0FBYztRQUFFTixNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDN0NLLGVBQWU7UUFBRVAsTUFBTVE7UUFBU0MsU0FBUztJQUFNO0lBQy9DQyxhQUFhO1FBQUVWLE1BQU1DO1FBQVFRLFNBQVM7SUFBSztJQUMzQ0UsbUJBQW1CO1FBQUVYLE1BQU1ZO1FBQU1ILFNBQVM7SUFBSztBQUNqRCxHQUNBO0lBQUVJLFlBQVk7QUFBSztBQUdkLE1BQU1DLE9BQU9sQix3REFBZSxDQUFDa0IsSUFBSSxJQUFJbEIscURBQWMsQ0FBQyxRQUFRQyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlub3Rlcy8uL2xpYi9tb2RlbHMvVXNlci5qcz8zYzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxyXG4gICAgICB0cmltOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkSGFzaDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbFZlcmlmaWVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICB2ZXJpZnlUb2tlbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IG51bGwgfSxcclxuICAgIHZlcmlmeVRva2VuRXhwaXJ5OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IG51bGwgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyID8/IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwibG93ZXJjYXNlIiwidHJpbSIsInBhc3N3b3JkSGFzaCIsImVtYWlsVmVyaWZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcnkiLCJEYXRlIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/User.js\n");

/***/ })

};
;