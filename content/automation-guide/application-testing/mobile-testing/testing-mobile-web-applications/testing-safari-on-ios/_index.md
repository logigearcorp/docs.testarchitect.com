--- 
title: "Testing Safari on iOS"
linktitle: "Testing Safari on iOS"
description: "With TestArchitect, automated tests may be created and run on web applications running within Safari on iOS."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html
keywords: "mobile web testing, Safari, Safari testing, iOS"
---

With TestArchitect, automated tests may be created and run on web applications running within Safari on iOS.

{{<caution>}}

-   Testing Safari on iOS must be done via USB cable connection.
-   TestArchitect does not support capturing native iOS dialog boxes - that is, ones that, regardless of origin, are posted by the operating system rather than directly from the application. \(An example of such a dialog box would be one displaying the message <app name\> Would Like To Use Your Current Location, which originates from an application submitting a request to iOS, which then presents the popup.\)

## Supported iOS versions

TestArchitect supports the testing of web applications running within the Safari browser on the following iOS versions:

-   iOS 8.4
-   iOS 9.3.x, iOS 9.2.x, iOS 9.1, iOS 9.0
-   iOS 10.3.x
-   iOS 11.4

## Technological approach  

-   Remote debugging is a remote web inspector for debugging web applications on iOS devices. The following configurations must be set up to allow remote debugging to be performed:

    -   Physically connect the iOS device to the TestArchitect controller via USB cable during test automation.
    -   Enable Web Inspector on the iOS device. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/prerequisites/configuring-ios-devices-and-macos-machines).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows. \(Refer to [List of supported Safari iOS built-in actions](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/supported-safari-ios-actions).\)

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click), [tap](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/tap)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-table-cell)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/set-list-check)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/select), [click list item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-list-item)|select-one, select-multiple|**click** \> **change**|
    |[set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter), [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
