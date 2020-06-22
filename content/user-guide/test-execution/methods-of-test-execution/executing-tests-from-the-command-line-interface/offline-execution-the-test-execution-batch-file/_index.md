--- 
title: "Offline execution - The test execution batch file"
linktitle: "Offline execution - The test execution batch file"
description: "From a TestArchitect client session, you can generate a batch file that invokes the command line tool to perform your tests."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_batch_file.html
keywords: "executing tests from the command line, command line"
---

From a TestArchitect client session, you can generate a batch file that invokes the command line tool to perform your tests.

{{<note>}} The following content discusses the batch files that are typically created in the Windows environment, and hence uses commands and other keywords that are specific to Windows. The batch files created under Linux and macOS are, however, quite similar.

## Running on a single controller

In Windows, the generated batch file to execute a test only single controller has this form:

```
:TAExecute0
@echo off
title TestArchitect - Command Line Tool 

ta execute [TACommandLine.jar command line[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
 
exit
```

The Windows batch commands and keywords in the file are as follows:

-   **:TAExecute0**

    The colon \(:\) designates a batch file label which, in this case, is TAExecute0. Labels serve as reference points in a batch file for other lines in the file, usually as `go to` points. For a single-controller batch file, the label does not have any practical use. It does come into play for multiple-controller batch files, however, as will be discussed later.

-   **@echo off**

    Instructs the batch file interpreter not to display any future commands to the screen.

-   **title TestArchitect - Command Line Tool**

    The command line window's title is assigned the name TestArchitect - Command Line Tool.

-   **exit**

    Exit and close the command line/terminal.


## Running a test on multiple controllers

The Execute Test dialog box affords you the option to direct your test to be executed on [more than a single controller concurrently](/TA_Help/Topics/Test_exec_test_execution.html#li.exec_test_dlg.controllers_and_devices). When you generate a batch file for multiple controllers, TestArchitect loads it with separate TACommandLine lines which are identical except for the -c \( Machine name or IP address, and port number of the TestArchitect controller that is to run the test\) argument.

As an example, the Windows batch file for a three-controller test run might take the following form:

```
if not "%1" == "" goto :%1
start "TAExecute0" cmd /k "%~dpfx0" TAExecute0
start "TAExecute1" cmd /k "%~dpfx0" TAExecute1
exit

:TAExecute0
@echo off
title TestArchitect - Command Line Tool 

ta execute [TACommandLine.jar command line[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]

exit
:TAExecute1
@echo off  
title TestArchitect - Command Line Tool 

ta execute [TACommandLine.jar command line[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]

exit
```

Some of the lines not seen earlier include:

-   **if not "%1" == "" goto :%1**

    This allows for an optional parameter \(represented by `%1`\) to be passed to the batch file to allow it to execute on one and only one of the controllers specified within it. For example, were the above batch file to be named Calculation.bat, the command `Calculation.bat TAExecute2` would cause the test to run only on the controller specified in the last block of the batch file.

-   **start "TAExecute<Number\>" cmd /k "%~dpfx0" TAExecute<Number\>**

    Without delving into details, each start command launches a separate instance of Windows' cmd shell, which then launches the batch code for the TACommandLine execution for one of the specified controllers. By using start to launch each controller-specific test, you ensure that the three tests run asynchronously. \(Without start, each test would not begin until the one before it completed.\)


## Running a test on multiple mobile devices

As with multiple controllers, you can elect from the Execute Test dialog box to execute a test on multiple devices. The generated batch file looks similar to that of one of the above two cases \(depending upon whether one or multiple controllers are involved\). For each TACommandLine, an additional argument, -d, is applied, to specify one or more devices attached to the respective controller.

-   **/d "<Device Name 1\>;<Device Name 2\>"**

## Running multiple test modules

When you specify a [serial test run](/TA_Help/Topics/Test_exec_multiple_TM.html), a separate TACommandLine line is generated for each test module. \(One exception, discussed below, is when you specify a test suite and accept the default of running all test module sections and test cases.\) In the event that you are also specifying multiple hardware targets \(controllers or devices\), the number of command lines is multiplied accordingly. For example, we can expand on the above example of executing on three controllers by also specifying two test modules, tm01 and tm02:

```
:TAExecute0
@echo off 
title TestArchitect - Command Line Tool 
ta execute [TACommandLine.jar command line for tm01[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
ta execute [TACommandLine.jar command line for tm02[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
exit

:TAExecute1
@echo off
title TestArchitect - Command Line Tool 
ta execute  [TACommandLine.jar command line for tm01[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
ta execute  [TACommandLine.jar command line for tm02[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
exit

:TAExecute2
@echo off
title TestArchitect - Command Line Tool 
ta execute  [TACommandLine.jar command line for tm01[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
ta execute  [TACommandLine.jar command line for tm02[1](/TA_Help/Topics/Test_exec_batch_file.html#fn.tacommandline.ref)]
exit
```


1 For full details of the TACommandLine structure and its arguments, see [Command options](/TA_Help/Topics/Test_exec_cmd.html#section.ta_command_line.options).

