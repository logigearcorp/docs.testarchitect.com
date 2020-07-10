--- 
title: "scroll to view"
linktitle: "scroll to view"
description: "Description If the control exists in the window but is outside of the viewing area, scroll the control into view. Arguments window TA name of the window. control TA name of the control. Valid contexts ..."
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_iOS_scroll_to_view.html
keywords: "built-in actions, scroll to view, scroll to view (action), iOS (action), scroll to view, scroll into view, scroll view, scroll"
---

## {{< expand >}} Description

If the control exists in the window but is outside of the viewing area, scroll the control into view.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms {{< permerlink >}} {#bia_iOS_scroll_to_view__section_y2c_ncl_zcb} 

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_scroll_to_view_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_scroll_to_view_pgm.png)

**Effect**

![](/images/TA_Automation/Images/bia_scroll_to_view_effect.png)




