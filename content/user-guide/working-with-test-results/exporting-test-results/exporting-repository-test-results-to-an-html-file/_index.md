--- 
title: "Exporting repository test results to an HTML file"
linktitle: "Exporting repository test results to an HTML file"
description: "In addition to .ZIP format, repository test results may be exported to .HTML files."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_test_results_export_repository_results_HTML.html
keywords: "test results, repository, HTML, exporting to, exporting, test results, repository, HTML"
---

In addition to .ZIP format, repository test results may be exported to .HTML files.

Ensure that the test results you want to export are [stored in the repository](/TA_Help/Topics/Test_result_storing.html).

1.  Select the repository test results that you want to export to the HTML file.

    {{<tip>}} You can select repository results in the TestArchitect explorer tree, or in the [repository result list view](/TA_Help/Topics/Listview_results_repository.html).

2.  Right-click the selection and click **Export** \> **to HTML file**.

3.  In the Save Result\(s\) To File dialog box, choose a location in which to save the HTML file.

    You can choose the default location, but any place that is easy to remember will work.

    ![](/images/TA_Help/Images/Save_repo_results_to_html.png)

4.  If you'd like, TestArchitect creates subdirectories to store the exported HTML results, select the **Create folder structure** check box.

    Specifically, two options are available as follows.

    -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
    -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
5.  If the exported test result is a master result, that is, it is a [test suite result](/TA_Help/Topics/ug_test_results_introduction.html#section.TS_results) or it contains [subresults](/TA_Help/Topics/ug_test_results_introduction.html#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.

6.  To export HTML results with your own view layout, select the **Apply customized XSLT template** check box, and then choose a location of your customized XSLT template.

    You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](/TA_Help/Topics/ug_customizing_XML_report.html) to suit your desired view layout. \(See more examples [here](/TA_Help/Topics/ug_customizing_XML_report.html).\)

    {{<attention>}} When your customized XSLT is invalid, the default XSLT template, located at the following places, is automatically applied.

    -   Windows: \{TA\_INSTALL\_DIR\}\\templates\\xsl\\
    -   Linux: /usr/local/logigear/testarchitect/templates/xsl/
    -   macOS: /Applications/TestArchitect/templates/xsl/
    {{<note>}} if you are using a repository on another machine, make sure that the template you choose is accessible to the repository server under the account that starts the repository server service. It means that the template needs placing either on the repository server or in a network shared folder. Otherwise, the default template will be used.

7.  To open the parent folder containing the exported test result, select the **Open folder after saving** check box.

8.  Click **OK**.


The repository test result is exported to an HTML file at the specified location.




