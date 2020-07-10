--- 
title: "Testing Win32 applications - Overview"
linktitle: "About"
description: "Some basics of creating and recording tests for Win32 applications, Win32 control identification via the Interface Viewer, and other concepts."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Win32_apps_overview.html
keywords: "Win32 testing, testing Win32 applications, overview, record and playback, Win32 control identification, supported actions"
---

Some basics of creating and recording tests for Win32 applications, Win32 control identification via the Interface Viewer, and other concepts.

## {{< expand >}} Creating and recording tests for Win32 applications

TestArchitect's test editor allows you to manually author tests consisting of action lines, based on the Action-Based Testing methodology. However, TestArchitect also provides you with a powerful tool to automate the process of authoring action-based tests, saving you time and eliminating the risk of accidental coding errors. The [Action Recorder](/user-guide/actions/action-recorder/) does this by monitoring and recording your manual interactions with theWin32application. It automatically generates the equivalent action lines and writes them to your test file, inserting whatever checks you specify to verify the responses of the application. \(See [Using the Action Recorder](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-4-using-the-action-recorder/) for further information.\)

Auto-generated action lines can subsequently be modified and enhanced by hand in a number of ways to address specific test requirements. For example, you can:

-   Add new actions, reorder actions and modify their arguments.
-   Remove superfluous recorded actions.
-   Insert validity checks to confirm that recorded values are output correctly.
-   Combine multiple recorded actions into a single user-defined action. \(Refer to [Smart creation of new actions](/user-guide/actions/user-defined-actions/smart-creation-of-new-actions) for details\)
-   Create [data-driven tests](/user-guide/projects-and-project-items/project-items/data-sets/) that run multiple test iterations using different sets of data.

## Actions supported for Win32 controls

TestArchitect provides many built-in actions for automating various user interactions on Win32 applications. When you record a test, TestArchitect records the performed user interface actions using these built-in actions. A full reference guide to these actions may be found in the [User Interface actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/) section of the Automation Guide.

## {{< expand >}} Win32 control identification

Every user interface control of aWin32application has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

The [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aWin32 application.

![](/images/TA_Automation/Images/aut_interface_definition_UI_Win32_identification.png)

## {{< expand >}} The UIA Support tool

TestArchitect can work with UI controls that are exposed by Microsoft's UI Automation \(UIA\) technology. TestArchitect includes a special tool, UIA Support, that provides support for Microsoft UIA. This tool is used to obtain the properties of a WPF application’s UI controls. \(See [Microsoft UI Automation](/automation-guide/microsoft-ui-automation/) for further information.\)

When the UIA Support tool is activated, TestArchitect is able to obtain extra and useful properties on a UI element of the AUT. One of the properties is automation id which can be used to uniquely locate a UI control from its siblings.

{{<tip>}} Using a unique and discoverable automation id property to locate a specific UI control is particularly suitable for agile software development. One of the crucial points of agile testing is automation. Software designers can specify unique automation ids for their UI elements. From design specifications, it is possible for QA specialists to implement the interface definition of a UI control using its automation id before the AUT is available for testing. With the aid of declaring a unique and discoverable automation id, the code can be architected for easy testing, and the QA specialists are able to identify test cases as soon as the requirements are defined, even before coding begins or completes. Furthermore, they can also test again as soon as the code has changed.

## {{< expand >}} Class mapping

Given that each platform has its own specific name for each type of control, supporting test automation across a wide variety of platforms gives rise to complex problems. To address this issue, TestArchitect introduces the concept of TA classes.

To illustrate the problem, consider the table-like control known, in WPF, as a `datagrid`. In WinForms, the datagrid equivalent is called a `datagridview`, and in Telerik it's a `radGridView`. Hence, in test automation, identifying UI controls by their raw classes is an unwieldy and unappealing proposition.

TestArchitect's solution, TA classes, is a standardized set of control types, each of which TestArchitect recognizes and knows how to interact with.

Refer to [Class mapping](/user-guide/interface-definitions/class-mapping/) for details.

{{<important>}} Class mapping is currently supported on WPF, Win32, iOS, Android, and Silverlight applications.



