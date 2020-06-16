--- 
title: "Testing .NET applications - Overview"
linktitle: "About"
description: "Some basics of creating and recording tests for .NET applications, .NET control identification via the Interface Viewer, and other concepts."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_NET_apps_basics.html
keywords: ".NET testing, testing .NET applications, native properties, overview, record and playback, .NET control identification, supported actions"
---

Some basics of creating and recording tests for .NET applications, .NET control identification via the Interface Viewer, and other concepts.

## Creating and recording tests for .NET applications

TestArchitect's test editor allows you to manually author tests consisting of action lines, based on the Action-Based Testing methodology. However, TestArchitect also provides you with a powerful tool to automate the process of authoring action-based tests, saving you time and eliminating the risk of accidental coding errors. The [Action Recorder](/reuse/../TA_Help/Topics/Creating_and_using_actions_AR.html) does this by monitoring and recording your manual interactions with the.NETapplication. It automatically generates the equivalent action lines and writes them to your test file, inserting whatever checks you specify to verify the responses of the application. \(See [Using the Action Recorder](/reuse/../TA_Tutorials/Topics/Tutorial_Using_the_Action_Recorder.html) for further information.\)

Auto-generated action lines can subsequently be modified and enhanced by hand in a number of ways to address specific test requirements. For example, you can:

-   Add new actions, reorder actions and modify their arguments.
-   Remove superfluous recorded actions.
-   Insert validity checks to confirm that recorded values are output correctly.
-   Combine multiple recorded actions into a single user-defined action. \(Refer to [Smart creation of new actions](/reuse/../TA_Help/Topics/High_level_actions_smart_creating.html) for details\)
-   Create [data-driven tests](/reuse/../TA_Help/Topics/Projects_and_tests_dataset.html) that run multiple test iterations using different sets of data.

**Important:** The Action Recorder only supports partial interaction on WinForms controls. Some manual interactions are not recordable.

## Actions supported for .NET controls

TestArchitect provides many built-in actions for automating various user interactions on .NET applications. When you record a test, TestArchitect records the performed GUI actions using these built-in actions. A full reference guide to these actions may be found in the [User Interface actions](/TA_Automation/Topics/bia_User_Interface.html) section of the Automation Guide.

## .NET control identification

Every user interface control of a.NETapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

The [Interface Viewer](/reuse/../TA_Help/Topics/Interface_def_Viewer.html) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of a.NET application.

![](/images/TA_Automation/Images/ug_interface_definition_UI_NET_identification.png)

## Native .NET properties

TestArchitect defines its own set of properties, named [TA properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html), which it applies to.NET controls. The Interface Viewer displays not only the TA properties of a.NET application's controls, but also exposes all of the controls' [native properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](/images/TA_Automation/Images/ug_interface_definition_TA_Native_properties.png)

## The UIA Support tool

TestArchitect can work with UI controls that are exposed by Microsoft's UI Automation \(UIA\) technology. TestArchitect includes a special tool, UIA Support, that provides support for Microsoft UIA. This tool is used to obtain the properties of a WPF application’s UI controls. \(See [Microsoft UI Automation](/TA_Automation/Topics/aut_Using_UIA.html) for further information.\)

When the UIA Support tool is activated, TestArchitect is able to obtain extra and useful properties on a UI element of the AUT. One of the properties is automation id which can be used to uniquely locate a UI control from its siblings.

**Tip:** Using a unique and discoverable automation id property to locate a specific UI control is particularly suitable for agile software development. One of the crucial points of agile testing is automation. Software designers can specify unique automation ids for their UI elements. From design specifications, it is possible for QA specialists to implement the interface definition of a UI control using its automation id before the AUT is available for testing. With the aid of declaring a unique and discoverable automation id, the code can be architected for easy testing, and the QA specialists are able to identify test cases as soon as the requirements are defined, even before coding begins or completes. Furthermore, they can also test again as soon as the code has changed.

## Class mapping

Given that each platform has its own specific name for each type of control, supporting test automation across a wide variety of platforms gives rise to complex problems. To address this issue, TestArchitect introduces the concept of TA classes.

To illustrate the problem, consider the table-like control known, in WPF, as a `datagrid`. In WinForms, the datagrid equivalent is called a `datagridview`, and in Telerik it's a `radGridView`. Hence, in test automation, identifying UI controls by their raw classes is an unwieldy and unappealing proposition.

TestArchitect's solution, TA classes, is a standardized set of control types, each of which TestArchitect recognizes and knows how to interact with.

Refer to [Class mapping](/reuse/../TA_Help/Topics/Class_mapping.html) for details.

**Important:** Class mapping is currently supported on WPF, Win32, iOS, Android, and Silverlight applications.



