--- 
title: "Testing web apps in mobile emulation mode - Overview"
linktitle: "Overview"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools.html
---

Mobile web testing can be challenging and tedious, thanks to the large variety of mobile devices, platforms and screen sizes. TestArchitect addresses this challenge by letting you test mobile web applications on device emulators. Without the need for real physical devices of every type to ensure full testing coverage, your testing setup and maintenance is highly simplified.

Developers use various techniques to make mobile web applications adapt to different mobile devices and screen sizes. Specifically,

-   Responsive web design lets websites conform their page layouts to various screen sizes and dimensions.

-   Platform detection allows websites to present device-specific content.


Testing on emulators helps verify that your mobile web application looks and works well on various devices, before you actually test the web application on real physical devices.

## Emulation of mobile browsers with Chrome Dev Tools

TestArchitect uses Google Chrome's Device Mode to emulate mobile browsers. The updated [Device Mode](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/) \(since Chrome 49\) is an integral part of the now-mobile-first [DevTools](https://developer.chrome.com/devtools).

![](/images//Images/chrome_device_mode_iPhone6.png)

Although Chrome's Device Mode offers many powerful emulation tools, it does have some limitations. \([Learn more](https://developer.chrome.com/devtools/docs/device-mode#limitations).\)

**Important:**

-   Test procedures developed for testing web applications on desktop browsers and/or real devices can be applied to testing on mobile emulators. Note that this requires that the UI controls of the applications be captured with their [XPath](/TA_Help/Topics/prop_xpath.html) properties. An additional built-in action \([send command to browser](send_command_to_browser.html)\) must also be used and configured within tests to invoke the desired emulator\(s\).\([Learn more](aut_app_testing_responsive_web_Chrome_DevTools_launching_emulator.html).\)
-   It should be noted that, upon conclusion of an automated run on the emulator, the Chrome browser automatically switches out of Device Mode and returns to Desktop Mode.

**Restriction:** TestArchitect's [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify mode](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) are not supported for UI object identification and capture on mobile emulators.

## Supported platforms

-   Windows:
    -   Chrome desktop 49 and later versions.
    -   All types of available mobile emulators in the Device Mode of Chrome DevTools.

## Technological approach

-   Event-fired action model: TestArchitect attempts to implement built-in actions in a manner that, from the standpoint of the AUT, is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events, as outlined in the following table.

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](click.html), [tap](tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](select.html), [click list item](click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](enter.html), [set](set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
