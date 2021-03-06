--- 
title: "Control flow actions"
linktitle: "Control flow actions"
weight: 4
aliases: 
    - /TA_Automation/Topics/The_test_language_control_flow_actions.html
---

Control flow actions let you change the order in which action lines are executed.

There are two sets of control flow actions:

-   conditional actions
-   loops

Conditional actions allow you to decide, based on an expression, which actions lines to execute next. The main conditional action is [if](if.html), followed possibly by [else](else.html) and always by [end if](end_if.html). Here is an example:

```

   if #n < 0
   report n is negative 
   else 
   report n is not negative 
   end if 
  
```

If the Boolean expression in the argument of the [if](if.html) action evaluates to true, the lines directly below it are executed until the next [else](else.html) or [end if](end_if.html), whichever comes first. If the expression is false, those lines are skipped, but if there is an [else](else.html) the lines after the [else](else.html) up to the [end if](end_if.html) are executed.

Loops allow you to repeat a sequence of actions until a condition is false. The following example executes the action verify item with increasing values of n until n reaches 10.

```

   while #n < 10 
   verify item #n 
   set variable n #n+1 
   end while 
  
```

This can also be written with an [until](until.html) and [repeat](repeat.html) action pair, as follows:

```

   repeat	
   verify item #n 
   set variable n #n+1 
   until #n>=10 
  
```

**Parent topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Functions](/TA_Automation/Topics/The_test_language_functions.html)

**Next topic:**[Operator precedence](/TA_Automation/Topics/aut_operator_precedence.html)

