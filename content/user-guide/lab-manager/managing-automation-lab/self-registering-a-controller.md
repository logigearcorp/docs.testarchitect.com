--- 
title: "Self-registering a controller"
linktitle: "Self-registering a controller"
description: "A controller can register itself with a Lab Manager session."
weight: 3
aliases: 
    - /TA_Help/Topics/Lab_manager_self_registering.html
keywords: "Lab Manager, self-registering a controller"
---

A controller can register itself with a Lab Manager session.

To register a TestArchitect controller to a running Lab Manager session from the controller's machine:

1.  Right-click the TestArchitect Controller ![](/images/TA_Help/Images/Controller_icon.png) icon in the Windows notification area.

2.  Select **Lab Manager Registration.**

    ![](/images/TA_Help/Images/ug_labmanager10.png)

    {{<note>}} A controller may only be registered to a single Lab Manager session at a time. If the **Lab Manager Registration** option is disabled, the most likely reason is that the controller is already registered to another Lab Manager session. The other possibility is that the controller is not running; in that case, the **Start Controller** menu item on the same context menu is enabled.

3.  In the Lab Manager Registration dialog box, input the following fields:

    -   **Server Name**: Name or IP address of the machine hosting the Lab Manager session you'd like to be registered to.
    -   **Label**: An optional alias for the controller.
    -   **Port**: The TCP/IP listening port of the Lab Manager for communication with other TestArchitect components. The default port is 53100. [\(Learn more.\)](/administration-guide/default-port-numbers-and-port-ranges#row.LM)
4.  Click the **Register Me** button.





**Related information**  


[Default port numbers and port ranges](/administration-guide/default-port-numbers-and-port-ranges)

