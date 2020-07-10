--- 
title: "Microsoft UI Automation"
linktitle: "Microsoft UI Automation"
description: "Microsoft UI Automation (UIA) is an accessibility framework for Microsoft Windows, and is the successor to Microsoft Active Accessibility (MSAA). One of its purposes is to assist in automated testing by providing programmatic access to UI controls."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_Using_UIA.html
keywords: "UIA, Microsoft UI Automation"
---

Microsoft UI Automation \(UIA\) is an accessibility framework for Microsoft Windows, and is the successor to Microsoft Active Accessibility \(MSAA\). One of its purposes is to assist in automated testing by providing programmatic access to UI controls.

{{<note>}}

-   Using Microsoft UI Automation technology on Windows XP, Windows Vista, Windows Server 2003 or Windows Server 2008 requires that Windows Automation API 3.0 be installed. It can be installed from Windows Update or downloaded from Microsoft’s web site: [http://support.microsoft.com/kb/971513](http://support.microsoft.com/kb/971513).
-   Using TestArchitect to work with Microsoft UI Automation technology requires .NET Framework 4.0 or higher installed on your test machine.

TestArchitect can work with UI controls that are exposed by the Microsoft UI Automation technology. TestArchitect includes a special tool, UIA Support, that provides support for Microsoft UI Automation technology.

{{<restriction>}} The UIA Support tool is not available in the TestArchitect package for Linux and macOS operating systems.

If the UIA Support tool is activated, TestArchitect is able to obtain information on UI controls of the AUT. UI Automation Framework includes special providers that expose rich information regarding properties of buttons, check boxes, list boxes, and other supported controls. For more information, please see [List of UIA controls](/automation-guide/microsoft-ui-automation/uia-controls/).



1.  [Enabling UIA Support tool](/automation-guide/microsoft-ui-automation/enabling-uia-support-tool)  
To support Microsoft UI Automation technology in TestArchitect, enable the UIA Support tool.
2.  [UIA controls](/automation-guide/microsoft-ui-automation/uia-controls/)  
Information on various supported UIA controls.




