--- 
title: "Converting test results generated in earlier versions to TestArchitect 8.3"
linktitle: "Converting test results"
description: "It is required to convert test results created in versions prior to TestArchitect 8.3 into the new XML format. This topic explains how to convert test results and several important notes for test result conversion."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_XML_result_conversion.html
keywords: "test results, XML conversion, results, XML result conversion"
---

It is required to convert test results created in versions prior to TestArchitect 8.3 into the new XML format. This topic explains how to convert test results and several important notes for test result conversion.

## General information

Since TestArchitect version [8.3](/user-guide/version-history/features-added-to-testarchitect-8-3/), [XML result model](/user-guide/working-with-test-results/) has been introduced to view test results in a web browser.

{{<important>}} XML result model provides the following advantages when compared to the previous result model.

-   Less memory footprint: The amount of memory that TestArchitect uses or references while opening and viewing test results is less.
-   Smaller parsing times: The operation process is faster, such as open test results, import/export test results, etc.
-   Smaller test result compression: Test results take up less hard drive space; therefore, the repository's size is reduced.

Test results generated in earlier TestArchitect versions must be converted to the current XML format, before you can view them. TestArchitect convert test results created in previous versions automatically when you first open them in TestArchitect Client.

{{<caution>}}

Test result conversion is a one-way process: the **converted test results cannot be opened in TestArchitect versions prior to 8.3**.

## Important notes for test result conversion

-   Before converting test results, remember to [back up your repository](/administration-guide/repository-server-management/backing-up-repositories),
-   Conversion duration might take up to several hours for colossal test results' size. It is advised that:
    -   Schedule to convert test results when your teams are idle;
    -   do not interact with the repository while the result conversion is taking place;
    -   do not abort the ongoing conversion process to prevent data corruption.
-   To save time, you can perform multiple result conversions simultaneously based on your machine configuration.
-   For primary-replication repositories, data is [synchronized](/administration-guide/repository-server-management/replication-repositories/synchronizing-data) between the primary repository and the replication repository when test result conversion happens. This synchronization might be slow in case of huge test results, long distance location, or network problems, etc. It is highly recommended that you do the following to convert test results:
    1.  Convert test results on the primary repository as usual. \([Learn more](/user-guide/working-with-test-results/converting-test-results/#section.convert_results).\)
    2.  [Export the primary repository](/administration-guide/repository-server-management/exporting-importing-repositories/exporting-repositories).
    3.  [Import the repository as a replication](/administration-guide/repository-server-management/exporting-importing-repositories/importing-a-repository-as-a-replication).
-   Viewing new XML results in a web browser:
    -   To view XML test results in the Internet Explorer browser, ensure that **Active Content** is enabled. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-internet-explorer-for-web-testing/advanced-settings#step_hlp_4dc_jy).\)
    -   It is highly recommended that you open test results in the Google Chrome browser, and also set Chrome as the default browser, because Chrome takes up less RAM while opening huge results compared to other web browsers.

## How to convert test results

-   Converting results interactively: To upgrade your test results to the current XML format:
    1.  In TestArchitect Client, from the TestArchitect explorer tree, select and double-click a test result.
    2.  TestArchitect automatically converts the test result to the new XML format and open it.
-   Converting results from the command line: To perform a mass XML conversion for a given repository, use XML Result Conversion command line tool instead on the repository server machine. \([Learn more](/user-guide/working-with-test-results/converting-test-results/xml-result-conversion-command-line-tool/).\)

-   **[XML Result Conversion command line tool](/user-guide/working-with-test-results/converting-test-results/xml-result-conversion-command-line-tool/)**  
 Converts all test results belonging to a given repository into XML test result format. Note that, run this tool on the repository server machine.




