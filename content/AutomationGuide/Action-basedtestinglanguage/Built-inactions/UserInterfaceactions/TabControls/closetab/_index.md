--- 
title: "close tab"
linktitle: "close tab"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_close_tab.html
---
# close tab {#bia_close_tab .reference}

## Description { .section}

Close a tab item.

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

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:tab control

## Example { .section}

![](../Images/bia_close_tab_aut.png)

**Action Lines**

![](../Images/bia_close_tab_pgm.png)

**Result**

![](../Images/bia_close_tab_res.png)

**Parent topic:**[Tab Controls](../../TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[check tab not exists](../../TA_Automation/Topics/bia_check_tab_not_exists.html)

**Next topic:**[does tab exist](../../TA_Automation/Topics/bia_does_tab_exist.html)

