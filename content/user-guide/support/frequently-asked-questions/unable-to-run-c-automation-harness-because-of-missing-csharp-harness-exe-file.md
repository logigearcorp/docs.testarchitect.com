--- 
title: "Unable to run C# automation harness because of missing 'csharp harness.exe' file"
linktitle: "Unable to run C# automation harness because of missing 'csharp_harness.exe' file"
slug: "unable-to-run-c-automation-harness-because-of-missing-csharp-harness-exe-file"
description: "Problem In TestArchitect version 8.3 or later, when you execute C# automation harness, you may encounter the following automation error. Since TestArchitect 8.3, C# bundle harness architecture has ..."
weight: 30
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.finding.csharp.harness.file.html
keywords: "Troubleshooting, missing csharp_harness.exe, troubleshooting"
---

## Problem

In TestArchitect version [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/windows) or later, when you execute C\# automation harness, you may encounter the following automation error.

![](/images/TA_FAQ/Images/missing_csharp_harness_file.png)

Since TestArchitect 8.3, [C\# bundle harness](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/) architecture has been introduced, but the connected repository was created in TestArchitect versions prior to 8.3. This repository remembers the setting of the legacy C\# automation harness. It is necessary to modify the setting to reflect new C\# bundle harness.

## Solution

To address this issue, do the following:

1.  In the [Automation Tools](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client#li_ux4_421_zp) dialog box, from the Playback Tool field, ensure that **CSharp\_Harness** is selected.
2.  In the **Executable\(s\)** text box, point to the TestArchitect.Harness.Executor.exe file.

    {{<note>}} By default, this file is located at TA\_INSTALL\_DIR\\harness samples\\csharp\\executables\\TestArchitect.Harness.Executor.exe, once TestArchitect is installed.

3.  Run the C\# bundle harness as usual.






