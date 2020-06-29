--- 
title: "check picker view item exists"
linktitle: "check picker view item exists"
description: "Description Check, based on the displayed text content, for the existence of an item in a component of a picker view control. Result is Passed if the specified item is found ; otherwise Failed . ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_picker_view_item_exists.html
keywords: "built-in actions, check picker view item exists, check picker view item exists (action), iOS (action), check picker view item exists, check if item is found in specific component of picker view, check for existence of item in component of picker view, verify whether item is found in specific component of picker view"
---

## Description

Check, based on the displayed text content, for the existence of an item in a component of a picker view control. Result is Passed ifthe specified item is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Text content of the item to be searched for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_check_picker_view_item_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_picker_view_item_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_picker_view_item_exists_res.png)




