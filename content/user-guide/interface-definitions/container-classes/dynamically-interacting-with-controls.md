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

1.  In a similar manner to how we captured the **Detail** text control in [Unlocking container classes](/user-guide/interface-definitions/container-classes/unlocking-container-classes), we will now capture the **tree node** and **tree view** controls which contain the **Detail** control, using the Interface Viewer.

    Your interface entity, if you followed the example of the previous topic, should resemble the following:

    ![](/images/TA_Help/Images/unlock_container_classes_interface_entity_dynamic.png)

2.  Open a new test module in the editor, and enter the following action lines:

    ![](/images/TA_Help/Images/unlock_container_classes_script_dynamic.png)

    -   The [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while)/[end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while) loop executes three times based on the specified condition to run argument.
    -   The node path variable specifies the path to the tree node which contains each **Detail** text control. For example, Car/Car1/Car1.1Detail.
    -   The [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click) action clicks the three **Detail** text controls residing under the three tree nodes, **Car1.1**, **Car2.1** and **Car3.1**.
    -   Because TestArchitect supports [multiple level dynamic identifiers](/user-guide/interface-definitions/dynamic-identifiers#section_u3g_wb2_wq), the control argument of the click action contains the **tree node** control which is anchored to the **tree view** control, and the **Detail** text is anchored to the **tree node** control sequentially. \([Learn more.](/user-guide/interface-definitions/dynamic-identifiers#section_u3g_wb2_wq)\)
3.  Click the **Execute Test** ![](/images/TA_Help/Images/Toolbar_Button_Execute.png) toolbar icon.

4.  In the Execute Test dialog box, click the **Execute** button to begin execution.





**Related information**  


[Dynamic identifiers](/user-guide/interface-definitions/dynamic-identifiers)

[Point-to-identify mode](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode)

[Point-to-identify tool](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/)

