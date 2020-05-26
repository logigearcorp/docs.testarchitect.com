--- 
title: "Configuring iOS devices and macOS machines for testing Safari iOS"
linktitle: "Configuring iOS devices and macOS machines"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_configurations.html
---
# Configuring iOS devices and macOS machines for testing Safari iOS {#task_u23_zv3_vp .task}

This section describes essential configurations needed to ensure that automated tests on Safari iOS run successfully and stably.

Prior to automating with TestArchitect, the following configurations must be set.

-   On your iOS test device: Turning on **Web Inspector** is the most crucial configuration for automating Safari:

    1.  Tap **Settings** \> **Safari** \> **Advanced**.

    2.  Turn on **Web Inspector**.

-   On your iOS test device: Disabling **Auto-Lock** ensures that your device does not automatically lock its display while the automated test is running, which would cause the test to fail:

    1.  Tap **Settings** \> **General** \> **Auto-Lock**.

    2.  Select the **Never** option.

-   On your macOS machine: Give permissions to the lockdown folder with the following command:

    ```
    sudo chmod -R 777 /var/db/lockdown
    ```


**Parent topic:**[Safari iOS testing prerequisites](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_prerequesites.html)

**Next topic:**[Re-signing and installing TestArchitect Browser Agent](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html)

