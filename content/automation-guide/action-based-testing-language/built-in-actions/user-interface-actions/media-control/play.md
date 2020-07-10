--- 
title: "play"
linktitle: "play"
description: "Description Play an audio or video control from a specified starting point. Arguments window TA name of the window. control TA name of the control. start time (Optional) Time in the recording at which ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_play.html
keywords: "built-in actions, play, play (action), Safari, macOS (action), play, macOS, Safari (action), start video at certain time, start audio at certain time, play audio at specified starting point, play video at specified starting point"
---

## {{< expand >}} Description

Play an audio or video control from a specified starting point.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **start time**

    \(Optional\) Time in the recording at which the audio/video is to start playing \(format: hh:mm:ss; default: current location of audio/video pointer\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:Audio, Video.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_play_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_play_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_play_res.png)




