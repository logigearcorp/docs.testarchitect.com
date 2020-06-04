--- 
title: "'Navigate' fails to open additional tabs with WebDriver on Edge"
linktitle: "'Navigate' fails to open additional tabs with WebDriver on Edge"
weight: 121
aliases: 
    - /TA_FAQ/Topics/0x80020008L.html
---

## Problem

In the event of launching a web page on a new tab on Edge,

-   For the first time navigate works fine.
-   For subsequent times, navigate fails to open a new tab and direct to a web page.

Assuming that you have the following action lines.

![](/images//Images/tshoot_WebDriver_.navigate_Edge.png)

Line \#11: setting \[target browser instance\] \[new tab\] is to open a new tab on Edge browser when using the navigate action.

Line \#17: navigate \[https//google.com.vn\] works fine.

Line \#19: navigate\[https//www.netflix.com/vn/\] fails to open a new tab.

## Cause

When navigate attempts to open the second/third/etc.tab, Edge will treat the tab as a pop-up, blocking it.

## Solution

You should turn off the **Block pop-ups** feature on Edge \([Learn more](https://support.microsoft.com/en-us/help/4026392/microsoft-edge-block-pop-ups)\) before running TestArchitect tests with WebDriver.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Syntax error in element dynamic identifiers](/TA_FAQ/Topics/0x80020006L-1.html)

**Next topic:**[Navigate fails to open additional tabs with WebDriver on Internet Explorer](/TA_FAQ/Topics/0x80020009L.html)

