--- 
title: "Example: Importing test modules including regular picture checks"
linktitle: "Example: Importing test modules including regular picture checks"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_export_import_tool_import_to_path_regular_picture_checks.html
---

Ensure that you have installed or upgraded your Java Runtime Environment \(JRE\) to at least version 8, which is necessary to run TAImportExportTool.jar on your Windows machine.

**Tip:**

-   Refer to [JRE 8 Installation for Microsoft Windows](http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jre_install.html#CHDEDHAJ) for details.
-   As an alternative to explicitly installing JDK 8, you may also use the Java Runtime Environment \(JRE\) packaged with TestArchitect at TA\_INSTALL\_DIR\\jre\\bin. In such a case, note that all invocations of the java command will need to specify its filepath \(e.g., C:\\Program Files\\LogiGear\\TestArchitect\\jre\\bin\\java\). \(This latter step can be circumvented by setting the Windows environment variable JAVA\_HOME to TA\_INSTALL\_DIR\\jre\\bin.\)

Let's say you want to import a given test module, Multiple Reservations, from a .csv file, with the following information and requirements:

-   Repository server's IP address: 192.168.167.194
-   Repository server's port number: 53400
-   Target repository name: SampleRepository
-   User name for account in repository: john
-   Password for the account: doe
-   Target project name: Car Rental
-   Include the test module's regular picture checks in the import.
-   File to import: D:\\export\\Multiple Reservations\_2020-05-21 16-12-11.csv

    **Note:** While test modules can be exported to & imported from .csv, .html and .zip files, only .zip files can hold regular picture checks from the source test module.

-   Destination folder in project: /Tests/Action-based Testing Basics/Functional Tests
-   Overwrite the existing Multiple Reservations test module, if any.

To run the ImportToPath command, do the following:

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
    java -Dfile.encoding=UTF-8 -jar TAImportExportTool.jar --ImportToPath --server 192.168.167.194 --port 53400 --uid john 
    --pwd doe --repoName SampleRepository --projectName "Car Rental" 
    --sourceFile "D:\export\Multiple Reservations_2020-05-21 16-12-11.csv" 
    --destinationFolder "/Tests/Action-based Testing Basics/Functional Tests"
    --overwrite true --includePictureChecks yes
    ```


![](/images//Images/import-path-cmd-new.png)

**Parent topic:**[ImportToPath command \(Import/Export tool\)](/TA_Help/Topics/ug_export_import_tool_import_to_path.html)

