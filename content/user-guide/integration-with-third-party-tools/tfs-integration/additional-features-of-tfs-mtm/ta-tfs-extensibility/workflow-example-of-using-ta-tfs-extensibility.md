--- 
title: "Workflow example of using TA-TFS Extensibility"
linktitle: "Workflow example of using TA-TFS Extensibility"
description: "An example of using TA-TFS Extensibility."
weight: 6
aliases: 
    - /TA_Help/Topics/ug_TA_TFS_Extensibility_examples.html
keywords: "integration, TFS, workflow example, workflow example, Team Foundation Server"
---

An example of using TA-TFS Extensibility.

## {{< expand >}} Workflow of using TA-TFS Extensibility {{< permerlink >}} {#reference_c4m_xty_zbb__section_srl_czy_zbb} 

Suppose that we'd like to implement the extensibility ClassInitialized\(\) method, which is invoked after execution of a ClassInitialize\(\).

```
[TAExtensibilityMethod(LoaderConstant.ClassInitialized)]
 public void ClassInitialized(TAExecutionArguments args)
{
   //Code implementation						
}
```

In the implementation code of ClassInitialized\(\), we first provide values for several TA constants, such as RepositoryServer, RepositoryName, RepositoryPort, ProjectName, UserName, and Password.

Your snippet of code may resemble the following:

```

execObj.ExecutionInfo[TAExecutionConstant.RepositoryServer] = "localhost";
execObj.ExecutionInfo[TAExecutionConstant.RepositoryName] = "SampleRepository";
execObj.ExecutionInfo[TAExecutionConstant.RepositoryPort] = "53400";
execObj.ExecutionInfo[TAExecutionConstant.ProjectName] = "Car Rental";
execObj.ExecutionInfo[TAExecutionConstant.UserName] = "administrator";
execObj.ExecutionInfo[TAExecutionConstant.Password] = "";

```

Furthermore, TFS test ID is used to name the TA test results uploaded to TFS.

```

((TestContext)e.TestContext).Properties[TAExecutionConstant.UseTestIDForUploadedResults] = "Yes";

```

Additionally, we enable startup settings in code, and then define a list of startup settings to be invoked. In this case, we define:

-   [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) built-in setting:
    -   Default value: chrome
    -   Description: default browser
-   path user-defined setting:
    -   Default value: D:\\Sample.exe
    -   Description: **AUT path**

Your snippet of code may resemble the following:

```

List<StartupSetting> listStartupSettings = new List<StartupSetting>();

StartupSetting browser = new StartupSetting("use browser", "chrome", "default browser", StartupSettingType.BUILT_IN_SETTING);
StartupSetting AUT = new StartupSetting("path", "D:\Sample.exe", "AUT path", StartupSettingType.USER_DEFINE_SETTING);

listStartupSettings.Add(browser);
listStartupSettings.Add(AUT);

execObj.ExecutionInfo[TAExecutionConstant.StartupSettings] = listStartupSettings;
execObj.ExecutionInfo[TAExecutionConstant.StartupSettingsMode] = "yes";

```

Ultimately, the final code to implement the extensibility ClassInitialized\(\) method may resemble the following:

```

/// <summary>
/// code to be run after TestInitialize
/// </summary>
         
[TAExtensibilityMethod(LoaderConstant.TestInitialized)]
         
public void TestInitialized(TAExecutionArguments e)
{
   ITAExecution execObj = TAIntegrationLoader.Instance.ITAExecution;
         
   execObj.ExecutionInfo[TAExecutionConstant.RepositoryServer] = "localhost";
   execObj.ExecutionInfo[TAExecutionConstant.RepositoryName] = "SampleRepository";
   execObj.ExecutionInfo[TAExecutionConstant.RepositoryPort] = "53400";
   execObj.ExecutionInfo[TAExecutionConstant.ProjectName] = "Car Rental";
   execObj.ExecutionInfo[TAExecutionConstant.UserName] = "administrator";
   execObj.ExecutionInfo[TAExecutionConstant.Password] = "";
   
  ((TestContext)e.TestContext).Properties[TAExecutionConstant.UseTestIDForUploadedResults] = "Yes";

   List<StartupSetting> listStartupSettings = new List<StartupSetting>();
         
   StartupSetting browser = new StartupSetting("use browser", "chrome", "default browser", StartupSettingType.BUILT_IN_SETTING);
   StartupSetting AUT = new StartupSetting("path", "D:\Sample.exe", "AUT path", StartupSettingType.USER_DEFINE_SETTING);
         
   listStartupSettings.Add(browser);
   listStartupSettings.Add(AUT);
         
   execObj.ExecutionInfo[TAExecutionConstant.StartupSettings] = listStartupSettings;
   execObj.ExecutionInfo[TAExecutionConstant.StartupSettingsMode] = "yes";
         
   execObj.Save();
}

```



