--- 
title: "Configuring a test machine for Silverlight"
linktitle: "Configuring a test machine for Silverlight"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_preparation.html
---
# Configuring a test machine for Silverlight {#task_kdt_whc_1p .task}

Preparing your test machine to ensure the testability of your Silverlight application.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

Ensure the following requirements are met:

-   Silverlight 5 installed on your test machine. You can download Silverlight from [http://www.microsoft.com/silverlight/](http://www.microsoft.com/silverlight/) web page.
-   Your browser's cache has been cleared and the zoom ratio is set to 100%. Refer to [Preparing a web browser](aut_app_testing_Silverlight_apps_prepraring_browser.html) for more information.
-   A TestArchitect Certificate Authority installed on your test machine. See [Installing a Certificate Authority](aut_app_testing_Silverlight_apps_installing_CA.html) for details.
-   When installing TestArchitect, make sure that both the components TestArchitect Client and Repository Server are selected; this is essential to ensuring that the Interface Viewer can detect Silverlight controls.
-   CAUTION:

    For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)


Carry out the following procedures:

1.  Close all running web browsers as well as Silverlight desktop-based applications.

2.  Run the StartSilverlight.bat file by doing the following:.

    1.  Go to location TA\_INSTALL\_DIR\\binclient\\agents\\Silverlight.

    2.  Double-click the StartSilverlight.bat file.

    This batch file executes two files, TAPr0xy.exe and TASilverlightAgentServer.exe.

    -   TAPr0xy changes your current proxy setting, which is essential for testing Silverlight applications.

        **Note:** This change affects every web browser on the machine including Internet Explorer, Mozilla Firefox and Google Chrome. If you no longer need to test Silverlight applications, it is highly recommended that you [reset the proxy server settings](aut_app_testing_Silverlight_reset_proxy_settings.html).

    -   TASilverlightAgentServer injects some essential libraries into the application to make it testable. \(Note, however, that it does not change the Silverlight application's source code.\)
    -   These two files can be found at the following locations:
        -   TA\_INSTALL\_DIR\\binclient\\agents\\Silverlight\\Proxy\\TAPr0xy.exe
        -   TA\_INSTALL\_DIR\\binclient\\agents\\Silverlight\\SilverlightAgentServer\\TASilverlightAgentServer.exe
    **Tip:** To verify that the TASilverlightAgentsServer.exe and TAPr0xy.exe processes are running, do the following:

    1.  Launch Windows Task Manager.
    2.  Under the **Processes** tab, verify the presence of TASilverlightAgentsServer.exe and TAPr0xy.exe.

TestArchitect is now able to access Silverlight's UI controls and their properties. Use TestArchitect's [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) to capture the controls of the Silverlight AUT and generate your interface definitions.

**Parent topic:**[Preparing the test environment](../../TA_Automation/Topics/aut_app_testing_Silverlight_preparing_environment.html)

**Previous topic:**[Installing a Certificate Authority](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps_installing_CA.html)

