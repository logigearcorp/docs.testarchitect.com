--- 
title: "Automated web testing with WebDriver"
linktitle: "Automated web testing with WebDriver"
weight: 2
aliases: 
    - /TA_Automation/Topics/Generic_WebDriver.html
---

WebDriver is a tool for automating web application testing executing tests across a wide range of browsers like Chrome, Firefox and Microsoft Edge. As a member of the Selenium family, it is designed to provide better support for dynamic web pages.

**Restriction:** TestArchitect currently provides partial support for Generic WebDriver. Built-in actions and settings can only work on the platforms and browsers listed in [this topic](WebDriver_supported_platforms.html).

-   WebDriver makes direct calls to a browser using the browser's native support for automation.
-   It provides separated language-binding for each supported language such as C\#, Java, Perl, PHP or Ruby. You use it to implement test script.
-   Each supported browser has separated Executable Browser Driver which is used along with language-binding to run the test.
-   WebDriver interacts with applications under test in a more realistic way. For instance, if there exists a disabled checkbox on a testing page, WebDriver has no capability to select the checkbox as just as how a real person cannot.

## Advantages

By using WebDriver, you are able to run tests across browsers with minor changes. It saves your time in implementing as well as maintaining test scripts. Besides that, WebDriver is a stand-alone component which is released frequently to support new versions and features of browsers.

## Locating interface elements

-   WebDriver only supports locating interface elements by Selenium-supported properties such as id, name, tagname and xpath. You had better use [POM Builder](https://chrome.google.com/webstore/detail/pombuilder-–-auto-generat/akcejfbfkkjnghlfngighgncolfaghco) or the browser's **inspect** feature to identify web elements instead of the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html).
-   For legacy interface elements that were captured with different from Selenium-supported properties, replace these properties with. It means that you ought to re-capture the interface elements using the Selenium-supported property.

1.  [Getting Started](/TA_Automation/Topics/WebDriver_basic_structure.html)  

2.  [Platform support](/TA_Automation/Topics/WebDriver_supported_platforms.html)  

3.  [Configuring WebDriver server & client](/TA_Automation/Topics/WebDriver_server_client.html)  
The topic guides you how to configure WebDriver server/client.
4.  [Best practices for WebDriver](/TA_Automation/Topics/WebDriver_best_practices.html)  


**Parent topic:**[Testing web applications](/TA_Automation/Topics/Web_automation.html)

**Previous topic:**[Automated web testing with non-WebDriver](/TA_Automation/Topics/WebKit.html)

**Next topic:**[Troubleshooting web automation](/TA_Automation/Topics/web_troubleshooting.html)

