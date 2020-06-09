--- 
title: "Filtering dataTutorial: Filtering data"
linktitle: "Filtering dataTutorial: Filtering data"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/tutDashboard_filtering_data.html
---

In this activity, you will restrict the items of data being used for a panel to those which matches a set of criteria that you define.

**Before proceeding:**

-   Ensure that you have a basic understanding of the TestArchitect Dashboard before creating a chart panel.
-   [A Dashboard portal, connected to the Sample Repository, should be open](tutDashboard_launching_Dashboard.html) in your browser.
-   Ensure that you have created a Test Results \(unfiltered\) data profile as specified in the section [Creating a data profileTutorial: Creating a data profile](tutDashboard_creating_a_data_profile.html).
-   You should also now have a Tutorial Page with the panel Car Rental Test Results Overview, as was created in the section [Creating a chartTutorial: Creating a chart](tutDashboard_creating_a_chart.html).

Our task now is to create a pie chart similar to the first, except that we limit it to reporting only on the test results of the latest build.

**Note:** You have two options for filtering the data that's supplied to a Dashboard panel. You can do it in the data profile used by that panel, or in the configuration of the panel itself.

**Note:** Keep in mind, though, that a data profile can drive more than a single Dashboard panel. Hence, modifying the settings of an existing data profile can have unintended consequences, if you don't know all the panels that rely on it. For that reason, while we will use the existing Test Results \(unfiltered\) profile, we will do our filtering at the panel level.

1.  Create a clone of the Car Rental Test Results Overview panel.

    1.  Click the **Clone Panel** icon ![](/TA_Help/Images/Dashboard_clone_panel_icon.png) at the top-right corner of the Car Rental Test Results Overview panel.

    2.  In the Clone Panel dialog, select **Tutorial Page** from the **Select page** drop-down menu, and set **Display Name** to Car Rental Test Results, Latest Build. Click OK.

        A new panel, identical to the first except for the display name, is created.

2.  Add a filter to the new panel.

    1.  Click the **Edit Panel** icon ![](/TA_Help/Images/Dashboard_edit_panel_icon.png) at the top-right corner of the Car Rental Test Results, Latest Build panel.

    2.  Click the **Filters** tab in the Edit Panel dialog.

    3.  In the **Filters** tab, create the filter by setting the following fields:

        ![](/images//Images/tut.Dashboard.Edit_Panel.Filter.Lastest_Build.png)

        -   **Field**: Build Number
        -   **Operator**: =
        -   **Value**: latest build
    4.  Click on the **Display Settings** tab.

    5.  **Note:** The **Chart Title** of Summarized test results across test modules and dates no longer applies to this chart. Since we already have a name for the panel, let's just make **Chart Title** invisible.

        Under Chart Settings, clear the **Show Title** check box.

    6.  **Note:** You can also change some other display settings, to see their effect.

        Under Chart Settings, set **Legends** to None; On the **Data Labels** line, select the **Series** check box, and clear the **Percentage** check box.

    7.  Select the **Save current chart settings** check box, and click **OK**.

    The new chart is displayed which, while based on the same criteria as the previous one, uses a limited set of test results. Drilling down to the individual data records confirms that they are indeed all restricted to a single build:

    ![](/images//Images/tut.Dashboard.chart-drill_down.Car_Rental_Latest_Build.01.png)


What you have learned:

-   How to restrict the set of data driving a Dashboard panel by means of filtering.
-   That filters can be created in either a data profile or a data panel.
-   That a filter in a data profile affects all data panels driven by that profile, whereas a panel-based filter is limited to a single panel.

**Parent topic:**[Lesson \#9: Creating Dashboard panelsDashboard tutorials](/TA_Tutorials/Topics/tutDashboard_creating_panels.html)

**Previous topic:**[Creating a chartTutorial: Creating a chart](/TA_Tutorials/Topics/tutDashboard_creating_a_chart.html)

**Next topic:**[Creating a line chartTutorial: Creating a line chart](/TA_Tutorials/Topics/tutDashboard_line_chart.html)

**Parent topic:**[Lesson \#9: Creating Dashboard chartsDashboard tutorials](/TA_Help/Topics/Dashboard_tutorials.html)

**Previous topic:**[Creating a chartTutorial: Creating a chart](/TA_Tutorials/Topics/tutDashboard_creating_a_chart.html)

**Next topic:**[Creating a line chartTutorial: Creating a line chart](/TA_Tutorials/Topics/tutDashboard_line_chart.html)

