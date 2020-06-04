--- 
title: "-"
linktitle: "exit test module"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_exit_test_module.html
---
keyword: [exit test module, terminate test module, test module termination, stop test module]
---

# exit test module

## Description

Exit the current test module \(skip all remaining action lines and test cases\) and, if applicable, continue with the calling test module and/or the next module of the test run.

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

-   exit status argument:

    -   This argument applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.
    |Status|Description|
    |------|-----------|
    |Incomplete|\(Default\) The overall status of test results is always [Not Finished](/TA_Help/Topics/ug_test_results_status.html).|
    |Complete|The overall status of test results is not necessarily [Not Finished](/TA_Help/Topics/ug_test_results_status.html).|


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_exit_test_module_pgm.png)

**Result**

![](/images//Images/bia_exit_test_module_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[exit test case](/TA_Automation/Topics/bia_exit_test_case.html)

**Next topic:**[if](/TA_Automation/Topics/bia_if.html)

