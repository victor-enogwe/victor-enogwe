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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9lbm9nd2UudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW9uLXJhaWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsa0dBQStEO0FBQy9ELHVFQVFvQjtBQUdQLGNBQU0sR0FBRyxVQUFDLEtBQVU7SUFDckIscUJBQUksRUFBVSx3QkFBSyxDQUFZO0lBQ2pDLGtDQUFxQyxFQUFwQyxjQUFNLEVBQUUsaUJBQTRCLENBQUM7SUFDNUMsSUFBTSxNQUFNLEdBQUcsY0FBTSxnQkFBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQWxCLENBQWtCLENBQUM7SUFDeEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFTO1FBQ3ZCLE9BQU8sQ0FDSCxnQ0FBQyxvQkFBTyxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzNDLGdDQUFDLG9CQUFPLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVcsQ0FDcEcsQ0FDYjtJQUNMLENBQUMsQ0FBQztJQUNGLElBQU0sSUFBSSxHQUFHLGNBQU0sUUFDZixnQ0FBQyxrQkFBUTtRQUNMLGdDQUFDLDBCQUFhLElBQUMsT0FBTyxFQUFFLE1BQU0sR0FBSTtRQUNsQyxnQ0FBQyxxQkFBUSxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUk7WUFDbEMsZ0NBQUMsZ0JBQUcsSUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLElBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLEVBQUUsS0FBYSxJQUFLLHVDQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUksRUFBcEMsQ0FBb0MsQ0FBQyxDQUM1RSxDQUNDLENBQ0osQ0FDZCxFQVRrQixDQVNsQjtJQUVELE9BQU8sQ0FDSDtRQUNJLGdDQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQzFDLGdDQUFDLHdCQUFXLElBQUMsSUFBSSxFQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFlO1lBQy9DLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFDLElBQUksT0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzFCLENBQ1AsQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRixxR0FBdUM7QUFDdkMsb0dBQXlDO0FBQ3pDLGdIQUFtRDtBQUVuRCxJQUFNLEdBQUcsR0FBRyxVQUFDLEtBQVUsSUFBSyx1Q0FBQyxlQUFNLGVBQUssS0FBSyxFQUFJLEVBQXJCLENBQXFCO0FBQ2pELHdCQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxPQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTi9CLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImZyb250ZW5kL2pzL2Vub2d3ZS1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Zyb250ZW5kL2Vub2d3ZS50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG4gICAgQ29sbGFwc2UsXG4gICAgTmF2LFxuICAgIE5hdmJhcixcbiAgICBOYXZiYXJCcmFuZCxcbiAgICBOYXZiYXJUb2dnbGVyLFxuICAgIE5hdkl0ZW0sXG4gICAgTmF2TGlua1xufSBmcm9tICdyZWFjdHN0cmFwJztcbi8vIGltcG9ydCAnLi9OYXZCYXIuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgc2l0ZSwgbWVudTogeyBpdGVtcyB9IH0gPSBwcm9wc1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIGNvbnN0IE1lbnVJdGVtID0gKHByb3A6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPXtwcm9wLml0ZW0uY2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRhcmdldD17cHJvcC5pdGVtLnRhcmdldH0gaHJlZj17cHJvcC5pdGVtLnVybH0gdGl0bGU9e3Byb3AuaXRlbS50aXRsZX0+e3Byb3AuaXRlbS5uYW1lfTwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKVxuICAgIH07XG4gICAgY29uc3QgTWVudSA9ICgpID0+IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gPE1lbnVJdGVtIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IC8+KX1cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJsaWdodFwiIGxpZ2h0PXt0cnVlfSBleHBhbmQ9XCJtZFwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPntzaXRlLnRpdGxlfTwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aCA/IDxNZW51IC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgUmVhY3RPblJhaWxzIGZyb20gJ3JlYWN0LW9uLXJhaWxzJ1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInXG5cbmNvbnN0IE5hdiA9IChwcm9wczogYW55KSA9PiA8TmF2QmFyIHsuLi5wcm9wc30gLz5cblJlYWN0T25SYWlscy5yZWdpc3Rlcih7IE5hdiB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3b3JkcHJlc3MvZWxlbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vbi1yYWlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=