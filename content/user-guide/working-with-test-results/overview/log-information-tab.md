--- 
title: "Log Information tab"
linktitle: "Log Information tab"
description: "Remember: The contents of Log Information are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the test results are viewed on ..."
weight: 5
aliases: 
    - /TA_Help/Topics/ug_results_log_information.html
keywords: "test results, log information"
---

{{<remember>}} The contents of **Log Information** are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the test results are viewed on TestArchitect Client.

**Log Information** section: This section displays the logging information from the report actions, that is, [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report), [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), [report warning](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-warning), and [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error) in the test procedure. Expanding this section by clicking ![](/images/TA_Help/Images/Test_results_summary_tab_expand_button.png) button displays the following information:

![](/images/TA_Help/Images/Test_results_summaries_failure_log_summary_XML.png)

|Field|Description|
|-----|-----------|
|**Line**|The line number in the action line where the report action appears. The line number is color-coded to indicate the type of reporting action and/or result. Clicking on the line number text opens the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab, displaying the corresponding line in its execution context.-   [report](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report): black.<br>-   [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check): red if Failed is returned for the result argument, otherwise, green.<br>-   [report error](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-error): red.<br>-   [report warning](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-warning): orange.<br><br>|<br>
|**Message**|The textual description as specified by the text argument of the given report action.|
|**Action**|The particular report action. Click the action name to view the corresponding action line in the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab.|
|**Test case**|ID and the title of the test case where the log information is reported. Click the test case number to view the corresponding test case in the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab.|




