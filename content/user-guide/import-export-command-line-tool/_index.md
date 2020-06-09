--- 
title: "Import/Export command line tool"
linktitle: "Import/Export command line tool"
weight: 17
aliases: 
    - /TA_Help/Topics/ug_export_import_tool.html
---

TestArchitect allows you to import and export repositories and individual project items from within the TestArchitect Client environment. In Windows, these tasks may also be performed with command line commands.This feature is especially valuable in development environments that employ continuous integration \(CI\) practices. Taking this capability a step further, the Import/Export tool allows you to create Windows batch files that automate your import and export processes.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

**Note:** With TestArchitect installed, the Import/Export tool \(TAImportExportTool.jar\), can be found at TA\_INSTALL\_DIR\\binclient.

The Import/Export tool allows for the following operations to be performed:

-   Export or import of [repositories](Getting_started_overview_working_with_repositories.html).
-   Export or import of the following TestArchitect items:
    -   [test modules](ABT_Test_module.html)
    -   [test cases](Projects_and_tests_TC.html)
    -   [data sets](Projects_and_tests_dataset.html)
    -   [actions](/reuse/reuse.High_level_actions.html)
    -   [interface entities](Interface_def_Adding.html)
    -   [test results](Test_result.html)
    -   [picture checks](Projects_and_tests_picture_check.html), including shared and regular picture checks

The following command line commands are available:

-   `help`: Retrieve descriptive information on the functionality and options of the Import/Export tool.
-   `ImportRepository`: Import a repository from a file.
-   `ExportRepository`: Export a repository to a file.
-   `ExportFromPath`: Export a specific project item, identified by its TA path, to a file.
-   `ExportFromID`: Export a specific project item, identified by its ID, to a file.
-   `ImportToPath`: Import a project item to a specific location, identified by TA path, in TestArchitect.
-   `ImportToID`: Imports a project item to specific location, identified by ID, in TestArchitect

1.  [Help command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_help.html)  
Retrieve descriptive information on the functionality and options of the Import/Export tool.
2.  [ExportRepository command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_repository.html)  
Export a repository to a .dat file.
3.  [ImportRepository command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_repository.html)  
Import a repository from a .dat file.
4.  [ExportFromPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_from_path.html)  
Export a project item, identified by its TA path, to a file.
5.  [ExportFromID command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_from_id.html)  
Export a project item, as identified by its TestArchitect ID, to a file.
6.  [ImportToPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_to_path.html)  
Import a project item or test case to a TestArchitect project location identified by its TA path.
7.  [ImportToID command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_to_id.html)  
Import a project item or test case to a TestArchitect project location identified by a TestArchitect ID.

**Parent topic:**[User Guide](/TA_Help/Topics/User_Guide_begin.html)

**Previous topic:**[Lab Manager](/TA_Help/Topics/Lab_manager.html)

**Next topic:**[Support](/TA_Help/Topics/Support.html)

