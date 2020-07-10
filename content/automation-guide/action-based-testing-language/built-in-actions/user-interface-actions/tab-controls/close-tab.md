--- 
title: "close tab"
linktitle: "close tab"
description: "Description Close a tab item. Arguments window TA name of the window. tab TA name of the tab control. item Identifying caption of the tab item. Valid contexts This action may be used within the ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_close_tab.html
keywords: "built-in actions, close tab, close tab (action), close tab, close specified tab"
---

## {{< expand >}} Description

Close a tab item.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **tab**

    TA name of the tab control.

-   **item**

    Identifying caption of the tab item.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:tab control

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_close_tab_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_close_tab_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_close_tab_res.png)




