--- 
title: "check tab not exists"
linktitle: "check tab not exists"
aliases: 
    - /TA_Automation/Topics/bia_check_tab_not_exists.html
---
# check tab not exists {#bia_check_tab_not_exists .reference}

## Description { .section}

Check for the nonexistence of a tab item \(a single tab in a tab bar\) as identified by its caption. Result is Passed ifthe specified tab item is not found; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

tab
:   TA name of the tab control.

item
:   Identifying caption of the tab item.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:tab control.

## Example { .section}

![](../Images/bia_check_tab_not_exists_aut.png)

**Action Lines**

![](../Images/bia_check_tab_not_exists_pgm.png)

**Result**

![](../Images/bia_check_tab_not_exists_res.png)

**Parent topic:**[Tab Controls](../../TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[check tab exists](../../TA_Automation/Topics/bia_check_tab_exists.html)

**Next topic:**[close tab](../../TA_Automation/Topics/bia_close_tab.html)

**Related information**  


[check tab exists](../../TA_Automation/Topics/bia_check_tab_exists.html)

[does tab exist](../../TA_Automation/Topics/bia_does_tab_exist.html)

