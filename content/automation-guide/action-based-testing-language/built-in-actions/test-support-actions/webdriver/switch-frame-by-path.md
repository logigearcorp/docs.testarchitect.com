--- 
title: "switch frame by path"
linktitle: "switch frame by path"
description: "Description Switch the focus to the target frame defined by frame path. ( Learn more ) Important: This action is dedicated to Generic WebDriver. When to 'switch frame' In a web page with multiple ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_switch_frame_by_path.html
keywords: "built-in action, switch frame by path"
---

## {{< expand >}} Description {{< permerlink >}} {#bia_switch_frame_by_path__section_b1x_zh3_wfb} 

Switch the focus to the target frame defined by frame path. \([Learn more](https://www.guru99.com/handling-iframes-selenium.html)\)

{{<important>}} This action is dedicated to Generic WebDriver.

## When to 'switch frame'

In a web page with multiple frames, you have to switch the focus to the frame containing the element before locating the element.

## {{< expand >}} Argument {{< permerlink >}} {#bia_switch_frame_by_path__section_qk2_f33_wfb} 

-   frame path: the path from current frame to the destination frame.

## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Note {{< permerlink >}} {#bia_switch_frame_by_path__section_rpk_5rw_yfb} 

-   switch frame by path cannot move the focus back to its parent frame or default page. To move the focus to the parent frame or default page. You ought to adopt the [switch frame by destination](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-frame-by-destination) action.

## {{< expand >}} Example {{< permerlink >}} {#bia_switch_frame_by_path__section_y51_phj_wfb} 

![](/images/TA_Automation/Images/bia_switch_frame_by_path_illustration.png)



The current frame is 'frame 1'. You want to switch to 'frame 3'.

## {{< expand >}} Action Lines {{< permerlink >}} {#bia_switch_frame_by_path__section_qfx_l33_wfb} 

![](/images/TA_Automation/Images/bia_switch_frame_by_path_pgm.png)






