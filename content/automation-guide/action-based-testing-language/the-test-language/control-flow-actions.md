--- 
title: "Control flow actions"
linktitle: "Control flow actions"
description: "Control flow actions let you change the order in which action lines are executed."
weight: 4
aliases: 
    - /TA_Automation/Topics/The_test_language_control_flow_actions.html
keywords: "control flow actions (cell expression), control flow (cell expression)"
---

Control flow actions let you change the order in which action lines are executed.

There are two sets of control flow actions:

-   conditional actions
-   loops

Conditional actions allow you to decide, based on an expression, which actions lines to execute next. The main conditional action is [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if), followed possibly by [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else) and always by [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if). Here is an example:

```

   if #n < 0
   report n is negative 
   else 
   report n is not negative 
   end if 
  
```

If the Boolean expression in the argument of the [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) action evaluates to true, the lines directly below it are executed until the next [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else) or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if), whichever comes first. If the expression is false, those lines are skipped, but if there is an [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else) the lines after the [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else) up to the [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if) are executed.

Loops allow you to repeat a sequence of actions until a condition is false. The following example executes the action verify item with increasing values of n until n reaches 10.

```

   while #n < 10 
   verify item #n 
   set variable n #n+1 
   end while 
  
```

This can also be written with an [until](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/until) and [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat) action pair, as follows:

```

   repeat	
   verify item #n 
   set variable n #n+1 
   until #n>=10 
  
```




