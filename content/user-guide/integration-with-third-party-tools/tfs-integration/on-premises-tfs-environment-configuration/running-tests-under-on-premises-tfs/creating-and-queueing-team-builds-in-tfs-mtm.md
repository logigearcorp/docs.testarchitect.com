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

1.  Create and configure a [TFS build definition](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/creating-and-configuring-a-build-definition/).

2.  After creating and configuring a TFS build definition, [run](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/queuing-a-new-build/queueing-a-new-xaml-build) it to create a build instance to be associated with a test plan.


When integrated with TestArchitect, keep in mind the following:

{{<important>}} This task is one that must often be repeated, especially when you have modified mapped TFS test cases. \(For example, you remove or add test cases, or change the order of a test case run.\) When you do so, the association between TFS test cases and Visual Studio test methods/TestArchitect test cases is compromised. Hence, it is necessary that you perform the following steps again:

1.  Re-[associate](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases) TestArchitect test cases with TFS test cases.
2.  Check in your project.
3.  [Queue](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/installing-and-configuring-microsoft-components-for-on-premises-tfs/automating-a-test-case-in-mtm/queuing-a-new-build/) the build.




