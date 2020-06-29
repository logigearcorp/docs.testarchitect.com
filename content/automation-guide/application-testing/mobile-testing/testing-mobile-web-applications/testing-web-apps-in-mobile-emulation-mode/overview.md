--- 
title: "Testing web apps in mobile emulation mode - Overview"
linktitle: "Testing web apps in mobile emulation mode - Overview"
description: "Mobile web testing can be challenging and tedious, thanks to the large variety of mobile devices, platforms and screen sizes. TestArchitect addresses this challenge by letting you test mobile web applications on device emulators. Without the need for real physical devices of every type to ensure full testing coverage, your testing setup and maintenance is highly simplified."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools.html
keywords: "mobile web testing, emulation mode, overview, Google Chrome, emulation testing, overview, Chrome, emulation testing, Google Chrome, overview"
---

Mobile web testing can be challenging and tedious, thanks to the large variety of mobile devices, platforms and screen sizes. TestArchitect addresses this challenge by letting you test mobile web applications on device emulators. Without the need for real physical devices of every type to ensure full testing coverage, your testing setup and maintenance is highly simplified.

Developers use various techniques to make mobile web applications adapt to different mobile devices and screen sizes. Specifically,

-   Responsive web design lets websites conform their page layouts to various screen sizes and dimensions.

-   Platform detection allows websites to present device-specific content.


Testing on emulators helps verify that your mobile web application looks and works well on various devices, before you actually test the web application on real physical devices.

## Emulation of mobile browsers with Chrome Dev Tools

TestArchitect uses Google Chrome's Device Mode to emulate mobile browsers. The updated [Device Mode](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/) \(since Chrome 49\) is an integral part of the now-mobile-first [DevTools](https://developer.chrome.com/devtools).

![](/images/TA_Automation/Images/chrome_device_mode_iPhone6.png)

Although Chrome's Device Mode offers many powerful emulation tools, it does have some limitations. \([Learn more](https://developer.chrome.com/devtools/docs/device-mode#limitations).\)

{{<important>}}

-   Test procedures developed for testing web applications on desktop browsers and/or real devices can be applied to testing on mobile emulators. Note that this requires that the UI controls of the applications be captured with their [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) properties. An additional built-in action \([send command to browser](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/send-command-to-browser)\) must also be used and configured within tests to invoke the desired emulator\(s\).\([Learn more](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/launching-mobile-browser-emulator).\)
-   It should be noted that, upon conclusion of an automated run on the emulator, the Chrome browser automatically switches out of Device Mode and returns to Desktop Mode.

{{<restriction>}} TestArchitect's [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and [point-to-identify mode](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) are not supported for UI object identification and capture on mobile emulators.

## Supported platforms

-   Windows:
    -   Chrome desktop 49 and later versions.
    -   All types of available mobile emulators in the Device Mode of Chrome DevTools.

## Technological approach

-   Event-fired action model: TestArchitect attempts to implement built-in actions in a manner that, from the standpoint of the AUT, is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events, as outlined in the following table.

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click), [tap](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/tap)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-table-cell)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/set-list-check)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/select), [click list item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-list-item)|select-one, select-multiple|**click** \> **change**|
    |[set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter), [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
