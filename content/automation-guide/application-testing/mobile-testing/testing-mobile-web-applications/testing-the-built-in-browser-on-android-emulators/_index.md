--- 
title: "Testing the built-in browser on Android emulators"
linktitle: "Testing the built-in browser on Android emulators"
description: "TestArchitect automated tests may be created and run on web applications running within the built-in browser in Android emulators."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html
keywords: "mobile web testing, built-in browser, Android emulators, built-in browser testing, emulators"
---

TestArchitect automated tests may be created and run on web applications running within the built-in browser in Android emulators.

{{<remember>}} Ensure that the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) is closed prior to running automated tests.

## Supported Android emulators

-   [Android SDK](https://developer.android.com/studio/index.html) \(Software Development Kit\), which includes the Android Virtual Device \(AVD\) emulator that runs on your computer.
-   Genymotion Desktop. \([Learn more](https://www.genymotion.com/#!/).\)

## Supported Android versions

|API level|Android OS version|
|---------|------------------|
|API level 23|6.0|
|API level 22|5.1|
|API level 21|5.0.x|
|API level 19|4.4.x|

## Technological approach

-   Remote Debugging: Remote Debugging is a remote web inspector for debugging web applications on Android emulators. The following must be set up to allow remote debugging to be performed:

    -   Install TestArchitect Agent. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-the-built-in-browser-on-android-emulators/installing-testarchitect-agent).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows.

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click), [tap](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/tap)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-table-cell)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/set-list-check)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/select), [click list item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-list-item)|select-one, select-multiple|**click** \> **change**|
    |[set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter), [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
