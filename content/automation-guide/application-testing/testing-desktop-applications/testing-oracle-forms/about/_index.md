--- 
title: "About"
linktitle: "Testing Oracle Forms - Overview"
description: "In TestArchitect, you can create and run tests for Oracle Forms. TestArchitect recognizes Oracle Forms running in a Java EE container inside a web page."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_overview.html
keywords: "Oracle Forms testing, overview"
---

In TestArchitect, you can create and run tests for Oracle Forms. TestArchitect recognizes Oracle Forms running in a Java EE container inside a web page.

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

TestArchitect recognizes UI windows and [controls](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_controls.html) of Oracle Forms and provides [built-in actions](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_actions.html) for simulating user actions on them.

## Supported Oracle Forms versions

-   You can test applets created with the following versions of Oracle Forms:
    -   Oracle Forms 11gR2
    -   Oracle Forms 10gR2
-   You can test Oracle Forms running as applet windows.
-   Oracle Forms applet windows are displayed on Internet Explorer 11.

## Prerequisites for testing Oracle Forms

In order to be able to capture the unique name property of Oracle Forms controls in the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) and perform automation testing, you are first required to enable the name property, supplied by the Oracle Applications server. \([Learn more](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_enable_name_attribute.html).\)

**Note:** The availability of the name property depends on whether your Oracle Server supplies it or not. \([Learn more](https://admhelp.microfocus.com/uft/en/14.02/UFT_Help/Content/Addins_Guide/Verifying_OracleServer_UniqueName_Attributes.htm).\)



