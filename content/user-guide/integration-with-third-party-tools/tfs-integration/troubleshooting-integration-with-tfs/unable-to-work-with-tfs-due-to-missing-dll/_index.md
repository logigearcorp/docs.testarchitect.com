--- 
title: "Unable to work with Team Foundation Server due to missing DLL"
linktitle: "Unable to work with TFS due to missing DLL"
weight: 1
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.TFS_missing_library.html
---

## Problem

Although you've followed the configuration steps to integrate TestArchitect with Team Foundation Server properly, you encounter the following error message every time TA works with TFS, such as when uploading a TA test module. Could not continue the process: the library 'Newtonsoft.Json' is missing. Please install it, then try again. You can find more details in the help topic 'Unable to work with Team Foundation Server due to missing DLL'.

## Solution

Performing the following steps on the repository server machine will help resolve this issue:

1.  Download NuGet \(nuget.exe\), the package manager for the Microsoft development platform. \([Learn more](https://dist.nuget.org/index.html)\).
2.  Download the Json.NET package. \([Learn more](https://www.nuget.org/packages/Newtonsoft.Json/4.5.1).\)

    **Important:** For TFS 2013, 2015, 2015 Update 1, download Json.NET version \#**4.5.1**.

3.  Install nuget.exe by doing the following:
    1.  Bring up the Windows console window. The console window opens with a prompt displaying your current directory.
    2.  On the console window, change the current directory into the location where nuget.exe is downloaded.
    3.  Run the following command.

        ```
        nuget.exe
        ```

4.  Obtain the Newtonsoft.Json.dll library by running the following command.

    ```
    nuget install Newtonsoft.Json -Version 4.5.1
    ```

5.  Go to the location of NuGet , that is, \{NUGET\_DIR\}\\Newtonsoft.Json.4.5.1\\lib\\net40\\Newtonsoft.Json.dll, and then copy Newtonsoft.Json.dll into the following location \{INSTALL\_DIR\}\\repository\\plugins\\tfs.
6.  Terminate the TfsHelper.exe process, if running.

    ![](/images//Images/TfsHelper.png)


**Parent topic:**[Troubleshooting integration with Team Foundation Server](/TA_FAQ/Topics/faq.tshoot.TFS.html)

**Next topic:**[Unable to upload test results to Team Foundation Server due to mismatched build number values](/TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html)

