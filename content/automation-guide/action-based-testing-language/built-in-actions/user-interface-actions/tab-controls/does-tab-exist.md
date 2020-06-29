--- 
title: "does tab exist"
linktitle: "does tab exist"
description: "Description Return a Boolean value to indicate whether a specified tab item, as identified by its caption, is found to exist. Arguments window TA name of the window. tab TA name of the tab control. ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_does_tab_exist.html
keywords: "built-in actions, does tab exist, does tab exist (action), Android (action), does tab exist, check if given tab exists, check for existence of given tab"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images/TA_Automation/Images/bia_does_tab_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_tab_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_tab_exists_res.png)




**Related information**  


[check tab exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/check-tab-exists)

[check tab not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/check-tab-not-exists)

