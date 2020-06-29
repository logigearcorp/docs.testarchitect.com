--- 
title: "ImportToID command \\(Import/Export tool\\)"
linktitle: "ImportToID command \\(Import/Export tool\\)"
description: "Import a project item or test case to a TestArchitect project location identified by a TestArchitect ID."
weight: 7
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_import_to_id.html
keywords: "Import/Export tool, ImportToID command, ImportToID command, importing project items, command lines, ID"
---

Import a project item or test case to a TestArchitect project location identified by a TestArchitect ID.

{{<restriction>}} The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis

```
java -Dfile.encoding=UTF-8 -jar TAImportExportTool.jar --ImportToID [--server<value>] [--port<value>] --uid<value> 
--pwd<value> --repoName<value> --projectName<value> --sourceFile<value> --ID<value> 
[--overwrite<true|false>] [--includePictureChecks<yes|no>]
```

-   **-Dfile.encoding=UTF-8**

    Encoding type of the command

-   **TAImportExportTool.jar**

    An executable .jar file used to invoke the Import/Export tool.

    The file can be found at TA\_INSTALL\_DIR\\binclient.

-   **--ImportToID**

    Invokes the import items function.

-   **--server <value\>**

    \(Optional, default = localhost\) Full hostname or IP address of the repository server hosting the repository into which the item is to be imported.

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

    Name of the target repository.

    {{<note>}} If the repository namecontains any spaces, enclose it between a pair of double quotation marks..

-   **--projectName <value\>**

    Name of the target TestArchitect project.

    {{<note>}} If the project namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--sourceFile <value\>**

    Path to file that is to be imported.

    {{<note>}}

    -   Network paths are also supported.
    -   If the pathcontains any spaces, enclose it between a pair of double quotation marks.

-   **--ID <value\>**

    ID of the project item root node \(**Tests**, **Data**, etc.\) or folder into which the item is to be imported. In the case of importing test cases, ID must be that of a test module.

    To obtain the ID of any TestArchitect entity, find the [**URL**](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/testarchitect-url) field under its **Information** tab. The ID is found at the end of the URL address, prefixed with a hyphen \( - \), such as, `1z23htgfc2`, below:

    ![](/images/TA_Help/Images/obtain_ID_folder.png)

-   **--overwrite <true\|false\>**

    \(Optional, default = false\) Specify whether the existing project item or test case, if any, should be overwritten.

    {{<note>}} If this parameter is not specified, or its value is empty, its value defaults to false.

-   **--includePictureChecks <yes\|no\>**

    \(Optional, default = yes; applicable only to import of test module\) Specifies whether the regular picture checks belonging to the source test module are to be included.

    {{<note>}}

    -   This parameter is only applicable for test modules. If the target item is not a test module, this parameter, if declared, is simply ignored.
    -   Only a .zip file containing an exported test module can include that test module's picture checks. Hence a value of yes for this parameter is only effectual when the -sourceFile parameter specifies a .zip file.

1.  [Example: Importing test modules including regular picture checks](/user-guide/import-export-command-line-tool/importtoid-command/example-importing-test-modules-including-regular-picture-checks)  




