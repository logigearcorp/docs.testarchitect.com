--- 
title: "Troubleshooting multiple device execution"
linktitle: "Troubleshooting multiple device execution"
description: "Typical issues that you may encounter when executing tests on multiple devices, and possible solutions."
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_multiple_device_execution_troubleshooting.html
keywords: "executing tests, multiple devices, troubleshooting, multiple devices, troubleshooting"
---

Typical issues that you may encounter when executing tests on multiple devices, and possible solutions.

**Handling automation problems during concurrent testing on multiple devices.**

In some special cases, such as the test failing to find the target AUT \(application under test\), an automation exception occurs, causing execution on the device to be suspended, and an Automation Problem dialog box to appear:

![](/images/TA_Help/Images/Automation_problem_dialog_box.png)

At this point, you can click the **Debug** button in the Automation Problem dialog box to enter debug mode.

{{<tip>}}

-   Debug mode can only be applied to one device at a time. Before bringing a second device into debug mode, you must wait until the device currently in debug mode exits that state.
-   To abort execution on a device which is encountering an automation problem, click the **Stop** button in the Automation Problem dialog box.
-   To skip the action line on a device which is reporting an automation problem, then resume executing the next action lines, click the **Continue** button in the Automation Problem dialog box.

**What happens if, in the Execute Test dialog box, we have specified that the test is to execute on device A, but the test procedure itself invokes built-in action [use device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-device) to specify that execution is to take place on device B?**

The use device built-in action overrides any device specified in the Execute Test dialog box. For example, after selecting device A and clicking the **Execute** button on the dialog box, the test is executed on device A. The automated test runs on device A until it meets the action use device defined in the test procedure. At this time, the automation stops running on device A, and TestArchitect logically connects to device B and makes that device the target device for resuming the remaining automated test.


