--- 
title: "Invoking Safari on iOS during automation"
linktitle: "Invoking Safari on iOS during automation"
description: "There are two methods by which Safari may be invoked on iOS devices:"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Safari.html
keywords: "mobile web testing, Safari, invoking web browser, Safari testing, iOS"
---

There are two methods by which Safari may be invoked on iOS devices:

1.  One, the “real-world” method, is to simply manually tap the **Safari** icon. However, this method requires manual intervention during automated test.
2.  Use the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action.

{{<remember>}}

-   Method \#1 does not require you to install TestArchitect Browser Agent, whereas method \#2 does. Refer to [Re-signing and installing TestArchitect Browser Agent](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/prerequisites/installing-testarchitect-browser-agent) for details.
-   For method \#2, it is essential that you include the protocol \(http:// or https://\) for the target URL in the location argument. \(For example, http://google.com\)
-   Regardless of the method chosen, ensure that the USB cable connection between your iOS device and the host machine is always maintained during automation.

1.  [Preparations to invoke automatically Safari iOS](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/invoking-safari-ios/preparations-to-invoke-automatically-safari-ios)  
This section describes the steps required to ensure that the navigate built-in action can successfully invoke Safari on iOS.




