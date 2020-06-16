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

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Leverage the power of JIRA**](/TA_Help/Topics/JIRA_Integration.html): JIRA, a popular defect tracking system, can now be integrated with TestArchitect, allowing you and your team to more easily log and track the progress of JIRA bug issues by associating them with TestArchitect bugs. The following capabilities are offered:
    -   [**Attaching HTML test results to a JIRA bug**](/TA_Help/Topics/Bug_working_attachments_test_results.html): Attach both local and repository-based test results, in HTML format, to a JIRA bug.
    -   [**Submitting a TestArchitect bug to JIRA server**](/TA_Help/Topics/JIRA_submitting_bug.html): Submitting a bug from TestArchitect directly to a JIRA server creates a new JIRA bug on the server.
-   [**Tracking known bugs**](/TA_Help/Topics/Bugs_working_known_bug.html):
    -   Known bugs indicate where fails in a test have been recognized, so that those fails are ignored in subsequent test run results. The *Track known bug* feature helps you obtain test results from test runs that are not cluttered up with fails from known bugs, thus rendering the results easier to analyze.
    -   Additionally, for tracking and resolving bugs, you can harness the full power of TestArchitect-JIRA integration. Collect bug issues in JIRA, track those JIRA bugs in TestArchitect with the *Track Known Bug* feature, and let TestArchitect suggest a new life cycle stage for each JIRA bug at the conclusion of each test.
-   [**Screenshot Recording**](/TA_Help/Topics/ug_Screenshot_recording.html): Having TestArchitect automatically take snapshots of the AUT's display at certain points during test execution can serve as a powerful debugging tool.

**Enhancements to existing features**

-   **Option to export local test results** with screenshots included. \(Refer to [Exporting test results to an HTML file](/TA_Help/Topics/Test_result_export_HTML.html) for details.\)
-   **Option to open the parent results folder** upon export of test results. \(Refer to [Exporting test results to an HTML file](/TA_Help/Topics/Test_result_export_HTML.html) for details.\)
-   **Capture of entire screen** supported in the [Picture Capturing](/TA_Help/Topics/Additional_features_image_capturing_tool.html) tool.
-   **Mobile device information displayed** in generated [test results](/TA_Help/Topics/Test_result_summaries.html) and in [xUnit results](/TA_Help/Topics/Test_result_export_xUnit.html).

## TestArchitect Automation

-   **Mobile platforms**:
    -   [**iOS 7 automation platform**](/iOS/Topics/iOS_automation_def.html) supported:

        -   Devices: iPhone 4S, iPhone 5, iPhone 5C, iPad 2, iPad with Retina display, iPad Air, iPad mini.
        -   [WebView supported](/TA_Automation/Topics/aut_app_testing_mobile_web.html).
        **Note:**

        -   Only apps built with iOS SDK 7 and deployment targets 5, 6 or 7 are supported by this release.
        -   If the app is designed specifically for an iPhone, that app can only be tested on an iPhone device. Likewise for iPad.
    -   **New built-in actions support for various types of iOS 7 native controls**, including:

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
        **Note:** As of this release, 2 built-in actions, [type](/TA_Automation/Topics/bia_type.html) and [press device buttons](/TA_Automation/Topics/bia_press_device_buttons.html), do not support iOS 7.

    -   **New built-in actions support for multi-touch gestures on iOS 7 devices**:
        -   [multi touch tap](/TA_Automation/Topics/bia_multi_touch_tap.html): Tap in multiple locations within a window or control concurrently.
        -   [multi touch slide](/TA_Automation/Topics/bia_multi_touch_slide.html): Place virtual fingers on specified locations, then swipe with all fingers traveling in a parallel direction.
    -   [**Android 4.4 automation platform**](/Android/Topics/Android_Automation_begin.html) supported including native controls and Web View.
-   [**Support for Microsoft UI Automation \(UIA\) technology**](/TA_Automation/Topics/aut_Using_UIA.html): TestArchitect can work with UI controls that are exposed by UIA technology. Support for UIA controls includes:

    -   **Standard Windows \(Win32\)** controls
    -   **Windows Presentation Foundation \(WPF\)** controls
    -   **Windows Forms \(WinForms\)** controls
    -   **Telerik WPF** controls
    -   **Telerik WinForm** controls
    -   **Xceed WPF** controls
    **Note:** UIA is an accessibility framework that enables Windows applications to provide and consume programmatic information about user interfaces \(UIs\). It provides programmatic access to UI controls, enables assistive technology products, and allows automated test scripts to interact with the UI. For details, see [Microsoft’s UI Automation](http://msdn.microsoft.com/en-us/library/windows/desktop/ee684009(v=vs.85).aspx).

-   [**Support for automation on Mozilla Firefox 30**](/TA_Automation/Topics/Web_automation.html).
-   [**Support for automation on Google Chrome 35**](/TA_Automation/Topics/Web_automation.html).
-   **Support for automation on .NET framework 4.5.1**.
-   [**Key Point Detection**](/TA_Help/Topics/ug_Key_point_modify_tool.html): A methodology that applies a sophisticated image recognition technique for the detection of objects in AUT-produced displays. Key point detection allows for the recognition of objects that vary in scale, orientation, resolution, etc., from the baseline, and is supported by most TestArchitect [picture handling actions](/TA_Automation/Topics/bia_picture_handling.html). The following new built-in setting and action support keypoint detection.
    -   [picture algorithm](/TA_Automation/Topics/bis_picture_algorithm.html) setting: Specifies to picture handling actions which algorithm is to be applied in comparing a test image to a baseline: pixel-by-pixel \(exact match\) or key point.
    -   [set picture min accuracy](/TA_Automation/Topics/bia_set_picture_min_accuracy.html) action: Specifies the minimum level of accuracy required in matching baseline image objects with objects in captured test images for a match to be considered valid. \(Applies specifically to the key point technique.\)
-   **New Optical Character Recognition \(OCR\) features**:
    -   [**OCR Detector tool**](/TA_Help/Topics/ug_OCR_detector_tool.html): A tool for manual experimentation with test images, to allow user to determine optimum settings for text detection in images expected from the AUT during automated testing. The tool and its related new built-in setting and action expose advanced OCR thresholds that were formerly set at fixed values. Application is primarily for the detection of text in complicated cases, in which the background may be difficult to distinguish from the text.
    -   Built-in actions:
        -   [set ocr setting](/TA_Automation/Topics/bia_set_ocr_setting.html): Sets various thresholds to optimize the detection of bitmapped text in an image under test. In most cases, this is used in conjunction with the OCR Detector tool.
        -   [clear ocr setting](/TA_Automation/Topics/bia_clear_ocr_setting.html): Clears the OCR settings set by any prior invocations of set ocr setting.
        -   [**OCR actions**](/TA_Automation/Topics/bia_OCR.html): An additional argument, text color, has been provided to existing OCR actions to specify the color of the text to be detected.
-   [**Re-sign Android package files with custom signatures**](/Android/Topics/Android_configuring_customized_certificate.html): You now have the choice of re-signing .APK files with the LogiGear signature or with your custom one. Supported keystore types are PKCS\#12, which includes the .P12 and .PFX extensions, and .JKS.
-   **Two exported methods** for C\# user-scripted actions:

    -   [GetPictureLocation](/TA_Automation/Topics/abt_AbtGetPictureLocation_AbtEntity.html): Returns the location and dimensions \(left, top, width, height \) of an instance of a specified image within an object's bitmap.
    -   [GetTextCoordinates](/TA_Automation/Topics/abt_AbtGetTextCoordinates_AbtEntity.html): Employs OCR to returns the location and dimensions \(left, top, width, height \) of an instance of a specified bitmap text fragment within an object's bitmap.
    **Note:** At present, these two methods are supported only in the C\# harness.

-   Other new built-in actions:
    -   [check tree node menu state](/TA_Automation/Topics/bia_check_tree_node_menu_state.html): Checks the state of a specified menu item on a context menu of a tree node against an expected value.
    -   [get tree node menu state](/TA_Automation/Topics/bia_get_tree_node_menu_state.html): Retrieves the state of a specified menu item on a context menu of a tree node.
    -   [get device screen size](/TA_Automation/Topics/bia_get_device_screen_size.html): Returns the physical screen size of the mobile device under test.
    -   [get device log file](/TA_Automation/Topics/bia_get_device_log_file.html): Captures the Android system log file associated with the Android logcat command, and saves it to the test machine.

**Enhancements to existing features**

-   [A batch file \(Windows\)](/iOS/Topics/iOS_launching_an_AUT.html) or [shell script \(macOS\)](/iOS/Topics/iOS_launching_an_AUT.html) is available to avoid the Trust This Computer message popping up in response to a start program action on iOS 7 devices.
-   [tap table view cell](/TA_Automation/Topics/bia_tap_table_view_cell.html) action: An additional argument, hold duration , is provided to specify duration of the tap.
-   **TestArchitect Agent GUI improved**: Connected mobile device’s name is displayed in the GUI for clarification. \(Refer to [Connecting to iOS TestArchitect Agent over Wi-Fi](/iOS/Topics/iOS_connecting_to_host_machine.html) and [Setting up a physical Android device via Wi-Fi](/Android/Topics/Setting_up_physical_device_wifi.html) for details.\)
-   [Device Live Screen](/TA_Help/Topics/ug_capturing_mobile_screenshot.html) tool’s processing speed enhanced significantly.
-   [SampleRepository](/TA_Tutorials_Sample_App/Topics/SR_Sample_Repository_def.html) database enhancements include:
    -   [Car Rental – Mobile](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_iOS_def.html) project: Updated to automate tests on iOS 7.

**Other changes**

-   Flash application testing is no longer supported.

## License Server

-   [**Amendment to node-locked license transfer policy**](/TA_Administration/Topics/LS_TA_node-locked_licenses.html): Once you have successfully transferred a node-locked license to a new machine, you are granted a 24-hour grace period, during which you are free to re-transfer the license to another machine. After the 24-hour grace period, the 72-hour lock-in period kicks in. For the duration of the lock-in period, you are restricted from transferring the node-locked license. Upon expiration of lock-in, you are once again free to transfer the license.
-   [**License log file**](/TA_Administration/Topics/adm_License_server_log_file.html): The license log file tracks license requests submitted to the license server, and the outcomes of those requests.

**Enhancements to existing features:**

-   The means of identification \(host name vs. IP address\) used to assign a node-locked license to a machine is used in all future license validations for that machine. \(Hence, for example, in an environment in which IP addresses are assigned to machines dynamically, using the machine’s host name when assigning it a node-locked license avoids future validation issues.\). Refer to [Node-locked licenses](/TA_Administration/Topics/LS_TA_node-locked_licenses.html) for details.




