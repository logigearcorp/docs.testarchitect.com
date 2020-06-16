--- 
title: "close tab"
linktitle: "close tab"
description: "Description Close a tab item. Arguments window TA name of the window. tab TA name of the tab control. item Identifying caption of the tab item. Valid contexts This action may be used within the ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_close_tab.html
keywords: "built-in actions, close tab, close tab (action), close tab, close specified tab"
---

## Description

Close a tab item.

## Arguments

-   **window**

    TA name of the window.

-   **tab**

    TA name of the tab control.

-   **item**

    Identifying caption of the tab item.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:tab control

## Example

![](/images/TA_Automation/Images/bia_close_tab_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_close_tab_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_close_tab_res.png)




