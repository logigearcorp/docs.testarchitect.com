--- 
title: "-"
linktitle: "manual check"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_manual_check.html
---
keyword: [asking users for, display dialog box asking users to perform manual check, ask users to perform manual check, show message asking users to perform manual check]
---

# manual check

## Description

Display a modal dialog box asking user to perform a manual check. Result is Passed ifthe user clicks the **Yes** button displayed in the dialog box; Failed if he/she clicks **No**.

## Arguments

-   **prompt**

    Informational message to be displayed in the dialog box.

-   **expected**

    String specifying the condition for the passing of manual check.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   From the perspective of the test results, this action works just like any other check-type action, producing either a Passed or Failed result.
-   To have TestArchitect skip all the manual check actions within a test, set the built-in setting [skip manual check](bis_skip_manual_check.html) to yes.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [skip manual check](bis_skip_manual_check.html)none.

## Example

![](/images//Images/bia_manual_check_aut.png)

**Action Lines**

![](/images//Images/bia_manual_check_pgm.png)

**Result**

![](/images//Images/bia_manual_check_res.png)

**Parent topic:**[Reporting and Formatting](/TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[assign result field](/TA_Automation/Topics/bia_assign_result_field.html)

**Next topic:**[report](/TA_Automation/Topics/bia_report.html)

