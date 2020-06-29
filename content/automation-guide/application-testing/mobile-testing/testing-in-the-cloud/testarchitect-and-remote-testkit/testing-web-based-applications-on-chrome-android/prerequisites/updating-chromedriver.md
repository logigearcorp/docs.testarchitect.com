--- 
title: "Updating ChromeDriver for Google Chrome on Android cloud devices"
linktitle: "Updating ChromeDriver for Google Chrome on Android cloud devices"
description: "Update ChromeDriver to make automated mobile web tests on Google Chrome version 53 or later work properly."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_ChromeDriver.html
keywords: "cloud testing, Remote TestKit, ChromeDriver update, Chrome Android, Remote TestKit, ChromeDriver update, Chrome Android"
---

Update ChromeDriver to make automated mobile web tests on Google Chrome version 53 or later work properly.

1.  From the [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) web site, download the latest version of ChromeDriver.

2.  Unzip the archive to a location of your choosing.

3.  Overwrite the original ChromeDriver, chromedriver.exe, which is installed automatically when you [install](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-chrome-android/prerequisites/configuring-appium-server-locally) the Appium desktop application, in <APPIUM\_INSTALL\_DIR\>\\node\_modules\\appium\\node\_modules\\appium-chromedriver\\chromedriver\\win with the file you manually downloaded above.




