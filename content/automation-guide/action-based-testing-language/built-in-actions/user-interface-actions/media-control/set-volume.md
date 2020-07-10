--- 
title: "set volume"
linktitle: "set volume"
description: "Description Set volume for audio and video controls. Arguments window TA name of the window. control TA name of the audio or video control. volume (Optional) Volume level (valid range: 0 to 100; ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_volume.html
keywords: "built-in actions, set volume, set volume (action), Safari, macOS (action), set volume, macOS, Safari (action), volume settings, set volume for audio, set volume for video"
---

## {{< expand >}} Description

Set volume for audio and video controls.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the audio or video control.

-   **volume**

    \(Optional\) Volume level \(valid range: 0 to 100; default = 0\).


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   Note that setting a non-zero volume with this action does not override the muted status of the control. If necessary, use action set media property to unmute the control.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:case sensitive

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:Audio, Video

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_set_volume_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_volume_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_volume_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_volume_effect.png)



