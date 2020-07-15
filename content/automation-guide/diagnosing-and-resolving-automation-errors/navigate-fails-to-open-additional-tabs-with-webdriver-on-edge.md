--- 
title: "'Navigate' fails to open additional tabs with WebDriver on Edge"
linktitle: "'Navigate' fails to open additional tabs with WebDriver on Edge"
description: "Problem In the event of launching a web page on a new tab on Edge, For the first time navigate works fine. For subsequent times, navigate fails to open a new tab and direct to a web page. Assuming ..."
weight: 121
aliases: 
    - /TA_FAQ/Topics/0x80020008L.html
keywords: "automation errors, 0x16896"
---

## Problem {{< permerlink >}} {#reference_0x16896__section_zb2_yby_dgb} 

In the event of launching a web page on a new tab on Edge,

-   For the first time navigate works fine.
-   For subsequent times, navigate fails to open a new tab and direct to a web page.

Assuming that you have the following action lines.

![](/images/TA_FAQ/Images/tshoot_WebDriver_.navigate_Edge.png)

Line \#11: setting \[target browser instance\] \[new tab\] is to open a new tab on Edge browser when using the navigate action.

Line \#17: navigate \[https//google.com.vn\] works fine.

Line \#19: navigate\[https//www.netflix.com/vn/\] fails to open a new tab.

## Cause {{< permerlink >}} {#reference_0x16896__section_tth_b1l_2gb} 

When navigate attempts to open the second/third/etc.tab, Edge will treat the tab as a pop-up, blocking it.

## Solution {{< permerlink >}} {#reference_0x16896__section_tpf_pdl_2gb} 

You should turn off the **Block pop-ups** feature on Edge \([Learn more](https://support.microsoft.com/en-us/help/4026392/microsoft-edge-block-pop-ups)\) before running TestArchitect tests with WebDriver.



