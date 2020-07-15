--- 
title: "AbtPictureCheckManagement"
linktitle: "AbtPictureCheckManagement"
description: "This class is the central point for interacting with a picture check's information."
weight: 17
aliases: 
    - /TA_Automation/Topics/abt_AbtPictureCheckManagement.html
keywords: "methods of abt, AbtPictureCheckManagement, AbtPictureCheckManagement (methods)"
---

This class is the central point for interacting with a picture check's information.

{{<note>}} This class and its associated methods are currently supported only by the C\# harness.

## Workflow Implementation {{< permerlink >}} {#reference_AbtPictureCheckManagement__section.Workflow} 

In general, a basic workflow involves the following steps:

1.  Initialize an [AbtPictureCheckManagement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/) object.
2.  Retrieve a specific picture check by using the [GetPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/getpicturecheck) method. An [AbtPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/) object is then returned.
3.  Depending on your needs
    1.  apply various methods belonging to [AbtPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/) to retrieve a specific baseline image or all baselines of a picture check. An [AbtBaselinePicture](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/) object is then returned.
    2.  finally, apply methods belonging to [AbtBaselinePicture](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/) to further process the returned baseline\(s\).

## Example {{< permerlink >}} {#reference_AbtPictureCheckManagement__section.Example} 

Suppose that you'd like to save a baseline image, "Baseline \{1\}", which belongs to a shared picture check, "Yellow Chevrolet", into a given folder.

Your snippet of code might resemble the following:

```
//Initialize AbtPictureCheckManagement object
AbtPictureCheckManagement mgn = new AbtPictureCheckManagement();

//Retrieve a shared picture check "Yellow Chevrolet"
AbtPictureCheck pictureCheck = mgn.[GetPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/getpicturecheck)("/Yellow Chevrolet");

//Retrieve a baseline image "Baseline {1}"
AbtBaselinePicture baseline = pictureCheck.[GetBaselineByName](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/getbaselinebyname)("Baseline {1}");

//Save the baseline to a location
int exportResult = baseline.[Save](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtbaselinepicture/save)("D:\Images");
```

1.  [GetPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheckmanagement/getpicturecheck)  





