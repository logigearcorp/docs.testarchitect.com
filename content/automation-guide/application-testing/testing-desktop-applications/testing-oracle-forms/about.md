--- 
title: "Testing Oracle Forms - Overview"
linktitle: "About"
description: "In TestArchitect, you can create and run tests for Oracle Forms. TestArchitect recognizes Oracle Forms running in a Java EE container inside a web page."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_overview.html
keywords: "Oracle Forms testing, overview"
---

In TestArchitect, you can create and run tests for Oracle Forms. TestArchitect recognizes Oracle Forms running in a Java EE container inside a web page.

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

TestArchitect recognizes UI windows and [controls](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/controls-support) of Oracle Forms and provides [built-in actions](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/built-in-action-support) for simulating user actions on them.

## Supported Oracle Forms versions  

-   You can test applets created with the following versions of Oracle Forms:
    -   Oracle Forms 11gR2
    -   Oracle Forms 10gR2
-   You can test Oracle Forms running as applet windows.
-   Oracle Forms applet windows are displayed on Internet Explorer 11.

## Prerequisites for testing Oracle Forms

In order to be able to capture the unique name property of Oracle Forms controls in the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) and perform automation testing, you are first required to enable the name property, supplied by the Oracle Applications server. \([Learn more](/automation-guide/application-testing/testing-desktop-applications/testing-oracle-forms/enabling-the-unique-name-property).\)

{{<note>}} The availability of the name property depends on whether your Oracle Server supplies it or not. \([Learn more](https://admhelp.microfocus.com/uft/en/14.02/UFT_Help/Content/Addins_Guide/Verifying_OracleServer_UniqueName_Attributes.htm).\)


