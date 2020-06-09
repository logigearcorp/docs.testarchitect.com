--- 
title: "Testing Google Chrome on Android"
linktitle: "Testing Chrome on Android"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android.html
---

With TestArchitect, automated tests may be created and run on web applications running within Chrome for Android.

**Note:**

-   Testing Chrome Android must be done by means of a USB cable connection.
-   The Android mobile device under test may be a physical device or an emulator.
-   Ensure that the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) is closed prior to running automated tests.

## Support Android emulators

-   [Android SDK](https://developer.android.com/studio/index.html) \(Software Development Kit\), which includes the Android Virtual Device \(AVD\) emulator that runs on your computer.

## Supported Android versions

TestArchitect supports of the testing of web applications running within the Chrome browser on the following Android versions:

|API level|Android OS version|
|---------|------------------|
|API level 26|8.0|
|API level 24|7.0|
|API level 23|6.0|
|API level 22|5.1|
|API level 21|5.0.x|
|API level 19|4.4.x|
|API level 18|4.3.x|
|API level 17|4.2.x|
|API level 16|4.1.x|
|API level 15|4.0.3 - 4.0.4|
|API level 14|4.0 - 4.0.2|

## Supported web browser

TestArchitect supports testing on Google Chrome browser, up to version 69.

## Technological approach

-   Remote debugging is a remote web inspector for debugging web applications on Android devices. The following configurations must be set up to allow remote debugging to be performed:

    -   Physically connect the Android device to the TestArchitect controller via USB cable during test automation.
    -   [Install TestArchitect Agent](aut_app_testing_mobile_web_Chrome_installing_TA_Agent.html).
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows. \(Refer to [List of supported built-in actions for Chrome on Android](aut_app_testing_mobile_web_Chrome_actions.html).\)

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](click.html), [tap](tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](select.html), [click list item](click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](enter.html), [set](set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
