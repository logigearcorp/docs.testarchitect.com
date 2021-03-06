--- 
title: "Class mapping"
linktitle: "Class mapping"
weight: 11
aliases: 
    - /TA_Help/Topics/Class_mapping.html
---

TestArchitect can automate testing of applications developed in a wide variety of platforms, such as .NET, WPF, Win32, Java, Android and iOS. Each of these platforms offers its own set of control classes, with their own unique names, despite the fact that there is a great deal of overlap between platforms in the design and functionality of many such controls. To address the complexity introduced by the variety of native control classes, TestArchitect introduces the concept of TA classes. TA classes represent a “common core” of control classes that TestArchitect's built-in actions and methods are designed to interface with. Class mapping is the process of relating the various control classes of each software platform to their corresponding TA classes.

To illustrate the problem, consider the table-like control known, in WPF, as a `datagrid`. In WinForms, the datagrid equivalent is called a `datagridview`, and in Telerik it's a `radGridView`. Hence, in test automation, identifying UI controls by their raw classes is an unwieldy and unappealing proposition.

TestArchitect's solution, TA classes, is a standardized set of control types, each of which TestArchitect recognizes and knows how to interact with.

Along with these built-in classes, TestArchitect provides a number of built-in mappings. Familiar platform-specific controls are mapped to their corresponding TA classes automatically.

Note, however, that this set of built-in mappings cannot cover all of the possible control types that might appear in the immense diversity of AUTs and their platforms. For example, a custom control may look and behave exactly like a table, yet have a native class name that is unknown to TestArchitect. Without a little intervention on someone's part, TestArchitect does not know how to handle it properly. In such a case, you can provide that help by manually mapping this unknown control to a known TA class – in this case, table. Once so mapped, the full range of [built-in actions](/TA_Automation/Topics/bia_Built_in_actions.html) that work on the TA class table are available to interact with the new custom control.

**Important:** Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

1.  [$ Class Maps entity](/TA_Help/Topics/Interface_def_Viewer_class_mapping.html)  
For every new interface created in TestArchitect, a default $ Class Maps entity is assigned. This entity is user-editable and allows for user-defined mappings to be created between native control classes and TA classes.
2.  [Mapping unknown controls](/TA_Help/Topics/Mapping_unknown_controls.html)  
 In some cases, the Interface Viewer encounters a control whose class it does not know about. \(These are indicated by red question marks ![](/images//Images/ug_interface_definition41.png) in their nodes in the Viewer's UI explorer tree.\) When that happens, if you need to interface with the control, or with other controls of that class, you must map the unknown native class to a suitable TA class.
3.  [Remapping known controls](/TA_Help/Topics/Mapping_known_controls.html)  
If an existing class mapping of a known control class is no longer suitable for your needs, you can remap the control class to another TA class.
4.  [UI Automation of a custom control](/TA_Help/Topics/Scanning_controls_WPF_automation.html)  
You have options to have TestArchitect display more classes rather than display only the classes containing UI Automation peers.
5.  [Android class mapping backward compatibility](/Android/Topics/Android_class_mapping.html)  
TestArchitect 8 Update 2 enhances Android class mapping to introduce new supported and mapped Android controls. Prior versions of TestArchitect used the generic class for unrecognized Android controls.
6.  [Support for WinForms class mapping](/TA_Help/Topics/ug_class_mapping_WinForms.html)  
TestArchitect 8.3 enhances Windows Forms \(WinForms\) class mapping to allow WinForms controls to be mapped to TestArchitect's set of TA classes. Note that these TA classes support the full range of TestArchitect built-in actions, affording your tests more power and flexibility.

**Parent topic:**[Interface definitions](/TA_Help/Topics/Interface_def.html)

**Previous topic:**[Importing an interface entity](/TA_Help/Topics/Interface_entity_importing.html)

**Next topic:**[Control properties](/TA_Help/Topics/Interface_def_control_properties.html)

