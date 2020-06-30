--- 
title: "Installing TestArchitect in silent mode"
linktitle: "Installing TestArchitect in silent mode"
description: "In some cases, you may need to install TestArchitect in silent mode. In this mode, the installation is performed automatically without any user interaction."
weight: 6
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html
keywords: "installation guide, silent installation, TestArchitect"
---

In some cases, you may need to install TestArchitect in silent mode. In this mode, the installation is performed automatically without any user interaction.

For example, you install TestArchitect in silent mode, when you would like to automate the installation process or deploy TestArchitect on various computers. Especially, CI/CD cycle for continuous integration, deployment and delivery fit your needs most.

## Silent installation performed via InstallShield on Windows

-   The installation runs in the background. It does not show any dialog boxes or messages.
-   An installation [response file](/user-guide/getting-started/installing-testarchitect-in-silent-mode/creating-an-installation-response-file) is required. Response file is like a mold that helps replicate the installation process again and again.

    {{<warning>}}

    -   If you want to change something during installation, such as, installation directory, you are required to re-create this mold.
    -   Silent installation only applies to the TestArchitect English version.

1.  [Creating an installation response file](/user-guide/getting-started/installing-testarchitect-in-silent-mode/creating-an-installation-response-file)  
To install TestArchitect in silent mode by using InstallShield, create an installation response file to store the needed installation settings.
2.  [Running silent installation](/user-guide/getting-started/installing-testarchitect-in-silent-mode/running-silent-installation)  
Deploying TestArchitect installation file on other computers and running the installation there using the created response file.
3.  [Verifying the silent installation success](/user-guide/getting-started/installing-testarchitect-in-silent-mode/verifying-the-silent-installation-success)  
In silent mode, the installation wizard shows no informative, warning or error messages. The installation program creates the log file and writes the installation status to that file. You can examine that log file to learn whether TestArchitect has been installed successfully.




