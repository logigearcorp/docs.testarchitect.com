--- 
title: "Mapping unknown class"
linktitle: "Mapping unknown class"
description: "In this method, we will map the Telerik list box control to a supported TA class, list box in this example, and use the built-in action get list item count."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/WPF_Extensibility_mapping_unknown_class.html
keywords: "extensibility, tutorial, mapping unknown class, WPF extensibility, mapping unknown class"
---

In this method, we will map the Telerik list box control to a supported TA class, list box in this example, and use the built-in action get list item count.

To map the Telerik list box control to the supported TA class, list box, follow these steps:

1.  Open a Telerik sample application with a list box control.

2.  Launch TestArchitect Client, if it is not already running.

3.  Identify the Telerik list box control by using the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/).

    ![](/images/TA_Tutorials/Images/WPF_extensiblity_AUT_before_mapping.png)

    Because the Interface Viewer recognizes the Telerik list box control as an itemscontrol class, the built-in action [get list item count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-list-item-count) is unable to work on it. \(get list item count works only on controls of TA classes combobox, listbox, and listview.\)

4.  Map the items control class to the list box class:

    1.  Right-click the node **ListBoxTest** and select **Map to Other Known Class**.

    2.  In the **Map to Class** option, select the **listbox** class.

    3.  Click **OK**.

    4.  Capture the control again; the **RadListBox Control** node has been successfully mapped to the **list box** class.

        ![](/images/TA_Tutorials/Images/WPF_extensiblity_AUT_after_mapping.png)

5.  Enter the following script in TestArchitect editor.

    {{<note>}} You must capture windows and controls in advance before using them in your test scripts.

    ![](/images/TA_Tutorials/Images/WPF_extensiblity_line_editor.png)

6.  Click **Execute** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.Execute.png) on the toolbar to execute the test.

    The Execute Test dialog box appears.

7.  Click **Execute**.

    Based on the GUI of the selected Telerik AUT, TestArchitect’s result should return three for the total number of items.

    ![](/images/TA_Tutorials/Images/WPF_extensiblity_AUT.png)

    However, the total number of items is minus one which is incorrect.

    ![](/images/TA_Tutorials/Images/WPF_extensiblity_result_mapping.png)


To obtain the correct result, it is necessary to override the built-in action get list item count using the WPF Extensibility solution.



