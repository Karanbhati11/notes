"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_lib_models_SessionNote_js";
exports.ids = ["_rsc_lib_models_SessionNote_js"];
exports.modules = {

/***/ "(rsc)/./lib/models/SessionNote.js":
/*!***********************************!*\
  !*** ./lib/models/SessionNote.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SessionNoteModel: () => (/* binding */ SessionNoteModel)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SessionNoteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: true,\n        unique: true\n    },\n    content: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst SessionNoteModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).SessionNote ?? mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"SessionNote\", SessionNoteSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1Nlc3Npb25Ob3RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxvQkFBb0IsSUFBSUQsd0RBQWUsQ0FDM0M7SUFDRUcsUUFBUTtRQUFFQyxNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUMxRkMsU0FBUztRQUFFTixNQUFNTztRQUFRQyxTQUFTO0lBQUc7QUFDdkMsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHZCxNQUFNQyxtQkFDWGQsd0RBQWUsQ0FBQ2dCLFdBQVcsSUFBSWhCLHFEQUFjLENBQUMsZUFBZUMsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RpY2t5LW5vdGVzLW9ubGluZS8uL2xpYi9tb2RlbHMvU2Vzc2lvbk5vdGUuanM/YWJjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBTZXNzaW9uTm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcklkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIlVzZXJcIiwgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgY29udGVudDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgU2Vzc2lvbk5vdGVNb2RlbCA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLlNlc3Npb25Ob3RlID8/IG1vbmdvb3NlLm1vZGVsKFwiU2Vzc2lvbk5vdGVcIiwgU2Vzc2lvbk5vdGVTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTZXNzaW9uTm90ZVNjaGVtYSIsIlNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJjb250ZW50IiwiU3RyaW5nIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJTZXNzaW9uTm90ZU1vZGVsIiwibW9kZWxzIiwiU2Vzc2lvbk5vdGUiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/SessionNote.js\n");

/***/ })

};
;