--- 
title: "Rules for selecting variations for execution"
linktitle: "Rules for selecting variations for execution"
description: "Obviously, if execution of a test run is specified with the Keyword Spanish and the AUT Version Car Rental: 1.2, and the test module calls, say, the user-defined login action, then the {Car Rental: 1.2} {Spanish} variation of login is invoked – if that variation exists!"
weight: 2
aliases: 
    - /TA_Help/Topics/Variations_rules_executing_2.html
keywords: "variations, execution rules, variation selection"
---

Obviously, if execution of a test run is specified with the **Keyword** Spanish and the **AUT Version** Car Rental: 1.2, and the test module calls, say, the user-defined login action, then the \{Car Rental: 1.2\} \{Spanish\} variation of login is invoked – if that variation exists!But it would defeat the purpose of variations \(that is, to make life easier for the tester or automation engineer\) if TestArchitect required that a variation exactly matching all allowable sets of execution parameters exist for every test module, action, interface and data set invoked in a test run.

Instead, TestArchitect follows a set of rules for determining which variation of each test module, action, interface, and data set gets invoked when called. These rules are described narratively in the following sections. A comprehensive description of the entire algorithm for variation selection is then presented in flowchart form, in [Graphical summary of variation selection.](/TA_Help/Topics/Variations_graphical_summary.html).

**Note:** Although we talk about variation selection taking place at the time of execution, these rules are actually applied at compile time, which takes place just prior to the actual execution of the test.

1.  [Execution with no variation-related parameters](/TA_Help/Topics/Variations_rules_executing_2_1.html)  
If, at the start of execution, both fields \(**Keyword** and **AUT Version**\) of the Variation Specification section are left blank, then the default variation of an invoked test module, action, interface, or data set constitutes an exact match, and is invoked.
2.  [Execution with keywords only](/TA_Help/Topics/Variations_rules_executing_2_2.html)  
 When a test is launched with keywords specified, TestArchitect applies a set of rules to determine the appropriate variations to use.
3.  [Execution with only version nodes](/TA_Help/Topics/Variations_rules_executing_2_3.html)  
In this scenario, the runtime variation specification contains no keywords, but one or more system/version nodes are provided \(that is, there is a version run set\).
4.  [Execution with both keywords and version nodes](/TA_Help/Topics/Variations_rules_executing_2_4.html)  
When the Execute Test dialog box's runtime variation specification includes both keywords and version nodes, the decision-making performed is largely a combination of those described in the previous two cases.



