--- 
title: "Setting Java heap size"
linktitle: "Setting Java heap size"
aliases: 
    - /TA_Administration/Topics/Repo_setting_heap_size.html
---
# Setting Java heap size {#repo_setting_Java_heap_size .task}

The Java Virtual Machine requires enough heap memory to prevent out-of-memory conditions.

If Java heap memory is set too low, TestArchitect may not have enough memory to perform normal operations. Set the Java heap size at a level that is large enough to enable TestArchitect to function properly, but not so large that the amount of physical memory available to other applications is affected. The table below lists the minimum, recommended, and default Java heap size settings for both 32-bit and 64-bit systems.

|Machine Architecture|Recommended Heap Size|Minimum Heap Size|Default Heap Size|
|--------------------|---------------------|-----------------|-----------------|
|32-bit|1024 MB|512 MB|764 MB|
|64-bit|Half of total physical memory|512 MB|Half of total physical memory|

**Tip:** The current Java heap size setting is displayed in the **Repository Server Information** panel in the Repository Server Control Panel window.

![](../Images/java_heap_size_info.png)

1.  Open the [Repository Server Control Panel](Repo_server_management_launching.html) dialog box.

2.  On the toolbar, click **Options...** ![](../Images/set_java_heap_size_btn.png)

    The Options dialog box appears.

    ![](../Images/Options_java_heap_size_dialog.png)

3.  In the Set Heap Size panel, type the amount of memory \(in megabytes\) that is to be made available to Java as heap storage, and then click **OK**.

    **Tip:** Click **Reset** dialog box to return the heap size to the default setting for your system.


Changing the Java heap size value automatically restarts the repository server. All access to the server is temporarily disabled while the server restarts. Server requests made during this time will be rerouted to a [replication server](Repo_server_management_replication_repo_intro.html), if one is available.

**Parent topic:**[Repository Server Management](../../TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Replication repositories](../../TA_Administration/Topics/Repo_server_management_replication_repo.html)

**Next topic:**[Changing user account to start the repository server](../../TA_Administration/Topics/adm_changing_OS_account.html)

