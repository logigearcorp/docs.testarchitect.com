--- 
title: "Known Bug Summary tab"
linktitle: "Known Bug Summary tab"
description: "Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_results_known_bug_summary.html
keywords: "test results, known bug summary"
---

Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.

{{<remember>}} The contents of **Known Bug Summary** are organized into a tab when the test results are viewed on a web browser; whereas they are organized into a sub-section when the results are viewed on TestArchitect Client.

The **Known Bug Summary** tab shows all known bug marked on action lines \([learn more](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/reviewing-test-results-with-known-bugs)\). Exploring this tab reveals the following information:

![](/images/TA_Help/Images/Test_results_summaries_known_bug_summary_XML.png)

|Field|Description|
|-----|-----------|
|**Bug**|ID of the TA bug. Click the Bug ID to view [Bug Information](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/ta-bug-information) in TestArchitect Client.|
|**Summary**|A brief one-line summary of the TA bug.|
|**Test Case**|The particular section in the test module in which the TA bug is exposed. The section can be `Initial`, `Final` or a specific test case. Click the test case number to view the corresponding test case in the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab.|
|**Status**|The current status, or life cycle stage, of the marked known bug, as defined in the bug's [Current status](/user-guide/integration-with-third-party-tools/jira-integration/features-jira-integration/ta-bug-information#row_current_status) field.|
|**This Run**|The suggested status of the TA bug for this automation run. \([Learn more](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/reviewing-test-results-with-known-bugs#section_m3b_t2l_wn).\)|
|**Line**|The line number in the test where the action is marked as a known bug. \(Note that any number of action lines may be marked with a given bug ID.\) Clicking on the line number allows you to view the corresponding line in the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab.|
|**Ignored Fails**|The number of executions of the marked action line that failed during the run.|




