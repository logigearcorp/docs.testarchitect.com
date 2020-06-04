--- 
title: "Queueing a new XAML build"
linktitle: "Queueing a new XAML build"
weight: 1
aliases: 
    - /TA_Help/Topics/MTM_queue_XAML_build.html
---

After creating an XML build definition, the new build must be queued.

1.  In Visual Studio, check in your solution on the TFS server.

    1.  In **Solution Explorer**, right-click your solution and then click **Check In**.

    2.  In the Check In dialog box, type an appropriate comment and then click **Check In**.

2.  Queue the build by following Microsoft's instructions. \([Learn more](https://msdn.microsoft.com/en-us/library/ms181722(v=vs.120).aspx).\)

    **Note:**

    -   Only configurations for the **General** tab are required. The others are optional.
    -   In the Queue Build <Project\_name\> dialog box, if needed, specify the build definition, the build controller, the priority of the build in the build queue and the output folder where the files and modules will reside after the build is over.

        ![](/images//Images/Queue_build_dlg_MTM.png)


Upon conclusion, the build is queued and marked with a green check.

![](/images//Images/VS_new_build_complete.png)

**Note:** The available statuses of the queued build process are mentioned as follows:

![](/images//Images/VS_build_status.png)

When integrated with TestArchitect, keep in mind the following:

**Important:** This task is one that must often be repeated, especially when you have modified mapped TFS test cases. \(For example, you remove or add test cases, or change the order of a test case run.\) When you do so, the association between TFS test cases and Visual Studio test methods/TestArchitect test cases is compromised. Hence, it is necessary that you perform the following steps again:

1.  Re-[associate](ug_MTM_associate.html) TestArchitect test cases with TFS test cases.
2.  Check in your project.
3.  [Queue](ug_MTM_queue_build.html) the build.

**Parent topic:**[Queuing a new build](/TA_Help/Topics/ug_MTM_queue_build.html)

