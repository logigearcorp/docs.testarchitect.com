--- 
title: "target browser instance"
linktitle: "target browser instance"
description: "Description Determine if the navigate built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL. Important: This setting is dedicated to ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/bis_target_browser_instance.html
keywords: "built-in action, target browswer instance"
---

## Description {{< permerlink >}} {#bia_target_browser_instance__section_b1x_zh3_wfb} 

Determine if the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL.

{{<important>}} This setting is dedicated to Generic WebDriver.

## Available values {{< permerlink >}} {#bia_target_browser_instance__section_qk2_f33_wfb} 

-   existing: \(Default\) Overwrite the currently active browser instance with the new URL.
-   new window: Open the new URL in a new window instance
-   new tab: Open the new URL in a new tab.

## Note: {{< permerlink >}} {#bia_target_browser_instance__section_akr_52j_wfb} 

-   This built-in setting only takes effect, if the window argument of the navigate built-in action is omitted.
-   If the window argument of the navigate built-in action is specified, it will choose the exact browser window upon which the URL is navigated to.
-   To support backward compatibility for your project, if necessary, you might use this built-in setting as a [startup setting](/user-guide/test-execution/startup-settings/) with a desired value.

## Example {{< permerlink >}} {#bia_target_browser_instance__section_zp1_2gj_wfb} 

Suppose you have the following the scenario:

1.  Open Google Search to carry out test actions.
2.  Open Wikipedia in a new tab to carry test actions.
3.  Open Yahoo Mail in in the currently active web instance, overriding the current URL.

## Action Lines {{< permerlink >}} {#bia_target_browser_instance__section_qfx_l33_wfb} 

![](/images/TA_Automation/Images/bia_target_browser_instance_pgm.png)




