--- 
title: "Create a new project"
linktitle: "Create a new project"
description: "You create a project to organize and store project information in TestArchitect."
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_and_project_items_create_project.html
keywords: "projects, creating"
---

You create a project to organize and store project information in TestArchitect. When you create a new project, TestArchitect automatically generates the containers \(such as a **Tests** folder, **Actions** folder, etc.\) for the [project items](/TA_Help/Topics/Projects_def.html#section.overview.project_items) \(test modules, actions, etc.\) that will belong to the project. Users can be logically assigned to a project, allowing them to work in it.

Ensure that your TestArchitect Client is running and connected to a repository.

To create a new project:

1.  Assuming you already have a [repository](/TA_Help/Topics/Repository_creating.html) to host your project, right-click its node in the TestArchitect explorer tree, then select **New Project**.

2.  In the New Project dialog box, enter the following information:

    -   **Name**: The project's name.
    -   **Key**: A key for the project, used as a prefix for TestArchitect bug IDs. \([registered](/TA_Help/Topics/JIRA_creating_registered_bugs.html) and [unregistered](/TA_Help/Topics/JIRA_creating_unregistered_bugs.html)\). This key may consist of alphabetic and/or numeric characters. It is suggested that you ensure it is unique across all your projects, for easy identification of your documented bugs.
    -   **Description**: A short description of the project.
3.  Click **Create** to create a new project.

    ![](/images/TA_Help/Images/ug_createproject.png)


The new project appears as a node under the repository node and contains the following project folders:

-   [**Tests**](/TA_Help/Topics/Projects_and_tests_test_folders_and_test_modules.html): Contains test folders and test modules.
-   [**Data**](/TA_Help/Topics/Projects_and_tests_dataset.html): Data sets that can be used in data-driven tests.
-   [**Actions**](/reuse/reuse.High_level_actions.html): User-defined actions available for the test modules.
-   [**Interfaces**](/TA_Help/Topics/Interface_def.html): Definitions that recognize the interfaces of the application under test.
-   [**Test Suites**](/TA_Help/Topics/Test_suite.html): Used to organize and execute test modules based on certain criteria.
-   [**Bugs**](/TA_Help/Topics/Bugs.html) Contains bugs in TestArchitect. Bugs are fails in automation runs which impair or prevent the functioning of the automated test.
-   [**Picture Checks**](/TA_Help/Topics/Projects_and_tests_picture_check.html): Contain shared pictures for testing bitmaps presented by the AUT.
-   [**Results**](/TA_Help/Topics/Test_result.html): Local and repository-based results of test runs.



