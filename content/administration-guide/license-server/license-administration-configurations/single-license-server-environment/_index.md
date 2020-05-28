--- 
title: "Single license server environment"
linktitle: "Single license server environment"
weight: 1
aliases: 
    - TA_Administration/Topics/LS_TA_single_license.html
---

A single license server handles and grants licensing requests from TestArchitect Clients or controllers on your network.

In most environments you typically set up a single license server in the network to administer all licensing, but it is possible to have multiple license servers on your network. In such a scenario, each license server administers its own subset of the total number of licenses belonging to the organization. A TestArchitect client or controller on the network can obtain licenses from any of the accessible license servers.

Here is a typical single active license server configuration:

![](/images/TA_Administration/Images/licenseserver_2.png)

Due to the nature of floating licenses, they must be administered over a network by a central server running a license server program. The only exception is when the license server is running on the same host machine as the client or controller it is licensing. This standalone mode, which requires no network, is suitable for evaluation purposes only.

**Note:** The license server application is installed along with TestArchitect Client, so any machine running the TestArchitect Client can act as a license server. However, only license servers that have been issued licenses to administer are relevant. Therefore the term license server here refers to a machine that is both running the TestArchitect License Server software and has a set of licenses to allocate.

**Parent topic:**[License administration configurations](../../TA_Administration/Topics/LS_TA_admin_config.md)

**Next topic:**[Host-based licenses](../../TA_Administration/Topics/LS_TA_host_based_license.md)

