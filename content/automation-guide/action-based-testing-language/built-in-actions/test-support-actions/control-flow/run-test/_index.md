--- 
title: "run test"
linktitle: "run test"
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_run_test.html
keywords: "run test, run another test module from current test module, "
---

## Description

Invoke a specified test module or test suite from the current test module.

## Arguments

-   **name**

    Full TestArchitect explorer tree path of the target test module/test suite \(see note\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   name argument:
    -   The full path of the target test module is specified with respect to the current project's **Tests** node, using forward slashes \(/\) to delimit successive folders in the hierarchy.
        -   For example, in SampleRepository the Login Validation test module is located under the Functional Tests test folder, which resides under Action-based testing basics:

            ![](/images//Images/full_tm_path.01.png)

            The full path that must be specified for the test module is /Action-based Testing Basics/Functional Tests/Login Validation.

    -   The full path of the target test suite is specified along with the **Test Suites** node, using forward slashes \(/\) to delimit successive folders in the hierarchy.
        -   For example, if the Smoke tests test suite is located under the User Interface test suite folder, the test suite's full path is Test Suites/User Interface/Smoke tests.
    -   The name argument may only hold a test module name without any variation specification. However, the normal rules for variation selection at run time still apply. That is, the test module variation that is executed by run test is determined by the variation specification made in the Execute Test dialog box \(or, in the case of batch file execution, the TACommandLine parameters\).
-   Execution of a test module \(or [test suite](/TA_Help/Topics/Test_suite.html)\) with run test is performed synchronously with respect to the calling test module. That is, the caller pauses its execution and only resumes upon completion of execution of the called test module/test suite.
-   It is highly recommended that you do not invoke the run test action from within a [user-defined action](/reuse/reuse.High_level_actions.html). That is, only call it from within a test module.
-   Note that, unlike the case with a test module whose execution is configured via the Execute Test dialog box, you have no option to specify which test cases of the target test module of the run test command will or will not be run.
-   **Tip:**

-   A convenient way to enter this built-in action as an action line is to drag and drop the node of the target test module or test suite from the TestArchitect explorer tree directly into column **A** of an empty line of your test editor. The line is automatically populated with a run test action line with the name argument specifying the correct target.
-   Note, however, that if the dragged test module is a [variation](/TA_Help/Topics/ug_TM_create_variation.html), the name inserted to the name argument is just the default, with no variation spec.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example - Case 1: Drag and drop operations

![](/images//Images/bia_run_aut_1.png)

## Example - Case 2: run test action

Alternatively, you can enter the run test built-in action directly into the test editor.

**Action Lines**

![](/images//Images/bia_run_pgm_2.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[repeat](/TA_Automation/Topics/bia_repeat.html)

**Next topic:**[terminate](/TA_Automation/Topics/bia_terminate.html)

