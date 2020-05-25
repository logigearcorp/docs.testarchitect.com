--- 
title: "AbtPictureCheck"
linktitle: "AbtPictureCheck"
aliases: 
    - /TA_Automation/Topics/abt_AbtPictureCheck.html
---
# AbtPictureCheck {#reference_AbtPictureCheck .reference}

Object class representing a picture check.

**Note:** This class and its associated methods are currently supported only by the C\# harness.

## Workflow Implementation { .section}

In general, a basic workflow involves the following steps:

1.  Initialize an [AbtPictureCheckManagement](abt_AbtPictureCheckManagement.html) object.
2.  Retrieve a specific picture check by using the [GetPictureCheck](abt_GetPictureCheck.html) method. An [AbtPictureCheck](abt_AbtPictureCheck.html) object is then returned.
3.  Depending on your needs
    1.  apply various methods belonging to [AbtPictureCheck](abt_AbtPictureCheck.html) to retrieve a specific baseline image or all baselines of a picture check. An [AbtBaselinePicture](abt_AbtBaselinePicture.html) object is then returned.
    2.  finally, apply methods belonging to [AbtBaselinePicture](abt_AbtBaselinePicture.html) to further process the returned baseline\(s\).

## Example { .section}

Suppose that you'd like to save a baseline image, "Baseline \{1\}", which belongs to a shared picture check, "Yellow Chevrolet", into a given folder.

Your snippet of code might resemble the following:

```
//Initialize AbtPictureCheckManagement object
AbtPictureCheckManagement mgn = new AbtPictureCheckManagement();

//Retrieve a shared picture check "Yellow Chevrolet"
AbtPictureCheck pictureCheck = mgn.[GetPictureCheck](abt_GetPictureCheck.html)("/Yellow Chevrolet");

//Retrieve a baseline image "Baseline {1}"
AbtBaselinePicture baseline = pictureCheck.[GetBaselineByName](abt_GetBaselineByName.html)("Baseline {1}");

//Save the baseline to a location
int exportResult = baseline.[Save](abt_Save.html)("D:\Images");
```

1.  [GetBaselines](../../TA_Automation/Topics/abt_GetBaselines.html)  

2.  [GetBaselineCount](../../TA_Automation/Topics/abt_GetBaselineCount.html)  

3.  [GetName](../../TA_Automation/Topics/abt_GetName.html)  

4.  [GetBaselineByIndex](../../TA_Automation/Topics/abt_GetBaselineByIndex.html)  

5.  [GetBaselineByName](../../TA_Automation/Topics/abt_GetBaselineByName.html)  


**Parent topic:**[Automation classes](../../TA_Automation/Topics/abt_methods_abt.html)

**Previous topic:**[AbtMenuBar](../../TA_Automation/Topics/abt_AbtMenuBar.html)

**Next topic:**[AbtPictureCheckManagement](../../TA_Automation/Topics/abt_AbtPictureCheckManagement.html)

