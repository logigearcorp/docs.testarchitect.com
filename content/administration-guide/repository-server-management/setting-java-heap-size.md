--- 
title: "Setting Java heap size"
linktitle: "Setting Java heap size"
description: "The Java Virtual Machine requires enough heap memory to prevent out-of-memory conditions."
weight: 13
aliases: 
    - /TA_Administration/Topics/Repo_setting_heap_size.html
keywords: "heap size, Java setting, Java heap size, setting, repositories, setting Java heap size"
---

The Java Virtual Machine requires enough heap memory to prevent out-of-memory conditions.

If Java heap memory is set too low, TestArchitect may not have enough memory to perform normal operations. Set the Java heap size at a level that is large enough to enable TestArchitect to function properly, but not so large that the amount of physical memory available to other applications is affected. The table below lists the minimum, recommended, and default Java heap size settings for both 32-bit and 64-bit systems.

|Machine Architecture|Recommended Heap Size|Minimum Heap Size|Default Heap Size|
|--------------------|---------------------|-----------------|-----------------|
|32-bit|1024 MB|512 MB|764 MB|
|64-bit|Half of total physical memory|512 MB|Half of total physical memory|

{{<tip>}} The current Java heap size setting is displayed in the **Repository Server Information** panel in the Repository Server Control Panel window.

![](/images/TA_Administration/Images/java_heap_size_info.png)

1.  Open the [Repository Server Control Panel](/administration-guide/repository-server-management/launching-the-repository-server-control-panel) dialog box.

2.  On the toolbar, click **Options...** ![](/images/TA_Administration/Images/set_java_heap_size_btn.png)

    The Options dialog box appears.

    ![](/images/TA_Administration/Images/Options_java_heap_size_dialog.png)

3.  In the Set Heap Size panel, type the amount of memory \(in megabytes\) that is to be made available to Java as heap storage, and then click **OK**.

    {{<tip>}} Click **Reset** dialog box to return the heap size to the default setting for your system.


Changing the Java heap size value automatically restarts the repository server. All access to the server is temporarily disabled while the server restarts. Server requests made during this time will be rerouted to a [replication server](/administration-guide/repository-server-management/replication-repositories/introduction-to-replication-repositories), if one is available.




