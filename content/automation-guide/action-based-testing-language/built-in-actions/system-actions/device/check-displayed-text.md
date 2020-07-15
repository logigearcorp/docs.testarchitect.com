--- 
title: "check displayed text"
linktitle: "check displayed text"
description: "Description Check the text in a control against an expected text string. Result is Passed if the two strings match ; otherwise Failed . Arguments window TA name of the window. control TA name of the ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_displayed_text.html
keywords: "built-in actions, check displayed text, check displayed text (action), iOS (action), check displayed text, verify displayed text, validate displayed text"
---

## Description

Check the text in a control against an expected text string. Result is Passed ifthe two strings match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **expected**

    The expected text content of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: iOS.

## Notes {{< permerlink >}} {#bia_check_displayed_text__section_tll_j2y_mk} 

-   This built-in action applies only to the iOS operating system.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:activity indicator view, button, collection view, collection view cell, date picker, image, label, map view, navigation bar, page control, picker view, progress bar, scroll view, search bar, segmented control, slider, stepper, switch, tab bar, table view, table view cell, text view, text box, toolbar, view, web view, window.

## Example

![](/images/TA_Automation/Images/bia_check_displayed_text_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_displayed_text_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_displayed_text_res.png)



