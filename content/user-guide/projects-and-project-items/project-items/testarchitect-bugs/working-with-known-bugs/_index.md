--- 
title: "Working with known bugs"
linktitle: "Working with known bugs"
description: "Known bugs indicate where fails in a test have been recognized so that those fails are ignored in subsequent automation run results. The Ignore known bug feature helps you obtain test results from test runs that are not cluttered up with fails from known bugs, thus rendering the results easier to analyze."
weight: 2
aliases: 
    - /TA_Help/Topics/Bugs_working_known_bug.html
keywords: "known bugs, bugs, working with known bugs"
---

Known bugs indicate where fails in a test have been recognized so that those fails are ignored in subsequent automation run results. The Ignore known bug feature helps you obtain test results from test runs that are not cluttered up with fails from known bugs, thus rendering the results easier to analyze.

Often fails occur in an automation run because of AUT bugs. In large scale test results, it may take time to determine why those fails took place and rectify the problem. Much debugging time can be saved if those fails can be ignored in subsequent automation runs, without the necessity of editing test modules or creating special variations to deal with what may well be a transient condition.

A feature called **Mark As Known Bug** offers the ability to associate an action line in a test module with a TA bug. When such as association is made, the parent test case and parent test module of that action line are associated with the TA bug as well.

**Note:** The action lines that declare the TEST CASE, INITIAL and FINAL divisions of a test module may also be marked as having known bugs. Note that **Mark As Known Bug** has no effect on test objective action lines, since test objectives are not directly associated with test results.

As an example, let us say that in a first automation run, we have 20 fails reported in the test results. In the next run, the test results reveal 30 fails. Unless we go through the time-consuming process of carefully examining the test results, we have no knowledge of whether the 30 new fails consist of the 20 old ones plus 10 new fails, or if all 30 fails are completely new, or if the reality is somewhere in between.

With the aid of **Mark As Known Bug**, the 20 fails from the first test run can be marked immediately following the run. This ensures that they will be unreported in the results of subsequent test runs. Consequently, we are able to examine the results of the second run with the knowledge that any fails are *new* fails.

It should be understood that marked bugs do not affect the flow of execution of a test. The action lines associated with a marked bug are still executed as before. The only effect a marked bug has is that the particular result associated with it is omitted from the standard test results display.

That said, the reality is that TestArchitect does, in fact, take note of the outcomes of tests that are marked as known bugs. These are reported in the [Known bug summary](/TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html) section of the test results, separate from the main body. This reporting aids you in deciding whether, and how, the status of each given bug should be changed.

1.  [Tracking known bugs](/TA_Help/Topics/Bugs_working_known_bug_marking.html)  
Known bugs in a test may be flagged, or marked. Marking known bugs allows the fails associated with the bugs to be ignored, so that they are not counted in test results.
2.  [Reviewing test results with known bugs](/TA_Help/Topics/Bugs_working_known_bug_reviewing_test_results.html)  
Reviewing test results can assist you in determining if and when JIRA bug issues on a JIRA server should be closed.
3.  [Removing known bugs](/TA_Help/Topics/Bugs_working_known_bug_removing.html)  
Removed known bug marks from action lines when they are no longer needed.
4.  [Viewing bugs related to a test module or test case](/TA_Help/Topics/Bugs_viewing_related_bugs.html)  
If an action line in a test module is marked with a TA bug, the parent test case and test module are also marked with that TA bug. You have option to view all the TA bugs which are exposed by the parent test modules/test cases.




