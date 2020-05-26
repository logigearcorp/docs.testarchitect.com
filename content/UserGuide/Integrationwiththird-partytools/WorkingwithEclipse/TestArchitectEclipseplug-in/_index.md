--- 
title: "TestArchitect Eclipse plug-in"
linktitle: "TestArchitect Eclipse plug-in"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_eclipse_plugin.html
---
# TestArchitect Eclipse plug-in {#TestArchitect_eclipse_plugin .concept}

The Eclipse plug-in for TestArchitect creates an information window as an Eclipse perspective.

**Restriction:** Integration between TestArchitect™ and the Eclipse™ has been deprecated since TestArchitect version [8.3 Update 2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_2.html).

**Note:**

-   The descriptions presented here assume that you are familiar with the TestArchitect debugger, as explained in [Using the debugger](Debugging_the_debugger.html).
-   Since TestArchitect version [8.3](../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html), the TestArchitect Eclipse plug-in works with JDK versions from 1.8.0 to [1.8.0\_91](http://www.oracle.com/technetwork/java/javase/8u91-relnotes-2949462.html).

The TestArchitect perspective, installed via the [TA plug-in for Eclipse](Integration_install_eclipse_plugin.html), enables you to view test information directly in the Eclipse IDE, aiding in testing and the debugging of [user-scripted actions](../../TA_Glossary/Topics/glossaryScriptedAction.html). Most of the TestArchitect execution information, including automation tools, settings, variables, results, and warnings/errors, is conveniently displayed directly in Eclipse’s workbench window. The perspective, also known as the *TestArchitect information window*, contains a set of views displayed as tabs:

![](../Images/Eclipse_plugin_execution_info_tab.png)

Result
:   Contains the same information as the TestArchitect **Debug Information** \> **Result** tab \(see [The debugger](Debugging_the_debugger.md#section_fzj_jjk_dl)\).

Settings
:   Contains the same information as the TestArchitect **Debug Information** \> **Settings** tab \(see [The debugger](Debugging_the_debugger.md#section_fzj_jjk_dl)\).

Local
:   Contains the same information as the TestArchitect **Debug Information** \> **Local** tab \(see [The debugger](Debugging_the_debugger.md#section_fzj_jjk_dl)\).

Global
:   Contains the same information as the TestArchitect **Debug Information** \> **Global** tab \(see [The debugger](Debugging_the_debugger.md#section_fzj_jjk_dl)\).

Execution Information
:   This tab displays all of the information in the TestArchitect Execute dialog box \(see [Working with test results](Test_result.html)\). Each information node can be expanded or collapsed.

    -   **Test modules**: Full path view for all executed test modules.
    -   **Result name**: Name of the test result.
    -   **Automation Tools**: Names of the automation tools used to execute the test module.
    -   **Keyword**: Keyword for variation, if any.
    -   **AUT Version**: Version of the application under test, if any.
    -   **Host name**: Host names of remote controllers on which test modules are executed, if any.

Problems
:   This tab displays all the warnings and errors of a test run, if any. Each information node can be expanded or collapsed. Displayed cells for each row are:

    -   **Problem** Message describing warning or error occurring during the test automation.
    -   **Test Case** Test case in which the problem occurred.
    -   **Test Module** Test module housing the test case in which the problem occurred..
    -   **Line** Line number responsible for the warning/error.

        ![](../Images/Eclipse_plugin_problems_tab.png)


**Tip:** Click **Refresh** to retrieve latest data and update the TestArchitect information window.

The display of test information directly in an Eclipse perspective is useful when debugging user-scripted actions in Eclipse, precluding the need for developers to switch back and forth between TestArchitect and Eclipse to view debugging information. The plug-in also simplifies the process of creating, registering, and implementing user-scripted actions in Eclipse by automatically registering and diverting actions from TestArchitect to Eclipse.

**Parent topic:**[Working with Eclipse](../../TA_Help/Topics/Integration_eclipse_intro.html)

**Previous topic:**[Installing the Eclipse plug-in](../../TA_Help/Topics/Integration_install_eclipse_plugin.html)

