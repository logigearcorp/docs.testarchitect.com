--- 
title: "OCR advanced settings"
linktitle: "OCR advanced settings"
description: "To address the problem of difficult-to-read text, the OCR Detector Tool offers advanced settings, allowing you to make adjustments that optimize the automation's ability to detect and recognize bitmapped text.."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html
keywords: "OCR, advanced settings, extra thresholds"
---

Sometimes, complex or noisy backgrounds, irregularly spaced characters, or other factors may make the detection of bitmapped text difficult. To address the problem of difficult-to-read text, the OCR Detector Tool offers advanced settings, allowing you to make adjustments that optimize the automation's ability to detect and recognize bitmapped text..

**Note:** Note that the OCR Detector tool is not currently supported on Linux and macOS.

![](/images/TA_Help/Images/OCR_detector_tool_dlg_advanced_settings.png)

The **Advanced Settings** tab of the OCR Detector Tool offers the following settings:

-   **Min Edge Length**:
    -   Minimum length, in pixels[\#d776e163](#d776e163), for an edge to be ignored as possible text. \(Or, if you prefer, the maximum length, plus 1, for an edge to be considered as possible text.\) During the line-removal phase, any edge \(horizontal or vertical only\) whose length is greater than the specified value is eliminated for consideration as text.
    -   Default = 50 pixels.
    -   This value can be useful to eliminate the edges of various graphical items, such as buttons, as candidates for text fragments during the detection phase of the OCR process. During the training process \(that is, when using the OCR Detector Tool\), this line-removal process takes place when you press **Detect**.
-   **Linking Distance**:
    -   Maximum horizontal distance between adjacent characters for those characters to be treated as members of a single [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html). The linking distance is given as a percentage of the average height \(not width\) of the detected font sizes of the text on either side of the gap. Adjacent characters are grouped together as a fragment when the distance between each is less than the specified threshold value. If the horizontal spacing between two characters exceeds this threshold, they are treated as members of separate bitmap text fragments.
    -   Default = 50%. \(Valid range is 1 to 500.\)
    -   This value is useful when you want to split a detected single text string into separate text strings.
-   **Define coordinate to fill inverse color \(x, y\)**:
    -   This value is useful when you need to detect a chunk of text with color very similar to its immediate or near background imagery.
    -   Selecting this check box option initiates the following procedure:
        1.  The mouse cursor changes into a paint bucket ![](/images/TA_Help/Images/paint_bucket_icon.png).
        2.  When you click a point in the training image, TestArchitect records the coordinates \(x, y\) and adds a row to the **Color Inversion** table, placing the coordinates in the left column and the current value of the **Inverse Color Range** field at right.

            ![](/images/TA_Help/Images/OCR_detector_tool_dlg_fill_inverse_color.png)

        3.  In the training image, TestArchitect then inverts the colors within the area defined by the combination of \(x, y\) and the **Inverse Color Range** value.
-   **Inverse Color Range**: This field plays two key roles as follows:
    -   During the color inversion process: Specifies a tolerance level for determining which pixels are to be inverted. Pixels with colors within the specified range of the color of pixel \(x,y\) , and contiguous with the clicked point, are inverted; otherwise their colors remain intact. \(Note that pixels are changed to the inverse of the \(x,y\) pixel’s color, not to the inverses of their individual colors.\)
    -   During the text detection process: The value of this field is used to establish a range around the value of **Pick Color** \(under the **Settings** tab\) to determine which colors are to be considered \(those within the range\) and which are to be ignored \(those outside the range\).

**Note:**

-   All the values specified for OCR advanced settings must be declared explicitly within your tests. Do this by clicking the **Copy Script to Clipboard** button in the OCR Detector Tool dialog box, and then pasting the values into TestArchitect's test editor \(pressing Ctrl + V\). TestArchitect automatically generates a built-in action [set ocr setting](/TA_Automation/Topics/bia_set_ocr_setting.html) with filled argument values:

    ![](/images/TA_Help/Images/bia_set_ocr_setting_pgm_advanced_settings.png)

-   In the **Color Inversion** table:
    -   to clear all rows, click the **Clear** button.
    -   to remove specific row\(s\), click the **Delete** button.
    -   to apply all rows to the training picture, click the **Apply** button.



