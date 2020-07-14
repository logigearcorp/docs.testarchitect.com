--- 
title: "if text not exists"
linktitle: "if text not exists"
description: "Description Check for the nonexistence of a specified bitmap text fragment in a bitmap. If the fragment is not found, execute the associated action lines. Arguments window (Optional) TA name of the ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_if_text_not_exists.html
keywords: "built-in actions, if text not exists, if text not exists (action), iOS (action), Android (action), if text not exist, check nonexistence of specified text in area, check if text does not exist in area, verify whether text does not exist in area, verify nonexistence of specified text in area"
---

## Description

Check for the nonexistence of a specified [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) in a bitmap. If the fragment is not found, execute the associated action lines.

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
    ![](/images/TA_Automation/Images/ocr_area_specs_01.png)

    The above figure illustrates the active area that applies when both the window and control arguments have been specified \(establishing a picture control as the active UI element\), and rect = 80, 30. \(That is, left=80, top=30, and width and height are allowed to assume their default values.\) Note that, in this case, the active area and the rect area are the same, but that is not always the case. \(See Notes below.\)

    {{<note>}} Any of the four sub-arguments of rect may be omitted, but all values must maintain their comma-delimited places to ensure correct assignment.\(For example, setting rect to \(, , 100, 50\) specifies an active area of width=100, height=50, whose top-left corner coincides with that of the active UI element.\)

-   **text**

    String representing the [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be searched for.

-   **index**

    \(Optional\) Specifies a minimum number of instances of the search text that must be discovered within the active area for the target [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) to be considered as found \(default = 1\).

-   **text color**

    \(Optional\) Color code of the text, in hexadecimal. \(See Notes below.\)

    This value is obtained from the [OCR Detector Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/ocr-detector-tool/detecting-matched-texts#note_e3p_3yg_g4) dialog box.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action employs both [Optional Character Recognition](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(OCR\) and [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) techniques. By default, the action employs OCR technique. To switch to GDI technique, refer to the [character recognition technique](/automation-guide/action-based-testing-language/built-in-settings/other-settings/character-recognition-technique) built-in setting for details.

    {{<important>}}

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

    ![](/images/TA_Automation/Images/ocr_area_specs_02.png)

    The general rule for determining the active area is as follows:

    |rect area:|resulting active area:|
    |----------|----------------------|
    |not specified|the active UI element|
    |overlaps the active UI element|the intersection space \(Cases 1 & 2 above\)|
    |no overlap with active UI element|the active UI element \(Case 3 above\)|

-   text argument:
    -   For OCR technique: While the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) setting applies to the property values used to identify the correct window or control for this action, the action's OCR text identification functionality is non-case sensitive, and remains unaffected by the value of this setting.
    -   For GDI technique:
        -   The action's GDI text identification functionality is case sensitive, and is affected by the value of the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) setting.
        -   It is highly recommended that you apply wildcards for this argument's value, since the text re-drawn by given drawing functions might contain surrounding noise. For example: given a value of \{Administration.\*\}, TestArchitect searches for texts whose string beginnings match Administration. In more general terms, this argument accepts regular expressions.
-   text color argument:
    -   No value is required if your test procedure does not make use of the built-in [set ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/set-ocr-setting) action and [OCR Detector Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/ocr-detector-tool/).
    -   Otherwise, a value is required for text color, and is generally obtained through the OCR Detector Tool. This ensures that OCR-related built-in actions are able to detect the given text properly, in the same way that you would identify it manually with the OCR Detector Tool.
-   For testing mobile applications:
    -   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
    -   Android: This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
        1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
        2.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
        3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) \(see Notes\), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Example - Case 1: With window and control arguments specified

![](/images/TA_Automation/Images/bia_if_text_not_exists_aut_2.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_text_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_if_text_not_exists_res.png)

## Example - Case 2: With rect argument specified

![](/images/TA_Automation/Images/bia_if_text_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_text_not_exists_pgm_2.png)

Result

![](/images/TA_Automation/Images/bia_if_text_not_exists_res_2.png)

## Example - Case 3: With index argument specified

![](/images/TA_Automation/Images/bia_if_text_not_exists_aut_3.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_text_not_exists_pgm_3.png)

Result

![](/images/TA_Automation/Images/bia_if_text_not_exists_res_3.png)

## Example - Case 4: With text color argument specified

![](/images/TA_Automation/Images/bia_if_text_not_exists_aut_4.png)

Action Lines

![](/images/TA_Automation/Images/bia_if_text_not_exists_pgm_4.png)

Result

![](/images/TA_Automation/Images/bia_if_text_not_exists_res_4.png)




**Related information**  


[if text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/if-text-exists)
