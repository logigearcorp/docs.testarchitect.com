--- 
title: "does window exist"
linktitle: "does window exist"
aliases: 
    - /TA_Automation/Topics/bia_does_window_exist.html
---
# does window exist {#bia_does_window_exist .reference}

## Description { .section}

Return a Boolean value to indicate whether a specified window exists.

## Arguments { .section}

window
:   TA name of the window.

variable
:   \(Optional\) Variable to receive the returned Boolean value.

:   Possible returned values:

    1
    :   Window found.

    0
    :   Window not found.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   variable argument:
        -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
        -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [window wait probe](bis_window_wait_probe.html).

## Applicable Controls { .section}

This action is applicable to the following controls:window.

## Example { .section}

![](../Images/bia_does_window_exist_aut.png)

**Action Lines**

![](../Images/bia_does_window_exist_pgm.png)

**Result**

![](../Images/bia_does_window_exist_res.png)

**Parent topic:**[Window](../../TA_Automation/Topics/bia_Window.html)

**Previous topic:**[close window](../../TA_Automation/Topics/bia_close_window.html)

**Next topic:**[focus window](../../TA_Automation/Topics/bia_focus_window.html)

**Related information**  


[check window exists](../../TA_Automation/Topics/bia_check_window_exists.html)

[check window not exists](../../TA_Automation/Topics/bia_check_window_not_exists.html)

