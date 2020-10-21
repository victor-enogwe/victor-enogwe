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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/enogwe.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/components/NavBar/NavBar.tsx":
/*!***********************************************!*\
  !*** ./frontend/components/NavBar/NavBar.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = __importStar(__webpack_require__(/*! @wordpress/element */ "@wordpress/element"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
exports.NavBar = function (props) {
    var site = props.site, items = props.menu.items;
    var _a = element_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggle = function () { return setIsOpen(!isOpen); };
    var MenuItem = function (prop) {
        return (element_1.default.createElement(reactstrap_1.NavItem, { className: prop.item.classes.join(' ') },
            element_1.default.createElement(reactstrap_1.NavLink, { target: prop.item.target, href: prop.item.url, title: prop.item.title }, prop.item.name)));
    };
    var Menu = function () { return (element_1.default.createElement(element_1.Fragment, null,
        element_1.default.createElement(reactstrap_1.NavbarToggler, { onClick: toggle }),
        element_1.default.createElement(reactstrap_1.Collapse, { isOpen: isOpen, navbar: true },
            element_1.default.createElement(reactstrap_1.Nav, { className: "mr-auto", navbar: true }, items.map(function (item, index) { return element_1.default.createElement(MenuItem, { item: item, key: index }); }))))); };
    return (element_1.default.createElement("div", null,
        element_1.default.createElement(reactstrap_1.Navbar, { color: "light", light: true, expand: "md" },
            element_1.default.createElement(reactstrap_1.NavbarBrand, { href: "/" }, site.title),
            items.length ? element_1.default.createElement(Menu, null) : null)));
};


/***/ }),

/***/ "./frontend/enogwe.tsx":
/*!*****************************!*\
  !*** ./frontend/enogwe.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = __importDefault(__webpack_require__(/*! @wordpress/element */ "@wordpress/element"));
var react_on_rails_1 = __importDefault(__webpack_require__(/*! react-on-rails */ "react-on-rails"));
var NavBar_1 = __webpack_require__(/*! ./components/NavBar/NavBar */ "./frontend/components/NavBar/NavBar.tsx");
var Nav = function (props) { return element_1.default.createElement(NavBar_1.NavBar, __assign({}, props)); };
react_on_rails_1.default.register({ Nav: Nav });


/***/ }),

/***/ "@wordpress/element":
/*!*************************************!*\
  !*** external "@wordpress/element" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wordpress/element");

/***/ }),

/***/ "react-on-rails":
/*!*********************************!*\
  !*** external "react-on-rails" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-on-rails");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9lbm9nd2UudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW9uLXJhaWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsa0dBQStEO0FBQy9ELHVFQVFvQjtBQUdQLGNBQU0sR0FBRyxVQUFDLEtBQVU7SUFDckIscUJBQUksRUFBVSx3QkFBSyxDQUFZO0lBQ2pDLGtDQUFxQyxFQUFwQyxjQUFNLEVBQUUsaUJBQTRCLENBQUM7SUFDNUMsSUFBTSxNQUFNLEdBQUcsY0FBTSxnQkFBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQWxCLENBQWtCLENBQUM7SUFDeEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFTO1FBQ3ZCLE9BQU8sQ0FDSCxnQ0FBQyxvQkFBTyxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzNDLGdDQUFDLG9CQUFPLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsQ0FDcEcsQ0FDYjtJQUNMLENBQUMsQ0FBQztJQUNGLElBQU0sSUFBSSxHQUFHLGNBQU0sUUFDZixnQ0FBQyxrQkFBUTtRQUNMLGdDQUFDLDBCQUFhLElBQUMsT0FBTyxFQUFFLE1BQU0sR0FBSTtRQUNsQyxnQ0FBQyxxQkFBUSxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7WUFDbEMsZ0NBQUMsZ0JBQUcsSUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLElBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLEVBQUUsS0FBYSxJQUFLLHVDQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUksRUFBcEMsQ0FBb0MsQ0FBQyxDQUM1RSxDQUNDLENBQ0osQ0FDZCxFQVRrQixDQVNsQjtJQUVELE9BQU8sQ0FDSDtRQUNJLGdDQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQzFDLGdDQUFDLHdCQUFXLElBQUMsSUFBSSxFQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFlO1lBQy9DLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFDLElBQUksT0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzFCLENBQ1AsQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRixxR0FBdUM7QUFDdkMsb0dBQXlDO0FBQ3pDLGdIQUFtRDtBQUVuRCxJQUFNLEdBQUcsR0FBRyxVQUFDLEtBQVUsSUFBSyx1Q0FBQyxlQUFNLGVBQUssS0FBSyxFQUFJLEVBQXJCLENBQXFCO0FBQ2pELHdCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxPQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTi9CLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImZyb250ZW5kL2pzL2Vub2d3ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbnRlbmQvZW5vZ3dlLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHtcbiAgICBDb2xsYXBzZSxcbiAgICBOYXYsXG4gICAgTmF2YmFyLFxuICAgIE5hdmJhckJyYW5kLFxuICAgIE5hdmJhclRvZ2dsZXIsXG4gICAgTmF2SXRlbSxcbiAgICBOYXZMaW5rXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gaW1wb3J0ICcuL05hdkJhci5zY3NzJztcblxuZXhwb3J0IGNvbnN0IE5hdkJhciA9IChwcm9wczogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzaXRlLCBtZW51OiB7IGl0ZW1zIH0gfSA9IHByb3BzXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgY29uc3QgTWVudUl0ZW0gPSAocHJvcDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9e3Byb3AuaXRlbS5jbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdGFyZ2V0PXtwcm9wLml0ZW0udGFyZ2V0fSBocmVmPXtwcm9wLml0ZW0udXJsfSB0aXRsZT17cHJvcC5pdGVtLnRpdGxlfT57cHJvcC5pdGVtLm5hbWV9PC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApXG4gICAgfTtcbiAgICBjb25zdCBNZW51ID0gKCkgPT4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiA8TWVudUl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpbmRleH0gLz4pfVxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQ9e3RydWV9IGV4cGFuZD1cIm1kXCI+XG4gICAgICAgICAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+e3NpdGUudGl0bGV9PC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID8gPE1lbnUgLz4gOiBudWxsfVxuICAgICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCBSZWFjdE9uUmFpbHMgZnJvbSAncmVhY3Qtb24tcmFpbHMnXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhcidcblxuY29uc3QgTmF2ID0gKHByb3BzOiBhbnkpID0+IDxOYXZCYXIgey4uLnByb3BzfSAvPlxuUmVhY3RPblJhaWxzLnJlZ2lzdGVyKHsgTmF2IH0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdvcmRwcmVzcy9lbGVtZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW9uLXJhaWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==