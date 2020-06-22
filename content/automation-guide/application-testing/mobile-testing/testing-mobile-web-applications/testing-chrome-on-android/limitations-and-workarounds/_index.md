--- 
title: "Limitations and workarounds of testing Chrome on Android"
linktitle: "Limitations and workarounds of testing Chrome on Android"
description: "This topic categorizes some limitations you might encounter in testing web applications in Android Chrome. Applicable workarounds, if available, are also discussed."
weight: 6
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Android_limitations.html
keywords: "mobile web testing, Chrome, Android, limitations, Chrome testing, Android"
---

This topic categorizes some limitations you might encounter in testing web applications in Android Chrome. Applicable workarounds, if available, are also discussed.

## Page navigation

-   **Problem**: Popup appears unexpectedly before leaving web page and causes playback to hang.

    **Details**: With the currently implemented technical solution, TestArchitectsuppresses all popups from appearing and encumbering automation. Unfortunately, in some cases, this cannot be done, which causes problems.

    **Solution**: While the popup cannot be prevented from appearing, it can be handled by clicking whichever of its buttons causes it to be dismissed. However, due to the difficulty of identifying a button on a JavaScript popup, an indirect method of clicking the button must be implemented. One of two approaches can be taken:

    -   *Solution 1*: Using the [click picture](/TA_Automation/Topics/bia_click_picture.html) built-in action
        1.  Use the [picture capturing tool](/TA_Help/Topics/Additional_features_image_capturing_tool.html) to capture a picture of the popup button you want to click on.
        2.  Save it as a [shared picture check](/TA_Help/Topics/Projects_and_tests_picture_check.html).
        3.  In your test procedure, in order to implement the click, call the click picture action, with its picture argument specifying the name of the saved picture check.
    -   *Solution 2*: Using the [click text](/TA_Automation/Topics/bia_click_text.html) built-in action
        1.  Within the application window, determine the range of locations in which the popup button you want to click may appear. Establish, in units of pixels, the location and dimensions of that area. \(Ensure that the same text displayed by the button to be clicked does not appear elsewhere within this area. If it does, narrow the area.\)
        2.  In your test procedure, call the click text action with the value of its rect argument specifying the area established in step 1 and its text argument holding the text of the button to be clicked.

## Event-fired action model

-   **Problem**: Due to the nature of the [Event fired action](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari.html#li_b5n_gll_yq) model, under some unusual circumstances, it is possible for a predefined event of a built-in action to not properly register with the device. This leads to a failure of the action to have its intended effect. To address this issue, you need to know the exact sequence of events required by the control to achieve the intended effect of the action, and then do one of the following:
    -   Use the [fire event](/TA_Automation/Topics/bia_fire_event.html) built-in action to apply an event to the control. To apply multiple events, use multiple fire event actions and then group them into a user-defined action for your convenience.
    -   Alternatively, program a separate JavaScript file to apply events. During testing, execute the JavaScript file by using the [exec script](/TA_Automation/Topics/bia_exec_script.html) built-in action.

        **Note:** In order to specify events and to program the JavaScript code, you must be familiar with event specification and JavaScript syntax, respectively. Tutorials on these subjects are beyond the scope of this help system. For more information, the following resources are helpful:

        -   [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp).
        -   [JavaScript Tutorial](http://www.w3schools.com/js/).

## The Interface Viewer

-   **Problem**: Running tests fail unexpectedly while the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) is open.

    **Details**: TestArchitect can only create one connection at a time with Google Chrome running on Android. Because the Interface Viewer is still open, it occupies the only connection and prevents playback from connecting to Chrome Android to run your test\(s\).

    **Solution**: Please close the Interface Viewer before running your test\(s\) on Chrome Android.


-   **[Interaction between navigate and popup-handling actions](/TA_Automation/Topics/aut_app_testing_Android_mobile_web_navigate.html)**  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with popup-handling actions
-   **[Interaction between navigate and delete cookies built-in action](/TA_Automation/Topics/aut_app_testing_Android_mobile_web_navigate_delete_cookies.html)**  
This topic describes a possible issue that may arise when you use the navigate built-in action in combination with the delete cookies action.



