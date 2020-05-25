--- 
title: "Multiple license servers"
linktitle: "Multiple license servers"
aliases: 
    - /TA_Administration/Topics/LS_TA_multiple_license.html
---
# Multiple license servers {#License_server_multiple_license .concept}

Several license servers can be used to administer licenses to clients. For example, one license server may handle only agent licensing, while another dedicated license server may administer full client/controller licensing.

In the figure below, the license server on the left acts as an Universal license server, and the license server on the right acts as an Agent license server. The TestArchitect machines attached to the license server on the left operate with Universal licenses. The controllers attached to the license server on the right operate with Agent licenses.

![](../Images/licenseserver_4-1.png)

**Important:** A TestArchitect Controller can operate with any licenses, but TestArchitect Client cannot operate with only an Agent licenses.

Of course, in an organization with a limited number of client, it is always preferable to assign Agent licenses to dedicated TestArchitect controllers, reserving the client licenses for client machines.

**Parent topic:**[License administration configurations](../../TA_Administration/Topics/LS_TA_admin_config.html)

**Previous topic:**[Host-based licenses](../../TA_Administration/Topics/LS_TA_host_based_license.html)

**Next topic:**[Redundant license servers](../../TA_Administration/Topics/LS_TA_Redundant_license.html)

