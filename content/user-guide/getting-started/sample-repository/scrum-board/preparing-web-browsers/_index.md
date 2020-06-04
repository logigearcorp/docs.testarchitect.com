--- 
title: "Preparing web browsers"
linktitle: "Preparing web browsers"
weight: 1
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Enabling_TA_automation_agent_def.html
---

TestArchitect supports automated testing of web applications on Internet Explorer, Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Before beginning testing, you must configure the target browser to ensure that TestArchitect Automation Agent \(a browser extension\), TAWebPlugin \(a plug-in\), remote debugging mode, WebDriver, and/or GeckoDriver are installed and enabled.

## Technical approach

-   **Internet Explorer**: TestArchitect Automation Agent is automatically installed as an extension in the existing Internet Explorer browser on your system when you install TestArchitect. This extension is essential. It allows the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and/or [Point-to-Identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool to scan and interact with web controls, and is also necessary for the successful execution of automated tests. Hence, it is recommended that you install Internet Explorer prior to installing TestArchitect, if you intend to test on that browser. However, it is also possible to manually [install](/TA_Help/Topics/Test_exec_automation_agent_manager.html) and enable the agent for the browser, if and when the browser is installed subsequent to TestArchitect.
-   **Google Chrome**: The Chrome browser takes a different technical approach than Internet Explorer and Mozilla Firefox. Chrome employs remote debugging mode, a remote web inspector for debugging web applications, to which TestArchitect can interface. The upshot is that no agent or plug-in is needed for successful test development or execution on Chrome; the only requirement is that remote debugging mode be enabled. To enable remote debugging mode, refer to [Setting command line switches](/TA_Help/Topics/../../TA_Automation/Topics/aut_setting_switches_GC.html) for details.
-   **Safari**:
    -   macOS:
        -   Safari employs the NPAPI plug-in, to which TestArchitect can interface. Consequently, TestArchitect Automation Agent is automatically installed as an extension in Safari when you install TestArchitect. This extension is essential. It allows the TestArchitect [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and/or [Point-to-Identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool to scan and interact with web controls, and is also necessary for the successful execution of automated tests.
        -   Event-fired action model: TestArchitect attempts to effectuate built-in actions in a manner that is as close as possible to real user actions. In most cases, for each given UI interactive action, TestArchitect calls a sequence of events. \(Refer to [List of supported Safari macOS built-in actions](/TA_Help/Topics/../../TA_Automation/Topics/aut_app_testing_web_Safari_actions.html).\) For example:
            -   For the [click](/TA_Help/Topics/../../TA_Automation/Topics/bia_click.html) built-in action, the following predefined events are triggered sequentially on a control: mousemove \> mouseover \> mousedown \> focus \> mouseup \> click.
            -   For the [click table cell](/TA_Help/Topics/../../TA_Automation/Topics/bia_click_table_cell.html) built-in action, the following predefined events are triggered sequentially on a control: mousemove \> mouseover \> mousedown \> focus \> mouseup \> click.
-   **Microsoft Edge**: Automated testing of Microsoft Edge is supported through the W3C [WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html) standard. To use [WebDriver](/TA_Help/Topics/../../TA_Automation/Topics/aut_app_testing_webdriver_ME.html) with Microsoft Edge, you must ensure that the [Microsoft WebDriver server](https://www.microsoft.com/en-us/download/details.aspx?id=48212) is properly configured on your test machines. \([Learn more](/TA_Help/Topics/ug_preparing_Edge.html).\)

    **Restriction:** Use of the TestArchitect [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool are not supported on Microsoft Edge.

-   **Mozilla Firefox**:
    -   Windows: Similar to Microsoft Edge, automation testing of Mozilla Firefox on Windows is supported through GeckoDriver, which is a proxy for using W3C WebDriver-compatible clients to interact Mozilla Firefox. To use GeckoDriver with Mozilla Firefox, you must ensure that the [GeckoDriver](/TA_Help/Topics/../../TA_Automation/Topics/aut_app_testing_geckodriver_FF.html) is properly configured on your test machines. \([Learn more](/TA_Help/Topics/ug_preparing_Firefox.html).\)

        **Restriction:** Use of the TestArchitect [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool are not supported on Mozilla Firefox running on Windows.

    -   Linux: Automation testing of Mozilla Firefox on Linux is supported through the NPAPI plug-in technique. Specifically, both TestArchitect Automation Agent and TAWebPlugin are automatically installed as an extension and a plug-in, respectively, in the existing Firefox browser on your system when you install TestArchitect. This extension and plug-in are essential to both the proper functioning of the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and [Point-to-Identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool, as well as the successful execution of automated tests. Hence, it is recommended that you install Firefox prior to installing TestArchitect, if you intend to test on that browser. However, it is also possible to manually [install](/TA_Help/Topics/Test_exec_automation_agent_manager.html) and enable the agent and plug-in for the browser, if and when the browser is installed subsequent to TestArchitect. \([Learn more](/TA_Help/Topics/ug_preparing_Firefox.html).\)

        **Important:** Note that, you are required to install Firefox from the [package manager](https://support.mozilla.org/en-US/kb/install-firefox-linux). For details, please refer to the documentation of the Red Hat Enterprise Linux version you are using.


-   **[Preparing Internet Explorer for web testing](/TA_Tutorials_Sample_App/Topics/SR_Preparing_ie.html)**  
How to properly configureInternet Explorerfor automated web testing with TestArchitect.
-   **[Preparing Mozilla Firefox for web testing](/TA_Tutorials_Sample_App/Topics/SR_Enabling_TA_agent_firefox.html)**  
 How to properly configure Mozilla Firefox for automated web testing with TestArchitect.
-   **[Preparing Google Chrome for web testing](/TA_Tutorials_Sample_App/Topics/SR_Enabling_TA_agent_chrome.html)**  
 How to properly configure Google Chrome for automated web testing with TestArchitect.

**Parent topic:**[Scrum Board](/TA_Tutorials_Sample_App/Topics/SR_Scrum_Board_def.html)

**Next topic:**[Testing Scrum Board](/TA_Tutorials_Sample_App/Topics/SR_Scrum_Board_testing.html)

