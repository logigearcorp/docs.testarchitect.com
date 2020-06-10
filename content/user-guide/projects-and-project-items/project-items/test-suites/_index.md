--- 
title: "Test suites"
linktitle: "Test suites"
weight: 3
aliases: 
    - /TA_Help/Topics/Test_suite.html
---

A test suite is a collection of test modules of a project. Test modules organized into a given test suite usually have some common feature for which it makes sense to have them grouped together, generally for execution purposes.

Unlike a test folder, which acts as a container for test modules, a test suite is more analogous to a song playlist in a music player application. Rather than acting as a container for the test modules themselves, a test suite essentially contains a set of *pointers* to test modules. One thing this means is that there is no limit to the number of test suites to which a given test module can belong. Note also that adding, deleting, or moving test modules amongst test suites has no effect on their arrangements within the project's test folders. Likewise, you can move a test module between test folders without worrying about "breaking" the pointers to it in the test suites.

The contents of a test suite can be created either manually \([static test suites](/TA_Help/Topics/Test_suite_static.html)\) or algorithmically \([dynamic test suites](/TA_Help/Topics/Test_suite_dynamic.html)\). Manual creation is simply a matter of dragging and dropping. With dynamic test suites, criteria that you set up for a given test suite specify which test modules are to belong to it. Membership in such test suites can, accordingly, change on the fly.

Test suites are especially useful for the following types of test:

-   **Build verification test**: A collection of test modules that performs basic validation of most the functional areas in the product. The test modules are executed on each new build of a product before the build is released to the test team for further testing.
-   **Smoke test**: A collection of test modules that ensures basic product functionality. Smoke tests are preliminary testing that is performed after changes are made to the AUT.
-   **Functional verification tests**: A collection of test modules that focus on a specific function. The test modules are executed to ensure that all aspects of the specific feature are tested.
-   **Regression tests**: A collection of test modules that is used to ensure that changes made to the AUT, such as enhancements, patches, etc., have not introduced new defects.

1.  [Static test suites](/TA_Help/Topics/Test_suite_static.html)  
A static test suite is a collection of test modules that are grouped manually for test execution purposes.
2.  [Dynamic test suites](/TA_Help/Topics/Test_suite_dynamic.html)  
A dynamic test suite is a collection of test modules whose membership is determined dynamically, based on the criteria specified in an associated data profile.
3.  [Moving test suites, test suite folders, and modules](/TA_Help/Topics/Test_suite_cut_copy_paste.html)  
Static and dynamic test suites, test suite folders, and modules within the same project can be moved and copied around the TestArchitect explorer tree.
4.  [Executing a test suite](/TA_Help/Topics/Test_suite_executing.html)  
Both static test suites and dynamic test suites can be executed from the **Execute Test** dialog box.

**Parent topic:**[Project items](/TA_Help/Topics/Project_items_def.html)

**Previous topic:**[Data sets](/TA_Help/Topics/Projects_and_tests_dataset.html)

**Next topic:**[TestArchitect bugs](/TA_Help/Topics/Bugs.html)

