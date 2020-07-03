--- 
title: "Creating a new environment in the Microsoft Test Manager Lab Center"
linktitle: "Creating new environment in MTM Lab Center"
description: "To run your automated tests using Microsoft Test Manager (MTM), you must use a lab environment. It must have roles for each of the client and server machines used in your tests."
weight: 6
aliases: 
    - /TA_Help/Topics/ug_MTM_create_lab_environment.html
keywords: "Microsoft Test Manager, creating lab environment, attended mode, MTM, creating lab environment, Team Foundation Server, integration, creating lab environment, attended mode"
---

To run your automated tests using Microsoft Test Manager \(MTM\), you must use a lab environment. It must have roles for each of the client and server machines used in your tests.

To create a new lab environment, do the following:

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In MTM **Lab Center**, create a new environment.

    -   Visual Studio 2017, 2015 \([learn more](https://msdn.microsoft.com/en-us/library/ee390842(v=vs.140).aspx)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/ee390842(v=vs.120).aspx).
3.  Keep in mind the following specific settings:

    -   In the **Type and name** step, select the **Standard environment** option.

        ![](/images/TA_Help/Images/ug_MTM_new_environment.png)

    -   Select **Desktop client** for machine role.

        {{<note>}}

        -   For domain machines, in the **User name** box, use <domain\>\\<username\> format.
        -   For workgroup machines, in the **User name** box, use .\\<username\> format.
        ![](/images/TA_Help/Images/ug_MTM_add_machine_2.png)

    -   In the **Advanced** step, select the **Configure environment to run UI tests** check box and enter the proper credentials.

        {{<note>}}

        -   For domain machines, in the **User name** box, use <domain\>\\<username\> format.
        -   For workgroup machines, in the **User name** box, use .\\<username\> format.
        ![](/images/TA_Help/Images/ug_MTM_add_machine_3.png)

4.  Click the **Verify** button.

    The verification process starts. Upon conclusion of a successful verification, you can expect to see the following.

    ![](/images/TA_Help/Images/MTM_verify_environment.png)

5.  Click **Finish**.


A new lab environment is created successfully.

![](/images/TA_Help/Images/MTM_new_created_environment.png)




