--- 
title: "Mapping TestArchitect test modules to Zephyr test cases"
linktitle: "Mapping TestArchitect test modules to Zephyr test cases"
weight: 4
aliases: 
    - /TA_Help/Topics/Zephyr_mapping_TM.html
---
# Mapping TestArchitect test modules to Zephyr test cases {#Zephyr_mapping_TM .reference}

Apart from TestArchitect test cases, you can map TestArchitect test modules to Zephyr test cases.

**Note:** Applies to TestArchitect 8.4 Update 3 and higher

**Remember:** Each Zephyr test case can only be mapped to a single TestArchitect test module.

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](ug_Zephyr_mapping_projects.html).

## Via Test module list view {#section_o1p_szl_jgb .section}

1.  In the TestArchitect explorer tree, double-click the test node that contains the test module to be mapped.
2.  On the **Test Modules** tab, double-click the preferred source ID in the **Source** column.

    ![](../Images/Zephyr_map_TM_listview.png)

3.  Type/change the source ID. Press Enter.

## Via the Source field on the Information tab {#section_el4_ccm_jgb .section}

1.  Open the test module to be mapped.
2.  On the **Information** tab, type/change the source ID in the **Source** field. Click the **Apply** button.

**Parent topic:**[Features of TestArchitect-Zephyr integration](../../TA_Help/Topics/ug_Zephyr_features.html)

**Previous topic:**[Mapping TestArchitect test cases to Zephyr test cases](../../TA_Help/Topics/ug_Zephyr_mapping_test_cases.html)

**Next topic:**[Uploading TestArchitect test results to Zephyr](../../TA_Help/Topics/ug_Zephyr_uploading_results.html)

