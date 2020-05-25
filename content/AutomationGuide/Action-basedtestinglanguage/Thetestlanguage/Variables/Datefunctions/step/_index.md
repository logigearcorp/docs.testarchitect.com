--- 
title: "step"
linktitle: "step"
aliases: 
    - /TA_Automation/Topics/bia_step.html
---
# step {#bia_step .reference}

## Description { .section}

Title line of a step.

## Arguments { .section}

The step action does not have arguments, but does have the following documentary fields, the contents of which are entered indirectly into the edited test module \(see Notes\):

Step
:   Title of the test step.

Description
:   \(Optional\) Short description of the test step.

Expected result
:   \(Optional\) Define the expected test step result.

Recent result
:   \(System-generated\) The actual test step result of last test \(see Notes\).

:   Possible system-generated values:

    -   Not tested \(default\)
    -   Passed
    -   Failed
    -   Failed with warning\(s\) / error\(s\)
    -   Pass with known bug

## Valid contexts { .section}

This action may be used within the following project items:test modules \(specifically, limited to test cases\)

## Notes { .section}

-   The step action provides a further level of division of the lines in a test case. Note that step actions may *only* exist within `TEST CASE` sections.
-   TestArchitect does not allow for a step action to be created in the editor. Instead, it must be created from the **Steps** subtab of a test case tab.
-   The Recent result field is automatically filled in from the results of the most recent test execution added to the repository.
-   Refer to [Test steps](../../TA_Help/Topics/Projects_and_tests_steps.html) for more details on the step action.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_step_pgm.png)

**Parent topic:**[Documentary](../../TA_Automation/Topics/bia_Documentary.html)

**Previous topic:**[SECTION](../../TA_Automation/Topics/bia_section.html)

**Next topic:**[test case](../../TA_Automation/Topics/bia_test_case.html)

