--- 
title: "Rearranging test modules in a dynamic test suite"
linktitle: "Rearranging test modules in a dynamic test suite"
weight: 3
aliases: 
    - /TA_Help/Topics/Test_suite_dynamic_rearrange_test_modules.html
---
# Rearranging test modules in a dynamic test suite {#dynamic_test_suites.rearrange .task}

When a dynamic test suite item is open in the test suite list view, the test module list is read-only. Test modules in a dynamic test suite can be reordered only by customizing the dynamic test suite's data profile.

Test modules included in a dynamic test suite are executed in the order in which they appear in the test suite list view. You can change the order of the contents of a dynamic test suite, in order to alter the sequence in which the test modules are run, by changing the criteria of the associated data profile. You might, for example, want to execute all the test modules in order of their priority. This can be done simply enough by selecting the **Sort** check box of the data profile's **Priority** attribute.

Note, however, that there are limitations to what you can do with the sort order of items in a dynamic test suite. If you want to order the test modules in some arbitrary way, you have two options:

1.  Use a [static test suite](Test_suite_item_static.html);
2.  Add a [user-defined field](../../TA_Administration/Topics/User_defined_fields_create.html) to the test module item definition in your repository. Assign values to that field for all the test modules of your dynamic test suite, so that sorting by that field causes the modules to be ordered as you prefer. Then modify the data profile of the test suite to sort by that field.

The following offers a simple example of rearranging the test modules in a dynamic test suite:

1.  In the TestArchitect explorer tree, right-click a dynamic test suite node residing under the project's **Test Suites** folder, then click **Edit data profile**.

    **Note:** If you right-click a static test suite node, the **Edit data profile** option is unavailable.

2.  In the Edit Profile panel, [customize](Report_customizing.html) the data profile so that the order of the test modules reflect your preferred sequence of execution.

    For example, you have created a customized data profile named Functional Tests, a list of test modules whose parent test folder's locations contain the string Functional. This list is currently sorted in the ascending order as illustrated in the screenshot below.

    ![](../Images/Edit_profile_panel_example.png "Before editing a data profile")

    Suppose that you may want to rearrange the test modules in the descending order, perform the following:

    1.  In the **Name** attribute, select the **Sort** check box.

        The **Sort** check box in the Test module attributes panel enables the sorting of records in the generated report by their attributes. \(See [Sorting attributes](Report_customizing.md#section_dr2_htp_14) for details.\)

        ![](../Images/Edit_profile_panel_example_Sort.png)

    2.  Select the **desc** check box to reverse the sort order \(from ascending to descending\) for the **Name** attribute.

        ![](../Images/Edit_profile_panel_example_desc.png "After editing a data profile")

3.  To verify that the test modules are reordered in the customized data profile, click the **Show** button.

    ![](../Images/Edit_profile_panel_example_after.png)

    The list of test modules that matches the new condition appears in the descending order.

4.  Click the **Update** button to save the changes to the customized data profile.

5.  In the confirmation dialog box, click **Yes**.

6.  In the TestArchitect explorer tree, double-click the dynamic test suite node whose data profile has been customized.


The test suite list view appears in the main panel. From the test suite list view, you can observe new test module's position customized from the data profile.

**Parent topic:**[Dynamic test suites](../../TA_Help/Topics/Test_suite_dynamic.html)

**Previous topic:**[Adding new test modules to a dynamic test suite](../../TA_Help/Topics/Test_suite_dynamic_add_new_test_module.html)

