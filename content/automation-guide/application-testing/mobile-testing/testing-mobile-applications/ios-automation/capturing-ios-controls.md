--- 
title: "Capturing iOS controls with the Interface Viewer"
linktitle: "Capturing iOS controls with the Interface Viewer"
description: "The Interface Viewer looks for the presence, and displays the graphical user interface (GUI) of, available iOS devices."
weight: 3
aliases: 
    - /iOS/Topics/iOS_capturing_interface.html
keywords: "iOS, capturing devices, interfaces, capturing on iOS, Interface Viewer, capturing iOS device"
---

The Interface Viewer looks for the presence, and displays the graphical user interface \(GUI\) of, available iOS devices.

{{<important>}} iOS automation is only supported on Windows or macOS hosts.

Ensure that the following requirements are met:

-   You are familiar with the Interface Viewer and the concepts involved in creating an interface \(see [The Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) for details\).
-   A [connection](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/connecting-to-ios-testarchitect-agent-over-wi-fi) between your iOS device and the host machine has been established.
-   The re-signed application is active on your iOS device.

Do the following to capture interface entities/elements of the re-signed application running on your iOS device:

1.  Launch the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/starting-the-interface-viewer).

2.  The Viewer generally attempts to restore the last viewing session \(whether with a device or host machine\) it was used for. If it does not automatically display the GUI environment of the iOS device you wish to view, select **View** \> **Switch Device** to switch to it.

    ![](/images/iOS/Images/iOS_switch_device.png)

    At this point, the Interface Viewer scans the host system for all available mobile devices. If the Viewer finds only one mobile device, it displays a GUI tree of the re-signed application for that device.

3.  If more than one mobile device is found, the Viewer displays the Select device dialog box to allow you choose which mobile device to automate. In this dialog box, select a desired device, then click the **Open** button.

    ![](/images/iOS/Images/iOS_select_device.png)

    The Interface Viewer displays the associated GUI tree \(the UI environment for the AUT on the iOS device\).

    {{<note>}}

    -   Only one AUT can be automated at a time. Therefore only one application’s UI environment is displayed.
    -   TestArchitect does not support capturing native iOS dialog boxes - that is, ones that, regardless of origin, are posted by the operating system rather than directly from the application. \(An example of such a dialog box would be one displaying the message <app name\> Would Like To Use Your Current Location, which originates from an application submitting a request to iOS, which then presents the popup.\)
4.  The processes for mapping iOS windows and GUI controls to interface entities and elements, naming items using TA name, and saving interface definitions are essentially the same as described in [Capturing interface definitions](/user-guide/interface-definitions/the-interface-viewer/capturing-interface-definitions) and [Naming interface elements](/user-guide/interface-definitions/the-interface-viewer/naming-interface-elements).


{{<restriction>}} Some features of the TestArchitect Interface Viewer are not available in the iOS version. These include:

-   The [Identify button](/user-guide/interface-definitions/the-interface-viewer/identifying-interface-elements-and-controls/point-to-identify-mode) ![](/images/iOS/Images/iOS_hand.png).
-   [Container classes](/user-guide/interface-definitions/container-classes/).
-   Showing invisible [windows](/user-guide/interface-definitions/the-interface-viewer/other-functionalities/show-invisible-windows).




