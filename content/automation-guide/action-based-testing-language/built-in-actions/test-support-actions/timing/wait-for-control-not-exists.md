--- 
title: "wait for control not exists"
linktitle: "wait for control not exists"
description: "Description Allow for execution to proceed only when it is determined that a specified control no longer exists. Arguments window TA name of the window. control TA name of the control. time out ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_wait_for_control_not_exists.html
keywords: "built-in actions, wait for control not exists, wait for control not exists (action), wait for control not exists, continue test after control no longer exists, continue test after control disappears, delay test until control disappears, suspend test until control disappears"
---

## Description

Allow for execution to proceed only when it is determined that a specified control no longer exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **time out**

    \(Optional\) Maximum time to wait \(units: seconds; default = current value of the [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) built-in setting – see note below\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the given control fails to disappear before the specified timeout, an [automation error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/error-handling/) is generated.
-   If no value is specified for the time out argument, the current value of the built-in setting [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait) is used. [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), if not otherwise set in a [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action line, defaults to a value of 20 seconds.
-   If more than one control exist that match the definition specified by the value of the control argument, the action waits only for the disappearance of the first matching control that it encountered.
-   "nonexistence" of the specified control, in the context of this action, is satisfied by one of two criteria:
    1.  no control exists that matches the definition specified by the value of the **control** argument, or
    2.  any matching control has its visibility attribute set to false, *and* the built-in setting [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls) is set to no.
-   Note that, if the built-in setting [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls) is set to yes, only the nonexistence of a matching control \(as opposed to a matching control simply being invisible\) satisfies the "not exists" condition of this action.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

Your test instructs the AUT to save a given working document. You do not want to allow the test to continue until the save operation is complete, hence you can use the presence \(or absence\) of the **Saving** progress bar to indicate that the save is ongoing \(or complete\).

**Action Lines**

![](/images/TA_Automation/Images/bia_wait_for_control_not_exists_pgm.png)




