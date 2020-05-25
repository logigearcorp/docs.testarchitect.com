--- 
title: "Help command \\(Import/Export tool\\)"
linktitle: "Help command"
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_help.html
---
# Help command \(Import/Export tool\) {#reference_drh_m4f_5l .reference}

Retrieve descriptive information on the functionality and options of the Import/Export tool.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis { .section}

```
java -jar TAImportExportTool.jar --help

java -jar TAImportExportTool.jar --help [--<CommandName>]
```

TAImportExportTool.jar
:   An executable .jar file used to invoke the Import/Export tool.

:   The file can be found at TA\_INSTALL\_DIR\\binclient.

--help
:   Invoke the help function.

CommandName
:   \(Optional\) Specific command for which help information is to be displayed.

:   For example, the command

    ```
    java -jar TAImportExportTool.jar --help ImportRepository
    ```

    invokes help information specific to the [ImportRepository](ug_export_import_tool_import_repository.html) command.

1.  [Running the Help command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_help_running.html)  


**Parent topic:**[Import/Export command line tool](../../TA_Help/Topics/ug_export_import_tool.html)

**Next topic:**[ExportRepository command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_export_repository.html)

