--- 
title: "ExportFromID command \\(Import/Export tool\\)"
linktitle: "ExportFromID command"
weight: 5
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_export_from_id.html
---

Export a project item, as identified by its TestArchitect ID, to a file.

**Restriction:** The Import/Export tool is not available in the TestArchitect packages for the Linux and macOS operating systems.

## Synopsis

```
java -jar TAImportExportTool.jar --ExportFromID [--server<value>] [--port<value>] --uid<value> 
--pwd<value> --repoName<value> --projectName<value> --ID<value> --destinationFile<value> 
--outputType<value> [--overwrite<true|false>] [--includePictureChecks] [--includePictureChecks<yes|no>]
```

-   **TAImportExportTool.jar**

    An executable .jar file used to invoke the Import/Export tool.

    The file can be found at TA\_INSTALL\_DIR\\binclient.

-   **--ExportFromID**

    Invoke the export project items function.

-   **--server <value\>**

    \(Optional, default = localhost\) Full hostname or IP address of the repository server in which the repository is to reside.

    **Note:** If this argument is not defined, localhost is used as the default.

-   **--port <value\>**

    \(Optional, default = 53400\) Port number of the repository server.

    **Note:**

    -   If this argument is set to 0 or not defined, the default port number 53400 is used.
    -   If port number of the source repository server has been [changed](/TA_Administration/Topics/Repo_changing_port.html) from its TestArchitect default of 53400, ensure that the correct port number is specified.
-   **--uid <value\>**

    User name with which to log in to repository.

    **Note:** If the user namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--pwd <value\>**

    Password for the given user name.

-   **--repoName <value\>**

    Name of the source repository.

    **Note:** If the repository namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--projectName <value\>**

    Name of the source TestArchitect project.

    **Note:** If the project namecontains any spaces, enclose it between a pair of double quotation marks.

-   **--ID <value\>**

    TestArchitect ID of the item to be exported.

    **Note:** To obtain the ID of the item, find the [**URL**](Additional_features_TA_URL.html) field under the item's **Information** tab. The ID is placed at the end of the item's URL address, prefixed with a hyphen \( - \). In the following example, the TestArchitect ID is `1z26kdr8h1`:

    ![](/images//Images/obtain_ID_item.png)

-   **--destinationFile <value\>**

    Location into which the exported file is to be written.

    **Note:**

    -   If the specified path does not include a file name, the name is automatically generated.
    -   Network paths are also supported.
    -   If the pathcontains any spaces, enclose it between a pair of double quotation marks.
-   **--outputType <value\>**

    Type of file to export to.

    Allowable values are:

    -   csv: Applicable to the **Tests** node, test folders, test modules, and test cases.
    -   html: Applicable to the **Tests** node, test folders, test results.
    -   zip: Applicable to test modules, data sets, actions, interface entities, test results, test result folders and shared picture checks.

        **Note:** For a shared picture check, the exported .zip file contains .png files of the baseline variations.

    -   txt: Applicable to actions, interface entities, the **Tests** node, test folders, test modules, test cases, and data sets.
-   **--overwrite <true\|false\>**

    \(Optional, default = false\) Specifies whether the existing file, if any, should be overwritten.

    **Note:** If this parameter is not specified, or its value is empty, its value defaults to false.

-   **--includePictureChecks <yes\|no\>**

    \(Optional, default = yes\) Specifies whether the regular picture checks belonging to the target test module are to be exported.

    **Note:**

    -   If this parameter is not specified, or its value is empty, its value defaults to yes.
    -   This parameter is only applicable to test modules. For other project items, it is simply ignored.
    -   Only .zip files are supported as export targets.

1.  [Example: Exporting test modules including regular picture checks](/TA_Help/Topics/ug_export_import_tool_export_from_id_regular_picture_checks.html)  


**Parent topic:**[Import/Export command line tool](/TA_Help/Topics/ug_export_import_tool.html)

**Previous topic:**[ExportFromPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_export_from_path.html)

**Next topic:**[ImportToPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_to_path.html)

