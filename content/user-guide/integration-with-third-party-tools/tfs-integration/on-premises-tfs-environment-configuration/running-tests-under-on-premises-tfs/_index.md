--- 
title: "Running automated tests under on-premises Team Foundation Server"
linktitle: "Running tests under on-premises TFS"
description: "With TFS-MTM integration in place, you have the option of launching your automated TA tests from either environment. And in both cases, you can have your test results automatically (or manually) sent to TFS."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution.html
keywords: 
---

With TFS-MTM integration in place, you have the option of launching your automated TA tests from *either* environment. And in both cases, you can have your test results automatically \(or manually\) sent to TFS.

The prerequisites for this functionality include installing the TA plug-in for Microsoft Visual Studio, and creating a TA-TFS project in Microsoft Visual Studio. Then, within the project, you must create the necessary associations between your TA and TFS test cases.

This section provides the instructions on how to perform this setup, how to run the automated tests, and how to ensure that test results are sent to TFS.

1.  [Prerequisites for running tests under TFS-MTM](/TA_Help/Topics/ug_MTM_test_execution_prerequisites.html)  
This topic describes the requirements that must be met by the systems involved in running tests under TFS-MTM.
2.  [Installing the TestArchitect plug-in](/TA_Help/Topics/ug_MTM_installing_TA_plugin.html)  
Install the TestArchitect plug-in for Microsoft Visual Studio. This allows you to create TestArchitect integration projects and the necessary code templates to associate TestArchitect test cases with MTM test cases.
3.  [Configuring TestArchitect for a Team Foundation Server® connection](/TA_Help/Topics/Integration_MTM_connecting_TFS_COPY.html)  
Use the TestArchitect external tool to set up a repository for integration with a Team Foundation Server \(TFS\) server.
4.  [Mapping a TestArchitect project to a Team Foundation Server project](/TA_Help/Topics/Integration_MTM_map_proj_COPY.html)  
Mapping a TA project to TFS team project allows you to upload test results to TFS.
5.  [Creating TestArchitect-Team Foundation Server projects in Visual Studio](/TA_Help/Topics/Integration_MTM_creating_vs_project.html)  
Create a TestArchitect/Microsoft Test Manager project in Microsoft Visual Studio and generate C\# code to associate TestArchitect test cases with MTM test cases.
6.  [Associating TestArchitect and Team Foundation Server test cases in Visual Studio](/TA_Help/Topics/ug_MTM_associate.html)  
To execute TestArchitect test cases from MTM or the Test Hub, an association between TestArchitect tests and Team Foundation Server tests must be created in the related Visual Studio project.
7.  [Creating and queueing team builds in TFS-MTM](/TA_Help/Topics/ug_MTM_test_execution_creating_team_builds.html)  
To run automated tests in MTM, create a team build that includes your test project, and add the build to your test plan.
8.  [Creating and configuring test plans](/TA_Help/Topics/ug_MTM_test_execution_configuring_test_plans.html)  
After you create a team build that includes your tests, you can add it to your test plan in MTM.
9.  [Running TestArchitect tests from Microsoft Test Manager](/TA_Help/Topics/Integration_MTM_running_test_cases.html)  
Finally, after you successfully create and build the project, proceed to executing and managing the test cases in MTM.
10. [Uploading TestArchitect test results to Team Foundation Server](/TA_Help/Topics/ug_MTM_upload_result.html)  
TestArchitect test results from test projects which are mapped to TFS can be uploaded to TFS manually or automatically.
11. [Mapping TA test cases to TFS test cases](/TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html)  
Use the generated test IDs to map the MTM test cases to TestArchitect test cases.
12. [Mapping TA test modules to TFS test cases](/TA_Help/Topics/TFS_mapping_TM.html)  
In addition to TestArchitect test cases, you can map TestArchitect test modules to TFS test cases.



