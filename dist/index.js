"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _board = _interopRequireDefault(require("./board"));
var _rules = _interopRequireDefault(require("./rules"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // src/index.js
var BaghChal = /*#__PURE__*/function () {
  function BaghChal() {
    _classCallCheck(this, BaghChal);
    this.board = new _board["default"]();
    this.turn = 'G'; // Goats start first
  }
  return _createClass(BaghChal, [{
    key: "getBoardState",
    value: function getBoardState() {
      return this.board.getState();
    }
  }, {
    key: "placeGoat",
    value: function placeGoat(x, y) {
      if (this.turn === 'G' && this.board.placeGoat(x, y)) {
        this.turn = 'T';
        return true;
      }
      return false;
    }
  }, {
    key: "move",
    value: function move(from, to) {
      if (_rules["default"].isValidMove(this.board.getState(), from, to)) {
        this.board.movePiece(from, to);
        this.turn = this.turn === 'T' ? 'G' : 'T';
        return true;
      }
      return false;
    }
  }]);
}();
var _default = exports["default"] = BaghChal;