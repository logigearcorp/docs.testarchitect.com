--- 
title: "Creating a data profileTutorial: Creating a data profile"
linktitle: "Creating a data profileTutorial: Creating a data profile"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/tutDashboard_creating_a_data_profile.html
---
# Creating a data profileTutorial: Creating a data profile {#tutDashboard_creating_a_data_profile .task}

In this activity, you will create a data profile.Data profiles are required by all Dashboard panels, to supply them with data and other settings.

**Before proceeding:**

-   Ensure that you have a basic understanding of the TestArchitect Dashboard and its purpose.
-   [A Dashboard portal, connected to the Sample Repository, should be open](tutDashboard_launching_Dashboard.html) in your browser.

A Dashboard panel, be it a chart, heat map, indicator or report, is driven by a data profile. A data profile specifies the source\(s\) of the data \(one or two item of the connected repository\), restrictions \(in the form of filters\) on how much of that data is used, and other settings that determine how the data is displayed in various contexts.

1.  On the Dashboard tool bar, point to **Global Setting** and select **Create Profile**

    ![](../../TA_Help/Images/Dashboard_create_profile.png)

2.  On the General Settings page, enter the following information then click **Next**:

    ![](../Images/Profile.Results_unfiltered.png)

    -   **Name**: Test Results \(unfiltered\).
    -   **Item Type**: Test Results. This is the principal project item from which the data profile will obtain data.
    -   **Related Data**: leave this field blank.
3.  On the Display Fields page, select the check boxes for the fields **Name**, **Build Number**, **Date of run**, and **Result**, then click **Finish**.

    ![](../Images/Profile.Display_Fields_Results.png)


Upon completion of the setup, the list of existing data profiles of the repository is displayed, with the new data profile included in the list.

What you have learned:

-   How to create a Dashboard data profile.
-   How to configure a Dashboard data profile for a specific data source.

**Parent topic:**[Lesson \#9: Creating Dashboard panelsDashboard tutorials](../../TA_Tutorials/Topics/tutDashboard_creating_panels.html)

**Previous topic:**[Launching DashboardTutorial: Launching Dashboard](../../TA_Tutorials/Topics/tutDashboard_launching_Dashboard.html)

**Next topic:**[Creating a chartTutorial: Creating a chart](../../TA_Tutorials/Topics/tutDashboard_creating_a_chart.html)

**Parent topic:**[Lesson \#9: Creating Dashboard chartsDashboard tutorials](../../TA_Help/Topics/Dashboard_tutorials.html)

**Previous topic:**[Launching DashboardTutorial: Launching Dashboard](../../TA_Tutorials/Topics/tutDashboard_launching_Dashboard.html)

**Next topic:**[Creating a chartTutorial: Creating a chart](../../TA_Tutorials/Topics/tutDashboard_creating_a_chart.html)

