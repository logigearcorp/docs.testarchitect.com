--- 
title: "get clipboard"
linktitle: "get clipboard"
description: "Description Get text content from the test machine's system clipboard. Arguments variable (Optional) Variable to receive the returned text string. Valid contexts This action may be used within the ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_clipboard.html
keywords: "built-in actions, get clipboard, get clipboard (action), get clipboard contents, get clipboard, retrieve clipboard contents, retrieve clipboard"
---

## Description

Get text content from the test machine's system clipboard.

## Arguments

-   **variable**

    \(Optional\) Variable to receive the returned text string.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports text formats only. TestArchitect treats unrecognized formats in the clipboard as blank content.
-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   For multi-line clipboard contents, after using get clipboard, the actions get text line and check text line can be useful for processing or verifying the contents of individual lines.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_get_clipboard_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_clipboard_res.png)



