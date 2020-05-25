--- 
title: "Host-based licenses"
linktitle: "Host-based licenses"
aliases: 
    - /TA_Administration/Topics/LS_TA_host_based_license.html
---
# Host-based licenses {#License_server_Host_based_licenses .concept}

Host-based licensing is appropriate when it is unacceptable for a host to be denied a license from the license server. Host-based licensing allows a host to receive a license even when the pool of available floating licenses has been exhausted.

A dedicated host-based license is created by converting a floating license into a license that is tied to a particular host \([learn more](LS_TA_license_conversion.html)\). When a floating license is converted in this way, the pool of floating licenses is decreased by one. A host with a dedicated host-based license has a lock on that particular license and no other client or controller can use the license, even when the pool of floating licenses has been completely allocated.

![](../Images/licenseserver_3.png)

1.  Host A requests a license and is granted 1 floating license; available floating license pool decreases to 1.
2.  Host B requests a license and is granted 1 floating license; available floating license pool decreases to 0.
3.  Host C requests a license and is granted the host-based license reserved for it.
4.  Host D requests a license but is declined, as the pool of available floating licenses is now empty.
5.  Host E requests a license and is granted the host-based license reserved for it.

**Parent topic:**[License administration configurations](../../TA_Administration/Topics/LS_TA_admin_config.html)

**Previous topic:**[Single license server environment](../../TA_Administration/Topics/LS_TA_single_license.html)

**Next topic:**[Multiple license servers](../../TA_Administration/Topics/LS_TA_multiple_license.html)

