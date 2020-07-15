--- 
title: "does picker view item exist"
linktitle: "does picker view item exist"
description: "Description Return a Boolean value to indicate whether an item, as specified by its displayed text, within a specified component of a picker view control, exists. Arguments window TA name of the ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_picker_view_item_exist.html
keywords: "built-in actions, does picker view item exist, does picker view item exist (action), iOS (action), does picker view item exist, check whether specified item in component of picker view exist or not, verify whether or not specified item is found in component of picker view, check for existence of specific item in component of picker view"
---

## Description

Return a Boolean value to indicate whether an item, as specified by its displayed text, within a specified component of a picker view control, exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **component**

    Numeric index ofthe component. \(Note that index numbering begins with 1.\)

-   **text**

    Text content of the item to be searched for.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_does_picker_view_item_exist__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:picker view.

## Example

![](/images/TA_Automation/Images/bia_does_picker_view_item_exist_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_does_picker_view_item_exist_pgm.png)

Result

![](/images/TA_Automation/Images/bia_does_picker_view_item_exist_res.png)



