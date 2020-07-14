--- 
title: "set media property"
linktitle: "set media property"
description: "Description Set values for audio and video controls. Arguments window TA name of the window. control TA name of the audio or video control. property Setting to be written to. Allowable values: loop ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_html5_audio_video_set_media_property.html
keywords: "built-in actions, set media property, set media property (action), Safari, macOS (action), set media property, macOS, Safari (action), set properties for audio, set properties for video"
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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:Audio, Video

## Example

![](/images/TA_Automation/Images/bia_set_media_property_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_set_media_property_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_media_property_res.png)

Effect

![](/images/TA_Automation/Images/bia_set_media_property_effect.png)



