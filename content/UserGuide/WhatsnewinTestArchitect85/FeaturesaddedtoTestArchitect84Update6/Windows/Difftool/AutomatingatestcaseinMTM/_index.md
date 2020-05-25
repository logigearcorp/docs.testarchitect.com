--- 
title: "Automating a test case in Microsoft Test Manager"
linktitle: "Automating a test case in MTM"
aliases: 
    - /TA_Help/Topics/ug_MTM_automating_TC.html
---
# Automating a test case in Microsoft Test Manager {#concept_bps_c1f_3r .concept}

To successfully automate a test case in Microsoft Test Manager \(MTM\), numerous steps must be taken. These include creating TFS test cases, creating UI tests, linking test cases to test methods, creating a lab environment and settings to run your tests, and more. Additionally, in this section, a simple coded UI test project is created to let you verify that the entire AUT, including its user interface, is functioning correctly.

**Note:** If you use TFS 2018, be aware of its substantial changes:

-   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
-   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.

Accordingly Build vNext and the Test Hub in the [TFS web portal](TFS_web_automated_testing.html) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

1.  [Creating TFS test suites and test cases](../../TA_Help/Topics/Integration_MTM_creating_MTM_test_suite.html)  
Create test suites MTM and assign test cases to them.
2.  [Creating a test method](../../TA_Help/Topics/ug_MTM_test_methods.html)  
To automate a TFS test case, you must link it to a test method in Visual Studio. You can link any unit test, coded UI test, or generic test to an TFS test case.
3.  [Associating a TFS test case with a test method](../../TA_Help/Topics/ug_MTM_codedUI_association.html)  
Association creates a linkage between a TFS test case and a test method in Visual Studio. You can link any unit test, coded UI test, or generic test to an TFS test case.
4.  [Creating and configuring a build definition](../../TA_Help/Topics/ug_MTM_build_definition.html)  
This topic describes how to create and configure XAML and TFBuild definitions.
5.  [Queuing a new build](../../TA_Help/Topics/ug_MTM_queue_build.html)  
After creating a build definition, the new build must be queued.
6.  [Creating a new environment in the Microsoft Test Manager Lab Center](../../TA_Help/Topics/ug_MTM_create_lab_environment.html)  
To run your automated tests using Microsoft Test Manager \(MTM\), you must use a lab environment. It must have roles for each of the client and server machines used in your tests.
7.  [Configuring run settings](../../TA_Help/Topics/MTM_create_run_settings.html)  
To specify which build definition, environment, etc., is to be used for running tests on Microsoft Test Manager \(MTM\), run settings must be configured.
8.  [Running automated tests in Microsoft Test Manager](../../TA_Help/Topics/ug_MTM_run_automated_test.html)  
This topic describes the details of running automated tests in a lab environment using Microsoft Test Manager.

**Parent topic:**[Installing and configuring Microsoft components for on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_configuration.html)

**Previous topic:**[Configuring and registering an MTM test agent](../../TA_Help/Topics/Integrate_MTM_Config_TestAgent.html)

