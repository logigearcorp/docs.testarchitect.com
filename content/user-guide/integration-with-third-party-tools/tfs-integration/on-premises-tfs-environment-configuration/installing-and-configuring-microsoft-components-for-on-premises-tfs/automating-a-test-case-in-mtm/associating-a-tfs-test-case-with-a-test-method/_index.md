--- 
title: "Associating a TFS test case with a test method"
linktitle: "Associating a TFS test case with a test method"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_MTM_codedUI_association.html
---

Association creates a linkage between a TFS test case and a test method in Visual Studio. You can link any unit test, coded UI test, or generic test to an TFS test case.

In this example, a coded UI test project \(CUIT\) is linked to a TFS test case by means of the following steps:

1.  Start Microsoft Visual Studio.

2.  Open your project, created in the [previous topic](/TA_Help/Topics/ug_MTM_test_methods.html), and then choose a test method.

3.  [Check in](https://docs.microsoft.com/en-us/vsts/tfvc/check-your-work-team-codebase?view=vsts#choose-the-files-you-want-to-check-in) your test method on the TFS server.

4.  [Build/rebuild](https://docs.microsoft.com/en-us/visualstudio/ide/building-and-cleaning-projects-and-solutions-in-visual-studio#to-build-or-rebuild-a-single-project) your project to compile all project files and components that have changed since the most recent build.

5.  [Associate](https://docs.microsoft.com/en-us/vsts/build-release/test/associate-automated-test-with-test-case?view=vsts#associate-your-test) the test method with the test case.


Once the association is complete, in the **Associated Automation** tab of the TFS test case, you see the following:

-   The **Automation status** field changes from Not Automated to Automated.
-   The **Automation test name**, **Automated test storage**, and **Automated test type** boxes include information pertaining to the associated test method.

![](/images//Images/MTM_association_codedUI_result.png)

**Parent topic:**[Automating a test case in Microsoft Test Manager](/TA_Help/Topics/ug_MTM_automating_TC.html)

**Previous topic:**[Creating a test method](/TA_Help/Topics/ug_MTM_test_methods.html)

**Next topic:**[Creating and configuring a build definition](/TA_Help/Topics/ug_MTM_build_definition.html)

