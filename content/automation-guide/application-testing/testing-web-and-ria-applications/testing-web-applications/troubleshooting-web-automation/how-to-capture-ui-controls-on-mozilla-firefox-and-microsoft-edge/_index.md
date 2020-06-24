--- 
title: "How to capture UI controls on Mozilla Firefox and Microsoft Edge?"
linktitle: "How to capture UI controls on Mozilla Firefox and Microsoft Edge?"
description: "Due to the fact that automated testing of Microsoft Edge and Mozilla Firefox on Windows is now supported through WebDriver and GeckoDriver, respectively ( learn more ), use of the Interface Viewer and ..."
weight: 17
aliases: 
    - /TA_FAQ/Topics/faq.howto.capture_controls_Firefox_Edge.html
keywords: "FAQ, capture UI controls, Firefox, Microsoft Edge, capture UI controls, Firefox, Microsoft Edge"
---

Due to the fact that automated testing of Microsoft Edge and Mozilla Firefox on Windows is now supported through WebDriver and GeckoDriver, respectively \([learn more](/TA_Help/Topics/Test_exec_extension.html)\), use of the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify tool](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) are also no longer supported in TestArchitect.

In order to capture UI controls on Microsoft Edge and Mozilla Firefox, there are two ways:

-   Option \#1: Capture UI controls on Google Chrome in a convention manner via the Interface Viewer and point-to-identify tool, and then run the automated tests on Microsoft Edge or Mozilla Firefox via the setting [use browser](/TA_Automation/Topics/bis_use_browser.html).

    {{<{{<caution>}}>}}

    However, note that, web controls' native properties might sometimes vary across various web browsers and employed technologies.

-   Option \#2: Use the Developer Tools which are available on both [Microsoft Edge](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide) and [Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox) to identify the UI controls' property value. \(See below.\)

## Use of the Developer Tools

1.  Invoke the Developer Tools.
    -   Microsoft Edge: Press F12
    -   Mozilla Firefox: Press Ctrl + Shift + I
2.  Identify the property value of desired UI controls.
    -   Microsoft Edge and Mozilla Firefox: Activate the **node picker** by clicking its icon ![](/images/TA_FAQ/Images/select_element_icon_FF.png). After that, as you move the mouse around the HTML page, the UI control under the mouse is highlighted. Click the UI control to select it.

        ![](/images/TA_FAQ/Images/developer_tools_ME.png)

        ![](/images/TA_FAQ/Images/developer_tools_FF.png)

3.  Select a property value.

    {{<remember>}} It is highly recommended that you choose the following properties to capture UI controls on web browsers.

    1.  id
    2.  name
    3.  xpath
    For example, we select `id ="lst-ib"` to identify the desired UI control. And then manually input the selected property into the interface entity's editor.

    ```
                           ta name            ta class          id
    interface element      google search      input-text        lst-ib
    ```

    ta name ta class id interface element google search input-text lst-ib And now, you can use this element for your test script.



