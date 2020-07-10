--- 
title: "check menu item exists"
linktitle: "check menu item exists"
description: "Description Check for the existence of an item on a menu. Result is Passed if the specified menu item is found ; otherwise Failed . Arguments window TA name of the window. menu (Optional/Mandatory ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_menu_item_exists.html
keywords: "built-in actions, check menu item exists, check menu item exists (action), Android (action), check menu item exists, check for existence of specific menu item, verify existence of specific menu item, check if specified menu item is found, check whether specified menu item exists"
---

## {{< expand >}} Description

Check for the existence of an item on a menu. Result is Passed ifthe specified menu item is found; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **menu**

    \(Optional/Mandatory based on platform – see the Notes section below\) TA name of the menu control.

-   **item**

    Menu item or menu item path \(see Notes\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   menu argument:
    -   The menuargument does not apply in the case of an AUT with a user interface based on the Windows API; in such cases, the argument should be omitted.
    -   For other platforms, the menu control of interest should be captured as an interface element and passed to this action through themenu argument.
-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Since submenu items are not available on Android mobile devices, checking for the existence of a subitem is not supported on Android.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:menu.

## {{< expand >}} Example - Case 1: Item on main menu of a Windows application

![](/images/TA_Automation/Images/bia_check_menu_item_exists_aut_1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_menu_item_exists_pgm_1.png)

**Result**

![](/images/TA_Automation/Images/bia_check_menu_item_exists_res_1.png)

## {{< expand >}} Example - Case 2: Item on menu of a Java application

![](/images/TA_Automation/Images/bia_check_menu_item_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_menu_item_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_menu_item_exists_res.png)

**Related information**  


[does menu item exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-menu-item-exist)

