--- 
title: "Creating and configuring a build definition"
linktitle: "Creating and configuring a build definition"
description: "This topic describes how to create and configure XAML and TFBuild definitions."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_MTM_build_definition.html
keywords: "TFS, creating a build definition,, Team Foundation Server, creating a build definition, integration, Microsoft Test Manager, creating a build definition"
---

This topic describes how to create and configure XAML and TFBuild definitions.

TestArchitect supports both XAML- and TFBuild-based \(vNext\) builds.

-   [XAML build](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx): Traditionally, TFS uses XAML definitions to define a build process. These definitions are written in Visual Studio, using a workflow-style visual editor. With Team Foundation Build \(TFBuild\), you can create and manage build processes that automatically compile and test your applications, and perform other important functions. You can use your build system to support a strategy of [continuous integration](https://msdn.microsoft.com/en-us/library/bb558973(v=vs.120).aspx) or put even more rigorous quality checks in place that [prevent bad quality code from “breaking the build.”](https://msdn.microsoft.com/en-us/library/dd787631(v=vs.120).aspx)
-   [Team Foundation Build](https://msdn.microsoft.com/en-us/library/vs/alm/build/feature-overview), also known as Build VNext, is the new build system which was introduced in Visual Studio Team Services and TFS 2015. The new builds are web- and script-based, and highly customizable. They leave behind many of the problems and limitations of the older XAML builds. For example, this new system embraces the diverse set of domain-specific languages \(DSLs\) that developers use to build the code on their development machines.

-   **[Creating XAML build](/TA_Help/Topics/MTM_create_build_definition.html)**  
To run automated tests in Microsoft Test Manager, create a team build including your test project and add the build to your test plan.
-   **[Defining your process for TFBuild](/TA_Help/Topics/ug_MTM_specify_build_steps.html)**  
This topic describes how to define a process for TFBuild, also known as Build VNext. This new build is web- and script-based and highly customizable, providing those groups of steps that allow you to build your applications without needing to be concerned with tools or languages.




