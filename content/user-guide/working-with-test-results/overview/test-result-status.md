--- 
title: "Test result status"
linktitle: "Test result status"
description: "The topic of this section contains information about detailed test result status."
weight: 7
aliases: 
    - /TA_Help/Topics/ug_test_results_status.html
keywords: "test results, status, status, test results, status, test results, passed, failed, passed with warnings, errors, passed with known bugs, not finished, not run"
---

The topic of this section contains information about detailed test result status.

|Result status|Description|Notes|
|-------------|-----------|-----|
|Passed|A test reaches the end of an automated run, with:<br><br>-   no errors/warnings encountered<br>-   all checkpoints are passed.<br><br>|When a test reaches the end, and no errors and no warnings have occurred; the test does not contain any checkpoints. The test is Passed.|<br>
|Failed|A test reaches the end of an automated run, with one or few checkpoints are failed.<br><br>| |<br>
|Passed with Warnings/Errors|A test reaches the end of an automated run, with:<br><br>-   one or few warnings/errors encountered<br>-   all checkpoints are passed.<br><br>|The most common use case for this result status is as follows: -   A test reaches the end of an automated run, one or several warnings occurred, no errors detected, and all checkpoints are passed.<br><br>|<br>
|Passed with Known Bugs|A test reaches the end of an automated run, with:<br><br>-   no errors/warnings encountered<br>-   failed checkpoints detected, but they are already marked as known [bugs](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/).<br><br>| |<br>
|Not Finished|A test is started but it is unable to reach the end of an automated run. Note that, the number of automation errors/ warnings, and passed/failed checkpoints do not matter. Specifically:<br><br>-   A test run which is aborted explicitly because a test case timeout is reached is Not Finished. \([Learn more](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout).\)<br>-   Automation runs which crash unexpectedly are Not Finished.<br>-   Automation errors occur and they are handled by the following built-in actions:<br>    -   [terminate](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/terminate)<br>    -   [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module)<br>    -   [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-case)<br><br>|-   The legacy status, Aborted Test Cases, in the TA-TFS [result status mapping](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/mapping-results-between-ta-and-tfs) is automatically mapped to Not Finished.<br>-   If the automation playback is stopped, the test module's status is Not Finished and the last test case or the **Final** section's status is also Not Finished.<br>-   Not Finished supports inheritance. Specifically, if sub-result's status is Not Finished, the master result's status will be Not Finished.<br>-   For exit test module and exit test case, the overall result status, Not Finished, can be reconfigured in the exit status. \(For details, please refer to [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-case) and [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module)\)<br><br>|<br>
|Not Run|A test case has not started.|The legacy status, Skipped test case, in the TA-TFS[result status mapping](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/mapping-results-between-ta-and-tfs) is automatically mapped to Not Run.|



