--- 
title: "Multiple device execution"
linktitle: "Multiple device execution"
description: "An automated test can be run on multiple devices attached to a local host, and/or on multiple controllers, and/or on multiple devices attached to the controllers."
weight: 6
aliases: 
    - /TA_Help/Topics/Test_exec_multiple_device_execution.html
keywords: "executing tests, multiple devices, execution"
---

An automated test can be run on multiple devices attached to a local host, and/or on multiple controllers, and/or on multiple devices attached to the controllers.

Ensure that the controllers for the hosts or devices that you want to execute the test on are visible to the local host machine and/or registered with the [Lab Manager Server](/TA_Help/Topics/Lab_manager.html).

To execute a test on one or more devices:

1.  Select the test module you want to run, and then click **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

2.  In the **Test Modules** panel of the Execute Test dialog box, verify that the check boxes for the modules you want to execute are selected.

3.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

    ![](/images/TA_Help/Images/Select_controllers_devices.png)

4.  In the Select Controller/Device dialog box, ensure that the IP and port number in the **Lab Manager Server** panel are correct. If not, click **Connect to other** and enter the IP and Port numbers of the Lab Manager Server.

    The information displayed on the Lab Manager Server panel is obtained from your local Lab Manager server.

    {{<note>}}

    -   The main branches under the root node are controllers \(marked with the icon ![](/images/TA_Help/Images/Controller_icon.png)\), and the subnodes of a controller are devices that physically attached to that controller.
    -   Right-click on the device platform \(Android or iOS\) node, and select **Sort** from the context menu to sort the names of attached devices \(child nodes\) in alphabetical order.
    The controllers and devices on the **Controllers/Devices** panel frame use the following naming syntaxes:

    -   Local controller: `<name of controller> {<IP address>:<port number>} (localhost)`
    -   Remote controllers:`<name of controller> {<IP address>:<port number>}`
    -   Devices: `<name of device> (<device's ID>)`
5.  On the Controllers/Devices panel, expand the root node, if needed, and select the devices on which you want to execute the tests.

    {{<restriction>}}

    -   A test can be run on a remote controller host, or on the devices attached to that controller, but not on both.
    -   It is not possible to run different test cases belonging to a given test module on multiple devices.
    -   If a device is currently busy, meaning that the device is already undergoing an automated test, that device will be highlighted in gray and it will not be possible to select it.
    {{<tip>}} The device list for a controller is loaded only once, when the node of that controller is expanded for the first time. Collapsing and expanding the controller node will not refresh its device list. To update the device list for a specific controller, right-click on that controller node and select **Refresh** from the context menu.

6.  Click **OK** on the Select Controller/Device dialog box, then select **Execute** on the Execute Test dialog box to execute the tests.


TestArchitect saves the settings on the Select Controller/Device dialog box and executes the test on designated remote hosts. The same settings are used as the default for the next test execution.

TestArchitect automatically adds controllers/devices executing tests to the controller/device list on the [Controller status](/TA_Help/Topics/Lab_manager_controller.html) and [Device status](/TA_Help/Topics/Lab_manager_device.html), and you can monitor the test progress there.

{{<warning>}} If the controllers/devices executing tests have been already registered to another Lab Manager server, TestArchitect will not add those controllers/devices automatically to the controller/device list on your local Lab Manager server.

{{<note>}} The selected devices are written as new parameters when you generate a batch file. The parameter `-devices` is written to the batch file. \([Learn more](/TA_Help/Topics/Test_exec_cmd.html).\)

-   **[Troubleshooting multiple device execution](/TA_Help/Topics/Test_exec_multiple_device_execution_troubleshooting.html)**  
Typical issues that you may encounter when executing tests on multiple devices, and possible solutions.




**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

