--- 
title: "check tab not exists"
linktitle: "check tab not exists"
description: "Description Check for the nonexistence of a tab item (a single tab in a tab bar) as identified by its caption. Result is Passed if the specified tab item is not found ; otherwise Failed . Arguments ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_tab_not_exists.html
keywords: "built-in actions, check tab not exists, check tab not exists (action), Android (action), check tab not exists, check if specified tab does not exist, check whether specified tab does not exist, check for nonexistence of specified tab, verify nonexistence of specified tab"
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

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images/TA_Automation/Images/bia_check_tab_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_tab_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_tab_not_exists_res.png)




**Related information**  


[check tab exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/check-tab-exists)

[does tab exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/does-tab-exist)
