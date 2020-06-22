--- 
title: "delete cookies"
linktitle: "delete cookies"
description: "Description Delete all cookies in the browser. Arguments There are no arguments for this action. Valid contexts This action may be used within the following project items: test modules and ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_delete_cookies.html
keywords: "built-in actions, delete cookies, delete cookies (action), iOS (action), delete cookies, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), delete cookies in browser, delete file cookes in browser, clear cookies in browser, clear browser cookies"
---

## Description

Delete all cookies in the browser.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action deletes all cookies of the browser currently specified by the [use browser](/TA_Automation/Topics/bis_use_browser.html) built-in setting.
-   With Android and iOS mobile testing, delete cookies only removes the cookies of the current website.
-   For the Firefox and Chrome desktop browsers, it is necessary to close all instances of the browser *prior* to running delete cookies; otherwise an automation error occurs. \(Note that this rule does not apply to the Internet Explorer browser.\)

## Applicable Built-In Settings

The following settings are applicable to this action:[use browser](/TA_Automation/Topics/bis_use_browser.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_delete_cookies_pgm.png)




