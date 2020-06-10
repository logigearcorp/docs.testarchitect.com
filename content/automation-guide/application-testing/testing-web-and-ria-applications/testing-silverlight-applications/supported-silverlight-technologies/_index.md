--- 
title: "Supported Silverlight technologies"
linktitle: "Supported Silverlight technologies"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_apps_supported_technology.html
---

Silverlight applications are rich internet applications \(RIAs\) which are executed in web browsers. In-browser mode is the most common way to use them.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

## Supported Silverlight runtime versions

You must have Silverlight version 5 installed on the TestArchitect test machine. You can download it from [http://www.microsoft.com/silverlight/](http://www.microsoft.com/silverlight/).

## Supported Silverlight application types and modes

-   In-browser applications
-   Out-of-browser applications, that is, Silverlight applications deployed on a local computer. \(Refer to [Testing out-of-browser applications](/TA_Automation/Topics/aut_app_testing_Silverlight_out_of_browser_apps.html) for details.\)
-   HTTPS protocol communication
-   Windowless mode \(in which a Silverlight plug-in's content is displayed directly by the browser window, rather than in a separate rendering window\).

**Important:**

-   TestArchitect can test only Silverlight applications that are compiled and packed into an application package \(.xap file\) from which a wrapper web page can load the applications. Note that TestArchitect does not currently support Silverlight applications that are loaded by wrapper web pages directly from \*.xaml files containing the applications’ source code.
-   If HTTPS protocol communication is employed, you must first [install a TestArchitect Certificate Authority](/TA_Automation/Topics/aut_app_testing_Silverlight_apps_installing_CA.html).

## Supported web browsers

The tested Silverlight applications must run in the following browsers:

-   Internet Explorer version 10 or 11, including Silverlight 5 applications running in both 32 and 64-bit versions of Internet Explorer.

    **Remember:** It is highly recommend that you clear the browser cache and set the page's zoom ratio to 100% before testing. Refer to [Preparing a web browser](/TA_Automation/Topics/aut_app_testing_Silverlight_apps_prepraring_browser.html) for more information.


## Supported desktop operating systems

-   Windows 7, 32 and 64-bit versions.

**Parent topic:**[Testing Silverlight applications](/TA_Automation/Topics/aut_app_testing_Silverlight_apps.html)

**Previous topic:**[Testing Silverlight applications - Overview](/TA_Automation/Topics/aut_app_testing_Silverlight_apps_overview.html)

**Next topic:**[Preparing the test environment](/TA_Automation/Topics/aut_app_testing_Silverlight_preparing_environment.html)

