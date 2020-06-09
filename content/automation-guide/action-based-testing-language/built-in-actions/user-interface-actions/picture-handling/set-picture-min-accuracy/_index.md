--- 
title: "set picture min accuracy"
linktitle: "set picture min accuracy"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_set_picture_min_accuracy.html
---

## Description

Specifythe minimum level of accuracy required in matching baseline image objects with objects in captured test images for a match to be considered valid. Applies only to keypoint detection comparisons.

## Arguments

-   **value**

    Minimum acceptable accuracy \(units: percentage; valid range: 0 to 100; default = 50\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Minimum accuracy in picture matching may also be set through the built-in [minimum accuracy](minimum_accuracy.html) setting.
-   This built-in action is only applicable to a keypoint detection technique for image recognition. Therefore, it is only valid when the built-in setting [picture algorithm](picture_algorithm.html) is set to key point, and applies to all [picture handling](picture_handling.html) built-in actions except [check picture](check_picture.html).
-   When this built-in action executed, its value overrides the **Min Accuracy \(%\)** value specified in the [Key Points Modification Tool](/TA_Help/Topics/ug_Key_point_modify_tool_detecting_matched_images.html) dialog box.
-   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_set_picture_min_accuracy_pgm.png)

**Parent topic:**[Picture Handling](/TA_Automation/Topics/bia_picture_handling.html)

**Previous topic:**[if picture not exists](/TA_Automation/Topics/bia_if_picture_not_exists.html)

**Related information**  


[Image comparison techniques](/TA_Automation/Topics/aut_image_comparison_techniques.html)

