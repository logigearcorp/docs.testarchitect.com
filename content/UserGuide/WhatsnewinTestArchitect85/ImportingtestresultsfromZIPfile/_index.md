--- 
title: "Importing test results from ZIP file"
linktitle: "Importing test results from ZIP file"
aliases: 
    - /TA_Help/Topics/Test_result_import.html
---
# Importing test results from ZIP file {#Test_result_export_import_from_ZIPs .task}

TestArchitect lets you easily import a repository test result archive file \(.ZIP format\).

**Important:** Legacy repository test result files \(.ZIP\), which have been exported in TestArchitect versions prior to [8.3 Update 2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_2.html), are still be imported into TestArchitect. Please note that, since TestArchitect 8.3 Update 2, test results are [exported](ug_test_results_export_TARESULT.html) to .TARESULT files, and [imported](ug_importing_test_results.html) from .TARESULT files, instead.

1.  In the TestArchitect explorer tree, right-click the **Results** node or a test result folder, and then select **Import Test Result\(s\)** \> **from ZIP file**.

    A notification message dialog box appears to inform that the support of .ZIP test result files will be soon dropped in next TestArchitect versions. It is highly recommended that you apply .TARESULT files, instead.

    ![](../Images/Import_zip_result_notification.png)

2.  In the dialog box, click **OK** to proceed.

    **Tip:** Select the **Don't display this message again** check box to skip this dialog box in the future.

3.  In the Select dialog box, browse to the location where the repository test result archive file \(.ZIP\) is stored.

4.  Click **Select**.

    A notification message dialog box appears to inform that the result import is successful.

    ![](../Images/Import_test_res_success.png)

5.  In the dialog box, click **OK**.


The repository test result file is imported successfully, and located under the specified location, that is, either under the **Results** node or a folder result.

**Parent topic:**[Working with test results](../../TA_Help/Topics/Test_result.html)

**Previous topic:**[Exporting test results](../../TA_Help/Topics/Test_result_export.html)

**Next topic:**[Importing test results from .TARESULT files](../../TA_Help/Topics/ug_importing_test_results.html)

**Related information**  


[Exporting repository test results to a ZIP file](../../TA_Help/Topics/Test_result_export_ZIP.html)

[Working with test results](../../TA_Help/Topics/Test_result.html)

[Exporting test results](../../TA_Help/Topics/Test_result_export.html)

