--- 
title: "TestArchitect Register Server"
linktitle: "TestArchitect Register Server"
description: "Ensure the availability of TestArchitect Register Server service before starting automated tests to avoid the possibility of automation errors or failure."
weight: 6
aliases: 
    - /TA_Administration/Topics/adm_taregserver.html
keywords: "desktop testing, application testing"
---

By default, TestArchitect Register Server, which is installed with TestArchitect, automatically starts up as a service \(daemon\) each time you boot your computer. This service is often essential for automated testing, and should generally be available. Ensure the availability of TestArchitect Register Server service before starting automated tests to avoid the possibility of automation errors or failure.

To check whether TestArchitect Register Server is running, carry out the following procedures:

-   **Windows**
    1.  Launch Task Manager.
    2.  Under the **Processes** tab, verify the presence of TARegisterServer.exe.
-   **Linux**
    -   GNOME:
        1.  Launch System Monitor.
        2.  Under the **Processes** tab, verify the availability of TARegisterServer.
    -   KDE:
        1.  Launch KSysGuard.
        2.  Under the **Process Table** tab, verify the availability of TARegisterServer.
-   **macOS**
    1.  Launch Activity Monitor.
    2.  Under the **CPU** tab, verify the availability of TARegisterServer.

If, for any reason, TestArchitect Register Server is not running, it is automatically started when you work with any of the following tools:

-   [Android Instrumentation Tool](/Android/Topics/Android_Instrumentation_tool.html).
-   [Device live screen](/TA_Help/Topics/ug_capturing_mobile_screenshot.html)
-   [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html)

Otherwise, to manually restart TestArchitect Register Server:

-   in **Windows**: Go to location TA\_INSTALL\_DIR\\binclient\\agents\\, then double-click the TARegisterServer.exe file.
-   in **Linux**: From a command prompt, navigate to location /usr/local/logigear/testarchitect/binclient/agents/, then execute the TARegisterServer.sh file.
-   in **macOS**: From a command prompt, navigate to location /Applications/TestArchitect/binclient/agents/, then execute the TARegisterServer.sh file.




**Related information**  


[Default port numbers and port ranges](/TA_Administration/Topics/adm_port_number_port_ranges.html)

