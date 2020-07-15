--- 
title: "label property - positional details"
linktitle: "label property - positional details"
description: "Associating controls with labels donated from other controls is a multi-step process. The procedure implemented by TestArchitect requires precise definitions of what constitutes alignment between controls, proximity of controls, and determining the distance between them. Those technical details are explained here."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_label_property_supplement.html
keywords: "label property, TA property, label, properties, secondary"
---

Associating controls with labels donated from other controls is a multi-step process. The procedure implemented by TestArchitect requires precise definitions of what constitutes alignment between controls, proximity of controls, and determining the distance between them. Those technical details are explained here.

## Aligned labels {{< permerlink >}} {#Interface_def.label_property_supplement__section.alignment} 

For a full understanding of the label-finding algorithm employed by TestArchitect, one needs to understand, in precise terms, how the system determines whether a label control is aligned with a label-accepting control.

Most broadly, TestArchitect recognizes three types of alignment between label controls and label-accepting controls: left zone alignment, top zone alignment, and right zone alignment:

-   **left zone alignment**

    A label is considered to be left zone-aligned with a given label-accepting control if meets all of the following criteria:

    1.  resides to the left of the main control,
    2.  does not overlap the main control,
    3.  is no more than 100 pixels from the main control1 \(edge to edge\), and
    4.  either the bottom edge aligns with the bottom edge of the main control, or their top edges align.2
    ![](/images/TA_Help/Images/prop_label.left_zone_alignments.png)


-   **top zone alignment**

    A label is considered to be top zone-aligned with a given label-accepting control if meets all of the following criteria:

    1.  resides above the main control,
    2.  does not overlap the main control,
    3.  is no more than 50 pixels from the main control \(edge to edge\), and
    4.  the left edge aligns with the left edge of the main control.2
    ![](/images/TA_Help/Images/prop_label.top_zone_alignment.png)

    Note that, unlike left zone alignment, top zone alignment takes only one form: that is, with the left edges of the two controls aligned. Right-edge alignment is not, for purposes of the algorithm, considered an instance of top zone alignment.


-   **right zone alignment**

    A label is considered to be right zone-aligned with a given label-accepting control if meets all of the following criteria:

    1.  resides to the right of the main control,
    2.  does not overlap the main control,
    3.  is no more than 100 pixels from the main control1 \(edge to edge\), and
    4.  either the bottom edge aligns with the bottom edge of the main control, or their top edges align.2
    ![](/images/TA_Help/Images/prop_label.right_zone_alignments.png)


{{<note>}}

-   1This criteria is not applicable to iOS 7 and 8.
-   2It should be noted that the criteria for declaring two edges aligned varies by platform. For most platforms, perfect alignment is required. \(That is, for example, to assert that controls A and B are aligned along their top edges, requires that top\_edgeA = top\_edgeB\). However, certain idiosyncrasies in Win32, WPF, WinForms and Silverlight require that GUI controls of applications developed in those platforms be granted some latitude in determining whether edges are aligned. Specifically, an allowance of 8 pixels is applied: for the purposes of the label-finding algorithm, the edges of two controls are considered aligned if they are positioned within 8 pixels of each other along the direction of alignment:

![](/images/TA_Help/Images/prop_label.special_case.alignment_margin.png)

## Proximate non-aligned labels {{< permerlink >}} {#Interface_def.label_property_supplement__section.proximate_labels} 

Assuming that, for a given label-accepting control, no suitable aligned label control is found, the system proceeds to search for as-yet-unassigned labels that lie within a certain portion of the neighborhood of the main control.

Two zones abutting the main control are examined for candidate labels: the left zone and the top zone. Note that no priority is assigned to label controls based on the zone they reside in. A pool of candidates from the two zones is established, and the selected label is the candidate deemed to reside closest to the main control.

-   **Selecting left zone candidates**

    The first group of non-aligned label controls deemed suitable to join the label candidate pool for a given label-accepting control are those that:

    1.  have not yet been assigned to a label-accepting control,
    2.  do not overlap the main control by more than a single pixel,
    3.  have their top edges residing within 100 pixels \(in either direction\) along the vertical from the main control's top edge,
    4.  have bottom edges that do not extend along the vertical more than 20 pixels below the main control's bottom edge.

The following figure illustrates the acceptable left zone placement of a label control with respect to a main control, for the label control to be a candidate label donor. It depicts the ranges of acceptable positions for each of the label control's top, right and bottom edges.

![](/images/TA_Help/Images/prop_label.left_zone_nonaligned_candidates.01.png)

-   **Selecting top zone candidates**

    In addition to the above, label controls deemed suitable to join the label candidate pool for a given label-accepting control are those whose:

    1.  values have not yet been assigned to a label-accepting control;
    2.  top edges reside above the main control;
    3.  bottoms reside either below the main control's top, or no further than T pixels from it along the vertical \(where T, discussed below, represents a threshold value that varies by platform\);
    4.  left edges are no further than 300 pixels along the horizontal from the main control's left edge,
    5.  right edges do not go past the right edge of the main control.

The following figure illustrates the acceptable top zone placement of a label control with respect to a main control, for the label control to be a candidate label donor. It depicts the ranges of acceptable positions for each of the label control's top, right and bottom edges.

![](/images/TA_Help/Images/prop_label.top_zone_nonaligned_candidates.png)

{{<note>}} Determination of value for T : T is the threshold value used for placing an upper physical limit on the position of a label control's bottom edge relative to a main control, for that label control to qualify candidate label donor under the top zone scenario above. T varies by platform:

-   **Desktop platforms \(Win32, WPF, Java, Silverlight\):**

    T = 20

-   **iOS**

    T = DeviceDPI / 2.54, where DeviceDPI \(device dots per inch\) is determined based on the iOS hardware:

    |iOS hardware model\(s\)|DeviceDPI|
    |-----------------------|---------|
    |iPad 1 / iPad 2|132|
    |iPhone 3 / iPad Mini|163|
    |iPad 3 / iPad 4 / iPad Air / iPad Air 2|264|
    |iPhone 4 / iPhone 5 / iPhone 5C / iPhone 5S / iPhone 6 / iPad Mini 2 / iPad Mini 3|326|
    |iPhone 6 Plus|401|


## Distance determination between label and main control {{< permerlink >}} {#Interface_def.label_property_supplement__section.distance_determination} 

At any of several points along the label-finding procedure, a pool of more than one qualified label candidates may be found for a given label-accepting control. When that happens, the candidate deemed physically closest to the main control is selected as the label donor. Specifically, the chosen label control is the one whose center point is closest to the upper-left corner of the main control:

![](/images/TA_Help/Images/prop_label.proximity.png)


