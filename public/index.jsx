/******/ var __webpack_modules__ = {
  /***/ 287: /***/ (__unused_webpack_module, exports) => {
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l = Symbol.for("react.element"),
      n = Symbol.for("react.portal"),
      p = Symbol.for("react.fragment"),
      q = Symbol.for("react.strict_mode"),
      r = Symbol.for("react.profiler"),
      t = Symbol.for("react.provider"),
      u = Symbol.for("react.context"),
      v = Symbol.for("react.forward_ref"),
      w = Symbol.for("react.suspense"),
      x = Symbol.for("react.memo"),
      y = Symbol.for("react.lazy"),
      z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = (z && a[z]) || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      C = Object.assign,
      D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = (G.prototype = new F());
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = !0;
    var I = Array.isArray,
      J = Object.prototype.hasOwnProperty,
      K = { current: null },
      L = { key: !0, ref: !0, __self: !0, __source: !0 };
    function M(a, b, e) {
      var d,
        c = {},
        k = null,
        h = null;
      if (null != b)
        for (d in (void 0 !== b.ref && (h = b.ref),
        void 0 !== b.key && (k = "" + b.key),
        b))
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in ((g = a.defaultProps), g)) void 0 === c[d] && (c[d] = g[d]);
      return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current,
      };
    }
    function N(a, b) {
      return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner,
      };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return (
        "$" +
        a.replace(/[=:]/g, function (a) {
          return b[a];
        })
      );
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key
        ? escape("" + a.key)
        : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = !1;
      if (null === a) h = !0;
      else
        switch (k) {
          case "string":
          case "number":
            h = !0;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = !0;
            }
        }
      if (h)
        return (
          (h = a),
          (c = c(h)),
          (a = "" === d ? "." + Q(h, 0) : d),
          I(c)
            ? ((e = ""),
              null != a && (e = a.replace(P, "$&/") + "/"),
              R(c, b, e, "", function (a) {
                return a;
              }))
            : null != c &&
              (O(c) &&
                (c = N(
                  c,
                  e +
                    (!c.key || (h && h.key === c.key)
                      ? ""
                      : ("" + c.key).replace(P, "$&/") + "/") +
                    a
                )),
              b.push(c)),
          1
        );
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (((f = A(a)), "function" === typeof f))
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          (k = k.value), (f = d + Q(k, g++)), (h += R(k, b, e, f, c));
      else if ("object" === k)
        throw (
          ((b = String(a)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === b
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : b) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [],
        c = 0;
      R(a, d, "", "", function (a) {
        return b.call(e, a, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(
          function (b) {
            if (0 === a._status || -1 === a._status)
              (a._status = 1), (a._result = b);
          },
          function (b) {
            if (0 === a._status || -1 === a._status)
              (a._status = 2), (a._result = b);
          }
        );
        -1 === a._status && ((a._status = 0), (a._result = b));
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null },
      V = { transition: null },
      W = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: K,
      };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = {
      map: S,
      forEach: function (a, b, e) {
        S(
          a,
          function () {
            b.apply(this, arguments);
          },
          e
        );
      },
      count: function (a) {
        var b = 0;
        S(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return (
          S(a, function (a) {
            return a;
          }) || []
        );
      },
      only: function (a) {
        if (!O(a))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return a;
      },
    };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function (a, b, e) {
      if (null === a || void 0 === a)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            a +
            "."
        );
      var d = C({}, a.props),
        c = a.key,
        k = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && ((k = b.ref), (h = K.current));
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) &&
            !L.hasOwnProperty(f) &&
            (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function (a) {
      a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      };
      a.Provider = { $$typeof: t, _context: a };
      return (a.Consumer = a);
    };
    exports.createElement = M;
    exports.createFactory = function (a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function () {
      return { current: null };
    };
    exports.forwardRef = function (a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function (a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function (a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function (a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function (a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function (a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function () {};
    exports.useDeferredValue = function (a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function (a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function () {
      return U.current.useId();
    };
    exports.useImperativeHandle = function (a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function (a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function (a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function (a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function (a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function (a) {
      return U.current.useRef(a);
    };
    exports.useState = function (a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function (a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function () {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";

    /***/
  },

  /***/ 540: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    if (true) {
      module.exports = __webpack_require__(287);
    } else {
    }

    /***/
  },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId](
    module,
    module.exports,
    __webpack_require__
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
  /******/ // define getter functions for harmony exports
  /******/ __webpack_require__.d = (exports, definition) => {
    /******/ for (var key in definition) {
      /******/ if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        /******/ Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
        /******/
      }
      /******/
    }
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
  /******/ __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  /******/
})();
/******/
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => /* binding */ src,
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540); // CONCATENATED MODULE: ./src/typings.ts
var EUseRouterAction;
(function (EUseRouterAction) {
  EUseRouterAction["POP"] = "POP";
  EUseRouterAction["PUSH"] = "PUSH";
  EUseRouterAction["REPLACE"] = "REPLACE";
})(EUseRouterAction || (EUseRouterAction = {})); // CONCATENATED MODULE: ./src/utils/eventEmitter.ts

/** 实现一个事件中心 */
class eventEmitter {
  handlers = [];
  /** 注册监听 */
  listen = (listener) => {
    this.handlers.push(listener);
    return () => {
      this.handlers.filter((handler) => handler !== listener);
    };
  };
  trigger = (update) => {
    this.handlers.forEach((handler) => handler(update));
  };
  getLength = () => {
    return this.handlers.length;
  };
} // CONCATENATED MODULE: ./src/utils/stack.ts

class TruncateStack {
  // 定义列表
  list = [];
  // 定义指针
  pointer = 0;
  // pop函数
  pop(delta = -1) {
    this.pointer += delta;
    if (this.pointer < 0) {
      this.pointer = 0;
    }
    if (this.list?.length === 0) {
      this.pointer = 0;
    } else if (this.pointer > this.list?.length - 1) {
      this.pointer = this.list?.length - 1;
    }
    return this.list[this.pointer];
  }
  // push函数
  push(i) {
    // 去掉 pointer后面的项目
    if (this.pointer === 0 && this.list.length === 0) {
      this.list.push(i);
    } else {
      this.list = this.list.slice(0, ++this.pointer);
      this.list.push(i);
    }
  }
  replace(i) {
    if (this.list?.length === 0) {
      this.list.push(i);
    } else {
      this.list.splice(this.pointer, 1, i);
    }
  }
  length() {
    return this.list.length;
  }
  current() {
    return this.pointer;
  }
} // CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js

var randomUUID =
  typeof crypto !== "undefined" &&
  crypto.randomUUID &&
  crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = {
  randomUUID,
}; // CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues =
      typeof crypto !== "undefined" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    }
  }
  return getRandomValues(rnds8);
} // CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (
    byteToHex[arr[offset + 0]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    "-" +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    "-" +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    "-" +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    "-" +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  ).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
/* harmony default export */ const esm_browser_stringify =
  /* unused pure expression or super */ null && stringify; // CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
/* harmony default export */ const esm_browser_v4 = v4; // CONCATENATED MODULE: ./src/utils/history.ts
function _initRootLocation() {
  return {
    pathname: "/",
    search: "",
    key: "default",
    state: {},
  };
}
/** 初始化location */
const _rootLocation = _initRootLocation();
// 解析To参数
function parsePath(to) {
  if (typeof to === "string") {
    const parsedPath = {};
    let cachePath = to;
    const searchIndex = cachePath.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = cachePath.substring(searchIndex);
      cachePath = cachePath.substring(0, searchIndex);
    }
    parsedPath.pathname = cachePath;
    return parsedPath;
  } else {
    return to;
  }
}
/** 返回一个简单的history对象，用来记录，监听，历史记录 */
function createUseRouterHistory() {
  /** 创建事件中心 */
  const emitters = new eventEmitter();
  /** 创建一个location堆栈，存放历史 */
  const locationStack = new TruncateStack();
  /** 当前location */
  let currentLocation = _rootLocation;
  /** 上一个action，默认POP */
  let lastAction = EUseRouterAction.POP;
  /** 将根location入栈 */
  locationStack.push(currentLocation);
  /** 生成新的location */
  function _generateNewLocation(to, state = {}) {
    const { pathname, search } = currentLocation;
    return {
      pathname,
      search,
      ...parsePath(to),
      state,
      key: esm_browser_v4(),
    };
  }
  function push(to, state) {
    const newLocation = _generateNewLocation(to, state);
    if (!state) {
      if (
        newLocation.pathname === currentLocation.pathname &&
        newLocation.search === currentLocation.search
      ) {
        return;
      }
    }
    locationStack.push(newLocation);
    lastAction = EUseRouterAction.PUSH;
    currentLocation = newLocation;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }
  function replace(to, state) {
    const newLocation = _generateNewLocation(to, state);
    if (!state) {
      if (
        newLocation.pathname === currentLocation.pathname &&
        newLocation.search === currentLocation.search
      ) {
        return;
      }
    }
    locationStack.replace(newLocation);
    lastAction = EUseRouterAction.REPLACE;
    currentLocation = newLocation;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }
  function go(delta) {
    currentLocation = locationStack.pop(delta) || _rootLocation;
    lastAction = EUseRouterAction.POP;
    emitters.trigger({
      action: lastAction,
      location: currentLocation,
    });
  }
  return {
    get location() {
      return currentLocation;
    },
    get action() {
      return lastAction;
    },
    get length() {
      return locationStack.length();
    },
    get current() {
      return locationStack.current();
    },
    push,
    replace,
    listen: emitters.listen,
    go,
    forward: () => go(1),
    back: () => go(-1),
  };
} // CONCATENATED MODULE: ./src/index.tsx

function NotFoundPageDefaultElem({ back }) {
  return react.createElement(
    "div",
    null,
    "404Page ",
    react.createElement("span", { onClick: back }, "back")
  );
}
/**
 * **
 * 提供一套独立的路由系统，可以在单独的组件内部完成复杂的路由切换
 * @param IUseRouterProps
 * @returns [IUseRouterHistory,OutLet组件]
 */
function useRouter({
  routes,
  callbacks = [],
  initialPath,
  NotFoundPage = NotFoundPageDefaultElem,
}) {
  /** 初始化路由history */
  const routerHistory = (0, react.useRef)(createUseRouterHistory());
  const routesMap = (0, react.useRef)(
    routes.reduce((prev, curr) => {
      return {
        ...prev,
        [curr.pathname]: curr,
      };
    }, {})
  );
  const [MatchedRoute, setMatchedRoute] = (0, react.useState)(
    routesMap.current[routerHistory.current?.location?.pathname || "/"]
  );
  const MatchedComponent = (0, react.useMemo)(() => {
    if (!MatchedRoute?.component) {
      return null;
    }
    return MatchedRoute.component;
  }, [MatchedRoute]);
  function OutLet() {
    const MatchedRouteComponent =
      MatchedComponent ||
      (() =>
        react.createElement(NotFoundPage, {
          back: () => {
            routerHistory.current?.push("/");
          },
        }));
    return react.createElement(MatchedRouteComponent, {
      history: routerHistory.current,
      location: {
        ...(routerHistory.current?.location || {}),
        state: {
          ...(MatchedRoute?.initialState || {}),
          ...(routerHistory.current?.location?.state || {}),
        },
      },
    });
  }
  (0, react.useEffect)(() => {
    /** 初始化操作 */
    function matchRoute(update) {
      const { location } = update;
      const { pathname } = location;
      const matchedRoute = routesMap.current[pathname];
      if (matchedRoute) {
        const { callback } = matchedRoute;
        /** 触发事件 */
        if (callback) {
          callback(update);
        }
        setMatchedRoute(matchedRoute);
      } else {
        setMatchedRoute(null);
      }
    }
    /** 注册事件 */
    callbacks.forEach((callback) => routerHistory.current.listen(callback));
    const unlisten = routerHistory.current.listen(matchRoute);
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, react.useEffect)(() => {
    /** 跳转初始化路径 */
    if (initialPath) {
      routerHistory.current.push(initialPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [routerHistory.current, OutLet];
}
/* harmony default export */ const src = useRouter;

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
