--- 
title: "Launching Device Live Screen"
linktitle: "Launching Device Live Screen"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_DLS_displaying_window.html
---

1.  Attach the mobile device to your host machine.

2.  There are several ways to launch Device Live Screen:

    -   Method 1: In TestArchitect Client, from the **Tools** menu, click **Device Live Screen**.
    -   Method 2: From the Interface Viewer's toolbar, click the **Device mode** ![](/images//Images/btn_device_mode_Viewer.png) button.
    -   Method 3: From the Interface Viewer's main menu, click **View** \> **Switch device**.
    **Tip:** In the specific case of web applications running in the Chrome browser on Android, it is possible to use TestArchitect [point-to-identify](/TA_Help/Topics/Interface_def_Viewer_identify.html) with Device Live Screen to quickly capture controls and generate interface definitions. \(See [Identifying mobile UI controls](/TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html) for more on this topic.\) When using Device Live Screen in this manner, it is recommended that you use either of \# Methods 2 or 3 above to launch it.

    If Method 1 \(above\) is used to launch Device Live Screen, the Open device live screen dialog box appears and displays all connected mobile devices on your test machine.

    ![](/images//Images/live_view_1.png)

    If either Method 2 or 3 is used, a different dialog box, Select Device, appears, but only if more than one device is detected. Select Device has the same functionality as the Open device live screen dialog box.

3.  Select a connected device from the drop-down list.

4.  Click **Open**.


The Device Live Screen window appears and displays the current screen of your selected device. As this is a “real time” mirror of your device, any changes that occur on the device's screen are immediately reflected in the Device Live Screen window.

**Parent topic:**[Device Live Screen](/TA_Help/Topics/ug_DLS.html)

**Next topic:**[Display modes](/TA_Help/Topics/ug_DLS_display_modes.html)

