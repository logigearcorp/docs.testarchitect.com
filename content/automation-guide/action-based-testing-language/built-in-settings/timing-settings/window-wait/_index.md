--- 
title: "window wait"
linktitle: "window wait"
weight: 15
aliases: 
    - /TA_Automation/Topics/bis_window_wait.html
---
keyword: [window wait, maximum wait time for window to become available, maximum wait time for window to become unavailable, maximum wait time for window to appear, maximum wait time for window to disappear]
---

# window wait

## Description

The maximum wait time for a window to become available or, depending on the action involved, unavailable.

## Value units

seconds

## Default value

20

## Notes

-   The window wait setting is applicable to nearly every built-in action that contains the window argument. This built-in setting is used when it is expected that the specified window must exist.
-   However, the window wait setting is not applicable to does/if built-in actions, that is, [if window exists](if_window_exists.html), [if window not exists](if_window_not_exists.html), and [does window exist](does_window_exist.html). Instead, the [window wait probe](window_wait_probe.html) setting is used for those three built-in actions.
-   Setting a high wait time value may negatively impact test performance.
-   For web automation, window wait goes into effect first, and then [page wait](page_wait.html) does. In other words, TestArchitect first looks for the presence of the specified window; once that condition is satisfied, TestArchitect waits the allotted page wait time for the web page to be rendered and available.

## Result timeout

Suppose you are using [check window exists](check_window_exists.html) and [check window not exists](check_window_not_exists.html) built-in actions. The execution mechanism is as follows:

1.  TestArchitect starts looking for the specified window.
2.  With the check window exists action:
    1.  If the specified window is not yet available, TestArchitect waits until the window is available within the default timeout of 20 seconds, specified by the window wait built-in setting.
    2.  When the timeout is reached but the window is still unavailable, TestArchitect issues a Failed report.
3.  With the check window not exists action:
    1.  If the specified window is available, TestArchitect waits until the window is unavailable within the default timeout 20 seconds, specified by the window wait built-in setting.
    2.  If the timeout is reached but the window is still available, TestArchitect issues a Failed report.

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html)

**Next topic:**[window wait probe](/TA_Automation/Topics/bis_window_wait_probe.html)

**Related information**  


[window wait probe](/TA_Automation/Topics/bis_window_wait_probe.html)

[page wait](/TA_Automation/Topics/bis_page_wait.html)

