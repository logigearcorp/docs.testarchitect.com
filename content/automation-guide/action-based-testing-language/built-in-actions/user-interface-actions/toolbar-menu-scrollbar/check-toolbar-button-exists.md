--- 
title: "check toolbar button exists"
linktitle: "check toolbar button exists"
description: "Description Check for the existence of a button on a toolbar. Result is Passed if the specified button is found ; otherwise Failed . Arguments window TA name of the window. control TA name of the ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_button_exists.html
keywords: "built-in actions, check toolbar button exists, check toolbar button exists (action), check toolbar button exists, check for existence of specified button on toolbar, check if specified button is found on toolbar, verify whether specified button exists, verify existence of specified button on toolbar"
---

## {{< expand >}} Description

Check for the existence of a button on a toolbar. Result is Passed ifthe specified button is found; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_check_toolbar_button_exists__section.notes} 

-   button argument:
    -   The buttonmay be specified by either of two means:the caption text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)

        {{<restriction>}} Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:toolbar.

## {{< expand >}} Example - Case 1: Using a text value for button

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_res.png)

## {{< expand >}} Example - Case 2: Using a numerical index value for button

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_toolbar_button_exists_index_res.png)




**Related information**  


[check toolbar button not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-button-not-exists)

[does toolbar button exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-toolbar-button-exist)

