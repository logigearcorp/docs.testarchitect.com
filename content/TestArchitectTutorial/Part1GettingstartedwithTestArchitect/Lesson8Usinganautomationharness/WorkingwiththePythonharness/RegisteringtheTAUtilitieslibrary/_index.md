--- 
title: "Registering the TAUtilities library"
linktitle: "Registering the TAUtilities library"
aliases: 
    - /TA_Tutorials/Topics/TAUtilities_register_library.html
---
# Registering the TAUtilities library {#task_xrn_lns_km .task}

To allow a COM application to use the shared TAUtilities.dll file. you must register the DLL file.

To register TAUtilities.dll, do the following:

1.  Type the line regsvr32 "TA\_INSTALL\_DIR\\lib\\TAUtilities.dll" /i into a command prompt.

    TA\_INSTALL\_DIR is the location where you installed TestArchitect. Typically, it will be something like C:\\Program Files

2.  Press **Enter** on your keyboard.

    TAUtilities.dll is now registered.


After registration, a message appears informing you the file has been placed in the Windows Registry.

**Remember:** For Java applications needing to access the APIs, instead of registering TAUtilities.dll, you must configure your Java project's build path to include the following libraries:

-   TAUtilities: TA\_INSTALL\_DIR\\lib\\com.logigear.testarchitect.utilities.jar
-   Logback Classic module: TA\_INSTALL\_DIR\\lib\\vendor\\logback-classic-1.1.7.jar
-   Logback Core module: TA\_INSTALL\_DIR\\lib\\vendor\\logback-core-1.1.7.jar
-   SLF4J API module: TA\_INSTALL\_DIR\\lib\\vendor\\slf4j-api-1.7.21.jar

**Parent topic:**[Creating a summary report in Excel](../../TA_Tutorials/Topics/TAUtilities_scenario.html)

**Next topic:**[Creating the macro in Microsoft Excel](../../TA_Tutorials/Topics/TAUtilities_implentation.html)

