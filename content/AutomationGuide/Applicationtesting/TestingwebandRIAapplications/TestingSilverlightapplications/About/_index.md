--- 
title: "Testing Silverlight applications - Overview"
linktitle: "About"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_overview.html
---
# Testing Silverlight applications - Overview {#concept_mcy_tdd_1p .concept}

TestArchitect provides full support for automated testing of applications based on Microsoft Silverlight technology.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

## Actions supported for Silverlight controls { .section}

TestArchitect provides many built-in actions for automating various user interactions on Silverlight applications. A full reference guide to these actions may be found in the [User Interface actions](bia_User_Interface.html) section of the Automation Guide.

## Silverlight control identification { .section}

**Remember:** To capture Silverlight controls in TestArchitect, you have to enable the [UIA Support tool](../../reuse/../TA_Automation/Topics/aut_UIA_activation.html).

Every user interface control of aSilverlightapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

**Note:** TestArchitect discovers information about Silverlight controls at runtime using Reflection technology.

The [Interface Viewer](../../reuse/../TA_Help/Topics/Interface_def_Viewer.html) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aSilverlight application.

![](../../reuse/../TA_Automation/Images/aut_interface_definition_UI_Silverlight_identification.png)

## Native Silverlight properties { .section}

TestArchitect defines its own set of properties, named [TA properties](../../reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html), which it applies toSilverlight controls. The Interface Viewer displays not only the TA properties of aSilverlight application's controls, but also exposes all of the controls' [native properties](../../reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](../../reuse/../TA_Automation/Images/aut_interface_definition_Silverlight_Native_properties.png)

## Class mapping { .section}

Given that each platform has its own specific name for each type of control, supporting test automation across a wide variety of platforms gives rise to complex problems. To address this issue, TestArchitect introduces the concept of TA classes.

To illustrate the problem, consider the table-like control known, in WPF, as a `datagrid`. In WinForms, the datagrid equivalent is called a `datagridview`, and in Telerik it's a `radGridView`. Hence, in test automation, identifying UI controls by their raw classes is an unwieldy and unappealing proposition.

TestArchitect's solution, TA classes, is a standardized set of control types, each of which TestArchitect recognizes and knows how to interact with.

Refer to [Class mapping](../../reuse/../TA_Help/Topics/Class_mapping.html) for details.

**Important:** Class mapping is currently supported on WPF, Win32, iOS, Android, and Silverlight applications.

**Parent topic:**[Testing Silverlight applications](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps.html)

**Next topic:**[Supported Silverlight technologies](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps_supported_technology.html)

