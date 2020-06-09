--- 
title: "set media property"
linktitle: "set media property"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_media_property.html
keywords: "set media property, set properties for audio, set properties for video"
---

## Description

Set values for audio and video controls.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the audio or video control.

-   **property**

    Setting to be written to.

    Allowable values:

    -   loop \(set control to continuously replay its current audio or video file\)
    -   muted
    -   full screen \(video only\)
    -   show controls \(video only\)
-   **value**

    Value to which the setting is to be set.

    Allowable values:

    -   true
    -   false

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:Audio, Video

## Example

![](/images//Images/bia_set_media_property_aut.png)

**Action Lines**

![](/images//Images/bia_set_media_property_pgm.png)

**Result**

![](/images//Images/bia_set_media_property_res.png)

**Effect**

![](/images//Images/bia_set_media_property_effect.png)

**Parent topic:**[Media control](/TA_Automation/Topics/bia_media_control.html)

**Previous topic:**[play](/TA_Automation/Topics/bia_html5_audio_video_play.html)

**Next topic:**[set volume](/TA_Automation/Topics/bia_html5_audio_video_set_volume.html)

