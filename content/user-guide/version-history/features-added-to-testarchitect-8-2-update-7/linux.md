--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_7_Linux.html
keywords: "Release Notes 8.2 Update 7, Linux, What is new, Linux, TestArchitect 8.2 Update 7, TestArchitect 8.2 Update 7, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [Diff Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/): New capabilities, in addition to the comparison of project items, have been added to the tool:
    -   [Detect differences at node and folder level](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/using-diff-tool-for-folder-comparisons/comparing-folders): Compare differences in contents between two nodes or folders in the TestArchitect explorer hierarchy, within a project or across projects and repositories.
    -   [**Merge differences between folders**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/using-diff-tool-for-folder-comparisons/merging-folder-differences): Easily synchronize the contents of two folder hierarchies by copying project items and folders between them.
    -   [External tool launcher](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-and-outside-products): Conveniently integrate TestArchitect and the Diff Tool with other differencing and merging tools.
-   [**Opening TestArchitect online Help**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/preferences#li.Use_online_help): You now have the option of having the F1 key open *either* TestArchitect's local help file, or TestArchitect online help.
-   **[Scheduling hit list clearance](/administration-guide/repository-server-management/clearing-hit-list-periodically)**: Repository hit list clearance now can be scheduled to take place during non-business hours to reduce the cache’s size of repository server, so that the repository server is started more quickly.

## TestArchitect Automation  

-   [Interface Viewer capture of transient controls](/user-guide/interface-definitions/the-interface-viewer/capturing-transient-controls): The Interface Viewer now caches captured UI objects and their properties, a feature that is especially useful for those controls that become unavailable during the interface capture session. This retention allows you to continue viewing those UI objects in the Viewer, and to save them to your project interface.
-   New timing-related built-in settings:
    -   [control condition](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition): Waits for given TA properties of controls to satisfy specified conditions before [UI-interactive actions](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/classifying-ui-interactive-actions) are executed.
    -   [control condition wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition-wait): The maximum wait time for TA properties to satisfy the conditions of the control condition setting.
-   New picture-handling built-in actions:
    -   [export baseline picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/export-baseline-picture): Save the current baseline image to a file.
    -   [get baseline image count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-baseline-image-count): Retrieve a count of the total number of baseline images that reside in a given picture check.

Enhancements to existing features

-   [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen) built-in action: Additional arguments including window, control, left, top, width, and height have been provided to allow for capturing a specific area.
-   [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) selective refresh: You can now perform a refresh on any given window node in the Viewer's [UI Explorer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/ui-explorer-panel) panel. Previously, the refresh function was limited to refreshing all currently open windows on the system at once.
-   Significant web control capture improvement: Detection of web application controls within Mozilla Firefox by the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and [point-to-identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tool is now significantly faster.

