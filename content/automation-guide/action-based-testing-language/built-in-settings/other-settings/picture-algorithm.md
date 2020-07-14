--- 
title: "picture algorithm"
linktitle: "picture algorithm"
description: "Description Specify which algorithm is applied to perform comparisons between stored baseline images and images under test. Allowable values exact Perform a pixel-by-pixel comparison. key points ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bis_picture_algorithm.html
keywords: "built-in settings, picture algorithm, settings, picture algorithm, picture algorithm (settings), iOS (settings), specify which algorithm is used to compare between baseline image and image under test, choose algorithm to compare baseline image with image under test"
---

## Description

Specify which algorithm is applied to perform comparisons between stored baseline images and images under test.

## Allowable values

-   **exact**

    Perform a [pixel-by-pixel](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques) comparison.

-   **key points**

    Perform a [keypoint detection](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques) comparison.


## Default value

exact

## Notes

-   The exact value for the picture algorithm built-in setting \(specifying the pixel-by-pixel comparison technique\) applies to nearly every [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) built-in action. The sole exception is [set picture min accuracy](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/set-picture-min-accuracy), which does not interact with the AUT.
-   The key points value for the picture algorithm built-in setting \(specifying the keypoint detection technique\) applies to every [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) built-in action but two: [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) is exempt, since it always applies a pixel-by-pixel comparison, and set picture min accuracy, as mentioned, has no interaction with the AUT.

## Example

Test Lines

![](/images/TA_Automation/Images/bis_picture_algorithm_pgm.png)




**Related information**  


[Image comparison techniques](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques)
