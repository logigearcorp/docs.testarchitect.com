--- 
title: "Team Foundation Server's web portal"
linktitle: "Team Foundation Server's web portal"
description: "The TFS web portal allows you to manage source code, work items, builds, test efforts, machines and test runs."
weight: 4
aliases: 
    - /TA_Help/Topics/TFS_web_automated_testing.html
keywords: ", TFS web portal, Team Foundation Server web portal"
---

The TFS web portal allows you to manage source code, work items, builds, test efforts, machines and test runs.

You can open the web portal from a connected project in Visual Studio or from a web browser using the following URL:

```
http://ServerName:8080/tfs/CollectionName/ProjectName 
```

{{<note>}} If you use TFS 2018, be aware of its substantial changes:

-   XAML Build has been deprecated. Furthermore, Microsoft Test Manager \(MTM\) no longer supports XAML builds
-   Using Test Center/Lab Center in MTM for automated testing is no longer supported by TFS, starting with TFS 2018.

Accordingly Build vNext and the Test Hub in the [TFS web portal](/user-guide/integration-with-third-party-tools/tfs-integration/automated-testing-in-tfs-web-portal/) are ideal replacements for respective XAML Build and MTM.\(See also: [Team Foundation Server 2018 Release Notes](https://docs.microsoft.com/en-us/visualstudio/releasenotes/tfs2018-relnotes)\)

1.  [Creating a build definition and queuing a build](/user-guide/integration-with-third-party-tools/tfs-integration/automated-testing-in-tfs-web-portal/creating-a-build-definition-and-queuing-a-build)  
This topic gives you a basic guide on creating a build definition and queuing it in the TFS web portal.
2.  [Creating a release definition](/user-guide/integration-with-third-party-tools/tfs-integration/automated-testing-in-tfs-web-portal/creating-a-release-definition)  
This topic gives you a basic guide on creating a release definition in the TFS web portal.
3.  [Running automated tests](/user-guide/integration-with-third-party-tools/tfs-integration/automated-testing-in-tfs-web-portal/running-automated-tests)  





