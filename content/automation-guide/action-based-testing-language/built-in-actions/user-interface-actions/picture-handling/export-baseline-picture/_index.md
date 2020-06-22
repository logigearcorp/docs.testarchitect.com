--- 
title: "export baseline picture"
linktitle: "export baseline picture"
description: "Description Save the current baseline image to a file. Arguments picture Name of a regular or shared picture check. baseline Name of the baseline image, or its numerical index. location (Optional) ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_export_baseline_picture.html
keywords: "built-in actions, export baseline picture, export baseline picture (action)"
---

## Description

Save the current baseline image to a file.

## Arguments

-   **picture**

    Name of a regular or shared picture check.

-   **baseline**

    Name of the baseline image, or its numerical index.


-   **location**

    \(Optional\) Path to location in which the image is saved.

-   **return path**

    \(Optional\) Variable to receive the returned absolute path of the saved image.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The baseline image is saved as .png.
-   picture argument: Identifies the name of a regular or shared picture check \([learn more](/TA_Help/Topics/Projects_and_tests_picture_check.html)\), with the forward slash \(/\) as the path separator.
    -   If the target image is in a shared picture check, the path starts with the forward slash \(/\), which corresponds to the Picture Checks subfolder of the project, followed by picture's name.
    -   If the target image is in a regular picture check, the path starts with picture's name.
-   baseline argument:
    -   This argument may be specified by either of two means: the name of the image, or its numerical index. \(Indexes are one-based; that is, numbering begins at 1.\)
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if the name of an image is 12, you should reference that image by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an image with an index of 12, rather than an image holding a text value of 12.
-   location argument:
    -   If the exported file already exists, TestArchitect overwrites the existing file with the new one.
    -   If this argument is empty, or the specified path does not exist, TestArchitect saves the file in the following default location:
        -   Windows: C:\\Users\\<username\>\\Documents\\TestArchitect\\Exported pictures
        -   Linux: /home/<user\>/TestArchitect/Exported Pictures
    -   Only the path to the folder is required.
        -   Windows: Use backward slashes as separators for the folder path.
        -   Linux: Use forward slashes as separators for the folder path. \(Note that network paths are not supported.\)
-   This built-in action can be applied to pre-process baseline and runtime images, before actually integrating them with a given third-party image processing tool for further processing. \(See **Example** below.\)
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action: [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Applicable Systems/Platforms

Use of this action is supported on the following system\(s\)/platform\(s\): Windows, Linux.

## Example - Case 1: Save the current baseline image to file

![](/images/TA_Automation/Images/bia_export_baseline_picture_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_export_baseline_picture_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_export_baseline_picture_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_export_baseline_picture_effect.png)

## Example - Case 2: Integrating with a third-party image processing tool

In this example, the [ImageMagick](http://www.imagemagick.org/script/index.php) v.6.9.3-7 tool is invoked for further image processing.

Suppose that you'd like to compare the baseline image against the runtime image, but ignore the differences in their color.

![](/images/TA_Automation/Images/bia_get_baseline_image_count_aut_2.png)

A basic workflow is as follows:

1.  Capture the runtime image in the AUT, and then save it to a local path by using [capture screen](/TA_Automation/Topics/bia_capture_screen.html).
2.  Retrieve the total number of baseline images in a given picture check by using [get baseline image count](/TA_Automation/Topics/bia_get_baseline_image_count.html).
3.  Loop through the list of returned baseline image\(s\).
4.  Export the baseline images to a file with [export baseline picture](/TA_Automation/Topics/bia_export_baseline_picture.html).
5.  Use [ImageMagick CLI](http://www.imagemagick.org/script/command-line-processing.php) to preprocess and compare the baseline image\(s\) against the runtime image.
6.  Get the returned value from ImageMagick, and then check it against an expected value.

**Action Lines**

![](/images/TA_Automation/Images/bia_get_baseline_image_count_2_pgm.png)




**Related information**  


[Exporting baseline images](/TA_Help/Topics/ug_picture_checks_exporting.html)

