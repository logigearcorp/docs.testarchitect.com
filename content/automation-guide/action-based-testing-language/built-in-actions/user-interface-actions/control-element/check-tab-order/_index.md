--- 
title: "check tab order"
linktitle: "check tab order"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_check_tab_order.html
---
keyword: [check tab order, verify tab order, check tab sequence, verify tab order]
---

# check tab order

## Description

Check the tab order\* of several controls residing in a specified window. Result is Passed ifthe tab order matches the expectation; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **controls**

    TA names of the controls to be checked for tab order.

    The checked controls must be listed in either forward or reverse order, delimited by arrow symbols \( -\> \).

-   **type**

    \(Optional\) Direction of expected arrangement of controls in controls argument.

    Allowable values:

    -   forward \(Default\)
    -   backward

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   \*The tab order of the controls in a window or dialog box determines the sequence in which the focus changes when the user strikes the Tab key. It only applies to controls that are capable of receiving focus.
-   For a Passed result, the contents of the controls argument need not be inclusive of every control in the window; however, the listed controls must be consecutive in the tab order \(that is, no gaps\).
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Example

![](/images//Images/bia_check_tab_order_aut.png)

**Action Lines**

![](/images//Images/bia_check_tab_order_pgm.png)

**Result**

![](/images//Images/bia_check_tab_order_res.png)

**Parent topic:**[Control, Element](/TA_Automation/Topics/bia_Control_Element.html)

**Previous topic:**[check native property](/TA_Automation/Topics/bia_check_native_property.html)

**Next topic:**[does control exist](/TA_Automation/Topics/bia_does_control_exist.html)

