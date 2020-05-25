--- 
title: "Test result status"
linktitle: "Test result status"
aliases: 
    - /TA_Help/Topics/ug_test_results_status.html
---
# Test result status {#concept_cdg_yq1_ybb .concept}

The topic of this section contains information about detailed test result status.

|Result status|Description|Notes|
|-------------|-----------|-----|
|Passed|A test reaches the end of an automated run, with:

-   no errors/warnings encountered
-   all checkpoints are passed.

|When a test reaches the end, and no errors and no warnings have occurred; the test does not contain any checkpoints. The test is Passed.|
|Failed|A test reaches the end of an automated run, with one or few checkpoints are failed.

| |
|Passed with Warnings/Errors|A test reaches the end of an automated run, with:

-   one or few warnings/errors encountered
-   all checkpoints are passed.

|The most common use case for this result status is as follows: -   A test reaches the end of an automated run, one or several warnings occurred, no errors detected, and all checkpoints are passed.

|
|Passed with Known Bugs|A test reaches the end of an automated run, with:

-   no errors/warnings encountered
-   failed checkpoints detected, but they are already marked as known [bugs](Bugs.html).

| |
|Not Finished|A test is started but it is unable to reach the end of an automated run. Note that, the number of automation errors/ warnings, and passed/failed checkpoints do not matter. Specifically:

-   A test run which is aborted explicitly because a test case timeout is reached is Not Finished. \([Learn more](../../TA_Automation/Topics/aut_stop_tests_after_timeout.html).\)
-   Automation runs which crash unexpectedly are Not Finished.
-   Automation errors occur and they are handled by the following built-in actions:
    -   [terminate](../../TA_Automation/Topics/bia_terminate.html)
    -   [exit test module](../../TA_Automation/Topics/bia_exit_test_module.html)
    -   [exit test case](../../TA_Automation/Topics/bia_exit_test_case.html)

|-   The legacy status, Aborted Test Cases, in the TA-TFS [result status mapping](ug_MTM_mapping_result_table.html) is automatically mapped to Not Finished.
-   If the automation playback is stopped, the test module's status is Not Finished and the last test case or the **Final** section's status is also Not Finished.
-   Not Finished supports inheritance. Specifically, if sub-result's status is Not Finished, the master result's status will be Not Finished.
-   For exit test module and exit test case, the overall result status, Not Finished, can be reconfigured in the exit status. \(For details, please refer to [exit test case](../../TA_Automation/Topics/bia_exit_test_case.html) and [exit test module](../../TA_Automation/Topics/bia_exit_test_module.html)\)

|
|Not Run|A test case has not started.|The legacy status, Skipped test case, in the TA-TFS[result status mapping](ug_MTM_mapping_result_table.html) is automatically mapped to Not Run.|

**Parent topic:**[Overview of test results](../../TA_Help/Topics/ug_test_results_introduction.html)

**Previous topic:**[Information tab](../../TA_Help/Topics/Test_result_information.html)

