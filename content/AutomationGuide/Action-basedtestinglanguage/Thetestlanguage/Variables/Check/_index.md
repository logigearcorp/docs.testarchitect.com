--- 
title: "Check"
linktitle: "Check"
aliases: 
    - /TA_Automation/Topics/abtf_Check.html
---
# Check {#abtf_Check .reference}

## Syntax

`integer Check(string label, string expected, string recorded)`

## Description { .section}

Execute a check and administer the result.

## Parameters { .section}

label
:   Title for the check, to be displayed in the report. This is a documentary parameter that has no influence on the check itself.

expected
:   Expected value for the check.

recorded
:   Recorded value, to be compared with the expected value for equivalency.

## Return Value { .section}

Return 1 if the check passed; otherwise, 0.

## Notes { .section}

-   The expected and recorded strings are compared. If they are equal the check is administered as passed, otherwise it is treated as failed.
-   See also the chapter on [checks](Automation_model_working_with_checks.html) earlier in this guide.
-   If possible use [CheckArgument](abtf_CheckArgument.html) or [CheckNamedArgument](abtf_CheckNamedArgument.html), since these functions allow for better reporting \(in particular when used in action definitions\).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Build](../../TA_Automation/Topics/abtf_Build.html)

**Next topic:**[CheckArgument](../../TA_Automation/Topics/abtf_CheckArgument.html)

