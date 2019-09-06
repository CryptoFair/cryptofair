webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/back-top/style */ "./node_modules/antd/lib/back-top/style/index.js");
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/back-top */ "./node_modules/antd/lib/back-top/index.js");
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/skeleton/style */ "./node_modules/antd/lib/skeleton/style/index.js");
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/skeleton */ "./node_modules/antd/lib/skeleton/index.js");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_common_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/logo */ "./components/common/logo.js");
/* harmony import */ var _components_common_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/common/svg */ "./components/common/svg.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _assets_abicontract__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/abicontract */ "./assets/abicontract.js");








var _jsxFileName = "D:\\dangerzone\\smartcontract\\cryptohands\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var web4 = new web3__WEBPACK_IMPORTED_MODULE_11___default.a("".concat(_config__WEBPACK_IMPORTED_MODULE_12__["default"].URL, "/").concat(_config__WEBPACK_IMPORTED_MODULE_12__["default"].API_KEY));
var contract = new web4.eth.Contract(_assets_abicontract__WEBPACK_IMPORTED_MODULE_13__["default"], _config__WEBPACK_IMPORTED_MODULE_12__["default"].CONTRACT_ADDRESS);
var prices = [, 0.05, 0.15, 0.45, 1.35, 4.05, 12.15, 36.45, 109.35];

var WsCom = function WsCom() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ethAmount: 0
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      btcP = _useState[0],
      setBtcP = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      usdtP = _useState2[0],
      setUsdtP = _useState2[1];

  var ethAmount = props.ethAmount;
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var socket;

    var wsData = function wsData() {
      socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethbtc@aggTrade.b10/ethusdt@aggTrade.b10');
      socket.addEventListener("close", wsData);
      socket.addEventListener("open", function () {
        console.log("connect ws");
      });
      socket.addEventListener("message", handleData);
    };

    wsData();
    return function () {
      socket.close();
    };
  }, [null]);

  var handleData = function handleData(event) {
    var dt = JSON.parse(event.data);

    switch (dt.stream) {
      case "ethusdt@aggTrade":
        setUsdtP(dt.data.p);
        break;

      case "ethbtc@aggTrade":
        setBtcP(dt.data.p);
        break;
    }
  };

  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Amounts in BTC"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, btcP ? Number(btcP * ethAmount).toFixed(4) : '--')), __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Amounts in USDT"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, usdtP ? Number(usdtP * ethAmount).toFixed(4) : '--')));
};

var TxsCom = function TxsCom() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      lvsCount = _useState3[0],
      setLvsCount = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    handle();
  }, [null]);

  var handle =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      var lvs, curId, txs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, tx;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              lvs = [0, ["1"], ["2"], ["3"], ["4"], ["5"], ["6"], ["7"], ["8"]];
              _context.next = 4;
              return contract.methods.currUserID().call();

            case 4:
              curId = _context.sent;
              lvs[0] = curId.toString();
              _context.next = 8;
              return contract.getPastEvents("allEvents", {
                fromBlock: 4996358,
                topics: ["0x1fb338d47f9358d9c3a1929acf6d5786ab53152c2c42fbe7d268004ece84596e"]
              });

            case 8:
              txs = _context.sent;
              console.log(txs);
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 13;

              for (_iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(txs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                tx = _step.value;

                if (lvs[Number(tx.returnValues._level.toString())].indexOf(tx.returnValues._user.toString()) === -1) {
                  lvs[Number(tx.returnValues._level.toString())].push(tx.returnValues._user.toString());
                }
              }

              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](13);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              setLvsCount(lvs);
              _context.next = 34;
              break;

            case 32:
              _context.prev = 32;
              _context.t1 = _context["catch"](0);

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 32], [13, 17, 21, 29], [22,, 24, 28]]);
    }));

    return function handle() {
      return _ref.apply(this, arguments);
    };
  }();

  return lvsCount ? __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Total Members"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, lvsCount[0]), __jsx("div", {
    className: "flex flex-wrap justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "1 lv ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, lvsCount[0])), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "2 lv ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, lvsCount[2].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "3 lv ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, lvsCount[3].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "4 lv ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, lvsCount[4].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "5 lv ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, lvsCount[5].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "6 lv ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, lvsCount[6].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "7 lv ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, lvsCount[7].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "8 lv ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, lvsCount[8].length)))) : __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
};

var LoadData = function LoadData() {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      txsCount = _useState4[0],
      setTxsCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      allvalues = _useState5[0],
      setValues = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      rawTxs = _useState6[0],
      setRawTxs = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var getalltx =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var alltx, time, tx24h, values, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, tx;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('get1');
                _context2.next = 3;
                return contract.getPastEvents("allEvents", {
                  fromBlock: 4996358,
                  topics: ["0xce7dc747411ac40191c5335943fcc79d8c2d8c01ca5ae83d9fed160409fa6120"]
                });

              case 3:
                alltx = _context2.sent;
                time = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()() - 24 * 60 * 60 * 1000;
                tx24h = 0;
                values = 0;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 10;

                for (_iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(alltx); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  tx = _step2.value;
                  values += prices[Number(tx.returnValues._level.toString())];
                  console.log(tx);

                  if (Number(tx.returnValues._time.toString()) * 1000 > time) {
                    tx24h++;
                  }
                }

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](10);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError2) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError2;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                setTxsCount([alltx.length, tx24h]);
                setValues([values]);
                setRawTxs(alltx);

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[10, 14, 18, 26], [19,, 21, 25]]);
      }));

      return function getalltx() {
        return _ref2.apply(this, arguments);
      };
    }();

    getalltx();
  }, [null]);

  var renderTime = function renderTime(time) {
    var t = new Date(time * 1000);
    return "".concat(t.getFullYear(), "-").concat(("0" + (t.getMonth() + 1)).slice(-2), "-").concat(("0" + t.getDate()).slice(-2), " ").concat(("0" + t.getHours()).slice(-2), ":").concat(("0" + t.getMinutes()).slice(-2));
  };

  return __jsx("div", {
    className: "container px-4 py-32 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Live statistics"), __jsx("div", {
    className: "flex flex-wrap lg:-mx-4 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(TxsCom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, txsCount ? __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Project Preview"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "-- years"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Transactions"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, txsCount[0])), __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Transactions for 24h"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, txsCount[1])))) : __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, allvalues ? __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Value"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, allvalues[0], " ETH"), __jsx(WsCom, {
    ethAmount: allvalues[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })) : __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })))), __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Lastest transactions"), __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, rawTxs ? __jsx("table", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("th", {
    className: "text-lg w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Lv"), __jsx("th", {
    className: "text-lg text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Amount"), __jsx("th", {
    className: "text-lg text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Tx"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, rawTxs.map(function (val, key) {
    if (key < 10) {
      return __jsx("tr", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, renderTime(rawTxs[rawTxs.length - key - 1].returnValues._time.toString())), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, rawTxs[rawTxs.length - key - 1].returnValues._level.toString()), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, prices[rawTxs[rawTxs.length - key - 1].returnValues._level.toString()]), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("a", {
        href: "https://etherscan.io/tx/".concat(rawTxs[rawTxs.length - key - 1].transactionHash),
        className: "text-cryp-hover hover:text-cryp-bold",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "View Tx")));
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })))));
};

var Index = function Index() {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      show = _useState7[0],
      setShow = _useState7[1];

  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), __jsx("div", {
    className: "flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap justify-between py-4 items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("div", {
    className: "text-4xl text-cryp-text font-bold text-cryp-hover flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icon-128x128.png",
    className: "w-12 h-12 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), "CryptoFair"), __jsx("div", {
    className: "md:hidden w-6 h-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("button", {
    className: "w-6 h-6 focus:outline-none",
    onClick: function onClick() {
      return setShow(!show);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, !show ? __jsx("svg", {
    viewBox: "0 0 448 512",
    className: "w-full h-full fill-current text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })) : __jsx("svg", {
    viewBox: "0 0 352 512",
    className: "w-full h-full fill-current text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("path", {
    fill: "currentColor",
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })))), __jsx("div", {
    className: "md:block w-full md:w-auto text-right ".concat(show ? null : 'hidden'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_12__["default"].signup,
    className: "inline-block text-lg w-32 text-center py-2 bg-cryp-hover rounded-full text-white border border-cryp-hover hover:bg-cryp-bold hover:border-cryp-bold mr-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Sign Up"), __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_12__["default"].login,
    className: "inline-block text-lg w-32 text-center py-2 border border-cryp-hover rounded-full text-cryp-hover hover:border-cryp-bold hover:text-cryp-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Login")))), __jsx("div", {
    className: "container mx-auto px-4 relative overflow-hidden pt-32 pb-48",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx(_components_common_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), __jsx("div", {
    className: "mt-32 md:mt-0 flex items-center px-4 z-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("p", {
    className: "font-bold text-cryp-hover mb-0",
    style: {
      fontSize: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Viral"), __jsx("p", {
    className: "text-4xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Crypto Viral Works"), __jsx("p", {
    className: "text-lg text-cryp-span mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "The easiest and fastest way to make money in crypto industry"), __jsx("button", {
    className: "focus:outline-none inline-block rounded-full py-2 px-8 bg-cryp-hover text-lg shadow text-gray-100 ts hover:bg-cryp-bold tt hover:shadow",
    onClick: function onClick() {
      return window.location = _config__WEBPACK_IMPORTED_MODULE_12__["default"].signup;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "Let Start Now"))))), __jsx("div", {
    className: "bg-cryp-bg",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Features"), __jsx("div", {
    className: "flex flex-wrap md:--mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Svg1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "It is not an investment")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "No need to wait"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Svg2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "It is not a trading")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "No risk"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Svg3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "This is not a sale")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "of \"magical\" goods"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Svg4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "It is not an ICO")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Scam is impossible")))))), __jsx("div", {
    className: "bg-white",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, "How It Work"), __jsx("div", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx("div", {
    className: "px-4 py-10 shadow-lg lg:shadow-none hover:shadow-lg tt cursor-pointer rounded hover:bg-white",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Create"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Sign Up"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "Send 0.05 ETH to your upline, wich will back after the first referral")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("div", {
    className: "px-4 py-10 shadow-lg lg:shadow-none hover:shadow-lg tt cursor-pointer rounded hover:bg-white",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Login"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "Log in"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "In 1 click without password (we never ask for private keys)")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, __jsx("div", {
    className: "px-4 py-10 shadow-lg lg:shadow-none hover:shadow-lg tt cursor-pointer rounded hover:bg-white",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Refs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Attract referrals"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Attract referrals or wait referrals from the system")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("div", {
    className: "px-4 py-10 shadow-lg lg:shadow-none hover:shadow-lg tt cursor-pointer rounded hover:bg-white",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_10__["Income"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, "Income"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, "Receive funds immediately to ETH wallet without confirmation and payment requests")))))), __jsx("div", {
    className: "bg-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx("h2", {
    className: "text-white text-4xl text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Plan - Level Up"), __jsx("div", {
    className: "rounded bg-white py-4 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_12__["default"].prices.map(function (val, key) {
    if (key === 3 || key === 7) {
      return __jsx("div", {
        className: "flex flex-wrap mb-4 bg-cryp-bold py-1",
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "Level"), __jsx("p", {
        className: "text-lg text-white font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "#", key + 1)), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, "Price"), __jsx("p", {
        className: "text-lg text-gray-300 font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, __jsx("span", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, val), " ETH")), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "Referrals"), __jsx("p", {
        className: "text-lg text-white font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_12__["default"].refs[key])), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Income"), __jsx("p", {
        className: "text-lg text-gray-300 font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, __jsx("span", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_12__["default"].Incomes[key]), " ETH")));
    }

    return __jsx("div", {
      className: "flex flex-wrap mb-4 py-1",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, "Level"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, "#", key + 1)), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "Price"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, __jsx("span", {
      className: "text-cryp-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, val), " ETH")), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, "Referrals"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, _config__WEBPACK_IMPORTED_MODULE_12__["default"].refs[key])), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, "Income"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, __jsx("span", {
      className: "text-cryp-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, _config__WEBPACK_IMPORTED_MODULE_12__["default"].Incomes[key]), " ETH")));
  })))), __jsx("div", {
    className: "bg-white",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, __jsx(LoadData, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  })), __jsx("div", {
    className: "bg-cryp-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, __jsx("div", {
    className: "container px-4 py-32 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, __jsx("p", {
    className: "text-lg text-center text-gray-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "Copyright \xA9 CryptoFair"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2e8839fcf900c5873eec.hot-update.js.map