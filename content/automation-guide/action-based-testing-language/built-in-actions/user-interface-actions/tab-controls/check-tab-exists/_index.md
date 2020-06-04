--- 
title: "-"
linktitle: "check tab exists"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_tab_exists.html
---
keyword: [check tab exists, check for existence of specified tab, check if specified tab exists, check whether specific tab exists, verify existence of specific tab]
---

# check tab exists

## Description

Check for the existence of a tab item \(a single tab in a tab bar\) as identified by its caption. Result is Passed ifthe specified tab item is found; otherwise Failed.

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

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images//Images/bia_check_tab_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_tab_exists_pgm.png)

**Result**

![](/images//Images/bia_check_tab_exists_res.png)

**Parent topic:**[Tab Controls](/TA_Automation/Topics/bia_Tab_controls.html)

**Next topic:**[check tab not exists](/TA_Automation/Topics/bia_check_tab_not_exists.html)

**Related information**  


[check tab not exists](/TA_Automation/Topics/bia_check_tab_not_exists.html)

[does tab exist](/TA_Automation/Topics/bia_does_tab_exist.html)

