--- 
title: "Manually uploading TestArchitect test results to Zephyr"
linktitle: "Manually uploading TestArchitect test results to Zephyr"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Zephyr_manual_uploading_results.html
---

TestArchitect test results from projects or test cases which are mapped to Zephyr can be uploaded to Zephyr by manual means as well as automatic.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](/TA_Help/Topics/ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](/TA_Help/Topics/ug_Zephyr_mapping_projects.html).
-   In Zephyr, added the tests to a test cycle and assigned them to a user.

    **Note:** Test cycles, and the test phases which comprise them, are Zephyr entities and are beyond the scope of this help system. Further information on them is available at [https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263554868/Test+Planning](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263554868/Test+Planning).


**Restriction:**

-   In TestArchitect 8.4 Update 1 or earlier versions, if you have selected the **Create New** option while adding a new testing phase to a testing cycle in **Test Planning** in Zephyr, you will be unable to upload TestArchitect test results to Zephyr either manually or automatically \(Learn more\).

To manually upload TestArchitect test results to Zephyr:

1.  In the TestArchitect explorer tree or [a result list view](/TA_Help/Topics/Listview_results.html), right-click the preferred test result or test result folder, and then select **External Tool** \> **Zephyr** \> **Upload to Zephyr**.

2.  In the Select Test Case To Upload dialog box,

    ![](/images//Images/Zephyr_manual_upload_results.png)

    1.  Select the destination in Zephyr where you want to upload the TestArchitect test result\(s\).

    2.  Deselect the **Include attachment** checkbox if you do not want to upload the details of the test result\(s\) as attachment\(s\) to Zephyr, but only update the execution status of the test case\(s\) and its/their individual test steps.

    3.  Click **OK**

    Upon successful completion of the upload, a confirmation dialog box is displayed:

    ![](/images//Images/Zephyr_successful_auto_upload_results.png)

3.  Click **OK** to close the confirmation dialog box.


TestArchitect test results are uploaded to Zephyr in ZIP format.

To view the uploaded results on Zephyr, see the [next topic](/TA_Help/Topics/ug_Zephyr_viewing_uploaded_results.html).

**Parent topic:**[Uploading TestArchitect test results to Zephyr](/TA_Help/Topics/ug_Zephyr_uploading_results.html)

**Previous topic:**[Automatically uploading TestArchitect test results to Zephyr](/TA_Help/Topics/ug_Zephyr_auto_uploading_results.html)

**Next topic:**[Viewing uploaded test results on Zephyr](/TA_Help/Topics/ug_Zephyr_viewing_uploaded_results.html)

