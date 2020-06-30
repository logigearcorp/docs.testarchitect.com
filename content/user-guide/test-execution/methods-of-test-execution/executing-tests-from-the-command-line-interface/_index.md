--- 
title: "Executing tests from the command line interface"
linktitle: "Executing tests from the command line interface"
description: "With TestArchitect's command line tool, tests can be launched from a command shell. When incorporated into batch files, the tool greatly extends the flexibility of test execution, especially from the standpoint of scheduling."
weight: 4
aliases: 
    - /TA_Help/Topics/Test_exec_cmd.html
keywords: "executing tests from the command line, command line"
---

With TestArchitect's command line tool, tests can be launched from a command shell. When incorporated into batch files, the tool greatly extends the flexibility of test execution, especially from the standpoint of scheduling.

You are probably already familiar with the typical means by which automated tests are invoked, a method we call online execution. You create a test, or set of tests, open the Execute Test dialog box to configure any options, then run the tests from there.

The command line tool - ta execute - allows you to execute tests from your host operating system's command line interface. By itself, this capability may not be very useful. But TestArchitect also exploits this feature by enabling you to generate batch files that run the command line tool, configured to execute your tests. These batch files may in turn be launched automatically from other programs, for example as part of a nightly build process. \([Learn more](/user-guide/testarchitect-command-line-tool/execute-command)\)

A typical ta execute to invoke the execution of a single TestArchitect test module might appear as follows:

```
:TAExecute0
@echo off 
title TestArchitect - Command Line Tool 
ta execute -ls "lgvn14254:14101" -rep "SampleRepository" -prj "Car Rental" -u "administrator" -p "048484B545D" 
-t "/Action-based Testing Basics/User Interface Tests/UI Elements" -rs "lgvn14740.logigear.com:53400" 
-c "localhost:53600" -kwd "spanish" -lv "Browser:Internet Explorer" -rev "08/09/2017 14:40:32.694+0700" 
-ss "case sensitive=bis=no;language=uds=English" -cc "Passed;Failed;Warning/Error" -cl "3" 
-r "UI Elements" -x "D:\results" -html "D:\results" -subfld "1" -subhtml "1" -htmlscrn "1" 
-tares "D:\results" -subtares "1" -taresscrn "1" -xsl "C:\Program Files\LogiGear\TestArchitect\templates\xsl" 
-up "/Car Rental/Results/{today}" -upc "Failed,Passed,Passed with Warnings/Errors,Passed with known bug" 
-tscript "{INSTALL_DIR}/BinClient/taplayback.exe" -tpath "{INSTALL_DIR}/binclient/taplayback.exe" 
exit
```

-   **[Offline execution - The test execution batch file](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/offline-execution-the-test-execution-batch-file)**  
From a TestArchitect client session, you can generate a batch file that invokes the command line tool to perform your tests.
-   **[Creating a batch file](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/creating-a-batch-file)**  
How to have TestArchitect generate a test execution batch file for you, with all the arguments set in accordance with your preferences.




**Related information**  


[Configuring and running tests from TestArchitect Client](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client)

[Multiple device execution](/user-guide/test-execution/methods-of-test-execution/multiple-device-execution/)

[Startup settings](/user-guide/test-execution/startup-settings/)

