--- 
title: "Cannot run automated tests on Visual Studio Team Services"
linktitle: "Cannot run automated tests on Visual Studio Team Services"
weight: 3
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.TFS_unable_to_run_VSO.html
---

## Problem

Although you've followed the configuration steps properly to run TestArchitect automated tests from Azure DevOps, the tests sometimes cannot be executed.

## Solution

Change your build definition to run tests under the bin folder only. Next, use the [Copy File](https://www.visualstudio.com/docs/build/steps/utility/copy-files) utility to copy the required DLLs from the root of the bin folder to a test subfolder which supports exclude/include functionality. \([Learn more](https://github.com/Microsoft/vsts-tasks/issues/1951).\)

**Parent topic:**[Troubleshooting integration with Team Foundation Server](/TA_FAQ/Topics/faq.tshoot.TFS.html)

**Previous topic:**[Unable to upload test results to Team Foundation Server due to mismatched build number values](/TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html)

