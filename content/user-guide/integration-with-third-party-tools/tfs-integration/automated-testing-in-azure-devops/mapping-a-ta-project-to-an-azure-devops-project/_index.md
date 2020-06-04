--- 
title: "Mapping a TA project to an Azure DevOps project"
linktitle: "Mapping a TA project to an Azure DevOps project"
weight: 2
aliases: 
    - /TA_Help/Topics/Azure_DevOps_project_mapping.html
---

Mapping a TestArchitect project to an Azure DevOps team project allows you to upload test results to Azure DevOps.

Ensure that the following requirements are met:

-   Your TestArchitect repository is configured for connection with Azure DevOps. \([Learn more](Integration_MTM_connecting_TFS.html).\)
-   Your access to Azure DevOps has been authenticated. You can do this in one of two ways:

    **Restriction:** authentication access with **Personal access tokens** and **Alternate authentication credentials** is supported.

    -   **Using basic authentication.** To do this, you must 'enable alternate authentication credentials'.

        ![](/images//Images/Azure_DevOps_alternate_authentication_credentials.png)

    -   **Using a personal access token that can be used as your password.** \([Learn more](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=vsts)\).

        ![](/images//Images/Azure_DevOps_personal_access_token.png)


To map a TA project to an Azure DevOps project, perform as follows:

1.  In the TestArchitect explorer tree, double-click the TestArchitect project to be mapped.

    The **Project** tab appears.

2.  In the **Source** field, type in one of the following formats:

    **Attention:** this field is case sensitive.

    -   <project name\>
    -   DefaultCollection\\<project name\>
    -   <organization\>\\<project name\>. <organization\> is exacted from the URL to your Azure DevOps account \(https://dev.azure.com/organization or https://organization.visualstudio.com\). For example, you want to map to the CarRental project in your Azure DevOps account with a URL of https://dev.visualstudio.com/lgvn. The value of the **Source** field should be:

        ![](/images//Images/Azure_DevOps_map_project_source_field.png)

3.  Click **Apply**.

4.  In the Team Foundation Server Authentication dialog box, select your desired type of credentials from the **Authentication Mode** box.

    -   Alternate Authentication Credentials:

        ![](/images//Images/Azure_DevOps_Alternate_authentication_credentials_TA.png)

    -   Personal Access Tokens:

        ![](/images//Images/Azure_DevOps_Personal_access_tokens_TA.png)

    **Note:**

    -   This dialog box is only displayed the first time you connect to the TFS server and map a project. It does not appear again unless there is a change in the TFS server or user account/password.
    -   If necessary, you have the option of switching from the current credentials to different ones. \([Learn more](ug_MTM_switching_TFS_account.html).\)
5.  Click **OK**.

    If authentication succeeds, a confirmation dialog box to that effect is displayed.

6.  Click **OK** to close the confirmation dialog box.


**Parent topic:**[Azure DevOps](/TA_Help/Topics/Azure_DevOps_running_automated_tests.html)

**Previous topic:**[Configuring TA for an Azure DevOps connection](/TA_Help/Topics/Azure_DevOps_configuration.html)

**Next topic:**[Automating tests](/TA_Help/Topics/Azure_DevOps_automating_tests.html)

