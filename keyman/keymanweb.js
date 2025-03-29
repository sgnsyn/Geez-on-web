
"use strict";
try {
  (() => {
    var Dl = Object.create;
    var Qn = Object.defineProperty,
      zl = Object.defineProperties,
      xc = Object.getOwnPropertyDescriptor,
      Kl = Object.getOwnPropertyDescriptors,
      Ol = Object.getOwnPropertyNames,
      Cc = Object.getOwnPropertySymbols,
      Gc = Object.getPrototypeOf,
      pc = Object.prototype.hasOwnProperty,
      Pl = Object.prototype.propertyIsEnumerable,
      jl = Reflect.get;
    var mc = (o, t, e) =>
        t in o
          ? Qn(o, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            })
          : (o[t] = e),
      C = (o, t) => {
        for (var e in t || (t = {})) pc.call(t, e) && mc(o, e, t[e]);
        if (Cc) for (var e of Cc(t)) Pl.call(t, e) && mc(o, e, t[e]);
        return o;
      },
      V = (o, t) => zl(o, Kl(t)),
      a = (o, t) => Qn(o, "name", { value: t, configurable: !0 });
    var _l = (o, t) => () => (
        t || o((t = { exports: {} }).exports, t), t.exports
      ),
      Xc = (o, t) => {
        for (var e in t) Qn(o, e, { get: t[e], enumerable: !0 });
      },
      ql = (o, t, e, n) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of Ol(t))
            !pc.call(o, i) &&
              i !== e &&
              Qn(o, i, {
                get: () => t[i],
                enumerable: !(n = xc(t, i)) || n.enumerable,
              });
        return o;
      };
    var v = (o, t, e) => (
      (e = o != null ? Dl(Gc(o)) : {}),
      ql(
        t || !o || !o.__esModule
          ? Qn(e, "default", { value: o, enumerable: !0 })
          : e,
        o
      )
    );
    var Le = (o, t, e, n) => {
      for (
        var i = n > 1 ? void 0 : n ? xc(t, e) : t, s = o.length - 1, c;
        s >= 0;
        s--
      )
        (c = o[s]) && (i = (n ? c(t, e, i) : c(i)) || i);
      return n && i && Qn(t, e, i), i;
    };
    var Di = (o, t, e) => jl(Gc(o), e, t);
    var Z = (o, t, e) =>
      new Promise((n, i) => {
        var s = (r) => {
            try {
              l(e.next(r));
            } catch (B) {
              i(B);
            }
          },
          c = (r) => {
            try {
              l(e.throw(r));
            } catch (B) {
              i(B);
            }
          },
          l = (r) =>
            r.done ? n(r.value) : Promise.resolve(r.value).then(s, c);
        l((e = e.apply(o, t)).next());
      });
    var A = _l(($r, fs) => {
      "use strict";
      var $l = Object.prototype.hasOwnProperty,
        ne = "~";
      function ei() {}
      a(ei, "Events");
      Object.create &&
        ((ei.prototype = Object.create(null)), new ei().__proto__ || (ne = !1));
      function er(o, t, e) {
        (this.fn = o), (this.context = t), (this.once = e || !1);
      }
      a(er, "EE");
      function Vc(o, t, e, n, i) {
        if (typeof e != "function")
          throw new TypeError("The listener must be a function");
        var s = new er(e, n || o, i),
          c = ne ? ne + t : t;
        return (
          o._events[c]
            ? o._events[c].fn
              ? (o._events[c] = [o._events[c], s])
              : o._events[c].push(s)
            : ((o._events[c] = s), o._eventsCount++),
          o
        );
      }
      a(Vc, "addListener");
      function zi(o, t) {
        --o._eventsCount === 0 ? (o._events = new ei()) : delete o._events[t];
      }
      a(zi, "clearEvent");
      function _() {
        (this._events = new ei()), (this._eventsCount = 0);
      }
      a(_, "EventEmitter");
      _.prototype.eventNames = a(function () {
        var t = [],
          e,
          n;
        if (this._eventsCount === 0) return t;
        for (n in (e = this._events))
          $l.call(e, n) && t.push(ne ? n.slice(1) : n);
        return Object.getOwnPropertySymbols
          ? t.concat(Object.getOwnPropertySymbols(e))
          : t;
      }, "eventNames");
      _.prototype.listeners = a(function (t) {
        var e = ne ? ne + t : t,
          n = this._events[e];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, s = n.length, c = new Array(s); i < s; i++)
          c[i] = n[i].fn;
        return c;
      }, "listeners");
      _.prototype.listenerCount = a(function (t) {
        var e = ne ? ne + t : t,
          n = this._events[e];
        return n ? (n.fn ? 1 : n.length) : 0;
      }, "listenerCount");
      _.prototype.emit = a(function (t, e, n, i, s, c) {
        var l = ne ? ne + t : t;
        if (!this._events[l]) return !1;
        var r = this._events[l],
          B = arguments.length,
          d,
          g;
        if (r.fn) {
          switch ((r.once && this.removeListener(t, r.fn, void 0, !0), B)) {
            case 1:
              return r.fn.call(r.context), !0;
            case 2:
              return r.fn.call(r.context, e), !0;
            case 3:
              return r.fn.call(r.context, e, n), !0;
            case 4:
              return r.fn.call(r.context, e, n, i), !0;
            case 5:
              return r.fn.call(r.context, e, n, i, s), !0;
            case 6:
              return r.fn.call(r.context, e, n, i, s, c), !0;
          }
          for (g = 1, d = new Array(B - 1); g < B; g++) d[g - 1] = arguments[g];
          r.fn.apply(r.context, d);
        } else {
          var Q = r.length,
            F;
          for (g = 0; g < Q; g++)
            switch (
              (r[g].once && this.removeListener(t, r[g].fn, void 0, !0), B)
            ) {
              case 1:
                r[g].fn.call(r[g].context);
                break;
              case 2:
                r[g].fn.call(r[g].context, e);
                break;
              case 3:
                r[g].fn.call(r[g].context, e, n);
                break;
              case 4:
                r[g].fn.call(r[g].context, e, n, i);
                break;
              default:
                if (!d)
                  for (F = 1, d = new Array(B - 1); F < B; F++)
                    d[F - 1] = arguments[F];
                r[g].fn.apply(r[g].context, d);
            }
        }
        return !0;
      }, "emit");
      _.prototype.on = a(function (t, e, n) {
        return Vc(this, t, e, n, !1);
      }, "on");
      _.prototype.once = a(function (t, e, n) {
        return Vc(this, t, e, n, !0);
      }, "once");
      _.prototype.removeListener = a(function (t, e, n, i) {
        var s = ne ? ne + t : t;
        if (!this._events[s]) return this;
        if (!e) return zi(this, s), this;
        var c = this._events[s];
        if (c.fn)
          c.fn === e &&
            (!i || c.once) &&
            (!n || c.context === n) &&
            zi(this, s);
        else {
          for (var l = 0, r = [], B = c.length; l < B; l++)
            (c[l].fn !== e || (i && !c[l].once) || (n && c[l].context !== n)) &&
              r.push(c[l]);
          r.length
            ? (this._events[s] = r.length === 1 ? r[0] : r)
            : zi(this, s);
        }
        return this;
      }, "removeListener");
      _.prototype.removeAllListeners = a(function (t) {
        var e;
        return (
          t
            ? ((e = ne ? ne + t : t), this._events[e] && zi(this, e))
            : ((this._events = new ei()), (this._eventsCount = 0)),
          this
        );
      }, "removeAllListeners");
      _.prototype.off = _.prototype.removeListener;
      _.prototype.addListener = _.prototype.on;
      _.prefixed = ne;
      _.EventEmitter = _;
      typeof fs != "undefined" && (fs.exports = _);
    });
    var Ec = v(A(), 1);
    var me = {
        modifierCodes: {
          LCTRL: 1,
          RCTRL: 2,
          LALT: 4,
          RALT: 8,
          SHIFT: 16,
          CTRL: 32,
          ALT: 64,
          META: 128,
          CAPS: 256,
          NO_CAPS: 512,
          NUM_LOCK: 1024,
          NO_NUM_LOCK: 2048,
          SCROLL_LOCK: 4096,
          NO_SCROLL_LOCK: 8192,
          VIRTUAL_KEY: 16384,
          VIRTUAL_CHAR_KEY: 32768,
        },
        modifierBitmasks: {
          ALL: 127,
          ALT_GR_SIM: 5,
          CHIRAL: 31,
          IS_CHIRAL: 15,
          NON_CHIRAL: 112,
          NON_LEGACY: 111,
        },
        stateBitmasks: {
          ALL: 16128,
          CAPS: 768,
          NUM_LOCK: 3072,
          SCROLL_LOCK: 12288,
        },
        keyCodes: {
          K_BKSP: 8,
          K_TAB: 9,
          K_ENTER: 13,
          K_SHIFT: 16,
          K_CONTROL: 17,
          K_ALT: 18,
          K_PAUSE: 19,
          K_CAPS: 20,
          K_ESC: 27,
          K_SPACE: 32,
          K_PGUP: 33,
          K_PGDN: 34,
          K_END: 35,
          K_HOME: 36,
          K_LEFT: 37,
          K_UP: 38,
          K_RIGHT: 39,
          K_DOWN: 40,
          K_SEL: 41,
          K_PRINT: 42,
          K_EXEC: 43,
          K_INS: 45,
          K_DEL: 46,
          K_HELP: 47,
          K_0: 48,
          K_1: 49,
          K_2: 50,
          K_3: 51,
          K_4: 52,
          K_5: 53,
          K_6: 54,
          K_7: 55,
          K_8: 56,
          K_9: 57,
          K_A: 65,
          K_B: 66,
          K_C: 67,
          K_D: 68,
          K_E: 69,
          K_F: 70,
          K_G: 71,
          K_H: 72,
          K_I: 73,
          K_J: 74,
          K_K: 75,
          K_L: 76,
          K_M: 77,
          K_N: 78,
          K_O: 79,
          K_P: 80,
          K_Q: 81,
          K_R: 82,
          K_S: 83,
          K_T: 84,
          K_U: 85,
          K_V: 86,
          K_W: 87,
          K_X: 88,
          K_Y: 89,
          K_Z: 90,
          K_NP0: 96,
          K_NP1: 97,
          K_NP2: 98,
          K_NP3: 99,
          K_NP4: 100,
          K_NP5: 101,
          K_NP6: 102,
          K_NP7: 103,
          K_NP8: 104,
          K_NP9: 105,
          K_NPSTAR: 106,
          K_NPPLUS: 107,
          K_SEPARATOR: 108,
          K_NPMINUS: 109,
          K_NPDOT: 110,
          K_NPSLASH: 111,
          K_F1: 112,
          K_F2: 113,
          K_F3: 114,
          K_F4: 115,
          K_F5: 116,
          K_F6: 117,
          K_F7: 118,
          K_F8: 119,
          K_F9: 120,
          K_F10: 121,
          K_F11: 122,
          K_F12: 123,
          K_NUMLOCK: 144,
          K_SCROLL: 145,
          K_LSHIFT: 160,
          K_RSHIFT: 161,
          K_LCONTROL: 162,
          K_RCONTROL: 163,
          K_LALT: 164,
          K_RALT: 165,
          K_COLON: 186,
          K_EQUAL: 187,
          K_COMMA: 188,
          K_HYPHEN: 189,
          K_PERIOD: 190,
          K_SLASH: 191,
          K_BKQUOTE: 192,
          K_LBRKT: 219,
          K_BKSLASH: 220,
          K_RBRKT: 221,
          K_QUOTE: 222,
          K_oE2: 226,
          K_OE2: 226,
          K_LOPT: 50001,
          K_ROPT: 50002,
          K_NUMERALS: 50003,
          K_SYMBOLS: 50004,
          K_CURRENCIES: 50005,
          K_UPPER: 50006,
          K_LOWER: 50007,
          K_ALPHA: 50008,
          K_SHIFTED: 50009,
          K_ALTGR: 50010,
          K_TABBACK: 50011,
          K_TABFWD: 50012,
        },
        codesUS: [
          ["0123456789", ";=,-./`", "[\\]'"],
          [")!@#$%^&*(", ":+<_>?~", '{|}"'],
        ],
        isKnownOSKModifierKey(o) {
          switch (o) {
            case "K_SHIFT":
            case "K_LOPT":
            case "K_ROPT":
            case "K_NUMLOCK":
            case "K_CAPS":
              return !0;
            default:
              if (me.keyCodes[o] >= 5e4) return !0;
              let t = me[o];
              if (t > 5e4 && t < 50011) return !0;
          }
          return !1;
        },
        getModifierState(o) {
          var t = 0;
          o.indexOf("shift") >= 0 && (t |= me.modifierCodes.SHIFT);
          var e = !1;
          o.indexOf("leftctrl") >= 0 &&
            ((t |= me.modifierCodes.LCTRL), (e = !0)),
            o.indexOf("rightctrl") >= 0 &&
              ((t |= me.modifierCodes.RCTRL), (e = !0)),
            o.indexOf("ctrl") >= 0 && !e && (t |= me.modifierCodes.CTRL);
          var n = !1;
          return (
            o.indexOf("leftalt") >= 0 &&
              ((t |= me.modifierCodes.LALT), (n = !0)),
            o.indexOf("rightalt") >= 0 &&
              ((t |= me.modifierCodes.RALT), (n = !0)),
            o.indexOf("alt") >= 0 && !n && (t |= me.modifierCodes.ALT),
            t
          );
        },
        getStateFromLayer(o) {
          var t = 0;
          return (
            o.indexOf("caps") >= 0
              ? (t |= me.modifierCodes.CAPS)
              : (t |= me.modifierCodes.NO_CAPS),
            t
          );
        },
      },
      U = me;
    var Ze = class {
      constructor() {}
      codeForEvent(t) {
        return U.keyCodes[t.kName] || t.Lcode;
      }
      forAny(t, e, n) {
        var i = "";
        if ((i = this.forSpecialEmulation(t)) != null) return i;
        if (!e && (i = this.forNumpadKeys(t)) != null) return i;
        if ((i = this.forUnicodeKeynames(t, n)) != null) return i;
        if ((i = this.forBaseKeys(t, n)) != null) return i;
        switch (this.codeForEvent(t)) {
          default:
            return null;
        }
      }
      isCommand(t) {
        switch (this.codeForEvent(t)) {
          default:
            return !1;
        }
      }
      applyCommand(t, e) {}
      forSpecialEmulation(t) {
        switch (this.codeForEvent(t)) {
          case U.keyCodes.K_BKSP:
            return "\b";
          case U.keyCodes.K_ENTER:
            return `
`;
          default:
            return null;
        }
      }
      forNumpadKeys(t) {
        if (t.Lcode >= U.keyCodes.K_NP0 && t.Lcode <= U.keyCodes.K_NPSLASH) {
          if (t.Lcode < 106) var e = t.Lcode - 48;
          else e = t.Lcode - 64;
          return String._kmwFromCharCode(e);
        } else return null;
      }
      forUnicodeKeynames(t, e) {
        let n = t.kName;
        if (!n || n.substr(0, 2) != "U_") return null;
        let i = "",
          s = n.substr(2).split("_");
        for (let c of s) {
          let l = parseInt(c, 16);
          if ((0 <= l && l <= 31) || (128 <= l && l <= 159) || isNaN(l)) {
            e && (e.errorLog = "Suppressing Unicode control code in " + n);
            continue;
          } else i += String.kmwFromCharCode(l);
        }
        return i || null;
      }
      forBaseKeys(t, e) {
        let n = t.Lcode,
          i = t.Lmodifiers;
        if (i == U.modifierCodes.SHIFT) i = 1;
        else if (i != 0)
          return (
            e &&
              (e.warningLog =
                "KMW only defines default key output for the 'default' and 'shift' layers!"),
            null
          );
        try {
          if (n == U.keyCodes.K_SPACE) return " ";
          if (n >= U.keyCodes.K_0 && n <= U.keyCodes.K_9)
            return U.codesUS[i][0][n - U.keyCodes.K_0];
          if (n >= U.keyCodes.K_A && n <= U.keyCodes.K_Z)
            return String.fromCharCode(n + (i ? 0 : 32));
          if (n >= U.keyCodes.K_COLON && n <= U.keyCodes.K_BKQUOTE)
            return U.codesUS[i][1][n - U.keyCodes.K_COLON];
          if (n >= U.keyCodes.K_LBRKT && n <= U.keyCodes.K_QUOTE)
            return U.codesUS[i][2][n - U.keyCodes.K_LBRKT];
          if (n == U.keyCodes.K_oE2) return i ? "|" : "\\";
        } catch (s) {
          e &&
            (e.errorLog =
              "Error detected with default mapping for key:  code = " +
              n +
              ", shift state = " +
              (i == 1 ? "shift" : "default"));
        }
        return null;
      }
    };
    a(Ze, "DefaultRules");
    var tr = new Ze(),
      M = class {
        constructor(t) {
          this.isSynthetic = !0;
          for (let e in t) t[e] !== void 0 && (this[e] = t[e]);
        }
        static constructNullKeyEvent(t) {
          return new M({
            Lcode: 0,
            kName: "",
            device: t,
            Lstates: void 0,
            Lmodifiers: void 0,
            vkCode: void 0,
            LisVirtualKey: void 0,
          });
        }
        get isModifier() {
          switch (this.Lcode) {
            case 16:
            case 17:
            case 18:
            case 20:
            case 144:
            case 145:
              return !0;
            default:
              return !1;
          }
        }
        setMnemonicCode(t, e) {
          if (this.Lcode != U.keyCodes.K_SPACE) {
            let i = new M(this);
            for (let s in this) i[s] = this[s];
            (i.kName = "K_xxxx"), (i.Lmodifiers = t ? 16 : 0);
            var n = tr.forAny(i, !0);
            (this.vkCode = this.Lcode),
              n
                ? (this.Lcode = n.charCodeAt(0))
                : this.isModifier || delete this.Lcode;
          }
          e &&
            ((this.Lcode >= 65 && this.Lcode <= 90) ||
              (this.Lcode >= 97 && this.Lcode <= 122)) &&
            ((this.Lmodifiers ^= 16), (this.Lcode ^= 32));
        }
      };
    a(M, "KeyEvent");
    var ve = class {};
    a(ve, "KeyMap");
    var Ki = class {
      constructor() {
        this.FF = new ve();
        this.Safari = new ve();
        this.Opera = new ve();
        (this.FF.k61 = 187), (this.FF.k59 = 186), (this.FF.k173 = 189);
      }
    };
    a(Ki, "BrowserKeyMaps");
    var Oi = class {
      constructor() {
        (this.se = new ve()),
          (this.se.k220 = 192),
          (this.se.k187 = 189),
          (this.se.k219 = 187),
          (this.se.k221 = 219),
          (this.se.k186 = 221),
          (this.se.k191 = 220),
          (this.se.k192 = 186),
          (this.se.k189 = 191),
          (this.uk = new ve()),
          (this.uk.k223 = 192),
          (this.uk.k192 = 222),
          (this.uk.k222 = 226),
          (this.uk.k220 = 220);
      }
    };
    a(Oi, "LanguageKeyMaps");
    var pt = class {
        constructor() {}
        static _usCodeInit() {
          var t = new ve(),
            e = new ve();
          (t.k192 = 96),
            (t.k49 = 49),
            (t.k50 = 50),
            (t.k51 = 51),
            (t.k52 = 52),
            (t.k53 = 53),
            (t.k54 = 54),
            (t.k55 = 55),
            (t.k56 = 56),
            (t.k57 = 57),
            (t.k48 = 48),
            (t.k189 = 45),
            (t.k187 = 61),
            (t.k81 = 113),
            (t.k87 = 119),
            (t.k69 = 101),
            (t.k82 = 114),
            (t.k84 = 116),
            (t.k89 = 121),
            (t.k85 = 117),
            (t.k73 = 105),
            (t.k79 = 111),
            (t.k80 = 112),
            (t.k219 = 91),
            (t.k221 = 93),
            (t.k220 = 92),
            (t.k65 = 97),
            (t.k83 = 115),
            (t.k68 = 100),
            (t.k70 = 102),
            (t.k71 = 103),
            (t.k72 = 104),
            (t.k74 = 106),
            (t.k75 = 107),
            (t.k76 = 108),
            (t.k186 = 59),
            (t.k222 = 39),
            (t.k90 = 122),
            (t.k88 = 120),
            (t.k67 = 99),
            (t.k86 = 118),
            (t.k66 = 98),
            (t.k78 = 110),
            (t.k77 = 109),
            (t.k188 = 44),
            (t.k190 = 46),
            (t.k191 = 47),
            (e.k192 = 126),
            (e.k49 = 33),
            (e.k50 = 64),
            (e.k51 = 35),
            (e.k52 = 36),
            (e.k53 = 37),
            (e.k54 = 94),
            (e.k55 = 38),
            (e.k56 = 42),
            (e.k57 = 40),
            (e.k48 = 41),
            (e.k189 = 95),
            (e.k187 = 43),
            (e.k81 = 81),
            (e.k87 = 87),
            (e.k69 = 69),
            (e.k82 = 82),
            (e.k84 = 84),
            (e.k89 = 89),
            (e.k85 = 85),
            (e.k73 = 73),
            (e.k79 = 79),
            (e.k80 = 80),
            (e.k219 = 123),
            (e.k221 = 125),
            (e.k220 = 124),
            (e.k65 = 65),
            (e.k83 = 83),
            (e.k68 = 68),
            (e.k70 = 70),
            (e.k71 = 71),
            (e.k72 = 72),
            (e.k74 = 74),
            (e.k75 = 75),
            (e.k76 = 76),
            (e.k186 = 58),
            (e.k222 = 34),
            (e.k90 = 90),
            (e.k88 = 88),
            (e.k67 = 67),
            (e.k86 = 86),
            (e.k66 = 66),
            (e.k78 = 78),
            (e.k77 = 77),
            (e.k188 = 60),
            (e.k190 = 62),
            (e.k191 = 63),
            (pt._usCharCodes = [t, e]);
        }
        static _USKeyCodeToCharCode(t) {
          return pt.usCharCodes[t.Lmodifiers & 16 ? 1 : 0]["k" + t.Lcode];
        }
        static get usCharCodes() {
          return pt._usCharCodes || pt._usCodeInit(), pt._usCharCodes;
        }
      },
      w = pt;
    a(w, "KeyMapping"), (w.browserMap = new Ki()), (w.languageMap = new Oi());
    function be(o, t) {
      var e = t || {};
      for (var n in o)
        typeof o[n] == "object" && o[n] != null
          ? ((e[n] = o[n].constructor === Array ? [] : {}), be(o[n], e[n]))
          : (e[n] = o[n]);
      return e;
    }
    a(be, "deepCopy");
    var H = class {
      constructor(t, e, n, i) {
        switch (t.toLowerCase()) {
          case H.Browser.Chrome:
          case H.Browser.Edge:
          case H.Browser.Firefox:
          case H.Browser.Native:
          case H.Browser.Opera:
          case H.Browser.Safari:
            this.browser = t.toLowerCase();
            break;
          default:
            this.browser = H.Browser.Other;
        }
        switch (e.toLowerCase()) {
          case H.FormFactor.Desktop:
          case H.FormFactor.Phone:
          case H.FormFactor.Tablet:
            this.formFactor = e.toLowerCase();
            break;
          default:
            throw "Invalid form factor specified for device: " + e;
        }
        switch (n.toLowerCase()) {
          case H.OperatingSystem.Windows.toLowerCase():
          case H.OperatingSystem.macOS.toLowerCase():
          case H.OperatingSystem.Linux.toLowerCase():
          case H.OperatingSystem.Android.toLowerCase():
          case H.OperatingSystem.iOS.toLowerCase():
            this.OS = n.toLowerCase();
            break;
          default:
            this.OS = H.OperatingSystem.Other;
        }
        this.touchable = i;
      }
    };
    a(H, "DeviceSpec");
    ((n) => {
      let o;
      ((g) => (
        (g.Chrome = "chrome"),
        (g.Edge = "edge"),
        (g.Firefox = "firefox"),
        (g.Native = "native"),
        (g.Opera = "opera"),
        (g.Safari = "safari"),
        (g.Other = "other")
      ))((o = n.Browser || (n.Browser = {})));
      let t;
      ((d) => (
        (d.Windows = "windows"),
        (d.macOS = "macosx"),
        (d.Linux = "linux"),
        (d.Android = "android"),
        (d.iOS = "ios"),
        (d.Other = "other")
      ))((t = n.OperatingSystem || (n.OperatingSystem = {})));
      let e;
      ((l) => (
        (l.Desktop = "desktop"), (l.Phone = "phone"), (l.Tablet = "tablet")
      ))((e = n.FormFactor || (n.FormFactor = {})));
    })(H || (H = {}));
    function ks(o) {
      return new H(o.browser, "desktop", o.OS, !1);
    }
    a(ks, "physicalKeyDeviceAlias");
    var p = H;
    var q = class {};
    a(q, "KEYMAN_VERSION"),
      (q.VERSION = "17.0.335"),
      (q.VERSION_RELEASE = "17.0"),
      (q.VERSION_MAJOR = "17"),
      (q.VERSION_MINOR = "0"),
      (q.VERSION_PATCH = "335"),
      (q.TIER = "stable"),
      (q.VERSION_TAG = ""),
      (q.VERSION_WITH_TAG = "17.0.335"),
      (q.VERSION_ENVIRONMENT = "stable"),
      (q.VERSION_GIT_TAG = "release@17.0.335");
    var it = q;
    var Xt = class {
        constructor(t) {
          if (t == null) {
            this.components = [].concat(
              Xt.DEVELOPER_VERSION_FALLBACK.components
            );
            return;
          }
          if (Array.isArray(t)) {
            let i = t;
            if (i.length < 2)
              throw new Error(
                "Version string must have at least a major and minor component!"
              );
            this.components = [].concat(i);
            return;
          }
          let e = t.split("."),
            n = [];
          if (e.length < 2)
            throw new Error(
              "Version string must have at least a major and minor component!"
            );
          for (let i = 0; i < e.length; i++) {
            let s = parseInt(e[i], 10);
            if (isNaN(s))
              throw new Error("Version string components must be numerical!");
            n.push(s);
          }
          this.components = n;
        }
        get major() {
          return this.components[0];
        }
        get minor() {
          return this.components[1];
        }
        toString() {
          return this.components.join(".");
        }
        toJSON() {
          return this.toString();
        }
        equals(t) {
          return this.compareTo(t) == 0;
        }
        precedes(t) {
          return this.compareTo(t) < 0;
        }
        compareTo(t) {
          var e = this.components.length < t.components.length,
            n =
              this.components.length < t.components.length
                ? this.components.length
                : t.components.length,
            i;
          for (i = 0; i < n; i++) {
            let c = this.components[i] - t.components[i];
            if (c != 0) return c;
          }
          var s = e ? t.components : this.components;
          do {
            if (s[i] > 0) return e ? -1 : 1;
            i++;
          } while (i < s.length);
          return 0;
        }
      },
      k = Xt;
    a(k, "Version"),
      (k.CURRENT = new Xt(it.VERSION_RELEASE)),
      (k.DEVELOPER_VERSION_FALLBACK = new Xt([9, 0, 0])),
      (k.NO_DEFAULT_KEYCAPS = new Xt([12, 0])),
      (k.MAC_POSSIBLE_IPAD_ALIAS = new Xt([10, 15]));
    function yn() {
      return typeof globalThis != "undefined"
        ? globalThis
        : typeof window != "undefined"
        ? window
        : typeof self != "undefined"
        ? self
        : global;
    }
    a(yn, "getGlobalObject");
    function ti() {
      (String.kmwFromCharCode = function (o) {
        var t = [],
          e;
        for (e = 0; e < arguments.length; e++) {
          var n = Number(arguments[e]);
          if (!isFinite(n) || n < 0 || n > 1114111 || Math.floor(n) !== n)
            throw new RangeError("Invalid code point " + n);
          n < 65536
            ? t.push(n)
            : ((n -= 65536),
              t.push((n >> 10) + 55296),
              t.push((n % 1024) + 56320));
        }
        return String.fromCharCode.apply(void 0, t);
      }),
        (String.prototype.kmwCharCodeAt = function (o) {
          var t = String(this),
            e = 0;
          if (o < 0 || o >= t.length) return NaN;
          for (var n = 0; n < o; n++)
            if (((e = t.kmwNextChar(e)), e === null)) return NaN;
          var i = t.charCodeAt(e);
          if (i >= 55296 && i <= 56319 && t.length > e + 1) {
            var s = t.charCodeAt(e + 1);
            if (s >= 56320 && s <= 57343)
              return ((i - 55296) << 10) + (s - 56320) + 65536;
          }
          return i;
        }),
        (String.prototype.kmwIndexOf = function (o, t) {
          var e = String(this),
            n = e.indexOf(o, t);
          if (n < 0) return n;
          for (var i = 0, s = 0; s !== null && s < n; s = e.kmwNextChar(s)) i++;
          return i;
        }),
        (String.prototype.kmwLastIndexOf = function (o, t) {
          var e = String(this),
            n = e.lastIndexOf(o, t);
          if (n < 0) return n;
          for (var i = 0, s = 0; s !== null && s < n; s = e.kmwNextChar(s)) i++;
          return i;
        }),
        (String.prototype.kmwLength = function () {
          var o = String(this);
          if (o.length == 0) return 0;
          for (var t = 0, e = 0; e !== null; t++) e = o.kmwNextChar(e);
          return t;
        }),
        (String.prototype.kmwSlice = function (o, t) {
          var e = String(this),
            n = e.kmwCodePointToCodeUnit(o),
            i = e.kmwCodePointToCodeUnit(t);
          return n === null || i === null ? "" : e.slice(n, i);
        }),
        (String.prototype.kmwSubstr = function (o, t) {
          var e = String(this);
          o < 0 && (o = e.kmwLength() + o), o < 0 && (o = 0);
          var n = e.kmwCodePointToCodeUnit(o),
            i = n;
          if (n === null) return "";
          if (arguments.length < 2) i = e.length;
          else for (var s = 0; s < t; s++) i = e.kmwNextChar(i);
          return i === null ? e.substring(n) : e.substring(n, i);
        }),
        (String.prototype.kmwSubstring = function (o, t) {
          var e = String(this),
            n,
            i;
          if (typeof t == "undefined")
            (n = e.kmwCodePointToCodeUnit(o)), (i = e.length);
          else {
            if (o > t) {
              var s = o;
              (o = t), (t = s);
            }
            (n = e.kmwCodePointToCodeUnit(o)),
              (i = e.kmwCodePointToCodeUnit(t));
          }
          return (
            (isNaN(n) || n === null) && (n = 0),
            (isNaN(i) || i === null) && (i = e.length),
            e.substring(n, i)
          );
        }),
        (String.prototype.kmwNextChar = function (o) {
          var t = String(this);
          if (o === null || o < 0 || o >= t.length - 1) return null;
          var e = t.charCodeAt(o);
          if (e >= 55296 && e <= 56319 && t.length > o + 1) {
            var n = t.charCodeAt(o + 1);
            if (n >= 56320 && n <= 57343)
              return o == t.length - 2 ? null : o + 2;
          }
          return o + 1;
        }),
        (String.prototype.kmwPrevChar = function (o) {
          var t = String(this);
          if (o == null || o <= 0 || o > t.length) return null;
          var e = t.charCodeAt(o - 1);
          if (e >= 56320 && e <= 57343 && o > 1) {
            var n = t.charCodeAt(o - 2);
            if (n >= 55296 && n <= 56319) return o - 2;
          }
          return o - 1;
        }),
        (String.prototype.kmwCodePointToCodeUnit = function (o) {
          if (o === null) return null;
          var t = String(this),
            e = 0;
          if (o < 0) {
            e = t.length;
            for (var n = 0; n > o; n--) e = t.kmwPrevChar(e);
            return e;
          }
          if (o == t.kmwLength()) return t.length;
          for (var n = 0; n < o; n++) e = t.kmwNextChar(e);
          return e;
        }),
        (String.prototype.kmwCodeUnitToCodePoint = function (o) {
          var t = String(this);
          return o === null
            ? null
            : o == 0
            ? 0
            : o < 0
            ? t.substr(o).kmwLength()
            : t.substr(0, o).kmwLength();
        }),
        (String.prototype.kmwCharAt = function (o) {
          var t = String(this);
          return o >= 0 ? t.kmwSubstr(o, 1) : "";
        }),
        (String.prototype.kmwBMPNextChar = function (o) {
          var t = String(this);
          return o < 0 || o >= t.length - 1 ? null : o + 1;
        }),
        (String.prototype.kmwBMPPrevChar = function (o) {
          var t = String(this);
          return o <= 0 || o > t.length ? null : o - 1;
        }),
        (String.prototype.kmwBMPCodePointToCodeUnit = function (o) {
          return o;
        }),
        (String.prototype.kmwBMPCodeUnitToCodePoint = function (o) {
          return o;
        }),
        (String.prototype.kmwBMPLength = function () {
          var o = String(this);
          return o.length;
        }),
        (String.prototype.kmwBMPSubstr = function (o, t) {
          var e = String(this);
          return o > -1 ? e.substr(o, t) : e.substr(e.length + o, -o);
        }),
        (String.kmwEnableSupplementaryPlane = function (o) {
          var t = String.prototype;
          (String._kmwFromCharCode = o
            ? String.kmwFromCharCode
            : String.fromCharCode),
            (t._kmwCharAt = o ? t.kmwCharAt : t.charAt),
            (t._kmwCharCodeAt = o ? t.kmwCharCodeAt : t.charCodeAt),
            (t._kmwIndexOf = o ? t.kmwIndexOf : t.indexOf),
            (t._kmwLastIndexOf = o ? t.kmwLastIndexOf : t.lastIndexOf),
            (t._kmwSlice = o ? t.kmwSlice : t.slice),
            (t._kmwSubstring = o ? t.kmwSubstring : t.substring),
            (t._kmwSubstr = o ? t.kmwSubstr : t.kmwBMPSubstr),
            (t._kmwLength = o ? t.kmwLength : t.kmwBMPLength),
            (t._kmwNextChar = o ? t.kmwNextChar : t.kmwBMPNextChar),
            (t._kmwPrevChar = o ? t.kmwPrevChar : t.kmwBMPPrevChar),
            (t._kmwCodePointToCodeUnit = o
              ? t.kmwCodePointToCodeUnit
              : t.kmwBMPCodePointToCodeUnit),
            (t._kmwCodeUnitToCodePoint = o
              ? t.kmwCodeUnitToCodePoint
              : t.kmwBMPCodeUnitToCodePoint);
        }),
        String._kmwFromCharCode || String.kmwEnableSupplementaryPlane(!1);
    }
    a(ti, "extendString");
    ti();
    var S = class {
      constructor(t) {
        this._isFulfilled = !1;
        this._isRejected = !1;
        this._promise = new Promise((e, n) => {
          (this._resolve = (i) => {
            (this._isFulfilled = !0), e(i);
          }),
            (this._reject = (i) => {
              (this._isRejected = !0), n(i);
            }),
            t && t(this._resolve, this._reject);
        });
      }
      get resolve() {
        return this._resolve;
      }
      get reject() {
        return this._reject;
      }
      get isFulfilled() {
        return this._isFulfilled;
      }
      get isRejected() {
        return this._isRejected;
      }
      get isResolved() {
        return this.isFulfilled || this.isRejected;
      }
      then(t, e) {
        return this._promise.then(t, e);
      }
      catch(t) {
        return this._promise.catch(t);
      }
      finally(t) {
        return this._promise.finally(t);
      }
      get corePromise() {
        return this._promise;
      }
    };
    a(S, "ManagedPromise");
    var We = class extends S {
      constructor(e) {
        let n = null;
        super((c) => {
          n = setTimeout(() => {
            this.isResolved || c(!0);
          }, e);
        });
        this.timerHandle = n;
        let i = this._resolve;
        this._resolve = (c) => {
          clearTimeout(this.timerHandle), i(c);
        };
        let s = this._reject;
        this._reject = (c) => {
          clearTimeout(this.timerHandle), s(c);
        };
      }
    };
    a(We, "TimeoutPromise");
    var Se = a((o) => new We(o).corePromise, "timedPromise");
    function Pi(o) {
      return o >= 55296 && o <= 56319;
    }
    a(Pi, "Uni_IsSurrogate1");
    function ji(o) {
      return o >= 56320 && o <= 57343;
    }
    a(ji, "Uni_IsSurrogate2");
    var Vt = {};
    Xc(Vt, { PRIVATE_USE_IDS: () => nr, TouchLayoutKeySp: () => Lc });
    var nr = [
        "T_*_MT_SHIFT_TO_SHIFT",
        "T_*_MT_SHIFT_TO_CAPS",
        "T_*_MT_SHIFT_TO_DEFAULT",
      ],
      Lc = ((r) => (
        (r[(r.normal = 0)] = "normal"),
        (r[(r.special = 1)] = "special"),
        (r[(r.specialActive = 2)] = "specialActive"),
        (r[(r.customSpecial = 3)] = "customSpecial"),
        (r[(r.customSpecialActive = 4)] = "customSpecialActive"),
        (r[(r.deadkey = 8)] = "deadkey"),
        (r[(r.blank = 9)] = "blank"),
        (r[(r.spacer = 10)] = "spacer"),
        r
      ))(Lc || {});
    var f = Vt.TouchLayoutKeySp;
    var ir = 200,
      D = class {
        static buildDefaultLayout(t, e, n) {
          var i = n;
          typeof D.dfltLayout[i] != "object" && (i = "desktop");
          let s = U.modifierBitmasks.NON_CHIRAL,
            c = k.CURRENT;
          e && ((s = e.modifierBitmask), (c = e.compilerVersion)),
            t || (t = this.DEFAULT_RAW_SPEC);
          var l = be(D.dfltLayout[i]),
            r,
            B = l.layer,
            d = t.KLS,
            g = t.K102,
            Q,
            F,
            y,
            u,
            I,
            b,
            h,
            x,
            G = (s & U.modifierBitmasks.IS_CHIRAL) != 0;
          if (t.F) {
            let wi =
              /^(?:(?:italic|bold) )* *[0-9.eE-]+(?:[a-z]+) "(.+)"$/.exec(t.F);
            wi && (l.font = wi[1]);
          }
          var X = !(typeof d == "undefined" || !d);
          X || (d = t.KLS = D.processLegacyDefinitions(t.BK));
          var L = /\*\w+\*/,
            J = Object.getOwnPropertyNames(d),
            oe = [];
          if (
            (J.splice(J.indexOf("default"), 1),
            (J = ["default"].concat(J)),
            e &&
              e.emulatesAltGr &&
              (J.indexOf("leftctrl-leftalt") == -1 &&
                J.indexOf("rightalt") != -1 &&
                (J.push("leftctrl-leftalt"),
                (d["leftctrl-leftalt"] = d.rightalt)),
              J.indexOf("leftctrl-leftalt-shift") == -1 &&
                J.indexOf("rightalt-shift") != -1 &&
                (J.push("leftctrl-leftalt-shift"),
                (d["leftctrl-leftalt-shift"] = d["rightalt-shift"]))),
            (l.displayUnderlying = e ? !!e.scriptObject.KDU : !1),
            n == "desktop")
          )
            for (oe = D.generateLayerIds(G), r = 0; r < oe.length; r++)
              J.indexOf(oe[r]) != -1 && oe.splice(r--, 1);
          var ae = J.concat(oe);
          if (X && n != "desktop") {
            var Ue = null;
            b = B[0].row;
            for (var On = 0; On < b.length; On++) {
              x = b[On].key;
              for (var Fn = 0; Fn < x.length; Fn++)
                (h = x[Fn]), h.id == "K_SHIFT" && (Ue = h);
            }
            if (Ue) {
              Ue.sk = [];
              for (var Gt in d) {
                if (Gt == "default" || Gt == "shift") continue;
                var Pn = D.modifierSpecials[Gt];
                let wi = { id: `K_${Pn}`, text: Pn, sp: 1, nextlayer: Gt };
                Ue.sk.push(wi);
              }
            } else
              console.warn(
                "Error in default layout - cannot find default Shift key!"
              );
          }
          for (r = 0; r < ae.length; r++)
            r > 0 && (B[r] = be(B[0])),
              (B[r].id = ae[r]),
              (B[r].nextlayer = ae[r]),
              D.formatDefaultLayer(B[r], G, n, !!g);
          for (r = 0; r < B.length; r++) {
            var he = B[r],
              De,
              Ue = null,
              jn = null,
              Ws = "",
              _n = null,
              qn = null,
              Yi = null,
              ze = d[he.id],
              $n = he.id == "shift" ? 1 : 0,
              bc = he.id == "default" || $n ? 1 : 0;
            for (b = he.row, Q = 0; Q < b.length; Q++)
              for (x = b[Q].key, F = 0; F < x.length; F++) {
                switch (
                  ((h = x[F]),
                  (De = D.dfltCodes.indexOf(h.id)),
                  (ze || bc) &&
                    (ze && De >= 0 && De < ze.length && (h.text = ze[De]),
                    bc &&
                      c.precedes(k.NO_DEFAULT_KEYCAPS) &&
                      h.id != "K_SPACE" &&
                      De + 65 * $n < D.dfltText.length &&
                      h.text !== null &&
                      (h.text = h.text || D.dfltText[De + 65 * $n])),
                  h.text !== null && (h.text = h.text || ""),
                  h.id)
                ) {
                  case "K_SHIFT":
                    Ue = h;
                    break;
                  case "K_TAB":
                    jn = h;
                    break;
                  case "K_CAPS":
                    _n = h;
                    break;
                  case "K_NUMLOCK":
                    qn = h;
                    break;
                  case "K_SCROLL":
                    Yi = h;
                    break;
                }
                if (h.sk != null) {
                  for (y = 0; y < h.sk.length; y++)
                    J.indexOf(h.sk[y].nextlayer) == -1 && h.sk.splice(y--, 1);
                  h.sk.length == 0 && (h.sk = null);
                }
              }
            (he.shiftKey = Ue),
              (he.capsKey = _n),
              (he.numKey = qn),
              (he.scrollKey = Yi),
              n != "desktop" &&
                r > 0 &&
                Ue != null &&
                ((Ue.sp = f.specialActive),
                (Ue.sk = null),
                (Ue.text = D.modifierSpecials[B[r].id]
                  ? D.modifierSpecials[B[r].id]
                  : "*Shift*"));
          }
          return l;
        }
        static getLayerId(t) {
          let e = U.modifierCodes;
          var n = "";
          return t == 0
            ? "default"
            : (t & e.LCTRL && (n = (n.length > 0 ? n + "-" : "") + "leftctrl"),
              t & e.RCTRL && (n = (n.length > 0 ? n + "-" : "") + "rightctrl"),
              t & e.LALT && (n = (n.length > 0 ? n + "-" : "") + "leftalt"),
              t & e.RALT && (n = (n.length > 0 ? n + "-" : "") + "rightalt"),
              t & e.SHIFT && (n = (n.length > 0 ? n + "-" : "") + "shift"),
              t & e.CTRL && (n = (n.length > 0 ? n + "-" : "") + "ctrl"),
              t & e.ALT && (n = (n.length > 0 ? n + "-" : "") + "alt"),
              n);
        }
        static generateLayerIds(t) {
          var e, n;
          t ? ((e = 32), (n = 1)) : ((e = 8), (n = 16));
          for (var i = [], s = 0; s < e; s++) i.push(D.getLayerId(s * n));
          return i;
        }
        static formatDefaultLayer(t, e, n, i) {
          for (var s = t.id, c = 0; c < t.row.length; c++)
            for (var l = t.row[c], r = l.key, B = 0; B < r.length; B++) {
              var d = r[B];
              switch (d.id) {
                case "K_SHIFT":
                case "K_LSHIFT":
                case "K_RSHIFT":
                  s.indexOf("shift") != -1 && (d.sp = f.specialActive),
                    n != "desktop" &&
                      (s != "default"
                        ? (d.nextlayer = "default")
                        : (d.nextlayer = "shift"));
                  break;
                case "K_LCTRL":
                case "K_LCONTROL":
                  if (e) {
                    s.indexOf("leftctrl") != -1 && (d.sp = f.specialActive);
                    break;
                  }
                case "K_RCTRL":
                case "K_RCONTROL":
                  if (e) {
                    s.indexOf("rightctrl") != -1 && (d.sp = f.specialActive);
                    break;
                  }
                case "K_CONTROL":
                  s.indexOf("ctrl") != -1 &&
                    (!e ||
                      (s.indexOf("leftctrl") != -1 &&
                        s.indexOf("rightctrl") != -1)) &&
                    (d.sp = f.specialActive);
                  break;
                case "K_LALT":
                  if (e) {
                    s.indexOf("leftalt") != -1 && (d.sp = f.specialActive);
                    break;
                  }
                case "K_RALT":
                  if (e) {
                    s.indexOf("rightalt") != -1 && (d.sp = f.specialActive);
                    break;
                  }
                case "K_ALT":
                  s.indexOf("alt") != -1 &&
                    (!e ||
                      (s.indexOf("leftalt") != -1 &&
                        s.indexOf("rightalt") != -1)) &&
                    (d.sp = f.specialActive);
                  break;
                case "K_oE2":
                  (typeof i == "undefined" || !i) &&
                    (n == "desktop"
                      ? (r.splice(B--, 1), (r[0].width = ir))
                      : (r[B].sp = f.spacer));
                  break;
              }
            }
        }
        static processLegacyDefinitions(t) {
          for (
            var e = D.generateLayerIds(!1), n = {}, i = 0;
            i < e.length;
            i++
          ) {
            for (var s = e[i], c = [], l = !1, r = 0; r < 65; r++) {
              var B = r + 65 * i;
              c.push(t[B]),
                B < t.length &&
                  t[B] != "" &&
                  r != D.dfltCodes.indexOf("K_SPACE") &&
                  (l = !0);
            }
            l && (n[s] = c);
          }
          return (
            (typeof n.default == "undefined" || !n.default) &&
              (n.default = [""]),
            (typeof n.shift == "undefined" || !n.shift) && (n.shift = [""]),
            n
          );
        }
      },
      R = D;
    a(R, "Layouts"),
      (R.dfltCodes = [
        "K_BKQUOTE",
        "K_1",
        "K_2",
        "K_3",
        "K_4",
        "K_5",
        "K_6",
        "K_7",
        "K_8",
        "K_9",
        "K_0",
        "K_HYPHEN",
        "K_EQUAL",
        "K_*",
        "K_*",
        "K_*",
        "K_Q",
        "K_W",
        "K_E",
        "K_R",
        "K_T",
        "K_Y",
        "K_U",
        "K_I",
        "K_O",
        "K_P",
        "K_LBRKT",
        "K_RBRKT",
        "K_BKSLASH",
        "K_*",
        "K_*",
        "K_*",
        "K_A",
        "K_S",
        "K_D",
        "K_F",
        "K_G",
        "K_H",
        "K_J",
        "K_K",
        "K_L",
        "K_COLON",
        "K_QUOTE",
        "K_*",
        "K_*",
        "K_*",
        "K_*",
        "K_*",
        "K_oE2",
        "K_Z",
        "K_X",
        "K_C",
        "K_V",
        "K_B",
        "K_N",
        "K_M",
        "K_COMMA",
        "K_PERIOD",
        "K_SLASH",
        "K_*",
        "K_*",
        "K_*",
        "K_*",
        "K_*",
        "K_SPACE",
      ]),
      (R.dfltText =
        "`1234567890-=\xA7~~qwertyuiop[]\\~~~asdfghjkl;'~~~~~?zxcvbnm,./~~~~~ ~!@#$%^&*()_+\xA7~~QWERTYUIOP{}\\~~~ASDFGHJKL:\"~~~~~?ZXCVBNM<>?~~~~~ "),
      (R.DEFAULT_RAW_SPEC = { F: "Tahoma", BK: D.dfltText }),
      (R.modifierSpecials = {
        leftalt: "*LAlt*",
        rightalt: "*RAlt*",
        alt: "*Alt*",
        leftctrl: "*LCtrl*",
        rightctrl: "*RCtrl*",
        ctrl: "*Ctrl*",
        "ctrl-alt": "*AltGr*",
        "leftctrl-leftalt": "*LAltCtrl*",
        "rightctrl-rightalt": "*RAltCtrl*",
        "leftctrl-leftalt-shift": "*LAltCtrlShift*",
        "rightctrl-rightalt-shift": "*RAltCtrlShift*",
        shift: "*Shift*",
        "shift-alt": "*AltShift*",
        "shift-ctrl": "*CtrlShift*",
        "shift-ctrl-alt": "*AltCtrlShift*",
        "leftalt-shift": "*LAltShift*",
        "rightalt-shift": "*RAltShift*",
        "leftctrl-shift": "*LCtrlShift*",
        "rightctrl-shift": "*RCtrlShift*",
      }),
      (R.dfltShiftToCaps = {
        id: "T_*_MT_SHIFT_TO_CAPS",
        text: "*ShiftLock*",
        sp: 1,
        nextlayer: "caps",
      }),
      (R.dfltShiftToDefault = {
        id: "T_*_MT_SHIFT_TO_DEFAULT",
        text: "*Shift*",
        sp: 1,
        nextlayer: "default",
      }),
      (R.dfltShiftToShift = {
        id: "T_*_MT_SHIFT_TO_SHIFT",
        text: "*Shift*",
        sp: 1,
        nextlayer: "shift",
      }),
      (R.dfltLayout = {
        desktop: {
          defaultHint: "dot",
          font: "Tahoma,Helvetica",
          layer: [
            {
              id: "default",
              row: [
                {
                  id: 1,
                  key: [
                    { id: "K_BKQUOTE" },
                    { id: "K_1" },
                    { id: "K_2" },
                    { id: "K_3" },
                    { id: "K_4" },
                    { id: "K_5" },
                    { id: "K_6" },
                    { id: "K_7" },
                    { id: "K_8" },
                    { id: "K_9" },
                    { id: "K_0" },
                    { id: "K_HYPHEN" },
                    { id: "K_EQUAL" },
                    { id: "K_BKSP", text: "*BkSp*", sp: 1, width: 130 },
                  ],
                },
                {
                  id: 2,
                  key: [
                    { id: "K_TAB", text: "*Tab*", sp: 1, width: 130 },
                    { id: "K_Q" },
                    { id: "K_W" },
                    { id: "K_E" },
                    { id: "K_R" },
                    { id: "K_T" },
                    { id: "K_Y" },
                    { id: "K_U" },
                    { id: "K_I" },
                    { id: "K_O" },
                    { id: "K_P" },
                    { id: "K_LBRKT" },
                    { id: "K_RBRKT" },
                    { id: "K_BKSLASH" },
                  ],
                },
                {
                  id: 3,
                  key: [
                    { id: "K_CAPS", text: "*Caps*", sp: 1, width: 165 },
                    { id: "K_A" },
                    { id: "K_S" },
                    { id: "K_D" },
                    { id: "K_F" },
                    { id: "K_G" },
                    { id: "K_H" },
                    { id: "K_J" },
                    { id: "K_K" },
                    { id: "K_L" },
                    { id: "K_COLON" },
                    { id: "K_QUOTE" },
                    { id: "K_ENTER", text: "*Enter*", sp: 1, width: 165 },
                  ],
                },
                {
                  id: 4,
                  key: [
                    { id: "K_SHIFT", text: "*Shift*", sp: 1, width: 130 },
                    { id: "K_oE2" },
                    { id: "K_Z" },
                    { id: "K_X" },
                    { id: "K_C" },
                    { id: "K_V" },
                    { id: "K_B" },
                    { id: "K_N" },
                    { id: "K_M" },
                    { id: "K_COMMA" },
                    { id: "K_PERIOD" },
                    { id: "K_SLASH" },
                    { id: "K_RSHIFT", text: "*Shift*", sp: 1, width: 130 },
                  ],
                },
                {
                  id: 5,
                  key: [
                    { id: "K_LCONTROL", text: "*Ctrl*", sp: 1, width: 170 },
                    { id: "K_LALT", text: "*Alt*", sp: 1, width: 160 },
                    { id: "K_SPACE", text: "", width: 770 },
                    { id: "K_RALT", text: "*Alt*", sp: 1, width: 160 },
                    { id: "K_RCONTROL", text: "*Ctrl*", sp: 1, width: 170 },
                  ],
                },
              ],
            },
          ],
        },
        tablet: {
          defaultHint: "dot",
          font: "Tahoma,Helvetica",
          layer: [
            {
              id: "default",
              row: [
                {
                  id: 0,
                  key: [
                    { id: "K_1" },
                    { id: "K_2" },
                    { id: "K_3" },
                    { id: "K_4" },
                    { id: "K_5" },
                    { id: "K_6" },
                    { id: "K_7" },
                    { id: "K_8" },
                    { id: "K_9" },
                    { id: "K_0" },
                    { id: "K_HYPHEN" },
                    { id: "K_EQUAL" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 1,
                  key: [
                    { id: "K_Q", pad: 25 },
                    { id: "K_W" },
                    { id: "K_E" },
                    { id: "K_R" },
                    { id: "K_T" },
                    { id: "K_Y" },
                    { id: "K_U" },
                    { id: "K_I" },
                    { id: "K_O" },
                    { id: "K_P" },
                    { id: "K_LBRKT" },
                    { id: "K_RBRKT" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 2,
                  key: [
                    { id: "K_A", pad: 50 },
                    { id: "K_S" },
                    { id: "K_D" },
                    { id: "K_F" },
                    { id: "K_G" },
                    { id: "K_H" },
                    { id: "K_J" },
                    { id: "K_K" },
                    { id: "K_L" },
                    { id: "K_COLON" },
                    { id: "K_QUOTE" },
                    { id: "K_BKSLASH", width: 90 },
                  ],
                },
                {
                  id: 3,
                  key: [
                    { id: "K_oE2", width: 90 },
                    { id: "K_Z" },
                    { id: "K_X" },
                    { id: "K_C" },
                    { id: "K_V" },
                    { id: "K_B" },
                    { id: "K_N" },
                    { id: "K_M" },
                    { id: "K_COMMA" },
                    { id: "K_PERIOD" },
                    { id: "K_SLASH" },
                    { id: "K_BKQUOTE" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 4,
                  key: [
                    {
                      id: "K_SHIFT",
                      text: "*Shift*",
                      sp: 1,
                      width: 200,
                      sk: [
                        {
                          id: "K_LCONTROL",
                          text: "*Ctrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "ctrl",
                        },
                        {
                          id: "K_LCONTROL",
                          text: "*LCtrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "leftctrl",
                        },
                        {
                          id: "K_RCONTROL",
                          text: "*RCtrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "rightctrl",
                        },
                        {
                          id: "K_LALT",
                          text: "*Alt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "alt",
                        },
                        {
                          id: "K_LALT",
                          text: "*LAlt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "leftalt",
                        },
                        {
                          id: "K_RALT",
                          text: "*RAlt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "rightalt",
                        },
                        {
                          id: "K_ALTGR",
                          text: "*AltGr*",
                          sp: 1,
                          width: 50,
                          nextlayer: "ctrl-alt",
                        },
                      ],
                    },
                    { id: "K_LOPT", text: "*Menu*", sp: 1, width: 150 },
                    { id: "K_SPACE", text: "", width: 570 },
                    { id: "K_BKSP", text: "*BkSp*", sp: 1, width: 150 },
                    { id: "K_ENTER", text: "*Enter*", sp: 1, width: 200 },
                  ],
                },
              ],
            },
          ],
        },
        phone: {
          defaultHint: "dot",
          font: "Tahoma,Helvetica",
          layer: [
            {
              id: "default",
              row: [
                {
                  id: 0,
                  key: [
                    { id: "K_1" },
                    { id: "K_2" },
                    { id: "K_3" },
                    { id: "K_4" },
                    { id: "K_5" },
                    { id: "K_6" },
                    { id: "K_7" },
                    { id: "K_8" },
                    { id: "K_9" },
                    { id: "K_0" },
                    { id: "K_HYPHEN" },
                    { id: "K_EQUAL" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 1,
                  key: [
                    { id: "K_Q", pad: 25 },
                    { id: "K_W" },
                    { id: "K_E" },
                    { id: "K_R" },
                    { id: "K_T" },
                    { id: "K_Y" },
                    { id: "K_U" },
                    { id: "K_I" },
                    { id: "K_O" },
                    { id: "K_P" },
                    { id: "K_LBRKT" },
                    { id: "K_RBRKT" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 2,
                  key: [
                    { id: "K_A", pad: 50 },
                    { id: "K_S" },
                    { id: "K_D" },
                    { id: "K_F" },
                    { id: "K_G" },
                    { id: "K_H" },
                    { id: "K_J" },
                    { id: "K_K" },
                    { id: "K_L" },
                    { id: "K_COLON" },
                    { id: "K_QUOTE" },
                    { id: "K_BKSLASH", width: 90 },
                  ],
                },
                {
                  id: 3,
                  key: [
                    { id: "K_oE2", width: 90 },
                    { id: "K_Z" },
                    { id: "K_X" },
                    { id: "K_C" },
                    { id: "K_V" },
                    { id: "K_B" },
                    { id: "K_N" },
                    { id: "K_M" },
                    { id: "K_COMMA" },
                    { id: "K_PERIOD" },
                    { id: "K_SLASH" },
                    { id: "K_BKQUOTE" },
                    { sp: 10, width: 1 },
                  ],
                },
                {
                  id: 4,
                  key: [
                    {
                      id: "K_SHIFT",
                      text: "*Shift*",
                      sp: 1,
                      width: 200,
                      sk: [
                        {
                          id: "K_LCONTROL",
                          text: "*Ctrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "ctrl",
                        },
                        {
                          id: "K_LCONTROL",
                          text: "*LCtrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "leftctrl",
                        },
                        {
                          id: "K_RCONTROL",
                          text: "*RCtrl*",
                          sp: 1,
                          width: 50,
                          nextlayer: "rightctrl",
                        },
                        {
                          id: "K_LALT",
                          text: "*Alt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "alt",
                        },
                        {
                          id: "K_LALT",
                          text: "*LAlt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "leftalt",
                        },
                        {
                          id: "K_RALT",
                          text: "*RAlt*",
                          sp: 1,
                          width: 50,
                          nextlayer: "rightalt",
                        },
                        {
                          id: "K_ALTGR",
                          text: "*AltGr*",
                          sp: 1,
                          width: 50,
                          nextlayer: "ctrl-alt",
                        },
                      ],
                    },
                    { id: "K_LOPT", text: "*Menu*", width: 150, sp: 1 },
                    { id: "K_SPACE", width: 570, text: "" },
                    { id: "K_BKSP", text: "*BkSp*", width: 150, sp: 1 },
                    { id: "K_ENTER", text: "*Enter*", width: 200, sp: 1 },
                  ],
                },
              ],
            },
          ],
        },
      });
    function fe(o, t, e) {
      e.enumerable = !0;
    }
    a(fe, "Enumerable");
    var Zc = {
        id: "string",
        text: "string",
        layer: "string",
        nextlayer: "string",
        font: "string",
        fontsize: "string",
        sp: "number",
        pad: "number",
        width: "number",
        sk: "subkeys",
        flick: "flicks",
        multitap: "subkeys",
        hint: "string",
        default: "boolean",
      },
      Sc = ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
      un = class {
        constructor() {
          this.isMnemonic = !1;
        }
        get baseKeyID() {
          if (typeof this.id != "undefined") return this.id;
        }
        get isPadding() {
          return this.sp == f.spacer;
        }
        get coreID() {
          if (typeof this.id == "undefined") return;
          let t = this.id || "";
          return (
            this.displayLayer != this.layer && (t = t + "+" + this.layer), t
          );
        }
        get elementID() {
          if (typeof this.id != "undefined")
            return this.displayLayer + "-" + this.coreID;
        }
        get baseKeyEvent() {
          return new M(this._baseKeyEvent);
        }
        static unicodeIDToText(t, e) {
          if (!t || t.substring(0, 2) != "U_") return null;
          let n = "",
            i = t.substring(2).split("_");
          for (let s of i) {
            let c = parseInt(s, 16);
            if ((0 <= c && c <= 31) || (128 <= c && c <= 159) || isNaN(c)) {
              e && e(s);
              continue;
            } else n += String.kmwFromCharCode(c);
          }
          return n || null;
        }
        static sanitize(t) {
          typeof t.width == "string" && (t.width = parseInt(t.width, 10)),
            t.width || (t.width = N.DEFAULT_KEY_WIDTH),
            typeof t.pad == "string" && (t.pad = parseInt(t.pad, 10)),
            t.pad || (t.pad = N.DEFAULT_PAD),
            typeof t.sp == "string" && (t.sp = Number.parseInt(t.sp, 10)),
            t.sp || (t.sp = N.DEFAULT_KEY.sp);
          for (let e of Object.keys(Zc)) {
            let n = Zc[e];
            switch (n) {
              case "subkeys":
                let i = t[e];
                if (!Array.isArray(i)) delete t[e];
                else
                  for (let l = 0; l < i.length; l++) {
                    let r = i[l];
                    typeof r != "object" ? i.splice(l--, 1) : N.sanitize(r);
                  }
                break;
              case "flicks":
                let s = t[e];
                if (typeof s != "object") delete t[e];
                else
                  for (let l of Sc) {
                    let r = s[l];
                    typeof r != "object" ? delete s[l] : N.sanitize(r);
                  }
                break;
              default:
                typeof t[e] != n && delete t[e];
            }
          }
          t.text || (t.text = N.DEFAULT_KEY.text);
        }
        static polyfill(t, e, n, i, s) {
          s || (s = { hasFlicks: !1, hasLongpresses: !1, hasMultitaps: !1 });
          let c = new un(),
            l = Object.getPrototypeOf(c);
          for (let B in c)
            if (!t.hasOwnProperty(B)) {
              let d = Object.getOwnPropertyDescriptor(l, B);
              d ? Object.defineProperty(t, B, d) : (t[B] = c[B]);
            }
          if (
            (!t.text &&
              typeof t.id == "string" &&
              (t.text = N.unicodeIDToText(t.id)),
            t.sk)
          ) {
            s.hasLongpresses = !0;
            for (let B of t.sk) ct.polyfill(B, e, n, i, s);
          }
          if (t.multitap) {
            s.hasMultitaps = !0;
            for (let B of t.multitap) ct.polyfill(B, e, n, i, s);
          }
          if (t.flick) {
            s.hasFlicks = !0;
            for (let B in t.flick) ct.polyfill(t.flick[B], e, n, i, s);
          }
          let r = t;
          (r.displayLayer = i),
            (r.layer = r.layer || i),
            un.determineHint(r, n.defaultHint),
            r.constructBaseKeyEvent(e, n, i);
        }
        static determineHint(t, e) {
          var n;
          if (t.hint) {
            t.hintSrc = t;
            return;
          }
          if (e != null && e.includes("flick-")) {
            if (t.flick) {
              let i = e.substring(6);
              (n = t.flick[i]) != null && n.text && (t.hintSrc = t.flick[i]);
            }
            return;
          }
          switch (e) {
            case "none":
              return;
            case "multitap":
              t.multitap && (t.hintSrc = t.multitap[0]);
              return;
            case "flick":
              if (t.flick) {
                for (let i of Sc)
                  if (t.flick[i]) {
                    t.hintSrc = t.flick[i];
                    return;
                  }
              }
              return;
            case "longpress":
              t.sk && (t.hintSrc = t.sk[0]);
              return;
            case "dot":
            default:
              t.sk && ((t.hint = "\u2022"), (t.hintSrc = t));
              return;
          }
        }
        constructBaseKeyEvent(t, e, n) {
          let i = this.layer || n || "",
            s = this.id ? this.id.toUpperCase() : null,
            c = {
              Lmodifiers: U.getModifierState(i),
              Lstates: U.getStateFromLayer(i),
              Lcode: s ? U.keyCodes[s] : 0,
              LisVirtualKey: !0,
              vkCode: 0,
              kName: s,
              kLayer: i,
              kbdLayer: n,
              kNextLayer: this.nextlayer,
              device: null,
              isSynthetic: !0,
            },
            l = new M(c);
          if (e.keyboard) {
            let r = e.keyboard;
            r.isMnemonic && !(e.isDefault && e.formFactor != "desktop")
              ? l.Lcode != U.keyCodes.K_SPACE &&
                ((l.vkCode = l.Lcode), (this.isMnemonic = !0))
              : (l.vkCode = l.Lcode),
              r.definesPositionalOrMnemonic ||
                ((l.Lcode = w._USKeyCodeToCharCode(l)), (l.LisVirtualKey = !1));
          }
          this._baseKeyEvent = l;
        }
      },
      ie = un;
    a(ie, "ActiveKeyBase"),
      (ie.DEFAULT_PAD = 15),
      (ie.DEFAULT_RIGHT_MARGIN = 15),
      (ie.DEFAULT_KEY_WIDTH = 100),
      (ie.DEFAULT_KEY = {
        text: "",
        width: un.DEFAULT_KEY_WIDTH,
        sp: f.normal,
        pad: un.DEFAULT_PAD,
      }),
      Le([fe], ie.prototype, "baseKeyID", 1),
      Le([fe], ie.prototype, "isPadding", 1),
      Le([fe], ie.prototype, "coreID", 1),
      Le([fe], ie.prototype, "elementID", 1),
      Le([fe], ie.prototype, "baseKeyEvent", 1),
      Le([fe], ie.prototype, "constructBaseKeyEvent", 1);
    var N = class extends ie {
      getSubkey(t) {
        if (this.sk) {
          for (let e of this.sk) if (e.coreID == t) return e;
        }
        return null;
      }
    };
    a(N, "ActiveKey");
    var ct = class extends ie {};
    a(ct, "ActiveSubKey");
    var ni = class {
        constructor() {}
        static sanitize(t) {
          for (let e of t.key)
            e == null ? (t.key.length = t.key.length - 1) : N.sanitize(e);
          typeof t.id == "string" && (t.id = Number.parseInt(t.id, 10));
        }
        static polyfill(t, e, n, i, s, c, l) {
          let r = t.key;
          for (let u = 0; u < r.length; u++) {
            let I = r[u];
            for (var B in N.DEFAULT_KEY)
              typeof I[B] != "string" &&
                typeof I[B] != "number" &&
                (I[B] = N.DEFAULT_KEY[B]);
            switch (I.sp) {
              case f.special:
                !ni.SPECIAL_LABEL.test(I.text) &&
                  I.text != "" &&
                  (I.sp = f.customSpecial);
                break;
              case f.specialActive:
                !ni.SPECIAL_LABEL.test(I.text) &&
                  I.text != "" &&
                  (I.sp = f.customSpecialActive);
                break;
            }
            N.polyfill(I, e, n, i, l);
          }
          let d = a(function (u, I, b, h) {
              (u.proportionalPad = I),
                (u.proportionalWidth = b),
                (u.proportionalX = h + I + b / 2);
            }, "setProportions"),
            g = 0;
          for (let u = 0; u < r.length - 1; u++) {
            let I = r[u];
            d(I, I.pad / s, I.width / s, g),
              (g += I.proportionalPad),
              (g += I.proportionalWidth);
          }
          let Q = N.DEFAULT_RIGHT_MARGIN / s;
          if (r.length > 0) {
            let u = r[r.length - 1];
            if (r.length == 1 && u.pad < 0) {
              let I = u.width / s,
                b = 1 - (g + I + Q);
              d(u, b, I, g);
            } else {
              let I = u.pad / s,
                b = 1 - (g + I + Q);
              d(u, I, b, g);
            }
          }
          let F = new ni();
          for (let u in F) t.hasOwnProperty(u) || (t[u] = F[u]);
          let y = t;
          y.proportionalY = c;
        }
        populateKeyMap(t) {
          this.key.forEach(function (e) {
            e.coreID && (t[e.coreID] = e);
          });
        }
      },
      Lt = ni;
    a(Lt, "ActiveRow"),
      (Lt.SPECIAL_LABEL = /\*\w+\*/),
      Le([fe], Lt.prototype, "populateKeyMap", 1);
    var Ns = class {
        constructor() {}
        static sanitize(t) {
          for (let e of t.row) Lt.sanitize(e);
        }
        static polyfill(t, e, n, i) {
          t.aligned = !1;
          let s = t.row,
            c = 0;
          for (let d of s) {
            let g = 0,
              Q = d.key;
            for (let F of Q) g += F.width + F.pad;
            g > c && (c = g);
          }
          n.formFactor == "desktop" ? (c += 5) : (c += N.DEFAULT_RIGHT_MARGIN);
          let l = t.row.length;
          for (let d = 0; d < l; d++) {
            let g = (d + 0.5) / l;
            Lt.polyfill(t.row[d], e, n, t.id, c, g, i);
          }
          let r = new Ns();
          for (let d in r) t.hasOwnProperty(d) || (t[d] = r[d]);
          let B = t;
          (B.totalWidth = c),
            (B.defaultKeyProportionalWidth = N.DEFAULT_KEY.width / c),
            (B.rowProportionalHeight = 1 / l),
            (B.keyMap = B.constructKeyMap());
        }
        constructKeyMap() {
          let t = {};
          return (
            this.row.forEach(function (e) {
              e.populateKeyMap(t);
            }),
            t
          );
        }
        getKey(t) {
          t.indexOf(this.id + "-") == 0 && (t = t.replace(this.id + "-", ""));
          let e = t.split("::");
          return e.length > 1
            ? this.keyMap[e[0]].getSubkey(e[1])
            : this.keyMap[t];
        }
      },
      Zt = Ns;
    a(Zt, "ActiveLayer"),
      Le([fe], Zt.prototype, "constructKeyMap", 1),
      Le([fe], Zt.prototype, "getKey", 1);
    var _i = class {
        constructor() {
          this.hasFlicks = !1;
          this.hasLongpresses = !1;
          this.hasMultitaps = !1;
        }
        getLayer(t) {
          return this.layerMap[t];
        }
        static correctLayerEmptyRowBug(t) {
          for (let e = 0; e < t.length; e++) {
            let i = t[e].row,
              s;
            for (s = i.length - 1; s >= 0; s--)
              (!Array.isArray(i[s].key) || i[s].key.length == 0) &&
                i.splice(s, 1);
          }
        }
        static sanitize(t) {
          _i.correctLayerEmptyRowBug(t.layer);
          for (let e of t.layer) Zt.sanitize(e);
        }
        static polyfill(t, e, n) {
          if (t == null)
            throw new Error(
              "Cannot build an ActiveLayout for a null specification."
            );
          let i = { hasFlicks: !1, hasLongpresses: !1, hasMultitaps: !1 };
          this.sanitize(t);
          var s;
          let c = {},
            l = t.layer,
            r = new _i();
          for (let d in r) t.hasOwnProperty(d) || (t[d] = r[d]);
          let B = t;
          for (B.keyboard = e, B.formFactor = n, s = 0; s < l.length; s++)
            Zt.polyfill(l[s], e, B, i), (c[l[s].id] = l[s]);
          if (n != "desktop" && !!t.layer.find((d) => d.id == "caps")) {
            let d = t.layer.find((y) => y.id == "default"),
              g = t.layer.find((y) => y.id == "shift"),
              Q = d.getKey("K_SHIFT"),
              F = g == null ? void 0 : g.getKey("K_SHIFT");
            Q &&
              F &&
              !Q.multitap &&
              !F.multitap &&
              !Q.sk &&
              !F.sk &&
              ((i.hasMultitaps = !0),
              (Q.multitap = [
                C({}, R.dfltShiftToCaps),
                C({}, R.dfltShiftToDefault),
              ]),
              (F.multitap = [
                C({}, R.dfltShiftToCaps),
                C({}, R.dfltShiftToShift),
              ]),
              Q.multitap.forEach((y) => ct.polyfill(y, e, B, "default")),
              F.multitap.forEach((y) => ct.polyfill(y, e, B, "shift")));
          }
          return (
            (B.hasFlicks = i.hasFlicks),
            (B.hasLongpresses = i.hasLongpresses),
            (B.hasMultitaps = i.hasMultitaps),
            (B.layerMap = c),
            B
          );
        }
      },
      st = _i;
    a(st, "ActiveLayout"), Le([fe], st.prototype, "getLayer", 1);
    var qi = class {
      constructor() {
        this.stores = {};
      }
    };
    a(qi, "CacheTag");
    var $i = ((n) => (
        (n[(n.NOT_LOADED = void 0)] = "NOT_LOADED"),
        (n[(n.POLYFILLED = 1)] = "POLYFILLED"),
        (n[(n.CALIBRATED = 2)] = "CALIBRATED"),
        n
      ))($i || {}),
      es = class {
        constructor(t) {
          t
            ? (this.scriptObject = t)
            : (this.scriptObject = es.DEFAULT_SCRIPT_OBJECT),
            (this.layoutStates = {});
        }
        process(t, e) {
          return this.scriptObject.gs(t, e);
        }
        processNewContextEvent(t, e) {
          return this.scriptObject.gn ? this.scriptObject.gn(t, e) : !1;
        }
        processPostKeystroke(t, e) {
          return this.scriptObject.gpk ? this.scriptObject.gpk(t, e) : !1;
        }
        get isHollow() {
          return this.scriptObject == es.DEFAULT_SCRIPT_OBJECT;
        }
        get id() {
          return this.scriptObject.KI;
        }
        get name() {
          return this.scriptObject.KN;
        }
        get variableStores() {
          let t = this.scriptObject.KVS,
            e = {};
          if (Array.isArray(t)) for (let n of t) e[n] = this.scriptObject[n];
          return e;
        }
        set variableStores(t) {
          let e = this.scriptObject.KVS;
          if (Array.isArray(e))
            for (let n of e)
              typeof t[n] == "string" && (this.scriptObject[n] = t[n]);
        }
        get _legacyLayoutSpec() {
          return this.scriptObject.KV;
        }
        get _layouts() {
          return this.scriptObject.KVKL;
        }
        set _layouts(t) {
          this.scriptObject.KVKL = t;
        }
        get compilerVersion() {
          return new k(this.scriptObject.KVER);
        }
        get isMnemonic() {
          return !!this.scriptObject.KM;
        }
        get definesPositionalOrMnemonic() {
          return typeof this.scriptObject.KM != "undefined";
        }
        get helpText() {
          return this.scriptObject.KH;
        }
        get hasScript() {
          return !!this.scriptObject.KHF;
        }
        embedScript(t) {
          this.scriptObject.KHF(t);
        }
        get oskStyling() {
          return this.scriptObject.KCSS;
        }
        get isCJK() {
          var t;
          return (
            typeof this.scriptObject.KLC != "undefined"
              ? (t = this.scriptObject.KLC)
              : typeof this.scriptObject.LanguageCode != "undefined" &&
                (t = this.scriptObject.LanguageCode),
            t == "cmn" || t == "jpn" || t == "kor"
          );
        }
        get isRTL() {
          return !!this.scriptObject.KRTL;
        }
        get modifierBitmask() {
          return this.scriptObject.KMBM || U.modifierBitmasks.NON_CHIRAL;
        }
        get isChiral() {
          return !!(this.modifierBitmask & U.modifierBitmasks.IS_CHIRAL);
        }
        get desktopFont() {
          return this.scriptObject.KV ? this.scriptObject.KV.F : null;
        }
        get cacheTag() {
          let t = this.scriptObject._kmw;
          return t || ((t = new qi()), (this.scriptObject._kmw = t)), t;
        }
        get explodedStores() {
          return this.cacheTag.stores;
        }
        get emulatesAltGr() {
          let t = U.modifierCodes;
          if (!this.isChiral || this._legacyLayoutSpec == null) return !1;
          let e = this._legacyLayoutSpec.KLS;
          if (!e) return !1;
          var n = t.LCTRL | t.LALT,
            i = e[R.getLayerId(n)],
            s = e[R.getLayerId(t.SHIFT | n)];
          if (
            (i != null && i != e[R.getLayerId(t.RALT)]) ||
            (s != null && s != e[R.getLayerId(t.RALT | t.SHIFT)])
          )
            return !1;
          var c = this.modifierBitmask;
          return (c & n) != n || (i == null && s == null), !0;
        }
        get usesSupplementaryPlaneChars() {
          let t = this.scriptObject;
          return t && ((t.KS && t.KS == 1) || t.KN == "Hieroglyphic");
        }
        get version() {
          return this.scriptObject.KBVER || "";
        }
        usesDesktopLayoutOnDevice(t) {
          return this.scriptObject.KVKL
            ? t.formFactor == p.FormFactor.Desktop
            : !0;
        }
        notify(t, e, n) {
          typeof this.scriptObject.KNS == "function" &&
            this.scriptObject.KNS(t, e, n);
        }
        findOrConstructLayout(t) {
          if (this._layouts) {
            if (this._layouts[t] !== void 0) return this._layouts[t];
            if (t == p.FormFactor.Phone && this._layouts[p.FormFactor.Tablet])
              return (this._layouts[p.FormFactor.Phone] =
                this._layouts[p.FormFactor.Tablet]);
            if (t == p.FormFactor.Tablet && this._layouts[p.FormFactor.Phone])
              return (this._layouts[p.FormFactor.Tablet] =
                this._layouts[p.FormFactor.Phone]);
          }
          let e = null;
          if (this._legacyLayoutSpec != null && this._legacyLayoutSpec.KLS)
            e = this._legacyLayoutSpec;
          else if (
            this._legacyLayoutSpec != null &&
            this._legacyLayoutSpec.BK != null
          ) {
            for (var n = this._legacyLayoutSpec.BK, i = 0; i < n.length; i++)
              if (n[i].length > 0) {
                e = this._legacyLayoutSpec;
                break;
              }
          }
          if (
            (!e &&
              (this.helpText == "" || t != p.FormFactor.Desktop) &&
              (e = { F: "Tahoma", BK: R.dfltText }),
            this._layouts || (this._layouts = {}),
            e)
          ) {
            let s = (this._layouts[t] = R.buildDefaultLayout(e, this, t));
            return (s.isDefault = !0), s;
          } else return (this._layouts[t] = null), null;
        }
        layout(t) {
          let e = this.findOrConstructLayout(t);
          return e
            ? (this.layoutStates[t] == $i.NOT_LOADED &&
                ((e = st.polyfill(e, this, t)), (this.layoutStates[t] = 1)),
              e)
            : null;
        }
        refreshLayouts() {
          let t = [
              p.FormFactor.Desktop,
              p.FormFactor.Phone,
              p.FormFactor.Tablet,
            ],
            e = this;
          t.forEach(function (n) {
            e.layoutStates[n] = $i.NOT_LOADED;
          });
        }
        markLayoutCalibrated(t) {
          this.layoutStates[t] != $i.NOT_LOADED && (this.layoutStates[t] = 2);
        }
        getLayoutState(t) {
          return this.layoutStates[t];
        }
        constructNullKeyEvent(t, e) {
          e = e || { K_CAPS: !1, K_NUMLOCK: !1, K_SCROLL: !1 };
          let n = M.constructNullKeyEvent(t);
          return this.setSyntheticEventDefaults(n, e), n;
        }
        constructKeyEvent(t, e, n) {
          let i = t.baseKeyEvent;
          (i.device = e),
            this.isMnemonic &&
              i.setMnemonicCode(t.layer.indexOf("shift") != -1, n.K_CAPS),
            this.setSyntheticEventDefaults(i, n);
          let c = {
            K_CAPS: U.stateBitmasks.CAPS,
            K_NUMLOCK: U.stateBitmasks.NUM_LOCK,
            K_SCROLL: U.stateBitmasks.SCROLL_LOCK,
          }[i.kName];
          return c && ((i.Lstates ^= c), (i.LmodifierChange = !0)), i;
        }
        setSyntheticEventDefaults(t, e) {
          t.device.touchable ||
            ((t.Lstates = 0),
            (t.Lstates |= e.K_CAPS
              ? U.modifierCodes.CAPS
              : U.modifierCodes.NO_CAPS),
            (t.Lstates |= e.K_NUMLOCK
              ? U.modifierCodes.NUM_LOCK
              : U.modifierCodes.NO_NUM_LOCK),
            (t.Lstates |= e.K_SCROLL
              ? U.modifierCodes.SCROLL_LOCK
              : U.modifierCodes.NO_SCROLL_LOCK)),
            t.kName && t.kName.substr(0, 2) == "U_" && (t.LisVirtualKey = !1),
            typeof t.Lcode == "undefined" &&
              ((t.Lcode = this.getVKDictionaryCode(t.kName)),
              t.Lcode || (t.Lcode = 1)),
            (t.Lmodifiers & U.modifierBitmasks.ALT_GR_SIM) ==
              U.modifierBitmasks.ALT_GR_SIM &&
              this.emulatesAltGr &&
              ((t.Lmodifiers &= ~U.modifierBitmasks.ALT_GR_SIM),
              (t.Lmodifiers |= U.modifierCodes.RALT));
        }
        getVKDictionaryCode(t) {
          if (!this.scriptObject.VKDictionary) {
            let i = [];
            if (typeof this.scriptObject.KVKD == "string") {
              let s = this.scriptObject.KVKD.split(" ");
              for (var e = 0; e < s.length; e++)
                i[s[e].toUpperCase()] = e + 256;
            }
            this.scriptObject.VKDictionary = i;
          }
          let n = this.scriptObject.VKDictionary[t.toUpperCase()];
          return n || 0;
        }
      },
      T = es;
    a(T, "Keyboard"),
      (T.DEFAULT_SCRIPT_OBJECT = {
        gs: function (t, e) {
          return !1;
        },
        KI: "",
        KN: "",
        KV: R.DEFAULT_RAW_SPEC,
        KM: 0,
      });
    var ii = { osk: U },
      lt = class {
        constructor(t, e) {
          this.loadedKeyboard = null;
          (this._jsGlobal = t), (this.keymanGlobal = e), this.install();
        }
        KR(t) {
          if (this.loadedKeyboard)
            throw new Error(
              "Unexpected state:  the most-recently loaded keyboard field was not properly reset."
            );
          this.loadedKeyboard = new T(t);
        }
        KLOAD(t, e, n) {
          return n;
        }
        install() {
          (this._jsGlobal.KeymanWeb = this),
            (this._jsGlobal.keyman = this.keymanGlobal);
        }
        uninstall() {
          this._jsGlobal.KeymanWeb == this && delete this._jsGlobal.KeymanWeb,
            this._jsGlobal.keyman == this.keymanGlobal &&
              delete this._jsGlobal.keyman;
        }
      };
    a(lt, "KeyboardHarness");
    var rt = class extends Error {
      constructor(e, n) {
        super(e);
        this.cause = n;
      }
    };
    a(rt, "KeyboardScriptError");
    var In = class extends Error {
      constructor(e, n) {
        super(e);
        this.cause = n;
      }
    };
    a(In, "KeyboardMissingError");
    var ts = class {
      constructor(t) {
        this.uri = t;
      }
      missingError(t) {
        let e = `Cannot find the keyboard at ${this.uri}.`;
        return new In(e, t);
      }
      scriptError(t) {
        let e = `Error registering the keyboard script at ${this.uri}; it may contain an error.`;
        return new rt(e, t);
      }
    };
    a(ts, "UriBasedErrorBuilder");
    var ns = class {
      constructor(t) {
        this.stub = t;
      }
      missingError(t) {
        let e = this.stub,
          n = `Cannot find the ${e.name} keyboard for ${e.langName} at ${e.filename}.`;
        return new In(n, t);
      }
      scriptError(t) {
        let e = this.stub,
          n = `Error registering the ${e.name} keyboard for ${e.langName}; keyboard script at ${e.filename} may contain an error.`;
        return new rt(n, t);
      }
    };
    a(ns, "StubBasedErrorBuilder");
    var St = class {
      get harness() {
        return this._harness;
      }
      constructor(t) {
        this._harness = t;
      }
      loadKeyboardFromPath(t) {
        return this.harness.install(), this.loadKeyboardInternal(t, new ts(t));
      }
      loadKeyboardFromStub(t) {
        return (
          this.harness.install(),
          this.loadKeyboardInternal(t.filename, new ns(t), t.id)
        );
      }
    };
    a(St, "KeyboardLoaderBase");
    var Jc = ((i) => (
        (i.KEYBOARD = "keyboard"),
        (i.LANGUAGE = "language"),
        (i.LANGUAGE_KEYBOARD = "languageKeyboard"),
        (i.BLANK = "blank"),
        i
      ))(Jc || {}),
      Je = Jc;
    function Ts(o, t) {
      if (o)
        return { family: o.family, path: t, files: o.filename || o.source };
    }
    a(Ts, "internalizeFont");
    var Un = class {
        static get spacebarTextMode() {
          return typeof this.spacebarTextModeSrc == "string"
            ? this.spacebarTextModeSrc
            : this.spacebarTextModeSrc();
        }
        static set spacebarTextMode(t) {
          this.spacebarTextModeSrc = t;
        }
        constructor(t, e) {
          if (typeof t != "string")
            if (t.KI || t.KL || t.KLC || t.KFont || t.KOskFont) {
              let n = t;
              (this.KI = n.KI),
                (this.KN = n.KN),
                (this.KL = n.KL),
                (this.KLC = n.KLC),
                (this.KFont = n.KFont),
                (this.KOskFont = n.KOskFont),
                (this._displayName =
                  n instanceof Un ? n._displayName : n.displayName);
            } else {
              let n = t;
              n.languages || (n.languages = n.language),
                (this.KI = n.id),
                (this.KN = n.name),
                (this.KL = n.languages.name),
                (this.KLC = n.languages.id),
                (this.KFont = Ts(n.languages.font, e)),
                (this.KOskFont = Ts(n.languages.oskFont, e));
            }
          else (this.KI = t), (this.KLC = e);
        }
        static fromMultilanguageAPIStub(t) {
          let e = [];
          t.languages || (t.languages = t.language);
          for (let n of t.languages) {
            let i = { id: t.id, name: t.name, languages: n };
            e.push(new Un(i));
          }
          return e;
        }
        get id() {
          return this.KI;
        }
        get name() {
          return this.KN;
        }
        get langId() {
          return this.KLC;
        }
        get langName() {
          return this.KL;
        }
        get displayName() {
          if (this._displayName) return this._displayName;
          let t = this.KN,
            e = this.KL;
          switch (Un.spacebarTextMode) {
            case Je.KEYBOARD:
              return t;
            case Je.LANGUAGE:
              return e;
            case Je.LANGUAGE_KEYBOARD:
              return t == e ? e : e + " - " + t;
            case Je.BLANK:
              return "";
            default:
              return t;
          }
        }
        set displayName(t) {
          this._displayName = t;
        }
        get textFont() {
          return this.KFont;
        }
        get oskFont() {
          return this.KOskFont;
        }
        validateForOSK() {
          return this.KLC
            ? this.displayName === void 0 ||
              (Un.spacebarTextMode != Je.BLANK && !this.displayName)
              ? new Error(
                  "A display name is missing for this keyboard and cannot be generated under current settings."
                )
              : null
            : this.KI || this.KN
            ? new Error(
                `No language code was specified for use with the ${
                  this.KI || this.KN
                } keyboard`
              )
            : new Error(
                "No language code was specified for use with the corresponding keyboard"
              );
        }
        validateForCustomKeyboard() {
          return !this.KI || !this.KN || !this.KL || !this.KLC
            ? new Error(
                "To use a custom keyboard, you must specify keyboard id, keyboard name, language and language code."
              )
            : null;
        }
      },
      Re = Un;
    a(Re, "KeyboardProperties"), (Re.spacebarTextModeSrc = Je.KEYBOARD);
    var is = class {
        constructor(t, e) {
          (this.p = t), (this.d = e), (this.o = is.ordinalSeed++);
        }
        match(t, e) {
          var n = this.p == t && this.d == e;
          return n;
        }
        set() {
          this.matched = 1;
        }
        reset() {
          this.matched = 0;
        }
        before(t) {
          return this.o < t.o;
        }
        clone() {
          let t = new is(this.p, this.d);
          return (t.o = this.o), t;
        }
        equal(t) {
          return this.d == t.d && this.p == t.d && this.o == t.o;
        }
      },
      ot = is;
    a(ot, "Deadkey"),
      (ot.ordinalSeed = 0),
      (ot.sortFunc = a(function (t, e) {
        return t.p != e.p ? e.p - t.p : e.o - t.o;
      }, "sortFunc"));
    var Jt = class {
      constructor() {
        this.dks = [];
      }
      toSortedArray() {
        return (this.dks = this.dks.sort(ot.sortFunc)), [].concat(this.dks);
      }
      clone() {
        let t = new Jt(),
          e = this.toSortedArray();
        return (
          (t.dks = []),
          e.forEach(function (n) {
            t.dks.push(n.clone());
          }),
          t
        );
      }
      isMatch(t, e, n) {
        if (this.dks.length == 0) return !1;
        var i = t;
        e = i - e;
        for (var s = 0; s < this.dks.length; s++)
          if (this.dks[s].match(e, n) && !this.dks[s].matched)
            return this.dks[s].set(), !0;
        return this.resetMatched(), !1;
      }
      add(t) {
        this.dks = this.dks.concat(t);
      }
      remove(t) {
        var e = this.dks.indexOf(t);
        this.dks.splice(e, 1);
      }
      clear() {
        this.dks = [];
      }
      resetMatched() {
        for (let t of this.dks) t.reset();
      }
      deleteMatched() {
        for (var t = 0; t < this.dks.length; t++)
          this.dks[t].matched && this.dks.splice(t--, 1);
      }
      adjustPositions(t, e) {
        if (e != 0) for (let n of this.dks) n.p > t && (n.p += e);
      }
      equal(t) {
        if (this.dks.length != t.dks.length) return !1;
        let e = t.dks,
          n = [];
        for (let i of this.dks) if (!e.find((c) => i.equal(c))) return !1;
        return n.length == e.length;
      }
      count() {
        return this.dks.length;
      }
    };
    a(Jt, "DeadkeyTracker");
    var si = class {
      constructor(t) {
        this.id = t;
      }
      set(t) {
        throw new Error(
          "System store with ID " + this.id + " may not be directly set."
        );
      }
    };
    a(si, "SystemStore");
    var Rt = class extends si {
      constructor(e, n) {
        super(e);
        this.handler = null;
        this._value = n;
      }
      get value() {
        return this._value;
      }
      matches(e) {
        return this._value == e;
      }
      set(e) {
        (this.handler && this.handler(this, e)) || (this._value = e);
      }
    };
    a(Rt, "MutableSystemStore");
    var ci = class extends si {
      constructor(e) {
        super(31);
        this.kbdInterface = e;
      }
      matches(e) {
        var n,
          i,
          s = e.split(" ");
        let c = this.kbdInterface.activeDevice;
        for (n = 0; n < s.length; n++)
          switch (((i = s[n].toLowerCase()), i)) {
            case "touch":
            case "hardware":
              if (c.touchable != (i == "touch")) return !1;
              break;
            case "macos":
            case "mac":
              i = "macosx";
            case "macosx":
            case "windows":
            case "android":
            case "ios":
            case "linux":
              if (c.OS != i) return !1;
              break;
            case "tablet":
            case "phone":
            case "desktop":
              if (c.formFactor != i) return !1;
              break;
            case "web":
              if (c.browser == "native") return !1;
              break;
            case "native":
            case "chrome":
            case "firefox":
            case "safari":
            case "edge":
            case "opera":
              if (c.browser != i) return !1;
              break;
            default:
              return !1;
          }
        return !0;
      }
    };
    a(ci, "PlatformSystemStore");
    function Ms(o, t, e) {
      let n = Math.min(o.length, t.length),
        i,
        s,
        c,
        l,
        r;
      for (
        e
          ? ((i = s = o.length - 1),
            (c = s - n),
            (l = -1),
            (r = t.length - o.length))
          : ((i = s = 0), (c = n), (l = 1), (r = 0));
        s != c && o.charAt(s) == t.charAt(s + r);
        s += l
      );
      if (s != i && s != c) {
        let B = o.charCodeAt(s - l),
          d = o.charCodeAt(s),
          g = t.charCodeAt(s + r),
          Q = e ? ji : Pi,
          F = e ? Pi : ji;
        if (Q(B) && (F(d) || F(g))) return s - l;
      }
      return s;
    }
    a(Ms, "findCommonSubstringEndIndex");
    ti();
    function At(o) {
      var t;
      return o
        ? o.insert === "" &&
            o.deleteLeft === 0 &&
            ((t = o.deleteRight) != null ? t : 0) === 0
        : !0;
    }
    a(At, "isEmptyTransform");
    var Ys = class {
        constructor(t, e, n, i) {
          (this.insert = t),
            (this.deleteLeft = e),
            (this.deleteRight = n),
            (this.erasedSelection = i);
        }
      },
      li = Ys;
    a(li, "TextTransform"), (li.nil = new Ys("", 0, 0, !1));
    var ws = class {
        constructor(t, e, n, i) {
          let s = (this.token = ws.tokenSeed++);
          (this.keystroke = t),
            (this.transform = e),
            (this.alternates = i),
            (this.preInput = n),
            (this.transform.id = this.token),
            i &&
              i.forEach(function (c) {
                c.sample.id = s;
              });
        }
      },
      ri = ws;
    a(ri, "Transcription"), (ri.tokenSeed = 0);
    var at = class {
      constructor() {
        this._dks = new Jt();
      }
      get isSynthetic() {
        return !0;
      }
      resetContext() {
        this.deadkeys().clear();
      }
      deadkeys() {
        return this._dks;
      }
      hasDeadkeyMatch(t, e) {
        return this.deadkeys().isMatch(this.getDeadkeyCaret(), t, e);
      }
      insertDeadkeyBeforeCaret(t) {
        var e = new ot(this.getDeadkeyCaret(), t);
        this.deadkeys().add(e);
      }
      adjustDeadkeys(t) {
        this.deadkeys().adjustPositions(this.getDeadkeyCaret(), t);
      }
      setDeadkeys(t) {
        this._dks = t.clone();
      }
      buildTransformFrom(t) {
        let e = this.getTextBeforeCaret(),
          n = t.getTextBeforeCaret(),
          i = Ms(n, e, !1),
          s = n.substring(i)._kmwLength(),
          c = e.substring(i),
          l = this.getTextAfterCaret(),
          r = t.getTextAfterCaret(),
          B = Ms(r, l, !0),
          d = r.substring(0, B + 1)._kmwLength();
        return new li(c, s, d, t.getSelectedText() && !this.getSelectedText());
      }
      buildTranscriptionFrom(t, e, n, i) {
        let s = this.buildTransformFrom(t);
        return new ri(e, s, E.from(t, n), i);
      }
      restoreTo(t) {
        this.clearSelection(),
          this.setTextBeforeCaret(t.getTextBeforeCaret()),
          this.setTextAfterCaret(t.getTextAfterCaret()),
          (this._dks = t._dks.clone());
      }
      apply(t) {
        this.clearSelection(),
          t.deleteRight &&
            this.setTextAfterCaret(
              this.getTextAfterCaret()._kmwSubstr(t.deleteRight)
            ),
          t.deleteLeft && this.deleteCharsBeforeCaret(t.deleteLeft),
          t.insert && this.insertTextBeforeCaret(t.insert),
          this._dks.clear();
      }
      setTextBeforeCaret(t) {
        this.deleteCharsBeforeCaret(this.getTextBeforeCaret()._kmwLength()),
          this.insertTextBeforeCaret(t);
      }
      saveProperties() {}
      restoreProperties() {}
    };
    a(at, "OutputTarget");
    var E = class extends at {
      constructor(e, n, i) {
        super();
        this.selForward = !0;
        this.text = e || "";
        var s = this.text._kmwLength();
        (this.selStart = typeof n == "number" ? n : s),
          (this.selEnd = typeof i == "number" ? i : this.selStart),
          (this.selForward = this.selEnd >= this.selStart);
      }
      static from(e, n) {
        let i;
        if (e instanceof E) {
          let s = e;
          i = new E(s.text, s.selStart, s.selEnd);
        } else {
          let s = e.getText(),
            c = s._kmwLength(),
            l = c,
            r = 0;
          if (e.hasSelection()) {
            let B = e.getTextBeforeCaret(),
              d = e.getTextAfterCaret();
            (l = B._kmwLength()), (r = c - d._kmwLength());
          }
          i = new E(s, l, r);
        }
        return i.setDeadkeys(e.deadkeys()), i;
      }
      clearSelection() {
        (this.text = this.getTextBeforeCaret() + this.getTextAfterCaret()),
          (this.selEnd = this.selStart),
          (this.selForward = !0);
      }
      invalidateSelection() {}
      isSelectionEmpty() {
        return this.selStart == this.selEnd;
      }
      hasSelection() {
        return !0;
      }
      getDeadkeyCaret() {
        return this.selStart;
      }
      setSelection(e, n) {
        if (
          ((this.selStart = e),
          (this.selEnd = typeof n == "number" ? n : e),
          (this.selForward = n >= e),
          !this.selForward)
        ) {
          let i = this.selStart;
          (this.selStart = this.selEnd), (this.selEnd = i);
        }
      }
      getTextBeforeCaret() {
        return this.text.kmwSubstr(0, this.selStart);
      }
      getSelectedText() {
        return this.text.kmwSubstr(this.selStart, this.selEnd - this.selStart);
      }
      getTextAfterCaret() {
        return this.text.kmwSubstr(this.selEnd);
      }
      getText() {
        return this.text;
      }
      deleteCharsBeforeCaret(e) {
        e >= 0 &&
          (e > this.selStart && (e = this.selStart),
          this.adjustDeadkeys(-e),
          (this.text =
            this.text.kmwSubstr(0, this.selStart - e) +
            this.text.kmwSubstr(this.selStart)),
          (this.selStart -= e),
          (this.selEnd -= e));
      }
      insertTextBeforeCaret(e) {
        this.adjustDeadkeys(e._kmwLength()),
          (this.text =
            this.getTextBeforeCaret() + e + this.text.kmwSubstr(this.selStart)),
          (this.selStart += e.kmwLength()),
          (this.selEnd += e.kmwLength());
      }
      handleNewlineAtCaret() {
        this.insertTextBeforeCaret(`
`);
      }
      setTextAfterCaret(e) {
        this.text = this.getTextBeforeCaret() + e;
      }
      isEqual(e) {
        return (
          this.text == e.text &&
          this.selStart == e.selStart &&
          this.selEnd == e.selEnd &&
          this.deadkeys().equal(e.deadkeys())
        );
      }
      doInputEvent() {}
    };
    a(E, "Mock");
    var se = class {
      constructor() {
        this.transcription = null;
        this.setStore = {};
        this.saveStore = {};
        this.variableStores = {};
        this.triggersDefaultCommand = !1;
      }
      finalize(t, e, n) {
        if (!this.transcription)
          throw "Cannot finalize a RuleBehavior with no transcription.";
        t.beepHandler && this.beep && t.beepHandler(e);
        for (let i in this.setStore) {
          let s = t.keyboardInterface.systemStores[i];
          if (s)
            try {
              s.set(this.setStore[i]);
            } catch (c) {
              t.errorLogger &&
                t.errorLogger(
                  "Rule attempted to perform illegal operation - 'platform' may not be changed."
                );
            }
          else
            t.warningLogger &&
              t.warningLogger("Unknown store affected by keyboard rule: " + i);
        }
        if (
          (t.keyboardInterface.applyVariableStores(this.variableStores),
          t.keyboardInterface.variableStoreSerializer)
        )
          for (let i in this.saveStore)
            t.keyboardInterface.variableStoreSerializer.saveStore(
              t.activeKeyboard.id,
              i,
              this.saveStore[i]
            );
        if (this.triggersDefaultCommand) {
          let i = this.transcription.keystroke;
          t.defaultRules.applyCommand(i, e);
        }
        t.warningLogger && this.warningLog
          ? t.warningLogger(this.warningLog)
          : t.errorLogger && this.errorLog && t.errorLogger(this.errorLog);
      }
      mergeInDefaults(t) {
        let e = this.transcription.keystroke,
          n = t.transcription.keystroke;
        if (e.Lcode != n.Lcode || e.Lmodifiers != n.Lmodifiers)
          throw "RuleBehavior default-merge not supported unless keystrokes are identical!";
        this.triggersDefaultCommand =
          this.triggersDefaultCommand || t.triggersDefaultCommand;
        let i = E.from(this.transcription.preInput, !1);
        i.apply(this.transcription.transform),
          i.apply(t.transcription.transform),
          (this.transcription = i.buildTranscriptionFrom(
            this.transcription.preInput,
            e,
            !1,
            this.transcription.alternates
          ));
      }
    };
    a(se, "RuleBehavior");
    var ss = class {};
    a(ss, "KeyInformation");
    var cs = class {
      reset() {
        this._cache = [];
      }
      get(t, e) {
        return typeof this._cache[t] == "undefined" ||
          typeof this._cache[t][e] == "undefined"
          ? null
          : this._cache[t][e];
      }
      set(t, e, n) {
        typeof this._cache[t] == "undefined" && (this._cache[t] = []),
          (this._cache[t][e] = n);
      }
    };
    a(cs, "CachedContext");
    var hn = class {
      reset() {
        this._cache = [];
      }
      get(t, e) {
        return typeof this._cache[t] == "undefined" ||
          typeof this._cache[t][e] == "undefined"
          ? null
          : this._cache[t][e];
      }
      set(t, e, n) {
        typeof this._cache[t] == "undefined" && (this._cache[t] = []),
          (this._cache[t][e] = n);
      }
      clone() {
        let t = new hn();
        return (t._cache = this._cache), t;
      }
    };
    a(hn, "CachedContextEx");
    var Ds = class extends lt {
        constructor(e, n, i = null) {
          super(e, n);
          this.cachedContext = new cs();
          this.cachedContextEx = new hn();
          this._AnyIndices = [];
          (this.systemStores = {}),
            (this.systemStores[31] = new ci(this)),
            (this.systemStores[33] = new Rt(33, "default")),
            (this.systemStores[42] = new Rt(42, "")),
            (this.systemStores[43] = new Rt(43, "")),
            (this.variableStoreSerializer = i);
        }
        get Codes() {
          return U;
        }
        saveFocus() {}
        registerKeyboard(e) {
          let n = new T(e);
          this.loadedKeyboard = n;
        }
        context(e, n, i) {
          var s = this.cachedContext.get(e, n);
          if (s !== null) return s;
          var c = this.KC_(e, n, i);
          return this.cachedContext.set(e, n, c), c;
        }
        KC_(e, n, i) {
          var s = "";
          return (
            (s = i.isSelectionEmpty() ? i.getTextBeforeCaret() : ""),
            s._kmwLength() < e &&
              (s = Array(e - s._kmwLength() + 1).join("\uFFFE") + s),
            s._kmwSubstr(-e)._kmwSubstr(0, n)
          );
        }
        nul(e, n) {
          var i = this.context(e + 1, 1, n);
          return i === "\uFFFE";
        }
        contextMatch(e, n, i, s) {
          var c = this.context(e, s, n);
          return c === i ? !0 : (n.deadkeys().resetMatched(), !1);
        }
        _BuildExtendedContext(e, n, i) {
          var s = this.cachedContextEx.get(e, n);
          if (s !== null) return s;
          if (((s = this.cachedContextEx.get(e, e)), s === null)) {
            let g = i.deadkeys().toSortedArray();
            var c = 0;
            for (
              s = { valContext: [], deadContext: [] };
              s.valContext.length < e;

            ) {
              var l = i.getDeadkeyCaret(),
                r = l - c;
              if (g.length > 0 && g[0].p > r) {
                g.splice(0, 1);
                continue;
              } else if (g.length > 0 && g[0].p == r)
                (s.deadContext[e - s.valContext.length - 1] = g[0]),
                  (s.valContext = [g[0].d].concat(s.valContext)),
                  g.splice(0, 1);
              else {
                var B = this.context(++c, 1, i);
                s.valContext = [B].concat(s.valContext);
              }
            }
            this.cachedContextEx.set(e, e, s);
          }
          var d = s;
          return (
            (d.valContext = d.valContext.slice(0, n)),
            this.cachedContextEx.set(e, n, d),
            d
          );
        }
        fullContextMatch(e, n, i) {
          var s = this._BuildExtendedContext(e, i.length, n);
          this.ruleContextEx = this.cachedContextEx.clone();
          var c = s.valContext,
            l = s.deadContext,
            r = !1;
          let B = "\uFFFE";
          for (
            var d = a(function (b) {
                throw new Error(
                  "Unexpected object in fullContextMatch specification: " + b
                );
              }, "assertNever"),
              g = 0;
            g < i.length;
            g++
          )
            if (typeof i[g] == "string") {
              var Q = i[g];
              if (Q !== c[g]) {
                r = !0;
                break;
              }
            } else {
              var F = i[g];
              switch (F.t) {
                case "d":
                  F.d !== c[g] ? (r = !0) : l[g].set();
                  break;
                case "a":
                  var y;
                  typeof c[g] == "string"
                    ? (y = c[g])
                    : (y = { t: "d", d: c[g] });
                  var u = this.any(g, y, F.a);
                  F.n
                    ? F.n && (u || c[g] === B) && (r = !0)
                    : u
                    ? l[g] !== void 0 && l[g].set()
                    : (r = !0);
                  break;
                case "i":
                  var I = this._Index(F.i, F.o);
                  I !== void 0 && (typeof I == "string" ? I : I.d) !== c[g]
                    ? (r = !0)
                    : l[g] !== void 0 && l[g].set();
                  break;
                case "c":
                  c[F.c - 1] !== c[g]
                    ? (r = !0)
                    : l[g] !== void 0 && l[g].set();
                  break;
                case "n":
                  c[g] != B && (r = !0);
                  break;
                default:
                  d(F);
              }
            }
          return (
            r && (n.deadkeys().resetMatched(), (this._AnyIndices = [])), !r
          );
        }
        isKeypress(e) {
          return this.activeKeyboard.isMnemonic
            ? !e.LisVirtualKey
            : !!w._USKeyCodeToCharCode(e);
        }
        static matchModifiersToRuleChirality(e, n) {
          let i = U.modifierCodes.LALT | U.modifierCodes.RALT,
            s = U.modifierCodes.LCTRL | U.modifierCodes.RCTRL,
            c = e;
          if (!(n & i)) {
            let l = c & i;
            l && (c ^= l | U.modifierCodes.ALT);
          }
          if (!(n & s)) {
            let l = c & s;
            l && (c ^= l | U.modifierCodes.CTRL);
          }
          return c;
        }
        keyMatch(e, n, i) {
          var s = !1,
            c = e.Lcode == 173 ? 189 : e.Lcode;
          let l = this.activeKeyboard.modifierBitmask;
          var r = l & U.modifierBitmasks.ALL,
            B = l & U.stateBitmasks.ALL;
          let d = Ds.matchModifiersToRuleChirality(e.Lmodifiers, n);
          return (
            e.vkCode > 255 && (c = e.vkCode),
            e.LisVirtualKey || c > 255
              ? ((n & 16384) == 16384 || c > 255) &&
                ((s = i == c && (n & r) == d),
                (s = s && this.stateMatch(e, n & B)))
              : (n & 16384) == 0 && (s = c == i),
            s || this.activeTargetOutput.deadkeys().resetMatched(),
            s
          );
        }
        stateMatch(e, n) {
          return (n & e.Lstates) == n;
        }
        keyInformation(e) {
          var n = new ss();
          return (
            (n.vk = e.LisVirtualKey),
            (n.code = e.Lcode),
            (n.modifiers = e.Lmodifiers),
            n
          );
        }
        deadkeyMatch(e, n, i) {
          return n.hasDeadkeyMatch(e, i);
        }
        beep(e) {
          this.resetContextCache(), (this.ruleBehavior.beep = !0);
        }
        _ExplodeStore(e) {
          if (typeof e == "string") {
            let s = this.activeKeyboard.explodedStores;
            if (s[e]) return s[e];
            for (var n = [], i = 0; i < e._kmwLength(); i++)
              n.push(e._kmwCharAt(i));
            return (s[e] = n), n;
          } else return e;
        }
        any(e, n, i) {
          if (n == "") return !1;
          i = this._ExplodeStore(i);
          for (var s = -1, c = 0; c < i.length; c++)
            if (typeof i[c] == "string") {
              if (i[c] == n) {
                s = c;
                break;
              }
            } else if (i[c].d === n.d) {
              s = c;
              break;
            }
          return (this._AnyIndices[e] = s), s >= 0;
        }
        _Index(e, n) {
          return (
            (e = this._ExplodeStore(e)),
            this._AnyIndices[n - 1] < e.length
              ? e[this._AnyIndices[n - 1]]
              : (console.warn(
                  "Unmatched contextual index() statement detected in rule with index " +
                    n +
                    "!"
                ),
                "")
          );
        }
        indexOutput(e, n, i, s) {
          this.resetContextCache();
          var c = a(function (B) {
              throw new Error(
                "Unexpected object in fullContextMatch specification: " + B
              );
            }, "assertNever"),
            l = this._Index(n, i);
          if (l !== "")
            if (typeof l == "string") this.output(e, s, l);
            else if (l.t) {
              var r = l;
              switch (r.t) {
                case "b":
                  this.beep(s);
                  break;
                case "d":
                  this.deadkeyOutput(e, s, l.d);
                  break;
                default:
                  c(r);
              }
            } else this.deadkeyOutput(e, s, l.d);
        }
        deleteContext(e, n) {
          var i;
          if (e > 0) {
            i = this._BuildExtendedContext(e, e, n);
            let l = 0;
            for (var s = 0; s < i.valContext.length; s++) {
              var c = i.deadContext[s];
              c
                ? (n.deadkeys().remove(c), e--)
                : i.valContext[s] == "\uFFFE" && l++;
            }
            let r = i.valContext.length - l;
            e > r && (e = r);
          }
          n.deadkeys().resetMatched(), this.output(e, n, "");
        }
        output(e, n, i) {
          this.resetContextCache(),
            n.saveProperties(),
            n.clearSelection(),
            n.deadkeys().deleteMatched(),
            e >= 0 && n.deleteCharsBeforeCaret(e),
            n.insertTextBeforeCaret(i),
            n.restoreProperties();
        }
        contextExOutput(e, n, i, s) {
          this.resetContextCache(), e >= 0 && this.output(e, n, "");
          let c = this.ruleContextEx.get(i, i),
            l = c.deadContext[s - 1],
            r = c.valContext[s - 1];
          if (l) n.insertDeadkeyBeforeCaret(l.d);
          else if (typeof r == "string") this.output(-1, n, r);
          else
            throw new Error(
              "contextExOutput: should never be a numeric valContext with no corresponding deadContext"
            );
        }
        deadkeyOutput(e, n, i) {
          this.resetContextCache(),
            e >= 0 && this.output(e, n, ""),
            n.insertDeadkeyBeforeCaret(i);
        }
        ifStore(e, n, i) {
          var s = !0;
          let c = this.systemStores[e];
          return c && (s = c.matches(n)), s;
        }
        setStore(e, n, i) {
          if (
            (this.resetContextCache(), e == 33 && this.activeDevice.touchable)
          )
            this.ruleBehavior.setStore[e] = n;
          else return !1;
        }
        loadStore(e, n, i) {
          return (
            this.resetContextCache(),
            (this.variableStoreSerializer &&
              this.variableStoreSerializer.loadStore(e, n)[n]) ||
              i
          );
        }
        saveStore(e, n) {
          this.resetContextCache();
          var i = this.activeKeyboard;
          if (!i || typeof i.id == "undefined" || i.id == "") return !1;
          let s = {};
          return (
            (s[e] = n),
            this.ruleBehavior
              ? (this.ruleBehavior.saveStore[e] = s)
              : this.variableStoreSerializer.saveStore(
                  this.activeKeyboard.id,
                  e,
                  s
                ),
            !0
          );
        }
        resetContextCache() {
          this.cachedContext.reset(), this.cachedContextEx.reset();
        }
        defaultBackspace(e) {
          e.isSelectionEmpty() ? this.output(1, e, "") : this.output(0, e, "");
        }
        processNewContextEvent(e, n) {
          if (!this.activeKeyboard)
            throw "No active keyboard for keystroke processing!";
          return this.process(
            this.activeKeyboard.processNewContextEvent.bind(
              this.activeKeyboard
            ),
            e,
            n,
            !0
          );
        }
        processPostKeystroke(e, n) {
          if (!this.activeKeyboard)
            throw "No active keyboard for keystroke processing!";
          return this.process(
            this.activeKeyboard.processPostKeystroke.bind(this.activeKeyboard),
            e,
            n,
            !0
          );
        }
        processKeystroke(e, n) {
          if (!this.activeKeyboard)
            throw "No active keyboard for keystroke processing!";
          return this.process(
            this.activeKeyboard.process.bind(this.activeKeyboard),
            e,
            n,
            !1
          );
        }
        process(e, n, i, s) {
          if (n)
            if (this.activeKeyboard) {
              if (!e) throw "No callee for keystroke processing!";
            } else throw "No active keyboard for keystroke processing!";
          else throw "No target specified for keyboard output!";
          n.invalidateSelection(),
            n.deadkeys().resetMatched(),
            this.resetContextCache();
          let c = E.from(n, !0),
            l = this.activeKeyboard.variableStores;
          (this.ruleBehavior = new se()),
            (this.activeDevice = i.device),
            (this.activeTargetOutput = n);
          var r = e(n, i);
          (this.activeTargetOutput = null),
            (this.ruleBehavior.transcription = n.buildTranscriptionFrom(
              c,
              i,
              s
            )),
            (this.ruleBehavior.variableStores =
              this.activeKeyboard.variableStores),
            (this.activeKeyboard.variableStores = l),
            (this.ruleBehavior.triggerKeyDefault = !r);
          let B = this.ruleBehavior;
          return (this.ruleBehavior = null), B;
        }
        applyVariableStores(e) {
          this.activeKeyboard.variableStores = e;
        }
        static __publishShorthandAPI() {
          let e = this.prototype;
          var n = a(function (i, s) {
            e[s] && (e[i] = e[s]);
          }, "exportKBCallback");
          n("KSF", "saveFocus"),
            n("KBR", "beepReset"),
            n("KT", "insertText"),
            n("KR", "registerKeyboard"),
            n("KRS", "registerStub"),
            n("KC", "context"),
            n("KN", "nul"),
            n("KCM", "contextMatch"),
            n("KFCM", "fullContextMatch"),
            n("KIK", "isKeypress"),
            n("KKM", "keyMatch"),
            n("KSM", "stateMatch"),
            n("KKI", "keyInformation"),
            n("KDM", "deadkeyMatch"),
            n("KB", "beep"),
            n("KA", "any"),
            n("KDC", "deleteContext"),
            n("KO", "output"),
            n("KDO", "deadkeyOutput"),
            n("KCXO", "contextExOutput"),
            n("KIO", "indexOutput"),
            n("KIFS", "ifStore"),
            n("KSETS", "setStore"),
            n("KLOAD", "loadStore"),
            n("KSAVE", "saveStore");
        }
      },
      Ae = Ds;
    a(Ae, "KeyboardInterface"), (Ae.GLOBAL_NAME = "KeymanWeb");
    (function () {
      Ae.__publishShorthandAPI();
    })();
    var Ac = v(A(), 1);
    var oi = class extends Ac.default {
        constructor(e, n) {
          super();
          this.stateKeys = { K_CAPS: !1, K_NUMLOCK: !1, K_SCROLL: !1 };
          this.modStateFlags = 0;
          n || (n = oi.DEFAULT_OPTIONS),
            (this.contextDevice = e),
            (this.baseLayout = n.baseLayout || oi.DEFAULT_OPTIONS.baseLayout),
            (this.keyboardInterface = n.keyboardInterface || new Ae(yn(), ii)),
            (this.defaultRules =
              n.defaultOutputRules || oi.DEFAULT_OPTIONS.defaultOutputRules);
        }
        get activeKeyboard() {
          return this.keyboardInterface.activeKeyboard;
        }
        set activeKeyboard(e) {
          (this.keyboardInterface.activeKeyboard = e), this.resetContext();
        }
        get layerStore() {
          return this.keyboardInterface.systemStores[33];
        }
        get newLayerStore() {
          return this.keyboardInterface.systemStores[42];
        }
        get oldLayerStore() {
          return this.keyboardInterface.systemStores[43];
        }
        get layerId() {
          return this.layerStore.value;
        }
        set layerId(e) {
          this.layerStore.set(e);
        }
        defaultRuleBehavior(e, n, i) {
          let s = E.from(n, i),
            c = new se(),
            l = !1;
          var r = "",
            B;
          if (e.isSynthetic || n.isSynthetic)
            if (((l = !0), this.defaultRules.isCommand(e)))
              c.triggersDefaultCommand = !0;
            else if ((B = this.defaultRules.forSpecialEmulation(e)) != null)
              switch (B) {
                case "\b":
                  this.keyboardInterface.defaultBackspace(n);
                  break;
                case `
`:
                  n.handleNewlineAtCaret();
                  break;
                default:
                  c.errorLog =
                    "Unexpected 'special emulation' character (\\u" +
                    B.kmwCharCodeAt(0).toString(16) +
                    ") went unhandled!";
              }
            else l = !1;
          let d = this.activeKeyboard && this.activeKeyboard.isMnemonic;
          if (!l)
            if ((r = this.defaultRules.forAny(e, d)) != null)
              if (((B = this.defaultRules.forSpecialEmulation(e)), B == "\b"))
                this.keyboardInterface.defaultBackspace(n);
              else {
                if (B || this.defaultRules.isCommand(e)) return null;
                this.keyboardInterface.output(0, n, r);
              }
            else return null;
          if (c.errorLog) return c;
          let g = n.buildTranscriptionFrom(s, e, i);
          return (c.transcription = g), c;
        }
        processNewContextEvent(e, n) {
          return this.activeKeyboard
            ? this.keyboardInterface.processNewContextEvent(
                n,
                this.activeKeyboard.constructNullKeyEvent(e, this.stateKeys)
              )
            : null;
        }
        processPostKeystroke(e, n) {
          return this.activeKeyboard
            ? this.keyboardInterface.processPostKeystroke(
                n,
                this.activeKeyboard.constructNullKeyEvent(e, this.stateKeys)
              )
            : null;
        }
        processKeystroke(e, n) {
          var i;
          let s =
            n.getTextBeforeCaret().kmwLength() == 0 && n.isSelectionEmpty();
          if (
            (this.activeKeyboard &&
              e.Lcode != 0 &&
              (i = this.keyboardInterface.processKeystroke(n, e)),
            s && e.Lcode == U.keyCodes.K_BKSP && i.triggerKeyDefault)
          )
            (i = this.defaultRuleBehavior(e, n, !1)),
              (i.triggerKeyDefault = !0),
              (i.transcription.transform.deleteLeft = 1);
          else if (!i || i.triggerKeyDefault) {
            (e.Lcode = e.vkCode || e.Lcode),
              (this.keyboardInterface.activeTargetOutput = n);
            let c = this.defaultRuleBehavior(e, n, !1);
            c &&
              (i ? i.mergeInDefaults(c) : (i = c), (i.triggerKeyDefault = !1)),
              (this.keyboardInterface.activeTargetOutput = null);
          }
          return i;
        }
        _UpdateVKShift(e) {
          let n = 0,
            i = ["CAPS", "NUM_LOCK", "SCROLL_LOCK"],
            s = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"];
          if (!this.activeKeyboard) return !0;
          if (e) {
            (n = e.Lmodifiers),
              this.activeKeyboard.isChiral &&
                this.activeKeyboard.emulatesAltGr &&
                (this.modStateFlags & U.modifierBitmasks.ALT_GR_SIM) ==
                  U.modifierBitmasks.ALT_GR_SIM &&
                ((n |= U.modifierBitmasks.ALT_GR_SIM),
                (n &= ~U.modifierCodes.RALT));
            let c = !1;
            for (let l = 0; l < i.length; l++)
              e.Lstates & U.stateBitmasks[i[l]] &&
                ((this.stateKeys[s[l]] = !!(e.Lstates & U.modifierCodes[i[l]])),
                (c = !0));
            c && this.emit("statekeychange", this.stateKeys);
          }
          return (
            this.updateStates(),
            this.activeKeyboard.isMnemonic &&
              this.stateKeys.K_CAPS &&
              (!e || !e.isModifier) &&
              (n ^= U.modifierCodes.SHIFT),
            (this.layerId = this.getLayerId(n)),
            !0
          );
        }
        updateStates() {
          var e = ["CAPS", "NUM_LOCK", "SCROLL_LOCK"],
            n = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"];
          for (let i = 0; i < n.length; i++) {
            let s = n[i],
              c = this.stateKeys[s],
              l = e[i],
              r = "NO_" + e[i];
            c
              ? ((this.modStateFlags |= U.modifierCodes[l]),
                (this.modStateFlags &= ~U.modifierCodes[r]))
              : ((this.modStateFlags &= ~U.modifierCodes[l]),
                (this.modStateFlags |= U.modifierCodes[r]));
          }
        }
        getLayerId(e) {
          return R.getLayerId(e);
        }
        selectLayer(e) {
          let n = e.kName;
          var i = e.kNextLayer,
            s = this.activeKeyboard && this.activeKeyboard.isChiral;
          if ((typeof i == "number" && (i = this.getLayerId(i * 16)), !i))
            switch (n) {
              case "K_LSHIFT":
              case "K_RSHIFT":
              case "K_SHIFT":
                i = "shift";
                break;
              case "K_LCONTROL":
              case "K_LCTRL":
                if (s) {
                  i = "leftctrl";
                  break;
                }
              case "K_RCONTROL":
              case "K_RCTRL":
                if (s) {
                  i = "rightctrl";
                  break;
                }
              case "K_CTRL":
                i = "ctrl";
                break;
              case "K_LMENU":
              case "K_LALT":
                if (s) {
                  i = "leftalt";
                  break;
                }
              case "K_RMENU":
              case "K_RALT":
                if (s) {
                  i = "rightalt";
                  break;
                }
              case "K_ALT":
                i = "alt";
                break;
              case "K_ALTGR":
                s ? (i = "leftctrl-rightalt") : (i = "ctrl-alt");
                break;
              case "K_CURRENCIES":
              case "K_NUMERALS":
              case "K_SHIFTED":
              case "K_UPPER":
              case "K_LOWER":
              case "K_SYMBOLS":
                i = "default";
                break;
            }
          return i ? (this.updateLayer(e, i), !0) : !1;
        }
        updateLayer(e, n) {
          let i = this.layerId;
          var s = i;
          if (n == i && e.device.formFactor != p.FormFactor.Desktop) return !1;
          var c = n,
            l;
          if (e.device.formFactor == p.FormFactor.Desktop) {
            var r = [
              "leftctrl",
              "rightctrl",
              "ctrl",
              "leftalt",
              "rightalt",
              "alt",
              "shift",
            ];
            for (l = 0; l < r.length; l++)
              (c = c.replace(r[l] + "-", "")), (c = c.replace(r[l], ""));
            if (
              i == "default" ||
              i == "numeric" ||
              i == "symbol" ||
              i == "currency" ||
              c != ""
            )
              s = n;
            else {
              var B = U.getModifierState(s);
              for (l = 0; l < r.length; l++)
                (s = s.replace(r[l] + "-", "")), (s = s.replace(r[l], ""));
              switch (n) {
                case "shift":
                  B ^= U.modifierCodes.SHIFT;
                  break;
                case "leftctrl":
                  B ^= U.modifierCodes.LCTRL;
                  break;
                case "rightctrl":
                  B ^= U.modifierCodes.RCTRL;
                  break;
                case "ctrl":
                  B ^= U.modifierCodes.CTRL;
                  break;
                case "leftalt":
                  B ^= U.modifierCodes.LALT;
                  break;
                case "rightalt":
                  B ^= U.modifierCodes.RALT;
                  break;
                case "alt":
                  B ^= U.modifierCodes.ALT;
                  break;
                default:
                  s = n;
              }
              s != "default" &&
                (s == ""
                  ? (s = this.getLayerId(B))
                  : (s = this.getLayerId(B) + "-" + s));
            }
            s == "" && (s = "default");
          } else s = n;
          this.activeKeyboard.layout(e.device.formFactor).getLayer(s)
            ? (this.layerId = s)
            : (this.layerId = "default");
          let g = U.getModifierState(this.layerId);
          this.modStateFlags = g | e.Lstates;
        }
        doModifierPress(e, n, i) {
          return this.activeKeyboard
            ? e.isModifier
              ? (this.activeKeyboard.notify(e.Lcode, n, i ? 1 : 0),
                e.device.touchable ? !0 : this._UpdateVKShift(e))
              : (e.LmodifierChange &&
                  (this.activeKeyboard.notify(0, n, 1),
                  e.device.touchable || this._UpdateVKShift(e)),
                !1)
            : !1;
        }
        performNewContextEvent(e) {
          let n = this.processNewContextEvent(this.contextDevice, e);
          return n && n.finalize(this, e, !0), n;
        }
        resetContext(e) {
          (this.layerId = "default"),
            e == null || e.resetContext(),
            this.keyboardInterface.resetContextCache(),
            e && this.performNewContextEvent(e),
            this.contextDevice.touchable || this._UpdateVKShift(null);
        }
        setNumericLayer(e) {
          this.activeKeyboard &&
            this.activeKeyboard.layout(e.formFactor).getLayer("numeric") &&
            (this.layerId = "numeric");
        }
      },
      Bt = oi;
    a(Bt, "KeyboardProcessor"),
      (Bt.DEFAULT_OPTIONS = { baseLayout: "us", defaultOutputRules: new Ze() });
    var Hc = a(
        (o) => (o.substring(o.length - 1) != "/" ? o + "/" : o),
        "addDelimiter"
      ),
      Ht = class {
        constructor(t, e) {
          (e = Hc(e)),
            (this.sourcePath = e),
            (this.protocol = e.replace(/(.{3,5}:)(.*)/, "$1")),
            this.updateFromOptions(t);
        }
        updateFromOptions(t) {
          let e = this.sourcePath.replace(/(https?:\/\/)([^\/]*)(.*)/, "$1$2/");
          (this._root = e),
            t.root != ""
              ? (this._root = this.fixPath(t.root))
              : (this._root = this.fixPath(e));
          let n = t.resources;
          n == "" && (n = this.sourcePath),
            (this._resources = this.fixPath(n)),
            (this._keyboards = this.fixPath(t.keyboards)),
            (this._fonts = this.fixPath(t.fonts));
        }
        fixPath(t) {
          return t.length == 0 ||
            ((t = Hc(t)),
            t.replace(/^(http)s?:.*/, "$1") == "http" ||
              t.replace(/^(file):.*/, "$1") == "file")
            ? t
            : t.substring(0, 2) == "//"
            ? this.protocol + t
            : t.substring(0, 1) == "/"
            ? this.root + t.substring(1)
            : this.sourcePath + t;
        }
        get fonts() {
          return this._fonts;
        }
        updateFontPath(t) {
          this._fonts = this.fixPath(t);
        }
        get root() {
          return this._root;
        }
        get resources() {
          return this._resources;
        }
        get keyboards() {
          return this._keyboards;
        }
      };
    a(Ht, "PathConfiguration");
    var zs = { root: "", resources: "", keyboards: "", fonts: "" };
    var dt = class {
      constructor(t) {
        t.OS == p.OperatingSystem.Android
          ? (this.popupCanvasBackgroundColor = "#999")
          : (this.popupCanvasBackgroundColor = dt.prefersDarkMode()
              ? "#0f1319"
              : "#ffffff");
      }
      static prefersDarkMode() {
        return (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
    };
    a(dt, "StyleConstants");
    var Et = class {
      constructor() {
        this.detected = !1;
        (this.touchable = "ontouchstart" in window),
          (this.OS = ""),
          (this.formFactor = "desktop"),
          (this.browser = ""),
          (this.dyPortrait = 0),
          (this.dyLandscape = 0),
          (this.version = "0"),
          (this.orientation = window.orientation);
      }

      detect() {
        var t = !1;
        if (navigator && navigator.userAgent) {
          var e = navigator.userAgent;
          if (e.indexOf("iPad") >= 0)
            (this.OS = "iOS"),
              (this.formFactor = "tablet"),
              (this.dyPortrait = this.dyLandscape = 0);
          else if (e.indexOf("iPhone") >= 0)
            (this.OS = "iOS"),
              (this.formFactor = "phone"),
              (this.dyPortrait = this.dyLandscape = 25);
          else if (e.indexOf("Android") >= 0) {
            (this.OS = "Android"),
              (this.formFactor = "phone"),
              (this.dyPortrait = 75),
              (this.dyLandscape = 25);
            try {
              var n = new RegExp("(?:Android\\s+)(\\d+\\.\\d+\\.\\d+)");
              this.version = e.match(n)[1];
            } catch (B) {}
          } else if (e.indexOf("Linux") >= 0) this.OS = "Linux";
          else if (e.indexOf("Macintosh") >= 0) {
            let d = /Intel Mac OS X (\d+(?:[_\.]\d+)+)/i.exec(e);
            if (!d)
              console.warn(
                "KMW could not properly parse the user agent string.A suboptimal keyboard layout may result."
              ),
                (this.OS = "MacOSX");
            else if (d.length > 1 && d[1]) {
              let g = d[1].replace("_", "."),
                Q = new k(g);
              (t = k.MAC_POSSIBLE_IPAD_ALIAS.compareTo(Q) <= 0),
                (this.OS = "MacOSX");
            }
          } else
            e.indexOf("Windows NT") >= 0 &&
              ((this.OS = "Windows"),
              e.indexOf("Touch") >= 0 && (this.formFactor = "phone"),
              typeof navigator.msMaxTouchPoints == "number" &&
                navigator.msMaxTouchPoints > 0 &&
                (this.touchable = !0));
        }
        let i = Math.min(screen.width, screen.height),
          s = Math.max(screen.width, screen.height),
          c = i / s;
        this.OS != "iOS" &&
          this.formFactor == "phone" &&
          ((i >= 600 && c > 0.5625) || c >= 0.625) &&
          (this.formFactor = "tablet");
        let l =
          navigator.platform == "Win32" || navigator.platform == "MacIntel";
        this.OS == "iOS" &&
          !("ongesturestart" in window) &&
          !l &&
          (this.OS = "Android"),
          (this.browser = "web"),
          (this.OS == "iOS" || this.OS.toLowerCase() == "macosx") &&
            (this.browser = "safari");
        var r = /Firefox|Chrome|OPR|Safari|Edge/;
        if (
          (r.test(navigator.userAgent) &&
            (navigator.userAgent.indexOf("Firefox") >= 0 &&
            "onmozorientationchange" in screen
              ? (this.browser = "firefox")
              : navigator.userAgent.indexOf("OPR") >= 0
              ? (this.browser = "opera")
              : navigator.userAgent.indexOf(" Edge/") >= 0
              ? (this.browser = "edge")
              : navigator.userAgent.indexOf("Chrome") >= 0
              ? (this.browser = "chrome")
              : navigator.userAgent.indexOf("Safari") >= 0 &&
                (this.browser = "safari")),
          t && this.browser == "safari" && window.TouchEvent)
        ) {
          (this.OS = "iOS"),
            (this.formFactor = "tablet"),
            (this.dyPortrait = this.dyLandscape = 0);
          let B = screen.height / screen.width;
          B < 1 && (B = 1 / B),
            B > 1.6 &&
              ((this.formFactor = "phone"),
              (this.dyPortrait = this.dyLandscape = 25));
        }
        return (
          (this.colorScheme = dt.prefersDarkMode() ? "dark" : "light"),
          (this.detected = !0),
          this.coreSpec
        );
      }
      get coreSpec() {
        return new p(this.browser, this.formFactor, this.OS, this.touchable);
      }
    };
    a(Et, "Device");
    var bn = class extends Ec.default {
      constructor(e, n) {
        super();
        this.applyCacheBusting = !1;
        if (!n) {
          let i = new Et();
          i.detect(), (n = i.coreSpec);
        }
        (this.sourcePath = e),
          (this.hostDevice = n),
          (this.deferForInitialization = new S());
      }
      initialize(e) {
        this._paths
          ? this._paths.updateFromOptions(e)
          : (this._paths = new Ht(e, this.sourcePath)),
          typeof e.setActiveOnRegister == "boolean"
            ? (this.activateFirstKeyboard = e.setActiveOnRegister)
            : (this.activateFirstKeyboard = !0),
          (this._spacebarText = e.spacebarText),
          (Re.spacebarTextMode = () => this.spacebarText);
      }
      finalizeInit() {
        this.deferForInitialization.resolve();
      }
      get paths() {
        return this._paths;
      }
      get spacebarText() {
        return this._spacebarText;
      }
      set spacebarText(e) {
        this._spacebarText != e &&
          ((this._spacebarText = e), this.emit("spacebartext", e));
      }
      get softDevice() {
        return this.hostDevice;
      }
      get hardDevice() {
        return ks(this.hostDevice);
      }
      get stubNamespacer() {
        return this._stubNamespacer;
      }
      set stubNamespacer(e) {
        this._stubNamespacer = e;
      }
      debugReport() {
        return {
          hostDevice: this.hostDevice,
          initialized: this.deferForInitialization.isResolved,
        };
      }
      onRuleFinalization(e, n) {}
    };
    a(bn, "EngineConfiguration");
    var Ks = C(
      { setActiveOnRegister: !0, spacebarText: Je.LANGUAGE_KEYBOARD },
      zs
    );
    var vc = v(A(), 1);
    var Os = class extends vc.default {
        constructor(e) {
          super();
          this.pendingActivations = [];
          this.engineConfig = e;
        }
        get predictionContext() {
          return this._predictionContext;
        }
        configure(e) {
          (this._resetContext = e.resetContext),
            (this._predictionContext = e.predictionContext),
            (this.keyboardCache = e.keyboardCache);
        }
        insertText(e, n, i) {
          let s = this.activeTarget;
          return s != null
            ? (n != null && e.output(0, s, n),
              typeof i != "undefined" && i !== null && e.deadkeyOutput(0, s, i),
              s.invalidateSelection(),
              !0)
            : !1;
        }
        resetContext() {
          this._resetContext(this.activeTarget),
            this.predictionContext.resetContext();
        }
        findAndPopActivation(e) {
          let n;
          for (
            n = 0;
            n < this.pendingActivations.length &&
            this.pendingActivations[n].target != e;
            n++
          );
          return n == this.pendingActivations.length
            ? null
            : this.pendingActivations.splice(n, 1)[0];
        }
        deferredKeyboardActivation(e, n, i) {
          return Z(this, null, function* () {
            let s = { target: i, keyboard: e, stub: n };
            this.findAndPopActivation(i),
              this.pendingActivations.push(s),
              yield e;
            let c = this.findAndPopActivation(i);
            if (c == s) return s;
            if (c) return this.pendingActivations.push(c), null;
          });
        }
        activateKeyboard(e, n, i) {
          return Z(this, null, function* () {
            let s = !this.activeKeyboard;
            this.findAndPopActivation(this.currentKeyboardSrcTarget());
            let c = this.prepareKeyboardForActivation(e, n),
              l = this.currentKeyboardSrcTarget(),
              r = yield c.keyboard;
            if (r == null && c.metadata) return !1;
            this.currentKeyboardSrcTarget() == l &&
              this.emit("beforekeyboardchange", c.metadata);
            let B = null;
            return (
              r && (B = { keyboard: r, metadata: c.metadata }),
              this.activateKeyboardForTarget(B, l),
              this.currentKeyboardSrcTarget() == l &&
                (!s || !!r) &&
                this.emit("keyboardchange", this.activeKeyboard),
              !0
            );
          });
        }
        prepareKeyboardForActivation(e, n) {
          var c;
          n || (n = "");
          let i = null;
          if ((e ? (i = this.keyboardCache.getStub(e, n)) : n == "", !i)) {
            if (e) throw new Error("No matching stub has been registered.");
            return { keyboard: Promise.resolve(null), metadata: null };
          }
          if (
            ((c = this.activeKeyboard) == null ? void 0 : c.metadata) &&
            e == this.activeKeyboard.metadata.id
          ) {
            let l = this.activeKeyboard.keyboard;
            return { keyboard: Promise.resolve(l), metadata: i };
          }
          let s;
          if ((s = this.keyboardCache.getKeyboardForStub(i)))
            return { keyboard: Promise.resolve(s), metadata: i };
          {
            this.emit("beforekeyboardchange", i);
            let l = this.engineConfig.deferForInitialization.then(() => {
              let B = new S();
              this.emit("keyboardasyncload", i, B.corePromise);
              let d = this.keyboardCache.fetchKeyboardForStub(i),
                g = new Promise((F, y) => {
                  let u = `Sorry, the ${i.name} keyboard for ${i.langName} is not currently available.`;
                  window.setTimeout(
                    () => y(new Error(u)),
                    Os.TIMEOUT_THRESHOLD
                  );
                }),
                Q = Promise.race([d, g]);
              return (
                Q.then(() => {
                  B.resolve(null), g.catch(() => {});
                }),
                Q.catch((F) => {
                  throw (B.resolve(F), F);
                }),
                Q
              );
            });
            return {
              keyboard: this.deferredKeyboardActivation(
                l,
                i,
                this.currentKeyboardSrcTarget()
              ).then((B) =>
                Z(this, null, function* () {
                  return B ? l : Promise.resolve(null);
                })
              ),
              metadata: i,
            };
          }
        }
      },
      vt = Os;
    a(vt, "ContextManagerBase"), (vt.TIMEOUT_THRESHOLD = 1e4);
    var Wc = v(A(), 1);
    var Wt = class extends Wc.default {};
    a(Wt, "HardKeyboard");
    function Ps(o, t, e) {
      let n = U.modifierCodes;
      if (
        (t &&
          t.isMnemonic &&
          o.setMnemonicCode(
            !!(o.Lmodifiers & n.SHIFT),
            !!(o.Lmodifiers & n.CAPS)
          ),
        t && !t.isMnemonic)
      ) {
        var i = w.languageMap[e];
        i && i["k" + o.Lcode] && (o.Lcode = i["k" + o.Lcode]),
          !t.definesPositionalOrMnemonic &&
            !(o.Lmodifiers & U.modifierBitmasks.NON_LEGACY) &&
            !o.isModifier &&
            (o = new M({
              Lcode: w._USKeyCodeToCharCode(o),
              Lmodifiers: 0,
              LisVirtualKey: !1,
              vkCode: o.Lcode,
              Lstates: o.Lstates,
              kName: "",
              device: o.device,
              isSynthetic: !1,
            }));
      }
      return o;
    }
    a(Ps, "processForMnemonicsAndLegacy");
    function ls(o, t) {
      let e = new Map();
      return (
        t.keys.forEach((n) => {
          let i = Math.abs(o.x - n.centerX),
            s = Math.abs(o.y - n.centerY),
            c,
            l;
          i > 0.5 * n.width
            ? ((c = i - 0.5 * n.width), (i = 0.5))
            : ((c = 0), (i /= n.width)),
            s > 0.5 * n.height
              ? ((l = s - 0.5 * n.height), (s = 0.5))
              : ((l = 0), (s /= n.height)),
            (c *= t.kbdScaleRatio),
            (c += i * n.height),
            (l += s * n.height);
          let r = c * c + l * l;
          e.set(n.keySpec, r);
        }),
        e
      );
    }
    a(ls, "keyTouchDistances");
    function gt(o) {
      var i;
      let t = new Map(),
        e = 0;
      Array.isArray(o) || (o = [o]);
      for (let s of o)
        for (let c of s.keys()) {
          let l = 1 / (Math.pow(s.get(c), 2) + 3e-5);
          (e += l), t.set(c, (i = t.get(c)) != null ? i : 0 + l);
        }
      let n = [];
      for (let s of t.keys()) n.push({ keySpec: s, p: t.get(s) / e });
      return n.sort(function (s, c) {
        return c.p - s.p;
      });
    }
    a(gt, "distributionFromDistanceMaps");
    var rs = class {
      constructor(t, e, n) {
        (this.keySpec = n),
          (this.centerX = n.proportionalX),
          (this.centerY = e.proportionalY),
          (this.width = n.proportionalWidth),
          (this.height = t.rowProportionalHeight);
      }
    };
    a(rs, "CorrectiveBaseKeyLayout");
    function os(o) {
      return o.baseKeyID
        ? U.isKnownOSKModifierKey(o.baseKeyID)
          ? !1
          : !o.isPadding
        : !1;
    }
    a(os, "correctionKeyFilter");
    function fc(o, t) {
      return {
        keys: o.row
          .map((e) => e.key.map((n) => new rs(o, e, n)))
          .reduce((e, n) => e.concat(n), [])
          .filter((e) => os(e.keySpec)),
        kbdScaleRatio: t,
      };
    }
    a(fc, "buildCorrectiveLayout");
    var Be = class {
      constructor(t, e, n) {
        (this.left = t.getTextBeforeCaret()),
          (this.startOfBuffer =
            this.left._kmwLength() <= e.leftContextCodePoints),
          this.startOfBuffer ||
            (this.left = this.left._kmwSubstr(-e.leftContextCodePoints)),
          (this.right = t.getTextAfterCaret()),
          (this.endOfBuffer =
            this.right._kmwLength() <= e.rightContextCodePoints),
          this.endOfBuffer ||
            (this.right = this.right._kmwSubstr(0, e.rightContextCodePoints)),
          (this.casingForm =
            n == "shift" ? "initial" : n == "caps" ? "upper" : null);
      }
      toMock() {
        let t = this.left._kmwLength();
        return new E(this.left + (this.right || ""), t);
      }
    };
    a(Be, "ContextWindow"),
      (Be.ENGINE_RULE_WINDOW = {
        leftContextCodePoints: 64,
        rightContextCodePoints: 32,
      });
    var Tc = v(A(), 1);
    var Ke = class {
      constructor() {
        this._promises = new Map();
      }
      get length() {
        return this._promises.size;
      }
      make(t, e, n) {
        if (this._promises.has(t)) return n(`Existing request with token ${t}`);
        this._promises.set(t, { reject: n, resolve: e });
      }
      keep(t, e) {
        let n = this._promises.get(t);
        if (!n) throw new Error(`No promise associated with token: ${t}`);
        let i = n.resolve;
        return this._promises.delete(t), i(e);
      }
      break(t, e) {
        let n = this._promises.get(t);
        if (!n) throw new Error(`No promise associated with token: ${t}`);
        this._promises.delete(t), n.reject(e);
      }
    };
    a(Ke, "PromiseStore");
    var ft = class {
      constructor(t, e, n) {
        (this._worker = e),
          (this._worker.onmessage = this.onMessage.bind(this)),
          (this._declareLMLayerReady = null),
          (this._predictPromises = new Ke()),
          (this._wordbreakPromises = new Ke()),
          (this._acceptPromises = new Ke()),
          (this._revertPromises = new Ke()),
          (this._nextToken = Number.MIN_SAFE_INTEGER),
          this.sendConfig(t, !!n);
      }
      sendConfig(t, e) {
        this._worker.postMessage({
          message: "config",
          capabilities: t,
          testMode: e,
        });
      }
      loadModel(t, e = "file") {
        return new Promise((n, i) => {
          this._declareLMLayerReady = n;
          let s = { type: e };
          e == "file" ? (s.file = t) : (s.code = t),
            this._worker.postMessage({ message: "load", source: s });
        });
      }
      unloadModel() {
        this._worker.postMessage({ message: "unload" });
      }
      predict(t, e) {
        let n = this._nextToken++;
        return new Promise((i, s) => {
          this._predictPromises.make(n, i, s),
            this._worker.postMessage({
              message: "predict",
              token: n,
              transform: t,
              context: e,
            });
        });
      }
      wordbreak(t) {
        let e = this._nextToken++;
        return new Promise((n, i) => {
          this._wordbreakPromises.make(e, n, i),
            this._worker.postMessage({
              message: "wordbreak",
              token: e,
              context: t,
            });
        });
      }
      acceptSuggestion(t, e, n) {
        let i = this._nextToken++;
        return new Promise((s, c) => {
          this._acceptPromises.make(i, s, c),
            this._worker.postMessage({
              message: "accept",
              token: i,
              suggestion: t,
              context: e,
              postTransform: n,
            });
        });
      }
      revertSuggestion(t, e) {
        let n = this._nextToken++;
        return new Promise((i, s) => {
          this._revertPromises.make(n, i, s),
            this._worker.postMessage({
              message: "revert",
              token: n,
              reversion: t,
              context: e,
            });
        });
      }
      resetContext(t) {
        this._worker.postMessage({ message: "reset-context", context: t });
      }
      onMessage(t) {
        let e = t.data;
        if (e.message === "error")
          console.error(e.log), e.error && console.error(e.error);
        else if (e.message === "ready")
          this._declareLMLayerReady(t.data.configuration);
        else if (e.message === "suggestions")
          this._predictPromises.keep(e.token, e.suggestions);
        else if (e.message === "currentword")
          this._wordbreakPromises.keep(e.token, e.word);
        else if (e.message === "postaccept")
          this._acceptPromises.keep(e.token, e.reversion);
        else if (e.message === "postrevert")
          this._revertPromises.keep(e.token, e.suggestions);
        else throw new Error(`Message not implemented: ${e.message}`);
      }
      shutdown() {
        this._worker.terminate();
      }
    };
    a(ft, "LMLayer");
    function as(o) {
      return o;
    }
    a(as, "unwrap");
    var kc = `"use strict";(()=>{var Ar=Object.defineProperty;var wr=Object.getOwnPropertySymbols;var Hr=Object.prototype.hasOwnProperty,Gr=Object.prototype.propertyIsEnumerable;var Nr=(n,r,e)=>r in n?Ar(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,Q=(n,r)=>{for(var e in r||(r={}))Hr.call(r,e)&&Nr(n,e,r[e]);if(wr)for(var e of wr(r))Gr.call(r,e)&&Nr(n,e,r[e]);return n};var s=(n,r)=>Ar(n,"name",{value:r,configurable:!0});var mr=(n,r)=>{for(var e in r)Ar(n,e,{get:r[e],enumerable:!0})};function b(){String.kmwFromCharCode=function(n){var r=[],e;for(e=0;e<arguments.length;e++){var t=Number(arguments[e]);if(!isFinite(t)||t<0||t>1114111||Math.floor(t)!==t)throw new RangeError("Invalid code point "+t);t<65536?r.push(t):(t-=65536,r.push((t>>10)+55296),r.push(t%1024+56320))}return String.fromCharCode.apply(void 0,r)},String.prototype.kmwCharCodeAt=function(n){var r=String(this),e=0;if(n<0||n>=r.length)return NaN;for(var t=0;t<n;t++)if(e=r.kmwNextChar(e),e===null)return NaN;var o=r.charCodeAt(e);if(o>=55296&&o<=56319&&r.length>e+1){var a=r.charCodeAt(e+1);if(a>=56320&&a<=57343)return(o-55296<<10)+(a-56320)+65536}return o},String.prototype.kmwIndexOf=function(n,r){var e=String(this),t=e.indexOf(n,r);if(t<0)return t;for(var o=0,a=0;a!==null&&a<t;a=e.kmwNextChar(a))o++;return o},String.prototype.kmwLastIndexOf=function(n,r){var e=String(this),t=e.lastIndexOf(n,r);if(t<0)return t;for(var o=0,a=0;a!==null&&a<t;a=e.kmwNextChar(a))o++;return o},String.prototype.kmwLength=function(){var n=String(this);if(n.length==0)return 0;for(var r=0,e=0;e!==null;r++)e=n.kmwNextChar(e);return r},String.prototype.kmwSlice=function(n,r){var e=String(this),t=e.kmwCodePointToCodeUnit(n),o=e.kmwCodePointToCodeUnit(r);return t===null||o===null?"":e.slice(t,o)},String.prototype.kmwSubstr=function(n,r){var e=String(this);n<0&&(n=e.kmwLength()+n),n<0&&(n=0);var t=e.kmwCodePointToCodeUnit(n),o=t;if(t===null)return"";if(arguments.length<2)o=e.length;else for(var a=0;a<r;a++)o=e.kmwNextChar(o);return o===null?e.substring(t):e.substring(t,o)},String.prototype.kmwSubstring=function(n,r){var e=String(this),t,o;if(typeof r=="undefined")t=e.kmwCodePointToCodeUnit(n),o=e.length;else{if(n>r){var a=n;n=r,r=a}t=e.kmwCodePointToCodeUnit(n),o=e.kmwCodePointToCodeUnit(r)}return(isNaN(t)||t===null)&&(t=0),(isNaN(o)||o===null)&&(o=e.length),e.substring(t,o)},String.prototype.kmwNextChar=function(n){var r=String(this);if(n===null||n<0||n>=r.length-1)return null;var e=r.charCodeAt(n);if(e>=55296&&e<=56319&&r.length>n+1){var t=r.charCodeAt(n+1);if(t>=56320&&t<=57343)return n==r.length-2?null:n+2}return n+1},String.prototype.kmwPrevChar=function(n){var r=String(this);if(n==null||n<=0||n>r.length)return null;var e=r.charCodeAt(n-1);if(e>=56320&&e<=57343&&n>1){var t=r.charCodeAt(n-2);if(t>=55296&&t<=56319)return n-2}return n-1},String.prototype.kmwCodePointToCodeUnit=function(n){if(n===null)return null;var r=String(this),e=0;if(n<0){e=r.length;for(var t=0;t>n;t--)e=r.kmwPrevChar(e);return e}if(n==r.kmwLength())return r.length;for(var t=0;t<n;t++)e=r.kmwNextChar(e);return e},String.prototype.kmwCodeUnitToCodePoint=function(n){var r=String(this);return n===null?null:n==0?0:n<0?r.substr(n).kmwLength():r.substr(0,n).kmwLength()},String.prototype.kmwCharAt=function(n){var r=String(this);return n>=0?r.kmwSubstr(n,1):""},String.prototype.kmwBMPNextChar=function(n){var r=String(this);return n<0||n>=r.length-1?null:n+1},String.prototype.kmwBMPPrevChar=function(n){var r=String(this);return n<=0||n>r.length?null:n-1},String.prototype.kmwBMPCodePointToCodeUnit=function(n){return n},String.prototype.kmwBMPCodeUnitToCodePoint=function(n){return n},String.prototype.kmwBMPLength=function(){var n=String(this);return n.length},String.prototype.kmwBMPSubstr=function(n,r){var e=String(this);return n>-1?e.substr(n,r):e.substr(e.length+n,-n)},String.kmwEnableSupplementaryPlane=function(n){var r=String.prototype;String._kmwFromCharCode=n?String.kmwFromCharCode:String.fromCharCode,r._kmwCharAt=n?r.kmwCharAt:r.charAt,r._kmwCharCodeAt=n?r.kmwCharCodeAt:r.charCodeAt,r._kmwIndexOf=n?r.kmwIndexOf:r.indexOf,r._kmwLastIndexOf=n?r.kmwLastIndexOf:r.lastIndexOf,r._kmwSlice=n?r.kmwSlice:r.slice,r._kmwSubstring=n?r.kmwSubstring:r.substring,r._kmwSubstr=n?r.kmwSubstr:r.kmwBMPSubstr,r._kmwLength=n?r.kmwLength:r.kmwBMPLength,r._kmwNextChar=n?r.kmwNextChar:r.kmwBMPNextChar,r._kmwPrevChar=n?r.kmwPrevChar:r.kmwBMPPrevChar,r._kmwCodePointToCodeUnit=n?r.kmwCodePointToCodeUnit:r.kmwBMPCodePointToCodeUnit,r._kmwCodeUnitToCodePoint=n?r.kmwCodeUnitToCodePoint:r.kmwBMPCodeUnitToCodePoint},String._kmwFromCharCode||String.kmwEnableSupplementaryPlane(!1)}s(b,"extendString");b();var yr={};mr(yr,{DummyModel:()=>Z,PriorityQueue:()=>c,QuoteBehavior:()=>z,SENTINEL_CODE_UNIT:()=>S,TrieModel:()=>Y,applyTransform:()=>C,buildMergedTransform:()=>J,defaultApplyCasing:()=>sr,getLastPreCaretToken:()=>rr,isHighSurrogate:()=>_,isLowSurrogate:()=>fr,isSentinel:()=>xr,tokenize:()=>V,transformToSuggestion:()=>U,wordbreak:()=>X});b();var S="\\uFDD0";function C(n,r){var B,k;let e=r.left||"",t=e.kmwLength(),o=t<n.deleteLeft?t:n.deleteLeft,a=e.kmwSubstr(0,t-o)+(n.insert||""),d=r.right||"",i=d.kmwLength(),p=i<((B=n.deleteRight)!=null?B:0)?i:(k=n.deleteRight)!=null?k:0,x=d.kmwSubstr(p);return{left:a,right:x,startOfBuffer:r.startOfBuffer,endOfBuffer:r.endOfBuffer,casingForm:r.casingForm}}s(C,"applyTransform");function J(n,r){let e=n.insert,t=r.deleteLeft;if(r.deleteLeft){let o=n.insert.kmwLength();o<=r.deleteLeft?(e="",t=r.deleteLeft-o):(e=n.insert.kmwSubstr(0,o-r.deleteLeft),t=0)}return{insert:e+r.insert,deleteLeft:n.deleteLeft+t,deleteRight:(n.deleteRight||0)+(r.deleteRight||0)}}s(J,"buildMergedTransform");function _(n){return typeof n=="string"&&(n=n.charCodeAt(0)),n>=55296&&n<=56319}s(_,"isHighSurrogate");function fr(n){return typeof n=="string"&&(n=n.charCodeAt(0)),n>=56320&&n<=57343}s(fr,"isLowSurrogate");function xr(n){return n==S}s(xr,"isSentinel");function U(n,r){let e={transform:n,transformId:n.id,displayAs:n.insert};return(r===0||r)&&(e.p=r),e}s(U,"transformToSuggestion");function sr(n,r){switch(n){case"lower":return r.toLowerCase();case"upper":return r.toUpperCase();case"initial":let e=1;return r.length>1&&_(r.charAt(0))&&fr(r.charCodeAt(1))&&(e=2),r.substring(0,e).toUpperCase().concat(r.substring(e))}}s(sr,"defaultApplyCasing");var c=class{constructor(r,e){if(typeof r!="function"){this.comparator=r.comparator,this.heap=[].concat(r.heap);return}let t=r;this.comparator=t,this.heap=(e!=null?e:[]).slice(0),this.heapify()}static leftChildIndex(r){return r*2+1}static rightChildIndex(r){return r*2+2}static parentIndex(r){return Math.floor((r-1)/2)}heapify(r,e){if(r==null||e==null){this.heapify(0,this.count-1);return}let t=[],o=-1;for(let a=e;a>=r;a--){let d=c.parentIndex(a);this.siftDown(a)&&d<r&&o!=d&&(t.push(d),o=d)}for(o=-1;t.length>0;){let a=t.shift(),d=c.parentIndex(a);this.siftDown(a)&&d>=0&&o!=d&&(t.push(d),o=d)}}get count(){return this.heap.length}peek(){return this.heap[0]}enqueue(r){let e=this.heap.length;this.heap.push(r);let t=c.parentIndex,o=t(e);for(;e!==0&&this.comparator(this.heap[e],this.heap[o])<0;){let a=this.heap[e];this.heap[e]=this.heap[o],this.heap[o]=a,e=o,o=t(e)}}enqueueAll(r){if(r.length==0)return;let e=this.count;this.heap=this.heap.concat(r);let t=c.parentIndex(e);this.heapify(t>=0?t:0,c.parentIndex(this.count-1))}dequeue(){if(this.count==0)return;let r=this.heap[0],e=this.heap.pop();return this.heap.length>0&&(this.heap[0]=e,this.siftDown(0)),r}siftDown(r){let e=c.leftChildIndex(r),t=c.rightChildIndex(r),o=r;if(e<this.heap.length&&this.comparator(this.heap[e],this.heap[o])<0&&(o=e),t<this.heap.length&&this.comparator(this.heap[t],this.heap[o])<0&&(o=t),o!=r){let a=this.heap[r];return this.heap[r]=this.heap[o],this.heap[o]=a,this.siftDown(o),!0}else return!1}toArray(){return this.heap.slice(0)}};s(c,"PriorityQueue");var j=(t=>(t.noQuotes="no-quotes",t.useQuotes="use-quotes",t.default="default-quotes",t))(j||{});(r=>{function n(e,t,o,a){if(a=="default-quotes"||!a)throw"Specified quote behavior may be ambiguous - default behavior not specified (may not be .default)";switch(e=="default-quotes"&&(e=a),e){case"no-quotes":return t;case"use-quotes":let{open:d,close:i}=o.quotesForKeepSuggestion;return d+t+i;default:throw"Unsupported quote behavior state detected; implementation missing!"}}r.apply=n,s(n,"apply")})(j||(j={}));var z=j;function V(n,r){r=r||{left:void 0,startOfBuffer:void 0,endOfBuffer:void 0};let e=n(r.left||"")||[],t=n(r.right||"")||[],o;if(e.length>0&&(o=e[e.length-1]),e.length>1){let d=e[e.length-2];if(d.end==o.start&&o.text=="'"){let i={text:d.text+o.text,start:d.start,end:o.end,length:d.length+o.length};e.pop(),e.pop(),e.push(i),o=i}}let a={left:e.map(d=>d.text),right:t.map(d=>d.text),caretSplitsToken:!1};if(e.length>0&&t.length>0){let d=t[0],i=o.end!=r.left.length,p=d.start!=0;if(i||p)return a;n(o.text+d.text).length==1&&(a.caretSplitsToken=!0)}return a}s(V,"tokenize");function rr(n,r){let e=V(n,r);return e.left.length>0?e.left.pop():""}s(rr,"getLastPreCaretToken");function X(n,r){return rr(n,r)}s(X,"wordbreak");var tr={};mr(tr,{ascii:()=>gr,default:()=>F,defaultWordbreaker:()=>F,placeholder:()=>Er});function Er(n){let r=0;return n.split(/\\s+/).map(e=>{let t={start:r,end:r+e.length,text:e,length:e.length};return r=t.end,t})}s(Er,"placeholder");function gr(n){let r=/[A-Za-z0-9']+/g,e=[],t;for(;(t=r.exec(n))!==null;)e.push(new Br(t[0],t.index));return e}s(gr,"ascii");var Br=class{constructor(r,e){this.text=r,this.start=e}get length(){return this.text.length}get end(){return this.start+this.text.length}};s(Br,"RegExpDerivedSpan");var Mr=["Other","LF","Newline","CR","WSegSpace","Double_Quote","Single_Quote","MidNum","MidNumLet","Numeric","MidLetter","ALetter","ExtendNumLet","Format","Extend","Hebrew_Letter","ZWJ","Katakana","Regional_Indicator","sot","eot"];var kr=[[0,0],[10,1],[11,2],[13,3],[14,0],[32,4],[33,0],[34,5],[35,0],[39,6],[40,0],[44,7],[45,0],[46,8],[47,0],[48,9],[58,10],[59,7],[60,0],[65,11],[91,0],[95,12],[96,0],[97,11],[123,0],[133,2],[134,0],[170,11],[171,0],[173,13],[174,0],[181,11],[182,0],[183,10],[184,0],[186,11],[187,0],[192,11],[215,0],[216,11],[247,0],[248,11],[728,0],[734,11],[768,14],[880,11],[885,0],[886,11],[888,0],[890,11],[894,7],[895,11],[896,0],[902,11],[903,10],[904,11],[907,0],[908,11],[909,0],[910,11],[930,0],[931,11],[1014,0],[1015,11],[1154,0],[1155,14],[1162,11],[1328,0],[1329,11],[1367,0],[1369,11],[1373,0],[1374,11],[1375,10],[1376,11],[1417,7],[1418,11],[1419,0],[1425,14],[1470,0],[1471,14],[1472,0],[1473,14],[1475,0],[1476,14],[1478,0],[1479,14],[1480,0],[1488,15],[1515,0],[1519,15],[1523,11],[1524,10],[1525,0],[1536,13],[1542,0],[1548,7],[1550,0],[1552,14],[1563,0],[1564,13],[1565,0],[1568,11],[1611,14],[1632,9],[1642,0],[1643,9],[1644,7],[1645,0],[1646,11],[1648,14],[1649,11],[1748,0],[1749,11],[1750,14],[1757,13],[1758,0],[1759,14],[1765,11],[1767,14],[1769,0],[1770,14],[1774,11],[1776,9],[1786,11],[1789,0],[1791,11],[1792,0],[1807,13],[1808,11],[1809,14],[1810,11],[1840,14],[1867,0],[1869,11],[1958,14],[1969,11],[1970,0],[1984,9],[1994,11],[2027,14],[2036,11],[2038,0],[2040,7],[2041,0],[2042,11],[2043,0],[2045,14],[2046,0],[2048,11],[2070,14],[2074,11],[2075,14],[2084,11],[2085,14],[2088,11],[2089,14],[2094,0],[2112,11],[2137,14],[2140,0],[2144,11],[2155,0],[2208,11],[2229,0],[2230,11],[2248,0],[2259,14],[2274,13],[2275,14],[2308,11],[2362,14],[2365,11],[2366,14],[2384,11],[2385,14],[2392,11],[2402,14],[2404,0],[2406,9],[2416,0],[2417,11],[2433,14],[2436,0],[2437,11],[2445,0],[2447,11],[2449,0],[2451,11],[2473,0],[2474,11],[2481,0],[2482,11],[2483,0],[2486,11],[2490,0],[2492,14],[2493,11],[2494,14],[2501,0],[2503,14],[2505,0],[2507,14],[2510,11],[2511,0],[2519,14],[2520,0],[2524,11],[2526,0],[2527,11],[2530,14],[2532,0],[2534,9],[2544,11],[2546,0],[2556,11],[2557,0],[2558,14],[2559,0],[2561,14],[2564,0],[2565,11],[2571,0],[2575,11],[2577,0],[2579,11],[2601,0],[2602,11],[2609,0],[2610,11],[2612,0],[2613,11],[2615,0],[2616,11],[2618,0],[2620,14],[2621,0],[2622,14],[2627,0],[2631,14],[2633,0],[2635,14],[2638,0],[2641,14],[2642,0],[2649,11],[2653,0],[2654,11],[2655,0],[2662,9],[2672,14],[2674,11],[2677,14],[2678,0],[2689,14],[2692,0],[2693,11],[2702,0],[2703,11],[2706,0],[2707,11],[2729,0],[2730,11],[2737,0],[2738,11],[2740,0],[2741,11],[2746,0],[2748,14],[2749,11],[2750,14],[2758,0],[2759,14],[2762,0],[2763,14],[2766,0],[2768,11],[2769,0],[2784,11],[2786,14],[2788,0],[2790,9],[2800,0],[2809,11],[2810,14],[2816,0],[2817,14],[2820,0],[2821,11],[2829,0],[2831,11],[2833,0],[2835,11],[2857,0],[2858,11],[2865,0],[2866,11],[2868,0],[2869,11],[2874,0],[2876,14],[2877,11],[2878,14],[2885,0],[2887,14],[2889,0],[2891,14],[2894,0],[2901,14],[2904,0],[2908,11],[2910,0],[2911,11],[2914,14],[2916,0],[2918,9],[2928,0],[2929,11],[2930,0],[2946,14],[2947,11],[2948,0],[2949,11],[2955,0],[2958,11],[2961,0],[2962,11],[2966,0],[2969,11],[2971,0],[2972,11],[2973,0],[2974,11],[2976,0],[2979,11],[2981,0],[2984,11],[2987,0],[2990,11],[3002,0],[3006,14],[3011,0],[3014,14],[3017,0],[3018,14],[3022,0],[3024,11],[3025,0],[3031,14],[3032,0],[3046,9],[3056,0],[3072,14],[3077,11],[3085,0],[3086,11],[3089,0],[3090,11],[3113,0],[3114,11],[3130,0],[3133,11],[3134,14],[3141,0],[3142,14],[3145,0],[3146,14],[3150,0],[3157,14],[3159,0],[3160,11],[3163,0],[3168,11],[3170,14],[3172,0],[3174,9],[3184,0],[3200,11],[3201,14],[3204,0],[3205,11],[3213,0],[3214,11],[3217,0],[3218,11],[3241,0],[3242,11],[3252,0],[3253,11],[3258,0],[3260,14],[3261,11],[3262,14],[3269,0],[3270,14],[3273,0],[3274,14],[3278,0],[3285,14],[3287,0],[3294,11],[3295,0],[3296,11],[3298,14],[3300,0],[3302,9],[3312,0],[3313,11],[3315,0],[3328,14],[3332,11],[3341,0],[3342,11],[3345,0],[3346,11],[3387,14],[3389,11],[3390,14],[3397,0],[3398,14],[3401,0],[3402,14],[3406,11],[3407,0],[3412,11],[3415,14],[3416,0],[3423,11],[3426,14],[3428,0],[3430,9],[3440,0],[3450,11],[3456,0],[3457,14],[3460,0],[3461,11],[3479,0],[3482,11],[3506,0],[3507,11],[3516,0],[3517,11],[3518,0],[3520,11],[3527,0],[3530,14],[3531,0],[3535,14],[3541,0],[3542,14],[3543,0],[3544,14],[3552,0],[3558,9],[3568,0],[3570,14],[3572,0],[3633,14],[3634,0],[3636,14],[3643,0],[3655,14],[3663,0],[3664,9],[3674,0],[3761,14],[3762,0],[3764,14],[3773,0],[3784,14],[3790,0],[3792,9],[3802,0],[3840,11],[3841,0],[3864,14],[3866,0],[3872,9],[3882,0],[3893,14],[3894,0],[3895,14],[3896,0],[3897,14],[3898,0],[3902,14],[3904,11],[3912,0],[3913,11],[3949,0],[3953,14],[3973,0],[3974,14],[3976,11],[3981,14],[3992,0],[3993,14],[4029,0],[4038,14],[4039,0],[4139,14],[4159,0],[4160,9],[4170,0],[4182,14],[4186,0],[4190,14],[4193,0],[4194,14],[4197,0],[4199,14],[4206,0],[4209,14],[4213,0],[4226,14],[4238,0],[4239,14],[4240,9],[4250,14],[4254,0],[4256,11],[4294,0],[4295,11],[4296,0],[4301,11],[4302,0],[4304,11],[4347,0],[4348,11],[4681,0],[4682,11],[4686,0],[4688,11],[4695,0],[4696,11],[4697,0],[4698,11],[4702,0],[4704,11],[4745,0],[4746,11],[4750,0],[4752,11],[4785,0],[4786,11],[4790,0],[4792,11],[4799,0],[4800,11],[4801,0],[4802,11],[4806,0],[4808,11],[4823,0],[4824,11],[4881,0],[4882,11],[4886,0],[4888,11],[4955,0],[4957,14],[4960,0],[4992,11],[5008,0],[5024,11],[5110,0],[5112,11],[5118,0],[5121,11],[5741,0],[5743,11],[5760,4],[5761,11],[5787,0],[5792,11],[5867,0],[5870,11],[5881,0],[5888,11],[5901,0],[5902,11],[5906,14],[5909,0],[5920,11],[5938,14],[5941,0],[5952,11],[5970,14],[5972,0],[5984,11],[5997,0],[5998,11],[6001,0],[6002,14],[6004,0],[6068,14],[6100,0],[6109,14],[6110,0],[6112,9],[6122,0],[6155,14],[6158,13],[6159,0],[6160,9],[6170,0],[6176,11],[6265,0],[6272,11],[6277,14],[6279,11],[6313,14],[6314,11],[6315,0],[6320,11],[6390,0],[6400,11],[6431,0],[6432,14],[6444,0],[6448,14],[6460,0],[6470,9],[6480,0],[6608,9],[6618,0],[6656,11],[6679,14],[6684,0],[6741,14],[6751,0],[6752,14],[6781,0],[6783,14],[6784,9],[6794,0],[6800,9],[6810,0],[6832,14],[6849,0],[6912,14],[6917,11],[6964,14],[6981,11],[6988,0],[6992,9],[7002,0],[7019,14],[7028,0],[7040,14],[7043,11],[7073,14],[7086,11],[7088,9],[7098,11],[7142,14],[7156,0],[7168,11],[7204,14],[7224,0],[7232,9],[7242,0],[7245,11],[7248,9],[7258,11],[7294,0],[7296,11],[7305,0],[7312,11],[7355,0],[7357,11],[7360,0],[7376,14],[7379,0],[7380,14],[7401,11],[7405,14],[7406,11],[7412,14],[7413,11],[7415,14],[7418,11],[7419,0],[7424,11],[7616,14],[7674,0],[7675,14],[7680,11],[7958,0],[7960,11],[7966,0],[7968,11],[8006,0],[8008,11],[8014,0],[8016,11],[8024,0],[8025,11],[8026,0],[8027,11],[8028,0],[8029,11],[8030,0],[8031,11],[8062,0],[8064,11],[8117,0],[8118,11],[8125,0],[8126,11],[8127,0],[8130,11],[8133,0],[8134,11],[8141,0],[8144,11],[8148,0],[8150,11],[8156,0],[8160,11],[8173,0],[8178,11],[8181,0],[8182,11],[8189,0],[8192,4],[8199,0],[8200,4],[8203,0],[8204,14],[8205,16],[8206,13],[8208,0],[8216,8],[8218,0],[8228,8],[8229,0],[8231,10],[8232,2],[8234,13],[8239,12],[8240,0],[8255,12],[8257,0],[8260,7],[8261,0],[8276,12],[8277,0],[8287,4],[8288,13],[8293,0],[8294,13],[8304,0],[8305,11],[8306,0],[8319,11],[8320,0],[8336,11],[8349,0],[8400,14],[8433,0],[8450,11],[8451,0],[8455,11],[8456,0],[8458,11],[8468,0],[8469,11],[8470,0],[8473,11],[8478,0],[8484,11],[8485,0],[8486,11],[8487,0],[8488,11],[8489,0],[8490,11],[8494,0],[8495,11],[8506,0],[8508,11],[8512,0],[8517,11],[8522,0],[8526,11],[8527,0],[8544,11],[8585,0],[9398,11],[9450,0],[11264,11],[11311,0],[11312,11],[11359,0],[11360,11],[11493,0],[11499,11],[11503,14],[11506,11],[11508,0],[11520,11],[11558,0],[11559,11],[11560,0],[11565,11],[11566,0],[11568,11],[11624,0],[11631,11],[11632,0],[11647,14],[11648,11],[11671,0],[11680,11],[11687,0],[11688,11],[11695,0],[11696,11],[11703,0],[11704,11],[11711,0],[11712,11],[11719,0],[11720,11],[11727,0],[11728,11],[11735,0],[11736,11],[11743,0],[11744,14],[11776,0],[11823,11],[11824,0],[12288,4],[12289,0],[12293,11],[12294,0],[12330,14],[12336,0],[12337,17],[12342,0],[12347,11],[12349,0],[12441,14],[12443,17],[12445,0],[12448,17],[12539,0],[12540,17],[12544,0],[12549,11],[12592,0],[12593,11],[12687,0],[12704,11],[12736,0],[12784,17],[12800,0],[13008,17],[13055,0],[13056,17],[13144,0],[40960,11],[42125,0],[42192,11],[42238,0],[42240,11],[42509,0],[42512,11],[42528,9],[42538,11],[42540,0],[42560,11],[42607,14],[42611,0],[42612,14],[42622,0],[42623,11],[42654,14],[42656,11],[42736,14],[42738,0],[42760,11],[42944,0],[42946,11],[42955,0],[42997,11],[43010,14],[43011,11],[43014,14],[43015,11],[43019,14],[43020,11],[43043,14],[43048,0],[43052,14],[43053,0],[43072,11],[43124,0],[43136,14],[43138,11],[43188,14],[43206,0],[43216,9],[43226,0],[43232,14],[43250,11],[43256,0],[43259,11],[43260,0],[43261,11],[43263,14],[43264,9],[43274,11],[43302,14],[43310,0],[43312,11],[43335,14],[43348,0],[43360,11],[43389,0],[43392,14],[43396,11],[43443,14],[43457,0],[43471,11],[43472,9],[43482,0],[43493,14],[43494,0],[43504,9],[43514,0],[43520,11],[43561,14],[43575,0],[43584,11],[43587,14],[43588,11],[43596,14],[43598,0],[43600,9],[43610,0],[43643,14],[43646,0],[43696,14],[43697,0],[43698,14],[43701,0],[43703,14],[43705,0],[43710,14],[43712,0],[43713,14],[43714,0],[43744,11],[43755,14],[43760,0],[43762,11],[43765,14],[43767,0],[43777,11],[43783,0],[43785,11],[43791,0],[43793,11],[43799,0],[43808,11],[43815,0],[43816,11],[43823,0],[43824,11],[43882,0],[43888,11],[44003,14],[44011,0],[44012,14],[44014,0],[44016,9],[44026,0],[44032,11],[55204,0],[55216,11],[55239,0],[55243,11],[55292,0],[64256,11],[64263,0],[64275,11],[64280,0],[64285,15],[64286,14],[64287,15],[64297,0],[64298,15],[64311,0],[64312,15],[64317,0],[64318,15],[64319,0],[64320,15],[64322,0],[64323,15],[64325,0],[64326,15],[64336,11],[64434,0],[64467,11],[64830,0],[64848,11],[64912,0],[64914,11],[64968,0],[65008,11],[65020,0],[65024,14],[65040,7],[65041,0],[65043,10],[65044,7],[65045,0],[65056,14],[65072,0],[65075,12],[65077,0],[65101,12],[65104,7],[65105,0],[65106,8],[65107,0],[65108,7],[65109,10],[65110,0],[65136,11],[65141,0],[65142,11],[65277,0],[65279,13],[65280,0],[65287,8],[65288,0],[65292,7],[65293,0],[65294,8],[65295,0],[65296,9],[65306,10],[65307,7],[65308,0],[65313,11],[65339,0],[65343,12],[65344,0],[65345,11],[65371,0],[65382,17],[65438,14],[65440,11],[65471,0],[65474,11],[65480,0],[65482,11],[65488,0],[65490,11],[65496,0],[65498,11],[65501,0],[65529,13],[65532,0],[65536,11],[65548,0],[65549,11],[65575,0],[65576,11],[65595,0],[65596,11],[65598,0],[65599,11],[65614,0],[65616,11],[65630,0],[65664,11],[65787,0],[65856,11],[65909,0],[66045,14],[66046,0],[66176,11],[66205,0],[66208,11],[66257,0],[66272,14],[66273,0],[66304,11],[66336,0],[66349,11],[66379,0],[66384,11],[66422,14],[66427,0],[66432,11],[66462,0],[66464,11],[66500,0],[66504,11],[66512,0],[66513,11],[66518,0],[66560,11],[66718,0],[66720,9],[66730,0],[66736,11],[66772,0],[66776,11],[66812,0],[66816,11],[66856,0],[66864,11],[66916,0],[67072,11],[67383,0],[67392,11],[67414,0],[67424,11],[67432,0],[67584,11],[67590,0],[67592,11],[67593,0],[67594,11],[67638,0],[67639,11],[67641,0],[67644,11],[67645,0],[67647,11],[67670,0],[67680,11],[67703,0],[67712,11],[67743,0],[67808,11],[67827,0],[67828,11],[67830,0],[67840,11],[67862,0],[67872,11],[67898,0],[67968,11],[68024,0],[68030,11],[68032,0],[68096,11],[68097,14],[68100,0],[68101,14],[68103,0],[68108,14],[68112,11],[68116,0],[68117,11],[68120,0],[68121,11],[68150,0],[68152,14],[68155,0],[68159,14],[68160,0],[68192,11],[68221,0],[68224,11],[68253,0],[68288,11],[68296,0],[68297,11],[68325,14],[68327,0],[68352,11],[68406,0],[68416,11],[68438,0],[68448,11],[68467,0],[68480,11],[68498,0],[68608,11],[68681,0],[68736,11],[68787,0],[68800,11],[68851,0],[68864,11],[68900,14],[68904,0],[68912,9],[68922,0],[69248,11],[69290,0],[69291,14],[69293,0],[69296,11],[69298,0],[69376,11],[69405,0],[69415,11],[69416,0],[69424,11],[69446,14],[69457,0],[69552,11],[69573,0],[69600,11],[69623,0],[69632,14],[69635,11],[69688,14],[69703,0],[69734,9],[69744,0],[69759,14],[69763,11],[69808,14],[69819,0],[69821,13],[69822,0],[69837,13],[69838,0],[69840,11],[69865,0],[69872,9],[69882,0],[69888,14],[69891,11],[69927,14],[69941,0],[69942,9],[69952,0],[69956,11],[69957,14],[69959,11],[69960,0],[69968,11],[70003,14],[70004,0],[70006,11],[70007,0],[70016,14],[70019,11],[70067,14],[70081,11],[70085,0],[70089,14],[70093,0],[70094,14],[70096,9],[70106,11],[70107,0],[70108,11],[70109,0],[70144,11],[70162,0],[70163,11],[70188,14],[70200,0],[70206,14],[70207,0],[70272,11],[70279,0],[70280,11],[70281,0],[70282,11],[70286,0],[70287,11],[70302,0],[70303,11],[70313,0],[70320,11],[70367,14],[70379,0],[70384,9],[70394,0],[70400,14],[70404,0],[70405,11],[70413,0],[70415,11],[70417,0],[70419,11],[70441,0],[70442,11],[70449,0],[70450,11],[70452,0],[70453,11],[70458,0],[70459,14],[70461,11],[70462,14],[70469,0],[70471,14],[70473,0],[70475,14],[70478,0],[70480,11],[70481,0],[70487,14],[70488,0],[70493,11],[70498,14],[70500,0],[70502,14],[70509,0],[70512,14],[70517,0],[70656,11],[70709,14],[70727,11],[70731,0],[70736,9],[70746,0],[70750,14],[70751,11],[70754,0],[70784,11],[70832,14],[70852,11],[70854,0],[70855,11],[70856,0],[70864,9],[70874,0],[71040,11],[71087,14],[71094,0],[71096,14],[71105,0],[71128,11],[71132,14],[71134,0],[71168,11],[71216,14],[71233,0],[71236,11],[71237,0],[71248,9],[71258,0],[71296,11],[71339,14],[71352,11],[71353,0],[71360,9],[71370,0],[71453,14],[71468,0],[71472,9],[71482,0],[71680,11],[71724,14],[71739,0],[71840,11],[71904,9],[71914,0],[71935,11],[71943,0],[71945,11],[71946,0],[71948,11],[71956,0],[71957,11],[71959,0],[71960,11],[71984,14],[71990,0],[71991,14],[71993,0],[71995,14],[71999,11],[72e3,14],[72001,11],[72002,14],[72004,0],[72016,9],[72026,0],[72096,11],[72104,0],[72106,11],[72145,14],[72152,0],[72154,14],[72161,11],[72162,0],[72163,11],[72164,14],[72165,0],[72192,11],[72193,14],[72203,11],[72243,14],[72250,11],[72251,14],[72255,0],[72263,14],[72264,0],[72272,11],[72273,14],[72284,11],[72330,14],[72346,0],[72349,11],[72350,0],[72384,11],[72441,0],[72704,11],[72713,0],[72714,11],[72751,14],[72759,0],[72760,14],[72768,11],[72769,0],[72784,9],[72794,0],[72818,11],[72848,0],[72850,14],[72872,0],[72873,14],[72887,0],[72960,11],[72967,0],[72968,11],[72970,0],[72971,11],[73009,14],[73015,0],[73018,14],[73019,0],[73020,14],[73022,0],[73023,14],[73030,11],[73031,14],[73032,0],[73040,9],[73050,0],[73056,11],[73062,0],[73063,11],[73065,0],[73066,11],[73098,14],[73103,0],[73104,14],[73106,0],[73107,14],[73112,11],[73113,0],[73120,9],[73130,0],[73440,11],[73459,14],[73463,0],[73648,11],[73649,0],[73728,11],[74650,0],[74752,11],[74863,0],[74880,11],[75076,0],[77824,11],[78895,0],[78896,13],[78905,0],[82944,11],[83527,0],[92160,11],[92729,0],[92736,11],[92767,0],[92768,9],[92778,0],[92880,11],[92910,0],[92912,14],[92917,0],[92928,11],[92976,14],[92983,0],[92992,11],[92996,0],[93008,9],[93018,0],[93027,11],[93048,0],[93053,11],[93072,0],[93760,11],[93824,0],[93952,11],[94027,0],[94031,14],[94032,11],[94033,14],[94088,0],[94095,14],[94099,11],[94112,0],[94176,11],[94178,0],[94179,11],[94180,14],[94181,0],[94192,14],[94194,0],[110592,17],[110593,0],[110948,17],[110952,0],[113664,11],[113771,0],[113776,11],[113789,0],[113792,11],[113801,0],[113808,11],[113818,0],[113821,14],[113823,0],[113824,13],[113828,0],[119141,14],[119146,0],[119149,14],[119155,13],[119163,14],[119171,0],[119173,14],[119180,0],[119210,14],[119214,0],[119362,14],[119365,0],[119808,11],[119893,0],[119894,11],[119965,0],[119966,11],[119968,0],[119970,11],[119971,0],[119973,11],[119975,0],[119977,11],[119981,0],[119982,11],[119994,0],[119995,11],[119996,0],[119997,11],[120004,0],[120005,11],[120070,0],[120071,11],[120075,0],[120077,11],[120085,0],[120086,11],[120093,0],[120094,11],[120122,0],[120123,11],[120127,0],[120128,11],[120133,0],[120134,11],[120135,0],[120138,11],[120145,0],[120146,11],[120486,0],[120488,11],[120513,0],[120514,11],[120539,0],[120540,11],[120571,0],[120572,11],[120597,0],[120598,11],[120629,0],[120630,11],[120655,0],[120656,11],[120687,0],[120688,11],[120713,0],[120714,11],[120745,0],[120746,11],[120771,0],[120772,11],[120780,0],[120782,9],[120832,0],[121344,14],[121399,0],[121403,14],[121453,0],[121461,14],[121462,0],[121476,14],[121477,0],[121499,14],[121504,0],[121505,14],[121520,0],[122880,14],[122887,0],[122888,14],[122905,0],[122907,14],[122914,0],[122915,14],[122917,0],[122918,14],[122923,0],[123136,11],[123181,0],[123184,14],[123191,11],[123198,0],[123200,9],[123210,0],[123214,11],[123215,0],[123584,11],[123628,14],[123632,9],[123642,0],[124928,11],[125125,0],[125136,14],[125143,0],[125184,11],[125252,14],[125259,11],[125260,0],[125264,9],[125274,0],[126464,11],[126468,0],[126469,11],[126496,0],[126497,11],[126499,0],[126500,11],[126501,0],[126503,11],[126504,0],[126505,11],[126515,0],[126516,11],[126520,0],[126521,11],[126522,0],[126523,11],[126524,0],[126530,11],[126531,0],[126535,11],[126536,0],[126537,11],[126538,0],[126539,11],[126540,0],[126541,11],[126544,0],[126545,11],[126547,0],[126548,11],[126549,0],[126551,11],[126552,0],[126553,11],[126554,0],[126555,11],[126556,0],[126557,11],[126558,0],[126559,11],[126560,0],[126561,11],[126563,0],[126564,11],[126565,0],[126567,11],[126571,0],[126572,11],[126579,0],[126580,11],[126584,0],[126585,11],[126589,0],[126590,11],[126591,0],[126592,11],[126602,0],[126603,11],[126620,0],[126625,11],[126628,0],[126629,11],[126634,0],[126635,11],[126652,0],[127280,11],[127306,0],[127312,11],[127338,0],[127344,11],[127370,0],[127462,18],[127488,0],[127995,14],[128e3,0],[130032,9],[130042,0],[917505,13],[917506,0],[917536,14],[917632,0],[917760,14],[918e3,0]];function F(n,r){let e=Xr(n,r);if(e.length==0)return[];let t=[];for(let o=0;o<e.length-1;o++){let a=e[o],d=e[o+1],i=new er(n,a,d);zr(i.text,r)?t.push(i):o==e.length-2&&(i=new er(n,d,d),t.push(i))}return t}s(F,"default_");var er=class{constructor(r,e,t){this._source=r,this.start=e,this.end=t}get text(){return this._source.substring(this.start,this.end)}get length(){return this.end-this.start}};s(er,"LazySpan");var R=class{constructor(r,e,t,o,a,d){this.lookbehind=19;this.left=19;this.right=19;this.text=r,this.options=e,arguments.length==3?this.lookahead=this.wordbreakPropertyAt(t):(this.lookbehind=t,this.left=o,this.right=a,this.lookahead=d)}next(r){let e=this.wordbreakPropertyAt(r);return new R(this.text,this.options,this.left,this.right,this.lookahead,e)}ignoringRight(r){let e=this.wordbreakPropertyAt(r);return new R(this.text,this.options,this.lookbehind,this.left,this.lookahead,e)}ignoringLookahead(r){let e=this.wordbreakPropertyAt(r);return new R(this.text,this.options,this.lookbehind,this.left,this.right,e)}wordbreakPropertyAt(r){return r<0?19:r>=this.text.length?20:vr(this.text[r])?Or(this.text[r]+this.text[r+1]):Or(this.text[r],this.options)}match(r,e,t,o){var d,i,p,x;let a=(d=r==null?void 0:r.includes(this.lookbehind))!=null?d:!0;return a=a&&((i=e==null?void 0:e.includes(this.left))!=null?i:!0),a=a&&((p=t==null?void 0:t.includes(this.right))!=null?p:!0),a&&((x=o==null?void 0:o.includes(this.lookahead))!=null?x:!0)}propertyMatch(r,e,t,o){let a=s(d=>Ir(d,this.options),"propMapper");return this.match(r==null?void 0:r.map(a),e==null?void 0:e.map(a),t==null?void 0:t.map(a),o==null?void 0:o.map(a))}};s(R,"BreakerContext");function zr(n,r){return!n.split("").map(e=>Or(e,r)).every(e=>e===3||e===1||e===2||e===4)}s(zr,"isNonSpace");function Xr(n,r){if(n.length===0)return[];r&&!r.rules&&(r.rules=[]);let e=[],t,o=0,a=new R(n,r,o),d=0;do{if(t=o,o=i(o),a=a.next(o),a.match(null,[19],null,null)){e.push(t);continue}if(a.match(null,null,[20],null)){e.push(t);break}if(a.match(null,[3],[1],null))continue;let p=[2,3,1];if(a.match(null,p,null,null)){e.push(t);continue}if(a.match(null,null,p,null)){e.push(t);continue}if(a.match(null,[4],[4],null))continue;let x=[13,14,16];for(;a.match(null,null,x,null);)[t,o]=[o,i(o)],a=a.ignoringRight(o);if(a.right===20){e.push(t);break}for(;a.match(null,null,null,x);)o=i(o),a=a.ignoringLookahead(o);let B=[11,15],k=[8,6];if(r!=null&&r.rules){let m=!1;for(let L of r.rules)if(m=L.match(a),m){L.breakIfMatch&&e.push(t);break}if(m)continue}if(a.match(null,B,B,null))continue;let l=[10].concat(k);if(a.match(null,B,l,B)||a.match(B,l,B,null)||a.match(null,[15],[6],null)||a.match(null,[15],[5],[15])||a.match([15],[5],[15],null)||a.match(null,[9],[9],null)||a.match(null,B,[9],null)||a.match(null,[9],B,null))continue;let h=[7].concat(k);if(a.match([9],h,[9],null)||a.match(null,[9],h,[9])||a.match(null,[17],[17],null))continue;let u=[17,9].concat(B);if(!a.match(null,u,[12],null)&&!a.match(null,[12],[12],null)&&!a.match(null,[12],u,null)){if(a.right===18){if(d+=1,d%2==1)continue}else d=0;e.push(t)}}while(t<n.length);return e;function i(p){return p>=n.length?n.length:vr(n[p])?p+2:p+1}}s(Xr,"findBoundaries");function vr(n){let r=n.charCodeAt(0);return r>=55296&&r<=56319}s(vr,"isStartOfSurrogatePair");function Or(n,r){if(r!=null&&r.propertyMapping){let t=r.propertyMapping(n);if(t)return Ir(t,r)}let e=n.codePointAt(0);return Lr(e,0,kr.length-1)}s(Or,"property");function Ir(n,r){var o,a;let e=s(d=>d.toLowerCase()==n.toLowerCase(),"matcher"),t=(a=(o=r==null?void 0:r.customProperties)==null?void 0:o.findIndex(e))!=null?a:-1;return t!=-1?-t-1:Mr.findIndex(e)}s(Ir,"propertyVal");function Lr(n,r,e){if(e<r)return 0;let t=r+~~((e-r)/2),o=kr[t],a=kr[t+1],d=a?a[0]:1/0;return n<o[0]?Lr(n,r,t-1):n>=d?Lr(n,t+1,e):o[1]}s(Lr,"searchForProperty");b();var Ur=12,w=class{constructor(r,e){this.root=r,this.prefix=e}*children(){let r=this.root;if(r.type=="internal"){for(let e of r.values){let t=r.children[e];if(_(e))if(t.type=="internal"){let o=t;for(let a of o.values){let d=this.prefix+e+a;yield{char:e+a,traversal:function(){return new w(o.children[a],d)}}}}else{let o=t.entries[0].key;e=e+o[this.prefix.length+1];let a=this.prefix+e;yield{char:e,traversal:function(){return new w(t,a)}}}else{if(xr(e))continue;if(e){let o=this.prefix+e;yield{char:e,traversal:function(){return new w(t,o)}}}else continue}}return}else{let e=this.prefix,t=r.entries.filter(function(o){return o.key!=e&&e.length<o.key.length});for(let{key:o}of t){let a=o[e.length];_(a)&&(a=a+o[e.length+1]),yield{char:a,traversal:function(){return new w(r,e+a)}}}return}}get entries(){if(this.root.type=="leaf"){let r=this.prefix;return this.root.entries.filter(function(t){return t.key==r}).map(function(t){return t.content})}else{let r=this.root.children[S];return r&&r.type=="leaf"?r.entries.map(function(e){return e.content}):[]}}};s(w,"Traversal");var Y=class{constructor(r,e={}){this.languageUsesCasing=e.languageUsesCasing,this.applyCasing=e.applyCasing,this._trie=new hr(r.root,r.totalWeight,e.searchTermToKey||Zr),this.breakWords=e.wordBreaker||F,this.punctuation=e.punctuation}configure(r){var e;return this.configuration={leftContextCodePoints:r.maxLeftContextCodePoints,rightContextCodePoints:(e=r.maxRightContextCodePoints)!=null?e:0}}toKey(r){return this._trie.toKey(r)}predict(r,e){if(!r.insert&&!e.left&&!e.right&&e.startOfBuffer&&e.endOfBuffer)return d(this._trie.firstN(Ur).map(({text:i,p})=>({transform:{insert:i,deleteLeft:0},displayAs:i,p})));let t=C(r,e),o=r.deleteLeft-r.insert.kmwLength(),a=rr(this.breakWords,t);return d(this._trie.lookup(a).map(({text:i,p})=>U({insert:i,deleteLeft:o+a.kmwLength()},p)));function d(i){let p=[];for(let x of i)p.push({sample:x,p:x.p});return p}}get wordbreaker(){return this.breakWords}traverseFromRoot(){return new w(this._trie.root,"")}};s(Y,"TrieModel");var hr=class{constructor(r,e,t){this.root=r,this.toKey=t,this.totalWeight=e}lookup(r){let e=this.toKey(r),t=Rr(this.root,e);return t===null?[]:_r(t,e,this.totalWeight)}firstN(r){return _r(this.root,"",this.totalWeight,r)}};s(hr,"Trie");function Rr(n,r,e=0){if(n.type==="leaf"||e===r.length)return n;let t=r[e];return n.children[t]?Rr(n.children[t],r,e+1):null}s(Rr,"findPrefix");function _r(n,r,e,t=Ur){let o=new c(function(d,i){return(i?i.weight:0)-(d?d.weight:0)}),a=[];if(n.type==="leaf"){for(let d of n.entries)if(d.key.indexOf(r)==0){let{content:i,weight:p}=d;if(a.push({text:i,p:p/e}),a.length>=t)return a}}else{o.enqueue(n);let d;for(;d=o.dequeue();)if(Yr(d))if(d.type==="leaf")o.enqueueAll(d.entries);else{let i=d;o.enqueueAll(d.values.map(p=>i.children[p]))}else if(a.push({text:d.content,p:d.weight/e}),a.length>=t)return a}return a}s(_r,"getSortedResults");function Yr(n){return"type"in n}s(Yr,"isNode");function Zr(n){return n.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase()}s(Zr,"defaultSearchTermToKey");var Z=class{constructor(r){r=r||{},this._futureSuggestions=r.futureSuggestions?r.futureSuggestions.slice():[],r.punctuation&&(this.punctuation=r.punctuation)}configure(r){return this.configuration={leftContextCodePoints:r.maxLeftContextCodePoints,rightContextCodePoints:r.maxRightContextCodePoints},this.configuration}predict(r,e,t){let o=s(function(d){let i=[],p=d.length;for(let x of d)i.push({sample:x,p:1});return i},"makeUniformDistribution");if(t)return o(t);let a=this._futureSuggestions.shift();return a?o(a):[]}};s(Z,"DummyModel");var dr={};mr(dr,{ClassicalDistanceCalculation:()=>P,ContextTracker:()=>M,QUEUE_NODE_COMPARATOR:()=>lr,SearchNode:()=>T,SearchResult:()=>or,SearchSpace:()=>f,TrackedContextState:()=>N,TrackedContextSuggestion:()=>ur,TrackedContextToken:()=>D});var P=class{constructor(r){this.diagonalWidth=2;this.inputSequence=[];this.matchSequence=[];if(r){let e=r.resolvedDistances.length;this.resolvedDistances=Array(e);for(let t=0;t<e;t++)this.resolvedDistances[t]=r.resolvedDistances[t].slice(0);this.inputSequence=r.inputSequence.slice(0),this.matchSequence=r.matchSequence.slice(0),this.diagonalWidth=r.diagonalWidth}else this.resolvedDistances=[]}getTrueIndex(r,e,t){let o={row:r,col:e-r+t,sparse:!1};return(o.col<0||o.col>2*t)&&(o.sparse=!0),o}getCostAt(r,e,t=this.diagonalWidth){if(r<0||e<0)return r==-1&&e>=-1?e+1:e==-1&&r>=-1?r+1:Number.MAX_VALUE;let o=this.getTrueIndex(r,e,t);return o.sparse?Number.MAX_VALUE:this.resolvedDistances[o.row][o.col]}getFinalCost(){let r=this,e=r.getHeuristicFinalCost();for(;e>r.diagonalWidth;)r=r.increaseMaxDistance(),e=r.getHeuristicFinalCost();return e}getHeuristicFinalCost(){return this.getCostAt(this.inputSequence.length-1,this.matchSequence.length-1)}hasFinalCostWithin(r){let e=this,t=e.getHeuristicFinalCost(),o=this.diagonalWidth;do{if(t<=r)return!0;if(o<r)e=e.increaseMaxDistance(),o++,t=e.getHeuristicFinalCost();else break}while(!0);return!1}editPath(r=this.inputSequence.length-1,e=this.matchSequence.length-1){let t=this.getCostAt(r,e),o=null,a=null,d=this.getCostAt(r,e-1),i=this.getCostAt(r-1,e),p=this.getCostAt(r-1,e-1),[x,B]=P.getTransposeParent(this,r,e);if(x>=0&&B>=0){let k=1;if(o=["transpose-start"],x!=r-1){let l=r-x-1;o=o.concat(Array(l).fill("transpose-delete")),k+=l}else{let l=e-B-1;o=o.concat(Array(l).fill("transpose-insert")),k+=l}o.push("transpose-end"),this.getCostAt(x-1,B-1)!=t-k&&(o=null),a=[x-1,B-1]}return o||(p==t-1?(o=["substitute"],a=[r-1,e-1]):d==t-1?(o=["insert"],a=[r,e-1]):i==t-1?(o=["delete"],a=[r-1,e]):(o=["match"],a=[r-1,e-1])),a[0]>=0&&a[1]>=0?this.editPath(a[0],a[1]).concat(o):a[0]>-1?Array(a[0]+1).fill("delete").concat(o):a[1]>-1?Array(a[1]+1).fill("insert").concat(o):o}static getTransposeParent(r,e,t){if(e<0||t<0||r.inputSequence[e].key==r.matchSequence[t].key)return[-1,-1];let o=-1;for(let d=e-1;d>=0;d--)if(r.inputSequence[d].key==r.matchSequence[t].key){o=d;break}let a=-1;for(let d=t-1;d>=0;d--)if(r.matchSequence[d].key==r.inputSequence[e].key){a=d;break}return[o,a]}static initialCostAt(r,e,t,o,a){var d=r.inputSequence[e].key==r.matchSequence[t].key?0:1,i=r.getCostAt(e-1,t-1)+d,p=o||r.getCostAt(e,t-1)+1,x=a||r.getCostAt(e-1,t)+1,B=Number.MAX_VALUE;if(e>0&&t>0){let[k,l]=P.getTransposeParent(r,e,t);B=r.getCostAt(k-1,l-1)+(e-k-1)+1+(t-l-1)}return Math.min(i,x,p,B)}getSubset(r,e){let t=new P(this);if(r>this.inputSequence.length||e>this.matchSequence.length)throw"Invalid dimensions specified for trim operation";t.inputSequence.splice(r),t.matchSequence.splice(e),t.resolvedDistances.splice(r);let o=this.getTrueIndex(r-1,e-1,this.diagonalWidth);for(let a=o.col;a<=2*this.diagonalWidth;a++){let d=o.row-(a-o.col);if(d<0)break;if(a<0)t.resolvedDistances[d]=Array(2*t.diagonalWidth+1).fill(Number.MAX_VALUE);else{let i=2*this.diagonalWidth-a,p=t.resolvedDistances[d].splice(0,a+1),x=Array(i).fill(Number.MAX_VALUE);t.resolvedDistances[d]=p.concat(x)}}return t}static forDiagonalOfAxis(r,e,t,o){let a=t-e<r?t-e+r:2*r,d=e-r,i=d<0?0:d;for(let p=i-d;p<=a;p++)o(d+p,p)}addInputChar(r){let e=new P(this),t=e.inputSequence.length;e.inputSequence.push(r);let o=Array(2*e.diagonalWidth+1).fill(Number.MAX_VALUE);return e.resolvedDistances[t]=o,e.matchSequence.length==0||P.forDiagonalOfAxis(e.diagonalWidth,t,e.matchSequence.length-1,function(a,d){o[d]=P.initialCostAt(e,t,a)}),e}addMatchChar(r){let e=new P(this),t=e.matchSequence.length;return e.matchSequence.push(r),e.inputSequence.length==0||P.forDiagonalOfAxis(e.diagonalWidth,t,e.inputSequence.length-1,function(o,a){var d=e.resolvedDistances[o];d[2*e.diagonalWidth-a]=P.initialCostAt(e,o,t)}),e}increaseMaxDistance(){let r=new P(this);if(r.diagonalWidth++,r.inputSequence.length<1||r.matchSequence.length<1)return r;function e(o,a,d,i){let p=2*(r.diagonalWidth-1),x=d.length-1;p=p<x-o?p:x-o;for(let B=0;B<=p;B++)a==d[o+B].key&&i(o+B,B)}s(e,"forPossibleTranspositionsInDiagonal");for(let o=0;o<r.inputSequence.length;o++){let a=Number.MAX_VALUE,d=o-r.diagonalWidth;if(d>=0){let p=d==0?o+2:Number.MAX_VALUE;a=P.initialCostAt(r,o,d,p,void 0);let x=a;if(d<r.matchSequence.length-1){P.propagateUpdateFrom(r,o,d+1,x+1,0);let B=o+2;if(o+2<this.inputSequence.length){let k=r.inputSequence[o+1].key;e(d+3,k,r.matchSequence,function(l,h){P.propagateUpdateFrom(r,B,l,x+h+2,h)})}}}let i=Number.MAX_VALUE;if(d=o+r.diagonalWidth,d<r.matchSequence.length){let p=o==0?d+2:Number.MAX_VALUE;var t=r.getCostAt(o,d-1,this.diagonalWidth)+1;i=P.initialCostAt(r,o,d,t,p);let x=i;if(o<r.inputSequence.length-1){P.propagateUpdateFrom(r,o+1,d,x+1,2*this.diagonalWidth);let B=d+2;if(d+2<this.matchSequence.length){let k=r.matchSequence[o+1].key;e(o+3,k,r.inputSequence,function(l,h){let u=2*(r.diagonalWidth-1)-h;P.propagateUpdateFrom(r,l,B,x+h+2,u)})}}}r.resolvedDistances[o]=[a].concat(r.resolvedDistances[o],i)}return r}static propagateUpdateFrom(r,e,t,o,a){if(o<r.resolvedDistances[e][a])r.resolvedDistances[e][a]=o;else return;let d=e<r.inputSequence.length-1,i=t<r.matchSequence.length-1;if(a<2*(r.diagonalWidth-1)&&i){let p=o+1;this.propagateUpdateFrom(r,e,t+1,p,a+1)}if(a>0&&d){let p=o+1;this.propagateUpdateFrom(r,e+1,t,p,a-1)}if(d&&i){let p=o+(r.inputSequence[e+1].key==r.matchSequence[t+1].key?0:1);this.propagateUpdateFrom(r,e+1,t+1,p,a);let x=-1;for(let k=e+2;k<r.inputSequence.length;k++)if(r.inputSequence[k].key==r.matchSequence[t+1].key){x=k;break}let B=-1;for(let k=t+2;k<r.matchSequence.length;k++)if(r.matchSequence[k].key==r.inputSequence[e+1].key){B=k;break}if(x>0&&B>0){let k=o+(x-e-2)+1+(B-t-2);this.propagateUpdateFrom(r,x,B,k,r.diagonalWidth-1+B-x)}}}get mapKey(){let r=this.inputSequence.map(t=>t.key).join(""),e=this.matchSequence.map(t=>t.key).join("");return r+S+e+S+this.diagonalWidth}get lastInputEntry(){return this.inputSequence[this.inputSequence.length-1]}get lastMatchEntry(){return this.matchSequence[this.matchSequence.length-1]}static computeDistance(r,e,t=1){let o=new P;t=t||1,o.diagonalWidth=t;for(let a=0;a<r.length;a++)o=o.addInputChar(r[a]);for(let a=0;a<e.length;a++)o=o.addMatchChar(e[a]);return o}};s(P,"ClassicalDistanceCalculation");var lr=s(function(n,r){return n.currentCost-r.currentCost},"QUEUE_NODE_COMPARATOR"),T=class{constructor(r,e){this.toKey=s(r=>r,"toKey");if(e=e||(t=>t),r instanceof T){let t=r;this.calculation=t.calculation,this.currentTraversal=t.currentTraversal,this.priorInput=t.priorInput,this.toKey=t.toKey}else this.calculation=new P,this.currentTraversal=r,this.priorInput=[],this.toKey=e}get knownCost(){return this.calculation.getHeuristicFinalCost()}get inputSamplingCost(){if(this._inputCost!==void 0)return this._inputCost;{let r=f.MIN_KEYSTROKE_PROBABILITY;return this._inputCost=this.priorInput.map(e=>e.p>r?e.p:r).reduce((e,t)=>e-Math.log(t),0),this._inputCost}}get currentCost(){return f.EDIT_DISTANCE_COST_SCALE*this.knownCost+this.inputSamplingCost}buildInsertionEdges(){let r=[];for(let e of this.currentTraversal.children()){let t=e.traversal(),o={key:e.char,traversal:t},a=this.calculation.addMatchChar(o),d=new T(this);d.calculation=a,d.priorInput=this.priorInput,d.currentTraversal=t,r.push(d)}return r}buildDeletionEdges(r){let e=[];for(let t of r){if(t.p<r[0].p*Math.exp(-f.EDIT_DISTANCE_COST_SCALE))break;let o=this.calculation,a=t.sample;a.deleteLeft&&(o=o.getSubset(o.inputSequence.length-a.deleteLeft,o.matchSequence.length));let d=this.priorInput.slice(0);d.push(t);for(let p=0;p<a.insert.length;p++){let x=a.insert[p];_(x)&&(p++,x=x+a.insert[p]);let B=this.toKey(x);B&&(o=o.addInputChar({key:B}))}let i=new T(this);i.calculation=o,i.priorInput=d,e.push(i)}return e}buildSubstitutionEdges(r){let e=this.buildDeletionEdges(r),t=[];for(let o of this.currentTraversal.children())for(let a of e){let d=o.traversal(),i={key:o.char,traversal:d},p=a.calculation.addMatchChar(i),x=new T(this);x.calculation=p,x.priorInput=a.priorInput,x.currentTraversal=d,t.push(x)}return t}get mapKey(){let r=this.priorInput.map(t=>"+"+t.sample.insert+"-"+t.sample.deleteLeft).join(""),e=this.calculation.matchSequence.map(t=>t.key).join("");return r+S+e}get isFullReplacement(){return this.knownCost&&this.knownCost==this.priorInput.length}};s(T,"SearchNode");var $=class{constructor(r,e){this.processed=[];if(typeof r=="number"){this.index=r,this.correctionQueue=new c(lr,e);return}else this.index=r.index,this.processed=[].concat(r.processed),this.correctionQueue=new c(r.correctionQueue)}increaseMaxEditDistance(){let r=this.correctionQueue.toArray();r.forEach(function(e){e.calculation=e.calculation.increaseMaxDistance()}),this.correctionQueue=new c(lr,r)}};s($,"SearchSpaceTier");var or=class{constructor(r){this.resultNode=r}get inputSequence(){return this.resultNode.priorInput}get matchSequence(){return this.resultNode.calculation.matchSequence}get matchString(){return this.matchSequence.map(r=>r.key).join("")}get knownCost(){return this.resultNode.knownCost}get inputSamplingCost(){return this.resultNode.inputSamplingCost}get totalCost(){return this.resultNode.currentCost}get finalTraversal(){return this.resultNode.currentTraversal}};s(or,"SearchResult");var ar=class{constructor(r){this.tierOrdering=[];this.inputSequence=[];this.minInputCost=[];this.returnedValues={};this.processedEdgeSet={};if(this.buildQueueSpaceComparator(),r instanceof ar){this.inputSequence=[].concat(r.inputSequence),this.minInputCost=[].concat(r.minInputCost),this.rootNode=r.rootNode,this.completedPaths=[].concat(r.completedPaths),this.returnedValues=Q({},r.returnedValues),this.processedEdgeSet=Q({},r.processedEdgeSet),this.tierOrdering=r.tierOrdering.map(o=>new $(o)),this.selectionQueue=new c(this.QUEUE_SPACE_COMPARATOR,this.tierOrdering);return}let e=r;if(e){if(!e.traverseFromRoot)throw"The provided model does not implement the \`traverseFromRoot\` function, which is needed to support robust correction searching."}else throw"The LexicalModel parameter must not be null / undefined.";this.selectionQueue=new c(this.QUEUE_SPACE_COMPARATOR),this.rootNode=new T(e.traverseFromRoot(),e.toKey?e.toKey.bind(e):null),this.completedPaths=[this.rootNode];let t=new $(0,[this.rootNode]);this.tierOrdering.push(t),this.selectionQueue.enqueue(t)}buildQueueSpaceComparator(){let r=this;this.QUEUE_SPACE_COMPARATOR=function(e,t){let o=e.correctionQueue.peek(),a=t.correctionQueue.peek(),d=e.index,i=t.index,p=0,x=1;if(i<d){let B=i;i=d,d=B,x=-1}for(let B=d;B<i;B++)p=p+r.minInputCost[B];return o&&a?o.currentCost-a.currentCost+x*p:a?1:-1}}increaseMaxEditDistance(){this.tierOrdering.forEach(function(r){r.increaseMaxEditDistance()})}get correctionsEnabled(){return!!this.inputSequence.find(r=>r.length>1)}addInput(r){this.inputSequence.push(r),this.minInputCost.push(-Math.log(r[0].p));let e=[],t=this.completedPaths.map(function(a){let d=a.buildDeletionEdges(r),i=a.buildSubstitutionEdges(r);return d.concat(i)});this.completedPaths=[],this.returnedValues={},t.forEach(function(a){e=e.concat(a)});let o=new $(this.tierOrdering.length,e);this.tierOrdering.push(o),this.selectionQueue.enqueue(o)}removeLastInput(){}hasNextMatchEntry(){let r=this.selectionQueue.peek();return r?r.correctionQueue.count>0:!1}handleNextNode(){if(!this.hasNextMatchEntry())return{type:"none"};let r=this.selectionQueue.dequeue(),e=r.correctionQueue.dequeue(),t={type:"intermediate",cost:e.currentCost};if(this.processedEdgeSet[e.mapKey])return this.selectionQueue.enqueue(r),t;this.processedEdgeSet[e.mapKey]=!0;let o=!1;if(e.knownCost>2)return t;e.knownCost==2&&(o=!0);let a=0;for(let d=0;d<=r.index;d++)a+=this.minInputCost[d];if(e.currentCost>a+2.5*ar.EDIT_DISTANCE_COST_SCALE)return t;if(!o){let d=e.buildInsertionEdges();r.correctionQueue.enqueueAll(d)}if(r.index==this.tierOrdering.length-1)return this.completedPaths.push(e),this.selectionQueue.enqueue(r),{type:"complete",cost:e.currentCost,finalNode:e};{let d=this.tierOrdering[r.index+1],i=d.index,p=[];o||(p=e.buildDeletionEdges(this.inputSequence[i-1]));let x=e.buildSubstitutionEdges(this.inputSequence[i-1]);d.correctionQueue.enqueueAll(p.concat(x)),this.selectionQueue=new c(this.QUEUE_SPACE_COMPARATOR,this.tierOrdering)}return t}*getBestMatches(r){let e=this,t={},o;r==0?o=1/0:r==null||Number.isNaN(r)?o=ar.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL:o=r;class a{constructor(h,u){this.largestIntervals=[0];this.loopStart=this.start=Date.now(),this.maxExecutionTime=h,this.maxTrueTime=u}startLoop(){this.loopStart=Date.now()}markIteration(){let u=Date.now()-this.loopStart;this.executionTime+=u,u&&u>this.largestIntervals[0]&&(this.largestIntervals.length>2?this.largestIntervals[0]=u:this.largestIntervals.push(u),this.largestIntervals.sort(),this.updateOutliers())}updateOutliers(){this.largestIntervals.length>2&&this.largestIntervals[2]>=2*(this.largestIntervals[0]+this.largestIntervals[1])&&(this.executionTime-=this.largestIntervals[2],this.largestIntervals.pop())}shouldTimeout(){return Date.now()-this.start>this.maxTrueTime?!0:this.executionTime>this.maxExecutionTime}resetOutlierCheck(){this.largestIntervals=[]}}s(a,"ExecutionTimer");class d{constructor(){this.currentCost=Number.MIN_SAFE_INTEGER;this.entries=[]}checkAndAdd(h){var u=null;h.currentCost>this.currentCost&&(u=this.tryFinalize(),this.currentCost=h.currentCost);let m=h.calculation.matchSequence.map(L=>L.key).join("");return e.returnedValues[m]||(e.returnedValues[m]=h),t[m]||(this.entries.push(new or(h)),t[m]=h),u}tryFinalize(){var h=null;return this.entries.length>0&&(h=this.entries,this.entries=[]),h}}s(d,"BatchingAssistant");let i=new d,p=new a(o*1.5,o),x=Object.values(this.returnedValues);if(x.length>0){let l=new c(lr,x);for(p.startLoop();l.count>0;){let u=l.dequeue();if(u.isFullReplacement)continue;let m=i.checkAndAdd(u);p.markIteration(),m&&(yield m)}let h=i.tryFinalize();h&&(yield h)}p.resetOutlierCheck(),p.startLoop();let B=!1;do{let l;do l=this.handleNextNode(),p.markIteration(),p.shouldTimeout()&&(B=!0);while(!B&&l.type=="intermediate");let h;if(l.type=="none")break;if(l.type=="complete"){if(l.finalNode.isFullReplacement)break;h=i.checkAndAdd(l.finalNode)}h&&(yield h)}while(!B&&this.hasNextMatchEntry());let k=i.tryFinalize();return k&&(yield k),null}},f=ar;s(f,"SearchSpace"),f.EDIT_DISTANCE_COST_SCALE=5,f.MIN_KEYSTROKE_PROBABILITY=1e-4,f.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL=33;var g=class{static isWhitespace(r){let e=/^[\\u0009\\u000A\\u000D\\u0020\\u00a0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u200b\\u2028\\u2029\\u202f\\u205f\\u3000]+$/i;return r.insert.match(e)!=null}static isBackspace(r){return r.insert==""&&r.deleteLeft>0&&!r.deleteRight}static isEmpty(r){return r.insert==""&&r.deleteLeft==0&&!r.deleteRight}};s(g,"TransformUtils");function qr(n,r){let e=[];for(let t=0;t<n.kmwLength();t++){let a={insert:n.kmwCharAt(t),deleteLeft:0,id:r};e.push(a)}return e}s(qr,"textToCharTransforms");var ur=class{};s(ur,"TrackedContextSuggestion");var D=class{constructor(){this.transformDistributions=[];this.activeReplacementId=-1}get currentText(){return this.replacementText===void 0||this.replacementText===null?this.raw:this.replacementText}get replacement(){let r=this.activeReplacementId;return this.replacements.find(function(e){return e.suggestion.id==r})}revert(){delete this.activeReplacementId}};s(D,"TrackedContextToken");var N=class{constructor(r){this.searchSpace=[];if(r instanceof N){let e=r;this.tokens=e.tokens.map(function(o){let a=new D;return a.raw=o.raw,a.replacements=[].concat(o.replacements),a.activeReplacementId=o.activeReplacementId,a.transformDistributions=[].concat(o.transformDistributions),o.replacementText&&(a.replacementText=o.replacementText),a}),this.indexOffset=0;let t=this.model=r.model;this.taggedContext=r.taggedContext,t!=null&&t.traverseFromRoot&&(this.searchSpace=r.searchSpace.map(o=>new f(o)))}else{let e=r;this.tokens=[],this.indexOffset=Number.MIN_SAFE_INTEGER,this.model=e,e&&e.traverseFromRoot&&(this.searchSpace=[new f(e)])}}get head(){return this.tokens[0]}get tail(){return this.tokens[this.tokens.length-1]}popHead(){this.tokens.splice(0,2),this.indexOffset-=1}pushTail(r){this.model&&this.model.traverseFromRoot?this.searchSpace=[new f(this.model)]:this.searchSpace=[],this.tokens.push(r);let e=this;e.searchSpace.length>0&&r.transformDistributions.forEach(t=>e.searchSpace[0].addInput(t))}pushWhitespaceToTail(r=null){let e=new D;e.transformDistributions=r?[r]:[],e.raw=null,this.tokens.push(e)}replaceTailForBackspace(r,e){this.tokens.pop();let t=qr(r,e).map(function(a){return[{sample:a,p:1}]}),o=new D;o.raw=r,o.transformDistributions=t,this.pushTail(o)}updateTail(r,e){let t=this.tail;e=e||(e===""?"":t.raw),r&&r.length>0&&(t.transformDistributions.push(r),this.searchSpace&&this.searchSpace.forEach(o=>o.addInput(r))),t.raw=e}toRawTokenization(){let r=[];for(let e of this.tokens)e.currentText!==null&&r.push(e.currentText);return r}};s(N,"TrackedContextState");var Cr=class{constructor(r=Cr.DEFAULT_ARRAY_SIZE){this.currentHead=0;this.currentTail=0;this.circle=Array(r)}get count(){let r=this.currentHead-this.currentTail;return r<0&&(r=r+this.circle.length),r}get maxCount(){return this.circle.length}get oldest(){if(this.count!=0)return this.item(0)}get newest(){if(this.count!=0)return this.item(this.count-1)}enqueue(r){var e=null;let t=(this.currentHead+1)%this.maxCount;return t==this.currentTail&&(e=this.circle[this.currentTail],this.currentTail=(this.currentTail+1)%this.maxCount),this.circle[this.currentHead]=r,this.currentHead=t,e}dequeue(){if(this.currentTail==this.currentHead)return null;{let r=this.circle[this.currentTail];return this.currentTail=(this.currentTail+1)%this.maxCount,r}}popNewest(){if(this.currentTail==this.currentHead)return null;{let r=this.circle[this.currentHead];return this.currentHead=(this.currentHead-1+this.maxCount)%this.maxCount,r}}item(r){if(r>=this.count)throw"Invalid array index";let e=(this.currentTail+r)%this.maxCount;return this.circle[e]}},nr=Cr;s(nr,"CircularArray"),nr.DEFAULT_ARRAY_SIZE=5;var M=class extends nr{static attemptMatchContext(r,e,t){let o=e.toRawTokenization(),d=P.computeDistance(o.map(A=>({key:A})),r.map(A=>({key:A})),1).editPath(),i=!1,p=!1;if(d.length>1){if(d[0]=="insert"&&!(d[1]=="substitute"&&d.length==2)||d[0].indexOf("transpose")>=0)return null;d[0]=="delete"&&(i=!0)}let x=d.length-1,B=!1;if(d[x]=="delete"||d[0].indexOf("transpose")>=0||(d[x]=="insert"?p=!0:x>0&&d[x-1]=="insert"&&d[x]=="substitute"&&(p=!0,B=!0),x>0&&d[x-1]=="delete"&&d[x]=="substitute"))return null;for(let A=1;A<d.length-(B?2:1);A++)if(d[A]!="match")return null;let k;p?(B&&(e.tail.replacementText=r[r.length-2]),k=new N(e)):k=t?new N(e):e;let h=t&&Array.isArray(t)?t[0].sample:null;h&&h.insert==""&&h.deleteLeft==0&&!h.deleteRight&&(h=null);let u=h&&g.isWhitespace(h),m=h&&g.isBackspace(h),L=r[r.length-1];function ir(){if(u&&d[x]=="match")return k;m?k.replaceTailForBackspace(L,h.id):k.updateTail(h?t:null,L)}if(s(ir,"maintainLastToken"),d.length>1)if(i&&k.popHead(),p){let A=r[r.length-1],I=new D;I.raw=A,u||!h?(k.pushWhitespaceToTail(t!=null?t:[]),I.transformDistributions=[]):(k.pushWhitespaceToTail(),I.transformDistributions=t?[t]:[]),k.pushTail(I)}else ir();else if(d[x]=="insert"){let A=new D;A.raw=r[0],A.transformDistributions=[t],k.pushTail(A)}else ir();return k}static modelContextState(r,e,t){let o=r.map(function(d){let i=new D;return i.raw=d,i.raw?i.transformDistributions=qr(i.raw).map(function(p){return[{sample:p,p:1}]}):i.transformDistributions=[],i}),a=new N(t);for(o.length>0&&a.pushTail(o.splice(0,1)[0]);o.length>0;)a.pushWhitespaceToTail(),a.pushTail(o.splice(0,1)[0]);if(a.tokens.length==0){let d=new D;d.raw="",a.pushTail(d)}return a}analyzeState(r,e,t){if(!r.traverseFromRoot)throw"This lexical model does not provide adequate data for correction algorithms and context reuse";let o=V(r.wordbreaker||F,e);if(o.left.length>0)for(let d=this.count-1;d>=0;d--){let i=this.item(d),p=i.taggedContext;if(p&&t&&t.length>0){if(C(t[0].sample,p).left!=e.left)continue}else if((p==null?void 0:p.left)!=e.left)continue;let x=M.attemptMatchContext(o.left,this.item(d),t);if(x)return this.newest!=x&&this.newest!=i&&this.enqueue(i),x.taggedContext=e,x!=this.item(d)&&this.enqueue(x),x}let a=M.modelContextState(o.left,t,r);return a.taggedContext=e,this.enqueue(a),a}clearCache(){for(;this.count>0;)this.dequeue()}};s(M,"ContextTracker");var H=class{constructor(r,e){this.SUGGESTION_ID_SEED=0;this.testMode=!1;this.lexicalModel=r,r.traverseFromRoot&&(this.contextTracker=new M),this.punctuation=H.determinePunctuationFromModel(r),this.testMode=!!e}predictFromCorrections(r,e){let t=[];for(let o of r){let d=this.lexicalModel.predict(o.sample,e).map(function(i){let p=o.sample,x=o.p;return p.id!==void 0&&(i.sample.transformId=p.id),{sample:i.sample,p:i.p*x}},this);t=t.concat(d)}return t}predict(r,e){let t=[],o=this.lexicalModel,a=this.punctuation;r instanceof Array?r.length==0&&r.push({sample:{insert:"",deleteLeft:0},p:1}):r=[{sample:r,p:1}];let d=r.sort(function(y,W){return W.p-y.p})[0].sample,i=g.isWhitespace(d),p=g.isBackspace(d),x=C(d,e),B=this.wordbreak(x),k=null,l=[],h,u=null;if(this.contextTracker){let y=this.contextTracker.analyzeState(this.lexicalModel,e,null);u=this.contextTracker.analyzeState(this.lexicalModel,x,g.isEmpty(d)?null:r);let W=u.searchSpace[0],E=0,O=u.tokens,Pr=O.length,pr=O.length-y.tokens.length;Pr==0||pr>0?(E=0,g.isWhitespace(d)&&(h=d,e=x,y=u)):pr<0?E=this.wordbreak(x).kmwLength()+d.deleteLeft:E=this.wordbreak(e).kmwLength();let Kr=O[O.length-1].transformDistributions.length<=1;if(W.correctionsEnabled){let G,Qr=this.testMode?0:f.DEFAULT_ALLOTTED_CORRECTION_TIME_INTERVAL;for(let Fr of W.getBestMatches(Qr)){let Dr=Fr.map(function(K){let cr=K.matchString,Tr;K.inputSequence.length>0?Tr=K.inputSequence[K.inputSequence.length-1].sample:Tr=d;let Vr={insert:cr,deleteLeft:E,id:d.id},br=K.totalCost;return Kr&&(br*=H.SINGLE_CHAR_KEY_PROB_EXPONENT),{sample:Vr,p:Math.exp(-br)}},this),Sr=this.predictFromCorrections(Dr,e);Sr.length>0&&G===void 0&&(G=-Math.log(Dr[0].p)),l=l.concat(Sr);let Wr=Fr[0].totalCost;if(Wr>=G+8)break;if(l.length>=H.MAX_SUGGESTIONS){if(Wr>=G+4)break;if(l.sort(function(K,cr){return cr.p-K.p}),l[H.MAX_SUGGESTIONS-1].p>Math.exp(-Wr))break}}}else{let G={sample:{insert:this.wordbreak(x),deleteLeft:E,id:d.id},p:1};l=this.predictFromCorrections([G],e)}}else{let y;i?(y=[{sample:d,p:1}],h=d):y=r.map(W=>{let E=W.sample;return g.isWhitespace(E)&&!i||g.isBackspace(E)&&!p?null:W}),y=y.filter(W=>!!W),l=this.predictFromCorrections(y,e)}let m={},L=null;o.languageUsesCasing&&(L=this.detectCurrentCasing(x));let ir=this.wordbreak(e);for(let y of l){let W=y.sample.displayAs,E=W==B;if(this.lexicalModel.languageUsesCasing&&(E=E||W==this.lexicalModel.applyCasing("lower",B)),E)if(k)k.p&&y.p&&(k.p+=y.p);else{let O=y.sample.transform,Pr={insert:B,deleteLeft:O.deleteLeft,deleteRight:O.deleteRight,id:O.id},pr=U(Pr,y.p);k=this.toAnnotatedSuggestion(pr,"keep",z.noQuotes),k.matchesModel=!0,k.transformId=y.sample.transformId}else{L&&L!="lower"&&(this.applySuggestionCasing(y.sample,ir,L),W=y.sample.displayAs);let O=m[W];O?O.p+=y.p:m[W]=y}}if(!k&&B!=""){let y=Q({},d),W=U(y,1);W.displayAs=B,k=this.toAnnotatedSuggestion(W,"keep"),k.matchesModel=!1}for(let y in m){let W=m[y];t.push(W)}t=t.sort(function(y,W){return W.p-y.p});let A=t.splice(0,H.MAX_SUGGESTIONS).map(function(y){return y.sample.p&&(y.sample["lexical-p"]=y.sample.p,y.sample["correction-p"]=y.p/y.sample.p,y.sample.p=y.p),y.sample});k&&(A=[k].concat(A));let I=this;return A.forEach(function(y){let W=I.tokenize(e);if(W&&W.caretSplitsToken?y.transform.insert+=a.insertAfterWord:e.right?a.insertAfterWord!=""&&e.right.indexOf(a.insertAfterWord)!=0&&(y.transform.insert+=a.insertAfterWord):y.transform.insert+=a.insertAfterWord,h){let E=J(h,y.transform);E.id=y.transformId;let O=y;O.transform=E}y.id=I.SUGGESTION_ID_SEED,I.SUGGESTION_ID_SEED++}),u&&(u.tail.replacements=A.map(function(y){return{suggestion:y,tokenWidth:1}})),A}applySuggestionCasing(r,e,t){let o=e.kmwLength()-r.transform.deleteLeft;o>0&&(r.transform.deleteLeft+=o,r.transform.insert=e.kmwSubstr(0,o)+r.transform.insert),r.transform.insert=this.lexicalModel.applyCasing(t,r.transform.insert),r.displayAs=this.lexicalModel.applyCasing(t,r.displayAs)}toAnnotatedSuggestion(r,e,t=z.default){let o=z,a=o.noQuotes;return(e=="keep"||e=="revert")&&(a=o.useQuotes),{transform:r.transform,transformId:r.transformId,displayAs:o.apply(t,r.displayAs,this.punctuation,a),tag:e,p:r.p}}static determinePunctuationFromModel(r){let e=Jr;if(!r.punctuation)return e;let t=r.punctuation,o=t.insertAfterWord;o!==""&&!o&&(o=e.insertAfterWord);let a=t.quotesForKeepSuggestion;a||(a=e.quotesForKeepSuggestion);let d=t.isRTL;return{insertAfterWord:o,quotesForKeepSuggestion:a,isRTL:d}}acceptSuggestion(r,e,t){let o=r.transform,a=e.left.kmwSubstr(-o.deleteLeft,o.deleteLeft),d=o.insert.kmwLength(),i={insert:a,deleteLeft:d},p=e;t&&(i=J(i,t),p=C(t,p));let x,B=this.tokenize(p);B?(B.left.length>0?x=B.left[B.left.length-1]:x="",x+=B.caretSplitsToken?B.right[0]:""):x=this.wordbreak(p);let k=U(i);k.displayAs=x;let l=this.toAnnotatedSuggestion(k,"revert");if(r.transformId!=null&&(l.transformId=-r.transformId),r.id!=null?l.id=-r.id:(l.id=-this.SUGGESTION_ID_SEED,this.SUGGESTION_ID_SEED++),this.contextTracker){let h=this.contextTracker.newest;h||(h=this.contextTracker.analyzeState(this.lexicalModel,e)),h.tail.activeReplacementId=r.id;let u=C(r.transform,e);this.contextTracker.analyzeState(this.lexicalModel,u)}return l}applyReversion(r,e){let t=this,o=s(function(){let i=C(r.transform,e),p=t.predict({insert:"",deleteLeft:0},i);return p.forEach(function(x){x.transformId=-r.transformId}),p},"fallbackSuggestions");if(!this.contextTracker)return o();let a=!1;for(let i=this.contextTracker.count-1;i>=0;i--)if(this.contextTracker.item(i).tail.activeReplacementId==-r.id){a=!0;break}if(!a)return o();for(;this.contextTracker.newest.tail.activeReplacementId!=-r.id;)this.contextTracker.popNewest();this.contextTracker.newest.tail.revert();let d=this.contextTracker.newest.tail.replacements.map(function(i){return i.suggestion});return d.forEach(function(i){i.transformId=-r.transformId}),d}wordbreak(r){let e=this.lexicalModel;if(e.wordbreaker||!e.wordbreak){let t=e.wordbreaker||F;return X(t,r)}else return e.wordbreak(r)}tokenize(r){let e=this.lexicalModel;return e.wordbreaker?V(e.wordbreaker,r):null}resetContext(r){this.contextTracker&&(this.contextTracker.clearCache(),this.contextTracker.analyzeState(this.lexicalModel,r,null))}detectCurrentCasing(r){var o;let e=this.lexicalModel,t=this.wordbreak(r);if(!e.languageUsesCasing)throw"Invalid attempt to detect casing: languageUsesCasing is set to false";if(!e.applyCasing)throw"Invalid LMLayer state:  languageUsesCasing is set to true, but no applyCasing function exists";return r.casingForm=="upper"||r.casingForm=="initial"?r.casingForm:e.applyCasing("lower",t)==t?"lower":e.applyCasing("upper",t)==t?t.kmwLength()>1?"upper":"initial":e.applyCasing("initial",t)==t?"initial":(o=r.casingForm)!=null?o:null}},q=H;s(q,"ModelCompositor"),q.MAX_SUGGESTIONS=12,q.SINGLE_CHAR_KEY_PROB_EXPONENT=16;var Jr={quotesForKeepSuggestion:{open:"\\u201C",close:"\\u201D"},insertAfterWord:" "};b();var v=class{constructor(r={importScripts:null,postMessage:null}){this._testMode=!1;this._postMessage=r.postMessage||postMessage,this._importScripts=r.importScripts||importScripts,this.setupConfigState()}error(r,e){this.cast("error",{log:r,error:e&&e.stack?e.stack:void 0})}onMessage(r){let{message:e}=r.data;if(!e)throw new Error(\`Missing required 'message' property: \${r.data}\`);let t=r.data;if(t.message=="load"){let o=t,a=!1;if(this._currentModelSource&&o.source.type==this._currentModelSource.type&&(o.source.type=="file"&&o.source.file==this._currentModelSource.file||o.source.type=="raw"&&o.source.code==this._currentModelSource.code)&&(a=!0),a){typeof console!="undefined"&&console.warn("Duplicate model load message detected - squashing!");return}else this._currentModelSource=o.source}else t.message=="unload"&&(this._currentModelSource=null);this.state.handleMessage(t)}cast(r,e){let t=this._postMessage;t(Q({message:r},e))}loadModel(r){try{let e=r.configure(this._platformCapabilities);e.leftContextCodePoints||(e.leftContextCodePoints=e.leftContextCodeUnits),e.rightContextCodePoints||(e.rightContextCodePoints=e.rightContextCodeUnits),e.leftContextCodePoints||(e.leftContextCodePoints=this._platformCapabilities.maxLeftContextCodePoints),e.rightContextCodePoints||(e.rightContextCodePoints=this._platformCapabilities.maxRightContextCodePoints||0),r.languageUsesCasing&&!r.applyCasing&&(r.applyCasing=sr);let t=this.transitionToReadyState(r);e.wordbreaksAfterSuggestions===void 0&&(e.wordbreaksAfterSuggestions=t.punctuation.insertAfterWord!=""),this.cast("ready",{configuration:e})}catch(e){this.error("loadModel failed!",e)}}loadModelFile(r){try{this._importScripts(r)}catch(e){this.error("Error occurred when attempting to load dictionary",e)}}unloadModel(){this.transitionToLoadingState()}setupConfigState(){this.state={name:"unconfigured",handleMessage:r=>{if(r.message!=="config")throw new Error(\`invalid message; expected 'config' but got \${r.message}\`);this._platformCapabilities=r.capabilities,this._testMode=!!r.testMode,this.transitionToLoadingState()}}}transitionToLoadingState(){let r=this;this.state={name:"modelless",handleMessage:e=>{if(e.message!=="load")throw new Error(\`invalid message; expected 'load' but got \${e.message}\`);if(e.source.type=="file")r.loadModelFile(e.source.file);else{let t=e.source.code;new Function("LMLayerWorker","models","correction","wordBreakers",t)(r,yr,dr,tr)}}}}transitionToReadyState(r){let e=new q(r,this._testMode);return this.state={name:"ready",handleMessage:t=>{switch(t.message){case"predict":var{transform:o,context:x}=t,p=e.predict(o,x);this.cast("suggestions",{token:t.token,suggestions:p});break;case"wordbreak":let B=X(r.wordbreaker||F,t.context);this.cast("currentword",{token:t.token,word:B});break;case"unload":this.unloadModel();break;case"accept":var{suggestion:a,context:x,postTransform:d}=t,i=e.acceptSuggestion(a,x,d);this.cast("postaccept",{token:t.token,reversion:i});break;case"revert":var{reversion:i,context:x}=t,p=e.applyReversion(i,x);this.cast("postrevert",{token:t.token,suggestions:p});break;case"reset-context":var{context:x}=t;e.resetContext(x);break;default:throw new Error(\`invalid message; expected one of {'predict', 'wordbreak', 'accept', 'revert', 'reset-context', 'unload'} but got \${t.message}\`)}},compositor:e},e}static install(r){let e=new v({postMessage:r.postMessage,importScripts:r.importScripts.bind(r)});return r.onmessage=e.onMessage.bind(e),e.self=r,r.LMLayerWorker=e,r.models=yr,r.correction=dr,r.wordBreakers=tr,e}};s(v,"LMLayerWorker");typeof self!="undefined"&&"postMessage"in self&&"importScripts"in self?v.install(self):window.LMLayerWorker=v;})();
//# sourceMappingURL=worker-main.min.js.map
`,
      Nc = "";
    var kt = class {
      static constructInstance() {
        return new Worker(this.asBlobURI(kc));
      }
      static asBlobURI(t) {
        let e = as(t);
        e +=
          `
` + Nc;
        let n = new Blob([e], { type: "text/javascript" });
        return URL.createObjectURL(n);
      }
    };
    a(kt, "DefaultWorker");
    var ai = class {
      constructor(t, e) {
        (this.suggestions = t), (this.transcriptionID = e);
      }
    };
    a(ai, "ReadySuggestions");
    var Nt = class extends Tc.default {
      constructor(e, n, i = !1) {
        super();
        this._mayPredict = !0;
        this._mayCorrect = !0;
        this._state = "inactive";
        this.recentTranscriptions = n;
        let s = {
          maxLeftContextCodePoints: 64,
          maxRightContextCodePoints: i ? 0 : 64,
        };
        !e || (this.lmEngine = new ft(s, e));
      }
      get activeModel() {
        return this.currentModel;
      }
      get isConfigured() {
        return !!this.configuration;
      }
      get state() {
        return this._state;
      }
      unloadModel() {
        this.lmEngine.unloadModel(),
          delete this.currentModel,
          delete this.configuration,
          (this._state = "inactive"),
          this.emit("statechange", "inactive");
      }
      loadModel(e) {
        if (!e) throw new Error("Null reference not allowed.");
        let n = e.path ? "file" : "raw",
          i = n == "file" ? e.path : e.code;
        return (
          (this.currentModel = e),
          this.mayPredict &&
            ((this._state = "active"), this.emit("statechange", "active")),
          this.lmEngine
            .loadModel(i, n)
            .then((s) => {
              (this.configuration = s),
                this.mayPredict &&
                  ((this._state = "configured"),
                  this.emit("statechange", "configured"));
            })
            .catch((s) => {
              let c;
              s instanceof Error ? (c = s.message) : (c = String(s)),
                console.error("Could not load model '" + e.id + "': " + c),
                (this.currentModel = null),
                (this._state = "inactive"),
                this.emit("statechange", "inactive");
            })
        );
      }
      invalidateContext(e, n) {
        if (
          (this.emit("invalidatesuggestions", "context"),
          !this.currentModel || !this.configuration)
        )
          return Promise.resolve([]);
        if (this.isActive) {
          if (e) {
            let i = e.buildTranscriptionFrom(e, null, !1);
            return this.predict_internal(i, !0, n);
          }
        } else return Promise.resolve([]);
      }
      wordbreak(e, n) {
        if (!this.isActive) return null;
        let i = new Be(E.from(e, !1), this.configuration, n);
        return this.lmEngine.wordbreak(i);
      }
      predict(e, n) {
        return !this.isActive || !this.currentModel || !this.configuration
          ? null
          : (this.emit("invalidatesuggestions", "new"),
            this.predict_internal(e, !1, n));
      }
      applySuggestion(e, n, i) {
        if (!n)
          throw "Accepting suggestions requires a destination OutputTarget instance.";
        if (!this.isConfigured)
          return (
            console.warn(
              "Could not apply suggestion; the corresponding model has been unloaded"
            ),
            null
          );
        let s = this.getPredictionState(e.transformId);
        if (s) {
          let c = E.from(s.preInput, !1);
          c.apply(e.transform);
          let l = c.buildTransformFrom(n);
          n.apply(l),
            this.emit("suggestionapplied", n),
            E.from(s.preInput, !1).apply(s.transform);
          let B = new Be(s.preInput, this.configuration, i()),
            d = this.lmEngine.acceptSuggestion(e, B, s.transform);
          return (
            (d = d.then((g) => {
              let Q = {
                transform: s.transform,
                transformId: -s.token,
                displayAs: g.displayAs,
                id: g.id,
                tag: g.tag,
              };
              return this.predictFromTarget(n, i()), Q;
            })),
            d
          );
        } else return console.warn("Could not apply the Suggestion!"), null;
      }
      applyReversion(e, n) {
        if (!n)
          throw "Accepting suggestions requires a destination OutputTarget instance.";
        let i = this.getPredictionState(-e.transformId);
        if (!i) {
          console.warn("Could not apply the Suggestion!");
          return;
        }
        let s = E.from(i.preInput, !1);
        s.apply(e.transform);
        let c = s.buildTransformFrom(n);
        return (
          n.apply(c),
          this.lmEngine
            .revertSuggestion(e, new Be(i.preInput, this.configuration, null))
            .then((r) => {
              let B = new ai(r, c.id);
              return (
                this.emit("suggestionsready", B),
                (this.currentPromise = null),
                r
              );
            })
        );
      }
      predictFromTarget(e, n) {
        if (!e) return null;
        let i = e.buildTranscriptionFrom(e, null, !1);
        return this.predict(i, n);
      }
      predict_internal(e, n, i) {
        if (!e) return null;
        let s = new Be(e.preInput, this.configuration, i);
        this.recordTranscription(e), n && this.lmEngine.resetContext(s);
        let c = e.alternates;
        (!this.mayCorrect || !c || c.length == 0) &&
          (c = [{ sample: e.transform, p: 1 }]);
        let l = e.transform;
        var r = (this.currentPromise = this.lmEngine.predict(c, s));
        return r.then((B) => {
          if (r == this.currentPromise) {
            let d = new ai(B, l.id);
            this.emit("suggestionsready", d), (this.currentPromise = null);
          }
          return B;
        });
      }
      recordTranscription(e) {
        this.recentTranscriptions.save(e);
      }
      getPredictionState(e) {
        return this.recentTranscriptions.get(e);
      }
      shutdown() {
        this.lmEngine.shutdown();
      }
      get isActive() {
        return this.canEnable()
          ? (this.activeModel || !1) && this._mayPredict
          : ((this._mayPredict = !1), !1);
      }
      canEnable() {
        return !!this.lmEngine;
      }
      get mayPredict() {
        return this._mayPredict;
      }
      set mayPredict(e) {
        if (!this.canEnable()) return;
        let n = this._mayPredict;
        if (((this._mayPredict = e), n != e && this.activeModel)) {
          let i = e ? "active" : "inactive";
          (this._state = i),
            this.emit("statechange", i),
            e &&
              this.isConfigured &&
              ((this._state = "configured"),
              this.emit("statechange", "configured"));
        }
      }
      get mayCorrect() {
        return this._mayCorrect;
      }
      set mayCorrect(e) {
        this._mayCorrect = e;
      }
      get wordbreaksAfterSuggestions() {
        return this.configuration.wordbreaksAfterSuggestions;
      }
      tryAcceptSuggestion(e) {
        return this.emit("tryaccept", e), !1;
      }
      tryRevertSuggestion() {
        return this.emit("tryrevert"), !1;
      }
    };
    a(Nt, "LanguageProcessor");
    var sr = 10,
      Cn = class {
        constructor() {
          this.map = new Map();
        }
        get(t) {
          let e = this.map.get(t);
          return e && this.save(e), e;
        }
        save(t) {
          let e = t.token >= 0 ? t.token : -t.token;
          this.map.delete(e),
            this.map.set(e, t),
            this.map.size > sr && this.map.delete(this.map.keys().next().value);
        }
      };
    a(Cn, "TranscriptionCache");
    var js = class {
        constructor(t, e, n) {
          this.contextCache = new Cn();
          if (!t) throw new Error("device must be defined");
          n || (n = js.DEFAULT_OPTIONS),
            (this.contextDevice = t),
            (this.kbdProcessor = new Bt(t, n)),
            (this.lngProcessor = new Nt(e, this.contextCache));
        }
        get languageProcessor() {
          return this.lngProcessor;
        }
        get keyboardProcessor() {
          return this.kbdProcessor;
        }
        get keyboardInterface() {
          return this.keyboardProcessor.keyboardInterface;
        }
        get activeKeyboard() {
          return this.keyboardInterface.activeKeyboard;
        }
        set activeKeyboard(t) {
          (this.keyboardInterface.activeKeyboard = t), this.resetContext();
        }
        get activeModel() {
          return this.languageProcessor.activeModel;
        }
        processKeyEvent(t, e) {
          let n = t.srcKeyboard && this.activeKeyboard != t.srcKeyboard,
            i = this.activeKeyboard;
          try {
            if (
              (n && (this.keyboardInterface.activeKeyboard = t.srcKeyboard),
              t.baseTranscriptionToken)
            ) {
              let s = this.contextCache.get(t.baseTranscriptionToken);
              s
                ? (!At(s.transform) || !s.preInput.isEqual(E.from(e))) &&
                  e.restoreTo(s.preInput)
                : console.warn(
                    "The base context for the multitap could not be found"
                  );
            }
            return this._processKeyEvent(t, e);
          } finally {
            n && (this.keyboardInterface.activeKeyboard = i);
          }
        }
        _processKeyEvent(t, e) {
          var Q;
          let n = t.device.formFactor,
            i = t.isSynthetic;
          if (
            (n == p.FormFactor.Desktop ||
              !this.activeKeyboard ||
              this.activeKeyboard.usesDesktopLayoutOnDevice(t.device)) &&
            i &&
            this.keyboardProcessor.selectLayer(t)
          )
            return new se();
          if (this.keyboardProcessor.doModifierPress(t, e, !i) && !i)
            return new se();
          if (this.languageProcessor.isActive) {
            if (
              (t.kName == "K_BKSP" || t.Lcode == U.keyCodes.K_BKSP) &&
              this.languageProcessor.tryRevertSuggestion()
            )
              return new se();
            if (
              (t.kName == "K_SPACE" || t.Lcode == U.keyCodes.K_SPACE) &&
              this.languageProcessor.tryAcceptSuggestion("space")
            )
              return new se();
          }
          let s = E.from(e, !0),
            c = this.keyboardProcessor.layerId,
            l = this.keyboardProcessor.processKeystroke(t, e);
          t.kNextLayer && this.keyboardProcessor.selectLayer(t);
          let r = U.isKnownOSKModifierKey(t.kName);
          At(
            (Q = l == null ? void 0 : l.transcription) == null
              ? void 0
              : Q.transform
          ) &&
            t.kNextLayer &&
            (r = !0);
          let B = l != null;
          if (B) {
            let F = r ? null : this.buildAlternates(l, t, s);
            l.finalize(this.keyboardProcessor, e, !1),
              F && F.length > 0 && (l.transcription.alternates = F);
          } else
            (l = new se()),
              (l.transcription = e.buildTranscriptionFrom(e, null, !1)),
              (l.triggersDefaultCommand = !0);
          this.contextCache.save(l.transcription);
          let d = l.setStore[33] || t.kNextLayer;
          this.keyboardProcessor.newLayerStore.set(
            d ? this.keyboardProcessor.layerId : ""
          ),
            this.keyboardProcessor.oldLayerStore.set(d ? c : "");
          let g = this.keyboardProcessor.processPostKeystroke(
            this.contextDevice,
            e
          );
          return (
            g && g.finalize(this.keyboardProcessor, e, !0),
            (l.predictionPromise = this.languageProcessor.predict(
              l.transcription,
              this.keyboardProcessor.layerId
            )),
            l.triggersDefaultCommand || e.doInputEvent(),
            B ? l : null
          );
        }
        buildAlternates(t, e, n) {
          let i;
          if (this.languageProcessor.isActive && !t.triggersDefaultCommand) {
            let s = e.keyDistribution,
              l = new Be(
                n,
                Be.ENGINE_RULE_WINDOW,
                this.keyboardProcessor.layerId
              ).toMock();
            if (this.languageProcessor.isActive && s && e.kbdLayer) {
              let r = Number.MAX_VALUE,
                B = yn(),
                d;
              B.performance &&
                B.performance.now &&
                ((d = a(function () {
                  return B.performance.now();
                }, "timer")),
                (r = d() + 16));
              let g = Math.exp(-5);
              s.sort((F, y) => y.p - F.p), (i = []);
              let Q = 0;
              for (let F of s) {
                if (F.p < g) {
                  Q += F.p;
                  break;
                } else if (d && d() >= r) break;
                let y = E.from(l, !1),
                  u = F.keySpec;
                if (!u) {
                  console.warn(
                    "Internal error:  failed to properly filter set of keys for corrections"
                  );
                  continue;
                }
                let I = this.keyboardProcessor.activeKeyboard.constructKeyEvent(
                    u,
                    e.device,
                    this.keyboardProcessor.stateKeys
                  ),
                  b = this.keyboardProcessor.processKeystroke(I, y);
                if (b && !b.beep && F.p > 0) {
                  let h = b.transcription.transform;
                  (h.id = t.transcription.token),
                    i.push({ sample: h, p: F.p }),
                    (Q += F.p);
                }
              }
              i.forEach(function (F) {
                F.p /= Q;
              });
            }
          }
          return i;
        }
        resetContext(t) {
          this.keyboardProcessor.resetContext(t),
            this.languageProcessor.invalidateContext(
              t,
              this.keyboardProcessor.layerId
            );
        }
      },
      Ft = js;
    a(Ft, "InputProcessor"), (Ft.DEFAULT_OPTIONS = { baseLayout: "us" });
    var Mc = v(A(), 1);
    var Tt = class extends Mc.default {
      constructor(e, n) {
        super();
        this.initNewContext = !0;
        this._currentSuggestions = [];
        this.recentAccept = !1;
        this.swallowPrediction = !1;
        this.doRevert = !1;
        this.recentRevert = !1;
        this.doTryAccept = a((e) => {
          !this.recentAccept && this.selected
            ? this.accept(this.selected)
            : this.recentAccept && e == "space" && (this.recentAccept = !1);
        }, "doTryAccept");
        this.doTryRevert = a(() => {
          this.doRevert
            ? ((this.doRevert = !1), (this.recentAccept = !1))
            : this.recentAccept &&
              (this.showRevert(), (this.swallowPrediction = !0));
        }, "doTryRevert");
        this.invalidateSuggestions = a((e) => {
          (this.initNewContext = !1),
            (!this.swallowPrediction || e == "context") &&
              ((this.recentAccept = !1),
              (this.doRevert = !1),
              (this.recentRevert = !1),
              e == "context" &&
                ((this.swallowPrediction = !1), (this.initNewContext = !0))),
            e != "new" && this.clearSuggestions();
        }, "invalidateSuggestions");
        this.updateSuggestions = a((e) => {
          let n = e.suggestions;
          (this._currentSuggestions = n), (this.keepSuggestion = null);
          for (let i of n) i.tag == "keep" && (this.keepSuggestion = i);
          this.keepSuggestion &&
            this._currentSuggestions.splice(
              this._currentSuggestions.indexOf(this.keepSuggestion),
              1
            ),
            this.swallowPrediction
              ? (this.swallowPrediction = !1)
              : ((this.recentAccept = !1),
                (this.doRevert = !1),
                (this.recentRevert = !1)),
            this.sendUpdateEvent();
        }, "updateSuggestions");
        this.onModelStateChange = a((e) => {
          (e == "configured" || e == "inactive") && this.resetContext();
        }, "onModelStateChange");
        (this.langProcessor = e), (this.kbdProcessor = n);
        let i = a(
          () => this.currentTarget && e.state == "configured",
          "validSuggestionState"
        );
        (this.suggestionApplier = (s) => {
          if (i())
            return e.applySuggestion(s, this.currentTarget, () => n.layerId);
        }),
          (this.suggestionReverter = (s) => {
            i() && e.applyReversion(s, this.currentTarget);
          }),
          (this.postApplicationHandler = () => {
            var s;
            n.newLayerStore.set(""),
              n.oldLayerStore.set(""),
              (s = n.processPostKeystroke(
                n.contextDevice,
                this.currentTarget
              )) == null || s.finalize(n, this.currentTarget, !0);
          }),
          this.connect();
      }
      get currentTarget() {
        return this._currentTarget;
      }
      setCurrentTarget(e) {
        let n = this._currentTarget;
        return (
          (this._currentTarget = e),
          n != e ? this.resetContext() : Promise.resolve([])
        );
      }
      connect() {
        this.langProcessor.addListener(
          "invalidatesuggestions",
          this.invalidateSuggestions
        ),
          this.langProcessor.addListener(
            "suggestionsready",
            this.updateSuggestions
          ),
          this.langProcessor.addListener("tryaccept", this.doTryAccept),
          this.langProcessor.addListener("tryrevert", this.doTryRevert),
          this.langProcessor.addListener(
            "statechange",
            this.onModelStateChange
          ),
          this.langProcessor.addListener(
            "suggestionapplied",
            this.postApplicationHandler
          );
      }
      disconnect() {
        this.langProcessor.removeListener(
          "invalidatesuggestions",
          this.invalidateSuggestions
        ),
          this.langProcessor.removeListener(
            "suggestionsready",
            this.updateSuggestions
          ),
          this.langProcessor.removeListener("tryaccept", this.doTryAccept),
          this.langProcessor.removeListener("tryrevert", this.doTryRevert),
          this.langProcessor.removeListener(
            "statechange",
            this.onModelStateChange
          ),
          this.langProcessor.removeListener(
            "suggestionapplied",
            this.postApplicationHandler
          ),
          this.clearSuggestions();
      }
      get currentSuggestions() {
        let e = [];
        return (
          this.activateKeep() &&
          this.keepSuggestion &&
          this.keepSuggestion.matchesModel
            ? e.push(this.keepSuggestion)
            : this.doRevert && e.push(this.revertSuggestion),
          e.concat(this._currentSuggestions)
        );
      }
      acceptInternal(e) {
        return e
          ? e.tag == "revert"
            ? (this.suggestionReverter(e), null)
            : this.suggestionApplier(e)
          : null;
      }
      accept(e) {
        let n = this;
        return (
          (this.selected = null),
          (this.doRevert = !1),
          (this.revertAcceptancePromise = this.acceptInternal(e)),
          this.revertAcceptancePromise
            ? (this.revertAcceptancePromise.then(function (i) {
                i && (n.revertSuggestion = i);
              }),
              (this.recentAccept = !0),
              (this.recentRevert = !1),
              (this.swallowPrediction = !0),
              this.revertAcceptancePromise)
            : (e &&
                e.tag == "revert" &&
                ((this.recentAccept = !1), (this.recentRevert = !0)),
              Promise.resolve(null))
        );
      }
      showRevert() {
        (this.doRevert = !0), this.sendUpdateEvent();
      }
      clearSuggestions() {
        this.updateSuggestions({ suggestions: [], transcriptionID: 0 });
      }
      activateKeep() {
        return !this.recentAccept && !this.recentRevert && !this.initNewContext;
      }
      sendUpdateEvent() {
        this.emit("update", this.currentSuggestions);
      }
      resetContext() {
        let e = this.currentTarget;
        return e
          ? this.langProcessor.invalidateContext(e, this.kbdProcessor.layerId)
          : Promise.resolve([]);
      }
    };
    a(Tt, "PredictionContext");
    var Yc = v(A(), 1);
    var Bs = "Keyboard_";
    function de(o) {
      return o.startsWith(Bs) ? o : Bs + o;
    }
    a(de, "prefixed");
    function Oe(o) {
      return o.startsWith(Bs) ? o.substring(Bs.length) : o;
    }
    a(Oe, "withoutPrefix");
    var Mt = class extends Yc.default {
      constructor(e) {
        super();
        this.stubSetTable = {};
        this.keyboardTable = {};
        this.keyboardLoader = e;
      }
      getKeyboardForStub(e) {
        return e ? this.getKeyboard(e.KI) : null;
      }
      getKeyboard(e) {
        if (!e) return null;
        let n = this.keyboardTable[de(e)];
        return n instanceof Promise ? null : n;
      }
      get defaultStub() {
        function e(i) {
          let s = Object.keys(i);
          if (s.length != 0) return i[s[0]];
        }
        a(e, "getFirstValue");
        let n = e(this.stubSetTable);
        if (n) return e(n);
      }
      addKeyboard(e) {
        let n = de(e.id);
        (this.keyboardTable[n] = e), this.emit("keyboardadded", e);
      }
      fetchKeyboardForStub(e) {
        return this.fetchKeyboard(e.KI);
      }
      isFetchingKeyboard(e) {
        if (!e) throw new Error("Keyboard ID must be specified");
        return (e = de(e)), this.keyboardTable[e] instanceof Promise;
      }
      fetchKeyboard(e) {
        if (!e) throw new Error("Keyboard ID must be specified");
        if (!this.keyboardLoader)
          throw new Error(
            "Cannot load keyboards; this cache was configured without a loader"
          );
        e = de(e);
        let n = this.keyboardTable[e];
        if (n instanceof T) return Promise.resolve(n);
        if (n instanceof Promise) return n;
        let i = this.getStub(e, null);
        if (!i) throw new Error(`No stub for ${Oe(e)} has been registered`);
        if (!i.filename)
          throw new Error(
            `The registered stub for ${Oe(
              e
            )} lacks a path to the main keyboard file`
          );
        let s = this.keyboardLoader.loadKeyboardFromStub(i);
        return (
          (this.keyboardTable[e] = s),
          s
            .then((c) => {
              (c.scriptObject.KI = e), this.addKeyboard(c);
            })
            .catch((c) => {
              throw (delete this.keyboardTable[e], c);
            }),
          s
        );
      }
      addStub(e) {
        var s;
        let n = de(e.KI),
          i = (this.stubSetTable[n] =
            (s = this.stubSetTable[n]) != null ? s : {});
        (i[e.KLC] = e), this.emit("stubadded", e);
      }
      findMatchingStub(e) {
        return this.getStub(e.KI, e.KLC);
      }
      getStub(e, n) {
        var l;
        let i,
          s = n || "---";
        e instanceof T ? (i = e.id) : (i = e), i && (i = de(i));
        let c = (l = this.stubSetTable[i]) != null ? l : {};
        if (s != "---") return c[s];
        {
          let r = Object.keys(c);
          return r.length == 0 ? null : c[r[0]];
        }
      }
      forgetKeyboard(e, n = !1) {
        let i = e instanceof T ? e.id : de(e);
        this.stubSetTable[i] && delete this.stubSetTable[i],
          n && this.keyboardTable[i] && delete this.keyboardTable[i];
      }
      getStubList() {
        let e = [],
          n = Object.keys(this.stubSetTable);
        for (let i of n) {
          let s = this.stubSetTable[i],
            c = Object.keys(s);
          for (let l of c) e.push(s[l]);
        }
        return e;
      }
    };
    a(Mt, "StubAndKeyboardCache");
    var _s = [
        "World",
        "Africa",
        "Asia",
        "Europe",
        "South America",
        "North America",
        "Oceania",
        "Central America",
        "Middle East",
      ],
      qs = ["un", "af", "as", "eu", "sa", "na", "oc", "ca", "me"],
      cr = RegExp("^(([\\.]/)|([\\.][\\.]/)|(/))|(:)");
    function wc(o, t) {
      return (t = t || ""), o && !cr.test(o) ? t + o : o;
    }
    a(wc, "configureFilePathing");
    var z = class extends Re {
      constructor(e, n, i) {
        var t = (...args) => {
          super(...args);
        };
        if (typeof e != "string")
          if (e.id !== void 0) {
            let s = e;
            (s.id = de(s.id)),
              t(s, i),
              (this.KF = wc(s.filename, n)),
              this.mapRegion(s.languages);
          } else {
            let s = e;
            (s.KI = de(s.KI)),
              t(s, i),
              (this.KF = wc(s.KF, n)),
              (this.KP = s.KP),
              (this.KR = s.KR),
              (this.KRC = s.KRC);
            return;
          }
        else t(de(e), n);
      }
      mapRegion(e) {
        let n = e.region,
          i = 0;
        if (typeof n == "number") n < 1 || n > 9 ? (i = 0) : (i = n - 1);
        else if (typeof n == "string") {
          let s = n.length == 2 ? qs : _s;
          for (let c = 0; c < s.length; c++)
            if (n.toLowerCase() == s[c].toLowerCase()) {
              i = c;
              break;
            }
        }
        (this.KR = _s[i]), (this.KRC = qs[i]);
      }
      get region() {
        return this.KR;
      }
      get regionCode() {
        return this.KRC;
      }
      get filename() {
        return this.KF;
      }
      static toStubs(e, n, i) {
        let s = "";
        if (
          (typeof e.language != "undefined" &&
            console.warn(
              "The 'language' property for keyboard stubs has been deprecated.  Please use the 'languages' property instead."
            ),
          e.languages || (e.languages = e.language),
          e
            ? e.id
              ? e.languages || (s = "KeyboardStub has undefined languages")
              : (s = "KeyboardStub has undefined id")
            : (s = "Stub undefined"),
          s != "")
        )
          return [{ error: new Error(s) }];
        let c = [];
        Array.isArray(e.languages)
          ? (c = c.concat(e.languages))
          : c.push(e.languages);
        let l = [];
        return (
          c.forEach((r) => {
            let B = V(C({}, e), { languages: r, language: void 0 }),
              d = new z(B, n, i);
            l.push(d);
          }),
          l
        );
      }
      merge(e) {
        this.KL || (this.KL = e.KL),
          this.KR || (this.KR = e.KR),
          this.KRC || (this.KRC = e.KRC),
          this.KN || (this.KN = e.KN),
          this.KF || (this.KF = e.KF),
          this.KFont || (this.KFont = e.KFont),
          this.KOskFont || (this.KOskFont = e.KOskFont),
          e._displayName &&
            (this._displayName || (this._displayName = e._displayName));
      }
      validateForCustomKeyboard() {
        return super.validateForCustomKeyboard() || !this.KF || !this.KR
          ? new Error(
              "To use a custom keyboard, you must specify file name, keyboard id, keyboard name, language, language code, and region."
            )
          : null;
      }
    };
    a(z, "KeyboardStub");
    function ds(o) {
      if (o.length > 1) {
        let t = o.map((e) => {
          var n;
          return `${e.error.message}:
  ${(n = e.error.stack) != null ? n : ""}`;
        });
        return Promise.reject(
          new Error(
            t.join(`

`)
          )
        );
      } else return Promise.reject(o[0].error);
    }
    a(ds, "rejectErrorStubs");
    function $s(o, t) {
      if (t.length == 0) return Promise.resolve(o);
      if (o.length == 0) return ds(t);
      {
        let e = o;
        return Promise.resolve(e.concat(t));
      }
    }
    a($s, "mergeAndResolveStubPromises");
    var Dc = v(A(), 1);
    var zc = "The Cloud API request timed out.",
      ec = "Could not find a keyboard with that ID.",
      Kc = "The Cloud API failed to find an appropriate keyboard.",
      lr = "Error occurred while registering keyboards: ",
      rr = a(function (o) {
        return o + " keyboard not found.";
      }, "MISSING_KEYBOARD"),
      ke = class extends Dc.default {
        constructor(e, n) {
          super();
          this.cloudResolutionPromises = {};
          this.languageFetchStarted = !1;
          this.registerFromCloud = a((e) => {
            let n = e.timerid,
              i;
            try {
              i = this._registerCore(e);
            } catch (s) {
              i = new Error(lr + s);
            }
            if (n) {
              let s = this.cloudResolutionPromises[n];
              if (s)
                try {
                  i instanceof Error ? s.reject(i) : s.resolve(i);
                } finally {
                  delete this.cloudResolutionPromises[n];
                }
              else {
                this.emit("unboundregister", i);
                return;
              }
            } else {
              this.emit("unboundregister", i);
              return;
            }
          }, "registerFromCloud");
          (this.requestEngine = e),
            (this.pathConfig = n),
            (this._languageListPromise = new S());
        }
        get languageListPromise() {
          return (
            this.languageFetchStarted ||
              ((this.languageFetchStarted = !0),
              this.keymanCloudRequest("", !0).catch((e) => {
                (this.languageFetchStarted = !1),
                  this._languageListPromise.reject(e),
                  (this._languageListPromise = new S());
              })),
            this._languageListPromise.corePromise
          );
        }
        keymanCloudRequest(e, n) {
          let i =
              "https://api.keyman.com/cloud/4.0/" +
              (arguments.length > 1 && n ? "languages" : "keyboards"),
            s =
              "?jsonp=keyman.register&languageidtype=bcp47&version=" +
              k.CURRENT.toString(),
            c = i + s + e,
            { promise: l, queryId: r } = this.requestEngine.request(c);
          return (
            (this.cloudResolutionPromises[r] = l),
            l.finally(() => {
              delete this.cloudResolutionPromises[r];
            }),
            l.corePromise
          );
        }
        _registerCore(e) {
          let n = e.options,
            i = n.fontBaseUri;
          if (
            (this.pathConfig.fonts != ""
              ? (i = this.pathConfig.fonts)
              : this.pathConfig.updateFontPath(i),
            typeof e.error == "string")
          ) {
            var s = "";
            if (typeof e.options.keyboardid == "string") {
              let l = e.options.keyboardid;
              s = l.substring(0, 1).toUpperCase() + l.substring(1);
            }
            return new Error(rr(s));
          }
          if (typeof n == "undefined" || typeof n.context == "undefined")
            return new Error(ec);
          let c = [];
          if (n.context == "keyboard") {
            let l,
              r = e.keyboard;
            if (Array.isArray(r))
              for (l = 0; l < r.length; l++)
                c = c.concat(ke.registerLanguagesForKeyboard(r[l], n, l));
            else c = c.concat(ke.registerLanguagesForKeyboard(r, n, 0));
          } else if (n.context == "language") {
            let l = e.languages;
            return this._languageListPromise.resolve(l), l;
          }
          return c;
        }
        static registerLanguagesForKeyboard(e, n, i) {
          let s = "";
          if (typeof e == "undefined") return [];
          if (
            (typeof n.keyboardid == "string" &&
              (s = n.keyboardid.split(",")[i]),
            Array.isArray(e))
          )
            if (e.length == 1 || s.substr(-1, 1) == "$" || s == "") {
              let c = [];
              for (let l = 0; l < e.length; l++)
                c = c.concat(this.registerLanguagesForKeyboard(e[l], n, i));
              return c;
            } else {
              let c = 0;
              for (let l = 0; l < e.length; l++) {
                let r = e[l].id.toLowerCase();
                if (
                  (r == "us" && (r = "english"), Array.isArray(e[l].languages))
                ) {
                  let B = e[l].languages;
                  for (let d = 0; d < B.length; d++)
                    if (r == B[d].name.toLowerCase()) {
                      c = l;
                      break;
                    }
                }
              }
              return this.registerLanguagesForKeyboard(e[c], n, i);
            }
          else {
            let c = n.fontBaseUri || "",
              l = z.toStubs(e, n.keyboardBaseUri, c),
              r = s.split("@")[1];
            if (l.length == 1 && typeof l[0].error != "undefined")
              throw l[0].error;
            return typeof r != "string"
              ? l
              : ((r = r.replace(/\$$/, "")), [l.find((B) => B.KLC == r)]);
          }
        }
        fetchCloudStubs(e) {
          return Z(this, null, function* () {
            if (e.length == 0) return Promise.resolve([]);
            let n = "&keyboardid=",
              i = "";
            for (let s = 0; s < e.length; s++)
              (n = n + i + e[s].toString()), (i = ",");
            try {
              return yield this.keymanCloudRequest(n, !1);
            } catch (s) {
              return Promise.reject(s);
            }
          });
        }
      };
    a(ke, "CloudQueryEngine");
    var gs = class {
      constructor(t, e) {
        (this.id = t), (this.language = e);
      }
      toString() {
        let t = this.id;
        return (
          this.language
            ? ((t = t + "@" + this.language),
              this.version && (t = t + "@" + this.version))
            : this.version && (t = t + "@@" + this.version),
          t
        );
      }
    };
    a(gs, "CloudRequestEntry");
    function tc(o, t) {
      return {
        keyboard: { id: o.id, name: o.name },
        error: typeof t == "string" ? new Error(t) : t,
      };
    }
    a(tc, "convertToErrorStub");
    function Oc(o, t, e) {
      let n = new gs(o, t);
      return e && (n.version = e), n;
    }
    a(Oc, "toQuerySpecs");
    function Pc(o, t, e) {
      if (o.getStub(e.id, e.language) == null) {
        for (let n = 0; n < t.length; n++)
          if (t[n].id == e.id && t[n].language == e.language) return !1;
        return !0;
      } else return !1;
    }
    a(Pc, "isUniqueRequest");
    var Yt = class {
      constructor(t, e, n) {
        (this.pathConfig = n),
          (this.cache = new Mt(t)),
          (this.cloudQueryEngine = new ke(e, this.pathConfig)),
          this.cloudQueryEngine.on("unboundregister", (i) => {
            Array.isArray(i) &&
              i.forEach((s) => {
                this.cache.addStub(s);
              });
          });
      }
      addKeyboardArray(t) {
        let e = [],
          n = [],
          i = [],
          s = [],
          c = [];
        for (let B of t)
          if (typeof B == "string" && B.length > 0) s.push(B);
          else if (B.KI || B.KL || B.KLC || B.KFont || B.KOskFont)
            i.push(new z(B));
          else {
            let d = B;
            if (
              (typeof d.language != "undefined" &&
                console.warn(
                  "The 'language' property for keyboard stubs has been deprecated.  Please use the 'languages' property instead."
                ),
              d.languages || (d.languages = d.language),
              typeof d.languages == "undefined")
            ) {
              let g =
                "To use keyboard '" + d.id + "', you must specify languages.";
              c.push(tc(d, g));
            } else if (Array.isArray(d.languages)) {
              let g = z.toStubs(
                d,
                this.pathConfig.keyboards,
                this.pathConfig.fonts
              );
              for (let Q of g) Q instanceof z ? i.push(Q) : c.push(Q);
            } else {
              let g = d;
              i.push(
                new z(g, this.pathConfig.keyboards, this.pathConfig.fonts)
              );
            }
          }
        for (let B of i)
          if (B.KF) {
            let d = B.validateForCustomKeyboard();
            d ? c.push(tc(B, d)) : e.push(B);
          } else n.push(B);
        let l = [];
        for (let B of n) {
          if (!B.KI && !B.KLC) {
            c.push(
              tc(
                B,
                "Cannot fetch keyboard information without a keyboard ID or language code."
              )
            );
            continue;
          }
          let d = Oc(Oe(B.id), B.langId);
          Pc(this.cache, l, d) && l.push(d);
        }
        for (let B of s) {
          let d = B.split("@"),
            g = [""];
          d[0].toLowerCase() == "english" && (d[0] = "us"),
            d.length > 1 && (g = d[1].split(","));
          for (let Q = 0; Q < g.length; Q++) {
            if (Q > 0 && g[Q] == "") continue;
            let F = Oc(d[0], g[Q], d[2]);
            Pc(this.cache, l, F) && l.push(F);
          }
        }
        return (
          e.forEach((B) => this.cache.addStub(B)),
          this.cloudQueryEngine
            .fetchCloudStubs(l.map((B) => B.toString()))
            .then((B) => {
              for (let d of B)
                d instanceof z ? (this.cache.addStub(d), e.push(d)) : c.push(d);
              return [].concat(c).concat(e);
            })
        );
      }
      addLanguageKeyboards(t) {
        return Z(this, null, function* () {
          let e = [],
            n = [];
          try {
            n = yield this.cloudQueryEngine.languageListPromise;
          } catch (c) {
            return console.error(c), e.push({ error: c }), e;
          }
          let i = n,
            s = "";
          for (let c = 0; c < t.length; c++) {
            let l = t[c].toLowerCase(),
              r = l.substr(-1, 1) == "$";
            r && (l = l.substr(0, l.length - 1));
            let B = !1;
            for (let d = 0; d < i.length; d++)
              if (l == i[d].name.toLowerCase()) {
                s != "" && (s = s + ","),
                  (s = s + "@" + i[d].id),
                  r && (s = s + "$"),
                  (B = !0);
                break;
              }
            if (!B) {
              let d = {
                language: { name: l },
                error: new Error(this.alertLanguageUnavailable(l)),
              };
              e.push(d);
            }
          }
          return s == ""
            ? ds(e)
            : this.cloudQueryEngine
                .keymanCloudRequest("&keyboardid=" + s, !1)
                .then(
                  (c) =>
                    Z(this, null, function* () {
                      let l = yield $s(c, e);
                      for (let r of l)
                        typeof r.error == "undefined" && this.cache.addStub(r);
                      return l;
                    }),
                  (c) => {
                    console.error(c);
                    let l = { error: c };
                    return e.push(l), ds(e);
                  }
                );
        });
      }
      fetchCloudCatalog() {
        return Z(this, null, function* () {
          try {
            let t = yield this.cloudQueryEngine.keymanCloudRequest("", !1);
            return t.forEach((e) => this.cache.addStub(e)), t;
          } catch (t) {
            return Promise.reject([{ error: t }]);
          }
        });
      }
      alertLanguageUnavailable(t) {
        return (
          "No keyboards are available for " +
          t +
          ". Does it have another language name?"
        );
      }
    };
    a(Yt, "KeyboardRequisitioner");
    var wt = class {
      constructor() {
        this.registeredModels = {};
        this.languageModelMap = {};
      }
      modelForLanguage(t) {
        return this.languageModelMap[t];
      }
      register(t) {
        if (
          ((t.id = t.id.toLowerCase()),
          JSON.stringify(t) == JSON.stringify(this.registeredModels[t.id]))
        )
          return;
        this.registeredModels[t.id] = t;
        let e = this;
        t.languages.forEach(function (n) {
          if (!n) {
            console.warn(
              "Null / undefined language codes are not permitted for registration."
            );
            return;
          }
          e.languageModelMap[n] = t;
        });
      }
      unregister(t) {
        let e;
        if (((t = t.toLowerCase()), this.registeredModels[t]))
          (e = this.registeredModels[t]), delete this.registeredModels[t];
        else return;
        let n = this;
        return (
          e.languages.forEach(function (i) {
            n.languageModelMap[i].id == t && delete n.languageModelMap[i];
          }),
          e
        );
      }
      isRegistered(t) {
        return !!this.registeredModels[t.id.toLowerCase()];
      }
    };
    a(wt, "ModelManager");
    function Fs(o) {
      let t = [];
      for (let e = 0; e < o.length; e++) t.push(o[e]);
      return t;
    }
    a(Fs, "arrayFromNodeList");
    function W(o) {
      let t = document.createElement(o);
      return (
        (t.style.userSelect = "none"),
        (t.style.webkitUserSelect = "none"),
        (t.style.MozUserSelect = "none"),
        t
      );
    }
    a(W, "createUnselectableElement");
    var ge = class {
      constructor(t, e) {
        this.fontStyleDefinitions = {};
        this.linkedSheets = [];
        this.fontPromises = [];
        if (!t) {
          let n = document.getElementsByTagName("HEAD");
          n.length > 0 ? (t = n[0]) : (t = document.body);
        }
        (this.linkNode = t), (this.doCacheBusting = e || !1);
      }
      get sheets() {
        return this.linkedSheets.map((t) => t.sheet);
      }
      linkStylesheet(t) {
        if (!(t instanceof HTMLLinkElement) && !t.innerHTML) return;
        let e = new S();
        t instanceof HTMLLinkElement
          ? (t.onload = () => e.resolve())
          : e.resolve(),
          this.linkedSheets.push({ sheet: t, load: e }),
          this.linkNode.appendChild(t);
      }
      allLoadedPromise() {
        return Z(this, null, function* () {
          let t = this.linkedSheets.map((e) => e.load.corePromise);
          Promise.allSettled
            ? yield Promise.allSettled(t)
            : yield Promise.all(t);
        });
      }
      addStyleSheetForFont(t, e, n) {
        if (!t || typeof t.files == "undefined") return;
        let i = t.family,
          s,
          c,
          l = "",
          r = "",
          B = [];
        n || (n = p.OperatingSystem.Other);
        let d = (this.fontStyleDefinitions[n] =
          this.fontStyleDefinitions[n] || {});
        if (d[i]) {
          let I = d[i];
          I.parentNode || this.linkStylesheet(I);
          return;
        }
        for (
          typeof t.files == "string" ? (B[0] = t.files) : (B = t.files), c = 0;
          c < B.length;
          c++
        )
          B[c].toLowerCase().indexOf(".otf") > 0 && (l = B[c]),
            B[c].toLowerCase().indexOf(".ttf") > 0 && (l = B[c]),
            B[c].toLowerCase().indexOf(".woff") > 0 && (r = B[c]);
        l != "" && l.indexOf("/") < 0 && (l = e + l),
          r != "" && r.indexOf("/") < 0 && (r = e + r);
        var g =
          `@font-face {
font-family:"` +
          t.family.replace(/\u0022/g, "") +
          `";
font-style:normal;
font-weight:normal;
`;
        if (
          (n == p.OperatingSystem.iOS
            ? l != "" &&
              (this.doCacheBusting && (l = this.cacheBust(l)),
              (s = 'url("' + encodeURI(l) + `") format('truetype')`))
            : (r != "" && (s = 'url("' + encodeURI(r) + `"') format('woff')`),
              l != "" &&
                (s = 'url("' + encodeURI(l) + `") format('truetype')`)),
          !s)
        )
          return null;
        (g += "src:" + s + ";"),
          (g =
            g +
            `
}
`);
        let Q = Qt(g);
        d[i] = Q;
        let F = new FontFace(t.family, s),
          y = a(
            () => (this.fontPromises = this.fontPromises.filter((I) => I != u)),
            "clearPromise"
          ),
          u = F.load().then(y).catch(y);
        return this.fontPromises.push(u), this.linkStylesheet(Q), Q;
      }
      cacheBust(t) {
        return t + "?v=" + new Date().getTime();
      }
      linkExternalSheet(t, e) {
        try {
          if (
            !e &&
            document.querySelector("link[href=" + JSON.stringify(t) + "]") !=
              null
          )
            return null;
        } catch (i) {
          return null;
        }
        let n = document.createElement("link");
        return (
          (n.type = "text/css"),
          (n.rel = "stylesheet"),
          (n.href = t),
          this.linkStylesheet(n),
          n
        );
      }
      unlink(t) {
        let e = this.linkedSheets.findIndex((n) => n.sheet == t);
        return e > -1
          ? (this.linkedSheets.splice(e, 1)[0].load.resolve(),
            t.parentNode.removeChild(t),
            !0)
          : !1;
      }
      unlinkAll() {
        for (let t of this.linkedSheets) {
          let e = t.sheet;
          e.parentNode && e.parentNode.removeChild(e), t.load.resolve();
        }
        this.linkedSheets.splice(0, this.linkedSheets.length);
      }
    };
    a(ge, "StylesheetManager");
    function Qt(o) {
      var t = document.createElement("style");
      return (
        (t.type = "text/css"), t.appendChild(document.createTextNode(o)), t
      );
    }
    a(Qt, "createStyleSheet");
    function xe() {
      var o;
      return (
        typeof window.orientation != "undefined"
          ? (o = window.orientation)
          : typeof window.screen.orientation != "undefined" &&
            (o = window.screen.orientation.angle),
        o !== void 0 ? Math.abs(o / 90) == 1 : !1
      );
    }
    a(xe, "landscapeView");
    var jc = a((o) => o, "no_change"),
      ce = class {
        constructor(t) {
          this.name = t;
        }
        load(t) {
          return this.loadCookie(this.name, t || jc);
        }
        save(t, e) {
          this.saveCookie(this.name, t, e || jc);
        }
        _loadRawCookies() {
          let t = {};
          if (typeof document.cookie != "undefined" && document.cookie != "") {
            let e = document.cookie.split(/;\s*/);
            for (let n = 0; n < e.length; n++) {
              let i = e[n].split("=");
              i.length == 2 && (t[i[0]] = i[1]);
            }
          }
          return t;
        }
        loadCookie(t, e) {
          let n = {},
            s = this._loadRawCookies()[t];
          if (s) {
            let c = decodeURIComponent(s).split(";");
            for (
              let l = 0;
              l < c.length && !(l == c.length - 1 && !c[l]);
              l++
            ) {
              let r = c[l].split("=");
              if (r.length > 1) {
                let [B, d] = r;
                n[B] = e(d, B);
              } else n[r[0]] = "";
            }
          }
          return n;
        }
        saveCookie(t, e, n) {
          let i = "";
          for (let l in e) i += l + "=" + n(e[l], l) + ";";
          let c =
            " path=/; expires=" +
            new Date(
              new Date().valueOf() + 1e3 * 60 * 60 * 24 * 30
            ).toUTCString();
          document.cookie = `${t}=${encodeURIComponent(i)}; ${c}`;
        }
      };
    a(ce, "CookieSerializer");
    function $(o) {
      var t;
      if (!o) return 0;
      var e = o.offsetLeft ? o.offsetLeft : 0;
      if (((t = o), t.offsetParent)) {
        for (; t.offsetParent; ) (t = t.offsetParent), (e += t.offsetLeft);
        let i = t.ownerDocument;
        t.style.position == "fixed" &&
          i &&
          i.scrollingElement &&
          (e += i.scrollingElement.scrollLeft);
      }
      if (t && t.ownerDocument && o.ownerDocument != window.document) {
        var n = t.ownerDocument;
        if (n && n.defaultView && n.defaultView.frameElement)
          return (
            e + $(n.defaultView.frameElement) - n.documentElement.scrollLeft
          );
      }
      return e;
    }
    a($, "getAbsoluteX");
    function ee(o) {
      var t;
      if (!o) return 0;
      var e = o.offsetTop ? o.offsetTop : 0;
      if (
        ((t = o),
        t.ownerDocument && t instanceof t.ownerDocument.defaultView.HTMLElement)
      ) {
        for (; t.offsetParent; ) (t = t.offsetParent), (e += t.offsetTop);
        let i = t.ownerDocument;
        t.style.position == "fixed" &&
          i &&
          i.scrollingElement &&
          (e += i.scrollingElement.scrollTop);
      }
      if (t && t.ownerDocument && o.ownerDocument != window.document) {
        var n = t.ownerDocument;
        if (n && n.defaultView && n.defaultView.frameElement)
          return e + ee(n.defaultView.frameElement);
      }
      return e;
    }
    a(ee, "getAbsoluteY");
    var Bi = class extends ce {
      constructor(t, e) {
        super(`KeymanWeb_${t}_Option_${e}`);
      }
      load() {
        return super.load(decodeURIComponent);
      }
      save(t) {
        super.save(t, encodeURIComponent);
      }
    };
    a(Bi, "VarStoreSerializer");
    var mn = class {
      loadStore(t, e) {
        return new Bi(t, e).load();
      }
      saveStore(t, e, n) {
        new Bi(t, e).save(n);
      }
    };
    a(mn, "VariableStoreCookieSerializer");
    var yt = class extends Ae {
      constructor(e, n, i) {
        super(e, n, new mn());
        this.insertText = a((e, n) => {
          this.resetContextCache(),
            this.engine.contextManager.insertText(this, e, n);
        }, "insertText");
        this.KT = this.insertText;
        (this.engine = n), (this.stubNamespacer = i);
      }
      preserveID(e) {
        var n;
        if (document.currentScript) n = document.currentScript.id;
        else {
          var i = document.getElementsByTagName("script"),
            s = i[i.length - 1];
          n = s.id;
        }
        if (n)
          n.indexOf(Oe(e.KI)) != -1
            ? (e.KI = n)
            : console.error(
                "Error when registering keyboard:  current SCRIPT tag's ID does not match!"
              );
        else return;
      }
      registerKeyboard(e) {
        super.registerKeyboard(e);
        let n = this.loadedKeyboard;
        this.preserveID(e),
          this.engine.config.deferForInitialization.then(() => {
            this.engine.keyboardRequisitioner.cache.isFetchingKeyboard(n.id) ||
              (this.engine.keyboardRequisitioner.cache.addKeyboard(n),
              (this.loadedKeyboard = null));
          });
      }
      registerStub(e) {
        var i;
        this.stubNamespacer && this.stubNamespacer(e);
        let n = a(() => {
          let s = this.engine.config.paths;
          return new z(e, s.keyboards, s.fonts);
        }, "buildStub");
        if (!this.engine.config.deferForInitialization.isResolved)
          this.engine.config.deferForInitialization.then(() =>
            this.engine.keyboardRequisitioner.cache.addStub(n())
          );
        else {
          let s = n();
          if (
            (i = this.engine.keyboardRequisitioner) != null &&
            i.cache.findMatchingStub(s)
          )
            return 1;
          this.engine.keyboardRequisitioner.cache.addStub(s);
        }
        return null;
      }
    };
    a(yt, "KeyboardInterface");
    (function () {
      yt.__publishShorthandAPI();
    })();
    var di = class extends St {
      constructor(e, n) {
        var t = (...args) => {
          super(...args);
        };
        e && e._jsGlobal != window && (e._jsGlobal.String = window.String),
          t(e || new lt(window, ii)),
          (this.performCacheBusting = n || !1);
      }
      loadKeyboardInternal(e, n, i) {
        let s = new S();
        this.performCacheBusting && (e = this.cacheBust(e));
        try {
          let c = this.harness._jsGlobal.document,
            l = c.createElement("script");
          i && (l.id = i),
            c.head.appendChild(l),
            (l.onerror = (r) => {
              s.reject(n.missingError(r));
            }),
            (l.onload = () => {
              if (this.harness.loadedKeyboard) {
                let r = this.harness.loadedKeyboard;
                (this.harness.loadedKeyboard = null), s.resolve(r);
              } else s.reject(n.scriptError());
            }),
            s
              .then(() => {
                l.remove();
              })
              .catch(() => {
                l.remove();
              }),
            (l.src = e);
        } catch (c) {
          return Promise.reject(c);
        }
        return s.corePromise;
      }
      cacheBust(e) {
        return e + "?v=" + new Date().getTime();
      }
    };
    a(di, "DOMKeyboardLoader");
    var gi = class {
      constructor(t, e, n, i) {
        (this.Pelem = t),
          (this.Peventname = e.toLowerCase()),
          (this.Phandler = n),
          (this.PuseCapture = i);
      }
      equals(t) {
        return (
          this.Pelem == t.Pelem &&
          this.Peventname == t.Peventname &&
          this.Phandler == t.Phandler &&
          this.PuseCapture == t.PuseCapture
        );
      }
    };
    a(gi, "DomEventTracking");
    var Ge = class {
      constructor() {
        this.domEvents = [];
      }
      attachDOMEvent(t, e, n, i) {
        this.detachDOMEvent(t, e, n, i), t.addEventListener(e, n, !!i);
        var s = new gi(t, e, n, i);
        this.domEvents.push(s);
      }
      detachDOMEvent(t, e, n, i) {
        t.removeEventListener(e, n, i);
        for (var s = new gi(t, e, n, i), c = 0; c < this.domEvents.length; c++)
          if (this.domEvents[c].equals(s)) {
            this.domEvents.splice(c, 1);
            break;
          }
      }
      shutdown() {
        for (let t of this.domEvents)
          this.detachDOMEvent(t.Pelem, t.Peventname, t.Phandler, t.PuseCapture);
      }
    };
    a(Ge, "DomEventTracker");
    var nc = v(A(), 1);
    var Dt = class extends nc.default {
      constructor(t) {
        super(),
          t instanceof nc.default
            ? ((t.on = this.listenerRegistrationSpy("listeneradded", t, t.on)),
              (t.addListener = this.listenerRegistrationSpy(
                "listeneradded",
                t,
                t.addListener
              )),
              (t.off = this.listenerRegistrationSpy(
                "listenerremoved",
                t,
                t.off
              )),
              (t.removeListener = this.listenerRegistrationSpy(
                "listenerremoved",
                t,
                t.off
              )))
            : ((t.addEventListener = this.listenerRegistrationSpy(
                "listeneradded",
                t,
                t.addEventListener
              )),
              (t.removeEventListener = this.listenerRegistrationSpy(
                "listenerremoved",
                t,
                t.removeEventListener
              )));
      }
      listenerRegistrationSpy(t, e, n) {
        return (i, s) => {
          let c = n.apply(e, [i, s]);
          return this.emit(t, i), c;
        };
      }
    };
    a(Dt, "EmitterListenerSpy");
    var zt = class {
      constructor() {
        this.events = {};
        this.currentEvents = [];
      }
      addEventListener(t, e) {
        return this._removeEventListener(t, e), this.events[t].push(e), !0;
      }
      removeEventListener(t, e) {
        return this._removeEventListener(t, e);
      }
      _removeEventListener(t, e) {
        typeof this.events[t] == "undefined" && (this.events[t] = []);
        for (var n = 0; n < this.events[t].length; n++)
          if (this.events[t][n] == e) return this.events[t].splice(n, 1), !0;
        return !1;
      }
      callEvent(t, e) {
        if (typeof this.events[t] == "undefined") return !0;
        if (this.currentEvents.indexOf(t) != -1) return !1;
        this.currentEvents.push(t);
        for (var n = 0; n < this.events[t].length; n++) {
          var i = this.events[t][n],
            s = !1;
          try {
            s = i(e);
          } catch (c) {
            console.error(c), (s = !1);
          }
          if (s === !1) return this.currentEvents.pop(), !1;
        }
        return this.currentEvents.pop(), !0;
      }
      listenerCount(t) {
        let e = this.events[t];
        return e ? e.length : 0;
      }
      shutdown() {
        this.events = {};
      }
    };
    a(zt, "LegacyEventEmitter");
    var xn = class {
      constructor(t = !1) {
        this.fileLocal = t;
      }
      request(t) {
        let e = new S(),
          n = window.setTimeout(() => {
            e.reject(new Error(zc));
          }, 1e4),
          i = "&timerid=" + n,
          s = t + i,
          c = document.createElement("script");
        (c.onload = (l) => {
          window.clearTimeout(n), e.isResolved || e.reject(new Error(Kc));
        }),
          (c.onerror = (l, r, B, d, g) => {
            window.clearTimeout(n);
            let Q = ec;
            g && (Q = Q + ": " + g.message), e.reject(new Error(Q));
          }),
          this.fileLocal ? (c.src = t) : (c.src = s);
        try {
          document.body.appendChild(c);
        } catch (l) {
          document.getElementsByTagName("head")[0].appendChild(c);
        }
        return (
          e.finally(() => {
            clearTimeout(n);
          }),
          { promise: e, queryId: n }
        );
      }
    };
    a(xn, "DOMCloudRequester");
    function or() {
      return typeof window.KeymanWeb_BaseLayout != "undefined"
        ? window.KeymanWeb_BaseLayout
        : "us";
    }
    a(or, "determineBaseLayout");
    var Kt = class {
      constructor(t, e, n, i) {
        this.legacyAPIEvents = new zt();
        this.keyEventListener = a((t, e) => {
          var s;
          let n = this.contextManager.activeTarget;
          if (!this.contextManager.activeKeyboard || !n) {
            e && e(null, null);
            return;
          }
          if (
            (this.core.languageProcessor.mayCorrect || (t.keyDistribution = []),
            this.keyEventRefocus && this.keyEventRefocus(),
            n.invalidateSelection(),
            n.deadkeys().deleteMatched(),
            t.isSynthetic)
          ) {
            let c = this.osk.vkbd.layerId;
            c &&
              c != this.core.keyboardProcessor.layerId &&
              (this.core.keyboardProcessor.layerId = c);
          }
          let i = this.core.processKeyEvent(t, n);
          i &&
            ((s = i.transcription) == null ? void 0 : s.transform) &&
            this.config.onRuleFinalization(i, this.contextManager.activeTarget),
            e && e(i, null);
        }, "keyEventListener");
        (this.config = e), (this.contextManager = n);
        let s = i(this);
        (s.baseLayout = or()),
          (this.interface = s.keyboardInterface),
          (this.core = new Ft(e.hostDevice, t, s)),
          this.core.languageProcessor.on("statechange", (c) => {
            var l, r;
            (l = this.osk) == null || l.bannerController.selectBanner(c),
              (r = this.osk) == null || r.refreshLayout();
          }),
          this.core.keyboardProcessor.on("statekeychange", (c) => {
            var l, r;
            (r = (l = this.osk) == null ? void 0 : l.vkbd) == null ||
              r.updateStateKeys(c);
          }),
          this.contextManager.on("beforekeyboardchange", (c) => {
            this.legacyAPIEvents.callEvent("beforekeyboardchange", {
              internalName: c == null ? void 0 : c.id,
              languageCode: c == null ? void 0 : c.langId,
            });
          }),
          this.contextManager.on("keyboardchange", (c) => {
            c || (this.osk && typeof this.osk.startHide === "function" && this.osk.startHide(!1));
            let l = a(() => {
              var r, B;
              this.refreshModel(),
                (this.core.activeKeyboard = c == null ? void 0 : c.keyboard),
                this.legacyAPIEvents.callEvent("keyboardchange", {
                  internalName:
                    (r = c == null ? void 0 : c.metadata.id) != null ? r : "",
                  languageCode:
                    (B = c == null ? void 0 : c.metadata.langId) != null
                      ? B
                      : "",
                });
            }, "prepareKeyboardSwap");
            this.osk
              ? this.osk.batchLayoutAfter(() => {
                  l(),
                    (this.osk.activeKeyboard = c),
                    this.contextManager.resetContext(),
                    this.osk.present();
                })
              : (l(), this.contextManager.resetContext());
          }),
          this.contextManager.on("keyboardasyncload", (c) => {
            var l, r;
            this.config.hostDevice.touchable &&
              ((l = this.osk) == null ? void 0 : l.activationModel) &&
              (this.osk.activationModel.enabled = !0),
              this.osk && typeof this.osk.startHide === "function" ? this.osk.startHide(!1) : null;
          });
      }
      init(t) {
        return Z(this, null, function* () {
          let e = this.config;
          if (e.deferForInitialization.isResolved) return Promise.resolve();
          e.initialize(t), String.kmwEnableSupplementaryPlane(!0);
          let n = new di(this.interface, e.applyCacheBusting);
          (this.keyboardRequisitioner = new Yt(n, new xn(), this.config.paths)),
            (this.modelCache = new wt());
          let i = this.keyboardRequisitioner.cache;
          this.contextManager.configure({
            resetContext: (s) => {
              this.osk
                ? this.osk.batchLayoutAfter(() => {
                    this.core.resetContext(s);
                  })
                : this.core.resetContext(s);
            },
            predictionContext: new Tt(
              this.core.languageProcessor,
              this.core.keyboardProcessor
            ),
            keyboardCache: this.keyboardRequisitioner.cache,
          }),
            this.config.on("spacebartext", () => {
              var s;
              (s = this.osk) == null || s.refreshLayout();
            }),
            i.on("stubadded", (s) => {
              let c = a(() => {
                this.legacyAPIEvents.callEvent("keyboardregistered", {
                  internalName: s.KI,
                  language: s.KL,
                  keyboardName: s.KN,
                  languageCode: s.KLC,
                  package: s.KP,
                }),
                  this.config.activateFirstKeyboard &&
                    this.keyboardRequisitioner.cache.defaultStub == s &&
                    this.contextManager.activateKeyboard(s.id, s.langId, !0);
              }, "eventRaiser");
              this.config.deferForInitialization.isResolved
                ? c()
                : this.config.deferForInitialization.then(c);
            }),
            i.on("keyboardadded", (s) => {
              let c = a(() => {
                this.legacyAPIEvents.callEvent("keyboardloaded", {
                  keyboardName: s.id,
                });
              }, "eventRaiser");
              this.config.deferForInitialization.isResolved
                ? c()
                : this.config.deferForInitialization.then(c);
            }),
            this.keyboardRequisitioner.cache.on("keyboardadded", (s) => {
              this.legacyAPIEvents.callEvent("keyboardloaded", {
                keyboardName: s.id,
              });
            });
        });
      }
      get build() {
        return Number.parseInt(it.VERSION_PATCH, 10);
      }
      get version() {
        return it.VERSION_RELEASE;
      }
      get hardKeyboard() {
        return this._hardKeyboard;
      }
      set hardKeyboard(t) {
        this._hardKeyboard &&
          this._hardKeyboard.off("keyevent", this.keyEventListener),
          (this._hardKeyboard = t),
          t.on("keyevent", this.keyEventListener);
      }
      get osk() {
        return this._osk;
      }
      set osk(t) {
        var e;
        this._osk &&
          (this._osk.off("keyevent", this.keyEventListener),
          (this.core.keyboardProcessor.layerStore.handler =
            this.osk.layerChangeHandler)),
          (this._osk = t),
          (this.core.keyboardProcessor.contextDevice =
            (e = t == null ? void 0 : t.targetDevice) != null
              ? e
              : this.config.softDevice),
          t &&
            (this.contextManager.activeKeyboard &&
              (t.activeKeyboard = this.contextManager.activeKeyboard),
            t.on("keyevent", this.keyEventListener),
            (this.core.keyboardProcessor.layerStore.handler =
              t.layerChangeHandler));
      }
      getDebugInfo() {
        var n, i, s, c, l, r, B, d, g, Q, F, y, u, I;
        let t = (n = this.contextManager) == null ? void 0 : n.activeKeyboard;
        return {
          configReport: (i = this.config) == null ? void 0 : i.debugReport(),
          keyboard: {
            id: Oe(
              (c =
                (s = t == null ? void 0 : t.metadata) == null
                  ? void 0
                  : s.id) != null
                ? c
                : ""
            ),
            langId:
              ((l = t == null ? void 0 : t.metadata) == null
                ? void 0
                : l.langId) || "",
            version:
              (B =
                (r = t == null ? void 0 : t.keyboard) == null
                  ? void 0
                  : r.version) != null
                ? B
                : "",
          },
          model: {
            id:
              ((g = (d = this.core) == null ? void 0 : d.activeModel) == null
                ? void 0
                : g.id) || "",
          },
          osk: {
            banner:
              (y =
                (F = (Q = this.osk) == null ? void 0 : Q.banner) == null
                  ? void 0
                  : F.banner.type) != null
                ? y
                : "",
            layer:
              ((I = (u = this.osk) == null ? void 0 : u.vkbd) == null
                ? void 0
                : I.layerId) || "",
          },
        };
      }
      refreshModel() {
        let t = this.contextManager.activeKeyboard,
          e = this.modelCache.modelForLanguage(
            t == null ? void 0 : t.metadata.langId
          );
        return this.core.activeModel != e &&
          (this.core.activeModel && this.core.languageProcessor.unloadModel(),
          e)
          ? this.core.languageProcessor.loadModel(e).then(() => e)
          : Promise.resolve(e);
      }
      addEventListener(t, e) {
        this.legacyAPIEvents.addEventListener(t, e);
      }
      removeEventListener(t, e) {
        this.legacyAPIEvents.removeEventListener(t, e);
      }
      shutdown() {
        var t;
        this.legacyAPIEvents.shutdown(), (t = this.osk) == null || t.shutdown();
      }
      addModel(t) {
        var n;
        this.modelCache.register(t);
        let e =
          (n = this.contextManager.activeKeyboard) == null
            ? void 0
            : n.metadata;
        return e && t.languages.indexOf(e.langId) != -1
          ? this.refreshModel().then(() => {})
          : Promise.resolve();
      }
      removeModel(t) {
        this.modelCache.unregister(t),
          this.core.activeModel &&
            this.core.activeModel.id == t &&
            this.core.languageProcessor.unloadModel();
      }
      setActiveKeyboard(t, e) {
        return Z(this, null, function* () {
          return this.contextManager.activateKeyboard(t, e, !0);
        });
      }
      getActiveKeyboard() {
        var t, e;
        return (e =
          (t = this.contextManager.activeKeyboard) == null
            ? void 0
            : t.metadata.id) != null
          ? e
          : "";
      }
      getActiveLanguage(t) {
        var n, i, s;
        let e =
          (n = this.contextManager.activeKeyboard) == null
            ? void 0
            : n.metadata;
        return t
          ? (s = e == null ? void 0 : e.langName) != null
            ? s
            : ""
          : (i = e == null ? void 0 : e.langId) != null
          ? i
          : "";
      }
      isChiral(t) {
        let e;
        if (t) {
          if (typeof t == "string") {
            let n = this.keyboardRequisitioner.cache.getKeyboard(t);
            if (n) t = n;
            else throw new Error(`Keyboard '${t}' has not been loaded.`);
          }
          e = t;
        } else e = this.core.activeKeyboard;
        return e.isChiral;
      }
      resetContext() {
        this.contextManager.resetContext();
      }
      setNumericLayer() {
        this.core.keyboardProcessor.setNumericLayer(this.config.softDevice);
      }
    };
    a(Kt, "KeymanEngine");
    var Hl = v(A(), 1);
    var qc = v(A(), 1);
    var Qs = class {
        get height() {
          return this._height;
        }
        set height(t) {
          (this._height = t > 0 ? t : 0), this.update();
        }
        get width() {
          return this._width;
        }
        set width(t) {
          (this._width = t), this.update();
        }
        update() {
          let t = this.div.style,
            e = t.height,
            n = t.display;
          return (
            this._height > 0
              ? ((t.height = this._height + "px"), (t.display = "block"))
              : ((t.height = "0px"), (t.display = "none")),
            e !== t.height || n !== t.display
          );
        }
        constructor(t) {
          let e = W("div");
          (e.id = Qs.BANNER_ID),
            (e.className = Qs.BANNER_CLASS),
            (this.div = e),
            (this.height = t),
            this.update();
        }
        appendStyleSheet() {}
        getDiv() {
          return this.div;
        }
        configureForKeyboard(t, e) {}
      },
      K = Qs;
    a(K, "Banner"),
      (K.DEFAULT_HEIGHT = 37),
      (K.BANNER_CLASS = "kmw-banner-bar"),
      (K.BANNER_ID = "kmw-banner-bar");
    var m = class {
      constructor(t) {
        let e = typeof t == "string" ? m.parseLengthStyle(t) : t;
        (this.val = e.val),
          (this.absolute = e.absolute),
          e.special && (this.special = e.special);
      }
      get styleString() {
        return this.absolute
          ? this.val + "px"
          : this.special
          ? this.val + this.special
          : this.val * 100 + "%";
      }
      scaledBy(t) {
        return new m({ val: t * this.val, absolute: this.absolute });
      }
      static inPixels(t) {
        return new m({ val: t, absolute: !0 });
      }
      static inPercent(t) {
        return new m({ val: t / 100, absolute: !1 });
      }
      static forScalar(t) {
        return new m({ val: t, absolute: !1 });
      }
      static special(t, e) {
        return new m({ val: t, absolute: !1, special: e });
      }
      static parseLengthStyle(t) {
        if (t == "") return _c;
        let e = parseFloat(t);
        return isNaN(e)
          ? (console.error(
              "Could not properly parse specified length style info: '" +
                t +
                "'."
            ),
            _c)
          : t.indexOf("px") != -1
          ? { val: e, absolute: !0 }
          : t.indexOf("pt") != -1
          ? { val: (4 * e) / 3, absolute: !0 }
          : t.indexOf("%") != -1
          ? { val: e / 100, absolute: !1 }
          : t.indexOf("rem") != -1
          ? { val: e, absolute: !1, special: "rem" }
          : t.indexOf("em") != -1
          ? { val: e, absolute: !1, special: "em" }
          : { val: (4 * e) / 3, absolute: !0 };
      }
    };
    a(m, "ParsedLengthStyle");
    var _c = new m("1em");
    var Pe = class extends K {
      constructor() {
        super(0);
        this.type = "blank";
      }
    };
    a(Pe, "BlankBanner");
    var Fi = class {
      constructor() {
        this._activeBannerHeight = K.DEFAULT_HEIGHT;
        this.events = new qc.default();
        this.constructContainer();
      }
      constructContainer() {
        let t = W("div");
        return (
          (t.id = "keymanweb_banner_container"),
          (t.className = "kmw-banner-container"),
          (this.bannerContainer = t)
        );
      }
      get element() {
        return this.bannerContainer;
      }
      appendStyles() {
        this.currentBanner && this.currentBanner.appendStyleSheet();
      }
      get banner() {
        return this.currentBanner;
      }
      set banner(t) {
        if (this.currentBanner) {
          if (t == this.currentBanner) return;
          {
            let e = this.currentBanner;
            (this.currentBanner = t),
              this.bannerContainer.replaceChild(t.getDiv(), e.getDiv());
          }
        } else
          (this.currentBanner = t),
            t && this.bannerContainer.appendChild(t.getDiv());
        t instanceof Pe || (t.height = this.activeBannerHeight),
          this.events.emit("bannerchange");
      }
      get height() {
        return this.currentBanner ? this.currentBanner.height : 0;
      }
      get activeBannerHeight() {
        return this._activeBannerHeight;
      }
      set activeBannerHeight(t) {
        (this._activeBannerHeight = t),
          this.currentBanner &&
            !(this.currentBanner instanceof Pe) &&
            (this.currentBanner.height = t);
      }
      get layoutHeight() {
        return m.inPixels(this.height);
      }
      get width() {
        var t;
        return (t = this.currentBanner) == null ? void 0 : t.width;
      }
      set width(t) {
        this.currentBanner && (this.currentBanner.width = t);
      }
      refreshLayout() {
        var t, e;
        (e = (t = this.currentBanner).refreshLayout) == null || e.call(t);
      }
    };
    a(Fi, "BannerView");
    var Qi = class extends K {
      constructor(e, n) {
        var t = (...args) => {
          super(...args);
        };
        e.length > 0 ? (t(), n && (this.height = n)) : t(0),
          (this.type = "image"),
          e.indexOf("base64") >= 0
            ? console.log("Loading img from base64 data")
            : console.log("Loading img with src '" + e + "'"),
          (this.img = document.createElement("img")),
          this.img.setAttribute("src", e);
        let i = this.img.style;
        (i.width = "100%"),
          (i.height = "100%"),
          this.getDiv().appendChild(this.img),
          console.log("Image loaded.");
      }
      setImagePath(e) {
        this.img && this.img.setAttribute("src", e);
      }
    };
    a(Qi, "ImageBanner");
    function Ne(o, t) {
      t instanceof Error
        ? console.error(`${o}: ${t.message}

${t.stack}`)
        : (console.error(o), console.error(t));
    }
    a(Ne, "reportError");
    var yi = class {
      constructor(t) {
        (this.queue = []), (this.defaultWaitFactory = t || (() => Se(0)));
      }
      get defaultWait() {
        return this.defaultWaitFactory();
      }
      get ready() {
        return this.queue.length == 0 && !this.waitLock;
      }
      triggerNextClosure() {
        return Z(this, null, function* () {
          if (this.queue.length == 0) return;
          let t = this.queue.shift();
          this.waitLock = Promise.resolve();
          let e;
          try {
            e = t();
          } catch (n) {
            Ne("Error from queued closure", n);
          }
          (e = e != null ? e : this.defaultWaitFactory()), (this.waitLock = e);
          try {
            yield e;
          } catch (n) {
            Ne("Async error from queued closure", n);
          }
          (this.waitLock = null), this.triggerNextClosure();
        });
      }
      runAsync(t) {
        let e = this.ready;
        this.queue.push(t), e && this.triggerNextClosure();
      }
    };
    a(yi, "AsyncClosureDispatchQueue");
    function $c(o) {
      return "targetX" in o && "targetY" in o && "t" in o;
    }
    a($c, "isAnInputSample");
    var O = class {
      constructor(t) {
        this.rawLinearSums = { x: 0, y: 0, t: 0 };
        this.coordArcSum = 0;
        this._sampleCount = 0;
        if (!!t)
          if (t instanceof O)
            Object.assign(this, t),
              (this.rawLinearSums = C({}, t.rawLinearSums));
          else if ($c(t)) Object.assign(this, this.extend(t));
          else
            throw new Error(
              "A constructor for this input pattern has not yet been implemented"
            );
      }
      extend(t) {
        return this._extend(new O(this), t);
      }
      _extend(t, e) {
        t._initialSample || ((t._initialSample = e), (t.baseSample = e));
        let n = t.baseSample;
        this.followingSample = e;
        let i = e.targetX - n.targetX,
          s = e.targetY - n.targetY,
          c = e.t - n.t;
        if (
          ((t.rawLinearSums.x += i),
          (t.rawLinearSums.y += s),
          (t.rawLinearSums.t += c),
          this.lastSample)
        ) {
          let l = e.targetX - this.lastSample.targetX,
            r = e.targetY - this.lastSample.targetY,
            B = e.t - this.lastSample.t,
            d = l * l + r * r,
            g = Math.sqrt(d);
          t.coordArcSum += g;
        }
        return (t._lastSample = e), (t.sampleCount = this.sampleCount + 1), t;
      }
      deaccumulate(t) {
        let e = new O(this);
        return this._deaccumulate(e, t);
      }
      _deaccumulate(t, e) {
        if (!e) return t;
        if (!e.followingSample || !e.lastSample)
          throw "Invalid argument:  stats missing necessary tracking variable.";
        for (let n in t.rawLinearSums) {
          let i = n;
          t.rawLinearSums[i] -= e.rawLinearSums[i];
        }
        if (e.followingSample && e.lastSample) {
          let n = e.followingSample.targetX - e.lastSample.targetX,
            i = e.followingSample.targetY - e.lastSample.targetY,
            s = e.followingSample.t - e.lastSample.t,
            c = n * n + i * i,
            l = Math.sqrt(c);
          (t.coordArcSum -= l), (t.coordArcSum -= e.coordArcSum);
        }
        return (
          (t.sampleCount -= e.sampleCount),
          (t._initialSample = e.followingSample),
          t
        );
      }
      translateCoordSystem(t) {
        let e = new O(this);
        return this._translateCoordSystem(e, t);
      }
      _translateCoordSystem(t, e) {
        if (this.sampleCount == 0) return t;
        let n = t.initialSample == t.lastSample;
        return (
          (t._initialSample = e(t.initialSample)),
          (t.baseSample = e(t.baseSample)),
          (t._lastSample = n ? t._initialSample : e(t.lastSample)),
          t
        );
      }
      replaceInitialSample(t) {
        let e = new O(this);
        return this._replaceInitialSample(e, t);
      }
      _replaceInitialSample(t, e) {
        if (this.sampleCount == 0)
          throw new Error("no sample available to replace");
        let n = t.initialSample;
        if (((t._initialSample = e), this.sampleCount > 1)) {
          let i = e.targetX - n.targetX,
            s = e.targetY - n.targetY,
            c = e.t - n.t;
          (t.rawLinearSums.x += i),
            (t.rawLinearSums.y += s),
            (t.rawLinearSums.t += c);
          let l = i * i + s * s,
            r = Math.sqrt(l);
          t.coordArcSum += r;
        } else t._lastSample = e;
        return t;
      }
      get lastSample() {
        return this._lastSample;
      }
      get lastTimestamp() {
        var t;
        return (t = this.lastSample) == null ? void 0 : t.t;
      }
      get sampleCount() {
        return this._sampleCount;
      }
      set sampleCount(t) {
        this._sampleCount = t;
      }
      get initialSample() {
        return this._initialSample;
      }
      mappingConstant(t) {
        if (!!this.baseSample)
          return t == "t"
            ? this.baseSample.t
            : t == "x"
            ? this.baseSample.targetX
            : t == "y"
            ? this.baseSample.targetY
            : 0;
      }
      mean(t) {
        return (
          this.rawLinearSums[t] / this.sampleCount + this.mappingConstant(t)
        );
      }
      get netDistance() {
        if (!this.lastSample || !this.initialSample) return 0;
        let t = this.lastSample.targetX - this.initialSample.targetX,
          e = this.lastSample.targetY - this.initialSample.targetY;
        return Math.sqrt(t * t + e * e);
      }
      get duration() {
        return !this.lastSample || !this.initialSample
          ? 0
          : this.lastSample.t - this.initialSample.t;
      }
      get angle() {
        if (this.sampleCount == 1 || !this.lastSample || !this.initialSample)
          return;
        if (this.netDistance < 1) return;
        let t = this.lastSample.targetX - this.initialSample.targetX,
          e = this.lastSample.targetY - this.initialSample.targetY,
          n = Math.acos(-e / this.netDistance);
        return t < 0 ? 2 * Math.PI - n : n;
      }
      get angleInDegrees() {
        return (this.angle * 180) / Math.PI;
      }
      get cardinalDirection() {
        if (
          this.sampleCount == 1 ||
          !this.lastSample ||
          !this.initialSample ||
          isNaN(this.angle) ||
          this.angle === null ||
          this.angle === void 0
        )
          return;
        let t = ["n", "ne", "e", "se", "s", "sw", "w", "nw", "n"],
          e = Math.ceil((this.angleInDegrees - 22.5) / 45);
        return t[e];
      }
      get speed() {
        return this.duration ? this.netDistance / this.duration : 0;
      }
      get rawDistance() {
        return this.coordArcSum;
      }
      toJSON() {
        return {
          angle: this.angle,
          cardinal: this.cardinalDirection,
          netDistance: this.netDistance,
          duration: this.duration,
          sampleCount: this.sampleCount,
          rawDistance: this.rawDistance,
        };
      }
    };
    a(O, "CumulativePathStats");
    function Gn(o, t) {
      let e = o.gestures.find((n) => n.id == t);
      if (!e) throw new Error(`Could not find spec for gesture with id '${t}'`);
      return e;
    }
    a(Gn, "getGestureModel");
    function el(o, t) {
      let e = o.sets[t];
      if (!e)
        throw new Error(`Could not find a defined gesture-set with id '${t}'`);
      let n = o.gestures.filter((s) => !!e.find((c) => s.id == c)),
        i = e.filter((s) => !n.find((c) => c.id == s));
      if (i.length > 0)
        throw new Error(
          `Set '${t}' cannot find definitions for gestures with ids ${i}`
        );
      return n;
    }
    a(el, "getGestureModelSet");
    var tl = { gestures: [], sets: { default: [] } };
    var ui = class {
      constructor() {}
      getBoundingClientRect() {
        return new DOMRect(
          0,
          0,
          Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
          ),
          Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
          )
        );
      }
    };
    a(ui, "ViewportZoneSource");
    var Fe = class {
      get edgePadding() {
        return this._edgePadding;
      }
      constructor(t, e) {
        Array.isArray(t) && ((e = t), (t = new ui())),
          (this.root = t),
          (e = e || [0, 0, 0, 0]),
          this.updatePadding(e);
      }
      updatePadding(t) {
        switch (t.length) {
          case 1:
            let e = t[0];
            this._edgePadding = { x: e, y: e, w: 2 * e, h: 2 * e };
            break;
          case 2:
            this._edgePadding = { x: t[1], y: t[0], w: 2 * t[1], h: 2 * t[0] };
            break;
          case 3:
            this._edgePadding = {
              x: t[1],
              y: t[0],
              w: 2 * t[1],
              h: t[0] + t[2],
            };
            break;
          case 4:
            this._edgePadding = {
              x: t[3],
              y: t[0],
              w: t[1] + t[3],
              h: t[0] + t[2],
            };
            break;
          default:
            throw new Error(
              "Invalid values for PaddedZoneSource's edgePadding - must be between 1 to 4 `number` values."
            );
        }
      }
      getBoundingClientRect() {
        let t = this.root.getBoundingClientRect();
        return new DOMRect(
          t.left + this.edgePadding.x,
          t.top + this.edgePadding.y,
          t.width - this.edgePadding.w,
          t.height - this.edgePadding.h
        );
      }
    };
    a(Fe, "PaddedZoneSource");
    function ys(o) {
      var e, n, i, s, c, l, r;
      let t = C({}, o);
      if (
        ((t.mouseEventRoot = (e = t.mouseEventRoot) != null ? e : t.targetRoot),
        (t.touchEventRoot = (n = t.touchEventRoot) != null ? n : t.targetRoot),
        (t.inputStartBounds =
          (i = t.inputStartBounds) != null ? i : t.targetRoot),
        (t.maxRoamingBounds =
          (s = t.maxRoamingBounds) != null ? s : t.targetRoot),
        (t.safeBounds = (c = t.safeBounds) != null ? c : new Fe([2])),
        (t.itemIdentifier = (l = t.itemIdentifier) != null ? l : () => null),
        (t.recordingMode = !!t.recordingMode),
        (t.historyLength =
          ((r = t.historyLength) != null ? r : 0) > 0 ? t.historyLength : 0),
        o.paddedSafeBounds)
      )
        delete t.safeBoundPadding;
      else {
        let B = o.safeBoundPadding;
        typeof B == "number" && (B = [B]),
          (B = B != null ? B : [3]),
          (t.paddedSafeBounds = new Fe(t.safeBounds, B));
      }
      return t;
    }
    a(ys, "preprocessRecognizerConfig");
    var il = v(A(), 1);
    var nl = v(A(), 1);
    var je = class extends nl.default {
      constructor() {
        super();
        this._isComplete = !1;
        this._stats = new O();
      }
      get stats() {
        return this._stats;
      }
      clone() {
        let e = new je();
        return (
          (e._isComplete = this._isComplete),
          (e._wasCancelled = this._wasCancelled),
          (e._stats = new O(this._stats)),
          e
        );
      }
      get isComplete() {
        return this._isComplete;
      }
      get wasCancelled() {
        return this._wasCancelled;
      }
      translateCoordSystem(e) {
        this._stats = this._stats.translateCoordSystem(e);
      }
      replaceInitialSample(e) {
        this._stats = this._stats.replaceInitialSample(e);
      }
      extend(e) {
        if (this._isComplete)
          throw new Error(
            "Invalid state:  this GesturePath has already terminated."
          );
        (this._stats = this._stats.extend(e)), this.emit("step", e);
      }
      terminate(e = !1) {
        this._isComplete ||
          ((this._wasCancelled = e),
          (this._isComplete = !0),
          e ? this.emit("invalidated") : this.emit("complete"),
          this.removeAllListeners());
      }
      toJSON() {
        return { stats: this.stats, wasCancelled: this.wasCancelled };
      }
    };
    a(je, "GesturePath");
    var pe = class extends je {
      constructor() {
        super(...arguments);
        this.samples = [];
      }
      clone() {
        let e = new pe();
        return (
          (e.samples = [].concat(this.samples)),
          (e._isComplete = this._isComplete),
          (e._wasCancelled = this._wasCancelled),
          (e._stats = new O(this._stats)),
          e
        );
      }
      static deserialize(e) {
        let n = new pe();
        (n.samples = [].concat(e.coords.map((s) => C({}, s)))),
          (n._isComplete = !0),
          (n._wasCancelled = e.wasCancelled);
        let i = n.samples.reduce((s, c) => s.extend(c), new O());
        return (n._stats = i), n;
      }
      extend(e) {
        if (this.isComplete)
          throw new Error(
            "Invalid state:  this GesturePath has already terminated."
          );
        this.samples.push(e), super.extend(e);
      }
      translateCoordSystem(e) {
        super.translateCoordSystem(e);
        for (let n = 0; n < this.samples.length; n++)
          this.samples[n] = e(this.samples[n]);
      }
      get coords() {
        return this.samples;
      }
      toJSON() {
        let e = {
          coords: [].concat(
            this.samples.map((n) => ({
              targetX: n.targetX,
              targetY: n.targetY,
              t: n.t,
              item: n.item,
            }))
          ),
          wasCancelled: this.wasCancelled,
          stats: this.stats,
        };
        for (let n of e.coords)
          delete n.clientX,
            delete n.clientY,
            n.item === void 0 && delete n.item;
        return e;
      }
    };
    a(pe, "GestureDebugPath");
    var Ce = class {
      constructor(t, e, n, i) {
        this.stateToken = null;
        (this.rawIdentifier = t),
          (this.isFromTouch = n),
          (this._path = i ? new i() : new je()),
          (this.recognizerConfigStack = Array.isArray(e) ? e : [e]);
      }
      get path() {
        return this._path;
      }
      setGestureMatchInspector(t) {
        if (this._matchInspectionClosure)
          throw new Error(
            "Invalid state:  the match-inspection closure has already been set"
          );
        this._matchInspectionClosure = t;
      }
      update(t) {
        this.path.extend(t), this._baseItem || (this._baseItem = t.item);
      }
      get baseItem() {
        return this._baseItem;
      }
      set baseItem(t) {
        this._baseItem = t;
      }
      get currentSample() {
        return this.path.stats.lastSample;
      }
      get potentialModelMatchIds() {
        return this._matchInspectionClosure(this);
      }
      constructSubview(t, e, n) {
        return new Y(this, this.recognizerConfigStack, t, e, n);
      }
      terminate(t) {
        this.path.terminate(t);
      }
      get isPathComplete() {
        return this.path.isComplete;
      }
      get identifier() {
        return `${this.isFromTouch ? "touch" : "mouse"}:${this.rawIdentifier}`;
      }
      pushRecognizerConfig(t) {
        let e = V(C({}, t), {
          mouseEventRoot: this.recognizerConfigStack[0].mouseEventRoot,
          touchEventRoot: this.recognizerConfigStack[0].touchEventRoot,
        });
        this.recognizerConfigStack.push(ys(e));
      }
      popRecognizerConfig() {
        if (this.recognizerConfigStack.length == 1)
          throw new Error(
            "Cannot 'pop' the original recognizer-configuration for this GestureSource."
          );
        return this.recognizerConfigStack.pop();
      }
      get currentRecognizerConfig() {
        return this.recognizerConfigStack[
          this.recognizerConfigStack.length - 1
        ];
      }
      toJSON() {
        return {
          identifier: this.identifier,
          isFromTouch: this.isFromTouch,
          path: this.path.toJSON(),
          stateToken: this.stateToken,
        };
      }
    };
    a(Ce, "GestureSource");
    var Y = class extends Ce {
      constructor(e, n, i, s, c) {
        let l = 0,
          r = e.path.stats.sampleCount;
        e instanceof Y && (l = e._baseStartIndex);
        super(
          e.rawIdentifier,
          n,
          e.isFromTouch,
          Object.getPrototypeOf(e.path).constructor
        );
        let B = (this._baseSource = e instanceof Y ? e._baseSource : e);
        this.stateToken = c != null ? c : e.stateToken;
        let d = a((u) => {
            let I = this.recognizerTranslation,
              b = V(C({}, u), {
                targetX: u.targetX - I.x,
                targetY: u.targetY - I.y,
              });
            return (
              this.stateToken && (b.stateToken = this.stateToken),
              (this.stateToken != B.stateToken ||
                this.stateToken != e.stateToken) &&
                (b.item = this.currentRecognizerConfig.itemIdentifier(b, null)),
              b
            );
          }, "translateSample"),
          g = e.path.stats.lastSample;
        i
          ? ((this._baseStartIndex = l = Math.max(l + r - 1, 0)),
            (r = r > 0 ? 1 : 0))
          : (this._baseStartIndex = l),
          i
            ? e.path.stats.sampleCount &&
              this._path.extend(e.path.stats.lastSample)
            : (this._path = e.path.clone()),
          this._path.translateCoordSystem(d),
          s
            ? (this._baseItem = e.baseItem)
            : (this._baseItem = g == null ? void 0 : g.item);
        let Q = a(() => this.path.terminate(!1), "completeHook"),
          F = a(() => this.path.terminate(!0), "invalidatedHook"),
          y = a((u) => {
            super.update(d(u));
          }, "stepHook");
        B.path.on("complete", Q),
          B.path.on("invalidated", F),
          B.path.on("step", y),
          (this.subviewDisconnector = () => {
            B.path.off("complete", Q),
              B.path.off("invalidated", F),
              B.path.off("step", y);
          }),
          B.isPathComplete &&
            (this.path.terminate(B.path.wasCancelled), this.disconnect());
      }
      get recognizerTranslation() {
        if (
          this.recognizerConfigStack.length == 1 ||
          !this.currentRecognizerConfig
        )
          return { x: 0, y: 0 };
        let n = this.currentRecognizerConfig.targetRoot.getBoundingClientRect(),
          i = this.recognizerConfigStack[0].targetRoot.getBoundingClientRect();
        return { x: n.left - i.left, y: n.top - i.top };
      }
      get baseSource() {
        return this._baseSource;
      }
      disconnect() {
        this.subviewDisconnector &&
          (this.subviewDisconnector(), (this.subviewDisconnector = null));
      }
      pushRecognizerConfig(e) {
        throw new Error(
          "Pushing and popping of recognizer configurations should only be called on the base GestureSource"
        );
      }
      popRecognizerConfig() {
        throw new Error(
          "Pushing and popping of recognizer configurations should only be called on the base GestureSource"
        );
      }
      update(e) {
        throw new Error(
          "Updates should be provided through the base GestureSource."
        );
      }
      terminate(e) {
        this.baseSource.terminate(e);
      }
    };
    a(Y, "GestureSourceSubview");
    var Ot = class extends Ce {
      constructor(e, n, i) {
        super(e, n, i, pe);
        this.stateToken = null;
      }
      initPath() {
        return new pe();
      }
      static deserialize(e, n) {
        let i = n !== void 0 ? n : this._jsonIdSeed++,
          s = e.isFromTouch,
          c = pe.deserialize(e.path),
          l = new Ot(i, null, s);
        return (l._path = c), l;
      }
    };
    a(Ot, "GestureDebugSource");
    var ic = class extends il.default {
        constructor(e) {
          var n;
          super();
          this._activeTouchpoints = [];
          this.identifierMap = {};
          (this.config = e),
            (this.sourceConstructor =
              (n = e == null ? void 0 : e.recordingMode) == null || n
                ? Ot
                : Ce);
        }
        createTouchpoint(e, n) {
          let i = ic.IDENTIFIER_SEED++;
          this.identifierMap[e] = i;
          let s = new this.sourceConstructor(i, this.config, n);
          return (s.stateToken = this.stateToken), s;
        }
        fulfillInputStart(e) {}
        maintainTouchpoints(e) {
          e || (e = []),
            this._activeTouchpoints
              .filter((n) => !e.includes(n))
              .forEach((n) => n.terminate(!0));
        }
        hasActiveTouchpoint(e) {
          return this.identifierMap[e] !== void 0;
        }
        getTouchpointWithId(e) {
          let n = this.identifierMap[e];
          return this._activeTouchpoints.find((i) => i.rawIdentifier == n);
        }
        getConfigForId(e) {
          return this.getTouchpointWithId(e).currentRecognizerConfig;
        }
        getStateTokenForId(e) {
          var n;
          return (n = this.getTouchpointWithId(e).stateToken) != null
            ? n
            : null;
        }
        dropTouchpoint(e) {
          let n = e.rawIdentifier;
          this._activeTouchpoints = this._activeTouchpoints.filter(
            (i) => e != i
          );
          for (let i of Object.keys(this.identifierMap))
            this.identifierMap[i] == n && delete this.identifierMap[i];
        }
        addTouchpoint(e) {
          this._activeTouchpoints.push(e);
        }
        get activeSources() {
          return [].concat(this._activeTouchpoints);
        }
      },
      pn = ic;
    a(pn, "InputEngineBase"), (pn.IDENTIFIER_SEED = 0);
    function sc(o, t, e) {
      let n = o.targetRoot.getBoundingClientRect();
      return {
        clientX: t,
        clientY: e,
        targetX: t - n.left,
        targetY: e - n.top,
      };
    }
    a(sc, "processSampleClientCoords");
    var Pt = class extends pn {
      buildSampleFor(t, e, n, i, s) {
        var B, d;
        let c = V(C({}, sc(this.config, t, e)), {
            t: i,
            stateToken:
              (B = s == null ? void 0 : s.stateToken) != null
                ? B
                : this.stateToken,
          }),
          r = (
            (d =
              s == null ? void 0 : s.currentRecognizerConfig.itemIdentifier) !=
              null
              ? d
              : this.config.itemIdentifier
          )(c, n);
        return (c.item = r), c;
      }
      onInputStart(t, e, n, i) {
        let s = this.createTouchpoint(t, i);
        s.update(e),
          this.addTouchpoint(s),
          s.path.on("invalidated", () => {
            this.dropTouchpoint(s);
          }),
          s.path.on("complete", () => {
            this.dropTouchpoint(s);
          });
        try {
          this.emit("pointstart", s);
        } catch (c) {
          Ne(
            "Engine-internal error while initializing gesture matching for new source",
            c
          );
        }
        return s;
      }
      onInputMove(t, e, n) {
        if (!!t)
          try {
            t.update(e);
          } catch (i) {
            Ne("Error occurred while updating source", i);
          }
      }
      onInputMoveCancel(t, e, n) {
        if (!!t)
          try {
            t.update(e), t.path.terminate(!0);
          } catch (i) {
            Ne("Error occurred while cancelling further input for source", i);
          }
      }
      onInputEnd(t, e) {
        if (!!t)
          try {
            t.path.terminate(!1);
          } catch (n) {
            Ne("Error occurred while finalizing input for source", n);
          }
      }
    };
    a(Pt, "InputEventEngine");
    var Xn = class {
        constructor() {}
        static getCoordZoneBitmask(t, e) {
          let n = e.getBoundingClientRect(),
            i = 0;
          return (
            (i |= t.clientX < n.left ? Xn.FAR_LEFT : 0),
            (i |= t.clientX > n.right ? Xn.FAR_RIGHT : 0),
            (i |= t.clientY < n.top ? Xn.FAR_TOP : 0),
            (i |= t.clientY > n.bottom ? Xn.FAR_BOTTOM : 0),
            i
          );
        }
        static inputStartOutOfBoundsCheck(t, e) {
          return !!this.getCoordZoneBitmask(t, e.inputStartBounds);
        }
        static inputStartSafeBoundProximityCheck(t, e) {
          return this.getCoordZoneBitmask(t, e.paddedSafeBounds);
        }
        static inputMoveCancellationCheck(t, e, n) {
          return (
            (n = n || 0),
            this.getCoordZoneBitmask(t, e.maxRoamingBounds)
              ? !0
              : !!(this.getCoordZoneBitmask(t, e.safeBounds) & ~n)
          );
        }
      },
      le = Xn;
    a(le, "ZoneBoundaryChecker"),
      (le.FAR_TOP = 8),
      (le.FAR_LEFT = 4),
      (le.FAR_BOTTOM = 2),
      (le.FAR_RIGHT = 1);
    var Ii = class extends Pt {
      constructor(e) {
        super(e);
        this.hasActiveClick = !1;
        this.disabledSafeBounds = 0;
        this.currentSource = null;
        this.activeIdentifier = 0;
        (this._mouseStart = (n) => this.onMouseStart(n)),
          (this._mouseMove = (n) => this.onMouseMove(n)),
          (this._mouseEnd = (n) => this.onMouseEnd(n));
      }
      get eventRoot() {
        return this.config.mouseEventRoot;
      }
      registerEventHandlers() {
        this.eventRoot.addEventListener("mousedown", this._mouseStart, !0),
          this.eventRoot.addEventListener("mousemove", this._mouseMove, !1),
          this.eventRoot.addEventListener("mouseup", this._mouseEnd, !0);
      }
      unregisterEventHandlers() {
        this.eventRoot.removeEventListener("mousedown", this._mouseStart, !0),
          this.eventRoot.removeEventListener("mousemove", this._mouseMove, !1),
          this.eventRoot.removeEventListener("mouseup", this._mouseEnd, !0);
      }
      preventPropagation(e) {
        e.preventDefault(),
          (e.cancelBubble = !0),
          (e.returnValue = !1),
          typeof e.stopImmediatePropagation == "function"
            ? e.stopImmediatePropagation()
            : typeof e.stopPropagation == "function" && e.stopPropagation();
      }
      buildSampleFromEvent(e) {
        return this.buildSampleFor(
          e.clientX,
          e.clientY,
          e.target,
          performance.now(),
          this.currentSource
        );
      }
      onMouseStart(e) {
        if (!this.config.targetRoot.contains(e.target)) return;
        this.preventPropagation(e);
        let n = this.buildSampleFromEvent(e);
        le.inputStartOutOfBoundsCheck(n, this.config) ||
          (this.disabledSafeBounds = le.inputStartSafeBoundProximityCheck(
            n,
            this.config
          ));
        let i = this.onInputStart(this.activeIdentifier, n, e.target, !1);
        this.currentSource = i;
        let s = a(() => {
          this.currentSource = null;
        }, "cleanup");
        i.path.on("complete", s), i.path.on("invalidated", s);
      }
      onMouseMove(e) {
        let n = this.currentSource;
        if (!n) return;
        let i = this.buildSampleFromEvent(e);
        if (!e.buttons) {
          this.hasActiveClick &&
            ((this.hasActiveClick = !1),
            this.onInputMoveCancel(n, i, e.target));
          return;
        }
        this.preventPropagation(e);
        let s = n.currentRecognizerConfig;
        le.inputMoveCancellationCheck(i, s, this.disabledSafeBounds)
          ? this.onInputMoveCancel(n, i, e.target)
          : this.onInputMove(n, i, e.target);
      }
      onMouseEnd(e) {
        let n = this.currentSource;
        !n ||
          (e.buttons || (this.hasActiveClick = !1),
          this.onInputEnd(n, e.target));
      }
    };
    a(Ii, "MouseEventEngine");
    function sl(o) {
      let t = [];
      for (let e = 0; e < o.length; e++) t.push(o.item(e));
      return t;
    }
    a(sl, "touchListToArray");
    var Ui = class extends Pt {
      constructor(e) {
        super(e);
        this.eventDispatcher = new yi();
        this.safeBoundMaskMap = {};
        this.pendingSourcePromises = new Map();
        this.inputStartSignalMap = new Map();
        (this._touchStart = (n) => this.onTouchStart(n)),
          (this._touchMove = (n) => this.onTouchMove(n)),
          (this._touchEnd = (n) => this.onTouchEnd(n));
      }
      get eventRoot() {
        return this.config.touchEventRoot;
      }
      registerEventHandlers() {
        this.eventRoot.addEventListener("touchstart", this._touchStart, {
          capture: !0,
          passive: !1,
        }),
          this.eventRoot.addEventListener("touchmove", this._touchMove, {
            capture: !1,
            passive: !1,
          }),
          this.eventRoot.addEventListener("touchend", this._touchEnd, {
            capture: !0,
            passive: !1,
          });
      }
      unregisterEventHandlers() {
        this.eventRoot.removeEventListener("touchstart", this._touchStart, !0),
          this.eventRoot.removeEventListener("touchmove", this._touchMove, !1),
          this.eventRoot.removeEventListener("touchend", this._touchEnd, !0);
      }
      preventPropagation(e) {
        e.cancelable && e.preventDefault(),
          typeof e.stopImmediatePropagation == "function"
            ? e.stopImmediatePropagation()
            : typeof e.stopPropagation == "function" && e.stopPropagation();
      }
      dropTouchpoint(e) {
        super.dropTouchpoint(e);
        for (let n of Object.keys(this.safeBoundMaskMap))
          this.getTouchpointWithId(Number.parseInt(n, 10)) == e &&
            delete this.safeBoundMaskMap[n];
      }
      fulfillInputStart(e) {
        let n = this.inputStartSignalMap.get(e);
        n && (this.inputStartSignalMap.delete(e), n.resolve());
      }
      hasActiveTouchpoint(e) {
        return (
          super.hasActiveTouchpoint(e) || !!this.pendingSourcePromises.has(e)
        );
      }
      buildSampleFromTouch(e, n, i) {
        return this.buildSampleFor(e.clientX, e.clientY, e.target, n, i);
      }
      onTouchStart(e) {
        if (!this.config.targetRoot.contains(e.target)) return;
        this.preventPropagation(e);
        let n = sl(e.touches),
          i = sl(e.changedTouches),
          c = n
            .filter(
              (r) => i.findIndex((B) => r.identifier == B.identifier) == -1
            )
            .map((r) => this.pendingSourcePromises.get(r.identifier));
        this.eventDispatcher.runAsync(() =>
          Z(this, null, function* () {
            let r = yield Promise.all(c);
            return (
              this.maintainTouchpoints(r), this.eventDispatcher.defaultWait
            );
          })
        );
        let l = new Map();
        for (let r = 0; r < e.changedTouches.length; r++) {
          let B = e.changedTouches.item(r),
            d = new S();
          this.pendingSourcePromises.set(B.identifier, d),
            l.set(B.identifier, d);
        }
        this.eventDispatcher.runAsync(() => {
          let r = performance.now(),
            B = null;
          for (let d = 0; d < e.changedTouches.length; d++) {
            let g = e.changedTouches.item(d),
              Q = g.identifier,
              F = this.buildSampleFromTouch(g, r, null);
            if (!le.inputStartOutOfBoundsCheck(F, this.config))
              this.safeBoundMaskMap[Q] = le.inputStartSafeBoundProximityCheck(
                F,
                this.config
              );
            else {
              l.get(Q).resolve(null);
              continue;
            }
            B = this.onInputStart(Q, F, e.target, !0);
            let y = l.get(Q);
            y.resolve(B);
            let u = a(() => {
              this.pendingSourcePromises.get(Q) == y &&
                this.pendingSourcePromises.delete(Q);
            }, "cleanup");
            B.path.on("complete", u), B.path.on("invalidated", u);
          }
          if (B) {
            let d = new S();
            return this.inputStartSignalMap.set(B, d), d.corePromise;
          }
        });
      }
      onTouchMove(e) {
        var i;
        for (let s = 0; s < e.touches.length; s++) {
          let c = e.touches.item(s);
          if (this.hasActiveTouchpoint(c.identifier)) {
            this.preventPropagation(e);
            break;
          }
        }
        let n = new Map();
        for (let s = 0; s < e.touches.length; s++) {
          let c = e.touches.item(s).identifier;
          n.set(
            c,
            (i = this.pendingSourcePromises.get(c)) == null
              ? void 0
              : i.corePromise
          );
        }
        this.eventDispatcher.runAsync(() =>
          Z(this, null, function* () {
            let s = yield Promise.all(n.values());
            return (
              this.maintainTouchpoints(s), this.eventDispatcher.defaultWait
            );
          })
        ),
          this.eventDispatcher.runAsync(() =>
            Z(this, null, function* () {
              let s = performance.now();
              for (let c = 0; c < e.touches.length; c++) {
                let l = e.touches.item(c),
                  r = l.identifier,
                  B = yield n.get(r);
                if (!B || B.isPathComplete) continue;
                let d = B.currentRecognizerConfig,
                  g = this.buildSampleFromTouch(l, s, B);
                le.inputMoveCancellationCheck(g, d, this.safeBoundMaskMap[r])
                  ? this.onInputMoveCancel(B, g, l.target)
                  : this.onInputMove(B, g, l.target);
              }
              return this.eventDispatcher.defaultWait;
            })
          );
      }
      onTouchEnd(e) {
        var i;
        for (let s = 0; s < e.changedTouches.length; s++) {
          let c = e.changedTouches.item(s);
          if (this.hasActiveTouchpoint(c.identifier)) {
            this.preventPropagation(e);
            break;
          }
        }
        let n = new Map();
        for (let s = 0; s < e.changedTouches.length; s++) {
          let c = e.changedTouches.item(s).identifier,
            l =
              (i = this.pendingSourcePromises.get(c)) == null
                ? void 0
                : i.corePromise;
          n.set(c, l);
        }
        this.eventDispatcher.runAsync(() =>
          Z(this, null, function* () {
            for (let s = 0; s < e.changedTouches.length; s++) {
              let c = e.changedTouches.item(s),
                l = yield n.get(c.identifier);
              !l || l.isPathComplete || this.onInputEnd(l, e.target);
            }
            return this.eventDispatcher.defaultWait;
          })
        );
      }
    };
    a(Ui, "TouchEventEngine");
    var rl = v(A(), 1);
    var cl = v(A(), 1);
    var hi = class {
      get promise() {
        return this.publishedPromise.corePromise;
      }
      constructor(t, e, n) {
        if (!t || !e)
          throw new Error(
            "A gesture-path source and contact-path model must be specified."
          );
        if (
          ((this.model = t),
          (this.publishedPromise = new S()),
          (this.source = e),
          (this.inheritedStats = n),
          (this.lastStats = null),
          t.timer)
        ) {
          let i = t.timer.inheritElapsed
            ? Math.min(e.path.stats.duration, t.timer.duration)
            : 0;
          (this.timerPromise = new We(t.timer.duration - i)),
            this.publishedPromise.then(() => {
              this.timerPromise.resolve(!1);
            }),
            this.timerPromise.then((s) => {
              let c = e instanceof Y ? e.baseSource : e,
                l = performance.now();
              !c.isPathComplete &&
                c.currentSample.t != l &&
                c.path.extend(V(C({}, c.currentSample), { t: l })),
                s != t.timer.expectedResult && this.finalize(!1, "timer"),
                this.finalize(!0, "timer");
            });
        }
      }
      finalize(t, e) {
        if (this.publishedPromise.isFulfilled) return this._result;
        let n = this.model;
        n.validateItem &&
          t &&
          (t = n.validateItem(
            this.source.path.stats.lastSample.item,
            this.baseItem
          ));
        let i;
        return (
          t
            ? (i = { type: n.pathResolutionAction, cause: e })
            : (i = { type: "reject", cause: e }),
          this.publishedPromise.resolve(i),
          (this._result = i),
          i
        );
      }
      get stats() {
        return this.source.path.stats;
      }
      get baseItem() {
        return this.source.baseItem;
      }
      get lastItem() {
        return this.source.currentSample.item;
      }
      update() {
        let t = this.model,
          e = this.source;
        if (e.path.wasCancelled) return this.finalize(!1, "path");
        if (
          t.itemChangeAction &&
          e.path.stats.sampleCount > 0 &&
          e.currentSample.item != e.baseItem
        ) {
          let n = t.itemChangeAction == "resolve";
          return this.finalize(n, "item");
        } else {
          let n =
            t.pathModel.evaluate(
              e.path,
              this.lastStats,
              e.baseItem,
              this.inheritedStats
            ) || "continue";
          return (
            (this.lastStats = e.path.stats),
            n != "continue"
              ? this.finalize(n == "resolve", "path")
              : e.path.isComplete
              ? this.finalize(!1, "path")
              : { type: "continue" }
          );
        }
      }
    };
    a(hi, "PathMatcher");
    var Vn = class {
      constructor(t, e) {
        this._isCancelled = !1;
        var l;
        if (!t || !e)
          throw new Error(
            "Construction of GestureMatcher requires a gesture-model spec and a source for related contact points."
          );
        if (!t.sustainTimer && !e)
          throw new Error(
            "If the provided gesture-model spec lacks a sustain timer, there must be an active contact point."
          );
        let n = e instanceof Ce ? null : e,
          i = n ? null : e;
        (this.predecessor = n),
          (this.publishedPromise = new S()),
          (this.model = t),
          t.sustainTimer &&
            ((this.sustainTimerPromise = new We(t.sustainTimer.duration)),
            this.sustainTimerPromise.then((r) => {
              let B = t.sustainTimer.expectedResult == r;
              this.finalize(B, "timer");
            })),
          (this.pathMatchers = []);
        let c = (i ? [i] : n.sources)
          .map((r) => (i && r == i ? i : r.isPathComplete ? null : r))
          .reduce((r, B) => (B ? r.concat(B) : r), []);
        if (t.sustainTimer && c.length > 0) {
          this.finalize(!1, "path");
          return;
        } else !t.sustainTimer && c.length == 0 && this.finalize(!1, "path");
        for (let r = 0; r < c.length; r++) {
          let B = c[r],
            d = B;
          B instanceof Y && (B.disconnect(), (d = B.baseSource));
          let g = t.contacts[r];
          if (!g)
            throw new Error(
              `No contact model for inherited path: gesture "${t.id}', entry ${r}`
            );
          let Q =
              (l = g == null ? void 0 : g.model.pathInheritance) != null
                ? l
                : "chop",
            F = !1,
            y;
          switch (Q) {
            case "reject":
              this.finalize(!1, "path");
              return;
            case "full":
              (y = B.constructSubview(!1, !0)),
                this.addContactInternal(y, B.path.stats, !0);
              continue;
            case "partial":
              F = !0;
            case "chop":
              (y = B.constructSubview(!0, F)),
                this.addContactInternal(y, B.path.stats, !0);
              break;
          }
        }
      }
      get sources() {
        return this.pathMatchers
          .map((t, e) => {
            if (!this.model.contacts[e].resetOnInstantFulfill) return t.source;
          })
          .filter((t) => !!t);
      }
      get promise() {
        return this.publishedPromise.corePromise;
      }
      cancel() {
        (this._isCancelled = !0),
          this._result || this.finalize(!1, "cancelled");
      }
      get isCancelled() {
        return this._isCancelled;
      }
      finalize(t, e) {
        var n, i;
        if (this.publishedPromise.isFulfilled) return this._result;
        try {
          let s;
          t
            ? (s = this.model.resolutionAction)
            : (e != "cancelled" &&
                ((n = this.model.rejectionActions) == null ? void 0 : n[e]) &&
                ((s = this.model.rejectionActions[e]), (s.item = "none")),
              (s = s || { type: "none", item: "none" }));
          let c;
          switch ((i = s.item) != null ? i : "current") {
            case "none":
              c = null;
              break;
            case "base":
              c = this.primaryPath.baseItem;
              break;
            case "current":
              c = this.primaryPath.currentSample.item;
              break;
          }
          let r = { matched: t, action: V(C({}, s), { item: c }) };
          return this.publishedPromise.resolve(r), (this._result = r), r;
        } catch (s) {
          this.publishedPromise.reject(s);
        }
      }
      finalizeSources() {
        if (!this._result)
          throw Error(
            "Invalid state for source-finalization - the matcher's evaluation of the gesture model is not yet complete"
          );
        let t = this._result.matched;
        for (let e = 0; e < this.pathMatchers.length; e++) {
          let n = this.pathMatchers[e],
            i = this.model.contacts[e];
          n.source.isPathComplete ||
            (((t && i.endOnResolve) || (!t && i.endOnReject)) &&
              n.source.terminate(!1));
        }
      }
      get primaryPath() {
        let t,
          e = Number.NEGATIVE_INFINITY;
        for (let n of this.pathMatchers)
          n.model.itemPriority > e && ((e = n.model.itemPriority), (t = n));
        return !t && this.predecessor
          ? this.predecessor.primaryPath
          : t == null
          ? void 0
          : t.source;
      }
      get baseItem() {
        return this.primaryPath.baseItem;
      }
      get currentItem() {
        return this.primaryPath.currentSample.item;
      }
      get allSourceIds() {
        let t = this.sources.map((n) => n.identifier),
          e = this.predecessor ? this.predecessor.allSourceIds : [];
        return (t = t.filter((n) => e.indexOf(n) == -1)), t.concat(e);
      }
      mayAddContact() {
        return this.pathMatchers.length < this.model.contacts.length;
      }
      addContact(t) {
        let e = this.pathMatchers.length;
        if (!this.mayAddContact())
          throw new Error(
            `The specified gesture model does not support more than ${e} contact points.`
          );
        this.addContactInternal(t.constructSubview(!1, !0), null);
      }
      get result() {
        return this._result;
      }
      addContactInternal(t, e, n) {
        var d;
        let i = this.pathMatchers.length,
          s = this.model.contacts[i],
          c = new hi(s.model, t, new O(e));
        this.pathMatchers.push(c);
        let l = null,
          r = null;
        if (!i && this.predecessor && this.model.sustainTimer) {
          l = this.predecessor.primaryPath;
          let g = (d = this.model.sustainTimer.baseItem) != null ? d : "result",
            Q;
          switch (g) {
            case "none":
              r = null;
              break;
            case "base":
              (r = this.predecessor.primaryPath.baseItem),
                (Q = this.predecessor.primaryPath.stateToken);
              break;
            case "result":
              (r = this.predecessor.result.action.item),
                (Q = this.predecessor.primaryPath.currentSample.stateToken);
              break;
          }
          (t.baseItem = r != null ? r : t.baseItem),
            (t.stateToken = Q),
            (t.currentSample.stateToken = Q),
            t.currentRecognizerConfig &&
              (t.currentSample.item = t.currentRecognizerConfig.itemIdentifier(
                t.currentSample,
                null
              ));
        } else (r = this.primaryPath.baseItem), (l = this.primaryPath);
        if (s.model.baseCoordReplacer) {
          let g = t.path.stats,
            Q = s.model.baseCoordReplacer(g, r);
          if (Q) {
            let F = V(
              C({}, sc(t.currentRecognizerConfig, Q.clientX, Q.clientY)),
              {
                t: Q.t || Q.t === 0 ? Q.t : g.initialSample.t,
                item: r,
                stateToken: t.stateToken,
              }
            );
            t.path.replaceInitialSample(F);
          }
        }
        if (
          s.model.allowsInitialState &&
          !s.model.allowsInitialState(
            t.currentSample,
            l.currentSample,
            r,
            l.stateToken
          )
        ) {
          this.pathMatchers.pop(), this.finalize(!1, "cancelled");
          return;
        }
        let B = c.update();
        if ((B == null ? void 0 : B.type) == "reject") {
          this.finalize(!1, n ? "cancelled" : "path");
          return;
        }
        c.promise.then((g) => {
          this.finalize(g.type == "resolve", g.cause);
        });
      }
      update() {
        this.pathMatchers.forEach((t) => {
          try {
            t.update();
          } catch (e) {
            console.error(e), this.finalize(!1, "cancelled");
          }
        });
      }
    };
    a(Vn, "GestureMatcher");
    var jt = class extends cl.default {
      constructor(e) {
        super();
        this._sourceSelector = [];
        this.potentialMatchers = [];
        this.sustainMode = !1;
        this.attemptSynchronousUpdate = a(() => {
          let n = this._sourceSelector
              .filter((s) => !s.source.isPathComplete)
              .map((s) => s.source.currentSample.t),
            i = n[0];
          n.find((s) => i != s) ||
            this.potentialMatchers.forEach((s) => s.update());
        }, "attemptSynchronousUpdate");
        this.baseGestureSetId = e || "default";
      }
      potentialMatchersForSource(e) {
        return this.potentialMatchers.filter((n) =>
          n.allSourceIds.find((i) => i == e.identifier)
        );
      }
      cascadeTermination() {
        let e = this.potentialMatchers,
          n = e.filter((l) => !l.model.sustainWhenNested),
          i = e.filter((l) => l.model.sustainWhenNested);
        this.potentialMatchers = i;
        let s = i
          .map((l) => l.allSourceIds)
          .reduce((l, r) => {
            for (let B of r) l.indexOf(B) == -1 && l.push(B);
            return l;
          }, []);
        return (
          this._sourceSelector
            .filter((l) => !s.find((r) => r == l.source.identifier))
            .forEach((l) => {
              l.matchPromise.resolve({
                matcher: null,
                result: {
                  matched: !1,
                  action: { type: "complete", item: null },
                },
              });
              let r = this._sourceSelector.indexOf(l);
              r > -1 && this._sourceSelector.splice(r, 1);
            }),
          n.forEach((l) => l.cancel()),
          (this.sustainMode = !0),
          this._sourceSelector.map((l) => l.source)
        );
      }
      matchGesture(e, n) {
        return Z(this, null, function* () {
          let i = e instanceof Ce,
            s = a((F) => {
              let y = F.sources.map((u) => u.baseSource);
              return y && y.length > 0
                ? y
                : F.predecessor
                ? s(F.predecessor)
                : [];
            }, "determinePredecessorSources"),
            c = i ? [e instanceof Y ? e.baseSource : e] : s(e),
            l = i ? e : null,
            r = i ? null : e;
          if (this.pendingMatchSetup) {
            let F = this.pendingMatchSetup,
              y = new S();
            (this.pendingMatchSetup = y.corePromise),
              yield F,
              this.pendingMatchSetup == y.corePromise &&
                (this.pendingMatchSetup = null),
              y.resolve();
          }
          i &&
            l.path.on("invalidated", () => {
              this.dropSourcesWithIds([l.identifier]);
            });
          let B = new S(),
            d = c.map((F) => {
              let y = { source: F, matchPromise: B, preserve: !0 };
              return this._sourceSelector.push(y), y;
            }),
            g = d.map((F) => F.matchPromise);
          if (i) {
            let F = this.potentialMatchers.filter((y) => y.mayAddContact());
            if (
              (F.forEach((y) => {
                y.addContact(l),
                  y.promise.then(this.matcherSelectionFilter(y, g));
              }),
              F.length > 0)
            ) {
              let y = this.stateToken,
                u = new S();
              (this.pendingMatchSetup = u.corePromise),
                yield Se(0),
                yield Se(0),
                this.pendingMatchSetup == u.corePromise &&
                  (this.pendingMatchSetup = null),
                u.resolve();
              let I = this.stateToken;
              if (y != I) {
                let h = l.currentSample;
                (l.stateToken = I),
                  (h.stateToken = I),
                  (h.item = e.currentRecognizerConfig.itemIdentifier(h, null)),
                  (l.baseItem = h.item);
              }
              let b = F.find((h) => h.result);
              if (b && b.allSourceIds.includes(e.identifier))
                return (
                  B.resolve({
                    matcher: null,
                    result: {
                      matched: !1,
                      action: { type: "complete", item: null },
                    },
                  }),
                  { selectionPromise: B.corePromise }
                );
            }
          }
          if (
            (d.forEach((F) => {
              F.preserve = !1;
            }),
            this.sustainMode && l)
          )
            return (
              B.resolve({
                matcher: null,
                result: {
                  matched: !1,
                  action: { type: "complete", item: null },
                },
              }),
              { selectionPromise: B.corePromise, sustainModeWithoutMatch: !0 }
            );
          let Q = n
            .map((F) => {
              try {
                return new Vn(F, l || r);
              } catch (y) {
                return console.error(y), null;
              }
            })
            .filter((F) => !!F);
          Q = Q.filter((F) => !F.result || F.result.matched !== !1);
          for (let F of Q) F.promise.then(this.matcherSelectionFilter(F, g));
          return (
            Q.length > 0
              ? (this.potentialMatchers = this.potentialMatchers.concat(Q))
              : B.resolve({
                  matcher: null,
                  result: {
                    matched: !1,
                    action: { type: "complete", item: null },
                  },
                }),
            this.potentialMatchers.sort(
              (F, y) => y.model.resolutionPriority - F.model.resolutionPriority
            ),
            this.resetSourceHooks(),
            { selectionPromise: B.corePromise }
          );
        });
      }
      resetSourceHooks() {
        let e = a((n) => {
          let i = n;
          i.path.off("step", this.attemptSynchronousUpdate),
            i.path.off("complete", this.attemptSynchronousUpdate),
            i.path.off("invalidated", this.attemptSynchronousUpdate),
            i.path.on("step", this.attemptSynchronousUpdate),
            i.path.on("complete", this.attemptSynchronousUpdate),
            i.path.on("invalidated", this.attemptSynchronousUpdate);
        }, "resetHooks");
        this._sourceSelector.forEach((n) => e(n.source));
      }
      dropSourcesWithIds(e) {
        for (let n of e) {
          let i = this._sourceSelector.findIndex(
            (s) => s.source.identifier == n
          );
          i > -1 &&
            this._sourceSelector.splice(i, 1)[0].matchPromise.resolve({
              matcher: null,
              result: { matched: !1, action: { type: "none", item: null } },
            });
        }
      }
      matchersForSource(e) {
        return this.potentialMatchers.filter(
          (n) => !!n.sources.find((i) => i.identifier == e.identifier)
        );
      }
      matcherSelectionFilter(e, n) {
        return (i) =>
          Z(this, null, function* () {
            e.isCancelled
              ? (i = { matched: !1, action: { type: "none", item: null } })
              : e.finalizeSources();
            let c = e.allSourceIds
                .map((r) =>
                  this._sourceSelector.find((B) => B.source.identifier == r)
                )
                .filter((r) => !!r),
              l = this.potentialMatchers.indexOf(e);
            if (l != -1) {
              if (
                (this.potentialMatchers.splice(l, 1), i.action.type == "none")
              ) {
                this.finalizeMatcherlessTrackers(c);
                return;
              }
              if (i.matched)
                for (let r of c) {
                  let B = this.matchersForSource(r.source);
                  (this.potentialMatchers = this.potentialMatchers.filter(
                    (d) => !B.find((g) => d == g)
                  )),
                    B.forEach((d) => {
                      d.cancel();
                    }),
                    (this._sourceSelector = this._sourceSelector.filter(
                      (d) => !c.find((g) => d == g)
                    )),
                    r.matchPromise.resolve({ matcher: e, result: i });
                }
              else {
                let r = a((B) => {
                  if (this.sustainMode && !B.sustainWhenNested) {
                    this.finalizeMatcherlessTrackers(c);
                    return;
                  }
                  let d = new Vn(B, e);
                  if (d.result && d.result.matched == !1) {
                    this.finalizeMatcherlessTrackers(c);
                    return;
                  }
                  d.promise.then(
                    this.matcherSelectionFilter(
                      d,
                      c.map((g) => g.matchPromise)
                    )
                  ),
                    this.potentialMatchers.push(d),
                    this.resetSourceHooks();
                }, "replacer");
                this.emit("rejectionwithaction", { matcher: e, result: i }, r);
                return;
              }
            }
          });
      }
      finalizeMatcherlessTrackers(e) {
        let n = e.map((i) => ({
          tracker: i,
          pendingCount: this.potentialMatchers.filter(
            (s) => !!s.allSourceIds.find((c) => i.source.identifier == c)
          ).length,
        }));
        for (let i of n)
          i.pendingCount == 0 &&
            !i.tracker.preserve &&
            i.tracker.matchPromise.resolve({
              matcher: null,
              result: { matched: !1, action: { type: "complete", item: null } },
            });
      }
    };
    a(jt, "MatcherSelector");
    var ll = v(A(), 1);
    var us = class {
      constructor(t, e) {
        var s, c;
        let { matcher: n, result: i } = t;
        (this.gestureSetId = e),
          (this.matchedId = n == null ? void 0 : n.model.id),
          (this.linkType = i.action.type),
          (this.item = i.action.item),
          (this.sources = n == null ? void 0 : n.sources),
          (s = this.sources) == null || s.forEach((l) => l.disconnect()),
          (c = this.sources) == null ||
            c.sort((l, r) =>
              (n == null ? void 0 : n.primaryPath) == l
                ? -1
                : (n == null ? void 0 : n.primaryPath) == r
                ? 1
                : 0
            ),
          (this.allSourceIds = (n == null ? void 0 : n.allSourceIds) || []);
      }
    };
    a(us, "GestureStageReport");
    var bi = class extends ll.default {
      constructor(e, n, i, s) {
        super();
        this.markedComplete = !1;
        this.selectionHandler = a(
          (e) =>
            Z(this, null, function* () {
              var d, g, Q, F, y, u, I, b, h, x;
              let n =
                  ((d = this.pushedSelector) == null
                    ? void 0
                    : d.baseGestureSetId) ||
                  ((g = this.selector) == null ? void 0 : g.baseGestureSetId),
                i = new us(e, n);
              e.matcher && this.stageReports.push(i);
              let s =
                  (Q = e.matcher) != null
                    ? Q
                    : this.stageReports[this.stageReports.length - 1],
                c =
                  (F =
                    s == null
                      ? void 0
                      : s.sources.map((G) =>
                          G instanceof Y ? G.baseSource : G
                        )) != null
                    ? F
                    : [],
                l = e.result.action.type;
              if (
                (l == "complete" || l == "none") &&
                (c.forEach((G) => {
                  G.isPathComplete || G.terminate(l == "none");
                }),
                !e.result.matched)
              ) {
                this.markedComplete ||
                  ((this.markedComplete = !0), this.emit("complete"));
                return;
              }
              if (
                l == "complete" &&
                this.touchpointCoordinator &&
                this.pushedSelector
              ) {
                let X = (
                  (y = this.touchpointCoordinator) == null
                    ? void 0
                    : y.sustainSelectorSubstack(this.pushedSelector)
                ).map((L) => {
                  let J = new S();
                  return (
                    L.path.on("invalidated", () => J.resolve()),
                    L.path.on("complete", () => J.resolve()),
                    J.corePromise
                  );
                });
                X.length > 0 &&
                  e.result.action.awaitNested &&
                  (yield Promise.all(X), yield Se(0)),
                  (u = this.touchpointCoordinator) == null ||
                    u.popSelector(this.pushedSelector),
                  (this.pushedSelector = null);
              }
              this.emit("stage", i, (G) => {
                G.type == "pop"
                  ? c.forEach((X) => X.popRecognizerConfig())
                  : c.forEach((X) => X.pushRecognizerConfig(G.config));
              });
              let r = !1;
              this.touchpointCoordinator &&
                (r = !this.touchpointCoordinator.selectorStackIncludes(
                  this.selector
                ));
              let B = ar(
                e.result.action,
                this.gestureConfig,
                this.baseGestureSetId
              );
              if (
                (r && (B = B.filter((G) => G.sustainWhenNested)), B.length > 0)
              ) {
                if (
                  !(
                    l == "chain" &&
                    e.result.action.selectionMode ==
                      ((I = this.pushedSelector) == null
                        ? void 0
                        : I.baseGestureSetId)
                  )
                ) {
                  if (
                    (this.pushedSelector &&
                      (this.pushedSelector.off(
                        "rejectionwithaction",
                        this.modelResetHandler
                      ),
                      (b = this.touchpointCoordinator) == null ||
                        b.popSelector(this.pushedSelector),
                      (this.pushedSelector = null)),
                    l == "chain")
                  ) {
                    let L = e.result.action.selectionMode;
                    if (L) {
                      let J = new jt(L);
                      J.on("rejectionwithaction", this.modelResetHandler),
                        (this.pushedSelector = J),
                        (h = this.touchpointCoordinator) == null ||
                          h.pushSelector(J);
                    }
                  }
                }
                ((x = this.pushedSelector) != null ? x : this.selector)
                  .matchGesture(e.matcher, B)
                  .then((L) =>
                    Z(this, null, function* () {
                      return this.selectionHandler(yield L.selectionPromise);
                    })
                  );
              } else
                this.markedComplete ||
                  ((this.markedComplete = !0), this.emit("complete"));
            }),
          "selectionHandler"
        );
        this.modelResetHandler = a((e, n) => {
          let i = e.matcher.allSourceIds;
          if (!this.allSourceIds.find((s) => i.indexOf(s) == -1))
            if (e.result.action.type == "replace")
              n(Gn(this.gestureConfig, e.result.action.replace));
            else throw new Error("Missed a case in implementation!");
        }, "modelResetHandler");
        (this.stageReports = []),
          (this.selector = i),
          this.selector.on("rejectionwithaction", this.modelResetHandler),
          this.once("complete", () => {
            var c;
            this.pushedSelector &&
              ((c = this.touchpointCoordinator) == null ||
                c.popSelector(this.pushedSelector),
              (this.pushedSelector = null)),
              this.selector.off("rejectionwithaction", this.modelResetHandler),
              this.selector.dropSourcesWithIds(this.allSourceIds),
              (this.selector = null);
          }),
          (this.gestureConfig = n),
          (this.touchpointCoordinator = s),
          Promise.resolve().then(() => this.selectionHandler(e));
      }
      get allSourceIds() {
        var e, n;
        return (n =
          (e = this.stageReports[this.stageReports.length - 1]) == null
            ? void 0
            : e.allSourceIds) != null
          ? n
          : [];
      }
      get baseGestureSetId() {
        var e, n;
        return (n =
          (e = this.selector) == null ? void 0 : e.baseGestureSetId) != null
          ? n
          : null;
      }
      get potentialModelMatchIds() {
        if (!this.selector) return [];
        let e = [this.selector];
        return (
          this.pushedSelector && e.push(this.pushedSelector),
          this.stageReports[this.stageReports.length - 1].sources
            .map((c) =>
              e.map((l) =>
                l.potentialMatchersForSource(c).map((r) => r.model.id)
              )
            )
            .reduce((c, l) => c.concat(l))
            .reduce((c, l) => {
              for (let r of l) c.indexOf(r) == -1 && c.push(r);
              return c;
            }, [])
        );
      }
      cancel() {
        this.stageReports[this.stageReports.length - 1].sources.forEach(
          (n) => n.baseSource.isPathComplete || n.baseSource.terminate(!0)
        ),
          this.markedComplete ||
            ((this.markedComplete = !0), this.emit("complete"));
      }
      toJSON() {
        return this.stageReports;
      }
    };
    a(bi, "GestureSequence");
    function ar(o, t, e) {
      switch (o.type) {
        case "none":
        case "complete":
          return [];
        case "replace":
          return [Gn(t, o.replace)];
        case "chain":
          return [Gn(t, o.next)];
        default:
          throw new Error(
            "Unexpected case arose within `processGestureAction` method"
          );
      }
    }
    a(ar, "modelSetForAction");
    var Ci = class extends rl.default {
      constructor(e, n, i) {
        super();
        this.selectorStack = [new jt()];
        this._activeSources = [];
        this._activeGestures = [];
        this._history = [];
        this.modelResetHandler = a((e, n) => {
          let i = e.matcher.allSourceIds;
          if (
            !this.activeGestures.find((s) =>
              s.allSourceIds.find((c) => i.indexOf(c) != -1)
            )
          )
            if (e.result.action.type == "replace")
              n(Gn(this.gestureModelDefinitions, e.result.action.replace));
            else throw new Error("Missed a case in implementation!");
        }, "modelResetHandler");
        this.onNewTrackedPath = a(
          (e) =>
            Z(this, null, function* () {
              this.addSimpleSourceHooks(e);
              let n = this.gestureModelDefinitions,
                i,
                s;
              do {
                i = this.currentSelector;
                let Q = yield i.matchGesture(e, el(n, i.baseGestureSetId));
                if (Q.sustainModeWithoutMatch) {
                  let F = a((y) => {
                    (y.stateToken = this.stateToken),
                      (y.item = e.currentRecognizerConfig.itemIdentifier(
                        y,
                        null
                      ));
                  }, "correctSample");
                  e.path instanceof pe && e.path.coords.forEach(F),
                    (e.stateToken = this.stateToken),
                    (e.baseItem = e.path.stats.initialSample.item),
                    F(e.path.stats.initialSample),
                    F(e.path.stats.lastSample);
                  continue;
                } else {
                  s = Q.selectionPromise;
                  break;
                }
              } while (i != this.currentSelector);
              let c = this.currentSelector;
              e.setGestureMatchInspector(this.buildGestureMatchInspector(c));
              let l = a(() => {
                this.recordHistory(e);
              }, "preGestureScribe");
              try {
                e.path.on("invalidated", l), this.emit("inputstart", e);
              } catch (g) {
                Ne("Error from 'inputstart' event listener", g);
              }
              this.inputEngines.forEach((g) => {
                g.fulfillInputStart(e);
              });
              let r = yield s;
              if (!r || r.result.matched == !1) return;
              let B = r.matcher.allSourceIds;
              for (let g of this._activeGestures)
                if (g.allSourceIds.find((Q) => !!B.find((F) => Q == F))) return;
              let d = new bi(r, n, this.currentSelector, this);
              this._activeGestures.push(d),
                d.on("complete", () => {
                  let g = this._activeGestures.indexOf(d);
                  g != -1 && this._activeGestures.splice(g, 1);
                }),
                e.path.wasCancelled ||
                  (e.path.off("invalidated", l),
                  d.on("complete", () => this.recordHistory(d))),
                this.emit("recognizedgesture", d);
            }),
          "onNewTrackedPath"
        );
        if (
          ((this.historyMax = i > 0 ? i : 0),
          (this.gestureModelDefinitions = e),
          (this.inputEngines = []),
          n)
        )
          for (let s of n) this.addEngine(s);
        this.selectorStack[0].on("rejectionwithaction", this.modelResetHandler);
      }
      pushSelector(e) {
        this.selectorStack.push(e),
          e.on("rejectionwithaction", this.modelResetHandler);
      }
      sustainSelectorSubstack(e) {
        if (!e) return [];
        let n = this.selectorStack.indexOf(e);
        if (n == -1) return [];
        if (this.selectorStack.length <= 1)
          throw new Error(
            "May not force the original, base gesture selector into sustain mode."
          );
        let i = [];
        for (let s = n; s < this.selectorStack.length; s++)
          (e = this.selectorStack[s]), (i = i.concat(e.cascadeTermination()));
        return i;
      }
      popSelector(e) {
        if (!e) return;
        let n = this.selectorStack.indexOf(e);
        if (n != -1) {
          if (this.selectorStack.length <= 1)
            throw new Error("May not pop the original, base gesture selector.");
          for (; n < this.selectorStack.length; )
            (e = this.selectorStack[n]),
              e.off("rejectionwithaction", this.modelResetHandler),
              this.selectorStack.splice(n, 1);
          this.currentSelector.stateToken = this.stateToken;
        }
      }
      selectorStackIncludes(e) {
        return this.selectorStack.includes(e);
      }
      get currentSelector() {
        return this.selectorStack[this.selectorStack.length - 1];
      }
      buildGestureMatchInspector(e) {
        return (n) => {
          let i = this.selectorStack.indexOf(e);
          return this.selectorStack
            .slice(i)
            .map((c) => c.potentialMatchersForSource(n).map((l) => l.model.id))
            .reduce((c, l) => c.concat(l));
        };
      }
      addEngine(e) {
        e.on("pointstart", this.onNewTrackedPath), this.inputEngines.push(e);
      }
      recordHistory(e) {
        let n = this.historyMax;
        n > 0 &&
          (this._history.length == n && this._history.shift(),
          this._history.push(e));
      }
      get activeGestures() {
        return [].concat(this._activeGestures);
      }
      get activeSources() {
        return [].concat(
          this.inputEngines
            .map((e) => e.activeSources)
            .reduce((e, n) => e.concat(n), [])
        );
      }
      get history() {
        return this._history;
      }
      get historyJSON() {
        let e = a(function (n, i) {
          return n == "item" ? (i == null ? void 0 : i.id) : i;
        }, "sanitizingReplacer");
        return JSON.stringify(this.history, e, 2);
      }
      get stateToken() {
        return this._stateToken;
      }
      set stateToken(e) {
        (this._stateToken = e),
          this.inputEngines.forEach((n) => (n.stateToken = e)),
          (this.currentSelector.stateToken = e);
      }
      addSimpleSourceHooks(e) {
        e.path.on("invalidated", () => {
          let n = this.activeGestures.find((s) =>
            s.allSourceIds.includes(e.identifier)
          );
          n && n.cancel();
          let i = this._activeSources.indexOf(e);
          this._activeSources = this._activeSources.splice(i, 1);
        }),
          e.path.on("complete", () => {
            let n = this._activeSources.indexOf(e);
            this._activeSources = this._activeSources.splice(n, 1);
          });
      }
    };
    a(Ci, "TouchpointCoordinator");
    var ut = class extends Ci {
      constructor(e, n) {
        let i = ys(n);
        e = e || tl;
        super(e, null, i.historyLength);
        (this.config = i),
          (this.mouseEngine = new Ii(this.config)),
          (this.touchEngine = new Ui(this.config)),
          this.mouseEngine.registerEventHandlers(),
          this.touchEngine.registerEventHandlers(),
          this.addEngine(this.mouseEngine),
          this.addEngine(this.touchEngine);
      }
      destroy() {
        this.activeGestures.forEach((e) => e.cancel()),
          this.activeSources.forEach((e) => e.terminate(!0)),
          this.mouseEngine.unregisterEventHandlers(),
          this.touchEngine.unregisterEventHandlers(),
          (this.mouseEngine = null),
          (this.touchEngine = null);
      }
    };
    a(ut, "GestureRecognizer");
    var cc = ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
      ol = Math.PI,
      lc = (() => {
        let o = new Map(),
          t = ol / 4;
        for (let e = 0; e < cc.length; e++) o.set(cc[e], [t * e, 1]);
        return o;
      })();
    function Is(o) {
      return (Math.PI / 4) * cc.indexOf(o);
    }
    a(Is, "lockedAngleForDir");
    function mi(o, t) {
      let e = Is(t),
        n = o.initialSample,
        i = o.lastSample.targetX - n.targetX,
        s = o.lastSample.targetY - n.targetY,
        c = Math.max(0, -s * Math.cos(e));
      return Math.max(0, i * Math.sin(e)) + c;
    }
    a(mi, "calcLockedDistance");
    function Br(o, t, e, n) {
      return (i) => {
        let s = Is(t),
          c = n.flick.triggerDist - n.flick.dirLockDist,
          l = Math.max(0, mi(o.path.stats, t) - n.flick.dirLockDist),
          B = Math.min(1, (0.7 * l) / c),
          d = Math.sin(s) * B,
          g = -Math.cos(s) * B;
        e == null || e.scrollFlickPreview(d, g);
      };
    }
    a(Br, "buildFlickScroller");
    var Us = Math.PI / 3,
      Ln = class {
        constructor(t, e, n, i, s, c) {
          this.directlyEmitsKeys = !0;
          (this.sequence = t),
            (this.gestureParams = s),
            (this.baseSpec = i.key.spec),
            (this.baseKeyDistances = n.getSimpleTapCorrectionDistances(
              t.stageReports[0].sources[0].path.stats.initialSample,
              this.baseSpec
            ));
          let l = t.stageReports[0].sources[0].baseSource,
            r = l;
          t.on("complete", () => {
            c == null || c.cancel();
          }),
            this.sequence.on("stage", (d) => {
              var y;
              let g = r.path.stats;
              this.computedFlickDistribution = this.flickDistribution(g, !0);
              let Q = this.computedFlickDistribution[0].keySpec;
              if (d.matchedId == "flick-restart") {
                r.path.replaceInitialSample(
                  d.sources[0].path.stats.initialSample
                );
                return;
              }
              if (d.matchedId == "flick-reset-centering") {
                r = l.constructSubview(!0, !0);
                return;
              } else if (d.matchedId == "flick-reset-end") {
                this.emitKey(n, this.baseSpec, r.path.stats);
                return;
              } else if (d.matchedId == "flick-reset") {
                this.flickScroller &&
                  (this.flickScroller(r.currentSample),
                  r.path.off("step", this.flickScroller)),
                  (this.lockedDir = null),
                  (this.lockedSelectable = null),
                  r instanceof Y && r.disconnect();
                return;
              } else if (d.matchedId == "flick-mid") {
                if (Q == this.baseSpec) return;
                let u = Object.keys(this.baseSpec.flick).find(
                  (I) => this.baseSpec.flick[I] == Q
                );
                (this.lockedDir = u),
                  (this.lockedSelectable = Q),
                  this.flickScroller && r.path.off("step", this.flickScroller),
                  (this.flickScroller = Br(r, u, c, this.gestureParams)),
                  this.flickScroller(r.currentSample),
                  r.path.on("step", this.flickScroller);
                return;
              }
              let F = (y = this.lockedSelectable) != null ? y : Q;
              this.emitKey(n, F, g);
            });
          let B = this.buildPopupRecognitionConfig(n);
          e({ type: "push", config: B });
        }
        emitKey(t, e, n) {
          let i;
          mi(n, this.lockedDir) > this.gestureParams.flick.triggerDist
            ? (i = t.keyEventFromSpec(e))
            : (i = t.keyEventFromSpec(this.baseSpec)),
            (i.keyDistribution = this.currentStageKeyDistribution(
              this.baseKeyDistances
            )),
            t.raiseKeyEvent(i, null);
        }
        buildPopupRecognitionConfig(t) {
          let e = {
            getBoundingClientRect() {
              let n = Number.MAX_SAFE_INTEGER;
              return new DOMRect(-n, -n, 2 * n, 2 * n);
            },
          };
          return V(C({}, t.gestureEngine.config), {
            maxRoamingBounds: e,
            safeBounds: e,
          });
        }
        cancel() {}
        flickDistribution(t, e) {
          let n = this.baseSpec.flick,
            i = [{ spec: this.baseSpec, coord: [NaN, 0] }];
          i = i.concat(
            Object.keys(n).map((Q) => ({ spec: n[Q], coord: lc.get(Q) }))
          );
          let s = t.angle,
            c = this.gestureParams.flick.triggerDist,
            r = Math.min(c, e ? c : t.netDistance) / c,
            B = 0,
            d = i.map((Q) => {
              let F = 0,
                y = Q.coord;
              if (!isNaN(y[0])) {
                let h = s - y[0],
                  x = 2 * ol + y[0] - s;
                F = Math.min(h * h, x * x);
              }
              let u = Us * (y[1] - r),
                I = u * u,
                b = 1 / (F + I + 1e-6);
              return (B += b), { keySpec: Q.spec, p: b };
            }),
            g = 1 / B;
          return d.forEach((Q) => (Q.p *= g)), d.sort((Q, F) => F.p - Q.p);
        }
        currentStageKeyDistribution(t) {
          let e = this.baseSpec,
            n = this.baseKeyDistances,
            i = this.computedFlickDistribution;
          if (!n.get(e)) return [{ keySpec: i[0].keySpec, p: 1 }];
          let c = i.findIndex((B) => B.keySpec == e),
            l = i.splice(c, 1)[0].p,
            r = gt(n);
          return i.concat(r.map((B) => ({ keySpec: B.keySpec, p: B.p * l })));
        }
      };
    a(Ln, "Flick");
    var hs = Vt.TouchLayoutKeySp;
    var rc = {
      longpress: {
        permitsFlick: () => !0,
        flickDistStart: 8,
        flickDistFinal: 40,
        waitLength: 500,
        noiseTolerance: 10,
      },
      multitap: { waitLength: 300, holdLength: 150 },
      flick: { startDist: 10, dirLockDist: 25, triggerDist: 40 },
    };
    function al(o) {
      let t = o.getBoundingClientRect();
      return { clientX: t.left + t.width / 2, clientY: t.top + t.height / 2 };
    }
    a(al, "getKeyCentroid");
    function Bl(o) {
      let t = al(o);
      return (e) => {
        let n = e.lastSample.clientX - t.clientX,
          i = e.lastSample.clientY - t.clientY;
        return Math.sqrt(n * n + i * i);
      };
    }
    a(Bl, "buildDistFromKeyCentroidFunctor");
    function xi(o) {
      let t = o.key.spec;
      if (t.sk) return !1;
      let e = [
        "K_SHIFT",
        "K_ALT",
        "K_CTRL",
        "K_NUMERALS",
        "K_SYMBOLS",
        "K_CURRENCIES",
      ];
      for (let n of e) if (t.id == n) return !0;
      if (t.nextlayer)
        switch (t.sp) {
          case hs.special:
          case hs.specialActive:
          case hs.customSpecial:
          case hs.customSpecialActive:
            return !0;
          default:
            return !1;
        }
      else return !1;
    }
    a(xi, "keySupportsModipress");
    function oc(o, t) {
      let e = a((Q, F) => {
          if (!Q) return !1;
          let y = Q.key.spec;
          switch (F) {
            case "modipress-start":
              return xi(Q);
            case "special-key-start":
              return ["K_LOPT", "K_ROPT", "K_BKSP"].indexOf(y.baseKeyID) != -1;
            case "longpress":
              return !0;
            case "multitap-start":
            case "modipress-multitap-start":
              return o.hasMultitaps ? !!y.multitap : !1;
            case "flick-start":
              return !!y.flick;
            default:
              return !0;
          }
        }, "gestureKeyFilter"),
        n = t.roamingEnabled || (t.roamingEnabled = !o.hasFlicks),
        i = be(n ? Zr(t) : ul(t)),
        s = be(n ? Bc(t) : Il(t)),
        c = be(Ql(t, !0, n));
      function l(Q, F) {
        Q = be(Q);
        let y = Q.id;
        return (
          typeof F == "number" && (F = [F]),
          Q.contacts.forEach((u, I) => {
            var b;
            if (F.indexOf(I) != -1) {
              let h = (b = u.model.allowsInitialState) != null ? b : () => !0;
              u.model = V(C({}, u.model), {
                allowsInitialState: (x, G, X) => e(X, y) && h(x, G, X),
              });
            }
          }),
          Q
        );
      }
      a(l, "withKeySpecFiltering");
      let r = Ir(),
        B = Jr(),
        d = [
          l(c, 0),
          l(Vr(t), 0),
          Lr(t),
          i,
          s,
          l(r, 0),
          Ur(t),
          Sr(),
          l(B, 0),
          Rr(t),
          Hr(),
          Ar(),
          l(Er(t), 0),
          vr(t),
          Wr(),
        ],
        g = [c.id, i.id, B.id, r.id];
      return (
        n
          ? (d.push(l(hr(t), 0)), d.push(br()))
          : (d.push(l(yl(t), 0)),
            d.push(mr(t)),
            d.push(xr(t)),
            d.push(Gr(t)),
            d.push(Cr(t)),
            d.push(pr()),
            d.push(Xr(t)),
            g.push("flick-start")),
        {
          gestures: d,
          sets: { default: g, modipress: g.filter((Q) => Q != B.id), none: [] },
        }
      );
    }
    a(oc, "gestureSetForLayout");
    function ac() {
      return {
        itemPriority: 0,
        pathResolutionAction: "reject",
        pathModel: { evaluate: (o) => "resolve" },
      };
    }
    a(ac, "instantContactRejectionModel");
    function _e() {
      return {
        itemPriority: 0,
        pathResolutionAction: "resolve",
        pathModel: { evaluate: (o) => "resolve" },
      };
    }
    a(_e, "instantContactResolutionModel");
    function dr(o) {
      let t = o.flick;
      return {
        itemPriority: 1,
        pathModel: {
          evaluate: (e, n, i) => {
            let s = e.stats,
              c = i == null ? void 0 : i.key.spec;
            if (c && c.sk) {
              let l = c.flick;
              if (!(l.nw || l.n || l.ne)) {
                let B = s.netDistance,
                  d = s.angle;
                if (B * Math.cos(d) > o.longpress.flickDistStart)
                  return "reject";
              }
            }
            return s.netDistance > t.startDist ? "resolve" : null;
          },
        },
        pathResolutionAction: "resolve",
        pathInheritance: "partial",
      };
    }
    a(dr, "flickStartContactModel");
    function dl(o, t) {
      let e = t.key.spec.flick,
        n = Object.keys(e),
        i,
        s = 0;
      for (let c of n) {
        let l = mi(o, c);
        l > s && ((s = l), (i = c));
      }
      return { dir: i, dist: s };
    }
    a(dl, "determineLockFromStats");
    function gr(o) {
      return {
        itemPriority: 1,
        pathModel: {
          evaluate: (t, e, n) => {
            let { dir: i, dist: s } = dl(t.stats, n);
            if (s > o.flick.dirLockDist) {
              let c = t.stats.angle,
                l = Is(i),
                r = Math.abs(c - l),
                B = Math.abs(2 * Math.PI + l - c);
              if (r <= Us || B <= Us) return "resolve";
            } else if (t.isComplete) return "reject";
          },
        },
        pathResolutionAction: "resolve",
        pathInheritance: "full",
      };
    }
    a(gr, "flickMidContactModel");
    function Fr(o) {
      return {
        itemPriority: 1,
        pathModel: {
          evaluate: (t, e, n, i) => {
            if (t.isComplete) return "resolve";
            {
              let { dir: s } = dl(i, n);
              if (mi(t.stats, s) < o.flick.dirLockDist) return "reject";
            }
          },
        },
        pathResolutionAction: "resolve",
        pathInheritance: "full",
      };
    }
    a(Fr, "flickEndContactModel");
    function Qr(o, t, e) {
      let n = o.longpress;
      return {
        itemPriority: 0,
        pathResolutionAction: "resolve",
        timer: { duration: n.waitLength, expectedResult: !0 },
        validateItem: (i, s) => !!(s != null && s.key.spec.sk),
        pathModel: {
          evaluate: (i) => {
            var c;
            let s = i.stats;
            if (
              t &&
              n.permitsFlick(s.lastSample.item) &&
              ((c = s.cardinalDirection) == null ? void 0 : c.indexOf("n")) !=
                -1
            ) {
              let l = s.netDistance,
                r = s.angle;
              if (l * Math.cos(r) > n.flickDistFinal) return "resolve";
            } else if (e) {
              if (
                s.rawDistance > n.noiseTolerance ||
                s.lastSample.item != s.initialSample.item
              )
                return "reject";
            } else if (s.lastSample.item != s.initialSample.item)
              return "reject";
            return i.isComplete ? "reject" : null;
          },
        },
      };
    }
    a(Qr, "longpressContactModel");
    function gl() {
      return {
        itemPriority: -1,
        pathResolutionAction: "resolve",
        pathModel: { evaluate: (o) => "resolve" },
      };
    }
    a(gl, "modipressContactStartModel");
    function yr() {
      return {
        itemPriority: -1,
        itemChangeAction: "resolve",
        pathResolutionAction: "resolve",
        pathModel: {
          evaluate: (o) => {
            if (o.isComplete) return "reject";
          },
        },
      };
    }
    a(yr, "modipressContactHoldModel");
    function Fl() {
      return {
        itemPriority: -1,
        itemChangeAction: "resolve",
        pathResolutionAction: "resolve",
        pathModel: {
          evaluate: (o) => {
            if (o.isComplete) return "resolve";
          },
        },
      };
    }
    a(Fl, "modipressContactEndModel");
    function bs(o, t) {
      var n;
      let e = (n = o == null ? void 0 : o.roamingEnabled) != null ? n : !0;
      return {
        itemPriority: 0,
        itemChangeAction: e ? "reject" : void 0,
        pathResolutionAction: "resolve",
        pathInheritance: !e && t ? "full" : "chop",
        pathModel: {
          evaluate: (i) => {
            if (i.isComplete && !i.wasCancelled) return "resolve";
          },
        },
      };
    }
    a(bs, "simpleTapContactModel");
    function ur() {
      return {
        itemPriority: 0,
        pathResolutionAction: "resolve",
        pathModel: {
          evaluate: (o) => {
            if (o.isComplete && !o.wasCancelled) return "resolve";
          },
        },
      };
    }
    a(ur, "subkeySelectContactModel");
    function Ir() {
      return {
        id: "special-key-start",
        resolutionPriority: 0,
        contacts: [{ model: C({}, _e()), endOnResolve: !1 }],
        resolutionAction: {
          type: "chain",
          next: "special-key-end",
          item: "current",
        },
      };
    }
    a(Ir, "specialKeyStartModel");
    function Ur(o) {
      return {
        id: "special-key-end",
        resolutionPriority: 0,
        contacts: [
          {
            model: V(C({}, bs(o)), { itemChangeAction: "resolve" }),
            endOnResolve: !0,
          },
        ],
        resolutionAction: { type: "complete", item: "none" },
      };
    }
    a(Ur, "specialKeyEndModel");
    function Ql(o, t, e) {
      let n = {
        id: "longpress",
        resolutionPriority: 4,
        contacts: [
          {
            model: V(C({}, Qr(o, t, e)), {
              itemPriority: 1,
              pathInheritance: "chop",
            }),
            endOnResolve: !1,
          },
          { model: ac(), resetOnInstantFulfill: !0 },
        ],
        resolutionAction: {
          type: "chain",
          next: "subkey-select",
          selectionMode: "none",
          item: "none",
        },
      };
      return e
        ? V(C({}, n), {
            rejectionActions: {
              path: { type: "replace", replace: "longpress-roam" },
              timer: { type: "replace", replace: "longpress-roam-restore" },
            },
          })
        : n;
    }
    a(Ql, "longpressModel");
    function hr(o) {
      let t = Ql(o, !1, !0);
      return V(C({}, t), { id: "longpress-roam" });
    }
    a(hr, "longpressModelAfterRoaming");
    function br() {
      return {
        id: "longpress-roam-restore",
        contacts: [
          {
            model: {
              pathModel: { evaluate: (o) => null },
              itemChangeAction: "reject",
              pathInheritance: "full",
              pathResolutionAction: "reject",
              itemPriority: 0,
            },
          },
        ],
        resolutionPriority: -1,
        rejectionActions: {
          item: { type: "replace", replace: "longpress-roam" },
        },
        resolutionAction: { type: "chain", next: "longpress-roam" },
      };
    }
    a(br, "longpressRoamRestoration");
    function yl(o) {
      return {
        id: "flick-start",
        resolutionPriority: 3,
        contacts: [{ model: dr(o) }],
        resolutionAction: { type: "chain", item: "none", next: "flick-mid" },
      };
    }
    a(yl, "flickStartModel");
    function Cr(o) {
      let t = yl(o);
      return V(C({}, t), {
        contacts: [
          V(C({}, t.contacts[0]), {
            model: V(C({}, t.contacts[0].model), {
              baseCoordReplacer: (e, n) => {
                let i = al(n),
                  s = Bl(n),
                  c = e.initialSample,
                  l = s(e);
                if (l > o.flick.triggerDist) return i;
                let r = o.flick.dirLockDist;
                if (l < r) return c;
                let B = r / l,
                  d = c.clientX - i.clientX,
                  g = c.clientY - i.clientY;
                return {
                  clientX: i.clientX + d * B,
                  clientY: i.clientY + g * B,
                };
              },
            }),
          }),
        ],
        id: "flick-restart",
        sustainWhenNested: !0,
        rejectionActions: {
          path: { type: "replace", replace: "flick-reset-end" },
        },
      });
    }
    a(Cr, "flickRestartModel");
    function mr(o) {
      return {
        id: "flick-mid",
        resolutionPriority: 0,
        contacts: [
          { model: gr(o), endOnReject: !0 },
          { model: ac(), resetOnInstantFulfill: !0 },
        ],
        rejectionActions: {
          path: { type: "replace", replace: "flick-reset-end" },
        },
        resolutionAction: { type: "chain", item: "none", next: "flick-end" },
        sustainWhenNested: !0,
      };
    }
    a(mr, "flickMidModel");
    function xr(o) {
      return {
        id: "flick-reset",
        resolutionPriority: 1,
        contacts: [{ model: V(C({}, _e()), { pathInheritance: "partial" }) }],
        resolutionAction: { type: "chain", next: "flick-reset-centering" },
        sustainWhenNested: !0,
      };
    }
    a(xr, "flickResetModel");
    function Gr(o) {
      return {
        id: "flick-reset-centering",
        resolutionPriority: 1,
        contacts: [
          {
            model: {
              pathModel: {
                evaluate(t, e, n) {
                  e || (e = t.stats);
                  let i = Bl(n),
                    s = i(t.stats);
                  if (i(e) < s) return "resolve";
                },
              },
              itemPriority: 0,
              pathResolutionAction: "resolve",
              pathInheritance: "full",
            },
          },
        ],
        resolutionAction: { type: "chain", next: "flick-restart" },
        sustainWhenNested: !0,
      };
    }
    a(Gr, "flickResetCenteringModel");
    function pr() {
      return {
        id: "flick-reset-end",
        resolutionPriority: 1,
        contacts: [],
        sustainTimer: { duration: 0, expectedResult: !0 },
        resolutionAction: { type: "complete", item: "base" },
        sustainWhenNested: !0,
      };
    }
    a(pr, "flickResetEndModel");
    function Xr(o) {
      return {
        id: "flick-end",
        resolutionPriority: 0,
        contacts: [
          { model: Fr(o) },
          { model: _e(), resetOnInstantFulfill: !0 },
        ],
        rejectionActions: { path: { type: "replace", replace: "flick-reset" } },
        resolutionAction: { type: "complete", item: "current" },
        sustainWhenNested: !0,
      };
    }
    a(Xr, "flickEndModel");
    function Vr(o) {
      return {
        id: "multitap-start",
        resolutionPriority: 2,
        contacts: [
          {
            model: V(C({}, _e()), {
              itemPriority: 1,
              pathInheritance: "reject",
              allowsInitialState(t, e, n) {
                return t.item == n;
              },
            }),
          },
        ],
        sustainTimer: {
          duration: o.multitap.waitLength,
          expectedResult: !1,
          baseItem: "base",
        },
        resolutionAction: {
          type: "chain",
          next: "multitap-end",
          item: "current",
        },
      };
    }
    a(Vr, "multitapStartModel");
    function Lr(o) {
      return {
        id: "multitap-end",
        resolutionPriority: 2,
        contacts: [
          {
            model: V(C({}, bs(o)), {
              itemPriority: 1,
              timer: { duration: o.multitap.holdLength, expectedResult: !1 },
            }),
            endOnResolve: !0,
          },
          { model: _e(), resetOnInstantFulfill: !0 },
        ],
        rejectionActions: { timer: { type: "replace", replace: "simple-tap" } },
        resolutionAction: {
          type: "chain",
          next: "multitap-start",
          item: "none",
        },
      };
    }
    a(Lr, "multitapEndModel");
    function ul(o) {
      return {
        id: "initial-tap",
        resolutionPriority: 1,
        contacts: [
          {
            model: V(C({}, bs(o)), {
              pathInheritance: "chop",
              itemPriority: 1,
              timer: { duration: o.multitap.holdLength, expectedResult: !1 },
            }),
            endOnResolve: !0,
          },
          { model: _e(), resetOnInstantFulfill: !0 },
        ],
        sustainWhenNested: !0,
        rejectionActions: { timer: { type: "replace", replace: "simple-tap" } },
        resolutionAction: {
          type: "chain",
          next: "multitap-start",
          item: "base",
        },
      };
    }
    a(ul, "initialTapModel");
    function Il(o) {
      return {
        id: "simple-tap",
        resolutionPriority: 1,
        contacts: [
          { model: V(C({}, bs(o, !0)), { itemPriority: 1 }), endOnResolve: !0 },
          { model: _e(), resetOnInstantFulfill: !0 },
        ],
        sustainWhenNested: !0,
        resolutionAction: { type: "complete", item: "base" },
      };
    }
    a(Il, "simpleTapModel");
    function Zr(o) {
      let t = ul(o);
      return V(C({}, t), {
        rejectionActions: V(C({}, t.rejectionActions), {
          item: { type: "replace", replace: "initial-tap" },
        }),
      });
    }
    a(Zr, "initialTapModelWithReset");
    function Bc(o) {
      let t = Il(o);
      return V(C({}, t), {
        rejectionActions: V(C({}, t.rejectionActions), {
          item: { type: "replace", replace: "simple-tap" },
        }),
      });
    }
    a(Bc, "simpleTapModelWithReset");
    function Sr() {
      return {
        id: "subkey-select",
        resolutionPriority: 0,
        contacts: [
          {
            model: V(C({}, ur()), { pathInheritance: "full", itemPriority: 1 }),
            endOnResolve: !0,
            endOnReject: !0,
          },
        ],
        resolutionAction: { type: "complete", item: "current" },
        sustainWhenNested: !0,
      };
    }
    a(Sr, "subkeySelectModel");
    function Jr() {
      return {
        id: "modipress-start",
        resolutionPriority: 5,
        contacts: [
          {
            model: V(C({}, gl()), {
              allowsInitialState(o, t, e) {
                return xi(e);
              },
              itemChangeAction: "reject",
              itemPriority: 1,
            }),
          },
        ],
        resolutionAction: {
          type: "chain",
          next: "modipress-hold",
          selectionMode: "modipress",
          item: "current",
        },
      };
    }
    a(Jr, "modipressStartModel");
    function Rr(o) {
      return {
        id: "modipress-hold",
        resolutionPriority: 5,
        contacts: [
          {
            model: V(C({}, yr()), {
              itemChangeAction: "reject",
              pathInheritance: "full",
              timer: {
                duration: o.multitap.holdLength,
                expectedResult: !0,
                inheritElapsed: !0,
              },
            }),
          },
          { model: C({}, _e()), resetOnInstantFulfill: !0 },
        ],
        resolutionAction: {
          type: "chain",
          next: "modipress-end",
          selectionMode: "modipress",
          item: "none",
        },
        rejectionActions: {
          path: {
            type: "replace",
            replace: "modipress-end-multitap-transition",
          },
        },
      };
    }
    a(Rr, "modipressHoldModel");
    function Ar() {
      return {
        id: "modipress-end-multitap-transition",
        resolutionPriority: 5,
        contacts: [],
        sustainTimer: { duration: 0, expectedResult: !0 },
        resolutionAction: {
          type: "chain",
          next: "modipress-multitap-start",
          item: "none",
        },
      };
    }
    a(Ar, "modipressMultitapTransitionModel");
    function Hr() {
      return {
        id: "modipress-end",
        resolutionPriority: 5,
        contacts: [
          {
            model: V(C({}, Fl()), {
              itemChangeAction: "reject",
              pathInheritance: "full",
            }),
          },
        ],
        resolutionAction: { type: "complete", item: "none", awaitNested: !0 },
      };
    }
    a(Hr, "modipressEndModel");
    function Er(o) {
      return {
        id: "modipress-multitap-start",
        resolutionPriority: 6,
        contacts: [
          {
            model: V(C({}, gl()), {
              pathInheritance: "reject",
              allowsInitialState(t, e, n) {
                return t.item != n ? !1 : xi(n);
              },
              itemChangeAction: "reject",
              itemPriority: 1,
            }),
          },
        ],
        sustainTimer: {
          duration: o.multitap.waitLength,
          expectedResult: !1,
          baseItem: "base",
        },
        resolutionAction: {
          type: "chain",
          next: "modipress-multitap-end",
          selectionMode: "modipress",
          item: "current",
        },
      };
    }
    a(Er, "modipressMultitapStartModel");
    function vr(o) {
      return {
        id: "modipress-multitap-end",
        resolutionPriority: 5,
        contacts: [
          {
            model: V(C({}, Fl()), {
              itemChangeAction: "reject",
              pathInheritance: "full",
              timer: { duration: o.multitap.holdLength, expectedResult: !1 },
            }),
          },
          { model: C({}, ac()), resetOnInstantFulfill: !0 },
        ],
        resolutionAction: {
          type: "chain",
          next: "modipress-multitap-start",
          item: "none",
        },
        rejectionActions: {
          timer: {
            type: "replace",
            replace: "modipress-multitap-lock-transition",
          },
          path: {
            type: "replace",
            replace: "modipress-multitap-lock-transition",
          },
        },
      };
    }
    a(vr, "modipressMultitapEndModel");
    function Wr() {
      return {
        id: "modipress-multitap-lock-transition",
        resolutionPriority: 5,
        contacts: [
          { model: V(C({}, _e()), { pathResolutionAction: "resolve" }) },
        ],
        resolutionAction: {
          type: "chain",
          next: "modipress-end",
          selectionMode: "modipress",
          item: "none",
        },
      };
    }
    a(Wr, "modipressMultitapLockModel");
    var Ul = V(C({}, be(Bc(null))), {
        resolutionAction: { type: "complete", item: "current" },
      }),
      hl = { gestures: [Ul], sets: { default: [Ul.id] } };
    function Cs(o) {
      var t;
      return (
        typeof o == "string"
          ? (t = o)
          : ((t = o.style.fontSize), t || (t = getComputedStyle(o).fontSize)),
        new m(t)
      );
    }
    a(Cs, "getFontSizeStyle");
    function bl(o, t, e) {
      if (o.touchable) {
        let n = o.formFactor == "phone" ? 1.6 * (e ? 0.65 : 0.6) * 1.2 : 2;
        return m.special(n, "em");
      } else return t ? m.inPixels(t / 8) : void 0;
    }
    a(bl, "defaultFontSize");
    var Gi;
    function ms(o, t, e) {
      (e = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
        e.fontFamily ||
          (e.fontFamily = getComputedStyle(document.body).fontFamily),
        (!e.fontSize || e.fontSize == "") && (e.fontSize = "1em");
      let n = e.fontFamily,
        i = Cs(e.fontSize);
      var s;
      i.absolute ? (s = i.val + "px") : (s = i.val * t + "px"),
        (Gi = Gi != null ? Gi : document.createElement("canvas"));
      var c = Gi.getContext("2d");
      c.font = s + " " + n;
      var l = c.measureText(o);
      return l;
    }
    a(ms, "getTextMetrics");
    var fr = 10,
      pi = class {
        constructor(t, e) {
          this.totalLength = 0;
          (this.baseCoord = t),
            (this.curCoord = t),
            (this.baseScrollLeft = e),
            (this.totalLength = 0);
        }
        updateTo(t) {
          let e = this.curCoord;
          this.curCoord = t;
          let n =
            this.baseCoord.targetX -
            this.curCoord.targetX +
            this.baseScrollLeft;
          return (
            (this.totalLength += Math.abs(this.curCoord.targetX - e.targetX)), n
          );
        }
        get hasScrolled() {
          return this.totalLength > fr;
        }
      };
    a(pi, "BannerScrollState");
    var Cl = "kmw-suggest-touched";
    var kr = "kmw-suggest-banner-scroller",
      ml = 0.666,
      xl = "swallow-fade-transition",
      dc = class {
        constructor(t, e) {
          (this.index = t),
            (this.rtl = e != null ? e : !1),
            this.constructRoot();
          let n = (this.display = W("span"));
          (n.className = "kmw-suggestion-text"), this.container.appendChild(n);
        }
        get computedStyle() {
          return getComputedStyle(this.display);
        }
        constructRoot() {
          let t = (this.div = W("div")),
            e = t.style;
          (t.className = "kmw-suggest-option"),
            (t.id = dc.BASE_ID + this.index),
            (this.div.suggestion = this);
          let n = (this.container = document.createElement("div"));
          n.className = "kmw-suggestion-container";
          let s =
            (100 - Qe.MARGIN * (Qe.LONG_SUGGESTION_DISPLAY_LIMIT - 1)) /
            Qe.LONG_SUGGESTION_DISPLAY_LIMIT;
          (n.style.minWidth = s + "%"), t.appendChild(n);
        }
        matchKeyboardProperties(t) {
          let e = this.div;
          if (t) {
            t.KLC && (e.lang = t.KLC);
            let n = t.KFont;
            n &&
              n.family &&
              n.family != "" &&
              (e.style.fontFamily = this.fontFamily = n.family);
          }
        }
        get suggestion() {
          return this._suggestion;
        }
        update(t, e) {
          this._suggestion = t;
          let n = this.generateSuggestionText(this.rtl);
          if (
            (this.container.replaceChild(n, this.display),
            (this.display = n),
            e.minWidth !== void 0 && (this._minWidth = e.minWidth),
            (this._paddingWidth = e.paddingWidth),
            (this._collapsedWidth = e.collapsedWidth),
            t && t.displayAs)
          ) {
            let i = ms(t.displayAs, e.emSize, e.styleForFont);
            this._textWidth = i.width;
          } else this._textWidth = 0;
          (this.currentWidth = this.collapsedWidth), this.updateLayout();
        }
        updateLayout() {
          if (!this.suggestion && this.index != 0) {
            this.div.style.width = "0px";
            return;
          } else this.div.style.width = "";
          let t = this.container.style;
          (t.minWidth = this.collapsedWidth + "px"),
            this.rtl
              ? (t.marginRight =
                  this.collapsedWidth - this.expandedWidth + "px")
              : (t.marginLeft =
                  this.collapsedWidth - this.expandedWidth + "px"),
            this.updateFade();
        }
        updateFade() {
          this.div.classList.add(xl),
            window.requestAnimationFrame(() => {
              this.div.classList.remove(xl);
            }),
            this.div.classList.add(
              `kmw-hide-fade-${this.rtl ? "left" : "right"}`
            );
          let t = `kmw-hide-fade-${this.rtl ? "right" : "left"}`;
          this.expandedWidth - this.collapsedWidth
            ? this.div.classList.remove(t)
            : this.div.classList.add(t);
        }
        get targetCollapsedWidth() {
          return this._collapsedWidth;
        }
        get textWidth() {
          return this._textWidth;
        }
        get paddingWidth() {
          return this._paddingWidth;
        }
        get minWidth() {
          return this._minWidth;
        }
        set minWidth(t) {
          this._minWidth = t;
        }
        get expandedWidth() {
          return this.minWidth > this.spanWidth
            ? this.minWidth
            : this.spanWidth;
        }
        get spanWidth() {
          var e, n;
          let t = (e = this.textWidth) != null ? e : 0;
          return t && (t += (n = this.paddingWidth) != null ? n : 0), t;
        }
        get collapsedWidth() {
          let t =
              this.spanWidth < this.targetCollapsedWidth
                ? this.spanWidth
                : this.targetCollapsedWidth,
            e = t < this.expandedWidth ? t : this.expandedWidth;
          return this.minWidth > e ? this.minWidth : e;
        }
        get currentWidth() {
          return this.div.offsetWidth;
        }
        set currentWidth(t) {
          t < this.collapsedWidth
            ? (t = this.collapsedWidth)
            : t > this.expandedWidth && (t = this.expandedWidth),
            this.rtl
              ? (this.container.style.marginRight = `${
                  t - this.expandedWidth
                }px`)
              : (this.container.style.marginLeft = `${
                  t - this.expandedWidth
                }px`);
        }
        highlight(t) {
          let e = this.div;
          t ? e.classList.add(Cl) : e.classList.remove(Cl);
        }
        isEmpty() {
          return !this._suggestion;
        }
        generateSuggestionText(t) {
          let e = this._suggestion;
          var n,
            i = W("span");
          if (((i.className = "kmw-suggestion-text"), e == null)) return i;
          if (e.displayAs == null || e.displayAs == "") n = "\xA0";
          else {
            let s = t ? 8238 : 8237;
            n = String.fromCharCode(s) + e.displayAs;
          }
          return (i.innerHTML = n), i;
        }
      },
      Xi = dc;
    a(Xi, "BannerSuggestion"), (Xi.BASE_ID = "kmw-suggestion-");
    var Xe = class extends K {
        constructor(e, n) {
          super(n || K.DEFAULT_HEIGHT);
          this.type = "suggestion";
          this.currentSuggestions = [];
          this.options = [];
          this.separators = [];
          this.isRTL = !1;
          this.onSuggestionUpdate = a((e) => {
            var Q;
            (this.currentSuggestions = e),
              (Q = this.highlightAnimation) == null || Q.cancel();
            let n = this.options[0].computedStyle,
              i = { fontSize: n.fontSize, fontFamily: n.fontFamily },
              s = getComputedStyle(document.body).fontSize,
              c = Cs(s).val,
              l = getComputedStyle(this.options[0].container.firstChild),
              r = this.width / Xe.LONG_SUGGESTION_DISPLAY_LIMIT,
              B = new m(l.paddingLeft || "4px"),
              d = new m(l.paddingRight || "4px"),
              g = {
                paddingWidth: B.val + d.val,
                emSize: c,
                styleForFont: i,
                collapsedWidth: r,
                minWidth: 0,
              };
            for (let F = 0; F < Xe.SUGGESTION_LIMIT; F++) {
              let y = this.options[F];
              if (e.length > F) {
                let u = e[F];
                y.update(u, g);
              } else y.update(null, g);
            }
            this.refreshLayout();
          }, "onSuggestionUpdate");
          this.refreshLayout = a(() => {
            let e = [],
              n = 0,
              i = Math.min(this.currentSuggestions.length, 8);
            for (let s = 0; s < i; s++) {
              let c = this.options[s];
              (c.minWidth = 0),
                (n += c.collapsedWidth),
                c.collapsedWidth < c.expandedWidth && e.push(c);
            }
            if (((i = i || 1), n < this.width)) {
              let s = this.width * 0.01 * (i - 1);
              for (; n < this.width && e.length > 0; ) {
                let l = (this.width - n - s) / e.length;
                e.sort((g, Q) => g.expandedWidth - Q.expandedWidth);
                let r = e[0],
                  B = r.expandedWidth - r.collapsedWidth,
                  d = Math.min(B, l);
                d > 0 &&
                  (e.forEach((g) => (g.minWidth = g.collapsedWidth + d)),
                  (n += d * e.length)),
                  e.splice(0, 1);
              }
              let c = (this.width - n - s) / i;
              for (let l = 0; l < i; l++) {
                let r = this.options[l];
                (r.minWidth = r.collapsedWidth + c), r.updateLayout();
              }
            }
            for (let s = 0; s < Xe.SUGGESTION_LIMIT - 1; s++)
              this.separators[s].style.display = s < i - 1 ? "" : "none";
          }, "refreshLayout");
          (this.hostDevice = e),
            (this.getDiv().className =
              this.getDiv().className + " " + Xe.BANNER_CLASS),
            (this.container = document.createElement("div")),
            (this.container.className = kr),
            this.getDiv().appendChild(this.container),
            this.buildInternals(!1),
            (this.gestureEngine = this.setupInputHandling());
        }
        buildInternals(e) {
          (this.isRTL = e),
            this.options.length > 0 &&
              ((this.options = []), (this.separators = []));
          for (var n = 0; n < Xe.SUGGESTION_LIMIT; n++) {
            let i = new Xi(n, e);
            this.options[n] = i;
          }
          for (var n = 0; n < Xe.SUGGESTION_LIMIT; n++) {
            let s = e ? Xe.SUGGESTION_LIMIT - n - 1 : n;
            if (
              (this.container.appendChild(this.options[s].div),
              e && (this.container.scrollLeft = this.container.scrollWidth),
              n != Xe.SUGGESTION_LIMIT - 1)
            ) {
              let c = W("div");
              c.className = "kmw-banner-separator";
              let l = c.style;
              (l.marginLeft = `calc(${Xe.MARGIN / 2}% - 0.5px)`),
                (l.marginRight = `calc(${Xe.MARGIN / 2}% - 0.5px)`),
                this.container.appendChild(c),
                (this.separators[s - (e ? 1 : 0)] = c);
            }
          }
        }
        setupInputHandling() {
          let e = new Fe(this.getDiv(), [-Number.MAX_SAFE_INTEGER]);
          this.selectionBounds = new Fe(this.getDiv(), [
            -ml * this.height,
            -Number.MAX_SAFE_INTEGER,
          ]);
          let n = {
              targetRoot: this.getDiv(),
              maxRoamingBounds: e,
              safeBounds: e,
              itemIdentifier: (r, B) => {
                let d = this.selectionBounds.getBoundingClientRect();
                if (
                  r.clientX < d.left ||
                  r.clientX > d.right ||
                  r.clientY < d.top ||
                  r.clientY > d.bottom
                )
                  return null;
                let g = null,
                  Q = Number.MAX_VALUE;
                for (let F of this.options) {
                  let y = F.div.getBoundingClientRect();
                  if (y.left <= r.clientX && r.clientX < y.right)
                    return F.suggestion ? F : null;
                  {
                    let u =
                      (r.clientX < y.left ? -1 : 1) * (r.clientX - y.left);
                    u < Q && ((Q = u), (g = F));
                  }
                }
                return g.suggestion ? g : null;
              },
            },
            i = new ut(hl, n),
            s = { source: null, scrollingHandler: null, suggestion: null },
            c = a((r) => {
              r.highlight(!0),
                this.highlightAnimation &&
                  (this.highlightAnimation.cancel(),
                  this.highlightAnimation.decouple()),
                (this.highlightAnimation = new Zn(this.container, r, !1)),
                this.highlightAnimation.expand();
            }, "markSelection"),
            l = a((r) => {
              r.highlight(!1),
                this.highlightAnimation ||
                  (this.highlightAnimation = new Zn(this.container, r, !1)),
                this.highlightAnimation.collapse();
            }, "clearSelection");
          return (
            i.on("inputstart", (r) => {
              if (s.source) {
                r.terminate(!0);
                return;
              }
              this.scrollState = new pi(
                r.currentSample,
                this.container.scrollLeft
              );
              let B = r.baseItem;
              (s.source = r),
                (s.scrollingHandler = (g) => {
                  var y;
                  let Q = this.scrollState.updateTo(g);
                  (y = this.highlightAnimation) == null || y.setBaseScroll(Q);
                  let F = g.item ? B : null;
                  F != s.suggestion &&
                    (s.suggestion && l(s.suggestion),
                    (s.suggestion = F),
                    F && c(F));
                }),
                (s.suggestion = r.currentSample.item),
                s.suggestion && c(s.suggestion);
              let d = a(() => {
                s.suggestion && (l(s.suggestion), (s.suggestion = null)),
                  (s.source = null),
                  (s.scrollingHandler = null);
              }, "terminationHandler");
              r.path.on("complete", d),
                r.path.on("invalidated", d),
                r.path.on("step", s.scrollingHandler);
            }),
            i.on("recognizedgesture", (r) => {
              r.once("stage", (B) => {
                let d = B.item;
                d &&
                  !this.scrollState.hasScrolled &&
                  this.predictionContext.accept(d.suggestion).then(() => {
                    this.container.scrollLeft = this.isRTL
                      ? this.container.scrollWidth
                      : 0;
                  }),
                  (this.scrollState = null);
              });
            }),
            i
          );
        }
        update() {
          var n;
          let e = super.update();
          return (
            (n = this.selectionBounds) == null ||
              n.updatePadding([-ml * this.height, -Number.MAX_SAFE_INTEGER]),
            e
          );
        }
        configureForKeyboard(e, n) {
          let i = e.isRTL;
          (this.container.textContent = ""),
            this.buildInternals(i),
            this.options.forEach((s) => s.matchKeyboardProperties(n)),
            this.onSuggestionUpdate(this.currentSuggestions);
        }
        get predictionContext() {
          return this._predictionContext;
        }
        set predictionContext(e) {
          this._predictionContext &&
            this._predictionContext.off("update", this.onSuggestionUpdate),
            (this._predictionContext = e),
            e &&
              (e.on("update", this.onSuggestionUpdate),
              this.onSuggestionUpdate(e.currentSuggestions));
        }
      },
      Qe = Xe;
    a(Qe, "SuggestionBanner"),
      (Qe.SUGGESTION_LIMIT = 8),
      (Qe.LONG_SUGGESTION_DISPLAY_LIMIT = 3),
      (Qe.MARGIN = 1);
    var Te = class {
        constructor(t, e, n) {
          this.setScrollOffset = a(() => {
            if (!this.scrollContainer) return;
            let t = this.option.currentWidth - this.option.collapsedWidth,
              e = this.option.rtl,
              n = Math.max(
                this.rootScrollOffset - this.option.div.offsetLeft,
                0
              ),
              i = Math.max(
                this.option.div.offsetLeft +
                  this.option.collapsedWidth -
                  (this.rootScrollOffset + this.scrollContainer.offsetWidth)
              ),
              s = Math.max(e ? i : n, 0),
              c =
                Math.max(this.collapsedScrollOffset + (e ? 0 : 1) * t, 0) +
                (e ? 0 : -1) * s,
              l =
                Math.max(this.rootScrollOffset + (e ? 0 : 1) * t, 0) +
                (e ? 0 : -1) * s,
              r = e ? Math.max(c, l) : Math.min(c, l),
              B = Math.max(
                e
                  ? this.option.div.offsetLeft +
                      this.option.currentWidth -
                      (r + this.scrollContainer.offsetWidth)
                  : r - this.option.div.offsetLeft,
                0
              ),
              d = Math.min(t, B),
              g = c + (e ? 1 : -1) * d + (e ? 0 : 1) * s;
            if (
              ((this.scrollContainer.scrollLeft = g), this.pendingAnimation)
            ) {
              let Q = this.scrollContainer.scrollLeft - g;
              this.option.currentWidth += Q;
            }
          }, "setScrollOffset");
          this._expand = a((t) => {
            if (this.startTimestamp === void 0) return;
            let e = t - this.startTimestamp,
              n = e > Te.TRANSITION_TIME;
            n && (e = Te.TRANSITION_TIME);
            let i = this.option.expandedWidth - this.option.collapsedWidth,
              s = e / Te.TRANSITION_TIME,
              c = i * s;
            (this.option.currentWidth = c + this.option.collapsedWidth),
              n
                ? this.clear()
                : (this.pendingAnimation = window.requestAnimationFrame(
                    this._expand
                  )),
              this.setScrollOffset();
          }, "_expand");
          this._collapse = a((t) => {
            if (this.startTimestamp === void 0) return;
            let e = t - this.startTimestamp,
              n = e > Te.TRANSITION_TIME;
            n && (e = Te.TRANSITION_TIME);
            let i = this.option.expandedWidth - this.option.collapsedWidth,
              s = 1 - e / Te.TRANSITION_TIME,
              c = i * s;
            (this.option.currentWidth = c + this.option.collapsedWidth),
              n
                ? this.clear()
                : (this.pendingAnimation = window.requestAnimationFrame(
                    this._collapse
                  )),
              this.setScrollOffset();
          }, "_collapse");
          (this.scrollContainer = t),
            (this.option = e),
            (this.collapsedScrollOffset = t.scrollLeft),
            (this.rootScrollOffset = t.scrollLeft);
        }
        setBaseScroll(t) {
          (this.collapsedScrollOffset = t),
            this.option.rtl
              ? t > this.rootScrollOffset && (this.rootScrollOffset = t)
              : t < this.rootScrollOffset && (this.rootScrollOffset = t),
            window.requestAnimationFrame(this.setScrollOffset);
        }
        decouple() {
          this.cancel(), (this.scrollContainer = null);
        }
        clear() {
          (this.startTimestamp = null),
            window.cancelAnimationFrame(this.pendingAnimation),
            (this.pendingAnimation = null);
        }
        cancel() {
          this.clear(), (this.option.currentWidth = this.option.collapsedWidth);
        }
        expand() {
          this.clear(), (this.startTimestamp = performance.now());
          let t = this.option.currentWidth - this.option.collapsedWidth,
            e = this.option.expandedWidth - this.option.collapsedWidth;
          t != 0 && (this.startTimestamp -= (t / e) * Te.TRANSITION_TIME),
            (this.pendingAnimation = window.requestAnimationFrame(
              this._expand
            ));
        }
        collapse() {
          this.clear(), (this.startTimestamp = performance.now());
          let t = this.option.expandedWidth - this.option.currentWidth,
            e = this.option.expandedWidth - this.option.collapsedWidth;
          t != 0 && (this.startTimestamp -= (t / e) * Te.TRANSITION_TIME),
            (this.pendingAnimation = window.requestAnimationFrame(
              this._collapse
            ));
        }
      },
      Zn = Te;
    a(Zn, "SuggestionExpandContractAnimation"), (Zn.TRANSITION_TIME = 250);
    var Vi = class extends K {
      constructor(e) {
        super();
        this.type = "html";
        let n = this.getDiv(),
          i = document.createElement("div");
        (i.style.userSelect = "none"),
          (i.style.height = "100%"),
          (i.style.width = "100%"),
          n.appendChild(i),
          (this.container = i.attachShadow
            ? i.attachShadow({ mode: "closed" })
            : i),
          (this.container.innerHTML = e);
      }
      get innerHTML() {
        return this.container.innerHTML;
      }
      set innerHTML(e) {
        this.container.innerHTML = e;
      }
    };
    a(Vi, "HTMLBanner");
    var Sn = class {
      constructor(t, e, n) {
        this.ImageBanner = Qi;
        this.HTMLBanner = Vi;
        (this.hostDevice = e),
          (this.container = t),
          (this.predictionContext = n),
          (this.inactiveBanner = new Pe());
      }
      get inactiveBanner() {
        return this._inactiveBanner;
      }
      set inactiveBanner(t) {
        (this._inactiveBanner = t != null ? t : new Pe()),
          this.container.banner instanceof Qe ||
            (this.container.banner = this._inactiveBanner);
      }
      activateBanner(t) {
        let e,
          n = this.container.banner;
        if ((n instanceof Qe && (n.predictionContext = null), !t))
          this.container.banner = this.inactiveBanner;
        else {
          let i = (e = new Qe(
            this.hostDevice,
            this.container.activeBannerHeight
          ));
          (i.predictionContext = this.predictionContext),
            (this.container.banner = i);
        }
      }
      selectBanner(t) {
        this.activateBanner(t == "active" || t == "configured"),
          this.keyboard &&
            this.container.banner.configureForKeyboard(
              this.keyboard,
              this.keyboardStub
            );
      }
      configureForKeyboard(t, e) {
        (this.keyboard = t),
          (this.keyboardStub = e),
          this.container.banner.configureForKeyboard(t, e);
      }
      shutdown() {
        this.container.banner instanceof Qe &&
          (this.container.banner.predictionContext = null);
      }
    };
    a(Sn, "BannerController");
    var It = class {
      constructor() {
        let t = (this.element = document.createElement("div"));
        (t.style.userSelect = "none"), (t.className = "kmw-osk-none");
      }
      postInsert() {}
      updateState() {}
      refreshLayout() {}
      get layoutHeight() {
        return m.inPixels(0);
      }
    };
    a(It, "EmptyView");
    var xs = class {
        constructor(t) {
          this.kbd = t;
          var e = (this.element = document.createElement("div"));
          (e.style.userSelect = "none"),
            (e.className = "kmw-osk-static"),
            (e.id = xs.ID),
            (e.innerHTML = t.helpText);
        }
        postInsert() {
          if (!this.element.parentElement || !document.getElementById(xs.ID))
            throw new Error(
              "The HelpPage root element has not yet been inserted into the DOM."
            );
          this.kbd.hasScript &&
            this.kbd.embedScript(this.element.parentElement);
        }
        updateState() {}
        refreshLayout() {}
        get layoutHeight() {
          return m.inPercent(100);
        }
      },
      _t = xs;
    a(_t, "HelpPageView"), (_t.ID = "kmw-osk-help-page");
    var Sl = v(A(), 1);
    var Nr = {
        "*Shift*": 8,
        "*Enter*": 5,
        "*Tab*": 6,
        "*BkSp*": 4,
        "*Menu*": 11,
        "*Hide*": 10,
        "*Alt*": 25,
        "*Ctrl*": 1,
        "*Caps*": 3,
        "*ABC*": 16,
        "*abc*": 17,
        "*123*": 19,
        "*Symbol*": 21,
        "*Currency*": 20,
        "*Shifted*": 9,
        "*AltGr*": 2,
        "*TabLeft*": 7,
        "*LAlt*": 86,
        "*RAlt*": 87,
        "*LCtrl*": 88,
        "*RCtrl*": 89,
        "*LAltCtrl*": 96,
        "*RAltCtrl*": 97,
        "*LAltCtrlShift*": 98,
        "*RAltCtrlShift*": 99,
        "*AltShift*": 100,
        "*CtrlShift*": 101,
        "*AltCtrlShift*": 102,
        "*LAltShift*": 103,
        "*RAltShift*": 104,
        "*LCtrlShift*": 105,
        "*RCtrlShift*": 112,
        "*LTREnter*": 5,
        "*LTRBkSp*": 4,
        "*RTLEnter*": 113,
        "*RTLBkSp*": 114,
        "*ShiftLock*": 115,
        "*ShiftedLock*": 116,
        "*ZWNJ*": 117,
        "*ZWNJiOS*": 117,
        "*ZWNJAndroid*": 118,
        "*ZWNJGeneric*": 121,
        "*Sp*": 128,
        "*NBSp*": 130,
        "*NarNBSp*": 131,
        "*EnQ*": 132,
        "*EmQ*": 133,
        "*EnSp*": 134,
        "*EmSp*": 135,
        "*PunctSp*": 140,
        "*ThSp*": 141,
        "*HSp*": 142,
        "*ZWSp*": 129,
        "*ZWJ*": 119,
        "*WJ*": 120,
        "*CGJ*": 122,
        "*LTRM*": 144,
        "*RTLM*": 145,
        "*SH*": 161,
        "*HTab*": 162,
      },
      Gs = Nr;
    var Tr = [
        "default",
        "shift",
        "shift-on",
        "special",
        "special-on",
        "",
        "",
        "",
        "deadkey",
        "blank",
        "hidden",
      ],
      qt = Tr;
    function $t(o, t) {
      switch (o) {
        case "*ZWNJ*":
          o =
            t.device.OS == p.OperatingSystem.Android
              ? "*ZWNJAndroid*"
              : "*ZWNJiOS*";
          break;
        case "*Enter*":
          o = t.isRTL ? "*RTLEnter*" : "*LTREnter*";
          break;
        case "*BkSp*":
          o = t.isRTL ? "*RTLBkSp*" : "*LTRBkSp*";
          break;
        default:
      }
      let e = 57344 + Gs[o];
      return Gs[o] ? String.fromCharCode(e) : o;
    }
    a($t, "renameSpecialKey");
    var Li = class {
        constructor(t, e) {
          (this.spec = t), (this.layer = e);
        }
        setButtonClass() {
          var i;
          let t = this.spec,
            e = this.btn;
          var n = 0;
          typeof t.dk == "string" && t.dk == "1" && (n = 8),
            (n = (i = t.sp) != null ? i : n),
            (n < 0 || n > 10) && (n = 0),
            (e.className = "kmw-key kmw-key-" + qt[n]);
        }
        setToggleState(t) {
          let e;
          switch (((e = this.spec.sp), qt[e])) {
            case "shift":
            case "shift-on":
              t === void 0 && (t = qt[e] == "shift"),
                (this.spec.sp = 1 + (t ? 1 : 0));
              break;
            case "special":
            case "special-on":
              t === void 0 && (t = qt[e] == "special"),
                (this.spec.sp = 3 + (t ? 1 : 0));
              break;
            default:
              return;
          }
          this.setButtonClass();
        }
        isFrameKey() {
          let t = this.spec.sp || 0;
          switch (qt[t]) {
            case "default":
            case "deadkey":
              return !1;
            default:
              return !0;
          }
        }
        allowsKeyTip() {
          return this.isFrameKey()
            ? !1
            : !this.btn.classList.contains("kmw-spacebar");
        }
        highlight(t) {
          var e = this.btn.classList;
          t
            ? e.contains(Li.HIGHLIGHT_CLASS) || e.add(Li.HIGHLIGHT_CLASS)
            : e.remove(Li.HIGHLIGHT_CLASS);
        }
        getIdealFontSize(t, e, n) {
          if (!this._fontFamily) return new m("1em");
          n != null || (n = 1);
          let i = e.keyWidth,
            s = e.keyHeight,
            c = e.baseEmFontSize.scaledBy(e.layoutFontSize.val),
            l = this._fontSize;
          l.absolute || (l = c.scaledBy(l.val));
          let r = {
              fontFamily: this._fontFamily,
              fontSize: l.styleString,
              height: e.keyHeight,
            },
            B = ms(t, c.scaledBy(n).val, r),
            d = 0.9,
            g = 0.9,
            Q = 2;
          var F;
          B.fontBoundingBoxAscent &&
            (F = B.fontBoundingBoxAscent + B.fontBoundingBoxDescent);
          let y = F != null ? F : 0,
            u = (i * d) / (B.width + Q),
            I = y && s ? (s * g) / y : void 0;
          var b = u;
          return I && I < u && (b = I), m.forScalar(n * Math.min(b, 1));
        }
        get keyText() {
          let t = this.spec,
            e = "\xA0",
            n = null;
          return (
            t.text == null || t.text == ""
              ? (n = e)
              : ((n = t.text),
                n == "*Tab*" && this.layer == "shift" && (n = "*TabLeft*")),
            n
          );
        }
        generateKeyText(t) {
          let e = this.spec,
            n = document.createElement("span"),
            i = n.style;
          n.className = "kmw-key-text";
          let s = this.keyText,
            c = $t(s, t);
          c != s && ((s = c), (e.font = "SpecialOSK")),
            typeof e.font == "string" &&
              e.font != "" &&
              (i.fontFamily = e.font),
            typeof e.fontsize == "string" &&
              e.fontsize != "" &&
              (i.fontSize = e.fontsize);
          let l = { fontSize: i.fontSize };
          return (
            i.fontFamily
              ? (l.fontFamily = i.fontFamily)
              : (l.fontFamily = t.fontFamily),
            t.isRTL && (s = "\u200F" + s),
            (n.innerText = s),
            n
          );
        }
        resetFontPrecalc() {
          (this._fontFamily = void 0),
            (this._fontSize = void 0),
            (this.label.style.fontSize = "");
        }
        detectStyles(t) {
          if (
            !(this.spec.sp == f.spacer || this.spec.sp == f.blank) &&
            this._fontFamily === void 0
          ) {
            let e = getComputedStyle(this.label);
            if (!e.fontFamily) return;
            this._fontFamily = e.fontFamily;
            let n = new m(e.fontSize),
              i = t.layoutFontSize;
            if (i.absolute) this._fontSize = n;
            else {
              let s = t.baseEmFontSize,
                c = i.scaledBy(s.val),
                l = n.val / c.val;
              this._fontSize = m.forScalar(l);
            }
          }
        }
        refreshLayout(t) {
          if (this.label)
            if (this.label.classList.contains("kmw-spacebar-caption")) {
              let e = this.getIdealFontSize(this.keyText, t);
              this.label.style.setProperty(
                "font-size",
                e.styleString,
                "important"
              );
            } else {
              let e = this.label.textContent,
                n = this.getIdealFontSize(e, t);
              this.label.style.fontSize = n.styleString;
            }
        }
      },
      re = Li;
    a(re, "OSKKey"),
      (re.specialCharacters = Gs),
      (re.BUTTON_CLASSES = qt),
      (re.HIGHLIGHT_CLASS = "kmw-key-touched");
    var en = class {
      constructor(t, e) {
        (this.key = t), (this.keyId = e);
      }
    };
    a(en, "KeyData");
    function ps(o, t) {
      let e = o;
      for (let n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      return e;
    }
    a(ps, "link");
    function Mr(o) {
      return o && "key" in o && o.key instanceof re;
    }
    a(Mr, "isKey");
    function Xs(o) {
      return Mr(o) ? o : null;
    }
    a(Xs, "getKeyFrom");
    var Jn = class extends re {
      constructor(e, n, i) {
        super(e, n);
        this.row = i;
      }
      getId() {
        return this.spec.elementID;
      }
      getCoreId() {
        return this.spec.coreID;
      }
      getBaseId() {
        return this.spec.baseKeyID;
      }
      generateKeyCapLabel() {
        var e = U.keyCodes[this.spec.baseKeyID];
        switch (e) {
          case 186:
            e = 59;
            break;
          case 187:
            e = 61;
            break;
          case 188:
            e = 44;
            break;
          case 189:
            e = 45;
            break;
          case 190:
            e = 46;
            break;
          case 191:
            e = 47;
            break;
          case 192:
            e = 96;
            break;
          case 219:
            e = 91;
            break;
          case 220:
            e = 92;
            break;
          case 221:
            e = 93;
            break;
          case 222:
            e = 39;
            break;
          default:
            (e < 48 || e > 90) && (e = 0);
        }
        let n = document.createElement("div");
        return (
          (n.className = "kmw-key-label"),
          e > 0 && (n.innerText = String.fromCharCode(e)),
          n
        );
      }
      processSubkeys(e, n) {
        var i,
          s = (e.subKeys = this.spec.sk);
        for (i = 0; i < s.length; i++) {
          if (s[i].sp == 1 || s[i].sp == 2) {
            var c = s[i].text;
            s[i].text = $t(c, n);
          }
          s[i].layer || (s[i].layer = e.key.layer);
        }
      }
      construct(e) {
        let n = this.spec,
          i = document.createElement("div");
        i.className = "kmw-key-square";
        let s = document.createElement("div"),
          c = (this.btn = ps(s, new en(this, n.id)));
        this.setButtonClass();
        let l = (this.capLabel = this.generateKeyCapLabel());
        c.appendChild(l),
          (c.id = this.getId()),
          c.appendChild((this.label = this.generateKeyText(e))),
          typeof n.sk != "undefined" && n.sk != null
            ? this.processSubkeys(c, e)
            : (c.subKeys = null);
        let r = this.generateHint(e);
        return (
          c.appendChild(r),
          i.appendChild(c),
          (this.preview = document.createElement("div")),
          (this.preview.style.display = "none"),
          c.appendChild(this.preview),
          (this.square = i)
        );
      }
      generateHint(e) {
        let n = document.createElement("div");
        n.className = "kmw-key-popup-icon";
        let i = this.spec.hintSrc;
        if (!i) return n;
        if (
          (i.font && i.font != "SpecialOSK"
            ? (n.style.fontFamily = i.font)
            : n.classList.add("kmw-key-text"),
          i.fontsize)
        ) {
          let l = new m(i.fontsize);
          n.style.fontSize = l.scaledBy(0.5).styleString;
        }
        let s = i == this.spec ? this.spec.hint : i.text,
          c = $t(s, e);
        return (
          c == "\u2022" && (n.style.fontWeight = "bold"),
          s != c && (n.style.fontFamily = "SpecialOSK"),
          (n.textContent = c),
          n
        );
      }
      setPreview(e) {
        let n = this.preview;
        e
          ? ((this.previewHost = e), (this.preview = this.previewHost.element))
          : ((this.previewHost = null),
            (this.preview = document.createElement("div")),
            (this.preview.style.display = "none")),
          e == null ||
            e.setCancellationHandler(() => {
              this.setPreview(null);
            }),
          this.btn.replaceChild(this.preview, n);
      }
      refreshLayout(e) {
        super.refreshLayout(e),
          e.baseEmFontSize.val < 12
            ? (this.capLabel.style.fontSize = "6px")
            : (this.capLabel.style.fontSize = m.forScalar(0.5).styleString);
      }
      get displaysKeyCap() {
        return this.capLabel && this.capLabel.style.display == "block";
      }
      set displaysKeyCap(e) {
        if (!this.capLabel)
          throw new Error(
            "Key element not yet constructed; cannot display key cap"
          );
        this.capLabel.style.display = e ? "block" : "none";
      }
    };
    a(Jn, "OSKBaseKey");
    var Vs = 0.15,
      Rn = class {
        constructor(t, e, n) {
          let i = (this.element = document.createElement("div"));
          (i.className = "kmw-key-row"),
            (this.heightFraction = 1 / e.row.length);
          let s = n.key;
          (this.spec = n), (this.keys = []);
          for (let r = 0; r < s.length; r++) {
            let B = s[r];
            var c = new Jn(B, e.id, this),
              l = c.construct(t);
            this.keys.push(c), i.appendChild(l);
          }
        }
        get displaysKeyCaps() {
          if (this.keys.length > 0) return this.keys[0].displaysKeyCap;
        }
        set displaysKeyCaps(t) {
          for (let e of this.keys) e.displaysKeyCap = t;
        }
        refreshLayout(t) {
          let e = this.element.style,
            n = t.heightStyle.scaledBy(this.heightFraction);
          e.maxHeight = e.lineHeight = e.height = n.styleString;
          let i = t.heightStyle.absolute ? n : m.forScalar(1),
            s = i.scaledBy(Vs / 2),
            c = i.scaledBy(1 - Vs);
          this.keys.forEach((l) => {
            let r = l.square,
              B = l.btn,
              d = r.style;
            d.height = d.minHeight = i.styleString;
            let g = B.style;
            (g.top = s.styleString),
              (g.height = g.lineHeight = g.minHeight = c.styleString);
          });
        }
        buildKeyLayout(t, e) {
          let n = t.widthStyle.scaledBy(e.spec.proportionalWidth),
            i = t.heightStyle.scaledBy(this.heightFraction).scaledBy(1 - Vs);
          return {
            keyWidth: n.val * (n.absolute ? 1 : t.keyboardWidth),
            keyHeight: i.val * (i.absolute ? 1 : t.keyboardHeight),
            baseEmFontSize: t.baseEmFontSize,
            layoutFontSize: t.layoutFontSize,
          };
        }
        detectStyles(t) {
          this.keys.forEach((e) => {
            e.detectStyles(this.buildKeyLayout(t, e));
          });
        }
        refreshKeyLayouts(t) {
          this.keys.forEach((e) => {
            var g;
            let n = e.btn,
              i = t.widthStyle,
              s = t.heightStyle,
              c = i.scaledBy(e.spec.proportionalWidth),
              l = i.scaledBy(e.spec.proportionalPad),
              r = s.scaledBy(this.heightFraction).scaledBy(1 - Vs),
              B = s.absolute ? r.styleString : "100%",
              d = this.buildKeyLayout(t, e);
            (g = n.key) == null || g.refreshLayout(d),
              (e.square.style.width = c.styleString),
              (e.square.style.marginLeft = l.styleString),
              (e.btn.style.width = i.absolute ? c.styleString : "100%"),
              (e.square.style.height = B);
          });
        }
      };
    a(Rn, "OSKRow");
    var An = class {
      get rowHeight() {
        return this._rowHeight;
      }
      get id() {
        return this.spec.id;
      }
      constructor(t, e, n) {
        this.spec = n;
        let i = (this.element = document.createElement("div")),
          s = i.style;
        i.className = "kmw-key-layer";
        var c = n.row.length;
        c > 4 &&
          t.device.formFactor == "phone" &&
          (i.className = i.className + " kmw-5rows"),
          (s.fontFamily = "font" in e ? e.font : ""),
          (this.nextlayer = i.layer = n.id),
          typeof n.nextlayer == "string" &&
            (i.nextLayer = this.nextlayer = n.nextlayer);
        let l = n.row;
        this.rows = [];
        for (let r = 0; r < l.length; r++) {
          let B = new Rn(t, n, l[r]);
          (B.displaysKeyCaps = e.displayUnderlying),
            i.appendChild(B.element),
            this.rows.push(B);
        }
        if (
          (t.device.touchable &&
            ((this.globeKey = this.findKey("K_LOPT")),
            (this.hideKey = this.findKey("K_ROPT"))),
          (this.spaceBarKey = this.findKey("K_SPACE")),
          (this.capsKey = this.findKey("K_CAPS")),
          (this.numKey = this.findKey("K_NUMLOCK")),
          (this.scrollKey = this.findKey("K_SCROLL")),
          this.spaceBarKey)
        ) {
          let r = this.spaceBarKey.label,
            B = this.spaceBarKey.btn;
          typeof B.className == "undefined" || B.className == ""
            ? (B.className = "kmw-spacebar")
            : B.className.indexOf("kmw-spacebar") == -1 &&
              (B.className += " kmw-spacebar"),
            r.className != "kmw-spacebar-caption" &&
              (r.className = "kmw-spacebar-caption");
        }
      }
      findKey(t) {
        for (let e of this.rows)
          for (let n of e.keys) if (n.getBaseId() == t) return n;
        return null;
      }
      showLanguage(t) {
        if (!!this.spaceBarKey)
          try {
            let e = this.spaceBarKey.label;
            (this.spaceBarKey.spec.text = t),
              (e.innerText != t || t == "") && (e.innerText = t);
          } catch (e) {}
      }
      refreshLayout(t) {
        this.rows.forEach((c) => c.detectStyles(t));
        let e = t.keyboardHeight,
          n = this.rows.length,
          i = (this._rowHeight = Math.floor(e / (n == 0 ? 1 : n))),
          s = t.widthStyle.absolute;
        s && (this.element.style.height = e + "px"),
          this.showLanguage(t.spacebarText);
        for (let c = 0; c < n; c++) {
          let l = this.rows[c],
            r = (n - c - 1) * i + 1;
          s && (this.spec.row[c].proportionalY = (e - r - i / 2) / e),
            l.refreshLayout(t),
            c == n - 1 && (l.element.style.bottom = "1px");
        }
        for (let c of this.rows) c.refreshKeyLayouts(t);
      }
    };
    a(An, "OSKLayer");
    var Yr = 0.06,
      Hn = class {
        constructor(t, e, n) {
          this.layers = {};
          this._activeLayerId = "default";
          let i = e.layout(n);
          this.spec = i;
          let s = (this.element = document.createElement("div")),
            c = s.style;
          if (((s.className = "kmw-key-layer-group"), i == null)) return;
          let l = i.fontsize;
          typeof l == "undefined" || l == null || l == ""
            ? (c.fontSize = "1em")
            : (c.fontSize = i.fontsize),
            (c.width = "100%"),
            (c.height = "100%");
          var r, B, d, g;
          g = i.layer;
          var Q = t.getDefaultKeyObject();
          for (Q.fontsize = c.fontSize, r = 0; r < g.length; r++) {
            let F = g[r],
              y = new An(t, i, F);
            (this.layers[F.id] = y),
              (y.element.style.display = F.id == "default" ? "block" : "none"),
              s.appendChild(y.element);
          }
        }
        get activeLayer() {
          return this.activeLayerId ? this.layers[this.activeLayerId] : null;
        }
        get activeLayerId() {
          return this._activeLayerId;
        }
        set activeLayerId(t) {
          this._activeLayerId = t;
          for (let e of Object.keys(this.layers)) {
            let n = this.layers[e],
              i = n.element;
            n.id == t
              ? (i.style.display = "block")
              : (i.style.display = "none");
          }
        }
        findNearestKey(t) {
          if (!t) return null;
          let e = t.stateToken;
          if (!e) throw new Error("Layer id not set for input coordinate");
          let n = this.layers[e];
          if (!n) throw new Error(`Layer id ${e} could not be found`);
          return this.nearestKey(t, n);
        }
        blinkLayer(t) {
          if (typeof t == "string") {
            let n = t;
            if (((t = this.layers[n]), !t))
              throw new Error(`Layer id ${n} could not be found`);
          }
          let e = t;
          if (e.element.style.display != "block")
            for (let n in this.layers) {
              if (this.layers[n].element.style.display == "block") {
                let i = this.layers[n];
                i.element.style.display = "none";
              }
              this.layers[n].element.style.display = "none";
            }
          (e.element.style.display = "block"),
            Promise.resolve().then(() => {
              let n = this.layers[this._activeLayerId];
              (e.element.style.display == "block" ||
                n.element.style.display != "block") &&
                ((e.element.style.display = "none"),
                (n.element.style.display = "block"));
            });
        }
        nearestKey(t, e) {
          if (e.rows.length == 0) return null;
          let n = {
            x: t.targetX / this.computedWidth,
            y: t.targetY / this.computedHeight,
          };
          if (!isFinite(n.x) || !isFinite(n.y)) return null;
          let i = Math.max(
              0,
              Math.min(e.rows.length - 1, Math.floor(n.y * e.rows.length))
            ),
            s = e.rows[i],
            c = null,
            l = Number.MAX_VALUE;
          for (let r of s.keys) {
            let B = r.spec;
            if (B.sp == f.blank || B.sp == f.spacer) continue;
            let d = B.proportionalWidth / 2,
              g = Math.abs(n.x - B.proportionalX);
            if (g - d <= 0) return r.btn;
            {
              let Q = g - d;
              Q < l && ((l = Q), (c = r));
            }
          }
          return l <= Yr ? c.btn : null;
        }
        resetPrecalcFontSizes() {
          for (let t of Object.values(this.layers))
            for (let e of t.rows) for (let n of e.keys) n.resetFontPrecalc();
          this._heightPadding = void 0;
        }
        refreshLayout(t) {
          if (!(isNaN(t.keyboardWidth) || isNaN(t.keyboardHeight))) {
            if (
              ((this.computedWidth = t.keyboardWidth),
              (this.computedHeight = t.keyboardHeight),
              this._heightPadding === void 0)
            ) {
              let e = getComputedStyle(this.element),
                n = parseInt(e.paddingTop, 10) || 0,
                i = parseInt(e.paddingBottom, 10) || 0;
              this._heightPadding = n + i;
            }
            this.activeLayer && this.activeLayer.refreshLayout(t);
          }
        }
        get verticalPadding() {
          var t;
          return (t = this._heightPadding) != null ? t : 0;
        }
      };
    a(Hn, "OSKLayerGroup");
    var Gl = "kmw-",
      pl = "top",
      En = class {
        constructor(t, e) {
          this.state = !1;
          this.orientation = pl;
          this.vkbd = t;
          let n = (this.element = document.createElement("div"));
          (n.className = "kmw-keytip"),
            (n.id = "kmw-keytip"),
            (n.style.pointerEvents = "none"),
            (n.style.display = "none"),
            n.appendChild((this.tip = document.createElement("div"))),
            n.appendChild((this.cap = document.createElement("div"))),
            this.tip.appendChild(
              (this.preview = document.createElement("div"))
            ),
            (this.tip.className = "kmw-keytip-tip"),
            (this.cap.className = "kmw-keytip-cap"),
            (this.constrain = e),
            (this.reorient = (i) => {
              (this.orientation = i),
                this.show(this.key, this.state, this.previewHost);
            });
        }
        show(t, e, n) {
          var l;
          let i = this.vkbd;
          if (
            (e && i.layerGroup.blinkLayer(t.key.spec.displayLayer),
            e && t.offsetParent)
          ) {
            let r = t.key.row.element,
              B = t.getClientRects()[0],
              d = r.getClientRects()[0],
              g = B.left - d.left,
              Q = B.width,
              F = B.height,
              y = t.key.label,
              u = 1.8,
              I = this.element.style,
              h = i.topContainer.getBoundingClientRect(),
              x = t.getBoundingClientRect(),
              G,
              X = this.orientation,
              L = x.bottom - h.top;
            G = L + (X == "top" ? 1 : -1);
            let J = G - Math.floor(G),
              oe = Q + Math.ceil(Q * 0.3) * 2,
              ae = Math.ceil(2.3 * F) + J;
            X == "bottom" && (G += ae - F), (I.top = "auto");
            let Ue = X == "top" ? "bottom" : "top";
            this.tip.classList.remove(`${Gl}${Ue}`),
              this.tip.classList.add(`${Gl}${X}`),
              (I.bottom = Math.floor(h.height - G) + "px"),
              (I.textAlign = "center"),
              (I.overflow = "visible"),
              (I.width = oe + "px"),
              (I.height = ae + "px");
            let On = this.vkbd.currentLayer.element.style.fontFamily,
              Fn = getComputedStyle(i.element);
            I.fontFamily = t.key.spec.font || On || Fn.fontFamily;
            var s = parseInt(Fn.fontSize, 10);
            if ((s == Number.NaN && (s = 0), s != 0)) {
              let ze = {
                keyWidth: 1.6 * Q,
                keyHeight: 1.6 * F,
                baseEmFontSize: i.getKeyEmFontSize(),
                layoutFontSize: new m(i.kbdDiv.style.fontSize),
              };
              I.fontSize = t.key.getIdealFontSize(
                t.key.keyText,
                ze,
                u
              ).styleString;
            }
            var c = (oe - Q) / 2;
            g < c
              ? ((this.cap.style.left = "1px"), (g += c - 1))
              : g > window.innerWidth - Q - c
              ? ((this.cap.style.left = oe - Q - 1 + "px"), (g -= c - 1))
              : (this.cap.style.left = c + "px"),
              (I.left = g - c + "px");
            let Gt = getComputedStyle(this.element),
              Pn = h.height,
              he = parseFloat(Gt.bottom),
              De = parseFloat(Gt.height),
              jn = Math.ceil(ae / 2);
            (this.cap.style.width = Q + "px"),
              (this.tip.style.height = jn + "px");
            let Ws = 3,
              _n = jn - Ws + "px";
            X == "top"
              ? ((this.cap.style.top = _n), (this.cap.style.bottom = ""))
              : ((this.cap.style.top = ""), (this.cap.style.bottom = _n));
            let qn = L - Math.floor(G) + ae - (X == "top" ? jn : -Ws * 2);
            if (
              ((this.cap.style.height = qn + "px"),
              this.constrain && De + he > Pn)
            ) {
              let ze = De + he - Pn;
              I.height = ae - ze + "px";
              let $n = Math.max(0, ae - ze - ae / 2 + 2);
              this.cap.style.height = $n + "px";
            } else
              he < 0 &&
                ((I.bottom = "0px"),
                (this.cap.style.height = Math.max(0, qn + he) + "px"));
            if (((I.display = "block"), this.previewHost == n)) return;
            let Yi = this.preview;
            this.previewHost &&
              this.previewHost.off("preferredOrientation", this.reorient),
              (this.previewHost = n),
              n &&
                (this.previewHost.on("preferredOrientation", this.reorient),
                (this.preview = this.previewHost.element),
                this.tip.replaceChild(this.preview, Yi),
                n.setCancellationHandler(() => this.show(null, !1, null)),
                n.on("startFade", () => {
                  this.element.classList.remove("kmw-preview-fade"),
                    this.element.offsetWidth,
                    this.element.classList.add("kmw-preview-fade");
                }));
          } else {
            (this.element.style.display = "none"),
              (l = this.previewHost) == null ||
                l.off("preferredOrientation", this.reorient),
              (this.previewHost = null);
            let r = this.preview;
            (this.preview = document.createElement("div")),
              this.tip.replaceChild(this.preview, r),
              this.element.classList.remove("kmw-preview-fade"),
              (this.orientation = pl);
          }
          (this.key = t), (this.state = e);
        }
      };
    a(En, "KeyTip");
    var gc = "kmw-keypreview",
      wr = "kmw-preview-overlay",
      Dr = "kmw-keytip",
      Zi = class {
        constructor(t) {
          this.state = !1;
          this.vkbd = t;
          let e = (this.element = document.createElement("div"));
          (e.className = gc),
            (e.id = "kmw-keytip"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            (this.preview = document.createElement("div")),
            e.appendChild(this.preview);
        }
        show(t, e, n) {
          let i = this.vkbd,
            s = t == null ? void 0 : t.key.spec.displayLayer;
          if (
            (e && i.layerGroup.blinkLayer(s),
            e && (t == null ? void 0 : t.offsetParent))
          ) {
            let c = this.vkbd.topContainer.getBoundingClientRect(),
              l = t.getBoundingClientRect(),
              r = s != i.layerId ? wr : "";
            (this.element.className = `${gc} ${t.className} ${r}`),
              (this.element.id = `${Dr}-${t.id}`);
            let B = this.element.style,
              d = this.vkbd.currentLayer.element.style.fontFamily;
            if (
              ((B.fontFamily = t.key.spec.font || d),
              (B.left = l.left - c.left + "px"),
              (B.top = l.top - c.top + "px"),
              (B.width = l.width + "px"),
              (B.height = l.height + "px"),
              (this.element.style.display = "block"),
              this.previewHost == n)
            )
              return;
            let g = this.preview;
            (this.previewHost = n),
              n &&
                ((this.preview = this.previewHost.element),
                this.element.replaceChild(this.preview, g),
                n.setCancellationHandler(() => this.show(null, !1, null)),
                n.on("startFade", () => {
                  this.element.classList.remove("kmw-preview-fade"),
                    this.element.offsetWidth,
                    this.element.classList.add("kmw-preview-fade");
                }));
          } else {
            (this.element.style.display = "none"),
              (this.element.className = gc),
              (this.previewHost = null);
            let c = this.preview;
            (this.preview = document.createElement("div")),
              this.element.replaceChild(this.preview, c),
              this.element.classList.remove("kmw-preview-fade");
          }
          (this.key = t), (this.state = e);
        }
      };
    a(Zi, "TabletKeyTip");
    function He(o) {
      try {
        if (o == "desktop") return 1;
        var t = document.documentElement.clientWidth;
        if (screen.width > t) return 1;
        var e = screen.width;
        return (
          xe()
            ? screen.width < screen.height && (e = screen.height)
            : screen.width > screen.height && (e = screen.height),
          Math.round((100 * e) / t) / 100
        );
      } catch (n) {
        return 1;
      }
    }
    a(He, "getViewportScale");
    var Ls = class {
        constructor(t, e) {
          this.directlyEmitsKeys = !0;
          this.hasModalVisualization = !1;
          this.deleteRepeater = a(() => {
            this.repeatClosure(),
              (this.timerHandle = window.setTimeout(
                this.deleteRepeater,
                Ls.REPEAT_DELAY
              ));
          }, "deleteRepeater");
          this.source = t;
          let n = t.stageReports[0].item;
          n.key.highlight(!0),
            (this.repeatClosure = () => {
              e(), n.key.highlight(!0);
            }),
            (this.timerHandle = window.setTimeout(
              this.deleteRepeater,
              Ls.INITIAL_DELAY
            )),
            this.source.on("complete", () => {
              window.clearTimeout(this.timerHandle),
                (this.timerHandle = void 0),
                n.key.highlight(!1);
            });
        }
        cancel() {
          this.deleteRepeater(), this.source.cancel();
        }
        currentStageKeyDistribution() {
          return null;
        }
      },
      tn = Ls;
    a(tn, "HeldRepeater"), (tn.INITIAL_DELAY = 500), (tn.REPEAT_DELAY = 100);
    var vn = class extends re {
      constructor(t, e) {
        if (typeof e != "string" || e == "")
          throw "The 'layer' parameter for subkey construction must be properly defined.";
        super(t, e);
      }
      getId() {
        return "popup-" + this.spec.elementID;
      }
      construct(t, e, n) {
        let i = this.spec,
          s = document.createElement("div"),
          c = t.getDefaultKeyObject(),
          l = s.style;
        (s.className = "kmw-key-square-ex"),
          n && (l.marginTop = "5px"),
          typeof i.width != "undefined"
            ? (l.width = (i.width * e.offsetWidth) / 100 + "px")
            : (l.width = e.offsetWidth + "px"),
          (l.height = e.offsetHeight + "px");
        let r = document.createElement("div"),
          B = (this.btn = ps(r, new en(this, i.id)));
        this.setButtonClass(), (B.id = this.getId());
        let d = B.style;
        return (
          (d.height = l.height),
          (d.lineHeight = e.style.lineHeight),
          (d.width = l.width),
          (d.position = "absolute"),
          B.appendChild((this.label = this.generateKeyText(t))),
          s.appendChild(B),
          (this.square = s)
        );
      }
      allowsKeyTip() {
        return !1;
      }
    };
    a(vn, "OSKSubKey");
    var Xl = 0.2,
      zr = 1.2,
      Ll = 3,
      Kr = 5,
      Vl = 6 + Ll,
      nn = class {
        constructor(t, e, n, i, s) {
          this.directlyEmitsKeys = !0;
          this.shouldLockLayer = !1;
          (this.baseKey = i),
            (this.source = t),
            (this.gestureParams = s),
            n.layerLocked && (this.shouldLockLayer = !0),
            t.on("complete", () => {
              var b;
              (b = this.currentSelection) == null || b.key.highlight(!1),
                this.clear();
            }),
            t.on("stage", () => {
              let b = this.currentSelection;
              if (b) {
                let h = n.keyEventFromSpec(b.key.spec);
                (h.keyDistribution = this.currentStageKeyDistribution()),
                  n.raiseKeyEvent(h, b);
              }
            });
          let c = t.stageReports[0].sources[0].constructSubview(!0, !1);
          c.path.on("step", (b) => {
            var h, x;
            c.path.stats.netDistance >= 4 &&
              ((h = this.currentSelection) == null || h.key.highlight(!1),
              (x = b.item) == null || x.key.highlight(!0),
              (this.currentSelection = b.item));
          }),
            (this.currentSelection = i),
            i.key.highlight(!0);
          let l = i.subKeys,
            r = (this.element = document.createElement("div"));
          var B;
          r.id = "kmw-popup-keys";
          var d = r.style;
          d.fontFamily = n.fontFamily;
          let g = getComputedStyle(i);
          (d.fontSize = g.fontSize), (d.visibility = "hidden");
          var Q = l.length,
            F,
            y;
          for (
            F = Math.min(Math.ceil(Q / 9), 2),
              y = Math.ceil(Q / F),
              this.menuWidth = y * i.offsetWidth + y * Kr,
              d.width = this.menuWidth + "px",
              this.subkeys = [],
              B = 0;
            B < Q;
            B++
          ) {
            var u = !1;
            let b = Math.floor(B / y);
            F > 1 && b > 0 && (u = !0);
            let h = i.key.layer;
            (typeof h != "string" || h == "") && (h = n.layerId);
            let G = new vn(l[B], h).construct(n, i, u);
            this.subkeys.push(G.firstChild), r.appendChild(G);
          }
          (this.shim = document.createElement("div")),
            (this.shim.id = "kmw-popup-shim"),
            n.device.formFactor == p.FormFactor.Phone &&
              this.selectDefaultSubkey(i, r),
            n.element.appendChild(this.element),
            n.topContainer.appendChild(this.shim),
            this.reposition(n);
          let I = this.buildPopupRecognitionConfig(n);
          e({ type: "push", config: I });
        }
        buildPopupRecognitionConfig(t) {
          let e = this.element.getBoundingClientRect(),
            n = this.baseKey.getBoundingClientRect(),
            i = this.subkeys[0].style,
            c = -0.666 * Number.parseInt(i.height, 10),
            l = 3,
            r = n.bottom - e.bottom,
            B = new Fe(this.element, [c * l, c, -r < c ? -r : c]),
            d = {
              getBoundingClientRect() {
                let g = Number.MAX_SAFE_INTEGER;
                return new DOMRect(-g, -g, 2 * g, 2 * g);
              },
            };
          return {
            targetRoot: this.element,
            inputStartBounds: t.element,
            maxRoamingBounds: d,
            safeBounds: d,
            itemIdentifier: (g, Q) => {
              let F = B.getBoundingClientRect(),
                y = null,
                u = Number.MAX_VALUE,
                I = Number.MAX_VALUE;
              if (
                g.clientX < F.left ||
                g.clientX > F.right ||
                g.clientY < F.top ||
                g.clientY > F.bottom
              )
                return null;
              for (let b of this.subkeys) {
                let h = b.getBoundingClientRect(),
                  x = Number.MAX_VALUE,
                  G = Number.MAX_VALUE;
                if (
                  (h.left <= g.clientX && g.clientX < h.right
                    ? (x = 0)
                    : (x =
                        h.left >= g.clientX
                          ? h.left - g.clientX
                          : g.clientX - h.right),
                  h.top <= g.clientY && g.clientY < h.bottom
                    ? (G = 0)
                    : (G =
                        h.top >= g.clientY
                          ? h.top - g.clientY
                          : g.clientY - h.bottom),
                  x == 0 && G == 0)
                )
                  return b;
                (x < I || (x == I && G < u)) && ((I = x), (y = b), (u = G));
              }
              return y;
            },
          };
        }
        reposition(t) {
          let e = this.element,
            n = this.baseKey,
            i = t.topContainer,
            s = n.key.row.element,
            c = e.style,
            l = n.offsetParent ? n.offsetParent.offsetLeft : 0;
          var r = n.offsetLeft + l + 0.5 * (n.offsetWidth - e.offsetWidth),
            B = t.width - e.offsetWidth;
          r > B && (r = B), r < 0 && (r = 0), (c.left = r + "px");
          let d = i.getBoundingClientRect(),
            g = s.getBoundingClientRect();
          (c.top = g.top - d.top - e.offsetHeight - Ll + "px"),
            (c.visibility = "visible");
          let Q = t.isEmbedded,
            F = getComputedStyle(e),
            y = parseFloat(F.top),
            u = 0,
            I = 0;
          y < u && Q && ((I = u - y), (c.top = u + "px")),
            (this.callout = this.addCallout(
              n,
              I,
              t.element,
              t.topContainer,
              t.device.formFactor == "tablet"
            ));
        }
        addCallout(t, e, n, i, s) {
          e = e || 0;
          let c = getComputedStyle(this.element),
            l = Math.max(Number.parseInt(c.borderRadius), 0),
            r = t.getBoundingClientRect(),
            B = i.getBoundingClientRect(),
            d = Math.floor(
              Number.parseInt(c.top, 10) +
                Number.parseInt(c.height, 10) +
                Number.parseInt(c.paddingTop, 10) / 2 +
                Number.parseInt(c.paddingBottom, 10)
            ),
            g = Xl * (r.height - e),
            Q = Xl * r.height,
            F = g + Vl,
            y = F / (Q + Vl),
            u = r.bottom - B.top - d - 1,
            I = u < F ? u : F;
          if (I > 0) {
            let b = document.createElement("div"),
              h = b.style;
            (b.id = "kmw-popup-callout"),
              n.appendChild(b),
              (h.top = d + "px"),
              (h.borderTopWidth = I + "px");
            let x = zr * y,
              G = r.width * x,
              X = this.menuWidth - 2 * l,
              L = X < G ? X : G,
              J = r.left - B.left - (L - r.width) / 2,
              oe = Math.max(0, J + L - (B.right - l)),
              ae = Math.max(0, l - J);
            return (
              (h.left = r.left - B.left - (L - r.width) / 2 + ae + "px"),
              (h.borderLeftWidth = L / 2 - ae + "px"),
              (h.borderRightWidth = L / 2 - oe + "px"),
              b
            );
          } else return null;
        }
        selectDefaultSubkey(t, e) {
          var s;
          var n;
          let i = t.subKeys;
          for (let c = 0; c < i.length; c++) {
            let l = i[c],
              r = e.childNodes[c].firstChild;
            if (l.default) {
              n = r;
              break;
            } else if (!t.key || !t.key.spec) continue;
            l.elementID == t.key.spec.elementID && (n = r);
          }
          n &&
            ((s = this.currentSelection) == null || s.key.highlight(!1),
            (this.currentSelection = n),
            n.key.highlight(!0));
        }
        get hasModalVisualization() {
          return this.element.style.visibility == "visible";
        }
        buildCorrectiveLayout() {
          let t = this.element.getBoundingClientRect(),
            e = t.width / t.height;
          return {
            keys: this.subkeys.map((i) => {
              let s = i.getBoundingClientRect();
              return {
                keySpec: i.key.spec,
                centerX: (s.right - s.width / 2 - t.left) / t.width,
                centerY: (s.bottom - s.height / 2 - t.top) / t.height,
                width: s.width / t.width,
                height: s.height / t.height,
              };
            }),
            kbdScaleRatio: e,
          };
        }
        currentStageKeyDistribution() {
          let t = this.source.stageReports[this.source.stageReports.length - 1],
            e = this.source.stageReports[0],
            n = t.sources[0],
            i = n.currentSample,
            s = this.element.getBoundingClientRect(),
            c = { x: i.targetX / s.width, y: i.targetY / s.height };
          (c.x = c.x < 0 ? 0 : c.x > 1 ? 1 : c.x),
            (c.y = c.y < 0 ? 0 : c.y > 1 ? 1 : c.y);
          let l = ls(c, this.buildCorrectiveLayout()),
            r = l.get(i.item.key.spec),
            B =
              Math.min(
                n.path.stats.duration - e.sources[0].path.stats.duration,
                this.gestureParams.longpress.waitLength
              ) /
              (2 * this.gestureParams.longpress.waitLength),
            d =
              Math.min(
                n.path.stats.rawDistance,
                this.gestureParams.longpress.noiseTolerance * 4
              ) /
              (this.gestureParams.longpress.noiseTolerance * 8),
            g = Math.min(B * B, d * d),
            Q = r + g,
            F = new Map(),
            y = this.subkeys.find((u) => u.keyId == this.baseKey.keyId);
          return (
            y ? F.set(y.key.spec, Q) : F.set(this.baseKey.key.spec, Q),
            gt([l, F])
          );
        }
        cancel() {
          this.clear(), this.source.cancel();
        }
        clear() {
          this.element.parentNode &&
            this.element.parentNode.removeChild(this.element),
            this.shim.parentNode && this.shim.parentNode.removeChild(this.shim),
            this.callout &&
              this.callout.parentNode &&
              this.callout.parentNode.removeChild(this.callout);
        }
      };
    a(nn, "SubkeyPopup");
    var qe = class {
      constructor(t, e, n) {
        this.directlyEmitsKeys = !0;
        this.shouldRestore = !1;
        this.hasModalVisualization = !1;
        let i = t.stageReports[0];
        (this.originalLayer = i.sources[0].stateToken),
          (this.source = t),
          (this.completionCallback = () => {
            e.lockLayer(!1),
              this.shouldRestore &&
                ((e.layerId = this.originalLayer), e.updateState()),
              n == null || n();
          }),
          e.lockLayer(!0),
          t.on("stage", (s) => {
            let c = s.matchedId;
            c.includes("modipress") && c.includes("-end")
              ? this.clear()
              : c.includes("modipress") &&
                c.includes("-hold") &&
                (this.shouldRestore = !0);
          }),
          t.on("complete", () => this.cancel());
      }
      get isLocked() {
        return this.shouldRestore;
      }
      setLocked() {
        this.shouldRestore = !0;
      }
      get completed() {
        return this.completionCallback === null;
      }
      clear() {
        let t = this.completionCallback;
        (this.completionCallback = null), t == null || t();
      }
      cancel() {
        this.clear(), this.source.cancel();
      }
      currentStageKeyDistribution(t) {
        return null;
      }
    };
    a(qe, "Modipress");
    var Wn = class {
      constructor(t, e, n, i, s) {
        this.directlyEmitsKeys = !0;
        this.hasModalVisualization = !1;
        this.tapIndex = 0;
        (this.baseKey = n),
          (this.baseContextToken = i),
          (this.multitaps = [n.key.spec].concat(n.key.spec.multitap)),
          (this.sequence = t);
        let c = a((g) => {
          var F;
          (F = this.modipress) == null || F.clear();
          let Q = new qe(t, e, () => {
            this.modipress = e.activeModipress = null;
          });
          this.modipress = e.activeModipress = Q;
        }, "startModipress");
        this.originalLayer = e.layerId;
        let l = a(
            (g) => (this.tapIndex + g) % this.multitaps.length,
            "tapLookahead"
          ),
          r = a(() => {
            s == null ||
              s.setMultitapHint(this.multitaps[l(0)], this.multitaps[l(1)], e);
          }, "updatePreview");
        t.on("complete", () => {
          var g;
          (g = this.modipress) == null || g.cancel(), this.clear();
        });
        let B = a((g) => {
          var b;
          switch (g.matchedId) {
            case "modipress-hold":
              this.clear(), t.off("stage", B);
              return;
            case "modipress-end-multitap-transition":
            case "modipress-multitap-end":
            case "modipress-end":
            case "multitap-end":
            case "simple-tap":
              return;
            case "modipress-multitap-lock-transition":
              (b = this.modipress) == null || b.setLocked();
              return;
            case "modipress-multitap-start":
            case "multitap-start":
              break;
            default:
              throw new Error(
                `Unsupported gesture state encountered during multitap: ${g.matchedId}`
              );
          }
          this.tapIndex = l(1);
          let Q = this.multitaps[this.tapIndex];
          r();
          let F = e.keyEventFromSpec(Q);
          F.baseTranscriptionToken = this.baseContextToken;
          let y = g.sources[0].currentSample,
            u = this.baseKey.key.spec,
            I = e.getSimpleTapCorrectionDistances(y, u);
          if (y.stateToken != e.layerId && !g.matchedId.includes("modipress")) {
            let h = e.layerGroup.findNearestKey(
              V(C({}, y), { stateToken: e.layerId })
            );
            if (os(h.key.spec)) {
              let x = I.get(h.key.spec);
              x == null
                ? console.warn("Could not find current layer's key")
                : (I.delete(h.key.spec), I.set(y.item.key.spec, x));
            }
          }
          y.item &&
            os(y.item.key.spec) &&
            (F.keyDistribution = this.currentStageKeyDistribution(I)),
            F.kNextLayer || (F.kNextLayer = this.originalLayer),
            e.raiseKeyEvent(F, null),
            g.matchedId == "modipress-multitap-start" && c(g);
        }, "stageHandler");
        t.on("stage", B),
          t.stageReports[0].matchedId == "modipress-start" &&
            c(t.stageReports[0]),
          r();
      }
      currentStageKeyDistribution(t) {
        let e = gt(t),
          n = e.findIndex((r) => r.keySpec == this.baseKey.key.spec);
        if (n == -1)
          return (
            xi(this.baseKey) ||
              console.warn(
                "Could not find base key's probability for multitap correction"
              ),
            e
          );
        let i = e.splice(n, 1)[0].p,
          s = 0,
          c = [];
        for (let r = 0; r < this.multitaps.length; r++) {
          let B = this.multitaps[r],
            d = Math.abs(r - this.tapIndex) % this.multitaps.length,
            g =
              (r + this.multitaps.length - this.tapIndex) %
              this.multitaps.length,
            Q = d < g ? d : g,
            F = 1 / ((1 + Q) * (1 + Q));
          (s += F), c.push({ keySpec: B, p: F });
        }
        let l = i / s;
        return (
          c.forEach((r) => {
            r.p = l * r.p;
          }),
          e.concat(c).sort((r, B) => B.p - r.p)
        );
      }
      cancel() {
        this.clear(), this.sequence.cancel();
      }
      clear() {}
    };
    a(Wn, "Multitap");
    var Zl = v(A(), 1);
    var Si = 1.4142,
      Fc = a((o) => (Math.abs(o) < 1e-10 ? 0 : o), "coerceZeroes"),
      Ji = class extends Zl.default {
        constructor(e, n, i, s) {
          var Q;
          super();
          this.flickPreviews = new Map();
          this.orientation = "top";
          let c = e.key.spec,
            l = (this.flickEdgeLength = Math.max(i, s)),
            r = (this.div = document.createElement("div"));
          (r.className = r.id = "kmw-gesture-preview"),
            (r.style.pointerEvents = "none");
          let B = (this.previewImgContainer = document.createElement("div"));
          this.previewImgContainer.id = "kmw-preview-img-container";
          let d = (this.label = document.createElement("span"));
          if (
            ((d.className = "kmw-gesture-base-label kmw-key-text"),
            (d.id = "kmw-gesture-base-label"),
            B.appendChild(d),
            (d.textContent = e.key.label.textContent),
            this.div.appendChild(this.previewImgContainer),
            c.flick)
          ) {
            let F = c.flick || {};
            Object.keys(F).forEach((y) => {
              let u = document.createElement("div");
              (u.className = "kmw-flick-preview kmw-key-text"),
                (u.textContent = F[y].text);
              let I = u.style,
                b = lc.get(y),
                h = Fc(-Math.sin(b[0])),
                x = Fc(Math.cos(b[0]));
              (I.width = "100%"),
                (I.textAlign = "center"),
                h < 0
                  ? (I.right = -h * Si * l + "px")
                  : h > 0
                  ? (I.left = h * Si * l + "px")
                  : (I.left = "0px"),
                (I.height = "100%"),
                (I.lineHeight = "100%"),
                x < 0
                  ? (I.bottom = -x * Si * l + "px")
                  : x > 0
                  ? (I.top = x * Si * l + "px")
                  : (I.top = "0px"),
                this.flickPreviews.set(y, u),
                B.appendChild(u);
            });
          }
          let g = (this.hintLabel = document.createElement("div"));
          (g.className = "kmw-key-popup-icon"),
            n ||
              ((g.textContent =
                c == c.hintSrc
                  ? c.hint
                  : (Q = c.hintSrc) == null
                  ? void 0
                  : Q.text),
              (g.style.fontWeight = g.textContent == "\u2022" ? "bold" : "")),
            r.appendChild(g);
        }
        get element() {
          return this.div;
        }
        refreshLayout() {
          let e = getComputedStyle(this.div),
            n = Number.parseInt(e.height, 10);
          this.flickPreviews.forEach((i) => {
            i.style.lineHeight = i.style.height = `${n}px`;
          });
        }
        cancel() {
          var e;
          (e = this.onCancel) == null || e.call(this), (this.onCancel = null);
        }
        setCancellationHandler(e) {
          this.onCancel = e;
        }
        setMultitapHint(e, n, i) {
          var l, r;
          let s = $t(e.text, i),
            c = $t(n.text, i);
          (this.label.textContent = s),
            (this.hintLabel.textContent = c),
            (this.label.style.fontFamily =
              s != e.text
                ? "SpecialOSK"
                : (l = e.font) != null
                ? l
                : this.label.style.fontFamily),
            (this.hintLabel.style.fontFamily =
              c != n.text
                ? "SpecialOSK"
                : (r = n.font) != null
                ? r
                : this.hintLabel.style.fontFamily),
            this.emit("startFade"),
            this.clearFlick();
        }
        scrollFlickPreview(e, n) {
          this.clearHint();
          let i = this.previewImgContainer.style,
            s = this.flickEdgeLength * Si;
          (i.marginLeft = `${s * e}px`), (i.marginTop = `${s * n}px`);
          let c = Fc(n) < 0 ? "bottom" : "top";
          this.orientation != c &&
            ((this.orientation = c), this.emit("preferredOrientation", c));
        }
        clearFlick() {
          (this.previewImgContainer.style.marginTop = "0px"),
            (this.previewImgContainer.style.marginLeft = "0px"),
            this.previewImgContainer.classList.add("kmw-flick-clear");
        }
        clearHint() {
          this.hintLabel.classList.add("kmw-hint-clear");
        }
        clearAll() {
          this.clearFlick();
        }
      };
    a(Ji, "GesturePreviewHost");
    var Jl = it.TIER != "stable" || it.VERSION_ENVIRONMENT != "",
      Or = Jl ? 10 : 0,
      Qc = class extends Sl.default {
        constructor(e) {
          var B, d;
          super();
          this.gestureParams = C({}, rc);
          this.layerLocked = !1;
          this.layerIndex = 0;
          this.isStatic = !1;
          this._fixedWidthScaling = !1;
          this._fixedHeightScaling = !0;
          this._borderWidth = 0;
          this.stateKeys = { K_CAPS: !1, K_NUMLOCK: !1, K_SCROLL: !1 };
          this.activeGestures = [];
          this.activeModipress = null;
          this.repeatDelete = function () {
            this.deleting &&
              (this.modelKeyClick(this.deleteKey),
              (this.deleting = window.setTimeout(this.repeatDelete, 100)));
          }.bind(this);
          (this.config = e),
            (this.config.device = e.device || e.hostDevice),
            (this.config.isEmbedded = e.isEmbedded || !1),
            e.isStatic && (this.isStatic = e.isStatic),
            (this._fixedWidthScaling = this.device.touchable && !this.isStatic),
            (this._fixedHeightScaling =
              this.device.touchable && !this.isStatic);
          var n = document.createElement("div");
          this.config.styleSheetManager = e.styleSheetManager || new ge(n);
          let i;
          if (e.keyboard)
            (i = this.kbdLayout = e.keyboard.layout(e.device.formFactor)),
              (this.layoutKeyboardProperties = e.keyboardMetadata),
              (this.isRTL = e.keyboard.isRTL);
          else {
            let g = R.buildDefaultLayout(null, null, e.device.formFactor);
            (i = this.kbdLayout = st.polyfill(g, null, e.device.formFactor)),
              (this.layoutKeyboardProperties = null),
              (this.isRTL = !1);
          }
          "font" in i ? (this.fontFamily = i.font) : (this.fontFamily = "");
          let s = e.device.formFactor;
          (this.layoutKeyboard = e.keyboard),
            this.layoutKeyboard || (this.layoutKeyboard = new T(null)),
            (this.layerGroup = new Hn(this, this.layoutKeyboard, s)),
            this.layoutKeyboard.markLayoutCalibrated(s),
            n.appendChild(this.layerGroup.element),
            (this.kbdDiv = n),
            this.isStatic ||
              (this.gestureEngine = this.constructGestureEngine()),
            n.classList.add(e.device.formFactor, "kmw-osk-inner-frame");
          let c =
              (d =
                (B = this.layoutKeyboard) == null
                  ? void 0
                  : B.id.replace("Keyboard_", "")) != null
                ? d
                : "",
            l = c.indexOf("::");
          l != -1 && (c = c.substring(l + 2));
          let r = "kmw-keyboard-" + c;
          this.element.classList.add(r);
        }
        get layerId() {
          var e, n;
          return (n =
            (e = this.layerGroup) == null ? void 0 : e.activeLayerId) != null
            ? n
            : "default";
        }
        set layerId(e) {
          let n = e != this.layerId;
          if (this.layerGroup.layers[e])
            (this.layerGroup.activeLayerId = e),
              this.gestureEngine && (this.gestureEngine.stateToken = e);
          else
            throw new Error(
              `Keyboard ${this.layoutKeyboard.id} does not have a layer with id ${e}`
            );
          n &&
            !this.deferLayout &&
            (this.updateState(),
            this.layerGroup.refreshLayout(this.constructLayoutParams()));
        }
        get currentLayer() {
          var e;
          return (e = this.layerGroup) == null ? void 0 : e.activeLayer;
        }
        get lgKey() {
          var e, n;
          return (n = (e = this.currentLayer) == null ? void 0 : e.globeKey) ==
            null
            ? void 0
            : n.btn;
        }
        get hkKey() {
          var e, n;
          return (n = (e = this.currentLayer) == null ? void 0 : e.hideKey) ==
            null
            ? void 0
            : n.btn;
        }
        get spaceBar() {
          var e, n;
          return (n =
            (e = this.currentLayer) == null ? void 0 : e.spaceBarKey) == null
            ? void 0
            : n.btn;
        }
        constructGestureEngine() {
          let e = this.kbdLayout.layerMap.default.row.length,
            n = {
              targetRoot: this.element,
              mouseEventRoot: document.body,
              maxRoamingBounds: new Fe(this.topContainer, [NaN]),
              itemIdentifier: (r, B) => this.layerGroup.findNearestKey(r),
              recordingMode: Jl,
              historyLength: Or,
            };
          this.gestureParams.longpress.permitsFlick = (r) => {
            let B = r == null ? void 0 : r.key.spec.flick;
            return !B || !(B.n || B.nw || B.ne);
          };
          let i = new ut(oc(this.kbdLayout, this.gestureParams), n);
          i.stateToken = this.layerId;
          let s = {},
            c = a((r) => {
              for (let B of Object.keys(s)) {
                if (B == r) continue;
                s[B].source.terminate(!0);
              }
            }, "clearActiveGestures"),
            l = new Map();
          return (
            i.on("inputstart", (r) => {
              var Q;
              let B = this.highlightKey(r.currentSample.item, !0);
              B &&
                ((Q = this.gesturePreviewHost) == null || Q.cancel(),
                (this.gesturePreviewHost = B));
              let d = (s[r.identifier] = {
                  source: r,
                  roamingHighlightHandler: null,
                  key: r.currentSample.item,
                  previewHost: B,
                }),
                g = a(() => {
                  Se(0).then(() => {
                    let F = d.previewHost;
                    F &&
                      (F.cancel(),
                      (this.gesturePreviewHost = null),
                      (d.previewHost = null)),
                      d.key && (this.highlightKey(d.key, !1), (d.key = null));
                  });
                }, "endHighlighting");
              (d.roamingHighlightHandler = (F) => {
                var I;
                let y = F.item,
                  u = s[r.identifier].key;
                if (!this.kbdLayout.hasFlicks && y != u) {
                  this.highlightKey(u, !1),
                    (I = this.gesturePreviewHost) == null || I.cancel(),
                    (this.gesturePreviewHost = null),
                    (d.previewHost = null);
                  let b = this.highlightKey(y, !0);
                  b && ((this.gesturePreviewHost = b), (d.previewHost = b)),
                    (s[r.identifier].key = y);
                }
              }),
                r.path.on("invalidated", g),
                r.path.on("complete", g),
                r.path.on("step", d.roamingHighlightHandler);
            }),
            i.on("recognizedgesture", (r) => {
              var B;
              (B = this.activeModipress) == null || B.setLocked(),
                r.on("complete", () => {
                  var d;
                  for (let g of r.allSourceIds)
                    (d = s[g]) != null &&
                      d.previewHost &&
                      ((this.gesturePreviewHost = null),
                      s[g].previewHost.cancel()),
                      delete s[g];
                }),
                r.on("stage", (d, g) => {
                  let Q = r.allSourceIds
                      .map((X) => {
                        var L;
                        return (L = s[X]) == null ? void 0 : L.previewHost;
                      })
                      .find((X) => !!X),
                    F = a(() => {
                      Q && (Q.cancel(), (this.gesturePreviewHost = null));
                    }, "clearPreviewHost"),
                    y = l.get(r);
                  !y && Q && !d.matchedId.includes("flick") && Q.clearFlick();
                  let u;
                  for (let X of d.allSourceIds) {
                    let L = a((J) => {
                      J.key && (this.highlightKey(J.key, !1), (J.key = null)),
                        J.source.path.off("step", J.roamingHighlightHandler);
                    }, "clearRoaming");
                    if (((u = s[X]), u)) L(u);
                    else {
                      let J = X;
                      Se(0).then(() => {
                        let oe = s[J];
                        oe && L(oe);
                      });
                    }
                  }
                  let I = d.item,
                    b = d.sources[0],
                    h = b ? b.currentSample : null,
                    x = null;
                  if (I && !(y && y[0].directlyEmitsKeys)) {
                    let X,
                      L = this.getSimpleTapCorrectionDistances(
                        b.currentSample,
                        I.key.spec
                      );
                    y && (X = y[0].currentStageKeyDistribution(L)),
                      X || (X = gt(L));
                    let J =
                      !this.layerLocked &&
                      y &&
                      y[0] instanceof nn &&
                      y[0].shouldLockLayer;
                    try {
                      J && this.lockLayer(!0),
                        (x = this.modelKeyClick(d.item, h, X));
                    } finally {
                      J && this.lockLayer(!1);
                    }
                  }
                  if (
                    r.stageReports.length > 1 &&
                    d.matchedId != "modipress-end"
                  )
                    return;
                  let G = r.stageReports[0].item;
                  if (d.matchedId == "special-key-start")
                    I.key.spec.baseKeyID == "K_BKSP"
                      ? (F(), (y = [new tn(r, () => this.modelKeyClick(I, h))]))
                      : I.key.spec.baseKeyID == "K_LOPT" &&
                        (r.on("complete", () => {
                          I.key.highlight(!1), this.emit("globekey", I, !1);
                        }),
                        c(b.identifier),
                        I.key.highlight(!0));
                  else if (d.matchedId.indexOf("longpress") > -1)
                    F(),
                      (y = [
                        new nn(
                          r,
                          g,
                          this,
                          r.stageReports[0].sources[0].baseItem,
                          this.gestureParams
                        ),
                      ]);
                  else if (
                    (G == null ? void 0 : G.key.spec.multitap) &&
                    (d.matchedId == "initial-tap" ||
                      d.matchedId == "multitap" ||
                      d.matchedId == "modipress-start")
                  )
                    (u.previewHost = null),
                      r.on("complete", () => {
                        F();
                      }),
                      (y = [new Wn(r, this, G, x.contextToken, Q)]);
                  else if (d.matchedId.indexOf("flick") > -1)
                    y = [
                      new Ln(
                        r,
                        g,
                        this,
                        r.stageReports[0].sources[0].baseItem,
                        this.gestureParams,
                        Q
                      ),
                    ];
                  else if (
                    d.matchedId.includes("modipress") &&
                    d.matchedId.includes("-start")
                  )
                    if ((F(), this.layerLocked))
                      console.warn(
                        "Unexpected state:  modipress start attempt during an active modipress"
                      );
                    else {
                      y || (y = []);
                      let X = new qe(r, this, () => {
                        let L = y.indexOf(X);
                        L > -1 && y.splice(L, 1), (this.activeModipress = null);
                      });
                      y.push(X), (this.activeModipress = X);
                    }
                  else F();
                  y &&
                    ((this.activeGestures = this.activeGestures.concat(y)),
                    l.set(r, y),
                    r.on("complete", () => {
                      let X = this.activeGestures.filter((L) => y.includes(L));
                      (this.activeGestures = this.activeGestures.filter(
                        (L) => !y.includes(L)
                      )),
                        X.forEach((L) => {
                          L instanceof qe && L.cancel();
                        });
                    }));
                });
            }),
            i
          );
        }
        get element() {
          return this.kbdDiv;
        }
        get device() {
          return this.config.device;
        }
        get hostDevice() {
          return this.config.hostDevice;
        }
        get fontRootPath() {
          return this.config.pathConfig.fonts;
        }
        get styleSheetManager() {
          return this.config.styleSheetManager;
        }
        get topContainer() {
          return this.config.topContainer;
        }
        get isEmbedded() {
          return this.config.isEmbedded;
        }
        postInsert() {}
        get width() {
          return this._width;
        }
        get height() {
          return this._height;
        }
        get layoutWidth() {
          if (this.usesFixedWidthScaling) {
            let e = this.width;
            return (e -= this._borderWidth * 2), m.inPixels(e);
          } else return m.forScalar(1);
        }
        get layoutHeight() {
          if (this.usesFixedHeightScaling) {
            let e = this.height;
            return (e -= this._borderWidth * 2), m.inPixels(e);
          } else return m.forScalar(1);
        }
        get internalHeight() {
          return this.usesFixedHeightScaling
            ? m.inPixels(
                this.layoutHeight.val -
                  this._borderWidth * 2 -
                  this.layerGroup.verticalPadding
              )
            : m.forScalar(1);
        }
        get fontSize() {
          return (
            this._fontSize || (this._fontSize = new m("1em")), this._fontSize
          );
        }
        set fontSize(e) {
          (this._fontSize = e), (this.kbdDiv.style.fontSize = e.styleString);
        }
        get usesFixedWidthScaling() {
          return this._fixedWidthScaling;
        }
        set usesFixedWidthScaling(e) {
          this._fixedWidthScaling = e;
        }
        get usesFixedHeightScaling() {
          return this._fixedHeightScaling;
        }
        set usesFixedHeightScaling(e) {
          this._fixedHeightScaling = e;
        }
        get usesFixedPositioning() {
          let e = this.element;
          for (; e; ) {
            if (getComputedStyle(e).position == "fixed") return !0;
            e = e.offsetParent;
          }
          return !1;
        }
        setSize(e, n, i) {
          (this._width = e),
            (this._height = n),
            this.kbdDiv &&
              ((this.kbdDiv.style.width = e ? this._width + "px" : ""),
              (this.kbdDiv.style.height = n ? this._height + "px" : ""),
              !this.device.touchable &&
                n &&
                (this.fontSize = new m(this._height / 8 + "px")),
              i || this.refreshLayout());
        }
        getDefaultKeyObject() {
          let e = C({}, N.DEFAULT_KEY);
          return (
            N.polyfill(e, this.layoutKeyboard, this.kbdLayout, this.layerId), e
          );
        }
        getTouchCoordinatesOnKeyboard(e) {
          let n = { x: e.targetX, y: e.targetY };
          return (
            (n.x /= this.layerGroup.element.offsetWidth),
            (n.y /= this.kbdDiv.offsetHeight),
            n
          );
        }
        getSimpleTapCorrectionDistances(e, n) {
          let i = this.getTouchCoordinatesOnKeyboard(e),
            c = this.layerGroup.element.offsetWidth,
            l = this.kbdDiv.offsetHeight;
          if (!c || !l) return new Map();
          let r = c / l,
            B = fc(this.kbdLayout.getLayer(this.layerId), r);
          return ls(i, B);
        }
        keyTarget(e) {
          let n = e;
          try {
            if (n) {
              if (n.classList.contains("kmw-key")) return Xs(n);
              if (n.parentNode && n.parentNode.classList.contains("kmw-key"))
                return Xs(n.parentNode);
              if (n.firstChild && n.firstChild.classList.contains("kmw-key"))
                return Xs(n.firstChild);
            }
          } catch (i) {}
          return null;
        }
        cancelDelete() {
          this.deleting && window.clearTimeout(this.deleting),
            (this.deleting = 0);
        }
        modelKeyClick(e, n, i) {
          let s = this.initKeyEvent(e);
          return (
            n && (s.source = n),
            i && (s.keyDistribution = i),
            this.raiseKeyEvent(s, e)
          );
        }
        initKeyEvent(e) {
          this.highlightKey(e, !1);
          let n = e.key ? e.key.spec : null;
          return n ? this.keyEventFromSpec(n) : null;
        }
        keyEventFromSpec(e) {
          let n = this.layoutKeyboard.constructKeyEvent(
            e,
            this.device,
            this.stateKeys
          );
          return (n.srcKeyboard = this.layoutKeyboard), n;
        }
        _UpdateVKShiftStyle(e) {
          var l;
          var n;
          e || (e = this.layerId);
          let i = this.layerGroup.layers[e];
          if (
            !i ||
            (this.gestureEngine && (this.gestureEngine.stateToken = e),
            !(
              (l = this.layoutKeyboard) != null &&
              l.usesDesktopLayoutOnDevice(this.device)
            ))
          )
            return;
          let s = ["K_CAPS", "K_NUMLOCK", "K_SCROLL"],
            c = [i.capsKey, i.numKey, i.scrollKey];
          for (n = 0; n < c.length; n++)
            c[n] != null && c[n].setToggleState(this.stateKeys[s[n]]);
        }
        updateStateKeys(e) {
          for (let n in this.stateKeys) this.stateKeys[n] = e[n];
          this._UpdateVKShiftStyle();
        }
        highlightKey(e, n) {
          if (
            !e ||
            !e.key ||
            e.className == "" ||
            e.className.indexOf("kmw-key-row") >= 0
          )
            return;
          let i = e.key.allowsKeyTip();
          return (
            (n = this.activeGestures.find((c) => c.hasModalVisualization)
              ? !1
              : n),
            e.key.highlight(n),
            n && i
              ? this.gesturePreviewHost
                ? null
                : this.showGesturePreview(e)
              : null
          );
        }
        getKeyEmFontSize() {
          if (!this.fontSize) return new m("0px");
          if (this.device.formFactor == "desktop") {
            let e = 0.8;
            return this.fontSize.scaledBy(e);
          } else {
            let e = getComputedStyle(document.body).fontSize,
              n = new m(e),
              i = 1;
            if (!this.isStatic) {
              if (this.fontSize.absolute) return this.fontSize;
              i = this.fontSize.val;
            }
            return n.scaledBy(i);
          }
        }
        updateState() {
          !this.currentLayer ||
            ((this.nextLayer = this.layerId),
            this.currentLayer.nextlayer &&
              (this.nextLayer = this.currentLayer.nextlayer),
            (this.layerGroup.activeLayerId = this.layerId),
            this._UpdateVKShiftStyle());
        }
        refreshLayout() {
          if (this.deferLayout) return;
          let e = this.device;
          var n = 1;
          e.OS == p.OperatingSystem.iOS &&
            !this.isEmbedded &&
            (n = n / He(this.device.formFactor));
          let i = this.kbdDiv.style;
          this.usesFixedHeightScaling &&
            this.height &&
            (i.height = i.maxHeight = this.height + "px"),
            (i.fontSize = this.fontSize.scaledBy(n).styleString);
          let s = this.width && this.height,
            c = getComputedStyle(this.kbdDiv),
            l = getComputedStyle(this.layerGroup.element),
            r = c.height != "" && c.height != "auto",
            B = l.height != "" && l.height != "auto";
          if ((c.border && (this._borderWidth = new m(c.borderWidth).val), s))
            (this._computedWidth = this.width),
              (this._computedHeight = this.height);
          else if (r)
            (this._computedWidth = parseInt(c.width, 10)),
              (this._computedHeight = parseInt(c.height, 10));
          else if (B)
            (this._computedWidth = parseInt(l.width, 10)),
              (this._computedHeight = parseInt(l.height, 10));
          else return;
          this.layerGroup.refreshLayout(this.constructLayoutParams()),
            this.isStatic ||
              (this.gestureEngine.config.maxRoamingBounds.updatePadding([
                -0.333 * this.currentLayer.rowHeight,
              ]),
              (this.gestureParams.longpress.flickDistStart =
                0.24 * this.currentLayer.rowHeight),
              (this.gestureParams.flick.startDist =
                0.3 * this.currentLayer.rowHeight),
              (this.gestureParams.flick.dirLockDist =
                0.35 * this.currentLayer.rowHeight),
              (this.gestureParams.flick.triggerDist =
                0.75 * this.currentLayer.rowHeight),
              (this.gestureParams.longpress.flickDistFinal =
                0.75 * this.currentLayer.rowHeight));
        }
        constructLayoutParams() {
          var e, n;
          return {
            keyboardWidth: this._computedWidth - 2 * this._borderWidth,
            keyboardHeight:
              this._computedHeight -
              2 * this._borderWidth -
              this.layerGroup.verticalPadding,
            widthStyle: this.layoutWidth,
            heightStyle: this.internalHeight,
            baseEmFontSize: this.getKeyEmFontSize(),
            layoutFontSize: new m(this.layerGroup.element.style.fontSize),
            spacebarText:
              (n =
                (e = this.layoutKeyboardProperties) == null
                  ? void 0
                  : e.displayName) != null
                ? n
                : "(System keyboard)",
          };
        }
        computedAdjustedOskHeight(e) {
          if (!this.layerGroup) return e;
          let n = this.layerGroup.layers,
            i = 0;
          for (let l in n) {
            let B = n[l].rows.length,
              d = Math.floor(e / (B == 0 ? 1 : B)),
              g = B * d;
            g > i && (i = g);
          }
          return i + 0;
        }
        appendStyleSheet() {
          var e = this.layoutKeyboard,
            n = this.layoutKeyboardProperties;
          this.styleSheet &&
            this.styleSheet.parentNode &&
            this.styleSheet.parentNode.removeChild(this.styleSheet);
          var i = n == null ? void 0 : n.textFont,
            s = n == null ? void 0 : n.oskFont;
          this.styleSheetManager.addStyleSheetForFont(
            i,
            this.fontRootPath,
            this.device.OS
          ),
            this.styleSheetManager.addStyleSheetForFont(
              s,
              this.fontRootPath,
              this.device.OS
            ),
            this.config.specialFont &&
              this.styleSheetManager.addStyleSheetForFont(
                this.config.specialFont,
                "",
                this.device.OS
              );
          var c = this.addFontStyle(i, s);
          e != null &&
            typeof e.oskStyling == "string" &&
            (c = c + e.oskStyling),
            c &&
              ((this.styleSheet = Qt(c)),
              this.styleSheetManager.linkStylesheet(this.styleSheet)),
            this.styleSheetManager.allLoadedPromise().then(() => {
              this.layerGroup.resetPrecalcFontSizes(), this.refreshLayout();
            });
        }
        addFontStyle(e, n) {
          let i = "",
            s = a(
              (c) => c.family.replace(/\u0022/g, "").replace(/,/g, '","'),
              "family"
            );
          return (
            (e || n) &&
              (i = `
.kmw-key-text {
  font-family: "${s(n || e)}";
}

.kmw-suggestion-text {
  font-family: "${s(e || n)}";
}
`),
            i
          );
        }
        static buildDocumentationKeyboard(e, n, i, s, c, l) {
          if (!e) return null;
          var r = typeof s == "undefined" ? "desktop" : s,
            B = typeof c == "undefined" ? "default" : c,
            d = {};
          (d.formFactor = r),
            r != "desktop"
              ? ((d.OS = p.OperatingSystem.iOS), (d.touchable = !0))
              : ((d.OS = p.OperatingSystem.Windows), (d.touchable = !1));
          let g = e.layout(r),
            Q = new p("other", d.formFactor, d.OS, d.touchable),
            F = new Qc({
              keyboard: e,
              keyboardMetadata: n,
              hostDevice: Q,
              isStatic: !0,
              topContainer: null,
              pathConfig: i,
              styleSheetManager: null,
              specialFont: {
                family: "SpecialOSK",
                files: [``],
                path: "",
              },
            });
          (F.layerGroup.element.className = F.kbdDiv.className),
            F.layerGroup.element.classList.add(d.formFactor + "-static");
          let y = F.kbdDiv.childNodes[0],
            u = document.createElement("div");
          u.classList.add(d.OS.toLowerCase(), d.formFactor),
            g != null
              ? ((F.layerId = B),
                (F.layerGroup.activeLayerId = B),
                F.setSize(800, l),
                (F.fontSize = bl(Q, l, !1)),
                (u.style.fontSize = F.element.style.fontSize),
                F.refreshLayout(),
                (y.style.height = F.kbdDiv.style.height),
                (y.style.maxHeight = F.kbdDiv.style.maxHeight))
              : (y.innerHTML =
                  "<p style='color:#c40; font-size:0.5em;margin:10px;'>No " +
                  r +
                  " layout is defined for " +
                  e.name +
                  ".</p>"),
            (y.style.border = "1px solid #ccc"),
            F.updateState();
          let I = a(
              () =>
                Z(this, null, function* () {
                  if (document.contains(y))
                    try {
                      yield F.styleSheetManager.allLoadedPromise();
                      let h = F.styleSheet;
                      h && y.appendChild(h);
                      let x = [].concat(F.styleSheetManager.sheets);
                      for (let G of x)
                        G != h &&
                          (G.href ||
                            (F.styleSheetManager.unlink(G),
                            document.head.appendChild(G)));
                      F.refreshLayout(), (F.styleSheet = null), F.shutdown();
                    } finally {
                      b.disconnect();
                    }
                }),
              "detectAndHandleInsertion"
            ),
            b = new MutationObserver(I);
          b.observe(document.body, { childList: !0, subtree: !0 }), u.append(y);
          for (let h of ue.STYLESHEET_FILES) {
            let x = ``,
              G = F.styleSheetManager.linkExternalSheet(x, !0);
            G.parentNode.removeChild(G), u.appendChild(G);
          }
          return F.appendStyleSheet(), delete F._width, delete F._height, u;
        }
        onHide() {
          this.hkKey && this.highlightKey(this.hkKey, !1);
        }
        optionKey(e, n, i) {
          n.indexOf("K_LOPT") >= 0
            ? this.emit("globekey", e, i)
            : n.indexOf("K_ROPT") >= 0 && i && this.emit("hiderequested", e);
        }
        showGesturePreview(e) {
          let n = this.keytip,
            i = this.constructLayoutParams(),
            s = i.keyboardWidth * e.key.spec.proportionalWidth,
            c = i.keyboardHeight / this.currentLayer.rows.length,
            l = new Ji(e, this.device.formFactor == "phone", s, c);
          return (
            n == null ? e.key.setPreview(l) : n.show(e, !0, l),
            l.refreshLayout(),
            l
          );
        }
        createKeyTip() {
          if (this.keytip == null)
            if (this.device.formFactor == "phone") {
              let e = this.isEmbedded;
              this.keytip = new En(this, e);
            } else this.keytip = new Zi(this);
          this.keytip &&
            this.keytip.element &&
            this.element.appendChild(this.keytip.element);
        }
        createGlobeHint() {
          return this.config.embeddedGestureConfig.createGlobeHint
            ? this.config.embeddedGestureConfig.createGlobeHint(this)
            : null;
        }
        shutdown() {
          var e;
          this.styleSheet &&
            this.styleSheet.parentNode &&
            this.styleSheet.parentNode.removeChild(this.styleSheet),
            this.activeGestures.forEach((n) => n.cancel()),
            this.gestureEngine && this.gestureEngine.destroy(),
            this.deleting && window.clearTimeout(this.deleting),
            (e = this.keytip) == null || e.show(null, !1, null);
        }
        lockLayer(e) {
          this.layerLocked = e;
        }
        raiseKeyEvent(e, n) {
          if (e.kName == "K_LOPT" || e.kName == "K_ROPT")
            return this.optionKey(n, e.kName, !0), {};
          let i = {},
            s = a((c, l) => {
              var B, d;
              i.contextToken =
                (B = c == null ? void 0 : c.transcription) == null
                  ? void 0
                  : B.token;
              let r =
                (d = c == null ? void 0 : c.transcription) == null
                  ? void 0
                  : d.transform;
              i.alteredText = c && (!r || At(r));
            }, "keyEventCallback");
          return (
            this.layerLocked && (e.kNextLayer = this.layerId),
            this.emit("keyevent", e, s),
            i
          );
        }
      },
      ye = Qc;
    a(ye, "VisualKeyboard"), (ye.specialCharacters = re.specialCharacters);
    var Rl = v(A(), 1);
    var Me = class extends Rl.default {};
    a(Me, "Activator");
    var Ut = class extends Me {
      get enabled() {
        return !0;
      }
      set enabled(t) {}
      get activate() {
        return !0;
      }
      get conditionsMet() {
        return !0;
      }
    };
    a(Ut, "StaticActivator");
    var fn = class {
      constructor() {
        this.map = {};
      }
      promiseForTouchpoint(t) {
        return this.map[t] || (this.map[t] = new S()), this.map[t];
      }
      maintainTouches(t) {
        let e = Object.keys(this.map);
        for (let n = 0; n < t.length; n++) {
          let i = e.indexOf("" + t.item(n).identifier);
          i != -1 && e.splice(i, 1);
        }
        for (let n of e) this.map[n].resolve(), delete this.map[n];
      }
    };
    a(fn, "TouchEventPromiseMap");
    function Al(o) {
      let t = "";
      return o.isEmbedded && (t = ""), `${o.pathConfig.resources}/${t}`;
    }
    a(Al, "getResourcePath");
    var Zs = class extends Hl.default {
        constructor(e) {
          super();
          this.legacyEvents = new zt();
          this.needsLayout = !0;
          this.touchEventPromiseManager = new fn();
          this.activationListener = a((e) => {
            if (!this.mayDisable && !this.activationModel.enabled) {
              this.activationModel.off("activate", this.activationListener);
              try {
                this.activationModel.enabled = !0;
              } finally {
                this.activationModel.on("activate", this.activationListener);
              }
            }
            this.commonCheckAndDisplay();
          }, "activationListener");
          this.layerChangeHandler = a((e, n) => {
            var i, s;
            return (
              this.vkbd && this.vkbd._UpdateVKShiftStyle(n),
              ((this.vkbd && this.vkbd.layerId != n) || e.value != n) &&
                ((i = this.vkbd) == null ? void 0 : i.layerGroup.layers[n]) &&
                !((s = this.vkbd) != null && s.layerLocked) &&
                (this.vkbd.layerId = n),
              !1
            );
          }, "layerChangeHandler");
          this._Visible = !1;
          (this.config = e = C({}, e)),
            this.config.allowHideAnimations === void 0 &&
              (this.config.allowHideAnimations = !0),
            (this.config.device = e.device || e.hostDevice),
            (this.config.isEmbedded = e.isEmbedded || !1),
            (this.config.embeddedGestureConfig = e.embeddedGestureConfig || {}),
            this.config.activator.on("activate", this.activationListener),
            (this._Box = W("div")),
            (this.kbdStyleSheetManager = new ge(
              this._Box,
              this.config.doCacheBusting || !1
            )),
            (this.uiStyleSheetManager = new ge(this._Box)),
            (this.bannerView = new Fi()),
            this.bannerView.events.on("bannerchange", () =>
              this.refreshLayout()
            ),
            this._Box.appendChild(this.bannerView.element),
            (this._bannerController = new Sn(
              this.bannerView,
              this.hostDevice,
              this.config.predictionContextManager
            )),
            (this.keyboardView = this._GenerateKeyboardView(null, null)),
            this._Box.appendChild(this.keyboardView.element);
          let n = Al(this.config);
          for (let i of Zs.STYLESHEET_FILES) {
            let s = `${n}${i}`;
            this.uiStyleSheetManager.linkExternalSheet(s);
          }
          this.setBaseMouseEventListeners(),
            this.hostDevice.touchable && this.setBaseTouchEventListeners(),
            (this._Box.style.display = "none");
        }
        get keyCodes() {
          return U.keyCodes;
        }
        get modifierCodes() {
          return U.modifierCodes;
        }
        get modifierBitmasks() {
          return U.modifierBitmasks;
        }
        get stateBitmasks() {
          return U.stateBitmasks;
        }
        get configuration() {
          return this.config;
        }
        get bannerController() {
          return this._bannerController;
        }
        get hostDevice() {
          return this.config.hostDevice;
        }
        get fontRootPath() {
          return this.config.pathConfig.fonts;
        }
        get isEmbedded() {
          return this.config.isEmbedded;
        }
        setBaseMouseEventListeners() {
          (this._Box.onmouseenter = this._VKbdMouseEnter =
            (e) => {
              this.mouseEnterPromise && this.mouseEnterPromise.resolve(),
                (this.mouseEnterPromise = new S()),
                this.emit(
                  "pointerinteraction",
                  this.mouseEnterPromise.corePromise
                );
            }),
            (this._Box.onmouseleave = this._VKbdMouseLeave =
              (e) => {
                this.mouseEnterPromise.resolve(),
                  (this.mouseEnterPromise = null);
              });
        }
        removeBaseMouseEventListeners() {
          (this._Box.onmouseenter = null), (this._Box.onmouseleave = null);
        }
        setBaseTouchEventListeners() {
          let e = a(function (n) {
            return n.cancelable && n.preventDefault(), n.stopPropagation(), !1;
          }, "commonPrevention");
          (this._boxBaseTouchEventCancel = (n) => (
            this.touchEventPromiseManager.maintainTouches(n.touches), e(n)
          )),
            (this._boxBaseTouchStart = (n) => {
              for (let i = 0; i < n.changedTouches.length; i++) {
                let s = this.touchEventPromiseManager.promiseForTouchpoint(
                  n.changedTouches[i].identifier
                );
                this.emit("pointerinteraction", s.corePromise);
              }
              return (
                this.touchEventPromiseManager.maintainTouches(n.touches), e(n)
              );
            }),
            this._Box.addEventListener(
              "touchstart",
              this._boxBaseTouchStart,
              !1
            ),
            this._Box.addEventListener(
              "touchmove",
              this._boxBaseTouchEventCancel,
              !1
            ),
            this._Box.addEventListener(
              "touchend",
              this._boxBaseTouchEventCancel,
              !1
            ),
            this._Box.addEventListener(
              "touchcancel",
              this._boxBaseTouchEventCancel,
              !1
            );
        }
        removeBaseTouchEventListeners() {
          !this._boxBaseTouchEventCancel ||
            (this._Box.removeEventListener(
              "touchstart",
              this._boxBaseTouchStart,
              !1
            ),
            this._Box.removeEventListener(
              "touchmove",
              this._boxBaseTouchEventCancel,
              !1
            ),
            this._Box.removeEventListener(
              "touchend",
              this._boxBaseTouchEventCancel,
              !1
            ),
            this._Box.removeEventListener(
              "touchcancel",
              this._boxBaseTouchEventCancel,
              !1
            ),
            (this._boxBaseTouchEventCancel = null),
            (this._boxBaseTouchStart = null));
        }
        get targetDevice() {
          return this.config.device;
        }
        set targetDevice(e) {
          this.allowsDeviceChange(e)
            ? ((this.config.device = e), this.loadActiveKeyboard())
            : console.error(
                "May not change target device for this OSKView type."
              );
        }
        allowsDeviceChange(e) {
          return !1;
        }
        get activationModel() {
          return this.config.activator;
        }
        set activationModel(e) {
          if (!e)
            throw new Error(
              "The activation model may not be set to null or undefined!"
            );
          this.config.activator.off("activate", this.activationListener),
            e.on("activate", this.activationListener),
            (this.config.activator = e),
            this.commonCheckAndDisplay();
        }
        get mayDisable() {
          var e;
          return !(
            this.hostDevice.touchable ||
            ((e = this.activeKeyboard) != null && e.keyboard.isCJK)
          );
        }
        get displayIfActive() {
          return this.activationModel.enabled;
        }
        commonCheckAndDisplay() {
          this.activationModel.activate && this.activeKeyboard
            ? this.present()
            : this.startHide(!1);
        }
        get vkbd() {
          return this.keyboardView instanceof ye ? this.keyboardView : null;
        }
        get banner() {
          return this.bannerView;
        }
        get width() {
          return this._width;
        }
        get height() {
          return this._height;
        }
        get computedWidth() {
          return this.needsLayout && this.refreshLayout(), this._computedWidth;
        }
        get computedHeight() {
          return this.needsLayout && this.refreshLayout(), this._computedHeight;
        }
        get baseFontSize() {
          var e;
          return (
            ((e = this.parsedBaseFontSize) == null ? void 0 : e.styleString) ||
            ""
          );
        }
        get parsedBaseFontSize() {
          return (
            this._baseFontSize ||
              (this._baseFontSize = Zs.defaultFontSize(
                this.targetDevice,
                this.computedHeight,
                this.isEmbedded
              )),
            this._baseFontSize
          );
        }
        static defaultFontSize(e, n, i) {
          if (e.touchable) {
            let s = e.formFactor == "phone" ? 1.6 * (i ? 0.65 : 0.6) * 1.2 : 2;
            return m.special(s, "em");
          } else return n ? m.inPixels(n / 8) : void 0;
        }
        get activeKeyboard() {
          return this.keyboardData;
        }
        set activeKeyboard(e) {
          var n;
          (this.keyboardData = e),
            this.loadActiveKeyboard(),
            (n = this.keyboardData) != null &&
              n.keyboard.isCJK &&
              (this.activationModel.enabled = !0);
        }
        computeFrameHeight() {
          var e, n;
          return (
            (((e = this.headerView) == null ? void 0 : e.layoutHeight.val) ||
              0) +
            (((n = this.footerView) == null ? void 0 : n.layoutHeight.val) || 0)
          );
        }
        setSize(e, n, i) {
          let s = !1,
            c,
            l;
          (!e && e !== 0) ||
            (!n && n !== 0) ||
            (Number.isFinite(e) ? (c = m.inPixels(e)) : (c = new m(e)),
            Number.isFinite(n) ? (l = m.inPixels(n)) : (l = new m(n)),
            e &&
              n &&
              ((s = !this._width || !this._height),
              (s = s || c.styleString != this._width.styleString),
              (s = s || l.styleString != this._height.styleString),
              (this._width = c),
              (this._height = l)),
            (this.needsLayout = this.needsLayout || s),
            this.refreshLayoutIfNeeded(i));
        }
        setNeedsLayout() {
          this.needsLayout = !0;
        }
        batchLayoutAfter(e) {
          if (this.deferLayout) {
            e();
            return;
          }
          try {
            (this.deferLayout = !0),
              this.vkbd && (this.vkbd.deferLayout = !0),
              e();
          } finally {
            (this.deferLayout = !1),
              this.vkbd && (this.vkbd.deferLayout = !1),
              this.refreshLayout();
          }
        }
        refreshLayout(e) {
          var l, r;
          if (
            !this.keyboardView ||
            this.deferLayout ||
            !(this.width && this.height)
          )
            return;
          let i = this.width.absolute && this.height.absolute,
            s = getComputedStyle(this._Box),
            c = s.height != "" && s.height != "auto";
          if (i)
            (this._computedWidth = this.width.val),
              (this._computedHeight = this.height.val);
          else if (c) {
            let B = this._Box.parentElement;
            (this._computedWidth =
              this.width.val * (this.width.absolute ? 1 : B.offsetWidth)),
              (this._computedHeight =
                this.height.val * (this.height.absolute ? 1 : B.offsetHeight));
          } else {
            console.warn(
              "Unable to properly perform layout - specification uses a relative spec, thus relies upon insertion into the DOM for layout."
            );
            return;
          }
          if (
            ((this.needsLayout = !1),
            (this.banner.element.style.fontSize = this.baseFontSize),
            this.vkbd && (this.vkbd.fontSize = this.parsedBaseFontSize),
            e ||
              ((l = this.headerView) == null || l.refreshLayout(),
              (this.bannerView.width = this.computedWidth),
              this.bannerView.refreshLayout(),
              (r = this.footerView) == null || r.refreshLayout()),
            this.vkbd)
          ) {
            let B = this.computedHeight - this.computeFrameHeight();
            this.bannerView.height > 0 && (B -= this.bannerView.height + 5),
              this.vkbd.setSize(this.computedWidth, B, e);
            let d = this._Box.style;
            (d.width = d.maxWidth = this.computedWidth + "px"),
              (d.height = d.maxHeight = this.computedHeight + "px");
          } else {
            let B = this._Box.style;
            (B.width = "auto"),
              (B.height = "auto"),
              (B.maxWidth = B.maxHeight = "");
          }
        }
        refreshLayoutIfNeeded(e) {
          this.needsLayout && this.refreshLayout(e);
        }
        postKeyboardLoad() {
          (this._Visible = !1),
            this.postKeyboardAdjustments(),
            this.displayIfActive && this.present();
        }
        loadActiveKeyboard() {
          var s, c, l, r, B;
          this.setBoxStyling(), (this.needsLayout = !0);
          let e = this.keyboardView,
            n = this.kbdStyleSheetManager;
          this.kbdStyleSheetManager = new ge(
            this._Box,
            this.config.doCacheBusting || !1
          );
          let i = (this.keyboardView = this._GenerateKeyboardView(
            (s = this.keyboardData) == null ? void 0 : s.keyboard,
            (c = this.keyboardData) == null ? void 0 : c.metadata
          ));
          if (
            (this._Box.replaceChild(i.element, e.element),
            i.postInsert(),
            (B = this.bannerController) == null ||
              B.configureForKeyboard(
                (l = this.keyboardData) == null ? void 0 : l.keyboard,
                (r = this.keyboardData) == null ? void 0 : r.metadata
              ),
            e instanceof ye && e.shutdown(),
            n.unlinkAll(),
            this.banner.appendStyles(),
            this.vkbd)
          ) {
            this.vkbd.createKeyTip();
            let d = this.vkbd.createGlobeHint();
            d && this._Box.appendChild(d.element), this.vkbd.appendStyleSheet();
          }
          this.postKeyboardLoad();
        }
        _GenerateKeyboardView(e, n) {
          let i = this.targetDevice;
          return (
            (this._Box.className = ""),
            e == null && !i.touchable
              ? new It()
              : e && e.layout(i.formFactor)
              ? this._GenerateVisualKeyboard(e, n)
              : !e || !n
              ? this._GenerateVisualKeyboard(null, null)
              : new _t(e)
          );
        }
        _GenerateVisualKeyboard(e, n) {
          let i = this.targetDevice,
            s = Al(this.config),
            c = new ye({
              keyboard: e,
              keyboardMetadata: n,
              device: i,
              hostDevice: this.hostDevice,
              topContainer: this._Box,
              styleSheetManager: this.kbdStyleSheetManager,
              pathConfig: this.config.pathConfig,
              embeddedGestureConfig: this.config.embeddedGestureConfig,
              isEmbedded: this.config.isEmbedded,
              specialFont: {
                family: "SpecialOSK",
                files: [``],
                path: "",
              },
            });
          return (
            c.on("keyevent", (l, r) => this.emit("keyevent", l, r)),
            c.on("globekey", (l, r) => this.emit("globekey", l, r)),
            c.on("hiderequested", (l) => {
              this.doHide(!0), this.emit("hiderequested", l);
            }),
            (this._Box.className =
              i.formFactor + " " + i.OS.toLowerCase() + " kmw-osk-frame"),
            c
          );
        }
        present() {
          if (!!this.mayShow()) {
            if (
              (this.keyboardView.updateState(),
              (this._Box.style.display = "block"),
              this.refreshLayoutIfNeeded(),
              (this._Visible = !0),
              (this._Box.style.opacity = "1"),
              this._Box.style.visibility == "hidden")
            ) {
              let e = this;
              window.setTimeout(function () {
                e._Box.style.visibility = "visible";
              }, 0);
            }
            this.setDisplayPositioning();
          }
        }
        startHide(e) {
          if (!this.mayHide(e)) return;
          e &&
            (this.activationModel.enabled = !!(
              this.keyboardData.keyboard.isCJK || this.hostDevice.touchable
            ));
          let n = null;
          this._Box &&
          this.hostDevice.touchable &&
          !(this.keyboardView instanceof It) &&
          this.config.allowHideAnimations
            ? (n = this.useHideAnimation())
            : (n = Promise.resolve(!0));
          let i = this;
          n.then(function (s) {
            s && i.finalizeHide();
          }),
            this.doHide(e);
        }
        finalizeHide() {
          if (
            !(
              document.body.className.indexOf("osk-always-visible") >= 0 &&
              this.hostDevice.formFactor == "desktop"
            )
          ) {
            if (this._Box) {
              let e = this._Box.style;
              (e.display = "none"),
                (e.transition = ""),
                (e.opacity = "1"),
                (this._Visible = !1);
            }
            this.vkbd && this.vkbd.onHide();
          }
        }
        mayShow() {
          return !(
            !this.activationModel.conditionsMet ||
            !this.keyboardView ||
            this.keyboardView instanceof It ||
            !this.activationModel.enabled ||
            !this._Box
          );
        }
        mayHide(e) {
          return !(
            (this.activationModel.conditionsMet && !this.mayDisable) ||
            this.activationModel instanceof Ut ||
            (!e &&
              this.hostDevice.formFactor == "desktop" &&
              document.body.className.indexOf("osk-always-visible") >= 0)
          );
        }
        useHideAnimation() {
          let e = this._Box.style,
            n = this;
          return new Promise(function (i) {
            let s = a(function () {
                return (
                  n._Box.removeEventListener("transitionend", s, !1),
                  n._Box.removeEventListener("webkitTransitionEnd", s, !1),
                  n._Box.removeEventListener("transitioncancel", s, !1),
                  n._Box.removeEventListener("webkitTransitionCancel", s, !1),
                  n._animatedHideTimeout != 0 &&
                    window.clearTimeout(n._animatedHideTimeout),
                  (n._animatedHideTimeout = 0),
                  n._Visible && n.activationModel.conditionsMet
                    ? ((e.transition = ""), (e.opacity = "1"), i(!1), !1)
                    : (i(!0), !0)
                );
              }, "cleanup"),
              c = a(function () {
                n._Box.removeEventListener("transitionrun", c, !1),
                  n._Box.removeEventListener("webkitTransitionRun", c, !1),
                  n._Box.addEventListener("transitionend", s, !1),
                  n._Box.addEventListener("webkitTransitionEnd", s, !1),
                  n._Box.addEventListener("transitioncancel", s, !1),
                  n._Box.addEventListener("webkitTransitionCancel", s, !1);
              }, "startup");
            n._Box.addEventListener("transitionrun", c, !1),
              n._Box.addEventListener("webkitTransitionRun", c, !1),
              (e.transition = "opacity 0.5s linear 0"),
              (e.opacity = "0"),
              (n._animatedHideTimeout = window.setTimeout(s, 200));
          });
        }
        hideNow() {
          if (!this.mayHide(!1) || !this._Box) return;
          this._animatedHideTimeout &&
            (window.clearTimeout(this._animatedHideTimeout),
            (this._animatedHideTimeout = 0));
          let e = this._Box.style;
          (e.transition = ""), (e.opacity = "0"), this.finalizeHide();
        }
        shutdown() {
          this.removeBaseMouseEventListeners(),
            this.removeBaseTouchEventListeners();
          var e = this._Box;
          e.parentElement && e.parentElement.removeChild(e),
            this.kbdStyleSheetManager.unlinkAll(),
            this.uiStyleSheetManager.unlinkAll(),
            this.bannerController.shutdown();
        }
        getRect() {
          var e = {};
          return (
            (e.left = e.left = $(this._Box)),
            (e.top = e.top = ee(this._Box)),
            (e.width = this.computedWidth),
            (e.height = this.computedHeight),
            e
          );
        }
        isEnabled() {
          return this.displayIfActive;
        }
        isVisible() {
          return this._Visible;
        }
        hide() {
          (this.activationModel.enabled = !1), this.startHide(!0);
        }
        show(e) {
          arguments.length > 0
            ? (this.activationModel.enabled = e)
            : this.activationModel.conditionsMet &&
              (this.activationModel.enabled = !this.activationModel.enabled);
        }
        doShow(e) {
          this.legacyEvents.callEvent("show", e);
        }
        doHide(e) {
          let n = { HiddenByUser: e };
          this.legacyEvents.callEvent("hide", n);
        }
        addEventListener(e, n) {
          this.legacyEvents.addEventListener(e, n);
        }
        removeEventListener(e, n) {
          this.legacyEvents.removeEventListener(e, n);
        }
      },
      ue = Zs;
    a(ue, "OSKView"), (ue.STYLESHEET_FILES = ["", ""]);
    var El = v(A(), 1);
    var yc = class extends El.default {
        constructor(e) {
          super();
          this.mouseCancellingHandler = a(function (e) {
            return e.preventDefault(), (e.cancelBubble = !0), !1;
          }, "mouseCancellingHandler");
          (this._element = this.buildTitleBar()),
            (this.helpEnabled = !1),
            (this.configEnabled = !1),
            e && (this.element.onmousedown = e.mouseDownHandler);
        }
        get helpEnabled() {
          return this._helpEnabled;
        }
        set helpEnabled(e) {
          (this._helpEnabled = e),
            (this._helpButton.style.display = e ? "inline" : "none");
        }
        get configEnabled() {
          return this._configEnabled;
        }
        set configEnabled(e) {
          (this._configEnabled = e),
            (this._configButton.style.display = e ? "inline" : "none");
        }
        get layoutHeight() {
          return yc.DISPLAY_HEIGHT;
        }
        get element() {
          return this._element;
        }
        setPinCJKOffset() {
          this._unpinButton.style.left = "15px";
        }
        showPin(e) {
          this._unpinButton.style.display = e ? "block" : "none";
        }
        setTitle(e) {
          this._caption.innerHTML = e;
        }
        setTitleFromKeyboard(e) {
          let n =
            "<span style='font-weight:bold'>" +
            (e == null ? void 0 : e.name) +
            "</span>";
          this._caption.innerHTML = n;
        }
        buildTitleBar() {
          let e = W("div");
          (e.id = "keymanweb_title_bar"), (e.className = "kmw-title-bar");
          var n = (this._caption = W("span"));
          (n.className = "kmw-title-bar-caption"),
            (n.style.color = "#fff"),
            e.appendChild(n);
          var i = (this._closeButton = this.buildCloseButton());
          return (
            (this._closeButton.onclick = () => (this.emit("close"), !1)),
            e.appendChild(i),
            (i = this._helpButton = this.buildHelpButton()),
            (this._helpButton.onclick = () => (this.emit("help"), !1)),
            e.appendChild(i),
            (i = this._configButton = this.buildConfigButton()),
            (this._configButton.onclick = () => (this.emit("config"), !1)),
            e.appendChild(i),
            (i = this._unpinButton = this.buildUnpinButton()),
            (this._unpinButton.onclick = () => (this.emit("unpin"), !1)),
            e.appendChild(i),
            e
          );
        }
        buildCloseButton() {
          var e = W("div");
          return (
            (e.id = "kmw-close-button"),
            (e.className = "kmw-title-bar-image"),
            (e.onmousedown = this.mouseCancellingHandler),
            e
          );
        }
        buildHelpButton() {
          let e = W("div");
          return (
            (e.id = "kmw-help-image"),
            (e.className = "kmw-title-bar-image"),
            (e.title = "KeymanWeb Help"),
            (e.onmousedown = this.mouseCancellingHandler),
            e
          );
        }
        buildConfigButton() {
          let e = W("div");
          return (
            (e.id = "kmw-config-image"),
            (e.className = "kmw-title-bar-image"),
            (e.title = "KeymanWeb Configuration Options"),
            (e.onmousedown = this.mouseCancellingHandler),
            e
          );
        }
        buildUnpinButton() {
          let e = W("div");
          return (
            (e.id = "kmw-pin-image"),
            (e.className = "kmw-title-bar-image"),
            (e.title =
              "Pin the On Screen Keyboard to its default location on the active text box"),
            (e.onmousedown = this.mouseCancellingHandler),
            e
          );
        }
        refreshLayout() {}
      },
      ht = yc;
    a(ht, "TitleBar"), (ht.DISPLAY_HEIGHT = m.inPixels(20));
    var vl = v(A(), 1);
    var uc = class extends vl.default {
        constructor(e) {
          super();
          this.mouseCancellingHandler = a(function (e) {
            return e.preventDefault(), (e.cancelBubble = !0), !1;
          }, "mouseCancellingHandler");
          (this._element = this.buildResizeBar()),
            e && (this._resizeHandle.onmousedown = e.mouseDownHandler);
        }
        get layoutHeight() {
          return uc.DISPLAY_HEIGHT;
        }
        get element() {
          return this._element;
        }
        get handle() {
          return this._resizeHandle;
        }
        allowResizing(e) {
          this._resizeHandle.style.display = e ? "block" : "none";
        }
        buildResizeBar() {
          var e = W("div");
          (e.className = "kmw-footer"),
            (e.onmousedown = this.mouseCancellingHandler);
          var n = W("div");
          (n.className = "kmw-footer-caption"),
            (n.innerHTML =
              '<a href="https://keyman.com/developer/keymanweb/">KeymanWeb</a>'),
            (n.id = "keymanweb-osk-footer-caption"),
            n.addEventListener(
              "dblclick",
              (s) => (this.emit("showbuild"), !1),
              !1
            ),
            e.appendChild(n);
          var i = W("div");
          return (
            (i.className = "kmw-footer-resize"),
            e.appendChild(i),
            (this._resizeHandle = i),
            e
          );
        }
        refreshLayout() {}
      },
      sn = uc;
    a(sn, "ResizeBar"), (sn.DISPLAY_HEIGHT = m.inPixels(16));
    var $e = class {
      constructor(t, e, n) {
        (this.x = t), (this.y = e), n && (this.source = n);
      }
      static fromEvent(t) {
        let e;
        if (
          ((window.TouchEvent && t instanceof TouchEvent) || t.changedTouches
            ? (e = t.changedTouches[0])
            : (e = t),
          e.pageX)
        )
          return new $e(e.pageX, e.pageY, t);
        if (e.clientX) {
          let n = e.clientX + document.body.scrollLeft,
            i = e.clientY + document.body.scrollTop;
          return new $e(n, i, t);
        } else return new $e(null, null, t);
      }
    };
    a($e, "InputEventCoordinate");
    var Ss = class {
      constructor(t) {
        (this._VPreviousMouseMove = document.onmousemove),
          (this._VPreviousMouseUp = document.onmouseup),
          (this._VPreviousCursor = document.body.style.cursor),
          (this._VPreviousMouseButton =
            typeof t.which == "undefined" ? t.button : t.which);
      }
      restore() {
        (document.onmousemove = this._VPreviousMouseMove),
          (document.onmouseup = this._VPreviousMouseUp),
          document.body.style.cursor &&
            (document.body.style.cursor = this._VPreviousCursor);
      }
      matchesCausingClick(t) {
        return (
          this._VPreviousMouseButton ==
          (typeof t.which == "undefined" ? t.button : t.which)
        );
      }
    };
    a(Ss, "MouseStartSnapshot");
    var cn = class {
      constructor(t) {
        (this.startHandler = this._VMoveMouseDown.bind(this)),
          (this.cursorType = t);
      }
      get enabled() {
        return this._enabled;
      }
      set enabled(t) {
        this._enabled = t;
      }
      get isActive() {
        return !!this._mouseStartSnapshot;
      }
      get mouseDownHandler() {
        return this.startHandler;
      }
      _VMoveMouseDown(t) {
        return !t || !this._enabled
          ? !0
          : (this._mouseStartSnapshot || (this._mouseStartSnapshot = new Ss(t)),
            (this._startCoord = $e.fromEvent(t)),
            (document.onmousemove = this._VMoveMouseMove.bind(this)),
            (document.onmouseup = this._VMoveMouseUp.bind(this)),
            document.body.style.cursor &&
              (document.body.style.cursor = this.cursorType),
            t.preventDefault(),
            (t.cancelBubble = !0),
            this.onDragStart(),
            !1);
      }
      _VMoveMouseMove(t) {
        if (!t || !this.enabled) return !0;
        if (
          (t.preventDefault(),
          (t.cancelBubble = !0),
          this._mouseStartSnapshot.matchesCausingClick(t))
        ) {
          let e = $e.fromEvent(t),
            n = e.x - this._startCoord.x,
            i = e.y - this._startCoord.y;
          return this.onDragMove(n, i), !1;
        } else return this._VMoveMouseUp(t);
      }
      _VMoveMouseUp(t) {
        return t
          ? (this._mouseStartSnapshot.restore(),
            (this._mouseStartSnapshot = null),
            t.preventDefault(),
            (t.cancelBubble = !0),
            this.onDragRelease(),
            !1)
          : !0;
      }
    };
    a(cn, "MouseDragOperation");
    var et = class extends Me {
      constructor() {
        super(...arguments);
        this._enabled = !0;
        this.actValue = null;
      }
      get activate() {
        return this._enabled && !!this.actValue;
      }
      checkState(e) {
        this.activate != e && this.emit("activate", this.activate);
      }
      get enabled() {
        return this._enabled;
      }
      set enabled(e) {
        let n = this.activate;
        (this._enabled = e), this.checkState(n);
      }
      get activationTrigger() {
        return this.actValue;
      }
      set activationTrigger(e) {
        let n = this.activate,
          i = this.actValue;
        (this.actValue = e),
          this.checkState(n),
          i != e && this.emit("triggerchange", e);
      }
      get conditionsMet() {
        return !!this.activationTrigger;
      }
    };
    a(et, "TwoStateActivator");
    var Ri = class extends ce {
      constructor() {
        super("KeymanWeb_OnScreenKeyboard");
      }
      loadWithDefaults(t) {
        return C(C({}, t), this.load());
      }
      load() {
        let t = super.load((e, n) => {
          switch (n) {
            case "version":
              return e;
            default:
              return Number.parseInt(e, 10);
          }
        });
        return t.width || delete t.width, t.height || delete t.height, t;
      }
      save(t) {
        super.save(t);
      }
    };
    a(Ri, "FloatingOSKCookieSerializer");
    var Ye = class extends ue {
      constructor(e) {
        e.activator = e.activator || new et();
        super(e);
        this.userPositioned = !1;
        this.specifiedPosition = !1;
        this.noDrag = !1;
        this.layoutSerializer = new Ri();
        this.restorePosition = function (e) {
          let n = this._Visible,
            i = new S();
          this.emit("dragmove", i.corePromise),
            this.loadPersistedLayout(),
            (this.userPositioned = !1),
            e || (delete this.dfltX, delete this.dfltY),
            this.savePersistedLayout(),
            n && this.present(),
            this.titleBar.showPin(!1),
            i.resolve(),
            this.doResizeMove();
        }.bind(this);
        this.typedActivationModel.on("triggerchange", () =>
          this.setDisplayPositioning()
        ),
          document.body.appendChild(this._Box),
          (this.titleBar = new ht(this.titleDragHandler)),
          this.titleBar.on("help", () => {
            this.legacyEvents.callEvent("helpclick", {});
          }),
          this.titleBar.on("config", () => {
            this.legacyEvents.callEvent("configclick", {});
          }),
          this.titleBar.on("close", () => this.startHide(!0)),
          this.titleBar.on("unpin", () => this.restorePosition(!0)),
          (this.resizeBar = new sn(this.resizeDragHandler)),
          this.resizeBar.on("showbuild", () => this.emit("showbuild")),
          (this.headerView = this.titleBar),
          this._Box.insertBefore(this.headerView.element, this._Box.firstChild);
        let n = a((c) => {
            let l = this.headerView;
            if (l && l instanceof ht)
              switch (c) {
                case "configclick":
                  l.configEnabled =
                    this.legacyEvents.listenerCount("configclick") > 0;
                  break;
                case "helpclick":
                  l.helpEnabled =
                    this.legacyEvents.listenerCount("helpclick") > 0;
                  break;
                default:
                  return;
              }
          }, "onListenedEvent"),
          i = new Dt(this),
          s = new Dt(this.legacyEvents);
        for (let c of [i, s])
          c.on("listeneradded", n), c.on("listenerremoved", n);
        this.activeKeyboard && this.postKeyboardAdjustments(),
          this.loadPersistedLayout();
      }
      get typedActivationModel() {
        return this.activationModel;
      }
      _Unload() {
        (this.keyboardView = null),
          (this.bannerView = null),
          (this._Box = null);
      }
      setBoxStyling() {
        let e = this._Box.style;
        (e.zIndex = "9999"),
          (e.display = "none"),
          (e.width = "auto"),
          (e.position = "absolute");
      }
      postKeyboardAdjustments() {
        !this.titleBar ||
          (this.enableMoveResizeHandlers(),
          this.activeKeyboard &&
            this.titleBar.setTitleFromKeyboard(this.activeKeyboard.keyboard),
          this.vkbd
            ? ((this.footerView = this.resizeBar),
              this._Box.appendChild(this.footerView.element))
            : (this.footerView &&
                this._Box.removeChild(this.footerView.element),
              (this.footerView = null)),
          this.loadPersistedLayout(),
          this.setNeedsLayout());
      }
      isEnabled() {
        return this.displayIfActive;
      }
      isVisible() {
        return this._Visible;
      }
      savePersistedLayout() {
        var e = this.getPos();
        let n = {
          visible: this.displayIfActive ? 1 : 0,
          userSet: this.userPositioned ? 1 : 0,
          left: e.left,
          top: e.top,
          _version: k.CURRENT.toString(),
        };
        this.vkbd && ((n.width = this.width.val), (n.height = this.height.val)),
          this.layoutSerializer.save(n);
      }
      loadPersistedLayout() {
        let e = this.layoutSerializer.loadWithDefaults({
          visible: 1,
          userSet: 0,
          left: -1,
          top: -1,
          _version: void 0,
          width: 0.3 * screen.width,
          height: 0.15 * screen.height,
        });
        (this.activationModel.enabled = e.visible == 1),
          (this.userPositioned = e.userSet == 1),
          (this.x = e.left),
          (this.y = e.top);
        let n = e._version,
          i = n === void 0,
          s = e.width,
          c = e.height;
        s < 0.2 * screen.width && (s = 0.2 * screen.width),
          c < 0.1 * screen.height && (c = 0.1 * screen.height),
          s > 0.9 * screen.width && (s = 0.9 * screen.width),
          c > 0.5 * screen.height && (c = 0.5 * screen.height),
          (i || !n) &&
            (this.headerView &&
              this.headerView.layoutHeight.absolute &&
              (c += this.headerView.layoutHeight.val),
            this.footerView &&
              this.footerView.layoutHeight.absolute &&
              (c += this.footerView.layoutHeight.val)),
          this.setSize(s, c),
          (this.x == -1 || this.y == -1 || !this._Box) &&
            (this.userPositioned = !1),
          this.x < window.pageXOffset - 0.8 * s &&
            (this.x = window.pageXOffset - 0.8 * s),
          this.y < 0 &&
            ((this.x = -1), (this.y = -1), (this.userPositioned = !1)),
          this.userPositioned &&
            this._Box &&
            this.setPos({ left: this.x, top: this.y });
      }
      getDefaultKeyboardHeight() {
        if (this.configuration.heightOverride)
          return this.configuration.heightOverride();
        var e = Math.floor(Math.min(screen.availHeight, screen.availWidth) / 2),
          n = e;
        if (this.targetDevice.formFactor == "phone") {
          var i = Math.min(screen.height, screen.width),
            s = Math.max(screen.height, screen.width);
          xe()
            ? (n = (n * (s / i)) / 1.6)
            : (n = Math.floor(
                Math.max(screen.availHeight, screen.availWidth) / 3
              ));
        }
        return (
          this.targetDevice.OS == p.OperatingSystem.iOS &&
            (n = n / He(this.targetDevice.formFactor)),
          n
        );
      }
      getDefaultWidth() {
        if (this.configuration.widthOverride)
          return this.configuration.widthOverride();
        var e;
        if (this.targetDevice.OS == p.OperatingSystem.iOS)
          e = window.innerWidth;
        else if (this.targetDevice.OS == p.OperatingSystem.Android)
          try {
            e = document.documentElement.clientWidth;
          } catch (n) {
            e = screen.availWidth;
          }
        else e = screen.width;
        return e;
      }
      doResizeMove(e) {
        this.legacyEvents.callEvent("resizemove", e);
      }
      setRect(e) {
        if (!(this._Box == null || this.targetDevice.formFactor != "desktop")) {
          var n = this._Box,
            i = n.style;
          if (
            ("left" in e &&
              ((this.x = e.left - $(n) + n.offsetLeft),
              (i.left = this.x + "px"),
              (this.dfltX = i.left)),
            "top" in e &&
              ((this.y = e.top - ee(n) + n.offsetTop),
              (i.top = this.y + "px"),
              (this.dfltY = i.top)),
            this.vkbd != null)
          ) {
            var s = this.vkbd.kbdDiv,
              c = s.style;
            if ("width" in e) {
              var l = e.width - (n.offsetWidth - s.offsetWidth);
              l < 0.2 * screen.width && (l = 0.2 * screen.width),
                l > 0.9 * screen.width && (l = 0.9 * screen.width),
                (c.width = l + "px"),
                this.setSize(l, this.computedHeight, !0);
            }
            if ("height" in e) {
              var r = e.height - (n.offsetHeight - s.offsetHeight);
              r < 0.1 * screen.height && (r = 0.1 * screen.height),
                r > 0.5 * screen.height && (r = 0.5 * screen.height),
                (c.height = r + "px"),
                (c.fontSize = r / 8 + "px"),
                this.setSize(this.computedWidth, r, !0);
            }
            "nosize" in e && (this.resizingEnabled = !e.nosize);
          }
          "nomove" in e &&
            ((this.noDrag = e.nomove), (this.movementEnabled = !this.noDrag)),
            this.savePersistedLayout();
        }
      }
      getPos() {
        var e = this._Box,
          n = {
            left: this._Visible ? e.offsetLeft : this.x,
            top: this._Visible ? e.offsetTop : this.y,
          };
        return n;
      }
      setPos(e) {
        if (typeof this._Box != "undefined") {
          if (this.userPositioned) {
            var n = e.left,
              i = e.top;
            typeof n != "undefined" &&
              (n < -0.8 * this._Box.offsetWidth &&
                (n = -0.8 * this._Box.offsetWidth),
              this.userPositioned &&
                ((this._Box.style.left = n + "px"), (this.x = n))),
              typeof i != "undefined" &&
                (i < 0 && (i = 0),
                this.userPositioned &&
                  ((this._Box.style.top = i + "px"), (this.y = i)));
          }
          this.titleBar.showPin(this.userPositioned);
        }
      }
      setDisplayPositioning() {
        var e = this._Box.style;
        if (
          ((e.position = "absolute"),
          this.activationModel.activate && (e.display = "block"),
          (e.left = "0px"),
          this.specifiedPosition || this.userPositioned)
        )
          (e.left = this.x + "px"), (e.top = this.y + "px");
        else {
          let n = this.typedActivationModel.activationTrigger || null;
          this.dfltX
            ? (e.left = this.dfltX)
            : typeof n != "undefined" && n != null && (e.left = $(n) + "px"),
            this.dfltY
              ? (e.top = this.dfltY)
              : typeof n != "undefined" &&
                n != null &&
                (e.top = ee(n) + n.offsetHeight + "px");
        }
        this.specifiedPosition = !1;
      }
      presentAtPosition(e, n) {
        !this.mayShow() ||
          ((this.specifiedPosition = e >= 0 || n >= 0),
          this.specifiedPosition && ((this.x = e), (this.y = n)),
          (this.specifiedPosition =
            this.specifiedPosition || this.userPositioned),
          this.present());
      }
      present() {
        if (!!this.mayShow()) {
          this.titleBar.showPin(this.userPositioned), super.present();
          var e = {};
          (e.x = this._Box.offsetLeft),
            (e.y = this._Box.offsetTop),
            (e.userLocated = this.userPositioned),
            this.doShow(e);
        }
      }
      startHide(e) {
        super.startHide(e), e && this.savePersistedLayout();
      }
      show(e) {
        e !== void 0 ? super.show(e) : super.show(), this.savePersistedLayout();
      }
      userLocated() {
        return this.userPositioned;
      }
      get movementEnabled() {
        return this.titleDragHandler.enabled;
      }
      set movementEnabled(e) {
        (this.titleDragHandler.enabled = e),
          this.titleBar.showPin(e && this.userPositioned);
      }
      get resizingEnabled() {
        return this.resizeDragHandler.enabled;
      }
      set resizingEnabled(e) {
        (this.resizeDragHandler.enabled = e), this.resizeBar.allowResizing(e);
      }
      get isBeingMoved() {
        return this.titleDragHandler.isActive;
      }
      get isBeingResized() {
        return this.resizeDragHandler.isActive;
      }
      enableMoveResizeHandlers() {
        (this.titleDragHandler.enabled = !this.noDrag),
          (this.resizeDragHandler.enabled = !0);
      }
      get titleDragHandler() {
        let e = this;
        return this._moveHandler
          ? this._moveHandler
          : ((this._moveHandler = new (class extends cn {
              constructor() {
                super("move");
              }
              onDragStart() {
                (this.startX = e._Box.offsetLeft),
                  (this.startY = e._Box.offsetTop),
                  e.activeKeyboard.keyboard.isCJK &&
                    e.titleBar.setPinCJKOffset(),
                  this.dragPromise && this.dragPromise.resolve(),
                  (this.dragPromise = new S()),
                  e.emit("dragmove", this.dragPromise.corePromise);
              }
              onDragMove(i, s) {
                e.titleBar.showPin(!0),
                  (e.userPositioned = !0),
                  (e._Box.style.left = this.startX + i + "px"),
                  (e._Box.style.top = this.startY + s + "px");
                var c = e.getRect();
                e.setSize(c.width, c.height, !0), (e.x = c.left), (e.y = c.top);
              }
              onDragRelease() {
                e.vkbd && (e.vkbd.currentKey = null),
                  this.dragPromise.resolve(),
                  this.dragPromise.then(() => {
                    (e.userPositioned = !0),
                      e.doResizeMove(),
                      e.savePersistedLayout();
                  }),
                  (this.dragPromise = null);
              }
            })()),
            this._moveHandler);
      }
      get resizeDragHandler() {
        let e = this;
        return this._resizeHandler
          ? this._resizeHandler
          : ((this._resizeHandler = new (class extends cn {
              constructor() {
                super("se-resize");
              }
              onDragStart() {
                (this.startWidth = e.computedWidth),
                  (this.startHeight = e.computedHeight),
                  this.dragPromise && this.dragPromise.resolve(),
                  (this.dragPromise = new S()),
                  e.emit("resizemove", this.dragPromise.corePromise);
              }
              onDragMove(i, s) {
                let c = this.startWidth + i,
                  l = this.startHeight + s;
                c < 0.2 * screen.width && (c = 0.2 * screen.width),
                  l < 0.1 * screen.height && (l = 0.1 * screen.height),
                  c > 0.9 * screen.width && (c = 0.9 * screen.width),
                  l > 0.5 * screen.height && (l = 0.5 * screen.height),
                  e.setSize(c, l, !0);
              }
              onDragRelease() {
                e.vkbd && (e.vkbd.currentKey = null),
                  e.vkbd &&
                    ((this.startWidth = e.computedWidth),
                    (this.startHeight = e.computedHeight)),
                  e.refreshLayout(),
                  this.dragPromise.resolve(),
                  this.dragPromise.then(() => {
                    e.doResizeMove(), e.savePersistedLayout();
                  }),
                  (this.dragPromise = null);
              }
            })()),
            this._resizeHandler);
      }
    };
    a(Ye, "FloatingOSKView");
    var ln = class extends ue {
      constructor(e) {
        e.isEmbedded
          ? (e.activator = e.activator || new Ut())
          : (e.activator = e.activator || new et());
        super(e);
        this.isResizing = !1;
        this.restorePosition = function (e) {}.bind(this);
        document.body.appendChild(this._Box);
      }
      _Unload() {
        (this.keyboardView = null),
          (this.bannerView = null),
          (this._Box = null);
      }
      setBoxStyling() {
        let e = this._Box.style;
        (e.zIndex = "9999"),
          (e.display = "none"),
          (e.width = "100%"),
          (e.position = "fixed");
      }
      refreshLayout(e) {
        if (!this.isResizing) {
          try {
            (this.isResizing = !0), this.doResize();
          } finally {
            this.isResizing = !1;
          }
          super.refreshLayout(e);
        }
      }
      doResize() {
        if (this.vkbd) {
          let e = this.getDefaultKeyboardHeight();
          this.setSize(this.getDefaultWidth(), e + this.banner.height);
        }
      }
      postKeyboardAdjustments() {
        this.doResize();
      }
      getDefaultKeyboardHeight() {
        var l, r;
        let e = this.targetDevice;
        if (this.configuration.heightOverride)
          return this.configuration.heightOverride();
        let n =
            (l = document == null ? void 0 : document.documentElement) == null
              ? void 0
              : l.clientWidth,
          i =
            (r = document == null ? void 0 : document.documentElement) == null
              ? void 0
              : r.clientHeight;
        if (
          typeof n == "undefined" &&
          ((n = Math.min(screen.height, screen.width)),
          (i = Math.max(screen.height, screen.width)),
          xe())
        ) {
          let B = n;
          (n = i), (i = B);
        }
        var s = Math.floor(Math.min(i, n) / 2),
          c = s;
        return (
          e.formFactor == "phone" &&
            (xe() ? (c = Math.floor(i / 1.6)) : (c = Math.floor(i / 2.4))),
          this.targetDevice.OS == p.OperatingSystem.iOS &&
            (c = c / He(this.targetDevice.formFactor)),
          c
        );
      }
      getDefaultWidth() {
        var i;
        let e = this.targetDevice;
        if (this.configuration.widthOverride)
          return this.configuration.widthOverride();
        var n;
        return (
          (n =
            (i = document == null ? void 0 : document.documentElement) == null
              ? void 0
              : i.clientWidth),
          typeof n == "undefined" &&
            (this.targetDevice.OS == p.OperatingSystem.iOS
              ? (n = window.innerWidth)
              : e.OS == p.OperatingSystem.Android
              ? (n = screen.availWidth)
              : (n = screen.width)),
          n
        );
      }
      setRect(e) {}
      getPos() {
        var e = this._Box,
          n = {
            left: this._Visible ? e.offsetLeft : this.x,
            top: this._Visible ? e.offsetTop : this.y,
          };
        return n;
      }
      setPos(e) {}
      setDisplayPositioning() {
        let e = this._Box.style;
        this.vkbd &&
          ((e.position = "fixed"),
          (e.left = e.bottom = "0px"),
          (e.border = "none"),
          (e.borderTop = "1px solid gray"));
      }
      present() {
        super.present(), this.legacyEvents.callEvent("show", {});
      }
    };
    a(ln, "AnchoredOSKView");
    var rn = class extends Me {
      constructor() {
        super(...arguments);
        this.flag = !0;
      }
      get enabled() {
        return this.flag;
      }
      set enabled(e) {
        this.activate = e;
      }
      get activate() {
        return this.flag;
      }
      set activate(e) {
        this.flag != e && ((this.flag = e), this.emit("activate", e));
      }
      get conditionsMet() {
        return !0;
      }
    };
    a(rn, "SimpleActivator");
    var on = class extends ue {
      constructor(e) {
        e.activator = e.activator || new rn();
        super(e);
        this.restorePosition = function (e) {}.bind(this);
      }
      get element() {
        return this._Box;
      }
      _Unload() {
        (this.keyboardView = null),
          (this.bannerView = null),
          (this._Box = null);
      }
      setBoxStyling() {
        let e = this._Box.style;
        (e.display = "none"), (e.position = "relative");
      }
      postKeyboardAdjustments() {}
      getDefaultKeyboardHeight() {
        return this.keyboardView instanceof ye
          ? this.keyboardView.height
          : this.computedHeight;
      }
      getDefaultWidth() {
        return this.computedWidth;
      }
      setRect(e) {}
      getPos() {
        var e = this._Box,
          n = {
            left: this._Visible ? e.offsetLeft : void 0,
            top: this._Visible ? e.offsetTop : void 0,
          };
        return n;
      }
      setPos(e) {}
      present() {
        super.present(), this.legacyEvents.callEvent("show", {});
      }
      setDisplayPositioning() {}
      allowsDeviceChange(e) {
        return !0;
      }
    };
    a(on, "InlinedOSKView");
    var Uc = {};
    Xc(Uc, {
      AnchoredOSKView: () => kn,
      FloatingOSKView: () => Nn,
      InlinedOSKView: () => Js,
    });
    function Ic(o) {
      return {
        hostDevice: o.config.hostDevice,
        pathConfig: o.config.paths,
        predictionContextManager: o.contextManager.predictionContext,
        isEmbedded: !1,
      };
    }
    a(Ic, "buildBaseOskConfiguration");
    var kn = class extends ln {
      constructor(t, e) {
        let n = C(C({}, Ic(t)), e || {});
        super(n);
      }
    };
    a(kn, "PublishedAnchoredOSKView");
    var Nn = class extends Ye {
      constructor(t, e) {
        let n = C(C({}, Ic(t)), e || {});
        super(n);
      }
    };
    a(Nn, "PublishedFloatingOSKView");
    var Js = class extends on {
      constructor(t, e) {
        let n = C(C({}, Ic(t)), e || {});
        super(n);
      }
    };
    a(Js, "PublishedInlineOSKView");
    var Wl = v(A(), 1);
    var P = class extends at {
      constructor() {
        super(...arguments);
        this.events = new Wl.default();
        this.changed = !1;
      }
      focus() {
        let e = this.getElement();
        e.focus && e.focus();
      }
      isForcingScroll() {
        return !1;
      }
      dispatchInputEventOn(e) {
        let n;
        window.InputEvent &&
          (n = new InputEvent("input", { bubbles: !0, cancelable: !1 })),
          e && n && e.dispatchEvent(n);
      }
    };
    a(P, "OutputTarget");
    var we = class extends P {
      constructor(e) {
        super();
        (this.root = e), (this._cachedSelectionStart = -1);
      }
      get isSynthetic() {
        return !1;
      }
      static isSupportedType(e) {
        return e == "email" || e == "search" || e == "text" || e == "url";
      }
      getElement() {
        return this.root;
      }
      clearSelection() {
        this.getCaret(),
          (this.root.value =
            this.root.value._kmwSubstring(0, this.processedSelectionStart) +
            this.root.value._kmwSubstring(this.processedSelectionEnd)),
          this.setCaret(this.processedSelectionStart);
      }
      isSelectionEmpty() {
        return this.root.selectionStart == this.root.selectionEnd;
      }
      hasSelection() {
        return !0;
      }
      invalidateSelection() {
        this._cachedSelectionStart = -1;
      }
      getCaret() {
        return (
          this.root.selectionStart != this._cachedSelectionStart &&
            ((this._cachedSelectionStart = this.root.selectionStart),
            (this.processedSelectionStart =
              this.root.value._kmwCodeUnitToCodePoint(
                this.root.selectionStart
              )),
            (this.processedSelectionEnd =
              this.root.value._kmwCodeUnitToCodePoint(this.root.selectionEnd))),
          this.root.selectionDirection == "forward"
            ? this.processedSelectionEnd
            : this.processedSelectionStart
        );
      }
      getDeadkeyCaret() {
        return this.getCaret();
      }
      setCaret(e) {
        this.setSelection(e, e, "none");
      }
      setSelection(e, n, i) {
        let s = this.root.value._kmwCodePointToCodeUnit(e),
          c = this.root.value._kmwCodePointToCodeUnit(n);
        this.root.setSelectionRange(s, c, i),
          (this.processedSelectionStart = e),
          (this.processedSelectionEnd = n),
          this.forceScroll(),
          this.root.setSelectionRange(s, c, i);
      }
      forceScroll() {
        let e = this.getElement(),
          n = e.selectionStart,
          i = e.selectionEnd;
        this._activeForcedScroll = !0;
        try {
          e.blur(), e.focus();
        } finally {
          (e.selectionStart = n),
            (e.selectionEnd = i),
            (this._activeForcedScroll = !1);
        }
      }
      isForcingScroll() {
        return this._activeForcedScroll;
      }
      getSelectionDirection() {
        return this.root.selectionDirection;
      }
      getTextBeforeCaret() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(0, this.processedSelectionStart)
        );
      }
      getSelectedText() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(
            this.processedSelectionStart,
            this.processedSelectionEnd
          )
        );
      }
      setTextBeforeCaret(e) {
        this.getCaret();
        let n = this.processedSelectionEnd - this.processedSelectionStart,
          i = this.getSelectionDirection(),
          s = e._kmwLength();
        (this.root.value =
          e + this.getText()._kmwSubstring(this.processedSelectionStart)),
          this.setSelection(s, s + n, i);
      }
      setTextAfterCaret(e) {
        let n = this.getCaret(),
          i = this.getSelectionDirection();
        (this.root.value = this.getTextBeforeCaret() + e),
          this.setSelection(
            this.processedSelectionStart,
            this.processedSelectionEnd,
            i
          );
      }
      getTextAfterCaret() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(this.processedSelectionEnd)
        );
      }
      getText() {
        return this.root.value;
      }
      deleteCharsBeforeCaret(e) {
        if (e > 0) {
          let n = this.getTextBeforeCaret(),
            i = this.processedSelectionStart;
          e > i && (e = i),
            this.adjustDeadkeys(-e),
            this.setTextBeforeCaret(n.kmwSubstring(0, i - e)),
            this.setCaret(i - e);
        }
      }
      insertTextBeforeCaret(e) {
        if (!e) return;
        let n = this.getCaret(),
          i = this.getTextBeforeCaret(),
          s = this.getText()._kmwSubstring(this.processedSelectionStart);
        this.adjustDeadkeys(e._kmwLength()),
          (this.root.value = i + e + s),
          this.setCaret(n + e._kmwLength());
      }
      handleNewlineAtCaret() {
        let e = this.root;
        e && (e.type == "search" || e.type == "submit")
          ? ((e.disabled = !1), e.form.submit())
          : this.events.emit("unhandlednewline", e);
      }
      doInputEvent() {
        this.dispatchInputEventOn(this.root);
      }
    };
    a(we, "Input");
    var an = class extends P {
      constructor(e) {
        super();
        (this.root = e), (this._cachedSelectionStart = -1);
      }
      get isSynthetic() {
        return !1;
      }
      getElement() {
        return this.root;
      }
      clearSelection() {
        this.getCaret(),
          (this.root.value =
            this.root.value._kmwSubstring(0, this.processedSelectionStart) +
            this.root.value._kmwSubstring(this.processedSelectionEnd)),
          this.setCaret(this.processedSelectionStart);
      }
      isSelectionEmpty() {
        return this.root.selectionStart == this.root.selectionEnd;
      }
      hasSelection() {
        return !0;
      }
      invalidateSelection() {
        this._cachedSelectionStart = -1;
      }
      getCaret() {
        return (
          this.root.selectionStart != this._cachedSelectionStart &&
            ((this._cachedSelectionStart = this.root.selectionStart),
            (this.processedSelectionStart =
              this.root.value._kmwCodeUnitToCodePoint(
                this.root.selectionStart
              )),
            (this.processedSelectionEnd =
              this.root.value._kmwCodeUnitToCodePoint(this.root.selectionEnd))),
          this.root.selectionDirection == "forward"
            ? this.processedSelectionEnd
            : this.processedSelectionStart
        );
      }
      getDeadkeyCaret() {
        return this.getCaret();
      }
      setCaret(e) {
        this.setSelection(e, e, "none");
      }
      setSelection(e, n, i) {
        let s = this.root.value._kmwCodePointToCodeUnit(e),
          c = this.root.value._kmwCodePointToCodeUnit(n);
        this.root.setSelectionRange(s, c, i),
          (this.processedSelectionStart = e),
          (this.processedSelectionEnd = n),
          this.forceScroll(),
          this.root.setSelectionRange(s, c, i);
      }
      forceScroll() {
        let e = this.getElement(),
          n = e.selectionStart,
          i = e.selectionEnd;
        this._activeForcedScroll = !0;
        try {
          e.blur(), e.focus();
        } finally {
          (e.selectionStart = n),
            (e.selectionEnd = i),
            (this._activeForcedScroll = !1);
        }
      }
      isForcingScroll() {
        return this._activeForcedScroll;
      }
      getSelectionDirection() {
        return this.root.selectionDirection;
      }
      getTextBeforeCaret() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(0, this.processedSelectionStart)
        );
      }
      setTextBeforeCaret(e) {
        this.getCaret();
        let n = this.processedSelectionEnd - this.processedSelectionStart,
          i = this.getSelectionDirection(),
          s = e._kmwLength();
        (this.root.value =
          e + this.getText()._kmwSubstring(this.processedSelectionStart)),
          this.setSelection(s, s + n, i);
      }
      setTextAfterCaret(e) {
        let n = this.getCaret(),
          i = this.getSelectionDirection();
        (this.root.value = this.getTextBeforeCaret() + e),
          this.setSelection(
            this.processedSelectionStart,
            this.processedSelectionEnd,
            i
          );
      }
      getTextAfterCaret() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(this.processedSelectionEnd)
        );
      }
      getSelectedText() {
        return (
          this.getCaret(),
          this.getText()._kmwSubstring(
            this.processedSelectionStart,
            this.processedSelectionEnd
          )
        );
      }
      getText() {
        return this.root.value;
      }
      deleteCharsBeforeCaret(e) {
        if (e > 0) {
          let n = this.getTextBeforeCaret(),
            i = this.processedSelectionStart;
          e > i && (e = i),
            this.adjustDeadkeys(-e),
            this.setTextBeforeCaret(n.kmwSubstring(0, i - e)),
            this.setCaret(i - e);
        }
      }
      insertTextBeforeCaret(e) {
        if (!e) return;
        let n = this.getCaret(),
          i = this.getTextBeforeCaret(),
          s = this.getText()._kmwSubstring(this.processedSelectionStart);
        this.adjustDeadkeys(e._kmwLength()),
          (this.root.value = i + e + s),
          this.setCaret(n + e._kmwLength());
      }
      handleNewlineAtCaret() {
        this.insertTextBeforeCaret(`
`);
      }
      doInputEvent() {
        this.dispatchInputEventOn(this.root);
      }
    };
    a(an, "TextArea");
    var Tn = class {
      constructor(t, e) {
        (this.node = t), (this.offset = e);
      }
    };
    a(Tn, "SelectionCaret");
    var Mn = class {
      constructor(t, e) {
        (this.start = t), (this.end = e);
      }
    };
    a(Mn, "SelectionRange");
    var Ie = class {
      constructor(t, e) {
        (this.cmd = t), (this.stateType = e);
      }
    };
    a(Ie, "StyleCommand");
    var j = class extends P {
      constructor(e) {
        super();
        if (
          ((this.root = e),
          e.contentWindow &&
            e.contentWindow.document &&
            e.contentWindow.document.designMode == "on")
        )
          (this.doc = e.contentWindow.document),
            (this.docRoot = e.contentWindow.document.documentElement);
        else throw "Specified IFrame is not in design-mode!";
      }
      get isSynthetic() {
        return !1;
      }
      getElement() {
        return this.root;
      }
      focus() {
        this.doc.defaultView.focus();
      }
      isSelectionEmpty() {
        return this.hasSelection() ? this.doc.getSelection().isCollapsed : !0;
      }
      hasSelection() {
        let e = this.doc.getSelection(),
          n = document.getSelection();
        return n.anchorNode == e.anchorNode && n.focusNode == e.focusNode, !0;
      }
      clearSelection() {
        if (this.hasSelection()) {
          let e = this.doc.getSelection();
          e.isCollapsed || e.deleteFromDocument();
        } else console.warn("Attempted to clear an unowned Selection!");
      }
      invalidateSelection() {}
      getCarets() {
        let e = this.doc.getSelection(),
          n = e.anchorNode.compareDocumentPosition(e.focusNode);
        if (e.isCollapsed) {
          let i = new Tn(e.anchorNode, e.anchorOffset);
          return new Mn(i, i);
        } else {
          let i = new Tn(e.anchorNode, e.anchorOffset),
            s = new Tn(e.focusNode, e.focusOffset);
          return (
            i.node == s.node && (n = s.offset - i.offset > 0 ? 2 : 4),
            n & 2 ? new Mn(i, s) : new Mn(s, i)
          );
        }
      }
      getDeadkeyCaret() {
        return this.getTextBeforeCaret().kmwLength();
      }
      getTextBeforeCaret() {
        if (!this.hasSelection()) return this.getText();
        let e = this.getCarets().start;
        return e.node.nodeType != 3
          ? ""
          : e.node.textContent.substr(0, e.offset);
      }
      getSelectedText() {
        return "";
      }
      getTextAfterCaret() {
        if (!this.hasSelection()) return "";
        let e = this.getCarets().end;
        return e.node.nodeType != 3 ? "" : e.node.textContent.substr(e.offset);
      }
      getText() {
        return this.docRoot.innerText;
      }
      deleteCharsBeforeCaret(e) {
        if (!this.hasSelection() || e <= 0) return;
        let n = this.getCarets().start;
        if ((e > n.offset && (e = n.offset), n.node.nodeType != 3)) {
          console.warn(
            "Deletion of characters requested without available context!"
          );
          return;
        }
        let i = this.doc.createRange(),
          s =
            n.offset -
            n.node.nodeValue.substr(0, n.offset)._kmwSubstr(-e).length;
        i.setStart(n.node, s),
          i.setEnd(n.node, n.offset),
          this.adjustDeadkeys(-e),
          i.deleteContents();
      }
      insertTextBeforeCaret(e) {
        if (!this.hasSelection()) return;
        let n = this.getCarets().start,
          i = e._kmwLength(),
          s = this.doc.getSelection();
        if (i == 0) return;
        this.adjustDeadkeys(i);
        let c = this.root.ownerDocument.createRange();
        if (n.node.nodeType == 3) {
          let r = n.node;
          r.insertData(n.offset, e), c.setStart(r, n.offset + e.length);
        } else {
          var l = this.doc.createTextNode(e);
          let r = this.doc.createRange();
          r.setStart(n.node, n.offset),
            r.collapse(!0),
            r.insertNode(l),
            c.setStart(l, e.length);
        }
        c.collapse(!0), s.removeAllRanges();
        try {
          s.addRange(c);
        } catch (r) {
          n.node.parentElement.scrollIntoView(), s.addRange(c);
        }
        s.collapseToEnd();
      }
      handleNewlineAtCaret() {}
      setTextAfterCaret(e) {
        if (!this.hasSelection()) return;
        let n = this.getCarets().end,
          i = e._kmwLength(),
          s = this.doc.getSelection();
        if (i != 0)
          if (n.node.nodeType == 3) {
            let l = n.node;
            l.replaceData(n.offset, l.length, e);
          } else {
            var c = n.node.ownerDocument.createTextNode(e);
            let l = this.root.ownerDocument.createRange();
            l.setStart(n.node, n.offset), l.collapse(!0), l.insertNode(c);
          }
      }
      saveProperties() {
        var e = [
          new Ie("backcolor", 1),
          new Ie("fontname", 1),
          new Ie("fontsize", 1),
          new Ie("forecolor", 1),
          new Ie("bold", 0),
          new Ie("italic", 0),
          new Ie("strikethrough", 0),
          new Ie("subscript", 0),
          new Ie("superscript", 0),
          new Ie("underline", 0),
        ];
        this.doc.defaultView && e.push(new Ie("hilitecolor", 1));
        for (var n = 0; n < e.length; n++) {
          let i = e[n];
          i.stateType == 1
            ? (i.cache = this.doc.queryCommandValue(i.cmd))
            : (i.cache = this.doc.queryCommandState(i.cmd));
        }
        this.commandCache = e;
      }
      restoreProperties(e) {
        this.commandCache ||
          console.error("No command cache exists to restore!");
        for (var n = 0; n < this.commandCache.length; n++) {
          let i = this.commandCache[n];
          i.stateType == 1
            ? this.doc.queryCommandValue(i.cmd) != i.cache &&
              (e && e(), this.doc.execCommand(i.cmd, !1, i.cache))
            : this.doc.queryCommandState(i.cmd) != i.cache &&
              (e && e(), this.doc.execCommand(i.cmd, !1, null));
        }
      }
      doInputEvent() {
        this.dispatchInputEventOn(this.root);
      }
    };
    a(j, "DesignIFrame");
    var Yn = class {
      constructor(t, e) {
        (this.node = t), (this.offset = e);
      }
    };
    a(Yn, "SelectionCaret");
    var wn = class {
      constructor(t, e) {
        (this.start = t), (this.end = e);
      }
    };
    a(wn, "SelectionRange");
    var bt = class extends P {
      constructor(e) {
        var t = (...args) => {
          super(...args);
        };
        if (e.isContentEditable) t(), (this.root = e);
        else throw "Specified element is not already content-editable!";
      }
      get isSynthetic() {
        return !1;
      }
      getElement() {
        return this.root;
      }
      isSelectionEmpty() {
        return this.hasSelection()
          ? this.root.ownerDocument.getSelection().isCollapsed
          : !0;
      }
      hasSelection() {
        let e = this.root.ownerDocument.getSelection();
        return !(
          (this.root != e.anchorNode && !this.root.contains(e.anchorNode)) ||
          (this.root != e.focusNode && !this.root.contains(e.focusNode))
        );
      }
      clearSelection() {
        if (this.hasSelection()) {
          let e = this.root.ownerDocument.getSelection();
          e.isCollapsed || e.deleteFromDocument();
        } else console.warn("Attempted to clear an unowned Selection!");
      }
      invalidateSelection() {}
      getCarets() {
        let e = this.root.ownerDocument.getSelection(),
          n = e.anchorNode.compareDocumentPosition(e.focusNode);
        if (e.isCollapsed) {
          let i = new Yn(e.anchorNode, e.anchorOffset);
          return new wn(i, i);
        } else {
          let i = new Yn(e.anchorNode, e.anchorOffset),
            s = new Yn(e.focusNode, e.focusOffset);
          return (
            i.node == s.node && (n = s.offset - i.offset > 0 ? 2 : 4),
            n & 2 ? new wn(i, s) : new wn(s, i)
          );
        }
      }
      getDeadkeyCaret() {
        return this.getTextBeforeCaret().kmwLength();
      }
      getTextBeforeCaret() {
        if (!this.hasSelection()) return this.getText();
        let e = this.getCarets().start;
        return e.node.nodeType != 3
          ? ""
          : e.node.textContent.substr(0, e.offset);
      }
      getSelectedText() {
        return "";
      }
      getTextAfterCaret() {
        if (!this.hasSelection()) return "";
        let e = this.getCarets().end;
        return e.node.nodeType != 3 ? "" : e.node.textContent.substr(e.offset);
      }
      getText() {
        return this.root.innerText;
      }
      deleteCharsBeforeCaret(e) {
        if (!this.hasSelection() || e <= 0) return;
        let n = this.getCarets().start;
        if ((e > n.offset && (e = n.offset), n.node.nodeType != 3)) {
          console.warn(
            "Deletion of characters requested without available context!"
          );
          return;
        }
        let i = this.root.ownerDocument.createRange(),
          s =
            n.offset -
            n.node.nodeValue.substr(0, n.offset)._kmwSubstr(-e).length;
        i.setStart(n.node, s),
          i.setEnd(n.node, n.offset),
          this.adjustDeadkeys(-e),
          i.deleteContents();
      }
      insertTextBeforeCaret(e) {
        if (!this.hasSelection()) return;
        let n = this.getCarets().start,
          i = e._kmwLength(),
          s = this.root.ownerDocument.getSelection();
        if (i == 0) return;
        this.adjustDeadkeys(i);
        let c = this.root.ownerDocument.createRange();
        if (n.node.nodeType == 3) {
          let r = n.node;
          r.insertData(n.offset, e), c.setStart(r, n.offset + e.length);
        } else {
          var l = n.node.ownerDocument.createTextNode(e);
          let r = this.root.ownerDocument.createRange();
          r.setStart(n.node, n.offset),
            r.collapse(!0),
            r.insertNode(l),
            c.setStart(l, e.length);
        }
        c.collapse(!0), s.removeAllRanges();
        try {
          s.addRange(c);
        } catch (r) {
          n.node.parentElement.scrollIntoView(), s.addRange(c);
        }
        s.collapseToEnd();
      }
      handleNewlineAtCaret() {}
      setTextAfterCaret(e) {
        if (!this.hasSelection()) return;
        let n = this.getCarets().end,
          i = e._kmwLength(),
          s = this.root.ownerDocument.getSelection();
        if (i != 0)
          if (n.node.nodeType == 3) {
            let l = n.node;
            l.replaceData(n.offset, l.length, e);
          } else {
            var c = n.node.ownerDocument.createTextNode(e);
            let l = this.root.ownerDocument.createRange();
            l.setStart(n.node, n.offset), l.collapse(!0), l.insertNode(c);
          }
      }
      doInputEvent() {
        this.dispatchInputEventOn(this.root);
      }
    };
    a(bt, "ContentEditable");
    function te(o, t) {
      var e;
      if (!o) return !1;
      if (o.Window) return t == "Window";
      if (o.defaultView) e = o.defaultView[t];
      else if (o.ownerDocument) e = o.ownerDocument.defaultView[t];
      else if (o.target) {
        var n = o;
        this.instanceof(n.target, "Window")
          ? (e = n.target[t])
          : this.instanceof(n.target, "Document")
          ? (e = n.target.defaultView[t])
          : this.instanceof(n.target, "HTMLElement") &&
            (e = n.target.ownerDocument.defaultView[t]);
      }
      return e ? o instanceof e : !1;
    }
    a(te, "nestedInstanceOf");
    function Rs(o) {
      if (te(o, "HTMLInputElement")) return new we(o);
      if (te(o, "HTMLTextAreaElement")) return new an(o);
      if (te(o, "HTMLIFrameElement")) {
        let t = o;
        return t.contentWindow &&
          t.contentWindow.document &&
          t.contentWindow.document.designMode == "on"
          ? new j(t)
          : o.isContentEditable
          ? new bt(o)
          : null;
      } else if (o.isContentEditable) return new bt(o);
      return null;
    }
    a(Rs, "wrapElement");
    var tt = class {
      constructor() {
        this.pending = !1;
        // Not creating the waiting dialog elements anymore
      }
      get rootElement() {
        return null;
      }
      wait(t) {
        if (t) {
          this.pending = !0;
        } else {
          this.pending = !1;
        }
      }
      alert(t, e) {
        this.dismiss = arguments.length > 1 ? e : null;
      }
      shutdown() {
        // No-op
      }
    };
    a(tt, "AlertHost");
    function Ai() {
      return document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((o, t) => {
            let e = a(() => {
              window.removeEventListener("load", e), o();
            }, "loadHandler");
            window.addEventListener("load", e);
          });
    }
    a(Ai, "whenDocumentReady");
    var Hi = class extends bn {
      initialize(e) {
        this._options
          ? (this._options = C(C({}, this._options), e))
          : (this._options = C({}, e)),
          super.initialize(e),
          (this._options = e),
          (this._ui = e.ui),
          (this._attachType = e.attachType),
          Ai().then(() => {
            var n;
            e.useAlerts && !this.alertHost
              ? (this._alertHost = new tt())
              : !e.useAlerts &&
                this.alertHost &&
                ((n = this._alertHost) == null || n.shutdown(),
                (this._alertHost = null));
          });
      }
      get options() {
        return this._options;
      }
      get attachType() {
        return this._attachType;
      }
      get alertHost() {
        return this._alertHost;
      }
      set signalUser(e) {
        (!e || e != this.alertHost) && this.alertHost.shutdown(),
          (this._alertHost = e);
      }
      debugReport() {
        let e = super.debugReport();
        return (
          (e.attachType = this.attachType),
          (e.ui = this._ui),
          (e.keymanEngine = "app/browser"),
          e
        );
      }
      onRuleFinalization(e, n) {
        let i = e.transcription.transform;
        At(i) || (n instanceof P && (n.changed = !0));
      }
    };
    a(Hi, "BrowserConfiguration");
    var fl = C({ ui: "", attachType: "", useAlerts: !0 }, Ks);
    var Dn = class {
      constructor(t, e, n) {
        (this.interface = t), (this.keyboard = e);
      }
    };
    a(Dn, "AttachmentInfo");
    function nt(o) {
      let t = o == null ? void 0 : o.target;
      return Ee(t);
    }
    a(nt, "eventOutputTarget");
    function Ee(o) {
      var t;
      if (o == null) return null;
      if (
        (o.body && (o = o.body),
        o.nodeType == 3 && (o = o.parentNode),
        te(o, "HTMLInputElement"))
      ) {
        let e = o.type.toLowerCase();
        if (!(e == "text" || e == "search")) return null;
      }
      return (t = o._kmwAttachment) == null ? void 0 : t.interface;
    }
    a(Ee, "outputTargetForElement");
    var kl = v(A(), 1);
    var Ct = class extends kl.default {
      constructor(e, n) {
        if (!e) throw new Error("Cannot attach to a null/undefined document");
        super();
        this.baseFont = "";
        this.appliedFont = "";
        this.embeddedPageContexts = [];
        this._inputList = [];
        this._sortedInputs = [];
        this._InputModeObserverCore = a((e) => {
          this.disableInputModeObserver();
          try {
            for (let n of e) {
              let i = n.target;
              !this.isAttached(i) ||
                ((i._kmwAttachment.inputMode = i.inputMode),
                this.device.touchable && (i.inputMode = "none"));
            }
          } finally {
            this.enableInputModeObserver();
          }
        }, "_InputModeObserverCore");
        this._EnablementMutationObserverCore = a((e) => {
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              s = i.oldValue ? i.oldValue.indexOf("kmw-disabled") >= 0 : !1,
              c = i.target.className.indexOf("kmw-disabled") >= 0;
            if (
              (s && !c
                ? this._EnableControl(i.target)
                : !s && c && this._DisableControl(i.target),
              !c && i.attributeName == "readonly")
            ) {
              var l = i.oldValue ? i.oldValue != null : !1,
                r = i.target;
              if (
                r instanceof r.ownerDocument.defaultView.HTMLInputElement ||
                r instanceof r.ownerDocument.defaultView.HTMLTextAreaElement
              ) {
                var B = r.readOnly;
                l && !B
                  ? this._EnableControl(i.target)
                  : !l && B && this._DisableControl(i.target);
              }
            }
          }
        }, "_EnablementMutationObserverCore");
        this._AutoAttachObserverCore = a((e) => {
          for (var n = [], i = [], s = 0; s < e.length; s++) {
            let r = e[s];
            for (var c = 0; c < r.addedNodes.length; c++)
              n = n.concat(this._GetDocumentEditables(r.addedNodes[c]));
            for (c = 0; c < r.removedNodes.length; c++)
              i = i.concat(this._GetDocumentEditables(r.removedNodes[c]));
          }
          for (var l = 0; l < n.length; l++)
            this.isKMWInput(n[l]) && this._MutationAdditionObserved(n[l]);
          for (l = 0; l < i.length; l++) {
            let r = !1,
              B = i[l];
            if (B instanceof B.ownerDocument.defaultView.HTMLIFrameElement) {
              for (let d = 0; d < this.embeddedPageContexts.length; d++)
                if (this.embeddedPageContexts[d].options.owner == B) {
                  this.embeddedPageContexts[d].shutdown(),
                    this.embeddedPageContexts.splice(d, 1),
                    (r = !0);
                  break;
                }
              if (!r) {
                for (let d = 0; d < this._inputList.length; d++)
                  if (this._inputList[d] == B) {
                    this.detachFromControl(B),
                      this._inputList[d] == B && this._inputList.splice(d, 1);
                    break;
                  }
              }
            } else this.isKMWInput(B) && this._MutationRemovalObserved(B);
          }
          (n.length || i.length) &&
            (this.device.touchable
              ? this.device.touchable &&
                window.setTimeout(() => {
                  this.listInputs();
                }, 1)
              : this.listInputs());
        }, "_AutoAttachObserverCore");
        this._MutationAdditionObserved = a((e) => {
          if (e instanceof e.ownerDocument.defaultView.HTMLIFrameElement) {
            let n = a(() => {
              window.setTimeout(() => {
                this.attachToControl(e);
              }, 1);
            }, "attachFunctor");
            e.addEventListener("load", n);
          } else this.attachToControl(e);
        }, "_MutationAdditionObserved");
        this._MutationRemovalObserved = a((e) => {
          this.detachFromControl(e);
        }, "_MutationRemovalObserved");
        (this.options = n),
          (this.document = e),
          (this.stylesheetManager = new ge(this.document.body));
      }
      get device() {
        return this.options.hostDevice;
      }
      get window() {
        return this.document.defaultView;
      }
      get inputList() {
        let e = this.embeddedPageContexts
          .map((n) => n.inputList)
          .reduce((n, i) => n.concat(i), []);
        return [].concat(this._inputList).concat(e);
      }
      get sortedInputs() {
        return this._sortedInputs;
      }
      install(e) {
        (this.manualAttach = e),
          (this.baseFont = this.getBaseFont()),
          this.manualAttach ||
            (this._SetupDocument(this.document.documentElement),
            this.listInputs()),
          this.options.owner || this.initMutationObservers(this.document, e);
      }
      setupElementAttachment(e) {
        if (!e._kmwAttachment) {
          let n = Rs(e);
          n ||
            te(e, "HTMLIFrameElement") ||
            console.warn(
              "Could not create processing interface for newly-attached element!"
            ),
            (e._kmwAttachment = new Dn(n, null, this.device.touchable));
        }
      }
      clearElementAttachment(e) {
        e._kmwAttachment = null;
      }
      isKMWInput(e) {
        if (e instanceof e.ownerDocument.defaultView.HTMLTextAreaElement)
          return !0;
        if (e instanceof e.ownerDocument.defaultView.HTMLInputElement) {
          if (we.isSupportedType(e.type)) return !0;
        } else if (e instanceof e.ownerDocument.defaultView.HTMLIFrameElement)
          try {
            if (e.contentWindow) {
              let n = e.contentWindow.document;
              if (n)
                return !(
                  this.device.touchable && n.designMode.toLowerCase() == "on"
                );
            } else return !!e._kmwAttachment;
          } catch (n) {
            console.warn(
              "Error during attachment to / detachment from iframe: "
            ),
              console.warn(n);
          }
        else if (e.isContentEditable) return !0;
        return !1;
      }
      isAttached(e) {
        if (e._kmwAttachment) return !0;
        if (te(e, "HTMLIFrameElement")) {
          if (e.contentDocument == this.document) return !0;
          for (let i of this.embeddedPageContexts)
            if (i.isAttached(e)) return !0;
        }
        return !1;
      }
      isKMWDisabled(e) {
        let n = e.className;
        return e.readOnly ? !0 : !!(n && n.indexOf("kmw-disabled") >= 0);
      }
      enableInputElement(e) {
        var n;
        this.isKMWDisabled(e) ||
          (e instanceof e.ownerDocument.defaultView.HTMLIFrameElement
            ? this._AttachToIframe(e)
            : (this.setupElementAttachment(e),
              (e._kmwAttachment.inputMode =
                (n = e.inputMode) != null ? n : "text"),
              this.disableInputModeObserver(),
              (e.inputMode = "none"),
              this.enableInputModeObserver(),
              e.classList.add("keymanweb-font"),
              this._inputList.push(e),
              this.emit("enabled", e)));
      }
      disableInputElement(e) {
        var i;
        if (!!e)
          if (
            (e.ownerDocument.defaultView &&
              e instanceof e.ownerDocument.defaultView.HTMLIFrameElement) ||
            e instanceof HTMLIFrameElement
          )
            this._DetachFromIframe(e);
          else {
            if (this.isAttached(e)) {
              let c = (i = e._kmwAttachment) == null ? void 0 : i.inputMode;
              this.disableInputModeObserver(),
                (e.inputMode = c),
                this.enableInputModeObserver();
            }
            e.className.indexOf("keymanweb-font") >= 0 &&
              (e.className = e.className.replace("keymanweb-font", "").trim());
            var n = this.inputList.indexOf(e);
            n > -1 && this._inputList.splice(n, 1), this.emit("disabled", e);
          }
      }
      enableTouchElement(e) {
        return this.isKMWDisabled(e)
          ? (this.emit("disabled", e), !1)
          : (this.isAttached(e) || this.setupElementAttachment(e),
            this.enableInputElement(e),
            !0);
      }
      disableTouchElement(e) {
        if (this.isAttached(e)) {
          let n = e._kmwAttachment.inputMode;
          this.disableInputModeObserver(),
            (e.inputMode = n),
            this.enableInputModeObserver();
        }
      }
      _AttachToIframe(e) {
        try {
          let n = e.contentWindow.document;
          if (n) {
            if (n.designMode.toLowerCase() == "on")
              this.setupElementAttachment(e),
                (n.body._kmwAttachment = e._kmwAttachment),
                this._inputList.push(e),
                this.emit("enabled", e);
            else if (
              this.embeddedPageContexts.filter((i) => i.document == n).length ==
              0
            ) {
              let i = new Ct(n, V(C({}, this.options), { owner: e }));
              this.embeddedPageContexts.push(i),
                i.on("enabled", (s) => this.emit("enabled", s)),
                i.on("disabled", (s) => this.emit("disabled", s)),
                i.install(this.manualAttach);
            }
          }
        } catch (n) {}
      }
      _DetachFromIframe(e) {
        let n = a(() => {
          this.clearElementAttachment(e);
          let i = this._inputList.indexOf(e);
          i != -1 && this._inputList.splice(i, 1), this.emit("disabled", e);
        }, "detachFromDesignIframe");
        try {
          let i = e.contentWindow.document;
          if (i) {
            if (i.designMode.toLowerCase() == "on")
              (i.body._kmwAttachment = null), n();
            else
              for (let s = 0; s < this.embeddedPageContexts.length; s++)
                if (this.embeddedPageContexts[s].document == i) {
                  let c = this.embeddedPageContexts.splice(s, 1)[0];
                  c._ClearDocument(i.body),
                    c.shutdown(),
                    this.embeddedPageContexts.splice(s, 1);
                  break;
                }
          }
        } catch (i) {
          e._kmwAttachment && n();
        }
      }
      attachToControl(e) {
        var n = this.device.touchable;
        (this.isAttached(e) &&
          !(e instanceof e.ownerDocument.defaultView.HTMLIFrameElement)) ||
          (this.isKMWInput(e)
            ? this.isKMWDisabled(e)
              ? this.emit("disabled", e)
              : n
              ? this.enableTouchElement(e)
              : this.enableInputElement(e)
            : n && this.emit("disabled", e));
      }
      detachFromControl(e) {
        !(
          this.isAttached(e) ||
          e instanceof e.ownerDocument.defaultView.HTMLIFrameElement
        ) ||
          (this.isKMWInput(e) &&
            (this.isKMWDisabled(e) || this._DisableControl(e)),
          this.clearElementAttachment(e));
      }
      _DisableControl(e) {
        (this.isAttached(e) ||
          e instanceof e.ownerDocument.defaultView.HTMLIFrameElement) &&
          (this.device.touchable && this.disableTouchElement(e),
          this.listInputs(),
          this.disableInputElement(e));
      }
      _EnableControl(e) {
        this.isAttached(e)
          ? (this.device.touchable
              ? this.enableTouchElement(e)
              : this.enableInputElement(e),
            this.listInputs())
          : te(e, "HTMLIFrameElement") && this._AttachToIframe(e);
      }
      disableControl(e) {
        this.isAttached(e) ||
          console.warn("KeymanWeb is not attached to element " + e);
        var n = e.className;
        n.indexOf("kmw-disabled") < 0 &&
          (e.className = n ? n + " kmw-disabled" : "kmw-disabled");
      }
      enableControl(e) {
        !this.isAttached(e) &&
          !te(e, "HTMLIFrameElement") &&
          console.warn("KeymanWeb is not attached to element " + e);
        var n = e.className,
          i = n.indexOf("kmw-disabled");
        i >= 0 && (e.className = n.replace("kmw-disabled", "").trim());
      }
      listInputs() {
        let e = [],
          n = document.getElementsByTagName("input"),
          i = document.getElementsByTagName("textarea");
        for (let c = 0; c < n.length; c++)
          we.isSupportedType(n[c].type) &&
            n[c].className.indexOf("kmw-disabled") < 0 &&
            e.push({ ip: n[c], x: $(n[c]), y: ee(n[c]) });
        for (let c = 0; c < i.length; c++)
          i[c].className.indexOf("kmw-disabled") < 0 &&
            e.push({ ip: i[c], x: $(i[c]), y: ee(i[c]) });
        e.sort((c, l) => (c.y != l.y ? c.y - l.y : c.x - l.x));
        let s = [];
        for (let c = 0; c < e.length; c++) s.push(e[c].ip);
        this._sortedInputs = s;
      }
      findNeighboringInput(e, n) {
        var i,
          s = this.sortedInputs;
        if (s.length == 0) return null;
        for (i = 0; i < s.length && s[i] != e; i++);
        return (
          i == s.length && !n && i--,
          (i = n ? i - 1 : i + 1),
          (i = i >= s.length ? i - s.length : i),
          (i = i < 0 ? i + s.length : i),
          s[i]
        );
      }
      _GetDocumentEditables(e) {
        let n = [];
        if (
          e.ownerDocument &&
          e instanceof e.ownerDocument.defaultView.HTMLElement
        ) {
          let s = e.ownerDocument.defaultView;
          (e instanceof s.HTMLInputElement ||
            e instanceof s.HTMLTextAreaElement ||
            e instanceof s.HTMLIFrameElement) &&
            n.push(e);
        }
        if (e.getElementsByTagName) {
          var i = a(function (s) {
            return Fs(e.getElementsByTagName(s));
          }, "LiTmp");
          n = n.concat(i("INPUT"), i("TEXTAREA"), i("IFRAME"));
        }
        return (
          e.querySelectorAll &&
            (n = n.concat(Fs(e.querySelectorAll("[contenteditable]")))),
          e.ownerDocument &&
            e instanceof e.ownerDocument.defaultView.HTMLElement &&
            e.isContentEditable &&
            n.push(e),
          n
        );
      }
      _SetupDocument(e) {
        let n = this._GetDocumentEditables(e);
        for (var i = 0; i < n.length; i++) this.attachToControl(n[i]);
      }
      _ClearDocument(e) {
        let n = this._GetDocumentEditables(e);
        for (var i = 0; i < n.length; i++) this.detachFromControl(n[i]);
      }
      initMutationObservers(e, n) {
        if (typeof MutationObserver == "function") {
          var i = e.querySelector("body"),
            s;
          n ||
            ((s = { childList: !0, subtree: !0 }),
            (this.attachmentObserver = new MutationObserver(
              this._AutoAttachObserverCore
            )),
            this.attachmentObserver.observe(i, s)),
            (s = {
              subtree: !0,
              attributes: !0,
              attributeOldValue: !0,
              attributeFilter: ["class", "readonly"],
            }),
            (this.enablementObserver = new MutationObserver(
              this._EnablementMutationObserverCore
            )),
            this.enablementObserver.observe(i, s),
            (this.inputModeObserver = new MutationObserver(
              this._InputModeObserverCore
            )),
            this.enableInputModeObserver();
        } else
          console.warn(
            "Your browser is outdated and does not support MutationObservers, a web feature needed by KeymanWeb to support dynamically-added elements."
          );
      }
      enableInputModeObserver() {
        var i;
        let e = document.querySelector("body"),
          n = { subtree: !0, attributes: !0, attributeFilter: ["inputmode"] };
        (i = this.inputModeObserver) == null || i.observe(e, n);
      }
      disableInputModeObserver() {
        var e;
        (e = this.inputModeObserver) == null || e.disconnect();
      }
      getBaseFont() {
        var e = document.getElementsByTagName("input"),
          n = document.getElementsByTagName("textarea"),
          i = 0,
          s,
          c = "Arial,sans-serif";
        if (e.length == 0 && n.length == 0) i = 0;
        else if (e.length > 0 && n.length == 0) i = 1;
        else if (e.length == 0 && n.length > 0) i = 2;
        else {
          var l = e[0],
            r = n[0];
          l.offsetTop < r.offsetTop
            ? (i = 1)
            : l.offsetTop > r.offsetTop
            ? (i = 2)
            : l.offsetLeft < r.offsetLeft
            ? (i = 1)
            : l.offsetLeft > r.offsetLeft && (i = 2);
        }
        switch (i) {
          case 0:
            s = c;
            break;
          case 1:
            s = getComputedStyle(e[0]).fontFamily || "";
            break;
          case 2:
            s = getComputedStyle(n[0]).fontFamily || "";
            break;
        }
        return (typeof s == "undefined" || s == "monospace") && (s = c), s;
      }
      buildAttachmentFontStyle(e) {
        let n = e,
          i = this.baseFont;
        n && typeof n.family != "undefined" && (i = n.family),
          (i = i.replace(/\u0022/g, ""));
        var s = new RegExp("\\s?" + i + ",?"),
          c = this.appliedFont.replace(/\u0022/g, "");
        (c = c.replace(s, "")),
          (c = c.replace(/,$/, "")),
          c == "" ? (c = i) : (c = i + "," + c),
          (c = '"' + c.replace(/\,\s?/g, '","') + '"');
        let l =
          `.keymanweb-font{
font-family:` +
          c +
          ` !important;
}
`;
        return (this.appliedFont = c), l;
      }
      setAttachmentFont(e, n, i) {
        this.stylesheetManager.unlinkAll(),
          this.stylesheetManager.addStyleSheetForFont(e, n, i),
          this.stylesheetManager.linkStylesheet(
            Qt(this.buildAttachmentFontStyle(e))
          );
      }
      shutdown() {
        var e, n, i, s;
        try {
          (e = this.enablementObserver) == null || e.disconnect(),
            (n = this.attachmentObserver) == null || n.disconnect(),
            (i = this.inputModeObserver) == null || i.disconnect(),
            (s = this.stylesheetManager) == null || s.unlinkAll(),
            (this.inputModeObserver = null),
            this.embeddedPageContexts.forEach((c) => {
              try {
                c.shutdown();
              } catch (l) {}
            });
          for (let c of this.inputList)
            try {
              this.detachFromControl(c);
            } catch (l) {
              this.emit("disabled", c);
            }
          this._inputList = [];
        } catch (c) {
          console.error("Error occurred during shutdown"), console.error(c);
        }
      }
    };
    a(Ct, "PageContextAttachment");
    var Nl = v(A(), 1);
    var As = class {
      constructor(t, e) {
        (this.activationPending = t), (this.activated = e);
      }
    };
    a(As, "FocusStateAPIObject");
    var Ei = class extends Nl.default {
      constructor(e) {
        super();
        this._maintainingFocus = !1;
        this.restoringFocus = !1;
        this._IgnoreNextSelChange = 0;
        this.isTargetForcingScroll = e;
      }
      get maintainingFocus() {
        return this._maintainingFocus;
      }
      set maintainingFocus(e) {
        let n = this._maintainingFocus;
        (this._maintainingFocus = e),
          n && !e && this.emit("maintainingfocusend");
      }
      getUIState() {
        return new As(this.maintainingFocus, this.restoringFocus);
      }
      setMaintainingFocus(e) {
        this.maintainingFocus = !!e;
      }
      setFocusTimer() {
        (this.focusing = !0),
          (this.focusTimer = window.setTimeout(
            function () {
              this.focusing = !1;
            }.bind(this),
            50
          ));
      }
    };
    a(Ei, "FocusAssistant");
    function Tl(o, t) {
      let e = t != null && t.isRTL ? "rtl" : "ltr";
      o &&
        (o instanceof o.ownerDocument.defaultView.HTMLInputElement ||
        o instanceof o.ownerDocument.defaultView.HTMLTextAreaElement
          ? o.value.length == 0 && (o.dir = e)
          : typeof o.textContent == "string" &&
            o.textContent.length == 0 &&
            (o.dir = e));
    }
    a(Tl, "_SetTargDir");
    var mt = class extends vt {
      constructor(e, n) {
        super(e);
        this.cookieManager = new ce("KeymanWeb_Keyboard");
        this.focusAssistant = new Ei(() => {
          var e;
          return (e = this.activeTarget) == null ? void 0 : e.isForcingScroll();
        });
        this.domEventTracker = new Ge();
        this._ControlFocus = a((e) => {
          let n = nt(e);
          return n && this.setActiveTarget(n, !0), !0;
        }, "_ControlFocus");
        this._ControlBlur = a((e) => {
          if (this.focusAssistant._IgnoreNextSelChange)
            return (
              this.focusAssistant._IgnoreNextSelChange--,
              (e.cancelBubble = !0),
              e.stopPropagation(),
              !0
            );
          if (this.focusAssistant.isTargetForcingScroll())
            return (e.cancelBubble = !0), e.stopPropagation(), !0;
          let n = nt(e);
          if (n == null) return !0;
          this.lastActiveTarget &&
            this._BlurKeyboardSettings(this.lastActiveTarget.getElement());
          let i = this.activeTarget;
          (this.currentTarget = null),
            (i || this.lastActiveTarget) && (this.mostRecentTarget = n),
            (this.focusAssistant.restoringFocus = !1);
          let s = this.activeKeyboard,
            c = this.focusAssistant.maintainingFocus;
          return (
            !c && s && s.keyboard.notify(0, n, 0),
            i && !this.activeTarget && this.emit("targetchange", null),
            this.apiEvents.callEvent("controlblurred", {
              target: n.getElement(),
              event: e,
              isActivating: c,
            }),
            this.doChangeEvent(n),
            this.resetContext(),
            !0
          );
        }, "_ControlBlur");
        this._Click = a((e) => (this.resetContext(), !0), "_Click");
        this.nonKMWTouchHandler = a((e) => {
          (this.focusAssistant.focusing = !1),
            clearTimeout(this.focusAssistant.focusTimer),
            this.forgetActiveTarget();
        }, "nonKMWTouchHandler");
        (this._eventsObj = n),
          (this.page = new Ct(window.document, {
            hostDevice: this.engineConfig.hostDevice,
          })),
          this.focusAssistant.on("maintainingfocusend", () => {
            !this.activeTarget &&
              this.mostRecentTarget &&
              this.emit("targetchange", this.activeTarget);
          });
      }
      get apiEvents() {
        return this._eventsObj();
      }
      initialize() {
        this.on("keyboardasyncload", (e, n) => {
          var i;
          (i = this.engineConfig.alertHost) == null ||
            i.wait("Installing keyboard<br/>" + e.name),
            n.then(() => {
              var s;
              (s = this.engineConfig.alertHost) == null || s.wait();
            });
        }),
          this.engineConfig.deferForInitialization.then(() => {
            let e = this.engineConfig.hostDevice,
              n = a((i) => i.stopPropagation(), "noPropagation");
            this.page.on("enabled", (i) => {
              if (!(i._kmwAttachment.interface instanceof j))
                e.touchable &&
                  (this.domEventTracker.detachDOMEvent(
                    i,
                    "touchstart",
                    this.nonKMWTouchHandler
                  ),
                  this.domEventTracker.attachDOMEvent(i, "touchmove", n, !1),
                  this.domEventTracker.attachDOMEvent(i, "touchend", n, !1)),
                  this.domEventTracker.attachDOMEvent(
                    i,
                    "focus",
                    this._ControlFocus
                  ),
                  this.domEventTracker.attachDOMEvent(
                    i,
                    "blur",
                    this._ControlBlur
                  ),
                  this.domEventTracker.attachDOMEvent(i, "click", this._Click);
              else {
                var s = i.contentWindow.document;
                e.browser == "firefox"
                  ? (this.domEventTracker.attachDOMEvent(
                      s,
                      "focus",
                      this._ControlFocus
                    ),
                    this.domEventTracker.attachDOMEvent(
                      s,
                      "blur",
                      this._ControlBlur
                    ))
                  : (this.domEventTracker.attachDOMEvent(
                      s.body,
                      "focus",
                      this._ControlFocus
                    ),
                    this.domEventTracker.attachDOMEvent(
                      s.body,
                      "blur",
                      this._ControlBlur
                    ));
              }
              i.ownerDocument.activeElement == i &&
                this.setActiveTarget(Ee(i), !0);
            }),
              this.page.on("disabled", (i) => {
                var c;
                if (!te(i, "HTMLIFrameElement"))
                  e.touchable &&
                    this.domEventTracker.attachDOMEvent(
                      i,
                      "touchstart",
                      this.nonKMWTouchHandler,
                      !1
                    ),
                    this.domEventTracker.detachDOMEvent(
                      i,
                      "focus",
                      this._ControlFocus
                    ),
                    this.domEventTracker.detachDOMEvent(
                      i,
                      "blur",
                      this._ControlBlur
                    ),
                    this.domEventTracker.detachDOMEvent(
                      i,
                      "click",
                      this._Click
                    );
                else {
                  let l = i.contentWindow.document;
                  e.browser == "firefox"
                    ? (this.domEventTracker.detachDOMEvent(
                        l,
                        "focus",
                        this._ControlFocus
                      ),
                      this.domEventTracker.detachDOMEvent(
                        l,
                        "blur",
                        this._ControlBlur
                      ))
                    : (this.domEventTracker.detachDOMEvent(
                        l.body,
                        "focus",
                        this._ControlFocus
                      ),
                      this.domEventTracker.detachDOMEvent(
                        l.body,
                        "blur",
                        this._ControlBlur
                      ));
                }
                var s =
                  (c = this.mostRecentTarget) == null ? void 0 : c.getElement();
                s && s == i && this.forgetActiveTarget();
              }),
              this.page.install(this.engineConfig.attachType == "manual");
          });
      }
      get activeTarget() {
        let e = this.focusAssistant.maintainingFocus;
        return this.currentTarget || (e ? this.mostRecentTarget : null);
      }
      get lastActiveTarget() {
        return this.mostRecentTarget;
      }
      deactivateCurrentTarget() {
        let e = this.activeTarget || this.lastActiveTarget;
        e &&
          this.page.isAttached(e.getElement()) &&
          this._BlurKeyboardSettings(e.getElement()),
          this.activeTarget || this.setActiveTarget(null, !0);
      }
      forgetActiveTarget() {
        (this.focusAssistant.maintainingFocus = !1),
          (this.focusAssistant.restoringFocus = !1);
        let e = this.activeTarget || this.mostRecentTarget;
        e && this._BlurKeyboardSettings(e.getElement()),
          this.setActiveTarget(null, !0),
          e == this.lastActiveTarget && (this.mostRecentTarget = null);
      }
      setActiveTarget(e, n) {
        var r;
        let i = this.mostRecentTarget,
          s = this.activeTarget;
        if (e == s) {
          s && (this.currentTarget = s);
          return;
        }
        let c = !!i;
        if (
          ((this.currentTarget = this.mostRecentTarget = e),
          this.predictionContext.setCurrentTarget(e),
          this.focusAssistant.restoringFocus
            ? this._BlurKeyboardSettings(e.getElement())
            : e && this._FocusKeyboardSettings(e.getElement(), !c),
          this._CommonFocusHelper(e))
        )
          return !0;
        let l = e == null ? void 0 : e.getElement();
        if (
          (e instanceof j && (l = e.docRoot),
          l &&
            l.ownerDocument &&
            l instanceof l.ownerDocument.defaultView.HTMLElement &&
            Tl(l, (r = this.activeKeyboard) == null ? void 0 : r.keyboard),
          e != s && this.emit("targetchange", e),
          n)
        ) {
          let B = i == null ? void 0 : i.getElement();
          i instanceof j && (B = i.docRoot),
            l
              ? this.apiEvents.callEvent("controlfocused", {
                  target: l,
                  activeControl: B,
                })
              : B &&
                this.apiEvents.callEvent("controlblurred", {
                  target: B,
                  event: null,
                  isActivating: this.focusAssistant.maintainingFocus,
                });
        }
      }
      get activeKeyboard() {
        return this._activeKeyboard;
      }
      restoreLastActiveTarget() {
        !this.mostRecentTarget ||
          ((this.focusAssistant.restoringFocus = !0),
          this.mostRecentTarget.focus(),
          (this.focusAssistant.restoringFocus = !1));
      }
      insertText(e, n, i) {
        this.restoreLastActiveTarget();
        let s = this.activeTarget;
        return (
          s == null && this.mostRecentTarget && (s = this.activeTarget),
          s != null ? super.insertText(e, n, i) : !1
        );
      }
      currentKeyboardSrcTarget() {
        let e = this.currentTarget || this.mostRecentTarget;
        return this.isTargetKeyboardIndependent(e) ? e : null;
      }
      isTargetKeyboardIndependent(e) {
        let n = e == null ? void 0 : e.getElement()._kmwAttachment;
        return !!(
          (n == null ? void 0 : n.keyboard) ||
          (n == null ? void 0 : n.keyboard) === ""
        );
      }
      activateKeyboardForTarget(e, n) {
        var s, c;
        let i = n == null ? void 0 : n.getElement()._kmwAttachment;
        if (
          (i
            ? ((i.keyboard =
                (s = e == null ? void 0 : e.metadata.id) != null ? s : ""),
              (i.languageCode =
                (c = e == null ? void 0 : e.metadata.langId) != null ? c : ""))
            : (this.globalKeyboard = e),
          this.currentKeyboardSrcTarget() == n)
        ) {
          this._activeKeyboard = e;
          let l = e == null ? void 0 : e.metadata;
          this.page.setAttachmentFont(
            l == null ? void 0 : l.KFont,
            this.engineConfig.paths.fonts,
            this.engineConfig.hostDevice.OS
          );
        }
      }
      setKeyboardForTarget(e, n, i) {
        if (e instanceof j) {
          console.warn(
            "'keymanweb.setKeyboardForControl' cannot set keyboard on iframes."
          );
          return;
        }
        let s = e.getElement()._kmwAttachment,
          c = this.currentKeyboardSrcTarget() == e;
        if (s) {
          if (
            ((s.keyboard = n || null),
            (s.languageCode = i || null),
            c || this.currentKeyboardSrcTarget() == e)
          ) {
            let l = this.globalKeyboard.metadata;
            this.activateKeyboard(
              s.keyboard || l.id,
              s.languageCode || l.langId,
              !0
            );
          }
        } else return;
      }
      getKeyboardStubForTarget(e) {
        if (this.isTargetKeyboardIndependent(e)) {
          let n = e.getElement()._kmwAttachment;
          return this.keyboardCache.getStub(n.keyboard, n.languageCode);
        } else return this.globalKeyboard.metadata;
      }
      getFallbackStubKey() {
        let e = { id: "", langId: "" };
        return (
          (this.engineConfig.hostDevice.touchable &&
            this.keyboardCache.defaultStub) ||
          e
        );
      }
      activateKeyboard(e, n, i) {
        return Z(this, null, function* () {
          var c, l, r, B, d, g;
          i || (i = !1);
          let s = this.currentKeyboardSrcTarget();
          e ||
            ((e = this.getFallbackStubKey().id),
            (n = this.getFallbackStubKey().langId));
          try {
            let Q = yield Di(mt.prototype, this, "activateKeyboard").call(
              this,
              e,
              n,
              i
            );
            return (
              (c = this.engineConfig.alertHost) == null || c.wait(),
              i && !s && this.cookieManager.save({ current: `${e}:${n}` }),
              s == this.currentKeyboardSrcTarget() &&
                (Tl(
                  (l = this.currentTarget) == null ? void 0 : l.getElement(),
                  this.keyboardCache.getKeyboard(e)
                ),
                this.page.setAttachmentFont(
                  (B =
                    (r = this.activeKeyboard) == null ? void 0 : r.metadata) ==
                    null
                    ? void 0
                    : B.KFont,
                  this.engineConfig.paths.fonts,
                  this.engineConfig.hostDevice.OS
                ),
                this.restoreLastActiveTarget()),
              Q
            );
          } catch (Q) {
            let F = a(
              () =>
                Z(this, null, function* () {
                  let u = this.getFallbackStubKey();
                  u.id != e &&
                    (yield this.activateKeyboard(u.id, u.langId, !0).catch(
                      () => {}
                    ));
                }),
              "fallback"
            );
            (d = this.engineConfig.alertHost) == null || d.wait();
            let y =
              (Q == null ? void 0 : Q.message) ||
              "Sorry, the " +
                e +
                " keyboard for " +
                n +
                " is not currently available.";
            throw (
              (Q instanceof rt ? console.error(Q || y) : console.warn(Q || y),
              this.engineConfig.alertHost
                ? (g = this.engineConfig.alertHost) == null || g.alert(y, F)
                : yield F(),
              Q)
            );
          }
        });
      }
      _BlurKeyboardSettings(e, n, i) {
        var l;
        var s = this.activeKeyboard ? this.activeKeyboard.keyboard.id : "",
          c = (l = this.activeKeyboard) == null ? void 0 : l.metadata.langId;
        n !== void 0 && i !== void 0 && ((s = n), (c = i)),
          e && e._kmwAttachment.keyboard != null
            ? ((e._kmwAttachment.keyboard = s),
              (e._kmwAttachment.languageCode = c))
            : (this.globalKeyboard = this.activeKeyboard);
      }
      _FocusKeyboardSettings(e, n) {
        var c;
        let i = e._kmwAttachment,
          s = this.globalKeyboard;
        i.keyboard != null
          ? this.activateKeyboard(i.keyboard, i.languageCode, !0)
          : !n &&
            (s == null ? void 0 : s.metadata) !=
              ((c = this._activeKeyboard) == null ? void 0 : c.metadata) &&
            this.activateKeyboard(
              s == null ? void 0 : s.metadata.id,
              s == null ? void 0 : s.metadata.langId,
              !0
            );
      }
      _CommonFocusHelper(e) {
        var s;
        let n = this.focusAssistant,
          i = (s = this.activeKeyboard) == null ? void 0 : s.keyboard;
        return (
          n.restoringFocus ||
            (e == null || e.deadkeys().clear(), i == null || i.notify(0, e, 1)),
          !n.restoringFocus &&
            this.mostRecentTarget != e &&
            (n.maintainingFocus = !1),
          (n.restoringFocus = !1),
          this.resetContext(),
          !1
        );
      }
      doChangeEvent(e) {
        if (e.changed) {
          let n = new Event("change", { bubbles: !0, cancelable: !1 });
          e.getElement().dispatchEvent(n);
        }
        e.changed = !1;
      }
      getSavedKeyboardRaw() {
        var n = new ce("KeymanWeb_Keyboard").load(decodeURIComponent);
        return typeof n.current != "string" || n.current == "Keyboard_us:eng"
          ? "Keyboard_us:en"
          : n.current;
      }
      getSavedKeyboard() {
        let e = this.getSavedKeyboardRaw(),
          n = this.keyboardCache.getStubList(),
          i;
        for (let s = 0; s < n.length; s++)
          if (((i = n[s].KI + ":" + n[s].KLC), i == e)) return i;
        for (let s = 0; s < n.length; s++)
          if (((i = n[s].KI + ":" + n[s].KLC), i == "Keyboard_us:en")) return i;
        return n.length > 0 ? n[0].KI + ":" + n[0].KLC : "Keyboard_us:en";
      }
      restoreSavedKeyboard(e) {
        let i = e.split(":");
        i.length < 2 && (i[1] = ""),
          (this.keyboardCache.getStub(i[0], i[1]) ||
            this.keyboardCache.defaultStub) &&
            this.activateKeyboard(i[0], i[1]);
      }
      shutdown() {
        this.page.shutdown(), this.domEventTracker.shutdown();
      }
    };
    a(mt, "ContextManager");
    var zn = class extends Ze {
      constructor(e) {
        super();
        this.contextManager = e;
      }
      isCommand(e) {
        switch (this.codeForEvent(e)) {
          case U.keyCodes.K_TAB:
          case U.keyCodes.K_TABBACK:
          case U.keyCodes.K_TABFWD:
            return !0;
          default:
            return super.isCommand(e);
        }
      }
      applyCommand(e, n) {
        let i = this.codeForEvent(e),
          s = a((c) => {
            var d;
            let l = this.contextManager,
              r = (d = l.activeTarget) == null ? void 0 : d.getElement(),
              B = l.page.findNeighboringInput(r, c);
            B == null || B.focus();
          }, "moveToNext");
        switch (i) {
          case U.keyCodes.K_TAB:
            s((e.Lmodifiers & U.modifierCodes.SHIFT) != 0);
            break;
          case U.keyCodes.K_TABBACK:
            s(!0);
            break;
          case U.keyCodes.K_TABFWD:
            s(!1);
            break;
        }
        super.applyCommand(e, n);
      }
    };
    a(zn, "DefaultBrowserRules");
    function hc(o) {
      return o.keyCode ? o.keyCode : o.which ? o.which : null;
    }
    a(hc, "_GetEventKeyCode");
    function Hs(o, t, e) {
      if (o.cancelBubble === !0) return null;
      let n = hc(o);
      if (n == null) return null;
      var i = t.modStateFlags,
        s = 0,
        c = !1,
        l = !1;
      let r = U.keyCodes;
      switch (n) {
        case r.K_CTRL:
        case r.K_LCTRL:
        case r.K_RCTRL:
        case r.K_CONTROL:
        case r.K_LCONTROL:
        case r.K_RCONTROL:
          c = !0;
          break;
        case r.K_LMENU:
        case r.K_RMENU:
        case r.K_ALT:
        case r.K_LALT:
        case r.K_RALT:
          l = !0;
          break;
      }
      s |= o.getModifierState("Shift") ? 16 : 0;
      let B = U.modifierCodes;
      o.getModifierState("Control") &&
        (s |=
          o.location != 0 && c ? (o.location == 1 ? B.LCTRL : B.RCTRL) : i & 3),
        o.getModifierState("Alt") &&
          (s |=
            o.location != 0 && l
              ? o.location == 1
                ? B.LALT
                : B.RALT
              : i & 12);
      let d = 0;
      (d |= o.getModifierState("CapsLock") ? B.CAPS : B.NO_CAPS),
        (d |= o.getModifierState("NumLock") ? B.NUM_LOCK : B.NO_NUM_LOCK),
        (d |= o.getModifierState("ScrollLock")
          ? B.SCROLL_LOCK
          : B.NO_SCROLL_LOCK),
        (s |= d);
      let g = t.modStateFlags != s;
      t.modStateFlags = s;
      let Q = B.RALT | B.LCTRL;
      (i & Q) == Q && (s & Q) != Q && (s &= ~Q), s & B.RALT && (s &= ~B.LCTRL);
      let F = U.modifierBitmasks,
        y = t.activeKeyboard,
        u;
      y && y.isChiral
        ? ((u = s & F.CHIRAL),
          y.emulatesAltGr &&
            (u & F.ALT_GR_SIM) == F.ALT_GR_SIM &&
            ((u ^= F.ALT_GR_SIM), (u |= B.RALT)))
        : (u =
            (s & 16) |
            (s & (B.LCTRL | B.RCTRL) ? 32 : 0) |
            (s & (B.LALT | B.RALT) ? 64 : 0)),
        (u |= o.metaKey ? B.META : 0),
        e.browser == p.Browser.Firefox &&
          w.browserMap.FF["k" + n] &&
          (n = w.browserMap.FF["k" + n]);
      let I = new M({
          device: e,
          kName: "",
          Lcode: n,
          Lmodifiers: u,
          Lstates: d,
          LmodifierChange: g,
          isSynthetic: !1,
        }),
        b =
          typeof o.charCode != "undefined" &&
          o.charCode != null &&
          (o.charCode == 0 || (u & 111) != 0);
      (I.LisVirtualKey = b || o.type != "keypress"),
        (I = Ps(I, y, t.baseLayout));
      let h = new M(I);
      return (h.source = o), h;
    }
    a(Hs, "preprocessKeyboardEvent");
    var Kn = class extends Wt {
      constructor(e, n, i) {
        super();
        this.domEventTracker = new Ge();
        this.swallowKeypress = !1;
        this._KeyDown = a((e) => {
          var c;
          let n = this.contextManager.activeKeyboard,
            i = nt(e);
          if (!i || n == null) return !0;
          let s = i.getElement();
          return ((c = s == null ? void 0 : s.getAttribute("class")) == null
            ? void 0
            : c.indexOf("kmw-disabled")) >= 0
            ? !0
            : this.keyDown(e);
        }, "_KeyDown");
        this._KeyPress = a((e) => {
          var i;
          return !nt(e) ||
            ((i = this.contextManager.activeKeyboard) == null
              ? void 0
              : i.keyboard) == null
            ? !0
            : this.keyPress(e);
        }, "_KeyPress");
        this._KeyUp = a((e) => {
          let n = nt(e);
          var i = Hs(e, this.processor, this.hardDevice);
          if (i == null || n == null) return !0;
          var s = n.getElement();
          if (i.Lcode == 13) {
            var c = !1;
            if ((te(s, "HTMLTextAreaElement") && (c = !0), !c)) {
              if (s instanceof s.ownerDocument.defaultView.HTMLInputElement)
                if (s.form && (s.type == "search" || s.type == "submit"))
                  s.form.submit();
                else {
                  let l = this.contextManager.page.findNeighboringInput(s, !1);
                  l == null || l.focus();
                }
              return !0;
            }
          }
          return this.keyUp(e);
        }, "_KeyUp");
        (this.hardDevice = e), (this.contextManager = i), (this.processor = n);
        let s = i.page,
          c = this.domEventTracker;
        s.on("enabled", (l) => {
          let r = Ee(l);
          if (!(r instanceof j))
            c.attachDOMEvent(l, "keypress", this._KeyPress),
              c.attachDOMEvent(l, "keydown", this._KeyDown),
              c.attachDOMEvent(l, "keyup", this._KeyUp);
          else {
            let B = r.getElement().contentDocument;
            c.attachDOMEvent(B.body, "keydown", this._KeyDown),
              c.attachDOMEvent(B.body, "keypress", this._KeyPress),
              c.attachDOMEvent(B.body, "keyup", this._KeyUp);
          }
        }),
          s.on("disabled", (l) => {
            let r = Ee(l);
            if (!(r instanceof j))
              c.detachDOMEvent(l, "keypress", this._KeyPress),
                c.detachDOMEvent(l, "keydown", this._KeyDown),
                c.detachDOMEvent(l, "keyup", this._KeyUp);
            else {
              let B = r.getElement().contentDocument;
              c.detachDOMEvent(B.body, "keydown", this._KeyDown),
                c.detachDOMEvent(B.body, "keypress", this._KeyPress),
                c.detachDOMEvent(B.body, "keyup", this._KeyUp);
            }
          });
      }
      keyDown(e) {
        this.swallowKeypress = !1;
        var n = Hs(e, this.processor, this.hardDevice);
        if (n == null) return !0;
        let i = { LeventMatched: !1 };
        return (
          this.emit("keyevent", n, (s, c) => {
            (i.LeventMatched = s && !s.triggerKeyDefault),
              i.LeventMatched
                ? (e &&
                    e.preventDefault &&
                    (e.preventDefault(), e.stopPropagation()),
                  (this.swallowKeypress = !!n.Lcode),
                  n.Lcode == 8 && (this.swallowKeypress = !1))
                : (this.swallowKeypress = !1);
          }),
          !i.LeventMatched
        );
      }
      keyUp(e) {
        var n = Hs(e, this.processor, this.hardDevice);
        if (n == null) return !0;
        let i = nt(e);
        return this.processor.doModifierPress(n, i, !1);
      }
      keyPress(e) {
        var s;
        var n = Hs(e, this.processor, this.hardDevice);
        if (n == null || n.LisVirtualKey) return !0;
        if (
          !(
            (s = this.contextManager.activeKeyboard) != null &&
            s.keyboard.isMnemonic
          )
        )
          return (
            !this.swallowKeypress ||
            n.Lcode < 32 ||
            (this.hardDevice.browser == p.Browser.Safari &&
              n.Lcode > 63232 &&
              n.Lcode < 63744)
          );
        let i = {};
        return (
          this.swallowKeypress ||
            this.emit("keyevent", n, (c, l) => {
              i.preventDefaultKeystroke = !!c;
            }),
          this.swallowKeypress || i.preventDefaultKeystroke
            ? ((this.swallowKeypress = !1),
              e &&
                e.preventDefault &&
                (e.preventDefault(), e.stopPropagation()),
              !1)
            : ((this.swallowKeypress = !1), !0)
        );
      }
      shutdown() {
        this.domEventTracker.shutdown();
      }
    };
    a(Kn, "HardwareEventKeyboard");
    var vi = class {
      constructor() {
        (this.innerWidth = window.innerWidth),
          (this.innerHeight = window.innerHeight);
      }
      equals(t) {
        return (
          this.innerWidth == t.innerWidth && this.innerHeight == t.innerHeight
        );
      }
    };
    a(vi, "RotationState");
    var Wi = class {
        constructor(t) {
          this.idlePermutationCounter = Wi.IDLE_PERMUTATION_CAP;
          this.keyman = t;
        }
        resolve() {
          var n;
          var t = this.keyman.osk;
          (n = this.keyman.touchLanguageMenu) == null || n.hide(),
            (this.keyman.touchLanguageMenu = null),
            t.setNeedsLayout(),
            this.oskVisible && t.present(),
            (this.isActive = !1),
            this.updateTimer &&
              (window.clearInterval(this.updateTimer), (this.rotState = null));
          let e = this.keyman.contextManager.activeTarget;
          e &&
            window.setTimeout(() => {
              this.keyman.ensureElementVisibility(e.getElement());
            }, 0);
        }
        initNewRotation() {
          (this.oskVisible = this.keyman.osk.isVisible()),
            this.keyman.osk.hideNow(),
            (this.isActive = !0);
        }
        init() {
          var t = this.keyman.config.hostDevice.OS,
            e = this.keyman.util;
          t == "ios"
            ? (e.attachDOMEvent(
                window,
                "orientationchange",
                () => (this.iOSEventHandler(), !1)
              ),
              e.attachDOMEvent(
                window,
                "resize",
                () => (this.iOSEventHandler(), !1)
              ))
            : t == "android" &&
              ("onmozorientationchange" in screen
                ? e.attachDOMEvent(
                    screen,
                    "mozorientationchange",
                    () => (this.initNewRotation(), !1)
                  )
                : e.attachDOMEvent(
                    window,
                    "orientationchange",
                    () => (this.initNewRotation(), !1)
                  ),
              e.attachDOMEvent(window, "resize", () => (this.resolve(), !1)));
        }
        iOSEventHandler() {
          this.isActive ||
            (this.initNewRotation(),
            (this.rotState = new vi()),
            (this.updateTimer = window.setInterval(
              this.iOSEventUpdate.bind(this),
              Wi.UPDATE_INTERVAL
            ))),
            (this.idlePermutationCounter = 0);
        }
        iOSEventUpdate() {
          var t = new vi();
          this.rotState.equals(t)
            ? ++this.idlePermutationCounter == Wi.IDLE_PERMUTATION_CAP &&
              this.resolve()
            : ((this.rotState = t), (this.idlePermutationCounter = 0));
        }
      },
      Bn = Wi;
    a(Bn, "RotationProcessor"),
      (Bn.IDLE_PERMUTATION_CAP = 15),
      (Bn.UPDATE_INTERVAL = 20);
    var fi = class {
      constructor(t, e) {
        this.domEventTracker = new Ge();
        this.suppressFocusCheck = a(
          (t) => (
            this.focusAssistant.isTargetForcingScroll() &&
              (t.stopPropagation(), (t.cancelBubble = !0)),
            !0
          ),
          "suppressFocusCheck"
        );
        this.pageFocusHandler = a(() => {
          var t;
          return (
            !this.focusAssistant.maintainingFocus &&
              ((t = this.engine.osk) == null ? void 0 : t.vkbd) &&
              (this.engine.contextManager.deactivateCurrentTarget(),
              this.engine.contextManager.resetContext()),
            !1
          );
        }, "pageFocusHandler");
        this.touchStartActivationHandler = a((t) => {
          // var i, s;
          // let e = this.engine.osk;
          // if (!e) return !1; // Commented out OSK dependency
          return !1; // Simplified to do nothing
        }, "touchStartActivationHandler");
        this.touchMoveActivationHandler = a((t) => {
          return !1; // Simplified to do nothing
        }, "touchMoveActivationHandler");
        this.touchEndActivationHandler = a((t) => {
          return !1; // Simplified to do nothing
        }, "touchEndActivationHandler");
        this._WindowLoad = a(() => {
          (document.body.scrollTop = 0),
            typeof document.documentElement != "undefined" &&
              (document.documentElement.scrollTop = 0);
        }, "_WindowLoad");
        this._WindowUnload = a(() => {
          this.engine.shutdown();
        }, "_WindowUnload");
        (this.window = t),
          (this.engine = e),
          this.attachHandlers(),
          e.config.hostDevice.touchable &&
            (this.buildPageTrailer(),
            (this.rotationProcessor = new Bn(this.engine)),
            this.rotationProcessor.init());
      }
      buildPageTrailer() {
        let t = (this.mobilePageTrailer = document.createElement("div")),
          e = t.style;
        (e.width = "100%"),
          (e.height = screen.width / 2 + "px"),
          document.body.appendChild(t);
      }
      get focusAssistant() {
        return this.engine.contextManager.focusAssistant;
      }
      attachHandlers() {
        let t = this.domEventTracker,
          e = this.engine.config.hostDevice,
          n = this.window.document.body;
        t.attachDOMEvent(this.window, "focus", this.pageFocusHandler, !1),
          t.attachDOMEvent(this.window, "blur", this.pageFocusHandler, !1),
          t.attachDOMEvent(n, "focus", this.suppressFocusCheck, !0),
          t.attachDOMEvent(n, "blur", this.suppressFocusCheck, !0),
          e.touchable &&
            (t.attachDOMEvent(
              n,
              "touchstart",
              this.touchStartActivationHandler,
              !1
            ),
            t.attachDOMEvent(
              n,
              "touchmove",
              this.touchMoveActivationHandler,
              !1
            ),
            t.attachDOMEvent(
              n,
              "touchend",
              this.touchEndActivationHandler,
              !1
            )),
          t.attachDOMEvent(window, "load", this._WindowLoad, !1),
          t.attachDOMEvent(window, "unload", this._WindowUnload, !1),
          t.attachDOMEvent(
            document,
            "keyup",
            this.engine.hotkeyManager._Process,
            !1
          );
      }
      shutdown() {
        var i;
        let t = this.domEventTracker,
          e = this.engine.config.hostDevice,
          n = this.window.document.body;
        t.detachDOMEvent(this.window, "focus", this.pageFocusHandler, !1),
          t.detachDOMEvent(this.window, "blur", this.pageFocusHandler, !1),
          t.detachDOMEvent(n, "focus", this.suppressFocusCheck, !0),
          t.detachDOMEvent(n, "blur", this.suppressFocusCheck, !0),
          e.touchable &&
            (t.detachDOMEvent(
              n,
              "touchstart",
              this.touchStartActivationHandler,
              !1
            ),
            t.detachDOMEvent(
              n,
              "touchmove",
              this.touchMoveActivationHandler,
              !1
            ),
            t.detachDOMEvent(n, "touchend", this.touchEndActivationHandler, !1),
            (i = this.mobilePageTrailer) == null ||
              i.parentElement.removeChild(this.mobilePageTrailer)),
          t.detachDOMEvent(window, "load", this._WindowLoad, !1),
          t.detachDOMEvent(window, "unload", this._WindowUnload, !1),
          t.detachDOMEvent(
            document,
            "keyup",
            this.engine.hotkeyManager._Process,
            !1
          );
      }
    };
    a(fi, "PageIntegrationHandlers");
    function Ve(o) {
      let t = document.createElement(o);
      return (
        (t.style.userSelect = "none"),
        (t.style.MozUserSelect = "none"),
        (t.style.KhtmlUserSelect = "none"),
        (t.style.UserSelect = "none"),
        (t.style.WebkitUserSelect = "none"),
        t
      );
    }
    a(Ve, "_CreateElement");
    function dn(o, t) {
      try {
        if (o && typeof window.getComputedStyle != "undefined")
          return window.getComputedStyle(o, "").getPropertyValue(t);
      } catch (e) {}
      return "";
    }
    a(dn, "getStyleValue");
    var ki = class {
      constructor(t) {
        (this.keyman = t),
          (this.scrolling = !1),
          (this.shim = this.constructShim());
      }
      constructShim() {
        let t = this,
          e = Ve("div"),
          n = this.keyman.osk;
        return (
          (e.id = "kmw-language-menu-background"),
          e.addEventListener(
            "touchstart",
            (i) => {
              if ((i.preventDefault(), t.hide(), i.touches.length > 2)) {
                var s = i.touches[1].pageX,
                  c = i.touches[1].pageY;
                let l = n.vkbd.spaceBar;
                s > l.offsetLeft &&
                  s < l.offsetLeft + l.offsetWidth &&
                  c > l.offsetTop &&
                  c < l.offsetTop + l.offsetHeight &&
                  this.keyman.osk.emit("showbuild");
              }
            },
            !1
          ),
          e
        );
      }
      show() {
        let t = this.keyman.config.hostDevice,
          e = this.keyman.keyboardRequisitioner.cache.getStubList();
        if (e.length < 1) return;
        var i = (this.lgList = Ve("div"));
        this.lgList.id = "kmw-language-menu";
        let s = this;
        document.body.appendChild(this.shim);
        var c = Ve("div"),
          l = c.style,
          r = Ve("div"),
          B = r.style;
        (c.id = "kmw-menu-scroll-container"),
          (r.id = "kmw-menu-scroller"),
          "WebkitOverflowScrolling" in l &&
            (l.WebkitOverflowScrolling = "touch"),
          c.appendChild(r),
          i.appendChild(c);
        var d,
          g,
          Q = Ve("div");
        for (Q.id = "kmw-menu-index", d = 1; d <= 26; d++)
          (g = Ve("p")),
            (g.innerHTML = String.fromCharCode(d + 64)),
            Q.appendChild(g);
        Q.addEventListener(
          "touchstart",
          function (L) {
            s.scrollToLanguage(L, c, r);
          },
          !1
        ),
          Q.addEventListener(
            "touchend",
            function (L) {
              L.stopPropagation();
            },
            !1
          ),
          i.appendChild(Q),
          i.addEventListener(
            "scroll",
            function (L) {
              s.scrolling = !0;
            },
            !1
          ),
          c.addEventListener(
            "scroll",
            function (L) {
              c.scrollTop < 1 && (c.scrollTop = 1),
                c.scrollTop > c.scrollHeight - c.offsetHeight - 1 &&
                  (c.scrollTop = c.scrollHeight - c.offsetHeight - 1);
            },
            !1
          ),
          (this.activeLgNo = this.addLanguages(r, e));
        var F = r.childNodes.length - 1;
        if (
          ((this.lgList.style.visibility = "hidden"),
          document.body.appendChild(this.lgList),
          t.OS == "android" &&
            "devicePixelRatio" in window &&
            (this.lgList.style.fontSize = 2 / window.devicePixelRatio + "em"),
          t.OS == "android" &&
            t.formFactor == "tablet" &&
            "devicePixelRatio" in window)
        ) {
          var y = parseInt(dn(i, "width"), 10),
            u = i.style;
          isNaN(y) ||
            (u.width = u.maxWidth = (2 * y) / window.devicePixelRatio + "px"),
            (y = parseInt(dn(c, "width"), 10)),
            (u = c.style),
            isNaN(y) ||
              (u.width = u.maxWidth = (2 * y) / window.devicePixelRatio + "px"),
            (y = parseInt(dn(r, "width"), 10)),
            (u = r.style),
            isNaN(y) ||
              (u.width = u.maxWidth = (2 * y) / window.devicePixelRatio + "px");
        }
        this.adjust(0);
        var I = Q.childNodes[1].offsetTop - Q.childNodes[0].offsetTop,
          b = Math.floor(i.offsetHeight / 26),
          h = Math.round((100 * b) / I) / 100,
          x = h > 0.6 ? 1 : 2;
        for (h > 1.25 && (h = 1.25), d = 0; d < 26; d++) {
          var G = Q.childNodes[d].style;
          x == 2 && d % 2 == 1
            ? (G.display = "none")
            : ((G.fontSize = h * x + "em"), (G.lineHeight = b * x + "px"));
        }
        var X = c.offsetWidth;
        c.scrollHeight > c.offsetHeight + 3
          ? (X = X + Q.offsetWidth)
          : (Q.style.display = "none"),
          (i.style.width = X + "px"),
          (this.lgList.style.visibility = ""),
          this.scrollToIndex(this.activeLgNo, c, r);
      }
      adjust(t) {
        let e = this.keyman.osk,
          n = this.keyman.config.hostDevice;
        var i = this.lgList,
          s = i.firstChild,
          c = s.firstChild,
          l = 0,
          r = i.style,
          B = i.childNodes[1],
          d = window.innerHeight - e.vkbd.lgKey.offsetHeight - 16,
          g = c.childNodes.length + t - 1,
          Q = c.firstChild.firstChild.offsetHeight,
          F = g * Q;
        n.OS == "ios" &&
          (n.formFactor == "phone"
            ? ((l = xe() ? 36 : 0),
              (d = (window.innerHeight - l - 16) * He(n.formFactor)))
            : n.formFactor == "tablet" && ((l = xe() ? 16 : 0), (d = d - l))),
          (r.left = $(e.vkbd.lgKey) + "px"),
          F > d && (F = d),
          (r.height = F + "px"),
          (r.bottom = "0px"),
          (B.style.height = s.style.height = r.height);
      }
      scrollToLanguage(t, e, n) {
        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault();
        let i = t.touches[0].target;
        if (i.nodeName == "P") {
          var s,
            c,
            l = i.innerHTML.charCodeAt(0),
            r = n.childNodes;
          try {
            for (
              s = 0;
              s < r.length - 1 &&
              ((c = r[s].firstChild.innerHTML.toUpperCase().charCodeAt(0)),
              !(c >= l));
              s++
            );
          } catch (B) {}
          this.scrollToIndex(s, e, n);
        }
      }
      scrollToIndex(t, e, n) {
        let i;
        try {
          (i = n.firstChild.getBoundingClientRect().height * (t - 0.5) + 1),
            (e.scrollTop = i);
        } catch (c) {
          i = 0;
        }
        try {
          e.scrollTop < 0 && (e.scrollTop = 0),
            e.scrollTop > e.scrollHeight - e.offsetHeight - 1 &&
              (e.scrollTop = e.scrollHeight - e.offsetHeight - 1);
        } catch (c) {}
      }
      addLanguages(t, e) {
        var b;
        var n = e.length;
        let i = this.keyman.config.hostDevice;
        var s,
          c,
          l,
          r = [];
        for (c = 0; c < n; c++) (l = e[c].KL), r.indexOf(l) == -1 && r.push(l);
        r.sort();
        var B = Math.round(100 / He(i.formFactor)) / 100,
          d,
          g,
          Q,
          F,
          y = -1;
        for (s = 0; s < r.length; s++) {
          for (
            d = Ve("div"),
              d.className = "kbd-list-closed",
              g = Ve("p"),
              g.kList = [],
              c = 0;
            c < n;
            c++
          )
            e[c].KL == r[s] && g.kList.push(e[c]);
          i.OS == "ios" && (g.style.fontSize = B + "em"),
            d.appendChild(g),
            t.appendChild(d),
            r[s] ==
              ((b = this.keyman.contextManager.activeKeyboard) == null
                ? void 0
                : b.metadata.langName) && (y = s);
          let h = this;
          if (g.kList.length > 1)
            for (
              g.className = "kbd-list",
                g.innerHTML = r[s] + "...",
                g.scrolled = !1,
                g.ontouchend = function (x) {
                  x.stopPropagation(),
                    x.target.scrolled
                      ? (x.target.scrolled = !1)
                      : (this.parentNode.className =
                          this.parentNode.className == "kbd-list-closed"
                            ? "kbd-list-open"
                            : "kbd-list-closed"),
                    h.adjust(
                      this.parentNode.className == "kbd-list-closed"
                        ? 0
                        : this.kList.length
                    );
                },
                g.addEventListener(
                  "touchstart",
                  function (x) {
                    x.stopPropagation();
                  },
                  !1
                ),
                g.addEventListener(
                  "touchmove",
                  function (x) {
                    (x.target.scrolled = !0), x.stopPropagation();
                  },
                  !1
                ),
                Q = 0;
              Q < g.kList.length;
              Q++
            )
              (F = Ve("p")),
                (F.className = "kbd-list-entry"),
                i.OS == "ios" && (F.style.fontSize = B + "em"),
                this.addKeyboard(g.kList[Q], F, !1),
                d.appendChild(F);
          else
            (g.innerHTML = r[s]),
              (g.className = "kbd-single-entry"),
              this.addKeyboard(g.kList[0], g, !0);
          s == y && (g.className = g.className + " current");
        }
        var u = Ve("div");
        u.id = "kmw-menu-footer";
        var I = a(function (h) {
          h.cancelable && h.preventDefault(), h.stopPropagation();
        }, "cancelTouch");
        return (
          u.addEventListener("touchstart", I, !1),
          u.addEventListener("touchmove", I, !1),
          u.addEventListener("touchend", I, !1),
          t.appendChild(u),
          y
        );
      }
      addKeyboard(t, e, n) {
        (e.kn = t.KI),
          (e.kc = t.KLC),
          (e.innerHTML = n ? t.KL : t.KN.replace(" Keyboard", ""));
        let i = this,
          s = a(() => {
            if (this.originalBodyStyle) {
              console.error(
                "Unexpected state:  `originalBodyStyle` was not cleared by a previous `unlockBodyScroll()` call"
              );
              return;
            }
            this.originalBodyStyle = {};
            let g = this.originalBodyStyle,
              Q = document.body.style;
            return (
              (g.overflowY = Q.overflowY),
              (g.height = Q.height),
              (Q.overflowY = "hidden"),
              (Q.height = "100%"),
              !0
            );
          }, "lockBodyScroll"),
          c = a(() => {
            if (!this.originalBodyStyle) {
              console.error(
                "Unexpected state:  `originalBodyStyle` is unset; cannot restore original body style"
              );
              return;
            }
            let g = this.originalBodyStyle,
              Q = document.body.style;
            (Q.overflowY = g.overflowY),
              (Q.height = g.height),
              (this.originalBodyStyle = null);
          }, "unlockBodyScroll"),
          l = a(function (g) {
            g.stopPropagation(),
              this.className.indexOf("selected") <= 0 &&
                (this.className = this.className + " selected"),
              (i.scrolling = !1),
              (i.y0 = g.touches[0].pageY),
              s();
          }, "touchStart"),
          r = a(function (g) {
            g.stopImmediatePropagation();
            var Q = i.lgList.childNodes[0],
              F = Q.scrollHeight - Q.offsetHeight,
              y,
              u;
            if (typeof g.pageY != "undefined") y = g.pageY;
            else if (typeof g.touches != "undefined") y = g.touches[0].pageY;
            else return;
            if (((u = y - i.y0), u < 0)) Q.scrollTop >= F - 1 && (i.y0 = y);
            else if (u > 0) Q.scrollTop < 2 && (i.y0 = y);
            else return;
            return (
              (u < -5 || u > 5) &&
                ((i.scrolling = !0),
                (this.className = this.className.replace(/\s*selected/, "")),
                (i.y0 = y)),
              !0
            );
          }, "touchMove"),
          B = a(function (g) {
            return (
              typeof g.stopImmediatePropagation != "undefined"
                ? g.stopImmediatePropagation()
                : g.stopPropagation(),
              i.scrolling
                ? (this.className = this.className.replace(/\s*selected/, ""))
                : (i.keyman.contextManager.focusAssistant.setFocusTimer(),
                  (i.lgList.style.display = "none"),
                  i.keyman.contextManager.activateKeyboard(
                    this.kn,
                    this.kc,
                    !0
                  ),
                  i.keyman.contextManager.restoreLastActiveTarget(),
                  i.hide()),
              c(),
              !0
            );
          }, "touchEnd"),
          d = a(function (g) {
            c();
          }, "touchCancel");
        (e.onmspointerdown = l),
          e.addEventListener("touchstart", l, !1),
          (e.onmspointermove = r),
          e.addEventListener("touchmove", r, !1),
          (e.onmspointerout = B),
          e.addEventListener("touchend", B, !1),
          e.addEventListener("touchcancel", d, !1);
      }
      hide() {
        let t = this.keyman.osk;
        this.lgList &&
          (t.vkbd.highlightKey(t.vkbd.lgKey, !1),
          (this.lgList.style.visibility = "hidden"),
          window.setTimeout(() => {
            this.shim.parentElement &&
              (document.body.removeChild(this.shim),
              document.body.removeChild(this.lgList));
          }, 500)),
          (this.keyman.touchLanguageMenu = null);
      }
    };
    a(ki, "LanguageMenu");
    function Ml(o, t, e) {
      let n = e.focusAssistant;
      t.on("globekey", (i, s) => {
        s &&
          t.hostDevice.touchable &&
          ((o.touchLanguageMenu = new ki(o)), o.touchLanguageMenu.show()),
          t.vkbd && t.vkbd.highlightKey(i, !1);
      }),
        t.on("hiderequested", (i) => {
          t && (t.startHide(!0), e.forgetActiveTarget());
        }),
        t.addEventListener("hide", (i) => {
          var s;
          i != null &&
            i.HiddenByUser &&
            ((s = e.activeTarget) == null || s.focus());
        }),
        t.on("showbuild", () => {
          var i;
          (i = o.config.alertHost) == null ||
            i.alert(
              "KeymanWeb Version " +
                q.VERSION +
                '<br /><br /><span style="font-size:0.8em">Copyright &copy; 2007-2023 SIL International</span>'
            );
        }),
        t.on("dragmove", (i) =>
          Z(this, null, function* () {
            (n.restoringFocus = !0),
              yield i,
              e.restoreLastActiveTarget(),
              (n.restoringFocus = !1),
              n.setMaintainingFocus(!1);
          })
        ),
        t.on("resizemove", (i) =>
          Z(this, null, function* () {
            (n.restoringFocus = !0),
              yield i,
              e.restoreLastActiveTarget(),
              (n.restoringFocus = !1),
              n.setMaintainingFocus(!1);
          })
        ),
        t.on("pointerinteraction", (i) =>
          Z(this, null, function* () {
            n.setMaintainingFocus(!0), yield i, n.setMaintainingFocus(!1);
          })
        );
    }
    a(Ml, "setupOskListeners");
    function jr(o) {
      let t = document.createElement(o);
      return (t.style.userSelect = "none"), t;
    }
    a(jr, "createUnselectableElement");
    var Ni = class {
      constructor(t) {
        this.getAbsoluteX = $;
        this.getAbsoluteY = ee;
        this._GetAbsoluteX = $;
        this._GetAbsoluteY = ee;
        this._GetAbsolute = this.getAbsolute;
        this.toNzString = this.nzString;
        this.createElement = jr;
        this.getStyleValue = dn;
        (this.config = t),
          (this.stylesheetManager = new ge(document.body, t.applyCacheBusting)),
          (this.domEventTracker = new Ge());
      }
      isTouchDevice() {
        return this.config.hostDevice.touchable;
      }
      getAbsolute(t) {
        return { x: $(t), y: ee(t) };
      }
      getOption(t, e) {
        return t in this.config.paths
          ? this.config.paths[t]
          : t in this.config.options
          ? this.config.options[t]
          : arguments.length > 1
          ? e
          : "";
      }
      setOption(t, e) {
        switch (t) {
          case "attachType":
            break;
          case "ui":
            break;
          case "useAlerts":
            this.config.signalUser = e ? new tt() : null;
            break;
          case "setActiveOnRegister":
            this.config.activateFirstKeyboard = !!e;
            break;
          case "spacebarText":
            this.config.spacebarText = e;
            break;
          default:
            throw new Error(
              "Path-related options may not be changed after the engine has initialized."
            );
        }
      }
      loadCookie(t) {
        return new ce(t).load(decodeURIComponent);
      }
      saveCookie(t, e) {
        new ce(t).save(e, encodeURIComponent);
      }
      addStyleSheet(t) {
        let e = Qt(t);
        return this.stylesheetManager.linkStylesheet(e), e;
      }
      removeStyleSheet(t) {
        return this.stylesheetManager.unlink(t);
      }
      linkStyleSheet(t) {
        this.stylesheetManager.linkExternalSheet(t);
      }
      getLanguageCodes(t) {
        return t.indexOf("-") == -1 ? [t] : t.split("-");
      }
      attachDOMEvent(t, e, n, i) {
        this.domEventTracker.attachDOMEvent(t, e, n, i);
      }
      detachDOMEvent(t, e, n, i) {
        this.domEventTracker.detachDOMEvent(t, e, n, i);
      }
      get alertHost() {
        return this.config.alertHost
          ? this.config.alertHost
          : (this._alertHost || (this._alertHost = new tt()), this._alertHost);
      }
      alert(t, e) {
        this.alertHost.alert(t, e);
      }
      nzString(t, e) {
        let n = "";
        return (
          arguments.length > 1 && (n = e),
          typeof t == "undefined" || t == null || t == 0 || t == "" ? n : "" + t
        );
      }
      toNumber(t, e) {
        let n = parseInt(t, 10);
        return isNaN(n) ? e : n;
      }
      toFloat(t, e) {
        let n = parseFloat(t);
        return isNaN(n) ? e : n;
      }
      rgba(t, e, n, i, s) {
        let c = "transparent";
        try {
          c = "rgba(" + e + "," + n + "," + i + "," + s + ")";
        } catch (l) {
          c = "rgb(" + e + "," + n + "," + i + ")";
        }
        return c;
      }
      shutdown() {
        var t, e, n;
        (t = this.stylesheetManager) == null || t.unlinkAll(),
          (e = this.domEventTracker) == null || e.shutdown(),
          (n = this._alertHost) == null || n.shutdown();
      }
    };
    a(Ni, "UtilApiEndpoint");
    var Es = class {
      constructor(t, e, n) {
        (this.code = t), (this.shift = e), (this.handler = n);
      }
      matches(t, e) {
        return this.code == t && this.shift == e;
      }
    };
    a(Es, "Hotkey");
    var Ti = class {
      constructor() {
        this.hotkeys = [];
        this._Process = a((t) => {
          t || (t = window.event);
          var e = hc(t);
          if (e == null) return !1;
          for (
            var n =
                (t.shiftKey ? 16 : 0) |
                (t.ctrlKey ? 32 : 0) |
                (t.altKey ? 64 : 0),
              i = 0;
            i < this.hotkeys.length;
            i++
          )
            if (this.hotkeys[i].matches(e, n))
              return (
                this.hotkeys[i].handler(),
                (t.returnValue = !1),
                t && t.preventDefault && t.preventDefault(),
                (t.cancelBubble = !0),
                !1
              );
          return !0;
        }, "_Process");
      }
      addHotKey(t, e, n) {
        for (var i = 0; i < this.hotkeys.length; i++)
          if (this.hotkeys[i].code == t && this.hotkeys[i].shift == e) {
            this.hotkeys[i].handler = n;
            return;
          }
        this.hotkeys.push(new Es(t, e, n));
      }
      removeHotkey(t, e) {
        for (var n = 0; n < this.hotkeys.length; n++)
          if (this.hotkeys[n].matches(t, e)) {
            this.hotkeys.splice(n, 1);
            return;
          }
      }
    };
    a(Ti, "HotkeyManager");
    var vs = class {
      constructor(t) {
        (this.e = t), (this.c = t.style.backgroundColor);
      }
      reset() {
        this.e.style.backgroundColor = this.c;
      }
    };
    a(vs, "BeepData");
    var Mi = class {
      constructor(t) {
        this._BeepObjects = [];
        this._BeepTimeout = 0;
        this.reset = a(() => {
          this.keyboardInterface.resetContextCache();
          var t;
          for (this._BeepTimeout = 0, t = 0; t < this._BeepObjects.length; t++)
            this._BeepObjects[t].reset();
          this._BeepObjects = [];
        }, "reset");
        this.keyboardInterface = t;
      }
      beep(t) {
        if (t instanceof P) {
          var e = t.getElement();
          if (
            (t instanceof j && (e = t.docRoot),
            !!e && !(!e.style || typeof e.style.backgroundColor == "undefined"))
          ) {
            for (var n = 0; n < this._BeepObjects.length; n++)
              if (this._BeepObjects[n].e == e) return;
            this._BeepObjects.push(new vs(e)),
              (e.style.backgroundColor = "#000000"),
              this._BeepTimeout == 0 &&
                ((this._BeepTimeout = 1), window.setTimeout(this.reset, 50));
          }
        }
      }
    };
    a(Mi, "BeepHandler");
    var gn = class extends yt {
      constructor(e, n) {
        super(e, n);
        this.GetLastActiveElement = this.getLastActiveElement;
        this.FocusLastActiveElement = this.focusLastActiveElement;
        this.HideHelp = this.hideHelp;
        this.ShowHelp = this.showHelp;
        this.ShowPinnedHelp = this.showPinnedHelp;
      }
      saveFocus() {
        this.engine.contextManager.focusAssistant._IgnoreNextSelChange = 1;
      }
      getLastActiveElement() {
        return this.engine.contextManager.lastActiveTarget;
      }
      focusLastActiveElement() {
        this.engine.contextManager.restoreLastActiveTarget();
      }
      hideHelp() {
        this.engine.osk && typeof this.engine.osk.startHide === "function" && this.engine.osk.startHide(!0);
      }
      showHelp(e, n) {
        let i = this.engine.osk;
        i instanceof Ye ? i.presentAtPosition(e, n) : i.present();
      }
      showPinnedHelp() {
        let e = this.engine.osk;
        e instanceof Ye &&
          (!e.activeKeyboard.keyboard.isCJK || !this.ruleBehavior) &&
          (e.userPositioned = !0),
          e.present();
      }
    };
    a(gn, "KeyboardInterface");
    (function () {
      gn.__publishShorthandAPI();
    })();
    var xt = class extends Kt {
      constructor(e, n) {
        let i = new Hi(n);
        super(e, i, new mt(i, () => this.legacyAPIEvents), (s) => ({
          keyboardInterface: new gn(window, s),
          defaultOutputRules: new zn(s.contextManager),
        }));
        this._initialized = 0;
        this.hotkeyManager = new Ti();
        this.helpURL = "https://help.keyman.com/go";
        this.keyEventRefocus = a(() => {
          this.contextManager.restoreLastActiveTarget();
        }, "keyEventRefocus");
        this._GetKeyboardDetail = a(function (e, n) {
          return {
            Name: e.KN,
            InternalName: e.KI,
            LanguageName: e.KL,
            LanguageCode: e.KLC,
            RegionName: e.KR,
            RegionCode: e.KRC,
            CountryName: e.KC,
            CountryCode: e.KCC,
            KeyboardID: e.KD,
            Font: e.KFont,
            OskFont: e.KOskFont,
            HasLoaded: !!n,
            IsRTL: n ? n.isRTL : null,
          };
        }, "_GetKeyboardDetail");
        (this._util = new Ni(i)),
          (this.beepHandler = new Mi(this.core.keyboardInterface)),
          (this.core.keyboardProcessor.beepHandler = () =>
            this.beepHandler.beep(this.contextManager.activeTarget)),
          (this.hardKeyboard = new Kn(
            i.hardDevice,
            this.core.keyboardProcessor,
            this.contextManager
          )),
          this.contextManager.on("targetchange", (s) => {
            let c = s == null ? void 0 : s.getElement();
            this.osk && (this.osk.activationModel.activationTrigger = c),
              this.config.hostDevice.touchable &&
                s &&
                this.ensureElementVisibility(c);
          });
      }
      ensureElementVisibility(e) {
        if (!e || !this.osk) return;
        let n = ee(e),
          i = window.pageYOffset,
          s = n - i;
        n >= i &&
          ((s -=
            window.innerHeight -
            this.osk._Box.offsetHeight -
            e.offsetHeight -
            2),
          s < 0 && (s = 0)),
          s != 0 && window.scrollTo(0, s + i);
      }
      get util() {
        return this._util;
      }
      get views() {
        return Uc;
      }
      get initialized() {
        return this._initialized;
      }
      get ui() {
        return this._ui;
      }
      set ui(e) {
        this._ui && this._ui.shutdown(),
          (this._ui = e),
          this.config.deferForInitialization.isFulfilled && e.initialize();
      }
      init(e) {
        return Z(this, null, function* () {
          let i = new Et().detect(),
            s = C(C({}, fl), e);
          if (
            ((this.config.hostDevice = i),
            this.config.initialize(s),
            (this._initialized = 1),
            yield Ai(),
            this.config.deferForInitialization.isResolved)
          )
            return Promise.resolve();
          yield Di(xt.prototype, this, "init").call(this, s),
            this.keyboardRequisitioner.cloudQueryEngine.once(
              "unboundregister",
              () => {
                var l;
                ((l = this.contextManager.activeKeyboard) != null &&
                  l.keyboard) ||
                  this.setActiveKeyboard("", "");
              }
            ),
            this.contextManager.initialize();
          let c = this.contextManager.getSavedKeyboardRaw();
          // Removed OSK instantiation and listener setup:
          // i.touchable ? (this.osk = new kn(this)) : (this.osk = new Nn(this)),
          // Ml(this, this.osk, this.contextManager),
          this.osk = null; // Explicitly set to null to avoid undefined errors
          (this.pageIntegration = new fi(window, this)),
            this.config.finalizeInit(),
            this.ui &&
              (this.ui.initialize(),
              this.legacyAPIEvents.callEvent("loaduserinterface", {})),
            (this._initialized = 2),
            yield Promise.resolve(),
            this.contextManager.restoreSavedKeyboard(c),
            yield Promise.resolve();
        });
      }
      get register() {
        return this.keyboardRequisitioner.cloudQueryEngine.registerFromCloud;
      }
      getUIState() {
        return this.contextManager.focusAssistant.getUIState();
      }
      activatingUI(e) {
        this.contextManager.focusAssistant.setMaintainingFocus(!!e);
      }
      setKeyboardForControl(e, n, i) {
        if (e instanceof e.ownerDocument.defaultView.HTMLIFrameElement) {
          console.warn(
            "'keymanweb.setKeyboardForControl' cannot set keyboard on iframes."
          );
          return;
        }
        if (!this.isAttached(e)) {
          console.error("KeymanWeb is not attached to element " + e);
          return;
        }
        let s = null;
        if (n && ((s = this.keyboardRequisitioner.cache.getStub(n, i)), !s))
          throw new Error(
            `No keyboard has been registered with id ${n} and language code ${i}.`
          );
        this.contextManager.setKeyboardForTarget(
          e._kmwAttachment.interface,
          n,
          i
        );
      }
      getKeyboardForControl(e) {
        let n = Ee(e);
        return this.contextManager.getKeyboardStubForTarget(n).id;
      }
      getLanguageForControl(e) {
        let n = Ee(e);
        return this.contextManager.getKeyboardStubForTarget(n).langId;
      }
      isAttached(e) {
        return this.contextManager.page.isAttached(e);
      }
      addKeyboards(...e) {
        return this.config.deferForInitialization.then(() => {
          if (!e || !e[0] || e[0].length == 0)
            return this.keyboardRequisitioner
              .fetchCloudCatalog()
              .catch((n) => (console.error(n[0].error), n));
          {
            let n = [];
            return (
              Array.isArray(e[0])
                ? (n = n.concat(e[0]))
                : Array.isArray(e) && (n = n.concat(e)),
              this.keyboardRequisitioner.addKeyboardArray(n)
            );
          }
        });
      }
      addKeyboardsForLanguage(e) {
        return this.config.deferForInitialization.then(() =>
          typeof e == "string"
            ? this.keyboardRequisitioner.addLanguageKeyboards(
                e.split(",").map((n) => n.trim())
              )
            : this.keyboardRequisitioner.addLanguageKeyboards(e)
        );
      }
      isCJK(e) {
        let n;
        return (
          e
            ? e.KeyboardID
              ? (n = this.keyboardRequisitioner.cache.getKeyboard(e.KeyboardID))
              : (n = new T(e))
            : (n = this.core.activeKeyboard),
          n && n.isCJK
        );
      }
      getKeyboard(e, n) {
        let i = this.keyboardRequisitioner.cache.getStub(e, n),
          s = this.keyboardRequisitioner.cache.getKeyboardForStub(i);
        return i && this._GetKeyboardDetail(i, s);
      }
      getKeyboards() {
        let e = [],
          n = this.keyboardRequisitioner.cache,
          i = n.getStubList();
        for (let s = 0; s < i.length; s++) {
          let c = i[s],
            l = n.getKeyboardForStub(c),
            r = this._GetKeyboardDetail(c, l);
          e.push(r);
        }
        return e;
      }
      removeKeyboards(...e) {
        var n;
        for (let i = 0; i < e.length; i++)
          this.keyboardRequisitioner.cache.forgetKeyboard(e[i], !0),
            ((n = this.contextManager.activeKeyboard) == null
              ? void 0
              : n.metadata.id) == de(e[i]) &&
              this.contextManager.activateKeyboard("", "");
        return !0;
      }
      getSavedKeyboard() {
        return this.contextManager.getSavedKeyboard();
      }
      focusLastActiveElement() {
        var e;
        (e = this.contextManager.lastActiveTarget) == null || e.focus();
      }
      getLastActiveElement() {
        var e;
        return (e = this.contextManager.lastActiveTarget) == null
          ? void 0
          : e.getElement();
      }
      setActiveElement(e, n) {
        if (typeof e == "string") {
          let s = e;
          if (((e = document.getElementById(e)), !e))
            throw new Error(`Could not find the specified element (id: ${s}`);
        }
        let i = Ee(e);
        if (!i)
          throw new Error(
            `KMW is not attached to the specified element (id: ${e.id}).`
          );
        this.contextManager.setActiveTarget(i, n);
      }
      moveToElement(e) {
        typeof e == "string" && (e = document.getElementById(e)), e.focus();
      }
      addHotKey(e, n, i) {
        this.hotkeyManager.addHotKey(e, n, i);
      }
      removeHotKey(e, n) {
        this.hotkeyManager.removeHotkey(e, n);
      }
      attachToControl(e) {
        this.contextManager.page.attachToControl(e);
      }
      detachFromControl(e) {
        this.contextManager.page.detachFromControl(e);
      }
      disableControl(e) {
        this.contextManager.page.disableControl(e);
      }
      enableControl(e) {
        this.contextManager.page.enableControl(e);
      }
      BuildVisualKeyboard(e, n, i, s) {
        let c = null;
        e != null && (c = this.keyboardRequisitioner.cache.getKeyboard(e)),
          (c = c || this.core.activeKeyboard);
        let l = this.keyboardRequisitioner.cache.getStub(c),
          r = this.getOskHeight,
          B =
            (typeof r == "function" ? r() : null) ||
            this.osk.computedHeight ||
            200;
        return ye.buildDocumentationKeyboard(c, l, this.config.paths, i, s, B);
      }
      shutdown() {
        var e, n;
        this.pageIntegration.shutdown(),
          this.contextManager.shutdown(),
          (e = this.osk) == null || e.shutdown(),
          this.core.languageProcessor.shutdown(),
          this.hardKeyboard.shutdown(),
          this.util.shutdown(),
          this.legacyAPIEvents.callEvent("unloaduserinterface", {}),
          (n = this.ui) == null || n.shutdown();
      }
    };
    a(xt, "KeymanEngine");
    var Yl = document.getElementsByTagName("script"),
      wl = Yl[Yl.length - 1].src,
      _r = wl.substr(0, wl.lastIndexOf("/") + 1);
    window.keyman = new xt(kt.constructInstance(), _r);
  })();
} catch (err) {
  console.log("keyman don't work on this page");
  ``;
}
//# sourceMappingURL=keymanweb.js.map