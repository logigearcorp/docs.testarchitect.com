--- 
title: "Creating TFS test suites and test cases"
linktitle: "Creating TFS test suites and test cases"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_MTM_creating_MTM_test_suite.html
---
# Creating TFS test suites and test cases {#creating_MTM_test_suite .task}

TFS creates a test ID each time you add a new test case to a test suite. This ID is required when mapping TFS test cases to test methods.

To create TFS test suites and add test cases:

1.  Run MTM and connect it to the team project from TFS where your project resides.

    -   Visual Studio 2017, 2015 \([learn more](https://docs.microsoft.com/id-id/vsts/manual-test/mtm/connect-microsoft-test-manager-to-your-team-project-and-test-plan?view=vsts)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380739(v=vs.120).aspx).
2.  In the MTM **Testing Center**, create test suites and add test cases.

    -   Visual Studio 2017, 2015 \([learn more](https://www.visualstudio.com/en-us/docs/test/manual-exploratory-testing/getting-started/create-test-cases)\).
    -   Visual Studio [2013](https://msdn.microsoft.com/en-us/library/dd380763(v=vs.120).aspx).

An MTM window appears displaying all created test cases:

![](../Images/MTM_test_IDs.png)

Make note of TFS test case IDs that you want to map with your test methods or TestArchitect test cases.

**Parent topic:**[Automating a test case in Microsoft Test Manager](../../TA_Help/Topics/ug_MTM_automating_TC.html)

**Next topic:**[Creating a test method](../../TA_Help/Topics/ug_MTM_test_methods.html)

