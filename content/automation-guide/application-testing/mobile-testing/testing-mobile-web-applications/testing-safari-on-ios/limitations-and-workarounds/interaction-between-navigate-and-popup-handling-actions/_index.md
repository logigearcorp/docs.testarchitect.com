--- 
title: "Interaction between navigate and popup-handling actions"
linktitle: "Interaction between navigate and popup-handling actions"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_navigate.html
---

This topic describes a possible issue that may arise when you use the navigate built-in action in combination with popup-handling actions

It is very common that you'd like to navigate to a specified URL either within an existing Safari window, or from a newly launched instance of Safari. In both of these cases, if your test calls popup-handling action\(s\) right after the [navigate](/TA_Automation/Topics/bia_navigate.html) built-in action, the popup-handler queue may apply the previous page session, instead of the target URL page session. Consequently, the popup-handler queue will not be handled properly on the target URL.

**Note:** Note that, by definition, the readiness of a webpage is established by its [Document.readyState](https://developer.mozilla.org/en-US/docs/Web/API/document.readyState) property. A value of complete indicates that the page is ready.

Because you are already aware of the control triggering a popup window on the target URL, to avoid this problem, it is highly recommended that your test procedure [waits for the control](/TA_Automation/Topics/bia_wait_for_control.html) until it is available before invoking its popup-handling action. In this manner, you are assured that the popup-handling action, and all subsequent ones, apply to the target URL page session.

## Scenario

You want to navigate to a shopping cart page, for example, www.shoppingcart.com, from an existing instance of Safari running on iOS. On the target page, your test will click a button, **Delete this item**, to remove an item from your cart:

1.  Upon clicking the button, a confirmation popup is expected to appear with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  Your test clicks the **OK** button.

The optimum test procedure should be something like the following:

```
                        location                  window               handle
navigate                www.shoppingcart.com      scrumboard

                        window                    control              timeout(second)
wait for control        home                      delete this item     20

                        button
click on next popup     OK

                        window                    control
click                   home                      delete this item 
```

wait for control is used to ensure that the control triggering a confirmation popup is available within 20 seconds before [click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html) is placed into the current popup-handler queue of the shopping cart page

**Parent topic:**[Limitations and workarounds of testing Safari on iOS](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari_limitations.html)

**Next topic:**[Interaction between navigate and delete cookies built-in actions](/TA_Automation/Topics/aut_app_testing_mobile_web_navigate_delete_cookies.html)

