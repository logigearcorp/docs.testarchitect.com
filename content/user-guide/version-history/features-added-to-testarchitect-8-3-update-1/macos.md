--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 1 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3_update_1.html
keywords: "Release Notes 8.3 Update 1, macOS, What is new, macOS, TestArchitect 8.3 Update 1, TestArchitect 8.3 Update 1, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 1 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**Enhancements to existing features**

-   Test results improvements:
    -   [**Test result optimized**](/user-guide/working-with-test-results/): For colossal test results, TestArchitect is now able to display only significant data by trimming a specific given number of [iterations](/user-guide/support/glossary-of-terms/iteration), printed in the test results. Note that, setting values for truncation iteration are [adjustable](/user-guide/working-with-test-results/customizing-xml-test-results/adjusting-the-number-of-truncated-iterations-and-pagination-page).
    -   [**Messages of automation error and warning revamped**](/automation-guide/diagnosing-and-resolving-automation-errors/): During an automation playback, when an automation problem occurs, more rich and detailed message is outputted in test results. All revamped messages now contain additional information to ease the troubleshooting, such as, invalid tree node paths, invalid items, system exceptions, window/control's definitions in case of unmatched window/control, and so much more.
    -   **Overview of the number of automation failures, errors, and warnings** of user-defined actions are [summarized](/user-guide/working-with-test-results/overview/result-details-tab#li.Error_warning_failures_summary) at the top level of the actions.
    -   [**Failure Summary**](/user-guide/working-with-test-results/overview/result-details-tab#li.Error_warning_failures_summary) table residing in the **Results Details** tab, and the [**Screenshot**](/user-guide/working-with-test-results/overview/failure-error-summary-tab) column residing in the **Failure/Error Summary** tab are supplemented for quick references.
    -   [**Step Summary** table residing in the **Summary** tab](/user-guide/working-with-test-results/overview/summary-tab#sectiondiv.step_summary_table): With the support of this table, you might take a quick glance at which test steps have automation problems. Also you might grab the test flow thoroughly when you can identify the exact test steps in which the failures, errors, or warnings occur.
    -   [**Exporting test results into HTML**](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file): An additional option, Include all sub test results, allows exporting not only a master results but also its related subresults into HTML format.
    -   [**Video snapshot directory**](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/#section.Video_playback) field: The location at which [screen-recording videos](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/#section.Video_playback) \(taken during the automated test runs\) are stored.
-   **User interface of the [Quick Start](/using-the-testarchitect-help-system/quick-start-tab) tab improved:** The **Quick Start** tab in TestArchitect Client has been redesigned to make the basic use of TestArchitect easier.
-   Additional options for the [Preferences](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/preferences) dialog box:
    -   Enable Telemetry: The Telemetry feature sends performance and usage info to LogiGear. As you use TestArchitect, Telemetry measures and collects non-personal information, such as performance, hardware, and usage. Furthermore we use this information as a tool to improve TestArchitect. Telemetry is enabled by default.
    -   Enable Error Reporting: By using Error Reporting, descriptions of problems or errors will be sent to LogiGear, which we use to improve TestArchitect. We will also treat this report as confidential and anonymous. Error Reporting is enabled by default.

## Deprecation

-   [anchor pos](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/) property on web automation is going to be dropped support one year later starting from TestArchitect release 8.3 Update 1.

## New Privacy Policy

-   About [TestArchitect’s policy](http://go.testarchitect.com/fwlink/?linkid=90002)


