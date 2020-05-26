--- 
title: "Mapping controls as MDI-child windows"
linktitle: "Mapping controls as MDI-child windows"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_mapping_controls_child_windows.html
---
# Mapping controls as MDI-child windows {#task_hnf_rqq_qx .task}

To address controls of MDI applications, TestArchitect maps the controls as MDI-child windows.

**Note:** Addressing controls of MDI applications by using the JIT mode is just fully supported on [Microsoft UI Automation](../../TA_Automation/Topics/aut_Using_UIA.html) \(UIA\) technology.

To map a control as a MDI-child window, do the following:

1.  Open the AUT and navigate to the MDI-child window of interest.

    **Note:** The MDI-child window is recognized as a normal control in the Interface Viewer.

2.  In the Interface Viewer, from the UI Explorer panel, right-click the control that you'd like to capture as a child window, and then select **Set Child Window**.

    The control is now captured as a child window. You can verify it from the **Settings** tab, at the **Child window** field.

    ![](../Images/ug_Viewer_child_window.png)

3.  Capture UI controls belonging to the newly-captured child window as you wish.

    For example, capture a button and a list view controls.

    **Warning:** While selecting TA properties to capture a control as a MDI-child window, it is highly recommended that you do not use the [global pos](Interface_def_global_pos.html) TA property. The use of global pos might cause the mistake when identifying UI control, since the nature of employed breadth-first search algorithm. \([Learn more](ug_JIT_UI_matching.html).\)

    ![](../Images/ug_Viewer_child_window_2.png)

4.  Save the interface definition.


A new [interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html) action named child window with the value of specified child window is added to the interface entity you are working on.

![](../Images/ug_MDI_definition.png)

In this example, frm\_chart\_check is a MDI-child window, and btn\_ok and listview are child controls which belong to the MDI-child window.

**Parent topic:**[Addressing windows, controls of Multiple Document Interface applications](../../TA_Help/Topics/ug_MDI.html)

**Next topic:**[Just-In-Time UI matching algorithm](../../TA_Help/Topics/ug_JIT_UI_matching.html)

