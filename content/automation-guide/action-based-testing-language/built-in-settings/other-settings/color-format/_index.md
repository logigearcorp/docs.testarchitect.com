--- 
title: "color format"
linktitle: "color format"
weight: 5
aliases: 
    - /TA_Automation/Topics/bis_color_format.html
---
keyword: [color format, specify whether RGB color codes are express in decimal or hexadecimal, specify color formatting code]
---

# color format

## Description

Specifies whether RGB color codes are expressed in decimal or hexadecimal format.

**Tip:** The specified color formatting code can be used in combination with the following built-in actions:

-   [get native property](get_native_property.html)
-   [set native property](set_native_property.html)
-   [check native property](check_native_property.html)

## Allowable values

Two possible values are:

-   **RGB**

    Color code is expressed as decimal red, green, and blue values.

    **Remember:** The three decimal values representing each component of the RGB color must be separated with commas. For example, white is represented as `255, 255, 255`.

-   **Hex**

    Color code is in the form of a three byte hexadecimal number representing each component of the RGB color.

    **Remember:** Place a black slash \( \\ \) and a pound key \( \# \) before the hexadecimal value to indicate that it is a hexadecimal. For example, the white color is represented as `\#FFFFFF`.


## Default value

Hex

## Example

**Test Lines**

![](/images//Images/bis_color_format_pgm.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[click method](/TA_Automation/Topics/bis_click_method.html)

**Next topic:**[enable click hook](/TA_Automation/Topics/bis_enable_click_hook.html)

