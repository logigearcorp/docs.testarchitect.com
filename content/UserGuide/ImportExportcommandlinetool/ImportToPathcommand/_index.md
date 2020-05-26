--- 
title: "ImportToPath command \\(Import/Export tool\\)"
linktitle: "ImportToPath command"
weight: 6
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_import_to_path.html
---
# ImportToPath command \(Import/Export tool\) {#reference_bnb_kll_1s .reference}

Import a project item or test case to a TestArchitect project location identified by its TA path.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis { .section}

```
java -jar TAImportExportTool.jar --ImportToPath [--server<value>] [--port<value>] --uid<value> 
--pwd<value> --repoName<value> --projectName<value> --sourceFile<value> --destinationFolder<value> 
[--overwrite<true|false>] [--includePictureChecks<yes|no>]
```

TAImportExportTool.jar
:   An executable .jar file used to invoke the Import/Export tool.

:   The file can be found at TA\_INSTALL\_DIR\\binclient.

--ImportToPath
:   Invoke the import items function.

--server <value\>
:   \(Optional, default = localhost\) Full hostname or IP address of the repository server hosting the repository into which the item is to be imported.

    **Note:** If this argument is not defined, localhost is used as the default.

--port <value\>
:   \(Optional, default = 53400\) Port number of the repository server.

    **Note:**

    -   If this argument is set to 0 or not defined, the default port number 53400 is used.
    -   If port number of the source repository server has been [changed](../../TA_Administration/Topics/Repo_changing_port.html) from its TestArchitect default of 53400, ensure that the correct port number is specified.

--uid <value\>
:   User name with which to log in to repository.

    **Note:** If the user namecontains any spaces, enclose it between a pair of double quotation marks.

--pwd <value\>
:   Password for the given user name.

--repoName <value\>
:   Name of the target repository.

    **Note:** If the repository namecontains any spaces, enclose it between a pair of double quotation marks..

--projectName <value\>
:   Name of the target TestArchitect project.

    **Note:** If the project namecontains any spaces, enclose it between a pair of double quotation marks.

--sourceFile <value\>
:   Path to file that is to be imported.

:   **Note:**

-   Network paths are also supported.
-   If the pathcontains any spaces, enclose it between a pair of double quotation marks.

--destinationFolder <value\>
:   Location \(TA path\) of the project item root node \(**Tests**, **Data**, etc.\) or folder into which the item is to be imported.

:   Value must start with a forward slash \( / \), and provide a full \(non-case sensitive\) TA path, starting with the root project item node \(e.g., **Tests**, **Data**, etc.\)

:   For example: /Tests/Action-based Testing Basics/Data Driven Tests

    **Note:**

    -   The specified root node must match the type of project item being imported. \(e.g., **Data** for data sets\)
    -   In the case of importing test cases, the path must end with the name of an existing test module.
    -   In all but the case of importing test cases, a minimum allowable path consists of forward slash followed by the applicable root project item node.
    -   If the destination path does not exist, it is generated automatically, with the exception of importation of test cases.

--overwrite <true\|false\>
:   \(Optional, default = false\) Specify whether the existing project item or test case, if any, should be overwritten.

    **Note:** If this parameter is not specified, or its value is empty, its value defaults to false.

--includePictureChecks <yes\|no\>
:   \(Optional, default = yes; applicable only to import of test module\) Specifies whether the regular picture checks belonging to the source test module are to be included.

    **Note:**

    -   This parameter is only applicable for test modules. If the target item is not a test module, this parameter, if declared, is simply ignored.
    -   Only a .zip file containing an exported test module can include that test module's picture checks. Hence a value of yes for this parameter is only effectual when the -sourceFile parameter specifies a .zip file.

1.  [Example: Importing test modules including regular picture checks](../../TA_Help/Topics/ug_export_import_tool_import_to_path_regular_picture_checks.html)  


**Parent topic:**[Import/Export command line tool](../../TA_Help/Topics/ug_export_import_tool.html)

**Previous topic:**[ExportFromID command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_export_from_id.html)

**Next topic:**[ImportToID command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_import_to_id.html)

