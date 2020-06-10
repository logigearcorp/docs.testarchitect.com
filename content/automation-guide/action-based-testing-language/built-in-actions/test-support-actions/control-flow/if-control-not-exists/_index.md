--- 
title: "if control not exists"
linktitle: "if control not exists"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_if_control_not_exists.html
keywords: "if control does not exist, check if control does not exist, check nonexistence of control, verify nonexistence of control"
---

## Description

Begin a block of action lines which are executed only if a specified control is found not to exist.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the specified control is not found, the succeeding block of action lines up until the first occurrence of an [else](/TA_Automation/Topics/bia_else.html), [else if](/TA_Automation/Topics/bia_else_if.html), or [end if](/TA_Automation/Topics/bia_end_if.html), is executed. Otherwise, that block is skipped.
-   The if control not exists action, in effect, combines the [does control exist](/TA_Automation/Topics/bia_does_control_exist.html) and [if](/TA_Automation/Topics/bia_if.html) built-in actions, with the if condition properly constructed.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait probe](/TA_Automation/Topics/bis_object_wait_probe.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:all controls.

## Example

**Action Lines**

![](/images//Images/bia_if_control_not_exists_pgm.png)

**Result**

![](/images//Images/bia_if_control_not_exists_res.png)

## Example

**Action Lines**

![](/images//Images/bia_if_control_not_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_if_control_not_exists_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[if control exists](/TA_Automation/Topics/bia_if_control_exists.html)

**Next topic:**[if window exists](/TA_Automation/Topics/bia_if_window_exists.html)

**Related information**  


[if control exists](/TA_Automation/Topics/bia_if_control_exists.html)

