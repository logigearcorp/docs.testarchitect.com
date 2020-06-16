--- 
title: "Running the WinForms command line tool"
linktitle: "Running the WinForms command line tool"
description: "This topic provides, by way of example, an introduction to the use of the WinForms command line tool. Here we'll use the ConvertWinFormsClassMapping command to update the TA legacy mappings of a WinForms-based project."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_WinForms_command_line_tool_example.html
keywords: 
---

This topic provides, by way of example, an introduction to the use of the WinForms command line tool. Here we'll use the ConvertWinFormsClassMapping command to update the TA legacy mappings of a WinForms-based project.

Ensure that you have installed or upgraded your Java Runtime Environment \(JRE\) to at least version 8, which is necessary to run TAConvertWinFormsClassMapping.jar on your Windows machine.

**Tip:**

-   Refer to [JRE 8 Installation for Microsoft Windows](http://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jre_install.html#CHDEDHAJ) for details.
-   As an alternative to explicitly installing JDK 8, you may also use the Java Runtime Environment \(JRE\) packaged with TestArchitect at TA\_INSTALL\_DIR\\jre\\bin. In such a case, note that all invocations of the java command will need to specify its filepath \(e.g., C:\\Program Files\\LogiGear\\TestArchitect\\jre\\bin\\java\). \(This latter step can be circumvented by setting the Windows environment variable JAVA\_HOME to TA\_INSTALL\_DIR\\jre\\bin.\)

To run the ConvertWinFormsClassMapping command, do the following:

1.  Bring up a command window. You can do this from the Windows **Start** menu by choosing **Run**, and then entering cmd.

    The command window opens with a prompt displaying your current directory.

2.  Use the cd command to change your current directory to TA\_INSTALL\_DIR\\binclient\\, which is where TAConvertWinFormsClassMapping.jar is located.

    For example, type the following command at the prompt, and then press Enter.

    ```
    cd "C:\Program Files\LogiGear\TestArchitect\binclient"
    ```

    Now the prompt should change to the new directory, e.g., C:\\Program Files\\LogiGear\\TestArchitect\\binclient\>

3.  In this example, we want to convert a WinForms-based legacy class mapping file with the following information:

    -   Repository server: localhost
    -   Dedicated port number of the repository server: 53400
    -   User name for account in repository: administrator
    -   Password for the account: None
    -   Repository: SampleRepository
    -   Project: Car Rental
    -   TA path of the target interface entity: /Interfaces/Car Rental/Standard Control
    -   Destination folder location: D:\\WinForms class map
4.  Enter the following command, and then press Enter.

    java -jar TAConvertWinFormsClassMapping.jar --ConvertWinFormsClassMapping --server localhost --port 53400 --uid administrator --pwd --repoName SampleRepository --projectName "Car Rental" --source "Interfaces/Car Rental/Standard Control" --destination "D:\\WinForms class mapping"


A text-based WinForms class mapping file, one that employs TA classes, is generated and written to the specified folder location.

![](/images/TA_Automation/Images/winforms_class_mapping.png)

Note that this generation of a text-based mappings file has no effect on your existing project. To incorporate the updated mappings into your project, your next step is to copy the file's contents into the $Class Maps interface entity. \([Learn more.](/TA_Help/Topics/ug_class_mapping_WinForms.html)\)


