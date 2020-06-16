--- 
title: "TestArchitect Register Server"
linktitle: "TestArchitect Register Server"
description: "Ensure the availability of TestArchitect Register Server service before starting automated tests to avoid the possibility of automation errors or failure."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_taregserver.html
keywords: "desktop testing, application testing"
---

By default, TestArchitect Register Server, which is installed with TestArchitect, automatically starts up as a service \(daemon\) each time you boot your computer. This service is essential for much automated testing, and should generally be available. Ensure the availability of TestArchitect Register Server service before starting automated tests to avoid the possibility of automation errors or failure.

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

If TestArchitect Register Server is terminated, it is auto-started while you are working with the following functions:

-   [Instrumentation Tool](/Android/Topics/Android_Instrumentation_tool.html).
-   [Device live screen](/TA_Help/Topics/ug_capturing_mobile_screenshot.html)
-   [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html)

Otherwise, do the following to restart TestArchitect Register Server manually:

-   **Windows**: Go to location TA\_INSTALL\_DIR\\binclient\\agents\\, then double-click the TARegisterServer.exe file.
-   **Linux**: Go to location /usr/local/logigear/testarchitect/binclient/agents/, then execute the TARegisterServer.sh file using the terminal.
-   **macOS**: Go to location /Applications/TestArchitect/binclient/agents/, then execute the TARegisterServer.sh file using the terminal.



