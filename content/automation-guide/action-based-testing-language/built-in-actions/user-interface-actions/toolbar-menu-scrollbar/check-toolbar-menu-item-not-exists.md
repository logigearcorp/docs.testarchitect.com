--- 
title: "check toolbar menu item not exists"
linktitle: "check toolbar menu item not exists"
description: "Description Check for the nonexistence of an item on a drop-down menu hosted by a toolbar button (that is, a drop-down menu that appears when one clicks a button on a toolbar). Result is Passed if the ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html
keywords: "built-in actions, check toolbar menu item not exists, check toolbar menu item not exists (action), check toolbar menu item no exists, check for nonexistence of specified item on drop-down menu on toolbar, check if specified item on drop-down menu on toolbar is found, verify whether specified item on drop-down menu on toolbar exists"
---

## Description

Check for the nonexistence of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when one clicks a button on a toolbar\). Result is Passed ifthe item is not found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images/TA_Automation/Images/bia_check_toolbar_menu_item_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_toolbar_menu_item_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_toolbar_menu_item_not_exists_res.png)




**Related information**  


[check toolbar menu item exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-menu-item-exists)

[does toolbar menu item exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-toolbar-menu-item-exist)
