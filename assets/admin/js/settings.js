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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc0Fzc2V0c1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvU2V0dGluZ3NMYXlvdXRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZXR0aW5ncy9jb21wb25lbnRzL1NldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc1NJZGViYXIudHN4Iiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2NvbXBvbmVudHMvU2V0dGluZ3NVcGxvYWRJbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZXR0aW5ncy9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL2FkbWluL3NldHRpbmdzL3N0b3JlL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvcmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3RvcmUvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2V0dGluZ3Mvc3R5bGVzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZGF0YVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvZWxlbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3b3JkcHJlc3MvaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3cGFwaS9zdXBlcmFnZW50XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw2RkFBa0Q7QUFFbEQsMkVBQW9DO0FBQ3BDLHdGQUFtQztBQUVuQyxvRUFBOEI7QUFDOUIsdUVBQXNFO0FBQ3RFLDJGQUFpRDtBQUNqRCwrR0FBNkM7QUFDN0Msd0hBQW1EO0FBU25ELFNBQWdCLFFBQVEsQ0FBQyxLQUEyQztJQUNoRSxPQUFPLENBQ0gsb0JBQUMsZ0JBQUcsSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7UUFDbkUsb0JBQUMsZ0JBQUcsSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDO1lBQzVGLG9CQUFDLHVCQUFVO2dCQUNQLG9CQUFDLHNCQUFTLElBQUMsU0FBUyxFQUFFLG9CQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztvQkFDOUMsb0JBQUMsdUJBQVUsSUFDUCxNQUFNLEVBQUUsSUFBSSxFQUVaLE9BQU8sRUFBRSxJQUFJLEVBQ2IsSUFBSSxFQUFDLE1BQU0sRUFDWCxJQUFJLEVBQUUsRUFBRSxFQUNSLFNBQVMsRUFBRSxvQkFBVSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FDbEQ7b0JBQ0QsU0FBRSxDQUFDLGdCQUFnQixDQUFDLENBQ2IsQ0FDSDtZQUNiLG9CQUFDLHFCQUFRO2dCQUNMLG9CQUFDLGlDQUFlLElBQUMsUUFBUSxFQUFFLG9CQUFRLEVBQUUsUUFBUSxFQUFFLG9CQUFRLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBSSxDQUNuRixDQUNUO1FBQ04sb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBSSxDQUNoQyxDQUNUO0FBQ0wsQ0FBQztBQXhCRCw0QkF3QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDRCw2RkFBK0M7QUFDL0Msb0ZBQXVFO0FBQ3ZFLG9FQUE4QjtBQUM5Qix1RUFBc0M7QUFDdEMscUZBQXdDO0FBQ3hDLGlHQUE4QztBQUM5QywyRkFBc0M7QUFDdEMsbUdBQXFDO0FBRXhCLG9CQUFZLEdBQUcsdUJBQWEsQ0FBQyxhQUFLLENBQUM7QUFPaEQsU0FBUyxHQUFHO0lBQ0YsMENBQW1DLEVBQWxDLGFBQUssRUFBRSxnQkFBMkI7SUFFekMsbUJBQVMsQ0FBQztRQUNOLElBQU0saUJBQWlCLEdBQUcscUJBQWEsQ0FBQyxTQUFTLENBQUMsY0FBTSxlQUFRLHVCQUFNLEtBQUssR0FBSyxxQkFBYSxDQUFDLFFBQVEsRUFBRSxFQUFHLEVBQW5ELENBQW1ELENBQUM7UUFDNUcsT0FBTyxpQkFBaUI7SUFDNUIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNILG9CQUFDLG9CQUFZLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQzlCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxvQkFBQyxvQkFBTyxPQUFHO1FBQ2hELG9CQUFDLHNCQUFTO1lBQ04sb0JBQUMsbUJBQVEsSUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBSSxDQUMzQyxDQUNRLENBQzNCO0FBQ0wsQ0FBQztBQU9ELFNBQWdCLFdBQVc7SUFDdkIsbUJBQVMsQ0FBQztRQUNOLHFCQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBSyxJQUFJLFlBQUssRUFBTCxDQUFLLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxvQkFBQyxHQUFHLE9BQUc7QUFDbEIsQ0FBQztBQU5ELGtDQU1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NELDZGQUFrRTtBQUNsRSxvRkFBK0M7QUFDL0Msb0VBQThCO0FBQzlCLGlHQUEySDtBQUMzSCxpR0FBdUU7QUFDdkUsc0dBQWtEO0FBQ2xELDRHQUE0QztBQUM1QyxvSUFBMkQ7QUFRM0QsU0FBZ0Isa0JBQWtCO0lBQ3RCLG9FQUFNLENBQTZCO0lBQzNDLElBQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSTtJQUNsQyxJQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU87SUFDeEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPO0lBRXhDLE9BQU8sQ0FDSCw2QkFBSyxLQUFLLEVBQUUsd0JBQWEsQ0FBQyxTQUFTO1FBQy9CLG9CQUFDLGtCQUFLO1lBQ0Ysb0JBQUMsc0JBQVMsSUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxNQUFNO2dCQUN0QyxvQkFBQyxxQkFBUTtvQkFDTCxvQkFBQyx5Q0FBbUIsSUFDaEIsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUUsMkJBQWlCLENBQUMscUJBQVcsQ0FBQyxFQUN2QyxRQUFRLEVBQUUsMkJBQWlCLENBQUMscUJBQVcsQ0FBQyxFQUN4QyxLQUFLLEVBQUUsSUFBSSxHQUNiLENBQ0ssQ0FDSCxDQUNSO1FBQ1Isb0JBQUMsa0JBQUs7WUFDRixvQkFBQyxzQkFBUyxJQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFNBQVM7Z0JBQzFDLG9CQUFDLHFCQUFRO29CQUNMLG9CQUFDLHlDQUFtQixJQUNoQixLQUFLLEVBQUMsU0FBUyxFQUNmLE9BQU8sRUFBRSwyQkFBaUIsQ0FBQyx3QkFBYyxDQUFDLEVBQzFDLFFBQVEsRUFBRSwyQkFBaUIsQ0FBQyx3QkFBYyxDQUFDLEVBQzNDLEtBQUssRUFBRSxPQUFPLEdBQ2hCLENBQ0ssQ0FDSCxDQUNSO1FBQ1Isb0JBQUMsa0JBQUs7WUFDRixvQkFBQyxzQkFBUyxJQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLGlCQUFpQjtnQkFDbEQsb0JBQUMscUJBQVE7b0JBQ0wsb0JBQUMseUNBQW1CLElBQ2hCLEtBQUssRUFBQyxTQUFTLEVBQ2YsT0FBTyxFQUFFLDJCQUFpQixDQUFDLHdCQUFjLENBQUMsRUFDMUMsUUFBUSxFQUFFLDJCQUFpQixDQUFDLHdCQUFjLENBQUMsRUFDM0MsS0FBSyxFQUFFLE9BQU8sR0FDaEIsQ0FDSyxDQUNILENBQ1IsQ0FDTixDQUNUO0FBQ0wsQ0FBQztBQTlDRCxnREE4Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REQsb0ZBQTZDO0FBQzdDLG9FQUE4QjtBQU85QixTQUFnQixrQkFBa0I7SUFDOUIsT0FBTyxDQUFDLG9CQUFDLGtCQUFRLE9BQUcsQ0FBQztBQUN6QixDQUFDO0FBRkQsZ0RBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCw2RkFBNkQ7QUFDN0Qsb0ZBQWdFO0FBQ2hFLDJFQUFvQztBQUNwQyx3RkFBbUM7QUFFbkMsb0VBQThCO0FBQzlCLHVFQUFpRTtBQUNqRSxxRkFBd0M7QUFDeEMsaUdBQWtFO0FBQ2xFLDRHQUE0QztBQUM1QyxpSUFBeUQ7QUFDekQsaUlBQXlEO0FBU3pELFNBQWdCLFlBQVksQ0FBQyxLQUF5QztJQUM1RCx5REFBa0YsRUFBakUsOEJBQU0sRUFBVyx5QkFBZ0Q7SUFDeEYsSUFBTSxNQUFNLEdBQUcsT0FBTyxLQUFLLFNBQVM7SUFDcEMsSUFBTSxRQUFRLEdBQUcsY0FBTSw2QkFBWSxDQUFDLHFCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBdEMsQ0FBc0M7SUFDN0QsSUFBTSxLQUFLLEdBQWtCO1FBQ3pCLE1BQU0sRUFBRSxvQkFBQyx1Q0FBa0IsT0FBRztRQUM5QixPQUFPLEVBQUUsb0JBQUMsdUNBQWtCLE9BQUc7S0FDbEM7SUFDRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUU5QixPQUFPLENBQ0gsb0JBQUMsZ0JBQUcsSUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDO1FBQzdELG9CQUFDLHVCQUFVLElBQUMsU0FBUyxFQUFFLG9CQUFVLENBQUMsUUFBUSxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDO1lBQ3hGLG9CQUFDLHNCQUFTLElBQUMsU0FBUyxFQUFFLG9CQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFhO1lBQzNGLDZCQUFLLFNBQVMsRUFBQyxPQUFPO2dCQUNsQixvQkFBQywwQkFBYSxJQUFDLEtBQUssRUFBRSxTQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUFpQixHQUFJLENBQ2pHO1lBQ04sb0JBQUMsbUJBQU0sSUFDSCxNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxNQUFNLEVBQ2hCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsS0FBSyxFQUFFLFNBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsRUFDckMsT0FBTyxFQUFFLFFBQVEsb0JBR1osQ0FDQTtRQUNiLG9CQUFDLHFCQUFRLFFBQUUsSUFBSSxDQUFZLENBQ3pCLENBQ1Q7QUFDTCxDQUFDO0FBOUJELG9DQThCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERCw2RkFBZ0Q7QUFDaEQsb0ZBQStDO0FBRS9DLG9FQUE4QjtBQUM5Qix1RUFBa0Q7QUFDbEQscUZBQXdDO0FBQ3hDLGlHQUF3RDtBQUN4RCw0R0FBNEM7QUFTNUMsU0FBZ0IsZUFBZSxDQUFDLEtBQW1CO0lBQy9DLElBQU0sV0FBVyxHQUFHLG9CQUFVLENBQUMsMEJBQVksQ0FBQyxDQUFDLFdBQVc7SUFDeEQsSUFBTSxJQUFJLEdBQVUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBSSxJQUFJLFFBQUMsRUFBRSxJQUFJLFFBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBcEUsQ0FBb0UsQ0FBQztJQUNwSCxJQUFNLFFBQVEsR0FBRyxVQUFDLEdBQVEsSUFBSyxVQUFHLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxDQUFDLFdBQVcsRUFBM0MsQ0FBMkM7SUFDMUUsSUFBTSxRQUFRLEdBQUcsVUFBQyxHQUFRLElBQUssWUFBSyxDQUFDLGlCQUFpQixLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQXJDLENBQXFDO0lBQ3BFLElBQU0sWUFBWSxHQUFHLFVBQUMsR0FBUSxJQUFLLHFCQUFNLDRCQUFhLENBQUMsUUFBUSxDQUE4QjtRQUN6RixJQUFJLEVBQUUsK0JBQXFCLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0tBQzlDLENBQUMsRUFGdUMsQ0FFdkMsRUFGaUMsQ0FFakM7SUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxRQUNsQyxvQkFBQyxvQkFBTyxJQUFDLEdBQUcsRUFBRSxzQkFBb0IsS0FBTztRQUNyQyxvQkFBQyxvQkFBTyxJQUNKLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUyxFQUN4QixPQUFPLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUMxQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFDaEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDdkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFckIsb0JBQUMscUJBQVEsSUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBSTs7WUFBRSxHQUFHLENBQUMsS0FBSyxDQUNqQyxDQUNKLENBQ2IsRUFacUMsQ0FZckMsQ0FBQztJQUVGLE9BQU8sb0JBQUMsZ0JBQUcsSUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBRyxJQUFJLENBQU87QUFDdkUsQ0FBQztBQXZCRCwwQ0F1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0QsNkZBQStEO0FBRS9ELDJFQUFvQztBQUVwQyxvRUFBOEI7QUFDOUIsdUVBQXFEO0FBQ3JELHNHQUFrRDtBQUNsRCxxRUFBeUM7QUFTekMsU0FBZ0IsbUJBQW1CLENBQUMsS0FBb0M7SUFDNUQsdUJBQUssRUFBRSx5QkFBUSxFQUFFLHVCQUFPLEVBQUUsbUJBQUssQ0FBVTtJQUNqRCxJQUFNLE9BQU8sR0FBRyxjQUFNLDJCQUFDLHdCQUFXLElBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsd0JBQWEsQ0FBQyxXQUFXLEdBQUksRUFBckUsQ0FBcUU7SUFDM0YsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFnQixJQUFhLGFBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQUksVUFBRyxDQUFDLEdBQUcsRUFBUCxDQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpELENBQXlEO0lBRTVHLE9BQU8sQ0FDSCxvQkFBQyxpQkFBSSxJQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUM7UUFDL0csb0JBQUMsZ0JBQUcsSUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxTQUFTO1lBQ3JDLG9CQUFDLGdCQUFHLFFBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBSyxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFDLE9BQU8sT0FBRyxDQUFPO1lBQ3ZFLG9CQUFDLGdCQUFHO2dCQUNBLG9CQUFDLHFCQUFRO29CQUNMLG9CQUFDLHVCQUFVLElBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxPQUFPLElBQUcsU0FBRSxDQUFDLFlBQVUsS0FBTyxDQUFDLENBQWM7b0JBQ2pHLG9CQUFDLHVCQUFVLElBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsUUFBUSxJQUFHLFNBQUUsQ0FBQyxZQUFVLEtBQU8sQ0FBQyxDQUFjLENBQzVHLENBQ1QsQ0FDSixDQUNILENBQ1Y7QUFDTCxDQUFDO0FBbEJELGtEQWtCQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENZLGdCQUFRLEdBQW1CLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO0FBQ3pILGdCQUFRLEdBQWE7SUFDaEMsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixVQUFVLEVBQUUsbUJBQW1CO0lBQy9CLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsV0FBVyxFQUFFLFFBQVE7SUFDckIsYUFBYSxFQUFFLFVBQVU7Q0FDMUI7QUFDWSwwQkFBa0IsR0FBRztJQUNoQyxLQUFLLEVBQUUsd0JBQXdCO0lBQy9CLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUNsQyxRQUFRLEVBQUUsS0FBSztJQUNmLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0NBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJELG9GQUEyQztBQUMzQyxvRUFBOEI7QUFDOUIsdUhBQXNEO0FBRXRELGdCQUFNLENBQUMsb0JBQUMseUJBQVcsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSHpFLG9GQUErQjtBQUVsQixpQ0FBeUIsR0FBRywyQkFBMkI7QUFDdkQsbUNBQTJCLEdBQUcsNkJBQTZCO0FBQzNELDZCQUFxQixHQUFHLHVCQUF1QjtBQUMvQyxtQkFBVyxHQUFHLGFBQWE7QUFDM0Isc0JBQWMsR0FBRyxnQkFBZ0I7QUFDakMsc0JBQWMsR0FBRyxnQkFBZ0I7QUFDakMsbUJBQVcsR0FBRyxhQUFhO0FBQzNCLHNCQUFjLEdBQUcsZ0JBQWdCO0FBQ2pDLHNCQUFjLEdBQUcsZ0JBQWdCO0FBQ2pDLDZCQUFxQixHQUFHLHVCQUF1QjtBQUMvQyw0QkFBb0IsR0FBRyxzQkFBc0I7QUFDN0MsOEJBQXNCLEdBQUcsd0JBQXdCO0FBQ2pELDRCQUFvQixHQUFHLHNCQUFzQjtBQUM3Qyw4QkFBc0IsR0FBRyx3QkFBd0I7QUFDakQsOEJBQXNCLEdBQUcsd0JBQXdCO0FBQ2pELHFCQUFhLEdBQUcsZUFBZTtBQVU1QyxTQUFTLFlBQVksQ0FBSyxNQUF3QjtJQUNoRCxPQUFPLE1BQU07QUFDZixDQUFDO0FBU0QsU0FBUyxXQUFXLENBQUUsSUFBWTtJQUNoQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQXFFLElBQUksRUFBRSxFQUFFLElBQUksUUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDeEgsQ0FBQztBQUVZLGVBQU8sR0FBRztJQUNyQix1QkFBdUIsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUF1RCxJQUFJLEVBQUU7UUFDckcsSUFBSSxFQUFFLGlDQUF5QixFQUFFLElBQUksRUFBRSxJQUFJO0tBQzVDLENBQUM7SUFDRixtQkFBbUIsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFpRSxJQUFJLEVBQUU7UUFDM0csSUFBSSxFQUFFLDZCQUFxQixFQUFFLElBQUksRUFBRSxTQUFTO0tBQzdDLENBQUM7SUFDRixVQUFVLEVBQUUsV0FBVyxDQUFDLG1CQUFXLENBQUM7SUFDcEMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxzQkFBYyxDQUFDO0lBQzFDLGFBQWEsRUFBRSxXQUFXLENBQUMsc0JBQWMsQ0FBQztJQUMxQyxVQUFVLEVBQUUsV0FBVyxDQUFDLG1CQUFXLENBQUM7SUFDcEMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxzQkFBYyxDQUFDO0lBQzFDLGFBQWEsRUFBRSxXQUFXLENBQUMsc0JBQWMsQ0FBQztJQUMxQyx5QkFBeUIsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUF1RCxJQUFJLEVBQUU7UUFDdkcsSUFBSSxFQUFFLGlDQUF5QixFQUFFLElBQUksRUFBRSxLQUFLO0tBQzdDLENBQUM7SUFDRixtQkFBbUIsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDckcsSUFBSSxFQUFFLDZCQUFxQixFQUFFLElBQUksRUFBRSxRQUFRO0tBQzVDLENBQUM7SUFDRixrQkFBa0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDcEcsSUFBSSxFQUFFLDRCQUFvQixFQUFFLElBQUksRUFBRSxPQUFPO0tBQzFDLENBQUM7SUFDRixvQkFBb0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDdEcsSUFBSSxFQUFFLDhCQUFzQixFQUFFLElBQUksRUFBRSxTQUFTO0tBQzlDLENBQUM7SUFDRixrQkFBa0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDcEcsSUFBSSxFQUFFLDRCQUFvQixFQUFFLElBQUksRUFBRSxPQUFPO0tBQzFDLENBQUM7SUFDRixvQkFBb0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDdEcsSUFBSSxFQUFFLDhCQUFzQixFQUFFLElBQUksRUFBRSxTQUFTO0tBQzlDLENBQUM7SUFDRixvQkFBb0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUEyRCxJQUFJLEVBQUU7UUFDdEcsSUFBSSxFQUFFLDhCQUFzQixFQUFFLElBQUksRUFBRSxTQUFTO0tBQzlDLENBQUM7SUFDRixZQUFZLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBaUYsSUFBSSxFQUFFO1FBQ3BILElBQUksRUFBRSxxQkFBYSxFQUFFLElBQUksRUFBRSxhQUFLO0tBQ2pDLENBQUM7Q0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQsb0dBQW9DO0FBQ3BDLHlFQUFpQztBQUNqQywyRkFBaUQ7QUFDakQsMEZBQTBHO0FBRXBHLHdCQUE4QyxFQUE1QyxzQkFBUSxFQUFFLHNCQUFRLEVBQUUsY0FBd0I7QUFDcEQsSUFBTSxPQUFPLEdBQU0sUUFBUSxVQUFLLFFBQVEsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUU7QUFDbkUsSUFBTSxRQUFRLEdBQU0sT0FBTyx1QkFBb0I7QUFDL0MsSUFBTSxFQUFFLEdBQUcsSUFBSSxvQkFBSyxDQUFDLEVBQUUsUUFBUSxZQUFFLENBQUM7QUFTbEMsU0FBc0IsV0FBVzs7Ozs7OztvQkFFakIsb0JBQW9CLEdBQWdELGlCQUFPLHFCQUF2RCxFQUFFLHlCQUE4QyxpQkFBTyxxQkFBakMsRUFBRSx3QkFBd0IsaUJBQU8sb0JBQVosQ0FBWTtvQkFDbkYsZ0JBQWEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztvQkFDbkIsV0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRTs7b0JBQXhDLElBQUksR0FBSyxVQUErQixVQUFwQztvQkFDdEIsZ0JBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUN2RSxVQUFVLENBQUM7d0JBQ1AsZ0JBQWEsQ0FBQyxRQUFRLENBQUMsc0JBQW9CLEVBQUUsQ0FBQzt3QkFDOUMsZ0JBQWEsQ0FBQyxRQUFRLENBQUMscUJBQW1CLEVBQUUsQ0FBQztvQkFDakQsQ0FBQyxFQUFFLElBQUksQ0FBQzs7OztvQkFFUixVQUFVLENBQUMsY0FBTSx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBcEQsQ0FBb0QsRUFBRSxJQUFJLENBQUM7Ozs7OztDQUVuRjtBQWJELGtDQWFDO0FBU0QsU0FBc0IsWUFBWSxDQUFDLFFBQThCOzs7Ozs7O29CQUVqRCxvQkFBb0IsR0FBZ0QsaUJBQU8scUJBQXZELEVBQUUseUJBQThDLGlCQUFPLHFCQUFqQyxFQUFFLHdCQUF3QixpQkFBTyxvQkFBWixDQUFZO29CQUNuRixnQkFBYSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUM5QyxXQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOztvQkFBM0csU0FBMkc7b0JBQzNHLFVBQVUsQ0FBQzt3QkFDUCxnQkFBYSxDQUFDLFFBQVEsQ0FBQyxzQkFBb0IsRUFBRSxDQUFDO3dCQUM5QyxnQkFBYSxDQUFDLFFBQVEsQ0FBQyxxQkFBbUIsRUFBRSxDQUFDO29CQUNqRCxDQUFDLEVBQUUsSUFBSSxDQUFDOzs7O29CQUVSLFVBQVUsQ0FBQyxjQUFNLHVCQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFwRCxDQUFvRCxFQUFFLElBQUksQ0FBQzs7Ozs7O0NBRW5GO0FBWkQsb0NBWUM7QUFTRCxTQUFnQixpQkFBaUIsQ0FBQyxTQUFrQjtJQUNoRCxJQUFNLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxxQ0FBMkIsRUFBRTtJQUN4RCxJQUFNLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxtQ0FBeUIsRUFBRTtJQUNwRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0JBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztBQUM1RixDQUFDO0FBSkQsOENBSUM7QUFTRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFjO0lBQzVDLElBQU0sT0FBTyxHQUFHLFVBQUMsTUFBa0IsSUFBSyxhQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssdUJBQU0sOEJBQWtCLEdBQUssTUFBTSxFQUFHLEVBQXJELENBQXFEO0lBQzdGLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztJQUN6RSxJQUFNLFFBQVEsR0FBRyxjQUFNLHVCQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQS9GLENBQStGO0lBRXRILEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUU1QixPQUFPLFVBQUMsQ0FBa0QsSUFBSyxZQUFLLENBQUMsSUFBSSxFQUFFLEVBQVosQ0FBWTtBQUMvRSxDQUFDO0FBUkQsOENBUUM7QUFRRCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFZO0lBQzFDLE9BQU8sY0FBTSx1QkFBYSxDQUFDLFFBQVEsQ0FBdUMsRUFBRSxJQUFJLFFBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQXZGLENBQXVGO0FBQ3hHLENBQUM7QUFGRCw4Q0FFQztBQU9ELFNBQWdCLFlBQVk7QUFFNUIsQ0FBQztBQUZELG9DQUVDOzs7Ozs7Ozs7Ozs7Ozs7QUNyR0QsMkVBQStDO0FBQy9DLDBGQUFtQztBQUNuQyw2RkFBb0M7QUFFdkIscUJBQWEsR0FBRyxvQkFBYSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsT0FBTyxzQkFBRSxPQUFPLHFCQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5GLDJFQUFpRDtBQUdqRCwwRkFBNlY7QUFDN1Ysb0ZBQStCO0FBRS9CLElBQU0sbUJBQW1CLEdBQUc7SUFTeEIsTUFBTSxFQUFOLFVBQU8sS0FBeUMsRUFBRSxNQUE4QjtRQUF6RSxnQ0FBaUIsYUFBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBQ3BDLHNCQUFJLENBQVc7UUFDdkIsSUFBSSxDQUFDLENBQUMsbUNBQXlCLEVBQUUscUNBQTJCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUs7U0FBRTtRQUM5RixPQUFPLElBQUksS0FBSyxtQ0FBeUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO0lBQzVELENBQUM7Q0FDSjtBQVdELFNBQVMsT0FBTyxDQUFDLEtBQThCLEVBQUUsTUFBbUM7SUFBbkUsZ0NBQWlCLGFBQUssQ0FBQyxPQUFPO0lBQ25DLHNCQUFJLEVBQUUsa0JBQUksQ0FBVztJQUM3QixPQUFPLElBQUksS0FBSywrQkFBcUIsQ0FBQyxDQUFDLHVCQUFNLEtBQUssS0FBRSxpQkFBaUIsRUFBRSxJQUFJLElBQUcsQ0FBQyxDQUFDLEtBQUs7QUFDekYsQ0FBQztBQVNELFNBQVMsS0FBSyxDQUFDLFlBQW9DO0lBQy9DLE9BQU8sVUFBQyxLQUE0QixFQUFFLE1BQWdDO1FBQzFELHNCQUFJLEVBQUUsa0JBQUksQ0FBVztRQUM3QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSztTQUFFO1FBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLFlBQVUsSUFBSSxDQUFDLENBQUMsQ0FBRztnQkFDcEIsT0FBTyxJQUFJO1lBQ2YsS0FBSyxZQUFVLElBQUksQ0FBQyxDQUFDLENBQUc7Z0JBQ3BCLDZCQUFZLEtBQUssR0FBSyxJQUFJLEVBQUU7WUFDaEM7Z0JBQ0ksT0FBTyxLQUFLO1NBQ25CO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFTRCxTQUFTLFVBQVUsQ0FBQyxZQUFvQztJQUNwRCxPQUFPLFVBQUMsS0FBMEIsRUFBRSxNQUFnQztRQUE1RCxnQ0FBUSxhQUFLLENBQUMsR0FBRyxDQUFDLFFBQVE7UUFDdEIsc0JBQUksQ0FBVztRQUN2QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSztTQUFFO1FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLDhCQUFvQjtnQkFDckIsT0FBTyxPQUFPO1lBQ2xCLEtBQUssZ0NBQXNCO2dCQUN2QixPQUFPLFNBQVM7WUFDcEIsS0FBSyw4QkFBb0I7Z0JBQ3JCLE9BQU8sT0FBTztZQUNsQixLQUFLLGdDQUFzQjtnQkFDdkIsT0FBTyxTQUFTO1lBQ3BCLEtBQUssZ0NBQXNCO2dCQUN2QixPQUFPLFNBQVM7WUFDcEI7Z0JBQ0ksT0FBTyxRQUFRO1NBQ3RCO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFNLFdBQVcsR0FBRyxzQkFBZSxDQUFDLG1CQUFtQixDQUFDO0FBRXhELElBQU0sTUFBTSxHQUFHLHNCQUFlLENBQUM7SUFDM0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLFdBQVcseUJBQUUsV0FBVyx5QkFBRSxDQUFDO0lBQ3pDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxjQUFjLDRCQUFFLGNBQWMsNEJBQUUsQ0FBQztJQUNsRCxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsY0FBYyw0QkFBRSxjQUFjLDRCQUFFLENBQUM7Q0FDckQsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN6QixDQUFDO0FBRUYsSUFBTSxHQUFHLEdBQUcsc0JBQWUsQ0FBQyxFQUFFLFFBQVEsWUFBRSxDQUFDO0FBRTVCLG9CQUFZLEdBQUcsc0JBQWUsQ0FBQztJQUN4QyxXQUFXLGVBQUUsT0FBTyxXQUFFLE1BQU0sVUFBRSxHQUFHO0NBQ3BDLENBQUM7QUFVRixTQUFnQixPQUFPLENBQ25CLEtBQW1DLEVBQUUsTUFBNkQ7SUFBbEcsZ0NBQThCLGFBQUs7SUFFM0Isc0JBQUksRUFBRSxrQkFBSSxDQUFXO0lBQzdCLElBQUksSUFBSSxLQUFLLHVCQUFhLEVBQUU7UUFDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztLQUM3QjtJQUNELE9BQU8sb0JBQVksQ0FBQyxLQUFZLEVBQUUsTUFBTSxDQUFDO0FBQzdDLENBQUM7QUFSRCwwQkFRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IRCxpSEFBb0M7QUFFdkIsYUFBSyx5QkFDWixvQkFBNkMsS0FDakQsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsU0FBUztRQUNsQixPQUFPLEVBQUUsU0FBUztLQUNuQixJQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNSWSxxQkFBYSxHQUFxQztJQUMzRCxTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixZQUFZLEVBQUUsbUJBQW1CO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLEVBQUU7UUFDZixZQUFZLEVBQUUsRUFBRTtLQUNuQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxDQUFDO0tBQ1Y7SUFDRCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUUsTUFBTTtRQUNmLGNBQWMsRUFBRSxlQUFlO1FBQy9CLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLEtBQUs7UUFDZCxZQUFZLEVBQUUsbUJBQW1CO0tBQ3BDO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsUUFBUTtRQUNuQixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxLQUFLO1FBQ2IsWUFBWSxFQUFFLG1CQUFtQjtLQUNwQztJQUNELGVBQWUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7S0FDekI7SUFDRCxRQUFRLEVBQUU7UUFDTixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLENBQUM7UUFDVCxZQUFZLEVBQUUsQ0FBQztRQUNmLFlBQVksRUFBRSxtQkFBbUI7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE1BQU07S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDSCxhQUFhLEVBQUUsRUFBRTtRQUNqQixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxRQUFRO0tBQ3ZCO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtLQUMzQjtJQUNELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLE1BQU07S0FDaEI7SUFDRCxtQkFBbUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsTUFBTTtRQUNmLE1BQU0sRUFBRSxTQUFTO0tBQ3BCO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUNELGlCQUFpQixFQUFFO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsUUFBUTtRQUN2QixVQUFVLEVBQUUsUUFBUTtRQUNwQixPQUFPLEVBQUUsS0FBSztLQUNqQjtJQUNELFlBQVksRUFBRTtRQUNWLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0NBQ0o7Ozs7Ozs7Ozs7OztBQzdGRCxrRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJhZG1pbi9qcy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYWRtaW4vc2V0dGluZ3MvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cydcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlUHJvcHMgfSBmcm9tICdnbG9iYWwnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmRCb2R5LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUsIENvbCwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHRhYkljb25zLCB0YWJOYW1lcyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IFNldHRpbmdzUGFnZSB9IGZyb20gJy4vU2V0dGluZ3NQYWdlJ1xuaW1wb3J0IHsgU2V0dGluZ3NTaWRlYmFyIH0gZnJvbSAnLi9TZXR0aW5nc1NJZGViYXInXG5cbi8qKlxuICogU2V0dGluZ3MgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtQcm9wc1dpdGhDaGlsZHJlbjxTZXR0aW5nc1BhZ2VQcm9wcz59IHByb3BzXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5ncyhwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48U2V0dGluZ3NQYWdlUHJvcHM+KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cgbm9HdXR0ZXJzPXt0cnVlfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2ZsZXgtZmlsbCcsICdmbGV4LWdyb3ctMScpfT5cbiAgICAgICAgICAgIDxDb2wgbWQ9XCIzXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjYXJkJywgJ3AtMCcsICdib3JkZXItMCcsICdiZy1saWdodCcsICdkLW5vbmUnLCAnZC1tZC1ibG9jaycpfT5cbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2QtZmxleCcsICdtYi0wJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17ZXhwYW5kTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NtYWxsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyOX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2JvcmRlci0wJywgJ3NoYWRvdy1ub25lJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge19fKCdUaGVtZSBTZXR0aW5ncycpfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NTaWRlYmFyIHRhYk5hbWVzPXt0YWJOYW1lc30gdGFiSWNvbnM9e3RhYkljb25zfSBhY3RpdmVTaWRlYmFyTWVudT17cHJvcHMucGFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8U2V0dGluZ3NQYWdlIHBhZ2U9e3Byb3BzLnBhZ2V9IC8+XG4gICAgICAgIDwvUm93PlxuICAgIClcbn1cbiIsImltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgc2V0dGluZ3NTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgZ2V0U2V0dGluZ3MgfSBmcm9tICcuLi9zdG9yZS9lZmZlY3RzJ1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSdcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9TZXR0aW5ncydcblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoU3RhdGUpXG5cbi8qKlxuICogQXBwIENvbXBvbmVudFxuICpcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gQXBwKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFN0YXRlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmVTdWJzY3JpcHRpb24gPSBzZXR0aW5nc1N0b3JlLnN1YnNjcmliZSgoKSA9PiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCAuLi5zZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkgfSkpXG4gICAgICAgIHJldHVybiBzdG9yZVN1YnNjcmlwdGlvblxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgICAgICB7c3RhdGUuYXBpLnNldHRpbmdzID09PSAnbG9hZGluZycgJiYgPFNwaW5uZXIgLz59XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyBwYWdlPXtzdGF0ZS5zaWRlYmFyLmFjdGl2ZVNpZGViYXJNZW51fSAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cbi8qKlxuICogIFNldHRpbmdzQXBwIENvbXBvZW50XG4gKlxuICogQGV4cG9ydFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NBcHAoKTogSlNYLkVsZW1lbnQge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFNldHRpbmdzKCkuY2F0Y2goZXJyb3IgPT4gZXJyb3IpXG4gICAgfSlcblxuICAgIHJldHVybiA8QXBwIC8+XG59XG4iLCJpbXBvcnQgeyBQYW5lbCwgUGFuZWxCb2R5LCBQYW5lbFJvdyB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERFTEVURV9GQVZJQ09OLCBERUxFVEVfTE9HTywgREVMRVRFX1BJQ1RVUkUsIFVQTE9BRF9GQVZJQ09OLCBVUExPQURfTE9HTywgVVBMT0FEX1BJQ1RVUkUgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgaGFuZGxlTWVkaWFEZWxldGUsIGhhbmRsZU1lZGlhVXBsb2FkIH0gZnJvbSAnLi4vc3RvcmUvZWZmZWN0cydcbmltcG9ydCB7IHNldHRpbmdTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvc2V0dGluZ3MnXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL1NldHRpbmdzQXBwJ1xuaW1wb3J0IHsgU2V0dGluZ3NVcGxvYWRJbWFnZSB9IGZyb20gJy4vU2V0dGluZ3NVcGxvYWRJbWFnZSdcblxuLyoqXG4gKiBTZXR0aW5nc0Fzc2V0UGFnZSBDb21wb25lbm50XG4gKlxuICogQGV4cG9ydFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NBc3NldHNQYWdlKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpXG4gICAgY29uc3QgbG9nbyA9IGFzc2V0cyAmJiBhc3NldHMubG9nb1xuICAgIGNvbnN0IGZhdmljb24gPSBhc3NldHMgJiYgYXNzZXRzLmZhdmljb25cbiAgICBjb25zdCBwaWN0dXJlID0gYXNzZXRzICYmIGFzc2V0cy5waWN0dXJlXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzZXR0aW5nU3R5bGVzLmFzc2V0UGFnZX0+XG4gICAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSBpbml0aWFsT3Blbj17dHJ1ZX0gdGl0bGU9XCJMT0dPXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc1VwbG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZWRpYVVwbG9hZChVUExPQURfTE9HTyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZU1lZGlhRGVsZXRlKERFTEVURV9MT0dPKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHkgaW5pdGlhbE9wZW49e2ZhbHNlfSB0aXRsZT1cIkZBVklDT05cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzVXBsb2FkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZhdmljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lZGlhVXBsb2FkKFVQTE9BRF9GQVZJQ09OKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlTWVkaWFEZWxldGUoREVMRVRFX0ZBVklDT04pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXtmYXZpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cbiAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICAgICAgPFBhbmVsQm9keSBpbml0aWFsT3Blbj17ZmFsc2V9IHRpdGxlPVwiUFJPRklMRSBQSUNUVVJFXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc1VwbG9hZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZWRpYVVwbG9hZChVUExPQURfUElDVFVSRSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZU1lZGlhRGVsZXRlKERFTEVURV9QSUNUVVJFKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17cGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuLyoqXG4gKiBTZXR0aW5nc0xheW91dFBhZ2UgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NMYXlvdXRQYWdlKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKDxGcmFnbWVudCAvPilcbn1cbiIsImltcG9ydCB7IEJ1dHRvbiwgVG9nZ2xlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cydcbmltcG9ydCB7IFByb3BzV2l0aG91dFJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFNldHRpbmdzUGFnZVByb3BzLCBTZXR0aW5nc1BhZ2VzIH0gZnJvbSAnZ2xvYmFsJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkQm9keSwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlLCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgc2V0dGluZ3NTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgc2F2ZVNldHRpbmdzLCB0b2dnbGVNYWludGVuYW5jZSB9IGZyb20gJy4uL3N0b3JlL2VmZmVjdHMnXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL1NldHRpbmdzQXBwJ1xuaW1wb3J0IHsgU2V0dGluZ3NBc3NldHNQYWdlIH0gZnJvbSAnLi9TZXR0aW5nc0Fzc2V0c1BhZ2UnXG5pbXBvcnQgeyBTZXR0aW5nc0xheW91dFBhZ2UgfSBmcm9tICcuL1NldHRpbmdzTGF5b3V0UGFnZSdcblxuLyoqXG4gKiBTZXR0aW5nc1BhZ2UgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtQcm9wc1dpdGhvdXRSZWY8U2V0dGluZ3NQYWdlUHJvcHM+fSBwcm9wc1xuICogQHJldHVybnMge0pTWC5FbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3NQYWdlKHByb3BzOiBQcm9wc1dpdGhvdXRSZWY8U2V0dGluZ3NQYWdlUHJvcHM+KTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgbWFpbnRlbmFuY2U6IHsgYWN0aXZlIH0sIGFwaTogeyBzZXR0aW5nczogbG9hZGluZyB9IH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dClcbiAgICBjb25zdCBpc0J1c3kgPSBsb2FkaW5nID09PSAnbG9hZGluZydcbiAgICBjb25zdCBzZXRTdGF0ZSA9ICgpID0+IHNhdmVTZXR0aW5ncyhzZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkpXG4gICAgY29uc3QgcGFnZXM6IFNldHRpbmdzUGFnZXMgPSB7XG4gICAgICAgIEFzc2V0czogPFNldHRpbmdzQXNzZXRzUGFnZSAvPixcbiAgICAgICAgTGF5b3V0czogPFNldHRpbmdzTGF5b3V0UGFnZSAvPlxuICAgIH1cbiAgICBjb25zdCBQYWdlID0gcGFnZXNbcHJvcHMucGFnZV1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgbWQ9XCI5XCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjYXJkJywgJ3AtMCcsICdib3JkZXItbGVmdC0wJyl9PlxuICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdkLWZsZXgnLCAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nLCAnYWxpZ24taXRlbXMtY2VudGVyJyl9PlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdkLW5vbmUnLCAnZC1tZC1ibG9jaycsICdtYi1uMScpfT57cHJvcHMucGFnZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLW4zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sIGxhYmVsPXtfXygnTWFpbnRlbmFuY2UnLCAnZW5vZ3dlJyl9IGNoZWNrZWQ9e2FjdGl2ZX0gb25DaGFuZ2U9e3RvZ2dsZU1haW50ZW5hbmNlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaXNCdXN5PXtpc0J1c3l9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0J1c3l9XG4gICAgICAgICAgICAgICAgICAgIGlzUHJpbWFyeT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTYXZlICBTZXR0aW5ncycsICdlbm9nd2UnKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0U3RhdGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTYXZlIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZEJvZHk+e1BhZ2V9PC9DYXJkQm9keT5cbiAgICAgICAgPC9Db2w+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgRGFzaGljb24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgR2VuZXJpY0FjdGlvbiwgTWVudVRhYk5hbWVzLCBTaWRlYmFyUHJvcHMsIFRhYiB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2LCBOYXZJdGVtLCBOYXZMaW5rIH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHNldHRpbmdzU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IEFDVElWQVRFX1NJREVCQVJfTUVOVSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL1NldHRpbmdzQXBwJ1xuXG4vKipcbiAqIFNldHRpbmdzU2lkZWJhciBDb21wb25lbnRcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge1NpZGViYXJQcm9wc30gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzU2lkZWJhcihwcm9wczogU2lkZWJhclByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IG1haW50ZW5hbmNlID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpLm1haW50ZW5hbmNlXG4gICAgY29uc3QgdGFiczogVGFiW10gPSBwcm9wcy50YWJOYW1lcy5tYXAobmFtZSA9PiAoeyBuYW1lLCBjbGFzc05hbWU6IG5hbWUsIHRpdGxlOiBuYW1lLCBpY29uOiBwcm9wcy50YWJJY29uc1tuYW1lXSB9KSlcbiAgICBjb25zdCBkaXNhYmxlZCA9ICh0YWI6IFRhYikgPT4gdGFiLnRpdGxlID09PSAnTWFpbnRlbmFuY2UnICYmICFtYWludGVuYW5jZVxuICAgIGNvbnN0IGlzQWN0aXZlID0gKHRhYjogVGFiKSA9PiBwcm9wcy5hY3RpdmVTaWRlYmFyTWVudSA9PT0gdGFiLnRpdGxlXG4gICAgY29uc3QgYWN0aXZhdGVNZW51ID0gKHRhYjogVGFiKSA9PiAoKSA9PiBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoPEdlbmVyaWNBY3Rpb248TWVudVRhYk5hbWVzPj4oe1xuICAgICAgICB0eXBlOiBBQ1RJVkFURV9TSURFQkFSX01FTlUsIGRhdGE6IHRhYi5uYW1lXG4gICAgfSlcbiAgICBjb25zdCBUYWJzID0gdGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IChcbiAgICAgICAgPE5hdkl0ZW0ga2V5PXtgc2V0dGluZ3Nfc2lkZWJhcl8ke2luZGV4fWB9PlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RhYi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17YWN0aXZhdGVNZW51KHRhYil9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3RhYi50aXRsZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQodGFiKX1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlKHRhYil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERhc2hpY29uIGljb249e3RhYi5pY29ufSAvPiB7dGFiLnRpdGxlfVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgKSlcblxuICAgIHJldHVybiA8TmF2IHBpbGxzPXt0cnVlfSB2ZXJ0aWNhbD17dHJ1ZX0gbmF2YmFyPXt0cnVlfT57VGFic308L05hdj5cbn1cbiIsImltcG9ydCB7IEljb25CdXR0b24sIFBsYWNlaG9sZGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bidcbmltcG9ydCB7IEltYWdlUHJvcHMsIE1lZGlhSW5mbyB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93IH0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHNldHRpbmdTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvc2V0dGluZ3MnXG5pbXBvcnQgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKVxuXG4vKipcbiAqIFNldHRpbmdzVXBsb2FkSW1hZ2UgQ29tcG9uZW50XG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtQcm9wc1dpdGhDaGlsZHJlbjxJbWFnZVByb3BzPn0gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzVXBsb2FkSW1hZ2UocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPEltYWdlUHJvcHM+KTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgbWVkaWEsIG9uRGVsZXRlLCBvbkNsaWNrLCBsYWJlbCB9ID0gcHJvcHNcbiAgICBjb25zdCBOb0ltYWdlID0gKCkgPT4gPFBsYWNlaG9sZGVyIGljb249XCJmb3JtYXQtaW1hZ2VcIiBzdHlsZT17c2V0dGluZ1N0eWxlcy5wbGFjZWhvbGRlcn0gLz5cbiAgICBjb25zdCBjcmVhdGVTcmNTZXQgPSAoaW1hZ2U6IE1lZGlhSW5mbyk6IHN0cmluZyA9PiBPYmplY3QudmFsdWVzKGltYWdlLnNpemVzKS5tYXAoc3JjID0+IHNyYy51cmwpLmpvaW4oJywgJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYm9yZGVyLTAnLCAnZmxleC1maWxsJywgJ2ZsZXgtZ3Jvdy0xJywgJ2p1c3RpZnktY29udGVudC1jZW50ZXInLCAnYWxpZ24taXRlbXMtY2VudGVyJyl9PlxuICAgICAgICAgICAgPFJvdyBub0d1dHRlcnM9e3RydWV9IGNsYXNzTmFtZT1cInctbWQtNzVcIj5cbiAgICAgICAgICAgICAgICA8Q29sPnttZWRpYSA/IDxpbWcgc3JjU2V0PXtjcmVhdGVTcmNTZXQobWVkaWEpfSAvPiA6IDxOb0ltYWdlIC8+fTwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGlzUHJpbWFyeT17dHJ1ZX0gaWNvbj1cInVwbG9hZFwiIG9uQ2xpY2s9e29uQ2xpY2t9PntfXyhgVXBsb2FkICR7bGFiZWx9YCl9PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gaXNEZWZhdWx0PXt0cnVlfSBkaXNhYmxlZD17IW1lZGlhfSBpY29uPVwidHJhc2hcIiBvbkNsaWNrPXtvbkRlbGV0ZX0+e19fKGBEZWxldGUgJHtsYWJlbH1gKX08L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cbiIsImltcG9ydCB7IE1lbnVUYWJOYW1lcywgVGFiSWNvbnMgfSBmcm9tICdnbG9iYWwnXG5cbmV4cG9ydCBjb25zdCB0YWJOYW1lczogTWVudVRhYk5hbWVzW10gPSBbJ0Fzc2V0cycsICdMYXlvdXRzJywgJ1R5cG9ncmFwaHknLCAnU29jaWFscycsICdJbnRlZ3JhdGlvbnMnLCAnTWFpbnRlbmFuY2UnLCAnRG9jdW1lbnRhdGlvbiddXG5leHBvcnQgY29uc3QgdGFiSWNvbnM6IFRhYkljb25zID0ge1xuICBBc3NldHM6ICdpbWFnZXMtYWx0MicsXG4gIExheW91dHM6ICdlZGl0b3Ita2l0Y2hlbnNpbmsnLFxuICBUeXBvZ3JhcGh5OiAnZWRpdG9yLXNwZWxsY2hlY2snLFxuICBTb2NpYWxzOiAnbmV0d29ya2luZycsXG4gIEludGVncmF0aW9uczogJ3VuaXZlcnNhbC1hY2Nlc3MtYWx0JyxcbiAgTWFpbnRlbmFuY2U6ICdiYWNrdXAnLFxuICBEb2N1bWVudGF0aW9uOiAnYm9vay1hbHQnXG59XG5leHBvcnQgY29uc3QgZGVmYXVsdE1lZGlhQ29uZmlnID0ge1xuICB0aXRsZTogJ1NlbGVjdCBvciBVcGxvYWQgTWVkaWEnLFxuICBidXR0b246IHsgdGV4dDogJ1VzZSB0aGlzIG1lZGlhJyB9LFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIGxpYnJhcnk6IHsgdHlwZTogWydpbWFnZSddIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2V0dGluZ3NBcHAgfSBmcm9tICcuL2NvbXBvbmVudHMvU2V0dGluZ3NBcHAnXG5cbnJlbmRlcig8U2V0dGluZ3NBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbm9nd2VfdGhlbWVfc2V0dGluZ3MnKSlcbiIsImltcG9ydCB7IE1lZGlhSW5mbywgR2VuZXJpY0FjdGlvbiwgTWVudVRhYk5hbWVzLCBBcGlTdGF0dXMsIEVub2d3ZVN0YXRlIH0gZnJvbSAnZ2xvYmFsJ1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3N0YXRlJ1xuXG5leHBvcnQgY29uc3QgQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSA9ICdBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFJ1xuZXhwb3J0IGNvbnN0IERFQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSA9ICdERUFDVElWQVRFX01BSU5URU5FTkNFX01PREUnXG5leHBvcnQgY29uc3QgQUNUSVZBVEVfU0lERUJBUl9NRU5VID0gJ0FDVElWQVRFX1NJREVCQVJfTUVOVSdcbmV4cG9ydCBjb25zdCBVUExPQURfTE9HTyA9ICdVUExPQURfTE9HTydcbmV4cG9ydCBjb25zdCBVUExPQURfRkFWSUNPTiA9ICdVUExPQURfRkFWSUNPTidcbmV4cG9ydCBjb25zdCBVUExPQURfUElDVFVSRSA9ICdVUExPQURfUElDVFVSRSdcbmV4cG9ydCBjb25zdCBERUxFVEVfTE9HTyA9ICdERUxFVEVfTE9HTydcbmV4cG9ydCBjb25zdCBERUxFVEVfRkFWSUNPTiA9ICdERUxFVEVfRkFWSUNPTidcbmV4cG9ydCBjb25zdCBERUxFVEVfUElDVFVSRSA9ICdERUxFVEVfUElDVFVSRSdcbmV4cG9ydCBjb25zdCBGRVRDSF9TRVRUSU5HU19DTE9TRUQgPSAnRkVUQ0hfU0VUVElOR1NfQ0xPU0VEJ1xuZXhwb3J0IGNvbnN0IEZFVENIX1NFVFRJTkdTX1NUQUxFID0gJ0ZFVENIX1NFVFRJTkdTX1NUQUxFJ1xuZXhwb3J0IGNvbnN0IEZFVENIX1NFVFRJTkdTX0xPQURJTkcgPSAnRkVUQ0hfU0VUVElOR1NfTE9BRElORydcbmV4cG9ydCBjb25zdCBGRVRDSF9TRVRUSU5HU19FUlJPUiA9ICdGRVRDSF9TRVRUSU5HU19FUlJPUidcbmV4cG9ydCBjb25zdCBGRVRDSF9TRVRUSU5HU19TVUNDRVNTID0gJ0ZFVENIX1NFVFRJTkdTX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgRkVUQ0hfU0VUVElOR1NfTkVUV09SSyA9ICdGRVRDSF9TRVRUSU5HU19ORVRXT1JLJ1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfU1RBVEUgPSAnUkVGUkVTSF9TVEFURSdcblxuLyoqXG4gKiBDcmVhdGUgYW4gQWN0aW9uXG4gKiBnZW5lcmljIGFjdGlvbiBjcmVhdG9yXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7R2VuZXJpY0FjdGlvbjxUPn0gYWN0aW9uXG4gKiBAcmV0dXJucyB7R2VuZXJpY0FjdGlvbjxUPn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFQ+IChhY3Rpb246IEdlbmVyaWNBY3Rpb248VD4pOiBHZW5lcmljQWN0aW9uPFQ+IHtcbiAgcmV0dXJuIGFjdGlvblxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBhY3Rpb24gb2YgdHlwZSBBc3NldFxuICogZ2VuZXJpYyBhc3NldCBhY3Rpb24gY3JlYXRvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBhc3NldEFjdGlvbiAodHlwZTogc3RyaW5nKSB7XG4gIHJldHVybiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPE1lZGlhSW5mbyB8IHt9PiwgR2VuZXJpY0FjdGlvbjxNZWRpYUluZm8gfCB7fT4+KG51bGwsIHsgdHlwZSwgZGF0YToge30gfSlcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIGFjdGl2YXRlTWFpbnRlbmFuY2VNb2RlOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPGJvb2xlYW4+LCBHZW5lcmljQWN0aW9uPGJvb2xlYW4+PihudWxsLCB7XG4gICAgdHlwZTogQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSwgZGF0YTogdHJ1ZVxuICB9KSxcbiAgYWN0aXZhdGVTaWRlYmFyTWVudTogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxNZW51VGFiTmFtZXM+LCBHZW5lcmljQWN0aW9uPE1lbnVUYWJOYW1lcz4+KG51bGwsIHtcbiAgICB0eXBlOiBBQ1RJVkFURV9TSURFQkFSX01FTlUsIGRhdGE6ICdMYXlvdXRzJ1xuICB9KSxcbiAgdXBsb2FkTG9nbzogYXNzZXRBY3Rpb24oVVBMT0FEX0xPR08pLFxuICB1cGxvYWRGYXZpY29uOiBhc3NldEFjdGlvbihVUExPQURfRkFWSUNPTiksXG4gIHVwbG9hZFBpY3R1cmU6IGFzc2V0QWN0aW9uKFVQTE9BRF9QSUNUVVJFKSxcbiAgZGVsZXRlTG9nbzogYXNzZXRBY3Rpb24oREVMRVRFX0xPR08pLFxuICBkZWxldGVGYXZpY29uOiBhc3NldEFjdGlvbihERUxFVEVfRkFWSUNPTiksXG4gIGRlbGV0ZVBpY3R1cmU6IGFzc2V0QWN0aW9uKERFTEVURV9QSUNUVVJFKSxcbiAgZGVBY3RpdmF0ZU1haW50ZW5hbmNlTW9kZTogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxib29sZWFuPiwgR2VuZXJpY0FjdGlvbjxib29sZWFuPj4obnVsbCwge1xuICAgIHR5cGU6IEFDVElWQVRFX01BSU5URU5FTkNFX01PREUsIGRhdGE6IGZhbHNlXG4gIH0pLFxuICBmZXRjaFNldHRpbmdzQ2xvc2VkOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4sIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPj4obnVsbCwge1xuICAgIHR5cGU6IEZFVENIX1NFVFRJTkdTX0NMT1NFRCwgZGF0YTogJ2Nsb3NlZCdcbiAgfSksXG4gIGZldGNoU2V0dGluZ3NTdGFsZTogY3JlYXRlQWN0aW9uLmJpbmQ8bnVsbCwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+LCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4+KG51bGwsIHtcbiAgICB0eXBlOiBGRVRDSF9TRVRUSU5HU19TVEFMRSwgZGF0YTogJ3N0YWxlJ1xuICB9KSxcbiAgZmV0Y2hTZXR0aW5nc0xvYWRpbmc6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPiwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+PihudWxsLCB7XG4gICAgdHlwZTogRkVUQ0hfU0VUVElOR1NfTE9BRElORywgZGF0YTogJ2xvYWRpbmcnXG4gIH0pLFxuICBmZXRjaFNldHRpbmdzRXJyb3I6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPiwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+PihudWxsLCB7XG4gICAgdHlwZTogRkVUQ0hfU0VUVElOR1NfRVJST1IsIGRhdGE6ICdlcnJvcidcbiAgfSksXG4gIGZldGNoU2V0dGluZ3NTdWNjZXNzOiBjcmVhdGVBY3Rpb24uYmluZDxudWxsLCBHZW5lcmljQWN0aW9uPEFwaVN0YXR1cz4sIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPj4obnVsbCwge1xuICAgIHR5cGU6IEZFVENIX1NFVFRJTkdTX1NVQ0NFU1MsIGRhdGE6ICdzdWNjZXNzJ1xuICB9KSxcbiAgZmV0Y2hTZXR0aW5nc05ldHdvcms6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPiwgR2VuZXJpY0FjdGlvbjxBcGlTdGF0dXM+PihudWxsLCB7XG4gICAgdHlwZTogRkVUQ0hfU0VUVElOR1NfTkVUV09SSywgZGF0YTogJ25ldHdvcmsnXG4gIH0pLFxuICByZWZyZXNoU3RhdGU6IGNyZWF0ZUFjdGlvbi5iaW5kPG51bGwsIEdlbmVyaWNBY3Rpb248RW5vZ3dlU3RhdGUuU2V0dGluZ3M+LCBHZW5lcmljQWN0aW9uPEVub2d3ZVN0YXRlLlNldHRpbmdzPj4obnVsbCwge1xuICAgIHR5cGU6IFJFRlJFU0hfU1RBVEUsIGRhdGE6IFN0YXRlXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBFbm9nd2VTdGF0ZSwgR2VuZXJpY0FjdGlvbiwgTWVkaWFJbmZvLCBNZWRpYVByb3BzIH0gZnJvbSAnZ2xvYmFsJ1xuaW1wb3J0IFdQQVBJIGZyb20gJ3dwYXBpL3N1cGVyYWdlbnQnXG5pbXBvcnQgeyBzZXR0aW5nc1N0b3JlIH0gZnJvbSAnLidcbmltcG9ydCB7IGRlZmF1bHRNZWRpYUNvbmZpZyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGFjdGlvbnMsIEFDVElWQVRFX01BSU5URU5FTkNFX01PREUsIERFQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSwgUkVGUkVTSF9TVEFURSB9IGZyb20gJy4vYWN0aW9ucydcblxuY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuY29uc3QgYmFzZVVybCA9IGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyBgOiR7cG9ydH1gIDogJyd9YFxuY29uc3QgZW5kcG9pbnQgPSBgJHtiYXNlVXJsfS93cC1qc29uL2Vub2d3ZS92MWBcbmNvbnN0IHdwID0gbmV3IFdQQVBJKHsgZW5kcG9pbnQgfSlcblxuLyoqXG4gKiBHZXQgVGhlbWUgU2V0dGluZ3NcbiAqIHJldHJpZXZlcyB0aGVtZSBzZXR0aW5ncyBmcm9tIGFwaVxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBmZXRjaFNldHRpbmdzTG9hZGluZywgZmV0Y2hTZXR0aW5nc1N1Y2Nlc3MsIGZldGNoU2V0dGluZ3NDbG9zZWQgfSA9IGFjdGlvbnNcbiAgICAgICAgc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChmZXRjaFNldHRpbmdzTG9hZGluZygpKVxuICAgICAgICBjb25zdCB7IHNldHRpbmdzOiBkYXRhIH0gPSBhd2FpdCB3cC5yb290KCdzZXR0aW5ncycpLmdldCgpXG4gICAgICAgIHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRUZSRVNIX1NUQVRFLCBkYXRhOiBKU09OLnBhcnNlKGRhdGEpIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChmZXRjaFNldHRpbmdzU3VjY2VzcygpKVxuICAgICAgICAgICAgc2V0dGluZ3NTdG9yZS5kaXNwYXRjaChmZXRjaFNldHRpbmdzQ2xvc2VkKCkpIC8vIHJlZHV4LXRodW5rXG4gICAgICAgIH0sIDIwMDApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGFjdGlvbnMuZmV0Y2hTZXR0aW5nc0Vycm9yKCkpLCAyMDAwKVxuICAgIH1cbn1cblxuLyoqXG4gKiBTYXZlIFRoZW1lIFNldHRpbmdzXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtFbm9nd2VTdGF0ZS5TZXR0aW5nc30gc2V0dGluZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVNldHRpbmdzKHNldHRpbmdzOiBFbm9nd2VTdGF0ZS5TZXR0aW5ncyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZmV0Y2hTZXR0aW5nc0xvYWRpbmcsIGZldGNoU2V0dGluZ3NTdWNjZXNzLCBmZXRjaFNldHRpbmdzQ2xvc2VkIH0gPSBhY3Rpb25zXG4gICAgICAgIHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goZmV0Y2hTZXR0aW5nc0xvYWRpbmcoKSlcbiAgICAgICAgYXdhaXQgd3Aucm9vdCgnc2V0dGluZ3MnKS5hdXRoKHsgbm9uY2U6IHdpbmRvdy5jcmVkLm5vbmNlIH0pLmNyZWF0ZSh7IHNldHRpbmdzOiBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGZldGNoU2V0dGluZ3NTdWNjZXNzKCkpXG4gICAgICAgICAgICBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGZldGNoU2V0dGluZ3NDbG9zZWQoKSkgLy8gcmVkdXgtdGh1bmtcbiAgICAgICAgfSwgMjAwMClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goYWN0aW9ucy5mZXRjaFNldHRpbmdzRXJyb3IoKSksIDIwMDApXG4gICAgfVxufVxuXG4vKipcbiAqIFRvZ2dsZSBTaXRlIE1haW50ZW5hbmNlIE1vZGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2hlY2tlZFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1haW50ZW5hbmNlKGlzQ2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGRlQWN0aXZhdGUgPSB7IHR5cGU6IERFQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSB9XG4gICAgY29uc3QgYWN0aXZhdGUgPSB7IHR5cGU6IEFDVElWQVRFX01BSU5URU5FTkNFX01PREUgfVxuICAgIHJldHVybiBpc0NoZWNrZWQgPyBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKGFjdGl2YXRlKSA6IHNldHRpbmdzU3RvcmUuZGlzcGF0Y2goZGVBY3RpdmF0ZSlcbn1cblxuLyoqXG4gKiBIYW5kbGUgTWVkaWEgVXBsb2FkXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICogQHJldHVybnMgeyhlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lZGlhVXBsb2FkKGFjdGlvbjogc3RyaW5nKTogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkIHtcbiAgICBjb25zdCBXcE1lZGlhID0gKGNvbmZpZzogTWVkaWFQcm9wcykgPT4gd2luZG93LndwLm1lZGlhKHsgLi4uZGVmYXVsdE1lZGlhQ29uZmlnLCAuLi5jb25maWcgfSlcbiAgICBjb25zdCBmcmFtZSA9IFdwTWVkaWEoeyB0aXRsZTogJycsIGJ1dHRvbjogeyB0ZXh0OiAnVXNlICB0aGlzIGltYWdlJyB9IH0pXG4gICAgY29uc3Qgb25TZWxlY3QgPSAoKSA9PiBzZXR0aW5nc1N0b3JlLmRpc3BhdGNoKHsgdHlwZTogYWN0aW9uLCBkYXRhOiBmcmFtZS5zdGF0ZSgpLmdldCgnc2VsZWN0aW9uJykuZmlyc3QoKS50b0pTT04oKSB9KVxuXG4gICAgZnJhbWUub24oJ3NlbGVjdCcsIG9uU2VsZWN0KVxuXG4gICAgcmV0dXJuIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gZnJhbWUub3BlbigpXG59XG5cbi8qKlxuICogSGFuZGxlIE1lZGlhIERlbGV0ZVxuICpcbiAqIEBleHBvcnRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZWRpYURlbGV0ZSh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKCkgPT4gc2V0dGluZ3NTdG9yZS5kaXNwYXRjaDxHZW5lcmljQWN0aW9uPE1lZGlhSW5mbyB8IHVuZGVmaW5lZD4+KHsgdHlwZSwgZGF0YTogdW5kZWZpbmVkIH0pXG59XG5cbi8qKlxuICogbWVudSBFeHBhbmRlZFxuICpcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbnVFeHBhbmRlZCgpIHtcblxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSdcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VycydcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzU3RvcmUgPSByZWdpc3RlclN0b3JlKCdlbm9nd2Uvc2V0dGluZ3MnLCB7IHJlZHVjZXIsIGFjdGlvbnMgfSlcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSdcbmltcG9ydCB7IEFwaVN0YXR1cywgRW5vZ3dlU3RhdGUsIEdlbmVyaWNBY3Rpb24sIE1lZGlhSW5mbywgTWVudVRhYk5hbWVzLCBTaWRlYmFyIH0gZnJvbSAnZ2xvYmFsJ1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBBQ1RJVkFURV9NQUlOVEVORU5DRV9NT0RFLCBBQ1RJVkFURV9TSURFQkFSX01FTlUsIERFQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERSwgREVMRVRFX0ZBVklDT04sIERFTEVURV9MT0dPLCBERUxFVEVfUElDVFVSRSwgRkVUQ0hfU0VUVElOR1NfQ0xPU0VELCBGRVRDSF9TRVRUSU5HU19FUlJPUiwgRkVUQ0hfU0VUVElOR1NfTE9BRElORywgRkVUQ0hfU0VUVElOR1NfTkVUV09SSywgRkVUQ0hfU0VUVElOR1NfU1RBTEUsIEZFVENIX1NFVFRJTkdTX1NVQ0NFU1MsIFJFRlJFU0hfU1RBVEUsIFVQTE9BRF9GQVZJQ09OLCBVUExPQURfTE9HTywgVVBMT0FEX1BJQ1RVUkUgfSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vc3RhdGUnXG5cbmNvbnN0IG1haW50ZW5hbmNlUmVkdWNlcnMgPSB7XG4gICAgLyoqXG4gICAgICogTWFpbnRlbmFuY2UgbW9kZSByZWR1Y2VyXG4gICAgICogZW5vZ3dlL3NldHRpbmdzLm1haW50ZW5hbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGF0ZT1TdGF0ZS5tYWludGVuYW5jZV1cbiAgICAgKiBAcGFyYW0ge0dlbmVyaWNBY3Rpb248Ym9vbGVhbj59IGFjdGlvblxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IFN0YXRlLm1haW50ZW5hbmNlLmFjdGl2ZSwgYWN0aW9uOiBHZW5lcmljQWN0aW9uPGJvb2xlYW4+KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uXG4gICAgICAgIGlmICghW0FDVElWQVRFX01BSU5URU5FTkNFX01PREUsIERFQUNUSVZBVEVfTUFJTlRFTkVOQ0VfTU9ERV0uaW5jbHVkZXModHlwZSkpIHsgcmV0dXJuIHN0YXRlIH1cbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IEFDVElWQVRFX01BSU5URU5FTkNFX01PREUgPyB0cnVlIDogZmFsc2VcbiAgICB9XG59XG5cbi8qKlxuICogU2lkZWJhciByZWR1Y2VyXG4gKiBjaGVja3MgY3VycmVudCBhY3RpdmUgc2lkZWJiYXIgbWVudVxuICogZW5vZ3dlL3NldHRpbmdzLnNpZGViYXJcbiAqXG4gKiBAcGFyYW0ge1NpZGViYXJ9IFtzdGF0ZT1TdGF0ZS5zaWRlYmFyXVxuICogQHBhcmFtIHtHZW5lcmljQWN0aW9uPE1lbnVUYWJOYW1lcz59IGFjdGlvblxuICogQHJldHVybnMge1NpZGViYXJ9XG4gKi9cbmZ1bmN0aW9uIHNpZGViYXIoc3RhdGU6IFNpZGViYXIgPSBTdGF0ZS5zaWRlYmFyLCBhY3Rpb246IEdlbmVyaWNBY3Rpb248TWVudVRhYk5hbWVzPik6IFNpZGViYXIge1xuICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gYWN0aW9uXG4gICAgcmV0dXJuIHR5cGUgPT09IEFDVElWQVRFX1NJREVCQVJfTUVOVSA/IHsgLi4uc3RhdGUsIGFjdGl2ZVNpZGViYXJNZW51OiBkYXRhIH0gOiBzdGF0ZVxufVxuXG4vKipcbiAqIEFzc2V0cyByZWR1Y2VyXG4gKiB0aGVtZSBzZXR0aW5ncyBhc3NldHMgcmVkdWNlciBhdCBlbm9nd2Uvc2V0dGluZ3MuYXNzZXRzXG4gKlxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSByZWR1Y2VyVHlwZXNcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGFzc2V0KHJlZHVjZXJUeXBlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICAgIHJldHVybiAoc3RhdGU6IE1lZGlhSW5mbyB8IHVuZGVmaW5lZCwgYWN0aW9uOiBHZW5lcmljQWN0aW9uPE1lZGlhSW5mbz4pOiBNZWRpYUluZm8gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cGUsIGRhdGEgfSA9IGFjdGlvblxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC52YWx1ZXMocmVkdWNlclR5cGVzKVxuICAgICAgICBpZiAoIXR5cGVzLmluY2x1ZGVzKHR5cGUpKSB7IHJldHVybiBzdGF0ZSB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0eXBlLnNwbGl0KCdfJylcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBgREVMRVRFXyR7aXRlbVsxXX1gOlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICBjYXNlIGBVUExPQURfJHtpdGVtWzFdfWA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmRhdGEgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBcGkgU2V0dGluZ3MgbmV0d29yayBjYWxsIHJlZHVjZXIgZW5vZ3dlL3NldHRpbmdzLmFwaS5zZXR0aW5nc1xuICogc3RhdGUgIG9mIG5ldHdvcmsgY2FsbCAgdG8gcmV0cmlldmUgdGhlbWUgc2V0dGluZ3NcbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IHJlZHVjZXJUeXBlc1xuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gQXBpU2V0dGluZyhyZWR1Y2VyVHlwZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICByZXR1cm4gKHN0YXRlID0gU3RhdGUuYXBpLnNldHRpbmdzLCBhY3Rpb246IEdlbmVyaWNBY3Rpb248QXBpU3RhdHVzPik6IEFwaVN0YXR1cyA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uXG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LnZhbHVlcyhyZWR1Y2VyVHlwZXMpXG4gICAgICAgIGlmICghdHlwZXMuaW5jbHVkZXModHlwZSkpIHsgcmV0dXJuIHN0YXRlIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBGRVRDSF9TRVRUSU5HU19TVEFMRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N0YWxlJ1xuICAgICAgICAgICAgY2FzZSBGRVRDSF9TRVRUSU5HU19MT0FESU5HOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbG9hZGluZydcbiAgICAgICAgICAgIGNhc2UgRkVUQ0hfU0VUVElOR1NfRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcidcbiAgICAgICAgICAgIGNhc2UgRkVUQ0hfU0VUVElOR1NfTkVUV09SSzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25ldHdvcmsnXG4gICAgICAgICAgICBjYXNlIEZFVENIX1NFVFRJTkdTX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzJ1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nsb3NlZCdcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFpbnRlbmFuY2UgPSBjb21iaW5lUmVkdWNlcnMobWFpbnRlbmFuY2VSZWR1Y2VycylcblxuY29uc3QgYXNzZXRzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBsb2dvOiBhc3NldCh7IFVQTE9BRF9MT0dPLCBERUxFVEVfTE9HTyB9KSxcbiAgICBmYXZpY29uOiBhc3NldCh7IFVQTE9BRF9GQVZJQ09OLCBERUxFVEVfRkFWSUNPTiB9KSxcbiAgICBwaWN0dXJlOiBhc3NldCh7IFVQTE9BRF9QSUNUVVJFLCBERUxFVEVfUElDVFVSRSB9KVxufSlcblxuY29uc3Qgc2V0dGluZ3MgPSBBcGlTZXR0aW5nKHtcbiAgICBGRVRDSF9TRVRUSU5HU19TVEFMRSxcbiAgICBGRVRDSF9TRVRUSU5HU19DTE9TRUQsXG4gICAgRkVUQ0hfU0VUVElOR1NfTE9BRElORyxcbiAgICBGRVRDSF9TRVRUSU5HU19FUlJPUixcbiAgICBGRVRDSF9TRVRUSU5HU19ORVRXT1JLLFxuICAgIEZFVENIX1NFVFRJTkdTX1NVQ0NFU1Ncbn0pXG5cbmNvbnN0IGFwaSA9IGNvbWJpbmVSZWR1Y2Vycyh7IHNldHRpbmdzIH0pXG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIG1haW50ZW5hbmNlLCBzaWRlYmFyLCBhc3NldHMsIGFwaVxufSlcblxuLyoqXG4gKiByZWR1Y2VyIGZvciBlbm9nd2UgYXBwXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtFbm9nd2VTdGF0ZS5TZXR0aW5nc30gW3N0YXRlPVN0YXRlXVxuICogQHBhcmFtIHsoR2VuZXJpY0FjdGlvbjxFbm9nd2VTdGF0ZS5TZXR0aW5ncz4gfCBBbnlBY3Rpb24pfSBhY3Rpb25cbiAqIEByZXR1cm5zIHtFbm9nd2VTdGF0ZS5TZXR0aW5nc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gICAgc3RhdGU6IEVub2d3ZVN0YXRlLlNldHRpbmdzID0gU3RhdGUsIGFjdGlvbjogR2VuZXJpY0FjdGlvbjxFbm9nd2VTdGF0ZS5TZXR0aW5ncz4gfCBBbnlBY3Rpb24gfCBhbnlcbik6IEVub2d3ZVN0YXRlLlNldHRpbmdzIHtcbiAgICBjb25zdCB7IHR5cGUsIGRhdGEgfSA9IGFjdGlvblxuICAgIGlmICh0eXBlID09PSBSRUZSRVNIX1NUQVRFKSB7XG4gICAgICAgIHJldHVybiBkYXRhID8gZGF0YSA6IHN0YXRlXG4gICAgfVxuICAgIHJldHVybiByb290UmVkdWNlcnMoc3RhdGUgYXMgYW55LCBhY3Rpb24pXG59XG4iLCJpbXBvcnQgeyBFbm9nd2VTdGF0ZSB9IGZyb20gJ2dsb2JhbCdcbmltcG9ydCBTdGF0ZUpzb24gZnJvbSAnLi9zdGF0ZS5qc29uJ1xuXG5leHBvcnQgY29uc3QgU3RhdGU6IEVub2d3ZVN0YXRlLlNldHRpbmdzID0ge1xuICAuLi4oU3RhdGVKc29uIGFzIHVua25vd24gYXMgRW5vZ3dlU3RhdGUuU2V0dGluZ3MpLFxuICBhc3NldHM6IHtcbiAgICBsb2dvOiB1bmRlZmluZWQsXG4gICAgZmF2aWNvbjogdW5kZWZpbmVkLFxuICAgIHBpY3R1cmU6IHVuZGVmaW5lZFxuICB9XG59XG4iLCJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ1N0eWxlczogeyBba2V5OiBzdHJpbmddOiBDU1NQcm9wZXJ0aWVzIH0gPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmMWYxZjEnLFxuICAgICAgICBwYWRkaW5nOiAnM2VtJyxcbiAgICAgICAgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDE1ZW0pJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU4ZTgnXG4gICAgfSxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICd0b3AnLFxuICAgICAgICB3aWR0aDogJzMwdncnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDQwLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDQwXG4gICAgfSxcbiAgICBwYWdlOiB7XG4gICAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIHBhZ2VIZWFkZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBwYWRkaW5nOiAnM2VtJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU4ZTgnXG4gICAgfSxcbiAgICBwYWdlQ29udGVudDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6ICczZW0nLFxuICAgICAgICBoZWlnaHQ6ICc2MCUnLFxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U4ZThlOCdcbiAgICB9LFxuICAgIG1haW50ZW5hbmNlTW9kZToge1xuICAgICAgICBtYXJnaW5Ub3A6IDEyXG4gICAgfSxcbiAgICB0ZXh0V2l0aEljb246IHtcbiAgICAgICAgcGFkZGluZzogJzAgMCAwIDAuMmVtJ1xuICAgIH0sXG4gICAgbWVudWl0ZW06IHtcbiAgICAgICAgcGFkZGluZzogJzFlbScsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU4ZTgnXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgICB3aWR0aDogJzcwdncnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIHNldHRpbmdzQXNzZXRzUGFnZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGFzc2V0UGFnZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBhc3NldEltYWdlQ29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgbWFyZ2luOiAnMCAgYXV0bydcbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBtaW5IZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGZvbnRTaXplOiAwXG4gICAgfSxcbiAgICBhc3NldEltYWdlQnV0dG9uczoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcGFkZGluZzogJzJlbSdcbiAgICB9LFxuICAgIG1hcmdpbkJvdHRvbToge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICcxZW0nXG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdvcmRwcmVzcy9jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3b3JkcHJlc3MvZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd29yZHByZXNzL2VsZW1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdvcmRwcmVzcy9pMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3cGFwaS9zdXBlcmFnZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=