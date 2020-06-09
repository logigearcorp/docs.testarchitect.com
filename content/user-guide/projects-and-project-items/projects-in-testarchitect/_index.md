--- 
title: "Projects in TestArchitect"
linktitle: "Projects in TestArchitect"
weight: 1
aliases: 
    - /TA_Help/Topics/Projects_def.html
---

A TestArchitect project is a container for all assets required for your testing efforts relating to a specific project. A project is included in a repository, and may coexist with other projects in that repository.

As a means of implementing the module-oriented Action Based Testing methodology, a TestArchitect project consists primarily of eight families of assets: test modules, data sets, actions, interfaces, test suites, bugs, picture checks, and results. We call these assets the project items.

![](/images//Images/TA_project_tree_structure.png)

Test procedures are authored in the [test modules](/reuse/../TA_Help/Topics/ABT_Test_module.html) test modules and [actions](/reuse/reuse.Creating_and_using_actions.html). Test modules provide the more generalized business logic, with actions offering the lower-level "building blocks" of the test implementation. This modularity provides for faster development of tests, improved division of labor, re-usability of test components, and rapid adaptation to changes in AUT \(application under test\) versions and platforms.

With the use of [data sets](/reuse/../TA_Tutorials/Topics/Data_driven_testing_overview.html), test data can be completely isolated from the test procedures. This renders tests more manageable. It also provides for the flexibility of allowing new sets of test data to be introduced at will, with no modification of test procedures required.

Test modularity, as well as readability, is further enhanced through the presence of TestArchitect [interfaces](/reuse/../TA_Help/Topics/Interface_def.html). These versatile project items map application-specific identifiers of windows and controls to logical names of your choosing. This allows user-friendly names to be used to reference GUI elements of the AUT within your actions and test modules. The major benefit is that test procedures can be isolated from changes to the user interface of a tested application, further reducing maintenance overhead.

[Picture checks](/reuse/../TA_Help/Topics/Projects_and_tests_picture_check.html) are reference images, also referred to as baseline pictures. They are used to verify the correctness of pictures and graphics displayed by the AUT during testing.

Finally, for each test run, TestArchitect generates a [report](Test_result.html) containing the results of the automated test.



1.  [Create a new project](/TA_Help/Topics/Projects_and_project_items_create_project.html)  
You create a project to organize and store project information in TestArchitect.
2.  [Delete a project](/TA_Help/Topics/Projects_and_project_items_delete_project.html)  
Deleting a project removes the entire project, including actions, tests, data, results, etc., from the repository.
3.  [Rename a project](/TA_Help/Topics/Projects_and_project_items_rename_project.html)  
Renaming a project only changes the project's name and not its content.
4.  [Display latest test result](/TA_Help/Topics/Projects_and_project_items_display_latest_test_result.html)  
You can quickly display the latest test result for a project from the project's context menu.
5.  [Project subscription](/TA_Help/Topics/Project_subscription.html)  
Project subscription aids in large-scale, complex test development. Tests distributed over multiple projects are allowed to share actions, interface definitions, data sets, and picture checks. \(Note that, in the case of picture checks, only [*shared* picture checks](/TA_Glossary/Topics/glossarySharedPictureCheck.html) can be subscribed to.\)
6.  [Execute test](/TA_Help/Topics/Projects_execute_test.html)  
After creating a project, adding necessary test modules, and defining relevant actions and interfaces for those test modules, you are ready to execute the project’s test modules.
7.  [Assign user](/TA_Help/Topics/Projects_assign_user.html)  
You can restrict access to a project by granting permissions to selected users.
8.  [Search](/TA_Help/Topics/Projects_search.html)  
TestArchitect searches the entire project and returns all tokens matching the searched items.
9.  [Reporting](/TA_Help/Topics/Projects_reporting.html)  
Reports can be created for the entire project or a subtree of the project.

**Parent topic:**[Projects and project items](/TA_Help/Topics/Projects_and_project_items.html)

**Next topic:**[Project items](/TA_Help/Topics/Project_items_def.html)

