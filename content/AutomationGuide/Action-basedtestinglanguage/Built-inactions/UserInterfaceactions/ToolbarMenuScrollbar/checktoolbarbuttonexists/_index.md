--- 
title: "check toolbar button exists"
linktitle: "check toolbar button exists"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_button_exists.html
---
# check toolbar button exists {#bia_check_toolbar_button_exists .reference}

## Description { .section}

Check for the existence of a button on a toolbar. Result is Passed ifthe specified button is found; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the toolbar control.

button
:   Button, as identified by its captionor index value.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   button argument:
    -   The buttonmay be specified by either of two means:the caption text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)

        **Restriction:** Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:toolbar.

## Example - Case 1: Using a text value for button { .section}

![](../Images/bia_check_toolbar_button_exists_aut.png)

**Action Lines**

![](../Images/bia_check_toolbar_button_exists_pgm.png)

**Result**

![](../Images/bia_check_toolbar_button_exists_res.png)

## Example - Case 2: Using a numerical index value for button { .section}

![](../Images/bia_check_toolbar_button_exists_index_aut.png)

**Action Lines**

![](../Images/bia_check_toolbar_button_exists_index_pgm.png)

**Result**

![](../Images/bia_check_toolbar_button_exists_index_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check menu item exists](../../TA_Automation/Topics/bia_check_menu_item_exists.html)

**Next topic:**[check toolbar button not exists](../../TA_Automation/Topics/bia_check_toolbar_button_not_exists.html)

**Related information**  


[check toolbar button not exists](../../TA_Automation/Topics/bia_check_toolbar_button_not_exists.html)

[does toolbar button exist](../../TA_Automation/Topics/bia_does_toolbar_button_exist.html)

