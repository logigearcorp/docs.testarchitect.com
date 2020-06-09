--- 
title: "Verifying the silent uninstallation success"
linktitle: "Verifying the silent uninstallation success"
weight: 3
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_verifying_response_file.html
---

In silent mode, the uninstallation wizard shows no informative, warning or error messages. The uninstallation program creates the log file and writes the uninstallation status to that file. You can examine that log file to learn whether TestArchitect has been removed successfully.

The file is located in the folder, specified by the /f2 parameter \([learn more](uninst_TA_silent_mode_running_response_file.html#choice.f2.param)\). Open the file and check the ResultCode value. 0 indicates success, any other values indicate an error. A complete list of error codes is available [here](http://helpnet.installshield.com/installshield19helplib/helplibrary/SetupLog.htm).

**Parent topic:**[Uninstalling TestArchitect in silent mode](/../TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode.html)

