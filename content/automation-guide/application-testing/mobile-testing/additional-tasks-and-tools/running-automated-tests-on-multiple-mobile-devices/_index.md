--- 
title: "Running automated tests on multiple mobile devices"
linktitle: "Running automated tests on multiple mobile devices"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_running_tests_multiple_devices.html
---

It is important to test a mobile application on different devices \(smartphones, tablets, phablets, etc.\) to ensure that it behaves in a consistent and correct manner on all of them. TestArchitect allows an automated test to run on multiple mobile devices concurrently.

Ensure that the controllers for the mobile devices on which you want to execute the automated test are visible to the local host machine and/or registered with the [Lab Manager Server](/TA_Help/Topics/Lab_manager.html).

To execute an automated test on multiple mobile devices:

1.  Select the test module you want to run, and then click **Execute** ![](/images//Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

2.  In the **Controllers/Devices** panel, click the **Select Controllers and Devices** button.

3.  In the Controllers/Devices panel of the Select Controller/Device dialog box, expand the root node, and select those mobile devices on which you want to execute the automated test.

    ![](/images//Images/Select_multiple_mobile_devices.png)

    **Tip:** The device list for a controller is loaded only once, when the node of that controller is expanded for the first time. Collapsing and expanding the controller node will not refresh its device list. To update the device list for a specific controller, right-click on that controller node and select **Refresh** from the context menu.

4.  Click **OK** on the Select Controller/Device dialog box, then select **Execute** on the Execute Test dialog box to execute the automated test.


**Parent topic:**[Additional tasks and tools](/TA_Automation/Topics/aut_app_testing_mobile_additional_tasks.html)

**Previous topic:**[Capturing screenshots of a mobile device](/TA_Help/Topics/ug_capturing_mobile_screenshot.html)

**Next topic:**[Executing cross-platform mobile automated tests](/TA_Automation/Topics/Mobile_automation_FAQ_variations_cross_platform.html)

**Related information**  


[Multiple device execution](/TA_Help/Topics/Test_exec_multiple_device_execution.html)

