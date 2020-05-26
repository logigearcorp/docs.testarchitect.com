--- 
title: "Running ExportRepository command \\(Import/Export tool\\)"
linktitle: "Running ExportRepository"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_export_repository_running.html
---
# Running ExportRepository command \(Import/Export tool\) {#task_sww_srk_1s .task}

Ensure that you have installed or upgraded your Java Runtime Environment \(JRE\) to at least version 8, which is necessary to run TAImportExportTool.jar on your Windows machine.

**Tip:**

-   Refer to [JRE 8 Installation for Microsoft Windows](http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jre_install.html#CHDEDHAJ) for details.
-   As an alternative to explicitly installing JDK 8, you may also use the Java Runtime Environment \(JRE\) packaged with TestArchitect at TA\_INSTALL\_DIR\\jre\\bin. In such a case, note that all invocations of the java command will need to specify its filepath \(e.g., C:\\Program Files\\LogiGear\\TestArchitect\\jre\\bin\\java\). \(This latter step can be circumvented by setting the Windows environment variable JAVA\_HOME to TA\_INSTALL\_DIR\\jre\\bin.\)

To run the ExportRepository command, do the following:

1.  Bring up a command window. You can do this from the Windows **Start** menu by choosing **Run**, and then entering cmd.

    The command window opens with a prompt displaying your current directory.

2.  Use the cd command to change your current directory to TA\_INSTALL\_DIR\\binclient\\, which is where TAImportExportTool.jar is located.

    For example, type the following command at the prompt, and then press Enter.

    ```
    cd "C:\Program Files\LogiGear\TestArchitect\binclient"
    ```

    Now the prompt should change to the new directory, e.g., C:\\Program Files\\LogiGear\\TestArchitect\\binclient\>

3.  Enter the following command, and then press Enter.

    ```
    java -jar TAImportExportTool.jar --ExportRepository --server 192.168.167.60 --port 53404 
    --repoName MyRepository --destinationFile "D:\repository list\sample.dat" --overwrite true
    ```


![](../Images/TA_Export_Import_tool_ExportRepo.png)

**Parent topic:**[ExportRepository command \(Import/Export tool\)](../../TA_Help/Topics/ug_export_import_tool_export_repository.html)

