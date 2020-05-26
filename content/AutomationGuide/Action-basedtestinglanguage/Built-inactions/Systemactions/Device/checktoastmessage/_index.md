--- 
title: "check toast message"
linktitle: "check toast message"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_toast_message.html
---
# check toast message {#bia_check_toast_message .reference}

## Description { .section}

Check the toast message on a mobile device against an expected string value. Result is Passed ifthe values match within a specified timeout period; otherwise Failed.

## Arguments { .section}

message
:   Expected contents of the mobile toast message.

timeout
:   Maximum time to wait for a toast message to appear \(units: milliseconds; default = 3000\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: Android.

## Notes { .section}

-   The message argument can accept regular expressions. Note that argument values that include regular expressions must be entirely enclosed in curly braces \{\}. As an example, `{[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}}` specifies the pattern for an acceptable email address. More simply, `.*` represents the general wildcard for regular expressions, so that `{.*arch.*}` matches starch, marching, testarchitect, etc.

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Example { .section}

Let's say you are testing an application on a mobile device. After you tap to select a given check box, a toast message appears in a small popup. You want to verify the content of the text message.

![](../Images/bia_check_toast_message_aut.r02.png)

**Action Lines**

![](../Images/bia_check_toast_message_pgm.r02.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[check displayed text](../../TA_Automation/Topics/bia_check_displayed_text.html)

**Next topic:**[connect cloud device](../../TA_Automation/Topics/bia_connect_cloud_device.html)

