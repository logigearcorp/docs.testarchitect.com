--- 
title: "Testing the built-in browser on Android emulators"
linktitle: "Testing the built-in browser on Android emulators"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html
---

TestArchitect automated tests may be created and run on web applications running within the built-in browser in Android emulators.

**Remember:** Ensure that the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) is closed prior to running automated tests.

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

    -   Install TestArchitect Agent. \([Learn more](/TA_Automation/Topics/aut_app_testing_mobile_web_emulator_installing_TA_Agent.html).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows.

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](/TA_Automation/Topics/bia_click.html), [tap](/TA_Automation/Topics/bia_tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](/TA_Automation/Topics/bia_click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](/TA_Automation/Topics/bia_set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](/TA_Automation/Topics/bia_select.html), [click list item](/TA_Automation/Topics/bia_click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](/TA_Automation/Topics/bia_set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](/TA_Automation/Topics/bia_enter.html), [set](/TA_Automation/Topics/bia_set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
