--- 
title: "Running automated tests under on-premises Team Foundation Server"
linktitle: "Running automated tests under on-premises Team Foundation Server"
description: "With TFS-MTM integration in place, you have the option of launching your automated TA tests from either environment. And in both cases, you can have your test results automatically (or manually) sent to TFS."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution.html
keywords: 
---

With TFS-MTM integration in place, you have the option of launching your automated TA tests from *either* environment. And in both cases, you can have your test results automatically \(or manually\) sent to TFS.

The prerequisites for this functionality include installing the TA plug-in for Microsoft Visual Studio, and creating a TA-TFS project in Microsoft Visual Studio. Then, within the project, you must create the necessary associations between your TA and TFS test cases.

This section provides the instructions on how to perform this setup, how to run the automated tests, and how to ensure that test results are sent to TFS.

1.  [Prerequisites for running tests under TFS-MTM](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/prerequisites)  
This topic describes the requirements that must be met by the systems involved in running tests under TFS-MTM.
2.  [Installing the TestArchitect plug-in](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/installing-the-ta-plug-in)  
Install the TestArchitect plug-in for Microsoft Visual Studio. This allows you to create TestArchitect integration projects and the necessary code templates to associate TestArchitect test cases with MTM test cases.
3.  [Configuring TestArchitect for a Team Foundation Server® connection](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/configuring-ta-for-a-tfs-connection)  
Use the TestArchitect external tool to set up a repository for integration with a Team Foundation Server \(TFS\) server.
4.  [Mapping a TestArchitect project to a Team Foundation Server project](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-a-ta-project-to-a-tfs-project)  
Mapping a TA project to TFS team project allows you to upload test results to TFS.
5.  [Creating TestArchitect-Team Foundation Server projects in Visual Studio](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-ta-tfs-projects)  
Create a TestArchitect/Microsoft Test Manager project in Microsoft Visual Studio and generate C\# code to associate TestArchitect test cases with MTM test cases.
6.  [Associating TestArchitect and Team Foundation Server test cases in Visual Studio](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases)  
To execute TestArchitect test cases from MTM or the Test Hub, an association between TestArchitect tests and Team Foundation Server tests must be created in the related Visual Studio project.
7.  [Creating and queueing team builds in TFS-MTM](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-and-queueing-team-builds-in-tfs-mtm)  
To run automated tests in MTM, create a team build that includes your test project, and add the build to your test plan.
8.  [Creating and configuring test plans](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/creating-and-configuring-test-plans)  
After you create a team build that includes your tests, you can add it to your test plan in MTM.
9.  [Running TestArchitect tests from Microsoft Test Manager](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/running-ta-tests-from-mtm)  
Finally, after you successfully create and build the project, proceed to executing and managing the test cases in MTM.
10. [Uploading TestArchitect test results to Team Foundation Server](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/)  
TestArchitect test results from test projects which are mapped to TFS can be uploaded to TFS manually or automatically.
11. [Mapping TA test cases to TFS test cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-ta-test-cases-to-tfs-test-cases)  
Use the generated test IDs to map the MTM test cases to TestArchitect test cases.
12. [Mapping TA test modules to TFS test cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-ta-test-modules-to-tfs-test-cases)  
In addition to TestArchitect test cases, you can map TestArchitect test modules to TFS test cases.



