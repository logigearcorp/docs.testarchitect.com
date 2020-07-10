--- 
title: "check item exists"
linktitle: "check item exists"
description: "Description Check for the existence of a specified item in a list box, list view, or combo box control. Result is Passed if the item is found ; otherwise Failed . Arguments window TA name of the ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_item_exists.html
keywords: "built-in actions, check item exists, check item exists (action), iOS (action), check item exists, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), wait for property, Safari, macOS (action), macOS, Safari (action), check specified item exits in list box or combo box, check if specified item exists in list view, check whether specified item exists in list box or combo box, verify existence of specified item in list view, verify existence of specified item in list box or combo box"
---

## {{< expand >}} Description

Check for the existence of a specified item in a list box, list view, or combo box control. Result is Passed ifthe item is found; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **list**

    TA name of the list box, list view, or combo box control.

-   **item**

    Identifying item textor index.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_check_item_exists__section.notes} 

-   item argument:
    -   The item argumentmay be specified by either of two means:the displayed text of the item, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)

        {{<restriction>}} Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
    -   For list view controls only, to specify an item argument by its text content, enter the combined values of every cell, from left to right, with vertical bars \( \| \) as delimiters.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:list box, list view, combo box.

## {{< expand >}} Example - Case 1: Use text value to specify list box item

![](/images/TA_Automation/Images/bia_check_item_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_item_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_item_exist_res.png)

## {{< expand >}} Example - Case 2: Use numerical index value to specify list box item

![](/images/TA_Automation/Images/bia_check_item_exist_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_item_exists_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_item_exist_index_res.png)

## {{< expand >}} Example - Case 3: Use text value to specify list view item

![](/images/TA_Automation/Images/bia_check_item_exist_2_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_item_exists_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_item_exist_2_res.png)

## {{< expand >}} Example - Case 4: Use numerical index value to specify list view item

![](/images/TA_Automation/Images/bia_check_item_exist_2_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_item_exists_2_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_item_exist_2_index_res.png)

**Related information**  


[check item not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-item-not-exists)

[does item exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/does-item-exist)

