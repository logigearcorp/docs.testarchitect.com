--- 
title: "check list order"
linktitle: "check list order"
description: "Description Check that all the items of a control are sorted in either ascending or descending order. Result is Passed if the items are fully ordered ; otherwise Failed . Arguments window TA name of ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_list_order.html
keywords: "built-in actions, check list order, check list order (action), iOS (action), check list order, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if all items of control are sorted, check whether all items of control are sorted, verify if all items of control are sorted, verify whether all items of control are sorted"
---

## {{< expand >}} Description

Check that all the items of a control are sorted in either ascending or descending order. Result is Passed ifthe items are fully ordered; otherwise Failed.

## {{< expand >}} Arguments

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


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:combo box, list box, select-multiple, select-one.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_list_order_aut_2.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_list_order_2_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_list_order_2_res.png)

