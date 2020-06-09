--- 
title: "Mapping unknown controls"
linktitle: "Mapping unknown controls"
weight: 2
aliases: 
    - /TA_Help/Topics/Mapping_unknown_controls.html
---

Every control belonging to a given platform has a native control class within that platform. Just as TestArchitect maps controls and windows to logical names \(TA names\) it also maps control class names from each AUT platform to its own set of class names, called TA classes. In some cases, the Interface Viewer encounters a control whose class it does not know about. \(These are indicated by red question marks ![](/images//Images/ug_interface_definition41.png) in their nodes in the Viewer's UI explorer tree.\) When that happens, if you need to interface with the control, or with other controls of that class, you must map the unknown native class to a suitable TA class.

**Important:** Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

If you attempt to capture a control whose class is unknown \(![](/images//Images/ug_interface_definition41.png)\), TestArchitect displays an alert requiring that you map that control's class to either

1.  a known class \(an existing built-in or user-defined TA class\) or
2.  a *new* user-defined TA class.

![](/images//Images/Interface_viewer_capturing_unknown_control.png)

1.  [Mapping unknown controls to a known class](/TA_Help/Topics/Mapping_unknown_controls_to_known_class.html)  
A step-by-step guide to mapping unknown controls to a known class \(built-in TA class, or user-defined TA class\).
2.  [Mapping unknown controls to a new class](/TA_Help/Topics/Mapping_unknown_controls_to_new_class.html)  
The last topic discussed mapping unknown control classes of an AUT to a known TA class. Now we'll explore how to map an unknown control class to a completely new class \(that is, a newly created user-defined TA class\).

**Parent topic:**[Class mapping](/TA_Help/Topics/Class_mapping.html)

**Previous topic:**[$ Class Maps entity](/TA_Help/Topics/Interface_def_Viewer_class_mapping.html)

**Next topic:**[Remapping known controls](/TA_Help/Topics/Mapping_known_controls.html)

