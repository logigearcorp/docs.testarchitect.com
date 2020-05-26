--- 
title: "enter value in popup"
linktitle: "enter value in popup"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_enter_value_in_popup.html
---
# enter value in popup {#bia_enter_value_in_popup .reference}

## Description {#section_b1x_zh3_wfb .section}

Write text in a field in a popup, and click **OK**.

**Important:** This action is dedicated to Generic WebDriver.

## Arguments {#section_qk2_f33_wfb .section}

-   value: the input text.
-   timeout: maximum time \(in seconds\) to wait for a value to be input in the popup. Default value: 3.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Note {#section_amm_1rj_wfb .section}

The enter value in popup action includes the [click popup](bia_click_popup.html) action. That means upon inputting a value in a popup, TestArchitect will automatically click **OK** in the popup to close it. You do not need to explicitly call the click popup action following the enter value in popup action.

## Example {#section_y51_phj_wfb .section}

You are testing the subscription feature of a news page.

1.  When you click the **Subscribe** button in the page, a popup appears so that you can enter your email address.
2.  The test enters an email address, e.g. james.doe@yahoo.com, in the popup.

## Action lines![](../Images/bia_enter_value_in_popup_pgm.png)

 {#section_ict_zrj_wfb .section}

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[enter text on next popup](../../TA_Automation/Topics/bia_enter_text_on_next_popup.html)

**Next topic:**[exec script](../../TA_Automation/Topics/bia_exec_script.html)

