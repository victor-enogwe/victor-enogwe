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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin/settings/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin/settings/components/Settings.tsx":
/*!************************************************!*\
  !*** ./admin/settings/components/Settings.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
var React = __importStar(__webpack_require__(/*! react */ "react"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
var constants_1 = __webpack_require__(/*! ../constants */ "./admin/settings/constants.ts");
var SettingsPage_1 = __webpack_require__(/*! ./SettingsPage */ "./admin/settings/components/SettingsPage.tsx");
var SettingsSIdebar_1 = __webpack_require__(/*! ./SettingsSIdebar */ "./admin/settings/components/SettingsSIdebar.tsx");
function Settings(props) {
    return (React.createElement(reactstrap_1.Row, { noGutters: true, className: classnames_1.default('flex-fill', 'flex-grow-1') },
        React.createElement(reactstrap_1.Col, { md: "3", className: classnames_1.default('card', 'p-0', 'border-0', 'bg-light', 'd-none', 'd-md-block') },
            React.createElement(reactstrap_1.CardHeader, null,
                React.createElement(reactstrap_1.CardTitle, { className: classnames_1.default('d-flex', 'mb-0') },
                    React.createElement(components_1.IconButton, { isLink: true, isSmall: true, icon: "menu", size: 29, className: classnames_1.default('border-0', 'shadow-none') }),
                    i18n_1.__('Theme Settings'))),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement(SettingsSIdebar_1.SettingsSidebar, { tabNames: constants_1.tabNames, tabIcons: constants_1.tabIcons, activeSidebarMenu: props.page }))),
        React.createElement(SettingsPage_1.SettingsPage, { page: props.page })));
}
exports.Settings = Settings;


/***/ }),

/***/ "./admin/settings/components/SettingsApp.tsx":
/*!***************************************************!*\
  !*** ./admin/settings/components/SettingsApp.tsx ***!
  \***************************************************/
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
var store_1 = __webpack_require__(/*! ../store */ "./admin/settings/store/index.ts");
var effects_1 = __webpack_require__(/*! ../store/effects */ "./admin/settings/store/effects.ts");
var state_1 = __webpack_require__(/*! ../store/state */ "./admin/settings/store/state.ts");
var Settings_1 = __webpack_require__(/*! ./Settings */ "./admin/settings/components/Settings.tsx");
exports.StateContext = element_1.createContext(state_1.State);
function App() {
    var _a = element_1.useState(state_1.State), state = _a[0], setState = _a[1];
    element_1.useEffect(function () {
        var storeSubscription = store_1.settingsStore.subscribe(function () { return setState(__assign(__assign({}, state), store_1.settingsStore.getState())); });
        return storeSubscription;
    });
    return (React.createElement(exports.StateContext.Provider, { value: state },
        state.api.settings === 'loading' && React.createElement(components_1.Spinner, null),
        React.createElement(reactstrap_1.Container, null,
            React.createElement(Settings_1.Settings, { page: state.sidebar.activeSidebarMenu }))));
}
function SettingsApp() {
    element_1.useEffect(function () {
        effects_1.getSettings().catch(function (error) { return error; });
    });
    return React.createElement(App, null);
}
exports.SettingsApp = SettingsApp;


/***/ }),

/***/ "./admin/settings/components/SettingsAssetsPage.tsx":
/*!**********************************************************!*\
  !*** ./admin/settings/components/SettingsAssetsPage.tsx ***!
  \**********************************************************/
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
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var actions_1 = __webpack_require__(/*! ../store/actions */ "./admin/settings/store/actions.ts");
var effects_1 = __webpack_require__(/*! ../store/effects */ "./admin/settings/store/effects.ts");
var settings_1 = __webpack_require__(/*! ../styles/settings */ "./admin/settings/styles/settings.ts");
var SettingsApp_1 = __webpack_require__(/*! ./SettingsApp */ "./admin/settings/components/SettingsApp.tsx");
var SettingsUploadImage_1 = __webpack_require__(/*! ./SettingsUploadImage */ "./admin/settings/components/SettingsUploadImage.tsx");
function SettingsAssetsPage() {
    var assets = element_1.useContext(SettingsApp_1.StateContext).assets;
    var logo = assets && assets.logo;
    var favicon = assets && assets.favicon;
    var picture = assets && assets.picture;
    return (React.createElement("div", { style: settings_1.settingStyles.assetPage },
        React.createElement(components_1.Panel, null,
            React.createElement(components_1.PanelBody, { initialOpen: true, title: "LOGO" },
                React.createElement(components_1.PanelRow, null,
                    React.createElement(SettingsUploadImage_1.SettingsUploadImage, { label: "Logo", onClick: effects_1.handleMediaUpload(actions_1.UPLOAD_LOGO), onDelete: effects_1.handleMediaDelete(actions_1.DELETE_LOGO), media: logo })))),
        React.createElement(components_1.Panel, null,
            React.createElement(components_1.PanelBody, { initialOpen: false, title: "FAVICON" },
                React.createElement(components_1.PanelRow, null,
                    React.createElement(SettingsUploadImage_1.SettingsUploadImage, { label: "Favicon", onClick: effects_1.handleMediaUpload(actions_1.UPLOAD_FAVICON), onDelete: effects_1.handleMediaDelete(actions_1.DELETE_FAVICON), media: favicon })))),
        React.createElement(components_1.Panel, null,
            React.createElement(components_1.PanelBody, { initialOpen: false, title: "PROFILE PICTURE" },
                React.createElement(components_1.PanelRow, null,
                    React.createElement(SettingsUploadImage_1.SettingsUploadImage, { label: "Picture", onClick: effects_1.handleMediaUpload(actions_1.UPLOAD_PICTURE), onDelete: effects_1.handleMediaDelete(actions_1.DELETE_PICTURE), media: picture }))))));
}
exports.SettingsAssetsPage = SettingsAssetsPage;


/***/ }),

/***/ "./admin/settings/components/SettingsLayoutPage.tsx":
/*!**********************************************************!*\
  !*** ./admin/settings/components/SettingsLayoutPage.tsx ***!
  \**********************************************************/
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
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var React = __importStar(__webpack_require__(/*! react */ "react"));
function SettingsLayoutPage() {
    return (React.createElement(element_1.Fragment, null));
}
exports.SettingsLayoutPage = SettingsLayoutPage;


/***/ }),

/***/ "./admin/settings/components/SettingsPage.tsx":
/*!****************************************************!*\
  !*** ./admin/settings/components/SettingsPage.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
var React = __importStar(__webpack_require__(/*! react */ "react"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
var store_1 = __webpack_require__(/*! ../store */ "./admin/settings/store/index.ts");
var effects_1 = __webpack_require__(/*! ../store/effects */ "./admin/settings/store/effects.ts");
var SettingsApp_1 = __webpack_require__(/*! ./SettingsApp */ "./admin/settings/components/SettingsApp.tsx");
var SettingsAssetsPage_1 = __webpack_require__(/*! ./SettingsAssetsPage */ "./admin/settings/components/SettingsAssetsPage.tsx");
var SettingsLayoutPage_1 = __webpack_require__(/*! ./SettingsLayoutPage */ "./admin/settings/components/SettingsLayoutPage.tsx");
function SettingsPage(props) {
    var _a = element_1.useContext(SettingsApp_1.StateContext), active = _a.maintenance.active, loading = _a.api.settings;
    var isBusy = loading === 'loading';
    var setState = function () { return effects_1.saveSettings(store_1.settingsStore.getState()); };
    var pages = {
        Assets: React.createElement(SettingsAssetsPage_1.SettingsAssetsPage, null),
        Layouts: React.createElement(SettingsLayoutPage_1.SettingsLayoutPage, null)
    };
    var Page = pages[props.page];
    return (React.createElement(reactstrap_1.Col, { md: "9", className: classnames_1.default('card', 'p-0', 'border-left-0') },
        React.createElement(reactstrap_1.CardHeader, { className: classnames_1.default('d-flex', 'justify-content-between', 'align-items-center') },
            React.createElement(reactstrap_1.CardTitle, { className: classnames_1.default('d-none', 'd-md-block', 'mb-n1') }, props.page),
            React.createElement("div", { className: "mb-n3" },
                React.createElement(components_1.ToggleControl, { label: i18n_1.__('Maintenance', 'enogwe'), checked: active, onChange: effects_1.toggleMaintenance })),
            React.createElement(components_1.Button, { isBusy: isBusy, disabled: isBusy, isPrimary: true, label: i18n_1.__('Save  Settings', 'enogwe'), onClick: setState }, "Save Settings")),
        React.createElement(reactstrap_1.CardBody, null, Page)));
}
exports.SettingsPage = SettingsPage;


/***/ }),

/***/ "./admin/settings/components/SettingsSIdebar.tsx":
/*!*******************************************************!*\
  !*** ./admin/settings/components/SettingsSIdebar.tsx ***!
  \*******************************************************/
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
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
var store_1 = __webpack_require__(/*! ../store */ "./admin/settings/store/index.ts");
var actions_1 = __webpack_require__(/*! ../store/actions */ "./admin/settings/store/actions.ts");
var SettingsApp_1 = __webpack_require__(/*! ./SettingsApp */ "./admin/settings/components/SettingsApp.tsx");
function SettingsSidebar(props) {
    var maintenance = element_1.useContext(SettingsApp_1.StateContext).maintenance;
    var tabs = props.tabNames.map(function (name) { return ({ name: name, className: name, title: name, icon: props.tabIcons[name] }); });
    var disabled = function (tab) { return tab.title === 'Maintenance' && !maintenance; };
    var isActive = function (tab) { return props.activeSidebarMenu === tab.title; };
    var activateMenu = function (tab) { return function () { return store_1.settingsStore.dispatch({
        type: actions_1.ACTIVATE_SIDEBAR_MENU, data: tab.name
    }); }; };
    var Tabs = tabs.map(function (tab, index) { return (React.createElement(reactstrap_1.NavItem, { key: "settings_sidebar_" + index },
        React.createElement(reactstrap_1.NavLink, { className: tab.className, onClick: activateMenu(tab), label: tab.title, disabled: disabled(tab), active: isActive(tab) },
            React.createElement(components_1.Dashicon, { icon: tab.icon }),
            " ",
            tab.title))); });
    return React.createElement(reactstrap_1.Nav, { pills: true, vertical: true, navbar: true }, Tabs);
}
exports.SettingsSidebar = SettingsSidebar;


/***/ }),

/***/ "./admin/settings/components/SettingsUploadImage.tsx":
/*!***********************************************************!*\
  !*** ./admin/settings/components/SettingsUploadImage.tsx ***!
  \***********************************************************/
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
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var reactstrap_1 = __webpack_require__(/*! reactstrap */ "reactstrap");
var settings_1 = __webpack_require__(/*! ../styles/settings */ "./admin/settings/styles/settings.ts");
var classnames = __webpack_require__(/*! classnames */ "classnames");
function SettingsUploadImage(props) {
    var media = props.media, onDelete = props.onDelete, onClick = props.onClick, label = props.label;
    var NoImage = function () { return React.createElement(components_1.Placeholder, { icon: "format-image", style: settings_1.settingStyles.placeholder }); };
    var createSrcSet = function (image) { return Object.values(image.sizes).map(function (src) { return src.url; }).join(', '); };
    return (React.createElement(reactstrap_1.Card, { className: classnames('border-0', 'flex-fill', 'flex-grow-1', 'justify-content-center', 'align-items-center') },
        React.createElement(reactstrap_1.Row, { noGutters: true, className: "w-md-75" },
            React.createElement(reactstrap_1.Col, null, media ? React.createElement("img", { srcSet: createSrcSet(media) }) : React.createElement(NoImage, null)),
            React.createElement(reactstrap_1.Col, null,
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement(components_1.IconButton, { isPrimary: true, icon: "upload", onClick: onClick }, i18n_1.__("Upload " + label)),
                    React.createElement(components_1.IconButton, { isDefault: true, disabled: !media, icon: "trash", onClick: onDelete }, i18n_1.__("Delete " + label)))))));
}
exports.SettingsUploadImage = SettingsUploadImage;


/***/ }),

/***/ "./admin/settings/constants.ts":
/*!*************************************!*\
  !*** ./admin/settings/constants.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tabNames = ['Assets', 'Layouts', 'Typography', 'Socials', 'Integrations', 'Maintenance', 'Documentation'];
exports.tabIcons = {
    Assets: 'images-alt2',
    Layouts: 'editor-kitchensink',
    Typography: 'editor-spellcheck',
    Socials: 'networking',
    Integrations: 'universal-access-alt',
    Maintenance: 'backup',
    Documentation: 'book-alt'
};
exports.defaultMediaConfig = {
    title: 'Select or Upload Media',
    button: { text: 'Use this media' },
    multiple: false,
    library: { type: ['image'] }
};


/***/ }),

/***/ "./admin/settings/index.tsx":
/*!**********************************!*\
  !*** ./admin/settings/index.tsx ***!
  \**********************************/
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
var element_1 = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var SettingsApp_1 = __webpack_require__(/*! ./components/SettingsApp */ "./admin/settings/components/SettingsApp.tsx");
element_1.render(React.createElement(SettingsApp_1.SettingsApp, null), document.getElementById('enogwe_theme_settings'));


/***/ }),

/***/ "./admin/settings/store/actions.ts":
/*!*****************************************!*\
  !*** ./admin/settings/store/actions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(/*! ./state */ "./admin/settings/store/state.ts");
exports.ACTIVATE_MAINTENENCE_MODE = 'ACTIVATE_MAINTENENCE_MODE';
exports.DEACTIVATE_MAINTENENCE_MODE = 'DEACTIVATE_MAINTENENCE_MODE';
exports.ACTIVATE_SIDEBAR_MENU = 'ACTIVATE_SIDEBAR_MENU';
exports.UPLOAD_LOGO = 'UPLOAD_LOGO';
exports.UPLOAD_FAVICON = 'UPLOAD_FAVICON';
exports.UPLOAD_PICTURE = 'UPLOAD_PICTURE';
exports.DELETE_LOGO = 'DELETE_LOGO';
exports.DELETE_FAVICON = 'DELETE_FAVICON';
exports.DELETE_PICTURE = 'DELETE_PICTURE';
exports.FETCH_SETTINGS_CLOSED = 'FETCH_SETTINGS_CLOSED';
exports.FETCH_SETTINGS_STALE = 'FETCH_SETTINGS_STALE';
exports.FETCH_SETTINGS_LOADING = 'FETCH_SETTINGS_LOADING';
exports.FETCH_SETTINGS_ERROR = 'FETCH_SETTINGS_ERROR';
exports.FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
exports.FETCH_SETTINGS_NETWORK = 'FETCH_SETTINGS_NETWORK';
exports.REFRESH_STATE = 'REFRESH_STATE';
function createAction(action) {
    return action;
}
function assetAction(type) {
    return createAction.bind(null, { type: type, data: {} });
}
exports.actions = {
    activateMaintenanceMode: createAction.bind(null, {
        type: exports.ACTIVATE_MAINTENENCE_MODE, data: true
    }),
    activateSidebarMenu: createAction.bind(null, {
        type: exports.ACTIVATE_SIDEBAR_MENU, data: 'Layouts'
    }),
    uploadLogo: assetAction(exports.UPLOAD_LOGO),
    uploadFavicon: assetAction(exports.UPLOAD_FAVICON),
    uploadPicture: assetAction(exports.UPLOAD_PICTURE),
    deleteLogo: assetAction(exports.DELETE_LOGO),
    deleteFavicon: assetAction(exports.DELETE_FAVICON),
    deletePicture: assetAction(exports.DELETE_PICTURE),
    deActivateMaintenanceMode: createAction.bind(null, {
        type: exports.ACTIVATE_MAINTENENCE_MODE, data: false
    }),
    fetchSettingsClosed: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_CLOSED, data: 'closed'
    }),
    fetchSettingsStale: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_STALE, data: 'stale'
    }),
    fetchSettingsLoading: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_LOADING, data: 'loading'
    }),
    fetchSettingsError: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_ERROR, data: 'error'
    }),
    fetchSettingsSuccess: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_SUCCESS, data: 'success'
    }),
    fetchSettingsNetwork: createAction.bind(null, {
        type: exports.FETCH_SETTINGS_NETWORK, data: 'network'
    }),
    refreshState: createAction.bind(null, {
        type: exports.REFRESH_STATE, data: state_1.State
    })
};


/***/ }),

/***/ "./admin/settings/store/effects.ts":
/*!*****************************************!*\
  !*** ./admin/settings/store/effects.ts ***!
  \*****************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var superagent_1 = __importDefault(__webpack_require__(/*! wpapi/superagent */ "wpapi/superagent"));
var _1 = __webpack_require__(/*! . */ "./admin/settings/store/index.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./admin/settings/constants.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./admin/settings/store/actions.ts");
var _a = window.location, protocol = _a.protocol, hostname = _a.hostname, port = _a.port;
var baseUrl = protocol + "//" + hostname + (port ? ":" + port : '');
var endpoint = baseUrl + "/wp-json/enogwe/v1";
var wp = new superagent_1.default({ endpoint: endpoint });
function getSettings() {
    return __awaiter(this, void 0, void 0, function () {
        var fetchSettingsLoading, fetchSettingsSuccess_1, fetchSettingsClosed_1, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    fetchSettingsLoading = actions_1.actions.fetchSettingsLoading, fetchSettingsSuccess_1 = actions_1.actions.fetchSettingsSuccess, fetchSettingsClosed_1 = actions_1.actions.fetchSettingsClosed;
                    _1.settingsStore.dispatch(fetchSettingsLoading());
                    return [4, wp.root('settings').get()];
                case 1:
                    data = (_a.sent()).settings;
                    _1.settingsStore.dispatch({ type: actions_1.REFRESH_STATE, data: JSON.parse(data) });
                    setTimeout(function () {
                        _1.settingsStore.dispatch(fetchSettingsSuccess_1());
                        _1.settingsStore.dispatch(fetchSettingsClosed_1());
                    }, 2000);
                    return [3, 3];
                case 2:
                    error_1 = _a.sent();
                    setTimeout(function () { return _1.settingsStore.dispatch(actions_1.actions.fetchSettingsError()); }, 2000);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getSettings = getSettings;
function saveSettings(settings) {
    return __awaiter(this, void 0, void 0, function () {
        var fetchSettingsLoading, fetchSettingsSuccess_2, fetchSettingsClosed_2, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    fetchSettingsLoading = actions_1.actions.fetchSettingsLoading, fetchSettingsSuccess_2 = actions_1.actions.fetchSettingsSuccess, fetchSettingsClosed_2 = actions_1.actions.fetchSettingsClosed;
                    _1.settingsStore.dispatch(fetchSettingsLoading());
                    return [4, wp.root('settings').auth({ nonce: window.cred.nonce }).create({ settings: JSON.stringify(settings) })];
                case 1:
                    _a.sent();
                    setTimeout(function () {
                        _1.settingsStore.dispatch(fetchSettingsSuccess_2());
                        _1.settingsStore.dispatch(fetchSettingsClosed_2());
                    }, 2000);
                    return [3, 3];
                case 2:
                    error_2 = _a.sent();
                    setTimeout(function () { return _1.settingsStore.dispatch(actions_1.actions.fetchSettingsError()); }, 2000);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.saveSettings = saveSettings;
function toggleMaintenance(isChecked) {
    var deActivate = { type: actions_1.DEACTIVATE_MAINTENENCE_MODE };
    var activate = { type: actions_1.ACTIVATE_MAINTENENCE_MODE };
    return isChecked ? _1.settingsStore.dispatch(activate) : _1.settingsStore.dispatch(deActivate);
}
exports.toggleMaintenance = toggleMaintenance;
function handleMediaUpload(action) {
    var WpMedia = function (config) { return window.wp.media(__assign(__assign({}, constants_1.defaultMediaConfig), config)); };
    var frame = WpMedia({ title: '', button: { text: 'Use  this image' } });
    var onSelect = function () { return _1.settingsStore.dispatch({ type: action, data: frame.state().get('selection').first().toJSON() }); };
    frame.on('select', onSelect);
    return function (e) { return frame.open(); };
}
exports.handleMediaUpload = handleMediaUpload;
function handleMediaDelete(type) {
    return function () { return _1.settingsStore.dispatch({ type: type, data: undefined }); };
}
exports.handleMediaDelete = handleMediaDelete;
function menuExpanded() {
}
exports.menuExpanded = menuExpanded;


/***/ }),

/***/ "./admin/settings/store/index.ts":
/*!***************************************!*\
  !*** ./admin/settings/store/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var actions_1 = __webpack_require__(/*! ./actions */ "./admin/settings/store/actions.ts");
var reducers_1 = __webpack_require__(/*! ./reducers */ "./admin/settings/store/reducers.ts");
exports.settingsStore = data_1.registerStore('enogwe/settings', { reducer: reducers_1.reducer, actions: actions_1.actions });


/***/ }),

/***/ "./admin/settings/store/reducers.ts":
/*!******************************************!*\
  !*** ./admin/settings/store/reducers.ts ***!
  \******************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var actions_1 = __webpack_require__(/*! ./actions */ "./admin/settings/store/actions.ts");
var state_1 = __webpack_require__(/*! ./state */ "./admin/settings/store/state.ts");
var maintenanceReducers = {
    active: function (state, action) {
        if (state === void 0) { state = state_1.State.maintenance.active; }
        var type = action.type;
        if (![actions_1.ACTIVATE_MAINTENENCE_MODE, actions_1.DEACTIVATE_MAINTENENCE_MODE].includes(type)) {
            return state;
        }
        return type === actions_1.ACTIVATE_MAINTENENCE_MODE ? true : false;
    }
};
function sidebar(state, action) {
    if (state === void 0) { state = state_1.State.sidebar; }
    var type = action.type, data = action.data;
    return type === actions_1.ACTIVATE_SIDEBAR_MENU ? __assign(__assign({}, state), { activeSidebarMenu: data }) : state;
}
function asset(reducerTypes) {
    return function (state, action) {
        var type = action.type, data = action.data;
        var types = Object.values(reducerTypes);
        if (!types.includes(type)) {
            return state;
        }
        var item = type.split('_');
        switch (action.type) {
            case "DELETE_" + item[1]:
                return data;
            case "UPLOAD_" + item[1]:
                return __assign(__assign({}, state), data);
            default:
                return state;
        }
    };
}
function ApiSetting(reducerTypes) {
    return function (state, action) {
        if (state === void 0) { state = state_1.State.api.settings; }
        var type = action.type;
        var types = Object.values(reducerTypes);
        if (!types.includes(type)) {
            return state;
        }
        switch (action.type) {
            case actions_1.FETCH_SETTINGS_STALE:
                return 'stale';
            case actions_1.FETCH_SETTINGS_LOADING:
                return 'loading';
            case actions_1.FETCH_SETTINGS_ERROR:
                return 'error';
            case actions_1.FETCH_SETTINGS_NETWORK:
                return 'network';
            case actions_1.FETCH_SETTINGS_SUCCESS:
                return 'success';
            default:
                return 'closed';
        }
    };
}
var maintenance = data_1.combineReducers(maintenanceReducers);
var assets = data_1.combineReducers({
    logo: asset({ UPLOAD_LOGO: actions_1.UPLOAD_LOGO, DELETE_LOGO: actions_1.DELETE_LOGO }),
    favicon: asset({ UPLOAD_FAVICON: actions_1.UPLOAD_FAVICON, DELETE_FAVICON: actions_1.DELETE_FAVICON }),
    picture: asset({ UPLOAD_PICTURE: actions_1.UPLOAD_PICTURE, DELETE_PICTURE: actions_1.DELETE_PICTURE })
});
var settings = ApiSetting({
    FETCH_SETTINGS_STALE: actions_1.FETCH_SETTINGS_STALE,
    FETCH_SETTINGS_CLOSED: actions_1.FETCH_SETTINGS_CLOSED,
    FETCH_SETTINGS_LOADING: actions_1.FETCH_SETTINGS_LOADING,
    FETCH_SETTINGS_ERROR: actions_1.FETCH_SETTINGS_ERROR,
    FETCH_SETTINGS_NETWORK: actions_1.FETCH_SETTINGS_NETWORK,
    FETCH_SETTINGS_SUCCESS: actions_1.FETCH_SETTINGS_SUCCESS
});
var api = data_1.combineReducers({ settings: settings });
exports.rootReducers = data_1.combineReducers({
    maintenance: maintenance, sidebar: sidebar, assets: assets, api: api
});
function reducer(state, action) {
    if (state === void 0) { state = state_1.State; }
    var type = action.type, data = action.data;
    if (type === actions_1.REFRESH_STATE) {
        return data ? data : state;
    }
    return exports.rootReducers(state, action);
}
exports.reducer = reducer;


/***/ }),

/***/ "./admin/settings/store/state.json":
/*!*****************************************!*\
  !*** ./admin/settings/store/state.json ***!
  \*****************************************/
/*! exports provided: maintenance, sidebar, api, assets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"maintenance\":{\"active\":false,\"roles\":[],\"capabilities\":[],\"duration\":{\"from\":null,\"to\":null}},\"sidebar\":{\"menuExpanded\":\"false\",\"activeSidebarMenu\":\"Assets\"},\"api\":{\"settings\":\"loading\"},\"assets\":{}}");

/***/ }),

/***/ "./admin/settings/store/state.ts":
/*!***************************************!*\
  !*** ./admin/settings/store/state.ts ***!
  \***************************************/
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
var state_json_1 = __importDefault(__webpack_require__(/*! ./state.json */ "./admin/settings/store/state.json"));
exports.State = __assign(__assign({}, state_json_1.default), { assets: {
        logo: undefined,
        favicon: undefined,
        picture: undefined
    } });


/***/ }),

/***/ "./admin/settings/styles/settings.ts":
/*!*******************************************!*\
  !*** ./admin/settings/styles/settings.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settingStyles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: '3em',
        height: 'calc(100vh - 15em)',
        borderBottom: '1px solid #e8e8e8'
    },
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'top',
        width: '30vw',
        height: '100%',
        paddingLeft: 40,
        paddingRight: 40
    },
    page: {
        flex: 1
    },
    pageHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 0,
        padding: '3em',
        borderBottom: '1px solid #e8e8e8'
    },
    pageContent: {
        display: 'flex',
        overflowY: 'scroll',
        padding: '3em',
        height: '60%',
        borderBottom: '1px solid #e8e8e8'
    },
    maintenanceMode: {
        marginTop: 12
    },
    textWithIcon: {
        padding: '0 0 0 0.2em'
    },
    menuitem: {
        padding: '1em',
        height: 'auto',
        border: 0,
        borderRadius: 0,
        borderBottom: '1px solid #e8e8e8'
    },
    content: {
        display: 'flex',
        background: '#ffffff',
        width: '70vw',
        height: '100%'
    },
    title: {
        paddingBottom: 10,
        display: 'flex',
        alignItems: 'center'
    },
    settingsAssetsPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    assetPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    assetImageContainer: {
        display: 'flex',
        margin: '0  auto'
    },
    placeholder: {
        width: 'auto',
        height: 'auto',
        minHeight: 'auto',
        backgroundColor: '#fff',
        padding: 0,
        fontSize: 0
    },
    assetImageButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em'
    },
    marginBottom: {
        marginBottom: '1em'
    }
};


/***/ }),

/***/ "@wordpress/components":
/*!****************************************!*\
  !*** external "@wordpress/components" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wordpress/components");

/***/ }),

/***/ "@wordpress/data":
/*!**********************************!*\
  !*** external "@wordpress/data" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wordpress/data");

/***/ }),

/***/ "@wordpress/element":
/*!*************************************!*\
  !*** external "@wordpress/element" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wordpress/element");

/***/ }),

/***/ "@wordpress/i18n":
/*!**********************************!*\
  !*** external "@wordpress/i18n" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wordpress/i18n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "wpapi/superagent":
/*!***********************************!*\
  !*** external "wpapi/superagent" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wpapi/superagent");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc0Fzc2V0c1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvU2V0dGluZ3NMYXlvdXRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL1NldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc1NJZGViYXIudHN4Iiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvU2V0dGluZ3NVcGxvYWRJbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZXR0aW5ncy9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL3N0b3JlL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3R5bGVzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3cGFwaS9zdXBlcmFnZW50XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw2RkFBa0Q7QUFFbEQsMkVBQW9DO0FBQ3BDLHdGQUFtQztBQUVuQyxvRUFBOEI7QUFDOUIsdUVBQXNFO0FBQ3RFLDJGQUFpRDtBQUNqRCwrR0FBNkM7QUFDN0Msd0hBQW1EO0FB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Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJhZG1pbi9qcy9zZXR0aW5ncy1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FkbWluL3NldHRpbmdzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFNldHRpbmdzUGFnZVByb3BzIH0gZnJvbSAnZ2xvYmFsJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyB0YWJJY29ucywgdGFiTmFtZXMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2UgfSBmcm9tICcuL1NldHRpbmdzUGFnZSdcbmltcG9ydCB7IFNldHRpbmdzU2lkZWJhciB9IGZyb20gJy4vU2V0dGluZ3NTSWRlYmFyJ1xuXG4vKipcbiAqIFNldHRpbmdzIENvbXBvbmVudFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7UHJvcHNXaXRoQ2hpbGRyZW48U2V0dGluZ3NQYWdlUHJvcHM+fSBwcm9wc1xuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3MocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPFNldHRpbmdzUGFnZVByb3BzPik6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Um93IG5vR3V0dGVycz17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdmbGV4LWZpbGwnLCAnZmxleC1ncm93LTEnKX0+XG4gICAgICAgICAgICA8Q29sIG1kPVwiM1wiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY2FyZCcsICdwLTAnLCAnYm9yZGVyLTAnLCAnYmctbGlnaHQnLCAnZC1ub25lJywgJ2QtbWQtYmxvY2snKX0+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdkLWZsZXgnLCAnbWItMCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2V4cGFuZE1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTbWFsbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17Mjl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdib3JkZXItMCcsICdzaGFkb3ctbm9uZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnVGhlbWUgU2V0dGluZ3MnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzU2lkZWJhciB0YWJOYW1lcz17dGFiTmFtZXN9IHRhYkljb25zPXt0YWJJY29uc30gYWN0aXZlU2lkZWJhck1lbnU9e3Byb3BzLnBhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPFNldHRpbmdzUGFnZSBwYWdlPXtwcm9wcy5wYWdlfSAvPlxuICAgICAgICA8L1Jvdz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHNldHRpbmdzU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IGdldFNldHRpbmdzIH0gZnJvbSAnLi4vc3RvcmUvZWZmZWN0cydcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vU2V0dGluZ3MnXG5cbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFN0YXRlKVxuXG4vKipcbiAqIEFwcCBDb21wb25lbnRcbiAqXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIEFwcCgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShTdGF0ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlU3Vic2NyaXB0aW9uID0gc2V0dGluZ3NTdG9yZS5zdWJzY3JpYmUoKCkgPT4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgLi4uc2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpIH0pKVxuICAgICAgICByZXR1cm4gc3RvcmVTdWJzY3JpcHRpb25cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICAgICAge3N0YXRlLmFwaS5zZXR0aW5ncyA9PT0gJ2xvYWRpbmcnICYmIDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3MgcGFnZT17c3RhdGUuc2lkZWJhci5hY3RpdmVTaWRlYmFyTWVudX0gLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4vKipcbiAqICBTZXR0aW5nc0FwcCBDb21wb2VudFxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzQXBwKCk6IEpTWC5FbGVtZW50IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRTZXR0aW5ncygpLmNhdGNoKGVycm9yID0+IGVycm9yKVxuICAgIH0pXG5cbiAgICByZXR1cm4gPEFwcCAvPlxufVxuIiwiaW1wb3J0IHsgUGFuZWwsIFBhbmVsQm9keSwgUGFuZWxSb3cgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBERUxFVEVfRkFWSUNPTiwgREVMRVRFX0xPR08sIERFTEVURV9QSUNUVVJFLCBVUExPQURfRkFWSUNPTiwgVVBMT0FEX0xPR08sIFVQTE9BRF9QSUNUVVJFIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IGhhbmRsZU1lZGlhRGVsZXRlLCBoYW5kbGVNZWRpYVVwbG9hZCB9IGZyb20gJy4uL3N0b3JlL2VmZmVjdHMnXG5pbXBvcnQgeyBzZXR0aW5nU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL3NldHRpbmdzJ1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9TZXR0aW5nc0FwcCdcbmltcG9ydCB7IFNldHRpbmdzVXBsb2FkSW1hZ2UgfSBmcm9tICcuL1NldHRpbmdzVXBsb2FkSW1hZ2UnXG5cbi8qKlxuICogU2V0dGluZ3NBc3NldFBhZ2UgQ29tcG9uZW5udFxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzQXNzZXRzUGFnZSgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KVxuICAgIGNvbnN0IGxvZ28gPSBhc3NldHMgJiYgYXNzZXRzLmxvZ29cbiAgICBjb25zdCBmYXZpY29uID0gYXNzZXRzICYmIGFzc2V0cy5mYXZpY29uXG4gICAgY29uc3QgcGljdHVyZSA9IGFzc2V0cyAmJiBhc3NldHMucGljdHVyZVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c2V0dGluZ1N0eWxlcy5hc3NldFBhZ2V9PlxuICAgICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgaW5pdGlhbE9wZW49e3RydWV9IHRpdGxlPVwiTE9HT1wiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NVcGxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVkaWFVcGxvYWQoVVBMT0FEX0xPR08pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVNZWRpYURlbGV0ZShERUxFVEVfTE9HTyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e2xvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5IGluaXRpYWxPcGVuPXtmYWxzZX0gdGl0bGU9XCJGQVZJQ09OXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc1VwbG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGYXZpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZWRpYVVwbG9hZChVUExPQURfRkFWSUNPTil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZU1lZGlhRGVsZXRlKERFTEVURV9GQVZJQ09OKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17ZmF2aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgaW5pdGlhbE9wZW49e2ZhbHNlfSB0aXRsZT1cIlBST0ZJTEUgUElDVFVSRVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NVcGxvYWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVkaWFVcGxvYWQoVVBMT0FEX1BJQ1RVUkUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVNZWRpYURlbGV0ZShERUxFVEVfUElDVFVSRSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e3BpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbi8qKlxuICogU2V0dGluZ3NMYXlvdXRQYWdlIENvbXBvbmVudFxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzTGF5b3V0UGFnZSgpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuICg8RnJhZ21lbnQgLz4pXG59XG4iLCJpbXBvcnQgeyBCdXR0b24sIFRvZ2dsZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm9wc1dpdGhvdXRSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bidcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBTZXR0aW5nc1BhZ2VQcm9wcywgU2V0dGluZ3NQYWdlcyB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZEJvZHksIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHNldHRpbmdzU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IHNhdmVTZXR0aW5ncywgdG9nZ2xlTWFpbnRlbmFuY2UgfSBmcm9tICcuLi9zdG9yZS9lZmZlY3RzJ1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9TZXR0aW5nc0FwcCdcbmltcG9ydCB7IFNldHRpbmdzQXNzZXRzUGFnZSB9IGZyb20gJy4vU2V0dGluZ3NBc3NldHNQYWdlJ1xuaW1wb3J0IHsgU2V0dGluZ3NMYXlvdXRQYWdlIH0gZnJvbSAnLi9TZXR0aW5nc0xheW91dFBhZ2UnXG5cbi8qKlxuICogU2V0dGluZ3NQYWdlIENvbXBvbmVudFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7UHJvcHNXaXRob3V0UmVmPFNldHRpbmdzUGFnZVByb3BzPn0gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzUGFnZShwcm9wczogUHJvcHNXaXRob3V0UmVmPFNldHRpbmdzUGFnZVByb3BzPik6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7IG1haW50ZW5hbmNlOiB7IGFjdGl2ZSB9LCBhcGk6IHsgc2V0dGluZ3M6IGxvYWRpbmcgfSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXG4gICAgY29uc3QgaXNCdXN5ID0gbG9hZGluZyA9PT0gJ2xvYWRpbmcnXG4gICAgY29uc3Qgc2V0U3RhdGUgPSAoKSA9PiBzYXZlU2V0dGluZ3Moc2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpKVxuICAgIGNvbnN0IHBhZ2VzOiBTZXR0aW5nc1BhZ2VzID0ge1xuICAgICAgICBBc3NldHM6IDxTZXR0aW5nc0Fzc2V0c1BhZ2UgLz4sXG4gICAgICAgIExheW91dHM6IDxTZXR0aW5nc0xheW91dFBhZ2UgLz5cbiAgICB9XG4gICAgY29uc3QgUGFnZSA9IHBhZ2VzW3Byb3BzLnBhZ2VdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIG1kPVwiOVwiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY2FyZCcsICdwLTAnLCAnYm9yZGVyLWxlZnQtMCcpfT5cbiAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZC1mbGV4JywgJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJywgJ2FsaWduLWl0ZW1zLWNlbnRlcicpfT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZC1ub25lJywgJ2QtbWQtYmxvY2snLCAnbWItbjEnKX0+e3Byb3BzLnBhZ2V9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1uM1wiPlxuICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbCBsYWJlbD17X18oJ01haW50ZW5hbmNlJywgJ2Vub2d3ZScpfSBjaGVja2VkPXthY3RpdmV9IG9uQ2hhbmdlPXt0b2dnbGVNYWludGVuYW5jZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlzQnVzeT17aXNCdXN5fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNCdXN5fVxuICAgICAgICAgICAgICAgICAgICBpc1ByaW1hcnk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU2F2ZSAgU2V0dGluZ3MnLCAnZW5vZ3dlJyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldFN0YXRlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBTZXR0aW5nc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgPENhcmRCb2R5PntQYWdlfTwvQ2FyZEJvZHk+XG4gICAgICAgIDwvQ29sPlxuICAgIClcbn1cbiIsImltcG9ydCB7IERhc2hpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCB7IEdlbmVyaWNBY3Rpb24sIE1lbnVUYWJOYW1lcywgU2lkZWJhclByb3BzLCBUYWIgfSBmcm9tICdnbG9iYWwnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBzZXR0aW5nc1N0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBBQ1RJVkFURV9TSURFQkFSX01FTlUgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9TZXR0aW5nc0FwcCdcblxuLyoqXG4gKiBTZXR0aW5nc1NpZGViYXIgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtTaWRlYmFyUHJvcHN9IHByb3BzXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc1NpZGViYXIocHJvcHM6IFNpZGViYXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBtYWludGVuYW5jZSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KS5tYWludGVuYW5jZVxuICAgIGNvbnN0IHRhYnM6IFRhYltdID0gcHJvcHMudGFiTmFtZXMubWFwKG5hbWUgPT4gKHsgbmFtZSwgY2xhc3NOYW1lOiBuYW1lLCB0aXRsZTogbmFtZSwgaWNvbjogcHJvcHMudGFiSWNvbnNbbmFtZV0gfSkpXG4gICAgY29uc3QgZGlzYWJsZWQgPSAodGFiOiBUYWIpID0+IHRhYi50aXRsZSA9PT0gJ01haW50ZW5hbmNlJyAmJiAhbWFpbnRlbmFuY2VcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICh0YWI6IFRhYikgPT4gcHJvcHMuYWN0aXZlU2lkZWJhck1lbnUgPT09IHRhYi50aXRsZVxuICAgIGNvbnN0IGFjdGl2YXRlTWVudSA9ICh0YWI6IFRhYikgPT4gKCkgPT4gc2V0dGluZ3NTdG9yZS5kaXNwYXRjaDxHZW5lcmljQWN0aW9uPE1lbnVUYWJOYW1lcz4+KHtcbiAgICAgICAgdHlwZTogQUNUSVZBVEVfU0lERUJBUl9NRU5VLCBkYXRhOiB0YWIubmFtZVxuICAgIH0pXG4gICAgY29uc3QgVGFicyA9IHRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17YHNldHRpbmdzX3NpZGViYXJfJHtpbmRleH1gfT5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0YWIuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGl2YXRlTWVudSh0YWIpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0YWIudGl0bGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkKHRhYil9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtpc0FjdGl2ZSh0YWIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPXt0YWIuaWNvbn0gLz4ge3RhYi50aXRsZX1cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICkpXG5cbiAgICByZXR1cm4gPE5hdiBwaWxscz17dHJ1ZX0gdmVydGljYWw9e3RydWV9IG5hdmJhcj17dHJ1ZX0+e1RhYnN9PC9OYXY+XG59XG4iLCJpbXBvcnQgeyBJY29uQnV0dG9uLCBQbGFjZWhvbGRlciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cydcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nXG5pbXBvcnQgeyBJbWFnZVByb3BzLCBNZWRpYUluZm8gfSBmcm9tICdnbG9iYWwnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBzZXR0aW5nU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL3NldHRpbmdzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJylcblxuLyoqXG4gKiBTZXR0aW5nc1VwbG9hZEltYWdlIENvbXBvbmVudFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7UHJvcHNXaXRoQ2hpbGRyZW48SW1hZ2VQcm9wcz59IHByb3BzXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc1VwbG9hZEltYWdlKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxJbWFnZVByb3BzPik6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7IG1lZGlhLCBvbkRlbGV0ZSwgb25DbGljaywgbGFiZWwgfSA9IHByb3BzXG4gICAgY29uc3QgTm9JbWFnZSA9ICgpID0+IDxQbGFjZWhvbGRlciBpY29uPVwiZm9ybWF0LWltYWdlXCIgc3R5bGU9e3NldHRpbmdTdHlsZXMucGxhY2Vob2xkZXJ9IC8+XG4gICAgY29uc3QgY3JlYXRlU3JjU2V0ID0gKGltYWdlOiBNZWRpYUluZm8pOiBzdHJpbmcgPT4gT2JqZWN0LnZhbHVlcyhpbWFnZS5zaXplcykubWFwKHNyYyA9PiBzcmMudXJsKS5qb2luKCcsICcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2JvcmRlci0wJywgJ2ZsZXgtZmlsbCcsICdmbGV4LWdyb3ctMScsICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJywgJ2FsaWduLWl0ZW1zLWNlbnRlcicpfT5cbiAgICAgICAgICAgIDxSb3cgbm9HdXR0ZXJzPXt0cnVlfSBjbGFzc05hbWU9XCJ3LW1kLTc1XCI+XG4gICAgICAgICAgICAgICAgPENvbD57bWVkaWEgPyA8aW1nIHNyY1NldD17Y3JlYXRlU3JjU2V0KG1lZGlhKX0gLz4gOiA8Tm9JbWFnZSAvPn08L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBpc1ByaW1hcnk9e3RydWV9IGljb249XCJ1cGxvYWRcIiBvbkNsaWNrPXtvbkNsaWNrfT57X18oYFVwbG9hZCAke2xhYmVsfWApfTwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGlzRGVmYXVsdD17dHJ1ZX0gZGlzYWJsZWQ9eyFtZWRpYX0gaWNvbj1cInRyYXNoXCIgb25DbGljaz17b25EZWxldGV9PntfXyhgRGVsZXRlICR7bGFiZWx9YCl9PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBNZW51VGFiTmFtZXMsIFRhYkljb25zIH0gZnJvbSAnZ2xvYmFsJ1xuXG5leHBvcnQgY29uc3QgdGFiTmFtZXM6IE1lbnVUYWJOYW1lc1tdID0gWydBc3NldHMnLCAnTGF5b3V0cycsICdUeXBvZ3JhcGh5JywgJ1NvY2lhbHMnLCAnSW50ZWdyYXRpb25zJywgJ01haW50ZW5hbmNlJywgJ0RvY3VtZW50YXRpb24nXVxuZXhwb3J0IGNvbnN0IHRhYkljb25zOiBUYWJJY29ucyA9IHtcbiAgQXNzZXRzOiAnaW1hZ2VzLWFsdDInLFxuICBMYXlvdXRzOiAnZWRpdG9yLWtpdGNoZW5zaW5rJyxcbiAgVHlwb2dyYXBoeTogJ2VkaXRvci1zcGVsbGNoZWNrJyxcbiAgU29jaWFsczogJ25ldHdvcmtpbmcnLFxuICBJbnRlZ3JhdGlvbnM6ICd1bml2ZXJzYWwtYWNjZXNzLWFsdCcsXG4gIE1haW50ZW5hbmNlOiAnYmFja3VwJyxcbiAgRG9jdW1lbnRhdGlvbjogJ2Jvb2stYWx0J1xufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZWRpYUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdTZWxlY3Qgb3IgVXBsb2FkIE1lZGlhJyxcbiAgYnV0dG9uOiB7IHRleHQ6ICdVc2UgdGhpcyBtZWRpYScgfSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBsaWJyYXJ5OiB7IHR5cGU6IFsnaW1hZ2UnXSB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNldHRpbmdzQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL1NldHRpbmdzQXBwJ1xuXG5yZW5kZXIoPFNldHRpbmdzQXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5vZ3dlX3RoZW1lX3NldHRpbmdzJykpXG4iLCJpbXBvcnQgeyBNZWRpYUluZm8sIEdlbmVyaWNBY3Rpb24sIE1lbnVUYWJOYW1lcywgQXBpU3RhdHVzLCBFbm9nd2VTdGF0ZSB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IEFDVElWQVRFX01BSU5URU5FTkNFX01PREUgPSAnQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSdcbmV4cG9ydCBjb25zdCBERUFDVElWQVRFX01BSU5URU5FTkNFX01PREUgPSAnREVBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFJ1xuZXhwb3J0IGNvbnN0IEFDVElWQVRFX1NJREVCQVJfTUVOVSA9ICdBQ1RJVkFURV9TSURFQkFSX01FTlUnXG5leHBvcnQgY29uc3QgVVBMT0FEX0xPR08gPSAnVVBMT0FEX0xPR08nXG5leHBvcnQgY29uc3QgVVBMT0FEX0ZBVklDT04gPSAnVVBMT0FEX0ZBVklDT04nXG5leHBvcnQgY29uc3QgVVBMT0FEX1BJQ1RVUkUgPSAnVVBMT0FEX1BJQ1RVUkUnXG5leHBvcnQgY29uc3QgREVMRVRFX0xPR08gPSAnREVMRVRFX0xPR08nXG5leHBvcnQgY29uc3QgREVMRVRFX0ZBVklDT04gPSAnREVMRVRFX0ZBVklDT04nXG5leHBvcnQgY29uc3QgREVMRVRFX1BJQ1RVUkUgPSAnREVMRVRFX1BJQ1RVUkUnXG5leHBvcnQgY29uc3QgRkVUQ0hfU0VUVElOR1NfQ0xPU0VEID0gJ0ZFVENIX1NFVFRJTkdTX0NMT1NFRCdcbmV4cG9ydCBjb25zdCBGRVRDSF9TRVRUSU5HU19TVEFMRSA9ICdGRVRDSF9TRVRUSU5HU19TVEFMRSdcbmV4cG9ydCBjb25zdCBGRVRDSF9TRVRUSU5HU19MT0FESU5HID0gJ0ZFVENIX1NFVFRJTkdTX0xPQURJTkcnXG5leHBvcnQgY29uc3QgRkVUQ0hfU0VUVElOR1NfRVJST1IgPSAnRkVUQ0hfU0VUVElOR1NfRVJST1InXG5leHBvcnQgY29uc3QgRkVUQ0hfU0VUVElOR1NfU1VDQ0VTUyA9ICdGRVRDSF9TRVRUSU5HU19TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IEZFVENIX1NFVFRJTkdTX05FVFdPUksgPSAnRkVUQ0hfU0VUVElOR1NfTkVUV09SSydcbmV4cG9ydCBjb25zdCBSRUZSRVNIX1NUQVRFID0gJ1JFRlJFU0hfU1RBVEUnXG5cbi8qKlxuICogQ3JlYXRlIGFuIEFjdGlvblxuICogZ2VuZXJpYyBhY3Rpb24gY3JlYXRvclxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0dlbmVyaWNBY3Rpb248VD59IGFjdGlvblxuICogQHJldHVybnMge0dlbmVyaWNBY3Rpb248VD59XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbjxUPiAoYWN0aW9uOiBHZW5lcmljQWN0aW9uPFQ+KTogR2VuZXJpY0FjdGlvbjxUPiB7XG4gIHJldHVybiBhY3Rpb25cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gYWN0aW9uIG9mIHR5cGUgQXNzZXRcbiAqIGdlbmVyaWMgYXNzZXQgYWN0aW9uIGNyZWF0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gYXNzZXRBY3Rpb24gKHR5cGU6IHN0cmluZykge1xuICByZXR1cm4gY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxNZWRpYUluZm8gfCB7fT4sIEdlbmVyaWNBY3Rpb248TWVkaWFJbmZvIHwge30+PihudWxsLCB7IHR5cGUsIGRhdGE6IHt9IH0pXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xuICBhY3RpdmF0ZU1haW50ZW5hbmNlTW9kZTogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxib29sZWFuPiwgR2VuZXJpY0FjdGlvbjxib29sZWFuPj4obnVsbCwge1xuICAgIHR5cGU6IEFDVElWQVRFX01BSU5URU5FTkNFX01PREUsIGRhdGE6IHRydWVcbiAgfSksXG4gIGFjdGl2YXRlU2lkZWJhck1lbnU6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248TWVudVRhYk5hbWVzPiwgR2VuZXJpY0FjdGlvbjxNZW51VGFiTmFtZXM+PihudWxsLCB7XG4gICAgdHlwZTogQUNUSVZBVEVfU0lERUJBUl9NRU5VLCBkYXRhOiAnTGF5b3V0cydcbiAgfSksXG4gIHVwbG9hZExvZ286IGFzc2V0QWN0aW9uKFVQTE9BRF9MT0dPKSxcbiAgdXBsb2FkRmF2aWNvbjogYXNzZXRBY3Rpb24oVVBMT0FEX0ZBVklDT04pLFxuICB1cGxvYWRQaWN0dXJlOiBhc3NldEFjdGlvbihVUExPQURfUElDVFVSRSksXG4gIGRlbGV0ZUxvZ286IGFzc2V0QWN0aW9uKERFTEVURV9MT0dPKSxcbiAgZGVsZXRlRmF2aWNvbjogYXNzZXRBY3Rpb24oREVMRVRFX0ZBVklDT04pLFxuICBkZWxldGVQaWN0dXJlOiBhc3NldEFjdGlvbihERUxFVEVfUElDVFVSRSksXG4gIGRlQWN0aXZhdGVNYWludGVuYW5jZU1vZGU6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248Ym9vbGVhbj4sIEdlbmVyaWNBY3Rpb248Ym9vbGVhbj4+KG51bGwsIHtcbiAgICB0eXBlOiBBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFLCBkYXRhOiBmYWxzZVxuICB9KSxcbiAgZmV0Y2hTZXR0aW5nc0Nsb3NlZDogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+LCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4+KG51bGwsIHtcbiAgICB0eXBlOiBGRVRDSF9TRVRUSU5HU19DTE9TRUQsIGRhdGE6ICdjbG9zZWQnXG4gIH0pLFxuICBmZXRjaFNldHRpbmdzU3RhbGU6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPiwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+PihudWxsLCB7XG4gICAgdHlwZTogRkVUQ0hfU0VUVElOR1NfU1RBTEUsIGRhdGE6ICdzdGFsZSdcbiAgfSksXG4gIGZldGNoU2V0dGluZ3NMb2FkaW5nOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4sIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPj4obnVsbCwge1xuICAgIHR5cGU6IEZFVENIX1NFVFRJTkdTX0xPQURJTkcsIGRhdGE6ICdsb2FkaW5nJ1xuICB9KSxcbiAgZmV0Y2hTZXR0aW5nc0Vycm9yOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4sIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPj4obnVsbCwge1xuICAgIHR5cGU6IEZFVENIX1NFVFRJTkdTX0VSUk9SLCBkYXRhOiAnZXJyb3InXG4gIH0pLFxuICBmZXRjaFNldHRpbmdzU3VjY2VzczogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+LCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4+KG51bGwsIHtcbiAgICB0eXBlOiBGRVRDSF9TRVRUSU5HU19TVUNDRVNTLCBkYXRhOiAnc3VjY2VzcydcbiAgfSksXG4gIGZldGNoU2V0dGluZ3NOZXR3b3JrOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4sIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPj4obnVsbCwge1xuICAgIHR5cGU6IEZFVENIX1NFVFRJTkdTX05FVFdPUkssIGRhdGE6ICduZXR3b3JrJ1xuICB9KSxcbiAgcmVmcmVzaFN0YXRlOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEVub2d3ZVN0YXRlLlNldHRpbmdzPiwgR2VuZXJpY0FjdGlvbjxFbm9nd2VTdGF0ZS5TZXR0aW5ncz4+KG51bGwsIHtcbiAgICB0eXBlOiBSRUZSRVNIX1NUQVRFLCBkYXRhOiBTdGF0ZVxuICB9KVxufVxuIiwiaW1wb3J0IHsgRW5vZ3dlU3RhdGUsIEdlbmVyaWNBY3Rpb24sIE1lZGlhSW5mbywgTWVkaWFQcm9wcyB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCBXUEFQSSBmcm9tICd3cGFwaS9zdXBlcmFnZW50J1xuaW1wb3J0IHsgc2V0dGluZ3NTdG9yZSB9IGZyb20gJy4nXG5pbXBvcnQgeyBkZWZhdWx0TWVkaWFDb25maWcgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgeyBhY3Rpb25zLCBBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFLCBERUFDVElWQVRFX01BSU5URU5FTkNFX01PREUsIFJFRlJFU0hfU1RBVEUgfSBmcm9tICcuL2FjdGlvbnMnXG5cbmNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbmNvbnN0IGJhc2VVcmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gYDoke3BvcnR9YCA6ICcnfWBcbmNvbnN0IGVuZHBvaW50ID0gYCR7YmFzZVVybH0vd3AtanNvbi9lbm9nd2UvdjFgXG5jb25zdCB3cCA9IG5ldyBXUEFQSSh7IGVuZHBvaW50IH0pXG5cbi8qKlxuICogR2V0IFRoZW1lIFNldHRpbmdzXG4gKiByZXRyaWV2ZXMgdGhlbWUgc2V0dGluZ3MgZnJvbSBhcGlcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZmV0Y2hTZXR0aW5nc0xvYWRpbmcsIGZldGNoU2V0dGluZ3NTdWNjZXNzLCBmZXRjaFNldHRpbmdzQ2xvc2VkIH0gPSBhY3Rpb25zXG4gICAgICAgIHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goZmV0Y2hTZXR0aW5nc0xvYWRpbmcoKSlcbiAgICAgICAgY29uc3QgeyBzZXR0aW5nczogZGF0YSB9ID0gYXdhaXQgd3Aucm9vdCgnc2V0dGluZ3MnKS5nZXQoKVxuICAgICAgICBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKHsgdHlwZTogUkVGUkVTSF9TVEFURSwgZGF0YTogSlNPTi5wYXJzZShkYXRhKSB9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goZmV0Y2hTZXR0aW5nc1N1Y2Nlc3MoKSlcbiAgICAgICAgICAgIHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goZmV0Y2hTZXR0aW5nc0Nsb3NlZCgpKSAvLyByZWR1eC10aHVua1xuICAgICAgICB9LCAyMDAwKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChhY3Rpb25zLmZldGNoU2V0dGluZ3NFcnJvcigpKSwgMjAwMClcbiAgICB9XG59XG5cbi8qKlxuICogU2F2ZSBUaGVtZSBTZXR0aW5nc1xuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7RW5vZ3dlU3RhdGUuU2V0dGluZ3N9IHNldHRpbmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTZXR0aW5ncyhzZXR0aW5nczogRW5vZ3dlU3RhdGUuU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGZldGNoU2V0dGluZ3NMb2FkaW5nLCBmZXRjaFNldHRpbmdzU3VjY2VzcywgZmV0Y2hTZXR0aW5nc0Nsb3NlZCB9ID0gYWN0aW9uc1xuICAgICAgICBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGZldGNoU2V0dGluZ3NMb2FkaW5nKCkpXG4gICAgICAgIGF3YWl0IHdwLnJvb3QoJ3NldHRpbmdzJykuYXV0aCh7IG5vbmNlOiB3aW5kb3cuY3JlZC5ub25jZSB9KS5jcmVhdGUoeyBzZXR0aW5nczogSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChmZXRjaFNldHRpbmdzU3VjY2VzcygpKVxuICAgICAgICAgICAgc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChmZXRjaFNldHRpbmdzQ2xvc2VkKCkpIC8vIHJlZHV4LXRodW5rXG4gICAgICAgIH0sIDIwMDApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hTZXR0aW5nc0Vycm9yKCkpLCAyMDAwKVxuICAgIH1cbn1cblxuLyoqXG4gKiBUb2dnbGUgU2l0ZSBNYWludGVuYW5jZSBNb2RlXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtib29sZWFufSBpc0NoZWNrZWRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNYWludGVuYW5jZShpc0NoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBkZUFjdGl2YXRlID0geyB0eXBlOiBERUFDVElWQVRFX01BSU5URU5FTkNFX01PREUgfVxuICAgIGNvbnN0IGFjdGl2YXRlID0geyB0eXBlOiBBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFIH1cbiAgICByZXR1cm4gaXNDaGVja2VkID8gc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChhY3RpdmF0ZSkgOiBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGRlQWN0aXZhdGUpXG59XG5cbi8qKlxuICogSGFuZGxlIE1lZGlhIFVwbG9hZFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAqIEByZXR1cm5zIHsoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZWRpYVVwbG9hZChhY3Rpb246IHN0cmluZyk6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZCB7XG4gICAgY29uc3QgV3BNZWRpYSA9IChjb25maWc6IE1lZGlhUHJvcHMpID0+IHdpbmRvdy53cC5tZWRpYSh7IC4uLmRlZmF1bHRNZWRpYUNvbmZpZywgLi4uY29uZmlnIH0pXG4gICAgY29uc3QgZnJhbWUgPSBXcE1lZGlhKHsgdGl0bGU6ICcnLCBidXR0b246IHsgdGV4dDogJ1VzZSAgdGhpcyBpbWFnZScgfSB9KVxuICAgIGNvbnN0IG9uU2VsZWN0ID0gKCkgPT4gc2V0dGluZ3NTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGFjdGlvbiwgZGF0YTogZnJhbWUuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpLmZpcnN0KCkudG9KU09OKCkgfSlcblxuICAgIGZyYW1lLm9uKCdzZWxlY3QnLCBvblNlbGVjdClcblxuICAgIHJldHVybiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IGZyYW1lLm9wZW4oKVxufVxuXG4vKipcbiAqIEhhbmRsZSBNZWRpYSBEZWxldGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVkaWFEZWxldGUodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICgpID0+IHNldHRpbmdzU3RvcmUuZGlzcGF0Y2g8R2VuZXJpY0FjdGlvbjxNZWRpYUluZm8gfCB1bmRlZmluZWQ+Pih7IHR5cGUsIGRhdGE6IHVuZGVmaW5lZCB9KVxufVxuXG4vKipcbiAqIG1lbnUgRXhwYW5kZWRcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW51RXhwYW5kZWQoKSB7XG5cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnXG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc1N0b3JlID0gcmVnaXN0ZXJTdG9yZSgnZW5vZ3dlL3NldHRpbmdzJywgeyByZWR1Y2VyLCBhY3Rpb25zIH0pXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnXG5pbXBvcnQgeyBBcGlTdGF0dXMsIEVub2d3ZVN0YXRlLCBHZW5lcmljQWN0aW9uLCBNZWRpYUluZm8sIE1lbnVUYWJOYW1lcywgU2lkZWJhciB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSwgQUNUSVZBVEVfU0lERUJBUl9NRU5VLCBERUFDVElWQVRFX01BSU5URU5FTkNFX01PREUsIERFTEVURV9GQVZJQ09OLCBERUxFVEVfTE9HTywgREVMRVRFX1BJQ1RVUkUsIEZFVENIX1NFVFRJTkdTX0NMT1NFRCwgRkVUQ0hfU0VUVElOR1NfRVJST1IsIEZFVENIX1NFVFRJTkdTX0xPQURJTkcsIEZFVENIX1NFVFRJTkdTX05FVFdPUkssIEZFVENIX1NFVFRJTkdTX1NUQUxFLCBGRVRDSF9TRVRUSU5HU19TVUNDRVNTLCBSRUZSRVNIX1NUQVRFLCBVUExPQURfRkFWSUNPTiwgVVBMT0FEX0xPR08sIFVQTE9BRF9QSUNUVVJFIH0gZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuXG5jb25zdCBtYWludGVuYW5jZVJlZHVjZXJzID0ge1xuICAgIC8qKlxuICAgICAqIE1haW50ZW5hbmNlIG1vZGUgcmVkdWNlclxuICAgICAqIGVub2d3ZS9zZXR0aW5ncy5tYWludGVuYW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc3RhdGU9U3RhdGUubWFpbnRlbmFuY2VdXG4gICAgICogQHBhcmFtIHtHZW5lcmljQWN0aW9uPGJvb2xlYW4+fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhY3RpdmUoc3RhdGU6IGJvb2xlYW4gPSBTdGF0ZS5tYWludGVuYW5jZS5hY3RpdmUsIGFjdGlvbjogR2VuZXJpY0FjdGlvbjxib29sZWFuPik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvblxuICAgICAgICBpZiAoIVtBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFLCBERUFDVElWQVRFX01BSU5URU5FTkNFX01PREVdLmluY2x1ZGVzKHR5cGUpKSB7IHJldHVybiBzdGF0ZSB9XG4gICAgICAgIHJldHVybiB0eXBlID09PSBBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxufVxuXG4vKipcbiAqIFNpZGViYXIgcmVkdWNlclxuICogY2hlY2tzIGN1cnJlbnQgYWN0aXZlIHNpZGViYmFyIG1lbnVcbiAqIGVub2d3ZS9zZXR0aW5ncy5zaWRlYmFyXG4gKlxuICogQHBhcmFtIHtTaWRlYmFyfSBbc3RhdGU9U3RhdGUuc2lkZWJhcl1cbiAqIEBwYXJhbSB7R2VuZXJpY0FjdGlvbjxNZW51VGFiTmFtZXM+fSBhY3Rpb25cbiAqIEByZXR1cm5zIHtTaWRlYmFyfVxuICovXG5mdW5jdGlvbiBzaWRlYmFyKHN0YXRlOiBTaWRlYmFyID0gU3RhdGUuc2lkZWJhciwgYWN0aW9uOiBHZW5lcmljQWN0aW9uPE1lbnVUYWJOYW1lcz4pOiBTaWRlYmFyIHtcbiAgICBjb25zdCB7IHR5cGUsIGRhdGEgfSA9IGFjdGlvblxuICAgIHJldHVybiB0eXBlID09PSBBQ1RJVkFURV9TSURFQkFSX01FTlUgPyB7IC4uLnN0YXRlLCBhY3RpdmVTaWRlYmFyTWVudTogZGF0YSB9IDogc3RhdGVcbn1cblxuLyoqXG4gKiBBc3NldHMgcmVkdWNlclxuICogdGhlbWUgc2V0dGluZ3MgYXNzZXRzIHJlZHVjZXIgYXQgZW5vZ3dlL3NldHRpbmdzLmFzc2V0c1xuICpcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gcmVkdWNlclR5cGVzXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBhc3NldChyZWR1Y2VyVHlwZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gKHN0YXRlOiBNZWRpYUluZm8gfCB1bmRlZmluZWQsIGFjdGlvbjogR2VuZXJpY0FjdGlvbjxNZWRpYUluZm8+KTogTWVkaWFJbmZvIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBhY3Rpb25cbiAgICAgICAgY29uc3QgdHlwZXMgPSBPYmplY3QudmFsdWVzKHJlZHVjZXJUeXBlcylcbiAgICAgICAgaWYgKCF0eXBlcy5pbmNsdWRlcyh0eXBlKSkgeyByZXR1cm4gc3RhdGUgfVxuICAgICAgICBjb25zdCBpdGVtID0gdHlwZS5zcGxpdCgnXycpXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgYERFTEVURV8ke2l0ZW1bMV19YDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgY2FzZSBgVVBMT0FEXyR7aXRlbVsxXX1gOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5kYXRhIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQXBpIFNldHRpbmdzIG5ldHdvcmsgY2FsbCByZWR1Y2VyIGVub2d3ZS9zZXR0aW5ncy5hcGkuc2V0dGluZ3NcbiAqIHN0YXRlICBvZiBuZXR3b3JrIGNhbGwgIHRvIHJldHJpZXZlIHRoZW1lIHNldHRpbmdzXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSByZWR1Y2VyVHlwZXNcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIEFwaVNldHRpbmcocmVkdWNlclR5cGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gICAgcmV0dXJuIChzdGF0ZSA9IFN0YXRlLmFwaS5zZXR0aW5ncywgYWN0aW9uOiBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4pOiBBcGlTdGF0dXMgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvblxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC52YWx1ZXMocmVkdWNlclR5cGVzKVxuICAgICAgICBpZiAoIXR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7IHJldHVybiBzdGF0ZSB9XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRkVUQ0hfU0VUVElOR1NfU1RBTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdGFsZSdcbiAgICAgICAgICAgIGNhc2UgRkVUQ0hfU0VUVElOR1NfTE9BRElORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xvYWRpbmcnXG4gICAgICAgICAgICBjYXNlIEZFVENIX1NFVFRJTkdTX0VSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InXG4gICAgICAgICAgICBjYXNlIEZFVENIX1NFVFRJTkdTX05FVFdPUks6XG4gICAgICAgICAgICAgICAgcmV0dXJuICduZXR3b3JrJ1xuICAgICAgICAgICAgY2FzZSBGRVRDSF9TRVRUSU5HU19TVUNDRVNTOlxuICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjbG9zZWQnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IG1haW50ZW5hbmNlID0gY29tYmluZVJlZHVjZXJzKG1haW50ZW5hbmNlUmVkdWNlcnMpXG5cbmNvbnN0IGFzc2V0cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbG9nbzogYXNzZXQoeyBVUExPQURfTE9HTywgREVMRVRFX0xPR08gfSksXG4gICAgZmF2aWNvbjogYXNzZXQoeyBVUExPQURfRkFWSUNPTiwgREVMRVRFX0ZBVklDT04gfSksXG4gICAgcGljdHVyZTogYXNzZXQoeyBVUExPQURfUElDVFVSRSwgREVMRVRFX1BJQ1RVUkUgfSlcbn0pXG5cbmNvbnN0IHNldHRpbmdzID0gQXBpU2V0dGluZyh7XG4gICAgRkVUQ0hfU0VUVElOR1NfU1RBTEUsXG4gICAgRkVUQ0hfU0VUVElOR1NfQ0xPU0VELFxuICAgIEZFVENIX1NFVFRJTkdTX0xPQURJTkcsXG4gICAgRkVUQ0hfU0VUVElOR1NfRVJST1IsXG4gICAgRkVUQ0hfU0VUVElOR1NfTkVUV09SSyxcbiAgICBGRVRDSF9TRVRUSU5HU19TVUNDRVNTXG59KVxuXG5jb25zdCBhcGkgPSBjb21iaW5lUmVkdWNlcnMoeyBzZXR0aW5ncyB9KVxuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBtYWludGVuYW5jZSwgc2lkZWJhciwgYXNzZXRzLCBhcGlcbn0pXG5cbi8qKlxuICogcmVkdWNlciBmb3IgZW5vZ3dlIGFwcFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7RW5vZ3dlU3RhdGUuU2V0dGluZ3N9IFtzdGF0ZT1TdGF0ZV1cbiAqIEBwYXJhbSB7KEdlbmVyaWNBY3Rpb248RW5vZ3dlU3RhdGUuU2V0dGluZ3M+IHwgQW55QWN0aW9uKX0gYWN0aW9uXG4gKiBAcmV0dXJucyB7RW5vZ3dlU3RhdGUuU2V0dGluZ3N9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICAgIHN0YXRlOiBFbm9nd2VTdGF0ZS5TZXR0aW5ncyA9IFN0YXRlLCBhY3Rpb246IEdlbmVyaWNBY3Rpb248RW5vZ3dlU3RhdGUuU2V0dGluZ3M+IHwgQW55QWN0aW9uIHwgYW55XG4pOiBFbm9nd2VTdGF0ZS5TZXR0aW5ncyB7XG4gICAgY29uc3QgeyB0eXBlLCBkYXRhIH0gPSBhY3Rpb25cbiAgICBpZiAodHlwZSA9PT0gUkVGUkVTSF9TVEFURSkge1xuICAgICAgICByZXR1cm4gZGF0YSA/IGRhdGEgOiBzdGF0ZVxuICAgIH1cbiAgICByZXR1cm4gcm9vdFJlZHVjZXJzKHN0YXRlIGFzIGFueSwgYWN0aW9uKVxufVxuIiwiaW1wb3J0IHsgRW5vZ3dlU3RhdGUgfSBmcm9tICdnbG9iYWwnXG5pbXBvcnQgU3RhdGVKc29uIGZyb20gJy4vc3RhdGUuanNvbidcblxuZXhwb3J0IGNvbnN0IFN0YXRlOiBFbm9nd2VTdGF0ZS5TZXR0aW5ncyA9IHtcbiAgLi4uKFN0YXRlSnNvbiBhcyB1bmtub3duIGFzIEVub2d3ZVN0YXRlLlNldHRpbmdzKSxcbiAgYXNzZXRzOiB7XG4gICAgbG9nbzogdW5kZWZpbmVkLFxuICAgIGZhdmljb246IHVuZGVmaW5lZCxcbiAgICBwaWN0dXJlOiB1bmRlZmluZWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdTdHlsZXM6IHsgW2tleTogc3RyaW5nXTogQ1NTUHJvcGVydGllcyB9ID0ge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmMWYxJyxcbiAgICAgICAgcGFkZGluZzogJzNlbScsXG4gICAgICAgIGhlaWdodDogJ2NhbGMoMTAwdmggLSAxNWVtKScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlOGU4J1xuICAgIH0sXG4gICAgc2lkZWJhcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAndG9wJyxcbiAgICAgICAgd2lkdGg6ICczMHZ3JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiA0MCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA0MFxuICAgIH0sXG4gICAgcGFnZToge1xuICAgICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBwYWdlSGVhZGVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgcGFkZGluZzogJzNlbScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlOGU4J1xuICAgIH0sXG4gICAgcGFnZUNvbnRlbnQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICBwYWRkaW5nOiAnM2VtJyxcbiAgICAgICAgaGVpZ2h0OiAnNjAlJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU4ZTgnXG4gICAgfSxcbiAgICBtYWludGVuYW5jZU1vZGU6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxMlxuICAgIH0sXG4gICAgdGV4dFdpdGhJY29uOiB7XG4gICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwLjJlbSdcbiAgICB9LFxuICAgIG1lbnVpdGVtOiB7XG4gICAgICAgIHBhZGRpbmc6ICcxZW0nLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZThlOGU4J1xuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgd2lkdGg6ICc3MHZ3JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBzZXR0aW5nc0Fzc2V0c1BhZ2U6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBhc3NldFBhZ2U6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgYXNzZXRJbWFnZUNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIG1hcmdpbjogJzAgIGF1dG8nXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBmb250U2l6ZTogMFxuICAgIH0sXG4gICAgYXNzZXRJbWFnZUJ1dHRvbnM6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHBhZGRpbmc6ICcyZW0nXG4gICAgfSxcbiAgICBtYXJnaW5Cb3R0b206IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJ1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd29yZHByZXNzL2RhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdvcmRwcmVzcy9lbGVtZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3b3JkcHJlc3MvaTE4blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid3BhcGkvc3VwZXJhZ2VudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9