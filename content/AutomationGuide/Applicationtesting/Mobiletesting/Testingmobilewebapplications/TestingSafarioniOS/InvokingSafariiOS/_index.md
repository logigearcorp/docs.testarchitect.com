--- 
title: "Invoking Safari on iOS during automation"
linktitle: "Invoking Safari iOS"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Safari.html
---
# Invoking Safari on iOS during automation {#concept_p4c_dzh_vp .concept}

There are two methods by which Safari may be invoked on iOS devices:

1.  One, the “real-world” method, is to simply manually tap the **Safari** icon. However, this method requires manual intervention during automated test.
2.  Use the [navigate](bia_navigate.html) built-in action.

**Remember:**

-   Method \#1 does not require you to install TestArchitect Browser Agent, whereas method \#2 does. Refer to [Re-signing and installing TestArchitect Browser Agent](aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html) for details.
-   For method \#2, it is essential that you include the protocol \(http:// or https://\) for the target URL in the location argument. \(For example, http://google.com\)
-   Regardless of the method chosen, ensure that the USB cable connection between your iOS device and the host machine is always maintained during automation.

1.  [Preparations to invoke automatically Safari iOS](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_preparation.html)  
This section describes the steps required to ensure that the navigate built-in action can successfully invoke Safari on iOS.

**Parent topic:**[Testing Safari on iOS](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html)

**Previous topic:**[Safari iOS testing prerequisites](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_prerequesites.html)

**Next topic:**[Handling JavaScript popups on Safari iOS](../../TA_Automation/Topics/aut_app_testing_safari_apps_popups.html)

