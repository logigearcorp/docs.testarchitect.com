--- 
title: "Lab Manager toolbar"
linktitle: "Lab Manager toolbar"
description: "The Lab Manager toolbar consists of several buttons for managing the controllers/devices, test runs, and the display."
weight: 1
aliases: 
    - /TA_Help/Topics/Lab_manager_toolbar.html
keywords: "Lab Manager, Toolbar, Toolbars"
---

The Lab Manager toolbar consists of several buttons for managing the controllers/devices, test runs, and the display.

Only users with **administrator** privileges have access to all buttons. For **non-administrators**, only the **Refresh** button is visible.

![](/images/TA_Help/Images/LabManager_Toolbar_minimal_labeled.png)

-   **Refresh**: To conserve resources, the Lab Manager screen updates only when the user manually clicks this button. Please note that clicking the **Refresh** button is not equivalent to clicking the browser's refresh. A Lab Manager **Refresh** causes the Lab Manager application to query all the listed controllers/devices for an update on their respective statuses. A minimum refresh period \(configurable by those with **administrator** rights\) is imposed between each refresh, and hence the **Refresh** button is disabled during this **Refresh Latency** period, which can be set from the **Configuration** button.
-   **Add Controller**: Add a controller to the Controller Status Monitor \(see [Registering controllers](/TA_Help/Topics/Lab_manager_registering.html)\). Devices physically attached to a controller are not added automatically to the device list. Click **Refresh** to update the controller/device list.
-   **Add Device**: Add a device to the Device Status Monitor. Use this option when you need to add a device after the device's controller has been registered with the Lab Manager session.
-   **Move Controller:** Move the chosen controller from one Lab Manager session to another. All devices attached to the moved controller are removed from the device list in the existing Lab Manager session, and those devices are not added automatically to the destination Lab Manager.

    {{<note>}} You are unable to move running harnesses.

-   **Remove Controller/Device**: Remove one or more controllers/devices from the Controller Status Monitor. In the leftmost column of the display, select the check boxes of all the controllers/devices to remove, and then select **Delete**.

    {{<note>}} You are unable to remove running harnesses.

-   **Terminate**: Terminate the running harnesses\(s\).
    -   To terminate one or more than one harness running on a specific TestArchitect Controller, click the plus sign \(+\) corresponding to the controller in the **Controller** table. Select the check box\(es\) for the running harness\(es\) to be terminated in the **Harness** sub-table. Click the **Terminate** button on the **Lab Manager** toolbar.

        ![](/images/TA_Help/Images/Terminate_harness_Lab_manager.png)

        {{<tip>}}

        -   To terminate all the harnesses quickly, running on a given TestArchitect Controller, you can also select the appropriate controller, and then click the **Terminate** button on the **Lab Manager** toolbar.

            ![](/images/TA_Help/Images/Terminate_a_controller_Lab_manager.png)

        -   To terminate all the harnesses running on every TestArchitect Controller, select the check box on the column header in the **Controller** table, and then click the **Terminate** button on the **Lab Manager** toolbar.

            ![](/images/TA_Help/Images/Terminate_controllers_Lab_manager.png)

-   **Configuration**: Invoke the Server Configuration dialog box, which allows you to specify the **Refresh Latency** period applicable to this Lab Manager session and highlight controllers that have been registered to the session:

    ![](/images/TA_Help/Images/ug_labmanager15.png)




