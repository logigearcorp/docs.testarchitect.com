--- 
title: "select toolbar menu"
linktitle: "select toolbar menu"
description: "Description Select an item on a toolbar button menu. Arguments window TA name of the window. toolbar TA name of the toolbar control. button Button, as identified by its caption or index value . menu ..."
weight: 32
aliases: 
    - /TA_Automation/Topics/bia_select_toolbar_menu.html
keywords: "built-in actions, select toolbar menu, select toolbar menu (action), select toolbar menu, select specified item on button menu on toolbar, select specified item on menu on toolbar button"
---

## Description

Select an item on a toolbar button menu.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **menu item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   menu item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_select_toolbar_menu_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_toolbar_menu_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_select_toolbar_menu_aut.png)



