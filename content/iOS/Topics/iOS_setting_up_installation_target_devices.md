---
title: "Configuring an iOS device {#configuringiOStarget_devices .task}"
---

# Configuring an iOS device {#configuring_iOS_target_devices .task}

Configuring an iOS device for test automation.

**Important:** iOS automation is only supported on Windows or macOS hosts.

Perform the following on your iOS device:

-   Turning on the location service for **TestArchitect Agent** allows the agent to run uninterrupted in the background, which is necessary for automated testing.

    1.  Tap **Settings** \> **Privacy** \> **Location Services**,

    2.  Turn on the **TestArchitect Agent** location service.

-   Shut down all unnecessary running applications, except TestArchitect Agent. This ensures against the possibility of running applications consuming too much memory, which risks causing the agent to crash.

-   Disabling Assistive Touch de-activates the accessible gesture commands. \(Having the accessible gesture commands active can result in unstable behavior in the agent.\):

    1.  Tap **Settings** \> **General** \> **Accessibility**.

    2.  Set **AssistiveTouch** to Off.

-   accessibility label is a property of some controls in iOS. If your test needs to access this property, turn on **Speak Screen** in iOS 8 or, in iOS 7, set **Triple-Click Home** to control Toggle VoiceOver. This allows for the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_reading.md) to capture the accessibility label property:

    -   iOS 8:
        -   Tap **Settings** \> **General** \> **Accessibility** \> **Speech**.
        -   Enable **Speak Screen**.
    -   iOS 7:
        -   Tap **Settings** \> **General** \> **Accessibility**.
        -   Scroll down to the **Physical & Motor** section and then tap **Accessibility Shortcut**.
        -   Ensure that the **VoiceOver** option is selected.
-   Disabling **Auto-Lock** ensures that your device does not automatically lock its display while the automated test is running, which would cause the test to fail:

    1.  Tap **Settings** \> **General** \> **Auto-Lock**.

    2.  Select the **Never** option.


**Parent topic:**[Setting up the iOS test environment](../../iOS/Topics/iOS_setting_up_the_test_enviroment.md)

**Previous topic:**[Setting up iOS automation](../../iOS/Topics/iOS_setting_up_automation.md)

**Next topic:**[Connecting to iOS TestArchitect Agent over Wi-Fi](../../iOS/Topics/iOS_connecting_to_host_machine.md)

