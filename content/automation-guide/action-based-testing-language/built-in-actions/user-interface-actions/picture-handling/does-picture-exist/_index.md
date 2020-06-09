--- 
title: "does picture exist"
linktitle: "does picture exist"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_does_picture_exist.html
---

## Description

Check a bitmap area of the AUT's current display for the presence of a given instance of a specified target image.Return a Boolean value to indicate whether the target picture was found.

## Arguments

-   **picture**

    Identifying name of a regular or shared[picture check](/images//Images/TA_Help/Topics/Projects_and_tests_picture_check.html), a collection of one or more baseline images to be used for comparison with the AUT display.

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
    ![](/images//Images/TA_Automation/Images/picture_check_area_specs_01.png)

    The above figure illustrates the active area that applies when both the window and control arguments have been specified \(establishing a picture control as the active UI element\), and the values for rect are such that it covers both a portion of the active UI element as well as an area outside of it. In such a case, the active area is the area of overlap between the UI element and the rect area. \(See related note below.\)

    **Note:** Any of the four sub-arguments of rect may be omitted, but all values must maintain their comma-delimited places to ensure correct assignment.\(For example, setting rect to \(, , 100, 50\) specifies an active area of width=100, height=50, whose top-left corner coincides with that of the active UI element.\)

-   **index**

    \(Optional\) Specifies a minimum number of instances of the baseline image that must be discovered within the active area for the picture to be considered as found \(default = 1\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Target image found.

    -   **0**

        Target image not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/images//Images/TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   As a convenience when editing, you may drag the appropriate picture check node from the **Picture Checks** folder \(in the TestArchitect explorer tree\) into this action'spicture argument.
-   By default this built-in action applies a [pixel-by-pixel](/images//Images/TA_Automation/Topics/aut_image_comparison_techniques.html) image comparison technique. To switch to a keypoint detection image comparison, refer to [picture algorithm](/images//Images/TA_Automation/Topics/bis_picture_algorithm.html) and [Key Points Modification tool](/images//Images/TA_Help/Topics/ug_Key_point_modify_tool.html) for details.
-   Note that if the referenced picture check holds multiple baseline images, each one is tested against the AUT bitmap until \(and if\) a match is found. Only a single “hit” is required for a match to be considered found.
-   This action is applied to that part of the captured bitmap identified as the active area, with the remainder of the image ignored. The active area is determined by the combination of the window, control and rect arguments. To begin with, window and control determine the active UI element, which can be a control, window, or the full screen, as follows:

    |window argument|control argument|active UI element is...|
    |---------------|----------------|-----------------------|
    |omitted|omitted|entire screen \(i.e., entire captured test image|
    |specified|omitted|entire application window|
    |specified|specified|specified control|

    With the active UI element established, the rect argument then \(optionally\) specifies a rectangular active area relative to the active UI element. \(If no rect argument is specified, the active UI element itself is the active area.\)

-   In most cases, the rect area, if specified, defines a sectional area whose borders reside within the active UI element, so that the rect area itself is the active area. But that is not necessarily the case. The following three images illustrate the general case for how the active area is determined when the rect area is specified.

    ![](/images//Images/TA_Automation/Images/ocr_area_specs_02.png)

    The general rule for determining the active area is as follows:

    |rect area:|resulting active area:|
    |----------|----------------------|
    |not specified|the active UI element|
    |overlaps the active UI element|the intersection space \(Cases 1 & 2 above\)|
    |no overlap with active UI element|the active UI element \(Case 3 above\)|

-   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/images//Images/Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/images//Images/Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html), [picture algorithm](picture_algorithm.html).

## Example - Case 1: The window and control arguments are specified

![](/images//Images/bia_does_picture_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_picture_exist_pgm.png)

**Result**

![](/images//Images/bia_does_picture_exist_res.png)

## Example - Case 2: The rect argument is specified

![](/images//Images/bia_does_picture_exist_aut_2.png)

**Action Lines**

![](/images//Images/bia_does_picture_exist_pgm_2.png)

**Result**

![](/images//Images/bia_does_picture_exist_res_2.png)

## Example - Case 3: The index argument is specified

![](/images//Images/bia_does_picture_exist_aut_3.png)

**Action Lines**

![](/images//Images/bia_does_picture_exist_pgm_3.png)

**Result**

![](/images//Images/bia_does_picture_exist_res_3.png)

**Parent topic:**[Picture Handling](/TA_Automation/Topics/bia_picture_handling.html)

**Previous topic:**[click picture](/TA_Automation/Topics/bia_click_picture.html)

**Next topic:**[export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html)

**Related information**  


[check picture](/TA_Automation/Topics/bia_check_picture.html)

[check picture exists](/TA_Automation/Topics/bia_check_picture_exists.html)

[check picture not exists](/TA_Automation/Topics/bia_check_picture_not_exists.html)

[Image comparison techniques](/TA_Automation/Topics/aut_image_comparison_techniques.html)

