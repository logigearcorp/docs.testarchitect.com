--- 
title: "set clipboard"
linktitle: "set clipboard"
description: "Description Set the contents of the test machine's system clipboard. Arguments value The text to set. Valid contexts This action may be used within the following project items: test modules and ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_set_clipboard.html
keywords: "built-in actions, set clipboard, set clipboard (action), set clipboard contents, set clipboard"
---

## Description

Set the contents of the test machine's system clipboard.

## Arguments

-   **value**

    The text to set.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the value argument is empty, the clipboard is cleared.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_clipboard_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_clipboard_res.png)



