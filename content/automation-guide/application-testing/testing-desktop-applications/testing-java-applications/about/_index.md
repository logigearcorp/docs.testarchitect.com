--- 
title: "Testing Java applications - Overview"
linktitle: "Testing Java applications - Overview"
description: "Some basics of creating and recording tests for Java applications, Java control identification via the Interface Viewer, and other concepts."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Java_apps_basics.html
keywords: "Java testing, testing Java applications, native properties, overview, record and playback, Java control identification, supported actions"
---

Some basics of creating and recording tests for Java applications, Java control identification via the Interface Viewer, and other concepts.

**Important:**

-   By default, TestArchitect Register Server, which is installed with TestArchitect, automatically starts up as a service \(daemon\) each time you boot your computer. This service is often essential for automated testing, and should generally be available. [Ensure the availability of the TestArchitect Register Server service](/TA_Administration/Topics/adm_taregserver.html) before running your automated tests.
-   For both Windows and Linux platforms, the environment variable JAVA\_TOOL\_OPTIONS is added during the TestArchitect installation process. This variable is used to invoke the TAJavaLoader.jar agent, located at TA\_INSTALL\_DIR\\binclient\\agents\\java\\lib\\ext\\. \(Note: In Windows, JAVA\_TOOL\_OPTIONS is added as both a **User** variable and **System** variable.\)

## Creating and recording tests for Java applications

TestArchitect's test editor allows you to manually author tests consisting of action lines, based on the Action-Based Testing methodology. However, TestArchitect also provides you with a powerful tool to automate the process of authoring action-based tests, saving you time and eliminating the risk of accidental coding errors. The [Action Recorder](/reuse/../TA_Help/Topics/Creating_and_using_actions_AR.html) does this by monitoring and recording your manual interactions with theJavaapplication. It automatically generates the equivalent action lines and writes them to your test file, inserting whatever checks you specify to verify the responses of the application. \(See [Using the Action Recorder](/reuse/../TA_Tutorials/Topics/Tutorial_Using_the_Action_Recorder.html) for further information.\)

Auto-generated action lines can subsequently be modified and enhanced by hand in a number of ways to address specific test requirements. For example, you can:

-   Add new actions, reorder actions and modify their arguments.
-   Remove superfluous recorded actions.
-   Insert validity checks to confirm that recorded values are output correctly.
-   Combine multiple recorded actions into a single user-defined action. \(Refer to [Smart creation of new actions](/reuse/../TA_Help/Topics/High_level_actions_smart_creating.html) for details\)
-   Create [data-driven tests](/reuse/../TA_Help/Topics/Projects_and_tests_dataset.html) that run multiple test iterations using different sets of data.

## Actions supported for Java controls

TestArchitect provides many built-in actions for automating various user interactions on Java applications. When you record a test, TestArchitect records the performed GUI actions using these built-in actions. A full reference guide to these actions may be found in the [User Interface actions](/TA_Automation/Topics/bia_User_Interface.html) section of the Automation Guide.

## Java control identification

Every user interface control of aJavaapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

The [Interface Viewer](/reuse/../TA_Help/Topics/Interface_def_Viewer.html) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aJava application.

![](/images/TA_Automation/Images/aut_interface_definition_UI_Java_identification.png)

## Native Java properties

TestArchitect defines its own set of properties, named [TA properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html), which it applies toJava controls. The Interface Viewer displays not only the TA properties of aJava application's controls, but also exposes all of the controls' [native properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](/images/TA_Automation/Images/aut_interface_definition_Java_Native_properties.png)



