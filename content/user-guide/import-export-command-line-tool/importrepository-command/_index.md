--- 
title: "ImportRepository command \\(Import/Export tool\\)"
linktitle: "ImportRepository command"
weight: 3
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_import_repository.html
---

Import a repository from a .dat file.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis

```
java -jar TAImportExportTool.jar --ImportRepository [--server<value>] [--port<value>] 
[--repoName<value>] --filePath<value> [--overwrite<true|false>]
```

-   **TAImportExportTool.jar**

    An executable .jar file used to invoke the Import/Export tool.

    The file can be found at TA\_INSTALL\_DIR\\binclient.

-   **--ImportRepository**

    Invokes the import repository function.

-   **--server <value\>**

    \(Optional, default = localhost\) Full hostname or IP address of the repository server in which the repository is to reside.

    **Note:** If this argument is not defined, localhost is used as the default.

-   **--port <value\>**

    \(Optional, default = 53404\) Dedicated port number used to connect to the repository server.

    **Note:** At present, only the port number 53404 may be used, and serves as the default value. Hence, please ensure that this port is always available.

-   **--repoName <value\>**

    \(Optional\) Name to be assigned to the imported repository.

    **Note:**

    -   If the repository namecontains any spaces, enclose it between a pair of double quotation marks..
    -   If this parameter is not defined, the name of the source repository used to generate the file during export is used as the default.
    -   Extended ASCII characters are not allowed in naming.
-   **--filePath <value\>**

    Import file containing a previously exported repository.

    **Note:**

    -   The import file must have a .dat extension.
    -   Network paths are also supported.
    -   If the pathcontains any spaces, enclose it between a pair of double quotation marks.
-   **--overwrite <true\|false\>**

    \(Optional, default = false\) Specify whether the existing repository, if any, should be overwritten.

    **Note:** If this parameter is not specified, or its value is empty, its value defaults to false.

    CAUTION:

    Since overwriting a repository will cause you to lose the data in the existing repository, please inform your team members to ensure that no project modifications are made during the repository import process.


1.  [Running ImportRepository command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_repository_running.html)  


**Parent topic:**[Import/Export command line tool](/TA_Help/Topics/ug_export_import_tool.html)

**Previous topic:**[ExportRepository command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_repository.html)

**Next topic:**[ExportFromPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_from_path.html)

