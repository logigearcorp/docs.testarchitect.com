--- 
title: "enter value in popup"
linktitle: "enter value in popup"
description: "Description Write text in a field in a popup, and click OK . Important: This action is dedicated to Generic WebDriver. Arguments value : the input text. timeout : maximum time (in seconds) to wait for ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_enter_value_in_popup.html
keywords: "built-in action, enter value in popup"
---

## {{< expand >}} Description {{< permerlink >}} {#bia_enter_value_in_popup__section_b1x_zh3_wfb} 

Write text in a field in a popup, and click **OK**.

{{<important>}} This action is dedicated to Generic WebDriver.

## {{< expand >}} Arguments {{< permerlink >}} {#bia_enter_value_in_popup__section_qk2_f33_wfb} 

-   value: the input text.
-   timeout: maximum time \(in seconds\) to wait for a value to be input in the popup. Default value: 3.

## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Note {{< permerlink >}} {#bia_enter_value_in_popup__section_amm_1rj_wfb} 

The enter value in popup action includes the [click popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-popup) action. That means upon inputting a value in a popup, TestArchitect will automatically click **OK** in the popup to close it. You do not need to explicitly call the click popup action following the enter value in popup action.

## {{< expand >}} Example {{< permerlink >}} {#bia_enter_value_in_popup__section_y51_phj_wfb} 

You are testing the subscription feature of a news page.

1.  When you click the **Subscribe** button in the page, a popup appears so that you can enter your email address.
2.  The test enters an email address, e.g. james.doe@yahoo.com, in the popup.

## {{< expand >}} Action lines {{< permerlink >}} {#bia_enter_value_in_popup__section_ict_zrj_wfb} 

![](/images/TA_Automation/Images/bia_enter_value_in_popup_pgm.png)






