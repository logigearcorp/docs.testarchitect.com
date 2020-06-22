--- 
title: "Dynamically interacting with controls"
linktitle: "Dynamically interacting with controls"
description: "How to interact dynamically with the child UI elements of a container class."
weight: 2
aliases: 
    - /TA_Help/Topics/Container_class_click_control_dynamically.html
keywords: "unlocking, container classes, interacting controls dynamically"
---

How to interact dynamically with the child UI elements of a container class.

We will create a test script to dynamically click the three **Detail** texts residing under the **Car1.1**, **Car2.2** and **Car3.1** nodes as in the following figure:

![](/images/TA_Help/Images/unlock_container_classes_sample_app_dynamically.png)

1.  In a similar manner to how we captured the **Detail** text control in [Unlocking container classes](/TA_Help/Topics/Interface_def_container_class_unlock.html), we will now capture the **tree node** and **tree view** controls which contain the **Detail** control, using the Interface Viewer.

    Your interface entity, if you followed the example of the previous topic, should resemble the following:

    ![](/images/TA_Help/Images/unlock_container_classes_interface_entity_dynamic.png)

2.  Open a new test module in the editor, and enter the following action lines:

    ![](/images/TA_Help/Images/unlock_container_classes_script_dynamic.png)

    -   The [while](/TA_Automation/Topics/bia_while.html)/[end while](/TA_Automation/Topics/bia_end_while.html) loop executes three times based on the specified condition to run argument.
    -   The node path variable specifies the path to the tree node which contains each **Detail** text control. For example, Car/Car1/Car1.1Detail.
    -   The [click](/TA_Automation/Topics/bia_click.html) action clicks the three **Detail** text controls residing under the three tree nodes, **Car1.1**, **Car2.1** and **Car3.1**.
    -   Because TestArchitect supports [multiple level dynamic identifiers](/TA_Help/Topics/The_test_language_dynamic_identifiers.html#section_u3g_wb2_wq), the control argument of the click action contains the **tree node** control which is anchored to the **tree view** control, and the **Detail** text is anchored to the **tree node** control sequentially. \([Learn more.](/TA_Help/Topics/The_test_language_dynamic_identifiers.html#section_u3g_wb2_wq)\)
3.  Click the **Execute Test** ![](/images/TA_Help/Images/Toolbar_Button_Execute.png) toolbar icon.

4.  In the Execute Test dialog box, click the **Execute** button to begin execution.





**Related information**  


[Dynamic identifiers](/TA_Help/Topics/The_test_language_dynamic_identifiers.html)

[Point-to-identify mode](/TA_Help/Topics/Interface_def_Viewer_identify.html)

[Point-to-identify tool](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html)

