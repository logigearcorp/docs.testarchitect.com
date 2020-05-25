--- 
title: "Action Recorder"
linktitle: "Action Recorder"
aliases: 
    - /TA_Help/Topics/Creating_and_using_actions_AR.html
---
# Action Recorder {#concept_gr2_mf3_js .concept}

To simplify test creation, TestArchitect includes the Action Recorder, a tool which records your manual operations on the application under test, captures the resulting screen output, automatically generates keyword action lines, and writes the action lines to your test. The recorded action lines can then be replayed during automation to simulate user actions against the application under test.

**Important:**

-   The Action Recorder is not available in the TestArchitect package for Linux and macOS machines.
-   For applications running on desktop web browsers, the Action Recorder is currently supported only in Internet Explorer. Support for other browsers is not yet available. If you insist on using the Action Recorder on unsupported web browsers, you will see the following warning message.

    ![](../Images/AR_warning_unsupported_platforms.png)

-   To generate a [move mouse](../../TA_Automation/Topics/bia_move_mouse.html) action during a recording session, you need to let the Action Recorder know the destination point of the move. But simply clicking at a given point generates a [click](../../TA_Automation/Topics/bia_click.html) action, which may not be what you want. Instead, once your mouse is at the desired destination point, indicate that fact by using the key combination Ctrl + Alt + Left-click. That indicates to the Action Recorder both the fact that you wish to generate a mouse move action, and the location for the mouse move.

**Tip:** More on how to use the Action Recorder can be found in [the tutorial chapter for the Action Recorder](../../TA_Tutorials/Topics/Tutorial_Using_the_Action_Recorder.html).

1.  [Recording in TestArchitect](../../TA_Help/Topics/ug_AR_overview.html)  
This topic provides general information on the Action Recorder's recording functionality and controls.
2.  [Action Recorder settings](../../TA_Help/Topics/ug_AR_settings.html)  
Several global settings are available to affect the behavior of the TestArchitect Action Recorder.

**Parent topic:**[Actions](../../reuse/reuse.Creating_and_using_actions.html)

**Previous topic:**[Creating user-scripted actions](../../TA_Help/Topics/ug_Creating_user_scripted_actions.html)

**Related information**  


[Introduction to the Action Recorder](../../TA_Tutorials/Topics/Action_Recorder_Introduction.html)

