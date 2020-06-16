--- 
title: "check selected items"
linktitle: "check selected items"
description: "Description Check the selection status of specified items in a multiple selection control. Result is Passed if all the specified items are selected ; otherwise Failed . Arguments window TA name of the ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_check_selected_items.html
keywords: "built-in actions, check selected items, check selected items (action), iOS (action), check selected items, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if all specified items in multiselect control are selected, check if all specified items in list box or combo box are selected, check whether all specified item list view are selected, verify selection status of specified items"
---

## Description

Check the selection status of specified items in a multiple selection control. Result is Passed ifall the specified items are selected; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the multiple selection control.

-   **item1, item2,…, itemN**

    Items to be checked, as identified by their display textor indexes. All except item1 are optional.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item arguments:
    -   There is no practical limit to the number ofitemarguments that may be specified. In the action line, you may continue listing them in consecutive columns beyond those that have column headers.
    -   This action returns a passing result if all items specified in the argument list \(item1 through itemN\) are selected. The states of items not listed are ignored.
    -   Each individual item argument may be specified by either of two means:its displayed text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:combo box, list box, list view.

## Example - Case 1: Use text value to specify list view item

![](/images/TA_Automation/Images/bia_check_selected_items_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_items_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_items_res.png)

## Example - Case 2: Use numerical index value to specify list view item

![](/images/TA_Automation/Images/bia_check_selected_items_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_items_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_items_index_res.png)

## Example - Case 3: Use text value to specify list box item

![](/images/TA_Automation/Images/bia_check_selected_items_2_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_items_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_items_2_res.png)

## Example - Case 4: Use numerical index value to specify list box item

![](/images/TA_Automation/Images/bia_check_selected_items_2_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_items_2_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_items_2_index_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_selected_items_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_items_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_items_ta4vs_res.png)




**Related information**  


[get selected items](/TA_Automation/Topics/bia_get_selected_items.html)

[click list item](/TA_Automation/Topics/bia_click_list_item.html)

