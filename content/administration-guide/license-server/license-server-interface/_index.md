--- 
title: "License server interface"
linktitle: "License server interface"
description: "The License Server Control Panel allows you to add and edit licenses in the license pool, change license types, and display license information and status."
weight: 5
aliases: 
    - /TA_Administration/Topics/LS_TA_interface.html
keywords: "license server interface, licenses, server interface"
---

The License Server Control Panel allows you to add and edit licenses in the license pool, change license types, and display license information and status.

The primary functions available from the control panel are:

-   Starting and stopping the server.
-   Viewing the status of licenses administered by the server.
-   Requesting \(additional\) licenses.
-   Adding licenses to the license server's pool.
-   Creating designated host licenses, and converting between floating and designated licenses.
-   Removing license connections from selected hosts.
-   Viewing the license server events log.

## Launching and viewing the License Server Control Panel

To launch the License Server Control Panel:

-   **Windows platform**: do one of the following:
    -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
    -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
-   **Linux platform**: do one of the following:
    -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
    -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
-   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.

To launch the License Server Control Panel:

-   **Windows platform**: do one of the following:
    -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your Windows notification area.
    -   Select **Start Menu** \> **All Programs** \> **TestArchitect** \> **License Server**.
-   **Linux platform**: do one of the following:
    -   Double-click the **TestArchitect - License Server** ![](/images/TA_Administration/Images/LS_icon.png) icon in your notification area.
    -   From a terminal window, navigate to /usr/local/logigear/licenseserver/licenseserver and run the TestArchitect License Server executable.
-   **macOS**: Note that the TestArchitect License Server is not currently supported on macOS.

![](/images/TA_Administration/Images/licenseserver_7-1.png)

## Main display

The main display panel, titled License Information and Status, provides all pertinent information concerning the licenses that the server administers, including the current status of each license.

The information is presented in the form of a tree structure, with nodes grouped according to license types.

-   In the above example, the first-level nodes indicate the license type: **Floating**, **Node-Locked**, **Floating Agent** and **Host-Based**.
-   The **Host-Based** node is further divided into \(Host-Based\) **Universal License** and \(Host-Based\) **Agent License**.
-   Starting from the top of the display, the **Floating License** has two subnodes for Universal. Each node at this level represents a package of licenses that were obtained from LogiGear and installed under a common license key.
    -   The first package \(in blue\) has one license issued.
    -   The second package, consisting of valid licenses, displays information concerning the current disposition of the licenses:

        -   Issued: 2 informs the user that the package, in its current state, consists of two licenses.
        -   Allocated: 0 indicates that no licenses are currently in use.
        -   Available: 2 indicates that both of the issued licenses are available to be granted to hosts that request them.
        -   Valid Until: 04/30/2017 shows that the licenses are valid until 04/30/2017.
{{<note>}}

        -   The sum of **Allocated** and **Available** licenses always equals the number of **Issued** licenses.
        -   The number of issued licenses for a node can decrease. This happens when a license is converted from a floating license to a host-based license.
-   The second top-level node, **Node-Locked License**, has two license packages.
    -   The second license package has one license issued and also indicates that one license is currently allocated, which means that it is in use by a host.
    -   Beneath this node is a subnode representing the host to which the license is allocated, and whose IP address and network name are both displayed.
-   The last top-level node, **Host-Based License**, has two subnodes, both of which have licenses designated exclusively for them, one being an Universal license and the other being an Agent license.

{{<attention>}}

-   Typically, each licensed machine is identified by its IP address as well as its computer name, separated by a hyphen \( - \). For example: 192.168.167.60 - lgvn14740.logigear.com.
-   Additionally, the machine's identification will also get an instance ID, whenever its TestArchitect Client or TestArchitect Controller connects to the License Server. The instance ID is unique and is constantly changed for every connection session established. For example: 192.168.167.60 - lgvn14740.logigear.com \[ TACJFJMOHI395768 \]

    Where, `TACJFJMOHI395768` is the unique instance ID assigned to your machine.

-   Instance ID is currently supported on the License Server version [8.3.5](/TA_ReleaseNotes/DITA_source/Whats_New_LS_8.3.5.html) or later. Specifically:

    |TestArchitect|License Server|Instance ID|
    |-------------|--------------|-----------|
    |[8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) or later|[8.3.5](/TA_ReleaseNotes/DITA_source/Whats_New_LS_8.3.5.html) or later|Supported|
    |[8.3 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_4.html) or earlier|[8.3.5](/TA_ReleaseNotes/DITA_source/Whats_New_LS_8.3.5.html) or later|Supported|
    |[8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) or later|[8.3.4](/TA_ReleaseNotes/DITA_source/Whats_New_LS_8.3.4.html) or earlier|Unsupported|
    |[8.3 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_4.html) or earlier|[8.3.4](/TA_ReleaseNotes/DITA_source/Whats_New_LS_8.3.4.html) or earlier|Unsupported|


## Toolbar

![](/images/TA_Administration/Images/licenseserver_8_1.png)

1.  [Start license server](/TA_Administration/Topics/LS_TA_managing_start_stop.html): Starts up the license server on the existing computer. Disabled if the service is already running.
2.  [Stop license server](/TA_Administration/Topics/LS_TA_managing_start_stop.html): Shuts down the license server. Disabled if the server is already down.
3.  [Add license](/TA_Administration/Topics/LS_TA_adding_new_license.html): Use this button to add a license, or a package of licenses, after receiving a license key or credential information from LogiGear.
4.  [Request license](/TA_Administration/Topics/LS_TA_requesting_key.html): Click to submit a request to LogiGear for one or more licenses.
5.  **Convert license**: Click to convert a floating license into a host-based license and vice-versa. \(Refer to [Converting a floating license into a host-based license](/TA_Administration/Topics/LS_TA_converting_floating_to_host_based.html) and [Converting a host-based license into a floating license](/TA_Administration/Topics/LS_TA_converting_host_based_to_floating.html) for details.\)
6.  [Remove license](/TA_Administration/Topics/LS_TA_revoking.html): Click this button after selecting a license package node, to remove the licenses from the license server.

    **Note:** Use **Remove license** to remove expired license packages.

7.  [Serve as Redundant License Server](/TA_Administration/Topics/LS_TA_managing_creating_redundant_license.html): Allows this license server to be designated as a redundant license server for a specified primary license server.
8.  Refresh display: Updates the display to reflect any changes in status, such as license requests and grants, since the last display.
9.  View log: View a log of pertinent license server-related events.
10. [Open license log folder](/TA_Administration/Topics/adm_License_server_log_file.html): Open the folder containing log files that track license requests submitted to the license server.
11. View license server help: View help topics related to the TestArchitect license server.

## Status bar

The status bar consists of two lines of information. The lower line reports the current state of the license server \(started or stopped\), the name and IP Address of the machine hosting the server, and the port number on which the server listens for license requests. If this machine is part of a primary server / redundant server configuration, the upper line reports the IP address and port number of the related server, and indicates its role \(primary or redundant\).




**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

