--- 
title: "Navigate fails to open additional tabs with WebDriver on Internet Explorer"
linktitle: "Navigate fails to open additional tabs with WebDriver on Internet Explorer"
weight: 122
aliases: 
    - /TA_FAQ/Topics/0x80020009L.html
---

## Problem

In the event of launching a web page on a new tab on Internet Explorer,

-   For the first time navigate works fine.
-   For subsequent times, navigate fails to open a new tab and direct to a web page.

Assuming that you have the following action lines.

![](/images//Images/tshoot_WebDriver_.navigate_IE.png)

Line \#15: setting \[target browser instance\] \[new tab\] is to open a new tab on Internet Explorer browser when using navigate action.

Line \#21: navigate \[https//google.com.vn\] works fine.

Line \#23: navigate\[https//www.netflix.com/vn/\] fails to open a new tab.

## Cause

As its limitation, WebDriver always opens a new window instead of a new tab on Internet Explorer.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**['Navigate' fails to open additional tabs with WebDriver on Edge](/TA_FAQ/Topics/0x80020008L.html)

**Next topic:**[Cannot “go back/ go forward” on Internet Explorer 11](/TA_FAQ/Topics/0x80020010L.html)

