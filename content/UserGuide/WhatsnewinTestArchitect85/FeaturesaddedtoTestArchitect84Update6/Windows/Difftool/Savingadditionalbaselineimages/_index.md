--- 
title: "Saving additional baseline images"
linktitle: "Saving additional baseline images"
aliases: 
    - /TA_Help/Topics/Additional_features_image_capturing_add_new_baseline.html
---
# Saving additional baseline images {#Additional_feaures_image_capturing_tool_saving_new_baselines .task}

How to create additional baseline images for a picture check.

1.  Launch the AUT and navigate to the window or function that displays the picture of interest.

2.  In the TestArchitect Client, select the picture check to which you want to add additional baseline images:

    -   If it is a shared picture check \(that is, one that is available across the whole project\), it can be found in the TestArchitect explorer tree under the **Picture Checks** node:

        ![](../Images/Save_additional_baselines_2.png)

    -   If it is a regular picture check \(that is, owned by a test module\), it can be found under the **Picture Checks** tab of the test module:

        ![](../Images/Save_additional_baselines.png)

3.  Right-click the selection, then select **Add Baseline**.

    TestArchitect is minimized and your cursor changes into a crosshair icon, indicating that capture mode is now active.

    **Tip:** In capture mode, the following options are available to you:

    -   Click Esc to exit capture mode and return to TestArchitect, or
    -   Hold Ctrl on your keyboard to tell the system not to interpret a mouse click as the start of an image capture. This frees you to use your mouse to navigate to another window before initiating the capture.
4.  Pick the area of the screen that you want to capture by dragging the cursor around an object to form a rectangle.

    Note that, as you drag the mouse to specify the area of capture, a red, rectangular border appears.

5.  When the selection rectangle covers the area of capture that you want, release the mouse button.

6.  In the Capture Picture dialog box, enter the details for the new baseline image:

    -   **Picture name**: A unique name for the new baseline.
    -   **Location**: \(Optional\) Leave as default, or click ![](../Images/btn.browse-ellipsis.01.png) to save the picture to another location.
    **Tip:** To select the entire captured image, select the **Full Screen** check box.

    ![](../Images/capture_picture_dialog_add_new_baseline.png)

7.  Click the **Add Baseline** button.


The new baseline is saved as a node under its associated picture check node:

![](../Images/New_baseline_image_node.png)

.

**Parent topic:**[Picture Capturing tool](../../TA_Help/Topics/Additional_features_image_capturing_tool.html)

**Previous topic:**[Capturing new images](../../TA_Help/Topics/Additional_features_image_capturing_tool_capturing_saving.html)

