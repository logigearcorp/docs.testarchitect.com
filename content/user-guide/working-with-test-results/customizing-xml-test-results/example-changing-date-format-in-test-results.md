--- 
title: "Example - Changing date format in test results"
linktitle: "Example - Changing date format in test results"
description: "Explain steps to change date format in test results."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_customizing_XML_report_example_2.html
keywords: "test results, customize layout, change date format, results, customize XML layout, change date format, XML result layout, customization, change date format"
---

Explain steps to change date format in test results.

Date format varies among countries and cultures. To fit to a specific date format for XML test results, you need to edit XSLT style sheets. Suppose that you'd like to change the default date format \(mm/dd/yyyy\) into dd-MMM-yyyy, for example, 09-JUN-2014.

![](/images/TA_Help/Images/customization_results_date_format.png)

To change date time format of the **Start Time** built-in field from mm/dd/yyyy to dd-MMM-yyyy, perform the following steps:

1.  In a text editor such as Notepad, open the file \{TA\_INSTALL\_DIR\}\\templates\\xsl\\common.xsl.

2.  Find <xsl:param name="format" select="'\[M01\]/\[D01\]/\[Y0001\] \[H01\]:\[m01\]:\[s01\]'"/\>.

3.  Change it into the following

    ```
    ...
    <xsl:param name="format" select="'**\[D01\]-\[MN,\*-3\]-\[Y0001\]** [H01]:[m01]:[s01]'"/>
    ...
    ```

    |Output|Expression|
    |------|----------|
    |31 DEC 2002|\[D01\] \[MN,\*-3\] \[Y0001\]|

    {{<tip>}} You can find additional expressions of date format [here](https://www.w3.org/TR/xslt20/#function-format-date).

4.  To ensure the new changes take effect, clear the HTML cache.

    1.  Open a test result's location on your machine.

        ![](/images/TA_Help/Images/customization_results_results_path_location.png)

    2.  Delete all files located under the html\_result folder.

5.  Open a test result in a web browser, or TestArchitect Client.

    The new date format appears.

    ![](/images/TA_Help/Images/customization_results_date_format_effect.png)





