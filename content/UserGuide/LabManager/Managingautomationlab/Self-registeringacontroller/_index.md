--- 
title: "Self-registering a controller"
linktitle: "Self-registering a controller"
weight: 3
aliases: 
    - /TA_Help/Topics/Lab_manager_self_registering.html
---
# Self-registering a controller {#task_f1b_nw3_rl .task}

A controller can register itself with a Lab Manager session.

To register a TestArchitect controller to a running Lab Manager session from the controller's machine:

1.  Right-click the TestArchitect Controller ![](../Images/Controller_icon.png) icon in the Windows notification area.

2.  Select **Lab Manager Registration.**

    ![](../Images/ug_labmanager10.png)

    **Note:** A controller may only be registered to a single Lab Manager session at a time. If the **Lab Manager Registration** option is disabled, the most likely reason is that the controller is already registered to another Lab Manager session. The other possibility is that the controller is not running; in that case, the **Start Controller** menu item on the same context menu is enabled.

3.  In the Lab Manager Registration dialog box, input the following fields:

    -   **Server Name**: Name or IP address of the machine hosting the Lab Manager session you'd like to be registered to.
    -   **Label**: An optional alias for the controller.
    -   **Port**: The TCP/IP listening port of the Lab Manager for communication with other TestArchitect components. The default port is 53100. [\(Learn more.\)](../../TA_Administration/Topics/adm_port_number_port_ranges.md#row.LM)
4.  Click the **Register Me** button.


**Parent topic:**[Managing automation lab](../../TA_Help/Topics/Lab_manager_managing_auto_lab.html)

**Previous topic:**[Registering controllers](../../TA_Help/Topics/Lab_manager_registering.html)

**Next topic:**[Special note regarding porting virtual machine images](../../TA_Help/Topics/Lab_manager_notes.html)

**Related information**  


[Default port numbers and port ranges](../../TA_Administration/Topics/adm_port_number_port_ranges.html)

