--- 
title: "Testing web applications - Overview"
linktitle: "Testing web applications - Overview"
description: "Some basics of creating and recording tests for web applications, web control identification via the Interface Viewer, and other concepts."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_web_apps_basics.html
keywords: "web testing, testing web applications, native properties, overview, record and playback, web control identification, automation run, supported actions"
---

Some basics of creating and recording tests for web applications, web control identification via the Interface Viewer, and other concepts.

{{<note>}}

Before testing web applications on a supported browser, ensure that necessary settings or reconfigurations required by TestArchitect are fully met. For detailed instructions, see [Preparing web browsers](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/).

## Creating and recording tests for web applications

TestArchitect's test editor allows you to manually author tests consisting of action lines, based on the Action-Based Testing methodology. However, TestArchitect also provides you with a powerful tool to automate the process of authoring action-based tests, saving you time and eliminating the risk of accidental coding errors. The [Action Recorder](/user-guide/actions/action-recorder/) does this by monitoring and recording your manual interactions with thewebapplication. It automatically generates the equivalent action lines and writes them to your test file, inserting whatever checks you specify to verify the responses of the application. \(See [Using the Action Recorder](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-4-using-the-action-recorder/) for further information.\)

{{<important>}} Currently, Internet Explorer is the only browser platform that the Action Recorder supports.

Auto-generated action lines can subsequently be modified and enhanced by hand in a number of ways to address specific test requirements. For example, you can:

-   Add new actions, reorder actions and modify their arguments.
-   Remove superfluous recorded actions.
-   Insert validity checks to confirm that recorded values are output correctly.
-   Combine multiple recorded actions into a single user-defined action. \(Refer to [Smart creation of new actions](/user-guide/actions/user-defined-actions/smart-creation-of-new-actions) for details\)
-   Create [data-driven tests](/user-guide/projects-and-project-items/project-items/data-sets/) that run multiple test iterations using different sets of data.

## Actions supported for web controls

TestArchitect provides many built-in actions for automating various user interactions on web applications. A full list of these actions may be found in [browser-based actions](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/supported-browser-based-actions).

## Web control identification

Every user interface control of awebapplication has both a class and a set of properties. Property sets vary depending on the class of object involved: a button, for example, will have a different set of properties than a text box or label. Within a given container \(window, dialog box, etc.\), the combination of a control's class and some set of property-value pairs is used by TestArchitect to uniquely identify the control.

Generally, only a small subset of a control's properties are useful for identification. Some properties of a given control may have highly volatile values, and therefore cannot be used for reliable identification. Other properties may be quite constant \(e.g., enabled=true\), but other controls of the same class might well have the exact same value for that property. Ideally, you need to find property values that are both persistent for a given control and unique. If necessary, a combination of two or more property-value pairs may be used for identification.

{{<note>}}

-   [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) property, a persistent TA property, should be used to uniquely target UI controls, and to attain the optimal performance within your web applications.
-   However, XPath may not be used in combination with any other TA properties to identify and capture a web control.

The [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) is a powerful support tool that allows you to view all of a control's available properties, to capture and save all or parts of an interface definition, and to explore the controls of an application's interface. The following image depicts the Interface Viewer examining the controls of aweb application.

![](/images/TA_Automation/Images/aut_interface_definition_UI_web_identification.png)

{{<important>}}

-   Use of the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and [point-to-identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tool are currently not supported for web applications running within Microsoft Edge and Mozilla Firefox on Windows, because automated testing of Microsoft Edge and Mozilla Firefox is now supported through WebDriver and GeckoDriver, respectively. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/troubleshooting-web-automation/how-to-capture-ui-controls-on-mozilla-firefox-and-microsoft-edge)\)
-   In order to obtain the XPath property, read [here](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/troubleshooting-web-automation/how-to-capture-ui-controls-on-mozilla-firefox-and-microsoft-edge).

## Native web properties

TestArchitect defines its own set of properties, named [TA properties](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/), which it applies toweb controls. The Interface Viewer displays not only the TA properties of aweb application's controls, but also exposes all of the controls' [native properties](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/). These are the same properties that are available in the application’s source code and used by the application developers. You may use these native properties to capture controls or automate tests.

![](/images/TA_Automation/Images/aut_interface_definition_web_Native_properties.png)




