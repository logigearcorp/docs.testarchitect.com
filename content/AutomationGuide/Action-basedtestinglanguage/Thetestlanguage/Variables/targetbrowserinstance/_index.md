--- 
title: "target browser instance"
linktitle: "target browser instance"
aliases: 
    - /TA_Automation/Topics/bis_target_browser_instance.html
---
# target browser instance {#bia_target_browser_instance .reference}

## Description {#section_b1x_zh3_wfb .section}

Determine if the [navigate](bia_navigate.html) built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL.

**Important:** This setting is dedicated to Generic WebDriver.

## Available values {#section_qk2_f33_wfb .section}

-   existing: \(Default\) Overwrite the currently active browser instance with the new URL.
-   new window: Open the new URL in a new window instance
-   new tab: Open the new URL in a new tab.

## Note: {#section_akr_52j_wfb .section}

-   This built-in setting only takes effect, if the window argument of the navigate built-in action is omitted.
-   If the window argument of the navigate built-in action is specified, it will choose the exact browser window upon which the URL is navigated to.
-   To support backward compatibility for your project, if necessary, you might use this built-in setting as a [startup setting](aut_startup_settings.html) with a desired value.

## Example {#section_zp1_2gj_wfb .section}

Suppose you have the following the scenario:

1.  Open Google Search to carry out test actions.
2.  Open Wikipedia in a new tab to carry test actions.
3.  Open Yahoo Mail in in the currently active web instance, overriding the current URL.

## Action Lines {#section_qfx_l33_wfb .section}

![](../Images/bia_target_browser_instance_pgm.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[skip manual check](../../TA_Automation/Topics/bis_skip_manual_check.html)

**Next topic:**[use browser](../../TA_Automation/Topics/bis_use_browser.html)

