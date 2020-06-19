--- 
title: "Specifying a value for TFS build number field"
linktitle: "Specifying a value for Team Foundation Server **build number** field"
description: "Within TFS, for each test run that is recorded, a run build number must be supplied. This allows you to find the test runs quickly based on the build number."
weight: 6
aliases: 
    - /TA_Help/Topics/ug_MTM_build_number_field.html
keywords: "integration, TFS, specifying value for build number, specifying value for build number, Team Foundation Server, specifying value for build number"
---

Within TFS, for each test run that is recorded, a run build number must be supplied. This allows you to find the test runs quickly based on the build number.

**Important:** If your TestArchitect installation is integrated with Visual Studio Team Services, formerly known as Visual Studio Online, be aware that the **Build Number** field in Visual Studio Team Services is governed by a user-specified domain of values. That is, any build number supplied from TestArchitect must first exist in Visual Studio Team Services's list of allowable build numbers.

A build number can be specified to TFS by one of several means:

-   **Option 1 - When kicking off a test from TestArchitect**: Through TestArchitect's Execute Test dialog box. \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#step.Enter_build_number).\)
-   **Option 2 - When manually uploading a TestArchitect test result to TFS**: Through the Select Location dialog box that appears. \([Learn more](/TA_Help/Topics/ug_MTM_upload_result_manual.html#step.Enter_build_number).\)
-   **Option 3 - During execution**: Within the TestArchitect test procedure code, by means of the assign result field built-in action. \([Learn more](/TA_Automation/Topics/bia_assign_result_field.html).\)




