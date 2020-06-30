--- 
title: "Host-based licenses"
linktitle: "Host-based licenses"
description: "Host-based licensing is appropriate when it is unacceptable for a host to be denied a license from the license server. Host-based licensing allows a host to receive a license even when the pool of available floating licenses has been exhausted."
weight: 2
aliases: 
    - /TA_Administration/Topics/LS_TA_host_based_license.html
keywords: "host-based licenses, licenses, host-based"
---

Host-based licensing is appropriate when it is unacceptable for a host to be denied a license from the license server. Host-based licensing allows a host to receive a license even when the pool of available floating licenses has been exhausted.

A dedicated host-based license is created by converting a floating license into a license that is tied to a particular host \([learn more](/administration-guide/license-server/managing-licenses/license-conversion/)\). When a floating license is converted in this way, the pool of floating licenses is decreased by one. A host with a dedicated host-based license has a lock on that particular license and no other client or controller can use the license, even when the pool of floating licenses has been completely allocated.

![](/images/TA_Administration/Images/licenseserver_3.png)

1.  Host A requests a license and is granted 1 floating license; available floating license pool decreases to 1.
2.  Host B requests a license and is granted 1 floating license; available floating license pool decreases to 0.
3.  Host C requests a license and is granted the host-based license reserved for it.
4.  Host D requests a license but is declined, as the pool of available floating licenses is now empty.
5.  Host E requests a license and is granted the host-based license reserved for it.




