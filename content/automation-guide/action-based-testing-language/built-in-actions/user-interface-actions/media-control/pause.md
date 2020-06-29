--- 
title: "pause"
linktitle: "pause"
description: "Description Pause an audio or video control at a specified point. Arguments window TA name of the window. control TA name of the control. pause time (Optional) Time in the recording at which the ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_pause.html
keywords: "built-in actions, pause, pause (action), Safari, macOS (action), pause, macOS, Safari (action), pause audio at certain time, pause video at specified point, pause audio at specified point"
---

## Description

Pause an audio or video control at a specified point.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control.

-   **pause time**

    \(Optional\) Time in the recording at which the audio/video is to be paused \(format: hh:mm:ss; default: current location of audio/video pointer\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   The pause action works independently of the state of the audio or video control when invoked. That is, whether the player is in play mode beforehand, or where the pointer is, are of no consequence. The effect is that the player is paused, with the audio/video pointer placed at the point specified by pause time.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:Audio, Video.

## Example

![](/images/TA_Automation/Images/bia_pause_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_pause_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_pause_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_pause_effect.png)



