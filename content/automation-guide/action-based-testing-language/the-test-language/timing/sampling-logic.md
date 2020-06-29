--- 
title: "Sampling logic"
linktitle: "Sampling logic"
description: "At any stage of an action that tests for the presence of a given UI element, a wait may be imposed while the automation continuously samples for that element. It is important to know, based on the action type, the conditions that cause the wait to occur, and those that end it."
weight: 3
aliases: 
    - /TA_Automation/Topics/timing_sampling_logic.html
keywords: "timing, sampling logic"
---

At any stage of an action that tests for the presence of a given UI element, a wait may be imposed while the automation continuously samples for that element. It is important to know, based on the action type, the conditions that cause the wait to occur, and those that end it.

A common misconception is that a wait setting of 5 seconds causes the automation to pause for 5 seconds when an action using that setting is executed. That is not necessarily the case. Instead, the wait settings generally specify a *maximum* wait time.

As an example, let’s examine how the check window exists and check window not exists actions use the window wait timer. When check window exists executes, it checks for the availability of the designated window. If the window exists, a pass result is reported, and the window wait timer is essentially ignored; if, on the other hand, the window is not immediately present, the automation continually samples the AUT, at a rate of 10 times per second, to see if the window does appear. If the window fails to make an appearance before the window wait timer runs out, a fail is reported.

Another misconception is that the wait settings \(window wait, object wait, etc.\) specify a maximum wait time for a given UI element to appear. But wait settings should not be thought of as being tied to any particular outcome or expectation. Instead, in most cases, it is more accurate to say that they specify a maximum wait time for a given *condition to be satisfied*. We can see this in the case of check window not exists. In contrast with its counterpart, this action looks for the *nonexistence* of the specified window in order to report a pass. It also \(if necessary\) samples the AUT continually, and if the window is found to not exist at any time prior to the window wait timeout, the test reports a pass; otherwise, it reports a fail.

The sampling logic that is applied by the check window exists and check window not exists actions is illustrated in the following table:

![](/images/TA_Automation/Images/timing_tbl_check_window_exists_sampling_logic.png)

\*N/A = not applicable

Hence, in the case of each of these actions, if the respective condition is satisfied at some point, the automation waits only as long as it needs to. But that doesn’t necessarily mean that it’s a good idea to set window wait to a very high number. If your automation involves numerous sequential tests, and there’s a possibility that a substantial number of these tests will fail the check window exists/not exists tests, then a high wait time value can indeed have an adverse impact on test time.

The following tables provide the general rules that explain when the automation pauses to allow a given condition or precondition to be satisfied, and when it proceeds without further waiting:

**For all actions that have preconditions:**

![](/images/TA_Automation/Images/timing_tbl_sampling_logic-preconditions.png)

**For the check…exists and does…exist actions:**

![](/images/TA_Automation/Images/timing_tbl_sampling_logic-check_exist-does_exist.png)

**For if…exists actions:** For these, the sampling logic is slightly different. Rather than base the logic on the condition specified as the *if* condition, the automation simply asks whether or not the referenced element exists. \(That is, it doesn’t care whether the action is an if…exists or if…not exists action.\) Hence the logic looks like this:

![](/images/TA_Automation/Images/timing_tbl_sampling_logic-if_exists.png)

So, the general case for the result of an if…exists is simply that, if the specified item exists when the test ends, if…exists control goes to the `if` block, and if…not exists control falls to the next `else`/`else if`/`end if`. Conversely, if the item does not exist, the flows are opposite: if…not exists control goes to the `if` block, and if… exists control falls to the next `else`/`else if`/`end if`.

Finally, the following table lists each timing setting along with indications of whether it is used for conditions or preconditions, whether its timeout is ever associated with a failed test, and when its timer is triggered.

![](/images/TA_Automation/Images/timing_tbl_timing_setting_attributes.png)




