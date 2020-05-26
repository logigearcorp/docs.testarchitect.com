--- 
title: "Unlocking container classes"
linktitle: "Unlocking container classes"
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_container_class_unlock.html
---
# Unlocking container classes {#Interface_container_class_unlock .task}

To capture child UI elements of a container class, that container class must first be unlocked.

Controls of TA classes Treeview, Listbox, Listview and Table are considered container class controls, due to their common characteristic of holding child controls. By default, during a window [intake](Interface_def_intake.html) process, TestArchitect treats controls of a container class as locked. In order to access the child controls of a given container control, you must first unlock its class.

**Important:** TestArchitect supports unlocking container classes for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   Silverlight
-   Windows Forms \(WinForms\)

**Note:** Note that unlocking takes place at the *class* level for a given window. That is, when you need to unlock a given Treeview control on a window, you must unlock all Treeview controls for the window.

1.  Create a [new interface entity](Interface_def_Adding.html) in TestArchitect, and keep it open.

2.  Open the application of interest and navigate to the window whose interface you want to capture, and which has at least one container class control whose children you need to access.

3.  Launch the [Interface Viewer](Interface_def_Viewer_identify.html) and click the **Identify** button on the viewer's toolbar.

    **Note:** As a shortcut, you can bypass the Interface Viewer and launch into Identify mode by clicking the **Identify** ![](../Images/btn_Identify.png) button on TestArchitect's toolbar. \(Note, though, that this example is based on proceeding via the viewer.\)

4.  Hover the mouse cursor over the container class control to be accessed.

    **Note:** You may observe that, at this point, only the container control can be highlighted, no matter which child controls you hover the cursor over. That will change once you unlock the container's class.

    As an illustration, the figure below displays an application window with a tree view, and the cursor hovering over it while in Identify mode.

    A displayed screentip indicates that the container class can be unlocked by pressing Shift on your keyboard.

    ![](../Images/tooltip_unlock_container_class02.png)

5.  Press Shift.

    A warning dialog box appears, asking you to confirm that you wish to unlock the specified container class.

    ![](../Images/warning_message_unlock_container_class.png)

    The warning refers primarily to the fact that [global pos](Interface_def_global_pos.html) values of other controls in the window may be affected by this action. Under some circumstances, [anchor pos](prop_anchor.example_01.html) values can be altered as well. If your interface definitions for the associated window do not depend on these two properties for identifying controls, you need not be concerned about this.

    **Tip:**

    -   Select the **Don't show this dialog again** check box to skip this dialog box in the future.
    -   If you want take this opportunity to unlock additional container classes within the window, click the **Settings** button \(see **The container class settings**, Option \#[1](Interface_def_container_class_unlock_settings.html)\).
6.  Click the **Unlock** button.

    The selected container class is now unlocked, freeing you to capture the descendant UI elements of your choice from the selected control.

    **Tip:** You are also free to capture the descendants of any other controls of this class that may exist in the window, as it is the selected control's class, not the control itself, that has been unlocked.

7.  Capture a desired child UI element by clicking it.

    As an example, we select the **Detail** text control residing under the **Car1.1** node.

    ![](../Images/unlock_container_classes_sample_app.png)

    The node representing the selected child UI element is highlighted in the Interface Viewer's UI explorer panel.

    **Note:** If you entered Identify mode via the TestArchitect interface, you will observe this node and its parent hierarchy not in the Interface Viewer, but in the Element definition dialog box.

8.  Change the default name in the **TA Name** field to one that is more user-friendly, then press Enter.

    We'll name our control Detail text.

    **Note:** The following result assumes you are using the Interface Viewer.

    The name you have assigned to the control appears in the node in uppercase letters. At the same time, the name of your open interface entity is assigned to the top-level node representing the window, with the native window title in parentheses. Green check marks ![](../Images/ug_interface_definition45.png) indicate that both the control and window are now provisionally mapped to the interface entity, awaiting your Save command to make the mappings permanent.

    ![](../Images/unlock_container_classes_interface_viewer.png)

9.  Click the **Save** ![](../Images/ug_interface_definition44.png) button on the toolbar.

    Your mappings are now permanently saved to the open interface entity.

10. Close the Interface Viewer \(or Element definition dialog box\).


The open interface entity is now populated with an [interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html) line which maps it to a window, and an [interface element](../../TA_Automation/Topics/bia_interface_element.html) line which maps the control you selected. The interface entity has also been saved.

![](../Images/unlock_container_classes_interface_entity.png)

**Important:** Note that a setting called unlocked container classes, whose value specifies the class of the unlocked container class, has also been added to the interface entity. When the runtime automation performs an intake on this window, this directive informs it that it should include the child controls of the specified TA class in that process.

Proceed to the [next section](Container_class_click_control_dynamically.html) to learn how to interact with controls dynamically.

**Parent topic:**[Container classes](../../TA_Help/Topics/Interface_def_container_class.html)

**Next topic:**[Dynamically interacting with controls](../../TA_Help/Topics/Container_class_click_control_dynamically.html)

**Related information**  


[Mapping unknown controls to a new class](../../TA_Help/Topics/Mapping_unknown_controls_to_new_class.html)

[Remapping known controls to a new TA class](../../TA_Help/Topics/Mapping_known_controls_to_new_class.html)

[Dynamic identifiers](../../TA_Help/Topics/The_test_language_dynamic_identifiers.html)

