--- 
title: "Testing the built-in browser on Android emulators"
linktitle: "Testing the built-in browser on Android emulators"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html
---
# Testing the built-in browser on Android emulators {#concept_hmq_mkc_xt .concept}

TestArchitect automated tests may be created and run on web applications running within the built-in browser in Android emulators.

**Remember:** Ensure that the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) is closed prior to running automated tests.

## Supported Android emulators { .section}

-   [Android SDK](https://developer.android.com/studio/index.html) \(Software Development Kit\), which includes the Android Virtual Device \(AVD\) emulator that runs on your computer.
-   Genymotion Desktop. \([Learn more](https://www.genymotion.com/#!/).\)

## Supported Android versions { .section}

|API level|Android OS version|
|---------|------------------|
|API level 23|6.0|
|API level 22|5.1|
|API level 21|5.0.x|
|API level 19|4.4.x|

## Technological approach { .section}

-   Remote Debugging: Remote Debugging is a remote web inspector for debugging web applications on Android emulators. The following must be set up to allow remote debugging to be performed:

    -   Install TestArchitect Agent. \([Learn more](aut_app_testing_mobile_web_emulator_installing_TA_Agent.html).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows.

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](bia_click.html), [tap](bia_tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](bia_click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](bia_set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](bia_select.html), [click list item](bia_click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](bia_set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](bia_enter.html), [set](bia_set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
    |textarea|**keydown** \> **keypress** \> **input** \> **keyup**|


1.  [Installing TestArchitect Agent onto Android emulators](../../TA_Automation/Topics/aut_app_testing_mobile_web_emulator_installing_TA_Agent.html)  
TestArchitect Agent is an essential component in allowing TestArchitect to communicate with the built-in browser running on Android emulators during automated testing.
2.  [Invoking the built-in browser in Android emulator during automation](../../TA_Automation/Topics/aut_app_testing_mobile_web_emulator_invoking_browser.html)  
There are two methods by which the built-in browser may be invoked in Android emulators.
3.  [Automation testing on the built-in browser in Android emulators](../../TA_Automation/Topics/aut_app_testing_mobile_web_emulator_automation.html)  
After having completed the prerequisites, you can now start to automate your tests on the built-in browser in the target Android emulators.

**Parent topic:**[Testing mobile web applications](../../TA_Automation/Topics/aut_app_testing_mobile_web.html)

**Previous topic:**[Testing Google Chrome on Android](../../TA_Automation/Topics/aut_app_testing_mobile_web_Android.html)

**Next topic:**[Testing Safari on iOS Simulator](../../TA_Automation/Topics/aut_app_testing_mobile_web_iOS_simulator.html)

