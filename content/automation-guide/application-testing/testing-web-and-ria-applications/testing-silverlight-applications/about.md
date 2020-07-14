--- 
title: "Testing Silverlight applications - Overview"
linktitle: "About"
description: "TestArchitect provides full support for automated testing of applications based on Microsoft Silverlight technology."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_overview.html
keywords: "Silverlight testing, testing Silverlight applications, native properties, overview, Silverlight control identification, supported actions"
---

TestArchitect provides full support for automated testing of applications based on Microsoft Silverlight technology.

{{<warning>}} Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

## Actions supported for Silverlight controls

TestArchitect provides many built-in actions for automating various user interactions on Silverlight applications. A full reference guide to these actions may be found in the [User Interface actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/) section of the Automation Guide.

## Silverlight control identification

{{<remember>}} To capture Silverlight controls in TestArchitect, you have to enable the [UIA Support tool](/automation-guide/microsoft-ui-automation/enabling-uia-support-tool).

Every user interface control of aSilverlightapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

{{<note>}} TestArchitect discovers information about Silverlight controls at runtime using Reflection technology.

The [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aSilverlight application.

![](/images/TA_Automation/Images/aut_interface_definition_UI_Silverlight_identification.png)

## Native Silverlight properties

TestArchitect defines its own set of properties, named [TA properties](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/), which it applies toSilverlight controls. The Interface Viewer displays not only the TA properties of aSilverlight application's controls, but also exposes all of the controls' [native properties](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](/images/TA_Automation/Images/aut_interface_definition_Silverlight_Native_properties.png)

## Class mapping

Given that each platform has its own specific name for each type of control, supporting test automation across a wide variety of platforms gives rise to complex problems. To address this issue, TestArchitect introduces the concept of TA classes.

To illustrate the problem, consider the table-like control known, in WPF, as a `datagrid`. In WinForms, the datagrid equivalent is called a `datagridview`, and in Telerik it's a `radGridView`. Hence, in test automation, identifying UI controls by their raw classes is an unwieldy and unappealing proposition.

TestArchitect's solution, TA classes, is a standardized set of control types, each of which TestArchitect recognizes and knows how to interact with.

Refer to [Class mapping](/user-guide/interface-definitions/class-mapping/) for details.

{{<important>}} Class mapping is currently supported on WPF, Win32, iOS, Android, and Silverlight applications.



