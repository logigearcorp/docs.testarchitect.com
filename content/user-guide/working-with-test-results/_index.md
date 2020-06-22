--- 
title: "Working with test results"
linktitle: "Working with test results"
description: "TestArchitect automatically generates a report containing the results of an automated test after the test concludes. The test results are immediately displayed in the main window of TestArchitect Client."
weight: 13
aliases: 
    - /TA_Help/Topics/Test_result.html
keywords: "test results"
---

TestArchitect automatically generates a report containing the results of an automated test after the test concludes. The test results are immediately displayed in the main window of TestArchitect Client.

## Viewing test results in a web browser

Since TestArchitect version [8.3](/TA_ReleaseNotes/DITA_source/Whats_New_8.3.html), [XML result model](/TA_Help/Topics/Test_result.html) has been introduced to view test results in a web browser.

{{<important>}} XML result model provides the following advantages when compared to the previous result model.

-   Less memory footprint: The amount of memory that TestArchitect uses or references while opening and viewing test results is less.
-   Smaller parsing times: The operation process is faster, such as open test results, import/export test results, etc.
-   Smaller test result compression: Test results take up less hard drive space; therefore, the repository's size is reduced.

{{<remember>}} To view XML test results in the Internet Explorer browser, ensure that **Active Content** is enabled. \([Learn more](/TA_Automation/Topics/aut_advanced_settings_IE.html#step_hlp_4dc_jy).\)

## Optimizing test results

Colossal test results, which contain hundreds of thousands of action lines, might consume a huge amount of memory when they are open in a web browser. TestArchitect optimizes these test results by trimming a specific given number of [iterations](/TA_Glossary/Topics/glossaryIteration.html), and also removing the pagination page.

The number of truncated iterations is determined based on several predefined settings. Note that, these settings are adjustable. \([Learn more](/TA_Help/Topics/ug_modifying_truncated_iterations.html).\)

## User-defined fields

{{<note>}} Applies to TestArchitect 8.4 Update 2 and higher.

If you change the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this test module. In other words, the test result will still adopt the default value set in the process of [Creating a user-defined field](/TA_Administration/Topics/User_defined_fields_create.html).

1.  [Overview of test results](/TA_Help/Topics/ug_test_results_introduction.html)  
This topic contains information about various tabs and panels, and on viewing test results.
2.  [Converting test results generated in earlier versions to TestArchitect 8.3](/TA_Help/Topics/ug_XML_result_conversion.html)  
It is required to convert test results created in versions prior to TestArchitect 8.3 into the new XML format. This topic explains how to convert test results and several important notes for test result conversion.
3.  [Customizing XML test results](/TA_Help/Topics/ug_customizing_XML_report.html)  
In order to customize the layout of XML test results, you are required to edit XSLT style sheets.
4.  [Viewing latest test results](/TA_Help/Topics/Test_result_viewing_latest_result.html)  
Viewing the local result details of the most recently executed test.
5.  [Adding test results to the repository](/TA_Help/Topics/Test_result_storing.html)  
Test results reside locally, in the **LOCAL RESULTS** node, until they are either deleted or explicitly added to the repository.
6.  [Exporting test results](/TA_Help/Topics/Test_result_export.html)  
Test run results stored on the local machine or in the repository can be converted and exported to .TARESULT, HTML, XML, and xUnit.
7.  [Importing test results from ZIP file](/TA_Help/Topics/Test_result_import.html)  
TestArchitect lets you easily import a repository test result archive file \(.ZIP format\).
8.  [Importing test results from .TARESULT files](/TA_Help/Topics/ug_importing_test_results.html)  
TestArchitect lets you easily import a test result archive file \(.TARESULT format\).
9.  [Comparing test results](/TA_Help/Topics/Test_result_baselining.html)  
Comparing the results of two test runs is useful in tracking and debugging new and existing issues in the AUT.
10. [Opening latest test result](/TA_Help/Topics/Test_result_open_latest_test_result.html)  
Opening the most recent result, for a test run multiple times.
11. [Opening baseline result](/TA_Help/Topics/Test_result_open_baseline_result.html)  
If your test module contains a baseline test result, you can conveniently open that result.
12. [Receiving test results of remote test execution](/TA_Help/Topics/Test_result_remote.html)  
TestArchitect allows you to execute a test remotely and receive the test results from the remote machine, although TestArchitect Client is closed on the local machine, even before the remote execution is complete.
13. [Displaying test results in a browser](/TA_Help/Topics/ug_test_results_open_in_browser.html)  
TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results.
14. [Distributed result storage](/TA_Help/Topics/Test_result_distributed_storage.html)  
You can store test results across multiple locations as an alternative to a centralized repository in TestArchitect Client.




**Related information**  


[Comparing test results](/TA_Help/Topics/Test_result_baselining.html)

