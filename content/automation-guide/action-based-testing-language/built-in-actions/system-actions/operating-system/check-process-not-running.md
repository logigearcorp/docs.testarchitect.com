--- 
title: "check process not running"
linktitle: "check process not running"
description: "Description Check that a specified process is not running on a mobile device. Result is Passed if the specified process is running ; otherwise Failed . Arguments process The process id (aka name, ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_process_not_running.html
keywords: "built-in actions, check process not running, check process not running (action), Android (action), check if process is not running, check that process is not running"
---

## Description

Check that a specified process is not running on a mobile device. Result is Passed ifthe specified process is running ; otherwise Failed.

## Arguments

-   **process**

    The process id \(aka name, bundle ID or package name\) of the process to check. \(See Notes section for how to determine process id.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies only to the Android operating system.
-   process argument:
    -   On an Android device, the process is the package name of the running application. To retrieve the package name for an Android application:
        1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

            ![](/images/Android/Images/Android_copy_package_name.png)

        3.  In the test editor, paste the copied value into the process argument of the built-in action.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

![](/images/TA_Automation/Images/bia_check_process_not_running_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_process_not_running_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_process_not_running_res.png)



**Related information**  


[check process running](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/check-process-running)

[is process running](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/is-process-running)

[kill process](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/kill-process)

