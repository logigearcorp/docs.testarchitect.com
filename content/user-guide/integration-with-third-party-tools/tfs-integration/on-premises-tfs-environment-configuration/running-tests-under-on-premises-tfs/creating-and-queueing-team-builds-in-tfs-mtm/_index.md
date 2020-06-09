--- 
title: "Creating and queueing team builds in TFS-MTM"
linktitle: "Creating and queueing team builds in TFS-MTM"
weight: 7
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution_creating_team_builds.html
---

To run automated tests in MTM, create a team build that includes your test project, and add the build to your test plan.

1.  Create and configure a [TFS build definition](ug_MTM_build_definition.html).

2.  After creating and configuring a TFS build definition, [run](MTM_queue_XAML_build.html) it to create a build instance to be associated with a test plan.


When integrated with TestArchitect, keep in mind the following:

**Important:** This task is one that must often be repeated, especially when you have modified mapped TFS test cases. \(For example, you remove or add test cases, or change the order of a test case run.\) When you do so, the association between TFS test cases and Visual Studio test methods/TestArchitect test cases is compromised. Hence, it is necessary that you perform the following steps again:

1.  Re-[associate](ug_MTM_associate.html) TestArchitect test cases with TFS test cases.
2.  Check in your project.
3.  [Queue](ug_MTM_queue_build.html) the build.

**Parent topic:**[Running automated tests under on-premises Team Foundation Server](/TA_Help/Topics/ug_MTM_test_execution.html)

**Previous topic:**[Associating TestArchitect and Team Foundation Server test cases in Visual Studio](/TA_Help/Topics/ug_MTM_associate.html)

**Next topic:**[Creating and configuring test plans](/TA_Help/Topics/ug_MTM_test_execution_configuring_test_plans.html)

