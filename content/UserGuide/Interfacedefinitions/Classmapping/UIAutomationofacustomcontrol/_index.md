--- 
title: "UI Automation of a custom control"
linktitle: "UI Automation of a custom control"
weight: 4
aliases: 
    - /TA_Help/Topics/Scanning_controls_WPF_automation.html
---
# UI Automation of a custom control {#concept_rc1_53g_2l .concept}

You have options to have TestArchitect display more classes rather than display only the classes containing UI Automation peers.

**Important:** Load UIA controls only setting is only available for the following applications:

-   Windows Presentation Foundation \(WPF\)

![](../Images/Load_UIA_controls_UIA.png)

Initially the **Load UIA controls only** check box is selected, which means that TestArchitect only displays the classes that have UI Automation peers. If you want to have TestArchitect explore further classes, such as, GridViewRowPresenter, ClassicBorderDecorator, TextualExpressionEditor, etc. clear the **Load UIA controls only** check box.

Once you have disabled the Load UIA controls only setting, a new [interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html) action named UIA only with no value is added to the interface entity you are working on.

![](../Images/Load_UIA_controls_no.png)

**Parent topic:**[Class mapping](../../TA_Help/Topics/Class_mapping.html)

**Previous topic:**[Remapping known controls](../../TA_Help/Topics/Mapping_known_controls.html)

**Next topic:**[Android class mapping backward compatibility](../../Android/Topics/Android_class_mapping.html)

