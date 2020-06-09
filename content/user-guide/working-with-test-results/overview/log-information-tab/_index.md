--- 
title: "Log Information tab"
linktitle: "Log Information tab"
weight: 5
aliases: 
    - /TA_Help/Topics/ug_results_log_information.html
---

**Remember:** The contents of **Log Information** are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the test results are viewed on TestArchitect Client.

**Log Information** section: This section displays the logging information from the report actions, that is, [report](/TA_Automation/Topics/bia_report.html), [report check](/TA_Automation/Topics/bia_report_check.html), [report warning](/TA_Automation/Topics/bia_report_warning.html), and [report error](/TA_Automation/Topics/bia_report_error.html) in the test procedure. Expanding this section by clicking ![](/images//Images/Test_results_summary_tab_expand_button.png) button displays the following information:

![](/images//Images/Test_results_summaries_failure_log_summary_XML.png)

|Field|Description|
|-----|-----------|
|**Line**|The line number in the action line where the report action appears. The line number is color-coded to indicate the type of reporting action and/or result. Clicking on the line number text opens the [**Result Details**](Test_result_details.html) tab, displaying the corresponding line in its execution context.-   [report](/TA_Automation/Topics/bia_report.html): black.-   [report check](/TA_Automation/Topics/bia_report_check.html): red if Failed is returned for the result argument, otherwise, green.-   [report error](/TA_Automation/Topics/bia_report_error.html): red.-   [report warning](/TA_Automation/Topics/bia_report_warning.html): orange.|
|**Message**|The textual description as specified by the text argument of the given report action.|
|**Action**|The particular report action. Click the action name to view the corresponding action line in the [**Result Details**](Test_result_details.html) tab.|
|**Test case**|ID and the title of the test case where the log information is reported. Click the test case number to view the corresponding test case in the [**Result Details**](Test_result_details.html) tab.|

**Parent topic:**[Overview of test results](/TA_Help/Topics/ug_test_results_introduction.html)

**Previous topic:**[Failure/Error Summary tab](/TA_Help/Topics/ug_results_failure_error_summary.html)

**Next topic:**[Information tab](/TA_Help/Topics/Test_result_information.html)

