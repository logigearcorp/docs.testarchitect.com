--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_7_Windows.html
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Diff Tool**](/TA_Help/Topics/ug_diff_tool.html): New capabilities, in addition to the comparison of project items, have been added to the tool:
    -   [**Detect differences at node and folder level**](/TA_Help/Topics/ug_diff_tool_comparing_directories.html): Compare differences in contents between two nodes or folders in the TestArchitect explorer hierarchy, within a project or across projects and repositories.
    -   [**Merge differences between folders**](/TA_Help/Topics/ug_diff_tool_copying_items_folders.html): Easily synchronize the contents of two folder hierarchies by copying project items and folders between them.
    -   [**External tool launcher**](/TA_Help/Topics/ug_diff_tool_using_other_products.html): Conveniently integrate TestArchitect and the **Diff Tool** with other differencing and merging tools.
-   [**Opening TestArchitect online Help**](/TA_Help/Topics/Additional_features_preferences.html#li.Use_online_help): You now have the option of having the F1 key open *either* TestArchitect's local help file, or TestArchitect online help.
-   **[Scheduling hit list clearance](/TA_Administration/Topics/adm_clear_hitlist.html)**: Repository hit list clearance now can be scheduled to take place during non-business hours to reduce the cache’s size of repository server, so that the repository server is started more quickly.

**Enhancements to existing features**

-   **Improved integration with Team Foundation Server–Microsoft Test Manager**:
    -   **Support for Work Item Query Language \(WIQL\)**: You can use WIQL, an SQL-like language, to upload TestArchitect results to Team Foundation Server by [automatic](/TA_Help/Topics/ug_MTM_upload_result_automatic.html) or [manual](/TA_Help/Topics/ug_MTM_upload_result_manual.html) means.
    -   **Additional ways to map TestArchitect projects to TFS under Visual Studio Team Services**:
        -   Only the TFS Team Project name is necessary. For example, to map to the TFS CarRental project, simply specify CarRental in TestArchitect.
        -   The format is in the form of \{your\_account\} name, extracted from hyperlink https://\{youraccount\}.visualstudio.com, followed by a backslash \(\\\), followed by the TFS Team Project name. For example, to map to the TFS CarRental project located on https://harnett.visualstudio.com, specify harnett\\CarRental in TestArchitect.
-   [**TAUtilities**](http://testarchitect.logigear.com/onlinehelp/TAUtilities/index.html), a library of APIs which allows you to connect to and retrieve data from a TestArchitect repository server, has been updated. The following new interfaces and methods are provided.
    -   BaselinePicture interface
        -   save\(string location\): Save the current baseline image to a file.
    -   PictureCheck interface
        -   getBaselines\(\): Retrieve a full list of baseline images in the current picture check.
    -   TestModule interface
        -   getPictureChecks\(\): Retrieve a full list of the picture checks in the current test module.
    -   Project interface:
        -   getPictureCheck\(string treePath\): Retrieve the desired picture check with the given relative tree path.
        -   getPictureChecks\(\): Recursively retrieve a collection of picture checks in the current project.
    -   Result interface:
        -   getTestModule\(\): Retrieve the test module belonging to the current test result.

## TestArchitect Automation

-   [**Microsoft Edge beta support**](/TA_Automation/Topics/Web_automation.html#li.Edge): This release of TestArchitect introduces support for automated testing of web applications in Microsoft Edge.

    **Note:** As of this release the following versions are supported:

    -   Windows 10 Anniversary version 1607 \(build number 14393\), Pro edition.
    -   Microsoft Edge browser version 14393
    -   [Microsoft WebDriver Insider 14366](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
    **Restriction:** The following features are not currently supported on Microsoft Edge.

    -   Use of the TestArchitect [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool.
    -   Use of the [case sensitive](/TA_Automation/Topics/bis_case_sensitive.html) and [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html) built-in settings to match UI web controls.
-   **Beta support for [agent-based automation on Chrome](/TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools.html)**: Testing on mobile browser emulators helps ensure the proper appearance and functionality of your web application on various devices.
    -   [send command to browser](/TA_Automation/Topics/bia_send_command_to_browser.html): New built-in action to invoke a mobile browser emulator, or redefine a mobile browser emulator and/or customize its environment during testing.
-   [**Interface Viewer capture of transient controls**](/TA_Help/Topics/ug_Interface_viewer_offline_mode.html): The Interface Viewer now caches captured UI objects and their properties, a feature that is especially useful for those controls that become unavailable during the interface capture session. This retention allows you to continue viewing those UI objects in the Viewer, and to save them to your project interface.
-   **New timing-related built-in settings**:
    -   [control condition](/TA_Automation/Topics/bis_control_condition.html): Waits for given TA properties of controls to satisfy specified conditions before [UI-interactive actions](/TA_Automation/Topics/timing_classifying_actions.html) are executed.
    -   [control condition wait](/TA_Automation/Topics/bis_control_condition_wait.html): The maximum wait time for TA properties to satisfy the conditions of the control condition setting.
-   **New picture-handling built-in actions**:
    -   [export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html): Save the current baseline image to a file.
    -   [get baseline image count](/TA_Automation/Topics/bia_get_baseline_image_count.html): Retrieve a count of the total number of baseline images that reside in a given picture check.
-   **New classes and API methods for user-scripted actions \(applicable to the C\# harness only\)**:
    -   [AbtPictureCheckManagement](/TA_Automation/Topics/abt_AbtPictureCheckManagement.html):
        -   [GetPictureCheck](/TA_Automation/Topics/abt_GetPictureCheck.html): Retrieve a picture check in the current project or the supplier project.
    -   [AbtPictureCheck](/TA_Automation/Topics/abt_AbtPictureCheck.html):
        -   [GetBaselines](/TA_Automation/Topics/abt_GetBaselines.html): Retrieve a full list of baseline images in the current picture check.
        -   [GetBaselineCount](/TA_Automation/Topics/abt_GetBaselineCount.html): Retrieve the number of baseline images in a given picture check.
        -   [GetName](/TA_Automation/Topics/abt_GetName.html): Retrieve the name of the current picture check.
        -   [GetBaselineByIndex](/TA_Automation/Topics/abt_GetBaselineByIndex.html): Retrieve the baseline image, as specified by its index, in the current picture check.
        -   [GetBaselineByName](/TA_Automation/Topics/abt_GetBaselineByName.html): Retrieve the baseline image, as specified by its name, in the current picture check.
    -   [AbtBaselinePicture](/TA_Automation/Topics/abt_AbtBaselinePicture.html)
        -   [GetName](/TA_Automation/Topics/abt_GetName_BaselinePicture.html): Retrieve the name of the current baseline image.
        -   [Save](/TA_Automation/Topics/abt_Save.html): Save the current baseline image to a file.
-   **New built-in settings to avoid problems** that can result from unstable network connections, virtual machines, remote desktops, etc.
    -   [click method](/TA_Automation/Topics/bis_click_method.html): Specifies which type of [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message – that is, separate sendinput messages or single sendinput message – takes effect when TestArchitect performs click-related built-in actions on the AUT.
    -   [click delay](/TA_Automation/Topics/bis_click_delay.html): Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting [click method](/TA_Automation/Topics/bis_click_method.html) is set to separate sendinput messages.

**Enhancements to existing features**

-   **Additional action lines generated by the [Action Recorder](/TA_Help/Topics/Creating_and_using_actions_AR.html)**: New support for generation of built-in settings: [window wait](/TA_Automation/Topics/bis_window_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [control condition](/TA_Automation/Topics/bis_control_condition.html), and [control condition wait](/TA_Automation/Topics/bis_control_condition_wait.html) are now written into test procedures by the Action Recorder to improve test performance during automation playback.
-   [capture screen](/TA_Automation/Topics/bia_capture_screen.html) built-in action: Additional arguments including window, control, left, top, width, and height have been provided to allow for capturing a specific area.
-   **[Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) selective refresh**: You can now perform a refresh on any given window node in the Viewer's [UI Explorer](/TA_Help/Topics/ug_Interface_UI_explorer_panel.html) panel. Previously, the refresh function was limited to refreshing all currently open windows on the system at once.
-   **Significant web control capture improvement**: Detection of web application controls within Internet Explorer and Mozilla Firefox by the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool is now significantly faster.

**Parent topic:**[Features added to TestArchitect 8.2 Update 7](/TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_7.html)

