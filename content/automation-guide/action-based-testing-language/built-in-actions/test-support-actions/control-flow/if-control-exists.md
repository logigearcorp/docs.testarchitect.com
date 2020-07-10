--- 
title: "if control exists"
linktitle: "if control exists"
description: "Description Begin a block of action lines which are executed only if a specified control is found to exist. Arguments window TA name of the window. control TA name of the control. Valid contexts This ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_if_control_exists.html
keywords: "built-in actions, if control exists, if control exists (action), iOS (action), if control exists, Safari, iOS, Android (action), Android, Google Chrome, Safari, macOS (action), macOS, Safari (action), check if control exists, check whether control exists, check existence of control, verify existence of control"
---

## {{< expand >}} Description

Begin a block of action lines which are executed only if a specified control is found to exist.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   If the specified control is found, the succeeding block of action lines up until the first occurrence of an [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else), [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if), or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if), is executed. Otherwise, that block is skipped.
-   The if control exists action, in effect, combines the [does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist) and [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) built-in actions.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls: all controls.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_if_control_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_if_control_exists_res.png)

**Related information**  


[if control not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-not-exists)

