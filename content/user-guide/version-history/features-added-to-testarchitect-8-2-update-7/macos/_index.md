--- 
title: "macOS"
linktitle: "What's new in TestArchitect for macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_7_Mac.html
keywords: "Release Notes 8.2 Update 7, macOS, What is new, macOS, TestArchitect 8.2 Update 7, TestArchitect 8.2 Update 7, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under macOS.

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

## TestArchitect Automation

-   [**Interface Viewer capture of transient controls**](/TA_Help/Topics/ug_Interface_viewer_offline_mode.html): The Interface Viewer now caches captured UI objects and their properties, a feature that is especially useful for those controls that become unavailable during the interface capture session. This retention allows you to continue viewing those UI objects in the Viewer, and to save them to your project interface.
-   **New timing-related built-in settings**:
    -   [control condition](/TA_Automation/Topics/bis_control_condition.html): Waits for given TA properties of controls to satisfy specified conditions before [UI-interactive actions](/TA_Automation/Topics/timing_classifying_actions.html) are executed.
    -   [control condition wait](/TA_Automation/Topics/bis_control_condition_wait.html): The maximum wait time for TA properties to satisfy the conditions of the control condition setting.

**Enhancements to existing features**

-   **[Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) selective refresh**: You can now perform a refresh on any given window node in the Viewer's [UI Explorer](/TA_Help/Topics/ug_Interface_UI_explorer_panel.html) panel. Previously, the refresh function was limited to refreshing all currently open windows on the system at once.


