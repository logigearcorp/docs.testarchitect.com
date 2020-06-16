--- 
title: "Result Details tab"
linktitle: "Result Details tab"
description: "The Result Details tab displays a detailed (line-by-line) log of the test execution, which can be essential for test run analysis and debugging."
weight: 2
aliases: 
    - /TA_Help/Topics/Test_result_details.html
keywords: "test results, details"
---

The **Result Details** tab displays a detailed \(line-by-line\) log of the test execution, which can be essential for test run analysis and debugging.

For each execution of an action line, the effect and/or test result is automatically recorded by TestArchitect. The line-by-line details are available for viewing in the **Result Details** tab.

**Remember:** The **Result Details** tab is only available when the test results are viewed on a web browser.

A result line consists of

-   the line number in the file where the action was executed
-   the action's execution start time \(if the [Show Start Time & Run Duration](/TA_Help/Topics/Test_result_details.html#li.Start_time_Run_duration) option is enabled\)
-   duration of the action's execution \(if the [Show Start Time & Run Duration](/TA_Help/Topics/Test_result_details.html#li.Start_time_Run_duration) option is enabled\)
-   the action name
-   the action parameters \(argument names and values\)
-   system messages, if any
-   if [Time-traveling execution](/TA_Help/Topics/ug_time_traveling.html) is in effect\) the executed revision\(s\) of any project item\(s\) invoked for the given action line.

Click ![](/images/TA_Help/Images/Test_results_expand_detail.png) to expand and view additional details for each action's results. Below is an example of the result details for the login action.

![](/images/TA_Help/Images/Test_results_details_XML.png)

**Note:**

-   When a [user-defined action](/reuse/reuse.High_level_actions.html), which calls other sub-actions, encounters failures during the test run, the respective number of failures are displayed underneath the action for quick references. Additionally, a **Failure Summary** table appears.

    ![](/images/TA_Help/Images/test_results_failed_error_warning_summary.png)

    |Field|Description|
    |-----|-----------|
    |**Line**|The line number in the test where the failure occurred. Clicking on the line number text navigates to the corresponding line in its execution context.|
    |**Type**|The type of failure \(Error, Warning, or Failed\).|
    |**Details**|Displays the action line that caused the failure, the proximate cause of the failure, and the system message, if any, associated with the failure.|
    |**Screenshot**|Click the captured screenshots to launch the [screenshot viewer](/TA_Help/Topics/ug_Screenshot_recording.html#section_o4c_qj5_34) to view the screenshots of [UI-interacting actions](/TA_Automation/Topics/timing_classifying_actions.html).|

-   If you specified any [startup settings](/TA_Automation/Topics/aut_startup_settings.html) at the start of the test run, and startup settings were enabled, the **Startup Settings** section is displayed at top of the page.

    ![](/images/TA_Help/Images/Result_startup_settings.png)


## Additional functions

The **Result Details** tab also provide additional functions, such as, turning on the execution time reporting for all action lines, number of displayed action lines per page, collapsing/expanding all action lines, etc.

![](/images/TA_Help/Images/Result_details_tab_options.png)

1.  Option:
    -   **Show Start Time & Run Duration**: Display the start time and duration of each action's execution.
    -   [**Show recorded screenshots**](/TA_Help/Topics/ug_Screenshot_recording.html): Displays all logged screenshots captured during test automation. Note that TestArchitect captures screenshots only for UI-interacting actions, and posts to the local test result only those matching the specifications provided at the start of execution \(in the Screen recording panel of the Execute Test dialog box\).

        **Important:** Recorded screenshots are only available to **local test results**. They are unavailable to **repository test results**. \([Learn more](/TA_Help/Topics/ug_Screenshot_recording.html#section_nnf_wj5_34).\)

    -   [**Show revision timestamp**](/TA_Help/Topics/ug_time_traveling_results.html#section_chl_lxp_ls): Display the executed revision of each project item involved, such as user-defined actions, interface entities, and data sets.
2.  Collapse all sections.
3.  Expand all sections.
4.  Change number of items displayed per page, such as, 20, 25, 30 items, etc.
5.  Click the captured screenshots to launch the [screenshot viewer](/TA_Help/Topics/ug_Screenshot_recording.html#section_o4c_qj5_34) to view the screenshots of [UI-interacting actions](/TA_Automation/Topics/timing_classifying_actions.html).




**Related information**  


[Comparing test results](/TA_Help/Topics/Test_result_baselining.html)

[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)

