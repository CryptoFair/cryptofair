webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/nav.js":
/*!**********************************!*\
  !*** ./components/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/home/kali/dev/tantranlee/cryptofair--index/components/common/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  return __jsx("div", {
    className: "flex flex-wrap justify-between py-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "text-4xl text-cryp-text font-bold text-cryp-hover flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icon-128x128.png",
    className: "w-12 h-12 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "CryptoFair"), __jsx("div", {
    className: "text-sm text-red-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Share more - Get more")))), __jsx("div", {
    className: "lg:hidden w-6 h-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("button", {
    className: "w-6 h-6 focus:outline-none",
    onClick: function onClick() {
      return setShow(!show);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, !show ? __jsx("svg", {
    viewBox: "0 0 448 512",
    className: "w-full h-full fill-current text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })) : __jsx("svg", {
    viewBox: "0 0 352 512",
    className: "w-full h-full fill-current text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), __jsx("div", {
    className: "lg:block w-full lg:w-auto text-right ".concat(show ? null : 'hidden'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    href: "/howitworks",
    className: "block lg:inline-block text-lg text-cryp-text hover:text-cryp-hover mb-2 mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "How it works"), __jsx("a", {
    href: "/faq",
    className: "block lg:inline-block text-lg text-cryp-text hover:text-cryp-hover mb-2 mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "FAQ"), __jsx("a", {
    href: "/faqeth",
    className: "block lg:inline-block text-lg text-cryp-text hover:text-cryp-hover mb-2 mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Ethereum FAQ"), __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].signup,
    className: "inline-block text-lg w-32 text-center py-2 bg-cryp-hover rounded-full text-white border border-cryp-hover hover:bg-cryp-bold hover:border-cryp-bold mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Sign Up"), __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_1__["default"].login,
    className: "inline-block text-lg w-32 text-center py-2 border border-cryp-hover rounded-full text-cryp-hover hover:border-cryp-bold hover:text-cryp-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Login"), __jsx("div", {
    className: "lg:inline-block ml-4 flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: "/static/translate.svg",
    alt: "",
    className: "w-6 h-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.338cb31f03e4cd515228.hot-update.js.map