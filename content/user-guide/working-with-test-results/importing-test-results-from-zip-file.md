--- 
title: "Importing test results from ZIP file"
linktitle: "Importing test results from ZIP file"
description: "TestArchitect lets you easily import a repository test result archive file (.ZIP format)."
weight: 7
aliases: 
    - /TA_Help/Topics/Test_result_import.html
keywords: "test results, zip, importing from, importing, test results, zip"
---

TestArchitect lets you easily import a repository test result archive file \(.ZIP format\).

{{<important>}} Legacy repository test result files \(.ZIP\), which have been exported in TestArchitect versions prior to [8.3 Update 2](/user-guide/version-history/features-added-to-testarchitect-8-3-update-2/), are still be imported into TestArchitect. Please note that, since TestArchitect 8.3 Update 2, test results are [exported](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-taresult-files/) to .TARESULT files, and [imported](/user-guide/working-with-test-results/importing-test-results-from-taresult-files/) from .TARESULT files, instead.

1.  In the TestArchitect explorer tree, right-click the **Results** node or a test result folder, and then select **Import Test Result\(s\)** \> **from ZIP file**.

    A notification message dialog box appears to inform that the support of .ZIP test result files will be soon dropped in next TestArchitect versions. It is highly recommended that you apply .TARESULT files, instead.

    ![](/images/TA_Help/Images/Import_zip_result_notification.png)

2.  In the dialog box, click **OK** to proceed.

    {{<tip>}} Select the **Don't display this message again** check box to skip this dialog box in the future.

3.  In the Select dialog box, browse to the location where the repository test result archive file \(.ZIP\) is stored.

4.  Click **Select**.

    A notification message dialog box appears to inform that the result import is successful.

    ![](/images/TA_Help/Images/Import_test_res_success.png)

5.  In the dialog box, click **OK**.


The repository test result file is imported successfully, and located under the specified location, that is, either under the **Results** node or a folder result.




**Related information**  


[Working with test results](/user-guide/working-with-test-results/)

[Exporting test results](/user-guide/working-with-test-results/exporting-test-results/)

