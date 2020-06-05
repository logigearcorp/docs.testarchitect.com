--- 
title: "enter"
linktitle: "enter"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_enter.html
---
keyword: [enter value in control, input value in control, fill in control]
---

# enter

## Description

Enter a value into a given control.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **value**

    Value to be entered.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The effect of the enter built-in action depends on the class of the control. For example, for a combo box control, the enter action selects an item from the list.
-   In some special cases on a web platform, the enter action may trigger an unexpected or undesired event. To address such cases, it is suggested that you use the [set](bia_set.html) built-in action to assign a value to text box controls. Unlike enter, set avoids the triggering of events.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:combo box, input-datetime, input-email, input-number,input-password, input-search, input-tel, input-text, input-url, password, richtext, search bar, text box, text view,

This action is applicable to the following controls:password, text box.

## Example

**Action Lines**

![](/images//Images/bia_enter_pgm.png)

**Result**

![](/images//Images/bia_enter_res.png)

**Effect**

![](/images//Images/bia_enter_aut.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[does control exist](/TA_Automation/Topics/bia_does_control_exist.html)

**Next topic:**[focus control](/TA_Automation/Topics/bia_focus_control.html)

