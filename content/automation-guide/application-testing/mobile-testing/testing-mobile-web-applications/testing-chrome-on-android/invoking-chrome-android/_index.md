--- 
title: "Invoking Google Chrome on Android during automation"
linktitle: "Invoking Chrome Android"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Chrome.html
---

There are two methods by which Chrome may be invoked on Android devices.

1.  The “real-world” method: that is, simulate a manual tap on the Chrome icon on the device.
2.  Use the [navigate](bia_navigate.html) built-in action.

**Remember:**

-   For method \#2, it is essential that you include the protocol \(http:// or https://\) for the target URL in the location argument. \(For example, http://google.com\)
-   Regardless of the method chosen, ensure that the USB cable connection between your Android device and the host controller is always maintained during automation.

**Note:** When Chrome on Android has multiple tabs open, navigate needs to traverse through those tabs to check for the already-navigated site. Activating each tab can typically take around two seconds. Consequently, the time consumed by navigate when many tabs are open can be significant.

**Parent topic:**[Testing Google Chrome on Android](/TA_Automation/Topics/aut_app_testing_mobile_web_Android.html)

**Previous topic:**[Google Chrome Android testing prerequisites](/TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_prerequesites.html)

**Next topic:**[Identifying mobile UI controls](/TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html)

