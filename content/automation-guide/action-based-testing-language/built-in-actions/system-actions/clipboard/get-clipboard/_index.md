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
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_get_clipboard_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_clipboard_res.png)




