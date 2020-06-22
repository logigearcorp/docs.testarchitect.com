--- 
title: "Using batch file to automate silent installation"
linktitle: "Using batch file to automate silent installation"
description: "In practice, there are occasions where you might need to write and schedule a batch (.bat) file to automate the tasks of silent TestArchitect uninstallation and installation. This topic shows a basic template to follow."
weight: 8
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_uninst_TA_silent_mode_batch_file.html
keywords: "batch file, silent installation, TestArchitect, batch file, silent installation"
---

In practice, there are occasions where you might need to write and schedule a batch \(.bat\) file to automate the tasks of silent TestArchitect uninstallation and installation. This topic shows a basic template to follow.

Ensure that the following requirements are met:

-   Be familiar with silent [installation](/TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html) and [uninstallation](/TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode.html).
-   Create [installation](/TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_creating_response_file.html) and [uninstallation](/TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_creating_response_file.html) response files.
-   Back up abt.ini and automation.ini from the computer creating the response files.

{{<note>}}

    -   abt.ini stores information such as, repository server, license server, such as, automation harness. Location:
        -   C:\\Users\\Public\\LogiGear\\TestArchitect\\controller
        -   C:\\Users\\Public\\LogiGear\\TestArchitect\\Data
        -   C:\\Users\\Public\\LogiGear\\TestArchitect\\LicenseServer
        -   C:\\Users\\Public\\LogiGear\\TestArchitect\\RS
    -   automation.ini store automation information. Location: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data

1.  Assign TestArchitect version to the following variables

    For example, enter the code lines below.

    ```
    
    set ta_version=TestArchitect_8.3.0.145_x64.exe 
    ```

2.  Terminate all TestArchitect-related processes, if running.

    Enter the code lines below.

    ```
    taskkill /IM TAControllerGUI.exe /F /T
    taskkill /IM TAController.exe /F /T
    taskkill /IM TAClient.exe /F /T
    taskkill /IM TARegisterServer.exe /F /T
    taskkill /IM tars.exe /F /T
    taskkill /IM TARepository.exe /F /T
    taskkill /IM TestArchitectHelp.exe /F /T
    ```

3.  Uninstall previously installed TestArchitect by entering the following command. `<UninstallString value> /s /f1<path_to_response_file>\<respone_file>.iss /f2<path_to_log_file>\<log_file>.log` \([Learn more](/TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_running_response_file.html).\)

{{<note>}} If you do not installTestArchitect yet, proceed to step \#6.

    For example, enter the code line below.

    ```
    echo Uninstall TA
    "C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" 
    -runfromtemp -l0x0409 -removeonly 
    /s /f1"\\PC01\Silent installation\uninstall.iss" /f2"\\PC01\Silent installation\uninstall.log"
    ```

    Where:

    -   **UninstallString** value: `"C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" -runfromtemp -l0x0409 -removeonly`
    -   Shared path to the response file: \\\\PC01\\Silent installation\\uninstall.iss
    -   Shared path to the log file over your network: \\\\PC02\\Silent installation\\uninstall.log
4.  Wait until InstallShield of uninstallation process is closed.

    Enter the code lines below.

    ```
    :loop
    tasklist /fi "imagename eq setup.exe" |find ":" > nul
    if errorlevel 1 goto loop
    ```

5.  Wait until uninstallation is done.

    Enter the code line below.

    ```
    ping 127.0.0.1 -n 31 > nul
    ```

6.  Begin to install a newer version of TestArchitect by entering the following command. `<path_to_installation_file>\<TestArchitect_installation_file.exe> /s /f1<path_to_response_file>\<respone_file>.iss /f2<path_to_log_file>\<log_file>.log` \([Learn more](/TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_running_response_file.html).\)

    For example, enter the code line below.

    ```
    echo Install TA
    "\\computerone\Silent installation\TestArchitect Build\%ta_version%" 
    /s/ /f1"\\computerone\Silent installation\Silent files\install.iss" 
    /f2"\\computerone\Silent installation\Silent files\install.log"
    ```

    Where:

    -   Shared path to the executable TestArchitect installation file over your network: \\\\computerone\\Silent installation\\TestArchitect Build\\%ta\_version%
    -   Shared path to the response file: \\\\computerone\\Silent installation\\Silent files\\install.iss
    -   Shared path to the log file over your network: \\\\computerone\\Silent installation\\Silent files\\install.log
7.  Wait until installation is done.

    Enter the code line below.

    ```
    ping 127.0.0.1 -n 31 > nul
    ```

8.  Copy abt.ini and automation.ini from the original computer, which created response files, into the computer that has just installed TestArchitect.

    abt.ini's location:

    -   C:\\Users\\Public\\LogiGear\\TestArchitect\\controller
    -   C:\\Users\\Public\\LogiGear\\TestArchitect\\Data
    -   C:\\Users\\Public\\LogiGear\\TestArchitect\\LicenseServer
    -   C:\\Users\\Public\\LogiGear\\TestArchitect\\RS
    automation.ini's location:

    -   C:\\Users\\Public\\LogiGear\\TestArchitect\\Data
{{<note>}} Remember to copy exact abt.ini and automation.ini to the same folders as the original computer on the target machine \(physical machines, cloud instances, virtual machines, etc.\)

    For example, enter the code lines below:

    ```
    echo Copy abt.ini
    copy /y "\\computerone\Silent installation\TestArchitect\controller\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\controller"
    copy /y "\\computerone\Silent installation\TestArchitect\Data\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\Data"
    copy /y "\\computerone\Silent installation\TestArchitect\LicenseServer\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\LicenseServer"
    copy /y "\\computerone\Silent installation\TestArchitect\RS\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\RS"
    
    echo Copy automation.ini
    copy /y "\\computerone\Silent installation\TestArchitect\Data\automation.ini" "C:\Users\Public\LogiGear\TestArchitect\Data"
    ```


Overall, the snippet of code should resemble the following:

```
@echo off
:: TA build version to be removed
set current_ta_version=TestArchitect_8.3.0.143_x64.exe

:: TA build version to be installed
set ta_version=TestArchitect_8.3.0.145_x64.exe

:: Kill all TA processes
taskkill /IM TAControllerGUI.exe /F /T
taskkill /IM TAController.exe /F /T
taskkill /IM TAClient.exe /F /T
taskkill /IM TARegisterServer.exe /F /T
taskkill /IM tars.exe /F /T
taskkill /IM TARepository.exe /F /T
taskkill /IM TestArchitectHelp.exe /F /T

:: Unistall TA
echo Uninstall TA
"C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" 
-runfromtemp -l0x0409 -removeonly 
/s /f1"\\PC01\Silent installation\uninstall.iss" /f2"\\PC01\Silent installation\uninstall.log"
	
:: Wait until InstallShield is closed
:loop 
tasklist /fi "imagename eq setup.exe" |find ":" > nul
if errorlevel 1 goto loop
	
:: Wait until Uninstallation completes
ping 127.0.0.1 -n 31 > nul

:: Install TA	
echo Install TA  
"\\computerone\Silent installation\TestArchitect Build\%ta_version%" 
/s/ /f1"\\computerone\Silent installation\Silent files\install.iss" 
/f2"\\computerone\Silent installation\Silent files\install.log"

:: Wait until Installation completes
ping 127.0.0.1 -n 31 > nul

::Copy abt.ini to target computer
echo Copy abt.ini files
copy /y "\\computerone\Silent installation\TestArchitect\controller\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\controller"
copy /y "\\computerone\Silent installation\TestArchitect\Data\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\Data"
copy /y "\\computerone\Silent installation\TestArchitect\LicenseServer\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\LicenseServer"
copy /y "\\computerone\Silent installation\TestArchitect\RS\abt.ini" "C:\Users\Public\LogiGear\TestArchitect\RS"

::Copy automation.ini to target computer
echo Copy automation.ini
copy /y "\\computerone\Silent installation\TestArchitect\Data\automation.ini" "C:\Users\Public\LogiGear\TestArchitect\Data"  
```

{{<remember>}} If you want to run automated tests on [Microsoft Edge](/../TA_Help/Topics/ug_preparing_Edge.html), you are required to pre-install the Microsoft WebDriver, and copy the above automation.ini file containing the WebDriver’s location to execution machines. In case you do not test on Edge, ignore this note. WebDriver is an MSI package, you should be able to install it silently.




