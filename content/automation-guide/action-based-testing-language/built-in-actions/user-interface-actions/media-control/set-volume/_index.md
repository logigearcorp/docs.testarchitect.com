--- 
title: "set volume"
linktitle: "set volume"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_volume.html
---
keyword: [set volume, volume settings, set volume for audio, set volume for video]
---

# set volume

## Description

Set volume for audio and video controls.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the audio or video control.

-   **volume**

    \(Optional\) Volume level \(valid range: 0 to 100; default = 0\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to HTML5 audio/video controls only.
-   Note that setting a non-zero volume with this action does not override the muted status of the control. If necessary, use action set media property to unmute the control.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:case sensitive

## Applicable Controls

This action is applicable to the following controls:Audio, Video

## Example

![](/images//Images/bia_set_volume_aut.png)

**Action Lines**

![](/images//Images/bia_set_volume_pgm.png)

**Result**

![](/images//Images/bia_set_volume_res.png)

**Effect**

![](/images//Images/bia_set_volume_effect.png)

**Parent topic:**[Media control](/TA_Automation/Topics/bia_media_control.html)

**Previous topic:**[set media property](/TA_Automation/Topics/bia_html5_audio_video_set_media_property.html)

