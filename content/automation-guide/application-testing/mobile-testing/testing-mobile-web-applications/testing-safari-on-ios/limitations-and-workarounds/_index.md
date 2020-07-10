--- 
title: "Limitations and workarounds of testing Safari on iOS"
linktitle: "Limitations and workarounds"
description: "This topic categorizes some limitations you might encounter in testing web applications in Safari on iOS. Applicable workarounds, if available, are also discussed."
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_limitations.html
keywords: "mobile web testing, Safari, limitations, Safari testing, iOS"
---

This topic categorizes some limitations you might encounter in testing web applications in Safari on iOS. Applicable workarounds, if available, are also discussed.

## {{< expand >}} Cross-domain web pages

-   **Problem**: **[click on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-on-next-popup) built-in action does not work properly.**

    **Details**: In the event that your web page resides at domain A, but includes content from other domains, TestArchitect is unable to override the function calls of popups that do not originate from domain A.

    **Solution**: At this time, no solution to this problem exists.

-   **Details**: **Unable to launch a new web page when your test applies a [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click) action to a control that links to a different page.**

    **Problem**: It is not uncommon to have one's test click on a control inside a frame and expect the link to open in a new window or a tab. With current limitations, however, the link is only loaded inside the frame and overrides the former content.

    **Solution**: At this time, no solution to this problem exists.


## {{< expand >}} Event-fired action model

-   **Problem**: **The [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter)action does not work on tags whose contenteditable attribute is true.**

    **Details**: [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) works on HTML elements that are conventional editable fields, such as <input\>. With HTML5, any HTML element can now can be defined as editable, as long as it has its [contenteditable](http://www.w3schools.com/tags/att_global_contenteditable.asp) attribute set to true. \(For example ,`<p contenteditable= "true"/>` represents an editable paragraph.\) The enter action, however, is unable to work on such HTML elements.

    **Solution**: Use the [exec script](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/exec-script) built-in action to run JavaScript code that changes the text of the control.

-   **Problem**: Due to the nature of the [Event fired action](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/#li_b5n_gll_yq) model, under some unusual circumstances, it is possible for a predefined event of a built-in action to not properly register with the device. This leads to a failure of the action to have its intended effect. To address this issue, you need to know the exact sequence of events required by the control to achieve the intended effect of the action, and then do one of the following:
    -   Use the [fire event](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/fire-event) built-in action to apply an event to the control. To apply multiple events, use multiple fire event actions and then group them into a user-defined action for your convenience.
    -   Alternatively, program a separate JavaScript file to apply events. During testing, execute the JavaScript file by using the [exec script](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/exec-script) built-in action.

        {{<note>}} In order to specify events and to program the JavaScript code, you must be familiar with event specification and JavaScript syntax, respectively. Tutorials on these subjects are beyond the scope of this help system. For more information, the following resources are helpful:

        -   [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp).
        -   [JavaScript Tutorial](http://www.w3schools.com/js/).

## {{< expand >}} Page navigation

-   **Problem**: **Popup-handler queue may affect on a wrong page session.**

    **Details**: If your test calls popup-handling action\(s\) right after the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action, and the target page is not ready in time, the popup-handler queue may be applied to the previous page session, instead of the target URL page session. \(Note that, by definition, the readiness of a webpage is established by its [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/document.readyState) property. A value of complete indicates that the page is ready.\) Consequently, popups appear and cause test automation hang.

    **Solution**: You may use the [wait for the control](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/wait-for-control) built-in action to wait for the availability of a given control on the target web page before invoking navigate.

    {{<tip>}} Refer to [Interaction between navigate and popup-handling actions](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/limitations-and-workarounds/interaction-between-navigate-and-popup-handling-actions) for details.

-   **Problem**: **TestArchitect may clear cookies on a wrong page session.**

    **Details**: If your test calls the [delete cookies](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/delete-cookies) built-in action right after the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action, the action may delete cookies of the previous page session, instead of the target URL page if the target page is not ready yet. \(Note that, by definition, the readiness of a webpage is established by its [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/document.readyState) property. A value of complete indicates that the page is ready.

    **Solution**: You may use the [wait for the control](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/wait-for-control) built-in action to wait for the availability of a given control on the target web page before invoking delete cookies.

    {{<tip>}} Refer to [Interaction between navigate and delete cookies built-in action](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/limitations-and-workarounds/interaction-between-navigate-and-delete-cookies-built-in-actions) for details.


1.  [Interaction between navigate and popup-handling actions](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/limitations-and-workarounds/interaction-between-navigate-and-popup-handling-actions)  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with popup-handling actions
2.  [Interaction between navigate and delete cookies built-in actions](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/limitations-and-workarounds/interaction-between-navigate-and-delete-cookies-built-in-actions)  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with the delete cookies action.



