--- 
title: "check window exists"
linktitle: "check window exists"
aliases: 
    - /TA_Automation/Topics/bia_check_window_exists.html
---
# check window exists {#bia_check_window_exists .reference}

## Description { .section}

Check for the existence of a specified window. Result is Passed ifthe window does exist; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_check_window_exists_aut.png)

**Action Lines**

![](../Images/bia_check_window_exists_pgm.png)

**Result**

![](../Images/bia_check_window_exists_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[check controls matched](../../TA_Automation/Topics/bia_check_controls_matched.html)

**Next topic:**[check window not exists](../../TA_Automation/Topics/bia_check_window_not_exists.html)

**Related information**  


[check window not exists](../../TA_Automation/Topics/bia_check_window_not_exists.html)

[does window exist](../../TA_Automation/Topics/bia_does_window_exist.html)

