--- 
title: "set screen orientation"
linktitle: "set screen orientation"
aliases: 
    - /TA_Automation/Topics/bia_set_screen_orientation.html
---
# set screen orientation {#bia_set_screen_orientation .reference}

## Description { .section}

Set the orientation of the device's screen to portrait or landscape.

## Arguments { .section}

orientation
:   Screen orientation to be set.

:   Allowable values:

    -   portrait \(or p\).
    -   landscape \(or l\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#section_jfp_ncl_zcb .section}

Use of this action is supported on the following systems/platforms: Mobile operating systems.

## Notes { .section}

-   The values of the orientation argument are non-case sensitive.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_set_screen_orientation_pgm.landscape.png)

**Result**

![](../Images/bia_set_screen_orientation_res.r02.png)

**Parent topic:**[Device](../../TA_Automation/Topics/bia_device.html)

**Previous topic:**[scroll to view](../../TA_Automation/Topics/bia_iOS_scroll_to_view.html)

**Next topic:**[slide](../../TA_Automation/Topics/bia_slide.html)

**Related information**  


[get screen orientation](../../TA_Automation/Topics/bia_get_screen_orientation.html)

