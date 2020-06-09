--- 
title: "delete cookies"
linktitle: "delete cookies"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_delete_cookies.html
keywords: "delete cookies, delete cookies in browser, delete file cookes in browser, clear cookies in browser, clear browser cookies"
---

## Description

Delete all cookies in the browser.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action deletes all cookies of the browser currently specified by the [use browser](use_browser.html) built-in setting.
-   With Android and iOS mobile testing, delete cookies only removes the cookies of the current website.
-   For the Firefox and Chrome desktop browsers, it is necessary to close all instances of the browser *prior* to running delete cookies; otherwise an automation error occurs. \(Note that this rule does not apply to the Internet Explorer browser.\)

## Applicable Built-In Settings

The following settings are applicable to this action:[use browser](use_browser.html).

## Example

**Action Lines**

![](/images//Images/bia_delete_cookies_pgm.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[copy popup message](/TA_Automation/Topics/bia_copy_popup_message.html)

**Next topic:**[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

