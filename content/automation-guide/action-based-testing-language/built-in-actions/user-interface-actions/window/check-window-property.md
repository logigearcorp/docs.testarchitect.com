--- 
title: "check window property"
linktitle: "check window property"
description: "Description Check the value of a specified TA property of a window against an expected value. Result is Passed if the values match ; otherwise Failed . Arguments window TA name of the window. property ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_window_property.html
keywords: "built-in actions, check window property, check window property (action), iOS (action), check window property, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if value of specific property of window matches expected value, check value of specified property of window against expected value, verify whether value of specific property of window matches expected value"
---

## Description

Check the value of a specified TA property of a window against an expected value. Result is Passed ifthe values match; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **property**

    TA property to check.

-   **expected**

    Expected value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is applicable only to properties that can be captured by the TestArchitect Interface Viewer.
-   The expectedargument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [property wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/property-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_check_window_property_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_window_property_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_window_property_res.png)




**Related information**  


[get window property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/get-window-property)

