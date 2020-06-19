--- 
title: "Unable to run C# automation harness because of missing 'csharp\_harness.exe' file"
linktitle: "Unable to run C# automation harness because of missing 'csharp\_harness.exe' file"
slug: 'unable-to-run-c-automation-harness-because-of-missing-csharp-harness-exe-file'
description: "Problem In TestArchitect version 8.3 or later, when you execute C# automation harness, you may encounter the following automation error. Since TestArchitect 8.3, C# bundle harness architecture has ..."
weight: 30
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.finding.csharp.harness.file.html
keywords: "Troubleshooting, missing csharp_harness.exe, troubleshooting"
---

## Problem

In TestArchitect version [8.3](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html) or later, when you execute C\# automation harness, you may encounter the following automation error.

![](/images/TA_FAQ/Images/missing_csharp_harness_file.png)

Since TestArchitect 8.3, [C\# bundle harness](/TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html) architecture has been introduced, but the connected repository was created in TestArchitect versions prior to 8.3. This repository remembers the setting of the legacy C\# automation harness. It is necessary to modify the setting to reflect new C\# bundle harness.

## Solution

To address this issue, do the following:

1.  In the [Automation Tools](/TA_Help/Topics/Test_exec_test_execution.html#li_ux4_421_zp) dialog box, from the Playback Tool field, ensure that **CSharp\_Harness** is selected.
2.  In the **Executable\(s\)** text box, point to the TestArchitect.Harness.Executor.exe file.

    **Note:** By default, this file is located at TA\_INSTALL\_DIR\\harness samples\\csharp\\executables\\TestArchitect.Harness.Executor.exe, once TestArchitect is installed.

3.  Run the C\# bundle harness as usual.






