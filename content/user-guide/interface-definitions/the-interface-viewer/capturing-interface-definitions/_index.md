--- 
title: "Capturing interface definitions"
linktitle: "Capturing interface definitions"
description: "Capturing interface definitions means writing out interface entities with a) mappings of controls to TA names, and b) mapping of windows to interface entities."
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_capturing.html
keywords: "interfaces, capturing, interface viewer, capturing interfaces, viewer, capturing every interface, entities, all interfaces"
---

Capturing interface definitions means writing out interface entities with a\) mappings of controls to TA names, and b\) mapping of windows to interface entities.

1.  Create a [new interface entity](/TA_Help/Topics/Interface_def_Adding.html) in TestArchitect, and keep it open and in the active tab of the main panel.

2.  Open the application of interest and navigate to the window whose interface you want to capture.

3.  Launch the Interface Viewer from TestArchitect \(press F7 or select **Tools** \> **Interface Viewer** from the main menu; or click the **Interface Viewer** ![](/images/TA_Help/Images/Interface_viewer_btn.png) button on the toolbar\). Alternatively, if the Interface Viewer is already open, perform a **Refresh** \(press **F5** or select **File** \> **Refresh**, or click the **Refresh** button\).

{{<note>}} The name of the active interface entity appears in the title bar of the Interface Viewer.

4.  In the **View Menu**, if there is a menu item named **Switch to Class View**, select it. \(If it's not present, the Interface Viewer is already in Class View mode\)

5.  In the UI explorer panel, locate the node representing the application window you will capture. Click that node. Observe that the Properties panel now displays the properties for this window.

{{<tip>}} To capture UI child elements belonging to a container class, see [Container Class](/TA_Help/Topics/Interface_def_container_class.html).

{{<note>}} Typically, in the Properties panel, the check box of the title property is selected. Because it is selected, this is the property that will be used by the interface entity to uniquely identify this window and map it to the interface entity. You have the option at this point of deselecting this property and choosing some other property, or multiple properties, as the identifier. The important thing is that you ensure that the property or combination of properties you use is unique. This uniqueness must be not just amongst all the windows that are currently open, but all the ones that may be open during testing. If TestArchitect cannot uniquely identify a single window from an interface entity, you will receive an error message to the effect that there is more than one open window matching the interface entity.

6.  Double-click the node.

    The name of the open interface entity appears in the node in uppercase letters, with the window title in parentheses. A green check mark ![](/images/TA_Help/Images/ug_interface_definition45.png) indicates that the window has been synced to the open interface entity in preparation for mapping \(Note that new mappings do not appear in an interface entity until they are explicitly saved\). The node is also expanded, displaying the classes of the objects found in the window.

    ![](/images/TA_Help/Images/ug_interface_definition16_UIA.png)

7.  At this point, you will select the controls that you wish to capture and map. Note that not all items need to be mapped: you need only map the items you plan to have your actions and test modules directly interact with. \(Some objects, such as panels, etc., are non-interactive; hence, they may play no role in your tests\). Expand the class node\(s\) that you're interested in.

    **Fastpath:** To capture all controls at a time, see [here](/TA_Help/Topics/ug_Interface_def_Viewer_capture_all_controls.html).

8.  Within each class node, the Interface Viewer displays the control nodes, and labels each one with whichever property makes identification easiest. \(For instance, a button is identified by the value of its Caption property; a textbox by its Label property, etc.\) For each control you wish to map, perform the following:

    1.  Select the node representing the control to be mapped.

    2.  In the **TA Name** text box, type in your choice of a logical name. \(Note that TA names are case-insensitive.\) Alternatively, you may accept the Viewer's suggested name \(see box below\).

    3.  In the Properties panel, the Viewer has selected the property \(or properties\) it suggests as best for uniquely identifying the control. You may override the Viewer's choice and select other\(s\) based on your own preferences. Choose the most stable and visible property or properties to capture so that the TestArchitect can distinguish the captured control from others during playback.

    4.  Hit **Enter**. The control is now mapped to the new name.

    Alternatively, you may:

    1.  Right-click the control to be mapped, and then select **Rename**.

    2.  Type your choice of TA name for the item, and hit **Enter**. The control is now mapped.

{{<attention>}} The icon for each node now switches from double angle brackets to a green check mark, indicating it has been mapped. Furthermore, your new TA name appears in the node in UPPER-CASE letters, with the physical name next to it in parentheses.

        **Auto-mapping & unmapping:** As a speedy alternative to using the **Rename** option, you may simply double-click any unmapped control node. This causes the control to be mapped with a logical name that the Viewer assigns for you. This is called a suggested name and can be used in your definition.

        Suggested names are generally taken by the Viewer from such properties of controls as caption, label, or name – properties whose values are generally user-friendly, and would thus qualify as good TA names. In some cases, however, such a property, or a value for the property, is not available. When that happens, the Viewer uses the value of the global pos property as a suggested name. [global pos](/TA_Help/Topics/Interface_def_global_pos.html) is a TestArchitect-generated property-value pair that is assigned to every control, and which is unique for each control in a window.

        Double-clicking a node acts like a toggle. That is, double-clicking a mapped node causes that node to become unmapped.

        ![](/images/TA_Help/Images/ug_interface_definition17.png)

9.  Once you have finished mapping all the controls you need, select **Save** from the **File** menu, or click the **Save** ![](/images/TA_Help/Images/ug_interface_definition44.png) icon on the toolbar.


The open interface entity has been populated by [interface entity setting](/TA_Automation/Topics/bia_interface_entity_setting.html) and [interface element](/TA_Automation/Topics/bia_interface_element.html) lines, each of which is responsible for a single mapping. The interface entity has also been saved.

You are now ready to write actions and test modules that directly interact with the window and controls that you have mapped.




