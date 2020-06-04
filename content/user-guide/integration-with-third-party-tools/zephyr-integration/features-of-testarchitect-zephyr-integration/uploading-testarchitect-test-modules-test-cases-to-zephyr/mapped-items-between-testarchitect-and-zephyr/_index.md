--- 
title: "Mapped items between TestArchitect and Zephyr"
linktitle: "Mapped items between TestArchitect and Zephyr"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_Zephyr_mapped_items.html
---

This topic describes how TestArchitect test case information is mapped to the corresponding Zephyr test case fields.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

TestArchitect items are uploaded to Zephyr as follows:

-   Uploading a TestArchitect test module to Zephyr also uploads that test module’s test cases.
-   Each TestArchitect test case's **Title** and **ID** fields are combined and joined by an underscore to become a Zephyr **test case name**.

    ![](/images//Images/Zephyr_mapped_ID_Name_6.1.png)

-   Additionally, the TestArchitect test case **Title** field is uploaded to the **Comment** of a Zephyr test case, while the TestArchitect test case's **ID** becomes **Alt. ID** of the Zephyr test case.

    ![](/images//Images/Zephyr_mapped_title_6.1.png)

    |TestArchitect|Zephyr|
    |-------------|------|
    |Test case **Title** + Test case **ID**|→ Test case name|
    |Test case **Title**|→ Test case's **Comment**|
    |Test case's **ID**|→ Test case's **Alt ID**|

-   TestArchitect action lines as well as test steps are mapped to Zephyr test steps.
-   For each TestArchitect action line, argument names and their values are paired and mapped to **Test Data** in Zephyr.
-   Expected results of TestArchitect check actions and test steps \(the contents of the third column\) become **Expected Results** in Zephyr.

    ![](/images//Images/Zephyr_mapped_actions_6.1.png)

-   Each TestArchitect test objective is copied to the corresponding Zephyr test case, provided that you have created a custom field in Zephyr to accept it.

    **Remember:** The custom field in Zephyr must be named **Test Objective**, and have the attribute Long Text \(32000\). \(See [Creating matching custom fields in TestArchitect and Zephyr](ug_Zephyr_creating_custom_fields.html) for details.\)

    ![](/images//Images/Zephyr_mapped_TO_6.1.png)


**Note:** The lower panel of a Zephyr test case, which displays the details of that TestArchitect test sequence \(including **\#**, **Test Steps**, **Test Data**, and **Expected Results** fields\), can only be written to when the test case is initially generated \(that is, on the first upload\). After that, due to Zephyr limitations, the data is effectively read-only. That is, subsequent uploads of the same TestArchitect test modules and test cases have no effect on the contents of the lower panels of affected Zephyr test cases. \(Note, however, that this information is strictly documentary. Whether outdated or not, it has no effect on tests that are initiated from Zephyr.\)

**Parent topic:**[Uploading TestArchitect test modules/test cases to Zephyr](/TA_Help/Topics/ug_Zephyr_upload_TA_TM_TC.html)

