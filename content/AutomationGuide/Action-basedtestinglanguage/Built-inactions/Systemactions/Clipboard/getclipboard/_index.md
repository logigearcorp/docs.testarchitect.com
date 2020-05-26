--- 
title: "get clipboard"
linktitle: "get clipboard"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_get_clipboard.html
---
# get clipboard {#bia_get_clipboard .reference}

## Description { .section}

Get text content from the test machine's system clipboard.

## Arguments { .section}

variable
:   \(Optional\) Variable to receive the returned text string.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports text formats only. TestArchitect treats unrecognized formats in the clipboard as blank content.
-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   For multi-line clipboard contents, after using get clipboard, the actions get text line and check text line can be useful for processing or verifying the contents of individual lines.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [value changed wait](bis_value_changed_wait.html).

## Example { .section}

**Action Lines**

![](../Images/bia_get_clipboard_pgm.png)

**Result**

![](../Images/bia_get_clipboard_res.png)

**Parent topic:**[Clipboard](../../TA_Automation/Topics/bia_clipboard.html)

**Previous topic:**[check clipboard](../../TA_Automation/Topics/bia_check_clipboard.html)

**Next topic:**[set clipboard](../../TA_Automation/Topics/bia_set_clipboard.html)

