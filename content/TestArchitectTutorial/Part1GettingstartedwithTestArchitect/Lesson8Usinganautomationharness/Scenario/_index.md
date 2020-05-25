--- 
title: "Scenario"
linktitle: "Scenario"
aliases: 
    - /TA_Tutorials/Topics/WPF_extensibility_scenario.html
---
# Scenario {#concept_wdy_rnh_jm .concept}

Suppose that we are running an AUT based on Telerik controls, and we may want to get the total number of items in a list box control.

![](../Images/WPF_extensiblity_AUT.png)

We will explore a typical method of obtaining the total number of items by mapping the unknown RadListBox control to a known TestArchitect class, and then use the control’s [get list item count](../../TA_Automation/Topics/bia_get_list_item_count.html) to get the total number of items in an unknown list box control. Although class mapping is the most intuitive way of obtaining the total number of items, the result is incorrect, and, thus, necessitates an alternative method by using the WPF Extensibility solution; this method overrides the built-in action get list item count using the features in WPF Extensibility.

1.  [Mapping unknown class](../../TA_Tutorials/Topics/WPF_Extensibility_mapping_unknown_class.html)  
In this method, we will map the Telerik list box control to a supported TA class, list box in this example, and use the built-in action get list item count.
2.  [WPF Extensibility solution](../../TA_Tutorials/Topics/WPF_Extensibility_solution.html)  
The WPF Extensibility solution provides a public API which you can use to override TestArchitect's built-in actions.

**Parent topic:**[Lesson \#10: WPF Extensibility](../../TA_Tutorials/Topics/WPF_extensibility_creating.html)

**Next topic:**[Technical reference](../../TA_Tutorials/Topics/WPF_extensibility_techinical_reference.html)

