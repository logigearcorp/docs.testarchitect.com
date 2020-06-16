--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.1 update 1 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_1_Mac.html
keywords: "Release Notes 8.1 Update 1, macOS, What is new, macOS, TestArchitect 8.1 Update 1, TestArchitect 8.1 Update 1, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 1 running under macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**Enhancements to existing features**

-   **Variation execution**: Formerly, when both linked and keyword variations were specified at runtime, TestArchitect required eligible variations with keywords to match the runtime-specified keyword set exactly. Now, TestArchitect accepts variations with [subsets of the runtime-specified keyword set](/TA_Help/Topics/Variations_rules_executing_2_4.html).
-   **Support viewing new line and horizontal tab characters in the test results.**
-   In the Select Controller dialog box, each controller is identified by its host name, rather than IP address.

## TestArchitect Automation

-   [**Support for latest macOS versions**](/iOS/Topics/iOS_automation_def.html): TestArchitect offers support for the most recent version of macOS, Yosemite \(10.10\).
-   **Support for Safari iOS testing**: You can now use TestArchitect to create automated GUI and functional tests in the [Safari](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html) mobile web browser on iOS devices.
    -   **Special handling of [Javascript popups on Safari](/TA_Automation/Topics/aut_app_testing_safari_apps_popups.html)** \(iOS 7 and later\): Due to the manner in which the web browser engine processes JavaScript code, modal popup windows produced in a web application with JavaScript cannot be tested in a conventional manner. To address this issue, TestArchitect offers a special set of actions for interfacing with Javascript popups, including alerts, prompts and confirmation dialogs.

        |Action|Description|
        |------|-----------|
        |[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)|Click a specified button in a prompt, alert, or confirmation popup.|
        |[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)|Write text to the user-entry field of a prompt popup, then click **OK**.|
        |[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)|Retrieve the messages of one or more recent confirmation, prompt, or alert popups.|
        |[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)|Retrieve the default text of the user-entry field of one or more recent prompt popups.|
        |[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)|Check the message strings displayed by one or more popups \(confirmation, prompt, or alert\) against the respective expected messages. Result is Passed ifall values match; otherwise Failed.|
        |[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)|Check the default text of the user-entry fields of one or more prompt popups against their respective expected values. Result is Passed ifall values match; otherwise Failed.|
        |[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)|Clear any remaining actions from the popup-handler queue, and clear the popup history buffer.|

-   [submit form](/TA_Automation/Topics/bia_submit_form.html) \(built-in action\): Submit the form to which the given HTML control belongs.
-   **Special character functions**: To allow your test procedures to include special symbols and non-printing characters in expressions, the following general-purpose expression function has been added:

    -   [\#char\(code\)](/TA_Automation/Topics/Expressions_functions_char.html): Return a Unicode character based on its decimal code.
    As an added convenience, the following two special purpose functions may be used for two of the most common non-printing characters:

    -   [\#newline\(\)](/TA_Automation/Topics/Expressions_functions_newLine.html): Return a special character signifying the end of a line of text.
    -   [\#tab\(\)](/TA_Automation/Topics/Expressions_functions_tab.html): Return a horizontal tab character.
-   [ignore tabs and newlines](/TA_Automation/Topics/bis_ignore_tabs_and_newlines.html) \(built-in setting\): During string comparisons, ignore horizontal tabs and newlines.

**Enhancements to existing features**

-   [get device information](/TA_Automation/Topics/bia_get_device_information.html) built-in action: An additional argument, unique id, is provided to retrieve a unique ID for the target test device.


