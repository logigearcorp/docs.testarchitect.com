--- 
title: "auto switch window"
linktitle: "auto switch window"
aliases: 
    - /TA_Automation/Topics/bis_auto_switch_windows.html
---
# auto switch window {#bia_auto_switch_windows .reference}

## Description {#section_b1x_zh3_wfb .section}

Determine whether TestArchitect automatically switches among window instances.

**Important:** This setting is dedicated to Generic WebDriver.

## Usage of auto switch window {#section_bhv_xtz_xfb .section}

When you open a new window instance and the auto switch window mode is on, the focus will be shifted to the newly opened window instance.

However, when the auto switch window mode is off, the focus will stay in the current window instance. In the event that you want to interact with the newly opened window instance, you are required to explicitly use the [switch window](bia_switch_window.html) built-in action.

## Allowable values {#section_qk2_f33_wfb .section}

-   yes: Automatically switch among window instances.
-   no: \(Default\) Do not automatically switch among window instances.

## Example {#section_epf_z5j_wfb .section}

Suppose you have the following scenario:

1.  In the **Home** window, search for a new item, and then click the **Search** button.

    The **Search** window is opened in a new browser window with search results.

2.  Switch to the **Search** window, and perform checkpoint verifications.

## Action lines {#section_d3z_gvj_wfb .section}

![](../Images/bia_auto_switch_windows_off_pgm.png)

![](../Images/bia_auto_switch_windows_on_pgm.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[anchor pos report](../../TA_Automation/Topics/bis_anchor_pos_report.html)

**Next topic:**[character recognition technique](../../TA_Automation/Topics/bis_character_recognition_technique.html)

