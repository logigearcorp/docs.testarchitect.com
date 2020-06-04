--- 
title: "Selecting iOS target devices at launch time"
linktitle: "Selecting iOS target devices at launch time"
weight: 1
aliases: 
    - /iOS/Topics/iOS_execution.html
---

The selection of which iOS devices are to execute a test can be made at the time the test is launched.

Ensure that the controllers for the hosts that you want to execute the test on are visible to the local host machine and/or registered with the [Lab Manager Server](/TA_Help/Topics/Lab_manager.html).

**Important:** iOS automation is only supported on Windows or macOS hosts.

1.  Select the test module you want to run, and then click **Execute** ![](/images//Images/TA_Help/Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

2.  In the **Test Modules** panel of the Execute Test dialog box, verify that the check boxes for the modules you want to execute are selected.

3.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

4.  In the Select Controller/Device dialog box, ensure that the IP and port number in the **Lab Manager Server** panel are correct. If not, click **Connect to other** and enter the IP and Port numbers of the Lab Manager Server.

5.  In the Controllers/Devices panel, expand the root node, if needed, and select the devices on which you want to perform the automated tests. If the controllers and/or devices you want to test on are not listed in the panel, and those controllers are visible to the local host machine, click **Add controller** and enter the host addresses of the controllers you want to add to the list.

    ![](/TA_Help/Images/Select_iOS_mobile_devices.png)

6.  Click **OK** in the Select Controller/Device dialog box, and select **Execute** in theExecute Test dialog box to begin executing tests on your selected mobile devices, or click [**Generate Batch File**](/images//Images/TA_Help/Topics/Test_exec_cmd_creating_batch_file.html) to launch your tests at a later point.


TestArchitect saves the settings on the Select Controller/Device dialog box and executes the test on the selected mobile devices. TestArchitect automatically adds devices executing tests to the device list in [Lab Manager](/images//Images/TA_Help/Topics/Lab_manager.html), and you can monitor the test progress there.

In order to run entire automated tests on multiple mobile devices concurrently, see [Running automated tests on multiple mobile devices](/TA_Automation/Topics/aut_app_testing_mobile_running_tests_multiple_devices.html).

**Parent topic:**[Starting iOS automated tests](/iOS/Topics/iOS_automated_tests_execution.html)

