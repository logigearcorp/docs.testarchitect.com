--- 
title: "exit test module"
linktitle: "exit test module"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_exit_test_module.html
---
# exit test module {#bia_exit_test_module .reference}

## Description { .section}

Exit the current test module \(skip all remaining action lines and test cases\) and, if applicable, continue with the calling test module and/or the next module of the test run.

## Arguments { .section}

exit status
:   \(Optional\) Determine whether the overall final result status must be [Not Finished](../../TA_Help/Topics/ug_test_results_status.html) or not. \(See **Notes** below.\)

:   Possible values:

    -   complete: The operation is successful.
    -   incomplete: \(Default\) The operation is unsuccessful.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action can be used to handle an error situation.

-   exit status argument:

    -   This argument applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.
    |Status|Description|
    |------|-----------|
    |Incomplete|\(Default\) The overall status of test results is always [Not Finished](../../TA_Help/Topics/ug_test_results_status.html).|
    |Complete|The overall status of test results is not necessarily [Not Finished](../../TA_Help/Topics/ug_test_results_status.html).|


## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_exit_test_module_pgm.png)

**Result**

![](../Images/bia_exit_test_module_res.png)

**Parent topic:**[Control Flow](../../TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[exit test case](../../TA_Automation/Topics/bia_exit_test_case.html)

**Next topic:**[if](../../TA_Automation/Topics/bia_if.html)

