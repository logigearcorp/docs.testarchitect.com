--- 
title: "Creating a summary report in Excel"
linktitle: "Creating a summary report in Excel"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/TAUtilities_scenario.html
---

Exporting TestArchitect data to Microsoft Excel™ is probably the most common use of TAUtilities. This topic focuses on invoking TAUtilities' APIs from Excel, a COM application program.

**Note:** While it is not necessary that they run on the same machine, both the TestArchitect client and the application interfacing to it \(Microsoft Excel, in this case\) must run on the same OS and machine architecture \(32-bit or 64-bit\).

In the following example, you will export TestArchitect test module information into Excel, using Excel's Visual Basic, on a Windows-based system. The exported information includes the **description**, **assigned user**, **created by**, **date of creation**, and **status result**of each test module residing under a specific test module folder, plus the total number of test modules in the folder.

## System functionality

In order to direct the APIs to retrieve exactly what you want, you provide the following information in designated Excel cells:

-   the hostname or IP address of a desired repository
-   the repository server’s port number
-   the repository’s name
-   the project’s name
-   a valid username/password to log on to the repository
-   the TestArchitect explorer tree path to a test module folder

Once the information is provided, clicking the **Generate** button results in the designated Excel cells being populated with the required data from the TestArchitect items:

![](/images//Images/scenario_provide_basic_information.png)

1.  [Registering the TAUtilities library](/TA_Tutorials/Topics/TAUtilities_register_library.html)  
To allow a COM application to use the shared TAUtilities.dll file. you must register the DLL file.
2.  [Creating the macro in Microsoft Excel](/TA_Tutorials/Topics/TAUtilities_implentation.html)  
In this exercise, you will create a macro in Microsoft Excel™ to interact with TestArchitect items.
3.  [Implementing the interface](/TA_Tutorials/Topics/TAUtilities_implentation_1.html)  
In this topic, the procedure generateMethod\(\), which interfaces with the TAUtilities APIs, is implemented.
4.  [Viewing the result](/TA_Tutorials/Topics/TAUtilities_result.html)  
Run your macro, and ensure that it properly gets needed information from TestArchitect items.

**Parent topic:**[Lesson \#11: Creating Excel reports using TAUtilities](/TA_Tutorials/Topics/TAUtilities.html)

**Previous topic:**[TAUtilities overview](/TA_Tutorials/Topics/TAUtilities_overview.html)

**Next topic:**[TAUtilities API reference](/TA_Tutorials/Topics/tut_TAUtilities_API.html)

