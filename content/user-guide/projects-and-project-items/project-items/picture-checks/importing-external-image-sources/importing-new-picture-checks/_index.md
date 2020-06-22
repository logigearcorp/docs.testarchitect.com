--- 
title: "Importing new picture checks from external files"
linktitle: "Importing new picture checks from external files"
description: "To import new picture checks from external image files, do the following: In the TestArchitect explorer tree , select either: a test module node, and then select Local Pictures , located under the ..."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_picture_checks_importing.html
keywords: 
---

To import new picture checks from external image files, do the following:

1.  In the TestArchitect explorer tree, select either:

    -   a test module node, and then select **Local Pictures**, located under the **Picture Checks** tab, or

        ![](/images/TA_Help/Images/import_regular_picture_checks.png)

    -   the **Picture Checks** node. You can also select a subfolder node residing under the **Picture Checks** node.

        ![](/images/TA_Help/Images/import_shared_picture_checks.png)

    **Important:**

    -   If the **Picture Checks** node or its subfolder is selected, the imported image is saved to the **Picture Checks** node. This image is shared across various test modules in a project, also known as a [shared picture check](/TA_Help/Topics/Projects_and_tests_picture_check.html#li_Regular_picture_check).
    -   If a test module is selected, the imported image is saved as a [regular picture check](/TA_Help/Topics/Projects_and_tests_picture_check.html#li_Regular_picture_check) and this image is only available within the selected test module.
2.  Right-click the selection, and then select **Import Picture**.

3.  In the Select dialog box, select image file\(s\) to be imported, and then click **Select**.

    **Note:**

    -   Only .PNG files are accepted.
    -   The Shift and Ctrl keys may be used with the mouse to aid in multiple selection.
    ![](/images/TA_Help/Images/import_baseline_images_select_dlg.png)


The selected image file\(s\) have been imported successfully as new picture check\(s\), or the first baseline image\(s\).

![](/images/TA_Help/Images/import_picture_check_result.png)


