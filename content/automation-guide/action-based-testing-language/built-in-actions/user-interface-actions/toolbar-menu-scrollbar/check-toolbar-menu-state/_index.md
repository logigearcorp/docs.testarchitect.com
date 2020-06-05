--- 
title: "check toolbar menu state"
linktitle: "check toolbar menu state"
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_menu_state.html
---
keyword: [check toolbar menu state, check state of specified item on drop-down menu on toolbar against expected value, check if drop-down menu item on toolbar matches expected value, verify whether drop-down mneu item on toolbar matches expected value]
---

# check toolbar menu state

## Description

Check, against an expected value, the state of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\). Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **expected**

    Expected value\(s\) of the menu item.

    Possible values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    **Tip:** Use commas \(,\) as delimiters between expected values of the state property.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images//Images/bia_check_toolbar_menu_state_aut.png)

**Action Lines**

![](/images//Images/bia_check_toolbar_menu_state_pgm.png)

**Result**

![](/images//Images/bia_check_toolbar_menu_state_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check toolbar menu item not exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html)

**Next topic:**[click select menu](/TA_Automation/Topics/bia_click_select_menu.html)

