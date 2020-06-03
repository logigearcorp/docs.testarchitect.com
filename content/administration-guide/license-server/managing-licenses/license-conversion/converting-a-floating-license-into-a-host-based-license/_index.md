--- 
title: "Converting a floating license into a host-based license"
linktitle: "Converting a floating license into a host-based license"
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_converting_floating_to_host_based.html
---

Any floating license can be reconfigured to act as a host-based license, thereby restricting that license's availability to one specific machine. This process is completely reversible; any host-based license can be converted back into a floating license.

**Remember:** An Agent license remains an Agent license whether it is converted from floating tohost-based, or vice versa. The same is true for Universal.

To convert a license from floating to host-based:

1.  On the license server machine, start the License Server Control Panel. \([Learn more](LS_TA_managing_start_stop.html).\)

2.  Select a floating license package node that you want to convert.

    This node is directly beneath either the Floating License node or the Floating Agent License node. Ensure that this node has at least one license available.

3.  Right-click the node, then select **Convert to Host-based License**.

    **Fastpath:** Alternatively, click the **Convert License** ![](/images//Images/Convert_license_btn.png) button on the toolbar.

    The Convert to Host-based License dialog box appears.

    ![](/images//Images/licenseserver_17.png)

    **Note:** Although the node may have several available floating licenses, only one license can be converted at a time.

4.  Enter the IP address or full host name of the machine to be granted a dedicated license and click **OK**.

    **Note:** If you use the full host name of the machine, ensure that the machine is connected to your working domain.

    ![](/images//Images/licenseserver_18.png)

    -   A new node appears in the **Host-Based License** tree, directly beneath the appropriate subnode \(Universal License or Agent License\). This node represents the specific host-based license you created and displays the IP address and host name of the machine you specified.
    -   Additionally, both the **Issued** and Available statistics have been reduced by 1, because a license has been removed from the pool of floating licenses and converted into a host-based license.

**Parent topic:**[License conversion](/TA_Administration/Topics/LS_TA_license_conversion.html)

**Previous topic:**[Acquiring a temporary Universal license](/TA_Administration/Topics/LS_TA_acquiring_temporary_enterprise_license.html)

**Next topic:**[Converting a host-based license into a floating license](/TA_Administration/Topics/LS_TA_converting_host_based_to_floating.html)

