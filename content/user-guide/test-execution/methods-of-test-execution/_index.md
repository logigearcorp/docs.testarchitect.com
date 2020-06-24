--- 
title: "Methods of test execution"
linktitle: "Methods of test execution"
description: "The are numerous methods of executing automated tests."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_methods.html
keywords: "executing, methods of test execution"
---

The are numerous methods of executing automated tests.

{{<caution>}}

For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)

1.  [Configuring and running tests from TestArchitect Client](/TA_Help/Topics/Test_exec_test_execution.html)  
From a TestArchitect Client session, tests can be configured with the Execute Test dialog box.
2.  [Executing specific test cases](/TA_Help/Topics/Test_exec_specific_TC.html)  
Specific test case\(s\) can be selected to execute within a test module.
3.  [Executing multiple test modules](/TA_Help/Topics/Test_exec_multiple_TM.html)  
There are several means of running multiple test modules sequentially within a test run.
4.  [Executing tests from the command line interface](/TA_Help/Topics/Test_exec_cmd.html)  
With TestArchitect's command line tool, tests can be launched from a command shell. When incorporated into batch files, the tool greatly extends the flexibility of test execution, especially from the standpoint of scheduling.
5.  [Remote test execution](/TA_Help/Topics/Test_exec_remote.html)  
The TestArchitect system allows you to launch a test on remote hosts and/or devices attached to the hosts, provided that each host has a TestArchitect Controller installed.
6.  [Multiple device execution](/TA_Help/Topics/Test_exec_multiple_device_execution.html)  
An automated test can be run on multiple devices attached to a local host, and/or on multiple controllers, and/or on multiple devices attached to the controllers.
7.  [Running tests with multiple remote desktop sessions](/TA_Help/Topics/Test_exec_multiple_remote_desktop_sessions.html)  
TestArchitect provides you the capability to execute tests with multiple remote desktop sessions.



