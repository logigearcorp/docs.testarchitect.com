--- 
title: "Remapping known controls to another known TA class"
linktitle: "Remapping known controls to another known TA class"
description: "A step-by-step guide to remapping known, mapped controls to a known (built-in TA or user-defined) class."
weight: 1
aliases: 
    - /TA_Help/Topics/Mapping_known_controls_to_other_class.html
keywords: "interface viewer, mapping known controls, other known class, viewer, other known class, mapping, known controls, other known class, mapping other known class"
---

A step-by-step guide to remapping known, mapped controls to a known \(built-in TA or user-defined\) class.

{{<important>}} Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

1.  Launch the application to be tested and navigate to the window containing the control\(s\) to be interfaced with.

2.  Launch the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/starting-the-interface-viewer) or the [Element Definition](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) dialog box.

    {{<restriction>}} The Element Definitions dialog box is unavailable with iOS and Android applications.

3.  In the UI explorer tree panel, navigate to your choice of a known class \(as indicated by a gear ![](/images/TA_Help/Images/ug_interface_definition46.png) icon\), right-click a control node under it, and then click **Map to Other Known Class**.

    The Map to Other Known Class dialog box is displayed:

    ![](/images/TA_Help/Images/Map_known_control_to_known_class_dialog.png)

4.  Enter the details for the class mapping.

    -   Native Class:

        -   In WPF, Native Class is the native class property of the selected control - for example, `System.Windows.Controls.Button`.
        -   In Win32, Native Class is the win class property of the selected control - for example, `Button`.
        -   In iOS, Native Class is the class name property of the selected control - for example, `UIButton`.
        -   In Android, Native Class is the raw class property of the selected control - for example, `android.widget.Button`.
        -   In Silverlight, Native Class is the native class property of the selected control - for example, `System.Windows.Controls.Button`.
        -   In WinForms, Native Class is the native class property of the selected control - for example, `System.Windows.Forms.Button`.
        {{<restriction>}} You cannot use a ta class, native class, or role as a native class's name because they are \(case insensitive\) reserved words.

        {{<tip>}} You can use regular expressions enclosed between curly brackets \{ \} to add flexibility to native class matching. For example, given that the general purpose regex wildcard is .\* \(dot-star\), \{.\*button.\*\} allows a single mapping to pertain to any native control class whose name includes the string “button”.

    -   Role: \(Uneditable field\)

        -   For WPF, Role is the role property of the selected control - for example, `button`.
        -   For Win32, Role is the win type property of the selected control - for example, ``button``.
        -   For iOS, Android this field is disabled.
        -   For Silverlight, Role is the class name property of the selected control - for example, `Button`.
        -   For WinForms, Role is derived from the object’s class name. For instance, for the full class name of System.Windows.Forms.Button, the short name Button is displayed in the **Role** field.
        {{<tip>}} If the control role is unnecessary for the class mapping \(because you want to apply the mapping to *all* controls of the specified native class\), select the **Ignore** check box.

    -   Current Class: \(Uneditable field\) The name of the TA class that the selected control is currently mapped to.
    -   Map to Class: Specify which TA class you want to map the selected control \(and its related controls\) to.

        {{<tip>}} In the drop-down list, you can choose either a built-in TA class, or a known user-defined TA class. \(The user-defined TA classes, if any, are loaded from the [$ Class Maps entity](/user-guide/interface-definitions/class-mapping/class-maps-entity).\)

5.  Click **OK**.


The control\(s\) are now remapped to an existing built-in or user-defined TA class, with the mapping recorded in the [$ Class Maps](/user-guide/interface-definitions/class-mapping/class-maps-entity) entity.



