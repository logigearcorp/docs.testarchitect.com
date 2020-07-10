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

-   All existing built-in actions work with at least a subset of the [supported HTML5 tags \(controls\)](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/supported-html5-controls). Additionally, the following built-in actions are applicable to all [supported HTML5 tags \(controls\)](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/supported-html5-controls):

    |||
    |------|------|
    |**Action**|**Description**|
    |[get control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/get-control-property)|Retrieves the value of a control's property.|
    |[check control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-property)|Captures the value of a specified property from a control, then compares it against an expected value. Result is Passed if the values match; otherwise Failed.|
    |[check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists)|Checks for the existence of a control. Result is Passed if the specified control is found; otherwise Failed.|
    |[check control not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-not-exists)|Checks for the nonexistence of a control. Result is Passed if the specified control is not found; otherwise Failed.|
    |[does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist)|Returns a Boolean value to indicate whether the specified control is found.|

-   TestArchitect also offers supplemental built-in actions for the support of HTML5 audio/video controls, offering you the ability to easily interact with media applications that rely on HTML5:

    |||
    |------|------|
    |**Action**|**Description**|
    |[play](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/play)|Plays a video/audio file at a specified starting point.|
    |[pause](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/pause)|Pauses a video/audio file at a specified point.|
    |[set volume](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/set-volume)|Sets volume for audio and video controls.|
    |[set media property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/media-control/set-media-property)|Sets various values for audio and video controls.|




