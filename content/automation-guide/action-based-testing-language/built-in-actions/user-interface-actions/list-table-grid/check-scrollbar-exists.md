--- 
title: "check scrollbar exists"
linktitle: "check scrollbar exists"
description: "Description Check for the existence of a scroll bar in a control. Result is Passed if the specified scroll bar exists ; otherwise Failed . Arguments window TA name of the window. control TA name of ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_check_scrollbar_exists.html
keywords: "built-in actions, check scrollbar exists, check scrollbar exists (action), iOS (action), check scrollbar exists, check scollbar exists, check if scrollbar exists, verify whether scrollbar exists, check existence of scrollbar, verify existence of scrollbar"
---

## Description

Check for the existence of a scroll bar in a control. Result is Passed ifthe specified scroll bar exists; otherwise Failed.

## Arguments

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


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes  

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:checklist, list box, list view

-   For SAP BW application: table, frame

## Example

![](/images/TA_Automation/Images/bia_check_scollbar_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_scollbar_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_scollbar_exists_res.png)




**Related information**  


[check scrollbar not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-scrollbar-not-exists)

[does scrollbar exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/does-scrollbar-exist)
