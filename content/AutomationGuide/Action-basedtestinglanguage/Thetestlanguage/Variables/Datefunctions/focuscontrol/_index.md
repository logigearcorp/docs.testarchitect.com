--- 
title: "focus control"
linktitle: "focus control"
aliases: 
    - /TA_Automation/Topics/bia_focus_control.html
---
# focus control {#bia_focus_control .reference}

## Description { .section}

Apply focus to a specified control.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, link, list box, menu, password, radio button, richtext, separator, spin, tab control, table, text box, toggle button, toolbar, trackbar, tree view.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, list box, list view, menu, password, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example { .section}

![](../Images/bia_focus_control_pgm.png)

**Action Lines**

![](../Images/bia_focus_control_res.png)

**Result**

![](../Images/bia_focus_control_aut.png)

## Example { .section}

![](../Images/bia_focus_control_ta4vs_pgm.png)

**Action Lines**

![](../Images/bia_focus_control_ta4vs_res.png)

**Result**

![](../Images/bia_focus_control_aut.png)

**Parent topic:**[Control, Element](../../TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[enter](../../TA_Automation/Topics/bia_enter.html)

**Next topic:**[get](../../TA_Automation/Topics/bia_get.html)

**Related information**  


[is control focused](../../TA_Automation/Topics/bia_is_control_focused.html)

