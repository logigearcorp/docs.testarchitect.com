--- 
title: "check toast message"
linktitle: "check toast message"
description: "Description Check the toast message on a mobile device against an expected string value. Result is Passed if the values match within a specified timeout period ; otherwise Failed . Arguments message ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_toast_message.html
keywords: "built-in actions, check toast message, check toast message (action), Android (action), check toast message, check a toast, toast messages, verify a toast, validate a toast"
---

## Description

Check the toast message on a mobile device against an expected string value. Result is Passed ifthe values match within a specified timeout period; otherwise Failed.

## Arguments

-   **message**

    Expected contents of the mobile toast message.

-   **timeout**

    Maximum time to wait for a toast message to appear \(units: milliseconds; default = 3000\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Android.

## Notes

-   The message argument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## Example

Let's say you are testing an application on a mobile device. After you tap to select a given check box, a toast message appears in a small popup. You want to verify the content of the text message.

![](/images/TA_Automation/Images/bia_check_toast_message_aut.r02.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toast_message_pgm.r02.png)




