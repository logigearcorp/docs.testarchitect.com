--- 
title: "Scenario"
linktitle: "Scenario"
description: "Suppose that we are running an AUT based on Telerik controls, and we may want to get the total number of items in a list box control."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/WPF_extensibility_scenario.html
keywords: "extensibility, tutorial, scenario, WPF extensibility, scenario"
---

Suppose that we are running an AUT based on Telerik controls, and we may want to get the total number of items in a list box control.

![](/images/TA_Tutorials/Images/WPF_extensiblity_AUT.png)

We will explore a typical method of obtaining the total number of items by mapping the unknown RadListBox control to a known TestArchitect class, and then use the control’s [get list item count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-list-item-count) to get the total number of items in an unknown list box control. Although class mapping is the most intuitive way of obtaining the total number of items, the result is incorrect, and, thus, necessitates an alternative method by using the WPF Extensibility solution; this method overrides the built-in action get list item count using the features in WPF Extensibility.

1.  [Mapping unknown class](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-10-wpf-extensibility/scenario/mapping-unknown-class)  
In this method, we will map the Telerik list box control to a supported TA class, list box in this example, and use the built-in action get list item count.
2.  [WPF Extensibility solution](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-10-wpf-extensibility/scenario/wpf-extensibility-solution/)  
The WPF Extensibility solution provides a public API which you can use to override TestArchitect's built-in actions.



