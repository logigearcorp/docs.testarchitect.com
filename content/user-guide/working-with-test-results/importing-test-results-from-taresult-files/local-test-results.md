--- 
title: "Importing local test results from .TARESULT files"
linktitle: "Importing local test results from .TARESULT files"
description: "How to import your local test result files (.TARESULT) into TestArchitect as either local or repository results."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_importing_local_test_results.html
keywords: "test results, local, TARESULT, importing from, importing, test results, local, TARESULT"
---

How to import your local test result files \(.TARESULT\) into TestArchitect as either local or repository results.

-   Option \#1: Import local test result files \(.TARESULT\) as local results.

    1.  In the TestArchitect explorer tree, right-click the **LOCAL RESULTS** node, and then select **Import Test Result\(s\)**.

    2.  In the Select dialog box, browse to the location where the test result archive file \(.TARESULT\) is stored.

    3.  Click **Select**.

        {{<note>}} When identical test results are imported, the duplicate ones will be ignore during import operations.

        A notification message dialog box appears to inform that the import is successful.

        ![](/images/TA_Help/Images/Import_test_res_success.png)

    4.  In the dialog box, click **OK** to proceed.

        The test result file is imported as a local result successfully, and located under the **LOCAL RESULTS** node.

        ![](/images/TA_Help/Images/imported_test_results.png)

-   Option \#2: Import local test result files \(.TARESULT\) as repository results.

    {{<warning>}} When your local result files \(.TARESULT\) contain [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/), but they are imported as repository test results, the screenshots are totally discarded.

    1.  In the TestArchitect explorer tree, right-click the **Results** node or a test result folder, and then select **Import Test Result\(s\)** \> **from TARESULT file**.

    2.  In the Select dialog box, browse to the location where the test result archive file \(.TARESULT\) is stored.

    3.  Click **Select**.

        {{<note>}} When identical test results are imported, the duplicate ones will be ignore during import operations.

        A notification message dialog box appears to inform that the import is successful.

        ![](/images/TA_Help/Images/Import_test_res_success.png)

    4.  In the dialog box, click **OK** to proceed.

        The test result file is imported as a repository result successfully, and located under the specified location, that is, either under the **Results** node or a folder result.




