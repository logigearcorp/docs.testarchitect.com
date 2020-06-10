--- 
title: "select page"
linktitle: "select page"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_iOS_select_page.html
keywords: "select page, select specified page, select page at specific index"
---

## Description

Select a page at a specified index.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **index**

    Integer index of page to select.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to iOS operating system only.
-   index argument: Note that index numbering begins with 1.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Controls

This action is applicable to the following controls:page control.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Example

![](/images//Images/bia_select_page_aut.png)

**Action Lines**

![](/images//Images/bia_select_page_pgm.png)

**Result**

![](/images//Images/bia_select_page_res.png)

**Effect**

![](/images//Images/bia_select_page_effect.png)

**Parent topic:**[Tab Controls](/TA_Automation/Topics/bia_Tab_controls.html)

**Previous topic:**[does tab exist](/TA_Automation/Topics/bia_does_tab_exist.html)

**Next topic:**[select tab](/TA_Automation/Topics/bia_select_tab.html)

