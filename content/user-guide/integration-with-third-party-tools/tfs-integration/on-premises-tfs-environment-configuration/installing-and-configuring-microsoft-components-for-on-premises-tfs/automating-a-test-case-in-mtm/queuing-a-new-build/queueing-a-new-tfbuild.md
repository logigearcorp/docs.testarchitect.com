--- 
title: "Queueing a new TFBuild"
linktitle: "Queueing a new TFBuild"
description: "Once you've defined your build processes by creating a TFBuild definition, the new build definition must be queued."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_queue_BuildVNext.html
keywords: "TFS, queueing new build, Build VNext, Team Foundation Server, queueing new build, Build VNext, integration, Microsoft Test Manager, queueing new build, Build VNext"
---

Once you've defined your build processes by creating a TFBuild definition, the new build definition must be queued.

Queues are the links between project collections and agents. You associate a queue with a project collection and a pool. Then you simply point your builds at a queue.

1.  In Visual Studio, check in your solution on the TFS server.

    1.  In **Solution Explorer**, right-click your solution and then click **Check In**.

    2.  In the Check In dialog box, type an appropriate comment and then click **Check In**.

2.  Select a TFBuild build definition, and then click the **Queue build...** \(![](/images/TA_Help/Images/Queue_build_ntb.png)\) button.

3.  Select an agent pool in the **Queue** list, and then click **OK**.

    ![](/images/TA_Help/Images/Queue_build_BuildVNext.png)


Upon conclusion, the TFSBuild build is queued and marked with a green check.

![](/images/TA_Help/Images/Queue_build_BuildVNext_success.png)


