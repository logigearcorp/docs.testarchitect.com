--- 
title: "does toolbar button exist"
linktitle: "does toolbar button exist"
description: "Description Return a Boolean value to indicate whether a specified button on a toolbar exists. Arguments window TA name of the window. control TA name of the toolbar control. button Button, as ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_does_toolbar_button_exist.html
keywords: "built-in actions, does toolbar button exist, does toolbar button exist (action), does toolbar button exist, check specified button on toolbar exists, check whether particular button is found on toolbar, verify if specified button on toolbar exists, verify existence of specified button on toolbar"
---

## {{< expand >}} Description

Return a Boolean value to indicate whether a specified button on a toolbar exists.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   button argument:
    -   The buttonmay be specified by either of two means:the caption text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)

        {{<restriction>}} Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:toolbar.

## {{< expand >}} Example - Case 1: Use text value

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_res.png)

## {{< expand >}} Example - Case 2: Use numerical index value

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_toolbar_button_exist_index_res.png)




**Related information**  


[check toolbar button exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-button-exists)

[check toolbar button not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-button-not-exists)

