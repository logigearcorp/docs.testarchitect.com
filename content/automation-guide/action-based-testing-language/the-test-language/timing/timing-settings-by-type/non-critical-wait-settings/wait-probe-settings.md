--- 
title: "Wait probe settings"
linktitle: "Wait probe settings"
description: "window wait probe and object wait probe are used for non-critical condition tests."
weight: 1
aliases: 
    - /TA_Automation/Topics/timing_wait_probe_settings.html
keywords: "timing, probe settings, window wait probe, object wait probe"
---

window wait probe and object wait probe are used for *non-critical* condition tests.

Probe settings are used for a handful of actions that impose conditions, but don't allow the results of those conditional tests to interrupt the test process. Instead, the results are returned to your action lines, in one form or another \(a variable value of 1 or 0, or if/else control flow\). window wait probe is used in place of window wait in three actions:

-   does window exist
-   if window exists
-   if window not exists

Similarly, object wait probe is used instead of object wait for three actions:

-   does control exist
-   if control exists
-   if control not exists

From a functional standpoint, there is really no essential difference in the way the probe settings, window wait probe and object wait probe, are applied, compared to their critical counterparts, window wait and object wait . \(Although it is true, as specified [here](/automation-guide/action-based-testing-language/the-test-language/timing/sampling-logic#imgtbl_sampling_logic_if), that the if...exists actions do handle the [sampling logic](/automation-guide/action-based-testing-language/the-test-language/timing/sampling-logic) differently\). The primary difference is in the timing values they hold in a typical test environment. The defaults for window wait and object wait are 20 seconds each; for window wait probe and object wait probe, they’re 2 seconds.

And generally, you’ll want those actions that use window/object wait to have relatively large \(maximum\) waits, while the does…exist and if…exists actions need to have short ones. That’s because, in properly designed tests, actions of the former group \(like move window, check control exists, and click tree node\) “expect” their conditions and preconditions to be satisfied. \(Non-satisfaction of those conditions implies there’s either a problem with the test, with the AUT, or with timing settings that are too low.\)

Such expectations are not necessarily the case for does…exist and if…exists actions, however. For example, the action lines

```
  
      if window exists
          *do this*
      else
          *do that*
      end if

```

can handle the nonexistence of the target window just as “gracefully” as the existence of it. But if the window doesn’t exist, and the applicable wait setting is some high value like 20 seconds, you’ll find that your test is getting unnecessarily bogged down.

Granted, you can always change your wait settings on the fly with the setting action. But in a large test, that can get tedious. Hence the purpose of the probe settings is really a matter of convenience. If your does…exist and if…exists actions depended on window wait and object wait, you might well find your tests littered with settings actions that constantly changed the values of those timing settings back and forth.

