--- 
title: "click popup"
linktitle: "click popup"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_click_popup.html
---

## Description

Click a button in a popup.

**Important:** This action is dedicated to Generic WebDriver

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Arguments

-   button: button in the popup to be clicked.
    -   Allowable values: OK \(OK button\) and Cancel \(Cancel button\)
-   timeout:maximum time \(in seconds\) to wait for a button in the popup to be clicked.
    -   Default value: 3

## Example

You are testing a user management page. Upon clicking the Block button to block a user account, a confirmation dialog appears with the message “Do you really to block this user account?”. In the popup, the OK button is clicked.

## Action Lines

![](/images//Images/bia_click_popup_pgm.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

**Next topic:**[copy popup message](/TA_Automation/Topics/bia_copy_popup_message.html)

