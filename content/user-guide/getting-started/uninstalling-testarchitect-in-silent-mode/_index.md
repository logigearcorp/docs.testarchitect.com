--- 
title: "Uninstalling TestArchitect in silent mode"
linktitle: "Uninstalling TestArchitect in silent mode"
description: "In some cases, you may need to uninstall the current version of TestArchitect in silent mode before installing the newer version. In this mode, the uninstallation is performed automatically without any user interaction."
weight: 7
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode.html
keywords: "installation guide, silent uninstallation, TestArchitect"
---

In some cases, you may need to uninstall the current version of TestArchitect in silent mode before installing the newer version. In this mode, the uninstallation is performed automatically without any user interaction.

## {{< expand >}} Silent uninstallation performed via InstallShield on Windows

-   The uninstallation runs in the background. It does not show any dialog boxes or messages.
-   An uninstallation [response file](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/creating-an-uninstallation-response-file) is required. This file contains all the data needed during silent uninstallation.

-   **[Creating an uninstallation response file](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/creating-an-uninstallation-response-file)**  
To remove previously installed TestArchitect in silent mode by using InstallShield, create an uninstallation response file to store the needed uninstallation settings.
-   **[Running silent uninstallation](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/running-silent-uninstallation)**  
Deploying TestArchitect uninstallation file on other computers and running the uninstallation there using the created response file.
-   **[Verifying the silent uninstallation success](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/verifying-the-silent-uninstallation-success)**  
In silent mode, the uninstallation wizard shows no informative, warning or error messages. The uninstallation program creates the log file and writes the uninstallation status to that file. You can examine that log file to learn whether TestArchitect has been removed successfully.




