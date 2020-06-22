--- 
title: "Invoking Safari on iOS Simulator during automation"
linktitle: "Invoking Safari on iOS Simulator during automation"
description: "There are two methods by which Safari may be invoked in the iOS Simulator:"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_simulator_invoking_browser.html
keywords: "mobile web testing, Safari, iOS Simulator, invoking web browser, Safari testing, iOS Simulator, invoking web browser"
---

There are two methods by which Safari may be invoked in the iOS Simulator:

1.  One, the “real-world” method, is to simply manually tap the **Safari** icon. However, this method requires manual intervention during automated test.
2.  Use the [navigate](/TA_Automation/Topics/bia_navigate.html) built-in action.

**Remember:**

-   For method \#2, it is essential that you include the protocol \(http:// or https://\) for the target URL in the location argument. \(For example, http://google.com\)




