--- 
title: "WebKit vs WebDriver"
linktitle: "WebKit vs WebDriver"
description: "Differences between WebKit and WebDriver"
weight: 4
aliases: 
    - /TA_Automation/Topics/WebKit_vs_WebDriver.html
keywords: "vs, WebKit, WebDriver, compare"
---

Differences between WebKit and WebDriver

| |WebKit|WebDriver|
|--|------|---------|
|Mechanism|WebKit is TestArchitect's extension. Its engine updates are dependent on TestArchitect.|WebDriver utilizes the third parties' webdriver and client files. Its engine updates are dependent on the third parties.|
|Handling keyboard and mouse events|Handling keyboard and mouse events are based on physical interaction. The test gains control of the mouse and keyboard respectively while simulating keyboard and mouse actions.|Handling keyboard and mouse events are based on fire event interaction. The test does not gain control of the mouse and keyboard mouse while simulating keyboard and mouse actions.<br><br>|<br>
|Browser instances|WebKit can work with only one instance at once.|WebDriver can work on multiple instances at once. So it provides capability to test more than one web page simultaneously.|
|Identifying interface elements|WebKit locates web elements with unique properties and combination of properties. It noted that WebKit supports more properties than WebDriver. You can use the Interface Viewer in TestArchitect for capturing interface elements.|Building on of Selenium, WebDriver finds web elements using Selenium locators like id, name, tagname, classname, xpath and css selector. The Interface Viewer is not ideal for capturing web elements using Selenium locators. Instead POM builder or the browser’s inspect feature is advisable.<br><br>|<br>



