--- 
title: "scroll to view"
linktitle: "scroll to view"
aliases: 
    - /TA_Automation/Topics/bia_iOS_scroll_to_view.html
---
# scroll to view {#bia_iOS_scroll_to_view .reference}

## Description { .section}

If the control exists in the window but is outside of the viewing area, scroll the control into view.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_y2c_ncl_zcb .section}

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example { .section}

![](../Images/bia_scroll_to_view_aut.png)

**Action Lines**

![](../Images/bia_scroll_to_view_pgm.png)

**Effect**

![](../Images/bia_scroll_to_view_effect.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[press device buttons](../../TA_Automation/Topics/bia_press_device_buttons.html)

**Next topic:**[set screen orientation](../../TA_Automation/Topics/bia_set_screen_orientation.html)

