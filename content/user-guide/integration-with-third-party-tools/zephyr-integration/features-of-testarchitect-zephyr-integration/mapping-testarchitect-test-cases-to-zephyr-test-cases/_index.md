--- 
title: "Mapping TestArchitect test cases to Zephyr test cases"
linktitle: "Mapping TestArchitect test cases to Zephyr test cases"
description: "Mappings between TestArchitect and Zephyr test cases are generated automatically when Zephyr test cases are imported to TestArchitect, and when TestArchitect test cases are uploaded to Zephyr. There may be occasions, however, when you need to create a linkage between test cases created independently on the two systems."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_Zephyr_mapping_test_cases.html
keywords: "integration, Zephyr, mapping test cases"
---

Mappings between TestArchitect and Zephyr test cases are generated automatically when Zephyr test cases are imported to TestArchitect, and when TestArchitect test cases are uploaded to Zephyr. There may be occasions, however, when you need to create a linkage between test cases created independently on the two systems.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](/TA_Help/Topics/ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](/TA_Help/Topics/ug_Zephyr_mapping_projects.html).
-   Created a Zephyr test case to map to the TestArchitect test case.

**Important:** A Zephyr test case can be mapped to no more than one TestArchitect test case, and vice-versa.

To map TestArchitect test cases to Zephyr test cases, do the following steps:

1.  In the TestArchitect explorer tree, right-click the node of a test module \(either [default](/TA_Help/Topics/Variations_default.html) or non-default [variation](/TA_Help/Topics/ug_TM_create_variation.html)\) containing the test cases to be mapped.

2.  Select **External Tool** \> **Zephyr** \> **Map Test Cases**.

3.  The Map Test Case to Zephyr dialog box appears. In the Map Test Case to Zephyr dialog box, for each test case that you wish to have mapped to a Zephyr test case, enter the Zephyr test case ID into the **Source** column, then click **OK**.

    **Note:** If any of the listed TestArchitect test cases are already mapped, the corresponding Zephyr test case ID is displayed in the **Source** column. It may be overwritten.

    In this example, the user has opted to map three TestArchitect test cases, `TC 01`, `TC 02` and `TC 03`, to Zephyr test cases with IDs `566`, `567` and `568`, respectively:

    ![](/images/TA_Help/Images/Zephyr_mapping_test_cases.png)

    **Tip:** In the event that one or more of the Zephyr test cases that you attempt to map to are already mapped to other TestArchitect test cases, a message to that effect is displayed:

    ![](/images/TA_Help/Images/Zephyr_fail_mapping.png)

    Address this issue with the following steps:

    1.  Click **OK** in the warning dialog box.

    2.  In the Map Test Case to Zephyr dialog box, the previously mapped Zephyr test cases are displayed in red. In each case, you have the option of entering a new Zephyr test case ID, or deleting the **Source ID**, which unmaps the previous TestArchitect test case from it. The new TestArchitect test case can now be mapped to the Zephyr ID.

        ![](/images/TA_Help/Images/Zephyr_fail_mapping_red.png)

    3.  Click **OK**.

    **Tip:** If any of the specified Zephyr test cases do not exist in the Zephyr server, a warning dialog box displays the test cases that could not be mapped:

    ![](/images/TA_Help/Images/Zephyr_fail_mapping_1.png)

    Resolve this by doing the following:

    1.  On the Zephyr server, determine which Zephyr test cases are available for mapping.

    2.  Close the dialog box by clicking the **X** button.

    3.  Repeat steps \#1 through \#3.


Ultimately, an information dialog box appears indicating the test case mapping process was successful. Click **OK** to close this dialog box.

![](/images/TA_Help/Images/Zephyr_mapping_succeed.png)




