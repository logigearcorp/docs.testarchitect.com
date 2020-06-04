--- 
title: "-"
linktitle: "does text exist"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_does_text_exist.html
---
keyword: [does text exist, Is specified text found in area, Find specified text within area]
---

# does text exist

## Description

Return a Boolean value to indicate whether a specified [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html) is found to exist in a given bitmap.

## Arguments

-   **window**

    \(Optional\) TA name of the window.

-   **control**

    \(Optional\) TA name of the control.

-   **rect**

    \(Optional\) Specifies the dimensions of a rectangular area which, in combination with the active UI element \(as determined by the window and control arguments\), defines the active area. Scanning for thesearch text \(defined by text\)is then limited to this active area \(see Notes below\). Values specifying the location of the rect area are relative to the active UI element.

    The rect argument consists of four comma-separated values:

    -   left: Specifies the left border of the rect area relative to the left edge of the active UI element \(screen, window or control – see **Notes** below\). \(Units: pixels; default=0\)
    -   top: Specifies the top border of the rect area relative to the top edge of the active UI element. \(Units: pixels; default=0\)
    -   width: Specifies the width of the rect area. \(Units: pixels; the default is that value which causes the right border of the active area to coincide with the right edge of the active UI element.\)
    -   height: Specifies the height of the rect area. \(Units: pixels; the default is that value which causes the lower border of the active area to coincide with the lower edge of the active UI element.\)
    ![](/images//Images/TA_Automation/Images/ocr_area_specs_01.png)

    The above figure illustrates the active area that applies when both the window and control arguments have been specified \(establishing a picture control as the active UI element\), and rect = 80, 30. \(That is, left=80, top=30, and width and height are allowed to assume their default values.\) Note that, in this case, the active area and the rect area are the same, but that is not always the case. \(See Notes below.\)

    **Note:** Any of the four sub-arguments of rect may be omitted, but all values must maintain their comma-delimited places to ensure correct assignment.\(For example, setting rect to \(, , 100, 50\) specifies an active area of width=100, height=50, whose top-left corner coincides with that of the active UI element.\)

-   **text**

    String representing the [bitmap text fragment](/images//Images/TA_Glossary/Topics/glossaryTextFragment.html) to be searched for.

-   **index**

    \(Optional\) Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/images//Images/TA_Glossary/Topics/glossaryTextFragment.html) to be considered as found \(default = 1\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Target text found.

    -   **0**

        Target text not found.

-   **text color**

    \(Optional\) Color code of the text, in hexadecimal. \(See Notes below.\)

    This value is obtained from the [OCR Detector Tool](/images//Images/TA_Help/Topics/ug_OCR_detector_tool_retrieving_color_code.html#note_e3p_3yg_g4) dialog box.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action employs both [Optional Character Recognition](aut_text_recognition_techniques.html) \(OCR\) and [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) techniques. By default, the action employs OCR technique. To switch to GDI technique, refer to the [character recognition technique](bis_character_recognition_technique.html) built-in setting for details.

    **Important:**

    -   When this built-in action applies GDI technique, all Windows APIs, including [DrawTextA](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) \(ANSI name\), [DrawTextW](https://msdn.microsoft.com/en-us/library/dd162498(v=vs.85).aspx) \(Unicode name\), [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) \(ANSI name\), [TextOutA](https://msdn.microsoft.com/en-us/library/dd145133(v=vs.85).aspx) \(Unicode name\), [ExtTextOutA](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) \(ANSI name\), [ExtTextOutW](https://msdn.microsoft.com/en-us/library/dd162713(v=vs.85).aspx) \(Unicode name\) will be called to redraw the desired text produced by the AUT.
    -   Use of GDI technique for this action is supported on the following systems/platforms: Windows \(Win32, WinForms\).
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

-   text argument:
    -   For OCR technique: While the [case sensitive](bis_case_sensitive.html) setting applies to the property values used to identify the correct window or control for this action, the action's OCR text identification functionality is non-case sensitive, and remains unaffected by the value of this setting.
    -   For GDI technique:
        -   The action's GDI text identification functionality is case sensitive, and is affected by the value of the [case sensitive](bis_case_sensitive.html) setting.
        -   It is highly recommended that you apply wildcards for this argument's value, since the text re-drawn by given drawing functions might contain surrounding noise. For example: given a value of \{Administration.\*\}, TestArchitect searches for texts whose string beginnings match Administration. In more general terms, this argument accepts regular expressions.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   text color argument:
    -   No value is required if your test procedure does not make use of the built-in [set ocr setting](/images//Images/TA_Automation/Topics/bia_set_ocr_setting.html) action and [OCR Detector Tool](/images//Images/TA_Help/Topics/ug_OCR_detector_tool.html).
    -   Otherwise, a value is required for text color, and is generally obtained through the OCR Detector Tool. This ensures that OCR-related built-in actions are able to detect the given text properly, in the same way that you would identify it manually with the OCR Detector Tool.
-   For testing mobile applications:
    -   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/images//Images/TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
    -   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/images//Images/Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
        1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
        2.  Open the [Android Instrumentation Tool](/images//Images/Android/Topics/Android_Instrumentation_tool.html) dialog box.
        3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html) \(see Notes\), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Example - Case 1: With window and control arguments specified

![](/images//Images/bia_does_text_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_text_exist_pgm.png)

**Result**

![](/images//Images/bia_does_text_exist_res.png)

## Example - Case 2: With rect argument specified

![](/images//Images/bia_does_text_exist_aut_2.r01.png)

**Action Lines**

![](/images//Images/bia_does_text_exist_pgm_2.png)

**Result**

![](/images//Images/bia_does_text_exist_res_2.png)

## Example - Case 3: With index argument specified

![](/images//Images/bia_does_text_exist_aut_3.png)

**Action Lines**

![](/images//Images/bia_does_text_exist_pgm_3.png)

**Result**

![](/images//Images/bia_does_text_exist_res_3.png)

## Example - Case 4: With text color argument specified

![](/images//Images/bia_does_text_exist_aut_4.png)

**Action Lines**

![](/images//Images/bia_does_text_exist_pgm_4.png)

**Result**

![](/images//Images/bia_does_text_exist_res_4.png)

**Parent topic:**[Optical Character Recognition](/TA_Automation/Topics/bia_OCR.html)

**Previous topic:**[click text](/TA_Automation/Topics/bia_click_text.html)

**Next topic:**[get text background color](/TA_Automation/Topics/bia_get_text_background_color.html)

**Related information**  


[check text exists](/TA_Automation/Topics/bia_check_text_exists.html)

[check text not exists](/TA_Automation/Topics/bia_check_text_not_exists.html)

