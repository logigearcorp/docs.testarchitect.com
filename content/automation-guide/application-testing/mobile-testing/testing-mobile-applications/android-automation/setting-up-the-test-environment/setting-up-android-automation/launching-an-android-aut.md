--- 
title: "Launching an Android AUT"
linktitle: "Launching an Android AUT"
description: "Any application to be tested on a target device must be launched in a manner that allows TestArchitect to properly interface with it."
weight: 3
aliases: 
    - /Android/Topics/Launching_an_AUT.html
keywords: "launching an AUT (Android), Android, launching an application under test"
---

Any application to be tested on a target device must be launched in a manner that allows TestArchitect to properly interface with it.

{{<important>}} Android automation is only supported on Windows.

Starting an application in the normal, real world fashion \(that is, by clicking or tapping its icon on the menu screen of the target device\) does cause the application to run properly, but does not allow for communication with TestArchitect. Instead, TestArchitect itself must issue the directive to start the AUT, either through the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box, or via the [start program](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/start-program) action of a test procedure. This initiates the control path involving the TestArchitect Agent service and the AUT’s companion [AndroidAgentInstrumentation](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/installing-a-testable-android-application/installing-the-re-signed-android-application-onto-a-target-device#p_hl4_pjn_5n) instance.

To launch an application from the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box, do the following:

1.  Select the correct device.
2.  Double-click the application to be tested. The application is then launched on the target device.

If an AUT is already running at the time a new AUT is launched, the former is automatically closed before the new process is started. This is true even if the just-launched AUT is the same as that which is running.

To again summarize the three methods by which a re-signed Android application may be launched:

1.  Launching from the host device is the typical way by which an application is launched in a real world environment. On a physical device or emulator, you start the application by tapping \(physical device\) or clicking \(emulator\) its icon on the menu screen.

    {{<note>}} However, this method prevents TestArchitect from communicating with the application, and thus makes it unavailable for testing.

2.  Launching from a test module with the [start program](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/start-program) action: By starting the application in this manner, TestArchitect is able to interface to the AUT, and can thus control and test the AUT.
3.  Launching from the Android Instrumentation Tool dialog box: This is the method by which an AUT may be launched manually and yet still allow TestArchitect to interface to it and control it. Do this by double-clicking the appropriate AUT icon in the dialog box.

At this time, if an interface does not yet exist, you can create one with the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/).



**Related information**  


[Start command of the Android command line tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-command-line-tool/start-command-of-the-android-command-line-tool/)

