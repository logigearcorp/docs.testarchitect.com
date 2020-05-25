--- 
title: "ExportRepository command \\(Import/Export tool\\)"
linktitle: "ExportRepository command"
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_export_repository.html
---
# ExportRepository command \(Import/Export tool\) {#reference_trn_dtd_1s .reference}

Export a repository to a .dat file.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis { .section}

```
java -jar TAImportExportTool.jar --ExportRepository [--server<value>] [--port<value>] 
--repoName<value> --destinationFile<value> [--overwrite<true|false>]
```

TAImportExportTool.jar
:   An executable .jar file used to invoke the Import/Export tool.

:   The file can be found at TA\_INSTALL\_DIR\\binclient.

--ExportRepository
:   Invokes the export repository function.

--server <value\>
:   \(Optional, default = localhost\) Full hostname or IP address of the repository server in which the repository is to reside.

:   **Note:** If this argument is not defined, localhost is used as the default.

--port <value\>
:   \(Optional, default = 53404\) Dedicated port number used to connect to the repository server.

    **Note:** At present, only the port number 53404 may be used, and serves as the default value. Hence, please ensure that this port is always available.

--repoName <value\>
:   Name of repository to be exported.

    **Note:** If the repository namecontains any spaces, enclose it between a pair of double quotation marks.

--destinationFile <value\>
:   Path, with optional file name, specifying the location to which the exported file is to be written.

:   The file must have a .dat extension.

:   **Note:**

-   If the specified path does not include a file name, the name is automatically generated.
-   Network paths are also supported.
-   If the pathcontains any spaces, enclose it between a pair of double quotation marks.

--overwrite <true\|false\>
:   \(Optional\) Specify whether the existing file, if any, should be overwritten.

:   **Note:** If this parameter is not specified, or its value is empty, its value defaults to true.

1.  [Running ExportRepository command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_export_repository_running.html)  


**Parent topic:**[Import/Export command line tool](../../TA_Help/Topics/ug_export_import_tool.html)

**Previous topic:**[Help command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_help.html)

**Next topic:**[ImportRepository command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_import_repository.html)

