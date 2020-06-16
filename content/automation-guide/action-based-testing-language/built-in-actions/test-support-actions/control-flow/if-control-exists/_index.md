--- 
title: "if control exists"
linktitle: "if control exists"
description: "Description Begin a block of action lines which are executed only if a specified control is found to exist. Arguments window TA name of the window. control TA name of the control. Valid contexts This ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_if_control_exists.html
keywords: "built-in actions, if control exists, if control exists (action), iOS (action), if control exists, Safari, iOS, Android (action), Android, Google Chrome, Safari, macOS (action), macOS, Safari (action), check if control exists, check whether control exists, check existence of control, verify existence of control"
---

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

-   If the specified control is found, the succeeding block of action lines up until the first occurrence of an [else](/TA_Automation/Topics/bia_else.html), [else if](/TA_Automation/Topics/bia_else_if.html), or [end if](/TA_Automation/Topics/bia_end_if.html), is executed. Otherwise, that block is skipped.
-   The if control exists action, in effect, combines the [does control exist](/TA_Automation/Topics/bia_does_control_exist.html) and [if](/TA_Automation/Topics/bia_if.html) built-in actions.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait probe](/TA_Automation/Topics/bis_object_wait_probe.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls: all controls.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_if_control_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_if_control_exists_res.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_if_control_exists_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_if_control_exists_ta4vs_res.png)




**Related information**  


[if control not exists](/TA_Automation/Topics/bia_if_control_not_exists.html)

