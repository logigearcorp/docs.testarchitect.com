--- 
title: "get table view section containing"
linktitle: "get table view section containing"
description: "Description Retrieve the index of a table view section identified by its header text. Arguments window TA name of the window. control TA name of the table view control. section header Text of section ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section_containing.html
keywords: "built-in actions, get table view section containing, get table view section containing (action), iOS (action), get table view section containing, retrieve index of table view section, get position of specified table view section, obtain index of table view section"
---

## {{< expand >}} Description

Retrieve the index of a table view section identified by its header text.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    Text of section header to be searched for.

-   **variable**

    \(Optional\) Variable to receive the returned section index.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_get_table_view_section_containing__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   variable argument:
    -   Note that index numbering begins with 1.
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table view.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_table_view_section_containing_res.png)




