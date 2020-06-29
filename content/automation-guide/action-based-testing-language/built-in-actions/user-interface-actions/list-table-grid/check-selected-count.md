--- 
title: "check selected count"
linktitle: "check selected count"
description: "Description Check the number of the selected items in a multiple selection control (list box or list view) against an expected count. Result is Passed if the number of the selected items matches the ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_check_selected_count.html
keywords: "built-in actions, check selected count, check selected count (action), iOS (action), check selected count, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check selected count in multiselect list box against expected number, check selected count in multiselect tree view against expected number, check number of selected items in multiselect list box against expected number, check if number of selected items in multiselect list view matches expected number"
---

## Description

Check the number of the selected items in a multiple selection control \(list box or list view\) against an expected count. Result is Passed ifthe number of the selected items matches the expected number; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the list box or list view control.

-   **expected**

    The expected number of selected items.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Set the expected argument to 0 to verify that no items are selected.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:list box, list view.

## Example

![](/images/TA_Automation/Images/bia_check_selected_count_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_count_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_count_res.png)

## Example

![](/images/TA_Automation/Images/bia_check_selected_count_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_selected_count_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_selected_count_ta4vs_res.png)




**Related information**  


[get selected count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-selected-count)

