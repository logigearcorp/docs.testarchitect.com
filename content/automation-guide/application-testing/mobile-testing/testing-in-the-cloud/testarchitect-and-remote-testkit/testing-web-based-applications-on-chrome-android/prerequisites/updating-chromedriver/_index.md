--- 
title: "Updating ChromeDriver for Google Chrome on Android cloud devices"
linktitle: "Updating ChromeDriver"
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_ChromeDriver.html
---

Update ChromeDriver to make automated mobile web tests on Google Chrome version 53 or later work properly.

1.  From the [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) web site, download the latest version of ChromeDriver.

2.  Unzip the archive to a location of your choosing.

3.  Overwrite the original ChromeDriver, chromedriver.exe, which is installed automatically when you [install](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html) the Appium desktop application, in <APPIUM\_INSTALL\_DIR\>\\node\_modules\\appium\\node\_modules\\appium-chromedriver\\chromedriver\\win with the file you manually downloaded above.


**Parent topic:**[Prerequisites](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Android_Chrome_prerequisites.html)

**Previous topic:**[Configuring Appium server locally](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK.html)

