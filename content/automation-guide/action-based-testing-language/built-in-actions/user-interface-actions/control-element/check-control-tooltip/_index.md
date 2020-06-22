--- 
title: "check control tooltip"
linktitle: "check control tooltip"
description: "Description Capture the tooltip text of a control and compare it against an expected string. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. control ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_control_tooltip.html
keywords: "built-in actions, check control tooltip, check control tooltip (action), check control tooltip, check control tooltip against expected string, check if control tooltip matches expected string, check whether control tooltip matches expected string"
---

## Description

Capture the tooltip text of a control and compare it against an expected string. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **item**

    \(Optional, applies to tab controls only\) The tab item, as identified by the value of its name property.

-   **expected**

    Expected tooltip text.

-   **x**

    \(Optional\) Horizontal position of simulated mouse pointer, specified as distance in pixels from left edge of control. \(Defaults to horizontal center of control.\)

-   **y**

    \(Optional\) Vertical position of effective click, specified as distance in pixels from top edge of control. \(Defaults to vertical center of control.\)

-   **type**

    \(Optional\) Interaction type on control as required to induce tooltip appearance.

    Allowable values:

    -   click
    -   move
-   **waittime**

    \(Optional\) Time to wait for the tooltip to appear \(units: milliseconds\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Use the x, y coordinates, type and/or waittime arguments if so required to make the tooltip text accessible.
-   As a general rule for all actions involving x,y coordinate arguments, the coordinates are specified in pixels relative to the top-left corner of the:

    -   control, if the action has window and control arguments, and values are specified for both of them;
    -   window, if the action has a value specified for a window argument, but has no control value specified \(whether or not the control argument exists\);
    -   screen, if neither a window nor control value is specified, whether or not such arguments exist.
{{<note>}} As for TestArchitect 8.4 Update 2, the coordinates are determined in pixels relative to the top-left corner of the working document.

{{<restriction>}} This rule should not be taken to imply that any control or window arguments are optional if their associated actions don't explicitly state that.

-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window, calendar.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example

![](/images/TA_Automation/Images/bia_check_control_tooltip_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_control_tooltip_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_control_tooltip_res.png)




**Related information**  


[get control tooltip](/TA_Automation/Topics/bia_get_control_tooltip.html)

