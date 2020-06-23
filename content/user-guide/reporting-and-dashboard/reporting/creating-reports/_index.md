--- 
title: "Creating reports"
linktitle: "Creating reports"
description: "Reports can be produced for entire projects or for specified project items."
weight: 1
aliases: 
    - /TA_Help/Topics/Report_producing.html
keywords: "reports, creating, producing, test modules, reporting, test cases, test objectives, user-defined actions, actions, interface entities, test suites, test results"
---

Reports can be produced for entire projects or for specified project items.

1.  Invoke the **Create Reports** submenu to select a report type by doing one of the following:

    -   In the TestArchitect explorer tree, right-click a project item master node containing the items to be reported on, and then select **Reporting** \> **Create reports**.

        ![](/images/TA_Help/Images/Project_reporting.png)

    -   In the TestArchitect explorer tree, select a project item master node containing the items to be reported on, and then on TestArchitect main menu, click **Reporting**.

        ![](/images/TA_Help/Images/TA_main_menu_reporting.png)

    -   On a [list view](/TA_Help/Topics/Projects_and_tests_list_view.html), right-click an item, and then select **Reporting** \> **Create reports**.

        ![](/images/TA_Help/Images/list_view_reporting.png)

    Depending on the type of node that the report is based on, TestArchitect displays the relevant report types.

2.  From the **Create Reports** submenu, select a report type.

    Available report types vary based on the selected node type in the TestArchitect explorer tree.

    |Node types|Available reports|
    |----------|-----------------|
    |****Project****|All report types are available, including test modules, test cases, test objectives, test suites, data sets, actions, interface entities, test results, test case results, and bugs.|
    |****Tests****|Test modules, test cases, and test objectives|
    |****Actions****|Actions|
    |****Data****|Data sets|
    |****Interfaces****|Interface entities|
    |****Test suites****|Test suites|
    |****Results****|Test results and test case results. {{<note>}} The report can only include test results residing in the repository \(not local results\).<br><br>|<br>
    |****Bugs****|Bugs|

3.  After selecting a report type to create, an **Edit Profile** panel appears in the main window, listing the options for defining the properties of the report \(see [customizing a report](/TA_Help/Topics/Report_customizing.html)\).

    ![](/images/TA_Help/Images/Edit_profile_panel.png)

4.  After setting up the desired report options, click **Show** to generate the report.


A panel appears in the main window displaying the details of the generated report.

{{<tip>}} When the length of a report is longer than a single panel page, page navigation links appear at the bottom of the panel.



