--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.1 update 1 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_1_Windows.html
keywords: "Release Notes 8.1 Update 1, Windows, What is new, Windows, TestArchitect 8.1 Update 1, TestArchitect 8.1 Update 1, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 1 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

Enhancements to existing features

-   Variation execution: Formerly, when both linked and keyword variations were specified at runtime, TestArchitect required eligible variations with keywords to match the runtime-specified keyword set exactly. Now, TestArchitect accepts variations with [subsets of the runtime-specified keyword set](/user-guide/variations/rules-for-executing-with-variations/rules-for-selecting-variations-for-execution/execution-with-both-keywords-and-version-nodes).
-   Integration with HP Quality Center
    -   Version Control within Quality Center is now supported. Particularly, [importing](/user-guide/integration-with-third-party-tools/hp-quality-center/features/importing-quality-center-tests-into-a-testarchitect-test-module/) Quality Center tests into TestArchitect or [uploading](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-testarchitect-test-modules-test-cases-to-quality-center/) TestArchitect test modules/test cases to Quality Center automatically generates versioning information of the item in Quality Center.
-   Integration with Microsoft Test Manager: Additional options when executing test cases in Microsoft Test Manager:
    -   [**Screenshot recording**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/testarchitect-execution-dialog-box#li_Screenshot.recording): Configure the capturing of [screenshots of UI-Interacting actions](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/#li.screenshot.exec_test_dlg.settings).
    -   [**Include screenshots**](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/testarchitect-execution-dialog-box#li_Include.scrn): Retain all captured screenshots in the exported HTML test result.
        -   Optimized resolution: Included screenshots' dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
        -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
-   **Support viewing new line and horizontal tab characters in the test results.**
-   In the Select Controller dialog box, each controller is identified by its host name, rather than IP address.

## TestArchitect Automation

-   Support for Safari iOS and Chrome Android testing: You can now use TestArchitect to create automated GUI and functional tests in the [Safari](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/) mobile web browser on iOS devices, and in the [Google Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/) mobile web browser on Android.
    -   Special handling of Javascript popups \(applies to [Safari](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/handling-javascript-popups) on iOS 7 and later, and to [Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/handling-javascript-popups)\): Due to the manner in which the web browser engines process JavaScript code, modal popup windows produced in a web application with JavaScript cannot be tested in a conventional manner. To address this issue, TestArchitect offers a special set of actions for interfacing with JavaScript popups, including alerts, prompts and confirmation dialogs.

        |Action|Description|
        |------|-----------|
        |[click on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-on-next-popup)|Click a specified button in a prompt, alert, or confirmation popup.|
        |[enter text on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-text-on-next-popup)|Write text to the user-entry field of a prompt popup, then click **OK**.|
        |[get popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message)|Retrieve the messages of one or more recent confirmation, prompt, or alert popups.|
        |[get popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text)|Retrieve the default text of the user-entry field of one or more recent prompt popups.|
        |[check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message)|Check the message strings displayed by one or more popups \(confirmation, prompt, or alert\) against the respective expected messages. Result is Passed if all values match; otherwise Failed.|
        |[check popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-default-text)|Check the default text of the user-entry fields of one or more prompt popups against their respective expected values. Result is Passed if all values match; otherwise Failed.|
        |[clear popup queue](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/clear-popup-queue)|Clear any remaining actions from the popup-handler queue, and clear the popup history buffer.|

-   [submit form](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/submit-form) \(built-in action\): Submit the form to which the given HTML control belongs.
-   Special character functions: To allow your test procedures to include special symbols and non-printing characters in expressions, the following general-purpose expression function has been added:

    -   [\#char\(code\)](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/char): Return a Unicode character based on its decimal code.
    As an added convenience, the following two special purpose functions may be used for two of the most common non-printing characters:

    -   [\#newline\(\)](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/newline): Return a special character signifying the end of a line of text.
    -   [\#tab\(\)](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/tab): Return a horizontal tab character.
-   [ignore tabs and newlines](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-tabs-and-newlines) \(built-in setting\): During string comparisons, ignore horizontal tabs and newlines.

Enhancements to existing features

-   [get device information](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-device-information) built-in action: An additional argument, unique id, is provided to retrieve a unique ID for the target test device.

