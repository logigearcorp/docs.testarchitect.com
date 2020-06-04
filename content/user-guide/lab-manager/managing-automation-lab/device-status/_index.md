--- 
title: "Device status"
linktitle: "Device status"
weight: 7
aliases: 
    - /TA_Help/Topics/Lab_manager_device.html
---

In a Lab Manager session, you can view the current status \(in real time or after-the-fact\) of each registered device, and mark devices for removal or test termination.

The device status is displayed on the **Devices** tab in Lab Manager. The status information may be sorted on any field, in ascending or descending order. Click the up or down arrows in any given column header to achieve this. Use the search box in the upper left-hand corner on the **Devices** tab, to search for and list device names matching the search string.

![](/images//Images/LM_device_status.png)

The fields, from left to right, are:

-   **Check box**: Check boxes are used to specify which device\(s\) you wish to apply a given action to. Prior to clicking on the **Remove** or **Terminate** button \(see [Lab Manager toolbar](Lab_manager_toolbar.html) for more actions\), check the boxes to the left of those devices you wish the operation to apply to. The uppermost check box may be used to select or clear all devices' check boxes.
-   **Device Name**: Name of the device as it is known on the network. The value within this field is a hyperlink, and clicking on it invokes a dialog box with detailed information on the given device and its environment. Below is an example of a device information dialog box:

    ![](/images//Images/LM_device_sample.png)

-   **Status**: current status of the device. Possible values for this field are:
    -   Idle: indicates that the device is not currently running any tests.
    -   Running: indicates that a test run is in progress on the given device.
    -   Automation Error: indicates that the most recent test run encountered an error or warning condition of sufficient severity for it execution to be halted.
    -   Cannot Connect: indicates that Lab Manager is no longer able to communicate with the device.
-   **Controller**: The TestArchitectcontroller running on the machine to which the device is attached.
-   **Logical Name**: The logical name assigned to the device by the built-in action [assign device](/TA_Automation/Topics/bia_assign_device.html) assign device in the test procedure.
-   **Model**: The manufacturer's model name of the device.
-   **Platform**: The device's operating system.
-   **Latest Result**: This column group presents a running tally of the numbers of **Passed, Failed, Ignored Fails, Warnings**and**Errors** while the harness is in progress or, as the case may be, a final tally of the results of the most recent harness run.
-   **Execution information**: As with **Result**, it shows the running tallies of the harness run \(**Status** = Running\) as well as post-run information on the most recent harness run. This field is further divided into subfields:
    -   **Test Modules**: Consists of two figures - a numerator and a denominator. The value of the denominator is the total number of test modules in the harness. During a harness run, the value of the numerator indicates the ordinal value of the test module currently running. \(For example, a display of 3/7 indicates that the third module in a batch of 7 modules is currently running.\) If a harness completes without premature termination, the value of the numerator matches that of the denominator. In the event of an automation error, loss of connection, or user termination of the test run, the value of the numerator indicates the latest test module being executed at the time of the faulty event.
    -   **Test Cases**: As with test modules, the value of the denominator indicates the total number of test cases in the harness run, while the value of the numerator indicates which test case is currently running \(**Status** = Running\), or which test case was last run.
    -   **Duration**: Overall elapsed execution time of the harness run is formatted in **hours:minutes:seconds**
    -   **Current action duration**: Elapsed execution time for the currently running test case or test module.

**Parent topic:**[Managing automation lab](/TA_Help/Topics/Lab_manager_managing_auto_lab.html)

**Previous topic:**[Controller status](/TA_Help/Topics/Lab_manager_controller.html)

