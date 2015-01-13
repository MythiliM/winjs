// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
define([
    'WinJS/Core/_WinJS',
    'WinJS/Core',
    'WinJS/Promise',
    'WinJS/_Signal',
    'WinJS/Scheduler',
    'WinJS/Utilities',
    'WinJS/Utilities/_XYFocus',
    'WinJS/Utilities/_Telemetry',
    'WinJS/Fragments',
    'WinJS/Application',
    'WinJS/Navigation',
    'WinJS/Animations',
    'WinJS/Binding',
    'WinJS/BindingTemplate',
    'WinJS/BindingList',
    'WinJS/Res',
    'WinJS/Pages',
    'WinJS/ControlProcessor',
    'WinJS/Controls/HtmlControl',
    'WinJS/VirtualizedDataSource',
    'WinJS/Controls/IntrinsicControls',
    'WinJS/Controls/ListView',
    'WinJS/Controls/FlipView',
    'WinJS/Controls/ItemContainer',
    'WinJS/Controls/Repeater',
    'WinJS/Controls/DatePicker',
    'WinJS/Controls/TimePicker',
    'WinJS/Controls/BackButton',
    'WinJS/Controls/Rating',
    'WinJS/Controls/ToggleSwitch',
    'WinJS/Controls/SemanticZoom',
    'WinJS/Controls/Pivot',
    'WinJS/Controls/Hub',
    'WinJS/Controls/Flyout',
    'WinJS/Controls/AppBar',
    'WinJS/Controls/Menu',
    'WinJS/Controls/SearchBox',
    'WinJS/Controls/SettingsFlyout',
    'WinJS/Controls/NavBar',
    'WinJS/Controls/Tooltip',
    'WinJS/Controls/ViewBox',
    'WinJS/Controls/ContentDialog',
    'WinJS/Controls/ToolBar',
    'WinJS/Controls/SplitView'
    ], function (_WinJS) {
    "use strict";

    _WinJS.Namespace.define("WinJS.Utilities", {
        _require: require,
        _define: define
    });

    arguments[7].send("WinJSVersion", { version: _WinJS.Utilities._version });

    return _WinJS;
});