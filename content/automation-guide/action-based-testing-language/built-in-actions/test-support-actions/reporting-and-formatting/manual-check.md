--- 
title: "manual check"
linktitle: "manual check"
description: "Description Display a modal dialog box asking user to perform a manual check. Result is Passed if the user clicks the Yes button displayed in the dialog box; Failed if he/she clicks No . Arguments ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_manual_check.html
keywords: "built-in actions, manual check, manual check (action), asking users for, display dialog box asking users to perform manual check, ask users to perform manual check, show message asking users to perform manual check"
---

## {{< expand >}} Description

Display a modal dialog box asking user to perform a manual check. Result is Passed ifthe user clicks the **Yes** button displayed in the dialog box; Failed if he/she clicks **No**.

## {{< expand >}} Arguments

-   **prompt**

    Informational message to be displayed in the dialog box.

-   **expected**

    String specifying the condition for the passing of manual check.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   From the perspective of the test results, this action works just like any other check-type action, producing either a Passed or Failed result.
-   To have TestArchitect skip all the manual check actions within a test, set the built-in setting [skip manual check](/automation-guide/action-based-testing-language/built-in-settings/other-settings/skip-manual-check) to yes.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [skip manual check](/automation-guide/action-based-testing-language/built-in-settings/other-settings/skip-manual-check)none.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_manual_check_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_manual_check_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_manual_check_res.png)




