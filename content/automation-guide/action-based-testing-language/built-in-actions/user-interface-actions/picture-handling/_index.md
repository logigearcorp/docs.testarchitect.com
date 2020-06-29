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

-   Picture Handling built-in actions works based on either a pixel-by-pixel technique or a keypoint detection technique comparison. To switch between techniques, use the [picture algorithm](/automation-guide/action-based-testing-language/built-in-settings/other-settings/picture-algorithm) setting.
-   The exact value for the picture algorithm built-in setting \(specifying the pixel-by-pixel comparison technique\) applies to nearly every [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) built-in action. The sole exception is [set picture min accuracy](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/set-picture-min-accuracy), which does not interact with the AUT.
-   The key points value for the picture algorithm built-in setting \(specifying the keypoint detection technique\) applies to every [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) built-in action but two: [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture) is exempt, since it always applies a pixel-by-pixel comparison, and set picture min accuracy, as mentioned, has no interaction with the AUT.

1.  [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen)  

2.  [check picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture)  

3.  [check picture exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture-exists)  

4.  [check picture not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/check-picture-not-exists)  

5.  [click picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/click-picture)  

6.  [does picture exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/does-picture-exist)  

7.  [export baseline picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/export-baseline-picture)  

8.  [get baseline image count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-baseline-image-count)  

9.  [get picture location](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-picture-location)  

10. [if picture exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/if-picture-exists)  

11. [if picture not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/if-picture-not-exists)  

12. [set picture min accuracy](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/set-picture-min-accuracy)  





**Related information**  


[Image comparison techniques](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques)

