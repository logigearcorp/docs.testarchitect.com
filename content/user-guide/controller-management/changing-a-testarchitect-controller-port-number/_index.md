--- 
title: "Changing a TestArchitect Controller port number"
linktitle: "Changing a TestArchitect Controller port number"
description: "TestArchitect Controllers use a default port number of 53600. You can reassign a controller to any valid port number of your choice, so long as the port is not already in use."
weight: 4
aliases: 
    - /TA_Help/Topics/Controller_changing_port.html
keywords: "controllers, changing port number, controller, changing port"
---

TestArchitect Controllers use a default port number of 53600. You can reassign a controller to any valid port number of your choice, so long as the port is not already in use.

Ensure that the port number you want to switch to is available and that the TestArchitect Controller is in an idle state.

To change the controller's port number:

1.  If not already running, start the [TA Controller](/TA_Help/Topics/Controller_starting.html).

2.  Ensure that TestArchitect is not executing any test. Terminate any running test or wait for the running test to finish.

    {{<note>}} The controller is in an idle state when TestArchitect is not running any test.

3.  Open the TestArchitect Controller dialog box:

    -   On Windows:
        -   Double-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Notification area.
        -   Alternatively, right-click the icon, then select **Show information**.
    -   On Linux:
        -   Double-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Notification area.
        -   Alternatively, right-click the icon, then select **Show information**.
    -   On macOS:
        -   Right-click the **TestArchitect Controller** ![](/images/TA_Help/Images/TA_controller_icon.png) icon in the Status menu.
        -   Alternatively, click the icon, then select **Show information**.
4.  In the TestArchitect Controller dialog box, click **Change port** to change the controller's communication port.

    ![](/images/TA_Help/Images/TA_controller_dlg.png)

5.  In the Change Controller port dialog box, enter a valid port number and click **OK**.

    ![](/images/TA_Help/Images/Change_controller_port_dlg.png)

    A message box appears to indicate if the port number change is successful.


After changing the TestArchitect Controller port number, the port numbers on all TestArchitect clients connected to the controller must also be updated accordingly. These clients include:

-   Remote TestArchitect clients.
-   Lab Manager sessions \(if any\), with which the given controller is registered, are notified to update to the new port number.
-   Batch files referencing the old controller port number must be regenerated to utilize the new number.




**Related information**  


[Registering controllers](/TA_Help/Topics/Lab_manager_registering.html)

[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

