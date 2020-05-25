--- 
title: "set media property"
linktitle: "set media property"
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_media_property.html
---
# set media property {#bia_html5_audio_set_media_property .reference}

## Description { .section}

Set values for audio and video controls.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the audio or video control.

property
:   Setting to be written to.

:   Allowable values:

    -   loop \(set control to continuously replay its current audio or video file\)
    -   muted
    -   full screen \(video only\)
    -   show controls \(video only\)

value
:   Value to which the setting is to be set.

:   Allowable values:

    -   true
    -   false

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This built-in action applies to HTML5 audio/video controls only.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls { .section}

This action is applicable to the following controls:Audio, Video

## Example { .section}

![](../Images/bia_set_media_property_aut.png)

**Action Lines**

![](../Images/bia_set_media_property_pgm.png)

**Result**

![](../Images/bia_set_media_property_res.png)

**Effect**

![](../Images/bia_set_media_property_effect.png)

**Parent topic:**[Media control](../../TA_Automation/Topics/bia_media_control.html)

**Previous topic:**[play](../../TA_Automation/Topics/bia_html5_audio_video_play.html)

**Next topic:**[set volume](../../TA_Automation/Topics/bia_html5_audio_video_set_volume.html)

