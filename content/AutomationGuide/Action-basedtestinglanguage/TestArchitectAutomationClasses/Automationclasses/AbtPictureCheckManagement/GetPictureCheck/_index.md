--- 
title: "GetPictureCheck"
linktitle: "GetPictureCheck"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_GetPictureCheck.html
---
# GetPictureCheck {#reference_GetPictureCheck .reference}

## Syntax {#section.syntax .section}

`[AbtPictureCheck](abt_AbtPictureCheck.html) GetPictureCheck(string path)`

## Description {#section.desc .section}

Retrieve a picture check in the current project or the supplier project.

## Parameters {#section.params .section}

path
:   String specifying a regular or shared picture check's path \([learn more](../../TA_Help/Topics/Projects_and_tests_picture_check.html)\), with forward slash \(/\) as the path separator.

:   -   If the target image is in a shared picture check, the path starts with the forward slash \(/\), which corresponds to the Picture Checks subfolder of the project; followed by picture's name.
-   If the target image is in a regular picture check, the path starts with picture's name.

## Return Value {#section.return .section}

Return an [AbtPictureCheck](abt_AbtPictureCheck.html) object. If the call is unsuccessful, returnnull.

## Notes { .section}

-   This method is currently supported only by the C\# harness.

**Parent topic:**[AbtPictureCheckManagement](../../TA_Automation/Topics/abt_AbtPictureCheckManagement.html)

