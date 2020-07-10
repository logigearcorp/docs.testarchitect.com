--- 
title: "Identifying mobile UI controls"
linktitle: "Identifying mobile UI controls"
description: "Device Live Screen extends to mobile apps the functionality of the Interface Viewer's point-to-identify feature, streamlining the process of locating a given control within the Viewer's UI Explorer tree."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html
keywords: "mobile web testing, Chrome, identifying controls, Chrome testing, Android, identifying controls"
---

Device Live Screen extends to mobile apps the functionality of the Interface Viewer's point-to-identify feature, streamlining the process of locating a given control within the Viewer's UI Explorer tree.

[Point-to-identify](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode) mode of the Interface Viewer simplifies the process of exploring a complex window with many layers of mobile controls, allowing you to quickly locate the UI Explorer tree node corresponding to a given physical control. With Device Live Screen, which allows you to conveniently display live screen images of a connected mobile device on your test machine's monitor, point-to-identify is available to mobile device apps as well as desktop applications.

To identify mobile app UI controls from the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode), carry out the following steps:

1.  Launch Device Live Screen. \([Learn more.](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/device-live-screen/)\)

2.  Launch the Interface Viewer. \([Learn more.](/user-guide/interface-definitions/the-interface-viewer/starting-the-interface-viewer)\)

3.  From the Interface Viewer's toolbar, click the **Device mode** ![](/images/TA_Help/Images/btn_device_mode_Viewer.png) button. This activates [Device Mode](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/ui-explorer-panel#section.device_desktop_mode), to display the GUI environment of the AUT running on a given mobile device.

    ![](/images/TA_Automation/Images/Viewer_toolbar_device_mode_btn.png)

    **Fastpath:** Alternatively, you can also select **View** \> **Switch device** from the main menu.

    {{<note>}} Synchronization of the Interface Viewer and Device Live Screen is always maintained when switching among devices, or Device Mode is activated.

    -   If the Device Live Screen window is already open, Device Mode activation causes the Interface Viewer to display the GUI environment of the mobile device currently displayed in the Device Live Screen window.
    -   If the Device Live Screen window is not yet open, Device Mode automatically launches the Device Live Screen window. Subsequently, the Device Live Screen shows the screen of the device selected in the Interface Viewer. Note that,
        -   If only one mobile device is detected, the Interface Viewer automatically selects that device.
        -   If more than one mobile device is detected, the Interface Viewer shows a dialog box asking you to select a device.
    The Interface Viewer triggers Device Mode to display the GUI environment of the device currently mirrored in the Device Live Screen window.

    {{<tip>}}

    -   The **Device mode** ![](/images/TA_Help/Images/btn_device_mode_Viewer.png) button can also be used to switch between multiple connected mobile devices.
    -   The **View** \> **Switch device** menu is not only used to switch across multiple mobile devices, but also to toggle between [device mode](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/ui-explorer-panel#section.device_desktop_mode) and [desktop mode](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/ui-explorer-panel#section.device_desktop_mode).
4.  From the Interface Viewer's toolbar, click the **Identify** ![](/images/TA_Automation/Images/identify_btn.png) button.

5.  Through the Device Live Screen window, navigate to the control you wish to identify, and hover your mouse pointer over it.

    {{<note>}} The identification of non-HTML elements is not supported. For example, a JavaScript popup on an HTML is not identifiable.

    As you move your pointer around the screen, an orange, rectangular frame highlights whichever control lies under it. At the same time, the control's TA class is displayed, to assist you in deciding where to click.

    ![](/images/Android/Images/chrome_Android_Identify_effect.png)

6.  Select a desired control by clicking on it.


In the UI Explorer panel, the tree containing the just-selected control is expanded to expose that node, and the node is highlighted.

![](/images/Android/Images/chrome_Android_Identify_Viewer.png)




**Related information**  


[Device Live Screen](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/device-live-screen/)

[Capturing screenshots of a mobile device](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/capturing-screenshots-of-a-mobile-device)

