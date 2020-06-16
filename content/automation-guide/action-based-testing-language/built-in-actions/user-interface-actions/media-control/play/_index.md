--- 
title: "play"
linktitle: "play"
description: "Description Play an audio or video control from a specified starting point. Arguments window TA name of the window. control TA name of the control. start time (Optional) Time in the recording at which ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_play.html
keywords: "built-in actions, play, play (action), Safari, macOS (action), play, macOS, Safari (action), start video at certain time, start audio at certain time, play audio at specified starting point, play video at specified starting point"
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

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:Audio, Video.

## Example

![](/images/TA_Automation/Images/bia_play_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_play_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_play_res.png)




