--- 
title: "Create a new project"
linktitle: "Create a new project"
description: "You create a project to organize and store project information in TestArchitect."
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_and_project_items_create_project.html
keywords: "projects, creating"
---

You create a project to organize and store project information in TestArchitect. When you create a new project, TestArchitect automatically generates the containers \(such as a **Tests** folder, **Actions** folder, etc.\) for the [project items](/user-guide/projects-and-project-items/projects-in-testarchitect/#section.overview.project_items) \(test modules, actions, etc.\) that will belong to the project. Users can be logically assigned to a project, allowing them to work in it.

Ensure that your TestArchitect Client is running and connected to a repository.

To create a new project:

1.  Assuming you already have a [repository](/user-guide/getting-started/working-with-repositories/creating-a-repository) to host your project, right-click its node in the TestArchitect explorer tree, then select **New Project**.

2.  In the New Project dialog box, enter the following information:

    -   **Name**: The project's name.
    -   **Key**: A key for the project, used as a prefix for TestArchitect bug IDs. \([registered](/user-guide/integration-with-third-party-tools/jira-integration/configuring-jira-integration/creating-registered-ta-bugs-with-jira-bug-tracker) and [unregistered](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/creating-unregistered-ta-bugs)\). This key may consist of alphabetic and/or numeric characters. It is suggested that you ensure it is unique across all your projects, for easy identification of your documented bugs.
    -   **Description**: A short description of the project.
3.  Click **Create** to create a new project.

    ![](/images/TA_Help/Images/ug_createproject.png)


The new project appears as a node under the repository node and contains the following project folders:

-   [**Tests**](/user-guide/projects-and-project-items/project-items/test-folders-and-test-modules): Contains test folders and test modules.
-   [**Data**](/user-guide/projects-and-project-items/project-items/data-sets/): Data sets that can be used in data-driven tests.
-   [**Actions**](/user-guide/actions/user-defined-actions/): User-defined actions available for the test modules.
-   [**Interfaces**](/user-guide/interface-definitions/): Definitions that recognize the interfaces of the application under test.
-   [**Test Suites**](/user-guide/projects-and-project-items/project-items/test-suites/): Used to organize and execute test modules based on certain criteria.
-   [**Bugs**](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/) Contains bugs in TestArchitect. Bugs are fails in automation runs which impair or prevent the functioning of the automated test.
-   [**Picture Checks**](/user-guide/projects-and-project-items/project-items/picture-checks/): Contain shared pictures for testing bitmaps presented by the AUT.
-   [**Results**](/user-guide/working-with-test-results/): Local and repository-based results of test runs.



