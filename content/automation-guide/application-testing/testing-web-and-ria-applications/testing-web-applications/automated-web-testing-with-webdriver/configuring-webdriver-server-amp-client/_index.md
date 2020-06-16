--- 
title: "Configuring WebDriver server & client"
linktitle: "Configuring WebDriver server & client"
description: "The topic guides you how to configure WebDriver server/client."
weight: 3
aliases: 
    - /TA_Automation/Topics/WebDriver_server_client.html
keywords: "WebDriver, server, client"
---

The topic guides you how to configure WebDriver server/client.

Each browser has its own WebDriver server:

-   Chrome: [Chrome](http://chromedriver.chromium.org/)
-   DriverFirefox: [geckodriver](https://github.com/mozilla/geckodriver/releases)
-   Microsoft Edge: [Microsoft WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
-   Microsoft Internet Explorer: [Internet Explorer Driver Server](https://www.seleniumhq.org/download/)
-   Safari: [Testing with WebDriver in Safari](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)

However, browsers use the same WebDriver client’s file - [Selenium Server Standalone](https://www.seleniumhq.org/download/).

The files of WebDriver server & client are packaged inside the TestArchitect installer. Unless you would like to use a different version of WebDriver server/client, it is unnecessary to change the WebDriver server/client files, since by default TestArchitect automatically applies the files of the pre-packaged WebDriver server & client.

There are two methods to change the files of the WebDriver server/client:

## Method \#1: Via the **Automation Agent Manager** dialog box.

1.  Download the preferred WebDriver server/client file into the test machine.
2.  If the browser for which you want to change WebDriver server/client is running, close all its opened browser instances and terminate all its running background processes.
3.  In TestArchitect, select menu: **Tools** \> **Automation Agent Manager**.
4.  In the TestArchitect Automation Agent dialog box, click the **Configure** button corresponding to the browser.

    ![](/images/TA_Automation/Images/WebDriver_Automation_Agent_Manager_dlg.png)

5.  In the WebDriver Configuration dialog box,

    ![](/images/TA_Automation/Images/WebDriver_Configuration_dlg.png)

    1.  Specify the path to the executable file in the **WebDriver server** box.
    2.  Specify the path to the executable file in the **WebDriver client** box.
    3.  Click the **Save** button.

## Method \#2: Via the server/client key defined in the configure webdriver built-in action

Only when you need an advanced test environment, should you adopt this method.

![](/images/TA_Automation/Images/WebDriver_configure_server.png)

![](/images/TA_Automation/Images/WebDriver_configure_client.png)

**Attention:** a backlash \(\\\) is treated as an escape sequence in the JSON format. You must replace one backlash with two backslashes, and double backlashes with four backslashes. For example,

If the network path of the WebDriver client is: \\\\LGVN17978\\chromedriver\\selenium-server-standalone-3.14.0.jar

In the JSON format, it will be: \\\\\\\\LGVN17978\\\\chromedriver\\\\selenium-server-standalone-3.14.0.jar




