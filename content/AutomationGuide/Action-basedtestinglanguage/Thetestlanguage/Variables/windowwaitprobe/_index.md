--- 
title: "window wait probe"
linktitle: "window wait probe"
aliases: 
    - /TA_Automation/Topics/bis_window_wait_probe.html
---
# window wait probe {#bis_window_wait_probe .reference}

## Description { .section}

Maximum wait time for a window to become available.

## Value units { .section}

seconds

## Default value { .section}

2

## Notes { .section}

-   The window wait probe setting applies to three built-in actions: [does window exist](bia_does_window_exist.html), [if window exists](bia_if_window_exists.html), and [if window not exists](bia_if_window_not_exists.html).
-   Setting a high wait time value may negatively impact test performance.

## Result timeout { .section}

Unlike the usage of the [window wait](bis_window_wait.html) built-in setting where a specified window is expected to exist, actions that use window wait probe, such as if window exists, if window not exists, and does window exist, only query for the existence of a given window, generally to determine how the test will proceed. \(See [Wait probe settings](timing_wait_probe_settings.html) for further details on the workings of this setting.\)

**Parent topic:**[Timing settings](../../TA_Automation/Topics/bis_timing.html)

**Previous topic:**[window wait](../../TA_Automation/Topics/bis_window_wait.html)

**Related information**  


[window wait](../../TA_Automation/Topics/bis_window_wait.html)

[page wait](../../TA_Automation/Topics/bis_page_wait.html)

