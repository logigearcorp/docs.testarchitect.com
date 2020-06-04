--- 
title: "Unable to install TestArchitect Agent onto Genymotion"
linktitle: "Unable to install TestArchitect Agent onto Genymotion"
weight: 1
aliases: 
    - /TA_Automation/Topics/Tshoot.unable_to_install_TAAgent_onto_Genymotion.html
---

## Problem

As you are installing TestArchitect Agent onto Genymotion Desktop, the "loading permanently" error may occur. The installation process cannot be completed successfully.

## Cause

The error arises from the fact that the version of adb in Genymotion might be higher than that of adb in TestArchitect.

To check the version of adb in TestArchitect, do as follows:

1.  Launch Command Prompt.
2.  Go to the <TA\_INSTALL\_DIR\>\\device\\android\\tools folder
3.  Run the command below \([Learn more](https://developer.android.com/studio/command-line/adb)\):

    ```
    adb version
    ```

    ![](/images//Images/check_TA_adb_version.png)


Do similarly to check the version of adb in Genymotion Desktop:

1.  In Command Prompt, go to the <Genymotion\_installion\_directory\>\\tools folder
2.  Run the command below:

    ```
    adb version
    ```


## Solution

Copy the adb.exe file in TestArchitect \(located in <TA\_INSTALL\_DIR\>\\device\\android\\tools\) as an override into the existing adb.exe file in Genymotion \(located in <Genymotion\_installion\_directory\>\\tools \)

**Parent topic:**[Troubleshooting errors in mobile web application testing](/TA_Automation/Topics/testing_mobile_web_apps_troubleshooting.html)

