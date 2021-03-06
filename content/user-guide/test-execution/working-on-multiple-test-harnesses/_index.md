--- 
title: "Working on multiple test harnesses"
linktitle: "Working on multiple test harnesses"
weight: 2
aliases: 
    - /TA_Help/Topics/Multiple_harnesses.html
---

How to run multiple test harnesses simultaneously with a single controller.

**Note:** Applies to TestArchitect [8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

A distinct advantage of running multiple harnesses is parallel testing. In sequential testing, you have little choice but to carry out tests one by one, but in parallel testing you can run a number of tests concurrently. The more tests you run at the same time, the less overall time you spend.

Suppose that you need to conduct three tests - named test \#1, test \#2 and test \#3 - on a single machine.

![](/images//Images/sequential_testing.png)

![](/images//Images/parallel_testing.png)

The illustrations explicitly show the parallel execution time is only one-third of the sequential execution time.

**Restriction:** As of the current release, there are some following constraints that you should keep in mind.

-   You are unable to run more than one GUI testing harness simultaneously. However, running a single GUI testing harness together with multiple non-GUI testing harnesses, such as, API/DB/CLI testing, etc. is allowable.
-   Running a harness in debug mode along with multiple harnesses using batch file\(s\) is allowable.
-   It is impossible to run a harness in debug mode first and then run more harness\(es\) in debug/ordinary/compilation mode.
-   Technically, you can run a harness in ordinary mode from TestArchitect Client first and then run another harness in debug mode. It is highly inadvisable to try this because it can cause unexpected functions.

1.  [Running multiple harnesses from TestArchitect Client](/TA_Help/Topics/Multiple_harnesses_running.html)  
Running multiple harnesses is to execute different test modules/suites with a single TA Controller simultaneously.
2.  [Creating a batch file to run multiple harnesses](/TA_Help/Topics/Multiple_harnesses_creating_batch_file.html)  
You can create a batch file that calls batch files to execute TestArchitect tests simultaneously.
3.  [Configuring harness pool size](/TA_Help/Topics/Multiple_harnesses_pool_size.html)  
TestArchitect allows you to determine the maximum allowable number of harnesses \(harness pool size\) running on a TestArchitect controller at a time.

**Parent topic:**[Test execution](/TA_Help/Topics/Test_exec.html)

**Previous topic:**[Methods of test execution](/TA_Help/Topics/Test_exec_methods.html)

**Next topic:**[Playback toolbar](/TA_Help/Topics/Test_exec_playback_toolbar.html)

