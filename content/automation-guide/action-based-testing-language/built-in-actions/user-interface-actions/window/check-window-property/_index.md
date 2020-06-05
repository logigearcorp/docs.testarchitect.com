--- 
title: "check window property"
linktitle: "check window property"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_window_property.html
---
keyword: [check window property, check if value of specific property of window matches expected value, check value of specified property of window against expected value, verify whether value of specific property of window matches expected value]
---

# check window property

## Description

Check the value of a specified TA property of a window against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **property**

    TA property to check.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is applicable only to properties that can be captured by the TestArchitect Interface Viewer.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [property wait](bis_property_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images//Images/bia_check_window_property_aut.png)

**Action Lines**

![](/images//Images/bia_check_window_property_pgm.png)

**Result**

![](/images//Images/bia_check_window_property_res.png)

**Parent topic:**[Window](/TA_Automation/Topics/bia_Window.html)

**Previous topic:**[check window not exists](/TA_Automation/Topics/bia_check_window_not_exists.html)

**Next topic:**[close window](/TA_Automation/Topics/bia_close_window.html)

**Related information**  


[get window property](/TA_Automation/Topics/bia_get_window_property.html)

