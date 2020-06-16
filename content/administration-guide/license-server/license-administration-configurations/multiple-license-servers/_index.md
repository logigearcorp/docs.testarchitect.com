--- 
title: "Multiple license servers"
linktitle: "Multiple license servers"
description: "Several license servers can be used to administer licenses to clients. For example, one license server may handle only agent licensing, while another dedicated license server may administer full client/controller licensing."
weight: 3
aliases: 
    - /TA_Administration/Topics/LS_TA_multiple_license.html
keywords: "multiple license servers, licenses, multiple servers"
---

Several license servers can be used to administer licenses to clients. For example, one license server may handle only agent licensing, while another dedicated license server may administer full client/controller licensing.

In the figure below, the license server on the left acts as an Universal license server, and the license server on the right acts as an Agent license server. The TestArchitect machines attached to the license server on the left operate with Universal licenses. The controllers attached to the license server on the right operate with Agent licenses.

![](/images/TA_Administration/Images/licenseserver_4-1.png)

**Important:** A TestArchitect Controller can operate with any licenses, but TestArchitect Client cannot operate with only an Agent licenses.

Of course, in an organization with a limited number of client, it is always preferable to assign Agent licenses to dedicated TestArchitect controllers, reserving the client licenses for client machines.




