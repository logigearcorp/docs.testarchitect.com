--- 
title: "Failure/Error Summary tab"
linktitle: "Failure/Error Summary tab"
description: "This section displays all failure, error, or warning encountered during the test run."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_results_failure_error_summary.html
keywords: "test results, failure, error, failure, error"
---

This section displays all failure, error, or warning encountered during the test run.

**Remember:** The contents of **Failure/Error Summary** are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the test results are viewed on the TestArchitect Client.

Exploring this tab exhibits a list of the failures with the following fields:

**Note:** In the following, the term *failure* is used as a shorthand for failure, error or warning.

![](/images/TA_Help/Images/Test_results_summaries_failure_error_summary_XML.png)

|Field|Description|
|-----|-----------|
|**Line**|The line number in the test where the failure occurred. Clicking on the line number text opens the [**Result Details**](/TA_Help/Topics/Test_result_details.html) tab, displaying the corresponding line in its execution context.|
|**Type**|The type of failure \(Error, Warning, or Failed\).|
|**Details**|Displays the action line that caused the failure, the proximate cause of the failure, and the system message, if any, associated with the failure.|
|**Screenshot**|Click the captured screenshots to launch the [screenshot viewer](/TA_Help/Topics/ug_Screenshot_recording.html#section_o4c_qj5_34) to view the screenshots of [UI-interacting actions](/TA_Automation/Topics/timing_classifying_actions.html).|
|**Action**|The action responsible for the failure. Click the action name to view the corresponding action line in the [**Result Details**](/TA_Help/Topics/Test_result_details.html) tab.|
|**Test case**|Displays the ID and title of the test case where the failure occurred. Click the test case number to view the corresponding test case in the [**Result Details**](/TA_Help/Topics/Test_result_details.html) tab.|




