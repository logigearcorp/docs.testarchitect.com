--- 
title: "pause"
linktitle: "pause"
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_pause.html
---
# pause {#bia_html5_audio_video_pause .reference}

## Description { .section}

Pause an audio or video control at a specified point.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control.

pause time
:   \(Optional\) Time in the recording at which the audio/video is to be paused \(format: hh:mm:ss; default: current location of audio/video pointer\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This built-in action applies to HTML5 audio/video controls only.
-   The pause action works independently of the state of the audio or video control when invoked. That is, whether the player is in play mode beforehand, or where the pointer is, are of no consequence. The effect is that the player is paused, with the audio/video pointer placed at the point specified by pause time.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:Audio, Video.

## Example { .section}

![](../Images/bia_pause_aut.png)

**Action Lines**

![](../Images/bia_pause_pgm.png)

**Result**

![](../Images/bia_pause_res.png)

**Effect**

![](../Images/bia_pause_effect.png)

**Parent topic:**[Media control](../../TA_Automation/Topics/bia_media_control.html)

**Next topic:**[play](../../TA_Automation/Topics/bia_html5_audio_video_play.html)

