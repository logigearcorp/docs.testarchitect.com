--- 
title: "copy popup message"
linktitle: "copy popup message"
aliases: 
    - /TA_Automation/Topics/bia_copy_popup_message.html
---
# copy popup message {#bia_copy_popup_message .reference}

## Description {#section_b1x_zh3_wfb .section}

Obtain the message in a popup and store it in a variable.

**Important:** This action is dedicated to Generic WebDriver.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Arguments {#section_qk2_f33_wfb .section}

-   variable: is used to hold the message displayed in the popup.
-   timeout: maximum time \(in seconds\) to wait for the message in the popup to be obtained.

## Note {#section_u5l_q4j_wfb .section}

copy popup message does not include the [click popup](bia_click_popup.html) action. Hence you ought to explicitly call the click popup action following copy popup message.

## Example {#section_y51_phj_wfb .section}

You are testing a registration page.

1.  When the test leaves one or two some mandatory fields blank and clicks the **Submit** button, a popup appears to show the missing required fields, for instance, "The email address is required".
2.  In the popup, the test will obtain the message and clicks the **OK** button.

## Action lines {#section_s3k_jpj_wfb .section}

![](../Images/bia_copy_popup_message_pgm.png)

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[click popup](../../TA_Automation/Topics/bia_click_popup.html)

**Next topic:**[delete cookies](../../TA_Automation/Topics/bia_delete_cookies.html)

