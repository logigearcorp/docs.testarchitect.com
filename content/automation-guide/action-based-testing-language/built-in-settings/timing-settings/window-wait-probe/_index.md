--- 
title: "window wait probe"
linktitle: "window wait probe"
weight: 16
aliases: 
    - /TA_Automation/Topics/bis_window_wait_probe.html
---
keyword: [window wait probe, maximum wait time for window to become available]
---

# window wait probe

## Description

Maximum wait time for a window to become available.

## Value units

seconds

## Default value

2

## Notes

-   The window wait probe setting applies to three built-in actions: [does window exist](does_window_exist.html), [if window exists](if_window_exists.html), and [if window not exists](if_window_not_exists.html).
-   Setting a high wait time value may negatively impact test performance.

## Result timeout

Unlike the usage of the [window wait](window_wait.html) built-in setting where a specified window is expected to exist, actions that use window wait probe, such as if window exists, if window not exists, and does window exist, only query for the existence of a given window, generally to determine how the test will proceed. \(See [Wait probe settings](timing_wait_probe_settings.html) for further details on the workings of this setting.\)

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[window wait](/TA_Automation/Topics/bis_window_wait.html)

**Related information**  


[window wait](/TA_Automation/Topics/bis_window_wait.html)

[page wait](/TA_Automation/Topics/bis_page_wait.html)

