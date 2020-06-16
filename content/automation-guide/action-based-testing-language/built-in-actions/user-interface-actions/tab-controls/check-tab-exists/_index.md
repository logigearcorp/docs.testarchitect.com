--- 
title: "check tab exists"
linktitle: "check tab exists"
description: "Description Check for the existence of a tab item (a single tab in a tab bar) as identified by its caption. Result is Passed if the specified tab item is found ; otherwise Failed . Arguments window TA ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_tab_exists.html
keywords: "built-in actions, check tab exists, check tab exists (action), Android (action), check tab exists, check for existence of specified tab, check if specified tab exists, check whether specific tab exists, verify existence of specific tab"
---

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

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images/TA_Automation/Images/bia_check_tab_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tab_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tab_exists_res.png)



**Related information**  


[check tab not exists](/TA_Automation/Topics/bia_check_tab_not_exists.html)

[does tab exist](/TA_Automation/Topics/bia_does_tab_exist.html)

