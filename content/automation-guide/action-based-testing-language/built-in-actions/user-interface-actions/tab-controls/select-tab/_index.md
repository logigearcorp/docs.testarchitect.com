--- 
title: "select tab"
linktitle: "select tab"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_select_tab.html
---
keyword: [select tab, select specified tab]
---

# select tab

## Description

Select a tab item.

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

-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images//Images/bia_select_tab_aut.png)

**Action Lines**

![](/images//Images/bia_select_tab_pgm.png)

**Result**

![](/images//Images/bia_select_tab_res.png)

**Parent topic:**[Tab Controls](/TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[select page](/TA_Automation/Topics/bia_iOS_select_page.html)

