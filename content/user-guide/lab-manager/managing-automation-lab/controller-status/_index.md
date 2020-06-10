--- 
title: "Controller status"
linktitle: "Controller status"
weight: 6
aliases: 
    - /TA_Help/Topics/Lab_manager_controller.html
---

You can view, within a Lab Manager session, the current status of each registered controller, including the results of test runs \(both after-the-fact and in real time\) and other information. You can also abort tests on individual controllers, and remove controllers from the session.

Controller status is displayed on the **Controllers** tab in Lab Manager. The status information may be sorted by any column in ascending or descending order. Click the up or down arrows in the desired column header to achieve this. Use the search box in the upper left-hand corner on the **Controllers** tab to search for and list machine names matching the search string.

![](/images//Images/Lab_manager_controller_table.png)

## The **Controller** table

The fields, from left to right, in the **Controller** table are:

-   **Check box**: Check boxes are used to specify which controller\(s\) you wish to apply a given action to. Prior to clicking on the **Remove** or **Terminate** button \(see [Lab Manager toolbar](/TA_Help/Topics/Lab_manager_toolbar.html) for more actions\), check the boxes to the left of those controllers you wish the operation to apply to. The uppermost check box may be used to select or clear all controllers' check boxes.
-   **Plus/Minus** \(**+**/**-**\) signs: The plus sign is used for expanding the controller to display the harnesses run by the controller. The minus sign, on the contrary, is used for collapsing the controller to hide the harnesses.
-   **Machine Name**: Name of the controller machine as it is known on the network. \(Note that this may specify a virtual machine.\) The value within this field is a hyperlink, and clicking on it invokes a dialog box with detailed information on the given controller and its environment. Below is an example of a controller information dialog box:

    ![](/images//Images/lab_manager_machine_info.png)

-   **Host Address**: IP address of the controller machine followed by its port number, separated by a colon.
-   **Number of Harnesses**: The number of running harnesses on the given controller.
-   **Status**: Current status of the controller. Possible values for this field are:
    -   Idle: Indicates that the controller is not currently running any harnesses.
    -   Running: Indicates that the controller is running at least one harness.
    -   Automation Error: Indicates that at least one harness running the controller has encountered an automation problem.
    -   Failed to Connect: Indicates that the Lab Manager is no longer able to communicate with the controller. All of its running harnesses get the **Failed to Connect** status also.
-   **Label**: Alias, if any, that has been assigned to the controller. \([Learn more](/TA_Help/Topics/Lab_manager_self_registering.html#choice.label).\)

## The **Harness** sub-table

Containing a list of harnesses run by a specific controller, the sub-table appears when you click the plus \(+\) sign next to the controller name in the **Controller** table. The **Harness** sub-table consists of the following fields:

-   **Harness Name**: the test run name, followed by a timestamp and a request ID. The request ID is generated when the TestArchitect Controller prepares data for a harness run.
-   **Status**: current status of the harness. Possible values for the fields are:
    -   **Running**: Indicates that the harness is running.
    -   **Failed to connect**: Indicates the Lab Manager is no longer able to communicate with the controller on which the harness is running.
    -   **Automation Error**: Indicates that the harness encountered an automation problem.
-   **Result**: This column group presents a running tally of the numbers of **Passed, Failed, Ignored Fails, Warnings**and**Errors** while the harness is in progress or, as the case may be, a final tally of the results of the most recent harness run.
-   **Execution information**: As with **Result**, it shows the running tallies of the harness run \(**Status** = Running\) as well as post-run information on the most recent harness run. This field is further divided into subfields:
    -   **Test Modules**: Consists of two figures - a numerator and a denominator. The value of the denominator is the total number of test modules in the harness. During a harness run, the value of the numerator indicates the ordinal value of the test module currently running. \(For example, a display of 3/7 indicates that the third module in a batch of 7 modules is currently running.\) If a harness completes without premature termination, the value of the numerator matches that of the denominator. In the event of an automation error, loss of connection, or user termination of the test run, the value of the numerator indicates the latest test module being executed at the time of the faulty event.
    -   **Test Cases**: As with test modules, the value of the denominator indicates the total number of test cases in the harness run, while the value of the numerator indicates which test case is currently running \(**Status** = Running\), or which test case was last run.
    -   **Duration**: Overall elapsed execution time of the harness run is formatted in **hours:minutes:seconds**
    -   **Current action duration**: Elapsed execution time for the currently running test case or test module.

**Parent topic:**[Managing automation lab](/TA_Help/Topics/Lab_manager_managing_auto_lab.html)

**Previous topic:**[Registering devices](/TA_Help/Topics/Lab_manager_registering_device.html)

**Next topic:**[Device status](/TA_Help/Topics/Lab_manager_device.html)

