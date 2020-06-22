--- 
title: "HTML5 enhancements"
linktitle: "HTML5 enhancements"
description: "TestArchitect offers significant enhancements for automating an AUT on HTML5. It also provides better support for existing built-in actions and introduces new supplemented built-in actions for the support of HTML5 audio/video controls."
weight: 1
aliases: 
    - /TA_Automation/Topics/HTML5_automation_enhancements.html
keywords: "HTML5, enhancements"
---

TestArchitect offers significant enhancements for automating an AUT on HTML5. It also provides better support for existing built-in actions and introduces new supplemented built-in actions for the support of HTML5 audio/video controls.

-   All existing built-in actions work with at least a subset of the [supported HTML5 tags \(controls\)](/TA_Automation/Topics/HTML5_automation_new_tags.html). Additionally, the following built-in actions are applicable to all [supported HTML5 tags \(controls\)](/TA_Automation/Topics/HTML5_automation_new_tags.html):

    |||
    |------|------|
    |**Action**|**Description**|
    |[get control property](/TA_Automation/Topics/bia_get_control_property.html)|Retrieves the value of a control's property.|
    |[check control property](/TA_Automation/Topics/bia_check_control_property.html)|Captures the value of a specified property from a control, then compares it against an expected value. Result is Passed if the values match; otherwise Failed.|
    |[check control exists](/TA_Automation/Topics/bia_check_control_exists.html)|Checks for the existence of a control. Result is Passed if the specified control is found; otherwise Failed.|
    |[check control not exists](/TA_Automation/Topics/bia_check_control_not_exists.html)|Checks for the nonexistence of a control. Result is Passed if the specified control is not found; otherwise Failed.|
    |[does control exist](/TA_Automation/Topics/bia_does_control_exist.html)|Returns a Boolean value to indicate whether the specified control is found.|

-   TestArchitect also offers supplemental built-in actions for the support of HTML5 audio/video controls, offering you the ability to easily interact with media applications that rely on HTML5:

    |||
    |------|------|
    |**Action**|**Description**|
    |[play](/TA_Automation/Topics/bia_html5_audio_video_play.html)|Plays a video/audio file at a specified starting point.|
    |[pause](/TA_Automation/Topics/bia_html5_audio_video_pause.html)|Pauses a video/audio file at a specified point.|
    |[set volume](/TA_Automation/Topics/bia_html5_audio_video_set_volume.html)|Sets volume for audio and video controls.|
    |[set media property](/TA_Automation/Topics/bia_html5_audio_video_set_media_property.html)|Sets various values for audio and video controls.|




