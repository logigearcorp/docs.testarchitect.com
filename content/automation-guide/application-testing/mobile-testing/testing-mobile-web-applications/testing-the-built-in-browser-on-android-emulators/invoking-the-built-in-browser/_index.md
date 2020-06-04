--- 
title: "Invoking the built-in browser in Android emulator during automation"
linktitle: "Invoking the built-in browser"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_emulator_invoking_browser.html
---

There are two methods by which the built-in browser may be invoked in Android emulators.

1.  One, the “real-world” method, is to simply manually tap the built-in browser's icon on your Android emulator. However, this method requires manual intervention during the automated test.

    ![](/images//Images/default_browser_emulator.png)

2.  Alternatively, use the [navigate](bia_navigate.html) built-in action.

**Remember:**

-   For method \#2, it is essential that you include the protocol \(http:// or https://\) for the target URL in the location argument. \(For example, http://google.com\)

**Parent topic:**[Testing the built-in browser on Android emulators](/TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html)

**Previous topic:**[Installing TestArchitect Agent onto Android emulators](/TA_Automation/Topics/aut_app_testing_mobile_web_emulator_installing_TA_Agent.html)

**Next topic:**[Automation testing on the built-in browser in Android emulators](/TA_Automation/Topics/aut_app_testing_mobile_web_emulator_automation.html)

