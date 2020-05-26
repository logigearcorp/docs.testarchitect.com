--- 
title: "**Capturing screenshots in Web Testing**"
linktitle: "Capturing screenshots in Web Testing"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Screenshot_recording_GWD.html
---
# **Capturing screenshots in Web Testing** {#ug_Screenshot_recording_GWD .concept}

TestArchitect currently provides two ways of capturing screenshots:

-   Generic WebDriver \(GWD\) capturing \(webdriver mode = on\): capture the screenshot using webdriver method.
-   Physical capturing \(webdriver mode = off\): capture the screenshot using physical method.

Generally, both ways support your screen capturing but the processing method and output result\(s\) are different. You can see the comparison below:

|Cases|GWD|Physical|
|-----|---|--------|
|Headless mode|Yes|No|
|Multiple executions|Yes|No|
|Minimize window|Yes|No|
|Capture full screen|No. Users have to specify the window argument in order to capture the screen|Yes. Just leave the windowargument empty to capture full screen.|
|Pop-up dialogs|No|Yes|
|HTML document|Capture the viewport only|Capture the title bar, the task bar, and the view port|
|Extend monitor|Support|No|

**Parent topic:**[Screenshot recording](../../TA_Help/Topics/ug_Screenshot_recording.html)

