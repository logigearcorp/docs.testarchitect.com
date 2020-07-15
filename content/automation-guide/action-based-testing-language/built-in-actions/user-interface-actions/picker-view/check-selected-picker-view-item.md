--- 
title: "check selected picker view item"
linktitle: "check selected picker view item"
description: "Description Check whether the display text of the currently selected item of a specified picker view component matches an expected text string. Result is Passed if the two strings match ; otherwise ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_selected_picker_view_item.html
keywords: "built-in actions, check selected picker view item, check selected picker view item (action), iOS (action), check selected picker view item, check if value of selected item in component of picker view matches expected value, check value of selected item in component of picker view against expected value, verify whether selected item in component of picker view matches expected value"
---

## Description

Check whether the display text of the currently selected item of a specified picker view component matches an expected text string. Result is Passed ifthe two strings match ; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **expected**

    The expected text content of the selected item.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes  

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_check_selected_picker_view_item_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_selected_picker_view_item_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_selected_picker_view_item_res.png)



