--- 
title: "Import/Export command line tool"
linktitle: "Import/Export command line tool"
description: "TestArchitect allows you to import and export repositories and individual project items from within the TestArchitect Client environment. In Windows, these tasks may also be performed with command line commands."
weight: 17
aliases: 
    - /TA_Help/Topics/ug_export_import_tool.html
keywords: "Import/Export tool"
---

TestArchitect allows you to import and export repositories and individual project items from within the TestArchitect Client environment. In Windows, these tasks may also be performed with command line commands.This feature is especially valuable in development environments that employ continuous integration \(CI\) practices. Taking this capability a step further, the Import/Export tool allows you to create Windows batch files that automate your import and export processes.

{{<restriction>}} The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

{{<note>}} With TestArchitect installed, the Import/Export tool \(TAImportExportTool.jar\), can be found at TA\_INSTALL\_DIR\\binclient.

The Import/Export tool allows for the following operations to be performed:

-   Export or import of [repositories](/user-guide/getting-started/working-with-repositories/).
-   Export or import of the following TestArchitect items:
    -   [test modules](/user-guide/introduction-to-action-based-testing/action-based-testing/test-modules)
    -   [test cases](/user-guide/tests/test-cases/)
    -   [data sets](/user-guide/projects-and-project-items/project-items/data-sets/)
    -   [actions](/user-guide/actions/user-defined-actions/)
    -   [interface entities](/user-guide/interface-definitions/creating-interface-entities)
    -   [test results](/user-guide/working-with-test-results/)
    -   [picture checks](/user-guide/projects-and-project-items/project-items/picture-checks/), including shared and regular picture checks

The following command line commands are available:

-   `help`: Retrieve descriptive information on the functionality and options of the Import/Export tool.
-   `ImportRepository`: Import a repository from a file.
-   `ExportRepository`: Export a repository to a file.
-   `ExportFromPath`: Export a specific project item, identified by its TA path, to a file.
-   `ExportFromID`: Export a specific project item, identified by its ID, to a file.
-   `ImportToPath`: Import a project item to a specific location, identified by TA path, in TestArchitect.
-   `ImportToID`: Imports a project item to specific location, identified by ID, in TestArchitect

1.  [Help command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/help-command/)  
Retrieve descriptive information on the functionality and options of the Import/Export tool.
2.  [ExportRepository command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/exportrepository-command/)  
Export a repository to a .dat file.
3.  [ImportRepository command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/importrepository-command/)  
Import a repository from a .dat file.
4.  [ExportFromPath command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/exportfrompath-command/)  
Export a project item, identified by its TA path, to a file.
5.  [ExportFromID command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/exportfromid-command/)  
Export a project item, as identified by its TestArchitect ID, to a file.
6.  [ImportToPath command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/importtopath-command/)  
Import a project item or test case to a TestArchitect project location identified by its TA path.
7.  [ImportToID command \(Import/Export tool\)](/user-guide/import-export-command-line-tool/importtoid-command/)  
Import a project item or test case to a TestArchitect project location identified by a TestArchitect ID.




