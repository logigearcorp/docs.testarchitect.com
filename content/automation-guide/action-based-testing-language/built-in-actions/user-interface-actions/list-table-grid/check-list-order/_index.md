--- 
title: "check list order"
linktitle: "check list order"
description: "Description Check that all the items of a control are sorted in either ascending or descending order. Result is Passed if the items are fully ordered ; otherwise Failed . Arguments window TA name of ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_list_order.html
keywords: "built-in actions, check list order, check list order (action), iOS (action), check list order, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if all items of control are sorted, check whether all items of control are sorted, verify if all items of control are sorted, verify whether all items of control are sorted"
---

## Description

Check that all the items of a control are sorted in either ascending or descending order. Result is Passed ifthe items are fully ordered; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the control.

-   **case sensitive**

    \(Optional\) Specify whether case is to be considered in establishing whether or not the contents are in order.

    Allowable values:

    -   **1**

        Case-sensitive.

    -   **0**

        \(Default\) Case-insensitive.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:combo box, list box, select-multiple, select-one.

## Example

![](/images/TA_Automation/Images/bia_check_list_order_aut_2.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_list_order_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_list_order_2_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_list_order_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_list_order_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_list_order_ta4vs_res.png)




