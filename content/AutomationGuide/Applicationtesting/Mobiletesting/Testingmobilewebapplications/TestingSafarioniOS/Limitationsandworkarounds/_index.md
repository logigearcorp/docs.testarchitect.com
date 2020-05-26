--- 
title: "Limitations and workarounds of testing Safari on iOS"
linktitle: "Limitations and workarounds"
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_limitations.html
---
# Limitations and workarounds of testing Safari on iOS {#concept_limitation_Safari_iOS .concept}

This topic categorizes some limitations you might encounter in testing web applications in Safari on iOS. Applicable workarounds, if available, are also discussed.

## Cross-domain web pages { .section}

-   **Problem**: **[click on next popup](bia_click_on_next_popup.html) built-in action does not work properly.**

    **Details**: In the event that your web page resides at domain A, but includes content from other domains, TestArchitect is unable to override the function calls of popups that do not originate from domain A.

    **Solution**: At this time, no solution to this problem exists.

-   **Details**: **Unable to launch a new web page when your test applies a [click](bia_click.html) action to a control that links to a different page.**

    **Problem**: It is not uncommon to have one's test click on a control inside a frame and expect the link to open in a new window or a tab. With current limitations, however, the link is only loaded inside the frame and overrides the former content.

    **Solution**: At this time, no solution to this problem exists.


## Event-fired action model { .section}

-   **Problem**: **The [enter](bia_enter.html)action does not work on tags whose contenteditable attribute is true.**

    **Details**: [enter](bia_enter.html) works on HTML elements that are conventional editable fields, such as <input\>. With HTML5, any HTML element can now can be defined as editable, as long as it has its [contenteditable](http://www.w3schools.com/tags/att_global_contenteditable.asp) attribute set to true. \(For example ,`<p contenteditable= "true"/>` represents an editable paragraph.\) The enter action, however, is unable to work on such HTML elements.

    **Solution**: Use the [exec script](bia_exec_script.html) built-in action to run JavaScript code that changes the text of the control.

-   **Problem**: Due to the nature of the [Event fired action](aut_app_testing_mobile_web_Safari.md#li_b5n_gll_yq) model, under some unusual circumstances, it is possible for a predefined event of a built-in action to not properly register with the device. This leads to a failure of the action to have its intended effect. To address this issue, you need to know the exact sequence of events required by the control to achieve the intended effect of the action, and then do one of the following:
    -   Use the [fire event](bia_fire_event.html) built-in action to apply an event to the control. To apply multiple events, use multiple fire event actions and then group them into a user-defined action for your convenience.
    -   Alternatively, program a separate JavaScript file to apply events. During testing, execute the JavaScript file by using the [exec script](bia_exec_script.html) built-in action.

        **Note:** In order to specify events and to program the JavaScript code, you must be familiar with event specification and JavaScript syntax, respectively. Tutorials on these subjects are beyond the scope of this help system. For more information, the following resources are helpful:

        -   [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp).
        -   [JavaScript Tutorial](http://www.w3schools.com/js/).

## Page navigation { .section}

-   **Problem**: **Popup-handler queue may affect on a wrong page session.**

    **Details**: If your test calls popup-handling action\(s\) right after the [navigate](bia_navigate.html) built-in action, and the target page is not ready in time, the popup-handler queue may be applied to the previous page session, instead of the target URL page session. \(Note that, by definition, the readiness of a webpage is established by its [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/document.readyState) property. A value of complete indicates that the page is ready.\) Consequently, popups appear and cause test automation hang.

    **Solution**: You may use the [wait for the control](bia_wait_for_control.html) built-in action to wait for the availability of a given control on the target web page before invoking navigate.

    **Tip:** Refer to [Interaction between navigate and popup-handling actions](aut_app_testing_mobile_web_navigate.html) for details.

-   **Problem**: **TestArchitect may clear cookies on a wrong page session.**

    **Details**: If your test calls the [delete cookies](bia_delete_cookies.html) built-in action right after the [navigate](bia_navigate.html) built-in action, the action may delete cookies of the previous page session, instead of the target URL page if the target page is not ready yet. \(Note that, by definition, the readiness of a webpage is established by its [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/document.readyState) property. A value of complete indicates that the page is ready.

    **Solution**: You may use the [wait for the control](bia_wait_for_control.html) built-in action to wait for the availability of a given control on the target web page before invoking delete cookies.

    **Tip:** Refer to [Interaction between navigate and delete cookies built-in action](aut_app_testing_mobile_web_navigate_delete_cookies.html) for details.


1.  [Interaction between navigate and popup-handling actions](../../TA_Automation/Topics/aut_app_testing_mobile_web_navigate.html)  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with popup-handling actions
2.  [Interaction between navigate and delete cookies built-in actions](../../TA_Automation/Topics/aut_app_testing_mobile_web_navigate_delete_cookies.html)  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with the delete cookies action.

**Parent topic:**[Testing Safari on iOS](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html)

**Previous topic:**[List of supported Safari iOS built-in actions](../../TA_Automation/Topics/aut_app_testing_mobile_web_Safari_actions.html)

