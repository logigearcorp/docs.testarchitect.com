--- 
title: "object wait probe"
linktitle: "object wait probe"
description: "Description The maximum wait time for a control to be available. Value units seconds Default value 2 Notes The object wait probe setting applies to the following three built-in actions: does control ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bis_object_wait_probe.html
keywords: "built-in settings, object wait probe, settings, object wait probe (settings)"
---

## Description

The maximum wait time for a control to be available.

## Value units

seconds

## Default value

2

## Notes

-   The object wait probe setting applies to the following three built-in actions: [does control exist](/TA_Automation/Topics/bia_does_control_exist.html), [if control exists](/TA_Automation/Topics/bia_if_control_exists.html), and [if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html).
-   Setting a high wait time value may negatively impact test performance.

## Result timeout

Unlike the usage of the [object wait](/TA_Automation/Topics/bis_object_wait.html) built-in setting where we expect the specified control must exist, the following built-in actions, such as if control exists, if control not exists, does control exist just want to know the existence of the control as a result for the next steps. The execution mechanism is explained as follows:

1.  TestArchitect starts looking for the specified window.
2.  If the specified window is not available, TestArchitect waits until the window is available within the default timeout 20 seconds, specified by the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting.
3.  When the timeout is reached but the window is still unavailable, TestArchitect reports a warning informing that the window could not be found \(No pass or fail is recorded\).
4.  If the window is found, TestArchitect starts looking for the specified control.
5.  With if control exists action:
    1.  If the specified control is unavailable, TestArchitect waits until the control is available within the default timeout 2 seconds, specified by the object wait probe built-in setting.
    2.  When the timeout is reached and the specified control is available, TestArchitect executes the if statement.
6.  With does control exists action:
    1.  If the specified control is unavailable, TestArchitect waits until the control is available within the default timeout 2 seconds, specified by the object wait probe built-in setting.
    2.  When the timeout is reached and the specified control is available, TestArchitect returns the value of 1.
7.  With if control not exists action:
    1.  If the specified control is unavailable, TestArchitect waits until the control is available within the default timeout 2 seconds, specified by the object wait probe built-in setting.
    2.  When the timeout is reached and the specified control is available, TestArchitect executes the else statement.




