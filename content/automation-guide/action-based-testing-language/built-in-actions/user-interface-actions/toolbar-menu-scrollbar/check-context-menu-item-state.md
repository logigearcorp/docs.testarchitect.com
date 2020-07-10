--- 
title: "check context menu item state"
linktitle: "check context menu item state"
description: "Description Validate the current state(s) of a given menu item on a context menu. Result is Passed if all the expected states match those of the menu item ; otherwise Failed . Arguments window TA name ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_context_menu_item_state.html
keywords: "built-in actions, check context menu item state, check context menu item state (action), check content menu item state, check states of given item on context menu, verify states of given item on context menu"
---

## {{< expand >}} Description

Validate the current state\(s\) of a given menu item on a context menu. Result is Passed if all the expected states match those of the menu item; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **expected**

    Expected value\(s\) of the state property of the menu item.

    Possible returned values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    {{<tip>}} Use commas \(,\) as delimiters between expected values of the state property.

-   **x**

    \(Optional\) Horizontal position of effective tap on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective tap on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   This action only checks the state\(s\) that you specify, and ignores those not specified. Hence, if the state of the tested menu item is enabled and visible, a check will pass for any of the expected values of enabled, visible, and enabled, visible. It fails if any one of the specified expected states is not true.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## {{< expand >}} Example - Case 1: Using a text value

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_res.png)

## {{< expand >}} Example - Case 2: Using a numerical index value

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_context_menu_item_state_index_res.png)



**Related information**  


[get context menu item state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/get-context-menu-item-state)

