--- 
title: "get displayed text"
linktitle: "get displayed text"
description: "Description Retrieve the all text displayed in a control. Arguments window TA name of the window. control TA name of the control. variable (Optional) Variable to receive the returned text. Valid ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bia_get_displayed_text.html
keywords: "built-in actions, get displayed text, get displayed text (action), iOS (action), get displayed text, retrieve displayed text, get onscreen text, retrieve onscreen text"
---

## Description

Retrieve the all text displayed in a control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **variable**

    \(Optional\) Variable to receive the returned text.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: iOS.

## Notes

-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

Use get displayed text to retrieve the default text found in the **username** control of a login window, then check that it matches the string “John”.

![](/images/TA_Automation/Images/bia_get_displayed_text_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_displayed_text_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_displayed_text_res.png)




