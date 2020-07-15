--- 
title: "Features added to TestArchitect 8"
linktitle: "Features added to TestArchitect 8"
description: "This topic describes the changes made in TestArchitect version 8."
weight: 32
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.html
keywords: "What is new, TestArchitect 8, what is new"
---

This topic describes the changes made in TestArchitect version 8.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client  

-   [Leverage the power of JIRA](/user-guide/integration-with-third-party-tools/jira-integration/): JIRA, a popular defect tracking system, can now be integrated with TestArchitect, allowing you and your team to more easily log and track the progress of JIRA bug issues by associating them with TestArchitect bugs. The following capabilities are offered:
    -   [Attaching HTML test results to a JIRA bug](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/working-with-jira-attachments/attaching-html-test-results-to-a-jira-bug): Attach both local and repository-based test results, in HTML format, to a JIRA bug.
    -   [Submitting a TestArchitect bug to JIRA server](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/submitting-testarchitect-bugs-to-jira-server): Submitting a bug from TestArchitect directly to a JIRA server creates a new JIRA bug on the server.
-   [Tracking known bugs](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/):
    -   Known bugs indicate where fails in a test have been recognized, so that those fails are ignored in subsequent test run results. The *Track known bug* feature helps you obtain test results from test runs that are not cluttered up with fails from known bugs, thus rendering the results easier to analyze.
    -   Additionally, for tracking and resolving bugs, you can harness the full power of TestArchitect-JIRA integration. Collect bug issues in JIRA, track those JIRA bugs in TestArchitect with the *Track Known Bug* feature, and let TestArchitect suggest a new life cycle stage for each JIRA bug at the conclusion of each test.
-   [Screenshot Recording](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/): Having TestArchitect automatically take snapshots of the AUT's display at certain points during test execution can serve as a powerful debugging tool.

Enhancements to existing features

-   Option to export local test results with screenshots included. \(Refer to [Exporting test results to an HTML file](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file) for details.\)
-   Option to open the parent results folder upon export of test results. \(Refer to [Exporting test results to an HTML file](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file) for details.\)
-   Capture of entire screen supported in the [Picture Capturing](/user-guide/projects-and-project-items/project-items/picture-checks/picture-capturing-tool/) tool.
-   Mobile device information displayed in generated [test results](/user-guide/working-with-test-results/overview/summary-tab) and in [xUnit results](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xunit).

## TestArchitect Automation

-   Mobile platforms:
    -   [iOS 7 automation platform](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/) supported:

        -   Devices: iPhone 4S, iPhone 5, iPhone 5C, iPad 2, iPad with Retina display, iPad Air, iPad mini.
        -   [WebView supported](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/).
        {{<note>}}

        -   Only apps built with iOS SDK 7 and deployment targets 5, 6 or 7 are supported by this release.
        -   If the app is designed specifically for an iPhone, that app can only be tested on an iPhone device. Likewise for iPad.
    -   New built-in actions support for various types of iOS 7 native controls, including:

        -   **button**
        -   **collection view**
        -   **date picker**
        -   **image**
        -   **label**
        -   **page control**
        -   **picker view**
        -   **progress bar**
        -   **search bar**
        -   **slider**
        -   **stepper**
        -   **switch**
        -   **table view**
        -   **text view**
        -   **textbox**
        -   **window**
        {{<note>}} As of this release, 2 built-in actions, [type](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/type) and [press device buttons](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/press-device-buttons), do not support iOS 7.

    -   New built-in actions support for multi-touch gestures on iOS 7 devices:
        -   [multi touch tap](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/multi-touch-tap): Tap in multiple locations within a window or control concurrently.
        -   [multi touch slide](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/multi-touch-slide): Place virtual fingers on specified locations, then swipe with all fingers traveling in a parallel direction.
    -   [Android 4.4 automation platform](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/) supported including native controls and Web View.
-   [**Support for Microsoft UI Automation \(UIA\) technology**](/automation-guide/microsoft-ui-automation/): TestArchitect can work with UI controls that are exposed by UIA technology. Support for UIA controls includes:

    -   **Standard Windows \(Win32\)** controls
    -   **Windows Presentation Foundation \(WPF\)** controls
    -   **Windows Forms \(WinForms\)** controls
    -   **Telerik WPF** controls
    -   **Telerik WinForm** controls
    -   **Xceed WPF** controls
    {{<note>}} UIA is an accessibility framework that enables Windows applications to provide and consume programmatic information about user interfaces \(UIs\). It provides programmatic access to UI controls, enables assistive technology products, and allows automated test scripts to interact with the UI. For details, see [Microsoft’s UI Automation](http://msdn.microsoft.com/en-us/library/windows/desktop/ee684009(v=vs.85).aspx).

-   [Support for automation on Mozilla Firefox 30](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/).
-   [Support for automation on Google Chrome 35](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/).
-   Support for automation on .NET framework 4.5.1.
-   [Key Point Detection](/user-guide/projects-and-project-items/project-items/picture-checks/key-points-modification-tool/): A methodology that applies a sophisticated image recognition technique for the detection of objects in AUT-produced displays. Key point detection allows for the recognition of objects that vary in scale, orientation, resolution, etc., from the baseline, and is supported by most TestArchitect [picture handling actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/). The following new built-in setting and action support keypoint detection.
    -   [picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm) setting: Specifies to picture handling actions which algorithm is to be applied in comparing a test image to a baseline: pixel-by-pixel \(exact match\) or key point.
    -   [set picture min accuracy](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/set-picture-min-accuracy) action: Specifies the minimum level of accuracy required in matching baseline image objects with objects in captured test images for a match to be considered valid. \(Applies specifically to the key point technique.\)
-   **New Optical Character Recognition \(OCR\) features**:
    -   [OCR Detector tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/ocr-detector-tool/): A tool for manual experimentation with test images, to allow user to determine optimum settings for text detection in images expected from the AUT during automated testing. The tool and its related new built-in setting and action expose advanced OCR thresholds that were formerly set at fixed values. Application is primarily for the detection of text in complicated cases, in which the background may be difficult to distinguish from the text.
    -   Built-in actions:
        -   [set ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/set-ocr-setting): Sets various thresholds to optimize the detection of bitmapped text in an image under test. In most cases, this is used in conjunction with the OCR Detector tool.
        -   [clear ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/clear-ocr-setting): Clears the OCR settings set by any prior invocations of set ocr setting.
        -   [OCR actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/): An additional argument, text color, has been provided to existing OCR actions to specify the color of the text to be detected.
-   [Re-sign Android package files with custom signatures](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/): You now have the choice of re-signing .APK files with the LogiGear signature or with your custom one. Supported keystore types are PKCS\#12, which includes the .P12 and .PFX extensions, and .JKS.
-   Two exported methods for C\# user-scripted actions:

    -   [GetPictureLocation](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/getpicturelocation): Returns the location and dimensions \(left, top, width, height \) of an instance of a specified image within an object's bitmap.
    -   [GetTextCoordinates](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcoordinates): Employs OCR to returns the location and dimensions \(left, top, width, height \) of an instance of a specified bitmap text fragment within an object's bitmap.
    {{<note>}} At present, these two methods are supported only in the C\# harness.

-   Other new built-in actions:
    -   [check tree node menu state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-menu-state): Checks the state of a specified menu item on a context menu of a tree node against an expected value.
    -   [get tree node menu state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/get-tree-node-menu-state): Retrieves the state of a specified menu item on a context menu of a tree node.
    -   [get device screen size](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-device-screen-size): Returns the physical screen size of the mobile device under test.
    -   [get device log file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-device-log-file): Captures the Android system log file associated with the Android logcat command, and saves it to the test machine.

Enhancements to existing features

-   [A batch file \(Windows\)](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/launching-an-aut) or [shell script \(macOS\)](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/launching-an-aut) is available to avoid the Trust This Computer message popping up in response to a start program action on iOS 7 devices.
-   [tap table view cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/table-view/tap-table-view-cell) action: An additional argument, hold duration , is provided to specify duration of the tap.
-   TestArchitect Agent GUI improved: Connected mobile device’s name is displayed in the GUI for clarification. \(Refer to [Connecting to iOS TestArchitect Agent over Wi-Fi](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/connecting-to-ios-testarchitect-agent-over-wi-fi) and [Setting up a physical Android device via Wi-Fi](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/configuring-android-testing-on-target-devices/setting-up-a-physical-android-device-via-wi-fi) for details.\)
-   [Device Live Screen](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/capturing-screenshots-of-a-mobile-device) tool’s processing speed enhanced significantly.
-   [SampleRepository](/user-guide/getting-started/sample-repository/) database enhancements include:
    -   [Car Rental – Mobile](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/) project: Updated to automate tests on iOS 7.

Other changes

-   Flash application testing is no longer supported.

## License Server

-   [Amendment to node-locked license transfer policy](/administration-guide/license-server/managing-licenses/node-locked-licenses/): Once you have successfully transferred a node-locked license to a new machine, you are granted a 24-hour grace period, during which you are free to re-transfer the license to another machine. After the 24-hour grace period, the 72-hour lock-in period kicks in. For the duration of the lock-in period, you are restricted from transferring the node-locked license. Upon expiration of lock-in, you are once again free to transfer the license.
-   [License log file](/administration-guide/license-server/license-log-file/): The license log file tracks license requests submitted to the license server, and the outcomes of those requests.

Enhancements to existing features:

-   The means of identification \(host name vs. IP address\) used to assign a node-locked license to a machine is used in all future license validations for that machine. \(Hence, for example, in an environment in which IP addresses are assigned to machines dynamically, using the machine’s host name when assigning it a node-locked license avoids future validation issues.\). Refer to [Node-locked licenses](/administration-guide/license-server/managing-licenses/node-locked-licenses/) for details.



