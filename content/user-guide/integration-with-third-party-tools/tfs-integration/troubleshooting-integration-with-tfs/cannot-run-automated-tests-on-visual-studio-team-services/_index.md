--- 
title: "Cannot run automated tests on Visual Studio Team Services"
linktitle: "Cannot run automated tests on Visual Studio Team Services"
description: "Problem Although you've followed the configuration steps properly to run TestArchitect automated tests from Azure DevOps, the tests sometimes cannot be executed. Solution Change your build definition ..."
weight: 3
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.TFS_unable_to_run_VSO.html
keywords: "Troubleshooting, Team Foundation Server, unable to run TFBuild 2015 library"
---

## Problem

Although you've followed the configuration steps properly to run TestArchitect automated tests from Azure DevOps, the tests sometimes cannot be executed.

## Solution

Change your build definition to run tests under the bin folder only. Next, use the [Copy File](https://www.visualstudio.com/docs/build/steps/utility/copy-files) utility to copy the required DLLs from the root of the bin folder to a test subfolder which supports exclude/include functionality. \([Learn more](https://github.com/Microsoft/vsts-tasks/issues/1951).\)



