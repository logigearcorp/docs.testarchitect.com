--- 
title: "picture algorithm"
linktitle: "picture algorithm"
weight: 19
aliases: 
    - /TA_Automation/Topics/bis_picture_algorithm.html
keywords: "picture algorithm, specify which algorithm is used to compare between baseline image and image under test, choose algorithm to compare baseline image with image under test"
---

## Description

Specify which algorithm is applied to perform comparisons between stored baseline images and images under test.

## Allowable values

-   **exact**

    Perform a [pixel-by-pixel](aut_image_comparison_techniques.html) comparison.

-   **key points**

    Perform a [keypoint detection](aut_image_comparison_techniques.html) comparison.


## Default value

exact

## Notes

-   The exact value for the picture algorithm built-in setting \(specifying the pixel-by-pixel comparison technique\) applies to nearly every [picture handling](picture_handling.html) built-in action. The sole exception is [set picture min accuracy](set_picture_min_accuracy.html), which does not interact with the AUT.
-   The key points value for the picture algorithm built-in setting \(specifying the keypoint detection technique\) applies to every [picture handling](picture_handling.html) built-in action but two: [check picture](check_picture.html) is exempt, since it always applies a pixel-by-pixel comparison, and set picture min accuracy, as mentioned, has no interaction with the AUT.

## Example

**Test Lines**

![](/images//Images/bis_picture_algorithm_pgm.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[notice level](/TA_Automation/Topics/bis_notice_level.html)

**Next topic:**[skip manual check](/TA_Automation/Topics/bis_skip_manual_check.html)

**Related information**  


[Image comparison techniques](/TA_Automation/Topics/aut_image_comparison_techniques.html)

