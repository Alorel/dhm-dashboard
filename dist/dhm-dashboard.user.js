// ==UserScript==
// @name         DiamondHunt Mobile Dashboard
// @namespace    com.alorel.diamondhunt-dashboard
// @version      1.1.0
// @description  Showers you with the glory of Alorel
// @author       Alorel
// @include      http*://diamondhunt.app*
// @grant        unsafeWindow
// @grant        GM_getResourceText
// @grant        GM_info
// @run-at       document-end
// @homepage     https://github.com/Alorel/dhm-dashboard
// @supportURL   https://github.com/Alorel/dhm-dashboard/issues?q=is%3Aissue+sort%3Aupdated-desc+
// @resource     bs_css https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css
// @resource     tooltip_css https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css
// @icon         https://diamondhunt.app/images/ruby.png
// @require      https://polyfill.io/v3/polyfill.js?features=es5,es6,es7,default
// @require https://cdn.jsdelivr.net/npm/bluebird@3.5.3/js/browser/bluebird.min.js
// @require https://cdn.jsdelivr.net/npm/rxjs@6.3.3/bundles/rxjs.umd.min.js
// @require https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js
// @require https://cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = rxjs["operators"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = rxjs;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ":host{background:transparent;display:inline-block;font-size:12px;margin-top:5px;margin-bottom:5px}img.item{height:1em;width:1em}.item{display:inline-block;margin-left:3.33px}.item:first-child,.item:empty:not(input){margin-left:0}span.item:empty{display:none}\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ":host{display:block;background:rgba(0,0,0,0.5);padding:5px;border-radius:5px}hr{margin:0;border-width:1px 0 0 0;border-color:#fff}ul.inline{padding-left:0;margin-top:5px;margin-bottom:5px;margin-left:-5px;list-style:none}ul.inline>li{display:inline-block;padding-right:5px;padding-left:5px}@media (min-width: 1000px){:host{position:fixed;top:5px;left:5px;width:230px;box-shadow:2px 2px 10px 0 #000;background:rgba(0,0,0,0.2);border:1px ridge silver}}@media (min-width: 1100px){:host{width:280px}}@media (min-width: 1200px){:host{width:330px}}@media (min-width: 1300px){:host{width:380px}}@media (min-width: 1400px){:host{width:430px}}@media (min-width: 1500px){:host{width:480px}}@media (min-width: 1600px){:host{width:530px}}@media (min-width: 1700px){:host{width:580px}}@media (min-width: 1800px){:host{width:630px}}@media (min-width: 1900px){:host{width:680px}}\n"

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./src/interfaces/greasemonkey.ts
var GM = {
    getResourceText: GM_getResourceText,
    info: GM_info,
    unsafeWindow: unsafeWindow
};

// CONCATENATED MODULE: ./src/lib/fn/addCssClasses.ts
//tslint:disable:max-line-length

function addCssClases(el) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    var _a;
    if (typeof el === 'string') {
        el = document.createElement(el);
    }
    (_a = el.classList).add.apply(_a, __spread(classes));
    return el;
}

// CONCATENATED MODULE: ./src/lib/fn/insertAfter.ts
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// CONCATENATED MODULE: ./src/lib/fn/mkElement.ts
function mkElement(name, text, asHTML) {
    var el = document.createElement(name);
    el[asHTML ? 'innerHTML' : 'innerText'] = text;
    return el;
}

// CONCATENATED MODULE: ./src/interfaces/HideableUIItem.ts
function isHideableUIItem(v) {
    return !!v && typeof v.shouldHideFromUI === 'function' &&
        typeof v.extractDomElement === 'function';
}

// CONCATENATED MODULE: ./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js
/**
 * Evaluate the getter function and cache the result
 * @param {boolean} [setProto=false] Set the value on the class prototype as well. Only applies to non-static getters.
 * @param {boolean} [makeNonConfigurable=false] Set to true to make the resolved property non-configurable
 * @return {(target: any, key: string, descriptor: PropertyDescriptor) => void} A Typescript decorator function
 */
function LazyGetter(setProto, makeNonConfigurable) {
    if (setProto === void 0) { setProto = false; }
    if (makeNonConfigurable === void 0) { makeNonConfigurable = false; }
    return function (target, key, descriptor) {
        if (!descriptor) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.get;
        if (!originalMethod) {
            throw new Error('@LazyGetter can only decorate getters!');
        }
        else if (!descriptor.configurable) {
            throw new Error('@LazyGetter target must be configurable');
        }
        else {
            descriptor.get = function () {
                var value = originalMethod.apply(this, arguments);
                var newDescriptor = {
                    configurable: !makeNonConfigurable,
                    enumerable: descriptor.enumerable,
                    value: value
                };
                var isStatic = Object.getPrototypeOf(target) === Function.prototype;
                if (isStatic || setProto) {
                    Object.defineProperty(target, key, newDescriptor);
                }
                if (!isStatic) {
                    Object.defineProperty(this, key, newDescriptor);
                }
                return value;
            };
        }
    };
}
//# sourceMappingURL=LazyGetter.js.map
// CONCATENATED MODULE: ./src/lib/fn/addStyle.ts
function addStyle(el, css) {
    var style = document.createElement('style');
    style.innerText = css;
    el.appendChild(style);
    return el;
}

// CONCATENATED MODULE: ./src/lib/structures/IconMenuItem.ts




var IconMenuItem_IconMenuItem = /** @class */ (function () {
    function IconMenuItem(imgUrl, label) {
        this.imgUrl = imgUrl;
        this.label = label || '';
        var onClick = this.getOnClick();
        if (onClick) {
            this.root.addEventListener('click', onClick);
        }
        addStyle(this.root, __webpack_require__(4));
        this.root.appendChild(this.innerContainer);
        this.innerContainer.appendChild(this.img);
        this.innerContainer.appendChild(this.labelElement);
    }
    Object.defineProperty(IconMenuItem.prototype, "container", {
        get: function () {
            return document.createElement('div');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "img", {
        get: function () {
            return addCssClases('img', 'item');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "imgUrl", {
        get: function () {
            return this.img.src;
        },
        set: function (v) {
            this.img.src = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "innerContainer", {
        get: function () {
            return addCssClases('span', 'btn', 'btn-sm', 'btn-dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "label", {
        get: function () {
            return this.labelElement.innerHTML;
        },
        set: function (v) {
            this.labelElement.innerHTML = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "labelElement", {
        get: function () {
            return addCssClases('span', 'item');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconMenuItem.prototype, "root", {
        get: function () {
            return this.container.attachShadow({ mode: 'closed' });
        },
        enumerable: true,
        configurable: true
    });
    IconMenuItem.prototype.getOnClick = function () {
        // none
    };
    __decorate([
        LazyGetter()
    ], IconMenuItem.prototype, "container", null);
    __decorate([
        LazyGetter()
    ], IconMenuItem.prototype, "img", null);
    __decorate([
        LazyGetter()
    ], IconMenuItem.prototype, "innerContainer", null);
    __decorate([
        LazyGetter()
    ], IconMenuItem.prototype, "labelElement", null);
    __decorate([
        LazyGetter()
    ], IconMenuItem.prototype, "root", null);
    return IconMenuItem;
}());


// CONCATENATED MODULE: ./src/lib/fn/mkList.ts






function stdSeparatorFn() {
    return document.createElement('hr');
}
function isContainerElement(v) {
    return !!v && v instanceof IconMenuItem_IconMenuItem;
}
function createMkListFn(container, separatorFn) {
    if (separatorFn === void 0) { separatorFn = stdSeparatorFn; }
    var numListItems = 0;
    var root = container.attachShadow({ mode: 'closed' });
    addStyle(root, GM.getResourceText("bs_css" /* BS_CSS */));
    addStyle(root, __webpack_require__(5));
    function mkList() {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var e_1, _a;
        if (numListItems++) {
            root.appendChild(separatorFn());
        }
        var ul = addCssClases('ul', 'inline');
        var _loop_1 = function (node) {
            try {
                var li_1 = document.createElement('li');
                if (isHideableUIItem(node)) {
                    node.shouldHideFromUI().subscribe(function (shouldHide) {
                        li_1.style.display = shouldHide ? 'none' : null;
                    });
                    li_1.appendChild(node.extractDomElement());
                }
                else if (isContainerElement(node)) {
                    li_1.appendChild(node.container);
                }
                else {
                    li_1.appendChild(node);
                }
                ul.appendChild(li_1);
            }
            catch (e) {
                console.error(node);
                throw e;
            }
        };
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                _loop_1(node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        root.appendChild(ul);
    }
    mkList.root = root;
    return mkList;
}

// CONCATENATED MODULE: ./src/lib/fn/mkSpan.ts

function mkSpan(text, asHTML) {
    return mkElement('span', text, asHTML);
}

// CONCATENATED MODULE: ./src/lib/fn/navigate.ts

function navigate_navigate(where) {
    GM.unsafeWindow.navigate(where);
}

// EXTERNAL MODULE: external "_"
var external_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["rxjs","operators"]
var external_rxjs_operators_ = __webpack_require__(0);

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/lib/fn/getGameValue.ts



function getGameValue(variable) {
    return Object(external_rxjs_["timer"])(0, 1000).pipe(Object(external_rxjs_operators_["map"])(function () { return GM.unsafeWindow[variable]; }), Object(external_rxjs_operators_["distinctUntilChanged"])());
}

// CONCATENATED MODULE: ./src/lib/fn/distinctUntilObjectChanged.ts


function distinctUntilObjectChanged() {
    return Object(external_rxjs_operators_["distinctUntilChanged"])(external_["isEqual"]);
}
distinctUntilObjectChanged.cloned = function () {
    return Object(external_rxjs_operators_["distinctUntilChanged"])(function (a, b) { return Object(external_["isEqual"])(Object(external_["cloneDeep"])(a), b); });
};

// CONCATENATED MODULE: ./src/lib/structures/ValuedMenuItem.ts










var _value = Symbol('value');
var ValuedMenuItem_ValuedMenuItem = /** @class */ (function (_super) {
    __extends(ValuedMenuItem, _super);
    function ValuedMenuItem(imgUrl, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        _this.innerContainer.appendChild(_this.valueElement);
        addStyle(_this.root, GM.getResourceText("bs_css" /* BS_CSS */));
        _this.initTextObservable()
            .subscribe(function (value) {
            _this.valueElement.innerHTML = value;
        });
        setTimeout(function () {
            var initialValue = _this.computeValue();
            if (Object(external_rxjs_["isObservable"])(initialValue)) {
                initialValue
                    .pipe(distinctUntilObjectChanged())
                    .subscribe(function (v) {
                    _this.value = v;
                });
            }
            else {
                Object(external_rxjs_["timer"])(0, 1000)
                    .pipe(Object(external_rxjs_operators_["map"])(function () { return _this.computeValue(); }), distinctUntilObjectChanged())
                    .subscribe(function () {
                    _this.value = _this.computeValue();
                });
            }
        }, 1);
        return _this;
    }
    Object.defineProperty(ValuedMenuItem.prototype, "value", {
        get: function () {
            return this[_value].value;
        },
        set: function (v) {
            this[_value].next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValuedMenuItem.prototype, "valueElement", {
        get: function () {
            return addCssClases(mkSpan('??'), 'item');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValuedMenuItem.prototype, _a = _value, {
        get: function () {
            return new external_rxjs_["BehaviorSubject"](null);
        },
        enumerable: true,
        configurable: true
    });
    ValuedMenuItem.prototype.getValueObservable = function () {
        return this[_value].pipe(Object(external_rxjs_operators_["distinctUntilChanged"])(), Object(external_rxjs_operators_["shareReplay"])());
    };
    ValuedMenuItem.prototype.initTextObservable = function () {
        return this.getValueObservable()
            .pipe(Object(external_rxjs_operators_["map"])(this.valueStringifier, this), Object(external_rxjs_operators_["startWith"])('??'), Object(external_rxjs_operators_["distinctUntilChanged"])());
    };
    ValuedMenuItem.prototype.valueStringifier = function (value) {
        //tslint:disable-next-line:triple-equals
        return value == null ? '??' : value.toLocaleString();
    };
    var _a;
    __decorate([
        LazyGetter()
    ], ValuedMenuItem.prototype, "valueElement", null);
    __decorate([
        LazyGetter()
    ], ValuedMenuItem.prototype, _a, null);
    return ValuedMenuItem;
}(IconMenuItem_IconMenuItem));


// CONCATENATED MODULE: ./src/lib/structures/Item.ts










var replace = /\.(png|gif)$/g;
var Item_Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(asset, valueOb$) {
        var _this = _super.call(this, "/images/" + asset, '') || this;
        _this.valueOb$ = valueOb$;
        _this.shouldHideFromUI()
            .subscribe(function (shouldHide) {
            if (shouldHide) {
                _this.root.appendChild(_this.hideStyleEl);
            }
            else {
                try {
                    _this.root.removeChild(_this.hideStyleEl);
                }
                catch (_a) {
                    //noop
                }
            }
        });
        addStyle(_this.root, GM.getResourceText("tooltip_css" /* TOOLTIP_CSS */));
        _this.innerContainer.setAttribute('data-balloon-pos', 'up');
        _this.innerContainer.setAttribute('data-balloon', Object(external_["startCase"])(asset.toString().replace(replace, '')));
        return _this;
    }
    Object.defineProperty(Item.prototype, "hideStyleEl", {
        get: function () {
            return mkElement('style', ':host{display:none!important}');
        },
        enumerable: true,
        configurable: true
    });
    Item.fromName = function (name) {
        return new Item(name + ".png", getGameValue(name));
    };
    Item.fromNameClick = function (name) {
        return Item.fromName(name).addOnClick(function () {
            GM.unsafeWindow.clicksItem(name);
        });
    };
    Item.fromNameNav = function (name, navTarget) {
        return Item.fromName(name).nav(navTarget);
    };
    Item.prototype.addOnClick = function (fn) {
        var _this = this;
        this.addPointer();
        this.root.addEventListener('click', fn, { passive: true });
        this.addOnClick = function () { return _this; };
        return this;
    };
    Item.prototype.addOnRightClick = function (fn) {
        var _this = this;
        this.addPointer();
        this.addOnClick = function () { return _this; };
        this.root.addEventListener('contextmenu', fn);
        return this;
    };
    Item.prototype.addSecondaryTooltip = function (text) {
        var _this = this;
        this.valueElement.setAttribute('data-balloon-pos', 'down');
        var newFn = function (newText) {
            _this.valueElement.setAttribute('data-balloon', newText);
            return _this;
        };
        this.addSecondaryTooltip = newFn;
        newFn(text);
        return this;
    };
    Item.prototype.extractDomElement = function () {
        return this.container;
    };
    Item.prototype.forceState = function (cssClass) {
        var cl = this.innerContainer.classList;
        cl.remove('btn-dark');
        cl.add(cssClass);
        return this;
    };
    Item.prototype.nav = function (where) {
        return this.addOnClick(function () {
            navigate_navigate(where);
        });
    };
    Item.prototype.shouldHideFromUI = function () {
        return this.valueOb$.pipe(Object(external_rxjs_operators_["map"])(shouldHideFromUIMapper), Object(external_rxjs_operators_["distinctUntilChanged"])());
    };
    Item.prototype.computeValue = function () {
        return this.valueOb$;
    };
    Item.prototype.addPointer = function () {
        addStyle(this.root, ':host{cursor:pointer}');
        this.addPointer = external_["noop"];
    };
    __decorate([
        LazyGetter()
    ], Item.prototype, "hideStyleEl", null);
    return Item;
}(ValuedMenuItem_ValuedMenuItem));

function shouldHideFromUIMapper(num) {
    return num <= 0;
}

// CONCATENATED MODULE: ./src/lib/items/bars.ts

var barCounts = [
    'bronzeBars',
    'ironBars',
    'silverBars',
    'goldBars',
    'promethiumBars',
    'titaniumBars'
].map(Item_Item.fromNameClick);
barCounts.push(Item_Item.fromNameNav('ironBucket', "crafting" /* CRAFTING */), Item_Item.fromName('lava'));

// CONCATENATED MODULE: ./src/lib/items/bones.ts


var boneCounts = [
    'fishBones',
    'bones',
    'ashes',
    'iceBones'
].map(function (n) { return Item_Item.fromNameClick(n); });
boneCounts.unshift(new Item_Item('bonemealBin.png', getGameValue('bonemeal')));

// CONCATENATED MODULE: ./src/lib/items/cookedFood.ts

var cookedFoodCounts = [
    'chicken',
    'cheese',
    'honey',
    'potato',
    'apple',
    'caveCarrot',
    'shrimp',
    'sardine',
    'tuna',
    'shark',
    'shrimp2',
    'sardine2',
    'tuna2',
    'swordfish2',
    'shark2',
    'swordfish',
    'whale',
    'whale2',
    'rainbowFish',
    'rainbowFish2'
].map(Item_Item.fromNameClick);
cookedFoodCounts.unshift(Item_Item.fromNameNav('energy', "exploring" /* EXPLORATION */));

// CONCATENATED MODULE: ./src/consts/areas.ts
var areas = [
    'fields',
    'forests',
    'caves',
    'volcano',
    'northernFields',
    'hauntedMansion',
    'desert'
];

// CONCATENATED MODULE: ./src/lib/items/exploringGoodies.ts




var artifacts = [
    'brokenSwordArtifact',
    'cannonBallsArtifact',
    'oldCannonArtifact',
    'strangeLeafArtifact',
    'ancientLogArtifact',
    'rainbowFlowerArtifact',
    'clayVaseArtifact',
    'batWingArtifact',
    'skullArtifact',
    'sulferArtifact',
    'volcanicRockArtifact',
    'volcanicSmokeArtifact',
    'iceArtifact',
    'snowballsArtifact',
    'frozenHeadArtifact',
    'spiderLegsArtifact',
    'broomArtifact',
    'hauntedSkullArtifact'
];
var lootBags = areas.map(function (a) { return a + "Loot"; });
lootBags.push.apply(lootBags, __spread(lootBags.map(function (t) { return "shiny" + Object(external_["upperFirst"])(t); })));
var statues = [
    'bronze',
    'iron',
    'silver',
    'gold',
    'promethium',
    'titanium'
].reduce(function (acc, type) {
    for (var i = 1; i <= 4; i++) {
        var name_1 = type + "StatueMetalDetector";
        if (i !== 1) {
            name_1 += i.toString();
        }
        acc.push(name_1);
    }
    return acc;
}, []);
var exploringGoodies = artifacts
    .concat(lootBags)
    .concat(statues)
    .map(Item_Item.fromNameClick);

// CONCATENATED MODULE: ./src/lib/items/herbs.ts


function navToBrew() {
    navigate_navigate("brew" /* BREW */);
}
function navToBrewing(e) {
    e.preventDefault();
    navigate_navigate("brewing" /* BREWING */);
}
var herbCounts = [
    'dottedGreenLeaf',
    'greenLeaf',
    'limeLeaf',
    'goldLeaf',
    'crystalLeaf',
    'redMushroom'
].map(function (h) { return Item_Item.fromName(h).addOnClick(navToBrew).addOnRightClick(navToBrewing); });

// CONCATENATED MODULE: ./src/lib/fn/clickDOM.ts
function clickCommon(el) {
    if (el) {
        el.click();
        return true;
    }
    return false;
}
function domClickID(id) {
    if (!clickCommon(document.getElementById(id))) {
        throw new Error("Unable to click DOM ID " + id);
    }
}
function domClickSelector(selector) {
    if (!clickCommon(document.querySelector(selector))) {
        throw new Error("Unable to click selector \"" + selector + "\"");
    }
}

// CONCATENATED MODULE: ./src/lib/items/logs.ts


var logCounts = [
    'logs',
    'oakLogs',
    'entLogs',
    'willowLogs',
    'mapleLogs',
    'redwoodLogs',
    'pineLogs',
    'kindle',
    'lavaKindle',
    'hauntedLogs'
].map(function (t) { return Item_Item.fromName(t).addOnClick(function () {
    domClickSelector("#dialogue-oven-" + t + ">tbody>tr[onclick]");
}); });

// CONCATENATED MODULE: ./src/lib/items/util/Oilincome.ts








var Oilincome_OilIncomeDisplay = /** @class */ (function (_super) {
    __extends(OilIncomeDisplay, _super);
    function OilIncomeDisplay() {
        var _this = _super.call(this, '/images/oil_lighter.png') || this;
        addStyle(_this.root, GM.getResourceText("bs_css" /* BS_CSS */));
        return _this;
    }
    OilIncomeDisplay.prototype.computeValue = function () {
        return Object(external_rxjs_["combineLatest"])(getGameValue('oilIn'), getGameValue('oilOut')).pipe(Object(external_rxjs_operators_["map"])(function (_a) {
            var _b = __read(_a, 2), $in = _b[0], $out = _b[1];
            return $in - $out;
        }), Object(external_rxjs_operators_["distinctUntilChanged"])());
    };
    OilIncomeDisplay.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("miningOres" /* MINING_MACHINERY */);
        };
    };
    OilIncomeDisplay.prototype.valueStringifier = function (value) {
        var label = value ? 'success' : 'danger';
        var sym = value ? '+' : '-';
        return "<span class=\"text-" + label + "\">" + (sym + (value || 0).toLocaleString()) + "</span>";
    };
    return OilIncomeDisplay;
}(ValuedMenuItem_ValuedMenuItem));
var oilIncomeDisplay = new Oilincome_OilIncomeDisplay();

// CONCATENATED MODULE: ./src/lib/items/ores.ts




var oreCounts = [
    Item_Item.fromName('bloodCrystals').nav("shop" /* SHOP */),
    oilIncomeDisplay,
    Item_Item.fromName('oil').nav("miningOres" /* MINING_MACHINERY */)
];
oreCounts.push.apply(oreCounts, __spread(__spread([
    'sapphire',
    'emerald',
    'ruby',
    'diamond',
    'bloodDiamond',
    'stone',
    'copper',
    'iron',
    'silver',
    'gold',
    'promethium',
    'titanium'
], Object(external_["range"])(1, 4).map(function (i) { return "geode" + i; })).map(function (n) { return Item_Item.fromNameClick(n); })));

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/consts/potions.ts
var INSTANT_POTIONS = [
    'superCompostPotion',
    'woodcuttingUpgradePotion'
];
var DURATION_POTIONS = [
    'furnaceSpeedPotion',
    'treeCompostPotion',
    'woodcuttingXpPotion',
    'seedFinderPotion',
    'compostPotion',
    'fastCompostPotion',
    'farmingXpPotion',
    'fishingSpeedPotion',
    'baitPotion',
    'exploringSpeedPotion',
    'oilPotion',
    'coinPotion'
];
var COMBAT_POTIONS = [
    'hpCombatPotion',
    'freezeCombatPotion'
];
var NON_COMBAT_POTIONS = INSTANT_POTIONS.concat(DURATION_POTIONS);

// CONCATENATED MODULE: ./src/lib/items/potions.ts








var potionCounts = NON_COMBAT_POTIONS.map(function (i) {
    var item = Item_Item.fromName(i)
        .addOnClick(function () {
        GM.unsafeWindow.clicksItem(i);
    });
    getGameValue(i)
        .pipe(Object(external_rxjs_operators_["map"])(function (count) { return GM.unsafeWindow.getPotionTimer(i) * 1000 * count; }), Object(external_rxjs_operators_["distinctUntilChanged"])(), Object(external_rxjs_operators_["map"])(function (t) { return Object(external_moment_["duration"])(t).humanize(); }))
        .subscribe(function (txt) {
        item.addSecondaryTooltip("Enough for " + txt);
    });
    return item;
});
potionCounts.push.apply(potionCounts, __spread(COMBAT_POTIONS.map(function (potionName) {
    var item = Item_Item.fromName(potionName).forceState('btn-light');
    var mobName$ = getGameValue('monsterName');
    var potUsed$ = getGameValue(potionName + "Used");
    Object(external_rxjs_["combineLatest"])(mobName$, potUsed$)
        .pipe(Object(external_rxjs_operators_["map"])(function (_a) {
        var _b = __read(_a, 2), mob = _b[0], used = _b[1];
        return !mob || mob === 'none' || !!used;
    }), Object(external_rxjs_operators_["distinctUntilChanged"])())
        .subscribe(function (shouldDisable) {
        item.innerContainer.classList[shouldDisable ? 'add' : 'remove']('disabled');
    });
    return item;
})));

// CONCATENATED MODULE: ./src/lib/items/rares.ts

var rareCounts = [
    'treasureChest',
    'treasureMap',
    'xpLamp10k',
    'bagOfCash',
    'hauntedPainting',
    'hpEmblem1',
    'hpEmblem1Uncharged',
    'hpEmblem2',
    'hpEmblem2Uncharged'
].map(function (n) { return Item_Item.fromNameClick(n).forceState('btn-success'); });

// CONCATENATED MODULE: ./src/lib/items/rawFood.ts


var rawFoodCounts = [
    'rawRainbowFish',
    'rawWhale',
    'rawShark',
    'rawSwordfish',
    'rawTuna',
    'rawChicken',
    'rawSardine',
    'rawShrimp'
].map(Item_Item.fromNameClick);
rawFoodCounts.unshift(Item_Item.fromName('heat').addOnClick(function () {
    GM.unsafeWindow.clicksItem(GM.unsafeWindow.getOvenType());
}));
rawFoodCounts.unshift(Item_Item.fromNameNav('bait', "cooking" /* COOKING */));

// CONCATENATED MODULE: ./src/consts/seeds.ts

var seedGrowTimes = {
    appleTreeSeeds: 6 * 3600000,
    crystalLeafSeeds: 3 * 3600000,
    dottedGreenLeafSeeds: 15 * 60000,
    goldLeafSeeds: 2 * 3600000,
    greenLeafSeeds: 30 * 60000,
    hauntedTreeSeeds: 12 * 3600000,
    limeLeafSeeds: 3600000,
    mapleTreeSeeds: 6 * 3600000,
    oakTreeSeeds: 2 * 3600000,
    pineTreeSeeds: 36000000,
    redMushroomSeeds: 15 * 60000,
    redwoodTreeSeeds: 8 * 3600000,
    treeSeeds: 3600000,
    willowTreeSeeds: 4 * 3600000
};
var seedNames = Object(external_["sortBy"])(Object.keys(seedGrowTimes), function (k) { return seedGrowTimes[k]; });

// CONCATENATED MODULE: ./src/lib/structures/ReadiableMenuItem.ts



var ReadiableMenuItem_ReadiableMenuItem = /** @class */ (function (_super) {
    __extends(ReadiableMenuItem, _super);
    function ReadiableMenuItem(imgUrl, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        var classes = _this.innerContainer.classList;
        _this.isReady().subscribe(function (ready) {
            if (ready) {
                classes.remove('btn-dark');
                classes.add.apply(classes, __spread(_this.getReadyClasses()));
            }
            else {
                classes.remove.apply(classes, __spread(_this.getReadyClasses()));
                classes.add('btn-dark');
            }
        });
        return _this;
    }
    ReadiableMenuItem.prototype.isReady = function () {
        return this.getValueObservable().pipe(Object(external_rxjs_operators_["map"])(this.readyMapper, this), Object(external_rxjs_operators_["distinctUntilChanged"])());
    };
    ReadiableMenuItem.prototype.getReadyClasses = function () {
        return ['btn-success'];
    };
    return ReadiableMenuItem;
}(ValuedMenuItem_ValuedMenuItem));


// CONCATENATED MODULE: ./src/lib/SeedTimer.ts











function getDivider() {
    var obs$ = Object(external_["range"])(1, 7).map(function (i) { return getGameValue("farmUnlocked" + i); });
    return Object(external_rxjs_["combineLatest"])(obs$).pipe(Object(external_rxjs_operators_["map"])(function (unlockStates) {
        var e_1, _a;
        var out = 0;
        try {
            for (var unlockStates_1 = __values(unlockStates), unlockStates_1_1 = unlockStates_1.next(); !unlockStates_1_1.done; unlockStates_1_1 = unlockStates_1.next()) {
                var us = unlockStates_1_1.value;
                out += us;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (unlockStates_1_1 && !unlockStates_1_1.done && (_a = unlockStates_1.return)) _a.call(unlockStates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Math.max(1, out);
    }), Object(external_rxjs_operators_["distinctUntilChanged"])());
}
var SeedTimer_SeedTimer = /** @class */ (function (_super) {
    __extends(SeedTimer, _super);
    function SeedTimer() {
        var _this = _super.call(this, '/images/clock_white.png') || this;
        addStyle(_this.root, GM.getResourceText("tooltip_css" /* TOOLTIP_CSS */));
        _this.innerContainer.setAttribute('data-balloon-pos', 'up');
        _this.computeValue().subscribe(function (v) {
            var dur = Object(external_moment_["duration"])(v);
            var out = [
                dur.hours(),
                dur.minutes(),
                dur.seconds()
            ];
            if (dur.days()) {
                out.unshift(dur.days());
            }
            var txt = out.map(function (num) { return Object(external_["padStart"])(num.toString(), 2, '0'); }).join(':');
            _this.innerContainer.setAttribute('data-balloon', txt);
        });
        return _this;
    }
    SeedTimer.prototype.computeValue = function () {
        return getDivider().pipe(Object(external_rxjs_operators_["switchMap"])(function (divider) {
            return Object(external_rxjs_["combineLatest"])(seedNames.map(getGameValue)).pipe(Object(external_rxjs_operators_["map"])(function (counts) {
                var out = 0;
                for (var i = 0; i < counts.length; i++) {
                    out += counts[i] * seedGrowTimes[seedNames[i]];
                }
                return Math.floor(out / divider);
            }));
        }), Object(external_rxjs_operators_["distinctUntilChanged"])());
    };
    SeedTimer.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("farming" /* FARMING */);
        };
    };
    SeedTimer.prototype.getReadyClasses = function () {
        return ['btn-danger'];
    };
    SeedTimer.prototype.readyMapper = function (value) {
        return value === 0;
    };
    SeedTimer.prototype.valueStringifier = function (value) {
        return this.readyMapper(value) ? 'Done' : Object(external_moment_["duration"])(value).humanize();
    };
    return SeedTimer;
}(ReadiableMenuItem_ReadiableMenuItem));
var seedTimer = new SeedTimer_SeedTimer();

// CONCATENATED MODULE: ./src/lib/items/seeds.ts





var seedCounts = seedNames
    .map(function (n) { return Item_Item.fromNameNav(n, "farming" /* FARMING */); });
seedCounts.push(seedTimer);
seedCounts.unshift.apply(seedCounts, __spread([
    'fishBones',
    'bones',
    'ashes',
    'iceBones'
].map(function (n) { return Item_Item.fromNameClick(n); })));
seedCounts.unshift(new Item_Item('bonemealBin.png', getGameValue('bonemeal')));

// CONCATENATED MODULE: ./src/lib/timers/crafting.ts






var crafting_CraftingTimer = /** @class */ (function (_super) {
    __extends(CraftingTimer, _super);
    function CraftingTimer() {
        return _super.call(this, '/images/craftingSkill.png') || this;
    }
    CraftingTimer.prototype.computeValue = function () {
        return Object(external_rxjs_["combineLatest"])(getGameValue('smeltingCurrentOreTo'), getGameValue('smeltingCurrentOreAt'))
            .pipe(Object(external_rxjs_operators_["map"])(function (_a) {
            var _b = __read(_a, 2), to = _b[0], at = _b[1];
            return to - at;
        }));
    };
    CraftingTimer.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("crafting" /* CRAFTING */);
        };
    };
    CraftingTimer.prototype.readyMapper = function (value) {
        return value === 0;
    };
    CraftingTimer.prototype.valueStringifier = function (value) {
        return value === -1 ? '??' : this.readyMapper(value) ? 'ready' : _super.prototype.valueStringifier.call(this, value);
    };
    return CraftingTimer;
}(ReadiableMenuItem_ReadiableMenuItem));
var craftingTimer = new crafting_CraftingTimer();

// CONCATENATED MODULE: ./src/lib/fn/times1k.ts
function times1k(v) {
    return v * 1000;
}

// CONCATENATED MODULE: ./src/lib/structures/TimerMenuItem.ts




var TimerMenuItem_TimerMenuItem = /** @class */ (function (_super) {
    __extends(TimerMenuItem, _super);
    function TimerMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerMenuItem.format = function (v) {
        return Object(external_["padStart"])(v.toString(), 2, '0');
    };
    TimerMenuItem.prototype.readyMapper = function (value) {
        return value === 0;
    };
    TimerMenuItem.prototype.valueStringifier = function (millis) {
        switch (millis) {
            case 0:
                return 'ready';
            case -1:
                return '??';
            default:
                var m = Object(external_moment_["duration"])(millis);
                var oot = [m.hours(), m.minutes(), m.seconds()];
                var days = m.days();
                if (days) {
                    oot.unshift(days);
                }
                return oot.map(TimerMenuItem.format).join(':');
        }
    };
    return TimerMenuItem;
}(ReadiableMenuItem_ReadiableMenuItem));


// CONCATENATED MODULE: ./src/lib/timers/exploring.ts






var exploring_ExplorationTimer = /** @class */ (function (_super) {
    __extends(ExplorationTimer, _super);
    function ExplorationTimer() {
        return _super.call(this, '/images/exploringSkill.png') || this;
    }
    ExplorationTimer.prototype.computeValue = function () {
        return getGameValue('explorerCooldown').pipe(Object(external_rxjs_operators_["map"])(times1k));
    };
    ExplorationTimer.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("exploring" /* EXPLORATION */);
        };
    };
    return ExplorationTimer;
}(TimerMenuItem_TimerMenuItem));
var explorationTimer = new exploring_ExplorationTimer();

// CONCATENATED MODULE: ./src/lib/structures/PatchTimer.ts







var PatchTimer_PatchTimer = /** @class */ (function (_super) {
    __extends(PatchTimer, _super);
    function PatchTimer(imgUrl, prefix, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        _this.prefix = prefix;
        return _this;
    }
    PatchTimer.prototype.getAvailablePatches = function () {
        var _this = this;
        var o$ = Object(external_["range"])(1, 7).map(function (i) { return getGameValue(_this.prefix + "Unlocked" + i); });
        return external_rxjs_["combineLatest"].apply(void 0, __spread(o$)).pipe(Object(external_rxjs_operators_["map"])(function (unlockStates) {
            var out = [];
            for (var i = 0; i < unlockStates.length; i++) {
                if (unlockStates[i]) {
                    out.push(i + 1);
                }
            }
            return out;
        }), distinctUntilObjectChanged());
    };
    PatchTimer.prototype.computeValue = function () {
        var _this = this;
        return this.getAvailablePatches().pipe(Object(external_rxjs_operators_["switchMap"])(function (indices) {
            return external_rxjs_["combineLatest"].apply(void 0, __spread(indices.map(function (i) { return getGameValue(_this.prefix + "Timer" + i); })));
        }), Object(external_rxjs_operators_["map"])(function (allTimes) {
            var filteredTimes = allTimes.map(timeFn).filter(filterInvalids);
            return filteredTimes.length ? Math.min.apply(Math, __spread(filteredTimes)) : -1;
        }));
    };
    return PatchTimer;
}(TimerMenuItem_TimerMenuItem));

function timeFn(val) {
    if (val === 1) {
        return 0;
    }
    else if (val > 0) {
        return val * 1000;
    }
    else {
        return -1;
    }
}
function filterInvalids(v) {
    return v !== -1;
}

// CONCATENATED MODULE: ./src/lib/timers/farming.ts



var farming_FarmingTimer = /** @class */ (function (_super) {
    __extends(FarmingTimer, _super);
    function FarmingTimer() {
        return _super.call(this, '/images/farmingSkill.png', 'farm') || this;
    }
    FarmingTimer.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("farming" /* FARMING */);
        };
    };
    return FarmingTimer;
}(PatchTimer_PatchTimer));
var farmingTimer = new farming_FarmingTimer();

// CONCATENATED MODULE: ./src/lib/timers/woodcutting.ts



var woodcutting_WoodcuttingTimer = /** @class */ (function (_super) {
    __extends(WoodcuttingTimer, _super);
    function WoodcuttingTimer() {
        return _super.call(this, '/images/woodcuttingSkill.png', 'tree') || this;
    }
    WoodcuttingTimer.prototype.getOnClick = function () {
        return function () {
            navigate_navigate("woodcutting" /* WOODCUTTING */);
        };
    };
    return WoodcuttingTimer;
}(PatchTimer_PatchTimer));
var woodcuttingTimer = new woodcutting_WoodcuttingTimer();

// CONCATENATED MODULE: ./src/postLogin.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUI", function() { return initUI; });























var dashboard = document.createElement('div');
var postLogin_mkList = createMkListFn(dashboard);
postLogin_mkList(explorationTimer, craftingTimer, woodcuttingTimer, farmingTimer);
postLogin_mkList.apply(void 0, __spread(rareCounts));
postLogin_mkList.apply(void 0, __spread(oreCounts));
postLogin_mkList.apply(void 0, __spread(seedCounts));
postLogin_mkList.apply(void 0, __spread(boneCounts));
postLogin_mkList.apply(void 0, __spread(barCounts));
postLogin_mkList.apply(void 0, __spread(logCounts));
postLogin_mkList.apply(void 0, __spread(herbCounts));
postLogin_mkList.apply(void 0, __spread(potionCounts));
postLogin_mkList.apply(void 0, __spread(rawFoodCounts));
postLogin_mkList.apply(void 0, __spread(cookedFoodCounts));
postLogin_mkList.apply(void 0, __spread(exploringGoodies));
function initUI(el) {
    insertAfter(dashboard, el);
}
try {
    var script = GM.info.script;
    var version = script.version, name_1 = script.name, homepage = script.homepage;
    postLogin_mkList.root.appendChild(document.createElement('hr'));
    var postLogin_container = addCssClases('div', 'text-center', 'small');
    postLogin_container.appendChild(mkSpan(name_1 + " v" + version + " by "));
    var postLogin_a = mkElement('a', 'Alorel');
    postLogin_a.href = homepage;
    postLogin_a.target = '_blank';
    postLogin_container.appendChild(postLogin_a);
    postLogin_mkList.root.appendChild(postLogin_container);
}
catch (_a) {
    //noop
}
navigate_navigate("woodcutting" /* WOODCUTTING */);
navigate_navigate("farming" /* FARMING */);
navigate_navigate("exploring" /* EXPLORATION */);
navigate_navigate("mining" /* MINING */);
navigate_navigate("cooking" /* COOKING */);
navigate_navigate("crafting" /* CRAFTING */);
navigate_navigate("main" /* MAIN */);
navigate_navigate("brew" /* BREW */);
navigate_navigate("brewing" /* BREWING */);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/lib/fn/isLoggedIn.ts
function isLoggedIn() {
    var gameWindow = document.getElementById('game-screen');
    return !!gameWindow && getComputedStyle(gameWindow).display !== 'none';
}

// CONCATENATED MODULE: ./src/dhm-dashboard.user.ts

var loginInterval = setInterval(function () {
    var el = document.getElementById('top-status-bar');
    if (el && isLoggedIn()) {
        __webpack_require__(6).initUI(el);
        clearInterval(loginInterval);
    }
}, 1000);
// Tweak and fix icon
var icon = document.querySelector('link[rel="icon"]');
if (icon) {
    icon.href = '/images/ruby.png';
}
//The icon gets appended to doc body atm, which is wrong
icon = document.querySelector('body link[rel="icon"]');
if (icon) {
    document.head.appendChild(icon);
}


/***/ })
/******/ ]);