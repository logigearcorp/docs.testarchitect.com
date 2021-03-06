--- 
title: "switch frame by destination"
linktitle: "switch frame by destination"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_switch_frame_by_destination.html
---

## Description

Switch the focus to the parent frame of the current one or the main frame \(default content\). \([Learn more](https://www.guru99.com/handling-iframes-selenium.html)\)

**Important:** This action is dedicated to Generic WebDriver.

Assuming the current frame is 'frame 2'.

-   If you switch to the parent frame, the new current frame will be 'frame 1'.

    ![](/images//Images/bia_switch_frame_by_destination_parent_illustration.png)

-   If you switch to the main frame, the new current frame will be 'main frame'.

    ![](/images//Images/bia_switch_frame_by_destination_main_illustration.png)


## When to 'switch frame'

In a web page with multiple frames, you have to switch the focus to the frame containing the element before locating the element.

## Argument

-   destination: the frame to which you want to shift the focus.

    Allowable values:

    -   parent: the parent of the current frame.
    -   main: the main frame \(default content\).

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Action lines

![](/images//Images/bia_switch_frame_by_destination_parent_pgm.png)

![](/images//Images/bia_switch_frame_by_destination_main_pgm.png)

**Parent topic:**[WebDriver](/TA_Automation/Topics/built_in_actions_WebDriver.html)

**Previous topic:**[configure webdriver](/TA_Automation/Topics/bia_configure_webdriver.html)

**Next topic:**[switch frame by path](/TA_Automation/Topics/bia_switch_frame_by_path.html)

