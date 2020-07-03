--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.1 update 2 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_2_Mac.html
keywords: "Release Notes 8.1 Update 2, macOS, What is new, macOS, TestArchitect 8.1 Update 2, TestArchitect 8.1 Update 2, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.1 update 2 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation

-   [Lexical scoping](/automation-guide/action-based-testing-language/the-test-language/variables/#li_n3d_m4z_mr): With this alternative to dynamic scoping \(the previous default mode of TestArchitect\), the scope of a local variable does not extend into action calls. This means that a local variable is only accessible within the block in which it is declared, but not in its child blocks. \(Note that, while lexical scoping is now the default, dynamic scoping may be restored by setting the built-in [lexical scoping](/automation-guide/action-based-testing-language/built-in-settings/other-settings/lexical-scoping) setting to no. \)

**Enhancements to existing features**

-   [ignore tabs and newlines](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-tabs-and-newlines) built-in setting: Ignoring of tab and newline characters is now supported on additional platforms, such as Java, mobile \(iOS\), etc.
-   Support for transmission of [tab\(\)](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/tab) and [newline\(\)](/automation-guide/action-based-testing-language/the-test-language/functions/string-functions/newline) characters for various user-interface actions such as [set](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/set) and [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter).
-   [scroll to view](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/scroll-to-view) built-in action is now supported on the following iOS platforms:
    -   native iOS apps
    -   Safari
    -   WebView


