--- 
title: "Viewing the test results"
linktitle: "Viewing the test results"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/tut_Harness_CSharp_bundle_running_get_list_row_value.html
---
# Viewing the test results {#task_dv2_qtf_ky .task}

Run a test using yourC\#-coded action, and ensure that it properly interacts with the target application.

**Before proceeding, ensure that you have:**

-   [Created a test case](tut_Harness_CSharp_bundle_creating_test_case_for_get_list_row_value.html) in TestArchitect which calls get list view row value, an action for retrieving the contents of a given row of a list view control.
-   [Created the C\# method](tut_Harness_CSharp_bundle_scripting_GUI-interfacing_action.html) getListViewRowValue\(\) to implement the get list view row value action, and [written the essential code](tut_Harness_CSharp_bundle_creating_new_code_script_module.html) to ensure that the execution of get list view row value results in control being directed to that method.

After creating the C\# bundle harness to implement the custom action get list view row value action, and writing a test case to invoke the user-scripted action, you can execute the test and verify the results:

1.  If you have not already done so, start the Music Library application by selecting **Start** \> **All Programs** \> **TestArchitect** \> **Samples** \> **Music Player Application**.

2.  In the application, click on the **Search** tab.

3.  In the Search criteria panel, select **Under 4000 Kb** for the **File size**.

4.  Click **Search**.

    The **Results** panel is populated with a list of songs matching the search criteria.

    ![](../../reuse/../TA_Tutorials/Images/tut_csharp_harness_get_selected_item_AUT.png)

5.  In TestArchitect, open the test module containing the get list view row value action you created in the lesson.

6.  With your test module displayed in the TestArchitect editor, click **Execute** ![](../../reuse/../TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

7.  Click **Automation Tools**.

    The Automation Tools dialog box appears.

8.  Select **CSharp\_Harness** from the **Playback Tool** options.

9.  In the **Executable\(s\)** text box, browse to \(![](../../TA_Help/Images/btn.browse-ellipsis.02.png)\) to the TestArchitect.Harness.Executor.exe file.

    By default, this file is located at <INSTALL\_DIR\>\\harness samples\\csharp\\executables, once TestArchitect is installed.

    ![](../Images/dlg.Automation_Tools.CSharp_bundle_settings_harness.png)

10. Click **OK** to return to the Execute Test dialog box.

11. In the Test Modules panel, expand the tree and select only test case TC 02 check box.

12. Click **Execute** to run the test.


Upon completion of the test, the results are displayed. Click on the **Result details** page and expand the final action line to view the value returned by the user-scripted action.

![](../Images/tut_csharp_get_selected_list_item_action_result.png)

**Parent topic:**[User-scripted C\# bundle harness action that interacts with GUI](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_action_that_interacts_with_GUI.html)

**Previous topic:**[Creating the GUI-interfacing test case for the user-scripted C\# bundle harness action](../../TA_Tutorials/Topics/tut_Harness_CSharp_bundle_creating_test_case_for_get_list_row_value.html)

