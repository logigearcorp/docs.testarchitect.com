--- 
title: "Capturing iOS controls with the Interface Viewer"
linktitle: "Capturing iOS controls"
weight: 3
aliases: 
    - /iOS/Topics/iOS_capturing_interface.html
---
# Capturing iOS controls with the Interface Viewer {#task_qz1_txk_3n .task}

The Interface Viewer looks for the presence, and displays the graphical user interface \(GUI\) of, available iOS devices.

**Important:** iOS automation is only supported on Windows or macOS hosts.

Ensure that the following requirements are met:

-   You are familiar with the Interface Viewer and the concepts involved in creating an interface \(see [The Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) for details\).
-   A [connection](iOS_connecting_to_host_machine.html) between your iOS device and the host machine has been established.
-   The re-signed application is active on your iOS device.

Do the following to capture interface entities/elements of the re-signed application running on your iOS device:

1.  Launch the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_Starting.html).

2.  The Viewer generally attempts to restore the last viewing session \(whether with a device or host machine\) it was used for. If it does not automatically display the GUI environment of the iOS device you wish to view, select **View** \> **Switch Device** to switch to it.

    ![](../Images/iOS_switch_device.png)

    At this point, the Interface Viewer scans the host system for all available mobile devices. If the Viewer finds only one mobile device, it displays a GUI tree of the re-signed application for that device.

3.  If more than one mobile device is found, the Viewer displays the Select device dialog box to allow you choose which mobile device to automate. In this dialog box, select a desired device, then click the **Open** button.

    ![](../Images/iOS_select_device.png)

    The Interface Viewer displays the associated GUI tree \(the UI environment for the AUT on the iOS device\).

    **Note:**

    -   Only one AUT can be automated at a time. Therefore only one application’s UI environment is displayed.
    -   TestArchitect does not support capturing native iOS dialog boxes - that is, ones that, regardless of origin, are posted by the operating system rather than directly from the application. \(An example of such a dialog box would be one displaying the message <app name\> Would Like To Use Your Current Location, which originates from an application submitting a request to iOS, which then presents the popup.\)
4.  The processes for mapping iOS windows and GUI controls to interface entities and elements, naming items using TA name, and saving interface definitions are essentially the same as described in [Capturing interface definitions](../../TA_Help/Topics/Interface_def_capturing.html) and [Naming interface elements](../../TA_Help/Topics/Interface_def_naming.html).


**Restriction:** Some features of the TestArchitect Interface Viewer are not available in the iOS version. These include:

-   The [Identify button](../../TA_Help/Topics/Interface_def_Viewer_identify.html) ![](../Images/iOS_hand.png).
-   [Container classes](../../TA_Help/Topics/Interface_def_container_class.html).
-   Showing invisible [windows](../../TA_Help/Topics/Interface_def_Viewer_show_invisible_windows.html).

**Parent topic:**[iOS Automation](../../iOS/Topics/iOS_automation_def.html)

**Previous topic:**[Setting up the iOS test environment](../../iOS/Topics/iOS_setting_up_the_test_enviroment.html)

**Next topic:**[Launching an AUT](../../iOS/Topics/iOS_launching_an_AUT.html)

