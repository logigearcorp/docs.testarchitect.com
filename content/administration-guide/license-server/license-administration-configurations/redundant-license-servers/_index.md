--- 
title: "Redundant license servers"
linktitle: "Redundant license servers"
description: "A redundant license server operates in a network in tandem with another server designated as the main, or primary, license server. Redundant license servers assume the role of administering licenses when the primary server is offline or unable to administer licenses."
weight: 4
aliases: 
    - /TA_Administration/Topics/LS_TA_Redundant_license.html
keywords: "license servers, redundant, licenses, redundant servers"
---

A redundant license server operates in a network in tandem with another server designated as the main, or primary, license server. Redundant license servers assume the role of administering licenses when the primary server is offline or unable to administer licenses.

In the preceding three scenarios, [Single license server environment](/TA_Administration/Topics/LS_TA_single_license.html), [Host-based licenses](/TA_Administration/Topics/LS_TA_host_based_license.html) and [Multiple license servers](/TA_Administration/Topics/LS_TA_multiple_license.html), each TestArchitect client or controller points to a single license server. When a client requests a license, a license is granted from an assigned license server or a license request is rejected. There is no automatic mechanism whereby a license request is channeled to an alternate license server. It is up to the user to manually redirect a license request to an available license server.

A major concern with licensing servers, especially in organizations that rely on a single point of dissemination for all licenses, is the danger that a server will break down or be taken offline for some reason. Such events have the potential to a bring test organization to a halt. To avoid this, TestArchitect allows for the establishment of redundant license servers.

Unlike the case of multiple license servers, each with its own separate set of licenses to administer, a redundant license server is responsible for the same set of licenses as are maintained by the primary license server.

Under normal circumstances, the primary license server handles all license requests. The redundant license server sits in the background, querying the primary server periodically to ensure that it is online and functioning properly.

## Primary and redundant license servers in normal operating mode

![](/images/TA_Administration/Images/licenseserver_5-1.png)

If, for any reason, the redundant license server discovers that the primary server has stopped functioning or has been taken offline, the redundant license takes over the primary server's responsibilities.

## Primary and redundant license servers in backup mode

![](/images/TA_Administration/Images/licenseserver_6-1.png)

**Note:** Unlike the case of multiple license servers in a non-redundant configuration, all license requests from TestArchitect hosts are automatically redirected to the redundant license server when the primary server goes offline, allowing for network operation to continue uninterrupted, with minimal attention.



