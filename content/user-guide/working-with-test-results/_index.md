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

## {{< expand >}} Viewing test results in a web browser

Since TestArchitect version [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/), [XML result model](/user-guide/working-with-test-results/) has been introduced to view test results in a web browser.

{{<important>}} XML result model provides the following advantages when compared to the previous result model.

-   Less memory footprint: The amount of memory that TestArchitect uses or references while opening and viewing test results is less.
-   Smaller parsing times: The operation process is faster, such as open test results, import/export test results, etc.
-   Smaller test result compression: Test results take up less hard drive space; therefore, the repository's size is reduced.

{{<remember>}} To view XML test results in the Internet Explorer browser, ensure that **Active Content** is enabled. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-internet-explorer-for-web-testing/advanced-settings#step_hlp_4dc_jy).\)

## {{< expand >}} Optimizing test results

Colossal test results, which contain hundreds of thousands of action lines, might consume a huge amount of memory when they are open in a web browser. TestArchitect optimizes these test results by trimming a specific given number of [iterations](/user-guide/support/glossary-of-terms/iteration), and also removing the pagination page.

The number of truncated iterations is determined based on several predefined settings. Note that, these settings are adjustable. \([Learn more](/user-guide/working-with-test-results/customizing-xml-test-results/adjusting-the-number-of-truncated-iterations-and-pagination-page).\)

## {{< expand >}} User-defined fields {{< permerlink >}} {#Test_result__section_svb_t2p_wfb} 

{{<note>}} Applies to TestArchitect 8.4 Update 2 and higher.

If you change the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this test module. In other words, the test result will still adopt the default value set in the process of [Creating a user-defined field](/administration-guide/user-defined-fields/creating-a-user-defined-field).

1.  [Overview of test results](/user-guide/working-with-test-results/overview/)  
This topic contains information about various tabs and panels, and on viewing test results.
2.  [Converting test results generated in earlier versions to TestArchitect 8.3](/user-guide/working-with-test-results/converting-test-results/)  
It is required to convert test results created in versions prior to TestArchitect 8.3 into the new XML format. This topic explains how to convert test results and several important notes for test result conversion.
3.  [Customizing XML test results](/user-guide/working-with-test-results/customizing-xml-test-results/)  
In order to customize the layout of XML test results, you are required to edit XSLT style sheets.
4.  [Viewing latest test results](/user-guide/working-with-test-results/viewing-latest-test-results)  
Viewing the local result details of the most recently executed test.
5.  [Adding test results to the repository](/user-guide/working-with-test-results/adding-test-results-to-the-repository/)  
Test results reside locally, in the **LOCAL RESULTS** node, until they are either deleted or explicitly added to the repository.
6.  [Exporting test results](/user-guide/working-with-test-results/exporting-test-results/)  
Test run results stored on the local machine or in the repository can be converted and exported to .TARESULT, HTML, XML, and xUnit.
7.  [Importing test results from ZIP file](/user-guide/working-with-test-results/importing-test-results-from-zip-file)  
TestArchitect lets you easily import a repository test result archive file \(.ZIP format\).
8.  [Importing test results from .TARESULT files](/user-guide/working-with-test-results/importing-test-results-from-taresult-files/)  
TestArchitect lets you easily import a test result archive file \(.TARESULT format\).
9.  [Comparing test results](/user-guide/working-with-test-results/comparing-test-results/)  
Comparing the results of two test runs is useful in tracking and debugging new and existing issues in the AUT.
10. [Opening latest test result](/user-guide/working-with-test-results/opening-latest-test-result)  
Opening the most recent result, for a test run multiple times.
11. [Opening baseline result](/user-guide/working-with-test-results/opening-baseline-result)  
If your test module contains a baseline test result, you can conveniently open that result.
12. [Receiving test results of remote test execution](/user-guide/working-with-test-results/receiving-test-results-of-remote-test-execution)  
TestArchitect allows you to execute a test remotely and receive the test results from the remote machine, although TestArchitect Client is closed on the local machine, even before the remote execution is complete.
13. [Displaying test results in a browser](/user-guide/working-with-test-results/displaying-test-results-in-a-browser)  
TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results.
14. [Distributed result storage](/user-guide/working-with-test-results/distributed-result-storage)  
You can store test results across multiple locations as an alternative to a centralized repository in TestArchitect Client.




**Related information**  


[Comparing test results](/user-guide/working-with-test-results/comparing-test-results/)

