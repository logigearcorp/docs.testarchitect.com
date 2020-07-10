--- 
title: "select button menu"
linktitle: "select button menu"
description: "Description Select an item on a drop-down button menu. Arguments window TA name of the window. control TA name of the button control. item Menu item or menu item path (see Notes ). Valid contexts This ..."
weight: 28
aliases: 
    - /TA_Automation/Topics/bia_select_button_menu.html
keywords: "built-in actions, select button menu, select button menu (action), select button menu, select specified item on drop-down button menu, select drop-down button menu item"
---

## {{< expand >}} Description

Select an item on a drop-down button menu.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the button control.

-   **item**

    Menu item or menu item path \(see Notes\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   item argument: If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:menu.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_select_button_menu_pgm.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_button_menu_res.png)

**Result**

![](/images/TA_Automation/Images/bia_select_button_menu_aut.png)

