--- 
title: "get table view section"
linktitle: "get table view section"
description: "Description Retrieve both the header and footer text of a section of a table view control. Arguments window TA name of the window. control TA name of the table view control. index Table view section ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_table_view_section.html
keywords: "built-in actions, get table view section, get table view section (action), iOS (action), get table view section, get header and footer of table view section, retrieve header, footer of section of table view, obtain header and footer of table view section"
---

## Description

Retrieve both the header and footer text of a section of a table view control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **index**

    Table view section index.

-   **section header**

    Variable to receive the returned table view section header text.

-   **section footer**

    Variable to receive the returned table view section footer text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_get_table_view_section__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   index argument: Note that index numbering begins with 1.
-   If the variables in argumentssection header and section footerhave not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images/TA_Automation/Images/bia_get_table_view_section_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_table_view_section_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_table_view_section_res.png)

{{<note>}} In this example, the returned table view section footer text is null since that section has no footer.



