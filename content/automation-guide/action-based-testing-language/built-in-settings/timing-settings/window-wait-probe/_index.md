--- 
title: "window wait probe"
linktitle: "window wait probe"
description: "Description Maximum wait time for a window to become available. Value units seconds Default value 2 Notes The window wait probe setting applies to three built-in actions: does window exist , if window ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bis_window_wait_probe.html
keywords: "built-in settings, window wait probe, settings, window wait probe (settings), maximum wait time for window to become available"
---

## Description

Maximum wait time for a window to become available.

## Value units

seconds

## Default value

2

## Notes

-   The window wait probe setting applies to three built-in actions: [does window exist](/TA_Automation/Topics/bia_does_window_exist.html), [if window exists](/TA_Automation/Topics/bia_if_window_exists.html), and [if window not exists](/TA_Automation/Topics/bia_if_window_not_exists.html).
-   Setting a high wait time value may negatively impact test performance.

## Result timeout

Unlike the usage of the [window wait](/TA_Automation/Topics/bis_window_wait.html) built-in setting where a specified window is expected to exist, actions that use window wait probe, such as if window exists, if window not exists, and does window exist, only query for the existence of a given window, generally to determine how the test will proceed. \(See [Wait probe settings](/TA_Automation/Topics/timing_wait_probe_settings.html) for further details on the workings of this setting.\)



**Related information**  


[window wait](/TA_Automation/Topics/bis_window_wait.html)

[page wait](/TA_Automation/Topics/bis_page_wait.html)

