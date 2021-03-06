--- 
title: "Mapping unknown controls to a known class"
linktitle: "Mapping unknown controls to a known class"
weight: 1
aliases: 
    - /TA_Help/Topics/Mapping_unknown_controls_to_known_class.html
---

A step-by-step guide to mapping unknown controls to a known class \(built-in TA class, or user-defined TA class\).

**Important:** Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

1.  Launch the application to be tested and navigate to the window containing the control\(s\) to be interfaced with.

2.  Launch the [Interface Viewer](Interface_def_Viewer_Starting.html) or the [Element Definition](Interface_def_client_interface_tool_identify.html) dialog box.

    **Restriction:** The Element Definitions dialog box is unavailable with iOS and Android applications.

3.  In the UI explorer tree panel, navigate to your choice of an unknown class \(as indicated by a ![](/images//Images/ug_interface_definition41.png) icon\), right-click a control node under it, and then click **Map to Known Class**.

    The Map to Known Class dialog box is displayed.

    ![](/images//Images/Map_to_known_class_dialog.png)

4.  Enter the details for the class mapping:

    -   Native Class:

        -   In WPF, Native Class is the native class property of the selected control - for example, `System.Windows.Controls.Button`.
        -   In Win32, Native Class is the win class property of the selected control - for example, `Button`.
        -   In iOS, Native Class is the class name property of the selected control - for example, `UIButton`.
        -   In Android, Native Class is the raw class property of the selected control - for example, `android.widget.Button`.
        -   In Silverlight, Native Class is the native class property of the selected control - for example, `System.Windows.Controls.Button`.
        -   In WinForms, Native Class is the native class property of the selected control - for example, `System.Windows.Forms.Button`.
        **Restriction:** You cannot use a ta class, native class, or role as a native class's name because they are \(case insensitive\) reserved words.

        **Tip:** You can use regular expressions enclosed between curly brackets \{ \} to add flexibility to native class matching. For example, given that the general purpose regex wildcard is .\* \(dot-star\), \{.\*button.\*\} allows a single mapping to pertain to any native control class whose name includes the string “button”.

    -   Role: \(Uneditable field\)

        -   For WPF, Role is the role property of the selected control - for example, `button`.
        -   For Win32, Role is the win type property of the selected control - for example, ``button``.
        -   For iOS, Android this field is disabled.
        -   For Silverlight, Role is the class name property of the selected control - for example, `Button`.
        -   For WinForms, Role is derived from the object’s class name. For instance, for the full class name of System.Windows.Forms.Button, the short name Button is displayed in the **Role** field.
        **Tip:** If the control role is unnecessary for the class mapping \(because you want to apply the mapping to *all* controls of the specified native class\), select the **Ignore** check box.

    -   Map to Class: Specify which TA class you want to map the selected control \(and its related controls\) to.

        **Tip:** In the drop-down list, you can choose either a built-in TA class, or a known user-defined TA class. \(The user-defined TA classes, if any, are loaded from the [$ Class Maps entity](Interface_def_Viewer_class_mapping.html).\)

5.  Click **OK**.


The unknown control\(s\) are mapped to the existing built-in or user-defined TA class, with the mapping recorded in the [$ Class Maps](Interface_def_Viewer_class_mapping.html) entity.

**Parent topic:**[Mapping unknown controls](/TA_Help/Topics/Mapping_unknown_controls.html)

**Next topic:**[Mapping unknown controls to a new class](/TA_Help/Topics/Mapping_unknown_controls_to_new_class.html)

