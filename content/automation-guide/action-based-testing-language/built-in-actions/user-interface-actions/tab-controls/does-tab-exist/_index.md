--- 
title: "does tab exist"
linktitle: "does tab exist"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_does_tab_exist.html
---
keyword: [does tab exist, check if given tab exists, check for existence of given tab]
---

# does tab exist

## Description

Return a Boolean value to indicate whether a specified tab item, as identified by its caption, is found to exist.

## Arguments

-   **window**

    TA name of the window.

-   **tab**

    TA name of the tab control.

-   **item**

    Identifying caption of the tab item.

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Tab item found.

    -   **0**

        Tab item not found


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images//Images/bia_does_tab_exists_aut.png)

**Action Lines**

![](/images//Images/bia_does_tab_exists_pgm.png)

**Result**

![](/images//Images/bia_does_tab_exists_res.png)

**Parent topic:**[Tab Controls](/TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[close tab](/TA_Automation/Topics/bia_close_tab.html)

**Next topic:**[select page](/TA_Automation/Topics/bia_iOS_select_page.html)

**Related information**  


[check tab exists](/TA_Automation/Topics/bia_check_tab_exists.html)

[check tab not exists](/TA_Automation/Topics/bia_check_tab_not_exists.html)

