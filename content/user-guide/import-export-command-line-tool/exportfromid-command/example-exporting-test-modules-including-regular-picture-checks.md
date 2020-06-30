--- 
title: "Example: Exporting test modules including regular picture checks"
linktitle: "Example: Exporting test modules including regular picture checks"
description: "Ensure that you have installed or upgraded your Java Runtime Environment (JRE) to at least version 8, which is necessary to run TAImportExportTool.jar on your Windows machine. Tip: Refer to JRE 8 ..."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_export_from_id_regular_picture_checks.html
keywords: 
---

Ensure that you have installed or upgraded your Java Runtime Environment \(JRE\) to at least version 8, which is necessary to run TAImportExportTool.jar on your Windows machine.

{{<tip>}}

-   Refer to [JRE 8 Installation for Microsoft Windows](http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jre_install.html#CHDEDHAJ) for details.
-   As an alternative to explicitly installing JDK 8, you may also use the Java Runtime Environment \(JRE\) packaged with TestArchitect at TA\_INSTALL\_DIR\\jre\\bin. In such a case, note that all invocations of the java command will need to specify its filepath \(e.g., C:\\Program Files\\LogiGear\\TestArchitect\\jre\\bin\\java\). \(This latter step can be circumvented by setting the Windows environment variable JAVA\_HOME to TA\_INSTALL\_DIR\\jre\\bin.\)

Let's say you want to export a given test module, Action Based Testing, with the following information and requirements:

-   Repository server's IP address: 192.168.167.60
-   Repository server's port number: 53400
-   Repository name: SampleRepository
-   User name for account in repository: john
-   Password for the account: doe
-   Project name: Car Rental
-   TestArchitect ID of the test module: 1z26kdr8h1

    ![](/images/TA_Help/Images/obtain_ID_item.png)

-   Destination for the exported file: D:\\exported items
-   Destination file name: \(We'll accept the default, which is automatically generated based on name of the source test module\)
-   In the export, include the regular picture checks of the source test module.
-   Type of output: .zip

    {{<note>}} Only .zip files are supported as targets when exporting regular picture checks from a test module. If you are not including regular picture checks in your export, .html and .csv files may also serve as the output.

-   Overwrite the existing file.

To run the ExportFromID command, do the following:

1.  Bring up a command window. You can do this from the Windows **Start** menu by choosing **Run**, and then entering cmd.

    The command window opens with a prompt displaying your current directory.

2.  Use the cd command to change your current directory to TA\_INSTALL\_DIR\\binclient\\, which is where TAImportExportTool.jar is located.

    For example, type the following command at the prompt, and then press Enter.

    ```
    cd "C:\Program Files\LogiGear\TestArchitect\binclient"
    ```

    Now the prompt should change to the new directory, e.g., C:\\Program Files\\LogiGear\\TestArchitect\\binclient\>

3.  Based on the given scenario, enter the following command, and then press Enter.

    ```
    java -jar TAImportExportTool.jar --ExportFromID --server 192.168.167.60 --port 53400 --uid john 
    --pwd doe --repoName SampleRepository --projectName "Car Rental" 
    --ID 1z26kdr8h1 --destinationFile "D:\exported items" --outputType zip 
    --overwrite true --includePictureChecks yes
    ```

    ![](/images/TA_Help/Images/TA_Export_Import_tool_ExportFromID_regular_picture_check.png)


In the exported .zip file:

-   Each folder corresponds to one regular picture check.
-   Each baseline variation of a regular picture check is stored as a .png file in the appropriate folder.

![](/images/TA_Help/Images/TA_Export_Import_tool_ExportFromPath_regular_picture_checks_result.png)


