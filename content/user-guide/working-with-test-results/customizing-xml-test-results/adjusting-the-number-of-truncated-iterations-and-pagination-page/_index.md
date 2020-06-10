--- 
title: "Adjusting the number of truncated iterations and pagination page"
linktitle: "Adjusting the number of truncated iterations and pagination page"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_modifying_truncated_iterations.html
---

Explain steps to adjust several parameters to optimize HTML test results.

To change the number of truncated iterations in test results and define whether pagination page is supported, perform the following steps:

1.  In a text editor such as Notepad, open the file:

    \{TA\_INSTALL\_DIR\}\\templates\\xsl\\TAResult.xsl.

    \{TA\_INSTALL\_DIR\}\\templates\\xsl\\common.xsl.

2.  Adjust the following parameters' values as you wish.

    -   `<xsl:param name="maxlinePaging" select="'20000'"/>`

        **Note:** When the total number of action lines in a test result is larger than a specified number, the test result will display everything in a single HTML page, or no pagination page is supported.

    -   `<xsl:param name="limit_Iterations_Number" select="500"/>`

        **Note:** When the total number of [iterations](/TA_Glossary/Topics/glossaryIteration.html) is larger than a specified number, TestArchitect automatically begins to truncate the number of iterations that are shown in a test result.

    -   `<xsl:param name="display_First_Iterations_Number" select="1"/>`

        **Note:** The number of first iterations that will be shown in a test result.

    -   `<xsl:param name="display_Next_Failure_Iterations_Number" select="3"/>`

        **Note:** The number of iterations, which contain errors, warnings, failures, etc., that will be shown next in a test result.

    -   `<xsl:param name="display_Last_Iterations_Number" select="1"/>`

        **Note:** The number of last iterations that will be shown in a test result.

    -   `<xsl:param name="display_Failure_Rows_Number" select="5"/>`

        **Note:** The number of rows that will be shown in the [**Failure Summary**](/TA_Help/Topics/Test_result_details.html#li.Error_warning_failures_summary) table.

3.  Clear the HTML cache by doing the following.

    1.  Open a test result's location on your machine.

        ![](/images//Images/customization_results_results_path_location.png)

    2.  Delete all files located under the html\_result folder.

4.  Re-open the test result

    The test result is updated to reflect the new changes.


**Parent topic:**[Customizing XML test results](/TA_Help/Topics/ug_customizing_XML_report.html)

**Previous topic:**[Example - Changing date format in test results](/TA_Help/Topics/ug_customizing_XML_report_example_2.html)

