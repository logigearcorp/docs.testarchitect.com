--- 
title: "TestArchitect Eclipse plug-in"
linktitle: "TestArchitect Eclipse plug-in"
description: "The Eclipse plug-in for TestArchitect creates an information window as an Eclipse perspective."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_eclipse_plugin.html
keywords: "Eclipse, TestArchitect plug-in, perspectives, TestArchitect information window"
---

The Eclipse plug-in for TestArchitect creates an information window as an Eclipse perspective.

{{<restriction>}} Integration between TestArchitect™ and the Eclipse™ has been deprecated since TestArchitect version [8.3 Update 2](/user-guide/version-history/features-added-to-testarchitect-8-3-update-2/).

{{<note>}}

-   The descriptions presented here assume that you are familiar with the TestArchitect debugger, as explained in [Using the debugger](/user-guide/finding-bugs-with-testarchitect/debugging-with-testarchitect/the-debugger).
-   Since TestArchitect version [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/windows), the TestArchitect Eclipse plug-in works with JDK versions from 1.8.0 to [1.8.0\_91](http://www.oracle.com/technetwork/java/javase/8u91-relnotes-2949462.html).

The TestArchitect perspective, installed via the [TA plug-in for Eclipse](/user-guide/integration-with-third-party-tools/working-with-eclipse/installing-the-eclipse-plug-in), enables you to view test information directly in the Eclipse IDE, aiding in testing and the debugging of [user-scripted actions](/user-guide/support/glossary-of-terms/action-user-scripted). Most of the TestArchitect execution information, including automation tools, settings, variables, results, and warnings/errors, is conveniently displayed directly in Eclipse’s workbench window. The perspective, also known as the *TestArchitect information window*, contains a set of views displayed as tabs:

![](/images/TA_Help/Images/Eclipse_plugin_execution_info_tab.png)

-   **Result**

    Contains the same information as the TestArchitect **Debug Information** \> **Result** tab \(see [The debugger](/user-guide/finding-bugs-with-testarchitect/debugging-with-testarchitect/the-debugger#section_fzj_jjk_dl)\).

-   **Settings**

    Contains the same information as the TestArchitect **Debug Information** \> **Settings** tab \(see [The debugger](/user-guide/finding-bugs-with-testarchitect/debugging-with-testarchitect/the-debugger#section_fzj_jjk_dl)\).

-   **Local**

    Contains the same information as the TestArchitect **Debug Information** \> **Local** tab \(see [The debugger](/user-guide/finding-bugs-with-testarchitect/debugging-with-testarchitect/the-debugger#section_fzj_jjk_dl)\).

-   **Global**

    Contains the same information as the TestArchitect **Debug Information** \> **Global** tab \(see [The debugger](/user-guide/finding-bugs-with-testarchitect/debugging-with-testarchitect/the-debugger#section_fzj_jjk_dl)\).

-   **Execution Information**

    This tab displays all of the information in the TestArchitect Execute dialog box \(see [Working with test results](/user-guide/working-with-test-results/)\). Each information node can be expanded or collapsed.

    -   **Test modules**: Full path view for all executed test modules.
    -   **Result name**: Name of the test result.
    -   **Automation Tools**: Names of the automation tools used to execute the test module.
    -   **Keyword**: Keyword for variation, if any.
    -   **AUT Version**: Version of the application under test, if any.
    -   **Host name**: Host names of remote controllers on which test modules are executed, if any.
-   **Problems**

    This tab displays all the warnings and errors of a test run, if any. Each information node can be expanded or collapsed. Displayed cells for each row are:

    -   **Problem** Message describing warning or error occurring during the test automation.
    -   **Test Case** Test case in which the problem occurred.
    -   **Test Module** Test module housing the test case in which the problem occurred..
    -   **Line** Line number responsible for the warning/error.

        ![](/images/TA_Help/Images/Eclipse_plugin_problems_tab.png)


{{<tip>}} Click **Refresh** to retrieve latest data and update the TestArchitect information window.

The display of test information directly in an Eclipse perspective is useful when debugging user-scripted actions in Eclipse, precluding the need for developers to switch back and forth between TestArchitect and Eclipse to view debugging information. The plug-in also simplifies the process of creating, registering, and implementing user-scripted actions in Eclipse by automatically registering and diverting actions from TestArchitect to Eclipse.



