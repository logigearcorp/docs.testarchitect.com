--- 
title: "get list check"
linktitle: "get list check"
description: "Description Retrieve the state of a check box item in a list box control. Arguments window TA name of the window. control TA name of the list box. item Identifying text content of the check box item , ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_get_list_check.html
keywords: "built-in actions, get list check, get list check (action), iOS (action), get list check, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get state of check box item in list box, retrieve state check box item in list box"
---

## Description

Retrieve the state of a check box item in a list box control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box.

-   **item**

    Identifying text content of the check box item, or the item's index value within the list box.

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned values:

    -   **on**

        Check box is selected.

    -   **off**

        Check box is cleared.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   The item argumentmay be specified by either of two means:the check box text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:list box.

## Example - Case 1: Using text value

![](/images/TA_Automation/Images/bia_get_list_check_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_list_check_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_list_check_res.png)

## Example - Case 2: Using numerical index

![](/images/TA_Automation/Images/bia_get_list_check_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_list_check_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_list_check_index_res.png)

## Example

![](/images/TA_Automation/Images/bia_get_list_check_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_list_check_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_list_check_ta4vs_res.png)




