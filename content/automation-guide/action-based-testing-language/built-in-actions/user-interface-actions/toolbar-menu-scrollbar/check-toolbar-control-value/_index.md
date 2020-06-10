--- 
title: "check toolbar control value"
linktitle: "check toolbar control value"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_control_value.html
keywords: "check toolbar control value, check displayed text of text box on toolbar against expected value, check selected value of combo box on toolbar against expected value, check if text of control matches expected value, verify whether text of control matches expected value"
---

## Description

Check the displayed text of a text box or a combo box control on a toolbar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **control**

    Index number of toolbar-contained control \(see Notes\).

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   For the control argument, , note that index numbering begins with 1, and proceeds from left to right.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar.

## Example

![](/images//Images/bia_check_toolbar_control_value_aut.png)

**Action Lines**

![](/images//Images/bia_check_toolbar_control_value_pgm.png)

**Result**

![](/images//Images/bia_check_toolbar_control_value_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check toolbar button state](/TA_Automation/Topics/bia_check_toolbar_button_state.html)

**Next topic:**[check toolbar menu item exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)

