--- 
title: "Running ConvertResults command \\(XML Result Conversion tool\\)"
linktitle: "Running ConvertResults command \\(XML Result Conversion tool\\)"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_XML_result_conversion_tool_example.html
---

An example to show usage of the XML Result Conversion tool.

Ensure the following requirements are met:

-   You have installed or upgraded your Java Runtime Environment \(JRE\) to at least **version 8**, which is necessary to run convertresults tool on your machine.
-   **JRE version 8** must be set as the default JRE.
-   The user name has permission to log into the repository.
-   Run the XML Result Conversion command line tool on the repository server machine.

Let's say you want to convert the current test result's model into XML model with the following information:

-   Repository name: SampleRepository
-   User name for account in repository: john
-   Password for the account: doe

To run the convertresults command, do the following:

1.  Bring up a command window.

    The command window opens with a prompt displaying your current directory.

2.  Use the cd command to change your current directory to TA\_INSTALL\_DIR\\repository \(Windows\) or /usr/local/logigear/testarchitect/repository \(Linux\), which is where the convertresults executable file is located.

    For example, type the following command at the prompt, and then press Enter.

    ```
    cd "C:\Program Files\LogiGear\TestArchitect\repository"
    ```

    Now the prompt should change to the new directory, e.g., C:\\Program Files\\LogiGear\\TestArchitect\\repository\>

3.  Based on the given scenario, enter the following command, and then press Enter.

    ```
    convertresults.bat -repo SampleRepository -user john -password doe
    ```

    The result summary displays the number of test results converted successfully, warnings/errors, and ignored test results because they are already in XML format.

    ![](/images//Images/XML_command_line.png)


**Parent topic:**[XML Result Conversion command line tool](/TA_Help/Topics/ug_XML_result_conversion_tool.html)

**Next topic:**[Errors returned during test result conversion](/TA_Help/Topics/ug_results_conversion_error_code.html)

