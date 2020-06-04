--- 
title: "-"
linktitle: "if control exists"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_if_control_exists.html
---
keyword: [if control exists, check if control exists, check whether control exists, check existence of control, verify existence of control]
---

# if control exists

## Description

Begin a block of action lines which are executed only if a specified control is found to exist.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the specified control is found, the succeeding block of action lines up until the first occurrence of an [else](bia_else.html), [else if](bia_else_if.html), or [end if](bia_end_if.html), is executed. Otherwise, that block is skipped.
-   The if control exists action, in effect, combines the [does control exist](bia_does_control_exist.html) and [if](bia_if.html) built-in actions.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait probe](bis_object_wait_probe.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls: all controls.

## Example

**Action Lines**

![](/images//Images/bia_if_control_exists_pgm.png)

**Result**

![](/images//Images/bia_if_control_exists_res.png)

## Example

**Action Lines**

![](/images//Images/bia_if_control_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_if_control_exists_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[if](/TA_Automation/Topics/bia_if.html)

**Next topic:**[if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html)

**Related information**  


[if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html)

