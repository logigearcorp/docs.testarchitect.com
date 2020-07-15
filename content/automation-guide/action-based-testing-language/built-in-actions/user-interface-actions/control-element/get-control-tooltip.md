--- 
title: "get control tooltip"
linktitle: "get control tooltip"
description: "Description Retrieve the tooltip text of a specified control. Arguments window TA name of the window. control TA name of the control. item (Optional, applies to tab controls only) The tab item, as ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_get_control_tooltip.html
keywords: "built-in actions, get control tooltip, get control tooltip (action), get control tooltip, retrieve control tooltip, get tooptip text of control, retrieve tooltip text of control"
---

## Description

Retrieve the tooltip text of a specified control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **item**

    \(Optional, applies to tab controls only\) The tab item, as identified by the value of its name property.

-   **variable**

    \(Optional\) Variable to receive the returned value.

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

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window, calendar.



## Example

![](/images/TA_Automation/Images/bia_get_control_tooltip_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_control_tooltip_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_control_tooltip_res.png)

**Related information**  


[check control tooltip](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-tooltip)
