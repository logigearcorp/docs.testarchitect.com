--- 
title: "-"
linktitle: "click toolbar button"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_click_toolbar_button.html
---
keyword: [click toolbar button, click button on toolbar, click icon on toolbar]
---

# click toolbar button

## Description

Click a button on a toolbar.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   button argument:
    -   The buttonmay be specified by either of two means:its caption text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:toolbar.

## Example - Case 1: Using a text value for button

![](/images//Images/bia_click_toolbar_button_aut.png)

**Action Lines**

![](/images//Images/bia_click_toolbar_button_pgm.png)

**Result**

![](/images//Images/bia_click_toolbar_button_res.png)

## Example - Case 2: Using a numerical index value for button

![](/images//Images/bia_click_toolbar_button_index_aut.png)

**Action Lines**

![](/images//Images/bia_click_toolbar_button_index_pgm.png)

**Result**

![](/images//Images/bia_click_toolbar_button_index_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[click select menu](/TA_Automation/Topics/bia_click_select_menu.html)

**Next topic:**[does button menu exist](/TA_Automation/Topics/bia_does_button_menu_exist.html)

