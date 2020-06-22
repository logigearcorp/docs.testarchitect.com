--- 
title: "The test module and template"
linktitle: "The test module and template"
description: "By default, test modules present a template that assists you in creating well-formed tests, ones that conform to the Action Based Testing methodology."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/The_test_module_template.html
keywords: "template, test modules, test case section, test objective section, initial section, final section"
---

By default, test modules present a template that assists you in creating well-formed tests, ones that conform to the Action Based Testing methodology.

## Test modules

The test module is the work file in which you create tests. Its essence is to contain a group of test cases with a similar, and if possible narrowly-defined, scope. A TestArchitect project is typically comprised of multiple test modules, which are often grouped into folders and subfolders of the project. Test modules should be designed to run independently from each other, while the test cases within a test module can have dependencies among themselves.

## The test module template

Upon creation, TestArchitect populates the test module with headings for a recommended template:

{{<tip>}} Test modules should be designed to run independently from each other, while the test cases within a test module can have dependencies among themselves.

1.  The **TEST MODULE** heading: As a documentary line, this heading is fixed at row 1, and is the only non-optional, non-deletable heading in a test module.
2.  The **OBJECTIVES** heading: The OBJECTIVES section holds every objective that is associated with the test cases. The objectives listed in it define the scope of the test module. They allow readers to understand why test cases are designed the way they are, and give an auditor a quick insight into the correctness and, more importantly, completeness of a test.

{{<note>}} Only the [test objective](/reuse/../TA_Automation/Topics/bia_test_objective.html) built-in action is allowed to appear in the OBJECTIVE section. Otherwise, the following error dialog box appears.

    ![](/images/TA_Tutorials/Images/tut_TM_template_error_1.png)

3.  The **INITIAL** heading: The `INITIAL` section of a test module is useful for holding action lines that are required for initialization of the test, especially when such initialization is required for all or most of the test cases in the module. For example, lines for launching the application under test, initializing it, etc., would typically appear here.
4.  A **TEST CASE** heading. This is a representative heading, accompanied by a representative **test objective** line, both of which are presented as a reminder of their utility. Typically, your test might have multiple test cases, each of which may have one or more test objectives associated with it.

{{<note>}} Before entering the test objectives of a test case under the **TEST CASE** heading, you must document all test objectives of your test under the **OBJECTIVES** heading. Otherwise, the below error dialog box appears.

    ![](/images/TA_Tutorials/Images/tut_TM_template_error_2.png)

5.  A **FINAL** heading. Any warranted cleanup operations upon test completion, such as closing the application under test, would typically appear here.

A typical test module should resemble the following:

![](/images/TA_Tutorials/Images/tut_TM_template_warning_1.png)

Of the above, [INITIAL](/reuse/../TA_Automation/Topics/bia_initial.html), [FINAL](/reuse/../TA_Automation/Topics/bia_final.html), [TEST CASE](/reuse/../TA_Automation/Topics/bia_test_case.html), and [TEST OBJECTIVE](/reuse/../TA_Automation/Topics/bia_test_objective.html) are all built-in actions. They are not, however, executed at run time. Instead, they serve two purposes:

1.  First, they serve a documentary and organizational function. This is especially true of [TEST CASE](/reuse/../TA_Automation/Topics/bia_test_case.html) and [TEST OBJECTIVE](/reuse/../TA_Automation/Topics/bia_test_objective.html), which specify the roles of sections of your action lines in the context of an overall test plan.
2.  Second, the [INITIAL](/reuse/../TA_Automation/Topics/bia_initial.html), [FINAL](/reuse/../TA_Automation/Topics/bia_final.html), and [TEST CASE](/reuse/../TA_Automation/Topics/bia_test_case.html) actions serve as entry points for execution. At the start of your execution run, you may specify exactly which of these sections of action lines are to be included in the run.

If you do not follow the recommended test module template, as discussed above, a warning dialog box appears when you save your test module. You may ignore the warning dialog box by clicking the **Continue Anyway** button.

![](/images/TA_Tutorials/Images/tut_TM_template_warning_1.png)




**Related information**  


[Test Modules](/TA_Help/Topics/ABT_Test_module.html)

