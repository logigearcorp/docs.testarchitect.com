--- 
title: "WinForms command line tool"
linktitle: "WinForms command line tool"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_WinForms_command_line_tool.html
---
# WinForms command line tool {#concept_zzq_nsb_sv .concept}

Convert a WinForms-based project's interface mappings to mappings based on TA classes, and export to a text file.

**Restriction:**

-   The WinForms command-line tool is not available in the TestArchitect packages for the Linux and macOS operating systems.
-   This tool does not support the conversion of WinForms dynamic controls.

## Synopsis { .section}

```
java -jar TAConvertWinFormsClassMapping.jar --ConvertWinFormsClassMapping 
[--server<value>] [--port<value>] 
--uid<value> --pwd<value> 
--repoName<value> --projectName<value> 
--source<value> --destination<value>
```

TAConvertWinFormsClassMapping
:   An executable .jar file used to invoke the WinForms command-line tool

:   The file can be found at TA\_INSTALL\_DIR\\binclient.

ConvertWinFormsClassMapping
:   Invoke the export WinForms user-defined class map function.

--server<value\>
:   \(Optional; default = localhost\) Full hostname or IP address of the repository server hosting the repository of the source TestArchitect project.

--port<value\>
:   \(Optional, default = 53400\) Dedicated port number used to connect to the repository server.

--uid <value\>
:   User name with which to log in to repository.

    **Note:** If the user namecontains any spaces, enclose it between a pair of double quotation marks.

--pwd <value\>
:   Password for the given user name.

--repoName <value\>
:   Name of the source repository.

    **Note:** If the repository namecontains any spaces, enclose it between a pair of double quotation marks.

--projectName <value\>
:   Name of the source TestArchitect project.

    **Note:** If the project namecontains any spaces, enclose it between a pair of double quotation marks.

--source<value\>
:   TA path of a given source interface, or interface entity.

:   Value must start with a forward slash \( / \), and provide a full \(non-case sensitive\) TA path, starting with the **Interfaces** node as root.

:   For example: /Interfaces/Car Rental

    **Note:** If the source pathcontains any spaces, enclose it between a pair of double quotation marks.

--destination<value\>
:   Host file system's folder location into which the WinForms class mapping file is to be written.

:   **Note:**

-   No file name is required. In its absence, the generated WinForm class mapping file is automatically named with the following format: \[Interface Name\]\_Class\_map\_\[yyyy-MM-dd HH:mm:ss.SS\]. For example: Car Rental\_Class\_map\_2016-04-19 16:57:59.921.txt
-   Network paths are also supported.
-   If the destination path contains any spaces, enclose it between a pair of double quotation marks.

1.  [Running the WinForms command line tool](../../TA_Automation/Topics/aut_app_testing_WinForms_command_line_tool_example.html)  
This topic provides, by way of example, an introduction to the use of the WinForms command line tool. Here we'll use the ConvertWinFormsClassMapping command to update the TA legacy mappings of a WinForms-based project.

**Parent topic:**[Testing .NET applications](../../TA_Automation/Topics/aut_app_testing_NET_apps.html)

**Previous topic:**[List of supported .NET controls](../../TA_Automation/Topics/aut_app_testing_NET_apps_supported_controls.html)

