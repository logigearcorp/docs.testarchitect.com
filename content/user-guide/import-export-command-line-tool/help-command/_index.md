--- 
title: "Help command (Import/Export tool)"
linktitle: "Help command"
description: "Retrieve descriptive information on the functionality and options of the Import/Export tool."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_help.html
keywords: "Import/Export tool, Help command, Help command"
---

Retrieve descriptive information on the functionality and options of the Import/Export tool.

{{<restriction>}} The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis

```
java -jar TAImportExportTool.jar --help

java -jar TAImportExportTool.jar --help [--<CommandName>]
```

-   **TAImportExportTool.jar**

    An executable .jar file used to invoke the Import/Export tool.

    The file can be found at TA\_INSTALL\_DIR\\binclient.

-   **--help**

    Invoke the help function.

-   **CommandName**

    \(Optional\) Specific command for which help information is to be displayed.

    For example, the command

    ```
    java -jar TAImportExportTool.jar --help ImportRepository
    ```

    invokes help information specific to the [ImportRepository](/user-guide/import-export-command-line-tool/importrepository-command/) command.


1.  [Running the Help command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/help-command/running-help)  




