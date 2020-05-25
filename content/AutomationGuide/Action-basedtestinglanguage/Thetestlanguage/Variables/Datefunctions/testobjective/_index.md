--- 
title: "test objective"
linktitle: "test objective"
aliases: 
    - /TA_Automation/Topics/bia_test_objective.html
---
# test objective {#bia_test_objective .reference}

## Description { .section}

Documentary action to label and describe a test objective.

## Arguments { .section}

name
:   Identifying label for the test objective.

description
:   \(Optional, but highly recommended\) Explanatory text denoting an objective of the test module, or of a portion of its action lines.

## Valid contexts { .section}

This action may be used within the following project items:test modules

## Notes { .section}

-   Note that the value assigned to the name argument must be unique within the test module.
-   In general, a given test objective should be associated with one or more test cases \(see [test case](bia_test_case.html) action\).
-   Note that the associations between test objectives and test cases are made not within the actions themselves, but in the TestArchitect GUI environment.
-   test objective actions should generally be entered at the top of a test module.
-   Upon check-in of a test module, newly-declared test objectives are made into actual TestArchitect entities, appearing as subnodes of the test module. In addition, for documentary purposes, copies of the test objective lines are automatically inserted by TestArchitect directly below their associated test cases in the test module.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_test_objective_pgm.png)

**Parent topic:**[Documentary](../../TA_Automation/Topics/bia_Documentary.html)

**Previous topic:**[test case](../../TA_Automation/Topics/bia_test_case.html)

