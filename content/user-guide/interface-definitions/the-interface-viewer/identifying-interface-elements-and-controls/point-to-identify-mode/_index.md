--- 
title: "Point-to-identify mode"
linktitle: "Point-to-identify mode"
description: "When using the Interface Viewer to explore a complex window with many layers of controls, it is sometimes difficult to locate the UI explorer tree node corresponding to a given physical control. The point-to-identify feature, invoked via the Identify button on the Viewer's toolbar, simplifies this process."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_identify.html
keywords: "identify, controls, Interface Viewer, identifying controls, viewer, identifying controls, identifying"
---

When using the Interface Viewer to explore a complex window with many layers of controls, it is sometimes difficult to locate the **UI explorer** tree node corresponding to a given physical control. The point-to-identify feature, invoked via the **Identify** ![](/images/TA_Help/Images/btn_Identify.png) button on the Viewer's toolbar, simplifies this process.

{{<important>}} Please note that use of point-to-identify is limited to native and web-based applications running on desktops, with one exception: point-to-identify may also be used on web applications running in the [Chrome browser on Android](/TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html).

![](/images/TA_Help/Images/ug_interface_definition23_UIA.png)

Point-to-identify works on any open window that is visible to the Viewer. It is not necessary to have an interface entity open when using point-to-identify, although it's often very helpful during the mapping process.

To identify a given control or window in the **UI explorer** tree:

1.  Ensure that the application window in which you're interested is open;
2.  On the Viewer's toolbar, click the **Identify** ![](/images/TA_Help/Images/btn_Identify.png) button. The Interface Viewer is minimized and point-to-identify mode takes effect, with the mouse cursor changing to a pointing hand;
3.  Navigate to the item you wish to identify, place your mouse over it, and click it. With this click, point-to-identify mode is terminated, and the Interface Viewer pops back to the foreground. In the UI explorer panel, the tree containing the node representing the item clicked on is expanded to expose that node, and the node is highlighted:

{{<note>}}

    -   While point-to-identify mode is active, as you move your pointer around the screen, an orange, rectangular frame highlights whichever window or control the cursor is made to hover over, to assist you in deciding where to click.

![](/images/TA_Help/Images/ug_interface_definition24.png)

## Working with point-to-identify mode

Point-to-identify mode is available from both the Interface Viewer and [TA Client](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html). There are some differences, but the following commonalities exist:

-   When you enter point-to-identify mode, your mouse cursor transforms into a pointing hand ![](/images/TA_Help/Images/ug_interface_definition43.png)
-   As you move your pointer around the screen, an orange, rectangular frame highlights whichever window or control the pointer is hovering over, to assist you in deciding where to click.
-   A screentip appears with each highlighted element, displaying its TA class.

{{<tip>}} To disable this TA class screentip, select menu **Edit** \> **Preferences**, and then clear the **Show TA class when identifying** check box.

-   Windows' Alt-Tab keys are still available within point-to-identify mode, to allow you to navigate between application windows. Right-clicking the mouse also behaves normally.
-   Point-to-identify mode can be suspended by holding down the Control key. \(Suspension is necessary if you wish to use the left mouse button to do anything "normal" before identifying the target item.\) Release the Control key to resume point-to-identify mode.
-   Use ESC to abort point-to-identify mode.
-   Point-to-identify mode is completed when you click your mouse on the target control or window. At this point, point-to-identify mode terminates and the Interface Viewer \(or, in the case of client-side [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html), the Element definition dialog box\) is displayed with appropriate information.



**Related information**  


[Point-to-identify tool](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html)

