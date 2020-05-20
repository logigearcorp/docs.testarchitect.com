---
title: "Android: extend control"
---


# Launching an Android AUT {#Launching_an_AUT_Android .concept}

Any application to be tested on a target device must be launched in a manner that allows TestArchitect to properly interface with it.

**Important:** Android automation is only supported on Windows.

Starting an application in the normal, real world fashion \(that is, by clicking or tapping its icon on the menu screen of the target device\) does cause the application to run properly, but does not allow for communication with TestArchitect. Instead, TestArchitect itself must issue the directive to start the AUT, either through the [Android Instrumentation Tool](Android_Instrumentation_tool.md) dialog box, or via the [start program](../../TA_Automation/Topics/bia_start_program.md) action of a test procedure. This initiates the control path involving the TestArchitect Agent service and the AUT’s companion [AndroidAgentInstrumentation](Installing_applications_to_a_target_device.md#p_hl4_pjn_5n) instance.

To launch an application from the [Android Instrumentation Tool](Android_Instrumentation_tool.md) dialog box, do the following:

1.  Select the correct device.
2.  Double-click the application to be tested. The application is then launched on the target device.

If an AUT is already running at the time a new AUT is launched, the former is automatically closed before the new process is started. This is true even if the just-launched AUT is the same as that which is running.

To again summarize the three methods by which a re-signed Android application may be launched:

1.  Launching from the host device is the typical way by which an application is launched in a real world environment. On a physical device or emulator, you start the application by tapping \(physical device\) or clicking \(emulator\) its icon on the menu screen.

    **Note:** However, this method prevents TestArchitect from communicating with the application, and thus makes it unavailable for testing.

2.  Launching from a test module with the [start program](../../TA_Automation/Topics/bia_start_program.md) action: By starting the application in this manner, TestArchitect is able to interface to the AUT, and can thus control and test the AUT.
3.  Launching from the Android Instrumentation Tool dialog box: This is the method by which an AUT may be launched manually and yet still allow TestArchitect to interface to it and control it. Do this by double-clicking the appropriate AUT icon in the dialog box.

At this time, if an interface does not yet exist, you can create one with the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.md).

**Parent topic:**[Setting up Android automation](../../Android/Topics/Setting_up_Android_automation.md)

**Previous topic:**[Installing a testable Android application](../../Android/Topics/Installing_applications.md)

**Related information**  


[Start command of the Android command line tool](../../Android/Topics/Android_command_line_tool_start.md)

