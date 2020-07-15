--- 
title: "switch window"
linktitle: "switch window"
description: "Description Switch to another window instance. Important: This action is dedicated to Generic WebDriver. Arguments window : TestArchitect name of the window. handle : (Optional) The window handle of ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_switch_window.html
keywords: "built-in setting, switch window"
---

## Description {{< permerlink >}} {#bia_switch_window__section_b1x_zh3_wfb} 

Switch to another window instance.

{{<important>}} This action is dedicated to Generic WebDriver.

## Arguments {{< permerlink >}} {#bia_switch_window__section_qk2_f33_wfb} 

-   window: TestArchitect name of the window.
-   handle: \(Optional\) The window handle of the desired window instance, which is obtained by the [identify windows](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/identify-windows) built-in action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Note {{< permerlink >}} {#bia_switch_window__section_amm_1rj_wfb} 

-   Each window instance is assigned a unique ID, which is called window handle.
-   This unique ID is necessary when you want to switch among several windows which have identical definitions.
-   You can obtain the window handle of identical window instances by using the identify windows action.

## Example {{< permerlink >}} {#bia_switch_window__section_uxg_4zj_wfb} 

Suppose you are testing a customer live chat service that offers the fastest way to provide customer support on your website. There are two identical windows, one for the client, and the other for the supporter. In your test procedures, you have to switch between the client window and supporter window. This ensures that whatever the client enquires will appear on the supporter window.

## Action lines {{< permerlink >}} {#bia_switch_window__section_ryc_tzj_wfb} 

![](/images/TA_Automation/Images/bia_switch_window_pgm.png)



