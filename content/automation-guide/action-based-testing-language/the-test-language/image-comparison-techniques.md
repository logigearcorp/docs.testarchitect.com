--- 
title: "Image comparison techniques"
linktitle: "Image comparison techniques"
description: "TestArchitect offers you two methods for verifying the correctness of images produced by a tested application: pixel-by-pixel comparison and keypoint detection."
weight: 10
aliases: 
    - /TA_Automation/Topics/aut_image_comparison_techniques.html
keywords: "Pictures, comparing, pixel-by-pixel, keypoint detection, Comparing, images"
---

TestArchitect offers you two methods for verifying the correctness of images produced by a tested application: pixel-by-pixel comparison and keypoint detection.

## Pixel-by-pixel Comparison  

In the pixel-by-pixel technique, TestArchitect maintains a baseline image to use for comparison purposes when testing an image produced by the AUT. The comparison is considered successful only if the test image precisely matches its baseline, meaning that the colors of each pair of corresponding pixels of both images are identical. In order to improve the accuracy of image comparison, you should try to ensure that the baseline image, which is stored prior to testing, is captured under the same conditions for which the application is tested. Sometimes, you may encounter situations in which a pixel-by-pixel comparison fails, but where a visual inspection of the baseline and the image under test reveals no discernible difference. This can occur, for example, when the display hardware used during testing differs from that which was used during the baseline capture.

{{<note>}} TestArchitect does allow you to specify multiple baselines for a given image comparison, which in many cases can address this problem.

## Keypoint Detection Comparison

A keypoint detection comparison technique is an alternative. This technique is based on the Scale Invariant Feature Transform \(SIFT\) algorithm, which transforms an image into a collection of feature vectors, each of which is invariant to image scaling, rotation, translation, noise, and other possible “corruptions” of an image. Therefore, a keypoint detection comparison technique can be used to perform reliable matching between a baseline image and an image under test in situations where you cannot be assured of a pixel-by-pixel identical match.

Keypoint detection can also be used to define a baseline region – which may be the full baseline image or a section of it – and scan the tested image for the presence of that region anywhere inside it, again without requiring a 100% pixel-by-pixel correspondence.

A conceptual extension of this idea is to consider the baseline region as an "object", and to scan the image under test for the presence of one or more such objects.




**Related information**  


[picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm)

