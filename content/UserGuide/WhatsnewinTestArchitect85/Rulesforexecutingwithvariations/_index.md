--- 
title: "Rules for executing with variations"
linktitle: "Rules for executing with variations"
aliases: 
    - /TA_Help/Topics/Variations_rules_executing.html
---
# Rules for executing with variations {#variations_rules_executing .concept}

At runtime setup, you have the option of supplying a variation specification to determine which variations of the required project items will be invoked for the test run. It is possible that certain invoked project items will not have variations that are exact matches with your runtime variation spec. In each such instance, TestArchitect applies a set of rules to determine the variation that is to be activated.

1.  [Multiple systems selection](../../TA_Help/Topics/Variations_rules_executing_1.html)  
At execution setup, you have the option of specifying a version variation for each defined system in your repository's **Systems & Platforms** tree.
2.  [Rules for selecting variations for execution](../../TA_Help/Topics/Variations_rules_executing_2.html)  
Obviously, if execution of a test run is specified with the **Keyword** Spanish and the **AUT Version** Car Rental: 1.2, and the test module calls, say, the user-defined login action, then the \{Car Rental: 1.2\} \{Spanish\} variation of login is invoked – if that variation exists!

**Parent topic:**[Variations](../../TA_Help/Topics/Variations.html)

**Previous topic:**[Executing a test with variations](../../TA_Help/Topics/Variations_executing.html)

**Next topic:**[Flow diagram of variation selection](../../TA_Help/Topics/Variations_graphical_summary.html)

**Related information**  


[Rules for creating variations](../../TA_Help/Topics/Variations_rules.html)

[Flow diagram of variation selection](../../TA_Help/Topics/Variations_graphical_summary.html)

