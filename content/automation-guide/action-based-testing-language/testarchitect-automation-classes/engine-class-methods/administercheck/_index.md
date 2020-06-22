--- 
title: "AdministerCheck"
linktitle: "AdministerCheck"
description: "Syntax integer AdministerCheck(string label, string expected, string recorded, integer result) Description Report and record the result of a user check already performed. Parameters label  Title for ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/abtf_AdministerCheck.html
keywords: "ABT Library Functions, AdministerCheck, AdministerCheck (ABT library function)"
---

## Syntax

`integer AdministerCheck(string label, string expected, string recorded, integer result)`

## Description

Report and record the result of a user check already performed.

## Parameters

-   **label**

    Title for the check, to be displayed in the report. This is a documentary parameter that has no influence on the check itself.

-   **expected**

    Expected value for the check. \(For reporting purposes only.\)

-   **recorded**

    Recorded value that was compared against the expected value. \(For reporting purposes only.\)

-   **result**

    The result value that is to be administered for this check: 1 means pass, 0 means fail.


## Return Value

The function returns the value of the result parameter.

## Notes

-   The functions [AdministerCheck](/reuse/../TA_Automation/Topics/abtf_AdministerCheck.html), [AdministerCheckArgument](/reuse/../TA_Automation/Topics/abtf_AdministerCheckArgument.html) and [AdministerCheckNamedArgument](/reuse/../TA_Automation/Topics/abtf_AdministerCheckNamedArgument.html) can be used to administer the result of a check already done in a script. They are typically used when the check is not a comparison between an expected and a recorded string \(like "check if the response time is below 8 seconds"\).
-   Use [AdministerCheckArgument](/TA_Automation/Topics/abtf_AdministerCheckArgument.html) or [AdministerCheckNamedArgument](/TA_Automation/Topics/abtf_AdministerCheckNamedArgument.html) if possible, since these functions allow for better reporting \(in particular when used in action definitions\).
-   The functions AdministerCheck can be used to administer the result of a check already done in a script. They are typically used when the check is not a comparison between an expected and a recorded string \(like "check if the response time is below 8 seconds"\).

