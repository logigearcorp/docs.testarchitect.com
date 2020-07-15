--- 
title: "Features added to TestArchitect 7.1"
linktitle: "Features added to TestArchitect 7.1"
description: "This topic describes the changes made in TestArchitect version 7.1."
weight: 38
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_7.1.html
keywords: "What's new, TestArchitect 7.1, what's new"
---

This topic describes the changes made in TestArchitect version 7.1.

{{<caution>}}

-   It is strongly recommended that you back up all repositories before upgrading to the latest version of TestArchitect.
-   Upgrade of repository databases is mandatory for using the new Name change propagation feature. The upgrading process adds necessary referencing information to the databases.

## TestArchitect License Server

The License Server model has been restructured. Currently, TestArchitect is available in three different editions \(Professional, Mobile Plus and Enterprise\). These three editions are tailored to the needs and sizes of specific teams, as well as their development plans.

## TestArchitect Client and Repository Server  

-   [Name change propagation](/user-guide/projects-and-project-items/project-items/name-change-propagation): Entities such as arguments, actions, test modules, interfaces, interface entities, interface elements, and data sets can be renamed. Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears.
-   **Just-in time compilation \(JIT\)**: improves the runtime performance of TestArchitect during test execution.
-   [Test suites](/user-guide/projects-and-project-items/project-items/test-suites/): are used to organize execution plans effectively. You can either add specific test modules to a test suite or set up a query to retrieve test modules dynamically.
-   [**Microsoft Test Manager® \(MTM\) integration**](/user-guide/integration-with-third-party-tools/tfs-integration/): Test cases in MTM can be imported into TestArchitect for automation. Once automated, these test cases can be executed using MTM. This integration enables a continuous integration process in Visual Studio 2010 and 2012.
-   [TestArchitect plugin for Eclipse®](/user-guide/integration-with-third-party-tools/working-with-eclipse/): enables users to view all settings, variables, execution information, and error/warning messages from TestArchitect while debugging user-scripted actions in the Eclipse IDE.
-   Option to generate XML-based test results: XML test results conform to xUnit format to enable integration between TestArchitect and continuous integration tools such as Jenkins.
-   [Help system extensibility](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/help-system-extensibility/): enables you to extend TestArchitect Help with your own customizable topics and documentation system.
-   [Compare results](/user-guide/working-with-test-results/comparing-test-results/): gives you the ability to compare any two test run results from the same test module.
-   [Setting Java heap size](/administration-guide/repository-server-management/setting-java-heap-size): can now be achieved using the Repository Server’s control panel. This setting helps to optimize the performance of the Repository Server. This can also prevent out-of-memory conditions.
-   All TestArchitect Client and Repository Server features on the Windows platform are now available on:
    -   Red Hat Linux 6.3
    -   macOS 10.7 \(Lion\) and newer.

Enhancements to existing features:

-   [List views](/user-guide/projects-and-project-items/project-items/list-view/): TestArchitect list views have been enhanced to make them more user-friendly and provide more pertinent information based on selectable criteria. Multiple enhancements include:
    -   Edit multiple fields: The field values of multiple items in the list view can be changed simultaneously \(all of fields you want to edit must be in editable states\).
    -   Copy text: Continuous or discontinuous rows can be selected from the list view and pasted into other documents, including Microsoft Word and Excel formats. The `Copy text` command copies cell-by-cell, row-by-row and column-by-column. Each column is separated by a tab delimiter.
    -   Filters: You can input your own user-defined filters or use predefined filters to customize the display of list items.
    -   Replace: The names of test modules and test cases can be replaced. This replace function not only changes the names of items in selected fields, it also automatically changes the names of all associated entities affected by the name change.
-   [Copy definition](/user-guide/interface-definitions/dynamic-identifiers): The definition of any control in the Element Identification dialog box or the Interface Viewer can be copied and used in a dynamic control identifying technique.
-   Dragging and dropping a saved picture of [picture-based actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) is now supported.
-   Performance related to the addition of large test results to the repository has been improved.
-   [SampleRepository](/user-guide/getting-started/sample-repository/) database enhancements include:
    -   [Car Rental – Mobile](/user-guide/getting-started/sample-repository/car-rental-mobile/) project replaces the Car Rental application on the Android platform to illustrate automation testing on all mobile platforms including Android and iOS.
    -   Current Web sample Project Manager Selection is replaced by [Scrum Board](/user-guide/getting-started/sample-repository/scrum-board/) to provide a better illustration of Web application automation.

## TestArchitect Automation  

-   Mobile platforms:
    -   [iOS automation platform](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/) is now supported:
        -   Fully supports all iOS controls.
        -   Devices: iPhone 4, iPhone 5, iPad 2, iPad 3, iPad Mini
        -   Specific actions in iOS:
            -   [select page](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/select-page): selects a page at a specified index.
            -   [pinch](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/pinch): simulates pinch-open and pinch-close gestures.
        -   Additional built-in action added to Android and iOS platforms:
            -   [scroll to view](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/scroll-to-view): scrolls off-screen controls into view.
-   [HTML 5 controls \(tags\) are supported](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/html5-support/):
    -   All HTML5 controls
    -   Built-in actions added:
        -   [play](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/play): plays a video/audio file at a specified starting point.
        -   [pause](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/pause): pauses a video/audio file at a specified starting point.
        -   [set volume](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/set-volume): sets volume for audio and video controls.
        -   [set media property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/set-media-property): sets values for audio and video controls.
-   Support of Java in Red Hat Linux 6.3
-   [Installation tool for Browser Automation Extensions](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/automation-agent-manager): used to install TestArchitect automation extensions on Internet Explorer, Firefox or Chrome either before or after TestArchitect installation. This is useful when a browser is installed following TestArchitect installation.
-   Introduction of the new built-in setting, [property wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/property-wait), which specifies the maximum wait time a property value of a control or window is to be available.

Enhancements to existing features:

-   Action [run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test): test name can be retrieved from a variable
-   Action [type](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/type): simulation of the Windows key being pressed using `{WIN}` notation.
-   Check the availability of [TARegisterServer](/administration-guide/testarchitect-register-server) before starting automation to prevent automation failure caused by TARegisterServer being unavailable.
-   Change the name of the date function id, which converts a specific Gregorian date to an equivalent Julian day number, to [fj](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fj-date) to prevent possible name conflicts with user-defined id as a column header in data sets.



