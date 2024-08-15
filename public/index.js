/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRouter: () => (/* binding */ useRouter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/history */ \"./src/utils/history.ts\");\n\n\nfunction NotFoundPageDefaultElem({ back }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null,\n        \"404Page \",\n        react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", { onClick: back }, \"back\")));\n}\n/**\n * **\n * 提供一套独立的路由系统，可以在单独的组件内部完成复杂的路由切换\n * @param IUseRouterProps\n * @returns [IUseRouterHistory,OutLet组件]\n */\nfunction useRouter({ routes, callbacks = [], initialPath, NotFoundPage = NotFoundPageDefaultElem, }) {\n    /** 初始化路由history */\n    const routerHistory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_utils_history__WEBPACK_IMPORTED_MODULE_1__.createUseRouterHistory)());\n    const routesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(routes.reduce((prev, curr) => {\n        return {\n            ...prev,\n            [curr.pathname]: curr,\n        };\n    }, {}));\n    const [MatchedRoute, setMatchedRoute] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(routesMap.current[routerHistory.current?.location?.pathname || \"/\"]);\n    const MatchedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n        if (!MatchedRoute?.component) {\n            return null;\n        }\n        return MatchedRoute.component;\n    }, [MatchedRoute]);\n    function OutLet() {\n        const MatchedRouteComponent = MatchedComponent ||\n            (() => (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(NotFoundPage, { back: () => {\n                    routerHistory.current?.push(\"/\");\n                } })));\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(MatchedRouteComponent, { history: routerHistory.current, location: {\n                ...(routerHistory.current?.location || {}),\n                state: {\n                    ...(MatchedRoute?.initialState || {}),\n                    ...(routerHistory.current?.location?.state || {}),\n                },\n            } }));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        /** 初始化操作 */\n        function matchRoute(update) {\n            const { location } = update;\n            const { pathname } = location;\n            const matchedRoute = routesMap.current[pathname];\n            if (matchedRoute) {\n                const { callback } = matchedRoute;\n                /** 触发事件 */\n                if (callback) {\n                    callback(update);\n                }\n                setMatchedRoute(matchedRoute);\n            }\n            else {\n                setMatchedRoute(null);\n            }\n        }\n        /** 注册事件 */\n        callbacks.forEach((callback) => routerHistory.current.listen(callback));\n        const unlisten = routerHistory.current.listen(matchRoute);\n        return () => {\n            unlisten();\n        };\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        /** 跳转初始化路径 */\n        if (initialPath) {\n            routerHistory.current.push(initialPath);\n        }\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return [routerHistory.current, OutLet];\n}\n\n\n//# sourceURL=webpack://use-router-hook/./src/index.tsx?");

/***/ }),

/***/ "./src/typings.ts":
/*!************************!*\
  !*** ./src/typings.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EUseRouterAction: () => (/* binding */ EUseRouterAction)\n/* harmony export */ });\nvar EUseRouterAction;\n(function (EUseRouterAction) {\n    EUseRouterAction[\"POP\"] = \"POP\";\n    EUseRouterAction[\"PUSH\"] = \"PUSH\";\n    EUseRouterAction[\"REPLACE\"] = \"REPLACE\";\n})(EUseRouterAction || (EUseRouterAction = {}));\n\n\n//# sourceURL=webpack://use-router-hook/./src/typings.ts?");

/***/ }),

/***/ "./src/utils/eventEmitter.ts":
/*!***********************************!*\
  !*** ./src/utils/eventEmitter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventEmitter)\n/* harmony export */ });\n/** 实现一个事件中心 */\nclass eventEmitter {\n    handlers = [];\n    /** 注册监听 */\n    listen = (listener) => {\n        this.handlers.push(listener);\n        return () => {\n            this.handlers.filter((handler) => handler !== listener);\n        };\n    };\n    trigger = (update) => {\n        this.handlers.forEach((handler) => handler(update));\n    };\n    getLength = () => {\n        return this.handlers.length;\n    };\n}\n\n\n//# sourceURL=webpack://use-router-hook/./src/utils/eventEmitter.ts?");

/***/ }),

/***/ "./src/utils/history.ts":
/*!******************************!*\
  !*** ./src/utils/history.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUseRouterHistory: () => (/* binding */ createUseRouterHistory)\n/* harmony export */ });\n/* harmony import */ var _typings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typings */ \"./src/typings.ts\");\n/* harmony import */ var _eventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventEmitter */ \"./src/utils/eventEmitter.ts\");\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stack */ \"./src/utils/stack.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\n\n\nfunction _initRootLocation() {\n    return {\n        pathname: '/',\n        search: '',\n        key: 'default',\n        state: {},\n    };\n}\n/** 初始化location */\nconst _rootLocation = _initRootLocation();\n// 解析To参数\nfunction parsePath(to) {\n    if (typeof to === 'string') {\n        const parsedPath = {};\n        let cachePath = to;\n        const searchIndex = cachePath.indexOf('?');\n        if (searchIndex >= 0) {\n            parsedPath.search = cachePath.substring(searchIndex);\n            cachePath = cachePath.substring(0, searchIndex);\n        }\n        parsedPath.pathname = cachePath;\n        return parsedPath;\n    }\n    else {\n        return to;\n    }\n}\n/** 返回一个简单的history对象，用来记录，监听，历史记录 */\nfunction createUseRouterHistory() {\n    /** 创建事件中心 */\n    const emitters = new _eventEmitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    /** 创建一个location堆栈，存放历史 */\n    const locationStack = new _stack__WEBPACK_IMPORTED_MODULE_2__.TruncateStack();\n    /** 当前location */\n    let currentLocation = _rootLocation;\n    /** 上一个action，默认POP */\n    let lastAction = _typings__WEBPACK_IMPORTED_MODULE_0__.EUseRouterAction.POP;\n    /** 将根location入栈 */\n    locationStack.push(currentLocation);\n    /** 生成新的location */\n    function _generateNewLocation(to, state = {}) {\n        const { pathname, search } = currentLocation;\n        return {\n            pathname,\n            search,\n            ...parsePath(to),\n            state,\n            key: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n        };\n    }\n    function push(to, state) {\n        const newLocation = _generateNewLocation(to, state);\n        if (!state) {\n            if (newLocation.pathname === currentLocation.pathname &&\n                newLocation.search === currentLocation.search) {\n                return;\n            }\n        }\n        locationStack.push(newLocation);\n        lastAction = _typings__WEBPACK_IMPORTED_MODULE_0__.EUseRouterAction.PUSH;\n        currentLocation = newLocation;\n        emitters.trigger({\n            action: lastAction,\n            location: currentLocation,\n        });\n    }\n    function replace(to, state) {\n        const newLocation = _generateNewLocation(to, state);\n        if (!state) {\n            if (newLocation.pathname === currentLocation.pathname &&\n                newLocation.search === currentLocation.search) {\n                return;\n            }\n        }\n        locationStack.replace(newLocation);\n        lastAction = _typings__WEBPACK_IMPORTED_MODULE_0__.EUseRouterAction.REPLACE;\n        currentLocation = newLocation;\n        emitters.trigger({\n            action: lastAction,\n            location: currentLocation,\n        });\n    }\n    function go(delta) {\n        currentLocation = locationStack.pop(delta) || _rootLocation;\n        lastAction = _typings__WEBPACK_IMPORTED_MODULE_0__.EUseRouterAction.POP;\n        emitters.trigger({\n            action: lastAction,\n            location: currentLocation,\n        });\n    }\n    return {\n        get location() {\n            return currentLocation;\n        },\n        get action() {\n            return lastAction;\n        },\n        get length() {\n            return locationStack.length();\n        },\n        get current() {\n            return locationStack.current();\n        },\n        push,\n        replace,\n        listen: emitters.listen,\n        go,\n        forward: () => go(1),\n        back: () => go(-1),\n    };\n}\n\n\n//# sourceURL=webpack://use-router-hook/./src/utils/history.ts?");

/***/ }),

/***/ "./src/utils/stack.ts":
/*!****************************!*\
  !*** ./src/utils/stack.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TruncateStack: () => (/* binding */ TruncateStack)\n/* harmony export */ });\nclass TruncateStack {\n    // 定义列表\n    list = [];\n    // 定义指针\n    pointer = 0;\n    // pop函数\n    pop(delta = -1) {\n        this.pointer += delta;\n        if (this.pointer < 0) {\n            this.pointer = 0;\n        }\n        if (this.list?.length === 0) {\n            this.pointer = 0;\n        }\n        else if (this.pointer > this.list?.length - 1) {\n            this.pointer = this.list?.length - 1;\n        }\n        return this.list[this.pointer];\n    }\n    // push函数\n    push(i) {\n        // 去掉 pointer后面的项目\n        if (this.pointer === 0 && this.list.length === 0) {\n            this.list.push(i);\n        }\n        else {\n            this.list = this.list.slice(0, ++this.pointer);\n            this.list.push(i);\n        }\n    }\n    replace(i) {\n        if (this.list?.length === 0) {\n            this.list.push(i);\n        }\n        else {\n            this.list.splice(this.pointer, 1, i);\n        }\n    }\n    length() {\n        return this.list.length;\n    }\n    current() {\n        return this.pointer;\n    }\n}\n\n\n//# sourceURL=webpack://use-router-hook/./src/utils/stack.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  //\n  // Note to future-self: No, you can't remove the `toLowerCase()` call.\n  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n  var uuid = unsafeStringify(arr, offset);\n  // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n  return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    offset = offset || 0;\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n    return buf;\n  }\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://use-router-hook/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ var __webpack_exports__useRouter = __webpack_exports__.useRouter;
/******/ export { __webpack_exports__useRouter as useRouter };
/******/ 
