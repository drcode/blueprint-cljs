(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);if(o=="react")return window["React"];if(o=="react-dom")return window["ReactDOM"];if(o=="react-addons-css-transition-group")return window["React"].addons.CSSTransitionGroup;var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var interactionMode_1 = require("../common/interactionMode");
exports.FOCUS_DISABLED_CLASS = "pt-focus-disabled";
/* istanbul ignore next */
var fakeFocusEngine = {
    isActive: function () { return true; },
    start: function () { return true; },
    stop: function () { return true; },
};
/* istanbul ignore next */
var focusEngine = typeof document !== "undefined"
    ? new interactionMode_1.InteractionModeEngine(document.documentElement, exports.FOCUS_DISABLED_CLASS)
    : fakeFocusEngine;
// this is basically meaningless to unit test; it requires manual UI testing
/* istanbul ignore next */
exports.FocusStyleManager = {
    alwaysShowFocus: function () { return focusEngine.stop(); },
    isActive: function () { return focusEngine.isActive(); },
    onlyShowFocusOnTabs: function () { return focusEngine.start(); },
};


},{"../common/interactionMode":9}],2:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./focusStyleManager"));


},{"./focusStyleManager":1}],3:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
var AbstractComponent = (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent(props, context) {
        var _this = this;
        _super.call(this, props, context);
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        this.validateProps(this.props);
    }
    AbstractComponent.prototype.componentWillReceiveProps = function (nextProps) {
        this.validateProps(nextProps);
    };
    AbstractComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractComponent.prototype.setTimeout = function (handler, timeout) {
        var handle = setTimeout(handler, timeout);
        this.timeoutIds.push(handle);
        return function () { return clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * In contrast to propTypes, these runtime checks are _always_ run, not just in development mode.
     */
    AbstractComponent.prototype.validateProps = function (_) {
        // implement in subclass
    };
    ;
    return AbstractComponent;
}(React.Component));
exports.AbstractComponent = AbstractComponent;


},{"react":"react"}],4:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var intent_1 = require("./intent");
// modifiers
exports.DARK = "pt-dark";
exports.ACTIVE = "pt-active";
exports.MINIMAL = "pt-minimal";
exports.DISABLED = "pt-disabled";
exports.SMALL = "pt-small";
exports.LARGE = "pt-large";
exports.INTERACTIVE = "pt-interactive";
exports.ALIGN_LEFT = "pt-align-left";
exports.ALIGN_RIGHT = "pt-align-right";
exports.INLINE = "pt-inline";
exports.FILL = "pt-fill";
// components
exports.ALERT = "pt-alert";
exports.ALERT_BODY = "pt-alert-body";
exports.ALERT_CONTENTS = "pt-alert-contents";
exports.ALERT_FOOTER = "pt-alert-footer";
exports.BREADCRUMB = "pt-breadcrumb";
exports.BREADCRUMB_CURRENT = "pt-breadcrumb-current";
exports.BREADCRUMBS = "pt-breadcrumbs";
exports.BREADCRUMBS_COLLAPSED = "pt-breadcrumbs-collapsed";
exports.BUTTON = "pt-button";
exports.BUTTON_GROUP = "pt-button-group";
exports.CARD = "pt-card";
exports.COLLAPSE = "pt-collapse";
exports.COLLAPSIBLE_LIST = "pt-collapse-list";
exports.CONTEXT_MENU = "pt-context-menu";
exports.CONTEXT_MENU_POPOVER_TARGET = "pt-context-menu-popover-target";
exports.DIALOG = "pt-dialog";
exports.DIALOG_BODY = "pt-dialog-body";
exports.DIALOG_CLOSE_BUTTON = "pt-dialog-close-button";
exports.DIALOG_FOOTER = "pt-dialog-footer";
exports.DIALOG_FOOTER_ACTIONS = "pt-dialog-footer-actions";
exports.DIALOG_HEADER = "pt-dialog-header";
exports.EDITABLE_TEXT = "pt-editable-text";
exports.ELEVATION_0 = "pt-elevation-0";
exports.ELEVATION_1 = "pt-elevation-1";
exports.ELEVATION_2 = "pt-elevation-2";
exports.ELEVATION_3 = "pt-elevation-3";
exports.ELEVATION_4 = "pt-elevation-4";
exports.INPUT = "pt-input";
exports.INPUT_GROUP = "pt-input-group";
exports.LABEL = "pt-label";
exports.MENU = "pt-menu";
exports.MENU_ITEM = "pt-menu-item";
exports.MENU_SUBMENU = "pt-submenu";
exports.MENU_DIVIDER = "pt-menu-divider";
exports.MENU_HEADER = "pt-menu-header";
exports.NON_IDEAL_STATE = "pt-non-ideal-state";
exports.NON_IDEAL_STATE_ACTION = "pt-non-ideal-state-action";
exports.NON_IDEAL_STATE_DESCRIPTION = "pt-non-ideal-state-description";
exports.NON_IDEAL_STATE_ICON = "pt-non-ideal-state-icon";
exports.NON_IDEAL_STATE_TITLE = "pt-non-ideal-state-title";
exports.NON_IDEAL_STATE_VISUAL = "pt-non-ideal-state-visual";
exports.OVERLAY = "pt-overlay";
exports.OVERLAY_BACKDROP = "pt-overlay-backdrop";
exports.OVERLAY_CONTENT = "pt-overlay-content";
exports.OVERLAY_INLINE = "pt-overlay-inline";
exports.OVERLAY_OPEN = "pt-overlay-open";
exports.OVERLAY_SCROLL_CONTAINER = "pt-overlay-scroll-container";
exports.POPOVER = "pt-popover";
exports.POPOVER_ARROW = "pt-popover-arrow";
exports.POPOVER_BACKDROP = "pt-popover-backdrop";
exports.POPOVER_CONTENT = "pt-popover-content";
exports.POPOVER_DISMISS = "pt-popover-dismiss";
exports.POPOVER_DISMISS_OVERRIDE = "pt-popover-dismiss-override";
exports.POPOVER_OPEN = "pt-popover-open";
exports.POPOVER_TARGET = "pt-popover-target";
exports.TRANSITION_CONTAINER = "pt-transition-container";
exports.PORTAL = "pt-portal";
exports.SELECT = "pt-select";
exports.SLIDER = "pt-slider";
exports.SLIDER_HANDLE = exports.SLIDER + "-handle";
exports.SLIDER_LABEL = exports.SLIDER + "-label";
exports.RANGE_SLIDER = "pt-range-slider";
exports.SPINNER = "pt-spinner";
exports.SVG_SPINNER = "pt-svg-spinner";
exports.TAB = "pt-tab";
exports.TAB_LIST = "pt-tab-list";
exports.TAB_PANEL = "pt-tab-panel";
exports.TABS = "pt-tabs";
exports.TAG = "pt-tag";
exports.TAG_REMOVABLE = "pt-tag-removable";
exports.TAG_REMOVE = "pt-tag-remove";
exports.TOAST = "pt-toast";
exports.TOAST_CONTAINER = "pt-toast-container";
exports.TOAST_MESSAGE = "pt-toast-message";
exports.TOOLTIP = "pt-tooltip";
exports.TREE = "pt-tree";
exports.TREE_NODE = "pt-tree-node";
exports.TREE_NODE_CARET = "pt-tree-node-caret";
exports.TREE_NODE_CARET_CLOSED = "pt-tree-node-caret-closed";
exports.TREE_NODE_CARET_NONE = "pt-tree-node-caret-none";
exports.TREE_NODE_CARET_OPEN = "pt-tree-node-caret-open";
exports.TREE_NODE_CONTENT = "pt-tree-node-content";
exports.TREE_NODE_EXPANDED = "pt-tree-node-expanded";
exports.TREE_NODE_ICON = "pt-tree-node-icon";
exports.TREE_NODE_LABEL = "pt-tree-node-label";
exports.TREE_NODE_LIST = "pt-tree-node-list";
exports.TREE_NODE_SECONDARY_LABEL = "pt-tree-node-secondary-label";
exports.TREE_NODE_SELECTED = "pt-tree-node-selected";
exports.TREE_ROOT = "pt-tree-root";
exports.ICON_STANDARD = "pt-icon-standard";
exports.ICON_LARGE = "pt-icon-large";
/** Return CSS class for icon, whether or not 'pt-icon-' prefix is included */
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("pt-icon-") === 0 ? iconName : "pt-icon-" + iconName;
}
exports.iconClass = iconClass;
function intentClass(intent) {
    if (intent === void 0) { intent = intent_1.Intent.NONE; }
    if (intent === intent_1.Intent.NONE || intent_1.Intent[intent] == null) {
        return undefined;
    }
    return "pt-intent-" + intent_1.Intent[intent].toLowerCase();
}
exports.intentClass = intentClass;


},{"./intent":8}],5:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
exports.Colors = {
    BLACK: "#10161A",
    BLUE1: "#0E5A8A",
    BLUE2: "#106BA3",
    BLUE3: "#137CBD",
    BLUE4: "#2B95D6",
    BLUE5: "#48AFF0",
    COBALT1: "#1F4B99",
    COBALT2: "#2458B3",
    COBALT3: "#2965CC",
    COBALT4: "#4580E6",
    COBALT5: "#669EFF",
    DARK_GRAY1: "#182026",
    DARK_GRAY2: "#202B33",
    DARK_GRAY3: "#293742",
    DARK_GRAY4: "#30404D",
    DARK_GRAY5: "#394B59",
    FOREST1: "#1D7324",
    FOREST2: "#238C2C",
    FOREST3: "#29A634",
    FOREST4: "#43BF4D",
    FOREST5: "#62D96B",
    GOLD1: "#A67908",
    GOLD2: "#BF8C0A",
    GOLD3: "#D99E0B",
    GOLD4: "#F2B824",
    GOLD5: "#FFC940",
    GRAY1: "#5C7080",
    GRAY2: "#738694",
    GRAY3: "#8A9BA8",
    GRAY4: "#A7B6C2",
    GRAY5: "#BFCCD6",
    GREEN1: "#0A6640",
    GREEN2: "#0D8050",
    GREEN3: "#0F9960",
    GREEN4: "#15B371",
    GREEN5: "#3DCC91",
    INDIGO1: "#5642A6",
    INDIGO2: "#634DBF",
    INDIGO3: "#7157D9",
    INDIGO4: "#9179F2",
    INDIGO5: "#AD99FF",
    LIGHT_GRAY1: "#CED9E0",
    LIGHT_GRAY2: "#D8E1E8",
    LIGHT_GRAY3: "#E1E8ED",
    LIGHT_GRAY4: "#EBF1F5",
    LIGHT_GRAY5: "#F5F8FA",
    LIME1: "#728C23",
    LIME2: "#87A629",
    LIME3: "#9BBF30",
    LIME4: "#B6D94C",
    LIME5: "#D1F26D",
    ORANGE1: "#A66321",
    ORANGE2: "#BF7326",
    ORANGE3: "#D9822B",
    ORANGE4: "#F29D49",
    ORANGE5: "#FFB366",
    RED1: "#A82A2A",
    RED2: "#C23030",
    RED3: "#DB3737",
    RED4: "#F55656",
    RED5: "#FF7373",
    ROSE1: "#A82255",
    ROSE2: "#C22762",
    ROSE3: "#DB2C6F",
    ROSE4: "#F5498B",
    ROSE5: "#FF66A1",
    SEPIA1: "#63411E",
    SEPIA2: "#7D5125",
    SEPIA3: "#96622D",
    SEPIA4: "#B07B46",
    SEPIA5: "#C99765",
    TURQUOISE1: "#008075",
    TURQUOISE2: "#00998C",
    TURQUOISE3: "#00B3A4",
    TURQUOISE4: "#14CCBD",
    TURQUOISE5: "#2EE6D6",
    VERMILION1: "#9E2B0E",
    VERMILION2: "#B83211",
    VERMILION3: "#D13913",
    VERMILION4: "#EB532D",
    VERMILION5: "#FF6E4A",
    VIOLET1: "#5C255C",
    VIOLET2: "#752F75",
    VIOLET3: "#8F398F",
    VIOLET4: "#A854A8",
    VIOLET5: "#C274C2",
    WHITE: "#FFFFFF",
};


},{}],6:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var ns = "[Blueprint]";
var deprec = ns + " DEPRECATION:";
function deprecationWarning(oldName, newName, message) {
    if (message === void 0) { message = ""; }
    return deprec + " '" + oldName + "' prop has been replaced by the '" + newName + "' prop. " + message + "\nIt will be removed in the next major version of blueprint.";
}
exports.deprecationWarning = deprecationWarning;
exports.ALERT_CANCEL_PROPS = ns + " If either cancelButtonText or onCancel are set in <Alert>, both must be set.";
exports.DEPRECATION_SHOULD_ATTACH_TO_BODY = deprecationWarning("shouldAttachToBody", "inline");
exports.COLLAPSIBLE_LIST_INVALID_CHILD = ns + " <CollapsibleList> children must be <MenuItem>s";
exports.MENU_CHILDREN_SUBMENU_MUTEX = ns + " <MenuItem> children and submenu props are mutually exclusive";
exports.POPOVER_ONE_CHILD = ns + " <Popover> requires exactly one target element";
exports.POPOVER_CONTROLLED_DISABLED = ns + " <Popover> isOpen and isDisabled props are mutually exclusive";
exports.POPOVER_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled";
exports.POPOVER_MODAL_INLINE = ns + " <Popover isModal={true}> requires inline={false}.";
exports.POPOVER_MODAL_INTERACTION = ns + " <Popover isModal={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
exports.POPOVER_SMART_POSITIONING_INLINE = "{ns} <Popover useSmartPositioning={true}> requires inline={false}.";
exports.RADIOGROUP_RADIO_CHILDREN = ns + " <RadioGroup> only supports <Radio> children";
exports.RADIOGROUP_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options props are mutually exclusive.";
exports.RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers";
exports.TABS_FIRST_CHILD = ns + " First child of <Tabs> component should be a <TabList>";
exports.TABS_MISMATCH = ns + " Number of <Tab> components should equal number of <TabPanel> components";
exports.TOASTER_INLINE_WARNING = ns + " Toaster.create() ignores inline prop as it always creates a new element";
exports.WARNING_DIALOG_NO_HEADER_ICON = ns + " Warning: Dialog iconName prop is ignored if title prop is omitted";
exports.WARNING_DIALOG_NO_HEADER_CLOSE_BUTTON = ns + " Warning: Dialog isCloseButtonShown prop is ignored if title prop is omitted";


},{}],7:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./abstractComponent"));
__export(require("./colors"));
__export(require("./intent"));
__export(require("./position"));
__export(require("./props"));
__export(require("./tetherUtils"));
var classes = require("../common/classes");
var keys = require("../common/keys");
var utils = require("./utils");
exports.Classes = classes;
exports.Keys = keys;
exports.Utils = utils;
// NOTE: Errors is not exported in public API


},{"../common/classes":4,"../common/keys":10,"./abstractComponent":3,"./colors":5,"./intent":8,"./position":11,"./props":12,"./tetherUtils":13,"./utils":14}],8:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
/**
 * The four basic intents.
 */
(function (Intent) {
    Intent[Intent["NONE"] = -1] = "NONE";
    Intent[Intent["PRIMARY"] = 0] = "PRIMARY";
    Intent[Intent["SUCCESS"] = 1] = "SUCCESS";
    Intent[Intent["WARNING"] = 2] = "WARNING";
    Intent[Intent["DANGER"] = 3] = "DANGER";
})(exports.Intent || (exports.Intent = {}));
var Intent = exports.Intent;


},{}],9:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var TAB_KEY_CODE = 9;
/* istanbul ignore next */
/**
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 */
var InteractionModeEngine = (function () {
    // tslint:disable-next-line:no-constructor-vars
    function InteractionModeEngine(container, className) {
        var _this = this;
        this.container = container;
        this.className = className;
        this.isRunning = false;
        this.handleKeyDown = function (e) {
            if (e.which === TAB_KEY_CODE) {
                _this.reset();
                _this.container.addEventListener("mousedown", _this.handleMouseDown);
            }
        };
        this.handleMouseDown = function () {
            _this.reset();
            _this.container.classList.add(_this.className);
            _this.container.addEventListener("keydown", _this.handleKeyDown);
        };
    }
    /** Returns whether the engine is currently running. */
    InteractionModeEngine.prototype.isActive = function () {
        return this.isRunning;
    };
    /** Enable behavior which applies the given className when in mouse mode. */
    InteractionModeEngine.prototype.start = function () {
        this.container.addEventListener("mousedown", this.handleMouseDown);
        this.isRunning = true;
    };
    /** Disable interaction mode behavior and remove className from container. */
    InteractionModeEngine.prototype.stop = function () {
        this.reset();
        this.isRunning = false;
    };
    InteractionModeEngine.prototype.reset = function () {
        this.container.classList.remove(this.className);
        this.container.removeEventListener("keydown", this.handleKeyDown);
        this.container.removeEventListener("mousedown", this.handleMouseDown);
    };
    return InteractionModeEngine;
}());
exports.InteractionModeEngine = InteractionModeEngine;


},{}],10:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
exports.ARROW_DOWN = 40;
exports.ARROW_LEFT = 37;
exports.ARROW_RIGHT = 39;
exports.ARROW_UP = 38;
exports.ENTER = 13;
exports.ESCAPE = 27;
exports.SPACE = 32;


},{}],11:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
(function (Position) {
    Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
    Position[Position["TOP"] = 1] = "TOP";
    Position[Position["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Position[Position["RIGHT_TOP"] = 3] = "RIGHT_TOP";
    Position[Position["RIGHT"] = 4] = "RIGHT";
    Position[Position["RIGHT_BOTTOM"] = 5] = "RIGHT_BOTTOM";
    Position[Position["BOTTOM_RIGHT"] = 6] = "BOTTOM_RIGHT";
    Position[Position["BOTTOM"] = 7] = "BOTTOM";
    Position[Position["BOTTOM_LEFT"] = 8] = "BOTTOM_LEFT";
    Position[Position["LEFT_BOTTOM"] = 9] = "LEFT_BOTTOM";
    Position[Position["LEFT"] = 10] = "LEFT";
    Position[Position["LEFT_TOP"] = 11] = "LEFT_TOP";
})(exports.Position || (exports.Position = {}));
var Position = exports.Position;
function isPositionHorizontal(position) {
    /* istanbul ignore next */
    return position === Position.TOP || position === Position.TOP_LEFT || position === Position.TOP_RIGHT
        || position === Position.BOTTOM || position === Position.BOTTOM_LEFT || position === Position.BOTTOM_RIGHT;
}
exports.isPositionHorizontal = isPositionHorizontal;
function isPositionVertical(position) {
    /* istanbul ignore next */
    return position === Position.LEFT || position === Position.LEFT_TOP || position === Position.LEFT_BOTTOM
        || position === Position.RIGHT || position === Position.RIGHT_TOP || position === Position.RIGHT_BOTTOM;
}
exports.isPositionVertical = isPositionVertical;


},{}],12:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var utils_1 = require("./utils");
/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "containerRef",
    "defaultIndeterminate",
    "elementRef",
    "iconName",
    "inputRef",
    "intent",
    "leftIconName",
    "onChildrenMount",
    "onRemove",
    "rightElement",
    "rightIconName",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, utils_1.shallowClone(props));
}
exports.removeNonHTMLProps = removeNonHTMLProps;


},{"./utils":14}],13:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var position_1 = require("./position");
var DEFAULT_CONSTRAINTS = {
    attachment: "together",
    to: "scrollParent",
};
// per https://github.com/HubSpot/tether/pull/204, Tether now exposes a `bodyElement` option that,
// when present, gets the tethered element injected into *it* instead of into the document body.
// but both approaches still cause React to freak out, because it loses its handle on the DOM
// element. thus, we pass a fake HTML bodyElement to Tether, with a no-op `appendChild` function
// (the only function the library uses from bodyElement).
var fakeHtmlElement = {
    appendChild: function () { },
};
/** @internal */
function createTetherOptions(element, target, position, useSmartPositioning, constraints) {
    if (constraints == null && useSmartPositioning) {
        constraints = [DEFAULT_CONSTRAINTS];
    }
    var options = {
        attachment: getPopoverAttachment(position),
        bodyElement: fakeHtmlElement,
        classPrefix: "pt-tether",
        constraints: constraints,
        element: element,
        target: target,
        targetAttachment: getTargetAttachment(position),
    };
    return options;
}
exports.createTetherOptions = createTetherOptions;
/** @internal */
function getTargetAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "top left",
        _a[position_1.Position.TOP] = "top center",
        _a[position_1.Position.TOP_RIGHT] = "top right",
        _a[position_1.Position.RIGHT_TOP] = "top right",
        _a[position_1.Position.RIGHT] = "middle right",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom right",
        _a[position_1.Position.BOTTOM_RIGHT] = "bottom right",
        _a[position_1.Position.BOTTOM] = "bottom center",
        _a[position_1.Position.BOTTOM_LEFT] = "bottom left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom left",
        _a[position_1.Position.LEFT] = "middle left",
        _a[position_1.Position.LEFT_TOP] = "top left",
        _a
    );
    return attachments[position];
    var _a;
}
exports.getTargetAttachment = getTargetAttachment;
/** @internal */
function getPopoverAttachment(position) {
    var attachments = (_a = {},
        _a[position_1.Position.TOP_LEFT] = "bottom left",
        _a[position_1.Position.TOP] = "bottom center",
        _a[position_1.Position.TOP_RIGHT] = "bottom right",
        _a[position_1.Position.RIGHT_TOP] = "top left",
        _a[position_1.Position.RIGHT] = "middle left",
        _a[position_1.Position.RIGHT_BOTTOM] = "bottom left",
        _a[position_1.Position.BOTTOM_RIGHT] = "top right",
        _a[position_1.Position.BOTTOM] = "top center",
        _a[position_1.Position.BOTTOM_LEFT] = "top left",
        _a[position_1.Position.LEFT_BOTTOM] = "bottom right",
        _a[position_1.Position.LEFT] = "middle right",
        _a[position_1.Position.LEFT_TOP] = "top right",
        _a
    );
    return attachments[position];
    var _a;
}
exports.getPopoverAttachment = getPopoverAttachment;
/** @internal */
function getAttachmentClasses(position) {
    // this essentially reimplements the Tether logic for attachment classes so the same styles
    // can be reused outside of Tether-based popovers.
    return expandAttachmentClasses(getPopoverAttachment(position), "pt-tether-element-attached").concat(expandAttachmentClasses(getTargetAttachment(position), "pt-tether-target-attached"));
}
exports.getAttachmentClasses = getAttachmentClasses;
function expandAttachmentClasses(attachments, prefix) {
    var _a = attachments.split(" "), verticalAlign = _a[0], horizontalAlign = _a[1];
    return [(prefix + "-" + verticalAlign), (prefix + "-" + horizontalAlign)];
}


},{"./position":11}],14:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
/** Returns whether the value is a function. Acts as a type guard. */
function isFunction(value) {
    return typeof value === "function";
}
exports.isFunction = isFunction;
function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
}
exports.safeInvoke = safeInvoke;
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
exports.elementIsOrContains = elementIsOrContains;
/**
 * Returns the difference in length between two arrays. A `null` argument is considered an empty list.
 * The return value will be positive if `a` is longer than `b`, negative if the opposite is true,
 * and zero if their lengths are equal.
 */
function arrayLengthCompare(a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length - b.length;
}
exports.arrayLengthCompare = arrayLengthCompare;
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful for integers.
 */
function approxEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 0.00001; }
    return Math.abs(a - b) <= tolerance;
}
exports.approxEqual = approxEqual;
/* Clamps the given number between min and max values. Returns value if within range, or closest bound. */
function clamp(val, min, max) {
    if (max < min) {
        throw new Error("clamp: max cannot be less than min");
    }
    return Math.min(Math.max(val, min), max);
}
exports.clamp = clamp;
/** Return a new object with the same keys as the given object (values are copied, not cloned). */
function shallowClone(object) {
    var clonedObject = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            clonedObject[key] = object[key];
        }
    }
    return clonedObject;
}
exports.shallowClone = shallowClone;
/**
 * Throttle an event on an EventTarget by wrapping it in `requestAnimationFrame` call.
 * Returns the event handler that was bound to given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
function throttleEvent(target, eventName, newEventName) {
    var running = false;
    /* istanbul ignore next: borrowed directly from MDN */
    var func = function (event) {
        if (running) {
            return;
        }
        running = true;
        requestAnimationFrame(function () {
            target.dispatchEvent(new CustomEvent(newEventName, event));
            running = false;
        });
    };
    target.addEventListener(eventName, func);
    return func;
}
exports.throttleEvent = throttleEvent;
;


},{}],15:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var common_1 = require("../../common");
var Errors = require("../../common/errors");
var buttons_1 = require("../button/buttons");
var dialog_1 = require("../dialog/dialog");
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        _super.apply(this, arguments);
    }
    Alert.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, intent = _a.intent, isOpen = _a.isOpen, confirmButtonText = _a.confirmButtonText, onConfirm = _a.onConfirm, style = _a.style;
        return (React.createElement(dialog_1.Dialog, {className: classNames(common_1.Classes.ALERT, className), isOpen: isOpen, style: style}, 
            React.createElement("div", {className: common_1.Classes.ALERT_BODY}, 
                this.maybeRenderIcon(), 
                React.createElement("div", {className: common_1.Classes.ALERT_CONTENTS}, children)), 
            React.createElement("div", {className: common_1.Classes.ALERT_FOOTER}, 
                React.createElement(buttons_1.Button, {intent: intent, text: confirmButtonText, onClick: onConfirm}), 
                this.maybeRenderSecondaryAction())));
    };
    Alert.prototype.validateProps = function (props) {
        if (props.cancelButtonText != null && props.onCancel == null ||
            props.cancelButtonText == null && props.onCancel != null) {
            throw new Error(Errors.ALERT_CANCEL_PROPS);
        }
    };
    Alert.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName != null) {
            var iconClass = classNames("pt-icon", common_1.Classes.iconClass(iconName));
            return React.createElement("span", {className: iconClass});
        }
        return undefined;
    };
    Alert.prototype.maybeRenderSecondaryAction = function () {
        if (this.props.cancelButtonText != null) {
            return React.createElement(buttons_1.Button, {text: this.props.cancelButtonText, onClick: this.props.onCancel});
        }
        return undefined;
    };
    Alert.defaultProps = {
        confirmButtonText: "Ok",
        isOpen: false,
        onConfirm: null,
    };
    Alert.displayName = "Blueprint.Alert";
    return Alert;
}(common_1.AbstractComponent));
exports.Alert = Alert;


},{"../../common":7,"../../common/errors":6,"../button/buttons":17,"../dialog/dialog":22,"classnames":65,"react":"react"}],16:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
exports.Breadcrumb = function (breadcrumbProps) {
    var classes = classNames(Classes.BREADCRUMB, (_a = {},
        _a[Classes.DISABLED] = breadcrumbProps.disabled,
        _a
    ), breadcrumbProps.className);
    return (React.createElement("a", {className: classes, href: breadcrumbProps.href, onClick: breadcrumbProps.disabled ? null : breadcrumbProps.onClick, tabIndex: breadcrumbProps.disabled ? null : 0, target: breadcrumbProps.target}, breadcrumbProps.text));
    var _a;
};


},{"../../common/classes":4,"classnames":65,"react":"react"}],17:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, elementRef = _a.elementRef, onClick = _a.onClick, rightIconName = _a.rightIconName, text = _a.text;
        return (React.createElement("button", __assign({type: "button"}, props_1.removeNonHTMLProps(this.props), {className: getButtonClasses(this.props), onClick: disabled ? undefined : onClick, ref: elementRef}), 
            text, 
            children, 
            maybeRenderRightIcon(rightIconName)));
    };
    Button.displayName = "Blueprint.Button";
    return Button;
}(React.Component));
exports.Button = Button;
exports.ButtonFactory = React.createFactory(Button);
var AnchorButton = (function (_super) {
    __extends(AnchorButton, _super);
    function AnchorButton() {
        _super.apply(this, arguments);
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, href = _a.href, onClick = _a.onClick, rightIconName = _a.rightIconName, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b, text = _a.text;
        return (React.createElement("a", __assign({role: "button"}, props_1.removeNonHTMLProps(this.props), {className: getButtonClasses(this.props), href: disabled ? undefined : href, onClick: disabled ? undefined : onClick, ref: this.props.elementRef, tabIndex: disabled ? undefined : tabIndex}), 
            text, 
            children, 
            maybeRenderRightIcon(rightIconName)));
    };
    AnchorButton.displayName = "Blueprint.AnchorButton";
    return AnchorButton;
}(React.Component));
exports.AnchorButton = AnchorButton;
exports.AnchorButtonFactory = React.createFactory(AnchorButton);
function getButtonClasses(props) {
    return classNames(Classes.BUTTON, (_a = {}, _a[Classes.DISABLED] = props.disabled, _a), Classes.iconClass(props.iconName), Classes.intentClass(props.intent), props.className);
    var _a;
}
function maybeRenderRightIcon(iconName) {
    if (iconName == null) {
        return undefined;
    }
    else {
        return React.createElement("span", {className: classNames(Classes.ICON_STANDARD, Classes.iconClass(iconName), Classes.ALIGN_RIGHT)});
    }
}


},{"../../common/classes":4,"../../common/props":12,"classnames":65,"react":"react"}],18:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
(function (AnimationStates) {
    AnimationStates[AnimationStates["CLOSED"] = 0] = "CLOSED";
    AnimationStates[AnimationStates["OPENING"] = 1] = "OPENING";
    AnimationStates[AnimationStates["OPEN"] = 2] = "OPEN";
    AnimationStates[AnimationStates["CLOSING_START"] = 3] = "CLOSING_START";
    AnimationStates[AnimationStates["CLOSING_END"] = 4] = "CLOSING_END";
})(exports.AnimationStates || (exports.AnimationStates = {}));
var AnimationStates = exports.AnimationStates;
/*
 * A collapse can be in one of 5 states:
 * CLOSED
 * When in this state, the contents of the collapse is not rendered, the collapse height is 0,
 * and the body Y is at -height (so that the bottom of the body is at Y=0).
 *
 * OPEN
 * When in this state, the collapse height is set to auto, and the body Y is set to 0 (so the element can be seen
 * as normal).
 *
 * CLOSING_START
 * When in this state, height has been changed from auto to the measured height of the body to prepare for the
 * closing animation in CLOSING_END.
 *
 * CLOSING_END
 * When in this state, the height is set to 0 and the body Y is at -height. Both of these properties are transformed,
 * and then after the animation is complete, the state changes to CLOSED.
 *
 * OPENING
 * When in this state, the body is re-rendered, height is set to the measured body height and the body Y is set to 0.
 * This is all animated, and on complete, the state changes to OPEN.
 *
 * When changing the isOpen prop, the following happens to the states:
 * isOpen = true : CLOSED -> OPENING -> OPEN
 * isOpen = false: OPEN -> CLOSING_START -> CLOSING_END -> CLOSED
 * These are all animated.
 */
var Collapse = (function (_super) {
    __extends(Collapse, _super);
    function Collapse() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            animationState: AnimationStates.OPEN,
            height: "0px",
        };
        // The most recent non-0 height (once a height has been measured - is 0 until then)
        this.height = 0;
        this.contentsRefHandler = function (el) {
            _this.contents = el;
            if (el != null) {
                _this.height = _this.contents.clientHeight;
                _this.setState({
                    animationState: _this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
                    height: _this.height + "px",
                });
            }
        };
    }
    Collapse.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.contents != null && this.contents.clientHeight !== 0) {
            this.height = this.contents.clientHeight;
        }
        if (this.props.isOpen !== nextProps.isOpen) {
            this.clearTimeouts();
            if (this.state.animationState !== AnimationStates.CLOSED && !nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.CLOSING_START,
                    height: this.height + "px",
                });
            }
            else if (this.state.animationState !== AnimationStates.OPEN && nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.OPENING,
                    height: this.height + "px",
                });
                this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
            }
        }
    };
    Collapse.prototype.render = function () {
        var showContents = (this.state.animationState !== AnimationStates.CLOSED);
        var displayWithTransform = showContents && (this.state.animationState !== AnimationStates.CLOSING_END);
        var isAutoHeight = (this.state.height === "auto");
        var containerStyle = {
            height: showContents ? this.state.height : null,
            overflow: isAutoHeight ? "visible" : null,
            transition: isAutoHeight ? "none" : null,
        };
        var contentsStyle = {
            transform: displayWithTransform ? "translateY(0)" : "translateY(-" + this.height + "px)",
            transition: isAutoHeight ? "none" : null,
        };
        // quick type cast because there's no single overload that supports all three ReactTypes (str | Cmp | SFC)
        return React.createElement(this.props.component, {
            className: classNames(Classes.COLLAPSE, this.props.className),
            style: containerStyle,
        }, React.createElement("div", {className: "pt-collapse-body", ref: this.contentsRefHandler, style: contentsStyle}, showContents ? this.props.children : null));
    };
    Collapse.prototype.componentDidMount = function () {
        this.forceUpdate();
        if (this.props.isOpen) {
            this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
        }
        else {
            this.setState({ animationState: AnimationStates.CLOSED });
        }
    };
    Collapse.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.animationState === AnimationStates.CLOSING_START) {
            this.setTimeout(function () { return _this.setState({
                animationState: AnimationStates.CLOSING_END,
                height: "0px",
            }); });
            this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
        }
    };
    Collapse.prototype.onDelayedStateChange = function () {
        switch (this.state.animationState) {
            case AnimationStates.OPENING:
                this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
                break;
            case AnimationStates.CLOSING_END:
                this.setState({ animationState: AnimationStates.CLOSED });
                break;
            default:
                break;
        }
    };
    Collapse.displayName = "Blueprint.Collapse";
    Collapse.defaultProps = {
        component: "div",
        isOpen: false,
        transitionDuration: 200,
    };
    return Collapse;
}(abstractComponent_1.AbstractComponent));
exports.Collapse = Collapse;


},{"../../common/abstractComponent":3,"../../common/classes":4,"classnames":65,"react":"react"}],19:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var position_1 = require("../../common/position");
var menu_1 = require("../menu/menu");
var menuItem_1 = require("../menu/menuItem");
var popover_1 = require("../popover/popover");
(function (CollapseFrom) {
    CollapseFrom[CollapseFrom["START"] = 0] = "START";
    CollapseFrom[CollapseFrom["END"] = 1] = "END";
})(exports.CollapseFrom || (exports.CollapseFrom = {}));
var CollapseFrom = exports.CollapseFrom;
var CollapsibleList = (function (_super) {
    __extends(CollapsibleList, _super);
    function CollapsibleList() {
        _super.apply(this, arguments);
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = React.Children.count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = (collapseFrom === CollapseFrom.START ? childrenLength - 1 - index : index);
            return (React.createElement("li", {className: _this.props.visibleItemClassName, key: absoluteIndex}, _this.props.renderVisibleItem(child.props, absoluteIndex)));
        });
        if (collapseFrom === CollapseFrom.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = (collapseFrom === CollapseFrom.END ? position_1.Position.BOTTOM_RIGHT : position_1.Position.BOTTOM_LEFT);
            collapsedPopover = (React.createElement("li", {className: this.props.visibleItemClassName}, 
                React.createElement(popover_1.Popover, __assign({content: React.createElement(menu_1.Menu, null, collapsedChildren), position: position}, this.props.dropdownProps), this.props.dropdownTarget)
            ));
        }
        return (React.createElement("ul", {className: classNames(Classes.COLLAPSIBLE_LIST, this.props.className)}, 
            collapseFrom === CollapseFrom.START ? collapsedPopover : null, 
            visibleItems, 
            collapseFrom === CollapseFrom.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        if (this.props.children == null) {
            return [[], []];
        }
        var childrenArray = React.Children.map(this.props.children, function (child, index) {
            if (child.type !== menuItem_1.MenuItem) {
                throw new Error(Errors.COLLAPSIBLE_LIST_INVALID_CHILD);
            }
            return React.cloneElement(child, { key: "visible-" + index });
        });
        if (this.props.collapseFrom === CollapseFrom.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [
            childrenArray.slice(0, visibleItemCount),
            childrenArray.slice(visibleItemCount),
        ];
    };
    CollapsibleList.displayName = "Blueprint.CollapsibleList";
    CollapsibleList.defaultProps = {
        collapseFrom: CollapseFrom.START,
        dropdownTarget: null,
        renderVisibleItem: null,
        visibleItemCount: 3,
    };
    return CollapsibleList;
}(React.Component));
exports.CollapsibleList = CollapsibleList;
exports.CollapsibleListFactory = React.createFactory(CollapsibleList);


},{"../../common/classes":4,"../../common/errors":6,"../../common/position":11,"../menu/menu":35,"../menu/menuItem":37,"../popover/popover":41,"classnames":65,"react":"react"}],20:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var position_1 = require("../../common/position");
var utils_1 = require("../../common/utils");
var popover_1 = require("../popover/popover");
var CONSTRAINTS = [{ attachment: "together", pin: true, to: "window" }];
var TRANSITION_DURATION = 100;
var ContextMenu = (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            isOpen: false,
        };
        this.cancelContextMenu = function (e) { return e.preventDefault(); };
        this.handleBackdropContextMenu = function (e) {
            // HACKHACK: React function to remove from the event pool (not sure why it's not in typings #66)
            e.persist();
            e.preventDefault();
            // wait for backdrop to disappear so we can find the "real" element at event coordinates.
            // timeout duration is equivalent to transition duration so we know it's animated out.
            _this.setTimeout(function () {
                // retrigger context menu event at the element beneath the backdrop.
                // if it has a `contextmenu` event handler then it'll be invoked.
                // if it doesn't, no native menu will show (at least on OSX) :(
                var newTarget = document.elementFromPoint(e.clientX, e.clientY);
                newTarget.dispatchEvent(new MouseEvent("contextmenu", e));
            }, TRANSITION_DURATION);
        };
        this.handlePopoverInteraction = function (nextOpenState) {
            if (!nextOpenState) {
                _this.hide();
            }
        };
    }
    ContextMenu.prototype.render = function () {
        // prevent right-clicking in a context menu
        var content = React.createElement("div", {onContextMenu: this.cancelContextMenu}, this.state.menu);
        return (React.createElement(popover_1.Popover, {backdropProps: { onContextMenu: this.handleBackdropContextMenu }, constraints: CONSTRAINTS, content: content, enforceFocus: false, isModal: true, isOpen: this.state.isOpen, onInteraction: this.handlePopoverInteraction, position: position_1.Position.RIGHT_TOP, popoverClassName: Classes.MINIMAL, useSmartArrowPositioning: false, transitionDuration: TRANSITION_DURATION}, 
            React.createElement("div", {className: Classes.CONTEXT_MENU_POPOVER_TARGET, style: this.state.offset})
        ));
    };
    ContextMenu.prototype.show = function (menu, offset, onClose) {
        this.setState({ isOpen: true, menu: menu, offset: offset, onClose: onClose });
    };
    ContextMenu.prototype.hide = function () {
        var onClose = this.state.onClose;
        this.setState({ isOpen: false, onClose: null });
        utils_1.safeInvoke(onClose);
    };
    return ContextMenu;
}(abstractComponent_1.AbstractComponent));
var contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 */
function show(menu, offset, onClose) {
    if (contextMenu == null) {
        var contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
        contextMenu = ReactDOM.render(React.createElement(ContextMenu, null), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose);
}
exports.show = show;
/** Hide the open context menu. */
function hide() {
    if (contextMenu != null) {
        contextMenu.hide();
    }
}
exports.hide = hide;
/** Return whether a context menu is currently open. */
function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}
exports.isOpen = isOpen;


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/position":11,"../../common/utils":14,"../popover/popover":41,"react":"react","react-dom":"react-dom"}],21:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var React = require("react");
var utils_1 = require("../../common/utils");
var ContextMenu = require("./contextMenu");
function ContextMenuTarget(constructor) {
    var _a = constructor.prototype, render = _a.render, renderContextMenu = _a.renderContextMenu;
    if (!utils_1.isFunction(renderContextMenu)) {
        throw new Error("@ContextMenuTarget-decorated class must implement `renderContextMenu`. " + constructor);
    }
    // patching classes like this requires preserving function context
    // tslint:disable-next-line only-arrow-functions
    constructor.prototype.render = function () {
        var _this = this;
        /* tslint:disable:no-invalid-this */
        var element = render.call(this);
        if (element == null) {
            // always return `element` in case caller is distinguishing between `null` and `undefined`
            return element;
        }
        var oldOnContextMenu = element.props.onContextMenu;
        var onContextMenu = function (e) {
            // support nested menus (inner menu target would have called preventDefault())
            if (e.defaultPrevented) {
                return;
            }
            var menu = _this.renderContextMenu(e);
            if (menu != null) {
                e.preventDefault();
                ContextMenu.show(menu, { left: e.clientX, top: e.clientY });
            }
            utils_1.safeInvoke(oldOnContextMenu, e);
        };
        return React.cloneElement(element, { onContextMenu: onContextMenu });
        /* tslint:enable:no-invalid-this */
    };
}
exports.ContextMenuTarget = ContextMenuTarget;
;


},{"../../common/utils":14,"./contextMenu":20,"react":"react"}],22:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var overlay_1 = require("../overlay/overlay");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Dialog";
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, __assign({}, this.props, {className: classNames((_a = {}, _a[Classes.OVERLAY_SCROLL_CONTAINER] = !this.props.inline, _a)), hasBackdrop: true}), 
            React.createElement("div", {className: classNames(Classes.DIALOG, this.props.className), style: this.props.style}, 
                this.maybeRenderHeader(), 
                this.props.children)
        ));
        var _a;
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.error(Errors.WARNING_DIALOG_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = classNames(Classes.DIALOG_CLOSE_BUTTON, Classes.iconClass("small-cross"));
            return React.createElement("button", {"aria-label": "Close", className: classes, onClick: this.props.onClose});
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        if (this.props.title == null) {
            return undefined;
        }
        var maybeIcon;
        if (this.props.iconName != null) {
            maybeIcon = React.createElement("span", {className: classNames(Classes.ICON_LARGE, Classes.iconClass(this.props.iconName))});
        }
        return (React.createElement("div", {className: Classes.DIALOG_HEADER}, 
            maybeIcon, 
            React.createElement("h5", null, this.props.title), 
            this.maybeRenderCloseButton()));
    };
    Dialog.defaultProps = {
        isOpen: false,
    };
    return Dialog;
}(abstractComponent_1.AbstractComponent));
exports.Dialog = Dialog;
exports.DialogFactory = React.createFactory(Dialog);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"../overlay/overlay":39,"classnames":65,"react":"react"}],23:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
var BUFFER_WIDTH = 30;
var EditableText = (function (_super) {
    __extends(EditableText, _super);
    function EditableText(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.refHandlers = {
            content: function (spanElement) {
                _this.valueElement = spanElement;
            },
            input: function (input) {
                if (input != null) {
                    input.focus();
                    var length_1 = input.value.length;
                    input.setSelectionRange(_this.props.selectAllOnFocus ? 0 : length_1, length_1);
                }
            },
        };
        this.cancelEditing = function () {
            var lastValue = _this.state.lastValue;
            _this.setState({ isEditing: false, value: lastValue });
            // invoke onCancel after onChange so consumers' onCancel can override their onChange
            utils_1.safeInvoke(_this.props.onChange, lastValue);
            utils_1.safeInvoke(_this.props.onCancel, lastValue);
        };
        this.toggleEditing = function () {
            if (_this.state.isEditing) {
                var value = _this.state.value;
                _this.setState({
                    isEditing: false,
                    lastValue: value,
                });
                utils_1.safeInvoke(_this.props.onChange, value);
                utils_1.safeInvoke(_this.props.onConfirm, value);
            }
            else if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        this.handleFocus = function () {
            if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        this.handleTextChange = function (event) {
            var value = event.target.value;
            // state value should be updated only when uncontrolled
            if (_this.props.value == null) {
                _this.setState({ value: value });
            }
            utils_1.safeInvoke(_this.props.onChange, value);
        };
        this.handleKeyEvent = function (_a) {
            var ctrlKey = _a.ctrlKey, metaKey = _a.metaKey, which = _a.which;
            if (which === Keys.ENTER && (!_this.props.multiline || ctrlKey || metaKey)) {
                _this.toggleEditing();
            }
            else if (which === Keys.ESCAPE) {
                _this.cancelEditing();
            }
        };
        this.state = {
            inputHeight: 0,
            inputWidth: 0,
            isEditing: props.isEditing === true && props.disabled === false,
            lastValue: getValue(props),
            value: getValue(props),
        };
    }
    EditableText.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, multiline = _a.multiline;
        var value = (this.props.value == null ? this.state.value : this.props.value);
        var hasValue = (value != null && value !== "");
        var classes = classNames(Classes.EDITABLE_TEXT, Classes.intentClass(this.props.intent), (_b = {},
            _b[Classes.DISABLED] = disabled,
            _b["pt-editable-editing"] = this.state.isEditing,
            _b["pt-editable-placeholder"] = !hasValue,
            _b["pt-multiline"] = multiline,
            _b
        ), this.props.className);
        var contentStyle;
        if (multiline) {
            // set height only in multiline mode when not editing
            // otherwise we're measuring this element to determine appropriate height of text
            contentStyle = { height: !this.state.isEditing ? this.state.inputHeight : null };
        }
        else {
            // minWidth only applies in single line mode (multiline == width 100%)
            contentStyle = {
                height: this.state.inputHeight,
                lineHeight: this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                minWidth: this.props.minWidth,
            };
        }
        // make enclosing div focusable when not editing, so it can still be tabbed to focus
        // (when editing, input itself is focusable so div doesn't need to be)
        var tabIndex = this.state.isEditing || disabled ? null : 0;
        return (React.createElement("div", {className: classes, onFocus: this.handleFocus, tabIndex: tabIndex}, 
            this.maybeRenderInput(value), 
            React.createElement("span", {className: "pt-editable-content", ref: this.refHandlers.content, style: contentStyle}, hasValue ? value : this.props.placeholder)));
        var _b;
    };
    EditableText.prototype.componentDidMount = function () {
        this.updateInputDimensions();
    };
    EditableText.prototype.componentDidUpdate = function (_, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            utils_1.safeInvoke(this.props.onEdit);
        }
        this.updateInputDimensions();
    };
    EditableText.prototype.componentWillReceiveProps = function (nextProps) {
        var state = { value: getValue(nextProps) };
        if (nextProps.isEditing != null) {
            state.isEditing = nextProps.isEditing;
        }
        if (nextProps.disabled || (nextProps.disabled == null && this.props.disabled)) {
            state.isEditing = false;
        }
        this.setState(state);
    };
    EditableText.prototype.maybeRenderInput = function (value) {
        var multiline = this.props.multiline;
        if (!this.state.isEditing) {
            return undefined;
        }
        var props = {
            className: "pt-editable-input",
            onBlur: this.toggleEditing,
            onChange: this.handleTextChange,
            onKeyDown: this.handleKeyEvent,
            ref: this.refHandlers.input,
            style: {
                height: this.state.inputHeight,
                lineHeight: !multiline && this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                width: multiline ? "100%" : this.state.inputWidth,
            },
            value: value,
        };
        return multiline ? React.createElement("textarea", __assign({}, props)) : React.createElement("input", __assign({type: "text"}, props));
    };
    EditableText.prototype.updateInputDimensions = function () {
        if (this.valueElement != null) {
            var _a = this.props, maxLines = _a.maxLines, minLines = _a.minLines, minWidth = _a.minWidth, multiline = _a.multiline;
            var _b = this.valueElement, parentElement_1 = _b.parentElement, scrollHeight_1 = _b.scrollHeight, scrollWidth = _b.scrollWidth, textContent = _b.textContent;
            var lineHeight = getLineHeight(this.valueElement);
            // add one line to computed <span> height if text ends in newline
            // because <span> collapses that trailing whitespace but <textarea> shows it
            if (multiline && this.state.isEditing && /\n$/.test(textContent)) {
                scrollHeight_1 += lineHeight;
            }
            if (lineHeight > 0) {
                // line height could be 0 if the isNaN block from getLineHeight kicks in
                scrollHeight_1 = utils_1.clamp(scrollHeight_1, minLines * lineHeight, maxLines * lineHeight);
            }
            // Chrome's input caret height misaligns text so the line-height must be larger than font-size.
            // The computed scrollHeight must also account for a larger inherited line-height from the parent.
            scrollHeight_1 = Math.max(scrollHeight_1, getFontSize(this.valueElement) + 1, getLineHeight(parentElement_1));
            // IE11 needs a small buffer so text does not shift prior to resizing
            this.setState({
                inputHeight: scrollHeight_1,
                inputWidth: Math.max(scrollWidth + BUFFER_WIDTH, minWidth),
            });
            // synchronizes the ::before pseudo-element's height while editing for Chrome 53
            if (multiline && this.state.isEditing) {
                this.setTimeout(function () { return parentElement_1.style.height = scrollHeight_1 + "px"; });
            }
        }
    };
    EditableText.defaultProps = {
        defaultValue: "",
        disabled: false,
        maxLines: Infinity,
        minLines: 1,
        minWidth: 80,
        multiline: false,
        placeholder: "Click to Edit",
    };
    EditableText = __decorate([
        PureRender
    ], EditableText);
    return EditableText;
}(abstractComponent_1.AbstractComponent));
exports.EditableText = EditableText;
function getValue(props) {
    return props.value == null ? props.defaultValue : props.value;
}
function getFontSize(element) {
    var fontSize = getComputedStyle(element).fontSize;
    return fontSize === "" ? 0 : parseInt(fontSize.slice(0, -2), 10);
}
function getLineHeight(element) {
    // getComputedStyle() => 18.0001px => 18
    var lineHeight = parseInt(getComputedStyle(element).lineHeight.slice(0, -2), 10);
    // this check will be true if line-height is a keyword like "normal"
    if (isNaN(lineHeight)) {
        // @see http://stackoverflow.com/a/18430767/6342931
        var line = document.createElement("span");
        line.innerHTML = "<br>";
        element.appendChild(line);
        var singleLineHeight = element.offsetHeight;
        line.innerHTML = "<br><br>";
        var doubleLineHeight = element.offsetHeight;
        element.removeChild(line);
        // this can return 0 in edge cases
        lineHeight = doubleLineHeight - singleLineHeight;
    }
    return lineHeight;
}
exports.EditableTextFactory = React.createFactory(EditableText);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/keys":10,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],24:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
var classNames = require("classnames");
var React = require("react");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
/** Base Component class for all Controls */
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        _super.apply(this, arguments);
    }
    // generates control markup for given input type.
    // optional inputRef in case the component needs reference for itself (don't forget to invoke the prop!).
    Control.prototype.renderControl = function (type, typeClassName, inputRef) {
        if (inputRef === void 0) { inputRef = this.props.inputRef; }
        return (React.createElement("label", {className: classNames("pt-control", typeClassName, this.props.className), style: this.props.style}, 
            React.createElement("input", __assign({}, props_1.removeNonHTMLProps(this.props, ["children"], true), {ref: inputRef, type: type})), 
            React.createElement("span", {className: "pt-control-indicator"}), 
            this.props.label, 
            this.props.children));
    };
    return Control;
}(React.Component));
exports.Control = Control;
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleInputRef = function (ref) {
            _this.input = ref;
            utils_1.safeInvoke(_this.props.inputRef, ref);
        };
    }
    Checkbox.prototype.render = function () {
        return this.renderControl("checkbox", "pt-checkbox", this.handleInputRef);
    };
    Checkbox.prototype.componentDidMount = function () {
        if (this.props.defaultIndeterminate != null) {
            this.input.indeterminate = this.props.defaultIndeterminate;
        }
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.props.indeterminate != null) {
            this.input.indeterminate = this.props.indeterminate;
        }
    };
    Checkbox.displayName = "Blueprint.Checkbox";
    return Checkbox;
}(Control));
exports.Checkbox = Checkbox;
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        _super.apply(this, arguments);
    }
    Switch.prototype.render = function () {
        return this.renderControl("checkbox", "pt-switch");
    };
    Switch.displayName = "Blueprint.Switch";
    return Switch;
}(Control));
exports.Switch = Switch;
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        _super.apply(this, arguments);
    }
    Radio.prototype.render = function () {
        return this.renderControl("radio", "pt-radio");
    };
    Radio.displayName = "Blueprint.Radio";
    return Radio;
}(Control));
exports.Radio = Radio;
exports.CheckboxFactory = React.createFactory(Checkbox);
exports.SwitchFactory = React.createFactory(Switch);
exports.RadioFactory = React.createFactory(Radio);


},{"../../common/props":12,"../../common/utils":14,"classnames":65,"react":"react"}],25:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var InputGroup = (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            rightElementWidth: 30,
        };
        this.refHandlers = {
            rightElement: function (ref) { return _this.rightElement = ref; },
        };
    }
    InputGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, leftIconName = _a.leftIconName;
        var classes = classNames(Classes.INPUT_GROUP, Classes.intentClass(intent), (_b = {},
            _b[Classes.DISABLED] = this.props.disabled,
            _b
        ), className);
        var style = { paddingRight: this.state.rightElementWidth };
        return (React.createElement("div", {className: classes}, 
            leftIconName == null ? null : React.createElement("span", {className: "pt-icon " + Classes.iconClass(leftIconName)}), 
            React.createElement("input", __assign({type: "text"}, props_1.removeNonHTMLProps(this.props), {className: Classes.INPUT, ref: this.props.inputRef, style: style})), 
            this.maybeRenderRightElement()));
        var _b;
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return React.createElement("span", {className: "pt-input-action", ref: this.refHandlers.rightElement}, rightElement);
    };
    InputGroup.prototype.updateInputWidth = function () {
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (Math.abs(clientWidth - this.state.rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
    };
    InputGroup.displayName = "Blueprint.InputGroup";
    InputGroup = __decorate([
        PureRender
    ], InputGroup);
    return InputGroup;
}(React.Component));
exports.InputGroup = InputGroup;
exports.InputGroupFactory = React.createFactory(InputGroup);


},{"../../common/classes":4,"../../common/props":12,"classnames":65,"pure-render-decorator":70,"react":"react"}],26:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var controls_1 = require("./controls");
var counter = 0;
function nextName() { return RadioGroup.displayName + "-" + counter++; }
var RadioGroup = (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        _super.apply(this, arguments);
        // a unique name for this group, which can be overridden by `name` prop.
        this.autoGroupName = nextName();
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (React.createElement("div", {className: this.props.className}, 
            label == null ? null : React.createElement("label", {className: Classes.LABEL}, label), 
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null) {
            if (this.props.options != null) {
                throw new Error(Errors.RADIOGROUP_CHILDREN_OPTIONS_MUTEX);
            }
            React.Children.forEach(this.props.children, function (child) {
                var radio = child;
                if (radio.type !== controls_1.Radio) {
                    throw new Error(Errors.RADIOGROUP_RADIO_CHILDREN);
                }
            });
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            var radio = child;
            return React.cloneElement(radio, _this.getRadioProps(radio.props));
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) { return (React.createElement(controls_1.Radio, __assign({}, option, _this.getRadioProps(option), {key: option.value}))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var value = optionProps.value, disabled = optionProps.disabled;
        return {
            checked: value === this.props.selectedValue,
            disabled: disabled || this.props.disabled,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
        };
    };
    RadioGroup.displayName = "Blueprint.RadioGroup";
    return RadioGroup;
}(abstractComponent_1.AbstractComponent));
exports.RadioGroup = RadioGroup;
;


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"./controls":24,"react":"react"}],27:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var common_1 = require("../../common");
var keyCombo_1 = require("./keyCombo");
var Hotkey = (function (_super) {
    __extends(Hotkey, _super);
    function Hotkey() {
        _super.apply(this, arguments);
    }
    Hotkey.isInstance = function (element) {
        return element.type === Hotkey;
    };
    Hotkey.prototype.render = function () {
        var _a = this.props, combo = _a.combo, label = _a.label;
        return React.createElement("div", {className: "pt-hotkey"}, 
            React.createElement("div", {className: "pt-hotkey-label"}, label), 
            React.createElement(keyCombo_1.KeyCombo, {combo: combo}));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    Hotkey.defaultProps = {
        global: false,
    };
    return Hotkey;
}(common_1.AbstractComponent));
exports.Hotkey = Hotkey;


},{"../../common":7,"./keyCombo":33,"react":"react"}],28:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
exports.KeyCodes = {
    8: "backspace",
    9: "tab",
    13: "enter",
    20: "capslock",
    27: "esc",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "ins",
    46: "del",
    // number keys
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    // alphabet
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    // punctuation
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "\'",
};
exports.Modifiers = {
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "meta",
    93: "meta",
    224: "meta",
};
exports.ModifierBitMasks = {
    alt: 1,
    ctrl: 2,
    meta: 4,
    shift: 8,
};
exports.Aliases = {
    cmd: "meta",
    command: "meta",
    escape: "esc",
    minus: "-",
    mod: ((typeof navigator !== "undefined") && /Mac|iPod|iPhone|iPad/.test(navigator.platform)) ? "meta" : "ctrl",
    option: "alt",
    plus: "+",
    return: "enter",
    win: "meta",
};
// alph sorting is unintuitive here
// tslint:disable object-literal-sort-keys
exports.ShiftKeys = {
    "~": "`",
    "!": "1",
    "@": "2",
    "#": "3",
    "$": "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0",
    "_": "-",
    "+": "=",
    "{": "[",
    "}": "]",
    "|": "\\",
    ":": ";",
    "\"": "\'",
    "<": ",",
    ">": ".",
    "?": "/",
};
// tslint:enable object-literal-sort-keys
/* tslint:enable:object-literal-key-quotes */
// Function keys
for (var i = 1; i <= 12; ++i) {
    exports.KeyCodes[111 + i] = "f" + i;
}
// Numpad
for (var i = 0; i <= 9; ++i) {
    exports.KeyCodes[96 + i] = "num" + i.toString();
}
function comboMatches(a, b) {
    return a.modifiers === b.modifiers && a.key === b.key;
}
exports.comboMatches = comboMatches;
/**
 * Converts a key combo string into a key combo object. Key combos include
 * zero or more modifier keys, such as `shift` or `alt`, and exactly one
 * action key, such as `A`, `enter`, or `left`.
 *
 * For action keys that require a shift, e.g. `@` or `|`, we inlude the
 * necessary `shift` modifier and automatically convert the action key to the
 * unshifted version. For example, `@` is equivalent to `shift+2`.
 */
exports.parseKeyCombo = function (combo) {
    var pieces = combo.replace(/\s/g, "").toLowerCase().split("+");
    var modifiers = 0;
    var key = null;
    for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
        var piece = pieces_1[_i];
        if (piece === "") {
            throw new Error("Failed to parse key combo \"" + combo + "\".\n                Valid key combos look like \"cmd + plus\", \"shift+p\", or \"!\"");
        }
        if (exports.Aliases[piece] != null) {
            piece = exports.Aliases[piece];
        }
        if (exports.ModifierBitMasks[piece] != null) {
            modifiers += exports.ModifierBitMasks[piece];
        }
        else if (exports.ShiftKeys[piece] != null) {
            // tslint:disable-next-line no-string-literal
            modifiers += exports.ModifierBitMasks["shift"];
            key = exports.ShiftKeys[piece];
        }
        else {
            key = piece.toLowerCase();
        }
    }
    return { modifiers: modifiers, key: key };
};
/**
 * PhantomJS's webkit totally messes up keyboard events, so we have do this
 * fancy little dance with the event data to determine which key was pressed
 * for unit tests.
 */
var normalizeKeyCode = function (e) {
    return (e.which === 0 && e.key != null) ? e.key.charCodeAt(0) : e.which;
};
/**
 * Converts a keyboard event into a valid combo prop string
 */
exports.getKeyComboString = function (e) {
    var keys = [];
    // modifiers first
    if (e.ctrlKey) {
        keys.push("ctrl");
    }
    if (e.altKey) {
        keys.push("alt");
    }
    if (e.shiftKey) {
        keys.push("shift");
    }
    if (e.metaKey) {
        keys.push("meta");
    }
    var which = normalizeKeyCode(e);
    if (exports.Modifiers[which] != null) {
    }
    else if (exports.KeyCodes[which] != null) {
        keys.push(exports.KeyCodes[which]);
    }
    else {
        keys.push(String.fromCharCode(which).toLowerCase());
    }
    // join keys with plusses
    return keys.join(" + ");
};
/**
 * Determines the key combo object from the given keyboard event. Again, a key
 * combo includes zero or more modifiers (represented by a bitmask) and one
 * action key, which we determine from the `e.which` property of the keyboard
 * event.
 */
exports.getKeyCombo = function (e) {
    var key = null;
    var which = normalizeKeyCode(e);
    if (exports.Modifiers[which] != null) {
    }
    else if (exports.KeyCodes[which] != null) {
        key = exports.KeyCodes[which];
    }
    else {
        key = String.fromCharCode(which).toLowerCase();
    }
    var modifiers = 0;
    // tslint:disable no-string-literal
    if (e.altKey) {
        modifiers += exports.ModifierBitMasks["alt"];
    }
    if (e.ctrlKey) {
        modifiers += exports.ModifierBitMasks["ctrl"];
    }
    if (e.metaKey) {
        modifiers += exports.ModifierBitMasks["meta"];
    }
    if (e.shiftKey) {
        modifiers += exports.ModifierBitMasks["shift"];
    }
    // tslint:enable
    return { modifiers: modifiers, key: key };
};
/**
 * Splits a key combo string into its constituent key values and looks up
 * aliases, such as `return` -> `enter`.
 *
 * Unlike the parseKeyCombo method, this method does NOT convert shifted
 * action keys. So `"@"` will NOT be converted to `["shift", "2"]`).
 */
exports.normalizeKeyCombo = function (combo) {
    var keys = combo.replace(/\s/g, "").split("+");
    return keys.map(function (key) { return exports.Aliases[key] != null ? exports.Aliases[key] : key; });
};
/* tslint:enable:no-string-literal */


},{}],29:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var react_1 = require("react");
var React = require("react");
var common_1 = require("../../common");
var hotkey_1 = require("./hotkey");
var hotkey_2 = require("./hotkey");
exports.Hotkey = hotkey_2.Hotkey;
var keyCombo_1 = require("./keyCombo");
exports.KeyCombo = keyCombo_1.KeyCombo;
var hotkeysTarget_1 = require("./hotkeysTarget");
exports.HotkeysTarget = hotkeysTarget_1.HotkeysTarget;
var hotkeyParser_1 = require("./hotkeyParser");
exports.comboMatches = hotkeyParser_1.comboMatches;
exports.getKeyCombo = hotkeyParser_1.getKeyCombo;
exports.getKeyComboString = hotkeyParser_1.getKeyComboString;
exports.parseKeyCombo = hotkeyParser_1.parseKeyCombo;
var hotkeysDialog_1 = require("./hotkeysDialog");
exports.hideHotkeysDialog = hotkeysDialog_1.hideHotkeysDialog;
exports.setHotkeysDialogProps = hotkeysDialog_1.setHotkeysDialogProps;
var Hotkeys = (function (_super) {
    __extends(Hotkeys, _super);
    function Hotkeys() {
        _super.apply(this, arguments);
    }
    Hotkeys.prototype.render = function () {
        var hotkeys = react_1.Children.map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, globals first
        hotkeys.sort(function (a, b) {
            if (a.global) {
                return b.global ? 0 : -1;
            }
            if (b.global) {
                return 1;
            }
            return a.group.localeCompare(b.group);
        });
        var lastGroup = null;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(React.createElement("h4", {key: "group-" + elems.length, className: "pt-hotkey-group"}, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(React.createElement(hotkey_1.Hotkey, __assign({key: elems.length}, hotkey)));
        }
        return React.createElement("div", {className: "pt-hotkey-column"}, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        react_1.Children.forEach(props.children, function (child) {
            if (typeof child !== "object" || !hotkey_1.Hotkey.isInstance(child)) {
                throw new Error("Hotkeys only accepts <Hotkey> children");
            }
        });
    };
    Hotkeys.defaultProps = {
        tabIndex: 0,
    };
    return Hotkeys;
}(common_1.AbstractComponent));
exports.Hotkeys = Hotkeys;


},{"../../common":7,"./hotkey":27,"./hotkeyParser":28,"./hotkeysDialog":30,"./hotkeysTarget":32,"./keyCombo":33,"react":"react"}],30:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var ReactDOM = require("react-dom");
var common_1 = require("../../common");
var components_1 = require("../../components");
var hotkey_1 = require("./hotkey");
var hotkeys_1 = require("./hotkeys");
var HotkeysDialog = (function () {
    function HotkeysDialog() {
        var _this = this;
        this.componentProps = {
            globalHotkeysGroup: "Global hotkeys",
        };
        this.hotkeysQueue = [];
        this.isDialogShowing = false;
        this.timeoutToken = 0;
        this.show = function () {
            _this.isDialogShowing = true;
            _this.render();
        };
        this.hide = function () {
            _this.isDialogShowing = false;
            _this.render();
        };
    }
    HotkeysDialog.prototype.render = function () {
        if (this.container == null) {
            this.container = this.getContainer();
        }
        ReactDOM.render(this.renderComponent(), this.container);
    };
    HotkeysDialog.prototype.unmount = function () {
        if (this.container != null) {
            ReactDOM.unmountComponentAtNode(this.container);
            this.container.remove();
            delete this.container;
        }
    };
    /**
     * Because hotkeys can be registered globally and locally and because
     * event ordering cannot be guaranteed, we use this debouncing method to
     * allow all hotkey listeners to fire and add their hotkeys to the dialog.
     *
     * 10msec after the last listener adds their hotkeys, we render the dialog
     * and clear the queue.
     */
    HotkeysDialog.prototype.enqueueHotkeysForDisplay = function (hotkeys) {
        this.hotkeysQueue.push(hotkeys);
        // reset timeout for debounce
        clearTimeout(this.timeoutToken);
        this.timeoutToken = setTimeout(this.show, 10);
    };
    HotkeysDialog.prototype.isShowing = function () {
        return this.isDialogShowing;
    };
    HotkeysDialog.prototype.getContainer = function () {
        if (this.container == null) {
            this.container = document.createElement("div");
            this.container.classList.add(common_1.Classes.PORTAL);
            document.body.appendChild(this.container);
        }
        return this.container;
    };
    HotkeysDialog.prototype.renderComponent = function () {
        return (React.createElement(components_1.Dialog, __assign({}, this.componentProps, {className: classNames(this.componentProps.className, "pt-hotkey-dialog"), isOpen: this.isDialogShowing, onClose: this.hide}), 
            React.createElement("div", {className: common_1.Classes.DIALOG_BODY}, this.renderHotkeys())
        ));
    };
    HotkeysDialog.prototype.renderHotkeys = function () {
        var _this = this;
        var hotkeys = this.emptyHotkeyQueue();
        var elements = hotkeys.map(function (hotkey, index) {
            var group = (hotkey.global === true && hotkey.group == null) ?
                _this.componentProps.globalHotkeysGroup : hotkey.group;
            return React.createElement(hotkey_1.Hotkey, __assign({key: index}, hotkey, {group: group}));
        });
        return React.createElement(hotkeys_1.Hotkeys, null, elements);
    };
    HotkeysDialog.prototype.emptyHotkeyQueue = function () {
        // flatten then empty the hotkeys queue
        var hotkeys = this.hotkeysQueue.reduce((function (arr, queued) { return arr.concat(queued); }), []);
        this.hotkeysQueue.length = 0;
        return hotkeys;
    };
    return HotkeysDialog;
}());
// singleton instance
var HOTKEYS_DIALOG = new HotkeysDialog();
function isHotkeysDialogShowing() {
    return HOTKEYS_DIALOG.isShowing();
}
exports.isHotkeysDialogShowing = isHotkeysDialogShowing;
function setHotkeysDialogProps(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            HOTKEYS_DIALOG.componentProps[key] = props[key];
        }
    }
}
exports.setHotkeysDialogProps = setHotkeysDialogProps;
function showHotkeysDialog(hotkeys) {
    HOTKEYS_DIALOG.enqueueHotkeysForDisplay(hotkeys);
}
exports.showHotkeysDialog = showHotkeysDialog;
function hideHotkeysDialog() {
    HOTKEYS_DIALOG.hide();
}
exports.hideHotkeysDialog = hideHotkeysDialog;


},{"../../common":7,"../../components":34,"./hotkey":27,"./hotkeys":29,"classnames":65,"react":"react","react-dom":"react-dom"}],31:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var react_1 = require("react");
var utils_1 = require("../../common/utils");
var hotkey_1 = require("./hotkey");
var hotkeyParser_1 = require("./hotkeyParser");
var hotkeysDialog_1 = require("./hotkeysDialog");
var SHOW_DIALOG_KEY = "?";
(function (HotkeyScope) {
    HotkeyScope[HotkeyScope["LOCAL"] = 0] = "LOCAL";
    HotkeyScope[HotkeyScope["GLOBAL"] = 1] = "GLOBAL";
})(exports.HotkeyScope || (exports.HotkeyScope = {}));
var HotkeyScope = exports.HotkeyScope;
var HotkeysEvents = (function () {
    function HotkeysEvents(scope) {
        var _this = this;
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = function (e) {
            if (_this.isTextInput(e) || hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            var combo = hotkeyParser_1.getKeyCombo(e);
            if (hotkeyParser_1.comboMatches(hotkeyParser_1.parseKeyCombo(SHOW_DIALOG_KEY), combo)) {
                hotkeysDialog_1.showHotkeysDialog(_this.actions.map(function (action) { return action.props; }));
                return;
            }
            for (var _i = 0, _a = _this.actions; _i < _a.length; _i++) {
                var action = _a[_i];
                if (hotkeyParser_1.comboMatches(action.combo, combo)) {
                    utils_1.safeInvoke(action.props.onKeyDown, e);
                }
            }
        };
        this.handleKeyUp = function (e) {
            if (_this.isTextInput(e) || hotkeysDialog_1.isHotkeysDialogShowing()) {
                return;
            }
            var combo = hotkeyParser_1.getKeyCombo(e);
            for (var _i = 0, _a = _this.actions; _i < _a.length; _i++) {
                var action = _a[_i];
                if (hotkeyParser_1.comboMatches(action.combo, combo)) {
                    utils_1.safeInvoke(action.props.onKeyUp, e);
                }
            }
        };
    }
    HotkeysEvents.prototype.count = function () {
        return this.actions.length;
    };
    HotkeysEvents.prototype.clear = function () {
        this.actions = [];
    };
    HotkeysEvents.prototype.setHotkeys = function (props) {
        var _this = this;
        var actions = [];
        react_1.Children.forEach(props.children, function (child) {
            if (hotkey_1.Hotkey.isInstance(child) && _this.isScope(child.props)) {
                actions.push({
                    combo: hotkeyParser_1.parseKeyCombo(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    };
    HotkeysEvents.prototype.isScope = function (props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    };
    HotkeysEvents.prototype.isTextInput = function (e) {
        var elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        var editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            var inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    };
    return HotkeysEvents;
}());
exports.HotkeysEvents = HotkeysEvents;


},{"../../common/utils":14,"./hotkey":27,"./hotkeyParser":28,"./hotkeysDialog":30,"react":"react"}],32:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var React = require("react");
var utils_1 = require("../../common/utils");
var hotkeysEvents_1 = require("./hotkeysEvents");
function HotkeysTarget(constructor) {
    var _a = constructor.prototype, componentWillMount = _a.componentWillMount, componentDidMount = _a.componentDidMount, componentWillUnmount = _a.componentWillUnmount, render = _a.render, renderHotkeys = _a.renderHotkeys;
    if (!utils_1.isFunction(renderHotkeys)) {
        throw new Error("@HotkeysTarget-decorated class must implement `renderHotkeys`. " + constructor);
    }
    // tslint:disable no-invalid-this only-arrow-functions
    constructor.prototype.componentWillMount = function () {
        this.localHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.LOCAL);
        this.globalHotkeysEvents = new hotkeysEvents_1.HotkeysEvents(hotkeysEvents_1.HotkeyScope.GLOBAL);
        if (componentWillMount != null) {
            componentWillMount.call(this);
        }
    };
    constructor.prototype.componentDidMount = function () {
        // attach global key event listeners
        document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        if (componentDidMount != null) {
            componentDidMount.call(this);
        }
    };
    constructor.prototype.componentWillUnmount = function () {
        // detach global key event listeners
        document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        this.globalHotkeysEvents.clear();
        this.localHotkeysEvents.clear();
        if (componentWillUnmount != null) {
            componentWillUnmount.call(this);
        }
    };
    constructor.prototype.render = function () {
        var _this = this;
        var element = render.call(this);
        var hotkeys = renderHotkeys.call(this);
        this.localHotkeysEvents.setHotkeys(hotkeys.props);
        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
        // attach local key event listeners
        if (element != null && this.localHotkeysEvents.count() > 0) {
            var tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
            var existingKeyDown_1 = element.props.onKeyDown;
            var onKeyDown = function (e) {
                _this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                utils_1.safeInvoke(existingKeyDown_1, e);
            };
            var existingKeyUp_1 = element.props.onKeyUp;
            var onKeyUp = function (e) {
                _this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                utils_1.safeInvoke(existingKeyUp_1, e);
            };
            return React.cloneElement(element, { tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp });
        }
        else {
            return element;
        }
    };
    // tslint:enable
}
exports.HotkeysTarget = HotkeysTarget;
;


},{"../../common/utils":14,"./hotkeysEvents":31,"react":"react"}],33:[function(require,module,exports){
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var hotkeyParser_1 = require("./hotkeyParser");
var KeyIcons = {
    alt: "pt-icon-key-option",
    ctrl: "pt-icon-key-control",
    delete: "pt-icon-key-delete",
    down: "pt-icon-arrow-down",
    enter: "pt-icon-key-enter",
    left: "pt-icon-arrow-left",
    meta: "pt-icon-key-command",
    right: "pt-icon-arrow-right",
    shift: "pt-icon-key-shift",
    up: "pt-icon-arrow-up",
};
var KeyCombo = (function (_super) {
    __extends(KeyCombo, _super);
    function KeyCombo() {
        _super.apply(this, arguments);
    }
    KeyCombo.prototype.render = function () {
        var keys = hotkeyParser_1.normalizeKeyCombo(this.props.combo);
        var components = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var icon = KeyIcons[key];
            if (icon != null) {
                components.push(React.createElement("kbd", {className: "pt-key pt-modifier-key", key: "key-" + i}, 
                    React.createElement("span", {className: "pt-icon-standard " + icon}), 
                    key));
            }
            else {
                if (key.length === 1) {
                    key = key.toUpperCase();
                }
                components.push(React.createElement("kbd", {className: "pt-key", key: "key-" + i}, key));
            }
        }
        return React.createElement("div", {className: "pt-key-combo"}, components);
    };
    return KeyCombo;
}(React.Component));
exports.KeyCombo = KeyCombo;


},{"./hotkeyParser":28,"react":"react"}],34:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // tslint:disable-next-line:no-var-requires
    require("dom4"); // only import actual dom4 if we're in the browser (not server-compatible)
}
var contextMenu = require("./context-menu/contextMenu");
exports.ContextMenu = contextMenu;
__export(require("./alert/alert"));
__export(require("./breadcrumbs/breadcrumb"));
__export(require("./button/buttons"));
__export(require("./collapse/collapse"));
__export(require("./collapsible-list/collapsibleList"));
__export(require("./context-menu/contextMenuTarget"));
__export(require("./dialog/dialog"));
__export(require("./editable-text/editableText"));
__export(require("./forms/controls"));
__export(require("./forms/inputGroup"));
__export(require("./forms/radioGroup"));
__export(require("./hotkeys/hotkeys"));
__export(require("./menu/menu"));
__export(require("./menu/menuDivider"));
__export(require("./menu/menuItem"));
__export(require("./non-ideal-state/nonIdealState"));
__export(require("./overlay/overlay"));
__export(require("./popover/popover"));
__export(require("./popover/svgPopover"));
__export(require("./portal/portal"));
__export(require("./progress/progressBar"));
__export(require("./tooltip/svgTooltip"));
__export(require("./slider/rangeSlider"));
__export(require("./slider/slider"));
__export(require("./spinner/spinner"));
__export(require("./spinner/svgSpinner"));
__export(require("./tabs/tab"));
__export(require("./tabs/tabs"));
__export(require("./tabs/tabList"));
__export(require("./tabs/tabPanel"));
__export(require("./tag/tag"));
__export(require("./toast/toast"));
__export(require("./toast/toaster"));
__export(require("./tooltip/tooltip"));
__export(require("./tree/tree"));
__export(require("./tree/treeNode"));


},{"./alert/alert":15,"./breadcrumbs/breadcrumb":16,"./button/buttons":17,"./collapse/collapse":18,"./collapsible-list/collapsibleList":19,"./context-menu/contextMenu":20,"./context-menu/contextMenuTarget":21,"./dialog/dialog":22,"./editable-text/editableText":23,"./forms/controls":24,"./forms/inputGroup":25,"./forms/radioGroup":26,"./hotkeys/hotkeys":29,"./menu/menu":35,"./menu/menuDivider":36,"./menu/menuItem":37,"./non-ideal-state/nonIdealState":38,"./overlay/overlay":39,"./popover/popover":41,"./popover/svgPopover":42,"./portal/portal":43,"./progress/progressBar":44,"./slider/rangeSlider":47,"./slider/slider":48,"./spinner/spinner":49,"./spinner/svgSpinner":50,"./tabs/tab":51,"./tabs/tabList":52,"./tabs/tabPanel":53,"./tabs/tabs":54,"./tag/tag":55,"./toast/toast":56,"./toast/toaster":57,"./tooltip/svgTooltip":58,"./tooltip/tooltip":59,"./tree/tree":60,"./tree/treeNode":61,"dom4":66}],35:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.apply(this, arguments);
    }
    Menu.prototype.render = function () {
        return React.createElement("ul", {className: classNames(Classes.MENU, this.props.className)}, this.props.children);
    };
    Menu.displayName = "Blueprint.Menu";
    return Menu;
}(React.Component));
exports.Menu = Menu;
exports.MenuFactory = React.createFactory(Menu);


},{"../../common/classes":4,"classnames":65,"react":"react"}],36:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var MenuDivider = (function (_super) {
    __extends(MenuDivider, _super);
    function MenuDivider() {
        _super.apply(this, arguments);
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        if (title == null) {
            // simple divider
            return React.createElement("li", {className: classNames(Classes.MENU_DIVIDER, className)});
        }
        else {
            // section header with title
            return React.createElement("li", {className: classNames(Classes.MENU_HEADER, className)}, 
                React.createElement("h6", null, title)
            );
        }
    };
    MenuDivider.displayName = "Blueprint.MenuDivider";
    return MenuDivider;
}(React.Component));
exports.MenuDivider = MenuDivider;
exports.MenuDividerFactory = React.createFactory(MenuDivider);


},{"../../common/classes":4,"classnames":65,"react":"react"}],37:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var ReactDOM = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var position_1 = require("../../common/position");
var popover_1 = require("../popover/popover");
var menu_1 = require("./menu");
var REACT_CONTEXT_TYPES = { alignLeft: React.PropTypes.bool };
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            alignLeft: false,
        };
        this.liRefHandler = function (r) { return _this.liElement = r; };
        this.measureSubmenu = function (el) {
            if (el != null) {
                var submenuRect = ReactDOM.findDOMNode(el).getBoundingClientRect();
                var parentWidth = _this.liElement.parentElement.getBoundingClientRect().width;
                var adjustmentWidth = submenuRect.width + parentWidth;
                // this ensures that the left and right measurements represent a submenu opened to the right
                var submenuLeft = submenuRect.left;
                var submenuRight = submenuRect.right;
                if (_this.state.alignLeft) {
                    submenuLeft += adjustmentWidth;
                    submenuRight += adjustmentWidth;
                }
                var _a = _this.props.submenuViewportMargin, _b = _a.left, left = _b === void 0 ? 0 : _b, _c = _a.right, right = _c === void 0 ? 0 : _c;
                if (typeof document !== "undefined"
                    && typeof document.documentElement !== "undefined"
                    && Number(document.documentElement.clientWidth)) {
                    // we're in a browser context and the clientWidth is available,
                    // use it to set calculate 'right'
                    right = document.documentElement.clientWidth - right;
                }
                // uses context to prioritize the previous positioning
                var alignLeft = _this.context.alignLeft || false;
                if (alignLeft) {
                    if ((submenuLeft - adjustmentWidth) <= left) {
                        alignLeft = false;
                    }
                }
                else {
                    if (submenuRight >= right) {
                        alignLeft = true;
                    }
                }
                _this.setState({ alignLeft: alignLeft });
            }
        };
        this.renderChildren = function () {
            var _a = _this.props, children = _a.children, submenu = _a.submenu;
            if (children != null) {
                var childProps_1 = _this.cascadeProps();
                if (Object.keys(childProps_1).length !== 0) {
                    children = React.Children.map(children, function (child) {
                        return React.cloneElement(child, childProps_1);
                    });
                }
            }
            else if (submenu != null) {
                children = submenu.map(_this.cascadeProps).map(renderMenuItem);
            }
            return children;
        };
        /**
         * Evalutes this.props and cascades prop values into new props when:
         * - submenuViewportMargin is defined, but is undefined for the supplied input.
         * - useSmartPositioning is false, but is undefined for the supplied input.
         * @param {IMenuItemProps} newProps If supplied, object will be modified, otherwise, defaults to an empty object.
         * @returns An object to be used as child props.
         */
        this.cascadeProps = function (newProps) {
            if (newProps === void 0) { newProps = {}; }
            var _a = _this.props, submenuViewportMargin = _a.submenuViewportMargin, useSmartPositioning = _a.useSmartPositioning;
            if (submenuViewportMargin != null && newProps.submenuViewportMargin == null) {
                newProps.submenuViewportMargin = submenuViewportMargin;
            }
            if (useSmartPositioning === false && newProps.useSmartPositioning == null) {
                newProps.useSmartPositioning = useSmartPositioning;
            }
            return newProps;
        };
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, label = _a.label, submenu = _a.submenu;
        var hasSubmenu = children != null || submenu != null;
        var liClasses = classNames((_b = {},
            _b[Classes.MENU_SUBMENU] = hasSubmenu,
            _b
        ));
        var anchorClasses = classNames(Classes.MENU_ITEM, Classes.intentClass(this.props.intent), (_c = {},
            _c[Classes.DISABLED] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _c[Classes.POPOVER_DISMISS] = this.props.shouldDismissPopover && !disabled && !hasSubmenu,
            _c
        ), Classes.iconClass(this.props.iconName), this.props.className);
        var labelElement;
        if (label != null) {
            labelElement = React.createElement("span", {className: "pt-menu-item-label"}, label);
        }
        var content = (React.createElement("a", {className: anchorClasses, href: disabled ? undefined : this.props.href, onClick: disabled ? undefined : this.props.onClick, tabIndex: disabled ? undefined : 0, target: this.props.target}, 
            labelElement, 
            this.props.text));
        if (hasSubmenu) {
            var measureSubmenu = (this.props.useSmartPositioning) ? this.measureSubmenu : null;
            var submenuElement = React.createElement(menu_1.Menu, {ref: measureSubmenu}, this.renderChildren());
            var popoverClasses = classNames((_d = {},
                _d[Classes.ALIGN_LEFT] = this.state.alignLeft,
                _d
            ));
            content = (React.createElement(popover_1.Popover, {content: submenuElement, isDisabled: disabled, enforceFocus: false, hoverCloseDelay: 0, inline: true, interactionKind: popover_1.PopoverInteractionKind.HOVER, position: this.state.alignLeft ? position_1.Position.LEFT_TOP : position_1.Position.RIGHT_TOP, popoverClassName: classNames(Classes.MINIMAL, Classes.MENU_SUBMENU, popoverClasses), useSmartArrowPositioning: false}, content));
        }
        return (React.createElement("li", {className: liClasses, ref: this.liRefHandler}, content));
        var _b, _c, _d;
    };
    MenuItem.prototype.getChildContext = function () {
        return { alignLeft: this.state.alignLeft };
    };
    MenuItem.prototype.validateProps = function (props) {
        if (props.children != null && props.submenu != null) {
            throw new Error(Errors.MENU_CHILDREN_SUBMENU_MUTEX);
        }
    };
    MenuItem.defaultProps = {
        disabled: false,
        shouldDismissPopover: true,
        submenuViewportMargin: {},
        text: "",
        useSmartPositioning: true,
    };
    MenuItem.displayName = "Blueprint.MenuItem";
    MenuItem.contextTypes = REACT_CONTEXT_TYPES;
    MenuItem.childContextTypes = REACT_CONTEXT_TYPES;
    return MenuItem;
}(abstractComponent_1.AbstractComponent));
exports.MenuItem = MenuItem;
function renderMenuItem(props, key) {
    return React.createElement(MenuItem, __assign({key: key}, props));
}
exports.renderMenuItem = renderMenuItem;
exports.MenuItemFactory = React.createFactory(MenuItem);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"../../common/position":11,"../popover/popover":41,"./menu":35,"classnames":65,"react":"react","react-dom":"react-dom"}],38:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var NonIdealState = (function (_super) {
    __extends(NonIdealState, _super);
    function NonIdealState() {
        _super.apply(this, arguments);
    }
    NonIdealState.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.NON_IDEAL_STATE, this.props.className)}, 
            this.maybeRenderVisual(), 
            this.maybeRenderTitle(), 
            this.maybeRenderDescription(), 
            this.maybeRenderAction()));
    };
    NonIdealState.prototype.maybeRenderAction = function () {
        if (this.props.action == null) {
            return undefined;
        }
        return React.createElement("div", {className: Classes.NON_IDEAL_STATE_ACTION}, this.props.action);
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        if (this.props.description == null) {
            return undefined;
        }
        return React.createElement("div", {className: Classes.NON_IDEAL_STATE_DESCRIPTION}, this.props.description);
    };
    NonIdealState.prototype.maybeRenderTitle = function () {
        if (this.props.title == null) {
            return undefined;
        }
        return React.createElement("h4", {className: Classes.NON_IDEAL_STATE_TITLE}, this.props.title);
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return undefined;
        }
        else if (typeof visual === "string") {
            return (React.createElement("div", {className: classNames(Classes.NON_IDEAL_STATE_VISUAL, Classes.NON_IDEAL_STATE_ICON)}, 
                React.createElement("span", {className: classNames("pt-icon", Classes.iconClass(visual))})
            ));
        }
        else {
            return (React.createElement("div", {className: Classes.NON_IDEAL_STATE_VISUAL}, visual));
        }
    };
    NonIdealState = __decorate([
        PureRender
    ], NonIdealState);
    return NonIdealState;
}(React.Component));
exports.NonIdealState = NonIdealState;
exports.NonIdealStateFactory = React.createFactory(NonIdealState);


},{"../../common/classes":4,"classnames":65,"pure-render-decorator":70,"react":"react"}],39:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var CSSTransitionGroup = require("react-addons-css-transition-group");
var Classes = require("../../common/classes");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
var portal_1 = require("../portal/portal");
var Overlay = (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.displayName = "Blueprint.Overlay";
        this.refHandlers = {
            container: function (ref) { return _this.containerElement = ref; },
        };
        this.bringFocusInsideOverlay = function () {
            var containerElement = _this.containerElement;
            // container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (containerElement == null || document.activeElement == null || !_this.props.isOpen) {
                return;
            }
            var isFocusOutsideModal = !containerElement.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // element marked autofocus has higher priority than the other clowns
                var autofocusElement = containerElement.query("[autofocus]");
                var wrapperElement = containerElement.query("[tabindex]");
                if (autofocusElement != null) {
                    autofocusElement.focus();
                }
                else if (wrapperElement != null) {
                    wrapperElement.focus();
                }
            }
        };
        this.handleBackdropMouseDown = function (e) {
            if (_this.props.canOutsideClickClose) {
                utils_1.safeInvoke(_this.props.onClose, e);
            }
            utils_1.safeInvoke(_this.props.backdropProps.onMouseDown, e);
        };
        this.handleDocumentClick = function (e) {
            var _a = _this.props, isOpen = _a.isOpen, onClose = _a.onClose;
            var eventTarget = e.target;
            var isClickInOverlay = _this.containerElement != null
                && _this.containerElement.contains(eventTarget);
            if (isOpen && _this.props.canOutsideClickClose && !isClickInOverlay) {
                // casting to any because this is a native event
                utils_1.safeInvoke(onClose, e);
            }
        };
        this.handleContentMount = function () {
            if (_this.props.isOpen) {
                utils_1.safeInvoke(_this.props.didOpen);
            }
            if (_this.props.autoFocus) {
                _this.bringFocusInsideOverlay();
            }
        };
        this.handleDocumentFocus = function (e) {
            if (_this.props.enforceFocus
                && _this.containerElement != null
                && !_this.containerElement.contains(e.target)) {
                e.stopImmediatePropagation();
                _this.bringFocusInsideOverlay();
            }
        };
        this.handleKeyDown = function (e) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (e.which === Keys.ESCAPE && canEscapeKeyClose) {
                utils_1.safeInvoke(onClose, e);
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        this.state = { hasEverOpened: props.isOpen };
    }
    Overlay.prototype.render = function () {
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, inline = _a.inline, isOpen = _a.isOpen, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        // add a special class to each child that will automatically set the appropriate
        // CSS position mode under the hood. also, make the container focusable so we can
        // trap focus inside it (via `persistentFocus()`).
        var decoratedChildren = React.Children.map(children, function (child) {
            return React.cloneElement(child, {
                className: classNames(child.props.className, Classes.OVERLAY_CONTENT),
                tabIndex: 0,
            });
        });
        var transitionGroup = (React.createElement(CSSTransitionGroup, {transitionAppear: true, transitionAppearTimeout: transitionDuration, transitionEnterTimeout: transitionDuration, transitionLeaveTimeout: transitionDuration, transitionName: transitionName}, 
            this.maybeRenderBackdrop(), 
            isOpen ? decoratedChildren : null));
        var mergedClassName = classNames(Classes.OVERLAY, (_b = {},
            _b[Classes.OVERLAY_OPEN] = isOpen,
            _b[Classes.OVERLAY_INLINE] = inline,
            _b
        ), className);
        var elementProps = {
            className: mergedClassName,
            onKeyDown: this.handleKeyDown,
        };
        if (inline) {
            return React.createElement("span", __assign({}, elementProps, {ref: this.refHandlers.container}), transitionGroup);
        }
        else {
            return (React.createElement(portal_1.Portal, __assign({}, elementProps, {containerRef: this.refHandlers.container, onChildrenMount: this.handleContentMount}), transitionGroup));
        }
        var _b;
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ hasEverOpened: this.state.hasEverOpened || nextProps.isOpen });
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    Overlay.prototype.maybeRenderBackdrop = function () {
        var _a = this.props, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen;
        if (hasBackdrop && isOpen) {
            return (React.createElement("div", __assign({}, backdropProps, {className: classNames(Classes.OVERLAY_BACKDROP, backdropClassName, backdropProps.className), onMouseDown: this.handleBackdropMouseDown, tabIndex: this.props.canOutsideClickClose ? 0 : null})));
        }
        else {
            return undefined;
        }
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        document.body.classList.remove(Classes.OVERLAY_OPEN);
        var openStack = Overlay.openStack;
        var idx = openStack.indexOf(this);
        if (idx > 0) {
            openStack.splice(idx, 1);
            var lastOpenedOverlay = Overlay.getLastOpened();
            if (openStack.length > 0 && lastOpenedOverlay.props.enforceFocus) {
                document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
            }
        }
    };
    Overlay.prototype.overlayWillOpen = function () {
        var openStack = Overlay.openStack;
        if (openStack.length > 0) {
            document.removeEventListener("focus", Overlay.getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.enforceFocus) {
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.inline) {
            utils_1.safeInvoke(this.props.didOpen);
            if (this.props.autoFocus) {
                this.bringFocusInsideOverlay();
            }
        }
        else if (this.props.hasBackdrop) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(Classes.OVERLAY_OPEN);
        }
    };
    Overlay.defaultProps = {
        autoFocus: true,
        backdropProps: {},
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        inline: false,
        isOpen: false,
        lazy: true,
        transitionDuration: 300,
        transitionName: "pt-overlay",
    };
    Overlay.openStack = [];
    Overlay.getLastOpened = function () { return Overlay.openStack[Overlay.openStack.length - 1]; };
    Overlay = __decorate([
        PureRender
    ], Overlay);
    return Overlay;
}(React.Component));
exports.Overlay = Overlay;
exports.OverlayFactory = React.createFactory(Overlay);


},{"../../common/classes":4,"../../common/keys":10,"../../common/utils":14,"../portal/portal":43,"classnames":65,"pure-render-decorator":70,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],40:[function(require,module,exports){
"use strict";
var position_1 = require("../../common/position");
// this value causes popover and target edges to line up on 50px targets
exports.MIN_ARROW_SPACING = 18;
function computeArrowOffset(sideLength, arrowSize, minimum) {
    if (minimum === void 0) { minimum = exports.MIN_ARROW_SPACING; }
    return Math.max(Math.round((sideLength - arrowSize) / 2), minimum);
}
exports.computeArrowOffset = computeArrowOffset;
function getPopoverTransformOrigin(position, arrowSize, targetDimensions) {
    var offsetX = computeArrowOffset(targetDimensions.width, arrowSize);
    var offsetY = computeArrowOffset(targetDimensions.height, arrowSize);
    switch (position) {
        case position_1.Position.TOP_LEFT:
            return offsetX + "px bottom";
        case position_1.Position.TOP_RIGHT:
            return "calc(100% - " + offsetX + "px) bottom";
        case position_1.Position.BOTTOM_LEFT:
            return offsetX + "px top";
        case position_1.Position.BOTTOM_RIGHT:
            return "calc(100% - " + offsetX + "px) top";
        case position_1.Position.LEFT_TOP:
            return "right " + offsetY + "px";
        case position_1.Position.LEFT_BOTTOM:
            return "right calc(100% - " + offsetY + "px)";
        case position_1.Position.RIGHT_TOP:
            return "left " + offsetY + "px";
        case position_1.Position.RIGHT_BOTTOM:
            return "left calc(100% - " + offsetY + "px)";
        default:
            return undefined;
    }
}
exports.getPopoverTransformOrigin = getPopoverTransformOrigin;
function getArrowPositionStyles(position, arrowSize, ignoreTargetDimensions, targetDimensions, inline) {
    // compute the offset to center an arrow with given hypotenuse in a side of the given length
    var popoverOffset = function (sideLength) {
        var offset = computeArrowOffset(sideLength, arrowSize, 0);
        return offset < exports.MIN_ARROW_SPACING ? exports.MIN_ARROW_SPACING - offset : 0;
    };
    var popoverOffsetX = popoverOffset(targetDimensions.width);
    var popoverOffsetY = popoverOffset(targetDimensions.height);
    // TOP, RIGHT, BOTTOM, LEFT are handled purely in CSS because of centering transforms
    switch (position) {
        case position_1.Position.TOP_LEFT:
        case position_1.Position.BOTTOM_LEFT:
            return {
                arrow: ignoreTargetDimensions ? {} : { left: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: -popoverOffsetX },
            };
        case position_1.Position.TOP_RIGHT:
        case position_1.Position.BOTTOM_RIGHT:
            return {
                arrow: ignoreTargetDimensions ? {} : { right: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: popoverOffsetX },
            };
        case position_1.Position.RIGHT_TOP:
        case position_1.Position.LEFT_TOP:
            return {
                arrow: ignoreTargetDimensions ? {} : { top: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { top: -popoverOffsetY } : { marginTop: -popoverOffsetY },
            };
        case position_1.Position.RIGHT_BOTTOM:
        case position_1.Position.LEFT_BOTTOM:
            return {
                arrow: ignoreTargetDimensions ? {} : { bottom: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { bottom: -popoverOffsetY } : { marginTop: popoverOffsetY },
            };
        default:
            return {};
    }
}
exports.getArrowPositionStyles = getArrowPositionStyles;


},{"../../common/position":11}],41:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var react_dom_1 = require("react-dom");
var Tether = require("tether");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var PosUtils = require("../../common/position");
var TetherUtils = require("../../common/tetherUtils");
var Utils = require("../../common/utils");
var overlay_1 = require("../overlay/overlay");
var tooltip_1 = require("../tooltip/tooltip");
var Arrows = require("./arrows");
var SVG_SHADOW_PATH = "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378" +
    "-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z";
var SVG_ARROW_PATH = "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005" +
    "c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z";
(function (PopoverInteractionKind) {
    PopoverInteractionKind[PopoverInteractionKind["CLICK"] = 0] = "CLICK";
    PopoverInteractionKind[PopoverInteractionKind["CLICK_TARGET_ONLY"] = 1] = "CLICK_TARGET_ONLY";
    PopoverInteractionKind[PopoverInteractionKind["HOVER"] = 2] = "HOVER";
    PopoverInteractionKind[PopoverInteractionKind["HOVER_TARGET_ONLY"] = 3] = "HOVER_TARGET_ONLY";
})(exports.PopoverInteractionKind || (exports.PopoverInteractionKind = {}));
var PopoverInteractionKind = exports.PopoverInteractionKind;
var Popover = (function (_super) {
    __extends(Popover, _super);
    function Popover(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.displayName = "Blueprint.Popover";
        this.hasDarkParent = false;
        // a flag that is set to true while we are waiting for the underlying Portal to complete rendering
        this.isContentMounting = false;
        this.refHandlers = {
            popover: function (ref) {
                _this.popoverElement = ref;
                _this.updateTether();
                _this.updateArrowPosition();
            },
            target: function (ref) {
                _this.targetElement = ref;
            },
        };
        this.handleContentMount = function () {
            if (Utils.isFunction(_this.props.popoverDidOpen) && _this.isContentMounting) {
                _this.props.popoverDidOpen();
                _this.isContentMounting = false;
            }
        };
        this.handleMouseEnter = function (e) {
            // if we're entering the popover, and the mode is set to be HOVER_TARGET_ONLY, we want to manually
            // trigger the mouse leave event, as hovering over the popover shouldn't count.
            if (_this.props.inline
                && _this.isElementInPopover(e.target)
                && _this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY) {
                _this.handleMouseLeave(e);
            }
            else if (!_this.props.isDisabled) {
                // only begin opening popover when it is enabled
                _this.setOpenState(true, e, _this.props.hoverOpenDelay);
            }
        };
        this.handleMouseLeave = function (e) {
            // user-configurable closing delay is helpful when moving mouse from target to popover
            _this.setOpenState(false, e, _this.props.hoverCloseDelay);
        };
        this.handlePopoverClick = function (e) {
            var eventTarget = e.target;
            var shouldDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS) != null;
            var overrideDismiss = eventTarget.closest("." + Classes.POPOVER_DISMISS_OVERRIDE) != null;
            if (shouldDismiss && !overrideDismiss) {
                _this.setOpenState(false, e);
            }
        };
        this.handleOverlayClose = function (e) {
            var eventTarget = e.target;
            // if click was in target, target event listener will handle things, so don't close
            if (!Utils.elementIsOrContains(_this.targetElement, eventTarget)
                || e.nativeEvent instanceof KeyboardEvent) {
                _this.setOpenState(false, e);
            }
        };
        this.handleTargetClick = function (e) {
            // ensure click did not originate from within inline popover before closing
            if (!_this.props.isDisabled && !_this.isElementInPopover(e.target)) {
                if (_this.props.isOpen == null) {
                    _this.setState(function (prevState) { return ({ isOpen: !prevState.isOpen }); });
                }
                else {
                    _this.setOpenState(!_this.props.isOpen, e);
                }
            }
        };
        var isOpen = props.defaultIsOpen;
        if (props.isOpen != null) {
            isOpen = props.isOpen;
        }
        this.state = {
            isOpen: isOpen,
            ignoreTargetDimensions: false,
            targetHeight: 0,
            targetWidth: 0,
        };
    }
    Popover.prototype.render = function () {
        var _a = this.props, className = _a.className, interactionKind = _a.interactionKind;
        var targetProps;
        if (interactionKind === PopoverInteractionKind.HOVER
            || interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY) {
            targetProps = {
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
        }
        else {
            targetProps = {
                onClick: this.handleTargetClick,
            };
        }
        targetProps.className = classNames(Classes.POPOVER_TARGET, (_b = {},
            _b[Classes.POPOVER_OPEN] = this.state.isOpen,
            _b
        ), className);
        targetProps.ref = this.refHandlers.target;
        var children = this.props.children;
        if (typeof this.props.children === "string") {
            // wrap text in a <span> so that we have a consistent way to interact with the target node(s)
            children = React.DOM.span({}, this.props.children);
        }
        else {
            var child = React.Children.only(this.props.children);
            // force disable single Tooltip child when popover is open (BLUEPRINT-552)
            if (this.state.isOpen && child.type === tooltip_1.Tooltip) {
                children = React.cloneElement(child, { isDisabled: true });
            }
        }
        return React.createElement(this.props.rootElementTag, targetProps, children, React.createElement(overlay_1.Overlay, {autoFocus: this.props.autoFocus, backdropClassName: Classes.POPOVER_BACKDROP, backdropProps: this.props.backdropProps, canEscapeKeyClose: this.props.canEscapeKeyClose, canOutsideClickClose: this.props.interactionKind === PopoverInteractionKind.CLICK, className: this.props.portalClassName, didOpen: this.handleContentMount, enforceFocus: this.props.enforceFocus, hasBackdrop: this.props.isModal, inline: this.props.inline, isOpen: this.state.isOpen, lazy: this.props.lazy, onClose: this.handleOverlayClose, transitionDuration: this.props.transitionDuration, transitionName: Classes.POPOVER}, this.renderPopover()));
        var _b;
    };
    Popover.prototype.componentDidMount = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        if (nextProps.isDisabled && !this.props.isDisabled) {
            // ok to use setOpenState here because isDisabled and isOpen are mutex.
            this.setOpenState(false);
        }
        else if (nextProps.isOpen !== this.props.isOpen) {
            // propagate isOpen prop directly to state, circumventing onInteraction callback
            // (which would be invoked if this went through setOpenState)
            this.setState({ isOpen: nextProps.isOpen });
        }
    };
    Popover.prototype.componentWillUpdate = function (_, nextState) {
        if (!this.state.isOpen && nextState.isOpen) {
            this.isContentMounting = true;
            Utils.safeInvoke(this.props.popoverWillOpen);
        }
        else if (this.state.isOpen && !nextState.isOpen) {
            Utils.safeInvoke(this.props.popoverWillClose);
        }
    };
    Popover.prototype.componentDidUpdate = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.destroyTether();
    };
    Popover.prototype.validateProps = function (props) {
        if (props.isOpen == null && props.onInteraction != null) {
            console.warn(Errors.POPOVER_UNCONTROLLED_ONINTERACTION);
        }
        if (props.isOpen != null && props.isDisabled) {
            throw new Error(Errors.POPOVER_CONTROLLED_DISABLED);
        }
        if (props.isModal && props.interactionKind !== PopoverInteractionKind.CLICK) {
            throw new Error(Errors.POPOVER_MODAL_INTERACTION);
        }
        if (props.isModal && props.inline) {
            throw new Error(Errors.POPOVER_MODAL_INLINE);
        }
        if (props.useSmartPositioning && props.inline) {
            throw new Error(Errors.POPOVER_SMART_POSITIONING_INLINE);
        }
        if (typeof props.children !== "string") {
            try {
                React.Children.only(props.children);
            }
            catch (e) {
                throw new Error(Errors.POPOVER_ONE_CHILD);
            }
        }
    };
    Popover.prototype.componentDOMChange = function () {
        this.setState({
            targetHeight: this.targetElement.clientHeight,
            targetWidth: this.targetElement.clientWidth,
        });
        if (!this.props.inline) {
            this.hasDarkParent = this.targetElement.closest("." + Classes.DARK) != null;
            this.updateTether();
        }
    };
    Popover.prototype.renderPopover = function () {
        var _a = this.props, inline = _a.inline, interactionKind = _a.interactionKind;
        var popoverHandlers = {
            // always check popover clicks for dismiss class
            onClick: this.handlePopoverClick,
        };
        if ((interactionKind === PopoverInteractionKind.HOVER)
            || (inline && interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY)) {
            popoverHandlers.onMouseEnter = this.handleMouseEnter;
            popoverHandlers.onMouseLeave = this.handleMouseLeave;
        }
        var positionClasses = TetherUtils.getAttachmentClasses(this.props.position).join(" ");
        var containerClasses = classNames(Classes.TRANSITION_CONTAINER, (_b = {}, _b[positionClasses] = inline, _b));
        var popoverClasses = classNames(Classes.POPOVER, (_c = {},
            _c[Classes.DARK] = this.props.inheritDarkTheme && this.hasDarkParent && !inline,
            _c
        ), this.props.popoverClassName);
        var styles = this.getArrowPositionStyles();
        var transform = { transformOrigin: this.getPopoverTransformOrigin() };
        return (React.createElement("div", {className: containerClasses, ref: this.refHandlers.popover, style: styles.container}, 
            React.createElement("div", __assign({className: popoverClasses, style: transform}, popoverHandlers), 
                React.createElement("div", {className: Classes.POPOVER_ARROW, style: styles.arrow}, 
                    React.createElement("svg", {viewBox: "0 0 30 30"}, 
                        React.createElement("path", {className: Classes.POPOVER_ARROW + "-border", d: SVG_SHADOW_PATH}), 
                        React.createElement("path", {className: Classes.POPOVER_ARROW + "-fill", d: SVG_ARROW_PATH}))
                ), 
                React.createElement("div", {className: Classes.POPOVER_CONTENT}, this.props.content))
        ));
        var _b, _c;
    };
    Popover.prototype.getArrowPositionStyles = function () {
        if (this.props.useSmartArrowPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return Arrows.getArrowPositionStyles(this.props.position, this.props.arrowSize, this.state.ignoreTargetDimensions, dimensions, this.props.inline);
        }
        else {
            return {};
        }
    };
    Popover.prototype.getPopoverTransformOrigin = function () {
        // if smart positioning is enabled then we must rely CSS classes to put transform origin
        // on the correct side and cannot override it in JS. (https://github.com/HubSpot/tether/issues/154)
        if (this.props.useSmartArrowPositioning && !this.props.useSmartPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return Arrows.getPopoverTransformOrigin(this.props.position, this.props.arrowSize, dimensions);
        }
        else {
            return undefined;
        }
    };
    Popover.prototype.updateArrowPosition = function () {
        if (this.popoverElement != null) {
            var arrow = this.popoverElement.getElementsByClassName(Classes.POPOVER_ARROW)[0];
            var centerWidth = (this.state.targetWidth + arrow.clientWidth) / 2;
            var centerHeight = (this.state.targetHeight + arrow.clientHeight) / 2;
            var ignoreWidth = centerWidth > this.popoverElement.clientWidth
                && PosUtils.isPositionHorizontal(this.props.position);
            var ignoreHeight = centerHeight > this.popoverElement.clientHeight
                && PosUtils.isPositionVertical(this.props.position);
            if (!this.state.ignoreTargetDimensions && (ignoreWidth || ignoreHeight)) {
                this.setState({ ignoreTargetDimensions: true });
            }
            else if (this.state.ignoreTargetDimensions && !ignoreWidth && !ignoreHeight) {
                this.setState({ ignoreTargetDimensions: false });
            }
        }
    };
    Popover.prototype.updateTether = function () {
        var _this = this;
        if (this.state.isOpen && !this.props.inline && this.popoverElement != null) {
            // the .pt-popover-target span we wrap the children in won't always be as big as its children
            // so instead, we'll position tether based off of its first child.
            // NOTE: use findDOMNode(this) directly because this.targetElement may not exist yet
            var target = react_dom_1.findDOMNode(this).childNodes[0];
            var tetherOptions = TetherUtils.createTetherOptions(this.popoverElement, target, this.props.position, this.props.useSmartPositioning, this.props.constraints);
            if (this.tether == null) {
                this.tether = new Tether(tetherOptions);
            }
            else {
                this.tether.setOptions(tetherOptions);
            }
            // if props.position has just changed, Tether unfortunately positions the popover based
            // on the margins from the previous position. delay a frame for styles to catch up.
            setTimeout(function () { return _this.tether.position(); });
        }
        else {
            this.destroyTether();
        }
    };
    Popover.prototype.destroyTether = function () {
        if (this.tether != null) {
            this.tether.destroy();
        }
    };
    // a wrapper around setState({isOpen}) that will call props.onInteraction instead when in controlled mode.
    // starts a timeout to delay changing the state if a non-zero duration is provided.
    Popover.prototype.setOpenState = function (isOpen, e, timeout) {
        var _this = this;
        // cancel any existing timeout because we have new state
        Utils.safeInvoke(this.cancelOpenTimeout);
        if (timeout > 0) {
            this.cancelOpenTimeout = this.setTimeout(function () { return _this.setOpenState(isOpen, e); }, timeout);
        }
        else {
            if (this.props.isOpen == null) {
                this.setState({ isOpen: isOpen });
            }
            else {
                Utils.safeInvoke(this.props.onInteraction, isOpen);
            }
            if (!isOpen) {
                Utils.safeInvoke(this.props.onClose, e);
            }
        }
    };
    Popover.prototype.isElementInPopover = function (element) {
        return this.popoverElement != null && this.popoverElement.contains(element);
    };
    Popover.defaultProps = {
        arrowSize: 30,
        className: "",
        content: React.createElement("span", null),
        defaultIsOpen: false,
        hoverCloseDelay: 300,
        hoverOpenDelay: 150,
        inheritDarkTheme: true,
        inline: false,
        interactionKind: PopoverInteractionKind.CLICK,
        isDisabled: false,
        isModal: false,
        popoverClassName: "",
        position: PosUtils.Position.RIGHT,
        rootElementTag: "span",
        transitionDuration: 300,
        useSmartArrowPositioning: true,
        useSmartPositioning: false,
    };
    Popover = __decorate([
        PureRender
    ], Popover);
    return Popover;
}(abstractComponent_1.AbstractComponent));
exports.Popover = Popover;
exports.PopoverFactory = React.createFactory(Popover);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"../../common/position":11,"../../common/tetherUtils":13,"../../common/utils":14,"../overlay/overlay":39,"../tooltip/tooltip":59,"./arrows":40,"classnames":65,"pure-render-decorator":70,"react":"react","react-dom":"react-dom","tether":71}],42:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var popover_1 = require("./popover");
var SVGPopover = (function (_super) {
    __extends(SVGPopover, _super);
    function SVGPopover() {
        _super.apply(this, arguments);
    }
    SVGPopover.prototype.render = function () {
        return React.createElement(popover_1.Popover, __assign({rootElementTag: "g"}, this.props), this.props.children);
    };
    return SVGPopover;
}(React.Component));
exports.SVGPopover = SVGPopover;
exports.SVGPopoverFactory = React.createFactory(SVGPopover);


},{"./popover":41,"react":"react"}],43:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var ReactDOM = require("react-dom");
var Classes = require("../../common/classes");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Portal";
    }
    Portal.prototype.render = function () {
        return null;
    };
    Portal.prototype.componentDidMount = function () {
        var targetElement = document.createElement("div");
        targetElement.classList.add(Classes.PORTAL);
        document.body.appendChild(targetElement);
        this.targetElement = targetElement;
        this.componentDidUpdate();
    };
    Portal.prototype.componentDidUpdate = function () {
        var _this = this;
        // use special render function to preserve React context, in case children need it
        ReactDOM.unstable_renderSubtreeIntoContainer(
        /* parentComponent */ this, React.createElement("div", __assign({}, props_1.removeNonHTMLProps(this.props), {ref: this.props.containerRef}), this.props.children), this.targetElement, function () { return utils_1.safeInvoke(_this.props.onChildrenMount); });
    };
    Portal.prototype.componentWillUnmount = function () {
        ReactDOM.unmountComponentAtNode(this.targetElement);
        this.targetElement.remove();
    };
    return Portal;
}(React.Component));
exports.Portal = Portal;


},{"../../common/classes":4,"../../common/props":12,"../../common/utils":14,"react":"react","react-dom":"react-dom"}],44:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        _super.apply(this, arguments);
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames("pt-progress-bar", Classes.intentClass(intent), className);
        // don't set width if value is null (rely on default CSS value)
        var width = (value == null ? null : 100 * utils_1.clamp(value, 0, 1) + "%");
        return (React.createElement("div", {className: classes}, 
            React.createElement("div", {className: "pt-progress-meter", style: { width: width }})
        ));
    };
    ProgressBar.displayName = "Blueprint.ProgressBar";
    ProgressBar = __decorate([
        PureRender
    ], ProgressBar);
    return ProgressBar;
}(React.Component));
exports.ProgressBar = ProgressBar;
exports.ProgressBarFactory = React.createFactory(ProgressBar);


},{"../../common/classes":4,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],45:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var CoreSlider = (function (_super) {
    __extends(CoreSlider, _super);
    function CoreSlider() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            tickSize: 0,
        };
        this.className = Classes.SLIDER;
        this.refHandlers = {
            track: function (el) { return _this.trackElement = el; },
        };
        this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + Classes.SLIDER_HANDLE) == null;
        };
    }
    CoreSlider.prototype.render = function () {
        var disabled = this.props.disabled;
        var classes = classNames(this.className, (_a = {},
            _a[Classes.DISABLED] = disabled,
            _a[Classes.SLIDER + "-unlabeled"] = this.props.renderLabel === false,
            _a
        ), this.props.className);
        return (React.createElement("div", {className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch}, 
            React.createElement("div", {className: Classes.SLIDER + "-track", ref: this.refHandlers.track}), 
            this.maybeRenderFill(), 
            this.maybeRenderAxis(), 
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var renderLabel = this.props.renderLabel;
        if (renderLabel === false) {
            return undefined;
        }
        else if (utils_1.isFunction(renderLabel)) {
            return renderLabel(value);
        }
        else {
            return value;
        }
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        var _a = this.props, max = _a.max, min = _a.min, labelStepSize = _a.labelStepSize;
        if (this.props.renderLabel === false) {
            return undefined;
        }
        var stepSize = Math.round(this.state.tickSize * labelStepSize);
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = min, left = 0; i < max || utils_1.approxEqual(i, max); i += labelStepSize, left += stepSize) {
            labels.push(React.createElement("div", {className: Classes.SLIDER + "-label", key: i, style: { left: left }}, this.formatLabel(i)));
        }
        return React.createElement("div", {className: Classes.SLIDER + "-axis"}, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var tickSize = this.trackElement.clientWidth / (this.props.max - this.props.min);
            this.setState({ tickSize: tickSize });
        }
    };
    CoreSlider = __decorate([
        PureRender
    ], CoreSlider);
    return CoreSlider;
}(abstractComponent_1.AbstractComponent));
exports.CoreSlider = CoreSlider;


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],46:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Keys = require("../../common/keys");
var utils_1 = require("../../common/utils");
// props that require number values, for validation
var NUMBER_PROPS = ["max", "min", "stepSize", "tickSize", "value"];
var Handle = (function (_super) {
    __extends(Handle, _super);
    function Handle() {
        var _this = this;
        _super.apply(this, arguments);
        this.displayName = "Blueprint.SliderHandle";
        this.state = {
            isMoving: false,
        };
        this.refHandlers = {
            handle: function (el) { return _this.handleElement = el; },
        };
        this.beginHandleMovement = function (event) {
            document.addEventListener("mousemove", _this.handleHandleMovement);
            document.addEventListener("mouseup", _this.endHandleMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(event.clientX));
        };
        this.beginHandleTouchMovement = function (event) {
            document.addEventListener("touchmove", _this.handleHandleTouchMovement);
            document.addEventListener("touchend", _this.endHandleTouchMovement);
            document.addEventListener("touchcancel", _this.endHandleTouchMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.touchEventClientX(event)));
        };
        this.endHandleMovement = function (event) {
            _this.handleMoveEndedAt(event.clientX);
        };
        this.endHandleTouchMovement = function (event) {
            _this.handleMoveEndedAt(_this.touchEventClientX(event));
        };
        this.handleMoveEndedAt = function (clientPixel) {
            _this.removeDocumentEventListeners();
            _this.setState({ isMoving: false });
            // not using changeValue because we want to invoke the handler regardless of current prop value
            var onRelease = _this.props.onRelease;
            var finalValue = _this.clamp(_this.clientToValue(clientPixel));
            utils_1.safeInvoke(onRelease, finalValue);
        };
        this.handleHandleMovement = function (event) {
            _this.handleMovedTo(event.clientX);
        };
        this.handleHandleTouchMovement = function (event) {
            _this.handleMovedTo(_this.touchEventClientX(event));
        };
        this.handleMovedTo = function (clientPixel) {
            if (_this.state.isMoving && !_this.props.disabled) {
                _this.changeValue(_this.clientToValue(clientPixel));
            }
        };
        this.handleKeyDown = function (event) {
            var _a = _this.props, stepSize = _a.stepSize, value = _a.value;
            var which = event.which;
            if (which === Keys.ARROW_DOWN || which === Keys.ARROW_LEFT) {
                _this.changeValue(value - stepSize);
                // this key event has been handled! prevent browser scroll on up/down
                event.preventDefault();
            }
            else if (which === Keys.ARROW_UP || which === Keys.ARROW_RIGHT) {
                _this.changeValue(value + stepSize);
                event.preventDefault();
            }
        };
        this.handleKeyUp = function (event) {
            if ([Keys.ARROW_UP, Keys.ARROW_DOWN, Keys.ARROW_LEFT, Keys.ARROW_RIGHT].indexOf(event.which) >= 0) {
                utils_1.safeInvoke(_this.props.onRelease, _this.props.value);
            }
        };
    }
    Handle.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, label = _a.label, min = _a.min, tickSize = _a.tickSize, value = _a.value;
        var isMoving = this.state.isMoving;
        // getBoundingClientRect().height includes border size as opposed to clientHeight
        var handleSize = (this.handleElement == null ? 0 : this.handleElement.getBoundingClientRect().height);
        return (React.createElement("span", {className: classNames(Classes.SLIDER_HANDLE, (_b = {}, _b[Classes.ACTIVE] = isMoving, _b), className), onKeyDown: disabled ? null : this.handleKeyDown, onKeyUp: disabled ? null : this.handleKeyUp, onMouseDown: disabled ? null : this.beginHandleMovement, onTouchStart: disabled ? null : this.beginHandleTouchMovement, ref: this.refHandlers.handle, style: { left: Math.round((value - min) * tickSize - handleSize / 2) }, tabIndex: 0}, label == null ? null : React.createElement("span", {className: Classes.SLIDER_LABEL}, label)));
        var _b;
    };
    Handle.prototype.componentWillUnmount = function () {
        this.removeDocumentEventListeners();
    };
    /** Convert client pixel to value between min and max. */
    Handle.prototype.clientToValue = function (clientPixel) {
        var _a = this.props, stepSize = _a.stepSize, tickSize = _a.tickSize, value = _a.value;
        if (this.handleElement == null) {
            return value;
        }
        var handleRect = this.handleElement.getBoundingClientRect();
        var handleCenterPixel = handleRect.left + handleRect.width / 2;
        var pixelDelta = clientPixel - handleCenterPixel;
        // convert pixels to range value in increments of `stepSize`
        var valueDelta = Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
        return value + valueDelta;
    };
    Handle.prototype.touchEventClientX = function (event) {
        return event.changedTouches[0].clientX;
    };
    Handle.prototype.validateProps = function (props) {
        for (var _i = 0, NUMBER_PROPS_1 = NUMBER_PROPS; _i < NUMBER_PROPS_1.length; _i++) {
            var prop = NUMBER_PROPS_1[_i];
            if (typeof props[prop] !== "number") {
                throw new Error("Handle requires number for " + prop + " prop");
            }
        }
    };
    /** Clamp value and invoke callback if it differs from current value */
    Handle.prototype.changeValue = function (newValue, callback) {
        if (callback === void 0) { callback = this.props.onChange; }
        newValue = this.clamp(newValue);
        if (!isNaN(newValue) && this.props.value !== newValue) {
            utils_1.safeInvoke(callback, newValue);
        }
    };
    /** Clamp value between min and max props */
    Handle.prototype.clamp = function (value) {
        return utils_1.clamp(value, this.props.min, this.props.max);
    };
    Handle.prototype.removeDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleHandleMovement);
        document.removeEventListener("mouseup", this.endHandleMovement);
        document.removeEventListener("touchmove", this.handleHandleTouchMovement);
        document.removeEventListener("touchend", this.endHandleTouchMovement);
        document.removeEventListener("touchcancel", this.endHandleTouchMovement);
    };
    Handle = __decorate([
        PureRender
    ], Handle);
    return Handle;
}(abstractComponent_1.AbstractComponent));
exports.Handle = Handle;


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/keys":10,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],47:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var utils_1 = require("../../common/utils");
var coreSlider_1 = require("./coreSlider");
var handle_1 = require("./handle");
var RangeEnd;
(function (RangeEnd) {
    RangeEnd[RangeEnd["LEFT"] = 0] = "LEFT";
    RangeEnd[RangeEnd["RIGHT"] = 1] = "RIGHT";
})(RangeEnd || (RangeEnd = {}));
var RangeSlider = (function (_super) {
    __extends(RangeSlider, _super);
    function RangeSlider() {
        var _this = this;
        _super.apply(this, arguments);
        this.displayName = "Blueprint.RangeSlider";
        this.className = classNames(Classes.SLIDER, Classes.RANGE_SLIDER);
        this.handles = [];
        this.addHandleRef = function (ref) {
            if (ref != null) {
                _this.handles.push(ref);
            }
        };
        this.getHandlerForIndex = function (index, callback) { return function (newValue) {
            if (utils_1.isFunction(callback)) {
                var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
                if (index === RangeEnd.LEFT) {
                    callback([Math.min(newValue, rightValue), rightValue]);
                }
                else {
                    callback([leftValue, Math.max(newValue, leftValue)]);
                }
            }
        }; };
        this.handleChange = function (newValue) {
            var _a = _this.props.value, leftValue = _a[0], rightValue = _a[1];
            var newLeftValue = newValue[0], newRightValue = newValue[1];
            if ((leftValue !== newLeftValue || rightValue !== newRightValue) && utils_1.isFunction(_this.props.onChange)) {
                _this.props.onChange(newValue);
            }
        };
    }
    RangeSlider.prototype.renderFill = function () {
        var _a = this.props.value, leftValue = _a[0], rightValue = _a[1];
        if (leftValue === rightValue) {
            return undefined;
        }
        // expand by 1px in each direction so it sits under the handle border
        var left = Math.round((leftValue - this.props.min) * this.state.tickSize) - 1;
        var width = Math.round((rightValue - leftValue) * this.state.tickSize) + 2;
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", {className: Classes.SLIDER + "-progress", style: { left: left, width: width }});
    };
    RangeSlider.prototype.renderHandles = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, max = _a.max, min = _a.min, onRelease = _a.onRelease, stepSize = _a.stepSize, value = _a.value;
        return value.map(function (val, index) { return (React.createElement(handle_1.Handle, {disabled: disabled, key: index, label: _this.formatLabel(val), max: max, min: min, onChange: _this.getHandlerForIndex(index, _this.handleChange), onRelease: _this.getHandlerForIndex(index, onRelease), ref: _this.addHandleRef, stepSize: stepSize, tickSize: _this.state.tickSize, value: val})); });
    };
    RangeSlider.prototype.handleTrackClick = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the mouse position
            var value = handle.clientToValue(event.clientX);
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleMovement(event);
    };
    RangeSlider.prototype.handleTrackTouch = function (event) {
        var _this = this;
        this.handles.reduce(function (min, handle) {
            // find closest handle to the touch position
            var value = handle.clientToValue(handle.touchEventClientX(event));
            return _this.nearestHandleForValue(value, min, handle);
        }).beginHandleTouchMovement(event);
    };
    RangeSlider.prototype.nearestHandleForValue = function (value, firstHandle, secondHandle) {
        var firstDistance = Math.abs(value - firstHandle.props.value);
        var secondDistance = Math.abs(value - secondHandle.props.value);
        return secondDistance < firstDistance ? secondHandle : firstHandle;
    };
    RangeSlider.prototype.validateProps = function (props) {
        var value = props.value;
        if (value == null || value[RangeEnd.LEFT] == null || value[RangeEnd.RIGHT] == null) {
            throw new Error(Errors.RANGESLIDER_NULL_VALUE);
        }
    };
    RangeSlider.defaultProps = {
        disabled: false,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: [0, 10],
    };
    return RangeSlider;
}(coreSlider_1.CoreSlider));
exports.RangeSlider = RangeSlider;
exports.RangeSliderFactory = React.createFactory(RangeSlider);


},{"../../common/classes":4,"../../common/errors":6,"../../common/utils":14,"./coreSlider":45,"./handle":46,"classnames":65,"react":"react"}],48:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var coreSlider_1 = require("./coreSlider");
var handle_1 = require("./handle");
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleHandleRef = function (ref) {
            _this.handle = ref;
        };
    }
    Slider.prototype.renderFill = function () {
        var initialValue = utils_1.clamp(this.props.initialValue, this.props.min, this.props.max);
        var left = Math.round((initialValue - this.props.min) * this.state.tickSize);
        var width = Math.round((this.props.value - initialValue) * this.state.tickSize);
        if (width < 0) {
            left += width;
            width = Math.abs(width);
        }
        return React.createElement("div", {className: Classes.SLIDER + "-progress", style: { left: left, width: width }});
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (React.createElement(handle_1.Handle, __assign({}, this.props, this.state, {className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef})));
    };
    Slider.prototype.handleTrackClick = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleMovement(event);
        }
    };
    Slider.prototype.handleTrackTouch = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleTouchMovement(event);
        }
    };
    Slider.defaultProps = {
        disabled: false,
        initialValue: 0,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: 0,
    };
    return Slider;
}(coreSlider_1.CoreSlider));
exports.Slider = Slider;
exports.SliderFactory = React.createFactory(Slider);


},{"../../common/classes":4,"../../common/utils":14,"./coreSlider":45,"./handle":46,"react":"react"}],49:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
var SPINNER_TRACK = "M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89";
// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
var PATH_LENGTH = 280;
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        _super.apply(this, arguments);
    }
    Spinner.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = classNames(Classes.SPINNER, Classes.intentClass(intent), {
            "pt-no-spin": value != null,
        }, className);
        var style = {
            strokeDasharray: PATH_LENGTH + " " + PATH_LENGTH,
            // default to quarter-circle when indeterminate
            // IE11: CSS transitions on SVG elements are Not Supported :(
            strokeDashoffset: PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : utils_1.clamp(value, 0, 1)),
        };
        // HACKHACK to temporarily squash error regarding React.SVGProps missing prop pathLength
        var headElement = React.createElement("path", {
            className: "pt-spinner-head",
            d: SPINNER_TRACK,
            pathLength: PATH_LENGTH,
            style: style,
        });
        return this.renderContainer(classes, React.createElement("svg", {viewBox: classes.indexOf(Classes.SMALL) >= 0 ? "-15 -15 130 130" : "0 0 100 100"}, 
            React.createElement("path", {className: "pt-spinner-track", d: SPINNER_TRACK}), 
            headElement));
    };
    // abstract away the container elements so SVGSpinner can do its own thing
    Spinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("div", {className: classes}, 
            React.createElement("div", {className: "pt-spinner-svg-container"}, content)
        ));
    };
    Spinner.displayName = "Blueprint.Spinner";
    Spinner = __decorate([
        PureRender
    ], Spinner);
    return Spinner;
}(React.Component));
exports.Spinner = Spinner;
exports.SpinnerFactory = React.createFactory(Spinner);


},{"../../common/classes":4,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],50:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
// import * to avoid "cannot be named" error on factory
var spinner = require("./spinner");
var SVGSpinner = (function (_super) {
    __extends(SVGSpinner, _super);
    function SVGSpinner() {
        _super.apply(this, arguments);
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        return (React.createElement("g", {className: classNames(Classes.SVG_SPINNER, classes)}, 
            React.createElement("g", {className: "pt-svg-spinner-transform-group"}, content)
        ));
    };
    return SVGSpinner;
}(spinner.Spinner));
exports.SVGSpinner = SVGSpinner;
exports.SVGSpinnerFactory = React.createFactory(SVGSpinner);


},{"../../common/classes":4,"./spinner":49,"classnames":65,"react":"react"}],51:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Tab";
    }
    Tab.prototype.render = function () {
        return (React.createElement("li", {"aria-controls": this.props.panelId, "aria-disabled": this.props.isDisabled, "aria-expanded": this.props.isSelected, "aria-selected": this.props.isSelected, className: classNames(Classes.TAB, this.props.className), id: this.props.id, role: "tab", selected: this.props.isSelected ? true : null, tabIndex: this.props.isDisabled ? null : 0}, this.props.children));
    };
    Tab.defaultProps = {
        isDisabled: false,
        isSelected: false,
    };
    Tab = __decorate([
        PureRender
    ], Tab);
    return Tab;
}(React.Component));
exports.Tab = Tab;
exports.TabFactory = React.createFactory(Tab);


},{"../../common/classes":4,"classnames":65,"pure-render-decorator":70,"react":"react"}],52:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var TabList = (function (_super) {
    __extends(TabList, _super);
    function TabList() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.TabList";
        this.state = {
            shouldAnimate: false,
        };
    }
    TabList.prototype.render = function () {
        return (React.createElement("ul", {className: classNames(Classes.TAB_LIST, this.props.className), role: "tablist"}, 
            React.createElement("div", {className: classNames("pt-tab-indicator-wrapper", { "pt-no-animation": !this.state.shouldAnimate }), style: this.props.indicatorWrapperStyle}, 
                React.createElement("div", {className: "pt-tab-indicator"})
            ), 
            this.props.children));
    };
    TabList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.indicatorWrapperStyle == null) {
            this.setTimeout(function () { return _this.setState({ shouldAnimate: true }); });
        }
    };
    TabList = __decorate([
        PureRender
    ], TabList);
    return TabList;
}(abstractComponent_1.AbstractComponent));
exports.TabList = TabList;
exports.TabListFactory = React.createFactory(TabList);


},{"../../common/abstractComponent":3,"../../common/classes":4,"classnames":65,"pure-render-decorator":70,"react":"react"}],53:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var TabPanel = (function (_super) {
    __extends(TabPanel, _super);
    function TabPanel() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.TabPanel";
    }
    TabPanel.prototype.render = function () {
        return (React.createElement("div", {"aria-labelledby": this.props._tabId, className: classNames(Classes.TAB_PANEL, this.props.className), id: this.props._id, role: "tabpanel"}, this.props.children));
    };
    TabPanel = __decorate([
        PureRender
    ], TabPanel);
    return TabPanel;
}(React.Component));
exports.TabPanel = TabPanel;
exports.TabPanelFactory = React.createFactory(TabPanel);


},{"../../common/classes":4,"classnames":65,"pure-render-decorator":70,"react":"react"}],54:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var react_dom_1 = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var Errors = require("../../common/errors");
var Keys = require("../../common/keys");
var Utils = require("../../common/utils");
var tab_1 = require("./tab");
var tabList_1 = require("./tabList");
var tabPanel_1 = require("./tabPanel");
var TAB_CSS_SELECTOR = "li[role=tab]";
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.displayName = "Blueprint.Tabs";
        // state is initialized in the constructor but getStateFromProps needs state defined
        this.state = {};
        this.panelIds = [];
        this.tabIds = [];
        this.handleClick = function (e) {
            _this.handleTabSelectingEvent(e);
        };
        this.handleKeyPress = function (e) {
            var insideTab = e.target.closest("." + Classes.TAB) != null;
            if (insideTab && (e.which === Keys.SPACE || e.which === Keys.ENTER)) {
                e.preventDefault();
                _this.handleTabSelectingEvent(e);
            }
        };
        this.handleKeyDown = function (e) {
            // don't want to handle keyDown events inside a tab panel
            var insideTabList = e.target.closest("." + Classes.TAB_LIST) != null;
            if (!insideTabList) {
                return;
            }
            var focusedTabIndex = _this.getFocusedTabIndex();
            if (focusedTabIndex === -1) {
                return;
            }
            if (e.which === Keys.ARROW_LEFT) {
                e.preventDefault();
                // find previous tab that isn't disabled
                var newTabIndex = focusedTabIndex - 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== -1) {
                    newTabIndex--;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== -1) {
                    _this.focusTab(newTabIndex);
                }
            }
            else if (e.which === Keys.ARROW_RIGHT) {
                e.preventDefault();
                // find next tab that isn't disabled
                var tabsCount = _this.getTabsCount();
                var newTabIndex = focusedTabIndex + 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== tabsCount) {
                    newTabIndex++;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== tabsCount) {
                    _this.focusTab(newTabIndex);
                }
            }
        };
        this.handleTabSelectingEvent = function (e) {
            var tabElement = e.target.closest(TAB_CSS_SELECTOR);
            // select only if Tab is one of us and is enabled
            if (tabElement != null
                && _this.tabIds.indexOf(tabElement.id) >= 0
                && tabElement.getAttribute("aria-disabled") !== "true") {
                var index = tabElement.parentElement.queryAll(TAB_CSS_SELECTOR).indexOf(tabElement);
                _this.setSelectedTabIndex(index);
            }
        };
        this.state = this.getStateFromProps(this.props);
    }
    Tabs.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.TABS, this.props.className), onClick: this.handleClick, onKeyPress: this.handleKeyPress, onKeyDown: this.handleKeyDown}, this.getChildren()));
    };
    Tabs.prototype.componentWillReceiveProps = function (newProps) {
        var newState = this.getStateFromProps(newProps);
        var newIndex = newState.selectedTabIndex;
        if (newIndex !== this.state.selectedTabIndex) {
            this.setSelectedTabIndex(newIndex);
        }
        this.setState(newState);
    };
    Tabs.prototype.componentDidMount = function () {
        var _this = this;
        var selectedTab = react_dom_1.findDOMNode(this.refs[("tabs-" + this.state.selectedTabIndex)]);
        this.setTimeout(function () { return _this.moveIndicator(selectedTab); });
    };
    Tabs.prototype.componentDidUpdate = function (_, prevState) {
        var _this = this;
        var newIndex = this.state.selectedTabIndex;
        if (newIndex !== prevState.selectedTabIndex) {
            var tabElement_1 = react_dom_1.findDOMNode(this.refs[("tabs-" + newIndex)]);
            // need to measure on the next frame in case the Tab children simultaneously change
            this.setTimeout(function () { return _this.moveIndicator(tabElement_1); });
        }
    };
    Tabs.prototype.validateProps = function (props) {
        if (React.Children.count(props.children) > 0) {
            var child = React.Children.toArray(props.children)[0];
            if (child != null && child.type !== tabList_1.TabList) {
                throw new Error(Errors.TABS_FIRST_CHILD);
            }
            if (this.getTabsCount() !== this.getPanelsCount()) {
                throw new Error(Errors.TABS_MISMATCH);
            }
        }
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveIndicator = function (_a) {
        var clientHeight = _a.clientHeight, clientWidth = _a.clientWidth, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
        var indicatorWrapperStyle = {
            height: clientHeight,
            transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
            width: clientWidth,
        };
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /**
     * Most of the component logic lives here. We clone the children provided by the user to set up refs,
     * accessibility attributes, and selection props correctly.
     */
    Tabs.prototype.getChildren = function () {
        var _this = this;
        for (var unassignedTabs = this.getTabsCount() - this.tabIds.length; unassignedTabs > 0; unassignedTabs--) {
            this.tabIds.push(generateTabId());
            this.panelIds.push(generatePanelId());
        }
        var childIndex = 0;
        return React.Children.map(this.props.children, function (child) {
            var result;
            // can be null if conditionally rendering TabList / TabPanel
            if (child == null) {
                return null;
            }
            if (childIndex === 0) {
                // clone TabList / Tab elements
                result = _this.cloneTabList(child);
            }
            else {
                var tabPanelIndex = childIndex - 1;
                var shouldRenderTabPanel = _this.state.selectedTabIndex === tabPanelIndex;
                result = shouldRenderTabPanel ? _this.cloneTabPanel(child, tabPanelIndex) : null;
            }
            childIndex++;
            return result;
        });
    };
    Tabs.prototype.cloneTabList = function (child) {
        var _this = this;
        var tabIndex = 0;
        var tabs = React.Children.map(child.props.children, function (tab) {
            // can be null if conditionally rendering Tab
            if (tab == null) {
                return null;
            }
            var clonedTab = React.cloneElement(tab, {
                id: _this.tabIds[tabIndex],
                isSelected: _this.state.selectedTabIndex === tabIndex,
                panelId: _this.panelIds[tabIndex],
                ref: "tabs-" + tabIndex,
            });
            tabIndex++;
            return clonedTab;
        });
        return React.cloneElement(child, {
            children: tabs,
            indicatorWrapperStyle: this.state.indicatorWrapperStyle,
            ref: "tablist",
        });
    };
    Tabs.prototype.cloneTabPanel = function (child, tabIndex) {
        return React.cloneElement(child, {
            id: this.panelIds[tabIndex],
            isSelected: this.state.selectedTabIndex === tabIndex,
            ref: "panels-" + tabIndex,
            tabId: this.tabIds[tabIndex],
        });
    };
    Tabs.prototype.focusTab = function (index) {
        var ref = "tabs-" + index;
        var tab = react_dom_1.findDOMNode(this.refs[ref]);
        tab.focus();
    };
    Tabs.prototype.getFocusedTabIndex = function () {
        var focusedElement = document.activeElement;
        if (focusedElement != null && focusedElement.classList.contains(Classes.TAB)) {
            var tabId = focusedElement.id;
            return this.tabIds.indexOf(tabId);
        }
        return -1;
    };
    Tabs.prototype.getTabs = function () {
        if (this.props.children == null) {
            return [];
        }
        var tabs = [];
        if (React.Children.count(this.props.children) > 0) {
            var firstChild = React.Children.toArray(this.props.children)[0];
            if (firstChild != null) {
                React.Children.forEach(firstChild.props.children, function (tabListChild) {
                    if (tabListChild.type === tab_1.Tab) {
                        tabs.push(tabListChild);
                    }
                });
            }
        }
        return tabs;
    };
    Tabs.prototype.getTabsCount = function () {
        return this.getTabs().length;
    };
    Tabs.prototype.getPanelsCount = function () {
        if (this.props.children == null) {
            return 0;
        }
        var index = 0;
        var panelCount = 0;
        React.Children.forEach(this.props.children, function (child) {
            if (child.type === tabPanel_1.TabPanel) {
                panelCount++;
            }
            index++;
        });
        return panelCount;
    };
    Tabs.prototype.getStateFromProps = function (props) {
        var selectedTabIndex = props.selectedTabIndex, initialSelectedTabIndex = props.initialSelectedTabIndex;
        if (this.isValidTabIndex(selectedTabIndex)) {
            return { selectedTabIndex: selectedTabIndex };
        }
        else if (this.isValidTabIndex(initialSelectedTabIndex) && this.state.selectedTabIndex == null) {
            return { selectedTabIndex: initialSelectedTabIndex };
        }
        else {
            return this.state;
        }
    };
    Tabs.prototype.isTabDisabled = function (index) {
        var tab = this.getTabs()[index];
        return tab != null && tab.props.isDisabled;
    };
    Tabs.prototype.isValidTabIndex = function (index) {
        return index != null && index >= 0 && index < this.getTabsCount();
    };
    /**
     * Updates the component's state if uncontrolled and calls onChange.
     */
    Tabs.prototype.setSelectedTabIndex = function (index) {
        if (index === this.state.selectedTabIndex || !this.isValidTabIndex(index)) {
            return;
        }
        var prevSelectedIndex = this.state.selectedTabIndex;
        if (this.props.selectedTabIndex == null) {
            this.setState({
                selectedTabIndex: index,
            });
        }
        if (Utils.isFunction(this.props.onChange)) {
            this.props.onChange(index, prevSelectedIndex);
        }
    };
    Tabs.defaultProps = {
        initialSelectedTabIndex: 0,
    };
    Tabs = __decorate([
        PureRender
    ], Tabs);
    return Tabs;
}(abstractComponent_1.AbstractComponent));
exports.Tabs = Tabs;
var tabCount = 0;
function generateTabId() {
    return "pt-tab-" + tabCount++;
}
var panelCount = 0;
function generatePanelId() {
    return "pt-tab-panel-" + panelCount++;
}
exports.TabsFactory = React.createFactory(Tabs);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"../../common/keys":10,"../../common/utils":14,"./tab":51,"./tabList":52,"./tabPanel":53,"classnames":65,"pure-render-decorator":70,"react":"react","react-dom":"react-dom"}],55:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var Classes = require("../../common/classes");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Tag";
    }
    Tag.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, onRemove = _a.onRemove;
        var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_b = {},
            _b[Classes.TAG_REMOVABLE] = onRemove != null,
            _b
        ), className);
        return (React.createElement("span", __assign({}, props_1.removeNonHTMLProps(this.props), {className: tagClasses}), 
            this.props.children, 
            utils_1.isFunction(onRemove) ? React.createElement("button", {className: Classes.TAG_REMOVE, onClick: onRemove}) : null));
        var _b;
    };
    Tag = __decorate([
        PureRender
    ], Tag);
    return Tag;
}(React.Component));
exports.Tag = Tag;
exports.TagFactory = React.createFactory(Tag);


},{"../../common/classes":4,"../../common/props":12,"../../common/utils":14,"classnames":65,"pure-render-decorator":70,"react":"react"}],56:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var buttons_1 = require("../button/buttons");
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = this;
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Toast";
        this.handleActionClick = function (e) {
            utils_1.safeInvoke(_this.props.action.onClick, e);
            _this.triggerDismiss(false);
        };
        this.handleCloseClick = function () { return _this.triggerDismiss(false); };
        this.startTimeout = function () {
            if (_this.props.timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, _this.props.timeout);
            }
        };
    }
    Toast.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, message = _a.message;
        return (React.createElement("div", {className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout}, 
            this.maybeRenderIcon(), 
            React.createElement("span", {className: Classes.TOAST_MESSAGE}, message), 
            React.createElement("div", {className: classNames(Classes.BUTTON_GROUP, Classes.MINIMAL)}, 
                this.maybeRenderActionButton(), 
                React.createElement(buttons_1.Button, {iconName: "cross", onClick: this.handleCloseClick}))));
    };
    Toast.prototype.componentDidMount = function () {
        this.startTimeout();
    };
    Toast.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeout <= 0 && this.props.timeout > 0) {
            this.startTimeout();
        }
        else if (prevProps.timeout > 0 && this.props.timeout <= 0) {
            this.clearTimeouts();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    Toast.prototype.maybeRenderActionButton = function () {
        var action = this.props.action;
        return action == null ? undefined : React.createElement(buttons_1.Button, __assign({}, action, {intent: null, onClick: this.handleActionClick}));
    };
    Toast.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName == null) {
            return undefined;
        }
        else {
            return React.createElement("span", {className: classNames(Classes.ICON_STANDARD, Classes.iconClass(iconName))});
        }
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        utils_1.safeInvoke(this.props.onDismiss, didTimeoutExpire);
        this.clearTimeouts();
    };
    Toast.defaultProps = {
        className: "",
        message: "",
        timeout: 5000,
    };
    Toast = __decorate([
        PureRender
    ], Toast);
    return Toast;
}(abstractComponent_1.AbstractComponent));
exports.Toast = Toast;
exports.ToastFactory = React.createFactory(Toast);


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/utils":14,"../button/buttons":17,"classnames":65,"pure-render-decorator":70,"react":"react"}],57:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var ReactDOM = require("react-dom");
var abstractComponent_1 = require("../../common/abstractComponent");
var Classes = require("../../common/classes");
var errors_1 = require("../../common/errors");
var keys_1 = require("../../common/keys");
var position_1 = require("../../common/position");
var utils_1 = require("../../common/utils");
var overlay_1 = require("../overlay/overlay");
var toast_1 = require("./toast");
var Toaster = (function (_super) {
    __extends(Toaster, _super);
    function Toaster() {
        var _this = this;
        _super.apply(this, arguments);
        this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        this.toastId = 0;
        this.getDismissHandler = function (toast) { return function (timeoutExpired) {
            _this.dismiss(toast.key, timeoutExpired);
        }; };
        this.handleClose = function (e) {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            if (e.which === keys_1.ESCAPE) {
                _this.clear();
            }
        };
    }
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    Toaster.create = function (props, container) {
        if (container === void 0) { container = document.body; }
        if (props != null && props.inline != null) {
            console.warn(errors_1.TOASTER_INLINE_WARNING);
        }
        var containerElement = document.createElement("div");
        container.appendChild(containerElement);
        return ReactDOM.render(React.createElement(Toaster, __assign({}, props, {inline: true})), containerElement);
    };
    Toaster.prototype.show = function (props) {
        var options = this.createToastOptions(props);
        this.setState(function (prevState) { return ({
            toasts: [options].concat(prevState.toasts),
        }); });
        return options.key;
    };
    Toaster.prototype.update = function (key, props) {
        var options = this.createToastOptions(props, key);
        this.setState(function (prevState) { return ({
            toasts: prevState.toasts.map(function (t) { return t.key === key ? options : t; }),
        }); });
    };
    Toaster.prototype.dismiss = function (key, timeoutExpired) {
        if (timeoutExpired === void 0) { timeoutExpired = false; }
        this.setState(function (_a) {
            var toasts = _a.toasts;
            return ({
                toasts: toasts.filter(function (t) {
                    var matchesKey = t.key === key;
                    if (matchesKey) {
                        utils_1.safeInvoke(t.onDismiss, timeoutExpired);
                    }
                    return !matchesKey;
                }),
            });
        });
    };
    Toaster.prototype.clear = function () {
        this.state.toasts.map(function (t) { return utils_1.safeInvoke(t.onDismiss, false); });
        this.setState({ toasts: [] });
    };
    Toaster.prototype.getToasts = function () {
        return this.state.toasts;
    };
    Toaster.prototype.render = function () {
        // $pt-transition-duration * 3 + $pt-transition-duration / 2
        var classes = classNames(Classes.TOAST_CONTAINER, this.getPositionClasses(), this.props.className);
        return (React.createElement(overlay_1.Overlay, {autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, inline: this.props.inline, isOpen: this.state.toasts.length > 0, onClose: this.handleClose, transitionDuration: 350, transitionName: "pt-toast"}, this.state.toasts.map(this.renderToast, this)));
    };
    Toaster.prototype.validateProps = function (props) {
        if (props.position === position_1.Position.LEFT || props.position === position_1.Position.RIGHT) {
            throw new Error("Toaster does not support LEFT or RIGHT positions.");
        }
    };
    Toaster.prototype.renderToast = function (toast) {
        return React.createElement(toast_1.Toast, __assign({}, toast, {onDismiss: this.getDismissHandler(toast)}));
    };
    Toaster.prototype.createToastOptions = function (props, key) {
        if (key === void 0) { key = "toast-" + this.toastId++; }
        // clone the object before adding the key prop to avoid leaking the mutation
        var options = utils_1.shallowClone(props);
        options.key = key;
        return options;
    };
    Toaster.prototype.getPositionClasses = function () {
        var positions = position_1.Position[this.props.position].split("_");
        // NOTE that there is no -center class because that's the default style
        return positions.map(function (p) { return (Classes.TOAST_CONTAINER + "-" + p.toLowerCase()); });
    };
    Toaster.defaultProps = {
        autoFocus: false,
        canEscapeKeyClear: true,
        inline: false,
        position: position_1.Position.TOP,
    };
    Toaster = __decorate([
        PureRender
    ], Toaster);
    return Toaster;
}(abstractComponent_1.AbstractComponent));
exports.Toaster = Toaster;


},{"../../common/abstractComponent":3,"../../common/classes":4,"../../common/errors":6,"../../common/keys":10,"../../common/position":11,"../../common/utils":14,"../overlay/overlay":39,"./toast":56,"classnames":65,"pure-render-decorator":70,"react":"react","react-dom":"react-dom"}],58:[function(require,module,exports){
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var tooltip_1 = require("./tooltip");
var SVGTooltip = (function (_super) {
    __extends(SVGTooltip, _super);
    function SVGTooltip() {
        _super.apply(this, arguments);
    }
    SVGTooltip.prototype.render = function () {
        return React.createElement(tooltip_1.Tooltip, __assign({rootElementTag: "g"}, this.props), this.props.children);
    };
    return SVGTooltip;
}(React.Component));
exports.SVGTooltip = SVGTooltip;
exports.SVGTooltipFactory = React.createFactory(SVGTooltip);


},{"./tooltip":59,"react":"react"}],59:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classNames = require("classnames");
var PureRender = require("pure-render-decorator");
var React = require("react");
var Classes = require("../../common/classes");
var position_1 = require("../../common/position");
var popover_1 = require("../popover/popover");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        _super.apply(this, arguments);
        this.displayName = "Blueprint.Tooltip";
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, intent = _a.intent, tooltipClassName = _a.tooltipClassName;
        var classes = classNames(Classes.TOOLTIP, Classes.intentClass(intent), tooltipClassName);
        return (React.createElement(popover_1.Popover, __assign({}, this.props, {arrowSize: 22, autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, interactionKind: popover_1.PopoverInteractionKind.HOVER_TARGET_ONLY, lazy: true, popoverClassName: classes, transitionDuration: 200}), children));
    };
    Tooltip.defaultProps = {
        className: "",
        content: "",
        hoverCloseDelay: 0,
        hoverOpenDelay: 150,
        isDisabled: false,
        position: position_1.Position.TOP,
        rootElementTag: "span",
        tooltipClassName: "",
        transitionDuration: 100,
        useSmartArrowPositioning: true,
        useSmartPositioning: false,
    };
    Tooltip = __decorate([
        PureRender
    ], Tooltip);
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
exports.TooltipFactory = React.createFactory(Tooltip);


},{"../../common/classes":4,"../../common/position":11,"../popover/popover":41,"classnames":65,"pure-render-decorator":70,"react":"react"}],60:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var treeNode_1 = require("./treeNode");
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleNodeCollapse = function (node, e) {
            _this.handlerHelper(_this.props.onNodeCollapse, node, e);
        };
        this.handleNodeClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeClick, node, e);
        };
        this.handleNodeDoubleClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeDoubleClick, node, e);
        };
        this.handleNodeExpand = function (node, e) {
            _this.handlerHelper(_this.props.onNodeExpand, node, e);
        };
    }
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (React.createElement("div", {className: classNames(Classes.TREE, this.props.className)}, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            return (React.createElement(treeNode_1.TreeNode, __assign({}, node, {key: node.id, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, path: elementPath}), _this.renderNodes(node.childNodes, elementPath)));
        });
        return (React.createElement("ul", {className: classNames(Classes.TREE_NODE_LIST, className)}, nodeItems));
    };
    Tree.prototype.handlerHelper = function (handlerFromProps, node, e) {
        if (utils_1.isFunction(handlerFromProps)) {
            var nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    };
    return Tree;
}(React.Component));
exports.Tree = Tree;
exports.TreeFactory = React.createFactory(Tree);


},{"../../common/classes":4,"../../common/utils":14,"./treeNode":61,"classnames":65,"react":"react"}],61:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var classNames = require("classnames");
var React = require("react");
var Classes = require("../../common/classes");
var utils_1 = require("../../common/utils");
var collapse_1 = require("../collapse/collapse");
var TreeNode = (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleCaretClick = function (e) {
            e.stopPropagation();
            var _a = _this.props, isExpanded = _a.isExpanded, onCollapse = _a.onCollapse, onExpand = _a.onExpand;
            utils_1.safeInvoke(isExpanded ? onCollapse : onExpand, _this, e);
        };
        this.handleClick = function (e) {
            utils_1.safeInvoke(_this.props.onClick, _this, e);
        };
        this.handleDoubleClick = function (e) {
            utils_1.safeInvoke(_this.props.onDoubleClick, _this, e);
        };
    }
    TreeNode.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasCaret = _a.hasCaret, isExpanded = _a.isExpanded, isSelected = _a.isSelected, label = _a.label;
        var showCaret = hasCaret == null ? React.Children.count(children) > 0 : hasCaret;
        var caretClass = showCaret ? Classes.TREE_NODE_CARET : Classes.TREE_NODE_CARET_NONE;
        var caretStateClass = isExpanded ? Classes.TREE_NODE_CARET_OPEN : Classes.TREE_NODE_CARET_CLOSED;
        var caretClasses = classNames(caretClass, "pt-icon-standard", (_b = {},
            _b[caretStateClass] = showCaret,
            _b
        ));
        var classes = classNames(Classes.TREE_NODE, (_c = {},
            _c[Classes.TREE_NODE_SELECTED] = isSelected,
            _c[Classes.TREE_NODE_EXPANDED] = isExpanded,
            _c
        ), className);
        var contentClasses = classNames(Classes.TREE_NODE_CONTENT, "pt-tree-node-content-" + this.props.depth);
        return (React.createElement("li", {className: classes}, 
            React.createElement("div", {className: contentClasses, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick}, 
                React.createElement("span", {className: caretClasses, onClick: showCaret ? this.handleCaretClick : null}), 
                this.maybeRenderIcon(), 
                React.createElement("span", {className: Classes.TREE_NODE_LABEL}, label), 
                this.maybeRenderSecondaryLabel()), 
            React.createElement(collapse_1.Collapse, {isOpen: isExpanded}, children)));
        var _b, _c;
    };
    TreeNode.prototype.maybeRenderIcon = function () {
        var iconName = this.props.iconName;
        if (iconName != null) {
            var iconClasses = classNames(Classes.TREE_NODE_ICON, "pt-icon-standard", Classes.iconClass(iconName));
            return React.createElement("span", {className: iconClasses});
        }
        else {
            return undefined;
        }
    };
    TreeNode.prototype.maybeRenderSecondaryLabel = function () {
        if (this.props.secondaryLabel != null) {
            return React.createElement("span", {className: Classes.TREE_NODE_SECONDARY_LABEL}, this.props.secondaryLabel);
        }
        else {
            return undefined;
        }
    };
    return TreeNode;
}(React.Component));
exports.TreeNode = TreeNode;


},{"../../common/classes":4,"../../common/utils":14,"../collapse/collapse":18,"classnames":65,"react":"react"}],62:[function(require,module,exports){
/*
 * Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
 */
"use strict";
// tslint:disable:object-literal-sort-keys
exports.IconClasses = {
    BLANK: "pt-icon-blank",
    STYLE: "pt-icon-style",
    ALIGN_LEFT: "pt-icon-align-left",
    ALIGN_CENTER: "pt-icon-align-center",
    ALIGN_RIGHT: "pt-icon-align-right",
    ALIGN_JUSTIFY: "pt-icon-align-justify",
    BOLD: "pt-icon-bold",
    ITALIC: "pt-icon-italic",
    UNDERLINE: "pt-icon-underline",
    SEARCH_AROUND: "pt-icon-search-around",
    GRAPH_REMOVE: "pt-icon-graph-remove",
    GROUP_OBJECTS: "pt-icon-group-objects",
    MERGE_LINKS: "pt-icon-merge-links",
    LAYOUT: "pt-icon-layout",
    LAYOUT_AUTO: "pt-icon-layout-auto",
    LAYOUT_CIRCLE: "pt-icon-layout-circle",
    LAYOUT_HIERARCHY: "pt-icon-layout-hierarchy",
    LAYOUT_GRID: "pt-icon-layout-grid",
    LAYOUT_GROUP_BY: "pt-icon-layout-group-by",
    LAYOUT_SKEW_GRID: "pt-icon-layout-skew-grid",
    GEOSEARCH: "pt-icon-geosearch",
    HEATMAP: "pt-icon-heatmap",
    DRIVE_TIME: "pt-icon-drive-time",
    SELECT: "pt-icon-select",
    PREDICTIVE_ANALYSIS: "pt-icon-predictive-analysis",
    LAYERS: "pt-icon-layers",
    LOCATE: "pt-icon-locate",
    BOOKMARK: "pt-icon-bookmark",
    CITATION: "pt-icon-citation",
    TAG: "pt-icon-tag",
    CLIPBOARD: "pt-icon-clipboard",
    SELECTION: "pt-icon-selection",
    TIMELINE_EVENTS: "pt-icon-timeline-events",
    TIMELINE_LINE_CHART: "pt-icon-timeline-line-chart",
    TIMELINE_BAR_CHART: "pt-icon-timeline-bar-chart",
    APPLICATIONS: "pt-icon-applications",
    PROJECTS: "pt-icon-projects",
    CHANGES: "pt-icon-changes",
    NOTIFICATIONS: "pt-icon-notifications",
    LOCK: "pt-icon-lock",
    UNLOCK: "pt-icon-unlock",
    USER: "pt-icon-user",
    SEARCH_TEMPLATE: "pt-icon-search-template",
    INBOX: "pt-icon-inbox",
    MORE: "pt-icon-more",
    HELP: "pt-icon-help",
    CALENDAR: "pt-icon-calendar",
    MEDIA: "pt-icon-media",
    LINK: "pt-icon-link",
    SHARE: "pt-icon-share",
    DOWNLOAD: "pt-icon-download",
    DOCUMENT: "pt-icon-document",
    PROPERTIES: "pt-icon-properties",
    IMPORT: "pt-icon-import",
    EXPORT: "pt-icon-export",
    MINIMIZE: "pt-icon-minimize",
    MAXIMIZE: "pt-icon-maximize",
    TICK: "pt-icon-tick",
    CROSS: "pt-icon-cross",
    PLUS: "pt-icon-plus",
    MINUS: "pt-icon-minus",
    ARROW_LEFT: "pt-icon-arrow-left",
    ARROW_RIGHT: "pt-icon-arrow-right",
    EXCHANGE: "pt-icon-exchange",
    COMPARISON: "pt-icon-comparison",
    LIST: "pt-icon-list",
    FILTER: "pt-icon-filter",
    CONFIRM: "pt-icon-confirm",
    FORK: "pt-icon-fork",
    TRASH: "pt-icon-trash",
    PERSON: "pt-icon-person",
    PEOPLE: "pt-icon-people",
    ADD: "pt-icon-add",
    REMOVE: "pt-icon-remove",
    GEOLOCATION: "pt-icon-geolocation",
    ZOOM_IN: "pt-icon-zoom-in",
    ZOOM_OUT: "pt-icon-zoom-out",
    REFRESH: "pt-icon-refresh",
    DELETE: "pt-icon-delete",
    COG: "pt-icon-cog",
    FLAG: "pt-icon-flag",
    PIN: "pt-icon-pin",
    WARNING_SIGN: "pt-icon-warning-sign",
    ERROR: "pt-icon-error",
    INFO_SIGN: "pt-icon-info-sign",
    CREDIT_CARD: "pt-icon-credit-card",
    EDIT: "pt-icon-edit",
    HISTORY: "pt-icon-history",
    SEARCH: "pt-icon-search",
    LOG_OUT: "pt-icon-log-out",
    STAR: "pt-icon-star",
    STAR_EMPTY: "pt-icon-star-empty",
    SORT_ALPHABETICAL: "pt-icon-sort-alphabetical",
    SORT_NUMERICAL: "pt-icon-sort-numerical",
    SORT: "pt-icon-sort",
    FOLDER_OPEN: "pt-icon-folder-open",
    FOLDER_CLOSE: "pt-icon-folder-close",
    FOLDER_SHARED: "pt-icon-folder-shared",
    CARET_UP: "pt-icon-caret-up",
    CARET_RIGHT: "pt-icon-caret-right",
    CARET_DOWN: "pt-icon-caret-down",
    CARET_LEFT: "pt-icon-caret-left",
    MENU_OPEN: "pt-icon-menu-open",
    MENU_CLOSED: "pt-icon-menu-closed",
    FEED: "pt-icon-feed",
    TWO_COLUMNS: "pt-icon-two-columns",
    ONE_COLUMN: "pt-icon-one-column",
    DOT: "pt-icon-dot",
    PROPERTY: "pt-icon-property",
    TIME: "pt-icon-time",
    DISABLE: "pt-icon-disable",
    UNPIN: "pt-icon-unpin",
    FLOWS: "pt-icon-flows",
    NEW_TEXT_BOX: "pt-icon-new-text-box",
    NEW_LINK: "pt-icon-new-link",
    NEW_OBJECT: "pt-icon-new-object",
    PATH_SEARCH: "pt-icon-path-search",
    AUTOMATIC_UPDATES: "pt-icon-automatic-updates",
    PAGE_LAYOUT: "pt-icon-page-layout",
    CODE: "pt-icon-code",
    MAP: "pt-icon-map",
    SEARCH_TEXT: "pt-icon-search-text",
    ENVELOPE: "pt-icon-envelope",
    PAPERCLIP: "pt-icon-paperclip",
    LABEL: "pt-icon-label",
    GLOBE: "pt-icon-globe",
    HOME: "pt-icon-home",
    TH: "pt-icon-th",
    TH_LIST: "pt-icon-th-list",
    TH_DERIVED: "pt-icon-th-derived",
    CIRCLE: "pt-icon-circle",
    DRAW: "pt-icon-draw",
    INSERT: "pt-icon-insert",
    HELPER_MANAGEMENT: "pt-icon-helper-management",
    SEND_TO: "pt-icon-send-to",
    EYE_OPEN: "pt-icon-eye-open",
    FOLDER_SHARED_OPEN: "pt-icon-folder-shared-open",
    SOCIAL_MEDIA: "pt-icon-social-media",
    ARROW_UP: "pt-icon-arrow-up",
    ARROW_DOWN: "pt-icon-arrow-down",
    ARROWS_HORIZONTAL: "pt-icon-arrows-horizontal",
    ARROWS_VERTICAL: "pt-icon-arrows-vertical",
    RESOLVE: "pt-icon-resolve",
    GRAPH: "pt-icon-graph",
    BRIEFCASE: "pt-icon-briefcase",
    DOLLAR: "pt-icon-dollar",
    NINJA: "pt-icon-ninja",
    DELTA: "pt-icon-delta",
    BARCODE: "pt-icon-barcode",
    TORCH: "pt-icon-torch",
    WIDGET: "pt-icon-widget",
    UNRESOLVE: "pt-icon-unresolve",
    OFFLINE: "pt-icon-offline",
    ZOOM_TO_FIT: "pt-icon-zoom-to-fit",
    ADD_TO_ARTIFACT: "pt-icon-add-to-artifact",
    MAP_MARKER: "pt-icon-map-marker",
    CHART: "pt-icon-chart",
    CONTROL: "pt-icon-control",
    MULTI_SELECT: "pt-icon-multi-select",
    DIRECTION_LEFT: "pt-icon-direction-left",
    DIRECTION_RIGHT: "pt-icon-direction-right",
    DATABASE: "pt-icon-database",
    PIE_CHART: "pt-icon-pie-chart",
    FULL_CIRCLE: "pt-icon-full-circle",
    SQUARE: "pt-icon-square",
    PRINT: "pt-icon-print",
    PRESENTATION: "pt-icon-presentation",
    UNGROUP_OBJECTS: "pt-icon-ungroup-objects",
    CHAT: "pt-icon-chat",
    COMMENT: "pt-icon-comment",
    CIRCLE_ARROW_RIGHT: "pt-icon-circle-arrow-right",
    CIRCLE_ARROW_LEFT: "pt-icon-circle-arrow-left",
    CIRCLE_ARROW_UP: "pt-icon-circle-arrow-up",
    CIRCLE_ARROW_DOWN: "pt-icon-circle-arrow-down",
    UPLOAD: "pt-icon-upload",
    ASTERISK: "pt-icon-asterisk",
    CLOUD: "pt-icon-cloud",
    CLOUD_DOWNLOAD: "pt-icon-cloud-download",
    CLOUD_UPLOAD: "pt-icon-cloud-upload",
    REPEAT: "pt-icon-repeat",
    MOVE: "pt-icon-move",
    CHEVRON_LEFT: "pt-icon-chevron-left",
    CHEVRON_RIGHT: "pt-icon-chevron-right",
    CHEVRON_UP: "pt-icon-chevron-up",
    CHEVRON_DOWN: "pt-icon-chevron-down",
    RANDOM: "pt-icon-random",
    FULLSCREEN: "pt-icon-fullscreen",
    LOG_IN: "pt-icon-log-in",
    HEART: "pt-icon-heart",
    OFFICE: "pt-icon-office",
    DUPLICATE: "pt-icon-duplicate",
    BAN_CIRCLE: "pt-icon-ban-circle",
    CAMERA: "pt-icon-camera",
    MOBILE_VIDEO: "pt-icon-mobile-video",
    VIDEO: "pt-icon-video",
    FILM: "pt-icon-film",
    SETTINGS: "pt-icon-settings",
    VOLUME_OFF: "pt-icon-volume-off",
    VOLUME_DOWN: "pt-icon-volume-down",
    VOLUME_UP: "pt-icon-volume-up",
    MUSIC: "pt-icon-music",
    STEP_BACKWARD: "pt-icon-step-backward",
    FAST_BACKWARD: "pt-icon-fast-backward",
    PAUSE: "pt-icon-pause",
    STOP: "pt-icon-stop",
    PLAY: "pt-icon-play",
    FAST_FORWARD: "pt-icon-fast-forward",
    STEP_FORWARD: "pt-icon-step-forward",
    EJECT: "pt-icon-eject",
    RECORD: "pt-icon-record",
    DESKTOP: "pt-icon-desktop",
    PHONE: "pt-icon-phone",
    LIGHTBULB: "pt-icon-lightbulb",
    GLASS: "pt-icon-glass",
    TINT: "pt-icon-tint",
    FLASH: "pt-icon-flash",
    FONT: "pt-icon-font",
    HEADER: "pt-icon-header",
    SAVED: "pt-icon-saved",
    FLOPPY_DISK: "pt-icon-floppy-disk",
    BOOK: "pt-icon-book",
    HAND_RIGHT: "pt-icon-hand-right",
    HAND_UP: "pt-icon-hand-up",
    HAND_DOWN: "pt-icon-hand-down",
    HAND_LEFT: "pt-icon-hand-left",
    THUMBS_UP: "pt-icon-thumbs-up",
    THUMBS_DOWN: "pt-icon-thumbs-down",
    BOX: "pt-icon-box",
    COMPRESSED: "pt-icon-compressed",
    SHOPPING_CART: "pt-icon-shopping-cart",
    SHOP: "pt-icon-shop",
    LAYOUT_LINEAR: "pt-icon-layout-linear",
    UNDO: "pt-icon-undo",
    REDO: "pt-icon-redo",
    CODE_BLOCK: "pt-icon-code-block",
    DOUBLE_CARET_VERTICAL: "pt-icon-double-caret-vertical",
    DOUBLE_CARET_HORIZONTAL: "pt-icon-double-caret-horizontal",
    SORT_ALPHABETICAL_DESC: "pt-icon-sort-alphabetical-desc",
    SORT_NUMERICAL_DESC: "pt-icon-sort-numerical-desc",
    TAKE_ACTION: "pt-icon-take-action",
    CONTRAST: "pt-icon-contrast",
    EYE_OFF: "pt-icon-eye-off",
    TIMELINE_AREA_CHART: "pt-icon-timeline-area-chart",
    DOUGHNUT_CHART: "pt-icon-doughnut-chart",
    LAYER: "pt-icon-layer",
    GRID: "pt-icon-grid",
    POLYGON_FILTER: "pt-icon-polygon-filter",
    ADD_TO_FOLDER: "pt-icon-add-to-folder",
    LAYOUT_BALLOON: "pt-icon-layout-balloon",
    LAYOUT_SORTED_CLUSTERS: "pt-icon-layout-sorted-clusters",
    SORT_ASC: "pt-icon-sort-asc",
    SORT_DESC: "pt-icon-sort-desc",
    SMALL_CROSS: "pt-icon-small-cross",
    SMALL_TICK: "pt-icon-small-tick",
    POWER: "pt-icon-power",
    COLUMN_LAYOUT: "pt-icon-column-layout",
    ARROW_TOP_LEFT: "pt-icon-arrow-top-left",
    ARROW_TOP_RIGHT: "pt-icon-arrow-top-right",
    ARROW_BOTTOM_RIGHT: "pt-icon-arrow-bottom-right",
    ARROW_BOTTOM_LEFT: "pt-icon-arrow-bottom-left",
    MUGSHOT: "pt-icon-mugshot",
    HEADSET: "pt-icon-headset",
    TEXT_HIGHLIGHT: "pt-icon-text-highlight",
    HAND: "pt-icon-hand",
    CHEVRON_BACKWARD: "pt-icon-chevron-backward",
    CHEVRON_FORWARD: "pt-icon-chevron-forward",
    ROTATE_DOCUMENT: "pt-icon-rotate-document",
    ROTATE_PAGE: "pt-icon-rotate-page",
    BADGE: "pt-icon-badge",
    GRID_VIEW: "pt-icon-grid-view",
    FUNCTION: "pt-icon-function",
    WATERFALL_CHART: "pt-icon-waterfall-chart",
    STACKED_CHART: "pt-icon-stacked-chart",
    PULSE: "pt-icon-pulse",
    NEW_PERSON: "pt-icon-new-person",
    EXCLUDE_ROW: "pt-icon-exclude-row",
    PIVOT_TABLE: "pt-icon-pivot-table",
    SEGMENTED_CONTROL: "pt-icon-segmented-control",
    HIGHLIGHT: "pt-icon-highlight",
    FILTER_LIST: "pt-icon-filter-list",
    CUT: "pt-icon-cut",
    ANNOTATION: "pt-icon-annotation",
    PIVOT: "pt-icon-pivot",
    RING: "pt-icon-ring",
    HEAT_GRID: "pt-icon-heat-grid",
    GANTT_CHART: "pt-icon-gantt-chart",
    VARIABLE: "pt-icon-variable",
    MANUAL: "pt-icon-manual",
    ADD_ROW_TOP: "pt-icon-add-row-top",
    ADD_ROW_BOTTOM: "pt-icon-add-row-bottom",
    ADD_COLUMN_LEFT: "pt-icon-add-column-left",
    ADD_COLUMN_RIGHT: "pt-icon-add-column-right",
    REMOVE_ROW_TOP: "pt-icon-remove-row-top",
    REMOVE_ROW_BOTTOM: "pt-icon-remove-row-bottom",
    REMOVE_COLUMN_LEFT: "pt-icon-remove-column-left",
    REMOVE_COLUMN_RIGHT: "pt-icon-remove-column-right",
    DOUBLE_CHEVRON_LEFT: "pt-icon-double-chevron-left",
    DOUBLE_CHEVRON_RIGHT: "pt-icon-double-chevron-right",
    DOUBLE_CHEVRON_UP: "pt-icon-double-chevron-up",
    DOUBLE_CHEVRON_DOWN: "pt-icon-double-chevron-down",
    KEY_CONTROL: "pt-icon-key-control",
    KEY_COMMAND: "pt-icon-key-command",
    KEY_SHIFT: "pt-icon-key-shift",
    KEY_BACKSPACE: "pt-icon-key-backspace",
    KEY_DELETE: "pt-icon-key-delete",
    KEY_ESCAPE: "pt-icon-key-escape",
    KEY_ENTER: "pt-icon-key-enter",
    CALCULATOR: "pt-icon-calculator",
    HORIZONTAL_BAR_CHART: "pt-icon-horizontal-bar-chart",
    SMALL_PLUS: "pt-icon-small-plus",
    SMALL_MINUS: "pt-icon-small-minus",
    STEP_CHART: "pt-icon-step-chart",
    EURO: "pt-icon-euro",
    DRAG_HANDLE_VERTICAL: "pt-icon-drag-handle-vertical",
    DRAG_HANDLE_HORIZONTAL: "pt-icon-drag-handle-horizontal",
    MOBILE_PHONE: "pt-icon-mobile-phone",
    SIM_CARD: "pt-icon-sim-card",
    TRENDING_UP: "pt-icon-trending-up",
    TRENDING_DOWN: "pt-icon-trending-down",
    CURVED_RANGE_CHART: "pt-icon-curved-range-chart",
    VERTICAL_BAR_CHART_DESC: "pt-icon-vertical-bar-chart-desc",
    HORIZONTAL_BAR_CHART_DESC: "pt-icon-horizontal-bar-chart-desc",
    DOCUMENT_OPEN: "pt-icon-document-open",
    DOCUMENT_SHARE: "pt-icon-document-share",
    HORIZONTAL_DISTRIBUTION: "pt-icon-horizontal-distribution",
    VERTICAL_DISTRIBUTION: "pt-icon-vertical-distribution",
    ALIGNMENT_LEFT: "pt-icon-alignment-left",
    ALIGNMENT_VERTICAL_CENTER: "pt-icon-alignment-vertical-center",
    ALIGNMENT_RIGHT: "pt-icon-alignment-right",
    ALIGNMENT_TOP: "pt-icon-alignment-top",
    ALIGNMENT_HORIZONTAL_CENTER: "pt-icon-alignment-horizontal-center",
    ALIGNMENT_BOTTOM: "pt-icon-alignment-bottom",
    GIT_PULL: "pt-icon-git-pull",
    GIT_MERGE: "pt-icon-git-merge",
    GIT_BRANCH: "pt-icon-git-branch",
    GIT_COMMIT: "pt-icon-git-commit",
    GIT_PUSH: "pt-icon-git-push",
    BUILD: "pt-icon-build",
    SYMBOL_CIRCLE: "pt-icon-symbol-circle",
    SYMBOL_SQUARE: "pt-icon-symbol-square",
    SYMBOL_DIAMOND: "pt-icon-symbol-diamond",
    SYMBOL_CROSS: "pt-icon-symbol-cross",
    SYMBOL_TRIANGLE_UP: "pt-icon-symbol-triangle-up",
    SYMBOL_TRIANGLE_DOWN: "pt-icon-symbol-triangle-down",
    WRENCH: "pt-icon-wrench",
    APPLICATION: "pt-icon-application",
    SEND_TO_GRAPH: "pt-icon-send-to-graph",
    SEND_TO_MAP: "pt-icon-send-to-map",
    JOIN_TABLE: "pt-icon-join-table",
    DERIVE_COLUMN: "pt-icon-derive-column",
    IMAGE_ROTATE_LEFT: "pt-icon-image-rotate-left",
    IMAGE_ROTATE_RIGHT: "pt-icon-image-rotate-right",
    KNOWN_VEHICLE: "pt-icon-known-vehicle",
    UNKNOWN_VEHICLE: "pt-icon-unknown-vehicle",
    SCATTER_PLOT: "pt-icon-scatter-plot",
    OIL_FIELD: "pt-icon-oil-field",
    RIG: "pt-icon-rig",
    MAP_CREATE: "pt-icon-map-create",
    KEY_OPTION: "pt-icon-key-option",
    LIST_DETAIL_VIEW: "pt-icon-list-detail-view",
    SWAP_VERTICAL: "pt-icon-swap-vertical",
    SWAP_HORIZONTAL: "pt-icon-swap-horizontal",
    NUMBERED_LIST: "pt-icon-numbered-list",
    NEW_GRID_ITEM: "pt-icon-new-grid-item",
    GIT_REPO: "pt-icon-git-repo",
    GIT_NEW_BRANCH: "pt-icon-git-new-branch",
    MANUALLY_ENTERED_DATA: "pt-icon-manually-entered-data",
    AIRPLANE: "pt-icon-airplane",
    MERGE_COLUMNS: "pt-icon-merge-columns",
    SPLIT_COLUMNS: "pt-icon-split-columns",
    DASHBOARD: "pt-icon-dashboard",
    PUBLISH_FUNCTION: "pt-icon-publish-function",
    PATH: "pt-icon-path",
    MOON: "pt-icon-moon",
    REMOVE_COLUMN: "pt-icon-remove-column",
    NUMERICAL: "pt-icon-numerical",
    KEY_TAB: "pt-icon-key-tab",
    REGRESSION_CHART: "pt-icon-regression-chart",
    TRANSLATE: "pt-icon-translate",
    EYE_ON: "pt-icon-eye-on",
};


},{}],63:[function(require,module,exports){
/*
 * Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
 */
"use strict";
// tslint:disable:object-literal-sort-keys
exports.IconContents = {
    BLANK: "\ue900",
    STYLE: "\ue601",
    ALIGN_LEFT: "\ue602",
    ALIGN_CENTER: "\ue603",
    ALIGN_RIGHT: "\ue604",
    ALIGN_JUSTIFY: "\ue605",
    BOLD: "\ue606",
    ITALIC: "\ue607",
    UNDERLINE: "\u2381",
    SEARCH_AROUND: "\ue608",
    GRAPH_REMOVE: "\ue609",
    GROUP_OBJECTS: "\ue60a",
    MERGE_LINKS: "\ue60b",
    LAYOUT: "\ue60c",
    LAYOUT_AUTO: "\ue60d",
    LAYOUT_CIRCLE: "\ue60e",
    LAYOUT_HIERARCHY: "\ue60f",
    LAYOUT_GRID: "\ue610",
    LAYOUT_GROUP_BY: "\ue611",
    LAYOUT_SKEW_GRID: "\ue612",
    GEOSEARCH: "\ue613",
    HEATMAP: "\ue614",
    DRIVE_TIME: "\ue615",
    SELECT: "\ue616",
    PREDICTIVE_ANALYSIS: "\ue617",
    LAYERS: "\ue618",
    LOCATE: "\ue619",
    BOOKMARK: "\ue61a",
    CITATION: "\ue61b",
    TAG: "\ue61c",
    CLIPBOARD: "\ue61d",
    SELECTION: "\u29bf",
    TIMELINE_EVENTS: "\ue61e",
    TIMELINE_LINE_CHART: "\ue61f",
    TIMELINE_BAR_CHART: "\ue620",
    APPLICATIONS: "\ue621",
    PROJECTS: "\ue622",
    CHANGES: "\ue623",
    NOTIFICATIONS: "\ue624",
    LOCK: "\ue625",
    UNLOCK: "\ue626",
    USER: "\ue627",
    SEARCH_TEMPLATE: "\ue628",
    INBOX: "\ue629",
    MORE: "\ue62a",
    HELP: "\u003F",
    CALENDAR: "\ue62b",
    MEDIA: "\ue62c",
    LINK: "\ue62d",
    SHARE: "\ue62e",
    DOWNLOAD: "\ue62f",
    DOCUMENT: "\ue630",
    PROPERTIES: "\ue631",
    IMPORT: "\ue632",
    EXPORT: "\ue633",
    MINIMIZE: "\ue634",
    MAXIMIZE: "\ue635",
    TICK: "\u2713",
    CROSS: "\u2717",
    PLUS: "\u002b",
    MINUS: "\u2212",
    ARROW_LEFT: "\u2190",
    ARROW_RIGHT: "\u2192",
    EXCHANGE: "\ue636",
    COMPARISON: "\ue637",
    LIST: "\u2630",
    FILTER: "\ue638",
    CONFIRM: "\ue639",
    FORK: "\ue63a",
    TRASH: "\ue63b",
    PERSON: "\ue63c",
    PEOPLE: "\ue63d",
    ADD: "\ue63e",
    REMOVE: "\ue63f",
    GEOLOCATION: "\ue640",
    ZOOM_IN: "\ue641",
    ZOOM_OUT: "\ue642",
    REFRESH: "\ue643",
    DELETE: "\ue644",
    COG: "\ue645",
    FLAG: "\u2691",
    PIN: "\ue646",
    WARNING_SIGN: "\ue647",
    ERROR: "\ue648",
    INFO_SIGN: "\u2139",
    CREDIT_CARD: "\ue649",
    EDIT: "\u270E",
    HISTORY: "\ue64a",
    SEARCH: "\ue64b",
    LOG_OUT: "\ue64c",
    STAR: "\u2605",
    STAR_EMPTY: "\u2606",
    SORT_ALPHABETICAL: "\ue64d",
    SORT_NUMERICAL: "\ue64e",
    SORT: "\ue64f",
    FOLDER_OPEN: "\ue651",
    FOLDER_CLOSE: "\ue652",
    FOLDER_SHARED: "\ue653",
    CARET_UP: "\u2303",
    CARET_RIGHT: "\u232A",
    CARET_DOWN: "\u2304",
    CARET_LEFT: "\u2329",
    MENU_OPEN: "\ue654",
    MENU_CLOSED: "\ue655",
    FEED: "\ue656",
    TWO_COLUMNS: "\ue657",
    ONE_COLUMN: "\ue658",
    DOT: "\u2022",
    PROPERTY: "\ue65a",
    TIME: "\u23F2",
    DISABLE: "\ue600",
    UNPIN: "\ue650",
    FLOWS: "\ue659",
    NEW_TEXT_BOX: "\ue65b",
    NEW_LINK: "\ue65c",
    NEW_OBJECT: "\ue65d",
    PATH_SEARCH: "\ue65e",
    AUTOMATIC_UPDATES: "\ue65f",
    PAGE_LAYOUT: "\ue660",
    CODE: "\ue661",
    MAP: "\ue662",
    SEARCH_TEXT: "\ue663",
    ENVELOPE: "\u2709",
    PAPERCLIP: "\ue664",
    LABEL: "\ue665",
    GLOBE: "\ue666",
    HOME: "\u2302",
    TH: "\ue667",
    TH_LIST: "\ue668",
    TH_DERIVED: "\ue669",
    CIRCLE: "\ue66a",
    DRAW: "\ue66b",
    INSERT: "\ue66c",
    HELPER_MANAGEMENT: "\ue66d",
    SEND_TO: "\ue66e",
    EYE_OPEN: "\ue66f",
    FOLDER_SHARED_OPEN: "\ue670",
    SOCIAL_MEDIA: "\ue671",
    ARROW_UP: "\u2191 ",
    ARROW_DOWN: "\u2193 ",
    ARROWS_HORIZONTAL: "\u2194 ",
    ARROWS_VERTICAL: "\u2195 ",
    RESOLVE: "\ue672",
    GRAPH: "\ue673",
    BRIEFCASE: "\ue674",
    DOLLAR: "\u0024",
    NINJA: "\ue675",
    DELTA: "\u0394",
    BARCODE: "\ue676",
    TORCH: "\ue677",
    WIDGET: "\ue678",
    UNRESOLVE: "\ue679",
    OFFLINE: "\ue67a",
    ZOOM_TO_FIT: "\ue67b",
    ADD_TO_ARTIFACT: "\ue67c",
    MAP_MARKER: "\ue67d",
    CHART: "\ue67e",
    CONTROL: "\ue67f",
    MULTI_SELECT: "\ue680",
    DIRECTION_LEFT: "\ue681",
    DIRECTION_RIGHT: "\ue682",
    DATABASE: "\ue683",
    PIE_CHART: "\ue684",
    FULL_CIRCLE: "\ue685",
    SQUARE: "\ue686",
    PRINT: "\u2399",
    PRESENTATION: "\ue687",
    UNGROUP_OBJECTS: "\ue688",
    CHAT: "\ue689",
    COMMENT: "\ue68a",
    CIRCLE_ARROW_RIGHT: "\ue68b",
    CIRCLE_ARROW_LEFT: "\ue68c",
    CIRCLE_ARROW_UP: "\ue68d",
    CIRCLE_ARROW_DOWN: "\ue68e",
    UPLOAD: "\ue68f",
    ASTERISK: "\u002a",
    CLOUD: "\u2601",
    CLOUD_DOWNLOAD: "\ue690",
    CLOUD_UPLOAD: "\ue691",
    REPEAT: "\ue692",
    MOVE: "\ue693",
    CHEVRON_LEFT: "\ue694",
    CHEVRON_RIGHT: "\ue695",
    CHEVRON_UP: "\ue696",
    CHEVRON_DOWN: "\ue697",
    RANDOM: "\ue698",
    FULLSCREEN: "\ue699",
    LOG_IN: "\ue69a",
    HEART: "\u2665",
    OFFICE: "\ue69b",
    DUPLICATE: "\ue69c",
    BAN_CIRCLE: "\ue69d",
    CAMERA: "\ue69e",
    MOBILE_VIDEO: "\ue69f",
    VIDEO: "\ue6a0",
    FILM: "\ue6a1",
    SETTINGS: "\ue6a2",
    VOLUME_OFF: "\ue6a3",
    VOLUME_DOWN: "\ue6a4",
    VOLUME_UP: "\ue6a5",
    MUSIC: "\ue6a6",
    STEP_BACKWARD: "\ue6a7",
    FAST_BACKWARD: "\ue6a8",
    PAUSE: "\ue6a9",
    STOP: "\ue6aa",
    PLAY: "\ue6ab",
    FAST_FORWARD: "\ue6ac",
    STEP_FORWARD: "\ue6ad",
    EJECT: "\u23cf",
    RECORD: "\ue6ae",
    DESKTOP: "\ue6af",
    PHONE: "\u260e",
    LIGHTBULB: "\ue6b0",
    GLASS: "\ue6b1",
    TINT: "\ue6b2",
    FLASH: "\ue6b3",
    FONT: "\ue6b4",
    HEADER: "\ue6b5",
    SAVED: "\ue6b6",
    FLOPPY_DISK: "\ue6b7",
    BOOK: "\ue6b8",
    HAND_RIGHT: "\ue6b9",
    HAND_UP: "\ue6ba",
    HAND_DOWN: "\ue6bb",
    HAND_LEFT: "\ue6bc",
    THUMBS_UP: "\ue6bd",
    THUMBS_DOWN: "\ue6be",
    BOX: "\ue6bf",
    COMPRESSED: "\ue6c0",
    SHOPPING_CART: "\ue6c1",
    SHOP: "\ue6c2",
    LAYOUT_LINEAR: "\ue6c3",
    UNDO: "\u238c",
    REDO: "\ue6c4",
    CODE_BLOCK: "\ue6c5",
    DOUBLE_CARET_VERTICAL: "\ue6c6",
    DOUBLE_CARET_HORIZONTAL: "\ue6c7",
    SORT_ALPHABETICAL_DESC: "\ue6c8",
    SORT_NUMERICAL_DESC: "\ue6c9",
    TAKE_ACTION: "\ue6ca",
    CONTRAST: "\ue6cb",
    EYE_OFF: "\ue6cc",
    TIMELINE_AREA_CHART: "\ue6cd",
    DOUGHNUT_CHART: "\ue6ce",
    LAYER: "\ue6cf",
    GRID: "\ue6d0",
    POLYGON_FILTER: "\ue6d1",
    ADD_TO_FOLDER: "\ue6d2",
    LAYOUT_BALLOON: "\ue6d3",
    LAYOUT_SORTED_CLUSTERS: "\ue6d4",
    SORT_ASC: "\ue6d5",
    SORT_DESC: "\ue6d6",
    SMALL_CROSS: "\ue6d7",
    SMALL_TICK: "\ue6d8",
    POWER: "\ue6d9",
    COLUMN_LAYOUT: "\ue6da",
    ARROW_TOP_LEFT: "\u2196",
    ARROW_TOP_RIGHT: "\u2197",
    ARROW_BOTTOM_RIGHT: "\u2198",
    ARROW_BOTTOM_LEFT: "\u2199",
    MUGSHOT: "\ue6db",
    HEADSET: "\ue6dc",
    TEXT_HIGHLIGHT: "\ue6dd",
    HAND: "\ue6de",
    CHEVRON_BACKWARD: "\ue6df",
    CHEVRON_FORWARD: "\ue6e0",
    ROTATE_DOCUMENT: "\ue6e1",
    ROTATE_PAGE: "\ue6e2",
    BADGE: "\ue6e3",
    GRID_VIEW: "\ue6e4",
    FUNCTION: "\ue6e5",
    WATERFALL_CHART: "\ue6e6",
    STACKED_CHART: "\ue6e7",
    PULSE: "\ue6e8",
    NEW_PERSON: "\ue6e9",
    EXCLUDE_ROW: "\ue6ea",
    PIVOT_TABLE: "\ue6eb",
    SEGMENTED_CONTROL: "\ue6ec",
    HIGHLIGHT: "\ue6ed",
    FILTER_LIST: "\ue6ee",
    CUT: "\ue6ef",
    ANNOTATION: "\ue6f0",
    PIVOT: "\ue6f1",
    RING: "\ue6f2",
    HEAT_GRID: "\ue6f3",
    GANTT_CHART: "\ue6f4",
    VARIABLE: "\ue6f5",
    MANUAL: "\ue6f6",
    ADD_ROW_TOP: "\ue6f7",
    ADD_ROW_BOTTOM: "\ue6f8",
    ADD_COLUMN_LEFT: "\ue6f9",
    ADD_COLUMN_RIGHT: "\ue6fa",
    REMOVE_ROW_TOP: "\ue6fb",
    REMOVE_ROW_BOTTOM: "\ue6fc",
    REMOVE_COLUMN_LEFT: "\ue6fd",
    REMOVE_COLUMN_RIGHT: "\ue6fe",
    DOUBLE_CHEVRON_LEFT: "\ue6ff",
    DOUBLE_CHEVRON_RIGHT: "\ue701",
    DOUBLE_CHEVRON_UP: "\ue702",
    DOUBLE_CHEVRON_DOWN: "\ue703",
    KEY_CONTROL: "\ue704",
    KEY_COMMAND: "\ue705",
    KEY_SHIFT: "\ue706",
    KEY_BACKSPACE: "\ue707",
    KEY_DELETE: "\ue708",
    KEY_ESCAPE: "\ue709",
    KEY_ENTER: "\ue70a",
    CALCULATOR: "\ue70b",
    HORIZONTAL_BAR_CHART: "\ue70c",
    SMALL_PLUS: "\ue70d",
    SMALL_MINUS: "\ue70e",
    STEP_CHART: "\ue70f",
    EURO: "\u20ac",
    DRAG_HANDLE_VERTICAL: "\ue715",
    DRAG_HANDLE_HORIZONTAL: "\ue716",
    MOBILE_PHONE: "\ue717",
    SIM_CARD: "\ue718",
    TRENDING_UP: "\ue719",
    TRENDING_DOWN: "\ue71a",
    CURVED_RANGE_CHART: "\ue71b",
    VERTICAL_BAR_CHART_DESC: "\ue71c",
    HORIZONTAL_BAR_CHART_DESC: "\ue71d",
    DOCUMENT_OPEN: "\ue71e",
    DOCUMENT_SHARE: "\ue71f",
    HORIZONTAL_DISTRIBUTION: "\ue720",
    VERTICAL_DISTRIBUTION: "\ue721",
    ALIGNMENT_LEFT: "\ue722",
    ALIGNMENT_VERTICAL_CENTER: "\ue723",
    ALIGNMENT_RIGHT: "\ue724",
    ALIGNMENT_TOP: "\ue725",
    ALIGNMENT_HORIZONTAL_CENTER: "\ue726",
    ALIGNMENT_BOTTOM: "\ue727",
    GIT_PULL: "\ue728",
    GIT_MERGE: "\ue729",
    GIT_BRANCH: "\ue72a",
    GIT_COMMIT: "\ue72b",
    GIT_PUSH: "\ue72c",
    BUILD: "\ue72d",
    SYMBOL_CIRCLE: "\ue72e",
    SYMBOL_SQUARE: "\ue72f",
    SYMBOL_DIAMOND: "\ue730",
    SYMBOL_CROSS: "\ue731",
    SYMBOL_TRIANGLE_UP: "\ue732",
    SYMBOL_TRIANGLE_DOWN: "\ue733",
    WRENCH: "\ue734",
    APPLICATION: "\ue735",
    SEND_TO_GRAPH: "\ue736",
    SEND_TO_MAP: "\ue737",
    JOIN_TABLE: "\ue738",
    DERIVE_COLUMN: "\ue739",
    IMAGE_ROTATE_LEFT: "\ue73a",
    IMAGE_ROTATE_RIGHT: "\ue73b",
    KNOWN_VEHICLE: "\ue73c",
    UNKNOWN_VEHICLE: "\ue73d",
    SCATTER_PLOT: "\ue73e",
    OIL_FIELD: "\ue73f",
    RIG: "\ue740",
    MAP_CREATE: "\ue741",
    KEY_OPTION: "\ue742",
    LIST_DETAIL_VIEW: "\ue743",
    SWAP_VERTICAL: "\ue744",
    SWAP_HORIZONTAL: "\ue745",
    NUMBERED_LIST: "\ue746",
    NEW_GRID_ITEM: "\ue747",
    GIT_REPO: "\ue748",
    GIT_NEW_BRANCH: "\ue749",
    MANUALLY_ENTERED_DATA: "\ue74a",
    AIRPLANE: "\ue74b",
    MERGE_COLUMNS: "\ue74f",
    SPLIT_COLUMNS: "\ue750",
    DASHBOARD: "\ue751",
    PUBLISH_FUNCTION: "\ue752",
    PATH: "\ue753",
    MOON: "\ue754",
    REMOVE_COLUMN: "\ue755",
    NUMERICAL: "\ue756",
    KEY_TAB: "\ue757",
    REGRESSION_CHART: "\ue758",
    TRANSLATE: "\ue759",
    EYE_ON: "\ue75a",
};


},{}],64:[function(require,module,exports){
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./accessibility"));
__export(require("./common"));
__export(require("./components"));
var iconClasses_1 = require("./generated/iconClasses");
exports.IconClasses = iconClasses_1.IconClasses;
var iconStrings_1 = require("./generated/iconStrings");
exports.IconContents = iconStrings_1.IconContents;


},{"./accessibility":2,"./common":7,"./components":34,"./generated/iconClasses":62,"./generated/iconStrings":63}],65:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],66:[function(require,module,exports){
/*!
Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window){'use strict';
  /* jshint loopfunc: true, noempty: false*/
  // http://www.w3.org/TR/dom/#element

  function createDocumentFragment() {
    return document.createDocumentFragment();
  }

  function createElement(nodeName) {
    return document.createElement(nodeName);
  }

  function enoughArguments(length, name) {
    if (!length) throw new Error(
      'Failed to construct ' +
        name +
      ': 1 argument required, but only 0 present.'
    );
  }

  function mutationMacro(nodes) {
    if (nodes.length === 1) {
      return textNodeIfString(nodes[0]);
    }
    for (var
      fragment = createDocumentFragment(),
      list = slice.call(nodes),
      i = 0; i < nodes.length; i++
    ) {
      fragment.appendChild(textNodeIfString(list[i]));
    }
    return fragment;
  }

  function textNodeIfString(node) {
    return typeof node === 'string' ? document.createTextNode(node) : node;
  }

  for(var
    head,
    property,
    TemporaryPrototype,
    TemporaryTokenList,
    wrapVerifyToken,
    document = window.document,
    hOP = Object.prototype.hasOwnProperty,
    defineProperty = Object.defineProperty || function (object, property, descriptor) {
      if (hOP.call(descriptor, 'value')) {
        object[property] = descriptor.value;
      } else {
        if (hOP.call(descriptor, 'get'))
          object.__defineGetter__(property, descriptor.get);
        if (hOP.call(descriptor, 'set'))
          object.__defineSetter__(property, descriptor.set);
      }
      return object;
    },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    // http://www.w3.org/TR/domcore/#domtokenlist
    verifyToken = function (token) {
      if (!token) {
        throw 'SyntaxError';
      } else if (spaces.test(token)) {
        throw 'InvalidCharacterError';
      }
      return token;
    },
    DOMTokenList = function (node) {
      var
        noClassName = typeof node.className === 'undefined',
        className = noClassName ?
          (node.getAttribute('class') || '') : node.className,
        isSVG = noClassName || typeof className === 'object',
        value = (isSVG ?
          (noClassName ? className : className.baseVal) :
          className
        ).replace(trim, '')
      ;
      if (value.length) {
        properties.push.apply(
          this,
          value.split(spaces)
        );
      }
      this._isSVG = isSVG;
      this._ = node;
    },
    classListDescriptor = {
      get: function get() {
        return new DOMTokenList(this);
      },
      set: function(){}
    },
    uid = 'dom4-tmp-'.concat(Math.random() * +new Date()).replace('.','-'),
    trim = /^\s+|\s+$/g,
    spaces = /\s+/,
    SPACE = '\x20',
    CLASS_LIST = 'classList',
    toggle = function toggle(token, force) {
      if (this.contains(token)) {
        if (!force) {
          // force is not true (either false or omitted)
          this.remove(token);
        }
      } else if(force === undefined || force) {
        force = true;
        this.add(token);
      }
      return !!force;
    },
    DocumentFragmentPrototype = window.DocumentFragment && DocumentFragment.prototype,
    Node = window.Node,
    NodePrototype = (Node || Element).prototype,
    CharacterData = window.CharacterData || Node,
    CharacterDataPrototype = CharacterData && CharacterData.prototype,
    DocumentType = window.DocumentType,
    DocumentTypePrototype = DocumentType && DocumentType.prototype,
    ElementPrototype = (window.Element || Node || window.HTMLElement).prototype,
    HTMLSelectElement = window.HTMLSelectElement || createElement('select').constructor,
    selectRemove = HTMLSelectElement.prototype.remove,
    ShadowRoot = window.ShadowRoot,
    SVGElement = window.SVGElement,
    // normalizes multiple ids as CSS query
    idSpaceFinder = / /g,
    idSpaceReplacer = '\\ ',
    createQueryMethod = function (methodName) {
      var createArray = methodName === 'querySelectorAll';
      return function (css) {
        var a, i, id, query, nl, selectors, node = this.parentNode;
        if (node) {
          for (
            id = this.getAttribute('id') || uid,
            query = id === uid ? id : id.replace(idSpaceFinder, idSpaceReplacer),
            selectors = css.split(','),
            i = 0; i < selectors.length; i++
          ) {
            selectors[i] = '#' + query + ' ' + selectors[i];
          }
          css = selectors.join(',');
        }
        if (id === uid) this.setAttribute('id', id);
        nl = (node || this)[methodName](css);
        if (id === uid) this.removeAttribute('id');
        // return a list
        if (createArray) {
          i = nl.length;
          a = new Array(i);
          while (i--) a[i] = nl[i];
        }
        // return node or null
        else {
          a = nl;
        }
        return a;
      };
    },
    addQueryAndAll = function (where) {
      if (!('query' in where)) {
        where.query = ElementPrototype.query;
      }
      if (!('queryAll' in where)) {
        where.queryAll = ElementPrototype.queryAll;
      }
    },
    properties = [
      'matches', (
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.khtmlMatchesSelector ||
        ElementPrototype.mozMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        ElementPrototype.oMatchesSelector ||
        function matches(selector) {
          var parentNode = this.parentNode;
          return !!parentNode && -1 < indexOf.call(
            parentNode.querySelectorAll(selector),
            this
          );
        }
      ),
      'closest', function closest(selector) {
        var parentNode = this, matches;
        while (
          // document has no .matches
          (matches = parentNode && parentNode.matches) &&
          !parentNode.matches(selector)
        ) {
          parentNode = parentNode.parentNode;
        }
        return matches ? parentNode : null;
      },
      'prepend', function prepend() {
        var firstChild = this.firstChild,
            node = mutationMacro(arguments);
        if (firstChild) {
          this.insertBefore(node, firstChild);
        } else {
          this.appendChild(node);
        }
      },
      'append', function append() {
        this.appendChild(mutationMacro(arguments));
      },
      'before', function before() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.insertBefore(
            mutationMacro(arguments), this
          );
        }
      },
      'after', function after() {
        var parentNode = this.parentNode,
            nextSibling = this.nextSibling,
            node = mutationMacro(arguments);
        if (parentNode) {
          if (nextSibling) {
            parentNode.insertBefore(node, nextSibling);
          } else {
            parentNode.appendChild(node);
          }
        }
      },
      // WARNING - DEPRECATED - use .replaceWith() instead
      'replace', function replace() {
        this.replaceWith.apply(this, arguments);
      },
      'replaceWith', function replaceWith() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.replaceChild(
            mutationMacro(arguments),
            this
          );
        }
      },
      'remove', function remove() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.removeChild(this);
        }
      },
      'query', createQueryMethod('querySelector'),
      'queryAll', createQueryMethod('querySelectorAll')
    ],
    slice = properties.slice,
    i = properties.length; i; i -= 2
  ) {
    property = properties[i - 2];
    if (!(property in ElementPrototype)) {
      ElementPrototype[property] = properties[i - 1];
    }
    if (property === 'remove') {
      // see https://github.com/WebReflection/dom4/issues/19
      HTMLSelectElement.prototype[property] = function () {
        return 0 < arguments.length ?
          selectRemove.apply(this, arguments) :
          ElementPrototype.remove.call(this);
      };
    }
    // see https://github.com/WebReflection/dom4/issues/18
    if (/^(?:before|after|replace|replaceWith|remove)$/.test(property)) {
      if (CharacterData && !(property in CharacterDataPrototype)) {
        CharacterDataPrototype[property] = properties[i - 1];
      }
      if (DocumentType && !(property in DocumentTypePrototype)) {
        DocumentTypePrototype[property] = properties[i - 1];
      }
    }
    // see https://github.com/WebReflection/dom4/pull/26
    if (/^(?:append|prepend)$/.test(property)) {
      if (DocumentFragmentPrototype) {
        if (!(property in DocumentFragmentPrototype)) {
          DocumentFragmentPrototype[property] = properties[i - 1];
        }
      } else {
        try {
          createDocumentFragment().constructor.prototype[property] = properties[i - 1];
        } catch(o_O) {}
      }
    }
  }

  // bring query and queryAll to the document too
  addQueryAndAll(document);

  // brings query and queryAll to fragments as well
  if (DocumentFragmentPrototype) {
    addQueryAndAll(DocumentFragmentPrototype);
  } else {
    try {
      addQueryAndAll(createDocumentFragment().constructor.prototype);
    } catch(o_O) {}
  }

  // bring query and queryAll to the ShadowRoot too
  if (ShadowRoot) {
    addQueryAndAll(ShadowRoot.prototype);
  }

  // most likely an IE9 only issue
  // see https://github.com/WebReflection/dom4/issues/6
  if (!createElement('a').matches('a')) {
    ElementPrototype[property] = function(matches){
      return function (selector) {
        return matches.call(
          this.parentNode ?
            this :
            createDocumentFragment().appendChild(this),
          selector
        );
      };
    }(ElementPrototype[property]);
  }

  // used to fix both old webkit and SVG
  DOMTokenList.prototype = {
    length: 0,
    add: function add() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(!this.contains(token)) {
          properties.push.call(this, property);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    contains: (function(indexOf){
      return function contains(token) {
        i = indexOf.call(this, property = verifyToken(token));
        return -1 < i;
      };
    }([].indexOf || function (token) {
      i = this.length;
      while(i-- && this[i] !== token){}
      return i;
    })),
    item: function item(i) {
      return this[i] || null;
    },
    remove: function remove() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(this.contains(token)) {
          properties.splice.call(this, i, 1);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    toggle: toggle,
    toString: function toString() {
      return properties.join.call(this, SPACE);
    }
  };

  if (SVGElement && !(CLASS_LIST in SVGElement.prototype)) {
    defineProperty(SVGElement.prototype, CLASS_LIST, classListDescriptor);
  }

  // http://www.w3.org/TR/dom/#domtokenlist
  // iOS 5.1 has completely screwed this property
  // classList in ElementPrototype is false
  // but it's actually there as getter
  if (!(CLASS_LIST in document.documentElement)) {
    defineProperty(ElementPrototype, CLASS_LIST, classListDescriptor);
  } else {
    // iOS 5.1 and Nokia ASHA do not support multiple add or remove
    // trying to detect and fix that in here
    TemporaryTokenList = createElement('div')[CLASS_LIST];
    TemporaryTokenList.add('a', 'b', 'a');
    if ('a\x20b' != TemporaryTokenList) {
      // no other way to reach original methods in iOS 5.1
      TemporaryPrototype = TemporaryTokenList.constructor.prototype;
      if (!('add' in TemporaryPrototype)) {
        // ASHA double fails in here
        TemporaryPrototype = window.TemporaryTokenList.prototype;
      }
      wrapVerifyToken = function (original) {
        return function () {
          var i = 0;
          while (i < arguments.length) {
            original.call(this, arguments[i++]);
          }
        };
      };
      TemporaryPrototype.add = wrapVerifyToken(TemporaryPrototype.add);
      TemporaryPrototype.remove = wrapVerifyToken(TemporaryPrototype.remove);
      // toggle is broken too ^_^ ... let's fix it
      TemporaryPrototype.toggle = toggle;
    }
  }

  if (!('contains' in NodePrototype)) {
    defineProperty(NodePrototype, 'contains', {
      value: function (el) {
        while (el && el !== this) el = el.parentNode;
        return this === el;
      }
    });
  }

  if (!('head' in document)) {
    defineProperty(document, 'head', {
      get: function () {
        return head || (
          head = document.getElementsByTagName('head')[0]
        );
      }
    });
  }

  // requestAnimationFrame partial polyfill
  (function () {
    for (var
      raf,
      rAF = window.requestAnimationFrame,
      cAF = window.cancelAnimationFrame,
      prefixes = ['o', 'ms', 'moz', 'webkit'],
      i = prefixes.length;
      !cAF && i--;
    ) {
      rAF = rAF || window[prefixes[i] + 'RequestAnimationFrame'];
      cAF = window[prefixes[i] + 'CancelAnimationFrame'] ||
            window[prefixes[i] + 'CancelRequestAnimationFrame'];
    }
    if (!cAF) {
      // some FF apparently implemented rAF but no cAF 
      if (rAF) {
        raf = rAF;
        rAF = function (callback) {
          var goOn = true;
          raf(function () {
            if (goOn) callback.apply(this, arguments);
          });
          return function () {
            goOn = false;
          };
        };
        cAF = function (id) {
          id();
        };
      } else {
        rAF = function (callback) {
          return setTimeout(callback, 15, 15);
        };
        cAF = function (id) {
          clearTimeout(id);
        };
      }
    }
    window.requestAnimationFrame = rAF;
    window.cancelAnimationFrame = cAF;
  }());

  // http://www.w3.org/TR/dom/#customevent
  try{new window.CustomEvent('?');}catch(o_O){
    window.CustomEvent = function(
      eventName,
      defaultInitDict
    ){

      // the infamous substitute
      function CustomEvent(type, eventInitDict) {
        /*jshint eqnull:true */
        var event = document.createEvent(eventName);
        if (typeof type != 'string') {
          throw new Error('An event name must be provided');
        }
        if (eventName == 'Event') {
          event.initCustomEvent = initCustomEvent;
        }
        if (eventInitDict == null) {
          eventInitDict = defaultInitDict;
        }
        event.initCustomEvent(
          type,
          eventInitDict.bubbles,
          eventInitDict.cancelable,
          eventInitDict.detail
        );
        return event;
      }

      // attached at runtime
      function initCustomEvent(
        type, bubbles, cancelable, detail
      ) {
        /*jshint validthis:true*/
        this.initEvent(type, bubbles, cancelable);
        this.detail = detail;
      }

      // that's it
      return CustomEvent;
    }(
      // is this IE9 or IE10 ?
      // where CustomEvent is there
      // but not usable as construtor ?
      window.CustomEvent ?
        // use the CustomEvent interface in such case
        'CustomEvent' : 'Event',
        // otherwise the common compatible one
      {
        bubbles: false,
        cancelable: false,
        detail: null
      }
    );
  }

  // window.Event as constructor
  try { new Event('_'); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($Event) {
      function Event(type, init) {
        enoughArguments(arguments.length, 'Event');
        var out = document.createEvent('Event');
        if (!init) init = {};
        out.initEvent(
          type,
          !!init.bubbles,
          !!init.cancelable
        );
        return out;
      }
      Event.prototype = $Event.prototype;
      return Event;
    }(window.Event || function Event() {}));
    defineProperty(window, 'Event', {value: o_O});
    // Android 4 gotcha
    if (Event !== o_O) Event = o_O;
  }

  // window.KeyboardEvent as constructor
  try { new KeyboardEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($KeyboardEvent) {
      // code inspired by https://gist.github.com/termi/4654819
      var
        initType = 0,
        defaults = {
          char: '',
          key: '',
          location: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          altGraphKey: false,
          repeat: false,
          locale: navigator.language,
          detail: 0,
          bubbles: false,
          cancelable: false,
          keyCode: 0,
          charCode: 0,
          which: 0
        },
        eventType
      ;
      try {
        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent(
          'keyup', false, false, window, '+', 3,
          true, false, true, false, false
        );
        initType = (
          (e.keyIdentifier || e.key) == '+' &&
          (e.keyLocation || e.location) == 3
        ) && (
          e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4
        ) || 9;
      } catch(o_O) {}
      eventType = 0 < initType ? 'KeyboardEvent' : 'Event';

      function getModifier(init) {
        for (var
          out = [],
          keys = [
            'ctrlKey',
            'Control',
            'shiftKey',
            'Shift',
            'altKey',
            'Alt',
            'metaKey',
            'Meta',
            'altGraphKey',
            'AltGraph'
          ],
          i = 0; i < keys.length; i += 2
        ) {
          if (init[keys[i]])
            out.push(keys[i + 1]);
        }
        return out.join(' ');
      }

      function withDefaults(target, source) {
        for (var key in source) {
          if (
            source.hasOwnProperty(key) &&
            !source.hasOwnProperty.call(target, key)
          ) target[key] = source[key];
        }
        return target;
      }

      function withInitValues(key, out, init) {
        try {
          out[key] = init[key];
        } catch(o_O) {}
      }

      function KeyboardEvent(type, init) {
        enoughArguments(arguments.length, 'KeyboardEvent');
        init = withDefaults(init || {}, defaults);
        var
          out = document.createEvent(eventType),
          ctrlKey = init.ctrlKey,
          shiftKey = init.shiftKey,
          altKey = init.altKey,
          metaKey = init.metaKey,
          altGraphKey = init.altGraphKey,
          modifiers = initType > 3 ? getModifier(init) : null,
          key = String(init.key),
          chr = String(init.char),
          location = init.location,
          keyCode = init.keyCode || (
            (init.keyCode = key) &&
            key.charCodeAt(0)
          ) || 0,
          charCode = init.charCode || (
            (init.charCode = chr) &&
            chr.charCodeAt(0)
          ) || 0,
          bubbles = init.bubbles,
          cancelable = init.cancelable,
          repeat = init.repeat,
          locale = init.locale,
          view = init.view || window,
          args
        ;
        if (!init.which) init.which = init.keyCode;
        if ('initKeyEvent' in out) {
          out.initKeyEvent(
            type, bubbles, cancelable, view,
            ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode
          );
        } else if (0 < initType && 'initKeyboardEvent' in out) {
          args = [type, bubbles, cancelable, view];
          switch (initType) {
            case 1:
              args.push(key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
              break;
            case 2:
              args.push(ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
              break;
            case 3:
              args.push(key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
              break;
            case 4:
              args.push(key, location, modifiers, repeat, locale);
              break;
            default:
              args.push(char, key, location, modifiers, repeat, locale);
          }
          out.initKeyboardEvent.apply(out, args);
        } else {
          out.initEvent(type, bubbles, cancelable);
        }
        for (key in out) {
          if (defaults.hasOwnProperty(key) && out[key] !== init[key]) {
            withInitValues(key, out, init);
          }
        }
        return out;
      }
      KeyboardEvent.prototype = $KeyboardEvent.prototype;
      return KeyboardEvent;
    }(window.KeyboardEvent || function KeyboardEvent() {}));
    defineProperty(window, 'KeyboardEvent', {value: o_O});
    // Android 4 gotcha
    if (KeyboardEvent !== o_O) KeyboardEvent = o_O;
  }

  // window.MouseEvent as constructor
  try { new MouseEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($MouseEvent) {
      function MouseEvent(type, init) {
        enoughArguments(arguments.length, 'MouseEvent');
        var out = document.createEvent('MouseEvent');
        if (!init) init = {};
        out.initMouseEvent(
          type,
          !!init.bubbles,
          !!init.cancelable,
          init.view || window,
          init.detail || 1,
          init.screenX || 0,
          init.screenY || 0,
          init.clientX || 0,
          init.clientY || 0,
          !!init.ctrlKey,
          !!init.altKey,
          !!init.shiftKey,
          !!init.metaKey,
          init.button || 0,
          init.relatedTarget || null
        );
        return out;
      }
      MouseEvent.prototype = $MouseEvent.prototype;
      return MouseEvent;
    }(window.MouseEvent || function MouseEvent() {}));
    defineProperty(window, 'MouseEvent', {value: o_O});
    // Android 4 gotcha
    if (MouseEvent !== o_O) MouseEvent = o_O;
  }

}(window));(function (global){'use strict';

  // a WeakMap fallback for DOM nodes only used as key
  var DOMMap = global.WeakMap || (function () {

    var
      counter = 0,
      dispatched = false,
      drop = false,
      value
    ;

    function dispatch(key, ce, shouldDrop) {
      drop = shouldDrop;
      dispatched = false;
      value = undefined;
      key.dispatchEvent(ce);
    }

    function Handler(value) {
      this.value = value;
    }

    Handler.prototype.handleEvent = function handleEvent(e) {
      dispatched = true;
      if (drop) {
        e.currentTarget.removeEventListener(e.type, this, false);
      } else {
        value = this.value;
      }
    };

    function DOMMap() {
      counter++;  // make id clashing highly improbable
      this.__ce__ = new Event(('@DOMMap:' + counter) + Math.random());
    }

    DOMMap.prototype = {
      'constructor': DOMMap,
      'delete': function del(key) {
        return dispatch(key, this.__ce__, true), dispatched;
      },
      'get': function get(key) {
        dispatch(key, this.__ce__, false);
        var v = value;
        value = undefined;
        return v;
      },
      'has': function has(key) {
        return dispatch(key, this.__ce__, false), dispatched;
      },
      'set': function set(key, value) {
        dispatch(key, this.__ce__, true);
        key.addEventListener(this.__ce__.type, new Handler(value), false);
        return this;
      },
    };

    return DOMMap;

  }());

  function Dict() {}
  Dict.prototype = (Object.create || Object)(null);

  // https://dom.spec.whatwg.org/#interface-eventtarget

  function createEventListener(type, callback, options) {
    function eventListener(e) {
      if (eventListener.once) {
        e.currentTarget.removeEventListener(
          e.type,
          callback,
          eventListener
        );
        eventListener.removed = true;
      }
      if (eventListener.passive) {
        e.preventDefault = createEventListener.preventDefault;
      }
      if (typeof eventListener.callback === 'function') {
        /* jshint validthis: true */
        eventListener.callback.call(this, e);
      } else if (eventListener.callback) {
        eventListener.callback.handleEvent(e);
      }
      if (eventListener.passive) {
        delete e.preventDefault;
      }
    }
    eventListener.type = type;
    eventListener.callback = callback;
    eventListener.capture = !!options.capture;
    eventListener.passive = !!options.passive;
    eventListener.once = !!options.once;
    // currently pointless but specs say to use it, so ...
    eventListener.removed = false;
    return eventListener;
  }

  createEventListener.preventDefault = function preventDefault() {};

  var
    Event = global.CustomEvent,
    hOP = Object.prototype.hasOwnProperty,
    dE = global.dispatchEvent,
    aEL = global.addEventListener,
    rEL = global.removeEventListener,
    counter = 0,
    increment = function () { counter++; },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    getListenerKey = function (options) {
      return ''.concat(
        options.capture ? '1' : '0',
        options.passive ? '1' : '0',
        options.once ? '1' : '0'
      );
    },
    augment, proto
  ;

  try {
    aEL('_', increment, {once: true});
    dE(new Event('_'));
    dE(new Event('_'));
    rEL('_', increment, {once: true});
  } catch(o_O) {}

  if (counter !== 1) {
    (function () {
      var dm = new DOMMap();
      function createAEL(aEL) {
        return function addEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key = getListenerKey(options),
              i, tmp, wrap
            ;
            if (!info) dm.set(this, (info = new Dict()));
            if (!(type in info)) info[type] = {
              handler: [],
              wrap: []
            };
            tmp = info[type];
            i = indexOf.call(tmp.handler, handler);
            if (i < 0) {
              i = tmp.handler.push(handler) - 1;
              tmp.wrap[i] = (wrap = new Dict());
            } else {
              wrap = tmp.wrap[i];
            }
            if (!(key in wrap)) {
              wrap[key] = createEventListener(type, handler, options);
              aEL.call(this, type, wrap[key], wrap[key].capture);
            }
          } else {
            aEL.call(this, type, handler, options);
          }
        };
      }
      function createREL(rEL) {
        return function removeEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key, i, tmp, wrap
            ;
            if (info && (type in info)) {
              tmp = info[type];
              i = indexOf.call(tmp.handler, handler);
              if (-1 < i) {
                key = getListenerKey(options);
                wrap = tmp.wrap[i];
                if (key in wrap) {
                  rEL.call(this, type, wrap[key], wrap[key].capture);
                  delete wrap[key];
                  // return if there are other wraps
                  for (key in wrap) return;
                  // otherwise remove all the things
                  tmp.handler.splice(i, 1);
                  tmp.wrap.splice(i, 1);
                  // if there are no other handlers
                  if (tmp.handler.length === 0)
                    // drop the info[type] entirely
                    delete info[type];
                }
              }
            }
          } else {
            rEL.call(this, type, handler, options);
          }
        };
      }

      augment = function (Constructor) {
        if (!Constructor) return;
        var proto = Constructor.prototype;
        proto.addEventListener = createAEL(proto.addEventListener);
        proto.removeEventListener = createREL(proto.removeEventListener);
      };

      if (global.EventTarget) {
        augment(EventTarget);
      } else {
        augment(global.Text);
        augment(global.Element || global.HTMLElement);
        augment(global.HTMLDocument);
        augment(global.Window || {prototype:global});
        augment(global.XMLHttpRequest);
      }

    }());
  }

}(self));
},{}],67:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],68:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],69:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":67,"_process":73}],70:[function(require,module,exports){
/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */
'use strict';

var warning = require('fbjs/lib/warning');
var shallowEqual = require('fbjs/lib/shallowEqual');



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
}

/**
 * Returns a text description of the component that can be
 * used to identify it in error messages.
 *
 * @see https://github.com/facebook/react/blob/v15.4.0-rc.3/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js#L1143
 * @param {function} component The component.
 * @return {string} The name of the component.
 */
function getComponentName(component) {
  var constructor = component.prototype && component.prototype.constructor;

  return (
    component.displayName
    || (constructor && constructor.displayName)
    || component.name
    || (constructor && constructor.name)
    || 'a component'
  );
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  if (component.prototype.shouldComponentUpdate !== undefined) {
    // We're not using the condition mecanism of warning()
    // here to avoid useless calls to getComponentName().
    warning(
      false,
      'Cannot decorate `%s` with @pureRenderDecorator, '
      + 'because it already implements `shouldComponentUpdate().',
      getComponentName(component)
    )
  }

  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;

},{"fbjs/lib/shallowEqual":68,"fbjs/lib/warning":69}],71:[function(require,module,exports){
/*! tether 1.4.0 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));

},{}],72:[function(require,module,exports){

window.loadBlueprint=function(){
    window.deps = {
        'blueprint' : require("@blueprintjs/core"),
    }
    window.Blueprint = window.deps['blueprint'];
}

    





},{"@blueprintjs/core":64}],73:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[72]);
