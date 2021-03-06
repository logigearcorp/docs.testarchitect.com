--- 
title: "select context menu item"
linktitle: "select context menu item"
weight: 29
aliases: 
    - /TA_Automation/Topics/bia_select_context_menu_item.html
keywords: "select specific item on context menu, select context menu item"
---

## Description

Select an item on a specified context menu.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **control**

    \(Optional\) TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **x**

    \(Optional\) Horizontal position of effective click on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective click on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)

-   **click type**

    \(Optional\) Type of mouse click \(for activating the menu\).

    Allowable values:

    -   **left**

        Single left-mouse click.

    -   **right**

        \(Default\) Single right-mouse click.

    -   **double**

        Double left-mouse click.

    **Note:** click type is an unsupported argument and hence invisible. To use it, you must specify both the value and the header click type in the cells to the right of the y argument.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    **Note:** As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    **Restriction:** This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   click type argument: Thisis an unsupported argument and hence invisible. To use it, you must specify both its value and header, in the cell to the right of last visible argument.
-   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [page wait](page_wait.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example - Case 1: Use text value

![](/images//Images/bia_select_context_menu_item_aut1.png)

**Action Lines**

![](/images//Images/bia_select_context_menu_item_pgm.png)

**Result**

![](/images//Images/bia_select_context_menu_item_res.png)

**Effect**

![](/images//Images/bia_select_context_menu_item_aut2.png)

## Example - Case 2: Use numerical index value

![](/images//Images/bia_select_context_menu_item_index_aut1.png)

**Action Lines**

![](/images//Images/bia_select_context_menu_item_index_pgm.png)

**Result**

![](/images//Images/bia_select_context_menu_item_index_res.png)

**Effect**

![](/images//Images/bia_select_context_menu_item_index_aut2.png)

## Example

![](/images//Images/bia_select_context_menu_item_aut1.png)

**Action Lines**

![](/images//Images/bia_select_context_menu_item_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_select_context_menu_item_ta4vs_res.png)

**Effect**

![](/images//Images/bia_select_context_menu_item_aut2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[select button menu](/TA_Automation/Topics/bia_select_button_menu.html)

**Next topic:**[select list item menu](/TA_Automation/Topics/bia_select_list_item_menu.html)

