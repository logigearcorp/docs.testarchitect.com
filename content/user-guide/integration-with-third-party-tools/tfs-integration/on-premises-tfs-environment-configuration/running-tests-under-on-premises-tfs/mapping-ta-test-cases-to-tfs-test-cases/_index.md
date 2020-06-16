--- 
title: "Mapping TA test cases to TFS test cases"
linktitle: "Mapping TA test cases to TFS test cases"
description: "Mappings, or links, between TFS test cases and their counterparts in TA allow for the execution of TestArchitect tests to be initiated from MTM or the Test hub. These mappings are established automatically whenever test assets are exchanged (imported and uploaded) between TA and TFS. They may also be established manually, by you, as discussed in this topic."
weight: 11
aliases: 
    - /TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html
keywords: "Microsoft Test Manager, mapping test cases, MTM, test suites, Microsoft Test Manager, creating, integration, creating test suites, test suites, mapping"
---

Mappings, or links, between TFS test cases and their counterparts in TA allow for the execution of TestArchitect tests to be initiated from MTM or the Test hub. These mappings are established automatically whenever test assets are exchanged \(imported and uploaded\) between TA and TFS. They may also be established manually, by you, as discussed in this topic.

You must have taken the following steps before you can map TestArchitect test cases with TFS test cases:

-   Registered the TFS server with TestArchitect. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html).\)
-   Mapped the TestArchitect project containing the test cases of interest to a TFS project. \([Learn more](/TA_Help/Topics/Integration_MTM_map_proj.html).\)
-   Created TFS test cases to be mapped with their TestArchitect counterparts.
-   Created a TestArchitect test module that you want to map with TFS.

1.  In the TestArchitect explorer tree, right-click the **Test** node, a test folder node, or a test module node containing the test cases to be mapped.

2.  Select **External Tool** \> **Visual Studio** \> **Map Test Cases**.

3.  In the Map Test Cases to Team Foundation Server dialog box, for each test case that you wish to have mapped to a TFS test case, enter the TFS test case ID into the **Source** column, then click **OK**.

    ![](/images/TA_Help/Images/MTM_map_test_cases.png)

    **Important:**

    -   Each TFS source ID can only be mapped to a single TestArchitect test case.
    -   If the TFS source ID has been mapped to another TestArchitect test case, that source ID is highlighted in red.
    **Fastpath:** Alternatively, you can also quickly map a TestArchitect test case to a TFS test cases in the **Information** tab of the TestArchitect test case.

    ![](/images/TA_Help/Images/ug_MTM_mapTC.png)

4.  Click **OK**.





