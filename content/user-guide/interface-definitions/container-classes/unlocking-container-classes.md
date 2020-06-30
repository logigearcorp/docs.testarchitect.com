--- 
title: "Unlocking container classes"
linktitle: "Unlocking container classes"
description: "To capture child UI elements of a container class, that container class must first be unlocked."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_container_class_unlock.html
keywords: "unlocking, container classes, Treeview, unlocking container class, Table, Listbox, Listview"
---

To capture child UI elements of a container class, that container class must first be unlocked.

Controls of TA classes Treeview, Listbox, Listview and Table are considered container class controls, due to their common characteristic of holding child controls. By default, during a window [intake](/user-guide/interface-definitions/control-properties/intake) process, TestArchitect treats controls of a container class as locked. In order to access the child controls of a given container control, you must first unlock its class.

{{<important>}} TestArchitect supports unlocking container classes for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

{{<note>}} Note that unlocking takes place at the *class* level for a given window. That is, when you need to unlock a given Treeview control on a window, you must unlock all Treeview controls for the window.

1.  Create a [new interface entity](/user-guide/interface-definitions/creating-interface-entities) in TestArchitect, and keep it open.

2.  Open the application of interest and navigate to the window whose interface you want to capture, and which has at least one container class control whose children you need to access.

3.  Launch the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode) and click the **Identify** button on the viewer's toolbar.

    {{<note>}} As a shortcut, you can bypass the Interface Viewer and launch into Identify mode by clicking the **Identify** ![](/images/TA_Help/Images/btn_Identify.png) button on TestArchitect's toolbar. \(Note, though, that this example is based on proceeding via the viewer.\)

4.  Hover the mouse cursor over the container class control to be accessed.

    {{<note>}} You may observe that, at this point, only the container control can be highlighted, no matter which child controls you hover the cursor over. That will change once you unlock the container's class.

    As an illustration, the figure below displays an application window with a tree view, and the cursor hovering over it while in Identify mode.

    A displayed screentip indicates that the container class can be unlocked by pressing Shift on your keyboard.

    ![](/images/TA_Help/Images/tooltip_unlock_container_class02.png)

5.  Press Shift.

    A warning dialog box appears, asking you to confirm that you wish to unlock the specified container class.

    ![](/images/TA_Help/Images/warning_message_unlock_container_class.png)

    The warning refers primarily to the fact that [global pos](/user-guide/interface-definitions/control-properties/secondary-properties/using-global-pos-to-identify-ui-elements) values of other controls in the window may be affected by this action. Under some circumstances, [anchor pos](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-and-anchor-pos-properties) values can be altered as well. If your interface definitions for the associated window do not depend on these two properties for identifying controls, you need not be concerned about this.

    {{<tip>}}

    -   Select the **Don't show this dialog again** check box to skip this dialog box in the future.
    -   If you want take this opportunity to unlock additional container classes within the window, click the **Settings** button \(see **The container class settings**, Option \#[1](/user-guide/interface-definitions/container-classes/unlocking-multiple-container-classes)\).
6.  Click the **Unlock** button.

    The selected container class is now unlocked, freeing you to capture the descendant UI elements of your choice from the selected control.

    {{<tip>}} You are also free to capture the descendants of any other controls of this class that may exist in the window, as it is the selected control's class, not the control itself, that has been unlocked.

7.  Capture a desired child UI element by clicking it.

    As an example, we select the **Detail** text control residing under the **Car1.1** node.

    ![](/images/TA_Help/Images/unlock_container_classes_sample_app.png)

    The node representing the selected child UI element is highlighted in the Interface Viewer's UI explorer panel.

    {{<note>}} If you entered Identify mode via the TestArchitect interface, you will observe this node and its parent hierarchy not in the Interface Viewer, but in the Element definition dialog box.

8.  Change the default name in the **TA Name** field to one that is more user-friendly, then press Enter.

    We'll name our control Detail text.

    {{<note>}} The following result assumes you are using the Interface Viewer.

    The name you have assigned to the control appears in the node in uppercase letters. At the same time, the name of your open interface entity is assigned to the top-level node representing the window, with the native window title in parentheses. Green check marks ![](/images/TA_Help/Images/ug_interface_definition45.png) indicate that both the control and window are now provisionally mapped to the interface entity, awaiting your Save command to make the mappings permanent.

    ![](/images/TA_Help/Images/unlock_container_classes_interface_viewer.png)

9.  Click the **Save** ![](/images/TA_Help/Images/ug_interface_definition44.png) button on the toolbar.

    Your mappings are now permanently saved to the open interface entity.

10. Close the Interface Viewer \(or Element definition dialog box\).


The open interface entity is now populated with an [interface entity setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/interface-entity-setting) line which maps it to a window, and an [interface element](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/interface-element) line which maps the control you selected. The interface entity has also been saved.

![](/images/TA_Help/Images/unlock_container_classes_interface_entity.png)

{{<important>}} Note that a setting called unlocked container classes, whose value specifies the class of the unlocked container class, has also been added to the interface entity. When the runtime automation performs an intake on this window, this directive informs it that it should include the child controls of the specified TA class in that process.

Proceed to the [next section](/user-guide/interface-definitions/container-classes/dynamically-interacting-with-controls) to learn how to interact with controls dynamically.



**Related information**  


[Mapping unknown controls to a new class](/user-guide/interface-definitions/class-mapping/mapping-unknown-controls/mapping-unknown-controls-to-a-new-class)

[Remapping known controls to a new TA class](/user-guide/interface-definitions/class-mapping/remapping-known-controls/remapping-known-controls-to-a-new-ta-class)

[Dynamic identifiers](/user-guide/interface-definitions/dynamic-identifiers)

