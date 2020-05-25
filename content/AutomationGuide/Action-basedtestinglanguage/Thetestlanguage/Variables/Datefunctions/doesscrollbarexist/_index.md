--- 
title: "does scrollbar exist"
linktitle: "does scrollbar exist"
aliases: 
    - /TA_Automation/Topics/bia_does_scrollbar_exist.html
---
# does scrollbar exist {#bia_does_scrollbar_exist .reference}

## Description { .section}

Return a Boolean value to indicate whether a specified scroll bar exists.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control to be examined for the specified scroll bar.

type
:   Type of scroll bar to check for.

:   Allowable values:

    horizontal
    :   A horizontal scroll bar.

    vertical
    :   A vertical scroll bar.

variable
:   \(Optional\) Variable to receive the returned Boolean value.

:   Possible returned values:

    1
    :   Scroll bar found.

    0
    :   Scroll bar not found

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:checklist, list box, list view, table.

## Example { .section}

![](../Images/bia_does_scrollbar_exist_aut.png)

**Action Lines**

![](../Images/bia_does_scrollbar_exist_pgm.png)

**Result**

![](../Images/bia_does_scrollbar_exist_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[does item exist](../../TA_Automation/Topics/bia_does_item_exist.html)

**Next topic:**[get column header coordinates](../../TA_Automation/Topics/bia_get_column_header_coordinates.html)

**Related information**  


[check scrollbar exists](../../TA_Automation/Topics/bia_check_scrollbar_exists.html)

[check scrollbar not exists](../../TA_Automation/Topics/bia_check_scrollbar_not_exists.html)

