--- 
title: "Importing local test results from .TARESULT files"
linktitle: "Local test results"
aliases: 
    - /TA_Help/Topics/ug_importing_local_test_results.html
---
# Importing local test results from .TARESULT files {#task_grb_g4p_p1b .task}

How to import your local test result files \(.TARESULT\) into TestArchitect as either local or repository results.

-   Option \#1: Import local test result files \(.TARESULT\) as local results.

    1.  In the TestArchitect explorer tree, right-click the **LOCAL RESULTS** node, and then select **Import Test Result\(s\)**.

    2.  In the Select dialog box, browse to the location where the test result archive file \(.TARESULT\) is stored.

    3.  Click **Select**.

        **Note:** When identical test results are imported, the duplicate ones will be ignore during import operations.

        A notification message dialog box appears to inform that the import is successful.

        ![](../Images/Import_test_res_success.png)

    4.  In the dialog box, click **OK** to proceed.

        The test result file is imported as a local result successfully, and located under the **LOCAL RESULTS** node.

        ![](../Images/imported_test_results.png)

-   Option \#2: Import local test result files \(.TARESULT\) as repository results.

    **Warning:** When your local result files \(.TARESULT\) contain [captured screenshots](ug_Screenshot_recording.html), but they are imported as repository test results, the screenshots are totally discarded.

    1.  In the TestArchitect explorer tree, right-click the **Results** node or a test result folder, and then select **Import Test Result\(s\)** \> **from TARESULT file**.

    2.  In the Select dialog box, browse to the location where the test result archive file \(.TARESULT\) is stored.

    3.  Click **Select**.

        **Note:** When identical test results are imported, the duplicate ones will be ignore during import operations.

        A notification message dialog box appears to inform that the import is successful.

        ![](../Images/Import_test_res_success.png)

    4.  In the dialog box, click **OK** to proceed.

        The test result file is imported as a repository result successfully, and located under the specified location, that is, either under the **Results** node or a folder result.


**Parent topic:**[Importing test results from .TARESULT files](../../TA_Help/Topics/ug_importing_test_results.html)

**Next topic:**[Importing repository test results from .TARESULT file](../../TA_Help/Topics/ug_importing_repo_test_results.html)

