--- 
title: "Capturing an Android interface with the Interface Viewer"
linktitle: "Capturing an Android interface"
weight: 3
aliases: 
    - /Android/Topics/Capturing_Android_interface.html
---
# Capturing an Android interface with the Interface Viewer {#task_efr_545_zn .task}

The Interface Viewer looks for the presence of an available Android device. If found, it displays the elements of its graphical user interface.

**Important:** Android automation is only supported on Windows.

Ensure that the following requirements are met:

-   You are familiar with the Interface Viewer and the concepts involved in creating an interface. \([Learn more](../../TA_Help/Topics/Interface_def_Viewer.html).\)
-   A connection between your Android device and the host machine has been established. \([Lear more](Setting_up_installation_target_devices.html).
-   The re-signed application is active on your Android device. \([Learn more](Launching_an_AUT.html).\)

Do the following to capture interface entities/elements of the re-signed application running on your Android device:

1.  Launch the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_Starting.html).

2.  The Interface Viewer generally attempts to restore the last viewing session \(whether with a device or host machine\) it was used for. If it does not automatically display the GUI environment of the Android device you wish to view, select **View** \> **Switch Device** to switch to it.

    ![](../Images/android_17.png)

    It should be noted that any Android emulator that is running on the host PC runs as an application of that PC’s Windows system. Therefore, when the Interface Viewer is displaying the host PC’s environment, it includes a node representing the emulator. However, any controls accessible through this node would be only those of the Windows application running the emulator. The actual Android interface elements of the emulator’s AUT are not accessible until you switch the Interface Viewer to scan and present the Android environment.

    At this point, the Interface Viewer scans the host system for all available mobile devices. If the Interface Viewer finds only one mobile device, it displays a GUI tree of the re-signed application for that device.

3.  If more than one mobile device is found, the Interface Viewer displays the Select device dialog box to allow you choose which mobile device to automate. In this dialog box, select a desired device, then click the **Open** button.

    The Interface Viewer displays the associated GUI tree \(the GUI environment for the AUT on the Android device\).

    **Note:** Only one AUT can be automated at a time. Therefore only one application’s UI environment is displayed.


The processes for mapping Android windows and GUI controls to interface entities and elements, naming items using TA name, and saving interface definitions, are essentially the same as described in [Capturing interface definitions](../../TA_Help/Topics/Interface_def_capturing.html) and [Naming interface elements](../../TA_Help/Topics/Interface_def_naming.html).

**Note:**

-   You may find it difficult to capture controls with Class View in the Interface Viewer, especially when you do not know the exact class of the desired controls. It is recommended that you switch to the Hierarchy View to capture your desired controls. Use the **View** menu to switch between Class View and Hierarchy View.

    ![](../Images/android_hierarchy_view.png)

-   To allow Auto Highlight to work properly, ensure that [application notification](../../TA_FAQ/Topics/faq.tshoot.Android_viewer_not_working.html) of TestArchitect Automation Agent is enabled..
-   There are some differences in the appearance of the Interface Viewer when in Android mode \(that is, presenting an Android environment\) as described below:
    -   The toolbar lacks the hand ![](../Images/android_18.png) drag-and-drop button. This is the button that is used to locate the appropriate node on the GUI tree for a given element in an application’s GUI interface. This is not available, as it is not possible to drag the hand from the Interface Viewer, a Windows application, onto an Android device’s screen.
    -   The highlight element ![](../Images/android_19.png) button is still available. Given the relative simplicity of Android application windows, this button should suffice in allowing you to match GUI elements to nodes, and vice versa. The GUI element on your Android device flashes when highlighted by the Interface Viewer.

**Parent topic:**[Android Automation](../../Android/Topics/Android_Automation_begin.html)

**Previous topic:**[Setting up the test environment](../../Android/Topics/Setting_up_the_test_enviroment.html)

**Next topic:**[Starting Android automated tests](../../Android/Topics/Android_execution.html)

