--- 
title: "check toolbar control value"
linktitle: "check toolbar control value"
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_control_value.html
---
# check toolbar control value {#bia_check_toolbar_control_value .reference}

## Description { .section}

Check the displayed text of a text box or a combo box control on a toolbar against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

toolbar
:   TA name of the toolbar control.

control
:   Index number of toolbar-contained control \(see Notes\).

expected
:   Expected value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   For the control argument, , note that index numbering begins with 1, and proceeds from left to right.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:toolbar.

## Example { .section}

![](../Images/bia_check_toolbar_control_value_aut.png)

**Action Lines**

![](../Images/bia_check_toolbar_control_value_pgm.png)

**Result**

![](../Images/bia_check_toolbar_control_value_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check toolbar button state](../../TA_Automation/Topics/bia_check_toolbar_button_state.html)

**Next topic:**[check toolbar menu item exists](../../TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)

