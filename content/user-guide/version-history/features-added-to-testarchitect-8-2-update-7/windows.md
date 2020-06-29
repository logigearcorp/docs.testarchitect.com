--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.2_update_7_Windows.html
keywords: "Release Notes 8.2 Update 7, Windows, What is new, Windows, TestArchitect 8.2 Update 7, TestArchitect 8.2 Update 7, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.2 Update 7 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Diff Tool**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/): New capabilities, in addition to the comparison of project items, have been added to the tool:
    -   [**Detect differences at node and folder level**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/using-diff-tool-for-folder-comparisons/comparing-folders): Compare differences in contents between two nodes or folders in the TestArchitect explorer hierarchy, within a project or across projects and repositories.
    -   [**Merge differences between folders**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/using-diff-tool-for-folder-comparisons/merging-folder-differences): Easily synchronize the contents of two folder hierarchies by copying project items and folders between them.
    -   [**External tool launcher**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-and-outside-products): Conveniently integrate TestArchitect and the **Diff Tool** with other differencing and merging tools.
-   [**Opening TestArchitect online Help**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/preferences#li.Use_online_help): You now have the option of having the F1 key open *either* TestArchitect's local help file, or TestArchitect online help.
-   **[Scheduling hit list clearance](/administration-guide/repository-server-management/clearing-hit-list-periodically)**: Repository hit list clearance now can be scheduled to take place during non-business hours to reduce the cache’s size of repository server, so that the repository server is started more quickly.

**Enhancements to existing features**

-   **Improved integration with Team Foundation Server–Microsoft Test Manager**:
    -   **Support for Work Item Query Language \(WIQL\)**: You can use WIQL, an SQL-like language, to upload TestArchitect results to Team Foundation Server by [automatic](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/automatically-uploading-testarchitect-test-results-to-tfs) or [manual](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/manually-uploading-testarchitect-test-results-to-tfs) means.
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

-   [**Microsoft Edge beta support**](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li.Edge): This release of TestArchitect introduces support for automated testing of web applications in Microsoft Edge.

    {{<note>}} As of this release the following versions are supported:

    -   Windows 10 Anniversary version 1607 \(build number 14393\), Pro edition.
    -   Microsoft Edge browser version 14393
    -   [Microsoft WebDriver Insider 14366](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
    {{<restriction>}} The following features are not currently supported on Microsoft Edge.

    -   Use of the TestArchitect [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and [point-to-identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tool.
    -   Use of the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) and [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only) built-in settings to match UI web controls.
-   **Beta support for [agent-based automation on Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/overview)**: Testing on mobile browser emulators helps ensure the proper appearance and functionality of your web application on various devices.
    -   [send command to browser](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/send-command-to-browser): New built-in action to invoke a mobile browser emulator, or redefine a mobile browser emulator and/or customize its environment during testing.
-   [**Interface Viewer capture of transient controls**](/user-guide/interface-definitions/the-interface-viewer/capturing-transient-controls): The Interface Viewer now caches captured UI objects and their properties, a feature that is especially useful for those controls that become unavailable during the interface capture session. This retention allows you to continue viewing those UI objects in the Viewer, and to save them to your project interface.
-   **New timing-related built-in settings**:
    -   [control condition](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition): Waits for given TA properties of controls to satisfy specified conditions before [UI-interactive actions](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/classifying-ui-interactive-actions) are executed.
    -   [control condition wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition-wait): The maximum wait time for TA properties to satisfy the conditions of the control condition setting.
-   **New picture-handling built-in actions**:
    -   [export baseline picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/export-baseline-picture): Save the current baseline image to a file.
    -   [get baseline image count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-baseline-image-count): Retrieve a count of the total number of baseline images that reside in a given picture check.
-   **New classes and API methods for user-scripted actions \(applicable to the C\# harness only\)**:
    -   [AbtPictureCheckManagement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/):
        -   [GetPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/getpicturecheck): Retrieve a picture check in the current project or the supplier project.
    -   [AbtPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/):
        -   [GetBaselines](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getbaselines): Retrieve a full list of baseline images in the current picture check.
        -   [GetBaselineCount](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getbaselinecount): Retrieve the number of baseline images in a given picture check.
        -   [GetName](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getname): Retrieve the name of the current picture check.
        -   [GetBaselineByIndex](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getbaselinebyindex): Retrieve the baseline image, as specified by its index, in the current picture check.
        -   [GetBaselineByName](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getbaselinebyname): Retrieve the baseline image, as specified by its name, in the current picture check.
    -   [AbtBaselinePicture](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/)
        -   [GetName](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/getname): Retrieve the name of the current baseline image.
        -   [Save](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/save): Save the current baseline image to a file.
-   **New built-in settings to avoid problems** that can result from unstable network connections, virtual machines, remote desktops, etc.
    -   [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method): Specifies which type of [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message – that is, separate sendinput messages or single sendinput message – takes effect when TestArchitect performs click-related built-in actions on the AUT.
    -   [click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay): Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method) is set to separate sendinput messages.

**Enhancements to existing features**

-   **Additional action lines generated by the [Action Recorder](/user-guide/actions/action-recorder/)**: New support for generation of built-in settings: [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [control condition](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition), and [control condition wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition-wait) are now written into test procedures by the Action Recorder to improve test performance during automation playback.
-   [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen) built-in action: Additional arguments including window, control, left, top, width, and height have been provided to allow for capturing a specific area.
-   **[Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) selective refresh**: You can now perform a refresh on any given window node in the Viewer's [UI Explorer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/ui-explorer-panel) panel. Previously, the refresh function was limited to refreshing all currently open windows on the system at once.
-   **Significant web control capture improvement**: Detection of web application controls within Internet Explorer and Mozilla Firefox by the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and [point-to-identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tool is now significantly faster.


