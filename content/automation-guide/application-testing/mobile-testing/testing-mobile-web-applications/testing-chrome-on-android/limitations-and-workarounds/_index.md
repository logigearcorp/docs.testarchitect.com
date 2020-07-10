--- 
title: "Limitations and workarounds of testing Chrome on Android"
linktitle: "Limitations and workarounds"
description: "This topic categorizes some limitations you might encounter in testing web applications in Android Chrome. Applicable workarounds, if available, are also discussed."
weight: 6
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_limitations.html
keywords: "mobile web testing, Chrome, Android, limitations, Chrome testing, Android"
---

This topic categorizes some limitations you might encounter in testing web applications in Android Chrome. Applicable workarounds, if available, are also discussed.

## {{< expand >}} Page navigation

-   **Problem**: Popup appears unexpectedly before leaving web page and causes playback to hang.

    **Details**: With the currently implemented technical solution, TestArchitectsuppresses all popups from appearing and encumbering automation. Unfortunately, in some cases, this cannot be done, which causes problems.

    **Solution**: While the popup cannot be prevented from appearing, it can be handled by clicking whichever of its buttons causes it to be dismissed. However, due to the difficulty of identifying a button on a JavaScript popup, an indirect method of clicking the button must be implemented. One of two approaches can be taken:

    -   *Solution 1*: Using the [click picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/click-picture) built-in action
        1.  Use the [picture capturing tool](/user-guide/projects-and-project-items/project-items/picture-checks/picture-capturing-tool/) to capture a picture of the popup button you want to click on.
        2.  Save it as a [shared picture check](/user-guide/projects-and-project-items/project-items/picture-checks/).
        3.  In your test procedure, in order to implement the click, call the click picture action, with its picture argument specifying the name of the saved picture check.
    -   *Solution 2*: Using the [click text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/click-text) built-in action
        1.  Within the application window, determine the range of locations in which the popup button you want to click may appear. Establish, in units of pixels, the location and dimensions of that area. \(Ensure that the same text displayed by the button to be clicked does not appear elsewhere within this area. If it does, narrow the area.\)
        2.  In your test procedure, call the click text action with the value of its rect argument specifying the area established in step 1 and its text argument holding the text of the button to be clicked.

## {{< expand >}} Event-fired action model

-   **Problem**: Due to the nature of the [Event fired action](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/#li_b5n_gll_yq) model, under some unusual circumstances, it is possible for a predefined event of a built-in action to not properly register with the device. This leads to a failure of the action to have its intended effect. To address this issue, you need to know the exact sequence of events required by the control to achieve the intended effect of the action, and then do one of the following:
    -   Use the [fire event](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/fire-event) built-in action to apply an event to the control. To apply multiple events, use multiple fire event actions and then group them into a user-defined action for your convenience.
    -   Alternatively, program a separate JavaScript file to apply events. During testing, execute the JavaScript file by using the [exec script](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/exec-script) built-in action.

        {{<note>}} In order to specify events and to program the JavaScript code, you must be familiar with event specification and JavaScript syntax, respectively. Tutorials on these subjects are beyond the scope of this help system. For more information, the following resources are helpful:

        -   [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp).
        -   [JavaScript Tutorial](http://www.w3schools.com/js/).

## {{< expand >}} The Interface Viewer

-   **Problem**: Running tests fail unexpectedly while the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/) is open.

    **Details**: TestArchitect can only create one connection at a time with Google Chrome running on Android. Because the Interface Viewer is still open, it occupies the only connection and prevents playback from connecting to Chrome Android to run your test\(s\).

    **Solution**: Please close the Interface Viewer before running your test\(s\) on Chrome Android.


-   **[Interaction between navigate and popup-handling actions](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/limitations-and-workarounds/interaction-between-navigate-and-popup-handling-actions)**  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with popup-handling actions
-   **[Interaction between navigate and delete cookies built-in action](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/limitations-and-workarounds/interaction-between-navigate-and-delete-cookies-built-in-action)**  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with the delete cookies action.



