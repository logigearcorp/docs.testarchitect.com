--- 
title: "Customizing XML test results"
linktitle: "Customizing XML test results"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_customizing_XML_report.html
---

In order to customize the layout of XML test results, you are required to edit XSLT style sheets.

## **Displaying XML with XSLT**

XSLT is the style sheet language for XML. With XSLT you can add/remove elements and attributes to or from the XML result files. You can also rearrange and sort elements, and make decisions about which elements to hide and display in the XML results, and a lot more. \([Learn more](http://www.w3schools.com/xml/xml_xslt.asp).\)

You are free to customize how the test results are displayed, as long as you understand the [XML Schema](https://www.w3.org/XML/Schema) and [XSLT](https://www.w3.org/TR/xslt) syntax. However, a tutorial on XSLT is beyond the scope of this help system. For more information on XSLT, you can refer to this [XSLT Tutorial](http://www.w3schools.com/xml/xsl_intro.asp).

## Modifying a set of XSL files

Go to the following location, and then modify .xsl files as you wish.

-   Windows: \{TA\_INSTALL\_DIR\}\\templates\\xsl\\
-   Linux: /usr/local/logigear/testarchitect/templates/xsl/
-   macOS: /Applications/TestArchitect/templates/xsl/

**Note:** To understand the structure and the contents of XML test results, you may refer to the XML Scheme. This file is located at the following location:

-   Windows: \{TA\_INSTALL\_DIR\}\\tahelp\\data\\XMLResult.xsd
-   Linux: /usr/local/logigear/testarchitect/tahelp/data/XMLResult.xsd
-   macOS: /Applications/TestArchitect/tahelp/data/XMLResult.xsd

1.  [Example - Removing the 'Result Details' tab in test results](/TA_Help/Topics/ug_customizing_XML_report_example_1.html)  
Explain steps to remove the **Result Details** tab in test results.
2.  [Example - Changing date format in test results](/TA_Help/Topics/ug_customizing_XML_report_example_2.html)  
Explain steps to change date format in test results.
3.  [Adjusting the number of truncated iterations and pagination page](/TA_Help/Topics/ug_modifying_truncated_iterations.html)  
Explain steps to adjust several parameters to optimize HTML test results.

**Parent topic:**[Working with test results](/TA_Help/Topics/Test_result.html)

**Previous topic:**[Converting test results generated in earlier versions to TestArchitect 8.3](/TA_Help/Topics/ug_XML_result_conversion.html)

**Next topic:**[Viewing latest test results](/TA_Help/Topics/Test_result_viewing_latest_result.html)

