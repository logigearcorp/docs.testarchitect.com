--- 
title: "ExportFromPath command (Import/Export tool)"
linktitle: "ExportFromPath command"
description: "Export a project item, identified by its TA path, to a file."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_export_from_path.html
keywords: "Import/Export tool, ExportFromPath command, ExportFromPath command, exporting project items, command lines, path"
---

Export a project item, identified by its TA path, to a file.

{{<restriction>}} The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## {{< expand >}} Synopsis

```
java -jar TAImportExportTool.jar --ExportFromPath [--server<value>] [--port<value>] --uid<value> --pwd<value> 
--repoName<value> --projectName<value> --source<value> --destinationFile<value> 
--outputType<value> [--overwrite<true|false>] [--includePictureChecks<yes|no>]
```

-   **TAImportExportTool.jar**

    An executable .jar file used to invoke the Import/Export tool.

    The file can be found at TA\_INSTALL\_DIR\\binclient.

-   **--ExportFromPath**

    Invoke the export project items function.

-   **--server <value\>**

    \(Optional, default = localhost\) Full hostname or IP address of the repository server in which the repository is to reside.

    {{<note>}} If this argument is not defined, localhost is used as the default.

-   **--port <value\>**

    \(Optional, default = 53400\) Port number of the repository server.

    {{<note>}}

    -   If this argument is set to 0 or not defined, the default port number 53400 is used.
    -   If port number of the source repository server has been [changed](/administration-guide/repository-server-management/changing-repository-server-port-number) from its TestArchitect default of 53400, ensure that the correct port number is specified.
-   **--uid <value\>**

    User name with which to log in to repository.

    {{<note>}} If the user namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--pwd <value\>**

    Password for the given user name.

-   **--repoName <value\>**

    Name of the source repository.

    {{<note>}} If the repository namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--projectName <value\>**

    Name of the source TestArchitect project.

    {{<note>}} If the project namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--source <value\>**

    TA path of the project item to be exported.

    Value must start with a forward slash \( / \), and provide a full \(non-case sensitive\) TA path, starting with the **Tests** node as root.

    For example: /Tests/Action-based Testing Basics/Action Based Testing

    {{<note>}} If the source pathcontains any spaces, enclose it between a pair of double quotation marks.

-   **--destinationFile <value\>**

    Location into which the exported file is to be written.

    {{<note>}}

    -   If the specified path does not include a file name, the name is automatically generated.
    -   Network paths are also supported.
    -   If the pathcontains any spaces, enclose it between a pair of double quotation marks.
-   **--outputType <value\>**

    Type of file to export to.

    Allowable values are:

    -   csv: Applicable to the **Tests** node, test folders, test modules, and test cases.
    -   html: Applicable to the **Tests** node, test folders, test results.
    -   zip: Applicable to test modules, data sets, actions, interface entities, test results, test result folders and shared picture checks.

        {{<note>}} For a shared picture check, the exported .zip file contains .png files of the baseline variations.

    -   txt: Applicable to actions, interface entities, the **Tests** node, test folders, test modules, test cases, and data sets.
-   **--overwrite <true\|false\>**

    \(Optional, default = false\) Specifies whether the existing file, if any, should be overwritten.

    {{<note>}} If this parameter is not specified, or its value is empty, its value defaults to false.

-   **--includePictureChecks <yes\|no\>**

    \(Optional, default = yes\) Specifies whether the regular picture checks belonging to the target test module are to be exported.

    {{<note>}}

    -   If this parameter is not specified, or its value is empty, its value defaults to yes.
    -   This parameter is only applicable to test modules. For other project items, it is simply ignored.
    -   Only .zip files are supported as export targets.

1.  [Example: Exporting test modules including regular picture checks](/user-guide/import-export-command-line-tool/exportfrompath-command/example-exporting-test-modules-including-regular-picture-checks)  





