--- 
title: "Creating TestArchitect-Team Foundation Server projects in Visual Studio"
linktitle: "Creating TA-TFS projects"
weight: 5
aliases: 
    - /TA_Help/Topics/Integration_MTM_creating_vs_project.html
---

Creating TestArchitect/Team Foundation Server \(TA-TFS\) projects in Microsoft Visual Studio automatically generates C\# code that assists you in associating TestArchitect test cases with TFS test cases.

To create a TA-TFS integration project, do the following:

1.  Start Microsoft Visual Studio.

2.  Create a TA-TFS integration project:

    1.  On the **File** menu, select **New** \> **Project**.

    2.  In the New Project dialog box, expand the node, **Installed** \> **Visual C\#** \> **Test**.

    3.  Under **Test**, select **TA-TFS Integration Project**.

        ![](/images//Images/TA_TFS_projects.png)

    4.  Specify the name or location of the project that you are about to add.

    5.  Click **OK**.

    ![](/images//Images/TA_MTM_project.png)

3.  Visual Studio Application Lifecycle Management tools work only with files stored in source control. To add your solution to source control:

    1.  In the **Solution Explorer** tree, right-click your solution, and then select **Add Solution to Source Control**.

    2.  \(For Visual Studio 2013 only\) In the Choose Source Control dialog box, select **Team Foundation Version Control**, and then click **OK**.

        ![](/images//Images/VS_Choose_Source_Control_dlg.png)

    3.  In the Add Solution <Name of Solution\> to Source Control dialog box, under **Team Project Location**, specify the folder on the version-control server to which you want to add your solution.

        ![](/images//Images/MTM_VS_add_solution.png)

    4.  In **Type a name for the solution folder**, enter a name for the subfolder that will be created for your solution, or leave as default.

    5.  Click **OK**.

    6.  Visual Studio will add the project files to the Team Foundation source control.


**Parent topic:**[Running automated tests under on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_test_execution.html)

**Previous topic:**[Mapping a TestArchitect project to a Team Foundation Server project](/TA_Help/Topics/Integration_MTM_map_proj_COPY.html)

**Next topic:**[Associating TestArchitect and Team Foundation Server test cases in Visual Studio](/TA_Help/Topics/ug_MTM_associate.html)

