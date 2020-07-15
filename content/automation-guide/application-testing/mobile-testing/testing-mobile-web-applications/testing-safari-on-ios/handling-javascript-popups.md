--- 
title: "Handling JavaScript popups on Safari iOS"
linktitle: "Handling JavaScript popups"
description: "TestArchitect offers a special set of actions for interfacing with JavaScript popups, which include alerts, prompts and confirmation dialogs."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_safari_apps_popups.html
keywords: "mobile web testing, Safari, handling JavaScript popups, Safari testing, iOS, JavaScript popups, Safari, iOS, popups"
---

Due to the manner in which the Safari browser engine processes JavaScript code, modal popup windows produced in a web application by JavaScript cannot be tested in a conventional manner. To address this issue, TestArchitect offers a special set of actions for interfacing with JavaScript popups, which include alerts, prompts and confirmation dialogs.These built-in actions allow your tests to properly respond to JavaScript popups, and to capture their displayed content.

## Overview

TestArchitect handles JavaScript popups in Safari iOS by overriding the function calls with its own set of inserted JavaScript.

{{<tip>}} This is evidenced by the fact that, when running under TestArchitect, JavaScript popups on a properly configured iOS device are not displayed on screen. \(But don't take this to mean that such popups do not have to be properly dealt with by your test!\)

The following TestArchitect built-in actions are provided to both scan and handle Safari iOS JavaScript popups:

|Action|Description|
|------|-----------|
|[click on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-on-next-popup)|Click a specified button in a prompt, alert, or confirmation popup.|
|[enter text on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-text-on-next-popup)|Write text to the user-entry field of a prompt popup, then click OK.|
|[get popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message)|Retrieve the messages of one or more of the last sequence of confirmation, prompt, or alert popups.|
|[get popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text)|Retrieve the default text of the user-entry field of one or more prompt popups.|
|[check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message)|Check the messages displayed by one or more confirmation, prompt, or alert popups against their respective expected text strings.|
|[check popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-default-text)|Check the default text of the user-entry fields of one or more prompt popups against their respective expected values.|
|[clear popup queue](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/clear-popup-queue)|Clear any remaining unhandled popups in the current queue.|

{{<note>}} Of the above actions, click on next popup and enter text on next popup are the most critical to proper management of popups, and hence to the successful automation of your test. These are the two actions that actually have a direct impact on popups. If your test uses either or both of these popup-handling actions, but popups are nevertheless displayed on the target device during automation, the test cannot proceed. The cause is most likely due to one of the following:

-   your action specifying a popup button that button does not exist; or
-   the order of appearance of the AUT's popups not being addressed properly by your test procedure.

You will need to stop the execution and debug the test.

## Handling one or a series of popups {{< permerlink >}} {#concept_obs_4pq_vp__section_iv1_x5x_vp} 

Your test of a web application running under Safari iOS may trigger a single popup or a sequence of popups. It is important to understand how TestArchitect handles such popups, and how the popup-directed actions work, so that you can construct your tests properly.

1.  Popup-handling actions. There are two actions that have a direct impact on Safari iOS popups:

    -   **click on next popup**

        Used for alert and confirmation popups.

    -   **enter text on next popup**

        Used for prompt popups.

    It is essential that each JavaScript popup window in a test be dispatched with an appropriate popup-handling action. Furthermore, each such popup-handling action must be called *prior* to the point at which its targeted popup is actually invoked in the tested application. This ensures that TestArchitect’s own JavaScript code overrides the browser's JavaScript popup function calls.

    These two action types are applied to sequences of popups by means of a FIFO \(First In, First Out\) queue, referred to as the popup-handler queue. As each popup-handler action is called, it is added \(enqueued\) to the back of the popup-handler queue. The first encountered popup from the AUT is acted upon by the handler action at the head of the queue. After that, the action is removed from the queue \(dequeued\), and the next popup-handler action, if any, is advanced to head of the queue.

    ![](/images/TA_Automation/Images/popup_queue_diagram.png)

    {{<important>}} In general, the situation to avoid is the one in which a popup is launched when the popup-handler queue is empty. Such unhandled popups make their presence known by the fact that they are visible: that is, without a TestArchitect popup-handling action to provide the overriding JavaScript-processing code, the browser's own JavaScript API allows the popup to be displayed. \(Something you don't want, if you've been following along so far.\) And your test, at least until you resolve the matter, grinds to a halt.

2.  Popup-sampling actions. The remaining popup-directed actions listed above, with the exception of clear popup queue, are used to retrieve and/or verify messages and default text of the alert, confirmation, and prompt popups.

    It has been mentioned that every JavaScript window that pops up needs to have an appropriate popup-handling action waiting for it in the queue, ready to instantly dispatch it to digital oblivion. If that is the case, how can it be possible for an action like get popup message to work, if no popup with a message is allowed to linger around?

    The answer is that, unlike typical actions that test things in a GUI, the popup-sampling actions do not operate in “real time”. Instead, a history of popup windows, including their messages and default text, is maintained for the current popup session. \(We'll define popup session in a moment.\) And it's this history buffer that the popup-sampling actions actually target. \(This history is maintained by the popup-handling actions. For example, before the action enter text on next popup dispatches a prompt window, it scans the popup's message and default text, if any, and saves those items out to the history buffer.\)

    A popup-sampling action targets a specific popup by means of an index, with the most recent popup having an index of 1, the one preceding it an index of 2, and so on. Depending on the action involved, these indexes are appended to either a variable or expected argument. For example, the action below:

    ```
                            expected3
    check popup message     You've got mail
    ```

    checks the message from the third most recent popup against the string “You've got mail”, and results in a Passed or Failed accordingly.

    Note that each of the four popup-sampling actions can address any number of the recent popups in a single action line, and does so by specifying as many of the variable or expected arguments as it needs to. For example, in a session that has just consisted of five popups, the following action line retrieves the message text of the first one, along with the last two:

    ```
                            variable5   variable2   variable1
    get popup message       first_msg   fourth_msg  last_msg     
    ```

3.  clear popup queue. This final action essentially closes out your test's popup session, preparing it for a new one. It does this by clearing out both the popup history buffer and the popup-handler queue. \(Note, however, that we would generally expect a well-written test procedure to already have an empty popup-handler queue by the end of the session.\) cases.

{{<tip>}} As a matter of best practice, it is suggested that you place all the popup-handling actions for a given popup session at the beginning of the session. At the least, this will help ensure that the invocation of popups never “gets ahead” of the sequence of handlers. Remember, a popup handler action must always be invoked *before* its corresponding popup window; once a popup window is launched, it is too late to invoke its handler.

## Session termination {{< permerlink >}} {#concept_obs_4pq_vp__section.Session_termination} 

The built-in clear popup queue action \(discussed above\) is the one explicit means of ending a popup session, but a number of other events also have the same effect. You need to be aware of these, and take them into account when using popup-directed actions, to ensure that the popup history buffer expected by an action still exists. Each of the following events closes out a popup session, clearing out the popup history buffer, as well as the popup-handler queue:

-   Page navigation
-   Page refresh
-   Safari shut down
-   End of a test run

{{<note>}} In the event of an unexpected TestArchitect crash, information in either the history buffer or popup-handler queue may not be cleared out. It is recommended, therefore, that you always initialize your test with a clear popup queue action \(or one of the above events\) prior to starting any popup sessions.

## Example {{< permerlink >}} {#concept_obs_4pq_vp__section.JS_example} 

Suppose that you are testing a web page on Safari with the following scenario:

1.  Click the **new email account** button. A prompt popup appears, requesting an email address to be input. Its message is Specify a new email address and its default text is joe.doe@examples.com.
2.  In the prompt popup, enter an invalid email address and then click **OK**.
3.  The web page then displays an alert popup whose message is Invalid email address. You then click **OK** on that alert popup.
4.  Verify the message displayed in the alert popup.
5.  Verify the message and default input text displayed in the prompt popup.

A typical test procedures employing the above scenario above might look something like this:

![](/images/TA_Automation/Images/handling_popups_pgm.png)

In the above action line procedures, the prompt and alert popups are handled in advanced with enter text on next popup \(line 20\), and click on next popup \(line 23\). The click action \(line 26\) clicks the **new email account** button and triggers a prompt popup. You will not see prompt popups appear since its function call is overridden at runtime by the enter text on next popup \(line 20\). Likewise, the coming alert popup’s function call is overridden by the click on next popup \(line 23\).

check popup message \(line 36\) verifies the message of the alert popup, that is, the last popup. In order to indicate the last popup, the expected argument is used. \(As a convenience, the expected and expected1 arguments are identical – that is, they reference the same thing – as are variable and variable1.\) Likewise, the expected2 argument of check popup message \(line 43\) indicates the second to last popup, the prompt. Finally, check popup default text \(line 49\) verifies the default text of the prompt popup, based on its given message.



