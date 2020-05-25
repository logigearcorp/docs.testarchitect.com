--- 
title: "Picture checks"
linktitle: "Picture checks"
aliases: 
    - /TA_Help/Topics/Projects_and_tests_picture_check.html
---
# Picture checks {#picture_check_node .concept}

A picture check is used to store image bitmaps, known as baseline pictures, which can be compared during testing against bitmaps produced by the AUT.

When your test needs to check a control or property for the presence of an expected text or numeric value, it's simple enough to enter that value into the appropriate action line, such as done here for the expected argument:

```
                           window      control    property  expected
check control property     car login   btn_login  caption   Login 
```

Sometimes, however, rather than checking for the presence of character-based content, you may want to make sure that an AUT window or control is displaying an expected *picture*, or bitmap. To accomplish such tasks, TestArchitect offers a suite of picture handling actions.

Unfortunately, you can't just insert an expected bitmap directly into a picture handling action line. Instead, you have to pre-store the expected picture, known as the baseline picture, in a special item dedicated to that purpose. That item is a picture check. And a picture handling action, such as does picture exist, can test the validity of a bitmap displayed by the AUT simply by pointing to the appropriate picture check against which it is to be compared.

## Baseline Picture {#section_mwp_1d1_1l .section}

You may save a captured image and designate it as a baseline. All future captured images are then compared against this baseline image. Image comparison is considered to be successful only if the compared image and the baseline image are identical.

Sometimes, comparison may fail even if the content of the compared images seem to be identical. Various factors may cause these image comparison failures. For example, if, during testing, a given image file is rendered on display hardware with a different resolution than that which was used for the capture of the baseline image, it is quite possible for the comparison to fail. To improve the reliability of picture check comparisons, one picture check can store multiple baseline images. When, during testing, multiple baselines exist for a given picture check, a match between the just-captured image and *any one*of the associated baselines is sufficient for the check to be considered as passed.

## Keeping Picture Checks {#section_cxx_bq1_43 .section}

There are two ways in which TestArchitect stores the picture checks:

-   Regular picture checks are kept within a test module only, and are available only within the test module and its subordinate actions.
-   Shared picture checks are kept in a special tree node, **Picture Checks**, in each project. Shared picture checks can be used across various test modules within a project.

## Definition of regular picture checks {#section_abp_qf5_wx .section}

As a tester, you would use regular picture checks for pictures like charts \(histograms, graphs, pie charts, etc.\), that need to accurately display data that is specific for the situation where the [check picture](../../TA_Automation/Topics/bia_check_picture.html) built-in action is applied.

**Note:**

-   You can see regular picture checks in the **Picture Checks** tab of a test module.

    ![](../Images/bia_check_picture_aut_10.png)

-   Instead of capturing regular picture checks through the [check picture](../../TA_Automation/Topics/bia_check_picture.html) action, you can also use the [Picture Capturing](Additional_features_image_capturing_tool.html) tool. Or you can even import regular picture checks from external image files \([learn more](ug_picture_checks_importing_images.html).\)

## Definition of shared picture checks {#section_azq_rf5_wx .section}

Shared picture checks are useful for standard pictures, like symbols and icons, where as a tester you mainly want to know if the correct picture is displayed by an application, but not what that picture exactly looks like. For example, the TestArchitect explorer tree has a special icon designating a test module, which varies slightly depending on whether the given item is checked in, checked out to you, or checked out to someone else. A test may need to verify only that a given icon being displayed is a test module icon, without regard to its particular state-dependent appearance. The example discussed above, with the picture of the Chevrolet Monte Carlo, would also work best as a shared picture check if, say, future versions of the application may update their car pictures.

**Note:**

-   To capture shared picture checks, use the [Picture Capturing Tool](Additional_features_image_capturing_tool.html).
-   You may view the baseline pictures there, and if necessary delete them, or even delete the entire picture check.
-   When writing a test with a picture check, indicate a shared picture check by preceding the picture's name \(the name or picture argument of [Picture Handling](../../TA_Automation/Topics/bia_picture_handling.html) built-in actions\) with a forward slash \(/\).

Suppose that we use a [check picture](../../TA_Automation/Topics/bia_check_picture.html) action with a name argument of /chevy in a test module. After running that test module, we approve the picture as a baseline. We can then see the picture check and the stored baseline picture in the TestArchitect explorer tree, as shown below. By double-clicking the Baseline node, we can view that baseline picture.

![](../Images/bia_check_picture_aut_11.png)

## Capturing new picture checks, or adding baseline images to a picture check { .section}

There are essentially three ways to accomplish this:

-   One is within the context of a test itself. During testing, when a [check picture](../../TA_Automation/Topics/bia_check_picture.html) built-in action executes, if the captured test image does not match any baseline\(s\) belonging to the referenced picture check \(or no baseline yet exists for the picture check\) you are given the opportunity to designate the newly-captured image as a new baseline.
-   Alternatively, you can import picture checks or baseline images from external files. \([Learn more](ug_picture_checks_importing_images.html).\)
-   Finally, you can create new picture checks or baseline images in a fully manual mode, outside of the context of a test. You accomplish this with TestArchitect's Picture Capturing tool. \([Learn more](Additional_features_image_capturing_tool_capturing_saving.html).\)

-   **[Picture Capturing tool](../../TA_Help/Topics/Additional_features_image_capturing_tool.html)**  
The Picture Capturing tool lets you instantly capture the screen images of your test machines.
-   **[Key Points Modification tool](../../TA_Help/Topics/ug_Key_point_modify_tool.html)**  
The Key Points Modification tool applies a keypoint detection technique to detect matched objects between baseline images and a target images.
-   **[Importing external image sources](../../TA_Help/Topics/ug_picture_checks_importing_images.html)**  
TestArchitect lets you easily import image files \(.PNG\) format\) as a new picture checks or additional new baseline images.
-   **[Exporting baseline images](../../TA_Help/Topics/ug_picture_checks_exporting.html)**  
Baseline images can be exported to image files \(.PNG format\), which can be used as a backup or for re-importing.
-   **[Resolving unverified picture checks](../../TA_Help/Topics/ug_Resolving_unverfied_picture_checks.html)**  
Explains step-by-steps procedures to resolve unverified picture checks.
-   **[Configuring notification time period to resolve unverified picture checks](../../TA_Help/Topics/ug_configuring_notification_unverified_picture_checks.html)**  
By default, you will be notified every five days when you log into a repository which has repository test results containing unverified picture checks.

**Parent topic:**[Project items](../../TA_Help/Topics/Project_items_def.html)

**Previous topic:**[List view](../../TA_Help/Topics/Projects_and_tests_list_view.html)

