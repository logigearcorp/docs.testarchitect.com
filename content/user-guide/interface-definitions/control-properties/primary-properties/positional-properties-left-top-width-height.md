--- 
title: "Positional properties (left, top, width, height)"
linktitle: "Positional properties (left, top, width, height)"
description: "The positional properties of a control specify its location and dimensions."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_positional_properties.html
keywords: "control properties, positional, left, top, width, height, TA property, left, top, width, height, positional properties, properties, primary"
---

The positional properties of a control specify its location and dimensions.

## Positional reference  

The left and top TA properties of a control specify its position in the display. Specifically, they specify the position of the top left corner of the control.

In other word, the left TA property of a control is the distance in pixels from the left side of the screen to the left edge the control; the top TA property of a control is the distance in pixels from the top side of the screen to the top edge the control.

However, as for TestArchitect 8.4 Update 2, the left TA property of a control is the distance in pixels from the left edge of the working document to the left edge the control; the top TA property of a control is the distance in pixels from the top edge of the working document to the top edge the control.



## Mobile device browsers  

An exception to the rule above applies to web applications running in mobile device browsers. In such cases, the reference point is actually the top-left corner of the browser display window:

![](/images/TA_Help/Images/properties.positional.01.png)

{{<tip>}} The browser display window, indicated in the figure on the right by the dashed green border, is that part of the browser that displays the web page.

## Screen units

As a general rule, the units used by all four positional properties are pixels. One exception to that rule exists with some of the newer Apple iOS devices; specifically, those with high-resolution Retina displays. For GUI elements in these devices, the values for the left, top, width, and height are stored as so-called points, as opposed to pixels. Each point encompasses several pixels, based on a scale factor specific to the given device display:

|iOS device\(s\)|Display technology|Scale factor|
|---------------|------------------|------------|
|iPad Mini, iPad 2| |1.0|
|iPhone 6, 5S, 5C, 5, 4S; iPad Air, iPad with Retina Display, iPad 3|Retina|2.0|
|iPhone 6 Plus|Retina HD|3.0|

Deriving the pixel value for a given positional TA property on an iOS device is a simple matter of multiplying by the applicable scale factor. For example, an iPhone 5 has a scale factor of 2.0. Hence a button in an iOS application on an iPhone 5 whose TA property width = 40 is, in fact, 80 pixels wide.


