--- 
title: "Mapping test results between TestArchitect and Team Foundation Server"
linktitle: "Mapping results between TA and TFS"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_mapping_result_table.html
---

This section describes possible test results mappings between TestArchitect and TFS when TestArchitect test results are uploaded into TFS.These are options that you set in the [TEST MANAGEMENT window](Integration_MTM_connecting_TFS.html) of TestArchitect's **Team Foundation Server** external tool.

|No|TA test status|TFS test status|
|--|--------------|---------------|
|1|Passed|Passed \(default\)Failed

Inconclusive

|
|2|Failed|PassedFailed \(default\)

Inconclusive

|
|3|Passed with Warning/Error|Passed

 Failed \(default\)

 Inconclusive

|
|4|Passed with Known Bug|Passed

 Failed \(default\)

 Inconclusive

|
|5|Not Finished 1|Passed

 Failed

 Inconclusive \(default\)

|
|6|Not Run 2|Passed

 Failed

 Inconclusive \(default\)

|

**Important:**

1Not Finished occur if a test is started, but it is unable to reach the end of an automated run. An unfinished test case may result from any one of the following:

-   an automation error;
-   [test case timeout](/TA_Automation/Topics/aut_stop_tests_after_timeout.html) is reached;
-   execution of a [terminate](/TA_Automation/Topics/bia_terminate.html) built-in action;
-   execution of an [exit test module](/TA_Automation/Topics/bia_exit_test_module.html) built-in action;
-   execution of an [exit test case](/TA_Automation/Topics/bia_test_case.html) built-in action.

2Not Run occurs when a test case is not even started.

**Parent topic:**[Uploading TestArchitect test results to Team Foundation Server](/TA_Help/Topics/ug_MTM_upload_result.html)

**Previous topic:**[Manually uploading TestArchitect test results to Team Foundation Server](/TA_Help/Topics/ug_MTM_upload_result_manual.html)

**Next topic:**[Work Item Query Language - Work Item Query reference](/TA_Help/Topics/ug_MTM_WIQL_reference.html)

