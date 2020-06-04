--- 
title: "Supported platforms"
linktitle: "Supported platforms"
weight: 4
aliases: 
    - /TA_ReleaseNotes/DITA_source/Supported_platforms.html
---

TestArchitect provides support for testing a variety of applications created using various languages.

Below is a list of major software platforms and application types supported by TestArchitect:

|Group|Support|
|-----|-------|
|Windows|Windows Server 2016, Windows 10, Windows 8.1, Windows 8.0, Windows 7, Windows Server 2008 R2, Windows Server 2012 R2 \(both 32-bit and 64-bit versions\), Windows Server 2019 \(WPF, MFC\).|
|Linux|Red Hat 7.2, 6.6, 6.3|
|macOS|Mojave \(10.14\), High Sierra \(10.13\), Sierra \(10.12\), El Capitan \(10.11\), Yosemite \(10.10\)|
|[Team Foundation Sever-Microsoft Test Manager integration](/TA_Help/Topics/ug_MTM_supported_platforms.html)|-   Visual Studio Team Services: Support for test execution using MTM 2015, Test Agent and Test Controller 2013 Update 5 \(similar to on-premise VS 2015\)
-   Support for both [XAML](/TA_Help/Topics/MTM_create_build_definition.html) and [TFBuild](/TA_Help/Topics/ug_MTM_specify_build_steps.html) build definitions.
-   Microsoft Visual Studio 2017 Update 2, 2017 Update 1
    -   Enterprise and Professional editions
    -   TFS 2017 Update 2/Update 1, MTM 2015, Test Agent and Test Controller 2013 Update 5/2017
    -   TFS 2018
-   Microsoft Visual Studio 2015, 2015 Update 1:
    -   Enterprise, Professional and Test Professional editions
    -   TFS 2015 \(on-premises\), MTM 2015, Test Agent and Test Controller 2013 Update 5
-   Microsoft Visual Studio 2013:
    -   Ultimate, Premium, Professional and Test Professional editions
    -   TFS 2013 \(on-premises\), MTM 2013, Test Agent and Test Controller 2013

|
|[Web browsers](/TA_Automation/Topics/Web_automation.html)|-   Windows:
    -   Microsoft Edge 42.17134.1.0, 38.14393.0.0
    -   Internet Explorer 11, 10, 9
    -   Chrome 80, 81
        -   ChromeDriver version: 81

**Note:** The Chrome version should be corresponding with the ChromeDriver version. Check the version [here](https://chromedriver.chromium.org/downloads).

    -   Firefox 74, 75
        -   GeckoDriver version [0.26.0](https://github.com/mozilla/geckodriver/releases)

 -   Linux:
    -   Red Hat 7.2, 6.6: Firefox 52.3.0 Extended Support Release ESR

**Important:** Note that, you are required to install Firefox from the [package manager](https://support.mozilla.org/en-US/kb/install-firefox-linux). For details, please refer to the documentation of the Red Hat Enterprise Linux version you are using.

-   macOS:
    -   MAC OS \(10.13, 10.14\): Safari version 12.0.2.

|
|Android|-   [Application](/Android/Topics/Android_Automation_begin.html) \(native\) running on Android versions from 4.x to 7.0
-   [Chrome](/TA_Automation/Topics/aut_app_testing_mobile_web_Android.html) 69 running on Android versions from 4.x to 8.0

|
|iOS|-   [Applications](/iOS/Topics/iOS_automation_def.html) \(native\) running on the following iOS versions:
    -   iOS 7.x.
    -   iOS 8.4, iOS 8.1.x, iOS 8.0.x,
    -   iOS 9.3.x, iOS 9.2.x, iOS 9.1, iOS 9.0
    -   iOS 10.3.x
-   [Safari](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html) running on the following iOS versions:
    -   iOS 8.4
    -   iOS 9.3.x, iOS 9.2.x, iOS 9.1, iOS 9.0
    -   iOS 10.3.x
    -   iOS 11.4
-   Xcode 9.4, 8.3, 7.x

|
|Mobile emulators|-   Android emulators: Android Virtual Device \(AVD\), Genymotion Desktop
    -   [Built-in browser](/TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html) running on Android 6.0, 5.1, 5.0.x, 4.4.x
-   iOS Simulator:
    -   [Safari](/TA_Automation/Topics/aut_app_testing_mobile_web_iOS_simulator.html) running on iOS 8.4, iOS 8.3

|
|Cloud testing|-   [Remote TestKit](/TA_Automation/Topics/aut_app_cloud_testing_RTK.html)
    -   Android cloud devices:
        -   [Testing native applications](/TA_Automation/Topics/aut_app_cloud_testing_RTK_native_apps.html)
        -   [Testing web based-applications on Google Chrome](/TA_Automation/Topics/aut_app_cloud_testing_RTK_Chrome.html)
    -   iOS cloud devices:
        -   [Testing web based-applications on Safari](/TA_Automation/Topics/aut_app_testing_RTK_Safari.html)
-   [WebDriver based cloud services](/TA_Automation/Topics/aut_appium.html)

|
|[Appium](/TA_Automation/Topics/aut_appium.html)|-   Windows: Appium version [1.7.2](https://github.com/appium/appium/releases/)
-   macOS: Appium version [1.7.2](https://github.com/appium/appium/releases/)

|
|[.NET](/TA_Automation/Topics/aut_app_testing_NET_apps.html)|4.5.1, 4.5, 4.0, 3.5|
|[Java](/TA_Automation/Topics/aut_app_testing_Java_apps.html)|8, 7, 6|
|[Web service testing](/TA_Automation/Topics/aut_testing_web_service.html)|-   [RESTful](http://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html) \(Representational State Transfer architecture\)
-   [SOAP](https://www.w3schools.com/xml/xml_soap.asp) \(Simple Object Access Protocol\) over HTTP-based web services

|
|[Oracle Forms](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_overview.html)|-   Oracle Forms 11gR2
-   Oracle Forms 10gR2

|
|[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)|-   Microsoft SQL Server 2008 R2
-   Microsoft SQL Server 2012
-   MySQL 5.6.20
-   Microsoft Excel 2007, 2010, and 2013
-   Oracle Database:
    -   Oracle Database Enterprise Edition
        -   12c Release 2
        -   11g Release 2
    -   Oracle Database Express Edition
        -   11g Release 2

|
|SAP|-   SAP Client: 7.5
-   SAP Server: 7.52

|

**Parent topic:**[Getting started](/TA_Help/Topics/Getting_started.html)

**Previous topic:**[TestArchitect editions](/TA_ReleaseNotes/DITA_source/TA_Editions_features.html)

**Next topic:**[Overview of TestArchitect components](/TA_InstallationGuide/DITA_source/Topics/inst_TA_components.html)

