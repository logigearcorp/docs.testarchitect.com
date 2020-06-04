--- 
title: "Running silent installation"
linktitle: "Running silent installation"
weight: 2
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_running_response_file.html
---

Deploying TestArchitect installation file on other computers and running the installation there using the created response file.

1.  Deploy the TestArchitect installation file and the installation response file to the target computer.

2.  Bring up a command window with administrator right.

    The command window opens with a prompt displaying your current directory.

3.  On the target computer, run the following command:

    `<path_to_installation_file>\<TestArchitect_installation_file.exe> /s /f1<path_to_response_file>\<respone_file.iss> /f2<path_to_log_file>\<log_file.log>`

    -   /s: Runs the installation in silent mode. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)
    -   /f1: Specifies where the response file is. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)
    -   /f2: Specifies a log file location and file name. \([Learn more](http://helpnet.flexerasoftware.com/installshield19helplib/helplibrary/IHelpSetup_EXECmdLine.htm).\)

        **Note:** Specify an absolute path; using a relative path gives unpredictable results.

    -   If the path includes spaces, enclose it in quotes.
    For example, enter the following command:

    ```
    "D:\Silent installation\TestArchitect Build\TestArchitect_8.3.0.143_x64.exe" 
    /s /f1"D:\Silent installation\Silent files\install.iss" 
    /f2"D:\Silent installation\Silent files\install.log"
    ```

    ![](/images//Images/silent_mode_run.png)

    Where:

    -   Path to the executable TestArchitect installation file: D:\\Silent installation\\TestArchitect Build\\TestArchitect\_8.3.0.143\_x64.exe
    -   Path to the response file: D:\\Silent installation\\Silent files\\install.iss
    -   Path to the log file: D:\\Silent installation\\Silent files\\install.log
    The installation program installs TestArchitect in the background using the options specified in the response file. The installation program displays no dialog boxes. The installation progress is not shown either.

    **Warning:** Silent installation only applies to the TestArchitect English version.


**Parent topic:**[Installing TestArchitect in silent mode](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html)

**Previous topic:**[Creating an installation response file](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_creating_response_file.html)

**Next topic:**[Verifying the silent installation success](/../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_verifying_response_file.html)

