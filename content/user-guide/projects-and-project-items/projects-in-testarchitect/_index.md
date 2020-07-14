--- 
title: "Projects in TestArchitect"
linktitle: "Projects in TestArchitect"
description: "A TestArchitect project is a container for all assets required for your testing efforts relating to a specific project. A project is included in a repository, and may coexist with other projects in that repository."
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_def.html
keywords: "projects"
---

A TestArchitect project is a container for all assets required for your testing efforts relating to a specific project. A project is included in a repository, and may coexist with other projects in that repository.

As a means of implementing the module-oriented Action Based Testing methodology, a TestArchitect project consists primarily of eight families of assets: test modules, data sets, actions, interfaces, test suites, bugs, picture checks, and results. We call these assets the project items.

![](/images/TA_Help/Images/TA_project_tree_structure.png)

Test procedures are authored in the [test modules](/user-guide/introduction-to-action-based-testing/action-based-testing/test-modules) test modules and [actions](/user-guide/actions/). Test modules provide the more generalized business logic, with actions offering the lower-level "building blocks" of the test implementation. This modularity provides for faster development of tests, improved division of labor, re-usability of test components, and rapid adaptation to changes in AUT \(application under test\) versions and platforms.

With the use of [data sets](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-7-creating-data-driven-tests/data-driven-testing-overview), test data can be completely isolated from the test procedures. This renders tests more manageable. It also provides for the flexibility of allowing new sets of test data to be introduced at will, with no modification of test procedures required.

Test modularity, as well as readability, is further enhanced through the presence of TestArchitect [interfaces](/user-guide/interface-definitions/). These versatile project items map application-specific identifiers of windows and controls to logical names of your choosing. This allows user-friendly names to be used to reference GUI elements of the AUT within your actions and test modules. The major benefit is that test procedures can be isolated from changes to the user interface of a tested application, further reducing maintenance overhead.

[Picture checks](/user-guide/projects-and-project-items/project-items/picture-checks/) are reference images, also referred to as baseline pictures. They are used to verify the correctness of pictures and graphics displayed by the AUT during testing.

Finally, for each test run, TestArchitect generates a [report](/user-guide/working-with-test-results/) containing the results of the automated test.



1.  [Create a new project](/user-guide/projects-and-project-items/projects-in-testarchitect/create-a-new-project)  
You create a project to organize and store project information in TestArchitect.
2.  [Delete a project](/user-guide/projects-and-project-items/projects-in-testarchitect/delete-a-project)  
Deleting a project removes the entire project, including actions, tests, data, results, etc., from the repository.
3.  [Rename a project](/user-guide/projects-and-project-items/projects-in-testarchitect/rename-a-project)  
Renaming a project only changes the project's name and not its content.
4.  [Display latest test result](/user-guide/projects-and-project-items/projects-in-testarchitect/display-latest-test-result)  
You can quickly display the latest test result for a project from the project's context menu.
5.  [Project subscription](/user-guide/projects-and-project-items/projects-in-testarchitect/project-subscription/)  
Project subscription aids in large-scale, complex test development. Tests distributed over multiple projects are allowed to share actions, interface definitions, data sets, and picture checks. \(Note that, in the case of picture checks, only [*shared* picture checks](/user-guide/support/glossary-of-terms/shared-picture-check) can be subscribed to.\)
6.  [Execute test](/user-guide/projects-and-project-items/projects-in-testarchitect/execute-test)  
After creating a project, adding necessary test modules, and defining relevant actions and interfaces for those test modules, you are ready to execute the project’s test modules.
7.  [Assign user](/user-guide/projects-and-project-items/projects-in-testarchitect/assign-user)  
You can restrict access to a project by granting permissions to selected users.
8.  [Search](/user-guide/projects-and-project-items/projects-in-testarchitect/search)  
TestArchitect searches the entire project and returns all tokens matching the searched items.
9.  [Reporting](/user-guide/projects-and-project-items/projects-in-testarchitect/reporting)  
Reports can be created for the entire project or a subtree of the project.



