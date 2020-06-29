--- 
title: "GetPictureCheck"
linktitle: "GetPictureCheck"
description: "Syntax AbtPictureCheck GetPictureCheck(string path) Description Retrieve a picture check in the current project or the supplier project. Parameters path String specifying a regular or shared picture ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_GetPictureCheck.html
keywords: "methods of abt, GetPictureCheck, GetPictureCheck (AbtPictureCheckManagement), AbtPictureCheckManagement, getpicturecheck, abtpicturecheckmanagement getpicturecheck, retrieve picture check, get picture check"
---

## Syntax

`[AbtPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/) GetPictureCheck(string path)`

## Description

Retrieve a picture check in the current project or the supplier project.

## Parameters

-   **path**

    String specifying a regular or shared picture check's path \([learn more](/user-guide/projects-and-project-items/project-items/picture-checks/)\), with forward slash \(/\) as the path separator.

    -   If the target image is in a shared picture check, the path starts with the forward slash \(/\), which corresponds to the Picture Checks subfolder of the project; followed by picture's name.
    -   If the target image is in a regular picture check, the path starts with picture's name.

## Return Value

Return an [AbtPictureCheck](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtpicturecheck/) object. If the call is unsuccessful, returnnull.

## Notes

-   This method is currently supported only by the C\# harness.


