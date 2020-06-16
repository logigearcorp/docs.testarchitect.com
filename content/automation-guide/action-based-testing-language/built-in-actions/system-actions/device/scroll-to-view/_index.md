--- 
title: "scroll to view"
linktitle: "scroll to view"
description: "Description If the control exists in the window but is outside of the viewing area, scroll the control into view. Arguments window TA name of the window. control TA name of the control. Valid contexts ..."
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_iOS_scroll_to_view.html
keywords: "built-in actions, scroll to view, scroll to view (action), iOS (action), scroll to view, scroll into view, scroll view, scroll"
---

## Description

If the control exists in the window but is outside of the viewing area, scroll the control into view.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

![](/images/TA_Automation/Images/bia_scroll_to_view_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_scroll_to_view_pgm.png)

**Effect**

![](/images/TA_Automation/Images/bia_scroll_to_view_effect.png)




