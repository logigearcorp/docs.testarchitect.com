--- 
title: "Automatically uploading TestArchitect test results to Zephyr"
linktitle: "Automatically uploading TestArchitect test results to Zephyr"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_Zephyr_auto_uploading_results.html
---

You can configure TestArchitect to automatically upload test results to Zephyr upon conclusion of a test run.

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

To automatically upload TestArchitect test results to Zephyr after execution:

1.  In TestArchitect, initiate the Execute Test dialog box.

2.  Switch to the **Advanced** tab and then select the select the **Upload result to Zephyr** checkbox.

    ![](/images//Images/Zephyr_auto_upload_results_settings.png)

3.  Under the **Upload result to Zephyr** checkbox,

    1.  Click the Browse ![](/images//Images/btn.browse-ellipsis.02.png) button.

    2.  In the Select location in Zephyr dialog box, select the destination in Zephyr where you want to upload the TestArchitect test result.

        ![](/images//Images/Zephyr_auto_upload_results_destination.png)

    3.  Deselect the **Include attachment** checkbox if you do not want to upload the details of the test result\(s\) as attachment\(s\) in ZIP format to Zephyr, but only the execution status of the test case\(s\) and its/their individual test steps.

4.  Click the **Execute** button in the Execute Test dialog box.

    As soon as the test run finishes or is terminated, TestArchitect will upload the corresponding test results to the specified location in Zephyr.


To view the uploaded results on Zephyr, see [Viewing uploaded test results on Zephyr](/TA_Help/Topics/ug_Zephyr_viewing_uploaded_results.html).

**Parent topic:**[Uploading TestArchitect test results to Zephyr](/TA_Help/Topics/ug_Zephyr_uploading_results.html)

**Next topic:**[Manually uploading TestArchitect test results to Zephyr](/TA_Help/Topics/ug_Zephyr_manual_uploading_results.html)

