--- 
title: "switch window"
linktitle: "switch window"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_switch_window.html
---

## Description

Switch to another window instance.

**Important:** This action is dedicated to Generic WebDriver.

## Arguments

-   window: TestArchitect name of the window.
-   handle: \(Optional\) The window handle of the desired window instance, which is obtained by the [identify windows](/TA_Automation/Topics/bia_identify_windows.html) built-in action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Note

-   Each window instance is assigned a unique ID, which is called window handle.
-   This unique ID is necessary when you want to switch among several windows which have identical definitions.
-   You can obtain the window handle of identical window instances by using the identify windows action.

## Example

Suppose you are testing a customer live chat service that offers the fastest way to provide customer support on your website. There are two identical windows, one for the client, and the other for the supporter. In your test procedures, you have to switch between the client window and supporter window. This ensures that whatever the client enquires will appear on the supporter window.

## Action lines

![](/images//Images/bia_switch_window_pgm.png)

**Parent topic:**[WebDriver](/TA_Automation/Topics/built_in_actions_WebDriver.html)

**Previous topic:**[switch frame by path](/TA_Automation/Topics/bia_switch_frame_by_path.html)

