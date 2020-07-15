--- 
title: "Controller management"
linktitle: "Controller management"
description: "Test automation is managed by the TestArchitect Controller application, which interacts with and obtains vital test run information from the interpreter. A machine on which TestArchitect Controller is running is referred to as a controller."
weight: 12
aliases: 
    - /TA_Help/Topics/Controller_management.html
keywords: "controllers, TestArchitect, TestArchitect controllers"
---

Test automation is managed by the TestArchitect Controller application, which interacts with and obtains vital test run information from the interpreter. A machine on which TestArchitect Controller is running is referred to as a controller.

In addition to managing an automated test on a local application, or on one or more devices connected to the controller machine, the TestArchitect Controller software on a given machine can manage multi-station testing in which it directs the activities of one or more deputy controllers.

The TestArchitect Controller software can manage automated testing of a local application, or of an application running on one or more devices connected to the controller machine. In addition, TestArchitect Controller on a given machine can manage multi-station testing, in which one or more deputy controllers are directed in their test activities, in either a [serial or parallel synchronous mode of execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/), also known as lead-deputy.

From the standpoint of the host OS, the controller is a service \(or daemon\).

The controller manages the execution of tests, with functions such as:

-   Validating licenses.
-   Starting runs.
-   Signaling abnormal termination of a run.
-   Collecting progress information, including logging and results.
-   Providing action definitions and interface definitions to the test on a "just in time" basis.
-   Handling multi-station \(lead-deputy\) testing.
-   Providing functions for a debugger, like pausing and stepping.

## Working on the TestArchitect Controller dialog box  

The TestArchitect Controller dialog box displays detailed execution information or compilation information that occurs on the local machine controller depending on whether you are executing or compiling a test.

To open the dialog box,

-   Double-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Windows notification area.
-   Alternatively, right-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Windows notification area. Next, select **Show information** from the context menu.

![](/images/TA_Help/Images/ug_TA_controller_dlg1.png)

A drop-down list box in the dialog box contains the following information:

-   TestArchitect Controller, as well as the [compilation data](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client#li.compilation_mode) of a test.
-   All the harnesses actively running on the connected devices or local controller.

    {{<note>}} Applies to TestArchitect [8.4](/user-guide/version-history/features-added-to-testarchitect-8-4/) and higher.


![](/images/TA_Help/Images/TA_Controller_dlg_dropdown_list.png)

## Naming convention for harnesses

The name of a harness is formed by combining the result name with the timestamp and request ID:

```
<Result name> (<timestamp>)- <request ID>
```

-   Result name: Name of a test when it is executed on the TestArchitect Controller. Conventionally, the test name is given to the result name. You can set the [**Result Name**](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client#result_name) on the **General** tab in the Execute Test dialog box.
-   Timestamp: Date and time when the test is executed. The date is written in yyyy-mm-dd format and the time in hh.nn.ss format.
-   Request ID: A string generated when the TestArchitect Controller prepares data for test run\(s\).

{{<tip>}} If a harness' name is too long to be displayed fully, hover your mouse over this harness to view a tooltip of its complete name.

For example:

```
MultipleReservations (2018-07-03 11.09.47)- bmmtiq0jok0f
```

Where

-   MultipleReservations: Result name.
-   2018-07-03 11.09.47: Timestamp.
-   bmmtiq0jok0f: Request ID.

1.  [Controller Settings](/user-guide/controller-management/controller-settings)  
You can change controller settings via the TestArchitect Controller icon on the system tray.
2.  [Starting TestArchitect Controller](/user-guide/controller-management/starting-testarchitect-controller)  
How to launch the TestArchitect Controller
3.  [Starting TestArchitect Controller from a command line interface](/user-guide/controller-management/starting-testarchitect-controller-from-a-command-line-interface)  
you are able to start TestArchitect Controller with a new port from a command line interface using either TAController or TACTRL command.
4.  [Changing a TestArchitect Controller port number](/user-guide/controller-management/changing-a-testarchitect-controller-port-number)  
TestArchitect Controllers use a default port number of 53600. You can reassign a controller to any valid port number of your choice, so long as the port is not already in use.
5.  [Changing command line port](/user-guide/controller-management/changing-command-line-port)  
TestArchitect supports users in changing the TA command line port number to resolve port conflicts.




**Related information**  


[Connection retry configuration](/administration-guide/connections/connection-retry-configuration)

