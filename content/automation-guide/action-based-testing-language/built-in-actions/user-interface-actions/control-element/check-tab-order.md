--- 
title: "check tab order"
linktitle: "check tab order"
description: "Description Check the tab order * of several controls residing in a specified window. Result is Passed if the tab order matches the expectation ; otherwise Failed . Arguments window TA name of the ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_check_tab_order.html
keywords: "built-in actions, check tab order, check tab order (action), check tab order, verify tab order, check tab sequence"
---

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

![](/images/TA_Automation/Images/bia_check_tab_order_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_tab_order_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_tab_order_res.png)




