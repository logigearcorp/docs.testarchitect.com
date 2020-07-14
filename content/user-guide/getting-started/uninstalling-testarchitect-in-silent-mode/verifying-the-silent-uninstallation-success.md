--- 
title: "Verifying the silent uninstallation success"
linktitle: "Verifying the silent uninstallation success"
description: "In silent mode, the uninstallation wizard shows no informative, warning or error messages. The uninstallation program creates the log file and writes the uninstallation status to that file. You can examine that log file to learn whether TestArchitect has been removed successfully."
weight: 3
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/uninst_TA_silent_mode_verifying_response_file.html
keywords: 
---

In silent mode, the uninstallation wizard shows no informative, warning or error messages. The uninstallation program creates the log file and writes the uninstallation status to that file. You can examine that log file to learn whether TestArchitect has been removed successfully.

The file is located in the folder, specified by the /f2 parameter \([learn more](/user-guide/getting-started/uninstalling-testarchitect-in-silent-mode/running-silent-uninstallation#choice.f2.param)\). Open the file and check the ResultCode value. 0 indicates success, any other values indicate an error. A complete list of error codes is available [here](http://helpnet.installshield.com/installshield19helplib/helplibrary/SetupLog.htm).

