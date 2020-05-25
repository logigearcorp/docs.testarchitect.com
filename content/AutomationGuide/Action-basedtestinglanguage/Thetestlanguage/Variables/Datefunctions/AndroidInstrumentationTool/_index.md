--- 
title: "Android Instrumentation Tool"
linktitle: "Android Instrumentation Tool"
aliases: 
    - /Android/Topics/Android_Instrumentation_tool.html
---
# Android Instrumentation Tool {#The_Android_Instrumentation_Tool .task}

The Android Instrumentation Tool or AIT is the central command for managing target devices and the testable applications on those devices.

**Important:** Android automation is only supported on Windows.

To launch the Android Instrumentation Tool:

1.  Start TestArchitect.

2.  From the **Tools** menu, select **Android - Instrument Applications**.


The Android Instrumentation Tool dialog box appears.

![](../Images/AIT_Android.png)

From this dialog box, you can:

-   View available devices.
-   View the testable applications currently installed on each device.
-   Install or remove testable applications to or from devices.

    **Important:** The Android Instrumentation Tool does not have sufficient privileges to remove a device admin application. It is recommended that you deactivate the device admin rights of the application to allow the tool to remove it. To deactivate device admin rights, carry out the following procedure:

    1.  On the Android device, select **Settings** \> **Security**.
    2.  Select the **Device administrators** option.
    3.  Tap the application you want to disable device admin rights of, then click **Deactivate**.
-   Launch testable applications on the target device

1.  [Devices panel](../../Android/Topics/Devices_area.html)  

2.  [Applications Under Test panel](../../Android/Topics/Application_under_test_area.html)  


**Parent topic:**[Android Automation](../../Android/Topics/Android_Automation_begin.html)

**Next topic:**[Setting up the test environment](../../Android/Topics/Setting_up_the_test_enviroment.html)

