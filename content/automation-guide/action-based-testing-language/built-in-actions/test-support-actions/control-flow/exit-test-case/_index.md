--- 
title: "-"
linktitle: "exit test case"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_exit_test_case.html
---
keyword: [exit test case, stop test case, terminate test case, test case termination]
---

# exit test case

## Description

Exit the current test case \(skip all remaining action lines in the current test case\), and then continue with the next test case.

## Arguments

-   **exit status**

    \(Optional\) Determine whether the overall final result status must be [Not Finished](/TA_Help/Topics/ug_test_results_status.html) or not. \(See **Notes** below.\)

    Possible values:

    -   complete: The operation is successful.
    -   incomplete: \(Default\) The operation is unsuccessful.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action can be used to handle an error situation.

-   This action will exit from the `INITIAL` and `FINAL` sections of a test module, as well as from test cases.
-   When invoked from within a user-defined action, the calling test case is exited.
-   exit status argument:

    -   This argument applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.
    |Status|Description|
    |------|-----------|
    |Incomplete|\(Default\) The overall status of test results is always [Not Finished](/TA_Help/Topics/ug_test_results_status.html).|
    |Complete|The overall status of test results is not necessarily [Not Finished](/TA_Help/Topics/ug_test_results_status.html).|


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example - Case 1: Exit status is Incomplete

**Action Lines**

![](/images//Images/bia_exit_test_case_pgm.png)

**Result**

When exit test case with the value of Incomplete is executed, the overall status of this test result is Not Finished.

![](/images//Images/bia_exit_test_case_res_exit_status_incomplete.png)

## Example - Case 2: Exit status is Complete

**Action Lines**

![](/images//Images/bia_exit_test_case_complete_pgm.png)

**Result**

When exit test case with the value of Complete is executed, the overall status of this result is by definition Not Finished. Inf act, in this example, the status is Passed, because checkpoints are successful.

![](/images//Images/bia_exit_test_case_res_exit_status_complete.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[exit test action](/TA_Automation/Topics/bia_exit_test_action.html)

**Next topic:**[exit test module](/TA_Automation/Topics/bia_exit_test_module.html)

