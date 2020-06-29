--- 
title: "Creating a stacked bar chartTutorial: Creating a stacked bar chart"
linktitle: "Creating a stacked bar chartTutorial: Creating a stacked bar chart"
description: "In this activity, you will create a stacked bar chart, which is useful for visualizing changes in relative amounts of some quantities over a given range."
weight: 6
aliases: 
    - /TA_Tutorials/Topics/tutDashboard_stacked_bar_chart.html
keywords: "Dashboard, stacked bar chart, tutorial, tutorials, stacked bar chart"
---

In this activity, you will create a stacked bar chart, which is useful for visualizing changes in relative amounts of some quantities over a given range.

**Before proceeding:**

-   Ensure that you have a basic understanding of the TestArchitect Dashboard before creating a chart panel.
-   [A Dashboard portal, connected to the Sample Repository, should be open](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-9-creating-dashboard-panelsdashboard-tutorials/launching-dashboardtutorial-launching-dashboard) in your browser.
-   Ensure that you have created a Test Results \(unfiltered\) data profile as specified in the section [Creating a data profileTutorial: Creating a data profile](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-9-creating-dashboard-panelsdashboard-tutorials/creating-a-data-profiletutorial-creating-a-data-profile).

In the section [Creating a chartTutorial: Creating a chart](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-9-creating-dashboard-panelsdashboard-tutorials/creating-a-charttutorial-creating-a-chart), you created a pie chart that indicated the relative numbers of Passed, Failed, and Passed with Warnings/Errors results that occurred over a period of time. But how might you observe how those proportions have changed over time? One option would be to generate multiple pie charts, using filters to specify a different time range for each. But a better solution is to create a single stacked bar chart.

The stacked bar chart consists of a sequence of bars, distributed horizontally over a given range. \(In this instance, that range would be time.\) Each bar is composed of two or more stacked, color-coded “sub-bars”. In our case, a given colored sub-bar represents a particular result outcome, and its size represents the number of occurrences of that outcome for that particular time period. A stacked bar chart in this case also has the advantage of indicating the total number of tests performed in each time period, relative to the other periods. That information is given by the overall height of each bar in the chart.

1.  Once again, you can make use of the existing Test Results \(unfiltered\) data profile, which provides test results from all the historical Car Rental tests. Also note that the **Category** and **Series** values, as with your earlier [line chart](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-9-creating-dashboard-panelsdashboard-tutorials/creating-a-line-charttutorial-creating-a-line-chart), are again Date of run and Result.
2.  Create a new Dashboard panel with the following settings:

    -   **Type**: Chart
    -   **Data Profile**: Test Results \(unfiltered\)
    -   **Display Name**: Car Rental Test Results Relative Trends
    -   **Chart Type**: Stacked Bar
    -   **Category**: Date of run
    -   **Caption** \(for **Category**\): Date of run
    -   **Time Frame**: Day
    -   **Series**: Result
    -   **Caption** \(for **Series**\): Occurrences
    -   **Data Labels**: Value
    1.  From the **Global Setting** icon ![](/images/TA_Tutorials/Images/icn.Dashboard.Global_Setting.png) of the Dashboard's tool bar, select **Create Panel**.

    2.  In the Add New Panel dialog, enter the values as specified above, and click **OK**.

        ![](/images/TA_Tutorials/Images/New_Panel.Trend.Stacked_bar.png)

    3.  In the Panel Configuration dialog, select the following, then click **OK**:

        -   Select page****: Tutorial Page
        -   **Height**: 400
        -   **Folder**: Car Rental/Tests
    The resulting chart displays, for each date that a test took place, one to three stacked sub-bars: green forPassed results, yellow for Passed with Warnings/Errors, and red for Failed. The size of each sub-bar represents the relative number of outcomes of that result, while the size of each composite bar represents the total number of tests on that date:

    ![](/images/TA_Tutorials/Images/Dashboard.stacked_bar_results_trend.png)


What you have learned:

-   The advantages of stacked bar charts for presenting comparative ratios of numeric data over a range, such as time.
-   How to configure a Dashboard panel to present a stacked bar chart.




**Parent topic:**[Lesson \#9: Creating Dashboard chartsDashboard tutorials](/user-guide/reporting-and-dashboard/dashboard/lesson-9-creating-dashboard-chartsdashboard-tutorials/)



