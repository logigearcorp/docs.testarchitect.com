--- 
title: "select tab"
linktitle: "select tab"
description: "Description Select a tab item. Arguments window TA name of the window. tab TA name of the tab control. item Identifying caption of the tab item. Valid contexts This action may be used within the ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_select_tab.html
keywords: "built-in actions, select tab, select tab (action), iOS (action), select tab, Android (action), select specified tab"
---

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

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:tab control.

## Example

![](/images/TA_Automation/Images/bia_select_tab_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_tab_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_tab_res.png)



