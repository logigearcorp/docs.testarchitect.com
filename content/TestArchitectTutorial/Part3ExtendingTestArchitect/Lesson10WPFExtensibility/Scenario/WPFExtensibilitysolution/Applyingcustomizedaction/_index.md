--- 
title: "Applying customized action"
linktitle: "Applying customized action"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_solution_applying.html
---
# Applying customized action {#task_bfl_hb3_jm .task}

You have customized the built-in action get list item count to work with Telerik’s list box control. Now, you will apply that customized action.

1.  Close the AUT if it is still running, and re-open it.

    ![](../Images/WPF_extensiblity_AUT.png)

2.  Reuse the following action line, which was created in the [earlier step](WPF_Extensibility_mapping_unknown_class.md#step_mrr_cg3_jm).

    ![](../Images/WPF_extensiblity_line_editor.png)

3.  Click **Execute** ![](../Images/btn.TAC_toolbar.Execute.png) on the toolbar to execute the test.

    The Execute Test dialog box appears.

4.  Click **Execute**.

    TestArchitect returns the actual total number of items, which is three. This actual number matches the expected number.

    ![](../Images/WPF_extensiblity_result_extensibility.png)


**Tip:** You can find a list of built-in actions that you can override in **NetExtensionLib** \> **ControlHandler**.

**Parent topic:**[WPF Extensibility solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution.html)

**Previous topic:**[Building the solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution_building_solution.html)

