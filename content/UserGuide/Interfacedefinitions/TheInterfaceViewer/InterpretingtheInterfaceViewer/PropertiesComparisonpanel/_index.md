--- 
title: "Properties Comparison panel"
linktitle: "Properties Comparison panel"
weight: 4
aliases: 
    - /TA_Help/Topics/ug_Inteface_properties_comparison_panel.html
---
# Properties Comparison panel {#concept_fbc_pzb_ht .concept}

The fourth panel of the Interface Viewer, Properties Comparison, is of special value if and when you find that a defined interface element can no longer identify a control in your test application. This panel displays the differences between the defined property values in the interface element and the actual \(just-captured\) values of those properties in the corresponding control, allowing you to understand why that interface element is no longer able to identify the control.

The contents of this panel are displayed only when an interface element from the Interface Elements panel is selected. Note that for an unmatched element, TestArchitect has no good way of figuring out which control it was intended to identify. Hence, to view a comparison of respective property values in Properties Comparison, it is also necessary that you determine, and then select, the correct control node in the [UI Explorer](ug_Interface_UI_explorer_panel.html) panel. This results in value\(s\) being displayed in the **Current Value** column.

![](../Images/Properties_comparison_panel.png)

The Properties Comparison panel consists of three fields for each row:

-   **Property Name**: A property defined for the selected \(in the Interface Elements panel\) interface element.
-   **Current Value**: The actual \(just-captured\) value of that property for the control represented by the currently selected node in the UI Explorer panel.
-   **Defined Value**: The value defined for that property in the selected interface element.

**Note:**

-   More than one row may appear in the panel, as any given interface element can be defined by more than one TA property.
-   When there are differences between the defined and actual values of a control property, they are indicated with red text.

## Comparing unmatched interface entities and windows { .section}

Unlike the case for interface elements \(controls\), property comparisons for unmatched interface entities \(windows, dialogs, etc.\) are presented in the Viewer's [Properties panel](ug_Interface_properties_panel.html). When a window node is selected in UI Explorer and the active tab in TestArchitect Client holds an interface entity, *and* the two do not match, the Properties panel goes into Property Comparison mode. An additional column, **Defined value**, displays property values defined in the interface entity, while **Current Value** displays the actual \(just-captured\) values from the application window. Again, non-matching values are indicated with red text.

![](../Images/Properties_comparison_panel_interface_entity.png)

**Parent topic:**[Interpreting the Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_reading.html)

**Previous topic:**[Interface Elements panel](../../TA_Help/Topics/ug_Interface_panel.html)

**Next topic:**[Toolbar](../../TA_Help/Topics/ug_Interface_viewer_toolbar.html)

