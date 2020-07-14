--- 
title: "check table view section exists"
linktitle: "check table view section exists"
description: "Description Check for the existence of a table view section as identified by its header text. Result is Passed if the specified table view section is found ; otherwise Failed . Arguments window TA ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_table_view_section_exists.html
keywords: "built-in actions, check table view section exists, check table view section exists (action), iOS (action), check table view section exists, check if specified table view section exists, check existence for specified table view section, verify existence of specified table view section, check if specified column header matches expected text"
---

## Description

Check for the existence of a table view section as identified by its header text. Result is Passed ifthe specified table view section is found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table view control.

-   **section header**

    Header text to search for.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_check_table_view_section_exists__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:table view.

## Example

![](/images/TA_Automation/Images/bia_check_table_view_section_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_table_view_section_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_table_view_section_exists_res.png)



