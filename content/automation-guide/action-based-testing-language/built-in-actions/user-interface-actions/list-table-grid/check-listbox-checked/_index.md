--- 
title: "check listbox checked"
linktitle: "check listbox checked"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_check_listbox_checked.html
keywords: "check state of specified check box item in list box, verify state of specified check box item in list box, verify whether specified check box item in list box is checked or unchecked, verify if specified check box item in list box is checked or unchecked"
---

## Description

Check the state of a check box item in a list box control. Result is Passed ifthe check box is selected; otherwise Failed.

## Arguments

-   **window**

    TA name of the window containing the list box.

-   **control**

    TA name of the list box.

-   **item**

    Identifying text of the check box item, or its index.

-   **expected**

    Expected state.

    Allowable values:

    -   **on**

        The specified check box is selected.

    -   **off**

        The specified check box is cleared.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   The check box \(item argument\)may be specified by either of two means:its displayed text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box.

## Example - Case 1: Use text value

![](/images//Images/bia_check_listbox_checked_aut.png)

**Action Lines**

![](/images//Images/bia_check_listbox_checked_pgm.png)

**Result**

![](/images//Images/bia_check_listbox_checked_res.png)

## Example - Case 2: Use numerical index value

![](/images//Images/bia_check_listbox_checked_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_listbox_checked_index_pgm.png)

**Result**

![](/images//Images/bia_check_listbox_checked_index_res.png)

## Example

![](/images//Images/bia_check_listbox_checked_aut.png)

**Action Lines**

![](/images//Images/bia_check_listbox_checked_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_listbox_checked_ta4vs_res.png)

**Parent topic:**[List, Table, Grid](/TA_Automation/Topics/bia_List_Table_Grid.html)

**Previous topic:**[check list order](/TA_Automation/Topics/bia_check_list_order.html)

**Next topic:**[check scrollbar exists](/TA_Automation/Topics/bia_check_scrollbar_exists.html)

