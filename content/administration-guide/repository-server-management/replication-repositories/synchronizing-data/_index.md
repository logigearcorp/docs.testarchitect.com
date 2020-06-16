--- 
title: "Synchronizing data"
linktitle: "Synchronizing data"
description: "Data synchronization between the primary repository and the replication repository is a two-way process. Each modification to the primary repository is synchronized with the replication repository, and vice-versa."
weight: 4
aliases: 
    - /TA_Administration/Topics/adm_Synchronizing_data.html
keywords: "replication repositories, data synchronization, synchronizing data (primary/replication repositories), data synchronization (primary/replication repositories)"
---

Data synchronization between the primary repository and the replication repository is a two-way process. Each modification to the primary repository is synchronized with the replication repository, and vice-versa.

**Important:** Synchronization mode can only be set on a primary server. It is disabled on replication servers.

To synchronize data, do the following:

1.  On the host that acts as primary server, [start](/TA_Administration/Topics/Repo_server_management_launching.html) the Repository Server Control Panel dialog box.

2.  In the dialog box, select the primary repository to be set up for synchronization.

3.  Select **Tools** \> **Replication Repository Settings**.

    ![](/images/TA_Administration/Images/admin_RS_dlg_replication_9.png)

4.  Select the synchronization mode and schedule:

    -   **Eager**: Data is synchronized immediately after each modification \(in both directions\).
    -   **Lazy**: Synchronization is scheduled at a specific time for a specific duration.
        -   **First start at**: Specifies the start time to initiate the synchronization.
        -   **Interval**: Specifies the time between synchronizations.
    ![](/images/TA_Administration/Images/admin_RS_dlg_replication_10.png)

    **Important:** TestArchitect calculates a synchronization schedule based on the assumption that the start time is for the current day, whether or not that time has already passed. For example, let's say the current time is 10:00 AM; the following table then specifies initial synchronization times based on a given start time.

    |Start time|Interval|Schedule|First synchronization|
    |----------|--------|--------|---------------------|
    |11:00 AM|2 hours|11:00 AM, 1:00 PM, 3:00 PM, 5:00 PM, etc.|11:00 AM|
    |7:00 AM|2 hours|7:00 AM, 9:00 AM, 11:00 AM, 1:00 PM, etc.|11:00 AM|
    |4:00 PM|2 hours|4:00 PM, 6:00 PM, 8:00 PM, 10:00 PM, etc.|4:00 PM|

5.  Click **OK**.




**Related information**  


[Troubleshooting power outage-related problems](/TA_Administration/Topics/adm_troubleshooting_power_blackout.html)

