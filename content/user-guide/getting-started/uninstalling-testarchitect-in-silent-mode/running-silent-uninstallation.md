--- 
title: "Running silent uninstallation"
linktitle: "Running silent uninstallation"
description: "Deploying TestArchitect uninstallation file on other computers and running the uninstallation there using the created response file."
weight: 2
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_running_response_file.html
keywords: 
---

Deploying TestArchitect uninstallation file on other computers and running the uninstallation there using the created response file.

1.  Deploy the TestArchitect uninstallation response file, uninstall.iss, to the target computer.

2.  Get the **UninstallString** value of TestArchitect in Registry Editor. \([Learn more.](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/creating-an-uninstallation-response-file#UninstallString)\)

3.  Bring up a command window with administrator right.

    The command window opens with a prompt displaying your current directory.

4.  Run the TestArchitect uninstallation file in silent mode with the following command: `<UninstallString value> /s /f1<response_file> /f2<log_file>`

    -   /s: Run the installation in silent mode
    -   /f1: Specify where the response file is. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)
    -   /f2: Specifies a log file location and file name. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)
    -   Specify an absolute path; using a relative path gives unpredictable results.
    -   If the path includes spaces, enclose it in quotes.
    For example, enter the following command:

    ```
    "C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" 
    -runfromtemp -l0x0409 -removeonly 
    /s /f1"E:\uninstall.iss" /f2"E:\remove.log"
    ```

    ![](/images/TA_InstallationGuide/DITA_source/Images/Cmd%20-%20deploy%20ununistalation%20response%20file.png)

    -   **UninstallString** value: `"C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" -runfromtemp -l0x0409 -removeonly`
    -   Path to the response file: `"E:\uninstall.iss"`
    -   Path to the log file: `"E:\remove.log"`
    The uninstallation program removes TestArchitect in the background using the options specified in the response file. The uninstallation program displays no dialog boxes. The uninstallation progress is not shown either.



