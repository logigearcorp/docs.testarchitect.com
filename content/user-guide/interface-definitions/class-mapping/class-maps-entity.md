--- 
title: "$ Class Maps entity"
linktitle: "$ Class Maps entity"
description: "For every new interface created in TestArchitect, a default $ Class Maps entity is assigned. This entity is user-editable and allows for user-defined mappings to be created between native control classes and TA classes."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_class_mapping.html
keywords: "interface viewer, $ Class Maps, viewer, mapping, user-defined TA class"
---

For every new interface created in TestArchitect, a default $ Class Maps entity is assigned. This entity is user-editable and allows for user-defined mappings to be created between native control classes and TA classes.In addition, it allows for native control classes to be mapped to user-defined TA classes.

{{<important>}} Custom class mapping is only supported for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   iOS
-   Android
-   Silverlight
-   Windows Forms \(WinForms\)
-   SAP

In the $Class Maps entity, you can manually add new mappings, and edit or remove existing ones. It is suggested, however, that you create your mappings through the Interface Viewer \(or [Element Definition](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) window\), from which you may launch dialog boxes, such as [Map to Known Class](/user-guide/interface-definitions/class-mapping/mapping-unknown-controls/mapping-unknown-controls-to-a-known-class), or [Map to New Class](/user-guide/interface-definitions/class-mapping/mapping-unknown-controls/mapping-unknown-controls-to-a-new-class) to accomplish these tasks.

![](/images/TA_Help/Images/Class_maps_entity.png)

A $Class Maps entity consists of three arguments:

1.  ta class: The TA class \(built-in or user-defined\) to which a control is mapped.

    {{<note>}} A user-defined TA class is one that TestArchitect does not inherently know anything about. Of TestArchitect's large library of user-interface built-in actions, only the most generic ones, such as [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click), [check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists), and [get control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-control-property), can operate on controls mapped to such a class. You may, however, effectively extend TestArchitect's library of actions by creating [user-scripted actions](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/understanding-harnesses) that are specifically designed to apply to your new user-defined TA class.

2.  native class:
    -   native class property \(WPF, Silverlight\)
    -   win class property \(Win32\)
    -   class name property \(iOS\)
    -   raw class property \(Android\)
    -   SAP property
3.  role:

    -   role property \(WPF\)
    -   win type property \(Win32\)
    -   class name property \(Silverlight\)
    {{<restriction>}} role argument is unavailable with iOS and Android applications.


For example, the mapping entry below can be interpreted as “every control whose native class property is `System.Windows.Controls.Button`, and whose role is `button`, is mapped to TA class `button` ”:

![](/images/TA_Help/Images/Class_mapping_example.png)

{{<restriction>}} No class mappings may be placed above the `PLATFORM WIN32` section. Doing so results in an error message.

{{<important>}} As of version [7.2](/user-guide/version-history/features-added-to-testarchitect-7-2) of TestArchitect Client, a new format of the $ Class Maps entity is in effect. A pre-7.2 $ Class Maps is, upon creation, populated with TA's default mappings of native controls to built-in TA classes. With 7.2, a new $ Class Maps is empty - default TestArchitect mappings are relegated to a hidden system file. In TestArchitect [7.2](/user-guide/version-history/features-added-to-testarchitect-7-2) and beyond, older $ Class Map's are automatically converted to the new format when you connect and log in to the repository \(see [Working with repositories](/user-guide/getting-started/working-with-repositories/)\).



**Related information**  


[Mapping unknown controls to a new class](/user-guide/interface-definitions/class-mapping/mapping-unknown-controls/mapping-unknown-controls-to-a-new-class)

[Remapping known controls to a new TA class](/user-guide/interface-definitions/class-mapping/remapping-known-controls/remapping-known-controls-to-a-new-ta-class)

