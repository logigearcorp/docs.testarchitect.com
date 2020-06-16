--- 
title: "AbtBaselinePicture"
linktitle: "AbtBaselinePicture"
description: "Object class representing a baseline image of a given picture check."
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_AbtBaselinePicture.html
keywords: "methods of abt, AbtBaselinePicture, AbtBaselinePicture (methods)"
---

Object class representing a baseline image of a given picture check.

**Note:** This class and its associated methods are currently supported only by the C\# harness.

## Workflow Implementation

In general, a basic workflow involves the following steps:

1.  Initialize an [AbtPictureCheckManagement](/TA_Automation/Topics/abt_AbtPictureCheckManagement.html) object.
2.  Retrieve a specific picture check by using the [GetPictureCheck](/TA_Automation/Topics/abt_GetPictureCheck.html) method. An [AbtPictureCheck](/TA_Automation/Topics/abt_AbtPictureCheck.html) object is then returned.
3.  Depending on your needs
    1.  apply various methods belonging to [AbtPictureCheck](/TA_Automation/Topics/abt_AbtPictureCheck.html) to retrieve a specific baseline image or all baselines of a picture check. An [AbtBaselinePicture](/TA_Automation/Topics/abt_AbtBaselinePicture.html) object is then returned.
    2.  finally, apply methods belonging to [AbtBaselinePicture](/TA_Automation/Topics/abt_AbtBaselinePicture.html) to further process the returned baseline\(s\).

## Example

Suppose that you'd like to save a baseline image, "Baseline \{1\}", which belongs to a shared picture check, "Yellow Chevrolet", into a given folder.

Your snippet of code might resemble the following:

```
//Initialize AbtPictureCheckManagement object
AbtPictureCheckManagement mgn = new AbtPictureCheckManagement();

//Retrieve a shared picture check "Yellow Chevrolet"
AbtPictureCheck pictureCheck = mgn.[GetPictureCheck](/TA_Automation/Topics/abt_GetPictureCheck.html)("/Yellow Chevrolet");

//Retrieve a baseline image "Baseline {1}"
AbtBaselinePicture baseline = pictureCheck.[GetBaselineByName](/TA_Automation/Topics/abt_GetBaselineByName.html)("Baseline {1}");

//Save the baseline to a location
int exportResult = baseline.[Save](/TA_Automation/Topics/abt_Save.html)("D:\Images");
```

1.  [GetName](/TA_Automation/Topics/abt_GetName_BaselinePicture.html)  

2.  [Save](/TA_Automation/Topics/abt_Save.html)  





