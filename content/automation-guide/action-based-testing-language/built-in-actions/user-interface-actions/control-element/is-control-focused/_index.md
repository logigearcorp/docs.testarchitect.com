--- 
title: "-"
linktitle: "is control focused"
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_is_control_focused.html
---
keyword: [is control focused, check if control is focused, check whether control is focused, verify if control is focused, check control is focused]
---

# is control focused

## Description

Return a Boolean value to indicate whether the specified control has focus.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Control has focus.

    -   **0**

        Control does not have focus.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, list box, menu, password, radio button, richtext, separator, spin, tab control, table, text box, toggle button, toolbar, trackbar, tree view.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, list box, list view, menu, password, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images//Images/bia_is_control_focused_aut.png)

**Action Lines**

![](/images//Images/bia_is_control_focused_pgm.png)

**Result**

![](/images//Images/bia_is_control_focused_res.png)

## Example

![](/images//Images/bia_is_control_focused_aut.png)

**Action Lines**

![](/images//Images/bia_is_control_focused_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_is_control_focused_ta4vs_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[get native property](/TA_Automation/Topics/bia_get_native_property.html)

**Next topic:**[set](/TA_Automation/Topics/bia_set.html)

**Related information**  


[focus control](/TA_Automation/Topics/bia_focus_control.html)

