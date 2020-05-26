--- 
title: "$ Class Maps entity"
linktitle: "$ Class Maps entity"
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_class_mapping.html
---
# $ Class Maps entity {#Interface_viewer_class_map_entity .concept}

For every new interface created in TestArchitect, a default $ Class Maps entity is assigned. This entity is user-editable and allows for user-defined mappings to be created between native control classes and TA classes.In addition, it allows for native control classes to be mapped to user-defined TA classes.

**Important:** Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)

In the $Class Maps entity, you can manually add new mappings, and edit or remove existing ones. It is suggested, however, that you create your mappings through the Interface Viewer \(or [Element Definition](Interface_def_client_interface_tool_identify.html) window\), from which you may launch dialog boxes, such as [Map to Known Class](Mapping_unknown_controls_to_known_class.html), or [Map to New Class](Mapping_unknown_controls_to_new_class.html) to accomplish these tasks.

![](../Images/Class_maps_entity.png)

A $Class Maps entity consists of three arguments:

1.  ta class: The TA class \(built-in or user-defined\) to which a control is mapped.

    **Note:** A user-defined TA class is one that TestArchitect does not inherently know anything about. Of TestArchitect's large library of user-interface built-in actions, only the most generic ones, such as [click](../../TA_Automation/Topics/bia_click.html), [check control exists](../../TA_Automation/Topics/bia_check_control_exists.html), and [get control property](../../TA_Automation/Topics/bia_get_control_property.html), can operate on controls mapped to such a class. You may, however, effectively extend TestArchitect's library of actions by creating [user-scripted actions](../../TA_Tutorials/Topics/Understanding_harnesses.html) that are specifically designed to apply to your new user-defined TA class.

2.  native class:
    -   native class property \(WPF, Silverlight\)
    -   win class property \(Win32\)
    -   class name property \(iOS\)
    -   raw class property \(Android\)
3.  role:

    -   role property \(WPF\)
    -   win type property \(Win32\)
    -   class name property \(Silverlight\)
    **Restriction:** role argument is unavailable with iOS and Android applications.


For example, the mapping entry below can be interpreted as “every control whose native class property is `System.Windows.Controls.Button`, and whose role is `button`, is mapped to TA class `button` ”:

![](../Images/Class_mapping_example.png)

**Restriction:** No class mappings may be placed above the `PLATFORM WIN32` section. Doing so results in an error message.

**Important:** As of version [7.2](../../TA_ReleaseNotes/DITA_source/Whats_New_7.2.html) of TestArchitect Client, a new format of the $ Class Maps entity is in effect. A pre-7.2 $ Class Maps is, upon creation, populated with TA's default mappings of native controls to built-in TA classes. With 7.2, a new $ Class Maps is empty - default TestArchitect mappings are relegated to a hidden system file. In TestArchitect [7.2](../../TA_ReleaseNotes/DITA_source/Whats_New_7.2.html) and beyond, older $ Class Map's are automatically converted to the new format when you connect and log in to the repository \(see [Working with repositories](Getting_started_overview_working_with_repositories.html)\).

**Parent topic:**[Class mapping](../../TA_Help/Topics/Class_mapping.html)

**Next topic:**[Mapping unknown controls](../../TA_Help/Topics/Mapping_unknown_controls.html)

**Related information**  


[Mapping unknown controls to a new class](../../TA_Help/Topics/Mapping_unknown_controls_to_new_class.html)

[Remapping known controls to a new TA class](../../TA_Help/Topics/Mapping_known_controls_to_new_class.html)

