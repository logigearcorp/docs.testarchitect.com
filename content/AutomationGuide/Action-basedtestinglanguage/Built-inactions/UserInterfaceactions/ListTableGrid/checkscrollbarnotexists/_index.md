--- 
title: "check scrollbar not exists"
linktitle: "check scrollbar not exists"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_check_scrollbar_not_exists.html
---
# check scrollbar not exists {#bia_check_scrollbar_not_exists .reference}

## Description { .section}

Check for the nonexistence of a scroll bar in a control. Result is Passed ifthe specified scroll bar does not exist; otherwise Failed.

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

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:checklist, list box, list view, table.

## Example { .section}

![](../Images/bia_check_scollbar_not_exists_aut.png)

**Action Lines**

![](../Images/bia_check_scollbar_not_exists_pgm.png)

**Result**

![](../Images/bia_check_scollbar_not_exists_res.png)

**Parent topic:**[List, Table, Grid](../../TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check scrollbar exists](../../TA_Automation/Topics/bia_check_scrollbar_exists.html)

**Next topic:**[check selected count](../../TA_Automation/Topics/bia_check_selected_count.html)

**Related information**  


[check scrollbar exists](../../TA_Automation/Topics/bia_check_scrollbar_exists.html)

[does scrollbar exist](../../TA_Automation/Topics/bia_does_scrollbar_exist.html)

