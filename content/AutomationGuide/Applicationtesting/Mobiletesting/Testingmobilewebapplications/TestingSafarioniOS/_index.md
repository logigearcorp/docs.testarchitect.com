--- 
title: "Testing Safari on iOS"
linktitle: "Testing Safari on iOS"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html
---
# Testing Safari on iOS {#concept_qbz_1fc_vp .concept}

With TestArchitect, automated tests may be created and run on web applications running within Safari on iOS.

CAUTION:

-   Testing Safari on iOS must be done via USB cable connection.
-   TestArchitect does not support capturing native iOS dialog boxes - that is, ones that, regardless of origin, are posted by the operating system rather than directly from the application. \(An example of such a dialog box would be one displaying the message <app name\> Would Like To Use Your Current Location, which originates from an application submitting a request to iOS, which then presents the popup.\)

## Supported iOS versions { .section}

TestArchitect supports the testing of web applications running within the Safari browser on the following iOS versions:

-   iOS 8.4
-   iOS 9.3.x, iOS 9.2.x, iOS 9.1, iOS 9.0
-   iOS 10.3.x
-   iOS 11.4

## Technological approach {#section_hjf_dzn_gq .section}

-   Remote debugging is a remote web inspector for debugging web applications on iOS devices. The following configurations must be set up to allow remote debugging to be performed:

    -   Physically connect the iOS device to the TestArchitect controller via USB cable during test automation.
    -   Enable Web Inspector on the iOS device. \([Learn more](aut_app_testing_mobile_web_Safari_configurations.html).\)
-   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI action, TestArchitect calls a sequence of events as follows. \(Refer to [List of supported Safari iOS built-in actions](aut_app_testing_mobile_web_Safari_actions.html).\)

    |Built-in actions|Applicable controls|Sequence of events triggered|
    |----------------|-------------------|----------------------------|
    |[click](bia_click.html), [tap](bia_tap.html)|all controls|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[click table cell](bia_click_table_cell.html)|table|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[set list check](bia_set_list_check.html)|ul, ol|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[select](bia_select.html), [click list item](bia_click_list_item.html)|select-one, select-multiple|**click** \> **change**|
    |[set](bia_set.html)|input-checkbox, input-radio|**touchstart** \> **touchend** \> **mouseover** \> **mousedown** \> **focus** \> **mouseup** \> **click**|
    |[enter](bia_enter.html), [set](bia_set.html)|input-text, input-password, input-search, input-tel, input-url, input-email, input-number|**keydown** \> **keypress** \> **input** \> **keyup** \> **change**|
    |textarea|**keydown** \> **keypress** \> **input** \> **keyup**|


1.  [Safari iOS testing prerequisites](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_prerequesites.html)  
Guides to setting up Safari iOS automation under TestArchitect.
2.  [Invoking Safari on iOS during automation](../../TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Safari.html)  
There are two methods by which Safari may be invoked on iOS devices:
3.  [Handling JavaScript popups on Safari iOS](../../TA_Automation/Topics/aut_app_testing_safari_apps_popups.html)  
TestArchitect offers a special set of actions for interfacing with JavaScript popups, which include alerts, prompts and confirmation dialogs.
4.  [List of supported Safari iOS built-in actions](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_actions.html)  
Built-in actions supported by TestArchitect for testing Safari on iOS.
5.  [Limitations and workarounds of testing Safari on iOS](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_limitations.html)  
This topic categorizes some limitations you might encounter in testing web applications in Safari on iOS. Applicable workarounds, if available, are also discussed.

**Parent topic:**[Testing mobile web applications](../../TA_Automation/Topics/aut_app_testing_mobile_web.html)

**Next topic:**[Testing Google Chrome on Android](../../TA_Automation/Topics/aut_app_testing_mobile_web_Android.html)

