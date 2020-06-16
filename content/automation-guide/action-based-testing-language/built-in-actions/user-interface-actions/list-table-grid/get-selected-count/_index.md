--- 
title: "get selected count"
linktitle: "get selected count"
description: "Description Retrieve the number of the selected items in a multiple selection control (list box or list view). Arguments window TA name of the window. control TA name of the list box or list view ..."
weight: 23
aliases: 
    - /TA_Automation/Topics/bia_get_selected_count.html
keywords: "built-in actions, get selected count, get selected count (action), iOS (action), get selected count, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get number of selected items in multiselect control, count selected items in multiselect control, count selected items in list box, count selected items in list view"
---

## Description

Retrieve the number of the selected items in a multiple selection control \(list box or list view\).

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box or list view control.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   A returned value of `0` indicates that no items in the specified control are selected.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box, list view.

## Example

![](/images/TA_Automation/Images/bia_get_selected_count_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_selected_count_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_selected_count_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_selected_count_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_selected_count_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_selected_count_ta4vs_res.png)




**Related information**  


[check selected count](/TA_Automation/Topics/bia_check_selected_count.html)

