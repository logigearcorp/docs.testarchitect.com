--- 
title: "Configuring notification time period to resolve unverified picture checks"
linktitle: "Configuring notification time period to resolve unverified picture checks"
weight: 6
aliases: 
    - /TA_Help/Topics/ug_configuring_notification_unverified_picture_checks.html
---

By default, you will be notified every five days when you log into a repository which has repository test results containing unverified picture checks.

![](/images//Images/Notification_unverified_picture_checks.png)

To turn off the notification dialog box, please [resolve unverified picture checks](/TA_Help/Topics/ug_Resolving_unverfied_picture_checks.html). In case you only want to adjust the time period for the dialog box, set a different value as follows.

1.  Using your favorite text editor, open the setting file abt.ini. This file, created during TestArchitect installation, defaults to the following locations:

    -   Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data\\abt.ini
    -   Linux: /usr/local/logigear/testarchitect/data/rs/abt.ini
    -   macOS: /Applications/TestArchitect/data/rs/abt.ini
2.  Under the \[SETTINGS\] section, set a new value for unverified picture checks results timeout, which is an integer representing the time period, in days, to notify that there are unverified picture checks.

    **Note:** unverified picture checks results timeout is defaulted to 5 days when the file is first created.

    For example:

    ```
    [SETTINGS]
    unverified picture checks results timeout=7
    ```


**Parent topic:**[Picture checks](/TA_Help/Topics/Projects_and_tests_picture_check.html)

