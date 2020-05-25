--- 
title: "Failure to register libraries during TestArchitect installation"
linktitle: "Failure to register libraries during TestArchitect installation"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.installing_TA_issue.html
---
# Failure to register libraries during TestArchitect installation {#ref.faq.tshoot.installation_fail_to_register_registry .reference}

## Problem { .section}

On a Windows machine during TestArchitect installation, you may encounter an error message notifying you that a DLL library has "failed to register". Example:

![](../Images/installing_TA_fail_to_register.png)

## Solution {#section_ydk_2nz_vw .section}

This issue occurs when the Microsoft Visual C++ 2012 Redistributable \(either 32 or b4 bit version\) has been previously manually uninstalled from the machine.

![](../Images/Microsoft_Visua_2012_Redistributable.png)

This redistributable package is required for TestArchitect. During installation, TestArchitect does attempt to install this package, if it is missing. However, on some occasions, a manual uninstallation of the package does not completely remove all related registry entries. When that is the case, the TestArchitect installation process is unable to reinstall the package, and the error message appears.

You can address this issue simply by performing a manual reinstallation of the Visual C++ redistributable, but make certain it is the latest version. Take the following steps:

1.  Abort the current TestArchitect installation process.
2.  Download the latest version of Microsoft Visual C++ 2012 Redistributable at [here](https://www.microsoft.com/en-us/download/details.aspx?id=30679).
3.  Install the package.
    -   If the operating system installed on your computer is-32 bit, install vcredist\_x86.exe.
    -   If the operating system installed on your computer is 64-bit, install both vcredist\_x86.exe and vcredist\_x64.exe
4.  Reinstall TestArchitect.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[TestArchitect runs out of memory](../../TA_FAQ/Topics/faq.tshoot.TA_out_of_memory.html)

**Next topic:**[Unable to run automation harness](../../TA_FAQ/Topics/faq.tshoot.running_harness_issue.html)

