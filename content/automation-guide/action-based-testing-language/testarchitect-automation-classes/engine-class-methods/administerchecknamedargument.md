--- 
title: "AdministerCheckNamedArgument"
linktitle: "AdministerCheckNamedArgument"
description: "Syntax integer AdministerCheckNamedArgument(string argname, string recorded, integer result) Description Administer a check for a named argument. Parameters argname  Name of the argument in the action ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/abtf_AdministerCheckNamedArgument.html
keywords: "ABT Library Functions, AdministerCheckNamedArgument, AdministerCheckNamedArgument (ABT library function)"
---

## Syntax

`integer AdministerCheckNamedArgument(string argname, string recorded, integer result)`

## Description

Administer a check for a named argument.

## Parameters

-   **argname ;**

    Name of the argument in the action line that contains the expected value.

-   **recorded**

    Recorded value.

-   **result**

    The result value that is to be administered for this check: 1 means pass, 0 means fail.


## Return Value

The function returns the value of the result parameter.

## Notes

-   The functions [AdministerCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/administercheck), [AdministerCheckArgument](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/administercheckargument) and [AdministerCheckNamedArgument](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/administerchecknamedargument) can be used to administer the result of a check already done in a script. They are typically used when the check is not a comparison between an expected and a recorded string \(like "check if the response time is below 8 seconds"\).

