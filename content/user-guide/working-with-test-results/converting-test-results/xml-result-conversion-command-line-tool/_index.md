--- 
title: "XML Result Conversion command line tool"
linktitle: "XML Result Conversion command line tool"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_XML_result_conversion_tool.html
---

Converts all test results belonging to a given repository into XML test result format. Note that, run this tool on the repository server machine.

## Synopsis

-   Windows:

    ```
    convertresults.bat -repo<value> -user<value> -password<value> [-xml<true|false>]
    ```

-   Linux and macOS:

    ```
    convertresults.sh -repo<value> -user<value> -password<value> [-xml<true|false>]
    ```


-   **ConvertResults**

    An executable .bat or .sh file used to invoke the XML Result Conversion tool.

    The file can be found at:

    -   Windows: \{TA\_INSTALL\_DIR\}\\repository
    -   Linux: /usr/local/logigear/testarchitect/repository
    -   macOS: /Applications/TestArchitect/repository
-   **-repo<value\>**

    Name of the target repository.

    **Note:** If the repository namecontains any spaces, enclose it between a pair of double quotation marks.

-   **-user<value\>**

    User name with which to log in to repository.

    **Note:**

    -   If the user namecontains any spaces, enclose it between a pair of double quotation marks.
    -   Ensure that the user name has permission to log into the repository.
-   **-password<value\>**

    Password for the given user name.

-   **-xml<true\|false\>**

    \(Optional, default = false\) Specifies to upgrade XML results, generated in TestArchitect version [8.3](/TA_ReleaseNotes/DITA_source/Whats_New_8.3.html), into new XML results of future versions of TestArchitect. Use this parameter in case there are future enhancements for the XML results.


1.  [Running ConvertResults command \(XML Result Conversion tool\)](/TA_Help/Topics/ug_XML_result_conversion_tool_example.html)  
An example to show usage of the XML Result Conversion tool.
2.  [Errors returned during test result conversion](/TA_Help/Topics/ug_results_conversion_error_code.html)  
Explain all errors that might be encountered during XML result conversion.

**Parent topic:**[Converting test results generated in earlier versions to TestArchitect 8.3](/TA_Help/Topics/ug_XML_result_conversion.html)

