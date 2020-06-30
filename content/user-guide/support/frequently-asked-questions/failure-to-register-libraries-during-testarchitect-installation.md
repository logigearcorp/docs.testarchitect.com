--- 
title: "Failure to register libraries during TestArchitect installation"
linktitle: "Failure to register libraries during TestArchitect installation"
description: "Problem On a Windows machine during TestArchitect installation, you may encounter an error message notifying you that a DLL library has &#34;failed to register&#34;. Example: Solution This issue occurs when ..."
weight: 28
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.installing_TA_issue.html
keywords: "Troubleshooting, fail to register libraries, troubleshooting"
---

## Problem

On a Windows machine during TestArchitect installation, you may encounter an error message notifying you that a DLL library has "failed to register". Example:

![](/images/TA_FAQ/Images/installing_TA_fail_to_register.png)

## Solution

This issue occurs when the Microsoft Visual C++ 2012 Redistributable \(either 32 or b4 bit version\) has been previously manually uninstalled from the machine.

![](/images/TA_FAQ/Images/Microsoft_Visua_2012_Redistributable.png)

This redistributable package is required for TestArchitect. During installation, TestArchitect does attempt to install this package, if it is missing. However, on some occasions, a manual uninstallation of the package does not completely remove all related registry entries. When that is the case, the TestArchitect installation process is unable to reinstall the package, and the error message appears.

You can address this issue simply by performing a manual reinstallation of the Visual C++ redistributable, but make certain it is the latest version. Take the following steps:

1.  Abort the current TestArchitect installation process.
2.  Download the latest version of Microsoft Visual C++ 2012 Redistributable at [here](https://www.microsoft.com/en-us/download/details.aspx?id=30679).
3.  Install the package.
    -   If the operating system installed on your computer is-32 bit, install vcredist\_x86.exe.
    -   If the operating system installed on your computer is 64-bit, install both vcredist\_x86.exe and vcredist\_x64.exe
4.  Reinstall TestArchitect.




