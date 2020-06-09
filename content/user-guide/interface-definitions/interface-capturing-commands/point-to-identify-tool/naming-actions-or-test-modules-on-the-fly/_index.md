--- 
title: "Naming actions or test modules on the fly"
linktitle: "Naming actions or test modules on the fly"
weight: 3
aliases: 
    - /TA_Help/Topics/Interface_def_client_interface_tool_identify_naming.html
---

You can use client-side **point-to-identify** to add a new interface element for a control, or even a new interface entity, without leaving the action or test module as you create your action lines.

Ensure that the AUT is running and the appropriate application window is open;

You can use **point-to-identify** to simply verify that the control you have specified is the correct one that you had in mind.

1.  In the editor, type in an action name, and enter TA names \(existing or otherwise\) in the argument cells for the window and control.

2.  Click the value in the **control** cell to highlight it.

3.  Click the **Identify** ![](/images//Images/identify_btn.png) button in the toolbar.

    **Tip:** To capture UI child elements belonging to a container class, see [Container Class](Interface_def_container_class.html).

    -   **If your specified window and control are known and are identified and matched**: That is, if the window identifies an existing interface entity and the control references an existing interface element in it, and mapping to the AUT is successful, instead of point-to-identify mode, highlight mode is invoked. The application window comes to the foreground and the referenced control is flashed;
    -   **If the specified window is known and exists, but the referenced control is unknown**: That is, the interface entity exists but it has no interface element corresponding to the control you've named, point-to-identify mode is invoked. Select the control in which you are interested by clicking on it:
        -   If the physical control is unmapped, the Element definition dialog box appears. The node of the control you have selected is highlighted in the UI Explorer panel, with the name you specified in the editor appearing in the **TA Name** box. You now have the option of clicking **Save**, which maps the control to your TA name and creates a new interface element in the appropriate interface entity.
        -   If the physical control is already mapped to another TA name, it appears in the Element definition dialog box with its currently-assigned TA name displayed. At this point, you are not offered the option to change the TA name of the existing interface element – that would risk orphaning other references to that control that might exist in other actions and test modules. \(Note, however, that you do have the option of changing, or adding to, the selection of identifying property-value pairs used by the interface element.\)
    -   **If the specified window and control are known but either is not matched on the physical side**: That is, the respective TA names are mapped to an interface entity and interface element, but TestArchitect is unable to identify the corresponding UI item on the physical side, a message to that effect is displayed: Entity is not matched, or Element is not matched.

**Parent topic:**[Point-to-identify tool](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html)

**Previous topic:**[Using point-to-identify from the context of an interface element](/TA_Help/Topics/Interface_def_client_interface_tool_identify_using_identify.html)

