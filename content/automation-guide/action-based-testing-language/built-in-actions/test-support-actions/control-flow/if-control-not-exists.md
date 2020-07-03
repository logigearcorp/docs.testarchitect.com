--- 
title: "if control not exists"
linktitle: "if control not exists"
description: "Description Begin a block of action lines which are executed only if a specified control is found not to exist. Arguments window TA name of the window. control TA name of the control. Valid contexts ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_if_control_not_exists.html
keywords: "built-in actions, if control not exists, if control not exists (action), iOS (action), if control not exists, Safari, iOS, Android (action), Android, Google Chrome, Safari, macOS (action), macOS, Safari (action), if control does not exist, check if control does not exist, check nonexistence of control, verify nonexistence of control"
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

-   If the specified control is not found, the succeeding block of action lines up until the first occurrence of an [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else), [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if), or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if), is executed. Otherwise, that block is skipped.
-   The if control not exists action, in effect, combines the [does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist) and [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) built-in actions, with the if condition properly constructed.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:all controls.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_if_control_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_if_control_not_exists_res.png)

**Related information**  


[if control exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-exists)

