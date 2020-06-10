--- 
title: "test case"
linktitle: "test case"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_test_case.html
keywords: "test case, testcase"
---

## Description

Documentary action to label and describe a test case. Also used at runtime to allow you to designate which tests, or sections of action lines, within a test module are to be executed or ignored.

## Arguments

-   **name**

    Identifying label for the test case.

-   **description**

    \(Optional, but highly recommended\) Explanatory text denoting the nature and/or purpose of the subsequent action lines.


## Valid contexts

This action may be used within the following project items:test modules

## Notes

-   Note that the value assigned to the name argument must be unique within the test module.
-   In general, a given test case should be associated with one or more [test objectives](/TA_Automation/Topics/bia_test_objective.html).
-   The associations between test objectives and test cases are made not within the actions themselves, but in the TestArchitect GUI environment.
-   The action lines associated with a given test case are those which appear directly under the test case action, continuing until the next test case action, `FINAL` section, or end of file.
-   Upon checkin of a test module, newly-declared test cases are made into actual TestArchitect entities, appearing as subnodes of the test module.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_test_case_pgm.png)

**Parent topic:**[Documentary](/TA_Automation/Topics/bia_Documentary.html)

**Previous topic:**[step](/TA_Automation/Topics/bia_step.html)

**Next topic:**[test objective](/TA_Automation/Topics/bia_test_objective.html)

