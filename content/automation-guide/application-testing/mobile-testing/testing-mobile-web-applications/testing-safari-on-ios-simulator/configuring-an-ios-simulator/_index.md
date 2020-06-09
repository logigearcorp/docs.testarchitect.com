--- 
title: "Configuring an iOS Simulator for testing Safari"
linktitle: "Configuring an iOS Simulator"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_simulator_config.html
---

This section describes essential configurations needed to ensure that automated tests on Safari on the iOS Simulator run successfully and stably.

Turning on **Web Inspector** on your iOS Simulator is the most crucial configuration for automating Safari.

1.  On your iOS Simulator, open the **Settings** application.

2.  Tap **Safari**.

3.  Scroll down, and then select **Advanced**.

4.  Switch **Web Inspector** to ON.


![](/images//Images/iOS_sim_on_web_inspector.png)

Additionally, on the macOS machine, turn off the Energy Saver sleep and idle modes. Specifically, set the **Computer sleep** slider to Never. \([Learn more](https://support.apple.com/en-gb/HT201714).\) This ensures that your macOS machine does not automatically slip into a sleep or idle state while the automated test is running, which would cause the test to fail.

**Parent topic:**[Testing Safari on iOS Simulator](/TA_Automation/Topics/aut_app_testing_mobile_web_iOS_simulator.html)

**Next topic:**[Invoking Safari on iOS Simulator during automation](/TA_Automation/Topics/aut_app_testing_mobile_web_simulator_invoking_browser.html)

