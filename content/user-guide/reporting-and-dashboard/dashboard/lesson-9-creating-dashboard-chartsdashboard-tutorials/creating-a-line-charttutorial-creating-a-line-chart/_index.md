--- 
title: "Creating a line chartTutorial: Creating a line chart"
linktitle: "Creating a line chartTutorial: Creating a line chart"
weight: 5
weight: 5
aliases: 
    - /TA_Tutorials/Topics/tutDashboard_line_chart.html
---

In this activity, you will create a line chart to highlight changes in test outcomes over time.

**Before proceeding:**

-   Ensure that you have a basic understanding of the TestArchitect Dashboard before creating a chart panel.
-   [A Dashboard portal, connected to the Sample Repository, should be open](tutDashboard_launching_Dashboard.html) in your browser.
-   Ensure that you have created a Test Results \(unfiltered\) data profile as specified in the section [Creating a data profileTutorial: Creating a data profile](tutDashboard_creating_a_data_profile.html).

Line charts are one of the best ways to visualize trends relating to quantitative data - that is, changes in numeric values over time. Hence, you will create a line chart that displays how the Passed, Failed, and Passed with Warnings/Errors results for the test modules of the Car Rental project have changed over time.

1.  As before, you can work with the Test Results \(unfiltered\) data profile, which provides test results from all the historical Car Rental tests.
2.  Create a new Dashboard panel with the following settings:

    -   **Type**: Chart
    -   **Data Profile**: Test Results \(unfiltered\)
    -   **Display Name**: Car Rental Test Results Trend
    -   **Chart Type**: Line
    -   **Category**: Date of run
    -   **Caption** \(for **Category**\): Date of run
    -   **Time Frame**: Day
    -   **Series**: Result
    -   **Caption** \(for **Series**\): Occurrences
    -   **Data Labels**: Value
    1.  From the **Global Setting** icon ![](/images//Images/icn.Dashboard.Global_Setting.png) of the Dashboard's tool bar, select **Create Panel**.

    2.  In the Add New Panel dialog, enter the values as specified above, and click **OK**.

        ![](/images//Images/tut.Dashboard.Add_New_Panel.Car_Rental.Trend.Line_chart.01.png)

    The resulting chart displays distinct, color-coded lines for each member of the set defined by the **Series** field. \(In this case, that set is Result, which contains three members: Passed, Failed, and Passed with Warnings/Errors. Hence, there are three colored lines in this chart.\) The items of the **Category** field \(in this case, the run dates of the tests\) are displayed in left-to-right ascending order along the horizontal x-axis. The y-axis values represent counts for each possible Result. Hence the height \(y-axis value\) of any given point on one of the lines represents the number of occurrences of that particular result \(Passed, Failed, and Passed with Warnings/Errors\) for the run date at that particular location on the x-axis.

    ![](/images//Images/tut.Dashboard.line_chart.Car_Rental.results_trend.01.png)


What you have learned:

-   The advantages of line charts in visualizing data changes over a range, such as time.
-   How to configure a data panel to present a line chart.

**Parent topic:**[Lesson \#9: Creating Dashboard panelsDashboard tutorials](/TA_Tutorials/Topics/tutDashboard_creating_panels.html)

**Previous topic:**[Filtering dataTutorial: Filtering data](/TA_Tutorials/Topics/tutDashboard_filtering_data.html)

**Next topic:**[Creating a stacked bar chartTutorial: Creating a stacked bar chart](/TA_Tutorials/Topics/tutDashboard_stacked_bar_chart.html)

**Parent topic:**[Lesson \#9: Creating Dashboard chartsDashboard tutorials](/TA_Help/Topics/Dashboard_tutorials.html)

**Previous topic:**[Filtering dataTutorial: Filtering data](/TA_Tutorials/Topics/tutDashboard_filtering_data.html)

**Next topic:**[Creating a stacked bar chartTutorial: Creating a stacked bar chart](/TA_Tutorials/Topics/tutDashboard_stacked_bar_chart.html)

