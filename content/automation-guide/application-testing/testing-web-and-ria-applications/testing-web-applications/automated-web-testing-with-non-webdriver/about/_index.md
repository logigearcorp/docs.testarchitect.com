--- 
title: "Testing web applications - Overview"
linktitle: "About"
description: "Some basics of creating and recording tests for web applications, web control identification via the Interface Viewer, and other concepts."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_web_apps_basics.html
keywords: "web testing, testing web applications, native properties, overview, record and playback, web control identification, automation run, supported actions"
---

Some basics of creating and recording tests for web applications, web control identification via the Interface Viewer, and other concepts.

**Note:**

Before testing web applications on a supported browser, ensure that necessary settings or reconfigurations required by TestArchitect are fully met. For detailed instructions, see [Preparing web browsers](/TA_Help/Topics/Test_exec_extension.html).

## Creating and recording tests for web applications

TestArchitect's test editor allows you to manually author tests consisting of action lines, based on the Action-Based Testing methodology. However, TestArchitect also provides you with a powerful tool to automate the process of authoring action-based tests, saving you time and eliminating the risk of accidental coding errors. The [Action Recorder](/reuse/../TA_Help/Topics/Creating_and_using_actions_AR.html) does this by monitoring and recording your manual interactions with thewebapplication. It automatically generates the equivalent action lines and writes them to your test file, inserting whatever checks you specify to verify the responses of the application. \(See [Using the Action Recorder](/reuse/../TA_Tutorials/Topics/Tutorial_Using_the_Action_Recorder.html) for further information.\)

**Important:** Currently, Internet Explorer is the only browser platform that the Action Recorder supports.

Auto-generated action lines can subsequently be modified and enhanced by hand in a number of ways to address specific test requirements. For example, you can:

-   Add new actions, reorder actions and modify their arguments.
-   Remove superfluous recorded actions.
-   Insert validity checks to confirm that recorded values are output correctly.
-   Combine multiple recorded actions into a single user-defined action. \(Refer to [Smart creation of new actions](/reuse/../TA_Help/Topics/High_level_actions_smart_creating.html) for details\)
-   Create [data-driven tests](/reuse/../TA_Help/Topics/Projects_and_tests_dataset.html) that run multiple test iterations using different sets of data.

## Actions supported for web controls

TestArchitect provides many built-in actions for automating various user interactions on web applications. A full list of these actions may be found in [browser-based actions](/TA_Automation/Topics/aut_app_testing_web_apps_supported_actions.html).

## Web control identification

Every user interface control of awebapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

**Note:**

-   [XPath](/reuse/../TA_Help/Topics/prop_xpath.html) property, a persistent TA property, should be used to uniquely target UI controls, and to attain the optimal performance within your web applications.
-   However, XPath may not be used in combination with any other TA properties to identify and capture a web control.

The [Interface Viewer](/reuse/../TA_Help/Topics/Interface_def_Viewer.html) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aweb application.

![](/images/TA_Automation/Images/aut_interface_definition_UI_web_identification.png)

**Important:**

-   Use of the [Interface Viewer](/reuse/../TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify](/reuse/../TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool are currently not supported for web applications running within Microsoft Edge and Mozilla Firefox on Windows, because automated testing of Microsoft Edge and Mozilla Firefox is now supported through WebDriver and GeckoDriver, respectively. \([Learn more](/reuse/../TA_FAQ/Topics/faq.howto.capture_controls_Firefox_Edge.html)\)
-   In order to obtain the XPath property, read [here](/reuse/../TA_FAQ/Topics/faq.howto.capture_controls_Firefox_Edge.html).

## Native web properties

TestArchitect defines its own set of properties, named [TA properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html), which it applies toweb controls. The Interface Viewer displays not only the TA properties of aweb application's controls, but also exposes all of the controls' [native properties](/reuse/../TA_Help/Topics/Interface_def_Viewer_reading.html). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](/images/TA_Automation/Images/aut_interface_definition_web_Native_properties.png)




