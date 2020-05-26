--- 
title: "GetBaselineByIndex"
linktitle: "GetBaselineByIndex"
weight: 4
aliases: 
    - /TA_Automation/Topics/abt_GetBaselineByIndex.html
---
# GetBaselineByIndex {#reference_GetBaselineByIndex .reference}

## Syntax {#section_sxm_4fr_vw .section}

`[<AbtBaselinePicture\>](abt_AbtBaselinePicture.html) GetBaselineByIndex (int index)`

## Description {#section_txm_4fr_vw .section}

Retrieve the baseline image, as specified by its index, in the current picture check.

## Parameters {#section_uxm_4fr_vw .section}

index
:   Integer value specifying the index of the baseline image. Note that index numbering begins with 1.

## Return Value {#section_vxm_4fr_vw .section}

Return an [AbtBaselinePicture](abt_AbtBaselinePicture.html) object. If the call is unsuccessful, returnnull.

**Parent topic:**[AbtPictureCheck](../../TA_Automation/Topics/abt_AbtPictureCheck.html)

**Previous topic:**[GetName](../../TA_Automation/Topics/abt_GetName.html)

**Next topic:**[GetBaselineByName](../../TA_Automation/Topics/abt_GetBaselineByName.html)

