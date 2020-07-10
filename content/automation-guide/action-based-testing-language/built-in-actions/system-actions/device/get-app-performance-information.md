--- 
title: "get app performance information"
linktitle: "get app performance information"
description: "Description Return the current performance information of an application running on the test device. Arguments package name APK name of the application of interest. cpu usage Variable to hold returned ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_get_app_performance_information.html
keywords: "built-in actions, get app performance information, get app performance information (action), Android (action), get app performance information, mobile performance monitoring, monitor mobile performance, diagnose mobile performance, manage mobile performance, mobile performance management"
---

## {{< expand >}} Description

Return the current performance information of an application running on the test device.

## {{< expand >}} Arguments

-   **package name**

    APK name of the application of interest.

-   **cpu usage**

    Variable to hold returned current CPU usage of the application process.

-   **memory**

    Variable to hold returned current memory usage of the application process.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Android.

## {{< expand >}} Notes

-   If the variables in argumentscpu usage and memoryhave not been declared, the action creates them as globals.
-   On an Android device, to retrieve the package name for an application, do the following:
    1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
    2.  In the Application Under Test panel, right-click the appropriate application, and then select **Copy package name**.

        ![](/images/Android/Images/Android_copy_package_name.png)

    3.  In the test editor, paste the copied value into the package name argument of the built-in action.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Example

Let's say you wish to obtain the current performance information of two applications running on the test device:

**Action Lines**

![](/images/TA_Automation/Images/bia_get_app_performance_information_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_app_performance_information_res.png)




