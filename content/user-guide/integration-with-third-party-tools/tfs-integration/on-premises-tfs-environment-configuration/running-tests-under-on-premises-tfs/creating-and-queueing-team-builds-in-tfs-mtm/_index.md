--- 
title: "Creating and queueing team builds in TFS-MTM"
linktitle: "Creating and queueing team builds in TFS-MTM"
description: "To run automated tests in MTM, create a team build that includes your test project, and add the build to your test plan."
weight: 7
aliases: 
    - /TA_Help/Topics/ug_MTM_test_execution_creating_team_builds.html
keywords: "Microsoft Test Manager, creating/queueing builds, prerequisites, MTM, executing tests, creating/queueing builds, executing tests, MTM, creating/queueing builds"
---

To run automated tests in MTM, create a team build that includes your test project, and add the build to your test plan.

1.  Create and configure a [TFS build definition](/TA_Help/Topics/ug_MTM_build_definition.html).

2.  After creating and configuring a TFS build definition, [run](/TA_Help/Topics/MTM_queue_XAML_build.html) it to create a build instance to be associated with a test plan.


When integrated with TestArchitect, keep in mind the following:

**Important:** This task is one that must often be repeated, especially when you have modified mapped TFS test cases. \(For example, you remove or add test cases, or change the order of a test case run.\) When you do so, the association between TFS test cases and Visual Studio test methods/TestArchitect test cases is compromised. Hence, it is necessary that you perform the following steps again:

1.  Re-[associate](/TA_Help/Topics/ug_MTM_associate.html) TestArchitect test cases with TFS test cases.
2.  Check in your project.
3.  [Queue](/TA_Help/Topics/ug_MTM_queue_build.html) the build.




