--- 
title: "select list item menu"
linktitle: "select list item menu"
description: "Description Long-tap an item in a list view control to display a menu control, then select (tap) an item menu in the open menu. Arguments window TA name of the window or dialog box containing the ..."
weight: 30
aliases: 
    - /TA_Automation/Topics/bia_select_list_item_menu.html
keywords: "built-in actions, select list item menu, select list item menu (action), select list item menu, select item from menu in list view, select item from list view menu"
---

## {{< expand >}} Description

Long-tap an item in a list view control to display a menu control, then select \(tap\) an item menu in the open menu.

Select an item on a specified menu.

## {{< expand >}} Arguments

-   **window**

    TA name of the window or dialog box containing the ListView.

    TA name of the window or dialog box containing the list.

-   **control**

    TA name of the ListView control.

    TA name of the control.

-   **list item**

    The item to be selected in the ListView control.

    The item to be selected in the list.

-   **menu item**

    Menu item or menu item path \(see Notes\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This built-in action applies to Android operating system only.
-   The list item argument is specified by the item's caption property.
-   menu item argument:
    -   menu items are specified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:list view

This action is applicable to the following controls:list box

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_select_list_item_menu_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_list_item_menu_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_list_item_menu_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_select_list_item_menu_effect.png)

