--- 
title: "Mapping test results between TestArchitect and Team Foundation Server"
linktitle: "Mapping results between TA and TFS"
description: "This section describes possible test results mappings between TestArchitect and TFS when TestArchitect test results are uploaded into TFS."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_mapping_result_table.html
keywords: "integration, TFS, mapping test result, mapping test result, Team Foundation Server"
---

This section describes possible test results mappings between TestArchitect and TFS when TestArchitect test results are uploaded into TFS.These are options that you set in the [TEST MANAGEMENT window](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection) of TestArchitect's **Team Foundation Server** external tool.

|No|TA test status|TFS test status|
|--|--------------|---------------|
|1|Passed|Passed \(default\)Failed<br><br>Inconclusive<br><br>|<br>
|2|Failed|PassedFailed \(default\)<br><br>Inconclusive<br><br>|<br>
|3|Passed with Warning/Error|Passed<br><br> Failed \(default\)<br><br> Inconclusive<br><br>|<br>
|4|Passed with Known Bug|Passed<br><br> Failed \(default\)<br><br> Inconclusive<br><br>|<br>
|5|Not Finished 1|Passed<br><br> Failed<br><br> Inconclusive \(default\)<br><br>|<br>
|6|Not Run 2|Passed<br><br> Failed<br><br> Inconclusive \(default\)<br><br>|<br>

{{<important>}}

1Not Finished occur if a test is started, but it is unable to reach the end of an automated run. An unfinished test case may result from any one of the following:

-   an automation error;
-   [test case timeout](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout) is reached;
-   execution of a [terminate](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/terminate) built-in action;
-   execution of an [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module) built-in action;
-   execution of an [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/test-case) built-in action.

2Not Run occurs when a test case is not even started.




