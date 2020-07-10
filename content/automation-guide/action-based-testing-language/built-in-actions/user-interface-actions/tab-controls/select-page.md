--- 
title: "select page"
linktitle: "select page"
description: "Description Select a page at a specified index. Arguments window TA name of the window. control TA name of the control. index Integer index of page to select. Valid contexts This action may be used ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_iOS_select_page.html
keywords: "built-in actions, select page, select page (action), iOS (action), select page, select specified page, select page at specific index"
---

## {{< expand >}} Description

Select a page at a specified index.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **index**

    Integer index of page to select.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This built-in action applies to iOS operating system only.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:page control.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_select_page_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_page_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_page_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_select_page_effect.png)




