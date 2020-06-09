--- 
title: "is toolbar button pressed"
linktitle: "is toolbar button pressed"
weight: 23
aliases: 
    - /TA_Automation/Topics/bia_is_toolbar_button_pressed.html
---
keyword: [is toolbar button pressed, check if specific button on toolbar is pressed, check whether particular button on toolbar is pressed, verify if specified button on toolbar is pressed]
---

# is toolbar button pressed

## Description

Return a Boolean value to indicate whether a button on a toolbar is depressed.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **item**

    Button, as identified by its captionor index value.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Button is pressed.

    -   **0**

        Button is not pressed.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   The item argumentmay be specified by either of two means:the button's caption text, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:toolbar.

## Example - Case 1: Use text value

![](/images//Images/bia_is_toolbar_button_pressed_aut.png)

**Action Lines**

![](/images//Images/bia_is_toolbar_button_pressed_pgm.png)

**Result**

![](/images//Images/bia_is_toolbar_button_pressed_res.png)

## Example - Case 2: Use numerical index value

![](/images//Images/bia_is_toolbar_button_pressed_index_aut.png)

**Action Lines**

![](/images//Images/bia_is_toolbar_button_pressed_index_pgm.png)

**Result**

![](/images//Images/bia_is_toolbar_button_pressed_index_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[get toolbar menu state](/TA_Automation/Topics/bia_get_toolbar_menu_state.html)

**Next topic:**[scroll down](/TA_Automation/Topics/bia_scroll_down.html)

