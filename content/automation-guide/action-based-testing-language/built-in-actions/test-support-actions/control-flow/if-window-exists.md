--- 
title: "if window exists"
linktitle: "if window exists"
description: "Description Begin a block of action lines which are executed only if a specified window is found to exist. Arguments window TA name of the window. Valid contexts This action may be used within the ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_if_window_exists.html
keywords: "built-in actions, if window exists, if window exists (action), iOS (action), if window exists, Safari, iOS, Android (action), Android, Google Chrome, Safari, macOS (action), macOS, Safari (action), check if window exists, check whether window exists, check existence of window, verify existence of window"
---

## Description

Begin a block of action lines which are executed only if a specified window is found to exist.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the specified window is found, the succeeding block of action lines up until the first occurrence of an [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else), [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if), or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if), is executed. Otherwise, that block is skipped.
-   The if window exists action, in effect, combines the [does window exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/does-window-exist) and [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) built-in actions.
-   This built-in action can typically be used in recovery actions to detect unwanted open windows.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait-probe).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_if_window_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_if_window_exists_res.png)

**Related information**  


[if window not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-window-not-exists)
