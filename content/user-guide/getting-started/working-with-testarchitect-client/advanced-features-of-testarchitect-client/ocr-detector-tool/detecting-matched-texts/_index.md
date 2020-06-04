--- 
title: "Detecting matched texts"
linktitle: "Detecting matched texts"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_OCR_detector_tool_retrieving_color_code.html
---

How to detect matched texts and get their color code in hexadecimal numbers.

Ensure that you have captured and saved one or more training images. These are images that are similar in appearance to the images expected from the AUT during automation. Note that it is less essential that the text strings be identical than that such things as background, color, text size and font be similar to the expected test images.

**Note:**

-   To capture screenshots of desktop applications, use the [Picture Capturing](Additional_features_image_capturing_tool.html) tool.
-   To capture screenshots of mobile applications, use the [Device Live Screen](ug_capturing_mobile_screenshot.html) tool together with the [Picture Capturing](Additional_features_image_capturing_tool.html) tool.

**Note:** Note that the OCR Detector tool is not currently supported on Linux and macOS.

You will train the system by establishing optimal settings for detecting text during automation. To determine these settings, carry out the following steps:

1.  With TestArchitect open, select **Tools** \> **OCR Detector Tool**.

    ![](/images//Images/OCR_detector_tool_dlg.png)

2.  In the OCR Detector Tool dialog box, click the ![](/images//Images/btn.browse-ellipsis.01.png) button next to the **Select file to test** field.

    **Note:** Only .png images are supported.

3.  In the Save dialog box, browse to the training image containing the text you want to detect, then click **Select**.

    The selected training image is loaded into the OCR Detector Tool dialog box.

    ![](/images//Images/OCR_detector_tool_dlg_loaded_image.png)

4.  For some images, it is easier to see the effect of the edge detection process when the color information is removed from the image's display. To do this, select the **Gray Scale** check box under the **Settings** tab.

5.  Under the **Settings** tab, select the **Pick Color** check box to enable color code selection and retrieval of desired text.

    **Tip:** To zoom out or zoom in on the image, use **Zoom Out \(-\)** or **Zoom In \(+\)** button, respectively.

    The mouse cursor changes into a eyedropper pointer.

6.  Position the eyedropper pointer over a portion of the text that needs detecting.

    If the text varies in shading or color, you should choose a color that covers most of the text or is most representative of all the text.

    The color code at the selected text is displayed as three hexadecimal numbers in RGB order, below the **Pick Color** check box.

    ![](/images//Images/OCR_detector_tool_dlg_pick_color.png)

    **Important:** Make note of these three hexadecimal values for manual entry into the text color argument of whichever [OCR-related built-in actions](/TA_Automation/Topics/bia_OCR.html) you use in your test.

7.  Click the **Scan Picture** button to filter out colors which do not match the color selected from the text.

    The unmatched colors are filled with the inverse of the color selected previously.

8.  Click the **Detect** button to detect and highlight all objects which match the color selected previously.

    The detected objects are highlighted with bounding rectangles.

    ![](/images//Images/OCR_detector_tool_dlg_detected_objects.png)

9.  Click the **Recognize** button to scan and return texts whose color matches the color selected previously.

    A list of recognized text fragments is displayed. \(Note that all text fragments are presented in lowercase, and with spaces removed.\)

    ![](/images//Images/OCR_detector_tool_dlg_recognized_texts.png)

10. Select the text you want to detect from the list of recognized texts.

    The selected text is highlighted in the training image with its bounding rectangle, with the \(x,y\) coordinates of the top-left corner of the bounding rectangle displayed.![](/images//Images/OCR_detector_tool_dlg_selected_text.png)


If your text of interest is unrecognizable or improperly recognized, try using the [OCR advanced settings](ug_OCR_detector_tool_advanced_settings.html).

**Parent topic:**[OCR Detector tool](/TA_Help/Topics/ug_OCR_detector_tool.html)

**Next topic:**[OCR advanced settings](/TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html)

