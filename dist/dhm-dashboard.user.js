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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dhm-dashboard.user.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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


/***/ }),

/***/ "./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js":
/*!***********************************************************************!*\
  !*** ./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js ***!
  \***********************************************************************/
/*! exports provided: LazyGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyGetter", function() { return LazyGetter; });
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

/***/ }),

/***/ "./src/consts/areas.ts":
/*!*****************************!*\
  !*** ./src/consts/areas.ts ***!
  \*****************************/
/*! exports provided: areas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areas", function() { return areas; });
var areas = [
    'fields',
    'forests',
    'caves',
    'volcano',
    'northernFields',
    'hauntedMansion',
    'desert'
];


/***/ }),

/***/ "./src/consts/potions.ts":
/*!*******************************!*\
  !*** ./src/consts/potions.ts ***!
  \*******************************/
/*! exports provided: INSTANT_POTIONS, DURATION_POTIONS, COMBAT_POTIONS, NON_COMBAT_POTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTANT_POTIONS", function() { return INSTANT_POTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DURATION_POTIONS", function() { return DURATION_POTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMBAT_POTIONS", function() { return COMBAT_POTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_COMBAT_POTIONS", function() { return NON_COMBAT_POTIONS; });
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


/***/ }),

/***/ "./src/consts/seeds.ts":
/*!*****************************!*\
  !*** ./src/consts/seeds.ts ***!
  \*****************************/
/*! exports provided: seedGrowTimes, seedNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedGrowTimes", function() { return seedGrowTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedNames", function() { return seedNames; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);

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
var seedNames = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(Object.keys(seedGrowTimes), function (k) { return seedGrowTimes[k]; });


/***/ }),

/***/ "./src/dhm-dashboard.user.ts":
/*!***********************************!*\
  !*** ./src/dhm-dashboard.user.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fn_isLoggedIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fn/isLoggedIn */ "./src/lib/fn/isLoggedIn.ts");

var loginInterval = setInterval(function () {
    var el = document.getElementById('top-status-bar');
    if (el && Object(_lib_fn_isLoggedIn__WEBPACK_IMPORTED_MODULE_0__["isLoggedIn"])()) {
        __webpack_require__(/*! ./postLogin */ "./src/postLogin.ts").initUI(el);
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


/***/ }),

/***/ "./src/interfaces/HideableUIItem.ts":
/*!******************************************!*\
  !*** ./src/interfaces/HideableUIItem.ts ***!
  \******************************************/
/*! exports provided: isHideableUIItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHideableUIItem", function() { return isHideableUIItem; });
function isHideableUIItem(v) {
    return !!v && typeof v.shouldHideFromUI === 'function' &&
        typeof v.extractDomElement === 'function';
}


/***/ }),

/***/ "./src/interfaces/greasemonkey.ts":
/*!****************************************!*\
  !*** ./src/interfaces/greasemonkey.ts ***!
  \****************************************/
/*! exports provided: GM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GM", function() { return GM; });
var GM = {
    getResourceText: GM_getResourceText,
    info: GM_info,
    unsafeWindow: unsafeWindow
};


/***/ }),

/***/ "./src/lib/SeedTimer.ts":
/*!******************************!*\
  !*** ./src/lib/SeedTimer.ts ***!
  \******************************/
/*! exports provided: seedTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedTimer", function() { return seedTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _consts_seeds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consts/seeds */ "./src/consts/seeds.ts");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _fn_addStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fn/addStyle */ "./src/lib/fn/addStyle.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./structures/ReadiableMenuItem */ "./src/lib/structures/ReadiableMenuItem.ts");











function getDivider() {
    var obs$ = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["range"])(1, 7).map(function (i) { return Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_8__["getGameValue"])("farmUnlocked" + i); });
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(obs$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (unlockStates) {
        var e_1, _a;
        var out = 0;
        try {
            for (var unlockStates_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](unlockStates), unlockStates_1_1 = unlockStates_1.next(); !unlockStates_1_1.done; unlockStates_1_1 = unlockStates_1.next()) {
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
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
}
var SeedTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SeedTimer, _super);
    function SeedTimer() {
        var _this = _super.call(this, '/images/clock_white.png') || this;
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_7__["addStyle"])(_this.root, _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_6__["GM"].getResourceText("tooltip_css" /* TOOLTIP_CSS */));
        _this.innerContainer.setAttribute('data-balloon-pos', 'up');
        _this.computeValue().subscribe(function (v) {
            var dur = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(v);
            var out = [
                dur.hours(),
                dur.minutes(),
                dur.seconds()
            ];
            if (dur.days()) {
                out.unshift(dur.days());
            }
            var txt = out.map(function (num) { return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["padStart"])(num.toString(), 2, '0'); }).join(':');
            _this.innerContainer.setAttribute('data-balloon', txt);
        });
        return _this;
    }
    SeedTimer.prototype.computeValue = function () {
        return getDivider().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (divider) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_consts_seeds__WEBPACK_IMPORTED_MODULE_5__["seedNames"].map(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_8__["getGameValue"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (counts) {
                var out = 0;
                for (var i = 0; i < counts.length; i++) {
                    out += counts[i] * _consts_seeds__WEBPACK_IMPORTED_MODULE_5__["seedGrowTimes"][_consts_seeds__WEBPACK_IMPORTED_MODULE_5__["seedNames"][i]];
                }
                return Math.floor(out / divider);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
    };
    SeedTimer.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_9__["navigate"])("farming" /* FARMING */);
        };
    };
    SeedTimer.prototype.getReadyClasses = function () {
        return ['btn-danger'];
    };
    SeedTimer.prototype.readyMapper = function (value) {
        return value === 0;
    };
    SeedTimer.prototype.valueStringifier = function (value) {
        return this.readyMapper(value) ? 'Done' : Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(value).humanize();
    };
    return SeedTimer;
}(_structures_ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_10__["ReadiableMenuItem"]));
var seedTimer = new SeedTimer();


/***/ }),

/***/ "./src/lib/fn/addCssClasses.ts":
/*!*************************************!*\
  !*** ./src/lib/fn/addCssClasses.ts ***!
  \*************************************/
/*! exports provided: addCssClases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCssClases", function() { return addCssClases; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
    (_a = el.classList).add.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](classes));
    return el;
}
document.createElement('div');


/***/ }),

/***/ "./src/lib/fn/addStyle.ts":
/*!********************************!*\
  !*** ./src/lib/fn/addStyle.ts ***!
  \********************************/
/*! exports provided: addStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
function addStyle(el, css) {
    var style = document.createElement('style');
    style.innerText = css;
    el.appendChild(style);
    return el;
}


/***/ }),

/***/ "./src/lib/fn/clickDOM.ts":
/*!********************************!*\
  !*** ./src/lib/fn/clickDOM.ts ***!
  \********************************/
/*! exports provided: domClickID, domClickSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domClickID", function() { return domClickID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domClickSelector", function() { return domClickSelector; });
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


/***/ }),

/***/ "./src/lib/fn/distinctUntilObjectChanged.ts":
/*!**************************************************!*\
  !*** ./src/lib/fn/distinctUntilObjectChanged.ts ***!
  \**************************************************/
/*! exports provided: distinctUntilObjectChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilObjectChanged", function() { return distinctUntilObjectChanged; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


function distinctUntilObjectChanged() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEqual"]);
}
distinctUntilObjectChanged.cloned = function () {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(function (a, b) { return Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(a), b); });
};


/***/ }),

/***/ "./src/lib/fn/getGameValue.ts":
/*!************************************!*\
  !*** ./src/lib/fn/getGameValue.ts ***!
  \************************************/
/*! exports provided: getGameValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameValue", function() { return getGameValue; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");



function getGameValue(variable) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_2__["GM"].unsafeWindow[variable]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
}


/***/ }),

/***/ "./src/lib/fn/insertAfter.ts":
/*!***********************************!*\
  !*** ./src/lib/fn/insertAfter.ts ***!
  \***********************************/
/*! exports provided: insertAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/***/ }),

/***/ "./src/lib/fn/isLoggedIn.ts":
/*!**********************************!*\
  !*** ./src/lib/fn/isLoggedIn.ts ***!
  \**********************************/
/*! exports provided: isLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
function isLoggedIn() {
    var gameWindow = document.getElementById('game-screen');
    return !!gameWindow && getComputedStyle(gameWindow).display !== 'none';
}


/***/ }),

/***/ "./src/lib/fn/mkElement.ts":
/*!*********************************!*\
  !*** ./src/lib/fn/mkElement.ts ***!
  \*********************************/
/*! exports provided: mkElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkElement", function() { return mkElement; });
function mkElement(name, text, asHTML) {
    var el = document.createElement(name);
    el[asHTML ? 'innerHTML' : 'innerText'] = text;
    return el;
}


/***/ }),

/***/ "./src/lib/fn/mkList.ts":
/*!******************************!*\
  !*** ./src/lib/fn/mkList.ts ***!
  \******************************/
/*! exports provided: createMkListFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMkListFn", function() { return createMkListFn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _interfaces_HideableUIItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/HideableUIItem */ "./src/interfaces/HideableUIItem.ts");
/* harmony import */ var _structures_IconMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/IconMenuItem */ "./src/lib/structures/IconMenuItem.ts");
/* harmony import */ var _addCssClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addCssClasses */ "./src/lib/fn/addCssClasses.ts");
/* harmony import */ var _addStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addStyle */ "./src/lib/fn/addStyle.ts");






function stdSeparatorFn() {
    return document.createElement('hr');
}
function isContainerElement(v) {
    return !!v && v instanceof _structures_IconMenuItem__WEBPACK_IMPORTED_MODULE_3__["IconMenuItem"];
}
function createMkListFn(container, separatorFn) {
    if (separatorFn === void 0) { separatorFn = stdSeparatorFn; }
    var numListItems = 0;
    var root = container.attachShadow({ mode: 'closed' });
    Object(_addStyle__WEBPACK_IMPORTED_MODULE_5__["addStyle"])(root, _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_1__["GM"].getResourceText("bs_css" /* BS_CSS */));
    Object(_addStyle__WEBPACK_IMPORTED_MODULE_5__["addStyle"])(root, __webpack_require__(/*! ../styles/main-menu.scss */ "./src/lib/styles/main-menu.scss"));
    function mkList() {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        var e_1, _a;
        if (numListItems++) {
            root.appendChild(separatorFn());
        }
        var ul = Object(_addCssClasses__WEBPACK_IMPORTED_MODULE_4__["addCssClases"])('ul', 'inline');
        var _loop_1 = function (node) {
            try {
                var li_1 = document.createElement('li');
                if (Object(_interfaces_HideableUIItem__WEBPACK_IMPORTED_MODULE_2__["isHideableUIItem"])(node)) {
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
            for (var nodes_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
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


/***/ }),

/***/ "./src/lib/fn/mkSpan.ts":
/*!******************************!*\
  !*** ./src/lib/fn/mkSpan.ts ***!
  \******************************/
/*! exports provided: mkSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkSpan", function() { return mkSpan; });
/* harmony import */ var _mkElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mkElement */ "./src/lib/fn/mkElement.ts");

function mkSpan(text, asHTML) {
    return Object(_mkElement__WEBPACK_IMPORTED_MODULE_0__["mkElement"])('span', text, asHTML);
}


/***/ }),

/***/ "./src/lib/fn/navigate.ts":
/*!********************************!*\
  !*** ./src/lib/fn/navigate.ts ***!
  \********************************/
/*! exports provided: navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");

function navigate(where) {
    _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_0__["GM"].unsafeWindow.navigate(where);
}


/***/ }),

/***/ "./src/lib/fn/times1k.ts":
/*!*******************************!*\
  !*** ./src/lib/fn/times1k.ts ***!
  \*******************************/
/*! exports provided: times1k */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times1k", function() { return times1k; });
function times1k(v) {
    return v * 1000;
}


/***/ }),

/***/ "./src/lib/items/bars.ts":
/*!*******************************!*\
  !*** ./src/lib/items/bars.ts ***!
  \*******************************/
/*! exports provided: barCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barCounts", function() { return barCounts; });
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");

var barCounts = [
    'bronzeBars',
    'ironBars',
    'silverBars',
    'goldBars',
    'promethiumBars',
    'titaniumBars'
].map(_structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromNameClick);
barCounts.push(_structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromNameNav('ironBucket', "crafting" /* CRAFTING */), _structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromName('lava'));


/***/ }),

/***/ "./src/lib/items/bonez.ts":
/*!********************************!*\
  !*** ./src/lib/items/bonez.ts ***!
  \********************************/
/*! exports provided: boneCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boneCounts", function() { return boneCounts; });
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");


var boneCounts = [
    'fishBones',
    'bones',
    'ashes',
    'iceBones'
].map(function (n) { return _structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromNameClick(n); });
boneCounts.unshift(new _structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"]('bonemealBin.png', Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_0__["getGameValue"])('bonemeal')));


/***/ }),

/***/ "./src/lib/items/cookedFood.ts":
/*!*************************************!*\
  !*** ./src/lib/items/cookedFood.ts ***!
  \*************************************/
/*! exports provided: cookedFoodCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookedFoodCounts", function() { return cookedFoodCounts; });
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");

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
].map(_structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromNameClick);
cookedFoodCounts.unshift(_structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromNameNav('energy', "exploring" /* EXPLORATION */));


/***/ }),

/***/ "./src/lib/items/exploringGoodies.ts":
/*!*******************************************!*\
  !*** ./src/lib/items/exploringGoodies.ts ***!
  \*******************************************/
/*! exports provided: exploringGoodies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exploringGoodies", function() { return exploringGoodies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_areas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts/areas */ "./src/consts/areas.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");




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
var lootBags = _consts_areas__WEBPACK_IMPORTED_MODULE_2__["areas"].map(function (a) { return a + "Loot"; });
lootBags.push.apply(lootBags, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](lootBags.map(function (t) { return "shiny" + Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(t); })));
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
    .map(_structures_Item__WEBPACK_IMPORTED_MODULE_3__["Item"].fromNameClick);


/***/ }),

/***/ "./src/lib/items/herbs.ts":
/*!********************************!*\
  !*** ./src/lib/items/herbs.ts ***!
  \********************************/
/*! exports provided: herbCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "herbCounts", function() { return herbCounts; });
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");


function navToBrew() {
    Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])("brew" /* BREW */);
}
function navToBrewing(e) {
    e.preventDefault();
    Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])("brewing" /* BREWING */);
}
var herbCounts = [
    'dottedGreenLeaf',
    'greenLeaf',
    'limeLeaf',
    'goldLeaf',
    'crystalLeaf',
    'redMushroom'
].map(function (h) { return _structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromName(h).addOnClick(navToBrew).addOnRightClick(navToBrewing); });


/***/ }),

/***/ "./src/lib/items/logs.ts":
/*!*******************************!*\
  !*** ./src/lib/items/logs.ts ***!
  \*******************************/
/*! exports provided: logCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logCounts", function() { return logCounts; });
/* harmony import */ var _fn_clickDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fn/clickDOM */ "./src/lib/fn/clickDOM.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");


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
].map(function (t) { return _structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromName(t).addOnClick(function () {
    Object(_fn_clickDOM__WEBPACK_IMPORTED_MODULE_0__["domClickSelector"])("#dialogue-oven-" + t + ">tbody>tr[onclick]");
}); });


/***/ }),

/***/ "./src/lib/items/ores.ts":
/*!*******************************!*\
  !*** ./src/lib/items/ores.ts ***!
  \*******************************/
/*! exports provided: oreCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oreCounts", function() { return oreCounts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");
/* harmony import */ var _util_Oilincome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/Oilincome */ "./src/lib/items/util/Oilincome.ts");




var oreCounts = [
    _structures_Item__WEBPACK_IMPORTED_MODULE_2__["Item"].fromName('bloodCrystals').nav("shop" /* SHOP */),
    _util_Oilincome__WEBPACK_IMPORTED_MODULE_3__["oilIncomeDisplay"],
    _structures_Item__WEBPACK_IMPORTED_MODULE_2__["Item"].fromName('oil').nav("miningOres" /* MINING_MACHINERY */)
];
oreCounts.push.apply(oreCounts, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
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
], Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["range"])(1, 4).map(function (i) { return "geode" + i; })).map(function (n) { return _structures_Item__WEBPACK_IMPORTED_MODULE_2__["Item"].fromNameClick(n); })));


/***/ }),

/***/ "./src/lib/items/potions.ts":
/*!**********************************!*\
  !*** ./src/lib/items/potions.ts ***!
  \**********************************/
/*! exports provided: potionCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "potionCounts", function() { return potionCounts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts_potions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts/potions */ "./src/consts/potions.ts");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");








var potionCounts = _consts_potions__WEBPACK_IMPORTED_MODULE_4__["NON_COMBAT_POTIONS"].map(function (i) {
    var item = _structures_Item__WEBPACK_IMPORTED_MODULE_7__["Item"].fromName(i)
        .addOnClick(function () {
        _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_5__["GM"].unsafeWindow.clicksItem(i);
    });
    Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__["getGameValue"])(i)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (count) { return _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_5__["GM"].unsafeWindow.getPotionTimer(i) * 1000 * count; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (t) { return Object(moment__WEBPACK_IMPORTED_MODULE_1__["duration"])(t).humanize(); }))
        .subscribe(function (txt) {
        item.addSecondaryTooltip("Enough for " + txt);
    });
    return item;
});
potionCounts.push.apply(potionCounts, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_consts_potions__WEBPACK_IMPORTED_MODULE_4__["COMBAT_POTIONS"].map(function (potionName) {
    var item = _structures_Item__WEBPACK_IMPORTED_MODULE_7__["Item"].fromName(potionName).forceState('btn-light');
    var mobName$ = Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__["getGameValue"])('monsterName');
    var potUsed$ = Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__["getGameValue"])(potionName + "Used");
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(mobName$, potUsed$)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), mob = _b[0], used = _b[1];
        return !mob || mob === 'none' || !!used;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
        .subscribe(function (shouldDisable) {
        item.innerContainer.classList[shouldDisable ? 'add' : 'remove']('disabled');
    });
    return item;
})));


/***/ }),

/***/ "./src/lib/items/rares.ts":
/*!********************************!*\
  !*** ./src/lib/items/rares.ts ***!
  \********************************/
/*! exports provided: rareCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rareCounts", function() { return rareCounts; });
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");

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
].map(function (n) { return _structures_Item__WEBPACK_IMPORTED_MODULE_0__["Item"].fromNameClick(n).forceState('btn-success'); });


/***/ }),

/***/ "./src/lib/items/rawFood.ts":
/*!**********************************!*\
  !*** ./src/lib/items/rawFood.ts ***!
  \**********************************/
/*! exports provided: rawFoodCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rawFoodCounts", function() { return rawFoodCounts; });
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");


var rawFoodCounts = [
    'rawRainbowFish',
    'rawWhale',
    'rawShark',
    'rawSwordfish',
    'rawTuna',
    'rawChicken',
    'rawSardine',
    'rawShrimp'
].map(_structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromNameClick);
rawFoodCounts.unshift(_structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromName('heat').addOnClick(function () {
    _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_0__["GM"].unsafeWindow.clicksItem(_interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_0__["GM"].unsafeWindow.getOvenType());
}));
rawFoodCounts.unshift(_structures_Item__WEBPACK_IMPORTED_MODULE_1__["Item"].fromNameNav('bait', "cooking" /* COOKING */));


/***/ }),

/***/ "./src/lib/items/seeds.ts":
/*!********************************!*\
  !*** ./src/lib/items/seeds.ts ***!
  \********************************/
/*! exports provided: seedCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedCounts", function() { return seedCounts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _consts_seeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts/seeds */ "./src/consts/seeds.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _SeedTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SeedTimer */ "./src/lib/SeedTimer.ts");
/* harmony import */ var _structures_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structures/Item */ "./src/lib/structures/Item.ts");





var seedCounts = _consts_seeds__WEBPACK_IMPORTED_MODULE_1__["seedNames"]
    .map(function (n) { return _structures_Item__WEBPACK_IMPORTED_MODULE_4__["Item"].fromNameNav(n, "farming" /* FARMING */); });
seedCounts.push(_SeedTimer__WEBPACK_IMPORTED_MODULE_3__["seedTimer"]);
seedCounts.unshift.apply(seedCounts, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
    'fishBones',
    'bones',
    'ashes',
    'iceBones'
].map(function (n) { return _structures_Item__WEBPACK_IMPORTED_MODULE_4__["Item"].fromNameClick(n); })));
seedCounts.unshift(new _structures_Item__WEBPACK_IMPORTED_MODULE_4__["Item"]('bonemealBin.png', Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_2__["getGameValue"])('bonemeal')));


/***/ }),

/***/ "./src/lib/items/util/Oilincome.ts":
/*!*****************************************!*\
  !*** ./src/lib/items/util/Oilincome.ts ***!
  \*****************************************/
/*! exports provided: oilIncomeDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oilIncomeDisplay", function() { return oilIncomeDisplay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _fn_addStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fn/addStyle */ "./src/lib/fn/addStyle.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_ValuedMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../structures/ValuedMenuItem */ "./src/lib/structures/ValuedMenuItem.ts");








var OilIncomeDisplay = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OilIncomeDisplay, _super);
    function OilIncomeDisplay() {
        var _this = _super.call(this, '/images/oil_lighter.png') || this;
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_4__["addStyle"])(_this.root, _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_3__["GM"].getResourceText("bs_css" /* BS_CSS */));
        return _this;
    }
    OilIncomeDisplay.prototype.computeValue = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__["getGameValue"])('oilIn'), Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__["getGameValue"])('oilOut')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), $in = _b[0], $out = _b[1];
            return $in - $out;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    OilIncomeDisplay.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_6__["navigate"])("miningOres" /* MINING_MACHINERY */);
        };
    };
    OilIncomeDisplay.prototype.valueStringifier = function (value) {
        var label = value ? 'success' : 'danger';
        var sym = value ? '+' : '-';
        return "<span class=\"text-" + label + "\">" + (sym + (value || 0).toLocaleString()) + "</span>";
    };
    return OilIncomeDisplay;
}(_structures_ValuedMenuItem__WEBPACK_IMPORTED_MODULE_7__["ValuedMenuItem"]));
var oilIncomeDisplay = new OilIncomeDisplay();


/***/ }),

/***/ "./src/lib/structures/IconMenuItem.ts":
/*!********************************************!*\
  !*** ./src/lib/structures/IconMenuItem.ts ***!
  \********************************************/
/*! exports provided: IconMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMenuItem", function() { return IconMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-lazy-get-decorator */ "./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js");
/* harmony import */ var _fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/addCssClasses */ "./src/lib/fn/addCssClasses.ts");
/* harmony import */ var _fn_addStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fn/addStyle */ "./src/lib/fn/addStyle.ts");




var IconMenuItem = /** @class */ (function () {
    function IconMenuItem(imgUrl, label) {
        this.imgUrl = imgUrl;
        this.label = label || '';
        var onClick = this.getOnClick();
        if (onClick) {
            this.root.addEventListener('click', onClick);
        }
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_3__["addStyle"])(this.root, __webpack_require__(/*! ../styles/IconMenuItemBase.scss */ "./src/lib/styles/IconMenuItemBase.scss"));
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
            return Object(_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__["addCssClases"])('img', 'item');
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
            return Object(_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__["addCssClases"])('span', 'btn', 'btn-sm', 'btn-dark');
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
            return Object(_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__["addCssClases"])('span', 'item');
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__["LazyGetter"])()
    ], IconMenuItem.prototype, "container", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__["LazyGetter"])()
    ], IconMenuItem.prototype, "img", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__["LazyGetter"])()
    ], IconMenuItem.prototype, "innerContainer", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__["LazyGetter"])()
    ], IconMenuItem.prototype, "labelElement", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_1__["LazyGetter"])()
    ], IconMenuItem.prototype, "root", null);
    return IconMenuItem;
}());



/***/ }),

/***/ "./src/lib/structures/Item.ts":
/*!************************************!*\
  !*** ./src/lib/structures/Item.ts ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typescript-lazy-get-decorator */ "./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _fn_addStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/addStyle */ "./src/lib/fn/addStyle.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _fn_mkElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fn/mkElement */ "./src/lib/fn/mkElement.ts");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _ValuedMenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValuedMenuItem */ "./src/lib/structures/ValuedMenuItem.ts");










var replace = /\.(png|gif)$/g;
var Item = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Item, _super);
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
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_5__["addStyle"])(_this.root, _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_4__["GM"].getResourceText("tooltip_css" /* TOOLTIP_CSS */));
        _this.innerContainer.setAttribute('data-balloon-pos', 'up');
        _this.innerContainer.setAttribute('data-balloon', Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["startCase"])(asset.toString().replace(replace, '')));
        return _this;
    }
    Object.defineProperty(Item.prototype, "hideStyleEl", {
        get: function () {
            return Object(_fn_mkElement__WEBPACK_IMPORTED_MODULE_7__["mkElement"])('style', ':host{display:none!important}');
        },
        enumerable: true,
        configurable: true
    });
    Item.fromName = function (name) {
        return new Item(name + ".png", Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_6__["getGameValue"])(name));
    };
    Item.fromNameClick = function (name) {
        return Item.fromName(name).addOnClick(function () {
            _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_4__["GM"].unsafeWindow.clicksItem(name);
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
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(where);
        });
    };
    Item.prototype.shouldHideFromUI = function () {
        return this.valueOb$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(shouldHideFromUIMapper), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    Item.prototype.computeValue = function () {
        return this.valueOb$;
    };
    Item.prototype.addPointer = function () {
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_5__["addStyle"])(this.root, ':host{cursor:pointer}');
        this.addPointer = lodash_es__WEBPACK_IMPORTED_MODULE_1__["noop"];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_3__["LazyGetter"])()
    ], Item.prototype, "hideStyleEl", null);
    return Item;
}(_ValuedMenuItem__WEBPACK_IMPORTED_MODULE_9__["ValuedMenuItem"]));

function shouldHideFromUIMapper(num) {
    return num <= 0;
}


/***/ }),

/***/ "./src/lib/structures/PatchTimer.ts":
/*!******************************************!*\
  !*** ./src/lib/structures/PatchTimer.ts ***!
  \******************************************/
/*! exports provided: PatchTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchTimer", function() { return PatchTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fn_distinctUntilObjectChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fn/distinctUntilObjectChanged */ "./src/lib/fn/distinctUntilObjectChanged.ts");
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _TimerMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimerMenuItem */ "./src/lib/structures/TimerMenuItem.ts");







var PatchTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatchTimer, _super);
    function PatchTimer(imgUrl, prefix, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        _this.prefix = prefix;
        return _this;
    }
    PatchTimer.prototype.getAvailablePatches = function () {
        var _this = this;
        var o$ = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["range"])(1, 7).map(function (i) { return Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__["getGameValue"])(_this.prefix + "Unlocked" + i); });
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](o$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (unlockStates) {
            var out = [];
            for (var i = 0; i < unlockStates.length; i++) {
                if (unlockStates[i]) {
                    out.push(i + 1);
                }
            }
            return out;
        }), Object(_fn_distinctUntilObjectChanged__WEBPACK_IMPORTED_MODULE_4__["distinctUntilObjectChanged"])());
    };
    PatchTimer.prototype.computeValue = function () {
        var _this = this;
        return this.getAvailablePatches().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (indices) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](indices.map(function (i) { return Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_5__["getGameValue"])(_this.prefix + "Timer" + i); })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (allTimes) {
            var filteredTimes = allTimes.map(timeFn).filter(filterInvalids);
            return filteredTimes.length ? Math.min.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](filteredTimes)) : -1;
        }));
    };
    return PatchTimer;
}(_TimerMenuItem__WEBPACK_IMPORTED_MODULE_6__["TimerMenuItem"]));

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


/***/ }),

/***/ "./src/lib/structures/ReadiableMenuItem.ts":
/*!*************************************************!*\
  !*** ./src/lib/structures/ReadiableMenuItem.ts ***!
  \*************************************************/
/*! exports provided: ReadiableMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadiableMenuItem", function() { return ReadiableMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ValuedMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValuedMenuItem */ "./src/lib/structures/ValuedMenuItem.ts");



var ReadiableMenuItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReadiableMenuItem, _super);
    function ReadiableMenuItem(imgUrl, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        var classes = _this.innerContainer.classList;
        _this.isReady().subscribe(function (ready) {
            if (ready) {
                classes.remove('btn-dark');
                classes.add.apply(classes, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.getReadyClasses()));
            }
            else {
                classes.remove.apply(classes, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.getReadyClasses()));
                classes.add('btn-dark');
            }
        });
        return _this;
    }
    ReadiableMenuItem.prototype.isReady = function () {
        return this.getValueObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.readyMapper, this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    };
    ReadiableMenuItem.prototype.getReadyClasses = function () {
        return ['btn-success'];
    };
    return ReadiableMenuItem;
}(_ValuedMenuItem__WEBPACK_IMPORTED_MODULE_2__["ValuedMenuItem"]));



/***/ }),

/***/ "./src/lib/structures/TimerMenuItem.ts":
/*!*********************************************!*\
  !*** ./src/lib/structures/TimerMenuItem.ts ***!
  \*********************************************/
/*! exports provided: TimerMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerMenuItem", function() { return TimerMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "lodash-es");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadiableMenuItem */ "./src/lib/structures/ReadiableMenuItem.ts");




var TimerMenuItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimerMenuItem, _super);
    function TimerMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerMenuItem.format = function (v) {
        return Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["padStart"])(v.toString(), 2, '0');
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
                var m = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(millis);
                var oot = [m.hours(), m.minutes(), m.seconds()];
                var days = m.days();
                if (days) {
                    oot.unshift(days);
                }
                return oot.map(TimerMenuItem.format).join(':');
        }
    };
    return TimerMenuItem;
}(_ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_3__["ReadiableMenuItem"]));



/***/ }),

/***/ "./src/lib/structures/ValuedMenuItem.ts":
/*!**********************************************!*\
  !*** ./src/lib/structures/ValuedMenuItem.ts ***!
  \**********************************************/
/*! exports provided: ValuedMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuedMenuItem", function() { return ValuedMenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typescript-lazy-get-decorator */ "./node_modules/typescript-lazy-get-decorator/esm5/LazyGetter.js");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _fn_addCssClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fn/addCssClasses */ "./src/lib/fn/addCssClasses.ts");
/* harmony import */ var _fn_addStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fn/addStyle */ "./src/lib/fn/addStyle.ts");
/* harmony import */ var _fn_distinctUntilObjectChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fn/distinctUntilObjectChanged */ "./src/lib/fn/distinctUntilObjectChanged.ts");
/* harmony import */ var _fn_mkSpan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fn/mkSpan */ "./src/lib/fn/mkSpan.ts");
/* harmony import */ var _IconMenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconMenuItem */ "./src/lib/structures/IconMenuItem.ts");










var _value = Symbol('value');
var ValuedMenuItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ValuedMenuItem, _super);
    function ValuedMenuItem(imgUrl, label) {
        var _this = _super.call(this, imgUrl, label) || this;
        _this.innerContainer.appendChild(_this.valueElement);
        Object(_fn_addStyle__WEBPACK_IMPORTED_MODULE_6__["addStyle"])(_this.root, _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_4__["GM"].getResourceText("bs_css" /* BS_CSS */));
        _this.initTextObservable()
            .subscribe(function (value) {
            _this.valueElement.innerHTML = value;
        });
        setTimeout(function () {
            var initialValue = _this.computeValue();
            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(initialValue)) {
                initialValue
                    .pipe(Object(_fn_distinctUntilObjectChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilObjectChanged"])())
                    .subscribe(function (v) {
                    _this.value = v;
                });
            }
            else {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.computeValue(); }), Object(_fn_distinctUntilObjectChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilObjectChanged"])())
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
            return Object(_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_5__["addCssClases"])(Object(_fn_mkSpan__WEBPACK_IMPORTED_MODULE_8__["mkSpan"])('??'), 'item');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValuedMenuItem.prototype, _a = _value, {
        get: function () {
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        },
        enumerable: true,
        configurable: true
    });
    ValuedMenuItem.prototype.getValueObservable = function () {
        return this[_value].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    };
    ValuedMenuItem.prototype.initTextObservable = function () {
        return this.getValueObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.valueStringifier, this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('??'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    ValuedMenuItem.prototype.valueStringifier = function (value) {
        //tslint:disable-next-line:triple-equals
        return value == null ? '??' : value.toLocaleString();
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_3__["LazyGetter"])()
    ], ValuedMenuItem.prototype, "valueElement", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(typescript_lazy_get_decorator__WEBPACK_IMPORTED_MODULE_3__["LazyGetter"])()
    ], ValuedMenuItem.prototype, _a, null);
    return ValuedMenuItem;
}(_IconMenuItem__WEBPACK_IMPORTED_MODULE_9__["IconMenuItem"]));



/***/ }),

/***/ "./src/lib/styles/IconMenuItemBase.scss":
/*!**********************************************!*\
  !*** ./src/lib/styles/IconMenuItemBase.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{background:transparent;display:inline-block;font-size:12px;margin-top:5px;margin-bottom:5px}img.item{height:1em;width:1em}.item{display:inline-block;margin-left:3.33px}.item:first-child,.item:empty:not(input){margin-left:0}span.item:empty{display:none}\n"

/***/ }),

/***/ "./src/lib/styles/main-menu.scss":
/*!***************************************!*\
  !*** ./src/lib/styles/main-menu.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{display:block;background:rgba(0,0,0,0.5);padding:5px;border-radius:5px}hr{margin:0;border-width:1px 0 0 0;border-color:#fff}ul.inline{padding-left:0;margin-top:5px;margin-bottom:5px;margin-left:-5px;list-style:none}ul.inline>li{display:inline-block;padding-right:5px;padding-left:5px}@media (min-width: 1000px){:host{position:fixed;top:5px;left:5px;width:230px;box-shadow:2px 2px 10px 0 #000;background:rgba(0,0,0,0.2);border:1px ridge silver}}@media (min-width: 1100px){:host{width:280px}}@media (min-width: 1200px){:host{width:330px}}@media (min-width: 1300px){:host{width:380px}}@media (min-width: 1400px){:host{width:430px}}@media (min-width: 1500px){:host{width:480px}}@media (min-width: 1600px){:host{width:530px}}@media (min-width: 1700px){:host{width:580px}}@media (min-width: 1800px){:host{width:630px}}@media (min-width: 1900px){:host{width:680px}}\n"

/***/ }),

/***/ "./src/lib/timers/crafting.ts":
/*!************************************!*\
  !*** ./src/lib/timers/crafting.ts ***!
  \************************************/
/*! exports provided: craftingTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "craftingTimer", function() { return craftingTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../structures/ReadiableMenuItem */ "./src/lib/structures/ReadiableMenuItem.ts");






var CraftingTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CraftingTimer, _super);
    function CraftingTimer() {
        return _super.call(this, '/images/craftingSkill.png') || this;
    }
    CraftingTimer.prototype.computeValue = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_3__["getGameValue"])('smeltingCurrentOreTo'), Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_3__["getGameValue"])('smeltingCurrentOreAt'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), to = _b[0], at = _b[1];
            return to - at;
        }));
    };
    CraftingTimer.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])("crafting" /* CRAFTING */);
        };
    };
    CraftingTimer.prototype.readyMapper = function (value) {
        return value === 0;
    };
    CraftingTimer.prototype.valueStringifier = function (value) {
        return value === -1 ? '??' : this.readyMapper(value) ? 'ready' : _super.prototype.valueStringifier.call(this, value);
    };
    return CraftingTimer;
}(_structures_ReadiableMenuItem__WEBPACK_IMPORTED_MODULE_5__["ReadiableMenuItem"]));
var craftingTimer = new CraftingTimer();


/***/ }),

/***/ "./src/lib/timers/exploring.ts":
/*!*************************************!*\
  !*** ./src/lib/timers/exploring.ts ***!
  \*************************************/
/*! exports provided: explorationTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explorationTimer", function() { return explorationTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fn_getGameValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fn/getGameValue */ "./src/lib/fn/getGameValue.ts");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _fn_times1k__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fn/times1k */ "./src/lib/fn/times1k.ts");
/* harmony import */ var _structures_TimerMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../structures/TimerMenuItem */ "./src/lib/structures/TimerMenuItem.ts");






var ExplorationTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExplorationTimer, _super);
    function ExplorationTimer() {
        return _super.call(this, '/images/exploringSkill.png') || this;
    }
    ExplorationTimer.prototype.computeValue = function () {
        return Object(_fn_getGameValue__WEBPACK_IMPORTED_MODULE_2__["getGameValue"])('explorerCooldown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_fn_times1k__WEBPACK_IMPORTED_MODULE_4__["times1k"]));
    };
    ExplorationTimer.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_3__["navigate"])("exploring" /* EXPLORATION */);
        };
    };
    return ExplorationTimer;
}(_structures_TimerMenuItem__WEBPACK_IMPORTED_MODULE_5__["TimerMenuItem"]));
var explorationTimer = new ExplorationTimer();


/***/ }),

/***/ "./src/lib/timers/farming.ts":
/*!***********************************!*\
  !*** ./src/lib/timers/farming.ts ***!
  \***********************************/
/*! exports provided: farmingTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "farmingTimer", function() { return farmingTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_PatchTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/PatchTimer */ "./src/lib/structures/PatchTimer.ts");



var FarmingTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FarmingTimer, _super);
    function FarmingTimer() {
        return _super.call(this, '/images/farmingSkill.png', 'farm') || this;
    }
    FarmingTimer.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])("farming" /* FARMING */);
        };
    };
    return FarmingTimer;
}(_structures_PatchTimer__WEBPACK_IMPORTED_MODULE_2__["PatchTimer"]));
var farmingTimer = new FarmingTimer();


/***/ }),

/***/ "./src/lib/timers/woodcutting.ts":
/*!***************************************!*\
  !*** ./src/lib/timers/woodcutting.ts ***!
  \***************************************/
/*! exports provided: woodcuttingTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "woodcuttingTimer", function() { return woodcuttingTimer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fn_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _structures_PatchTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/PatchTimer */ "./src/lib/structures/PatchTimer.ts");



var WoodcuttingTimer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WoodcuttingTimer, _super);
    function WoodcuttingTimer() {
        return _super.call(this, '/images/woodcuttingSkill.png', 'tree') || this;
    }
    WoodcuttingTimer.prototype.getOnClick = function () {
        return function () {
            Object(_fn_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])("woodcutting" /* WOODCUTTING */);
        };
    };
    return WoodcuttingTimer;
}(_structures_PatchTimer__WEBPACK_IMPORTED_MODULE_2__["PatchTimer"]));
var woodcuttingTimer = new WoodcuttingTimer();


/***/ }),

/***/ "./src/postLogin.ts":
/*!**************************!*\
  !*** ./src/postLogin.ts ***!
  \**************************/
/*! exports provided: initUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUI", function() { return initUI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/greasemonkey */ "./src/interfaces/greasemonkey.ts");
/* harmony import */ var _lib_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fn/addCssClasses */ "./src/lib/fn/addCssClasses.ts");
/* harmony import */ var _lib_fn_insertAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/fn/insertAfter */ "./src/lib/fn/insertAfter.ts");
/* harmony import */ var _lib_fn_mkElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/fn/mkElement */ "./src/lib/fn/mkElement.ts");
/* harmony import */ var _lib_fn_mkList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/fn/mkList */ "./src/lib/fn/mkList.ts");
/* harmony import */ var _lib_fn_mkSpan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/fn/mkSpan */ "./src/lib/fn/mkSpan.ts");
/* harmony import */ var _lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/fn/navigate */ "./src/lib/fn/navigate.ts");
/* harmony import */ var _lib_items_bars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/items/bars */ "./src/lib/items/bars.ts");
/* harmony import */ var _lib_items_bonez__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/items/bonez */ "./src/lib/items/bonez.ts");
/* harmony import */ var _lib_items_cookedFood__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/items/cookedFood */ "./src/lib/items/cookedFood.ts");
/* harmony import */ var _lib_items_exploringGoodies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/items/exploringGoodies */ "./src/lib/items/exploringGoodies.ts");
/* harmony import */ var _lib_items_herbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/items/herbs */ "./src/lib/items/herbs.ts");
/* harmony import */ var _lib_items_logs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/items/logs */ "./src/lib/items/logs.ts");
/* harmony import */ var _lib_items_ores__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/items/ores */ "./src/lib/items/ores.ts");
/* harmony import */ var _lib_items_potions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/items/potions */ "./src/lib/items/potions.ts");
/* harmony import */ var _lib_items_rares__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/items/rares */ "./src/lib/items/rares.ts");
/* harmony import */ var _lib_items_rawFood__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/items/rawFood */ "./src/lib/items/rawFood.ts");
/* harmony import */ var _lib_items_seeds__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/items/seeds */ "./src/lib/items/seeds.ts");
/* harmony import */ var _lib_timers_crafting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/timers/crafting */ "./src/lib/timers/crafting.ts");
/* harmony import */ var _lib_timers_exploring__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/timers/exploring */ "./src/lib/timers/exploring.ts");
/* harmony import */ var _lib_timers_farming__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/timers/farming */ "./src/lib/timers/farming.ts");
/* harmony import */ var _lib_timers_woodcutting__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/timers/woodcutting */ "./src/lib/timers/woodcutting.ts");























var dashboard = document.createElement('div');
var mkList = Object(_lib_fn_mkList__WEBPACK_IMPORTED_MODULE_5__["createMkListFn"])(dashboard);
mkList(_lib_timers_exploring__WEBPACK_IMPORTED_MODULE_20__["explorationTimer"], _lib_timers_crafting__WEBPACK_IMPORTED_MODULE_19__["craftingTimer"], _lib_timers_woodcutting__WEBPACK_IMPORTED_MODULE_22__["woodcuttingTimer"], _lib_timers_farming__WEBPACK_IMPORTED_MODULE_21__["farmingTimer"]);
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_rares__WEBPACK_IMPORTED_MODULE_16__["rareCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_ores__WEBPACK_IMPORTED_MODULE_14__["oreCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_seeds__WEBPACK_IMPORTED_MODULE_18__["seedCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_bonez__WEBPACK_IMPORTED_MODULE_9__["boneCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_bars__WEBPACK_IMPORTED_MODULE_8__["barCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_logs__WEBPACK_IMPORTED_MODULE_13__["logCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_herbs__WEBPACK_IMPORTED_MODULE_12__["herbCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_potions__WEBPACK_IMPORTED_MODULE_15__["potionCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_rawFood__WEBPACK_IMPORTED_MODULE_17__["rawFoodCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_cookedFood__WEBPACK_IMPORTED_MODULE_10__["cookedFoodCounts"]));
mkList.apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_lib_items_exploringGoodies__WEBPACK_IMPORTED_MODULE_11__["exploringGoodies"]));
function initUI(el) {
    Object(_lib_fn_insertAfter__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])(dashboard, el);
}
try {
    var script = _interfaces_greasemonkey__WEBPACK_IMPORTED_MODULE_1__["GM"].info.script;
    var version = script.version, name_1 = script.name, homepage = script.homepage;
    mkList.root.appendChild(document.createElement('hr'));
    var container = Object(_lib_fn_addCssClasses__WEBPACK_IMPORTED_MODULE_2__["addCssClases"])('div', 'text-center', 'small');
    container.appendChild(Object(_lib_fn_mkSpan__WEBPACK_IMPORTED_MODULE_6__["mkSpan"])(name_1 + " v" + version + " by "));
    var a = Object(_lib_fn_mkElement__WEBPACK_IMPORTED_MODULE_4__["mkElement"])('a', 'Alorel');
    a.href = homepage;
    a.target = '_blank';
    container.appendChild(a);
    mkList.root.appendChild(container);
}
catch (_a) {
    //noop
}
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("woodcutting" /* WOODCUTTING */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("farming" /* FARMING */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("exploring" /* EXPLORATION */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("mining" /* MINING */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("cooking" /* COOKING */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("crafting" /* CRAFTING */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("main" /* MAIN */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("brew" /* BREW */);
Object(_lib_fn_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])("brewing" /* BREWING */);


/***/ }),

/***/ "lodash-es":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rxjs;

/***/ }),

/***/ "rxjs/operators":
/*!*************************************!*\
  !*** external ["rxjs","operators"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rxjs["operators"];

/***/ })

/******/ });