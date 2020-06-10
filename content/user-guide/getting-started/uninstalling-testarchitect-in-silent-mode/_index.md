--- 
title: "Uninstalling TestArchitect in silent mode"
linktitle: "Uninstalling TestArchitect in silent mode"
weight: 7
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode.html
---

In some cases, you may need to uninstall the current version of TestArchitect in silent mode before installing the newer version. In this mode, the uninstallation is performed automatically without any user interaction.

## Silent uninstallation performed via InstallShield on Windows

-   The uninstallation runs in the background. It does not show any dialog boxes or messages.
-   An uninstallation [response file](/TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_creating_response_file.html) is required. This file contains all the data needed during silent uninstallation.

-   **[Creating an uninstallation response file](/../TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_creating_response_file.html)**  
To remove previously installed TestArchitect in silent mode by using InstallShield, create an uninstallation response file to store the needed uninstallation settings.
-   **[Running silent uninstallation](/../TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_running_response_file.html)**  
Deploying TestArchitect uninstallation file on other computers and running the uninstallation there using the created response file.
-   **[Verifying the silent uninstallation success](/../TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_verifying_response_file.html)**  
In silent mode, the uninstallation wizard shows no informative, warning or error messages. The uninstallation program creates the log file and writes the uninstallation status to that file. You can examine that log file to learn whether TestArchitect has been removed successfully.

**Parent topic:**[Getting started](/../TA_Help/Topics/Getting_started.html)

**Previous topic:**[Installing TestArchitect in silent mode](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html)

**Next topic:**[Using batch file to automate silent installation](/../TA_InstallationGuide/DITA_source/Topics/inst_uninst_TA_silent_mode_batch_file.html)

