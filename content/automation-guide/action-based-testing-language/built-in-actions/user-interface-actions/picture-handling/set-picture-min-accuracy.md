--- 
title: "set picture min accuracy"
linktitle: "set picture min accuracy"
description: "Description Specify the minimum level of accuracy required in matching baseline image objects with objects in captured test images for a match to be considered valid. Applies only to keypoint ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_set_picture_min_accuracy.html
keywords: "built-in actions, set picture min accuracy, set picture min accuracy (action), Android (action), set picture min accuracy"
---

## Description

Specifythe minimum level of accuracy required in matching baseline image objects with objects in captured test images for a match to be considered valid. Applies only to keypoint detection comparisons.

## Arguments

-   **value**

    Minimum acceptable accuracy \(units: percentage; valid range: 0 to 100; default = 50\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Minimum accuracy in picture matching may also be set through the built-in [minimum accuracy](/automation-guide/action-based-testing-language/built-in-settings/other-settings/minimum-accuracy) setting.
-   This built-in action is only applicable to a keypoint detection technique for image recognition. Therefore, it is only valid when the built-in setting [picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm) is set to key point, and applies to all [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) built-in actions except [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture).
-   When this built-in action executed, its value overrides the **Min Accuracy \(%\)** value specified in the [Key Points Modification Tool](/user-guide/projects-and-project-items/project-items/picture-checks/key-points-modification-tool/configuring-keypoint-based-object-detection) dialog box.
-   Android: This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_set_picture_min_accuracy_pgm.png)



**Related information**  


[Image comparison techniques](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques)
