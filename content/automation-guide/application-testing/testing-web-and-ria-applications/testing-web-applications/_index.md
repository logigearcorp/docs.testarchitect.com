--- 
title: "Testing web applications"
linktitle: "Testing web applications"
description: "TestArchitect lets you create, manage and run web-based automated tests on different types of browsers."
weight: 1
aliases: 
    - /TA_Automation/Topics/Web_automation.html
keywords: "web testing, application testing"
---

TestArchitect lets you create, manage and run web-based automated tests on different types of browsers.

## Supported web browsers

TestArchitect allows you to test web applications in the following browsers and operating systems:

-   **Windows**:
    -   Microsoft Edge, version 42.17134.1.0, 38.14393.0.0
        -   Windows 10 Anniversary version 1607 \(build number 14393\), Pro edition.
        -   Microsoft WebDriver Release [14393](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)
    -   Internet Explorer: 11, 10, 9 \(both 32-bit and 64-bits\).

        {{<restriction>}} The Modern UI \(Metro\) version of Internet Explorer 10 and 11 is not supported.

    -   Google Chrome, up to version 80, 81.
        -   ChromeDriver version: 81
    -   Mozilla Firefox, up to version 74, 75
        -   GeckoDriver version [0.26.0](https://github.com/mozilla/geckodriver/releases)
-   **Linux**:
    -   Red Hat 7.2, 6.6, 6.3: Mozilla Firefox, up to version 52.3.0 Extended Support Release ESR.

        {{<important>}} Note that, you are required to install Firefox from the [package manager](https://support.mozilla.org/en-US/kb/install-firefox-linux). For details, please refer to the documentation of the Red Hat Enterprise Linux version you are using.

-   **macOS**:

    -   MAC OS \(10.13, 10.14\): Safari version 12.0.2.
    {{<restriction>}}

    -   Multiple Safari windows that are open concurrently are not supported.
    -   Viewing Safari in full screen mode precludes web automation testing.
    -   Testing of local HTML files in Safari is not supported.

## Client and server-side technologies

TestArchitect interacts with web applications through UI controls displayed in browsers; that is, the client side of web applications. Testing does not depend on the application’s server-side implementation. Consequently, TestArchitect allows you to test web applications developed with any client- or server-side technology, including \(but not limited to\):

-   HTML
-   HTML 5
-   ASP.NET
-   PHP
-   JavaServer Pages \(JSP\)
-   Java Servlet

## Supported controls

TestArchitect recognizes and provides support for various web controls including:

-   [Standard HTML controls](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/supported-web-controls)
-   [HTML 5 controls](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/supported-html5-controls)
-   All third-party ASP.NET controls

## Test machine and web browser configuration

-   By default, TestArchitect Register Server, which is installed with TestArchitect, automatically starts up as a service \(daemon\) each time you boot your computer. This service is often essential for automated testing, and should generally be available. [Ensure the availability of the TestArchitect Register Server service](/administration-guide/testarchitect-register-server) before running your automated tests.
-   Before testing web applications on a supported browser, ensure that necessary settings or reconfigurations required by TestArchitect are fully met. For detailed instructions, see [Preparing web browsers](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/).


{{<caution>}}

For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)

1.  [Automated web testing with non-WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/)  

2.  [Automated web testing with WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/)  
WebDriver is a tool for automating web application testing executing tests across a wide range of browsers like Chrome, Firefox and Microsoft Edge. As a member of the Selenium family, it is designed to provide better support for dynamic web pages.
3.  [Troubleshooting web automation](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/troubleshooting-web-automation/)  
A discussion of issues you may encounter when automating tests on web browsers, and possible solutions to these problems. FAQs are also mentioned.
4.  [WebKit vs WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/webkit-vs-webdriver)  
Differences between WebKit and WebDriver



