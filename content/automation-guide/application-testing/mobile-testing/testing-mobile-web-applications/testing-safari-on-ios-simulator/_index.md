--- 
title: "Testing Safari on iOS Simulator"
linktitle: "Testing Safari on iOS Simulator"
description: "TestArchitect allows you to create and run automated tests of web applications in Safari on a simulated iOS device."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_iOS_simulator.html
keywords: "mobile web testing, Safari, iOS Simulator, Safari testing, iOS Simulator, iOS Simulator, Safari testing"
---

TestArchitect allows you to create and run automated tests of web applications in Safari on a simulated iOS device.

**Remember:** Ensure that the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) is closed prior to running automated tests.

Apple's Simulator allows you to rapidly prototype and test builds of your app during the development process. Installed as part of the Xcode tools, Simulator runs on your Mac and behaves like a standard Mac app while simulating an iPhone, iPad, Apple Watch, or Apple TV environment. \([Learn more](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html).\)

**Note:** At present, TestArchitect only supports automation on Simulator for iOS, not watchOS or tvOS.

## Supported iOS versions

TestArchitect supports the testing of web applications running within the Safari browser on the following versions of a simulated iOS device:

-   iOS 8.4
-   iOS 8.3

## Technological approach

-   Remote debugging is a remote web inspector for debugging web applications on the iOS Simulator. The following configuration must be set up to allow remote debugging to be performed:

    -   Enable **Web Inspector** of Safari on iOS Simulator \([Learn more](/TA_Automation/Topics/aut_app_testing_mobile_web_simulator_config.html).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows. \(Refer to [supported built-in actions](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari_actions.html).\)

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](/TA_Automation/Topics/bia_click.html), [tap](/TA_Automation/Topics/bia_tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](/TA_Automation/Topics/bia_click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](/TA_Automation/Topics/bia_set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](/TA_Automation/Topics/bia_select.html), [click list item](/TA_Automation/Topics/bia_click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](/TA_Automation/Topics/bia_set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](/TA_Automation/Topics/bia_enter.html), [set](/TA_Automation/Topics/bia_set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
