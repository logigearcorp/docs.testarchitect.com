--- 
title: "Interface Viewer"
linktitle: "Interface Viewer"
aliases: 
    - /TA_Tutorials/Topics/Interface_Viewer.html
---
# Interface Viewer {#Interface_Viewer .concept}

The Interface Viewer assists in capturing elements of an application interface and generating interface definitions.

Mapping interface elements manually can be time-consuming and prone to error. The Interface Viewer is a support tool used to explore and capture elements of an application interface and generate interface definitions. The Interface Viewer enables you to:

-   Capture all the controls of a given window at once
-   Map UI elements \(controls and windows\) and generate \(or modify\) interface entities from the mappings
-   Explore the properties of each UI element, and select which properties the automation should use to identify them
-   Define or change TA names for UI elements

Start the Interface Viewer by pressing F7 or click the Interface Viewer button ![](../Images/btn.TAC_toolbar.Interface_Viewer.png) on the toolbar.

Upon startup, the Interface Viewer:

-   Identifies all open windows on the desktop
-   Determines whether any interface entities are currently open in TestArchitect Client
    -   Displays windows as trees with controls as nodes when interface entities are open and match the windows on the desktop
    -   Displays *all* windows of the host environment as trees when there is no open interface entity and no matching window for the open interface entity can be found

The Interface Viewer enables you to view an application's controls and properties, map those elements to TA names, which are used in test modules and actions, and save those mappings to interface entities. The Viewer consists of four main panels and a toolbar:

![](../Images/dlg.Interface_Viewer_UIA.png)

## UI explorer panel { .section}

The UI explorer panel displays the open windows of the host environment as a collection of trees. It offers a choice of two views, selectable from the **View** menu:

![](../Images/tut.Interface_Defs.Int_Viewer.UIExpl_views.png "Class and Hierarchy views of the same mapped window.")

Class View
:   Default view of the UI explorer panel. It presents each window as a tree. Within each tree, GUI controls and elements are grouped into classes as subnodes of the window node.

Hierarchy View
:   Displays the container relationships between objects \(windows, panels, controls, elements, etc.\) in tree form.

Unmapped controls are indicated with red double-angle brackets ![](../Images/icn.Interface_Viewer.Red_angle_brackets.png) in the node icons. Mapped nodes are indicated with green check marks ![](../Images/icn.Interface_Viewer.Green_check_mark.png).

|**Icon**|**Meaning**|**View**|
|![](../Images/icn.Interface_Viewer.Green_check_mark_on_window.png)|Mapped window|class, hierarchy|
|![](../Images/icn.Interface_Viewer.Green_check_mark.png)|Mapped control/container|class, hierarchy|
|![](../Images/icn.Interface_Viewer.Window.png)|Unmapped window|class, hierarchy|
|![](../Images/icn.Interface_Viewer.Red_angle_brackets.png)|Unmapped control/container|class, hierarchy|
|![](../Images/icn.Interface_Viewer.Unmapped_container.png)|Unmapped container \(below window level\)|hierarchy|
|![](../Images/icn.Interface_Viewer.Class.png)|Class|class|
|![](../Images/icn.Interface_Viewer.Unknown_class.png)|Unknown class|class, hierarchy|

## Properties panel { .section}

The Interface Viewer's Properties panel displays the properties and property values of the window or control currently selected in the Process Tree. This panel consists of two tabs: **TA Properties** and**Native Properties**.  For the purposes of interfacing, most users can rely on the `TA` properties of a control and ignore the `Native` properties. Ensure that the property-value pairs displayed in the Properties Panel are taken from an actual UI object in an application, not from any interface entity. 

You can edit the values of properties in the Properties panel it is not possible to change the properties of the actual UI controls.

For each mapped control \(the ones with green check marks in the UI explorer panel\), the check boxes next to each property determine which of the properties will be used in the corresponding interface element. For example, with the following properties checked for the given mapped control:

   

![](../Images/tut.Interface_Defs.Interface_Viewer.Mapping_xmpl.png)

The generated interface element would be:

```

                       ta name         ta class     caption     role
interface element      clear-button    button       Clear       push button

```

The last two arguments of the interface entity are a direct result of the selected TA Properties in the Viewer.

## Interface Elements panel { .section}

The Interface Elements panel appears on the far right of the Interface Viewer when a mapped window exists in the UI explorer panel. This panel displays the interface elements of the interface entity behind the mapping.

None of the contents of this panel are editable. Clicking a mapped element in the Interface Elements panel highlights the corresponding node in the UI explorer panel.

As with UI explorer, the interface elements that the Viewer successfully maps to the open application window are denoted with green check marks![](../Images/icn.Interface_Viewer.Green_check_mark.png). If the Viewer is unable to find a matching UI control for an interface element, that element is marked with a red crossed-circle ![](../Images/icn.Interface_Viewer.Red_crossed_circle.png).

## Properties Comparison panel { .section}

The Properties Comparison panel is of special value if and when you find that a defined interface element can no longer identify a control in your test application. This panel displays the differences between the defined property values in the interface element and the actual \(just-captured\) values of those properties in the corresponding control, allowing you to understand why that interface element is no longer able to identify the control.

The Properties Comparison panel consists of three fields for each row:

-   **Property Name**: A property defined for the selected \(in the Interface Elements panel\) interface element.
-   **Current Value**: The actual \(just-captured\) value of that property for the control represented by the currently selected node in the UI Explorer panel.
-   **Defined Value**: The value defined for that property in the selected interface element.

![](../../TA_Help/Images/Properties_comparison_panel.png)

**Parent topic:**[Lesson \#3: Working with interface definitions](../../TA_Tutorials/Topics/Tutorial_Working_with_interface_definitions.html)

**Previous topic:**[Creating interface definitions](../../TA_Tutorials/Topics/Creating_interface_definitions.html)

**Next topic:**[Creating mappings with the Interface Viewer](../../TA_Tutorials/Topics/Using_the_Interface_Viewer.html)

**Related information**  


[The Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html)

