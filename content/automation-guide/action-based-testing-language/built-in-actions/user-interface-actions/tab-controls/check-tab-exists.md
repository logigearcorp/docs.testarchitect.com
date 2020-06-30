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

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images/TA_Automation/Images/bia_check_tab_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tab_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tab_exists_res.png)



**Related information**  


[check tab not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/check-tab-not-exists)

[does tab exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/does-tab-exist)

