--- 
title: "switch frame by path"
linktitle: "switch frame by path"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_switch_frame_by_path.html
---
# switch frame by path {#bia_switch_frame_by_path .reference}

## Description {#section_b1x_zh3_wfb .section}

Switch the focus to the target frame defined by frame path. \([Learn more](https://www.guru99.com/handling-iframes-selenium.html)\)

**Important:** This action is dedicated to Generic WebDriver.

## When to 'switch frame' {#when_to_switch_frame .section}

In a web page with multiple frames, you have to switch the focus to the frame containing the element before locating the element.

## Argument {#section_qk2_f33_wfb .section}

-   frame path: the path from current frame to the destination frame.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Note {#section_rpk_5rw_yfb .section}

-   switch frame by path cannot move the focus back to its parent frame or default page. To move the focus to the parent frame or default page. You ought to adopt the [switch frame by destination](bia_switch_frame_by_destination.html) action.

## Example![](../Images/bia_switch_frame_by_path_illustration.png)

 {#section_y51_phj_wfb .section}

The current frame is 'frame 1'. You want to switch to 'frame 3'.

## Action Lines![](../Images/bia_switch_frame_by_path_pgm.png)

 {#section_qfx_l33_wfb .section}

**Parent topic:**[WebDriver](../../TA_Automation/Topics/built_in_actions_WebDriver.html)

**Previous topic:**[switch frame by destination](../../TA_Automation/Topics/bia_switch_frame_by_destination.html)

**Next topic:**[switch window](../../TA_Automation/Topics/bia_switch_window.html)

