--- 
title: "Action Recorder"
linktitle: "Action Recorder"
description: "To simplify test creation, TestArchitect includes the Action Recorder, a tool which records your manual operations on the application under test, captures the resulting screen output, automatically generates keyword action lines, and writes the action lines to your test. The recorded action lines can then be replayed during automation to simulate user actions against the application under test."
weight: 4
aliases: 
    - /TA_Help/Topics/Creating_and_using_actions_AR.html
keywords: "actions, recorder, mapping, interfaces"
---

To simplify test creation, TestArchitect includes the Action Recorder, a tool which records your manual operations on the application under test, captures the resulting screen output, automatically generates keyword action lines, and writes the action lines to your test. The recorded action lines can then be replayed during automation to simulate user actions against the application under test.

{{<important>}}

-   The Action Recorder is not available in the TestArchitect package for Linux and macOS machines.
-   For applications running on desktop web browsers, the Action Recorder is currently supported only in Internet Explorer. Support for other browsers is not yet available. If you insist on using the Action Recorder on unsupported web browsers, you will see the following warning message.

    ![](/images/TA_Help/Images/AR_warning_unsupported_platforms.png)

-   To generate a [move mouse](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/move-mouse) action during a recording session, you need to let the Action Recorder know the destination point of the move. But simply clicking at a given point generates a [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click) action, which may not be what you want. Instead, once your mouse is at the desired destination point, indicate that fact by using the key combination Ctrl + Alt + Left-click. That indicates to the Action Recorder both the fact that you wish to generate a mouse move action, and the location for the mouse move.

{{<tip>}} More on how to use the Action Recorder can be found in [the tutorial chapter for the Action Recorder](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-4-using-the-action-recorder/).

1.  [Recording in TestArchitect](/user-guide/actions/action-recorder/recording-in-testarchitect)  
This topic provides general information on the Action Recorder's recording functionality and controls.
2.  [Action Recorder settings](/user-guide/actions/action-recorder/action-recorder-settings)  
Several global settings are available to affect the behavior of the TestArchitect Action Recorder.



**Related information**  


[Introduction to the Action Recorder](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-4-using-the-action-recorder/introduction-to-the-action-recorder)

