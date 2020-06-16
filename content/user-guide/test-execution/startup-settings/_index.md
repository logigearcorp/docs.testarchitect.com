--- 
title: "Startup settings"
linktitle: "Startup settings"
description: "Startup settings are settings which you can configure before launching a test run. These settings are of two types: built-in, and user-defined."
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_startup_settings.html
keywords: "startup settings"
---

Startup settings are settings which you can configure before launching a test run. These settings are of two types: built-in, and user-defined.

## Built-in settings

TestArchitect has a number of built-in settings that control how your action lines are handled by the TestArchitect interpreter or automation. \([Learn more](/TA_Automation/Topics/bis_Built_in_settings.html).\) All built-in settings have default values. Those defaults may be overwritten by you prior to the launch of a test run, or during [run time](/TA_Glossary/Topics/glossaryRunTime.html) from within a test procedure.

## User-defined settings

User-defined settings are settings that you create at runtime startup, and use within your test procedure in a manner you choose. Your test procedure can read the value of a user-defined setting, store it to a variable, and then use the value of that variable to take appropriate action. Note that, unlike built-in settings, the value of a user-defined setting is not modifiable during runtime.

**Warning:**

If you're performing a test run with multiple test modules \(as in the case of a [test suite](/TA_Help/Topics/Test_suite.html) or a [serial test run](/TA_Glossary/Topics/glossarySerialTestRun.html)\), it's important to note that the values of both built-in and user-defined settings are persistent between test module executions. However, the values of built-in settings can be modified by your test procedures, while those of user-defined settings cannot. Hence, note that the built-in setting values in effect upon entry into a test module can depend on that test module's placement in the execution order, whereas that is not a concern for user-defined settings.

Startup settings may be specified in the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box in TestArchitect Client, or in a [test run batch](/TA_Help/Topics/Test_exec_cmd_creating_batch_file.html) file. When specified in the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box, the set of settings and their values are retained by TestArchitect and, if not explicitly disabled, apply to all subsequent executions of test runs within the given repository.

1.  [Creating a new user-defined setting](/TA_Automation/Topics/aut_defining_user_defined_settings.html)  
User-defined settings are a useful way of passing information to your test modules prior to startup to get them to behave in a certain way. You can create these settings within TestArchitect Client for either a client-directed test run or to generate a test run batch file.
2.  [Creating a startup setting for a built-in setting](/TA_Automation/Topics/aut_configuring_built_in_settings.html)  
In addition to being modifiable from within your test procedures, built-in settings can have their values set by you just prior to the launch of your test run.
3.  [Editing an existing startup setting](/TA_Automation/Topics/aut_editing_user_defined_settings.html)  
You can edit the startup attributes of existing user-defined and built-in settings.
4.  [Deleting a startup setting](/TA_Automation/Topics/aut_removing_user_defined_settings.html)  
You can delete startup settings of both user-defined and built-in settings.




**Related information**  


[get setting](/TA_Automation/Topics/bia_get_setting.html)

[getsetting](/TA_Automation/Topics/Expressions_functions_getsetting.html)

[GetSetting](/TA_Automation/Topics/abtf_GetSetting.html)

[Result Details tab](/TA_Help/Topics/Test_result_details.html)

[Executing tests from the command line interface](/TA_Help/Topics/Test_exec_cmd.html)

