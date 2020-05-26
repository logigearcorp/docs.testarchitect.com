--- 
title: "Container classes"
linktitle: "Container classes"
weight: 14
aliases: 
    - /TA_Help/Topics/Interface_def_container_class.html
---
# Container classes {#Interface_container_class .concept}

Container classes are classes of UI controls that can contain other controls. Because the number of child controls that a container holds is potentially unlimited, such container classes present possible performance hits during test runs. To avoid such issues, TestArchitect offers the option of bypassing the recognition of container child controls.

Ideally, during an interface [intake](Interface_def_intake.html) for a window, a test automation system should scan and analyze all of the of UI controls belonging to the window, including all child controls belonging to a list or hierarchy, no matter how long or deep it is. However, this approach may cause serious performance issues when it comes to controls that carry a heavy load of data. Such classes of controls, which include Treeview, Listbox, Listview and Table, are referred to as container classes. As a practical matter, TestArchitect's default behavior is to treat container class controls as locked when it encounters them during the interface scanning processes, bypassing any processing of their child elements.

That works out great if you don't need your test to interact with any child elements of a given container control. But sometimes you do, and for that, you do need to have them defined and mapped. For example, a table control may have a cell which contains multiple check boxes, and you may want to have your test click one of those check boxes. With TestArchitect's container class unlocking feature, you can choose which container class you want to unlock in a given window, and then freely interact with the child elements of controls of that class.

This locking of container controls, and the option of unlocking them, applies both to the offline interface definition process \(that is, during intakes performed by the Interface Viewer\), as well as during the test process.

**Important:** TestArchitect supports unlocking container classes for the following applications:

-   Windows Presentation Foundation \(WPF\)
-   Win32
-   Silverlight
-   Windows Forms \(WinForms\)

**Remember:** Container class unlocking is a relatively new feature of TestArchitect. It is not supported in pre-[7.2](../../TA_ReleaseNotes/DITA_source/Whats_New_7.2.html) versions.

1.  [Unlocking container classes](../../TA_Help/Topics/Interface_def_container_class_unlock.html)  
To capture child UI elements of a container class, that container class must first be unlocked.
2.  [Dynamically interacting with controls](../../TA_Help/Topics/Container_class_click_control_dynamically.html)  
How to interact dynamically with the child UI elements of a container class.
3.  [Unlocking multiple container classes](../../TA_Help/Topics/Interface_def_container_class_unlock_settings.html)  
How to unlock more than one container class at one time.

**Parent topic:**[Interface definitions](../../TA_Help/Topics/Interface_def.html)

**Previous topic:**[Dynamic identifiers](../../TA_Help/Topics/The_test_language_dynamic_identifiers.html)

**Related information**  


[Point-to-identify tool](../../TA_Help/Topics/Interface_def_client_interface_tool_identify.html)

