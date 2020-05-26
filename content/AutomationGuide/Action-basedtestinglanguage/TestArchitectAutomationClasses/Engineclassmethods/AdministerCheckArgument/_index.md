--- 
title: "AdministerCheckArgument"
linktitle: "AdministerCheckArgument"
weight: 10
aliases: 
    - /TA_Automation/Topics/abtf_AdministerCheckArgument.html
---
# AdministerCheckArgument {#abtf_AdministerCheckArgument .reference}

## Syntax

`integer AdministerCheckArgument(integer argnr, string recorded, integer result)`

## Description { .section}

Administer a check for an argument.

## Parameters { .section}

argnr
:   Number of the argument in the action line that contains the expected value.

recorded
:   Recorded value.

result
:   The result value that is to be administered for this check: 1 means pass, 0 means fail.

## Return Value { .section}

The function returns the value of the result parameter.

## Notes { .section}

-   The functions [AdministerCheck](../../reuse/../TA_Automation/Topics/abtf_AdministerCheck.html), [AdministerCheckArgument](../../reuse/../TA_Automation/Topics/abtf_AdministerCheckArgument.html) and [AdministerCheckNamedArgument](../../reuse/../TA_Automation/Topics/abtf_AdministerCheckNamedArgument.html) can be used to administer the result of a check already done in a script. They are typically used when the check is not a comparison between an expected and a recorded string \(like "check if the response time is below 8 seconds"\).

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[AdministerCheck](../../TA_Automation/Topics/abtf_AdministerCheck.html)

**Next topic:**[AdministerCheckNamedArgument](../../TA_Automation/Topics/abtf_AdministerCheckNamedArgument.html)

