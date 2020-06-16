--- 
title: "License administration configurations"
linktitle: "License administration configurations"
description: "A TestArchitect license server can be configured as a single server, one of multiple licensing servers, or as a redundant server."
weight: 3
aliases: 
    - /TA_Administration/Topics/LS_TA_admin_config.html
keywords: "license administration configurations, licenses, configurations, floating license, host-based license, node-locked license"
---

A TestArchitect license server can be configured as a single server, one of multiple licensing servers, or as a redundant server.

TestArchitect Client software has three different types of licensing schemes: floating, node-locked, or host-based. The type of licensing determines how the license may be administered.

Each licensed edition of TestArchitect Client software includes a single-machine license for TestArchitect Controller, which manages the execution of automated tests. Additional licenses for TestArchitect Controller, known as [Agent](/TA_Administration/Topics/TA_Editions.html#p.ta_editions.agent) licenses, may also be purchased.

The type of available license scheme to you depends upon your license of TestArchitect:

|License|License scheme available|
|-------|------------------------|
|[Universal](/TA_Administration/Topics/TA_Editions.html#note_Universal.license)|Floating<br><br> Node-locked<br><br> Host-based<br><br>|<br>
|[Agent](/TA_Administration/Topics/TA_Editions.html#p.ta_editions.agent)|Floating<br><br> Host-based<br><br>|<br>

**Note:**

-   Copies of Universal licenses are sold under both a floating or node-locked license \([learn more](/TA_Administration/Topics/LS_TA_requesting_key.html#choice.Premium_floating)\). However, you have the option of converting a license from a floating to a host-based license, and vice versa, at any time.
-   Agent licenses are available for purchase under a floating licensing agreement \([learn more](/TA_Administration/Topics/LS_TA_requesting_key.html#choice.Agent_floating)\). However, similar to Universal, you have the option of converting a license from a floating to a host-based license, and vice versa, at any time.

## Floating licenses

A floating license is one that can be reused among members of an organization and is not tied to any one particular person or machine. The only limitation is that, at any given point in time, a single license may only be used by one host. For example, one company owning five full licenses may have 10, 50 or 200 machines each with TestArchitect, and each of which, when licensed, is fully capable of running tests and allowing tests to be developed. But, with a pool of only five licenses to draw from, only a maximum of five machines may be engaged in these activities concurrently.

**Note:** You have the option of [converting a license](/TA_Administration/Topics/LS_TA_converting_floating_to_host_based.html) from a floating to a host-based license, and vice versa, at any time.

## Host-based licenses

A dedicated host-based license is one that can only be granted to a specific machine. When the specified host is not using the license designated for it, the license goes unused, regardless of how much demand there may be for licenses by other machines on the network.

**Note:** You have the option of [converting a license](/TA_Administration/Topics/LS_TA_converting_host_based_to_floating.html) from a host-based to a floating license, and vice versa, at any time.

## Node-locked licenses

Similarly, a node-locked license is granted to a specific machine, and when that machine is not using the node-locked license, the license generally goes unused.

**Note:**

-   A node-locked license can be [transferred from one machine to another](/TA_Administration/Topics/LS_TA_changing_node-locked_machine.html), but with some limitations placed on the frequency of such transfers.
-   Once you have successfully assigned or reassigned a node-locked license to a new machine, you are granted a 24-hour “grace” period, during which you are free to re-transfer the license to another machine. After the 24-hour grace period, a 72-hour lock-in period kicks in. For the duration of the lock-in period, you are restricted from transferring the node-locked license. Upon expiration of the lock-in period, you are once again free to transfer the license. This 24/72-hour policy applies on every subsequent occasion that the node-locked license is transferred.

## Agent licenses

[Agent](/TA_Administration/Topics/TA_Editions.html#p.ta_editions.agent) licenses for TestArchitect, which allow for tests to be run on a machine but do not cover the TestArchitect Client software.

**Note:** You also have the option of converting a license from a floating to a host-based license, and vice versa, at any time.

1.  [Single license server environment](/TA_Administration/Topics/LS_TA_single_license.html)  
A single license server handles and grants licensing requests from TestArchitect Clients or controllers on your network.
2.  [Host-based licenses](/TA_Administration/Topics/LS_TA_host_based_license.html)  
Host-based licensing is appropriate when it is unacceptable for a host to be denied a license from the license server. Host-based licensing allows a host to receive a license even when the pool of available floating licenses has been exhausted.
3.  [Multiple license servers](/TA_Administration/Topics/LS_TA_multiple_license.html)  
Several license servers can be used to administer licenses to clients. For example, one license server may handle only agent licensing, while another dedicated license server may administer full client/controller licensing.
4.  [Redundant license servers](/TA_Administration/Topics/LS_TA_Redundant_license.html)  
A redundant license server operates in a network in tandem with another server designated as the main, or primary, license server. Redundant license servers assume the role of administering licenses when the primary server is offline or unable to administer licenses.




