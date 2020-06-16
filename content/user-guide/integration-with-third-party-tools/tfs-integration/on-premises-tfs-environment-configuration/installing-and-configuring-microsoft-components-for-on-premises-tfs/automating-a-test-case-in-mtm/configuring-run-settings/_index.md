--- 
title: "Configuring run settings"
linktitle: "Configuring run settings"
description: "To specify which build definition, environment, etc., is to be used for running tests on Microsoft Test Manager (MTM), run settings must be configured."
weight: 7
aliases: 
    - /TA_Help/Topics/MTM_create_run_settings.html
keywords: "Microsoft Test Manager, creating run settings, attended mode, MTM, creating run settings, Team Foundation Server, integration, creating run settings, attended mode"
---

To specify which build definition, environment, etc., is to be used for running tests on Microsoft Test Manager \(MTM\), run settings must be configured.

After you create a team build \([learn more](/TA_Help/Topics/MTM_create_build_definition.html)\), you can add it to your test plan in Microsoft Test Manager.

To configure run settings, do the following:

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In MTM's Testing Center, click **Plan** on the ribbon, then switch to the **Properties** tabbed page of your test plan.

3.  In the **Test environment** list of the **Automated runs** group of the plan properties, select a [lab environment](/TA_Help/Topics/ug_MTM_create_lab_environment.html) in which you want to run your tests.

    ![](/images/TA_Help/Images/MTM_select_environment.png)

4.  Associate a build containing your tests with the test plan:

    1.  Click the drop-down button of the **Filter for builds** list box and in the ensuing dialog box select the build you created for your tests. \([Learn more](/TA_Help/Topics/MTM_create_build_definition.html).\)

    2.  Click **Modify** to the right of the **Build in use** box and select the build you want to use for testing. \([Learn more](/TA_Help/Topics/MTM_queue_XAML_build.html).\)

    ![](/images/TA_Help/Images/MTM_assign_build_definition.png)

5.  Click the **Save** ![](/images/TA_Help/Images/mtm_save_btn.png) button to save the changes made to your test plan and close the Test Plan Properties page.





