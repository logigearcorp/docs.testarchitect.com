--- 
title: "-"
linktitle: "focus window"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_focus_window.html
---
keyword: [focus window, focus on specified window, set focus on given window]
---

# focus window

## Description

Set focus on a specified window.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window

## Example

## Action Lines

![](/images//Images/bia_focus_window_pgm.png)

## Result

![](/images//Images/bia_focus_window_res.png)

## Effect

![](/images//Images/bia_focus_window_aut.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Previous topic:**[does window exist](/TA_Automation/Topics/bia_does_window_exist.html)

**Next topic:**[get modal definition](/TA_Automation/Topics/bia_get_modal_definition.html)

