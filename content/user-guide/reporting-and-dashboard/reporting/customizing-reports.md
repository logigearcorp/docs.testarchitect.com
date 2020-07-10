--- 
title: "Customizing reports"
linktitle: "Customizing reports"
description: "TestArchitectoffers a wealth of features to allow you to create reports on your projects and tests, and customize those reports to meet your unique needs."
weight: 2
aliases: 
    - /TA_Help/Topics/Report_customizing.html
keywords: "reports, customizing, customization"
---

TestArchitectoffers a wealth of features to allow you to create reports on your projects and tests, and customize those reports to meet your unique needs.

The Edit Profile panel \(accessed via the [context menu in the TestArchitect explorer tree](/user-guide/reporting-and-dashboard/reporting/creating-reports#step.access_edit_profile_panel)\) enables you to specify which records are to appear in a report, how they are sorted, and which are included in the statistics. Once you have changed report settings, you can generate an updated report.

![](/images/TA_Help/Images/Edit_profile_panel.png)

## {{< expand >}} Selecting displayed attributes

The **Show** check box in the Test module attributes panel governs whether a given attribute is included in the records of a generated report.

## {{< expand >}} Sorting attributes {{< permerlink >}} {#Report_customizing__section_dr2_htp_14} 

The **Sort** check box in the Test module attributes panel enables the sorting of records in the generated report by their attributes. The selected attribute\(s\) serve as the key\(s\) by which the report is sorted. For example, if you want to sort by test module name, select the **Sort** check box for the **Name** attribute. When a **Sort** check box is selected, additional sort options are displayed, enabling you to fine tune the presentation of the report.

![](/images/TA_Help/Images/Edit_profile_panel_sort_check_box.png)

-   **level** option: Sets the sort priority for a given attribute with respect to other attributes that are being sorted on. Lower numbers have higher sort priority. For example, if the level for **Priority** is set to 1, and the level for **Status** is set to 2, the report is sorted first by **Priority** and then by **Status**. In other words, for cases where two or more records have the same **Priority** , TestArchitect sorts them by **Status**.
-   **desc** check box: Reverses the sort order \(from ascending to descending\) for the corresponding attribute.
-   **group** check box: Creates sections and section titles for records, grouping them by the corresponding attribute.

## {{< expand >}} Filtering attributes

Simple expressions can be used to filter the records that are included in a report. Selecting a **filter** check box for a given attribute causes a text box to be displayed in which you may define how the filter is to be applied. The **filter** text box accepts and evaluates logical expressions composed of one or more comparison terms. The filter expression is applied to each record and, in each case, if the result of that expression is true, that record is displayed in the report; otherwise, it is omitted.

![](/images/TA_Help/Images/Edit_profile_panel_sort_filter_box.png)

Each term of a filter expression applies a comparison against an attribute of the current record, and evaluates to TRUE or FALSE. The attribute, which is the left-hand operand of each term, may be explicitly written or implied. When omitted from the term, the current attribute is used as the operand. Otherwise, any attribute may be used in a given term, regardless of which attribute the filter expression "belongs" to. For example, the following 2 expressions are equivalent, but only when used within the filter expression of the **Priority** attribute:

-   `Priority = "high"`
-   `= "high"`

-   A comparison term consists of an operation applied against an attribute, using one of the following relational operators:

    |Relational operator|Meaning|
    |-------------------|-------|
    |=|equal to|
    |<\>|not equal to|
    |\>|greater than|
    |\>=|greater than or equal to|
    |<|less than|
    |<=|less than or equal to|
    |~|"like" \(used with wildcards\)|


-   As mentioned, filter expressions are built from one or more comparison terms. Terms are linked by the following logical operators:

    |Logical operators|Meaning|
    |-----------------|-------|
    |and|Value is TRUE if and only if both sides of the and operator are TRUE.|
    |or|Value is TRUE if either side of the or operator is TRUE.|

-   The asterisk \(\*\) character is used as a wildcard to represent any arbitrary string of characters \(including the empty string\). When using wildcards, the tilde \(~\) operator must be used in place of the equal-to \(=\) operator, to ensure that the asterisk is treated as a wildcard. Multiple wildcards may be used within a single comparison term. See the [example](/user-guide/reporting-and-dashboard/reporting/customizing-reports#li_g44_3g1_xn) below.

{{<note>}} Values must be surrounded by double quotation marks \("\). For date values, use the format `"yyyy-mm-dd`" . \(For example, "`2010-09-01"` for September 1st, 2010\).

Here are some example filtering expressions applied to the **Priority** attribute: in some cases the filtering is by **Priority** only; in others, by **Priority** plus another attribute \(**Status**\):

![](/images/TA_Help/Images/ug_Customizing_a_report_2.png)

{{<note>}}

-   For the filtering expression of a given attribute, it is generally not necessary to include expression terms relating to other attributes, since you can specify the filtering of each attribute within that attribute's own filtering expression. Hence, the last expression in the box above could also be specified as follows:

    ![](/images/TA_Help/Images/Edit_profile_panel.filtering_expressions.png)

-   All filtering expressions are combined with the logical `and` operator associating them. That is, only attributes satisfying all filtering expressions are displayed in the report.
-   The following example demonstrates how to use the tilde \(~\) operator and the wildcard \(\*\) character to performs matching expressions.

    ![](/images/TA_Help/Images/Edit_profile_panel_matching_expressions.png)


## {{< expand >}} Statistics

Each attribute can be used for generating statistics in the report. Statistic reports show you counts and sums. This report lists the total number of items for each unique value of a selected attribute. This is achieved by selecting the **Stats** check box of each attribute for which such stats are desired.

![](/images/TA_Help/Images/Edit_profile_panel_stats.png)

If you select sorting with grouping for another attribute, the statistics for the attributes with the **Stats** check box selected are displayed for each section that represents a specific value for the sorting attribute.

For date related attributes \(for example, **Last update date**, **Creation date**\), you can specify the period for which the statistics should be accumulated. For example, if you specify **month** for a given date attribute, the STATISTICS section reports the sums of all records for each unique month for that attribute.

![](/images/TA_Help/Images/Edit_profile_panel_stats_date.png)

## {{< expand >}} Subreports {{< permerlink >}} {#Report_customizing__section_uvw_3jp_cl} 

If a project item has related items, it is possible to include the related items in a report as a subreport. For example, in a report on test modules, you can use a subreport to display the test results for each test module.

To include a subreport, select the subreport type in the **Include subreport** drop-down list in the Sub report panel.

Available subreports vary based on the selected item.

|Items|Available subreports|
|-----|--------------------|
|**Test modules**|Related test results, related bugs, related test cases.|
|**Test cases**|Related run results, related steps, related bugs, related objectives.|
|**Test objectives**|Related run results, related test cases.|
|**Data sets**|\(None\)|
|**Actions**|Action arguments.|
|**Interface entities**|Interface elements.|
|**Test results**|Related test modules, related test cases.|
|**Test case results**|\(None\)|
|**Test suites**|\(None\)|
|**Bugs**|Related test modules, related test results, related test cases.|

{{<tip>}} To display all of the available attributes, click **All attributes**.

Suppose that you want to create a test module report which includes those tests which were a\), executed last month, and b\), produced a Failed result. Follow these steps:

1.  From the **Include subreport** drop-down list, select the **related test results** option.
2.  For the **Date of run** attribute:
    1.  Select the **Filter** check box, and then in the filter box enter ="last month".
    2.  Select the **Show** check box.
3.  For the **Result** attribute:
    1.  Select the **Filter** check box, and then in the filter box enter ="failed".
    2.  Select the **Show** check box.
4.  Click the **Show** button.

![](/images/TA_Help/Images/Edit_profile_panel_sub_report.png)

The test module report that matches the specified conditions is displayed.

![](/images/TA_Help/Images/Edit_profile_panel_sub_report_result.png)



## {{< expand >}} Control panel buttons

The toolbar of the Edit Profile panel offers the following buttons:

![](/images/TA_Help/Images/Reporting_control_panel_buttons.png)

1.  **Show** button: Display the report.
2.  **Save** button: Save the report as an HTML file.
3.  **Print** button: Print the report.
4.  **Select all** button: Select all check boxes.
5.  **Clear all** button: Clear all check boxes.
6.  **Save as test suite** button: Create a dynamic test suite based on the current report. See also [Creating a dynamic test suite](/user-guide/projects-and-project-items/project-items/test-suites/dynamic-test-suites/creating-a-dynamic-test-suite).

    {{<note>}} Initially, when a report is created, the **Save as test suite** button is disabled. To enable that button, you must [save the report profile](/user-guide/reporting-and-dashboard/reporting/saving-report-profiles) in advance.





