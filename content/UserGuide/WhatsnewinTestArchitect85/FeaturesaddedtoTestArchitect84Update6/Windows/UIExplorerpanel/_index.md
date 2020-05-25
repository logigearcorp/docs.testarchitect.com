--- 
title: "UI Explorer panel"
linktitle: "UI Explorer panel"
aliases: 
    - /TA_Help/Topics/ug_Interface_UI_explorer_panel.html
---
# UI Explorer panel {#concept_myj_pmw_gt .concept}

Upon startup, the Interface Viewer takes inventory of every open window in the system on which it is pointed, and displays each one as a node in its **UI Explorer** tree. During this system intake process, the Viewer keeps an eye out for an open window to which the active interface entity \(if any\) is mapped. \(That is, a window whose property-value pairs match those specified by the interface entity setting action\(s\) of the interface entity.\) If the matching window is found, its node in the tree is highlighted and partially expanded.

## View modes {#section.View_mode .section}

Two views are available for this panel: Class View and Hierarchy View.

**Tip:** To switch between these views, use the **View** \> **Switch to Hierarchy View** menu, or **View** \> **Switch to Class View**.

![](../Images/ug_interface_definition9.png "Class View  and Hierarchy View of the same interface
     entity")

Class View groups GUI controls and elements by their TA classes, displaying the classes as the first tree level beneath the window node, and the actual controls as subnodes of their respective classes. As such, this view is limited to these two sublevels. Unmapped control nodes are labelled with the value of a property that the Interface Viewer has chosen as a suitable identifier. Mapped nodes have this value in parentheses, preceded by the TA name in uppercase.

Hierarchy View, by contrast, displays the container relationships between objects \(windows, panels, controls, elements, etc.\), also in tree form. As such, there is no restriction on the number of levels that can exist in subtrees in this view. Unmapped nodes consist of a TA class name in boldface, followed by the value of a property that the Interface Viewer has chosen as a suitable identifier. Mapped nodes also include the TA name in uppercase.

## Desktop mode and Device mode {#section.device_desktop_mode .section}

Desktop mode gives you the access to the GUI environment of AUTs running on your desktop.

Device mode is pretty self-explanatory. Similar to desktop mode, device mode gives you the access to the GUI environments of AUTs running on mobile devices that are currently connected to your host machine.

**Note:**

-   To switch between these modes, use the **View** \> **Switch device** menu.
-   Alternatively, if your aim is to enter device mode only, click the **Device mode** ![](../Images/btn_device_mode_Viewer.png) button on the Interface Viewer's toolbar.

![](../Images/ug_interface_definition10.png "Icons in the UI Explorer panel")

**Note:**

-   The term synced \(short for synchronized\) here means that a\) the given window/control is already mapped to an interface entity/element, and b\) the associated interface entity is currently open in TestArchitect client. Hence, unsynced does not necessarily mean that no mapping exists for the given window/control – it could simply be the case that the associated interface entity is not currently open.
-   For simplicity, menu items and other parts of the Interface Viewer's interface use the term map, rather than sync.
-   By default, TestArchitect organizes all interface elements by their TA class property. If you want to ungroup them:
    1.  From the Interface Viewer, select the **Settings** menu.
    2.  Clear the **Group Elements** check box.

        ![](../Images/Viewer_group_element.png)


**Parent topic:**[Interpreting the Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_reading.html)

**Next topic:**[Properties panel](../../TA_Help/Topics/ug_Interface_properties_panel.html)

