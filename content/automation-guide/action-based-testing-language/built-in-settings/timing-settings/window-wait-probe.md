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

-   The window wait probe setting applies to three built-in actions: [does window exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/does-window-exist), [if window exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-window-exists), and [if window not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-window-not-exists).
-   Setting a high wait time value may negatively impact test performance.

## Result timeout

Unlike the usage of the [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait) built-in setting where a specified window is expected to exist, actions that use window wait probe, such as if window exists, if window not exists, and does window exist, only query for the existence of a given window, generally to determine how the test will proceed. \(See [Wait probe settings](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/wait-probe-settings) for further details on the workings of this setting.\)



**Related information**  


[window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait)

[page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait)

