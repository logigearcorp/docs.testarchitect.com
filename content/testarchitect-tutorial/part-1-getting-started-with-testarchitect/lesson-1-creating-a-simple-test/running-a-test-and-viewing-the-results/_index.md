--- 
title: "Running a test and viewing the results"
linktitle: "Running a test and viewing the results"
description: "Now you will execute your test, then have a look at the results."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Running_a_test.html
keywords: "running tests, playback tools"
---

Now you will execute your test, then have a look at the results.

1.  With your test module displayed in the TestArchitect editor, click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

2.  Click **Execute** in the dialog box.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.

    Upon completion of execution, TestArchitect displays a page indicating the results of your test:

    ![](/images/TA_Tutorials/Images/tut.Simple_Tests.viewing.PNG)

    The run summary section at the top of the test results page shows high-level details regarding the execution run including test **Start time**, test **Duration**, details of the **Test environment**, and more.

    The **Test case summary** section offers a summary of the test, which in the case of this tutorial includes only a single test, TC01. Technically, the test passed - a result of Passed is recorded when no test actually fails, and since we didn't test anything, nothing failed.

    Test cases are listed next on the test result page. Because TC01 had no pass/fail-type checks, there is currently no information in the **Passed**, **Failed**, **Warning**, or **Error** columns.

    Clicking on the **View detailed result per test line** link opens the detailed test lines on a web browser. In the **Detailed Results** section, an entry is displayed for each executed action line. Use the **+** button to expand these results.

    ![](/images/TA_Tutorials/Images/tut.Simple_Tests.viewing.details.png)

    Any messages produced by the action line are displayed. As we have used the `report` action, the text of our argument \(hello world\) is listed as a message in the result.

    Congratulations, you have completed your first run of a TestArchitect test module.





**Related information**  


[Working with test results](/TA_Help/Topics/Test_result.html)

[Record and Playback](/TA_Help/Topics/ABT_record_playback.html)

[Playback toolbar](/TA_Help/Topics/Test_exec_playback_toolbar.html)

[Running the test](/TA_Tutorials/Topics/Running_the_test.html)

[Viewing the test results](/TA_Tutorials/Topics/Viewing_the_test_results_2.html)

[Viewing the test results](/TA_Tutorials/Topics/Viewing_the_test_results_2_Java.html)

