--- 
title: "Creating an installation response file"
linktitle: "Creating an installation response file"
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_creating_response_file.html
---
# Creating an installation response file {#task_lq5_2nx_qw .task}

To install TestArchitect in silent mode by using InstallShield, create an installation response file to store the needed installation settings.

1.  Choose a computer on which TestArchitect is not installed.

2.  Bring up a command window with administrator right.

    The command window opens with a prompt displaying your current directory.

3.  Run the TestArchitect installation file in record mode with the following command:

    `<path_to_installation_file>\<TestArchitect_installation_file.exe> /r`

    -   /r: Use this command line to run the installation in record mode. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)
    -   If the path includes spaces, enclose it in quotes.
    For example, enter the following command:

    ```
    "D:\Silent installation\TestArchitect Build\TestArchitect_8.3.0.143_x64.exe" /r
    ```

    ![](../Images/silent_mode_record_mode.png)

    Where:

    -   Path to the executable TestArchitect installation file: D:\\Silent installation\\TestArchitect Build\\TestArchitect\_8. 3.0.143\_x64.exe
4.  Follow the onscreen instructions and install TestArchitect with the needed settings.

    The installation program tracks the choices you make during the installation and records them to the setup.iss file in the Windows folder on your system drive.

5.  Rename setup.iss into install.iss, which is in charge of silent installation.


**Parent topic:**[Installing TestArchitect in silent mode](../../../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html)

**Next topic:**[Running silent installation](../../../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_running_response_file.html)

