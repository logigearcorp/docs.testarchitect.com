--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 1 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_1_Mac.html
keywords: "Release Notes 8.2 Update 1, macOS, What is new, macOS, TestArchitect 8.2 Update 1, TestArchitect 8.2 Update 1, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 1 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## {{< expand >}} TestArchitect Client

-   **[Startup settings](/user-guide/test-execution/startup-settings/)**: The new Startup Settings panel on the Execute Test dialog box provides a means by which you can specify settings prior to a test run. For example, you can choose the browser in which to run a test by specifying a value for setting [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) without using variations. Or you can specify a user-defined setting such as test environment, then in turn retrieve its specified value within your tests using the action [get setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/get-setting).

**Enhancements to existing features**

-   **[Repository results can be exported to HTML](/user-guide/working-with-test-results/exporting-test-results/exporting-repository-test-results-to-an-html-file)**.
-   **Open/copy/cut/drag multiple items from [list view](/user-guide/projects-and-project-items/project-items/list-view/) to tree view:** Drag and drop any project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree. Alternatively, cut or copy items from a list view and paste into TestArchitect explorer tree. It is also now possible to open multiple items at one time from a list view.
-   **Support for repository name and project name parameters in test run batch file**: New parameters /dbname and /proname, which take precedence over /srvid \(repository ID\) and /proid \(project ID\).

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#concept_a3y_tkw_vp__section_p2c_51b_cs} 

-   **Official support for automation on [Safari](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li_pbz_fkq_js) running on macOS machines**: TestArchitect now supports recognition of UI web controls in Safari, allowing you to carry out testing of web applications running on Safari. Additionally, the [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) property is supported on Safari macOS.
-   **[Properties Comparison](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/properties-comparison-panel)**: A new feature of the TestArchitect Interface Viewer, **Property Comparison** allows you to compare and contrast the property values of your interface definitions with those of their “physical” counterparts \(controls, windows, etc.\) in the tested application. This is especially helpful when, perhaps due to an application update, a given interface definition can no longer identify the application’s UI object that it was originally matched with.
-   **Read user-defined and built-in settings in your test procedures and user-scripted actions**: The built-in action [get setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/get-setting), expression function [\#getsetting](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/getsetting), and [AbtLibrary](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/) class method [GetSetting\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getsetting) are provided to read settings into variables.
-   **Engine class method exposed, [getEntityInformation\(\)](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getentityinformation)** \([AbtLibrary](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/)\): This method retrieves the metadata of a TestArchitect entity, such as a test module, data set, or user-defined action, for use within your user-scripted actions. Retrieved information includes name, location, status, recent result, url, assigned user, priority, and version.
-   **Support for mobile web automation on [Safari](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/) running on iOS 8.4, 8.3, 8.2**.

**Enhancements to existing features**

-   **[Device Live Screen](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/device-live-screen/)**
    -   **Live mirroring**: Device Live Screen \(DLS\) now allows your desktop monitor to mirror, in real time, the display of the selected device.
    -   **Two viewing modes**
        -   Fit-to-window mode: The DLS window’s display area is matched to the physical dimensions of the device under test.
        -   Full screen mode: The DLS display is a one-to-one mapping of the monitor’s pixels with those of the device.
-   **[get tree node menu state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/get-tree-node-menu-state) and [check tree node menu state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-menu-state) actions**: optional arguments x and y are provided to determine horizontal and vertical positions of the effective click on a specified tree node.


