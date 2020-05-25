--- 
title: "label property"
linktitle: "label property"
aliases: 
    - /TA_Help/Topics/Interface_def_label_property.html
---
# label property {#Interface_def.label_property .concept}

label is a TA property that TestArchitect assigns to a number of different types of controls. A control's label value is usually unique within a window, hence it often serves as a useful identifier, one that you can use to reliably map the control to a TA name.

label is a secondary property, in that its value for a given control is not simply copied from a native property of that control. Moreover, instead of deriving its value from one or more native properties of its own control, it gets its value from a neighboring control.

The following image from a typical dialog box illustrates why TestArchitect obtains a control's label value from a neighbor:

![](../Images/label_property.01.png)

At a glance, it's quite clear that the text to the left of the upper text box, Number of items, is descriptive of the value in that text box. However, that label belongs to an entirely different control, one of type textblock.

Clearly, the only thing connecting such controls is their proximity to each other. Hence, during a [window intake](Interface_def_intake.html), TestArchitect looks for all the controls of a window which normally appear with labels, but which rely on outside controls to provide them. It also surveys all the controls that typically serve as labels \(for example, label controls in Java, or textblock controls in WPF\). Then it employs an algorithm to pair up such controls.

**Note:** Not all labelled controls in a GUI interface rely on other controls to supply labels. For example, in most development platforms, the check box control provides its own label, taken from its caption property. TestArchitect does not apply the label-finding algorithm to these controls. The types of controls that accept external labels vary by development platform, but typically include such things as text boxes, password text, list boxes, list views, tables, combo boxes, tree views, and rich text fields.

**Note:** For purposes of this help topic, we'll refer to those controls that accept externally-supplied labels as label-accepting controls. When discussing a pair of label and label-accepting controls, we'll also refer to the latter as the *main* control.

A summary of the label-finding procedure follows. Details on some of the more technical definitions required for the algorithm's implementation are available in [label property - positional details](Interface_def_label_property_supplement.html).

## General overview { .section}

In the matching process for every main \(i.e., label-accepting\) control, TestArchitect looks first for any label controls to the left or right of the main control, and whose top or bottom edges are aligned with it. It also looks for labels above the main control whose left edges are aligned with that of the main control. Labels that exceed some threshold distance from the main control are eliminated from contention. How *alignment* is defined is discussed in [label property - positional details](Interface_def_label_property_supplement.html).

If no labels are aligned, consideration is then given to labels that are to the left or above the main control, and again, not too distant from it.

Threshold distances vary by platform. How it is determined that a non-aligned label is acceptably positioned relative to a main control to be a candidate for label assignment is also discussed in [label property - positional details](Interface_def_label_property_supplement.html).

If a label-accepting control is not sufficiently close to a label control, its label property remains empty. The same is true if there are indeed one or more labels that are sufficiently close, but which are allocated to other controls that are more qualified. \(An external label cannot be used by more than one control.\)

**Note:**

Note that there is no guarantee that a TA label property of a given control will be unique within a window. The label-finding algorithm does guarantee that the same label control will not be used to provide a value for more than one control. However, if two label controls hold the same text, there is nothing to prevent them from providing those texts to two different controls:

![](../Images/label_duplication.png)

## Label-finding procedure {#section.full_algorithm .section}

During a [window intake](Interface_def_intake.html) process, the following label-finding process is applied to each label-accepting control in the window. The logical hierarchy of the controls is followed to determine the order in which each label-accepting control is examined.

**Note:** Note that, aside from the fact that previously-assigned labels are no longer candidates for a given control when that control is examined, label assignment for each control is performed independently. For example, say label A is physically closer to label-accepting control Y than it is to label-accepting control X. If the label-finding algorithm is applied to X first, and X gets label A, that label is no longer available when Y is examined, no matter how much more appropriate that match may seem to be.

1.  Are there any available [left zone-aligned](Interface_def_label_property_supplement.md#dl.left_zone_alignment) labels? If yes, select the one closest to the main control \(based on the above [distance determination](Interface_def_label_property_supplement.md#section.distance_determination)\), mark it as unavailable, and repeat this procedure for the next control.
2.  Are there any available [top zone-aligned](Interface_def_label_property_supplement.md#dl.top_zone_alignment) labels? If yes, select the one closest to the main control, mark it as unavailable, and repeat this procedure for the next control.
3.  Are there any available [right zone-aligned](Interface_def_label_property_supplement.md#dl.right_zone_alignment) labels? If yes, select the one closest to the main control, mark it as unavailable, and repeat this procedure for the next control.
4.  Create a pool of available non-aligned candidate labels, based on the above two sets of criteria for selecting [left zone](Interface_def_label_property_supplement.md#dl.left_zone_nonaligned) and [top zone](Interface_def_label_property_supplement.md#dl.top_zone_nonaligned) candidates. If there are any candidates, select the one closest to the main control, mark it as unavailable, and repeat this procedure for the next control.
5.  If we get to this point, no label can be assigned to the label-accepting control. Find the next label-accepting control in the hierarchy and repeat this process for it.

-   **[label property - positional details](../../TA_Help/Topics/Interface_def_label_property_supplement.html)**  
Associating controls with labels donated from other controls is a multi-step process. The procedure implemented by TestArchitect requires precise definitions of what constitutes alignment between controls, proximity of controls, and determining the distance between them. Those technical details are explained here.

**Parent topic:**[Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)

