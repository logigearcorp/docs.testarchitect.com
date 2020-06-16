--- 
title: "Testing out-of-browser Silverlight applications"
linktitle: "Testing out-of-browser applications"
description: "Silverlight-based applications, as well as your test machine, must be configured properly to allow the applications to be installed from their host web pages, run outside of the browser, and tested."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Silverlight_out_of_browser_apps.html
keywords: "Silverlight testing, out-of-browser applications"
---

Silverlight-based applications, as well as your test machine, must be configured properly to allow the applications to be installed from their host web pages, run outside of the browser, and tested.

**Warning:** Microsoft ceased development of Silverlight. However, Silverlight continues working in TestArchitect.

To test out-of-browser Silverlight applications, carry out the following procedure:

1.  [Configure your test machine](/TA_Automation/Topics/aut_app_testing_Silverlight_apps_preparation.html) for Silverlight testing.

2.  Open a Silverlight application within its host web page in an Internet Explorer browser window.

    **Remember:** TestArchitect currently supports Silverlight only in Internet Explorer versions 10 and 11.

3.  Install the Silverlight application to your test machine:

    1.  Right-click the application within the web page and then select **Install <application name\> onto this computer** .

    2.  In the Install application dialog box, specify the location\(s\) into which you would like to install shortcuts for the application.

        ![](/images/TA_Automation/Images/install_out_of_browser_Silverlight.png)

4.  Launch the application through one of the shortcuts specified in the Install application dialog box.


Now you can use TestArchitect to create and run automated tests for the Silverlight out-of-browser application.




