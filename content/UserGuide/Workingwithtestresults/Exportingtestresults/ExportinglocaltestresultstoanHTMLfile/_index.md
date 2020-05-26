--- 
title: "Exporting local test results to an HTML file"
linktitle: "Exporting local test results to an HTML file"
weight: 2
aliases: 
    - /TA_Help/Topics/Test_result_export_HTML.html
---
# Exporting local test results to an HTML file {#Test_result_export_HTML .task}

How to export your test results to an HTML file.

You have two options for exporting your test results to HTML:

-   **Option \#1**: Manually exporting test results to HTML.

    1.  Select the local test results that you want to export to an HTML file.

        **Tip:** You can select local test results in the TestArchitect explorer tree, or on the [local test result list view](Listview_results_local.html).

    2.  Invoke the Save Result\(s\) To File dialog box by doing one of the following:

        -   Right-click the selection, and then click **Export** \> **to HTML file**.
        -   Double-click the selection, and then click the **Save to file** ![](../Images/Save_to_file_HTML_icon.png) icon on the main panel's toolbar.
    3.  In the Save Result\(s\) To File dialog box, choose a location to which to save the HTML file.

        ![](../Images/Save_results_to_file_dlg.png)

        You can accept the default location, but any place that is easy to remember will work.

    4.  If you'd like, TestArchitect creates subdirectories to store the exported HTML results, select the **Create folder structure** check box.

        Specifically, two options are available as follows.

        -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
        -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
    5.  If the exported test result is a master result, that is, it is a [test suite result](ug_test_results_introduction.md#section.TS_results) or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.

    6.  To export HTML results with your own view layout, select the **Apply customized XSLT template** check box, and then choose a location of your customized XSLT template.

        You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](ug_customizing_XML_report.html) to suit your desired view layout. \(See more examples [here](ug_customizing_XML_report.html).\)

        **Attention:** When your customized XSLT is invalid, the default XSLT template, located at the following places, is automatically applied.

        -   Windows: \{TA\_INSTALL\_DIR\}\\templates\\xsl\\
        -   Linux: /usr/local/logigear/testarchitect/templates/xsl/
        -   macOS: /Applications/TestArchitect/templates/xsl/
        **Note:** if you are using a repository on another machine, make sure that the template you choose is accessible to the repository server under the account that starts the repository server service. It means that the template needs placing either on the repository server or in a network shared folder. Otherwise, the default template will be used.

    7.  To include all captured screenshots in the exported test result, select the **Include screenshots** check box. With this option chosen, select one of the following:

        -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
        -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    8.  To open the parent folder containing the exported test result, select the **Open folder after saving** check box.

    9.  Click **Save**.

    The local test results are exported to an HTML file at the specified location.

-   **Option \#2**: Directing TestArchitect to automatically export test results to HTML upon test completion.

    1.  In TestArchitect Client, select the test module\(s\) that you want to execute.

    2.  Click the **Execute** ![](../Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

        The Execute Test dialog box appears.

    3.  Click the Advanced tab.

    4.  Select the **Export Result\(s\) to HTML** check box.

    5.  Click ![](../Images/btn.browse-ellipsis.01.png) to choose a location to which to save the HTML file.

        ![](../Images/export_repo_result_HTML_screenshot_automatic.png)

        You can choose the default location, but any place that is easy to remember will work.

    6.  If you'd like, TestArchitect creates subdirectories to store the exported HTML results, select the **Create folder structure** check box.

        Specifically, two options are available as follows.

        -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
        -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
    7.  If the exported test result is a master result, that is, it is a [test suite result](ug_test_results_introduction.md#section.TS_results) or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.

    8.  To export HTML results with your own view layout, select the **Apply customized XSLT template** check box, and then choose a location of your customized XSLT template.

        ![](../Images/export_repo_result_HTML_customized_XSLT_automatic.png)

        You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](ug_customizing_XML_report.html) to suit your desired view layout. \(See more examples [here](ug_customizing_XML_report.html).\)

        **Attention:** When your customized XSLT is invalid, the default XSLT template, located at the following places, is automatically applied.

        -   Windows: \{TA\_INSTALL\_DIR\}\\templates\\xsl\\
        -   Linux: /usr/local/logigear/testarchitect/templates/xsl/
        -   macOS: /Applications/TestArchitect/templates/xsl/
        **Note:** if you are using a repository on another machine, make sure that the template you choose is accessible to the repository server under the account that starts the repository server service. It means that the template needs placing either on the repository server or in a network shared folder. Otherwise, the default template will be used.

    9.  To include all captured screenshots in the exported test result, select the **Include screenshots** check box. With this option chosen, select one of the following:

        -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
        -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    10. Click **Execute**.

    TestArchitect saves the settings in the Advanced Setting tab and executes the test\(s\). Once execution is complete, the test results are automatically exported to an HTML file at the specified location.

    **Note:** If you opt to generate a batch file \(rather than execute the test immediately\), the following parameters are written to the generated file. \([Learn more](Test_exec_cmd.md#plentry.paramters_html)\).

    -html
    :   Location and filename to which to store the test result report in HTML form.

    -htmlscrn
    :   Keeps captured screenshots when exporting test results to HTML.

    -subhtml
    :   Exports the master result and its subresults into HTML.

    -xsl
    :   Location to store the customized XSLT template

    -subfld
    :   Whether a flat structure directory or a folder structure directory is employed to store HTML results.


**Parent topic:**[Exporting test results](../../TA_Help/Topics/Test_result_export.html)

**Previous topic:**[Exporting test results to .TARESULT files](../../TA_Help/Topics/ug_test_results_export_TARESULT.html)

**Next topic:**[Exporting repository test results to an HTML file](../../TA_Help/Topics/ug_test_results_export_repository_results_HTML.html)

**Related information**  


[Working with test results](../../TA_Help/Topics/Test_result.html)

[Exporting test results](../../TA_Help/Topics/Test_result_export.html)

