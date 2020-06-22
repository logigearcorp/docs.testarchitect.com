--- 
title: "Exporting test results to xUnit"
linktitle: "Exporting test results to xUnit"
description: "How to export your test results to an XML file in xUnit format."
weight: 5
aliases: 
    - /TA_Help/Topics/Test_result_export_xUnit.html
keywords: "test results, xUnit, exporting to, exporting, xUnit"
---

How to export your test results to an XML file in xUnit format.

Choose one of the following two methods to export test results to xUnit:

-   **Option 1**: Manually exporting test results to an xUnit file.

    1.  Select the test results that you want to export to xUnit.

{{<tip>}} You can select test results in the TestArchitect explorer tree, or in the [result list view](/TA_Help/Topics/Listview_results.html).

    2.  Right-click the selection, and click **Export** \> **to xUnit** .

    3.  In the Save As dialog box, choose a location and file name to which to save the xUnit file.

{{<tip>}} You can accept the default location, but any place that is easy to remember will work.

    4.  Click **Save**.

        The test results are exported to the specified XML file in xUnit format.

-   **Option 2**: Automatically exporting test results to an xUnit file upon test completion.

    1.  In the TestArchitect explorer tree, select the test module\(s\) that you want to execute.

    2.  Click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

    3.  In the Execute Test dialog box, click the Advanced Setting tab.

    4.  Select the **Export Result\(s\) to xUnit** check box.

    5.  Click the **Browse** ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) button to choose a location and file name to which to save the xUnit file.

{{<tip>}} You can choose the default location, but any place that is easy to remember will work.

    6.  Click **Execute**.

        TestArchitect saves the settings on the Advanced Setting tab and executes the test\(s\). After test execution completes, TestArchitect automatically exports the test results to the xUnit file at the specified location.




**Related information**  


[Working with test results](/TA_Help/Topics/Test_result.html)

[Exporting test results](/TA_Help/Topics/Test_result_export.html)

