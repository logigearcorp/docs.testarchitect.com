--- 
title: "check tab not exists"
linktitle: "check tab not exists"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_tab_not_exists.html
keywords: "check tab not exists, check if specified tab does not exist, check whether specified tab does not exist, check for nonexistence of specified tab, verify nonexistence of specified tab"
---

## Description

Check for the nonexistence of a tab item \(a single tab in a tab bar\) as identified by its caption. Result is Passed ifthe specified tab item is not found; otherwise Failed.

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

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images//Images/bia_check_tab_not_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_tab_not_exists_pgm.png)

**Result**

![](/images//Images/bia_check_tab_not_exists_res.png)

**Parent topic:**[Tab Controls](/TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[check tab exists](/TA_Automation/Topics/bia_check_tab_exists.html)

**Next topic:**[close tab](/TA_Automation/Topics/bia_close_tab.html)

**Related information**  


[check tab exists](/TA_Automation/Topics/bia_check_tab_exists.html)

[does tab exist](/TA_Automation/Topics/bia_does_tab_exist.html)

