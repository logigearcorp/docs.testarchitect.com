--- 
title: "object wait"
linktitle: "object wait"
description: "Description The maximum wait time for a control or HTML element to become available or, depending upon the action involved, unavailable . Value units seconds Default value 20 Notes The object wait ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bis_object_wait.html
keywords: "built-in settings, object wait, settings, object wait (settings), object wait, maximum waiting time for control or HTML element to become available, maximum wait time for availability of control or HTML element"
---

## Description

The maximum wait time for a control or HTML element to become available or, depending upon the action involved, unavailable.

## Value units

seconds

## Default value

20

## Notes

-   The object wait setting is applicable to every built-in action that contains the control argument *and* expects the specified control to exist.
-   The object wait setting *does not* apply to does/if built-in actions: specifically, [if control exists](/TA_Automation/Topics/bia_if_control_exists.html), [if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html), and [does control exist](/TA_Automation/Topics/bia_does_control_exist.html). For these three actions, use the [window wait probe](/TA_Automation/Topics/bis_object_wait_probe.html) setting.
-   Setting a high wait time value may negatively impact test performance.

## Result timeout

Suppose you are using [check control exists](/TA_Automation/Topics/bia_check_control_exists.html) and [check control not exists](/TA_Automation/Topics/bia_check_control_not_exists.html) built-in actions, the execution mechanism is as follows:

1.  TestArchitect starts looking for the specified window.
2.  If the specified window is not yet available, TestArchitect waits until the window is available within the default timeout 20 seconds, specified by the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting.
3.  When the timeout is reached but the window is still unavailable, TestArchitect reports a warning informing that the window could not be found. \(No pass or fail is recorded\).
4.  If the window is found, TestArchitect starts looking for the specified control.
5.  With the check control exists action:
    1.  If the specified control is unavailable, TestArchitect waits until the control is available within the default timeout 20 seconds, specified by the object wait built-in setting.
    2.  When the timeout is reached but the control is still unavailable, TestArchitect reports a failed message.
6.  With the check control not exists action:
    1.  If the specified control is available, TestArchitect waits until the control is unavailable within the default timeout 20 seconds, specified by the object wait built-in setting.
    2.  When the timeout is reached but the control is still available, TestArchitect reports a failed message.




