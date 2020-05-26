--- 
title: "Asynchronous remote execution"
linktitle: "Asynchronous remote execution"
weight: 1
aliases: 
    - /TA_Help/Topics/Test_exec_remote_asynchronous.html
---
# Asynchronous remote execution {#Test_exec_remote_asynchronous .task}

Asynchronous testing allows you to run a test on multiple remote controllers.

Ensure that the controllers for the hosts that you want to execute the test on are visible to the local host machine and/or registered with the [Lab Manager Server](Lab_manager.html).

Remote execution is initiated by the operator at runtime and requires no special action lines. Any test which can run on a single machine can be designated to run on multiple hosts under asynchronous execution. All remote test executions are independent of each other.

To execute a test on one or more remote machines:

1.  Select the test module you want to run, and then click **Execute** ![](../../reuse/../TA_Help/Images/btn.TAC_toolbar.Execute.png) on the TestArchitect toolbar.

2.  In the **Test Modules** panel of the Execute Test dialog box, verify that the check boxes for the modules you want to execute are selected.

3.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

4.  In the Select Controller/Device dialog box, ensure that the IP and port number in the **Lab Manager Server** panel are correct. If not, click **Connect to other** and enter the IP and Port numbers of the Lab Manager Server.

    The controllers in the **Controllers/Devices** panel use the following naming syntaxes:

    -   Local controller: `<name of controller> {<IP address>:<port number>} (localhost)`
    -   Remote controller: `<name of controller> {<IP address>:<port number>}`
    ![](../../reuse/../TA_Help/Images/Select_remote_controllers.png)

5.  On the Controllers/Devices panel, select the remote controllers where you want to execute the test.

    If the remote controller you want to run is not listed in the Controllers/Devices panel, and that controller is visible to the local host machine, click **Add controller**. Enter the host address of the controller, followed by its controller port number, separated by a colon.

    **Tip:** Multiple controllers separated by semicolons can be added simultaneously to the list, as illustrated below:

    ![](../Images/Add_controller.png)

    **Note:** If the remote controller's port number is [changed](Controller_changing_port.html) to a different value, you must reconfigure that controller port number in the Controllers/Devices panel. Enter the correct port number into the **Port** box in the Controller Port Configuration panel, then clicking **Save** ![](../Images/Save_btn_port_configuration.png).

6.  Click **OK** in the Select Controller/Device dialog box, and select **Execute** in theExecute Test dialog box, to begin executing the remote tests.


TestArchitect saves the settings in the Select Controller/Device dialog box and executes the test on designated remote hosts. The same settings are used as the default for subsequent test executions.

TestArchitect automatically adds controllers executing tests to the controller list in [Lab Manager](Lab_manager.html), and you can monitor the test progress there.

**Parent topic:**[Remote test execution](../../TA_Help/Topics/Test_exec_remote.html)

**Next topic:**[Synchronous remote execution](../../TA_Help/Topics/Test_exec_remote_synchronous.html)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.html)

