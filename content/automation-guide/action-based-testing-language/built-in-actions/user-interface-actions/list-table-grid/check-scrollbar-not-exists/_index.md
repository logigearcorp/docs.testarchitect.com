--- 
title: "check scrollbar not exists"
linktitle: "check scrollbar not exists"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_check_scrollbar_not_exists.html
keywords: "check scrollbar does not exist, check if scrollbar does not exist, check nonexistence of scrollbar, verify nonexistence of scrollbar, verify if scrollbar does not exist"
---

## Description

Check for the nonexistence of a scroll bar in a control. Result is Passed ifthe specified scroll bar does not exist; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control to be examined for the specified scroll bar.

-   **type**

    Type of scroll bar to check for.

    Allowable values:

    -   **horizontal**

        A horizontal scroll bar.

    -   **vertical**

        A vertical scroll bar.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:checklist, list box, list view

-   For SAP BW application: table, frame

## Example

![](/images//Images/bia_check_scollbar_not_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_scollbar_not_exists_pgm.png)

**Result**

![](/images//Images/bia_check_scollbar_not_exists_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check scrollbar exists](/TA_Automation/Topics/bia_check_scrollbar_exists.html)

**Next topic:**[check selected count](/TA_Automation/Topics/bia_check_selected_count.html)

**Related information**  


[check scrollbar exists](/TA_Automation/Topics/bia_check_scrollbar_exists.html)

[does scrollbar exist](/TA_Automation/Topics/bia_does_scrollbar_exist.html)

