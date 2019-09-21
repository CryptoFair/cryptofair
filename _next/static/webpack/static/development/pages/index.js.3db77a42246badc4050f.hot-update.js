webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/skeleton/style */ "./node_modules/antd/lib/skeleton/style/index.js");
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/skeleton */ "./node_modules/antd/lib/skeleton/index.js");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/logo */ "./components/common/logo.js");
/* harmony import */ var _components_common_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/common/svg */ "./components/common/svg.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! web3 */ "./node_modules/web3/dist/web3.umd.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _assets_abicontract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/abicontract */ "./assets/abicontract.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_common_nav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/common/nav */ "./components/common/nav.js");
/* harmony import */ var _components_common_footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/common/footer */ "./components/common/footer.js");










var _jsxFileName = "/home/kali/dev/tantranlee/cryptofair--index/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;









var web4 = new web3__WEBPACK_IMPORTED_MODULE_13___default.a("".concat(_config__WEBPACK_IMPORTED_MODULE_14__["default"].URL, "/").concat(_config__WEBPACK_IMPORTED_MODULE_14__["default"].API_KEY));
var contract = new web4.eth.Contract(_assets_abicontract__WEBPACK_IMPORTED_MODULE_15__["default"], _config__WEBPACK_IMPORTED_MODULE_14__["default"].CONTRACT_ADDRESS);
var prices = [, 0.08, 0.24, 0.72, 2.16, 6.48, 19.44, 58.32, 174.96];
var projectYears = 1564592400000;

var StateWsCom = function StateWsCom() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      btcP = _useState[0],
      setBtcP = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      usdtP = _useState2[0],
      setUsdtP = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var wsData = function wsData() {
      window.socket = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethbtc@aggTrade.b10/ethusdt@aggTrade.b10');
      window.socket.addEventListener("close", wsData);
      window.socket.addEventListener("open", function () {});
      window.socket.addEventListener("message", handleData);
    };

    wsData();
    return function () {
      widdow.socket.close();
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

  return {
    btcP: btcP,
    usdtP: usdtP
  };
};

var WsCom = function WsCom() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ethAmount: 0
  };

  var _StateWsCom = StateWsCom(),
      btcP = _StateWsCom.btcP,
      usdtP = _StateWsCom.usdtP;

  var ethAmount = props.ethAmount;
  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Amounts in BTC"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, btcP ? Number(btcP * ethAmount).toFixed(4) : '--')), __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Amounts in USDT"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, usdtP ? Number(usdtP * ethAmount).toFixed(4) : '--')));
};

var StateTxsCom = function StateTxsCom() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      lvsCount = _useState3[0],
      setLvsCount = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    handle();
  }, [null]);

  var handle =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      var lvs, curId, txs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, tx;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
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
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 12;

              for (_iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default()(txs); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                tx = _step.value;

                if (lvs[Number(tx.returnValues._level.toString())].indexOf(tx.returnValues._user.toString()) === -1) {
                  lvs[Number(tx.returnValues._level.toString())].push(tx.returnValues._user.toString());
                }
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](12);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 20:
              _context.prev = 20;
              _context.prev = 21;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 23:
              _context.prev = 23;

              if (!_didIteratorError) {
                _context.next = 26;
                break;
              }

              throw _iteratorError;

            case 26:
              return _context.finish(23);

            case 27:
              return _context.finish(20);

            case 28:
              setLvsCount(lvs);
              _context.next = 33;
              break;

            case 31:
              _context.prev = 31;
              _context.t1 = _context["catch"](0);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 31], [12, 16, 20, 28], [21,, 23, 27]]);
    }));

    return function handle() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    lvsCount: lvsCount
  };
};

var TxsCom = function TxsCom() {
  var _StateTxsCom = StateTxsCom(),
      lvsCount = _StateTxsCom.lvsCount;

  return lvsCount ? __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Total Members"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, lvsCount[0]), __jsx("div", {
    className: "flex flex-wrap justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "1 level ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, lvsCount[0])), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "2 level ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, lvsCount[2].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "3 level ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, lvsCount[3].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "4 level ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, lvsCount[4].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "5 level ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, lvsCount[5].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "6 level ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, lvsCount[6].length)), __jsx("div", {
    className: "w-1/2 text-lg text-gray-700 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "7 level ", __jsx("span", {
    className: "font-bold text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, lvsCount[7].length)), __jsx("div", {
    className: "w-1/2 text-gray-700 text-right text-lg mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "8 level ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, lvsCount[8].length)))) : __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }));
};

var StateLoadData = function StateLoadData() {
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      txsCount = _useState4[0],
      setTxsCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      allvalues = _useState5[0],
      setValues = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      rawTxs = _useState6[0],
      setRawTxs = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      pYears = _useState7[0],
      setProjectYears = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var getalltx =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var alltx, time, tx24h, values, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, tx, t, _z, _m;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return contract.getPastEvents("allEvents", {
                  fromBlock: 4996358,
                  topics: ["0xce7dc747411ac40191c5335943fcc79d8c2d8c01ca5ae83d9fed160409fa6120"]
                });

              case 2:
                alltx = _context2.sent;
                time = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()() - 24 * 60 * 60 * 1000;
                tx24h = 0;
                values = 0;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 9;

                for (_iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default()(alltx); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  tx = _step2.value;
                  values += prices[Number(tx.returnValues._level.toString())];
                  console.log(tx);

                  if (Number(tx.returnValues._time.toString()) * 1000 > time) {
                    tx24h++;
                  }
                }

                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](9);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 17:
                _context2.prev = 17;
                _context2.prev = 18;

                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }

              case 20:
                _context2.prev = 20;

                if (!_didIteratorError2) {
                  _context2.next = 23;
                  break;
                }

                throw _iteratorError2;

              case 23:
                return _context2.finish(20);

              case 24:
                return _context2.finish(17);

              case 25:
                t = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()();
                _z = t - projectYears;
                _m = Math.ceil(_z / 1000 / 60 / 60 / 24 / 30);
                console.log(Math.floor(_m / 12));
                setProjectYears(Number(_m / 12).toFixed(1));
                setTxsCount([alltx.length, tx24h]);
                setValues([values]);
                setRawTxs(alltx);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 13, 17, 25], [18,, 20, 24]]);
      }));

      return function getalltx() {
        return _ref2.apply(this, arguments);
      };
    }();

    getalltx();
  }, [null]);
  return {
    txsCount: txsCount,
    allvalues: allvalues,
    rawTxs: rawTxs,
    pYears: pYears
  };
};

var LoadData = function LoadData() {
  var _StateLoadData = StateLoadData(),
      txsCount = _StateLoadData.txsCount,
      allvalues = _StateLoadData.allvalues,
      rawTxs = _StateLoadData.rawTxs,
      pYears = _StateLoadData.pYears;

  var renderTime = function renderTime(time) {
    var t = new Date(time * 1000);
    return "".concat(t.getFullYear(), "-").concat(("0" + (t.getMonth() + 1)).slice(-2), "-").concat(("0" + t.getDate()).slice(-2), " ").concat(("0" + t.getHours()).slice(-2), ":").concat(("0" + t.getMinutes()).slice(-2));
  };

  return __jsx("div", {
    className: "container px-4 py-32 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "CryptoFair - The easiest and fastest way to make money in crypto industry")), __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Live statistics"), __jsx("div", {
    className: "flex flex-wrap lg:-mx-4 mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(TxsCom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })), __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, txsCount ? __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Project Preview"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, pYears ? pYears : '--', " years"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Transactions"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, txsCount[0])), __jsx("div", {
    className: "flex justify-between text-lg text-cryp-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    className: "tetx-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Transactions for 24h"), __jsx("div", {
    className: "text-gray-700 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, txsCount[1])))) : __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/3 lg:px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: "rounded shadow px-4 py-4",
    style: {
      minHeight: '260px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, allvalues ? __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
    className: "text-center text-2xl font-bold text-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Value"), __jsx("div", {
    className: "text-center text-2xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, Number(allvalues[0]).toFixed(2), " ETH"), __jsx(WsCom, {
    ethAmount: allvalues[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })) : __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })))), __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Lastest transaction"), __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, rawTxs ? __jsx("table", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("th", {
    className: "text-lg w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Date"), __jsx("th", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Level"), __jsx("th", {
    className: "text-lg text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Amount"), __jsx("th", {
    className: "text-lg text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Tx"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, rawTxs.map(function (val, key) {
    if (key < 10) {
      return __jsx("tr", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, renderTime(rawTxs[rawTxs.length - key - 1].returnValues._time.toString())), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, rawTxs[rawTxs.length - key - 1].returnValues._level.toString()), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, prices[rawTxs[rawTxs.length - key - 1].returnValues._level.toString()]), __jsx("td", {
        className: "px-1 py-2 text-lg text-gray-600 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx("a", {
        href: "https://etherscan.io/tx/".concat(rawTxs[rawTxs.length - key - 1].transactionHash),
        className: "text-cryp-hover hover:text-cryp-bold",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "View Tx")));
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  })), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: true,
    paragraph: {
      rows: 2
    },
    title: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })))));
};

var Slider = function Slider() {
  var _StateTxsCom2 = StateTxsCom(),
      lvsCount = _StateTxsCom2.lvsCount;

  var _StateLoadData2 = StateLoadData(),
      txsCount = _StateLoadData2.txsCount,
      allvalues = _StateLoadData2.allvalues,
      pYears = _StateLoadData2.pYears;

  var _StateWsCom2 = StateWsCom(),
      btcP = _StateWsCom2.btcP,
      usdtP = _StateWsCom2.usdtP;

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(true),
      rdy = _useState8[0],
      setRdy = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (lvsCount && txsCount && allvalues && pYears && btcP && usdtP && rdy) {
      setRdy(false);
      $('#slider').simplemarquee({
        speed: 50
      });
    }
  });
  return __jsx("div", {
    className: "overflow-hidden hidden lg:block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("div", {
    className: "w-full py-4",
    id: "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("div", {
    className: "flex w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("div", {
    className: "w-1/6 text-center py-2 flex-1 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Total Members"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, lvsCount ? lvsCount[0] : '--')), __jsx("div", {
    className: "w-1/6 text-center flex-1 py-2 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Project Years"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, pYears ? pYears : '--')), __jsx("div", {
    className: "w-1/6 text-center py-2 flex-1 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "Total Transactions"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, txsCount ? txsCount[0] : '--')), __jsx("div", {
    className: "w-1/6 text-center py-2 flex-1 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Total ETH"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, allvalues ? Number(allvalues[0]).toFixed(2) : '--')), __jsx("div", {
    className: "w-1/6 text-center py-2 flex-1 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Equivalent to BTC"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, btcP && allvalues ? Number(btcP * allvalues[0]).toFixed(4) : '--')), __jsx("div", {
    className: "w-1/6 text-center py-2 flex-1 px-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg text-gray-600 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Equivalent to $"), __jsx("div", {
    className: "text-gray-600 text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, usdtP && allvalues ? Number(usdtP * allvalues[0]).toFixed(4) : '--')))));
};

var Md1 = function Md1(_ref3) {
  var open = _ref3.open,
      handleClose = _ref3.handleClose;
  return __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Sign Up",
    visible: open,
    closable: true,
    footer: null,
    onCancel: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "To register and simultaneously receive the 1st level in the System, send ", _config__WEBPACK_IMPORTED_MODULE_14__["default"].prices[0], " ETH to your upline. And the first user, that will come after you, will send this amount back to you. This is 1 time action at all. All other transfers are made at the expense of already earned funds."), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Simple and clear guide on the page ", __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_14__["default"].signup,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "SIGN UP"), ".")));
};

var Md2 = function Md2(_ref4) {
  var open = _ref4.open,
      handleClose = _ref4.handleClose;
  return __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Login",
    visible: open,
    closable: true,
    footer: null,
    onCancel: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_14__["default"].login,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "SIGN IN"), " TO THE ACCOUNT, using only the Ethereum wallet number (without password)."), __jsx("div", {
    className: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "The password is not needed, since your account is in a smart contract, and not on the site. Therefore, your account cannot be blocked or deleted from the System even by the site administration. And your Ethereum wallet can not be hacked or changed to another."), __jsx("p", {
    className: "text-red-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "We never ask your private keys.")));
};

var Md3 = function Md3(_ref5) {
  var open = _ref5.open,
      handleClose = _ref5.handleClose;
  return __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Attract referrals",
    visible: open,
    closable: true,
    footer: null,
    onCancel: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "There are three ways to get referrals:"), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "1) Attract referrals to your structure in CRYPTOFAIR."), __jsx("p", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, "2) Get referrals from your uplines by \"overflows\" (as programmed in the smart contract)."), __jsx("p", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "3) Wait until the system will bring you free referrals by itself."), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "To register and simultaneously receive the 1st level in the System, send ", _config__WEBPACK_IMPORTED_MODULE_14__["default"].prices[0], " ETH to your upline. And the first user, that will come after you, will send this amount back to you. This is 1 time action at all. All other transfers are made at the expense of already earned funds."), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "Simple and clear guide on the page ", __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_14__["default"].signup,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "SIGN UP"), ".")));
};

var Md4 = function Md4(_ref6) {
  var open = _ref6.open,
      handleClose = _ref6.handleClose;
  return __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Income",
    visible: open,
    closable: true,
    footer: null,
    onCancel: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("div", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, "To register and simultaneously receive the 1st level in the System, send ", _config__WEBPACK_IMPORTED_MODULE_14__["default"].prices[0], " ETH to your upline. And the first user, that will come after you, will send this amount back to you. This is 1 time action at all. All other transfers are made at the expense of already earned funds."), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "Simple and clear guide on the page ", __jsx("a", {
    href: _config__WEBPACK_IMPORTED_MODULE_14__["default"].signup,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "SIGN UP"), ".")));
};

var HowItWorks = function HowItWorks() {
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      md1 = _useState9[0],
      setMd1 = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      md2 = _useState10[0],
      setMd2 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      md3 = _useState11[0],
      setMd3 = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      md4 = _useState12[0],
      setMd4 = _useState12[1];

  return __jsx("div", {
    className: "flex flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx(Md1, {
    open: md1,
    handleClose: function handleClose() {
      return setMd1(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), __jsx(Md2, {
    open: md2,
    handleClose: function handleClose() {
      return setMd2(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }), __jsx(Md3, {
    open: md3,
    handleClose: function handleClose() {
      return setMd3(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), __jsx(Md4, {
    open: md4,
    handleClose: function handleClose() {
      return setMd4(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setMd1(true);
    },
    className: "px-4 py-10 shadow-lg tt cursor-pointer rounded bg-white relative",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, __jsx("div", {
    className: "absolute top-0 left-0",
    style: {
      transform: 'translate(-10%,-50%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx("img", {
    src: "/static/signin.png",
    alt: "",
    className: "w-24 h-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Sign Up"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Send ", _config__WEBPACK_IMPORTED_MODULE_14__["default"].prices[0], " ETH to your upline, which will back after the first referral")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setMd2(true);
    },
    className: "px-4 py-10 shadow-lg tt cursor-pointer rounded bg-white relative",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx("div", {
    className: "absolute top-0 left-0",
    style: {
      transform: 'translate(-10%,-50%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, __jsx("img", {
    src: "/static/Login.png",
    alt: "",
    className: "w-24 h-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "Log in"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "In 1 click without password (we never ask for private keys)")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative mb-16 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setMd3(true);
    },
    className: "px-4 py-10 shadow-lg tt cursor-pointer rounded bg-white relative",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx("div", {
    className: "absolute top-0 left-0",
    style: {
      transform: 'translate(-10%,-50%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx("img", {
    src: "/static/Attract_referrals.png",
    alt: "",
    className: "w-24 h-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "Attract referrals"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "Attract referrals or wait referrals from the system")), __jsx("div", {
    className: "absolute w flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Arrow"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }))), __jsx("div", {
    className: "w-full lg:w-1/4 px-8 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setMd4(true);
    },
    className: "px-4 py-10 shadow-lg tt cursor-pointer rounded bg-white relative",
    style: {
      height: '270px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx("div", {
    className: "absolute top-0 left-0",
    style: {
      transform: 'translate(-10%,-50%)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, __jsx("img", {
    src: "/static/Income.png",
    alt: "",
    className: "w-24 h-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  })), __jsx("p", {
    className: "text-center text-cryp-hover font-bold text-2xl mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "Income"), __jsx("p", {
    className: "text-center text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Receive funds immediately to ETH wallet without confirmation and payment requests"))));
};

var Index = function Index() {
  return __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, __jsx(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx(_components_common_nav__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  })), __jsx(Slider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), __jsx("div", {
    className: "container mx-auto px-4 relative overflow-hidden pt-8 pb-8 md:pt-24 md:pb-24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, __jsx("div", {
    className: "md:mt-0 flex items-center px-4 z-10 flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx("div", {
    className: "w-full md:w-1/2 mb-8 md:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx("p", {
    className: "font-bold text-cryp-hover mb-0",
    style: {
      fontSize: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "Viral"), __jsx("p", {
    className: "text-4xl text-cryp-text mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Crypto Viral Works"), __jsx("p", {
    className: "text-lg text-cryp-span mb-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, "The easiest and fastest way to make money in crypto industry"), __jsx("button", {
    className: "focus:outline-none inline-block rounded-full py-2 px-8 bg-cryp-hover text-lg shadow text-gray-100 ts hover:bg-cryp-bold tt hover:shadow",
    onClick: function onClick() {
      return window.location = _config__WEBPACK_IMPORTED_MODULE_14__["default"].signup;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "Let Start Now")), __jsx("div", {
    className: "w-full md:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logo.gif",
    alt: "",
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  })))), __jsx("div", {
    className: "container mx-auto px-4 py-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, __jsx("div", {
    className: "px-8 py-3 bg-cryp-hover text-lg text-white rounded-full inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, __jsx("span", {
    className: "uppercase font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Take up to ", __jsx("span", {
    className: "text-yellow-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "14,171.76 ETH"), " now"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }), "you ", __jsx("span", {
    className: "font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "haven't to return it back "), "later")))), __jsx("div", {
    className: "bg-cryp-bg",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, "Features"), __jsx("div", {
    className: "flex flex-wrap md:--mx-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Svg1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, "It is not an investment")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "No need to wait"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 lg:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Svg2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, "It is not a trading")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, "No risk"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4 mb-4 md:mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Svg3"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, "This is not a sale")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, "of \"magical\" goods"))), __jsx("div", {
    className: "w-full md:w-1/2 lg:w-1/4 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, __jsx("div", {
    className: "rounded px-4 py-10 shadow cursor-pointer tt ts bg-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, __jsx(_components_common_svg__WEBPACK_IMPORTED_MODULE_12__["Svg4"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }), __jsx("p", {
    className: "text-cryp-hover text-xl mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, "It is not an ICO")), __jsx("p", {
    className: "text-cryp-span text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }, "Scam is impossible")))))), __jsx("div", {
    className: "bg-white",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap md:-mx-4 mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, __jsx("div", {
    className: "w-full md:w-1/2 px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, __jsx("p", {
    className: "text-cryp-hover font-bold text-2xl mb-2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, "Who am I?"), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, "I am a smart contract running on ethereum's decentralized platform created to help you get rich?"), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, "The decentralized power is the power of the future."), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, "I am a decentralized financial rotation platform that creates fair and transparent games for participants")), __jsx("div", {
    className: "w-full md:w-1/2 px-4 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, __jsx("p", {
    className: "text-cryp-hover font-bold text-2xl mb-2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "Why choose me?"), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "This is not an ICO. This is not an investment. This is not a trading"), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, "I want to create a strong community where the interests of all people are the same. The flat world only happens when operating a decentralized platform that lives.")), __jsx("div", {
    className: "w-full px-4 mb-4 md:text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, __jsx("p", {
    className: "text-cryp-hover font-bold text-2xl mb-2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, "What do you need to do and how do you do it in the cryptofair system?"), __jsx("p", {
    className: "text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, "This is a fair and transparent system that automatically operates through which no one has the right to intervene, all participants are the main owners and you will decide your income."), __jsx("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, __jsx("button", {
    className: "focus:outline-none inline-block rounded-full py-2 px-8 bg-cryp-hover text-lg shadow text-gray-100 ts hover:bg-cryp-bold tt hover:shadow",
    onClick: function onClick() {
      return window.location = _config__WEBPACK_IMPORTED_MODULE_14__["default"].signup;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    },
    __self: this
  }, "Join me for the future.")))), __jsx("h2", {
    className: "text-4xl text-cryp-text text-center mb-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, "How It Works"), __jsx(HowItWorks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }))), __jsx("div", {
    className: "bg-cryp-hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, __jsx("div", {
    className: "container mx-auto px-4 py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, __jsx("h2", {
    className: "text-white text-4xl text-center mb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, "Plan - Level Up"), __jsx("div", {
    className: "rounded bg-white py-4 shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_14__["default"].prices.map(function (val, key) {
    if (key === 3 || key === 7) {
      return __jsx("div", {
        className: "flex flex-wrap mb-4 bg-cryp-bold py-1",
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, "Level"), __jsx("p", {
        className: "text-lg text-white font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "#", key + 1)), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        },
        __self: this
      }, "Price"), __jsx("p", {
        className: "text-lg text-gray-300 font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, __jsx("span", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, val), " ETH")), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, "Referrals"), __jsx("p", {
        className: "text-lg text-white font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_14__["default"].refs[key])), __jsx("div", {
        className: "w-full md:w-1/4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, __jsx("p", {
        className: "text-base text-gray-400 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, "Income"), __jsx("p", {
        className: "text-lg text-gray-300 font-bold mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, __jsx("span", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_14__["default"].Incomes[key]), " ETH")));
    }

    return __jsx("div", {
      className: "flex flex-wrap mb-4 py-1",
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }, __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553
      },
      __self: this
    }, "Level"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554
      },
      __self: this
    }, "#", key + 1)), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
      },
      __self: this
    }, "Price"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, __jsx("span", {
      className: "text-cryp-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, val), " ETH")), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561
      },
      __self: this
    }, "Referrals"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562
      },
      __self: this
    }, _config__WEBPACK_IMPORTED_MODULE_14__["default"].refs[key])), __jsx("div", {
      className: "w-full md:w-1/4 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564
      },
      __self: this
    }, __jsx("p", {
      className: "text-base text-gray-500 mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565
      },
      __self: this
    }, "Income"), __jsx("p", {
      className: "text-lg text-cryp-text font-bold mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566
      },
      __self: this
    }, __jsx("span", {
      className: "text-cryp-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566
      },
      __self: this
    }, _config__WEBPACK_IMPORTED_MODULE_14__["default"].Incomes[key]), " ETH")));
  })))), __jsx("div", {
    className: "bg-white",
    style: {
      backgroundImage: "url('/static/img/bg.svg')"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, __jsx(LoadData, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  })), __jsx(_components_common_footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3db77a42246badc4050f.hot-update.js.map