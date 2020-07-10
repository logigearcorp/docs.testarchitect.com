--- 
title: "check scrollbar not exists"
linktitle: "check scrollbar not exists"
description: "Description Check for the nonexistence of a scroll bar in a control. Result is Passed if the specified scroll bar does not exist ; otherwise Failed . Arguments window TA name of the window. control TA ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_check_scrollbar_not_exists.html
keywords: "built-in actions, check scrollbar not exists, check scrollbar not exists (action), iOS (action), check scrollbar not exists, check scrollbar does not exist, check if scrollbar does not exist, check nonexistence of scrollbar, verify nonexistence of scrollbar, verify if scrollbar does not exist"
---

## {{< expand >}} Description

Check for the nonexistence of a scroll bar in a control. Result is Passed ifthe specified scroll bar does not exist; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control to be examined for the specified scroll bar.

-   **type**

    Type of scroll bar to check for.

    Allowable values:

    -   **horizontal**

        A horizontal scroll bar.

    -   **vertical**

        A vertical scroll bar.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:checklist, list box, list view

-   For SAP BW application: table, frame

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_scollbar_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_scollbar_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_scollbar_not_exists_res.png)




**Related information**  


[check scrollbar exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-scrollbar-exists)

[does scrollbar exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/does-scrollbar-exist)

