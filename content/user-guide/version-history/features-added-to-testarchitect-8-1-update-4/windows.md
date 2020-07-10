--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.1 update 4 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_4_Windows.html
keywords: "Release Notes 8.1 Update 4, Windows, What is new, Windows, TestArchitect 8.1 Update 4, TestArchitect 8.1 Update 4, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 4 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## {{< expand >}} TestArchitect Client

-   [**Import/Export command line tool**](/user-guide/import-export-command-line-tool/): The import and export of repositories and project items has long been possible in TestArchitect, but only within the confines of TestArchitect Client. With the introduction of the Import/Export tool, your import and export operations may now be incorporated into Windows batch files, a feature that is especially useful in environments that employ continuous integration \(CI\) practices. The tool itself consists of a set of command line commands that mirror the Client’s abilities to import and export test modules, test cases, data sets, actions, interface entities, and test results, along with full repositories.

    {{<note>}} This functionality has also been incorporated into the TAUtilities API in the form of six new methods. Please see the TAUtilities API documentation available in the TestArchitect **Help** menu for details.

-   [**Variation for test modules**](/user-guide/tests/creating-a-test-module-variation): Project item variation is now supported for test modules, enhancing modularity by limiting test changes to applicable sections, while allowing your test to otherwise remain intact from one version to the next.

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#concept_what_new_8.1_U4_Wins__section_p2c_51b_cs} 

-   New **built-in actions for data sets**:
    -   [add data set column](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/add-data-set-column): Append new column\(s\) to a data set.
    -   [set data set value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/set-data-set-value): Set the value of one or more cells of a column in a data set.
    -   [check in data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/check-in-data-set): Check in a data set.
-   New exported **methods** of AbtDataSet for user-scripted actions \(applicable to C\# harness only\):
    -   [CheckIn](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/checkin): Check a data set in to the repository.
    -   [CheckOut](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdataset/checkout): Check out a data set.

**Enhancements to existing features**

-   Several existing public API methods \(applicable to C\# harness only\) are now reordered into a new [AbtDataSetManagement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/) class provided for user-scripted actions that interact with data sets. The public API methods are as follows:
    -   [CreateDataRow](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/createdatarow): Create a new data row with specified contents.
    -   [CreateDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/createdataset): Create a new data set object.
    -   [DoesDataSetExist](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/doesdatasetexist): Check whether a data set exists.
    -   [GetDataSet](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtdatasetmanagement/getdataset): Retrieve a data set's contents. Note that this method may be applied to a data set in the current project or a supplier project, and it accesses the appropriate variation of the specified data set based on the existing runtime variation specification.


