--- 
title: "exit test module"
linktitle: "exit test module"
description: "Description Exit the current test module (skip all remaining action lines and test cases) and, if applicable, continue with the calling test module and/or the next module of the test run. Arguments ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_exit_test_module.html
keywords: "built-in actions, exit test module, exit test module (action), exit test module, terminate test module, test module termination, stop test module"
---

## Description

Exit the current test module \(skip all remaining action lines and test cases\) and, if applicable, continue with the calling test module and/or the next module of the test run.

## Arguments

-   **exit status**

    \(Optional\) Determine whether the overall final result status must be [Not Finished](/user-guide/working-with-test-results/overview/test-result-status) or not. \(See **Notes** below.\)

    Possible values:

    -   complete: The operation is successful.
    -   incomplete: \(Default\) The operation is unsuccessful.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action can be used to handle an error situation.

-   exit status argument:

    -   This argument applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.
    |Status|Description|
    |------|-----------|
    |Incomplete|\(Default\) The overall status of test results is always [Not Finished](/user-guide/working-with-test-results/overview/test-result-status).|
    |Complete|The overall status of test results is not necessarily [Not Finished](/user-guide/working-with-test-results/overview/test-result-status).|


## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_exit_test_module_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_exit_test_module_res.png)




