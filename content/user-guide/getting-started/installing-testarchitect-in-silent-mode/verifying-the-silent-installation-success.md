--- 
title: "Verifying the silent installation success"
linktitle: "Verifying the silent installation success"
description: "In silent mode, the installation wizard shows no informative, warning or error messages. The installation program creates the log file and writes the installation status to that file. You can examine that log file to learn whether TestArchitect has been installed successfully."
weight: 3
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode_verifying_response_file.html
keywords: 
---

In silent mode, the installation wizard shows no informative, warning or error messages. The installation program creates the log file and writes the installation status to that file. You can examine that log file to learn whether TestArchitect has been installed successfully.

The file is located in the folder, specified by the /f2 parameter \([learn more](/user-guide/getting-started/installing-testarchitect-in-silent-mode/running-silent-installation#step_kgh_glc_vw)\). Open the file and check the ResultCode value. 0 indicates success, any other values indicate an error. A complete list of error codes is available [here](http://helpnet.installshield.com/installshield19helplib/helplibrary/SetupLog.htm).


