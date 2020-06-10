--- 
title: "get baseline image count"
linktitle: "get baseline image count"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_get_baseline_image_count.html
---

## Description

Retrieve a count of the total number of baseline images that reside in a given picture check.

## Arguments

-   **picture**

    Name of a regular or shared picture check.

-   **variable**

    \(Optional\) Variable to receive the returned value.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Built-In Settings

The following settings are applicable to this action: [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Applicable Systems/Platforms

Use of this action is supported on the following system\(s\)/platform\(s\): Windows, Linux.

## Notes

-   picture argument: Identifies the name of a regular or shared picture check \([learn more](/TA_Help/Topics/Projects_and_tests_picture_check.html)\), with the forward slash \(/\) as the path separator.
    -   If the target image is in a shared picture check, the path starts with the forward slash \(/\), which corresponds to the Picture Checks subfolder of the project, followed by picture's name.
    -   If the target image is in a regular picture check, the path starts with picture's name.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This built-in action can be applied to pre-process baseline and runtime images, before actually integrating them with a given third-party image processing tool for further processing. \(See **Example** below.\)
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Example - Case 1: Retrieving the total number of a given baseline image

![](/images//Images/bia_get_baseline_image_count_aut.png)

**Action Lines**

![](/images//Images/bia_get_baseline_image_count_pgm.png)

**Result**

![](/images//Images/bia_get_baseline_image_count_res.png)

## Example - Case 2: Integrating with a third-party image processing tool

In this example, the [ImageMagick](http://www.imagemagick.org/script/index.php) v.6.9.3-7 tool is invoked for further image processing.

Suppose that you'd like to compare the baseline image against the runtime image, but ignore the differences in their color.

![](/images//Images/bia_get_baseline_image_count_aut_2.png)

A basic workflow is as follows:

1.  Capture the runtime image in the AUT, and then save it to a local path by using [capture screen](/TA_Automation/Topics/bia_capture_screen.html).
2.  Retrieve the total number of baseline images in a given picture check by using [get baseline image count](/TA_Automation/Topics/bia_get_baseline_image_count.html).
3.  Loop through the list of returned baseline image\(s\).
4.  Export the baseline images to a file with [export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html).
5.  Use [ImageMagick CLI](http://www.imagemagick.org/script/command-line-processing.php) to preprocess and compare the baseline image\(s\) against the runtime image.
6.  Get the returned value from ImageMagick, and then check it against an expected value.

**Action Lines**

![](/images//Images/bia_get_baseline_image_count_2_pgm.png)

**Parent topic:**[Picture Handling](/TA_Automation/Topics/bia_picture_handling.html)

**Previous topic:**[export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html)

**Next topic:**[get picture location](/TA_Automation/Topics/bia_get_picture_location.html)

