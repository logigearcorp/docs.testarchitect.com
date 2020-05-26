--- 
title: "set clipboard"
linktitle: "set clipboard"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_clipboard.html
---
# set clipboard {#bia_set_clipboard .reference}

## Description { .section}

Set the contents of the test machine's system clipboard.

## Arguments { .section}

value
:   The text to set.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   If the value argument is empty, the clipboard is cleared.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_set_clipboard_pgm.png)

**Result**

![](../Images/bia_set_clipboard_res.png)

**Parent topic:**[Clipboard](../../TA_Automation/Topics/bia_clipboard.html)

**Previous topic:**[get clipboard](../../TA_Automation/Topics/bia_get_clipboard.html)

