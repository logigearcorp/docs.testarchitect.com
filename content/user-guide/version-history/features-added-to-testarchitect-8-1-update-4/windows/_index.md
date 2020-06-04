--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_4_Windows.html
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 4 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

-   [**Import/Export command line tool**](/TA_Help/Topics/ug_export_import_tool.html): The import and export of repositories and project items has long been possible in TestArchitect, but only within the confines of TestArchitect Client. With the introduction of the Import/Export tool, your import and export operations may now be incorporated into Windows batch files, a feature that is especially useful in environments that employ continuous integration \(CI\) practices. The tool itself consists of a set of command line commands that mirror the Client’s abilities to import and export test modules, test cases, data sets, actions, interface entities, and test results, along with full repositories.

    **Note:** This functionality has also been incorporated into the TAUtilities API in the form of six new methods. Please see the TAUtilities API documentation available in the TestArchitect **Help** menu for details.

-   [**Variation for test modules**](/TA_Help/Topics/ug_TM_create_variation.html): Project item variation is now supported for test modules, enhancing modularity by limiting test changes to applicable sections, while allowing your test to otherwise remain intact from one version to the next.

## TestArchitect Automation

-   New **built-in actions for data sets**:
    -   [add data set column](/TA_Automation/Topics/bia_add_data_set_column.html): Append new column\(s\) to a data set.
    -   [set data set value](/TA_Automation/Topics/bia_set_data_set_value.html): Set the value of one or more cells of a column in a data set.
    -   [check in data set](/TA_Automation/Topics/bia_check_in_data_set.html): Check in a data set.
-   New exported **methods** of AbtDataSet for user-scripted actions \(applicable to C\# harness only\):
    -   [CheckIn](/TA_Automation/Topics/abt_CheckIn.html): Check a data set in to the repository.
    -   [CheckOut](/TA_Automation/Topics/abt_CheckOut.html): Check out a data set.

**Enhancements to existing features**

-   Several existing public API methods \(applicable to C\# harness only\) are now reordered into a new [AbtDataSetManagement](/TA_Automation/Topics/abt_AbtDataSetManagement.html) class provided for user-scripted actions that interact with data sets. The public API methods are as follows:
    -   [CreateDataRow](/TA_Automation/Topics/abt_CreateDataRow.html): Create a new data row with specified contents.
    -   [CreateDataSet](/TA_Automation/Topics/abt_CreateDataSet.html): Create a new data set object.
    -   [DoesDataSetExist](/TA_Automation/Topics/abt_DoesDataSetExist.html): Check whether a data set exists.
    -   [GetDataSet](/TA_Automation/Topics/abt_GetDataSet.html): Retrieve a data set's contents. Note that this method may be applied to a data set in the current project or a supplier project, and it accesses the appropriate variation of the specified data set based on the existing runtime variation specification.

**Parent topic:**[Features added to TestArchitect 8.1 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_4.html)

