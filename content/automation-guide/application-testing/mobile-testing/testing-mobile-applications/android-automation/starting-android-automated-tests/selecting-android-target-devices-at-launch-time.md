--- 
title: "Selecting Android target devices at launch time"
linktitle: "Selecting Android target devices at launch time"
description: "The selection of which Android devices are to execute a test can be made at the time the test is launched."
weight: 1
aliases: 
    - /Android/Topics/Android_execution_GUI.html
keywords: "Android, test execution, GUI, executing test, executing, Android test"
---

The selection of which Android devices are to execute a test can be made at the time the test is launched.You set up this configuration in the Execute Test dialog box, whether for [immediate \(online\) execution](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client), or [offline execution](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/offline-execution-the-test-execution-batch-file) via a batch file.

Ensure that the controllers for the hosts that you want to execute the test on are visible to the local host machine and/or registered with the [Lab Manager Server](/user-guide/lab-manager/).

{{<important>}} Android automation is only supported on Windows.

To run your automated tests from the Execute Test dialog box, carry out the following:

1.  Select the test module you want to run, and then click **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

2.  In the **Test Modules** panel of the Execute Test dialog box, verify that the check boxes for the modules you want to execute are selected.

3.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

4.  In the Select Controller/Device dialog box, ensure that the IP and port number in the **Lab Manager Server** panel are correct. If not, click **Connect to other** and enter the IP and Port numbers of the Lab Manager Server.

5.  In the Controllers/Devices panel, expand the root node, if needed, and select the devices on which you want to perform the automated tests. If the controllers and/or devices you want to test on are not listed in the panel, and those controllers are visible to the local host machine, click **Add controller** and enter the host addresses of the controllers you want to add to the list.

    ![](/images/TA_Help/Images/Select_Android_mobile_devices.png)

    {{<tip>}} You can also monitor your connected mobile devices from the [Lab Manager Server](/user-guide/lab-manager/).

6.  Click **OK** in the Select Controller/Device dialog box, and select **Execute** in theExecute Test dialog box to begin executing tests on your selected mobile devices, or click [**Generate Batch File**](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/creating-a-batch-file) to launch your tests at a later point.


TestArchitect saves the settings on the Select Controller/Device dialog box and executes the test on the selected mobile devices. TestArchitect automatically adds devices executing tests to the device list in [Lab Manager](/user-guide/lab-manager/), and you can monitor the test progress there.

In order to run entire automated tests on multiple mobile devices concurrently, see [Running automated tests on multiple mobile devices](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/running-automated-tests-on-multiple-mobile-devices).


