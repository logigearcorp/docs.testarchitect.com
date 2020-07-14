--- 
title: "close window"
linktitle: "close window"
description: "close window Close a specified window. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test modules and user-defined actions. Notes ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_close_window.html
keywords: "built-in actions, close window, close window (action), Safari, macOS (action), close window, macOS, Safari (action), close specified window"
---

## close window

Close a specified window.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_close_window_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_close_window_pgm.png)

Result

![](/images/TA_Automation/Images/bia_close_window_res.png)



