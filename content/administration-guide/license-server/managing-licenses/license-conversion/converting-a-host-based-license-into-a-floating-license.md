--- 
title: "Converting a host-based license into a floating license"
linktitle: "Converting a host-based license into a floating license"
description: "Any host-based license can be reconfigured to act as a floating license, thereby freeing that license from a specific machine."
weight: 3
aliases: 
    - /TA_Administration/Topics/LS_TA_converting_host_based_to_floating.html
keywords: "licenses, converting host-based to floating"
---

Any host-based license can be reconfigured to act as a floating license, thereby freeing that license from a specific machine. This process is completely reversible; any floating license may be converted back into a host-based license.

{{<remember>}} An Agent license remains an Agent license whether it is converted from floating tohost-based, or vice versa. The same is true for Universal.

To convert a license from host-based to floating:

1.  On the license server machine, start the License Server Control Panel. \([Learn more](/administration-guide/license-server/managing-the-license-server/starting-and-stopping-the-server).\)

2.  Select the node representing the host-based license you want to remove.

    This node is beneath either the **Host-Based License** \> **Universal License** subtree, or **Host-Based License** \> **Agent License**.

3.  Right-click the node, then select **Convert to Floating License**.

    **Fastpath:** Alternatively, click the **Convert License** ![](/images/TA_Administration/Images/Convert_license_btn.png) button on the toolbar.

    A confirmation dialog box appears.

    ![](/images/TA_Administration/Images/remove_host_based_license.png)

4.  In the confirmation dialog box appears, click **Yes**.

    The node is removed, and the number of available licenses for the corresponding floating license pool \(Universal or Agent\) is increased by 1.

    ![](/images/TA_Administration/Images/covert_host_based_to_floating.png)

    {{<caution>}}

    When the license type of the host machine is converted from host-based to floating, that machine must rely on the floating pool of licenses and will no longer be guaranteed a license when it requests one.




