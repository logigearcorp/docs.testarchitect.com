--- 
title: "if picture not exists"
linktitle: "if picture not exists"
description: "Description Check a bitmap area of the AUT's current display for the presence of a given instance of a specified target image. If not found, execute the associated action lines. Arguments picture ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_if_picture_not_exists.html
keywords: "built-in actions, if picture not exists, if picture not exists (action), iOS (action), if picture not exists, Android (action)"
---

## Description

Check a bitmap area of the AUT's current display for the presence of a given instance of a specified target image.If not found, execute the associated action lines.

## Arguments

-   **picture**

    Identifying name of a regular or shared [picture check](/user-guide/projects-and-project-items/project-items/picture-checks/), a collection of one or more baseline images to be used for comparison with the AUT display.

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **rect**

    \(Optional\) Specifies the dimensions of a rectangular area which, in combination with the active UI element \(as determined by the window and control arguments\), defines the active area. Scanning for thebaseline image or object is then limited to this active area \(see Notes below\). Values specifying the location of the rect area are relative to the active UI element.

    The rect argument consists of four comma-separated values:

    -   left: Specifies the left border of the rect area relative to the left edge of the active UI element \(screen, window or control – see **Notes** below\). \(Units: pixels; default=0\)
    -   top: Specifies the top border of the rect area relative to the top edge of the active UI element. \(Units: pixels; default=0\)
    -   width: Specifies the width of the rect area. \(Units: pixels; the default is that value which causes the right border of the active area to coincide with the right edge of the active UI element.\)
    -   height: Specifies the height of the rect area. \(Units: pixels; the default is that value which causes the lower border of the active area to coincide with the lower edge of the active UI element.\)
    ![](/images/TA_Automation/Images/picture_check_area_specs_01.png)

    The above figure illustrates the active area that applies when both the window and control arguments have been specified \(establishing a picture control as the active UI element\), and the values for rect are such that it covers both a portion of the active UI element as well as an area outside of it. In such a case, the active area is the area of overlap between the UI element and the rect area. \(See related note below.\)

    {{<note>}} Any of the four sub-arguments of rect may be omitted, but all values must maintain their comma-delimited places to ensure correct assignment.\(For example, setting rect to \(, , 100, 50\) specifies an active area of width=100, height=50, whose top-left corner coincides with that of the active UI element.\)

-   **index**

    \(Optional\) Specifies a minimum number of instances of the baseline image that must be discovered within the active area for the picture to be considered as found \(default = 1\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
-   As a convenience when editing, you may drag the appropriate picture check node from the **Picture Checks** folder \(in the TestArchitect explorer tree\) into this action'spicture argument.
-   By default this built-in action applies a [pixel-by-pixel](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques) image comparison technique. To switch to a keypoint detection image comparison, refer to [picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm) and [Key Points Modification tool](/user-guide/projects-and-project-items/project-items/picture-checks/key-points-modification-tool/) for details.
-   Note that if the referenced picture check holds multiple baseline images, each one is tested against the AUT bitmap until \(and if\) a match is found. Only a single “hit” is required for a match to be considered found.
-   This action is applied to that part of the captured bitmap identified as the active area, with the remainder of the image ignored. The active area is determined by the combination of the window, control and rect arguments. To begin with, window and control determine the active UI element, which can be a control, window, or the full screen, as follows:

    |window argument|control argument|active UI element is...|
    |---------------|----------------|-----------------------|
    |omitted|omitted|entire screen \(i.e., entire captured test image|
    |specified|omitted|entire application window|
    |specified|specified|specified control|

    With the active UI element established, the rect argument then \(optionally\) specifies a rectangular active area relative to the active UI element. \(If no rect argument is specified, the active UI element itself is the active area.\)

-   In most cases, the rect area, if specified, defines a sectional area whose borders reside within the active UI element, so that the rect area itself is the active area. But that is not necessarily the case. The following three images illustrate the general case for how the active area is determined when the rect area is specified.

    ![](/images/TA_Automation/Images/ocr_area_specs_02.png)

    The general rule for determining the active area is as follows:

    |rect area:|resulting active area:|
    |----------|----------------------|
    |not specified|the active UI element|
    |overlaps the active UI element|the intersection space \(Cases 1 & 2 above\)|
    |no overlap with active UI element|the active UI element \(Case 3 above\)|

-   Android: This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls), [picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm).

## Example - Case 1: The window and control arguments are specified

![](/images/TA_Automation/Images/bia_if_picture_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_picture_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_if_picture_not_exists_res.png)

## Example - Case 2: The rect argument is specified

![](/images/TA_Automation/Images/bia_if_picture_not_exists_aut_2.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_picture_not_exists_pgm_2.png)

Result

![](/images/TA_Automation/Images/bia_if_picture_not_exists_res_2.png)

## Example - Case 3: The index argument is specified

![](/images/TA_Automation/Images/bia_if_picture_not_exists_aut_3.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_picture_not_exists_pgm_3.png)

Result

![](/images/TA_Automation/Images/bia_if_picture_not_exists_res_3.png)




**Related information**  


[if picture exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/if-picture-exists)

[Image comparison techniques](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques)
