--- 
title: "copy popup message"
linktitle: "copy popup message"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_copy_popup_message.html
---

## Description

Obtain the message in a popup and store it in a variable.

**Important:** This action is dedicated to Generic WebDriver.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Arguments

-   variable: is used to hold the message displayed in the popup.
-   timeout: maximum time \(in seconds\) to wait for the message in the popup to be obtained.

## Note

copy popup message does not include the [click popup](click_popup.html) action. Hence you ought to explicitly call the click popup action following copy popup message.

## Example

You are testing a registration page.

1.  When the test leaves one or two some mandatory fields blank and clicks the **Submit** button, a popup appears to show the missing required fields, for instance, "The email address is required".
2.  In the popup, the test will obtain the message and clicks the **OK** button.

## Action lines

![](/images//Images/bia_copy_popup_message_pgm.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[click popup](/TA_Automation/Topics/bia_click_popup.html)

**Next topic:**[delete cookies](/TA_Automation/Topics/bia_delete_cookies.html)

