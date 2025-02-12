var Zh = Object.defineProperty;
var Jh = (i, l, s) =>
  l in i
    ? Zh(i, l, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (i[l] = s);
var We = (i, l, s) => Jh(i, typeof l != "symbol" ? l + "" : l, s);
(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = s(c);
    fetch(c.href, d);
  }
})();
function ev(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var iu = { exports: {} },
  mi = {},
  ou = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf;
function tv() {
  if (Mf) return Y;
  Mf = 1;
  var i = Symbol.for("react.element"),
    l = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    M = Symbol.iterator;
  function D(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (M && S[M]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var J = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    se = Object.assign,
    U = {};
  function G(S, C, X) {
    (this.props = S),
      (this.context = C),
      (this.refs = U),
      (this.updater = X || J);
  }
  (G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (S, C) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, C, "setState");
    }),
    (G.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function Ie() {}
  Ie.prototype = G.prototype;
  function He(S, C, X) {
    (this.props = S),
      (this.context = C),
      (this.refs = U),
      (this.updater = X || J);
  }
  var Te = (He.prototype = new Ie());
  (Te.constructor = He), se(Te, G.prototype), (Te.isPureReactComponent = !0);
  var le = Array.isArray,
    Ee = Object.prototype.hasOwnProperty,
    ye = { current: null },
    Me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ut(S, C, X) {
    var Z,
      ne = {},
      re = null,
      fe = null;
    if (C != null)
      for (Z in (C.ref !== void 0 && (fe = C.ref),
      C.key !== void 0 && (re = "" + C.key),
      C))
        Ee.call(C, Z) && !Me.hasOwnProperty(Z) && (ne[Z] = C[Z]);
    var ue = arguments.length - 2;
    if (ue === 1) ne.children = X;
    else if (1 < ue) {
      for (var me = Array(ue), et = 0; et < ue; et++)
        me[et] = arguments[et + 2];
      ne.children = me;
    }
    if (S && S.defaultProps)
      for (Z in ((ue = S.defaultProps), ue))
        ne[Z] === void 0 && (ne[Z] = ue[Z]);
    return {
      $$typeof: i,
      type: S,
      key: re,
      ref: fe,
      props: ne,
      _owner: ye.current,
    };
  }
  function ln(S, C) {
    return {
      $$typeof: i,
      type: S.type,
      key: C,
      ref: S.ref,
      props: S.props,
      _owner: S._owner,
    };
  }
  function Wt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }
  function Nn(S) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (X) {
        return C[X];
      })
    );
  }
  var Tt = /\/+/g;
  function Je(S, C) {
    return typeof S == "object" && S !== null && S.key != null
      ? Nn("" + S.key)
      : C.toString(36);
  }
  function _t(S, C, X, Z, ne) {
    var re = typeof S;
    (re === "undefined" || re === "boolean") && (S = null);
    var fe = !1;
    if (S === null) fe = !0;
    else
      switch (re) {
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case i:
            case l:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = S),
        (ne = ne(fe)),
        (S = Z === "" ? "." + Je(fe, 0) : Z),
        le(ne)
          ? ((X = ""),
            S != null && (X = S.replace(Tt, "$&/") + "/"),
            _t(ne, C, X, "", function (et) {
              return et;
            }))
          : ne != null &&
            (Wt(ne) &&
              (ne = ln(
                ne,
                X +
                  (!ne.key || (fe && fe.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(Tt, "$&/") + "/") +
                  S
              )),
            C.push(ne)),
        1
      );
    if (((fe = 0), (Z = Z === "" ? "." : Z + ":"), le(S)))
      for (var ue = 0; ue < S.length; ue++) {
        re = S[ue];
        var me = Z + Je(re, ue);
        fe += _t(re, C, X, me, ne);
      }
    else if (((me = D(S)), typeof me == "function"))
      for (S = me.call(S), ue = 0; !(re = S.next()).done; )
        (re = re.value), (me = Z + Je(re, ue++)), (fe += _t(re, C, X, me, ne));
    else if (re === "object")
      throw (
        ((C = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return fe;
  }
  function Mt(S, C, X) {
    if (S == null) return S;
    var Z = [],
      ne = 0;
    return (
      _t(S, Z, "", "", function (re) {
        return C.call(X, re, ne++);
      }),
      Z
    );
  }
  function Ke(S) {
    if (S._status === -1) {
      var C = S._result;
      (C = C()),
        C.then(
          function (X) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = X));
          },
          function (X) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = X));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = C));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var we = { current: null },
    L = { transition: null },
    H = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: L,
      ReactCurrentOwner: ye,
    };
  function b() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Y.Children = {
      map: Mt,
      forEach: function (S, C, X) {
        Mt(
          S,
          function () {
            C.apply(this, arguments);
          },
          X
        );
      },
      count: function (S) {
        var C = 0;
        return (
          Mt(S, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (S) {
        return (
          Mt(S, function (C) {
            return C;
          }) || []
        );
      },
      only: function (S) {
        if (!Wt(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (Y.Component = G),
    (Y.Fragment = s),
    (Y.Profiler = c),
    (Y.PureComponent = He),
    (Y.StrictMode = u),
    (Y.Suspense = x),
    (Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
    (Y.act = b),
    (Y.cloneElement = function (S, C, X) {
      if (S == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            S +
            "."
        );
      var Z = se({}, S.props),
        ne = S.key,
        re = S.ref,
        fe = S._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((re = C.ref), (fe = ye.current)),
          C.key !== void 0 && (ne = "" + C.key),
          S.type && S.type.defaultProps)
        )
          var ue = S.type.defaultProps;
        for (me in C)
          Ee.call(C, me) &&
            !Me.hasOwnProperty(me) &&
            (Z[me] = C[me] === void 0 && ue !== void 0 ? ue[me] : C[me]);
      }
      var me = arguments.length - 2;
      if (me === 1) Z.children = X;
      else if (1 < me) {
        ue = Array(me);
        for (var et = 0; et < me; et++) ue[et] = arguments[et + 2];
        Z.children = ue;
      }
      return {
        $$typeof: i,
        type: S.type,
        key: ne,
        ref: re,
        props: Z,
        _owner: fe,
      };
    }),
    (Y.createContext = function (S) {
      return (
        (S = {
          $$typeof: h,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (S.Provider = { $$typeof: d, _context: S }),
        (S.Consumer = S)
      );
    }),
    (Y.createElement = ut),
    (Y.createFactory = function (S) {
      var C = ut.bind(null, S);
      return (C.type = S), C;
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (S) {
      return { $$typeof: _, render: S };
    }),
    (Y.isValidElement = Wt),
    (Y.lazy = function (S) {
      return { $$typeof: P, _payload: { _status: -1, _result: S }, _init: Ke };
    }),
    (Y.memo = function (S, C) {
      return { $$typeof: E, type: S, compare: C === void 0 ? null : C };
    }),
    (Y.startTransition = function (S) {
      var C = L.transition;
      L.transition = {};
      try {
        S();
      } finally {
        L.transition = C;
      }
    }),
    (Y.unstable_act = b),
    (Y.useCallback = function (S, C) {
      return we.current.useCallback(S, C);
    }),
    (Y.useContext = function (S) {
      return we.current.useContext(S);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (S) {
      return we.current.useDeferredValue(S);
    }),
    (Y.useEffect = function (S, C) {
      return we.current.useEffect(S, C);
    }),
    (Y.useId = function () {
      return we.current.useId();
    }),
    (Y.useImperativeHandle = function (S, C, X) {
      return we.current.useImperativeHandle(S, C, X);
    }),
    (Y.useInsertionEffect = function (S, C) {
      return we.current.useInsertionEffect(S, C);
    }),
    (Y.useLayoutEffect = function (S, C) {
      return we.current.useLayoutEffect(S, C);
    }),
    (Y.useMemo = function (S, C) {
      return we.current.useMemo(S, C);
    }),
    (Y.useReducer = function (S, C, X) {
      return we.current.useReducer(S, C, X);
    }),
    (Y.useRef = function (S) {
      return we.current.useRef(S);
    }),
    (Y.useState = function (S) {
      return we.current.useState(S);
    }),
    (Y.useSyncExternalStore = function (S, C, X) {
      return we.current.useSyncExternalStore(S, C, X);
    }),
    (Y.useTransition = function () {
      return we.current.useTransition();
    }),
    (Y.version = "18.3.1"),
    Y
  );
}
var Lf;
function tl() {
  return Lf || ((Lf = 1), (ou.exports = tv())), ou.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf;
function nv() {
  if (zf) return mi;
  zf = 1;
  var i = tl(),
    l = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(_, x, E) {
    var P,
      M = {},
      D = null,
      J = null;
    E !== void 0 && (D = "" + E),
      x.key !== void 0 && (D = "" + x.key),
      x.ref !== void 0 && (J = x.ref);
    for (P in x) u.call(x, P) && !d.hasOwnProperty(P) && (M[P] = x[P]);
    if (_ && _.defaultProps)
      for (P in ((x = _.defaultProps), x)) M[P] === void 0 && (M[P] = x[P]);
    return {
      $$typeof: l,
      type: _,
      key: D,
      ref: J,
      props: M,
      _owner: c.current,
    };
  }
  return (mi.Fragment = s), (mi.jsx = h), (mi.jsxs = h), mi;
}
var Df;
function rv() {
  return Df || ((Df = 1), (iu.exports = nv())), iu.exports;
}
var y = rv(),
  Fo = {},
  lu = { exports: {} },
  Ze = {},
  su = { exports: {} },
  uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If;
function iv() {
  return (
    If ||
      ((If = 1),
      (function (i) {
        function l(L, H) {
          var b = L.length;
          L.push(H);
          e: for (; 0 < b; ) {
            var S = (b - 1) >>> 1,
              C = L[S];
            if (0 < c(C, H)) (L[S] = H), (L[b] = C), (b = S);
            else break e;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function u(L) {
          if (L.length === 0) return null;
          var H = L[0],
            b = L.pop();
          if (b !== H) {
            L[0] = b;
            e: for (var S = 0, C = L.length, X = C >>> 1; S < X; ) {
              var Z = 2 * (S + 1) - 1,
                ne = L[Z],
                re = Z + 1,
                fe = L[re];
              if (0 > c(ne, b))
                re < C && 0 > c(fe, ne)
                  ? ((L[S] = fe), (L[re] = b), (S = re))
                  : ((L[S] = ne), (L[Z] = b), (S = Z));
              else if (re < C && 0 > c(fe, b))
                (L[S] = fe), (L[re] = b), (S = re);
              else break e;
            }
          }
          return H;
        }
        function c(L, H) {
          var b = L.sortIndex - H.sortIndex;
          return b !== 0 ? b : L.id - H.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            _ = h.now();
          i.unstable_now = function () {
            return h.now() - _;
          };
        }
        var x = [],
          E = [],
          P = 1,
          M = null,
          D = 3,
          J = !1,
          se = !1,
          U = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          Ie = typeof clearTimeout == "function" ? clearTimeout : null,
          He = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Te(L) {
          for (var H = s(E); H !== null; ) {
            if (H.callback === null) u(E);
            else if (H.startTime <= L)
              u(E), (H.sortIndex = H.expirationTime), l(x, H);
            else break;
            H = s(E);
          }
        }
        function le(L) {
          if (((U = !1), Te(L), !se))
            if (s(x) !== null) (se = !0), Ke(Ee);
            else {
              var H = s(E);
              H !== null && we(le, H.startTime - L);
            }
        }
        function Ee(L, H) {
          (se = !1), U && ((U = !1), Ie(ut), (ut = -1)), (J = !0);
          var b = D;
          try {
            for (
              Te(H), M = s(x);
              M !== null && (!(M.expirationTime > H) || (L && !Nn()));

            ) {
              var S = M.callback;
              if (typeof S == "function") {
                (M.callback = null), (D = M.priorityLevel);
                var C = S(M.expirationTime <= H);
                (H = i.unstable_now()),
                  typeof C == "function"
                    ? (M.callback = C)
                    : M === s(x) && u(x),
                  Te(H);
              } else u(x);
              M = s(x);
            }
            if (M !== null) var X = !0;
            else {
              var Z = s(E);
              Z !== null && we(le, Z.startTime - H), (X = !1);
            }
            return X;
          } finally {
            (M = null), (D = b), (J = !1);
          }
        }
        var ye = !1,
          Me = null,
          ut = -1,
          ln = 5,
          Wt = -1;
        function Nn() {
          return !(i.unstable_now() - Wt < ln);
        }
        function Tt() {
          if (Me !== null) {
            var L = i.unstable_now();
            Wt = L;
            var H = !0;
            try {
              H = Me(!0, L);
            } finally {
              H ? Je() : ((ye = !1), (Me = null));
            }
          } else ye = !1;
        }
        var Je;
        if (typeof He == "function")
          Je = function () {
            He(Tt);
          };
        else if (typeof MessageChannel < "u") {
          var _t = new MessageChannel(),
            Mt = _t.port2;
          (_t.port1.onmessage = Tt),
            (Je = function () {
              Mt.postMessage(null);
            });
        } else
          Je = function () {
            G(Tt, 0);
          };
        function Ke(L) {
          (Me = L), ye || ((ye = !0), Je());
        }
        function we(L, H) {
          ut = G(function () {
            L(i.unstable_now());
          }, H);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            se || J || ((se = !0), Ke(Ee));
          }),
          (i.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ln = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(x);
          }),
          (i.unstable_next = function (L) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = D;
            }
            var b = D;
            D = H;
            try {
              return L();
            } finally {
              D = b;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (L, H) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var b = D;
            D = L;
            try {
              return H();
            } finally {
              D = b;
            }
          }),
          (i.unstable_scheduleCallback = function (L, H, b) {
            var S = i.unstable_now();
            switch (
              (typeof b == "object" && b !== null
                ? ((b = b.delay),
                  (b = typeof b == "number" && 0 < b ? S + b : S))
                : (b = S),
              L)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = b + C),
              (L = {
                id: P++,
                callback: H,
                priorityLevel: L,
                startTime: b,
                expirationTime: C,
                sortIndex: -1,
              }),
              b > S
                ? ((L.sortIndex = b),
                  l(E, L),
                  s(x) === null &&
                    L === s(E) &&
                    (U ? (Ie(ut), (ut = -1)) : (U = !0), we(le, b - S)))
                : ((L.sortIndex = C), l(x, L), se || J || ((se = !0), Ke(Ee))),
              L
            );
          }),
          (i.unstable_shouldYield = Nn),
          (i.unstable_wrapCallback = function (L) {
            var H = D;
            return function () {
              var b = D;
              D = H;
              try {
                return L.apply(this, arguments);
              } finally {
                D = b;
              }
            };
          });
      })(uu)),
    uu
  );
}
var bf;
function ov() {
  return bf || ((bf = 1), (su.exports = iv())), su.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff;
function lv() {
  if (Ff) return Ze;
  Ff = 1;
  var i = tl(),
    l = ov();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    c = {};
  function d(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var _ = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    x = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    P = {},
    M = {};
  function D(e) {
    return x.call(M, e)
      ? !0
      : x.call(P, e)
      ? !1
      : E.test(e)
      ? (M[e] = !0)
      : ((P[e] = !0), !1);
  }
  function J(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function se(e, t, n, r) {
    if (t === null || typeof t > "u" || J(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function U(e, t, n, r, o, a, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = f);
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      G[e] = new U(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new U(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      G[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      G[e] = new U(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        G[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      G[e] = new U(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      G[e] = new U(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      G[e] = new U(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      G[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Ie = /[\-:]([a-z])/g;
  function He(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ie, He);
      G[t] = new U(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ie, He);
        G[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ie, He);
      G[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      G[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new U(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      G[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Te(e, t, n, r) {
    var o = G.hasOwnProperty(t) ? G[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (se(t, n, o, r) && (n = null),
      r || o === null
        ? D(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var le = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ee = Symbol.for("react.element"),
    ye = Symbol.for("react.portal"),
    Me = Symbol.for("react.fragment"),
    ut = Symbol.for("react.strict_mode"),
    ln = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.provider"),
    Nn = Symbol.for("react.context"),
    Tt = Symbol.for("react.forward_ref"),
    Je = Symbol.for("react.suspense"),
    _t = Symbol.for("react.suspense_list"),
    Mt = Symbol.for("react.memo"),
    Ke = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    L = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (L && e[L]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var b = Object.assign,
    S;
  function C(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = (t && t[1]) || "";
      }
    return (
      `
` +
      S +
      e
    );
  }
  var X = !1;
  function Z(e, t) {
    if (!e || X) return "";
    X = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (O) {
            var r = O;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (O) {
            r = O;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (O) {
          r = O;
        }
        e();
      }
    } catch (O) {
      if (O && r && typeof O.stack == "string") {
        for (
          var o = O.stack.split(`
`),
            a = r.stack.split(`
`),
            f = o.length - 1,
            p = a.length - 1;
          1 <= f && 0 <= p && o[f] !== a[p];

        )
          p--;
        for (; 1 <= f && 0 <= p; f--, p--)
          if (o[f] !== a[p]) {
            if (f !== 1 || p !== 1)
              do
                if ((f--, p--, 0 > p || o[f] !== a[p])) {
                  var m =
                    `
` + o[f].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      m.includes("<anonymous>") &&
                      (m = m.replace("<anonymous>", e.displayName)),
                    m
                  );
                }
              while (1 <= f && 0 <= p);
            break;
          }
      }
    } finally {
      (X = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Me:
        return "Fragment";
      case ye:
        return "Portal";
      case ln:
        return "Profiler";
      case ut:
        return "StrictMode";
      case Je:
        return "Suspense";
      case _t:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nn:
          return (e.displayName || "Context") + ".Consumer";
        case Wt:
          return (e._context.displayName || "Context") + ".Provider";
        case Tt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Mt:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case Ke:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === ut ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ue(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function me(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function et(e) {
    var t = me(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (f) {
            (r = "" + f), a.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (f) {
            r = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ci(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function bu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = me(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ni(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fl(e, t) {
    var n = t.checked;
    return b({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Fu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ue(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Bu(e, t) {
    (t = t.checked), t != null && Te(e, "checked", t, !1);
  }
  function dl(e, t) {
    Bu(e, t);
    var n = ue(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? pl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && pl(e, t.type, ue(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function $u(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function pl(e, t, n) {
    (t !== "number" || Ni(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ar = Array.isArray;
  function Zn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ue(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return b({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Uu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Ar(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ue(n) };
  }
  function Vu(e, t) {
    var n = ue(t.value),
      r = ue(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Wu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Hu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Hu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ri,
    Ku = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ri = Ri || document.createElement("div"),
            Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ri.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Tr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    np = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mr).forEach(function (e) {
    np.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]);
    });
  });
  function Qu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Gu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Qu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var rp = b(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ml(e, t) {
    if (t) {
      if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function gl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yl = null;
  function _l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Sl = null,
    Jn = null,
    er = null;
  function Xu(e) {
    if ((e = ti(e))) {
      if (typeof Sl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Ji(t)), Sl(e.stateNode, e.type, t));
    }
  }
  function qu(e) {
    Jn ? (er ? er.push(e) : (er = [e])) : (Jn = e);
  }
  function Yu() {
    if (Jn) {
      var e = Jn,
        t = er;
      if (((er = Jn = null), Xu(e), t)) for (e = 0; e < t.length; e++) Xu(t[e]);
    }
  }
  function Zu(e, t) {
    return e(t);
  }
  function Ju() {}
  var wl = !1;
  function ea(e, t, n) {
    if (wl) return e(t, n);
    wl = !0;
    try {
      return Zu(e, t, n);
    } finally {
      (wl = !1), (Jn !== null || er !== null) && (Ju(), Yu());
    }
  }
  function Lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ji(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var xl = !1;
  if (_)
    try {
      var zr = {};
      Object.defineProperty(zr, "passive", {
        get: function () {
          xl = !0;
        },
      }),
        window.addEventListener("test", zr, zr),
        window.removeEventListener("test", zr, zr);
    } catch {
      xl = !1;
    }
  function ip(e, t, n, r, o, a, f, p, m) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, O);
    } catch (N) {
      this.onError(N);
    }
  }
  var Dr = !1,
    Ai = null,
    Ti = !1,
    kl = null,
    op = {
      onError: function (e) {
        (Dr = !0), (Ai = e);
      },
    };
  function lp(e, t, n, r, o, a, f, p, m) {
    (Dr = !1), (Ai = null), ip.apply(op, arguments);
  }
  function sp(e, t, n, r, o, a, f, p, m) {
    if ((lp.apply(this, arguments), Dr)) {
      if (Dr) {
        var O = Ai;
        (Dr = !1), (Ai = null);
      } else throw Error(s(198));
      Ti || ((Ti = !0), (kl = O));
    }
  }
  function Rn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ta(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function na(e) {
    if (Rn(e) !== e) throw Error(s(188));
  }
  function up(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Rn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var a = o.alternate;
      if (a === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === a.child) {
        for (a = o.child; a; ) {
          if (a === n) return na(o), e;
          if (a === r) return na(o), t;
          a = a.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = o), (r = a);
      else {
        for (var f = !1, p = o.child; p; ) {
          if (p === n) {
            (f = !0), (n = o), (r = a);
            break;
          }
          if (p === r) {
            (f = !0), (r = o), (n = a);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = a.child; p; ) {
            if (p === n) {
              (f = !0), (n = a), (r = o);
              break;
            }
            if (p === r) {
              (f = !0), (r = a), (n = o);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ra(e) {
    return (e = up(e)), e !== null ? ia(e) : null;
  }
  function ia(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ia(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var oa = l.unstable_scheduleCallback,
    la = l.unstable_cancelCallback,
    ap = l.unstable_shouldYield,
    cp = l.unstable_requestPaint,
    ke = l.unstable_now,
    fp = l.unstable_getCurrentPriorityLevel,
    Ol = l.unstable_ImmediatePriority,
    sa = l.unstable_UserBlockingPriority,
    Mi = l.unstable_NormalPriority,
    dp = l.unstable_LowPriority,
    ua = l.unstable_IdlePriority,
    Li = null,
    Lt = null;
  function pp(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : mp,
    hp = Math.log,
    vp = Math.LN2;
  function mp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((hp(e) / vp) | 0)) | 0;
  }
  var zi = 64,
    Di = 4194304;
  function Ir(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      a = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var p = f & ~o;
      p !== 0 ? (r = Ir(p)) : ((a &= f), a !== 0 && (r = Ir(a)));
    } else (f = n & ~o), f !== 0 ? (r = Ir(f)) : a !== 0 && (r = Ir(a));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - St(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function gp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yp(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var f = 31 - St(a),
        p = 1 << f,
        m = o[f];
      m === -1
        ? (!(p & n) || p & r) && (o[f] = gp(p, t))
        : m <= t && (e.expiredLanes |= p),
        (a &= ~p);
    }
  }
  function El(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function aa() {
    var e = zi;
    return (zi <<= 1), !(zi & 4194240) && (zi = 64), e;
  }
  function Pl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function br(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - St(t)),
      (e[t] = n);
  }
  function _p(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - St(n),
        a = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
    }
  }
  function jl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var ae = 0;
  function ca(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var fa,
    Cl,
    da,
    pa,
    ha,
    Nl = !1,
    bi = [],
    sn = null,
    un = null,
    an = null,
    Fr = new Map(),
    Br = new Map(),
    cn = [],
    Sp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function va(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        sn = null;
        break;
      case "dragenter":
      case "dragleave":
        un = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
        break;
      case "pointerover":
      case "pointerout":
        Fr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(t.pointerId);
    }
  }
  function $r(e, t, n, r, o, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [o],
        }),
        t !== null && ((t = ti(t)), t !== null && Cl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function wp(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (sn = $r(sn, e, t, n, r, o)), !0;
      case "dragenter":
        return (un = $r(un, e, t, n, r, o)), !0;
      case "mouseover":
        return (an = $r(an, e, t, n, r, o)), !0;
      case "pointerover":
        var a = o.pointerId;
        return Fr.set(a, $r(Fr.get(a) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (a = o.pointerId), Br.set(a, $r(Br.get(a) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function ma(e) {
    var t = An(e.target);
    if (t !== null) {
      var n = Rn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ta(n)), t !== null)) {
            (e.blockedOn = t),
              ha(e.priority, function () {
                da(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (yl = r), n.target.dispatchEvent(r), (yl = null);
      } else return (t = ti(n)), t !== null && Cl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ga(e, t, n) {
    Fi(e) && n.delete(t);
  }
  function xp() {
    (Nl = !1),
      sn !== null && Fi(sn) && (sn = null),
      un !== null && Fi(un) && (un = null),
      an !== null && Fi(an) && (an = null),
      Fr.forEach(ga),
      Br.forEach(ga);
  }
  function Ur(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nl ||
        ((Nl = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, xp)));
  }
  function Vr(e) {
    function t(o) {
      return Ur(o, e);
    }
    if (0 < bi.length) {
      Ur(bi[0], e);
      for (var n = 1; n < bi.length; n++) {
        var r = bi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      sn !== null && Ur(sn, e),
        un !== null && Ur(un, e),
        an !== null && Ur(an, e),
        Fr.forEach(t),
        Br.forEach(t),
        n = 0;
      n < cn.length;
      n++
    )
      (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
      ma(n), n.blockedOn === null && cn.shift();
  }
  var tr = le.ReactCurrentBatchConfig,
    Bi = !0;
  function kp(e, t, n, r) {
    var o = ae,
      a = tr.transition;
    tr.transition = null;
    try {
      (ae = 1), Rl(e, t, n, r);
    } finally {
      (ae = o), (tr.transition = a);
    }
  }
  function Op(e, t, n, r) {
    var o = ae,
      a = tr.transition;
    tr.transition = null;
    try {
      (ae = 4), Rl(e, t, n, r);
    } finally {
      (ae = o), (tr.transition = a);
    }
  }
  function Rl(e, t, n, r) {
    if (Bi) {
      var o = Al(e, t, n, r);
      if (o === null) Gl(e, t, r, $i, n), va(e, r);
      else if (wp(o, e, t, n, r)) r.stopPropagation();
      else if ((va(e, r), t & 4 && -1 < Sp.indexOf(e))) {
        for (; o !== null; ) {
          var a = ti(o);
          if (
            (a !== null && fa(a),
            (a = Al(e, t, n, r)),
            a === null && Gl(e, t, r, $i, n),
            a === o)
          )
            break;
          o = a;
        }
        o !== null && r.stopPropagation();
      } else Gl(e, t, r, null, n);
    }
  }
  var $i = null;
  function Al(e, t, n, r) {
    if ((($i = null), (e = _l(r)), (e = An(e)), e !== null))
      if (((t = Rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ta(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ($i = e), null;
  }
  function ya(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (fp()) {
          case Ol:
            return 1;
          case sa:
            return 4;
          case Mi:
          case dp:
            return 16;
          case ua:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fn = null,
    Tl = null,
    Ui = null;
  function _a() {
    if (Ui) return Ui;
    var e,
      t = Tl,
      n = t.length,
      r,
      o = "value" in fn ? fn.value : fn.textContent,
      a = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === o[a - r]; r++);
    return (Ui = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Vi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Wi() {
    return !0;
  }
  function Sa() {
    return !1;
  }
  function tt(e) {
    function t(n, r, o, a, f) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(a) : a[p]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Wi
          : Sa),
        (this.isPropagationStopped = Sa),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wi));
        },
        persist: function () {},
        isPersistent: Wi,
      }),
      t
    );
  }
  var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ml = tt(nr),
    Wr = b({}, nr, { view: 0, detail: 0 }),
    Ep = tt(Wr),
    Ll,
    zl,
    Hr,
    Hi = b({}, Wr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Il,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Hr &&
              (Hr && e.type === "mousemove"
                ? ((Ll = e.screenX - Hr.screenX), (zl = e.screenY - Hr.screenY))
                : (zl = Ll = 0),
              (Hr = e)),
            Ll);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : zl;
      },
    }),
    wa = tt(Hi),
    Pp = b({}, Hi, { dataTransfer: 0 }),
    jp = tt(Pp),
    Cp = b({}, Wr, { relatedTarget: 0 }),
    Dl = tt(Cp),
    Np = b({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rp = tt(Np),
    Ap = b({}, nr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Tp = tt(Ap),
    Mp = b({}, nr, { data: 0 }),
    xa = tt(Mp),
    Lp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    zp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Dp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Dp[e])
      ? !!t[e]
      : !1;
  }
  function Il() {
    return Ip;
  }
  var bp = b({}, Wr, {
      key: function (e) {
        if (e.key) {
          var t = Lp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Vi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? zp[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Il,
      charCode: function (e) {
        return e.type === "keypress" ? Vi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Vi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Fp = tt(bp),
    Bp = b({}, Hi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ka = tt(Bp),
    $p = b({}, Wr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Il,
    }),
    Up = tt($p),
    Vp = b({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wp = tt(Vp),
    Hp = b({}, Hi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Kp = tt(Hp),
    Qp = [9, 13, 27, 32],
    bl = _ && "CompositionEvent" in window,
    Kr = null;
  _ && "documentMode" in document && (Kr = document.documentMode);
  var Gp = _ && "TextEvent" in window && !Kr,
    Oa = _ && (!bl || (Kr && 8 < Kr && 11 >= Kr)),
    Ea = " ",
    Pa = !1;
  function ja(e, t) {
    switch (e) {
      case "keyup":
        return Qp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ca(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var rr = !1;
  function Xp(e, t) {
    switch (e) {
      case "compositionend":
        return Ca(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pa = !0), Ea);
      case "textInput":
        return (e = t.data), e === Ea && Pa ? null : e;
      default:
        return null;
    }
  }
  function qp(e, t) {
    if (rr)
      return e === "compositionend" || (!bl && ja(e, t))
        ? ((e = _a()), (Ui = Tl = fn = null), (rr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Oa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Na(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yp[e.type] : t === "textarea";
  }
  function Ra(e, t, n, r) {
    qu(r),
      (t = qi(t, "onChange")),
      0 < t.length &&
        ((n = new Ml("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Qr = null,
    Gr = null;
  function Zp(e) {
    Ga(e, 0);
  }
  function Ki(e) {
    var t = ur(e);
    if (bu(t)) return e;
  }
  function Jp(e, t) {
    if (e === "change") return t;
  }
  var Aa = !1;
  if (_) {
    var Fl;
    if (_) {
      var Bl = "oninput" in document;
      if (!Bl) {
        var Ta = document.createElement("div");
        Ta.setAttribute("oninput", "return;"),
          (Bl = typeof Ta.oninput == "function");
      }
      Fl = Bl;
    } else Fl = !1;
    Aa = Fl && (!document.documentMode || 9 < document.documentMode);
  }
  function Ma() {
    Qr && (Qr.detachEvent("onpropertychange", La), (Gr = Qr = null));
  }
  function La(e) {
    if (e.propertyName === "value" && Ki(Gr)) {
      var t = [];
      Ra(t, Gr, e, _l(e)), ea(Zp, t);
    }
  }
  function eh(e, t, n) {
    e === "focusin"
      ? (Ma(), (Qr = t), (Gr = n), Qr.attachEvent("onpropertychange", La))
      : e === "focusout" && Ma();
  }
  function th(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ki(Gr);
  }
  function nh(e, t) {
    if (e === "click") return Ki(t);
  }
  function rh(e, t) {
    if (e === "input" || e === "change") return Ki(t);
  }
  function ih(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : ih;
  function Xr(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!x.call(t, o) || !wt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function za(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Da(e, t) {
    var n = za(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = za(n);
    }
  }
  function Ia(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ia(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ba() {
    for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ni(e.document);
    }
    return t;
  }
  function $l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function oh(e) {
    var t = ba(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ia(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && $l(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            a = Math.min(r.start, o);
          (r = r.end === void 0 ? a : Math.min(r.end, o)),
            !e.extend && a > r && ((o = r), (r = a), (a = o)),
            (o = Da(n, a));
          var f = Da(n, r);
          o &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var lh = _ && "documentMode" in document && 11 >= document.documentMode,
    ir = null,
    Ul = null,
    qr = null,
    Vl = !1;
  function Fa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vl ||
      ir == null ||
      ir !== Ni(r) ||
      ((r = ir),
      "selectionStart" in r && $l(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qr && Xr(qr, r)) ||
        ((qr = r),
        (r = qi(Ul, "onSelect")),
        0 < r.length &&
          ((t = new Ml("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ir))));
  }
  function Qi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var or = {
      animationend: Qi("Animation", "AnimationEnd"),
      animationiteration: Qi("Animation", "AnimationIteration"),
      animationstart: Qi("Animation", "AnimationStart"),
      transitionend: Qi("Transition", "TransitionEnd"),
    },
    Wl = {},
    Ba = {};
  _ &&
    ((Ba = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete or.animationend.animation,
      delete or.animationiteration.animation,
      delete or.animationstart.animation),
    "TransitionEvent" in window || delete or.transitionend.transition);
  function Gi(e) {
    if (Wl[e]) return Wl[e];
    if (!or[e]) return e;
    var t = or[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ba) return (Wl[e] = t[n]);
    return e;
  }
  var $a = Gi("animationend"),
    Ua = Gi("animationiteration"),
    Va = Gi("animationstart"),
    Wa = Gi("transitionend"),
    Ha = new Map(),
    Ka =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function dn(e, t) {
    Ha.set(e, t), d(t, [e]);
  }
  for (var Hl = 0; Hl < Ka.length; Hl++) {
    var Kl = Ka[Hl],
      sh = Kl.toLowerCase(),
      uh = Kl[0].toUpperCase() + Kl.slice(1);
    dn(sh, "on" + uh);
  }
  dn($a, "onAnimationEnd"),
    dn(Ua, "onAnimationIteration"),
    dn(Va, "onAnimationStart"),
    dn("dblclick", "onDoubleClick"),
    dn("focusin", "onFocus"),
    dn("focusout", "onBlur"),
    dn(Wa, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Yr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ah = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Yr)
    );
  function Qa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), sp(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ga(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var p = r[f],
              m = p.instance,
              O = p.currentTarget;
            if (((p = p.listener), m !== a && o.isPropagationStopped()))
              break e;
            Qa(o, p, O), (a = m);
          }
        else
          for (f = 0; f < r.length; f++) {
            if (
              ((p = r[f]),
              (m = p.instance),
              (O = p.currentTarget),
              (p = p.listener),
              m !== a && o.isPropagationStopped())
            )
              break e;
            Qa(o, p, O), (a = m);
          }
      }
    }
    if (Ti) throw ((e = kl), (Ti = !1), (kl = null), e);
  }
  function he(e, t) {
    var n = t[es];
    n === void 0 && (n = t[es] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xa(t, e, 2, !1), n.add(r));
  }
  function Ql(e, t, n) {
    var r = 0;
    t && (r |= 4), Xa(n, e, r, t);
  }
  var Xi = "_reactListening" + Math.random().toString(36).slice(2);
  function Zr(e) {
    if (!e[Xi]) {
      (e[Xi] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (ah.has(n) || Ql(n, !1, e), Ql(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xi] || ((t[Xi] = !0), Ql("selectionchange", !1, t));
    }
  }
  function Xa(e, t, n, r) {
    switch (ya(t)) {
      case 1:
        var o = kp;
        break;
      case 4:
        o = Op;
        break;
      default:
        o = Rl;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !xl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function Gl(e, t, n, r, o) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var p = r.stateNode.containerInfo;
          if (p === o || (p.nodeType === 8 && p.parentNode === o)) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var m = f.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = f.stateNode.containerInfo),
                m === o || (m.nodeType === 8 && m.parentNode === o))
              )
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = An(p)), f === null)) return;
            if (((m = f.tag), m === 5 || m === 6)) {
              r = a = f;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    ea(function () {
      var O = a,
        N = _l(n),
        R = [];
      e: {
        var j = Ha.get(e);
        if (j !== void 0) {
          var z = Ml,
            F = e;
          switch (e) {
            case "keypress":
              if (Vi(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = Fp;
              break;
            case "focusin":
              (F = "focus"), (z = Dl);
              break;
            case "focusout":
              (F = "blur"), (z = Dl);
              break;
            case "beforeblur":
            case "afterblur":
              z = Dl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = wa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = jp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Up;
              break;
            case $a:
            case Ua:
            case Va:
              z = Rp;
              break;
            case Wa:
              z = Wp;
              break;
            case "scroll":
              z = Ep;
              break;
            case "wheel":
              z = Kp;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Tp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = ka;
          }
          var B = (t & 4) !== 0,
            Oe = !B && e === "scroll",
            w = B ? (j !== null ? j + "Capture" : null) : j;
          B = [];
          for (var g = O, k; g !== null; ) {
            k = g;
            var A = k.stateNode;
            if (
              (k.tag === 5 &&
                A !== null &&
                ((k = A),
                w !== null &&
                  ((A = Lr(g, w)), A != null && B.push(Jr(g, A, k)))),
              Oe)
            )
              break;
            g = g.return;
          }
          0 < B.length &&
            ((j = new z(j, F, null, n, N)), R.push({ event: j, listeners: B }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            j &&
              n !== yl &&
              (F = n.relatedTarget || n.fromElement) &&
              (An(F) || F[Ht]))
          )
            break e;
          if (
            (z || j) &&
            ((j =
              N.window === N
                ? N
                : (j = N.ownerDocument)
                ? j.defaultView || j.parentWindow
                : window),
            z
              ? ((F = n.relatedTarget || n.toElement),
                (z = O),
                (F = F ? An(F) : null),
                F !== null &&
                  ((Oe = Rn(F)), F !== Oe || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((z = null), (F = O)),
            z !== F)
          ) {
            if (
              ((B = wa),
              (A = "onMouseLeave"),
              (w = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((B = ka),
                (A = "onPointerLeave"),
                (w = "onPointerEnter"),
                (g = "pointer")),
              (Oe = z == null ? j : ur(z)),
              (k = F == null ? j : ur(F)),
              (j = new B(A, g + "leave", z, n, N)),
              (j.target = Oe),
              (j.relatedTarget = k),
              (A = null),
              An(N) === O &&
                ((B = new B(w, g + "enter", F, n, N)),
                (B.target = k),
                (B.relatedTarget = Oe),
                (A = B)),
              (Oe = A),
              z && F)
            )
              t: {
                for (B = z, w = F, g = 0, k = B; k; k = lr(k)) g++;
                for (k = 0, A = w; A; A = lr(A)) k++;
                for (; 0 < g - k; ) (B = lr(B)), g--;
                for (; 0 < k - g; ) (w = lr(w)), k--;
                for (; g--; ) {
                  if (B === w || (w !== null && B === w.alternate)) break t;
                  (B = lr(B)), (w = lr(w));
                }
                B = null;
              }
            else B = null;
            z !== null && qa(R, j, z, B, !1),
              F !== null && Oe !== null && qa(R, Oe, F, B, !0);
          }
        }
        e: {
          if (
            ((j = O ? ur(O) : window),
            (z = j.nodeName && j.nodeName.toLowerCase()),
            z === "select" || (z === "input" && j.type === "file"))
          )
            var $ = Jp;
          else if (Na(j))
            if (Aa) $ = rh;
            else {
              $ = th;
              var V = eh;
            }
          else
            (z = j.nodeName) &&
              z.toLowerCase() === "input" &&
              (j.type === "checkbox" || j.type === "radio") &&
              ($ = nh);
          if ($ && ($ = $(e, O))) {
            Ra(R, $, n, N);
            break e;
          }
          V && V(e, j, O),
            e === "focusout" &&
              (V = j._wrapperState) &&
              V.controlled &&
              j.type === "number" &&
              pl(j, "number", j.value);
        }
        switch (((V = O ? ur(O) : window), e)) {
          case "focusin":
            (Na(V) || V.contentEditable === "true") &&
              ((ir = V), (Ul = O), (qr = null));
            break;
          case "focusout":
            qr = Ul = ir = null;
            break;
          case "mousedown":
            Vl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Vl = !1), Fa(R, n, N);
            break;
          case "selectionchange":
            if (lh) break;
          case "keydown":
          case "keyup":
            Fa(R, n, N);
        }
        var W;
        if (bl)
          e: {
            switch (e) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break e;
              case "compositionend":
                Q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break e;
            }
            Q = void 0;
          }
        else
          rr
            ? ja(e, n) && (Q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (Oa &&
            n.locale !== "ko" &&
            (rr || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && rr && (W = _a())
              : ((fn = N),
                (Tl = "value" in fn ? fn.value : fn.textContent),
                (rr = !0))),
          (V = qi(O, Q)),
          0 < V.length &&
            ((Q = new xa(Q, e, null, n, N)),
            R.push({ event: Q, listeners: V }),
            W ? (Q.data = W) : ((W = Ca(n)), W !== null && (Q.data = W)))),
          (W = Gp ? Xp(e, n) : qp(e, n)) &&
            ((O = qi(O, "onBeforeInput")),
            0 < O.length &&
              ((N = new xa("onBeforeInput", "beforeinput", null, n, N)),
              R.push({ event: N, listeners: O }),
              (N.data = W)));
      }
      Ga(R, t);
    });
  }
  function Jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        a = o.stateNode;
      o.tag === 5 &&
        a !== null &&
        ((o = a),
        (a = Lr(e, n)),
        a != null && r.unshift(Jr(e, a, o)),
        (a = Lr(e, t)),
        a != null && r.push(Jr(e, a, o))),
        (e = e.return);
    }
    return r;
  }
  function lr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function qa(e, t, n, r, o) {
    for (var a = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n,
        m = p.alternate,
        O = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 &&
        O !== null &&
        ((p = O),
        o
          ? ((m = Lr(n, a)), m != null && f.unshift(Jr(n, m, p)))
          : o || ((m = Lr(n, a)), m != null && f.push(Jr(n, m, p)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ch = /\r\n?/g,
    fh = /\u0000|\uFFFD/g;
  function Ya(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ch,
        `
`
      )
      .replace(fh, "");
  }
  function Yi(e, t, n) {
    if (((t = Ya(t)), Ya(e) !== t && n)) throw Error(s(425));
  }
  function Zi() {}
  var Xl = null,
    ql = null;
  function Yl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zl = typeof setTimeout == "function" ? setTimeout : void 0,
    dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Za = typeof Promise == "function" ? Promise : void 0,
    ph =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Za < "u"
        ? function (e) {
            return Za.resolve(null).then(e).catch(hh);
          }
        : Zl;
  function hh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Jl(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), Vr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    Vr(t);
  }
  function pn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ja(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sr = Math.random().toString(36).slice(2),
    zt = "__reactFiber$" + sr,
    ei = "__reactProps$" + sr,
    Ht = "__reactContainer$" + sr,
    es = "__reactEvents$" + sr,
    vh = "__reactListeners$" + sr,
    mh = "__reactHandles$" + sr;
  function An(e) {
    var t = e[zt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ht] || n[zt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ja(e); e !== null; ) {
            if ((n = e[zt])) return n;
            e = Ja(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ti(e) {
    return (
      (e = e[zt] || e[Ht]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function ur(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ji(e) {
    return e[ei] || null;
  }
  var ts = [],
    ar = -1;
  function hn(e) {
    return { current: e };
  }
  function ve(e) {
    0 > ar || ((e.current = ts[ar]), (ts[ar] = null), ar--);
  }
  function de(e, t) {
    ar++, (ts[ar] = e.current), (e.current = t);
  }
  var vn = {},
    be = hn(vn),
    Qe = hn(!1),
    Tn = vn;
  function cr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      a;
    for (a in n) o[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function Ge(e) {
    return (e = e.childContextTypes), e != null;
  }
  function eo() {
    ve(Qe), ve(be);
  }
  function ec(e, t, n) {
    if (be.current !== vn) throw Error(s(168));
    de(be, t), de(Qe, n);
  }
  function tc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(s(108, fe(e) || "Unknown", o));
    return b({}, n, r);
  }
  function to(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        vn),
      (Tn = be.current),
      de(be, e),
      de(Qe, Qe.current),
      !0
    );
  }
  function nc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = tc(e, t, Tn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ve(Qe),
        ve(be),
        de(be, e))
      : ve(Qe),
      de(Qe, n);
  }
  var Kt = null,
    no = !1,
    ns = !1;
  function rc(e) {
    Kt === null ? (Kt = [e]) : Kt.push(e);
  }
  function gh(e) {
    (no = !0), rc(e);
  }
  function mn() {
    if (!ns && Kt !== null) {
      ns = !0;
      var e = 0,
        t = ae;
      try {
        var n = Kt;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Kt = null), (no = !1);
      } catch (o) {
        throw (Kt !== null && (Kt = Kt.slice(e + 1)), oa(Ol, mn), o);
      } finally {
        (ae = t), (ns = !1);
      }
    }
    return null;
  }
  var fr = [],
    dr = 0,
    ro = null,
    io = 0,
    at = [],
    ct = 0,
    Mn = null,
    Qt = 1,
    Gt = "";
  function Ln(e, t) {
    (fr[dr++] = io), (fr[dr++] = ro), (ro = e), (io = t);
  }
  function ic(e, t, n) {
    (at[ct++] = Qt), (at[ct++] = Gt), (at[ct++] = Mn), (Mn = e);
    var r = Qt;
    e = Gt;
    var o = 32 - St(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var a = 32 - St(t) + o;
    if (30 < a) {
      var f = o - (o % 5);
      (a = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (o -= f),
        (Qt = (1 << (32 - St(t) + o)) | (n << o) | r),
        (Gt = a + e);
    } else (Qt = (1 << a) | (n << o) | r), (Gt = e);
  }
  function rs(e) {
    e.return !== null && (Ln(e, 1), ic(e, 1, 0));
  }
  function is(e) {
    for (; e === ro; )
      (ro = fr[--dr]), (fr[dr] = null), (io = fr[--dr]), (fr[dr] = null);
    for (; e === Mn; )
      (Mn = at[--ct]),
        (at[ct] = null),
        (Gt = at[--ct]),
        (at[ct] = null),
        (Qt = at[--ct]),
        (at[ct] = null);
  }
  var nt = null,
    rt = null,
    ge = !1,
    xt = null;
  function oc(e, t) {
    var n = ht(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function lc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = pn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Mn !== null ? { id: Qt, overflow: Gt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ht(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function os(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ls(e) {
    if (ge) {
      var t = rt;
      if (t) {
        var n = t;
        if (!lc(e, t)) {
          if (os(e)) throw Error(s(418));
          t = pn(n.nextSibling);
          var r = nt;
          t && lc(e, t)
            ? oc(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (nt = e));
        }
      } else {
        if (os(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (ge = !1), (nt = e);
      }
    }
  }
  function sc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function oo(e) {
    if (e !== nt) return !1;
    if (!ge) return sc(e), (ge = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Yl(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (os(e)) throw (uc(), Error(s(418)));
      for (; t; ) oc(e, t), (t = pn(t.nextSibling));
    }
    if ((sc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = pn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function uc() {
    for (var e = rt; e; ) e = pn(e.nextSibling);
  }
  function pr() {
    (rt = nt = null), (ge = !1);
  }
  function ss(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  var yh = le.ReactCurrentBatchConfig;
  function ni(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var o = r,
          a = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (f) {
              var p = o.refs;
              f === null ? delete p[a] : (p[a] = f);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function lo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ac(e) {
    var t = e._init;
    return t(e._payload);
  }
  function cc(e) {
    function t(w, g) {
      if (e) {
        var k = w.deletions;
        k === null ? ((w.deletions = [g]), (w.flags |= 16)) : k.push(g);
      }
    }
    function n(w, g) {
      if (!e) return null;
      for (; g !== null; ) t(w, g), (g = g.sibling);
      return null;
    }
    function r(w, g) {
      for (w = new Map(); g !== null; )
        g.key !== null ? w.set(g.key, g) : w.set(g.index, g), (g = g.sibling);
      return w;
    }
    function o(w, g) {
      return (w = On(w, g)), (w.index = 0), (w.sibling = null), w;
    }
    function a(w, g, k) {
      return (
        (w.index = k),
        e
          ? ((k = w.alternate),
            k !== null
              ? ((k = k.index), k < g ? ((w.flags |= 2), g) : k)
              : ((w.flags |= 2), g))
          : ((w.flags |= 1048576), g)
      );
    }
    function f(w) {
      return e && w.alternate === null && (w.flags |= 2), w;
    }
    function p(w, g, k, A) {
      return g === null || g.tag !== 6
        ? ((g = Zs(k, w.mode, A)), (g.return = w), g)
        : ((g = o(g, k)), (g.return = w), g);
    }
    function m(w, g, k, A) {
      var $ = k.type;
      return $ === Me
        ? N(w, g, k.props.children, A, k.key)
        : g !== null &&
          (g.elementType === $ ||
            (typeof $ == "object" &&
              $ !== null &&
              $.$$typeof === Ke &&
              ac($) === g.type))
        ? ((A = o(g, k.props)), (A.ref = ni(w, g, k)), (A.return = w), A)
        : ((A = Ao(k.type, k.key, k.props, null, w.mode, A)),
          (A.ref = ni(w, g, k)),
          (A.return = w),
          A);
    }
    function O(w, g, k, A) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== k.containerInfo ||
        g.stateNode.implementation !== k.implementation
        ? ((g = Js(k, w.mode, A)), (g.return = w), g)
        : ((g = o(g, k.children || [])), (g.return = w), g);
    }
    function N(w, g, k, A, $) {
      return g === null || g.tag !== 7
        ? ((g = Un(k, w.mode, A, $)), (g.return = w), g)
        : ((g = o(g, k)), (g.return = w), g);
    }
    function R(w, g, k) {
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return (g = Zs("" + g, w.mode, k)), (g.return = w), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ee:
            return (
              (k = Ao(g.type, g.key, g.props, null, w.mode, k)),
              (k.ref = ni(w, null, g)),
              (k.return = w),
              k
            );
          case ye:
            return (g = Js(g, w.mode, k)), (g.return = w), g;
          case Ke:
            var A = g._init;
            return R(w, A(g._payload), k);
        }
        if (Ar(g) || H(g))
          return (g = Un(g, w.mode, k, null)), (g.return = w), g;
        lo(w, g);
      }
      return null;
    }
    function j(w, g, k, A) {
      var $ = g !== null ? g.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return $ !== null ? null : p(w, g, "" + k, A);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ee:
            return k.key === $ ? m(w, g, k, A) : null;
          case ye:
            return k.key === $ ? O(w, g, k, A) : null;
          case Ke:
            return ($ = k._init), j(w, g, $(k._payload), A);
        }
        if (Ar(k) || H(k)) return $ !== null ? null : N(w, g, k, A, null);
        lo(w, k);
      }
      return null;
    }
    function z(w, g, k, A, $) {
      if ((typeof A == "string" && A !== "") || typeof A == "number")
        return (w = w.get(k) || null), p(g, w, "" + A, $);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Ee:
            return (
              (w = w.get(A.key === null ? k : A.key) || null), m(g, w, A, $)
            );
          case ye:
            return (
              (w = w.get(A.key === null ? k : A.key) || null), O(g, w, A, $)
            );
          case Ke:
            var V = A._init;
            return z(w, g, k, V(A._payload), $);
        }
        if (Ar(A) || H(A)) return (w = w.get(k) || null), N(g, w, A, $, null);
        lo(g, A);
      }
      return null;
    }
    function F(w, g, k, A) {
      for (
        var $ = null, V = null, W = g, Q = (g = 0), Ae = null;
        W !== null && Q < k.length;
        Q++
      ) {
        W.index > Q ? ((Ae = W), (W = null)) : (Ae = W.sibling);
        var ie = j(w, W, k[Q], A);
        if (ie === null) {
          W === null && (W = Ae);
          break;
        }
        e && W && ie.alternate === null && t(w, W),
          (g = a(ie, g, Q)),
          V === null ? ($ = ie) : (V.sibling = ie),
          (V = ie),
          (W = Ae);
      }
      if (Q === k.length) return n(w, W), ge && Ln(w, Q), $;
      if (W === null) {
        for (; Q < k.length; Q++)
          (W = R(w, k[Q], A)),
            W !== null &&
              ((g = a(W, g, Q)),
              V === null ? ($ = W) : (V.sibling = W),
              (V = W));
        return ge && Ln(w, Q), $;
      }
      for (W = r(w, W); Q < k.length; Q++)
        (Ae = z(W, w, Q, k[Q], A)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              W.delete(Ae.key === null ? Q : Ae.key),
            (g = a(Ae, g, Q)),
            V === null ? ($ = Ae) : (V.sibling = Ae),
            (V = Ae));
      return (
        e &&
          W.forEach(function (En) {
            return t(w, En);
          }),
        ge && Ln(w, Q),
        $
      );
    }
    function B(w, g, k, A) {
      var $ = H(k);
      if (typeof $ != "function") throw Error(s(150));
      if (((k = $.call(k)), k == null)) throw Error(s(151));
      for (
        var V = ($ = null), W = g, Q = (g = 0), Ae = null, ie = k.next();
        W !== null && !ie.done;
        Q++, ie = k.next()
      ) {
        W.index > Q ? ((Ae = W), (W = null)) : (Ae = W.sibling);
        var En = j(w, W, ie.value, A);
        if (En === null) {
          W === null && (W = Ae);
          break;
        }
        e && W && En.alternate === null && t(w, W),
          (g = a(En, g, Q)),
          V === null ? ($ = En) : (V.sibling = En),
          (V = En),
          (W = Ae);
      }
      if (ie.done) return n(w, W), ge && Ln(w, Q), $;
      if (W === null) {
        for (; !ie.done; Q++, ie = k.next())
          (ie = R(w, ie.value, A)),
            ie !== null &&
              ((g = a(ie, g, Q)),
              V === null ? ($ = ie) : (V.sibling = ie),
              (V = ie));
        return ge && Ln(w, Q), $;
      }
      for (W = r(w, W); !ie.done; Q++, ie = k.next())
        (ie = z(W, w, Q, ie.value, A)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              W.delete(ie.key === null ? Q : ie.key),
            (g = a(ie, g, Q)),
            V === null ? ($ = ie) : (V.sibling = ie),
            (V = ie));
      return (
        e &&
          W.forEach(function (Yh) {
            return t(w, Yh);
          }),
        ge && Ln(w, Q),
        $
      );
    }
    function Oe(w, g, k, A) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === Me &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case Ee:
            e: {
              for (var $ = k.key, V = g; V !== null; ) {
                if (V.key === $) {
                  if ((($ = k.type), $ === Me)) {
                    if (V.tag === 7) {
                      n(w, V.sibling),
                        (g = o(V, k.props.children)),
                        (g.return = w),
                        (w = g);
                      break e;
                    }
                  } else if (
                    V.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === Ke &&
                      ac($) === V.type)
                  ) {
                    n(w, V.sibling),
                      (g = o(V, k.props)),
                      (g.ref = ni(w, V, k)),
                      (g.return = w),
                      (w = g);
                    break e;
                  }
                  n(w, V);
                  break;
                } else t(w, V);
                V = V.sibling;
              }
              k.type === Me
                ? ((g = Un(k.props.children, w.mode, A, k.key)),
                  (g.return = w),
                  (w = g))
                : ((A = Ao(k.type, k.key, k.props, null, w.mode, A)),
                  (A.ref = ni(w, g, k)),
                  (A.return = w),
                  (w = A));
            }
            return f(w);
          case ye:
            e: {
              for (V = k.key; g !== null; ) {
                if (g.key === V)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === k.containerInfo &&
                    g.stateNode.implementation === k.implementation
                  ) {
                    n(w, g.sibling),
                      (g = o(g, k.children || [])),
                      (g.return = w),
                      (w = g);
                    break e;
                  } else {
                    n(w, g);
                    break;
                  }
                else t(w, g);
                g = g.sibling;
              }
              (g = Js(k, w.mode, A)), (g.return = w), (w = g);
            }
            return f(w);
          case Ke:
            return (V = k._init), Oe(w, g, V(k._payload), A);
        }
        if (Ar(k)) return F(w, g, k, A);
        if (H(k)) return B(w, g, k, A);
        lo(w, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          g !== null && g.tag === 6
            ? (n(w, g.sibling), (g = o(g, k)), (g.return = w), (w = g))
            : (n(w, g), (g = Zs(k, w.mode, A)), (g.return = w), (w = g)),
          f(w))
        : n(w, g);
    }
    return Oe;
  }
  var hr = cc(!0),
    fc = cc(!1),
    so = hn(null),
    uo = null,
    vr = null,
    us = null;
  function as() {
    us = vr = uo = null;
  }
  function cs(e) {
    var t = so.current;
    ve(so), (e._currentValue = t);
  }
  function fs(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function mr(e, t) {
    (uo = e),
      (us = vr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Xe = !0), (e.firstContext = null));
  }
  function ft(e) {
    var t = e._currentValue;
    if (us !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), vr === null)) {
        if (uo === null) throw Error(s(308));
        (vr = e), (uo.dependencies = { lanes: 0, firstContext: e });
      } else vr = vr.next = e;
    return t;
  }
  var zn = null;
  function ds(e) {
    zn === null ? (zn = [e]) : zn.push(e);
  }
  function dc(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), ds(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Xt(e, r)
    );
  }
  function Xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var gn = !1;
  function ps(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function pc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function qt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ee & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Xt(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), ds(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Xt(e, n)
    );
  }
  function ao(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), jl(e, n);
    }
  }
  function hc(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          a === null ? (o = a = f) : (a = a.next = f), (n = n.next);
        } while (n !== null);
        a === null ? (o = a = t) : (a = a.next = t);
      } else o = a = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function co(e, t, n, r) {
    var o = e.updateQueue;
    gn = !1;
    var a = o.firstBaseUpdate,
      f = o.lastBaseUpdate,
      p = o.shared.pending;
    if (p !== null) {
      o.shared.pending = null;
      var m = p,
        O = m.next;
      (m.next = null), f === null ? (a = O) : (f.next = O), (f = m);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (p = N.lastBaseUpdate),
        p !== f &&
          (p === null ? (N.firstBaseUpdate = O) : (p.next = O),
          (N.lastBaseUpdate = m)));
    }
    if (a !== null) {
      var R = o.baseState;
      (f = 0), (N = O = m = null), (p = a);
      do {
        var j = p.lane,
          z = p.eventTime;
        if ((r & j) === j) {
          N !== null &&
            (N = N.next =
              {
                eventTime: z,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var F = e,
              B = p;
            switch (((j = t), (z = n), B.tag)) {
              case 1:
                if (((F = B.payload), typeof F == "function")) {
                  R = F.call(z, R, j);
                  break e;
                }
                R = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = B.payload),
                  (j = typeof F == "function" ? F.call(z, R, j) : F),
                  j == null)
                )
                  break e;
                R = b({}, R, j);
                break e;
              case 2:
                gn = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (j = o.effects),
            j === null ? (o.effects = [p]) : j.push(p));
        } else
          (z = {
            eventTime: z,
            lane: j,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            N === null ? ((O = N = z), (m = R)) : (N = N.next = z),
            (f |= j);
        if (((p = p.next), p === null)) {
          if (((p = o.shared.pending), p === null)) break;
          (j = p),
            (p = j.next),
            (j.next = null),
            (o.lastBaseUpdate = j),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (m = R),
        (o.baseState = m),
        (o.firstBaseUpdate = O),
        (o.lastBaseUpdate = N),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (f |= o.lane), (o = o.next);
        while (o !== t);
      } else a === null && (o.shared.lanes = 0);
      (bn |= f), (e.lanes = f), (e.memoizedState = R);
    }
  }
  function vc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(s(191, o));
          o.call(r);
        }
      }
  }
  var ri = {},
    Dt = hn(ri),
    ii = hn(ri),
    oi = hn(ri);
  function Dn(e) {
    if (e === ri) throw Error(s(174));
    return e;
  }
  function hs(e, t) {
    switch ((de(oi, t), de(ii, e), de(Dt, ri), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : vl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = vl(t, e));
    }
    ve(Dt), de(Dt, t);
  }
  function gr() {
    ve(Dt), ve(ii), ve(oi);
  }
  function mc(e) {
    Dn(oi.current);
    var t = Dn(Dt.current),
      n = vl(t, e.type);
    t !== n && (de(ii, e), de(Dt, n));
  }
  function vs(e) {
    ii.current === e && (ve(Dt), ve(ii));
  }
  var _e = hn(0);
  function fo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ms = [];
  function gs() {
    for (var e = 0; e < ms.length; e++)
      ms[e]._workInProgressVersionPrimary = null;
    ms.length = 0;
  }
  var po = le.ReactCurrentDispatcher,
    ys = le.ReactCurrentBatchConfig,
    In = 0,
    Se = null,
    je = null,
    Ne = null,
    ho = !1,
    li = !1,
    si = 0,
    _h = 0;
  function Fe() {
    throw Error(s(321));
  }
  function _s(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function Ss(e, t, n, r, o, a) {
    if (
      ((In = a),
      (Se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (po.current = e === null || e.memoizedState === null ? kh : Oh),
      (e = n(r, o)),
      li)
    ) {
      a = 0;
      do {
        if (((li = !1), (si = 0), 25 <= a)) throw Error(s(301));
        (a += 1),
          (Ne = je = null),
          (t.updateQueue = null),
          (po.current = Eh),
          (e = n(r, o));
      } while (li);
    }
    if (
      ((po.current = go),
      (t = je !== null && je.next !== null),
      (In = 0),
      (Ne = je = Se = null),
      (ho = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function ws() {
    var e = si !== 0;
    return (si = 0), e;
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (Se.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function dt() {
    if (je === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Ne === null ? Se.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (je = e);
    else {
      if (e === null) throw Error(s(310));
      (je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Ne === null ? (Se.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function ui(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xs(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = je,
      o = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (o !== null) {
        var f = o.next;
        (o.next = a.next), (a.next = f);
      }
      (r.baseQueue = o = a), (n.pending = null);
    }
    if (o !== null) {
      (a = o.next), (r = r.baseState);
      var p = (f = null),
        m = null,
        O = a;
      do {
        var N = O.lane;
        if ((In & N) === N)
          m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null,
              }),
            (r = O.hasEagerState ? O.eagerState : e(r, O.action));
        else {
          var R = {
            lane: N,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          };
          m === null ? ((p = m = R), (f = r)) : (m = m.next = R),
            (Se.lanes |= N),
            (bn |= N);
        }
        O = O.next;
      } while (O !== null && O !== a);
      m === null ? (f = r) : (m.next = p),
        wt(r, t.memoizedState) || (Xe = !0),
        (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = m),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (a = o.lane), (Se.lanes |= a), (bn |= a), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ks(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      a = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var f = (o = o.next);
      do (a = e(a, f.action)), (f = f.next);
      while (f !== o);
      wt(a, t.memoizedState) || (Xe = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function gc() {}
  function yc(e, t) {
    var n = Se,
      r = dt(),
      o = t(),
      a = !wt(r.memoizedState, o);
    if (
      (a && ((r.memoizedState = o), (Xe = !0)),
      (r = r.queue),
      Os(wc.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ai(9, Sc.bind(null, n, r, o, t), void 0, null),
        Re === null)
      )
        throw Error(s(349));
      In & 30 || _c(n, t, o);
    }
    return o;
  }
  function _c(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Sc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), xc(t) && kc(e);
  }
  function wc(e, t, n) {
    return n(function () {
      xc(t) && kc(e);
    });
  }
  function xc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function kc(e) {
    var t = Xt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function Oc(e) {
    var t = It();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ui,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = xh.bind(null, Se, e)),
      [t.memoizedState, e]
    );
  }
  function ai(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Se.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ec() {
    return dt().memoizedState;
  }
  function vo(e, t, n, r) {
    var o = It();
    (Se.flags |= e),
      (o.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function mo(e, t, n, r) {
    var o = dt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (je !== null) {
      var f = je.memoizedState;
      if (((a = f.destroy), r !== null && _s(r, f.deps))) {
        o.memoizedState = ai(t, n, a, r);
        return;
      }
    }
    (Se.flags |= e), (o.memoizedState = ai(1 | t, n, a, r));
  }
  function Pc(e, t) {
    return vo(8390656, 8, e, t);
  }
  function Os(e, t) {
    return mo(2048, 8, e, t);
  }
  function jc(e, t) {
    return mo(4, 2, e, t);
  }
  function Cc(e, t) {
    return mo(4, 4, e, t);
  }
  function Nc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Rc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), mo(4, 4, Nc.bind(null, t, e), n)
    );
  }
  function Es() {}
  function Ac(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _s(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Tc(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _s(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Mc(e, t, n) {
    return In & 21
      ? (wt(n, t) ||
          ((n = aa()), (Se.lanes |= n), (bn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
  }
  function Sh(e, t) {
    var n = ae;
    (ae = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ys.transition;
    ys.transition = {};
    try {
      e(!1), t();
    } finally {
      (ae = n), (ys.transition = r);
    }
  }
  function Lc() {
    return dt().memoizedState;
  }
  function wh(e, t, n) {
    var r = xn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zc(e))
    )
      Dc(t, n);
    else if (((n = dc(e, t, n, r)), n !== null)) {
      var o = Ve();
      Pt(n, e, r, o), Ic(n, t, r);
    }
  }
  function xh(e, t, n) {
    var r = xn(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zc(e)) Dc(t, o);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var f = t.lastRenderedState,
            p = a(f, n);
          if (((o.hasEagerState = !0), (o.eagerState = p), wt(p, f))) {
            var m = t.interleaved;
            m === null
              ? ((o.next = o), ds(t))
              : ((o.next = m.next), (m.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = dc(e, t, o, r)),
        n !== null && ((o = Ve()), Pt(n, e, r, o), Ic(n, t, r));
    }
  }
  function zc(e) {
    var t = e.alternate;
    return e === Se || (t !== null && t === Se);
  }
  function Dc(e, t) {
    li = ho = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Ic(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), jl(e, n);
    }
  }
  var go = {
      readContext: ft,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    kh = {
      readContext: ft,
      useCallback: function (e, t) {
        return (It().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ft,
      useEffect: Pc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          vo(4194308, 4, Nc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return vo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return vo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = It();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = It();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = wh.bind(null, Se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = It();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Oc,
      useDebugValue: Es,
      useDeferredValue: function (e) {
        return (It().memoizedState = e);
      },
      useTransition: function () {
        var e = Oc(!1),
          t = e[0];
        return (e = Sh.bind(null, e[1])), (It().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Se,
          o = It();
        if (ge) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(s(349));
          In & 30 || _c(r, t, n);
        }
        o.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (o.queue = a),
          Pc(wc.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          ai(9, Sc.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = It(),
          t = Re.identifierPrefix;
        if (ge) {
          var n = Gt,
            r = Qt;
          (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = si++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = _h++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Oh = {
      readContext: ft,
      useCallback: Ac,
      useContext: ft,
      useEffect: Os,
      useImperativeHandle: Rc,
      useInsertionEffect: jc,
      useLayoutEffect: Cc,
      useMemo: Tc,
      useReducer: xs,
      useRef: Ec,
      useState: function () {
        return xs(ui);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
        var t = dt();
        return Mc(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = xs(ui)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: gc,
      useSyncExternalStore: yc,
      useId: Lc,
      unstable_isNewReconciler: !1,
    },
    Eh = {
      readContext: ft,
      useCallback: Ac,
      useContext: ft,
      useEffect: Os,
      useImperativeHandle: Rc,
      useInsertionEffect: jc,
      useLayoutEffect: Cc,
      useMemo: Tc,
      useReducer: ks,
      useRef: Ec,
      useState: function () {
        return ks(ui);
      },
      useDebugValue: Es,
      useDeferredValue: function (e) {
        var t = dt();
        return je === null ? (t.memoizedState = e) : Mc(t, je.memoizedState, e);
      },
      useTransition: function () {
        var e = ks(ui)[0],
          t = dt().memoizedState;
        return [e, t];
      },
      useMutableSource: gc,
      useSyncExternalStore: yc,
      useId: Lc,
      unstable_isNewReconciler: !1,
    };
  function kt(e, t) {
    if (e && e.defaultProps) {
      (t = b({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ps(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var yo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Rn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        o = xn(e),
        a = qt(r, o);
      (a.payload = t),
        n != null && (a.callback = n),
        (t = yn(e, a, o)),
        t !== null && (Pt(t, e, o, r), ao(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        o = xn(e),
        a = qt(r, o);
      (a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = yn(e, a, o)),
        t !== null && (Pt(t, e, o, r), ao(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ve(),
        r = xn(e),
        o = qt(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = yn(e, o, r)),
        t !== null && (Pt(t, e, r, n), ao(t, e, r));
    },
  };
  function bc(e, t, n, r, o, a, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, a, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(n, r) || !Xr(o, a)
        : !0
    );
  }
  function Fc(e, t, n) {
    var r = !1,
      o = vn,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = ft(a))
        : ((o = Ge(t) ? Tn : be.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? cr(e, o) : vn)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = yo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function Bc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && yo.enqueueReplaceState(t, t.state, null);
  }
  function js(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ps(e);
    var a = t.contextType;
    typeof a == "object" && a !== null
      ? (o.context = ft(a))
      : ((a = Ge(t) ? Tn : be.current), (o.context = cr(e, a))),
      (o.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (Ps(e, t, a, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && yo.enqueueReplaceState(o, o.state, null),
        co(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function yr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ne(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (a) {
      o =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Cs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ns(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Ph = typeof WeakMap == "function" ? WeakMap : Map;
  function $c(e, t, n) {
    (n = qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Eo || ((Eo = !0), (Ws = r)), Ns(e, t);
      }),
      n
    );
  }
  function Uc(e, t, n) {
    (n = qt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Ns(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          Ns(e, t),
            typeof r != "function" &&
              (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : "",
          });
        }),
      n
    );
  }
  function Vc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ph();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Bh.bind(null, e, t, n)), t.then(e, e));
  }
  function Wc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Hc(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = qt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var jh = le.ReactCurrentOwner,
    Xe = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? fc(t, null, n, r) : hr(t, e.child, n, r);
  }
  function Kc(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return (
      mr(t, o),
      (r = Ss(e, t, n, r, a, o)),
      (n = ws()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Yt(e, t, o))
        : (ge && n && rs(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
    );
  }
  function Qc(e, t, n, r, o) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !Ys(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Gc(e, t, a, r, o))
        : ((e = Ao(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), !(e.lanes & o))) {
      var f = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Xr), n(f, r) && e.ref === t.ref)
      )
        return Yt(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = On(a, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Gc(e, t, n, r, o) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Xr(a, r) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
          e.flags & 131072 && (Xe = !0);
        else return (t.lanes = e.lanes), Yt(e, t, o);
    }
    return Rs(e, t, n, r, o);
  }
  function Xc(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(Sr, it),
          (it |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(Sr, it),
            (it |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = a !== null ? a.baseLanes : n),
          de(Sr, it),
          (it |= r);
      }
    else
      a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Sr, it),
        (it |= r);
    return Ue(e, t, o, n), t.child;
  }
  function qc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Rs(e, t, n, r, o) {
    var a = Ge(n) ? Tn : be.current;
    return (
      (a = cr(t, a)),
      mr(t, o),
      (n = Ss(e, t, n, r, a, o)),
      (r = ws()),
      e !== null && !Xe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Yt(e, t, o))
        : (ge && r && rs(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
    );
  }
  function Yc(e, t, n, r, o) {
    if (Ge(n)) {
      var a = !0;
      to(t);
    } else a = !1;
    if ((mr(t, o), t.stateNode === null))
      So(e, t), Fc(t, n, r), js(t, n, r, o), (r = !0);
    else if (e === null) {
      var f = t.stateNode,
        p = t.memoizedProps;
      f.props = p;
      var m = f.context,
        O = n.contextType;
      typeof O == "object" && O !== null
        ? (O = ft(O))
        : ((O = Ge(n) ? Tn : be.current), (O = cr(t, O)));
      var N = n.getDerivedStateFromProps,
        R =
          typeof N == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function";
      R ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((p !== r || m !== O) && Bc(t, f, r, O)),
        (gn = !1);
      var j = t.memoizedState;
      (f.state = j),
        co(t, r, f, o),
        (m = t.memoizedState),
        p !== r || j !== m || Qe.current || gn
          ? (typeof N == "function" && (Ps(t, n, N, r), (m = t.memoizedState)),
            (p = gn || bc(t, n, p, r, j, m, O))
              ? (R ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (f.props = r),
            (f.state = m),
            (f.context = O),
            (r = p))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (f = t.stateNode),
        pc(e, t),
        (p = t.memoizedProps),
        (O = t.type === t.elementType ? p : kt(t.type, p)),
        (f.props = O),
        (R = t.pendingProps),
        (j = f.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = ft(m))
          : ((m = Ge(n) ? Tn : be.current), (m = cr(t, m)));
      var z = n.getDerivedStateFromProps;
      (N =
        typeof z == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function") ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((p !== R || j !== m) && Bc(t, f, r, m)),
        (gn = !1),
        (j = t.memoizedState),
        (f.state = j),
        co(t, r, f, o);
      var F = t.memoizedState;
      p !== R || j !== F || Qe.current || gn
        ? (typeof z == "function" && (Ps(t, n, z, r), (F = t.memoizedState)),
          (O = gn || bc(t, n, O, r, j, F, m) || !1)
            ? (N ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(r, F, m),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, F, m)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (p === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (f.props = r),
          (f.state = F),
          (f.context = m),
          (r = O))
        : (typeof f.componentDidUpdate != "function" ||
            (p === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return As(e, t, n, r, a, o);
  }
  function As(e, t, n, r, o, a) {
    qc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return o && nc(t, n, !1), Yt(e, t, a);
    (r = t.stateNode), (jh.current = t);
    var p =
      f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = hr(t, e.child, null, a)), (t.child = hr(t, null, p, a)))
        : Ue(e, t, p, a),
      (t.memoizedState = r.state),
      o && nc(t, n, !0),
      t.child
    );
  }
  function Zc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ec(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ec(e, t.context, !1),
      hs(e, t.containerInfo);
  }
  function Jc(e, t, n, r, o) {
    return pr(), ss(o), (t.flags |= 256), Ue(e, t, n, r), t.child;
  }
  var Ts = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ms(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ef(e, t, n) {
    var r = t.pendingProps,
      o = _e.current,
      a = !1,
      f = (t.flags & 128) !== 0,
      p;
    if (
      ((p = f) ||
        (p = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      p
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      de(_e, o & 1),
      e === null)
    )
      return (
        ls(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((f = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (f = { mode: "hidden", children: f }),
                !(r & 1) && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = f))
                  : (a = To(f, r, 0, null)),
                (e = Un(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Ms(n)),
                (t.memoizedState = Ts),
                e)
              : Ls(t, f))
      );
    if (((o = e.memoizedState), o !== null && ((p = o.dehydrated), p !== null)))
      return Ch(e, t, f, r, p, o, n);
    if (a) {
      (a = r.fallback), (f = t.mode), (o = e.child), (p = o.sibling);
      var m = { mode: "hidden", children: r.children };
      return (
        !(f & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = On(o, m)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        p !== null ? (a = On(p, a)) : ((a = Un(a, f, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? Ms(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (a.memoizedState = f),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ts),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = On(a, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ls(e, t) {
    return (
      (t = To({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _o(e, t, n, r) {
    return (
      r !== null && ss(r),
      hr(t, e.child, null, n),
      (e = Ls(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ch(e, t, n, r, o, a, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Cs(Error(s(422)))), _o(e, t, f, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (o = t.mode),
          (r = To({ mode: "visible", children: r.children }, o, 0, null)),
          (a = Un(a, o, f, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && hr(t, e.child, null, f),
          (t.child.memoizedState = Ms(f)),
          (t.memoizedState = Ts),
          a);
    if (!(t.mode & 1)) return _o(e, t, f, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (a = Error(s(419))), (r = Cs(a, r, void 0)), _o(e, t, f, r)
      );
    }
    if (((p = (f & e.childLanes) !== 0), Xe || p)) {
      if (((r = Re), r !== null)) {
        switch (f & -f) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = o & (r.suspendedLanes | f) ? 0 : o),
          o !== 0 &&
            o !== a.retryLane &&
            ((a.retryLane = o), Xt(e, o), Pt(r, e, o, -1));
      }
      return qs(), (r = Cs(Error(s(421)))), _o(e, t, f, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = $h.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (rt = pn(o.nextSibling)),
        (nt = t),
        (ge = !0),
        (xt = null),
        e !== null &&
          ((at[ct++] = Qt),
          (at[ct++] = Gt),
          (at[ct++] = Mn),
          (Qt = e.id),
          (Gt = e.overflow),
          (Mn = t)),
        (t = Ls(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function tf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fs(e.return, t, n);
  }
  function zs(e, t, n, r, o) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = o));
  }
  function nf(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      a = r.tail;
    if ((Ue(e, t, r.children, n), (r = _e.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && tf(e, n, t);
          else if (e.tag === 19) tf(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((de(_e, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && fo(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            zs(t, !1, o, n, a);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && fo(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          zs(t, !0, n, null, a);
          break;
        case "together":
          zs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function So(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Yt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (bn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = On(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Nh(e, t, n) {
    switch (t.tag) {
      case 3:
        Zc(t), pr();
        break;
      case 5:
        mc(t);
        break;
      case 1:
        Ge(t.type) && to(t);
        break;
      case 4:
        hs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        de(so, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(_e, _e.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? ef(e, t, n)
            : (de(_e, _e.current & 1),
              (e = Yt(e, t, n)),
              e !== null ? e.sibling : null);
        de(_e, _e.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return nf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          de(_e, _e.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Xc(e, t, n);
    }
    return Yt(e, t, n);
  }
  var rf, Ds, of, lf;
  (rf = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ds = function () {}),
    (of = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), Dn(Dt.current);
        var a = null;
        switch (n) {
          case "input":
            (o = fl(e, o)), (r = fl(e, r)), (a = []);
            break;
          case "select":
            (o = b({}, o, { value: void 0 })),
              (r = b({}, r, { value: void 0 })),
              (a = []);
            break;
          case "textarea":
            (o = hl(e, o)), (r = hl(e, r)), (a = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Zi);
        }
        ml(n, r);
        var f;
        n = null;
        for (O in o)
          if (!r.hasOwnProperty(O) && o.hasOwnProperty(O) && o[O] != null)
            if (O === "style") {
              var p = o[O];
              for (f in p) p.hasOwnProperty(f) && (n || (n = {}), (n[f] = ""));
            } else
              O !== "dangerouslySetInnerHTML" &&
                O !== "children" &&
                O !== "suppressContentEditableWarning" &&
                O !== "suppressHydrationWarning" &&
                O !== "autoFocus" &&
                (c.hasOwnProperty(O)
                  ? a || (a = [])
                  : (a = a || []).push(O, null));
        for (O in r) {
          var m = r[O];
          if (
            ((p = o != null ? o[O] : void 0),
            r.hasOwnProperty(O) && m !== p && (m != null || p != null))
          )
            if (O === "style")
              if (p) {
                for (f in p)
                  !p.hasOwnProperty(f) ||
                    (m && m.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ""));
                for (f in m)
                  m.hasOwnProperty(f) &&
                    p[f] !== m[f] &&
                    (n || (n = {}), (n[f] = m[f]));
              } else n || (a || (a = []), a.push(O, n)), (n = m);
            else
              O === "dangerouslySetInnerHTML"
                ? ((m = m ? m.__html : void 0),
                  (p = p ? p.__html : void 0),
                  m != null && p !== m && (a = a || []).push(O, m))
                : O === "children"
                ? (typeof m != "string" && typeof m != "number") ||
                  (a = a || []).push(O, "" + m)
                : O !== "suppressContentEditableWarning" &&
                  O !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(O)
                    ? (m != null && O === "onScroll" && he("scroll", e),
                      a || p === m || (a = []))
                    : (a = a || []).push(O, m));
        }
        n && (a = a || []).push("style", n);
        var O = a;
        (t.updateQueue = O) && (t.flags |= 4);
      }
    }),
    (lf = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function ci(e, t) {
    if (!ge)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Rh(e, t, n) {
    var r = t.pendingProps;
    switch ((is(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return Ge(t.type) && eo(), Be(t), null;
      case 3:
        return (
          (r = t.stateNode),
          gr(),
          ve(Qe),
          ve(be),
          gs(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (oo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), xt !== null && (Qs(xt), (xt = null)))),
          Ds(e, t),
          Be(t),
          null
        );
      case 5:
        vs(t);
        var o = Dn(oi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          of(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Be(t), null;
          }
          if (((e = Dn(Dt.current)), oo(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[zt] = t), (r[ei] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                he("cancel", r), he("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yr.length; o++) he(Yr[o], r);
                break;
              case "source":
                he("error", r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", r), he("load", r);
                break;
              case "details":
                he("toggle", r);
                break;
              case "input":
                Fu(r, a), he("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!a.multiple }),
                  he("invalid", r);
                break;
              case "textarea":
                Uu(r, a), he("invalid", r);
            }
            ml(n, a), (o = null);
            for (var f in a)
              if (a.hasOwnProperty(f)) {
                var p = a[f];
                f === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (a.suppressHydrationWarning !== !0 &&
                        Yi(r.textContent, p, e),
                      (o = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (a.suppressHydrationWarning !== !0 &&
                        Yi(r.textContent, p, e),
                      (o = ["children", "" + p]))
                  : c.hasOwnProperty(f) &&
                    p != null &&
                    f === "onScroll" &&
                    he("scroll", r);
              }
            switch (n) {
              case "input":
                Ci(r), $u(r, a, !0);
                break;
              case "textarea":
                Ci(r), Wu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Zi);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (f = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Hu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = f.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = f.createElement(n, { is: r.is }))
                  : ((e = f.createElement(n)),
                    n === "select" &&
                      ((f = e),
                      r.multiple
                        ? (f.multiple = !0)
                        : r.size && (f.size = r.size)))
                : (e = f.createElementNS(e, n)),
              (e[zt] = t),
              (e[ei] = r),
              rf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = gl(n, r)), n)) {
                case "dialog":
                  he("cancel", e), he("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Yr.length; o++) he(Yr[o], e);
                  o = r;
                  break;
                case "source":
                  he("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  he("error", e), he("load", e), (o = r);
                  break;
                case "details":
                  he("toggle", e), (o = r);
                  break;
                case "input":
                  Fu(e, r), (o = fl(e, r)), he("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = b({}, r, { value: void 0 })),
                    he("invalid", e);
                  break;
                case "textarea":
                  Uu(e, r), (o = hl(e, r)), he("invalid", e);
                  break;
                default:
                  o = r;
              }
              ml(n, o), (p = o);
              for (a in p)
                if (p.hasOwnProperty(a)) {
                  var m = p[a];
                  a === "style"
                    ? Gu(e, m)
                    : a === "dangerouslySetInnerHTML"
                    ? ((m = m ? m.__html : void 0), m != null && Ku(e, m))
                    : a === "children"
                    ? typeof m == "string"
                      ? (n !== "textarea" || m !== "") && Tr(e, m)
                      : typeof m == "number" && Tr(e, "" + m)
                    : a !== "suppressContentEditableWarning" &&
                      a !== "suppressHydrationWarning" &&
                      a !== "autoFocus" &&
                      (c.hasOwnProperty(a)
                        ? m != null && a === "onScroll" && he("scroll", e)
                        : m != null && Te(e, a, m, f));
                }
              switch (n) {
                case "input":
                  Ci(e), $u(e, r, !1);
                  break;
                case "textarea":
                  Ci(e), Wu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ue(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? Zn(e, !!r.multiple, a, !1)
                      : r.defaultValue != null &&
                        Zn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Zi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Be(t), null;
      case 6:
        if (e && t.stateNode != null) lf(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = Dn(oi.current)), Dn(Dt.current), oo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[zt] = t),
              (a = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Yi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Yi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[zt] = t),
              (t.stateNode = r);
        }
        return Be(t), null;
      case 13:
        if (
          (ve(_e),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ge && rt !== null && t.mode & 1 && !(t.flags & 128))
            uc(), pr(), (t.flags |= 98560), (a = !1);
          else if (((a = oo(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(s(317));
              a[zt] = t;
            } else
              pr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Be(t), (a = !1);
          } else xt !== null && (Qs(xt), (xt = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || _e.current & 1 ? Ce === 0 && (Ce = 3) : qs())),
            t.updateQueue !== null && (t.flags |= 4),
            Be(t),
            null);
      case 4:
        return (
          gr(),
          Ds(e, t),
          e === null && Zr(t.stateNode.containerInfo),
          Be(t),
          null
        );
      case 10:
        return cs(t.type._context), Be(t), null;
      case 17:
        return Ge(t.type) && eo(), Be(t), null;
      case 19:
        if ((ve(_e), (a = t.memoizedState), a === null)) return Be(t), null;
        if (((r = (t.flags & 128) !== 0), (f = a.rendering), f === null))
          if (r) ci(a, !1);
          else {
            if (Ce !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = fo(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      ci(a, !1),
                      r = f.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (f = a.alternate),
                      f === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = f.childLanes),
                          (a.lanes = f.lanes),
                          (a.child = f.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = f.memoizedProps),
                          (a.memoizedState = f.memoizedState),
                          (a.updateQueue = f.updateQueue),
                          (a.type = f.type),
                          (e = f.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return de(_e, (_e.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ke() > wr &&
              ((t.flags |= 128), (r = !0), ci(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = fo(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ci(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !f.alternate &&
                  !ge)
              )
                return Be(t), null;
            } else
              2 * ke() - a.renderingStartTime > wr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), ci(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = a.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (a.last = f));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ke()),
            (t.sibling = null),
            (n = _e.current),
            de(_e, r ? (n & 1) | 2 : n & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          Xs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? it & 1073741824 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ah(e, t) {
    switch ((is(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && eo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          gr(),
          ve(Qe),
          ve(be),
          gs(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return vs(t), null;
      case 13:
        if (
          (ve(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          pr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ve(_e), null;
      case 4:
        return gr(), null;
      case 10:
        return cs(t.type._context), null;
      case 22:
      case 23:
        return Xs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var wo = !1,
    $e = !1,
    Th = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;
  function _r(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          xe(e, t, r);
        }
      else n.current = null;
  }
  function Is(e, t, n) {
    try {
      n();
    } catch (r) {
      xe(e, t, r);
    }
  }
  var sf = !1;
  function Mh(e, t) {
    if (((Xl = Bi), (e = ba()), $l(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              p = -1,
              m = -1,
              O = 0,
              N = 0,
              R = e,
              j = null;
            t: for (;;) {
              for (
                var z;
                R !== n || (o !== 0 && R.nodeType !== 3) || (p = f + o),
                  R !== a || (r !== 0 && R.nodeType !== 3) || (m = f + r),
                  R.nodeType === 3 && (f += R.nodeValue.length),
                  (z = R.firstChild) !== null;

              )
                (j = R), (R = z);
              for (;;) {
                if (R === e) break t;
                if (
                  (j === n && ++O === o && (p = f),
                  j === a && ++N === r && (m = f),
                  (z = R.nextSibling) !== null)
                )
                  break;
                (R = j), (j = R.parentNode);
              }
              R = z;
            }
            n = p === -1 || m === -1 ? null : { start: p, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ql = { focusedElem: e, selectionRange: n }, Bi = !1, I = t;
      I !== null;

    )
      if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (I = e);
      else
        for (; I !== null; ) {
          t = I;
          try {
            var F = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var B = F.memoizedProps,
                      Oe = F.memoizedState,
                      w = t.stateNode,
                      g = w.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? B : kt(t.type, B),
                        Oe
                      );
                    w.__reactInternalSnapshotBeforeUpdate = g;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (A) {
            xe(t, t.return, A);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (I = e);
            break;
          }
          I = t.return;
        }
    return (F = sf), (sf = !1), F;
  }
  function fi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var a = o.destroy;
          (o.destroy = void 0), a !== void 0 && Is(t, n, a);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function xo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function bs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function uf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), uf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[zt],
          delete t[ei],
          delete t[es],
          delete t[vh],
          delete t[mh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function af(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || af(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Zi));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fs(e, t, n), e = e.sibling; e !== null; )
        Fs(e, t, n), (e = e.sibling);
  }
  function Bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Bs(e, t, n), e = e.sibling; e !== null; )
        Bs(e, t, n), (e = e.sibling);
  }
  var Le = null,
    Ot = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) ff(e, t, n), (n = n.sibling);
  }
  function ff(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(Li, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || _r(n, t);
      case 6:
        var r = Le,
          o = Ot;
        (Le = null),
          _n(e, t, n),
          (Le = r),
          (Ot = o),
          Le !== null &&
            (Ot
              ? ((e = Le),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Le.removeChild(n.stateNode));
        break;
      case 18:
        Le !== null &&
          (Ot
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8
                ? Jl(e.parentNode, n)
                : e.nodeType === 1 && Jl(e, n),
              Vr(e))
            : Jl(Le, n.stateNode));
        break;
      case 4:
        (r = Le),
          (o = Ot),
          (Le = n.stateNode.containerInfo),
          (Ot = !0),
          _n(e, t, n),
          (Le = r),
          (Ot = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var a = o,
              f = a.destroy;
            (a = a.tag),
              f !== void 0 && (a & 2 || a & 4) && Is(n, t, f),
              (o = o.next);
          } while (o !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (_r(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            xe(n, t, p);
          }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), _n(e, t, n), ($e = r))
          : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function df(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Th()),
        t.forEach(function (r) {
          var o = Uh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function Et(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var a = e,
            f = t,
            p = f;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (Le = p.stateNode), (Ot = !1);
                break e;
              case 3:
                (Le = p.stateNode.containerInfo), (Ot = !0);
                break e;
              case 4:
                (Le = p.stateNode.containerInfo), (Ot = !0);
                break e;
            }
            p = p.return;
          }
          if (Le === null) throw Error(s(160));
          ff(a, f, o), (Le = null), (Ot = !1);
          var m = o.alternate;
          m !== null && (m.return = null), (o.return = null);
        } catch (O) {
          xe(o, t, O);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) pf(t, e), (t = t.sibling);
  }
  function pf(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), bt(e), r & 4)) {
          try {
            fi(3, e, e.return), xo(3, e);
          } catch (B) {
            xe(e, e.return, B);
          }
          try {
            fi(5, e, e.return);
          } catch (B) {
            xe(e, e.return, B);
          }
        }
        break;
      case 1:
        Et(t, e), bt(e), r & 512 && n !== null && _r(n, n.return);
        break;
      case 5:
        if (
          (Et(t, e),
          bt(e),
          r & 512 && n !== null && _r(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Tr(o, "");
          } catch (B) {
            xe(e, e.return, B);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var a = e.memoizedProps,
            f = n !== null ? n.memoizedProps : a,
            p = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              p === "input" && a.type === "radio" && a.name != null && Bu(o, a),
                gl(p, f);
              var O = gl(p, a);
              for (f = 0; f < m.length; f += 2) {
                var N = m[f],
                  R = m[f + 1];
                N === "style"
                  ? Gu(o, R)
                  : N === "dangerouslySetInnerHTML"
                  ? Ku(o, R)
                  : N === "children"
                  ? Tr(o, R)
                  : Te(o, N, R, O);
              }
              switch (p) {
                case "input":
                  dl(o, a);
                  break;
                case "textarea":
                  Vu(o, a);
                  break;
                case "select":
                  var j = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!a.multiple;
                  var z = a.value;
                  z != null
                    ? Zn(o, !!a.multiple, z, !1)
                    : j !== !!a.multiple &&
                      (a.defaultValue != null
                        ? Zn(o, !!a.multiple, a.defaultValue, !0)
                        : Zn(o, !!a.multiple, a.multiple ? [] : "", !1));
              }
              o[ei] = a;
            } catch (B) {
              xe(e, e.return, B);
            }
        }
        break;
      case 6:
        if ((Et(t, e), bt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (o = e.stateNode), (a = e.memoizedProps);
          try {
            o.nodeValue = a;
          } catch (B) {
            xe(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          (Et(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Vr(t.containerInfo);
          } catch (B) {
            xe(e, e.return, B);
          }
        break;
      case 4:
        Et(t, e), bt(e);
        break;
      case 13:
        Et(t, e),
          bt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((a = o.memoizedState !== null),
            (o.stateNode.isHidden = a),
            !a ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (Vs = ke())),
          r & 4 && df(e);
        break;
      case 22:
        if (
          ((N = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (O = $e) || N), Et(t, e), ($e = O)) : Et(t, e),
          bt(e),
          r & 8192)
        ) {
          if (
            ((O = e.memoizedState !== null),
            (e.stateNode.isHidden = O) && !N && e.mode & 1)
          )
            for (I = e, N = e.child; N !== null; ) {
              for (R = I = N; I !== null; ) {
                switch (((j = I), (z = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fi(4, j, j.return);
                    break;
                  case 1:
                    _r(j, j.return);
                    var F = j.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      (r = j), (n = j.return);
                      try {
                        (t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount();
                      } catch (B) {
                        xe(r, n, B);
                      }
                    }
                    break;
                  case 5:
                    _r(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      mf(R);
                      continue;
                    }
                }
                z !== null ? ((z.return = j), (I = z)) : mf(R);
              }
              N = N.sibling;
            }
          e: for (N = null, R = e; ; ) {
            if (R.tag === 5) {
              if (N === null) {
                N = R;
                try {
                  (o = R.stateNode),
                    O
                      ? ((a = o.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((p = R.stateNode),
                        (m = R.memoizedProps.style),
                        (f =
                          m != null && m.hasOwnProperty("display")
                            ? m.display
                            : null),
                        (p.style.display = Qu("display", f)));
                } catch (B) {
                  xe(e, e.return, B);
                }
              }
            } else if (R.tag === 6) {
              if (N === null)
                try {
                  R.stateNode.nodeValue = O ? "" : R.memoizedProps;
                } catch (B) {
                  xe(e, e.return, B);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) ||
                R.memoizedState === null ||
                R === e) &&
              R.child !== null
            ) {
              (R.child.return = R), (R = R.child);
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              N === R && (N = null), (R = R.return);
            }
            N === R && (N = null),
              (R.sibling.return = R.return),
              (R = R.sibling);
          }
        }
        break;
      case 19:
        Et(t, e), bt(e), r & 4 && df(e);
        break;
      case 21:
        break;
      default:
        Et(t, e), bt(e);
    }
  }
  function bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (af(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Tr(o, ""), (r.flags &= -33));
            var a = cf(e);
            Bs(e, a, o);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo,
              p = cf(e);
            Fs(e, p, f);
            break;
          default:
            throw Error(s(161));
        }
      } catch (m) {
        xe(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lh(e, t, n) {
    (I = e), hf(e);
  }
  function hf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
      var o = I,
        a = o.child;
      if (o.tag === 22 && r) {
        var f = o.memoizedState !== null || wo;
        if (!f) {
          var p = o.alternate,
            m = (p !== null && p.memoizedState !== null) || $e;
          p = wo;
          var O = $e;
          if (((wo = f), ($e = m) && !O))
            for (I = o; I !== null; )
              (f = I),
                (m = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? gf(o)
                  : m !== null
                  ? ((m.return = f), (I = m))
                  : gf(o);
          for (; a !== null; ) (I = a), hf(a), (a = a.sibling);
          (I = o), (wo = p), ($e = O);
        }
        vf(e);
      } else
        o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (I = a)) : vf(e);
    }
  }
  function vf(e) {
    for (; I !== null; ) {
      var t = I;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || xo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : kt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                a !== null && vc(t, a, r);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  vc(t, f, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      m.autoFocus && n.focus();
                      break;
                    case "img":
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var O = t.alternate;
                  if (O !== null) {
                    var N = O.memoizedState;
                    if (N !== null) {
                      var R = N.dehydrated;
                      R !== null && Vr(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          $e || (t.flags & 512 && bs(t));
        } catch (j) {
          xe(t, t.return, j);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function mf(e) {
    for (; I !== null; ) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (I = n);
        break;
      }
      I = t.return;
    }
  }
  function gf(e) {
    for (; I !== null; ) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xo(4, t);
            } catch (m) {
              xe(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                xe(t, o, m);
              }
            }
            var a = t.return;
            try {
              bs(t);
            } catch (m) {
              xe(t, a, m);
            }
            break;
          case 5:
            var f = t.return;
            try {
              bs(t);
            } catch (m) {
              xe(t, f, m);
            }
        }
      } catch (m) {
        xe(t, t.return, m);
      }
      if (t === e) {
        I = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (I = p);
        break;
      }
      I = t.return;
    }
  }
  var zh = Math.ceil,
    ko = le.ReactCurrentDispatcher,
    $s = le.ReactCurrentOwner,
    pt = le.ReactCurrentBatchConfig,
    ee = 0,
    Re = null,
    Pe = null,
    ze = 0,
    it = 0,
    Sr = hn(0),
    Ce = 0,
    di = null,
    bn = 0,
    Oo = 0,
    Us = 0,
    pi = null,
    qe = null,
    Vs = 0,
    wr = 1 / 0,
    Zt = null,
    Eo = !1,
    Ws = null,
    Sn = null,
    Po = !1,
    wn = null,
    jo = 0,
    hi = 0,
    Hs = null,
    Co = -1,
    No = 0;
  function Ve() {
    return ee & 6 ? ke() : Co !== -1 ? Co : (Co = ke());
  }
  function xn(e) {
    return e.mode & 1
      ? ee & 2 && ze !== 0
        ? ze & -ze
        : yh.transition !== null
        ? (No === 0 && (No = aa()), No)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ya(e.type))),
          e)
      : 1;
  }
  function Pt(e, t, n, r) {
    if (50 < hi) throw ((hi = 0), (Hs = null), Error(s(185)));
    br(e, n, r),
      (!(ee & 2) || e !== Re) &&
        (e === Re && (!(ee & 2) && (Oo |= n), Ce === 4 && kn(e, ze)),
        Ye(e, r),
        n === 1 &&
          ee === 0 &&
          !(t.mode & 1) &&
          ((wr = ke() + 500), no && mn()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    yp(e, t);
    var r = Ii(e, e === Re ? ze : 0);
    if (r === 0)
      n !== null && la(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && la(n), t === 1))
        e.tag === 0 ? gh(_f.bind(null, e)) : rc(_f.bind(null, e)),
          ph(function () {
            !(ee & 6) && mn();
          }),
          (n = null);
      else {
        switch (ca(r)) {
          case 1:
            n = Ol;
            break;
          case 4:
            n = sa;
            break;
          case 16:
            n = Mi;
            break;
          case 536870912:
            n = ua;
            break;
          default:
            n = Mi;
        }
        n = jf(n, yf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function yf(e, t) {
    if (((Co = -1), (No = 0), ee & 6)) throw Error(s(327));
    var n = e.callbackNode;
    if (xr() && e.callbackNode !== n) return null;
    var r = Ii(e, e === Re ? ze : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ro(e, r);
    else {
      t = r;
      var o = ee;
      ee |= 2;
      var a = wf();
      (Re !== e || ze !== t) && ((Zt = null), (wr = ke() + 500), Bn(e, t));
      do
        try {
          bh();
          break;
        } catch (p) {
          Sf(e, p);
        }
      while (!0);
      as(),
        (ko.current = a),
        (ee = o),
        Pe !== null ? (t = 0) : ((Re = null), (ze = 0), (t = Ce));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = El(e)), o !== 0 && ((r = o), (t = Ks(e, o)))),
        t === 1)
      )
        throw ((n = di), Bn(e, 0), kn(e, r), Ye(e, ke()), n);
      if (t === 6) kn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !Dh(o) &&
            ((t = Ro(e, r)),
            t === 2 && ((a = El(e)), a !== 0 && ((r = a), (t = Ks(e, a)))),
            t === 1))
        )
          throw ((n = di), Bn(e, 0), kn(e, r), Ye(e, ke()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            $n(e, qe, Zt);
            break;
          case 3:
            if (
              (kn(e, r),
              (r & 130023424) === r && ((t = Vs + 500 - ke()), 10 < t))
            ) {
              if (Ii(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Ve(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Zl($n.bind(null, e, qe, Zt), t);
              break;
            }
            $n(e, qe, Zt);
            break;
          case 4:
            if ((kn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var f = 31 - St(r);
              (a = 1 << f), (f = t[f]), f > o && (o = f), (r &= ~a);
            }
            if (
              ((r = o),
              (r = ke() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * zh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Zl($n.bind(null, e, qe, Zt), r);
              break;
            }
            $n(e, qe, Zt);
            break;
          case 5:
            $n(e, qe, Zt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ye(e, ke()), e.callbackNode === n ? yf.bind(null, e) : null;
  }
  function Ks(e, t) {
    var n = pi;
    return (
      e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
      (e = Ro(e, t)),
      e !== 2 && ((t = qe), (qe = n), t !== null && Qs(t)),
      e
    );
  }
  function Qs(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
  }
  function Dh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              a = o.getSnapshot;
            o = o.value;
            try {
              if (!wt(a(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function kn(e, t) {
    for (
      t &= ~Us,
        t &= ~Oo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - St(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function _f(e) {
    if (ee & 6) throw Error(s(327));
    xr();
    var t = Ii(e, 0);
    if (!(t & 1)) return Ye(e, ke()), null;
    var n = Ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = El(e);
      r !== 0 && ((t = r), (n = Ks(e, r)));
    }
    if (n === 1) throw ((n = di), Bn(e, 0), kn(e, t), Ye(e, ke()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      $n(e, qe, Zt),
      Ye(e, ke()),
      null
    );
  }
  function Gs(e, t) {
    var n = ee;
    ee |= 1;
    try {
      return e(t);
    } finally {
      (ee = n), ee === 0 && ((wr = ke() + 500), no && mn());
    }
  }
  function Fn(e) {
    wn !== null && wn.tag === 0 && !(ee & 6) && xr();
    var t = ee;
    ee |= 1;
    var n = pt.transition,
      r = ae;
    try {
      if (((pt.transition = null), (ae = 1), e)) return e();
    } finally {
      (ae = r), (pt.transition = n), (ee = t), !(ee & 6) && mn();
    }
  }
  function Xs() {
    (it = Sr.current), ve(Sr);
  }
  function Bn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), dh(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((is(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && eo();
            break;
          case 3:
            gr(), ve(Qe), ve(be), gs();
            break;
          case 5:
            vs(r);
            break;
          case 4:
            gr();
            break;
          case 13:
            ve(_e);
            break;
          case 19:
            ve(_e);
            break;
          case 10:
            cs(r.type._context);
            break;
          case 22:
          case 23:
            Xs();
        }
        n = n.return;
      }
    if (
      ((Re = e),
      (Pe = e = On(e.current, null)),
      (ze = it = t),
      (Ce = 0),
      (di = null),
      (Us = Oo = bn = 0),
      (qe = pi = null),
      zn !== null)
    ) {
      for (t = 0; t < zn.length; t++)
        if (((n = zn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            a = n.pending;
          if (a !== null) {
            var f = a.next;
            (a.next = o), (r.next = f);
          }
          n.pending = r;
        }
      zn = null;
    }
    return e;
  }
  function Sf(e, t) {
    do {
      var n = Pe;
      try {
        if ((as(), (po.current = go), ho)) {
          for (var r = Se.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          ho = !1;
        }
        if (
          ((In = 0),
          (Ne = je = Se = null),
          (li = !1),
          (si = 0),
          ($s.current = null),
          n === null || n.return === null)
        ) {
          (Ce = 1), (di = t), (Pe = null);
          break;
        }
        e: {
          var a = e,
            f = n.return,
            p = n,
            m = t;
          if (
            ((t = ze),
            (p.flags |= 32768),
            m !== null && typeof m == "object" && typeof m.then == "function")
          ) {
            var O = m,
              N = p,
              R = N.tag;
            if (!(N.mode & 1) && (R === 0 || R === 11 || R === 15)) {
              var j = N.alternate;
              j
                ? ((N.updateQueue = j.updateQueue),
                  (N.memoizedState = j.memoizedState),
                  (N.lanes = j.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var z = Wc(f);
            if (z !== null) {
              (z.flags &= -257),
                Hc(z, f, p, a, t),
                z.mode & 1 && Vc(a, O, t),
                (t = z),
                (m = O);
              var F = t.updateQueue;
              if (F === null) {
                var B = new Set();
                B.add(m), (t.updateQueue = B);
              } else F.add(m);
              break e;
            } else {
              if (!(t & 1)) {
                Vc(a, O, t), qs();
                break e;
              }
              m = Error(s(426));
            }
          } else if (ge && p.mode & 1) {
            var Oe = Wc(f);
            if (Oe !== null) {
              !(Oe.flags & 65536) && (Oe.flags |= 256),
                Hc(Oe, f, p, a, t),
                ss(yr(m, p));
              break e;
            }
          }
          (a = m = yr(m, p)),
            Ce !== 4 && (Ce = 2),
            pi === null ? (pi = [a]) : pi.push(a),
            (a = f);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var w = $c(a, m, t);
                hc(a, w);
                break e;
              case 1:
                p = m;
                var g = a.type,
                  k = a.stateNode;
                if (
                  !(a.flags & 128) &&
                  (typeof g.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (Sn === null || !Sn.has(k))))
                ) {
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var A = Uc(a, p, t);
                  hc(a, A);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        kf(n);
      } catch ($) {
        (t = $), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function wf() {
    var e = ko.current;
    return (ko.current = go), e === null ? go : e;
  }
  function qs() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
      Re === null || (!(bn & 268435455) && !(Oo & 268435455)) || kn(Re, ze);
  }
  function Ro(e, t) {
    var n = ee;
    ee |= 2;
    var r = wf();
    (Re !== e || ze !== t) && ((Zt = null), Bn(e, t));
    do
      try {
        Ih();
        break;
      } catch (o) {
        Sf(e, o);
      }
    while (!0);
    if ((as(), (ee = n), (ko.current = r), Pe !== null)) throw Error(s(261));
    return (Re = null), (ze = 0), Ce;
  }
  function Ih() {
    for (; Pe !== null; ) xf(Pe);
  }
  function bh() {
    for (; Pe !== null && !ap(); ) xf(Pe);
  }
  function xf(e) {
    var t = Pf(e.alternate, e, it);
    (e.memoizedProps = e.pendingProps),
      t === null ? kf(e) : (Pe = t),
      ($s.current = null);
  }
  function kf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Ah(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ce = 6), (Pe = null);
          return;
        }
      } else if (((n = Rh(n, t, it)), n !== null)) {
        Pe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function $n(e, t, n) {
    var r = ae,
      o = pt.transition;
    try {
      (pt.transition = null), (ae = 1), Fh(e, t, n, r);
    } finally {
      (pt.transition = o), (ae = r);
    }
    return null;
  }
  function Fh(e, t, n, r) {
    do xr();
    while (wn !== null);
    if (ee & 6) throw Error(s(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
      (_p(e, a),
      e === Re && ((Pe = Re = null), (ze = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Po ||
        ((Po = !0),
        jf(Mi, function () {
          return xr(), null;
        })),
      (a = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || a)
    ) {
      (a = pt.transition), (pt.transition = null);
      var f = ae;
      ae = 1;
      var p = ee;
      (ee |= 4),
        ($s.current = null),
        Mh(e, n),
        pf(n, e),
        oh(ql),
        (Bi = !!Xl),
        (ql = Xl = null),
        (e.current = n),
        Lh(n),
        cp(),
        (ee = p),
        (ae = f),
        (pt.transition = a);
    } else e.current = n;
    if (
      (Po && ((Po = !1), (wn = e), (jo = o)),
      (a = e.pendingLanes),
      a === 0 && (Sn = null),
      pp(n.stateNode),
      Ye(e, ke()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Eo) throw ((Eo = !1), (e = Ws), (Ws = null), e);
    return (
      jo & 1 && e.tag !== 0 && xr(),
      (a = e.pendingLanes),
      a & 1 ? (e === Hs ? hi++ : ((hi = 0), (Hs = e))) : (hi = 0),
      mn(),
      null
    );
  }
  function xr() {
    if (wn !== null) {
      var e = ca(jo),
        t = pt.transition,
        n = ae;
      try {
        if (((pt.transition = null), (ae = 16 > e ? 16 : e), wn === null))
          var r = !1;
        else {
          if (((e = wn), (wn = null), (jo = 0), ee & 6)) throw Error(s(331));
          var o = ee;
          for (ee |= 4, I = e.current; I !== null; ) {
            var a = I,
              f = a.child;
            if (I.flags & 16) {
              var p = a.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var O = p[m];
                  for (I = O; I !== null; ) {
                    var N = I;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fi(8, N, a);
                    }
                    var R = N.child;
                    if (R !== null) (R.return = N), (I = R);
                    else
                      for (; I !== null; ) {
                        N = I;
                        var j = N.sibling,
                          z = N.return;
                        if ((uf(N), N === O)) {
                          I = null;
                          break;
                        }
                        if (j !== null) {
                          (j.return = z), (I = j);
                          break;
                        }
                        I = z;
                      }
                  }
                }
                var F = a.alternate;
                if (F !== null) {
                  var B = F.child;
                  if (B !== null) {
                    F.child = null;
                    do {
                      var Oe = B.sibling;
                      (B.sibling = null), (B = Oe);
                    } while (B !== null);
                  }
                }
                I = a;
              }
            }
            if (a.subtreeFlags & 2064 && f !== null) (f.return = a), (I = f);
            else
              e: for (; I !== null; ) {
                if (((a = I), a.flags & 2048))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fi(9, a, a.return);
                  }
                var w = a.sibling;
                if (w !== null) {
                  (w.return = a.return), (I = w);
                  break e;
                }
                I = a.return;
              }
          }
          var g = e.current;
          for (I = g; I !== null; ) {
            f = I;
            var k = f.child;
            if (f.subtreeFlags & 2064 && k !== null) (k.return = f), (I = k);
            else
              e: for (f = g; I !== null; ) {
                if (((p = I), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xo(9, p);
                    }
                  } catch ($) {
                    xe(p, p.return, $);
                  }
                if (p === f) {
                  I = null;
                  break e;
                }
                var A = p.sibling;
                if (A !== null) {
                  (A.return = p.return), (I = A);
                  break e;
                }
                I = p.return;
              }
          }
          if (
            ((ee = o),
            mn(),
            Lt && typeof Lt.onPostCommitFiberRoot == "function")
          )
            try {
              Lt.onPostCommitFiberRoot(Li, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ae = n), (pt.transition = t);
      }
    }
    return !1;
  }
  function Of(e, t, n) {
    (t = yr(n, t)),
      (t = $c(e, t, 1)),
      (e = yn(e, t, 1)),
      (t = Ve()),
      e !== null && (br(e, 1, t), Ye(e, t));
  }
  function xe(e, t, n) {
    if (e.tag === 3) Of(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Of(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Sn === null || !Sn.has(r)))
          ) {
            (e = yr(n, e)),
              (e = Uc(t, e, 1)),
              (t = yn(t, e, 1)),
              (e = Ve()),
              t !== null && (br(t, 1, e), Ye(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Re === e &&
        (ze & n) === n &&
        (Ce === 4 || (Ce === 3 && (ze & 130023424) === ze && 500 > ke() - Vs)
          ? Bn(e, 0)
          : (Us |= n)),
      Ye(e, t);
  }
  function Ef(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Di), (Di <<= 1), !(Di & 130023424) && (Di = 4194304))
        : (t = 1));
    var n = Ve();
    (e = Xt(e, t)), e !== null && (br(e, t, n), Ye(e, n));
  }
  function $h(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Ef(e, n);
  }
  function Uh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Ef(e, n);
  }
  var Pf;
  Pf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Qe.current) Xe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Nh(e, t, n);
        Xe = !!(e.flags & 131072);
      }
    else (Xe = !1), ge && t.flags & 1048576 && ic(t, io, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        So(e, t), (e = t.pendingProps);
        var o = cr(t, be.current);
        mr(t, n), (o = Ss(null, t, r, e, o, n));
        var a = ws();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((a = !0), to(t)) : (a = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              ps(t),
              (o.updater = yo),
              (t.stateNode = o),
              (o._reactInternals = t),
              js(t, r, e, n),
              (t = As(null, t, r, !0, a, n)))
            : ((t.tag = 0), ge && a && rs(t), Ue(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (So(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = Wh(r)),
            (e = kt(r, e)),
            o)
          ) {
            case 0:
              t = Rs(null, t, r, e, n);
              break e;
            case 1:
              t = Yc(null, t, r, e, n);
              break e;
            case 11:
              t = Kc(null, t, r, e, n);
              break e;
            case 14:
              t = Qc(null, t, r, kt(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : kt(r, o)),
          Rs(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : kt(r, o)),
          Yc(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((Zc(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (a = t.memoizedState),
            (o = a.element),
            pc(e, t),
            co(t, r, null, n);
          var f = t.memoizedState;
          if (((r = f.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              (o = yr(Error(s(423)), t)), (t = Jc(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = yr(Error(s(424)), t)), (t = Jc(e, t, r, n, o));
              break e;
            } else
              for (
                rt = pn(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  ge = !0,
                  xt = null,
                  n = fc(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((pr(), r === o)) {
              t = Yt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          mc(t),
          e === null && ls(t),
          (r = t.type),
          (o = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (f = o.children),
          Yl(r, o) ? (f = null) : a !== null && Yl(r, a) && (t.flags |= 32),
          qc(e, t),
          Ue(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && ls(t), null;
      case 13:
        return ef(e, t, n);
      case 4:
        return (
          hs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = hr(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : kt(r, o)),
          Kc(e, t, r, o, n)
        );
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (a = t.memoizedProps),
            (f = o.value),
            de(so, r._currentValue),
            (r._currentValue = f),
            a !== null)
          )
            if (wt(a.value, f)) {
              if (a.children === o.children && !Qe.current) {
                t = Yt(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var p = a.dependencies;
                if (p !== null) {
                  f = a.child;
                  for (var m = p.firstContext; m !== null; ) {
                    if (m.context === r) {
                      if (a.tag === 1) {
                        (m = qt(-1, n & -n)), (m.tag = 2);
                        var O = a.updateQueue;
                        if (O !== null) {
                          O = O.shared;
                          var N = O.pending;
                          N === null
                            ? (m.next = m)
                            : ((m.next = N.next), (N.next = m)),
                            (O.pending = m);
                        }
                      }
                      (a.lanes |= n),
                        (m = a.alternate),
                        m !== null && (m.lanes |= n),
                        fs(a.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    m = m.next;
                  }
                } else if (a.tag === 10) f = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((f = a.return), f === null)) throw Error(s(341));
                  (f.lanes |= n),
                    (p = f.alternate),
                    p !== null && (p.lanes |= n),
                    fs(f, n, t),
                    (f = a.sibling);
                } else f = a.child;
                if (f !== null) f.return = a;
                else
                  for (f = a; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((a = f.sibling), a !== null)) {
                      (a.return = f.return), (f = a);
                      break;
                    }
                    f = f.return;
                  }
                a = f;
              }
          Ue(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          mr(t, n),
          (o = ft(o)),
          (r = r(o)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = kt(r, t.pendingProps)),
          (o = kt(r.type, o)),
          Qc(e, t, r, o, n)
        );
      case 15:
        return Gc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : kt(r, o)),
          So(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), to(t)) : (e = !1),
          mr(t, n),
          Fc(t, r, o),
          js(t, r, o, n),
          As(null, t, r, !0, e, n)
        );
      case 19:
        return nf(e, t, n);
      case 22:
        return Xc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function jf(e, t) {
    return oa(e, t);
  }
  function Vh(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ht(e, t, n, r) {
    return new Vh(e, t, n, r);
  }
  function Ys(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wh(e) {
    if (typeof e == "function") return Ys(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Tt)) return 11;
      if (e === Mt) return 14;
    }
    return 2;
  }
  function On(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ht(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ao(e, t, n, r, o, a) {
    var f = 2;
    if (((r = e), typeof e == "function")) Ys(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else
      e: switch (e) {
        case Me:
          return Un(n.children, o, a, t);
        case ut:
          (f = 8), (o |= 8);
          break;
        case ln:
          return (
            (e = ht(12, n, t, o | 2)), (e.elementType = ln), (e.lanes = a), e
          );
        case Je:
          return (e = ht(13, n, t, o)), (e.elementType = Je), (e.lanes = a), e;
        case _t:
          return (e = ht(19, n, t, o)), (e.elementType = _t), (e.lanes = a), e;
        case we:
          return To(n, o, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Wt:
                f = 10;
                break e;
              case Nn:
                f = 9;
                break e;
              case Tt:
                f = 11;
                break e;
              case Mt:
                f = 14;
                break e;
              case Ke:
                (f = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ht(f, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t
    );
  }
  function Un(e, t, n, r) {
    return (e = ht(7, e, r, t)), (e.lanes = n), e;
  }
  function To(e, t, n, r) {
    return (
      (e = ht(22, e, r, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Zs(e, t, n) {
    return (e = ht(6, e, null, t)), (e.lanes = n), e;
  }
  function Js(e, t, n) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hh(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Pl(0)),
      (this.expirationTimes = Pl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Pl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function eu(e, t, n, r, o, a, f, p, m) {
    return (
      (e = new Hh(e, t, n, p, m)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = ht(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ps(a),
      e
    );
  }
  function Kh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ye,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Cf(e) {
    if (!e) return vn;
    e = e._reactInternals;
    e: {
      if (Rn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return tc(e, n, t);
    }
    return t;
  }
  function Nf(e, t, n, r, o, a, f, p, m) {
    return (
      (e = eu(n, r, !0, e, o, a, f, p, m)),
      (e.context = Cf(null)),
      (n = e.current),
      (r = Ve()),
      (o = xn(n)),
      (a = qt(r, o)),
      (a.callback = t ?? null),
      yn(n, a, o),
      (e.current.lanes = o),
      br(e, o, r),
      Ye(e, r),
      e
    );
  }
  function Mo(e, t, n, r) {
    var o = t.current,
      a = Ve(),
      f = xn(o);
    return (
      (n = Cf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = qt(a, f)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = yn(o, t, f)),
      e !== null && (Pt(e, o, f, a), ao(e, o, f)),
      f
    );
  }
  function Lo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function tu(e, t) {
    Rf(e, t), (e = e.alternate) && Rf(e, t);
  }
  function Qh() {
    return null;
  }
  var Af =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function nu(e) {
    this._internalRoot = e;
  }
  (zo.prototype.render = nu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      Mo(e, t, null, null);
    }),
    (zo.prototype.unmount = nu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fn(function () {
            Mo(null, e, null, null);
          }),
            (t[Ht] = null);
        }
      });
  function zo(e) {
    this._internalRoot = e;
  }
  zo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = pa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
      cn.splice(n, 0, e), n === 0 && ma(e);
    }
  };
  function ru(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Do(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Tf() {}
  function Gh(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var a = r;
        r = function () {
          var O = Lo(f);
          a.call(O);
        };
      }
      var f = Nf(t, r, e, 0, null, !1, !1, "", Tf);
      return (
        (e._reactRootContainer = f),
        (e[Ht] = f.current),
        Zr(e.nodeType === 8 ? e.parentNode : e),
        Fn(),
        f
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var O = Lo(m);
        p.call(O);
      };
    }
    var m = eu(e, 0, !1, null, null, !1, !1, "", Tf);
    return (
      (e._reactRootContainer = m),
      (e[Ht] = m.current),
      Zr(e.nodeType === 8 ? e.parentNode : e),
      Fn(function () {
        Mo(t, m, n, r);
      }),
      m
    );
  }
  function Io(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof o == "function") {
        var p = o;
        o = function () {
          var m = Lo(f);
          p.call(m);
        };
      }
      Mo(t, f, e, o);
    } else f = Gh(n, t, e, o, r);
    return Lo(f);
  }
  (fa = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ir(t.pendingLanes);
          n !== 0 &&
            (jl(t, n | 1), Ye(t, ke()), !(ee & 6) && ((wr = ke() + 500), mn()));
        }
        break;
      case 13:
        Fn(function () {
          var r = Xt(e, 1);
          if (r !== null) {
            var o = Ve();
            Pt(r, e, 1, o);
          }
        }),
          tu(e, 1);
    }
  }),
    (Cl = function (e) {
      if (e.tag === 13) {
        var t = Xt(e, 134217728);
        if (t !== null) {
          var n = Ve();
          Pt(t, e, 134217728, n);
        }
        tu(e, 134217728);
      }
    }),
    (da = function (e) {
      if (e.tag === 13) {
        var t = xn(e),
          n = Xt(e, t);
        if (n !== null) {
          var r = Ve();
          Pt(n, e, t, r);
        }
        tu(e, t);
      }
    }),
    (pa = function () {
      return ae;
    }),
    (ha = function (e, t) {
      var n = ae;
      try {
        return (ae = e), t();
      } finally {
        ae = n;
      }
    }),
    (Sl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = Ji(r);
                if (!o) throw Error(s(90));
                bu(r), dl(r, o);
              }
            }
          }
          break;
        case "textarea":
          Vu(e, n);
          break;
        case "select":
          (t = n.value), t != null && Zn(e, !!n.multiple, t, !1);
      }
    }),
    (Zu = Gs),
    (Ju = Fn);
  var Xh = { usingClientEntryPoint: !1, Events: [ti, ur, Ji, qu, Yu, Gs] },
    vi = {
      findFiberByHostInstance: An,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    qh = {
      bundleType: vi.bundleType,
      version: vi.version,
      rendererPackageName: vi.rendererPackageName,
      rendererConfig: vi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: le.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ra(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: vi.findFiberByHostInstance || Qh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber)
      try {
        (Li = bo.inject(qh)), (Lt = bo);
      } catch {}
  }
  return (
    (Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh),
    (Ze.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ru(t)) throw Error(s(200));
      return Kh(e, t, null, n);
    }),
    (Ze.createRoot = function (e, t) {
      if (!ru(e)) throw Error(s(299));
      var n = !1,
        r = "",
        o = Af;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = eu(e, 1, !1, null, null, n, !1, r, o)),
        (e[Ht] = t.current),
        Zr(e.nodeType === 8 ? e.parentNode : e),
        new nu(t)
      );
    }),
    (Ze.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = ra(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ze.flushSync = function (e) {
      return Fn(e);
    }),
    (Ze.hydrate = function (e, t, n) {
      if (!Do(t)) throw Error(s(200));
      return Io(null, e, t, !0, n);
    }),
    (Ze.hydrateRoot = function (e, t, n) {
      if (!ru(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        a = "",
        f = Af;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = Nf(t, null, e, 1, n ?? null, o, !1, a, f)),
        (e[Ht] = t.current),
        Zr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new zo(t);
    }),
    (Ze.render = function (e, t, n) {
      if (!Do(t)) throw Error(s(200));
      return Io(null, e, t, !1, n);
    }),
    (Ze.unmountComponentAtNode = function (e) {
      if (!Do(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Fn(function () {
            Io(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ht] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ze.unstable_batchedUpdates = Gs),
    (Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Do(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return Io(e, t, n, !1, r);
    }),
    (Ze.version = "18.3.1-next-f1338f8080-20240426"),
    Ze
  );
}
var Bf;
function cd() {
  if (Bf) return lu.exports;
  Bf = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), (lu.exports = lv()), lu.exports;
}
var $f;
function sv() {
  if ($f) return Fo;
  $f = 1;
  var i = cd();
  return (Fo.createRoot = i.createRoot), (Fo.hydrateRoot = i.hydrateRoot), Fo;
}
var uv = sv(),
  q = tl();
const Uf = ev(q);
function te(i) {
  for (
    var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), u = 1;
    u < l;
    u++
  )
    s[u - 1] = arguments[u];
  throw new Error(
    typeof i == "number"
      ? "[MobX] minified error nr: " +
        i +
        (s.length ? " " + s.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + i
  );
}
var av = {};
function nl() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : av;
}
var fd = Object.assign,
  Ko = Object.getOwnPropertyDescriptor,
  $t = Object.defineProperty,
  rl = Object.prototype,
  gu = [];
Object.freeze(gu);
var dd = {};
Object.freeze(dd);
var cv = typeof Proxy < "u",
  fv = Object.toString();
function pd() {
  cv || te("Proxy not available");
}
function hd(i) {
  var l = !1;
  return function () {
    if (!l) return (l = !0), i.apply(this, arguments);
  };
}
var Or = function () {};
function Nt(i) {
  return typeof i == "function";
}
function Wn(i) {
  var l = typeof i;
  switch (l) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function il(i) {
  return i !== null && typeof i == "object";
}
function rn(i) {
  if (!il(i)) return !1;
  var l = Object.getPrototypeOf(i);
  if (l == null) return !0;
  var s = Object.hasOwnProperty.call(l, "constructor") && l.constructor;
  return typeof s == "function" && s.toString() === fv;
}
function vd(i) {
  var l = i == null ? void 0 : i.constructor;
  return l
    ? l.name === "GeneratorFunction" || l.displayName === "GeneratorFunction"
    : !1;
}
function xi(i, l, s) {
  $t(i, l, { enumerable: !1, writable: !0, configurable: !0, value: s });
}
function md(i, l, s) {
  $t(i, l, { enumerable: !1, writable: !1, configurable: !0, value: s });
}
function Gn(i, l) {
  var s = "isMobX" + i;
  return (
    (l.prototype[s] = !0),
    function (u) {
      return il(u) && u[s] === !0;
    }
  );
}
function Nr(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Map]";
}
function dv(i) {
  var l = Object.getPrototypeOf(i),
    s = Object.getPrototypeOf(l),
    u = Object.getPrototypeOf(s);
  return u === null;
}
function Jt(i) {
  return i != null && Object.prototype.toString.call(i) === "[object Set]";
}
var gd = typeof Object.getOwnPropertySymbols < "u";
function pv(i) {
  var l = Object.keys(i);
  if (!gd) return l;
  var s = Object.getOwnPropertySymbols(i);
  return s.length
    ? [].concat(
        l,
        s.filter(function (u) {
          return rl.propertyIsEnumerable.call(i, u);
        })
      )
    : l;
}
var jr =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : gd
    ? function (i) {
        return Object.getOwnPropertyNames(i).concat(
          Object.getOwnPropertySymbols(i)
        );
      }
    : Object.getOwnPropertyNames;
function yd(i) {
  return i === null ? null : typeof i == "object" ? "" + i : i;
}
function tn(i, l) {
  return rl.hasOwnProperty.call(i, l);
}
var hv =
  Object.getOwnPropertyDescriptors ||
  function (l) {
    var s = {};
    return (
      jr(l).forEach(function (u) {
        s[u] = Ko(l, u);
      }),
      s
    );
  };
function ot(i, l) {
  return !!(i & l);
}
function lt(i, l, s) {
  return s ? (i |= l) : (i &= ~l), i;
}
function Vf(i, l) {
  (l == null || l > i.length) && (l = i.length);
  for (var s = 0, u = Array(l); s < l; s++) u[s] = i[s];
  return u;
}
function vv(i, l) {
  for (var s = 0; s < l.length; s++) {
    var u = l[s];
    (u.enumerable = u.enumerable || !1),
      (u.configurable = !0),
      "value" in u && (u.writable = !0),
      Object.defineProperty(i, gv(u.key), u);
  }
}
function Rr(i, l, s) {
  return (
    l && vv(i.prototype, l),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function Er(i, l) {
  var s = (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (s) return (s = s.call(i)).next.bind(s);
  if (Array.isArray(i) || (s = yv(i)) || l) {
    s && (i = s);
    var u = 0;
    return function () {
      return u >= i.length ? { done: !0 } : { done: !1, value: i[u++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hn() {
  return (
    (Hn = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var l = 1; l < arguments.length; l++) {
            var s = arguments[l];
            for (var u in s) ({}.hasOwnProperty.call(s, u) && (i[u] = s[u]));
          }
          return i;
        }),
    Hn.apply(null, arguments)
  );
}
function _d(i, l) {
  (i.prototype = Object.create(l.prototype)),
    (i.prototype.constructor = i),
    yu(i, l);
}
function yu(i, l) {
  return (
    (yu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (s, u) {
          return (s.__proto__ = u), s;
        }),
    yu(i, l)
  );
}
function mv(i, l) {
  if (typeof i != "object" || !i) return i;
  var s = i[Symbol.toPrimitive];
  if (s !== void 0) {
    var u = s.call(i, l);
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
function gv(i) {
  var l = mv(i, "string");
  return typeof l == "symbol" ? l : l + "";
}
function yv(i, l) {
  if (i) {
    if (typeof i == "string") return Vf(i, l);
    var s = {}.toString.call(i).slice(8, -1);
    return (
      s === "Object" && i.constructor && (s = i.constructor.name),
      s === "Map" || s === "Set"
        ? Array.from(i)
        : s === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
        ? Vf(i, l)
        : void 0
    );
  }
}
var Bt = Symbol("mobx-stored-annotations");
function Ut(i) {
  function l(s, u) {
    if (Oi(u)) return i.decorate_20223_(s, u);
    ki(s, u, i);
  }
  return Object.assign(l, i);
}
function ki(i, l, s) {
  tn(i, Bt) || xi(i, Bt, Hn({}, i[Bt])), jv(s) || (i[Bt][l] = s);
}
function _v(i) {
  return tn(i, Bt) || xi(i, Bt, Hn({}, i[Bt])), i[Bt];
}
function Oi(i) {
  return typeof i == "object" && typeof i.kind == "string";
}
var K = Symbol("mobx administration"),
  jn = (function () {
    function i(s) {
      s === void 0 && (s = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = oe.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = s);
    }
    var l = i.prototype;
    return (
      (l.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (u) {
            return u();
          });
      }),
      (l.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (u) {
            return u();
          });
      }),
      (l.reportObserved = function () {
        return zd(this);
      }),
      (l.reportChanged = function () {
        gt(), Dd(this), yt();
      }),
      (l.toString = function () {
        return this.name_;
      }),
      Rr(i, [
        {
          key: "isBeingObserved",
          get: function () {
            return ot(this.flags_, i.isBeingObservedMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isBeingObservedMask_, u);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ot(this.flags_, i.isPendingUnobservationMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isPendingUnobservationMask_, u);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ot(this.flags_, i.diffValueMask_) ? 1 : 0;
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.diffValueMask_, u === 1);
          },
        },
      ])
    );
  })();
jn.isBeingObservedMask_ = 1;
jn.isPendingUnobservationMask_ = 2;
jn.diffValueMask_ = 4;
var Nu = Gn("Atom", jn);
function Sd(i, l, s) {
  l === void 0 && (l = Or), s === void 0 && (s = Or);
  var u = new jn(i);
  return l !== Or && Am(u, l), s !== Or && $d(u, s), u;
}
function Sv(i, l) {
  return i === l;
}
function wv(i, l) {
  return Du(i, l);
}
function xv(i, l) {
  return Du(i, l, 1);
}
function kv(i, l) {
  return Object.is
    ? Object.is(i, l)
    : i === l
    ? i !== 0 || 1 / i === 1 / l
    : i !== i && l !== l;
}
var Qo = { identity: Sv, structural: wv, default: kv, shallow: xv };
function Kn(i, l, s) {
  return Kd(i)
    ? i
    : Array.isArray(i)
    ? De.array(i, { name: s })
    : rn(i)
    ? De.object(i, void 0, { name: s })
    : Nr(i)
    ? De.map(i, { name: s })
    : Jt(i)
    ? De.set(i, { name: s })
    : typeof i == "function" && !Si(i) && !wi(i)
    ? vd(i)
      ? Cr(i)
      : _i(s, i)
    : i;
}
function Ov(i, l, s) {
  if (i == null || cl(i) || al(i) || qn(i) || Ft(i)) return i;
  if (Array.isArray(i)) return De.array(i, { name: s, deep: !1 });
  if (rn(i)) return De.object(i, void 0, { name: s, deep: !1 });
  if (Nr(i)) return De.map(i, { name: s, deep: !1 });
  if (Jt(i)) return De.set(i, { name: s, deep: !1 });
}
function ol(i) {
  return i;
}
function Ev(i, l) {
  return Du(i, l) ? l : i;
}
var Pv = "override";
function jv(i) {
  return i.annotationType_ === Pv;
}
function Ei(i, l) {
  return {
    annotationType_: i,
    options_: l,
    make_: Cv,
    extend_: Nv,
    decorate_20223_: Rv,
  };
}
function Cv(i, l, s, u) {
  var c;
  if ((c = this.options_) != null && c.bound)
    return this.extend_(i, l, s, !1) === null ? 0 : 1;
  if (u === i.target_) return this.extend_(i, l, s, !1) === null ? 0 : 2;
  if (Si(s.value)) return 1;
  var d = wd(i, this, l, s, !1);
  return $t(u, l, d), 2;
}
function Nv(i, l, s, u) {
  var c = wd(i, this, l, s);
  return i.defineProperty_(l, c, u);
}
function Rv(i, l) {
  var s = l.kind,
    u = l.name,
    c = l.addInitializer,
    d = this,
    h = function (E) {
      var P, M, D, J;
      return Qn(
        (P = (M = d.options_) == null ? void 0 : M.name) != null
          ? P
          : u.toString(),
        E,
        (D = (J = d.options_) == null ? void 0 : J.autoAction) != null ? D : !1
      );
    };
  if (s == "field")
    return function (x) {
      var E,
        P = x;
      return (
        Si(P) || (P = h(P)),
        (E = d.options_) != null &&
          E.bound &&
          ((P = P.bind(this)), (P.isMobxAction = !0)),
        P
      );
    };
  if (s == "method") {
    var _;
    return (
      Si(i) || (i = h(i)),
      (_ = this.options_) != null &&
        _.bound &&
        c(function () {
          var x = this,
            E = x[u].bind(x);
          (E.isMobxAction = !0), (x[u] = E);
        }),
      i
    );
  }
  te(
    "Cannot apply '" +
      d.annotationType_ +
      "' to '" +
      String(u) +
      "' (kind: " +
      s +
      "):" +
      (`
'` +
        d.annotationType_ +
        "' can only be used on properties with a function value.")
  );
}
function Av(i, l, s, u) {
  l.annotationType_, u.value;
}
function wd(i, l, s, u, c) {
  var d, h, _, x, E, P, M;
  c === void 0 && (c = T.safeDescriptors), Av(i, l, s, u);
  var D = u.value;
  if ((d = l.options_) != null && d.bound) {
    var J;
    D = D.bind((J = i.proxy_) != null ? J : i.target_);
  }
  return {
    value: Qn(
      (h = (_ = l.options_) == null ? void 0 : _.name) != null
        ? h
        : s.toString(),
      D,
      (x = (E = l.options_) == null ? void 0 : E.autoAction) != null ? x : !1,
      (P = l.options_) != null && P.bound
        ? (M = i.proxy_) != null
          ? M
          : i.target_
        : void 0
    ),
    configurable: c ? i.isPlainObject_ : !0,
    enumerable: !1,
    writable: !c,
  };
}
function xd(i, l) {
  return {
    annotationType_: i,
    options_: l,
    make_: Tv,
    extend_: Mv,
    decorate_20223_: Lv,
  };
}
function Tv(i, l, s, u) {
  var c;
  if (u === i.target_) return this.extend_(i, l, s, !1) === null ? 0 : 2;
  if (
    (c = this.options_) != null &&
    c.bound &&
    (!tn(i.target_, l) || !wi(i.target_[l])) &&
    this.extend_(i, l, s, !1) === null
  )
    return 0;
  if (wi(s.value)) return 1;
  var d = kd(i, this, l, s, !1, !1);
  return $t(u, l, d), 2;
}
function Mv(i, l, s, u) {
  var c,
    d = kd(i, this, l, s, (c = this.options_) == null ? void 0 : c.bound);
  return i.defineProperty_(l, d, u);
}
function Lv(i, l) {
  var s,
    u = l.name,
    c = l.addInitializer;
  return (
    wi(i) || (i = Cr(i)),
    (s = this.options_) != null &&
      s.bound &&
      c(function () {
        var d = this,
          h = d[u].bind(d);
        (h.isMobXFlow = !0), (d[u] = h);
      }),
    i
  );
}
function zv(i, l, s, u) {
  l.annotationType_, u.value;
}
function kd(i, l, s, u, c, d) {
  d === void 0 && (d = T.safeDescriptors), zv(i, l, s, u);
  var h = u.value;
  if ((wi(h) || (h = Cr(h)), c)) {
    var _;
    (h = h.bind((_ = i.proxy_) != null ? _ : i.target_)), (h.isMobXFlow = !0);
  }
  return {
    value: h,
    configurable: d ? i.isPlainObject_ : !0,
    enumerable: !1,
    writable: !d,
  };
}
function Ru(i, l) {
  return {
    annotationType_: i,
    options_: l,
    make_: Dv,
    extend_: Iv,
    decorate_20223_: bv,
  };
}
function Dv(i, l, s) {
  return this.extend_(i, l, s, !1) === null ? 0 : 1;
}
function Iv(i, l, s, u) {
  return (
    Fv(i, this, l, s),
    i.defineComputedProperty_(
      l,
      Hn({}, this.options_, { get: s.get, set: s.set }),
      u
    )
  );
}
function bv(i, l) {
  var s = this,
    u = l.name,
    c = l.addInitializer;
  return (
    c(function () {
      var d = Yn(this)[K],
        h = Hn({}, s.options_, { get: i, context: this });
      h.name || (h.name = "ObservableObject." + u.toString()),
        d.values_.set(u, new Rt(h));
    }),
    function () {
      return this[K].getObservablePropValue_(u);
    }
  );
}
function Fv(i, l, s, u) {
  l.annotationType_, u.get;
}
function ll(i, l) {
  return {
    annotationType_: i,
    options_: l,
    make_: Bv,
    extend_: $v,
    decorate_20223_: Uv,
  };
}
function Bv(i, l, s) {
  return this.extend_(i, l, s, !1) === null ? 0 : 1;
}
function $v(i, l, s, u) {
  var c, d;
  return (
    Vv(i, this),
    i.defineObservableProperty_(
      l,
      s.value,
      (c = (d = this.options_) == null ? void 0 : d.enhancer) != null ? c : Kn,
      u
    )
  );
}
function Uv(i, l) {
  var s = this,
    u = l.kind,
    c = l.name,
    d = new WeakSet();
  function h(_, x) {
    var E,
      P,
      M = Yn(_)[K],
      D = new Vn(
        x,
        (E = (P = s.options_) == null ? void 0 : P.enhancer) != null ? E : Kn,
        "ObservableObject." + c.toString(),
        !1
      );
    M.values_.set(c, D), d.add(_);
  }
  if (u == "accessor")
    return {
      get: function () {
        return (
          d.has(this) || h(this, i.get.call(this)),
          this[K].getObservablePropValue_(c)
        );
      },
      set: function (x) {
        return d.has(this) || h(this, x), this[K].setObservablePropValue_(c, x);
      },
      init: function (x) {
        return d.has(this) || h(this, x), x;
      },
    };
}
function Vv(i, l, s, u) {
  l.annotationType_;
}
var Wv = "true",
  Hv = Od();
function Od(i) {
  return {
    annotationType_: Wv,
    options_: i,
    make_: Kv,
    extend_: Qv,
    decorate_20223_: Gv,
  };
}
function Kv(i, l, s, u) {
  var c, d;
  if (s.get) return sl.make_(i, l, s, u);
  if (s.set) {
    var h = Qn(l.toString(), s.set);
    return u === i.target_
      ? i.defineProperty_(l, {
          configurable: T.safeDescriptors ? i.isPlainObject_ : !0,
          set: h,
        }) === null
        ? 0
        : 2
      : ($t(u, l, { configurable: !0, set: h }), 2);
  }
  if (u !== i.target_ && typeof s.value == "function") {
    var _;
    if (vd(s.value)) {
      var x,
        E = (x = this.options_) != null && x.autoBind ? Cr.bound : Cr;
      return E.make_(i, l, s, u);
    }
    var P = (_ = this.options_) != null && _.autoBind ? _i.bound : _i;
    return P.make_(i, l, s, u);
  }
  var M = ((c = this.options_) == null ? void 0 : c.deep) === !1 ? De.ref : De;
  if (
    typeof s.value == "function" &&
    (d = this.options_) != null &&
    d.autoBind
  ) {
    var D;
    s.value = s.value.bind((D = i.proxy_) != null ? D : i.target_);
  }
  return M.make_(i, l, s, u);
}
function Qv(i, l, s, u) {
  var c, d;
  if (s.get) return sl.extend_(i, l, s, u);
  if (s.set)
    return i.defineProperty_(
      l,
      {
        configurable: T.safeDescriptors ? i.isPlainObject_ : !0,
        set: Qn(l.toString(), s.set),
      },
      u
    );
  if (
    typeof s.value == "function" &&
    (c = this.options_) != null &&
    c.autoBind
  ) {
    var h;
    s.value = s.value.bind((h = i.proxy_) != null ? h : i.target_);
  }
  var _ = ((d = this.options_) == null ? void 0 : d.deep) === !1 ? De.ref : De;
  return _.extend_(i, l, s, u);
}
function Gv(i, l) {
  te("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var Xv = "observable",
  qv = "observable.ref",
  Yv = "observable.shallow",
  Zv = "observable.struct",
  Ed = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(Ed);
function Bo(i) {
  return i || Ed;
}
var _u = ll(Xv),
  Jv = ll(qv, { enhancer: ol }),
  em = ll(Yv, { enhancer: Ov }),
  tm = ll(Zv, { enhancer: Ev }),
  Pd = Ut(_u);
function $o(i) {
  return i.deep === !0 ? Kn : i.deep === !1 ? ol : rm(i.defaultDecorator);
}
function nm(i) {
  var l;
  return i ? ((l = i.defaultDecorator) != null ? l : Od(i)) : void 0;
}
function rm(i) {
  var l, s;
  return i && (l = (s = i.options_) == null ? void 0 : s.enhancer) != null
    ? l
    : Kn;
}
function jd(i, l, s) {
  if (Oi(l)) return _u.decorate_20223_(i, l);
  if (Wn(l)) {
    ki(i, l, _u);
    return;
  }
  return Kd(i)
    ? i
    : rn(i)
    ? De.object(i, l, s)
    : Array.isArray(i)
    ? De.array(i, l)
    : Nr(i)
    ? De.map(i, l)
    : Jt(i)
    ? De.set(i, l)
    : typeof i == "object" && i !== null
    ? i
    : De.box(i, l);
}
fd(jd, Pd);
var im = {
    box: function (l, s) {
      var u = Bo(s);
      return new Vn(l, $o(u), u.name, !0, u.equals);
    },
    array: function (l, s) {
      var u = Bo(s);
      return (T.useProxies === !1 || u.proxy === !1 ? tg : Hm)(
        l,
        $o(u),
        u.name
      );
    },
    map: function (l, s) {
      var u = Bo(s);
      return new Xd(l, $o(u), u.name);
    },
    set: function (l, s) {
      var u = Bo(s);
      return new qd(l, $o(u), u.name);
    },
    object: function (l, s, u) {
      return Cn(function () {
        return Vd(
          T.useProxies === !1 || (u == null ? void 0 : u.proxy) === !1
            ? Yn({}, u)
            : $m({}, u),
          l,
          s
        );
      });
    },
    ref: Ut(Jv),
    shallow: Ut(em),
    deep: Pd,
    struct: Ut(tm),
  },
  De = fd(jd, im),
  Cd = "computed",
  om = "computed.struct",
  Su = Ru(Cd),
  lm = Ru(om, { equals: Qo.structural }),
  sl = function (l, s) {
    if (Oi(s)) return Su.decorate_20223_(l, s);
    if (Wn(s)) return ki(l, s, Su);
    if (rn(l)) return Ut(Ru(Cd, l));
    var u = rn(s) ? s : {};
    return (u.get = l), u.name || (u.name = l.name || ""), new Rt(u);
  };
Object.assign(sl, Su);
sl.struct = Ut(lm);
var Wf,
  Hf,
  Go = 0,
  sm = 1,
  um =
    (Wf =
      (Hf = Ko(function () {}, "name")) == null ? void 0 : Hf.configurable) !=
    null
      ? Wf
      : !1,
  Kf = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function Qn(i, l, s, u) {
  s === void 0 && (s = !1);
  function c() {
    return am(i, s, l, u || this, arguments);
  }
  return (
    (c.isMobxAction = !0),
    (c.toString = function () {
      return l.toString();
    }),
    um && ((Kf.value = i), $t(c, "name", Kf)),
    c
  );
}
function am(i, l, s, u, c) {
  var d = cm(i, l);
  try {
    return s.apply(u, c);
  } catch (h) {
    throw ((d.error_ = h), h);
  } finally {
    fm(d);
  }
}
function cm(i, l, s, u) {
  var c = !1,
    d = 0,
    h = T.trackingDerivation,
    _ = !l || !h;
  gt();
  var x = T.allowStateChanges;
  _ && (Xn(), (x = Au(!0)));
  var E = Mu(!0),
    P = {
      runAsAction_: _,
      prevDerivation_: h,
      prevAllowStateChanges_: x,
      prevAllowStateReads_: E,
      notifySpy_: c,
      startTime_: d,
      actionId_: sm++,
      parentActionId_: Go,
    };
  return (Go = P.actionId_), P;
}
function fm(i) {
  Go !== i.actionId_ && te(30),
    (Go = i.parentActionId_),
    i.error_ !== void 0 && (T.suppressReactionErrors = !0),
    Tu(i.prevAllowStateChanges_),
    gi(i.prevAllowStateReads_),
    yt(),
    i.runAsAction_ && nn(i.prevDerivation_),
    (T.suppressReactionErrors = !1);
}
function Au(i) {
  var l = T.allowStateChanges;
  return (T.allowStateChanges = i), l;
}
function Tu(i) {
  T.allowStateChanges = i;
}
var Vn = (function (i) {
    function l(u, c, d, h, _) {
      var x;
      return (
        d === void 0 && (d = "ObservableValue"),
        _ === void 0 && (_ = Qo.default),
        (x = i.call(this, d) || this),
        (x.enhancer = void 0),
        (x.name_ = void 0),
        (x.equals = void 0),
        (x.hasUnreportedChange_ = !1),
        (x.interceptors_ = void 0),
        (x.changeListeners_ = void 0),
        (x.value_ = void 0),
        (x.dehancer = void 0),
        (x.enhancer = c),
        (x.name_ = d),
        (x.equals = _),
        (x.value_ = c(u, void 0, d)),
        x
      );
    }
    _d(l, i);
    var s = l.prototype;
    return (
      (s.dehanceValue = function (c) {
        return this.dehancer !== void 0 ? this.dehancer(c) : c;
      }),
      (s.set = function (c) {
        this.value_,
          (c = this.prepareNewValue_(c)),
          c !== T.UNCHANGED && this.setNewValue_(c);
      }),
      (s.prepareNewValue_ = function (c) {
        if (vt(this)) {
          var d = mt(this, { object: this, type: Vt, newValue: c });
          if (!d) return T.UNCHANGED;
          c = d.newValue;
        }
        return (
          (c = this.enhancer(c, this.value_, this.name_)),
          this.equals(this.value_, c) ? T.UNCHANGED : c
        );
      }),
      (s.setNewValue_ = function (c) {
        var d = this.value_;
        (this.value_ = c),
          this.reportChanged(),
          jt(this) &&
            Ct(this, { type: Vt, object: this, newValue: c, oldValue: d });
      }),
      (s.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (s.intercept_ = function (c) {
        return Pi(this, c);
      }),
      (s.observe_ = function (c, d) {
        return (
          d &&
            c({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: Vt,
              newValue: this.value_,
              oldValue: void 0,
            }),
          ji(this, c)
        );
      }),
      (s.raw = function () {
        return this.value_;
      }),
      (s.toJSON = function () {
        return this.get();
      }),
      (s.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (s.valueOf = function () {
        return yd(this.get());
      }),
      (s[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      l
    );
  })(jn),
  Rt = (function () {
    function i(s) {
      (this.dependenciesState_ = oe.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = oe.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new qo(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = Xo.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        s.get || te(31),
        (this.derivation = s.get),
        (this.name_ = s.name || "ComputedValue"),
        s.set && (this.setter_ = Qn("ComputedValue-setter", s.set)),
        (this.equals_ =
          s.equals ||
          (s.compareStructural || s.struct ? Qo.structural : Qo.default)),
        (this.scope_ = s.context),
        (this.requiresReaction_ = s.requiresReaction),
        (this.keepAlive_ = !!s.keepAlive);
    }
    var l = i.prototype;
    return (
      (l.onBecomeStale_ = function () {
        mm(this);
      }),
      (l.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (u) {
            return u();
          });
      }),
      (l.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (u) {
            return u();
          });
      }),
      (l.get = function () {
        if (
          (this.isComputing && te(32, this.name_, this.derivation),
          T.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          wu(this) &&
            (this.warnAboutUntrackedRead_(),
            gt(),
            (this.value_ = this.computeValue_(!1)),
            yt());
        else if ((zd(this), wu(this))) {
          var u = T.trackingContext;
          this.keepAlive_ && !u && (T.trackingContext = this),
            this.trackAndCompute() && vm(this),
            (T.trackingContext = u);
        }
        var c = this.value_;
        if (Vo(c)) throw c.cause;
        return c;
      }),
      (l.set = function (u) {
        if (this.setter_) {
          this.isRunningSetter && te(33, this.name_),
            (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, u);
          } finally {
            this.isRunningSetter = !1;
          }
        } else te(34, this.name_);
      }),
      (l.trackAndCompute = function () {
        var u = this.value_,
          c = this.dependenciesState_ === oe.NOT_TRACKING_,
          d = this.computeValue_(!0),
          h = c || Vo(u) || Vo(d) || !this.equals_(u, d);
        return h && (this.value_ = d), h;
      }),
      (l.computeValue_ = function (u) {
        this.isComputing = !0;
        var c = Au(!1),
          d;
        if (u) d = Nd(this, this.derivation, this.scope_);
        else if (T.disableErrorBoundaries === !0)
          d = this.derivation.call(this.scope_);
        else
          try {
            d = this.derivation.call(this.scope_);
          } catch (h) {
            d = new qo(h);
          }
        return Tu(c), (this.isComputing = !1), d;
      }),
      (l.suspend_ = function () {
        this.keepAlive_ || (xu(this), (this.value_ = void 0));
      }),
      (l.observe_ = function (u, c) {
        var d = this,
          h = !0,
          _ = void 0;
        return Pm(function () {
          var x = d.get();
          if (!h || c) {
            var E = Xn();
            u({
              observableKind: "computed",
              debugObjectName: d.name_,
              type: Vt,
              object: d,
              newValue: x,
              oldValue: _,
            }),
              nn(E);
          }
          (h = !1), (_ = x);
        });
      }),
      (l.warnAboutUntrackedRead_ = function () {}),
      (l.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (l.valueOf = function () {
        return yd(this.get());
      }),
      (l[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      Rr(i, [
        {
          key: "isComputing",
          get: function () {
            return ot(this.flags_, i.isComputingMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isComputingMask_, u);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return ot(this.flags_, i.isRunningSetterMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isRunningSetterMask_, u);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return ot(this.flags_, i.isBeingObservedMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isBeingObservedMask_, u);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return ot(this.flags_, i.isPendingUnobservationMask_);
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.isPendingUnobservationMask_, u);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return ot(this.flags_, i.diffValueMask_) ? 1 : 0;
          },
          set: function (u) {
            this.flags_ = lt(this.flags_, i.diffValueMask_, u === 1);
          },
        },
      ])
    );
  })();
Rt.isComputingMask_ = 1;
Rt.isRunningSetterMask_ = 2;
Rt.isBeingObservedMask_ = 4;
Rt.isPendingUnobservationMask_ = 8;
Rt.diffValueMask_ = 16;
var ul = Gn("ComputedValue", Rt),
  oe;
(function (i) {
  (i[(i.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (i[(i.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (i[(i.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (i[(i.STALE_ = 2)] = "STALE_");
})(oe || (oe = {}));
var Xo;
(function (i) {
  (i[(i.NONE = 0)] = "NONE"),
    (i[(i.LOG = 1)] = "LOG"),
    (i[(i.BREAK = 2)] = "BREAK");
})(Xo || (Xo = {}));
var qo = function (l) {
  (this.cause = void 0), (this.cause = l);
};
function Vo(i) {
  return i instanceof qo;
}
function wu(i) {
  switch (i.dependenciesState_) {
    case oe.UP_TO_DATE_:
      return !1;
    case oe.NOT_TRACKING_:
    case oe.STALE_:
      return !0;
    case oe.POSSIBLY_STALE_: {
      for (
        var l = Mu(!0), s = Xn(), u = i.observing_, c = u.length, d = 0;
        d < c;
        d++
      ) {
        var h = u[d];
        if (ul(h)) {
          if (T.disableErrorBoundaries) h.get();
          else
            try {
              h.get();
            } catch {
              return nn(s), gi(l), !0;
            }
          if (i.dependenciesState_ === oe.STALE_) return nn(s), gi(l), !0;
        }
      }
      return Ad(i), nn(s), gi(l), !1;
    }
  }
}
function Nd(i, l, s) {
  var u = Mu(!0);
  Ad(i),
    (i.newObserving_ = new Array(i.runId_ === 0 ? 100 : i.observing_.length)),
    (i.unboundDepsCount_ = 0),
    (i.runId_ = ++T.runId);
  var c = T.trackingDerivation;
  (T.trackingDerivation = i), T.inBatch++;
  var d;
  if (T.disableErrorBoundaries === !0) d = l.call(s);
  else
    try {
      d = l.call(s);
    } catch (h) {
      d = new qo(h);
    }
  return T.inBatch--, (T.trackingDerivation = c), dm(i), gi(u), d;
}
function dm(i) {
  for (
    var l = i.observing_,
      s = (i.observing_ = i.newObserving_),
      u = oe.UP_TO_DATE_,
      c = 0,
      d = i.unboundDepsCount_,
      h = 0;
    h < d;
    h++
  ) {
    var _ = s[h];
    _.diffValue === 0 && ((_.diffValue = 1), c !== h && (s[c] = _), c++),
      _.dependenciesState_ > u && (u = _.dependenciesState_);
  }
  for (s.length = c, i.newObserving_ = null, d = l.length; d--; ) {
    var x = l[d];
    x.diffValue === 0 && Md(x, i), (x.diffValue = 0);
  }
  for (; c--; ) {
    var E = s[c];
    E.diffValue === 1 && ((E.diffValue = 0), hm(E, i));
  }
  u !== oe.UP_TO_DATE_ && ((i.dependenciesState_ = u), i.onBecomeStale_());
}
function xu(i) {
  var l = i.observing_;
  i.observing_ = [];
  for (var s = l.length; s--; ) Md(l[s], i);
  i.dependenciesState_ = oe.NOT_TRACKING_;
}
function Rd(i) {
  var l = Xn();
  try {
    return i();
  } finally {
    nn(l);
  }
}
function Xn() {
  var i = T.trackingDerivation;
  return (T.trackingDerivation = null), i;
}
function nn(i) {
  T.trackingDerivation = i;
}
function Mu(i) {
  var l = T.allowStateReads;
  return (T.allowStateReads = i), l;
}
function gi(i) {
  T.allowStateReads = i;
}
function Ad(i) {
  if (i.dependenciesState_ !== oe.UP_TO_DATE_) {
    i.dependenciesState_ = oe.UP_TO_DATE_;
    for (var l = i.observing_, s = l.length; s--; )
      l[s].lowestObserverState_ = oe.UP_TO_DATE_;
  }
}
var Wo = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  Ho = !0,
  Td = !1,
  T = (function () {
    var i = nl();
    return (
      i.__mobxInstanceCount > 0 && !i.__mobxGlobals && (Ho = !1),
      i.__mobxGlobals &&
        i.__mobxGlobals.version !== new Wo().version &&
        (Ho = !1),
      Ho
        ? i.__mobxGlobals
          ? ((i.__mobxInstanceCount += 1),
            i.__mobxGlobals.UNCHANGED || (i.__mobxGlobals.UNCHANGED = {}),
            i.__mobxGlobals)
          : ((i.__mobxInstanceCount = 1), (i.__mobxGlobals = new Wo()))
        : (setTimeout(function () {
            Td || te(35);
          }, 1),
          new Wo())
    );
  })();
function pm() {
  if (
    ((T.pendingReactions.length || T.inBatch || T.isRunningReactions) && te(36),
    (Td = !0),
    Ho)
  ) {
    var i = nl();
    --i.__mobxInstanceCount === 0 && (i.__mobxGlobals = void 0), (T = new Wo());
  }
}
function hm(i, l) {
  i.observers_.add(l),
    i.lowestObserverState_ > l.dependenciesState_ &&
      (i.lowestObserverState_ = l.dependenciesState_);
}
function Md(i, l) {
  i.observers_.delete(l), i.observers_.size === 0 && Ld(i);
}
function Ld(i) {
  i.isPendingUnobservation === !1 &&
    ((i.isPendingUnobservation = !0), T.pendingUnobservations.push(i));
}
function gt() {
  T.inBatch++;
}
function yt() {
  if (--T.inBatch === 0) {
    Id();
    for (var i = T.pendingUnobservations, l = 0; l < i.length; l++) {
      var s = i[l];
      (s.isPendingUnobservation = !1),
        s.observers_.size === 0 &&
          (s.isBeingObserved && ((s.isBeingObserved = !1), s.onBUO()),
          s instanceof Rt && s.suspend_());
    }
    T.pendingUnobservations = [];
  }
}
function zd(i) {
  var l = T.trackingDerivation;
  return l !== null
    ? (l.runId_ !== i.lastAccessedBy_ &&
        ((i.lastAccessedBy_ = l.runId_),
        (l.newObserving_[l.unboundDepsCount_++] = i),
        !i.isBeingObserved &&
          T.trackingContext &&
          ((i.isBeingObserved = !0), i.onBO())),
      i.isBeingObserved)
    : (i.observers_.size === 0 && T.inBatch > 0 && Ld(i), !1);
}
function Dd(i) {
  i.lowestObserverState_ !== oe.STALE_ &&
    ((i.lowestObserverState_ = oe.STALE_),
    i.observers_.forEach(function (l) {
      l.dependenciesState_ === oe.UP_TO_DATE_ && l.onBecomeStale_(),
        (l.dependenciesState_ = oe.STALE_);
    }));
}
function vm(i) {
  i.lowestObserverState_ !== oe.STALE_ &&
    ((i.lowestObserverState_ = oe.STALE_),
    i.observers_.forEach(function (l) {
      l.dependenciesState_ === oe.POSSIBLY_STALE_
        ? (l.dependenciesState_ = oe.STALE_)
        : l.dependenciesState_ === oe.UP_TO_DATE_ &&
          (i.lowestObserverState_ = oe.UP_TO_DATE_);
    }));
}
function mm(i) {
  i.lowestObserverState_ === oe.UP_TO_DATE_ &&
    ((i.lowestObserverState_ = oe.POSSIBLY_STALE_),
    i.observers_.forEach(function (l) {
      l.dependenciesState_ === oe.UP_TO_DATE_ &&
        ((l.dependenciesState_ = oe.POSSIBLY_STALE_), l.onBecomeStale_());
    }));
}
var on = (function () {
  function i(s, u, c, d) {
    s === void 0 && (s = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = oe.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = Xo.NONE),
      (this.name_ = s),
      (this.onInvalidate_ = u),
      (this.errorHandler_ = c),
      (this.requiresObservable_ = d);
  }
  var l = i.prototype;
  return (
    (l.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (l.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), T.pendingReactions.push(this), Id());
    }),
    (l.runReaction_ = function () {
      if (!this.isDisposed) {
        gt(), (this.isScheduled = !1);
        var u = T.trackingContext;
        if (((T.trackingContext = this), wu(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (c) {
            this.reportExceptionInDerivation_(c);
          }
        }
        (T.trackingContext = u), yt();
      }
    }),
    (l.track = function (u) {
      if (!this.isDisposed) {
        gt(), (this.isRunning = !0);
        var c = T.trackingContext;
        T.trackingContext = this;
        var d = Nd(this, u, void 0);
        (T.trackingContext = c),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && xu(this),
          Vo(d) && this.reportExceptionInDerivation_(d.cause),
          yt();
      }
    }),
    (l.reportExceptionInDerivation_ = function (u) {
      var c = this;
      if (this.errorHandler_) {
        this.errorHandler_(u, this);
        return;
      }
      if (T.disableErrorBoundaries) throw u;
      var d = "[mobx] uncaught error in '" + this + "'";
      T.suppressReactionErrors || console.error(d, u),
        T.globalReactionErrorHandlers.forEach(function (h) {
          return h(u, c);
        });
    }),
    (l.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (gt(), xu(this), yt()));
    }),
    (l.getDisposer_ = function (u) {
      var c = this,
        d = function h() {
          c.dispose(),
            u == null ||
              u.removeEventListener == null ||
              u.removeEventListener("abort", h);
        };
      return (
        u == null ||
          u.addEventListener == null ||
          u.addEventListener("abort", d),
        (d[K] = this),
        d
      );
    }),
    (l.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (l.trace = function (u) {}),
    Rr(i, [
      {
        key: "isDisposed",
        get: function () {
          return ot(this.flags_, i.isDisposedMask_);
        },
        set: function (u) {
          this.flags_ = lt(this.flags_, i.isDisposedMask_, u);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return ot(this.flags_, i.isScheduledMask_);
        },
        set: function (u) {
          this.flags_ = lt(this.flags_, i.isScheduledMask_, u);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return ot(this.flags_, i.isTrackPendingMask_);
        },
        set: function (u) {
          this.flags_ = lt(this.flags_, i.isTrackPendingMask_, u);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return ot(this.flags_, i.isRunningMask_);
        },
        set: function (u) {
          this.flags_ = lt(this.flags_, i.isRunningMask_, u);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return ot(this.flags_, i.diffValueMask_) ? 1 : 0;
        },
        set: function (u) {
          this.flags_ = lt(this.flags_, i.diffValueMask_, u === 1);
        },
      },
    ])
  );
})();
on.isDisposedMask_ = 1;
on.isScheduledMask_ = 2;
on.isTrackPendingMask_ = 4;
on.isRunningMask_ = 8;
on.diffValueMask_ = 16;
var gm = 100,
  ku = function (l) {
    return l();
  };
function Id() {
  T.inBatch > 0 || T.isRunningReactions || ku(ym);
}
function ym() {
  T.isRunningReactions = !0;
  for (var i = T.pendingReactions, l = 0; i.length > 0; ) {
    ++l === gm &&
      (console.error("[mobx] cycle in reaction: " + i[0]), i.splice(0));
    for (var s = i.splice(0), u = 0, c = s.length; u < c; u++)
      s[u].runReaction_();
  }
  T.isRunningReactions = !1;
}
var Yo = Gn("Reaction", on);
function _m(i) {
  var l = ku;
  ku = function (u) {
    return i(function () {
      return l(u);
    });
  };
}
function yi() {
  return !1;
}
function Sm(i) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var bd = "action",
  wm = "action.bound",
  Fd = "autoAction",
  xm = "autoAction.bound",
  km = "<unnamed action>",
  Ou = Ei(bd),
  Om = Ei(wm, { bound: !0 }),
  Eu = Ei(Fd, { autoAction: !0 }),
  Em = Ei(xm, { autoAction: !0, bound: !0 });
function Bd(i) {
  var l = function (u, c) {
    if (Nt(u)) return Qn(u.name || km, u, i);
    if (Nt(c)) return Qn(u, c, i);
    if (Oi(c)) return (i ? Eu : Ou).decorate_20223_(u, c);
    if (Wn(c)) return ki(u, c, i ? Eu : Ou);
    if (Wn(u)) return Ut(Ei(i ? Fd : bd, { name: u, autoAction: i }));
  };
  return l;
}
var Pr = Bd(!1);
Object.assign(Pr, Ou);
var _i = Bd(!0);
Object.assign(_i, Eu);
Pr.bound = Ut(Om);
_i.bound = Ut(Em);
function Si(i) {
  return Nt(i) && i.isMobxAction === !0;
}
function Pm(i, l) {
  var s, u, c, d;
  l === void 0 && (l = dd);
  var h = (s = (u = l) == null ? void 0 : u.name) != null ? s : "Autorun",
    _ = !l.scheduler && !l.delay,
    x;
  if (_)
    x = new on(
      h,
      function () {
        this.track(M);
      },
      l.onError,
      l.requiresObservable
    );
  else {
    var E = Cm(l),
      P = !1;
    x = new on(
      h,
      function () {
        P ||
          ((P = !0),
          E(function () {
            (P = !1), x.isDisposed || x.track(M);
          }));
      },
      l.onError,
      l.requiresObservable
    );
  }
  function M() {
    i(x);
  }
  return (
    ((c = l) != null && (c = c.signal) != null && c.aborted) || x.schedule_(),
    x.getDisposer_((d = l) == null ? void 0 : d.signal)
  );
}
var jm = function (l) {
  return l();
};
function Cm(i) {
  return i.scheduler
    ? i.scheduler
    : i.delay
    ? function (l) {
        return setTimeout(l, i.delay);
      }
    : jm;
}
var Nm = "onBO",
  Rm = "onBUO";
function Am(i, l, s) {
  return Ud(Nm, i, l, s);
}
function $d(i, l, s) {
  return Ud(Rm, i, l, s);
}
function Ud(i, l, s, u) {
  var c = el(l),
    d = Nt(u) ? u : s,
    h = i + "L";
  return (
    c[h] ? c[h].add(d) : (c[h] = new Set([d])),
    function () {
      var _ = c[h];
      _ && (_.delete(d), _.size === 0 && delete c[h]);
    }
  );
}
var Tm = "never",
  Uo = "always",
  Mm = "observed";
function Lm(i) {
  i.isolateGlobalState === !0 && pm();
  var l = i.useProxies,
    s = i.enforceActions;
  if (
    (l !== void 0 &&
      (T.useProxies = l === Uo ? !0 : l === Tm ? !1 : typeof Proxy < "u"),
    l === "ifavailable" && (T.verifyProxies = !0),
    s !== void 0)
  ) {
    var u = s === Uo ? Uo : s === Mm;
    (T.enforceActions = u), (T.allowStateChanges = !(u === !0 || u === Uo));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (c) {
    c in i && (T[c] = !!i[c]);
  }),
    (T.allowStateReads = !T.observableRequiresReaction),
    i.reactionScheduler && _m(i.reactionScheduler);
}
function Vd(i, l, s, u) {
  var c = hv(l);
  return (
    Cn(function () {
      var d = Yn(i, u)[K];
      jr(c).forEach(function (h) {
        d.extend_(h, c[h], s && h in s ? s[h] : !0);
      });
    }),
    i
  );
}
function zm(i, l) {
  return Wd(el(i, l));
}
function Wd(i) {
  var l = { name: i.name_ };
  return (
    i.observing_ &&
      i.observing_.length > 0 &&
      (l.dependencies = Dm(i.observing_).map(Wd)),
    l
  );
}
function Dm(i) {
  return Array.from(new Set(i));
}
var Im = 0;
function Hd() {
  this.message = "FLOW_CANCELLED";
}
Hd.prototype = Object.create(Error.prototype);
var au = xd("flow"),
  bm = xd("flow.bound", { bound: !0 }),
  Cr = Object.assign(function (l, s) {
    if (Oi(s)) return au.decorate_20223_(l, s);
    if (Wn(s)) return ki(l, s, au);
    var u = l,
      c = u.name || "<unnamed flow>",
      d = function () {
        var _ = this,
          x = arguments,
          E = ++Im,
          P = Pr(c + " - runid: " + E + " - init", u).apply(_, x),
          M,
          D = void 0,
          J = new Promise(function (se, U) {
            var G = 0;
            M = U;
            function Ie(le) {
              D = void 0;
              var Ee;
              try {
                Ee = Pr(c + " - runid: " + E + " - yield " + G++, P.next).call(
                  P,
                  le
                );
              } catch (ye) {
                return U(ye);
              }
              Te(Ee);
            }
            function He(le) {
              D = void 0;
              var Ee;
              try {
                Ee = Pr(c + " - runid: " + E + " - yield " + G++, P.throw).call(
                  P,
                  le
                );
              } catch (ye) {
                return U(ye);
              }
              Te(Ee);
            }
            function Te(le) {
              if (Nt(le == null ? void 0 : le.then)) {
                le.then(Te, U);
                return;
              }
              return le.done
                ? se(le.value)
                : ((D = Promise.resolve(le.value)), D.then(Ie, He));
            }
            Ie(void 0);
          });
        return (
          (J.cancel = Pr(c + " - runid: " + E + " - cancel", function () {
            try {
              D && Qf(D);
              var se = P.return(void 0),
                U = Promise.resolve(se.value);
              U.then(Or, Or), Qf(U), M(new Hd());
            } catch (G) {
              M(G);
            }
          })),
          J
        );
      };
    return (d.isMobXFlow = !0), d;
  }, au);
Cr.bound = Ut(bm);
function Qf(i) {
  Nt(i.cancel) && i.cancel();
}
function wi(i) {
  return (i == null ? void 0 : i.isMobXFlow) === !0;
}
function Fm(i, l) {
  return i ? cl(i) || !!i[K] || Nu(i) || Yo(i) || ul(i) : !1;
}
function Kd(i) {
  return Fm(i);
}
function en(i, l) {
  l === void 0 && (l = void 0), gt();
  try {
    return i.apply(l);
  } finally {
    yt();
  }
}
function kr(i) {
  return i[K];
}
var Bm = {
  has: function (l, s) {
    return kr(l).has_(s);
  },
  get: function (l, s) {
    return kr(l).get_(s);
  },
  set: function (l, s, u) {
    var c;
    return Wn(s) ? ((c = kr(l).set_(s, u, !0)) != null ? c : !0) : !1;
  },
  deleteProperty: function (l, s) {
    var u;
    return Wn(s) ? ((u = kr(l).delete_(s, !0)) != null ? u : !0) : !1;
  },
  defineProperty: function (l, s, u) {
    var c;
    return (c = kr(l).defineProperty_(s, u)) != null ? c : !0;
  },
  ownKeys: function (l) {
    return kr(l).ownKeys_();
  },
  preventExtensions: function (l) {
    te(13);
  },
};
function $m(i, l) {
  var s, u;
  return (
    pd(),
    (i = Yn(i, l)),
    (u = (s = i[K]).proxy_) != null ? u : (s.proxy_ = new Proxy(i, Bm))
  );
}
function vt(i) {
  return i.interceptors_ !== void 0 && i.interceptors_.length > 0;
}
function Pi(i, l) {
  var s = i.interceptors_ || (i.interceptors_ = []);
  return (
    s.push(l),
    hd(function () {
      var u = s.indexOf(l);
      u !== -1 && s.splice(u, 1);
    })
  );
}
function mt(i, l) {
  var s = Xn();
  try {
    for (
      var u = [].concat(i.interceptors_ || []), c = 0, d = u.length;
      c < d && ((l = u[c](l)), l && !l.type && te(14), !!l);
      c++
    );
    return l;
  } finally {
    nn(s);
  }
}
function jt(i) {
  return i.changeListeners_ !== void 0 && i.changeListeners_.length > 0;
}
function ji(i, l) {
  var s = i.changeListeners_ || (i.changeListeners_ = []);
  return (
    s.push(l),
    hd(function () {
      var u = s.indexOf(l);
      u !== -1 && s.splice(u, 1);
    })
  );
}
function Ct(i, l) {
  var s = Xn(),
    u = i.changeListeners_;
  if (u) {
    u = u.slice();
    for (var c = 0, d = u.length; c < d; c++) u[c](l);
    nn(s);
  }
}
function Um(i, l, s) {
  return (
    Cn(function () {
      var u,
        c = Yn(i, s)[K];
      (u = l) != null || (l = _v(i)),
        jr(l).forEach(function (d) {
          return c.make_(d, l[d]);
        });
    }),
    i
  );
}
var cu = Symbol("mobx-keys");
function Qd(i, l, s) {
  return rn(i)
    ? Vd(i, i, l, s)
    : (Cn(function () {
        var u = Yn(i, s)[K];
        if (!i[cu]) {
          var c = Object.getPrototypeOf(i),
            d = new Set([].concat(jr(i), jr(c)));
          d.delete("constructor"), d.delete(K), xi(c, cu, d);
        }
        i[cu].forEach(function (h) {
          return u.make_(h, l && h in l ? l[h] : !0);
        });
      }),
      i);
}
var Gf = "splice",
  Vt = "update",
  Vm = 1e4,
  Wm = {
    get: function (l, s) {
      var u = l[K];
      return s === K
        ? u
        : s === "length"
        ? u.getArrayLength_()
        : typeof s == "string" && !isNaN(s)
        ? u.get_(parseInt(s))
        : tn(Zo, s)
        ? Zo[s]
        : l[s];
    },
    set: function (l, s, u) {
      var c = l[K];
      return (
        s === "length" && c.setArrayLength_(u),
        typeof s == "symbol" || isNaN(s) ? (l[s] = u) : c.set_(parseInt(s), u),
        !0
      );
    },
    preventExtensions: function () {
      te(15);
    },
  },
  Lu = (function () {
    function i(s, u, c, d) {
      s === void 0 && (s = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = c),
        (this.legacyMode_ = d),
        (this.atom_ = new jn(s)),
        (this.enhancer_ = function (h, _) {
          return u(h, _, "ObservableArray[..]");
        });
    }
    var l = i.prototype;
    return (
      (l.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (l.dehanceValues_ = function (u) {
        return this.dehancer !== void 0 && u.length > 0
          ? u.map(this.dehancer)
          : u;
      }),
      (l.intercept_ = function (u) {
        return Pi(this, u);
      }),
      (l.observe_ = function (u, c) {
        return (
          c === void 0 && (c = !1),
          c &&
            u({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          ji(this, u)
        );
      }),
      (l.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (l.setArrayLength_ = function (u) {
        (typeof u != "number" || isNaN(u) || u < 0) && te("Out of range: " + u);
        var c = this.values_.length;
        if (u !== c)
          if (u > c) {
            for (var d = new Array(u - c), h = 0; h < u - c; h++) d[h] = void 0;
            this.spliceWithArray_(c, 0, d);
          } else this.spliceWithArray_(u, c - u);
      }),
      (l.updateArrayLength_ = function (u, c) {
        u !== this.lastKnownLength_ && te(16),
          (this.lastKnownLength_ += c),
          this.legacyMode_ && c > 0 && ep(u + c + 1);
      }),
      (l.spliceWithArray_ = function (u, c, d) {
        var h = this;
        this.atom_;
        var _ = this.values_.length;
        if (
          (u === void 0
            ? (u = 0)
            : u > _
            ? (u = _)
            : u < 0 && (u = Math.max(0, _ + u)),
          arguments.length === 1
            ? (c = _ - u)
            : c == null
            ? (c = 0)
            : (c = Math.max(0, Math.min(c, _ - u))),
          d === void 0 && (d = gu),
          vt(this))
        ) {
          var x = mt(this, {
            object: this.proxy_,
            type: Gf,
            index: u,
            removedCount: c,
            added: d,
          });
          if (!x) return gu;
          (c = x.removedCount), (d = x.added);
        }
        if (
          ((d =
            d.length === 0
              ? d
              : d.map(function (M) {
                  return h.enhancer_(M, void 0);
                })),
          this.legacyMode_)
        ) {
          var E = d.length - c;
          this.updateArrayLength_(_, E);
        }
        var P = this.spliceItemsIntoValues_(u, c, d);
        return (
          (c !== 0 || d.length !== 0) && this.notifyArraySplice_(u, d, P),
          this.dehanceValues_(P)
        );
      }),
      (l.spliceItemsIntoValues_ = function (u, c, d) {
        if (d.length < Vm) {
          var h;
          return (h = this.values_).splice.apply(h, [u, c].concat(d));
        } else {
          var _ = this.values_.slice(u, u + c),
            x = this.values_.slice(u + c);
          this.values_.length += d.length - c;
          for (var E = 0; E < d.length; E++) this.values_[u + E] = d[E];
          for (var P = 0; P < x.length; P++)
            this.values_[u + d.length + P] = x[P];
          return _;
        }
      }),
      (l.notifyArrayChildUpdate_ = function (u, c, d) {
        var h = !this.owned_ && yi(),
          _ = jt(this),
          x =
            _ || h
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: Vt,
                  debugObjectName: this.atom_.name_,
                  index: u,
                  newValue: c,
                  oldValue: d,
                }
              : null;
        this.atom_.reportChanged(), _ && Ct(this, x);
      }),
      (l.notifyArraySplice_ = function (u, c, d) {
        var h = !this.owned_ && yi(),
          _ = jt(this),
          x =
            _ || h
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: Gf,
                  index: u,
                  removed: d,
                  added: c,
                  removedCount: d.length,
                  addedCount: c.length,
                }
              : null;
        this.atom_.reportChanged(), _ && Ct(this, x);
      }),
      (l.get_ = function (u) {
        if (this.legacyMode_ && u >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + u);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[u]);
      }),
      (l.set_ = function (u, c) {
        var d = this.values_;
        if (
          (this.legacyMode_ && u > d.length && te(17, u, d.length),
          u < d.length)
        ) {
          this.atom_;
          var h = d[u];
          if (vt(this)) {
            var _ = mt(this, {
              type: Vt,
              object: this.proxy_,
              index: u,
              newValue: c,
            });
            if (!_) return;
            c = _.newValue;
          }
          c = this.enhancer_(c, h);
          var x = c !== h;
          x && ((d[u] = c), this.notifyArrayChildUpdate_(u, c, h));
        } else {
          for (
            var E = new Array(u + 1 - d.length), P = 0;
            P < E.length - 1;
            P++
          )
            E[P] = void 0;
          (E[E.length - 1] = c), this.spliceWithArray_(d.length, 0, E);
        }
      }),
      i
    );
  })();
function Hm(i, l, s, u) {
  return (
    s === void 0 && (s = "ObservableArray"),
    u === void 0 && (u = !1),
    pd(),
    Cn(function () {
      var c = new Lu(s, l, u, !1);
      md(c.values_, K, c);
      var d = new Proxy(c.values_, Wm);
      return (c.proxy_ = d), i && i.length && c.spliceWithArray_(0, 0, i), d;
    })
  );
}
var Zo = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (l) {
    var s = this[K];
    return s.spliceWithArray_(0, s.values_.length, l);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (l, s) {
    for (
      var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
      d < u;
      d++
    )
      c[d - 2] = arguments[d];
    var h = this[K];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return h.spliceWithArray_(l);
      case 2:
        return h.spliceWithArray_(l, s);
    }
    return h.spliceWithArray_(l, s, c);
  },
  spliceWithArray: function (l, s, u) {
    return this[K].spliceWithArray_(l, s, u);
  },
  push: function () {
    for (
      var l = this[K], s = arguments.length, u = new Array(s), c = 0;
      c < s;
      c++
    )
      u[c] = arguments[c];
    return l.spliceWithArray_(l.values_.length, 0, u), l.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[K].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var l = this[K], s = arguments.length, u = new Array(s), c = 0;
      c < s;
      c++
    )
      u[c] = arguments[c];
    return l.spliceWithArray_(0, 0, u), l.values_.length;
  },
  reverse: function () {
    return (
      T.trackingDerivation && te(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    T.trackingDerivation && te(37, "sort");
    var l = this.slice();
    return l.sort.apply(l, arguments), this.replace(l), this;
  },
  remove: function (l) {
    var s = this[K],
      u = s.dehanceValues_(s.values_).indexOf(l);
    return u > -1 ? (this.splice(u, 1), !0) : !1;
  },
};
pe("at", st);
pe("concat", st);
pe("flat", st);
pe("includes", st);
pe("indexOf", st);
pe("join", st);
pe("lastIndexOf", st);
pe("slice", st);
pe("toString", st);
pe("toLocaleString", st);
pe("toSorted", st);
pe("toSpliced", st);
pe("with", st);
pe("every", At);
pe("filter", At);
pe("find", At);
pe("findIndex", At);
pe("findLast", At);
pe("findLastIndex", At);
pe("flatMap", At);
pe("forEach", At);
pe("map", At);
pe("some", At);
pe("toReversed", At);
pe("reduce", Gd);
pe("reduceRight", Gd);
function pe(i, l) {
  typeof Array.prototype[i] == "function" && (Zo[i] = l(i));
}
function st(i) {
  return function () {
    var l = this[K];
    l.atom_.reportObserved();
    var s = l.dehanceValues_(l.values_);
    return s[i].apply(s, arguments);
  };
}
function At(i) {
  return function (l, s) {
    var u = this,
      c = this[K];
    c.atom_.reportObserved();
    var d = c.dehanceValues_(c.values_);
    return d[i](function (h, _) {
      return l.call(s, h, _, u);
    });
  };
}
function Gd(i) {
  return function () {
    var l = this,
      s = this[K];
    s.atom_.reportObserved();
    var u = s.dehanceValues_(s.values_),
      c = arguments[0];
    return (
      (arguments[0] = function (d, h, _) {
        return c(d, h, _, l);
      }),
      u[i].apply(u, arguments)
    );
  };
}
var Km = Gn("ObservableArrayAdministration", Lu);
function al(i) {
  return il(i) && Km(i[K]);
}
var Qm = {},
  Pn = "add",
  Jo = "delete",
  Xd = (function () {
    function i(s, u, c) {
      var d = this;
      u === void 0 && (u = Kn),
        c === void 0 && (c = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[K] = Qm),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = u),
        (this.name_ = c),
        Nt(Map) || te(18),
        Cn(function () {
          (d.keysAtom_ = Sd("ObservableMap.keys()")),
            (d.data_ = new Map()),
            (d.hasMap_ = new Map()),
            s && d.merge(s);
        });
    }
    var l = i.prototype;
    return (
      (l.has_ = function (u) {
        return this.data_.has(u);
      }),
      (l.has = function (u) {
        var c = this;
        if (!T.trackingDerivation) return this.has_(u);
        var d = this.hasMap_.get(u);
        if (!d) {
          var h = (d = new Vn(this.has_(u), ol, "ObservableMap.key?", !1));
          this.hasMap_.set(u, h),
            $d(h, function () {
              return c.hasMap_.delete(u);
            });
        }
        return d.get();
      }),
      (l.set = function (u, c) {
        var d = this.has_(u);
        if (vt(this)) {
          var h = mt(this, {
            type: d ? Vt : Pn,
            object: this,
            newValue: c,
            name: u,
          });
          if (!h) return this;
          c = h.newValue;
        }
        return d ? this.updateValue_(u, c) : this.addValue_(u, c), this;
      }),
      (l.delete = function (u) {
        var c = this;
        if ((this.keysAtom_, vt(this))) {
          var d = mt(this, { type: Jo, object: this, name: u });
          if (!d) return !1;
        }
        if (this.has_(u)) {
          var h = yi(),
            _ = jt(this),
            x =
              _ || h
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Jo,
                    object: this,
                    oldValue: this.data_.get(u).value_,
                    name: u,
                  }
                : null;
          return (
            en(function () {
              var E;
              c.keysAtom_.reportChanged(),
                (E = c.hasMap_.get(u)) == null || E.setNewValue_(!1);
              var P = c.data_.get(u);
              P.setNewValue_(void 0), c.data_.delete(u);
            }),
            _ && Ct(this, x),
            !0
          );
        }
        return !1;
      }),
      (l.updateValue_ = function (u, c) {
        var d = this.data_.get(u);
        if (((c = d.prepareNewValue_(c)), c !== T.UNCHANGED)) {
          var h = yi(),
            _ = jt(this),
            x =
              _ || h
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Vt,
                    object: this,
                    oldValue: d.value_,
                    name: u,
                    newValue: c,
                  }
                : null;
          d.setNewValue_(c), _ && Ct(this, x);
        }
      }),
      (l.addValue_ = function (u, c) {
        var d = this;
        this.keysAtom_,
          en(function () {
            var E,
              P = new Vn(c, d.enhancer_, "ObservableMap.key", !1);
            d.data_.set(u, P),
              (c = P.value_),
              (E = d.hasMap_.get(u)) == null || E.setNewValue_(!0),
              d.keysAtom_.reportChanged();
          });
        var h = yi(),
          _ = jt(this),
          x =
            _ || h
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Pn,
                  object: this,
                  name: u,
                  newValue: c,
                }
              : null;
        _ && Ct(this, x);
      }),
      (l.get = function (u) {
        return this.has(u)
          ? this.dehanceValue_(this.data_.get(u).get())
          : this.dehanceValue_(void 0);
      }),
      (l.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (l.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (l.values = function () {
        var u = this,
          c = this.keys();
        return Xf({
          next: function () {
            var h = c.next(),
              _ = h.done,
              x = h.value;
            return { done: _, value: _ ? void 0 : u.get(x) };
          },
        });
      }),
      (l.entries = function () {
        var u = this,
          c = this.keys();
        return Xf({
          next: function () {
            var h = c.next(),
              _ = h.done,
              x = h.value;
            return { done: _, value: _ ? void 0 : [x, u.get(x)] };
          },
        });
      }),
      (l[Symbol.iterator] = function () {
        return this.entries();
      }),
      (l.forEach = function (u, c) {
        for (var d = Er(this), h; !(h = d()).done; ) {
          var _ = h.value,
            x = _[0],
            E = _[1];
          u.call(c, E, x, this);
        }
      }),
      (l.merge = function (u) {
        var c = this;
        return (
          qn(u) && (u = new Map(u)),
          en(function () {
            rn(u)
              ? pv(u).forEach(function (d) {
                  return c.set(d, u[d]);
                })
              : Array.isArray(u)
              ? u.forEach(function (d) {
                  var h = d[0],
                    _ = d[1];
                  return c.set(h, _);
                })
              : Nr(u)
              ? (dv(u) || te(19, u),
                u.forEach(function (d, h) {
                  return c.set(h, d);
                }))
              : u != null && te(20, u);
          }),
          this
        );
      }),
      (l.clear = function () {
        var u = this;
        en(function () {
          Rd(function () {
            for (var c = Er(u.keys()), d; !(d = c()).done; ) {
              var h = d.value;
              u.delete(h);
            }
          });
        });
      }),
      (l.replace = function (u) {
        var c = this;
        return (
          en(function () {
            for (
              var d = Gm(u), h = new Map(), _ = !1, x = Er(c.data_.keys()), E;
              !(E = x()).done;

            ) {
              var P = E.value;
              if (!d.has(P)) {
                var M = c.delete(P);
                if (M) _ = !0;
                else {
                  var D = c.data_.get(P);
                  h.set(P, D);
                }
              }
            }
            for (var J = Er(d.entries()), se; !(se = J()).done; ) {
              var U = se.value,
                G = U[0],
                Ie = U[1],
                He = c.data_.has(G);
              if ((c.set(G, Ie), c.data_.has(G))) {
                var Te = c.data_.get(G);
                h.set(G, Te), He || (_ = !0);
              }
            }
            if (!_)
              if (c.data_.size !== h.size) c.keysAtom_.reportChanged();
              else
                for (
                  var le = c.data_.keys(),
                    Ee = h.keys(),
                    ye = le.next(),
                    Me = Ee.next();
                  !ye.done;

                ) {
                  if (ye.value !== Me.value) {
                    c.keysAtom_.reportChanged();
                    break;
                  }
                  (ye = le.next()), (Me = Ee.next());
                }
            c.data_ = h;
          }),
          this
        );
      }),
      (l.toString = function () {
        return "[object ObservableMap]";
      }),
      (l.toJSON = function () {
        return Array.from(this);
      }),
      (l.observe_ = function (u, c) {
        return ji(this, u);
      }),
      (l.intercept_ = function (u) {
        return Pi(this, u);
      }),
      Rr(i, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  qn = Gn("ObservableMap", Xd);
function Xf(i) {
  return (i[Symbol.toStringTag] = "MapIterator"), Iu(i);
}
function Gm(i) {
  if (Nr(i) || qn(i)) return i;
  if (Array.isArray(i)) return new Map(i);
  if (rn(i)) {
    var l = new Map();
    for (var s in i) l.set(s, i[s]);
    return l;
  } else return te(21, i);
}
var Xm = {},
  qd = (function () {
    function i(s, u, c) {
      var d = this;
      u === void 0 && (u = Kn),
        c === void 0 && (c = "ObservableSet"),
        (this.name_ = void 0),
        (this[K] = Xm),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = c),
        Nt(Set) || te(22),
        (this.enhancer_ = function (h, _) {
          return u(h, _, c);
        }),
        Cn(function () {
          (d.atom_ = Sd(d.name_)), s && d.replace(s);
        });
    }
    var l = i.prototype;
    return (
      (l.dehanceValue_ = function (u) {
        return this.dehancer !== void 0 ? this.dehancer(u) : u;
      }),
      (l.clear = function () {
        var u = this;
        en(function () {
          Rd(function () {
            for (var c = Er(u.data_.values()), d; !(d = c()).done; ) {
              var h = d.value;
              u.delete(h);
            }
          });
        });
      }),
      (l.forEach = function (u, c) {
        for (var d = Er(this), h; !(h = d()).done; ) {
          var _ = h.value;
          u.call(c, _, _, this);
        }
      }),
      (l.add = function (u) {
        var c = this;
        if ((this.atom_, vt(this))) {
          var d = mt(this, { type: Pn, object: this, newValue: u });
          if (!d) return this;
        }
        if (!this.has(u)) {
          en(function () {
            c.data_.add(c.enhancer_(u, void 0)), c.atom_.reportChanged();
          });
          var h = !1,
            _ = jt(this),
            x =
              _ || h
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Pn,
                    object: this,
                    newValue: u,
                  }
                : null;
          _ && Ct(this, x);
        }
        return this;
      }),
      (l.delete = function (u) {
        var c = this;
        if (vt(this)) {
          var d = mt(this, { type: Jo, object: this, oldValue: u });
          if (!d) return !1;
        }
        if (this.has(u)) {
          var h = !1,
            _ = jt(this),
            x =
              _ || h
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Jo,
                    object: this,
                    oldValue: u,
                  }
                : null;
          return (
            en(function () {
              c.atom_.reportChanged(), c.data_.delete(u);
            }),
            _ && Ct(this, x),
            !0
          );
        }
        return !1;
      }),
      (l.has = function (u) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(u))
        );
      }),
      (l.entries = function () {
        var u = 0,
          c = Array.from(this.keys()),
          d = Array.from(this.values());
        return qf({
          next: function () {
            var _ = u;
            return (
              (u += 1),
              _ < d.length
                ? { value: [c[_], d[_]], done: !1 }
                : { value: void 0, done: !0 }
            );
          },
        });
      }),
      (l.keys = function () {
        return this.values();
      }),
      (l.values = function () {
        this.atom_.reportObserved();
        var u = this,
          c = 0,
          d = Array.from(this.data_.values());
        return qf({
          next: function () {
            return c < d.length
              ? { value: u.dehanceValue_(d[c++]), done: !1 }
              : { value: void 0, done: !0 };
          },
        });
      }),
      (l.intersection = function (u) {
        if (Jt(u) && !Ft(u)) return u.intersection(this);
        var c = new Set(this);
        return c.intersection(u);
      }),
      (l.union = function (u) {
        if (Jt(u) && !Ft(u)) return u.union(this);
        var c = new Set(this);
        return c.union(u);
      }),
      (l.difference = function (u) {
        return new Set(this).difference(u);
      }),
      (l.symmetricDifference = function (u) {
        if (Jt(u) && !Ft(u)) return u.symmetricDifference(this);
        var c = new Set(this);
        return c.symmetricDifference(u);
      }),
      (l.isSubsetOf = function (u) {
        return new Set(this).isSubsetOf(u);
      }),
      (l.isSupersetOf = function (u) {
        return new Set(this).isSupersetOf(u);
      }),
      (l.isDisjointFrom = function (u) {
        if (Jt(u) && !Ft(u)) return u.isDisjointFrom(this);
        var c = new Set(this);
        return c.isDisjointFrom(u);
      }),
      (l.replace = function (u) {
        var c = this;
        return (
          Ft(u) && (u = new Set(u)),
          en(function () {
            Array.isArray(u)
              ? (c.clear(),
                u.forEach(function (d) {
                  return c.add(d);
                }))
              : Jt(u)
              ? (c.clear(),
                u.forEach(function (d) {
                  return c.add(d);
                }))
              : u != null && te("Cannot initialize set from " + u);
          }),
          this
        );
      }),
      (l.observe_ = function (u, c) {
        return ji(this, u);
      }),
      (l.intercept_ = function (u) {
        return Pi(this, u);
      }),
      (l.toJSON = function () {
        return Array.from(this);
      }),
      (l.toString = function () {
        return "[object ObservableSet]";
      }),
      (l[Symbol.iterator] = function () {
        return this.values();
      }),
      Rr(i, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  Ft = Gn("ObservableSet", qd);
function qf(i) {
  return (i[Symbol.toStringTag] = "SetIterator"), Iu(i);
}
var Yf = Object.create(null),
  Zf = "remove",
  Yd = (function () {
    function i(s, u, c, d) {
      u === void 0 && (u = new Map()),
        d === void 0 && (d = Hv),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = s),
        (this.values_ = u),
        (this.name_ = c),
        (this.defaultAnnotation_ = d),
        (this.keysAtom_ = new jn("ObservableObject.keys")),
        (this.isPlainObject_ = rn(this.target_));
    }
    var l = i.prototype;
    return (
      (l.getObservablePropValue_ = function (u) {
        return this.values_.get(u).get();
      }),
      (l.setObservablePropValue_ = function (u, c) {
        var d = this.values_.get(u);
        if (d instanceof Rt) return d.set(c), !0;
        if (vt(this)) {
          var h = mt(this, {
            type: Vt,
            object: this.proxy_ || this.target_,
            name: u,
            newValue: c,
          });
          if (!h) return null;
          c = h.newValue;
        }
        if (((c = d.prepareNewValue_(c)), c !== T.UNCHANGED)) {
          var _ = jt(this),
            x = !1,
            E =
              _ || x
                ? {
                    type: Vt,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: d.value_,
                    name: u,
                    newValue: c,
                  }
                : null;
          d.setNewValue_(c), _ && Ct(this, E);
        }
        return !0;
      }),
      (l.get_ = function (u) {
        return (
          T.trackingDerivation && !tn(this.target_, u) && this.has_(u),
          this.target_[u]
        );
      }),
      (l.set_ = function (u, c, d) {
        return (
          d === void 0 && (d = !1),
          tn(this.target_, u)
            ? this.values_.has(u)
              ? this.setObservablePropValue_(u, c)
              : d
              ? Reflect.set(this.target_, u, c)
              : ((this.target_[u] = c), !0)
            : this.extend_(
                u,
                { value: c, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                d
              )
        );
      }),
      (l.has_ = function (u) {
        if (!T.trackingDerivation) return u in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var c = this.pendingKeys_.get(u);
        return (
          c ||
            ((c = new Vn(u in this.target_, ol, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(u, c)),
          c.get()
        );
      }),
      (l.make_ = function (u, c) {
        if ((c === !0 && (c = this.defaultAnnotation_), c !== !1)) {
          if (!(u in this.target_)) {
            var d;
            if ((d = this.target_[Bt]) != null && d[u]) return;
            te(1, c.annotationType_, this.name_ + "." + u.toString());
          }
          for (var h = this.target_; h && h !== rl; ) {
            var _ = Ko(h, u);
            if (_) {
              var x = c.make_(this, u, _, h);
              if (x === 0) return;
              if (x === 1) break;
            }
            h = Object.getPrototypeOf(h);
          }
          ed(this, c, u);
        }
      }),
      (l.extend_ = function (u, c, d, h) {
        if (
          (h === void 0 && (h = !1),
          d === !0 && (d = this.defaultAnnotation_),
          d === !1)
        )
          return this.defineProperty_(u, c, h);
        var _ = d.extend_(this, u, c, h);
        return _ && ed(this, d, u), _;
      }),
      (l.defineProperty_ = function (u, c, d) {
        d === void 0 && (d = !1), this.keysAtom_;
        try {
          gt();
          var h = this.delete_(u);
          if (!h) return h;
          if (vt(this)) {
            var _ = mt(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Pn,
              newValue: c.value,
            });
            if (!_) return null;
            var x = _.newValue;
            c.value !== x && (c = Hn({}, c, { value: x }));
          }
          if (d) {
            if (!Reflect.defineProperty(this.target_, u, c)) return !1;
          } else $t(this.target_, u, c);
          this.notifyPropertyAddition_(u, c.value);
        } finally {
          yt();
        }
        return !0;
      }),
      (l.defineObservableProperty_ = function (u, c, d, h) {
        h === void 0 && (h = !1), this.keysAtom_;
        try {
          gt();
          var _ = this.delete_(u);
          if (!_) return _;
          if (vt(this)) {
            var x = mt(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Pn,
              newValue: c,
            });
            if (!x) return null;
            c = x.newValue;
          }
          var E = Jf(u),
            P = {
              configurable: T.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: E.get,
              set: E.set,
            };
          if (h) {
            if (!Reflect.defineProperty(this.target_, u, P)) return !1;
          } else $t(this.target_, u, P);
          var M = new Vn(c, d, "ObservableObject.key", !1);
          this.values_.set(u, M), this.notifyPropertyAddition_(u, M.value_);
        } finally {
          yt();
        }
        return !0;
      }),
      (l.defineComputedProperty_ = function (u, c, d) {
        d === void 0 && (d = !1), this.keysAtom_;
        try {
          gt();
          var h = this.delete_(u);
          if (!h) return h;
          if (vt(this)) {
            var _ = mt(this, {
              object: this.proxy_ || this.target_,
              name: u,
              type: Pn,
              newValue: void 0,
            });
            if (!_) return null;
          }
          c.name || (c.name = "ObservableObject.key"),
            (c.context = this.proxy_ || this.target_);
          var x = Jf(u),
            E = {
              configurable: T.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: x.get,
              set: x.set,
            };
          if (d) {
            if (!Reflect.defineProperty(this.target_, u, E)) return !1;
          } else $t(this.target_, u, E);
          this.values_.set(u, new Rt(c)),
            this.notifyPropertyAddition_(u, void 0);
        } finally {
          yt();
        }
        return !0;
      }),
      (l.delete_ = function (u, c) {
        if ((c === void 0 && (c = !1), this.keysAtom_, !tn(this.target_, u)))
          return !0;
        if (vt(this)) {
          var d = mt(this, {
            object: this.proxy_ || this.target_,
            name: u,
            type: Zf,
          });
          if (!d) return null;
        }
        try {
          var h;
          gt();
          var _ = jt(this),
            x = !1,
            E = this.values_.get(u),
            P = void 0;
          if (!E && (_ || x)) {
            var M;
            P = (M = Ko(this.target_, u)) == null ? void 0 : M.value;
          }
          if (c) {
            if (!Reflect.deleteProperty(this.target_, u)) return !1;
          } else delete this.target_[u];
          if (
            (E &&
              (this.values_.delete(u),
              E instanceof Vn && (P = E.value_),
              Dd(E)),
            this.keysAtom_.reportChanged(),
            (h = this.pendingKeys_) == null ||
              (h = h.get(u)) == null ||
              h.set(u in this.target_),
            _ || x)
          ) {
            var D = {
              type: Zf,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: P,
              name: u,
            };
            _ && Ct(this, D);
          }
        } finally {
          yt();
        }
        return !0;
      }),
      (l.observe_ = function (u, c) {
        return ji(this, u);
      }),
      (l.intercept_ = function (u) {
        return Pi(this, u);
      }),
      (l.notifyPropertyAddition_ = function (u, c) {
        var d,
          h = jt(this),
          _ = !1;
        if (h || _) {
          var x =
            h || _
              ? {
                  type: Pn,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: u,
                  newValue: c,
                }
              : null;
          h && Ct(this, x);
        }
        (d = this.pendingKeys_) == null || (d = d.get(u)) == null || d.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (l.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), jr(this.target_);
      }),
      (l.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      i
    );
  })();
function Yn(i, l) {
  var s;
  if (tn(i, K)) return i;
  var u = (s = l == null ? void 0 : l.name) != null ? s : "ObservableObject",
    c = new Yd(i, new Map(), String(u), nm(l));
  return xi(i, K, c), i;
}
var qm = Gn("ObservableObjectAdministration", Yd);
function Jf(i) {
  return (
    Yf[i] ||
    (Yf[i] = {
      get: function () {
        return this[K].getObservablePropValue_(i);
      },
      set: function (s) {
        return this[K].setObservablePropValue_(i, s);
      },
    })
  );
}
function cl(i) {
  return il(i) ? qm(i[K]) : !1;
}
function ed(i, l, s) {
  var u;
  (u = i.target_[Bt]) == null || delete u[s];
}
var Ym = Jd(0),
  Zm = (function () {
    var i = !1,
      l = {};
    return (
      Object.defineProperty(l, "0", {
        set: function () {
          i = !0;
        },
      }),
      (Object.create(l)[0] = 1),
      i === !1
    );
  })(),
  fu = 0,
  Zd = function () {};
function Jm(i, l) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(i.prototype, l)
    : i.prototype.__proto__ !== void 0
    ? (i.prototype.__proto__ = l)
    : (i.prototype = l);
}
Jm(Zd, Array.prototype);
var zu = (function (i) {
  function l(u, c, d, h) {
    var _;
    return (
      d === void 0 && (d = "ObservableArray"),
      h === void 0 && (h = !1),
      (_ = i.call(this) || this),
      Cn(function () {
        var x = new Lu(d, c, h, !0);
        (x.proxy_ = _),
          md(_, K, x),
          u && u.length && _.spliceWithArray(0, 0, u),
          Zm && Object.defineProperty(_, "0", Ym);
      }),
      _
    );
  }
  _d(l, i);
  var s = l.prototype;
  return (
    (s.concat = function () {
      this[K].atom_.reportObserved();
      for (var c = arguments.length, d = new Array(c), h = 0; h < c; h++)
        d[h] = arguments[h];
      return Array.prototype.concat.apply(
        this.slice(),
        d.map(function (_) {
          return al(_) ? _.slice() : _;
        })
      );
    }),
    (s[Symbol.iterator] = function () {
      var u = this,
        c = 0;
      return Iu({
        next: function () {
          return c < u.length
            ? { value: u[c++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    Rr(l, [
      {
        key: "length",
        get: function () {
          return this[K].getArrayLength_();
        },
        set: function (c) {
          this[K].setArrayLength_(c);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(Zd);
Object.entries(Zo).forEach(function (i) {
  var l = i[0],
    s = i[1];
  l !== "concat" && xi(zu.prototype, l, s);
});
function Jd(i) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[K].get_(i);
    },
    set: function (s) {
      this[K].set_(i, s);
    },
  };
}
function eg(i) {
  $t(zu.prototype, "" + i, Jd(i));
}
function ep(i) {
  if (i > fu) {
    for (var l = fu; l < i + 100; l++) eg(l);
    fu = i;
  }
}
ep(1e3);
function tg(i, l, s) {
  return new zu(i, l, s);
}
function el(i, l) {
  if (typeof i == "object" && i !== null) {
    if (al(i)) return l !== void 0 && te(23), i[K].atom_;
    if (Ft(i)) return i.atom_;
    if (qn(i)) {
      if (l === void 0) return i.keysAtom_;
      var s = i.data_.get(l) || i.hasMap_.get(l);
      return s || te(25, l, Pu(i)), s;
    }
    if (cl(i)) {
      if (!l) return te(26);
      var u = i[K].values_.get(l);
      return u || te(27, l, Pu(i)), u;
    }
    if (Nu(i) || ul(i) || Yo(i)) return i;
  } else if (Nt(i) && Yo(i[K])) return i[K];
  te(28);
}
function ng(i, l) {
  if ((i || te(29), Nu(i) || ul(i) || Yo(i) || qn(i) || Ft(i))) return i;
  if (i[K]) return i[K];
  te(24, i);
}
function Pu(i, l) {
  var s;
  if (l !== void 0) s = el(i, l);
  else {
    if (Si(i)) return i.name;
    cl(i) || qn(i) || Ft(i) ? (s = ng(i)) : (s = el(i));
  }
  return s.name_;
}
function Cn(i) {
  var l = Xn(),
    s = Au(!0);
  gt();
  try {
    return i();
  } finally {
    yt(), Tu(s), nn(l);
  }
}
var td = rl.toString;
function Du(i, l, s) {
  return s === void 0 && (s = -1), ju(i, l, s);
}
function ju(i, l, s, u, c) {
  if (i === l) return i !== 0 || 1 / i === 1 / l;
  if (i == null || l == null) return !1;
  if (i !== i) return l !== l;
  var d = typeof i;
  if (d !== "function" && d !== "object" && typeof l != "object") return !1;
  var h = td.call(i);
  if (h !== td.call(l)) return !1;
  switch (h) {
    case "[object RegExp]":
    case "[object String]":
      return "" + i == "" + l;
    case "[object Number]":
      return +i != +i ? +l != +l : +i == 0 ? 1 / +i === 1 / l : +i == +l;
    case "[object Date]":
    case "[object Boolean]":
      return +i == +l;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(i) === Symbol.valueOf.call(l)
      );
    case "[object Map]":
    case "[object Set]":
      s >= 0 && s++;
      break;
  }
  (i = nd(i)), (l = nd(l));
  var _ = h === "[object Array]";
  if (!_) {
    if (typeof i != "object" || typeof l != "object") return !1;
    var x = i.constructor,
      E = l.constructor;
    if (
      x !== E &&
      !(Nt(x) && x instanceof x && Nt(E) && E instanceof E) &&
      "constructor" in i &&
      "constructor" in l
    )
      return !1;
  }
  if (s === 0) return !1;
  s < 0 && (s = -1), (u = u || []), (c = c || []);
  for (var P = u.length; P--; ) if (u[P] === i) return c[P] === l;
  if ((u.push(i), c.push(l), _)) {
    if (((P = i.length), P !== l.length)) return !1;
    for (; P--; ) if (!ju(i[P], l[P], s - 1, u, c)) return !1;
  } else {
    var M = Object.keys(i),
      D;
    if (((P = M.length), Object.keys(l).length !== P)) return !1;
    for (; P--; )
      if (((D = M[P]), !(tn(l, D) && ju(i[D], l[D], s - 1, u, c)))) return !1;
  }
  return u.pop(), c.pop(), !0;
}
function nd(i) {
  return al(i)
    ? i.slice()
    : Nr(i) || qn(i) || Jt(i) || Ft(i)
    ? Array.from(i.entries())
    : i;
}
var rd,
  rg = ((rd = nl().Iterator) == null ? void 0 : rd.prototype) || {};
function Iu(i) {
  return (i[Symbol.iterator] = ig), Object.assign(Object.create(rg), i);
}
function ig() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (i) {
  var l = nl();
  typeof l[i] > "u" &&
    te("MobX requires global '" + i + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Sm,
    extras: { getDebugName: Pu },
    $mobx: K,
  });
if (!q.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Um)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available"
  );
var og = cd();
function lg(i) {
  i();
}
function sg(i) {
  i || (i = lg), Lm({ reactionScheduler: i });
}
function ug(i) {
  return zm(i);
}
var ag = 1e4,
  cg = 1e4,
  fg = (function () {
    function i(l) {
      var s = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (u) {
            u === void 0 && (u = ag),
              clearTimeout(s.sweepTimeout),
              (s.sweepTimeout = void 0);
            var c = Date.now();
            s.registrations.forEach(function (d, h) {
              c - d.registeredAt >= u &&
                (s.finalize(d.value), s.registrations.delete(h));
            }),
              s.registrations.size > 0 && s.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            s.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(i.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (l, s, u) {
          this.registrations.set(u, { value: s, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(i.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (l) {
          this.registrations.delete(l);
        },
      }),
      Object.defineProperty(i.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, cg));
        },
      }),
      i
    );
  })(),
  dg = typeof FinalizationRegistry < "u" ? FinalizationRegistry : fg,
  Cu = new dg(function (i) {
    var l;
    (l = i.reaction) === null || l === void 0 || l.dispose(),
      (i.reaction = null);
  }),
  du = { exports: {} },
  pu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function pg() {
  if (id) return pu;
  id = 1;
  var i = tl();
  function l(M, D) {
    return (M === D && (M !== 0 || 1 / M === 1 / D)) || (M !== M && D !== D);
  }
  var s = typeof Object.is == "function" ? Object.is : l,
    u = i.useState,
    c = i.useEffect,
    d = i.useLayoutEffect,
    h = i.useDebugValue;
  function _(M, D) {
    var J = D(),
      se = u({ inst: { value: J, getSnapshot: D } }),
      U = se[0].inst,
      G = se[1];
    return (
      d(
        function () {
          (U.value = J), (U.getSnapshot = D), x(U) && G({ inst: U });
        },
        [M, J, D]
      ),
      c(
        function () {
          return (
            x(U) && G({ inst: U }),
            M(function () {
              x(U) && G({ inst: U });
            })
          );
        },
        [M]
      ),
      h(J),
      J
    );
  }
  function x(M) {
    var D = M.getSnapshot;
    M = M.value;
    try {
      var J = D();
      return !s(M, J);
    } catch {
      return !0;
    }
  }
  function E(M, D) {
    return D();
  }
  var P =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? E
      : _;
  return (
    (pu.useSyncExternalStore =
      i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : P),
    pu
  );
}
var od;
function hg() {
  return od || ((od = 1), (du.exports = pg())), du.exports;
}
var vg = hg();
function ld(i) {
  i.reaction = new on("observer".concat(i.name), function () {
    var l;
    (i.stateVersion = Symbol()),
      (l = i.onStoreChange) === null || l === void 0 || l.call(i);
  });
}
function mg(i, l) {
  l === void 0 && (l = "observed");
  var s = Uf.useRef(null);
  if (!s.current) {
    var u = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: l,
      subscribe: function (_) {
        return (
          Cu.unregister(u),
          (u.onStoreChange = _),
          u.reaction || (ld(u), (u.stateVersion = Symbol())),
          function () {
            var x;
            (u.onStoreChange = null),
              (x = u.reaction) === null || x === void 0 || x.dispose(),
              (u.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return u.stateVersion;
      },
    };
    s.current = u;
  }
  var c = s.current;
  c.reaction || (ld(c), Cu.register(s, c, c)),
    Uf.useDebugValue(c.reaction, ug),
    vg.useSyncExternalStore(c.subscribe, c.getSnapshot, c.getSnapshot);
  var d, h;
  if (
    (c.reaction.track(function () {
      try {
        d = i();
      } catch (_) {
        h = _;
      }
    }),
    h)
  )
    throw h;
  return d;
}
var hu,
  vu,
  tp = typeof Symbol == "function" && Symbol.for,
  gg =
    (vu =
      (hu = Object.getOwnPropertyDescriptor(function () {}, "name")) === null ||
      hu === void 0
        ? void 0
        : hu.configurable) !== null && vu !== void 0
      ? vu
      : !1,
  sd = tp
    ? Symbol.for("react.forward_ref")
    : typeof q.forwardRef == "function" &&
      q.forwardRef(function (i) {
        return null;
      }).$$typeof,
  ud = tp
    ? Symbol.for("react.memo")
    : typeof q.memo == "function" &&
      q.memo(function (i) {
        return null;
      }).$$typeof;
function yg(i, l) {
  var s;
  if (ud && i.$$typeof === ud)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
    );
  var u = (s = void 0) !== null && s !== void 0 ? s : !1,
    c = i,
    d = i.displayName || i.name;
  if (
    sd &&
    i.$$typeof === sd &&
    ((u = !0), (c = i.render), typeof c != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function"
    );
  var h = function (_, x) {
    return mg(function () {
      return c(_, x);
    }, d);
  };
  return (
    (h.displayName = i.displayName),
    gg &&
      Object.defineProperty(h, "name", {
        value: i.name,
        writable: !0,
        configurable: !0,
      }),
    i.contextTypes && (h.contextTypes = i.contextTypes),
    u && (h = q.forwardRef(h)),
    (h = q.memo(h)),
    Sg(i, h),
    h
  );
}
var _g = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Sg(i, l) {
  Object.keys(i).forEach(function (s) {
    _g[s] || Object.defineProperty(l, s, Object.getOwnPropertyDescriptor(i, s));
  });
}
var mu;
sg(og.unstable_batchedUpdates);
mu = Cu.finalizeAllImmediately;
class wg {
  constructor() {
    We(this, "pos", 0);
    We(this, "sceneW", 0);
    We(this, "percent", 0);
    We(this, "percentOld", 0);
    We(this, "fredMove", !1);
    We(this, "fredMoveTO", null);
    We(this, "fredMoveInt", null);
    We(this, "rockeyMoveInt", null);
    We(this, "fredMoveCounter", 1);
    We(this, "rocketMoveCounter", 1);
    We(this, "sceneWRaw", 0);
    We(this, "screenPercentOfScene", 0);
    We(this, "POS", 0);
    Qd(this);
  }
  setScrollPosition(l) {
    (this.pos = l),
      (this.percent = (l / this.sceneW) * 100),
      (this.POS =
        this.percent - this.screenPercentOfScene * (this.percent / 100));
  }
  changeScrollPosition(l) {
    this.setScrollPosition(Math.min(Math.max(this.pos + l, 0), this.sceneW));
  }
  setSceneW(l) {
    this.sceneW = l;
  }
  setSceneWRaw(l) {
    this.sceneWRaw = l;
  }
  setPercentOld(l) {
    this.percentOld = l;
  }
  setScreenPercentOfScene(l) {
    this.screenPercentOfScene = l;
  }
}
const v = new wg(),
  xg = () =>
    y.jsxs("div", {
      className: "LoadImages free_img",
      children: [
        y.jsx("img", { src: "/img/acorn/1.png" }),
        y.jsx("img", { src: "/img/acorn/2.png" }),
        y.jsx("img", { src: "/img/acorn/3.png" }),
        y.jsx("img", { src: "/img/acorn/4.png" }),
        y.jsx("img", { src: "/img/rocket0.png" }),
        y.jsx("img", { src: "/img/rocket1.png" }),
        y.jsx("img", { src: "/img/rocket2.png" }),
        y.jsx("img", { src: "/img/rocket3.png" }),
      ],
    }),
  kg = () => {
    const [i, l] = q.useState(!0),
      [s, u] = q.useState();
    return (
      q.useEffect(() => {
        v.fredMoveTO
          ? (clearTimeout(v.fredMoveTO), (v.fredMoveTO = null))
          : (v.fredMove = !0),
          (v.fredMoveTO = setTimeout(() => {
            (v.fredMove = !1), (v.fredMoveTO = null);
          }, 300)),
          v.percent > v.percentOld ? l(!0) : l(!1),
          (v.percentOld = v.percent);
      }, [v.percent]),
      q.useEffect(() => {
        v.fredMove
          ? v.fredMoveInt ||
            ((v.fredMoveCounter = 1),
            (v.fredMoveInt = setInterval(() => {
              (v.fredMoveCounter = v.fredMoveCounter + 1),
                u((v.fredMoveCounter % 7) + 1);
            }, 150)))
          : (u(0), clearInterval(v.fredMoveInt), (v.fredMoveInt = null));
      }, [v.fredMove]),
      y.jsx(y.Fragment, {
        children: Array.from({ length: 8 }, (c, d) =>
          y.jsx(
            "div",
            {
              className: "Fred free_img",
              children: y.jsx("img", {
                src: `/img/fred/fred_anim${d}.svg`,
                alt: "",
                style: {
                  transform: `scaleX(${i ? 1 : -1})`,
                  opacity: s === d ? 1 : 0,
                },
              }),
            },
            d
          )
        ),
      })
    );
  },
  Og = () => {
    const [i, l] = q.useState(0);
    q.useEffect(
      () => (
        s(),
        window.addEventListener("resize", s),
        () => {
          window.removeEventListener("resize", s);
        }
      ),
      []
    );
    const s = () => {
      l(+document.documentElement.clientWidth);
    };
    return y.jsx("div", {
      className: "Sky free_img",
      children: y.jsx("img", {
        src: `/img/${i > 800 ? "skyPc" : "sky"}.webp`,
        style: { transform: `rotate(${360 * (v.percent / 100)}deg)` },
        alt: "",
      }),
    });
  };
class Eg {
  constructor() {
    We(this, "play", 0);
    Qd(this);
  }
  piu() {
    this.play = Math.random();
  }
}
const ce = new Eg(),
  Pg = () => {
    const [i, l] = q.useState([]),
      s = () => {
        const c = Math.random().toString(36).substr(2, 9),
          d = Math.random() * 360,
          h = 3,
          _ = 0.5;
        l((E) => [
          ...E,
          { id: c, direction: d, opacity: 1, x: 0, y: 0, velocityY: 0 },
        ]);
        const x = setInterval(() => {
          l((E) =>
            E.map((P) => {
              if (P.id === c) {
                const M = (P.direction * Math.PI) / 180;
                return {
                  ...P,
                  x: P.x + Math.cos(M) * h,
                  y: P.y + P.velocityY,
                  velocityY: P.velocityY + _,
                  opacity: P.opacity - 0.02,
                };
              }
              return P;
            })
          );
        }, 50);
        setTimeout(() => {
          clearInterval(x), l((E) => E.filter((P) => P.id !== c));
        }, 2e3);
      };
    let u;
    return (
      q.useEffect(
        () => (
          s(),
          (u = setInterval(() => {
            s();
          }, 4e3)),
          () => {
            clearInterval(u);
          }
        ),
        []
      ),
      y.jsxs("div", {
        className: "Sq free_img",
        children: [
          y.jsx("img", {
            src: "/img/sq.svg",
            className: "Sq_sq",
            alt: "",
            style: {
              transform: `translate(${
                -v.pos + v.sceneWRaw * 0.0195
              }px,21.6dvh)`,
              transition: "transform 200ms ease-out",
              height: "11.5vh",
            },
            onClick: () => {
              ce.piu(), s();
            },
          }),
          y.jsx("div", {
            className: "Sq_coins free_img",
            style: {
              transform: `translate(${-v.pos + v.sceneWRaw * 0.018}px,22dvh)`,
            },
            children: i.map((c) =>
              y.jsx(
                "div",
                {
                  className: "Sq_coin free_img",
                  style: {
                    transition: "all 50ms ease-out",
                    transform: `translate(${c.x}px, ${c.y}px)`,
                    opacity: c.opacity,
                    pointerEvents: "none",
                  },
                  children: y.jsx("img", { src: "/img/coin.png", alt: "" }),
                },
                c.id
              )
            ),
          }),
        ],
      })
    );
  },
  jg = () => {
    const [i, l] = q.useState(0),
      [s, u] = q.useState(!1);
    return y.jsx("div", {
      className: "Acorn free_img",
      children: y.jsx("img", {
        src: `/img/acorn${i + 1}.png`,
        alt: "",
        onClick: () => {
          u(!s),
            ce.piu(),
            setTimeout(() => {
              l((c) => (c + 1) % 4);
            }, 200);
        },
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.015}px 80dvh`,
          transition:
            "translate 200ms ease-out, rotate 400ms cubic-bezier(.51,-0.48,.5,1.42)",
          height: "11.5dvh",
          rotate: `${s ? 720 : 0}deg`,
        },
      }),
    });
  },
  Cg = () =>
    y.jsxs("div", {
      className: "Trends free_img",
      children: [
        y.jsx("div", {
          className: "Trends_bull free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.07}px 68.6dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bull.png",
            alt: "",
            style: { cursor: "pointer", height: "26.5dvh" },
            onClick: () => {
              ce.piu();
            },
          }),
        }),
        y.jsx("div", {
          className: "Trends_bear free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.042}px 68.6dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bear.png",
            alt: "",
            style: {
              cursor: "pointer",
              height: "26.5dvh",
              transform: "scaleX(-1)",
            },
            onClick: () => {
              ce.piu();
            },
          }),
        }),
      ],
    }),
  Ng = () =>
    y.jsxs("div", {
      className: "Cave free_img",
      children: [
        y.jsx("div", {
          className: "Cave_cave free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.098}px 70dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/cave.png",
            alt: "",
            style: { height: "21dvh" },
          }),
        }),
        y.jsx("div", {
          className: "Cave_inner free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.098}px 70dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          onClick: () => {
            ce.piu();
          },
          children: y.jsx("img", {
            src: "/img/caveInner.png",
            alt: "",
            style: { height: "21dvh" },
          }),
        }),
      ],
    }),
  Rg = () =>
    y.jsxs("div", {
      className: "Rocks free_img",
      children: [
        y.jsx("div", {
          className: "Rocks_left free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.129}px 85dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/RocksLeft.png",
            alt: "",
            style: { height: "10dvh" },
            onClick: () => {
              ce.piu();
            },
          }),
        }),
        y.jsx("div", {
          className: "Rocks_right free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.129}px 85dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/RocksRight.png",
            alt: "",
            style: { height: "10dvh" },
            onClick: () => {
              ce.piu();
            },
          }),
        }),
      ],
    }),
  Ag = () =>
    y.jsx("div", {
      className: "Bridge free_img",
      children: y.jsx("div", {
        className: "Bridge_inner free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.123}px 55.8dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/bridge.png",
          alt: "",
          style: { height: "10dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Tg = () =>
    y.jsx("div", {
      className: "Flag free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.156}px 48dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/flag.png",
          alt: "",
          style: { height: "10dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Mg = () =>
    y.jsx("div", {
      className: "Book free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.17}px 88dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/book.png",
          alt: "",
          style: { height: "10dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Lg = () => {
    const [i, l] = q.useState(0);
    let s;
    return (
      q.useEffect(
        () => (
          (s = setInterval(() => {
            l((u) => (u + 1) % 3);
          }, 200)),
          () => {
            clearInterval(s);
          }
        ),
        []
      ),
      y.jsxs("div", {
        className: "Rocket free_img",
        children: [
          y.jsx("div", {
            className: "Rocket_station free_img",
            style: {
              translate: `${-v.pos + v.sceneWRaw * 0.226}px 64.5dvh`,
              transition: "translate 200ms ease-out, transform 500ms",
            },
            children: y.jsx("img", {
              src: "/img/rocketStation.png",
              alt: "",
              style: { height: "50dvh" },
            }),
          }),
          y.jsx("div", {
            className: "Rocket_rocket free_img",
            style: {
              translate: `${-v.pos + v.sceneWRaw * 0.226}px ${
                v.percent > 18 ? 60.5 - (v.percent * 5 - 90) : 60.5
              }dvh`,
              transition: "translate 200ms ease-out, transform 500ms",
            },
            children: y.jsx("img", {
              src: `/img/rocket${i + 1}.png`,
              alt: "",
              style: { cursor: "pointer", height: "50dvh" },
              onClick: () => {
                ce.piu();
              },
            }),
          }),
        ],
      })
    );
  },
  zg = () =>
    y.jsx("div", {
      className: "Chest free_img  ",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.255}px 78dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/chest.png",
          alt: "",
          style: { height: "14dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Dg = () =>
    y.jsx("div", {
      className: "Trace free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.275}px 92dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/trace.png",
          alt: "",
          style: { height: "11dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Ig = () => {
    const [i, l] = q.useState(!1);
    return y.jsxs("div", {
      className: "Cafe free_img",
      children: [
        y.jsx("div", {
          className: "free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.315}px 71.1dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/cafe.png",
            alt: "",
            style: { height: "30dvh" },
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            onClick: () => {
              ce.piu();
            },
          }),
        }),
        y.jsx("div", {
          className: "Cafe_text free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.315}px 47.1dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("div", {
            className: "Cafe_text_inner",
            style: { opacity: i ? 1 : 0 },
            children:
              "Mt. Gox, one of the first and largest crypto exchanges, went bankrupt in 2014 after losing about 850,000 bitcoins due to a hacking attack and management failures.",
          }),
        }),
      ],
    });
  },
  bg = () => {
    const [i, l] = q.useState(!1);
    return y.jsx("div", {
      className: "Hotel free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.327}px 52dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: `/img/${i ? "hodl" : "hotel"}.png`,
          alt: "",
          style: { height: "16dvh" },
          onMouseEnter: () => l(!0),
          onMouseLeave: () => l(!1),
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    });
  },
  Fg = () =>
    y.jsx("div", {
      className: "Grafiti free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.3525}px 80dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/grafiti.png",
          alt: "",
          style: { height: "12dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Bg = () => {
    const [i, l] = q.useState(!1);
    return y.jsxs("div", {
      className: "Pizza free_img",
      children: [
        y.jsx("div", {
          className: "free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.385}px 85.1dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/pizza.png",
            alt: "",
            style: { height: "20dvh" },
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            onClick: () => {
              ce.piu();
            },
          }),
        }),
        y.jsx("div", {
          className: "Pizza_text free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.385}px 57.1dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("div", {
            className: "Pizza_text_inner",
            style: { opacity: i ? 1 : 0 },
            children:
              "The first Bitcoin purchase was in 2010 when 10,000 BTC were used to buy two pizzas.",
          }),
        }),
      ],
    });
  },
  $g = () =>
    y.jsx("div", {
      className: "Clock free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.3501}px 34dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/clock.png",
          alt: "",
          style: { height: "12dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Ug = () =>
    y.jsx("div", {
      className: "SatoshiShadow free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.441}px 78dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/satoshiShadow.png",
          alt: "",
          style: { height: "20dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Vg = () => {
    const [i, l] = q.useState(0),
      s = () => {
        ce.piu();
        const u = Math.random() * 30 - 15;
        l(u), setTimeout(() => l(0), 100);
      };
    return y.jsx("div", {
      className: "Nest free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.468}px 32dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/nest.png",
          alt: "",
          style: {
            height: "15dvh",
            transform: `rotate(${i}deg)`,
            transition: "",
          },
          onClick: s,
        }),
      }),
    });
  },
  Wg = () => {
    const [i, l] = q.useState(0),
      s = () => {
        ce.piu();
        const u = Math.random() * 30 - 15;
        l(u), setTimeout(() => l(0), 100);
      };
    return y.jsxs("div", {
      className: "Mine free_img",
      children: [
        y.jsx("div", {
          className: "Mine_mine free_img",
          style: { translate: `${-v.pos + v.sceneWRaw * 0.5077}px 77.3dvh` },
          children: y.jsx("img", {
            src: "/img/mine.png",
            alt: "",
            style: { height: "35dvh", transition: "" },
            onClick: s,
          }),
        }),
        y.jsx("div", {
          className: "Mine_asics free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.5077}px 77.3dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
            pointerEvents: "none",
          },
          children: y.jsx("img", {
            src: "/img/asics.png",
            alt: "",
            style: { height: "35dvh", transform: `rotate(${i}deg)` },
          }),
        }),
      ],
    });
  },
  Hg = () =>
    y.jsx("div", {
      className: "MountTrace free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.635}px 67dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/mountTrace.png",
          alt: "",
          style: { height: "11dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Kg = () =>
    y.jsx("div", {
      className: "Flower free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.77}px 83dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: `/img/flower${
            v.percent > 75
              ? v.percent < 81
                ? Math.floor((v.percent - 74) % 7)
                : 6
              : 1
          }.png`,
          alt: "",
          style: { height: "16dvh", cursor: "pointer" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Qg = () => {
    const i = ["caw", "CAW", "CAAW!!!", "HODL"],
      [l, s] = q.useState("caw"),
      [u, c] = q.useState(!1),
      [d, h] = q.useState(0),
      _ = () => {
        ce.piu(),
          h(20 - Math.random() * 40),
          c(!0),
          s(i[Math.floor(Math.random() * i.length)]),
          setTimeout(() => {
            c(!1);
          }, 100);
      };
    return y.jsxs("div", {
      className: "Bird free_img",
      children: [
        y.jsx("div", {
          className: "free_img",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.7425}px 24dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: `/img/bird${
              v.percent > 72
                ? v.percent < 75
                  ? Math.floor((v.percent - 71) % 4)
                  : 3
                : 1
            }.png`,
            alt: "",
            style: { height: "16dvh" },
            onClick: _,
          }),
        }),
        y.jsx("div", {
          className: `free_img Bird_text ${u && "Bird_text_show"}`,
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.735}px 20dvh`,
            transition:
              "translate 200ms ease-out, transform 500ms, opacity 500ms",
            rotate: `${d}deg`,
          },
          children: l,
        }),
      ],
    });
  },
  Gg = () =>
    y.jsx("div", {
      className: "Bees free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos * 0.8 + v.sceneWRaw * 0.6}px 80dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/bee.png",
          alt: "",
          style: {
            height: "10dvh",
            transform: "scaleX(-1)",
            cursor: "pointer",
          },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  Xg = () =>
    y.jsx("div", {
      className: "Whale free_img",
      children: y.jsx("div", {
        className: "free_img",
        style: {
          translate: `${-v.pos + v.sceneWRaw * 0.847}px 67dvh`,
          transition: "translate 200ms ease-out, transform 500ms",
        },
        children: y.jsx("img", {
          src: "/img/whale.png",
          alt: "",
          style: { height: "20dvh" },
          onClick: () => {
            ce.piu();
          },
        }),
      }),
    }),
  qg = () => {
    const [i, l] = q.useState([]),
      s = () => {
        ce.piu();
        const u = Math.random().toString(36).substr(2, 9),
          c = Math.random() * 360,
          d = 3,
          h = 0.5;
        l((x) => [
          ...x,
          { id: u, direction: c, opacity: 1, x: 0, y: 0, velocityY: 0 },
        ]);
        const _ = setInterval(() => {
          l((x) =>
            x.map((E) => {
              if (E.id === u) {
                const P = (E.direction * Math.PI) / 180;
                return {
                  ...E,
                  x: E.x + Math.cos(P) * d,
                  y: E.y + E.velocityY,
                  velocityY: E.velocityY + h,
                  opacity: E.opacity - 0.02,
                };
              }
              return E;
            })
          );
        }, 50);
        setTimeout(() => {
          clearInterval(_), l((x) => x.filter((E) => E.id !== u));
        }, 2e3);
      };
    return y.jsxs("div", {
      className: "Trash free_img",
      children: [
        y.jsx("img", {
          src: "/img/trash.png",
          className: "Trash_trash",
          alt: "",
          style: {
            transform: `translate(${-v.pos + v.sceneWRaw * 0.88}px,84dvh)`,
            transition: "transform 200ms ease-out",
            height: "11.5dvh",
          },
          onClick: s,
        }),
        y.jsx("div", {
          className: "Trash_coins free_img",
          style: {
            transform: `translate(${-v.pos + v.sceneWRaw * 0.875}px,84dvh)`,
            transition: "transform 200ms ease-out",
          },
          children: i.map((u) =>
            y.jsx(
              "div",
              {
                className: "Trash_coin free_img",
                style: {
                  transition: "all 50ms ease-out",
                  transform: `translate(${u.x}px, ${u.y}px)`,
                  opacity: u.opacity,
                  pointerEvents: "none",
                },
                children: y.jsx("img", { src: "/img/trashGold.png", alt: "" }),
              },
              u.id
            )
          ),
        }),
      ],
    });
  },
  Yg = () =>
    y.jsxs("div", {
      className: "Tables free_img",
      children: [
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.543}px 62dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/coininn.png",
            alt: "",
            style: { height: "16dvh", transform: "rotate(-2deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.558}px 63dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bitget.png",
            alt: "",
            style: { height: "16dvh", transform: "rotate(12deg)" },
          }),
        }),
        y.jsx("a", {
      
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.572}px 68dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bitmart.png",
            alt: "",
            style: { height: "15dvh", transform: "rotate(-6deg)" },
          }),
        }),
        y.jsx("a", {
       
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.576}px 71dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/kcex.png",
            alt: "",
            style: { height: "13dvh", transform: "rotate(-1deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.58}px 71dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/mexc.png",
            alt: "",
            style: { height: "15dvh", transform: "rotate(3deg)" },
          }),
        }),
        y.jsx("a", {
         
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.586}px 73dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/xt.png",
            alt: "",
            style: { height: "14dvh", transform: "rotate(10deg)" },
          }),
        }),
        y.jsx("a", {
      
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.592}px 76dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/lbank.png",
            alt: "",
            style: { height: "13dvh", transform: "rotate(14deg)" },
          }),
        }),
        y.jsx("a", {
       
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.55}px 62dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/ourbit.png",
            alt: "",
            style: { height: "18dvh", transform: "rotate(6deg)" },
          }),
        }),
        y.jsx("a", {
     
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.53}px 65dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/changeNow.png",
            alt: "",
            style: { height: "14dvh", transform: "rotate(-15deg)" },
          }),
        }),
        y.jsx("a", {
         
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.535}px 63dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/phemex.png",
            alt: "",
            style: { height: "16dvh", transform: "rotate(3deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.53}px 81dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/cryptocom.png",
            alt: "",
            style: { height: "25dvh", transform: "rotate(-10deg)" },
          }),
        }),
        y.jsx("a", {
         
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.535}px 81dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/okx.png",
            alt: "",
            style: { height: "23dvh", transform: "rotate(3deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.55}px 81dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/gateIo.png",
            alt: "",
            style: { height: "23dvh", transform: "rotate(-3deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.6}px 81dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bnb.png",
            alt: "",
            style: { height: "23dvh", transform: "rotate(2deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.6}px 81dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bnb.png",
            alt: "",
            style: { height: "23dvh", transform: "rotate(2deg)" },
          }),
        }),
        y.jsx("a", {
   
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.605}px 85dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/superEx.png",
            alt: "",
            style: { height: "14dvh", transform: "rotate(10deg)" },
          }),
        }),
        y.jsx("a", {
        
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.611}px 85dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bitrue.png",
            alt: "",
            style: { height: "15dvh", transform: "rotate(-1deg)" },
          }),
        }),
        y.jsx("a", {
         
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.616}px 85dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/coinW.png",
            alt: "",
            style: { height: "12dvh", transform: "rotate(6deg)" },
          }),
        }),
        y.jsx("a", {
         
          target: "_blank",
          className: "free_img Tables_cryptocom",
          style: {
            translate: `${-v.pos + v.sceneWRaw * 0.555}px 69dvh`,
            transition: "translate 200ms ease-out, transform 500ms",
          },
          children: y.jsx("img", {
            src: "/img/bitkan.png",
            alt: "",
            style: { height: "12dvh", transform: "rotate(-5deg)" },
          }),
        }),
      ],
    }),
  Zg = 17482,
  Jg = 1080,
  ad = Zg / Jg;
function e0() {
  const [i, l] = q.useState(0),
    [s, u] = q.useState(window.innerWidth < 800),
    c = q.useRef(0),
    d = q.useRef(0),
    h = () => {
      if (!s) {
        const U = window.scrollY;
        v.setScrollPosition(U);
      }
    },
    _ = (U) => {
      (c.current = U.touches[0].clientX), (d.current = U.touches[0].clientX);
    },
    x = (U) => {
      const G = U.touches[0].clientX,
        Ie = G - d.current;
      v.changeScrollPosition(-Ie), (d.current = G);
    },
    E = () => {
      (c.current = 0), (d.current = 0);
    },
    P = () => {
      const U =
        window.innerHeight * ad -
        document.documentElement.clientWidth +
        window.innerHeight;
      l(U),
        v.setSceneW(U - window.innerHeight),
        v.setSceneWRaw(window.innerHeight * ad),
        v.setScreenPercentOfScene(
          (document.documentElement.clientWidth / v.sceneWRaw) * 100
        ),
        u(window.innerWidth < 800);
    };
  q.useEffect(
    () => (
      P(),
      s
        ? (window.addEventListener("touchstart", _),
          window.addEventListener("touchmove", x),
          window.addEventListener("touchend", E))
        : window.addEventListener("scroll", h),
      window.addEventListener("resize", P),
      () => {
        window.removeEventListener("resize", P),
          s
            ? (window.removeEventListener("touchstart", _),
              window.removeEventListener("touchmove", x),
              window.removeEventListener("touchend", E))
            : window.removeEventListener("scroll", h);
      }
    ),
    [s]
  );
  const [M, D] = q.useState(!0);
  q.useEffect(() => {
    M
      ? ((J.current.volume = 1), (se.current.volume = 1))
      : ((J.current.volume = 0), (se.current.volume = 0));
  }, [M]),
    q.useEffect(() => {
      ce.play && ((se.current.currentTime = 0), se.current.play());
    }, [ce.play]);
  const J = q.useRef(null),
    se = q.useRef(null);
  return y.jsxs("div", {
    className: "App",
    style: { height: `${i}px` },
    onClick: () => {
      J.current.play();
    },
    children: [
      y.jsx("audio", { ref: J, src: "/music/bg.mp3", loop: !0 }),
      y.jsx("audio", { ref: se, src: "/music/click.mp3" }),
      y.jsxs("div", {
        className: "App_gde",
        children: [
          y.jsx("a", {
            href: "https://t.me/",
            target: "_blank",
            className: "App_gde_el",
            children: y.jsx("img", { src: "/img/tg.svg", alt: "" }),
          }),
          y.jsx("a", {
            href: "https://x.com/",
            target: "_blank",
            className: "App_gde_el",
            children: y.jsx("img", { src: "/img/x.svg", alt: "" }),
          }),
          y.jsx("a", {
            href: "https://dexscreener.com/solana/0xComingSoon",
            target: "_blank",
            className: "App_gde_el",
            children: y.jsx("img", { src: "/img/dex.svg", alt: "" }),
          }),
          y.jsx("div", {
            className: "App_gde_el",
            onClick: () => {
              D(!M);
            },
            children: y.jsx("img", {
              src: `/img/music${M ? "On" : "Off"}.svg`,
              alt: "",
            }),
          }),
        ],
      }),
      y.jsxs("div", {
        className: "App_content",
        children: [
          y.jsx(xg, {}),
          y.jsx(kg, {}),
          y.jsx(Og, {}),
          v.POS + v.screenPercentOfScene >= 1 && v.POS <= 2 && y.jsx(jg, {}),
          v.POS + v.screenPercentOfScene >= 1.5 &&
            v.POS <= 2.5 &&
            y.jsx(Pg, {}),
          v.POS + v.screenPercentOfScene >= 3 && v.POS <= 8.2 && y.jsx(Cg, {}),
          v.POS + v.screenPercentOfScene >= 8 && v.POS <= 11 && y.jsx(Ng, {}),
          v.POS + v.screenPercentOfScene >= 11.5 &&
            v.POS <= 13 &&
            y.jsx(Ag, {}),
          v.POS + v.screenPercentOfScene >= 11 && v.POS <= 14 && y.jsx(Rg, {}),
          v.POS + v.screenPercentOfScene >= 15 && v.POS <= 16 && y.jsx(Tg, {}),
          v.POS + v.screenPercentOfScene >= 16 &&
            v.POS <= 17.8 &&
            y.jsx(Mg, {}),
          v.POS + v.screenPercentOfScene >= 21.6 &&
            v.POS <= 23.1 &&
            y.jsx(Lg, {}),
          v.POS + v.screenPercentOfScene >= 24.5 &&
            v.POS <= 26.5 &&
            y.jsx(zg, {}),
          v.POS + v.screenPercentOfScene >= 25.5 &&
            v.POS <= 30 &&
            y.jsx(Dg, {}),
          v.POS + v.screenPercentOfScene >= 30.5 &&
            v.POS <= 32.5 &&
            y.jsx(Ig, {}),
          v.POS + v.screenPercentOfScene >= 32.5 &&
            v.POS <= 33 &&
            y.jsx(bg, {}),
          v.POS + v.screenPercentOfScene >= 34.5 &&
            v.POS <= 35.5 &&
            y.jsx($g, {}),
          v.POS + v.screenPercentOfScene >= 35 &&
            v.POS <= 35.5 &&
            y.jsx(Fg, {}),
          v.POS + v.screenPercentOfScene >= 37.5 &&
            v.POS <= 39.2 &&
            y.jsx(Bg, {}),
          v.POS + v.screenPercentOfScene >= 43.5 &&
            v.POS <= 44.7 &&
            y.jsx(Ug, {}),
          v.POS + v.screenPercentOfScene >= 46 && v.POS <= 48 && y.jsx(Vg, {}),
          v.POS + v.screenPercentOfScene >= 49.3 &&
            v.POS <= 52.3 &&
            y.jsx(Wg, {}),
          v.POS + v.screenPercentOfScene >= 62.8 &&
            v.POS <= 64.1 &&
            y.jsx(Hg, {}),
          v.POS + v.screenPercentOfScene >= 70 && v.POS <= 85 && y.jsx(Gg, {}),
          v.POS + v.screenPercentOfScene >= 73 && v.POS <= 75 && y.jsx(Qg, {}),
          v.POS + v.screenPercentOfScene >= 76 &&
            v.POS <= 77.8 &&
            y.jsx(Kg, {}),
          v.POS + v.screenPercentOfScene >= 82.5 &&
            v.POS <= 86.5 &&
            y.jsx(Xg, {}),
          v.POS + v.screenPercentOfScene >= 87.2 &&
            v.POS <= 88.8 &&
            y.jsx(qg, {}),
          v.POS + v.screenPercentOfScene >= 50 && v.POS <= 62 && y.jsx(Yg, {}),
          y.jsx("img", {
            src: "/img/earth.png",
            alt: "",
            style: {
              translate: `-${v.pos}px 0px`,
              transition: "translate 200ms ease-out",
              height: "100dvh",
            },
          }),
        ],
      }),
    ],
  });
}
const t0 = yg(e0);
uv.createRoot(document.getElementById("root")).render(y.jsx(t0, {}));
