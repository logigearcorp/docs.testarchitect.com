--- 
title: "Picture Handling"
linktitle: "Picture Handling"
description: "Picture handling actions interact with captured and stored images."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_picture_handling.html
keywords: 
---

Picture handling actions interact with captured and stored images.

{{<note>}}

-   Picture Handling built-in actions works based on either a pixel-by-pixel technique or a keypoint detection technique comparison. To switch between techniques, use the [picture algorithm](/TA_Automation/Topics/bis_picture_algorithm.html) setting.
-   The exact value for the picture algorithm built-in setting \(specifying the pixel-by-pixel comparison technique\) applies to nearly every [picture handling](/TA_Automation/Topics/bia_picture_handling.html) built-in action. The sole exception is [set picture min accuracy](/TA_Automation/Topics/bia_set_picture_min_accuracy.html), which does not interact with the AUT.
-   The key points value for the picture algorithm built-in setting \(specifying the keypoint detection technique\) applies to every [picture handling](/TA_Automation/Topics/bia_picture_handling.html) built-in action but two: [check picture](/TA_Automation/Topics/bia_check_picture.html) is exempt, since it always applies a pixel-by-pixel comparison, and set picture min accuracy, as mentioned, has no interaction with the AUT.

1.  [capture screen](/TA_Automation/Topics/bia_capture_screen.html)  

2.  [check picture](/TA_Automation/Topics/bia_check_picture.html)  

3.  [check picture exists](/TA_Automation/Topics/bia_check_picture_exists.html)  

4.  [check picture not exists](/TA_Automation/Topics/bia_check_picture_not_exists.html)  

5.  [click picture](/TA_Automation/Topics/bia_click_picture.html)  

6.  [does picture exist](/TA_Automation/Topics/bia_does_picture_exist.html)  

7.  [export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html)  

8.  [get baseline image count](/TA_Automation/Topics/bia_get_baseline_image_count.html)  

9.  [get picture location](/TA_Automation/Topics/bia_get_picture_location.html)  

10. [if picture exists](/TA_Automation/Topics/bia_if_picture_exists.html)  

11. [if picture not exists](/TA_Automation/Topics/bia_if_picture_not_exists.html)  

12. [set picture min accuracy](/TA_Automation/Topics/bia_set_picture_min_accuracy.html)  





**Related information**  


[Image comparison techniques](/TA_Automation/Topics/aut_image_comparison_techniques.html)

