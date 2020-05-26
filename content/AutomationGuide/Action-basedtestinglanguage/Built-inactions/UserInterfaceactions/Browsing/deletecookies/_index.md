--- 
title: "delete cookies"
linktitle: "delete cookies"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_delete_cookies.html
---
# delete cookies {#bia_delete_cookies .reference}

## Description { .section}

Delete all cookies in the browser.

## Arguments { .section}

There are no arguments for this action.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action deletes all cookies of the browser currently specified by the [use browser](bis_use_browser.html) built-in setting.
-   With Android and iOS mobile testing, delete cookies only removes the cookies of the current website.
-   For the Firefox and Chrome desktop browsers, it is necessary to close all instances of the browser *prior* to running delete cookies; otherwise an automation error occurs. \(Note that this rule does not apply to the Internet Explorer browser.\)

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[use browser](bis_use_browser.html).

## Example { .section}

**Action Lines**

![](../Images/bia_delete_cookies_pgm.png)

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[copy popup message](../../TA_Automation/Topics/bia_copy_popup_message.html)

**Next topic:**[enter text on next popup](../../TA_Automation/Topics/bia_enter_text_on_next_popup.html)

