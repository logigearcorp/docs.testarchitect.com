--- 
title: "get baseline image count"
linktitle: "get baseline image count"
description: "Description Retrieve a count of the total number of baseline images that reside in a given picture check. Arguments picture Name of a regular or shared picture check. variable (Optional) Variable to ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_baseline_image_count.html
keywords: "built-in actions, get baseline image count, get baseline image count (action)"
---

## Description

Retrieve a count of the total number of baseline images that reside in a given picture check.

## Arguments {{< permerlink >}} {#bia_baseline_image_count__section_a2x_t5k_vw} 

-   **picture**

    Name of a regular or shared picture check.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Built-In Settings

The following settings are applicable to this action: [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Applicable Systems/Platforms

Use of this action is supported on the following system\(s\)/platform\(s\): Windows, Linux.

## Notes {{< permerlink >}} {#bia_baseline_image_count__section.notes} 

-   picture argument: Identifies the name of a regular or shared picture check \([learn more](/user-guide/projects-and-project-items/project-items/picture-checks/)\), with the forward slash \(/\) as the path separator.
    -   If the target image is in a shared picture check, the path starts with the forward slash \(/\), which corresponds to the Picture Checks subfolder of the project, followed by picture's name.
    -   If the target image is in a regular picture check, the path starts with picture's name.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This built-in action can be applied to pre-process baseline and runtime images, before actually integrating them with a given third-party image processing tool for further processing. \(See Example below.\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example - Case 1: Retrieving the total number of a given baseline image {{< permerlink >}} {#bia_baseline_image_count__section_unk_5wk_vw} 

![](/images/TA_Automation/Images/bia_get_baseline_image_count_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_baseline_image_count_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_baseline_image_count_res.png)

## Example - Case 2: Integrating with a third-party image processing tool {{< permerlink >}} {#bia_baseline_image_count__section_x3x_4ft_yw} 

In this example, the [ImageMagick](http://www.imagemagick.org/script/index.php) v.6.9.3-7 tool is invoked for further image processing.

Suppose that you'd like to compare the baseline image against the runtime image, but ignore the differences in their color.

![](/images/TA_Automation/Images/bia_get_baseline_image_count_aut_2.png)

A basic workflow is as follows:

1.  Capture the runtime image in the AUT, and then save it to a local path by using [capture screen](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/capture-screen).
2.  Retrieve the total number of baseline images in a given picture check by using [get baseline image count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/get-baseline-image-count).
3.  Loop through the list of returned baseline image\(s\).
4.  Export the baseline images to a file with [export baseline picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/export-baseline-picture).
5.  Use [ImageMagick CLI](http://www.imagemagick.org/script/command-line-processing.php) to preprocess and compare the baseline image\(s\) against the runtime image.
6.  Get the returned value from ImageMagick, and then check it against an expected value.

Action Lines

![](/images/TA_Automation/Images/bia_get_baseline_image_count_2_pgm.png)



