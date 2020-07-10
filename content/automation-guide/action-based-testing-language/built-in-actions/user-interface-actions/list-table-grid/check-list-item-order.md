--- 
title: "check list item order"
linktitle: "check list item order"
description: "Description Check for the presence of a specified sequence of items in a control. Result is Passed if the specified sequence is found ; otherwise Failed . Arguments window TA name of the window. ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_list_item_order.html
keywords: "built-in actions, check list item order, check list item order (action), iOS (action), check list item order, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if items in list box or combo box are arranged in specific order, check whetheritems in list box or combo box are arranged in specific sequence, verify if items in list box or combo box are arranged in specific order"
---

## {{< expand >}} Description

Check for the presence of a specified sequence of items in a control. Result is Passed ifthe specified sequence is found; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **exact match**

    \(Optional\) Allowable values:

    -   **0, false, f, no or n**

        \(default\) Verify that the values in argument1, argument2, ... , argumentN do exist in the control in sequence, but not necessarily consecutively.

    -   **1, true, t, yes or y**

        Verify that the *consecutive* sequence of values in argument1, argument2, … , argumentN exists somewhere in the control \(that is, that the values are contiguous\).

-   **argument1, argument2, … argumentN**

    Elements of the ordered sequence whose presence in the control is checked.

    {{<tip>}} Arguments argument2 through argumentN are optional.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   There is no practical limit to the number ofargumentarguments that may be specified. In the action line, you may continue listing them in consecutive columns beyond those that have column headers.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:combo box, list box, select-multiple, select-one..

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_list_item_order_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_list_item_order_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_list_item_order_res.png)




