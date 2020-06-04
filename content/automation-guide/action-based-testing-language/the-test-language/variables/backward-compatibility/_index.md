--- 
title: "Backward compatibility"
linktitle: "Backward compatibility"
weight: 2
aliases: 
    - /TA_Automation/Topics/The_test_language_variables_backward_compatible.html
---

TestArchitect 7.22.1 introduces the concept of local scope. Prior versions of TestArchitect used the action set variable to create variables, all of which were global in scope. TestArchitect 7.22.1 maintains support for the set variable action.

Starting with TestArchitect 7.22.1, set variable works pretty much as it did in prior versions of the application. If you are familiar with earlier versions, you may recall that the form of set variable is:

![](/images//Images/set_variable_ex02.png)

If the named variable is not visible at the time of execution, it is created with global scope, and assigned the value specified by the value argument.

If a variable with the name given by the variable argument is indeed visible at the point of execution, the specified value is simply assigned to it. No change is made to the scope of the variable.

**Parent topic:**[Variables](/TA_Automation/Topics/The_test_language_variables.html)

