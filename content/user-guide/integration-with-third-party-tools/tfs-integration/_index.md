--- 
title: "Team Foundation Server integration"
linktitle: "TFS integration"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_def.html
---

TestArchitect™ can be integrated into Team Foundation Server \(TFS\)® allowing you to include your TestArchitect tests in your application’s lifecycle managed by the Visual Studio and Visual Studio Team Foundation tools. You can associate your TestArchitect test cases with TFS test cases in your test plan and run the plan as an automated test in MTM.

The following flowchart illustrates the TFS integration process.



![](/images//Images/TA_MTM_Integrate_workflow.png)

In general:

1.  From Microsoft Test Manager, a test request, \(that is, detailed test case information\), is sent to Team Foundation Server.
2.  Team Foundation Server sends test information to Microsoft Test Controller.
3.  Test Controller sends test case execution information to the Microsoft Test Agent. At this step, Test Agent calls a test method and then launches the TestArchitect scheduler to execute the specified test cases.
4.  After execution completes, Test Controller collects the test results from Test Agent.
5.  Test Controller publishes the results to Team Foundation Server.
6.  Finally, Team Foundation Server displays the test results in Microsoft Test Manager.

1.  [Microsoft ecosystem](/TA_Help/Topics/ug_microsoft_eco_system.html)  
TFS together with MTM or the Test hub allows you to leverage the test development and test run capabilities of TestArchitect with a host of software tools offered by Microsoft's Application Lifecycle Management \(ALM\) ecosystem. To fully exploit these offerings, it is helpful to have an understanding of the Microsoft ALM and its components.
2.  [Supported versions](/TA_Help/Topics/ug_MTM_supported_platforms.html)  
Contains information of supported Microsoft technologies.
3.  [Setting up the integration environment for on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_setting_up_environment.html)  
The following topics discuss the tasks required to set up a TFS-MTM integrated environment, including setup of required Visual Studio components, and the TestArchitect plug-in.
4.  [Team Foundation Server's web portal](/TA_Help/Topics/TFS_web_automated_testing.html)  
The TFS web portal allows you to manage source code, work items, builds, test efforts, machines and test runs.
5.  [Azure DevOps](/TA_Help/Topics/Azure_DevOps_running_automated_tests.html)  
 Azure DevOps evolved from Visual Studio Team Services \(VSTS\). Known as an online version of Team Foundation Server, it both provides an integrated, collaborative environment that supports Git, continuous integration, and Agile tools for planning and tracking work.
6.  [Additional features of TFS-MTM](/TA_Help/Topics/ug_MTM_features.html)  
A discussion of additional key features of TestArchitect and TFS-MTM integration.
7.  [TFS Bug Tracker](/TA_Help/Topics/ug_TFS_BugTracker.html)  
TestArchitect™ can be integrated with TFS®, as a defect tracking system, allowing you and your team to easily keep track of TFS bug issues by associating them with TestArchitect bugs.
8.  [Troubleshooting integration with Team Foundation Server](/TA_FAQ/Topics/faq.tshoot.TFS.html)  
A discussion of issues you may encounter when working with Team Foundation Server integration.

**Parent topic:**[Integration with third-party tools](/TA_Help/Topics/Integration_def.html)

**Previous topic:**[HP Quality Center](/TA_Help/Topics/Integration_QC_intro.html)

**Next topic:**[Continuous integration \(CI\) tools](/TA_Help/Topics/Integration_xUnit.html)

**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

