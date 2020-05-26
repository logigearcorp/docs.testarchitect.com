--- 
title: "Creating an uninstallation response file"
linktitle: "Creating an uninstallation response file"
weight: 1
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_creating_response_file.html
---
# Creating an uninstallation response file {#task_ccv_p4w_5w .task}

To remove previously installed TestArchitect in silent mode by using InstallShield, create an uninstallation response file to store the needed uninstallation settings.

1.  Choose a computer on which TestArchitect is already installed.

2.  Open Registry Editor. \([Learn more](https://support.microsoft.com/en-au/help/4027573/windows-open-registry-editor-in-windows-10).\)

3.  Go to the following key:

    -   For 64-bit TestArchitect, HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\U ninstall.

    -   For 32-bit TestArchitect, HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall

    The key contains a number of <product code GUID\> keys. GUID stands for Globally Unique Identifier.

4.  In the left pane, browse through <Product code GUID\> keys starting with InstallShield \_ and look at their **DisplayName** values in the right pane until you find the <Product code GUID\> key whose **DisplayName** value is TestArchitect.

    For example: The Product code GUID of TestArchitect 8.3.4.065 is InstallShield\_\{5036B92D-2051-46CA-AF28-9097F8F97E63\}.

5.  Copy the **UninstallString** value.

    ![](../Images/UninstallString.png)

6.  Bring up a command window with administrator right.

    The command window opens with a prompt displaying your current directory.

7.  Run the TestArchitect uninstallation file in record mode with the following command: `<UninstallString value> /r`

    ![](../Images/Cmd%20-%20create%20uninstallation%20response%20file.png)

    Where:

    -   **UninstallString** value: `"C:\Program Files (x86)\InstallShield Installation Information\{5036B92D-2051-46CA-AF28-9097F8F97E63}\setup.exe" -runfromtemp -l0x0409 -removeonly`
8.  Follow the onscreen instructions and remove TestArchitect.

    The uninstallation program records your choices to the setup.iss file in the Windows folder on your system drive.

9.  Rename setup.iss into uninstall.iss, which is in charge of silent uninstallation.


**Parent topic:**[Uninstalling TestArchitect in silent mode](../../../TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode.html)

