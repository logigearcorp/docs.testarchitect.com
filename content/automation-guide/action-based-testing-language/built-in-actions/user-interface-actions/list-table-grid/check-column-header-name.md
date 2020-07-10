--- 
title: "check column header name"
linktitle: "check column header name"
description: "Description Check the header value of a column against an expected value. Result is Passed if the two values match each other ; otherwise Failed . Arguments window TA name of the window. control TA ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_column_header_name.html
keywords: "built-in actions, check column header name, check column header name (action), column header name, column header, check if column header name matches expected value, check whether column header name matches expected value, verify if column header name matches expected value"
---

## {{< expand >}} Description

Check the header value of a column against an expected value. Result is Passed ifthe two values match each other; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **index**

    Column number of the cell. \(Column numbers start at 1.\)

-   **expected**

    Expected value.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.
-   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-column-header-name) and [check column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-column-header-name) built-in actions return an empty value.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:table, list view, tree table, tree list.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_column_header_name_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_column_header_name_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_column_header_name_res.png)

