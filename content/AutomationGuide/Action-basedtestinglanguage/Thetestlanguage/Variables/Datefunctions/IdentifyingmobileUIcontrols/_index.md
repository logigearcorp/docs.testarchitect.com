--- 
title: "Identifying mobile UI controls"
linktitle: "Identifying mobile UI controls"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html
---
# Identifying mobile UI controls {#task_rzz_zy5_gt .task}

Device Live Screen extends to mobile apps the functionality of the Interface Viewer's point-to-identify feature, streamlining the process of locating a given control within the Viewer's UI Explorer tree.

[Point-to-identify](../../TA_Help/Topics/Interface_def_Viewer_identify.html) mode of the Interface Viewer simplifies the process of exploring a complex window with many layers of mobile controls, allowing you to quickly locate the UI Explorer tree node corresponding to a given physical control. With Device Live Screen, which allows you to conveniently display live screen images of a connected mobile device on your test machine's monitor, point-to-identify is available to mobile device apps as well as desktop applications.

To identify mobile app UI controls from the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_identify.html), carry out the following steps:

1.  Launch Device Live Screen. \([Learn more.](../../TA_Help/Topics/ug_DLS.html)\)

2.  Launch the Interface Viewer. \([Learn more.](../../TA_Help/Topics/Interface_def_Viewer_Starting.html)\)

3.  From the Interface Viewer's toolbar, click the **Device mode** ![](../../TA_Help/Images/btn_device_mode_Viewer.png) button. This activates [Device Mode](../../TA_Help/Topics/ug_Interface_UI_explorer_panel.md#section.device_desktop_mode), to display the GUI environment of the AUT running on a given mobile device.

    ![](../Images/Viewer_toolbar_device_mode_btn.png)

    **Fastpath:** Alternatively, you can also select **View** \> **Switch device** from the main menu.

    **Note:** Synchronization of the Interface Viewer and Device Live Screen is always maintained when switching among devices, or Device Mode is activated.

    -   If the Device Live Screen window is already open, Device Mode activation causes the Interface Viewer to display the GUI environment of the mobile device currently displayed in the Device Live Screen window.
    -   If the Device Live Screen window is not yet open, Device Mode automatically launches the Device Live Screen window. Subsequently, the Device Live Screen shows the screen of the device selected in the Interface Viewer. Note that,
        -   If only one mobile device is detected, the Interface Viewer automatically selects that device.
        -   If more than one mobile device is detected, the Interface Viewer shows a dialog box asking you to select a device.
    The Interface Viewer triggers Device Mode to display the GUI environment of the device currently mirrored in the Device Live Screen window.

    **Tip:**

    -   The **Device mode** ![](../../TA_Help/Images/btn_device_mode_Viewer.png) button can also be used to switch between multiple connected mobile devices.
    -   The **View** \> **Switch device** menu is not only used to switch across multiple mobile devices, but also to toggle between [device mode](../../TA_Help/Topics/ug_Interface_UI_explorer_panel.md#section.device_desktop_mode) and [desktop mode](../../TA_Help/Topics/ug_Interface_UI_explorer_panel.md#section.device_desktop_mode).
4.  From the Interface Viewer's toolbar, click the **Identify** ![](../Images/identify_btn.png) button.

5.  Through the Device Live Screen window, navigate to the control you wish to identify, and hover your mouse pointer over it.

    **Note:** The identification of non-HTML elements is not supported. For example, a JavaScript popup on an HTML is not identifiable.

    As you move your pointer around the screen, an orange, rectangular frame highlights whichever control lies under it. At the same time, the control's TA class is displayed, to assist you in deciding where to click.

    ![](../../Android/Images/chrome_Android_Identify_effect.png)

6.  Select a desired control by clicking on it.


In the UI Explorer panel, the tree containing the just-selected control is expanded to expose that node, and the node is highlighted.

![](../../Android/Images/chrome_Android_Identify_Viewer.png)

**Parent topic:**[Testing Google Chrome on Android](../../TA_Automation/Topics/aut_app_testing_mobile_web_Android.html)

**Previous topic:**[Invoking Google Chrome on Android during automation](../../TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Chrome.html)

**Next topic:**[Handling JavaScript popups on Chrome Android](../../TA_Automation/Topics/aut_app_testing_Android_apps_popups.html)

**Related information**  


[Device Live Screen](../../TA_Help/Topics/ug_DLS.html)

[Capturing screenshots of a mobile device](../../TA_Help/Topics/ug_capturing_mobile_screenshot.html)

