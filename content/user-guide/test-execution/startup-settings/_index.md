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

## {{< expand >}} Built-in settings

TestArchitect has a number of built-in settings that control how your action lines are handled by the TestArchitect interpreter or automation. \([Learn more](/automation-guide/action-based-testing-language/built-in-settings/).\) All built-in settings have default values. Those defaults may be overwritten by you prior to the launch of a test run, or during [run time](/user-guide/support/glossary-of-terms/run-time) from within a test procedure.

## {{< expand >}} User-defined settings

User-defined settings are settings that you create at runtime startup, and use within your test procedure in a manner you choose. Your test procedure can read the value of a user-defined setting, store it to a variable, and then use the value of that variable to take appropriate action. Note that, unlike built-in settings, the value of a user-defined setting is not modifiable during runtime.

{{<warning>}}

If you're performing a test run with multiple test modules \(as in the case of a [test suite](/user-guide/projects-and-project-items/project-items/test-suites/) or a [serial test run](/user-guide/support/glossary-of-terms/serial-test-run)\), it's important to note that the values of both built-in and user-defined settings are persistent between test module executions. However, the values of built-in settings can be modified by your test procedures, while those of user-defined settings cannot. Hence, note that the built-in setting values in effect upon entry into a test module can depend on that test module's placement in the execution order, whereas that is not a concern for user-defined settings.

Startup settings may be specified in the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box in TestArchitect Client, or in a [test run batch](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/creating-a-batch-file) file. When specified in the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box, the set of settings and their values are retained by TestArchitect and, if not explicitly disabled, apply to all subsequent executions of test runs within the given repository.

1.  [Creating a new user-defined setting](/user-guide/test-execution/startup-settings/creating-a-new-user-defined-setting)  
User-defined settings are a useful way of passing information to your test modules prior to startup to get them to behave in a certain way. You can create these settings within TestArchitect Client for either a client-directed test run or to generate a test run batch file.
2.  [Creating a startup setting for a built-in setting](/user-guide/test-execution/startup-settings/creating-a-startup-setting-for-a-built-in-setting)  
In addition to being modifiable from within your test procedures, built-in settings can have their values set by you just prior to the launch of your test run.
3.  [Editing an existing startup setting](/user-guide/test-execution/startup-settings/editing-an-existing-startup-setting)  
You can edit the startup attributes of existing user-defined and built-in settings.
4.  [Deleting a startup setting](/user-guide/test-execution/startup-settings/deleting-a-startup-setting)  
You can delete startup settings of both user-defined and built-in settings.




**Related information**  


[get setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/get-setting)

[getsetting](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/getsetting)

[GetSetting](/automation-guide/action-based-testing-language/testarchitect-automation-classes/engine-class-methods/getsetting)

[Result Details tab](/user-guide/working-with-test-results/overview/result-details-tab)

[Executing tests from the command line interface](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/)

