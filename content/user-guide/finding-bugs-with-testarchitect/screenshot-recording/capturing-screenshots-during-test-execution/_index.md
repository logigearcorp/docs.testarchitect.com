--- 
title: "Capturing screenshots during test execution"
linktitle: "Capturing screenshots during test execution"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_Screenshot_recording_capturing.html
---

With screenshot recording active,TestArchitect captures screenshots during test execution for each UI-interactive action. Depending on your settings, it retains some of these screenshots and logs them to the generated test result.

To capture screenshots during test automation, carry out the following steps:

1.  Launch the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box.

2.  Under the **General** tab, select the **Screenshot recording** check box.

    ![](/images//Images/Screenshot_recording_panel.png)

3.  In the **Keep picture set for each** section, specify which types of test outcome events the associated screenshots are to be retained for. The possible screenshot-logging events are:

    -   Passed: passed checks
    -   Failed: failed checks
    -   Warning/Error: automation warnings and errors
4.  In the **Keep** box, specify the number of UI-interacting actions preceding each screenshot-logging event whose screenshot sets are to be logged to the results. \(With screenshot recording enabled, the minimum is 1. By default, three screenshots sets are retained.\)

    **Note:**

    -   If this field is left empty, TestArchitect captures and logs screenshots of all UI-interacting actions.
    -   Only integer values above 0 are accepted.
5.  Click the **Execute** button to run the automated test.


During test execution, TestArchitect captures screenshots in accordance with its [rules](/TA_Help/Topics/ug_Screenshot_recording.html#section.screenshot_rules), then, based on your settings in the Screenshot recording panel, logs the qualified screenshots to the generated local test result. Screenshots may be viewed in the [**Result Details**](/TA_Help/Topics/Test_result_details.html#li_jkx_zqp_5x) tab once you've enabled their display:

1.  On the web browser, click on the [**Result Details**](/TA_Help/Topics/Test_result_details.html) tab.
2.  Click the **Option** drop-down button, and ensure that **Show recorded screenshots** is enabled.

    ![](/images//Images/Results.Show_recorded_screenshots.option_XML.png)


**Note:**

-   If you choose to generate a batch file \(see [Executing tests from the command line interface](/TA_Help/Topics/Test_exec_cmd.html)\) for test automation, two parameters provide the specifications for screen recording: -capturecond specifies the screenshot-logging events, while -capturelimit indicates the number of screenshot sets to be logged per event:
-   **Android:** This feature, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.

**Parent topic:**[Screenshot recording](/TA_Help/Topics/ug_Screenshot_recording.html)

**Related information**  


[Exporting local test results to an HTML file](/TA_Help/Topics/Test_result_export_HTML.html)

[Result Details tab](/TA_Help/Topics/Test_result_details.html)

