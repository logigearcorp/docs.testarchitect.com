--- 
title: "Team Foundation Server's web portal"
linktitle: "Automated testing in TFS web portal"
weight: 4
aliases: 
    - /TA_Help/Topics/TFS_web_automated_testing.html
---
# Team Foundation Server's web portal {#tfs2018 .concept}

The TFS web portal allows you to manage source code, work items, builds, test efforts, machines and test runs.

You can open the web portal from a connected project in Visual Studio or from a web browser using the following URL:

```
http://ServerName:8080/tfs/CollectionName/ProjectName 
```

**Note:** If you use TFS 2018, be aware of its substantial changes:

-   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
-   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.

Accordingly Build vNext and the Test Hub in the [TFS web portal](TFS_web_automated_testing.html) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

1.  [Creating a build definition and queuing a build](../../TA_Help/Topics/TFS_web_creating_and_queuing_build.html)  
This topic gives you a basic guide on creating a build definition and queuing it in the TFS web portal.
2.  [Creating a release definition](../../TA_Help/Topics/TFS_web_creating_release_def.html)  
This topic gives you a basic guide on creating a release definition in the TFS web portal.
3.  [Running automated tests](../../TA_Help/Topics/TFS_web_runnning_automated_tests.html)  


**Parent topic:**[Team Foundation Server integration](../../TA_Help/Topics/ug_MTM_def.html)

**Previous topic:**[Setting up the integration environment for on-premises Team Foundation Server](../../TA_Help/Topics/ug_MTM_setting_up_environment.html)

**Next topic:**[Azure DevOps](../../TA_Help/Topics/Azure_DevOps_running_automated_tests.html)

