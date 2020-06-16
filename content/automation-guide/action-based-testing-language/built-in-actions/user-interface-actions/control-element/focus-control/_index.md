--- 
title: "focus control"
linktitle: "focus control"
description: "Description Apply focus to a specified control. Arguments window TA name of the window. control TA name of the control. Valid contexts This action may be used within the following project items: test ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_focus_control.html
keywords: "built-in actions, focus control, focus control (action), iOS (action), focus control, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), set focus on control, put focus on control"
---

## Description

Apply focus to a specified control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, link, list box, menu, password, radio button, richtext, separator, spin, tab control, table, text box, toggle button, toolbar, trackbar, tree view.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, list box, list view, menu, password, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images/TA_Automation/Images/bia_focus_control_pgm.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_focus_control_res.png)

**Result**

![](/images/TA_Automation/Images/bia_focus_control_aut.png)

## Example

![](/images/TA_Automation/Images/bia_focus_control_ta4vs_pgm.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_focus_control_ta4vs_res.png)

**Result**

![](/images/TA_Automation/Images/bia_focus_control_aut.png)




**Related information**  


[is control focused](/TA_Automation/Topics/bia_is_control_focused.html)

