--- 
title: "Configuring an iOS device"
linktitle: "Configuring an iOS device"
description: "Configuring an iOS device for test automation."
weight: 5
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_iOS_configuring_device.html
keywords: 
---

Configuring an iOS device for test automation.

-   Turning on the location service for **TestArchitect Agent** allows the agent to run uninterrupted in the background, which is necessary for automated testing.

    1.  Tap **Settings** \> **Privacy** \> **Location Services**,

    2.  Turn on the **TestArchitect Agent** location service.

-   Shut down all unnecessary running applications, except TestArchitect Agent. This ensures against the possibility of running applications consuming too much memory, which risks causing the agent to crash.

-   Disabling Assistive Touch de-activates the accessible gesture commands. \(Having the accessible gesture commands active can result in unstable behavior in the agent.\):

    1.  Tap **Settings** \> **General** \> **Accessibility**.

    2.  Set **AssistiveTouch** to Off.

-   **Optional:** accessibility label is a property of some controls in iOS. If your test needs to access this property, turn on **Speak Screen** in iOS 8 or, in iOS 7, set **Triple-Click Home** to control Toggle VoiceOver. This allows for the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/) to capture the accessibility label property:

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



