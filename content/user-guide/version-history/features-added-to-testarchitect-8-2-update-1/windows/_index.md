--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 1 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_1_Windows.html
keywords: "Release Notes 8.2 Update 1, Windows, What is new, Windows, TestArchitect 8.2 Update 1, TestArchitect 8.2 Update 1, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 1 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Visual Studio 2015 support**](/TA_Help/Topics/ug_MTM_supported_platforms.html): TestArchitect integrates with Microsoft Visual Studio 2015 \(Enterprise, Professional and Test Professional editions\).

    **Note:** As of this release, running automated tests from Team Foundation Server’s web portal for Microsoft Visual Studio 2015 is not supported. Additionally, for test scenarios using Visual Studio 2015 or Team Foundation Server 2015, whether on-premise or cloud-based, support for launching automated tests is limited to Microsoft Test Manager 2015 with Microsoft test controller and Microsoft test agent for Visual Studio 2013 Update 5 \(Note that these are Microsoft-imposed constraints\). Note also that only an on-premise installation of Team Foundation Server 2015 is supported in integration with TestArchitect.

-   **Support for uploading test results to Microsoft Test Manager test cases as identified by requirements-based test suites**.
-   **[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)**: The new Startup Settings panel on the Execute Test dialog box provides a means by which you can specify settings prior to a test run. For example, you can choose the browser in which to run a test by specifying a value for setting [use browser](/TA_Automation/Topics/bis_use_browser.html) without using variations. Or you can specify a user-defined setting such as test environment, then in turn retrieve its specified value within your tests using the action [get setting](/TA_Automation/Topics/bia_get_setting.html).

**Enhancements to existing features**

-   **Import/Export command line tool**:
    -   Allows for the import and export of [shared and regular picture checks](/TA_Help/Topics/ug_export_import_tool.html).
    -   Support the [--destinationFolder](/TA_Help/Topics/ug_export_import_tool_import_to_path.html#dlentry_lsx_15y_mt) parameter of the [ImportToPath](/TA_Help/Topics/ug_export_import_tool_import_to_path.html) command: if the destination path does not exist, it is generated automatically.
-   **[Repository results can be exported to HTML](/TA_Help/Topics/ug_test_results_export_repository_results_HTML.html)**.
-   **Open/copy/cut/drag multiple items from [list view](/TA_Help/Topics/Projects_and_tests_list_view.html) to tree view:** Drag and drop any project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree. Alternatively, cut or copy items from a list view and paste into TestArchitect explorer tree. It is also now possible to open multiple items at one time from a list view.
-   **Support for repository name and project name parameters in test run batch file**: New parameters /dbname and /proname, which take precedence over /srvid \(repository ID\) and /proid \(project ID\).

## TestArchitect Automation

-   **Support for mobile web automation on [Safari](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html) running on iOS 8.4, 8.3, 8.2** and **on [Chrome](/TA_Automation/Topics/aut_app_testing_mobile_web_Android.html) running on Android 5.1**.
-   **[Properties Comparison](/TA_Help/Topics/ug_Inteface_properties_comparison_panel.html)**: A new feature of the TestArchitect Interface Viewer, **Property Comparison** allows you to compare and contrast the property values of your interface definitions with those of their “physical” counterparts \(controls, windows, etc.\) in the tested application. This is especially helpful when, perhaps due to an application update, a given interface definition can no longer identify the application’s UI object that it was originally matched with.
-   **Read user-defined and built-in settings in your test procedures and user-scripted actions**: The built-in action [get setting](/TA_Automation/Topics/bia_get_setting.html), expression function [\#getsetting](/TA_Automation/Topics/Expressions_functions_getsetting.html), and [AbtLibrary](/TA_Automation/Topics/abtf_Engine_classes.html) class method [GetSetting\(\)](/TA_Automation/Topics/abtf_GetSetting.html) are provided to read settings into variables.
-   **Engine class method exposed, [getEntityInformation\(\)](/TA_Automation/Topics/abtf_getEntityInformation.html)** \([AbtLibrary](/TA_Automation/Topics/abtf_Engine_classes.html)\): This method retrieves the metadata of a TestArchitect entity, such as a test module, data set, or user-defined action, for use within your user-scripted actions. Retrieved information includes name, location, status, recent result, url, assigned user, priority, and version.

**Enhancements to existing features**

-   **[Device Live Screen](/TA_Help/Topics/ug_DLS.html)**
    -   **Live mirroring**: Device Live Screen \(DLS\) now allows your desktop monitor to mirror, in real time, the display of the selected device.
    -   **Two viewing modes**
        -   Fit-to-window mode: The DLS window’s display area is matched to the physical dimensions of the device under test.
        -   Full screen mode: The DLS display is a one-to-one mapping of the monitor’s pixels with those of the device.
-   **Improved Action Recorder for web apps on Internet Explorer**:
    -   **New support for generation of actions**:[drag mouse](/TA_Automation/Topics/bia_drag_mouse.html), as well as media-based built-in actions, including [pause](/TA_Automation/Topics/bia_html5_audio_video_pause.html), [play](/TA_Automation/Topics/bia_html5_audio_video_play.html), [set media property](/TA_Automation/Topics/bia_html5_audio_video_set_media_property.html), and [set volume](/TA_Automation/Topics/bia_html5_audio_video_set_volume.html), are now written into test procedures by the recorder.
    -   **[Highlight element on hover](/TA_Help/Topics/ug_AR_settings.html#li_wl2_vnd_ht)**: While you are recording the test, as you move your pointer around the application, an orange, rectangular frame highlights whichever control the cursor is made to hover over, and displays the object's TA class, to assist you in deciding where to click.
    -   **[Ignore formatting tags](/TA_Help/Topics/ug_AR_settings.html#li_spl_vnd_ht)**: The recorder determines whether to record the specific element that is interacted with, or to navigate up the DOM hierarchy until a suitable element is found. It then generates the appropriate built-in action with the recorder's choice of element specified as the control to be operated on.
-   **[get tree node menu state](/TA_Automation/Topics/bia_get_tree_node_menu_state.html) and [check tree node menu state](/TA_Automation/Topics/bia_check_tree_node_menu_state.html) actions**: optional arguments x and y are provided to determine horizontal and vertical positions of the effective click on a specified tree node.


