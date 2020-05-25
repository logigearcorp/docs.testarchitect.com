--- 
title: "set volume"
linktitle: "set volume"
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_volume.html
---
# set volume {#bia_html5_audio_set_volume .reference}

## Description { .section}

Set volume for audio and video controls.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the audio or video control.

volume
:   \(Optional\) Volume level \(valid range: 0 to 100; default = 0\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This built-in action applies to HTML5 audio/video controls only.
-   Note that setting a non-zero volume with this action does not override the muted status of the control. If necessary, use action set media property to unmute the control.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:case sensitive

## Applicable Controls { .section}

This action is applicable to the following controls:Audio, Video

## Example { .section}

![](../Images/bia_set_volume_aut.png)

**Action Lines**

![](../Images/bia_set_volume_pgm.png)

**Result**

![](../Images/bia_set_volume_res.png)

**Effect**

![](../Images/bia_set_volume_effect.png)

**Parent topic:**[Media control](../../TA_Automation/Topics/bia_media_control.html)

**Previous topic:**[set media property](../../TA_Automation/Topics/bia_html5_audio_video_set_media_property.html)

