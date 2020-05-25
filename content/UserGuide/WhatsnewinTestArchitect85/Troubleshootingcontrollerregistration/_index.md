--- 
title: "Troubleshooting controller registration"
linktitle: "Troubleshooting controller registration"
aliases: 
    - /TA_Help/Topics/Lab_manager_troubleshoot_controller_registration.html
---
# Troubleshooting controller registration {#Lab_manage_troubleshooting_controller_registration .reference}

This topic lists typical issues you may experience when registering controllers to a Lab Manager session, and offers possible solutions.

**TestArchitect cannot add the controller you want to register**

A controller may only be registered to a single Lab Manager session at a time. If TestArchitect cannot add the controller you want to register, there are two most likely reasons:

1.  The controller is already registered to another Lab Manager session.

    The error message box below appears after you specify the registered controller and click **OK** in the Add New Machine dialog box.

    ![](../Images/Lab_Manager_troubleshoot_registered_controller.png)

    To resolve this issue, remove the controller from the Lab Manner session in which it is currently registered, and then reattempt to register the controller to your Lab Manager session.

2.  The controller is not running.

    The error message box below appears after you specify the registered controller and click **OK** in the Add New Machine dialog box.

    ![](../Images/Lab_Manager_troubleshoot_registered_controller_2.png)

    To resolve this, on the machine in which the controller resides, start it from **Start menu** \> **All Programs** \> **TestArchitect** \> **TestArchitect Controller**, or double-click the **TestArchitect Controller** icon on the machine's desktop.


**Parent topic:**[Lab Manager](../../TA_Help/Topics/Lab_manager.html)

**Previous topic:**[Managing automation lab](../../TA_Help/Topics/Lab_manager_managing_auto_lab.html)

**Next topic:**[Troubleshooting device registration](../../TA_Help/Topics/Lab_manager_troubleshoot_device_registration.html)

