--- 
title: "Interface Viewer transient controls capture"
linktitle: "Capturing transient controls"
description: "The Interface Viewer retains captured UI controls and their properties even after they are no longer available from the AUT."
weight: 7
aliases: 
    - /TA_Help/Topics/ug_Interface_viewer_offline_mode.html
keywords: "interface viewer, offline mode, viewer, offline controls"
---

The Interface Viewer retains captured UI controls and their properties even after they are no longer available from the AUT.

During a capture session with the Interface Viewer, it is often the case that a control, group of controls, or window will be removed from availability by the AUT. For example, using the [Point-to-identify tool](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) on a popup menu item results in a mouse click that the AUT typically takes as its cue to dismiss the menu and all its controls. Despite their disappearance, the Viewer retains such objects in cache, to the extent that it has already captured them and their properties. Hence, when such transient UI objects are suddenly no longer available, you are still able to view them and save their properties with the Viewer.

Note that the Viewer's retention of objects and properties in cache is limited to those objects and properties that were captured prior to the objects being rendered unavailable. Controls of a window are captured when the window node is expanded in the Viewer's UI Explorer panel; however, the properties of each control are only captured when you click on the node for that control. Also keep in mind that, for performance reasons, TestArchitect does not, by default, capture invisible controls and container class controls. \(See [Intake](/user-guide/interface-definitions/control-properties/intake) for more on this.\)

{{<note>}} If the currently selected object in the Viewer is one that no longer exists, the Viewer alerts you to that fact with a notification message on the status bar, as illustrated below. It will also alert you if the properties of that object are not available because they were never captured prior to its dismissal.

![](/images/TA_Help/Images/Viewer_offline_mode_1.png "Offline mode when UI controls have property values")

![](/images/TA_Help/Images/Viewer_offline_mode_2.png "Offline mode when UI controls have no property values")

Here is a scenario illustrating the retention of transient controls:

1.  On the AUT, hover your mouse over a control which triggers a popup to appear.
2.  On the Viewer, use [point-to-identify](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode) to identify and capture a control on the popup, such as **Your Orders**.

    ![](/images/TA_Help/Images/point-to-identify.png)

3.  The Viewer automatically refreshes to obtain the properties of the **Your Orders** control, and the focus on the popup's controls is now lost. The popup then disappears, because the mouse no longer hovers over the control. Although the control on the popup becomes unavailable, the Viewer has already cached its properties' values.

    ![](/images/TA_Help/Images/offline_controls.png)

4.  You may now capture the non-existent control to an interface entity as usual.




