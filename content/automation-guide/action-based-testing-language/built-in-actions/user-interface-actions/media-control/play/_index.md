--- 
title: "play"
linktitle: "play"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_play.html
keywords: "start video at certain time, start audio at certain time, play audio at specified starting point, play video at specified starting point"
---

## Description

Play an audio or video control from a specified starting point.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **start time**

    \(Optional\) Time in the recording at which the audio/video is to start playing \(format: hh:mm:ss; default: current location of audio/video pointer\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:Audio, Video.

## Example

![](/images//Images/bia_play_aut.png)

**Action Lines**

![](/images//Images/bia_play_pgm.png)

**Result**

![](/images//Images/bia_play_res.png)

**Parent topic:**[Media control](/TA_Automation/Topics/bia_media_control.html)

**Previous topic:**[pause](/TA_Automation/Topics/bia_html5_audio_video_pause.html)

**Next topic:**[set media property](/TA_Automation/Topics/bia_html5_audio_video_set_media_property.html)

