--- 
title: "click select menu"
linktitle: "click select menu"
description: "Description Click a given menu control, and then select a specified menu item. Arguments window TA name of the window. control (Optional/Mandatory based on platform – see the Notes section below) TA ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_click_select_menu.html
keywords: "built-in actions, click select menu, click select menu (action), click select menu, click submenu and click menu item, select given menu item from submenu, navigate to submenu and select particular menu item"
---

## Description

Click a given menu control, and then select a specified menu item.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    \(Optional/Mandatory based on platform – see the Notes section below\) TA name of the menu control.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **button**

    \(Optional\) Type of mouse click.

    Allowable values:

    -   **left**

        \(Default\) Single left-click.

    -   **right**

        Single right-click.

    -   **double**

        Double left-click.

-   **x**

    \(Optional\) Horizontal position of effective click on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective click on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   control argument:
    -   The controlargument does not apply in the case of an AUT with a user interface based on the Windows API; in such cases, the argument should be omitted.
    -   For other platforms, the menu control of interest should be captured as an interface element and passed to this action through thecontrol argument.
-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Since submenu items are not available on Android mobile devices, clicking on a subitem is not supported on Android.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
    {{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

    {{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_click_select_menu_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_select_menu_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_click_select_menu_aut.png)

## Example

![](/images/TA_Automation/Images/bia_click_select_menu_ta4vs_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_click_select_menu_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_click_select_menu_ta4vs_pgm.png)

**Effect**

![](/images/TA_Automation/Images/bia_click_select_menu_ta4vs_effect.png)




