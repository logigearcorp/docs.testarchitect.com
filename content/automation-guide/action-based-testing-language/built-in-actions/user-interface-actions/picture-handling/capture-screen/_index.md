--- 
title: "capture screen"
linktitle: "capture screen"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_capture_screen.html
keywords: "capture screen, take screenshot, screen capture, screenshot"
---

## Description

Capture the screen and store as an image file.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **left**

    \(Optional\) Specifies the left border of a rectangular area \(referred to as the rect area\), relative to the left edge of the active UI element \(which is a window, control, or the entire screen, depending on the presence or absence of values in the window and control arguments\). The combination of this rect area with the active UI element determines the active area. Scanning for a match with the baseline image is limited to this area. \(Units: pixels; default=0\)

-   **top**

    \(Optional\) Specifies the top border of the rect area, relative to the top edge of the active UI element. \(Units: pixels; default=0\)

-   **width**

    \(Optional\) Specifies the width of the rect area. \(Units: pixels; the default is that value which causes the right border of the rect area to coincide with the right border of the active UI element.\)

-   **height**

    \(Optional\) Specifies the height of the rect area. \(Units: pixels; the default is that value which causes the lower border of the rect area to coincide with the lower border of the active UI element.\)

-   **image location**

    Full path of file into which to store the image.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   A captured image can only be saved as .JPEG, .BMP, or .PNG. Include the desired extension in the file name portion of the image location value.
-   This action is applied to that part of the captured bitmap identified as the active area, with the remainder of the image ignored. The active area is determined by the combination of the window, control arguments, along with the four arguments \(left, top, width and height\) that define the rect area.

    To begin with, window and control determine the active UI element, which can be a control, window, or the full screen, based on the following rules:

    |window argument|control argument|active UI element is...|
    |---------------|----------------|-----------------------|
    |omitted|omitted|entire screen \(i.e., entire captured test image|
    |specified|omitted|entire application window|
    |specified|specified|specified control|

    With the active UI element established, the optional rect area, if defined, specifies a rectangular area relative to the top-left corner of the active UI element. \(If none of the four rect arguments are specified, the active area is the active UI element itself.\)

    ![](/images//Images/picture_check_area.png)

    The above figure illustrates the active area that applies when both the window and control arguments have been specified, establishing the picture control \(with the 12 cars\) as the active UI element. The values specifying the rect area \(left, top, width and height\) are such that it covers both a portion of the active UI element as well as an area outside of it. In such a case, the active area is the area of overlap between the active UI element and the rect area.

-   In most cases, the rect area, if specified, defines a sectional area whose borders reside within the active UI element, so that the rect area itself is the active area. But that is not necessarily the case. The following three images illustrate the general case for how the active area is determined when the rect area is specified.

    ![](/images//Images/TA_Automation/Images/ocr_area_specs_02.png)

    The general rule for determining the active area is as follows:

    |rect area:|resulting active area:|
    |----------|----------------------|
    |not specified|the active UI element|
    |overlaps the active UI element|the intersection space \(Cases 1 & 2 above\)|
    |no overlap with active UI element|the active UI element \(Case 3 above\)|

-   **Windows platform**: Use backward slashes as separators for the path.
-   **Linux platform**: Use forward slashes as separators for the path. \(Note that network paths are not supported.\)
-   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_capture_screen_pgm.png)

**Effect**

![](/images//Images/bia_capture_screen_aut.png)

**Parent topic:**[Picture Handling](/TA_Automation/Topics/bia_picture_handling.html)

**Next topic:**[check picture](/TA_Automation/Topics/bia_check_picture.html)

