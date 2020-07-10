--- 
title: "Converting a floating license into a host-based license"
linktitle: "Converting a floating license into a host-based license"
description: "Any floating license can be reconfigured to act as a host-based license, thereby restricting that license's availability to one specific machine."
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_converting_floating_to_host_based.html
keywords: "licenses, converting floating to host-based"
---

Any floating license can be reconfigured to act as a host-based license, thereby restricting that license's availability to one specific machine. This process is completely reversible; any host-based license can be converted back into a floating license.

{{<remember>}} An Agent license remains an Agent license whether it is converted from floating tohost-based, or vice versa. The same is true for Universal.

To convert a license from floating to host-based:

1.  On the license server machine, start the License Server Control Panel. \([Learn more](/administration-guide/license-server/managing-the-license-server/starting-and-stopping-the-server).\)

2.  Select a floating license package node that you want to convert.

    This node is directly beneath either the Floating License node or the Floating Agent License node. Ensure that this node has at least one license available.

3.  Right-click the node, then select **Convert to Host-based License**.

    **Fastpath:** Alternatively, click the **Convert License** ![](/images/TA_Administration/Images/Convert_license_btn.png) button on the toolbar.

    The Convert to Host-based License dialog box appears.

    ![](/images/TA_Administration/Images/licenseserver_17.png)

    {{<note>}} Although the node may have several available floating licenses, only one license can be converted at a time.

4.  Enter the IP address or full host name of the machine to be granted a dedicated license and click **OK**.

    {{<note>}} If you use the full host name of the machine, ensure that the machine is connected to your working domain.

    ![](/images/TA_Administration/Images/licenseserver_18.png)

    -   A new node appears in the **Host-Based License** tree, directly beneath the appropriate subnode \(Universal License or Agent License\). This node represents the specific host-based license you created and displays the IP address and host name of the machine you specified.
    -   Additionally, both the **Issued** and Available statistics have been reduced by 1, because a license has been removed from the pool of floating licenses and converted into a host-based license.




