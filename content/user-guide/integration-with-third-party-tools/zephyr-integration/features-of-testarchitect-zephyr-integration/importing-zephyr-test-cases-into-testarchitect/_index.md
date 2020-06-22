--- 
title: "Importing Zephyr test cases into TestArchitect"
linktitle: "Importing Zephyr test cases into TestArchitect"
description: "Test cases residing on Zephyr can be imported into TestArchitect, which also establishes one-to-one mappings between the two sets of test cases."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_Zephyr_importing_Zephyr_test_cases.html
keywords: "integration, Zephyr, importing Zephyr test cases, importing Zephyr test cases"
---

Test cases residing on Zephyr can be imported into TestArchitect, which also establishes one-to-one mappings between the two sets of test cases.

{{<important>}} TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](/TA_Help/Topics/ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](/TA_Help/Topics/ug_Zephyr_mapping_projects.html).

{{<important>}} The following rules apply:

-   A Zephyr folder can be imported only as a TestArchitect test folder.
-   A Zephyr test case can be imported as a TestArchitect test module or a TestArchitect test case.
-   In previous versions of TestArchitect, Zephyr test steps are imported as commented test scripts in TestArchitect test modules/ test cases. From TestArchitect 8.4 Update 3 onwards, however, Zephyr test steps are imported as test steps in TestArchitect test modules/ test cases.

Importing of Zephyr test cases into TestArchitect can be done on a one-by-one basis or, alternatively, by importing a Zephyr folder into a TestArchitect test folder. Both methods are discussed.

1.  [Check out](/TA_Help/Topics/Project_items_checkout.html) the target TestArchitect test folder/test module into which you want to import the Zephyr folder/test case.

2.  In the TestArchitect explorer tree, right-click the target test folder / test module. Next, on the context menu, select **External Tool** \> **Zephyr** \> **Import from Zephyr**.

    The Import from Zephyr dialog box appears.

    ![](/images/TA_Help/Images/Zephyr_import_dlg.png)

3.  Locate the source Zephyr folder / test case to be imported into TestArchitect.

4.  Select the preferred options:

    -   Keep Folder Structure: Organize the uploaded tests in Zephyr in a similar way to those in TestArchitect.
    -   Scan Project for Existing Test Cases/Modules: if selected, the whole TestArchitect project will be scanned for test cases that already exist. Otherwise, the selected test node will be scanned.
5.  Click the **OK** button.

6.  The Confirm Overwriting dialog box appears, showing a list of test cases/ test modules that already exists in TestArchitect if any. Select the check boxes for the TestArchitect test cases / test modules that you want to overwrite with TestArchitect test cases/ test modules. Click the **OK** button.

    ![](/images/TA_Help/Images/Zephyr_import_overwrite_dlg.png)

{{<note>}} The **Copy to Clipboard** button is used to copy the list of existing test cases to the clipboard.

7.  An information dialog box will appear stating Import process completed successfully if the upload was successful. Click the **OK** button.


-   In case a Zephyr test case is imported as a TestArchitect test module, the name of the test module is made up of the Zephyr test case's ID and Zephyr test case's title separated by underscore \(\_\). For instance, 90\_TC01.
-   In case a Zephyr test case is imported as a test case in a TestArchitect test module, the title and ID of the TestArchitect test case are the same as title and ID of the Zephyr test case respectively.

**Importing Zephyr test steps into TestArchitect test steps:**

Zephyr test steps are imported into TestArchitect with their corresponding column name when you import test cases from Zephyr. See the example below for more details.

![](/images/TA_Help/Images/Zephyr_import_teststeps.png)

{{<note>}} If you want to import a custom column from Zephyr into TestArchitect, you must first [create new column](/TA_Administration/Topics/User_defined_fields_create.html#) in TestArchitect with the same name.



