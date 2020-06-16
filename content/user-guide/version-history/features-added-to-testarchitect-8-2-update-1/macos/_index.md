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

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   **[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)**: The new Startup Settings panel on the Execute Test dialog box provides a means by which you can specify settings prior to a test run. For example, you can choose the browser in which to run a test by specifying a value for setting [use browser](/TA_Automation/Topics/bis_use_browser.html) without using variations. Or you can specify a user-defined setting such as test environment, then in turn retrieve its specified value within your tests using the action [get setting](/TA_Automation/Topics/bia_get_setting.html).

**Enhancements to existing features**

-   **[Repository results can be exported to HTML](/TA_Help/Topics/ug_test_results_export_repository_results_HTML.html)**.
-   **Open/copy/cut/drag multiple items from [list view](/TA_Help/Topics/Projects_and_tests_list_view.html) to tree view:** Drag and drop any project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree. Alternatively, cut or copy items from a list view and paste into TestArchitect explorer tree. It is also now possible to open multiple items at one time from a list view.
-   **Support for repository name and project name parameters in test run batch file**: New parameters /dbname and /proname, which take precedence over /srvid \(repository ID\) and /proid \(project ID\).

## TestArchitect Automation

-   **Official support for automation on [Safari](/TA_Automation/Topics/Web_automation.html#li_pbz_fkq_js) running on macOS machines**: TestArchitect now supports recognition of UI web controls in Safari, allowing you to carry out testing of web applications running on Safari. Additionally, the [XPath](/TA_Help/Topics/prop_xpath.html) property is supported on Safari macOS.
-   **[Properties Comparison](/TA_Help/Topics/ug_Inteface_properties_comparison_panel.html)**: A new feature of the TestArchitect Interface Viewer, **Property Comparison** allows you to compare and contrast the property values of your interface definitions with those of their “physical” counterparts \(controls, windows, etc.\) in the tested application. This is especially helpful when, perhaps due to an application update, a given interface definition can no longer identify the application’s UI object that it was originally matched with.
-   **Read user-defined and built-in settings in your test procedures and user-scripted actions**: The built-in action [get setting](/TA_Automation/Topics/bia_get_setting.html), expression function [\#getsetting](/TA_Automation/Topics/Expressions_functions_getsetting.html), and [AbtLibrary](/TA_Automation/Topics/abtf_Engine_classes.html) class method [GetSetting\(\)](/TA_Automation/Topics/abtf_GetSetting.html) are provided to read settings into variables.
-   **Engine class method exposed, [getEntityInformation\(\)](/TA_Automation/Topics/abtf_getEntityInformation.html)** \([AbtLibrary](/TA_Automation/Topics/abtf_Engine_classes.html)\): This method retrieves the metadata of a TestArchitect entity, such as a test module, data set, or user-defined action, for use within your user-scripted actions. Retrieved information includes name, location, status, recent result, url, assigned user, priority, and version.
-   **Support for mobile web automation on [Safari](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html) running on iOS 8.4, 8.3, 8.2**.

**Enhancements to existing features**

-   **[Device Live Screen](/TA_Help/Topics/ug_DLS.html)**
    -   **Live mirroring**: Device Live Screen \(DLS\) now allows your desktop monitor to mirror, in real time, the display of the selected device.
    -   **Two viewing modes**
        -   Fit-to-window mode: The DLS window’s display area is matched to the physical dimensions of the device under test.
        -   Full screen mode: The DLS display is a one-to-one mapping of the monitor’s pixels with those of the device.
-   **[get tree node menu state](/TA_Automation/Topics/bia_get_tree_node_menu_state.html) and [check tree node menu state](/TA_Automation/Topics/bia_check_tree_node_menu_state.html) actions**: optional arguments x and y are provided to determine horizontal and vertical positions of the effective click on a specified tree node.


