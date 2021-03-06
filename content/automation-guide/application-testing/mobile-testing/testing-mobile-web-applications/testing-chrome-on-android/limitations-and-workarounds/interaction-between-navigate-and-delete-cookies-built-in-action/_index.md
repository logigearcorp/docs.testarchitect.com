--- 
title: "Interaction between navigate and delete cookies built-in action"
linktitle: "Interaction between navigate and delete cookies built-in action"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Android_mobile_web_navigate_delete_cookies.html
---

This topic describes a possible issue that may arise when you use the navigate built-in action in combination with the delete cookies action.

A common test scenario is to navigate to a given URL in either a newly launched instance ofChrome, or within an existing Chrome window.In both of these cases, if your test calls the [delete cookies](delete_cookies.html) built-in action right after the [navigate](navigate.html) action, the deletion may be inadvertently applied to the previous page session \(hence that website\), instead of the target URL page session.

To avoid this problem, it is highly recommended that your test procedure [wait for the control](wait_for_control.html) until it is available before invoking the delete cookies action. In this manner, you are assured that the action, and all subsequent ones, are applied to the target URL page session.

## Scenario

You want to navigate to a shopping cart page, for example, www.shoppingcart.com, from the current page www.scrumboard.com. After navigation, your test attempts to delete the cookies of the target page's website.

The optimum test procedure should look something like the following:

```
                        location                  window               handle
navigate                www.shoppingcart.com      scrumboard

                        window                    control              timeout(second)
wait for control        home                      buy this item        20

                        
delete cookies          
```

wait for control is used to ensure that the web page has completely loaded before the delete cookies action is invoked.

**Parent topic:**[Limitations and workarounds of testing Chrome on Android](/TA_Automation/Topics/aut_app_testing_mobile_web_Android_limitations.html)

